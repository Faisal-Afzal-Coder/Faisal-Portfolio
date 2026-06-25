import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  description,
  className,
}: {
  label: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-14 max-w-2xl text-center", className)}>
      <span className="mb-3 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-brand-400/20 dark:bg-brand-400/10 dark:text-brand-400">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
