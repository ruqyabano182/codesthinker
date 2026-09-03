import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-[#09054b]"
      }`}
    >
      <div
        className="
          max-w-[1700px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          py-2
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <div>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src="/src/assets/image.webp"
              className="
                w-32
                sm:w-40
                md:w-48
                h-auto
              "
            />
          </Link>
        </div>


        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-10">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-lg xl:text-xl font-semibold transition duration-300 ${
                location.pathname === link.path
                  ? "text-blue-500"
                  : "text-white hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}


          {/* Login */}
          <button
            className="
              border
              border-white
              rounded-full
              px-6
              xl:px-10
              py-2
              xl:py-3
              text-lg
              xl:text-xl
              hover:bg-white
              hover:text-black
              transition
              duration-300
            "
          >
            Login
          </button>


          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="text-2xl hover:scale-110 transition duration-300"
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            text-3xl
            sm:text-4xl
            flex-shrink-0
          "
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`
            lg:hidden
            px-5
            sm:px-8
            pb-6
            pt-2
            flex
            flex-col
            gap-4
            ${
              darkMode
                ? "bg-gray-900"
                : "bg-[#09054b]"
            }
          `}
        >

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`
                text-base
                sm:text-lg
                ${
                  location.pathname === link.path
                    ? "text-blue-500"
                    : "text-white hover:text-blue-500"
                }
              `}
            >
              {link.name}
            </Link>
          ))}


          {/* Login */}
          <button
            className="
              border
              border-white
              rounded-full
              px-6
              py-2
              w-fit
              text-base
              sm:text-lg
            "
          >
            Login
          </button>


          {/* Mobile Theme Button */}
          <button
            onClick={toggleTheme}
            className="
              text-xl
              sm:text-2xl
              w-fit
              hover:scale-110
              transition
              duration-300
            "
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;