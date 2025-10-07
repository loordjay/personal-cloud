import React, { useState, useEffect } from 'react';
import { Cloud, Shield, Zap, Users, Star, ArrowRight, CheckCircle, FileText, Lock, Smartphone, Linkedin, Github, Briefcase, Instagram, Twitter, Mail } from 'lucide-react';
import brainVideo from '../assets/bdflow.mp4';
import './LandingPage.css';
import bgImage from '../assets/aura.png';


const LandingPage = ({ navigateTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const plansData = [
        {
            planName: 'Free',
            price: '$0',
            pricePeriod: '/ month',
            description: 'Perfect for getting started and exploring our features.',
            features: [
                '5 GB Secure Storage',
                'Basic File Sharing',
                'Access on Web & Mobile',
                'Standard Email Support'
            ],
            buttonText: 'Get Started',
            isFeatured: false,
        },
        {
            planName: 'Premium',
            price: '$9.99',
            pricePeriod: '/ month',
            description: 'Ideal for power users and small teams who need more space.',
            features: [
                '100 GB Secure Storage',
                'Advanced File Sharing',
                'Collaboration Tools',
                'Priority Email Support'
            ],
            buttonText: 'Choose Premium',
            isFeatured: true,
        },
        {
            planName: 'Advanced',
            price: '$19.99',
            pricePeriod: '/ month',
            description: 'For businesses that require advanced control and support.',
            features: [
                '1 TB Secure Storage',
                'Advanced Security Controls',
                'File Version History',
                'Team Management Tools',
                '24/7 Dedicated Support'
            ],
            buttonText: 'Choose Advanced',
            isFeatured: false,
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Designer",
            content: "Aura Cloud has transformed how I organize my design files. The interface is beautiful and incredibly intuitive.",
            avatar: "SJ"
        },
        {
            name: "Mike Chen",
            role: "Developer",
            content: "The security features and ease of use make Aura Cloud my go-to solution for file storage and collaboration.",
            avatar: "MC"
        },
        {
            name: "Emma Davis",
            role: "Project Manager",
            content: "Finally, a cloud storage solution that doesn't compromise on privacy or user experience. Highly recommended!",
            avatar: "ED"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <main className="flex-grow">
                <section className="hero-section min-h-screen flex items-center">
                    {/* Background Video */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={brainVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                    <div className="hero-content">
                        {/* Logo and Badge */}
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
                                <Cloud className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-800 dark:text-white">Aura Cloud</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight mb-6">
                            Your personal space,<br />
                            <span className="bg-gradient-to-r from-indigo-800 to-purple-300 bg-clip-text text-transparent">
                                reimagined for clarity.
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
                            Securely store, organize, and access your files from anywhere. Aura Cloud is the simple, private, and beautiful home for your data.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={() => navigateTo('signup')}
                                className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            >
                                Get Started for Free
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => navigateTo('login')}
                                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                Sign In
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>Free 5GB storage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>End-to-end encryption</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 sm:py-24 bg-white dark:bg-gray-800">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                Why Choose Aura Cloud?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Experience the perfect blend of security, simplicity, and powerful features designed for modern users.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Bank-Level Security</h3>
                                <p className="text-gray-600 dark:text-gray-300">Your files are protected with enterprise-grade encryption and security measures.</p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Lightning Fast</h3>
                                <p className="text-gray-600 dark:text-gray-300">Upload and download files at blazing speeds with our optimized infrastructure.</p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <Smartphone className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Cross-Platform</h3>
                                <p className="text-gray-600 dark:text-gray-300">Access your files from any device - desktop, mobile, tablet, or web browser.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="text-white">
                                <div className="text-3xl sm:text-4xl font-bold mb-2">10M+</div>
                                <div className="text-indigo-100">Files Stored</div>
                            </div>
                            <div className="text-white">
                                <div className="text-3xl sm:text-4xl font-bold mb-2">500K+</div>
                                <div className="text-indigo-100">Happy Users</div>
                            </div>
                            <div className="text-white">
                                <div className="text-3xl sm:text-4xl font-bold mb-2">99.9%</div>
                                <div className="text-indigo-100">Uptime</div>
                            </div>
                            <div className="text-white">
                                <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
                                <div className="text-indigo-100">Support</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Plans Section */}
                <section className="py-16 sm:py-24 bg-white dark:bg-gray-800">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                Choose Your Plan
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                                Find the perfect plan that fits your needs.
                            </p>
                            <div className="pricing-cards-wrapper overflow-hidden">
                                <div className="pricing-cards flex space-x-6">
                                    {plansData.map((plan, index) => (
                                        <div
                                            key={index}
                                            className={`pricing-card p-8 rounded-2xl shadow-lg transition-transform duration-300 ${
                                                plan.isFeatured ? 'border-4 border-indigo-600 scale-105' : 'border border-gray-200 dark:border-gray-700'
                                            }`}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{plan.planName}</h3>
                                            <div className="text-4xl font-bold text-gray-800 dark:text-white mb-1">
                                                {plan.price}
                                                <span className="text-lg font-normal">{plan.pricePeriod}</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                                            <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center">
                                                        <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <button
                                                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                                                    plan.isFeatured
                                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                                                }`}
                                            >
                                                {plan.buttonText}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                

                {/* CTA Section */}
                <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 relative overflow-hidden">
                    {/* Background Image with Blur */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            filter: 'blur(1px)',
                            transform: 'scale(1)',
                            backgroundSize: "cover",
                            
                        }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join Aura Cloud today and experience the future of personal cloud storage.
                        </p>
                        <button
                            onClick={() => navigateTo('signup')}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                        >
                            Start Your Free Trial
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Cloud className="w-6 h-6 text-indigo-600" />
                                <span className="text-lg font-bold text-gray-800 dark:text-white">Aura Cloud</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Secure, simple, and beautiful cloud storage for everyone.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Product</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Features</a></li>
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Security</a></li>
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">About</a></li>
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Blog</a></li>
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Help Center</a></li>
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Contact</a></li>
                                <li><a onClick={() => navigateTo('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Privacy</a></li>
                            </ul>
                        </div>

                        

                        {/* Social Media Icons */}
                        <div className="flex justify-center space-x-6 mb-8">
                            <a href="https://www.linkedin.com/in/jayesh-koli-0aa2b6217/" className="w-10 h-10 flex items-center justify-center rounded-full  transition-colors duration-200">
                                <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" />
                            </a>
                            <a href="https://github.com/loordjay" className="w-10 h-10 flex items-center justify-center rounded-full  transition-colors duration-200">
                                <Github className="w-5 h-5 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full  transition-colors duration-200">
                                <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300" />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full  transition-colors duration-200">
                                <Instagram className="w-5 h-5 text-pink-500 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300" />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full  transition-colors duration-200">
                                <Twitter className="w-5 h-5 text-sky-500 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300" />
                            </a>
                            <a href="" className="w-10 h-10 flex items-center justify-center rounded-full  transition-colors duration-200">
                                <Mail className="w-5 h-5 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300" />
                            </a>
                        </div>

                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Aura Cloud. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
