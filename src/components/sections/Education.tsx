"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic & Professional Journey"
          description="A blend of formal education and intensive professional training shaping my path as a MERN Stack Developer."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-brand-500 via-accent-500 to-brand-500/20 md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 hidden shrink-0 md:flex">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl border-2 shadow-glow",
                      item.status === "current"
                        ? "border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400"
                        : "border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    )}
                  >
                    {item.id.includes("saylani") || item.id.includes("software") ? (
                      <BookOpen className="h-5 w-5" />
                    ) : (
                      <GraduationCap className="h-5 w-5" />
                    )}
                  </div>
                </div>

                <div
                  className={cn(
                    "flex-1 rounded-2xl border p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-glow",
                    "border-white/20 bg-white/60 shadow-glass dark:border-white/10 dark:bg-slate-900/60 dark:shadow-glass-dark"
                  )}
                >
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide",
                        item.status === "current"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-slate-500/10 text-slate-600 dark:text-slate-400"
                      )}
                    >
                      {item.status === "current" ? "In Progress" : "Completed"}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
