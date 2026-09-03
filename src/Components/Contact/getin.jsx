import React, { useContext } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

import { ThemeContext } from "../Context/ThemeContext";

const GetIn = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`w-full py-16 md:py-40 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >

      {/* ================= HEADING ================= */}
      <div className="text-center mb-16 md:mb-20">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">

          <span className={darkMode ? "text-white" : "text-black"}>
            Get In{" "}
          </span>

          <span className="text-[#1710b8]">
            Touch
          </span>

        </h1>

      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-25">

          {/* ================= LEFT SIDE ================= */}
          <div className="lg:pl-14">

            <h2
              className={`text-3xl md:text-4xl font-bold leading-tight max-w-[500px] ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Ready To Turn Your Vision
              <br />
              Into Reality?
            </h2>


            <p
              className={`text-6l md:text-5l leading-6 mt-4 max-w-[550px] ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Want to blast your business off like a rocket? Tojo Global's
              got a secret weapon for you: an amazing custom Marketing,
              Management, Design, Development & Crypto listing plan which
              will turn heads and grow your business faster than ever.
            </p>


            {/* ================= PHONE ================= */}
            <div className="flex items-center gap-5 mt-12">

              <div
                className="
                  w-13 h-13
                  bg-[#1710b8]
                  text-white
                  flex items-center justify-center
                  rotate-[80deg]
                  shrink-0
                "
              >
                <FaPhone className="text-2xl rotate-[-8deg]" />
              </div>

              <p
                className={`text-md font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                +44 7470 103120
              </p>

            </div>


            {/* ================= EMAIL ================= */}
            <div className="flex items-center gap-5 mt-7">

              <div
                className="
                  w-13 h-13
                  bg-[#1710b8]
                  text-white
                  flex items-center justify-center
                  rotate-[-8deg]
                  shrink-0
                "
              >
                <FaEnvelope className="text-2xl rotate-[-6deg]" />
              </div>

              <p
                className={`text-md font-bold break-all ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                info@codesthinker.com
              </p>

            </div>


            {/* ================= LOCATION 1 ================= */}
            <div className="flex items-start gap-5 mt-7">

              <div
                className="
                  w-13 h-13
                  bg-[#1710b8]
                  text-white
                  flex items-center justify-center
                  rotate-[-8deg]
                  shrink-0
                "
              >
                <FaMapMarkerAlt className="text-2xl rotate-[8deg]" />
              </div>

              <p
                className={`text-md font-bold leading-7 pt-1 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Bartle House 9 Oxford Court, Manchester M23WQ United
                Kingdom (Regional Office)
              </p>

            </div>


            {/* ================= LOCATION 2 ================= */}
            <div className="flex items-start gap-5 mt-7">

              <div
                className="
                  w-13 h-13
                  bg-[#1710b8]
                  text-white
                  flex items-center justify-center
                  rotate-[-8deg]
                  shrink-0
                "
              >
                <FaMapMarkerAlt className="text-2xl rotate-[8deg]" />
              </div>

              <p
                className={`text-md font-bold leading-7 pt-1 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Hassan Manzil Basement Goheer Town Bahawalpur
                (Global Delivery Center)
              </p>

            </div>


            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex items-center gap-5 mt-12">

              {/* Facebook */}
              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  bg-[#08085c]
                  border-2 border-purple-500
                  text-white
                  flex items-center justify-center
                  hover:scale-110
                  hover:bg-white
                  hover:text-black
                  transition duration-300
                "
              >
                <FaFacebookF className="text-xl" />
              </a>


              {/* Twitter */}
              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  bg-[#08085c]
                  border-2 border-purple-500
                  text-white
                  flex items-center justify-center
                  hover:scale-110
                  hover:bg-white
                  hover:text-black
                  transition duration-300
                "
              >
                <FaTwitter className="text-xl" />
              </a>


              {/* Instagram */}
              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  bg-[#08085c]
                  border-2 border-purple-500
                  text-white
                  flex items-center justify-center
                  hover:scale-110
                  hover:bg-white
                  hover:text-black
                  transition duration-300
                "
              >
                <FaInstagram className="text-xl" />
              </a>


              {/* LinkedIn */}
              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  bg-[#08085c]
                  border-2 border-purple-500
                  text-white
                  flex items-center justify-center
                  hover:scale-110
                  hover:bg-white
                  hover:text-black
                  transition duration-300
                "
              >
                <FaLinkedinIn className="text-xl" />
              </a>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="mt-7">

            <h2
              className={`text-2xl md:text-2xl font-bold mb-5 px-25 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Book a Free Consultation
            </h2>


            <form>

              {/* Full Name */}
              <div className="mb-3">

                <label
                  className={`block text-md font-bold mb-3 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Full Name"
                  className={`
                    w-[500px]
                    h-10
                    border
                    rounded-xl
                    px-5
                    text-md
                    outline-none
                    focus:border-[#1710b8]
                    focus:ring-2
                    focus:ring-[#1710b8]/20
                    transition
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-700 text-gray-700"
                    }
                  `}
                />

              </div>


              {/* Email */}
              <div className="mb-3">

                <label
                  className={`block text-md font-bold mb-3 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Work Email *
                </label>

                <input
                  type="email"
                  placeholder="Working Email"
                  className={`
                    w-[500px]
                    h-10
                    border
                    rounded-xl
                    px-5
                    text-md
                    outline-none
                    focus:border-[#1710b8]
                    focus:ring-2
                    focus:ring-[#1710b8]/20
                    transition
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-700 text-gray-700"
                    }
                  `}
                />

              </div>


              {/* Subject */}
              <div className="mb-3">

                <label
                  className={`block text-md font-bold mb-3 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter your Subject"
                  className={`
                    w-[500px]
                    h-10
                    border
                    rounded-xl
                    px-5
                    text-md
                    outline-none
                    focus:border-[#1710b8]
                    focus:ring-2
                    focus:ring-[#1710b8]/20
                    transition
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-700 text-gray-700"
                    }
                  `}
                />

              </div>


              {/* Message */}
              <div className="mb-3">

                <label
                  className={`block text-md font-bold mb-3 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Describe your message here"
                  className={`
                    w-[500px]
                    border
                    rounded-xl
                    px-5
                    py-2
                    text-md
                    outline-none
                    resize-none
                    focus:border-[#1710b8]
                    focus:ring-2
                    focus:ring-[#1710b8]/20
                    transition
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-700 text-gray-700"
                    }
                  `}
                ></textarea>

              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="
                  flex
                  items-center
                  gap-4
                  bg-[#1710b8]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  text-lg
                  font-bold
                  hover:bg-[#0e087d]
                  hover:scale-105
                  transition
                  duration-300
                  shadow-lg
                "
              >
                SUBMIT

                <FaPaperPlane className="text-lg" />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GetIn;