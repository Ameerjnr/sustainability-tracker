import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatPanel } from "@/components/ui/StatPanel";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-white">
      <Container>
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
          <div className="animate-fade-up">
            <p className="font-mono-data mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.1em] text-[var(--color-forest-600)]">
              <Icon name="leaf" className="h-3.5 w-3.5" />
              Embodied carbon, quantified
            </p>

            <h1
              id="hero-heading"
              className="text-balance text-4xl font-medium leading-[1.08] text-[var(--color-ink)] sm:text-5xl lg:text-[3.4rem]"
            >
              Measure the carbon impact of every building before construction begins
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
              Input dimensions and materials to instantly estimate embodied carbon,
              sustainability score and climate compliance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Start Free Assessment
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href="#features" size="lg" variant="secondary">
                View Demo
              </Button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-6">
              <div>
                <dt className="text-xs text-[var(--color-ink-faint)]">Materials tracked</dt>
                <dd className="font-mono-data mt-1 text-xl font-semibold text-[var(--color-ink)]">12k+</dd>
              </div>
              <div>
                <dt className="text-xs text-[var(--color-ink-faint)]">Standards covered</dt>
                <dd className="font-mono-data mt-1 text-xl font-semibold text-[var(--color-ink)]">20+</dd>
              </div>
              <div>
                <dt className="text-xs text-[var(--color-ink-faint)]">Avg. estimate time</dt>
                <dd className="font-mono-data mt-1 text-xl font-semibold text-[var(--color-ink)]">4 min</dd>
              </div>
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <StatPanel />
          </div>
        </div>
      </Container>
    </section>
  );
}
