"use client";

import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillBar } from "@/components/ui/SkillBar";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit spanning frontend, backend, databases, and development tools — continuously expanding through training and practice."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <GlassCard key={category.category} delay={categoryIndex * 0.1}>
              <h3 className="mb-6 font-display text-lg font-semibold text-slate-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
