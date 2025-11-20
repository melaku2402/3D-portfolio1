
// import React, { useState, useRef, useEffect } from "react";
// import { 
//   // Frontend
//   FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaSass,
//   // Backend
//   FaNodeJs, FaPython, FaJava, FaDocker, FaAws,
//   // Tools
//   FaGitAlt, FaFigma, FaTrello, FaSlack,
//   // Database
//   FaDatabase,
//   // Mobile
//   FaMobileAlt
// } from "react-icons/fa";
// import {
//   // JavaScript
//   SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux,
//   // Backend
//   SiExpress, SiNestjs, SiSpringboot, SiDjango,
//   // Database
//   SiMongodb, SiPostgresql, SiMysql, SiRedis,
//   // DevOps
//   SiKubernetes, SiJenkins, SiNginx,
//   // Trading
//   SiPandas, SiTensorflow, SiAmazon,
//   // Mobile
//   SiReact, SiFlutter,
//   // Design
//   SiAdobexd, 
//   // APIs
//   SiGraphql, SiSocketdotio
// } from "react-icons/si";
// import { TbChartArcs } from "react-icons/tb";

// // Tech stack data with proper icons
// const techStackData = {
//   categories: [
//     {
//       id: 1,
//       title: "Frontend Development",
//       description: "Modern frontend frameworks and libraries",
//       icon: <FaReact className="text-2xl" />,
//       color: "from-cyan-500 to-blue-500",
//       skills: [
//         { name: "React", icon: FaReact, level: 90 },
//         { name: "TypeScript", icon: SiTypescript, level: 85 },
//         { name: "Next.js", icon: SiNextdotjs, level: 80 },
//         { name: "JavaScript", icon: SiJavascript, level: 95 },
//         { name: "Vue.js", icon: FaVuejs, level: 75 },
//         { name: "Angular", icon: FaAngular, level: 70 },
//         { name: "Tailwind CSS", icon: SiTailwindcss, level: 88 },
//         { name: "Redux", icon: SiRedux, level: 85 },
//         { name: "HTML5", icon: FaHtml5, level: 95 },
//         { name: "CSS3/SASS", icon: FaSass, level: 90 }
//       ]
//     },
//     {
//       id: 2,
//       title: "Backend Development",
//       description: "Server-side technologies and frameworks",
//       icon: <FaNodeJs className="text-2xl" />,
//       color: "from-green-500 to-emerald-500",
//       skills: [
//         { name: "Node.js", icon: FaNodeJs, level: 88 },
//         { name: "Express.js", icon: SiExpress, level: 85 },
//         { name: "Python", icon: FaPython, level: 82 },
//         { name: "Django", icon: SiDjango, level: 78 },
//         { name: "Java", icon: FaJava, level: 75 },
//         { name: "Spring Boot", icon: SiSpringboot, level: 72 },
//         { name: "NestJS", icon: SiNestjs, level: 80 },
//         { name: "GraphQL", icon: SiGraphql, level: 78 },
//         { name: "REST APIs", icon: SiAmazon, level: 90 },
//         { name: "WebSockets", icon: SiSocketdotio, level: 85 }
//       ]
//     },
//     {
//       id: 3,
//       title: "Database & DevOps",
//       description: "Database management and deployment tools",
//       icon: <FaDatabase className="text-2xl" />,
//       color: "from-orange-500 to-red-500",
//       skills: [
//         { name: "MongoDB", icon: SiMongodb, level: 85 },
//         { name: "PostgreSQL", icon: SiPostgresql, level: 82 },
//         { name: "MySQL", icon: SiMysql, level: 80 },
//         { name: "Redis", icon: SiRedis, level: 75 },
//         { name: "Docker", icon: FaDocker, level: 78 },
//         { name: "AWS", icon: FaAws, level: 76 },
//         { name: "Kubernetes", icon: SiKubernetes, level: 70 },
//         { name: "Jenkins", icon: SiJenkins, level: 72 },
//         { name: "Nginx", icon: SiNginx, level: 80 },
//         { name: "Git", icon: FaGitAlt, level: 92 }
//       ]
//     },
//     {
//       id: 4,
//       title: "Trading & FinTech",
//       description: "Algorithmic trading and financial technology",
//       icon: <TbChartArcs className="text-2xl" />,
//       color: "from-purple-500 to-pink-500",
//       skills: [
//         { name: "Algorithmic Trading", icon: TbChartArcs, level: 85 },
//         { name: "Data Analysis", icon: SiPandas, level: 82 },
//         { name: "Python for Finance", icon: FaPython, level: 84 },
//         { name: "Real-time Data", icon: SiSocketdotio, level: 88 },
//         { name: "Risk Management", icon: FaAws, level: 78 },
//         { name: "Financial APIs", icon: SiAmazon, level: 80 },
//         { name: "Machine Learning", icon: SiTensorflow, level: 75 },
//         { name: "Quantitative Analysis", icon: TbChartArcs, level: 77 }
//       ]
//     },
//     {
//       id: 5,
//       title: "Mobile Development",
//       description: "Cross-platform mobile applications",
//       icon: <FaMobileAlt className="text-2xl" />,
//       color: "from-blue-500 to-indigo-500",
//       skills: [
//         { name: "React Native", icon: SiReact, level: 82 },
//         { name: "Flutter", icon: SiFlutter, level: 75 },
//         { name: "Mobile UI/UX", icon: FaMobileAlt, level: 80 },
//         { name: "PWA", icon: FaReact, level: 78 },
//         { name: "App Deployment", icon: FaAws, level: 72 }
//       ]
//     },
//     {
//       id: 6,
//       title: "Tools & Design",
//       description: "Development tools and design systems",
//       icon: <FaFigma className="text-2xl" />,
//       color: "from-pink-500 to-rose-500",
//       skills: [
//         { name: "Figma", icon: FaFigma, level: 85 },
//         { name: "Adobe XD", icon: SiAdobexd, level: 75 },
//         { name: "Git Version Control", icon: FaGitAlt, level: 90 },
//         { name: "Agile Methodology", icon: FaTrello, level: 82 },
//         { name: "CI/CD", icon: SiJenkins, level: 78 },
//         { name: "Team Collaboration", icon: FaSlack, level: 88 },
//         { name: "Project Management", icon: FaTrello, level: 80 }
//       ]
//     }
//   ]
// };

