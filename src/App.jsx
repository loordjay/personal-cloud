import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import About from './components/About';
import Navbar from './components/Navbar';

// Main App Component - Manages routing and authentication state
const App = () => {
    const [page, setPage] = useState('landing'); // landing, login, signup, dashboard
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            // In a real app, you would verify the token with the backend and get user info
            setUser({ name: localStorage.getItem('userName') || 'User' });
            setPage('dashboard');
        } else {
            // Default to landing page if no token
            setPage('landing');
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setToken(null);
        setUser(null);
        setPage('landing');
    };

    const navigateTo = (pageName) => {
        setPage(pageName);
    };

    const handleAuthSuccess = (newToken, userName) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('userName', userName);
        setToken(newToken);
        setUser({ name: userName });
        setPage('dashboard');
    }

    const renderPage = () => {
        switch (page) {
            case 'login':
                return <AuthForm isLogin={true} navigateTo={navigateTo} onAuthSuccess={handleAuthSuccess} />;
            case 'signup':
                return <AuthForm isLogin={false} navigateTo={navigateTo} onAuthSuccess={handleAuthSuccess} />;
            case 'dashboard':
                return <Dashboard user={user} onLogout={handleLogout} navigateTo={navigateTo} />;
            case 'profile':
                return <Profile user={user} navigateTo={navigateTo} onLogout={handleLogout} />;
            case 'about':
                return <About navigateTo={navigateTo} />;
            case 'landing':
            default:
                return <LandingPage navigateTo={navigateTo} />;
        }
    };

    return (
        <>
            <Navbar navigateTo={navigateTo} currentPage={page} user={user} />
            <div className="min-h-screen bg-[#F9FAFB] pt-16">{renderPage()}</div>
        </>
    );
};

export default App;
