import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BlogCodingEasyPage({ onNavigate }) {
  // Scroll to top upon mounting
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative bg-black bg-cyber-grid-purple text-white min-h-screen overflow-hidden">
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
              No Tech Skills? No<br className="hidden sm:inline" />
              Problem – Coding<br className="hidden sm:inline" />
              Is Easy!
            </h1>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/50">
              <img
                src="/239e6ff45eff39b06f3b029f2dccdd64a4398837.jpg"
                alt="No Tech Skills? No Problem – Coding Is Easy!"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* MAIN ARTICLE BODY (Screenshot 1 & Screenshot 2) */}
        {/* ========================================================================= */}
        <article className="max-w-4xl mx-auto">

          {/* INTRODUCTION (Screenshot 1 bottom) */}
          <section className="mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Introduction
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              What’s the first thing you typically do after waking up? For many of us, it’s instinctively checking our phones—WhatsApp notifications, Instagram updates, or that email you’ve been waiting for. It’s how we ease into the day now. It’s like a reflex. But here’s something to think about: Have you ever wondered what makes all of that happen? Think about it for a sec—how does Instagram just know the posts you’ll love? Or how do apps seem to work flawlessly without us ever thinking about it? There’s something going on behind the scenes, and that something is coding.
            </p>
          </section>

          {/* IS CODING EASY ? (Screenshot 2 top) */}
          <section className="pt-8 mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Is coding Easy ?
            </h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                It’s easy to feel a little nervous when you hear the word ‘coding.’ But don’t worry, it’s not as complex as you think. You don’t have to build the next big app to get started—just learning the basics can help you understand the tools and technology you use every day. If you’re ready to begin your coding journey, check out online coding classes in Kerala.
              </p>
              <p>
                I’m not a tech expert,’ you might be thinking. ‘How could I possibly learn coding?’ Well, here’s the thing—coding doesn’t have to be intimidating. It might seem complex at first, but at its heart, it’s just about structuring ideas to create something useful.There are plenty of online coding classes in Kerala designed specifically for beginners. These courses break things down in simple terms, making it easy for anyone to get started, even without a technical background.
              </p>
            </div>
          </section>

          {/* Divider matching Screenshot 2 */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* WHAT MAKES ONLINE CODING CLASSES SPECIAL? (Screenshot 2 middle) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              What Makes Online Coding Classes Special?
            </h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Learn at Your Own Pace : You can fit the classes around your schedule—perfect for busy lives.
              </p>
              <p>
                Hands-on Learning : More than theory, you will learn on the field right from your first day at work.
              </p>
              <p>
                Expert Teachers : The trainers are knowledgeable and make things understandable for beginners.
              </p>
              <p>
                Affordable Options : You won't have to pay an arm and a leg. Great learning is accessible to everyone.
              </p>
              <p>
                Courses Available : One can select from basic website development to high-end programming, depending on what one needs.
              </p>
            </div>
          </section>

          {/* Divider matching Screenshot 2 */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* CONCLUSION (Screenshot 2 bottom) */}
          <section className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Conclusion
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Coding is not a concentration, but rather a form of solving problems, thinking outside the box, and opening up to many opportunities. Online coding classes in Kerala offer wonderful support to discover these options and let you take charge of your destiny. Learning that can dramatically change your life both personally and professionally is not an opportunity to be missed; get going today and step into the exciting world of programming with your first step.Do not miss the opportunity to acquire an absolutely life-changing skill: start today and step into the exciting world of programming.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}
