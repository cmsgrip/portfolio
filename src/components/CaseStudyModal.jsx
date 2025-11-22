import React from 'react';
import { X } from 'lucide-react';

const CaseStudyModal = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-accent">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-accent/10 text-accent font-mono text-sm rounded-full border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">The Challenge</h3>
            <p>{project.caseStudy.challenge}</p>

            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 my-4">The Solution</h3>
            <p>{project.caseStudy.solution}</p>
            <ul>
              {project.caseStudy.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 my-4">The Results</h3>
            <p>{project.caseStudy.results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
