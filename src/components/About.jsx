import React from 'react';
import { Cloud, Shield, Zap, Users, Star, ArrowRight, CheckCircle, FileText, Lock, Smartphone, Mail, Phone, MapPin, Globe, Award, Heart, Code, Database, Server, Eye, Target, TrendingUp, Clock, Settings, Layers, Infinity, Key, Fingerprint, AlertTriangle, BookOpen, Briefcase, Headphones, HelpCircle, MessageSquare, Calendar, Building, Lightbulb, Rocket, Puzzle, Wrench, Search, MessageCircle, ExternalLink, Github, Twitter, Camera } from 'lucide-react';
import bgImage from '../assets/ceo.png';

const About = ({ navigateTo }) => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white py-24 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-8">
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
                            <Cloud className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-3xl font-bold tracking-wide">Aura Cloud</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Revolutionizing<br />
                        <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            Cloud Storage
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-12">
                        Secure, simple, and beautiful cloud storage for everyone. Experience the future of personal data management with Aura Cloud's cutting-edge technology and user-centric design.
                    </p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">500K+</div>
                            <div className="text-indigo-100 text-sm uppercase tracking-wide">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">99.9%</div>
                            <div className="text-indigo-100 text-sm uppercase tracking-wide">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">10M+</div>
                            <div className="text-indigo-100 text-sm uppercase tracking-wide">Files Stored</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-indigo-100 text-sm uppercase tracking-wide">Support</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigateTo('signup')}
                            className="group bg-white text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigateTo('login')}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">About Me</h2>
                        <div className="flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/3">
                                <img
                                    src={bgImage}
                                    alt="Profile"
                                    className="w-55 h-55 mx-auto rounded-2xl object-cover shadow-2xl"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Creator of Aura Cloud</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                                    Hi, I'm the founder and creator of Aura Cloud. With a passion for technology and a vision to make data storage simple, secure, and beautiful, I built Aura Cloud to empower individuals and businesses to take control of their digital lives.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                                    My journey started with a simple idea: why should cloud storage be complicated or compromise on privacy? Aura Cloud was born from this belief, combining cutting-edge security with an intuitive user experience that anyone can enjoy.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <Mail className="w-5 h-5 text-indigo-600" />
                                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">creator@auracloud.com</span>
                                    </div>
                                </div>
                                <div className="flex space-x-6 mt-6 justify-start">
                                    <a href="https://www.linkedin.com/in/jayesh-koli-0aa2b6217/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                    <a href="https://github.com/loordjay" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                                        <Camera className="w-6 h-6" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                    <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                                        <Star className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section id="product" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Product</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                            Aura Cloud offers a comprehensive suite of cloud storage solutions designed for modern users.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">File Storage</h3>
                                <p className="text-gray-600 dark:text-gray-300">Securely store and organize all your files with unlimited storage options.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Collaboration</h3>
                                <p className="text-gray-600 dark:text-gray-300">Share files and collaborate with team members seamlessly.</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <Smartphone className="w-12 h-12 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Cross-Platform</h3>
                                <p className="text-gray-600 dark:text-gray-300">Access your files from any device, anywhere, anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gradient-to-br from-white via-gray-50 to-indigo-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Experience the next generation of cloud storage with our cutting-edge features designed for modern users.
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            End-to-End Encryption
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Your files are encrypted before leaving your device, ensuring complete privacy and security.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Smartphone className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            Offline Access
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Download files for offline viewing and editing, work anywhere without internet connectivity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            Version History
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Keep track of file changes with automatic versioning and easy restoration options.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            Advanced Sharing
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Share files securely with password protection, expiration dates, and granular permissions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section id="security" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-indigo-700 dark:from-slate-300 dark:to-indigo-300 bg-clip-text text-transparent mb-4">
                            Uncompromising Security
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Your data security is our top priority. We use industry-leading encryption and security measures to protect your files.
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Shield className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            Bank-Level Encryption
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                            AES-256 encryption protects your files at rest and in transit, ensuring the highest level of security for your data.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Lock className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            Zero-Knowledge Architecture
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                            We cannot access your files even if we wanted to. Your encryption keys remain exclusively in your control.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

            {/* Company Section */}
            <section id="company" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Our Company
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Aura Cloud is committed to providing the best cloud storage experience for our users.
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            Our Mission
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                            To make cloud storage simple, secure, and accessible to everyone, without compromising on privacy or user experience. We believe everyone deserves powerful cloud storage that just works.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Eye className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            Our Vision
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                            A world where individuals and businesses have complete control over their digital data. We envision a future where privacy and security are the foundation of all cloud services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Latest from Our Blog
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Stay updated with the latest news, tips, and insights from the Aura Cloud team.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
                                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <BookOpen className="w-16 h-16 text-white" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full">
                                            Security
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">5 min read</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                        The Future of Zero-Knowledge Encryption
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        Explore how zero-knowledge encryption is revolutionizing data privacy and what it means for the future of cloud storage.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <span className="text-xs font-bold text-white">AC</span>
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Alex Chen</span>
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Dec 15, 2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
                                <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                                    <TrendingUp className="w-16 h-16 text-white" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
                                            Technology
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">7 min read</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                        AI-Powered File Organization: What's Next?
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        Discover how artificial intelligence is transforming the way we organize and manage our digital files in the cloud.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                                                <span className="text-xs font-bold text-white">SJ</span>
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Sarah Johnson</span>
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Dec 12, 2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
                                <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                                    <Users className="w-16 h-16 text-white" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                                            Business
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">6 min read</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                        Building Trust in Cloud Storage: Our Journey
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        Learn about our commitment to transparency and how we're building the most trusted cloud storage platform.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                                <span className="text-xs font-bold text-white">MR</span>
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Mike Rodriguez</span>
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Dec 10, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center mx-auto">
                                <BookOpen className="w-5 h-5 mr-2" />
                                Visit Our Blog
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            
            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Ready to experience the future of cloud storage? Reach out to us through any of these channels.
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                    Email Us
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Send us an email and we'll get back to you within 24 hours.
                                </p>
                                <a href="mailto:hello@auracloud.com" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300">
                                    hello@auracloud.com
                                </a>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                    Call Us
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Speak directly with our support team for immediate assistance.
                                </p>
                                <a href="tel:+1-555-0123" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300">
                                    +1 (555) 012-3456
                                </a>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                    Visit Us
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Come say hello at our headquarters in the heart of San Francisco.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 font-semibold">
                                    123 Cloud Street<br />
                                    San Francisco, CA 94105
                                </p>
                            </div>
                            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Globe className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                    Online
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Connect with us online through our website and social channels.
                                </p>
                                <a href="https://auracloud.com" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300">
                                    www.auracloud.com
                                </a>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Need Immediate Help?</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Our support team is available 24/7 to assist you with any questions or issues you might have.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Start Live Chat
                                    </button>
                                    <button className="group bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:border-indigo-600 text-gray-800 dark:text-white hover:text-indigo-600 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Advanced Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Advanced Features</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Infinity className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Unlimited Storage</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Scale your storage needs without limits. Our advanced compression and deduplication technologies ensure efficient use of resources while maintaining lightning-fast access speeds.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">AI-Powered Sync</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Intelligent synchronization that learns your patterns and optimizes file transfers. Experience seamless collaboration with real-time conflict resolution and smart backup scheduling.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Eye className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Advanced Analytics</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Gain deep insights into your storage usage with comprehensive analytics. Track file access patterns, storage trends, and collaboration metrics to optimize your workflow.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Settings className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Custom Integrations</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Connect Aura Cloud with your favorite tools and services. Our extensive API and webhook system enables seamless integration with productivity suites, development tools, and business applications.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Layers className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Multi-Version Control</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Keep track of every change with unlimited version history. Restore previous versions instantly and compare changes with our advanced diff visualization tools.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Global CDN</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Lightning-fast file delivery worldwide through our global content delivery network. Experience consistent performance regardless of your location with edge computing capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Team</h2>
                    <div className="max-w-6xl mx-auto">
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
                            Meet the passionate individuals behind Aura Cloud who are dedicated to revolutionizing cloud storage.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center group">
                                <div className="w-32 h-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-4xl font-bold text-white">JK</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Jayesh Koli</h3>
                                <p className="text-indigo-600 font-medium mb-4">Founder & CEO</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Visionary leader with 10+ years in cloud technology. Passionate about making data storage simple and secure for everyone.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-4xl font-bold text-white">JK</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Jay Koli</h3>
                                <p className="text-indigo-600 font-medium mb-4">Head of Security</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Cybersecurity expert ensuring your data remains protected with bank-level security measures and zero-knowledge encryption.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-4xl font-bold text-white">LORD</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Lord Jay</h3>
                                <p className="text-indigo-600 font-medium mb-4">Lead Developer</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Full-stack developer crafting the beautiful and intuitive interface that makes Aura Cloud a joy to use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Values</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Security First</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Your data security is our highest priority. We implement the most advanced security measures to protect your files.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">User-Centric</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Every decision we make is guided by our users' needs. We design with empathy and focus on user experience.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Innovation</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We continuously push the boundaries of what's possible in cloud storage technology and user experience.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Transparency</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    We believe in open communication and being transparent about our practices, security measures, and business operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

            {/* Privacy Section */}
            <section id="privacy" className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Privacy & Security</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                            Your privacy is our foundation. Learn how we protect and respect your data.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                                        <Lock className="w-6 h-6 text-indigo-600 mr-3" />
                                        Zero-Knowledge Encryption
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Your files are encrypted on your device before being uploaded. Even we cannot access your data without your encryption keys.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                                        <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                                        Privacy by Design
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Privacy is built into every aspect of our service. We never sell your data or use it for advertising purposes.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                                <p className="text-gray-600 dark:text-gray-300 text-center">
                                    For more details, please read our full <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">Privacy Policy</a> and <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">Security Documentation</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;
