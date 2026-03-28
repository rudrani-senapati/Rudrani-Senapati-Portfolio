import React from 'react';
import portfolio from "../assets/portfolio.png";
import appointment from "../assets/appointment.jpg";
import sms from "../assets/sms.png";
import ecommerce from "../assets/ecommerce.jpg";
import aichatboat from "../assets/aichatboat.jpg";
import realtime from "../assets/realtime.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects, built with a modern and responsive design.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/your-username/your-portfolio-repo",
    image: portfolio
  },
  {
    title: "Appointment Booking System",
    description: "A full-stack application for managing and booking appointments. Features include user authentication, a calendar view, and real-time scheduling updates.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/0rudrani0/appointment-booking-system",
    image: appointment
  },
  {
    title: "Student Management System",
    description: "A robust system for educational institutions to manage student records, courses, and grades. Includes separate dashboards for administrators and students.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/0rudrani0/student-management-software",
    image: sms
  },
  {
    title: "E-commerce Platform",
    description: "A fully-functional e-commerce site with product listings, a shopping cart, and secure checkout process.",
    technologies: ["React", "Redux", "Stripe", "Express", "MongoDB"],
    link: "https://github.com/your-username/e-commerce-repo",
    image: ecommerce
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'A full-stack chatbot built on the MERN stack with a secure user interface and an API connected to a language model.',
    image: aichatboat,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AI API'],
    link: '#',
  },
  {
    title: 'Real-Time Collaboration Tool',
    description: 'A real-time document editor using WebSockets for live updates, user presence, and secure document management.',
    image: realtime,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    link: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 ">
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
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl font-bold text-white dark:text-black text-center mb-12 animate-fade-in-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-1 bg-gradient-to-tr from-teal-400 via-purple-500 to-pink-500 rounded-xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-up shadow-lg"
            >
              <div className="bg-gray-900 dark:bg-gradient-to-br dark:from-teal-50 dark:via-purple-50 dark:to-pink-50 rounded-xl overflow-hidden flex flex-col h-full shadow-inner hover:shadow-xl hover:shadow-teal-300/30 transition ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-fit transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-white dark:text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-400 flex-grow dark:text-gray-700">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-slate-900 via-teal-900 to-purple-900 text-teal-300 text-sm px-3 py-1 rounded-full font-medium shadow-md hover:scale-105 transition dark:bg-gradient-to-r dark:from-teal-100 dark:via-purple-100 dark:to-pink-100 dark:text-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full transition-colors shadow-md hover:shadow-lg"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
