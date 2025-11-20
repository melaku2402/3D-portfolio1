// ExplorePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

// React Icons Imports
import {
  FaCode,
  FaRobot,
  FaMobile,
  FaProjectDiagram,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaTools,
  FaCloud,
  FaServer,
  FaCheckCircle,
  FaRocket,
  FaCogs,
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiJavascript,
  SiTypescript,
  SiAmazon,
  SiGooglecloud,
} from "react-icons/si";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState("software");
  const [hoveredTab, setHoveredTab] = useState("software");

  // Enhanced services data with React Icons
  const servicesData = {
    software: {
      icon: FaCode,
      title: "Software Development",
      description: "Full-stack web applications & enterprise solutions",
      tagline:
        "Building scalable, high-performance software that drives business growth",
      features: [
        { name: "Custom Web Applications", icon: FaReact },
        { name: "Enterprise Systems", icon: FaServer },
        { name: "API Development", icon: FaCode },
        { name: "Cloud Architecture", icon: FaCloud },
        { name: "Database Design", icon: FaDatabase },
        { name: "DevOps & CI/CD", icon: FaTools },
      ],
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
      ],
      process: [
        "Requirements Analysis & Planning",
        "System Architecture Design",
        "Agile Development",
        "Quality Assurance",
        "Deployment & DevOps",
        "Maintenance & Support",
      ],
    },
    ai: {
      icon: FaRobot,
      title: "AI & Machine Learning",
      description: "Intelligent systems and predictive analytics",
      tagline:
        "Transforming data into intelligent insights with cutting-edge AI solutions",
      features: [
        { name: "Machine Learning Models", icon: SiTensorflow },
        { name: "Deep Learning Systems", icon: SiPytorch },
        { name: "Computer Vision", icon: SiOpencv },
        { name: "Natural Language Processing", icon: FaRobot },
        { name: "Predictive Analytics", icon: FaChartLine },
        { name: "AI Integration", icon: FaCogs },
      ],
      technologies: [
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "NLP", icon: FaRobot, color: "#00D8FF" },
        { name: "Scikit-learn", icon: FaPython, color: "#F7931E" },
      ],
      process: [
        "Data Collection & Preparation",
        "Model Research & Selection",
        "Training & Optimization",
        "Evaluation & Validation",
        "Deployment & Integration",
        "Continuous Learning",
      ],
    },
    mobile: {
      icon: FaMobile,
      title: "Mobile Development",
      description: "Cross-platform native mobile applications",
      tagline: "Creating seamless mobile experiences that users love",
      features: [
        { name: "Cross-Platform Apps", icon: SiFlutter },
        { name: "Native iOS & Android", icon: FaMobile },
        { name: "UI/UX Design", icon: FaFigma },
        { name: "Performance Optimization", icon: FaRocket },
        { name: "Push Notifications", icon: FaCheckCircle },
        { name: "App Store Deployment", icon: FaCloud },
      ],
      technologies: [
        { name: "React Native", icon: FaReact, color: "#61DAFB" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Swift", icon: FaMobile, color: "#FA7343" },
        { name: "Kotlin", icon: FaMobile, color: "#7F52FF" },
        { name: "Firebase", icon: SiGooglecloud, color: "#FFCA28" },
        { name: "Expo", icon: FaReact, color: "#000020" },
      ],
      process: [
        "Platform Strategy & Planning",
        "Mobile-First Design",
        "Native Development",
        "Device Testing",
        "Store Deployment",
        "Analytics & Updates",
      ],
    },
    management: {
      icon: FaProjectDiagram,
      title: "Tech Consulting",
      description: "Project leadership & technical strategy",
      tagline:
        "Leading technology initiatives with strategic vision and execution excellence",
      features: [
        { name: "Project Management", icon: FaProjectDiagram },
        { name: "Technical Strategy", icon: FaLightbulb },
        { name: "Team Leadership", icon: FaCheckCircle },
        { name: "Agile Methodology", icon: FaCogs },
        { name: "Risk Management", icon: FaTools },
        { name: "Stakeholder Alignment", icon: FaRocket },
      ],
      technologies: [
        { name: "Agile/Scrum", icon: FaCogs, color: "#0052CC" },
        { name: "JIRA", icon: FaTools, color: "#0052CC" },
        { name: "Strategic Planning", icon: FaLightbulb, color: "#FFD700" },
        { name: "Team Building", icon: FaCheckCircle, color: "#00D084" },
        { name: "Process Optimization", icon: FaRocket, color: "#FF6B6B" },
      ],
      process: [
        "Strategy & Vision Setting",
        "Resource Planning",
        "Agile Execution",
        "Risk Management",
        "Stakeholder Communication",
        "Delivery & Transition",
      ],
    },
  };

  // Project examples for each service
  const projectExamples = {
    software: [
      {
        name: "Enterprise SaaS Platform",
        description: "Cloud-based business automation with real-time analytics",
        tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        name: "E-commerce Ecosystem",
        description: "Multi-vendor marketplace with payment integration",
        tech: ["Vue.js", "Python", "MongoDB", "Stripe"],
      },
      {
        name: "CRM System",
        description: "Customer relationship management with AI insights",
        tech: ["Angular", "Java", "MySQL", "Redis"],
      },
    ],
    ai: [
      {
        name: "Predictive Maintenance AI",
        description: "Machine learning for equipment failure prediction",
        tech: ["Python", "TensorFlow", "IoT", "Cloud"],
      },
      {
        name: "Intelligent Chatbot",
        description: "Natural language processing for customer service",
        tech: ["Python", "NLP", "FastAPI", "Docker"],
      },
      {
        name: "Computer Vision System",
        description: "Automated quality control using deep learning",
        tech: ["PyTorch", "OpenCV", "CNN", "GPU"],
      },
    ],
    mobile: [
      {
        name: "Food Delivery App",
        description: "Real-time ordering with GPS tracking and payments",
        tech: ["React Native", "Firebase", "Maps", "Stripe"],
      },
      {
        name: "Fitness Tracker",
        description:
          "Workout plans with progress analytics and social features",
        tech: ["Flutter", "Health APIs", "Social", "Analytics"],
      },
      {
        name: "E-commerce Mobile App",
        description: "Seamless shopping experience with AR features",
        tech: ["Swift", "Kotlin", "AR Kit", "Payment APIs"],
      },
    ],
    management: [
      {
        name: "Digital Transformation",
        description: "Enterprise-wide technology modernization program",
        tech: ["Strategy", "Agile", "Cloud", "Security"],
      },
      {
        name: "Startup Product Launch",
        description: "End-to-end project management for MVP development",
        tech: ["Lean", "Scrum", "MVP", "Growth"],
      },
      {
        name: "Team Scaling Initiative",
        description: "Growing development teams with process optimization",
        tech: ["Hiring", "Mentoring", "Process", "Culture"],
      },
    ],
  };

  const currentService = servicesData[activeTab];
  const currentExamples = projectExamples[activeTab];
  const ServiceIcon = currentService.icon;

  return (
    <div className="min-h-screen bg-[#050816] relative w-full mx-auto">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold group-hover:text-[#915EFF] transition-colors duration-300">
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className={`${styles.sectionHeadText} text-white mb-6`}>
              Services & Expertise
            </h1>
            <p className="text-xl text-[#C3BFFB] max-w-3xl mx-auto">
              Comprehensive technology services tailored to your business needs
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Sidebar Navigation */}
            <div className="lg:w-1.5/4">
              <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6 sticky top-28">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <FaCogs className="text-[#915EFF]" />
                  Services
                </h3>
                <div className="space-y-2">
                  {Object.entries(servicesData).map(([key, service]) => {
                    const IconComponent = service.icon;
                    const isActive = activeTab === key;
                    const isHovered = hoveredTab === key;

                    return (
                      <div
                        key={key}
                        onMouseEnter={() => {
                          setHoveredTab(key);
                          setActiveTab(key);
                        }}
                        onMouseLeave={() => setHoveredTab(null)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 cursor-pointer group ${
                          isActive
                            ? "bg-gradient-to-r from-[#915EFF]/20 to-[#7d4dff]/20 border border-[#915EFF] shadow-lg shadow-[#915EFF]/10"
                            : "bg-[#0f1124] border border-transparent hover:border-[#915EFF]/30"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              isActive || isHovered
                                ? "bg-gradient-to-br from-[#915EFF] to-[#7d4dff] text-white scale-110"
                                : "bg-[#1a1b2e] text-[#C3BFFB] group-hover:bg-[#915EFF]/10"
                            }`}
                          >
                            <IconComponent className="text-lg" />
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`font-semibold transition-colors ${
                                isActive
                                  ? "text-white"
                                  : "text-[#C3BFFB] group-hover:text-white"
                              }`}
                            >
                              {service.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {service.description}
                            </p>
                          </div>
                          {/* <div
                            className={`w-2 h-2 rounded-full transition-all ${
                              isActive
                                ? "bg-[#915EFF] scale-125"
                                : "bg-gray-600 group-hover:bg-[#915EFF]"
                            }`}
                          /> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Content Display */}
            <div className="lg:w-3/4">
              {/* Service Header */}
              <div className="bg-gradient-to-r from-[#915EFF]/10 to-[#7d4dff]/10 border border-[#915EFF]/20 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-[#915EFF] to-[#7d4dff] rounded-2xl text-white">
                    <ServiceIcon className="text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {currentService.title}
                    </h2>
                    <p className="text-[#C3BFFB] text-lg">
                      {currentService.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features & Technologies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Features */}
                <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[#915EFF]" />
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {currentService.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-2 hover:bg-[#0f1124] rounded-lg transition-colors group"
                        >
                          <div className="p-2 bg-[#1a1b2e] rounded-lg group-hover:bg-[#915EFF]/10 transition-colors">
                            <FeatureIcon className="text-[#915EFF] text-sm" />
                          </div>
                          <span className="text-[#C3BFFB] text-sm">
                            {feature.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaTools className="text-[#915EFF]" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentService.technologies.map((tech, index) => {
                      const TechIcon = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 bg-[#0f1124] text-[#C3BFFB] rounded-lg border border-gray-700 hover:border-[#915EFF] hover:text-white transition-all duration-300 group"
                        >
                          <TechIcon
                            style={{ color: tech.color }}
                            className="text-base"
                          />
                          <span className="text-sm">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Development Process */}
              <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaRocket className="text-[#915EFF]" />
                  Development Process
                </h3>
                <div className="space-y-3">
                  {currentService.process.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 hover:bg-[#0f1124] rounded-lg transition-colors group"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <span className="text-[#C3BFFB] text-sm pt-0.5">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Examples */}
              <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaLightbulb className="text-[#915EFF]" />
                  Project Examples
                </h3>
                <div className="space-y-4">
                  {currentExamples.map((example, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-[#0f1124] border border-gray-700 hover:border-[#915EFF] transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white text-lg group-hover:text-[#915EFF] transition-colors">
                          {example.name}
                        </h4>
                      </div>
                      <p className="text-[#C3BFFB] text-sm mb-3">
                        {example.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {example.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-[#915EFF]/10 text-[#915EFF] text-xs rounded-full border border-[#915EFF]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
