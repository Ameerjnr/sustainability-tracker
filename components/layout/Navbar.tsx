import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#home"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Sustainability Tracker home"
          >
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" size="md">
              Start Free Assessment
            </Button>
          </div>

          <MobileDrawer />
        </div>
      </Container>
    </header>
  );
}
