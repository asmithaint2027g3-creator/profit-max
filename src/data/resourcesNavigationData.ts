import {
  Factory,
  Building2,
  FileText,
  TrendingUp,
  BarChart3,
  BrainCircuit,
  Compass,
  Briefcase,
  Layers,
  Target,
  Users,
  ShieldCheck,
  Award,
  Zap,
  Calculator,
  Workflow,
  Cpu,
  Gauge,
  Sliders,
  DollarSign,
  Scale,
  LineChart,
  Bot,
  Activity,
  GitMerge,
  Shield,
  BookOpen,
  ShoppingBag,
  Cloud,
  CheckCircle2,
  Sparkles,
  Server
} from 'lucide-react';

export interface ResourceSubmenuItem {
  id: string;
  title: string;
  description: string;
  anchor: string;
  badge: string;
  icon: any;
}

export interface ResourceMainMenu {
  id: string;
  number: string;
  title: string;
  route: string;
  shortIntro: string;
  purpose: string;
  icon: any;
  submenus: ResourceSubmenuItem[];
}

export const RESOURCES_MAIN_MENUS: ResourceMainMenu[] = [
  // MAIN MENU 01 — INDUSTRY & FUNCTIONAL INTELLIGENCE
  {
    id: 'industry-functional-intelligence',
    number: '01',
    title: 'Industry & Functional Intelligence',
    route: '/resources-hub/industry-functional-intelligence',
    shortIntro: 'Cross-vertical market nuances, value-chain mechanics, and functional commercial operating models.',
    purpose: 'Address industry-specific compliance, revenue architecture, and departmental execution playbooks.',
    icon: Building2,
    submenus: [
      {
        id: 'industry-resource-hubs',
        title: 'Industry Resource Hubs',
        description: 'Bespoke revenue frameworks across 10 major global industry verticals.',
        anchor: 'industry-resource-hubs',
        badge: 'Vertical Markets',
        icon: Factory
      },
      {
        id: 'commerce-technology-industries',
        title: 'Commerce & Technology Industries',
        description: 'SaaS, FinTech, E-Commerce, and Telecom digital transformation playbooks.',
        anchor: 'commerce-technology-industries',
        badge: 'Digital Economy',
        icon: Cloud
      },
      {
        id: 'functional-resource-hubs',
        title: 'Functional Resource Hubs',
        description: 'Departmental execution frameworks from Direct Sales to Customer Success.',
        anchor: 'functional-resource-hubs',
        badge: 'Commercial Roles',
        icon: Briefcase
      },
      {
        id: 'operations-enterprise-functions',
        title: 'Operations & Enterprise Functions',
        description: 'RevOps, CFO Unit Economics, GTM Systems, and Commercial AI Governance.',
        anchor: 'operations-enterprise-functions',
        badge: 'Enterprise RevOps',
        icon: Layers
      },
      {
        id: 'industry-functional-playbooks',
        title: 'Industry & Functional Playbooks',
        description: 'Tactical execution playbooks mapping specific vertical challenges to functional solutions.',
        anchor: 'industry-functional-playbooks',
        badge: 'Playbooks',
        icon: BookOpen
      }
    ]
  },

  // MAIN MENU 02 — CASE STUDIES & SUCCESS STORIES
  {
    id: 'case-studies-success-stories',
    number: '02',
    title: 'Case Studies & Success Stories',
    route: '/resources-hub/case-studies-success-stories',
    shortIntro: 'Empirical boardroom proof, verified transformation dossiers, and quantified commercial ROI.',
    purpose: 'Examine verified customer inflection points, root-cause analyses, and measured business outcomes.',
    icon: FileText,
    submenus: [
      {
        id: 'case-studies-by-industry',
        title: 'Case Studies by Industry',
        description: 'Enterprise dossiers across SaaS, Manufacturing, FinTech, and Healthcare.',
        anchor: 'case-studies-by-industry',
        badge: 'Vertical Dossiers',
        icon: Factory
      },
      {
        id: 'case-studies-by-function',
        title: 'Case Studies by Function',
        description: 'Documented transformations across Outbound Sales, RevOps, and Customer Retention.',
        anchor: 'case-studies-by-function',
        badge: 'Functional Impact',
        icon: Target
      },
      {
        id: 'case-studies-by-technology',
        title: 'Case Studies by Technology',
        description: 'Production deployments of Autonomous SDRs, Intent Meshes, and Bayesian telemetry.',
        anchor: 'case-studies-by-technology',
        badge: 'AI Systems',
        icon: BrainCircuit
      },
      {
        id: 'case-studies-by-business-outcome',
        title: 'Case Studies by Business Outcome',
        description: 'Verified metric lifts: +240% Pipeline, +32% Margin Recovery, -48% Cycle Days.',
        anchor: 'case-studies-by-business-outcome',
        badge: 'Quantified ROI',
        icon: TrendingUp
      },
      {
        id: 'customer-success-stories',
        title: 'Customer Success Stories',
        description: 'In-depth executive narratives, operational retrospectives, and client testimonials.',
        anchor: 'customer-success-stories',
        badge: 'Executive Voices',
        icon: Users
      }
    ]
  },

  // MAIN MENU 03 — SALES, GTM & REVENUE GROWTH
  {
    id: 'sales-gtm-revenue-growth',
    number: '03',
    title: 'Sales, GTM & Revenue Growth',
    route: '/resources-hub/sales-gtm-revenue-growth',
    shortIntro: 'End-to-end commercial architecture: demand engineering, pipeline acceleration, and deterministic RevOps.',
    purpose: 'Scale predictable enterprise pipeline, eliminate sales friction, and optimize sales velocity.',
    icon: TrendingUp,
    submenus: [
      {
        id: 'sales-methodologies-playbooks',
        title: 'Sales Methodologies & Playbooks',
        description: 'MEDDPICC, Command of the Message, objection handling, and executive mutual plans.',
        anchor: 'sales-methodologies-playbooks',
        badge: 'Methodologies',
        icon: BookOpen
      },
      {
        id: 'sales-velocity-pipeline-optimization',
        title: 'Sales Velocity & Pipeline Optimization',
        description: 'Mathematical deal velocity formulas, stage hygiene, and bottleneck elimination.',
        anchor: 'sales-velocity-pipeline-optimization',
        badge: 'Velocity Engine',
        icon: Gauge
      },
      {
        id: 'account-territory-strategy',
        title: 'Account & Territory Strategy',
        description: 'Tier-1 target account prioritization, territory capacity modeling, and quota math.',
        anchor: 'account-territory-strategy',
        badge: 'Territory Design',
        icon: Layers
      },
      {
        id: 'icp-buyer-intelligence',
        title: 'ICP & Buyer Intelligence',
        description: 'Firmographic & technographic ICP scoring, buyer journey mapping, and intent signals.',
        anchor: 'icp-buyer-intelligence',
        badge: 'Targeting Matrix',
        icon: Target
      },
      {
        id: 'funnel-revenue-intelligence',
        title: 'Funnel & Revenue Intelligence',
        description: 'Full-funnel leakage diagnostics, conversion elasticity, and pipeline telemetry.',
        anchor: 'funnel-revenue-intelligence',
        badge: 'Leakage Control',
        icon: Sliders
      },
      {
        id: 'revops-revenue-forecasting',
        title: 'RevOps & Revenue Forecasting',
        description: 'Triangulated statistical forecasts, CRM schema integrity, and automated pipeline governance.',
        anchor: 'revops-revenue-forecasting',
        badge: 'Forecast Accuracy',
        icon: BarChart3
      }
    ]
  },

  // MAIN MENU 04 — ANALYTICS & DECISION SCIENCE
  {
    id: 'analytics-decision-science',
    number: '04',
    title: 'Analytics & Decision Science',
    route: '/resources-hub/analytics-decision-science',
    shortIntro: 'Quantitative revenue physics: 25 parametric models, live dashboards, and statistical decision engines.',
    purpose: 'Replace subjective sales forecasts with empirical mathematics and algorithmic probability.',
    icon: BarChart3,
    submenus: [
      {
        id: 'foundational-analytics',
        title: 'Foundational Analytics',
        description: 'Core revenue equations, pipeline velocity mathematics, and executive KPI scorecards.',
        anchor: 'foundational-analytics',
        badge: 'Core Mathematics',
        icon: Calculator
      },
      {
        id: 'advanced-analytical-models',
        title: 'Advanced Analytical Models',
        description: 'All 25 Parametric Models + Interactive Marketing Debt → Revenue Gap Dashboard.',
        anchor: 'advanced-analytical-models',
        badge: 'Flagship 25 Models',
        icon: Cpu
      },
      {
        id: 'revenue-pipeline-analytics',
        title: 'Revenue & Pipeline Analytics',
        description: 'Stage conversion elasticity, funnel entropy modeling, and opportunity decay functions.',
        anchor: 'revenue-pipeline-analytics',
        badge: 'Pipeline Dynamics',
        icon: LineChart
      },
      {
        id: 'predictive-statistical-analytics',
        title: 'Predictive & Statistical Analytics',
        description: 'Bayesian win probability, Monte Carlo simulations, and Shapley marketing attribution.',
        anchor: 'predictive-statistical-analytics',
        badge: 'Probabilistic AI',
        icon: BrainCircuit
      },
      {
        id: 'comparative-analytics-benchmarking',
        title: 'Comparative Analytics & Benchmarking',
        description: 'Industry quartile benchmarks, gross margin scorecards, and CAC efficiency baselines.',
        anchor: 'comparative-analytics-benchmarking',
        badge: 'Quartile Baselines',
        icon: Award
      }
    ]
  },

  // MAIN MENU 05 — AI, AUTOMATION & OPERATIONAL EXCELLENCE
  {
    id: 'ai-automation-operational-excellence',
    number: '05',
    title: 'AI, Automation & Operational Excellence',
    route: '/resources-hub/ai-automation-operational-excellence',
    shortIntro: 'Autonomous agent swarms, deterministic workflow integration, and Lean/Six Sigma sales discipline.',
    purpose: 'Deploy cognitive workforces, eliminate administrative drag, and enforce commercial governance.',
    icon: BrainCircuit,
    submenus: [
      {
        id: 'ai-use-cases-agents',
        title: 'AI Use Cases & Agents',
        description: 'Enterprise AI applications, task-oriented agents, and 24/7 autonomous pipeline generation.',
        anchor: 'ai-use-cases-agents',
        badge: 'Autonomous Agents',
        icon: Bot
      },
      {
        id: 'agentic-ai-architectures',
        title: 'Agentic AI Architectures',
        description: 'Multi-agent orchestration patterns, memory buffers, tool meshes, and decision boundaries.',
        anchor: 'agentic-ai-architectures',
        badge: 'System Topology',
        icon: Workflow
      },
      {
        id: 'ai-governance-security',
        title: 'AI Governance & Security',
        description: 'EU AI Act compliance, model drift monitoring, zero data-leakage, and human-in-the-loop controls.',
        anchor: 'ai-governance-security',
        badge: 'Trust & Compliance',
        icon: ShieldCheck
      },
      {
        id: 'workflow-process-automation',
        title: 'Workflow & Process Automation',
        description: 'CRM data hygiene automation, automated lead routing, and CPQ approval triggers.',
        anchor: 'workflow-process-automation',
        badge: 'Process Automation',
        icon: Zap
      },
      {
        id: 'industrial-automation-robotics',
        title: 'Industrial Automation & Robotics',
        description: 'Operational tech interfaces, order-to-cash integration, and smart manufacturing telemetry.',
        anchor: 'industrial-automation-robotics',
        badge: 'Operational Tech',
        icon: Server
      },
      {
        id: 'continuous-improvement-excellence',
        title: 'Continuous Improvement & Excellence',
        description: 'Lean Sales waste removal, Six Sigma DMAIC variance reduction, Kaizen, and TOC bottlenecks.',
        anchor: 'continuous-improvement-excellence',
        badge: 'Lean & Six Sigma',
        icon: Award
      }
    ]
  },

  // MAIN MENU 06 — STRATEGY, FRAMEWORKS & BUSINESS TOOLS
  {
    id: 'strategy-frameworks-business-tools',
    number: '06',
    title: 'Strategy, Frameworks & Business Tools',
    route: '/resources-hub/strategy-frameworks-business-tools',
    shortIntro: 'Executive strategic roadmaps, balanced scorecards, board business cases, and interactive financial tools.',
    purpose: 'Bridge boardroom capital allocation with frontline commercial execution and verified ROI.',
    icon: Compass,
    submenus: [
      {
        id: 'strategy-business-transformation',
        title: 'Strategy & Business Transformation',
        description: 'Executive strategy maps, Target Operating Models (TOM), and digital revenue scaling.',
        anchor: 'strategy-business-transformation',
        badge: 'Executive Strategy',
        icon: Compass
      },
      {
        id: 'performance-management-frameworks',
        title: 'Performance & Management Frameworks',
        description: 'Balanced Scorecard, cascading OKRs, and enterprise value creation blueprints.',
        anchor: 'performance-management-frameworks',
        badge: 'Balanced Scorecard',
        icon: CheckCircle2
      },
      {
        id: 'business-frameworks-templates',
        title: 'Business Frameworks & Templates',
        description: 'Standard Operating Procedures (SOPs), deal checklists, and RevOps governance charters.',
        anchor: 'business-frameworks-templates',
        badge: 'Templates & SOPs',
        icon: FileText
      },
      {
        id: 'business-cases-roi-models',
        title: 'Business Cases & ROI Models',
        description: 'C-suite justification templates, payback period models, and capital allocation frameworks.',
        anchor: 'business-cases-roi-models',
        badge: 'Capital Justification',
        icon: DollarSign
      },
      {
        id: 'maturity-assessments-workshops',
        title: 'Maturity Assessments & Workshops',
        description: '5-stage GTM maturity matrices, interactive diagnostic audits, and executive canvas agendas.',
        anchor: 'maturity-assessments-workshops',
        badge: 'Diagnostic Sprints',
        icon: Users
      },
      {
        id: 'business-tools-calculators',
        title: 'Business Tools & Calculators',
        description: 'Interactive Revenue Velocity, CAC/LTV, and AI Readiness diagnostic suites.',
        anchor: 'business-tools-calculators',
        badge: 'Interactive Tools',
        icon: Calculator
      }
    ]
  }
];
