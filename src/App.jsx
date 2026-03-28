import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// A separate component to wrap App and provide the Router context
const AppContent = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // Use the useLocation hook to get the current path
    const location = useLocation();
    // Check if the current path is the homepage
    const isHomePage = location.pathname === '/';

    return (
        <div
            className="relative min-h-screen w-full 
                       bg-gray-950 text-gray-300 
                       dark:bg-gradient-to-br dark:from-pink-200 dark:via-purple-200 dark:to-green-200 
                       dark:text-gray-950 
                       transition-colors duration-700"
        >
            {/* Render bubbles ONLY when theme is 'light' */}
            {theme === 'light' && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-[-10%] left-[5%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute bottom-[25%] left-[20%] w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-[35%] left-[45%] w-56 h-56 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute bottom-[5%] right-[20%] w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                </div>
            )}

            <Navbar toggleTheme={toggleTheme} theme={theme} />

            <main className="relative z-10">
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            {/* Conditionally render the Footer if not on the homepage */}
            {!isHomePage && <Footer />}
        </div>
    );
};

// Main App component that wraps the content with the router
function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;