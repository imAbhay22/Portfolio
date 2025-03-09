import React, { useState } from "react";
import netflixImg from "../../assets/Images/Netflix.png";
import netflixVideo from "../../assets/Videos/Netflix.mp4";
import { useDarkMode } from "../DarkContextApi";

const Netflix = () => {
  const { darkMode } = useDarkMode();

  const [videoError, setVideoError] = useState(false);
  const handleVideoError = () => {
    setVideoError(true);
  };
  return (
    <div
      className="min-h-screen p-4"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f7f7f7", // Dark mode: nearly black; Light mode: off-white
        color: darkMode ? "#e0e0e0" : "#1f2937", // Dark mode: light gray; Light mode: dark gray
      }}
    >
      <h1 className="text-center text-3xl font-bold mb-8">
        Welcome to My Netflix Clone!
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Side: Project Image */}
        <div className="flex-1 flex items-center justify-center">
          {videoError ? (
            <img
              src={netflixImg}
              alt="Amazon UI Clone"
              className="object-contain max-h-[60vh] shadow-lg rounded"
            />
          ) : (
            <video
              src={netflixVideo}
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
          <h2 className="text-2xl font-bold mb-4">A Netflix UI Clone</h2>
          <p className="mb-4 leading-relaxed">
            Yo! Welcome to my Netflix clone project, where I recreated the feel
            of Netflix with my own twist. I focused on nailing that slick,
            modern interface that lets you browse and watch like a boss. Plus, I
            added user authentication so you can log in and experience a
            simulated streaming session.
          </p>
          <h3 className="text-xl font-semibold mb-2">What’s Inside</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>A clean, modern UI that channels Netflix’s signature style</li>
            <li>User login and signup to make it feel real</li>
            <li>Fully responsive design – works great on any device</li>
            <li>Built with React and Tailwind CSS – seriously cool tech</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
