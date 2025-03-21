"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // delay in ms before animation starts
  once?: boolean; // whether to animate only once or every time the element enters viewport
  className?: string;
  threshold?: number; // how much of the element needs to be in view before animating (0-1)
}

export default function ScrollReveal({
  children,
  delay = 0,
  once = true,
  className = "",
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't run on server
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is in view
        if (entry.isIntersecting) {
          // Delay the animation if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);

          // If once is true, unobserve the element after it becomes visible
          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          // If not once, set visibility to false when element leaves viewport
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold, // percentage of element visible before triggering
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once, threshold]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
} 