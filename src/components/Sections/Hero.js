// src/components/Sections/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const navigate = useNavigate();
  const scrollToProjects = () => {
    navigate('/projects');
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800">
              {/* Placeholder for profile image */}
              <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Full Stack Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I create <span className="text-blue-600 dark:text-blue-400">beautiful</span> and{' '}
            <span className="text-blue-600 dark:text-blue-400">functional</span> web applications
            using modern technologies like React, Spring Boot, and Cloud Services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/assets/CLEVER_MWANANDIMAI_CV.pdf"
              download
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <FiDownload /> Download CV
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:hello@example.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;