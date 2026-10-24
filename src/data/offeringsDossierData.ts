// Strictly source-derived content from Engagement Structue.html
// DO NOT MODIFY OR INVENT NEW COPY

export interface DiscoveryLayerItem {
  id: string; // 'L1' to 'L7'
  name: string;
  coreQuestion: string;
  trackA: string; // Consulting
  trackB: string; // Automation
}

export interface SubOfferingItem {
  id: string;
  name: string;
  track: 'Consulting' | 'Automation';
  focus: string;
}

export interface OfferingFamilyItem {
  id: string; // 'F1' to 'F7'
  name: string;
  layerRef: string; // 'L1' to 'L7'
  subOfferings: SubOfferingItem[];
}

export interface SegmentMatrixRow {
  subSegment: string;
  microSegmentExamples: string;
  prioritySubOfferings: string[];
  trackMix: string; // e.g. "70 / 30"
  keyDiscoveryQuestion: string;
}

export interface AdjacentSegmentRow {
  subSegment: string;
  microSegment: string;
  prioritySubOfferings: string[];
  mix: string;
}

export interface MicroSegmentKitItem {
  kit: string;
  builtFor: string;
  contents: string;
  track: string;
  duration: string;
}

export const offeringsMeta = {
  kicker: "Revenue Architecture Dossier · Edition 2026",
  title: "Revenue Discovery Offerings",
  subtitle: "Discovery Stack & Offering Families",
  lede: "Seven discovery layers, seven offering families, two delivery tracks (Consulting Services & AI-Driven Automation), and matched micro-segment economics for Services, Retail & Commerce, Platform, and Adjacent Sectors.",
  counts: [
    { label: "Discovery Layers", value: "07", desc: "L1 Market → L7 PMF" },
    { label: "Offering Families", value: "07", desc: "F1 – F7, Tracks A & B" },
    { label: "Micro-Segment Kits", value: "08", desc: "Fixed-scope fast starts" },
    { label: "Delivery Tracks", value: "02", desc: "Consulting & Automation" }
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

export const scopeDefinition = {
  kicker: "Scope Definition",
  title: "What this catalog covers. And what it deliberately does not.",
  inScope: {
    title: "Sales · Revenue · GTM · Demand",
    items: [
      "Market, demand, value, channel, competitive, customer & PMF discovery",
      "Pipeline architecture, GTM motion design, sales execution systems",
      "Revenue intelligence, forecasting, deal velocity",
      "Buyer intent, ICP, segmentation, whitespace & micro-segment economics",
      "Pricing, packaging & offer architecture",
      "Expansion & cross-sell revenue discovery"
    ]
  },
  outOfScope: {
    title: "Handled by other ProfitMachines practices",
    items: [
      "Enterprise AI governance & SOC2 / ISO programs",
      "Back-office, finance & HR automation",
      "Post-sale support operations (except expansion revenue)",
      "General cloud, infrastructure & platform engineering",
      "Security operations & zero-trust architecture"
    ]
  },
  deliveryTracksNote: "Two delivery tracks run through every offering. Track A — Consulting Services: human-led diagnostics, strategy, playbooks, enablement, governance. Track B — AI-Driven Automation Engagements: agentic systems, ML models, workflow automation, telemetry pipelines. Track A is about deciding what to do. Track B is about building the machine that does it."
};

export const discoveryStackLayers: DiscoveryLayerItem[] = [
  {
    id: "L1",
    name: "Market",
    coreQuestion: "Where is the revenue we haven't mapped?",
    trackA: "TAM / whitespace mapping",
    trackB: "Intent telemetry & sizing models"
  },
  {
    id: "L2",
    name: "Demand",
    coreQuestion: "What are buyers struggling to articulate?",
    trackA: "Demand & message architecture",
    trackB: "Signal-to-demand agents"
  },
  {
    id: "L3",
    name: "Value",
    coreQuestion: "How do we prove ROI before the PO?",
    trackA: "Value engineering, business-case design",
    trackB: "ROI model generators, deal intelligence"
  },
  {
    id: "L4",
    name: "Channel",
    coreQuestion: "How do we distribute without dependency?",
    trackA: "Channel & partner economics design",
    trackB: "Channel mix optimizers"
  },
  {
    id: "L5",
    name: "Competitive",
    coreQuestion: "Why do we win / lose?",
    trackA: "Win-loss, positioning teardown",
    trackB: "Real-time competitive intel agents"
  },
  {
    id: "L6",
    name: "Customer",
    coreQuestion: "Who is actually ready to buy?",
    trackA: "ICP & buying-committee mapping",
    trackB: "Propensity & lookalike engines"
  },
  {
    id: "L7",
    name: "PMF",
    coreQuestion: "What should we sell, to whom, at what price?",
    trackA: "Offer, packaging & price architecture",
    trackB: "Usage → revenue signal pipelines"
  }
];

export const discoveryStackPullquote = "Most companies experience these challenges as isolated pains. They are interconnected symptoms of one system that was never designed.";

export const offeringFamilies: OfferingFamilyItem[] = [
  {
    id: "F1",
    name: "Market & Whitespace Discovery",
    layerRef: "L1",
    subOfferings: [
      { id: "F1-A1", name: "TAM / SAM / SOM & Profit Pool Mapping", track: "Consulting", focus: "Sized whitespace, margin-driver map" },
      { id: "F1-A2", name: "Segment Attractiveness & Entry Thesis", track: "Consulting", focus: "Prioritized entry order, risk / benefit" },
      { id: "F1-A3", name: "Micro-Segment Margin Mapping", track: "Consulting", focus: "Sub-segment economics" },
      { id: "F1-B1", name: "Predictive Market Sizing Engine", track: "Automation", focus: "ML-based TAM with live re-scoring" },
      { id: "F1-B2", name: "Dark-Funnel & Intent Telemetry", track: "Automation", focus: "Unseen demand capture" },
      { id: "F1-B3", name: "Whitespace Alerting Agents", track: "Automation", focus: "Accounts / regions slipping out of coverage" }
    ]
  },
  {
    id: "F2",
    name: "Demand & Pipeline Discovery",
    layerRef: "L2",
    subOfferings: [
      { id: "F2-A1", name: "Demand Architecture & Channel Mix Design", track: "Consulting", focus: "Where demand comes from, and why" },
      { id: "F2-A2", name: "Messaging & Offer Engineering", track: "Consulting", focus: "Category language, unarticulated needs" },
      { id: "F2-A3", name: "Pipeline Motion Design (Outbound / Inbound / ABM / PLG-assist)", track: "Consulting", focus: "Motion selection & sequencing" },
      { id: "F2-B1", name: "Autonomous SDR / Demand Agent Fleet", track: "Automation", focus: "Multi-channel agentic outbound" },
      { id: "F2-B2", name: "Dynamic Messaging Mesh", track: "Automation", focus: "Personalization at scale" },
      { id: "F2-B3", name: "Pipeline Velocity Telemetry", track: "Automation", focus: "Stage-slip detection, real-time flow metrics" }
    ]
  },
  {
    id: "F3",
    name: "Value & Deal Discovery",
    layerRef: "L3",
    subOfferings: [
      { id: "F3-A1", name: "Value Engineering & ROI Business Case Studio", track: "Consulting", focus: "Pre-PO proof architecture" },
      { id: "F3-A2", name: "Pricing & Packaging Architecture", track: "Consulting", focus: "Price-to-value alignment" },
      { id: "F3-A3", name: "Sales Stage & Qualification System", track: "Consulting", focus: "MEDDPICC, deal rigor" },
      { id: "F3-B1", name: "Deal Intelligence & Win-Probability Engine", track: "Automation", focus: "Risk scoring, next-best-action" },
      { id: "F3-B2", name: "Dynamic Deal Room & ROI Model Agent", track: "Automation", focus: "Auto-generated business cases" },
      { id: "F3-B3", name: "Forecast Algorithm", track: "Automation", focus: "Commit / upside rigor, verifiable precision" }
    ]
  },
  {
    id: "F4",
    name: "Channel & Distribution Discovery",
    layerRef: "L4",
    subOfferings: [
      { id: "F4-A1", name: "Channel Economics & Partner Program Design", track: "Consulting", focus: "Margin, dependency, coverage" },
      { id: "F4-A2", name: "Coverage Model & Territory Design", track: "Consulting", focus: "Field / inside / hybrid, quota, comp" },
      { id: "F4-B1", name: "Channel Mix Optimization Engine", track: "Automation", focus: "Budget & effort reallocation" },
      { id: "F4-B2", name: "Partner Sourcing & Performance Agents", track: "Automation", focus: "Partner scoring, co-sell routing" }
    ]
  },
  {
    id: "F5",
    name: "Competitive & Positioning Discovery",
    layerRef: "L5",
    subOfferings: [
      { id: "F5-A1", name: "Win / Loss Teardown & Positioning Thesis", track: "Consulting", focus: "Why deals resolve the way they do" },
      { id: "F5-A2", name: "Objection & Negotiation Playbook", track: "Consulting", focus: "Late-stage loss prevention" },
      { id: "F5-B1", name: "Competitive Intelligence Agent", track: "Automation", focus: "Live pricing / messaging change alerts" },
      { id: "F5-B2", name: "Battlecard & Objection-Response Autopilot", track: "Automation", focus: "Rep-surface competitive content" }
    ]
  },
  {
    id: "F6",
    name: "Customer & Propensity Discovery",
    layerRef: "L6",
    subOfferings: [
      { id: "F6-A1", name: "ICP & Buying-Committee Diagnostic", track: "Consulting", focus: "Who buys, who blocks, who champions" },
      { id: "F6-A2", name: "Account Tiering & Coverage Strategy", track: "Consulting", focus: "Effort-to-propensity allocation" },
      { id: "F6-B1", name: "Propensity & Lookalike Engine", track: "Automation", focus: "Neural scoring of the total addressable base" },
      { id: "F6-B2", name: "Buying Signal Aggregation & Routing", track: "Automation", focus: "Sub-second lead-to-rep routing" }
    ]
  },
  {
    id: "F7",
    name: "PMF, Offer & Revenue Architecture Discovery",
    layerRef: "L7",
    subOfferings: [
      { id: "F7-A1", name: "Offer & Bundle Architecture", track: "Consulting", focus: "What to sell to whom at what price" },
      { id: "F7-A2", name: "R&D-to-Revenue Alignment Review", track: "Consulting", focus: "Kill / scale / defend decisions" },
      { id: "F7-A3", name: "Expansion & Cross-Sell Revenue Mapping", track: "Consulting", focus: "Installed-base revenue discovery" },
      { id: "F7-B1", name: "Usage → Revenue Signal Pipeline", track: "Automation", focus: "Product telemetry linked to revenue" },
      { id: "F7-B2", name: "Next-Best-Offer / Expansion Propensity Engine", track: "Automation", focus: "Timing of upsell motions" }
    ]
  }
];

export const segmentMatrixIntro = {
  kicker: "Segmentation",
  title: "Segments, sub-segments, micro-segments.",
  description: "The micro-segment — not the industry headline — determines which sub-offerings get emphasized and how the engagement is structured. Track mix shown as A% Consulting / B% Automation."
};

export const servicesCompaniesSegments: SegmentMatrixRow[] = [
  {
    subSegment: "Creative / Marketing Agencies",
    microSegmentExamples: "Boutique, performance agency, brand studio, production house",
    prioritySubOfferings: ["F2-A2", "F1-A3", "F3-A2", "F7-A1"],
    trackMix: "70 / 30",
    keyDiscoveryQuestion: "Which service lines actually carry margin?"
  },
  {
    subSegment: "IT Services / System Integrators",
    microSegmentExamples: "Offshore dev shop, cloud SI, boutique engineering firm",
    prioritySubOfferings: ["F4-A1", "F3-A1", "F6-A1", "F1-A1"],
    trackMix: "55 / 45",
    keyDiscoveryQuestion: "Which accounts hide multi-year services revenue?"
  },
  {
    subSegment: "Management / Strategy Consultancies",
    microSegmentExamples: "Niche advisory, transformation boutique",
    prioritySubOfferings: ["F5-A1", "F3-A2", "F6-A2"],
    trackMix: "75 / 25",
    keyDiscoveryQuestion: "How do we productize and price our IP?"
  },
  {
    subSegment: "Staffing & Recruiting",
    microSegmentExamples: "Tech staffing, RPO, executive search",
    prioritySubOfferings: ["F2-A3", "F6-B1", "F4-A2", "F2-B1"],
    trackMix: "35 / 65",
    keyDiscoveryQuestion: "Where is repeatable demand per role vertical?"
  },
  {
    subSegment: "Managed Services / Outsourcing",
    microSegmentExamples: "BPO, ITO, security MSSP, cloud MSP",
    prioritySubOfferings: ["F4-A1", "F7-A3", "F3-B3", "F1-B1"],
    trackMix: "45 / 55",
    keyDiscoveryQuestion: "Which contracts mask unprofitable delivery?"
  },
  {
    subSegment: "Freelance / Micro-Consultancy",
    microSegmentExamples: "Independent operators, small pods",
    prioritySubOfferings: ["F2-A2", "F7-A1"],
    trackMix: "85 / 15",
    keyDiscoveryQuestion: "What is my one-sentence differentiated offer?"
  }
];

export const retailCommerceSegments: SegmentMatrixRow[] = [
  {
    subSegment: "DTC / E-Commerce Brands",
    microSegmentExamples: "Apparel, beauty, supplements, home goods",
    prioritySubOfferings: ["F1-A3", "F2-B2", "F4-B1", "F6-B1"],
    trackMix: "30 / 70",
    keyDiscoveryQuestion: "Which micro-segments carry contribution margin after CAC?"
  },
  {
    subSegment: "Marketplace Sellers / Aggregators",
    microSegmentExamples: "Amazon FBA, marketplace operators, roll-ups",
    prioritySubOfferings: ["F1-B2", "F4-B1", "F5-B1", "F2-B2"],
    trackMix: "25 / 75",
    keyDiscoveryQuestion: "Which channels are we silently dependent on?"
  },
  {
    subSegment: "Omnichannel / Chain Retail",
    microSegmentExamples: "Regional chains, department, specialty retail",
    prioritySubOfferings: ["F4-A1", "F1-A2", "F2-A1", "F7-B1"],
    trackMix: "50 / 50",
    keyDiscoveryQuestion: "How do store and digital demand cannibalize or compound?"
  },
  {
    subSegment: "Luxury / Premium Retail",
    microSegmentExamples: "Designer, jewelry, high-end lifestyle",
    prioritySubOfferings: ["F5-A1", "F2-A2", "F6-A2"],
    trackMix: "70 / 30",
    keyDiscoveryQuestion: "How do we protect price integrity while growing?"
  },
  {
    subSegment: "Quick Commerce / Subscription",
    microSegmentExamples: "Meal kits, subscription boxes, on-demand delivery",
    prioritySubOfferings: ["F7-B1", "F6-B1", "F3-B2", "F2-B2"],
    trackMix: "25 / 75",
    keyDiscoveryQuestion: "What signals predict churn vs. expansion?"
  },
  {
    subSegment: "Retail Media & Retail-as-a-Service",
    microSegmentExamples: "Retailer ad networks, white-label commerce",
    prioritySubOfferings: ["F7-A1", "F3-A2", "F1-A1", "F7-B2"],
    trackMix: "50 / 50",
    keyDiscoveryQuestion: "How do we price media inventory against real demand?"
  }
];

export const platformCompaniesSegments: SegmentMatrixRow[] = [
  {
    subSegment: "Horizontal SaaS",
    microSegmentExamples: "CRM-adjacent, HR tech, collaboration, finance SaaS",
    prioritySubOfferings: ["F3-B3", "F2-A3", "F6-B1", "F7-A1"],
    trackMix: "40 / 60",
    keyDiscoveryQuestion: "Which verticals hide our highest win-rate?"
  },
  {
    subSegment: "Vertical SaaS",
    microSegmentExamples: "Construction, legal tech, health tech, edtech",
    prioritySubOfferings: ["F1-A1", "F3-A1", "F6-A1", "F4-A1"],
    trackMix: "55 / 45",
    keyDiscoveryQuestion: "Where is the un-mapped workflow we can own?"
  },
  {
    subSegment: "PLG / Self-Serve SaaS",
    microSegmentExamples: "Dev tools, freemium productivity, design tools",
    prioritySubOfferings: ["F7-B1", "F2-A3", "F3-B1", "F7-B2"],
    trackMix: "25 / 75",
    keyDiscoveryQuestion: "Which usage patterns predict paid conversion?"
  },
  {
    subSegment: "Marketplaces (B2B / B2C)",
    microSegmentExamples: "Two-sided platforms, service marketplaces",
    prioritySubOfferings: ["F4-A1", "F6-B1", "F1-B1", "F4-B2"],
    trackMix: "40 / 60",
    keyDiscoveryQuestion: "Which side of the marketplace is actually monetizable?"
  },
  {
    subSegment: "API / Infrastructure Platforms",
    microSegmentExamples: "Payments, data infra, cloud tooling, ML ops",
    prioritySubOfferings: ["F3-A1", "F5-A1", "F2-A2", "F3-B2"],
    trackMix: "50 / 50",
    keyDiscoveryQuestion: "How do we sell consumption into enterprise buying committees?"
  },
  {
    subSegment: "Platform-in-Company",
    microSegmentExamples: "Retailer-built platforms, bank-built fintech rails",
    prioritySubOfferings: ["F7-A2", "F1-A2", "F3-A2"],
    trackMix: "70 / 30",
    keyDiscoveryQuestion: "How do we price an internal platform as a product?"
  }
];

export const adjacentSegments: AdjacentSegmentRow[] = [
  {
    subSegment: "Manufacturing / Industrial",
    microSegment: "Components, OEM, industrial equipment, distribution",
    prioritySubOfferings: ["F4-A1", "F3-A1", "F4-A2", "F6-A1"],
    mix: "60 / 40"
  },
  {
    subSegment: "Financial Services",
    microSegment: "Payments, lending, insurance, wealth, fintech",
    prioritySubOfferings: ["F6-A1", "F3-A1", "F5-A1", "F6-B2"],
    mix: "55 / 45"
  },
  {
    subSegment: "Healthcare & Life Sciences",
    microSegment: "Providers, medtech, digital health, pharma commercial",
    prioritySubOfferings: ["F6-A1", "F2-A1", "F3-A1"],
    mix: "65 / 35"
  },
  {
    subSegment: "Media / Education / Info",
    microSegment: "Publishers, course creators, events, B2B media",
    prioritySubOfferings: ["F2-A2", "F7-A1", "F2-B2", "F7-B2"],
    mix: "40 / 60"
  }
];

export const microSegmentKitsIntro = {
  title: "Micro-Segment Discovery Kits",
  description: "Pre-packaged, fixed-scope fast starts for micro-segments we see repeatedly. They cut scoping time and start delivery inside two weeks."
};

export const microSegmentKits: MicroSegmentKitItem[] = [
  {
    kit: "Agency Margin Kit",
    builtFor: "Boutique & mid-size agencies",
    contents: "F1-A3 + F7-A1 + F3-A2",
    track: "A",
    duration: "3 weeks"
  },
  {
    kit: "DTC Margin Kit",
    builtFor: "DTC & e-commerce brands",
    contents: "F1-A3 + F2-B2 + F4-B1 + F6-B1",
    track: "B-heavy",
    duration: "6 weeks"
  },
  {
    kit: "Vertical SaaS Whitespace Kit",
    builtFor: "Vertical SaaS scale-ups",
    contents: "F1-A1 + F3-A1 + F6-A1",
    track: "A",
    duration: "4 weeks"
  },
  {
    kit: "PLG Conversion Kit",
    builtFor: "Self-serve / freemium platforms",
    contents: "F7-B1 + F6-B1 + F3-B1",
    track: "B",
    duration: "6 weeks"
  },
  {
    kit: "Enterprise Motion Kit",
    builtFor: "Any segment moving upmarket",
    contents: "F3-A1 + F6-A1 + F3-B2",
    track: "A + B",
    duration: "10 weeks"
  },
  {
    kit: "Marketplace Liquidity Kit",
    builtFor: "Two-sided platforms",
    contents: "F4-A1 + F6-B1 + F1-B1",
    track: "A + B",
    duration: "8 weeks"
  },
  {
    kit: "Channel De-Risk Kit",
    builtFor: "Platform-dependent sellers",
    contents: "F4-A1 + F4-B1 + F1-B2",
    track: "A + B",
    duration: "8 weeks"
  },
  {
    kit: "Pricing & Packaging Kit",
    builtFor: "SaaS & services with discount creep",
    contents: "F3-A2 + F7-A1 + F3-B2",
    track: "A",
    duration: "5 weeks"
  }
];
