
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_id,
  onViewProcess,
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
              isHovered ? "scale-105" : "scale-100"
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

          {/* View Development Process Button */}
          {/* bg-gradient-to-r from-[#915EFF] to-[#7d4dff] */}
          <button
            onClick={() => onViewProcess(project_id)}
            className="w-full py-3 px-6  text-white rounded-full font-semibold hover:from-[#7d4dff] hover:to-[#6a3dff] transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 flex items-center justify-center gap-1 group mt-auto"
          >
            <span>View Development Process</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          
          </button>
        </div>
      </div>
    </div>
  );
};

// Development Process Popup Component
const DevelopmentProcessPopup = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-1 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 mt-10">
      <div className="bg-[#151722] border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">
            {project?.name} - Development Process
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-[#1a1a2e] border border-gray-700 rounded-full flex items-center justify-center text-[#C3BFFB] hover:text-white hover:border-[#915EFF] transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Section 1: Project Overview */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white mb-2">
              Project Overview
            </h3>
            <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-4">
              <h4 className="text-lg font-bold text-white mb-2">
                {project?.name}
              </h4>

              {/* Visual / Screenshot */}
              <div className="relative mb-2">
                <div className="bg-gradient-to-br from-[#915EFF] to-[#7d4dff] p-2 rounded-xl">
                  <div className="bg-[#050816] rounded-xl p-2">
                    <img
                      src={project?.image}
                      alt={project?.name}
                      className="w-full h-100 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <p className="text-[#C3BFFB] text-sm">{project?.description}</p>

              {/* Project Type Badge */}
              <div className="mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project?.type === "ai"
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  }`}
                >
                  {project?.type === "ai" ? "AI Project" : "Web Project"}
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Development Process */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                Development Process
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff]"></div>
            </div>

            {/* Step-by-Step List */}
            <div className="space-y-4">
              {project?.developmentSteps?.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#1a1a2e] border border-gray-700 rounded-xl p-4 hover:border-[#915EFF] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-[#C3BFFB] flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Actions / CTA */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Secondary Action - View Code */}
              <button
                onClick={() => window.open(project?.source_code_link, "_blank")}
                className="flex items-center gap-2 px-6 py-3 text-[#915EFF] hover:text-white transition-all duration-300 group"
              >
                <span className="text-lg">💻</span>
                <span className="font-semibold group-hover:underline">
                  View Code
                </span>
              </button>

              {/* Primary Action - Live Demo */}
              {project?.live_demo && (
                <button
                  onClick={() => window.open(project?.live_demo, "_blank")}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white rounded-full font-semibold hover:from-[#7d4dff] hover:to-[#6a3dff] transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                >
                  <span>Live Demo</span>
                  <span className="text-lg">🔗</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Sample Projects Data with different types and development steps
  const sampleProjects = [
    {
      name: "Smart Customer Feedback System",
      description:
        "AI-powered customer feedback analysis platform with sentiment analysis and automated response generation for government services.",
      tags: [
        { name: "python", color: "text-blue-400" },
        { name: "tensorflow", color: "text-orange-400" },
        { name: "react", color: "text-cyan-400" },
        { name: "postgresql", color: "text-blue-300" },
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com/smart-feedback-system",
      live_demo: "https://feedback-demo.com",
      id: "smart-feedback-system",
      type: "ai",
      technologies: [
        "Python",
        "TensorFlow",
        "React",
        "PostgreSQL",
        "FastAPI",
        "NLTK",
      ],
      features: [
        "Real-time Sentiment Analysis",
        "Automated Response Generation",
        "Multi-language Support",
        "Analytics Dashboard",
        "API Integration",
        "Report Generation",
      ],
      developmentSteps: [
        "Requirement analysis with stakeholders",
        "Data collection and preprocessing",
        "NLP model development and training",
        "Backend API development with FastAPI",
        "Frontend dashboard creation with React",
        "Database design and optimization",
        "Model deployment and integration",
        "Testing and performance optimization",
        "Security implementation and validation",
        "Production deployment and monitoring",
      ],
    },
    {
      name: "E-Commerce Analytics Dashboard",
      description:
        "Advanced analytics platform for e-commerce businesses with predictive sales forecasting and customer behavior insights.",
      tags: [
        { name: "react", color: "text-blue-400" },
        { name: "nodejs", color: "text-green-400" },
        { name: "mongodb", color: "text-green-300" },
        { name: "chartjs", color: "text-red-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com/ecommerce-analytics",
      live_demo: "https://analytics-demo.com",
      id: "ecommerce-analytics",
      type: "web",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Chart.js",
        "Express",
        "JWT",
      ],
      features: [
        "Real-time Sales Analytics",
        "Customer Behavior Tracking",
        "Predictive Sales Forecasting",
        "Inventory Management",
        "Multi-store Support",
        "Custom Report Builder",
      ],
      developmentSteps: [
        "Project planning and requirement gathering",
        "UI/UX design and prototyping",
        "Frontend development with React and Chart.js",
        "Backend API development with Node.js",
        "Database design with MongoDB",
        "Authentication and authorization system",
        "Real-time data processing implementation",
        "Analytics algorithm development",
        "Testing and bug fixing",
        "Deployment and performance optimization",
      ],
    },
    {
      name: "Healthcare AI Assistant",
      description:
        "Intelligent healthcare assistant providing symptom analysis, medication reminders, and personalized health recommendations.",
      tags: [
        { name: "python", color: "text-blue-400" },
        { name: "pytorch", color: "text-red-400" },
        { name: "flutter", color: "text-blue-300" },
        { name: "firebase", color: "text-yellow-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com/healthcare-ai",
      live_demo: "https://health-ai-demo.com",
      id: "healthcare-ai",
      type: "ai",
      technologies: [
        "Python",
        "PyTorch",
        "Flutter",
        "Firebase",
        "TensorFlow Lite",
        "Google Cloud",
      ],
      features: [
        "Symptom Analysis AI",
        "Medication Reminder System",
        "Health Progress Tracking",
        "Emergency Contact Integration",
        "Personalized Recommendations",
        "Multi-language Support",
      ],
      developmentSteps: [
        "Medical domain research and data collection",
        "AI model development for symptom analysis",
        "Mobile app development with Flutter",
        "Backend development with Firebase",
        "Integration with healthcare APIs",
        "Data privacy and security implementation",
        "Clinical testing and validation",
        "Performance optimization for mobile",
        "App store deployment preparation",
        "Continuous monitoring and updates",
      ],
    },
    {
      name: "Real Estate Virtual Tours",
      description:
        "Immersive virtual tour platform for real estate with 360° property views and AI-powered property recommendations.",
      tags: [
        { name: "threejs", color: "text-gray-400" },
        { name: "react", color: "text-blue-400" },
        { name: "nodejs", color: "text-green-400" },
        { name: "aws", color: "text-orange-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com/virtual-tours",
      live_demo: "https://virtualtours-demo.com",
      id: "virtual-tours",
      type: "web",
      technologies: ["Three.js", "React", "Node.js", "AWS", "WebGL", "MongoDB"],
      features: [
        "360° Virtual Property Tours",
        "AI Property Recommendations",
        "Interactive Floor Plans",
        "Agent Booking System",
        "Mortgage Calculator",
        "Neighborhood Insights",
      ],
      developmentSteps: [
        "3D modeling and virtual tour planning",
        "Frontend development with Three.js and React",
        "Backend API development with Node.js",
        "AWS cloud infrastructure setup",
        "Image processing and optimization",
        "AI recommendation system integration",
        "Mobile responsiveness implementation",
        "Performance testing and optimization",
        "Security and data protection",
        "Deployment and scaling configuration",
      ],
    },
    {
      name: "Financial Fraud Detection",
      description:
        "Machine learning system for real-time financial fraud detection with anomaly detection and pattern recognition.",
      tags: [
        { name: "python", color: "text-blue-400" },
        { name: "scikitlearn", color: "text-orange-400" },
        { name: "docker", color: "text-blue-300" },
        { name: "kafka", color: "text-purple-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com/fraud-detection",
      live_demo: "https://fraud-demo.com",
      id: "fraud-detection",
      type: "ai",
      technologies: [
        "Python",
        "Scikit-learn",
        "Docker",
        "Kafka",
        "Redis",
        "PostgreSQL",
      ],
      features: [
        "Real-time Transaction Monitoring",
        "Anomaly Detection Algorithms",
        "Pattern Recognition System",
        "Alert Management Dashboard",
        "Historical Data Analysis",
        "Regulatory Compliance Reporting",
      ],
      developmentSteps: [
        "Financial data analysis and preprocessing",
        "Machine learning model development",
        "Real-time data pipeline with Kafka",
        "Backend system development",
        "Dashboard creation for monitoring",
        "Security and compliance implementation",
        "Model training and validation",
        "System integration testing",
        "Performance optimization",
        "Production deployment and monitoring",
      ],
    },
  ];

  const handleViewProcess = (projectId) => {
    const project = sampleProjects.find((p) => p.id === projectId);
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="w-full py-6 md:py-20 mx-auto relative overflow-hidden bg-[#050816] min-h-screen">
      {/* Development Process Popup */}
      <DevelopmentProcessPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        project={selectedProject}
      />

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
        <p className=" text-[#C3BFFB] text-lg text-center max-w-3xl mx-auto leading-relaxed mb-10">
          Following projects showcases my skills and experience through
          real-world examples of my work. Click "View Development Process" to
          explore each project's development methodology in depth.
        </p>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 
                [@media(min-width:1025px)_and_(max-width:1280px)]:grid-cols-2  [@media(min-width:1280px)]:grid-cols-2
                gap-6 md:gap-8"
        >
          {sampleProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              project_id={project.id}
              onViewProcess={handleViewProcess}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");