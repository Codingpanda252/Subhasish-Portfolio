import React from 'react';
import { projects } from '../data/projects';
import { BadgeCheck } from 'lucide-react';

const Projects = () => (
  <section id="projects" className="py-24 px-6 relative">
    <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none left-[calc(50%-12rem)] top-10 -z-10" />
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 transition-transform duration-300 group cursor-pointer"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transform transition-transform duration-300">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-purple-300 mb-1">
              {project.title}
            </h3>
            <p className="text-white/80 font-semibold text-sm mb-2">
              {project.subtitle}
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-purple-500/20 text-sm text-purple-100 rounded-full border border-purple-400/40 hover:bg-purple-500/30 transition flex items-center gap-1"
                >
                  <BadgeCheck size={14} /> {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
