import React from 'react';

const aboutData = {
    description: [
        "I am a dedicated and results-driven web developer with a passion for creating seamless and intuitive user experiences. I have a strong foundation in modern web technologies and a proven track record of building responsive, high-performance web applications. My goal is to leverage my skills to build innovative solutions that solve real-world problems.",
        "When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and exploring new frameworks and libraries to broaden my skill set. I believe in continuous learning and always strive to improve my craft."
    ],
    skills: [
        { "name": "React", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "description": "Building dynamic user interfaces with a component-based approach." },
        { "name": "JavaScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "description": "Creating interactive web experiences and complex client-side logic." },
        { "name": "HTML5", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "description": "Structuring semantic and accessible web content." },
        { "name": "CSS3", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "description": "Styling and animating modern, responsive layouts." },
        { "name": "Tailwind CSS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", "description": "Rapidly building custom designs with a utility-first approach." },
        { "name": "Node.js", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", "description": "Developing scalable, server-side applications and APIs." },
        { "name": "Express", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", "description": "Building robust and efficient back-end web servers." },
        { "name": "MongoDB", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", "description": "Managing flexible, document-based NoSQL databases." },
        { "name": "SQL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "description": "Designing, querying, and managing relational databases." },
        { "name": "Java", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "description": "Enterprise-level back-end development and building robust applications." },
        { "name": "Figma", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", "description": "Designing user interfaces and creating interactive prototypes." },
        { "name": "API", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg", "description": "Designing and integrating RESTful APIs for communication between services." },
        { "name": "JSON", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-plain.svg", "description": "Handling data exchange and configuration in a lightweight format." },
        { "name": "Git", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", "description": "Collaborating and managing code versions effectively." },
        { "name": "GitHub", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", "description": "Hosting code repositories and contributing to open-source projects." }
    ]
};

const About = () => {
    return (
        <section 
            id="about" 
            className="py-20 text-gray-400 "
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
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in-down dark:text-gray-950">
                    About Me
                </h2>
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                    {aboutData.description.map((p, index) => (
                        <p key={index} className="text-lg md:text-xl text-center md:text-left leading-relaxed dark:text-gray-700">
                            {p}
                        </p>
                    ))}
                </div>
                <div className="mt-16 animate-fade-in-up animation-delay-500">
                    <h3 className="text-3xl font-semibold text-center text-white mb-8 dark:text-gray-950">
                        My Expertise
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                        {aboutData.skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 dark:bg-gray-200 dark:border-gray-300"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12 mb-2"
                                />
                                <h4 className="text-md font-medium text-white dark:text-gray-900">{skill.name}</h4>
                                <p className="text-sm text-gray-400 mt-1 dark:text-gray-600">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;