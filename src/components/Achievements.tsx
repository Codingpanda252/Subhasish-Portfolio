import React from 'react';
import { achievements } from '../data/achievements';
import {
  Award, Trophy, Star, Laptop, Medal, Globe,
  ShieldCheck, UserCheck, Target
} from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  trophy: <Trophy size={40} className="text-pink-400" />,
  award: <Award size={40} className="text-yellow-400" />,
  star: <Star size={40} className="text-orange-300" />,
  laptop: <Laptop size={40} className="text-blue-400" />,
  medal: <Medal size={40} className="text-green-300" />,
  globe: <Globe size={40} className="text-purple-300" />,
  shield: <ShieldCheck size={40} className="text-indigo-300" />,
  mentor: <UserCheck size={40} className="text-blue-300" />,
  target: <Target size={40} className="text-yellow-300" />
};

const tileThemes: Record<string, {
  bg: string;
  border: string;
  text: string;
  highlight: string;
  highlightColor: string;
  highlightIcon: JSX.Element;
}> = {
  'WCRP Research Fellow': {
    bg: 'bg-gradient-to-br from-yellow-100/20 to-orange-100/10',
    border: 'border-yellow-300',
    text: 'text-yellow-300',
    highlight: 'International Research Fellowship',
    highlightColor: 'text-yellow-300',
    highlightIcon: <Globe size={14} />
  },
  '12x Hackathon Champion': {
    bg: 'bg-gradient-to-br from-purple-600/20 to-pink-500/10',
    border: 'border-pink-300',
    text: 'text-pink-300',
    highlight: 'Hackathon Excellence',
    highlightColor: 'text-pink-400',
    highlightIcon: <Trophy size={14} />
  },
  'Top 5% Performer': {
    bg: 'bg-gradient-to-br from-yellow-200/10 to-yellow-300/10',
    border: 'border-yellow-200',
    text: 'text-yellow-200',
    highlight: 'Top 5% Achiever',
    highlightColor: 'text-yellow-200',
    highlightIcon: <Target size={14} />
  },
  'NRL Clean Energy Finalist': {
    bg: 'bg-gradient-to-br from-indigo-300/10 to-indigo-500/10',
    border: 'border-indigo-300',
    text: 'text-indigo-300',
    highlight: 'Finalist – Energy Innovation',
    highlightColor: 'text-indigo-300',
    highlightIcon: <ShieldCheck size={14} />
  },
  'Hackathon Mentor': {
    bg: 'bg-gradient-to-br from-blue-300/10 to-blue-500/10',
    border: 'border-blue-300',
    text: 'text-blue-300',
    highlight: 'Mentorship & Guidance',
    highlightColor: 'text-blue-300',
    highlightIcon: <UserCheck size={14} />
  },
  'Hackathon Series Winner': {
    bg: 'bg-gradient-to-br from-green-300/10 to-green-500/10',
    border: 'border-green-300',
    text: 'text-green-300',
    highlight: 'Multi Hackathon Champion',
    highlightColor: 'text-green-300',
    highlightIcon: <Medal size={14} />
  }
};

const Achievements = () => (
  <section id="achievements" className="py-24 px-6 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="absolute w-96 h-96 bg-gradient-to-r from-yellow-200/10 via-pink-200/10 to-purple-300/10 rounded-full blur-3xl pointer-events-none -z-10 left-[calc(50%-12rem)] top-10 animate-pulse" />

    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-in">
        Achievements
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((ach, i) => {
          const theme = tileThemes[ach.title] || {
            bg: 'bg-white/10',
            border: 'border-white/20',
            text: 'text-purple-300',
            highlight: '',
            highlightColor: 'text-white/70',
            highlightIcon: <Award size={14} />
          };

          return (
            <div
              key={i}
              className={`group text-center rounded-3xl p-6 border ${theme.bg} ${theme.border} transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-purple-500/30 animate-slide-in-up`}
            >
              <div className={`mb-4 flex justify-center ${theme.text} animate-fade-in delay-[${i * 100}ms]`}>
                {iconMap[ach.icon] || <Award size={40} className="text-purple-300" />}
              </div>

              <h3 className={`text-lg font-bold mb-2 ${theme.text} transition-colors duration-300 group-hover:text-white`}>
                {ach.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed transition-opacity duration-500 group-hover:opacity-100">
                {ach.desc}
              </p>

              {theme.highlight && (
                <div className={`mt-3 text-xs font-medium flex items-center justify-center gap-2 ${theme.highlightColor} animate-bounce-slow`}>
                  {theme.highlightIcon} {theme.highlight}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

    <style jsx>{`
      @keyframes slide-in-up {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes bounce-slow {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .animate-slide-in-up {
        animation: slide-in-up 0.7s ease forwards;
      }
      .animate-bounce-slow {
        animation: bounce-slow 2s infinite;
      }
      .animate-fade-in {
        animation: fade-in 1.2s ease forwards;
      }
    `}</style>
  </section>
);

export default Achievements;
