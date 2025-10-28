import { scroller } from "react-scroll";

export const scrollToSection = (sectionId, options = {}) => {
  const defaultOptions = {
    duration: 800,
    delay: 0,
    smooth: true,
    offset: -80, // Adjust for navbar height
  };

  scroller.scrollTo(sectionId, {
    ...defaultOptions,
    ...options,
  });
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};
