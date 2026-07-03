import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const points = [
  {
    title: "Buildings drive global emissions",
    body: "Construction and operation of buildings account for a large share of global carbon emissions, and embodied carbon locked into materials at construction is emitted before a building is ever occupied.",
  },
  {
    title: "Decisions made early are the ones that matter",
    body: "Material and structural choices made at concept and design stage determine most of a project's embodied carbon. Measuring impact after handover is too late to change it.",
  },
  {
    title: "Built for growing construction markets",
    body: "Sustainability Tracker was shaped with fast-growing construction industries in mind, including Nigeria's, where rapid urban development makes low-carbon material choices especially consequential, while remaining fully usable by project teams anywhere in the world.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="Why it matters"
              title="Sustainable building is a measurement problem before it is a design problem"
              description="Sustainability Tracker gives project teams the data to make lower-carbon decisions while they still have the freedom to change them."
            />
          </div>

          <ul className="grid gap-8 sm:grid-cols-1">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4 border-t border-[var(--color-border)] pt-6 first:border-t-0 first:pt-0 sm:border-t sm:pt-6">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-forest-50)] text-[var(--color-forest-600)]">
                  <Icon name="leaf" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-medium text-[var(--color-ink)]">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
