import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Sustainability Tracker platform.",
};

export default function TermsPage() {
  return (
    <Container as="article" className="py-20 sm:py-28">
      <h1 className="text-3xl font-medium text-[var(--color-ink)] sm:text-4xl">Terms of Service</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)]">
        This is placeholder legal copy for the Sustainability Tracker marketing site. Replace
        this page with your organization&apos;s reviewed terms of service before launch.
      </p>
    </Container>
  );
}
