const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// --- Mongoose Schemas ---
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

const FileSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    fileType: { type: String, required: true },
    size: { type: Number, required: true },
    uploadDate: { type: Date, default: Date.now },
    storagePath: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const User = mongoose.model('User', UserSchema);
const File = mongoose.model('File', FileSchema);

// --- Google Cloud Storage Configuration ---
// This part requires a service account key file.
// For this example, we'll use environment variables.
// Ensure your .env has the GCS credentials.
const storage = new Storage({
    projectId: process.env.GCS_PROJECT_ID,
    credentials: {
        client_email: process.env.GCS_CLIENT_EMAIL,
        // The private key needs to be parsed correctly from the env variable.
        // It often contains newline characters.
        private_key: process.env.GCS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
});

const bucketName = process.env.GCS_BUCKET_NAME;
const bucket = storage.bucket(bucketName);

// --- Multer Configuration for local storage ---
const upload = multer({ dest: 'uploads/' });

// --- Authentication Middleware ---
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token required' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

// --- API Routes ---

// 1. User Signup
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide all fields' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ token, name: newUser.name });

    } catch (error) {
        res.status(500).json({ message: 'Server error during signup', error: error.message });
    }
});

// 2. User Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token, name: user.name });

    } catch (error) {
        res.status(500).json({ message: 'Server error during login', error: error.message });
    }
});

// 2.5. Get User Profile
app.get('/api/auth/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            profilePicture: user.profilePicture || '',
            createdAt: user.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error while fetching profile', error: error.message });
    }
});

// 2.6. Change Password
app.put('/api/auth/change-password', authMiddleware, async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: 'Please provide old and new passwords' });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify old password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update password
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error while changing password', error: error.message });
    }
});

// 2.7. Update Profile Picture
app.put('/api/auth/profile-picture', authMiddleware, upload.single('profilePicture'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No profile picture uploaded' });
    }

    try {
        // Create full URL for the uploaded file
        const profilePictureUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        // Update user with profile picture URL
        await User.findByIdAndUpdate(req.user.id, { profilePicture: profilePictureUrl });

        res.status(200).json({
            message: 'Profile picture updated successfully',
            profilePictureUrl: profilePictureUrl
        });
    } catch (error) {
        console.error('Profile picture update error:', error);
        res.status(500).json({ message: 'Failed to update profile picture' });
    }
});

// 2.8. Delete Account
app.delete('/api/auth/delete-account', authMiddleware, async (req, res) => {
    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ message: 'Please provide your password to confirm account deletion' });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify password before deletion
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password is incorrect' });
        }

        // Delete all user's files from GCS and MongoDB
        const userFiles = await File.find({ owner: req.user.id });
        for (const file of userFiles) {
            try {
                await bucket.file(file.storagePath).delete();
            } catch (gcsError) {
                console.error('Error deleting file from GCS:', gcsError);
            }
        }

        // Delete all file records from MongoDB
        await File.deleteMany({ owner: req.user.id });

        // Delete user account
        await User.findByIdAndDelete(req.user.id);

        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error while deleting account', error: error.message });
    }
});


// 3. File Upload
app.post('/api/files/upload', authMiddleware, upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    let responseSent = false;

    try {
        // Create a unique filename to avoid overwrites
        const storagePath = `${req.user.id}-${Date.now()}-${req.file.originalname}`;
        const file = bucket.file(storagePath);

        const stream = file.createWriteStream({
            metadata: {
                contentType: req.file.mimetype,
            },
        });

        stream.on('error', (err) => {
            console.error('GCS Upload Error:', err);
            if (!responseSent) {
                responseSent = true;
                res.status(500).json({ message: 'Failed to upload file to cloud storage.' });
            }
        });

        stream.on('finish', async () => {
            try {
                // Save file metadata to MongoDB
                const newFile = new File({
                    fileName: req.file.originalname,
                    fileType: req.file.mimetype,
                    size: req.file.size,
                    storagePath: storagePath,
                    owner: req.user.id,
                });
                await newFile.save();
                if (!responseSent) {
                    responseSent = true;
                    res.status(201).json(newFile);
                }
            } catch (dbError) {
                console.error('DB Save Error:', dbError);
                if (!responseSent) {
                    responseSent = true;
                    res.status(500).json({ message: 'File uploaded but failed to save metadata.' });
                }
            }
        });

        stream.end(req.file.buffer);
    } catch (err) {
        console.error('Unexpected Error:', err);
        if (!responseSent) {
            responseSent = true;
            res.status(500).json({ message: 'Unexpected server error during file upload.' });
        }
    }
});


// 4. Get User's Files
app.get('/api/files', authMiddleware, async (req, res) => {
    try {
        const files = await File.find({ owner: req.user.id }).sort({ uploadDate: -1 });
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: 'Server error while fetching files', error: error.message });
    }
});

// 5. Download File
app.get('/api/files/:id/download', authMiddleware, async (req, res) => {
    try {
        const file = await File.findOne({ _id: req.params.id, owner: req.user.id });
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        const fileRef = bucket.file(file.storagePath);
        const [exists] = await fileRef.exists();
        if (!exists) {
            return res.status(404).json({ message: 'File not found in storage' });
        }

        // Create a signed URL for download (expires in 1 hour)
        const [url] = await fileRef.getSignedUrl({
            version: 'v4',
            action: 'read',
            expires: Date.now() + 60 * 60 * 1000, // 1 hour
        });

        res.status(200).json({ downloadUrl: url, fileName: file.fileName });
    } catch (error) {
        res.status(500).json({ message: 'Server error while generating download link', error: error.message });
    }
});

// 6. Delete File
app.delete('/api/files/:id', authMiddleware, async (req, res) => {
    try {
        const file = await File.findOne({ _id: req.params.id, owner: req.user.id });
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        // Delete from GCS
        const fileRef = bucket.file(file.storagePath);
        await fileRef.delete();

        // Delete from MongoDB
        await File.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error while deleting file', error: error.message });
    }
});


// --- Serve Frontend ---
// This part is for production builds. In development, the React dev server handles this.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
