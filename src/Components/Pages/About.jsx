import React, { useContext } from "react";

import Build1 from "../About/build1";
import Joining2 from "../About/joining2";
// import Clients5 from "../About/clients5";
import Vision3 from "../About/vision3";
import Value4 from "../About/value4";

// import Last from "../About/last";

import { ThemeContext } from "../Context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Build1 />
      <Joining2 />
      {/* <Clients5 /> */}
      <Vision3 />
      <Value4 />

      {/* <Last /> */}
    </div>
  );
};

export default About;