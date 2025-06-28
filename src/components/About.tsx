// src/components/About.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PresentationControls,
  Float,
  Stars,
  Environment,
  ContactShadows,
  Html,
} from '@react-three/drei';
import {
  Users,
  Lightbulb,
  Rocket,
  Code,
  Award,
  Globe,
  Brain,
  Zap,
  ChevronRight,
  MousePointerClick,
  Cpu,
  Layers,
  LayoutGrid,
  FlaskConical,
  UsersRound,
  Puzzle,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { Model } from './RobotModel';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [
    'Software Engineer',
    'AI/ML Enthusiast',
    '12x Hackathon Winner',
    'Innovation Leader',
    'Tech Visionary',
  ];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setTypedText(currentTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentTitleIndex]);

  const skills = [
    {
      label: "Machine Learning & AI",
      icon: Cpu,
      color: "text-pink-400"
    },
    {
      label: "Modern Web Architecture",
      icon: Layers,
      color: "text-blue-400"
    },
    {
      label: "XR & Immersive Design",
      icon: LayoutGrid,
      color: "text-yellow-400"
    },
    {
      label: "Tech-driven Research",
      icon: FlaskConical,
      color: "text-green-400"
    },
    {
      label: "Leadership & Mentorship",
      icon: UsersRound,
      color: "text-purple-300"
    },
    {
      label: "Analytical Problem Solving",
      icon: Puzzle,
      color: "text-orange-400"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 bg-gradient-to-br from-yellow-300/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none left-[calc(50%-8rem)] sm:left-[calc(50%-9rem)] md:left-[calc(50%-12rem)] top-12 -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-center text-base sm:text-lg md:text-2xl text-white/90 mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm a <span className="text-purple-400">{typedText}</span>
          <span className="animate-pulse text-purple-400">|</span>
        </motion.p>

        <div className="grid gap-14 md:grid-cols-2 md:gap-12">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[18rem] sm:h-[20rem] md:h-[24rem] rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-black/20">
              <Canvas camera={{ position: [0, 1.2, 3.5], fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[0, 5, 5]} intensity={1.2} />
                <Stars radius={30} depth={40} count={1200} factor={4} fade />
                <PresentationControls global config={{ mass: 2, tension: 300 }} polar={[-0.5, 0.5]} azimuth={[-1, 1]} snap>
                  <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
                    <Model scale={0.4} position={[0, -1.1, 0]} />
                  </Float>
                </PresentationControls>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map(({ label, icon: Icon, color }, i) => (
                <motion.div
                  key={label}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-3 sm:p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className={`${color}`} size={18} />
                    <span className="text-white/90 font-medium text-sm sm:text-base">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-6 md:p-8 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                I'm a passionate <span className="text-purple-400 font-semibold">Software Engineer</span> and innovator currently pursuing my Bachelor's in Computer Science from
                <span className="text-purple-400 font-semibold"> Maharaja Agrasen Institute of Technology, Delhi</span>. With a track record of winning <span className="text-pink-400 font-semibold">12+ hackathons</span> and recognition at both national and international levels.
              </p>
              <p>
                My journey spans from being a <span className="text-yellow-400 font-semibold">Research Fellow</span> at the
                <span className="text-yellow-400 font-semibold"> WCRP Global KM-scale Hackathon</span> in Tokyo to co-founding technical communities that promote innovation and growth.
              </p>
              <a href="#timeline" className="flex items-center gap-2 mt-4 text-purple-400 hover:text-yellow-300 transition-all font-semibold">
                <MousePointerClick className="animate-bounce" size={18} /> Explore My Journey
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[{
                icon: Rocket,
                label: '12+ Hackathons',
                subtext: 'National & International Level',
                color: 'text-purple-300'
              }, {
                icon: Users,
                label: 'Community Builder',
                subtext: '500+ Students Impacted',
                color: 'text-pink-300'
              }, {
                icon: Lightbulb,
                label: 'Innovator',
                subtext: 'XR, AI, Full-Stack & Research',
                color: 'text-yellow-300'
              }].map(({ icon: Icon, label, subtext, color }) => (
                <motion.div
                  key={label}
                  className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <Icon className={`${color} mb-2`} size={32} />
                  <span className={`text-base sm:text-lg md:text-xl font-semibold ${color}`}>{label}</span>
                  <p className="text-xs sm:text-sm text-white/80 text-center px-2">{subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
