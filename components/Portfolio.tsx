import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Play, X } from 'lucide-react';
import { Project } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [projects] = useState<Project[]>(PROJECTS);

  const categories = ['All', 'Beauty', 'Fashion', 'Lifestyle'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <span className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl text-brown-900 mb-6">Selected Works</h2>
          <p className="text-brown-800/60 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            A curation of high-performing content across key verticals.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs md:text-sm tracking-[0.2em] uppercase pb-2 border-b transition-all duration-300 ${activeCategory === category
                    ? 'text-brown-900 border-gold-500'
                    : 'text-brown-800/40 border-transparent hover:text-brown-800 hover:border-brown-900/20'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[50vh]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative aspect-[9/16] overflow-hidden bg-beige-200"
              onClick={() => setSelectedProject(project)}
            >
              {/* Show video preview if available and it's a video project, otherwise image */}
              {project.type === 'video' && project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  onMouseOver={e => e.currentTarget.play()}
                  onMouseOut={e => e.currentTarget.pause()}
                />
              ) : (
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-brown-900/0 group-hover:bg-brown-900/10 transition-colors duration-300 flex items-center justify-center">
                {project.type === 'video' && (
                  <div className="w-16 h-16 rounded-full bg-cream-50/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 border border-cream-50/30">
                    <Play className="text-cream-50 fill-current w-6 h-6 ml-1" />
                  </div>
                )}
              </div>

              {/* Text info bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brown-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-gold-400 text-[10px] uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-cream-50 font-display text-xl leading-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brown-900/95 backdrop-blur-md p-4 animate-fade-in">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-cream-50/70 hover:text-gold-500 transition-colors"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="w-full max-w-sm md:max-w-md aspect-[9/16] bg-black relative shadow-2xl">
            {/* Video or Image */}
            {selectedProject.type === 'video' && selectedProject.videoUrl ? (
              <video
                src={selectedProject.videoUrl}
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selectedProject.thumbnailUrl}
                alt={selectedProject.title}
                className="w-full h-full object-contain bg-black"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
