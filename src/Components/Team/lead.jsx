import React, { useContext } from "react";

import Waseem from "../../assets/waseem.jpg";
import Saim from "../../assets/b2.jpg";
import Malaika from "../../assets/g1.jpg";

import { ThemeContext } from "../Context/ThemeContext";

const Lead = () => {
  const { darkMode } = useContext(ThemeContext);

  const leaders = [
    {
      image: Waseem,
      name: "Waseem M.",
      position: "CEO",
    },
    {
      image: Saim,
      name: "Saim",
      position: "Director/UK",
    },
    {
      image: Malaika,
      name: "Malaika Noor",
      position: "Business Developer",
    },
  ];

  return (
    <section
      className={`w-full px-6 py-10 md:px-10 lg:px-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-8">
          <span className={darkMode ? "text-white" : "text-black"}>
            Global{" "}
          </span>

          <span className="text-[#1515b8]">
            Leadership
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative h-[300px] overflow-hidden rounded-2xl shadow-lg"
            >

              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/60
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
              ></div>

              {/* Name and position */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  bg-black/60
                  text-white
                  text-center
                  py-2
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500
                "
              >
                <h3 className="text-2xl md:text-md font-semibold">
                  {leader.name}
                </h3>

                <p className="text-lg md:text-md mt-2">
                  {leader.position}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Lead;