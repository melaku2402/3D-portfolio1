
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { mk1, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const location = useLocation();

//   // Track window size for responsive adjustments
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Check if we're on the home page or project detail page
//   const isHomePage = location.pathname === "/";
//   const isProjectDetailPage = location.pathname.startsWith("/project/");

//   const handleNavClick = (navId) => {
//     setActive(navId);
//     setToggle(false);
//   };

//   // Responsive font sizes based on window width
//   const getResponsiveStyles = () => {
//     if (windowSize.width < 640) {
//       return {
//         logoText: "text-[16px]",
//         navItem: "text-[13px]",
//         backButton: "text-[14px]",
//         mobileItem: "text-[14px]",
//         paddingX: "px-4",
//       };
//     } else if (windowSize.width < 768) {
//       return {
//         logoText: "text-[17px]",
//         navItem: "text-[14px]",
//         backButton: "text-[15px]",
//         mobileItem: "text-[15px]",
//         paddingX: "px-6",
//       };
//     } else if (windowSize.width < 1024) {
//       return {
//         logoText: "text-[18px]",
//         navItem: "text-[15px]",
//         backButton: "text-[16px]",
//         mobileItem: "text-[16px]",
//         paddingX: "px-8",
//       };
//     } else {
//       return {
//         logoText: "text-[20px]",
//         navItem: "text-[16px]",
//         backButton: "text-[17px]",
//         mobileItem: "text-[17px]",
//         paddingX: "px-10",
//       };
//     }
//   };

//   const responsiveStyles = getResponsiveStyles();

//   // Custom back button for project detail pages
//   const getBackButton = () => {
//     if (isProjectDetailPage) {
//       return (
//         <Link
//           to="/projects"
//           className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
//         >
//           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#915EFF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#7c4dff] group-hover:shadow-lg group-hover:shadow-[#915EFF]/30">
//             <svg
//               className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:-translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </div>
//           <span
//             className={`text-white font-semibold transition-all duration-300 group-hover:text-[#915EFF] ${responsiveStyles.backButton}`}
//           >
//             Back to Projects
//           </span>
//         </Link>
//       );
//     }

//     // Regular logo for home page and other pages
//     return (
//       <a
//         href="#home"
//         className="flex items-center gap-2 cursor-pointer group transition-all duration-300 hover:scale-105"
//         onClick={() => setActive("")}
//       >
//         <img
//           src={mk1}
//           alt="logo"
//           className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-[#915EFF]/30"
//         />
//         <p
//           className={`text-white font-bold cursor-pointer flex transition-all duration-300 group-hover:text-[#C3BFFB] ${responsiveStyles.logoText}`}
//         >
//           Melaku Adane
//         </p>
//       </a>
//     );
//   };

//   return (
//     <nav
//       className={`${styles.paddingX} ${
//         responsiveStyles.paddingX
//       } w-full flex items-center py-3 sm:py-4 md:py-5 fixed top-0 z-50 ${
//         scrolled
//           ? "bg-primary/95 backdrop-blur-lg shadow-2xl shadow-black/30"
//           : "bg-transparent"
//       } transition-all duration-500`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo/Back Button */}
//         {getBackButton()}

//         {/* Desktop Navigation - Hide on project detail pages */}
//         {!isProjectDetailPage && (
//           <ul className="list-none hidden md:flex flex-row gap-2 lg:gap-4 xl:gap-6">
//             {navLinks.map((nav) => (
//               <li key={nav.id} className="relative group">
//                 {isHomePage ? (
//                   <ScrollLink
//                     to={nav.id}
//                     spy={true}
//                     smooth={true}
//                     offset={-80}
//                     duration={800}
//                     onSetActive={() => setActive(nav.id)}
//                     className={`flex items-center py-2 px-3 lg:px-4 cursor-pointer transition-all duration-300 ${
//                       active === nav.id
//                         ? "text-white font-semibold scale-105"
//                         : "text-secondary hover:text-white hover:scale-105"
//                     } ${responsiveStyles.navItem}`}
//                   >
//                     {nav.title}
//                     <span
//                       className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] transition-all duration-500 group-hover:w-3/4 ${
//                         active === nav.id ? "w-3/4" : ""
//                       }`}
//                     ></span>
//                   </ScrollLink>
//                 ) : (
//                   <Link
//                     to={`/#${nav.id}`}
//                     className={`flex items-center py-2 px-3 lg:px-4 cursor-pointer transition-all duration-300 ${
//                       active === nav.id
//                         ? "text-white font-semibold scale-105"
//                         : "text-secondary hover:text-white hover:scale-105"
//                     } ${responsiveStyles.navItem}`}
//                     onClick={() => handleNavClick(nav.id)}
//                   >
//                     {nav.title}
//                     <span
//                       className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] transition-all duration-500 group-hover:w-3/4 ${
//                         active === nav.id ? "w-3/4" : ""
//                       }`}
//                     ></span>
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Mobile Navigation - Hide on project detail pages */}
//         {!isProjectDetailPage && (
//           <div className="md:hidden flex flex-1 justify-end items-center">
//             <div className="relative">
//               <div className="relative group">
//                 <img
//                   src={toggle ? close : menu}
//                   alt="menu"
//                   className="w-6 h-6 sm:w-7 sm:h-7 object-contain cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-90"
//                   onClick={() => setToggle(!toggle)}
//                 />
//                 {/* Hover effect dot */}
//                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#915EFF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>

