import React from 'react';
import heroImg from '../assets/subhasish.png';
import avatarImg from '../assets/avatar.png';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center px-4 text-center overflow-hidden"
  >
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="mb-6">
        <div className="relative w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-xl group hover:scale-105 transition-transform duration-500">
          <img
            src={heroImg}
            alt="Subhasish Panda"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={avatarImg}
            alt="Avatar"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* === Name and Title === */}
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
        Subhasish Panda
      </h1>
      <p className="text-xl text-purple-300 font-semibold mb-3">
        Software Engineer & 12x Hackathon Winner
      </p>
      <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-6">
        CSE Pre-Final Year student passionate about AI/ML, Full-Stack Development, and XR Technologies.
      </p>

      {/* === Buttons === */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a href="mailto:subhasishpanda25@gmail.com" className="btn-outline">
          Get In Touch
        </a>
      </div>

      {/* === Socials === */}
      <div className="flex justify-center gap-6 text-white/80 mt-4">
        <a
          href="https://linkedin.com/in/subhasishpanda25"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/codingpanda252"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href="https://x.com/Subhasish225"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <Twitter size={28} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
