"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Practical projects that demonstrate my skills in building functional, responsive web applications with modern technologies."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <GlassCard key={project.id} delay={index * 0.1} className="flex flex-col">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                    {project.featured ? "Featured Project" : "Project"}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
                  Features
                </p>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-brand-500/20 bg-brand-500/5 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-400/20 dark:bg-brand-400/5 dark:text-brand-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button href={project.githubUrl} variant="outline" size="sm" external>
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button href={project.liveUrl} variant="primary" size="sm" external>
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
