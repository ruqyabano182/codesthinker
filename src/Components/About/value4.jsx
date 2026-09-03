import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Value4 = () => {

  const { darkMode } = useContext(ThemeContext);

  const values = [
    {
      title: "Integrity",
      description:
        "We hold ourselves to a strong ethical and moral code.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1.5"
          className="h-14 w-14"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bfff" />
              <stop offset="100%" stopColor="#a000ff" />
            </linearGradient>
          </defs>

          <path d="M12 21c-4.5-2.5-7.5-6.5-7.5-11V5.5L12 3l7.5 2.5V10c0 4.5-3 8.5-7.5 11Z" />
          <path d="M8 13c1-3 2-4.5 4-6 2 1.5 3 3 4 6-1.5-.8-2.5-1.2-4-1.2S9.5 12.2 8 13Z" />
        </svg>
      ),
    },
    {
      title: "Trust",
      description:
        "We are dependable, loyal, and hardworking to achieve the same goal.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          className="h-14 w-14"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bfff" />
              <stop offset="100%" stopColor="#a000ff" />
            </linearGradient>
          </defs>

          <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
          <path d="m8.5 12 2.2 2.2L16 9" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We consistently strive to deliver high-quality work without room for error.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="1.5"
          className="h-14 w-14"
        >
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bfff" />
              <stop offset="100%" stopColor="#a000ff" />
            </linearGradient>
          </defs>

          <circle cx="8" cy="16" r="4" />
          <path d="M12 12V5h7v7h-7Z" />
          <path d="M8 12V4" />
          <path d="M5 4h6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className={`w-full overflow-hidden ${
        darkMode ? "bg-[#111827]" : "bg-white"
      } px-6 py-10 sm:px-10 lg:px-8`}
    >

      <div className="mx-auto grid max-w-[1800px] items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full">

          {/* Main Heading */}
          <h2
            className={`text-[52px] font-bold leading-none sm:text-[48px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            OUR{" "}
            <span className="text-[#100eae]">
              VALUE
            </span>
          </h2>

          {/* Blue Line */}
          <div className="mt-4 h-[6px] w-[135px] rounded-full bg-[#100eae]" />

          {/* Sub Heading */}
          <h3
            className={`mt-4 max-w-[500px] text-[38px] font-semibold leading-[1.2] sm:text-[35px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            A melting pot for the best ideas
          </h3>

          {/* Values */}
          <div className="mt-9 flex flex-col gap-8">

            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-7"
              >

                {/* Icon Box */}
                <div className="flex h-[75px] w-[75px] shrink-0 items-center justify-center rounded-[8px] bg-[#0b0055]">
                  {value.icon}
                </div>

                {/* Text */}
                <div className="pt-0">

                  <h4
                    className={`text-[30px] font-bold leading-tight ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {value.title}
                  </h4>

                  <p
                    className={`mt-2 max-w-[700px] text-[18px] leading-[1] ${
                      darkMode ? "text-gray-200" : "text-black"
                    }`}
                  >
                    {value.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex w-full -translate-y-6 items-centre justify-center">

          <div className="relative max-w-[690px] overflow-hidden rounded-[28px] border-[3px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.35)]">

            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Our values"
              className="h-[450px] w-[450px] object-cover sm:h-[500px] lg:h-[300px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Value4;