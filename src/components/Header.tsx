import React, { useState, useEffect } from 'react';

const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'timeline',
  'achievements',
  'gallery',
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
          Codingpanda252
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
              ${activeSection === section
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105 shadow-lg ring-2 ring-pink-400/60 ring-offset-2'
                  : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
            >
              {section}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none relative z-50"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-5">
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`block h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 py-4 px-4 space-y-2 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'
          }`}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`block w-full text-left capitalize text-white/80 py-3 px-4 rounded-md text-base tracking-wide
            ${activeSection === section
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md ring-2 ring-pink-400/50'
                : 'hover:bg-white/10 hover:text-white'
              }`}
          >
            {section}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
