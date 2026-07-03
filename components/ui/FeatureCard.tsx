import { Icon, type IconName } from "@/components/ui/Icon";

export function FeatureCard({
  title,
  description,
  metric,
  metricLabel,
  icon,
}: {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: IconName;
}) {
  return (
    <li className="group relative flex flex-col justify-between rounded-lg border border-[var(--color-border)] bg-white p-6 transition-colors duration-150 hover:border-[var(--color-forest-600)] sm:p-7">
      <div>
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-forest-50)] text-[var(--color-forest-600)]">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-medium text-[var(--color-ink)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
          {description}
        </p>
      </div>
      <div className="font-mono-data mt-6 flex items-baseline gap-2 border-t border-[var(--color-border)] pt-4">
        <span className="text-base text-[var(--color-forest-700)]">{metric}</span>
        <span className="text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
          {metricLabel}
        </span>
      </div>
    </li>
  );
}
