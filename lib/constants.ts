export const siteConfig = {
  name: "Sustainability Tracker",
  shortName: "ST",
  description:
    "Estimate embodied carbon, assess sustainability, compare building materials, and generate compliance-ready reports before construction begins.",
  url: "https://sustainabilitytracker.com",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/sustainability-tracker",
    linkedin: "https://linkedin.com/company/sustainability-tracker",
  },
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Feature = {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: "calculator" | "database" | "spark" | "shield" | "dashboard" | "document";
};

export const features: Feature[] = [
  {
    id: "carbon-calculator",
    title: "Carbon Calculator",
    description:
      "Model embodied carbon from structural quantities and material take-offs, down to the individual assembly.",
    metric: "A1–A5",
    metricLabel: "lifecycle stages",
    icon: "calculator",
  },
  {
    id: "material-database",
    title: "Material Database",
    description:
      "Compare thousands of materials by embodied carbon factor, sourced from verified EPDs and regional datasets.",
    metric: "12,000+",
    metricLabel: "EPD-backed records",
    icon: "database",
  },
  {
    id: "ai-recommendations",
    title: "AI Recommendations",
    description:
      "Get lower-carbon material and design alternatives ranked by impact, cost delta, and structural feasibility.",
    metric: "3 alt.",
    metricLabel: "per assembly",
    icon: "spark",
  },
  {
    id: "compliance-checker",
    title: "Compliance Checker",
    description:
      "Check designs against local and international carbon benchmarks, from LEED and BREEAM to national codes.",
    metric: "Pass/Fail",
    metricLabel: "instant status",
    icon: "shield",
  },
  {
    id: "project-dashboard",
    title: "Project Dashboard",
    description:
      "Track embodied carbon across every project and phase, from concept design through as-built handover.",
    metric: "kgCO2e/m²",
    metricLabel: "tracked live",
    icon: "dashboard",
  },
  {
    id: "pdf-reports",
    title: "PDF Reports",
    description:
      "Generate client-ready and regulator-ready sustainability reports, formatted for submission in minutes.",
    metric: "1-click",
    metricLabel: "export",
    icon: "document",
  },
];

export const footerLinks = {
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  social: [
    { label: "GitHub", href: siteConfig.links.github },
    { label: "LinkedIn", href: siteConfig.links.linkedin },
  ],
};
