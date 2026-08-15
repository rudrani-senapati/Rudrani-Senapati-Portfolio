import React, { useEffect } from 'react';
import { FaTimes, FaDownload, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const resumeUrl = "/Rudrani_Senapati_Web.pdf";


  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 pt-16 sm:pt-20 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-hidden"
      onClick={onClose}
    >

      <div 
        className="relative w-full max-w-4xl bg-slate-900 dark:bg-slate-50 border border-slate-700/80 dark:border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[88vh] sm:h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Pinned Top Bar Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 px-4 sm:px-6 border-b border-slate-800 dark:border-slate-200 bg-slate-950/90 dark:bg-slate-100 flex-shrink-0 z-10 gap-2">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
            <FaFilePdf className="text-red-400 dark:text-red-600 text-xl sm:text-2xl flex-shrink-0" />
            <div className="truncate">
              <h3 className="text-sm sm:text-lg font-bold text-slate-100 dark:text-slate-900 truncate">Rudrani Senapati - Resume</h3>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 hidden sm:block">Software Developer & Telecom Test Engineer</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <a
              href={resumeUrl}
              download="Rudrani_Senapati_Resume.pdf"
              className="flex items-center space-x-1.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs transition-colors shadow-md"
            >
              <FaDownload />
              <span>Download</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 text-slate-200 dark:text-slate-800 font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors"
            >
              <FaExternalLinkAlt />
              <span>Open Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 text-slate-300 dark:text-slate-800 rounded-full text-sm sm:text-base transition-colors flex-shrink-0"
              aria-label="Close Modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Content Viewer / Preview */}
        <div className="flex-1 bg-slate-950 dark:bg-slate-200 p-2 sm:p-4 overflow-hidden relative">
          <object
            data={resumeUrl}
            type="application/pdf"
            className="w-full h-full rounded-lg border border-slate-800 dark:border-slate-300 shadow-inner"
          >
            <div className="flex flex-col items-center justify-center h-full p-6 text-center text-slate-300 dark:text-slate-700 space-y-4">
              <FaFilePdf className="text-5xl text-teal-400" />
              <p className="text-sm sm:text-base">Resume PDF is ready for download and viewing.</p>
              <a
                href={resumeUrl}
                download="Rudrani_Senapati_Resume.pdf"
                className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-2.5 px-6 rounded-full shadow-lg text-xs sm:text-sm"
              >
                Download Resume PDF
              </a>
            </div>
          </object>
        </div>

      </div>
    </div>
  );
};


export default ResumeModal;

