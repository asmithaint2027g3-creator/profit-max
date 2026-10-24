// Clean, customer-facing content for the ProfitMachines Engagement Model page
// Zero internal codes (no E1-E8, B1-B15, etc. in visible text)

export interface EngagementModelDetail {
  id: string;
  number: string;
  title: string;
  headline: string;
  summary: string;
  whatWeDeliver: string[];
  duration: string;
  bestFor: string;
  nextStep: string;
  badge?: string;
  extraDetails?: {
    label: string;
    description: string;
  }[];
  possiblePerformanceMeasures?: string[];
  commercialApproach?: string;
  howItWorks?: string;
  howItDiffers?: string;
}

export interface SituationMatchItem {
  id: string;
  situation: string;
  recommendedModel: string;
  modelId: string;
  rationale: string;
  iconName: string;
}

export interface EngagementJourneyItem {
  id: string;
  number: string;
  name: string;
  steps: string[];
  description: string;
  bestFor: string;
}

export interface CommercialModelItem {
  title: string;
  description: string;
}

export interface OnboardingStepItem {
  step: string;
  title: string;
  description: string;
}

export interface EngagementFaqItem {
  question: string;
  answer: string;
}

// ── 1. The Eight Engagement Models ──
export const engagementModels: EngagementModelDetail[] = [
  {
    id: "advisory-insight",
    number: "01",
    title: "Advisory & Insight",
    headline: "Clarity before commitment.",
    summary: "Get an independent perspective on your revenue challenges, market opportunities, and strategic decisions. We help you understand the situation and identify the most appropriate next step.",
    whatWeDeliver: [
      "Market and revenue opportunity assessment",
      "Revenue leak and whitespace analysis",
      "Pricing and go-to-market insights",
      "Discovery scorecards and decision recommendations",
      "Executive presentations and strategic advisory"
    ],
    duration: "2–6 weeks or an ongoing advisory retainer",
    bestFor: "Market entry decisions, pricing strategy, revenue performance reviews, mergers and acquisitions diligence, and executive-level growth planning.",
    nextStep: "Validate the opportunity through a focused proof engagement or move into a broader transformation."
  },
  {
    id: "consulting-services",
    number: "02",
    title: "Consulting Services",
    headline: "Design the system. Equip your team to execute.",
    summary: "We develop the strategies, frameworks, and operating processes required to build a more consistent and effective revenue engine.",
    whatWeDeliver: [
      "Revenue and sales process diagnostics",
      "Ideal Customer Profile and segmentation frameworks",
      "Go-to-market architecture and channel planning",
      "Sales stages, qualification, and forecasting frameworks",
      "Demand generation and messaging architecture",
      "Pricing, packaging, and sales enablement playbooks"
    ],
    duration: "4–12 weeks",
    bestFor: "Businesses that have internal teams but need specialist expertise, a structured approach, or a clear implementation blueprint.",
    nextStep: "Extend into transformation support or embed a growth architect to help execute the plan."
  },
  {
    id: "proof-of-value-performance",
    number: "03",
    title: "Proof of Value & Proof of Performance",
    headline: "Prove the opportunity before scaling.",
    summary: "Run a focused experiment to determine whether a proposed strategy, model, or automation capability delivers the expected value or performance.",
    whatWeDeliver: [
      "Defined business hypothesis and scope",
      "Baseline measurement and agreed success criteria",
      "Time-bound experiment or performance test",
      "Results analysis and validation",
      "A formal decision to scale, refine, or stop"
    ],
    duration: "4–8 weeks",
    bestFor: "First-time engagements, new market opportunities, automation adoption, and situations where evidence is needed before a larger investment.",
    extraDetails: [
      {
        label: "Proof of Value (PoV)",
        description: "Tests whether a capability creates meaningful business value."
      },
      {
        label: "Proof of Performance (PoP)",
        description: "Tests whether a capability performs against predefined targets."
      }
    ],
    nextStep: "Use the results to make an informed scale decision."
  },
  {
    id: "transformation-engagements",
    number: "04",
    title: "Transformation Engagements",
    headline: "Build a connected revenue operating system.",
    summary: "Move beyond isolated improvements and strengthen your end-to-end go-to-market approach. We combine discovery, operating model design, implementation, automation, and team enablement.",
    whatWeDeliver: [
      "Revenue discovery across seven discovery layers",
      "Go-to-market operating model design",
      "Sales and demand process improvements",
      "AI-driven automation and analytics implementation",
      "Team training and adoption support",
      "Governance, measurement, and capability transfer"
    ],
    duration: "4–9 months",
    bestFor: "Organizations undertaking structural growth initiatives, scaling sales operations, integrating go-to-market functions after an acquisition, or rebuilding their revenue systems.",
    nextStep: "Continue with performance-aligned support where ongoing measurement and accountability are required."
  },
  {
    id: "outcome-based-engagement",
    number: "05",
    title: "Outcome-Based Engagement",
    headline: "Connect delivery to measurable outcomes.",
    summary: "Structure the engagement around agreed business metrics, with a base fee and a variable component linked to verified performance.",
    whatWeDeliver: [
      "Defined performance goals and measurement rules",
      "Revenue and sales process improvements",
      "Pipeline and conversion optimization",
      "Performance tracking and reporting",
      "Review against agreed business outcomes"
    ],
    duration: "6–12 months",
    possiblePerformanceMeasures: [
      "Qualified pipeline generation",
      "Sales-qualified lead volume",
      "Customer acquisition cost",
      "Win rate and deal velocity",
      "Forecast accuracy",
      "Expansion revenue"
    ],
    bestFor: "Businesses with measurable objectives, reliable baseline data, and the readiness to track performance consistently.",
    commercialApproach: "The base fee, success fee, measurement period, attribution rules, and client responsibilities are agreed before the engagement begins.",
    nextStep: "Scale the commercial model or transition into an ongoing shared-economics relationship."
  },
  {
    id: "joint-risk-sharing",
    number: "06",
    title: "Joint Risk-Sharing Engagement",
    headline: "Build growth through shared commitment.",
    summary: "For significant strategic opportunities, ProfitMachines and the client work through a joint business plan with agreed responsibilities, co-investment, and shared economic incentives.",
    whatWeDeliver: [
      "Joint business planning and growth objectives",
      "Market or category development",
      "Product launch and channel partnership support",
      "Shared governance and progress reviews",
      "Agreed revenue or margin measurement",
      "Defined upside, downside, and exit conditions"
    ],
    duration: "9–18 months",
    bestFor: "New market creation, new product launches, channel and ecosystem partnerships, major growth initiatives, and portfolio-wide revenue improvement.",
    commercialApproach: "The investment structure, performance baseline, risk allocation, and shared economics are established through a mutually agreed commercial arrangement.",
    nextStep: "Transition sustained assets into long-term internal governance or expand into adjacent categories."
  },
  {
    id: "resident-growth-architects",
    number: "07",
    title: "Resident Growth Architects",
    headline: "Embed expertise. Build lasting capability.",
    summary: "A senior growth specialist works alongside your team to own a revenue workstream, improve execution, and transfer the knowledge required to sustain progress.",
    whatWeDeliver: [
      "Embedded revenue and growth expertise",
      "Demand and pipeline architecture",
      "Sales system and forecasting improvements",
      "Revenue intelligence and analytics",
      "Pricing and packaging support",
      "Measurement frameworks and capability transfer"
    ],
    duration: "6–18 months",
    bestFor: "Organizations that need senior expertise and sustained execution without immediately hiring for every specialist capability.",
    howItWorks: "The resident architect collaborates with your internal team, supported by relevant ProfitMachines specialists when needed.",
    nextStep: "Complete capability transfer as internal leadership assumes long-term workstream ownership."
  },
  {
    id: "forward-deployed-sales-accelerators",
    number: "08",
    title: "Forward-Deployed Sales Accelerators",
    headline: "Work in the market. Move live opportunities forward.",
    summary: "Experienced sales operators work alongside your team to execute sales activities, validate market assumptions, and support pipeline generation and deal progression.",
    whatWeDeliver: [
      "Target-account research and prospecting",
      "Multi-channel outbound execution",
      "Lead qualification and meeting development",
      "Deal acceleration and account penetration",
      "Competitive positioning and objection analysis",
      "Pipeline tracking and progression reviews"
    ],
    duration: "3–6 months",
    bestFor: "Businesses facing pipeline shortages, entering new segments, launching products, accelerating strategic deals, or supporting sales teams during periods of rapid growth.",
    howItDiffers: "A resident architect builds the system and internal capability. A forward-deployed accelerator focuses on live market execution and sales opportunities.",
    nextStep: "Transition qualified accounts and validated playbooks to full-time internal sales reps."
  }
];

