"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.slice(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    setActiveSection(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-white/70 shadow-sm backdrop-blur-xl dark:bg-slate-950/70"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white"
          onClick={() => handleNavClick("#home")}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-sm text-white transition-transform group-hover:scale-105">
            FA
          </span>
          <span className="hidden sm:inline">{personalInfo.name.split(" ")[0]}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  activeSection === link.href
                    ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                    : "text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <Button
            href={personalInfo.resumePath}
            download
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Resume
          </Button>
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 bg-white/60 text-slate-700 backdrop-blur-md lg:hidden dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-white/95 backdrop-blur-xl lg:hidden dark:bg-slate-950/95"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      activeSection === link.href
                        ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-2 flex items-center gap-3 px-4">
                <ThemeToggle />
                <Button href={personalInfo.resumePath} download variant="primary" size="sm">
                  Download Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
