
// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";

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

  
//   const steps = [
//     ' Planning and Analysis',
//     "Requirements Gathering",
//     "Design",
//     "design",
//     "Implementation",
//     "Testing and Integration",
//     "Deployment and Maintenance",
//   ];

//   const [isMobile, setIsMobile] = useState(false);
//   const [displayText, setDisplayText] = useState("");
//   const [stepIndex, setStepIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [showSecondText, setShowSecondText] = useState(false);

//   // ----------------------------
//   // RESPONSIVE CHECK
//   // ----------------------------
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   // ----------------------------
//   // FIXED LETTER-BY-LETTER TYING
//   // ----------------------------
//   useEffect(() => {
//     if (stepIndex >= steps.length) {
//       setTimeout(() => {
//         setDisplayText("");
//         setStepIndex(0);
//         setCharIndex(0);
//         setShowSecondText(false);
//       }, 2000);
//       return;
//     }

//     const word = steps[stepIndex];

//     if (charIndex < word.length) {
//       const timeout = setTimeout(() => {
//         const typedWord = word.slice(0, charIndex + 1);

//         // Build full text up to current step
//         let text = steps.slice(0, stepIndex).join(" → ");
//         if (stepIndex > 0) text += " → ";
//         text += typedWord;

//         // Line-break after "implementation"
//         if (stepIndex >= 4) {
//           const line1 = steps.slice(0, 4).join(" → ");
//           const line2 = text.replace(line1 + " → ", "").trim() || typedWord;
//           text = line1 + "\n" + line2;
//         }

//         setDisplayText(text);
//         setCharIndex((c) => c + 1);
//       }, 80);

//       return () => clearTimeout(timeout);
//     }

//     const nextStepTimeout = setTimeout(() => {
//       if (stepIndex === 3) setShowSecondText(true);
//       setStepIndex((i) => i + 1);
//       setCharIndex(0);
//     }, 500);

//     return () => clearTimeout(nextStepTimeout);
//   }, [charIndex, stepIndex]);

//   // ----------------------------
//   // HANDLERS
//   // ----------------------------
//   const handleViewWorks = () => {
//     const proj = document.getElementById("projects");
//     const about = document.getElementById("about");

//     if (proj) proj.scrollIntoView({ behavior: "smooth" });
//     else if (about) about.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleViewResume = () => {
//     const url = "/resume.pdf";
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "Melaku_Resume.pdf";
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
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
//         .animate-cursor-blink {
//           animation: cursorBlink 1s infinite;
//         }
//       `}</style>

//       {/* CONTENT */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* DOT BAR */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         {/* HERO TEXT */}
//         <div className={`${isMobile ? "w-full" : "w-2/3"}`}>
//           <h1 className={`${styles.heroHeadText} text-[#C3BFFB]`}>
//             Hi, I'm <span className="text-[#915EFF]">Melaku</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-[#C3BFFB]`}>
//             Software Engineer, User <br className="sm:block hidden" />
//             Interfaces and Web Applications
//           </p>

//           {/* FIXED SDLC CONTAINER */}
//           <div className="mt-6 mb-8">
//             <div className="flex items-start">
//               <span className="text-[#C3BFFB] text-lg font-medium mr-2 mt-1 min-w-[50px]">
//                 SDLC:
//               </span>
//               <div
//                 className="text-[#DFD9FF] text-lg font-bold whitespace-pre-line leading-relaxed min-h-[60px] flex items-start"
//                 style={{ height: "auto" }}
//               >
//                 {displayText}
//                 {/* <span className="animate-cursor-blink ml-1">|</span> */}
//               </div>
//             </div>

//             {/* SUBTEXT */}
//             <div
//               className={`mt-2 transition-all duration-700 ${
//                 showSecondText
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-2"
//               }`}
//             >
//               <p className="text-[#C3BFFB] text-sm italic">
//                 Following industry best practices to deliver robust solutions
//               </p>
//             </div>
//           </div>

