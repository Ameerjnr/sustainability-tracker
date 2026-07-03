type ClassValue = string | number | null | undefined | false | ClassValue[];

/**
 * Lightweight class-name combiner (no external dependency needed).
 * Flattens arrays, drops falsy values, joins with a single space.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const walk = (value: ClassValue) => {
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    out.push(String(value));
  };

  inputs.forEach(walk);
  return out.join(" ");
}
