import React, { useState, useRef, useEffect } from "react";
import { assets } from "../data/tronData";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar({ onOpenModal, currentPage = "home", onNavigate }) {
  const navLinks = ["Home", "Course", "Blog", "About"];

  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);

  const dropdownRef = useRef(null);

  const courseOptions = [
    { name: "Coding", id: "coding" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "Multimedia", id: "multimedia" },
  ];

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCourseDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCourseOpen(false);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();

    if (link === "About") {
      setCourseDropdownOpen(false);
      closeMobileMenu();

      if (onNavigate) onNavigate("about");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (link === "Home") {
      setCourseDropdownOpen(false);
      closeMobileMenu();

      if (onNavigate) onNavigate("home");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (link === "Course") {
      // Desktop dropdown
      setCourseDropdownOpen((prev) => !prev);
    } else if (link === "Blog") {
      setCourseDropdownOpen(false);
      closeMobileMenu();

      if (onNavigate) onNavigate("blog");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleMobileNavClick = (link) => {
    if (link === "Course") {
      setMobileCourseOpen((prev) => !prev);
      return;
    }

    if (link === "About") {
      closeMobileMenu();

      if (onNavigate) onNavigate("about");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (link === "Home") {
      closeMobileMenu();

      if (onNavigate) onNavigate("home");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (link === "Blog") {
      closeMobileMenu();

      if (onNavigate) onNavigate("blog");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSelectCourse = (courseId) => {
    setCourseDropdownOpen(false);
    setMobileCourseOpen(false);
    closeMobileMenu();

    if (courseId === "coding") {
      if (onNavigate) onNavigate("coding");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (courseId === "digital-marketing") {
      if (onNavigate) onNavigate("digital-marketing");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (courseId === "multimedia") {
      if (onNavigate) onNavigate("multimedia");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      if (onOpenModal) {
        onOpenModal();
      }
    }
  };

  const handleContact = () => {
    closeMobileMenu();

    if (onNavigate) {
      onNavigate("contact");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

  const isLinkActive = (link) => {
    if (currentPage === "about") {
      return link === "About";
    }

    if (
      currentPage === "blog" ||
      currentPage === "blog-ugc" ||
      currentPage === "blog-coding-easy" ||
      currentPage === "blog-common-mistakes" ||
      currentPage === "blog-digital-marketing"
    ) {
      return link === "Blog";
    }

    if (
      currentPage === "coding" ||
      currentPage === "digital-marketing" ||
      currentPage === "multimedia"
    ) {
      return link === "Course";
    }

    if (currentPage === "contact") {
      return false;
    }

    return link === "Home";
  };

  return (
    <header
      className="
        relative
        z-50
        w-full
        py-3
        sm:py-4
        px-4
        sm:px-6
        md:px-10
        lg:px-14
        mt-2
        sm:mt-3
        mb-2
      "
    >
      {/* ================================================= */}
      {/* MAIN NAVBAR */}
      {/* ================================================= */}

      <div className="flex items-center justify-between w-full">
        {/* ================= LOGO ================= */}

        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();

            closeMobileMenu();

            if (onNavigate) onNavigate("home");

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="
            flex
            items-center
            gap-1.5
            sm:gap-2
            cursor-pointer
            group
            shrink-0
          "
        >
          <img
            src={assets.logo.symbol}
            alt="Tron"
            className="
              h-9
              sm:h-12
              md:h-14
              w-auto
              object-contain
              transition-transform
              group-hover:scale-105
            "
          />

          <img
            src={assets.logo.text}
            alt="TRON ACADEMY"
            className="
              h-5
              sm:h-7
              md:h-8
              w-auto
              object-contain
              brightness-125
            "
          />
        </a>

        {/* ================================================= */}
        {/* DESKTOP NAV */}
        {/* ================================================= */}

        <nav
          className="
            hidden
            md:flex
            items-center
            px-6
            lg:px-8
            py-2.5
            rounded-full
            bg-[#181124]/80
            border
            border-[#C136F363]
            shadow-lg
            backdrop-blur-md
          "
        >
          <ul className="flex items-center space-x-6 lg:space-x-12">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              const isCourse = link === "Course";

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
                      className={`
                        text-xs
                        font-medium
                        tracking-wide
                        transition-colors
                        flex
                        items-center
                        gap-1.5
                        cursor-pointer
                        py-1
                        ${
                          active
                            ? "text-purple-300 font-semibold"
                            : "text-gray-300 hover:text-white"
                        }
                      `}
                    >
                      <span>{link}</span>

                      <ChevronDown
                        className={`
                          w-3.5
                          h-3.5
                          transition-transform
                          duration-200
                          ${courseDropdownOpen ? "rotate-180 text-purple-400" : "text-gray-400"}
                        `}
                      />
                    </button>

                    {/* Desktop Course Dropdown */}

                    {courseDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-44 animate-in fade-in duration-150 z-50">
                        <div className="rounded-xl bg-[#140e24]/95 backdrop-blur-md border border-purple-500/20 p-1.5 shadow-xl shadow-black/80">
                          {courseOptions.map((opt) => {
                            const isCurrent = currentPage === opt.id;

                            return (
                              <button
                                key={opt.id}
                                onClick={() => handleSelectCourse(opt.id)}
                                className={`
                                  w-full
                                  text-left
                                  px-3
                                  py-2
                                  rounded-lg
                                  text-xs
                                  transition-colors
                                  cursor-pointer
                                  block
                                  ${
                                    isCurrent
                                      ? "text-purple-300 bg-purple-900/40 font-semibold"
                                      : "text-gray-300 hover:text-white hover:bg-white/5 font-medium"
                                  }
                                `}
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
                    href={
                      link === "Home"
                        ? "#hero"
                        : link === "About"
                          ? "#about"
                          : `#${link.toLowerCase()}`
                    }
                    onClick={(e) => handleNavClick(e, link)}
                    className={`
                      text-xs
                      font-medium
                      tracking-wide
                      transition-colors
                      ${active ? "text-purple-300 font-semibold" : "text-gray-300 hover:text-white"}
                    `}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ================================================= */}
        {/* DESKTOP CONTACT */}
        {/* ================================================= */}

        <button
          onClick={handleContact}
          className="
            hidden
            md:block
            px-5
            sm:px-6
            py-2
            cursor-pointer
            rounded-full
            text-xs
            font-semibold
            text-white
            bg-[#6b21a8]
            hover:bg-[#7e22ce]
            border
            border-purple-400/30
            shadow-sm
            shadow-purple-950
            transition-all
            hover:scale-105
            shrink-0
          "
        >
          Contact Us
        </button>

        {/* ================================================= */}
        {/* MOBILE HAMBURGER */}
        {/* ================================================= */}

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="
            md:hidden
            flex
            items-center
            justify-center
            w-10
            h-10
            sm:w-11
            sm:h-11
            rounded-full
            bg-[#181124]/90
            border
            border-purple-500/30
            text-white
            hover:bg-[#241735]
            transition-all
            shrink-0
          "
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      {mobileMenuOpen && (
        <div
          className="
            md:hidden
            absolute
            top-full
            left-3
            right-3
            sm:left-5
            sm:right-5
            mt-2
            rounded-2xl
            bg-[#140e24]/98
            backdrop-blur-xl
            border
            border-purple-500/20
            shadow-2xl
            shadow-black/70
            overflow-hidden
            animate-in
            fade-in
            slide-in-from-top-2
            duration-200
          "
        >
          {/* MOBILE LINKS */}

          <div className="p-3">
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              if (link === "Course") {
                return (
                  <div key={link}>
                    {/* Course Button */}

                    <button
                      onClick={() => handleMobileNavClick(link)}
                      className={`
                        w-full
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3
                        rounded-xl
                        text-sm
                        font-medium
                        transition-all
                        ${
                          active
                            ? "text-purple-300 bg-purple-900/30"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <span>Course</span>

                      <ChevronDown
                        className={`
                          w-4
                          h-4
                          transition-transform
                          duration-200
                          ${mobileCourseOpen ? "rotate-180 text-purple-400" : "text-gray-400"}
                        `}
                      />
                    </button>

                    {/* COURSE OPTIONS */}

                    {mobileCourseOpen && (
                      <div className="ml-3 mt-1 mb-1 pl-3 border-l border-purple-500/20">
                        {courseOptions.map((opt) => {
                          const isCurrent = currentPage === opt.id;

                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectCourse(opt.id)}
                              className={`
                                w-full
                                text-left
                                px-4
                                py-2.5
                                rounded-lg
                                text-xs
                                transition-colors
                                ${
                                  isCurrent
                                    ? "text-purple-300 bg-purple-900/30 font-semibold"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }
                              `}
                            >
                              {opt.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link}
                  onClick={() => handleMobileNavClick(link)}
                  className={`
                    w-full
                    text-left
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    ${
                      active
                        ? "text-purple-300 bg-purple-900/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {link}
                </button>
              );
            })}

            {/* MOBILE CONTACT */}

            <div className="border-t border-purple-500/10 mt-2 pt-3">
              <button
                onClick={handleContact}
                className="
                  w-full
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-semibold
                  text-white
                  bg-[#6b21a8]
                  hover:bg-[#7e22ce]
                  border
                  border-purple-400/30
                  shadow-sm
                  shadow-purple-950
                  transition-all
                "
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
