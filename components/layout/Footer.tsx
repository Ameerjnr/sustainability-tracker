import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerLinks } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <div className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              Embodied carbon estimation and sustainability reporting for architects, engineers
              and construction teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="font-mono-data text-xs uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono-data text-xs uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono-data text-xs uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
                Navigate
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#features" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--color-border-strong)] py-6 text-xs text-[var(--color-ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Sustainability Tracker. All rights reserved.</p>
          <p className="font-mono-data">Built for architects, engineers &amp; sustainability consultants.</p>
        </div>
      </Container>
    </footer>
  );
}
