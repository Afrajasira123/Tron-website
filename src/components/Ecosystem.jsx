import React from 'react';
import { assets } from '../data/tronData';

export default function Ecosystem() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Title Matching Screenshot 4 & 5 */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          “Tron : Your Success Partners”
        </h2>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-16">
          Tron isn't just a place to learn; it's where ambition meets opportunity across all digital fields. With branches like Tron Digital, Tron Technology, Tron Marketing, and Tron Studio, we partner with top professionals to provide insights and hands-on experiences that are crucial for success.
        </p>

        {/* 4 Brand Logos Side-by-Side (Exact Screenshot 5 Match) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
          {assets.ecosystem.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="h-28 sm:h-36 w-auto object-contain drop-shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
