import { motion } from "framer-motion";
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
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"></div> */}

            <motion.div
              className="relative bg-[#1a1a2e] border border-gray-800 rounded-2xl p-4 md:p-5 text-center group-hover:scale-105 group-hover:border-[#915EFF] transition-all duration-300 shadow-lg"
              whileHover={{
                rotateZ: 360,
                transition: { duration: 0.3 },
              }}
              animate={{
                rotateZ: [0, -1, 0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <motion.div
                className={`text-3xl md:text-4xl mb-2 md:mb-3 ${tech.color}`}
                whileHover={{
                  scale: 1.2,
                  rotateZ: 360,
                  transition: { duration: 0.5 },
                }}
              >
                {tech.icon}
              </motion.div>
              <div className="text-white font-medium text-xs md:text-sm">
                {tech.name}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (

    <>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-12 md:mt-16"
    >
      <h3 className="text-xl md:text-2xl font-bold text-center text-[#C3BFFB] mb-6 md:mb-8">
        Tech Stack & Tools
      </h3>

      <TechGrid techIcons={frontendTech} title="Frontend" />
      <TechGrid techIcons={backendTech} title="Backend" />
    </motion.div>
   
    </>
  
  );
};

export default Tech2;
