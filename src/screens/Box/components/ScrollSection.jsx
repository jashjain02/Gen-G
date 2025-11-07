import React from "react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

// Scroll animation wrapper component
export const ScrollSection = ({ children, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

