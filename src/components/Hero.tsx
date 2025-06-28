import React from 'react';
import heroImg from '../assets/subhasish.png';
import avatarImg from '../assets/avatar.png';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center px-4 text-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-black"
  >
    <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-red-400/10 rounded-full blur-[120px] left-1/2 -translate-x-1/2 top-16 -z-10 animate-pulse" />

    <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
      {/* === Avatar with Flip Effect === */}
      <div className="mb-6">
        <div className="relative w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-xl group hover:scale-105 transition-transform duration-500">
          <img
            src={heroImg}
            alt="Subhasish Panda"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
          />
          <img
            src={avatarImg}
            alt="Avatar"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* === Name and Title === */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4 animate-text-focus-in">
        Subhasish Panda
      </h1>
      <p className="text-xl text-purple-300 font-semibold mb-3 animate-slide-in-top">
        Software Engineer & 12x Hackathon Winner
      </p>
      <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-6 animate-slide-in-bottom">
        CSE Pre-Final Year student passionate about AI/ML, Full-Stack Development, and XR Technologies.
      </p>

      {/* === Buttons === */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in delay-300">
        <a href="#projects" className="btn-primary hover:scale-105 transition-transform">
          View My Work
        </a>
        <a href="mailto:subhasishpanda25@gmail.com" className="btn-outline hover:scale-105 transition-transform">
          Get In Touch
        </a>
        <a
          href="/Subhasish_Panda_Resume.pdf"
          download
          className="btn-primary hover:scale-105 transition-transform"
        >
          Download Resume
        </a>
      </div>

      {/* === Socials === */}
      <div className="flex justify-center gap-6 text-white/80 mt-4 animate-slide-in-bottom">
        <a
          href="https://linkedin.com/in/subhasishpanda25"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-transform transform hover:scale-110"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/codingpanda252"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-transform transform hover:scale-110"
        >
          <Github size={28} />
        </a>
        <a
          href="https://x.com/Subhasish225"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-transform transform hover:scale-110"
        >
          <Twitter size={28} />
        </a>
      </div>
    </div>

    {/* Custom Animations */}
    <style jsx>{`
      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in-up {
        animation: fade-in-up 1s ease-out forwards;
      }

      @keyframes slide-in-top {
        0% {
          transform: translateY(-50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .animate-slide-in-top {
        animation: slide-in-top 1s ease-out;
      }

      @keyframes slide-in-bottom {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .animate-slide-in-bottom {
        animation: slide-in-bottom 1s ease-out;
      }

      @keyframes text-focus-in {
        0% {
          filter: blur(12px);
          opacity: 0;
        }
        100% {
          filter: blur(0);
          opacity: 1;
        }
      }

      .animate-text-focus-in {
        animation: text-focus-in 1.2s ease-out both;
      }
    `}</style>
  </section>
);

export default Hero;