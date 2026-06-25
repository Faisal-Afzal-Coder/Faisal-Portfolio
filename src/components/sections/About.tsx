"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";
import { aboutContent } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences with Passion"
          description="An aspiring MERN Stack Developer dedicated to building impactful web applications through continuous learning and hands-on experience."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:col-span-2"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <GlassCard className="h-fit">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                Career Goals
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {aboutContent.careerGoals}
            </p>
          </GlassCard>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-center font-display text-xl font-semibold text-slate-900 dark:text-white">
            Personal Strengths
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.strengths.map((strength, index) => (
              <GlassCard key={strength} delay={index * 0.05} className="flex items-center gap-3 !p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500 dark:text-brand-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {strength}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
