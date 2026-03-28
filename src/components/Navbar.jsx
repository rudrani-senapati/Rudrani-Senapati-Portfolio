import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
    ];

    const resumePath = '/Rudrani_Resume.pdf';

    return (
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/90 backdrop-blur-md shadow-xl border-b border-gray-800 dark:bg-gray-100/95 dark:border-gray-300' : 'bg-transparent'}`}>
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-8">
                <Link to="/" className="text-4xl px-10 font-bold text-teal-500 dark:text-gray-900 hover:text-teal-500 transition-colors cursor-pointer select-none">
                    RUDRANI
                </Link>

                <div className="hidden md:flex items-center space-x-6 text-lg font-medium">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative transition-colors ${isActive
                                    ? 'text-teal-400 dark:text-teal-500'
                                    : 'text-gray-300 dark:text-gray-700'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400 rounded-full dark:bg-teal-500"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}

                    <a
                        href="/Rudrani_Senapati.pdf"
                        download
                        className="bg-purple-600 text-white hover:bg-purple-700 py-2 px-6 rounded-full font-bold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                        Resume
                    </a>


                    <button
                        onClick={toggleTheme}
                        className="ml-4 p-2 rounded-full bg-gray-600 hover:bg-gray-600 text-white transition-colors dark:bg-gray-500 dark:hover:bg-gray-500"
                        aria-label="Toggle Theme"
                    >
                        <AnimatePresence mode="wait">
                            {theme === 'light' ? (
                                <motion.div
                                    key="moon"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaSun className="text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="sun"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaMoon className="text-yellow-400" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                <div className="md:hidden flex items-center space-x-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors dark:bg-gray-300 dark:hover:bg-gray-200"
                        aria-label="Toggle Theme"
                    >
                        <AnimatePresence mode="wait">
                            {theme === 'dark' ? (
                                <motion.div
                                    key="sun-mobile"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaSun className="text-yellow-400" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="moon-mobile"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaMoon className="text-red-600" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 text-2xl focus:outline-none dark:text-gray-700"
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 ease-in-out bg-black/90 backdrop-blur-md px-6 dark:bg-white/95`}>
                <div className="flex flex-col items-center py-6 space-y-4 text-lg font-medium">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block w-full text-center py-2 transition-colors ${isActive
                                    ? 'text-teal-400 dark:text-teal-500'
                                    : 'text-gray-300 hover:text-teal-400 dark:text-gray-700 dark:hover:text-teal-500'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    <a
                        href={resumePath}
                        download="Rudrani_Resume"
                        onClick={() => setIsOpen(false)}
                        className="bg-purple-600 text-white hover:bg-purple-700 w-full text-center py-2 px-6 rounded-full font-bold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                        Resume
                    </a>

                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="bg-teal-600 text-white hover:bg-teal-700 w-full text-center py-2 px-6 rounded-full font-bold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;