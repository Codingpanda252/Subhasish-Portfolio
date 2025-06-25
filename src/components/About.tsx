import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Float, Stars } from '@react-three/drei';
import { Users, Lightbulb, Rocket } from 'lucide-react';
import { Model } from './RobotModel';

const About = () => (
  <section id="about" className="py-24 px-6 relative overflow-hidden">
    <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-300/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none left-[calc(50%-12rem)] top-12 -z-10" />

    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-400 shadow-xl group">
            <img
              src="/subhasish.png"
              alt="Subhasish Panda"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
            />
            <img
              src="/avatar.png"
              alt="Avatar"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="h-[22rem] md:h-[26rem] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/20">
            <Canvas camera={{ position: [0, 1.2, 3.5], fov: 45 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[0, 5, 5]} intensity={1.2} />
              <Stars radius={30} depth={40} count={1200} factor={4} fade />
              <PresentationControls
                global
                config={{ mass: 2, tension: 300 }}
                polar={[-0.5, 0.5]}
                azimuth={[-1, 1]}
                snap
              >
                <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
                  <Model scale={0.4} position={[0, -1.1, 0]} />
                </Float>
              </PresentationControls>
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>

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
    </div>
  </section>
);

export default About;
