import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-transparent text-gray-80000  transition-colors">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Rudrani. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/0rudrani0"
            className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rudrani-senapati-626734315/"
            className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/_rudrani_15_/"
            className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/rudrani.senapati.7"
            className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;