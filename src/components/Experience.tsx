import React, { useState, useEffect } from 'react';
import {
  Gamepad2, Trophy, Zap, Rocket, Users, Code, Award, Cpu,
  Briefcase, Building, MousePointerClick
} from 'lucide-react';
import { experience } from '../data/experience';

const dynamicTitles = [
  'Neural Link Active',
  'Syncing Experience Log',
  'Fetching Past Missions',
  'Initializing Memory Trace',
  'Optimizing Achievements',
  'Decrypting Projects...'
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [scanningLine, setScanningLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % dynamicTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setScanningLine((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(lineInterval);
  }, []);

  const getIcon = (index: number) => {
    const icons = [
      <Rocket size={24} />, <Users size={24} />, <Code size={24} />,
      <Award size={24} />, <Cpu size={24} />, <Briefcase size={24} />,
      <Building size={24} />, <Trophy size={24} />
    ];
    return icons[index % icons.length];
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'rare': return 'from-blue-400 to-purple-500';
      default: return 'from-green-400 to-teal-500';
    }
  };

  const getGlow = (type: string) => {
    switch (type) {
      case 'legendary': return 'shadow-[0_0_40px_rgba(255,215,0,0.4)]';
      case 'rare': return 'shadow-[0_0_40px_rgba(59,130,246,0.4)]';
      default: return 'shadow-[0_0_40px_rgba(34,197,94,0.4)]';
    }
  };

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Scanning Line */}
      <div
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 transition-all duration-75"
        style={{ top: `${scanningLine}%` }}
      />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 rounded-xl border-2 border-cyan-400 relative">
          <div className="flex items-center justify-center gap-4">
            <Gamepad2 className="text-yellow-400 animate-pulse" size={24} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-mono tracking-wide">
              {dynamicTitles[currentTitleIndex]}
            </h2>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-400 font-mono">
          <MousePointerClick className="inline mr-2 animate-bounce" size={14} />
          Click a card to reveal experience details
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto relative z-10">
        {experience.map((exp, index) => {
          const type = exp.type || (index === 0 ? 'legendary' : index === 1 ? 'rare' : 'common');
          const icon = getIcon(index);
          const years = exp.years ?? 1;
          const xp = 200 + years * 150;
          const xpPercent = Math.min((xp / 1000) * 100, 100);

          return (
            <div
              key={index}
              className={`relative rounded-xl border border-slate-700 p-6 bg-slate-800/60 backdrop-blur-md hover:scale-105 transition-all duration-500 cursor-pointer ${selectedExp === index ? getGlow(type) : ''}`}
              onClick={() => setSelectedExp(selectedExp === index ? null : index)}
            >
              {/* Type Indicator */}
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${getColor(type)}`} />

              {/* Card Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-3 items-start">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${getColor(type)} text-white`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-yellow-400 text-sm">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded font-mono">{exp.duration}</span>
              </div>

              {/* XP Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-sm font-mono text-slate-300">
                  <span>XP Level</span>
                  <span className="text-yellow-400 font-bold">{xp} XP</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full bg-gradient-to-r ${getColor(type)} animate-grow`}
                    style={{ width: `${xpPercent}%` }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-3">
                {(exp.skills || exp.technologies || ['JavaScript', 'React']).map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-3 line-clamp-2 sm:line-clamp-none">
                {exp.description}
              </p>

              {/* Footer */}
              <div className="text-xs text-slate-400 font-mono flex justify-between">
                <span className="uppercase">{type} Class</span>
                <span className="text-yellow-500 animate-pulse">▶ View More</span>
              </div>

              {/* Expanded Section */}
              {selectedExp === index && (
                <div className="mt-4 border-t border-slate-600 pt-4 animate-fadeIn">
                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2 text-yellow-400 font-mono font-bold">
                      <Trophy size={14} /> Achievements
                    </div>
                    <ul className="text-slate-300 space-y-1 text-sm list-disc list-inside">
                      {(exp.achievements || [
                        'Delivered quality features',
                        'Collaborated with teams',
                        'Optimized systems'
                      ]).map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-blue-400 font-mono font-bold">
                      <Zap size={14} /> Tech Stack
                    </div>
                    <div className="text-slate-300 text-sm">
                      {Object.entries(exp.techStack || {
                        Frontend: 'React, TailwindCSS',
                        Backend: 'Node.js, Express',
                        Tools: 'Git, Docker'
                      }).map(([k, v]) => (
                        <div key={k}><span className="text-yellow-400 font-mono">{k}:</span> {v}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fade In Keyframe */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Experience;
