import React from "react";
import { GraduationCap, Code2, SquareArrowOutUpRight, Trophy } from "lucide-react";
import { careerRoadmap } from "../../data/tronData";

// Custom SVG matching the exact checklist paper + pencil icon from the screenshot
function EnrollIcon({ className = "w-8 h-8" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Paper sheet */}
      <path d="M15 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
      <path d="M20 8v4" />
      {/* Bullet line 1 */}
      <rect x="7.5" y="7.5" width="2" height="2" rx="0.4" />
      <line x1="12" y1="8.5" x2="15" y2="8.5" />
      {/* Bullet line 2 */}
      <rect x="7.5" y="11.5" width="2" height="2" rx="0.4" />
      <line x1="12" y1="12.5" x2="16.5" y2="12.5" />
      {/* Bullet line 3 */}
      <rect x="7.5" y="15.5" width="2" height="2" rx="0.4" />
      <line x1="12" y1="16.5" x2="13.5" y2="16.5" />
      {/* Pencil at bottom-right */}
      <path d="M21 14.5a1.4 1.4 0 0 0-2-2l-4.2 4.2a1.2 1.2 0 0 0-.3.6l-.5 2.1a.3.3 0 0 0 .4.4l2.1-.5a1.2 1.2 0 0 0 .6-.3z" />
    </svg>
  );
}

export default function Roadmap() {
  const stageIcons = [EnrollIcon, GraduationCap, Code2, SquareArrowOutUpRight, Trophy];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-transparent overflow-hidden">
      {/* Subtle purple radial glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px]  rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Category Tag */}
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 block mb-3">
          YOUR CAREER ROADMAP
        </span>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-12 sm:mb-16 lg:mb-20 leading-tight">
          From learner to hired,
          <br />
          in{" "}
          <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(217,70,239,0.7)]">
            five clear stages.
          </span>
        </h2>

        {/* Roadmap Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous Connecting Line passing through center of all nodes */}
          <div
            className="absolute top-[48px] left-[5%] right-[5%] h-[1px] hidden lg:block z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.5) 15%, rgba(168,85,247,0.5) 85%, rgba(168,85,247,0.15) 100%)",
              // boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)'
            }}
          />

          {/* 5 Stages Grid / Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-4 relative z-10">
            {careerRoadmap.map((item, idx) => {
              const Icon = stageIcons[idx];
              return (
                <div
                  key={item.step || idx}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle Node with Fuzzy Nebula Aura */}
                  <div className="relative mb-6">
                    {/* Outer soft hazy feathered glow (matches screenshot aura) */}
                    {/* <div className="absolute -inset-3 rounded-full  pointer-events-none " /> */}
                    {/* <div className="absolute -inset-1 rounded-full bg-fuchsia-500/25 blur-sm pointer-events-none" /> */}

                    {/* Glowing Circular Node */}
                    <div
                      className="relative w-24 h-24 rounded-full flex items-center justify-center text-white z-10 "
                      style={{
                        background:
                          "radial-gradient(circle at 48% 8%, #ab47bc 0%, #8e24aa 38%, #5a1078 72%, #2c053d 100% )",
                        // border: '1px solid rgba(216, 180, 254, 0.35)'
                      }}
                    >
                      <Icon className="w-6 h-6 text-white " />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>

                  {/* Stage Description */}
                  <p className="text-xs sm:text-[13px] text-gray-400 font-normal leading-relaxed max-w-[195px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
