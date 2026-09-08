import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BlogDigitalMarketingPage({ onNavigate }) {
  // Scroll to top upon mounting
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-24">

        {/* Back navigation */}
        <div className="mb-8 sm:mb-10">
          <button
            onClick={() => {
              if (onNavigate) onNavigate('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400 hover:text-purple-300 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Blogs</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* HERO SECTION: Title + Featured Image (Screenshot 1) */}
        {/* ========================================================================= */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-24">
          {/* Left Column: Blog Title */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.18] tracking-tight">
              Digital Marketing:<br className="hidden sm:inline" />
              Trends to Watch<br className="hidden sm:inline" />
              Out for in 2025
            </h1>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/50">
              <img
                src="/88a28dfe4beb693fea2c6af07b613434d4cb7341.jpg"
                alt="Digital Marketing: Trends to Watch Out for in 2025"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* MAIN ARTICLE BODY (Screenshots 1, 2 & 3) */}
        {/* ========================================================================= */}
        <article className="max-w-4xl mx-auto">

          {/* INTRODUCTION (Screenshot 1 bottom) */}
          <section className="mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Introduction
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Are you ready for the virtual revolution that’s about to shake our lives? As we inch closer to 2025, it’s clear—digital marketing is taking off, and it’s changing the game of how brands interact with their audience. With tech at the essence this time around, marketers have no option but to advice fast, dream big, and Keep up the momentum. Adapt or get left behind?
              </p>
              <p>
                Let’s be honest, the digital world is moving quicker than you can blink. At Tron Academy, best digital marketing institute in Chavakkad, Thrissur, it’s all about keeping you ahead of the curve. The digital game is advancing and if you’re not learning, you’re lagging. So, what’s next for digital marketing? It’s not just about being savvy about Instagram anymore. Here’s the lowdown on the trends we think will call the shots in 2025:
              </p>
            </div>
          </section>

          {/* 1. IS AI TAKING OVER OR WHAT? (Screenshot 2 top) */}
          <section className="pt-8 mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Is AI Taking Over or What?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              AI isn’t just for chatbots anymore. Think smarter algorithms, made-for-you advice, and ads that know you ahead of your bestie. From AI-powered content creation to predictive analytics, AI is about to become your ride-or-die in marketing. Why should you care? Because brands that don’t embrace AI will look like they’re still stuck in 2015, playing catch-up while everyone else moves forward. At Tron Academy, we’ll show you how to surf the AI wave instead of wiping out.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 2. IMMERSIVE EXPERIENCES: TURNING STORYTELLING INTO STORYLIVING (Screenshot 2 middle) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Immersive Experiences: Turning Storytelling Into Storyliving
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Gosh! Remember when things like augmented reality and virtual reality seemed like something from a science-fiction movie? Well, so it seems. They aren’t really for the future anymore; they are already here, transforming how brands make contact with people. People do not want boring ads anymore. They want experiences, and AR/VR does meet their needs. It's not just marketing; it's a whole vibe. Is It Hard to Get Started? Not really. With AR and VR tech getting user-oriented, brands of all sizes can jump in. If this sounds like your cup of tea, it should. It's time to raise the bar. Jump into a Digital Marketing Course in Thrissur Kerala that transcends teaching trends—Why? Because the future isn't on its way—It's already in place.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 3. VOICE SEARCH: ARE YOU TALKING TO YOUR AUDIENCE OR JUST TYPING AT THEM? (Screenshot 2 bottom) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Voice Search: Are You Talking to Your Audience or Just Typing at Them?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Let's think about voice search—because typing seems a bit outdated now. People everywhere shout 'Hey Siri' or 'OK Google' to get answers showing that smart speakers and voice assistants are becoming the norm. What does this mean for marketers in 2025? The boundary between talking and searching is fading . People want more than just answers—they expect them to sound like a real person. Voice search isn't just popular; it's how we manage our daily lives. A leading Digital Marketing Course in Thrissur, Kerala can help you master this skill before the competition does.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 4. SUSTAINABILITY AND SOCIAL VALUES: THE HEART OF BRAND IDENTITY (Screenshot 3 top) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Sustainability and Social Values: The Heart of Brand Identity
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Let’s be honest—nobody wants to connect with a brand that centers solely on profits and shuns purpose. By 2025, sustainability and social responsibility will go beyond just trendy terms—they’ll be essential for any brand that aims to sustain. Some brands are truly excelling in this area. Consider those using recyclable packaging, promoting local artisans, or launching campaigns that genuinely matter. Is This Just a Trend? Nope. Within 2025, sustainability and social responsibility will become the norm. Are you a marketer looking to help brands embrace this change? your turn has come to level up your skills.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 5. DATA PRIVACY: ARE YOU EARNING YOUR AUDIENCE’S TRUST OR JUST THEIR CLICKS? (Screenshot 3 middle) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Data Privacy: Are You Earning Your Audience’s Trust or Just Their Clicks?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Is your data safe? —because, honestly, nobody prefers their personal information to be scattered across the internet. As awareness grows about how data is utilized and misused, trust has become the new policy in 2025. If your brand withholds transparency, you’re not just losing customers—You're also slipping credibility Should brands be concerned about data privacy . People have every right to know about how data is utilized because data is important to every customer. They are looking for brands that surpass beyond to demonstrate their commitment to privacy. Don't know where to begin? A Digital Marketing Course in Thrissur, Kerala can equip you with the skills to uphold ethical practices.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* CONCLUSION (Screenshot 3 bottom) */}
          <section className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Conclusion
            </h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                You learn, you adapt, and you put in the work. At Tron Academy, we’re here to ascertain you’re not just playing catch-up. So, here’s the deal: Which digital trend do you think is going to take over in 2025? AI-driven marketing? Next-level storytelling? Or something else entirely? Let’s talk about it—because the future isn’t waiting for anyone.
              </p>
              <p>
                Be ready to be a part of the future!
              </p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
}
