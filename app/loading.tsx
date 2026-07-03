export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex min-h-[70vh] flex-col items-center justify-center gap-4"
    >
      <span className="font-mono-data flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
        <svg
          className="h-4 w-4 animate-spin text-[var(--color-forest-600)]"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="opacity-90"
            fill="currentColor"
            d="M22 12a10 10 0 0 0-10-10v3a7 7 0 0 1 7 7h3Z"
          />
        </svg>
        Calculating
      </span>
      <span className="sr-only">Loading, please wait.</span>
    </div>
  );
}
