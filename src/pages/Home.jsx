

// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";
// // import mkk2 from "./assets/mkk2.png";
// // Using Lucide React icons for programming languages
// import {
//   SiJavascript,
//   SiReact,
//   SiPython,
//   SiNodedotjs,
//   SiTypescript,
//   SiHtml5,
//   SiCss3,
//   SiMongodb,
// } from "react-icons/si";

// // Remove the problematic import
// // import melaku_avatar from "./assets/melaku_avatar.png";

// const programmingIcons = [
//   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
//   { name: "React", icon: SiReact, color: "#61DAFB" },
//   { name: "Python", icon: SiPython, color: "#3776AB" },
//   { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
//   { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
//   { name: "HTML", icon: SiHtml5, color: "#E34F26" },
//   { name: "CSS", icon: SiCss3, color: "#1572B6" },
//   { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
// ];

// const Home = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentPhase, setCurrentPhase] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   const phases = [
//     "analysis",
//     "elicitation",
//     "design",
//     "implementation",
//     "testing",
//     "maintenance",
//   ];

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => {
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   // Typing animation for software development phases
//   useEffect(() => {
//     const currentPhaseText = phases[currentPhase];

//     const timeout = setTimeout(
//       () => {
//         if (!isDeleting) {
//           // Typing phase
//           if (displayText.length < currentPhaseText.length) {
//             setDisplayText(currentPhaseText.slice(0, displayText.length + 1));
//           } else {
//             // Wait before starting to delete
//             setTimeout(() => {
//               setIsDeleting(true);
//             }, 1500);
//           }
//         } else {
//           // Deleting phase
//           if (displayText.length > 0) {
//             setDisplayText(displayText.slice(0, displayText.length - 1));
//           } else {
//             // Move to next phase after deletion complete
//             setIsDeleting(false);
//             setCurrentPhase((prev) => (prev + 1) % phases.length);
//           }
//         }
//       },
//       isDeleting ? 50 : 100
//     );

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, currentPhase, phases]);

//   // Function to handle View Works click - scroll to projects section
//   const handleViewWorks = () => {
//     const projectsSection = document.getElementById("projects");
//     if (projectsSection) {
//       projectsSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     } else {
//       const aboutSection = document.getElementById("about");
//       if (aboutSection) {
//         aboutSection.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }
//   };

//   const handleViewResume = () => {
//     const resumeUrl = "/resume.pdf";

//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Melaku_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto overflow-hidden">
//       <style jsx>{`
//         @keyframes circularRotate {
//           0% {
//             transform: rotate(0deg) translateX(${isMobile ? "60px" : "120px"})
//               rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg) translateX(${isMobile ? "60px" : "120px"})
//               rotate(-360deg);
//           }
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         /* New Keyframes for Image Float */
//         @keyframes imageFloat {
//           0%,
//           100% {
//             transform: translateY(0) scale(1);
//           }
//           50% {
//             transform: translateY(-8px) scale(1.02);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes scrollBounce {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(10px);
//           }
//         }

//         @keyframes dotPulse {
//           0%,
//           100% {
//             transform: scale(1);
//             boxshadow: "0 0 0 0 rgba(145, 94, 255, 0.7)";
//           }
//           50% {
//             transform: scale(1.2);
//             boxshadow: "0 0 0 10px rgba(145, 94, 255, 0)";
//           }
//         }

//         @keyframes buttonGlow {
//           0%,
//           100% {
//             box-shadow: 0 0 5px rgba(145, 94, 255, 0.5);
//           }
//           50% {
//             box-shadow: 0 0 20px rgba(145, 94, 255, 0.8);
//           }
//         }

//         @keyframes cursorBlink {
//           0%,
//           50% {
//             opacity: 1;
//           }
//           51%,
//           100% {
//             opacity: 0;
//           }
//         }

//         .animate-circular-rotate {
//           animation: circularRotate 20s linear infinite;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         /* New Utility Class for Image Float */
//         .animate-image-float {
//           animation: imageFloat 4s ease-in-out infinite;
//         }

//         .animate-scroll-bounce {
//           animation: scrollBounce 1.5s ease-in-out infinite;
//         }

//         .animate-dot-pulse {
//           animation: dotPulse 2s ease-in-out infinite;
//         }

