import React from 'react';
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 py-10 bg-slate-950 border-t border-slate-800/80 text-slate-400 dark:bg-white dark:border-slate-200 dark:text-slate-600">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <p className="text-sm flex items-center gap-1.5 text-center sm:text-left">
                    <span>© {new Date().getFullYear()} Rudrani Senapati. Built with</span>
                    <FaHeart className="text-rose-500 text-xs" />
                    <span>and React & Tailwind CSS.</span>
                </p>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/rudrani-senapati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 text-lg transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rudrani-senapati-626734315/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 text-lg transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <button
                        onClick={scrollToTop}
                        className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:border-slate-300 transition-all transform hover:scale-110"
                        aria-label="Scroll to top"
                        title="Back to Top"
                    >
                        <FaArrowUp className="text-xs" />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;