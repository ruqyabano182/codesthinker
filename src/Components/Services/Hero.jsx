import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import heroImage from "../../assets/ser.webp";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen w-full flex items-center justify-between px-6 md:px-10 lg:px-12  py-20 pt-45 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[65%]">

        {/* Heading */}
        <h1 className="text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[60px] font-bold leading-[0.98] tracking-[-3px] mb-9">
          Perfect It{" "}
          <span className="text-[#1800c9]">
            Solutions
          </span>
          <br />
          Business
        </h1>

        {/* Paragraph */}
        <p
          className={`max-w-[1120px] text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.3] mb-10 ${
            darkMode ? "text-gray-300" : "text-black"
          }`}
        >
          Perfect IT Solutions provides expert services in software
          development, IT consulting, cloud solutions, network security,
          data management, technical support, web design, and system
          integration to empower business growth and efficiency.
        </p>

        {/* Button */}
        <button className="bg-[#13008f] hover:bg-[#1e00c9] text-white text-lg md:text-xl font-bold px-11 py-5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1">
          Contact Us
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden lg:flex w-[35%] items-center justify-center">
        <img
          src={heroImage}
          alt="Perfect IT Solutions"
          className="w-full max-w-[650px] h-auto object-contain"
        />
      </div>

    </section>
  );
};

export default Hero;