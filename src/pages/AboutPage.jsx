import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pr } from "../assets";
import TechStack from "./TechStack";
import Education from "../pages/Education";

// React Icons Imports
import {
  FaUser,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-900/20",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-900/20",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:your.email@example.com",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-900/20",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: FaUser,
    },
    {
      name: "React Professional Certification",
      issuer: "Meta",
      date: "2022",
      icon: FaUser,
    },
    {
      name: "Node.js Certified Developer",
      issuer: "OpenJS Foundation",
      date: "2022",
      icon: FaUser,
    },
    {
      name: "Python for Data Science",
      issuer: "University of Michigan",
      date: "2021",
      icon: FaUser,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Certifications Section Component
  const CertificationsSection = () => {
    return (
      <section className="py-12 bg-[#050816]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C3BFFB] mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const CertIcon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-[#151722] border border-gray-800 rounded-2xl p-6 group hover:border-[#915EFF] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#915EFF] to-[#7d4dff] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <CertIcon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-[#C3BFFB] text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <span className="text-xs text-gray-400 bg-[#0f1124] px-2 py-1 rounded-full border border-gray-700">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-primary relative w-full mx-auto">
        {/* Header Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-[#915EFF] rounded-full flex items-center justify-center">
                  <FaUser className="w-5 h-5 text-white" />
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
          className={`relative w-full mx-auto pt-20 ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-600`}
        >
          <div className="max-w-7xl py-12 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content */}
              <div className="flex-1 w-full flex flex-col justify-center">
                <div
                  className="relative group h-full"
                  onMouseEnter={() => setHoveredCard(true)}
                  onMouseLeave={() => setHoveredCard(false)}
                >
                  <div
                    className={`relative rounded-2xl p-6 transition-all duration-300 shadow-2xl h-full flex flex-col justify-between ${
                      hoveredCard
                        ? "scale-[1.02] bg-[#1A1A2E]"
                        : "bg-transparent"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <FaUser className="text-[#915EFF] text-xl" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                          About Me
                        </h2>
                      </div>

                      <div className="space-y-3 text-[#C3BFFB] text-base leading-7 text-justify">
                        <p>
                          I'm{" "}
                          <strong className="text-[#915EFF]">
                            Melaku Adane
                          </strong>
                          , a dedicated Full Stack Engineer with comprehensive
                          expertise across the development stack. I architect
                          and build scalable applications featuring intuitive
                          user interfaces, robust server-side systems, and
                          efficient database solutions.
                        </p>

                        <p>
                          Known for my meticulous attention to detail and
                          collaborative approach, I excel at interpreting
                          technical requirements and delivering high-quality
                          solutions within deadlines. I'm an agile learner who
                          quickly masters emerging technologies, complemented by
                          strong organizational skills and a self-driven
                          commitment to professional growth and technical
                          excellence.
                        </p>
                      </div>
                    </div>

                    <div className="my-6 border-t border-gray-700"></div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center gap-4">
                      <p className="text-[#C3BFFB] text-sm text-center">
                        Let's connect and build something amazing together
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((social, index) => {
                          const SocialIcon = social.icon;
                          return (
                            <a
                              key={index}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-[#C3BFFB] transition-all duration-300 hover:scale-105 ${social.color} ${social.bgColor} hover:border-current`}
                            >
                              <SocialIcon className="text-lg" />
                              <span className="text-sm font-medium">
                                {social.name}
                              </span>
                            </a>
                          );
                        })}
                      </div>
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
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-[#915EFF] rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-[#7d4dff] rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Remaining Sections */}
      <TechStack />
      <Education />
      <CertificationsSection />
    </>
  );
};

export default AboutPage;
