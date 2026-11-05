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

  // 06. ANALYTICS & DECISION SCIENCE HUB
  {
    id: 'analytics-decision-science',
    number: '06',
    title: 'Analytics & Decision Science Hub',
    slug: 'analytics-decision-science',
    shortIntro: 'Discover analytical frameworks, business KPIs, mathematical models and comparative analytics to support better decisions.',
    purpose: 'Transform intuitive boardroom opinions into empirical, mathematical revenue physics.',
    icon: BarChart3,
    ctaText: 'Explore Analytics & Decision Science',
    path: '/resources-hub#analytics-decision-science',
    previewLabels: [
      'Foundational Analytics',
      'Advanced Analytical Tools (25 Models)',
      'Comparative Analytics'
    ],
    subGroups: [
      {
        groupName: 'Foundational Analytics',
        badge: 'Core Metrics',
        items: [
          { title: 'KPI Libraries', description: 'Comprehensive catalog of leading and lagging enterprise revenue metrics.', path: '/resources-hub#kpi-libraries', icon: BookOpen, badge: 'KPIs' },
          { title: 'Scorecards', description: 'Executive performance scorecards balanced across growth and retention.', path: '/resources-hub#scorecards', icon: CheckCircle2, badge: 'Scorecards' },
          { title: 'Dashboards', description: 'Real-time telemetry dashboards for executive command centers.', path: '/resources-hub#dashboards', icon: Activity, badge: 'Telemetry' },
          { title: 'Benchmarking', description: 'Cross-industry baseline benchmarks for gross margins and CAC payback.', path: '/resources-hub#benchmarking', icon: Sliders, badge: 'Baselines' }
        ]
      },
      {
        groupName: 'Advanced Analytical Tools',
        badge: 'Approved 25-Model List',
        items: [
          { title: 'Revenue Velocity', description: 'Deterministic throughput equation: (Opportunities × Win Rate × ASP) / Cycle.', path: '/resources-hub#revenue-velocity', icon: Gauge, badge: 'Model 01' },
          { title: 'Funnel Entropy', description: 'Quantification of pipeline disorder and deal stalling probability.', path: '/resources-hub#funnel-entropy', icon: Activity, badge: 'Model 02' },
          { title: 'Markov Funnel Analysis', description: 'Stochastic state-transition modeling between pipeline stages.', path: '/resources-hub#markov-funnel', icon: GitMerge, badge: 'Model 03' },
          { title: 'Bayesian Win Probability', description: 'Dynamic probability updates based on engagement signal evidence.', path: '/resources-hub#bayesian-win-probability', icon: Sliders, badge: 'Model 04' },
          { title: 'Monte Carlo Forecasting', description: '10,000-run simulation curves providing probabilistic ARR ranges.', path: '/resources-hub#monte-carlo-forecasting', icon: BarChart3, badge: 'Model 05' },
          { title: 'Churn Prediction', description: 'Early-warning telemetry identifying account health degradation.', path: '/resources-hub#churn-prediction', icon: ShieldAlert, badge: 'Model 06' },
          { title: 'LTV Models', description: 'Cohort-based customer lifetime value projections with expansion curves.', path: '/resources-hub#ltv-models', icon: DollarSign, badge: 'Model 07' },
          { title: 'Marketing Attribution', description: 'Shapley-value algorithmic multi-touch attribution models.', path: '/resources-hub#marketing-attribution', icon: Target, badge: 'Model 08' },
          { title: 'Pipeline Leakage', description: 'Identification of covert revenue decay across qualification boundaries.', path: '/resources-hub#pipeline-leakage', icon: Sliders, badge: 'Model 09' },
          { title: 'Opportunity Aging', description: 'Survival analysis modeling deal velocity drop-off over dwell time.', path: '/resources-hub#opportunity-aging', icon: Activity, badge: 'Model 10' },
          { title: '25+ Analytical Cards', description: 'The complete enterprise mathematical suite (reference list for future development).', path: '/resources-hub#25-analytical-cards', icon: Boxes, badge: '25 Models' }
        ]
      },
      {
        groupName: 'Comparative Analytics',
        badge: 'Competitive Intelligence',
        items: [
          { title: 'Industry Benchmarks', description: 'Quartile peer comparisons across ARR cohorts and verticals.', path: '/resources-hub#industry-benchmarks', icon: Landmark, badge: 'Quartiles' },
          { title: 'Competitor Analysis', description: 'Win/loss telemetry and pricing power competitive matrices.', path: '/resources-hub#competitor-analysis', icon: Target, badge: 'Win/Loss' },
          { title: 'Revenue Benchmarking', description: 'Contribution margin and Rule of 40 operational scorecards.', path: '/resources-hub#revenue-benchmarking', icon: TrendingUp, badge: 'Rule of 40' },
          { title: 'GTM Benchmarking', description: 'SDR efficiency, AE attainment and pipeline coverage multipliers.', path: '/resources-hub#gtm-benchmarking', icon: Workflow, badge: 'Efficiency' },
          { title: 'Maturity Assessments', description: '5-stage organizational maturity rubrics for enterprise revenue engines.', path: '/resources-hub#maturity-assessments', icon: Award, badge: 'Maturity' }
        ]
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
    path: '/resources-hub#ai-agentic-automation',
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
      { title: 'AI Use Cases', description: 'Proven commercial enterprise use cases delivering measurable bottom-line ROI.', path: '/resources-hub#ai-use-cases', icon: Zap, badge: 'Enterprise' },
      { title: 'AI Agents', description: 'Task-oriented intelligence engines accelerating manual sales workflows.', path: '/resources-hub#ai-agents', icon: Bot, badge: 'Agents' },
      { title: 'Autonomous Agents', description: 'Fully self-directed cognitive systems operating without human-in-the-loop bottlenecks.', path: '/resources-hub#autonomous-agents', icon: BrainCircuit, badge: 'Autonomous' },
      { title: 'Agent Architectures', description: 'Memory mesh, tool invocation protocols and state-machine design patterns.', path: '/resources-hub#agent-architectures', icon: Workflow, badge: 'Architecture' },
      { title: 'Multi-Agent Systems', description: 'Coordinated agent swarms executing synchronized research, messaging and CRM updates.', path: '/resources-hub#multi-agent-systems', icon: Layers, badge: 'Swarms' },
      { title: 'AI Governance', description: 'Audit logging, prompt guardrails and deterministic compliance monitoring.', path: '/resources-hub#ai-governance', icon: ShieldCheck, badge: 'Governance' },
      { title: 'AI Security', description: 'Private VPC inference, zero-data-leakage architecture and cryptographic isolation.', path: '/resources-hub#ai-security', icon: Shield, badge: 'Security' },
      { title: 'Agentic Operating Models', description: 'Organizational structures orchestrating human teams and autonomous agentic workforces.', path: '/resources-hub#agentic-operating-models', icon: Sliders, badge: 'Operations' }
    ]
  },

  // 08. AUTOMATION EXCELLENCE HUB
  {
    id: 'automation-excellence',
    number: '08',
    title: 'Automation Excellence Hub',
    slug: 'automation-excellence',
    shortIntro: 'Discover automation approaches and technologies that help improve workflows, productivity and operational efficiency.',
    purpose: 'Eliminate manual friction points and orchestrate hyper-automated enterprise processes.',
    icon: Zap,
    ctaText: 'Explore Automation Excellence',
    path: '/resources-hub#automation-excellence',
    previewLabels: [
      'RPA',
      'Workflow Automation',
      'Process Mining',
      'Industrial Robotics',
      'Hyperautomation',
      'Low-Code Platforms',
      'AI Automation',
      'Autonomous Operations'
    ],
    subItems: [
      { title: 'RPA', description: 'Robotic process automation scripts bridging legacy systems and modern pipelines.', path: '/resources-hub#rpa', icon: Cpu, badge: 'RPA' },
      { title: 'Workflow Automation', description: 'Event-driven multi-system triggers eliminating manual handoffs.', path: '/resources-hub#workflow-automation', icon: Workflow, badge: 'Workflows' },
      { title: 'Process Mining', description: 'Event-log analysis mapping actual operational bottlenecks versus theory.', path: '/resources-hub#process-mining', icon: Activity, badge: 'Mining' },
      { title: 'Industrial Robotics', description: 'Physical automation frameworks for smart warehousing and manufacturing plants.', path: '/resources-hub#industrial-robotics', icon: Factory, badge: 'Robotics' },
      { title: 'Hyperautomation', description: 'End-to-end integration combining RPA, AI and low-code orchestration.', path: '/resources-hub#hyperautomation', icon: Zap, badge: 'Hyper' },
      { title: 'Low-Code Platforms', description: 'Accelerated application scaffolding for departmental business logic.', path: '/resources-hub#low-code-platforms', icon: Boxes, badge: 'Low-Code' },
      { title: 'AI Automation', description: 'Cognitive document processing and unstructured data transformation.', path: '/resources-hub#ai-automation', icon: BrainCircuit, badge: 'Cognitive' },
      { title: 'Autonomous Operations', description: 'Self-healing workflows and closed-loop process execution planes.', path: '/resources-hub#autonomous-operations', icon: Sliders, badge: 'Self-Healing' }
    ]
  },

  // 09. CONTINUOUS SALES IMPROVEMENT HUB
  {
    id: 'continuous-sales-improvement',
    number: '09',
    title: 'Continuous Sales Improvement Hub',
    slug: 'continuous-sales-improvement',
    shortIntro: 'Explore structured improvement methodologies and operational excellence frameworks.',
    purpose: 'Apply battle-tested manufacturing quality rigor to commercial revenue engines.',
    icon: Award,
    ctaText: 'Explore Continuous Improvement',
    path: '/resources-hub#continuous-sales-improvement',
    previewLabels: [
      'Lean',
      'Six Sigma',
      'Kaizen',
      'Theory of Constraints',
      'TQM',
      'Operational Excellence',
      'Baldrige Framework',
      'EFQM'
    ],
    subItems: [
      { title: 'Lean', description: 'Waste elimination in the sales pipeline: removing deal drag and over-qualification.', path: '/resources-hub#lean', icon: Sliders, badge: 'Lean' },
      { title: 'Six Sigma', description: 'DMAIC methodologies minimizing variance in enterprise forecasting accuracy.', path: '/resources-hub#six-sigma', icon: BarChart3, badge: 'Six Sigma' },
      { title: 'Kaizen', description: 'Continuous micro-optimizations across weekly sales cadence and outreach.', path: '/resources-hub#kaizen', icon: TrendingUp, badge: 'Kaizen' },
      { title: 'Theory of Constraints', description: 'Goldratt drum-buffer-rope applied to sales pipeline bottleneck stages.', path: '/resources-hub#theory-of-constraints', icon: Target, badge: 'TOC' },
      { title: 'TQM', description: 'Total Quality Management principles applied to enterprise client onboarding.', path: '/resources-hub#tqm', icon: CheckCircle2, badge: 'Quality' },
      { title: 'Operational Excellence', description: 'Cross-functional cadences aligning product, marketing and customer success.', path: '/resources-hub#operational-excellence', icon: Award, badge: 'OpEx' },
      { title: 'Baldrige Framework', description: 'Performance excellence criteria for organizational competitiveness and leadership.', path: '/resources-hub#baldrige-framework', icon: Landmark, badge: 'Baldrige' },
      { title: 'EFQM', description: 'European Foundation for Quality Management business model assessment tools.', path: '/resources-hub#efqm', icon: Shield, badge: 'EFQM' }
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
    shortIntro: 'Access practical business frameworks, templates, checklists and structured resources for business execution.',
    purpose: 'Equip operational teams with ready-to-deploy blueprints, SOPs and execution rubrics.',
    icon: FileText,
    ctaText: 'Explore Frameworks & Templates',
    path: '/resources-hub#frameworks-templates',
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
      { title: 'Playbooks', description: 'Curated enterprise playbooks for outbound prospecting and multi-threading.', path: '/resources-hub#playbooks', icon: BookOpen, badge: 'Playbooks' },
      { title: 'Assessment Templates', description: 'Diagnostic audit templates to evaluate operational bottlenecks and pipeline drag.', path: '/resources-hub#assessment-templates', icon: CheckCircle2, badge: 'Diagnostics' },
      { title: 'Maturity Models', description: '5-stage progression matrices to assess organizational capability readiness.', path: '/resources-hub#maturity-models', icon: Award, badge: 'Maturity' },
      { title: 'Business Cases', description: 'Executive justification templates for C-suite and board investment sign-offs.', path: '/resources-hub#business-cases', icon: DollarSign, badge: 'Justification' },
      { title: 'ROI Models', description: 'Financial return calculation templates and payback timeline models.', path: '/resources-hub#roi-models', icon: Calculator, badge: 'ROI' },
      { title: 'Checklists', description: 'Stage-gate verification checklists for deal closure and technical validation.', path: '/resources-hub#checklists', icon: Sliders, badge: 'Hygiene' },
      { title: 'SOPs', description: 'Standard Operating Procedures for RevOps CRM hygiene and pipeline staging.', path: '/resources-hub#sops', icon: Workflow, badge: 'SOPs' },
      { title: 'Workshops', description: 'Facilitation agendas and canvas templates for executive strategy alignment.', path: '/resources-hub#workshops', icon: Users, badge: 'Canvas' }
    ]
  },

  // 12. TOOLS & CALCULATORS HUB
  {
    id: 'tools-calculators',
    number: '12',
    title: 'Tools & Calculators Hub',
    slug: 'tools-calculators',
    shortIntro: 'Explore practical calculators and assessments designed to help businesses measure performance, evaluate opportunities and understand improvement areas.',
    purpose: 'Quantify operational leakage, assess capability readiness and calculate payback dynamics with precision.',
    icon: Calculator,
    ctaText: 'Explore Tools & Calculators',
    path: '/resources-hub#tools-calculators',
    previewLabels: [
      'Revenue Calculators',
      'Sales Velocity Calculator',
      'CAC / LTV Calculator',
      'ROI Calculator',
      'AI Readiness Assessment',
      'Automation Readiness Assessment',
      'Lean Waste Assessment',
      'Robotics Suitability Assessment',
      'GTM Maturity Assessment'
    ],
    subItems: [
      { title: 'Revenue Calculators', description: 'Interactive suite modeling mid-funnel pipeline stall and annual leakage.', path: '/sales-calculators', icon: Calculator, badge: 'Live Tool' },
      { title: 'Sales Velocity Calculator', description: 'Simulate throughput acceleration by adjusting win rate and cycle days.', path: '/sales-calculators', icon: Gauge, badge: 'Live Tool' },
      { title: 'CAC / LTV Calculator', description: 'Unit economics calculator quantifying payback period and customer margin.', path: '/sales-calculators', icon: DollarSign, badge: 'Live Tool' },
      { title: 'ROI Calculator', description: 'Empirical ROI calculator demonstrating financial impact of AI sales agents.', path: '/sales-calculators', icon: TrendingUp, badge: 'Live Tool' },
      { title: 'AI Readiness Assessment', description: 'Diagnostic evaluation of enterprise data hygiene and infrastructure readiness.', path: '/resources-hub#ai-readiness', icon: BrainCircuit, badge: 'Assessment' },
      { title: 'Automation Readiness Assessment', description: 'Process candidate scoring rubric for hyperautomation prioritization.', path: '/resources-hub#automation-readiness', icon: Zap, badge: 'Assessment' },
      { title: 'Lean Waste Assessment', description: 'Diagnostic audit quantifying commercial pipeline non-value-added time.', path: '/resources-hub#lean-waste', icon: Sliders, badge: 'Assessment' },
      { title: 'Robotics Suitability Assessment', description: 'Feasibility evaluation for physical robotics deployment in manufacturing.', path: '/resources-hub#robotics-suitability', icon: Factory, badge: 'Assessment' },
      { title: 'GTM Maturity Assessment', description: 'Benchmark organizational alignment against Fortune 1000 best practices.', path: '/resources-hub#gtm-maturity', icon: Award, badge: 'Assessment' }
    ]
  }
];

