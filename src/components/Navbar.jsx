import React, { useState, useEffect } from 'react';
import { Cloud, Moon, Sun, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ navigateTo, currentPage, user }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Load theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Close mobile menu when navigating
    const handleNavigate = (page) => {
        navigateTo(page);
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo" onClick={() => handleNavigate('landing')}>
                    <Cloud className="navbar-logo-icon" />
                    <span className="navbar-logo-text">Aura Cloud</span>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-menu">
                    <button
                        onClick={() => handleNavigate('about')}
                        className={`navbar-link ${currentPage === 'about' ? 'active' : ''}`}
                    >
                        About
                    </button>
                    {user ? (
                        <>
                            <button
                                onClick={() => handleNavigate('dashboard')}
                                className={`navbar-link ${currentPage === 'dashboard' ? 'active' : ''}`}
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => handleNavigate('profile')}
                                className={`navbar-link ${currentPage === 'profile' ? 'active' : ''}`}
                            >
                                Profile
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => handleNavigate('login')}
                                className={`navbar-link ${currentPage === 'login' ? 'active' : ''}`}
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => handleNavigate('signup')}
                                className="navbar-button"
                            >
                                Sign Up For Free
                            </button>
                        </>
                    )}
                    <button
                        onClick={toggleTheme}
                        className="navbar-theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <button
                    onClick={() => handleNavigate('about')}
                    className={`navbar-mobile-link ${currentPage === 'about' ? 'active' : ''}`}
                >
                    About
                </button>
                {user ? (
                    <>
                        <button
                            onClick={() => handleNavigate('dashboard')}
                            className={`navbar-mobile-link ${currentPage === 'dashboard' ? 'active' : ''}`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => handleNavigate('profile')}
                            className={`navbar-mobile-link ${currentPage === 'profile' ? 'active' : ''}`}
                        >
                            Profile
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => handleNavigate('login')}
                            className={`navbar-mobile-link ${currentPage === 'login' ? 'active' : ''}`}
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => handleNavigate('signup')}
                            className="navbar-mobile-button"
                        >
                            Sign Up For Free
                        </button>
                    </>
                )}
                <button
                    onClick={toggleTheme}
                    className="navbar-mobile-theme-toggle"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
                    <span className="theme-text">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
