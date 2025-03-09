import React, { useState, useEffect } from "react";

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutPoint = 50; // reduce it to fade out sooner
      const newOpacity = Math.max(1 - scrollY / fadeOutPoint, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center h-[50vh] w-full transition-opacity duration-200 fixed top-0 left-0"
        style={{
          opacity,
          transition: "opacity 0.09s linear",
          pointerEvents: opacity === 0 ? "none" : "auto", // it will prevent the user from interacting with the content when it's faded out
        }}
      >
        <h1 className="text-6xl mt-15">Hi, I'm Abhay Choudhary!</h1>
        <p className="text-xl mt-4">Scroll down to see some of my work</p>
      </div>
      <div className="h-[50vh]"></div>
    </>
  );
};

export default Hero;
