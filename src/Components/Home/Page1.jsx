import React, { useContext } from "react";
import backgroundImage from "../../assets/background.webp";
import { ThemeContext } from "../Context/ThemeContext";

const Page1 = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center bg-cover bg-top ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 max-w-5xl mx-auto translate-y-16">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Welcome to{" "}
          <span className="text-blue-500">
            Codes Thinker
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
          We craft smart, user friendly digital solutions that
          <br className="hidden md:block" />
          help business Innovate and grow
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

          {/* View Our Work */}
          <button
            className="
              bg-blue-600
              text-white
              font-semibold
              text-lg
              px-7
              py-4
              rounded-full
              transition-all
              duration-300
              hover:scale-95
              hover:bg-blue-700
            "
          >
            View Our Work
          </button>

          {/* Contact Us */}
          <button
            className="
              border-2
              border-white
              text-white
              font-semibold
              text-lg
              px-8
              py-4
              rounded-full
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Contact Us
          </button>

        </div>
      </div>
    </section>
  );
};

export default Page1;