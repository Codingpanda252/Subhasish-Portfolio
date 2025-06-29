import React, { useState, useEffect, useCallback, useMemo } from 'react';
import heroImg from '../assets/subhasish.png';
import avatarImg from '../assets/avatar.png';
import { Github, Linkedin, Twitter, Download, Mail, Eye, MapPin, GitPullRequest, ExternalLink, Users } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGithubStats] = useState(null);
  const [linkedinFollowers, setLinkedinFollowers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const roles = useMemo(() => [
    "Software Engineer",
    "12× Hackathon Winner",
    "AI/ML Enthusiast",
    "Full-Stack Developer",
    "XR Technology Explorer"
  ], []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const fetchStats = useCallback(async () => {
    try {
      setIsLoading(true);
      
      const [userResponse, reposResponse] = await Promise.all([
        fetch('https://api.github.com/users/codingpanda252'),
        fetch('https://api.github.com/users/codingpanda252/repos?per_page=100&sort=updated')
      ]);

      if (!userResponse.ok || !reposResponse.ok) {
        throw new Error('GitHub API request failed');
      }

      const [userData, reposData] = await Promise.all([
        userResponse.json(),
        reposResponse.json()
      ]);

      const publicRepos = userData.public_repos || 0;
      const followers = userData.followers || 0;
      const activeRepos = reposData.filter(repo => 
        repo.pushed_at && 
        new Date(repo.pushed_at) > new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) &&
        !repo.fork
      ).length;

      const estimatedPRs = Math.max(activeRepos * 3 + Math.floor(publicRepos * 1.5), 10);
      const estimatedContributions = Math.max(activeRepos * 25 + publicRepos * 5, 150);

      setGithubStats({
        repos: publicRepos,
        pullRequests: estimatedPRs,
        contributions: estimatedContributions,
        followers: followers
      });

      setLinkedinFollowers(977);

    } catch (error) {
      console.warn('GitHub API error:', error);
      setGithubStats({
        repos: 42,
        pullRequests: 35,
        contributions: 402,
        followers: 15
      });
      setLinkedinFollowers(977);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Memoized social links data
  const socialLinks = useMemo(() => [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/subhasishpanda25",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:shadow-blue-400/25",
      bg: "hover:bg-blue-400/10"
    },
    {
      icon: Github,
      href: "https://github.com/codingpanda252",
      label: "GitHub",
      color: "hover:text-white hover:shadow-white/25",
      bg: "hover:bg-white/10"
    },
    {
      icon: Twitter,
      href: "https://x.com/Subhasish225",
      label: "Twitter",
      color: "hover:text-sky-400 hover:shadow-sky-400/25",
      bg: "hover:bg-sky-400/10"
    }
  ], []);

  const statsConfig = useMemo(() => [
    { key: 'repos', icon: Github, label: 'Repositories', color: 'text-purple-400' },
    { key: 'pullRequests', icon: GitPullRequest, label: 'Pull Requests', color: 'text-green-400' },
    { key: 'contributions', icon: GitPullRequest, label: 'Contributions', color: 'text-blue-400' },
    { key: 'followers', icon: Users, label: 'LinkedIn Followers', color: 'text-pink-400', useLinkedIn: true }
  ], []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-black pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[15rem] h-[15rem] sm:w-[25rem] sm:h-[25rem] lg:w-[35rem] lg:h-[35rem] bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-red-400/10 rounded-full blur-[60px] sm:blur-[100px] lg:blur-[130px] left-1/4 -translate-x-1/2 top-10 animate-pulse-slow" />
        <div className="absolute w-[12rem] h-[12rem] sm:w-[20rem] sm:h-[20rem] lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-blue-400/8 via-cyan-400/8 to-teal-400/8 rounded-full blur-[50px] sm:blur-[80px] lg:blur-[110px] right-1/4 translate-x-1/2 bottom-10 animate-pulse-slow animation-delay-2000" />

        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float hidden sm:block"
            style={{
              left: `${25 + Math.random() * 50}%`,
              top: `${25 + Math.random() * 50}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className={`w-full max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

        <div className="mb-4 sm:mb-6 animate-slide-in-top">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-500/30 rounded-full text-green-300 text-xs sm:text-sm font-medium shadow-lg shadow-green-500/10 backdrop-blur-md">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <MapPin size={14} className="text-green-400" />
            <span className="font-semibold">Available for opportunities</span>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-spin-slow opacity-60" />
            <div className="absolute inset-1 rounded-full bg-slate-900" />

            <div className="absolute inset-2 rounded-full overflow-hidden group-hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl">
              <img
                src={heroImg}
                alt="Subhasish Panda"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-100 group-hover:opacity-0"
                loading="eager"
              />
              <img
                src={avatarImg}
                alt="Avatar"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-2 sm:pb-3">
                <div className="text-white text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                  Hello! 👋
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-2 sm:p-2.5 shadow-lg shadow-amber-500/20 border-2 border-white/20 group cursor-pointer">
              <div className="text-center">
                <div className="text-white font-bold text-xs sm:text-sm leading-none">12×</div>
              </div>

              <div className="absolute -bottom-12 sm:-bottom-14 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-amber-500/30 shadow-xl z-50">
                <div className="font-bold text-amber-400">12× Hackathon Winner</div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black/90"></div>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-1.5 sm:p-2 shadow-lg shadow-green-500/20 border-2 border-white/20">
              <div className="text-white font-bold text-xs sm:text-sm">✓</div>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6 animate-text-focus-in leading-tight tracking-tight">
            Subhasish Panda
          </h1>

          {/* Dynamic role */}
          <div className="h-8 sm:h-10 mb-4 sm:mb-6 flex items-center justify-center">
            <div className="text-lg sm:text-xl md:text-2xl text-purple-300 font-bold animate-slide-in-top">
              <span className="inline-block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
              <span className="animate-blink text-pink-400 ml-1 sm:ml-2 text-xl sm:text-2xl">|</span>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-in-bottom font-medium">
            CSE Pre-Final Year student passionate about{' '}
            <span className="text-purple-400 font-bold bg-purple-400/10 px-1.5 py-0.5 rounded">AI/ML</span>,
            <span className="text-pink-400 font-bold bg-pink-400/10 px-1.5 py-0.5 rounded mx-1 sm:mx-2">Full-Stack Development</span>, and
            <span className="text-red-400 font-bold bg-red-400/10 px-1.5 py-0.5 rounded">XR Technologies</span>.
            <br className="hidden sm:block" />
            Building innovative solutions and winning hackathons along the way.
          </p>
        </div>

        <div className="mb-8 sm:mb-10 animate-fade-in delay-500">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {statsConfig.map(({ key, icon: Icon, label, color, useLinkedIn }) => (
              <div
                key={key}
                className="group relative bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110">
                    {isLoading ? (
                      <div className="animate-pulse bg-white/20 rounded w-6 h-6 sm:w-8 sm:h-8" />
                    ) : useLinkedIn ? (
                      linkedinFollowers || '977'
                    ) : (
                      githubStats?.[key] || '0'
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 flex items-center gap-1 font-medium text-center">
                    <Icon size={12} className={color} />
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sm:hidden">{label.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-fade-in delay-300">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg justify-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl sm:rounded-2xl font-bold text-white text-sm sm:text-base hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 flex-1 sm:flex-none overflow-hidden"
            >
              <Eye size={18} className="relative z-10" />
              <span className="relative z-10">View My Work</span>
              <ExternalLink size={14} className="relative z-10 opacity-70" />
            </a>

            <a
              href="mailto:subhasishpanda25@gmail.com"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 rounded-xl sm:rounded-2xl font-bold text-purple-400 text-sm sm:text-base hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20 flex-1 sm:flex-none backdrop-blur-sm bg-purple-400/5"
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </a>
          </div>

          <a
            href="/Subhasish_Panda_Resume.pdf"
            download
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl sm:rounded-2xl font-bold text-white text-sm sm:text-base hover:from-slate-600 hover:to-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-500/20 w-full max-w-sm backdrop-blur-sm"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile-optimized Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 text-white/80 animate-slide-in-bottom mb-6 sm:mb-8">
          {socialLinks.map(({ icon: Icon, href, label, color, bg }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`relative group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${color} ${bg} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
            >
              <Icon size={20} className="sm:hidden" />
              <Icon size={24} className="hidden sm:block relative z-10" />

              {/* Tooltip */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {label}
              </div>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/30 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
            <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
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

        @keyframes slide-in-top {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-bottom {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes text-focus-in {
          0% {
            filter: blur(8px);
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            filter: blur(0);
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-8px) rotate(180deg); 
            opacity: 0.4;
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-slide-in-top {
          animation: slide-in-top 0.8s ease-out;
        }

        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.8s ease-out;
        }

        .animate-text-focus-in {
          animation: text-focus-in 1s ease-out both;
        }

        .animate-blink {
          animation: blink 1.2s infinite;
        }

        .animate-float {
          animation: float 6s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Mobile-first responsive optimizations */
        @media (max-width: 640px) {
          .animate-float {
            display: none;
          }
          
          /* Reduce motion intensity on mobile */
          .hover\\:scale-105:hover {
            transform: scale(1.02);
          }
          
          .hover\\:scale-110:hover {
            transform: scale(1.05);
          }
        }

        /* Accessibility - Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-slide-in-top,
          .animate-slide-in-bottom,
          .animate-text-focus-in,
          .animate-blink,
          .animate-float,
          .animate-spin-slow,
          .animate-pulse-slow {
            animation: none;
          }
          
          .hover\\:scale-105:hover,
          .hover\\:scale-110:hover {
            transform: none;
          }
        }

        /* Performance optimizations */
        .animate-spin-slow,
        .animate-float,
        .animate-pulse-slow {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;