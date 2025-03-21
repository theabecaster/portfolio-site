"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/20 text-foreground/80 hover:text-primary transition-colors focus:outline-none"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <FiMoon className="h-5 w-5" />
      ) : (
        <FiSun className="h-5 w-5" />
      )}
    </motion.button>
  );
} 