// const SkillBar = ({ skill, level, delay, isVisible }) => {
//   const IconComponent = skill.icon;
  
//   return (
//     <div className="group p-3 rounded-lg bg-[#0f1124] hover:bg-[#151830] transition-all duration-300 border border-transparent hover:border-[#915EFF]/30">
//       <div className="flex items-center justify-between mb-2">
//         <div className="flex items-center gap-3">
//           <div className="p-2 bg-[#1a1b2e] rounded-lg group-hover:bg-[#915EFF]/10 transition-colors">
//             <IconComponent className="text-lg text-[#915EFF]" />
//           </div>
//           <span className="text-sm font-medium text-[#C3BFFB] group-hover:text-white transition-colors">
//             {skill.name}
//           </span>
//         </div>
//         <span className="text-xs text-gray-400 font-mono">{level}%</span>
//       </div>
//       <div className="w-full bg-[#1a1b2e] rounded-full h-2">
//         <div
//           className="h-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7d4dff] transition-all duration-1000 ease-out"
//           style={{
//             width: isVisible ? `${level}%` : "0%",
//             transitionDelay: `${delay}ms`
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const TechStack = () => {
//   const [activeCategory, setActiveCategory] = useState(1);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const activeCategoryData = techStackData.categories.find(
//     cat => cat.id === activeCategory
//   );

//   return (
//     <section ref={sectionRef} className="w-full py-16 md:py-20 mx-auto relative overflow-hidden bg-[#050816]">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-32 w-80 h-80 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-[#7d4dff] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/20 mb-4">
//             <span className="text-[#915EFF] text-sm font-medium">TECHNICAL EXPERTISE</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-4">
//             Technology Stack
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-6"></div>
//           <p className="text-[#C3BFFB] text-lg max-w-2xl mx-auto">
//             Comprehensive skills across modern development technologies and frameworks
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Side - Category Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6 sticky top-8">
//               <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
//               <div className="space-y-2">
//                 {techStackData.categories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setActiveCategory(category.id)}
//                     className={`w-full p-4 rounded-xl text-left transition-all duration-300 group ${
//                       activeCategory === category.id
//                         ? "bg-gradient-to-r from-[#915EFF]/20 to-[#7d4dff]/20 border border-[#915EFF] shadow-lg shadow-[#915EFF]/10"
//                         : "bg-[#0f1124] border border-transparent hover:border-[#915EFF]/30"
//                     }`}
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
//                         {category.icon}
//                       </div>
//                       <div className="flex-1">
//                         <h4 className={`font-semibold transition-colors ${
//                           activeCategory === category.id ? "text-white" : "text-[#C3BFFB] group-hover:text-white"
//                         }`}>
//                           {category.title}
//                         </h4>
//                         <p className="text-xs text-gray-400 mt-1">
//                           {category.skills.length} skills
//                         </p>
//                       </div>
//                       <div className={`w-2 h-2 rounded-full transition-all ${
//                         activeCategory === category.id 
//                           ? "bg-[#915EFF] scale-125" 
//                           : "bg-gray-600 group-hover:bg-[#915EFF]"
//                       }`} />
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Skills Grid */}
//           <div className="lg:col-span-2">
//             <div className="bg-[#151722] border border-gray-800 rounded-2xl p-8">
//               {/* Category Header */}
//               <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-800">
//                 <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeCategoryData.color} text-white shadow-lg`}>
//                   {activeCategoryData.icon}
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-white">{activeCategoryData.title}</h2>
//                   <p className="text-[#C3BFFB] mt-1">{activeCategoryData.description}</p>
//                 </div>
//               </div>