//           {/* FIXED BUTTONS CONTAINER */}
//           <div className="mt-12 flex gap-4 flex-wrap">
//             <button
//               onClick={handleViewWorks}
//               className="px-6 py-3 rounded-lg bg-[#915EFF] text-white font-bold hover:bg-[#7B4BEB] hover:scale-105 transition-all text-sm sm:text-base sm:px-8"
//             >
//               View Works
//             </button>

//             <button
//               onClick={handleViewResume}
//               className="px-6 py-3 rounded-lg border-2 border-[#C3BFFB] text-[#C3BFFB] font-bold hover:bg-[#C3BFFB] hover:text-[#915EFF] hover:scale-105 transition-all text-sm sm:text-base sm:px-8"
//             >
//               My Resume
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ROTATING ICONS */}
//       <div
//         className={`absolute ${
//           isMobile ? "right-4" : "right-8"
//         } top-1/2 -translate-y-1/2`}
//       >
//         <div className="w-4 h-4 bg-[#915EFF] rounded-full" />
//         {programmingIcons.map((tech, i) => {
//           const Icon = tech.icon;
//           return (
//             <div
//               key={i}
//               className={`absolute animate-circular-rotate`}
//               style={{ animationDelay: `-${i * 2.5}s` }}
//             >
//               <div
//                 className="rounded-full bg-black/60 backdrop-blur-sm p-3 border border-white/20 shadow-xl animate-float"
//                 style={{ color: tech.color }}
//               >
//                 <Icon size={isMobile ? 16 : 24} />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* SCROLL ICON */}
//       <div className="absolute bottom-10 w-full flex justify-center">
//         <Link to="about" smooth duration={500}>
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center p-2 cursor-pointer">
//             <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" />
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Home;import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

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
import { useEffect, useState } from "react";

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
  const processes = [
    {
      name: "SDLC",
      steps: [
        "Requirements Analysis & Planning",
        "System Architecture Design",
        "Agile Development",
        "Quality Assurance",
        "Deployment & DevOps",
        "Maintenance & Support",
      ]
    },
    {
      name: "AI",
      steps: [
        "Data Collection & Preparation",
        "Model Research & Selection",
        "Training & Optimization",
        "Evaluation & Validation",
        "Deployment & Integration",
        "Continuous Learning",
      ]
    },
    {
      name: "MOBILE",
      steps: [
        "Platform Strategy & Planning",
        "Mobile-First Design",
        "Native Development",
        "Device Testing",
        "Store Deployment",
        "Analytics & Updates",
      ]
    },
    {
      name: "TECH CONSULTING",
      steps: [
        "Strategy & Vision Setting",
        "Resource Planning",
        "Agile Execution",
        "Risk Management",
        "Stakeholder Communication",
        "Delivery & Transition",
      ]
    }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [processIndex, setProcessIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showSecondText, setShowSecondText] = useState(false);
  const [currentProcessName, setCurrentProcessName] = useState("");

  // ----------------------------
  // RESPONSIVE CHECK
  // ----------------------------
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ----------------------------
  // INFINITE PROCESS CYCLING
  // ----------------------------
  useEffect(() => {
    const currentProcess = processes[processIndex];
    const currentSteps = currentProcess.steps;

    // Set current process name
    setCurrentProcessName(currentProcess.name);

    if (stepIndex >= currentSteps.length) {
      // Move to next process
      setTimeout(() => {
        setProcessIndex((prev) => (prev + 1) % processes.length);
        setStepIndex(0);
        setCharIndex(0);
        setShowSecondText(false);
      }, 1500);
      return;
    }

    const currentStep = currentSteps[stepIndex];

    if (charIndex < currentStep.length) {
      const timeout = setTimeout(() => {
        const typedStep = currentStep.slice(0, charIndex + 1);

        // Build display text with steps only (process name shown separately)
        let text = currentSteps.slice(0, stepIndex).join(" → ");
        if (stepIndex > 0) text += " → ";
        text += typedStep;

        setDisplayText(text);
        setCharIndex((c) => c + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }

    // Move to next step
    const nextStepTimeout = setTimeout(() => {
      if (stepIndex === 0) setShowSecondText(true);
      setStepIndex((i) => i + 1);
      setCharIndex(0);
    }, 800);

    return () => clearTimeout(nextStepTimeout);
  }, [charIndex, stepIndex, processIndex]);

  // ----------------------------
  // HANDLERS
  // ----------------------------
  const handleViewWorks = () => {
    const proj = document.getElementById("projects");
    const about = document.getElementById("about");

    if (proj) proj.scrollIntoView({ behavior: "smooth" });
    else if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewResume = () => {
    const url = "/resume.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.download = "Melaku_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
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
        .animate-cursor-blink {
          animation: cursorBlink 1s infinite;
        }
      `}</style>

      {/* CONTENT */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* DOT BAR */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* HERO TEXT */}
        <div className={`${isMobile ? "w-full" : "w-2/3"}`}>
          <h1 className={`${styles.heroHeadText} text-[#C3BFFB]`}>
            Hi, I'm <span className="text-[#915EFF]">Melaku</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#C3BFFB] font-semibold`}>
            Software Engineer, User <br className="sm:block hidden" />
            Interfaces and Web Applications
          </p>

          {/* DYNAMIC PROCESS CONTAINER */}
          <div className="mt-6 mb-8">
            <div className="flex items-start">
              <div className="text-[#915EFF] text-lg font-bold mb-1 px-2">
                {currentProcessName}
              </div>
              <div className="flex flex-col">
                {/* Dynamic Process Name */}
                <span className="text-[#C3BFFB] text-lg font-medium font-serif mr-2 mt-1 px-2 min-w-[50px]">
                  Process:-
                </span>
                {/* Process Steps */}
                <div
                  className="text-[#C3BFFB] text-lg font-serif whitespace-pre-line leading-relaxed min-h-[60px] flex items-start"
                  style={{ height: "auto" }}
                >
                  {displayText}
                  <span className="animate-cursor-blink ml-1">|</span>
                </div>
              </div>
            </div>

            {/* SUBTEXT */}
            <div
              className={`mt-2 transition-all duration-700 ${
                showSecondText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <p className="text-[#C3BFFB] text-sm italic">
                Following industry best practices across multiple domains
              </p>
            </div>
          </div>

          {/* FIXED BUTTONS CONTAINER */}
          <div className="mt-12 flex gap-4 flex-wrap">
            <button
              onClick={handleViewWorks}
              className="px-6 py-3 rounded-lg bg-[#915EFF] text-white font-bold hover:bg-[#7B4BEB] hover:scale-105 transition-all text-sm sm:text-base sm:px-8"
            >
              View Works
            </button>

            <button
              onClick={handleViewResume}
              className="px-6 py-3 rounded-lg border-2 border-[#C3BFFB] text-[#C3BFFB] font-bold hover:bg-[#C3BFFB] hover:text-[#915EFF] hover:scale-105 transition-all text-sm sm:text-base sm:px-8"
            >
              My Resume
            </button>
          </div>
        </div>
      </div>

      {/* ROTATING ICONS */}
      <div
        className={`absolute ${
          isMobile ? "right-4" : "right-8"
        } top-1/2 -translate-y-1/2`}
      >
        <div className="w-4 h-4 bg-[#915EFF] rounded-full" />
        {programmingIcons.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={i}
              className={`absolute animate-circular-rotate`}
              style={{ animationDelay: `-${i * 2.5}s` }}
            >
              <div
                className="rounded-full bg-black/60 backdrop-blur-sm p-3 border border-white/20 shadow-xl animate-float"
                style={{ color: tech.color }}
              >
                <Icon size={isMobile ? 16 : 24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* SCROLL ICON */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <Link to="about" smooth duration={500}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center p-2 cursor-pointer">
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
