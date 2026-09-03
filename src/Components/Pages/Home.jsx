import React, { useContext } from "react";
import Page1 from "../Home/Page1";
import Page2 from "../Home/Page2";
import Page3 from "../Home/Page3";
import Page4 from "../Home/Page4";
import Page5 from "../Home/Page5";
import Page6 from "../Home/Page6";
import Page7 from "../Home/Page7";
import Page8 from "../Home/Page8";
import Page9 from "../Home/Page9";
import Page10 from "../Home/Page10";

import { ThemeContext } from "../Context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
    </div>
  );
};

export default Home;