//               {/* Skills Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {activeCategoryData.skills.map((skill, index) => (
//                   <SkillBar
//                     key={skill.name}
//                     skill={skill}
//                     level={skill.level}
//                     delay={index * 100}
//                     isVisible={isVisible}
//                   />
//                 ))}
//               </div>

//               {/* Stats Footer */}
//               <div className="mt-8 pt-6 border-t border-gray-800">
//                 <div className="grid grid-cols-3 gap-6 text-center">
//                   <div>
//                     <div className="text-2xl font-bold text-white">
//                       {activeCategoryData.skills.length}
//                     </div>
//                     <div className="text-xs text-[#C3BFFB] uppercase tracking-wide">Technologies</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white">
//                       {Math.floor(
//                         activeCategoryData.skills.reduce((acc, skill) => acc + skill.level, 0) / 
//                         activeCategoryData.skills.length
//                       )}%
//                     </div>
//                     <div className="text-xs text-[#C3BFFB] uppercase tracking-wide">Avg Proficiency</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-white">
//                       {Math.floor(activeCategoryData.skills.length * 1.5)}+
//                     </div>
//                     <div className="text-xs text-[#C3BFFB] uppercase tracking-wide">Projects</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-12 text-center">
//           <div className="bg-gradient-to-r from-[#915EFF]/10 to-[#7d4dff]/10 border border-[#915EFF]/20 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-[#C3BFFB] mb-4">
//               Ready to Build Together?
//             </h3>
//             <p className="text-[#C3BFFB] mb-6 max-w-2xl mx-auto">
//               Let's leverage this technology stack to create innovative solutions for your next project.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
//                 Start a Project
//               </button>
//               <button className="px-8 py-3 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent rounded-lg font-semibold hover:bg-[#915EFF] hover:text-white transition-all duration-300">
//                 Download Resume
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;import React, { useState, useRef, useEffect } from "react";
import { useEffect, useRef, useState } from "react";
import { 
  // Frontend
  FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaSass,
  // Backend
  FaNodeJs, FaPython, FaJava, FaDocker, FaAws,
  // Tools
  FaGitAlt, FaFigma, FaTrello, FaSlack,
  // Database
  FaDatabase,
  // Mobile
  FaMobileAlt
} from "react-icons/fa";
import {
  // JavaScript
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux,
  // Backend
  SiExpress, SiNestjs, SiSpringboot, SiDjango,
  // Database
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  // DevOps
  SiKubernetes, SiJenkins, SiNginx,
  // Trading
  SiPandas, SiTensorflow, SiAmazon,
  // Mobile
  SiReact, SiFlutter,
  // Design
  SiAdobexd, 
  // APIs
  SiGraphql, SiSocketdotio
} from "react-icons/si";
import { TbChartArcs } from "react-icons/tb";

