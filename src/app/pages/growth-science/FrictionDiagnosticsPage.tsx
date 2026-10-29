import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Radar, AlertTriangle, ShieldAlert,
  CheckCircle2, Activity, Zap, TrendingUp, Layers, Cpu,
  LineChart, Quote, ArrowUpRight, Filter, AlertCircle, RefreshCw
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function FrictionDiagnosticsPage() {
  useEffect(() => {
    document.title = 'Friction Diagnostics: Where Growth Stalls — And Why | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const domains = [
    {
      title: 'Pipeline Leakage & Stall Points',
      severity: 'Critical Stress Zone (48% Avg Capital Drain)',
      severityColor: 'rose',
      diagnosticCode: 'Stress Point 01',
      question: 'Do you know where deals die — or do you just know they didn\'t close?',
      situation: 'Sales teams track win rates by stage but don\'t understand why deals stall at specific points. They assume pipeline problems are random.',
      hiddenProblem: 'Specific stages have predictable leakage patterns — discovery-to-proposal, proposal-to-negotiation, negotiation-to-close. Each has distinct root causes (lack of multi-threading, weak business case, competitive displacement).',
      implication: 'You invest in generating more pipeline without fixing the leaks. The result: more leads, same close rate, higher CAC.',
      trigger: 'When forecast accuracy drops below 70% and the board starts questioning the sales process.',
      resolution: 'We map every stage joint, quantify leakage at each point, identify the root causes, and rebuild the weakest links first. Pipeline velocity becomes predictable, not hopeful.',
      metric: '40-60%',
      metricLabel: 'reduction in stage-to-stage leakage within 2 quarters',
      secondaryMetric: '2.4X',
      secondaryMetricLabel: 'pipeline velocity lift across key conversion gates',
      quote: 'We had plenty of pipeline but deals kept stalling in negotiation — we didn\'t know why until we mapped the friction.',
      quoteAuthor: 'Global Head of Enterprise Sales, Cloud Security'
    },
    {
      title: 'Margin Erosion & Pricing Friction',
      severity: 'High Silent Drain (5-15% Net ARR Dilution)',
      severityColor: 'amber',
      diagnosticCode: 'Stress Point 02',
      question: 'Are you winning deals by sacrificing margin — and do you even know it?',
      situation: 'Sales teams negotiate discounts to close deals. Leadership assumes pricing is optimized because "we\'re winning."',
      hiddenProblem: 'Discount creep is invisible until you aggregate it. A 5% discount on a $20M book is a silent $1M annual leak. Without pricing governance, you\'re subsidizing growth with margin.',
      implication: 'Revenue grows but profitability shrinks. By the time you notice, the pricing culture is entrenched and hard to reverse.',
      trigger: 'When renewal season arrives or a competitor undercuts you — and you have no data to defend your price.',
      resolution: 'We replace pricing instinct with buyer-evidenced price points, install discount guardrails in the CRM, and track margin realization monthly.',
      metric: '5-15 pts',
      metricLabel: 'gross margin recovery without sacrificing win rate',
      secondaryMetric: '$1.8M',
      secondaryMetricLabel: 'annual unrecovered discount leakage reclaimed',
      quote: 'Reps were giving away 20% discounts without approval — we didn\'t realize the cumulative impact until we audited the data.',
      quoteAuthor: 'VP Commercial Operations, B2B FinTech'
    },
    {
      title: 'Operational & Tech-Stack Silos',
      severity: 'Systemic Impedance (30% Rep Capacity Lost)',
      severityColor: 'purple',
      diagnosticCode: 'Stress Point 03',
      question: 'Is your tech stack accelerating revenue — or creating friction?',
      situation: 'Enterprises run 15+ disconnected tools (CRM, marketing automation, analytics, sales enablement). Each team optimizes their slice.',
      hiddenProblem: 'Data doesn\'t flow between systems. Reps spend 30% of their time on manual data entry. Forecasts are based on stale information. The result: operational friction that slows every process.',
      implication: 'You\'re paying for tools that don\'t talk to each other, while your team drowns in admin work instead of selling.',
      trigger: 'When a new CRO inherits a tech stack they didn\'t build and realizes none of it integrates.',
      resolution: 'We audit the entire GTM tech stack, identify integration gaps, and deploy a unified telemetry layer that connects every system.',
      metric: '60%',
      metricLabel: 'reduction in administrative time across the GTM bench',
      secondaryMetric: '80%',
      secondaryMetricLabel: 'increase in active selling time for front-line account executives',
      quote: 'Reps spent more time updating Salesforce than talking to prospects — the tech stack was creating friction, not removing it.',
      quoteAuthor: 'Chief Revenue Officer, Industrial SaaS'
    },
    {
      title: 'Organizational & Change Resistance',
      severity: 'Execution Blockade (40% Adoption Ceiling)',
      severityColor: 'blue',
      diagnosticCode: 'Stress Point 04',
      question: 'Is your organization structured for growth — or for maintaining the status quo?',
      situation: 'Companies reorganize sales territories, launch new products, or shift go-to-market motions — but adoption stalls. The initiative "launches" but doesn\'t stick.',
      hiddenProblem: 'Change fails not because the strategy is wrong, but because the organization resists it. Incentives are misaligned, training is insufficient, and leadership doesn\'t reinforce the new behaviors.',
      implication: 'You invest millions in transformation initiatives that never reach full adoption. The ROI never materializes.',
      trigger: 'When a new GTM motion launches but adoption plateaus at 40% after 6 months.',
      resolution: 'We design change management as a core component of every engagement. Incentive alignment, role-based training, executive sponsorship, and continuous reinforcement ensure new processes stick.',
      metric: '80-90%',
      metricLabel: 'adoption rate within 90 days of deployment',
      secondaryMetric: '100%',
      secondaryMetricLabel: 'compensation and quota alignment with desired behaviors',
      quote: 'We launched the new sales process but reps kept using the old one — we didn\'t realize change management was the missing piece.',
      quoteAuthor: 'EVP Field Operations, Multi-Cloud Services'
    }
  ];

  const outcomes = [
    { stat: '40-60%', label: 'Stage Leakage Compression', detail: 'Deals stop stalling between discovery, technical validation, and procurement' },
    { stat: '5-15 pts', label: 'Gross Margin Reclaimed', detail: 'Hard discount limits and value-evidenced pricing eliminate concession habits' },
    { stat: '60%', label: 'Admin Friction Eliminated', detail: 'Autonomous ingestion replaces manual logging across CRM and BI stacks' },
    { stat: '80-90%', label: 'Sustained Process Adoption', detail: 'Incentive engineering and executive reinforcement lock new revenue habits' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-600/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/growth-science" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
              Growth Science Hub
            </Link>
            <span className="text-slate-600 text-xs">/</span>
            <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">
              Pillar 02
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <Radar className="w-3.5 h-3.5 text-rose-400" />
                PILLAR 02 OF 05
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
                Friction Diagnostics:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-orange-300">
                  Where Growth Stalls — And Why
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Every revenue system has friction points that silently erode performance. Most companies never identify them until growth plateaus. We map the four critical friction domains and quantify their impact before prescribing solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#intake" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-rose-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                  Run a Friction Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#diagnostic-report" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                  View Diagnostic Map
                  <ChevronRight className="w-4 h-4 text-rose-400" />
                </a>
              </div>
            </div>

            {/* Visual: Fracture Map Simulation */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Systemic Fracture Map</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    4 Stress Zones Detected
                  </span>
                </div>

                {/* Fracture Nodes */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-lg shadow-rose-500/50" />
                      <div>
                        <div className="text-xs font-bold text-white">Pipeline Joint: Stage 3 to 4</div>
                        <div className="text-[11px] text-rose-300 font-mono">Critical Disconnect · 52% Drop</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-800">High Risk</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
                      <div>
                        <div className="text-xs font-bold text-white">Commercial: Discount Slippage</div>
                        <div className="text-[11px] text-amber-300 font-mono">Uncontrolled Concession · -8.4 pts</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">Erosion</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
                      <div>
                        <div className="text-xs font-bold text-white">Tooling: GTM Silo Fragmentation</div>
                        <div className="text-[11px] text-purple-300 font-mono">14 Disconnected SaaS Apps</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">Friction</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                      <div>
                        <div className="text-xs font-bold text-white">Organization: Motion Inertia</div>
                        <div className="text-[11px] text-blue-300 font-mono">40% Adoption Plateau in Reps</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">Behavior</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Prescription Matrix</span>
                  <span className="text-rose-400 font-bold">Interventions Calibrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PRINCIPLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono text-rose-700 uppercase tracking-widest font-bold">The Diagnostic Thesis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Growth Stalls at Predictable Friction Points
            </h2>
          </div>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
            <div className="absolute top-6 right-8 text-slate-200 font-serif text-7xl select-none leading-none opacity-40">“</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              Every revenue system develops friction — points where momentum dies, margin leaks, or execution breaks down. These friction points are not random. They cluster in four predictable domains: pipeline leakage, margin erosion, operational silos, and organizational resistance. Most companies never identify them systematically. They react to symptoms (missed forecasts, compressed margins, stalled adoption) without diagnosing root causes. We map every friction domain, quantify its impact, and prescribe targeted interventions — turning invisible friction into measurable acceleration.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-sm">FD</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">ProfitMachines Diagnostic Audit Group</div>
                  <div className="text-xs text-slate-500 font-mono">Full-Stack Forensic Telemetry</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200">
                Deterministic Intervention Protocol
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4 FRICTION DOMAINS (DIAGNOSTIC REPORT LAYOUT) ── */}
      <section id="diagnostic-report" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-rose-600 uppercase tracking-widest font-bold">Diagnostic Findings Dossier</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Forensic Audit of the Four Friction Domains
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Detailed findings, root cause mechanics, and remediation playbooks for the four friction clusters that choke growth.
            </p>
          </div>

          <div className="space-y-16">
            {domains.map((dom, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 shadow-sm overflow-hidden hover:border-rose-300 transition-all"
              >
                {/* Header Dossier Strip */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-widest font-bold">
                        {dom.diagnosticCode}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{dom.severity}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {dom.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-slate-800 text-rose-300 px-3 py-1.5 rounded-lg border border-slate-700">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      Forensic Audit Validated
                    </span>
                  </div>
                </div>

                {/* Narrative Diagnostic Grid */}
                <div className="p-6 sm:p-10">
                  {/* Sharp Provocative Question */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <div className="text-xs font-mono text-rose-600 uppercase tracking-wider mb-2 font-bold">Core Diagnostic Invalidation</div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 italic font-heading">
                      "{dom.question}"
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* The Situation */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200">
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        Observed State
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{dom.situation}</p>
                    </div>

                    {/* The Hidden Problem */}
                    <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
                      <div className="text-xs font-mono text-rose-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        Root Structural Defect
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{dom.hiddenProblem}</p>
                    </div>

                    {/* The Implication */}
                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                      <div className="text-xs font-mono text-amber-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        Compounding Friction Cost
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{dom.implication}</p>
                    </div>

                    {/* The Critical Trigger */}
                    <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200">
                      <div className="text-xs font-mono text-red-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-red-600" />
                        Executive Trigger Event
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{dom.trigger}</p>
                    </div>

                    {/* The Resolution */}
                    <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 md:col-span-2">
                      <div className="text-xs font-mono text-emerald-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Prescribed Diagnostic Remediation
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{dom.resolution}</p>
                    </div>
                  </div>

                  {/* Metrics and Quote */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Primary Recovery</div>
                        <div className="text-3xl font-extrabold text-rose-400 my-2 font-heading">{dom.metric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{dom.metricLabel}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Velocity Lift</div>
                        <div className="text-3xl font-extrabold text-amber-400 my-2 font-heading">{dom.secondaryMetric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{dom.secondaryMetricLabel}</div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col justify-between">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                        <div>
                          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">Client Forensic Quote</div>
                          <p className="text-sm italic text-slate-800 font-medium">"{dom.quote}"</p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 text-right mt-3 font-mono">
                        — {dom.quoteAuthor}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ── B2B & B2C GROWTH BLOCKERS & KPI RELATIONSHIPS ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-rose-600 uppercase tracking-widest font-bold">Structural Friction Analysis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              B2B & B2C Growth Blockers Diagnostic Matrix
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Commercial friction operates under fundamentally different mechanisms in enterprise B2B versus high-velocity B2C models. The diagnostic matrices below detail the ten critical blockers for each archetype, their directly impacted KPIs, and the underlying structural mechanisms.
            </p>
          </div>

          <div className="space-y-12">
            {/* B2B Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-1">
                    Enterprise Commercial Friction
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                    B2B Growth Blockers & Impacted KPIs
                  </h3>
                </div>
                <div className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                  Multi-Stakeholder Dynamics
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-slate-500">
                      <th className="py-3 px-4 font-bold text-slate-900">Growth Blocker</th>
                      <th className="py-3 px-4 font-bold text-rose-600">Impacted KPI</th>
                      <th className="py-3 px-4 font-bold text-slate-900">Underlying Diagnostic Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-normal">
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Poor ICP Definition</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">CAC &lt;$18.5k | Win Rate 28%–35%</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">Payback &lt;12 Mo | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Misaligned targeting squanders rep outreach and paid ad budget on accounts lacking technical readiness or commercial need, inflating acquisition costs while depressing close rates.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Weak Pipeline Coverage</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">3.5x–4.2x Pipeline Coverage</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">+22%–35% Net ARR Lift | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Operating under 3.5x pipeline coverage creates catastrophic exposure to quarter-end slippage, forcing reactive discounting and volatile revenue generation.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Low Sales Velocity</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">48–65 Days Sales Cycle</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">3.2x Velocity Lift | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Target Milestone</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Prolonged deal dormancy between stage progression gates compresses annual recurring revenue compounding and delays critical operating cash inflows.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Long Sales Cycles</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">-28% to -40% Cycle Duration</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&lt;60 Days Average Close | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Unresolved consensus across buying committees delays contract execution, postponing revenue recognition into future quarters.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Low Conversion Rates</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">42% Demo-to-Opp | 32%–38% Opp-to-Close</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">Benchmark: 25% | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Sourced Benchmark</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Drop-offs at proposal and technical evaluation stages indicate failure to establish clear executive priority and economic justification early in discovery.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Poor Customer Retention</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">115%–128% Net Revenue Retention (NRR)</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&lt;5% Gross Churn | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Onboarding friction and slow initial time-to-value trigger contract cancellations, severely eroding Net Revenue Retention and truncating customer lifetime value.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Lack of Executive Sponsorship</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">48% Win Rate (≥4 C-Level Threads)</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">vs 18% Single-Threaded | <span className="text-indigo-700 font-semibold bg-indigo-50 px-1.5 py-0.5 rounded">Enterprise Metric</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Engaging solely with technical champions leaves proposals vulnerable to sudden C-suite vetoes when budget reallocation decisions occur.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Data & Process Silos</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">&lt;15% Rep Admin Overhead</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">65%+ Active Selling Hours | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Operational Standard</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Disconnected CRM, marketing, and CS tools force manual double-entry, depriving account executives of 30-40% of their active selling time.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Inability to Demonstrate ROI</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">&gt;45% Contested Win Rate</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">88% CFO First-Pass Approval | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Sourced Benchmark</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Failure to translate technical capabilities into the executive financial language causes deals to stall indefinitely in no-decision review.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Talent & Execution Gaps</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">78% Quota Attainment</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&lt;45d Ramp Duration | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">High sales rep turnover and inconsistent playbook execution prevent organizations from scaling revenue proportionally with headcount growth.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* B2C Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest mb-1">
                    Direct-to-Consumer Velocity Friction
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                    B2C Growth Blockers & Impacted KPIs
                  </h3>
                </div>
                <div className="px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-bold">
                  Transaction & Volume Velocity
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider text-slate-500">
                      <th className="py-3 px-4 font-bold text-slate-900">Growth Blocker</th>
                      <th className="py-3 px-4 font-bold text-rose-600">Impacted KPI</th>
                      <th className="py-3 px-4 font-bold text-slate-900">Underlying Diagnostic Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-normal">
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">High Customer Acquisition Cost (CAC)</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">Blended CAC &lt;$24.50</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&lt;60d Payback | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Sourced Benchmark</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Escalating auction bids on dominant digital ad platforms compress unit gross margins, turning initial transactions net-loss-making.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Low Conversion Rate</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">3.8%–4.6% Conversion Rate</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&lt;58% Cart Abandon | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Checkout friction, sluggish mobile latency, and generic landing pages bleed intent traffic before transactions complete.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Poor Customer Experience</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">&gt;92% CSAT Score</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">24%–32% 30-Day Repeat | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Slow fulfillment, delivery exceptions, and rigid return friction alienate buyers immediately post-purchase, extinguishing repeat purchase rates.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Weak Brand Differentiation</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">+12%–18% Price Premium</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&gt;45% Organic Direct Share | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Target Milestone</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Commoditized positioning forces price-matching wars against low-cost marketplace competitors, eliminating premium price defensibility.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">High Churn</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">&gt;62% 90-Day Cohort Retention</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&gt;4.2x LTV:CAC Ratio | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Inability to establish habitual product utilization within the first 30 days results in abrupt consumer abandonment and collapsed LTV.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Pricing Misalignment</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">42%–55% Contribution Margin</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">$85–$120 AOV | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Sourced Benchmark</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Rigid pricing uncalibrated against real-time buyer willingness-to-pay either leaves margin on the table or suppresses volume.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Low Repeat Purchases</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">34%–48% Annual Repeat Rate</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">2.8x 12-Month LTV | <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Verified Actual</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Absence of automated behavioral re-engagement loops caps customer value at a single transaction, requiring continuous re-acquisition spend.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Channel Dependence</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">&lt;35% Max Single Channel Share</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">4+ Diversified Channels | <span className="text-purple-700 font-semibold bg-purple-50 px-1.5 py-0.5 rounded">Portfolio Standard</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Over-reliance on a single paid traffic network exposes the brand to catastrophic algorithm changes and auction inflation.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Poor Customer Data Utilization</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">8.4% Reco CTR | +18%–26% Lift</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">Dynamic Audiences | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Sourced Benchmark</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Failure to activate real-time browsing telemetry leads to irrelevant product recommendations and decayed email click-through rates.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 font-heading whitespace-nowrap">Slow Innovation Cycle</td>
                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs font-bold text-slate-900">&lt;14 Days Catalog Refresh</div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">&gt;1,200 Units/SKU 30d Velocity | <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Target Milestone</span></div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">Prolonged product development and slow seasonal refreshes forfeit category mindshare to agile direct-to-consumer competitors.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERIFIED OUTCOMES GRID ── */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest font-bold">Empirical Proof</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
              Verified Friction Removal Benchmarks
            </h2>
            <p className="text-slate-400 text-base mt-3">
              Forensically proven across high-growth enterprise software, infrastructure, and services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-rose-500/50 transition-all">
                <div className="text-4xl font-extrabold text-rose-400 mb-2 font-heading">{item.stat}</div>
                <div className="text-base font-bold text-white mb-2">{item.label}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PILLARS CROSS-LINKS ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-rose-600 uppercase tracking-widest font-bold">System Interconnection</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Friction Diagnostics Informs Acceleration
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Pinpointing where friction occurs is the essential prerequisite to applying physics, deploying autonomous AI engines, and monitoring telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/growth-science/revenue-physics"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">Pillar 01</span>
                  <Activity className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Revenue Physics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The mathematical laws of cohort compounding, unit economics, and profit pools that define baseline potential.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-blue-600">
                Explore Revenue Physics <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/growth-science/ai-engines"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-700 font-bold">Pillar 03</span>
                  <Cpu className="w-5 h-5 text-violet-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">AI Acceleration Engines</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deploys autonomous agents and algorithmic workflows to systematically bypass identified human and tech bottlenecks.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-violet-600">
                Explore AI Engines <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/growth-science/executive-telemetry"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold">Pillar 05</span>
                  <LineChart className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Executive Telemetry</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time C-suite scorecards and predictive radar that constantly alert leadership to emerging friction points.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-indigo-600">
                Explore Executive Telemetry <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA & INTAKE FORM ── */}
      <section id="intake" className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 text-xs font-mono uppercase tracking-widest mb-6">
                Forensic Diagnostic Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
                Ready to Identify Where Your Growth Stalls?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Execute a confidential Friction Diagnostic with our Senior Partners. We will pinpoint pipeline fracture points, pricing leakage, and tech stack dead zones within your revenue engine.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Full-funnel stage conversion leakage analysis and deal forensics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Discount drift and unrecovered price concession audit</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Tech stack redundancy and rep admin time quantification</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">500+</div>
                  <div className="text-xs text-slate-400">B2B Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">5X</div>
                  <div className="text-xs text-slate-400">Avg Revenue Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">24/7</div>
                  <div className="text-xs text-slate-400">Autonomous Support</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Request Friction Diagnostic Audit</h3>
                <p className="text-xs text-slate-400 mb-6">Confidential intake. Direct routing to Forensic Diagnostic Practice.</p>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