//         .animate-button-glow {
//           animation: buttonGlow 2s ease-in-out infinite;
//         }

//         .animate-cursor-blink {
//           animation: cursorBlink 1s infinite;
//         }

//         .icon-delay-0 {
//           animation-delay: 0s;
//         }
//         .icon-delay-1 {
//           animation-delay: -2.5s;
//         }
//         .icon-delay-2 {
//           animation-delay: -5s;
//         }
//         .icon-delay-3 {
//           animation-delay: -7.5s;
//         }
//         .icon-delay-4 {
//           animation-delay: -10s;
//         }
//         .icon-delay-5 {
//           animation-delay: -12.5s;
//         }
//         .icon-delay-6 {
//           animation-delay: -15s;
//         }
//         .icon-delay-7 {
//           animation-delay: -17.5s;
//         }
//       `}</style>

//       {/* Main Content */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF] animate-dot-pulse" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div
//           className={`transition-all duration-300 ${
//             isMobile ? "w-full" : "w-2/3"
//           }`}
//           style={{
//             animation: "fadeInLeft 0.8s ease-out",
//           }}
//         >
//           <h1 className={`${styles.heroHeadText} text-[#C3BFFB]`}>
//             Hi, I'm <span className="text-[#915EFF]">Melaku</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-[#C3BFFB]-100`}>
//             Software Engineer, User <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>

//           {/* Animated Software Development Lifecycle */}
//           <div className="mt-6 mb-8">
//             <div className="flex items-center justify-start">
//               <span className="text-[#C3BFFB] text-lg sm:text-xl font-medium mr-2">
//                 SDLC:
//               </span>
//               <div className="text-[#915EFF] text-lg sm:text-xl font-bold min-h-[28px] flex items-center">
//                 {displayText}
//                 <span className="animate-cursor-blink ml-1">|</span>
//               </div>
//             </div>
//             {/* Progress indicator */}
//             <div className="mt-2 flex space-x-1">
//               {phases.map((phase, index) => (
//                 <div
//                   key={index}
//                   className={`h-1 rounded-full transition-all duration-300 ${
//                     index === currentPhase && !isDeleting
//                       ? "bg-[#915EFF] w-4"
//                       : index < currentPhase
//                       ? "bg-[#C3BFFB] w-3"
//                       : "bg-[#C3BFFB] bg-opacity-30 w-2"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Buttons Container with increased margin */}
//           <div className="mt-12 flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={handleViewWorks}
//               className="px-6 py-3 sm:px-8 sm:py-3 rounded-lg bg-[#915EFF] text-white font-bold 
//                          hover:bg-[#7B4BEB] transition-all duration-300 
//                          hover:scale-105 animate-button-glow
//                          border-2 border-[#915EFF] hover:border-[#C3BFFB]
//                          flex items-center justify-center gap-2 text-sm sm:text-base"
//             >
//               <span>View Works</span>
//               <svg
//                 className="w-4 h-4 sm:w-5 sm:h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                 />
//               </svg>
//             </button>

//             <button
//               onClick={handleViewResume}
//               className="px-6 py-3 sm:px-8 sm:py-3 rounded-lg bg-transparent text-[#C3BFFB] font-bold 
//                          border-2 border-[#C3BFFB] hover:bg-[#C3BFFB] 
//                          hover:text-[#915EFF] transition-all duration-300 
//                          hover:scale-105 animate-float
//                          flex items-center justify-center gap-2 text-sm sm:text-base"
//             >
//               <span>My Resume</span>
//               <svg
//                 className="w-4 h-4 sm:w-5 sm:h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Centered Avatar Image - Using placeholder
//       <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
//         <div
//           className={`
//             w-48 h-48
//             md:w-64 md:h-64
//             lg:w-80 lg:h-80
//             xl:w-96 xl:h-96
//             animate-image-float 
//             rounded-full
//             bg-gradient-to-br from-[#915EFF] to-[#C3BFFB]
//             flex items-center justify-center
//             text-white font-bold text-2xl md:text-4xl
//             border-4 border-white/20
//             shadow-2xl
//             ${isMobile ? "opacity-80" : "opacity-100"}
//           `}
//         >
//           MA
//         </div>
//       </div> */}


