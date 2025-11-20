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

  // Real colors for different technologies
  const getIconColor = (tagName) => {
    const colors = {
      // Frontend
      react: "#61DAFB",
      nextjs: "#000000",
      vue: "#4FC08D",
      angular: "#DD0031",
      javascript: "#F7DF1E",
      typescript: "#3178C6",
      html: "#E34F26",
      css: "#1572B6",
      tailwind: "#06B6D4",
      bootstrap: "#7952B3",

      // Backend
      nodejs: "#339933",
      express: "#E34F26",
      python: "#3776AB",
      django: "#092E20",
      flask: "#000000",
      java: "#007396",
      spring: "#6DB33F",

      // Databases
      mongodb: "#47A248",
      mongoose: "#47A248",
      mysql: "#4479A1",
      postgresql: "#336791",
      redis: "#DC382D",
      sqlite: "#003B57",

      // Tools & Others
      git: "#F05032",
      docker: "#2496ED",
      aws: "#FF9900",
      firebase: "#FFCA28",
      graphql: "#E10098",
      redux: "#764ABC",
      sass: "#CC6699",
      webpack: "#8DD6F9",
    };

    return colors[tagName.toLowerCase()] || "#915EFF"; // Default to theme color if not found
  };

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
        rounded-2xl p-2 md:p-3 text-center 
        transition-all duration-300 shadow-lg ${
          isHovered
            ? "transform scale-105 shadow-2xl border-[#915EFF]"
            : "transform scale-100 shadow-lg border-transparent"
        }`}
      >
        {/* Image Section - Matching Services Design */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-700 rounded-2xl ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* GitHub Icon - Positioned like Services icon */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#915EFF] rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
            <img
              src={github}
              alt="source code"
              className="w-3/4 h-3/4 object-contain"
              onClick={() => window.open(source_code_link, "_blank")}
            />
          </div>

          {/* Title Overlay - Matching Services Design */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white text-left">{name}</h3>
          </div>
        </div>

        {/* Content Section - Matching Services Design */}
        <div className="p-6">
          {/* Description as main content */}
          <p className="text-[#C3BFFB] text-sm leading-relaxed mb-6 text-left">
            {description}
          </p>

          {/* Tags as icons only with real colors */}
          <div className="flex flex-wrap gap-3 mb-6 justify-start">
            {tags.map((tag, tagIndex) => {
              const IconComponent = tag.icon;
              const iconColor = getIconColor(tag.name);
              return (
                <div
                  key={tagIndex}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:scale-110 hover:border-[#915EFF]"
                  title={tag.name}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: iconColor }}
                  />
                </div>
              );
            })}
          </div>

          {/* View Details Button - Matching Services button design */}
          <Link to={`/project/${project_id}`} className="block w-full">
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent hover:bg-[#7f56f1] hover:text-white hover:border-[#7d4dff] text-sm ${
                isHovered ? "transform scale-105" : ""
              }`}
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
        let gap;
        if (window.innerWidth < 640) {
          cardWidth = 320;
          gap = 24;
        } else if (window.innerWidth < 768) {
          cardWidth = 340;
          gap = 28;
        } else if (window.innerWidth < 1024) {
          cardWidth = 360;
          gap = 32;
        } else {
          cardWidth = 380;
          gap = 32;
        }

        let newScroll = currentScroll + cardWidth + gap;

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
    <section className="w-full md:py-10 mx-auto relative overflow-hidden bg-[#050816] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Matching Services Header Design */}
        <div
          ref={headerRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
          className="text-center mb-12"
        ><p>My work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-6">
            Projects.
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-8"></div>
          <p className="text-[#C3BFFB] max-w-2xl mx-auto">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
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
            <div className="flex py-4 min-w-max gap-6 md:gap-8">
              {duplicatedProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: "390px",
                  }}
                >
                  <ProjectCard
                    {...project}
                    project_id={project.id || `project-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#050816] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#050816] to-transparent pointer-events-none" />

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-2 right-2 bg-[#915EFF] text-white text-xs px-2 py-1 rounded">
              Paused
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-8">
          <p className="text-[#C3BFFB] text-sm opacity-70">
            ← Scroll to see more projects →
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
