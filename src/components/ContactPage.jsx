import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { faqs } from "../data/tronData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "Coding",
    message: "",
  });

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Coding",
    "Digital Marketing",
    "Multimedia",
    "UI/UX Design",
    "Python Full Stack",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        course: "Coding",
        message: "",
      });
    }, 4000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative bg-transparent text-white min-h-screen overflow-hidden">
      {/* ===================================================== */}
      {/* BACKGROUND GLOWS */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          top-20
          sm:top-24
          left-1/2
          -translate-x-1/2
          w-[320px]
          sm:w-[500px]
          md:w-[650px]
          h-[220px]
          sm:h-[280px]
          md:h-[350px]
          bg-purple-900/10
          rounded-full
          blur-[100px]
          sm:blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[700px]
          sm:top-[800px]
          left-1/2
          -translate-x-1/2
          w-[300px]
          sm:w-[450px]
          md:w-[550px]
          h-[220px]
          sm:h-[300px]
          bg-purple-900/10
          rounded-full
          blur-[120px]
          sm:blur-[160px]
          pointer-events-none
        "
      />

      {/* ===================================================== */}
      {/* MAIN CONTAINER */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-6
          sm:pt-10
          md:pt-14
          pb-12
          sm:pb-20
        "
      >
        {/* ===================================================== */}
        {/* 1. HERO SECTION */}
        {/* ===================================================== */}

        <section
          className="
            text-center
            max-w-4xl
            mx-auto
            pt-4
            sm:pt-6
            pb-10
            sm:pb-14
            md:pb-16
          "
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              sm:px-4
              py-1
              rounded-full
              border
              border-purple-500/30
              bg-[#170e28]/70
              text-purple-300
              text-[10px]
              sm:text-xs
              font-semibold
              tracking-wider
              uppercase
              mb-6
              sm:mb-8
              shadow-sm
              shadow-purple-900/40
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-purple-400
                animate-pulse
              "
            />
            GET IN TOUCH
          </div>

          {/* Heading */}

          <h1
            className="
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              tracking-tight
              text-white
              leading-[1.08]
              sm:leading-[1.1]
              mb-5
              sm:mb-6
              px-1
            "
          >
            Have any questions?
            <span
              className="
                text-[#a855f7]
                block
                sm:inline
                sm:ml-3
              "
            >
              We're here to help.
            </span>
          </h1>

          {/* Subtitle */}

          <p
            className="
              max-w-2xl
              mx-auto
              text-xs
              sm:text-sm
              md:text-base
              text-gray-400
              font-normal
              leading-relaxed
              px-2
            "
          >
            Tell us which course you're interested in and our team will get back to you with batch
            details, fees and a free demo session.
          </p>
        </section>

        {/* ===================================================== */}
        {/* 2. CONTACT FORM */}
        {/* ===================================================== */}

        <section
          className="
            max-w-3xl
            mx-auto
            mb-20
            sm:mb-28
            md:mb-36
          "
        >
          <div
            className="
              rounded-2xl
              sm:rounded-3xl
              bg-[#0e0a17]/90
              border
              border-purple-500/20
              p-5
              sm:p-8
              md:p-12
              shadow-2xl
              shadow-purple-950/40
              backdrop-blur-sm
            "
          >
            {/* SUCCESS MESSAGE */}

            {submitted ? (
              <div className="py-10 sm:py-12 text-center">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-purple-900/60
                    border
                    border-purple-500/40
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-4
                    text-purple-300
                  "
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed px-2">
                  Thank you for reaching out. Our admissions counselor will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      block
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      tracking-wider
                      text-gray-400
                      uppercase
                      mb-2.5
                    "
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
                    className="
                      w-full
                      px-4
                      py-3
                      sm:py-3.5
                      rounded-xl
                      bg-[#090610]
                      border
                      border-purple-500/20
                      text-white
                      placeholder-gray-500
                      text-xs
                      sm:text-sm
                      focus:outline-none
                      focus:border-purple-500
                      focus:ring-1
                      focus:ring-purple-500
                      transition-all
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      block
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      tracking-wider
                      text-gray-400
                      uppercase
                      mb-2.5
                    "
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
                    className="
                      w-full
                      px-4
                      py-3
                      sm:py-3.5
                      rounded-xl
                      bg-[#090610]
                      border
                      border-purple-500/20
                      text-white
                      placeholder-gray-500
                      text-xs
                      sm:text-sm
                      focus:outline-none
                      focus:border-purple-500
                      focus:ring-1
                      focus:ring-purple-500
                      transition-all
                    "
                  />
                </div>

                {/* COURSE */}

                <div>
                  <label
                    htmlFor="course"
                    className="
                      block
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      tracking-wider
                      text-gray-400
                      uppercase
                      mb-2.5
                    "
                  >
                    WHAT COURSE ARE YOU INTERESTED IN
                  </label>

                  <div className="relative">
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="
                        w-full
                        px-4
                        py-3
                        sm:py-3.5
                        pr-10
                        rounded-xl
                        bg-[#090610]
                        border
                        border-purple-500/20
                        text-white
                        text-xs
                        sm:text-sm
                        appearance-none
                        focus:outline-none
                        focus:border-purple-500
                        focus:ring-1
                        focus:ring-purple-500
                        transition-all
                        cursor-pointer
                      "
                    >
                      {courses.map((course) => (
                        <option key={course} value={course} className="bg-[#0e0a17] text-white">
                          {course}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      className="
                        w-4
                        h-4
                        text-gray-400
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        pointer-events-none
                      "
                    />
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      block
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      tracking-wider
                      text-gray-400
                      uppercase
                      mb-2.5
                    "
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
                    className="
                      w-full
                      px-4
                      py-3
                      sm:py-3.5
                      rounded-xl
                      bg-[#090610]
                      border
                      border-purple-500/20
                      text-white
                      placeholder-gray-500
                      text-xs
                      sm:text-sm
                      focus:outline-none
                      focus:border-purple-500
                      focus:ring-1
                      focus:ring-purple-500
                      transition-all
                      resize-none
                    "
                  />
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    w-full
                    py-3.5
                    sm:py-4
                    rounded-xl
                    font-semibold
                    text-white
                    bg-[#6b21a8]
                    hover:bg-[#7e22ce]
                    border
                    border-purple-400/30
                    shadow-lg
                    shadow-purple-950/60
                    transition-all
                    hover:scale-[1.01]
                    active:scale-[0.99]
                    cursor-pointer
                    text-xs
                    sm:text-sm
                    md:text-base
                    mt-1
                  "
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ===================================================== */}
        {/* 3. FAQ SECTION */}
        {/* ===================================================== */}

        <section
          className="
            max-w-4xl
            mx-auto
            pb-10
            sm:pb-16
          "
        >
          {/* FAQ HEADER */}

          <div
            className="
              text-center
              mb-8
              sm:mb-12
              px-2
            "
          >
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                sm:px-4
                py-1
                rounded-full
                border
                border-purple-500/30
                bg-[#170e28]/70
                text-purple-300
                text-[10px]
                sm:text-xs
                font-semibold
                tracking-wider
                uppercase
                mb-5
                sm:mb-6
                shadow-sm
                shadow-purple-900/40
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-purple-400
                "
              />
              FAQ
            </div>

            {/* FAQ TITLE */}

            <h2
              className="
                text-2xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                tracking-tight
                text-white
                leading-tight
                mb-4
              "
            >
              Frequently asked questions
            </h2>

            {/* FAQ SUBTITLE */}

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                text-gray-400
                font-normal
                leading-relaxed
              "
            >
              Answers about the academy, its courses, and the enrollment process.
            </p>
          </div>

          {/* FAQ ACCORDION */}

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="
                    rounded-xl
                    sm:rounded-2xl
                    bg-[#0e0a17]/90
                    border
                    border-purple-500/20
                    overflow-hidden
                    transition-all
                    hover:border-purple-500/40
                  "
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="
                      w-full
                      px-4
                      sm:px-5
                      md:px-6
                      py-4
                      sm:py-5
                      md:py-6
                      text-left
                      flex
                      items-center
                      justify-between
                      gap-3
                      sm:gap-4
                      cursor-pointer
                    "
                  >
                    <span
                      className="
                        text-xs
                        sm:text-sm
                        md:text-base
                        font-medium
                        text-white
                        leading-relaxed
                      "
                    >
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`
                        w-4
                        h-4
                        sm:w-5
                        sm:h-5
                        text-gray-400
                        shrink-0
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-180 text-purple-400" : ""}
                      `}
                    />
                  </button>

                  {/* ANSWER */}

                  {isOpen && (
                    <div
                      className="
                        px-4
                        sm:px-5
                        md:px-6
                        pb-5
                        sm:pb-6
                        pt-1
                        text-xs
                        sm:text-sm
                        text-gray-400
                        leading-relaxed
                        border-t
                        border-purple-500/10
                      "
                    >
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
