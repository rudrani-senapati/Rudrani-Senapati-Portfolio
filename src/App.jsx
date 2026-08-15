import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'dark';
    });

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

    return (
        <div className="relative min-h-screen w-full bg-slate-950 text-slate-100 dark:bg-slate-50 dark:text-slate-900 transition-colors duration-500 selection:bg-teal-500 selection:text-slate-950">
            <Navbar toggleTheme={toggleTheme} theme={theme} />

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;

