import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Courses({ onOpenModal }) {
  const [activeCourse, setActiveCourse] = useState(1);

  const courses = [
    {
      title: "UI/UX & Graphic Design",
      duration: "4 Months",
    },
    {
      title: "Advanced Digital Marketing",
      duration: "5 Months",
      featured: true,
    },
    {
      title: "Full Stack Web Development",
      duration: "6 Months",
    },
  ];

  return (
    <section
      id="courses"
      className="
        relative
        py-16
        sm:py-20
        lg:py-24
        bg-transparent
        overflow-hidden
      "
    >
      {/* Glow behind title */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[280px]
          sm:w-[400px]
          md:w-[500px]
          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          bg-purple-900/15
          rounded-full
          blur-[100px]
          sm:blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
          text-center
        "
      >
        {/* ============================== */}
        {/* TITLE */}
        {/* ============================== */}

        <h2
          className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            tracking-tight
            text-white
            mb-1
            mt-2
            sm:mt-8
            lg:mt-15
            leading-tight
          "
        >
          Our Trending
          <br />
          <span
            className="
              text-[#d946ef]
              drop-shadow-[0_0_20px_rgba(217,70,239,0.6)]
            "
          >
            Courses
          </span>
        </h2>

        {/* ============================== */}
        {/* SUBTITLE */}
        {/* ============================== */}

        <p
          className="
            max-w-[320px]
            sm:max-w-md
            mx-auto
            text-xs
            sm:text-sm
            text-gray-400
            font-light
            mb-10
            sm:mb-14
            lg:mb-12
            leading-relaxed
          "
        >
          Industry-vetted curriculums designed to get you hired.
          <br />
          Choose your specialization.
        </p>

        {/* ============================== */}
        {/* 3 CARD LAYOUT */}
        {/* ============================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-stretch
            md:items-center
            justify-center
            gap-4
            sm:gap-6
            lg:gap-8
            max-w-5xl
            mx-auto
          "
        >
          {/* ============================== */}
          {/* LEFT CARD */}
          {/* ============================== */}

          <div
            onClick={() => setActiveCourse(0)}
            className="
              w-full
              md:w-1/3
              h-60
              sm:h-72
              md:h-80
              lg:h-96
              rounded-2xl
              sm:rounded-3xl
              bg-[#1d0a2d]
              border
              border-purple-500/10
              opacity-70
              hover:opacity-100
              transition-all
              duration-300
              cursor-pointer
              flex
              flex-col
              items-center
              justify-center
              px-5
              sm:px-6
              text-center
              shadow-lg
            "
          >
            <h3
              className="
                text-base
                sm:text-lg
                md:text-xl
                font-bold
                text-gray-300
                leading-snug
                max-w-[220px]
              "
            >
              {courses[0].title}
            </h3>

            <span
              className="
                text-xs
                text-purple-400
                mt-2
              "
            >
              {courses[0].duration}
            </span>
          </div>

          {/* ============================== */}
          {/* CENTER CARD */}
          {/* ============================== */}

          <div
            className="
              w-full
              md:w-2/5
              h-72
              sm:h-80
              md:h-96
              lg:h-[440px]
              rounded-2xl
              sm:rounded-3xl
              bg-[#3c0957]
              border
              border-purple-500/40
              shadow-2xl
              shadow-purple-950/80
              flex
              flex-col
              items-center
              justify-center
              px-5
              sm:px-8
              lg:p-10
              text-center
              z-20
            "
          >
            <h3
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-extrabold
                text-white
                leading-tight
                mb-6
                sm:mb-8
                max-w-[300px]
                sm:max-w-[360px]
              "
            >
              {courses[1].title}
            </h3>

            {/* Action Buttons */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-2
                sm:gap-3
                w-full
              "
            >
              {/* Explore More */}

              <button
                onClick={onOpenModal}
                className="
                  px-4
                  py-1.5
                  rounded-full
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  text-white
                  bg-transparent
                  border
                  border-white/60
                  hover:bg-white/10
                  transition-colors
                  flex
                  items-center
                  justify-center
                  gap-1
                  cursor-pointer
                  whitespace-nowrap
                "
              >
                <span>Explore More</span>
                <span>→</span>
              </button>

              {/* Duration */}

              <span
                className="
                  px-3.5
                  py-1.5
                  rounded-full
                  text-[11px]
                  sm:text-xs
                  font-bold
                  text-[#3c0957]
                  bg-[#e9d5ff]
                  whitespace-nowrap
                "
              >
                {courses[1].duration}
              </span>
            </div>
          </div>

          {/* ============================== */}
          {/* RIGHT CARD */}
          {/* ============================== */}

          <div
            onClick={() => setActiveCourse(2)}
            className="
              w-full
              md:w-1/3
              h-60
              sm:h-72
              md:h-80
              lg:h-96
              rounded-2xl
              sm:rounded-3xl
              bg-[#1d0a2d]
              border
              border-purple-500/10
              opacity-70
              hover:opacity-100
              transition-all
              duration-300
              cursor-pointer
              flex
              flex-col
              items-center
              justify-center
              px-5
              sm:px-6
              text-center
              shadow-lg
            "
          >
            <h3
              className="
                text-base
                sm:text-lg
                md:text-xl
                font-bold
                text-gray-300
                leading-snug
                max-w-[220px]
              "
            >
              {courses[2].title}
            </h3>

            <span
              className="
                text-xs
                text-purple-400
                mt-2
              "
            >
              {courses[2].duration}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
