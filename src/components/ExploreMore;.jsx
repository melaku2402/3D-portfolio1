// ExploreMore.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExploreMore = ({ service, onClose }) => {
  const [activeTab, setActiveTab] = useState("web");

  // Development process steps
  const developmentProcess = {
    web: [
      {
        step: "1",
        icon: "💻",
        title: "Discovery & Planning",
        description: "Requirements analysis and project planning",
        details:
          "Define project goals, user stories, and technical specifications",
      },
      {
        step: "2",
        icon: "🎨",
        title: "UI/UX Design",
        description: "Wireframing and prototyping",
        details: "Create intuitive user interfaces and user experience flows",
      },
      {
        step: "3",
        icon: "⚡",
        title: "Frontend Development",
        description: "Client-side implementation",
        details: "Build responsive interfaces with modern frameworks",
      },
      {
        step: "4",
        icon: "🔧",
        title: "Backend Development",
        description: "Server-side logic and APIs",
        details: "Develop robust backend systems and database architecture",
      },
      {
        step: "5",
        icon: "🧪",
        title: "Testing & QA",
        description: "Quality assurance",
        details: "Comprehensive testing across browsers and devices",
      },
      {
        step: "6",
        icon: "🚀",
        title: "Deployment",
        description: "Production deployment",
        details: "CI/CD pipeline setup and cloud deployment",
      },
      {
        step: "7",
        icon: "🔄",
        title: "Maintenance",
        description: "Ongoing support",
        details: "Performance monitoring and feature updates",
      },
    ],
    mobile: [
      {
        step: "1",
        icon: "📱",
        title: "Strategy & Planning",
        description: "Platform selection and roadmap",
        details: "Choose between native, cross-platform, or hybrid approach",
      },
      {
        step: "2",
        icon: "✏️",
        title: "UI/UX Design",
        description: "Mobile-first design",
        details: "Design for touch interactions and mobile constraints",
      },
      {
        step: "3",
        icon: "⚙️",
        title: "Architecture",
        description: "App structure planning",
        details: "Design scalable architecture with offline capabilities",
      },
      {
        step: "4",
        icon: "👨‍💻",
        title: "Development",
        description: "Platform-specific coding",
        details: "Implement features using chosen mobile technology stack",
      },
      {
        step: "5",
        icon: "📱",
        title: "Device Testing",
        description: "Cross-device compatibility",
        details: "Test on multiple devices and screen sizes",
      },
      {
        step: "6",
        icon: "🏪",
        title: "Store Deployment",
        description: "App store submission",
        details: "Prepare and submit to Apple App Store and Google Play",
      },
      {
        step: "7",
        icon: "📊",
        title: "Analytics & Updates",
        description: "Performance monitoring",
        details: "Track user behavior and release regular updates",
      },
    ],
  };

  // Technology stacks
  const technologyStacks = {
    web: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Firebase",
      "Tailwind CSS",
      "GraphQL",
      "Docker",
      "Redis",
    ],
    mobile: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Java",
      "Firebase",
      "Redux",
      "GraphQL",
      "App Center",
      "Xcode",
      "Android Studio",
      "Fastlane",
      "Push Notifications",
      "MongoDB Realm",
    ],
  };

  // Project examples
  const projectExamples = {
    web: [
      "E-commerce platforms",
      "Social media applications",
      "CRM systems",
      "Real-time dashboards",
      "Payment processing systems",
      "Content management systems",
      "Progressive Web Apps",
    ],
    mobile: [
      "Cross-platform mobile apps",
      "Native iOS applications",
      "Native Android applications",
      "E-commerce mobile apps",
      "Social media platforms",
      "Fitness tracking apps",
      "Real-time messaging apps",
    ],
  };

  // Key features
  const keyFeatures = {
    web: [
      "Responsive Design",
      "Progressive Web Apps",
      "SEO Optimization",
      "Performance Optimization",
      "Security Implementation",
      "API Integration",
      "Real-time Features",
    ],
    mobile: [
      "Cross-Platform Compatibility",
      "Native Performance",
      "Offline Capability",
      "Push Notifications",
      "App Store Optimization",
      "Touch-Optimized UI",
      "Battery Efficiency",
    ],
  };

  const currentProcess = developmentProcess[activeTab];
  const currentTechnologies = technologyStacks[activeTab];
  const currentExamples = projectExamples[activeTab];
  const currentFeatures = keyFeatures[activeTab];

  const approachTitles = {
    web: "Web Development Approach",
    mobile: "Mobile Development Approach",
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#151722] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#151722] border-b border-gray-800 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {service?.title || "Development Approach"}
              </h2>
              <p className="text-[#C3BFFB] mt-2">
                Comprehensive development methodologies and processes
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mt-6 bg-gray-900/50 rounded-lg p-1">
            {["web", "mobile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {tab === "web" ? "Web Development" : "Mobile Development"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Approach Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {approachTitles[activeTab]}
            </h3>
            <p className="text-[#C3BFFB] max-w-2xl mx-auto">
              A structured methodology to deliver high-quality, scalable{" "}
              {activeTab === "web" ? "web applications" : "mobile applications"}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Process Visualization */}
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3"></span>
                Development Process
              </h4>
              <div className="space-y-4">
                {currentProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-white text-lg">
                        {step.title}
                      </h5>
                      <p className="text-[#C3BFFB] text-sm mb-1">
                        {step.description}
                      </p>
                      <p className="text-gray-400 text-xs">{step.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technology & Examples */}
            <div className="space-y-6">
              {/* Technology Stack */}
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentTechnologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-2 bg-[#915EFF]/20 text-[#C3BFFB] rounded-full text-sm border border-[#915EFF]/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Examples */}
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Project Examples
                </h4>
                <ul className="space-y-2">
                  {currentExamples.map((example, index) => (
                    <motion.li
                      key={example}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-[#C3BFFB]"
                    >
                      <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3"></span>
                      {example}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {currentFeatures.map((feature, index) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-[#C3BFFB] flex items-center"
                    >
                      <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3"></span>
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-800">
            <button
              onClick={onClose}
              className="px-8 py-3 border border-[#915EFF] text-[#915EFF] rounded-full font-semibold hover:bg-[#915EFF] hover:text-white transition-all duration-300"
            >
              Close Overview
            </button>
            <Link
              to="/#contact"
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white rounded-full font-semibold hover:from-[#7d4dff] hover:to-[#6a3dff] transition-all duration-300 shadow-lg shadow-purple-500/25 text-center"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreMore;
