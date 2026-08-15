import React, { useState } from 'react';
import portfolio from "../assets/portfolio.jpg";
import appointment from "../assets/appointment.jpg";
import carepulse from "../assets/carepulse.jpg";
import sms from "../assets/sms.png";
import ecommerce from "../assets/ecommerce.jpg";
import aichatboat from "../assets/aichatboat.jpg";
import realtime from "../assets/realtime.png";
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import ProjectModal from './ProjectModal';


const projects = [
  {
    id: 1,
    title: "CarePulse – Full-Stack Telehealth & Clinical Management System",
    category: "fullstack",
    description: "Architected a 3-tier enterprise healthcare platform supporting Patients, Doctors, and Hospital Admins with real-time slot scheduling across 12 medical specialities.",
    technologies: ["React 19", "Node.js", "Express", "MongoDB", "Twilio SMS", "Tailwind CSS"],
    highlights: [
      "Architected 3-tier telehealth platform supporting Patients, Doctors, and Admins across 12 medical specialities",
      "Engineered live background state polling (10s auto-sync) enabling seamless real-time data updates across consultation queues",
      "Developed a client-side Health Vault PDF engine for printable E-Prescriptions with digital signatures",
      "Integrated automated Twilio SMS booking reminders and notifications"
    ],
    link: "https://github.com/rudrani-senapati",
    demo: "#",
    image: carepulse
  },

  {
    id: 2,
    title: "QuickGPT – AI-Powered Conversational Intelligence Platform",
    category: "ai",
    description: "Developed an AI-powered conversational platform built on the MERN stack with secure JWT user authentication, real-time message streaming, and calendar scheduling integration.",
    technologies: ["React 19", "Node.js", "Express", "MongoDB", "JWT Auth", "AI API"],
    highlights: [
      "Built full-stack conversational intelligence platform using MERN Stack",
      "Implemented JWT security, session history persistence, and responsive UI",
      "Integrated appointment scheduling, calendar view, and real-time updates"
    ],
    link: "https://github.com/rudrani-senapati",
    demo: "#",
    image: aichatboat
  },
  {
    id: 3,
    title: "VoLTE, VoNR & PACO Signaling Validation",
    category: "telecom",
    description: "Nokia Telecom Project validating VoLTE-to-VoNR handover scenarios, PACO signaling updates, and release defect tracking across live network topologies.",
    technologies: ["Wireshark", "Linux", "SIP Protocol", "Diameter", "PACO", "LTE/EPC"],
    highlights: [
      "Verified call continuity during VoLTE-to-VoNR handover scenarios across network transitions",
      "Logged and tracked defects identified during PACO and VoLTE/VoNR testing cycles",
      "Collaborated with development teams to confirm fixes before release",
      "Executed regression test cases to ensure PACO updates didn't break existing call flows"
    ],
    link: "https://github.com/rudrani-senapati",
    image: realtime
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    category: "frontend",
    description: "A highly responsive personal developer portfolio highlighting skills, interactive project detail modals, PDF resume viewer, and glassmorphic design.",
    technologies: ["React 19", "Tailwind CSS", "Vite", "Framer Motion"],
    highlights: [
      "Glassmorphism visual design system with dark theme defaults",
      "Interactive skill & protocol filter matrix",
      "PDF Resume preview & download modal",
      "Responsive layout with smooth scroll navigation"
    ],
    link: "https://github.com/rudrani-senapati/Rudrani-Senapati-Portfolio",
    demo: "#",
    image: portfolio
  },
  {
    id: 5,
    title: "Student Management System",
    category: "fullstack",
    description: "Comprehensive institutional software for managing student records, course enrollments, attendance, and academic performance.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Developed using MERN Stack (MongoDB, Express.js, React, Node.js)",
      "Implemented User Authentication, CRUD Operations, and Student Records",
      "Attendance and Performance Management dashboards"
    ],
    link: "https://github.com/0rudrani0/student-management-software",
    image: sms
  },
  {
    id: 6,
    title: "E-Commerce Web Platform",
    category: "fullstack",
    description: "E-commerce web store with product filtering, dynamic cart state management, and checkout integration.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Redux Toolkit state management for shopping cart",
      "Product category search & dynamic filtering",
      "Secure checkout flow integration"
    ],
    link: "https://github.com/rudrani-senapati",
    image: ecommerce
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ai', label: 'AI & Real-time' },
  { id: 'telecom', label: 'Telecom Validation' },
  { id: 'frontend', label: 'React Frontend' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="pt-14 pb-16 relative overflow-hidden bg-slate-950 text-slate-300 dark:bg-slate-50 dark:text-slate-700">
        
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-3">
              Featured Work & Technical Projects
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-slate-900 tracking-tight">
              Project Experience
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800 dark:bg-slate-200 dark:text-slate-700 dark:hover:bg-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:border-teal-500/40 transition-all duration-500 shadow-xl group"
              >
                {/* Thumbnail Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-teal-500 text-slate-950 rounded-full font-bold shadow-lg hover:scale-110 transition-transform"
                      title="Quick View Details"
                    >
                      <FaEye className="text-lg" />
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:scale-110 transition-transform"
                        title="GitHub Repo"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-white dark:text-slate-900 mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-slate-400 dark:text-slate-600 leading-relaxed flex-1 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-teal-300 dark:bg-slate-200 dark:text-teal-800 dark:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800/80 dark:border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 dark:text-teal-600 dark:hover:text-teal-700 flex items-center gap-1"
                    >
                      View Details &rarr;
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-white dark:text-slate-600 dark:hover:text-slate-900 flex items-center gap-1"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Quick View Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;
