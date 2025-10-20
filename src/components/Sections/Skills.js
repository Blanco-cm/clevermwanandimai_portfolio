import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'Java', level: 88 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'PostgreSQL', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;