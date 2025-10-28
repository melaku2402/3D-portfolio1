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

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  // { id: "tech-stack", title: "Tech Stack" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];
// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

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
  // {
  //   title: "Freelance Web Developer",
  //   company_name: "Various Ethiopian Clients",
  //   icon: freelance, // You can use a generic freelance icon
  //   iconBg: "#D97706",
  //   date: "2020 - 2021",
  //   points: [
  //     "Developed websites and web applications for local Ethiopian businesses and startups.",
  //     "Created e-commerce platforms for Ethiopian retailers and service providers.",
  //     "Implemented responsive designs that work well on various devices and internet speeds.",
  //     "Provided technical support and training to clients on content management systems.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Telebirr SuperApp",
  //   icon: telebirr,
  //   iconBg: "#DC2626",
  //   date: "July 2023 - October 2023",
  //   points: [
  //     "Contributed to the development of Ethiopia's first super app platform.",
  //     "Built user interfaces for digital payments, bill payments, and service bookings.",
  //     "Worked on performance optimization for low-end mobile devices.",
  //     "Implemented Amharic language localization and RTL text support.",
  //   ],
  // },
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
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, testimonials, projects };
