"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:brightness-110",
  secondary:
    "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90",
  outline:
    "border-2 border-brand-500/40 bg-transparent text-brand-700 hover:bg-brand-500/10 dark:border-brand-400/40 dark:text-brand-400 dark:hover:bg-brand-400/10",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  download,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950",
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  if (href) {
    if (
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("#")
    ) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
