import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target,
  DollarSign, Activity, Layers, Search, Sparkles, Lock, ChevronRight,
  Zap, BarChart3, Sliders, Cpu, Shield, ArrowUpRight, Workflow,
  HeartPulse, BrainCircuit, Eye, Check, Building2, Boxes, HelpCircle,
  Gauge, Network, Terminal, CheckCircle, AlertTriangle, RefreshCw,
  Server, Globe, FileText, ChevronDown
} from 'lucide-react';
import OfferingsIntakeForm from '../components/forms/OfferingsIntakeForm';

export default function Offerings() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Enterprise Revenue Architecture Platform | ProfitMachines Offerings';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  // Interactive Recommendation Engine State
  const [situation, setSituation] = useState('stalled-pipeline');
  const [stage, setStage] = useState('enterprise');
  const [segment, setSegment] = useState('enterprise-b2b');
  const [recommendation, setRecommendation] = useState({
    title: 'Demand Engineering',
    path: '/offerings/demand-engineering',
    reason: 'Your pipeline stall is primarily driven by fragmented top-of-funnel channels and uncaptured dark-funnel buyer intent signals.',
    metric: '+40-60% Pipeline Lift',
    timeline: '30-45 Days to Active Telemetry',
    agentMesh: 'AI SDR Swarm + Intent Radar'
  });

  const handleRecommendation = () => {
    if (situation === 'stalled-pipeline') {
      setRecommendation({
        title: 'Demand Engineering',
        path: '/offerings/demand-engineering',
        reason: 'Eliminate unpredictable inbound volume and unverified MQLs through engineered intent signal capture and autonomous outbound.',
        metric: '+40-60% High-Intent Pipeline Lift',
        timeline: '30-45 Days',
        agentMesh: 'AI SDR Fleet + Account Intent Sensor'
      });
    } else if (situation === 'margin-leakage') {
      setRecommendation({
        title: 'Profit Pool Discovery',
        path: '/offerings/profit-pool-discovery',
        reason: 'Audit where contribution margin is lost through discretionary sales discounting and unmonetized cost-to-serve overhead.',
        metric: '5-15 Gross Margin Points Recovered',
        timeline: '4-Week Diagnostic Sprint',
        agentMesh: 'Margin Leakage Analyzer + WTP Engine'
      });
    } else if (situation === 'slow-deals') {
      setRecommendation({
        title: 'Sales Acceleration',
        path: '/offerings/sales-acceleration',
        reason: 'Compress long enterprise sales cycles and eliminate rep administrative friction with predictive Bayesian deal health.',
        metric: '-70% Late-Stage Deal Stall Rate',
        timeline: '60 Days to Full Adoption',
        agentMesh: 'Deal Health Sentinel + CPQ Auto-Pilot'
      });
    } else if (situation === 'forecasting-misses') {
      setRecommendation({
        title: 'Revenue Operations',
        path: '/offerings/revenue-operations',
        reason: 'Replace subjective sales rep guesses with machine-learning predictive forecasting and multi-touch revenue attribution.',
        metric: '98% Model Precision · <2% Variance',
        timeline: '45 Days to Production Feed',
        agentMesh: 'Bayesian Forecasting Sentry + RevOps Telemetry'
      });
    } else if (situation === 'churn-risk') {
      setRecommendation({
        title: 'Customer Success Engine',
        path: '/offerings/customer-success',
        reason: 'Deploy pre-churn behavioral detection and automated usage-based expansion triggers to compound Net Revenue Retention.',
        metric: '138% Average Net Revenue Retention',
        timeline: '30 Days Integration',
        agentMesh: 'Retention Sentry + Expansion Trigger Agent'
      });
    } else if (situation === 'ai-governance') {
      setRecommendation({
        title: 'AI Trust & Governance',
        path: '/offerings/ai-trust-governance',
        reason: 'Ensure enterprise regulatory compliance with the EU AI Act, ISO 42001, and algorithmic fairness monitoring.',
        metric: '100% Certified Compliance',
        timeline: 'Immediate Pre-Audit Sprint',
        agentMesh: 'Governance Guardrail + Bias Audit Engine'
      });
    } else {
      setRecommendation({
        title: 'GTM Transformation',
        path: '/offerings/gtm-transformation',
        reason: 'Re-engineer your cross-functional revenue motions from strategy design through sustained field adoption.',
        metric: '+60% Operational Efficiency',
        timeline: '90-Day Enterprise Pod',
        agentMesh: 'Multi-Agent Mesh Orchestrator'
      });
    }
  };

  // 8 Core Offerings
  const categories = [
    {
      title: 'Profit Pool Discovery',
      path: '/offerings/profit-pool-discovery',
      icon: Search,
      metric: '5-15 Margin Points Recovered',
      badge: 'Discovery Architecture',
      desc: 'Audit the 16 discovery capabilities to pinpoint where profit concentrates, eliminate discretionary discounting, and lock defensibility against top rivals.',
      tags: ['Contribution Margin', 'WTP Analysis', 'Rival Forensics']
    },
    {
      title: 'Demand Engineering',
      path: '/offerings/demand-engineering',
      icon: Zap,
      metric: '+40-60% High-Intent Pipeline Lift',
      badge: 'Autonomous Inbound/Outbound',
      desc: 'Predictable multi-channel demand architecture from intent signal fusion to autonomous outbound scheduling with zero lead leakage.',
      tags: ['Intent Telemetry', 'Autonomous SDRs', 'ABM Mesh']
    },
    {
      title: 'Sales Acceleration',
      path: '/offerings/sales-acceleration',
      icon: TrendingUp,
      metric: '-70% Late-Stage Deal Stall Rate',
      badge: 'Execution Velocity',
      desc: 'Accelerate deal progression with Bayesian win-probability scoring, autonomous administrative relief, and algorithmic CPQ guardrails.',
      tags: ['Bayesian Health', 'Buying Committees', 'Instant CPQ']
    },
    {
      title: 'Revenue Operations',
      path: '/offerings/revenue-operations',
      icon: Gauge,
      metric: '98% Forecast Precision · <2% Variance',
      badge: 'Revenue Telemetry',
      desc: 'Unified revenue command center providing continuous pipeline telemetry, low variance forecasting, and full-funnel algorithmic attribution.',
      tags: ['Telemetry HUD', 'Dynamic Territories', 'Multi-Touch']
    },
    {
      title: 'GTM Transformation',
      path: '/offerings/gtm-transformation',
      icon: Workflow,
      metric: '-40% Sales Cycle Duration',
      badge: 'Systems Modernization',
      desc: 'End-to-end modernization moving fragmented GTM teams into an integrated, autonomous revenue operating system.',
      tags: ['Process Re-engineering', 'Field Adoption', 'Multi-Product']
    },
    {
      title: 'Customer Success Engine',
      path: '/offerings/customer-success',
      icon: HeartPulse,
      metric: '138% Average Net Revenue Retention',
      badge: 'NRR Compounding',
      desc: 'Predictive churn mitigation and usage-triggered upsell engines to systematically compound existing customer lifetime value.',
      tags: ['Behavioral Sentinels', 'Expansion Triggers', 'Executive Health']
    },
    {
      title: 'Growth Intelligence',
      path: '/offerings/growth-intelligence',
      icon: Eye,
      metric: '+15% Net Price Realization',
      badge: 'Empirical Buyer Research',
      desc: 'Empirical primary buyer research, willingness-to-pay conjoint analysis, and competitor loss forensic modeling.',
      tags: ['Conjoint Studies', 'Pricing Power', 'Loss Autopsies']
    },
    {
      title: 'AI Trust & Governance',
      path: '/offerings/ai-trust-governance',
      icon: ShieldCheck,
      metric: '100% Certified Regulatory Compliance',
      badge: 'Risk & Board Assurance',
      desc: 'Explainable AI architecture, bias monitoring, EU AI Act compliance, and executive board governance playbooks.',
      tags: ['EU AI Act', 'ISO 42001', 'Explainable Weights']
    }
  ];

  // AI Native Revenue Layer Agents
  const [activeAgent, setActiveAgent] = useState('sdr');
  const agentFleets = [
    {
      id: 'sdr',
      name: 'Autonomous SDR Agent',
      badge: 'Pipeline Genesis',
      role: 'Continuous Outbound & Dark Funnel Prospecting',
      impact: '3.8× Meeting Velocity · -65% Cost Per SQL',
      telemetry: 'Active in Demand Engineering & B2B Expansion',
      inputs: ['First-Party CRM Signals', 'Dark-Funnel Intent Trajectory', 'Executive Org Charts', 'Annual Report Priorities'],
      models: ['Proprietary Intent Reasoner', 'Executive Lexicon Fine-Tune', 'Multi-Stakeholder Consensus Mapper'],
      outputs: ['Bespoke 1:1 Outreach', 'Real-Time Objection Clearing', 'Direct AE Calendar Synchronization']
    },
    {
      id: 'rev-intel',
      name: 'Revenue Intelligence Agent',
      badge: 'Pipeline Telemetry',
      role: '24/7 Account Health & Deal Decay Monitoring',
      impact: 'Zero Dark Churn · 92% Early Risk Detection',
      telemetry: 'Active in Profit Pool Discovery & Growth Intelligence',
      inputs: ['Email Sentiment & Latency', 'Multi-Threading Breadth', 'Contract Expiration Dates', 'Competitor Research Triggers'],
      models: ['Bayesian Opportunity Decay Model', 'Stakeholder Engagement Graph', 'Champion Stability Index'],
      outputs: ['Deal Stall Early Warnings', 'Executive Intervention Briefs', 'Competitor Battlecard Auto-Injection']
    },
    {
      id: 'sales-exec',
      name: 'Sales Execution Agent',
      badge: 'Deal Velocity',
      role: 'Real-Time Quoting, CPQ & Board-Ready Business Cases',
      impact: '-48% Cycle Compression · 100% Margin Compliance',
      telemetry: 'Active in Sales Acceleration & GTM Transformation',
      inputs: ['Customer Architecture Requirements', 'Historical Price Elasticity', 'Margin Floor Guardrails', 'Procurement Terms'],
      models: ['Dynamic Margin Optimization Engine', 'Procurement Redline Classifier', 'Quantified ROI Generator'],
      outputs: ['Instant Governed CPQ Proposals', 'Custom CFO Business Cases', 'Automated Redline Defense Notes']
    },
    {
      id: 'forecasting',
      name: 'Predictive Forecasting Agent',
      badge: 'RevOps Precision',
      role: 'Mathematical Close Probability & Pipeline Simulation',
      impact: '<2% Variance Against Closed Revenue',
      telemetry: 'Active in Revenue Operations & Executive Command',
      inputs: ['Historical Cohort Close Rates', 'Real-Time Stage Velocity', 'Macro Sector Volatility Index', 'Rep Activity Telemetry'],
      models: ['Monte Carlo Revenue Simulator', 'Macro Factor Weighting Network', 'Deal Slippage Hazard Model'],
      outputs: ['Board-Ready Revenue Projections', 'Downside Scenario Hedging', 'Territory Capacity Calibration']
    },
    {
      id: 'retention',
      name: 'Customer Success Sentry',
      badge: 'NRR Compounding',
      role: 'Pre-Churn Behavioral Alerts & Expansion Signal Detection',
      impact: '138% Average NRR · +34% Expansion Speed',
      telemetry: 'Active in Customer Success Engine & Value Delivery',
      inputs: ['Telemetry Feature Usage Frequency', 'Seat Utilization Rates', 'Support Ticket Sentiment', 'Executive Sponsor Departures'],
      models: ['Churn Propensity Early-Warning Sentry', 'Expansion Readiness Scorer', 'Account Health Metric Synthesizer'],
      outputs: ['Automated CS Renewal Playbooks', 'Triggered Expansion Proposals', 'High-Risk Account Sentry Alerts']
    }
  ];

  // Industry Case Studies
  const [activeIndustry, setActiveIndustry] = useState('saas');
  const industryCaseStudies = [
    {
      id: 'saas',
      label: 'Enterprise SaaS',
      client: '$180M ARR Multi-Product Cloud Platform',
      challenge: 'Deals stalling in 9-month enterprise security reviews; subjective rep forecasts missing quarterly board commitments by 24%.',
      architecture: 'Sales Acceleration + Revenue Operations + Autonomous SDR Mesh',
      metrics: [
        { val: '-48%', label: 'Sales Cycle Compression' },
        { val: '+$38M', label: 'Net New ARR Sourced' },
        { val: '1.8%', label: 'Forecast Variance (from 24%)' },
        { val: '4.2x', label: 'AE Pipeline Coverage' }
      ],
      quote: 'ProfitMachines replaced our fragmented 28-tool SaaS stack with a single governed revenue layer. We closed our largest enterprise quarter in company history without adding a single SDR hire.'
    },
    {
      id: 'healthcare',
      label: 'Healthcare & Life Sciences',
      client: 'Global Clinical Diagnostics & Trial Solutions',
      challenge: 'Strict HIPAA and EHR data privacy mandates halting outbound; complex hospital systems with 14+ decision-makers per purchase.',
      architecture: 'AI Trust & Governance + Demand Engineering + Compliance-Locked Mesh',
      metrics: [
        { val: '100%', label: 'HIPAA & FDA Compliance Pass' },
        { val: '3.4x', label: 'Increase in Qualified Hospital Inquiries' },
        { val: '-52%', label: 'Administrative Procurement Latency' },
        { val: 'Zero', label: 'Data Sovereignty Breaches' }
      ],
      quote: 'In healthcare, you cannot afford unverified AI claims or compliance slips. ProfitMachines provided the audit-certified governance our board demanded, unlocking 3.4x more verified clinical pipeline.'
    },
    {
      id: 'finance',
      label: 'FinTech & Capital Markets',
      client: 'Tier-1 Digital Lending & Commercial Infrastructure',
      challenge: 'Severe CAC inflation on paid networks; margin leakage across custom commercial contracts and slow underwriting onboarding.',
      architecture: 'Profit Pool Discovery + Customer Success Engine + Dynamic CPQ',
      metrics: [
        { val: '+11.2pts', label: 'Gross Margin Recovered' },
        { val: '+36%', label: 'Time-to-First-Transaction Speed' },
        { val: '142%', label: 'Net Revenue Retention on Core Accounts' },
        { val: '-58%', label: 'Customer Acquisition Cost (CAC)' }
      ],
      quote: 'We discovered that 32% of our sales volume was actively leaking margin through unmonetized bespoke integrations. ProfitMachines plugged the leaks in 4 weeks and expanded our Net Revenue Retention to 142%.'
    },
    {
      id: 'manufacturing',
      label: 'Industrial & Manufacturing',
      client: '$450M Heavy Equipment & Logistics Manufacturer',
      challenge: 'Legacy dealer network blind spots; slow quote-to-order cycles taking 6 weeks; undetected competitor displacement windows.',
      architecture: 'GTM Transformation + Growth Intelligence + Territory Mesh',
      metrics: [
        { val: '2.6x', label: 'Dealer Pipeline Velocity' },
        { val: '$14.8M', label: 'Rival Enterprise Accounts Displaced' },
        { val: '-74%', label: 'Quote-to-Order Turnaround Time' },
        { val: '+22%', label: 'Parts & Service Aftermarket Attach' }
      ],
      quote: 'Our sales cycles had been stagnant for a decade. Deploying the ProfitMachines territory and dealer intelligence mesh cut our quotation turnaround from 6 weeks to 3 days, directly unlocking $14.8M in competitor win-backs.'
    },
    {
      id: 'enterprise-tech',
      label: 'Enterprise Technology',
      client: 'Global Cybersecurity & Distributed Infrastructure Provider',
      challenge: 'Multi-stakeholder buying committees; C-suite rejecting generic pitches; high churn on legacy annual contracts.',
      architecture: 'Sales Acceleration + Growth Intelligence + Executive Engagement Sentry',
      metrics: [
        { val: '3.8x', label: 'Executive Sign-Off Rate' },
        { val: '$410K', label: 'Average ACV (up from $140K)' },
        { val: '78%', label: 'Win Rate on Competitive RFPs' },
        { val: '136%', label: 'Net Revenue Retention' }
      ],
      quote: 'ProfitMachines equipped our AEs with board-grade ROI proof grounded in prospect SEC 10-Ks. Our ACV nearly tripled, and our win rates against incumbents jumped from 38% to 78%.'
    }
  ];

  // Revenue Architecture Framework Steps
  const [activeStep, setActiveStep] = useState(0);
  const frameworkSteps = [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Empirical Baseline & Profit Pool Isolation',
      desc: '4-week diagnostic baselining all 16 discovery nodes across dark-funnel intent, competitor vulnerability, and hidden margin leaks.',
      deliverables: ['16-Node Profit Pool Diagnostic Report', 'Dark Funnel Intent Telemetry Baseline', 'Contractual SOW Revenue Target Lock'],
      metrics: 'Uncovers 5–15 Margin Points in 30 Days',
      color: 'blue'
    },
    {
      step: '02',
      title: 'DESIGN',
      subtitle: 'System Architecture & Mathematical Blueprinting',
      desc: 'Architect the unified revenue operating system: data pipelines, autonomous agent decision boundaries, and pricing guardrails.',
      deliverables: ['Enterprise GTM Operating Model Blueprint', 'Autonomous Agent Fleet Decision Matrix', 'CPQ Margin Floor & Discounting Governance'],
      metrics: 'Standardizes 100% of Commercial Guardrails',
      color: 'indigo'
    },
    {
      step: '03',
      title: 'DEPLOY',
      subtitle: 'Autonomous Agent Fleet Provisioning',
      desc: 'Engineer and deploy proprietary AI SDRs, Bayesian deal health monitors, and real-time RevOps dashboards into production.',
      deliverables: ['Production Integration with CRM & Data Lake', 'Zero Code-Lockin Agent Runtime Deployment', 'Sub-Second Webhook Telemetry Verification'],
      metrics: 'Go-Live within 45 to 60 Days',
      color: 'cyan'
    },
    {
      step: '04',
      title: 'MEASURE',
      subtitle: 'Real-Time Revenue Telemetry & Variance Control',
      desc: 'Continuous board-level instrumentation tracking pipeline velocity, forecast variance, and customer health telemetry 24/7.',
      deliverables: ['Executive Board KPI Command Console', 'Weekly Bayesian Forecast Variance Audits', 'Dark-Funnel Pipeline Attributed Feeds'],
      metrics: '<2% Variance Against Closed Revenue',
      color: 'emerald'
    },
    {
      step: '05',
      title: 'OPTIMISE',
      subtitle: 'Algorithmic Self-Learning & Compounding NRR',
      desc: 'Continuous model retraining on winning deal transcripts, multi-arm bandit outreach optimization, and automated retention loops.',
      deliverables: ['Autonomous Competitor Battlecard Updates', 'Dynamic Territory Capacity Rebalancing', 'Algorithmic Net Revenue Retention Compounding'],
      metrics: '3.8× Long-Term ARR Acceleration',
      color: 'violet'
    }
  ];

  // Executive FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const executiveFaqs = [
    {
      q: 'How does ProfitMachines integrate with our existing CRM, data lake, and sales tech stack?',
      a: 'ProfitMachines is engineered as an intelligent governance and execution layer that sits directly on top of your existing production systems (Salesforce, HubSpot, Snowflake, Databricks, Gong, Outreach, Slack). We do not require you to rip and replace existing investments. Our autonomous agent swarms and Bayesian predictors connect via bi-directional, zero-latency REST and GraphQL APIs, enriching your CRM records with verifiable mathematical intelligence in real time.'
    },
    {
      q: 'What are the enterprise security, IP retention, and data sovereignty boundaries?',
      a: 'Enterprise security is locked at the architectural level. We operate a Zero-Data Retention policy: your proprietary pipeline data, customer communications, and financial contracts are never used to train public foundation models. All agent processing occurs in dedicated, SOC2 Type II and ISO 27001-certified VPC environments with AES-256 encryption at rest and in transit. Clients retain 100% ownership of all deployed agent model weights and revenue data.'
    },
    {
      q: 'How does ProfitMachines contractually guarantee commercial outcomes and ROI?',
      a: 'Unlike traditional consulting firms that bill hourly for strategy decks, every ProfitMachines engagement begins with a 4-week diagnostic sprint that establishes an empirically measured financial baseline. We lock targeted outcomes (e.g., +40% pipeline velocity, -50% deal stall rate, 5–15 margin points recovered) directly into the Statement of Work. Our commercial structures include performance-based retainers and shared-risk models tied directly to recognized revenue.'
    },
    {
      q: 'What internal IT and sales team bandwidth is required during the 90-day deployment?',
      a: 'Because ProfitMachines deploys dedicated Principal Systems Architects and turnkey autonomous software pods, internal customer engineering drag is minimized to under 3–5 hours per week during the initial API provisioning phase. Your sales reps, AEs, and SDRs do not need to learn complex new software; the autonomous agents operate in the background, automatically qualifying leads, updating CRM records, and drafting board-ready proposals.'
    },
    {
      q: 'How does the platform ensure compliance with the EU AI Act and regulatory standards?',
      a: 'Our AI Trust & Governance architecture provides full algorithmic explainability, continuous bias monitoring, and auditable decision logs. Every automated action executed by an agent includes a deterministic audit trail compliant with the EU AI Act (Risk Tier 2/3), ISO 42001, and financial regulatory standards. Models feature human-in-the-loop override guardrails for high-value contract revisions.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── SECTION 1: HERO SECTION (Command Center Platform Aesthetic) ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.28),rgba(0,0,0,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Glow ambient lines */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ENTERPRISE REVENUE OPERATING SYSTEM · UNIFIED ARCHITECTURE</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> SOC2 Type II Certified</span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /> EU AI Act / ISO 42001 Ready</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Eight Autonomous Engines.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              One Governed Revenue Operating System.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            ProfitMachines replaces fragmented point tools with a unified, mathematical revenue architecture. Built for Enterprise CROs, CFOs, and Board Directors to systematically expand ACV, eliminate margin leakage, and compound Net Revenue Retention with mathematical certainty.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <a
              href="#situation-selector"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 font-mono"
            >
              <span>RUN ARCHITECTURAL DIAGNOSTIC</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#ai-native-layer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5 font-mono"
            >
              <span>INSPECT AI REVENUE AGENTS</span>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* ── Revenue Intelligence Command Center HUD Visual ── */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Live Enterprise Telemetry Mesh</div>
                  <div className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    <span>PROFITMACHINES // ENTERPRISE REVENUE HUD</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">STABLE · 99.98% SLA</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Active Swarms: <strong>14 Agents</strong></span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Pipeline Governed: <strong>$2.48B ARR</strong></span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Variance: <strong>±1.8%</strong></span>
              </div>
            </div>

            {/* Live Telemetry KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Dark Funnel Coverage</span>
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">94.2%</div>
                <div className="text-xs font-mono text-emerald-400 mt-1">↑ +38.4% vs legacy SEP</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Sales Cycle Velocity</span>
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">-48%</div>
                <div className="text-xs font-mono text-cyan-400 mt-1">54 days avg enterprise close</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Gross Margin Realization</span>
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">+8.4 pts</div>
                <div className="text-xs font-mono text-emerald-400 mt-1">Eliminated discount creep</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Net Revenue Retention</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">138%</div>
                <div className="text-xs font-mono text-violet-400 mt-1">Automated expansion sentries</div>
              </div>
            </div>

            {/* Architecture Node Data Flow Diagram */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 text-xs font-mono">
              <div className="text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Autonomous Revenue Pipeline Topology</span>
                <span className="text-cyan-400">Continuous Bi-Directional Synchronization</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300">
                  <div className="text-[10px] text-slate-500 uppercase">Input Layer</div>
                  <div className="font-bold text-sm mt-0.5">Dark Funnel Radar</div>
                  <div className="text-[10px] text-slate-400 mt-1">Intent & Propensity</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-indigo-500/30 text-indigo-300">
                  <div className="text-[10px] text-slate-500 uppercase">Agent Mesh</div>
                  <div className="font-bold text-sm mt-0.5">AI SDR Swarm</div>
                  <div className="text-[10px] text-slate-400 mt-1">1:1 Account Synthesis</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300">
                  <div className="text-[10px] text-slate-500 uppercase">Deal Engine</div>
                  <div className="font-bold text-sm mt-0.5">Bayesian Win Sentry</div>
                  <div className="text-[10px] text-slate-400 mt-1">Cycle Compression</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300">
                  <div className="text-[10px] text-slate-500 uppercase">Governance</div>
                  <div className="font-bold text-sm mt-0.5">Algorithmic CPQ</div>
                  <div className="text-[10px] text-slate-400 mt-1">Margin Preservation</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-violet-500/30 text-violet-300">
                  <div className="text-[10px] text-slate-500 uppercase">Expansion</div>
                  <div className="font-bold text-sm mt-0.5">NRR Compounding</div>
                  <div className="text-[10px] text-slate-400 mt-1">Zero Silent Churn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY GTM FAILS (Fragmented vs Unified Systems Architecture) ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-widest mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>THE ARCHITECTURAL PROBLEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              Why Fragmented GTM Fails Enterprise Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Enterprise revenue does not stall because sales reps lack effort. It stalls because GTM teams operate 25+ disconnected point tools that fragment buyer data, mask margin leakage, and generate subjective pipeline guesses instead of mathematically verifiable ARR velocity.
            </p>
          </div>

          {/* Interactive Architectural Comparison Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* The Fragmented Legacy Stack */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-red-500/30 relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">The Fragmented Legacy Approach</h3>
                    <p className="text-xs font-mono text-red-400 uppercase tracking-wider">Uncoordinated Point Tool Sprawl</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800">High Risk · High Drag</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="text-red-400 font-mono">✕</span> Disconnected Tool Sprawl
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    25+ disparate SaaS subscriptions (CRM, SEP, ABM, BI, intent feeds) operating in silos, creating conflicting analytics and endless manual data transfer.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="text-red-400 font-mono">✕</span> Subjective Forecast Guesswork
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Reps report deal health based on emotional optimism. Late-stage deals slip silently at quarter-end, causing 20–30% board forecast misses.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="text-red-400 font-mono">✕</span> Invisible Margin Leaks
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Unchecked discounting, scope creep, and high cost-to-serve accounts erode gross margins by 5 to 15 points across closing transactions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="text-red-400 font-mono">✕</span> Headcount-Dependent CAC Inflation
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Adding sales heads yields diminishing returns as admin overhead spikes, ramp times extend to 9 months, and rep burnout accelerates.
                  </p>
                </div>
              </div>
            </div>

            {/* The Unified ProfitMachines Architecture */}
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 relative shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">The ProfitMachines Architecture</h3>
                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Governed Autonomous Revenue OS</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Governed · Scalable</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Unified Mathematical Revenue Mesh
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    One connected data and agent layer synchronizing top-of-funnel intent, deal acceleration, CPQ, and customer retention with zero manual overhead.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Bayesian Win Probability Telemetry
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Empirical opportunity scoring models quantify true close probability, reducing quarterly forecast variance to under 2% with zero rep bias.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Algorithmic Margin Preservation
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automated willingness-to-pay engines and CPQ guardrails stop discount creep in its tracks, recovering 5–15 gross margin points immediately.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Autonomous Agent Fleets Scaling Pipeline
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    AI SDR and RevOps agents handle 80% of prospecting and administrative drag, freeing executive reps to focus 100% on high-value negotiation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE COMPLETE ARCHITECTURE STACK (8 Offerings) ── */}
      <section id="architecture" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-800 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>THE 8 CORE ACCELERATION ENGINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              The Complete Revenue Acceleration Stack
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Each offering represents an exclusive, production-tested operational architecture engineered for measurable enterprise revenue outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 hover:bg-slate-900/90 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 block shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent text-blue-400 flex items-center justify-center shrink-0 transition-colors shadow-sm font-mono font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                          {cat.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {cat.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl mb-3">{cat.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.tags.map(t => (
                          <span key={t} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800/80">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                      {cat.metric}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: NEW AI-NATIVE REVENUE LAYER (Palantir Multi-Agent Fleet) ── */}
      <section id="ai-native-layer" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>PERSISTENT AUTONOMOUS AGENT FLEETS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              The AI-Native Revenue Intelligence Layer
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Across all 8 offerings operates an interconnected mesh of specialized autonomous software agents. They work 24/7 inside your CRM, data lakes, and messaging channels to execute complex revenue workflows without human bottlenecking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Agent Selector Sidebar */}
            <div className="lg:col-span-5 space-y-3">
              {agentFleets.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeAgent === agent.id
                      ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white font-heading">{agent.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                      {agent.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed mb-2">{agent.role}</div>
                  <div className="text-xs font-mono font-bold text-emerald-400">{agent.impact}</div>
                </button>
              ))}
            </div>

            {/* Agent Live Telemetry & Model Inspect Card */}
            <div className="lg:col-span-7">
              {agentFleets.filter(a => a.id === activeAgent).map((agent) => (
                <div key={agent.id} className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-2 bg-slate-800 rounded-bl-2xl font-mono text-[10px] text-cyan-400 border-l border-b border-slate-700">
                    FLEET ID: PM-AGENT-{agent.id.toUpperCase()}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-lg">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-heading">{agent.name}</h3>
                      <div className="text-xs font-mono text-slate-400">{agent.telemetry}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Telemetry Inputs</div>
                      <ul className="space-y-1.5">
                        {agent.inputs.map(inp => (
                          <li key={inp} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                            <span>{inp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Decision Models</div>
                      <ul className="space-y-1.5">
                        {agent.models.map(mod => (
                          <li key={mod} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Autonomous Outputs</div>
                      <ul className="space-y-1.5">
                        {agent.outputs.map(out => (
                          <li key={out} className="text-xs text-emerald-300 flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Quantified Impact</div>
                      <div className="text-sm font-bold text-white mt-0.5">{agent.impact}</div>
                    </div>
                    <a
                      href="#situation-selector"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs font-mono uppercase tracking-wider shrink-0 transition-all"
                    >
                      <span>Simulate Fleet ROI</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: REVENUE ARCHITECTURE FRAMEWORK (Discover → Design → Deploy → Measure → Optimise) ── */}
      <section className="py-20 sm:py-28 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Workflow className="w-3.5 h-3.5" />
              <span>5-STAGE LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              The Revenue Architecture Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A disciplined, engineering-grade lifecycle that transitions your enterprise from initial profit pool isolation to continuous self-learning revenue expansion.
            </p>
          </div>

          {/* Interactive Step Navigator */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {frameworkSteps.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="font-mono text-xs opacity-75 font-bold mb-1">STAGE {s.step}</div>
                <div className="font-heading font-extrabold text-base tracking-wide text-white">{s.title}</div>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  STAGE {frameworkSteps[activeStep].step} SPECIFICATIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {frameworkSteps[activeStep].title}: {frameworkSteps[activeStep].subtitle}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">
                Target: {frameworkSteps[activeStep].metrics}
              </span>
            </div>

            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-4xl">
              {frameworkSteps[activeStep].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {frameworkSteps[activeStep].deliverables.map((deliv, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium leading-relaxed">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INTERACTIVE RECOMMENDATION ENGINE ── */}
      <section id="situation-selector" className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>DYNAMIC RECOMMENDATION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              Identify Your Revenue Friction Point
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Select your active enterprise parameters to simulate the optimal architectural engine and autonomous agent deployment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">
                  Operating Friction
                </label>
                <select
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                >
                  <option value="stalled-pipeline">Stalled Top-of-Funnel Inbound</option>
                  <option value="margin-leakage">Margin Leaks & Discretionary Discounting</option>
                  <option value="slow-deals">9+ Month Enterprise Sales Cycles</option>
                  <option value="forecasting-misses">Quarterly Forecast Variance (&gt;20%)</option>
                  <option value="churn-risk">Account Churn &amp; Low Expansion (NRR &lt;100%)</option>
                  <option value="ai-governance">Regulatory AI Risk & Compliance Audits</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">
                  Enterprise Scale
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                >
                  <option value="scale">Growth Stage ($10M - $50M ARR)</option>
                  <option value="mid-market">Mid-Market Scale ($50M - $150M ARR)</option>
                  <option value="enterprise">Global Enterprise ($150M+ ARR)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">
                  GTM Motion
                </label>
                <select
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                >
                  <option value="enterprise-b2b">Complex Enterprise Direct B2B</option>
                  <option value="multi-product">Multi-Product SaaS / Cloud</option>
                  <option value="high-compliance">Heavily Regulated / High-Governance</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <button
                type="button"
                onClick={handleRecommendation}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all cursor-pointer font-mono uppercase"
              >
                Synthesize Architectural Recommendation
              </button>
            </div>

            {/* Recommendation Result Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-blue-500/40 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                    Recommended Architecture Engine
                  </span>
                  <h4 className="text-2xl font-bold font-heading text-white">{recommendation.title}</h4>
                </div>
                <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 font-bold border border-emerald-700">
                  Target Outcome: {recommendation.metric}
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{recommendation.reason}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 mb-6 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block">DEPLOYMENT TIMELINE:</span>
                  <span className="text-white font-bold">{recommendation.timeline}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">RECOMMENDED AGENT SWARM:</span>
                  <span className="text-cyan-400 font-bold">{recommendation.agentMesh}</span>
                </div>
              </div>

              <Link
                to={recommendation.path}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 font-mono uppercase tracking-wider"
              >
                <span>Inspect Full {recommendation.title} Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PROVEN INDUSTRY OUTCOMES & CASE STUDIES ── */}
      <section className="py-20 sm:py-28 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>EMPIRICAL PROOF POINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              Verifiable Revenue Outcomes Across Verticals
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Traceable blueprints documenting revenue lifts, margin recovery, and sales cycle compression across industry leaders.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {industryCaseStudies.map(ind => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeIndustry === ind.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>

          {/* Active Case Study Showcase Card */}
          {industryCaseStudies.filter(i => i.id === activeIndustry).map(study => (
            <div key={study.id} className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800 mb-8">
                <div>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">{study.label} TRANSFORMATION CASE STUDY</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">{study.client}</h3>
                  <div className="text-xs font-mono text-slate-400 mt-1">Architecture Deployed: <span className="text-slate-200">{study.architecture}</span></div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-md">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Core Friction Solved</div>
                  <div className="text-xs text-slate-300 mt-1">{study.challenge}</div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {study.metrics.map(m => (
                  <div key={m.label} className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Client Quote */}
              <blockquote className="p-6 rounded-2xl bg-blue-950/20 border border-blue-900/40 text-slate-300 text-sm sm:text-base italic leading-relaxed">
                "{study.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: WHY PROFITMACHINES (Strategic Authority Comparison) ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>MARKET POSITIONING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              Why Enterprise Leaders Partner with ProfitMachines
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Combining the strategic rigor of McKinsey and Bain, the technical execution of Palantir, and the platform velocity of modern AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">Strategy Consultancies</div>
              <h3 className="text-lg font-bold text-slate-300 font-heading mb-3">McKinsey / Bain</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Deliver static 200-slide strategy decks at massive cost, but leave implementation to internal teams. Zero software or agents deployed.
              </p>
              <div className="text-xs font-mono text-red-400">✕ No Code · No Agents</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">Legacy Platforms</div>
              <h3 className="text-lg font-bold text-slate-300 font-heading mb-3">Salesforce / HubSpot</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Empty database containers requiring 12 months of expensive system integration. Provide no baked-in revenue strategy or domain models.
              </p>
              <div className="text-xs font-mono text-amber-400">△ High Drag · Empty Shells</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">Point AI Tools</div>
              <h3 className="text-lg font-bold text-slate-300 font-heading mb-3">Apollo / Outreach / Gong</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Fragmented point solutions that spam target inboxes and increase noise. Lack cross-functional revenue architecture and margin control.
              </p>
              <div className="text-xs font-mono text-amber-400">△ Siloed Tools · Spam Fatigue</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-blue-500/60 shadow-xl shadow-blue-500/10">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">The Complete OS</div>
              <h3 className="text-lg font-bold text-white font-heading mb-3">ProfitMachines</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Full-stack revenue architecture: Principal Systems Architects plus persistent autonomous agent fleets deployed directly into your production stack.
              </p>
              <div className="text-xs font-mono text-emerald-400 font-bold">✓ SOW-Locked · Turnkey Execution</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: DUAL-TRACK PROMISE & EXECUTION GUARANTEE ── */}
      <section className="py-20 sm:py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE EXECUTION GUARANTEE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              We Don't Just Advise. We Build the Machine.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Every enterprise engagement couples strategic systems architecture with autonomous software deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-3">Strategic Advisory Track</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Senior Revenue Architects perform deep diagnostics, analyze customer profit pools, rewrite commercial pricing guardrails, and realign sales compensation models.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">✓ Principal Systems Architect access</li>
                <li className="flex items-center gap-2">✓ SOW-locked financial baseline agreements</li>
                <li className="flex items-center gap-2">✓ 30-day proof cadences & realization reviews</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-cyan-500/30 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-3">Autonomous Systems Track</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                We engineer and deploy autonomous SDR agents, CRM telemetry guardrails, Bayesian win-probability predictors, and real-time RevOps HUDs directly into your production stack.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">✓ Custom autonomous software agent fleets</li>
                <li className="flex items-center gap-2">✓ Zero code-lockin; you keep the models</li>
                <li className="flex items-center gap-2">✓ Sub-second real-time webhook routing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE FAQS ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>EXECUTIVE FAQS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              Frequently Asked Architectural Questions
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Addressing the security, technical integration, and commercial concerns of enterprise CROs, CIOs, and CFOs.
            </p>
          </div>

          <div className="space-y-4">
            {executiveFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-bold text-white text-base font-heading">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FINAL CTA & EXECUTIVE INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL ARCHITECTURAL INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Ready to Engineer Your Revenue Machine?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Schedule a confidential diagnostic session with our Principal Revenue Systems Architects to evaluate your active GTM architecture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Offerings Master Hub"
            defaultObjective="Revenue Operations"
          />
        </div>

        {/* Enterprise Trust Validation Footer */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-8 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 500+ Enterprise Deployments</span>
          <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-blue-400" /> 5.2× Average Client ARR Lift</span>
          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-cyan-400" /> Zero-Data Retention Architecture</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-violet-400" /> 24/7 Autonomous RevOps Telemetry</span>
        </div>
      </section>
    </div>
  );
}
