import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Moments() {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
      active: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
      active: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
      active: false
    }
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Title Matching Screenshot 3 */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-10 sm:mb-16">
          <span className="text-[#d946ef] drop-shadow-[0_0_20px_rgba(217,70,239,0.7)] block">
            Rewind
          </span>
          <span className="text-white block mt-1">the Moments</span>
        </h2>

        {/* 3 Video Cards Carousel (Screenshot 3 Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10">
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              className={`relative rounded-2xl overflow-hidden aspect-[9/12] sm:aspect-[9/14] bg-[#140b20] shadow-2xl transition-all duration-300 ${
                idx === 0
                  ? 'border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
                  : 'border border-purple-500/20'
              }`}
            >
              {/* Video Thumbnail Image */}
              <img
                src={reel.image}
                alt="Moment reel"
                className="w-full h-full object-cover"
              />

              {/* Top Watermark */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-80">
                <span className="text-[10px] font-bold text-white tracking-widest uppercase bg-black/40 px-2 py-0.5 rounded">
                  TRON ACADEMY
                </span>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Navigation Arrows (Screenshot 3 Match) */}
        <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
          <button 
            className="w-11 h-11 rounded-full bg-[#12071f] border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            className="w-11 h-11 rounded-full bg-[#12071f] border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
