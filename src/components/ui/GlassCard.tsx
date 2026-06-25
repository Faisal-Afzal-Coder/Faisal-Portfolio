"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-2xl border border-white/20 bg-white/60 p-6 shadow-glass backdrop-blur-xl",
        "dark:border-white/10 dark:bg-slate-900/60 dark:shadow-glass-dark",
        hover &&
          "transition-shadow duration-300 hover:border-brand-500/30 hover:shadow-glow dark:hover:border-brand-400/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
