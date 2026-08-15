import React, { useState } from 'react';
import { 
  FaLaptopCode, FaDatabase, FaTools, FaNetworkWired, 
  FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs, 
  FaPython, FaJava, FaGitAlt, FaGithub, FaServer, FaKey, FaShieldAlt
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiFramer, SiExpress, SiMongodb, 
  SiMysql, SiPostman, SiWireshark, SiLinux
} from 'react-icons/si';

const skillsData = {
    skillCategories: [
        { id: 'all', label: 'All Stack' },
        { id: 'frontend', label: 'Frontend', icon: FaLaptopCode },
        { id: 'backend', label: 'Backend & DB', icon: FaDatabase },
        { id: 'telecom', label: 'Telecom & Protocols', icon: FaNetworkWired },
        { id: 'tools', label: 'Tools & QA', icon: FaTools },
    ],
    skills: [
        { name: "React 19", category: "frontend", iconComponent: FaReact, color: "text-cyan-400", description: "UI Architecture & Reactive State" },
        { name: "JavaScript", category: "frontend", iconComponent: FaJsSquare, color: "text-yellow-400", description: "ES6+, Async Programming, Client Logic" },
        { name: "Tailwind CSS", category: "frontend", iconComponent: SiTailwindcss, color: "text-sky-400", description: "Utility-first Design & Glassmorphism" },
        { name: "Framer Motion", category: "frontend", iconComponent: SiFramer, color: "text-purple-400", description: "Smooth UI Animations & Transitions" },
        { name: "HTML5 & CSS3", category: "frontend", iconComponent: FaHtml5, color: "text-orange-500", description: "Semantic Layouts & Web Standards" },
        
        { name: "Node.js", category: "backend", iconComponent: FaNodeJs, color: "text-emerald-500", description: "Scalable Event-Driven Runtime" },
        { name: "Express.js", category: "backend", iconComponent: SiExpress, color: "text-slate-300 dark:text-slate-700", description: "RESTful Server Architecture & APIs" },
        { name: "JWT Auth", category: "backend", iconComponent: FaKey, color: "text-amber-400", description: "Secure User Authentication & Tokens" },
        { name: "MongoDB", category: "backend", iconComponent: SiMongodb, color: "text-emerald-400", description: "Document NoSQL Database Modeling" },
        { name: "MySQL / Oracle", category: "backend", iconComponent: SiMysql, color: "text-blue-400", description: "Relational Databases & SQL Queries" },
        { name: "Python", category: "backend", iconComponent: FaPython, color: "text-blue-500", description: "Scripting, Logic & Automation" },

        { name: "LTE / EPC Core", category: "telecom", iconComponent: FaServer, color: "text-teal-400", description: "MME, SGW, PGW & Bearer Setup" },
        { name: "IMS & VoLTE / VoNR", category: "telecom", iconComponent: FaNetworkWired, color: "text-indigo-400", description: "P-CSCF, I-CSCF, S-CSCF Signaling" },
        { name: "SIP / Diameter / RTP", category: "telecom", iconComponent: FaShieldAlt, color: "text-emerald-400", description: "Call Setup, Teardown & Protocols" },
        { name: "Networking (TCP/IP)", category: "telecom", iconComponent: FaNetworkWired, color: "text-cyan-400", description: "IPv4/IPv6, QoS & 3GPP Standards" },

        { name: "Wireshark", category: "tools", iconComponent: SiWireshark, color: "text-sky-400", description: "Packet Capture & Log Analysis" },
        { name: "Linux & Scripting", category: "tools", iconComponent: SiLinux, color: "text-amber-400", description: "Command-Line Diagnostics & Automation" },
        { name: "Git & GitHub", category: "tools", iconComponent: FaGithub, color: "text-slate-100 dark:text-slate-900", description: "Version Control & CI/CD Delivery" },
        { name: "Postman & VS Code", category: "tools", iconComponent: SiPostman, color: "text-orange-400", description: "API Testing & Development Environment" },
        { name: "Java & OOPs", category: "backend", iconComponent: FaJava, color: "text-red-400", description: "Object-Oriented Programming & Logic" },
    ]
};


const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredSkills = selectedCategory === 'all'
        ? skillsData.skills
        : skillsData.skills.filter(skill => skill.category === selectedCategory);

    return (
        <section id="skills" className="pt-14 pb-16 relative overflow-hidden bg-slate-950 text-slate-300 dark:bg-slate-50 dark:text-slate-700">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-3">
                        Technical Expertise
                    </h2>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-slate-900 tracking-tight">
                        Technical Skills & Protocols
                    </h3>
                    <p className="text-slate-400 dark:text-slate-600 text-sm mt-3">
                        Technologies, languages, framework libraries, and telecom protocol diagnostics I specialize in
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Filter Category Tabs */}
                <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
                    {skillsData.skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                selectedCategory === cat.id
                                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105'
                                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 dark:bg-slate-200 dark:text-slate-700 dark:hover:bg-slate-300'
                            }`}
                        >
                            {cat.icon && <cat.icon className="text-xs" />}
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {filteredSkills.map((skill, index) => {
                        const IconComponent = skill.iconComponent;
                        return (
                            <div
                                key={index}
                                className="glass-card p-5 rounded-xl text-center flex flex-col items-center justify-between hover:-translate-y-1 hover:border-teal-500/40 transition-all duration-300 shadow-lg group"
                            >
                                <div className="w-14 h-14 p-2 mb-3 rounded-lg bg-slate-900/60 dark:bg-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-800 dark:border-slate-300">
                                    {IconComponent && (
                                        <IconComponent className={`text-3xl ${skill.color}`} />
                                    )}
                                </div>
                                <h4 className="text-sm font-bold text-white dark:text-slate-900 mb-1">
                                    {skill.name}
                                </h4>
                                <p className="text-xs text-slate-400 dark:text-slate-600 line-clamp-2">
                                    {skill.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Skills;
