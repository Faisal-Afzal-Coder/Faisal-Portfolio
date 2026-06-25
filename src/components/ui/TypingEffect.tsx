"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  texts: string[];
  className?: string;
}

export function TypingEffect({ texts, className }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent dark:from-brand-400 dark:to-accent-400">
        {displayText}
      </span>
      <span
        className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-brand-500 dark:bg-brand-400"
        aria-hidden="true"
      />
    </span>
  );
}