// ── 2. Situation Matcher Guide ──
export const situationMatches: SituationMatchItem[] = [
  {
    id: "clarity",
    situation: "When you need clarity",
    recommendedModel: "Advisory & Insight",
    modelId: "advisory-insight",
    rationale: "Understand the opportunity, identify revenue challenges, and make a more informed decision.",
    iconName: "HelpCircle"
  },
  {
    id: "structure",
    situation: "When your sales process needs structure",
    recommendedModel: "Consulting Services",
    modelId: "consulting-services",
    rationale: "Build the strategy, frameworks, and processes your team needs to execute consistently.",
    iconName: "Sliders"
  },
  {
    id: "proof",
    situation: "When you need proof before investing",
    recommendedModel: "Proof of Value & Proof of Performance",
    modelId: "proof-of-value-performance",
    rationale: "Test the approach against a defined baseline before committing to broader implementation.",
    iconName: "Sparkles"
  },
  {
    id: "rebuild",
    situation: "When your revenue systems need a major rebuild",
    recommendedModel: "Transformation Engagements",
    modelId: "transformation-engagements",
    rationale: "Coordinate strategy, processes, technology, and team adoption across the organization.",
    iconName: "Layers"
  },
  {
    id: "performance",
    situation: "When performance is the priority",
    recommendedModel: "Outcome-Based Engagement",
    modelId: "outcome-based-engagement",
    rationale: "Align part of the commercial arrangement with predefined and verified business measures.",
    iconName: "TrendingUp"
  },
  {
    id: "commitment",
    situation: "When the opportunity requires shared commitment",
    recommendedModel: "Joint Risk-Sharing",
    modelId: "joint-risk-sharing",
    rationale: "Establish a strategic partnership with agreed investment, responsibilities, and economics.",
    iconName: "Users"
  },
  {
    id: "embedded",
    situation: "When you need embedded expertise",
    recommendedModel: "Resident Growth Architects",
    modelId: "resident-growth-architects",
    rationale: "Work alongside a specialist who can own a workstream and develop your team's capabilities.",
    iconName: "UserCheck"
  },
  {
    id: "execution",
    situation: "When you need immediate market-facing execution",
    recommendedModel: "Forward-Deployed Sales Accelerators",
    modelId: "forward-deployed-sales-accelerators",
    rationale: "Support live prospecting, pipeline generation, and deal progression.",
    iconName: "Zap"
  }
];

