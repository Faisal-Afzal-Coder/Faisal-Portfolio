"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-10 w-10 rounded-xl border border-white/10 bg-white/5",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 bg-white/60 text-slate-700 backdrop-blur-md transition-colors",
        "hover:border-brand-500/40 hover:text-brand-600",
        "dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-brand-400/40 dark:hover:text-brand-400",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </motion.button>
  );
}
