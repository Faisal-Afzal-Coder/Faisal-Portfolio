"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, personalInfo, socialLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/60 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="group flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-lg font-bold text-white transition-transform group-hover:scale-105">
                FA
              </span>
              <div>
                <p className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {personalInfo.name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  MERN Stack Developer
                </p>
              </div>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Building modern, responsive, and user-friendly web applications with
              passion and precision. Available for freelance projects and collaborations.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 bg-white/60 text-slate-600 backdrop-blur-md transition-colors hover:border-brand-500/40 hover:text-brand-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-brand-400/40 dark:hover:text-brand-400"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4 shrink-0" />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-8 sm:flex-row dark:border-white/10">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
