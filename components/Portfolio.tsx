import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Play, X } from 'lucide-react';
import { Project } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'video' | 'image'>('video');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Shuffle projects on mount to ensure random order every time
    const shuffled = [...PROJECTS].sort(() => Math.random() - 0.5);
    setProjects(shuffled);
  }, []);

  const filteredProjects = projects.filter(p => p.type === filter);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">Selected Works</h2>
          <p className="text-stone-500 font-sans mb-8">A curation of lifestyle, beauty, and wellness content.</p>

          <div className="flex justify-center space-x-6">
            <button
              onClick={() => setFilter('video')}
              className={`text-sm tracking-widest uppercase pb-1 border-b-2 transition-colors ${filter === 'video' ? 'text-stone-900 border-stone-900' : 'text-stone-400 border-transparent hover:text-stone-600'
                }`}
            >
              Reels
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`text-sm tracking-widest uppercase pb-1 border-b-2 transition-colors ${filter === 'image' ? 'text-stone-900 border-stone-900' : 'text-stone-400 border-transparent hover:text-stone-600'
                }`}
            >
              Gallery
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative aspect-[9/16] overflow-hidden bg-stone-200"
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
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300 flex items-center justify-center">
                {project.type === 'video' && (
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <Play className="text-white fill-current w-6 h-6 ml-1" />
                  </div>
                )}
              </div>

              {/* Text info bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white/80 text-xs uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-white font-serif text-xl leading-tight whitespace-normal">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/90 backdrop-blur-sm p-4">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
          >
            <X size={40} strokeWidth={1} />
          </button>

          <div className="w-full max-w-sm md:max-w-md aspect-[9/16] bg-black relative">
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
