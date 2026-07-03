import { Icon } from "@/components/ui/Icon";

const rows = [
  { label: "Structural frame", material: "Reinforced concrete C30/37", value: "412", unit: "kgCO2e/m³" },
  { label: "Envelope", material: "Aerated block + mineral wool", value: "86", unit: "kgCO2e/m²" },
  { label: "Roofing", material: "Standing seam aluminium", value: "31", unit: "kgCO2e/m²" },
];

export function StatPanel() {
  return (
    <div
      className="w-full max-w-md rounded-lg border border-[var(--color-border)] bg-white shadow-[0_1px_2px_rgba(11,18,15,0.04)]"
      role="img"
      aria-label="Sample embodied carbon calculation summary for a mixed-use building: total 268 kilograms of CO2 equivalent per square meter, status compliant."
    >
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3.5">
        <span className="font-mono-data text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
          Assessment #A-2291
        </span>
        <span className="font-mono-data inline-flex items-center gap-1.5 rounded-full bg-[var(--color-forest-50)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-forest-700)]">
          <Icon name="shield" className="h-3 w-3" />
          Compliant
        </span>
      </div>

      <dl className="divide-y divide-[var(--color-border)]">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between px-5 py-3.5">
            <div className="min-w-0">
              <dt className="text-[13px] font-medium text-[var(--color-ink)]">{row.label}</dt>
              <dd className="truncate text-xs text-[var(--color-ink-faint)]">{row.material}</dd>
            </div>
            <div className="font-mono-data shrink-0 pl-4 text-right text-sm text-[var(--color-ink)]">
              {row.value}
              <span className="ml-1 text-[11px] text-[var(--color-ink-faint)]">{row.unit}</span>
            </div>
          </div>
        ))}
      </dl>

      <div className="flex items-center justify-between rounded-b-lg bg-[var(--color-surface)] px-5 py-4">
        <span className="text-[13px] font-medium text-[var(--color-ink)]">Total embodied carbon</span>
        <span className="font-mono-data text-lg font-semibold text-[var(--color-forest-700)]">
          268 <span className="text-xs font-medium text-[var(--color-ink-faint)]">kgCO2e/m²</span>
        </span>
      </div>
    </div>
  );
}
