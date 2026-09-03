import React, { useState, useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

const Footer = () => {
  const [email, setEmail] = useState("");

  const { darkMode } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section
      className={`text-white px-5 sm:px-8 md:px-16 py-10 md:py-12 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-[#080052]"
      }`}
    >

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* COLUMN 1 */}
        <div>

          {/* Logo */}
          <img
            src="/src/assets/image.webp"
            alt="Codes Thinker"
            className="w-40 sm:w-48 md:w-52 mb-8"
          />

          <p className="leading-relaxed max-w-md">
            We offer a range of cutting-edge web development
            and software solutions tailored to meet client needs.
            Our experienced team delivers collaboratively and efficiently.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 mt-8">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-2xl hover:bg-blue-500 transition duration-300"
            >
              f
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-2xl hover:bg-blue-500 transition duration-300"
            >
              𝕏
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-2xl hover:bg-blue-500 transition duration-300"
            >
              ◎
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-xl font-bold hover:bg-blue-500 transition duration-300"
            >
              in
            </a>

          </div>

        </div>


        {/* COLUMN 2 - SERVICES */}
        <div>

          <h2 className="text-2xl font-bold mb-7">
            Services
          </h2>

          <ul className="space-y-2">

            <li className="hover:text-blue-400 cursor-pointer">
              Business Intelligence
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Virtual Workstation
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Network Services
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Data Science
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              IT Strategy
            </li>

          </ul>

        </div>


        {/* COLUMN 3 - COMPANY */}
        <div>

          <h2 className="text-2xl font-bold mb-7">
            Company
          </h2>

          <ul className="space-y-2">

            <li className="hover:text-blue-400 cursor-pointer">
              About Us
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Latest Projects
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              IT Solutions
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Team Members
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Contact Us
            </li>

          </ul>

        </div>


        {/* COLUMN 4 - CONTACT */}
        <div>

          <h2 className="text-2xl font-bold mb-7">
            Contact Info
          </h2>


          {/* Phone */}
          <div className="flex items-center gap-4 sm:gap-5 mb-2">

            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
              ☎
            </div>

            <p className="break-all">
              +44 7470 103120
            </p>

          </div>


          {/* Email */}
          <div className="flex items-center gap-4 sm:gap-5 mb-7">

            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-xl shrink-0">
              ✉
            </div>

            <p className="break-all">
              info@codesthinker.com
            </p>

          </div>


          {/* Address 1 */}
          <div className="flex gap-4 sm:gap-5 mb-7">

            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-xl shrink-0">
              📍
            </div>

            <p className="leading-relaxed">
              Bartle House 9 Oxford Court,
              Manchester M23WQ United Kingdom
              (Regional Office)
            </p>

          </div>


          {/* Address 2 */}
          <div className="flex gap-4 sm:gap-5">

            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-xl shrink-0">
              📍
            </div>

            <p className="leading-relaxed">
              Hassan Manzil Basement
              Goheer Town Bahawalpur
              (Global Delivery Center)
            </p>

          </div>

        </div>

      </div>


      {/* Newsletter */}
      <div className="w-full max-w-xl mx-auto lg:ml-auto lg:mr-0 mt-10">

        <form
          onSubmit={handleSubmit}
          className="flex w-full"
        >

          <input
            type="email"
            placeholder="Your Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              min-w-0
              flex-1
              px-5
              sm:px-8
              py-4
              text-base
              sm:text-lg
              text-gray-700
              bg-white
              h-11
              rounded-l-lg
              outline-none
            "
          />

          <button
            type="submit"
            className="
              bg-blue-700
              px-5
              sm:px-8
              md:px-10
              py-2
              text-base
              sm:text-lg
              font-semibold
              h-11
              rounded-r-lg
              hover:bg-blue-600
              transition
              duration-300
              flex-shrink-0
            "
          >
            Submit
          </button>

        </form>

      </div>


      {/* Line */}
      <div className="max-w-7xl mx-auto border-t border-gray-500 mt-8 pt-6">

        <p className="text-center text-sm">
          © 2024–All Rights Reserved–Code’s Thinker
        </p>

      </div>

    </section>
  );
};

export default Footer;