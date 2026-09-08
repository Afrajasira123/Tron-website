import React from "react";
import { whyTronList } from "../data/tronData";

export default function WhyTron() {
  return (
    <section id="why-tron" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header Matching Screenshot 3 */}
        <div className="max-w-2xl mb-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-3">
            WHY TRON ACADEMY
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-5">
            Everything you
            <br />
            need to actually
            <br />
            <span className="text-[#d946ef] drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]">
              get hired.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            At TRON Academy, we don't just teach—you learn the skills that guarantee your job-ready
            from day one. If you want to stand out, this is where you belong. Here's why you should
            choose us:
          </p>
        </div>

        {/* Staggered Alternating Layout (Exact Screenshot 3 Match) */}
        <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
          {/* Row 1: 01 on Left, Card on Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center md:justify-start">
              <span
                className="text-7xl sm:text-8xl font-black text-transparent font-poppins tracking-tighter"
                style={{ WebkitTextStroke: "1px #D074F0" }}
              >
                01
              </span>
            </div>
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1f0b2a] border border-purple-500/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">{whyTronList[0].title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {whyTronList[0].desc}
              </p>
            </div>
          </div>

          {/* Row 2: Card on Left, 02 on Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1f0b2a] border border-purple-500/20 shadow-xl order-2 md:order-1">
              <h3 className="text-xl font-bold text-white mb-3">{whyTronList[1].title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {whyTronList[1].desc}
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end order-1 md:order-2">
              <span
                className="text-7xl sm:text-8xl font-black text-transparent font-poppins tracking-tighter"
                style={{ WebkitTextStroke: "1px #D074F0" }}
              >
                02
              </span>
            </div>
          </div>

          {/* Row 3: 03 on Left, Card on Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center md:justify-start">
              <span
                className="text-7xl sm:text-8xl font-black text-transparent font-poppins tracking-tighter"
                style={{ WebkitTextStroke: "1px #D074F0" }}
              >
                03
              </span>
            </div>
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1f0b2a] border border-purple-500/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">{whyTronList[2].title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {whyTronList[2].desc}
              </p>
            </div>
          </div>

          {/* Row 4: Card on Left, 04 on Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1f0b2a] border border-purple-500/20 shadow-xl order-2 md:order-1">
              <h3 className="text-xl font-bold text-white mb-3">{whyTronList[3].title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {whyTronList[3].desc}
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end order-1 md:order-2">
              <span
                className="text-7xl sm:text-8xl font-black text-transparent font-poppins tracking-tighter"
                style={{ WebkitTextStroke: "1px #D074F0" }}
              >
                04
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
