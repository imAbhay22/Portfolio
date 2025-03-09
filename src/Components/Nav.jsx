import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "./DarkContextApi";

const Nav = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className="sticky top-0 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 border-b border-blue-200 z-50"
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
      }}
    >
      {/* Left-aligned navigation */}
      <ul className="flex gap-3 sm:gap-5">
        <li className="font-normal text-base sm:text-md hover:underline cursor-pointer">
          <Link to="/">Portfolio</Link>
        </li>
        <li className="font-light text-base sm:text-md hover:underline cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="font-light text-base sm:text-lg hover:underline cursor-pointer">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>

      {/* Centered heading (Hidden on small screens, visible on md and larger) */}
      <h1 className="hidden sm:block md:block absolute left-1/2 transform -translate-x-1/2 font-normal text-lg sm:text-xl">
        Abhay Choudhary
      </h1>

      {/* Right-aligned dark mode toggle */}
      <button
        className="font-light text-base sm:text-lg hover:underline cursor-pointer"
        onClick={toggleDarkMode}
      >
        DarkMode
      </button>
    </div>
  );
};

export default Nav;
