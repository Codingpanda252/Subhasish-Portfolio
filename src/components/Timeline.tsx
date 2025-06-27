import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Briefcase, Flag, Rocket, School, GraduationCap, Globe,
  Users, Flame, Award, Code2, Lightbulb, BookUser, BrainCircuit, ShieldCheck,
  ChevronLeft, ChevronRight, Power, Volume2, VolumeX, RotateCcw, Mic, MicOff,
  Zap, Eye, Brain, Cpu, Wifi, Bluetooth, Database, Search, Star, Trophy,
  Target, Gauge, Activity, TrendingUp, Sparkles, Camera, ScanLine, Radar,
  Bot, Atom, Dna, Beaker, Satellite, Radio, MonitorSpeaker, Headphones
} from 'lucide-react';

const timeline = [
  {
    title: "Academic Journey Begins",
    year: "2022",
    desc: "Started Computer Science & Engineering at MAIT, GGSIPU Delhi with focus on foundational knowledge and technological curiosity.",
    icon: "education",
    highlight: "Academic Journey Begins",
    type: "Education",
    rarity: "Common",
    power: 85,
    skills: ["CSE", "University Foundation", "Problem Solving"],
    location: "MAIT, Delhi",
    duration: "4 years"
  },
  {
    title: "Tech Culture Initiator",
    year: "2023",
    desc: "Established Code Ignite, a coding community at MAIT, enabling 350+ beginners to develop technical skills through mentorship and peer learning.",
    icon: "ignite",
    highlight: "Tech Culture Initiator",
    type: "Leadership",
    rarity: "Rare",
    power: 92,
    skills: ["Community Building", "Mentorship", "Coding"],
    location: "MAIT, Delhi",
    duration: "Ongoing"
  },
  {
    title: "Leadership & Community Building",
    year: "2024",
    desc: "Co-founded B.Y.T.E, a student-led tech society driving innovation and collaboration through projects in Web Dev, AI/ML, and Cybersecurity.",
    icon: "community",
    highlight: "Leadership & Community Building",
    type: "Social",
    rarity: "Epic",
    power: 96,
    skills: ["Leadership", "R&D", "Team Building"],
    location: "MAIT, Delhi",
    duration: "Ongoing"
  },
  {
    title: "Government Internship Experience",
    year: "2025",
    desc: "Interned at the Data & Strategy Unit, Ministry of Science & Technology, contributing to data-driven decision making and policy innovation.",
    icon: "work",
    highlight: "Government Internship Experience",
    type: "Professional",
    rarity: "Rare",
    power: 89,
    skills: ["Policy Research", "Data Analysis", "Strategy"],
    location: "DST, Government of India",
    duration: "6 months"
  },
  {
    title: "International Research Fellowship",
    year: "2025",
    desc: "Represented India as a WCRP Fellow at KM-Scale Hackathon in Tokyo, conducting AI-driven environmental research at AORI, University of Tokyo.",
    icon: "japan",
    highlight: "International Research Fellowship",
    type: "Research",
    rarity: "Legendary",
    power: 98,
    skills: ["Climate AI", "International Collaboration", "Research"],
    location: "AORI, University of Tokyo, Japan",
    duration: "6 Days"
  }
];

const iconMap = {
  work: <Briefcase size={32} className="text-white drop-shadow-lg" />,
  milestone: <Award size={32} className="text-white drop-shadow-lg" />,
  launch: <Rocket size={32} className="text-white drop-shadow-lg" />,
  institute: <School size={32} className="text-white drop-shadow-lg" />,
  education: <GraduationCap size={32} className="text-white drop-shadow-lg" />,
  japan: <Globe size={32} className="text-yellow-300 drop-shadow-lg" />,
  community: <Users size={32} className="text-white drop-shadow-lg" />,
  ignite: <Flame size={32} className="text-white drop-shadow-lg" />,
  innovation: <Lightbulb size={32} className="text-white drop-shadow-lg" />,
  coding: <Code2 size={32} className="text-white drop-shadow-lg" />
};