// ── 3. Engagement Journeys ──
export const engagementJourneys: EngagementJourneyItem[] = [
  {
    id: "j1",
    number: "01",
    name: "Prove Before You Scale",
    steps: [
      "Advisory & Insight",
      "Proof of Value",
      "Transformation",
      "Outcome-Based Engagement"
    ],
    description: "Clarify the business challenge, test the proposed solution, implement what works, and measure performance against agreed outcomes.",
    bestFor: "Businesses that need evidence before committing to a larger initiative."
  },
  {
    id: "j2",
    number: "02",
    name: "Speed First",
    steps: [
      "Forward-Deployed Sales Accelerators",
      "Consulting Services",
      "Resident Growth Architects"
    ],
    description: "Address urgent pipeline needs while designing better processes and building the internal capabilities required for sustained execution.",
    bestFor: "Pipeline shortages, new market entry, and sales execution challenges."
  },
  {
    id: "j3",
    number: "03",
    name: "Strategic Growth Partnership",
    steps: [
      "Consulting Services",
      "Proof of Performance",
      "Joint Risk-Sharing"
    ],
    description: "Develop the strategy, validate performance, and establish a longer-term partnership when the business case supports shared investment.",
    bestFor: "New categories, product launches, and strategic market development."
  },
  {
    id: "j4",
    number: "04",
    name: "Build Internal Capability",
    steps: [
      "Consulting Services",
      "Resident Growth Architects",
      "Ongoing Advisory"
    ],
    description: "Design the operating approach, execute alongside your team, and continue with strategic guidance as internal capabilities mature.",
    bestFor: "Businesses that want to build expertise they can sustain independently."
  },
  {
    id: "j5",
    number: "05",
    name: "Transformation with Performance Alignment",
    steps: [
      "Advisory & Insight",
      "Transformation",
      "Outcome-Based Engagement",
      "Optional Joint Risk-Sharing"
    ],
    description: "Establish direction, strengthen the revenue operating model, measure progress, and consider a shared-economics partnership when appropriate.",
    bestFor: "Organizations pursuing major growth and operating-model improvements."
  }
];

