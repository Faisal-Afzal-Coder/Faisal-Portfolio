"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personalInfo, typingTexts } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { TypingEffect } from "@/components/ui/TypingEffect";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />

      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/10" aria-hidden="true" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl dark:bg-accent-500/10" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:border-brand-400/20 dark:bg-brand-400/10 dark:text-brand-400"
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {personalInfo.headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 font-display text-xl font-semibold sm:text-2xl"
          >
            <TypingEffect texts={typingTexts} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="#contact" variant="primary" size="lg">
              <Mail className="h-5 w-5" />
              Get In Touch
            </Button>
            <Button href={personalInfo.resumePath} download variant="outline" size="lg">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <div>
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">2+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Months Training</p>
            </div>
            <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
            <div>
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">4th</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">BSIT Semester</p>
            </div>
            <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
            <div>
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">MERN</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Stack Focus</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square max-w-sm">
            <div className="absolute inset-0 animate-float rounded-full bg-gradient-to-br from-brand-500/30 to-accent-500/30 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-glow backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/20">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={`Professional portrait of ${personalInfo.name}, MERN Stack Developer`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-white/20 bg-white/80 px-4 py-3 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80"
            >
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Location</p>
              <p className="font-semibold text-slate-900 dark:text-white">{personalInfo.location}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 top-8 rounded-2xl border border-white/20 bg-white/80 px-4 py-3 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80"
            >
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Status</p>
              <p className="flex items-center gap-2 font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-brand-500"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
