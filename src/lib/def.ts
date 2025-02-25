export interface CircleAnimDef {
  name: string;
  qty: number;
  panel: string;
  nextPanel?: string;
  r: number;
  gradient: [string, string, string, string];
}

export const circleDefs: Record<
  "project" | "planningDesign" | "engineering" | "operation",
  CircleAnimDef
> = {
  project: {
    name: "proj",
    qty: 8,
    panel: "#_project",
    nextPanel: "#_planning_design",
    r: 4,
    gradient: [
      "oklch(67.65% 0.2026 41.87)",
      "oklch(59.56% 0.1771 42.17)",
      "oklch(34.18% 0.095 45.06)",
      "oklch(23.02% 0.0582 49.9)",
    ],
  },
  planningDesign: {
    name: "plan",
    qty: 4,
    panel: "#_planning_design",
    nextPanel: "#_engineering",
    r: 7.5,
    gradient: [
      "oklch(61.65% 0.2126 11.33)",
      "oklch(56.6% 0.2155 15.07)",
      "oklch(32.27% 0.117 12.88)",
      "oklch(21.35% 0.0711 9.78)",
    ],
  },
  engineering: {
    name: "eng",
    qty: 2,
    panel: "#_engineering",
    nextPanel: "#_operation",
    r: 12,
    gradient: [
      "oklch(68.25% 0.1743 249.8)",
      "oklch(61.56% 0.194179 253.7)",
      "oklch(35.49% 0.1051 251.64)",
      "oklch(23.01% 0.0618 247.91)",
    ],
  },
  operation: {
    name: "op",
    qty: 1,
    panel: "#_operation",
    r: 28,
    gradient: [
      "oklch(73.38% 0.2465 142.17)",
      "oklch(63.84% 0.2139 142.13)",
      "oklch(35.82% 0.1177 141.71)",
      "oklch(24.13% 0.0772 141.09)",
    ],
  },
};
