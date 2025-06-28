import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Code, Cpu, Database, Layout, Wrench, Zap, ChevronRight, Star, Sparkles } from 'lucide-react';
import { skills } from '../data/skills';

// Tech stack logo URLs - matched to your exact skills
const techLogos = {
  // Languages
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  
  // Frontend
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Electron.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  
  // Backend
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  
  // Database
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MariaDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  
  // AI/ML
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'Mediapipe': 'https://upload.wikimedia.org/wikipedia/commons/3/31/MediaPipe_Logo.png',
  'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  'Generative AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'LLMs': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  'Streamlit': 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
  
  // Tools
  'Three.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  'Blender': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
  'Unity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
  'Unreal Engine': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg',
  'Spatial': 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48v9p0a6we',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Apache': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
  'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
};

const iconMap = {
  languages: <Code className="text-cyan-300" size={32} />,
  frontend: <Layout className="text-pink-300" size={32} />,
  backend: <Cpu className="text-yellow-300" size={32} />,
  database: <Database className="text-green-300" size={32} />,
  aiml: <Zap className="text-blue-300" size={32} />,
  tools: <Wrench className="text-orange-300" size={32} />,
};

const categoryThemes = {
  languages: {
    gradient: 'from-cyan-500/30 via-blue-500/20 to-indigo-600/30',
    border: 'border-cyan-400/40',
    glow: 'shadow-[0_0_50px_rgba(6,182,212,0.4)]',
    accent: 'from-cyan-400 to-blue-500',
    particles: 'rgba(6,182,212,0.6)'
  },
  frontend: {
    gradient: 'from-pink-500/30 via-purple-500/20 to-fuchsia-600/30',
    border: 'border-pink-400/40',
    glow: 'shadow-[0_0_50px_rgba(236,72,153,0.4)]',
    accent: 'from-pink-400 to-purple-500',
    particles: 'rgba(236,72,153,0.6)'
  },
  backend: {
    gradient: 'from-yellow-500/30 via-orange-500/20 to-red-600/30',
    border: 'border-yellow-400/40',
    glow: 'shadow-[0_0_50px_rgba(245,158,11,0.4)]',
    accent: 'from-yellow-400 to-orange-500',
    particles: 'rgba(245,158,11,0.6)'
  },
  database: {
    gradient: 'from-green-500/30 via-emerald-500/20 to-teal-600/30',
    border: 'border-green-400/40',
    glow: 'shadow-[0_0_50px_rgba(34,197,94,0.4)]',
    accent: 'from-green-400 to-emerald-500',
    particles: 'rgba(34,197,94,0.6)'
  },
  aiml: {
    gradient: 'from-blue-500/30 via-indigo-500/20 to-violet-600/30',
    border: 'border-blue-400/40',
    glow: 'shadow-[0_0_50px_rgba(59,130,246,0.4)]',
    accent: 'from-blue-400 to-indigo-500',
    particles: 'rgba(59,130,246,0.6)'
  },
  tools: {
    gradient: 'from-orange-500/30 via-red-500/20 to-pink-600/30',
    border: 'border-orange-400/40',
    glow: 'shadow-[0_0_50px_rgba(249,115,22,0.4)]',
    accent: 'from-orange-400 to-red-500',
    particles: 'rgba(249,115,22,0.6)'
  },
};

