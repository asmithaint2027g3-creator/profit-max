import {
  Factory,
  Car,
  HeartPulse,
  Landmark,
  Shield,
  ShoppingBag,
  Truck,
  Radio,
  Flame,
  Cloud,
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Briefcase,
  Layers,
  Cpu,
  UserCheck,
  Server,
  ShieldAlert,
  FileText,
  Compass,
  Rocket,
  BarChart3,
  BrainCircuit,
  Bot,
  Zap,
  Workflow,
  Gauge,
  Sliders,
  Award,
  GitMerge,
  BookOpen,
  CheckCircle2,
  Calculator,
  Activity,
  Boxes,
  ShieldCheck,
  Scale
} from 'lucide-react';

export interface ResourceSubItem {
  title: string;
  description?: string;
  path: string;
  badge?: string;
  icon?: any;
}

export interface ResourceSubGroup {
  groupName: string;
  badge?: string;
  items: ResourceSubItem[];
}

export interface ResourceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortIntro: string;
  purpose: string;
  icon: any;
  ctaText: string;
  path: string;
  previewLabels: string[];
  subGroups?: ResourceSubGroup[];
  subItems?: ResourceSubItem[];
}

export const RESOURCES_HUB_CATEGORIES: ResourceCategory[] = [
  // 01. INDUSTRY RESOURCE HUBS
  {
    id: 'industry-resource-hubs',
    number: '01',
    title: 'Industry Resource Hubs',
    slug: 'industry-resource-hubs',
    shortIntro: 'Explore business knowledge, insights and resources organised around specific industries and their operational challenges.',
    purpose: 'Address vertical-specific compliance, market nuances, margin recovery and revenue architecture.',
    icon: Factory,
    ctaText: 'Explore Industry Hubs',
    path: '/resources-hub/industry-resource-hubs',
    previewLabels: [
      'Technology & Enterprise SaaS',
      'Advanced Manufacturing & Industrial IoT',
      'Banking, Financial Services & FinTech',
      'Healthcare, MedTech & Life Sciences',
      'Automotive & Mobility',
      'Logistics & Supply Chain',
      'Retail & Omnichannel E-Commerce',
      'Telecommunications & Network Infrastructure',
      'Energy, Utilities & CleanTech',
      'Professional & Corporate Services'
    ],
    subItems: [
      { title: 'Technology & Enterprise SaaS', description: 'Net retention rate optimization, expansion motions, and subscription revenue science.', path: '/resources-hub/industry-resource-hubs#technology-enterprise-saas', icon: Cloud, badge: 'SaaS / Cloud' },
      { title: 'Advanced Manufacturing & Industrial IoT', description: 'Industrial margin recovery, smart production, and asset monetization architectures.', path: '/resources-hub/industry-resource-hubs#advanced-manufacturing-industrial-iot', icon: Factory, badge: 'Industrial IoT' },
      { title: 'Banking, Financial Services & FinTech', description: 'Autonomous financial sales, underwriting governance, and BFSI conversion models.', path: '/resources-hub/industry-resource-hubs#banking-financial-services-fintech', icon: Landmark, badge: 'FinTech / BFSI' },
      { title: 'Healthcare, MedTech & Life Sciences', description: 'Compliant clinical sales cycles, provider pipeline acceleration, and value proof.', path: '/resources-hub/industry-resource-hubs#healthcare-medtech-life-sciences', icon: HeartPulse, badge: 'Life Sciences' },
      { title: 'Automotive & Mobility', description: 'Next-gen EV GTM frameworks, Tier-1 supplier distribution mesh, and fleet contracts.', path: '/resources-hub/industry-resource-hubs#automotive-mobility', icon: Car, badge: 'Mobility / EV' },
      { title: 'Logistics & Supply Chain', description: 'Autonomous freight dispatch, contractual yield optimization, and multi-echelon control.', path: '/resources-hub/industry-resource-hubs#logistics-supply-chain', icon: Truck, badge: 'Supply Chain' },
      { title: 'Retail & Omnichannel E-Commerce', description: 'Omnichannel repeat-purchase growth, merchandising analytics, and basket yield.', path: '/resources-hub/industry-resource-hubs#retail-omnichannel-ecommerce', icon: ShoppingBag, badge: 'Commerce' },
      { title: 'Telecommunications & Network Infrastructure', description: '5G network monetization, enterprise bandwidth pipelines, and SLA contract scale.', path: '/resources-hub/industry-resource-hubs#telecommunications-network-infrastructure', icon: Radio, badge: 'Connectivity' },
      { title: 'Energy, Utilities & CleanTech', description: 'Decarbonization capital allocation, PPA negotiation, and industrial utility sales.', path: '/resources-hub/industry-resource-hubs#energy-utilities-cleantech', icon: Flame, badge: 'CleanTech' },
      { title: 'Professional & Corporate Services', description: 'Partner billability leverage, advisory origination, and high-margin retainers.', path: '/resources-hub/industry-resource-hubs#professional-corporate-services', icon: Briefcase, badge: 'Advisory' }
    ]
  },

  // 02. FUNCTIONAL RESOURCE HUBS
  {
    id: 'functional-resource-hubs',
    number: '02',
    title: 'Functional Resource Hubs',
    slug: 'functional-resource-hubs',
    shortIntro: 'Discover resources organised around key commercial revenue functions, executive departments and GTM responsibilities.',
    purpose: 'Empower commercial leaders with tactical playbooks, mathematical models, and operational execution standards.',
    icon: Briefcase,
    ctaText: 'Explore Functional Hubs',
    path: '/resources-hub/functional-resource-hubs',
    previewLabels: [
      'Direct Sales & Enterprise Deal Execution',
      'Marketing & Demand Engineering',
      'Customer Success & Net Revenue Retention',
      'Revenue Operations & Pipeline Intelligence',
      'Pricing, Packaging & Monetization Strategy',
      'Strategic Partnerships & Ecosystem GTM',
      'Sales Enablement, Coaching & Deal Readiness',
      'CFO Office, Unit Economics & Profitability',
      'GTM Systems, CRM & RevTech Architecture',
      'AI Trust, Governance & Commercial Compliance'
    ],
    subItems: [
      { title: 'Direct Sales & Enterprise Deal Execution', description: 'Enterprise deal qualification, committee multi-threading, and deal acceleration.', path: '/resources-hub/functional-resource-hubs#direct-sales-enterprise-deal-execution', icon: Target, badge: 'Enterprise Sales' },
      { title: 'Marketing & Demand Engineering', description: 'Multi-touch demand generation, buyer intent telemetry, and dark-funnel capture.', path: '/resources-hub/functional-resource-hubs#marketing-demand-engineering', icon: TrendingUp, badge: 'Demand Gen' },
      { title: 'Customer Success & Net Revenue Retention', description: 'Account telemetry, churn mitigation, and systematic NRR expansion models.', path: '/resources-hub/functional-resource-hubs#customer-success-net-revenue-retention', icon: Users, badge: 'NRR / Retention' },
      { title: 'Revenue Operations & Pipeline Intelligence', description: 'Unified revenue data, predictive forecasting, quota pacing, and pipeline health.', path: '/resources-hub/functional-resource-hubs#revenue-operations-pipeline-intelligence', icon: Activity, badge: 'RevOps' },
      { title: 'Pricing, Packaging & Monetization Strategy', description: 'Value-based pricing frameworks, usage-tier monetization, and discount governance.', path: '/resources-hub/functional-resource-hubs#pricing-packaging-monetization', icon: DollarSign, badge: 'Monetization' },
      { title: 'Strategic Partnerships & Ecosystem GTM', description: 'Co-selling networks, distributor mesh, reseller growth, and alliance revenue.', path: '/resources-hub/functional-resource-hubs#strategic-partnerships-ecosystem-gtm', icon: Layers, badge: 'Channels / Co-Sell' },
      { title: 'Sales Enablement, Coaching & Deal Readiness', description: 'Commercial readiness, competitive battlecards, and conversation coaching.', path: '/resources-hub/functional-resource-hubs#sales-enablement-deal-readiness', icon: Compass, badge: 'Enablement' },
      { title: 'CFO Office, Unit Economics & Profitability', description: 'Contribution margin governance, CAC payback acceleration, and profit pools.', path: '/resources-hub/functional-resource-hubs#cfo-office-unit-economics-profitability', icon: Scale, badge: 'CFO Office' },
      { title: 'GTM Systems, CRM & RevTech Architecture', description: 'CRM data hygiene, automated workflow routing, and multi-cloud GTM integration.', path: '/resources-hub/functional-resource-hubs#gtm-systems-crm-revtech-architecture', icon: Server, badge: 'RevTech' },
      { title: 'AI Trust, Governance & Commercial Compliance', description: 'Deterministic compliance guardrails, zero model drift, and audit transparency.', path: '/resources-hub/functional-resource-hubs#ai-trust-governance-commercial-compliance', icon: ShieldCheck, badge: 'Governance' }
    ]
  },

  // 03. CASE STUDIES
  {
    id: 'case-studies',
    number: '03',
    title: 'Case Studies',
    slug: 'case-studies',
    shortIntro: 'Explore business examples and customer success stories to understand challenges, approaches and outcomes.',
    purpose: 'Examine boardroom-verified metrics, empirical ROI dossiers and real enterprise transformations.',
    icon: FileText,
    ctaText: 'Explore Case Studies',
    path: '/resources-hub/case-studies',
    previewLabels: [
      'By Industry',
      'By Function',
      'By Technology',
      'By Business Outcome',
      'Customer Success Stories'
    ],
    subItems: [
      { title: 'By Industry', description: 'Review enterprise SaaS, manufacturing, fintech, and healthcare dossiers.', path: '/resources-hub/case-studies/by-industry', icon: Factory, badge: 'Sectors' },
      { title: 'By Function', description: 'Filter by sales velocity, revops overhaul, and customer expansion.', path: '/resources-hub/case-studies/by-function', icon: Target, badge: 'Functions' },
      { title: 'By Technology', description: 'Inspect live deployments of AI SDRs, intent meshes and control planes.', path: '/resources-hub/case-studies/by-technology', icon: BrainCircuit, badge: 'AI Native' },
      { title: 'By Business Outcome', description: 'Empirical proof of margin expansion, pipeline lift and cycle reduction.', path: '/resources-hub/case-studies/by-business-outcome', icon: TrendingUp, badge: 'ROI Outcomes' },
      { title: 'Customer Success Stories', description: 'Direct customer interview archives and multi-year transformation retrospectives.', path: '/resources-hub/case-studies/customer-success-stories', icon: Users, badge: 'Client Voices' }
    ]
  },

  // 04. SALES ACCELERATION HUB
  {
    id: 'sales-acceleration',
    number: '04',
    title: 'Sales Acceleration Hub',
    slug: 'sales-acceleration',
    shortIntro: 'Discover sales methodologies, playbooks, pipeline optimisation frameworks and sales productivity resources.',
    purpose: 'Compress enterprise sales cycle duration and scale multi-threaded quota achievement.',
    icon: Rocket,
    ctaText: 'Explore Sales Acceleration',
    path: '/resources-hub/sales-acceleration-hub',
    previewLabels: [
      'Sales Methodologies',
      'Sales Playbooks',
      'Sales Velocity Models',
      'Pipeline Optimization',
      'Revenue Operations',
      'Account-Based Selling',
      'Territory Planning',
      'Sales Productivity Frameworks'
    ],
    subItems: [
      { title: 'Sales Methodologies', description: 'MEDDPICC, Command of the Message and value-engineering frameworks.', path: '/resources-hub/sales-acceleration-hub#sales-methodologies', icon: Compass, badge: 'Core Method' },
      { title: 'Sales Playbooks', description: 'Step-by-step objection handling, executive mutual close plans and scripts.', path: '/resources-hub/sales-acceleration-hub#sales-playbooks', icon: BookOpen, badge: 'Execution' },
      { title: 'Sales Velocity Models', description: 'Mathematical simulation of deal volume, win rates, ASP and cycle days.', path: '/resources-hub/sales-acceleration-hub#sales-velocity-models', icon: Gauge, badge: 'Velocity' },
      { title: 'Pipeline Optimization', description: 'Stage-gate hygiene audits and dark-funnel leakage remediation.', path: '/resources-hub/sales-acceleration-hub#pipeline-optimization', icon: Sliders, badge: 'Hygiene' },
      { title: 'Revenue Operations', description: 'Unified CRM pipeline telemetry and automated data integrity controls.', path: '/resources-hub/sales-acceleration-hub#revenue-operations', icon: Workflow, badge: 'RevOps' },
      { title: 'Account-Based Selling', description: 'Tier-1 target account mapping and multi-stakeholder orchestration.', path: '/resources-hub/sales-acceleration-hub#account-based-selling', icon: Target, badge: 'ABS' },
      { title: 'Territory Planning', description: 'Market capacity modeling and deterministic quota allocation.', path: '/resources-hub/sales-acceleration-hub#territory-planning', icon: Layers, badge: 'Planning' },
      { title: 'Sales Productivity Frameworks', description: 'Rep time-allocation rebalancing and administrative overhead removal.', path: '/resources-hub/sales-acceleration-hub#sales-productivity-frameworks', icon: TrendingUp, badge: 'Productivity' }
    ]
  },

  // 05. GTM & REVENUE OPERATIONS HUB
  {
    id: 'gtm-revenue-operations',
    number: '05',
    title: 'GTM & Revenue Operations Hub',
    slug: 'gtm-revenue-operations',
    shortIntro: 'Explore frameworks and resources to improve go-to-market execution, revenue operations and revenue growth.',
    purpose: 'Bridge strategy and operational execution with deterministic go-to-market architecture.',
    icon: Workflow,
    ctaText: 'Explore GTM & RevOps',
    path: '/resources-hub/gtm-revenue-operations-hub',
    previewLabels: [
      'ICP Frameworks',
      'Buyer Journey Models',
      'Funnel Optimization',
      'RevOps Frameworks',
      'Revenue Intelligence',
      'Forecasting Models',
      'Capacity Planning',
      'Revenue Growth Frameworks'
    ],
    subItems: [
      { title: 'ICP Frameworks', description: 'Firmographic, technographic and behavioral ideal customer definitions.', path: '/resources-hub/gtm-revenue-operations-hub#icp-frameworks', icon: Target, badge: 'Targeting' },
      { title: 'Buyer Journey Models', description: 'Multi-touch decision journey maps from latent trigger to renewal.', path: '/resources-hub/gtm-revenue-operations-hub#buyer-journey-models', icon: GitMerge, badge: 'Journey' },
      { title: 'Funnel Optimization', description: 'Conversion rate diagnostics and bottleneck elimination across stages.', path: '/resources-hub/gtm-revenue-operations-hub#funnel-optimization', icon: Sliders, badge: 'Conversion' },
      { title: 'RevOps Frameworks', description: 'End-to-end data models connecting marketing, sales and retention.', path: '/resources-hub/gtm-revenue-operations-hub#revops-frameworks', icon: Workflow, badge: 'Alignment' },
      { title: 'Revenue Intelligence', description: 'Real-time pipeline intent signals and conversational diagnostic traces.', path: '/resources-hub/gtm-revenue-operations-hub#revenue-intelligence', icon: BrainCircuit, badge: 'Telemetry' },
      { title: 'Forecasting Models', description: 'Triangulated statistical forecasts mitigating subjective rep bias.', path: '/resources-hub/gtm-revenue-operations-hub#forecasting-models', icon: BarChart3, badge: 'Accuracy' },
      { title: 'Capacity Planning', description: 'Headcount ramp dynamics and quota attainment elasticity models.', path: '/resources-hub/gtm-revenue-operations-hub#capacity-planning', icon: Users, badge: 'Capacity' },
      { title: 'Revenue Growth Frameworks', description: 'Multi-vector growth blueprints for scalable enterprise expansion.', path: '/resources-hub/gtm-revenue-operations-hub#revenue-growth-frameworks', icon: TrendingUp, badge: 'Growth' }
    ]
  },

  // 06. ANALYTICS & DECISION SCIENCE HUB (SIMPLIFIED TO 6 CONSOLIDATED CATEGORIES)
  {
    id: 'analytics-decision-science',
    number: '06',
    title: 'Analytics & Decision Science Hub',
    slug: 'analytics-decision-science',
    shortIntro: 'Discover analytical frameworks, business KPIs, mathematical models and comparative analytics to support better decisions.',
    purpose: 'Transform intuitive boardroom opinions into empirical, mathematical revenue physics.',
    icon: BarChart3,
    ctaText: 'Explore Analytics & Decision Science',
    path: '/resources-hub/advanced-analytical-tools-sales-acceleration',
    previewLabels: [
      'KPI & Executive Intelligence',
      'Revenue & Pipeline Analytics',
      'Predictive Revenue Intelligence',
      'Marketing & Customer Economics',
      'Advanced Analytical Tools',
      'Industry Benchmarks & Performance'
    ],
    subItems: [
      {
        title: 'KPI & Executive Intelligence',
        description: 'Comprehensive KPI libraries, balanced executive scorecards, and real-time command dashboards.',
        path: '/resources-hub/advanced-analytical-tools-sales-acceleration#kpi-executive-intelligence',
        icon: BarChart3,
        badge: 'Executive Dashboards'
      },
      {
        title: 'Revenue & Pipeline Analytics',
        description: 'Deterministic revenue velocity, funnel entropy, stage leakage diagnostics, and opportunity aging.',
        path: '/resources-hub/advanced-analytical-tools-sales-acceleration#revenue-pipeline-analytics',
        icon: Sliders,
        badge: 'Velocity & Leakage'
      },
      {
        title: 'Predictive Revenue Intelligence',
        description: 'Bayesian deal win probability, Monte Carlo forecasting simulations, confidence intervals, and churn hazard.',
        path: '/resources-hub/advanced-analytical-tools-sales-acceleration#predictive-revenue-intelligence',
        icon: BrainCircuit,
        badge: 'Probabilistic AI'
      },
      {
        title: 'Marketing & Customer Economics',
        description: 'Probabilistic CLV models, CAC acquisition efficiency, Shapley attribution, and marketing mix optimization.',
        path: '/resources-hub/advanced-analytical-tools-sales-acceleration#marketing-customer-economics',
        icon: DollarSign,
        badge: 'Unit Economics'
      },
      {
        title: 'Advanced Analytical Tools for Sales Acceleration',
        description: 'Flagship Marketing Debt → Revenue Gap interactive engine, 25 mathematical models, GTM stack, and Revenue Physics.',
        path: '/resources-hub/advanced-analytical-tools-sales-acceleration#advanced-analytical-tools',
        icon: Cpu,
        badge: 'Flagship 25 Models'
      },
      {
        title: 'Industry Benchmarks & Performance',
        description: 'Cross-vertical quartile baselines, gross margin scorecards, and comparative sales efficiency analysis.',
        path: '/resources-hub/advanced-analytical-tools-sales-acceleration#industry-benchmarks',
        icon: TrendingUp,
        badge: 'Quartile Baselines'
      }
    ]
  },

  // 07. AI & AGENTIC AUTOMATION HUB
  {
    id: 'ai-agentic-automation',
    number: '07',
    title: 'AI & Agentic Automation Hub',
    slug: 'ai-agentic-automation',
    shortIntro: 'Explore AI use cases, agent architectures, autonomous agents and responsible AI operating models.',
    purpose: 'Deploy autonomous cognitive workforces that research, engage and execute commercial motions 24/7.',
    icon: BrainCircuit,
    ctaText: 'Explore AI & Agentic Automation',
    path: '/resources-hub/ai-agentic-automation-hub',
    previewLabels: [
      'AI Use Cases',
      'AI Agents',
      'Autonomous Agents',
      'Agent Architectures',
      'Multi-Agent Systems',
      'AI Governance',
      'AI Security',
      'Agentic Operating Models'
    ],
    subItems: [
      { title: 'AI Use Cases', description: 'Enterprise AI applications connected to measurable commercial revenue outcomes.', path: '/resources-hub/ai-agentic-automation-hub#ai-use-cases', icon: Zap, badge: 'Enterprise' },
      { title: 'AI Agents', description: 'Task-oriented intelligent agents that execute defined business workflows.', path: '/resources-hub/ai-agentic-automation-hub#ai-agents', icon: Bot, badge: 'Agents' },
      { title: 'Autonomous Agents', description: 'Goal-driven agents capable of planning, executing, and adapting tasks within defined boundaries.', path: '/resources-hub/ai-agentic-automation-hub#autonomous-agents', icon: BrainCircuit, badge: 'Autonomous' },
      { title: 'Agent Architectures', description: 'Technical patterns for agent orchestration, memory, tools, and decision execution.', path: '/resources-hub/ai-agentic-automation-hub#agent-architectures', icon: Workflow, badge: 'Architecture' },
      { title: 'Multi-Agent Systems', description: 'Coordinated agent networks working together across complex, multi-functional enterprise workflows.', path: '/resources-hub/ai-agentic-automation-hub#multi-agent-systems', icon: Layers, badge: 'Swarms' },
      { title: 'AI Governance', description: 'Enterprise oversight, accountability, auditability, and responsible AI operational controls.', path: '/resources-hub/ai-agentic-automation-hub#ai-governance', icon: ShieldCheck, badge: 'Governance' },
      { title: 'AI Security', description: 'Enterprise security, identity, data protection, and proactive risk management for AI systems.', path: '/resources-hub/ai-agentic-automation-hub#ai-security', icon: Shield, badge: 'Security' },
      { title: 'Agentic Operating Models', description: 'Organizational architectures for orchestrating hybrid human and AI-agent workforces together.', path: '/resources-hub/ai-agentic-automation-hub#agentic-operating-models', icon: Sliders, badge: 'Operations' }
    ]
  },

  // 08. AUTOMATION EXCELLENCE HUB
  {
    id: 'automation-excellence',
    number: '08',
    title: 'Automation Excellence Hub',
    slug: 'automation-excellence',
    shortIntro: 'Discover how intelligent automation connects sales, marketing, customer engagement and revenue operations into a coordinated ecosystem.',
    purpose: 'Eliminate process friction, automate repetitive manual activities, and orchestrate AI-powered revenue workflows.',
    icon: Zap,
    ctaText: 'Explore Automation Excellence',
    path: '/resources-hub/automation-excellence',
    previewLabels: [
      'Sales Workflow Automation',
      'Marketing Automation',
      'AI-Powered Lead Automation',
      'CRM & Data Automation',
      'AI Agent Workflows',
      'Business Process Automation',
      'Revenue Operations Automation',
      'Intelligent System Integration'
    ],
    subItems: [
      { title: 'Sales Workflow Automation', description: 'Lead assignment, follow-up cadence, and deal movement automation.', path: '/resources-hub/automation-excellence#sales-workflow-automation', icon: Workflow, badge: 'Sales Execution' },
      { title: 'Marketing Automation', description: 'Nurture journeys, lifecycle campaigns, and intent-driven personalization.', path: '/resources-hub/automation-excellence#marketing-automation', icon: Layers, badge: 'Demand Gen' },
      { title: 'AI-Powered Lead Automation', description: 'Multi-variable scoring, lead enrichment, and qualification routing.', path: '/resources-hub/automation-excellence#ai-lead-automation', icon: Bot, badge: 'Lead Scoring' },
      { title: 'CRM & Data Automation', description: 'De-duplication, continuous data hygiene, and automated activity logging.', path: '/resources-hub/automation-excellence#crm-data-automation', icon: Cpu, badge: 'Data Hygiene' },
      { title: 'AI Agent Workflows', description: 'Multi-agent orchestration, intent routing, and autonomous research.', path: '/resources-hub/automation-excellence#ai-agent-workflows', icon: BrainCircuit, badge: 'Cognitive Agents' },
      { title: 'Business Process Automation', description: 'Approval routings, contract generation, and discount governance.', path: '/resources-hub/automation-excellence#business-process-automation', icon: Zap, badge: 'Process Efficiency' },
      { title: 'Revenue Operations Automation', description: 'Cross-functional telemetry, pipeline velocity, and forecast rollups.', path: '/resources-hub/automation-excellence#revenue-operations-automation', icon: BarChart3, badge: 'RevOps' },
      { title: 'Intelligent System Integration', description: 'Bi-directional webhooks, unified schemas, and enterprise data mesh.', path: '/resources-hub/automation-excellence#system-integration', icon: GitMerge, badge: 'API Integration' }
    ]
  },

  // 09. CONTINUOUS SALES IMPROVEMENT HUB
  {
    id: 'continuous-sales-improvement',
    number: '09',
    title: 'Continuous Sales Improvement Hub',
    slug: 'continuous-sales-improvement',
    shortIntro: 'Discover practical improvement methodologies that help organizations identify sales inefficiencies, eliminate pipeline friction, and create measurable revenue gains.',
    purpose: 'Apply battle-tested Lean, Six Sigma, and operational excellence rigor to modern revenue engines.',
    icon: Award,
    ctaText: 'Explore Continuous Improvement',
    path: '/resources-hub/continuous-sales-improvement-hub',
    previewLabels: [
      'Lean Sales',
      'Six Sigma',
      'Kaizen',
      'Theory of Constraints',
      'Total Quality Management',
      'Operational Excellence',
      'Baldrige Framework',
      'EFQM Excellence Model'
    ],
    subItems: [
      { title: 'Lean Sales', description: 'Waste elimination in the sales pipeline: removing deal drag and over-qualification.', path: '/resources-hub/continuous-sales-improvement-hub#lean-sales', icon: Sliders, badge: 'Waste Elimination' },
      { title: 'Six Sigma', description: 'DMAIC methodologies minimizing variance in enterprise forecasting accuracy.', path: '/resources-hub/continuous-sales-improvement-hub#six-sigma', icon: BarChart3, badge: 'Variance Reduction' },
      { title: 'Kaizen', description: 'Continuous micro-optimizations across weekly sales cadence and outreach.', path: '/resources-hub/continuous-sales-improvement-hub#kaizen', icon: TrendingUp, badge: 'Continuous Learning' },
      { title: 'Theory of Constraints', description: 'Goldratt drum-buffer-rope applied to sales pipeline bottleneck stages.', path: '/resources-hub/continuous-sales-improvement-hub#theory-of-constraints', icon: Target, badge: 'Bottleneck Throughput' },
      { title: 'Total Quality Management', description: 'Total Quality Management principles applied to enterprise client onboarding.', path: '/resources-hub/continuous-sales-improvement-hub#total-quality-management', icon: CheckCircle2, badge: 'Customer Quality' },
      { title: 'Operational Excellence', description: 'Cross-functional cadences aligning product, marketing and customer success.', path: '/resources-hub/continuous-sales-improvement-hub#operational-excellence', icon: Award, badge: 'RevOps Scale' },
      { title: 'Baldrige Framework', description: 'Performance excellence criteria for organizational competitiveness and leadership.', path: '/resources-hub/continuous-sales-improvement-hub#baldrige-framework', icon: Landmark, badge: 'Organizational Maturity' },
      { title: 'EFQM Excellence Model', description: 'Direction, execution and results management framework for sustainable transformation.', path: '/resources-hub/continuous-sales-improvement-hub#efqm-excellence-model', icon: Shield, badge: 'Sustainable Value' }
    ]
  },

  // 10. STRATEGY & TRANSFORMATION HUB
  {
    id: 'strategy-transformation',
    number: '10',
    title: 'Strategy & Transformation Hub',
    slug: 'strategy-transformation',
    shortIntro: 'Discover strategic frameworks and transformation resources that support organisational direction and business improvement.',
    purpose: 'Align boardroom capital allocation with frontline commercial execution.',
    icon: Compass,
    ctaText: 'Explore Strategy & Transformation',
    path: '/resources-hub#strategy-transformation',
    previewLabels: [
      'Strategy Maps',
      'Balanced Scorecard',
      'KPI Frameworks',
      'OKRs',
      'Value Creation Frameworks',
      'Digital Transformation',
      'Business Architecture',
      'Operating Models'
    ],
    subItems: [
      { title: 'Strategy Maps', description: 'Visual cause-and-effect roadmaps linking internal capabilities to financial returns.', path: '/resources-hub#strategy-maps', icon: Compass, badge: 'Roadmaps' },
      { title: 'Balanced Scorecard', description: 'Four-perspective balance: Financial, Customer, Internal and Growth.', path: '/resources-hub#balanced-scorecard', icon: CheckCircle2, badge: 'Scorecard' },
      { title: 'KPI Frameworks', description: 'Cascading departmental metrics ensuring strategic alignment from C-suite to reps.', path: '/resources-hub#kpi-frameworks', icon: Sliders, badge: 'Cascades' },
      { title: 'OKRs', description: 'Objectives & Key Results frameworks designed for high-velocity quarterly pivots.', path: '/resources-hub#okrs', icon: Target, badge: 'OKRs' },
      { title: 'Value Creation Frameworks', description: 'EBITDA expansion and enterprise multiple acceleration blueprints.', path: '/resources-hub#value-creation-frameworks', icon: DollarSign, badge: 'EBITDA' },
      { title: 'Digital Transformation', description: 'Legacy architecture modernization and cloud-native commercial migration.', path: '/resources-hub#digital-transformation', icon: Cloud, badge: 'Transformation' },
      { title: 'Business Architecture', description: 'Enterprise capability mapping connecting value streams to operational platforms.', path: '/resources-hub#business-architecture', icon: Layers, badge: 'Architecture' },
      { title: 'Operating Models', description: 'Target operating models (TOM) for global revenue scaling and regional governance.', path: '/resources-hub#operating-models', icon: Workflow, badge: 'TOM' }
    ]
  },

  // 11. FRAMEWORKS & TEMPLATES HUB
  {
    id: 'frameworks-templates',
    number: '11',
    title: 'Frameworks & Templates Hub',
    slug: 'frameworks-templates',
    shortIntro: 'Access practical business frameworks, assessment templates, maturity models, financial justification tools, checklists, and playbooks.',
    purpose: 'Equip enterprise leaders with structured execution resources, financial ROI models, and operational SOPs to accelerate revenue performance.',
    icon: FileText,
    ctaText: 'Explore Frameworks & Templates',
    path: '/resources-hub/frameworks-templates-hub',
    previewLabels: [
      'Playbooks',
      'Assessment Templates',
      'Maturity Models',
      'Business Cases',
      'ROI Models',
      'Checklists',
      'SOPs',
      'Workshops'
    ],
    subItems: [
      { title: 'Playbooks', description: 'Curated enterprise playbooks for outbound prospecting and multi-threading.', path: '/resources-hub/frameworks-templates-hub#playbooks', icon: BookOpen, badge: 'Playbooks' },
      { title: 'Assessment Templates', description: 'Diagnostic audit templates to evaluate operational bottlenecks and pipeline drag.', path: '/resources-hub/frameworks-templates-hub#assessment-templates', icon: CheckCircle2, badge: 'Diagnostics' },
      { title: 'Maturity Models', description: '5-stage progression matrices to assess organizational capability readiness.', path: '/resources-hub/frameworks-templates-hub#maturity-models', icon: Award, badge: 'Maturity' },
      { title: 'Business Cases', description: 'Executive justification templates for C-suite and board investment sign-offs.', path: '/resources-hub/frameworks-templates-hub#business-cases', icon: DollarSign, badge: 'Justification' },
      { title: 'ROI Models', description: 'Financial return calculation templates and payback timeline models.', path: '/resources-hub/frameworks-templates-hub#roi-models', icon: Calculator, badge: 'ROI' },
      { title: 'Checklists', description: 'Stage-gate verification checklists for deal closure and technical validation.', path: '/resources-hub/frameworks-templates-hub#checklists', icon: Sliders, badge: 'Hygiene' },
      { title: 'SOPs', description: 'Standard Operating Procedures for RevOps CRM hygiene and pipeline staging.', path: '/resources-hub/frameworks-templates-hub#sops', icon: Workflow, badge: 'SOPs' },
      { title: 'Workshops', description: 'Facilitation agendas and canvas templates for executive strategy alignment.', path: '/resources-hub/frameworks-templates-hub#workshops', icon: Users, badge: 'Canvas' }
    ]
  },

  // 12. TOOLS & CALCULATORS HUB
  {
    id: 'tools-calculators',
    number: '12',
    title: 'Tools & Calculators Hub',
    slug: 'tools-calculators',
    shortIntro: 'Explore practical calculators, diagnostic assessments, and decision-support models designed to help businesses evaluate revenue performance and unit economics.',
    purpose: 'Quantify pipeline velocity, evaluate customer acquisition costs (CAC/LTV), model investment ROI, and assess AI readiness.',
    icon: Calculator,
    ctaText: 'Explore Tools & Calculators',
    path: '/resources-hub/tools-calculators-hub',
    previewLabels: [
      'Revenue Calculator',
      'Sales Velocity Calculator',
      'CAC / LTV Calculator',
      'ROI Calculator',
      'AI Readiness Assessment',
      'Automation Readiness Assessment',
      'Lean Waste Assessment',
      'Sales Process Automation Assessment',
      'GTM Maturity Assessment'
    ],
    subItems: [
      { title: 'Revenue Calculator', description: 'Interactive suite modeling top-line revenue from acquisition and account expansion.', path: '/resources-hub/tools-calculators-hub#revenue-performance', icon: Calculator, badge: 'Live Calculator' },
      { title: 'Sales Velocity Calculator', description: 'Simulate throughput acceleration by adjusting win rate, deal value, and cycle days.', path: '/resources-hub/tools-calculators-hub#revenue-performance', icon: Gauge, badge: 'Live Calculator' },
      { title: 'CAC / LTV Calculator', description: 'Unit economics calculator quantifying customer lifetime value and capital payback period.', path: '/resources-hub/tools-calculators-hub#customer-economics', icon: DollarSign, badge: 'Live Calculator' },
      { title: 'ROI Calculator', description: 'Empirical ROI calculator demonstrating net financial impact of AI sales technology.', path: '/resources-hub/tools-calculators-hub#business-roi', icon: TrendingUp, badge: 'Live Calculator' },
      { title: 'AI Readiness Assessment', description: 'Diagnostic evaluation across data hygiene, technical infrastructure, and governance.', path: '/resources-hub/tools-calculators-hub#ai-readiness', icon: BrainCircuit, badge: 'Assessment' },
      { title: 'Automation Readiness Assessment', description: 'Process candidate scoring rubric for hyperautomation and agent prioritization.', path: '/resources-hub/tools-calculators-hub#ai-readiness', icon: Zap, badge: 'Assessment' },
      { title: 'Lean Waste Assessment', description: 'Diagnostic audit quantifying commercial pipeline non-value-added time and annual drag.', path: '/resources-hub/tools-calculators-hub#sales-optimization', icon: Sliders, badge: 'Assessment' },
      { title: 'Sales Process Automation Assessment', description: 'Milestone coverage evaluation across 8 core stages from lead capture to forecasting.', path: '/resources-hub/tools-calculators-hub#gtm-maturity', icon: Workflow, badge: 'Assessment' },
      { title: 'GTM Maturity Assessment', description: 'Benchmark organizational alignment across 10 strategic commercial dimensions.', path: '/resources-hub/tools-calculators-hub#gtm-maturity', icon: Award, badge: 'Assessment' }
    ]
  }
];

