
// //ONLY REACT CODE
// import React, { useState, useEffect, useRef } from "react";
// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";
// import { github } from "../assets";
// import { projects } from "../constants";
// import { Link } from "react-router-dom";

// const ProjectCard = ({
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   project_id,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "-50px 0px -50px 0px",
//       }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "scale(1)" : "scale(0.9)",
//         transition: "all 0.5s ease-out",
//       }}
//       className="w-full h-full flex-shrink-0 mx-auto"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={`relative bg-[#151722] border border-gray-800 
//         rounded-2xl p-2 md:p-3 text-center 
//         transition-all duration-300 shadow-lg ${
//           isHovered
//             ? "transform scale-105 shadow-2xl border-[#915EFF]"
//             : "transform scale-100 shadow-lg border-transparent"
//         }`}
//       >
//         {/* Image Section */}
//         <div className="relative h-48 overflow-hidden">
//           <img
//             src={image}
//             alt={name}
//             className={`w-full h-full object-cover transition-transform duration-700 rounded-2xl ${
//               isHovered ? "scale-110" : "scale-100"
//             }`}
//           />
          
//           {/* GitHub Icon */}
//           <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-700 shadow-lg">
//             <img
//               src={github}
//               alt="source code"
//               className="w-3/4 h-3/4 object-contain"
//               onClick={() => window.open(source_code_link, "_blank")}
//             />
//           </div>

//           {/* Title Overlay */}
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//             <h3 className="text-xl font-bold text-white text-left">
//               {name}
//             </h3>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="p-6">
//           <p className="text-[#C3BFFB] text-sm leading-relaxed mb-6 line-clamp-3 text-left">
//             {description}
//           </p>

//           {/* Tags with Icons */}
//           <div className="flex flex-wrap gap-2 mb-6 justify-start">
//             {tags.map((tag) => {
//               const IconComponent = tag.icon;
//               return (
//                 <div
//                   key={`${name}-${tag.name}`}
//                   className={`px-3 py-2 rounded-full bg-black/30 backdrop-blur-sm ${tag.color} border border-gray-700 flex items-center gap-2 transition-all duration-300 hover:scale-105`}
//                 >
//                   <IconComponent className="w-4 h-4" />
//                 </div>
//               );
//             })}
//           </div>

//           {/* View Details Button */}
//           <Link to={`/project/${project_id}`} className="block w-full">
//             <button
//               className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent hover:bg-[#7f56f1] hover:text-white hover:border-[#7d4dff]`}
//             >
//               View Details
//               <svg
//                 className={`w-4 h-4 transition-transform duration-300 ${
//                   isHovered ? "translate-x-1" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const headerRef = useRef(null);
//   const carouselRef = useRef(null);

//   // Duplicate projects for seamless loop
//   const duplicatedProjects = [...projects, ...projects];

//   // Auto carousel effect - continuous loop
//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       if (carouselRef.current) {
//         const carousel = carouselRef.current;
//         const scrollWidth = carousel.scrollWidth / 2;
//         const currentScroll = carousel.scrollLeft;

//         // Calculate card width based on screen size
//         let cardWidth;
//         if (window.innerWidth < 640) {
//           cardWidth = 320 + 16; // card width + gap for mobile
//         } else if (window.innerWidth < 768) {
//           cardWidth = 350 + 20; // card width + gap for tablet
//         } else if (window.innerWidth < 1024) {
//           cardWidth = 380 + 24; // card width + gap for small desktop
//         } else {
//           cardWidth = 400 + 32; // card width + gap for large desktop
//         }

//         let newScroll = currentScroll + cardWidth;

//         // Reset to start when reaching the end of original content
//         if (newScroll >= scrollWidth) {
//           newScroll = newScroll - scrollWidth;
//         }

//         carousel.scrollTo({
//           left: newScroll,
//           behavior: "smooth",
//         });
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // Reset to start when reaching the end (for manual scroll)
//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     const handleScroll = () => {
//       const scrollWidth = carousel.scrollWidth / 2;
//       if (carousel.scrollLeft >= scrollWidth) {
//         carousel.scrollTo({
//           left: carousel.scrollLeft - scrollWidth,
//           behavior: "auto",
//         });
//       }
//     };

//     carousel.addEventListener("scroll", handleScroll);
//     return () => carousel.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "-50px 0px -50px 0px",
//       }
//     );

//     if (headerRef.current) {
//       observer.observe(headerRef.current);
//     }

//     return () => {
//       if (headerRef.current) {
//         observer.unobserve(headerRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="w-full py-2 md:py-12 mx-auto relative overflow-hidden bg-[#050816] min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div
//           ref={headerRef}
//           style={{
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateY(0)" : "translateY(30px)",
//             transition: "all 0.8s ease-out",
//           }}
//           className="text-center mb-8"
//         >
//           <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
//             My work / New
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-6">
//             Projects.
//           </h2>
//         </div>

