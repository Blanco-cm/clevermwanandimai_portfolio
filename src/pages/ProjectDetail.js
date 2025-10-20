import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Project Details - {id}
        </h1>
      </div>
    </div>
  );
};

export default ProjectDetail;