// Tech stack data with proper icons
const techStackData = {
  categories: [
    {
      id: 1,
      title: "Frontend Development",
      description: "Modern frontend frameworks and libraries",
      icon: <FaReact className="text-2xl" />,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React", icon: FaReact, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "Next.js", icon: SiNextdotjs, level: 80 },
        { name: "JavaScript", icon: SiJavascript, level: 95 },
        { name: "Vue.js", icon: FaVuejs, level: 75 },
        { name: "Angular", icon: FaAngular, level: 70 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 88 },
        { name: "Redux", icon: SiRedux, level: 85 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3/SASS", icon: FaSass, level: 90 }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Server-side technologies and frameworks",
      icon: <FaNodeJs className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 88 },
        { name: "Express.js", icon: SiExpress, level: 85 },
        { name: "Python", icon: FaPython, level: 82 },
        { name: "Django", icon: SiDjango, level: 78 },
        { name: "Java", icon: FaJava, level: 75 },
        { name: "Spring Boot", icon: SiSpringboot, level: 72 },
        { name: "NestJS", icon: SiNestjs, level: 80 },
        { name: "GraphQL", icon: SiGraphql, level: 78 },
        { name: "REST APIs", icon: SiAmazon, level: 90 },
        { name: "WebSockets", icon: SiSocketdotio, level: 85 }
      ]
    },
    {
      id: 3,
      title: "Database & DevOps",
      description: "Database management and deployment tools",
      icon: <FaDatabase className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 82 },
        { name: "MySQL", icon: SiMysql, level: 80 },
        { name: "Redis", icon: SiRedis, level: 75 },
        { name: "Docker", icon: FaDocker, level: 78 },
        { name: "AWS", icon: FaAws, level: 76 },
        { name: "Kubernetes", icon: SiKubernetes, level: 70 },
        { name: "Jenkins", icon: SiJenkins, level: 72 },
        { name: "Nginx", icon: SiNginx, level: 80 },
        { name: "Git", icon: FaGitAlt, level: 92 }
      ]
    },
    {
      id: 4,
      title: "Trading & FinTech",
      description: "Algorithmic trading and financial technology",
      icon: <TbChartArcs className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Algorithmic Trading", icon: TbChartArcs, level: 85 },
        { name: "Data Analysis", icon: SiPandas, level: 82 },
        { name: "Python for Finance", icon: FaPython, level: 84 },
        { name: "Real-time Data", icon: SiSocketdotio, level: 88 },
        { name: "Risk Management", icon: FaAws, level: 78 },
        { name: "Financial APIs", icon: SiAmazon, level: 80 },
        { name: "Machine Learning", icon: SiTensorflow, level: 75 },
        { name: "Quantitative Analysis", icon: TbChartArcs, level: 77 }
      ]
    },
    {
      id: 5,
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      icon: <FaMobileAlt className="text-2xl" />,
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "React Native", icon: SiReact, level: 82 },
        { name: "Flutter", icon: SiFlutter, level: 75 },
        { name: "Mobile UI/UX", icon: FaMobileAlt, level: 80 },
        { name: "PWA", icon: FaReact, level: 78 },
        { name: "App Deployment", icon: FaAws, level: 72 }
      ]
    },
    {
      id: 6,
      title: "Tools & Design",
      description: "Development tools and design systems",
      icon: <FaFigma className="text-2xl" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", icon: FaFigma, level: 85 },
        { name: "Adobe XD", icon: SiAdobexd, level: 75 },
        { name: "Git Version Control", icon: FaGitAlt, level: 90 },
        { name: "Agile Methodology", icon: FaTrello, level: 82 },
        { name: "CI/CD", icon: SiJenkins, level: 78 },
        { name: "Team Collaboration", icon: FaSlack, level: 88 },
        { name: "Project Management", icon: FaTrello, level: 80 }
      ]
    }
  ]
};

