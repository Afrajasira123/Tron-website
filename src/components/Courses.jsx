import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Courses({ onOpenModal }) {
  const [activeCourse, setActiveCourse] = useState(0);

  const courses = [
    {
      title: "UI/UX & Graphic Design",
      duration: "4 Months"
    },
    {
      title: "Advanced Digital Marketing",
      duration: "5 Months",
      featured: true
    },
    {
      title: "Full Stack Web Development",
      duration: "6 Months"
    }
  ];

  return (
    <section id="courses" className="relative py-24 bg-transparent overflow-hidden">

      {/* Glow behind title */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">

        {/* Title Matching Figma (Exact spelling "Cources" from Figma design) */}
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-3 mt-15">
          Our Trending<br />
          <span className="text-[#d946ef] drop-shadow-[0_0_20px_rgba(217,70,239,0.6)]">
            Courses
          </span>
        </h2>

        <p className="max-w-md mx-auto text-xs sm:text-sm text-gray-400 font-light mb-16">
          Industry-vetted curriculums designed to get you hired.<br />Choose your specialization.
        </p>

        {/* 3-Card Carousel Layout (Screenshot 2 Match) */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 max-w-5xl mx-auto">

          {/* Left Card (Flanking) */}
          <div
            onClick={() => setActiveCourse(0)}
            className="w-1/4 sm:w-1/3 h-72 sm:h-96 rounded-2xl sm:rounded-3xl bg-[#1d0a2d] border border-purple-500/10 opacity-70 hover:opacity-100 transition-all cursor-pointer flex flex-col items-center justify-center p-6 text-center shadow-lg"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-300">
              {courses[0].title}
            </h3>
            <span className="text-xs text-purple-400 mt-2">
              {courses[0].duration}
            </span>
          </div>

          {/* Center Card (Prominent Active Card in Figma) */}
          <div className="w-1/2 sm:w-2/5 h-80 sm:h-[440px] rounded-2xl sm:rounded-3xl bg-[#3c0957] border border-purple-500/40 shadow-2xl shadow-purple-950/80 flex flex-col items-center justify-center p-6 sm:p-10 text-center z-20">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
              {courses[1].title}
            </h3>

            {/* Action Buttons Row (Figma Match) */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={onOpenModal}
                className="px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-transparent border border-white/60 hover:bg-white/10 transition-colors flex items-center gap-1"
              >
                <span>Explore More</span>
                <span>→</span>
              </button>

              <span className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-[#3c0957] bg-[#e9d5ff]">
                {courses[1].duration}
              </span>
            </div>
          </div>

          {/* Right Card (Flanking) */}
          <div
            onClick={() => setActiveCourse(2)}
            className="w-1/4 sm:w-1/3 h-72 sm:h-96 rounded-2xl sm:rounded-3xl bg-[#1d0a2d] border border-purple-500/10 opacity-70 hover:opacity-100 transition-all cursor-pointer flex flex-col items-center justify-center p-6 text-center shadow-lg"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-300">
              {courses[2].title}
            </h3>
            <span className="text-xs text-purple-400 mt-2">
              {courses[2].duration}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
