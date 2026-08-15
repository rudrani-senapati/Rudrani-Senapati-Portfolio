import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaFilePdf, FaHome, FaUser, FaTools, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 250;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', target: 'hero', icon: FaHome },
        { label: 'About', target: 'about', icon: FaUser },
        { label: 'Skills', target: 'skills', icon: FaTools },
        { label: 'Experience', target: 'experience', icon: FaBriefcase },
        { label: 'Projects', target: 'projects', icon: FaCode },
        { label: 'Contact', target: 'contact', icon: FaEnvelope },
    ];

    const scrollTo = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const navOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav className={`fixed w-full top-0 left-0 z-40 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3 dark:bg-white/90 dark:border-slate-200' 
                    : 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-4 sm:py-5 dark:from-slate-100/90'
            }`}>
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 max-w-7xl">
                    
                    {/* Brand Logo with Icon */}
                    <button 
                        onClick={() => scrollTo('hero')} 
                        className="group flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-wider text-white dark:text-slate-900 focus:outline-none"
                    >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-500 via-emerald-400 to-indigo-500 p-0.5 shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-full bg-slate-950 dark:bg-white rounded-[10px] flex items-center justify-center">
                                <span className="text-teal-400 dark:text-teal-600 font-extrabold text-lg sm:text-xl">R</span>
                            </div>
                        </div>
                        <span className="font-extrabold tracking-tight">
                            RUDRANI<span className="text-teal-400 dark:text-teal-600">.</span>
                        </span>
                    </button>

                    {/* Desktop Navigation Links Pill Container */}
                    <div className="hidden md:flex items-center gap-1 bg-slate-900/70 dark:bg-slate-100/80 border border-slate-800/80 dark:border-slate-300/80 p-1.5 px-3 rounded-full backdrop-blur-md shadow-inner">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.target;
                            return (
                                <button
                                    key={link.target}
                                    onClick={() => scrollTo(link.target)}
                                    className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                                        isActive
                                            ? 'text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 shadow-md font-bold'
                                            : 'text-slate-300 dark:text-slate-700 hover:text-white dark:hover:text-slate-900 hover:bg-slate-800/50 dark:hover:bg-slate-200/60'
                                    }`}
                                >
                                    <span>{link.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop Right Action Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold py-2 px-4 sm:px-5 rounded-full text-xs sm:text-sm shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all transform hover:-translate-y-0.5"
                        >
                            <FaFilePdf />
                            <span>Resume</span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-all dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-800 dark:border-slate-300 shadow-sm"
                            aria-label="Toggle Theme"
                        >
                            <AnimatePresence mode="wait">
                                {theme === 'light' ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaSun className="text-amber-400 text-base" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaMoon className="text-indigo-400 text-base" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Mobile Header Controls */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-slate-900/90 border border-slate-800 text-slate-200 dark:bg-slate-200 dark:text-slate-800 dark:border-slate-300 text-xs font-medium shadow-sm"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? (
                                <>
                                    <FaSun className="text-amber-400 text-xs" />
                                    <span className="text-[11px] font-bold">Light</span>
                                </>
                            ) : (
                                <>
                                    <FaMoon className="text-indigo-400 text-xs" />
                                    <span className="text-[11px] font-bold">Dark</span>
                                </>
                            )}
                        </button>
                        
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 bg-slate-900/80 border border-slate-800 dark:bg-slate-200 dark:border-slate-300 rounded-xl text-slate-200 hover:text-teal-400 text-xl focus:outline-none dark:text-slate-800 transition-colors"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Glassmorphic Drawer Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/90 px-5 py-6 dark:bg-white/95 dark:border-slate-200 shadow-2xl"
                        >
                            <div className="flex flex-col space-y-2 font-medium max-w-md mx-auto">
                                {navLinks.map((link) => {
                                    const IconComponent = link.icon;
                                    const isActive = activeSection === link.target;
                                    return (
                                        <button
                                            key={link.target}
                                            onClick={() => scrollTo(link.target)}
                                            className={`flex items-center gap-3 w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                                                isActive
                                                    ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-400 border border-teal-500/30 dark:bg-teal-100 dark:text-teal-700'
                                                    : 'text-slate-300 dark:text-slate-700 hover:bg-slate-900 dark:hover:bg-slate-100'
                                            }`}
                                        >
                                            <IconComponent className={isActive ? 'text-teal-400 dark:text-teal-600 text-base' : 'text-slate-500 text-base'} />
                                            <span>{link.label}</span>
                                        </button>
                                    );
                                })}

                                <div className="pt-4 mt-2 border-t border-slate-800 dark:border-slate-200 flex flex-col gap-3">
                                    <button
                                        onClick={toggleTheme}
                                        className="flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 dark:bg-slate-100 dark:border-slate-300 text-slate-200 dark:text-slate-800 font-semibold py-3 px-5 rounded-xl text-xs sm:text-sm"
                                    >
                                        {theme === 'light' ? (
                                            <>
                                                <FaSun className="text-amber-400" />
                                                <span>Switch to Dark Theme</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaMoon className="text-indigo-400" />
                                                <span>Switch to Light Theme</span>
                                            </>
                                        )}
                                    </button>

                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsResumeOpen(true);
                                        }}
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold py-3 px-6 rounded-xl shadow-lg text-xs sm:text-sm"
                                    >
                                        <FaFilePdf />
                                        <span>Preview Resume PDF</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
};

export default Navbar;
