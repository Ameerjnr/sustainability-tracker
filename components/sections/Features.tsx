import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/lib/constants";

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="features-heading"
          eyebrow="Platform"
          title="Everything a project team needs to design for carbon"
          description="From first take-off to final submission, run every embodied-carbon workflow in one place."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              metric={feature.metric}
              metricLabel={feature.metricLabel}
              icon={feature.icon}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
