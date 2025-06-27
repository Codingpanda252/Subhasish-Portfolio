import React, { useState, useEffect, useRef } from 'react';
import {
  Gamepad2,
  Zap,
  Play,
  Volume2,
  VolumeX,
  BarChart2,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { projects } from '../data/projects';

const clickSfx = new Audio('/sfx/click.mp3');
const startSfx = new Audio('/sfx/start.mp3');
const bgMusic = new Audio('/sfx/arcade-bg.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.07;

const EnhancedArcadePortfolio: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [btn, setBtn] = useState({ start: false, next: false, prev: false, exit: false });
  const [mute, setMute] = useState(false);
  const [fps, setFps] = useState(0);
  const [viewCounts, setViewCounts] = useState<number[]>(projects.map(() => 0));
  const [timeOnScreen, setTimeOnScreen] = useState<number[]>(projects.map(() => 0));
  const [isFullscreen, setIsFullscreen] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const lastFrame = useRef(performance.now());
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    let id: number;
    const loop = () => {
      const now = performance.now();
      setFps(Math.round(1000 / (now - lastFrame.current)));
      lastFrame.current = now;
      id = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      if (selected !== null) {
        setTimeOnScreen(ts => {
          const c = [...ts];
          c[selected] += 1;
          return c;
        });
      }
    }, 1000);
    return () => clearInterval(iv);
  }, [selected]);

  const press = (action: 'start' | 'next' | 'prev' | 'exit') => {
    if (!mute) clickSfx.play();
    setBtn(b => ({ ...b, [action]: true }));
    setTimeout(() => setBtn(b => ({ ...b, [action]: false })), 150);

    if (action === 'start' && selected === null) {
      if (!mute) {
        startSfx.play();
        if (bgMusic.paused) {
          bgMusic.currentTime = 0;
          bgMusic.play().catch(() => {});
        }
      }
      setSelected(0);
      setViewCounts(vc => {
        const c = [...vc];
        c[0]++;
        return c;
      });
    } else if (action === 'next' && selected !== null) {
      const nxt = (selected + 1) % projects.length;
      setSelected(nxt);
      setViewCounts(vc => {
        const c = [...vc];
        c[nxt]++;
        return c;
      });
    } else if (action === 'prev' && selected !== null) {
      const prv = (selected - 1 + projects.length) % projects.length;
      setSelected(prv);
      setViewCounts(vc => {
        const c = [...vc];
        c[prv]++;
        return c;
      });
    } else if (action === 'exit') {
      setSelected(null);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') press('next');
      if (e.key === 'ArrowLeft') press('prev');
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        press('start');
      }
      if (e.key === 'Escape') press('exit');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  useEffect(() => {
    if (mute) {
      bgMusic.pause();
    } else {
      if (!bgMusic.paused && selected !== null) {
        bgMusic.play().catch(() => {});
      }
    }
  }, [mute, selected]);

  useEffect(() => {
    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) press('prev');
    if (dx < -50) press('next');
    touchStartX.current = null;
  };

  const toggleFullscreen = () => {
    const elem = screenRef.current;

    if (!elem) return;

    if (
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    ) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if ((document as any).webkitExitFullscreen) (document as any).webkitExitFullscreen();
      else if ((document as any).mozCancelFullScreen) (document as any).mozCancelFullScreen();
      else if ((document as any).msExitFullscreen) (document as any).msExitFullscreen();

      setIsFullscreen(false);
    } else {
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if ((elem as any).webkitRequestFullscreen) (elem as any).webkitRequestFullscreen();
      else if ((elem as any).mozRequestFullScreen) (elem as any).mozRequestFullScreen();
      else if ((elem as any).msRequestFullscreen) (elem as any).msRequestFullscreen();

      setIsFullscreen(true);
    }
  };

  const diffColor = (d: string) =>
    ({ EXPERT: 'text-red-400', MASTER: 'text-purple-400', ADVANCED: 'text-yellow-400' }[d] || 'text-green-400');

  const statColor = (s: string) =>
    ({ ACTIVE: 'text-green-400 animate-pulse', BETA: 'text-yellow-400', COMPLETE: 'text-blue-400' }[s] || 'text-gray-400');

  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4 md:p-6 text-white font-mono"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            RETRO ARCADE
          </h1>
          <p className="text-cyan-300 animate-pulse text-sm sm:text-base">
            Tap / Swipe / Arrows / Click • Fully Interactive
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex items-center text-sm">
            <BarChart2 className="mr-1 text-green-400" />
            {fps} FPS
          </div>
          <button onClick={() => setMute(!mute)}>{mute ? <VolumeX size={24} /> : <Volume2 size={24} />}</button>
          <button onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
          </button>
        </div>
      </div>

      <div
        ref={screenRef}
        className="max-w-4xl mx-auto bg-[#1f1f1f] rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden relative border-8 border-cyan-400"
      >
        <div className="bg-gray-800 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            ◆ PROJECT ARCADE ◆
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> SYSTEM ONLINE
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>

        <div
          className="bg-black border-4 border-cyan-500/50 p-6 min-h-[400px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {selected === null ? (
            <div className="text-center space-y-6">
              <Gamepad2 size={48} className="mx-auto text-cyan-400 animate-bounce" />
              <h3 className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                PROJECT SHOWCASE
              </h3>
              <p className="text-green-400 animate-pulse">&gt; Press START</p>
              <p className="text-gray-400 text-sm">
                Projects: {projects.length} • Views: {viewCounts.reduce((a, b) => a + b, 0)}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="text-lg text-cyan-400 flex items-center gap-2">
                  <Play size={18} /> {projects[selected].title}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded border ${diffColor(projects[selected].difficulty)}`}
                >
                  {projects[selected].difficulty}
                </span>
              </div>
              {projects[selected].imageUrl && (
                <img
                  src={projects[selected].imageUrl}
                  alt={projects[selected].title}
                  className="rounded-lg w-full max-h-72 object-contain border border-gray-700"
                />
              )}
              <p className="text-gray-300">{projects[selected].description}</p>
              <p className="text-sm text-gray-400">{projects[selected].longDescription}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {projects[selected].tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-purple-600 px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    <Zap size={10} /> {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-xs">
                <span className={statColor(projects[selected].status)}>
                  STATUS: {projects[selected].status}
                </span>
                <span className="text-green-300">
                  Completed: {projects[selected].dateCompleted}
                </span>
              </div>
              <div className="flex gap-4 text-blue-400 text-xs">
                {projects[selected].githubUrl && (
                  <a
                    href={projects[selected].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    GitHub
                  </a>
                )}
                {projects[selected].liveUrl && (
                  <a
                    href={projects[selected].liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
              <div className="text-xs">TIME VIEWED: {timeOnScreen[selected]}s</div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full transition-all duration-500"
                  style={{ width: `${65 + (timeOnScreen[selected] % 35)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 p-4 bg-gray-800">
          {(['start', 'prev', 'next', 'exit'] as const).map(action => (
            <button
              key={action}
              onClick={() => press(action)}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 text-xs font-bold ${action === 'start'
                ? 'bg-red-600 border-red-500'
                : action === 'next'
                  ? 'bg-yellow-400 border-yellow-300 text-black'
                  : action === 'prev'
                    ? 'bg-green-500 border-green-400'
                    : 'bg-blue-500 border-blue-400'
                } ${btn[action] ? 'scale-95 shadow-inner' : 'hover:scale-105 shadow-md'}`}
            >
              {action.toUpperCase()}
            </button>
          ))}
          <img src="/joystick.png" alt="Joystick" className="w-20 h-20 object-contain" />
        </div>

        <div className="bg-black/50 border-t border-cyan-400/20 p-4 text-xs sm:text-sm">
          <div className="text-cyan-400 font-bold text-center mb-2">ARCADE CONTROLS</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <span className="text-green-400 font-bold">KEYBOARD</span>
              <br /> ← → Navigate
              <br /> Enter/Space Start
              <br /> ESC Exit
            </div>
            <div>
              <span className="text-yellow-400 font-bold">TOUCH</span>
              <br /> Swipe ←/→
              <br /> Tap Buttons
              <br /> FullScreen
            </div>
            <div>
              <span className="text-purple-400 font-bold">STATS</span>
              <br /> Projects: {projects.length}
              <br /> Views: {viewCounts.reduce((a, b) => a + b, 0)}
              <br /> Mute: {mute ? 'On' : 'Off'}
              <br /> Fullscreen: {isFullscreen ? 'Yes' : 'No'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedArcadePortfolio;
