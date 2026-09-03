import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Vision3 = () => {

  const { darkMode } = useContext(ThemeContext);

  const points = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
    "Collaborative Approach Throughout the Process",
  ];

  return (
    <section
      className={`w-full overflow-hidden ${
        darkMode ? "bg-[#111827]" : "bg-white"
      } px-6 py-10 sm:px-10 lg:px-16`}
    >

      <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative mx-auto w-full max-w-[870px]">

          {/* Main Image */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-md sm:h-[420px] lg:h-[380px]">

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
              alt="Our team"
              className="h-full w-full object-cover"
            />

            {/* White Circle Icon */}
            <div className="absolute left-0 top-3 flex h-[145px] w-[145px] items-center justify-center rounded-full bg-white sm:h-[110px] sm:w-[110px]">

              <div className="flex h-[70px] w-[70px] items-center justify-center text-[#100eae]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-14 w-14"
                >
                  <path d="M12 2 4 5v5c0 5.05 3.41 9.78 8 11 4.59-1.22 8-5.95 8-11V5l-8-3Zm0 3.18L17.5 7v3c0 3.65-2.29 7.07-5.5 8.28C8.79 17.07 6.5 13.65 6.5 10V7L12 5.18Z" />
                </svg>

              </div>
            </div>
          </div>

          {/* Small Overlay Image */}
          <div className="absolute bottom-[62px] right-[-10px] h-[160px] w-[250px] overflow-hidden sm:right-[-20px] sm:h-[180px] sm:w-[290px] lg:right-[-25px] lg:h-[160px] lg:w-[240px]">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
              alt="Developer working"
              className="h-full w-full object-cover"
            />

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-[500px]">

          {/* Small Heading */}
          <p
            className={`mb-3 text-center text-[15px] font-medium lg:text-left ${
              darkMode ? "text-gray-200" : "text-black"
            }`}
          >
            WHO <span className="font-bold text-[#100eae]">WE</span> ARE
          </p>

          {/* Main Heading */}
          <h2
            className={`text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-left lg:text-[34px] ${
              darkMode ? "text-white" : "text-[#111827]"
            }`}
          >
            YOUR{" "}
            <span className="text-[#100eae]">VISION</span>{" "}
            YOUR CODE
          </h2>

          {/* Description */}
          <p
            className={`mt-2 text-center text-[14px] leading-[1.5] sm:text-[17px] lg:text-left ${
              darkMode ? "text-gray-200" : "text-[#111827]"
            }`}
          >
            At Codes Thinker, we are a passionate team of developers,
            designers, and strategists dedicated to building smart, scalable,
            and user-focused digital solutions. We thrive on creativity, and
            cutting-edge technology to transform ideas into impactful
            products. With a commitment to quality, transparency, and client
            satisfaction, we don't just deliver code — we deliver value. Every
            project we take on reflects our belief in innovation, precision,
            and long-term partnerships.
          </p>

          {/* Points */}
          <div className="mt-2 flex flex-col gap-3">

            {points.map((point, index) => (
              <div
                key={index}
                className="flex h-[30px] w-fit min-w-[360px] items-center rounded-full bg-white px-7 shadow-[0_8px_10px_rgba(0,0,0,0.12)] sm:min-w-[200px]"
              >

                {/* Arrow */}
                <span className="mr-3 text-[28px] leading-none text-black">
                  →
                </span>

                {/* Text */}
                <span className="text-[18px] font-medium text-[#111] sm:text-[17px]">
                  {point}
                </span>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Vision3;