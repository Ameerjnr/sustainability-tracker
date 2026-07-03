import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="font-mono-data mb-3 text-xs uppercase tracking-[0.14em] text-[var(--color-forest-600)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-medium text-balance text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
