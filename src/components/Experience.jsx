import React from 'react';
import { FaBriefcase, FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Test Engineer",
      company: "Everiion Tech",
      period: "Nov 2025 – Present",
      location: "Bhubaneswar",
      details: [
        "Perform functional, integration, system, regression, and end-to-end (E2E) testing for LTE, IMS, VoLTE, VoWiFi, VoNR, and AAA network elements in alignment with 3GPP standards.",
        "Diagnose and resolve critical network failures by examining SIP, Diameter, and RTP signaling flows using Wireshark and Linux-based tools.",
        "Review IMS Registration signaling (REGISTER, UAR/UAA, MAR/MAA, SAR/SAA) and VoLTE call setup/teardown flows (INVITE, PRACK, 180 Ringing, 183 Session Progress, ACK, BYE) across P-CSCF, I-CSCF, and S-CSCF.",
        "Confirm EPC components (MME, SGW, PGW) during LTE Attach and session establishment, ensuring correct bearer setup across the packet core.",
        "Streamline LTE Attach and IMS Registration procedures through Linux scripting, improving overall test efficiency."
      ]
    },
    {
      role: "Test Engineer",
      company: "Odissi Tech Global Solutions",
      period: "Jul 2025 – Nov 2025",
      location: "Bhubaneswar",
      details: [
        "Built a strong foundation in LTE, VoLTE, VoWiFi, VoNR, and IMS network architecture through hands-on testing.",
        "Executed functional and regression test cases for telecom network elements, confirming LTE Attach procedure signaling between eNB, MME, SGW, and HSS.",
        "Examined packet captures using Wireshark to understand call setup and message exchange, assisting senior engineers in issue identification.",
        "Recorded defects, monitored test outcomes, and prepared test documentation for Nokia core network release validation activities."
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Gandhi Institute For Education & Technology",
      location: "Bhubaneswar",
      year: "Jun 2025"
    },
    {
      degree: "Bachelor of Science (B.Sc)",
      institution: "Nimapara Autonomous College",
      location: "Nimapada",
      year: "Jul 2023"
    }
  ];

  const certificates = [
    "Advanced Computer Networks — NPTEL, IIT Indore",
    "Advanced Computer Architecture — NPTEL, IIT Delhi",
    "Internet of Things (IoT) — NPTEL, IIT Kharagpur",
    "Cloud Computing — NPTEL, IIT Kharagpur"
  ];

  return (
    <section id="experience" className="pt-14 pb-16 relative overflow-hidden bg-slate-950 text-slate-300 dark:bg-slate-50 dark:text-slate-700">

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-3">
            Career Journey & Background
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-slate-900 tracking-tight">
            Work Experience & Education
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center text-lg">
                <FaBriefcase />
              </div>
              <h4 className="text-2xl font-bold text-white dark:text-slate-900">Work Experience</h4>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl shadow-xl hover:border-teal-500/40 transition-all duration-300 relative group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h5 className="text-xl font-bold text-white dark:text-slate-900 group-hover:text-teal-400 transition-colors">
                      {exp.role} <span className="text-teal-400 font-normal">@ {exp.company}</span>
                    </h5>
                    <span className="text-xs font-semibold px-3 py-1 bg-teal-500/10 text-teal-300 dark:text-teal-700 dark:bg-teal-100 rounded-full border border-teal-500/20 flex items-center gap-1.5">
                      <FaCalendarAlt className="text-xs" /> {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 mb-4">
                    <FaMapMarkerAlt /> {exp.location}
                  </p>

                  <ul className="space-y-2.5 text-sm text-slate-300 dark:text-slate-700">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-lg">
                  <FaGraduationCap />
                </div>
                <h4 className="text-2xl font-bold text-white dark:text-slate-900">Education</h4>
              </div>

              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl shadow-xl hover:border-indigo-500/40 transition-all duration-300">
                    <span className="text-xs font-semibold text-teal-400 mb-1 block">{edu.year}</span>
                    <h5 className="text-lg font-bold text-white dark:text-slate-900">{edu.degree}</h5>
                    <p className="text-sm text-slate-400 dark:text-slate-600 mt-1">{edu.institution}</p>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><FaMapMarkerAlt /> {edu.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* NPTEL Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-lg">
                  <FaAward />
                </div>
                <h4 className="text-2xl font-bold text-white dark:text-slate-900">NPTEL Certifications</h4>
              </div>

              <div className="glass-card p-6 rounded-2xl shadow-xl space-y-3">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/50 dark:bg-slate-100 border border-slate-800/80 dark:border-slate-200">
                    <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-sm" />
                    <span className="text-sm font-medium text-slate-200 dark:text-slate-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
