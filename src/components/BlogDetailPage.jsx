import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Sparkles } from 'lucide-react';

export default function BlogDetailPage({ onOpenModal, onNavigate }) {
  // Scroll to top upon mounting
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative bg-black bg-cyber-grid-purple text-white min-h-screen overflow-hidden">
      {/* Subtle ambient lighting consistent with Tron branding */}
      <div className="absolute top-28 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[900px] right-1/4 w-[500px] h-[350px] bg-fuchsia-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-24">

        {/* Back navigation link */}
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
              What is UGC and<br className="hidden sm:inline" />
              Why It’s a Game<br className="hidden sm:inline" />
              Changer for Your<br className="hidden sm:inline" />
              Brand
            </h1>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/50">
              <img
                src="/366819eb0ef7787ffe5c4940e94b51beee7766a9.jpg"
                alt="What is UGC and Why It’s a Game Changer for Your Brand"
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

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I can’t be the only one who’s done this: You’re scrolling through Instagram, and a friend posts a picture of something they just bought. They’re smiling, clearly loving it, and they tag the brand. Without thinking twice, you start feeling like the brand is more trustworthy,Why? Because it’s from a source you are familiar with.it feels real, unpolished, and totally relatable. That’s the magic of user-generated content (UGC)
              </p>
              <p>
                These days, UGC is one of the most powerful ways to connect with people, build your brand’s reputation, and grow your business. A picture, a review, or even just a simple shoutout from your customers—UGC is real, it’s genuine, and it gets attention. It’s not like a polished ad; it feels personal and authentic. So how do you tap into this power to grow your brand and cut through all the noise in the market? Here’s how you can make UGC work its magic for your brand
              </p>
            </div>
          </section>

          {/* 1. BUILD TRUST AND AUTHENTICITY (Screenshot 2 top) */}
          <section className="pt-8 mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1.Build Trust and Authenticity: Show Your Brand’s True Colors
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              So, how do you get started with UGC? Easy! Get your happy customers to share their experiences. A simple request like, “Tag us in your photos, and you could be featured” can work wonders.And if you’re looking to learn how to make the most of UGC in your strategy, you can learn how to incorporate it effectively at the Best digital marketing institute in Chavakkad, Thrissur. They’ll show you how to harness the power of UGC in your campaigns and amplify your brand’s presence online!
            </p>
          </section>

          {/* Divider matching Screenshot 2 */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 2. RUN CREATIVE CAMPAIGNS (Screenshot 2 middle) */}
          <section className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2 .Run Creative Campaigns That Encourage Engagement
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              UGC doesn’t just happen on its own. You should make it enjoyable and simple for your audience to get involved.One of the best ways to get your customers involved is through social media campaigns or contests. Create a unique hashtag for your brand or run a photo contest asking your customers to showcase how they use your products. For example, #MyBrandStory or #InMyBrandStyle could encourage users to post their experiences. You could even offer a small reward for the best submissions. This not only increases engagement but also encourages your customers to eagerly share their experiences. At the Best digital marketing institute in Chavakkad, Thrissur, you’ll learn how to design campaigns that get your audience talking and sharing, turning your customers into your most powerful brand advocates.
            </p>
          </section>

          {/* Divider matching Screenshot 2 */}
          <div className="w-full border-b border-white/[0.08] my-10 sm:my-14" />

          {/* 3. REPURPOSE UGC FOR MARKETING SUCCESS (Screenshot 2 bottom) */}
          <section className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. Repurpose UGC for Marketing Success
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              You’ve got all this amazing content from your customers—now what? Repurpose it! Don’t let those outstanding posts go to waste. Whether it’s a glowing review or an amazing product photo, share it across your website, social media, email campaigns, and ads. Here’s how you can do it:
            </p>

            <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Social Media Posts:</strong> Repost user-generated images or videos. This gives them a moment in the spotlight and shows potential customers that people are already loving your brand.
              </p>
              <p>
                <strong className="text-white font-semibold">Website Content:</strong> Use user-generated content to build trust on your website by highlighting customer testimonials, reviews, and photos on your product pages.
              </p>
              <p>
                <strong className="text-white font-semibold">Email Campaigns:</strong> Add real customer stories or reviews to your email newsletters. It's a great way to make your emails feel more personal and engaging.
              </p>
            </div>
          </section>


        </article>

      </div>
    </div>
  );
}
