import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  safaricom,
  telebirr,
  angola,
  freelance,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiExpress,
  SiSass,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  SiHtml5,
} from "react-icons/si";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Safaricom Ethiopia",
    icon: safaricom,
    iconBg: "#FF0000",
    date: "January 2023 - Present",
    points: [
      "Developing digital financial services platform for the Ethiopian market.",
      "Building scalable microservices architecture using Node.js and React.",
      "Implementing M-Pesa integration and mobile money solutions.",
      "Collaborating with international teams across Kenya and Ethiopia.",
    ],
  },
  {
    title: "React.js Developer (Remote)",
    company_name: "Andela Ethiopia",
    icon: angola,
    iconBg: "#3355CC",
    date: "August 2022 - December 2022",
    points: [
      "Worked with global clients while based in Addis Ababa.",
      "Developed web applications for international startups and enterprises.",
      "Participated in distributed team collaboration across time zones.",
      "Mentored junior developers in the Andela learning program.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Melaku proved me wrong.",
    name: "Betelhem ",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Melaku does.",
    name: " Daniel Gofer",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Melaku optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Abebe Beso",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "After Melaku optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Abebe Beso",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "After Melaku optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Abebe Beso",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
        icon: SiReact,
      },
      {
        name: "mongodb",
        color: "text-[#47A248]",
        icon: SiMongodb,
      },
      {
        name: "tailwind",
        color: "text-[#06B6D4]",
        icon: SiTailwindcss,
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    id: "car-rent",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
        icon: SiReact,
      },
      {
        name: "nodejs",
        color: "text-[#339933]",
        icon: SiNodedotjs,
      },
      {
        name: "express",
        color: "text-[#F7DF1E]",
        icon: SiExpress,
      },
      {
        name: "mongodb",
        color: "text-[#47A248]",
        icon: SiMongodb,
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    id: "job-it",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "text-white",
        icon: SiNextdotjs,
      },
      {
        name: "typescript",
        color: "text-[#3178C6]",
        icon: SiTypescript,
      },
      {
        name: "tailwind",
        color: "text-[#06B6D4]",
        icon: SiTailwindcss,
      },
      {
        name: "supabase",
        color: "text-[#3ECF8E]",
        icon: SiSupabase,
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    id: "trip-guide",
  },
  {
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
        icon: SiReact,
      },
      {
        name: "nodejs",
        color: "text-[#339933]",
        icon: SiNodedotjs,
      },
      {
        name: "mongodb",
        color: "text-[#47A248]",
        icon: SiMongodb,
      },
      {
        name: "redux",
        color: "text-[#764ABC]",
        icon: SiRedux,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    source_code_link: "https://github.com/",
    id: "ecommerce-platform",
  },
  {
    name: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization and performance insights.",
    tags: [
      {
        name: "react",
        color: "text-[#61DAFB]",
        icon: SiReact,
      },
      {
        name: "typescript",
        color: "text-[#3178C6]",
        icon: SiTypescript,
      },
      {
        name: "tailwind",
        color: "text-[#06B6D4]",
        icon: SiTailwindcss,
      },
      {
        name: "nodejs",
        color: "text-[#339933]",
        icon: SiNodedotjs,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    source_code_link: "https://github.com/",
    id: "social-media-dashboard",
  },
  {
    name: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    tags: [
      {
        name: "nextjs",
        color: "text-white",
        icon: SiNextdotjs,
      },
      {
        name: "javascript",
        color: "text-[#F7DF1E]",
        icon: SiJavascript,
      },
      {
        name: "mongodb",
        color: "text-[#47A248]",
        icon: SiMongodb,
      },
      {
        name: "css",
        color: "text-[#1572B6]",
        icon: SiCss3,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    source_code_link: "https://github.com/",
    id: "task-management-app",
  },
];

export { technologies, experiences, testimonials, projects };
