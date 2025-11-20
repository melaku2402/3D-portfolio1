
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
      className="bg-[#1A1A2E] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] flex-shrink-0 mx-auto"
    >
      <p className="text-white font-black text-[28px] sm:text-[36px] md:text-[48px]">
        "
      </p>

      <div className="mt-1">
        <p className="text-[#C3BFFB] tracking-wider text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed line-clamp-4 sm:line-clamp-none">
          {testimonial}
        </p>

        <div className="mt-4 sm:mt-6 flex justify-between items-center gap-3">
          <div className="flex-1 flex flex-col min-w-0">
            <p className="text-white font-medium text-[13px] sm:text-[15px] md:text-[16px] truncate">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[10px] sm:text-[11px] md:text-[12px] truncate">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Auto carousel effect - continuous loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const scrollWidth = carousel.scrollWidth / 2;
        const currentScroll = carousel.scrollLeft;

        // Calculate card width based on screen size
        let cardWidth;
        if (window.innerWidth < 640) {
          cardWidth = 280 + 16; // card width + gap for mobile
        } else if (window.innerWidth < 768) {
          cardWidth = 320 + 20; // card width + gap for tablet
        } else {
          cardWidth = 340 + 24; // card width + gap for desktop
        }

        let newScroll = currentScroll + cardWidth;

        // Reset to start when reaching the end of original content
        if (newScroll >= scrollWidth) {
          newScroll = newScroll - scrollWidth;
        }

        carousel.scrollTo({
          left: newScroll,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Reset to start when reaching the end (for manual scroll)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollWidth = carousel.scrollWidth / 2;
      if (carousel.scrollLeft >= scrollWidth) {
        carousel.scrollTo({
          left: carousel.scrollLeft - scrollWidth,
          behavior: "auto",
        });
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="my-20 bg-black-100 rounded-[20px] overflow-hidden">
      <div
        className={`rounded-2xl ${styles.padding} min-h-[250px] sm:min-h-[300px]`}
      >
        <div
          ref={headerRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <p className={`${styles.sectionSubText} text-center`}>
           Feedbacks
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            What My Clients Say...
          </h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative mt-[-60px] sm:mt-[-80px] pb-12 sm:pb-14 px-3 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
      >
        {/* Carousel Track */}
        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 py-2 sm:py-4 min-w-max">
            {duplicatedTestimonials.map((testimonial, index) => (
              <FeedbackCard
                key={`${testimonial.name}-${index}`}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>

        {/* Gradient overlays for better visual effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black-100 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black-100 to-transparent pointer-events-none" />

        {/* Pause indicator */}
        {isPaused && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            Paused
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");