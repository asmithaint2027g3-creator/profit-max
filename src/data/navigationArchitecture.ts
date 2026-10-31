import {
  Search, Zap, TrendingUp, Gauge, Workflow, HeartPulse, Eye, ShieldCheck,
  Target, ShoppingBag, Building2, Rocket, Layers, Activity, Server, Cpu,
  BarChart3, LineChart, Globe, DollarSign, Users, Scale, Sliders, Box,
  Sparkles, RefreshCw, UserCheck, HeartHandshake, GitMerge, Lock, Radar
} from 'lucide-react';

export interface OfferingCapabilityItem {
  title: string;
  outcome: string;
  path: string;
  icon: any;
  tag: string;
}

export interface OfferingCategoryDetail {
  id: string;
  title: string;
  path: string;
  recommendedIndustries: string[];
  keyRevenueOutcome: string;
  businessImpacts: string[];
  capabilities: OfferingCapabilityItem[];
}

export interface IndustryCapabilityItem {
  title: string;
  outcome: string;
  path: string;
  icon: any;
  tag: string;
}

export interface IndustryCategoryDetail {
  id: string;
  title: string;
  path: string;
  desc: string;
  badge: string;
  icon: any;
  recommendedAudience: string[];
  keyRevenueOutcome: string;
  businessImpacts: string[];
  capabilities: IndustryCapabilityItem[];
}

