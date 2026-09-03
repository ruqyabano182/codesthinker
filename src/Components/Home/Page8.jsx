import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Page8 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const { darkMode } = useContext(ThemeContext);

  const reviews = [
    {
      name: "Muhammad Waseem",
      role: "Customer",
      text: "Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly recommended for web solutions.",
    },
    {
      name: "BMX Adventure",
      role: "Customer",
      text: "BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerful impact!",
    },
  ];

  // Auto slide
  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="bg-[#080052] py-16 px-6">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-center">

          <h2 className="text-white text-4xl md:text-4xl font-semibold leading-tight">
            Our <span className="text-yellow-400">Clients,</span>
            <br />
            In Their Own Words
          </h2>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-78px lg:w-3/3">

          {/* SLIDER */}
          <div className="overflow-hidden rounded-xl">

            <div
              className={`flex transition-transform duration-700 ${
                activeSlide === 0
                  ? "translate-x-0"
                  : "-translate-x-full"
              }`}
            >

              {reviews.map((review, index) => (

                <div
                  key={index}
                  className={`min-w-full rounded-xl p-8 ${
                    darkMode ? "bg-gray-800" : "bg-[#100875]"
                  }`}
                >

                  {/* RATING */}
                  <div className="flex items-center gap-3 mb-6">

                    <span className="text-white text-4xl font-semibold">
                      5.0
                    </span>

                    <div className="flex gap-1">

                      <span className="text-yellow-400 text-3xl">★</span>
                      <span className="text-yellow-400 text-3xl">★</span>
                      <span className="text-yellow-400 text-3xl">★</span>
                      <span className="text-yellow-400 text-3xl">★</span>
                      <span className="text-yellow-400 text-3xl">★</span>

                    </div>

                  </div>

                  {/* CUSTOMER */}
                  <div className="flex items-center gap-6 mb-6">

                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">

                      <span className="text-4xl">
                        👤
                      </span>

                    </div>

                    <div>

                      <h3 className="text-white text-2xl font-semibold">
                        {review.name}
                      </h3>

                      <p className="text-white text-lg">
                        {review.role}
                      </p>

                    </div>

                  </div>

                  {/* REVIEW TEXT */}
                  <p className="text-white text-xl leading-relaxed">
                    {review.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* TWO TABS */}
          <div className="flex justify-center gap-3 mt-6">

            <button
              onClick={() => setActiveSlide(0)}
              className={`w-4 h-4 rounded-full ${
                activeSlide === 0
                  ? "bg-yellow-400"
                  : "bg-white"
              }`}
            ></button>

            <button
              onClick={() => setActiveSlide(1)}
              className={`w-4 h-4 rounded-full ${
                activeSlide === 1
                  ? "bg-yellow-400"
                  : "bg-white"
              }`}
            ></button>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-8">

            <button
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Add Your Reviews
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Page8;