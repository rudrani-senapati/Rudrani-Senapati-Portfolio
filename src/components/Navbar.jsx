import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaFilePdf } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
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
        { label: 'Home', target: 'hero' },
        { label: 'About', target: 'about' },
        { label: 'Skills', target: 'skills' },
        { label: 'Experience', target: 'experience' },
        { label: 'Projects', target: 'projects' },
        { label: 'Contact', target: 'contact' },
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
            <nav className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3 dark:bg-white/80 dark:border-slate-200' 
                    : 'bg-transparent py-5'
            }`}>
                <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
                    <button 
                        onClick={() => scrollTo('hero')} 
                        className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white dark:text-slate-900 focus:outline-none flex items-center gap-1 group"
                    >
                        <span className="text-teal-400 group-hover:rotate-12 transition-transform inline-block">R</span>UDRANI
                        <span className="w-2 h-2 rounded-full bg-teal-400 inline-block ml-0.5"></span>
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.target;
                            return (
                                <button
                                    key={link.target}
                                    onClick={() => scrollTo(link.target)}
                                    className={`relative py-1 transition-colors hover:text-teal-400 ${
                                        isActive
                                            ? 'text-teal-400 font-semibold dark:text-teal-600'
                                            : 'text-slate-300 dark:text-slate-700'
                                    }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span 
                                            layoutId="activeIndicator"
                                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full"
                                        />
                                    )}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-semibold py-2 px-5 rounded-full shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5"
                        >
                            <FaFilePdf />
                            <span>Resume</span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-colors dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-800 dark:border-slate-300"
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
                                        <FaSun className="text-amber-400 text-lg" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaMoon className="text-indigo-400 text-lg" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Mobile menu buttons */}
                    <div className="md:hidden flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-800 text-slate-200 dark:bg-slate-200 dark:text-slate-800"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <FaSun className="text-amber-400" /> : <FaMoon className="text-indigo-400" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-200 hover:text-teal-400 text-2xl focus:outline-none dark:text-slate-800"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 dark:bg-white/95 dark:border-slate-200 shadow-2xl"
                        >
                            <div className="flex flex-col space-y-4 text-center font-medium">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.target}
                                        onClick={() => scrollTo(link.target)}
                                        className={`py-2 text-lg transition-colors ${
                                            activeSection === link.target
                                                ? 'text-teal-400 font-bold dark:text-teal-600'
                                                : 'text-slate-300 dark:text-slate-700'
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                ))}

                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsResumeOpen(true);
                                    }}
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold py-3 px-6 rounded-full shadow-lg"
                                >
                                    <FaFilePdf />
                                    <span>Preview Resume</span>
                                </button>
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