import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const categories = ['All', 'Beauty', 'Lifestyle'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4">Selected Works</span>
          <h2 className="font-serif text-5xl md:text-6xl text-brown-900 mb-8 leading-tight">
            Curated <span className="italic text-brown-500">Portfolio</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 border-b border-brown-900/10 pb-4 px-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${activeCategory === category
                  ? 'text-brown-900 font-medium'
                  : 'text-brown-400 hover:text-brown-800'
                  }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-[-17px] left-0 w-full h-px bg-brown-900" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col gap-4"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setIsHovered(project.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-brown-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-sm">

                {/* Media */}
                {project.type === 'video' && project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    poster={project.thumbnailUrl}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    ref={el => {
                      if (el) isHovered === project.id ? el.play() : el.pause();
                    }}
                  />
                ) : (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}

                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <Play fill="currentColor" size={20} className="ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex justify-between items-start pt-2">
                <div>
                  <h3 className="font-serif text-xl text-brown-900 group-hover:text-gold-600 transition-colors">{project.title}</h3>
                  <p className="text-xs font-sans text-brown-400 uppercase tracking-widest mt-1">{project.category}</p>
                </div>
                <ArrowUpRight size={20} className="text-brown-300 group-hover:text-brown-900 transition-colors opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brown-900/90 backdrop-blur-sm p-6 animate-fade-in" onClick={() => setSelectedProject(null)}>
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X size={40} strokeWidth={0.5} />
          </button>

          <div
            className="w-full max-w-sm aspect-[9/16] bg-black shadow-2xl overflow-hidden rounded-lg animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            {selectedProject.type === 'video' && selectedProject.videoUrl ? (
              <video
                src={selectedProject.videoUrl}
                poster={selectedProject.thumbnailUrl}
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selectedProject.thumbnailUrl}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            )}

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <h3 className="text-white font-serif text-2xl">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
