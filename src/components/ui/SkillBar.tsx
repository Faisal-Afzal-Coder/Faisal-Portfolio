"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {name}
        </span>
        <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
          {level}%
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700/80">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500",
            "shadow-sm group-hover:shadow-glow transition-shadow duration-300"
          )}
        />
      </div>
    </div>
  );
}
