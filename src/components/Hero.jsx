import React, { useState } from 'react';
import profileImage from '../assets/profile-photo.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowDown, FaFilePdf, FaCode, FaCheckCircle, FaAward, FaNetworkWired } from 'react-icons/fa';

import ResumeModal from './ResumeModal';


const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const heroStats = [
    { value: "MERN Stack", label: "Full-Stack Web Dev", icon: FaCode },
    { value: "LTE / VoLTE", label: "3GPP Protocol Validation", icon: FaNetworkWired },
    { value: "Nokia QA", label: "E2E Test Engineering", icon: FaCheckCircle },
    { value: "4+ IIT Certs", label: "NPTEL Advanced Networks", icon: FaAward }
  ];

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 lg:px-12 overflow-hidden bg-grid-pattern"
      >
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/15 dark:bg-teal-400/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/15 dark:bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 my-auto">
          
          {/* Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            
            {/* Dual Expertise Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 dark:text-teal-700 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Full-Stack Software Developer & Telecom Test Engineer
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-slate-900 leading-[1.1] mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">RUDRANI</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-300 dark:text-slate-700 mb-6">
              Bridging <span className="text-teal-400 font-semibold">Web Development (IT)</span> & <span className="text-indigo-400 font-semibold">Telecom Test Engineering (QA)</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-600 max-w-2xl leading-relaxed mb-8">
              Building high-performance MERN stack web applications (React 19, Node.js, Express, MongoDB) alongside rigorous Telecom protocol validation (LTE, VoLTE, VoNR, IMS, SIP, Wireshark). Delivering clean code backed by system-level quality assurance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-10">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all transform hover:-translate-y-0.5"
              >
                View IT & Telecom Projects
              </button>
              
              <button
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 dark:bg-slate-100 dark:hover:bg-slate-200 dark:border-slate-300 text-slate-200 dark:text-slate-800 font-semibold px-6 py-3.5 rounded-full transition-all transform hover:-translate-y-0.5"
              >
                <FaFilePdf className="text-teal-400" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start space-x-5">
              {[
                { icon: FaGithub, href: 'https://github.com/rudrani-senapati', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rudrani-senapati-626734315/', label: 'LinkedIn' },
                { icon: FaInstagram, href: 'https://www.instagram.com/_rudrani_15_/', label: 'Instagram' },
                { icon: FaFacebook, href: 'https://www.facebook.com/rudrani.senapati.7', label: 'Facebook' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-teal-400 dark:bg-slate-200/80 dark:hover:bg-slate-300 dark:text-slate-700 dark:hover:text-teal-600 rounded-full border border-slate-800 dark:border-slate-300 text-xl transition-all duration-300 shadow-md hover:scale-110"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image Column - Refined Executive Glass Frame */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative group">
              
              {/* Soft Ambient Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 via-emerald-500 to-indigo-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-700"></div>

              {/* Outer Decorative Gradient Border */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-teal-400/80 via-emerald-500/60 to-indigo-500/80 shadow-2xl">
                
                {/* Inner Glass Card Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px] rounded-[22px] overflow-hidden bg-slate-900 dark:bg-white p-1">
                  <div className="w-full h-full rounded-[18px] overflow-hidden relative">
                    <img
                      src={profileImage}
                      alt="Rudrani Senapati"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Subtle Vignette Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                </div>

              </div>

              {/* Floating Bottom Skill Pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-950/90 dark:bg-white/95 backdrop-blur-md border border-slate-800 dark:border-slate-200 shadow-xl flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-200 dark:text-slate-800">Software Developer & Test Engineer</span>
              </div>

            </div>
          </div>







        </div>

        {/* Highlight Stats Bar */}
        <div className="relative z-10 container mx-auto max-w-6xl mt-12 pt-8 border-t border-slate-800/80 dark:border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl flex items-center gap-3.5 hover:border-teal-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center text-lg flex-shrink-0">
                  <stat.icon />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white dark:text-slate-900 leading-none mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-xs tracking-widest text-slate-500 uppercase">Scroll Down</span>
          <FaArrowDown className="text-teal-400 animate-bounce text-xs" />
        </div>
      </section>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Hero;



