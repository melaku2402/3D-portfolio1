


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { pr } from "../assets";
import TechStack from "./TechStack";
import Education from "../pages/Education";

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [floatAnimations, setFloatAnimations] = useState({});

  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        "React",
        "Vue.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "Express.js",
        "Django",
        "Spring Boot",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Database & Cloud",
      technologies: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "AWS",
        "Docker",
        "Redis",
      ],
    },
    {
      category: "Tools & Others",
      technologies: [
        "Git",
        "GitHub",
        "Jest",
        "Webpack",
        "Figma",
        "Adobe XD",
        "Agile/Scrum",
      ],
    },
  ];

  const experiences = [
    {
      period: "2023 - Present",
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      description:
        "Leading frontend development teams and architecting scalable web applications.",
    },
    {
      period: "2021 - 2023",
      role: "Full Stack Developer",
      company: "Digital Innovations LLC",
      description:
        "Developed and maintained multiple client projects using modern web technologies.",
    },
    {
      period: "2019 - 2021",
      role: "Junior Developer",
      company: "StartUp Ventures",
      description:
        "Started my career building responsive websites and learning industry best practices.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Initialize float animations
    const animations = {
      float1: { transform: "translateY(0px)" },
      float2: { transform: "translateY(0px)" },
    };
    setFloatAnimations(animations);
  }, []);

  const handleCardHover = () => {
    setHoveredCard(true);
  };

  const handleCardLeave = () => {
    setHoveredCard(false);
  };

  return (
    <>
      <div className="min-h-screen bg-primary relative w-full h-screen mx-auto">
        {/* Simple Header Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-[#915EFF] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold group-hover:text-[#915EFF] transition-colors duration-300">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className={`relative w-full h-screen mx-auto ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-600`}
        >
          <div className="max-w-7xl py-[100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Content */}
              <div className="flex-1 w-full flex flex-col justify-center">
                <div
                  className="relative group h-full"
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <div
                    className={`relative rounded-2xl p-6 md:p-7 transition-all duration-300 shadow-2xl h-full flex flex-col justify-between ${
                      hoveredCard
                        ? "scale-[1.05] bg-[#1A1A2E]"
                        : "bg-transparent"
                    }`}
                  >
                    {/* Content Section */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-5 text-center">
                       About Me
                      </h2>

                      <div className="space-y-3 md:space-y-4 text-white text-base md:text-[15px] leading-7 md:leading-8 text-justify">
                        <p>
                          I'm{" "}
                          <strong className="text-[#915EFF]">
                            Melaku Adane
                          </strong>
                          , a dedicated Full Stack Engineer
                          with comprehensive expertise across the development
                          stack. I architect and build scalable applications
                          featuring intuitive user interfaces, robust
                          server-side systems, and efficient database solutions.
                          Known for my meticulous attention to detail and
                          collaborative approach,
                        </p>

                        <p>
                           I excel at interpreting
                          technical requirements and delivering high-quality
                          solutions within deadlines. I'm an agile learner who
                          quickly masters emerging technologies, complemented by
                          strong organizational skills and a self-driven
                          commitment to professional growth and technical
                          excellence.
                        </p>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="my-6 md:my-7 border-t border-gray-700"></div>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button className="flex items-center justify-center gap-2 px-6 py-2.5 border text-[#915EFF] rounded-full font-medium hover:bg-[#915EFF] hover:text-white transition-all duration-300 hover:scale-105 text-sm md:text-base">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        My Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-[#915EFF] to-[#7d4dff] p-1 rounded-2xl transform rotate-2 transition-transform duration-300 hover:rotate-3">
                    <div className="bg-[#050816] rounded-2xl p-4 transform -rotate-2 transition-transform duration-300">
                      <img
                        src={pr}
                        alt="Melaku Adane"
                        className="w-full h-auto rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div
                    className="absolute -top-4 -left-4 w-8 h-8 bg-[#915EFF] rounded-full animate-pulse"
                    style={floatAnimations.float1}
                  />
                  <div
                    className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#7d4dff] rounded-full animate-bounce"
                    style={floatAnimations.float2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </div>
      <TechStack /> <Education />
    </>
  );
};

export default AboutPage;