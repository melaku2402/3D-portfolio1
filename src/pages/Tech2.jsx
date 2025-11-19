
import { useState, useEffect, useRef } from "react";
import {
  // Frontend Icons
  FaReact,
  FaVuejs,
  FaAngular,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
} from "react-icons/si";

const Tech2 = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1, once: true }
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

  const frontendTech = [
    {
      name: "React",
      icon: <FaReact />,
      color: "text-[#61DAFB]",
    },
    {
      name: "Vue.js",
      icon: <FaVuejs />,
      color: "text-[#4FC08D]",
    },
    {
      name: "Angular",
      icon: <FaAngular />,
      color: "text-[#DD0031]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-[#FCF259]",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-[#3178C6]",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-[#E34F26]",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-[#3178C6]",
    },
  ];

  const backendTech = [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-[#339933]",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "text-[#3776AB]",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "text-[#336791]",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-[#47A248]",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-[#F05032]",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      color: "text-[#2496ED]",
    },
    {
      name: "Redis",
      icon: <SiRedis />,
      color: "text-[#DC382D]",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      color: "text-[#E10098]",
    },
  ];

  const TechGrid = ({ techIcons, title }) => (
    <div className="mb-12">
      <h4 className="text-lg md:text-xl font-semibold text-[#C3BFFB] mb-6 text-center border-b border-gray-700 pb-2">
        {title}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6">
        {techIcons.map((tech, index) => (
          <div
            key={tech.name}
            className={`relative group transition-all duration-500 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-80"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative bg-[#1a1a2e] border border-gray-800 rounded-2xl p-4 md:p-5 text-center transition-all duration-300 shadow-lg animate-subtle-rotate group-hover:rotate-360 group-hover:scale-105 group-hover:border-[#915EFF]">
              <div
                className={`text-3xl md:text-4xl mb-2 md:mb-3 ${tech.color} transition-all duration-300 group-hover:scale-125 group-hover:rotate-360`}
              >
                {tech.icon}
              </div>
              <div className="text-white font-medium text-xs md:text-sm">
                {tech.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div
        ref={sectionRef}
        className={`mt-12 md:mt-16 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        <h3 className="text-center md:mb-8 text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-6">
          Tech Stack & Tools
        </h3>

        <TechGrid techIcons={frontendTech} title="Frontend" />
        <TechGrid techIcons={backendTech} title="Backend" />
      </div>

      <style jsx>{`
        @keyframes subtleRotate {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(1deg);
          }
        }
        .animate-subtle-rotate {
          animation: subtleRotate 6s ease-in-out infinite;
        }

        @keyframes rotate360 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .group:hover .group-hover\\:rotate-360 {
          animation: rotate360 0.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default Tech2;