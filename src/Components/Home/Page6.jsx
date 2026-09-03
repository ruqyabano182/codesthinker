import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Page6 = () => {

  const { darkMode } = useContext(ThemeContext);

  const values = [
    {
      icon: "◉",
      title: "Integrity",
      description:
        "We hold ourselves to a strong ethical and moral code.",
    },
    {
      icon: "♡",
      title: "Trust",
      description:
        "We are dependable, loyal, and hardworking to achieve the same goal.",
    },
    {
      icon: "▣",
      title: "Excellence",
      description:
        "We consistently strive to deliver high-quality work without room for error.",
    },
  ];

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} py-16 px-6 transition-colors duration-300`}>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <h2 className={`text-5xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
          OUR <span className="text-blue-700">VALUE</span>
        </h2>

        <p className={`text-2xl font-semibold mt-4 ${darkMode ? "text-white" : "text-black"}`}>
          A melting pot for the best ideas
        </p>

        {/* Values */}

        <div className="mt-12 flex flex-col gap-12">

          {values.map((value, index) => (

            <div
              key={index}
              className="flex items-start gap-6"
            >

              {/* Icon */}

              <div className="w-15 h-16 bg-blue-950 rounded-2xl flex items-center justify-center">

                <span className="text-5xl text-blue-400">
                  {value.icon}
                </span>

              </div>

              {/* Content */}

              <div>

                <h3 className={`text-3xl font-medium ${darkMode ? "text-white" : "text-black"}`}>
                  {value.title}
                </h3>

                <p className={`text-xl mt-1 w-99 ${darkMode ? "text-gray-300" : "text-black"}`}>
                  {value.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Page6;