const MatrixRain = ({ category }) => {
  const canvasRef = useRef(null);
  const theme = categoryThemes[category];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = '01';
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme.particles;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, [theme.particles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

const FloatingOrb = ({ delay = 0, size = 4, color = 'white' }) => {
  return (
    <div 
      className={`absolute rounded-full blur-sm`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

const HolographicBorder = ({ isActive }) => {
  return (
    <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
    </div>
  );
};

const SkillChip = ({ skill, index, isExpanded, theme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const logoUrl = techLogos[skill];

  return (
    <div
      className="group/skill relative"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: isExpanded ? 'skillSlideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative px-4 py-3 rounded-xl border backdrop-blur-xl cursor-pointer
        bg-gradient-to-br from-black/30 to-black/10 border-white/20
        hover:border-white/40 hover:scale-110 hover:shadow-2xl
        transition-all duration-500 ease-out overflow-hidden
        ${isHovered ? 'shadow-[0_0_30px_rgba(255,255,255,0.2)]' : ''}
      `}>
        {/* Animated background */}
        <div className={`
          absolute inset-0 bg-gradient-to-r opacity-0 group-hover/skill:opacity-100
          transition-opacity duration-300 ${theme.gradient}
        `} />
        
        {/* Skill content */}
        <div className="relative z-10 flex items-center gap-3">
          {logoUrl && (
            <div className="relative">
              <img 
                src={logoUrl} 
                alt={skill}
                className="w-6 h-6 object-contain transition-transform duration-300 group-hover/skill:scale-125"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {isHovered && (
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm animate-ping" />
              )}
            </div>
          )}
          <span className="text-white font-medium text-sm tracking-wide">
            {skill}
          </span>
          {isHovered && <Sparkles className="w-4 h-4 text-white/60 animate-pulse" />}
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-700 origin-left" />
      </div>
    </div>
  );
};

const SkillCard = ({ category, items, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef(null);
  const theme = categoryThemes[category];

  useEffect(() => {
    const timer = setTimeout(() => setProgress(Math.random() * 40 + 60), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !isHovered) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(20px) 
        scale(1.02)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(0px) 
        scale(1)
      `;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className={`
        relative group transition-all duration-700 ease-out
        ${isHovered ? theme.glow : ''}
      `}
      style={{
        animationDelay: `${index * 0.15}s`,
        animation: 'cardSlideIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingOrb 
          key={i} 
          delay={i * 0.3} 
          size={Math.random() * 6 + 2}
          color={theme.particles}
        />
      ))}

      {/* Matrix rain effect */}
      <MatrixRain category={category} />

      {/* Main card */}
      <div className={`
        relative overflow-hidden rounded-2xl backdrop-blur-2xl transition-all duration-500
        bg-gradient-to-br ${theme.gradient} ${theme.border}
        hover:border-opacity-80 group-hover:shadow-2xl
      `}>
        {/* Holographic border */}
        <HolographicBorder isActive={isHovered} />

        {/* Scanning line effect */}
        <div className={`
          absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.accent}
          transform -translate-x-full group-hover:translate-x-full
          transition-transform duration-2000 ease-in-out
        `} />

        {/* Content */}
        <div className="relative p-8 z-20">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className={`
                relative p-4 rounded-xl backdrop-blur-sm border border-white/30
                bg-gradient-to-br from-black/40 to-black/20
                hover:scale-110 transition-transform duration-300
              `}>
                {iconMap[category]}
                {isHovered && (
                  <div className="absolute inset-0 bg-white/10 rounded-xl animate-pulse" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide mb-1">
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('aiml', 'AI/ML')}
                </h3>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Professional Level</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`
                relative p-3 rounded-xl backdrop-blur-sm border border-white/20
                hover:border-white/40 hover:bg-white/10 hover:scale-110
                transition-all duration-300 group/btn
              `}
            >
              <ChevronRight 
                className={`w-6 h-6 text-white transition-transform duration-500 ${
                  isExpanded ? 'rotate-90' : ''
                }`} 
              />
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Stats */}
          <div className="mb-8 p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/70 text-sm">Technologies Mastered</span>
              <span className="text-white font-bold text-lg">{items.length}</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${theme.accent} rounded-full transition-all duration-2000 ease-out relative`}
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
              </div>
            </div>
            <div className="flex justify-between text-xs text-white/50 mt-2">
              <span>Proficiency</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Skills grid */}
          <div className={`
            grid gap-4 transition-all duration-700 overflow-hidden
            ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-40 opacity-90'}
          `}>
            {items.slice(0, isExpanded ? items.length : 6).map((skill, idx) => (
              <SkillChip
                key={skill}
                skill={skill}
                index={idx}
                isExpanded={isExpanded}
                theme={theme}
              />
            ))}
            
            {!isExpanded && items.length > 6 && (
              <div className="text-center mt-4">
                <div className="text-white/60 text-sm">
                  +{items.length - 6} more technologies
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const totalSkills = useMemo(() => {
    return Object.values(skills).reduce((total, skillArray) => total + skillArray.length, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative min-h-screen py-32 px-6 bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden"
    >
      {/* Dynamic cursor spotlight */}
      <div 
        className="absolute pointer-events-none transition-all duration-500 ease-out z-0"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(139,69,255,0.15) 0%, rgba(59,130,246,0.1) 30%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-green-500/5 to-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          <div className="mb-8">
            <h2 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TECH ARSENAL
            </h2>
            <div className="relative mx-auto w-40 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks powering next-generation digital experiences
          </p>
          
          <div className="flex items-center justify-center gap-8 text-white/60">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{Object.keys(skills).length}</div>
              <div className="text-sm">Categories</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{totalSkills}</div>
              <div className="text-sm">Technologies</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm">Years Exp</div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard
              key={category}
              category={category}
              items={items}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(100px) rotateX(45deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes skillSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .group:hover .scanning-line {
          animation: scan 2s ease-in-out infinite;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;