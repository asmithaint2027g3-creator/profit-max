// Strictly source-derived content from Engagement Structue.html
// DO NOT MODIFY OR INVENT NEW COPY

export interface ContinuumCellItem {
  id: string; // 'E1' to 'E8'
  title: string;
  question: string;
}

export interface EngagementSummaryRow {
  id: string;
  model: string;
  riskAllocation: string;
  feeStructure: string;
  primaryOutcome: string;
}

export interface RulebandStatItem {
  key: string;
  value: string;
  detail: string;
}

export interface SubPackageItem {
  id: string;
  name: string;
  duration?: string;
  detailLabel: string;
  detailValue: string;
}

export interface EngagementModelDetail {
  id: string; // 'E1' to 'E8'
  name: string;
  subtitle: string;
  quote: string;
  riskAllocation: {
    weCarry: string;
    clientCarries: string;
  };
  attributes: {
    label: string;
    value: string;
  }[];
  povVsPop?: {
    headers: string[];
    rows: {
      dimension: string;
      pov: string;
      pop: string;
    }[];
  };
  subPackages: SubPackageItem[];
}

export interface StagePlaybookRow {
  stage: string;
  signatureSituation: string;
  discoveryFocus: string;
  recommendedBundle: string;
  bundleSub?: string;
}

export interface SituationPlaybookRow {
  id: string; // 'B1' to 'B15'
  situation: string;
  triggerSignals: string;
  engagement: string;
  duration: string;
}

export interface SituationSequenceRow {
  situation: string;
  modelSequence: {
    id: string;
    label: string;
    variant?: 'red' | 'dark' | 'green' | 'default';
  }[];
  why: string;
}

export interface JourneyStep {
  step: string;
  model: string;
  duration: string;
  description: string;
}

export interface JourneyItem {
  title: string;
  tag: string;
  steps: JourneyStep[];
}

export interface PricingStructureRow {
  model: string;
  base: string;
  variable: string;
  paymentTerms: string;
  minimumCommitment: string;
}

export interface GuardrailItem {
  title: string;
  description: string;
}

export interface TeamRoleRow {
  role: string;
  attachedModels: string;
  responsibility: string;
}

export interface DecisionQuestionItem {
  qNum: string;
  question: string;
  recommendation: string;
  detail: string;
  accent?: boolean;
}

export interface ModelComparisonRow {
  model: string;
  speedToStart: string;
  speedToImpact: string;
  clientRisk: string;
  ourRisk: string;
  expansionPotential: string;
  typicalDealSize: string;
}

export interface KpiLibraryRow {
  layer: string;
  leadingIndicators: string;
  laggingIndicators: string;
  typicalPovSuccessBar: string;
}

