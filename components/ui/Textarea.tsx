import * as React from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  id: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, className, required, rows = 5, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-[var(--color-ink)]">
          {label}
          {required ? <span className="text-[var(--color-forest-600)]"> *</span> : null}
        </label>
        <textarea
          id={id}
          ref={ref}
          required={required}
          rows={rows}
          className={cn(
            "resize-none rounded-md border border-[var(--color-border-strong)] bg-white px-3.5 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-forest-600)]",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
