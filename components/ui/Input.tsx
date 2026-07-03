import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, required, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-[var(--color-ink)]">
          {label}
          {required ? <span className="text-[var(--color-forest-600)]"> *</span> : null}
        </label>
        <input
          id={id}
          ref={ref}
          required={required}
          className={cn(
            "h-11 rounded-md border border-[var(--color-border-strong)] bg-white px-3.5 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-forest-600)]",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