//         {/* Carousel Container */}
//         <div
//           className="relative"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           onTouchStart={() => setIsPaused(true)}
//           onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
//         >
//           {/* Carousel Track */}
//           <div
//             ref={carouselRef}
//             className="overflow-x-auto scrollbar-hide scroll-smooth"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             <div className="flex gap-6 md:gap-8 py-2 sm:py-4 min-w-max">
//               {duplicatedProjects.map((project, index) => (
//                 <div
//                   key={`${project.id}-${index}`}
//                   className="w-[320px] sm:w-[350px] md:w-[380px]"
//                 >
//                   <ProjectCard
//                     {...project}
//                     project_id={project.id || `project-${index}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Light gradient overlays */}
//           <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050816]/80 to-transparent pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050816]/80 to-transparent pointer-events-none" />

//           {/* Pause indicator */}
//           {isPaused && (
//             <div className="absolute top-4 right-4 bg-[#915EFF] text-white text-xs px-2 py-1 rounded">
//               Paused
//             </div>
//           )}
//         </div>

//         {/* Project Counter */}
//         {/* <div className="text-center mt-12">
//           <span className="text-[#C3BFFB] text-sm">
//             {projects.length} Amazing Projects
//           </span>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default SectionWrapper(Projects, "projects");
import React, { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  project_id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.9)",
        transition: "all 0.5s ease-out",
      }}
      className="w-full h-full flex-shrink-0 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative bg-[#151722] border border-gray-800 
        rounded-xl p-2 text-center 
        transition-all duration-300 shadow-lg ${
          isHovered
            ? "transform scale-105 shadow-2xl border-[#915EFF]"
            : "transform scale-100 shadow-lg border-transparent"
        }`}
      >
        {/* Image Section */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-700 rounded-xl ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* GitHub Icon */}
          <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-700 shadow-lg">
            <img
              src={github}
              alt="source code"
              className="w-3/4 h-3/4 object-contain"
              onClick={() => window.open(source_code_link, "_blank")}
            />
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <h3 className="text-lg font-bold text-white text-left">{name}</h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <p className="text-[#C3BFFB] text-sm leading-relaxed mb-4 line-clamp-3 text-left">
            {description}
          </p>

          {/* Tags with Icons */}
          <div className="flex flex-wrap gap-1 mb-4 justify-start">
            {tags.map((tag) => {
              const IconComponent = tag.icon;
              return (
                <div
                  key={`${name}-${tag.name}`}
                  className={`px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm ${tag.color} border border-gray-700 flex items-center gap-1 transition-all duration-300 hover:scale-105`}
                >
                  <IconComponent className="w-3 h-3" />
                </div>
              );
            })}
          </div>

          {/* View Details Button */}
          <Link to={`/project/${project_id}`} className="block w-full">
            <button
              className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent hover:bg-[#7f56f1] hover:text-white hover:border-[#7d4dff] text-sm`}
            >
              View Details
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects];

  // Auto carousel effect - continuous loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const scrollWidth = carousel.scrollWidth / 2;
        const currentScroll = carousel.scrollLeft;

        // Calculate card width based on screen size
        let cardWidth;
        if (window.innerWidth < 640) {
          cardWidth = 280 + 12; // Reduced gap for mobile
        } else if (window.innerWidth < 768) {
          cardWidth = 300 + 16; // Reduced gap for tablet
        } else if (window.innerWidth < 1024) {
          cardWidth = 320 + 20; // Reduced gap for small desktop
        } else {
          cardWidth = 340 + 24; // Reduced gap for large desktop
        }

        let newScroll = currentScroll + cardWidth;

        // Reset to start when reaching the end of original content
        if (newScroll >= scrollWidth) {
          newScroll = newScroll - scrollWidth;
        }

        carousel.scrollTo({
          left: newScroll,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Reset to start when reaching the end (for manual scroll)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollWidth = carousel.scrollWidth / 2;
      if (carousel.scrollLeft >= scrollWidth) {
        carousel.scrollTo({
          left: carousel.scrollLeft - scrollWidth,
          behavior: "auto",
        });
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-2 md:py-8 mx-auto relative overflow-hidden bg-[#050816] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
          className="text-center mb-6"
        >
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
            My work / New
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#C3BFFB] mb-4">
            Projects.
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
        >
          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-4 md:gap-6 py-2 min-w-max">
              {duplicatedProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="w-[280px] sm:w-[300px] md:w-[320px]"
                >
                  <ProjectCard
                    {...project}
                    project_id={project.id || `project-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Light gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-[#050816]/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-[#050816]/80 to-transparent pointer-events-none" />

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-2 right-2 bg-[#915EFF] text-white text-xs px-2 py-1 rounded">
              Paused
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");