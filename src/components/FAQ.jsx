import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, ArrowUpRight } from 'lucide-react';
import { faqs } from '../data/tronData';

export default function FAQ({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-24 bg-transparent">

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column (Figma Match) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mt-10">


            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white tracking-wide mb-6">
              Frequently<br />
              Asked<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 text-glow">
                Questions
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mt-12 max-w-sm">
              Can't find what you're looking for? Reach out to our student success & support team anytime.
            </p>


          </div>

          {/* Right Column: Accordions (Figma Match) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'bg-gradient-to-b from-[#1b1035] to-[#100a20] border-purple-500/50 shadow-xl shadow-purple-950/40'
                    : 'bg-[#100a20]/70 border-purple-500/20 hover:border-purple-500/35 hover:bg-[#150d2c]/80'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen
                        ? 'bg-purple-600 text-white border-purple-400 rotate-180'
                        : 'bg-white/5 text-purple-400 border-purple-500/20 rotate-0'
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 font-light leading-relaxed border-t border-purple-900/30 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
