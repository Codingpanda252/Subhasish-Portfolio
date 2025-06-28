import React, { useState, useEffect } from 'react';
import { BadgeCheck, ExternalLink, Briefcase, Zap, Star, Trophy, Gamepad2, Cpu, Code, Rocket, Users, Award, Building } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scanningLine, setScanningLine] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanningLine(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Helper functions to handle missing data fields
  const getExperienceType = (exp, index) => {
    if (exp.type) return exp.type;
    if (index === 0) return 'legendary';
    if (index === 1) return 'rare';
    return 'common';
  };

  const getSkillLevel = (exp, index) => {
    if (exp.level) return exp.level;
    const levels = [95, 87, 75, 65, 55, 50, 45, 40, 35];
    return levels[index] || 50;
  };

  const getIcon = (exp, index) => {
    if (exp.icon) return exp.icon;
    const icons = [
      <Rocket size={32} />, 
      <Users size={32} />, 
      <Code size={32} />, 
      <Award size={32} />, 
      <Cpu size={32} />,
      <Briefcase size={32} />,
      <Building size={32} />,
      <Trophy size={32} />
    ];
    return icons[index] || <Briefcase size={32} />;
  };

  const getSkills = (exp) => {
    if (exp.skills && exp.skills.length > 0) return exp.skills;
    if (exp.technologies && exp.technologies.length > 0) return exp.technologies;
    return ['JavaScript', 'React', 'Node.js']; // fallback
  };

  const getAchievements = (exp) => {
    if (exp.achievements && exp.achievements.length > 0) return exp.achievements;
    return [
      "Successfully completed project deliverables",
      "Collaborated with cross-functional teams", 
      "Gained valuable industry experience",
      "Developed technical and soft skills"
    ];
  };

  const getTechStack = (exp) => {
    if (exp.techStack) return exp.techStack;
    return {
      "Frontend": "React, JavaScript, CSS",
      "Backend": "Node.js, Express",
      "Tools": "Git, VS Code, npm"
    };
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'rare': return 'from-blue-400 to-purple-500';
      case 'common': return 'from-green-400 to-teal-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getTypeGlow = (type) => {
    switch (type) {
      case 'legendary': return 'shadow-[0_0_40px_rgba(255,215,0,0.4)]';
      case 'rare': return 'shadow-[0_0_40px_rgba(59,130,246,0.4)]';
      case 'common': return 'shadow-[0_0_40px_rgba(34,197,94,0.4)]';
      default: return 'shadow-[0_0_40px_rgba(107,114,128,0.4)]';
    }
  };

  if (isLoading) {
    return (
      <section id="experience" className="py-24 px-6 relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto flex items-center justify-center h-full">
          <div className="text-center">
            <div className="relative">
              <div className="w-32 h-32 border-4 border-yellow-400 rounded-full mx-auto mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-spin" />
                <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
                  <Gamepad2 className="text-yellow-400 animate-pulse" size={32} />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-mono">
              LOADING EXPERIENCE DATA...
            </h2>
            <div className="w-64 h-2 bg-slate-800 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 px-6 relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse top-20 left-20" />
        <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse bottom-20 right-20" />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Scanning Line Effect */}
      <div 
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 transition-all duration-75"
        style={{ top: `${scanningLine}%` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cyberpunk Gaming Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            {/* Main Header Container */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl px-8 py-6 border-2 border-cyan-400 relative overflow-hidden">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 animate-pulse" />
                <div className="grid grid-cols-8 grid-rows-4 h-full w-full">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="border border-cyan-400/10" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6 relative z-10">
                {/* Terminal Icon */}
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center border-2 border-cyan-300 shadow-lg shadow-cyan-400/30">
                    <Gamepad2 className="text-slate-900" size={24} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-slate-900" />
                </div>
                
                {/* Title */}
                <div className="text-center">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-mono tracking-wider mb-2">
                    EXPERIENCE
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-green-400 font-mono text-sm">
                    <span className="animate-pulse">●</span>
                    <span>NEURAL_LINK_ACTIVE</span>
                    <span className="animate-pulse">●</span>
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="flex flex-col gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-150 shadow-lg shadow-yellow-400/50" />
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-300 shadow-lg shadow-cyan-400/50" />
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
            </div>
            
            {/* Terminal Output */}
            <div className="mt-4 bg-slate-900 rounded-lg px-6 py-3 border border-slate-600 shadow-xl">
              <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                <span className="text-cyan-400">$</span>
                <span className="animate-pulse">█</span>
                <span>cat ~/career/experiences.json | wc -l</span>
              </div>
              <div className="text-green-400 font-mono text-sm mt-1">
                <span className="text-yellow-400">&gt;</span> {experience.length} professional experiences loaded
              </div>
              <div className="text-green-400 font-mono text-sm">
                <span className="text-yellow-400">&gt;</span> neural_network.status: <span className="text-cyan-400">ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experience.map((exp, index) => {
            const expType = getExperienceType(exp, index);
            const skillLevel = getSkillLevel(exp, index);
            const expIcon = getIcon(exp, index);
            const expSkills = getSkills(exp);
            const expAchievements = getAchievements(exp);
            const expTechStack = getTechStack(exp);
            const expId = exp.id !== undefined ? exp.id : index;
            
            return (
              <div
                key={expId}
                className={`group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border-2 border-slate-600 overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer ${selectedExp === expId ? getTypeGlow(expType) : 'hover:shadow-2xl'}`}
                onClick={() => setSelectedExp(selectedExp === expId ? null : expId)}
              >
                {/* Card Type Indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getTypeColor(expType)}`} />
                
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getTypeColor(expType)} text-white shadow-lg`}>
                        {expIcon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 font-mono">
                          {exp.title}
                        </h3>
                        <p className="text-yellow-400 font-semibold text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 font-mono bg-slate-800 px-3 py-1 rounded-full border border-slate-600">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300 font-mono">SKILL LEVEL</span>
                      <span className="text-sm text-yellow-400 font-mono font-bold">{skillLevel}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden border border-slate-600">
                      <div 
                        className={`h-full bg-gradient-to-r ${getTypeColor(expType)} transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skillLevel}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {expSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-mono border border-slate-600 hover:bg-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getTypeColor(expType)} animate-pulse`} />
                      <span className="text-xs text-slate-400 font-mono uppercase">
                        {expType} CLASS
                      </span>
                    </div>
                    <div className="text-slate-500 text-xs font-mono">
                      {selectedExp === expId ? '▼ EXPANDED' : '▶ CLICK TO EXPAND'}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedExp === expId && (
                    <div className="mt-6 pt-6 border-t border-slate-600 opacity-0 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                          <div className="flex items-center gap-2 mb-3">
                            <Trophy className="text-yellow-400" size={16} />
                            <span className="font-mono text-yellow-400 font-bold">ACHIEVEMENTS</span>
                          </div>
                          <ul className="text-slate-300 space-y-2 text-xs">
                            {expAchievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                          <div className="flex items-center gap-2 mb-3">
                            <Zap className="text-blue-400" size={16} />
                            <span className="font-mono text-blue-400 font-bold">TECH STACK</span>
                          </div>
                          <div className="text-slate-300 text-xs space-y-1">
                            {Object.entries(expTechStack).map(([key, value]) => (
                              <div key={key} className="mb-2">
                                <span className="text-yellow-400 font-mono">{key}:</span>
                                <span className="ml-2">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-30" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-400 opacity-30" />
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800/90 backdrop-blur-xl rounded-2xl border-2 border-slate-600 p-6">
            <div className="flex items-center justify-center gap-8 text-sm font-mono">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">{experience.length}</div>
                <div className="text-slate-400">POSITIONS</div>
              </div>
              <div className="w-px h-12 bg-slate-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">3+</div>
                <div className="text-slate-400">YEARS EXP</div>
              </div>
              <div className="w-px h-12 bg-slate-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">25+</div>
                <div className="text-slate-400">PROJECTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Experience;