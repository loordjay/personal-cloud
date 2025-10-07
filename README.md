# Aura Cloud

![Aura Cloud Logo](src/assets/aura.png)

A modern, secure, and beautiful personal cloud storage application that reimagines how you store, organize, and access your files. Built with React, Express.js, and powered by Google Cloud Storage for reliable file management.

## 🌟 Features

### Core Functionality
- **Secure File Storage**: Upload, download, and manage files with enterprise-grade security
- **User Authentication**: JWT-based authentication with signup, login, and profile management
- **Cross-Platform Access**: Access your files from any device - desktop, mobile, tablet, or web browser
- **Real-time File Management**: Instant upload/download with progress tracking
- **Profile Management**: Update profile picture, change password, and manage account settings
- **File Organization**: Automatic file categorization and metadata storage

### Security & Privacy
- **End-to-End Encryption**: All files are encrypted during transit and at rest
- **Bank-Level Security**: Enterprise-grade security measures and compliance
- **Private Storage**: Your data remains private and secure
- **Access Control**: Granular permissions and secure sharing options

### User Experience
- **Intuitive Interface**: Clean, modern UI designed for simplicity and ease of use
- **Responsive Design**: Optimized for all screen sizes and devices
- **Fast Performance**: Lightning-fast upload/download speeds
- **Offline Support**: Basic offline functionality for critical operations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **Tailwind CSS** - Utility-first CSS framework (via custom styling)

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling
- **JWT** - JSON Web Tokens for secure authentication
- **bcryptjs** - Password hashing for security
- **Google Cloud Storage** - Scalable object storage
- **Multer** - Middleware for handling file uploads

### Development Tools
- **ESLint** - Code linting and formatting
- **Nodemon** - Automatic server restart during development

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud instance)
- **Google Cloud Platform** account with Storage enabled
- **Git** for version control

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/aura-cloud.git
cd aura-cloud
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Frontend Setup
```bash
cd ../  # Return to root directory
npm install
```

### 4. Environment Configuration
Create a `.env` file in the `backend` directory with the following variables:

```env
# Database
MONGO_URI=mongodb://localhost:27017/aura-cloud

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Google Cloud Storage
GCS_PROJECT_ID=your-gcp-project-id
GCS_CLIENT_EMAIL=your-service-account-email@gcp-project.iam.gserviceaccount.com
GCS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GCS_BUCKET_NAME=your-cloud-storage-bucket-name

# Server
PORT=5000
NODE_ENV=development

# CORS (for production)
CORS_ORIGIN=http://localhost:5173
```

## 🔧 Usage

### Development Mode

1. **Start the Backend Server**:
```bash
cd backend
npm run dev
```
The backend will start on `http://localhost:5000`

2. **Start the Frontend Development Server**:
```bash
# In a new terminal, from the root directory
npm run dev
```
The frontend will start on `http://localhost:5173`

3. **Access the Application**:
Open your browser and navigate to `http://localhost:5173`

### Production Build

1. **Build the Frontend**:
```bash
npm run build
```

2. **Start the Backend in Production**:
```bash
cd backend
NODE_ENV=production npm start
```

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | User registration | No |
| POST | `/api/auth/login` | User login | No |
| GET | `/api/auth/profile` | Get user profile | Yes |
| PUT | `/api/auth/change-password` | Change user password | Yes |
| PUT | `/api/auth/profile-picture` | Update profile picture | Yes |
| DELETE | `/api/auth/delete-account` | Delete user account | Yes |

### File Management Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/files/upload` | Upload a file | Yes |
| GET | `/api/files` | Get user's files | Yes |
| GET | `/api/files/:id/download` | Generate download link | Yes |
| DELETE | `/api/files/:id` | Delete a file | Yes |

### Request/Response Examples

#### User Registration
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### File Upload
```bash
POST /api/files/upload
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: multipart/form-data

# Include file in FormData as 'file'
```

## 🏗️ Frontend Structure

```
src/
├── components/
│   ├── AuthForm.jsx          # Login/Signup forms
│   ├── Dashboard.jsx         # Main dashboard with file management
│   ├── LandingPage.jsx       # Marketing landing page
│   ├── Navbar.jsx            # Navigation component
│   ├── Profile.jsx           # User profile management
│   ├── Sidebar.jsx           # Dashboard sidebar
│   ├── About.jsx             # About page
│   └── ...
├── assets/                   # Static assets (images, videos)
├── App.jsx                   # Main application component
├── App.css                   # Global styles
├── index.css                 # Additional styles
└── main.jsx                  # Application entry point
```

### Key Components

- **App.jsx**: Main routing and authentication state management
- **LandingPage.jsx**: Feature-rich marketing page with pricing plans
- **Dashboard.jsx**: File upload, download, and management interface
- **AuthForm.jsx**: Handles both login and signup functionality
- **Profile.jsx**: User profile settings and account management

## 🚀 Deployment

### Environment Variables for Production
Update your production `.env` file with appropriate values:

```env
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/aura-cloud
```

### Build Commands
```bash
# Frontend build
npm run build

# Backend production start
cd backend && npm start
```

### Recommended Hosting
- **Frontend**: Vercel, Netlify, or any static hosting service
- **Backend**: Heroku, DigitalOcean, AWS, or any Node.js hosting
- **Database**: MongoDB Atlas for cloud database
- **Storage**: Google Cloud Storage (already configured)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

**Developer**: Jayesh Koli

- **LinkedIn**: [Jayesh Koli](https://www.linkedin.com/in/jayesh-koli-0aa2b6217/)
- **GitHub**: [@loordjay](https://github.com/loordjay)
- **Email**: [Contact via LinkedIn]

### Support
- **Documentation**: This README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/your-username/aura-cloud/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/aura-cloud/discussions)

---

**Aura Cloud** - Your personal space, reimagined for clarity. 🌟

*Built with ❤️ using modern web technologies*
