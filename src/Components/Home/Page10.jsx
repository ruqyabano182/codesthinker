import React, { useState, useContext } from "react";
import faqImage from "../../assets/girl.png";
import { ThemeContext } from "../Context/ThemeContext";

const Page10 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { darkMode } = useContext(ThemeContext);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web development, data science solutions, WordPress customization, and UI/UX design tailored to client needs.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Project duration depends on the requirements, features, and complexity. We discuss the timeline with every client before starting.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes, we provide post-launch support and maintenance to make sure your website continues to work smoothly.",
    },
    {
      question: "Can I get a custom design for my brand?",
      answer:
        "Yes, we create custom designs according to your brand identity, requirements, and target audience.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Simply contact us and share your project requirements. Our team will discuss your idea and guide you through the next steps.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } py-10 sm:py-12 transition-colors duration-300`}
    >

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 px-5">

        <p
          className={`${
            darkMode ? "text-gray-300" : "text-gray-700"
          } text-base sm:text-lg mb-1`}
        >
          Have You Any Question
        </p>

        <h2
          className={`text-3xl sm:text-4xl font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <span className="text-blue-700">Frequently</span>{" "}
          Asked Questions
        </h2>

      </div>


      {/* Main Content */}
      <div
        className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-6
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-45
          items-start
        "
      >

        {/* FAQ LEFT SIDE */}
        <div className="w-full lg:w-[120%] space-y-4">

          {faqs.map((faq, index) => (
            <div key={index}>

              {/* Question */}
              <button
                onClick={() => handleClick(index)}
                className={`w-full flex items-center justify-between text-left px-4 sm:px-6 py-4 sm:py-5 rounded-lg shadow-sm transition-all duration-300 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                } ${
                  activeIndex === index
                    ? "rounded-b-none"
                    : ""
                }`}
              >

                <span
                  className={`text-base sm:text-xl font-bold pr-4 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>

                <span
                  className={`text-2xl sm:text-3xl font-normal flex-shrink-0 transition-transform duration-300 ${
                    darkMode ? "text-white" : "text-gray-800"
                  } ${
                    activeIndex === index
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  ⌄
                </span>

              </button>


              {/* Answer */}
              {activeIndex === index && (
                <div
                  className={`border-l-4 border-blue-700 px-5 sm:px-7 py-4 sm:py-5 rounded-b-lg ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >

                  <p
                    className={`text-base sm:text-lg leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>


        {/* IMAGE RIGHT SIDE */}
        <div className="w-full flex justify-center lg:justify-start">

          <img
            src={faqImage}
            alt="Frequently Asked Questions"
            className="
              w-full
              max-w-[440px]
              h-auto
              sm:h-[440px]
              rounded-lg
              object-cover
            "
          />

        </div>

      </div>

    </section>
  );
};

export default Page10;