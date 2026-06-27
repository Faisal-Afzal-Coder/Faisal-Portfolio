"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = data?.message || "Unable to send message. Please try again later.";

        if (/configured|environment|server/i.test(message)) {
          const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              subject: form.subject,
              message: form.message,
              _subject: `[Portfolio] ${form.subject}`,
              _captcha: "false",
              _template: "table",
            }),
          });

          if (!fallbackResponse.ok) {
            throw new Error(message);
          }
        } else {
          throw new Error(message);
        }
      }

      setIsSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong. Please email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "faisal-afzal",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Faisal-Afzal-Coder",
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to connect? I'd love to hear from you. Reach out and let's build something great."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {contactDetails.map((detail, index) => (
              <GlassCard key={detail.label} delay={index * 0.05} hover={false} className="!p-4">
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-500">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {detail.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-500">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>

          <GlassCard className="lg:col-span-3" hover={false}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-xl border bg-white/50 px-4 py-3 text-sm text-slate-900 backdrop-blur-sm transition-colors",
                      "placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                      "dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500",
                      errors.name ? "border-red-500" : "border-slate-200 dark:border-white/10"
                    )}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-xl border bg-white/50 px-4 py-3 text-sm text-slate-900 backdrop-blur-sm transition-colors",
                      "placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                      "dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500",
                      errors.email ? "border-red-500" : "border-slate-200 dark:border-white/10"
                    )}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-xl border bg-white/50 px-4 py-3 text-sm text-slate-900 backdrop-blur-sm transition-colors",
                    "placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                    "dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500",
                    errors.subject ? "border-red-500" : "border-slate-200 dark:border-white/10"
                  )}
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={cn(
                    "w-full resize-none rounded-xl border bg-white/50 px-4 py-3 text-sm text-slate-900 backdrop-blur-sm transition-colors",
                    "placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                    "dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500",
                    errors.message ? "border-red-500" : "border-slate-200 dark:border-white/10"
                  )}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400"
                  role="status"
                >
                  Thank you! Your message was sent successfully. I will reply to you soon.
                </motion.div>
              )}

              {serverError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-700 dark:text-rose-400"
                  role="alert"
                >
                  {serverError} Please email me directly at {" "}
                  <a href={`mailto:${personalInfo.email}`} className="font-semibold underline">
                    {personalInfo.email}
                  </a>
                </motion.div>
              )}

              <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                <Send className="h-5 w-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
