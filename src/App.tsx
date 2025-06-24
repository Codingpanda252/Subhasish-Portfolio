import React from 'react';
import CursorEffect from './components/CursorEffect';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <CursorEffect />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Timeline />
      <Achievements />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
