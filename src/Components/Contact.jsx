import React from "react";
import { useDarkMode } from "./DarkContextApi";

const Contact = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className="h-[78vh] flex flex-col items-center justify-center px-6 py-12"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f7f7f7", // Dark: nearly black; Light: off-white
        color: darkMode ? "#e0e0e0" : "#1f2937", // Dark: light gray; Light: dark gray
      }}
    >
      <div
        className="shadow-lg rounded-lg p-10 w-full max-w-3xl text-center"
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff", // Card bg: dark gray vs white
          color: darkMode ? "#e0e0e0" : "#1f2937",
        }}
      >
        <h1 className="text-5xl font-semibold mb-5">Let's Connect!</h1>
        <p className="text-lg mb-8">
          Whether it's a collaboration, freelance work, or just a chat about
          tech & art—I'd love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="space-y-5 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:Choudharyabhay555@gmail.com"
              className={`hover:underline ${
                darkMode ? "text-teal-400" : "text-indigo-600"
              }`}
            >
              Choudharyabhay555@gmail.com
            </a>
          </p>
          <p>
            Mobile no:{" "}
            <a
              href="tel:6264640282"
              className={`hover:underline ${
                darkMode ? "text-teal-400" : "text-indigo-600"
              }`}
            >
              6264640282
            </a>
          </p>
          <p>📍 Location: Indore</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="https://github.com/imAbhay22"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl font-medium hover:underline ${
              darkMode ? "text-teal-400" : "text-indigo-600"
            }`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-choudhary-/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl font-medium hover:underline ${
              darkMode ? "text-teal-400" : "text-indigo-600"
            }`}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/sketch_.otaku/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl font-medium hover:underline ${
              darkMode ? "text-teal-400" : "text-indigo-600"
            }`}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
