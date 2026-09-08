import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Users, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DigitalMarketingPage({ onOpenModal, onNavigate }) {
  const [activeMonth, setActiveMonth] = useState(1);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Why choose features matching Screenshot 2
  const creatingStoriesFeatures = [
    {
      num: '01',
      title: 'PRACTICAL-FIRST LEARNING APPROACH',
      desc: '90% practical and 10% theory — designed to help you apply concepts through hands-on training, not just classroom learning.',
    },
    {
      num: '02',
      title: 'LEARN FROM INDUSTRY PROFESSIONALS',
      desc: 'Train under accomplished digital marketers and industry experts who bring real-world experience to the classroom.',
    },
    {
      num: '03',
      title: 'BUILD A REAL-WORLD PORTFOLIO',
      desc: 'Work on live client projects during the course to build a portfolio that showcases your expertise and readiness for the job market.',
    },
    {
      num: '04',
      title: 'GUEST LECTURES BY INDUSTRY LEADERS',
      desc: 'Gain valuable insights from guest sessions led by top professionals sharing the latest trends and case studies.',
    },
    {
      num: '05',
      title: 'ASSURED PLACEMENT ASSISTANCE',
      desc: 'We offer dedicated placement support, connecting you with leading agencies and companies for internships and full-time roles.',
    },
    {
      num: '06',
      title: 'DEDICATED COURSE COORDINATOR',
      desc: 'Each batch is assigned a course coordinator to provide continuous support, track progress, and resolve queries promptly.',
    },
    {
      num: '07',
      title: 'ONE-ON-ONE MENTORSHIP',
      desc: 'Receive personalized guidance through 1:1 mentoring sessions tailored to your learning goals and career aspirations.',
    },
  ];

  // Syllabus by month matching Screenshot 3
  const syllabusData = {
    1: [
      'Introduction to Digital Marketing',
      'Website Development & Management',
      'Content Marketing',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Search Engine Marketing (SEM)',
      'Web Analytics',
      'Email Marketing, Affiliate Marketing, and Influencer Marketing',
    ],
    2: [
      'Advanced Google Ads & Search Campaigns',
      'Meta Ads Manager & Facebook Pixel Mastery',
      'Instagram Reels & Viral Brand Positioning',
      'On-Page, Off-Page & Technical SEO Audits',
      'Keyword Research & Competitor Benchmarking',
      'Google Search Console & Bing Webmaster Tools',
      'Copywriting for High-Converting Landing Pages',
      'Lead Generation Strategies for Local Businesses',
    ],
    3: [
      'Performance Marketing & ROI Optimization',
      'Google Display Network & Video Ads (YouTube)',
      'Retargeting & Custom Audiences Setup',
      'Google Analytics 4 (GA4) Custom Events & Funnels',
      'Google Tag Manager (GTM) Container Configuration',
      'Conversion Rate Optimization (CRO) & A/B Testing',
      'Social Media Scheduling & Automation Tools',
      'E-commerce Marketing for Shopify & WooCommerce',
    ],
    4: [
      'Marketing Automation with Zapier & Make',
      'CRM Integration (HubSpot & Zoho CRM)',
      'Email Drip Campaigns & Flow Sequences',
      'Affiliate Program Setup & Influencer Outreach',
      'Online Reputation Management (ORM)',
      'App Store Optimization (ASO)',
      'AI Tools for Marketers (ChatGPT, Midjourney, Jasper)',
      'Budget Allocation & Media Planning for Brands',
    ],
    5: [
      'Live Client Campaign Execution with Real Ad Budgets',
      'International Market Strategies (GCC / UAE Focus)',
      'Freelancing & Client Acquisition Blueprint',
      'Pitch Deck & Client Proposal Writing',
      'CapStone Project Presentation to Industry Experts',
      'Resume & LinkedIn Profile Optimization',
      'Mock Technical & HR Interview Rounds',
      'Agency Placement Drive & Job Referrals',
    ],
  };

  // Opportunities cards matching Screenshot 3
  const opportunities = [
    {
      title: 'Search Engine Optimiser',
      desc: 'Search Engine Optimization involves enhancing a website or web page to achieve a higher ranking in search engine results. The average salary ranges from Rs. 3,00,000 to Rs. 3,60,000 annually.',
      special: false,
    },
    {
      title: 'Google Ads Expert',
      desc: 'A Google Ads Specialist typically earns an average salary of around $45,000 annually or approximately $20 per hour.',
      special: false,
    },
    {
      title: 'Automation Expert',
      desc: 'Digital Marketing automation involves utilizing artificial intelligence and software to streamline and automate digital marketing tasks.',
      special: false,
    },
    {
      title: 'Social Media Marketer',
      desc: "Social media marketing focuses on managing an organization's presence across various social media platforms, including Facebook, Instagram, Twitter, YouTube, LinkedIn, and Pinterest.",
      special: false,
    },
    {
      title: 'Digital Marketing Executive',
      desc: 'This position entails managing multiple digital channels, analyzing performance metrics, and creating campaigns that engage target audiences.',
      special: false,
    },
    {
      title: 'And Many More...',
      desc: 'The digital marketing field is extensive, featuring roles such as Content Marketer, Email Marketing Specialist, Affiliate Marketer and others.',
      special: true,
    },
  ];

  // Testimonials matching Screenshot 4
  const testimonials = [
    {
      id: 1,
      name: 'Fayis NK',
      role: 'SEO Specialist',
      quote:
        'I was just a B.Com and CMA student before joining Tron Academy. But this place truly changed my life. I developed a website on my own and even brought it to the first rank on Google. I also ran Meta ads and generated real leads. The best part is I got 2-3 freelance projects during the course itself. And sure Tron is the best option for a digital marketing course in Thrissur.',
      image: '/6fde8636560673d3fca5fa1e04a11550fe9c30a7.png',
    },
    {
      id: 2,
      name: 'Ahammed Favaz',
      role: 'Performance Marketer',
      quote:
        'The hands-on practical learning at Tron Academy gave me real confidence. Working on live client campaigns and mastering Google Ads and Analytics helped me secure an international role at Tron Digital in Abu Dhabi right after completing my course!',
      image: '/36de5e4dad7d95c3d9e29f7689801d4c9e1a24b0.png',
    },
  ];

  // Blog cards matching Screenshot 4
  const blogCards = [
    {
      id: 1,
      title: "What is UGC and Why It's a Game Changer for Your Brand",
      date: '06/01/2025',
      image: '/366819eb0ef7787ffe5c4940e94b51beee7766a9.jpg',
    },
    {
      id: 2,
      title: 'No Tech Skills? No Problem – Coding Is Easy!',
      date: '06/01/2025',
      image: '/239e6ff45eff39b06f3b029f2dccdd64a4398837.jpg',
    },
    {
      id: 3,
      title: 'Common Mistakes Beginners Make While Learning Programming',
      date: '07/01/2025',
      image: '/bbce438de1c194693f4d63824df229311adb4660.jpg',
    },
    {
      id: 4,
      title: 'Digital Marketing: Trends to Watch Out for in 2025',
      date: '07/01/2025',
      image: '/88a28dfe4beb693fea2c6af07b613434d4cb7341.jpg',
    },
  ];

  // Batch cohorts matching Screenshot 5
  const batchCohorts = [
    { id: 1, title: 'PRODUCTION & POST PRODUCTION', date: 'SEP 15' },
    { id: 2, title: 'VFX BASIC', date: 'SEP 15' },
    { id: 3, title: 'ADVANCED DIGITAL MARKETING', date: 'SEP 15' },
    { id: 4, title: 'BASIC DIGITAL MARKETING', date: 'SEP 15' },
    { id: 5, title: 'MERN STACK DEVELOPMENT', date: 'SEP 15' },
    { id: 6, title: 'PYTHON-DJANGO DEVELOPMENT', date: 'SEP 15' },
    { id: 7, title: 'DATA SCIENCE', date: 'SEP 15' },
  ];

  // Sensible Digital Marketing FAQ items
  const faqItems = [
    {
      question: 'Who is eligible to join the Digital Marketing Course at TRON Academy?',
      answer:
        'Anyone with a passion for digital marketing—including college graduates, job seekers, working professionals looking for a career transition, and entrepreneurs. No prior technical, math, or coding degree is required.',
    },
    {
      question: 'Will I get to work on live ad budgets during the course?',
      answer:
        'Yes! Every student gets direct, practical hands-on experience running live paid ad campaigns on Meta Ads (Facebook & Instagram), Google Ads, and YouTube with genuine budgets and real-time conversion tracking.',
    },
    {
      question: 'What is the difference between Advanced and Basic Digital Marketing?',
      answer:
        'Basic Digital Marketing (3 Months) covers core fundamentals, SEO, and social media marketing. Advanced Digital Marketing (5 Months) includes deep-dive performance marketing, programmatic ad scaling, marketing automation, AI tools, client lead generation, and an assured internship.',
    },
    {
      question: 'How does the 100% placement guarantee program work?',
      answer:
        'Our dedicated career placement cell provides 1:1 resume building, portfolio creation with live campaign data, international agency interview connections across Kerala and the GCC/UAE, and guaranteed interview opportunities until you get hired.',
    },
    {
      question: 'What global certifications will I earn?',
      answer:
        'You will earn the prestigious TRON Academy Certification, along with official credentials from Google (Search, Display, Video, GA4), Meta Certified Digital Marketing Associate, and HubSpot Inbound Marketing.',
    },
    {
      question: 'Can I pay the course fee in flexible installments?',
      answer:
        'Yes, we offer multiple flexible installment plans and zero-cost EMI options to ensure financial hurdles do not prevent you from mastering high-income digital skills.',
    },
  ];

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[1200px] left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[2600px] right-1/4 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION & INTRO (Screenshot 1) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24 text-center">
        {/* Top Tag: NO. 1 DIGITAL MARKETING ACADEMY */}
        <div className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-6">
          NO. 1 DIGITAL MARKETING ACADEMY
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto mb-6">
          <span className="text-[#a855f7]">Best Digital Marketing Course</span> In Kerala
          <span className="block mt-2 font-bold">With 100% Placement Guarantee.</span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-10 px-2">
          TRON Academy Transforms Your Career with the Most Practical Digital Marketing Course. Are you
          ready to secure your career with the most job-ready digital marketing course in Kerala?
        </p>

        {/* CTA Buttons: Learn & Earn + Launch Your Career */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <button
            onClick={() => handleScrollToSection('dm-courses')}
            className="px-8 py-3 rounded-full text-sm font-bold text-white bg-[#a855f7] hover:bg-[#9333ea] shadow-lg shadow-purple-900/50 hover:scale-105 transition-all cursor-pointer"
          >
            Learn & Earn
          </button>
          <button
            onClick={() => {
              if (onOpenModal) onOpenModal();
            }}
            className="px-8 py-3 rounded-full text-sm font-semibold text-white border border-purple-500/50 hover:bg-purple-950/40 transition-all cursor-pointer"
          >
            Launch Your Career
          </button>
        </div>

        {/* 3 Metric Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-28 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">500+</div>
            <div className="text-xs font-medium text-gray-400 mt-2">Students Placed</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">100%</div>
            <div className="text-xs font-medium text-gray-400 mt-2">Placement Guarantee</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">5+</div>
            <div className="text-xs font-medium text-gray-400 mt-2">Years Experience</div>
          </div>
        </div>

        {/* Intro: Why Choose Tron Academy As Your Digital Marketing Academy In Thrissur */}
        <div className="max-w-4xl mx-auto pt-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            <span className="text-[#a855f7] block mb-1">Why Choose Tron Academy</span>
            As Your Digital Marketing Academy In Thrissur
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-4">
            TRON Academy is revolutionizing the education system concerning digital marketing in Kerala
            to such an extent as 100% placement guarantees in full-fledged job-oriented courses. Being
            the premier institute for offering digital marketing course in Thrissur and Kerala, it
            transforms the whole classroom process into real-life experiences about digital marketing.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CREATING STORIES OF THE FUTURE & OUR COURSES (Screenshot 2) */}
      {/* ========================================================================= */}
      <section id="dm-courses" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        {/* Section 2A: CREATING STORIES OF THE FUTURE */}
        <div className="mb-28">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase mb-12 text-left">
            CREATING STORIES OF THE FUTURE
          </h2>

          {/* 7 Dark Cards Grid (Row 1: 4 cards, Row 2: 3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {creatingStoriesFeatures.slice(0, 4).map((card) => (
              <div
                key={card.num}
                className="rounded-2xl bg-[#0f0a1d]/90 border border-purple-500/20 p-6 flex flex-col justify-between hover:border-purple-500/45 transition-all duration-300"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#a855f7] block mb-3">
                    {card.num}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-3">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
            {creatingStoriesFeatures.slice(4, 7).map((card) => (
              <div
                key={card.num}
                className="rounded-2xl bg-[#0f0a1d]/90 border border-purple-500/20 p-6 flex flex-col justify-between hover:border-purple-500/45 transition-all duration-300"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#a855f7] block mb-3">
                    {card.num}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-3">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2B: OUR COURSES */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold block mb-3">
            OUR COURSES
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Master Digital Marketing With The <br />
            Best Digital Marketing Course In Thrissur
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-3xl mx-auto font-normal">
            Digital marketing has a high-growth explosion in the industry with limitless opportunities.
            You can learn from TRON Academy's best digital marketing course in Thrissur to gain experience
            from live projects and real strategies to get job-ready with high-in-demand digital skills.
          </p>
        </div>

        {/* 2 Program Cards (Advanced vs Basic) matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Advanced Digital Marketing */}
          <div className="rounded-3xl bg-[#0e0a1c] border border-purple-500/30 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 group">
            <div>
              {/* Top Banner visual frame */}
              <div className="h-44 bg-gradient-to-br from-[#3b1566] via-[#1c0c33] to-[#0d0718] flex items-center justify-center p-6 text-center border-b border-purple-500/20">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Advanced Digital Marketing
                </h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-6 text-xs text-gray-400 font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>5 Months</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>Online | Offline</span>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  Advanced Digital Marketing
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Establish a Strong Foundation and develop into a strategist adept at orchestrating
                  digital success.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => {
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full py-3 rounded-xl bg-[#7e22ce] hover:bg-[#9333ea] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Know more
              </button>
            </div>
          </div>

          {/* Card 2: Basic Digital Marketing */}
          <div className="rounded-3xl bg-[#0e0a1c] border border-purple-500/30 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 group">
            <div>
              {/* Top Banner visual frame */}
              <div className="h-44 bg-gradient-to-br from-[#3b1566] via-[#1c0c33] to-[#0d0718] flex items-center justify-center p-6 text-center border-b border-purple-500/20">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Basic Digital Marketing
                </h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-6 text-xs text-gray-400 font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>3 Months</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>Online | Offline</span>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  Basic Digital Marketing
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Establish a Strong Foundation and develop into a strategist adept at orchestrating
                  digital success.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => {
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full py-3 rounded-xl bg-[#7e22ce] hover:bg-[#9333ea] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Know more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SYLLABUS & DIGITAL MARKETING OPPORTUNITIES (Screenshot 3) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        {/* Section 3A: Curriculum / Explore */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold block mb-2">
            Explore
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Our Digital Marketing Course In Kerala
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            What will you learn to be the top 1% Digital Marketer
          </p>
        </div>

        {/* Month Pills Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[1, 2, 3, 4, 5].map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeMonth === month
                  ? 'bg-[#9333ea] text-white shadow-lg shadow-purple-900/60'
                  : 'bg-[#150f24] hover:bg-[#201736] text-gray-400 hover:text-white border border-purple-500/20'
              }`}
            >
              Month {month}
            </button>
          ))}
        </div>

        {/* Syllabus Container Matching Screenshot 3 */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#100b21] border border-purple-500/30 overflow-hidden shadow-2xl mb-28">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#9333ea] flex items-center gap-3 text-white font-bold text-sm">
            <span className="w-4 h-4 rounded border-2 border-white flex items-center justify-center text-[10px]">
              ✓
            </span>
            <span>Month {activeMonth}</span>
          </div>

          {/* Module List */}
          <div className="divide-y divide-purple-950/40">
            {syllabusData[activeMonth]?.map((moduleName, idx) => (
              <div
                key={idx}
                className="px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-200 hover:bg-purple-950/20 hover:text-white transition-colors cursor-pointer group"
              >
                <span>{moduleName}</span>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 3B: Digital Marketing Opportunities */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Digital Marketing Opportunities
          </h2>
        </div>

        {/* 6 Career Opportunity Cards in 3x2 Grid matching Screenshot 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {opportunities.map((item, index) => {
            if (item.special) {
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-gradient-to-br from-[#7e22ce] to-[#581c87] p-7 flex flex-col justify-between shadow-2xl text-white border border-purple-400/40"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-black mb-3">{item.title}</h3>
                    <p className="text-xs text-purple-100 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (onOpenModal) onOpenModal();
                    }}
                    className="w-full py-2.5 mt-6 rounded-xl bg-white hover:bg-gray-100 text-purple-900 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    Know more
                  </button>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="rounded-3xl bg-[#0f0a1c] border border-purple-500/20 p-7 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY MOST COURSES FAIL & TESTIMONIALS & BLOGS (Screenshot 4) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        {/* Section 4A: Why Most Digital Marketing Courses Fail Your Career */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Why Most Digital Marketing Courses Fail Your Career{' '}
            <span className="text-[#a855f7] block sm:inline">(And How Tron Guarantees Success)</span>
          </h2>
        </div>

        {/* 2 Comparison Cards matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-28">
          {/* Left Card: The Harsh Reality for Ordinary Course Graduates */}
          <div className="rounded-3xl bg-[#100b1e] border border-purple-500/20 overflow-hidden shadow-2xl">
            <div className="px-6 py-3.5 bg-[#7e22ce]/80 text-white font-bold text-xs sm:text-[13px] text-center">
              The Harsh Reality for Ordinary Course Graduates (Only Course Certificate - No
              Internship/Portfolio)
            </div>
            <div className="p-6 space-y-4 text-xs text-gray-300 leading-relaxed font-normal">
              <div>
                <p>• Starting Salary: ₹1.8-2.5 LPA (Often unpaid internships initially)</p>
                <p>• Job Search Duration: 4-9 months average</p>
              </div>

              <div className="pt-1">
                <span className="font-bold text-white block mb-1">Rejected Because:</span>
                <p>• No practical experience (87% employers demand it)</p>
                <p>• Empty portfolio with dummy projects</p>
                <p>• No proof of handling real clients/budgets</p>
              </div>

              <div className="pt-1">
                <span className="font-bold text-white block mb-1">Career Limitations:</span>
                <p>• Stuck in assistant/executive roles for 2-3 years</p>
                <p>• Salary growth capped at 20-30% annually</p>
              </div>
            </div>
          </div>

          {/* Right Card: Tron Academy Graduate */}
          <div className="rounded-3xl bg-[#120c24] border border-purple-500/40 overflow-hidden shadow-2xl shadow-purple-950/40 ring-1 ring-purple-500/30">
            <div className="px-6 py-3.5 bg-[#9333ea] text-white font-bold text-xs sm:text-[13px] text-center">
              Tron Academy Graduate (With Real Client Experience + Portfolio + Placement Support)
            </div>
            <div className="p-6 space-y-4 text-xs text-gray-300 leading-relaxed font-normal">
              <div>
                <p>• Starting Salary: ₹3.5-6 LPA (With negotiation power)</p>
                <p>• Job Search Duration: 2-5 weeks average</p>
              </div>

              <div className="pt-1">
                <span className="font-bold text-white block mb-1">Employer Priority:</span>
                <p>• GCC certificate — interview shortlist guarantee</p>
                <p>• Real client's campaigns in portfolio</p>
                <p>• Certified hands-on experience with Meta/Google Ads</p>
              </div>

              <div className="pt-1">
                <span className="font-bold text-white block mb-1">Exclusive Opportunities:</span>
                <p>• Direct entry to mid-level roles (Skip "Fresher" tag)</p>
                <p>• Eligible for international remote jobs (30% Tron grads work for GCC/US companies)</p>
                <p>• Fast-track promotions (Average salary hike of 120% in 2 years)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4B: Testimonials */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold block mb-2">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What our learners have to say About us!
          </h2>
        </div>

        {/* Testimonial Card matching Screenshot 4 */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#110b22]/90 border border-purple-500/30 p-6 sm:p-10 shadow-2xl mb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Quote content on left */}
            <div className="md:col-span-8 text-left space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {testimonials[activeTestimonialIndex].name}
                </h3>
                <span className="text-xs text-purple-400 font-medium">
                  {testimonials[activeTestimonialIndex].role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                {testimonials[activeTestimonialIndex].quote}
              </p>
            </div>

            {/* Avatar thumbnail preview on right */}
            <div className="md:col-span-4 flex flex-col items-center justify-center gap-3">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-xl bg-purple-950/40">
                <img
                  src={testimonials[activeTestimonialIndex].image}
                  alt={testimonials[activeTestimonialIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Pagination controls: ← 01/02 → */}
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium pt-2">
                <button
                  onClick={() =>
                    setActiveTestimonialIndex((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  className="hover:text-white transition-colors cursor-pointer p-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span>
                  0{activeTestimonialIndex + 1}/0{testimonials.length}
                </span>
                <button
                  onClick={() =>
                    setActiveTestimonialIndex((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="hover:text-white transition-colors cursor-pointer p-1"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4C: Explore Our Blogs */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            <span className="text-[#a855f7]">Explore</span> Our Blogs
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Curious minds welcome!<br />
            Check out our blog for a treasure trove of ideas, stories, and insights that can inspire your learning journey.
          </p>
        </div>

        {/* 4 Blog Cards Grid matching Screenshot 4 */}
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
      {/* 5. OUR NEXT BATCH (Screenshot 5) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30 text-center">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            <span className="text-[#a855f7]">Our</span> Next Batch
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Don't miss your chance to advance — our next batch kicks off soon.<br />
            Register now!
          </p>
        </div>

        {/* 7 Batch Cards Grid matching Screenshot 5 */}
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
      {/* 6. FREQUENTLY ASKED QUESTIONS SECTION (Required by user prompt) */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-purple-950/30">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently <br />
            asked questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Everything you need to know about the Digital Marketing Career Path at TRON Academy.
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
                        ? 'rotate-180 bg-purple-600/30 border-purple-400/40 text-purple-300'
                        : 'text-gray-400'
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
    </div>
  );
}
