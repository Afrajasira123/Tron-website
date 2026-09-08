import React, { useState } from "react";
import {
  Star,
  Play,
  ExternalLink,
  Share2,
  Clock,
  ChevronDown,
  Lightbulb,
  Layout,
  User,
} from "lucide-react";

export default function CodingCoursePage({ onOpenModal, onNavigate }) {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Student projects data matching Screenshot 4
  const studentProjects = [
    {
      id: 1,
      title: "Handcar",
      image: "/ea83b4e8a91f6f0aaf6c8fc1ca58c80c7197bab7.jpg",
      category: "E-commerce & Automotive Spare Parts",
      link: "https://handcar.ae/",
    },
    {
      id: 2,
      title: "Konikkara",
      image: "/0413582f1f029c191010d309be6c7fc2eee7201e.png",
      category: "Luxury Jewelry & Craftsmanship",
      link: "https://konikkarajewelleryuae.com/",
    },
    {
      id: 3,
      title: "Hire in Abudhabi",
      image: "/5da00a4f4d1e99c8f880072bb67206bf01942ef4.jpg",
      category: "Talent Acquisition & Marketing Portal",
      link: "https://hireinabudhabi.com/",
    },
    {
      id: 4,
      title: "Zaahi Designs",
      image: "/zaahi.png",
      category: "Clothing Ecommerce and Fashion",
      link: "https://zaahidesigns.com/",
    },
  ];

  // Blog posts data matching Screenshot 5
  const blogPosts = [
    {
      id: 1,
      title: "What is UGC and Why It's a Game Changer for Your Brand",
      date: "06/01/2025",
      image: "/366819eb0ef7787ffe5c4940e94b51beee7766a9.jpg",
    },
    {
      id: 2,
      title: "No Tech Skills? No Problem – Coding Is Easy!",
      date: "06/01/2025",
      image: "/239e6ff45eff39b06f3b029f2dccdd64a4398837.jpg",
    },
    {
      id: 3,
      title: "Common Mistakes Beginners Make While Learning Programming",
      date: "07/01/2025",
      image: "/bbce438de1c194693f4d63824df229311adb4660.jpg",
    },
    {
      id: 4,
      title: "Digital Marketing: Trends to Watch Out for in 2025",
      date: "07/01/2025",
      image: "/88a28dfe4beb693fea2c6af07b613434d4cb7341.jpg",
    },
    {
      id: 5,
      title: "Digital Marketing: Trends to Watch Out for in 2025",
      date: "07/01/2025",
      image: "/88a28dfe4beb693fea2c6af07b613434d4cb7341.jpg",
    },
    {
      id: 6,
      title: "Digital Marketing: Trends to Watch Out for in 2025",
      date: "07/01/2025",
      image: "/88a28dfe4beb693fea2c6af07b613434d4cb7341.jpg",
    },
  ];

  // Why choose Tron feature items matching Screenshot 2
  const whyFeatures = [
    {
      num: "01",
      title: "90% HANDS-ON CODING",
      desc: "Learn Python by writing code, not just reading theory. Our Thrissur course is 90% practical for real skill-building.",
    },
    {
      num: "02",
      title: "MENTORS WITH INDUSTRY EXPERIENCE",
      desc: "Learn from seasoned developers who bring real-world expertise to guide your Python journey.",
    },
    {
      num: "03",
      title: "IMPACTFUL PYTHON PROJECTS",
      desc: "Build apps, automate tasks, and solve real problems with projects that boost your resume.",
    },
    {
      num: "04",
      title: "INSIGHTS FROM TECH EXPERTS",
      desc: "Join guest sessions with tech leaders to discover how Python powers today's innovations.",
    },
    {
      num: "05",
      title: "100% PLACEMENT SUPPORT",
      desc: "Get dedicated placement assistance to launch your coding career with confidence.",
    },
    {
      num: "06",
      title: "PERSONALIZED MENTORSHIP",
      desc: "A dedicated coordinator tracks your progress, clarifies doubts, and keeps you on track.",
    },
  ];

  // Partner brands matching Screenshot 1
  const partnerBrands = [
    { name: "acme", icon: "▲" },
    { name: "atica", icon: "◬" },
    { name: "circle", icon: "◯" },
    { name: "goldline", icon: "❙❙❙" },
    { name: "stari", icon: "✦" },
    { name: "Radiyal", icon: "✱" },
  ];

  // Course offerings matching Screenshot 3
  const courseCards = [
    {
      id: "vibe",
      title: "MERN Stack Development",
      badge: "OFFLINE",
      duration: "6 Months",
    },
    {
      id: "python",
      title: "Python-Django Development",
      badge: "OFFLINE",
      duration: "6 Months",
    },
    {
      id: "flutter",
      title: "Flutter App Development",
      badge: "OFFLINE/ONLINE",
      duration: "6 Months",
    },
  ];

  // Testimonials matching Screenshot 3
  const studentReviews = [
    {
      id: 1,
      quote:
        "“The community and accountability kept me motivated. I actually finished a course for the first time!”",
      author: "Rina, Singapore",
      stars: 5,
    },
    {
      id: 2,
      quote:
        "“Animations and interactions used to scare me. Now, I create websites that actually ‘wow’ clients.”",
      author: "Omar, UAE",
      stars: 5,
    },
    {
      id: 3,
      quote:
        "“I joined with no design background. Now I’m freelancing and charging $500+ per project.”",
      author: "Sarah, UK",
      stars: 5,
    },
  ];

  // Next batch cohorts matching Screenshot 7
  const nextBatches = [
    {
      id: "batch-mern",
      title: "MERN STACK DEVELOPMENT",
      date: "SEP 15",
    },
    {
      id: "batch-python",
      title: "PYTHON-DJANGO DEVELOPMENT",
      date: "SEP 15",
    },
    {
      id: "batch-datascience",
      title: "DATA SCIENCE",
      date: "SEP 15",
    },
  ];

  // FAQ list matching Screenshot 8
  const faqItems = [
    {
      question: "Do I need prior experience with Python?",
      answer:
        "No prior programming background is required. The course starts with beginner-friendly fundamentals and gradually moves to advanced topics like OOP, API development, databases, and full-stack integration.",
    },
    {
      question: "Which python plan do I need?",
      answer:
        "It depends on your career goal. If you want web backend development, Python-Django is ideal. If you want machine learning or analytics, our Data Science track provides the exact industry stack you need.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "You receive lifetime access to all learning resources, recorded sessions, curriculum updates, and the TRON developer alumni community.",
    },
    {
      question: "Is mentoring included?",
      answer:
        "Yes, you receive personalized 1:1 mentoring from experienced engineers, regular code reviews, doubt-clearing sessions, and career guidance.",
    },
    {
      question: "Do I get a certificate?",
      answer:
        "Yes, upon completing your live projects and practical capstone assessments, you earn an industry-recognized TRON Academy Certification.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Yes, flexible installment plans and zero-cost EMI options are available so that financial barriers do not stop your learning.",
    },
  ];

  const handleScrollToCourses = () => {
    const el = document.getElementById("learning-style");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToNextBatch = () => {
    const el = document.getElementById("next-batch");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[1100px] left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[2200px] right-1/4 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[3400px] left-1/3 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Screenshot 1) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-24 text-center">
        {/* Social Proof: Trusted by 50k students (Blank circular placeholders as instructed) */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-full bg-[#120b22]/70 border border-purple-500/20 backdrop-blur-md mb-8 shadow-lg shadow-purple-950/40">
          <div className="flex -space-x-2 overflow-hidden items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0c0818] bg-gradient-to-br from-purple-950 via-[#23153c] to-purple-900/80 border border-purple-400/30"
                title="Student avatar placeholder"
              />
            ))}
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-semibold text-white tracking-wide">
              Trusted by 50k students
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-bold text-gray-300">4.8/5</span>
              <div className="flex text-emerald-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <span className="text-[11px] text-gray-400 font-medium ml-0.5">Excellent</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto mb-6">
          <span className="text-[#a855f7] block mb-1.5">Level Up Your Career</span>
          with the Best Python Course in Kerala.
        </h1>

        {/* Subtitle Paragraph */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-400 font-normal leading-relaxed mb-8 px-2">
          At Tron Academy, we transform beginners into skilled coders and future-ready developers
          through hands-on experience training in Python, Data Science, Web Development, and more.
          Whether you dream of becoming a Python expert in Thrissur, a Data Scientist in Kerala, or
          a Web Developer, We don't provide ordinary coding courses – we deliver industry domination
          programs.
        </p>

        {/* CTA Button: Explore Courses */}
        <div className="flex justify-center mb-14">
          <button
            onClick={handleScrollToCourses}
            className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#702bf4] hover:bg-[#8038ff] border border-purple-400/40 shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 transition-all transform hover:scale-105 cursor-pointer"
          >
            Explore Courses
          </button>
        </div>

        {/* Partner / Client Logos Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-4 mb-10 text-gray-500 text-xs sm:text-sm border-t border-b border-purple-950/40">
          <span className="text-gray-400 font-medium">Upskilling teams with more projects</span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {partnerBrands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-1.5 font-semibold tracking-wider text-gray-400 hover:text-gray-200 transition-colors uppercase text-xs"
              >
                <span className="text-purple-400/80">{brand.icon}</span>
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Showcase Card 1 (Webflow / GSAP Interactive Player Frame) */}
        <div className="relative max-w-4xl mx-auto rounded-2xl md:rounded-3xl border border-purple-500/30 bg-[#0c0818]/90 p-2 sm:p-4 shadow-[0_0_50px_rgba(126,34,206,0.22)]">
          <div
            className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-[#1b0d36] via-[#100720] to-[#080410] border border-purple-900/40 flex flex-col justify-between p-4 sm:p-8 text-left group cursor-pointer"
            onClick={() => setActiveVideoModal("gsap")}
          >
            {/* Top Video Header */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-white text-xs shadow-md">
                  W
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate max-w-[280px] sm:max-w-md">
                    This changes everything for designers — Webflow Interactions with GSAP
                  </h4>
                  <p className="text-[10px] text-gray-400">Webflow</p>
                </div>
              </div>
            </div>

            {/* Main Video Visual Canvas */}
            <div className="my-auto text-center py-6 sm:py-10 z-10">
              <h3 className="text-xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto leading-tight">
                Unlock GSAP-powered motion <br />
                <span className="text-gray-200">— visually in Webflow</span>
              </h3>

              {/* YouTube Play Icon */}
              <div className="mt-6 inline-flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 rounded-2xl bg-red-600 group-hover:bg-red-500 group-hover:scale-110 text-white shadow-xl shadow-red-950/60 transition-all duration-300">
                <Play className="w-7 h-7 fill-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between z-10 pt-2 border-t border-white/10 text-gray-300 text-xs">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Share video"
                  className="hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Watch video later"
                  className="hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Clock className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 hover:bg-black text-[11px] font-medium">
                <span>Watch on</span>
                <span className="font-bold text-red-500 flex items-center gap-1">▶ YouTube</span>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-black/30 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY CHOOSE THIS TRON ACADEMY? SECTION (Screenshot 2) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        {/* Top Trust Rating Badge */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300">
            <span>Excellent</span>
            <div className="flex text-emerald-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.8/5</span>
            <span className="text-gray-400">Trusted by 50K+ students</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-white tracking-tight mb-5">
          Why choose Tron Academy?
        </h2>

        {/* Paragraph Description */}
        <p className="max-w-3xl mx-auto text-center text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mb-14">
          More than just lessons, this Python course in Thrissur gives you real developer
          experience. Every module at Tron Academy is designed around how Python is used in the real
          world, including automation, scripting with APIs and data management. You'll be working on
          actual projects, utilizing tools that working professionals use, and completing with a
          portfolio of what you're actually capable of.
        </p>

        {/* Feature Grid Matching Screenshot 2 (2 Rows: Card A + Cards 01-06) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {/* Highlight Card: CREATING CODERS OF TOMORROW */}
          <div className="rounded-2xl bg-[#0f0b18] border border-purple-500/30 p-6 flex items-center justify-center text-center shadow-lg shadow-purple-950/30">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider leading-snug">
              CREATING
              <br />
              CODERS
              <br />
              OF TOMORROW
            </h3>
          </div>

          {/* Cards 01 to 03 */}
          {whyFeatures.slice(0, 3).map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-[#110d1f]/90 border border-purple-500/20 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#a855f7] block mb-3">
                  {item.num}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Row 2: Cards 04 to 06 */}
          {whyFeatures.slice(3, 6).map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-[#110d1f]/90 border border-purple-500/20 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#a855f7] block mb-3">
                  {item.num}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Showcase Card 2 (Webflow Customer Story / Flow Ninja) */}
        <div className="relative max-w-4xl mx-auto rounded-2xl md:rounded-3xl border border-purple-500/30 bg-[#0c0818]/90 p-2 sm:p-4 shadow-[0_0_50px_rgba(126,34,206,0.22)]">
          <div
            className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-[#170a2c] via-[#0f071e] to-[#090412] border border-purple-900/40 flex flex-col justify-between p-4 sm:p-8 text-left group cursor-pointer"
            onClick={() => setActiveVideoModal("flowninja")}
          >
            {/* Top Video Header */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-white text-xs shadow-md">
                  W
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate max-w-[280px] sm:max-w-md">
                    Using visual development for professional, scalable sites | Webflow customer
                    story - Flow Ninja
                  </h4>
                  <p className="text-[10px] text-gray-400">Webflow</p>
                </div>
              </div>
            </div>

            {/* Main Video Visual Canvas */}
            <div className="my-auto py-6 sm:py-10 z-10 max-w-xl">
              <h3 className="text-xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Using visual development for professional, scalable sites
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">Webflow customer story</p>

              {/* YouTube Play Icon */}
              <div className="mt-6 inline-flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 rounded-2xl bg-red-600 group-hover:bg-red-500 group-hover:scale-110 text-white shadow-xl shadow-red-950/60 transition-all duration-300">
                <Play className="w-7 h-7 fill-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between z-10 pt-2 border-t border-white/10 text-gray-300 text-xs">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Share customer story"
                  className="hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Watch customer story later"
                  className="hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Clock className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 hover:bg-black text-[11px] font-medium">
                <span>Watch on</span>
                <span className="font-bold text-red-500 flex items-center gap-1">▶ YouTube</span>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-black/30 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR COURSES & STUDENT TESTIMONIALS (Screenshot 3) */}
      {/* ========================================================================= */}
      <section
        id="learning-style"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30"
      >
        {/* Section 3A: Our Courses */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 block">
            Our Courses
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
            Choose Your Learning Style:
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            Flexible Schedules Available
          </p>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-28">
          {courseCards.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-[#110d1f] border border-purple-500/20 p-6 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-[#facc15] text-black tracking-wider shadow-sm">
                    {course.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">{course.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">
                  {course.title}
                </h3>
              </div>

              <button
                onClick={() => {
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full py-3 rounded-xl bg-white hover:bg-gray-200 text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md hover:scale-[1.02]"
              >
                Enquire now
              </button>
            </div>
          ))}
        </div>

        {/* Section 3B: Student Testimonials */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Our students can't stop <br className="hidden sm:block" />
            <span className="italic font-serif font-light text-gray-100">
              talking about their results.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-400 leading-relaxed">
            See what real learners have to say about their journey to Webflow mastery. Every message
            is straight from our community.
          </p>
        </div>

        {/* Testimonial Cards Grid matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
          {studentReviews.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#110d1f]/90 border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
            >
              <p className="text-sm sm:text-base font-medium text-gray-200 leading-relaxed mb-6">
                {item.quote}
              </p>
              <div>
                <div className="flex text-teal-400 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-teal-400 text-teal-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium">{item.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar matching Screenshot 3 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto p-4 rounded-2xl bg-[#0f0b18]/80 border border-purple-500/20 backdrop-blur-md">
          <button
            onClick={() => {
              if (onOpenModal) onOpenModal();
            }}
            className="px-7 py-3 rounded-xl bg-[#702bf4] hover:bg-[#8038ff] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-900/50 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Get instant access
          </button>

          {/* Avatar Placeholders & Ratings */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0c0818] bg-gradient-to-br from-purple-950 via-[#23153c] to-purple-900/80 border border-purple-400/30"
                  title="Student avatar placeholder"
                />
              ))}
            </div>
            <div className="text-left text-xs">
              <div className="font-semibold text-gray-200">
                Trusted by 200K+ designers worldwide
              </div>
              <div className="flex items-center gap-1 mt-0.5 text-gray-400 text-[11px]">
                <span>Excellent</span>
                <div className="flex text-emerald-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STUDENT'S PROJECTS SECTION (Screenshot 4) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            <span className="text-[#a855f7]">Student's</span> Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-normal">
            Explore the amazing work by our talented students!
          </p>
        </div>

        {/* 2x2 Project Cards Grid matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {studentProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              className="rounded-2xl overflow-hidden bg-white text-gray-900 shadow-2xl transition-all duration-300 hover:scale-[1.015] group border border-purple-950/30"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Card Title Bar */}
              <div className="px-6 py-5 flex items-center justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold text-black tracking-tight">{project.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{project.category}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPLORE OUR BLOGS SECTION (Screenshot 5) */}
      {/* ========================================================================= */}
      <section
        id="coding-blogs"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30"
      >
        <div className="text-center mb-14 relative">
          <div className="inline-flex items-center justify-center gap-3 relative">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span className="text-[#a855f7]">Explore</span> Our Blogs
            </h2>

            {/* Hand-drawn curved arrow indicator matching Screenshot 5 */}
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 stroke-current -rotate-12 translate-y-2 hidden sm:inline-block"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M10 16 C22 10, 36 14, 38 28 C39 34, 34 38, 28 36"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
              <path
                d="M26 31 L28 36 L34 35"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 font-normal mt-3 max-w-lg mx-auto leading-relaxed">
            Curious minds welcome!
            <br />
            Check out our blog for a treasure trove of ideas, stories, and insights that can inspire
            your learning journey.
          </p>
        </div>

        {/* 2x3 Blog Cards Grid matching Screenshot 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl overflow-hidden bg-[#faf8fc] text-gray-900 shadow-xl border border-white/20 p-4 sm:p-5 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-950/30 transition-all duration-300 group cursor-pointer"
            >
              <div>
                {/* Blog Image */}
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Blog Title */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-4 group-hover:text-[#702bf4] transition-colors">
                  {blog.title}
                </h3>
              </div>

              {/* Blog Date */}
              <div className="text-xs font-semibold text-gray-500 pt-2 border-t border-gray-200">
                {blog.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MEET YOUR MENTOR SECTION (Screenshot 6) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-white tracking-tight mb-20">
          Meet Your Mentor
        </h2>

        {/* Mentor 1: Parvathy Nair (Image Left, Content Right) */}
        {/* Placeholder image area preserved with exact dimensions and blank state per instructions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center max-w-5xl mx-auto mb-24">
          {/* Mentor 1 Image Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-[4/5] rounded-3xl bg-[#140e24] border border-purple-500/30 shadow-2xl relative overflow-hidden group">
              <img
                src="/77707e195dce11c08fe043ec3354f1ea551c012b.png"
                alt="Parvathy Nair"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Mentor 1 Content */}
          <div className="md:col-span-7 text-left space-y-4">
            <span className="text-xs font-semibold text-purple-400 tracking-wide uppercase">
              Sr. Product Designer
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Parvathy Nair
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal pt-2">
              Parvathy Nair is a Product Designer based in New York with over 12 years of experience
              designing for top global brands.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              She has led design teams at SaaS startups, creative agencies, and Fortune 500
              companies, working on products used by millions worldwide.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              Her expertise spans UX strategy, Webflow development, and brand storytelling. Parvathy
              has mentored hundreds of designers through workshops and online programs—helping them
              transition from freelancers to confident business owners.
            </p>
          </div>
        </div>

        {/* Mentor 2: Savith Narayan (Content Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center max-w-5xl mx-auto">
          {/* Mentor 2 Content */}
          <div className="md:col-span-7 text-left space-y-4 order-2 md:order-1">
            <span className="text-xs font-semibold text-purple-400 tracking-wide uppercase">
              Sr. Product Designer
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Savith Narayan
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal pt-2">
              Savith Narayan, a Stockholm-based product designer, has been shaping digital products
              for over a decade.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              His journey began in branding agencies before moving into UX design for fintech and
              health-tech companies across Europe. Today, he runs his own design consultancy while
              teaching design professionals how to package their skills into premium services.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              Savith's approach blends design excellence with business growth strategies—making him
              a trusted mentor for designers ready to scale.
            </p>
          </div>

          {/* Mentor 2 Image Placeholder */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="w-full max-w-sm aspect-[4/5] rounded-3xl bg-[#140e24] border border-purple-500/30 shadow-2xl relative overflow-hidden group">
              <img
                src="/savith2.jpeg"
                alt="Savith Narayan"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PRE-BATCH CTA & OUR NEXT BATCH (Screenshot 7) */}
      {/* ========================================================================= */}
      <section
        id="next-batch"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30 text-center"
      >
        {/* Top CTA */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Are you ready to <br />
            <span className="italic font-serif font-light text-gray-100">transform your life?</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onOpenModal) onOpenModal();
              }}
              className="px-8 py-3.5 rounded-xl bg-[#702bf4] hover:bg-[#8038ff] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-900/50 hover:scale-105 cursor-pointer"
            >
              Get instant access
            </button>
            <button
              onClick={handleScrollToCourses}
              className="px-7 py-3.5 rounded-xl bg-[#1c1628] hover:bg-[#271f38] border border-white/10 text-white font-semibold text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>▶</span>
              <span>Learn more</span>
            </button>
          </div>
        </div>

        {/* "Our Next Batch" Container Matching Screenshot 7 */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-[#140f21]/90 border border-purple-500/20 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Subtle Wireframe Icons on top corners */}
          <div className="absolute top-6 left-6 text-amber-500/30">
            <Lightbulb className="w-8 h-8" />
          </div>
          <div className="absolute top-6 right-6 text-purple-400/30">
            <Layout className="w-8 h-8" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Our Next Batch
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed mb-10">
            Don't miss your chance to advance-our next batch kicks off soon.
            <br />
            Register now!
          </p>

          {/* 3 White Batch Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {nextBatches.map((batch) => (
              <div
                key={batch.id}
                className="rounded-2xl bg-white text-gray-900 p-6 flex flex-col justify-between shadow-xl hover:scale-[1.02] transition-transform duration-300"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-gray-800 block mb-3">
                    {batch.title}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#702bf4] tracking-tight mb-6">
                    {batch.date}
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (onOpenModal) onOpenModal();
                  }}
                  className="w-full py-2.5 rounded-full bg-[#702bf4] hover:bg-[#8038ff] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center shadow-md"
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS SECTION (Screenshot 8) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently <br />
            asked questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Everything you need to know about The Complete Path to Webflow Mastery.
          </p>
        </div>

        {/* Accordion FAQ Items Matching Screenshot 8 */}
        <div className="space-y-3">
          {faqItems.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#140f21]/80 border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left cursor-pointer group"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-purple-600/30 border-purple-400/40 text-purple-300"
                        : "text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Video Modal for GSAP / Flow Ninja showcase */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#110b20] border border-purple-500/40 rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-4 py-2 text-white">
              <span className="text-sm font-semibold text-purple-300">
                {activeVideoModal === "gsap"
                  ? "Webflow Interactions with GSAP"
                  : "Flow Ninja Customer Story"}
              </span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-gray-400 hover:text-white text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mt-2">
              <iframe
                className="w-full h-full"
                src={
                  activeVideoModal === "gsap"
                    ? "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    : "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                }
                title="Course video preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
