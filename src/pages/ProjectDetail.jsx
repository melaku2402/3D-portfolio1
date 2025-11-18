
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import PVDP from "./ViewProcessCard";
import ViewProcessCard from "./ViewProcessCard";
import { StarsCanvas } from "../components/canvas";
import Contact from "./Contact";
import { motion } from "framer-motion";
const ProjectDetail = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("software");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Development process steps with emojis and icons
  const developmentProcess = [
    {
      step: "1",
      icon: "💾",
      title: "Planning",
      description: "Project scoping and requirements",
    },
    {
      step: "2",
      icon: "🧺",
      title: "Requirement Gathering",
      description: "Requirement gathering and analysis",
    },
    {
      step: "3",
      icon: "🏛️",
      title: "Architecture",
      description: "System design and planning",
    },
    {
      step: "4",
      icon: "👨‍💻",
      title: "Development",
      description: "Clean code implementation",
    },
    {
      step: "5",
      icon: "🧪",
      title: "Testing",
      description: "Automated test suites",
    },
    {
      step: "6",
      icon: "🚀",
      title: "Deployment",
      description: "CI/CD pipelines",
    },
    {
      step: "7",
      icon: "🔧",
      title: "Maintenance",
      description: "Ongoing support and updates",
    },
  ];

  // AI Development process steps
  const aiDevelopmentProcess = [
    {
      step: "1",
      icon: "📊",
      title: "Data Collection",
      description: "Gathering datasets",
    },
    {
      step: "2",
      icon: "🔍",
      title: "Research",
      description: "Literature review",
    },
    {
      step: "3",
      icon: "🧪",
      title: "Prototyping",
      description: "Model experimentation",
    },
    {
      step: "4",
      icon: "🚀",
      title: "Training",
      description: "GPU-associated learning",
    },
    {
      step: "5",
      icon: "📈",
      title: "Evaluation",
      description: "Model performance assessment",
    },
    {
      step: "6",
      icon: "🌐",
      title: "Deployment",
      description: "Production integration",
    },
    {
      step: "7",
      icon: "🔎",
      title: "Monitoring",
      description: "Model performance tracking",
    },
  ];

  // Enhanced fallback project data
  const fallbackProjects = {
    "ecommerce-platform": {
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern features",
      longDescription: `This comprehensive e-commerce platform was built to provide a seamless shopping experience with enterprise-level features. The application handles everything from user authentication to payment processing and inventory management.

Key Achievements:
• Implemented secure payment processing with Stripe
• Built responsive admin dashboard with real-time analytics
• Optimized database queries for fast product searches
• Integrated third-party shipping APIs for logistics

The platform serves as a complete business solution that can scale to handle thousands of products and users while maintaining excellent performance and security standards.`,
      tags: [
        { name: "react", color: "text-blue-400" },
        { name: "nodejs", color: "text-green-400" },
        { name: "mongodb", color: "text-green-300" },
        { name: "stripe", color: "text-purple-400" },
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      source_code_link: "https://github.com",
      live_demo: "https://ecommerce-demo.com",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Stripe",
        "JWT",
        "Redux",
        "Mongoose",
      ],
      features: [
        "User Authentication & Authorization",
        "Payment Integration with Stripe",
        "Admin Dashboard",
        "Real-time Inventory Management",
        "Order Tracking System",
        "Responsive Design",
        "Product Reviews & Ratings",
        "Wishlist & Cart Functionality",
      ],
      developmentSteps: [
        "Discuss with The client to understand the requirements",
        "Market research and competitive analysis",
        "UI/UX design in Figma",
        "Frontend development with React",
        "Backend API development with NestJs",
        "Database integration with Postgress",
        "Deployment on Yegara hosting",
        "Testing and bug fixing",
      ],
    },
  };

  // Find the project
  let project = projects?.find((p) => p.id === projectId);

  if (!project) {
    project =
      fallbackProjects[projectId] || fallbackProjects["ecommerce-platform"];
  }

  // Get the current process based on active tab
  const currentProcess =
    activeTab === "software" ? developmentProcess : aiDevelopmentProcess;
  const approachTitle =
    activeTab === "software"
      ? "My Software Development Approach"
      : "My AI Development Approach";
  return (
    <div className="min-h-screen bg-[#050816] relative w-full mx-auto">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
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
        <div className="relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Software & AI Development Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Software & AI Development <span className="text-3xl">💡</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C3BFFB] mb-8 max-w-3xl mx-auto leading-relaxed">
                End-to-end solutions from system architecture to intelligent
                algorithms
              </p>

              {/* Service Navigation Tabs */}
              <div className="flex justify-center space-x-1 bg-[#151722] rounded-2xl p-2 max-w-md mx-auto border border-gray-800">
                <button
                  onClick={() => setActiveTab("software")}
                  className={`px-8 py-3 rounded-xl font-semibold  transition-all duration-300 ${
                    activeTab === "software"
                      ? "bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white shadow-lg"
                      : "text-[#C3BFFB] hover:text-white hover:bg-[#1a1a2e]"
                  }`}
                >
                  Software Engineering
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "ai"
                      ? "bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white shadow-lg"
                      : "text-[#C3BFFB] hover:text-white hover:bg-[#1a1a2e]"
                  }`}
                >
                  AI Development
                </button>
              </div>
            </div>
            ;{/* Development Approach Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {approachTitle}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto"></div>
              </div>

              {/* Development Process Steps */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
            gap-6 md:gap-8"
              >
                {currentProcess.map((step, index) => (
                  <div
                    key={index}
                    className="bg-[#151722] border border-gray-800 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-[#915EFF] hover:shadow-2xl hover:shadow-purple-500/20"
                    style={{
                      transform: `rotate(${
                        index % 2 === 1 ? "40deg" : "40deg"
                      })`,
                    }}
                  >
                    {/* Step Number and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <span className="text-3xl">{step.icon}</span>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#C3BFFB] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            
          </div>
          <ViewProcessCard />
          <StarsCanvas />
        </div>
      </section>
    </div>
  );
};
export default ProjectDetail;
