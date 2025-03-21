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

  // Prevent double navigation on first click
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      // If we're already on this page, prevent the default navigation
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
        isScrolled 
          ? "bg-background/90 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={(e) => handleNavigation(e, "/")}
          className="text-2xl font-bold text-foreground hover:text-primary transition-colors font-heading"
        >
          <span className="text-primary">A</span>braham<span className="text-primary">G</span>onzalez
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              <Link
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className={`py-2 px-1 text-sm font-medium transition-colors ${
                  pathname === link.href 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-foreground/80 hover:text-foreground/90 hover:border-b-2 hover:border-primary/30"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation and Controls */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-foreground p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <Link
                  href={link.href}
                  onClick={(e) => {
                    handleNavigation(e, link.href);
                    closeMenu();
                  }}
                  className={`block py-2 pl-4 text-base font-medium transition-colors ${
                    pathname === link.href 
                      ? "text-primary border-l-2 border-primary" 
                      : "text-foreground/80 hover:text-foreground/90"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
