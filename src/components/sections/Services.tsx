"use client";

import {
  Atom,
  Layers,
  Layout,
  Rocket,
  Smartphone,
  Wrench,
} from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Atom,
  Smartphone,
  Rocket,
  Layers,
  Wrench,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Offer"
          description="Professional web development services tailored to deliver modern, responsive, and high-quality digital solutions."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <GlassCard key={service.id} delay={index * 0.08} className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
