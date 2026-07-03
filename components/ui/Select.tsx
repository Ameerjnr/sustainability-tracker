import * as React from "react";
import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
  options: { value: string; label: string }[];
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, className, required, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-[var(--color-ink)]">
          {label}
          {required ? <span className="text-[var(--color-forest-600)]"> *</span> : null}
        </label>
        <select
          id={id}
          ref={ref}
          required={required}
          defaultValue=""
          className={cn(
            "h-11 rounded-md border border-[var(--color-border-strong)] bg-white px-3.5 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-forest-600)]",
            className
          )}
          {...props}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
Select.displayName = "Select";
