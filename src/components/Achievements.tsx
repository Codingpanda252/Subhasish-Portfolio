import React from 'react';
import { achievements } from '../data/achievements';
import {
  Award,
  Trophy,
  Star,
  Laptop,
  Medal,
  Globe,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  BadgeCheck
} from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  trophy: <Trophy size={40} className="text-pink-400 group-hover:text-pink-300 transition" />,
  award: <Award size={40} className="text-purple-400 group-hover:text-purple-300 transition" />,
  star: <Star size={40} className="text-yellow-300 group-hover:text-yellow-200 transition" />,
  laptop: <Laptop size={40} className="text-blue-400 group-hover:text-blue-300 transition" />,
  medal: <Medal size={40} className="text-green-400 group-hover:text-green-300 transition" />,
  globe: <Globe size={40} className="text-yellow-300 animate-pulse" />,
  shield: <ShieldCheck size={40} className="text-indigo-300 group-hover:text-indigo-200 transition" />,
  sparkle: <Sparkles size={40} className="text-pink-300" />,
  idea: <Lightbulb size={40} className="text-yellow-200" />,
  badge: <BadgeCheck size={40} className="text-purple-300" />
};

const Achievements = () => (
  <section id="achievements" className="py-24 px-6 relative">
    <div className="absolute w-96 h-96 bg-gradient-to-r from-yellow-200/10 via-pink-200/10 to-purple-300/10 rounded-full blur-3xl pointer-events-none -z-10 left-[calc(50%-12rem)] top-10" />

    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((ach, i) => {
          const isHackathon = ach.title.toLowerCase().includes('hackathon');
          const icon = iconMap[ach.icon] || <Award size={40} className="text-purple-300" />;

          return (
            <div
              key={i}
              className={`group text-center rounded-3xl p-6 border transition-all duration-300 hover:scale-[1.035] shadow-xl hover:shadow-2xl ${
                ach.special
                  ? 'bg-gradient-to-br from-yellow-100/20 via-yellow-300/10 to-orange-100/10 border-yellow-300'
                  : isHackathon
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-500/10 border-pink-300'
                  : 'bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15'
              }`}
            >
              <div className="mb-4 flex justify-center">{icon}</div>

              <h3
                className={`text-lg font-bold mb-2 ${
                  ach.special
                    ? 'text-yellow-300'
                    : isHackathon
                    ? 'text-pink-300'
                    : 'text-purple-300'
                }`}
              >
                {ach.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">{ach.desc}</p>

              {ach.special && (
                <div className="mt-3 text-xs font-semibold text-yellow-300 flex items-center justify-center gap-2 drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]">
                  <Globe size={14} /> International Achievement
                </div>
              )}

              {isHackathon && !ach.special && (
                <div className="mt-3 text-xs font-medium text-pink-400 flex items-center justify-center gap-2 drop-shadow-[0_0_3px_rgba(255,105,180,0.5)]">
                  <Trophy size={14} /> Hackathon Excellence
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Achievements;
