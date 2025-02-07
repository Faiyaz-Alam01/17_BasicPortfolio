import React from 'react';
import img from '/Faiyazalam.jpg'

const About = () => {
  // Skill data with percentages
  const skills = [
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 85 },
    { name: 'HTML & CSS', percentage: 90 },
    { name: 'C++', percentage: 80 },
    { name: 'Node.js & Express', percentage: 60 },
    { name: 'Git & Version Control', percentage: 75 },
  ];

  return (
    <section id="about" className="py-16 px-8 sm:px-0 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={img} // Replace with your image URL
              alt="Your Name"
              className="w-48 h-72 object-cover shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3">
            <p className="text-lg text-gray-600 mb-6">
              Hi, I'm <b>Faiyaz Alam</b>, a passionate Front-End developer 
              with a love for creating innovative and user-friendly solutions.
            </p>

            {/* Skills Section with Progress Bars */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-md font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-md font-medium text-gray-700">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;