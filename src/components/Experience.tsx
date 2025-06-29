// UltraFuturisticExperienceTimeline.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gamepad2, Trophy, Zap, Rocket, Users, Code, Award, Cpu,
  Briefcase, Building, MousePointerClick
} from 'lucide-react';
import { experience } from '../data/experience';

const dynamicTitles = [
  'Initializing Secure Terminal v4.7 — Welcome, Operator',
  'Establishing Encrypted Channel: Status OK',
  'Accessing Timeline Archive [Verified ✅]',
  'System Timestamp: ' + new Date().toLocaleString(),
  'Console Output > Rendering Experience Log Entries...',
  'Log Status: All entries decrypted & indexed successfully'
];

const getIcon = (index: number) => {
  const icons = [
    <Rocket size={18} />, <Users size={18} />, <Code size={18} />,
    <Award size={18} />, <Cpu size={18} />, <Briefcase size={18} />,
    <Building size={18} />, <Trophy size={18} />
  ];
  return icons[index % icons.length];
};

const getColor = (type: string) => {
  switch (type) {
    case 'legendary': return 'from-yellow-300 to-orange-400';
    case 'rare': return 'from-blue-400 to-indigo-500';
    default: return 'from-green-300 to-teal-400';
  }
};

const getGlow = (type: string) => {
  switch (type) {
    case 'legendary': return 'shadow-[0_0_30px_5px_rgba(234,179,8,0.4)]';
    case 'rare': return 'shadow-[0_0_30px_5px_rgba(96,165,250,0.4)]';
    default: return 'shadow-[0_0_30px_5px_rgba(52,211,153,0.4)]';
  }
};

const Experience = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [scanningLine, setScanningLine] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % dynamicTitles.length);
    }, 4000);
    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanningLine((prev) => (prev + 1) % 100);
    }, 45);
    return () => clearInterval(scanInterval);
  }, []);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      <motion.div
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-20"
        animate={{ top: `${scanningLine}%` }}
        transition={{ duration: 0.2 }}
      />

      {/* Header */}
      <div className="text-center mb-20 z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-slate-900/80 px-6 py-5 rounded-xl border-2 border-cyan-500 shadow-xl backdrop-blur"
        >
          <div className="flex items-center justify-center gap-4">
            <Gamepad2 className="text-cyan-300 animate-pulse" size={24} />
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 font-mono tracking-wide animate-fade-in">
              {dynamicTitles[currentTitleIndex]}
            </h2>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
          </div>
        </motion.div>
        <p className="mt-3 text-sm text-slate-400 font-mono">
          <MousePointerClick className="inline mr-2 animate-bounce" size={14} />
          Select an experience node to display its full system log entry
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-white/10 to-pink-400 rounded-full" />
        <div className="flex flex-col gap-10">
          {experience.map((exp, index) => {
            const type = exp.type || (index === 0 ? 'legendary' : index === 1 ? 'rare' : 'common');
            const icon = getIcon(index);
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group p-6 border border-slate-700 bg-slate-900/70 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-xl rounded-xl cursor-pointer ${selected === index ? getGlow(type) : ''}`}
                onClick={() => setSelected(selected === index ? null : index)}
              >
                <div className={`absolute left-[-38px] top-6 w-5 h-5 rounded-full bg-gradient-to-r ${getColor(type)} shadow-md flex items-center justify-center`}>
                  {icon}
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-mono">{exp.title}</h3>
                    <p className="text-sm text-yellow-400 font-mono">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-400 font-mono bg-slate-700 px-2 py-1 rounded">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-slate-300 text-sm italic mb-2 line-clamp-2 sm:line-clamp-none">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {(exp.skills || []).map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-slate-700 text-slate-300 rounded-full font-mono border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-slate-400 font-mono flex justify-between">
                  <span className="uppercase tracking-wider">{type} Class</span>
                  <span className="text-pink-400 animate-pulse">📂 Open Log Record</span>
                </div>

                <AnimatePresence>
                  {selected === index && (
                    <motion.div
                      className="mt-4 border-t border-slate-600 pt-4 text-sm text-slate-300 font-mono"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-yellow-300 mb-1 font-bold">
                          <Trophy size={14} /> Experience Log Entry — Detailed Record
                        </div>
                        <ul className="space-y-1 list-disc list-inside">
                          {(exp.achievements || []).map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-blue-300 mb-1 font-bold">
                          <Zap size={14} /> Tech Stack
                        </div>
                        <div>
                          {Object.entries(exp.techStack || {}).map(([k, v]) => (
                            <div key={k}><span className="text-pink-300">{k}:</span> {v}</div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
