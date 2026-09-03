import React, { useContext } from "react";
import {
  FaLightbulb,
  FaUsers,
  FaNetworkWired,
  FaStopwatch,
} from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";

const Page2 = () => {
  const { darkMode } = useContext(ThemeContext);

  const features = [
    {
      icon: <FaLightbulb />,
      title: "Custom Web Experiences",
    },
    {
      icon: <FaUsers />,
      title: "Innovative UI/UX Design",
    },
    {
      icon: <FaNetworkWired />,
      title: "Scalable Tech Solutions",
    },
    {
      icon: <FaStopwatch />,
      title: "24/7 Support & Maintenance",
    },
  ];

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} py-8 transition-colors duration-300`}>

      {/* Blue Section */}
      <div className={`${darkMode ? "bg-gray-800" : "bg-sky-50"} py-10 px-6 rounded-none`}>

        {/* Heading */}
        <h2 className="text-center text-blue-800 text-3xl md:text-4xl font-bold mb-8 animate-fadeUp">
          What Makes Us Stand Out?
        </h2>

        {/* Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className={`group ${
                darkMode ? "bg-gray-700" : "bg-white"
              } h-60 rounded-3xl flex flex-col items-center pt-7 shadow-lg transition duration-300 hover:bg-blue-800`}
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl ">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className={`${darkMode ? "text-white" : "text-black"} text-lg font-semibold text-center leading-snug mt-5 px-5 group-hover:text-white transition duration-300`}>
                {feature.title}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Page2;