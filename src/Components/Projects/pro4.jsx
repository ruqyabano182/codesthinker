// import React, { useContext } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { ThemeContext } from "../Context/ThemeContext";

// // ================= IMAGES =================
// import novMain from "../../assets/projects/nov-main.png";
// import nov1 from "../../assets/projects/nov-1.png";
// import nov2 from "../../assets/projects/nov-2.png";
// import nov3 from "../../assets/projects/nov-3.png";
// import nov4 from "../../assets/projects/nov-4.png";

// const Pro4 = () => {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <section
//       className={`pb-0 transition-colors duration-500 ${
//         darkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >
//       <div className="max-w-[1100px] mx-auto px-7 md:px-8 mt-6">

//         <div
//           className={`
//             h-[300px]
//             grid
//             grid-cols-1
//             lg:grid-cols-[1fr_0.95fr]
//             rounded-3xl
//             overflow-hidden
//             mb-10
//             transition-all
//             duration-500
//             ${
//               darkMode
//                 ? "bg-gray-800 shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
//                 : "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
//             }
//           `}
//         >

//           {/* ================= LEFT IMAGE ================= */}
//           <div className="h-[300px] overflow-hidden">
//             <img
//               src={novMain}
//               alt="Tamakon Comprehensive School"
//               className="w-[540px] h-full object-cover"
//             />
//           </div>

//           {/* ================= RIGHT CONTENT ================= */}
//           <div className="w-[540px] px-2 md:px-4 py-2 flex flex-col justify-center">

//             <h2
//               className={`text-[28px] md:text-[20px] font-bold transition-colors duration-500 ${
//                 darkMode ? "text-white" : "text-black"
//               }`}
//             >
//               Tamakon Comprehensive School
//             </h2>

//             <p
//               className={`mt-2 text-[15px] leading-[1.5] transition-colors duration-500 ${
//                 darkMode ? "text-gray-300" : "text-[#596579]"
//               }`}
//             >
//               Tamakon School offers specialized education and
//               rehabilitation for students with diverse abilities across
//               all academic levels.
//             </p>

//             {/* ================= THUMBNAILS ================= */}
//             <div className="flex items-center gap-3 mt-5 overflow-hidden">

//               {/* IMAGE 1 */}
//               <div
//                 className="
//                   w-[100px]
//                   h-[100px]
//                   flex-shrink-0
//                   rounded-md
//                   overflow-hidden
//                   bg-gray-100
//                   border-2
//                   border-transparent
//                   hover:border-[#12007a]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <img
//                   src={nov1}
//                   alt="Tamakon 1"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* IMAGE 2 */}
//               <div
//                 className="
//                   w-[100px]
//                   h-[100px]
//                   flex-shrink-0
//                   rounded-md
//                   overflow-hidden
//                   bg-gray-100
//                   border-2
//                   border-transparent
//                   hover:border-[#12007a]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <img
//                   src={nov2}
//                   alt="Tamakon 2"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* IMAGE 3 */}
//               <div
//                 className="
//                   w-[100px]
//                   h-[100px]
//                   flex-shrink-0
//                   rounded-md
//                   overflow-hidden
//                   bg-gray-100
//                   border-2
//                   border-transparent
//                   hover:border-[#12007a]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <img
//                   src={nov3}
//                   alt="Tamakon 3"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* IMAGE 4 */}
//               <div
//                 className="
//                   w-[100px]
//                   h-[100px]
//                   flex-shrink-0
//                   rounded-md
//                   overflow-hidden
//                   bg-gray-100
//                   border-2
//                   border-transparent
//                   hover:border-[#12007a]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <img
//                   src={nov4}
//                   alt="Tamakon 4"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//             </div>

//             {/* ================= VIEW PROJECT ================= */}
//             <div className="mt-4">
//               <button
//                 className="
//                   bg-[#12007a]
//                   hover:bg-[#0b005c]
//                   text-white
//                   text-[18px]
//                   font-bold
//                   px-4
//                   py-3
//                   rounded-full
//                   shadow-lg
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                 "
//               >
//                 View Project
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pro4;