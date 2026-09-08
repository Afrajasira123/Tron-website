import React from "react";
import { Flame, Mail } from "lucide-react";
import { assets } from "../../data/tronData";

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        px-4
        sm:px-6
        lg:px-8
        bg-transparent
        overflow-hidden
        py-20
        sm:py-16
        lg:py-0
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND RADIAL PURPLE GLOW */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          top-[30%]
          sm:top-1/3
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[280px]
          sm:w-[450px]
          md:w-[600px]
          lg:w-[650px]
          h-[220px]
          sm:h-[280px]
          md:h-[330px]
          lg:h-[350px]
          bg-purple-900/5
          rounded-full
          blur-[100px]
          sm:blur-[120px]
          lg:blur-[140px]
          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* LEFT FLOATING DOODLE - DESKTOP ONLY */}
      {/* ===================================================== */}

      <div
        className="
          hidden
          lg:block
          absolute
          left-[-2%]
          top-[28%]
          pointer-events-none
        "
      >
        <div className="w-[600px] xl:w-[650px] h-auto opacity-20">
          <img
            src={assets.hero.astronautMegaphone}
            alt="Astronaut doodle"
            className="
              w-full
              h-auto
              object-contain
              mix-blend-screen
            "
          />
        </div>
      </div>

      {/* ===================================================== */}
      {/* RIGHT FLOATING DOODLE - DESKTOP ONLY */}
      {/* ===================================================== */}

      <div
        className="
          hidden
          lg:block
          absolute
          right-[-22%]
          top-[-3%]
          pointer-events-none
        "
      >
        <div className="w-[800px] xl:w-[900px] h-auto opacity-20">
          <img
            src={assets.hero.astronautMegaphone}
            alt="Astronaut doodle"
            className="
              w-full
              h-auto
              object-contain
              mix-blend-screen
              -scale-x-100
            "
          />
        </div>
      </div>

      {/* ===================================================== */}
      {/* CENTER CONTENT */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          mx-auto
          text-center
        "
      >
        {/* ===================================================== */}
        {/* TITLE */}
        {/* ===================================================== */}

        <h1
          className="
            text-[2rem]
            leading-[1.08]
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-7xl
            font-extrabold
            tracking-tight
            text-white
            uppercase
            mb-5
            sm:mb-6
            px-1
          "
        >
          <span className="block text-white">OWN YOUR PATH AND</span>

          <span
            className="
              block
              mt-1
              text-[#B500ED]
              drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]
            "
          >
            DEFINE SUCCESS
          </span>
        </h1>

        {/* ===================================================== */}
        {/* SUBTITLE */}
        {/* ===================================================== */}

        <p
          className="
            w-full
            max-w-[340px]
            sm:max-w-xl
            md:max-w-2xl
            mx-auto
            text-xs
            sm:text-sm
            md:text-base
            text-gray-300
            font-light
            leading-relaxed
            mb-7
            sm:mb-8
            px-1
            sm:px-0
          "
        >
          A premium career accelerator with hands-on projects, 1:1 mentorship from industry experts
          and a placement engine that delivers — 5,000+ students hired across 100+ partner
          companies.
        </p>

        {/* ===================================================== */}
        {/* CONSULTATION BUTTON */}
        {/* ===================================================== */}

        <button
          onClick={onOpenModal}
          className="
            inline-flex
            items-center
            justify-center
            px-6
            sm:px-8
            py-3
            sm:py-3.5
            min-h-[44px]
            rounded-full
            font-semibold
            text-white
            bg-[#581c87]
            hover:bg-[#6b21a8]
            border
            border-purple-400/10
            shadow-lg
            shadow-purple-950/80
            transition-all
            duration-300
            hover:scale-105
            active:scale-95
            text-xs
            sm:text-sm
            cursor-pointer
          "
        >
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}
