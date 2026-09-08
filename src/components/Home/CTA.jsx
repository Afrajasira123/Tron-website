import React from 'react';

export default function CTA({ onOpenModal }) {
  return (
    <section className="relative py-24 sm:py-28 w-full overflow-hidden bg-transparent border-y border-purple-900/40 text-center">
      {/* Subtle purple radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title Matching Screenshot Exactly */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8">
          Find your passion.
        </h2>

        {/* Enquire Now Pill Button */}
        <button
          onClick={onOpenModal}
          className="px-12 sm:px-14 py-4 rounded-full font-semibold text-white text-base sm:text-lg bg-[#7e22ce] hover:bg-[#8b27df] transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-purple-950/60"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
}
