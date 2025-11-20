
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { mk1, menu, close } from "../assets";
import { Github, Linkedin, Mail, Sun, Moon, ArrowLeft } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const location = useLocation();

  // Track window size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Close mobile menu when resizing to larger screens
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Check if we're on the home page or project detail page
  const isHomePage = location.pathname === "/";
  const isProjectDetailPage = location.pathname.startsWith("/project/");

  const handleNavClick = (navId) => {
    setActive(navId);
    setToggle(false);
  };

  // Social links and icons
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/melaku2024",
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/melakuadane",
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ];

  // Enhanced responsive styles with more breakpoints
  const getResponsiveStyles = () => {
    // Mobile First Approach
    if (windowSize.width < 480) {
      return {
        logoText: "text-[15px]",
        navItem: "text-[12px]",
        backButton: "text-[13px]",
        mobileItem: "text-[14px]",
        paddingX: "px-3",
        logoSize: "w-7 h-7",
        iconSize: "w-4 h-4",
        navGap: "gap-1",
        socialGap: "gap-2",
        showName: true,
      };
    } else if (windowSize.width < 640) {
      return {
        logoText: "text-[16px]",
        navItem: "text-[13px]",
        backButton: "text-[14px]",
        mobileItem: "text-[14px]",
        paddingX: "px-4",
        logoSize: "w-8 h-8",
        iconSize: "w-4 h-4",
        navGap: "gap-2",
        socialGap: "gap-3",
        showName: true,
      };
    } else if (windowSize.width < 768) {
      return {
        logoText: "text-[17px]",
        navItem: "text-[14px]",
        backButton: "text-[15px]",
        mobileItem: "text-[15px]",
        paddingX: "px-5",
        logoSize: "w-9 h-9",
        iconSize: "w-4 h-4",
        navGap: "gap-3",
        socialGap: "gap-3",
        showName: true,
      };
    } else if (windowSize.width < 868) {
      // Critical range: 768-868px
      return {
        logoText: "text-[17px]",
        navItem: "text-[13px]",
        backButton: "text-[15px]",
        mobileItem: "text-[15px]",
        paddingX: "px-6",
        logoSize: "w-9 h-9",
        iconSize: "w-4 h-4",
        navGap: "gap-1",
        socialGap: "gap-2",
        showName: false, // Hide name between 768-868px
      };
    } else if (windowSize.width < 968) {
      // Critical range: 868-968px
      return {
        logoText: "text-[18px]",
        navItem: "text-[13px]",
        backButton: "text-[16px]",
        mobileItem: "text-[16px]",
        paddingX: "px-6",
        logoSize: "w-9 h-9",
        iconSize: "w-4 h-4",
        navGap: "gap-2",
        socialGap: "gap-3",
        showName: false, // Hide name between 868-968px
      };
    } else if (windowSize.width < 1000) {
      // Critical range: 968-1000px
      return {
        logoText: "text-[18px]",
        navItem: "text-[14px]",
        backButton: "text-[16px]",
        mobileItem: "text-[16px]",
        paddingX: "px-7",
        logoSize: "w-10 h-10",
        iconSize: "w-5 h-5",
        navGap: "gap-3",
        socialGap: "gap-3",
        showName: false, // Hide name between 968-1000px
      };
    } else if (windowSize.width < 1024) {
      return {
        logoText: "text-[18px]",
        navItem: "text-[14px]",
        backButton: "text-[16px]",
        mobileItem: "text-[16px]",
        paddingX: "px-7",
        logoSize: "w-10 h-10",
        iconSize: "w-5 h-5",
        navGap: "gap-3",
        socialGap: "gap-3",
        showName: true, // Show name again from 1000px
      };
    } else if (windowSize.width < 1160) {
      // Critical range: 1024-1160px
      return {
        logoText: "text-[19px]",
        navItem: "text-[14px]",
        backButton: "text-[16px]",
        mobileItem: "text-[16px]",
        paddingX: "px-8",
        logoSize: "w-10 h-10",
        iconSize: "w-5 h-5",
        navGap: "gap-3",
        socialGap: "gap-3",
        showName: true,
      };
    } else if (windowSize.width < 1280) {
      return {
        logoText: "text-[19px]",
        navItem: "text-[15px]",
        backButton: "text-[17px]",
        mobileItem: "text-[17px]",
        paddingX: "px-9",
        logoSize: "w-10 h-10",
        iconSize: "w-5 h-5",
        navGap: "gap-4",
        socialGap: "gap-4",
        showName: true,
      };
    } else {
      return {
        logoText: "text-[20px]",
        navItem: "text-[16px]",
        backButton: "text-[17px]",
        mobileItem: "text-[17px]",
        paddingX: "px-10",
        logoSize: "w-10 h-10",
        iconSize: "w-5 h-5",
        navGap: "gap-6",
        socialGap: "gap-4",
        showName: true,
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  // Custom back button for project detail pages
  const getBackButton = () => {
    if (isProjectDetailPage) {
      return (
        <Link
          to="/projects"
          className="flex items-center gap-2 sm:gap-3 group transition-all duration-300 hover:scale-105"
        >
          <div
            className={`${responsiveStyles.logoSize} bg-[#915EFF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#7c4dff] group-hover:shadow-lg group-hover:shadow-[#915EFF]/30`}
          >
            <ArrowLeft
              className={`${responsiveStyles.iconSize} text-white transition-transform duration-300 group-hover:-translate-x-1`}
            />
          </div>
          <span
            className={`text-white font-semibold transition-all duration-300 group-hover:text-[#915EFF] ${responsiveStyles.backButton} hidden xs:block`}
          >
            Back to Projects
          </span>
        </Link>
      );
    }

    // Regular logo for home page and other pages
    return (
      <a
        href="#home"
        className="flex items-center gap-2 cursor-pointer group transition-all duration-300 hover:scale-105"
        onClick={() => setActive("")}
      >
        <img
          src={mk1}
          alt="logo"
          className={`${responsiveStyles.logoSize} rounded-full object-contain transition-all duration-300 group-hover:scale-110 bg-[#fff] group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-[#915EFF]/30`}
        />
        {responsiveStyles.showName && (
          <p
            className={`text-white font-bold cursor-pointer flex transition-all duration-300 group-hover:text-[#C3BFFB] ${responsiveStyles.logoText}`}
          >
            Melaku Adane
          </p>
        )}
      </a>
    );
  };

  return (
    <nav
      className={`${styles.paddingX} ${
        responsiveStyles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-50 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-2xl shadow-black/30"
          : "bg-transparent"
      } transition-all duration-500`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Back Button */}
        {getBackButton()}

        {/* Desktop Navigation - Hide on project detail pages */}
        {!isProjectDetailPage && (
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Navigation Links */}
            <ul
              className={`list-none hidden md:flex flex-row ${responsiveStyles.navGap}`}
            >
              {navLinks.map((nav) => (
                <li key={nav.id} className="relative group">
                  {isHomePage ? (
                    <ScrollLink
                      to={nav.id}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      onSetActive={() => setActive(nav.id)}
                      className={`flex items-center py-2 px-2 sm:px-3 cursor-pointer transition-all duration-300 ${
                        active === nav.id
                          ? "text-white font-semibold scale-105"
                          : "text-secondary hover:text-white hover:scale-105"
                      } ${responsiveStyles.navItem}`}
                    >
                      {nav.title}
                      <span
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] transition-all duration-500 group-hover:w-3/4 ${
                          active === nav.id ? "w-3/4" : ""
                        }`}
                      ></span>
                    </ScrollLink>
                  ) : (
                    <Link
                      to={`/#${nav.id}`}
                      className={`flex items-center py-2 px-2 sm:px-3 cursor-pointer transition-all duration-300 ${
                        active === nav.id
                          ? "text-white font-semibold scale-105"
                          : "text-secondary hover:text-white hover:scale-105"
                      } ${responsiveStyles.navItem}`}
                      onClick={() => handleNavClick(nav.id)}
                    >
                      {nav.title}
                      <span
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] transition-all duration-500 group-hover:w-3/4 ${
                          active === nav.id ? "w-3/4" : ""
                        }`}
                      ></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div
              className={`hidden md:flex items-center ${responsiveStyles.socialGap}`}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-all duration-300 hover:scale-110 p-1.5 sm:p-2 rounded-full hover:bg-[#915EFF]/10 group relative"
                  aria-label={social.name}
                >
                  {social.icon}
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </a>
              ))}

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="text-secondary hover:text-white transition-all duration-300 hover:scale-110 p-1.5 sm:p-2 rounded-full hover:bg-[#915EFF]/10 group relative"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun className={responsiveStyles.iconSize} />
                ) : (
                  <Moon className={responsiveStyles.iconSize} />
                )}
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation - Hide on project detail pages */}
        {!isProjectDetailPage && (
          <div className="md:hidden flex flex-1 justify-end items-center">
            <div className="relative">
              <div className="relative group">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-90"
                  onClick={() => setToggle(!toggle)}
                />
                {/* Hover effect dot */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#915EFF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Mobile Menu Dropdown */}
              <div
                className={`absolute top-10 right-0 w-72 xs:w-80 sm:w-96 bg-[#100d25]/95 backdrop-blur-xl border border-[#915EFF]/20 rounded-2xl shadow-2xl shadow-[#915EFF]/10 transition-all duration-500 ${
                  toggle
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible -translate-y-4 scale-95"
                }`}
              >
                <div className="p-4">
                  {/* Navigation Links */}
                  <ul className="flex flex-col gap-2 mb-4 pb-4 border-b border-[#915EFF]/20">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className="w-full transform transition-all duration-500"
                        style={{
                          transitionDelay: toggle ? `${index * 100}ms` : "0ms",
                        }}
                      >
                        {isHomePage ? (
                          <ScrollLink
                            to={nav.id}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={800}
                            onSetActive={() => setActive(nav.id)}
                            onClick={() => handleNavClick(nav.id)}
                            className={`block w-full py-3 px-4 rounded-xl text-center transition-all duration-300 transform ${
                              active === nav.id
                                ? "bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] text-white shadow-lg scale-105"
                                : "text-secondary hover:bg-[#915EFF]/10 hover:text-white hover:scale-105 hover:shadow-md"
                            } ${responsiveStyles.mobileItem}`}
                          >
                            {nav.title}
                          </ScrollLink>
                        ) : (
                          <Link
                            to={`/#${nav.id}`}
                            onClick={() => handleNavClick(nav.id)}
                            className={`block w-full py-3 px-4 rounded-xl text-center transition-all duration-300 transform ${
                              active === nav.id
                                ? "bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] text-white shadow-lg scale-105"
                                : "text-secondary hover:bg-[#915EFF]/10 hover:text-white hover:scale-105 hover:shadow-md"
                            } ${responsiveStyles.mobileItem}`}
                          >
                            {nav.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Social Icons */}
                  <div className="flex justify-center items-center gap-4 sm:gap-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#915EFF]/10"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                    {/* Dark Mode Toggle in Mobile */}
                    <button
                      onClick={toggleDarkMode}
                      className="text-secondary hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#915EFF]/10"
                      aria-label={darkMode ? "Light mode" : "Dark mode"}
                    >
                      {darkMode ? (
                        <Sun className="w-5 h-5" />
                      ) : (
                        <Moon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;