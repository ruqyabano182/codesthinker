import React, { useContext } from "react";

import Cards from "../Services/Cards";
import Hero from "../Services/Hero";


import { ThemeContext } from "../Context/ThemeContext";

const Services = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Hero />
      <Cards />

    </div>
  );
};

export default Services;