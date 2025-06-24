import React from 'react';
import { gallery } from '../data/gallery';
import { ImageIcon } from 'lucide-react';

const Gallery = () => (
  <section id="gallery" className="py-24 px-6 relative">
    <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none left-[calc(50%-12rem)] top-10 -z-10" />
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        Journey Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group hover:scale-[1.03] transition-transform duration-300 shadow-lg hover:shadow-2xl"
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
  </section>
);

export default Gallery;