//               {/* Mobile Menu Dropdown */}
//               <div
//                 className={`absolute top-10 right-0 w-48 sm:w-56 bg-[#100d25]/95 backdrop-blur-xl border border-[#915EFF]/20 rounded-2xl shadow-2xl shadow-[#915EFF]/10 transition-all duration-500 ${
//                   toggle
//                     ? "opacity-100 visible translate-y-0 scale-100"
//                     : "opacity-0 invisible -translate-y-4 scale-95"
//                 }`}
//               >
//                 <div className="p-2">
//                   <ul className="flex flex-col gap-1">
//                     {navLinks.map((nav, index) => (
//                       <li
//                         key={nav.id}
//                         className="w-full transform transition-all duration-500"
//                         style={{
//                           transitionDelay: toggle ? `${index * 100}ms` : "0ms",
//                         }}
//                       >
//                         {isHomePage ? (
//                           <ScrollLink
//                             to={nav.id}
//                             spy={true}
//                             smooth={true}
//                             offset={-80}
//                             duration={800}
//                             onSetActive={() => setActive(nav.id)}
//                             onClick={() => handleNavClick(nav.id)}
//                             className={`block w-full py-3 px-4 rounded-xl text-center transition-all duration-300 transform ${
//                               active === nav.id
//                                 ? "bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] text-white shadow-lg scale-105"
//                                 : "text-secondary hover:bg-[#915EFF]/10 hover:text-white hover:scale-105 hover:shadow-md"
//                             } ${responsiveStyles.mobileItem}`}
//                           >
//                             {nav.title}
//                           </ScrollLink>
//                         ) : (
//                           <Link
//                             to={`/#${nav.id}`}
//                             onClick={() => handleNavClick(nav.id)}
//                             className={`block w-full py-3 px-4 rounded-xl text-center transition-all duration-300 transform ${
//                               active === nav.id
//                                 ? "bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] text-white shadow-lg scale-105"
//                                 : "text-secondary hover:bg-[#915EFF]/10 hover:text-white hover:scale-105 hover:shadow-md"
//                             } ${responsiveStyles.mobileItem}`}
//                           >
//                             {nav.title}
//                           </Link>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Mobile menu footer */}
//                 <div className="border-t border-[#915EFF]/20 p-3">
//                   <div className="text-center">
//                     <p className="text-[#C3BFFB] text-xs opacity-70">
//                       Portfolio v1.0
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

      
//     </nav>
//   );
// };

// export default Navbar;

// {
//   /* Progress bar for scroll */
// }
// // {
// //   scrolled && (
// //     <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] opacity-50"></div>
// //   );
// // }

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
    }
  
  ];

  // Responsive font sizes based on window width
  const getResponsiveStyles = () => {
    if (windowSize.width < 640) {
      return {
        logoText: "text-[16px]",
        navItem: "text-[13px]",
        backButton: "text-[14px]",
        mobileItem: "text-[14px]",
        paddingX: "px-4",
      };
    } else if (windowSize.width < 768) {
      return {
        logoText: "text-[17px]",
        navItem: "text-[14px]",
        backButton: "text-[15px]",
        mobileItem: "text-[15px]",
        paddingX: "px-6",
      };
    } else if (windowSize.width < 1024) {
      return {
        logoText: "text-[18px]",
        navItem: "text-[15px]",
        backButton: "text-[16px]",
        mobileItem: "text-[16px]",
        paddingX: "px-8",
      };
    } else {
      return {
        logoText: "text-[20px]",
        navItem: "text-[16px]",
        backButton: "text-[17px]",
        mobileItem: "text-[17px]",
        paddingX: "px-10",
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
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#915EFF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#7c4dff] group-hover:shadow-lg group-hover:shadow-[#915EFF]/30">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:-translate-x-1" />
          </div>
          <span
            className={`text-white font-semibold transition-all duration-300 group-hover:text-[#915EFF] ${responsiveStyles.backButton}`}
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
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-[#915EFF]/30"
        />
        <p
          className={`text-white font-bold cursor-pointer flex transition-all duration-300 group-hover:text-[#C3BFFB] ${responsiveStyles.logoText}`}
        >
          Melaku Adane
        </p>
      </a>
    );
  };

  return (
    <nav
      className={`${styles.paddingX} ${
        responsiveStyles.paddingX
      } w-full flex items-center py-3 sm:py-4 md:py-5 fixed top-0 z-50 ${
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
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Navigation Links - Now placed BEFORE social icons */}
            <ul className="list-none hidden md:flex flex-row gap-2 lg:gap-4 xl:gap-6">
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
                      className={`flex items-center py-2 px-3 lg:px-4 cursor-pointer transition-all duration-300 ${
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
                      className={`flex items-center py-2 px-3 lg:px-4 cursor-pointer transition-all duration-300 ${
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

            {/* Social Icons - Now placed AFTER navigation links */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#915EFF]/10 group relative"
                  aria-label={social.name}
                >
                  {social.icon}
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="text-secondary hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#915EFF]/10 group relative"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
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
                className={`absolute top-10 right-0 w-56 sm:w-64 bg-[#100d25]/95 backdrop-blur-xl border border-[#915EFF]/20 rounded-2xl shadow-2xl shadow-[#915EFF]/10 transition-all duration-500 ${
                  toggle
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible -translate-y-4 scale-95"
                }`}
              >
                <div className="p-3">
                  {/* Navigation Links - First in mobile menu */}
                  <ul className="flex flex-col gap-1 mb-3 pb-3 border-b border-[#915EFF]/20">
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

                  {/* Social Icons - After navigation in mobile menu */}
                  <div className="flex justify-center gap-4">
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

                {/* Mobile menu footer */}
                <div className="border-t border-[#915EFF]/20 p-3">
                  <div className="text-center">
                    <p className="text-[#C3BFFB] text-xs opacity-70">
                      Portfolio v1.0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress bar for scroll */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#915EFF] to-[#C3BFFB] opacity-50"></div>
      )}
    </nav>
  );
};

export default Navbar;