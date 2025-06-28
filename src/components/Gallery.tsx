import React, { useState, useEffect } from 'react';
import { gallery } from '../data/gallery';
import { ImageIcon, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsLoading(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showPrev = () => {
    if (selectedIndex !== null) {
      setDirection('prev');
      setSelectedIndex((prev) => (prev! - 1 + gallery.length) % gallery.length);
      setIsLoading(true);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setDirection('next');
      setSelectedIndex((prev) => (prev! + 1) % gallery.length);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 px-6 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none left-[calc(50%-12rem)] top-10 -z-10" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Journey Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group hover:scale-[1.03] transition-transform duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => openModal(i)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group-hover:border-purple-300 transition-all duration-300">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-purple-200">
                    <ImageIcon size={48} />
                  </div>
                )}
              </div>
              <div className="p-3 bg-black/40 backdrop-blur-lg absolute bottom-0 w-full text-left">
                <h3 className="text-sm font-bold text-purple-200 truncate">{item.title}</h3>
                <p className="text-xs text-white/70 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center px-2 sm:px-4"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-pink-400 transition"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-4 text-white hover:text-purple-400 transition"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <div className="max-w-4xl w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ x: direction === 'next' ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === 'next' ? -300 : 300, opacity: 0 }}
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
                >
                  {isLoading && (
                    <div className="flex justify-center items-center h-[80vh]">
                      <Loader2 size={36} className="animate-spin text-purple-400" />
                    </div>
                  )}
                  <img
                    src={gallery[selectedIndex].image}
                    alt={gallery[selectedIndex].title}
                    className={`max-h-[60vh] sm:max-h-[80vh] w-full mx-auto object-contain rounded-xl shadow-lg transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                  />
                  {!isLoading && (
                    <div className="mt-3 sm:mt-4 px-2 sm:px-0 text-center text-white">
                      <h3 className="text-lg sm:text-xl font-bold">{gallery[selectedIndex].title}</h3>
                      <p className="text-sm sm:text-base text-white/70 mt-1">{gallery[selectedIndex].desc}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={showNext}
              className="absolute right-2 sm:right-4 text-white hover:text-purple-400 transition"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
