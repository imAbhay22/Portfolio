import React from "react";
import { useDarkMode } from "./DarkContextApi";
import pdf from "../assets/Abhay's_Resume.pdf";

const Resume = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f7f7f7",
        color: darkMode ? "#e0e0e0" : "#1f2937",
      }}
    >
      <div
        className="max-w-3xl sm:max-w-4xl mx-auto p-6 sm:p-8 rounded-lg shadow-md sm:shadow-lg"
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          color: darkMode ? "#e0e0e0" : "#1f2937",
        }}
      >
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Abhay Choudhary
          </h1>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base">
            <p>+91 6264640282</p>
            <p>•</p>
            <p>Choudharyabhay555@gmail.com</p>
          </div>
        </div>

        {/* Sections */}
        {[
          {
            title: "EDUCATION",
            content: [
              {
                name: "School of Computer Science and Information Technology, DAVV",
                details:
                  "MCA (Master in Computer Application), CGPA - 6.00 (2024-2025)",
              },
              {
                name: "Sage University Indore",
                details:
                  "BCA (Bachelor in Computer Application), CGPA - 7.98 (2021-2023)",
              },
              {
                name: "Oxford Academy Rau H. S. S",
                details: "12th - 69.02% (2020) | 10th - 68.08% (2018)",
              },
            ],
          },
          {
            title: "TECHNICAL SKILLS",
            isGrid: true,
            content: [
              {
                name: "Languages",
                details: "HTML, CSS, SQL, Basics of JavaScript",
              },
              {
                name: "Technologies/Frameworks",
                details: "React.js, TailwindCSS, Bootstrap, ChatGPT, LLMs",
              },
              {
                name: "Developer Tools",
                details:
                  "VS Code, Git/GitHub, Chrome DevTools, Firebase, Postman",
              },
              { name: "Databases", details: "MySQL, MongoDB" },
            ],
          },
          {
            title: "PROJECTS",
            content: [
              {
                name: "Netflix Clone",
                tech: "HTML, CSS, TailwindCSS, React.js",
                points: [
                  "Developed a front-end replica with responsive UI and smooth navigation.",
                  "Implemented aesthetic UI using Tailwind CSS and React components.",
                ],
              },
              {
                name: "Amazon Clone",
                tech: "React.js, Node.js, MongoDB, Bootstrap",
                points: [
                  "Built a full-stack e-commerce platform with product listings and authentication.",
                  "Created a responsive shopping cart with real-time updates.",
                ],
              },
              {
                name: "Online Art Gallery (ArtEcho)",
                tech: "HTML, CSS, TailwindCSS, React.js, Node.js, MongoDB",
                points: [
                  "Developed a platform for artists to upload and sell digital artwork.",
                  "Integrated user authentication, artwork classification, and a seamless checkout system.",
                ],
              },
              {
                name: "Portfolio Website",
                tech: "HTML, CSS, JavaScript, React.js, Tailwind CSS, Firebase",
                points: [
                  "Designed and developed a personal portfolio website to showcase projects and skills.",
                  "Ensured full responsiveness across all devices using Tailwind CSS.",
                  "Hosted the website on Firebase for seamless online accessibility.",
                ],
              },
            ],
          },
          {
            title: "INTERESTS",
            isGrid: true,
            content: [
              {
                name: "Hobbies",
                details:
                  "Sketching & Painting, Front-End Development, AI & Emerging Tech",
              },
              {
                name: "Soft Skills",
                details:
                  "Attention to Detail, Adaptability, Continuous Learning, Creativity & Innovation",
              },
            ],
          },
        ].map(({ title, content, isGrid }, index) => (
          <section key={index} className="mb-6 sm:mb-8">
            <h2
              className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b-2 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              {title}
            </h2>
            <div
              className={
                isGrid ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-4"
              }
            >
              {content.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold">{item.name}</h3>
                  {item.details && (
                    <p className="text-sm sm:text-base">{item.details}</p>
                  )}
                  {item.tech && (
                    <p className="text-sm text-gray-400">{item.tech}</p>
                  )}
                  {item.points && (
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      {item.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Download Resume */}
        <div className="flex justify-center mt-6">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-all"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
