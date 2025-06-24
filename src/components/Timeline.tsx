import React from 'react';
import { timeline, TimelineItem } from '../data/timeline';
import {
  Briefcase, Flag, Rocket, School, GraduationCap, Globe,
  Users, Flame, Award, Code2, Lightbulb, Building2, BookUser, BrainCircuit, ShieldCheck
} from 'lucide-react';

const iconMap: Record<TimelineItem['icon'], JSX.Element> = {
  work: <Briefcase size={28} className="text-white" />,
  milestone: <Award size={28} className="text-white" />,
  launch: <Rocket size={28} className="text-white" />,
  institute: <School size={28} className="text-white" />,
  education: <GraduationCap size={28} className="text-white" />,
  japan: <Globe size={28} className="text-yellow-300 animate-pulse" />,
  community: <Users size={28} className="text-white" />,
  ignite: <Flame size={28} className="text-white" />,
  innovation: <Lightbulb size={28} className="text-white" />,
  coding: <Code2 size={28} className="text-white" />
};

const highlightIconMap: Record<string, JSX.Element> = {
  'International Research Fellowship': <Globe size={16} />,
  'Government Internship Experience': <ShieldCheck size={16} />,
  'Leadership & Community Building': <Users size={16} />,
  'Tech Culture Initiator': <Flame size={16} />,
  'Academic Journey Begins': <BookUser size={16} />
};

const Timeline = () => (
  <section id="timeline" className="py-24 px-6 relative">
    <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none -z-10 left-[calc(50%-12rem)] top-10" />
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
        My Journey
      </h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400" />
        <div className="space-y-10">
          {timeline.map((item, i) => {
            const isJapan = item.icon === 'japan';
            const mainIcon = iconMap[item.icon] || <Flag size={28} className="text-white" />;
            const highlightIcon = item.highlight ? highlightIconMap[item.highlight] : null;

            return (
              <div key={i} className="relative flex items-start gap-8 transition-all duration-300 hover:scale-[1.03] group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-md shrink-0 transition-all duration-300 ${
                  isJapan
                    ? 'bg-gradient-to-r from-red-500 to-yellow-300 border-yellow-300 shadow-yellow-300/50'
                    : 'bg-gradient-to-r from-purple-400 to-pink-400 border-purple-400'
                }`}>
                  {mainIcon}
                </div>

                <div className={`flex-1 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 ${
                  isJapan
                    ? 'bg-yellow-100/5 border-yellow-300 shadow-md shadow-yellow-300/20'
                    : 'bg-white/10 border-white/20'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-300 group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm text-purple-200 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-400/30">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                  {item.highlight && (
                    <div className="mt-3 text-yellow-300 font-medium text-xs md:text-sm flex items-center gap-2">
                      {highlightIcon} {item.highlight}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
