import React from 'react';
import { BadgeCheck, ExternalLink, Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => (
  <section id="experience" className="py-24 px-6 relative">
    <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl pointer-events-none right-[calc(50%-12rem)] top-12 -z-10" />
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
        Professional Experience
      </h2>
      <div className="space-y-12">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-yellow-300/5 to-yellow-500/5 backdrop-blur-xl rounded-3xl p-8 border border-yellow-300/20 shadow-2xl hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-yellow-400">
                  {exp.icon || <Briefcase size={32} />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-yellow-200 font-medium">{exp.company}</p>
                </div>
              </div>
              <span className="text-sm text-yellow-100 bg-yellow-400/10 px-4 py-1 rounded-full border border-yellow-300/30">
                {exp.duration}
              </span>
            </div>
            <p className="text-white/90 leading-relaxed text-sm tracking-wide">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;