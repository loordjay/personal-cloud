import React, { useState, useEffect } from 'react';
import { UploadCloud, Loader, AlertCircle, Menu, FileIcon, Download, Trash } from 'lucide-react';
import Sidebar from './Sidebar';

const Dashboard = ({ user, onLogout, navigateTo }) => {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [notifications, setNotifications] = useState([]);

    // Notification management
    const addNotification = (type, message) => {
        const id = Date.now();
        setNotifications((prev) => [...prev, { id, type, message }]);
    };

    const removeNotification = (id) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    // Inline Notification component
    const Notification = ({ id, type, message, onDismiss }) => {
        useEffect(() => {
            const timer = setTimeout(() => {
                onDismiss(id);
            }, 5000);
            return () => clearTimeout(timer);
        }, [id, onDismiss]);

        const baseStyle = "max-w-sm w-full mb-4 p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out";
        const typeStyles = {
            success: "bg-green-600 text-white shadow-green-500/80",
            error: "bg-red-600 text-white shadow-red-500/80",
            confirm: "bg-yellow-600 text-white shadow-yellow-500/80",
        };
        const auraGlow = {
            success: "drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]",
            error: "drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]",
            confirm: "drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]",
        };

        const className = `${baseStyle} ${typeStyles[type] || typeStyles.success} ${auraGlow[type] || auraGlow.success} translate-x-0`;

        return (
            <div
                className={className}
                role="alert"
            >
                <div className="flex justify-between items-center">
                    <p className="font-semibold">{message}</p>
                    <button
                        onClick={() => onDismiss(id)}
                        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
                        aria-label="Dismiss notification"
                    >
                        &times;
                    </button>
                </div>
            </div>
        );
    };

    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    const fetchFiles = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/files', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch files.');
            const data = await response.json();
            setFiles(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setSelectedFile(file);
        setUploading(true);
        setError('');
        setUploadProgress(0);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/files/upload', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Upload failed');
            }

            // Refresh file list after successful upload
            fetchFiles();

        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
            setUploadProgress(0);
            setSelectedFile(null);
        }
    };

    // FileCard component inside Dashboard to access functions
    const FileCard = ({ file }) => {
        return (
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-md transition">
                <div className="p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-600 h-24">
                    <FileIcon className="w-5 h-5 text-gray-400 dark:text-gray-300"/>
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                    <p className="font-semibold text-gray-700 dark:text-gray-300 truncate" title={file.fileName}>{file.fileName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{formatBytes(file.size)}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                        {new Date(file.uploadDate).toLocaleDateString()}
                    </p>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={async () => {
                                try {
                                    const token = localStorage.getItem('token');
                                    const response = await fetch(`/api/files/${file._id}/download`, {
                                        headers: { 'Authorization': `Bearer ${token}` }
                                    });
                                    if (!response.ok) throw new Error('Failed to get download link');
                                    const data = await response.json();
                                    // Trigger download
                                    const link = document.createElement('a');
                                    link.href = data.downloadUrl;
                                    link.download = data.fileName;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    addNotification('success', `Downloaded: ${data.fileName}`);
                                } catch (err) {
                                    addNotification('error', err.message);
                                }
                            }}
                            className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                            title="Download"
                        >
                            <Download className="w-5 h-5" />
                        </button>
                        <button
                            onClick={async () => {
                                // Show confirmation notification instead of window.confirm
                                const confirmId = Date.now();
                                const confirmPromise = new Promise((resolve) => {
                                    const handleConfirm = (confirmed) => {
                                        removeNotification(confirmId);
                                        resolve(confirmed);
                                    };
                                    setNotifications((prev) => [
                                        ...prev,
                                        {
                                            id: confirmId,
                                            type: 'confirm',
                                            message: 'Are you sure you want to delete this file?',
                                            onConfirm: () => handleConfirm(true),
                                            onCancel: () => handleConfirm(false),
                                        },
                                    ]);
                                });

                                const confirmed = await confirmPromise;
                                if (!confirmed) return;

                                try {
                                    const token = localStorage.getItem('token');
                                    const response = await fetch(`/api/files/${file._id}`, {
                                        method: 'DELETE',
                                        headers: { 'Authorization': `Bearer ${token}` }
                                    });
                                    if (!response.ok) throw new Error('Failed to delete file');
                                    addNotification('success', 'File deleted successfully');
                                    // Refresh file list after deletion
                                    fetchFiles();
                                } catch (err) {
                                    addNotification('error', err.message);
                                }
                            }}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                            title="Remove"
                        >
                            <Trash className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            {/* Sidebar and Main Content Wrapper */}
            <div className="flex flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 gap-4 rounded-lg">
                {/* Sidebar */}
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    onLogout={onLogout}
                    navigateTo={(page) => {
                        navigateTo(page);
                        setIsSidebarOpen(false); // Close sidebar after navigation
                    }}
                />

                {/* Main Content */}
                <main className="flex-1 flex flex-col rounded-lg bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:ml-2 border border-gray-300 dark:border-gray-700">
                    <header className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center rounded-t-lg">
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="sm:hidden mr-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Toggle sidebar"
                            >
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </button>
                            <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Welcome, {user?.name || 'User'}!</h1>
                        </div>
                        <div>
                            <label htmlFor="file-upload" className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition flex items-center">
                                <UploadCloud className="w-5 h-5 mr-2"/>
                                Upload File
                            </label>
                            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} disabled={uploading} />
                        </div>
                    </header>

                    <div className="flex-1 p-6 overflow-y-auto">
                        {uploading && (
                            <div className="mb-4 p-4 bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                                <p className="font-semibold text-blue-800 dark:text-blue-400">Uploading...</p>
                                {selectedFile && (
                                    <p className="text-blue-700 dark:text-blue-300 mt-1">
                                        {selectedFile.name} ({formatBytes(selectedFile.size)})
                                    </p>
                                )}
                                 {/* In a real app, you would implement progress tracking */}
                            </div>
                        )}
                         {error && (
                            <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-400 rounded-lg flex items-center">
                                <AlertCircle className="w-5 h-5 mr-2"/>
                                <span>{error}</span>
                            </div>
                        )}

                        {isLoading ? (
                            <div className="text-center py-10">
                                <Loader className="w-8 h-8 animate-spin mx-auto text-indigo-600 dark:text-indigo-400"/>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">Loading files...</p>
                            </div>
                        ) : (
                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {files.length === 0 && !error && (
                                    <div className="col-span-full text-center py-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                        <p className="text-gray-500 dark:text-gray-400">You haven't uploaded any files yet.</p>
                                        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Click "Upload File" to get started.</p>
                                    </div>
                                )}
                                {files.map(file => (
                                    <FileCard key={file._id} file={file} />
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
            {/* Notifications container */}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
                {notifications.map(({ id, type, message, onConfirm, onCancel }) => (
                    type === 'confirm' ? (
                        <ConfirmNotification
                            key={id}
                            id={id}
                            message={message}
                            onConfirm={() => {
                                onConfirm();
                            }}
                            onCancel={() => {
                                onCancel();
                            }}
                        />
                    ) : (
                        <Notification
                            key={id}
                            id={id}
                            type={type}
                            message={message}
                            onDismiss={removeNotification}
                        />
                    )
                ))}
            </div>
        </div>
    );
};

const ConfirmNotification = ({ id, message, onConfirm, onCancel }) => {
    return (
        <div
            className="max-w-sm w-full mb-4 p-4 rounded-lg shadow-lg bg-yellow-600 text-white drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]"
            role="alert"
        >
            <p className="font-semibold mb-2">{message}</p>
            <div className="flex justify-end space-x-4">
                <button
                    onClick={onCancel}
                    className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-3 py-1 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={onConfirm}
                    className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-3 py-1 rounded"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
