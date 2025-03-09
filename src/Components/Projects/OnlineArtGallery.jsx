import React, { useState } from "react";
import onlineArtGalleryImg from "../../assets/Images/OnlineArtGallery.png";
import onlineArtGalleryVideo from "../../assets/Videos/OnlineArtGallery.mp4";
import { useDarkMode } from "../DarkContextApi";

const OnlineArtGallery = () => {
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
        Welcome to Our Online Art Gallery
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left side: Image */}
        <div className="flex-1 flex items-center justify-center">
          {videoError ? (
            <img
              src={onlineArtGalleryImg}
              alt="Online Art Gallery"
              className="object-contain max-h-[60vh] shadow-lg rounded"
            />
          ) : (
            <video
              src={onlineArtGalleryVideo}
              className="object-contain max-h-[60vh] shadow-lg rounded"
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
            />
          )}
        </div>
        {/* Right side: Description */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Story & Passion</h2>
          <p className="mb-4 leading-relaxed">
            At our Online Art Gallery, every piece of art tells a unique story—
            stories of creativity, passion, and the human experience. We believe
            art isn’t just for display; it’s a window into the soul of the
            artist and a bridge that connects us all. Our journey began with a
            simple desire to create a space where emerging talents and renowned
            artists alike could share their visions and inspire others.
          </p>
          <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Carefully curated collections of inspiring art</li>
            <li>High-resolution images to capture every detail</li>
            <li>Personal stories and insights from our featured artists</li>
            <li>
              Immersive virtual exhibitions that invite you to explore at your
              own pace
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">
            Our Technology & Experience
          </h3>
          <p className="leading-relaxed">
            We built our gallery using modern web technologies like React and
            Tailwind CSS to ensure a seamless, engaging experience. Our platform
            is designed to be intuitive and user-friendly, so you can focus on
            exploring the art without any distractions. We’re continuously
            evolving and always open to feedback, because your experience
            matters to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineArtGallery;
