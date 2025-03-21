"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-muted-foreground">
                A passionate software engineer specializing in mobile and web development,
                focused on creating exceptional user experiences with modern technologies.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/theabecaster/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abraham-1996-gonzalez/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:inquiries@abrahamgonzalez.dev" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <FiMail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={400}>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Abraham Gonzalez. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
