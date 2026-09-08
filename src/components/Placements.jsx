import React from "react";
import { assets, placementMetrics } from "../data/tronData";

export default function Placements() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Top Badge (Figma Match) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-[#1d0a2d] border border-purple-500/40 text-purple-300 mb-6">
          <span className="text-purple-400">✦</span>
          <span>PLACEMENT SUCCESS STORIES</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4">
          Placed &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 drop-shadow-[0_0_20px_rgba(217,70,239,0.5)]">
            Thriving
          </span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-400 font-light mb-12">
          Our graduates are building careers across the UAE and India. Real people.
          <br />
          Real roles. Real impact.
        </p>

        {/* 4 Stats Metrics Row (Figma Match) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {placementMetrics.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-wider text-gray-400 uppercase mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Row 1: cards 0-3, moving LEFT */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-6 ">
          <div className="placement-marquee-left">
            {[0, 1].map((groupIdx) => (
              <div className="placement-marquee-group" key={`left-group-${groupIdx}`}>
                {assets.placementCards.slice(0, 4).map((card) => (
                  <div
                    key={`left-${groupIdx}-${card.id}`}
                    className="relative w-[220px] sm:w-[240px] lg:w-[260px] h-[180px] sm:h-[190px] lg:h-[200px]  shrink-0 flex items-center justify-center "
                  >
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="max-w-full max-h-full rounded-lg object-cover drop-shadow-xl"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: cards 4-7, moving RIGHT */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-6">
          <div className="placement-marquee-right">
            {[0, 1].map((groupIdx) => (
              <div className="placement-marquee-group" key={`right-group-${groupIdx}`}>
                {assets.placementCards.slice(4, 8).map((card) => (
                  <div
                    key={`right-${groupIdx}-${card.id}`}
                    className="relative w-[220px] sm:w-[240px] lg:w-[260px] h-[180px] sm:h-[190px] lg:h-[200px] shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="max-w-full max-h-full object-cover rounded-lg drop-shadow-xl"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