//       {/* Rotating Programming Icons Container - Adjusted for centered avatar */}
//       <div
//         className={`absolute ${
//           isMobile ? "right-4" : "right-8"
//         } top-1/2 transform -translate-y-1/2 flex items-center justify-center`}
//       >
//         {/* Central glowing point */}
//         <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#915EFF] rounded-full animate-pulse" />

//         {/* Rotating Icons */}
//         {programmingIcons.map((tech, index) => {
//           const IconComponent = tech.icon;
//           return (
//             <div
//               key={tech.name}
//               className={`absolute animate-circular-rotate icon-delay-${index}`}
//             >
//               <div
//                 className="rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/20 bg-black/60 backdrop-blur-sm p-2 sm:p-3 hover:scale-125 transition-transform duration-300 animate-float"
//                 style={{
//                   color: tech.color,
//                 }}
//               >
//                 <IconComponent size={isMobile ? 16 : 24} />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute xs:bottom-10 sm:bottom-5 bottom-32 w-full flex justify-center items-center z-10">
//         <Link to="about" smooth={true} duration={500}>
//           <div className="w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 sm:p-2 cursor-pointer bg-black/20 backdrop-blur-sm hover:scale-110 transition-transform duration-200">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1 animate-scroll-bounce" />
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// Using Lucide React icons for programming languages
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
} from "react-icons/si";

