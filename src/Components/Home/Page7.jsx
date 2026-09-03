import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Page7 = () => {

  const { darkMode } = useContext(ThemeContext);

  const progress = [
    {
      number: "4+",
      text: "Years of Experience",
    },
    {
      number: "50+",
      text: "Satisfied Clients",
    },
    {
      number: "17+",
      text: "Countries We Operate",
    },
    {
      number: "$200K+",
      text: "Managed Marketing Fund",
    },
    {
      number: "$2.9M+",
      text: "Clients Gain",
    },
  ];

  return (
    <section className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} py-16 px-6 transition-colors duration-300`}>

      {/* Heading */}

      <h2 className={`text-5xl font-bold text-center ${darkMode ? "text-white" : "text-black"}`}>
        Our <span className="text-blue-700">Progress</span>
      </h2>

      {/* Paragraph */}

      <p className={`text-2xl text-center max-w-3xl mx-auto mt-8 leading-snug ${
        darkMode ? "text-gray-300" : "text-gray-800"
      }`}>
        TOJO GLOBAL connects your business directly to your target audience,
        eliminating the need to search for clients. With us, they'll find
        their way to you.
      </p>

      {/* Cards */}

      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">

        {progress.map((item, index) => (

          <div
            key={index}
            className="bg-blue-800 text-white rounded-2xl px-2 py-8 text-center border-2 border-white shadow-md transition duration-300 active:translate-y-2"
          >

            <h3 className="text-4xl font-bold">
              {item.number}
            </h3>

            <p className="text-lg mt-5 leading-snug">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Page7;