import React, { useState } from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      list: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 40 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      category: "Backend",
      list: [
        { name: "Node.js", level: 50 },
        { name: "Express.js", level: 55 },
        { name: "MongoDB", level: 50 },
        { name: "Firebase", level: 45 },
      ],
    },
    {
      category: "Others",
      list: [
        { name: "Git", level: 70 },
        { name: "GitHub", level: 75 },
      ],
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="p-6 h-[76vh] overflow-y-auto">
      <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold mb-4">
        Skills
      </h1>

      {/* Row Layout */}
      <div className="flex justify-center gap-10 flex-wrap">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className="w-64">
            <h2 className="text-xl my-5 sm:text-2xl font-semibold text-center">
              {skillCategory.category}
            </h2>
            <ul>
              {skillCategory.list.map((skill) => (
                <li
                  key={skill.name}
                  className="relative text-base sm:text-lg font-normal cursor-pointer mb-2"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill.name}
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-300 rounded mt-1 overflow-hidden">
                    <div
                      className="h-2 bg-blue-500 rounded transition-all duration-600"
                      style={{
                        width:
                          hoveredSkill === skill.name
                            ? `${skill.level}%`
                            : "0%",
                      }}
                    ></div>
                  </div>
                  {/* Percentage on Hover */}
                  {hoveredSkill === skill.name && (
                    <span className="absolute right-0 text-sm font-semibold text-gray-700">
                      {skill.level}%
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
