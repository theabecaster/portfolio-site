"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Engineer";

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setTypedText(fullText);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 65);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Gradient accent orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6 lg:col-span-7"
        >
          {/* Status badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-border bg-surface/50">
            <span className="w-2 h-2 rounded-full bg-green-400 status-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-wide">
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.05]">
            <span className="text-foreground">Abraham</span>
            <br />
            <span className="text-foreground">Gonzalez</span>
            <span className="text-primary">.</span>
          </h1>

          {/* Typed role */}
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-sm">&gt;</span>
            <span className="font-mono text-lg sm:text-xl text-muted-foreground">
              {typedText}
              <span className="cursor-blink text-primary ml-0.5">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-text-body max-w-lg leading-relaxed">
            8 years building production software at scale — from enterprise mobile
            platforms to LLM-powered developer tools. I write{" "}
            <span className="text-primary font-medium">TypeScript</span> and{" "}
            <span className="text-primary font-medium">Rust</span> by preference,
            live in the terminal, and build the tools that make other builders faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/projects" size="lg">
              View Projects <FiArrowRight className="ml-2" />
            </Button>

            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 pt-3">
            <a
              href="https://github.com/theabecaster/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/abraham-1996-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Right side: Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block lg:col-span-5"
        >
          <div className="terminal-window shadow-2xl shadow-shadow">
            <div className="terminal-header">
              <div className="terminal-dot bg-[#ff5f57]" />
              <div className="terminal-dot bg-[#febc2e]" />
              <div className="terminal-dot bg-[#28c840]" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">
                ~/developer.ts
              </span>
            </div>
            <div className="terminal-body">
              <div className="space-y-1">
                <p>
                  <span className="text-[#c792ea]">const</span>{" "}
                  <span className="text-[#82aaff]">developer</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-[#c3e88d]">{"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#f78c6c]">name</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-[#c3e88d]">&quot;Abraham Gonzalez&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#f78c6c]">role</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-[#c3e88d]">&quot;Full Stack Engineer&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#f78c6c]">stack</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-[#c3e88d]">[</span>
                </p>
                <p className="pl-8">
                  <span className="text-[#c3e88d]">&quot;TypeScript&quot;</span>
                  <span className="text-muted-foreground">,</span>{" "}
                  <span className="text-[#c3e88d]">&quot;Rust&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-8">
                  <span className="text-[#c3e88d]">&quot;React&quot;</span>
                  <span className="text-muted-foreground">,</span>{" "}
                  <span className="text-[#c3e88d]">&quot;Node.js&quot;</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#c3e88d]">]</span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#f78c6c]">focus</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-[#c3e88d]">&quot;Developer Tooling &amp; Full Stack&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#f78c6c]">location</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-[#c3e88d]">&quot;Miami, FL&quot;</span>
                </p>
                <p>
                  <span className="text-[#c3e88d]">{"}"}</span>
                  <span className="text-muted-foreground">;</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-mono text-text-dim tracking-wider">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
