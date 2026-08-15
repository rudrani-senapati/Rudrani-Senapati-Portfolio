import React, { useEffect } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaLayerGroup, FaCheckCircle } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 pt-16 sm:pt-20 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl sm:max-w-3xl bg-slate-900 dark:bg-slate-50 border border-slate-700/80 dark:border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[88vh] sm:h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Pinned Top Bar Header - Responsive Flex */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-950/90 dark:bg-slate-100 border-b border-slate-800 dark:border-slate-200 flex-shrink-0 z-10 gap-2">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-teal-500/20 border border-teal-400/40 text-teal-300 dark:text-teal-700 dark:bg-teal-100 text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0">
              {project.category || "Full Stack"}
            </span>
            <h3 className="text-sm sm:text-lg font-bold text-white dark:text-slate-900 truncate">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 text-slate-300 dark:text-slate-800 rounded-full text-sm sm:text-base transition-colors flex-shrink-0"
            aria-label="Close Modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Inside Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-5 text-slate-300 dark:text-slate-700 custom-scrollbar">
          
          {/* Project Preview Image */}
          <div className="relative h-40 sm:h-64 w-full rounded-xl overflow-hidden border border-slate-800 dark:border-slate-300 bg-slate-950 flex-shrink-0 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-1.5 flex items-center gap-1.5">
              <FaLayerGroup /> Project Overview
            </h4>
            <p className="text-xs sm:text-base leading-relaxed text-slate-300 dark:text-slate-700">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-2.5">
                Key Features & Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-800/60 dark:bg-slate-100 p-2.5 rounded-lg border border-slate-800 dark:border-slate-200">
                    <FaCheckCircle className="text-teal-400 mt-0.5 flex-shrink-0 text-xs sm:text-sm" />
                    <span className="leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-800 dark:bg-slate-200 text-teal-300 dark:text-teal-800 text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md border border-slate-700 dark:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Pinned Bottom Footer Actions - Responsive Layout */}
        <div className="p-3 sm:p-4 px-4 sm:px-6 bg-slate-950/90 dark:bg-slate-100 border-t border-slate-800 dark:border-slate-200 flex items-center justify-between gap-3 flex-shrink-0 z-10">
          <span className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 hidden sm:inline">
            Technical Project Showcase
          </span>
          
          <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-end">
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 text-slate-100 dark:text-slate-900 font-semibold px-3 sm:px-4 py-2 rounded-lg text-xs transition-colors flex-1 sm:flex-initial"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-3 sm:px-4 py-2 rounded-lg text-xs transition-colors shadow-md flex-1 sm:flex-initial"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;



