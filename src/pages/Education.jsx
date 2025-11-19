import React, { useState, useEffect, useRef } from "react";

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

  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTag, setHoveredTag] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, id]);
            }, parseInt(entry.target.dataset.delay || 0));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px -50px 0px" }
    );

    const elements = sectionRef.current.querySelectorAll("[data-observe]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleItems.includes(id);

  return (
    <section ref={sectionRef} className="py-4 bg-[#050816]-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          data-observe
          data-id="header"
          className={`text-center mb-4 transition-all duration-700 transform ${
            isVisible("header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#C3BFFB] mb-2">
            Education & Learning
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            My academic journey and continuous learning path in technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              data-observe
              data-id={`edu-${edu.id}`}
              data-delay={index * 200}
              className={`flex gap-4 group transition-all duration-700 transform ${
                isVisible(`edu-${edu.id}`)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Timeline Indicator */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-3 h-3 bg-[#915EFF] rounded-full transition-all duration-300 cursor-pointer ${
                    hoveredCard === edu.id ? "scale-125" : "scale-100"
                  }`}
                />
                <div className="w-1 h-full bg-[#915EFF] opacity-30 mt-1" />
              </div>

              {/* Education Card */}
              <div
                className={`flex-1 bg-[#151030] p-4 rounded-xl border transition-all duration-300 ${
                  hoveredCard === edu.id
                    ? "border-[#915EFF] scale-[1.02] shadow-lg shadow-[#915EFF]/10"
                    : "border-gray-800 scale-100"
                }`}
                onMouseEnter={() => setHoveredCard(edu.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3
                    className={`text-lg font-bold transition-colors duration-300 ${
                      hoveredCard === edu.id ? "text-[#915EFF]" : "text-white"
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <span className="text-[#915EFF] font-semibold bg-[#915EFF]/10 px-2 py-1 rounded-full text-xs mt-1 sm:mt-0">
                    {edu.period}
                  </span>
                </div>

                {/* Institution */}
                <p
                  className={`text-[#C3BFFB] font-medium mb-3 transition-opacity duration-300 ${
                    hoveredCard === edu.id ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {edu.institution}
                </p>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-6 text-sm">
                  {edu.description}
                </p>

                {/* Additional Information Sections */}
                <div className="space-y-3">
                  {/* Status Badge */}
                  {edu.status && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>
                  )}

                  {/* Courses Section */}
                  {edu.courses && (
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">
                        Key Courses:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {edu.courses.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className={`px-2 py-1 rounded-full text-xs border cursor-pointer transition-all duration-200 ${
                              hoveredTag === `${edu.id}-courses-${itemIndex}`
                                ? "bg-[#915EFF] text-white border-[#915EFF] scale-105"
                                : "bg-[#1a1a2e] text-[#C3BFFB] border-gray-700"
                            }`}
                            onMouseEnter={() =>
                              setHoveredTag(`${edu.id}-courses-${itemIndex}`)
                            }
                            onMouseLeave={() => setHoveredTag(null)}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dynamic Content Sections */}
                  {[
                    {
                      key: "technologies",
                      title: "Technologies",
                      data: edu.technologies,
                    },
                    { key: "skills", title: "Skills Gained", data: edu.skills },
                    {
                      key: "platforms",
                      title: "Learning Platforms",
                      data: edu.platforms,
                    },
                  ].map(
                    (section) =>
                      section.data && (
                        <div key={section.key}>
                          <h4 className="text-white text-sm font-semibold mb-2">
                            {section.title}:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {section.data.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className={`px-2 py-1 rounded-full text-xs border cursor-pointer transition-all duration-200 ${
                                  hoveredTag ===
                                  `${edu.id}-${section.key}-${itemIndex}`
                                    ? "bg-[#915EFF] text-white border-[#915EFF] scale-105"
                                    : "bg-[#1a1a2e] text-[#C3BFFB] border-gray-700"
                                }`}
                                onMouseEnter={() =>
                                  setHoveredTag(
                                    `${edu.id}-${section.key}-${itemIndex}`
                                  )
                                }
                                onMouseLeave={() => setHoveredTag(null)}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                  )}

                  {/* List Sections */}
                  {[
                    {
                      key: "achievements",
                      title: "Achievements",
                      data: edu.achievements,
                    },
                    { key: "projects", title: "Projects", data: edu.projects },
                  ].map(
                    (section) =>
                      section.data && (
                        <div key={section.key}>
                          <h4 className="text-white text-sm font-semibold mb-2">
                            {section.title}:
                          </h4>
                          <ul className="text-gray-400 text-sm space-y-1">
                            {section.data.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1 hover:text-[#C3BFFB] cursor-pointer"
                              >
                                <span className="text-[#915EFF] mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span className="text-xs">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
