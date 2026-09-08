import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsList = [
  {
    id: 1,
    quote: "The concept is really novel and the quite impressive infrastructure and international trainers make Tron Academy on a different level.",
    author: "Fayis N K",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    quote: "My time at Tron Academy has been truly enriching. The beautifully designed and student-focused atmosphere is perfect for learning and growth, making it a premier career destination.",
    author: "Sneha Nair",
    role: "Product Designer"
  },
  {
    id: 3,
    quote: "Every student will strive to achieve excellence and creativity. If you want to enhance your skills while mastering practical skills, this is where Tron Academy provides the tools and knowledge.",
    author: "Ajith M",
    role: "Frontend Engineer"
  },
  {
    id: 4,
    quote: "Hands-on projects and 1:1 portfolio reviews made all the difference. I stepped into my role with complete industry confidence.",
    author: "Lakshmi Thara",
    role: "UI/UX Designer"
  },
  {
    id: 5,
    quote: "The practical exposure at TRON Academy gave me an unfair advantage in the interview. I had a live campaign portfolio to showcase!",
    author: "Rahul M",
    role: "Growth Engineer"
  }
];

// Solid neon fuchsia quotation mark matching reference image
function NeonQuoteIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const total = testimonialsList.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Touch handlers for mobile & tablet swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag support for desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-transparent overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        {/* Title Matching Screenshot Exactly (Left-aligned) */}
        <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-white pl-2 sm:pl-4">
          What Industry{' '}
          <span className="text-[#d946ef] drop-shadow-[0_0_0px_rgba(217,70,239,0.7)] font-extrabold">
            Experts Say!
          </span>
        </h2>
      </div>

      {/* Full-width interactive touch/drag carousel track spanning from one end to other */}
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing py-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Edge gradient vignettes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#040108] to-transparent z-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#040108] to-transparent z-30" />

        {/* Dynamic sliding track centered on active card */}
        <div
          className="flex items-center transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            // Centers whichever card is active in the middle of viewport
            transform: `translateX(calc(50vw - ${(activeIndex * 580) + 290}px))`
          }}
        >
          {testimonialsList.map((item, idx) => {
            const isCenter = idx === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-[320px] sm:w-[500px] md:w-[540px] lg:w-[580px] shrink-0 p-8 sm:p-12 lg:p-14 mx-3 sm:mx-4 rounded-xl text-center transition-all duration-500 ease-out ${isCenter
                  ? 'scale-100 sm:scale-105 opacity-80 z-20 bg-[#190728] border border-purple-500/35 shadow-[0_0_10px_rgba(147,51,234,0.22)] blur-none'
                  : 'scale-90 opacity-35 hover:opacity-50  z-10 bg-[#140620] border border-purple-500/15 cursor-pointer'
                  }`}
              >
                {/* Neon double quote icon */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <NeonQuoteIcon
                    className={`w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${isCenter
                      ? 'text-[#d946ef]'
                      : 'text-purple-600/60'
                      }`}
                  />
                </div>

                {/* Quote Text */}
                <p
                  className={`text-sm sm:text-base lg:text-[17px] leading-relaxed italic max-w-lg mx-auto  ${isCenter ? 'text-gray-200 font-normal' : 'text-gray-400 font-light'
                    }`}
                >
                  "{item.quote}"
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Left & Right Arrows + Indicators */}
      <div className="flex justify-center items-center gap-6 mt-8 relative z-20">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full bg-purple-950/40 hover:bg-purple-800/60 border border-purple-500/30 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {testimonialsList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx
                ? 'w-8 bg-[#d946ef]'
                : 'w-2 bg-purple-900/60 hover:bg-purple-700'
                }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full bg-purple-950/40 hover:bg-purple-800/60 border border-purple-500/30 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
