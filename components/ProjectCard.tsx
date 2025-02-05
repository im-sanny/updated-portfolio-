'use client';
import { ProjectCardProps } from '@/app/types';
import { ExternalLink, Github, Layers } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  pattern,
  onHover,
}) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div
      className="group relative aspect-square border border-black hover:border-2 transition-all overflow-hidden"
      onMouseEnter={onHover}
    >
      <div
        className="absolute inset-0 transition-transform duration-700"
        style={{ background: pattern }}
      />

      <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500">
        <div className="p-8 h-full flex flex-col justify-between">
          <div>
            <project.icon className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-4 line-clamp-2">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-600 line-clamp-2">
              {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-black text-sm hover:bg-black hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex justify-between">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              Code
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-600 transition-colors"
            >
              <ExternalLink size={20} />
              Live
            </Link>
            <button
              onClick={() => setIsDetailOpen(!isDetailOpen)}
              className="flex items-center gap-2 hover:text-purple-600 transition-colors"
            >
              <Layers size={20} />
              Details
            </button>
          </div>

          {/* Detailed Project Modal */}
          {isDetailOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 h-screen">
              <div className="bg-white p-8 max-w-2xl w-full h-full max-h-screen">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className="text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2 flex-grow">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
