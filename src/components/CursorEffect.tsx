import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      document.body.style.cursor = 'none';
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.body.style.cursor = '';
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[9999]">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 shadow-lg animate-pulse"
        style={{
          transform: 'translate(-50%, -50%)',
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      <div
        className="absolute w-24 h-24 bg-pink-400/10 rounded-full blur-2xl transition-all duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </div>
  );
};

export default CursorEffect;
