import React, { useState } from "react";

// JSON data for tech stack
const techStackData = {
  categories: [
    {
      id: 1,
      title: "Frontend",
      skills: [
        "React",
        "Vue",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      icon: "🎨",
      backContent:
        "Modern frontend frameworks and libraries for building responsive user interfaces",
    },
    {
      id: 2,
      title: "TradingFocus",
      skills: [
        "Algorithmic Trading",
        "Data Analysis",
        "Financial APIs",
        "Real-time Data",
        "Risk Management",
      ],
      icon: "📈",
      backContent:
        "Specialized in trading systems and financial technology solutions",
    },
    {
      id: 3,
      title: "Backend",
      skills: [
        "Node.js",
        "Python",
        "Java",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
      ],
      icon: "⚙️",
      backContent: "Robust server-side development and database management",
    },
    {
      id: 4,
      title: "Managing",
      skills: [
        "Project Management",
        "Team Leadership",
        "Agile Methodology",
        "CI/CD",
        "DevOps",
      ],
      icon: "👨‍💼",
      backContent: "Project coordination and team leadership expertise",
    },
    {
      id: 5,
      title: "Workout",
      skills: [
        "REST APIs",
        "GraphQL",
        "Microservices",
        "WebSockets",
        "Authentication",
      ],
      icon: "🔧",
      backContent: "API development and system architecture",
    },
    {
      id: 6,
      title: "Markus",
      skills: [
        "UI/UX Design",
        "Figma",
        "Adobe XD",
        "Prototyping",
        "User Research",
      ],
      icon: "🎯",
      backContent: "User experience design and interface prototyping",
    },
    {
      id: 7,
      title: "Management",
      skills: [
        "System Architecture",
        "Cloud Services",
        "Security",
        "Performance",
        "Scalability",
      ],
      icon: "🏗️",
      backContent: "System architecture and technical leadership",
    },
    {
      id: 8,
      title: "Motor",
      skills: [
        "Mobile Development",
        "React Native",
        "Flutter",
        "PWA",
        "App Store",
      ],
      icon: "📱",
      backContent: "Cross-platform mobile application development",
    },
    {
      id: 9,
      title: "FacingPacket",
      skills: [
        "Networking",
        "Security",
        "APIs",
        "System Integration",
        "Protocols",
      ],
      icon: "🌐",
      backContent: "Network security and system integration services",
    },
  ],
};

const TechStack = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <section className="w-full py-16 md:py-20 mx-auto relative overflow-hidden bg-[#050816]">
      {/* Background Elements */}
      <div className="absolute left-0 w-48 h-48 md:w-72 md:h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute right-0 w-48 h-48 md:w-72 md:h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-6">
             My Skills / Knowledges
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-8"></div>
          <p className="text-[#C3BFFB] text-lg max-w-2xl mx-auto">
            Hover over the cards to discover my technical expertise and skills
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.categories.map((category) => (
            <div
              key={category.id}
              className="flip-card h-64"
              onMouseEnter={() => setFlippedCard(category.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`
                flip-card-inner w-full h-full relative preserve-3d transition-all duration-700 ease-in-out
                ${flippedCard === category.id ? "rotate-y-180" : ""}
              `}
              >
                {/* Front of Card */}
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-[#151722] border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{category.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#C3BFFB] mb-3">
                    {category.title}
                  </h3>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#915EFF]/20 text-[#C3BFFB] text-xs rounded-full border border-[#915EFF]/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > 3 && (
                      <span className="px-2 py-1 bg-[#915EFF]/10 text-[#C3BFFB] text-xs rounded-full">
                        +{category.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Hover Hint */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 text-[#915EFF] text-sm">
                      <span>Hover to flip</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-[#151722] border-2 border-[#915EFF] rounded-2xl p-6 flex flex-col items-center justify-center text-center rotate-y-180">
                  {/* Back Icon */}
                  <div className="text-3xl mb-3 text-[#915EFF]">
                    {category.icon}
                  </div>

                  {/* Back Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {category.title}
                  </h3>

                  {/* Back Description */}
                  <p className="text-[#C3BFFB] text-sm mb-4 leading-relaxed">
                    {category.backContent}
                  </p>

                  {/* All Skills */}
                  <div className="flex flex-wrap justify-center gap-1">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#915EFF]/30 text-white text-xs rounded-full border border-[#915EFF]/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Experience Level */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2 text-[#C3BFFB] text-xs">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className={`w-2 h-2 rounded-full ${
                              star <= 4 ? "bg-[#915EFF]" : "bg-[#915EFF]/30"
                            }`}
                          />
                        ))}
                      </div>
                      <span>Expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-[#151722] border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#C3BFFB] mb-4">
              Ready to Leverage These Skills?
            </h3>
            <p className="text-[#C3BFFB] mb-6 max-w-2xl mx-auto">
              With expertise across multiple domains, I can help bring your
              projects to life with cutting-edge technology and innovative
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent px-8 py-3 rounded-lg font-semibold hover:border-[#7d4dff] hover:text-white transition-all duration-300 transform hover:scale-105">
                Start a Project
              </button>
              <button className="border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent px-8 py-3 rounded-lg font-semibold hover:border-[#7d4dff] hover:text-white transition-all duration-300 transform hover:scale-105">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D Flip Effect */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          transform-style: preserve-3d;
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
