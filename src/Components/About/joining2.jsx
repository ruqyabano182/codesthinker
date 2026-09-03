import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Joining2 = () => {

  const { darkMode } = useContext(ThemeContext);

  const steps = [
    {
      number: "1-",
      title: "Submit Application",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
    },
    {
      number: "2-",
      title: "Expert Evaluation",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
    },
    {
      number: "3-",
      title: "Personal Interview",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
    },
    {
      number: "4-",
      title: "Seamless Onboarding",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section
      className={`w-full ${
        darkMode ? "bg-[#111827]" : "bg-white"
      } px-4 py-12 sm:px-6 md:px-8 lg:px-12`}
    >

      <h2 className="mb-16 text-center text-3xl font-bold text-[#100eae] lg:text-[40px]">
        Your Path to Joining Code's Thinker
      </h2>

      <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-2">

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center text-center md:w-1/4"
          >

            <div className="group h-[240px] w-[240px] overflow-hidden rounded-full border-[3px] border-solid border-black hover:border-dotted lg:h-[170px] lg:w-[170px]">

              <img
                src={step.image}
                alt={step.title}
                className="h-full w-full rounded-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-94"
              />

            </div>

            <h3
              className={`mt-2 whitespace-nowrap text-l font-bold lg:text-[22px] ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {step.number} {step.title}
            </h3>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Joining2;