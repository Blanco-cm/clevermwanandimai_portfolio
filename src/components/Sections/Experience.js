import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Tech Corp Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Led development of multiple web applications using React and Spring Boot",
    },
    {
      company: "Startup XYZ",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Developed user interfaces and implemented responsive designs",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;