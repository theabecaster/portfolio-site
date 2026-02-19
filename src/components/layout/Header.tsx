"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/theme/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      event.preventDefault();
      return;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm shadow-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          onClick={(e) => handleNavigation(e, "/")}
          className="relative z-50 group flex items-center gap-2"
        >
          <span className="font-mono text-xs text-primary border border-primary/30 rounded px-1.5 py-0.5 group-hover:bg-primary/10 transition-colors">
            AG
          </span>
          <span className="font-heading text-lg font-bold text-foreground tracking-tight hidden sm:inline">
            abraham<span className="text-primary">.</span>gonzalez
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={`relative px-3 py-2 text-sm font-mono tracking-wide transition-colors rounded ${
                pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {pathname === link.href && (
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary" />
              )}
              {link.label}
            </Link>
          ))}
          <div className="ml-3 pl-3 border-l border-border">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            className="w-9 h-9 flex items-center justify-center rounded border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX className="h-4 w-4" />
            ) : (
              <FiMenu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "65px" }}
      >
        <nav className="container mx-auto px-6 py-12 h-full flex flex-col">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => {
                    handleNavigation(e, link.href);
                    closeMenu();
                  }}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-heading font-bold tracking-tight transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  <span className="font-mono text-xs text-muted-foreground w-6">
                    0{index + 1}
                  </span>
                  <span>{link.label}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-border/30">
            <p className="text-xs font-mono text-muted-foreground">
              abrahamgonzalez.dev
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
