import React, { useState } from 'react';
import { Cloud, AlertCircle, Loader, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

const AuthForm = ({ isLogin, navigateTo, onAuthSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
        const payload = isLogin ? { email, password } : { name, email, password };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'An error occurred.');
            }

            onAuthSuccess(data.token, data.name);

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 p-4 transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

            <div className="w-full max-w-md mx-auto relative z-10">
                {/* Main Card */}
                <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 max-w-lg mx-auto transform transition-all duration-300 hover:shadow-3xl">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                            <div className="relative flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                                <Cloud className="text-white w-8 h-8" />
                                <span className="text-white font-bold text-xl">Aura Cloud</span>
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                            {isLogin ? 'Welcome Back' : 'Join Aura Cloud'}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            {isLogin ? 'Access your files securely' : 'Start your journey today'}
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-6 py-4 rounded-2xl relative mb-6 flex items-center text-sm font-medium shadow-sm">
                            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 text-red-500" />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field (Signup only) */}
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="block text-gray-700 dark:text-gray-300 font-semibold text-sm uppercase tracking-wide" htmlFor="name">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base transition-all duration-200 placeholder-gray-400"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold text-sm uppercase tracking-wide" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base transition-all duration-200 placeholder-gray-400"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold text-sm uppercase tracking-wide" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-14 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base transition-all duration-200 placeholder-gray-400"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-indigo-400 disabled:to-purple-400 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-base transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <>
                                    <Loader className="animate-spin mr-3 w-5 h-5" />
                                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                                </>
                            ) : (
                                <>
                                    {isLogin ? 'Sign In' : 'Create Account'}
                                    <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer Link */}
                    <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-400">
                            {isLogin ? "New to Aura Cloud?" : 'Already have an account?'}
                            <button
                                onClick={() => navigateTo(isLogin ? 'signup' : 'login')}
                                className="ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2"
                            >
                                {isLogin ? 'Create Account' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
};

export default AuthForm;
