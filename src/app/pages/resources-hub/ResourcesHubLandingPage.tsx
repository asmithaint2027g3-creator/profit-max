import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  TrendingUp,
  BarChart3,
  BrainCircuit,
  Calculator,
  Compass,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  Building2,
  Workflow,
  Factory,
  Zap,
  ArrowUpRight,
  ChevronRight,
  Search,
  Briefcase,
  Activity,
  Cpu,
  Lock,
  LineChart,
  FileText,
  Boxes,
  HelpCircle,
  Clock,
  Shield,
  DollarSign,
  PieChart,
  Award,
  Layers3,
  Flame,
  Check
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function ResourcesHubLandingPage() {
  const location = useLocation();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
      document.title = 'Executive Resources | ProfitMachines Business Intelligence & Frameworks';
      trackEvent({ eventName: 'PAGE_VIEW_RESOURCES', category: 'NAVIGATION' });

      if (location.hash) {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    } catch (e) {
      console.warn('ResourcesLandingPage init warning:', e);
    }
  }, [location]);

  // Selected objective filter
  const [selectedObjective, setSelectedObjective] = useState<number>(0);

  // ── SECTION 02: 6 MAIN RESOURCE CATEGORIES DATA ──
  const sixCategories = [
    {
      num: '01',
      title: 'Industry & Functional Intelligence',
      route: '/resources-hub/industry-functional-intelligence',
      description: 'Explore industry-specific business intelligence, functional knowledge, enterprise workflows, value-chain insights, operational practices, and industry-specific execution playbooks.',
      image: '/images/industry-saas.png',
      badge: 'Vertical Architecture',
      areas: [
        'Industry Resource Centers',
        'Commerce & Technology Industries',
        'Functional Resource Centers',
        'Operations & Enterprise Functions',
        'Industry & Functional Playbooks'
      ],
      topics: [
        'SaaS CAC Payback & Expansion Playbooks',
        'FinTech Regulatory Risk & Compliance Pipelines',
        'Discrete Manufacturing Supply Telemetry',
        'Healthcare HIPAA-Compliant GTM Architecture'
      ],
      ctaText: 'Explore Industry Intelligence'
    },
    {
      num: '02',
      title: 'Case Studies & Success Stories',
      route: '/resources-hub/case-studies-success-stories',
      description: 'Explore documented customer transformations, industry-specific business challenges, functional improvements, technology implementations, and verified commercial outcomes.',
      image: '/images/hero-revenue-acceleration.png',
      badge: 'Verified Proof',
      areas: [
        'Case Studies by Industry',
        'Case Studies by Function',
        'Case Studies by Technology',
        'Case Studies by Business Outcome',
        'Customer Success Stories'
      ],
      topics: [
        '+$38M ARR Sourced via Autonomous Outbound',
        '-48% Enterprise Sales Cycle Compression',
        '5–15 Gross Margin Points Recovered',
        '138% Net Revenue Retention (NRR) Compounding'
      ],
      ctaText: 'Explore Case Studies'
    },
    {
      num: '03',
      title: 'Sales, GTM & Revenue Growth',
      route: '/resources-hub/sales-gtm-revenue-growth',
      description: 'Explore end-to-end sales execution, go-to-market strategies, customer acquisition, buyer intelligence, pipeline optimization, revenue operations, and forecasting methodologies.',
      image: '/images/demand-pulse-dashboard.png',
      badge: 'Commercial Velocity',
      areas: [
        'Sales Methodologies & Playbooks',
        'Sales Velocity & Pipeline Optimization',
        'Account & Territory Strategy',
        'ICP & Buyer Intelligence',
        'Funnel & Revenue Intelligence',
        'RevOps & Revenue Forecasting'
      ],
      topics: [
        'MEDDPICC & BANT Algorithmic Qualification',
        'Dynamic Territory Capacity Balancing',
        'Multi-Touch Intent Signal Synthesis',
        'Forecast Variance Tightening (<2% Margin)'
      ],
      ctaText: 'Explore Sales & GTM'
    },
    {
      num: '04',
      title: 'Analytics & Decision Science',
      route: '/resources-hub/analytics-decision-science',
      description: 'Access foundational analytics, advanced mathematical models, revenue intelligence, predictive analysis, statistical methods, and comparative performance benchmarking.',
      image: '/images/hero-data-intelligence.png',
      badge: 'Mathematical Models',
      areas: [
        'Foundational Analytics',
        'Advanced Analytical Models (25 Models)',
        'Revenue & Pipeline Analytics',
        'Predictive & Statistical Analytics',
        'Comparative Analytics & Benchmarking'
      ],
      topics: [
        'Marketing Debt → Revenue Gap Telemetry',
        'Bayesian Opportunity Win Probability',
        'Monte Carlo Pipeline Simulation',
        'Probabilistic Customer Lifetime Value (CLV)'
      ],
      ctaText: 'Explore Decision Science'
    },
    {
      num: '05',
      title: 'AI, Automation & Operational Excellence',
      route: '/resources-hub/ai-automation-operational-excellence',
      description: 'Discover enterprise AI applications, autonomous agents, agentic architectures, intelligent workflows, AI governance, automation systems, industrial robotics, and continuous improvement methodologies.',
      image: '/images/hero-agentic-ai.png',
      badge: 'Agentic Architectures',
      areas: [
        'AI Use Cases & Agents',
        'Agentic AI Architectures',
        'AI Governance & Security',
        'Workflow & Process Automation',
        'Industrial Automation & Robotics',
        'Continuous Improvement & Excellence'
      ],
      topics: [
        'Autonomous SDR & RevOps Swarm Coordination',
        'EU AI Act & ISO 42001 Model Governance',
        'Human-in-the-Loop Override Guardrails',
        'Robotics Process Suitability Scoring'
      ],
      ctaText: 'Explore AI & Automation'
    },
    {
      num: '06',
      title: 'Strategy, Frameworks & Business Tools',
      route: '/resources-hub/strategy-frameworks-business-tools',
      description: 'Explore executive strategy frameworks, enterprise transformation methods, performance management systems, business templates, ROI models, maturity assessments, and practical decision-support tools.',
      image: '/images/hero-profit-pool.png',
      badge: 'Executive Tooling',
      areas: [
        'Strategy & Business Transformation',
        'Performance & Management Frameworks',
        'Business Frameworks & Templates',
        'Business Cases & ROI Models',
        'Maturity Assessments & Workshops',
        'Business Tools & Calculators'
      ],
      topics: [
        'Kaplan-Norton 4-Perspective Strategy Mapping',
        'Balanced Scorecards & Cascading OKRs',
        'Enterprise ROI & Payback Calculators',
        'GTM & Automation Maturity Diagnostics'
      ],
      ctaText: 'Explore Frameworks & Tools'
    }
  ];

  // ── SECTION 03: 6 BUSINESS OBJECTIVES ──
  const businessObjectives = [
    {
      id: 0,
      title: 'Increase Revenue',
      icon: TrendingUp,
      headline: 'Expand Top-Line ARR with High-Velocity Pipeline Capture',
      desc: 'Systematically address top-of-funnel drop-offs, eliminate dark-funnel blind spots, and expand contract values through empirical buyer willingness-to-pay modeling.',
      relevantCategories: ['Sales, GTM & Revenue Growth', 'Strategy, Frameworks & Business Tools'],
      links: [
        { label: 'Funnel & Revenue Intelligence', path: '/resources-hub/sales-gtm-revenue-growth#funnel-revenue-intelligence' },
        { label: 'Business Cases & ROI Models', path: '/resources-hub/strategy-frameworks-business-tools#business-cases-roi-models' },
        { label: 'Sales Velocity Optimization', path: '/resources-hub/sales-gtm-revenue-growth#sales-velocity-pipeline-optimization' }
      ]
    },
    {
      id: 1,
      title: 'Improve Sales Performance',
      icon: Target,
      headline: 'Compress Sales Cycles & Eliminate Late-Stage Deal Stalls',
      desc: 'Equip enterprise deal teams with predictive Bayesian health scoring, automated proposal generation, and algorithmic qualification criteria to protect rep bandwidth.',
      relevantCategories: ['Sales, GTM & Revenue Growth', 'Case Studies & Success Stories'],
      links: [
        { label: 'Sales Methodologies & Playbooks', path: '/resources-hub/sales-gtm-revenue-growth#sales-methodologies-playbooks' },
        { label: 'Case Studies by Function', path: '/resources-hub/case-studies-success-stories#case-studies-by-function' },
        { label: 'Revenue Velocity Calculator', path: '/resources-hub/strategy-frameworks-business-tools#business-tools-calculators' }
      ]
    },
    {
      id: 2,
      title: 'Adopt AI & Automation',
      icon: BrainCircuit,
      headline: 'Deploy Governed Multi-Agent AI Swarms with Zero Regret',
      desc: 'Transition from speculative pilots to production agent swarms with deterministic human-in-the-loop guardrails, full audit trails, and strict data sovereignty.',
      relevantCategories: ['AI, Automation & Operational Excellence'],
      links: [
        { label: 'AI Use Cases & Autonomous Agents', path: '/resources-hub/ai-automation-operational-excellence#ai-use-cases-agents' },
        { label: 'Agentic AI Architectures', path: '/resources-hub/ai-automation-operational-excellence#agentic-ai-architectures' },
        { label: 'AI Governance & Security Controls', path: '/resources-hub/ai-automation-operational-excellence#ai-governance-security' }
      ]
    },
    {
      id: 3,
      title: 'Make Data-Driven Decisions',
      icon: BarChart3,
      headline: 'Replace Intuitive Guesswork with Mathematical Revenue Physics',
      desc: 'Access 25 proven mathematical models, eliminate executive ARR definition friction with Single Source of Truth architecture, and forecast with under 2% variance.',
      relevantCategories: ['Analytics & Decision Science'],
      links: [
        { label: 'Foundational Analytics Architecture', path: '/resources-hub/analytics-decision-science#foundational-analytics' },
        { label: '25 Advanced Analytical Models', path: '/resources-hub/analytics-decision-science#advanced-analytical-models' },
        'Marketing Debt Telemetry'
      ]
    },
    {
      id: 4,
      title: 'Expand into New Markets',
      icon: Compass,
      headline: 'Navigate Vertical Constraints & Cross-Border Corridors',
      desc: 'Unlock adjacent market revenue with vertical-specific regulatory blueprints, localized value-chain maps, and validated ICP positioning templates.',
      relevantCategories: ['Industry & Functional Intelligence'],
      links: [
        { label: 'Industry Resource Centers', path: '/resources-hub/industry-functional-intelligence#industry-resource-hubs' },
        { label: 'Commerce & Technology Industries', path: '/resources-hub/industry-functional-intelligence#commerce-technology-industries' },
        { label: 'Industry & Functional Playbooks', path: '/resources-hub/industry-functional-intelligence#industry-functional-playbooks' }
      ]
    },
    {
      id: 5,
      title: 'Improve Business Performance',
      icon: Activity,
      headline: 'Recover Margin Leakage & Operationalize Board Strategy',
      desc: 'Align organizational execution with shareholder mandates through balanced scorecards, lean waste elimination, and forensic contract discounting recovery.',
      relevantCategories: ['Strategy, Frameworks & Business Tools'],
      links: [
        { label: 'Strategy & Business Transformation', path: '/resources-hub/strategy-frameworks-business-tools#strategy-business-transformation' },
        { label: 'Performance & Management Frameworks', path: '/resources-hub/strategy-frameworks-business-tools#performance-management-frameworks' },
        { label: 'Maturity Assessments & Diagnostics', path: '/resources-hub/strategy-frameworks-business-tools#maturity-assessments-workshops' }
      ]
    }
  ];

  // ── SECTION 04: 12 FEATURED ANALYTICAL MODELS ──
  const featuredModels = [
    {
      id: 'velocity',
      name: 'Revenue Velocity Equation',
      code: 'MODEL-01',
      formula: 'V = (N × W × S) / L',
      summary: 'Quantifies daily pipeline cash production rate combining deal volume, win rate, average ACV, and sales cycle duration.'
    },
    {
      id: 'lead-decay',
      name: 'Lead Decay Function',
      code: 'MODEL-02',
      formula: 'Q(t) = Q₀ · e^(-λt)',
      summary: 'Models the exponential decay of buyer qualification and responsiveness as outreach latency increases over time.'
    },
    {
      id: 'crm-decay',
      name: 'CRM Data Decay Index',
      code: 'MODEL-03',
      formula: 'D(t) = 1 - (1 - δ)^t',
      summary: 'Calculates the degradation rate of contact records, job changes, and buying committee stability inside the CRM.'
    },
    {
      id: 'entropy',
      name: 'Funnel Entropy Model',
      code: 'MODEL-04',
      formula: 'H(X) = -Σ p(x) log₂(p(x))',
      summary: 'Measures structural disorder, friction points, and deal leakage across multi-stage customer journey transitions.'
    },
    {
      id: 'bayesian-win',
      name: 'Bayesian Win Probability',
      code: 'MODEL-05',
      formula: 'P(W|E) = [P(E|W) · P(W)] / P(E)',
      summary: 'Calculates objective deal close probabilities updated continuously with conversational telemetry and milestone verification.'
    },
    {
      id: 'markov-funnel',
      name: 'Markov Sales Funnel Model',
      code: 'MODEL-06',
      formula: 'P_ij = Pr(S_{t+1}=j | S_t=i)',
      summary: 'Stochastic matrix capturing stage transition probabilities and calculating absorption rates into closed-won states.'
    },
    {
      id: 'pipeline-leakage',
      name: 'Pipeline Leakage Function',
      code: 'MODEL-07',
      formula: 'L_{stage} = 1 - (O_{exit} / O_{enter})',
      summary: 'Pinpoints exact operational handoffs where pipeline value slips between marketing, SDRs, AEs, and customer success.'
    },
    {
      id: 'monte-carlo',
      name: 'Monte Carlo Revenue Simulation',
      code: 'MODEL-08',
      formula: 'R̂ = (1/M) Σ R_m',
      summary: 'Runs 10,000 statistical iterations across deal outcomes to establish confidence intervals for quarterly board commitments.'
    },
    {
      id: 'clv',
      name: 'Probabilistic Customer Lifetime Value',
      code: 'MODEL-09',
      formula: 'CLV = Σ [M_t · S_t / (1+d)^t]',
      summary: 'Estimates net discounted margin contribution over customer lifespan adjusted for cohort-based retention probabilities.'
    },
    {
      id: 'shapley',
      name: 'Marketing Attribution (Shapley)',
      code: 'MODEL-10',
      formula: 'φ_i = Σ [|S|!(|N|-|S|-1)! / |N|!] · Δv',
      summary: 'Applies cooperative game theory to allocate fair revenue attribution across all touchpoints in complex enterprise sales cycles.'
    },
    {
      id: 'churn-prob',
      name: 'Customer Churn Probability',
      code: 'MODEL-11',
      formula: 'P(C) = 1 / [1 + e^(-(β₀ + Σ β_i X_i))]',
      summary: 'Logistic regression forecasting renewal risk based on seat utilization drops, executive sponsor departure, and support ticket velocity.'
    },
    {
      id: 'revenue-os',
      name: 'Revenue Operating System Equation',
      code: 'MODEL-12',
      formula: 'ROS = Σ ω_k · Φ_k(Telemetry)',
      summary: 'Synthesizes real-time pipeline velocity, governance adherence, and margin realization into a unified operational score.'
    }
  ];

  // ── SECTION 05: FEATURED BUSINESS KNOWLEDGE ──
  const businessKnowledgeItems = [
    {
      category: 'Executive Strategy Insights',
      title: 'Defensible Growth: Aligning Shareholder ROI with Field Execution',
      desc: 'How Fortune 1000 boards bridge the gap between high-level margin expansion mandates and frontline sales rep behaviors.',
      audience: 'CEOs & Board Directors',
      type: 'Executive Briefing',
      path: '/resources-hub/strategy-frameworks-business-tools#strategy-business-transformation'
    },
    {
      category: 'Sales & GTM Playbooks',
      title: 'The Algorithmic Qualification Blueprint: MEDDPICC to Contract',
      desc: 'Standardizing qualification gates across enterprise buying committees to eliminate late-stage discount concessions.',
      audience: 'CROs & VP Sales',
      type: 'Execution Playbook',
      path: '/resources-hub/sales-gtm-revenue-growth#sales-methodologies-playbooks'
    },
    {
      category: 'Industry Intelligence Guides',
      title: 'Healthcare EHR & Life Sciences Regulatory Procurement Protocols',
      desc: 'Navigating 14-stakeholder hospital purchasing committees while satisfying HIPAA, FDA, and institutional security requirements.',
      audience: 'Healthcare Business Leaders',
      type: 'Vertical Dossier',
      path: '/resources-hub/industry-functional-intelligence#industry-resource-hubs'
    },
    {
      category: 'AI Implementation Guides',
      title: 'Autonomous SDR Fleets & Production Agent Mesh Governance',
      desc: 'Step-by-step engineering roadmap for provisioning autonomous outbound agent swarms with human-in-the-loop safeguards.',
      audience: 'CTOs & Heads of AI',
      type: 'Technical Architecture',
      path: '/resources-hub/ai-automation-operational-excellence#agentic-ai-architectures'
    },
    {
      category: 'Business Transformation Frameworks',
      title: 'Forensic Margin Leakage Recovery: 4-Week Diagnostic Method',
      desc: 'Auditing enterprise commercial agreements to isolate unmonetized cost-to-serve overhead and discretionary discounting.',
      audience: 'CFOs & Strategy Heads',
      type: 'Diagnostic Framework',
      path: '/resources-hub/strategy-frameworks-business-tools#performance-management-frameworks'
    },
    {
      category: 'Customer Success Case Studies',
      title: 'Compounding Net Revenue Retention to 138% via Behavioral Sentinels',
      desc: 'How an enterprise cloud provider automated pre-churn warnings and expansion triggers across $180M in recurring contracts.',
      audience: 'CROs & CCOs',
      type: 'Verified Case Study',
      path: '/resources-hub/case-studies-success-stories#customer-success-stories'
    }
  ];

  // ── SECTION 06: BUSINESS TOOLS & CALCULATORS DIRECTORY ──
  const businessTools = [
    {
      title: 'Revenue Velocity Calculator',
      badge: 'Interactive Tool',
      status: 'Live & Available',
      desc: 'Calculate your organization’s daily cash production velocity and benchmark against industry peers.',
      path: '/resources-hub/strategy-frameworks-business-tools#business-tools-calculators',
      icon: TrendingUp
    },
    {
      title: 'Customer Acquisition Cost (CAC) Calculator',
      badge: 'Interactive Tool',
      status: 'Live & Available',
      desc: 'Determine fully loaded CAC including sales overhead, marketing campaigns, and SDR onboarding ramp costs.',
      path: '/resources-hub/strategy-frameworks-business-tools#business-tools-calculators',
      icon: DollarSign
    },
    {
      title: 'LTV:CAC Ratio Diagnostic',
      badge: 'Interactive Tool',
      status: 'Live & Available',
      desc: 'Assess unit economic viability and quantify expansion potential across enterprise customer segments.',
      path: '/resources-hub/strategy-frameworks-business-tools#business-tools-calculators',
      icon: PieChart
    },
    {
      title: 'ROI & Capital Payback Model',
      badge: 'Interactive Tool',
      status: 'Live & Available',
      desc: 'Model projected return on investment, net present value, and payback horizon for transformation initiatives.',
      path: '/resources-hub/strategy-frameworks-business-tools#business-tools-calculators',
      icon: Calculator
    },
    {
      title: 'AI Readiness Assessment',
      badge: 'Diagnostic Instrument',
      status: 'Live & Available',
      desc: 'Evaluate data pipeline maturity, CRM governance hygiene, and organizational readiness for autonomous agent fleets.',
      path: '/resources-hub/strategy-frameworks-business-tools#maturity-assessments-workshops',
      icon: BrainCircuit
    },
    {
      title: 'GTM Maturity Assessment',
      badge: 'Diagnostic Instrument',
      status: 'Live & Available',
      desc: 'Score your go-to-market engine across discovery, enablement, telemetry, and revenue operations.',
      path: '/resources-hub/strategy-frameworks-business-tools#maturity-assessments-workshops',
      icon: Compass
    },
    {
      title: 'Automation Readiness Assessment',
      badge: 'Diagnostic Instrument',
      status: 'Live & Available',
      desc: 'Identify repetitive administrative friction points suitable for governed autonomous agent delegation.',
      path: '/resources-hub/strategy-frameworks-business-tools#maturity-assessments-workshops',
      icon: Workflow
    },
    {
      title: 'Lean Waste Assessment',
      badge: 'Diagnostic Instrument',
      status: 'Diagnostic Sprint',
      desc: 'Audit the 8 operational wastes across sales handover, quote generation, and contract redlining cycles.',
      path: '/resources-hub/strategy-frameworks-business-tools#business-frameworks-templates',
      icon: Layers
    },
    {
      title: 'Robotics Suitability Assessment',
      badge: 'Diagnostic Instrument',
      status: 'Diagnostic Sprint',
      desc: 'Evaluate physical and software robotic automation candidates against compliance and capital payback thresholds.',
      path: '/resources-hub/strategy-frameworks-business-tools#business-frameworks-templates',
      icon: Cpu
    }
  ];

  // ── SECTION 07: AUDIENCE PERSONAS ──
  const audiencePersonas = [
    {
      role: 'CEO / Business Leaders',
      focus: 'Enterprise Strategy & Shareholder Value',
      desc: 'Align enterprise capital allocation with profitable market expansion and board-level risk governance.',
      priorities: [
        'Defensible Market Moats',
        'EBITDA Margin Expansion',
        'Enterprise AI Governance'
      ],
      path: '/resources-hub/strategy-frameworks-business-tools#strategy-business-transformation',
      icon: Building2
    },
    {
      role: 'CTO / CIO',
      focus: 'Enterprise AI Architecture & Infrastructure',
      desc: 'Provision governed autonomous agent swarms, enforce data privacy invariants, and modernize legacy IT stacks.',
      priorities: [
        'Zero-Data Retention Architecture',
        'API Telemetry Integration',
        'EU AI Act / ISO 42001 Compliance'
      ],
      path: '/resources-hub/ai-automation-operational-excellence#agentic-ai-architectures',
      icon: Cpu
    },
    {
      role: 'CRO / Sales Leaders',
      focus: 'Revenue Operations & Pipeline Velocity',
      desc: 'Eliminate subjective forecasting variance, compress sales cycles, and scale rep quota attainment systematically.',
      priorities: [
        'Bayesian Deal Health Scoring',
        'Dynamic Territory Calibration',
        '<2% Forecast Variance Control'
      ],
      path: '/resources-hub/sales-gtm-revenue-growth#sales-velocity-pipeline-optimization',
      icon: Target
    },
    {
      role: 'CMO / Marketing Leaders',
      focus: 'Demand Generation & Intent Capture',
      desc: 'Synthesize multi-channel dark-funnel intent signals and generate verified high-intent buying committee leads.',
      priorities: [
        'Dark-Funnel Intent Telemetry',
        'Algorithmic Lead Qualification',
        'Shapley Multi-Touch Attribution'
      ],
      path: '/resources-hub/sales-gtm-revenue-growth#funnel-revenue-intelligence',
      icon: Zap
    },
    {
      role: 'CFO / Finance Leaders',
      focus: 'Unit Economics & Risk Capital Allocation',
      desc: 'Audit commercial contracts for uncollected revenue, model capital payback, and protect operating contribution margins.',
      priorities: [
        'Forensic Margin Leakage Audits',
        'CAC Payback Compression',
        'Deterministic ROI Models'
      ],
      path: '/resources-hub/strategy-frameworks-business-tools#business-cases-roi-models',
      icon: DollarSign
    },
    {
      role: 'COO / Operations Leaders',
      focus: 'Operational Excellence & Process Automation',
      desc: 'Eliminate operational waste across order-to-cash handoffs, optimize workflows, and maintain continuous SLA quality.',
      priorities: [
        'Process Waste Elimination',
        'Autonomous Workflow Automation',
        'Continuous Operational Audits'
      ],
      path: '/resources-hub/ai-automation-operational-excellence#workflow-process-automation',
      icon: Workflow
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 01 — EXECUTIVE HERO (OFFERINGS DESIGN SYSTEM)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Subtle enterprise grid background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Status & Security Invariant Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide uppercase font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              <span className="font-mono text-blue-300 font-extrabold">ENTERPRISE KNOWLEDGE PLATFORM</span>
              <span className="text-slate-500 font-normal">//</span>
              <span>6 CATEGORIES · 33 SUBMENUS</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> 25 Mathematical Models
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Verified Business Proof
              </span>
            </div>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Intelligence. Insights. Frameworks. Tools.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Better Business Decisions.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed font-normal">
            Explore an integrated collection of industry intelligence, business transformation insights, sales methodologies, analytical models, AI capabilities, strategic frameworks, customer success stories, and practical business tools designed to help organizations make better decisions and achieve measurable business growth.
          </p>

          {/* Core Focus Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              <strong className="text-blue-400 font-semibold font-mono">Platform Focus:</strong> Empirical Decision Science • Governed Multi-Agent AI • Continuous Revenue Telemetry
            </span>
          </div>

          {/* Category Quick Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
            {[
              '1. Industry & Functional',
              '2. Case Studies & Proof',
              '3. Sales & GTM Growth',
              '4. Analytics & Decision Science',
              '5. AI & Automation',
              '6. Strategy & Tools'
            ].map((cat, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800/90 text-slate-400 text-[11px]">
                {cat}
              </span>
            ))}
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#six-resource-categories"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Resources</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#business-tools-calculators"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Business Tools</span>
              <Calculator className="w-4 h-4 text-blue-400" />
            </a>
          </div>

          {/* ── Enterprise Knowledge & Telemetry HUD Visual ── */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Live Enterprise Knowledge &amp; Telemetry
                  </div>
                  <div className="text-lg font-bold text-slate-900 font-mono flex items-center gap-2">
                    <span>PROFITMACHINES // DECISION ARCHITECTURE</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-bold">
                      ACTIVE PLATFORM
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                  Main Categories: <strong className="text-slate-900">6 Dedicated Pages</strong>
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                  Approved Submenus: <strong className="text-slate-900">33 Capabilities</strong>
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                  Mathematical Models: <strong className="text-slate-900">25 Stack</strong>
                </span>
              </div>
            </div>

            {/* Representative Telemetry Dashboard Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Revenue Precision</div>
                <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">&lt;1.8% Variance</div>
                <div className="text-[11px] font-mono text-emerald-700 font-bold mt-1">Bayesian Sentry Calibrated</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Cycle Compression</div>
                <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">-48% Duration</div>
                <div className="text-[11px] font-mono text-blue-700 font-bold mt-1">Enterprise Sales Motion</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Margin Recovery</div>
                <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">5–15 Pts Margin</div>
                <div className="text-[11px] font-mono text-emerald-700 font-bold mt-1">Forensic Discount Audit</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Net Retention</div>
                <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">138% NRR</div>
                <div className="text-[11px] font-mono text-indigo-700 font-bold mt-1">Behavioral Sentry Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN WORKSPACE BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-24">

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 02 — SIX MAIN RESOURCE CATEGORIES
        ══════════════════════════════════════════════════════════════════ */}
        <section id="six-resource-categories" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                EXECUTIVE KNOWLEDGE CLUSTERS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Six Dedicated Resource Categories
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Connect directly into dedicated intelligence platforms. Each category contains exhaustive executive dossiers, implementation frameworks, verified proof, and live decision tooling.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
              33 Total Submenus · 6 Dedicated Pages
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixCategories.map((cat, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Visual Image Header */}
                  <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/95 text-slate-900 shadow-xs">
                      Category {cat.num}
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600/90 text-white backdrop-blur-xs">
                      {cat.badge}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                      {cat.description}
                    </p>
                  </div>

                  {/* Core Subject Areas */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Core Subject Areas
                    </span>
                    <ul className="space-y-1">
                      {cat.areas.map((area, aIdx) => (
                        <li key={aIdx} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Representative Resource Topics */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Featured Topics
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-50 text-slate-700 text-[11px] font-mono border border-slate-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation CTA */}
                <div className="pt-5 mt-6 border-t border-slate-100">
                  <Link
                    to={cat.route}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-xs font-mono transition-all duration-150 border border-slate-200 hover:border-blue-600 group/btn"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 03 — EXPLORE BY BUSINESS OBJECTIVE
        ══════════════════════════════════════════════════════════════════ */}
        <section id="explore-by-business-objective" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                OBJECTIVE-DRIVEN DISCOVERY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Explore by Business Objective
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Discover tailored analytical models, execution playbooks, and decision frameworks based on the strategic outcome your organization needs to deliver.
              </p>
            </div>
          </div>

          {/* Interactive Objective Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {businessObjectives.map((obj) => {
              const ObjIcon = obj.icon;
              const isSelected = selectedObjective === obj.id;
              return (
                <button
                  key={obj.id}
                  onClick={() => setSelectedObjective(obj.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <ObjIcon className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-xs sm:text-sm font-heading leading-tight">
                    {obj.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Objective Detail Panel */}
          {(() => {
            const activeObj = businessObjectives[selectedObjective];
            const ActiveIcon = activeObj.icon;
            return (
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider">
                        Strategic Objective 0{activeObj.id + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                        {activeObj.headline}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {activeObj.relevantCategories.map((rc, rIdx) => (
                      <span
                        key={rIdx}
                        className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {rc}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
                  {activeObj.desc}
                </p>

                {/* Submenu Links */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    Recommended Pathways &amp; Dedicated Pages:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeObj.links.map((link, lIdx) => {
                      if (typeof link === 'string') {
                        return (
                          <Link
                            key={lIdx}
                            to="/resources-hub/analytics-decision-science#advanced-analytical-models"
                            className="p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 text-xs font-mono font-bold text-slate-800 hover:text-blue-600 flex items-center justify-between transition-all group cursor-pointer"
                          >
                            <span>{link}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        );
                      }
                      return (
                        <Link
                          key={lIdx}
                          to={link.path}
                          className="p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 text-xs font-mono font-bold text-slate-800 hover:text-blue-600 flex items-center justify-between transition-all group cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 04 — FEATURED ANALYTICAL RESOURCES
        ══════════════════════════════════════════════════════════════════ */}
        <section id="featured-analytical-resources" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                QUANTITATIVE DECISION SCIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Featured Analytical Resources
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Empirical mathematical models and friction telemetry engineered to replace subjective sales guesses with board-ready quantitative certainty.
              </p>
            </div>
            <Link
              to="/resources-hub/analytics-decision-science#advanced-analytical-models"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 shrink-0 group cursor-pointer"
            >
              <span>Explore All 25 Mathematical Models</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* ── Marketing Debt → Revenue Gap Feature Card ── */}
          <div className="rounded-2xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  FLAGSHIP QUANTITATIVE FRAMEWORK
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                  Marketing Debt → Revenue Gap Telemetry
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Commercial friction accumulates when enterprise go-to-market systems rely on unverified lead definitions, disconnected data silos, and discretionary rep discounting. This friction compounds into unmonetized cost-to-serve overhead and measurable revenue loss.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Avg Phantom Pipeline</div>
                    <div className="text-lg sm:text-xl font-mono font-bold text-rose-400 mt-0.5">34% Value</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Discount Leakage</div>
                    <div className="text-lg sm:text-xl font-mono font-bold text-amber-400 mt-0.5">5–15 Pts</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Recoverable Margin</div>
                    <div className="text-lg sm:text-xl font-mono font-bold text-emerald-400 mt-0.5">90-Day Sprint</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/resources-hub/analytics-decision-science#advanced-analytical-models"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono tracking-wide shadow-md transition-all cursor-pointer"
                  >
                    <span>Inspect Live Marketing Debt Telemetry</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Safe Visual Telemetry Preview Graphic */}
              <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-3.5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <span>TELEMETRY METRICS</span>
                  <span className="text-emerald-400">LIVE FEED</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">MQL Conversion Decay Rate:</span>
                  <span className="text-rose-400 font-bold">λ = 0.048 / hr</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Buying Committee Entropy (H):</span>
                  <span className="text-amber-400 font-bold">2.41 bits</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Stage Migration Duration SLA:</span>
                  <span className="text-emerald-400 font-bold">14.2 Days (Target: 15)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Bayesian Opportunity Win Rate:</span>
                  <span className="text-blue-400 font-bold">68.4% Confidence</span>
                </div>
                <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800/50 text-[10px] text-blue-300">
                  Live dashboard retained exclusively on Dedicated Page 04 with real-time controls.
                </div>
              </div>
            </div>
          </div>

          {/* ── 12 Selected Mathematical Model Previews ── */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                12 Representative Models (Selected from Full 25 Stack)
              </span>
              <span className="text-xs font-mono text-blue-600 font-bold">
                100% Deterministic Equations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredModels.map((model) => (
                <div
                  key={model.id}
                  className="rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md p-5 flex flex-col justify-between transition-all space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {model.code}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Formula Locked</span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 font-heading">
                      {model.name}
                    </h4>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-xs text-blue-700 font-bold text-center">
                      {model.formula}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {model.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <Link
                      to="/resources-hub/analytics-decision-science#advanced-analytical-models"
                      className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 group cursor-pointer"
                    >
                      <span>View Step-by-Step Example</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 05 — FEATURED BUSINESS KNOWLEDGE (EDITORIAL)
        ══════════════════════════════════════════════════════════════════ */}
        <section id="featured-business-knowledge" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                EDITORIAL INTELLIGENCE LIBRARY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Featured Business Knowledge
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                In-depth executive briefings, functional playbooks, technical architectures, and verified transformation dossiers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessKnowledgeItems.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  <div className="pt-2 text-xs font-mono text-slate-500 border-t border-slate-100 flex items-center justify-between">
                    <span>Target Audience:</span>
                    <strong className="text-slate-800">{item.audience}</strong>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 group/link cursor-pointer"
                  >
                    <span>Read Executive Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 06 — BUSINESS TOOLS & CALCULATORS DIRECTORY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="business-tools-calculators" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                PRACTICAL DECISION INSTRUMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Business Tools &amp; Calculators
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Interactive diagnostic calculators and maturity assessments designed to benchmark commercial performance, model unit economics, and audit automation suitability.
              </p>
            </div>
            <Link
              to="/resources-hub/strategy-frameworks-business-tools#business-tools-calculators"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 shrink-0 group cursor-pointer"
            >
              <span>Access Dedicated Tools Platform</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                        <ToolIcon className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {tool.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {tool.badge}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 font-heading mt-0.5">
                        {tool.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-800 hover:text-white text-xs font-mono font-bold transition-all border border-slate-200 hover:border-emerald-600 group cursor-pointer"
                    >
                      <span>Launch Assessment Instrument</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 07 — AUDIENCE-BASED RESOURCE DISCOVERY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="audience-based-discovery" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                PERSONA-ALIGNED INTELLIGENCE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Audience-Based Resource Discovery
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Direct pathways tailored to executive leadership priorities, technical evaluation criteria, and operational mandates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiencePersonas.map((persona, idx) => {
              const PersonaIcon = persona.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                        <PersonaIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-heading">
                          {persona.role}
                        </h3>
                        <span className="text-[11px] font-mono text-blue-600 font-medium block">
                          {persona.focus}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {persona.desc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Core Decision Priorities:
                      </span>
                      <ul className="space-y-1">
                        {persona.priorities.map((pri, pIdx) => (
                          <li key={pIdx} className="text-xs text-slate-700 flex items-center gap-1.5 font-medium">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{pri}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100">
                    <Link
                      to={persona.path}
                      className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-mono font-bold transition-all border border-slate-200 hover:border-blue-600 group cursor-pointer"
                    >
                      <span>Explore {persona.role.split('/')[0].trim()} Resources</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 08 — FINAL CONVERSION SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              TURN INTELLIGENCE INTO REVENUE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Turn Business Intelligence Into Business Growth.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Access the knowledge, analytical capabilities, strategic frameworks, and practical tools needed to identify opportunities, understand business challenges, and make informed business decisions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/offerings"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Offerings</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <Compass className="w-4 h-4 text-blue-400" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                4-Week Baseline Diagnostic
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Zero Public Model Training
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Contractually Locked Outcomes
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
