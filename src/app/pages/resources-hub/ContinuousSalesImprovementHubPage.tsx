import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Award,
  ArrowRight,
  ArrowUpRight,
  Sliders,
  BarChart3,
  TrendingUp,
  Target,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Clock,
  Database,
  Users,
  Zap,
  HelpCircle,
  FileText,
  Search,
  Check,
  Cpu,
  BrainCircuit,
  PieChart,
  Eye,
  GitMerge,
  Shield,
  Landmark,
  Activity
} from 'lucide-react';
import {
  IMPROVEMENT_METHODOLOGIES,
  METHODOLOGY_COMPARISONS,
  OPERATING_MODEL_STAGES,
  METRIC_GROUPS,
  DIAGNOSTIC_CHALLENGES,
  PRACTICAL_TOOLS,
  INDUSTRY_ENVIRONMENTS,
  GOVERNANCE_CADENCE,
  MethodologySection
} from '../../../data/continuousSalesImprovementData';
import { trackEvent } from '../../../lib/analytics';

export default function ContinuousSalesImprovementHubPage() {
  const location = useLocation();

  // Active anchor for sub-navigation
  const [activeAnchor, setActiveAnchor] = useState<string>('lean-sales');

  // Interactive TOC Simulator Stage State
  const [selectedTocStage, setSelectedTocStage] = useState<number>(2); // SE Scoping as default bottleneck

  // Interactive DMAIC Phase State
  const [selectedDmaicPhase, setSelectedDmaicPhase] = useState<number>(0);

  // Interactive Baldrige Category State
  const [selectedBaldrigeCat, setSelectedBaldrigeCat] = useState<number>(0);

  // Interactive EFQM Dimension State
  const [selectedEfqmDim, setSelectedEfqmDim] = useState<number>(0);

  // Interactive Comparison Challenge State
  const [selectedComparisonChallenge, setSelectedComparisonChallenge] = useState<string>('manual-work');

  // Operating Model Active Stage State
  const [activeModelStage, setActiveModelStage] = useState<number>(0);

  // Metrics Category Tab State
  const [activeMetricCategory, setActiveMetricCategory] = useState<string>('Sales Efficiency');

  // Interactive Diagnostic Multi-Selection State
  const [selectedDiagnosticIssues, setSelectedDiagnosticIssues] = useState<string[]>([
    'slow-lead-response',
    'pipeline-bottlenecks'
  ]);

  // Active Tool Modal / Preview State
  const [activeToolPreview, setActiveToolPreview] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Continuous Sales Improvement Hub | ProfitMachines Revenue Quality & Operational Excellence';
    trackEvent({ eventName: 'PAGE_VIEW_CONTINUOUS_SALES_IMPROVEMENT_HUB', category: 'NAVIGATION' });

    // Handle hash scroll on mount or hash change
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

  const scrollToAnchor = (anchorId: string) => {
    setActiveAnchor(anchorId);
    const element = document.getElementById(anchorId) || document.querySelector(`[data-section-id="${anchorId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDiagnosticIssue = (issueId: string) => {
    setSelectedDiagnosticIssues((prev) =>
      prev.includes(issueId) ? prev.filter((id) => id !== issueId) : [...prev, issueId]
    );
  };

  // TOC stages data for simulation
  const TOC_PIPELINE_STAGES = [
    { name: '1. Inbound Qualification', dwellDays: 2, capacityScore: 92, status: 'Healthy Flow', impact: 'Sub-5 minute routing ensures no initial deal starvation.' },
    { name: '2. Discovery & Scoping', dwellDays: 6, capacityScore: 84, status: 'Adequate Bandwidth', impact: 'Reps effectively probe pain and confirm initial ICP match.' },
    { name: '3. Technical Validation (SE)', dwellDays: 28, capacityScore: 42, status: 'Active Constraint', impact: 'CRITICAL BOTTLENECK: Only 2 architects authorized for custom API scoping. 38 deals stalled.' },
    { name: '4. Proposal & CPQ Approvals', dwellDays: 9, capacityScore: 78, status: 'Moderate Buffer', impact: 'Approval thresholds pre-cleared for standard discounts up to 15%.' },
    { name: '5. Legal Procurement & Sign', dwellDays: 14, capacityScore: 70, status: 'Standard Dwell', impact: 'Standard MSA click-wrap reduces redlines on deals <$100K.' }
  ];

  // DMAIC steps data
  const DMAIC_PHASES = [
    {
      phase: 'D',
      name: 'Define',
      goal: 'Identify the exact commercial performance problem and scope business impact.',
      example: 'Problem: Stage 3 to Closed-Won conversion varies from 14% to 46% across sales teams, creating a 24% forecast miss.',
      deliverable: 'Charter signed by CRO specifying target conversion lift (+12 pts) and financial ROI.'
    },
    {
      phase: 'M',
      name: 'Measure',
      goal: 'Collect empirical baseline data on pipeline velocity, conversation adherence, and defect frequency.',
      example: 'Telemetry: Audited 450 historic deals; identified 42% missing documented economic buyer verification.',
      deliverable: 'Process Sigma capability baseline (Z = 2.1) and stratified stage conversion histogram.'
    },
    {
      phase: 'A',
      name: 'Analyze',
      goal: 'Isolate root causes of performance variation using statistical Pareto and Ishikawa fishbone analysis.',
      example: 'Root Cause: Top reps enforce a 3-part business case with the CFO before proposing; bottom reps rely on single champion.',
      deliverable: 'Verified statistical correlation proving multi-threaded CFO engagement doubles win probability.'
    },
    {
      phase: 'I',
      name: 'Improve',
      goal: 'Deploy targeted process standards, updated playbooks, and automated qualification gates.',
      example: 'Intervention: Implemented mandatory CFO validation stage-exit criteria inside CRM before generating quotes.',
      deliverable: 'Modernized qualification playbook, digital CPQ gate, and rep coaching curriculum.'
    },
    {
      phase: 'C',
      name: 'Control',
      goal: 'Institutionalize real-time telemetry control charts to sustain performance gains permanently.',
      example: 'Governance: Automated weekly CRM hygiene audits; any non-compliant deal flagged before pipeline review.',
      deliverable: 'Statistical process control (SPC) chart monitoring stage velocity with automated variance alerts.'
    }
  ];

  // Baldrige 7 Categories Data
  const BALDRIGE_CATEGORIES = [
    {
      number: '01',
      title: 'Leadership',
      focus: 'How executive leadership sets commercial vision, values, and governance.',
      questions: [
        'How do senior commercial executives communicate strategic revenue priorities down to daily rep behaviors?',
        'What governance mechanisms ensure ethical sales practices, discount transparency, and legal compliance?'
      ]
    },
    {
      number: '02',
      title: 'Strategy',
      focus: 'How the organization develops, deploys, and measures its go-to-market plan.',
      questions: [
        'Does the GTM strategy align target market segments with realistic rep quota capacity?',
        'How rapidly can commercial strategy pivot when competitor moves or macro conditions shift?'
      ]
    },
    {
      number: '03',
      title: 'Customers',
      focus: 'How the business listens to, satisfies, and engages prospective and current buyers.',
      questions: [
        'How is Voice-of-the-Customer (VoC) telemetry synthesized across marketing, sales, and support?',
        'What processes measure buyer satisfaction throughout the complex enterprise evaluation journey?'
      ]
    },
    {
      number: '04',
      title: 'Measurement & Knowledge',
      focus: 'How data and competitive intelligence inform daily commercial decisions.',
      questions: [
        'Is commercial decision-making grounded in empirical telemetry or subjective rep intuition?',
        'How easily can frontline reps access updated competitor battlecards and ROI calculators?'
      ]
    },
    {
      number: '05',
      title: 'Workforce',
      focus: 'How commercial talent is recruited, enabled, compensated, and retained.',
      questions: [
        'What is your structured onboarding curriculum to ramp newly hired reps to full quota productivity?',
        'Do compensation plans incentivize multi-year customer lifetime value or just short-term booking volume?'
      ]
    },
    {
      number: '06',
      title: 'Operations',
      focus: 'How sales processes are designed, managed, standardized, and continuously improved.',
      questions: [
        'Are sales workflows documented as explicit standard operating procedures with clear handoff gates?',
        'What operational rhythms identify and remediate pipeline bottlenecks and administrative friction?'
      ]
    },
    {
      number: '07',
      title: 'Results',
      focus: 'How the organization measures financial, customer, operational, and workforce outcomes.',
      questions: [
        'Are financial results balanced with leading indicators of pipeline health, customer retention, and rep equity?',
        'How does your commercial performance compare against verified top-decile industry peer benchmarks?'
      ]
    }
  ];

  // EFQM 3 Dimensions Data
  const EFQM_DIMENSIONS = [
    {
      name: 'Direction',
      tagline: 'Purpose, Vision & Strategy',
      description: 'Why the commercial organization exists, what strategic value it aspires to create, and how commercial culture inspires trust and sustainable growth.',
      criteria: ['Purpose & Vision Coherence', 'Organizational Culture & Commercial Ethics', 'Strategic GTM Alignment', 'Leadership Integrity']
    },
    {
      name: 'Execution',
      tagline: 'Transforming Strategy into Operational Reality',
      description: 'How the organization engages enterprise buyers, builds enduring partner ecosystems, drives sustainable commercial value, and manages operational change.',
      criteria: ['Stakeholder Relationship Health', 'Sustainable Commercial Value Creation', 'RevOps Process Capability', 'Transformation Program Governance']
    },
    {
      name: 'Results',
      tagline: 'Delivering Measured, Sustainable Commercial Impact',
      description: 'Evaluating external stakeholder perceptions alongside internal financial, operational, and workforce performance telemetry over multi-year horizons.',
      criteria: ['Buyer & Customer Perceptions (NPS/CSAT)', 'Strategic Revenue Plan Attainment', 'Operational Productivity & Yield', 'Long-term Enterprise Valuation Lift']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">

      {/* ── SECTION 01: HERO SECTION (OFFERINGS LIGHT THEME) ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        {/* Ambient subtle glow mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/resources-hub" className="hover:text-blue-600 transition-colors">Resources Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 font-bold">Category 09</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Continuous Sales Improvement Hub</span>
          </div>

          {/* Main Hero Header */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wide">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>PROFITMACHINES KNOWLEDGE &amp; INTELLIGENCE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-heading leading-tight">
              Transform Sales Processes Into a Continuously Improving Revenue Engine
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Sales performance does not improve through isolated activities. It improves when organizations consistently identify bottlenecks, understand performance variations, eliminate wasted effort, learn from customer interactions, and optimize every stage of the revenue journey.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#methodology-explorer"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Explore the Eight Methodologies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/book-consultation"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 shadow-xs"
              >
                <Users className="w-4 h-4 text-blue-600" />
                <span>Discuss a Sales Improvement Opportunity</span>
              </Link>
            </div>
          </div>

          {/* 3 Core Improvement Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {[
              {
                number: '01',
                title: 'Identify Sales Friction',
                desc: 'Find delays, administrative drag, pipeline leakage, and unnecessary work across the commercial journey.',
                icon: AlertTriangle,
                metric: 'Eliminate 60% Admin Drag'
              },
              {
                number: '02',
                title: 'Improve Execution Quality',
                desc: 'Establish consistent qualification gates, reduce forecasting error, and institutionalize top-rep execution behaviors.',
                icon: CheckCircle2,
                metric: '<5% Forecast Variance'
              },
              {
                number: '03',
                title: 'Optimize Revenue Performance',
                desc: 'Use empirical telemetry and continuous micro-learning to compound conversion, productivity, and customer retention.',
                icon: TrendingUp,
                metric: '+35% Pipeline Throughput'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all relative overflow-hidden group space-y-4"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      CAPABILITY {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Target Outcome:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{pillar.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continuous Improvement Operating Cycle Visual Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  The Continuous Sales Improvement Operating Rhythm
                </span>
              </div>
              <span className="text-xs font-mono text-blue-400">Ongoing Operating Discipline · Not a One-Time Project</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-xs font-mono pt-2">
              {[
                { step: '01', title: 'Measure', detail: 'Telemetry Baseline' },
                { step: '02', title: 'Diagnose', detail: 'Root-Cause & Waste' },
                { step: '03', title: 'Prioritize', detail: 'Impact vs Effort' },
                { step: '04', title: 'Improve', detail: 'Redesign & Automate' },
                { step: '05', title: 'Validate', detail: 'Statistical Proof' },
                { step: '06', title: 'Standardize', detail: 'SOP & Playbooks' },
                { step: '07', title: 'Repeat', detail: 'Compounding Cycle' }
              ].map((cycle, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1 relative group hover:border-blue-400 transition-colors">
                  <span className="text-[10px] text-blue-400 font-bold block">{cycle.step}</span>
                  <div className="font-bold text-slate-100 text-xs">{cycle.title}</div>
                  <div className="text-[10px] text-slate-400">{cycle.detail}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── STICKY SUB-NAVIGATION BAR (8 METHODOLOGY ANCHORS) ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              {IMPROVEMENT_METHODOLOGIES.map((m) => {
                const isActive = activeAnchor === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => scrollToAnchor(m.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75">{m.number}</span>
                    <span>{m.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0 border-l border-slate-200 pl-3">
              <button
                onClick={() => scrollToAnchor('comparison')}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors cursor-pointer"
              >
                Compare
              </button>
              <button
                onClick={() => scrollToAnchor('diagnostic')}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                Diagnostic
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SECTION 02: METHODOLOGY EXPLORER (8 Clickable Anchor Cards) ── */}
      <section id="methodology-explorer" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Eight Proven Frameworks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Eight Methodologies for Continuous Sales Improvement
            </h2>
            <p className="text-base text-slate-600">
              Explore established operational and quality-improvement methodologies adapted to modern sales organizations. Each methodology addresses a specific operational friction point across the revenue journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPROVEMENT_METHODOLOGIES.map((m) => (
              <div
                key={m.id}
                onClick={() => scrollToAnchor(m.id)}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      METHODOLOGY {m.number}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">{m.badge}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {m.shortDescription}
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

      {/* ── SECTIONS 03: THE EIGHT DETAILED METHODOLOGY WORKBENCHES ── */}
      <main className="divide-y divide-slate-200">
        {IMPROVEMENT_METHODOLOGIES.map((m, mIdx) => {
          const isEven = mIdx % 2 === 0;

          return (
            <section
              key={m.id}
              id={m.id}
              data-section-id={m.id}
              className={`scroll-mt-24 py-20 lg:py-24 ${isEven ? 'bg-white' : 'bg-slate-50/70'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                
                {/* 1. Methodology Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        METHODOLOGY {m.number} // 08
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {m.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                      {m.title}
                    </h2>

                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {m.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => scrollToAnchor('diagnostic')}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer border border-slate-300"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                      <span>Diagnose Need</span>
                    </button>
                    <Link
                      to="/book-consultation"
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 2. Business Problem & Applications Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: The Business Problem */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-white border border-rose-200 shadow-2xs space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-amber-500" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-700 uppercase">The Underlying Problem</span>
                      <AlertTriangle className="w-4 h-4 text-rose-500" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {m.businessProblem}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-mono font-bold text-slate-900 uppercase block">What ProfitMachines Helps Improve:</span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {m.whatProfitMachinesHelpsImprove.map((item, itIdx) => (
                          <li key={itIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Concrete Sales Applications */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-blue-700 uppercase">Practical Sales Applications</span>
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {m.salesApplications.map((app, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3. Relevant KPIs Grid */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Core Metrics &amp; Key Performance Indicators
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                    {m.relevantKpis.map((kpi, kIdx) => (
                      <div key={kIdx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                        <span className="text-[11px] font-mono text-slate-500 font-bold block">{kpi.name}</span>
                        <div className="text-base font-extrabold text-blue-700 font-heading">{kpi.target}</div>
                        <p className="text-[10px] text-slate-600 leading-tight">{kpi.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Practical Enterprise Example */}
                <div className="rounded-3xl bg-white border border-slate-200 shadow-xs overflow-hidden">
                  <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                        Real-World Enterprise Application
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 font-heading">
                        {m.practicalExample.scenario}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Demonstrated Intervention
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                      <span className="text-xs font-mono font-bold text-rose-700 uppercase block">Diagnosed Friction</span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{m.practicalExample.issue}</p>
                    </div>

                    <div className="space-y-2 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <span className="text-xs font-mono font-bold text-blue-700 uppercase block">Improvement Deployed</span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{m.practicalExample.intervention}</p>
                    </div>

                    <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase block">Verified Business Outcome</span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{m.practicalExample.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* 5. Dedicated Interactive Element For This Methodology */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                  
                  {/* 01. Lean Sales: Before vs After Process */}
                  {m.id === 'lean-sales' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Interactive Value Stream Comparison
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            Before vs After Lean Sales Redesign
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-emerald-400 font-bold">4.2 min vs 34 hr Response</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-2xl bg-slate-950 border border-rose-500/30 space-y-3">
                          <span className="text-xs font-mono font-bold text-rose-400 uppercase block">Traditional Manual Lead Flow (Waste Heavy)</span>
                          <ol className="space-y-2 text-xs font-mono text-slate-300">
                            <li>1. Web Form fill logged in website backend (0h)</li>
                            <li>2. Weekly CSV export by marketing associate (18h delay)</li>
                            <li>3. Manual spreadsheet deduping against CRM (4h delay)</li>
                            <li>4. Batch upload into general unassigned queue (6h delay)</li>
                            <li>5. SDR manually cherry-picks leads (6h delay)</li>
                          </ol>
                          <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-rose-300">
                            Total Elapsed Duration: <strong>34 Hours</strong> · High Lead Attrition
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
                          <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">ProfitMachines Lean Flow (Waste Eliminated)</span>
                          <ol className="space-y-2 text-xs font-mono text-slate-300">
                            <li>1. Inbound Webhook event triggered immediately (&lt;1s)</li>
                            <li>2. Automated Clearbit firmographic enrichment (&lt;2s)</li>
                            <li>3. Algorithmic ICP scoring and instant deduping (&lt;5s)</li>
                            <li>4. Direct calendar round-robin slot provisioned (&lt;30s)</li>
                            <li>5. Senior AE vertical pod notified via Slack (&lt;2m)</li>
                          </ol>
                          <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-emerald-300">
                            Total Elapsed Duration: <strong>4.2 Minutes</strong> · +31% Demo Booking
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 02. Six Sigma: DMAIC Process Explorer */}
                  {m.id === 'six-sigma' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Interactive DMAIC Process Explorer
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            5-Step DMAIC Sales Variance Elimination
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-slate-400">Click any phase to inspect details</span>
                      </div>

                      {/* Phase Navigation Tabs */}
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {DMAIC_PHASES.map((p, pIdx) => {
                          const isSelected = selectedDmaicPhase === pIdx;
                          return (
                            <button
                              key={p.phase}
                              onClick={() => setSelectedDmaicPhase(pIdx)}
                              className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                              }`}
                            >
                              <span className="text-xs font-mono font-bold block opacity-75">{p.phase} //</span>
                              <span className="text-sm font-bold">{p.name}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Phase Detail Inspector */}
                      {(() => {
                        const phaseData = DMAIC_PHASES[selectedDmaicPhase];
                        return (
                          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                              <span className="text-xs font-mono font-bold text-blue-400">PHASE: {phaseData.name.toUpperCase()}</span>
                              <span className="text-xs font-mono text-slate-400">Standard Statistical Governance</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300 font-medium">{phaseData.goal}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase block">Practical Sales Application:</span>
                                <p className="text-xs font-mono text-slate-200">{phaseData.example}</p>
                              </div>
                              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase block">Verified Deliverable:</span>
                                <p className="text-xs font-mono text-slate-200">{phaseData.deliverable}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* 03. Kaizen: Continuous Improvement Loop */}
                  {m.id === 'kaizen' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Interactive Operating Loop
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            The Frontline Kaizen Sales Optimization Rhythm
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-slate-400 font-bold">7-Day Rapid Sprint Cycles</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        {[
                          { step: '01. Observe', action: 'Listen to recorded lost calls & note friction' },
                          { step: '02. Suggest', action: 'Log micro-improvement in Friday standup' },
                          { step: '03. Test', action: 'Pilot new script with 2 reps on Monday' },
                          { step: '04. Review', action: 'Evaluate conversion lift on Wednesday' },
                          { step: '05. Adopt', action: 'Update global team dialer on Thursday' },
                          { step: '06. Repeat', action: 'Tackle next friction point immediately' }
                        ].map((kStep, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-center">
                            <span className="text-xs font-mono font-bold text-blue-400 block">{kStep.step}</span>
                            <p className="text-xs text-slate-300 leading-snug">{kStep.action}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 04. Theory of Constraints: Pipeline Bottleneck Simulator */}
                  {m.id === 'theory-of-constraints' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Interactive Pipeline Bottleneck Simulator
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            Pinpoint &amp; Elevate the Funnel Constraint
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-slate-400">Click a pipeline stage to inspect dwell time &amp; impact</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                        {TOC_PIPELINE_STAGES.map((stg, sIdx) => {
                          const isSelected = selectedTocStage === sIdx;
                          const isBottleneck = sIdx === 2;
                          return (
                            <button
                              key={stg.name}
                              onClick={() => setSelectedTocStage(sIdx)}
                              className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                                  : isBottleneck
                                  ? 'bg-rose-950/60 border-rose-500/50 text-rose-200'
                                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                              }`}
                            >
                              <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                                <span>{stg.dwellDays} Days Dwell</span>
                                {isBottleneck && <span className="text-rose-400 font-bold">CHOKEPOINT</span>}
                              </div>
                              <span className="text-xs font-bold block">{stg.name}</span>
                            </button>
                          );
                        })}
                      </div>

                      {(() => {
                        const stageData = TOC_PIPELINE_STAGES[selectedTocStage];
                        return (
                          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                              <span className="text-xs font-bold text-blue-400">STAGE ANALYSIS: {stageData.name}</span>
                              <span className={`text-xs px-2.5 py-0.5 rounded font-bold ${selectedTocStage === 2 ? 'bg-rose-900/60 text-rose-300 border border-rose-700' : 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'}`}>
                                {stageData.status}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{stageData.impact}</p>
                            <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                              <span>Throughput Capacity Index: <strong>{stageData.capacityScore} / 100</strong></span>
                              <span className="text-emerald-400">Elevate Constraint &rarr; +41% Revenue Throughput</span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* 05. TQM: Customer Journey Quality Map */}
                  {m.id === 'total-quality-management' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Interactive Touchpoint Governance
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            TQM Cross-Functional Customer Journey Quality Map
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-slate-400 font-bold">Zero-Defect Expectation Alignment</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        {[
                          { touchpoint: '1. Inbound Marketing', owner: 'Demand Gen', qualityGate: 'Strict ICP messaging parity; zero exaggerated claims on roadmap.' },
                          { touchpoint: '2. Commercial Discovery', owner: 'Account Executive', qualityGate: 'Written business case co-authored with economic buyer.' },
                          { touchpoint: '3. Technical CPQ Quoting', owner: 'Solutions Architect', qualityGate: '100% verified compatibility against current customer tech stack.' },
                          { touchpoint: '4. Post-Sale Onboarding', owner: 'Customer Success', qualityGate: 'Formal 24h handover brief; Day-30 time-to-first-value check.' }
                        ].map((tj, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                            <span className="text-xs font-mono font-bold text-blue-400 block">{tj.touchpoint}</span>
                            <span className="text-[10px] font-mono text-emerald-400 block uppercase">Owner: {tj.owner}</span>
                            <p className="text-xs text-slate-300 leading-relaxed">{tj.qualityGate}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 06. Operational Excellence: RevOps Model */}
                  {m.id === 'operational-excellence' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Architectural Operating Model
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            Revenue Operations Operating Model (6 Pillars)
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-slate-400 font-bold">Standardized Enterprise Scale</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
                        {[
                          { pillar: 'People', focus: 'Ramp Time & Quota Capacity' },
                          { pillar: 'Processes', focus: 'Standardized Stage Gates' },
                          { pillar: 'Technology', focus: 'Integrated RevTech Stack' },
                          { pillar: 'Data', focus: 'Single Source of Truth' },
                          { pillar: 'Governance', focus: 'SLA Cross-Team Contracts' },
                          { pillar: 'Performance', focus: 'Predictable Attainment' }
                        ].map((op, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                            <span className="text-xs font-mono font-bold text-blue-400 block">{op.pillar}</span>
                            <p className="text-[11px] text-slate-300 font-mono">{op.focus}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 07. Baldrige Framework: 7-Category Assessment Wheel */}
                  {m.id === 'baldrige-framework' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Interactive Organizational Diagnostic
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            Baldrige Performance Excellence Framework Diagnostic Wheel
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-slate-400">Click a category to reveal diagnostic questions</span>
                      </div>

                      {/* 7 Category Pills */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                        {BALDRIGE_CATEGORIES.map((cat, cIdx) => {
                          const isSelected = selectedBaldrigeCat === cIdx;
                          return (
                            <button
                              key={cat.number}
                              onClick={() => setSelectedBaldrigeCat(cIdx)}
                              className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                              }`}
                            >
                              <span className="text-[10px] font-mono font-bold block opacity-75">{cat.number} //</span>
                              <span className="text-xs font-bold leading-tight line-clamp-1">{cat.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Category Diagnostic Card */}
                      {(() => {
                        const activeCat = BALDRIGE_CATEGORIES[selectedBaldrigeCat];
                        return (
                          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                              <span className="text-xs font-mono font-bold text-blue-400">CATEGORY {activeCat.number}: {activeCat.title.toUpperCase()}</span>
                              <span className="text-xs font-mono text-slate-400">{activeCat.focus}</span>
                            </div>
                            <div className="space-y-2">
                              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block">Executive Diagnostic Inquiries:</span>
                              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                                {activeCat.questions.map((q, qIdx) => (
                                  <li key={qIdx} className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold shrink-0 mt-0.5">&bull;</span>
                                    <span>{q}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                              *Note: Applied as an organizational diagnostic framework for commercial excellence. Does not imply official Baldrige Award certification.
                            </p>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* 08. EFQM Excellence Model: Direction -> Execution -> Results */}
                  {m.id === 'efqm-excellence-model' && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                            Interactive Sustainable Transformation Model
                          </span>
                          <h4 className="text-xl font-bold font-heading text-white">
                            EFQM Excellence Model (Direction &rarr; Execution &rarr; Results)
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-slate-400">Select dimension to view evaluation criteria</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {EFQM_DIMENSIONS.map((dim, dIdx) => {
                          const isSelected = selectedEfqmDim === dIdx;
                          return (
                            <button
                              key={dim.name}
                              onClick={() => setSelectedEfqmDim(dIdx)}
                              className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                              }`}
                            >
                              <span className="text-xs font-mono font-bold block opacity-75">DIMENSION 0{dIdx + 1}</span>
                              <div className="text-base font-bold font-heading">{dim.name}</div>
                              <div className="text-[11px] opacity-80 mt-1">{dim.tagline}</div>
                            </button>
                          );
                        })}
                      </div>

                      {(() => {
                        const dimData = EFQM_DIMENSIONS[selectedEfqmDim];
                        return (
                          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                              <span className="text-xs font-mono font-bold text-blue-400">{dimData.name.toUpperCase()} DIMENSION</span>
                              <span className="text-xs font-mono text-slate-400">{dimData.tagline}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300">{dimData.description}</p>
                            <div className="space-y-1 pt-1">
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Key Commercial Assessment Criteria:</span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {dimData.criteria.map((cr, cIdx) => (
                                  <div key={cIdx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span>{cr}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                              *Note: Described accurately as an organizational management framework. Does not imply official EFQM recognition or certification.
                            </p>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                </div>

              </div>
            </section>
          );
        })}
      </main>

      {/* ── SECTION 04: METHODOLOGY COMPARISON & SELECTOR ── */}
      <section id="comparison" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Comparative Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Which Improvement Methodology Should Your Sales Organization Use?
            </h2>
            <p className="text-base text-slate-600">
              Each methodology solves a different class of commercial problem. They are complementary rather than interchangeable. The most effective revenue engines deploy Lean to eliminate waste, Six Sigma to minimize forecast variance, and Theory of Constraints to elevate pipeline bottlenecks.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-mono text-xs">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold">Methodology</th>
                    <th className="p-4 sm:p-5 font-bold">Primary Focus</th>
                    <th className="p-4 sm:p-5 font-bold">Best Used When</th>
                    <th className="p-4 sm:p-5 font-bold">Sales Outcome</th>
                    <th className="p-4 sm:p-5 font-bold">Key Metric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {METHODOLOGY_COMPARISONS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold font-heading text-slate-900 whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="p-4 sm:p-5 text-blue-700 font-mono text-xs font-semibold">
                        {row.focus}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 leading-snug">
                        {row.bestUsedWhen}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-800 font-medium leading-snug">
                        {row.salesOutcome}
                      </td>
                      <td className="p-4 sm:p-5 font-mono text-xs text-emerald-700 font-bold whitespace-nowrap">
                        {row.keyMetric}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Challenge-to-Methodology Selector */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase">Interactive Matching Engine</span>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Match Your Current Sales Challenge to the Right Methodology
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Select your primary commercial pain point to view recommended methodology pairings and initial diagnostic steps.
              </p>
            </div>

            {/* Challenge Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'manual-work', label: 'Too Much Manual Sales Work', method: 'Lean Sales' },
                { id: 'inconsistent-conversion', label: 'Inconsistent Conversion Rates', method: 'Six Sigma' },
                { id: 'stuck-leads', label: 'Deals Stuck in Pipeline', method: 'Theory of Constraints' },
                { id: 'poor-handoffs', label: 'Poor Customer Handoffs & Churn', method: 'TQM' },
                { id: 'unreliable-forecast', label: 'Unreliable Forecasting', method: 'Six Sigma' },
                { id: 'cross-functional', label: 'Weak Cross-Functional Alignment', method: 'Operational Excellence' },
                { id: 'limited-visibility', label: 'Limited Visibility into Performance', method: 'Baldrige Framework' },
                { id: 'scaling-operations', label: 'Difficulty Scaling Global Sales Ops', method: 'EFQM Excellence' }
              ].map((c) => {
                const isSelected = selectedComparisonChallenge === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedComparisonChallenge(c.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Result Recommendation Card */}
            {(() => {
              const recommendationMap: Record<string, { primary: string; secondary: string; rationale: string; action: string }> = {
                'manual-work': {
                  primary: 'Lean Sales',
                  secondary: 'Operational Excellence',
                  rationale: 'Lean Sales focuses explicitly on identifying and eliminating non-value-add administrative waste (Muda) and compressing lead handoff latency.',
                  action: 'Perform a 5-day sales value stream mapping exercise to prune unnecessary CRM fields and automate proposal generation.'
                },
                'inconsistent-conversion': {
                  primary: 'Six Sigma (DMAIC)',
                  secondary: 'Kaizen',
                  rationale: 'Six Sigma provides the statistical framework required to isolate causes of conversion variation across representative cohorts and enforce standard stage gates.',
                  action: 'Institute DMAIC project defining verifiable Stage 3 entry criteria and measure stage conversion sigma.'
                },
                'stuck-leads': {
                  primary: 'Theory of Constraints (TOC)',
                  secondary: 'Lean Sales',
                  rationale: 'Theory of Constraints identifies the single pipeline choke-point (e.g., technical validation or pricing approval) that restricts aggregate throughput.',
                  action: 'Analyze stage dwell times, establish buffer management around the constraint, and deploy pre-approved CPQ pricing tolerances.'
                },
                'poor-handoffs': {
                  primary: 'Total Quality Management (TQM)',
                  secondary: 'Operational Excellence',
                  rationale: 'TQM establishes cross-functional customer expectation standards between marketing claims, sales demos, and delivery onboarding reality.',
                  action: 'Deploy a joint Sales-to-CS digital handover contract and tie sales compensation to 90-day retention.'
                },
                'unreliable-forecast': {
                  primary: 'Six Sigma (DMAIC)',
                  secondary: 'Operational Excellence',
                  rationale: 'Forecasting errors stem from subjective representative optimism; Six Sigma replaces intuition with empirical stage exit criteria.',
                  action: 'Replace manual commit calls with statistical pipeline velocity models and historical conversion telemetry.'
                },
                'cross-functional': {
                  primary: 'Operational Excellence',
                  secondary: 'Total Quality Management',
                  rationale: 'Operational Excellence synchronizes GTM processes, technology stacks, and operational SLAs between marketing, sales, and customer success.',
                  action: 'Publish a unified RevOps operating model defining explicit handoff SLAs and shared revenue metrics.'
                },
                'limited-visibility': {
                  primary: 'Baldrige Performance Excellence',
                  secondary: 'Six Sigma',
                  rationale: 'Baldrige provides a holistic diagnostic assessing how measurement, knowledge management, and leadership practices inform decision-making.',
                  action: 'Conduct a 7-dimension commercial diagnostic wheel to balance leading pipeline indicators with lagging board results.'
                },
                'scaling-operations': {
                  primary: 'EFQM Excellence Model',
                  secondary: 'Operational Excellence',
                  rationale: 'EFQM aligns Direction (purpose & strategy), Execution (stakeholders & processes), and Results (perceptions & performance) into an enduring transformation framework.',
                  action: 'Establish an enterprise commercial transformation governance council linking 3-year revenue targets to operational milestones.'
                }
              };

              const rec = recommendationMap[selectedComparisonChallenge] || recommendationMap['manual-work'];

              return (
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase">Primary Recommendation:</span>
                      <span className="text-sm font-bold text-slate-900 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                        {rec.primary}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">Supporting: {rec.secondary}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Why this works: </strong>{rec.rationale}
                  </p>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800">
                    <span className="font-bold text-blue-700">Recommended First Step: </span>{rec.action}
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* ── SECTION 05: 7-STAGE CONTINUOUS IMPROVEMENT OPERATING MODEL ── */}
      <section id="operating-model" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              The Seven Operating Stages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              From Sales Diagnosis to Sustained Revenue Improvement
            </h2>
            <p className="text-base text-slate-600">
              ProfitMachines translates structured continuous improvement methodologies into a disciplined seven-stage operating lifecycle. Each stage produces verified empirical deliverables before advancing to the next.
            </p>
          </div>

          {/* Interactive Stage Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {OPERATING_MODEL_STAGES.map((stg, sIdx) => {
              const isActive = activeModelStage === sIdx;
              return (
                <button
                  key={stg.number}
                  onClick={() => setActiveModelStage(sIdx)}
                  className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold block opacity-75">STAGE {stg.number}</span>
                  <div className="text-sm font-bold font-heading">{stg.name}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Card */}
          {(() => {
            const activeStage = OPERATING_MODEL_STAGES[activeModelStage];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                      STAGE {activeStage.number} // {activeStage.tagline}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900">
                      Stage {activeStage.number}: {activeStage.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Operating Discipline
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
                  {activeStage.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
                    Verified Stage Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {activeStage.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-mono text-slate-800 space-y-1">
                        <span className="text-blue-600 font-bold block">Deliverable 0{dIdx + 1}</span>
                        <div className="font-bold">{deliv}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ── SECTION 06: ADVANCED ANALYTICS & IMPROVEMENT METRICS ── */}
      <section id="metrics" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Evidence-Based Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Measure the Performance That Matters
            </h2>
            <p className="text-base text-slate-600">
              Continuous sales improvement requires empirical telemetry across five fundamental measurement dimensions. Every metric links to a concrete commercial decision.
            </p>
          </div>

          {/* Metric Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {METRIC_GROUPS.map((grp) => {
              const isActive = activeMetricCategory === grp.category;
              return (
                <button
                  key={grp.category}
                  onClick={() => setActiveMetricCategory(grp.category)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {grp.category}
                </button>
              );
            })}
          </div>

          {/* Metrics Grid for Active Category */}
          {(() => {
            const activeGroup = METRIC_GROUPS.find((g) => g.category === activeMetricCategory) || METRIC_GROUPS[0];
            return (
              <div className="space-y-6">
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {activeGroup.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeGroup.metrics.map((met, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-lg transition-all space-y-3 relative overflow-hidden group flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                            KPI 0{mIdx + 1}
                          </span>
                          <BarChart3 className="w-4 h-4 text-blue-600" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900 font-heading">{met.name}</h4>
                        <div className="p-2.5 rounded-xl bg-slate-900 text-blue-300 font-mono text-xs font-bold text-center">
                          {met.formula}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong>Meaning: </strong>{met.meaning}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong>Why it matters: </strong>{met.whyItMatters}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 space-y-1 text-[11px] font-mono">
                        <div className="text-slate-500">
                          <span className="font-bold text-slate-700">Measured By: </span>{met.howMeasured}
                        </div>
                        <div className="text-emerald-700">
                          <span className="font-bold">Decision: </span>{met.decisionSupported}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ── SECTION 07: INTERACTIVE SALES IMPROVEMENT DIAGNOSTIC ── */}
      <section id="diagnostic" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Interactive Diagnostic Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Where Is Your Sales Process Losing Efficiency?
            </h2>
            <p className="text-base text-slate-600">
              Select one or more commercial challenges currently limiting your organization. Our diagnostic engine maps your selections to recommended continuous improvement methodologies, diagnostic inquiries, and initial measurements.
            </p>
          </div>

          {/* Multi-Select Challenge Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIAGNOSTIC_CHALLENGES.map((ch) => {
              const isChecked = selectedDiagnosticIssues.includes(ch.id);
              return (
                <div
                  key={ch.id}
                  onClick={() => toggleDiagnosticIssue(ch.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none space-y-2 ${
                    isChecked
                      ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500">CHALLENGE</span>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">{ch.title}</h4>
                  <p className="text-xs text-slate-600 leading-snug">{ch.problem}</p>
                </div>
              );
            })}
          </div>

          {/* Generated Diagnostic Output Guidance */}
          {selectedDiagnosticIssues.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                    Tailored Diagnostic Guidance ({selectedDiagnosticIssues.length} Challenges Selected)
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    Recommended Improvement Action Plan
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDiagnosticIssues([])}
                  className="text-xs font-mono text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Clear Selection
                </button>
              </div>

              <div className="space-y-6">
                {selectedDiagnosticIssues.map((issueId) => {
                  const issue = DIAGNOSTIC_CHALLENGES.find((c) => c.id === issueId);
                  if (!issue) return null;

                  return (
                    <div key={issue.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                        <h4 className="text-base font-bold font-heading text-slate-900">{issue.title}</h4>
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">Primary: {issue.primaryMethodology}</span>
                          <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded">Supporting: {issue.supportingMethodology}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                          <span className="font-mono font-bold text-blue-700 uppercase block">Diagnostic Questions:</span>
                          <ul className="space-y-1 text-slate-600">
                            {issue.diagnosticQuestions.map((q, idx) => (
                              <li key={idx}>&bull; {q}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                          <span className="font-mono font-bold text-indigo-700 uppercase block">Recommended Measurements:</span>
                          <ul className="space-y-1 text-slate-600 font-mono text-[11px]">
                            {issue.recommendedMeasurements.map((m, idx) => (
                              <li key={idx}>&bull; {m}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                          <span className="font-mono font-bold text-emerald-700 uppercase block">Suggested Next Steps:</span>
                          <ul className="space-y-1 text-slate-600">
                            {issue.suggestedNextSteps.map((s, idx) => (
                              <li key={idx}>&bull; {s}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center justify-between flex-wrap gap-3">
                <span>*Educational guidance generated based on structured quality-improvement frameworks. Does not replace a formal revenue audit.</span>
                <Link to="/book-consultation" className="font-bold underline text-blue-700 hover:text-blue-900">
                  Request Full Diagnostic Audit &rarr;
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── SECTION 08: PRACTICAL FRAMEWORKS, TOOLS & RESOURCES ── */}
      <section id="tools" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Operational Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Practical Tools for Continuous Sales Improvement
            </h2>
            <p className="text-base text-slate-600">
              Standardized worksheets, templates, and checklists engineered to help revenue leaders diagnose process waste, run DMAIC projects, and govern operational rhythms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICAL_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all space-y-4 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      TOOL 0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <FileText className="w-4 h-4 text-slate-500" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="space-y-1 pt-1 text-[11px] font-mono">
                    <div className="text-slate-500">
                      <span className="font-bold text-slate-700">Audience: </span>{tool.audience}
                    </div>
                    <div className="text-slate-500">
                      <span className="font-bold text-slate-700">When to use: </span>{tool.whenToUse}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] font-mono text-emerald-700">
                    <span className="font-bold">Output: </span>{tool.deliverable}
                  </div>
                  <button
                    onClick={() => setActiveToolPreview(activeToolPreview === idx ? null : idx)}
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 hover:border-blue-200 font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{activeToolPreview === idx ? 'Close Preview' : tool.actionLabel}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeToolPreview === idx ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Inline Expandable Tool Inspector */}
                {activeToolPreview === idx && (
                  <div className="mt-3 p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-2 border border-slate-800">
                    <div className="text-blue-400 font-bold uppercase tracking-wider text-[10px]">
                      Tool Architecture Spec:
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans text-xs">
                      {tool.description} Standardized enterprise framework engineered for deployment in ProfitMachines consultative engagements.
                    </p>
                    <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-800 flex justify-between items-center">
                      <span>Format: Interactive Digital SOP / Worksheet</span>
                      <Link to="/book-consultation" className="text-emerald-400 font-bold underline">
                        Request Template &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 09: INDUSTRY APPLICATIONS ── */}
      <section id="industries" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Sector Practicality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Apply Continuous Improvement Across Revenue Environments
            </h2>
            <p className="text-base text-slate-600">
              Commercial friction manifests differently across SaaS, services, and industrial manufacturing. Explore how continuous improvement frameworks adapt to distinct commercial business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_ENVIRONMENTS.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      SECTOR 0{idx + 1}
                    </span>
                    <Building2 className="w-4 h-4 text-slate-500" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {ind.industry}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs space-y-1">
                    <span className="font-mono font-bold text-rose-700 uppercase block">Common Sales Challenge:</span>
                    <p className="text-slate-700 leading-relaxed">{ind.challenge}</p>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="font-mono font-bold text-blue-700 uppercase block">Relevant Methodologies:</span>
                    <p className="font-semibold text-slate-800">{ind.methodologies}</p>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="font-mono font-bold text-slate-700 uppercase block">Example Improvement Initiative:</span>
                    <p className="text-slate-600 leading-relaxed">{ind.exampleInitiative}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-bold">
                  {ind.kpis}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 10: GOVERNANCE & SUSTAINABILITY ── */}
      <section id="governance" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Operational Rhythms
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Make Improvement Part of the Revenue Operating Rhythm
            </h2>
            <p className="text-base text-slate-600">
              Improvement fails when treated as an ad-hoc distraction. Sustainable performance gains require institutionalized operating cadences connecting frontline triage to executive board strategy.
            </p>
          </div>

          {/* Governance Cadence Table */}
          <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-mono text-xs">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Cadence</th>
                  <th className="p-4 sm:p-5 font-bold">Meeting Rhythm</th>
                  <th className="p-4 sm:p-5 font-bold">Duration</th>
                  <th className="p-4 sm:p-5 font-bold">Participants</th>
                  <th className="p-4 sm:p-5 font-bold">Operational Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {GOVERNANCE_CADENCE.map((cad, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-mono text-xs font-bold text-blue-700">
                      {cad.frequency}
                    </td>
                    <td className="p-4 sm:p-5 font-bold font-heading text-slate-900">
                      {cad.meeting}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-xs text-slate-600">
                      {cad.duration}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      {cad.participants}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700 leading-relaxed">
                      {cad.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Governance Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            {[
              { title: 'Executive Ownership', desc: 'CRO and revenue leadership actively champion the improvement backlog and enforce SLA boundaries.' },
              { title: 'Frontline Empowerment', desc: 'Sales reps and SDRs have direct channels to submit friction points without hierarchical friction.' },
              { title: 'Data Integrity Gatekeeping', desc: 'No opportunity advances to forecast commit without meeting mandatory verification criteria.' },
              { title: 'Continuous Monitoring', desc: 'Automated anomaly detection alerts leaders the moment stage dwell times exceed upper control limits.' }
            ].map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold text-blue-700 block">Principle 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-slate-900 font-heading">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 11: RELATED KNOWLEDGE HUBS ── */}
      <section id="related-hubs" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Cross-Hub Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Explore Related Knowledge Hubs
            </h2>
            <p className="text-base text-slate-600">
              Continuous sales improvement operates as the operational discipline powering our adjacent analytical, sales acceleration, and AI automation hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Automation Excellence Hub',
                desc: 'Orchestrate 8 connected automation capabilities: workflow routing, AI lead scoring, CRM hygiene, and system integrations.',
                path: '/resources-hub/automation-excellence',
                badge: 'Category 08',
                icon: Zap
              },
              {
                title: 'GTM & Revenue Operations Hub',
                desc: '8 fundamental revenue disciplines including ICP targeting, buyer journey mapping, and continuous pipeline velocity.',
                path: '/resources-hub/gtm-revenue-operations-hub',
                badge: 'Category 05',
                icon: BarChart3
              },
              {
                title: 'AI & Agentic Automation Hub',
                desc: 'Multi-agent orchestration, autonomous prospecting agents, and enterprise cognitive decision architectures.',
                path: '/resources-hub/ai-agentic-automation-hub',
                badge: 'Category 07',
                icon: BrainCircuit
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
                    <span>Explore Knowledge Hub</span>
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
            Empirical Revenue Optimization
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Ready to Improve the Performance of Your Revenue Engine?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Identify the process friction, execution gaps, and performance constraints limiting your sales organization. Explore how ProfitMachines can help you build an efficient, measurable, and continuously improving revenue operation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-consultation"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
            >
              <span>Book a Revenue Improvement Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/offerings"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore ProfitMachines Offerings</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Confidential Commercial Diagnostic
            </span>
            <span>•</span>
            <span>Non-Disruptive Operational Engagement</span>
          </div>
        </div>
      </section>

    </div>
  );
}

