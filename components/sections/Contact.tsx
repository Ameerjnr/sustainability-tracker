import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow="Get in touch"
              title="Start your first free assessment"
              description="Tell us about your project. Our team will help you scope a carbon assessment or walk you through the platform."
            />

            <ul className="mt-8 space-y-5 border-t border-[var(--color-border)] pt-8">
              <li className="flex items-start gap-3">
                <Icon name="document" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-forest-600)]" />
                <span className="text-sm text-[var(--color-ink-muted)]">
                  Response within one business day
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-forest-600)]" />
                <span className="text-sm text-[var(--color-ink-muted)]">
                  No commitment required for your first assessment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="dashboard" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-forest-600)]" />
                <span className="text-sm text-[var(--color-ink-muted)]">
                  Works with projects of any scale, anywhere in the world
                </span>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
