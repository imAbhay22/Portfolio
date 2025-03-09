import React from "react";
import { useDarkMode } from "./DarkContextApi";

const Footer = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className="flex items-center justify-center h-30 px-4 py-6 border-t"
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff", // A slightly different shade for the footer
        borderTop: darkMode ? "1px solid #333" : "1px solid #ddd", // Adds separation with a border
        color: darkMode ? "#e0e0e0" : "#1f2937",
      }}
    >
      <h1 className="text-center text-base font-medium">
        There are going to be more in the future. Stay tuned.
      </h1>
    </div>
  );
};

export default Footer;
