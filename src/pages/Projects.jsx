
//ONLY REACT CODE
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        bg-[#151722] border border-gray-800 rounded-2xl p-2 md:p-3 w-full h-full 
        transition-all duration-300 shadow-lg flex flex-col
        ${
          isHovered
            ? "scale-105 border-[#915EFF] shadow-2xl"
            : "border-transparent"
        }
      `}
      >
        {/* Image Section */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={`${name} project`}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* GitHub Icon */}
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110 border border-gray-700 shadow-lg"
            >
              <img
                src={github}
                alt="source code"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
              {name}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <p className="text-[#C3BFFB] text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-xs sm:text-sm px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm ${tag.color} border border-gray-700`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* View Details Button */}
          <Link to={`/project/${project_id}`} className="block w-full mt-auto">
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2  text-[#C3BFFB] bg-transparent 
                hover:text-white hover:border-2-[#915EFF]
              }`}
            >
              <span>View Details</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
  const fallbackProjects = [
    {
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management built with modern web technologies.",
      tags: [
        { name: "react", color: "text-blue-400" },
        { name: "nodejs", color: "text-green-400" },
        { name: "mongodb", color: "text-green-300" },
        { name: "stripe", color: "text-purple-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com",
      id: "ecommerce-platform",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      features: [
        "User Authentication & Authorization",
        "Payment Integration with Stripe",
        "Admin Dashboard",
        "Real-time Inventory Management",
        "Order Tracking System",
        "Responsive Design",
      ],
      longDescription:
        "This e-commerce platform provides a complete shopping experience with secure payments, user accounts, and comprehensive admin capabilities. Built with scalability in mind using modern architecture patterns.",
    },
    {
      name: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      tags: [
        { name: "vue", color: "text-green-400" },
        { name: "firebase", color: "text-yellow-400" },
        { name: "pwa", color: "text-blue-300" },
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com",
      id: "task-management-app",
      technologies: ["Vue.js", "Firebase", "PWA", "Vuex", "SCSS"],
      features: [
        "Real-time Collaboration",
        "Drag & Drop Interface",
        "Team Management",
        "Progress Tracking",
        "Offline Capability",
        "Push Notifications",
      ],
      longDescription:
        "A modern task management solution that enables teams to collaborate effectively with real-time updates and intuitive user interface. Built as a Progressive Web App for cross-platform compatibility.",
    },
    {
      name: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization, scheduling capabilities, and performance insights across multiple platforms.",
      tags: [
        { name: "angular", color: "text-red-400" },
        { name: "python", color: "text-blue-500" },
        { name: "postgresql", color: "text-blue-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com",
      id: "social-media-dashboard",
      technologies: ["Angular", "Python", "PostgreSQL", "Django", "Chart.js"],
      features: [
        "Multi-platform Analytics",
        "Content Scheduling",
        "Performance Metrics",
        "Custom Reports",
        "Team Collaboration",
        "API Integrations",
      ],
      longDescription:
        "Comprehensive social media management dashboard that aggregates data from multiple platforms and provides actionable insights through beautiful data visualizations and automated reporting.",
    },
    {
      name: "Fitness Tracking App",
      description:
        "Mobile fitness application with workout planning, progress tracking, and social features to help users achieve their fitness goals.",
      tags: [
        { name: "react native", color: "text-blue-400" },
        { name: "graphql", color: "text-pink-400" },
        { name: "aws", color: "text-orange-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com",
      id: "fitness-tracking-app",
      technologies: ["React Native", "GraphQL", "AWS", "Apollo", "Node.js"],
      features: [
        "Workout Planning",
        "Progress Tracking",
        "Social Features",
        "Video Demonstrations",
        "Nutrition Tracking",
        "Wearable Integration",
      ],
      longDescription:
        "A comprehensive fitness platform that combines workout planning with social features to create an engaging experience for users pursuing their fitness journey across multiple devices.",
    },
    {
      name: "Real Estate Platform",
      description:
        "Modern real estate marketplace with property listings, virtual tours, agent connections, and mortgage calculator tools.",
      tags: [
        { name: "nextjs", color: "text-white" },
        { name: "typescript", color: "text-blue-600" },
        { name: "prisma", color: "text-blue-300" },
      ],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com",
      id: "real-estate-platform",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind",
      ],
      features: [
        "Property Listings",
        "Virtual Tours",
        "Agent Matching",
        "Mortgage Calculator",
        "Favorite Properties",
        "Advanced Search",
      ],
      longDescription:
        "A full-featured real estate platform that connects buyers with properties and agents through an intuitive interface with advanced search capabilities and virtual viewing experiences.",
    },
    {
      name: "Learning Management System",
      description:
        "Educational platform with course creation, student management, progress tracking, and interactive learning features for online education.",
      tags: [
        { name: "laravel", color: "text-red-500" },
        { name: "vue", color: "text-green-400" },
        { name: "mysql", color: "text-blue-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com",
      id: "learning-management-system",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "WebRTC"],
      features: [
        "Course Creation",
        "Student Management",
        "Progress Tracking",
        "Video Streaming",
        "Quizzes & Assessments",
        "Certificate Generation",
      ],
      longDescription:
        "Comprehensive learning management system that empowers educators to create engaging online courses while providing students with interactive learning experiences and progress tracking tools.",
    },
  ];

  const projectsData =
    projects && projects.length > 0 ? projects : fallbackProjects;

  return (
    <section className="w-full py-6 md:py-20 mx-auto relative overflow-hidden bg-[#050816] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
            My work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-6">
            Projects.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-8"></div>
        </div>

        {/* Description */}
        <p className="mt-3 text-[#C3BFFB] text-lg text-center max-w-3xl mx-auto leading-relaxed mb-12">
          Following projects showcases my skills and experience through
          real-world examples of my work. Click "View Details" to explore each
          project in depth.
        </p>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 
                [@media(min-width:1025px)_and_(max-width:1235px)]:grid-cols-2 
                gap-6 md:gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              project_id={project.id || `project-${index}`}
            />
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");