const programmingIcons = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const steps = [
    "analysis",
    "elicitation",
    "design",
    "implementation",
    "testing",
    "maintenance",
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Fixed animation: Type all steps sequentially with line break after implementation
  useEffect(() => {
    if (currentStep >= steps.length) return;

    const timeout = setTimeout(() => {
      const currentStepText = steps[currentStep];

      // Build the text up to current step
      let newText = "";
      for (let i = 0; i <= currentStep; i++) {
        newText += steps[i];
        if (i < currentStep) {
          // Add arrow for all except last step in current sequence
          newText += " → ";
        }
      }

      // Add line break after implementation (step 3)
      if (currentStep >= 3) {
        // Find the position after "implementation" and insert line break
        const firstLine = steps.slice(0, 4).join(" → ");
        const secondLine = steps.slice(4, currentStep + 1).join(" → ");
        newText = firstLine + "\n" + secondLine;
      }

      setDisplayText(newText);

      // Move to next step after a delay
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 800);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentStep, steps]);

  // Reset animation when all steps are completed
  useEffect(() => {
    if (currentStep >= steps.length) {
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentStep(0);
      }, 2000); // Wait 2 seconds before restarting

      return () => clearTimeout(resetTimeout);
    }
  }, [currentStep, steps.length]);

  // Function to handle View Works click - scroll to projects section
  const handleViewWorks = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleViewResume = () => {
    const resumeUrl = "/resume.pdf";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Melaku_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <style jsx>{`
        @keyframes circularRotate {
          0% {
            transform: rotate(0deg) translateX(${isMobile ? "60px" : "120px"})
              rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(${isMobile ? "60px" : "120px"})
              rotate(-360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* New Keyframes for Image Float */
        @keyframes imageFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scrollBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
            boxshadow: "0 0 0 0 rgba(145, 94, 255, 0.7)";
          }
          50% {
            transform: scale(1.2);
            boxshadow: "0 0 0 10px rgba(145, 94, 255, 0)";
          }
        }

        @keyframes buttonGlow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(145, 94, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(145, 94, 255, 0.8);
          }
        }

        @keyframes cursorBlink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .animate-circular-rotate {
          animation: circularRotate 20s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* New Utility Class for Image Float */
        .animate-image-float {
          animation: imageFloat 4s ease-in-out infinite;
        }

        .animate-scroll-bounce {
          animation: scrollBounce 1.5s ease-in-out infinite;
        }

        .animate-dot-pulse {
          animation: dotPulse 2s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: buttonGlow 2s ease-in-out infinite;
        }

        .animate-cursor-blink {
          animation: cursorBlink 1s infinite;
        }

        .icon-delay-0 {
          animation-delay: 0s;
        }
        .icon-delay-1 {
          animation-delay: -2.5s;
        }
        .icon-delay-2 {
          animation-delay: -5s;
        }
        .icon-delay-3 {
          animation-delay: -7.5s;
        }
        .icon-delay-4 {
          animation-delay: -10s;
        }
        .icon-delay-5 {
          animation-delay: -12.5s;
        }
        .icon-delay-6 {
          animation-delay: -15s;
        }
        .icon-delay-7 {
          animation-delay: -17.5s;
        }
      `}</style>

      {/* Main Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] animate-dot-pulse" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div
          className={`transition-all duration-300 ${
            isMobile ? "w-full" : "w-2/3"
          }`}
          style={{
            animation: "fadeInLeft 0.8s ease-out",
          }}
        >
          <h1 className={`${styles.heroHeadText} text-[#C3BFFB]`}>
            Hi, I'm <span className="text-[#915EFF]">Melaku</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#C3BFFB]-100`}>
            Software Engineer, User <br className="sm:block hidden" />
            interfaces and web applications
          </p>

          {/* Animated Software Development Lifecycle */}
          <div className="mt-6 mb-8">
            <div className="flex items-start justify-start">
              <span className="text-[#C3BFFB] text-lg sm:text-xl font-medium mr-2 mt-1">
                SDLC:
              </span>
              <div className="text-[#915EFF] text-lg sm:text-xl font-bold min-h-[56px] flex flex-col">
                <div className="whitespace-pre-line leading-relaxed">
                  {displayText}
                  <span className="animate-cursor-blink ml-1">|</span>
                </div>
              </div>
            </div>
            {/* Progress indicator */}
            <div className="mt-2 flex space-x-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "bg-[#915EFF] w-4"
                      : index < currentStep
                      ? "bg-[#C3BFFB] w-3"
                      : "bg-[#C3BFFB] bg-opacity-30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Buttons Container with increased margin */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleViewWorks}
              className="px-6 py-3 sm:px-8 sm:py-3 rounded-lg bg-[#915EFF] text-white font-bold 
                         hover:bg-[#7B4BEB] transition-all duration-300 
                         hover:scale-105 animate-button-glow
                         border-2 border-[#915EFF] hover:border-[#C3BFFB]
                         flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>View Works</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>

            <button
              onClick={handleViewResume}
              className="px-6 py-3 sm:px-8 sm:py-3 rounded-lg bg-transparent text-[#C3BFFB] font-bold 
                         border-2 border-[#C3BFFB] hover:bg-[#C3BFFB] 
                         hover:text-[#915EFF] transition-all duration-300 
                         hover:scale-105 animate-float
                         flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>My Resume</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Centered Avatar Image - Using placeholder */}
      <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          className={`
            w-48 h-48
            md:w-64 md:h-64
            lg:w-80 lg:h-80
            xl:w-96 xl:h-96
            animate-image-float 
            rounded-full
            bg-gradient-to-br from-[#915EFF] to-[#C3BFFB]
            flex items-center justify-center
            text-white font-bold text-2xl md:text-4xl
            border-4 border-white/20
            shadow-2xl
            ${isMobile ? "opacity-80" : "opacity-100"}
          `}
        >
          MA
        </div>
      </div>

      {/* Rotating Programming Icons Container - Adjusted for centered avatar */}
      <div
        className={`absolute ${
          isMobile ? "right-4" : "right-8"
        } top-1/2 transform -translate-y-1/2 flex items-center justify-center`}
      >
        {/* Central glowing point */}
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#915EFF] rounded-full animate-pulse" />

        {/* Rotating Icons */}
        {programmingIcons.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={tech.name}
              className={`absolute animate-circular-rotate icon-delay-${index}`}
            >
              <div
                className="rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/20 bg-black/60 backdrop-blur-sm p-2 sm:p-3 hover:scale-125 transition-transform duration-300 animate-float"
                style={{
                  color: tech.color,
                }}
              >
                <IconComponent size={isMobile ? 16 : 24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 sm:bottom-5 bottom-32 w-full flex justify-center items-center z-10">
        <Link to="about" smooth={true} duration={500}>
          <div className="w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 sm:p-2 cursor-pointer bg-black/20 backdrop-blur-sm hover:scale-110 transition-transform duration-200">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1 animate-scroll-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;