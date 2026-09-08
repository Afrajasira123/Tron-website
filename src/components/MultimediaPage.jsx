import { useState } from "react";
import { Play, ChevronDown } from "lucide-react";

export default function MultimediaPage({ onOpenModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Why choose Tron feature items matching Screenshot 1
  const whyFeatures = [
    {
      num: "01",
      title: "REAL INDUSTRY PROJECTS",
      desc: "Build a portfolio with actual client work.",
    },
    {
      num: "02",
      title: "GCC WORK EXPERIENCE CERTIFICATE",
      desc: "Stand out in India & Middle East job markets.",
    },
    {
      num: "03",
      title: "SPECIALIZED TRACKS",
      desc: "Laser-focused training in high-demand fields.",
    },
    {
      num: "04",
      title: "PLACEMENT ASSISTANCE",
      desc: "Priority access to top studios & agencies.",
    },
  ];

  // Essential tools matching Screenshot 2
  const essentialTools = [
    {
      name: "Adobe Illustrator",
      abbr: "Ai",
      bg: "bg-[#d97706]",
      abbrBg: "bg-black text-[#d97706]",
    },
    {
      name: "Adobe Photoshop",
      abbr: "Ps",
      bg: "bg-[#06b6d4]",
      abbrBg: "bg-[#001e36] text-[#38bdf8]",
    },
    {
      name: "After effects",
      abbr: "Ae",
      bg: "bg-[#3b82f6]",
      abbrBg: "bg-[#00005b] text-[#93c5fd]",
    },
    {
      name: "Premiere Pro",
      abbr: "Pr",
      bg: "bg-[#f97316]",
      abbrBg: "bg-[#330000] text-[#fdba74]",
    },
    {
      name: "Figma",
      abbr: "❖",
      bg: "bg-[#ec4899]",
      abbrBg: "bg-black text-pink-300",
    },
  ];

  // Course offerings matching Screenshot 3
  const courseCards = [
    {
      id: "uiux",
      badge: "OFFLINE",
      title: "UI/UX DESIGNING",
      duration: "Duration: 3 Months",
      batch: "Duration: August 2nd Week",
    },
    {
      id: "graphic",
      badge: "OFFLINE",
      title: "GRAPHIC DESIGNING",
      duration: "Duration: 3 Months",
      batch: "Duration: August 2nd Week",
    },
    {
      id: "video",
      badge: "OFFLINE",
      title: "VIDEO EDITING",
      duration: "Duration: 3 Months",
      batch: "Duration: August 2nd Week",
    },
    {
      id: "production",
      badge: "OFFLINE",
      title: "PRODUCTION AND POST PRODUCTION",
      duration: "Duration: 3 Months",
      batch: "Duration: August 2nd Week",
    },
  ];

  // What you'll get pills matching Screenshot 3
  const whatYouGetItems = [
    "Job-Ready Design Portfolio",
    "Real-World Work Experience",
    "Industry Certification",
    "In-Demand Skills in Graphic, Motion, and UI Design",
    "Career Launchpad with Placement Help",
  ];

  // Next batch cohorts
  const batchCohorts = [
    { id: 1, title: "PRODUCTION & POST PRODUCTION", date: "SEP 15" },
    { id: 2, title: "VFX BASIC", date: "SEP 15" },
    { id: 3, title: "UI/UX DESIGNING", date: "SEP 15" },
    { id: 4, title: "GRAPHIC DESIGNING", date: "SEP 15" },
    { id: 5, title: "VIDEO EDITING", date: "SEP 15" },
    { id: 6, title: "3D ANIMATION & MOTION GRAPHICS", date: "SEP 15" },
  ];

  // Blog cards matching website style
  const blogCards = [
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
  ];

  // Multimedia FAQ items
  const faqItems = [
    {
      question: "Do I need any prior drawing, art, or graphic design experience to join?",
      answer:
        "No prior design background is required. We start with fundamental design principles—color theory, typography, visual hierarchy, and composition—before progressing to advanced industry tools like Illustrator, Photoshop, After Effects, and Figma.",
    },
    {
      question: "Which design and video editing software will I master?",
      answer:
        "You will master the industry standard suite: Adobe Illustrator for vector branding and logo design, Adobe Photoshop for photo manipulation, Adobe After Effects for motion graphics and visual effects, Premiere Pro for professional video editing, and Figma for modern UI/UX design.",
    },
    {
      question: "Will I work on genuine client branding and video production projects?",
      answer:
        "Yes! Every student builds a professional creative portfolio with real brand identity guidelines, social media campaign creatives, commercial video edits, and interactive UI prototypes that showcase job readiness.",
    },
    {
      question: "What is the GCC Work Experience Certification?",
      answer:
        "Our curriculum is benchmarked with creative agencies in India and the UAE (Dubai and Abu Dhabi). Eligible students receive internship opportunities with partner creative firms and GCC work experience certification that opens global job doors.",
    },
    {
      question: "What career roles can I pursue after completing the course?",
      answer:
        "Graduates become Graphic Designers, Brand Identity Specialists, UI/UX Designers, Motion Graphic Artists, Video Editors, Digital Content Creators, and Creative Directors across advertising agencies, tech firms, and production houses.",
    },
    {
      question: "Can I pay the course fee in flexible installments?",
      answer:
        "Yes, flexible installment schedules and zero-interest EMI options are available to make creative education affordable for every aspiring designer.",
    },
  ];

  const handleScrollToCourses = () => {
    const el = document.getElementById("multimedia-courses");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[1200px] left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[2600px] right-1/4 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Screenshot 1 Exact Match) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-4 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center">
        {/* Exact Figma Background Wave PNG with hexagons, particles & fluid curve */}
        <img
          src="/1b511a9bfee094c1138078cba513f7a70fa33a32.png"
          alt=""
          className="absolute left-0 -top-20 sm:-top-24 lg:-top-28 w-full h-[520px] sm:h-[600px] lg:h-[680px] object-cover object-top select-none pointer-events-none z-0 brightness-[0.200] saturate-[0.75] hue-rotate-[15deg] opacity-90"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Headline and Content matching Screenshot 1 */}
            <div className="lg:col-span-6 text-left">
              <h1 className="text-2xl sm:text-4xl lg:text-[32px] xl:text-[36px] font-extrabold tracking-tight text-white leading-[1.1] mb-4">
                Introducing Graphic design <br />
                Course in Kerala
              </h1>

              <p className="text-xs sm:text-sm text-gray-300/90 font-normal leading-relaxed max-w-[420px]">
                RON Academy Transforms Your Career with the Most Practical Digital Marketing course.
                Are you ready to secure your career with the most job- ready digital marketing
                course in Kerala?
              </p>
            </div>

            {/* Right Column: Exact Hero Vector Illustration PNG matching Screenshot 1 */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
              <img
                src="/6ea21a9a04b8b10b10b5556536c2b9e34c26b51c.png"
                alt="Graphic Design Course in Kerala"
                className="w-[360px] sm:w-[420px] lg:w-[450px] h-auto select-none pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY CHOOSE TRON ACADEMY ? (Screenshot 1 Bottom) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
          Why Choose <span className="text-[#a855f7]">Tron Academy ?</span>
        </h2>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
          Join the Best Graphic Designing Course in Thrissur
        </h3>
        <p className="max-w-3xl mx-auto text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mb-16">
          At TRON Academy, we don't offer "basic" multimedia training. The industry-oriented
          professionals being trained by us incorporate GCC work experience certification and on
          real projects with arming them with the latest tools.
        </p>

        {/* 4 Cards Grid Matching Screenshot 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyFeatures.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-[#180e2b] border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-between text-left hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/40 transition-all duration-300"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-white block mb-4">
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
      </section>

      {/* ========================================================================= */}
      {/* 3. WATCH OUR TRAINERS IN LIVE ACTION (Screenshot 2 Exact Match) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-20 sm:py-28 my-10 min-h-[500px] flex items-center">
        {/* Exact Figma Slate Wave PNG Asset from public/ */}
        <img
          src="/2b0fd5d35c858385ff02d3ad891b3ade4551a527.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0 brightness-[0.200] saturate-[0.75] hue-rotate-[15deg]"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading and Text matching Screenshot 2 */}
            <div className="lg:col-span-6 ml-20">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white  leading-[1.18] mb-5 tracking-wide">
                Watch Our Trainers <br />
                in Live Action
              </h2>
              <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed max-w-[380px]">
                In the history of modern astronomy, there is probably no one greater leap forward
                than the building and launch of the space telescope known as the Hubble.
              </p>
            </div>

            {/* Right Column: Video Card matching Screenshot 2 */}
            <div className="lg:col-span-5 -translate-y-25 lg:col-start-7">
              <div
                onClick={() => setActiveVideoModal(true)}
                className="rounded-2xl overflow-hidden bg-transparent shadow-2xl group cursor-pointer max-w-xl lg:max-w-none mx-auto"
              >
                <div className="relative aspect-[10/6] overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=80"
                    alt="Watch Our Trainers in Live Action"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Purple Circular Play Button matching Screenshot 2 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#9333ea] to-[#c084fc] flex items-center justify-center shadow-xl shadow-purple-950/60 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="pt-4 text-left">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                    Learn Angular js Course for Legendary Persons
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
                    In the history of modern astronomy, there is probably no one greater leap
                    forward than the building and launch of the space telescope known as the Hubble.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MASTER ESSENTIAL TOOLS & COURSE OFFERINGS */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Section 4A: Master These Essential Tools */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Master These Essential Tools
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mb-8">
            Learn the industry's best design tools. In this course, you'll get hands-on experience
            with:
          </p>

          {/* Colorful Tool Badges Matching Screenshot 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {essentialTools.map((tool) => (
              <div
                key={tool.name}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-md transition-transform hover:scale-105 ${tool.bg}`}
              >
                <span>{tool.name}</span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${tool.abbrBg}`}
                >
                  {tool.abbr}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4B: Choose Your Learning Style Header */}
        <div id="multimedia-courses" className="text-center pt-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-bold text-purple-300 uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            OUR COURSES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Choose Your Learning Style: <br />
            Flexible Schedules Available
          </h2>
        </div>

        {/* 4 Course Cards Grid matching Screenshot 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseCards.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-[#180e2b] border border-purple-500/20 p-6 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/40 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded bg-white text-black font-black text-[10px] uppercase tracking-wider mb-5">
                  {course.badge}
                </span>

                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-tight mb-4 group-hover:text-purple-300 transition-colors">
                  {course.title}
                </h3>

                <div className="space-y-1 text-xs text-gray-300 font-medium mb-8">
                  <p>{course.duration}</p>
                  <p className="text-gray-400">{course.batch}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full py-2.5 rounded-xl bg-black/60 hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-wider transition-all border border-purple-500/30 cursor-pointer text-center"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHAT YOU'LL GET IN THE COURSE (Screenshot 3 Exact Match) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-24 sm:py-36 my-14 min-h-[460px] flex items-center">
        {/* Exact Figma Purple Wave PNG Asset from public/ */}
        <img
          src="/cfa5b3c529829fa56d2f5efddfd560e9b4d219c8.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: 5 Staggered White Pills matching Screenshot 3 */}
            <div className="lg:col-span-7 flex flex-wrap gap-3 sm:gap-3.5">
              {whatYouGetItems.map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-bold text-xs sm:text-[13.5px] tracking-tight shadow-lg hover:scale-105 transition-transform select-none"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Right Column: Heading matching Screenshot 3 */}
            <div className="lg:col-span-5 text-left lg:text-right">
              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold text-white tracking-tight leading-[1.16]">
                What You'll Get <br />
                in the Course
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STUDENTS PROJECTS & PORTFOLIOS (Screenshot 4) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        <div className="text-left mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Students Projects & <br />
            Portfolios
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed">
            Explore commercial brand identities, editorial posters, packaging designs, and digital
            artwork created by our students during their studio cohorts.
          </p>
        </div>

        {/* 3-Column Creative Artwork Portfolio Grid matching Screenshot 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Column 1: Stationery & Brand Identity */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-amber-50">
                <img
                  src="/0413582f1f029c191010d309be6c7fc2eee7201e.png"
                  alt="Brand Stationery Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 text-left">
                <h4 className="text-sm font-bold text-gray-900">Luxury Brand Identity</h4>
                <p className="text-xs text-gray-500 mt-0.5">Typography & Visual Guidelines</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src="/ea83b4e8a91f6f0aaf6c8fc1ca58c80c7197bab7.jpg"
                  alt="Automotive Digital Assets"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 text-left">
                <h4 className="text-sm font-bold text-gray-900">Digital Product UI</h4>
                <p className="text-xs text-gray-500 mt-0.5">Web & Mobile Interface Design</p>
              </div>
            </div>
          </div>

          {/* Column 2: Creative Posters & Packaging */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src="/007db81984a4b73f13104e32bd6b8ed1d2ba2cb0.png"
                  alt="Streetwear Brand Campaign"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 text-left">
                <h4 className="text-sm font-bold text-gray-900">Streetwear Lookbook</h4>
                <p className="text-xs text-gray-500 mt-0.5">Editorial Fashion Graphics</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src="/5da00a4f4d1e99c8f880072bb67206bf01942ef4.jpg"
                  alt="Advertising Portal Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 text-left">
                <h4 className="text-sm font-bold text-gray-900">Commercial Campaign</h4>
                <p className="text-xs text-gray-500 mt-0.5">Performance Creative Assets</p>
              </div>
            </div>
          </div>

          {/* Column 3: Vector Illustrations & Artwork Cards */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-amber-100 flex items-center justify-center p-4">
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  <div className="rounded-lg bg-orange-400 flex items-center justify-center text-white text-xs font-black">
                    POSTER
                  </div>
                  <div className="rounded-lg bg-indigo-500 flex items-center justify-center text-white text-xs font-black">
                    VECTOR
                  </div>
                  <div className="rounded-lg bg-teal-500 flex items-center justify-center text-white text-xs font-black">
                    MOTION
                  </div>
                  <div className="rounded-lg bg-rose-500 flex items-center justify-center text-white text-xs font-black">
                    BRAND
                  </div>
                </div>
              </div>
              <div className="pt-3 text-left">
                <h4 className="text-sm font-bold text-gray-900">Illustration Showcase</h4>
                <p className="text-xs text-gray-500 mt-0.5">Geometric & Organic Art</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-purple-100 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-lg bg-gradient-to-tr from-purple-700 via-indigo-600 to-pink-500 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-purple-200">
                    Capstone Project
                  </span>
                  <span className="text-lg font-black mt-1">360° Brand Identity</span>
                </div>
              </div>
              <div className="pt-3 text-left">
                <h4 className="text-sm font-bold text-gray-900">Studio Capstone</h4>
                <p className="text-xs text-gray-500 mt-0.5">Comprehensive Agency Brief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR BLOGS SECTION (Extra Section per prompt) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            <span className="text-[#a855f7]">Explore</span> Our Blogs
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Curious minds welcome!
            <br />
            Check out our blog for insights into graphic design trends, motion graphics, and
            creative careers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {blogCards.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl bg-[#140e24] border border-purple-500/20 overflow-hidden p-4 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/40 transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3 bg-purple-950/30">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-purple-300 transition-colors leading-snug mb-3">
                  {blog.title}
                </h4>
              </div>
              <div className="text-[11px] font-medium text-gray-500 pt-2 border-t border-purple-950/50">
                {blog.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR NEXT BATCH SECTION (Extra Section per prompt) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30 text-center">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            <span className="text-[#a855f7]">Our</span> Next Batch
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Don't miss your chance to advance — our next batch kicks off soon.
            <br />
            Register now!
          </p>
        </div>

        {/* Cohort Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
          {batchCohorts.map((cohort) => (
            <div
              key={cohort.id}
              className="rounded-2xl bg-[#110c22] border border-purple-500/25 p-5 flex items-center justify-between hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="text-center pr-3 border-r border-purple-900/50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase block">SEP</span>
                  <span className="text-xl font-black text-white">15</span>
                </div>
                <h4 className="text-xs font-bold text-white tracking-wide uppercase max-w-[150px] leading-snug">
                  {cohort.title}
                </h4>
              </div>

              <button
                onClick={() => {
                  if (onOpenModal) onOpenModal();
                }}
                className="px-4 py-1.5 rounded-full bg-[#7e22ce] hover:bg-[#9333ea] text-white font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shadow-sm"
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (Extra Section per prompt) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently <br />
            asked questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Everything you need to know about the Multimedia & Graphic Design Career Path at TRON
            Academy.
          </p>
        </div>

        {/* Accordion FAQ items */}
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

      {/* Video Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setActiveVideoModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#110b20] border border-purple-500/40 rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-4 py-2 text-white">
              <span className="text-sm font-semibold text-purple-300">
                Trainers in Live Action — TRON Creative Studio
              </span>
              <button
                onClick={() => setActiveVideoModal(false)}
                className="text-gray-400 hover:text-white text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mt-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Studio Video Preview"
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
