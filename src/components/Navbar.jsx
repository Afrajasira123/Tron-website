import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../data/tronData';
import { ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenModal, currentPage = 'home', onNavigate }) {
  const navLinks = ['Home', 'Course', 'Blog', 'About'];
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const courseOptions = [
    { name: 'Coding', id: 'coding' },
    { name: 'Digital Marketing', id: 'digital-marketing' },
    { name: 'Multimedia', id: 'multimedia' },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCourseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (link === 'About') {
      setCourseDropdownOpen(false);
      if (onNavigate) onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Home') {
      setCourseDropdownOpen(false);
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Course') {
      setCourseDropdownOpen((prev) => !prev);
    } else if (link === 'Blog') {
      setCourseDropdownOpen(false);
      if (onNavigate) onNavigate('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCourse = (courseId) => {
    setCourseDropdownOpen(false);
    if (courseId === 'coding') {
      if (onNavigate) onNavigate('coding');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (courseId === 'digital-marketing') {
      if (onNavigate) onNavigate('digital-marketing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (courseId === 'multimedia') {
      if (onNavigate) onNavigate('multimedia');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (onOpenModal) {
        onOpenModal();
      }
    }
  };

  const isLinkActive = (link) => {
    if (currentPage === 'about') {
      return link === 'About';
    }
    if (
      currentPage === 'blog' ||
      currentPage === 'blog-ugc' ||
      currentPage === 'blog-coding-easy' ||
      currentPage === 'blog-common-mistakes' ||
      currentPage === 'blog-digital-marketing'
    ) {
      return link === 'Blog';
    }
    if (
      currentPage === 'coding' ||
      currentPage === 'digital-marketing' ||
      currentPage === 'multimedia'
    ) {
      return link === 'Course';
    }
    if (currentPage === 'contact') {
      return false;
    }
    return link === 'Home';
  };

  return (
    <header className="left-0 right-0 py-4 px-4 sm:px-10 md:px-14 mt-3 mb-2 flex items-center justify-between relative z-50">
      {/* Brand Logo matching Figma */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          if (onNavigate) onNavigate('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <img
          src={assets.logo.symbol}
          alt="Tron"
          className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
        />
        <img
          src={assets.logo.text}
          alt="TRON ACADEMY"
          className="h-7 sm:h-8 w-auto object-contain brightness-125"
        />
      </a>

      {/* Center Capsule Nav (Desktop) */}
      <nav className="hidden md:flex items-center px-8 lg:px-10 py-2.5 rounded-full bg-[#181124]/80 border border-[#C136F363] shadow-lg backdrop-blur-md">
        <ul className="flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            const isCourse = link === 'Course';

            if (isCourse) {
              return (
                <li
                  key={link}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setCourseDropdownOpen(true)}
                  onMouseLeave={() => setCourseDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-xs font-medium tracking-wide transition-colors flex items-center gap-1.5 cursor-pointer py-1 ${
                      active ? 'text-purple-300 font-semibold' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{link}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        courseDropdownOpen ? 'rotate-180 text-purple-400' : 'text-gray-400'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu - Simple, Clean & Minimal */}
                  {courseDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-44 animate-in fade-in duration-150 z-50">
                      <div className="rounded-xl bg-[#140e24]/95 backdrop-blur-md border border-purple-500/20 p-1.5 shadow-xl shadow-black/80">
                        {courseOptions.map((opt) => {
                          const isCurrent = currentPage === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectCourse(opt.id)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer block ${
                                isCurrent
                                  ? 'text-purple-300 bg-purple-900/40 font-semibold'
                                  : 'text-gray-300 hover:text-white hover:bg-white/5 font-medium'
                              }`}
                            >
                              {opt.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={link}>
                <a
                  href={link === 'Home' ? '#hero' : link === 'About' ? '#about' : `#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-xs font-medium tracking-wide transition-colors ${
                    active ? 'text-purple-300 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right Button: Contact Us */}
      <button
        onClick={() => {
          if (onNavigate) {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (onOpenModal) {
            onOpenModal();
          }
        }}
        className="px-5 sm:px-6 py-2 cursor-pointer rounded-full text-xs font-semibold text-white bg-[#6b21a8] hover:bg-[#7e22ce] border border-purple-400/30 shadow-sm shadow-purple-950 transition-all hover:scale-105"
      >
        Contact Us
      </button>
    </header>
  );
}
