import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sustainability Tracker collects, uses and protects your data.",
};

export default function PrivacyPage() {
  return (
    <Container as="article" className="py-20 sm:py-28">
      <h1 className="text-3xl font-medium text-[var(--color-ink)] sm:text-4xl">Privacy Policy</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)]">
        This is placeholder legal copy for the Sustainability Tracker marketing site. Replace
        this page with your organization&apos;s reviewed privacy policy before launch.
      </p>
    </Container>
  );
}
