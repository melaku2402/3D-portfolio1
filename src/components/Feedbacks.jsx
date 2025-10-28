import React, { useState, useEffect, useRef } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.9)",
        transition: `all 0.5s ease-out ${index * 0.2}s`,
      }}
      className="bg-[#1A1A2E] p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-[#C3BFFB] tracking-wider text-[18px]">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-[-20px] bg-black-100 rounded-[20px]">
      <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div
          ref={headerRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <p className={`${styles.sectionSubText} text-center`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Testimonials.
          </h2>
        </div>
      </div>
      <div className="mt-[-80px] pb-14 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="flex justify-center">
            <FeedbackCard index={index} {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