const rarityColors = {
  'Common': 'from-gray-400 to-gray-600',
  'Rare': 'from-blue-400 to-blue-600',
  'Epic': 'from-purple-400 to-purple-600',
  'Legendary': 'from-yellow-400 to-orange-600',
  'Mythical': 'from-pink-400 via-purple-500 to-cyan-400'
};

const typeColors = {
  'Education': 'from-green-400 to-emerald-500',
  'Leadership': 'from-red-400 to-red-600',
  'Social': 'from-pink-400 to-rose-500',
  'Professional': 'from-indigo-400 to-blue-500',
  'Research': 'from-yellow-400 to-amber-500',
  'Achievement': 'from-purple-400 to-violet-600'
};

const UltraAdvancedPokedex = () => {
  const [currentEntry, setCurrentEntry] = useState(0);
  const [isPowered, setIsPowered] = useState(false);
  const [isHologramMode, setIsHologramMode] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [voiceCommand, setVoiceCommand] = useState('');
  const [systemStatus, setSystemStatus] = useState('OFFLINE');
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [wifiStrength, setWifiStrength] = useState(4);
  const [currentView, setCurrentView] = useState('main'); // main, stats, analysis, 3d
  const [particles, setParticles] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [aiPersonality, setAiPersonality] = useState('Professor Oak');

  const scanRef = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
    if (isPowered && isHologramMode) {
      const interval = setInterval(() => {
        setParticles(prev => [
          ...prev.slice(-20),
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 1,
            size: Math.random() * 3 + 1
          }
        ]);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPowered, isHologramMode]);

  // AI Analysis simulation
  const runAiAnalysis = useCallback(() => {
    setIsAnalyzing(true);
    setAiAnalysis('');
    const current = timeline[currentEntry];

    setTimeout(() => {
      const analyses = [
        `QUANTUM SCAN: ${current.title} exhibits ${current.rarity.toLowerCase()} temporal signatures with ${current.power}% achievement resonance.`,
        `NEURAL PATTERN: Strong correlation detected in ${current.skills.join(', ')} neural pathways. Synapse density: OPTIMAL.`,
        `PREDICTIVE MODEL: 97.3% probability of continued excellence trajectory. Recommendation: MAINTAIN CURRENT PATH.`,
        `DIMENSIONAL ANALYSIS: Cross-referencing with 47,392 similar timeline entries. UNIQUENESS INDEX: ${Math.floor(Math.random() * 100) + 1}%.`
      ];
      setAiAnalysis(analyses[Math.floor(Math.random() * analyses.length)]);
      setIsAnalyzing(false);
    }, 3000);
  }, [currentEntry]);

  // Voice command simulation
  const handleVoiceToggle = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      setVoiceCommand('Listening...');
      setTimeout(() => {
        const commands = ['Next entry', 'Previous entry', 'Analyze current', 'Hologram mode', 'Statistics view'];
        setVoiceCommand(`Command recognized: "${commands[Math.floor(Math.random() * commands.length)]}"`);
        setTimeout(() => setVoiceCommand(''), 2000);
      }, 2000);
    } else {
      setVoiceCommand('');
    }
  };

  const handlePowerToggle = () => {
    if (!isPowered) {
      setIsPowered(true);
      setSystemStatus('BOOTING...');
      setScanProgress(0);

      const bootSequence = [
        { status: 'INITIALIZING QUANTUM PROCESSORS...', progress: 15 },
        { status: 'LOADING AI NEURAL NETWORKS...', progress: 35 },
        { status: 'CALIBRATING HOLOGRAPHIC PROJECTORS...', progress: 55 },
        { status: 'SYNCHRONIZING TEMPORAL DATABASE...', progress: 75 },
        { status: 'ACTIVATING ADVANCED SYSTEMS...', progress: 90 },
        { status: 'READY FOR TIMELINE ANALYSIS', progress: 100 }
      ];

      bootSequence.forEach((step, i) => {
        setTimeout(() => {
          setSystemStatus(step.status);
          setScanProgress(step.progress);
          if (i === bootSequence.length - 1) {
            setTimeout(() => setSystemStatus('ONLINE'), 500);
          }
        }, i * 800);
      });
    } else {
      setIsPowered(false);
      setSystemStatus('OFFLINE');
      setIsHologramMode(false);
      setIsVoiceActive(false);
      setCurrentView('main');
    }
  };

  const nextEntry = () => {
    if (currentEntry < timeline.length - 1) {
      setIsScanning(true);
      setTimeout(() => {
        setCurrentEntry(currentEntry + 1);
        setIsScanning(false);
        if (Math.random() > 0.7) runAiAnalysis();
      }, 800);
    }
  };

  const prevEntry = () => {
    if (currentEntry > 0) {
      setIsScanning(true);
      setTimeout(() => {
        setCurrentEntry(currentEntry - 1);
        setIsScanning(false);
      }, 800);
    }
  };

  const current = timeline[currentEntry];
  const rarityGradient = rarityColors[current.rarity] || 'from-gray-400 to-gray-600';
  const typeGradient = typeColors[current.type] || 'from-blue-400 to-blue-600';

  const renderMainView = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Holographic particle system */}
      {isHologramMode && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
                animation: `float 3s ease-in-out infinite, fadeOut 3s ease-out forwards`
              }}
            />
          ))}
        </div>
      )}

      {/* Advanced scan lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-0.5 bg-cyan-400/30 animate-pulse" style={{
          top: '20%',
          animation: 'scanVertical 4s linear infinite'
        }} />
        <div className="absolute w-0.5 h-full bg-cyan-400/30 animate-pulse" style={{
          left: '30%',
          animation: 'scanHorizontal 3s linear infinite'
        }} />
      </div>

      <div className="p-6 h-full flex flex-col relative z-10">
        {/* Header with advanced info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${rarityGradient} text-white shadow-lg border border-white/30`}>
              {current.rarity.toUpperCase()}
            </div>
            <div className={`px-2 py-1 rounded text-xs bg-gradient-to-r ${typeGradient} text-white`}>
              {current.type}
            </div>
          </div>
          <div className="text-cyan-300 font-mono text-xs bg-black/50 px-2 py-1 rounded">
            ID: {String(currentEntry + 1).padStart(4, '0')}
          </div>
        </div>

        {/* 3D Holographic Icon Display */}
        <div className="flex justify-center mb-4 relative">
          <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-r ${rarityGradient} flex items-center justify-center shadow-2xl border-2 border-white/50 ${isHologramMode ? 'animate-pulse' : ''}`}
            style={{
              transform: isHologramMode ? 'rotateY(15deg) rotateX(5deg)' : 'none',
              boxShadow: isHologramMode ? '0 0 30px rgba(0,255,255,0.5)' : '0 10px 30px rgba(0,0,0,0.3)'
            }}>
            {iconMap[current.icon]}
            {isHologramMode && (
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-2xl animate-pulse" />
            )}
          </div>

          {/* Power level indicator */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
            {current.power}
          </div>
        </div>

        {/* Enhanced Title with animations */}
        <h3 className="text-white font-bold text-xl text-center mb-3 leading-tight animate-pulse">
          <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
            {current.title}
          </span>
        </h3>

        {/* Advanced stats grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="bg-black/30 rounded p-2 border border-cyan-500/30">
            <div className="text-cyan-300 font-mono">LOCATION</div>
            <div className="text-white">{current.location}</div>
          </div>
          <div className="bg-black/30 rounded p-2 border border-cyan-500/30">
            <div className="text-cyan-300 font-mono">DURATION</div>
            <div className="text-white">{current.duration}</div>
          </div>
        </div>

        {/* Power meter */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-cyan-300 mb-1">
            <span>ACHIEVEMENT POWER</span>
            <span>{current.power}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 transition-all duration-1000"
              style={{ width: `${current.power}%` }}
            />
          </div>
        </div>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {current.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white text-xs rounded-full border border-purple-400/50">
              {skill}
            </span>
          ))}
        </div>

        {/* Description with typing effect */}
        <div className="flex-1 overflow-y-auto">
          <p className="text-cyan-200 text-sm leading-relaxed font-mono">
            {current.desc}
          </p>
        </div>

        {/* AI Analysis section */}
        {aiAnalysis && (
          <div className="mt-3 p-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-400/50">
            <div className="flex items-center gap-2 mb-2">
              <Brain size={14} className="text-purple-300" />
              <span className="text-purple-300 text-xs font-bold">AI ANALYSIS</span>
            </div>
            <p className="text-white text-xs font-mono leading-relaxed">{aiAnalysis}</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderStatsView = () => (
    <div className="p-6 h-full">
      <h3 className="text-white font-bold text-lg mb-4 text-center">ADVANCED STATISTICS</h3>
      <div className="space-y-4">
        <div className="bg-black/40 rounded-lg p-3 border border-cyan-500/30">
          <div className="text-cyan-300 text-sm mb-2">Timeline Completion</div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
              style={{ width: `${((currentEntry + 1) / timeline.length) * 100}%` }} />
          </div>
          <div className="text-white text-xs mt-1">{currentEntry + 1} / {timeline.length} entries</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-black/40 rounded-lg p-3 border border-green-500/30">
            <Activity size={16} className="text-green-400 mb-1" />
            <div className="text-green-300 text-xs">AVERAGE POWER</div>
            <div className="text-white font-bold">{Math.floor(timeline.reduce((sum, item) => sum + item.power, 0) / timeline.length)}%</div>
          </div>
          <div className="bg-black/40 rounded-lg p-3 border border-purple-500/30">
            <Trophy size={16} className="text-purple-400 mb-1" />
            <div className="text-purple-300 text-xs">RARITY SCORE</div>
            <div className="text-white font-bold">{timeline.filter(item => ['Epic', 'Legendary', 'Mythical'].includes(item.rarity)).length}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Advanced ambient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Main Pokédex Ultra Body */}
      <div className="relative">
        <div className="w-[480px] h-[720px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-[2rem] border-4 border-cyan-400/50 shadow-2xl relative overflow-hidden">

          {/* Holographic glow effect */}
          {isPowered && isHologramMode && (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 animate-pulse pointer-events-none" />
          )}

          {/* Ultra Advanced Header */}
          <div className="absolute top-4 left-4 right-4 h-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-cyan-400/30 flex items-center justify-between px-4">

            {/* System Status */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePowerToggle}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${isPowered
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-green-300 shadow-lg shadow-green-400/50 animate-pulse'
                    : 'bg-slate-600 border-slate-500'
                  }`}
              >
                <Power size={16} className={isPowered ? 'text-white' : 'text-slate-400'} />
              </button>
              <div className="text-xs font-mono text-cyan-300">{systemStatus}</div>
            </div>

            {/* Advanced indicators */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Wifi size={12} className="text-cyan-400" />
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-1 h-2 ${i < wifiStrength ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Zap size={12} className="text-green-400" />
                <span className="text-xs text-green-400 font-mono">{batteryLevel}%</span>
              </div>
            </div>
          </div>

          {/* Ultra Main Display */}
          <div className="absolute top-24 left-6 right-6 h-[450px] bg-gradient-to-br from-black via-slate-900 to-black rounded-2xl border-2 border-cyan-400/50 overflow-hidden shadow-inner">
            {!isPowered ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-slate-600 font-mono text-lg">SYSTEM OFFLINE</div>
              </div>
            ) : scanProgress < 100 ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-black">
                <div className="text-cyan-400 font-mono text-sm mb-4 animate-pulse">{systemStatus}</div>
                <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
                <div className="text-cyan-300 font-mono text-xs">{scanProgress}% Complete</div>
              </div>
            ) : isScanning ? (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <div className="text-center">
                  <Radar size={48} className="text-cyan-400 animate-spin mx-auto mb-4" />
                  <div className="text-cyan-400 font-mono text-sm animate-pulse">QUANTUM SCANNING...</div>
                </div>
              </div>
            ) : (
              <>
                {currentView === 'main' && renderMainView()}
                {currentView === 'stats' && renderStatsView()}
              </>
            )}
          </div>

          {/* Ultra Advanced Control Panel */}
          <div className="absolute bottom-6 left-6 right-6 space-y-4">

            {/* Voice Command Display */}
            {voiceCommand && (
              <div className="bg-black/60 rounded-lg p-2 border border-cyan-400/30">
                <div className="flex items-center gap-2">
                  <Mic size={12} className="text-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 text-xs font-mono">{voiceCommand}</span>
                </div>
              </div>
            )}

            {/* Main Controls */}
            <div className="flex justify-between items-center">
              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevEntry}
                  disabled={!isPowered || currentEntry === 0 || isScanning}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl border border-blue-400 flex items-center justify-center disabled:opacity-30 hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>

                <button
                  onClick={nextEntry}
                  disabled={!isPowered || currentEntry === timeline.length - 1 || isScanning}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl border border-blue-400 flex items-center justify-center disabled:opacity-30 hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsHologramMode(!isHologramMode)}
                  disabled={!isPowered}
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all shadow-lg disabled:opacity-30 ${isHologramMode
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400'
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 border-slate-500'
                    }`}
                >
                  <Eye size={16} className="text-white" />
                </button>

                <button
                  onClick={handleVoiceToggle}
                  disabled={!isPowered}
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all shadow-lg disabled:opacity-30 ${isVoiceActive
                      ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-400 animate-pulse'
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 border-slate-500'
                    }`}
                >
                  {isVoiceActive ? <Mic size={16} className="text-white" /> : <MicOff size={16} className="text-white" />}
                </button>

                <button
                  onClick={runAiAnalysis}
                  disabled={!isPowered || isAnalyzing}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl border border-purple-400 flex items-center justify-center disabled:opacity-30 hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg"
                >
                  {isAnalyzing ? <Brain size={16} className="text-white animate-pulse" /> : <BrainCircuit size={16} className="text-white" />}
                </button>

                <button
                  onClick={() => setCurrentView(currentView === 'main' ? 'stats' : 'main')}
                  disabled={!isPowered}
                  className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl border border-green-400 flex items-center justify-center disabled:opacity-30 hover:from-green-500 hover:to-green-600 transition-all shadow-lg"
                >
                  <Activity size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Progress & Status */}
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                {timeline.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentEntry
                        ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125'
                        : i < currentEntry
                          ? 'bg-green-400'
                          : 'bg-slate-600'
                      }`}
                  />
                ))}
              </div>

              <div className="text-xs font-mono text-cyan-300">
                TIMELINE ENTRY {currentEntry + 1}/{timeline.length}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-2 left-8 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full border border-cyan-300 shadow-lg animate-pulse"></div>
          <div className="absolute top-2 right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full border border-green-300 shadow-lg"></div>

          {/* Power indicator strips */}
          <div className="absolute left-2 top-32 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-50"></div>
          <div className="absolute right-2 top-32 w-1 h-16 bg-gradient-to-b from-purple-400 to-transparent rounded-full opacity-50"></div>
        </div>

        {/* Ultra Base Platform */}
        <div className="absolute -bottom-4 left-12 right-12 h-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-b-3xl border-2 border-cyan-400/30 shadow-2xl"></div>

        {/* Holographic projection base */}
        {isPowered && isHologramMode && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full blur-sm animate-pulse"></div>
        )}
      </div>

      {/* Advanced HUD Overlay */}
      {isPowered && (
        <div className="absolute top-8 left-8 space-y-2 pointer-events-none">
          <div className="flex items-center gap-1 text-cyan-300 font-mono text-xs tracking-wide opacity-80">
            <Activity size={12} className="text-cyan-400" />
            POKÉDEX ULTRA ∞ | TIMELINE ANALYZER
          </div>
          <div className="text-cyan-400 font-mono text-xs opacity-60">QUANTUM CORE ACTIVE</div>
          {isHologramMode && <div className="text-cyan-400 font-mono text-xs opacity-60 animate-pulse">HOLOGRAM MODE</div>}
        </div>
      )}

      {/* Instructions */}
      {!isPowered && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white/40 text-sm font-mono animate-pulse">
            ⚡ ACTIVATE QUANTUM CORE TO BEGIN TIMELINE ANALYSIS ⚡
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes scanVertical {
          0% { top: 0%; opacity: 1; }
          50% { opacity: 0.3; }
          100% { top: 100%; opacity: 1; }
        }
        @keyframes scanHorizontal {
          0% { left: 0%; opacity: 1; }
          50% { opacity: 0.3; }
          100% { left: 100%; opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default UltraAdvancedPokedex;