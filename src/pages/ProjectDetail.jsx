import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects, technologies } from "../constants";
import { github } from "../assets";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaMobile,
  FaRobot,
  FaDesktop,
  FaDatabase,
  FaServer,
  FaPalette,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaCalendar,
  FaUsers,
  FaLayerGroup,
  FaStar,
  FaClock,
  FaUserFriends,
  FaEye,
  FaDownload,
  FaShare,
  FaBook,
  FaCog,
  FaLightbulb,
  FaChartLine,
  FaHeart,
  FaFolderOpen,
} from "react-icons/fa";

// Get category info
const getCategoryInfo = (category) => {
  switch (category?.toLowerCase()) {
    case "web":
      return {
        icon: FaCode,
        color: "text-blue-400",
        bg: "bg-blue-500/20",
        border: "border-blue-500/30",
        gradient: "from-blue-500 to-cyan-500",
        badge: "Web App",
      };
    case "mobile":
      return {
        icon: FaMobile,
        color: "text-green-400",
        bg: "bg-green-500/20",
        border: "border-green-500/30",
        gradient: "from-green-500 to-emerald-500",
        badge: "Mobile App",
      };
    case "ai":
      return {
        icon: FaRobot,
        color: "text-purple-400",
        bg: "bg-purple-500/20",
        border: "border-purple-500/30",
        gradient: "from-purple-500 to-pink-500",
        badge: "AI Project",
      };
    case "software":
      return {
        icon: FaDesktop,
        color: "text-orange-400",
        bg: "bg-orange-500/20",
        border: "border-orange-500/30",
        gradient: "from-orange-500 to-red-500",
        badge: "Software",
      };
    default:
      return {
        icon: FaCode,
        color: "text-gray-400",
        bg: "bg-gray-500/20",
        border: "border-gray-500/30",
        gradient: "from-gray-500 to-gray-700",
        badge: "Project",
      };
  }
};

