import React from 'react';
import { Users, Presentation, Handshake } from 'lucide-react';
import { hiringPartners } from '../data/tronData';

export default function Stats() {
  const cards = [
    {
      icon: Users,
      value: "1,000+",
      label: "Students"
    },
    {
      icon: Presentation,
      value: "15+",
      label: "Mentors"
    },
    {
      icon: Handshake,
      value: "50+",
      label: "Placement Partners"
    }
  ];

  return (
    <section className="relative bg-transparent border-b border-purple-950/30">

      {/* 3 Purple Metric Cards (Screenshot 1 Match) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="py-10 px-6 rounded-2xl bg-[#1d0a2d] border border-purple-500/20 text-center shadow-xl shadow-black/50"
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#d946ef]" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-gray-300">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* "OUR STUDENTS WORK AT" text & Marquee (Screenshot 1 & 2 Match) */}
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-14">
          OUR STUDENTS WORK AT
        </p>

        {/* Partners Row / Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee space-x-12 sm:space-x-16 items-center py-2">
            {hiringPartners.concat(hiringPartners).concat(hiringPartners).map((name, i) => (
              <div
                key={i}
                className="text-sm sm:text-base font-bold tracking-widest text-gray-400 hover:text-white transition-colors uppercase whitespace-nowrap cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
