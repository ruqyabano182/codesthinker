import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Teaminfo = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`w-full px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-30 pb-8 sm:pb-10 md:px-10 lg:px-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">

          <span className={darkMode ? "text-white" : "text-black"}>
            Meet Our{" "}
          </span>

          <span className="text-[#1515b8]">
            Team
          </span>

        </h1>


        <p
          className={`mt-4 px-2 sm:px-4 md:px-0 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed ${
            darkMode ? "text-gray-300" : "text-black"
          }`}
        >
          Our team of passionate and experienced professionals is dedicated
          to driving your success. From strategy to execution, we combine
          creativity, innovation, and insight to deliver exceptional results.
        </p>

      </div>

    </section>
  );
};

export default Teaminfo;