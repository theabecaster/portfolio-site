"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-background to-muted/20 pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Software Engineer
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading">
            Hi, I'm <span className="text-primary">Abraham Gonzalez</span>
            <br />
            I build mobile & web apps
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            I'm a software engineer specializing in building exceptional digital experiences for mobile and web. 
            With expertise in Swift, Kotlin, JavaScript, and TypeScript, I create scalable, performant, 
            user-centric applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" size="lg">
              View Projects <FiArrowRight className="ml-2" />
            </Button>
            
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/theabecaster/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abraham-1996-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl opacity-30" />
          <div className="relative bg-muted border border-gray-200 rounded-lg p-1 shadow-xl">
            <div className="bg-background rounded-md p-4">
              <div className="flex items-center mb-4 space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <pre className="font-mono text-sm text-foreground/80 whitespace-pre-line">
                <code>
                  <span className="text-blue-500">const</span> developer = {"{"}
                  <br />
                  {"  "}name: <span className="text-green-500">"Abraham Gonzalez"</span>,
                  <br />
                  {"  "}skills: [<span className="text-green-500">"Swift"</span>, <span className="text-green-500">"Kotlin"</span>, <span className="text-green-500">"React"</span>, <span className="text-green-500">"Next.js"</span>],
                  <br />
                  {"  "}location: <span className="text-green-500">"Weston, FL"</span>,
                  <br />
                  {"  "}passion: <span className="text-green-500">"Building exceptional mobile & web applications"</span>
                  <br />
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-8 w-5 rounded-full border-2 border-muted-foreground flex justify-center"
        >
          <motion.div 
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-1.5 w-1.5 rounded-full bg-primary mt-1"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
