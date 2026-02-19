"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background-alt/50">
      <div className="container mx-auto px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-primary border border-primary/30 rounded px-1.5 py-0.5">
                AG
              </span>
              <span className="font-heading text-lg font-bold text-foreground tracking-tight">
                abraham<span className="text-primary">.</span>gonzalez
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Full stack engineer building production software at scale — from enterprise
              mobile platforms to LLM-powered developer tools and multi-tenant SaaS.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-dim hover:text-primary transition-colors font-mono"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
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
              <a
                href="mailto:inquiries@abrahamgonzalez.dev"
                className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Email"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-text-dim font-mono mt-4">
              inquiries@abrahamgonzalez.dev
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim font-mono">
            &copy; {currentYear} Abraham Gonzalez
          </p>
          <p className="text-xs text-text-dim font-mono">
            Miami, FL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
