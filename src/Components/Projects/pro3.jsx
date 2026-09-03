// import React, { useContext } from "react";
// import { FaWhatsapp } from "react-icons/fa";

// import { ThemeContext } from "../Context/ThemeContext";

// // ================= IMAGES =================
// import emMain from "../../assets/projects/em-main.png";
// import em1 from "../../assets/projects/em-1.png";
// import em2 from "../../assets/projects/em-2.png";
// import em3 from "../../assets/projects/em-3.png";
// import em4 from "../../assets/projects/em-4.png";

// const Pro3 = () => {

//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <section
//       className={`pb-0 transition-colors duration-300 ${
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
//             transition-colors
//             duration-300
//             ${
//               darkMode
//                 ? "bg-gray-800 shadow-[0_2px_20px_rgba(0,0,0,0.30)]"
//                 : "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
//             }
//           `}
//         >

//           {/* ================= LEFT IMAGE ================= */}
//           <div className="h-[300px] overflow-hidden">

//             <img
//               src={emMain}
//               alt="Tamakon Comprehensive School"
//               className="
//                 w-[540px]
//                 h-full
//               "
//             />

//           </div>


//           {/* ================= RIGHT CONTENT ================= */}
//           <div className="w-[540px] px-2 md:px-4 py-2 flex flex-col justify-center">

//             <h2
//               className={`text-[28px] md:text-[20px] font-bold ${
//                 darkMode ? "text-white" : "text-black"
//               }`}
//             >
//               Tamakon Comprehensive School
//             </h2>


//             <p
//               className={`mt-2 text-[15px] leading-[1.5] ${
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
//                   src={em1}
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
//                   src={em2}
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
//                   src={em3}
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
//                   src={em4}
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

// export default Pro3;