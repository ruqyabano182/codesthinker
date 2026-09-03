import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Page9 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const { darkMode } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} py-8 px-6 transition-colors duration-300`}>

      {/* Heading */}
      <div className="text-center mb-12">

        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-xl mb-1`}>
          Let's Talk
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold">
          <span className="text-blue-800">
            Let's Collaborate
          </span>{" "}
          <span className={darkMode ? "text-white" : "text-gray-800"}>
            and Innovate
          </span>
        </h1>

      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-15 items-start">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">

          {/* Item 1 */}
          <div className="flex gap-5 mb-20">

            <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
              <span className="text-white text-3xl">
                👥
              </span>
            </div>

            <div>
              <h2 className={`text-2xl font-semibold mb-1 ${darkMode ? "text-white" : "text-black"}`}>
                Discuss Your Project
              </h2>

              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg leading-relaxed max-w-xl`}>
                Invite clients to share their ideas and
                requirements, fostering an open dialogue about
                potential collaborations.
              </p>
            </div>

          </div>

          {/* Item 2 */}
          <div className="flex gap-5 mb-20">

            <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
              <span className="text-white text-3xl">
                📅
              </span>
            </div>

            <div>
              <h2 className={`text-2xl font-semibold mb-1 ${darkMode ? "text-white" : "text-black"}`}>
                Get a Free Consultation
              </h2>

              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg leading-relaxed max-w-xl`}>
                Offer a no-obligation consultation to understand
                the client's needs and propose tailored solutions.
              </p>
            </div>

          </div>

          {/* Item 3 */}
          <div className="flex gap-5">

            <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
              <span className="text-white text-3xl">
                📞
              </span>
            </div>

            <div>
              <h2 className={`text-2xl font-semibold mb-1 ${darkMode ? "text-white" : "text-black"}`}>
                Reach Us Anytime
              </h2>

              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg leading-relaxed max-w-xl`}>
                Provide multiple contact channels, ensuring
                clients can connect with you at their
                convenience.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className={`w-full lg:w-1/2 rounded-xl shadow-xl p-2 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}>

          <h2 className={`text-3xl font-bold text-center mb-2 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            CONTACT US
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Name + Phone */}
            <div className="flex flex-col md:flex-row gap-4 mb-3">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-2 border-black rounded-lg px-3 py-3 text-lg outline-none"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border-2 border-black rounded-lg px-4 py-4 text-lg outline-none"
                required
              />

            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-2 border-black rounded-lg px-4 py-4 text-lg outline-none mb-5"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="w-full border-2 border-black rounded-lg px-4 py-4 text-lg outline-none resize-none mb-6"
              required
            ></textarea>

            {/* Send Button */}
            <div className="flex justify-end">

              <button
                type="submit"
                className="bg-blue-900 text-white text-xl px-12 py-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Page9;