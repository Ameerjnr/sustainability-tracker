import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <span className="font-mono-data inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[var(--color-forest-600)]">
          <Icon name="shield" className="h-3.5 w-3.5" />
          Error 404
        </span>

        <h1 className="mt-6 text-3xl font-medium text-[var(--color-ink)] sm:text-4xl">
          This page isn&apos;t in the assessment
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--color-ink-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Check the address, or
          head back to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to homepage
          </Button>
          <Button href="/#contact" size="lg" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </Container>
  );
}
