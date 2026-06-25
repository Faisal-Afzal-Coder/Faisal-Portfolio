"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Training & Experience"
          description="Gaining real-world industry experience through hands-on training in professional software development environments."
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/20 bg-white/60 p-8 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-glass-dark"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                      {item.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {item.type}
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.period}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
