import React from 'react';

const aboutData = {
    bio: [
        "I am a Full-Stack Web Developer with a strong foundation in the MERN stack (React 19, Node.js, Express, MongoDB), building scalable web applications with real-time data sync, JWT security, and third-party API integrations.",
        "I bring a professional background as a Test Engineer on Nokia telecom projects, validating LTE, VoLTE, and VoNR network signaling protocols through rigorous debugging and Linux scripting.",
        "Combines strong cross-functional collaboration with a quality-first engineering mindset to deliver clean, high-performance, thoroughly tested code."
    ]
};

const About = () => {
    return (
        <section id="about" className="pt-14 pb-16 relative overflow-hidden bg-slate-950 text-slate-300 dark:bg-slate-50 dark:text-slate-700">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-3">
                        Background & Core Competencies
                    </h2>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-slate-900 tracking-tight">
                        About Me
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* About Bio Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {aboutData.bio.map((paragraph, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 rounded-2xl shadow-xl hover:border-teal-500/30 transition-all duration-300 relative group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm mb-4 border border-teal-500/20">
                                0{index + 1}
                            </div>
                            <p className="text-slate-300 dark:text-slate-700 leading-relaxed text-sm sm:text-base">
                                {paragraph}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;