// ── 4. Commercial Approach Models ──
export const commercialModels: CommercialModelItem[] = [
  {
    title: "Fixed-fee and retainer engagements",
    description: "Suitable for defined advisory work, consulting projects, and ongoing strategic support."
  },
  {
    title: "Milestone-based engagements",
    description: "Payments are linked to agreed phases and delivery checkpoints."
  },
  {
    title: "Proof-based engagements",
    description: "Focused experiments use predefined success criteria and decision gates. Where agreed, fees may be credited toward a subsequent engagement."
  },
  {
    title: "Performance-based engagements",
    description: "A base fee and variable component may be linked to agreed and verified performance measures."
  },
  {
    title: "Embedded and deployment engagements",
    description: "Monthly or deployment-based commercial arrangements support embedded specialists and market-facing execution."
  },
  {
    title: "Joint risk-sharing engagements",
    description: "Co-investment and shared economic terms are established for strategic partnerships."
  }
];

// ── 5. Standard Commitments ──
export const standardCommitments = [
  {
    title: "Defined scope",
    desc: "Responsibilities and deliverables are documented before work begins."
  },
  {
    title: "Agreed measurements",
    desc: "Baselines, performance indicators, and attribution rules are established in advance when relevant."
  },
  {
    title: "Data readiness",
    desc: "Required system access, data quality, and client-side support are identified."
  },
  {
    title: "Clear decision points",
    desc: "Appropriate reviews determine whether to continue, refine, scale, transfer, or exit."
  },
  {
    title: "Capability transfer",
    desc: "Relevant documentation, playbooks, and enablement materials are handed over according to the engagement agreement."
  }
];

// ── 6. How an Engagement Begins ──
export const onboardingSteps: OnboardingStepItem[] = [
  {
    step: "Step 01",
    title: "Fit & Frame",
    description: "We discuss your business situation, product or service line, current growth stage, and primary revenue challenge."
  },
  {
    step: "Step 02",
    title: "Select the Model",
    description: "We identify a suitable engagement model and delivery track based on your goals, urgency, internal capabilities, and risk profile."
  },
  {
    step: "Step 03",
    title: "Define Success",
    description: "Where measurement is required, we establish the baseline, success criteria, data requirements, and attribution rules."
  },
  {
    step: "Step 04",
    title: "Confirm the Engagement Charter",
    description: "We document the scope, responsibilities, milestones, commercial terms, and review or exit conditions before delivery begins."
  },
  {
    step: "Step 05",
    title: "Launch & Collaborate",
    description: "The appropriate team is assigned, working sessions are scheduled, and delivery begins with an agreed communication cadence."
  },
  {
    step: "Step 06",
    title: "Review & Decide",
    description: "Progress is assessed against the agreed objectives. Together, we determine whether to scale, refine, transfer capability, or conclude the engagement."
  }
];

// ── 7. Frequently Asked Questions ──
export const engagementFaqs: EngagementFaqItem[] = [
  {
    question: "Can we start small and expand later?",
    answer: "Yes. You can begin with advisory, consulting, or a focused proof engagement and expand when the evidence and business requirements support the next step. Any fee credit is subject to the agreed commercial terms."
  },
  {
    question: "How is performance verified?",
    answer: "The measurement method, baseline, time period, and attribution rules are defined in advance. Verification depends on the selected metrics and the availability of reliable data."
  },
  {
    question: "What happens if our CRM or data is not ready?",
    answer: "We first assess data readiness and access requirements. If reliable performance measurement is not possible, the initial work may focus on diagnostics, measurement setup, or improving data readiness."
  },
  {
    question: "Do you replace our sales team?",
    answer: "Our models are designed to support and strengthen revenue execution. Depending on the engagement, we may advise your team, design systems, work alongside employees, or execute specific sales activities."
  },
  {
    question: "Does this apply to businesses outside SaaS?",
    answer: "Yes. The approach can be adapted to services companies, retail and commerce businesses, platform companies, and other organizations with sales, revenue, demand, or go-to-market challenges."
  },
  {
    question: "How quickly can an engagement start?",
    answer: "The start date depends on scope, team availability, access requirements, and business readiness. A focused advisory engagement may require less setup than a multi-workstream transformation."
  },
  {
    question: "What is the smallest engagement available?",
    answer: "A focused advisory sprint or a clearly scoped proof engagement may be a suitable starting point. The scope and commercial terms depend on the business question and the evidence required."
  }
];
