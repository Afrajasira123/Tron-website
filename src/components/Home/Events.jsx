import React from "react";
import { assets } from "../../data/tronData";

export default function Events() {
  // Column 1: Photos 1, 2, 3
  const col1 = [assets.events[0], assets.events[1], assets.events[2]];
  // Column 2: Photos 4, 5, 6
  const col2 = [assets.events[3], assets.events[4], assets.events[5]];
  // Column 3: Photos 7, 8, 9
  const col3 = [assets.events[6], assets.events[7], assets.events[8]];

  return (
    <section id="events" className="relative py-14 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Title Matching Screenshot 5 */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
          Events & Celebrations
        </h2>

        {/* Subtitle Matching Screenshot 5 */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-10 sm:mb-16">
          At Tron Digital we believe in celebrating life, not just living it. The Tron family
          celebrates all festivals, birthdays of team members, and indulges in good natured frolic
          during team outings. After all, all work and no play makes Jack a dull boy!
        </p>

        {/* 3-Column Photo Grid (Exact Screenshot 5 Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:mt-16">
            {col1.map((item, index) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden bg-[#12071f] border border-purple-500/20 shadow-xl group hover:border-purple-400/50 transition-all"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full ${
                    index === 1 ? "h-[280px] sm:h-[400px] md:h-[500px]" : "h-auto"
                  } object-cover group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 ">
            {col2.map((item, index) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden bg-[#12071f] border border-purple-500/20 shadow-xl group hover:border-purple-400/50 transition-all"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full ${
                    index === 0 ? "h-[280px] sm:h-[350px] md:h-[450px]" : "h-auto"
                  } object-cover group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:mt-16">
            {col3.map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden bg-[#12071f] border border-purple-500/20 shadow-xl group hover:border-purple-400/50 transition-all"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
