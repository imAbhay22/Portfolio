import React from "react";
import portfolioImage from "../../assets/Images/Portfolio.png"; // adjust the path as needed
import { useDarkMode } from "../DarkContextApi";

const Portfolio = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className="min-h-screen p-4"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f7f7f7", // Dark: nearly black; Light: off-white
        color: darkMode ? "#e0e0e0" : "#1f2937", // Dark: light gray; Light: dark gray
      }}
    >
      <h1 className="text-center text-3xl font-bold mb-8">
        Check Out My Portfolio Website
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left side: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={portfolioImage}
            alt="Screenshot of my portfolio website"
            className="object-contain max-h-[60vh] shadow-lg rounded"
          />
        </div>
        {/* Right side: Description */}
        <div className="flex-1 p-4">
          <p className="mb-4 leading-relaxed">Hey there!.</p>
          <h3 className="text-xl font-semibold mb-2">What You'll Find Here</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Cool projects I've worked on</li>
            <li>My creative process</li>
            <li>Tech experiments and ideas</li>
            <li>And a bit of fun stuff too</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Why I Made This Site</h3>
          <p className="leading-relaxed">
            I made this website not just to show off my skills, but to document
            my journey as a web developer. I'm always learning new things, and I
            hope you enjoy exploring what I've built!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
