import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, ArrowLeft, Share2, Sparkles, BookOpen } from 'lucide-react';

export default function BlogPage({ onOpenModal, onNavigate }) {
  const [selectedPost, setSelectedPost] = useState(null);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 6 Blog Posts exactly matching the layout, images and titles in Screenshot 1
  const blogPosts = [
    {
      id: 1,
      title: "What is UGC and Why It's a Game Changer for Your Brand",
      image: '/366819eb0ef7787ffe5c4940e94b51beee7766a9.jpg',
      date: 'Jan 06, 2025',
      readTime: '4 min read',
      category: 'Digital Marketing & Content',
      author: 'Tron Editorial Team',
      excerpt: 'Discover why User-Generated Content (UGC) is transforming modern digital branding, driving higher engagement rates, and how creators leverage it for massive conversions.',
      content: [
        'User-Generated Content (UGC) is any content—text, videos, images, reviews—created by individuals rather than brands. In an era where consumers are increasingly skeptical of polished corporate advertising, UGC represents authentic, peer-driven validation.',
        'Why does it work so effectively? Modern algorithms on TikTok, Instagram Reels, and YouTube Shorts strongly reward authentic storytelling. When real people demonstrate real experiences with products, click-through rates jump by over 40% compared to traditional studio commercials.',
        'At Tron Academy, our Digital Marketing & Content Creation programs train creators and brand strategists to shoot, edit, and optimize UGC campaigns that convert viewers into loyal brand advocates.',
      ]
    },
    {
      id: 2,
      title: 'No Tech Skills? No Problem – Coding Is Easy!',
      image: '/239e6ff45eff39b06f3b029f2dccdd64a4398837.jpg',
      date: 'Jan 06, 2025',
      readTime: '5 min read',
      category: 'Programming & Web Dev',
      author: 'Tron Tech Faculty',
      excerpt: 'Breaking into programming doesn’t require a math degree or years of background experience. Here is how beginners can master coding with hands-on practice.',
      content: [
        'Many aspiring developers hesitate to start because they believe programming is all about high-level calculus or complex algorithms. In reality, modern programming is about structured problem-solving and logic.',
        'Languages like Python and JavaScript were designed with intuitive syntax that reads almost like plain English. When combined with modern developer tooling, visual debuggers, and component-based architectures like React, the learning curve is smoother than ever.',
        'At Tron Academy, 90% of our curriculum is dedicated to building real, live projects from Day 1. Instead of getting bogged down in abstract theory, you build functional web applications and deploy them to the cloud.',
      ]
    },
    {
      id: 3,
      title: 'Common Mistakes Beginners Make While Learning Programming',
      image: '/bbce438de1c194693f4d63824df229311adb4660.jpg',
      date: 'Jan 07, 2025',
      readTime: '6 min read',
      category: 'Career & Learning',
      author: 'Tron Mentorship Board',
      excerpt: 'From tutorial hell to skipping fundamental problem-solving, avoid the most common pitfalls that slow down aspiring developers.',
      content: [
        'The most frequent trap beginner coders fall into is "Tutorial Hell"—passively watching hour after hour of coding videos without typing code or solving unexpected bugs independently.',
        'Another common mistake is trying to learn five languages at the same time instead of mastering core fundamentals in one. Depth beats superficial breadth when preparing for high-paying junior developer positions.',
        'Finally, beginners often neglect version control (Git) and documentation. Developing good habits early—such as clean commits, debugging with console logs, and reading error stack traces—will set you apart in any technical interview.',
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing: Trends to Watch Out for in 2025',
      image: '/88a28dfe4beb693fea2c6af07b613434d4cb7341.jpg',
      date: 'Jan 08, 2025',
      readTime: '5 min read',
      category: 'Digital Strategy',
      author: 'Tron Editorial Team',
      excerpt: 'Explore the key digital marketing trends in 2025, from AI-powered personalization to immersive storytelling and voice search optimization.',
      content: [
        'Digital marketing is entering a transformative era where artificial intelligence, immersive AR/VR experiences, and conversational search dictate how brands connect with consumers.',
        'Brands that adapt early to predictive algorithms and data ethics gain a massive edge in establishing credibility and loyal customer advocacy.',
        'Tron Academy’s Digital Marketing programs prepare students to lead real campaigns equipped with the latest 2025 growth methodologies.',
      ]
    },
    {
      id: 5,
      title: 'No Tech Skills? No Problem – Coding Is Easy!',
      image: '/366819eb0ef7787ffe5c4940e94b51beee7766a9.jpg',
      date: 'Jan 09, 2025',
      readTime: '5 min read',
      category: 'Software Engineering',
      author: 'Tron Tech Faculty',
      excerpt: 'Why non-technical professionals are transitioning to tech faster than ever with Tron’s mentor-led project sprints.',
      content: [
        'Whether your background is in commerce, arts, or hospitality, technical literacy is one of the highest leverage skills of the 21st century.',
        'You do not need to memorize thousands of functions. Programming in the modern era is about learning how to decompose complex tasks into manageable micro-steps and using libraries effectively.',
        'With 1-on-1 mentor guidance, weekly code reviews, and mock technical screenings, Tron students transform into job-ready developers within months.',
      ]
    },
    {
      id: 6,
      title: 'Common Mistakes Beginners Make While Learning Programming',
      image: '/239e6ff45eff39b06f3b029f2dccdd64a4398837.jpg',
      date: 'Jan 10, 2025',
      readTime: '5 min read',
      category: 'Student Insights',
      author: 'Tron Mentorship Board',
      excerpt: 'Crucial advice on debugging patience, clean code conventions, and how to build a GitHub portfolio that lands interviews.',
      content: [
        'When code breaks, beginners often panic or rewrite everything from scratch. Seasoned developers know that debugging is 80% of the job.',
        'Learning how to read error messages carefully and isolate the exact line causing issues is the single biggest leap toward becoming an independent programmer.',
        'Tron Academy provides intensive pair programming sessions that instill industry-standard problem decomposition skills and best practices.',
      ]
    },
  ];

  const handleOpenBlog = (post) => {
    // If it's the UGC blog, navigate to dedicated Blog Detail Page
    if (
      post.id === 1 ||
      post.title.toLowerCase().includes('ugc')
    ) {
      if (onNavigate) {
        onNavigate('blog-ugc');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    // If it's the Coding Easy blog, navigate to dedicated Blog Detail Page
    if (
      post.id === 2 ||
      post.id === 5 ||
      post.title.toLowerCase().includes('no tech skills')
    ) {
      if (onNavigate) {
        onNavigate('blog-coding-easy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    // If it's the Common Mistakes blog, navigate to dedicated Blog Detail Page
    if (
      post.id === 3 ||
      post.id === 6 ||
      post.title.toLowerCase().includes('common mistakes')
    ) {
      if (onNavigate) {
        onNavigate('blog-common-mistakes');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    // If it's the Digital Marketing blog, navigate to dedicated Blog Detail Page
    if (
      post.id === 4 ||
      post.title.toLowerCase().includes('digital marketing') ||
      post.title.toLowerCase().includes('trends to watch')
    ) {
      if (onNavigate) {
        onNavigate('blog-digital-marketing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBlog = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Ambient background glows matching Tron aesthetic */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] left-1/4 -translate-x-1/2 w-[550px] h-[400px] bg-fuchsia-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20">

        {/* ========================================================================= */}
        {/* 1. HEADER SECTION (Screenshot 1) */}
        {/* ========================================================================= */}
        <header className="text-center max-w-3xl mx-auto pt-4 sm:pt-8 mb-12 sm:mb-16">
          {/* Main Title matching Screenshot 1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <span className="text-[#c084fc]">Explore</span> Our Blogs
          </h1>

          {/* Subtitle matching Screenshot 1 */}
          <p className="mt-4 sm:mt-5 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Curious minds welcome!<br />
            Check out our blog for a treasure trove of ideas, stories, and insights<br className="hidden sm:inline" />
            that can inspire your learning journey.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 2. BLOG CARDS GRID (Screenshot 1: 3 columns x 2 rows) */}
        {/* ========================================================================= */}
        <section aria-label="Blog posts list">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleOpenBlog(post)}
                className="group rounded-2xl sm:rounded-3xl bg-[#131317] border border-white/[0.08] p-4 sm:p-5 flex flex-col justify-between hover:border-purple-500/50 hover:bg-[#16161c] hover:shadow-2xl hover:shadow-purple-950/20 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Inner Image with rounded corners and card padding */}
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-black/60 mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Blog Title */}
                  <h2 className="text-white text-base sm:text-lg font-medium leading-snug line-clamp-2 min-h-[3rem] group-hover:text-purple-200 transition-colors">
                    {post.title}
                  </h2>
                </div>

                {/* Bottom Action: View link aligned to the bottom right */}
                <div className="flex justify-end items-center mt-6 sm:mt-8 pt-2">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-purple-300 transition-colors flex items-center gap-1">
                    View
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SHARE / SUBMIT BLOG SECTION (Screenshot 2) */}
        {/* ========================================================================= */}
        <section className="pt-24 sm:pt-36 pb-12 sm:pb-20 text-center max-w-4xl mx-auto px-4">
          {/* Heading matching Screenshot 2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            <span className="text-[#c084fc]">Get</span> Something to share? Prove it !
          </h2>

          {/* Subtitle matching Screenshot 2 */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-4 max-w-2xl mx-auto">
            If your blog catches our eyes, we’ll give it the spotlight. Show<br className="hidden sm:inline" />
            us what you’ve got send it to
          </p>

          {/* Email matching Screenshot 2 */}
          <div>
            <a
              href="mailto:blogs@tronmiddleeast.com"
              className="text-[#a855f7] hover:text-[#c084fc] font-medium text-lg sm:text-xl tracking-wide transition-all duration-200 hover:underline underline-offset-4 cursor-pointer inline-block"
            >
              blogs@tronmiddleeast.com
            </a>
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE ARTICLE PREVIEW MODAL */}
      {/* ========================================================================= */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={handleCloseBlog}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#121018] border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl shadow-purple-950/50 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseBlog}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-purple-300 uppercase tracking-wider mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
                {selectedPost.category}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.date}
              </span>
            </div>

            {/* Modal Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">
              {selectedPost.title}
            </h2>

            {/* Featured Image inside Modal */}
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/50 mb-6 border border-white/5">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Author Byline */}
            <div className="flex items-center justify-between py-3 border-y border-white/10 mb-6 text-xs sm:text-sm text-gray-400">
              <span className="font-medium text-purple-300">By {selectedPost.author}</span>
              <span>Tron Academy Publishing</span>
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed mb-8">
              <p className="text-purple-200/90 font-medium text-base sm:text-lg italic border-l-2 border-purple-500 pl-4 py-1">
                {selectedPost.excerpt}
              </p>
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <button
                onClick={handleCloseBlog}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    handleCloseBlog();
                    if (onOpenModal) onOpenModal();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 border border-purple-400/40 shadow-lg shadow-purple-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                  Connect With Tron
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
