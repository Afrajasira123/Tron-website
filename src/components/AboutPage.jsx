import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function AboutPage({ onOpenModal, onNavigate }) {
  const edgeFeatures = [
    "Professional Training",
    "Interactive Sessions",
    "On-job Experience",
    "International Client Exposure",
    "Internship",
    "Interview Training",
    "Soft Skill Development",
    "Job Assistance"
  ];

  const statMetrics = [
    { value: "1000+", label: "Google Reviews" },
    { value: "30+", label: "Technologies" },
    { value: "100+", label: "Placement" },
    { value: "250+", label: "Companies" }
  ];

  return (
    <div className="relative bg-transparent text-white min-h-screen overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[1200px] left-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Screenshot 1) */}
        {/* ========================================================================= */}
        <section className="text-center max-w-5xl mx-auto pt-6 pb-24 sm:pb-32">
          {/* Badge: ABOUT US */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/30 bg-[#170e28]/70 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm shadow-purple-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            ABOUT US
          </div>

          {/* H1 Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Tron Academy isn't for everyone,
            <span className="block mt-2 text-[#a855f7]">
              only for the ambitious.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-400 font-normal leading-relaxed mb-12">
            Tron Academy isn't for everyone, only for the ambitious. If you want to coast
            through theory, you're in the wrong place. We deliver real-world projects and an
            impressive portfolio that will make employers take notice. The choice is yours:
            step up or get overlooked. The clock is ticking.
          </p>

          {/* 3 Metric / Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {/* Card 1: 5/5 */}
            <div className="rounded-2xl bg-[#0f0b18]/80 border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-center items-center sm:items-start text-center sm:text-left transition-all hover:border-purple-500/40">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#c084fc] tracking-tight">
                5/5
              </span>
              <span className="text-xs text-gray-400 font-medium mt-2">
                Student Happiness
              </span>
            </div>

            {/* Card 2: 20+ */}
            <div className="rounded-2xl bg-[#0f0b18]/80 border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-center items-center sm:items-start text-center sm:text-left transition-all hover:border-purple-500/40">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#c084fc] tracking-tight">
                20+
              </span>
              <span className="text-xs text-gray-400 font-medium mt-2">
                Batches Completed
              </span>
            </div>

            {/* Card 3: Contact Us Interactive Card - routes to Contact Us page */}
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group rounded-2xl bg-[#7e22ce] hover:bg-[#8b27df] p-6 sm:p-7 flex items-center justify-between shadow-[0_0_35px_rgba(126,34,206,0.45)] hover:shadow-[0_0_45px_rgba(147,51,234,0.6)] border border-purple-400/40 transition-all hover:scale-[1.02] cursor-pointer text-left"
            >
              <span className="text-base sm:text-lg font-bold text-white">
                Contact us
              </span>
              <div className="w-9 h-9 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-all group-hover:translate-x-1 shrink-0">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. OUR MISSION SECTION (Screenshot 1 bottom) */}
        {/* ========================================================================= */}
        <section className="max-w-4xl pt-8 pb-24 sm:pb-32">
          {/* Badge: OUR MISSION */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/30 bg-[#170e28]/70 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-purple-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            OUR MISSION
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-8">
            We prepare you to{' '}
            <span className="text-[#a855f7]">thrive in the real world</span>
            , not just survive in the classroom.
          </h2>

          {/* Paragraph */}
          <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-2xl">
            Our goal is to redefine the rules of education. We prepare you to thrive in the
            real world, not just survive in the classroom. We remove hurdles rather than
            merely connecting theory to practise. If you're not here to be extraordinary,
            you're wasting your time.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE EDGE / WHAT MAKES US DIFFERENT (Screenshot 2 top) */}
        {/* ========================================================================= */}
        <section className="pt-4 pb-28 sm:pb-36">
          <div className="max-w-3xl mb-12">
            {/* Badge: THE EDGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/30 bg-[#170e28]/70 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-purple-900/40">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              THE EDGE
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              What makes us different
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
              We don't just prepare you for the job market; we launch you into it with an
              undeniable edge. Our academy is a powerhouse of excellence, designed for those
              who refuse to settle. With direct access to international clients, you'll gain
              experience that others only dream of.
            </p>
          </div>

          {/* 8 Features Grid (2 rows of 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {edgeFeatures.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3.5 p-5 rounded-xl bg-[#0e0a17]/90 border border-purple-500/20 hover:border-purple-500/40 hover:bg-[#150f22] transition-all hover:scale-[1.01] shadow-sm shadow-purple-950/20"
              >
                <div className="w-6 h-6 rounded-full bg-[#3b1258] border border-purple-400/40 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-purple-200 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-gray-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHY PREFER US / BECAUSE WE'RE THE BEST (Screenshot 2 bottom) */}
        {/* ========================================================================= */}
        <section className="text-center max-w-5xl mx-auto pt-4 pb-24 sm:pb-32">
          {/* Badge: WHY PREFER US */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/30 bg-[#170e28]/70 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm shadow-purple-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            WHY PREFER US
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Because we're the best —<br />
            there's simply no comparison.
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-400 font-normal leading-relaxed mb-14">
            Our courses in Coding, Multimedia, and Digital Marketing aren't just classes; they're
            your ticket to the top. Whether you're starting out or aiming high, We prepare you to
            conquer the competition. Don't just learn-dominate. Choose us and watch your future soar.
          </p>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statMetrics.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0e0a17]/90 border border-purple-500/20 hover:border-purple-500/40 flex flex-col items-center justify-center transition-all hover:scale-[1.02] shadow-sm shadow-purple-950/20"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#c084fc] tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PRE-FOOTER CTA BANNER (Screenshot 3 top) */}
        {/* ========================================================================= */}
        <section className="pt-6 pb-12 sm:pb-20">
          <div className="relative rounded-3xl bg-[#0d0918] border border-purple-500/25 p-8 sm:p-16 text-center overflow-hidden shadow-2xl shadow-purple-950/50">
            {/* Subtle radial purple glow inside container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                So why wait? Start one of our high quality courses from the world's leading experts today!
              </h2>

              <button
                onClick={onOpenModal}
                className="group px-8 py-3.5 rounded-full font-semibold text-white bg-[#7e22ce] hover:bg-[#8b27df] border border-purple-400/30 shadow-lg shadow-purple-950/80 transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Join now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
