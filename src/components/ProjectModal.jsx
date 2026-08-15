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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl sm:max-w-3xl bg-slate-900 dark:bg-slate-50 border border-slate-700/80 dark:border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[78vh] sm:h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >


        
        {/* Pinned Top Bar Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 dark:bg-slate-100 border-b border-slate-800 dark:border-slate-200 flex-shrink-0 z-10">
          <div className="flex items-center space-x-3 pr-4">
            <span className="px-2.5 py-1 bg-teal-500/20 border border-teal-400/40 text-teal-300 dark:text-teal-700 dark:bg-teal-100 text-xs font-semibold rounded-full whitespace-nowrap">
              {project.category || "Full Stack Application"}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white dark:text-slate-900 truncate">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 text-slate-300 dark:text-slate-800 rounded-full text-base transition-colors flex-shrink-0"
            aria-label="Close Modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Inside Content (ONLY this section scrolls) */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6 text-slate-300 dark:text-slate-700 custom-scrollbar">
          
          {/* Project Preview Image */}
          <div className="relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-slate-800 dark:border-slate-300 bg-slate-950 flex-shrink-0 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-2 flex items-center gap-1.5">
              <FaLayerGroup /> Project Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 dark:text-slate-700">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-3">
                Key Features & Technical Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-800/60 dark:bg-slate-100 p-3 rounded-lg border border-slate-800 dark:border-slate-200">
                    <FaCheckCircle className="text-teal-400 mt-0.5 flex-shrink-0 text-sm" />
                    <span className="leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-3">
              Technologies & Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-800 dark:bg-slate-200 text-teal-300 dark:text-teal-800 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-700 dark:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Pinned Bottom Footer Actions */}
        <div className="p-4 px-6 bg-slate-950/90 dark:bg-slate-100 border-t border-slate-800 dark:border-slate-200 flex items-center justify-between gap-4 flex-shrink-0 z-10">
          <span className="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline">
            Technical Project Showcase
          </span>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 text-slate-100 dark:text-slate-900 font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors"
              >
                <FaGithub />
                <span>GitHub Code</span>
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors shadow-md"
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


