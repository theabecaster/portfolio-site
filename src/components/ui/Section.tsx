"use client";

import React from "react";
import classNames from "classnames";
import ScrollReveal from "./ScrollReveal";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  innerClassName?: string;
  fullWidth?: boolean;
  withPadding?: boolean;
  withAnimation?: boolean;
  animationDelay?: number;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  innerClassName = "",
  fullWidth = false,
  withPadding = true,
  withAnimation = true,
  animationDelay = 0,
}) => {
  const sectionContent = (
    <section
      id={id}
      className={classNames(
        "relative",
        withPadding && "py-16 md:py-24",
        className
      )}
    >
      <div
        className={classNames(
          !fullWidth && "container mx-auto px-4",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );

  // Wrap with ScrollReveal if animation is enabled
  if (withAnimation) {
    return (
      <ScrollReveal delay={animationDelay}>
        {sectionContent}
      </ScrollReveal>
    );
  }

  return sectionContent;
};

export default Section;
