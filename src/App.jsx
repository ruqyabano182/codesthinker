import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Team from "./Components/Pages/Team";
import Services from "./Components/Pages/Services";
import GetIn from "./Components/Contact/getin";
import Pro1 from "./Components/Projects/pro1";
import Pro2 from "./Components/Projects/pro2";
import Pro3 from "./Components/Projects/pro3";
import Pro4 from "./Components/Projects/pro4";
import Pro5 from "./Components/Projects/pro5";





import { ThemeContext } from "./Components/Context/ThemeContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
    
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <Navbar navLinks={navLinks} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
       <Route
  path="/projects"
  element={
    <>
      {/* <Pro1 /> */}
      {/* <Pro2 /> */}
      {/* <Pro3 /> */}
      {/* <Pro4 /> */}
      {/* <Pro5 /> */}



    </>
  }
/>

       <Route path="/team" element={<Team />} />
       <Route path="/contact" element={<GetIn />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;