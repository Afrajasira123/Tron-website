import React from "react";
import { assets } from "../../data/tronData";

export default function Team() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ================= MEET THE FOUNDERS ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
            Meet the{" "}
            <span className="text-[#d946ef] drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]">
              Founders
            </span>
          </h2>
        </div>

        {/* 3 Founders Cards (Exact Screenshot 4 Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          {assets.founders.map((founder) => (
            <div key={founder.name} className="flex flex-col items-center text-center group">
              {/* Image Frame with Purple Border & Rounded Corners */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.25)] bg-[#10061c] mb-5 group-hover:border-purple-400/80 transition-all">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Title & Name */}
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-1">
                {founder.role}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wider uppercase">
                {founder.name}
              </h3>
            </div>
          ))}
        </div>

        {/* ================= OUR EXPERT INSPECTORS ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
            Our Expert{" "}
            <span className="text-[#d946ef] drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]">
              Inspectors
            </span>
          </h2>
        </div>

        {/* Mentor Avatars Layout (Screenshot 4 Match: 4 on top row, 2 centered below) */}
        <div className="max-w-4xl mx-auto relative">
          {/* Subtle connecting lines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 250"
              fill="none"
              stroke="#a855f7"
              strokeWidth="1"
            >
              <path d="M100 60 Q400 10 700 60 M250 180 Q400 220 550 180" />
            </svg>
          </div>

          {/* Top Row: 4 Mentors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-12">
            {assets.instructors.slice(0, 4).map((mentor) => (
              <div key={mentor.name} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-[#2c0b42] border-2 border-purple-500/50 shadow-lg shadow-purple-950/50 mb-3 overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">{mentor.name}</h4>
                <p className="text-[11px] text-gray-400 font-light mt-0.5">{mentor.role}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Mentors Centered */}
          <div className="flex justify-center gap-12 sm:gap-24">
            {assets.instructors.slice(4, 6).map((mentor) => (
              <div key={mentor.name} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-[#2c0b42] border-2 border-purple-500/50 shadow-lg shadow-purple-950/50 mb-3 overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">{mentor.name}</h4>
                <p className="text-[11px] text-gray-400 font-light mt-0.5">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
