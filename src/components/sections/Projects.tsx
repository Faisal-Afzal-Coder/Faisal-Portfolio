"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function Projects() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-project-card]");
    const gap = 24;
    const cardWidth = firstCard ? firstCard.offsetWidth + gap : 420;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Projects"
            title="Featured Work"
            description="Practical projects that demonstrate my skills in building functional, responsive web applications with modern technologies."
          />

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              aria-label="Scroll projects left"
              onClick={() => scrollProjects("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll projects right"
              onClick={() => scrollProjects("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-card
              className="group min-w-[85%] max-w-[85%] shrink-0 snap-center sm:min-w-[440px] sm:max-w-[440px] lg:min-w-[420px] lg:max-w-[420px]"
            >
              <GlassCard delay={index * 0.08} className="flex h-full flex-col">
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
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
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
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button href={project.liveUrl} variant="primary" size="sm" external>
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.detailsUrl && (
                    <Button href={project.detailsUrl} variant="secondary" size="sm" external>
                      <ExternalLink className="h-4 w-4" />
                      Details
                    </Button>
                  )}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
