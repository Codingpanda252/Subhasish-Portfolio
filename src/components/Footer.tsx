import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white py-10 px-6 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Subhasish Panda</span>. All rights reserved.
          </p>
          <p className="text-xs text-white/50">Built with ❤️ using React & Tailwind CSS</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/Codingpanda252" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/subhasishpanda25" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:subhasishpanda25@gmail.com" className="hover:text-pink-400 transition">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
