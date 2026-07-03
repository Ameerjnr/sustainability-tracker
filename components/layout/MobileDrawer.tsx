"use client";

import * as React from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants";

export function MobileDrawer() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
      >
        <Icon name="menu" className="h-5 w-5" />
      </button>

      {open ? (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex"
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[var(--color-ink)]/30"
          />
          <div className="relative ml-auto flex h-full w-[82%] max-w-xs flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
              <span className="font-mono-data text-xs uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-3 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="border-t border-[var(--color-border)] p-4">
              <Button href="#contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
                Start Free Assessment
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
