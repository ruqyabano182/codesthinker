// import React, { useState, useContext } from "react";
// import { FaWhatsapp } from "react-icons/fa";

// import { ThemeContext } from "../Context/ThemeContext";

// import akoyaMain from "../../assets/projects/akoya-main.png";
// import akoya1 from "../../assets/projects/akoya-1.png";
// import akoya2 from "../../assets/projects/akoya-2.png";
// import akoya3 from "../../assets/projects/akoya-3.png";
// import akoya4 from "../../assets/projects/akoya-4.png";

// const projects = [
//   {
//     id: 1,
//     title: "Akoya Deluxe Cleaning",
//     category: "Website Development",
//     description:
//       "User-friendly, modern design showcasing top resources for managing overtime.",
//     mainImage: akoyaMain,
//     thumbnails: [akoya1, akoya2, akoya3, akoya4],
//   },
// ];

// const categories = [
//   "All",
//   "Website Development",
//   "UI/UX",
//   "App",
//   "WordPress",
//   "SEO",
// ];

// const Pro1 = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const { darkMode } = useContext(ThemeContext);

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter(
//           (project) => project.category === activeCategory
//         );

//   return (
//     <section
//       className={`min-h-screen pt-12 pb-0 transition-colors duration-300 ${
//         darkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >

//       {/* ================= HEADING ================= */}
//       <div className="text-center px-5 py-2">

//         <h1
//           className={`text-[44px] md:text-[30px] font-bold leading-tight mt-15 ${
//             darkMode ? "text-white" : "text-black"
//           }`}
//         >
//           Project Section
//         </h1>

//         <p
//           className={`mt-4 text-[20px] md:text-[17px] font-semibold ${
//             darkMode ? "text-gray-300" : "text-black"
//           }`}
//         >
//           Explore a range of projects we’ve worked on across web, mobile, and design.
//         </p>

//       </div>


//       {/* ================= CATEGORY BUTTONS ================= */}
//       <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 mt-2 px-5">

//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`
//               px-4
//               py-3
//               rounded-lg
//               text-[17px]
//               font-bold
//               transition-all
//               duration-300
//               ${
//                 activeCategory === category
//                   ? "bg-[#12007a] text-white"
//                   : darkMode
//                     ? "bg-transparent text-gray-200 hover:text-blue-400"
//                     : "bg-transparent text-black hover:text-[#12007a]"
//               }
//             `}
//           >
//             {category}
//           </button>
//         ))}

//       </div>


//       {/* ================= PROJECTS ================= */}
//       <div className="max-w-[1100px] mx-auto px-7 md:px-8 mt-6">

//         {filteredProjects.map((project) => (

//           <div
//             key={project.id}
//             className={`
//               h-[300px]
//               grid
//               grid-cols-1
//               lg:grid-cols-[1fr_0.95fr]
//               rounded-3xl
//               overflow-hidden
//               mb-10
//               transition-colors
//               duration-300
//               ${
//                 darkMode
//                   ? "bg-gray-800 shadow-[0_2px_20px_rgba(0,0,0,0.30)]"
//                   : "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
//               }
//             `}
//           >

//             {/* ================= LEFT IMAGE ================= */}
//             <div className="h-[300px] overflow-hidden">

//               <img
//                 src={project.mainImage}
//                 alt={project.title}
//                 className="
//                   w-[540px]
//                   h-full
//                 "
//               />

//             </div>


//             {/* ================= RIGHT CONTENT ================= */}
//             <div
//               className={`
//                 w-[540px]
//                 px-2
//                 md:px-4
//                 py-2
//                 flex
//                 flex-col
//                 justify-center
//               `}
//             >

//               <h2
//                 className={`text-[28px] md:text-[20px] font-bold ${
//                   darkMode ? "text-white" : "text-black"
//                 }`}
//               >
//                 {project.title}
//               </h2>


//               <p
//                 className={`mt-2 text-[15px] leading-[1.5] ${
//                   darkMode ? "text-gray-300" : "text-[#596579]"
//                 }`}
//               >
//                 {project.description}
//               </p>


//               {/* ================= THUMBNAILS ================= */}
//               <div className="flex items-center gap-3 mt-5 overflow-hidden">

//                 {project.thumbnails.map((image, index) => (

//                   <div
//                     key={index}
//                     className="
//                       w-[100px]
//                       h-[100px]
//                       flex-shrink-0
//                       rounded-md
//                       overflow-hidden
//                       bg-gray-100
//                       border-2
//                       border-transparent
//                       hover:border-[#12007a]
//                       transition-all
//                       duration-300
//                     "
//                   >

//                     <img
//                       src={image}
//                       alt={`${project.title} ${index + 1}`}
//                       className="
//                         w-full
//                         h-full
//                         object-cover
//                       "
//                     />

//                   </div>

//                 ))}

//               </div>


//               {/* ================= VIEW PROJECT ================= */}
//               <div className="mt-4">

//                 <button
//                   className="
//                     bg-[#12007a]
//                     hover:bg-[#0b005c]
//                     text-white
//                     text-[18px]
//                     font-bold
//                     px-4
//                     py-3
//                     rounded-full
//                     shadow-lg
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                   "
//                 >
//                   View Project
//                 </button>

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// };

// export default Pro1;