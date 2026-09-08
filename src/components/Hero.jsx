import React from 'react';
import { Flame, Mail } from 'lucide-react';
import { assets } from '../data/tronData';

export default function Hero({ onOpenModal }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-transparent overflow-hidden">

      {/* Background radial purple glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Floating Doodles (from Figma) */}
      <div className="hidden lg:block absolute left-[-2%] top-[28%] pointer-events-none">

        {/* Floating astronaut outline */}
        <div className="w-150 h-auto opacity-20">

          <img
            src={assets.hero.astronautMegaphone}
            alt="Astronaut doodle"
            className="w-full h-auto object-contain mix-blend-screen"
          />
        </div>
      </div>

      {/* Right Floating Doodles (from Figma) */}
      <div className="hidden lg:block absolute right-[-22%] top-[-3%] pointer-events-none">
        {/* Astronaut with Megaphone Doodle (Figma asset) */}
        <div className="w-200 h-auto opacity-20">
          <img
            src={assets.hero.astronautMegaphone}
            alt="Astronaut doodle"
            className="w-full h-auto object-contain mix-blend-screen -scale-x-100"
          />
        </div>
      </div>

      {/* Center Content Matching Figma */}
      <div className="max-w-4xl mx-auto text-center z-10">

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-6">
          <span className="block text-white">OWN YOUR PATH AND</span>
          <span className="block mt-1 text-[#B500ED] drop-shadow-[0_0_px_rgba(217,70,239,0.7)]">
            DEFINE SUCCESS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8">
          A premium career accelerator with hands-on projects, 1:1 mentorship from industry experts and a placement engine that delivers — 5,000+ students hired across 100+ partner companies.
        </p>

        {/* Consultation Button */}
        <button
          onClick={onOpenModal}
          className="px-8 py-3.5 rounded-full font-semibold text-white bg-[#581c87] hover:bg-[#6b21a8] border border-purple-400/10 shadow-lg shadow-purple-950/80 transition-all hover:scale-105 text-sm"
        >
          Book a Free Consultation
        </button>

      </div>

    </section>
  );
}
