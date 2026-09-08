import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BlogCommonMistakesPage({ onNavigate }) {
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
              Common Mistakes<br className="hidden sm:inline" />
              Beginners Make<br className="hidden sm:inline" />
              While Learning<br className="hidden sm:inline" />
              Programming
            </h1>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/50">
              <img
                src="/bbce438de1c194693f4d63824df229311adb4660.jpg"
                alt="Common Mistakes Beginners Make While Learning Programming"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* MAIN ARTICLE BODY (Screenshots 1, 2, 3 & 4) */}
        {/* ========================================================================= */}
        <article className="max-w-4xl mx-auto">

          {/* INTRODUCTION (Screenshot 1 bottom) */}
          <section className="mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Introduction
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Every coder has faced the frustration of that first roadblock. And guess what? That’s where the magic happens. Every mistake brings you closer to mastering programming. Don’t stop now—you’re building something incredible!
              </p>
              <p>
                A simple error message, a frustrating bug, or a concept that just won’t click—doubt creeps in, and you start to wonder, 'Can I really do this?' It’s tempting to think that others have it all figured out, that their path was smoother. But the truth is, every coder has stumbled in their early days.
              </p>
              <p>
                The secret isn’t in avoiding mistakes; it’s in recognizing them early, learning from them, and staying in the game. Let’s break down some common mistakes beginners make while learning programming, so you can stay on track and boost your confidence along the way.
              </p>
            </div>
          </section>

          {/* 1. SKIPPING THE BASICS (Screenshot 2) */}
          <section className="pt-8 mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1.Skipping the basics
            </h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                It’s tempting to jump into exciting coding projects, but here’s a secret: skipping over the basics is like trying to run before you can walk. It’s a bit like jumping into some coding without knowing the fundamentals—variables, loops, conditionals-that can turn even the simplest of projects into a frustrating puzzle. It’s like trying to put together a piece of furniture without the instructions—you might make it work, but it’s going to be awkward and confusing.
              </p>
              <p>
                Instead, slow down and return to the basics. These aren’t just basic boring stuff; they’re your secret tools to get everything else to click. If you are best into programming through online coding classes in Kerala, you’re being good-these
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 2. NOT PRACTICING ENOUGH (Screenshot 2) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2. Not Practicing Enough
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Reading or watching tutorials without hands-on practice is a common pitfall. Programming is a skill that requires constant practice to retain and apply knowledge. Make it a habit to write code daily, even if it’s just a few small exercises. Practicing regularly is the key to truly mastering programming concepts.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 3. FEAR OF MAKING MISTAKES (Screenshot 2) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. Fear of Making Mistakes
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Some learners hesitate to experiment because they fear breaking something or making errors. Mistakes are a big part of how we learn and grow. Embrace errors as learning opportunities. Debugging helps deepen understanding and improves problem-solving skills.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 4. LEARNING SEVERAL LANGUAGES AT THE SAME TIME (Screenshot 2) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              4.Learning Several Languages at the Same Time
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Beginners often jump from one programming language to another, thinking it will make them versatile quickly. This approach can lead to confusion and a lack of proficiency in any language. Choose one language, such as Python or JavaScript, and stick to it until you feel confident.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 5. IGNORING DOCUMENTATION (Screenshot 3) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              5. Ignoring Documentation
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Many beginners avoid reading official documentation, finding it intimidating or boring. However, documentation is generally the most reliable reference for a language or tool. Get comfortable reading documentation. Start with small sections and use it as a reference while coding.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 6. OVERLOADING WITH TUTORIALS (Screenshot 3) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              6. Overloading with Tutorials
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Consuming too many tutorials without actual coding can create the illusion of learning. Watching tutorials alone doesn’t translate into practical skills. To truly grasp programming, follow a structured course, such as online coding classes in Kerala, and implement what you learn immediately. Strike a balance between learning and doing.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 7. NOT BREAKING PROBLEMS INTO SMALLER PARTS (Screenshot 3) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              7. Not Breaking Problems Into Smaller Parts
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Beginners often try to solve entire problems at once, leading to confusion and frustration. Break problems into smaller, manageable chunks. Solve each part step by step, and then combine them to form the complete solution.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 8. NEGLECTING PROBLEM-SOLVING SKILLS (Screenshot 3 & 4) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              8. Neglecting Problem-Solving Skills
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Focusing solely on syntax without developing problem-solving skills can hinder progress.Practice solving coding challenges and puzzles. Platforms like HackerRank or LeetCode can help improve logical thinking.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 9. COMPARING PROGRESS WITH OTHERS (Screenshot 4) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              9. Comparing Progress with Others
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Comparing your learning speed or achievements with peers can demotivate you. Everyone learns at their own pace. Focus on personal progress and celebrate small wins. Consistency matters more than speed.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 10. NOT SEEKING HELP (Screenshot 4) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              10. Not Seeking Help
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Beginners often struggle silently with issues instead of seeking help from peers, instructors, or online communities. Joining coding forums, online communities, or online coding classes in Kerala can be a great way to get the support you need. These platforms allow you to ask questions, share your challenges, and learn from others who might have faced similar struggles.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* CONCLUSION (Screenshot 4 bottom) */}
          <section className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Conclusion
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Programming is a rewarding skill, but it’s important to approach it with patience and the right mindset. By avoiding these common mistakes, you can fast-track your learning and make the process more enjoyable.Whether through structured courses or self-learning, consistent practice and a problem-solving approach are essential to becoming a proficient programmer. If you’re looking for a guided way to learn programming, online coding classes in Kerala provide structured learning paths tailored for beginners and professionals alike.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}
