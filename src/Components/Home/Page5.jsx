import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Page5 = () => {

  const { darkMode } = useContext(ThemeContext);

  const features = [
    {
      icon: "₿",
      title: "Blockchain Expertise",
    },
    {
      icon: "💼",
      title: "Small Business Support",
    },
    {
      icon: "🔒",
      title: "Crypto Solutions",
    },
    {
      icon: "🚀",
      title: "Startup Business",
    },
    {
      icon: "⇄",
      title: "B2B Integration",
    },
    {
      icon: "💡",
      title: "Fintech Innovation",
    },
  ];

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} py-12 px-6 transition-colors duration-300`}>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Center Circle */}

        <div className={`w-80 h-80 rounded-full border border-black flex items-center justify-center ${
          darkMode ? "bg-gray-800 border-white" : "bg-gray-100"
        } shadow-xl transition duration-300 hover:bg-blue-700`}>

          <h2 className={`text-4xl font-bold text-center ${darkMode ? "text-white" : "text-black"}`}>
            KEY
            <br />
            FEATURES
          </h2>

        </div>

        {/* Features */}

        <div className="flex flex-col gap-4 w-100 max-w-xl">

          {features.map((feature, index) => (

            <div
              key={index}
              className={`group ${
                darkMode ? "bg-gray-800 border-white" : "bg-white border-black"
              } border-2 rounded-full px-7 py-3 flex items-center gap-8 shadow-md transition duration-300 hover:bg-blue-700 hover:text-white hover:border-blue-700 ${
                index % 2 === 0 ? "md:ml-0" : "md:ml-10"
              }`}
            >

              <span className="text-2xl group-hover:text-white">
                {feature.icon}
              </span>

              <p className={`text-xl font-semibold group-hover:text-white ${
                darkMode ? "text-white" : "text-black"
              }`}>
                {feature.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Page5;