

import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { pr } from "../assets";
import { Link } from "react-router-dom";
import Tech2 from "./Tech2";
import { Github, Linkedin, Instagram, Send } from "lucide-react";
import { SiGraphql, SiMongodb, SiNodedotjs } from "react-icons/si";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageHovered, setImageHovered] = useState(false);
  const [techHovered, setTechHovered] = useState(null);
  const [floatAnimations, setFloatAnimations] = useState({});

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      color: "hover:text-gray-400",
      name: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
      name: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourusername",
      color: "hover:text-pink-400",
      name: "Instagram",
    },
    {
      icon: Send,
      href: "https://t.me/yourusername",
      color: "hover:text-blue-300",
      name: "Telegram",
    },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Initialize float animations
  useEffect(() => {
    const animations = {};
    socialLinks.forEach((_, index) => {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch min-h-[600px]">
            {/* Left Column - Content Card */}
            <div className="flex-1 w-full flex flex-col justify-center">
              <div
                className="relative group h-full"
                onMouseEnter={() => setHoveredCard(true)}
                onMouseLeave={() => setHoveredCard(false)}
              >
                <div
                  className={`relative rounded-2xl p-6 md:p-7 transition-all duration-300 shadow-2xl h-full flex flex-col justify-between ${
                    hoveredCard ? "scale-[1.02] bg-[#1A1A2E]" : "bg-transparent"
                  }`}
                >
                  {/* Content Section */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h2 className="mb-4 md:mb-5 text-center text-4xl md:text-5xl font-bold text-[#C3BFFB]">
                      Who Am I!
                    </h2>

                    <div className="space-y-3 md:space-y-4 text-[#C3BFFB] text-base md:text-[15px] leading-7 md:leading-8 text-justify flex-1">
                      <p>
                        I'm{" "}
                        <strong className="text-[#915EFF]">Melaku Adane</strong>
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
                  <div className="my-2 md:my-4 border-t border-gray-700"></div>
                  {/* Buttons and Social Links */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                    {/* About Me Button - Smaller */}
                    <Link
                      to="/about-page"
                      className="w-full sm:w-auto sm:flex-1"
                    >
                      <button className="flex items-center justify-center gap-2 w-full  duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40  px-6 py-3 rounded-lg bg-[#915EFF] text-white font-bold hover:bg-[#7B4BEB] hover:scale-105 transition-all text-sm sm:text-base sm:px-8">
                        Detail Me
                      </button>
                    </Link>

                    {/* Social Media Icons - Smaller */}
                    <div className="flex justify-center gap-3 w-full sm:w-auto">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <button
                            key={social.name}
                            onClick={() => handleSocialClick(social.href)}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A2E] border border-[#915EFF] text-[#C3BFFB] transition-all duration-300 hover:scale-110 hover:bg-[#915EFF] hover:text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25"
                            title={social.name}
                          >
                            <IconComponent size={16} />
                          </button>
                        );
                      })}
                    </div>
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
                  className={`relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-[#10131D]/20 to-[#10131D]/10 rounded-2xl p-4 md:p-6 shadow-2xl border border-[#10131D]/30 transition-all duration-300 ${
                    imageHovered
                      ? "scale-[1.02] bg-gradient-to-br from-[#10131D]/30 to-[#10131D]/20"
                      : ""
                  }`}
                >
                  {/* Your Image */}
                  <img
                    src={pr}
                    alt="Programmer at work"
                    className={`w-full h-full max-h-[400px] md:max-h-[500px] rounded-xl shadow-lg object-cover transition-transform duration-300 ${
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

               
              </div>
            </div>
          </div>

          <Tech2 />
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");