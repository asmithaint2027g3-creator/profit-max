import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  ArrowUpRight,
  Workflow,
  Layers,
  Bot,
  Cpu,
  BrainCircuit,
  BarChart3,
  GitMerge,
  CheckCircle2,
  AlertTriangle,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Building2,
  ChevronRight,
  Calculator,
  Sliders,
  Compass,
  FileText,
  Clock,
  TrendingUp,
  Target,
  Database,
  Lock,
  Boxes,
  HelpCircle
} from 'lucide-react';
import {
  AUTOMATION_CAPABILITIES,
  ANALYTICAL_MODELS_LIBRARY,
  AUTOMATION_FRAMEWORKS,
  INDUSTRY_USE_CASES,
  AutomationCapabilitySection
} from '../../../data/automationExcellenceData';
import { trackEvent } from '../../../lib/analytics';

// ── 10-Step Interactive Workflow Demonstrator Data ──
const DEMO_WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Multi-Source Signal Ingestion',
    category: 'Ingestion',
    system: 'Segment / Clearbit / G2',
    description: 'High-intent visit detected from Fortune 500 company on pricing page + active G2 competitor comparison surge.',
    payload: { visitor_ip: '198.51.100.24', domain: 'acmeglobal.com', g2_intent_tier: 'High Surge', page_depth: 6, time_on_pricing: '184s' }
  },
  {
    step: 2,
    title: 'Firmographic & Technographic Enrichment',
    category: 'Enrichment',
    system: 'ZoomInfo / Clearbit API',
    description: 'Enriching IP to domain: Acme Global ($420M ARR, 2,800 FTEs, Cloud CRM + Snowflake stack detected).',
    payload: { employee_count: 2800, arr_bracket: '$250M-$500M', cloud_stack: ['Salesforce', 'Snowflake', 'HubSpot'], hq: 'Chicago, IL' }
  },
  {
    step: 3,
    title: 'AI Buying Committee Discovery',
    category: 'Discovery',
    system: 'LinkedIn Sales Nav / Apollo',
    description: 'Autonomous agent queries LinkedIn graph and identifies VP Sales Ops, CRO, and VP Demand Generation.',
    payload: { matched_personas: 3, primary_contact: 'Elena Rostova, VP RevOps', champions: ['Director of Sales Tech', 'VP Demand'] }
  },
  {
    step: 4,
    title: 'Multi-Variable AI Lead Scoring',
    category: 'Scoring',
    system: 'ProfitMachines Scoring Engine',
    description: 'Lead Predictive Score calculated: ICP (35%) + Intent (30%) + Fit (20%) + Timing (15%) = 94.6 / 100 [Tier 1 Elite].',
    payload: { icp_score: 98, intent_score: 94, tech_fit: 92, timing_urgency: 95, composite_lps: 94.6, tier: 'Tier 1 Alpha' }
  },
  {
    step: 5,
    title: 'De-Duplication & Account Hierarchy Linkage',
    category: 'Hygiene',
    system: 'Salesforce CRM API',
    description: 'Zero duplicate records created. Matched to existing holding account structure. Opportunity record provisioned.',
    payload: { action: 'Matched to parent entity 0015A000021X', dedupe_confidence: '99.4%', status: 'Clean Link' }
  },
  {
    step: 6,
    title: 'Deterministic Routing & Calendar Hold',
    category: 'Routing',
    system: 'Chili Piper / LeanData Engine',
    description: 'Routed instantly to Strategic Enterprise Account Director based on territory, vertical, and capacity quota.',
    payload: { assigned_ae: 'Marcus Thorne (Enterprise Mid-West)', sdr_paired: 'Jessica Chen', route_latency: '420ms' }
  },
  {
    step: 7,
    title: 'Autonomous Persona-Personalized Dossier',
    category: 'Intelligence',
    system: 'LLM Multi-Agent Dossier Engine',
    description: 'Agent drafts customized 1-page account intelligence memo citing their 10-K goals, recent hires, and tech gaps.',
    payload: { dossier_generated: true, word_count: 480, key_talking_point: 'Recent Snowflake migration creating RevOps data latency' }
  },
  {
    step: 8,
    title: 'Multi-Channel Hyper-Personalized Cadence',
    category: 'Execution',
    system: 'Salesloft / Smartlead API',
    description: 'Initiated tailored outreach from assigned AE with bespoke video thumbnail and customized value hypothesis.',
    payload: { email_subject: 'Solving Snowflake-to-CRM telemetry lag at Acme Global', channels: ['Email', 'LinkedIn InMail'] }
  },
  {
    step: 9,
    title: 'Meeting Scheduled & Pre-Call Intelligence Pack',
    category: 'Conversion',
    system: 'Gong / Calendly / Slack Ops',
    description: 'VP RevOps books discovery call. Slack alert dispatched to AE & Leadership channel with prep pack.',
    payload: { meeting_time: 'Thursday 2:00 PM EST', slack_channel: '#enterprise-wins-live', attendees: 3 }
  },
  {
    step: 10,
    title: 'Continuous Velocity Telemetry & Forecast Sync',
    category: 'Telemetry',
    system: 'RevOps Engine / Clari Sync',
    description: 'Opportunity health index set to 96%. Stage 1 commit logged. Deal velocity vector plotted on executive dashboard.',
    payload: { stage: 'Stage 1 - Discovery Confirmed', expected_acv: '$140,000', projected_cycle: '48 days (vs 76 benchmark)' }
  }
];

