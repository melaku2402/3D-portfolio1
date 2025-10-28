import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ education, position }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#151722",
        color: "#C3BFFB",
        border: "1px solid #2d2d3a",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{
        borderRight:
          position === "right" ? "7px solid #151722" : "7px solid transparent",
        borderLeft:
          position === "left" ? "7px solid #151722" : "7px solid transparent",
      }}
      date={education.period}
      iconStyle={{
        background: "#915EFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      position={position}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-white font-bold text-lg">{education.id}</div>
        </div>
      }
    >
      {/* Header Section */}
      <div className="mb-4">
        <h3 className="text-[#C3BFFB] text-[20px] font-bold">
          {education.degree}
        </h3>
        <p className="text-[#915EFF] text-[16px] font-semibold mt-1">
          {education.institution}
        </p>
      </div>

      {/* Status Badge */}
      {education.status && (
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            {education.status}
          </span>
        </div>
      )}

      {/* Description */}
      <p className="text-gray-300 text-[14px] leading-6 mb-4">
        {education.description}
      </p>

      {/* Dynamic Content Sections */}
      <div className="space-y-3">
        {/* Technologies */}
        {education.technologies && (
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#915EFF]/10 text-[#C3BFFB] rounded-full text-xs border border-[#915EFF]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Courses */}
        {education.courses && (
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">
              Key Courses:
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#915EFF]/10 text-[#C3BFFB] rounded-full text-xs border border-[#915EFF]/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {education.skills && (
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">
              Skills Gained:
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#915EFF]/10 text-[#C3BFFB] rounded-full text-xs border border-[#915EFF]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Platforms */}
        {education.platforms && (
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">
              Learning Platforms:
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.platforms.map((platform, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#C3BFFB]/10 text-[#C3BFFB] rounded-full text-xs border border-[#C3BFFB]/20"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {education.achievements && (
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">
              Achievements:
            </h4>
            <ul className="text-gray-300 text-sm space-y-1">
              {education.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#915EFF] mt-1 flex-shrink-0">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Projects */}
        {education.projects && (
          <div>
            <h4 className="text-white text-sm font-semibold mb-2">Projects:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              {education.projects.map((project, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#915EFF] mt-1 flex-shrink-0">•</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "BSc in Software Engineering",
      institution: "Injibara University",
      period: "2022 - Present",
      description:
        "Currently pursuing Bachelor's degree in Software Engineering. Core studies include data structures, algorithms, software architecture, database systems, and web technologies. Actively participating in university tech events and coding competitions.",
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Computer Networks",
      ],
      status: "Current Student",
    },
    {
      id: 2,
      degree: "Full Stack Development Bootcamp",
      institution: "Evangadi Bootcamp",
      period: "2023",
      description:
        "Intensive full-stack development program focusing on modern web technologies. Completed comprehensive training in both frontend and backend development with hands-on project experience.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "HTML/CSS",
      ],
      achievements: [
        "Built multiple full-stack applications",
        "Collaborated on team projects",
        "Completed capstone project",
      ],
    },
    // {
    //   id: 3,
    //   degree: "UX/UI Design Certification",
    //   institution: "Self-Taught & Online Platforms",
    //   period: "2023 - Present",
    //   description:
    //     "Self-directed learning in user experience and user interface design principles. Completed courses and practical projects to understand user-centered design, wireframing, prototyping, and design systems.",
    //   skills: [
    //     "User Research",
    //     "Wireframing",
    //     "Prototyping",
    //     "Figma",
    //     "Adobe XD",
    //     "Design Thinking",
    //   ],
    //   platforms: [
    //     "Coursera",
    //     "Udemy",
    //     "YouTube Tutorials",
    //     "Design Community Resources",
    //   ],
    // },
    // {
    //   id: 4,
    //   degree: "Frontend Development Specialization",
    //   institution: "Online Learning Platforms",
    //   period: "2022 - Present",
    //   description:
    //     "Advanced frontend development skills through continuous learning and practice. Focused on modern JavaScript frameworks, responsive design, and performance optimization.",
    //   technologies: [
    //     "React",
    //     "Next.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Redux",
    //     "GraphQL",
    //   ],
    //   projects: [
    //     "Portfolio Website",
    //     "E-commerce Dashboard",
    //     "Real-time Chat Application",
    //   ],
    // },
  ];

  // Manually set positions for alternating sides
  const educationWithPositions = education.map((edu, index) => ({
    ...edu,
    position: index % 2 === 0 ? "left" : "right",
  }));

  return (
    <>
      <div className="text-center mb-16">
        <p className={`${styles.sectionSubText} text-center`}>
          My academic journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education & <span className="text-[#915EFF]">Learning</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          My academic journey and continuous learning path in technology
        </p>
      </div>

      <div className="mt-8 flex flex-col">
        <VerticalTimeline lineColor="#2d2d3a">
          {educationWithPositions.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              education={edu}
              position={edu.position}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Continuous Learning Footer */}
      <div className="mt-12 p-6 bg-gradient-to-r from-[#915EFF]/10 to-[#C3BFFB]/10 rounded-2xl border border-[#915EFF]/20">
        <div className="flex items-start gap-4">
          <div className="text-2xl animate-bounce">🚀</div>
          <div>
            <h4 className="text-white font-semibold mb-2 text-lg">
              Continuous Learning Journey
            </h4>
            <p className="text-gray-400 leading-7">
              I believe in lifelong learning and continuously update my skills
              through online courses, tech communities, and personal projects.
              Currently exploring advanced topics in AI/ML, cloud computing, and
              system design to stay at the forefront of technology innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
