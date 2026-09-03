import React, { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";
import websiteImage from "../../assets/website.jpg";
import appImage from "../../assets/app.jpg";
import devopsImage from "../../assets/devops&clouds.jpg";
import machineImage from "../../assets/machinelearning.jpg";
import blockchainImage from "../../assets/blockchain.jpg";
import websitehostingImage from "../../assets/websitehosting.jpg";
import wordpressImage from "../../assets/wordpressdevelopment.jpg";
import seoImage from "../../assets/seo 1.jpg";
import uiuxImage from "../../assets/uiux.jpg";
import graphicImage from "../../assets/graphic.jpg";
import videoeditingsImage from "../../assets/videoeditings.jpg";
import codecallingImage from "../../assets/codecalling.jpg";
import digitalImage from "../../assets/digital.jpg";
import leadgenerationImage from "../../assets/leadgeneration.jpg";
const cardsData = [
    {
        id: 1,
        title: "Website Development",
        description:
            "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
        image: websiteImage,
    },
    {
        id: 2,
        title: "App Development",
        description:
            "High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.",
        image: appImage,
    },
    {
        id: 3,
        title: "DevOps & Cloud",
        description:
            "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
        image: devopsImage,
    },
    {
        id: 4,
        title: "Machine Learning",
        description:
            "Leverage AI and machine learning to automate processes, analyze data, and improve decision-making.",
        image: machineImage,
    },
    {
        id: 5,
        title: "Blockchain",
        description:
            "Secure and transparent blockchain solutions for smart contracts, decentralized apps, and more.",
        image: blockchainImage,
    },
    {
        id: 6,
        title: "Website Hosting",
        description:
            "Reliable and secure web hosting services with high uptime and technical support to keep your site running smoothly.",
        image: websitehostingImage,
    },
    {
        id: 7,
        title: "WordPress Development",
        description:
            "Custom WordPress websites with modern themes, powerful plugins, and SEO optimization.",
        image: wordpressImage,
    },
    {
        id: 8,
        title: "SEO Optimization",
        description:
            "Improve your website’s ranking and visibility with proven SEO techniques and strategies.",
        image: seoImage,
    },
    {
        id: 9,
        title: "UI/UX",
        description:
            "Design interfaces that are beautiful, user-friendly, and focused on conversion and engagement.",
        image: uiuxImage,
    },
    {
        id: 10,
        title: "Graphic Designing",
        description:
            "Eye-catching graphics that represent your brand identity and convey your message effectively.",
        image: graphicImage,
    },
    {
        id: 11,
        title: "Video Editing",
        description:
            "Professional video editing for marketing, branding, tutorials, and more.",
        image: videoeditingsImage,
    },
    {
        id: 12,
        title: "Code Calling",
        description:
            "Real-time expert coding assistance and live debugging for quick issue resolution.",
        image: codecallingImage,
    },
    {
        id: 13,
        title: "Digital Marketing",
        description:
            "Boost your online presence through targeted campaigns and multichannel marketing strategies.",
        image: digitalImage,
    },
    {
        id: 14,
        title: "Lead Generation",
        description:
            "Generate high-quality leads with targeted campaigns and data-driven marketing strategies.",
        image: leadgenerationImage,
    },
];

const Cards = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            className={`w-full px-6 py-12 md:px-10 lg:px-12 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"
                }`}
        >
            {/* Heading */}
            <div className="mb-10 text-center">
                <h2
                    className={`text-4xl font-extrabold md:text-5xl ${darkMode ? "text-white" : "text-[#080808]"
                        }`}
                >
                    Latest
                    <span className="text-[#1800c9]">
                        Solutions
                    </span>
                </h2>


            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                {cardsData.map((service) => (
                    <div
                        key={service.id}
                        className={`
              group
              flex
              min-h-[500px]
              flex-col
              overflow-hidden
              rounded-2xl
              border-t-[5px]
              border-b-[5px]
              border-[#1800c9]
              transition-all
              duration-300
              ease-in-out
              hover:-translate-y-3
              hover:shadow-[0_18px_35px_rgba(0,0,0,0.20)]
              ${darkMode
                                ? "bg-gray-800 text-white shadow-gray-950"
                                : "bg-white text-black shadow-sm"
                            }
            `}
                    >

                        {/* Image */}
                        <div className="h-[250px] w-full overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col px-7 py-6">

                            <h3
                                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-[#173557]"
                                    }`}
                            >
                                {service.title}
                            </h3>

                            <p
                                className={`mt-3 text-[18px] leading-[1.55] ${darkMode ? "text-gray-300" : "text-[#3d5b78]"
                                    }`}
                            >
                                {service.description}
                            </p>

                            {/* Button */}
                            <div className="mt-auto flex justify-center pt-6">
                                <button
                                    className="
                    rounded-full
                    bg-[#13008f]
                    px-10
                    py-3.5
                    text-lg
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-[#1d00c9]
                    hover:shadow-xl
                  "
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Cards;