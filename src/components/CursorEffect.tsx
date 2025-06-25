import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
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
        className="absolute w-4 h-4 bg-white border-2 border-pink-400 rounded-full shadow-md z-50"
        style={{
          transform: 'translate(-50%, -50%)',
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      <div
        className="absolute w-20 h-20 bg-pink-400/10 rounded-full blur-2xl transition-all duration-300 z-40"
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
