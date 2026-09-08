import React from "react";
import { Users, Presentation, Handshake } from "lucide-react";
import { hiringPartners } from "../../data/tronData";

export default function Stats() {
  const cards = [
    {
      icon: Users,
      value: "1,000+",
      label: "Students",
    },
    {
      icon: Presentation,
      value: "15+",
      label: "Mentors",
    },
    {
      icon: Handshake,
      value: "50+",
      label: "Placement Partners",
    },
  ];

  return (
    <section className="relative bg-transparent border-b border-purple-950/30 overflow-hidden">
      {/* ===================================================== */}
      {/* 3 PURPLE METRIC CARDS */}
      {/* ===================================================== */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16 md:mb-20">
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-4
          sm:gap-5
          md:gap-6
        "
        >
          {cards.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="
                  py-7
                  sm:py-8
                  md:py-10
                  px-5
                  sm:px-6
                  rounded-2xl
                  bg-[#1d0a2d]
                  border
                  border-purple-500/20
                  text-center
                  shadow-xl
                  shadow-black/50
                  transition-all
                  duration-300
                  hover:border-purple-500/40
                  hover:-translate-y-1
                "
              >
                {/* Icon */}

                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Icon
                    className="
                      w-7
                      h-7
                      sm:w-8
                      sm:h-8
                      text-[#d946ef]
                    "
                  />
                </div>

                {/* Number */}

                <div
                  className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-extrabold
                  text-white
                  tracking-tight
                  mb-1.5
                  sm:mb-2
                "
                >
                  {item.value}
                </div>

                {/* Label */}

                <div
                  className="
                  text-xs
                  sm:text-sm
                  font-medium
                  text-gray-300
                "
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================================================== */}
      {/* OUR STUDENTS WORK AT */}
      {/* ===================================================== */}

      <div className="text-center">
        <p
          className="
          text-[10px]
          sm:text-xs
          font-bold
          uppercase
          tracking-[0.18em]
          sm:tracking-[0.25em]
          text-gray-400
          mb-8
          sm:mb-10
          md:mb-14
          px-4
        "
        >
          OUR STUDENTS WORK AT
        </p>

        {/* ===================================================== */}
        {/* PARTNERS MARQUEE */}
        {/* ===================================================== */}

        <div
          className="
          relative
          w-full
          overflow-hidden
          pb-8
          sm:pb-10
        "
        >
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max items-center py-2 animate-marquee">
              {hiringPartners
                .concat(hiringPartners)
                .concat(hiringPartners)
                .map((name, i) => (
                  <div
                    key={i}
                    className="
            shrink-0
            mx-4
            sm:mx-6
            md:mx-8
            text-xs
            sm:text-sm
            md:text-base
            font-bold
            tracking-[0.15em]
            sm:tracking-widest
            text-gray-400
            hover:text-white
            transition-colors
            uppercase
            whitespace-nowrap
            cursor-default
          "
                  >
                    {name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
