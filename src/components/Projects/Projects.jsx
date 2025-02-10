import React from 'react';
import img1 from "/img1.jpg"
import { motion } from 'motion/react';
import useTheme from '../theme/Context';

const Projects = () => {
  const {themeMode} = useTheme(); 
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'A brief description of Project 1. This project demonstrates my skills in [specific technologies].',
      image: img1, // Replace with your project image URL
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      liveLink: 'https://example.com', // Replace with your project's live link
      codeLink: 'https://github.com/Faiyaz-Alam01/17_BasicPortfolio.git', // Replace with your project's code repository
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Weatther app created  created using Fetch Api Weatther app created using Fetch Api .',
      image: 'https://img.freepik.com/free-photo/silhoutte-birds-flying-young-woman-taking-photo-sunset_335224-914.jpg?semt=ais_hybrid', // Replace with your project image URL
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://example.com', // Replace with your project's live link
      codeLink: 'https://github.com/Faiyaz-Alam01/JavaScript-Project.git', // Replace with your project's code repository
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A brief description of Project 3. This project highlights my expertise in [specific area].',
      image: 'https://img.freepik.com/free-photo/man-with-camera-world-photographer-day_1150-23260.jpg?semt=ais_hybrid', // Replace with your project image URL
      technologies: ['Python', 'Django', 'PostgreSQL'],
      liveLink: 'https://example.com', // Replace with your project's live link
      codeLink: 'https://github.com/example', // Replace with your project's code repository
    },
  ];

  return (
    <section id="projects" className={`py-16 ${themeMode === 'dark' ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center   mb-12">
          Projects
        </h2>
        <div 
          
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="dark:text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    View Code
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