// pages/MyWork.jsx
import React, { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobile,
  FaRobot,
  FaDesktop,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

// Real colors for different technologies
const getIconColor = (tagName) => {
  const colors = {
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
    nodejs: "#339933",
    express: "#000000",
    python: "#3776AB",
    django: "#092E20",
    flask: "#000000",
    java: "#007396",
    spring: "#6DB33F",
    mongodb: "#47A248",
    mongoose: "#47A248",
    mysql: "#4479A1",
    postgresql: "#336791",
    redis: "#DC382D",
    sqlite: "#003B57",
    git: "#F05032",
    docker: "#2496ED",
    aws: "#FF9900",
    firebase: "#FFCA28",
    graphql: "#E10098",
    redux: "#764ABC",
    sass: "#CC6699",
    webpack: "#8DD6F9",
  };

  return colors[tagName.toLowerCase()] || "#915EFF";
};

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  project_id,
  category,
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

  // Get category icon and color
  const getCategoryInfo = (cat) => {
    switch (cat?.toLowerCase()) {
      case "web":
        return {
          icon: FaCode,
          color: "from-blue-500 to-cyan-500",
          bg: "bg-blue-500/20",
          text: "text-blue-300",
        };
      case "mobile":
        return {
          icon: FaMobile,
          color: "from-green-500 to-emerald-500",
          bg: "bg-green-500/20",
          text: "text-green-300",
        };
      case "ai":
        return {
          icon: FaRobot,
          color: "from-purple-500 to-pink-500",
          bg: "bg-purple-500/20",
          text: "text-purple-300",
        };
      case "software":
        return {
          icon: FaDesktop,
          color: "from-orange-500 to-red-500",
          bg: "bg-orange-500/20",
          text: "text-orange-300",
        };
      default:
        return {
          icon: FaCode,
          color: "from-gray-500 to-gray-700",
          bg: "bg-gray-500/20",
          text: "text-gray-300",
        };
    }
  };

  const {
    icon: CategoryIcon,
    color: categoryColor,
    bg: categoryBg,
    text: categoryText,
  } = getCategoryInfo(category);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.9)",
        transition: "all 0.5s ease-out",
      }}
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative bg-[#151722] border border-gray-800 
        rounded-2xl p-4 text-center 
        transition-all duration-300 shadow-lg h-full flex flex-col ${
          isHovered
            ? "transform scale-105 shadow-2xl border-[#915EFF]"
            : "transform scale-100 shadow-lg border-transparent"
        }`}
      >
        {/* Category Badge */}
        <div
          className={`absolute -top-2 left-4 ${categoryBg} ${categoryText} px-3 py-1 rounded-full text-xs font-semibold border border-current/30 backdrop-blur-sm z-10 flex items-center gap-1`}
        >
          <CategoryIcon className="w-3 h-3" />
          {category || "Web"}
        </div>

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden rounded-xl mb-4">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-700 rounded-xl ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* GitHub Icon */}
          <div className="absolute top-3 right-3 w-8 h-8 bg-[#915EFF] rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
            <img
              src={github}
              alt="source code"
              className="w-3/4 h-3/4 object-contain"
              onClick={() => window.open(source_code_link, "_blank")}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white text-left mb-3">
            {name}
          </h3>

          {/* Description */}
          <p className="text-[#C3BFFB] text-sm leading-relaxed mb-4 text-left flex-1">
            {description}
          </p>

          {/* Tags as icons only with real colors */}
          <div className="flex flex-wrap gap-2 mb-4 justify-start">
            {tags.map((tag, tagIndex) => {
              const IconComponent = tag.icon;
              const iconColor = getIconColor(tag.name);
              return (
                <div
                  key={tagIndex}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:scale-110 hover:border-[#915EFF]"
                  title={tag.name}
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: iconColor }}
                  />
                </div>
              );
            })}
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-3 w-3/4 mx-auto">
            {/* Live Demo Button */}
            {live_demo_link && (
              <a
                href={live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-green-500 text-green-400 bg-transparent hover:bg-green-600 hover:text-white hover:border-green-600 text-sm
                    
                  `}
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Live Demo
                </button>
              </a>
            )}

            {/* View Details Button */}
            <Link
              to={`/project/${project_id}`}
              className={`${live_demo_link ? "flex-1" : "w-full"}`}
            >
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent hover:bg-[#7f56f1] hover:text-white hover:border-[#7d4dff] text-sm `}
              >
                View Details
                <FaArrowRight
                  className={`w-3 h-3 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyWork = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  // Categories with icons
  const categories = [
    { id: "all", name: "All Projects", icon: FaCode, count: projects.length },
    {
      id: "web",
      name: "Web Development",
      icon: FaCode,
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      icon: FaMobile,
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      icon: FaRobot,
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "software",
      name: "Software",
      icon: FaDesktop,
      count: projects.filter((p) => p.category === "software").length,
    },
  ];

  // Filter projects based on active category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
          className="text-center mb-12"
        >
          {/* Back to Home Link - Left Aligned */}
          <div className="flex justify-start mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#C3BFFB] hover:text-[#7d4dff] transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-[#915EFF]/10 border border-transparent hover:border-[#915EFF]/30"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-6">
            My Work
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-8"></div>
          <p className="text-[#C3BFFB] max-w-2xl mx-auto">
            Explore my portfolio of projects across different domains. Each
            project represents my passion for creating innovative solutions and
            delivering exceptional user experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 ${
                  isActive
                    ? "bg-[#915EFF] border-[#915EFF] text-white shadow-lg shadow-purple-500/25"
                    : "bg-[#151722] border-gray-700 text-[#C3BFFB] hover:border-[#915EFF] hover:scale-105"
                }`}
              >
                <CategoryIcon className="w-5 h-5" />
                <span>{category.name}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    isActive ? "bg-white/20" : "bg-[#915EFF]/20 text-[#915EFF]"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              project_id={project.id}
            />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#151722] rounded-full flex items-center justify-center border border-gray-700">
              <FaCode className="w-8 h-8 text-[#915EFF]" />
            </div>
            <h3 className="text-xl font-bold text-[#C3BFFB] mb-2">
              No projects found
            </h3>
            <p className="text-[#C3BFFB] opacity-70">
              There are no projects in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper(MyWork, "mywork");
