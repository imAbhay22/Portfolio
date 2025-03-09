import React from "react";
import { useAppContext } from "./ContextApi";
import { Link } from "react-router-dom";

const Grid = () => {
  const { Projects } = useAppContext();

  return (
    <div className="w-full min-h-fit">
      <div className="grid grid-cols-1 sm:grid-cols-[49vw_1fr]  gap-x-[0.3vw] gap-y-[0.6vh]">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden md:rounded-md transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          >
            <Link to={project.route}>
              <img
                src={project.src}
                alt={`Project ${index}`}
                className="mb-5"
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = project.fallbackSrc;
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