const SkillBar = ({ skill, level, delay, isVisible }) => {
  const IconComponent = skill.icon;
  
  return (
    <div className="group p-3 rounded-lg bg-[#0f1124] hover:bg-[#151830] transition-all duration-300 border border-transparent hover:border-[#915EFF]/30">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#1a1b2e] rounded-lg group-hover:bg-[#915EFF]/10 transition-colors">
            <IconComponent className="text-lg text-[#915EFF]" />
          </div>
          <span className="text-sm font-medium text-[#C3BFFB] group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono">{level}%</span>
      </div>
      <div className="w-full bg-[#1a1b2e] rounded-full h-2">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7d4dff] transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const activeCategoryData = techStackData.categories.find(
    cat => cat.id === activeCategory
  );

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 mx-auto relative overflow-hidden bg-[#050816]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-[#915EFF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-[#7d4dff] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/20 mb-4">
            <span className="text-[#915EFF] text-sm font-medium">TECHNICAL EXPERTISE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-4">
            Technology Stack
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-6"></div>
          <p className="text-[#C3BFFB] text-lg max-w-2xl mx-auto">
            Hover over categories to explore skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-[#151722] border border-gray-800 rounded-2xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {techStackData.categories.map((category) => (
                  <div
                    key={category.id}
                    onMouseEnter={() => setActiveCategory(category.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 group cursor-pointer ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-[#915EFF]/20 to-[#7d4dff]/20 border border-[#915EFF] shadow-lg shadow-[#915EFF]/10"
                        : "bg-[#0f1124] border border-transparent hover:border-[#915EFF]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold transition-colors ${
                          activeCategory === category.id ? "text-white" : "text-[#C3BFFB] group-hover:text-white"
                        }`}>
                          {category.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                          {category.skills.length} skills
                        </p>
                      </div>
                      <div className={`w-2 h-2 rounded-full transition-all ${
                        activeCategory === category.id 
                          ? "bg-[#915EFF] scale-125" 
                          : "bg-gray-600 group-hover:bg-[#915EFF]"
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Skills Grid */}
          <div className="lg:col-span-2">
            <div className="bg-[#151722] border border-gray-800 rounded-2xl p-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-800">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeCategoryData.color} text-white shadow-lg`}>
                  {activeCategoryData.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{activeCategoryData.title}</h2>
                  <p className="text-[#C3BFFB] mt-1">{activeCategoryData.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategoryData.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    level={skill.level}
                    delay={index * 100}
                    isVisible={isVisible}
                  />
                ))}
              </div>

              {/* Stats Footer */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {activeCategoryData.skills.length}
                    </div>
                    <div className="text-xs text-[#C3BFFB] uppercase tracking-wide">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {Math.floor(
                        activeCategoryData.skills.reduce((acc, skill) => acc + skill.level, 0) / 
                        activeCategoryData.skills.length
                      )}%
                    </div>
                    <div className="text-xs text-[#C3BFFB] uppercase tracking-wide">Avg Proficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {Math.floor(activeCategoryData.skills.length * 1.5)}+
                    </div>
                    <div className="text-xs text-[#C3BFFB] uppercase tracking-wide">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#915EFF]/10 to-[#7d4dff]/10 border border-[#915EFF]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#C3BFFB] mb-4">
              Ready to Build Together?
            </h3>
            <p className="text-[#C3BFFB] mb-6 max-w-2xl mx-auto">
              Let's leverage this technology stack to create innovative solutions for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Start a Project
              </button>
              <button className="px-8 py-3 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent rounded-lg font-semibold hover:bg-[#915EFF] hover:text-white transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;