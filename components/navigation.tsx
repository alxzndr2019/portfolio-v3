"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const navigationItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const scrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled);
    }

    // Use requestAnimationFrame for smooth scrolling
    requestAnimationFrame(() => {
      const sections = navigationItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    });
  }, [isScrolled, activeSection]);

  useEffect(() => {
    if (!mounted) return;

    // Throttle scroll events
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll, mounted]);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0 md:w-[600px]"
      )}
    >
      <nav
        className={cn(
          "relative px-4 py-4 rounded-full transition-all duration-200",
          isScrolled &&
            "bg-background/80 backdrop-blur-md border border-border shadow-lg"
        )}
      >
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between md:justify-center">
          <motion.span
            className="font-semibold text-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {"<alex/>"}
          </motion.span>

          <ul className="hidden md:flex items-center gap-2 ml-8">
            {navigationItems.map((item) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-purple-400",
                    activeSection === item.href.slice(1)
                      ? "text-purple-400"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-purple-500/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 rounded-lg bg-background/80 backdrop-blur-md border border-border shadow-lg md:hidden"
            >
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full px-4 py-3 text-left text-sm font-medium rounded-md transition-colors hover:bg-purple-500/10",
                        activeSection === item.href.slice(1)
                          ? "text-purple-400 bg-purple-500/10"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
