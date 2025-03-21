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

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
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
          ? "bg-background shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={(e) => handleNavigation(e, "/")}
          className="text-2xl font-bold text-foreground hover:text-primary transition-colors font-heading relative z-50"
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
        <div className="md:hidden flex items-center space-x-4 relative z-50">
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

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-background transition-all duration-300 md:hidden ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: '72px' }}
      >
        <nav className="container mx-auto px-6 py-12 h-full flex flex-col">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className={`transform transition-transform duration-300 delay-${index * 100} ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
              >
                <Link
                  href={link.href}
                  onClick={(e) => {
                    handleNavigation(e, link.href);
                    closeMenu();
                  }}
                  className={`block text-2xl font-medium transition-colors ${
                    pathname === link.href 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {pathname === link.href && (
                      <span className="w-6 h-1 bg-primary rounded-full inline-block"></span>
                    )}
                    <span>{link.label}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-12 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              Abraham Gonzalez &copy; {new Date().getFullYear()}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
