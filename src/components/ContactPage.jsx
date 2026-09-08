import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { faqs } from '../data/tronData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'Coding',
    message: ''
  });

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    'Coding',
    'Digital Marketing',
    'Multimedia',
    'UI/UX Design',
    'Python Full Stack'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        course: 'Coding',
        message: ''
      });
    }, 4000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative bg-transparent text-white min-h-screen overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Screenshot 1) */}
        {/* ========================================================================= */}
        <section className="text-center max-w-4xl mx-auto pt-6 pb-12">
          {/* Badge: GET IN TOUCH */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/30 bg-[#170e28]/70 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm shadow-purple-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            GET IN TOUCH
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Have any questions?
            <span className="text-[#a855f7] block sm:inline sm:ml-3">
              We're here to help.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
            Tell us which course you're interested in and our team will get back to you with
            batch details, fees and a free demo session.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 2. CONTACT FORM CARD (Screenshot 1) */}
        {/* ========================================================================= */}
        <section className="max-w-3xl mx-auto mb-28 sm:mb-36">
          <div className="rounded-3xl bg-[#0e0a17]/90 border border-purple-500/20 p-6 sm:p-12 shadow-2xl shadow-purple-950/40 backdrop-blur-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center mx-auto mb-4 text-purple-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-400">
                  Thank you for reaching out. Our admissions counselor will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                {/* Field: Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2.5"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090610] border border-purple-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Field: Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2.5"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090610] border border-purple-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Field: What course are you interested in */}
                <div>
                  <label
                    htmlFor="course"
                    className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2.5"
                  >
                    WHAT COURSE ARE YOU INTERESTED IN
                  </label>
                  <div className="relative">
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090610] border border-purple-500/20 text-white text-sm appearance-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all cursor-pointer pr-10"
                    >
                      {courses.map((course) => (
                        <option key={course} value={course} className="bg-[#0e0a17] text-white">
                          {course}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Field: Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2.5"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you'd like to know"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090610] border border-purple-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white bg-[#6b21a8] hover:bg-[#7e22ce] border border-purple-400/30 shadow-lg shadow-purple-950/60 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-sm sm:text-base mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FREQUENTLY ASKED QUESTIONS SECTION (Screenshot 2) */}
        {/* ========================================================================= */}
        <section className="max-w-4xl mx-auto pb-16">
          <div className="text-center mb-12">
            {/* Badge: FAQ */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-purple-500/30 bg-[#170e28]/70 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-purple-900/40">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              FAQ
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Frequently asked questions
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-400 font-normal">
              Answers about the academy, its courses, and the enrollment process.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0e0a17]/90 border border-purple-500/20 overflow-hidden transition-all hover:border-purple-500/40"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-medium text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-purple-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-purple-500/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
