import React, { useContext } from "react";
import about2Image from "../../assets/about2.jpg";
import { ThemeContext } from "../Context/ThemeContext";

const Build1 = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen ${
        darkMode ? "bg-[#111827]" : "bg-[#eaf6ff]"
      } pt-28 pb-10 px-6 md:px-12 lg:px-14`}
    >

      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="max-w-[370px]">

          <h1
            className={`text-4xl md:text-4xl lg:text-[35px] font-bold leading-[1.15] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Building{" "}
            <span className="text-[#1000b8]">
              Future-Ready
            </span>
            <br />
            <span className="text-[#1000b8]">
              Software
            </span>
          </h1>

          <p
            className={`mt-7 text-l leading-[1.5] ${
              darkMode ? "text-gray-200" : "text-black"
            }`}
          >
            We are a team of passionate developers, designers, and thinkers
            building scalable solutions for tomorrow. At [Codes Thinker], we
            don’t just build software — we craft scalable, intelligent
            solutions that drive real-world impact. Our team of developers,
            designers, and strategists work together to deliver innovative
            digital products tailored for tomorrow’s challenges. Rooted in
            collaboration, quality, and forward thinking, we’re committed to
            helping businesses grow through technology.
          </p>

        </div>

        {/* Right Side */}
        <div>
          <img
            src={about2Image}
            alt="Software"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

      </div>

    </section>
  );
};

export default Build1;