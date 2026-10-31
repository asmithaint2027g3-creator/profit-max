import {
  Globe, Radar, Users, ShieldCheck, DollarSign,
  Target, Scale, TrendingUp, GitMerge, BarChart3,
  Eye, Layers, Zap, Cpu, Sparkles, Sliders,
  Activity, UserCheck, Server, Workflow, LineChart,
  Gauge, Box, Compass, HeartPulse, Rocket, RefreshCw,
  HeartHandshake, Lock, Shield, ShoppingBag, Building2
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

// ── 8 COMPLETE OFFERING ARCHITECTURES (10 CAPABILITIES EACH - EXACT SYNC WITH DATA) ──
export const offeringsArchitecture: OfferingCategoryDetail[] = [
  // 01. Profit Pool Discovery
  {
    id: 'profit-pool-discovery',
    title: 'Profit Pool Discovery',
    path: '/offerings/profit-pool-discovery',
    recommendedIndustries: ["Enterprise SaaS","BFSI","Healthcare"],
    keyRevenueOutcome: '+18% - 32% Margin Expansion',
    businessImpacts: ["Identified Margin Leakage","Willingness-to-Pay Realization","Defensible Competitive Moats"],
    capabilities: [
      {
        title: 'Market Opportunity Mapping',
        outcome: 'Systematically assess addressable market dimensions, bottom-up cu...',
        path: '/offerings/profit-pool-discovery#market-opportunity-mapping',
        icon: Target,
        tag: 'Market & Segment Discovery'
      },
      {
        title: 'Market Whitespace Identification',
        outcome: 'Identify underserved customer cohorts, unaddressed operational us...',
        path: '/offerings/profit-pool-discovery#market-whitespace',
        icon: BarChart3,
        tag: 'Market & Segment Discovery'
      },
      {
        title: 'Customer & Market Segmentation',
        outcome: 'Group potential buyers by operational fit, organizational complex...',
        path: '/offerings/profit-pool-discovery#customer-segmentation',
        icon: TrendingUp,
        tag: 'Market & Segment Discovery'
      },
      {
        title: 'Profit Pool Mapping',
        outcome: 'Examine where gross revenue, contribution margin, and true econom...',
        path: '/offerings/profit-pool-discovery#profit-pool-mapping',
        icon: Layers,
        tag: 'Financial & Margin Modeling'
      },
      {
        title: 'Buyer Intent Intelligence',
        outcome: 'Consolidate permitted first-party telemetry, commercial research ...',
        path: '/offerings/profit-pool-discovery#buyer-intent-intelligence',
        icon: Compass,
        tag: 'Demand & Intent Signals'
      },
      {
        title: 'Demand Forecasting',
        outcome: 'Construct empirical forward-looking demand scenarios using histor...',
        path: '/offerings/profit-pool-discovery#demand-forecasting',
        icon: Activity,
        tag: 'Demand & Intent Signals'
      },
      {
        title: 'Ideal Customer Profile (ICP) Discovery',
        outcome: 'Isolate the specific organizational, cultural, and technographic ...',
        path: '/offerings/profit-pool-discovery#icp-discovery',
        icon: Sliders,
        tag: 'Targeting & Stakeholder Mapping'
      },
      {
        title: 'Buying Committee Intelligence',
        outcome: 'Map economic buyers, technical evaluators, security gates, procur...',
        path: '/offerings/profit-pool-discovery#buying-committee-intelligence',
        icon: Workflow,
        tag: 'Targeting & Stakeholder Mapping'
      },
      {
        title: 'Value Pool & ROI Modeling',
        outcome: 'Quantify tangible operational savings, revenue upside, capital ef...',
        path: '/offerings/profit-pool-discovery#value-pool-roi-modeling',
        icon: Eye,
        tag: 'Financial & Margin Modeling'
      },
      {
        title: 'Competitive Intelligence & Product-Market Fit',
        outcome: 'Benchmark competitive strengths, uncover competitor pricing vulne...',
        path: '/offerings/profit-pool-discovery#competitive-intelligence-pmf',
        icon: Gauge,
        tag: 'Targeting & Stakeholder Mapping'
      }
    ]
  },

  // 02. Demand Engineering
  {
    id: 'demand-engineering',
    title: 'Demand Engineering',
    path: '/offerings/demand-engineering',
    recommendedIndustries: ["B2B Tech","Manufacturing","Global Enterprise"],
    keyRevenueOutcome: '3.4x Qualified Pipeline Velocity',
    businessImpacts: ["Accelerated Inbound Velocity","Lower Customer Acquisition Cost","Predictable Pipeline Generation"],
    capabilities: [
      {
        title: 'ICP & Target Account Engineering',
        outcome: 'Formulate precision ideal customer profiles, build audited target...',
        path: '/offerings/demand-engineering#icp-target-account-engineering',
        icon: Target,
        tag: 'Targeting & Audience Architecture'
      },
      {
        title: 'Account-Based Marketing (ABM) Orchestration',
        outcome: 'Orchestrate account-specific advertising, bespoke landing pages, ...',
        path: '/offerings/demand-engineering#account-based-marketing',
        icon: BarChart3,
        tag: 'Campaign & Content Architecture'
      },
      {
        title: 'Demand Generation Architecture',
        outcome: 'Plan channel mix, campaign cadence, educational content paths, an...',
        path: '/offerings/demand-engineering#demand-generation-architecture',
        icon: TrendingUp,
        tag: 'Campaign & Content Architecture'
      },
      {
        title: 'Campaign & Content Journey Design',
        outcome: 'Align educational content, technical evidence, case studies, and ...',
        path: '/offerings/demand-engineering#campaign-content-journey-design',
        icon: Layers,
        tag: 'Campaign & Content Architecture'
      },
      {
        title: 'AI-Assisted Prospect Research',
        outcome: 'Automate deep account context gathering, executive background syn...',
        path: '/offerings/demand-engineering#ai-prospect-research',
        icon: Compass,
        tag: 'Intelligence & Research Systems'
      },
      {
        title: 'Buyer Intent & Lead Scoring',
        outcome: 'Evaluate first-party web activity, third-party research surges, t...',
        path: '/offerings/demand-engineering#buyer-intent-lead-scoring',
        icon: Activity,
        tag: 'Intelligence & Research Systems'
      },
      {
        title: 'Lead Qualification & Routing Architecture',
        outcome: 'Establish objective qualification rules, automated CRM assignment...',
        path: '/offerings/demand-engineering#lead-qualification-routing',
        icon: Sliders,
        tag: 'Routing & Conversion Systems'
      },
      {
        title: 'Lead Nurture Orchestration',
        outcome: 'Develop contextual follow-up sequences based on customer needs, p...',
        path: '/offerings/demand-engineering#lead-nurture-orchestration',
        icon: Workflow,
        tag: 'Routing & Conversion Systems'
      },
      {
        title: 'Demand Experimentation',
        outcome: 'Systematically test messaging angles, audience segments, creative...',
        path: '/offerings/demand-engineering#demand-experimentation',
        icon: Eye,
        tag: 'Attribution & Optimization'
      },
      {
        title: 'Pipeline Attribution & Demand Analytics',
        outcome: 'Connect marketing investments, digital touches, and SDR outreach ...',
        path: '/offerings/demand-engineering#pipeline-attribution-analytics',
        icon: Gauge,
        tag: 'Attribution & Optimization'
      }
    ]
  },

  // 03. Sales Acceleration
  {
    id: 'sales-acceleration',
    title: 'Sales Acceleration',
    path: '/offerings/sales-acceleration',
    recommendedIndustries: ["Mid-Market","Enterprise Software","Financial Services"],
    keyRevenueOutcome: '28% Shorter Deal Cycles',
    businessImpacts: ["Reduced Deal Slippage","Higher Quota Attainment","Contract Margin Protection"],
    capabilities: [
      {
        title: 'Sales Process Engineering & Playbooks',
        outcome: 'Define rigorous stage-exit criteria, qualification rigor (MEDDPIC...',
        path: '/offerings/sales-acceleration#sales-process-engineering',
        icon: Target,
        tag: 'Process & Deal Intelligence'
      },
      {
        title: 'Opportunity & Deal Intelligence',
        outcome: 'Deploy Bayesian deal-health telemetry to detect stakeholder disen...',
        path: '/offerings/sales-acceleration#opportunity-deal-intelligence',
        icon: BarChart3,
        tag: 'Process & Deal Intelligence'
      },
      {
        title: 'AI Sales Copilots & Autonomous Agents',
        outcome: 'Assist account executives with automated meeting preparation, con...',
        path: '/offerings/sales-acceleration#ai-sales-copilots-agents',
        icon: TrendingUp,
        tag: 'Seller Productivity & Enablement'
      },
      {
        title: 'Account & Meeting Intelligence',
        outcome: 'Organize comprehensive account context, past support tickets, exe...',
        path: '/offerings/sales-acceleration#account-meeting-intelligence',
        icon: Layers,
        tag: 'Seller Productivity & Enablement'
      },
      {
        title: 'Buying Committee & Stakeholder Mapping',
        outcome: 'Map organizational power structures, informal influencers, approv...',
        path: '/offerings/sales-acceleration#buying-committee-stakeholder-mapping',
        icon: Compass,
        tag: 'Process & Deal Intelligence'
      },
      {
        title: 'Competitive Deal Strategy & Displacement',
        outcome: 'Deconstruct rival vendor positioning, deploy real-time battlecard...',
        path: '/offerings/sales-acceleration#competitive-deal-strategy',
        icon: Activity,
        tag: 'Commercial & Negotiation Architecture'
      },
      {
        title: 'Proposal & Sales Document Automation',
        outcome: 'Automate customized RFP responses, executive summaries, security ...',
        path: '/offerings/sales-acceleration#proposal-document-automation',
        icon: Sliders,
        tag: 'Seller Productivity & Enablement'
      },
      {
        title: 'Pricing & Negotiation Intelligence',
        outcome: 'Equip sales teams with dynamic pricing guidance, trade-off matric...',
        path: '/offerings/sales-acceleration#pricing-negotiation-intelligence',
        icon: Workflow,
        tag: 'Commercial & Negotiation Architecture'
      },
      {
        title: 'Sales Productivity & Enablement',
        outcome: 'Provide continuous micro-coaching, competency certification, winn...',
        path: '/offerings/sales-acceleration#sales-productivity-enablement',
        icon: Eye,
        tag: 'Seller Productivity & Enablement'
      },
      {
        title: 'Win-Rate & Deal Velocity Analytics',
        outcome: 'Perform granular cohort forensics on why deals win, stall, or los...',
        path: '/offerings/sales-acceleration#win-rate-deal-velocity-analytics',
        icon: Gauge,
        tag: 'Process & Deal Intelligence'
      }
    ]
  },

  // 04. Revenue Operations
  {
    id: 'revenue-operations',
    title: 'Revenue Operations',
    path: '/offerings/revenue-operations',
    recommendedIndustries: ["Enterprise SaaS","High-Growth Tech","Multi-Division Enterprise"],
    keyRevenueOutcome: '98% Forecast Precision · <2% Variance',
    businessImpacts: ["Unified Data Hygiene","Zero Handoff Drag","Automated SLA Enforcement"],
    capabilities: [
      {
        title: 'Revenue Architecture & Operating Model',
        outcome: 'Define unified revenue governance, cross-functional accountabilit...',
        path: '/offerings/revenue-operations#revenue-architecture-operating-model',
        icon: Target,
        tag: 'Operating Model & Governance'
      },
      {
        title: 'CRM Optimization & Data Quality Architecture',
        outcome: 'Audit CRM schemas, eliminate duplicate records, automate data enr...',
        path: '/offerings/revenue-operations#crm-optimization-data-quality',
        icon: BarChart3,
        tag: 'Data Architecture & Telemetry'
      },
      {
        title: 'Revenue Workflow Automation',
        outcome: 'Automate repetitive cross-system tasks, discount approvals, contr...',
        path: '/offerings/revenue-operations#revenue-workflow-automation',
        icon: TrendingUp,
        tag: 'Automation & Workflow Systems'
      },
      {
        title: 'Marketing-to-Sales Handoff Architecture',
        outcome: 'Align qualification definitions, account ownership rules, respons...',
        path: '/offerings/revenue-operations#marketing-sales-handoff',
        icon: Layers,
        tag: 'Operating Model & Governance'
      },
      {
        title: 'Pipeline & Forecast Management',
        outcome: 'Establish objective pipeline coverage metrics, stage-weighted cal...',
        path: '/offerings/revenue-operations#pipeline-forecast-management',
        icon: Compass,
        tag: 'Data Architecture & Telemetry'
      },
      {
        title: 'Revenue Analytics & Cross-Funnel Attribution',
        outcome: 'Unify top-of-funnel marketing investments, sales pipeline progres...',
        path: '/offerings/revenue-operations#revenue-analytics-attribution',
        icon: Activity,
        tag: 'Data Architecture & Telemetry'
      },
      {
        title: 'Territory & Quota Planning',
        outcome: 'Balance sales territories, assign fair quotas based on addressabl...',
        path: '/offerings/revenue-operations#territory-quota-planning',
        icon: Sliders,
        tag: 'Capacity & Territory Management'
      },
      {
        title: 'Sales Capacity & Resource Planning',
        outcome: 'Model sales headcount requirements, ramp curves, deal conversion ...',
        path: '/offerings/revenue-operations#sales-capacity-resource-planning',
        icon: Workflow,
        tag: 'Capacity & Territory Management'
      },
      {
        title: 'Contract-to-Cash & Revenue Leakage Forensics',
        outcome: 'Audit signed agreements against billing records, identify uncolle...',
        path: '/offerings/revenue-operations#contract-to-cash-leakage',
        icon: Eye,
        tag: 'Automation & Workflow Systems'
      },
      {
        title: 'Executive Revenue Dashboards & Telemetry',
        outcome: 'Deliver real-time C-suite cockpits consolidating pipeline velocit...',
        path: '/offerings/revenue-operations#executive-revenue-dashboards',
        icon: Gauge,
        tag: 'Data Architecture & Telemetry'
      }
    ]
  },

  // 05. GTM Transformation
  {
    id: 'gtm-transformation',
    title: 'GTM Transformation',
    path: '/offerings/gtm-transformation',
    recommendedIndustries: ["PE-Backed Scaleups","Global 2000","Modernizing Enterprise"],
    keyRevenueOutcome: '-40% Sales Cycle Duration',
    businessImpacts: ["Unified GTM Blueprint","Removed Cross-Functional Drag","Accelerated Field Adoption"],
    capabilities: [
      {
        title: 'GTM Strategy & Market Entry Architecture',
        outcome: 'Evaluate customer segments, competitive dynamics, regulatory fric...',
        path: '/offerings/gtm-transformation#gtm-strategy-market-entry',
        icon: Target,
        tag: 'Market Entry & Positioning'
      },
      {
        title: 'ICP & Segment Prioritization Matrix',
        outcome: 'Rank target customer segments by willingness-to-pay, procurement ...',
        path: '/offerings/gtm-transformation#icp-segment-prioritization',
        icon: BarChart3,
        tag: 'Market Entry & Positioning'
      },
      {
        title: 'Positioning & Value Proposition Architecture',
        outcome: 'Translate complex product capabilities into razor-sharp, differen...',
        path: '/offerings/gtm-transformation#positioning-value-proposition',
        icon: TrendingUp,
        tag: 'Market Entry & Positioning'
      },
      {
        title: 'Messaging Architecture & Role-Specific Playbooks',
        outcome: 'Develop tailored messaging matrices that map commercial value pro...',
        path: '/offerings/gtm-transformation#messaging-architecture',
        icon: Layers,
        tag: 'Narrative & Messaging Architecture'
      },
      {
        title: 'Channel & Partner Ecosystem Strategy',
        outcome: 'Design indirect distribution programs, value-added reseller (VAR)...',
        path: '/offerings/gtm-transformation#channel-partner-strategy',
        icon: Compass,
        tag: 'Channels & Ecosystem Scaling'
      },
      {
        title: 'Pricing & Commercial Packaging Strategy',
        outcome: 'Calibrate pricing metrics, tier structures, enterprise packaging,...',
        path: '/offerings/gtm-transformation#pricing-commercial-strategy',
        icon: Activity,
        tag: 'Commercial & Negotiation Architecture'
      },
      {
        title: 'Product & Offer Launch Readiness',
        outcome: 'Coordinate cross-functional milestones across marketing campaigns...',
        path: '/offerings/gtm-transformation#product-offer-launch-readiness',
        icon: Sliders,
        tag: 'Launch & Operational Execution'
      },
      {
        title: 'GTM Workflow Orchestration',
        outcome: 'Align campaign execution, SDR prospecting cadences, AE deal hando...',
        path: '/offerings/gtm-transformation#gtm-workflow-orchestration',
        icon: Workflow,
        tag: 'Launch & Operational Execution'
      },
      {
        title: 'International Expansion Planning',
        outcome: 'Assess cross-border regulatory compliance, localization requireme...',
        path: '/offerings/gtm-transformation#international-expansion-planning',
        icon: Eye,
        tag: 'Channels & Ecosystem Scaling'
      },
      {
        title: 'GTM Performance & Execution Governance',
        outcome: 'Establish weekly executive operating cadences, milestone scorecar...',
        path: '/offerings/gtm-transformation#gtm-performance-governance',
        icon: Gauge,
        tag: 'Launch & Operational Execution'
      }
    ]
  },

  // 06. Customer Success Engine
  {
    id: 'customer-success',
    title: 'Customer Success Engine',
    path: '/offerings/customer-success',
    recommendedIndustries: ["Subscription SaaS","Cloud Infrastructure","Enterprise Platforms"],
    keyRevenueOutcome: '118% - 134% Net Revenue Retention (NRR)',
    businessImpacts: ["Compounded Customer LTV","Automated Churn Mitigation","Predictable Renewal Stream"],
    capabilities: [
      {
        title: 'Customer Onboarding & Activation Architecture',
        outcome: 'Structure accelerated customer onboarding journeys, clear technic...',
        path: '/offerings/customer-success#customer-onboarding-activation',
        icon: Target,
        tag: 'Onboarding & Adoption Velocity'
      },
      {
        title: 'Time-to-Value (TTV) Optimization',
        outcome: 'Isolate the critical customer aha-moment and engineer rapid opera...',
        path: '/offerings/customer-success#time-to-value-optimization',
        icon: BarChart3,
        tag: 'Onboarding & Adoption Velocity'
      },
      {
        title: 'Customer Health Intelligence',
        outcome: 'Combine permitted software usage, license adoption, support ticke...',
        path: '/offerings/customer-success#customer-health-intelligence',
        icon: TrendingUp,
        tag: 'Retention & Health Telemetry'
      },
      {
        title: 'Algorithmic Churn Risk Detection',
        outcome: 'Detect subtle behavioral leading indicators of churn (executive s...',
        path: '/offerings/customer-success#churn-risk-detection',
        icon: Layers,
        tag: 'Retention & Health Telemetry'
      },
      {
        title: 'Retention & Renewal Management Architecture',
        outcome: 'Establish disciplined renewal cadences, 90-day commercial milesto...',
        path: '/offerings/customer-success#retention-renewal-management',
        icon: Compass,
        tag: 'Retention & Health Telemetry'
      },
      {
        title: 'Expansion Opportunity Intelligence',
        outcome: 'Monitor customer usage thresholds, team capacity constraints, and...',
        path: '/offerings/customer-success#expansion-opportunity-intelligence',
        icon: Activity,
        tag: 'Account Expansion & Growth'
      },
      {
        title: 'Cross-Sell & Upsell Orchestration',
        outcome: 'Equip customer success and account management teams with structur...',
        path: '/offerings/customer-success#cross-sell-upsell-orchestration',
        icon: Sliders,
        tag: 'Account Expansion & Growth'
      },
      {
        title: 'Customer Journey & Friction Analytics',
        outcome: 'Map and measure the full customer post-sale journey to locate hid...',
        path: '/offerings/customer-success#customer-journey-analytics',
        icon: Workflow,
        tag: 'Lifecycle Intelligence & VOC'
      },
      {
        title: 'Voice of Customer (VOC) & Advocacy Architecture',
        outcome: 'Systematically gather customer feedback, identify passionate cham...',
        path: '/offerings/customer-success#voice-of-customer-advocacy',
        icon: Eye,
        tag: 'Lifecycle Intelligence & VOC'
      },
      {
        title: 'Recurring Revenue & Lifetime Value (LTV) Analytics',
        outcome: 'Perform granular cohort forensics on Gross Retention, Net Retenti...',
        path: '/offerings/customer-success#recurring-revenue-ltv-analytics',
        icon: Gauge,
        tag: 'Lifecycle Intelligence & VOC'
      }
    ]
  },

  // 07. Growth Intelligence
  {
    id: 'growth-intelligence',
    title: 'Growth Intelligence',
    path: '/offerings/growth-intelligence',
    recommendedIndustries: ["SaaS & Cloud Platforms","PE Portfolios","Multi-Brand Conglomerates"],
    keyRevenueOutcome: '4.2x Faster Resource Allocation',
    businessImpacts: ["Validated Unit Economics","Data-Governed Experiments","Continuous Capital Efficiency"],
    capabilities: [
      {
        title: 'Business Growth Diagnostics & Baseline Forensics',
        outcome: 'Perform forensic evaluations across acquisition efficiency, sales...',
        path: '/offerings/growth-intelligence#business-growth-diagnostics',
        icon: Target,
        tag: 'Diagnostics & KPI Modeling'
      },
      {
        title: 'KPI Trees & Empirical Benchmarking',
        outcome: 'Deconstruct high-level revenue objectives into mathematical trees...',
        path: '/offerings/growth-intelligence#kpi-trees-benchmarking',
        icon: BarChart3,
        tag: 'Diagnostics & KPI Modeling'
      },
      {
        title: 'Predictive Revenue Intelligence & Signal Telemetry',
        outcome: 'Deploy Bayesian predictive models to forecast quarterly bookings,...',
        path: '/offerings/growth-intelligence#predictive-revenue-intelligence',
        icon: TrendingUp,
        tag: 'Financial & Scenario Modeling'
      },
      {
        title: 'Scenario & Financial Modeling',
        outcome: 'Simulate alternative growth investments, pricing changes, sales c...',
        path: '/offerings/growth-intelligence#scenario-financial-modeling',
        icon: Layers,
        tag: 'Financial & Scenario Modeling'
      },
      {
        title: 'Pricing, Margin & Unit Economics Forensics',
        outcome: 'Evaluate realized contract pricing, discounting leakage, direct c...',
        path: '/offerings/growth-intelligence#pricing-margin-unit-economics',
        icon: Compass,
        tag: 'Unit Economics & Optimization'
      },
      {
        title: 'Customer Profitability & Cohort Economics',
        outcome: 'Compare revenue contribution, customer acquisition costs, retenti...',
        path: '/offerings/growth-intelligence#customer-profitability-analytics',
        icon: Activity,
        tag: 'Unit Economics & Optimization'
      },
      {
        title: 'Growth Experimentation & Agile Sprints',
        outcome: 'Define commercial hypotheses, test pricing, landing pages, and sa...',
        path: '/offerings/growth-intelligence#growth-experimentation',
        icon: Sliders,
        tag: 'Experimentation & Resource Allocation'
      },
      {
        title: 'Resource Allocation & Capital Optimization',
        outcome: 'Prioritize strategic initiatives by expected return, implementati...',
        path: '/offerings/growth-intelligence#resource-allocation-optimization',
        icon: Workflow,
        tag: 'Experimentation & Resource Allocation'
      },
      {
        title: 'Executive Intelligence & Decision Support Cockpits',
        outcome: 'Consolidate complex cross-functional telemetry into real-time C-s...',
        path: '/offerings/growth-intelligence#executive-decision-support',
        icon: Eye,
        tag: 'Decision Support & Governance'
      },
      {
        title: 'Value Realization & Growth Governance',
        outcome: 'Track actual business outcomes against original investment busine...',
        path: '/offerings/growth-intelligence#value-realization-governance',
        icon: Gauge,
        tag: 'Decision Support & Governance'
      }
    ]
  },

  // 08. AI Trust & Governance
  {
    id: 'ai-trust-governance',
    title: 'AI Trust & Governance',
    path: '/offerings/ai-trust-governance',
    recommendedIndustries: ["Fintech & Banking","Healthcare & Life Sciences","Defense & Infrastructure"],
    keyRevenueOutcome: 'Zero Model Drift & 100% Policy Compliance',
    businessImpacts: ["Complete Audit Telemetry","Granular RBAC Safeguards","Deterministic AI Governance"],
    capabilities: [
      {
        title: 'AI Strategy & Governance Framework',
        outcome: 'Define organizational AI ownership, decision rights, ethical boun...',
        path: '/offerings/ai-trust-governance#ai-strategy-governance-framework',
        icon: Target,
        tag: 'Governance & Strategy'
      },
      {
        title: 'AI Use-Case Assessment & Prioritization',
        outcome: 'Evaluate proposed AI automations by tangible business ROI, data r...',
        path: '/offerings/ai-trust-governance#ai-use-case-prioritization',
        icon: BarChart3,
        tag: 'Governance & Strategy'
      },
      {
        title: 'AI Risk & Compliance Management',
        outcome: 'Audit applicable data privacy laws (GDPR, CCPA), emerging AI regu...',
        path: '/offerings/ai-trust-governance#ai-risk-compliance-management',
        icon: TrendingUp,
        tag: 'Risk & Security Architecture'
      },
      {
        title: 'AI Security & Data Protection Architecture',
        outcome: 'Implement private sandbox environments, zero-data-retention APIs,...',
        path: '/offerings/ai-trust-governance#ai-security-data-protection',
        icon: Layers,
        tag: 'Risk & Security Architecture'
      },
      {
        title: 'Model Evaluation & Deterministic Reliability',
        outcome: 'Benchmark model accuracy, factuality, hallucination rates, latenc...',
        path: '/offerings/ai-trust-governance#model-evaluation-reliability',
        icon: Compass,
        tag: 'Model Quality & Evaluation'
      },
      {
        title: 'Responsible AI & Human-in-the-Loop (HITL) Oversight',
        outcome: 'Establish explicit operational boundaries determining when AI age...',
        path: '/offerings/ai-trust-governance#responsible-ai-human-oversight',
        icon: Activity,
        tag: 'Model Quality & Evaluation'
      },
      {
        title: 'AI Observability & Real-Time Performance Telemetry',
        outcome: 'Monitor real-time prompt volume, token expenditure, semantic drif...',
        path: '/offerings/ai-trust-governance#ai-observability-monitoring',
        icon: Sliders,
        tag: 'Observability & Lifecycle Operations'
      },
      {
        title: 'AI Agent Permissions & Access Control Architecture',
        outcome: 'Enforce principle of least privilege, strict tool execution bound...',
        path: '/offerings/ai-trust-governance#ai-agent-permissions-access',
        icon: Workflow,
        tag: 'Governance & Strategy'
      },
      {
        title: 'AI Workflow Immutable Audit Trails',
        outcome: 'Capture cryptographically verifiable, timestamped logs of every i...',
        path: '/offerings/ai-trust-governance#ai-workflow-audit-trails',
        icon: Eye,
        tag: 'Observability & Lifecycle Operations'
      },
      {
        title: 'AI Lifecycle & Change Management Framework',
        outcome: 'Establish structured version control, automated staging regressio...',
        path: '/offerings/ai-trust-governance#ai-lifecycle-change-management',
        icon: Gauge,
        tag: 'Observability & Lifecycle Operations'
      }
    ]
  }

];

// ── 6 COMPLETE INDUSTRY ARCHITECTURES (10 CAPABILITIES EACH - EXACT SYNC WITH DATA) ──
export const industriesArchitecture: IndustryCategoryDetail[] = [
  // 01. B2B Businesses
  {
    id: 'b2b',
    title: 'B2B Businesses',
    path: '/industries/b2b',
    desc: 'B2B REVENUE ENGINEERING · Complex Buying Groups, Multi-Stakeholder Pipelines & Account Targeting',
    badge: 'Account Intelligence',
    icon: Target,
    recommendedAudience: ["Enterprise Software","Capital Goods","Professional Services"],
    keyRevenueOutcome: '3.8x Account Pipeline Density',
    businessImpacts: ["Committee Consensus Acceleration","Dark Intent Discovery","Precision ABM Execution"],
    capabilities: [
      {
        title: 'B2B ICP & Target Account Discovery',
        outcome: 'Define firmographic, technographic, and organizational triggers t...',
        path: '/industries/b2b#b2b-icp-target-account-discovery',
        icon: TrendingUp,
        tag: 'Targeting & Market Intelligence'
      },
      {
        title: 'Account-Based Marketing & Strategic Engagement',
        outcome: 'Coordinate personalized digital advertising, customized executive...',
        path: '/industries/b2b#abm-engagement',
        icon: Layers,
        tag: 'Targeting & Market Intelligence'
      },
      {
        title: 'Buyer Intent & Demand Intelligence',
        outcome: 'Consolidate first-party digital signals, category research footpr...',
        path: '/industries/b2b#buyer-intent-demand-intelligence',
        icon: Compass,
        tag: 'Targeting & Market Intelligence'
      },
      {
        title: 'AI Prospecting & Sales Development Systems',
        outcome: 'Automate deep account context gathering, trigger event monitoring...',
        path: '/industries/b2b#ai-prospecting-sales-dev',
        icon: Activity,
        tag: 'Sales Execution & Pipeline Velocity'
      },
      {
        title: 'Lead Qualification & Revenue-Qualified Scoring (RQS)',
        outcome: 'Replace subjective gut feelings with mathematical close probabili...',
        path: '/industries/b2b#lead-qualification-scoring',
        icon: Sliders,
        tag: 'Sales Execution & Pipeline Velocity'
      },
      {
        title: 'Buying Committee & Stakeholder Consensus Mapping',
        outcome: 'Map economic buyers, technical champions, compliance gatekeepers,...',
        path: '/industries/b2b#buying-committee-intelligence',
        icon: Workflow,
        tag: 'Sales Execution & Pipeline Velocity'
      },
      {
        title: 'Opportunity & Deal Health Intelligence',
        outcome: 'Deploy Bayesian deal-health telemetry to detect stakeholder disen...',
        path: '/industries/b2b#opportunity-deal-intelligence',
        icon: Eye,
        tag: 'Deal Governance & Operations'
      },
      {
        title: 'Sales Process & Deal Velocity Optimization',
        outcome: 'Standardize B2B sales stages, enforce verifiable exit gates (MEDD...',
        path: '/industries/b2b#sales-process-deal-velocity',
        icon: Gauge,
        tag: 'Deal Governance & Operations'
      },
      {
        title: 'Revenue Forecasting & Pipeline Analytics',
        outcome: 'Deploy Bayesian forecasting models, track cohort conversion veloc...',
        path: '/industries/b2b#revenue-forecasting-pipeline-analytics',
        icon: Target,
        tag: 'Deal Governance & Operations'
      },
      {
        title: 'Customer Retention & Account Expansion',
        outcome: 'Identify renewal risks, monitor customer health telemetry, map cr...',
        path: '/industries/b2b#customer-retention-account-expansion',
        icon: BarChart3,
        tag: 'Retention & Account Expansion'
      }
    ]
  },

  // 02. Enterprise Organizations
  {
    id: 'enterprise',
    title: 'Enterprise Organizations',
    path: '/industries/enterprise',
    desc: 'ENTERPRISE SCALE ARCHITECTURE · Multi-Division Governance, Complex Buying Groups & Global RevOps',
    badge: 'Global Scale',
    icon: Building2,
    recommendedAudience: ["Global 2000","Multi-Division Conglomerates","Fortune 500 Leaders"],
    keyRevenueOutcome: 'Zero Cross-Division Pipeline Drag',
    businessImpacts: ["Multi-Subsidiary Synchronization","Enterprise Data Integrity","Coordinated Account Plans"],
    capabilities: [
      {
        title: 'Enterprise Account Intelligence & Hierarchy Mapping',
        outcome: 'Consolidate global corporate hierarchies, subsidiary family trees...',
        path: '/industries/enterprise#enterprise-account-intelligence',
        icon: TrendingUp,
        tag: 'Account Penetration & Matrix Strategy'
      },
      {
        title: 'Strategic Account-Based Growth Architecture',
        outcome: 'Coordinate dedicated executive account teams, bespoke enterprise ...',
        path: '/industries/enterprise#strategic-account-growth',
        icon: Layers,
        tag: 'Account Penetration & Matrix Strategy'
      },
      {
        title: 'Buying Committee & Executive Engagement Architecture',
        outcome: 'Map multi-stakeholder consensus requirements, engage C-suite deci...',
        path: '/industries/enterprise#buying-committee-executive-engagement',
        icon: Compass,
        tag: 'Account Penetration & Matrix Strategy'
      },
      {
        title: 'Multi-Team Revenue Orchestration',
        outcome: 'Synchronize global marketing, regional sales pods, professional s...',
        path: '/industries/enterprise#multi-team-revenue-orchestration',
        icon: Activity,
        tag: 'Enterprise RevOps & Systems'
      },
      {
        title: 'Global Account & Division Expansion Playbooks',
        outcome: 'Replicate enterprise customer success across international corrid...',
        path: '/industries/enterprise#global-account-division-expansion',
        icon: Sliders,
        tag: 'Account Penetration & Matrix Strategy'
      },
      {
        title: 'Enterprise Opportunity & Deal Health Telemetry',
        outcome: 'Deploy Bayesian deal-health telemetry to monitor stakeholder enga...',
        path: '/industries/enterprise#enterprise-sales-intelligence',
        icon: Workflow,
        tag: 'Deal Governance & Operations'
      },
      {
        title: 'Enterprise RevOps & Multi-CRM Architecture',
        outcome: 'Architect enterprise Salesforce instances, harmonize multi-subsid...',
        path: '/industries/enterprise#revops-crm-integration',
        icon: Eye,
        tag: 'Enterprise RevOps & Systems'
      },
      {
        title: 'Executive Telemetry & Board Reporting Cockpits',
        outcome: 'Deliver real-time C-suite cockpits consolidating global pipeline,...',
        path: '/industries/enterprise#forecasting-executive-telemetry',
        icon: Gauge,
        tag: 'Deal Governance & Operations'
      },
      {
        title: 'Governed Enterprise AI Workflow Architecture',
        outcome: 'Deploy autonomous AI agents, proposal automation, and sales copil...',
        path: '/industries/enterprise#ai-workflow-automation-governance',
        icon: Target,
        tag: 'AI Governance & Scaling'
      },
      {
        title: 'Customer Portfolio Growth & Multi-Year Retention',
        outcome: 'Monitor enterprise portfolio health, coordinate executive busines...',
        path: '/industries/enterprise#customer-portfolio-growth-retention',
        icon: BarChart3,
        tag: 'Retention & Account Expansion'
      }
    ]
  },

  // 03. B2C & Consumer-Facing Businesses
  {
    id: 'b2c',
    title: 'B2C & Consumer-Facing Businesses',
    path: '/industries/b2c',
    desc: 'CONSUMER ACQUISITION & CONVERSION · Omnichannel Journeys, Conversion Optimization & Repeat Purchase Economics',
    badge: 'Consumer Growth',
    icon: ShoppingBag,
    recommendedAudience: ["D2C Brands","Consumer Marketplaces","High-Volume eCommerce"],
    keyRevenueOutcome: '+48% Customer Lifetime Value (LTV)',
    businessImpacts: ["Omnichannel Intent Capture","Cart Abandonment Eradication","Dynamic Pricing Margins"],
    capabilities: [
      {
        title: 'Consumer Audience & Customer Segmentation',
        outcome: 'Organize consumer shoppers by purchase recency, frequency, moneta...',
        path: '/industries/b2c#consumer-audience-segmentation',
        icon: TrendingUp,
        tag: 'Audience & Demand Architecture'
      },
      {
        title: 'High-Intent Audience Discovery',
        outcome: 'Identify high-intent consumer shoppers using privacy-compliant se...',
        path: '/industries/b2c#high-intent-audience-discovery',
        icon: Layers,
        tag: 'Audience & Demand Architecture'
      },
      {
        title: 'Omnichannel Demand Generation',
        outcome: 'Coordinate paid social, search, influencer partnerships, email, S...',
        path: '/industries/b2c#omnichannel-demand-generation',
        icon: Compass,
        tag: 'Audience & Demand Architecture'
      },
      {
        title: 'Customer Acquisition Cost (CAC) Optimization',
        outcome: 'Audit creative fatigue, landing page drop-offs, bid strategies, a...',
        path: '/industries/b2c#customer-acquisition-optimization',
        icon: Activity,
        tag: 'Conversion & Checkout Architecture'
      },
      {
        title: 'Personalized Customer Journeys & Recommendation Engines',
        outcome: 'Serve individualized product recommendations, dynamic category co...',
        path: '/industries/b2c#personalized-customer-journeys',
        icon: Sliders,
        tag: 'Conversion & Checkout Architecture'
      },
      {
        title: 'Offer & Pricing Intelligence Architecture',
        outcome: 'Optimize promotional offer structures, bundle packaging, subscrip...',
        path: '/industries/b2c#offer-pricing-intelligence',
        icon: Workflow,
        tag: 'Conversion & Checkout Architecture'
      },
      {
        title: 'Conversion & Checkout Friction Optimization',
        outcome: 'Audit mobile UI friction, streamline checkout steps, integrate ac...',
        path: '/industries/b2c#conversion-checkout-optimization',
        icon: Eye,
        tag: 'Conversion & Checkout Architecture'
      },
      {
        title: 'Customer Retargeting & Abandoned Journey Recovery',
        outcome: 'Deploy multi-channel abandoned cart and browse recovery cadences ...',
        path: '/industries/b2c#customer-retargeting-recovery',
        icon: Gauge,
        tag: 'Retention & Lifecycle Marketing'
      },
      {
        title: 'Repeat Purchase & Retention Intelligence',
        outcome: 'Analyze consumption cycle replenishment timelines, predict replen...',
        path: '/industries/b2c#repeat-purchase-retention-intelligence',
        icon: Target,
        tag: 'Retention & Lifecycle Marketing'
      },
      {
        title: 'Customer Lifetime Value (CLV) & Campaign ROI Analytics',
        outcome: 'Perform granular cohort forensics connecting ad acquisition spend...',
        path: '/industries/b2c#clv-campaign-roi',
        icon: BarChart3,
        tag: 'Retention & Lifecycle Marketing'
      }
    ]
  },

  // 04. Mid-Market & Scaling Businesses
  {
    id: 'midmarket',
    title: 'Mid-Market & Scaling Businesses',
    path: '/industries/midmarket',
    desc: 'EFFICIENT MARKET EXPANSION · Overcoming Growth Ceilings, Optimizing Sales Capacity & Margin Discipline',
    badge: 'Market Expansion',
    icon: Zap,
    recommendedAudience: ["High-Growth Mid-Market","Scale-Up Companies ($20M-$100M ARR)","Regional Leaders"],
    keyRevenueOutcome: '32% Higher Sales Capacity per Rep',
    businessImpacts: ["Eliminated Administrative Drag","Repeatable GTM Playbooks","Disciplined Growth Margins"],
    capabilities: [
      {
        title: 'Growth Opportunity & ICP Discovery',
        outcome: 'Isolate high-margin customer profiles, identify underserved niche...',
        path: '/industries/midmarket#growth-opportunity-icp-discovery',
        icon: TrendingUp,
        tag: 'Market Expansion & Targeting'
      },
      {
        title: 'Market Expansion & Adjacent Segment Planning',
        outcome: 'Assess adjacent geographic markets, complementary industry vertic...',
        path: '/industries/midmarket#market-expansion-planning',
        icon: Layers,
        tag: 'Market Expansion & Targeting'
      },
      {
        title: 'Target Account Coverage & Territory Architecture',
        outcome: 'Balance sales territories, prioritize named accounts by purchasin...',
        path: '/industries/midmarket#target-account-coverage',
        icon: Compass,
        tag: 'Market Expansion & Targeting'
      },
      {
        title: 'Repeatable Demand Generation Engines',
        outcome: 'Build steady, multi-channel inbound and outbound pipeline engines...',
        path: '/industries/midmarket#repeatable-demand-generation',
        icon: Activity,
        tag: 'Demand Generation & Outbound'
      },
      {
        title: 'AI-Assisted Sales Productivity & Copilots',
        outcome: 'Equip sales reps with automated meeting transcription, CRM loggin...',
        path: '/industries/midmarket#ai-assisted-sales-productivity',
        icon: Sliders,
        tag: 'Sales Execution & Process Standardization'
      },
      {
        title: 'CRM & RevOps Workflow Automation',
        outcome: 'Automate repetitive tasks, proposal generation, discount approval...',
        path: '/industries/midmarket#crm-workflow-automation',
        icon: Workflow,
        tag: 'Operational Scaling & Automation'
      },
      {
        title: 'Pipeline & Forecast Visibility Architecture',
        outcome: 'Establish objective pipeline coverage metrics, stage-weighted cal...',
        path: '/industries/midmarket#pipeline-forecast-visibility',
        icon: Eye,
        tag: 'Sales Execution & Process Standardization'
      },
      {
        title: 'Sales Capacity & Process Standardization',
        outcome: 'Standardize sales stages, enforce verifiable exit gates (MEDDPICC...',
        path: '/industries/midmarket#sales-capacity-process-optimization',
        icon: Gauge,
        tag: 'Sales Execution & Process Standardization'
      },
      {
        title: 'Customer Retention & Account Expansion Engines',
        outcome: 'Accelerate customer time-to-value, detect early churn warning sig...',
        path: '/industries/midmarket#customer-retention-expansion',
        icon: Target,
        tag: 'Operational Scaling & Automation'
      },
      {
        title: 'Growth Performance & Profitability Analytics',
        outcome: 'Connect marketing spend, sales execution, customer delivery costs...',
        path: '/industries/midmarket#growth-performance-profitability-analytics',
        icon: BarChart3,
        tag: 'Operational Scaling & Automation'
      }
    ]
  },

  // 05. Startups & Scaleups
  {
    id: 'startups',
    title: 'Startups & Scaleups',
    path: '/industries/startups',
    desc: 'RAPID PMF & COMMERCIAL TRACTION · Market Validation, Fast Customer Acquisition & Capital-Efficient Growth',
    badge: 'Validation & PMF',
    icon: Rocket,
    recommendedAudience: ["Seed to Series B Startups","Venture-Backed Founders","Technical Innovators"],
    keyRevenueOutcome: '48-Hour Pipeline Launch',
    businessImpacts: ["Empirical PMF Telemetry","Founder Calendar Protection","Extended Runway"],
    capabilities: [
      {
        title: 'ICP & Market Demand Validation',
        outcome: 'Test commercial buyer hypotheses, identify urgent industry pain p...',
        path: '/industries/startups#icp-market-validation',
        icon: TrendingUp,
        tag: 'Market Validation & PMF Signals'
      },
      {
        title: 'Product-Market Fit (PMF) Signal Discovery',
        outcome: 'Extract empirical retention signals, organic user referral loops,...',
        path: '/industries/startups#pmf-signal-discovery',
        icon: Layers,
        tag: 'Market Validation & PMF Signals'
      },
      {
        title: 'First-Customer (0-to-1) Acquisition Architecture',
        outcome: 'Design focused, highly personalized commercial campaigns to secur...',
        path: '/industries/startups#first-customer-acquisition',
        icon: Compass,
        tag: 'Founder Sales & Early Traction'
      },
      {
        title: 'Founder-Led Sales Automation & Copilots',
        outcome: 'Automate prospect research, CRM deal tracking, meeting transcript...',
        path: '/industries/startups#founder-led-sales-automation',
        icon: Activity,
        tag: 'Founder Sales & Early Traction'
      },
      {
        title: 'Lean Demand Generation & Inbound Experiments',
        outcome: 'Deploy capital-efficient organic content, founder thought leaders...',
        path: '/industries/startups#lean-demand-generation',
        icon: Sliders,
        tag: 'Demand & Growth Experiments'
      },
      {
        title: 'AI-Assisted Outbound Prospecting Systems',
        outcome: 'Automate account list building, technographic verification, trigg...',
        path: '/industries/startups#ai-assisted-prospecting',
        icon: Workflow,
        tag: 'Demand & Growth Experiments'
      },
      {
        title: 'Lead Qualification & Conversion Frameworks',
        outcome: 'Establish objective qualification criteria, rapid discovery agend...',
        path: '/industries/startups#lead-qualification-conversion',
        icon: Eye,
        tag: 'Founder Sales & Early Traction'
      },
      {
        title: 'Pricing & Monetization Validation Experiments',
        outcome: 'Test value metrics, packaging tiers, pilot pricing, and willingne...',
        path: '/industries/startups#pricing-monetization-validation',
        icon: Gauge,
        tag: 'Unit Economics & Financial Runway'
      },
      {
        title: 'CAC, LTV & Financial Runway Analytics',
        outcome: 'Model customer acquisition unit economics, payback duration, gros...',
        path: '/industries/startups#cac-ltv-runway-analytics',
        icon: Target,
        tag: 'Unit Economics & Financial Runway'
      },
      {
        title: 'Repeatable Revenue Engine & Sales Playbook Design',
        outcome: 'Codify founder discovery questions, objection responses, demo pat...',
        path: '/industries/startups#repeatable-revenue-engine-design',
        icon: BarChart3,
        tag: 'Founder Sales & Early Traction'
      }
    ]
  },

  // 06. SaaS & Recurring-Revenue Businesses
  {
    id: 'saas',
    title: 'SaaS & Recurring-Revenue Businesses',
    path: '/industries/saas',
    desc: 'SUBSCRIPTION LIFECYCLE, PLG-TO-SLG HYBRID & RETENTION REVENUE · SaaS & Recurring-Revenue Businesses',
    badge: 'Recurring Revenue',
    icon: Layers,
    recommendedAudience: ["B2B SaaS","Cloud Software","Product-Led Growth (PLG)"],
    keyRevenueOutcome: '128% Net Revenue Retention (NRR)',
    businessImpacts: ["Product-Led Conversion","Automated Churn Mitigation","Tier Expansion"],
    capabilities: [
      {
        title: 'SaaS ICP & Account Prioritization Matrix',
        outcome: 'Isolate the specific company attributes, technology stacks, and t...',
        path: '/industries/saas#saas-icp-prioritization',
        icon: TrendingUp,
        tag: 'Acquisition & PLG-SLG Alignment'
      },
      {
        title: 'Product-Led (PLG) & Sales-Led (SLG) Hybrid Alignment',
        outcome: 'Connect self-serve product adoption with enterprise sales motions...',
        path: '/industries/saas#plg-slg-alignment',
        icon: Layers,
        tag: 'Acquisition & PLG-SLG Alignment'
      },
      {
        title: 'Subscription Pipeline & Demand Generation',
        outcome: 'Deploy high-intent bottom-of-funnel search capture, competitor al...',
        path: '/industries/saas#subscription-demand-generation',
        icon: Compass,
        tag: 'Acquisition & PLG-SLG Alignment'
      },
      {
        title: 'Trial-to-Paid Conversion Intelligence',
        outcome: 'Analyze in-trial user telemetry, identify conversion bottlenecks,...',
        path: '/industries/saas#trial-to-paid-conversion-intelligence',
        icon: Activity,
        tag: 'Onboarding & Product Activation'
      },
      {
        title: 'Sales-Assisted Conversion Optimization',
        outcome: 'Equip sales reps with real-time product usage telemetry to interv...',
        path: '/industries/saas#sales-assisted-conversion-optimization',
        icon: Sliders,
        tag: 'Onboarding & Product Activation'
      },
      {
        title: 'Onboarding & Time-to-Value (TTV) Acceleration',
        outcome: 'Streamline customer implementation, automate data integration web...',
        path: '/industries/saas#onboarding-time-to-value',
        icon: Workflow,
        tag: 'Onboarding & Product Activation'
      },
      {
        title: 'Product Adoption & Customer Health Intelligence',
        outcome: 'Combine daily active usage, core feature adoption, license utiliz...',
        path: '/industries/saas#product-adoption-customer-health',
        icon: Eye,
        tag: 'Retention & Expansion Architecture'
      },
      {
        title: 'Churn Prevention & Renewal Intelligence Architecture',
        outcome: 'Deploy predictive churn risk models, establish 120-day renewal pi...',
        path: '/industries/saas#churn-prevention-renewal-intelligence',
        icon: Gauge,
        tag: 'Retention & Expansion Architecture'
      },
      {
        title: 'Expansion, Upsell & Cross-Sell Orchestration',
        outcome: 'Monitor license capacity thresholds, team expansion triggers, and...',
        path: '/industries/saas#expansion-upsell-cross-sell',
        icon: Target,
        tag: 'Retention & Expansion Architecture'
      },
      {
        title: 'ARR, MRR & Revenue Retention Analytics',
        outcome: 'Perform granular cohort forensics on Annual Recurring Revenue (AR...',
        path: '/industries/saas#arr-mrr-retention-analytics',
        icon: BarChart3,
        tag: 'Retention & Expansion Architecture'
      }
    ]
  }

];