// Technology Item Component using imported technologies
const TechnologyItem = ({ techName }) => {
  // Find the technology in the imported technologies array
  const tech = technologies.find(
    (t) =>
      t.name.toLowerCase().includes(techName.toLowerCase()) ||
      techName.toLowerCase().includes(t.name.toLowerCase())
  );

  if (!tech) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-[#0f1124] rounded-xl border border-gray-700 hover:border-[#915EFF] hover:scale-105 transition-all duration-300 group/tech">
      <div className="w-10 h-10 rounded-lg bg-black/30 border border-gray-700 flex items-center justify-center group-hover/tech:scale-110 transition-transform duration-300">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-5 h-5 object-contain"
        />
      </div>
      <span className="text-[#C3BFFB] text-sm font-medium">{tech.name}</span>
    </div>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();

  // Find the project
  const project = projects.find((p) => p.id === projectId);

  // Fallback if project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center mx-auto mb-6">
            <FaEye className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl font-bold text-[#C3BFFB] mb-4">
            Project Not Found
          </h1>
          <p className="text-[#C3BFFB] mb-8 max-w-md">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/mywork"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white rounded-xl hover:from-[#7d4dff] hover:to-[#6a3dff] transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to My Work
          </Link>
        </div>
      </div>
    );
  }



  // Get unique technology names from project tags
  const projectTechNames = [...new Set(project.tags.map((tag) => tag.name))];

  // Group technologies by category from imported technologies
  const techGroups = [
    {
      title: "Frontend",
      technologies: technologies.filter((tech) =>
        projectTechNames.some(
          (techName) =>
            techName.toLowerCase().includes(tech.name.toLowerCase()) ||
            (tech.name.toLowerCase().includes("html") &&
              techName.toLowerCase().includes("html")) ||
            (tech.name.toLowerCase().includes("css") &&
              techName.toLowerCase().includes("css")) ||
            (tech.name.toLowerCase().includes("react") &&
              techName.toLowerCase().includes("react")) ||
            (tech.name.toLowerCase().includes("javascript") &&
              techName.toLowerCase().includes("javascript")) ||
            (tech.name.toLowerCase().includes("typescript") &&
              techName.toLowerCase().includes("typescript")) ||
            (tech.name.toLowerCase().includes("redux") &&
              techName.toLowerCase().includes("redux")) ||
            (tech.name.toLowerCase().includes("tailwind") &&
              techName.toLowerCase().includes("tailwind"))
        )
      ),
      icon: FaPalette,
    },
    {
      title: "Backend",
      technologies: technologies.filter((tech) =>
        projectTechNames.some(
          (techName) =>
            (tech.name.toLowerCase().includes("node") &&
              techName.toLowerCase().includes("node")) ||
            (tech.name.toLowerCase().includes("express") &&
              techName.toLowerCase().includes("express")) ||
            (tech.name.toLowerCase().includes("python") &&
              techName.toLowerCase().includes("python")) ||
            (tech.name.toLowerCase().includes("java") &&
              techName.toLowerCase().includes("java"))
        )
      ),
      icon: FaServer,
    },
    {
      title: "Database",
      technologies: technologies.filter((tech) =>
        projectTechNames.some(
          (techName) =>
            (tech.name.toLowerCase().includes("mongo") &&
              techName.toLowerCase().includes("mongo")) ||
            (tech.name.toLowerCase().includes("sql") &&
              techName.toLowerCase().includes("sql")) ||
            (tech.name.toLowerCase().includes("database") &&
              techName.toLowerCase().includes("database"))
        )
      ),
      icon: FaDatabase,
    },
    {
      title: "Tools & Services",
      technologies: technologies.filter((tech) =>
        projectTechNames.some(
          (techName) =>
            (tech.name.toLowerCase().includes("git") &&
              techName.toLowerCase().includes("git")) ||
            (tech.name.toLowerCase().includes("docker") &&
              techName.toLowerCase().includes("docker")) ||
            (tech.name.toLowerCase().includes("figma") &&
              techName.toLowerCase().includes("figma")) ||
            (tech.name.toLowerCase().includes("aws") &&
              techName.toLowerCase().includes("aws")) ||
            (tech.name.toLowerCase().includes("firebase") &&
              techName.toLowerCase().includes("firebase")) ||
            (tech.name.toLowerCase().includes("three") &&
              techName.toLowerCase().includes("three"))
        )
      ),
      icon: FaCog,
    },
  ].filter((group) => group.technologies.length > 0);

  return (
    <div className="min-h-screen bg-[#050816]">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/95 backdrop-blur-xl border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                to="/mywork"
                className="flex items-center gap-3 text-[#C3BFFB] hover:text-white transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#151722] border border-gray-700 rounded-xl flex items-center justify-center group-hover:border-[#915EFF] group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <FaArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Back to Projects
                </span>
              </Link>

              <div className="h-6 w-px bg-gray-700"></div>

              <Link
                to="/"
                className="flex items-center gap-2 text-[#915EFF] hover:text-[#7d4dff] transition-all duration-300 group"
              >
                <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm font-medium">Home</span>
              </Link>
            </div>

            {/* Share Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#151722] border border-gray-700 text-[#C3BFFB] rounded-xl hover:border-[#915EFF] hover:text-white transition-all duration-300">
              <FaShare className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Header */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
             
              {project.status && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-semibold backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {project.status}
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#C3BFFB] to-[#915EFF] bg-clip-text text-transparent">
              {project.name}
            </h1>

            <p className="text-xl md:text-2xl text-[#C3BFFB] max-w-4xl mx-auto leading-relaxed mb-8">
              {project.description}
            </p>
          </div>

          {/* Project Image with Links */}
          <div className="mb-16 relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gray-800/50 shadow-2xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80"></div>

              {/* Action Buttons */}
              <div className="absolute bottom-6 right-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#151722]/90 backdrop-blur-md border border-gray-700 text-white rounded-xl hover:border-[#915EFF] hover:scale-105 hover:bg-[#915EFF]/20 transition-all duration-300 group/link shadow-lg"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300"
                  />
                  <span className="font-semibold">Source Code</span>
                </a>

                {project.live_demo_link && (
                  <a
                    href={project.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white rounded-xl hover:from-[#7d4dff] hover:to-[#6a3dff] hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 group/link"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">Live Demo</span>
                  </a>
                )}

              
              </div>

              {/* Project Info Overlay */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                {project.duration && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#151722]/90 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-lg">
                    <FaClock className="w-4 h-4 text-[#915EFF]" />
                    <span className="text-white text-sm font-medium">
                      {project.duration}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2 bg-[#151722]/90 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-lg">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                  <span className="text-white text-sm font-medium">
                    Featured Project
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid - Project Overview Left & Technology Right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Project Overview (2/3 width) */}
            <div className="lg:col-span-2">
              <section className="bg-[#151722] border border-gray-800 rounded-3xl p-8 backdrop-blur-sm shadow-2xl h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-2xl">
                    <FaEye className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      Project Overview
                    </h2>
                    <p className="text-[#C3BFFB]">
                      Complete project breakdown and insights
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[#C3BFFB] leading-relaxed text-lg">
                    {project.longDescription || project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <FaLightbulb className="text-[#915EFF]" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      {project.highlights?.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[#C3BFFB]"
                        >
                          <div className="w-2 h-2 bg-[#915EFF] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      )) ||
                        [
                          "Modern and responsive design with optimal user experience",
                          "High performance optimization and fast loading times",
                          "Clean, maintainable, and scalable code architecture",
                          "Cross-platform compatibility and mobile responsiveness",
                          "User-friendly interface with intuitive navigation",
                          "Robust security features and data protection",
                        ].map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-[#C3BFFB]"
                          >
                            <div className="w-2 h-2 bg-[#915EFF] rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  
                    <div className="flex justify-between items-center p-4 bg-[#0f1124] rounded-xl border border-gray-700">
                      <span className="text-[#C3BFFB]">Status</span>
                      <span className="text-green-400 font-semibold flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {project.status || "Completed"}
                      </span>
                    </div>
                    {project.duration && (
                      <div className="flex justify-between items-center p-4 bg-[#0f1124] rounded-xl border border-gray-700">
                        <span className="text-[#C3BFFB]">Duration</span>
                        <span className="text-white font-semibold">
                          {project.duration}
                        </span>
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex justify-between items-center p-4 bg-[#0f1124] rounded-xl border border-gray-700">
                        <span className="text-[#C3BFFB]">Team Size</span>
                        <span className="text-white font-semibold">
                          {project.teamSize}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Technology Stack (1/3 width) */}
            <div className="lg:col-span-1">
              <section className="bg-[#151722] border border-gray-800 rounded-3xl p-6 backdrop-blur-sm shadow-2xl sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-xl">
                    <FaLayerGroup className="text-white text-lg" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Technology Stack
                  </h2>
                </div>

                <div className="space-y-6">
                  {techGroups.map((group, index) => (
                    <div key={index} className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <group.icon className="text-[#915EFF] text-base" />
                        <h3 className="text-lg font-semibold text-white">
                          {group.title}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {group.technologies.map((tech, techIndex) => (
                          <TechnologyItem
                            key={techIndex}
                            techName={tech.name}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FaRocket className="text-[#915EFF]" />
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#0f1124] border border-gray-700 text-white rounded-xl hover:border-[#915EFF] hover:scale-105 transition-all duration-300 group/action shadow-lg"
                    >
                      <FaGithub className="w-4 h-4 group-hover/action:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-sm">
                        View Source Code
                      </span>
                    </a>

                    {project.live_demo_link && (
                      <a
                        href={project.live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white rounded-xl hover:from-[#7d4dff] hover:to-[#6a3dff] hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 group/action"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 group-hover/action:scale-110 transition-transform duration-300" />
                        <span className="font-semibold text-sm">Live Demo</span>
                      </a>
                    )}

                    {/* View More Projects in Quick Actions */}
                    <Link
                      to="/mywork"
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#0f1124] border border-gray-700 text-white rounded-xl hover:border-[#915EFF] hover:scale-105 transition-all duration-300 group/action shadow-lg"
                    >
                      <FaFolderOpen className="w-4 h-4 group-hover/action:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-sm">
                        View More Projects
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
