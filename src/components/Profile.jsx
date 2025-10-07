import React, { useState, useEffect } from 'react';
import { User, Mail, Calendar, LogOut, ArrowLeft, Loader, Key, Camera, Trash2, X, Check } from 'lucide-react';

const Profile = ({ user, navigateTo, onLogout }) => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Modal states
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showPictureModal, setShowPictureModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Form states
    const [passwordForm, setPasswordForm] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [deletePassword, setDeletePassword] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    // Action states
    const [actionLoading, setActionLoading] = useState(false);
    const [actionMessage, setActionMessage] = useState('');

    // Handler functions
    const handleChangePassword = async () => {
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            setActionMessage('New passwords do not match');
            return;
        }

        setActionLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/auth/change-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    oldPassword: passwordForm.oldPassword,
                    newPassword: passwordForm.newPassword
                })
            });

            const data = await response.json();
            if (response.ok) {
                setActionMessage('Password changed successfully!');
                setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
                setTimeout(() => {
                    setShowPasswordModal(false);
                    setActionMessage('');
                }, 2000);
            } else {
                setActionMessage(data.message || 'Failed to change password');
            }
        } catch (error) {
            setActionMessage('Network error occurred');
        } finally {
            setActionLoading(false);
        }
    };

    const handleProfilePictureUpdate = async () => {
        if (!selectedFile) {
            setActionMessage('Please select a file');
            return;
        }

        setActionLoading(true);
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('profilePicture', selectedFile);

            const response = await fetch('/api/auth/profile-picture', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                setActionMessage('Profile picture updated successfully!');
                setSelectedFile(null);
                // Refetch profile to update the UI with new picture
                await fetchProfile();
                setTimeout(() => {
                    setShowPictureModal(false);
                    setActionMessage('');
                }, 2000);
            } else {
                setActionMessage(data.message || 'Failed to update profile picture');
            }
        } catch (error) {
            setActionMessage('Network error occurred');
        } finally {
            setActionLoading(false);
        }
    };

    const handleDeleteAccount = async () => {
        if (!deletePassword) {
            setActionMessage('Please enter your password');
            return;
        }

        setActionLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/auth/delete-account', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ password: deletePassword })
            });

            const data = await response.json();
            if (response.ok) {
                setActionMessage('Account deleted successfully!');
                setTimeout(() => {
                    onLogout();
                }, 2000);
            } else {
                setActionMessage(data.message || 'Failed to delete account');
            }
        } catch (error) {
            setActionMessage('Network error occurred');
        } finally {
            setActionLoading(false);
        }
    };

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigateTo('landing');
                return;
            }

            const response = await fetch('/api/auth/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch profile');
            }

            const data = await response.json();
            setProfileData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [navigateTo]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <Loader className="w-8 h-8 animate-spin mx-auto text-indigo-600 dark:text-indigo-400"/>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (error || !profileData) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 dark:text-red-400">Error loading profile: {error}</p>
                    <button
                        onClick={() => navigateTo('dashboard')}
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => navigateTo('dashboard')}
                                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Dashboard
                            </button>
                        </div>
                        <button
                            onClick={onLogout}
                            className="flex items-center px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-2" />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                                {profileData.profilePicture ? (
                                    <img
                                        src={profileData.profilePicture}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User className="w-10 h-10 text-white" />
                                )}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">{profileData.name}</h1>
                                <p className="text-indigo-100">Aura Cloud User</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Profile Information</h2>

                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <User className="w-6 h-6 text-gray-500 dark:text-gray-400 mr-4" />
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                                    <p className="text-lg font-medium text-gray-800 dark:text-white">{profileData.name}</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <Mail className="w-6 h-6 text-gray-500 dark:text-gray-400 mr-4" />
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="text-lg font-medium text-gray-800 dark:text-white">{profileData.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <Calendar className="w-6 h-6 text-gray-500 dark:text-gray-400 mr-4" />
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                                        {new Date(profileData.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Actions */}
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Account Actions</h3>
                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    setShowPasswordModal(true);
                                    setActionMessage('');
                                }}
                                className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <Key className="w-5 h-5" />
                                Change Password
                            </button>
                            <button
                                onClick={() => {
                                    setShowPictureModal(true);
                                    setActionMessage('');
                                }}
                                className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <Camera className="w-5 h-5" />
                                Update Profile Picture
                            </button>
                            <button
                                onClick={() => {
                                    setShowDeleteModal(true);
                                    setActionMessage('');
                                }}
                                className="w-full text-left px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <Trash2 className="w-5 h-5" />
                                Delete Account
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Change Password Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Change Password</h3>
                            <button
                                onClick={() => setShowPasswordModal(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    value={passwordForm.oldPassword}
                                    onChange={(e) => setPasswordForm({...passwordForm, oldPassword: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter current password"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    value={passwordForm.newPassword}
                                    onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter new password"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    value={passwordForm.confirmPassword}
                                    onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Confirm new password"
                                />
                            </div>

                            {actionMessage && (
                                <p className={`text-sm ${actionMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                    {actionMessage}
                                </p>
                            )}

                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={handleChangePassword}
                                    disabled={actionLoading}
                                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {actionLoading ? <Loader className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                    {actionLoading ? 'Changing...' : 'Change Password'}
                                </button>
                                <button
                                    onClick={() => setShowPasswordModal(false)}
                                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Profile Picture Modal */}
            {showPictureModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Update Profile Picture</h3>
                            <button
                                onClick={() => setShowPictureModal(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Select Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                />
                            </div>

                            {selectedFile && (
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Selected: {selectedFile.name}
                                </div>
                            )}

                            {actionMessage && (
                                <p className={`text-sm ${actionMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                    {actionMessage}
                                </p>
                            )}

                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={handleProfilePictureUpdate}
                                    disabled={actionLoading || !selectedFile}
                                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {actionLoading ? <Loader className="w-4 h-4 animate-spin" /> : <Camera className="w-4 h-4" />}
                                    {actionLoading ? 'Uploading...' : 'Update Picture'}
                                </button>
                                <button
                                    onClick={() => setShowPictureModal(false)}
                                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Account Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">Delete Account</h3>
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                                <p className="text-red-800 dark:text-red-200 text-sm">
                                    <strong>Warning:</strong> This action cannot be undone. All your files and data will be permanently deleted.
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    value={deletePassword}
                                    onChange={(e) => setDeletePassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter your password to confirm"
                                />
                            </div>

                            {actionMessage && (
                                <p className={`text-sm ${actionMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                    {actionMessage}
                                </p>
                            )}

                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={handleDeleteAccount}
                                    disabled={actionLoading}
                                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {actionLoading ? <Loader className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                    {actionLoading ? 'Deleting...' : 'Delete Account'}
                                </button>
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
