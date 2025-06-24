import React from 'react';
import { skills } from '../data/skills';
import { Code, Cpu, Database, Layout, Wrench, Zap } from 'lucide-react'; // ✅ replaced Tool with Wrench

const iconMap: Record<string, JSX.Element> = {
  languages: <Code className="text-purple-300" size={24} />,
  frontend: <Layout className="text-pink-300" size={24} />,
  backend: <Cpu className="text-yellow-300" size={24} />,
  database: <Database className="text-green-300" size={24} />,
  aiml: <Zap className="text-blue-300" size={24} />,
  tools: <Wrench className="text-orange-300" size={24} />, // ✅ fixed
};

const Skills = () => (
  <section id="skills" className="py-24 px-6 relative">
    <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none left-[calc(50%-12rem)] top-12 -z-10" />
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {iconMap[category]}
              <h3 className="text-xl font-bold text-white">
                {category.charAt(0).toUpperCase() + category.slice(1).replace('aiml', 'AI/ML')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-500/20 text-sm text-purple-100 rounded-full border border-purple-400/40 hover:bg-purple-500/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