export interface OnboardingStep {
  timing: string;
  title: string;
  description: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const engagementMeta = {
  kicker: "Revenue Architecture Dossier · Edition 2026",
  title: "Revenue Discovery Engagements",
  subtitle: "One continuum. Eight ways to buy certainty.",
  lede: "The complete commercial and delivery architecture of ProfitMachines — a sales acceleration, consulting and services firm. Eight engagement models, seven discovery layers, and a matched playbook for every segment, sub-segment, micro-segment, company stage and business situation.",
  overviewText: "Every ProfitMachines engagement sits on a single risk-and-commitment continuum — from zero-risk advisory counsel to fully risk-coupled economic partnerships. The right model is not a matter of budget size. It is a matter of how much evidence, urgency, and shared downside the situation demands.",
  counts: [
    { label: "Engagement Models", value: "08", desc: "Advisory → Risk-Sharing" },
    { label: "Discovery Layers", value: "07", desc: "L1 Market → L7 PMF" },
    { label: "Offering Families", value: "07", desc: "F1 – F7, Tracks A & B" },
    { label: "Micro-Segment Kits", value: "08", desc: "Fixed-scope fast starts" }
  ],
  tags: [
    "Consulting Services",
    "AI-Driven Automation",
    "Services Sector",
    "Retail & Commerce",
    "Platform Companies",
    "Sales · Revenue · GTM · Demand"
  ]
};

export const continuumCells: ContinuumCellItem[] = [
  { id: "E1", title: "Advisory & Insight", question: "Decision confidence" },
  { id: "E2", title: "Consulting Services", question: "Playbooks & architecture" },
  { id: "E3", title: "Proof of Value / Performance", question: "Evidence of lift" },
  { id: "E4", title: "Transformation", question: "GTM system installed" },
  { id: "E5", title: "Outcome-Based", question: "Verified metric movement" },
  { id: "E6", title: "Joint Risk-Sharing", question: "Aligned revenue growth" },
  { id: "E7", title: "Resident Growth Architects", question: "Capability + output" },
  { id: "E8", title: "Forward Deployed Accelerators", question: "Live pipeline in-market" }
];

export const table1_0_summary: EngagementSummaryRow[] = [
  { id: "E1", model: "Advisory & Insight Engagements", riskAllocation: "Client 100%", feeStructure: "Fixed / retainer", primaryOutcome: "Decision confidence" },
  { id: "E2", model: "Consulting Services", riskAllocation: "Client 100%", feeStructure: "Fixed / T&M", primaryOutcome: "Playbooks & architecture" },
  { id: "E3", model: "Proof of Value / Proof of Performance", riskAllocation: "Shared validation risk", feeStructure: "Fixed, small & creditable", primaryOutcome: "Evidence of measured lift" },
  { id: "E4", model: "Transformation Engagements", riskAllocation: "Client 80% / PM 20%", feeStructure: "Milestone fixed + adoption KPI", primaryOutcome: "GTM system installed" },
  { id: "E5", model: "Outcome-Based Engagement", riskAllocation: "PM carries delivery risk", feeStructure: "Reduced base + success fee", primaryOutcome: "Verified metric movement" },
  { id: "E6", model: "Joint Risk-Sharing Engagement", riskAllocation: "50/50 economic coupling", feeStructure: "Co-investment + P&L share", primaryOutcome: "Aligned revenue growth" },
  { id: "E7", model: "Resident Growth Architects (RGA)", riskAllocation: "Client 70% / PM 30%", feeStructure: "Monthly embedded rate", primaryOutcome: "In-house capability + output" },
  { id: "E8", model: "Forward Deployed Sales Accelerators (FDA)", riskAllocation: "PM carries execution risk", feeStructure: "Base + performance accelerator", primaryOutcome: "Live pipeline in-market" }
];

export const rulebandStats: RulebandStatItem[] = [
  { key: "Speed to first impact", value: "1–2", detail: "weeks · E8 FDA & E3 PoV" },
  { key: "Typical lift band", value: "40–60%", detail: "faster revenue growth · client-reported" },
  { key: "Return horizon", value: "3–5×", detail: "ROI within first 12 months" },
  { key: "Forecast accuracy", value: "+50%", detail: "vs. rep-commit baseline" }
];

export const engagementModels: EngagementModelDetail[] = [
  {
    id: "E1",
    name: "Advisory & Insight Engagements",
    subtitle: "Low commitment · Client carries execution",
    quote: '"Give us the answer and the confidence to act."',
    riskAllocation: {
      weCarry: "Reputation only",
      clientCarries: "100% of execution"
    },
    attributes: [
      { label: "Structure", value: "2–6 week time-boxed sprints, or a quarterly advisory retainer (2–4 sessions per month)" },
      { label: "Team", value: "Principal / Partner + research analyst. No implementation resources deployed." },
      { label: "Deliverables", value: "Discovery scorecard, market / whitespace thesis, decision memo, executive readout, board-ready narrative" },
      { label: "Commercial", value: "Fixed fee (sprint) or monthly retainer. 100% client-funded. 30–60 day out-clause on retainers." },
      { label: "Best for", value: "Pre-decision moments: market entry, M&A GTM diligence, pricing strategy, board or investor pressure" },
      { label: "Best segments", value: "Enterprise, Platform (API / Infra), Financial Services, Services (consultancies)" },
      { label: "Conversion path", value: "E1 Advisory → E3 PoV (validate the thesis) → E4 Transformation / E5 Outcome" }
    ],
    subPackages: [
      { id: "E1-A", name: "Executive Discovery Sprint", duration: "2 weeks", detailLabel: "Focus", detailValue: "One discovery layer, one decision" },
      { id: "E1-B", name: "Board & Investor Revenue Diligence", duration: "3–4 weeks", detailLabel: "Focus", detailValue: "Forecast defensibility, GTM health audit" },
      { id: "E1-C", name: "Quarterly Growth Advisory Retainer", duration: "Ongoing", detailLabel: "Focus", detailValue: "Recurring strategic counsel + early-warning signals" },
      { id: "E1-D", name: "War-Room Advisory", duration: "1–2 weeks", detailLabel: "Focus", detailValue: "Rapid response: competitor move, pipeline collapse, pricing pressure" }
    ]
  },
  {
    id: "E2",
    name: "Consulting Services",
    subtitle: "Design the system · Client executes",
    quote: '"Design the system. Hand us the blueprint."',
    riskAllocation: {
      weCarry: "Quality of deliverables",
      clientCarries: "Adoption & execution"
    },
    attributes: [
      { label: "Structure", value: "4–12 week project-based engagements, phased: Diagnostic → Architecture → Playbook → Enablement" },
      { label: "Team", value: "Engagement lead + consultants + specialist (pricing / RevOps / messaging). Client team executes." },
      { label: "Deliverables", value: "GTM architecture blueprint, ICP & segmentation framework, demand & messaging system, sales stage & qualification system, channel economics model, enablement curriculum, tech matrix" },
      { label: "Commercial", value: "Fixed fee per phase with stage gates. Optional T&M for open-scope work. 100% client-funded." },
      { label: "Best for", value: "Organizations with capable teams that lack the method, framework, or bandwidth to design" },
      { label: "Best segments", value: "Services (all), Retail (omnichannel, luxury), Platform (vertical SaaS), Manufacturing, Healthcare" },
      { label: "Conversion path", value: "E2 Consulting → E4 Transformation (we help implement) or E7 RGA (we embed to execute)" }
    ],
    subPackages: [
      { id: "E2-A", name: "Revenue Leak Diagnostic", duration: "2–3 weeks", detailLabel: "Output", detailValue: "Full funnel teardown + leak scorecard" },
      { id: "E2-B", name: "GTM Architecture Engagement", duration: "6–8 weeks", detailLabel: "Output", detailValue: "Segmentation, ICP, motion design, channel mix" },
      { id: "E2-C", name: "Sales System Design", duration: "4–6 weeks", detailLabel: "Output", detailValue: "Stages, qualification, forecasting method, coaching system" },
      { id: "E2-D", name: "Demand & Messaging Architecture", duration: "4–6 weeks", detailLabel: "Output", detailValue: "Category language, offer engineering, channel plan" },
      { id: "E2-E", name: "Pricing & Packaging Engagement", duration: "4–5 weeks", detailLabel: "Output", detailValue: "Value-to-price alignment, discount governance" }
    ]
  },
  {
    id: "E3",
    name: "Proof of Value (PoV) / Proof of Performance (PoP)",
    subtitle: "Shared validation risk · Gate before scale",
    quote: "\"Let's prove the lift before you scale the bet.\"",
    riskAllocation: {
      weCarry: "Proof risk",
      clientCarries: "Small capped cost"
    },
    attributes: [
      { label: "Structure", value: "4–8 week time-boxed, hypothesis-driven, single-scope experiment with a pre-agreed success metric" },
      { label: "Team", value: "PoV lead + automation engineer + analyst. A named client-side counterpart is mandatory." },
      { label: "Method", value: "Baseline → Hypothesis → Intervention → Measure → Gate Decision. Success criteria locked in a PoV Charter before kickoff." },
      { label: "Commercial", value: "Small fixed fee, 50–100% creditable against the subsequent larger engagement." },
      { label: "Gate", value: "Explicit Go / No-Go at week 4–8 with statistical lift validation before any scale commitment" },
      { label: "Best for", value: "First-time buyers, skeptical boards, new segments or motions, automation buy-in" }
    ],
    povVsPop: {
      headers: ["", "PoV — Proof of Value", "PoP — Proof of Performance"],
      rows: [
        { dimension: "Question", pov: '"Does this capability create value at all?"', pop: '"Does this capability perform against committed numbers?"' },
        { dimension: "Metric", pov: "Directional lift (e.g. +25% reply rate)", pop: "Contracted performance (e.g. 40 SQLs/month at defined quality)" },
        { dimension: "Stage", pov: "Discovery / first-time validation", pop: "Pre-scale / pre-retainer commitment" },
        { dimension: "Exit", pov: "Design decision", pop: "Scale decision or performance guarantee trigger" }
      ]
    },
    subPackages: [
      { id: "E3-A", name: "Autonomous SDR PoV", duration: "6 weeks", detailLabel: "Test", detailValue: "Agentic outbound vs. control on a defined segment" },
      { id: "E3-B", name: "Propensity Model PoV", duration: "4–6 weeks", detailLabel: "Test", detailValue: "Scoring lift vs. current lead qualification" },
      { id: "E3-C", name: "Pricing & Offer PoV", duration: "4 weeks", detailLabel: "Test", detailValue: "A/B price / packaging test on a live segment" },
      { id: "E3-D", name: "Channel Mix PoV", duration: "6 weeks", detailLabel: "Test", detailValue: "Reallocation experiment across two demand channels" },
      { id: "E3-E", name: "Forecast Accuracy PoP", duration: "8 weeks", detailLabel: "Test", detailValue: "Algorithmic forecast vs. rep commit on a live quarter" },
      { id: "E3-F", name: "Deal Velocity PoP", duration: "8 weeks", detailLabel: "Test", detailValue: "Stage-slip intervention measured on cycle time" }
    ]
  },
  {
    id: "E4",
    name: "Transformation Engagements",
    subtitle: "Structural change · Time-boxed program",
    quote: '"Install a revenue operating system across the GTM organization."',
    riskAllocation: {
      weCarry: "20% at adoption KPIs",
      clientCarries: "80% + change risk"
    },
    attributes: [
      { label: "Structure", value: "4–9 month programs, phased: Discover → Architect → Build → Deploy → Enable → Transfer" },
      { label: "Team", value: "Program director + workstream leads + automation engineers + enablement. Full RACI co-owned with the client." },
      { label: "Deliverables", value: "Complete discovery stack (L1–L7), GTM operating model, automation layer in production, trained teams, governance cadence, measured lift vs. baseline" },
      { label: "Commercial", value: "Milestone-based fixed fees — 20% kickoff / 30% design / 30% deployment / 20% transfer & adoption. 80% client-funded, 20% at-risk against adoption KPIs." },
      { label: "Best for", value: "Companies with executive mandate and budget that need structural change, not just advice" },
      { label: "Best segments", value: "Enterprise, Mid-Market scale-ups, Platform (scale stage), Retail (scale stage), Financial Services" },
      { label: "Typical trigger", value: "New CRO / CGO, post-funding, board GTM mandate, post-M&A integration" }
    ],
    subPackages: [
      { id: "E4-A", name: "Revenue OS Transformation", duration: "6–9 months", detailLabel: "Scope", detailValue: "Full L1–L7 discovery + automation + enablement" },
      { id: "E4-B", name: "Enterprise Motion Transformation", duration: "4–6 months", detailLabel: "Scope", detailValue: "Upmarket GTM rebuild: segmentation, value engineering, deal intelligence, forecasting" },
      { id: "E4-C", name: "Demand Engine Transformation", duration: "4–6 months", detailLabel: "Scope", detailValue: "Inbound / outbound / ABM rebuild with agentic layer" },
      { id: "E4-D", name: "Post-M&A GTM Integration", duration: "5–7 months", detailLabel: "Scope", detailValue: "Territory, stack, messaging, coverage consolidation" },
      { id: "E4-E", name: "PLG → Sales-Assist Transformation", duration: "4–5 months", detailLabel: "Scope", detailValue: "Hybrid motion design + conversion telemetry" }
    ]
  },
  {
    id: "E5",
    name: "Outcome-Based Engagement",
    subtitle: "Performance-tied economics",
    quote: '"We get paid when the metric moves."',
    riskAllocation: {
      weCarry: "Primary delivery risk",
      clientCarries: "Base fee + access duty"
    },
    attributes: [
      { label: "Structure", value: "6–12 month engagement: lower base fee + success fee tied to a verified metric" },
      { label: "Team", value: "Full delivery pod + dedicated analytics resource for independent verification" },
      { label: "Metric design", value: "Single or dual committed metric — qualified pipeline $, SQL volume, CAC reduction, win-rate lift, forecast accuracy, cycle-time reduction" },
      { label: "Commercial", value: "Base fee (40–60% of standard rate) + success fee (1.5–3× base, paid against verified movement). KPIs, measurement window, and attribution rules locked in an Outcome Charter pre-signature." },
      { label: "Guardrails", value: "Minimum client-side preconditions — data quality, CRM access, named counterpart availability. If unmet, KPI obligations are void." },
      { label: "Best for", value: "Metric-driven cultures, PE-backed companies, operators who want aligned incentives" },
      { label: "Best segments", value: "Mid-Market, Platform (SaaS scale-ups), Retail (DTC), Staffing, Managed Services" }
    ],
    subPackages: [
      { id: "E5-A", name: "Pipeline Generation Outcome", detailLabel: "Committed Metric", detailValue: "Qualified pipeline $ per quarter" },
      { id: "E5-B", name: "CAC Efficiency Outcome", detailLabel: "Committed Metric", detailValue: "CAC reduction or LTV:CAC improvement" },
      { id: "E5-C", name: "Win-Rate & Deal Velocity Outcome", detailLabel: "Committed Metric", detailValue: "Lift in win rate + cycle time" },
      { id: "E5-D", name: "Forecast Accuracy Outcome", detailLabel: "Committed Metric", detailValue: "Variance reduction vs. actuals" },
      { id: "E5-E", name: "Expansion Revenue Outcome", detailLabel: "Committed Metric", detailValue: "NRR / upsell contribution" },
      { id: "E5-F", name: "Demand Attribution Outcome", detailLabel: "Committed Metric", detailValue: "Attributable-sourced revenue %" }
    ]
  },
  {
    id: "E6",
    name: "Joint Risk-Sharing Engagement",
    subtitle: "Co-investment · Shared P&L",
    quote: '"We co-invest. We share the upside. We share the downside."',
    riskAllocation: {
      weCarry: "~50% of economics",
      clientCarries: "~50% + authority"
    },
    attributes: [
      { label: "Structure", value: "9–18 month strategic partnership under a joint business plan with shared P&L economics" },
      { label: "Team", value: "Integrated joint team, shared governance board (bi-weekly steering), co-located leads" },
      { label: "Economics", value: "Co-investment: reduced fees from us + committed budget and effort from the client. Shared upside: 15–30% of incremental gross margin above an agreed baseline. Shared downside: capped loss both ways — our fee converts to a reduced rate if the baseline is missed." },
      { label: "Commercial", value: "Hybrid: cost-recovery base + variable share + gain-share multiplier above stretch targets" },
      { label: "Best for", value: "Category-defining bets, new market creation, platform launches, transformations too large for a fee" },
      { label: "Best segments", value: "Enterprise, Platform (new verticals), Retail (new categories / geographies), Services (productization)" }
    ],
    subPackages: [
      { id: "E6-A", name: "New Market Creation Partnership", detailLabel: "Shared Bet", detailValue: "Co-invest in building a category or geography demand engine" },
      { id: "E6-B", name: "Product Launch Revenue Partnership", detailLabel: "Shared Bet", detailValue: "Revenue share on a new product or service line" },
      { id: "E6-C", name: "Channel & Ecosystem Partnership", detailLabel: "Shared Bet", detailValue: "Co-sell model with shared pipeline economics" },
      { id: "E6-D", name: "Turnaround Partnership", detailLabel: "Shared Bet", detailValue: "Distress situation (pipeline collapse) with contingent recovery economics" },
      { id: "E6-E", name: "Growth Equity / PE Portfolio Partnership", detailLabel: "Shared Bet", detailValue: "Multi-company rollout under one shared framework" }
    ]
  },
  {
    id: "E7",
    name: "Resident Growth Architects (RGA)",
    subtitle: "Embedded capability · Builds the system",
    quote: '"Our expert sits inside your org and builds with your team."',
    riskAllocation: {
      weCarry: "30% at workstream KPIs",
      clientCarries: "70% + internal authority"
    },
    attributes: [
      { label: "Structure", value: "6–18 month embedded assignment. RGA works inside the client org (3 days/week to full-time) with a delivery backbench at ProfitMachines" },
      { label: "Team", value: "1 Resident Growth Architect (senior, 8–15 yrs experience) + part-time automation engineer + quarterly principal review" },
      { label: "Role", value: "Owns a revenue workstream end-to-end — designs and executes alongside client teams, and transfers capability so the org can run it independently" },
      { label: "Commercial", value: "Monthly embedded rate with quarterly commitment. 70% guaranteed / 30% tied to workstream KPIs." },
      { label: "Best for", value: "Senior capability without a full-time hire; capability-building mandates; sustained execution" },
      { label: "Best segments", value: "Services (scale-ups), Platform (traction & scale), Retail (multi-channel), Financial Services, Healthcare" },
      { label: "E7 vs E8", value: "An RGA builds the system and the team. A Forward Deployed Accelerator drives live deals." }
    ],
    subPackages: [
      { id: "E7-A", name: "RGA — Demand & Pipeline Architect", detailLabel: "Workstream Owned", detailValue: "Demand discovery & pipeline telemetry" },
      { id: "E7-B", name: "RGA — Sales System Architect", detailLabel: "Workstream Owned", detailValue: "Stage design, qualification, forecasting, coaching" },
      { id: "E7-C", name: "RGA — Revenue Intelligence Architect", detailLabel: "Workstream Owned", detailValue: "Data mesh, attribution, deal intelligence" },
      { id: "E7-D", name: "RGA — Pricing & Packaging Architect", detailLabel: "Workstream Owned", detailValue: "Offer architecture, discount governance" },
      { id: "E7-E", name: "RGA — Growth Analytics Architect", detailLabel: "Workstream Owned", detailValue: "Measurement, KPI governance, PoV / PoP design" },
      { id: "E7-F", name: "RGA Pod", detailLabel: "Workstream Owned", detailValue: "2–3 RGAs covering multiple workstreams at enterprise scale" }
    ]
  },
  {
    id: "E8",
    name: "Forward Deployed Sales Accelerators (FDA)",
    subtitle: "In the field · In the deals",
    quote: '"We are in the field, in the deals, driving measurable pipeline this quarter."',
    riskAllocation: {
      weCarry: "Execution risk",
      clientCarries: "Base + rep alignment"
    },
    attributes: [
      { label: "Structure", value: "3–6 month forward deployments. FDA operators run live sales motions in-market alongside client reps: outbound, qualification, deal acceleration, account penetration" },
      { label: "Team", value: "1–3 FDA operators (quota-carrying experience + automation tooling) + enablement lead + agentic automation layer" },
      { label: "What we do live", value: "Multi-channel outbound execution, ICP validation in real time, objection capture, deal-room construction, competitive displacement plays, pipeline generation and progression" },
      { label: "Commercial", value: "Base deployment fee + performance accelerator per verified metric (meetings booked, SQLs, pipeline $, deals progressed). Monthly payout against verified numbers." },
      { label: "Best for", value: "Urgent pipeline needs, new motion validation, entering new segments, rep ramp augmentation, competitive displacement" },
      { label: "Best segments", value: "Every segment where speed to pipeline matters — strongest in Platform (traction & scale), Services, Staffing, Mid-Market" }
    ],
    subPackages: [
      { id: "E8-A", name: "New Market Entry Squad", duration: "3–6 months", detailLabel: "Mission", detailValue: "Validate ICP & demand in a new geography or vertical" },
      { id: "E8-B", name: "Pipeline Rescue Squad", duration: "3 months", detailLabel: "Mission", detailValue: "Immediate pipeline generation during drought" },
      { id: "E8-C", name: "Enterprise Deal Acceleration", duration: "4–6 months", detailLabel: "Mission", detailValue: "Forward-deployed on named strategic accounts" },
      { id: "E8-D", name: "Rep Ramp Augmentation", duration: "3–4 months", detailLabel: "Mission", detailValue: "Productivity support during hiring / onboarding lag" },
      { id: "E8-E", name: "Competitive Displacement Squad", duration: "3–6 months", detailLabel: "Mission", detailValue: "Targeted win-back and displacement plays" },
      { id: "E8-F", name: "Product Launch Go-To-Market Squad", duration: "3–4 months", detailLabel: "Mission", detailValue: "First-wave market response for new launches" }
    ]
  }
];

export const stagePlaybooksServices: StagePlaybookRow[] = [
  { stage: "S1 Formation", signatureSituation: "Founder-led sales, undefined offer", discoveryFocus: "L7 + L2", recommendedBundle: "F7-A1 + F2-A2", bundleSub: "Consulting sprint · 3 weeks" },
  { stage: "S2 PMF", signatureSituation: "First repeatable clients, pricing unclear", discoveryFocus: "L3 + L7", recommendedBundle: "F3-A2 + F7-A1 + F3-A1" },
  { stage: "S3 Traction", signatureSituation: "Referral-dependent pipeline", discoveryFocus: "L2 + L4", recommendedBundle: "F2-A3 + F4-A1 + F2-B1" },
  { stage: "S4 Scale", signatureSituation: "Multi-service-line, capacity mismatch", discoveryFocus: "L1 + L4 + L6", recommendedBundle: "F1-A3 + F4-A2 + F6-B1 + F3-B3" },
  { stage: "S5 Mature", signatureSituation: "Margin erosion, partner dependence", discoveryFocus: "L4 + L7", recommendedBundle: "F4-A1 + F7-A3 + F3-A2" },
  { stage: "S6 Reinvention", signatureSituation: "Service lines commoditizing", discoveryFocus: "L1 + L5", recommendedBundle: "F1-A1 + F5-A1 + F7-A2" }
];

export const stagePlaybooksRetail: StagePlaybookRow[] = [
  { stage: "S1 Formation", signatureSituation: "Launch, unknown demand pockets", discoveryFocus: "L2 + L6", recommendedBundle: "F2-B2 + F6-B1", bundleSub: "Automation-first · 6 weeks" },
  { stage: "S2 PMF", signatureSituation: "Product-market fit in one micro-segment", discoveryFocus: "L1 + L6", recommendedBundle: "F1-A3 + F6-B1 + F2-B2" },
  { stage: "S3 Traction", signatureSituation: "Scaling paid acquisition, CAC climbing", discoveryFocus: "L2 + L4", recommendedBundle: "F2-B2 + F4-B1 + F3-B1" },
  { stage: "S4 Scale", signatureSituation: "Multi-channel, channel conflict", discoveryFocus: "L4 + L1", recommendedBundle: "F4-A1 + F1-A2 + F4-B1 + F1-B2" },
  { stage: "S5 Mature", signatureSituation: "Saturation, margin pressure", discoveryFocus: "L3 + L7", recommendedBundle: "F3-A2 + F7-A1 + F7-B2" },
  { stage: "S6 Reinvention", signatureSituation: "New category / new geography", discoveryFocus: "L1 + L2", recommendedBundle: "F1-A1 + F1-A2 + F2-A1" }
];

export const stagePlaybooksPlatform: StagePlaybookRow[] = [
  { stage: "S1 Formation", signatureSituation: "Pre-revenue, usage signals unclear", discoveryFocus: "L7 + L6", recommendedBundle: "F7-B1 + F6-A1" },
  { stage: "S2 PMF", signatureSituation: "Early paid conversion, PLG noise", discoveryFocus: "L6 + L7", recommendedBundle: "F7-B1 + F6-B1 + F3-B1" },
  { stage: "S3 Traction", signatureSituation: "Outbound layer added to PLG", discoveryFocus: "L2 + L3", recommendedBundle: "F2-A3 + F2-B1 + F3-A3 + F3-B3" },
  { stage: "S4 Scale", signatureSituation: "Enterprise motion, complex deals", discoveryFocus: "L3 + L6", recommendedBundle: "F3-A1 + F6-A1 + F3-B2 + F5-B2" },
  { stage: "S5 Mature", signatureSituation: "NRR focus, expansion engine", discoveryFocus: "L7 + L6", recommendedBundle: "F7-A3 + F7-B2 + F6-B1" },
  { stage: "S6 Reinvention", signatureSituation: "Platform extension / new vertical", discoveryFocus: "L1 + L5", recommendedBundle: "F1-A1 + F5-A1 + F7-A2" }
];

export const productLineNote = "Why product-line matters more than industry. A services firm monetizes people-hours and relationships. A retail brand monetizes margin per transaction and channel economics. A platform monetizes usage, seats and consumption. The revenue question that unlocks growth is structurally different in each — which is why identical industries can require opposite engagement designs.";

export const situationPlaybooksB1toB15: SituationPlaybookRow[] = [
  { id: "B1", situation: "Pipeline drought", triggerSignals: "Flat or declining pipeline, low reply rates", engagement: "F1-B2 + F2-B2 + F2-B1 + F2-A3", duration: "6–8 wks" },
  { id: "B2", situation: "High CAC / inefficient growth", triggerSignals: "CAC up, LTV:CAC down, budget pressure", engagement: "F6-B1 + F4-B1 + F1-A3", duration: "8 wks" },
  { id: "B3", situation: "Low win rate / stalled deals", triggerSignals: "Late-stage losses, discounting", engagement: "F5-A1 + F5-A2 + F3-B1 + F3-A3", duration: "6 wks" },
  { id: "B4", situation: "Forecast unreliability", triggerSignals: "Commit misses, investor / board scrutiny", engagement: "F3-B3 + F3-A3 + F2-B3", duration: "6–10 wks" },
  { id: "B5", situation: "New market / segment entry", triggerSignals: "Expansion bet, unknown demand", engagement: "F1-A1 + F1-A2 + F1-B1", duration: "4–8 wks" },
  { id: "B6", situation: "New product / service line launch", triggerSignals: "R&D spend without pipeline clarity", engagement: "F7-A1 + F7-A2 + F2-A2", duration: "4–6 wks" },
  { id: "B7", situation: "Channel dependency risk", triggerSignals: "Single platform >40% of revenue", engagement: "F4-A1 + F4-B1 + F1-B2", duration: "8 wks" },
  { id: "B8", situation: "Moving upmarket / enterprise motion", triggerSignals: "Deals growing, cycles lengthening", engagement: "F3-A1 + F6-A1 + F3-B2 + F5-B2", duration: "12 wks" },
  { id: "B9", situation: "Moving downmarket / velocity motion", triggerSignals: "Deals too expensive to serve", engagement: "F7-A1 + F2-A3 + F2-B1", duration: "6 wks" },
  { id: "B10", situation: "Post-M&A GTM integration", triggerSignals: "Overlapping territories, duplicated stacks", engagement: "F4-A2 + F6-A2 + F1-A3", duration: "12–16 wks" },
  { id: "B11", situation: "Competitive displacement pressure", triggerSignals: "Win rate vs. a specific rival falling", engagement: "F5-A1 + F5-B1 + F5-B2", duration: "6 wks" },
  { id: "B12", situation: "Pricing underperformance", triggerSignals: "Discount creep, margin compression", engagement: "F3-A2 + F3-B2 + F7-A1", duration: "6–8 wks" },
  { id: "B13", situation: "Expansion revenue underperformance", triggerSignals: "Flat NRR, cross-sell misses", engagement: "F7-A3 + F7-B2 + F6-B1", duration: "8 wks" },
  { id: "B14", situation: "Demand invisibility", triggerSignals: 'Deals "appear" without attributable source', engagement: "F1-B2 + F2-B3 + F4-B1", duration: "8 wks" },
  { id: "B15", situation: "Sales team ramp failure", triggerSignals: "Slow rep productivity, quota misses", engagement: "F3-A3 + F5-A2 + F5-B2", duration: "6–10 wks" }
];

export const situationSequenceMapping: SituationSequenceRow[] = [
  { situation: "Pipeline drought", modelSequence: [{ id: "E8", label: "E8 FDA", variant: "red" }, { id: "E5", label: "E5 Outcome" }], why: "Speed first, structure later" },
  { situation: "High CAC / efficiency mandate", modelSequence: [{ id: "E3", label: "E3 PoV" }, { id: "E5", label: "E5 Outcome" }], why: "Prove optimization before scaling commitment" },
  { situation: "Low win rate / stalled deals", modelSequence: [{ id: "E2", label: "E2" }, { id: "E8", label: "E8 FDA", variant: "red" }], why: "Design the system + live execution on open deals" },
  { situation: "Forecast unreliability", modelSequence: [{ id: "E3-F", label: "E3-F PoP" }, { id: "E5-D", label: "E5-D" }], why: "Performance-proof the fix before scaling" },
  { situation: "New market / geo entry", modelSequence: [{ id: "E1", label: "E1" }, { id: "E3", label: "E3" }, { id: "E6", label: "E6" }], why: "Validate → prove → co-invest" },
  { situation: "New product / service launch", modelSequence: [{ id: "E3", label: "E3" }, { id: "E8-E", label: "E8-E", variant: "red" }, { id: "E5-E", label: "E5-E" }], why: "Test → launch → scale with shared economics" },
  { situation: "Channel dependency risk", modelSequence: [{ id: "E2", label: "E2" }, { id: "E4-D", label: "E4-D" }], why: "Structural diversification required" },
  { situation: "Moving upmarket", modelSequence: [{ id: "E2", label: "E2" }, { id: "E7", label: "E7 RGA" }, { id: "E3-B", label: "E3-B" }], why: "Capability build + validation" },
  { situation: "Moving downmarket / velocity", modelSequence: [{ id: "E8", label: "E8 FDA", variant: "red" }, { id: "E5", label: "E5" }], why: "Volume motion, performance-tied" },
  { situation: "Post-M&A GTM integration", modelSequence: [{ id: "E4-D", label: "E4-D", variant: "dark" }], why: "Multi-workstream structural change" },
  { situation: "Competitive displacement pressure", modelSequence: [{ id: "E8-E", label: "E8-E FDA", variant: "red" }, { id: "E3", label: "E3 PoV" }], why: "Live tactical response + proof" },
  { situation: "Pricing underperformance", modelSequence: [{ id: "E2-E", label: "E2-E" }, { id: "E3-C", label: "E3-C PoV" }], why: "Design + live market validation" },
  { situation: "Expansion underperformance", modelSequence: [{ id: "E5-E", label: "E5-E" }, { id: "E7-D", label: "E7-D RGA" }], why: "Aligned economics + embedded capability" },
  { situation: "Demand invisibility", modelSequence: [{ id: "E3", label: "E3 PoV" }, { id: "E4", label: "E4", variant: "dark" }], why: "Instrument first, then rebuild" },
  { situation: "Rep ramp failure", modelSequence: [{ id: "E8-D", label: "E8-D FDA", variant: "red" }, { id: "E2-C", label: "E2-C" }], why: "Augment now, systematize later" },
  { situation: "PE portfolio GTM uplift", modelSequence: [{ id: "E6-E", label: "E6-E", variant: "green" }, { id: "E5", label: "E5" }], why: "Shared framework + outcome alignment" }
];

export const engagementJourneys: JourneyItem[] = [
  {
    title: 'Journey A — "Prove then Scale"',
    tag: "Most common · Skeptical buyers",
    steps: [
      { step: "STEP 01", model: "E1 Advisory", duration: "2 WEEKS", description: "Frame the question. Build the thesis." },
      { step: "STEP 02", model: "E3 PoV", duration: "6 WEEKS", description: "Prove directional lift against a baseline." },
      { step: "STEP 03", model: "E4 Transformation", duration: "6 MONTHS", description: "Install the system across the GTM org." },
      { step: "STEP 04", model: "E5 Outcome", duration: "ONGOING", description: "Operate against committed metrics." }
    ]
  },
  {
    title: 'Journey B — "Speed First"',
    tag: "Urgent pipeline · New motion",
    steps: [
      { step: "STEP 01", model: "E8 FDA", duration: "3 MONTHS", description: "Operators in-market, pipeline live." },
      { step: "STEP 02", model: "E2 Consulting", duration: "PARALLEL", description: "Design the system while selling." },
      { step: "STEP 03", model: "E7 RGA", duration: "6–12 MONTHS", description: "Embed and transfer capability." }
    ]
  },
  {
    title: 'Journey C — "Partnership Path"',
    tag: "Strategic bets · Market creation",
    steps: [
      { step: "STEP 01", model: "E2 Consulting", duration: "2 MONTHS", description: "Architecture and joint thesis." },
      { step: "STEP 02", model: "E3 PoP", duration: "2 MONTHS", description: "Performance proof against committed numbers." },
      { step: "STEP 03", model: "E6 Risk-Sharing", duration: "12–18 MONTHS", description: "Co-invest and share the economics." }
    ]
  },
  {
    title: 'Journey D — "Capability Build"',
    tag: "Own it long-term",
    steps: [
      { step: "STEP 01", model: "E2 Consulting", duration: "DESIGN", description: "Method, framework, blueprint." },
      { step: "STEP 02", model: "E7 RGA", duration: "BUILD", description: "Execute alongside the team, transfer skill." },
      { step: "STEP 03", model: "E1 Advisory", duration: "ONGOING", description: "Counsel on retainer as the org runs it." }
    ]
  },
  {
    title: 'Journey E — "Transformation with Skin in the Game"',
    tag: "Enterprise scale · Deepening commitment",
    steps: [
      { step: "STEP 01", model: "E1 Advisory", duration: "DIAGNOSIS", description: "Executive-level truth finding." },
      { step: "STEP 02", model: "E4 Transformation", duration: "80 / 20 RISK", description: "Install the operating system." },
      { step: "STEP 03", model: "E5 Outcome", duration: "PERFORMANCE", description: "Full tie to verified metrics." },
      { step: "STEP 04", model: "E6 (optional)", duration: "DEEPENING", description: "Convert to shared-economics partnership." }
    ]
  }
];

export const pricingStructuresTable: PricingStructureRow[] = [
  { model: "E1 Advisory", base: "Fixed / retainer", variable: "—", paymentTerms: "50% upfront or monthly", minimumCommitment: "2 wks (sprint) / 3 mo (retainer)" },
  { model: "E2 Consulting", base: "Fixed per phase", variable: "T&M for open scope", paymentTerms: "Milestone-based", minimumCommitment: "1 project phase" },
  { model: "E3 PoV / PoP", base: "Small fixed", variable: "Creditable against scale", paymentTerms: "50% upfront", minimumCommitment: "4–8 weeks" },
  { model: "E4 Transformation", base: "Milestone fixed", variable: "20% tied to adoption KPIs", paymentTerms: "Phase gates", minimumCommitment: "4 months" },
  { model: "E5 Outcome", base: "Reduced base (40–60%)", variable: "Success fee 1.5–3× base", paymentTerms: "Monthly base + quarterly success", minimumCommitment: "2 measurement cycles" },
  { model: "E6 Risk-Sharing", base: "Cost-recovery base", variable: "Revenue / margin share", paymentTerms: "Monthly + quarterly true-up", minimumCommitment: "9 months" },
  { model: "E7 RGA", base: "Monthly embedded rate", variable: "30% tied to workstream KPIs", paymentTerms: "Monthly", minimumCommitment: "6 months" },
  { model: "E8 FDA", base: "Deployment fee", variable: "Per-metric accelerators", paymentTerms: "Monthly", minimumCommitment: "3 months" }
];

export const sevenGuardrails: GuardrailItem[] = [
  {
    title: "PoV / PoP Charter",
    description: "Success metric, baseline, attribution method, and gate criteria are defined and signed before kickoff — never retrofitted."
  },
  {
    title: "Outcome Charter",
    description: "For E5 / E6: KPIs, measurement window, data access, and client preconditions are locked pre-signature. Protects both parties."
  },
  {
    title: "Data & Access Precondition",
    description: "All outcome- and risk-bearing models require CRM access, clean baseline data, and a named counterpart. If unmet, KPI obligations are void."
  },
  {
    title: "Attribution Rules",
    description: "What counts as sourced vs. influenced is agreed before measurement begins — not negotiated after the number lands."
  },
  {
    title: "Conversion Credit",
    description: "PoV and PoP fees credit 50–100% against a subsequent larger engagement. Proof should never be paid for twice."
  },
  {
    title: "Exit & Off-Ramp",
    description: "Every model carries a defined exit: PoV go/no-go gate, quarterly out-clause on retainers, milestone exit on transformations."
  },
  {
    title: "Capability Transfer Clause",
    description: "On E4, E7 and E8, all enablement content and playbooks transfer to client IP at completion. We build machines you can own."
  }
];

export const teamRoleArchitecture: TeamRoleRow[] = [
  { role: "Principal / Partner", attachedModels: "E1, E6 governance", responsibility: "Strategic counsel, decision memos, board readouts" },
  { role: "Engagement Lead", attachedModels: "E2, E4", responsibility: "Program ownership, deliverable quality, client management" },
  { role: "Resident Growth Architect (RGA)", attachedModels: "E7", responsibility: "Embedded workstream ownership + capability transfer" },
  { role: "Forward Deployed Sales Accelerator (FDA)", attachedModels: "E8", responsibility: "In-market execution, live pipeline generation" },
  { role: "Automation Engineer", attachedModels: "E3, E4, E5, E8", responsibility: "Agentic systems, telemetry, scoring models" },
  { role: "Revenue Analyst", attachedModels: "E3, E5, E7", responsibility: "KPI instrumentation, lift validation, attribution" },
  { role: "Enablement Lead", attachedModels: "E2, E4, E8", responsibility: "Training, playbook rollout, adoption measurement" },
  { role: "Performance Auditor", attachedModels: "E5, E6", responsibility: "Independent metric verification — fairness for both sides" }
];

export const decisionQuestions: DecisionQuestionItem[] = [
  {
    qNum: "Q1",
    question: "Is the client in a decision, not yet committed to action?",
    recommendation: "E1 Advisory",
    detail: "Speed of clarity is the product."
  },
  {
    qNum: "Q2",
    question: "Is the need structural design with an in-house team to execute?",
    recommendation: "E2 Consulting",
    detail: "We design, they run."
  },
  {
    qNum: "Q3",
    question: "Is there skepticism, a first-time bet, or a need for evidence before scale?",
    recommendation: "E3 PoV / PoP",
    detail: "Small fee, hard gate."
  },
  {
    qNum: "Q4",
    question: "Is there executive mandate + budget for multi-workstream change?",
    recommendation: "E4 Transformation",
    detail: "Milestone-gated program."
  },
  {
    qNum: "Q5",
    question: "Is the client unwilling to pay full fee without performance assurance?",
    recommendation: "E5 Outcome-Based",
    detail: "Aligned economics."
  },
  {
    qNum: "Q6",
    question: "Is the opportunity large enough to justify co-investment and shared upside?",
    recommendation: "E6 Joint Risk-Sharing",
    detail: "Skin in the game."
  },
  {
    qNum: "Q7",
    question: "Does the client need senior capability embedded without hiring?",
    recommendation: "E7 Resident Growth Architects",
    detail: "Embedded execution and transfer."
  },
  {
    qNum: "Q8",
    question: "Is there urgency for live pipeline or closed deals this quarter?",
    recommendation: "E8 Forward Deployed Sales Accelerators",
    detail: "In the field this week.",
    accent: true
  }
];

export const modelComparisonTable: ModelComparisonRow[] = [
  { model: "E1 Advisory", speedToStart: "Immediate", speedToImpact: "Slow (advisory only)", clientRisk: "Low", ourRisk: "Very low", expansionPotential: "Low–Medium", typicalDealSize: "$" },
  { model: "E2 Consulting", speedToStart: "1–2 weeks", speedToImpact: "Medium", clientRisk: "Medium", ourRisk: "Low", expansionPotential: "Medium", typicalDealSize: "$$" },
  { model: "E3 PoV / PoP", speedToStart: "2 weeks", speedToImpact: "Fast (4–8 wks)", clientRisk: "Very low", ourRisk: "Medium", expansionPotential: "High (gateway)", typicalDealSize: "$ (creditable)" },
  { model: "E4 Transformation", speedToStart: "3–4 weeks", speedToImpact: "Slow (months)", clientRisk: "Medium–High", ourRisk: "Medium", expansionPotential: "Very high", typicalDealSize: "$$$$$$" },
  { model: "E5 Outcome", speedToStart: "2–3 weeks", speedToImpact: "Medium", clientRisk: "Low (base only)", ourRisk: "High", expansionPotential: "High", typicalDealSize: "$$ + upside" },
  { model: "E6 Risk-Sharing", speedToStart: "4–6 weeks", speedToImpact: "Slow", clientRisk: "Medium", ourRisk: "High", expansionPotential: "Very high", typicalDealSize: "$ + share" },
  { model: "E7 RGA", speedToStart: "2 weeks", speedToImpact: "Medium", clientRisk: "Medium", ourRisk: "Medium", expansionPotential: "High", typicalDealSize: "$$ (recurring)" },
  { model: "E8 FDA", speedToStart: "1–2 weeks", speedToImpact: "Very fast", clientRisk: "Low", ourRisk: "High", expansionPotential: "High", typicalDealSize: "$$$$ + accelerator" }
];

export const kpiLibraryTable: KpiLibraryRow[] = [
  { layer: "L1 Market", leadingIndicators: "Whitespace accounts identified, intent signal volume", laggingIndicators: "New-segment sourced pipeline $", typicalPovSuccessBar: "≥ 200 qualified whitespace accounts mapped" },
  { layer: "L2 Demand", leadingIndicators: "Reply rate, meeting rate, signal-to-MQL conversion", laggingIndicators: "Pipeline created, CAC", typicalPovSuccessBar: "+25% reply rate vs. control" },
  { layer: "L3 Value", leadingIndicators: "Business-case attach rate, POC conversion", laggingIndicators: "Win rate, average deal size, cycle time", typicalPovSuccessBar: "+15pts POC-to-close conversion" },
  { layer: "L4 Channel", leadingIndicators: "Channel-attributed demand share, partner-sourced SQLs", laggingIndicators: "Blended CAC, margin per channel", typicalPovSuccessBar: "−20% dependency on top channel" },
  { layer: "L5 Competitive", leadingIndicators: "Competitive mentions handled, battlecard usage", laggingIndicators: "Win rate vs. target competitor", typicalPovSuccessBar: "+10pts win rate in contested deals" },
  { layer: "L6 Customer", leadingIndicators: "Propensity score coverage, routing speed", laggingIndicators: "SQL-to-close rate, CAC", typicalPovSuccessBar: "2× qualification accuracy vs. baseline" },
  { layer: "L7 PMF", leadingIndicators: "Usage-to-revenue signal coverage", laggingIndicators: "NRR, expansion revenue, R&D efficiency", typicalPovSuccessBar: "Measurable conversion lift in one cohort" }
];

export const onboardingSteps: OnboardingStep[] = [
  { timing: "Week 0", title: "Fit & Frame", description: "60-minute working session. Situation, segment, stage. We name the discovery layer with the highest leverage and the model that fits the risk profile." },
  { timing: "Week 0–1", title: "Charter", description: "Scope, success metric, baseline, attribution rules, preconditions, and off-ramp. Signed before any delivery resource is scheduled." },
  { timing: "Week 1", title: "Baseline Lock", description: "Data access, CRM instrumentation, metric baseline frozen. Everything after this point is measured against a fixed reference." },
  { timing: "Week 1–2", title: "Deployment", description: "Team assigned by model: principal, engagement lead, RGA, FDA squad, or automation pod. Kickoff with client counterparts." },
  { timing: "Weekly", title: "Working Cadence", description: "Weekly delivery sync, live telemetry dashboard, and a running decision log. No surprises at the readout." },
  { timing: "Gate", title: "Go / No-Go & Scale", description: "Formal gate review against the charter. Options: scale, iterate, transfer, or exit cleanly — with credit applied to the next engagement." }
];

export const glossaryTerms: GlossaryItem[] = [
  { term: "PoV — Proof of Value", definition: "A time-boxed, hypothesis-driven experiment testing whether a capability creates directional value before scale commitment." },
  { term: "PoP — Proof of Performance", definition: "A test against contracted performance numbers — the gate before a performance-tied or retainer engagement." },
  { term: "RGA — Resident Growth Architect", definition: "A senior ProfitMachines operator embedded inside the client org to own a revenue workstream and transfer capability." },
  { term: "FDA — Forward Deployed Sales Accelerator", definition: "A quota-experienced operator deployed in-market to run live sales motions and generate measurable pipeline." },
  { term: "Track A / Track B", definition: "Track A = Consulting Services (human-led). Track B = AI-Driven Automation Engagements (systems-led)." },
  { term: "L1–L7 Discovery Stack", definition: "The seven revenue discovery layers: Market, Demand, Value, Channel, Competitive, Customer, PMF." },
  { term: "ICP", definition: "Ideal Customer Profile — the firmographic, behavioral and intent definition of accounts most likely to buy and expand." },
  { term: "MEDDPICC", definition: "Qualification framework: Metrics, Economic buyer, Decision criteria, Decision process, Paper process, Identify pain, Champion, Competition." },
  { term: "NRR / NRR erosion", definition: "Net Revenue Retention — expansion minus contraction and churn within the installed base." },
  { term: "Outcome Charter", definition: "The pre-signature document locking KPIs, measurement window, attribution rules and preconditions for outcome-based models." },
  { term: "Dark funnel", definition: "Demand activity invisible to standard attribution — communities, dark social, private research, untracked intent." },
  { term: "Profit Pool", definition: "The location of disproportionate margin inside a market — the target of Discovery Layer L1." },
  { term: "Micro-Segment Kit", definition: "A pre-packaged, fixed-scope fast-start engagement built for a recurring micro-segment." },
  { term: "Gain-share multiplier", definition: "The variable uplift applied to shared economics when stretch targets are exceeded in E6 partnerships." }
];

export const faqList: FaqItem[] = [
  {
    question: "Can we start small and expand later?",
    answer: "That is the designed path. Most clients enter through a Micro-Segment Kit or an E3 Proof of Value, where 50–100% of the fee credits against the next engagement. The entire model architecture is built to let risk decrease as evidence accumulates."
  },
  {
    question: 'How is "verified" performance actually verified?',
    answer: "Baseline is locked before deployment. A dedicated Revenue Analyst instruments the measurement, and for E5 / E6 engagements a Performance Auditor — independent of the delivery pod — signs off the numbers before any success fee is invoiced. Attribution rules are written into the charter before kickoff."
  },
  {
    question: "What happens if our data or CRM is a mess?",
    answer: "It is more common than not. Outcome- and risk-bearing models (E5, E6, E8 accelerators) list data access and baseline quality as contractual preconditions. Where those are unmet, we either start with an E2-A Revenue Leak Diagnostic to establish the baseline, or restructure the engagement to consulting terms until instrumentation exists."
  },
  {
    question: "Do you replace our sales team?",
    answer: "No. E8 Forward Deployed operators work alongside your reps on defined motions and segments, with a hard capability-transfer clause at completion. E7 Residents are explicitly measured on how fast the client team can run the workstream without us."
  },
  {
    question: "We are not a SaaS company. Does this still apply?",
    answer: "Yes. The catalog is segmented by product-line economics — Services, Retail & Commerce, Platform — because the revenue mechanics differ structurally between selling people-hours, transactions, and usage. The discovery layers are constant; the emphasis and engagement design are not."
  },
  {
    question: "How fast can something start?",
    answer: "E1 Advisory and E8 FDA can start inside one week. E3 PoV typically kicks off within two weeks of charter signature. E4 Transformation programs take three to four weeks to mobilize properly — rushing that phase is the most common cause of adoption failure."
  },
  {
    question: "What is the smallest engagement you sell?",
    answer: "A Micro-Segment Kit — three weeks, fixed scope, fixed fee — or an E1-D War-Room Advisory of one to two weeks. Both exist to answer one question decisively."
  }
];

export const engageFooterContent = {
  kicker: "Engage",
  heading: "From guesswork to predictive revenue intelligence.",
  lead: "Send us the situation, the segment, and the stage. We will return a recommended model sequence, a charter outline, and a proposed baseline lock date within three business days.",
  ctaText: "Request Engagement Proposal",
  ctaHref: "mailto:growth@profitmachines.ai",
  engagementModels: [
    "E1 — Advisory & Insight",
    "E2 — Consulting Services",
    "E3 — Proof of Value / Performance",
    "E4 — Transformation Engagements",
    "E5 — Outcome-Based",
    "E6 — Joint Risk-Sharing",
    "E7 — Resident Growth Architects",
    "E8 — Forward Deployed Accelerators"
  ],
  discoveryLayers: [
    "L1 — Market Discovery",
    "L2 — Demand Discovery",
    "L3 — Value Discovery",
    "L4 — Channel Discovery",
    "L5 — Competitive Discovery",
    "L6 — Customer Discovery",
    "L7 — PMF Discovery"
  ],
  brandName: "ProfitMachines — Sales Acceleration, Consulting & Services",
  edition: "Revenue Architecture Dossier · Edition 2026"
};

export const modelSelectorData = {
  modelsMap: {
    e1: 'E1 Advisory',
    e2: 'E2 Consulting',
    e3: 'E3 PoV / PoP',
    e4: 'E4 Transformation',
    e5: 'E5 Outcome-Based',
    e6: 'E6 Joint Risk-Sharing',
    e7: 'E7 Resident Growth Architects',
    e8: 'E8 Forward Deployed Accelerators'
  } as Record<string, string>,

  bySituation: {
    B1:  { seq: ['e8', 'e5'],            note: 'Speed first, structure later. An FDA squad generates pipeline immediately while an outcome-based layer sustains it.' },
    B2:  { seq: ['e3', 'e5'],            note: 'Prove the optimization on a contained scope before scaling the commitment.' },
    B3:  { seq: ['e2', 'e8'],            note: 'Redesign the sales system while FDA operators work the open pipeline live.' },
    B4:  { seq: ['e3', 'e5'],            note: 'Performance-proof the forecast fix with a PoP, then convert to an outcome commitment.' },
    B5:  { seq: ['e1', 'e3', 'e6'],       note: 'Validate the thesis, prove demand, then co-invest in the market build.' },
    B6:  { seq: ['e3', 'e8', 'e5'],       note: 'Test the offer, launch with a GTM squad, then scale on shared economics.' },
    B7:  { seq: ['e2', 'e4'],            note: 'Structural diversification requires architecture plus a multi-workstream program.' },
    B8:  { seq: ['e2', 'e7', 'e3'],       note: 'Build the enterprise motion capability, embed an architect, and validate the propensity model.' },
    B9:  { seq: ['e8', 'e5'],            note: 'Volume motion needs in-market execution with performance-tied economics.' },
    B10: { seq: ['e4'],                 note: 'Post-M&A GTM integration is a single, multi-workstream transformation program.' },
    B11: { seq: ['e8', 'e3'],            note: 'Live tactical displacement now, proof of the play before it scales.' },
    B12: { seq: ['e2', 'e3'],            note: 'Redesign pricing and packaging, then validate with a live A/B PoV.' },
    B13: { seq: ['e5', 'e7'],            note: 'Align economics to expansion, and embed an architect to build the engine.' },
    B14: { seq: ['e3', 'e4'],            note: 'Instrument demand visibility first, then rebuild the engine with attribution in place.' },
    B15: { seq: ['e8', 'e2'],            note: 'Augment rep productivity immediately, then systematize the sales motion.' }
  } as Record<string, { seq: string[]; note: string }>,

  segmentNotes: {
    services: {
      mix: 'Track mix tends toward consulting-heavy delivery (55–75% Track A) — services economics live in relationships, pricing, and service-line margin.',
      adj: (s: string[]) => s
    },
    retail: {
      mix: 'Track mix tends toward automation-heavy delivery (25–50% Track A) — retail economics live in CAC, channel mix, and micro-segment margin.',
      adj: (s: string[]) => s
    },
    platform: {
      mix: 'Track mix is balanced-to-automated (25–55% Track A) — platform economics live in usage signals, propensity, and expansion.',
      adj: (s: string[]) => s
    },
    industrial: {
      mix: 'Track mix leans consulting (60/40) — channel economics, coverage design, and long-cycle deal rigor dominate.',
      adj: (s: string[]) => (s[0] === 'e3' ? ['e2', ...s] : s)
    },
    finserv: {
      mix: 'Track mix leans consulting (55/45) with governance-heavy delivery — compliance constraints require charter precision.',
      adj: (s: string[]) => s
    }
  } as Record<string, { mix: string; adj: (s: string[]) => string[] }>
};