export default function AutomationExcellenceHubPage() {
  const location = useLocation();

  // Active capability anchor tracking
  const [activeAnchor, setActiveAnchor] = useState<string>('sales-workflow-automation');

  // Interactive Capability Workflow Step State
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState<Record<string, number>>({
    'sales-workflow-automation': 0,
    'marketing-automation': 0,
    'ai-lead-automation': 0,
    'crm-data-automation': 0,
    'ai-agent-workflows': 0,
    'business-process-automation': 0,
    'revenue-operations-automation': 0,
    'system-integration': 0
  });

  // Section 05: Demonstrator State
  const [demoActiveStep, setDemoActiveStep] = useState<number>(0);
  const [demoPlaying, setDemoPlaying] = useState<boolean>(false);

  // Section 06: Industry Tab State
  const [activeIndustryTab, setActiveIndustryTab] = useState<string>('b2b-saas');

  // Section 08: Calculator States
  // Calculator 1: Time Savings
  const [calc1Processes, setCalc1Processes] = useState<number>(450);
  const [calc1ManualMin, setCalc1ManualMin] = useState<number>(25);
  const [calc1AutoMin, setCalc1AutoMin] = useState<number>(2);

  // Calculator 2: Automation ROI
  const [calc2Capex, setCalc2Capex] = useState<number>(45000);
  const [calc2OpexMonth, setCalc2OpexMonth] = useState<number>(3500);
  const [calc2SavingsMonth, setCalc2SavingsMonth] = useState<number>(18500);
  const [calc2Months, setCalc2Months] = useState<number>(12);

  // Calculator 3: Workflow Performance
  const [calc3Total, setCalc3Total] = useState<number>(12500);
  const [calc3Completed, setCalc3Completed] = useState<number>(12150);
  const [calc3Failed, setCalc3Failed] = useState<number>(85);
  const [calc3Manual, setCalc3Manual] = useState<number>(265);

  useEffect(() => {
    document.title = 'Automation Excellence Hub | ProfitMachines Intelligent Revenue Operating Systems';
    trackEvent({ eventName: 'PAGE_VIEW_AUTOMATION_EXCELLENCE_HUB', category: 'NAVIGATION' });

    // Handle hash scroll
    if (location.hash) {
      const cleanHash = location.hash.replace('#', '');
      setActiveAnchor(cleanHash);
      const element = document.getElementById(cleanHash) || document.querySelector(`[data-section-id="${cleanHash}"]`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  // Demonstrator timer
  useEffect(() => {
    let interval: any = null;
    if (demoPlaying) {
      interval = setInterval(() => {
        setDemoActiveStep((prev) => (prev + 1) % DEMO_WORKFLOW_STEPS.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [demoPlaying]);

  const scrollToAnchor = (anchorId: string) => {
    setActiveAnchor(anchorId);
    const element = document.getElementById(anchorId) || document.querySelector(`[data-section-id="${anchorId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Calculator 1 computed
  const calc1ManualHours = Math.round((calc1Processes * calc1ManualMin) / 60);
  const calc1AutoHours = Math.round((calc1Processes * calc1AutoMin) / 60);
  const calc1HoursSaved = Math.max(0, calc1ManualHours - calc1AutoHours);
  const calc1PctSaved = calc1ManualHours > 0 ? Math.round((calc1HoursSaved / calc1ManualHours) * 100) : 0;

  // Calculator 2 computed
  const calc2TotalInvestment = calc2Capex + calc2OpexMonth * calc2Months;
  const calc2TotalBenefit = calc2SavingsMonth * calc2Months;
  const calc2NetBenefit = calc2TotalBenefit - calc2TotalInvestment;
  const calc2ROI = calc2TotalInvestment > 0 ? Math.round((calc2NetBenefit / calc2TotalInvestment) * 100) : 0;

  // Calculator 3 computed
  const calc3SuccessRate = calc3Total > 0 ? ((calc3Completed / calc3Total) * 100).toFixed(1) : '0';
  const calc3ErrorRate = calc3Total > 0 ? ((calc3Failed / calc3Total) * 100).toFixed(2) : '0';
  const calc3InterventionRate = calc3Total > 0 ? ((calc3Manual / calc3Total) * 100).toFixed(1) : '0';
  const calc3AutonomyScore = Math.max(0, 100 - parseFloat(calc3ErrorRate) - parseFloat(calc3InterventionRate)).toFixed(1);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">

      {/* ── SECTION 01: HERO SECTION (OFFERINGS LIGHT THEME) ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        {/* Subtle mesh background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/resources-hub" className="hover:text-blue-600 transition-colors">Resources Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 font-bold">Category 08</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Automation Excellence Hub</span>
          </div>

          {/* Main Hero Header */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wide">
              <Zap className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>CATEGORY 08 // ENTERPRISE REVENUE AUTOMATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-heading leading-tight">
              Build an Intelligent, Automated Revenue Operating System.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Discover how intelligent automation connects sales, marketing, customer engagement and revenue operations into a coordinated business ecosystem.
              ProfitMachines helps organizations eliminate process friction, automate repetitive manual activities, orchestrate AI-powered workflows, and improve revenue execution through connected business systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#capability-explorer"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Explore 8 Automation Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#workflow-demonstrator"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 shadow-xs"
              >
                <Play className="w-4 h-4 text-blue-600" />
                <span>Launch Interactive Simulation</span>
              </a>

              <a
                href="#analytical-calculators"
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span>ROI Calculators</span>
              </a>
            </div>
          </div>

          {/* 4 Executive Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
            {[
              {
                title: 'Lead Response Acceleration',
                value: '< 5 Minutes',
                baseline: 'vs. 48hr industry average',
                desc: 'Automated multi-channel routing with instant contextual enrichment.',
                icon: Clock
              },
              {
                title: 'Data Hygiene Completeness',
                value: '99.4%',
                baseline: 'Zero manual CRM record entry',
                desc: 'Continuous real-time deduplication and multi-source field enrichment.',
                icon: Database
              },
              {
                title: 'Rep Selling Time Reclaimed',
                value: '+40% Quota Time',
                baseline: '18.5 hrs saved / rep / week',
                desc: 'Autonomous pre-call research, CRM updates, and proposal scaffolding.',
                icon: TrendingUp
              },
              {
                title: 'Autonomous Process SLA',
                value: '99.85%',
                baseline: '<500ms multi-system sync',
                desc: 'Deterministic event bus linking CRM, ERP, Billing, and Data Lakes.',
                icon: ShieldCheck
              }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">{stat.title}</span>
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-1">{stat.value}</div>
                  <div className="text-xs font-mono font-semibold text-emerald-600 mb-2">{stat.baseline}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{stat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Connected Revenue Architecture Pipeline Flow Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  The End-to-End Autonomous Revenue Flow
                </span>
              </div>
              <span className="text-xs font-mono text-blue-400">Deterministic · Event-Driven · Closed-Loop</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center text-xs font-mono pt-2">
              {[
                { step: '01', title: 'Signals Ingestion', system: 'Surge Intent' },
                { step: '02', title: 'AI Enrichment', system: 'Firmographics' },
                { step: '03', title: 'Lead Scoring', system: 'LPS Engine' },
                { step: '04', title: 'CRM Hygiene', system: 'Zero Dedupe' },
                { step: '05', title: 'Persona Routing', system: 'SLA Sub-5m' },
                { step: '06', title: 'Smart Cadence', system: 'Personalized' },
                { step: '07', title: 'Deal Orchestration', system: 'CPQ & Approvals' },
                { step: '08', title: 'RevOps Telemetry', system: 'Velocity Sync' }
              ].map((step, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <span className="text-[10px] text-blue-400 font-bold block">{step.step}</span>
                  <div className="font-bold text-slate-100 text-[11px] leading-tight">{step.title}</div>
                  <div className="text-[10px] text-slate-400">{step.system}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── STICKY SUB-NAVIGATION BAR (8 CAPABILITY ANCHORS) ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              {AUTOMATION_CAPABILITIES.map((cap) => {
                const isActive = activeAnchor === cap.id;
                return (
                  <button
                    key={cap.id}
                    onClick={() => scrollToAnchor(cap.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75">{cap.number}</span>
                    <span>{cap.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0 border-l border-slate-200 pl-3">
              <button
                onClick={() => scrollToAnchor('workflow-demonstrator')}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3 h-3" />
                <span>Sim</span>
              </button>
              <button
                onClick={() => scrollToAnchor('analytical-calculators')}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Calculator className="w-3 h-3" />
                <span>ROI</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SECTION 02: THE AUTOMATION CHALLENGE ── */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              The Cost of Fragmented Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Where Manual Revenue Processes Fail
            </h2>
            <p className="text-base text-slate-600">
              Enterprise revenue leakage rarely stems from poor strategy. It occurs in the operational fault lines between systems: slow response times, duplicated manual entries, inconsistent lead qualification, and delayed approvals.
            </p>
          </div>

          {/* 6 Business Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Manual Sales Activities Drain Capacity',
                friction: 'Reps spend 65% of working hours updating CRMs, drafting standard emails, and logging calls rather than having commercial conversations.',
                cost: '$42,000 lost capacity per rep / year'
              },
              {
                title: 'Disconnected Marketing & Sales Workflows',
                friction: 'Marketing automations trigger campaigns in isolation from CRM deal stages, creating jarring, misaligned prospect interactions.',
                cost: '34% drop in mid-funnel conversion'
              },
              {
                title: 'Inconsistent Lead Qualification & Routing',
                friction: 'Leads sit in unassigned queues for 24-48 hours. Subjective human grading sends Tier-1 enterprise opportunities to junior pooled reps.',
                cost: '78% of buyers purchase from first responder'
              },
              {
                title: 'CRM Data Fragmentation & Duplicates',
                friction: 'Dirty records, missing telephone numbers, and mismatched domain aliases corrupt attribution, quota tracking, and forecasting models.',
                cost: '22% board forecast variance'
              },
              {
                title: 'Approval Bottlenecks & Quoting Latency',
                friction: 'Non-standard discounting and multi-level legal approvals stall proposals in email chains for weeks, allowing deals to slip into next quarter.',
                cost: '14-day average deal elongation'
              },
              {
                title: 'Limited Cross-System Revenue Visibility',
                friction: 'Executive leadership lacks a single pane of glass reconciling marketing ad spend, pipeline velocity, billing receipts, and NRR churn.',
                cost: 'Blind operational investments'
              }
            ].map((chall, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-rose-300 shadow-xs hover:shadow-lg transition-all relative overflow-hidden group space-y-4"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-amber-500" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                    CHALLENGE 0{idx + 1}
                  </span>
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{chall.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{chall.friction}</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Business Impact:</span>
                  <span className="font-bold text-rose-700 bg-rose-50/70 px-2 py-0.5 rounded">{chall.cost}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Before vs. After Comparison Table */}
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold font-heading text-white">The Operational Transformation</h3>
                <p className="text-xs text-slate-300">Comparing disconnected manual revenue operations against a unified autonomous operating system.</p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                PROFITMACHINES STANDARD
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {/* Traditional Disconnected */}
              <div className="p-6 sm:p-8 space-y-4 bg-slate-50/50">
                <div className="flex items-center gap-2 text-rose-700 font-bold font-mono text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Traditional Disconnected Operation</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Lead Ingestion:</strong> Form fill sent to email inbox; 24 to 72 hour manual assignment delay.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Data Hygiene:</strong> Duplicate records proliferate; reps fill only mandatory fields before quarter-end.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Scoring &amp; Routing:</strong> Subjective BANT grading; high-fit enterprise leads lost in SDR general queues.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Proposals:</strong> Manual quote assembly in Word/Excel; multiple email threads for discount approval.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Reporting:</strong> Static CSV exports assembled weekly; lagging indicators with board forecast surprises.</span>
                  </li>
                </ul>
              </div>

              {/* Automated Revenue OS */}
              <div className="p-6 sm:p-8 space-y-4 bg-blue-50/20">
                <div className="flex items-center gap-2 text-blue-700 font-bold font-mono text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>ProfitMachines Connected Operating System</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Lead Ingestion:</strong> Sub-5-minute SLA; real-time clearbit/intent enrichment &amp; calendar drop.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Data Hygiene:</strong> 99.4% automated completeness; multi-source reconciliation without rep friction.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Scoring &amp; Routing:</strong> Continuous Bayesian LPS scoring; dynamic routing to dedicated AE vertical pods.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Proposals:</strong> 1-click CPQ generation with automated threshold guardrails and Slack approvals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Reporting:</strong> Real-time streaming pipeline velocity (V = (L × C × ASP) / T) and forecast confidence.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 03: CAPABILITY EXPLORER (8 Clickable Anchor Cards) ── */}
      <section id="capability-explorer" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Eight Connected Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Enterprise Automation Capabilities
            </h2>
            <p className="text-base text-slate-600">
              Select any capability below to examine its specific architectural workflows, practical enterprise applications, mathematical formulas, and verified business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTOMATION_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                onClick={() => scrollToAnchor(cap.id)}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      DISCIPLINE {cap.number}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">{cap.badge}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cap.subtitle}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Deep Dive Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTIONS 04: THE EIGHT CAPABILITY WORKBENCHES ── */}
      <main className="divide-y divide-slate-200">
        {AUTOMATION_CAPABILITIES.map((cap, capIdx) => {
          const isEven = capIdx % 2 === 0;
          const activeStepIdx = selectedWorkflowStep[cap.id] || 0;
          const currentStep = cap.workflowSteps[activeStepIdx] || cap.workflowSteps[0];

          return (
            <section
              key={cap.id}
              id={cap.id}
              data-section-id={cap.id}
              className={`scroll-mt-24 py-20 lg:py-24 ${isEven ? 'bg-white' : 'bg-slate-50/70'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                
                {/* 1. Capability Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        AUTOMATION CAPABILITY {cap.number} // 08
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {cap.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                      {cap.title}
                    </h2>

                    <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                      {cap.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {cap.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => scrollToAnchor('analytical-calculators')}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer border border-slate-300"
                    >
                      <Calculator className="w-3.5 h-3.5 text-blue-600" />
                      <span>Model ROI</span>
                    </button>
                    <a
                      href="#workflow-demonstrator"
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Live Simulation</span>
                    </a>
                  </div>
                </div>

                {/* 2. Business Friction Addressed (6 Cards) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      Operational Friction Eliminated by this Capability
                    </span>
                    <span className="text-[11px] font-mono text-rose-600 font-bold">6 Critical Drag Factors</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cap.businessProblems?.map((prob, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 space-y-1.5"
                      >
                        <div className="flex items-center gap-2 text-rose-600 text-xs font-mono font-bold">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>Friction 0{pIdx + 1}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading">{prob.title}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{prob.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Core Capabilities Grid (6 Cards) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      Systemic Automation Features &amp; Modules
                    </span>
                    <span className="text-[11px] font-mono text-blue-600 font-bold">Standard Enterprise Architecture</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cap.capabilities?.map((cItem, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-2xs transition-all space-y-2 relative overflow-hidden group"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-extrabold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                            {cItem.title}
                          </h4>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                            {cItem.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {cItem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Interactive Workflow Steps & Inspector */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block mb-1">
                        Interactive Architectural Pipeline
                      </span>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {cap.title} — Step-by-Step Workflow Execution
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Click any stage to inspect inputs, logic &amp; outputs
                    </span>
                  </div>

                  {/* Step Selector Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {cap.workflowSteps?.map((ws, sIdx) => {
                      const isSelected = activeStepIdx === sIdx;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => {
                            setSelectedWorkflowStep((prev) => ({ ...prev, [cap.id]: sIdx }));
                          }}
                          className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                              : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] font-mono font-bold block opacity-75">STEP 0{ws.step}</span>
                          <span className="text-xs font-bold leading-tight line-clamp-1">{ws.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Step Inspector Panel */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                          STAGE 0{currentStep.step}: {currentStep.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">Status: Automated Trigger Verified</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentStep.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Data Inputs:</span>
                        <p className="text-xs font-mono text-slate-200">{currentStep.inputs}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] font-mono font-bold text-blue-400 uppercase block">Automation Logic:</span>
                        <p className="text-xs font-mono text-slate-200">{currentStep.logic}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase block">Output &amp; Value:</span>
                        <p className="text-xs font-mono text-slate-200">{currentStep.outputs}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Practical Enterprise Use Case */}
                <div className="rounded-3xl bg-white border border-slate-200 shadow-xs overflow-hidden">
                  <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                        Real-World Practical Application
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 font-heading">
                        {cap.practicalExample.scenario}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Verified Case Study
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                      <span className="text-xs font-mono font-bold text-rose-700 uppercase block">Before (Traditional Manual)</span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{cap.practicalExample.manualApproach}</p>
                    </div>

                    <div className="space-y-2 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <span className="text-xs font-mono font-bold text-blue-700 uppercase block">After (Automated Orchestration)</span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{cap.practicalExample.automatedApproach}</p>
                    </div>

                    <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase block">Measurable Business Impact</span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{cap.practicalExample.measuredImpact}</p>
                    </div>
                  </div>
                </div>

                {/* 6. Analytical Model & Formula */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                        Underlying Mathematical Rigor
                      </span>
                      <h4 className="text-xl font-bold font-heading text-white">
                        {cap.analyticalModel.modelName}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold">Algorithmic Formulation</span>
                  </div>

                  {/* Formula Box */}
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 text-center space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Standardized Calculation Model</span>
                    <div className="text-lg sm:text-2xl font-mono font-bold text-indigo-300 py-2">
                      {cap.analyticalModel.formula}
                    </div>
                  </div>

                  {/* Variables Grid */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase block">Model Variables &amp; Parameters:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {cap.analyticalModel?.variables?.map((v, vIdx) => (
                        <div key={vIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                          <span className="text-xs font-mono font-bold text-indigo-400">{v.symbol}</span>
                          <p className="text-[11px] text-slate-300">{v.meaning}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-slate-400 font-mono flex items-center gap-2">
                    <span className="font-bold text-indigo-400">Practical Application:</span>
                    <span>{cap.analyticalModel?.application}</span>
                  </div>
                </div>

                {/* 7. Business Outcomes (4 Metric Cards) */}
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Verified Commercial Outcomes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cap.businessOutcomes?.map((out, oIdx) => (
                      <div
                        key={oIdx}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            {out.metric}
                          </span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 font-heading">{out.outcome}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">{out.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </main>

      {/* ── SECTION 05: END-TO-END AUTOMATION ARCHITECTURE (6 LAYERS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              System Topology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              6-Layer Enterprise Automation Architecture
            </h2>
            <p className="text-base text-slate-600">
              A robust revenue automation stack requires strict separation of concerns across data collection, message brokering, cognitive reasoning, workflow orchestration, and governance monitoring.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                layer: '06',
                name: 'Monitoring, Security & Governance Plane',
                color: 'border-purple-200 bg-purple-50/40 text-purple-900',
                badge: 'Governance',
                description: 'Immutable audit logs, RBAC authorization, PII redaction, SLA breach monitors, and model drift telemetry.',
                components: ['HashiCorp Vault', 'Datadog Telemetry', 'Cloudflare Zero-Trust', 'OpenTelemetry Logs']
              },
              {
                layer: '05',
                name: 'Business Execution & Multi-Channel Plane',
                color: 'border-indigo-200 bg-indigo-50/40 text-indigo-900',
                badge: 'Execution',
                description: 'Direct outbound actions, CRM record updates, CPQ quote provisioning, dynamic Slack alerts, and digital signatures.',
                components: ['Salesforce APEX', 'DocuSign API', 'Slack Webhooks', 'Stripe Billing Orchestration']
              },
              {
                layer: '04',
                name: 'Workflow Orchestration & State Machine',
                color: 'border-blue-200 bg-blue-50/40 text-blue-900',
                badge: 'Orchestration',
                description: 'Directed Acyclic Graph (DAG) executors, state persistence, conditional branching, retry queues, and compensation sagas.',
                components: ['Temporal.io', 'Apache Airflow', 'Kafka Event Bus', 'AWS Step Functions']
              },
              {
                layer: '03',
                name: 'Intelligence & Decision Science Engine',
                color: 'border-cyan-200 bg-cyan-50/40 text-cyan-900',
                badge: 'Cognition',
                description: 'LLM agents, multi-variable lead scoring, intent classification, entity extraction, and Bayesian win-probability modeling.',
                components: ['LangGraph Agents', 'Custom Python Models', 'OpenAI / Claude Inference', 'Feature Store']
              },
              {
                layer: '02',
                name: 'Integration & Event Streaming Layer',
                color: 'border-teal-200 bg-teal-50/40 text-teal-900',
                badge: 'Integration',
                description: 'Bi-directional webhooks, sub-500ms API sync, schema validation, rate-limiting, and dead-letter queues.',
                components: ['Kong API Gateway', 'Census Reverse ETL', 'Fivetran Data Sync', 'Segment CDP']
              },
              {
                layer: '01',
                name: 'Enterprise Data Sources & System Record',
                color: 'border-slate-200 bg-slate-50/70 text-slate-900',
                badge: 'System of Record',
                description: 'Underlying sources of truth: CRM databases, ERP finance records, Product telemetry, and Marketing databases.',
                components: ['Snowflake / BigQuery', 'Salesforce / HubSpot', 'NetSuite ERP', 'PostgreSQL Stores']
              }
            ].map((lay, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border ${lay.color} transition-all space-y-3 relative overflow-hidden`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800">
                      LAYER {lay.layer}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading">{lay.name}</h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase">{lay.badge}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
                  {lay.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {lay.components.map((comp, cIdx) => (
                    <span key={cIdx} className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 06: INTERACTIVE AUTOMATION WORKFLOW DEMONSTRATOR ── */}
      <section id="workflow-demonstrator" className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-mono font-bold tracking-wide">
                <Play className="w-3.5 h-3.5 text-blue-400" />
                <span>LIVE SYSTEM SIMULATION // 10-STAGE INBOUND LIFECYCLE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Interactive Automation Workflow Demonstrator
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Experience how an inbound enterprise prospect is autonomously captured, enriched, scored, routed, engaged, and reconciled in under 4 minutes.
              </p>
            </div>

            {/* Simulation Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setDemoPlaying(!demoPlaying)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  demoPlaying
                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
                }`}
              >
                {demoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{demoPlaying ? 'Pause Simulation' : 'Auto Play Simulation'}</span>
              </button>

              <button
                onClick={() => {
                  setDemoPlaying(false);
                  setDemoActiveStep(0);
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Stepper Pills Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {DEMO_WORKFLOW_STEPS.map((st, idx) => {
              const isCurrent = demoActiveStep === idx;
              const isPast = demoActiveStep > idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDemoPlaying(false);
                    setDemoActiveStep(idx);
                  }}
                  className={`p-3 rounded-2xl text-left transition-all border cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg scale-102 ring-2 ring-blue-400/50'
                      : isPast
                      ? 'bg-slate-800 border-emerald-500/50 text-slate-200'
                      : 'bg-slate-850 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                    <span>STEP {st.step}</span>
                    {isPast && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  </div>
                  <div className="text-[11px] font-bold line-clamp-1">{st.category}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Real-time Inspection Card */}
          {(() => {
            const stepData = DEMO_WORKFLOW_STEPS[demoActiveStep];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                      STAGE {stepData.step} OF 10 // {stepData.category.toUpperCase()}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {stepData.title}
                    </h3>
                  </div>

                  <div className="text-right font-mono text-xs text-slate-400">
                    <span className="block text-[10px] uppercase">Orchestrator System:</span>
                    <span className="text-emerald-400 font-bold">{stepData.system}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {stepData.description}
                </p>

                {/* Simulated Telemetry Payload */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
                    Telemetry Event Payload Stream (JSON):
                  </span>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-blue-300 overflow-x-auto">
                    <pre>{JSON.stringify(stepData.payload, null, 2)}</pre>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={demoActiveStep === 0}
                    onClick={() => setDemoActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-xs font-mono font-bold transition-all"
                  >
                    ← Previous Step
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    Step {stepData.step} / {DEMO_WORKFLOW_STEPS.length}
                  </span>

                  <button
                    disabled={demoActiveStep === DEMO_WORKFLOW_STEPS.length - 1}
                    onClick={() => setDemoActiveStep((prev) => Math.min(DEMO_WORKFLOW_STEPS.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:pointer-events-none text-xs font-mono font-bold transition-all"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ── SECTION 07: INDUSTRY AND BUSINESS USE CASES ── */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Sector Practicality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Industry and Business Use Cases
            </h2>
            <p className="text-base text-slate-600">
              Explore how leading enterprises across different business models deploy revenue automation architectures to compress sales cycles and multiply rep productivity.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {INDUSTRY_USE_CASES.map((ind) => {
              const isActive = activeIndustryTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryTab(ind.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Selected Industry Detail */}
          {(() => {
            const activeData = INDUSTRY_USE_CASES.find((i) => i.id === activeIndustryTab) || INDUSTRY_USE_CASES[0];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase">Sector Architecture Overview</span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900">{activeData.name}</h3>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {activeData.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Industry Challenges */}
                  <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3">
                    <span className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider block">
                      Sector Operational Bottlenecks:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {activeData.challenges?.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold mt-0.5">✕</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industry Automation Opportunities */}
                  <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block">
                      Automation Transformation Opportunities:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {activeData.opportunities?.map((o, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Workflow Summary & KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase block">End-to-End Workflow Pipeline</span>
                    <p className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">{activeData.workflowSummary}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase block">Verified Performance Telemetry</span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-950 leading-relaxed font-mono">{activeData.kpis}</p>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ── SECTION 08: AUTOMATION FRAMEWORKS & METHODOLOGIES ── */}
      <section id="frameworks" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Implementation Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Automation Frameworks &amp; Methodologies
            </h2>
            <p className="text-base text-slate-600">
              Deploy battle-tested enterprise frameworks to audit existing process friction, prioritize high-ROI automation opportunities, and govern autonomous AI agents without compliance risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_FRAMEWORKS.map((fw, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all space-y-4 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      FRAMEWORK 0{idx + 1}
                    </span>
                    <Compass className="w-4 h-4 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {fw.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fw.purpose}
                  </p>

                  <div className="space-y-1 pt-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Execution Steps:</span>
                    <ul className="space-y-1 text-xs text-slate-700 font-mono">
                      {fw.steps?.map((st, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Output:</span>
                  <span className="font-bold text-slate-800 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-[11px]">{fw.output}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 09: ADVANCED ANALYTICAL MODELS & 3 INTERACTIVE CALCULATORS ── */}
      <section id="analytical-calculators" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Interactive Decision Science Lab
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Advanced Analytical Models &amp; Interactive ROI Calculators
            </h2>
            <p className="text-base text-slate-600">
              Model process time savings, multi-year automation ROI, and workflow execution reliability using live mathematical parameters tailored to your organization.
            </p>
          </div>

          {/* 3 Interactive Client-Side Calculators */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Calculator 1: Time Savings Calculator */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Calculator 01</span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Monthly Time Savings Calculator</h3>
                <p className="text-xs text-slate-500">Calculate total man-hours reclaimed per month via workflow automation.</p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Monthly Process Volume:</span>
                    <span className="font-bold text-slate-900">{calc1Processes} runs</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={calc1Processes}
                    onChange={(e) => setCalc1Processes(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Manual Time per Run:</span>
                    <span className="font-bold text-slate-900">{calc1ManualMin} minutes</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="120"
                    step="5"
                    value={calc1ManualMin}
                    onChange={(e) => setCalc1ManualMin(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Automated Time per Run:</span>
                    <span className="font-bold text-slate-900">{calc1AutoMin} minutes</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={calc1AutoMin}
                    onChange={(e) => setCalc1AutoMin(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>

              {/* Output Results */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3 font-mono">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">Manual Hours Required:</span>
                  <span className="font-bold text-slate-800">{calc1ManualHours} hrs/mo</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">Automated Hours Required:</span>
                  <span className="font-bold text-slate-800">{calc1AutoHours} hrs/mo</span>
                </div>
                <div className="pt-2 border-t border-blue-200 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase text-blue-700 font-bold block">Reclaimed Hours</span>
                    <span className="text-2xl font-black text-blue-900">{calc1HoursSaved} hrs</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {calc1PctSaved}% Time Saved
                  </span>
                </div>
              </div>
            </div>

            {/* Calculator 2: Automation ROI Calculator */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-500" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase">Calculator 02</span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Automation ROI &amp; Net Return</h3>
                <p className="text-xs text-slate-500">Calculate net economic return and payback multiple over time.</p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Initial Setup Capex:</span>
                    <span className="font-bold text-slate-900">${calc2Capex.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={calc2Capex}
                    onChange={(e) => setCalc2Capex(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Monthly Opex (SaaS/Hosting):</span>
                    <span className="font-bold text-slate-900">${calc2OpexMonth.toLocaleString()}/mo</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="500"
                    value={calc2OpexMonth}
                    onChange={(e) => setCalc2OpexMonth(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Monthly Verified Economic Value:</span>
                    <span className="font-bold text-slate-900">${calc2SavingsMonth.toLocaleString()}/mo</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="60000"
                    step="1000"
                    value={calc2SavingsMonth}
                    onChange={(e) => setCalc2SavingsMonth(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Horizon:</span>
                    <span className="font-bold text-slate-900">{calc2Months} Months</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="6"
                    value={calc2Months}
                    onChange={(e) => setCalc2Months(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>
              </div>

              {/* Output Results */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3 font-mono">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">Total Investment:</span>
                  <span className="font-bold text-slate-800">${calc2TotalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">Total Gross Benefit:</span>
                  <span className="font-bold text-slate-800">${calc2TotalBenefit.toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t border-emerald-200 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase text-emerald-800 font-bold block">Net Value Created</span>
                    <span className="text-2xl font-black text-emerald-950">${calc2NetBenefit.toLocaleString()}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded">
                    {calc2ROI}% ROI
                  </span>
                </div>
              </div>
            </div>

            {/* Calculator 3: Workflow Reliability & Autonomy */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-500" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-purple-600 uppercase">Calculator 03</span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Workflow Reliability &amp; Autonomy</h3>
                <p className="text-xs text-slate-500">Measure error frequency, human intervention, and autonomy index.</p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Total Executed Workflows:</span>
                    <span className="font-bold text-slate-900">{calc3Total.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={calc3Total}
                    onChange={(e) => setCalc3Total(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Failed / Exception Runs:</span>
                    <span className="font-bold text-slate-900">{calc3Failed}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="5"
                    value={calc3Failed}
                    onChange={(e) => setCalc3Failed(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-600">Human Escalation Required:</span>
                    <span className="font-bold text-slate-900">{calc3Manual}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={calc3Manual}
                    onChange={(e) => setCalc3Manual(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
              </div>

              {/* Output Results */}
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-3 font-mono">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">Completion Success Rate:</span>
                  <span className="font-bold text-slate-800">{calc3SuccessRate}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">Manual Intervention Rate:</span>
                  <span className="font-bold text-slate-800">{calc3InterventionRate}%</span>
                </div>
                <div className="pt-2 border-t border-purple-200 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase text-purple-800 font-bold block">Autonomy Index</span>
                    <span className="text-2xl font-black text-purple-950">{calc3AutonomyScore}%</span>
                  </div>
                  <span className="text-xs font-bold text-purple-800 bg-purple-200 px-2 py-0.5 rounded">
                    Tier 1 Zero-Touch
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 15 Analytical Models Directory */}
          <div className="space-y-6 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  Comprehensive Mathematical Reference
                </span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  15 Core Revenue Automation Analytical Models
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 font-bold">15 Standard Formulations</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ANALYTICAL_MODELS_LIBRARY.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-2xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        MODEL {mIdx + 1 < 10 ? `0${mIdx + 1}` : mIdx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{mod.category}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">{mod.name}</h4>
                    <div className="p-2.5 rounded-xl bg-slate-900 text-blue-300 font-mono text-xs font-bold text-center">
                      {mod.formula}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{mod.description}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-emerald-700">
                    <span className="font-bold">Interpretation: </span>{mod.interpretation}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 10: TECHNOLOGY & INTEGRATION ECOSYSTEM ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Tech Stack Compatibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Technology &amp; Integration Ecosystem
            </h2>
            <p className="text-base text-slate-600">
              ProfitMachines sits on top of your existing modern RevTech infrastructure, eliminating vendor lock-in through native webhooks, bi-directional REST APIs, and event-driven data streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'CRM & Systems of Record', systems: ['Salesforce Sales Cloud', 'HubSpot Enterprise', 'Microsoft Dynamics 365', 'SugarCRM'] },
              { category: 'Marketing Automation Platforms', systems: ['Marketo Engage', 'HubSpot Marketing Hub', 'Customer.io', 'Braze'] },
              { category: 'Sales Engagement & Dialers', systems: ['Salesloft', 'Outreach.io', 'Apollo.io', 'Gong / Chorus'] },
              { category: 'Data Enrichment & Intent', systems: ['ZoomInfo', 'Clearbit / HubSpot Breeze', 'Bombora Intent', '6sense ABM'] },
              { category: 'Workflow Orchestration Engines', systems: ['Temporal.io', 'Make / Integromat', 'Zapier Enterprise', 'Apache Airflow'] },
              { category: 'Data Warehouses & Lakes', systems: ['Snowflake Data Cloud', 'Google BigQuery', 'Databricks Lakehouse', 'Amazon Redshift'] },
              { category: 'Billing, CPQ & ERP', systems: ['Stripe Billing', 'Salesforce CPQ', 'NetSuite ERP', 'Chargebee'] },
              { category: 'Communication & Collaboration', systems: ['Slack Workflow Builder', 'Microsoft Teams', 'Twilio API', 'SendGrid Mail'] }
            ].map((ecosystem, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-mono font-bold text-blue-700 block">{ecosystem.category}</span>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {ecosystem.systems.map((sys, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{sys}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 11: RELATED RESOURCES & NEXT HUBS ── */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Cross-Discipline Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Related Resource Hubs
            </h2>
            <p className="text-base text-slate-600">
              Discover how automation excellence integrates with our adjacent analytical, sales acceleration, and AI agent hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI & Agentic Automation Hub',
                desc: 'Explore multi-agent architectures, autonomous decision systems, and cognitive operational workflows.',
                path: '/resources-hub/ai-agentic-automation-hub',
                badge: 'Category 07',
                icon: BrainCircuit
              },
              {
                title: 'GTM & Revenue Operations Hub',
                desc: 'Examine the 8 fundamental revenue disciplines including ICP targeting, funnel design, and telemetry.',
                path: '/resources-hub/gtm-revenue-operations-hub',
                badge: 'Category 05',
                icon: BarChart3
              },
              {
                title: 'Advanced Analytical Tools',
                desc: '25 deterministic mathematical models, Marketing Debt gap calculators, and empirical revenue physics.',
                path: '/resources-hub/advanced-analytical-tools-sales-acceleration',
                badge: 'Category 06',
                icon: Calculator
              }
            ].map((hub, idx) => {
              const HubIcon = hub.icon;
              return (
                <Link
                  key={idx}
                  to={hub.path}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all space-y-4 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        {hub.badge}
                      </span>
                      <HubIcon className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                      {hub.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {hub.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore Resource Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 12: FINAL CONVERSION CALL TO ACTION ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Deterministic Revenue Engineering
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Ready to Build Your Intelligent Revenue Operating System?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate operational drag, automate manual pipeline activities, and deploy connected AI workflows that drive measurable commercial acceleration.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-consultation"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/offerings"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore All Solutions</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Confidential Enterprise Diagnostic
            </span>
            <span>•</span>
            <span>Zero Disruption to Existing CRM Stack</span>
          </div>
        </div>
      </section>

    </div>
  );
}
