

// export default SectionWrapper(About, "about");
import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { pr } from "../assets";
import { Link } from "react-router-dom";
import Tech2 from "./Tech2";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageHovered, setImageHovered] = useState(false);
  const [techHovered, setTechHovered] = useState(null);
  const [floatAnimations, setFloatAnimations] = useState({});

  const techIcons = [
    { name: "HTML", icon: "🅷", color: "text-orange-500" },
    { name: "CSS", icon: "🅲", color: "text-blue-500" },
    { name: "JavaScript", icon: "🅙", color: "text-yellow-400" },
    { name: "React", icon: "⚛", color: "text-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "text-green-500" },
    { name: "MongoDB", icon: "🍃", color: "text-green-400" },
    { name: "Python", icon: "🐍", color: "text-blue-400" },
    { name: "Git", icon: "📚", color: "text-red-500" },
  ];

  // Initialize float animations
  useEffect(() => {
    const animations = {};
    techIcons.forEach((_, index) => {
      animations[index] = {
        transform: `rotate(${Math.random() * 4 - 2}deg)`,
      };
    });
    setFloatAnimations(animations);
  }, []);

  const handleTechHover = (index) => {
    setTechHovered(index);
  };

  const handleTechLeave = () => {
    setTechHovered(null);
  };

  const handleImageHover = () => {
    setImageHovered(true);
  };

  const handleImageLeave = () => {
    setImageHovered(false);
  };

  return (
    <>
      <section
        id="about"
        className="w-full py-10 md:py-10 mx-auto relative overflow-hidden"
      >
        {/* <div className="absolute left-0 w-48 h-48 md:w-72 md:h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div> */}
        {/* <div className="absolute right-0 w-48 h-48 md:w-72 md:h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Left Column - Content Card */}
            <div className="flex-1 w-full flex flex-col justify-center">
              <div
                className="relative group h-full"
                onMouseEnter={() => setHoveredCard(true)}
                onMouseLeave={() => setHoveredCard(false)}
              >
                <div
                  className={`relative rounded-2xl p-6 md:p-7 transition-all duration-300 shadow-2xl h-full flex flex-col justify-between ${
                    hoveredCard ? "scale-[1.05] bg-[#1A1A2E]" : "bg-transparent"
                  }`}
                >
                  {/* Content Section */}
                  <div>
                    <h2 className=" mb-4 md:mb-5 text-center text-4xl md:text-5xl font-bold text-[#C3BFFB] ">
                      Who Am I!
                    </h2>

                    <div className="space-y-3 md:space-y-4 text-[#C3BFFB] text-base md:text-[15px] leading-7 md:leading-8 text-justify ">
                      <p>
                        I'm{" "}
                        <strong className="text-[#915EFF]">
                          Melaku Adane,{" "}
                        </strong>
                        , a versatile Full Stack Engineer with expertise in both
                        frontend and backend development. I specialize in
                        building responsive, user-centric applications while
                        ensuring robust server-side architecture, database
                        design, and seamless API integrations.
                      </p>

                      <p>
                        As a detail-oriented developer, I excel at transforming
                        complex requirements into efficient solutions while
                        rapidly mastering new technologies. My collaborative
                        approach and strong organizational skills ensure precise
                        project delivery, driven by continuous learning and
                        technical growth.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 md:my-7 border-t border-gray-700"></div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/about-page" className="w-full sm:w-48">
                      <button className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#915EFF] text-white rounded-full font-semibold hover:bg-[#7d4dff] transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105">
                        About Me
                      </button>
                    </Link>

                    <button className="flex items-center justify-center gap-2 w-full sm:w-48 px-6 py-3 border text-[#915EFF] rounded-full font-semibold hover:bg-[#915EFF] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25">
                      My Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Programmer Image */}
            <div className="flex-1 w-full flex justify-center items-center">
              <div
                className="relative w-full h-full flex items-center justify-center group"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              >
                {/* Image Container with Hover Effects */}
                <div
                  className={`relative w-full max-w-lg h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-[#10131D]/20 to-[#10131D]/10 rounded-2xl p-4 md:p-6 shadow-2xl border border-[#10131D]/30 transition-all duration-300 ${
                    imageHovered
                      ? "scale-[1.03] bg-gradient-to-br from-[#10131D]/30 to-[#10131D]/20"
                      : ""
                  }`}
                >
                  {/* Your Image */}
                  <img
                    src={pr}
                    alt="Programmer at work"
                    className={`w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-300 ${
                      imageHovered ? "scale-105" : ""
                    }`}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#915EFF] to-[#7d4dff] transition-opacity duration-300 ${
                      imageHovered ? "opacity-10" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Enhanced Tech Badge with Hover Effect */}
                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 ${
                    imageHovered ? "scale-110" : ""
                  }`}
                >
                  <div className="bg-[#915EFF] text-white px-4 py-2 rounded-full text-sm font-small shadow-lg border border-[#7d4dff] transition-all duration-300">
                    Software Engineer
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <div
                  className={`absolute -top-3 -right-3 w-10 h-10 bg-[#915EFF] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transition-all duration-300 ${
                    imageHovered ? "scale-110 bg-[#7d4dff]" : ""
                  }`}
                  style={{
                    transform:
                      floatAnimations[0]?.transform || "translateY(0px)",
                  }}
                >
                  JS
                </div>
              </div>
            </div>
          </div>

          <Tech2 />
        </div>
        {/* <div className="absolute left-0 w-48 h-48 md:w-72 md:h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute right-0 w-48 h-48 md:w-72 md:h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div> */}
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");