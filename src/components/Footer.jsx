
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { mk1, pr } from "../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://facebook.com/yourusername",
      color: "hover:text-blue-600",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://t.me/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />,
      url: "mailto:your.email@example.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="relative bg-[#050816] border-t border-gray-800">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#915EFF]/10 to-transparent"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Main Content - Centered Layout */}
        <div className="flex flex-col items-center text-center mb-4">
          {/* Brand Section - Centered */}
          <div className="mb-4 max-w-full">
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center justify-center gap-3 mb-3 group cursor-pointer"
            >
              <div className="w-10 h-10  rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg bg-white rounded-full">
                  <img src={mk1} className="rounded-full" alt="" />
                </span>
              </div>
              <div className="text-center sm:text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-[#C3BFFB] group-hover:text-[#915EFF] transition-colors duration-300">
                  Melaku Adane
                </h2>
                <p className="text-[#C3BFFB] text-xs sm:text-sm mt-0.5">
                  Software Engineer
                </p>
              </div>
            </div>

            <p className="text-[#C3BFFB] text-xs  sm:text-sm leading-relaxed">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Social Section - Centered */}
          <div className="w-full max-full">
            <div className="flex flex-col items-center space-y-3">
              <h3 className="text-white font-semibold text-sm">
                Connect With Me
              </h3>

              {/* Social Links - Centered */}
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-[#151722] border border-gray-700 rounded-lg  flex items-center justify-center text-[#C3BFFB] transition-all duration-300 hover:border-[#915EFF] hover:scale-105 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="border-t border-gray-800 pt-3 flex flex-col sm:flex-row justify-center items-center gap-3">
          {/* Copyright - Centered */}
          <div className="flex flex-col sm:flex-row items-center gap-1 text-center order-2 sm:order-1">
            <div className="flex items-center text-[#C3BFFB] text-xs">
              <span>© {currentYear}</span>
              <FaHeart className="w-3 h-3 text-red-500 mx-1" />
              <span>by</span>
              <span className="text-white font-semibold ml-1">
                Melaku Adane
              </span>
            </div>
            <span className="hidden sm:inline text-[#C3BFFB] mx-1">•</span>
            <span className="text-[#C3BFFB] text-xs">All rights reserved</span>
          </div>

          {/* Legal Links - Centered */}
          <div className="flex items-center gap-4 text-xs order-1 sm:order-2">
            <Link
              to="#"
              className="text-[#C3BFFB] hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-[#C3BFFB] hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
          </div>

          {/* Scroll to Top - Centered */}
          <div className="order-3">
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-lg flex items-center justify-center text-white hover:from-[#7d4dff] hover:to-[#6a3dff] transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;