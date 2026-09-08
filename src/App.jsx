import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Placements from './components/Placements';
import Moments from './components/Moments';
import WhyTron from './components/WhyTron';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Ecosystem from './components/Ecosystem';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CodingCoursePage from './components/CodingCoursePage';
import DigitalMarketingPage from './components/DigitalMarketingPage';
import MultimediaPage from './components/MultimediaPage';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import BlogCodingEasyPage from './components/BlogCodingEasyPage';
import BlogCommonMistakesPage from './components/BlogCommonMistakesPage';
import BlogDigitalMarketingPage from './components/BlogDigitalMarketingPage';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    if (window.location.hash === '#contact') return 'contact';
    if (window.location.hash === '#about') return 'about';
    if (window.location.hash === '#coding' || window.location.hash === '#course-coding') return 'coding';
    if (window.location.hash === '#digital-marketing') return 'digital-marketing';
    if (window.location.hash === '#multimedia') return 'multimedia';
    if (window.location.hash === '#blog-ugc' || window.location.hash === '#blog/ugc') return 'blog-ugc';
    if (window.location.hash === '#blog-coding-easy' || window.location.hash === '#blog/coding-easy') return 'blog-coding-easy';
    if (window.location.hash === '#blog-common-mistakes' || window.location.hash === '#blog/common-mistakes') return 'blog-common-mistakes';
    if (window.location.hash === '#blog-digital-marketing' || window.location.hash === '#blog/digital-marketing') return 'blog-digital-marketing';
    if (window.location.hash === '#blog' || window.location.hash === '#blogs') return 'blog';
    return 'home';
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setCurrentPage('contact');
      } else if (window.location.hash === '#about') {
        setCurrentPage('about');
      } else if (window.location.hash === '#coding' || window.location.hash === '#course-coding') {
        setCurrentPage('coding');
      } else if (window.location.hash === '#digital-marketing') {
        setCurrentPage('digital-marketing');
      } else if (window.location.hash === '#multimedia') {
        setCurrentPage('multimedia');
      } else if (window.location.hash === '#blog-ugc' || window.location.hash === '#blog/ugc') {
        setCurrentPage('blog-ugc');
      } else if (window.location.hash === '#blog-coding-easy' || window.location.hash === '#blog/coding-easy') {
        setCurrentPage('blog-coding-easy');
      } else if (window.location.hash === '#blog-common-mistakes' || window.location.hash === '#blog/common-mistakes') {
        setCurrentPage('blog-common-mistakes');
      } else if (window.location.hash === '#blog-digital-marketing' || window.location.hash === '#blog/digital-marketing') {
        setCurrentPage('blog-digital-marketing');
      } else if (window.location.hash === '#blog' || window.location.hash === '#blogs') {
        setCurrentPage('blog');
      } else if (window.location.hash === '#hero' || window.location.hash === '' || window.location.hash === '#home') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = 'about';
    } else if (page === 'contact') {
      window.location.hash = 'contact';
    } else if (page === 'coding') {
      window.location.hash = 'coding';
    } else if (page === 'digital-marketing') {
      window.location.hash = 'digital-marketing';
    } else if (page === 'multimedia') {
      window.location.hash = 'multimedia';
    } else if (page === 'blog-ugc') {
      window.location.hash = 'blog-ugc';
    } else if (page === 'blog-coding-easy') {
      window.location.hash = 'blog-coding-easy';
    } else if (page === 'blog-common-mistakes') {
      window.location.hash = 'blog-common-mistakes';
    } else if (page === 'blog-digital-marketing') {
      window.location.hash = 'blog-digital-marketing';
    } else if (page === 'blog') {
      window.location.hash = 'blog';
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div className="min-h-screen text-white selection:bg-purple-600 selection:text-white relative bg-black bg-cyber-grid-purple">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenModal={handleOpenModal}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {currentPage === 'about' ? (
        /* About Page Flow Matching Screenshots */
        <main>
          <AboutPage onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'contact' ? (
        /* Contact Us Page Flow Matching Screenshots */
        <main>
          <ContactPage />
        </main>
      ) : currentPage === 'coding' ? (
        /* Coding Course Page Flow */
        <main>
          <CodingCoursePage onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'digital-marketing' ? (
        /* Digital Marketing Course Page Flow */
        <main>
          <DigitalMarketingPage onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'multimedia' ? (
        /* Multimedia Course Page Flow Matching Screenshots + Extra Sections */
        <main>
          <MultimediaPage onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'blog-ugc' ? (
        /* Dedicated Blog Detail Page: What is UGC and Why It's a Game Changer for Your Brand */
        <main>
          <BlogDetailPage onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'blog-coding-easy' ? (
        /* Dedicated Blog Detail Page: No Tech Skills? No Problem – Coding Is Easy! */
        <main>
          <BlogCodingEasyPage onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'blog-common-mistakes' ? (
        /* Dedicated Blog Detail Page: Common Mistakes Beginners Make While Learning Programming */
        <main>
          <BlogCommonMistakesPage onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'blog-digital-marketing' ? (
        /* Dedicated Blog Detail Page: Digital Marketing: Trends to Watch Out for in 2025 */
        <main>
          <BlogDigitalMarketingPage onNavigate={handleNavigate} />
        </main>
      ) : currentPage === 'blog' ? (
        /* Blog Page Flow Matching Reference Screenshots */
        <main>
          <BlogPage onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
        </main>
      ) : (
        /* Main Home Page Flow Matching Figma Screenshots */
        <main>
          {/* 1. Hero Section (Screenshot 1) */}
          <Hero onOpenModal={handleOpenModal} />

          {/* 2. Key Stats & Partner Marquee (Screenshot 1 & 2) */}
          <Stats />

          {/* 3. Trending Courses (Screenshot 2) */}
          <Courses onOpenModal={handleOpenModal} />

          {/* 4. Placement Success Stories (Screenshot 2) */}
          <Placements />

          {/* 5. Video Moments Reel (Screenshot 3) */}
          <Moments />

          {/* 6. Why TRON Academy (Screenshot 3) */}
          <WhyTron />

          {/* 7. 5-Stage Career Roadmap (Screenshot 3 & 4) */}
          <Roadmap />

          {/* 8. Meet the Founders & Expert Instructors (Screenshot 4) */}
          <Team />

          {/* 9. Tron Ecosystem Brands (Screenshot 4 & 5) */}
          <Ecosystem />

          {/* 10. Events & Celebrations Photo Gallery (Screenshot 5) */}
          <Events />

          {/* 11. What Industry Experts Say (Screenshot 5 bottom) */}
          <Testimonials />

          {/* 12. Frequently Asked Questions */}
          <FAQ onOpenModal={handleOpenModal} />

          {/* 13. Pre-Footer "Find your passion" CTA */}
          <CTA onOpenModal={handleOpenModal} />
        </main>
      )}

      {/* 14. Global Footer */}
      <Footer
        onOpenModal={handleOpenModal}
        onNavigate={handleNavigate}
      />

      {/* Interactive Consultation / Inquiry Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
