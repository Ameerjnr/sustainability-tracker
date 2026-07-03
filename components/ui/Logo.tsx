import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 28 28"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="26" height="26" rx="6" fill="var(--color-forest-600)" />
        <path
          d="M8 19c7 0 11-4.5 12-12-6 0-11 4.5-12 12Z"
          fill="none"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 19c2.5-4 5-6.5 8-8.5"
          fill="none"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">
        Sustainability Tracker
      </span>
    </span>
  );
}
