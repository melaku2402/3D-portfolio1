
// import React, { useState } from "react";
// import { SectionWrapper } from "../hoc";
// import { Link } from "react-router-dom";

// const servicesData = {
//   title: "How Can I Help You?",
//   services: [
//     {
//       id: 1,
//       title: "Web & Mobile Development",
//       // description:
//       //   "Building responsive and optimized web apps and Creating cross-platform mobile app modern technologies.",
//       features: [
//         "Responsive Web Applications",
//         "Cross-Platform Mobile Apps",
//         "Modern Tech Stack",
//         "Performance Optimization",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Explore More",
//       icon: "💻",
//       route: "/web-development",
//     },
//     {
//       id: 2,
//       title: "Software & AI Development",
//       // description:
//       //   "Delivering full-stack solutions and Developing intelligent systems powered by machine learning and deep learning.",
//       features: [
//         "Full-Stack Solutions",
//         "Machine Learning Systems",
//         "AI Integration",
//         "Deep Learning Models",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Explore More",
//       icon: "🤖",
//       route: "/ai-development",
//     },
//     {
//       id: 3,
//       title: "Project Management & Tech Consulting",
//       // description:
//       //   "Leading full project lifecycles from planning to deployment and Offering expert guidance to shape your technology strategy.",
//       features: [
//         "Project Lifecycle Management",
//         "Technology Strategy",
//         "Expert Guidance",
//         "Deployment & Scaling",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       buttonText: "Explore More",
//       icon: "📊",
//       route: "/consulting",
//     },
//   ],
// };

// const Services = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <section className="w-full py-6 md:py-20 mx-auto relative overflow-hidden bg-[#050816]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl  md:text-5xl font-bold text-[#C3BFFB] mb-6">
//             {servicesData.title}
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-8"></div>
//         </div>

//          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 
//                        [@media(min-width:1025px)_and_(max-width:1235px)]:grid-cols-2 
//                        gap-6 md:gap-8">
//                  {servicesData.services.map((service) => (
//                    <div
//                      key={service.id}
//                      className="relative group"
//                      onMouseEnter={() => setHoveredCard(service.id)}
//                      onMouseLeave={() => setHoveredCard(null)}
//                    >
//                      <div
//                        className={`relative bg-[#151722] border border-gray-800 
//                      rounded-2xl p-2 md:p-3 text-center 
//                      transition-all duration-300 shadow-lg ${
//                        hoveredCard === service.id
//                          ? "transform scale-105 shadow-2xl  group-hover:border-[#915EFF]"
//                          : "transform scale-100 shadow-lg border-transparent"
//                      }`}
//                      >
//                        <div className="relative h-48 overflow-hidden">
//                          <img
//                            src={service.image}
//                            alt={service.title}
//                            className={`w-full h-full object-cover transition-transform duration-700 "w-full  rounded-2xl ${
//                              hoveredCard === service.id ? "scale-100 " : "scale-100"
//                            }`}
//                          />
//                          <div className="absolute top-4 left-4 w-12 h-12 bg-[#915EFF] rounded-full flex items-center justify-center shadow-lg">
//                            <span className="text-2xl text-white">{service.icon}</span>
//                          </div>
//                          <div className="absolute bottom-4 left-4 right-4">
//                            <h3 className="text-xl font-bold text-white">
//                              {service.title}
//                            </h3>
//                          </div>
//                        </div>
       
//                        <div className="p-6">
//                          <p className="text-[#C3BFFB] mb-2  leading-relaxed">
//                            {service.description}
//                          </p>
//                          <ul className="space-y-2 mb-6">
//                            {service.features.map((feature, featureIndex) => (
//                              <li
//                                key={featureIndex}
//                                className="flex items-center text-sm text-[#C3BFFB]"
//                              >
//                                <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3"></span>
//                                {feature}
//                              </li>
//                            ))}
//                          </ul>
//                          <Link to={'/'}
//                            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent ${
//                              hoveredCard === service.id
//                                ? "border-[#7d4dff] text-white"
//                                : ""
//                            }`}
//                          >
//                            {service.buttonText}
//                          </Link>
//                        </div>
//                      </div>
//                    </div>
//                  ))}
//                </div>
//       </div>
//     </section>
//   );
// };

// export default SectionWrapper(Services, "services");


// Services.jsx (updated)
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

const servicesData = {
  title: "How Can I Help You?",
  services: [
    {
      id: 1,
      title: "Web & Mobile Development",
      features: [
        "Responsive Web Applications",
        "Cross-Platform Mobile Apps",
        "Modern Tech Stack",
        "Performance Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Explore More",
      icon: "💻",
      route: "/explore", // Changed to navigate to explore page
    },
    {
      id: 2,
      title: "Software & AI Development",
      features: [
        "Full-Stack Solutions",
        "Machine Learning Systems",
        "AI Integration",
        "Deep Learning Models",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Explore More",
      icon: "🤖",
      route: "/explore", // Changed to navigate to explore page
    },
    {
      id: 3,
      title: "Project Management & Tech Consulting",
      features: [
        "Project Lifecycle Management",
        "Technology Strategy",
        "Expert Guidance",
        "Deployment & Scaling",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Explore More",
      icon: "📊",
      route: "/explore", // Changed to navigate to explore page
    },
  ],
};

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full py-6 md:py-20 mx-auto relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C3BFFB] mb-6">
            {servicesData.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#7d4dff] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 
                      [@media(min-width:1025px)_and_(max-width:1235px)]:grid-cols-2 
                      gap-6 md:gap-8">
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-[#151722] border border-gray-800 
                rounded-2xl p-2 md:p-3 text-center 
                transition-all duration-300 shadow-lg ${
                  hoveredCard === service.id
                    ? "transform scale-105 shadow-2xl group-hover:border-[#915EFF]"
                    : "transform scale-100 shadow-lg border-transparent"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-700 rounded-2xl ${
                      hoveredCard === service.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#915EFF] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-[#C3BFFB]"
                      >
                        <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.route}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#915EFF] text-[#C3BFFB] bg-transparent ${
                      hoveredCard === service.id
                        ? "bg-[#915EFF] text-white border-[#7d4dff]"
                        : ""
                    }`}
                  >
                    {service.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Services, "services");