// ── 8 COMPLETE OFFERING ARCHITECTURES (10 CAPABILITIES EACH) ──
export const offeringsArchitecture: OfferingCategoryDetail[] = [
  // 01. Profit Pool Discovery
  {
    id: 'profit-pool-discovery',
    title: 'Profit Pool Discovery',
    path: '/offerings/profit-pool-discovery',
    recommendedIndustries: ['Enterprise SaaS', 'BFSI', 'Healthcare'],
    keyRevenueOutcome: '+18% - 32% Margin Expansion',
    businessImpacts: [
      'Identified Margin Leakage',
      'Willingness-to-Pay Realization',
      'Defensible Competitive Moats'
    ],
    capabilities: [
      { title: 'Market Discovery & Whitespace TAM', outcome: 'Reveal underserved markets and dark-funnel surge signals across whitespace TAM.', path: '/offerings/profit-pool-discovery#market-whitespace', icon: Globe, tag: 'WHITESPACE' },
      { title: 'Demand Discovery & Dark-Funnel Intent', outcome: 'Capture unbranded search surges, tech evaluation queries, and dark-funnel buying signals.', path: '/offerings/profit-pool-discovery#demand-intent', icon: Radar, tag: 'INTENT' },
      { title: 'Customer & ICP Discovery', outcome: 'Identify top customer cohorts generating 80% of net margin and target high-fit accounts.', path: '/offerings/profit-pool-discovery#customer-icp', icon: Users, tag: 'ICP' },
      { title: 'Competitive Intelligence & Forensics', outcome: 'Deal-by-deal win/loss forensics, pricing vulnerabilities, and displacement windows.', path: '/offerings/profit-pool-discovery#competitive', icon: ShieldCheck, tag: 'COMPETITIVE' },
      { title: 'Pricing & Value Discovery', outcome: 'Conjoint willingness-to-pay studies, price elasticity curves, and value metric alignment.', path: '/offerings/profit-pool-discovery#value-roi', icon: DollarSign, tag: 'PRICING' },
      { title: 'Product-Market Fit & Resonance', outcome: 'Telemetry-based feature adoption analysis, retention curves, and commercial validation.', path: '/offerings/profit-pool-discovery#pmf', icon: Target, tag: 'PMF' },
      { title: 'Margin Leakage Diagnostics', outcome: 'Audit discretionary discounting, off-grid concessions, and high-maintenance accounts.', path: '/offerings/profit-pool-discovery#margin-leak', icon: Scale, tag: 'MARGIN' },
      { title: 'Expansion Pool Discovery', outcome: 'Account whitespace identification, cross-sell propensity scoring, and division penetration.', path: '/offerings/profit-pool-discovery#expansion-matrix', icon: TrendingUp, tag: 'EXPANSION' },
      { title: 'Channel & Partner Discovery', outcome: 'High-leverage co-selling corridors, ecosystem integration paths, and partner economics.', path: '/offerings/profit-pool-discovery#channel-synergy', icon: GitMerge, tag: 'PARTNER' },
      { title: 'Executive Synthesis & Board Roadmap', outcome: 'Prioritized revenue transformation roadmap with board-ready financial projections.', path: '/offerings/profit-pool-discovery#executive-synthesis', icon: BarChart3, tag: 'SYNTHESIS' }
    ]
  },

  // 02. Demand Engineering
  {
    id: 'demand-engineering',
    title: 'Demand Engineering',
    path: '/offerings/demand-engineering',
    recommendedIndustries: ['B2B Tech', 'Manufacturing', 'Global Enterprise'],
    keyRevenueOutcome: '3.4x Qualified Pipeline Velocity',
    businessImpacts: [
      'Accelerated Inbound Velocity',
      'Lower Customer Acquisition Cost',
      'Predictable Pipeline Generation'
    ],
    capabilities: [
      { title: 'Ideal Customer Modeling & Propensity', outcome: 'Multi-variable propensity modeling scoring high-fit accounts ready to purchase.', path: '/offerings/demand-engineering#icp-modeling', icon: Target, tag: 'PROPENSITY' },
      { title: 'Multi-Signal Intent Engine', outcome: 'Unified ingestion of dark-funnel, job changers, technographic shifts, and review activity.', path: '/offerings/demand-engineering#intent-fusion', icon: Radar, tag: 'INTENT' },
      { title: 'Dark Funnel Attribution & Ingestion', outcome: 'Deanonymize anonymous website traffic and map early committee research spikes.', path: '/offerings/demand-engineering#dark-funnel', icon: Eye, tag: 'DEANONYMIZE' },
      { title: 'Account-Based Marketing Orchestration', outcome: 'Synchronized dynamic ad spend, personalized landing pages, and sales touchpoints.', path: '/offerings/demand-engineering#abm-orchestration', icon: Layers, tag: 'ABM' },
      { title: 'Autonomous Inbound Qualification', outcome: 'Instant inbound response, conversational qualification, and calendar synchronization.', path: '/offerings/demand-engineering#inbound-acceleration', icon: Zap, tag: 'SPEED-TO-LEAD' },
      { title: 'Autonomous Multi-Channel Outbound Mesh', outcome: 'Personalized multi-threading emails, social touchpoints, and research dossiers.', path: '/offerings/demand-engineering#outbound-mesh', icon: Cpu, tag: 'OUTBOUND' },
      { title: 'Dynamic Content Personalization', outcome: 'Real-time account-specific whitepapers, ROI business cases, and competitor battlecards.', path: '/offerings/demand-engineering#content-intelligence', icon: Sparkles, tag: 'CONTENT' },
      { title: 'Pipeline Funnel Conversion Diagnostics', outcome: 'Continuous funnel velocity monitoring isolating stage drop-offs and leak points.', path: '/offerings/demand-engineering#conversion-optimization', icon: Sliders, tag: 'CONVERSION' },
      { title: 'Multi-Touch Pipeline Attribution', outcome: 'Deterministic and algorithmic attribution assigning exact revenue contribution by channel.', path: '/offerings/demand-engineering#channel-orchestration', icon: GitMerge, tag: 'ATTRIBUTION' },
      { title: 'Pipeline Quality Verification', outcome: 'Tamper-resistant qualification scoring verifying genuine commercial intent before AE handoff.', path: '/offerings/demand-engineering#pipeline-forensics', icon: ShieldCheck, tag: 'VERIFICATION' }
    ]
  },

  // 03. Sales Acceleration
  {
    id: 'sales-acceleration',
    title: 'Sales Acceleration',
    path: '/offerings/sales-acceleration',
    recommendedIndustries: ['Mid-Market', 'Enterprise Software', 'Financial Services'],
    keyRevenueOutcome: '28% Shorter Deal Cycles',
    businessImpacts: [
      'Reduced Deal Slippage',
      'Higher Quota Attainment',
      'Contract Margin Protection'
    ],
    capabilities: [
      { title: 'Bayesian Opportunity Health Scoring', outcome: 'Mathematical win probability and deal slippage warnings based on behavioral cues.', path: '/offerings/sales-acceleration#opportunity-health', icon: Activity, tag: 'HEALTH' },
      { title: 'Buying Committee Consensus Mapping', outcome: 'Identify missing economic buyers, security reviewers, and champion alignment.', path: '/offerings/sales-acceleration#committee-mapping', icon: Users, tag: 'COMMITTEE' },
      { title: 'Real-Time Next-Best-Action Guidance', outcome: 'Contextual recommendations on next actions, case studies, and talk tracks to close.', path: '/offerings/sales-acceleration#deal-guidance', icon: Sparkles, tag: 'GUIDANCE' },
      { title: 'Instant Governed CPQ & Proposals', outcome: 'Automated pricing calculation with margin guardrails and instant proposal delivery.', path: '/offerings/sales-acceleration#cpq-margin', icon: DollarSign, tag: 'CPQ' },
      { title: 'Real-Time Conversation Intelligence', outcome: 'In-call objection cues, competitor counter-arguments, and live transcription assist.', path: '/offerings/sales-acceleration#call-intelligence', icon: Zap, tag: 'CO-PILOT' },
      { title: 'Sales Stage Velocity Optimization', outcome: 'Pinpoint and eliminate stage delays between demo, proposal, and security clearance.', path: '/offerings/sales-acceleration#velocity-compression', icon: TrendingUp, tag: 'VELOCITY' },
      { title: 'Autonomous Rep Admin Relief & CRM Sync', outcome: 'Automate post-call notes, CRM field updates, and follow-up emails for reps.', path: '/offerings/sales-acceleration#rep-enablement', icon: UserCheck, tag: 'ADMIN RELIEF' },
      { title: 'Automated Competitor Counter-Tactics', outcome: 'Dynamic battlecards injected into deal workflows when competitor mentions emerge.', path: '/offerings/sales-acceleration#competitive-counter', icon: ShieldCheck, tag: 'BATTLECARDS' },
      { title: 'Executive Value Case & ROI Quantifier', outcome: 'CFO-ready business cases detailing cash-flow impact, payback period, and IRR.', path: '/offerings/sales-acceleration#cfo-business-case', icon: BarChart3, tag: 'ROI CASE' },
      { title: 'Closing Acceleration & Redline Defense', outcome: 'Procurement redline classifier and legal clause defense playbooks that shorten contracting.', path: '/offerings/sales-acceleration#contract-closing', icon: Scale, tag: 'CLOSING' }
    ]
  },

  // 04. Revenue Operations
  {
    id: 'revenue-operations',
    title: 'Revenue Operations',
    path: '/offerings/revenue-operations',
    recommendedIndustries: ['Enterprise SaaS', 'High-Growth Tech', 'Multi-Division Enterprise'],
    keyRevenueOutcome: '98% Forecast Precision · <2% Variance',
    businessImpacts: [
      'Unified Data Hygiene',
      'Zero Handoff Drag',
      'Automated SLA Enforcement'
    ],
    capabilities: [
      { title: 'Unified Customer Data Fabric', outcome: 'Zero-silo synchronization across CRM, billing, marketing, and customer telemetry.', path: '/offerings/revenue-operations#unified-data', icon: Server, tag: 'DATA FABRIC' },
      { title: 'Full-Lifecycle Revenue Process Automation', outcome: 'Automate lead-to-opportunity handoffs, billing events, and onboarding triggers.', path: '/offerings/revenue-operations#process-automation', icon: Workflow, tag: 'AUTOMATION' },
      { title: 'Deterministic Pipeline Forecasting', outcome: 'Econometric forecast models delivering board-level accuracy with <2% variance.', path: '/offerings/revenue-operations#forecasting-engine', icon: LineChart, tag: 'FORECASTING' },
      { title: 'Dynamic Territory & Capacity Design', outcome: 'Algorithmic territory balancing based on real TAM propensity and rep capacity.', path: '/offerings/revenue-operations#territory-capacity', icon: Globe, tag: 'TERRITORIES' },
      { title: 'Multi-Touch Algorithmic Attribution', outcome: 'Mathematically sound attribution revealing true marketing and sales ROI contribution.', path: '/offerings/revenue-operations#attribution-telemetry', icon: GitMerge, tag: 'ATTRIBUTION' },
      { title: 'Automated Handoff SLAs & Bottleneck Alarms', outcome: 'Real-time alerting when deals or inquiries breach response-time thresholds.', path: '/offerings/revenue-operations#sla-enforcement', icon: Gauge, tag: 'SLAS' },
      { title: 'GTM Tech Stack Rationalization', outcome: 'Audit duplicate software licenses, unused features, and integration bottlenecks.', path: '/offerings/revenue-operations#stack-rationalization', icon: Box, tag: 'STACK AUDIT' },
      { title: 'Compensation & Quota Alignment', outcome: 'Align incentive models with gross margin and long-term customer retention metrics.', path: '/offerings/revenue-operations#incentive-design', icon: DollarSign, tag: 'INCENTIVES' },
      { title: 'Revenue Compliance & Billing Sentinels', outcome: 'Automate revenue recognition, ASC 606 compliance, and invoice verification.', path: '/offerings/revenue-operations#compliance-guard', icon: ShieldCheck, tag: 'COMPLIANCE' },
      { title: 'Executive Board Revenue HUD', outcome: 'Real-time telemetry command console for CROs, CFOs, and board oversight.', path: '/offerings/revenue-operations#executive-hud', icon: BarChart3, tag: 'BOARD HUD' }
    ]
  },

  // 05. GTM Transformation
  {
    id: 'gtm-transformation',
    title: 'GTM Transformation',
    path: '/offerings/gtm-transformation',
    recommendedIndustries: ['PE-Backed Scaleups', 'Global 2000', 'Modernizing Enterprise'],
    keyRevenueOutcome: '-40% Sales Cycle Duration',
    businessImpacts: [
      'Unified GTM Blueprint',
      'Removed Cross-Functional Drag',
      'Accelerated Field Adoption'
    ],
    capabilities: [
      { title: 'Autonomous GTM Operating Model', outcome: 'Architect modern revenue operating models replacing outdated functional silos.', path: '/offerings/gtm-transformation#operating-model', icon: Workflow, tag: 'OPERATING MODEL' },
      { title: 'Route-to-Market Strategy & Alignment', outcome: 'Optimize direct, partner, digital self-serve, and hybrid sales channels.', path: '/offerings/gtm-transformation#route-optimization', icon: Compass, tag: 'ROUTES' },
      { title: 'Multi-Product & Cross-Division Orchestration', outcome: 'Harmonize multi-product sales motions to prevent customer confusion and rep conflict.', path: '/offerings/gtm-transformation#multi-product-scaling', icon: Layers, tag: 'MULTI-PRODUCT' },
      { title: 'Enterprise Field Adoption Acceleration', outcome: 'Proven change management frameworks that secure 95%+ rep adoption of new systems.', path: '/offerings/gtm-transformation#change-enablement', icon: UserCheck, tag: 'ADOPTION' },
      { title: 'Revenue Governance & Commercial Rhythms', outcome: 'Establish high-accountability weekly, monthly, and quarterly commercial operating cadences.', path: '/offerings/gtm-transformation#commercial-cadence', icon: Activity, tag: 'CADENCE' },
      { title: 'Cross-Functional Latency Elimination', outcome: 'Remove operational friction between product, marketing, sales, legal, and finance.', path: '/offerings/gtm-transformation#friction-reduction', icon: Zap, tag: 'VELOCITY' },
      { title: 'Partner & Channel Ecosystem Overhaul', outcome: 'Transform passive reseller networks into active, high-yield co-selling partners.', path: '/offerings/gtm-transformation#partner-ecosystem', icon: GitMerge, tag: 'ECOSYSTEM' },
      { title: 'Territory Expansion & Sovereign Localization', outcome: 'Scalable frameworks for entering new geographic regions with full compliance.', path: '/offerings/gtm-transformation#global-localization', icon: Globe, tag: 'EXPANSION' },
      { title: 'Distressed GTM Remediation', outcome: 'Rapid intervention protocols to turnaround underperforming territories or product lines.', path: '/offerings/gtm-transformation#economic-turnaround', icon: TrendingUp, tag: 'TURNAROUND' },
      { title: 'Board & Investor Transparency Reporting', outcome: 'Institutional investor reporting frameworks ensuring reliable board visibility.', path: '/offerings/gtm-transformation#board-reporting', icon: BarChart3, tag: 'TRANSPARENCY' }
    ]
  },

  // 06. Customer Success & Retention
  {
    id: 'customer-success',
    title: 'Customer Success & Retention',
    path: '/offerings/customer-success',
    recommendedIndustries: ['Subscription SaaS', 'Cloud Infrastructure', 'Enterprise Platforms'],
    keyRevenueOutcome: '118% - 134% Net Revenue Retention (NRR)',
    businessImpacts: [
      'Compounded Customer LTV',
      'Automated Churn Mitigation',
      'Predictable Renewal Stream'
    ],
    capabilities: [
      { title: 'Predictive Behavioral Churn Detection', outcome: 'Algorithmic sentinels detecting early account decay 90 days before renewal risks.', path: '/offerings/customer-success#churn-sentry', icon: HeartPulse, tag: 'CHURN SENTRY' },
      { title: 'Multi-Dimensional Health Synthesizer', outcome: 'Composite account health scores integrating telemetry, support sentiment, and NPS.', path: '/offerings/customer-success#health-scoring', icon: Activity, tag: 'HEALTH SCORE' },
      { title: 'Account Expansion & Saturation Alerts', outcome: 'Automated signals identifying accounts approaching capacity limits ready for upgrades.', path: '/offerings/customer-success#expansion-engine', icon: Rocket, tag: 'EXPANSION' },
      { title: 'Product Adoption & Telemetry Tracking', outcome: 'Deep feature telemetry tracking whether customers are realizing intended ROI.', path: '/offerings/customer-success#adoption-telemetry', icon: Eye, tag: 'ADOPTION' },
      { title: 'Governed Renewal Orchestration', outcome: 'Automated renewal timelines with pre-approved price lift indexing and term governance.', path: '/offerings/customer-success#renewal-automation', icon: RefreshCw, tag: 'RENEWALS' },
      { title: 'Cross-Sell & Multi-Product Propensity', outcome: 'Machine-learning recommendations matching accounts to complementary product lines.', path: '/offerings/customer-success#cross-sell-intelligence', icon: Sparkles, tag: 'CROSS-SELL' },
      { title: 'Time-to-Value Onboarding Acceleration', outcome: 'Automated onboarding playbooks compressing customer time-to-first-value by 40%.', path: '/offerings/customer-success#onboarding-velocity', icon: Zap, tag: 'ONBOARDING' },
      { title: 'Automated Board-Ready QBR Generation', outcome: 'Generate data-backed customer business reviews highlighting delivered ROI in minutes.', path: '/offerings/customer-success#executive-qbr', icon: BarChart3, tag: 'QBR AUTOMATION' },
      { title: 'Customer Advocacy & Referral Loops', outcome: 'Identify enterprise champions ready to serve as case study references or advisory members.', path: '/offerings/customer-success#advocacy-loop', icon: HeartHandshake, tag: 'ADVOCACY' },
      { title: 'Cohort NRR Compounding Architecture', outcome: 'Systematic revenue workflows engineered to compound Net Retention past 125%.', path: '/offerings/customer-success#nrr-compounding', icon: TrendingUp, tag: 'NRR ENGINE' }
    ]
  },

  // 07. Growth Intelligence
  {
    id: 'growth-intelligence',
    title: 'Growth Intelligence',
    path: '/offerings/growth-intelligence',
    recommendedIndustries: ['Corporate Strategy', 'High-Growth Tech', 'Private Equity Portcos'],
    keyRevenueOutcome: '+15% Net Price Realization',
    businessImpacts: [
      'Empirical Pricing Power',
      'Unbiased Loss Forensic Audits',
      'Capital-Efficient Growth'
    ],
    capabilities: [
      { title: 'Conjoint Analysis & WTP Measurement', outcome: 'Discrete choice experiments measuring exactly what buyers will pay for feature bundles.', path: '/offerings/growth-intelligence#conjoint-pricing', icon: DollarSign, tag: 'WTP RESEARCH' },
      { title: 'Empirical Deal Loss Autopsies', outcome: 'Objective third-party interviews uncovering the real, unvarnished reasons deals are lost.', path: '/offerings/growth-intelligence#loss-autopsies', icon: Eye, tag: 'LOSS AUTOPSIES' },
      { title: 'Micro-Segment TAM Sizing', outcome: 'Granular sizing of high-margin market micro-segments to direct product and sales focus.', path: '/offerings/growth-intelligence#tam-microsegmentation', icon: Globe, tag: 'TAM SIZING' },
      { title: 'Algorithmic Competitor Feature & Pricing Audit', outcome: 'Continuous scanning of rival price changes, packaging shifts, and feature releases.', path: '/offerings/growth-intelligence#competitor-benchmarking', icon: ShieldCheck, tag: 'BENCHMARK' },
      { title: 'Direct Primary Buyer Voice Forensics', outcome: 'Synthesized qualitative and quantitative buyer perception audits across key ICPs.', path: '/offerings/growth-intelligence#voice-of-market', icon: Users, tag: 'BUYER VOICE' },
      { title: 'Product Packaging & Tiering Optimization', outcome: 'Restructure pricing tiers and feature gates to eliminate unmonetized value leakage.', path: '/offerings/growth-intelligence#packaging-optimization', icon: Box, tag: 'PACKAGING' },
      { title: 'Discounting Forensics & Floor Guardrails', outcome: 'Eliminate arbitrary discounting habits and establish enforced margin floors.', path: '/offerings/growth-intelligence#discount-discipline', icon: Scale, tag: 'DISCOUNTING' },
      { title: 'Gross Margin & Cost-to-Serve Optimization', outcome: 'Pinpoint accounts where custom engineering and heavy support destroy profitability.', path: '/offerings/growth-intelligence#margin-expansion', icon: TrendingUp, tag: 'MARGINS' },
      { title: 'Macroeconomic & Sector Headwind Sensitivity', outcome: 'Scenario modeling identifying how interest rate or regulatory shifts impact pipeline.', path: '/offerings/growth-intelligence#macro-hedging', icon: Activity, tag: 'HEDGING' },
      { title: 'Rule of 40 & Capital Efficiency Acceleration', outcome: 'Financial and operational models driving durable, efficient revenue expansion.', path: '/offerings/growth-intelligence#capital-efficiency', icon: BarChart3, tag: 'RULE OF 40' }
    ]
  },

  // 08. AI Trust & Governance
  {
    id: 'ai-trust-governance',
    title: 'AI Trust & Governance',
    path: '/offerings/ai-trust-governance',
    recommendedIndustries: ['BFSI', 'Healthcare & Life Sciences', 'Regulated Enterprise'],
    keyRevenueOutcome: '100% Sovereign Data Compliance',
    businessImpacts: [
      'Eliminated Regulatory Exposure',
      'Zero Data Leakage',
      'Board-Level AI Verification'
    ],
    capabilities: [
      { title: 'Autonomous Agent Policy Guardrails', outcome: 'Role-based permission boundaries and behavioral guardrails for autonomous sales agents.', path: '/offerings/ai-trust-governance#agent-guardrails', icon: ShieldCheck, tag: 'GUARDRAILS' },
      { title: 'Deterministic Decision Logging & Audits', outcome: 'Tamper-resistant audit trails capturing the exact inputs, weights, and model outputs.', path: '/offerings/ai-trust-governance#audit-trail', icon: Server, tag: 'AUDIT LOGS' },
      { title: 'Algorithmic Fairness & Model Drift Sentry', outcome: 'Continuous real-time telemetry monitoring model accuracy and output distribution.', path: '/offerings/ai-trust-governance#bias-monitoring', icon: Activity, tag: 'DRIFT SENTRY' },
      { title: 'EU AI Act & Global Regulatory Compliance', outcome: 'Complete alignment with EU AI Act (Risk Tier 2/3), ISO 42001, and FTC mandates.', path: '/offerings/ai-trust-governance#eu-ai-act', icon: Scale, tag: 'EU AI ACT' },
      { title: 'Enterprise Data Sovereignty & Zero-Retention', outcome: 'Zero-retention architecture ensuring customer data is never used to train public LLMs.', path: '/offerings/ai-trust-governance#data-sovereignty', icon: Lock, tag: 'SOVEREIGNTY' },
      { title: 'Human-in-the-Loop Approval Orchestration', outcome: 'Dynamic thresholds routing high-value proposals and sensitive outreach for human sign-off.', path: '/offerings/ai-trust-governance#human-in-loop', icon: UserCheck, tag: 'HUMAN REVIEW' },
      { title: 'Adversarial Prompt Defense & Shields', outcome: 'Hardened prompt injection defenses preventing model jailbreaks and sensitive data leaks.', path: '/offerings/ai-trust-governance#adversarial-defense', icon: Shield, tag: 'SECURITY' },
      { title: 'Multi-LLM Sovereign Model Routing', outcome: 'Intelligent routing between private, open-source, and cloud models based on compliance.', path: '/offerings/ai-trust-governance#model-orchestration', icon: Cpu, tag: 'LLM ROUTING' },
      { title: 'Board & Audit Committee Transparency Reports', outcome: 'Comprehensive executive reports certifying AI system integrity and risk mitigation.', path: '/offerings/ai-trust-governance#board-compliance', icon: BarChart3, tag: 'BOARD AUDIT' },
      { title: 'Proprietary IP & Model Weights Isolation', outcome: 'Complete client ownership and private repository hosting for all fine-tuned agent weights.', path: '/offerings/ai-trust-governance#ip-protection', icon: Box, tag: 'IP ISOLATION' }
    ]
  }
];

