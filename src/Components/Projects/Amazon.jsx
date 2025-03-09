import React, { useState } from "react";
import amazonImg from "../../assets/Images/Amazon.png";
import amazonVideo from "../../assets/Videos/Amazon.mp4";
import { useDarkMode } from "../DarkContextApi";

const Amazon = () => {
  const { darkMode } = useDarkMode();
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div
      className="min-h-screen p-4"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f7f7f7", // Dark: nearly black; Light: off-white
        color: darkMode ? "#e0e0e0" : "#1f2937", // Dark: light gray; Light: dark gray
      }}
    >
      <h1 className="text-center text-3xl font-bold mb-8">
        Welcome to My Amazon Clone!
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Side: Show video; if it fails, fallback to image */}
        <div className="flex-1 flex items-center justify-center">
          {videoError ? (
            <img
              src={amazonImg}
              alt="Amazon UI Clone"
              className="object-contain max-h-[60vh] shadow-lg rounded"
            />
          ) : (
            <video
              src={amazonVideo}
              className="object-contain max-h-[60vh] shadow-lg rounded"
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
            />
          )}
        </div>
        {/* Right Side: Project Description */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">UI Clone with Login</h2>
          <p className="mb-4 leading-relaxed">
            Hey there! This is my take on an Amazon clone. I wanted to capture
            the slick, familiar vibe of Amazon while adding my own spin. It’s a
            fun project where I built a responsive design and even threw in some
            user authentication features so you can log in and get the full
            experience. It's not the real deal, but it's a cool mashup of design
            and function.
          </p>
          <h3 className="text-xl font-semibold mb-2">What’s Cool About It</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Sleek, modern design that feels just like the real Amazon</li>
            <li>User login/signup for a bit of interactive fun</li>
            <li>Responsive layout that looks great on any device</li>
            <li>
              Crafted with React and Tailwind CSS – tech that’s super in right
              now!
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Why I Built It</h3>
          <p className="leading-relaxed">
            I built this project as a fun challenge to dive into UI design and
            authentication. It’s my little playground to experiment with modern
            web tech. Hope you enjoy checking it out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amazon;
