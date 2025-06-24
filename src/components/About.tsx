import React from 'react';
import { Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => (
  <section id="about" className="py-24 px-6 relative">
    <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-300/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none left-[calc(50%-12rem)] top-12 -z-10" />
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        About Me
      </h2>
      <div className="bg-white/10 backdrop-blur-lg p-10 md:p-12 rounded-3xl border border-white/20 shadow-2xl text-white/90 text-lg leading-relaxed space-y-8">
        <p>
          I'm a passionate <span className="text-purple-300 font-semibold">Software Engineer</span> and innovator currently pursuing my Bachelor's in Computer Science from
          <span className="text-purple-300 font-semibold"> Maharaja Agrasen Institute of Technology, Delhi</span>. With a track record of winning <span className="text-pink-300 font-semibold">12+ hackathons</span> and achieving recognition at national and international levels,
          I specialize in <span className="text-purple-300 font-semibold">AI/ML</span>, <span className="text-purple-300 font-semibold">Full-Stack Development</span>, and immersive technologies.
        </p>
        <p>
          My journey has taken me from being a <span className="text-yellow-300 font-semibold">Research Fellow</span> at the prestigious
          <span className="text-yellow-300 font-semibold"> WCRP Global KM-scale Hackathon</span> in Tokyo to co-founding technical communities that foster innovation and learning.
          I'm driven by the desire to solve real-world problems through technology and make a meaningful impact in the tech industry.
        </p>

        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="flex flex-col items-center text-center">
            <Rocket className="text-purple-300 mb-2" size={36} />
            <span className="text-xl font-semibold text-purple-300">12+ Hackathons</span>
            <p className="text-sm text-white/80">National & International Level</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="text-pink-300 mb-2" size={36} />
            <span className="text-xl font-semibold text-pink-300">Community Builder</span>
            <p className="text-sm text-white/80">500+ Students Impacted</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lightbulb className="text-yellow-300 mb-2" size={36} />
            <span className="text-xl font-semibold text-yellow-300">Innovator</span>
            <p className="text-sm text-white/80">XR, AI, Full-Stack, & Research</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
