import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile-photo.jpg';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Animated Gradient Bubbles */}
      <div
        className="absolute top-[-10%] left-[5%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-teal-500"
      ></div>
      <div
        className="absolute top-[10%] right-[10%] w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-indigo-500"
      ></div>
      <div
        className="absolute bottom-[25%] left-[20%] w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-orange-500"
      ></div>
      <div
        className="absolute top-[35%] left-[45%] w-56 h-56 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-cyan-400"
      ></div>
      <div
        className="absolute bottom-[5%] right-[20%] w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-purple-500"
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
        <div className="md:w-1/2 p-4 text-center md:text-left animate-fade-in-left">
          <p className="text-md sm:text-lg md:text-4xl text-teal-400 font-semibold mb-3 dark:text-teal-600">
            Hi, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-tight mb-4 text-white dark:text-gray-900">
            RUDRANI SENAPATI.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-gray-300 dark:text-gray-700">
            A passionate{' '}
            <span className="text-teal-300 font-medium dark:text-teal-500">Web Developer</span>{' '}
            building elegant and efficient solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl dark:bg-teal-500 dark:hover:bg-teal-600"
            >
              Explore My Work
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-teal-500 text-teal-300 hover:bg-teal-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500 dark:hover:text-white"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-10 flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/0rudrani0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-3xl dark:text-gray-700 dark:hover:text-teal-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rudrani-senapati-626734315/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-3xl dark:text-gray-700 dark:hover:text-teal-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_rudrani_15_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-3xl dark:text-gray-700 dark:hover:text-teal-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/rudrani.senapati.7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-3xl dark:text-gray-700 dark:hover:text-teal-500"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 p-4 mt-12 md:mt-0 flex justify-center animate-fade-in-right">
          <div className="relative p-1 bg-gradient-to-tr from-teal-400 via-purple-500 to-pink-500 rounded-full animate-pulse-light shadow-glow">
            <img
              src={profileImage}
              alt="Rudrani Senapati"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-950 transform hover:scale-120 transition-transform duration-500 dark:border-purple-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
