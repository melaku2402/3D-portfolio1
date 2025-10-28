// ExplorePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StarsCanvas } from "../components/canvas";
import { styles } from "../styles";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState("software");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  // Development process steps with detailed descriptions
  const developmentProcess = {
    software: [
      {
        step: "1",
        icon: "💼",
        title: "Discovery & Analysis",
        description: "Comprehensive project requirements gathering",
        details:
          "In-depth analysis of business goals, user needs, and technical constraints to define project scope and success metrics.",
      },
      {
        step: "2",
        icon: "🏗️",
        title: "System Architecture",
        description: "Scalable technical design",
        details:
          "Designing robust system architecture, database schemas, and API structures for optimal performance and scalability.",
      },
      {
        step: "3",
        icon: "🎨",
        title: "UI/UX Design",
        description: "User-centered interface design",
        details:
          "Creating intuitive user experiences with modern design principles, wireframes, and interactive prototypes.",
      },
      {
        step: "4",
        icon: "⚡",
        title: "Agile Development",
        description: "Iterative feature implementation",
        details:
          "Building features using agile methodology with continuous integration and regular client feedback sessions.",
      },
      {
        step: "5",
        icon: "🛡️",
        title: "Quality Assurance",
        description: "Comprehensive testing suite",
        details:
          "Implementing automated testing, security audits, performance testing, and user acceptance testing.",
      },
      {
        step: "6",
        icon: "🚀",
        title: "Deployment",
        description: "Production deployment & CI/CD",
        details:
          "Setting up automated deployment pipelines, cloud infrastructure, and monitoring systems for production launch.",
      },
      {
        step: "7",
        icon: "🔧",
        title: "Maintenance & Support",
        description: "Ongoing optimization",
        details:
          "Providing continuous support, performance monitoring, security updates, and feature enhancements.",
      },
    ],
    ai: [
      {
        step: "1",
        icon: "📊",
        title: "Data Strategy",
        description: "Data collection & preprocessing",
        details:
          "Identifying data sources, cleaning datasets, and preparing data for machine learning model training.",
      },
      {
        step: "2",
        icon: "🔬",
        title: "Research & Analysis",
        description: "Algorithm selection & prototyping",
        details:
          "Researching state-of-the-art models, conducting feasibility studies, and building proof-of-concepts.",
      },
      {
        step: "3",
        icon: "🧠",
        title: "Model Architecture",
        description: "Neural network design",
        details:
          "Designing custom model architectures, selecting appropriate layers, and optimizing for specific use cases.",
      },
      {
        step: "4",
        icon: "⚙️",
        title: "Model Training",
        description: "GPU-accelerated training",
        details:
          "Training models with large datasets, hyperparameter tuning, and using distributed computing when needed.",
      },
      {
        step: "5",
        icon: "📈",
        title: "Evaluation & Validation",
        description: "Performance metrics analysis",
        details:
          "Testing models with validation datasets, analyzing metrics, and ensuring model generalization capabilities.",
      },
      {
        step: "6",
        icon: "🌐",
        title: "Integration & Deployment",
        description: "Production AI systems",
        details:
          "Deploying models as microservices, creating APIs, and integrating with existing software infrastructure.",
      },
      {
        step: "7",
        icon: "🔄",
        title: "Continuous Learning",
        description: "Model retraining & updates",
        details:
          "Implementing feedback loops, monitoring model drift, and scheduling regular retraining with new data.",
      },
    ],
    mobile: [
      {
        step: "1",
        icon: "📱",
        title: "Platform Strategy",
        description: "Native vs Cross-platform decision",
        details:
          "Analyzing requirements to choose between native iOS/Android, cross-platform, or hybrid mobile solutions.",
      },
      {
        step: "2",
        icon: "✏️",
        title: "Mobile-First Design",
        description: "Touch-optimized UX/UI",
        details:
          "Designing for mobile constraints with intuitive gestures, responsive layouts, and platform-specific patterns.",
      },
      {
        step: "3",
        icon: "⚡",
        title: "Performance Architecture",
        description: "Optimized mobile architecture",
        details:
          "Designing for battery efficiency, offline capabilities, and fast loading times on mobile networks.",
      },
      {
        step: "4",
        icon: "👨‍💻",
        title: "Native Development",
        description: "Platform-specific coding",
        details:
          "Building with Swift/Kotlin for native or React Native/Flutter for cross-platform with native performance.",
      },
      {
        step: "5",
        icon: "📲",
        title: "Device Testing",
        description: "Multi-device compatibility",
        details:
          "Testing across various screen sizes, OS versions, and device capabilities to ensure consistent experience.",
      },
      {
        step: "6",
        icon: "🏪",
        title: "Store Deployment",
        description: "App store optimization",
        details:
          "Preparing store listings, meeting guidelines, and deploying to Apple App Store and Google Play Store.",
      },
      {
        step: "7",
        icon: "📊",
        title: "Analytics & Updates",
        description: "Performance monitoring",
        details:
          "Tracking user engagement, crash analytics, and releasing regular updates with new features and improvements.",
      },
    ],
    management: [
      {
        step: "1",
        icon: "🎯",
        title: "Strategy & Planning",
        description: "Project vision and roadmap",
        details:
          "Defining project objectives, success criteria, and creating comprehensive project roadmaps with clear milestones.",
      },
      {
        step: "2",
        icon: "📋",
        title: "Requirements Analysis",
        description: "Stakeholder needs assessment",
        details:
          "Gathering and analyzing stakeholder requirements, prioritizing features, and creating detailed project specifications.",
      },
      {
        step: "3",
        icon: "📊",
        title: "Resource Planning",
        description: "Team and budget allocation",
        details:
          "Planning resource allocation, budget management, team structure, and technology stack recommendations.",
      },
      {
        step: "4",
        icon: "🔄",
        title: "Agile Execution",
        description: "Iterative project delivery",
        details:
          "Managing sprints, daily standups, and ensuring continuous delivery with regular stakeholder demonstrations.",
      },
      {
        step: "5",
        icon: "⚡",
        title: "Risk Management",
        description: "Proactive issue resolution",
        details:
          "Identifying potential risks, creating mitigation strategies, and managing change requests effectively.",
      },
      {
        step: "6",
        icon: "🤝",
        title: "Stakeholder Management",
        description: "Communication & reporting",
        details:
          "Maintaining clear communication channels, providing regular progress reports, and managing expectations.",
      },
      {
        step: "7",
        icon: "🚀",
        title: "Delivery & Transition",
        description: "Project closure & handover",
        details:
          "Ensuring successful project delivery, documentation, team transition, and post-implementation support.",
      },
    ],
  };

  // Tab-specific tech stack data with flip cards
  const techStackFlipData = {
    software: [
      {
        id: 1,
        title: "Frontend Development",
        skills: [
          "React",
          "Vue.js",
          "Angular",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Next.js",
        ],
        icon: "🎨",
        backContent:
          "Modern frontend frameworks and libraries for building responsive, interactive user interfaces with optimal performance and user experience.",
      },
      {
        id: 2,
        title: "Backend Systems",
        skills: [
          "Node.js",
          "Python",
          "Java",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "Express.js",
          "Spring Boot",
        ],
        icon: "⚙️",
        backContent:
          "Robust server-side development, database management, and API design for scalable and secure applications.",
      },
      {
        id: 3,
        title: "Cloud & DevOps",
        skills: [
          "AWS",
          "Azure",
          "Google Cloud",
          "Kubernetes",
          "CI/CD",
          "Terraform",
          "Jenkins",
          "GitLab",
          "Nginx",
        ],
        icon: "☁️",
        backContent:
          "Cloud infrastructure, containerization, and DevOps practices for scalable deployment and maintenance.",
      },
      {
        id: 4,
        title: "Database Management",
        skills: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Elasticsearch",
          "SQL Server",
          "Database Design",
          "ORM",
        ],
        icon: "💾",
        backContent:
          "Expertise in database design, optimization, and management across relational and NoSQL systems.",
      },
      {
        id: 5,
        title: "API Development",
        skills: [
          "REST APIs",
          "GraphQL",
          "Microservices",
          "WebSockets",
          "Authentication",
          "API Gateway",
          "Swagger",
          "Postman",
        ],
        icon: "🔌",
        backContent:
          "Designing and developing robust APIs and microservices architecture for seamless system integration.",
      },
      {
        id: 6,
        title: "System Architecture",
        skills: [
          "Microservices",
          "Monolith",
          "Serverless",
          "Event-Driven",
          "Scalability",
          "Security",
          "Performance",
          "Design Patterns",
        ],
        icon: "🏗️",
        backContent:
          "Designing scalable, maintainable system architectures that meet business requirements and performance goals.",
      },
    ],
    ai: [
      {
        id: 1,
        title: "Machine Learning",
        skills: [
          "TensorFlow",
          "PyTorch",
          "Scikit-learn",
          "Keras",
          "XGBoost",
          "ML Algorithms",
          "Model Training",
          "Feature Engineering",
        ],
        icon: "🧠",
        backContent:
          "Building and training machine learning models for prediction, classification, and pattern recognition tasks.",
      },
      {
        id: 2,
        title: "Deep Learning",
        skills: [
          "Neural Networks",
          "CNN",
          "RNN",
          "Transformers",
          "Computer Vision",
          "NLP",
          "GANs",
          "AutoML",
        ],
        icon: "🔬",
        backContent:
          "Advanced deep learning techniques for complex problems in vision, language, and generative AI.",
      },
      {
        id: 3,
        title: "Data Science",
        skills: [
          "Python",
          "Pandas",
          "NumPy",
          "Data Analysis",
          "Statistics",
          "Visualization",
          "Jupyter",
          "MLflow",
        ],
        icon: "📊",
        backContent:
          "Data analysis, statistical modeling, and visualization to derive insights and support decision making.",
      },
      {
        id: 4,
        title: "AI Deployment",
        skills: [
          "FastAPI",
          "Flask",
          "Docker",
          "Kubernetes",
          "ONNX",
          "TensorRT",
          "Model Serving",
          "MLOps",
        ],
        icon: "🚀",
        backContent:
          "Deploying and serving AI models in production environments with monitoring and scalability.",
      },
      {
        id: 5,
        title: "Computer Vision",
        skills: [
          "OpenCV",
          "Image Processing",
          "Object Detection",
          "Image Segmentation",
          "Face Recognition",
          "YOLO",
          "Medical Imaging",
        ],
        icon: "👁️",
        backContent:
          "Developing computer vision applications for image analysis, recognition, and processing tasks.",
      },
      {
        id: 6,
        title: "Natural Language",
        skills: [
          "NLTK",
          "spaCy",
          "Transformers",
          "BERT",
          "GPT",
          "Sentiment Analysis",
          "Text Classification",
          "Chatbots",
        ],
        icon: "💬",
        backContent:
          "Natural language processing for text analysis, understanding, and generation applications.",
      },
    ],
    mobile: [
      {
        id: 1,
        title: "Cross-Platform",
        skills: [
          "React Native",
          "Flutter",
          "Ionic",
          "Xamarin",
          "JavaScript",
          "Dart",
          "TypeScript",
          "Expo",
        ],
        icon: "📱",
        backContent:
          "Building cross-platform mobile applications that run seamlessly on both iOS and Android platforms.",
      },
      {
        id: 2,
        title: "Native iOS",
        skills: [
          "Swift",
          "Objective-C",
          "Xcode",
          "UIKit",
          "SwiftUI",
          "Core Data",
          "CocoaPods",
          "App Store",
        ],
        icon: "🍎",
        backContent:
          "Native iOS development with Swift and Objective-C for optimal performance and user experience.",
      },
      {
        id: 3,
        title: "Native Android",
        skills: [
          "Kotlin",
          "Java",
          "Android Studio",
          "Jetpack Compose",
          "Room DB",
          "Material Design",
          "Gradle",
          "Play Store",
        ],
        icon: "🤖",
        backContent:
          "Native Android development with Kotlin and Java following Material Design principles.",
      },
      {
        id: 4,
        title: "Mobile Backend",
        skills: [
          "Firebase",
          "AWS Amplify",
          "GraphQL",
          "REST APIs",
          "Push Notifications",
          "Authentication",
          "Cloud Storage",
          "Real-time DB",
        ],
        icon: "☁️",
        backContent:
          "Backend services and APIs specifically designed for mobile application requirements.",
      },
      {
        id: 5,
        title: "UI/UX Mobile",
        skills: [
          "Figma",
          "Adobe XD",
          "Prototyping",
          "User Research",
          "Mobile Design",
          "Responsive Design",
          "Animation",
          "Accessibility",
        ],
        icon: "🎯",
        backContent:
          "Designing intuitive mobile interfaces with focus on user experience and platform guidelines.",
      },
      {
        id: 6,
        title: "Mobile Tools",
        skills: [
          "App Center",
          "Fastlane",
          "Crashlytics",
          "TestFlight",
          "Google Play Console",
          "Analytics",
          "CI/CD Mobile",
          "Debugging",
        ],
        icon: "🔧",
        backContent:
          "Development tools and services for testing, deployment, and monitoring of mobile applications.",
      },
    ],
    management: [
      {
        id: 1,
        title: "Project Management",
        skills: [
          "Agile Methodology",
          "Scrum Framework",
          "Kanban",
          "Sprint Planning",
          "JIRA",
          "Asana",
          "Trello",
          "Risk Management",
        ],
        icon: "📊",
        backContent:
          "End-to-end project management using agile methodologies to ensure timely delivery and quality outcomes.",
      },
      {
        id: 2,
        title: "Team Leadership",
        skills: [
          "Team Building",
          "Stakeholder Management",
          "Conflict Resolution",
          "Performance Reviews",
          "Mentoring",
          "Remote Teams",
          "Communication",
          "Decision Making",
        ],
        icon: "👨‍💼",
        backContent:
          "Leading cross-functional teams, fostering collaboration, and ensuring effective communication across all stakeholders.",
      },
      {
        id: 3,
        title: "Technical Strategy",
        skills: [
          "Technology Roadmaps",
          "System Architecture",
          "Cloud Strategy",
          "Digital Transformation",
          "Vendor Evaluation",
          "Budget Planning",
          "ROI Analysis",
          "Innovation",
        ],
        icon: "🎯",
        backContent:
          "Developing comprehensive technology strategies aligned with business objectives and market trends.",
      },
    //   {
    //     id: 4,
    //     title: "Quality Assurance",
    //     skills: [
    //       "Test Strategy",
    //       "QA Processes",
    //       "Automated Testing",
    //       "Performance Testing",
    //       "Security Testing",
    //       "Code Reviews",
    //       "CI/CD Pipelines",
    //       "Quality Metrics",
    //     ],
    //     icon: "🛡️",
    //     backContent:
    //       "Implementing robust quality assurance processes and automated testing strategies for reliable software delivery.",
    //   },
    //   {
    //     id: 5,
    //     title: "DevOps & Deployment",
    //     skills: [
    //       "CI/CD Implementation",
    //       "Infrastructure as Code",
    //       "Cloud Deployment",
    //       "Monitoring & Logging",
    //       "Security Compliance",
    //       "Disaster Recovery",
    //       "Performance Optimization",
    //       "Scalability",
    //     ],
    //     icon: "🚀",
    //     backContent:
    //       "Streamlining development operations with automated deployment pipelines and robust infrastructure management.",
    //   },
      {
        id: 6,
        title: "Business Analysis",
        skills: [
          "Requirements Gathering",
          "Process Modeling",
          "User Stories",
          "Use Case Development",
          "Data Analysis",
          "Stakeholder Interviews",
          "Documentation",
          "Solution Design",
        ],
        icon: "🔍",
        backContent:
          "Analyzing business needs, defining requirements, and designing solutions that deliver maximum business value.",
      },
    ],
  };

  // Enhanced project examples with descriptions
  const projectExamples = {
    software: [
      {
        name: "Enterprise SaaS Platform",
        description: "Cloud-based software solution for business automation",
      },
      {
        name: "E-commerce Ecosystem",
        description: "Multi-vendor marketplace with payment integration",
      },
      {
        name: "Real-time Analytics Dashboard",
        description: "Data visualization platform with live updates",
      },
      {
        name: "CRM & Sales Automation",
        description: "Customer relationship management with AI insights",
      },
    ],
    ai: [
      {
        name: "Predictive Maintenance System",
        description: "AI-powered equipment failure prediction",
      },
      {
        name: "Intelligent Chatbot Platform",
        description: "Natural language processing for customer service",
      },
      {
        name: "Computer Vision Quality Control",
        description: "Automated visual inspection using deep learning",
      },
      {
        name: "Recommendation Engine",
        description: "Personalized content and product recommendations",
      },
    ],
    mobile: [
      {
        name: "Cross-Platform Food Delivery App",
        description: "Real-time ordering with GPS tracking",
      },
      {
        name: "Fitness & Health Tracker",
        description: "Workout plans with progress analytics",
      },
      {
        name: "Social Media Platform",
        description: "Content sharing with real-time interactions",
      },
      {
        name: "E-commerce Mobile App",
        description: "Seamless shopping with secure payments",
      },
    ],
    management: [
      {
        name: "Digital Transformation Initiative",
        description: "Leading enterprise-wide technology modernization program",
      },
      {
        name: "Startup Product Launch",
        description:
          "End-to-end project management for new product development",
      },
      {
        name: "Agile Team Scaling",
        description: "Growing development teams from 5 to 50+ members",
      },
      {
        name: "Compliance & Security Overhaul",
        description:
          "Implementing enterprise security standards and compliance",
      },
    ],
  };

  // Enhanced key features with icons
  const keyFeatures = {
    software: [
      {
        icon: "⚡",
        feature: "High Performance",
        description: "Optimized for speed and scalability",
      },
      {
        icon: "🔒",
        feature: "Enterprise Security",
        description: "Bank-level security protocols",
      },
      {
        icon: "📊",
        feature: "Real-time Analytics",
        description: "Live data processing and insights",
      },
      {
        icon: "🔄",
        feature: "CI/CD Pipelines",
        description: "Automated testing and deployment",
      },
      {
        icon: "☁️",
        feature: "Cloud Native",
        description: "Built for cloud infrastructure",
      },
      {
        icon: "📱",
        feature: "Responsive Design",
        description: "Perfect on all devices",
      },
    ],
    ai: [
      {
        icon: "🧠",
        feature: "Deep Learning",
        description: "Advanced neural networks",
      },
      {
        icon: "📈",
        feature: "Predictive Analytics",
        description: "Future trend forecasting",
      },
      {
        icon: "🔍",
        feature: "Computer Vision",
        description: "Image and video analysis",
      },
      {
        icon: "💬",
        feature: "NLP Processing",
        description: "Natural language understanding",
      },
      {
        icon: "🔄",
        feature: "Continuous Learning",
        description: "Self-improving algorithms",
      },
      {
        icon: "⚡",
        feature: "Real-time Inference",
        description: "Instant AI predictions",
      },
    ],
    mobile: [
      {
        icon: "📱",
        feature: "Native Performance",
        description: "Smooth 60fps experience",
      },
      {
        icon: "🌐",
        feature: "Cross-Platform",
        description: "Single codebase, multiple platforms",
      },
      {
        icon: "📶",
        feature: "Offline First",
        description: "Works without internet connection",
      },
      {
        icon: "🔔",
        feature: "Push Notifications",
        description: "Engaging user communication",
      },
      {
        icon: "🎨",
        feature: "Beautiful UI",
        description: "Platform-specific design patterns",
      },
      {
        icon: "⚡",
        feature: "Fast Loading",
        description: "Optimized for mobile networks",
      },
    ],
    management: [
      {
        icon: "🎯",
        feature: "Strategic Planning",
        description: "Comprehensive project roadmaps and vision",
      },
      {
        icon: "🔄",
        feature: "Agile Delivery",
        description: "Iterative development with continuous feedback",
      },
      {
        icon: "📈",
        feature: "Risk Management",
        description: "Proactive identification and mitigation",
      },
      {
        icon: "🤝",
        feature: "Stakeholder Alignment",
        description: "Clear communication and expectation management",
      },
      {
        icon: "⚡",
        feature: "Process Optimization",
        description: "Streamlined workflows and efficiency improvements",
      },
      {
        icon: "🎓",
        feature: "Team Leadership",
        description: "Mentoring and guiding development teams",
      },
    ],
  };

  const currentProcess = developmentProcess[activeTab];
  const currentFlipCards = techStackFlipData[activeTab];
  const currentExamples = projectExamples[activeTab];
  const currentFeatures = keyFeatures[activeTab];

  const approachTitles = {
    software: "Software Development Excellence",
    ai: "Artificial Intelligence Solutions",
    mobile: "Mobile App Development",
    management: "Project Management & Tech Consulting",
  };

  const pageTitles = {
    software: "Enterprise Software Development",
    ai: "AI & Machine Learning",
    mobile: "Mobile Application Development",
    management: "Project Management & Tech Consulting",
  };

  const pageDescriptions = {
    software:
      "Building scalable, secure, and high-performance software solutions that drive business growth and digital transformation",
    ai: "Creating intelligent systems with machine learning, deep learning, and AI technologies to solve complex business challenges",
    mobile:
      "Developing beautiful, high-performance mobile applications that deliver exceptional user experiences across all platforms",
    management:
      "Leading technology initiatives with strategic planning, agile execution, and comprehensive project lifecycle management",
  };

  return (
    <div className="min-h-screen bg-[#050816] relative w-full mx-auto">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            {/* Development Services Header */}
            <div className="text-center mb-16">
              <h1 className={`${styles.sectionHeadText}  font-bold text-white mb-6`}>
                {pageTitles[activeTab]} <span className="text-3xl">💡</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C3BFFB] mb-8 max-w-3xl mx-auto leading-relaxed">
                {pageDescriptions[activeTab]}
              </p>

              {/* Service Navigation Tabs */}
              <div className="flex flex-wrap justify-center gap-2 bg-[#151722] rounded-2xl p-2 max-w-3xl mx-auto border border-gray-800">
                {["software", "ai", "mobile", "management"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white shadow-lg scale-105"
                        : "text-[#C3BFFB] hover:text-white hover:bg-[#1a1a2e] hover:scale-105"
                    }`}
                  >
                    <span className="text-lg">
                      {tab === "software" && "💻"}
                      {tab === "ai" && "🤖"}
                      {tab === "mobile" && "📱"}
                      {tab === "management" && "📊"}
                    </span>
                    {tab === "software" && "Software"}
                    {tab === "ai" && "AI"}
                    {tab === "mobile" && "Mobile"}
                    {tab === "management" && "Management"}
                  </button>
                ))}
              </div>
            </div>

            {/* Development Process Section */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {approachTitles[activeTab]}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto"></div>
                <p className="text-[#C3BFFB] mt-4 max-w-2xl mx-auto">
                  {activeTab === "management"
                    ? "Strategic approach to technology leadership and project delivery excellence"
                    : "A comprehensive methodology delivering exceptional results through proven processes"}
                </p>
              </div>

              {/* Development Process Steps */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProcess.map((step, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`
                      relative bg-[#151722] border border-gray-800 rounded-2xl p-6 
                      transition-all duration-500 h-full
                      ${
                        hoveredCard === index
                          ? "transform scale-105 border-[#915EFF] shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-[#151722] to-[#1a1a2e]"
                          : "hover:border-[#915EFF]/50 hover:shadow-lg"
                      }
                    `}
                    >
                      {/* Step Number and Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300
                          ${
                            hoveredCard === index
                              ? "bg-gradient-to-br from-[#915EFF] to-[#7d4dff] scale-110"
                              : "bg-gradient-to-br from-[#915EFF] to-[#7d4dff]"
                          }
                        `}
                        >
                          {step.step}
                        </div>
                        <span
                          className={`
                          text-3xl transition-all duration-300
                          ${hoveredCard === index ? "scale-110" : ""}
                        `}
                        >
                          {step.icon}
                        </span>
                      </div>

                      {/* Step Content */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#C3BFFB] text-sm mb-3 font-medium">
                        {step.description}
                      </p>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {step.details}
                      </p>

                      {/* Hover Effect Line */}
                      <div
                        className={`
                        absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-full transition-all duration-500
                        ${hoveredCard === index ? "w-full" : "w-0"}
                      `}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack Flip Cards Section */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {activeTab === "management"
                    ? "Expertise & Methodologies"
                    : "Technology Stack"}
                </h2>
                <p className="text-[#C3BFFB]">
                  {activeTab === "management"
                    ? "Hover over the cards to discover my management expertise and methodologies"
                    : "Hover over the cards to discover my technical expertise"}
                </p>
              </div>

              {/* Flip Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentFlipCards.map((category) => (
                  <div
                    key={category.id}
                    className="flip-card h-[300px]"
                    onMouseEnter={() => setFlippedCard(category.id)}
                    onMouseLeave={() => setFlippedCard(null)}
                  >
                    <div
                      className={`
                      flip-card-inner w-full h-full relative transition-all duration-500
                      ${flippedCard === category.id ? "flip-card-rotate" : ""}
                    `}
                    >
                      {/* Front of Card */}
                      <div className="flip-card-front absolute w-full h-full bg-[#151722] border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        {/* Icon */}
                        <div className="text-4xl mb-4">{category.icon}</div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-[#C3BFFB] mb-3">
                          {category.title}
                        </h3>

                        {/* Skills Preview */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {category.skills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[#915EFF]/20 text-[#C3BFFB] text-xs rounded-full border border-[#915EFF]/30"
                            >
                              {skill}
                            </span>
                          ))}
                          {category.skills.length > 3 && (
                            <span className="px-2 py-1 bg-[#915EFF]/10 text-[#C3BFFB] text-xs rounded-full">
                              +{category.skills.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Hover Hint */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="flex items-center gap-1 text-[#915EFF] text-sm">
                            <span>Hover to flip</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Back of Card */}
                      <div className="flip-card-back absolute w-full h-full bg-[#151722] border-2 border-[#915EFF] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        {/* Back Icon */}
                        <div className="text-3xl mb-3 text-[#915EFF]">
                          {category.icon}
                        </div>

                        {/* Back Title */}
                        <h3 className="text-xl font-bold text-white mb-3">
                          {category.title}
                        </h3>

                        {/* Back Description */}
                        <p className="text-[#C3BFFB] text-sm mb-4 leading-relaxed">
                          {category.backContent}
                        </p>

                        {/* All Skills */}
                        <div className="flex flex-wrap justify-center gap-1">
                          {category.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[#915EFF]/30 text-white text-xs rounded-full border border-[#915EFF]/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                 
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features and Examples Section */}
            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Key Features */}
                <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6 hover:border-[#915EFF]/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">⭐</span>
                    {activeTab === "management"
                      ? "Core Competencies"
                      : "Key Features & Capabilities"}
                  </h3>
                  <div className="space-y-4">
                    {currentFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                      >
                        <span className="text-2xl flex-shrink-0">
                          {feature.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-white text-lg">
                            {feature.feature}
                          </h4>
                          <p className="text-[#C3BFFB] text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Examples */}
                <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6 hover:border-[#915EFF]/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">🚀</span>
                    {activeTab === "management"
                      ? "Consulting Engagements"
                      : "Project Examples"}
                  </h3>
                  <div className="space-y-4">
                    {currentExamples.map((example, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-all duration-300 group"
                      >
                        <h4 className="font-semibold text-white text-lg group-hover:text-[#915EFF] transition-colors duration-300">
                          {example.name}
                        </h4>
                        <p className="text-[#C3BFFB] text-sm mt-1">
                          {example.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            
         
          </div>
          {/* <StarsCanvas /> */}
        </div>
      </section>

      {/* Custom CSS for Flip Effect */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-rotate {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ExplorePage;