// ── 6 COMPLETE INDUSTRY ARCHITECTURES (10 CAPABILITIES EACH) ──
export const industriesArchitecture: IndustryCategoryDetail[] = [
  // 01. B2B Focus
  {
    id: 'b2b',
    title: 'B2B Enterprise & Mid-Market',
    path: '/industries/b2b',
    desc: 'Target account penetration, competitor displacement, autonomous SDRs, and mathematical forecasting.',
    badge: 'Pipeline Generation',
    icon: Target,
    recommendedAudience: ['B2B Tech', 'Industrial Services', 'Corporate Advisory'],
    keyRevenueOutcome: '3.4x Pipeline Velocity Lift',
    businessImpacts: ['Unified Account Intent', 'Autonomous Outreach', 'Zero Rep Admin Drag'],
    capabilities: [
      { title: 'AI ABM Autopilot', outcome: 'Synchronize target account ads, personalized landing pages, and SDR outreach.', path: '/industries/b2b#abm', icon: Target, tag: 'ABM' },
      { title: 'AI Competitor Displacement Engine', outcome: 'Detect competitor migration signals and intercept contract renewal windows.', path: '/industries/b2b#competitor', icon: ShieldCheck, tag: 'DISPLACEMENT' },
      { title: 'AI SDR Co-Pilot / Autopilot', outcome: 'Autonomous outbound assistant drafting personalized emails and booking meetings.', path: '/industries/b2b#sdr', icon: Cpu, tag: 'SDR FLEET' },
      { title: 'AI Revenue Qualified Lead Predictor', outcome: 'Replace gut feelings with mathematical deal scoring and stage close probabilities.', path: '/industries/b2b#rql', icon: BarChart3, tag: 'SCORING' },
      { title: 'AI Expansion Opportunity Finder', outcome: 'Monitor customer usage trends to trigger automated seat and tier expansion.', path: '/industries/b2b#expansion', icon: TrendingUp, tag: 'EXPANSION' },
      { title: 'Buying Committee Consensus Mapping', outcome: 'Identify unengaged stakeholders across technical, financial, and executive tiers.', path: '/industries/b2b#buying-committee', icon: Users, tag: 'COMMITTEE' },
      { title: 'Deal Velocity & Stall Recovery', outcome: 'Automated re-engagement playbooks when enterprise deals exceed standard stage latency.', path: '/industries/b2b#deal-velocity', icon: Zap, tag: 'VELOCITY' },
      { title: 'Real-Time Inbound Routing & Speed-to-Lead', outcome: 'Sub-second qualification and instant routing to appropriate account executives.', path: '/industries/b2b#lead-routing', icon: Activity, tag: 'ROUTING' },
      { title: 'Discretionary Discount Guardrails', outcome: 'Algorithmic margin floors preventing unearned sales discounting during closing.', path: '/industries/b2b#pricing-guardrails', icon: DollarSign, tag: 'MARGINS' },
      { title: 'Forecast Precision & Close Probability', outcome: 'Econometric pipeline modeling providing <2% variance board revenue projections.', path: '/industries/b2b#forecast-precision', icon: LineChart, tag: 'FORECAST' }
    ]
  },

  // 02. B2C Focus
  {
    id: 'b2c',
    title: 'B2C & Consumer Scale',
    path: '/industries/b2c',
    desc: 'High-propensity consumer intent capture, 1:1 personalized offers, and checkout recovery.',
    badge: 'Consumer Growth',
    icon: ShoppingBag,
    recommendedAudience: ['Consumer Brands', 'E-Commerce', 'Subscription D2C'],
    keyRevenueOutcome: '+42% Customer Lifetime Value',
    businessImpacts: ['Multi-Channel Ad Sync', 'Abandoned Cart Recovery', 'Dynamic Personalization'],
    capabilities: [
      { title: 'Omnichannel Consumer Lead Gen', outcome: 'Multi-channel acquisition campaigns dynamically rebalancing budget by channel ROAS.', path: '/industries/b2c#omnichannel-gen', icon: BarChart3, tag: 'ACQUISITION' },
      { title: 'Algorithmic Lookalike Auto-Scaling', outcome: 'Replicate top 10% highest margin customer cohorts across digital ad networks.', path: '/industries/b2c#lookalike-scale', icon: Users, tag: 'LOOKALIKE' },
      { title: '1:1 Dynamic Offer Personalization', outcome: 'Trigger personalized promotions in real time without eroding brand margin.', path: '/industries/b2c#dynamic-offers', icon: Sparkles, tag: 'OFFERS' },
      { title: 'Abandoned Cart & Checkout Recovery', outcome: 'Automated SMS, push, and email sequences deployed within minutes of drop-off.', path: '/industries/b2c#cart-recovery', icon: RefreshCw, tag: 'RECOVERY' },
      { title: 'Predictive CLV Optimization', outcome: 'Target acquisition spend specifically toward audiences with high repeat-purchase odds.', path: '/industries/b2c#clv-predict', icon: DollarSign, tag: 'CLV' },
      { title: 'Pre-Churn Behavioral Sentinels', outcome: 'Detect cooling engagement patterns and trigger automated retention offers.', path: '/industries/b2c#churn-defense', icon: HeartPulse, tag: 'RETENTION' },
      { title: 'Automated Social Proof Amplification', outcome: 'Surface verified user reviews and testimonials dynamically based on browsed SKUs.', path: '/industries/b2c#review-amplification', icon: HeartHandshake, tag: 'REVIEWS' },
      { title: 'Algorithmic Price Elasticity Engine', outcome: 'Test price points and discount depth to maximize net margin per transaction.', path: '/industries/b2c#price-elasticity', icon: Scale, tag: 'ELASTICITY' },
      { title: 'Autonomous Cross-Category Mesh', outcome: 'Context-aware cross-sell modules driving multi-item baskets at checkout.', path: '/industries/b2c#cross-sell-mesh', icon: ShoppingBag, tag: 'CROSS-SELL' },
      { title: 'Full-Funnel Consumer Attribution', outcome: 'Unified multi-touch attribution connecting ad spend directly to repeat cash receipts.', path: '/industries/b2c#attribution-loop', icon: GitMerge, tag: 'ATTRIBUTION' }
    ]
  },

  // 03. Enterprise Focus
  {
    id: 'enterprise',
    title: 'Global Enterprise Scale',
    path: '/industries/enterprise',
    desc: 'Complex multi-division account planning, corporate hierarchy mapping, and executive engagement.',
    badge: 'Enterprise Architecture',
    icon: Building2,
    recommendedAudience: ['Fortune 1000', 'Global 2000', 'Multi-Subsidiary Enterprise'],
    keyRevenueOutcome: '$12M+ Average Account Expansion',
    businessImpacts: ['Corporate Hierarchy Maps', 'Procurement Acceleration', 'Sovereign Security'],
    capabilities: [
      { title: 'Global Account Penetration', outcome: 'Coordinate account planning across international subsidiaries and business divisions.', path: '/industries/enterprise#account-penetration', icon: Globe, tag: 'PENETRATION' },
      { title: 'Buying Committee Orchestration', outcome: 'Map, track, and systematically build consensus across 15+ corporate stakeholders.', path: '/industries/enterprise#committee-orchestration', icon: Users, tag: 'COMMITTEE' },
      { title: 'Procurement & Legal Acceleration', outcome: 'Categorize redlines, automate standard MSA clauses, and compress legal reviews.', path: '/industries/enterprise#procurement-acceleration', icon: Scale, tag: 'PROCUREMENT' },
      { title: 'Multi-Subsidiary Expansion Engines', outcome: 'Identify cross-selling opportunities into sister subsidiaries and international hubs.', path: '/industries/enterprise#cross-division', icon: Layers, tag: 'CROSS-DIVISION' },
      { title: 'Sovereign Data Compliance & Security', outcome: 'Strict adherence to SOC2 Type II, ISO 27001, and regional data residency mandates.', path: '/industries/enterprise#sovereign-compliance', icon: Lock, tag: 'SOVEREIGNTY' },
      { title: 'Strategic Alliances & Co-Selling', outcome: 'Systematize co-selling rhythms with global cloud platforms, SIs, and advisory firms.', path: '/industries/enterprise#partner-co-selling', icon: GitMerge, tag: 'CO-SELLING' },
      { title: 'Executive Relationship Intelligence', outcome: 'Monitor executive champion movements, promotions, and new leadership hires.', path: '/industries/enterprise#executive-relationship', icon: UserCheck, tag: 'CHAMPIONS' },
      { title: 'Custom Multi-Year CPQ Guardrails', outcome: 'Model multi-year contract discounting, volume ramps, and profit margins safely.', path: '/industries/enterprise#custom-cpq', icon: DollarSign, tag: 'CPQ' },
      { title: 'Global RevOps SLA Orchestration', outcome: 'Unified workflow coordination across North American, EMEA, and APAC field teams.', path: '/industries/enterprise#sla-operations', icon: Workflow, tag: 'GLOBAL REVOPS' },
      { title: 'Board-Level Enterprise Revenue HUD', outcome: 'Consolidated executive cockpit displaying multi-territory revenue health in real time.', path: '/industries/enterprise#board-reporting', icon: BarChart3, tag: 'BOARD HUD' }
    ]
  },

  // 04. Mid-Market Focus
  {
    id: 'midmarket',
    title: 'Mid-Market & Scale-Ups',
    path: '/industries/midmarket',
    desc: 'Rapid market entry, vertical niche domination, lean-team productivity, and CRM automation.',
    badge: 'Velocity & Efficiency',
    icon: Zap,
    recommendedAudience: ['High-Velocity Mid-Market', 'Regional Leaders', 'PE Portcos'],
    keyRevenueOutcome: '15+ Hours Saved per Rep/Week',
    businessImpacts: ['Fast Market Entry', 'Vertical Niche Coverage', 'High CAC Efficiency'],
    capabilities: [
      { title: 'Rapid Market Entry Engine', outcome: 'Deploy targeted vertical messaging vectors in days to establish market presence.', path: '/industries/midmarket#rapid-market-entry', icon: Zap, tag: 'MARKET ENTRY' },
      { title: 'Vertical Niche Domination', outcome: '100% account coverage across specialized regional or industry target segments.', path: '/industries/midmarket#niche-domination', icon: Target, tag: 'NICHE' },
      { title: 'Lean Team Productivity Amplifier', outcome: 'Reclaim 15+ hours per rep per week by automating prospecting and CRM logging.', path: '/industries/midmarket#rep-productivity', icon: UserCheck, tag: 'PRODUCTIVITY' },
      { title: 'Zero-Overhead CRM Automation', outcome: 'Bi-directional CRM enrichment without requiring costly dedicated Salesforce administrators.', path: '/industries/midmarket#crm-orchestration', icon: Server, tag: 'CRM AUTOMATION' },
      { title: 'Sub-Second Inbound Lead Qualification', outcome: 'Instantly qualify web inquiries and route high-potential accounts directly to calendar.', path: '/industries/midmarket#inbound-speed', icon: Activity, tag: 'SPEED-TO-LEAD' },
      { title: 'Mid-Market Deal Stall Forensics', outcome: 'Identify why mid-market proposals stall after the first demo and deploy recovery triggers.', path: '/industries/midmarket#deal-salvage', icon: RefreshCw, tag: 'RECOVERY' },
      { title: 'Customer Acquisition Cost (CAC) Guardrails', outcome: 'Balance outbound prospecting spend to maintain a strict 3:1+ LTV/CAC ratio.', path: '/industries/midmarket#unit-economics', icon: DollarSign, tag: 'CAC AUDIT' },
      { title: 'Autonomous Targeted Outbound Swarms', outcome: 'Deploy high-relevance outbound touches across key buying influencers in the territory.', path: '/industries/midmarket#outbound-swarms', icon: Cpu, tag: 'OUTBOUND' },
      { title: 'Time-to-Value Onboarding Acceleration', outcome: 'Streamline customer implementation to trigger early renewals and positive referrals.', path: '/industries/midmarket#customer-onboarding', icon: HeartHandshake, tag: 'ONBOARDING' },
      { title: 'Predictable Mid-Market Cashflow Forecasting', outcome: 'Data-driven pipeline forecasting preventing surprises at end-of-quarter closes.', path: '/industries/midmarket#growth-forecasting', icon: LineChart, tag: 'FORECAST' }
    ]
  },

  // 05. Startups & Founders Focus
  {
    id: 'startups',
    title: 'Startups & Early Founders',
    path: '/industries/startups',
    desc: 'Zero-to-one customer acquisition, empirical PMF signal detection, and capital-efficient runway extension.',
    badge: 'Capital Efficiency',
    icon: Rocket,
    recommendedAudience: ['Seed-Stage Startups', 'Series A/B Companies', 'Technical Founders'],
    keyRevenueOutcome: '48-Hour Pipeline Launch',
    businessImpacts: ['Empirical PMF Telemetry', 'Founder Calendar Protection', 'Extended Runway'],
    capabilities: [
      { title: 'Zero-to-One Lead Generation', outcome: 'Validate market interest and acquire the first 10-50 paying enterprise customers.', path: '/industries/startups#zero-to-one-leads', icon: Rocket, tag: 'FIRST LEADS' },
      { title: 'Product-Market Fit Signal Detection', outcome: 'Measure cohort retention, usage frequency, and referral velocity for investor proof.', path: '/industries/startups#pmf-detection', icon: BarChart3, tag: 'PMF' },
      { title: 'Founder-Led Sales Automation', outcome: 'Automate prospect research, meeting scheduling, and follow-ups to protect building time.', path: '/industries/startups#founder-sales', icon: Cpu, tag: 'FOUNDER TIME' },
      { title: 'Burn-Rate Optimized Lead Capture', outcome: 'Deploy lean inbound and targeted outbound that preserves precious bank runway.', path: '/industries/startups#burn-optimization', icon: DollarSign, tag: 'RUNWAY' },
      { title: 'Early Adopter Dark-Funnel Intent', outcome: 'Catch engineering and product leaders actively discussing your category problems.', path: '/industries/startups#dark-funnel-capture', icon: Radar, tag: 'DARK INTENT' },
      { title: 'Investor-Grade Revenue Telemetry', outcome: 'Board and VC-ready metrics dashboard tracking CAC payback, burn multiple, and MRR.', path: '/industries/startups#investor-metrics', icon: LineChart, tag: 'INVESTOR HUD' },
      { title: 'Early Willingness-to-Pay Testing', outcome: 'Test pricing models, packaging tiers, and annual upfront incentives safely.', path: '/industries/startups#rapid-pricing', icon: Scale, tag: 'PRICING' },
      { title: 'Self-Serve to Paid Conversion Playbooks', outcome: 'Convert free open-source or product signups into contracted enterprise accounts.', path: '/industries/startups#self-serve-conversion', icon: TrendingUp, tag: 'CONVERSION' },
      { title: 'First Commercial Sales Hire Playbooks', outcome: 'Equip your first account executive hire with proven cadences, scripts, and battlecards.', path: '/industries/startups#first-hire-playbook', icon: UserCheck, tag: 'FIRST HIRES' },
      { title: 'Series A/B Milestone Acceleration', outcome: 'Systematize repeatable pipeline generation to hit the commercial traction targets VCs demand.', path: '/industries/startups#seed-to-series-a', icon: Sparkles, tag: 'MILESTONES' }
    ]
  },

  // 06. SaaS & Subscription Focus
  {
    id: 'saas',
    title: 'SaaS & Digital Subscriptions',
    path: '/industries/saas',
    desc: 'Product-qualified lead scoring, usage-based expansion sentinels, churn defense, and NRR compounding.',
    badge: 'Recurring Revenue',
    icon: Layers,
    recommendedAudience: ['B2B SaaS', 'Cloud Software', 'Product-Led Growth (PLG)'],
    keyRevenueOutcome: '128% Net Revenue Retention (NRR)',
    businessImpacts: ['Product-Led Conversion', 'Automated Churn Mitigation', 'Tier Expansion'],
    capabilities: [
      { title: 'Product-Qualified Lead (PQL) Scoring', outcome: 'Telemetry triggers detecting in-app usage thresholds indicating high sales readiness.', path: '/industries/saas#pql-scoring', icon: Activity, tag: 'PQLS' },
      { title: 'Automated Account Expansion Sentinels', outcome: 'Alert sales reps when customer accounts reach 85% seat saturation or storage limits.', path: '/industries/saas#expansion-engine', icon: Rocket, tag: 'EXPANSION' },
      { title: 'Predictive Behavioral Churn Defense', outcome: 'Detect active user drop-offs and feature abandonment weeks before renewal dates.', path: '/industries/saas#predictive-churn', icon: HeartPulse, tag: 'CHURN' },
      { title: 'Multi-Tier SaaS Pricing & Packaging', outcome: 'Align value metrics, seat tiers, and platform add-ons to eliminate unearned discounting.', path: '/industries/saas#pricing-tiering', icon: DollarSign, tag: 'PACKAGING' },
      { title: 'Net Revenue Retention (NRR) Workflows', outcome: 'Systematic cadences engineered to expand existing customer contract value over time.', path: '/industries/saas#nrr-compounding', icon: TrendingUp, tag: 'NRR' },
      { title: 'Product-Led to Sales-Assisted Handoff', outcome: 'Seamless bridge connecting freemium users to dedicated enterprise account reps.', path: '/industries/saas#hybrid-gtm', icon: GitMerge, tag: 'PLG TO SLG' },
      { title: 'Feature Adoption Telemetry Tracking', outcome: 'Identify unused premium features and deploy automated in-app guidance playbooks.', path: '/industries/saas#feature-monetization', icon: Eye, tag: 'ADOPTION' },
      { title: 'SaaS Unit Economics & CAC Analytics', outcome: 'Track Magic Number, LTV/CAC ratio, and gross margins across customer acquisition cohorts.', path: '/industries/saas#saas-unit-economics', icon: Scale, tag: 'UNIT ECONOMICS' },
      { title: 'Multi-Currency Billing & Recognition Audit', outcome: 'Automate subscription billing reconciliation and ASC 606 revenue compliance.', path: '/industries/saas#multi-currency-billing', icon: Server, tag: 'BILLING' },
      { title: 'Real-Time SaaS Executive Command HUD', outcome: 'Unified executive dashboard tracking ARR growth, logo retention, and expansion rates.', path: '/industries/saas#executive-saas-hud', icon: BarChart3, tag: 'SAAS HUD' }
    ]
  }
];

