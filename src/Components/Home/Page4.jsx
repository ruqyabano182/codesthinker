import React, { useState, useContext } from "react";
import serviceImage from "../../assets/side.png";
import { ThemeContext } from "../Context/ThemeContext";

const Page4 = () => {
  const [activeService, setActiveService] = useState("Development");

  const { darkMode } = useContext(ThemeContext);

  const services = {
    Development: [
      "Custom Development",
      "Web App Development",
      "Mobile App Development",
      "Blockchain Dev",
      "Crypto Token Dev",
      "Wordpress Dev",
    ],

    Management: [
      "Community Management",
      "Social Media Management",
      "Social Media Moderation",
    ],

    Marketing: [
      "SEO (On-Page)",
      "SEO (Off-Page)",
      "Influencer Marketing",
      "Content Marketing",
      "Content Marketing",
      "Email Campaigns",
    ],

    "Graphics & Visuals": [
      "Logo Design",
      "Stationary Design",
      "Social Media Design",
      "UI/UX Design",
      "Web Design",
    ],

    "Video Editing": [
      "Motion Graphics",
      "Youtube Video",
      "Brand Video",
      "Podcast Video",
      "Documentary",
    ],

    "Content Writing": [
      "Web Content Writing",
      "Product Description",
      "White Paper Content",
      "Blog Writing",
      "Case Studies",
    ],
  };

  const buttons = [
    "Development",
    "Management",
    "Marketing",
    "Graphics & Visuals",
    "Video Editing",
    "Content Writing",
  ];

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} py-12 px-6 transition-colors duration-300`}>

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">

        <h2 className={`text-5xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
          <span className="text-blue-700">Services</span> We Offer
        </h2>

        <p className={`text-xl mt-6 leading-snug max-w-xl mx-auto text-center ${darkMode ? "text-white" : "text-black"}`}>
          Codes Thinker offers crypto solutions, targeted marketing,
          impactful design, custom development, and professional video
          editing to elevate your brand.
        </p>

      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Buttons */}
        <div className="flex flex-col gap-4">

          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setActiveService(button)}
              className={`w-60 rounded-full border-2 px-6 py-3 text-xl font-semibold transition duration-300 mx-auto text-center font-bold
              
              ${
                activeService === button
                  ? "bg-blue-700 text-white border-blue-700"
                  : darkMode
                  ? "bg-gray-800 text-white border-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700"
                  : "bg-white text-black border-gray-200 hover:bg-blue-700 hover:text-white hover:border-blue-700"
              }`}
            >
              {button}
            </button>
          ))}

        </div>

        {/* Right Side */}
        <div>

          {/* Image */}
          <img
            src={serviceImage}
            alt="Services"
            className="w-full h-96 object-cover rounded-3xl"
          />

          {/* Services List */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-5">

            {services[activeService].map((item, index) => (
              <p
                key={index}
                className={`text-lg font-semibold ${darkMode ? "text-white" : "text-black"}`}
              >
                {item}
              </p>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Page4;