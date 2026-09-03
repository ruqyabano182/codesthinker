import React, { useContext } from "react";
import heroImage from "../../assets/image2.jpeg";
import { ThemeContext } from "../Context/ThemeContext";

const Page3 = () => {
  const { darkMode } = useContext(ThemeContext);

  const points = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
    "Collaborative Approach Throughout the Process",
  ];

  return (
    <section className={`${darkMode ? "bg-gray-800" : "bg-sky-50"} py-10 px-6 transition-colors duration-300`}>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="max-w-md mx-auto">

          <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${darkMode ? "text-white" : "text-black"}`}>
            About <span className="text-blue-700">Code's</span>
            <br />
            Thinker
          </h2>

          <p className={`text-lg mt-4 leading-snug ${darkMode ? "text-white" : "text-black"}`}>
            We redefine excellence in business solution at Code's
            Thinker...
          </p>

          <div className="mt-5 space-y-3">

            {points.map((point, index) => (
              <div
                key={index}
                className={`${darkMode ? "bg-gray-700" : "bg-sky-50"} rounded-full px-4 py-2 flex items-center shadow-md w-fit`}
              >
                <span className="w-4 h-4 rounded-full bg-blue-600 mr-4 shrink-0"></span>

                <p className={`text-base leading-snug ${darkMode ? "text-white" : "text-black"}`}>
                  {point}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="Codes Thinker Team"
            className="w-96 h-112 object-cover rounded-xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
};

export default Page3;