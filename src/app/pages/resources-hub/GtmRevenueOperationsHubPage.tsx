import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Target,
  GitMerge,
  Sliders,
  Workflow,
  BrainCircuit,
  BarChart3,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  Search,
  Check,
  Gauge,
  Zap,
  Scale,
  Terminal,
  X,
  Compass,
  Cpu,
  Lock,
  DollarSign
} from 'lucide-react';
import {
  GTM_REVOPS_SECTIONS,
  GTM_REVOPS_PRACTICAL_APPLICATIONS,
  GtmRevOpsSection
} from '../../../data/gtmRevOpsHubData';
import { trackEvent } from '../../../lib/analytics';

// RevOps Architectural Layers
const REVOPS_LAYERS = [
  {
    layerNumber: '01',
    layerName: 'Market & Customer Architecture',
    layerSubtitle: 'Deterministic targeting, buyer committee mapping & outbound precision',
    disciplines: ['icp-frameworks', 'buyer-journey-models'],
    theme: 'border-blue-200 text-blue-700 bg-blue-50'
  },
  {
    layerNumber: '02',
    layerName: 'Pipeline Conversion & Operating Stack',
    layerSubtitle: 'Full-funnel stage gates, handoff SLAs & unified revenue data plane',
    disciplines: ['funnel-optimization', 'revops-frameworks'],
    theme: 'border-sky-200 text-sky-700 bg-sky-50'
  },
  {
    layerNumber: '03',
    layerName: 'Telemetry, Signals & Predictive Intelligence',
    layerSubtitle: 'Continuous conversation analysis, deal health scoring & mathematical forecasting',
    disciplines: ['revenue-intelligence', 'forecasting-models'],
    theme: 'border-indigo-200 text-indigo-700 bg-indigo-50'
  },
  {
    layerNumber: '04',
    layerName: 'Capacity Engineering & Compounding Scale',
    layerSubtitle: 'Bottom-up quota ramp modeling, multi-engine growth & NRR compounding',
    disciplines: ['capacity-planning', 'revenue-growth-frameworks'],
    theme: 'border-emerald-200 text-emerald-700 bg-emerald-50'
  }
];

// Helper badge color mapper (Offerings-matched crisp light tones)
function getBadgeClasses(color: string) {
  switch (color) {
    case 'blue':    return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
    case 'emerald': return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' };
    case 'violet':  return { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
    case 'amber':   return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' };
    case 'cyan':    return { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' };
    case 'rose':    return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' };
    case 'indigo':  return { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
    case 'teal':    return { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' };
    default:        return { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' };
  }
}

// ── Visual 1: ICP 4-Pillar Scoring & Tiering ──
function IcpVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            ICP Multi-Dimensional Scoring Engine
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          Algorithmic Targeting Engine
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Firmographics (25%)</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 mt-1">$50M–$500M ARR</div>
          <div className="text-xs font-mono text-slate-600 mt-0.5">250–5,000 FTEs · Geo-Fit</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Technographics (25%)</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 mt-1">Modern RevTech</div>
          <div className="text-xs font-mono text-slate-600 mt-0.5">Enterprise Cloud + CRM</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Intent Telemetry (30%)</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-600 mt-1">Active Buying Surge</div>
          <div className="text-xs font-mono text-emerald-700 font-medium mt-0.5">Dark-funnel evaluation</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Unit Economics (20%)</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-600 mt-1">&gt;$100K Target ACV</div>
          <div className="text-xs font-mono text-indigo-700 font-medium mt-0.5">&gt;120% NRR potential</div>
        </div>
      </div>
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Tier 1 (Score 90–100): High-Touch Executive Pursuit
        </span>
        <span className="text-blue-800 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Tier 2 (Score 75–89): Multi-Channel Account Nurture
        </span>
        <span className="text-slate-700 bg-white px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-slate-400"></span>
          Tier 3 (Score &lt;75): Automated Digital Only
        </span>
      </div>
    </div>
  );
}

// ── Visual 2: Buyer Journey Persona Matrix ──
function BuyerJourneyVisual() {
  const personas = [
    { role: 'Economic Buyer', focus: 'ROI, payback velocity, budget authority & risk governance', badge: 'Decision Sponsor', color: 'border-emerald-200 bg-emerald-50/60 text-emerald-800' },
    { role: 'Technical Evaluator', focus: 'Security posture, API schema, architecture fit & data privacy', badge: 'Architecture Gate', color: 'border-blue-200 bg-blue-50/60 text-blue-800' },
    { role: 'Business Champion', focus: 'Operational problem removal, team efficiency & adoption speed', badge: 'Internal Mobilizer', color: 'border-indigo-200 bg-indigo-50/60 text-indigo-800' },
    { role: 'Procurement / Legal', focus: 'Contract SLAs, liability limits, commercial terms & vendor audit', badge: 'Commercial Gate', color: 'border-amber-200 bg-amber-50/60 text-amber-800' }
  ];
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <GitMerge className="w-5 h-5 text-indigo-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Enterprise Buying Committee Blueprint
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
          6-Stage Gate Progression
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {personas.map((p) => (
          <div key={p.role} className={`p-4 rounded-2xl border ${p.color} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase">{p.role}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/80 border border-slate-200/60">{p.badge}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">{p.focus}</p>
          </div>
        ))}
      </div>
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between flex-wrap gap-2">
        <span className="font-semibold text-slate-800">Gate 1: Problem Identification</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800">Gate 2: Solution Exploration</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800">Gate 3: Vendor Evaluation</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">Gate 4: Value Realization</span>
      </div>
    </div>
  );
}

// ── Visual 3: Funnel Velocity & Leakage ──
function FunnelVisual() {
  const stages = [
    { name: 'Market Demand / Inbound Signals', vol: '10,000 Accounts', conv: '100%', leak: 'Baseline' },
    { name: 'Verified MQL / Target ICP Fit', vol: '2,200 Accounts', conv: '22.0%', leak: '-78% Filter' },
    { name: 'Sales Accepted Opportunity (SQL)', vol: '1,450 SQLs', conv: '65.9%', leak: '-34% Handoff' },
    { name: 'Stage 2+ Validated Business Case', vol: '620 Opps', conv: '42.8%', leak: '-57% Qualification' },
    { name: 'Executive Contract Closed-Won', vol: '190 Deals', conv: '30.6%', leak: '-69% Execution' }
  ];
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-purple-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Funnel Stage-Gate Telemetry &amp; Leakage Audit
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-bold border border-purple-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
          Deterministic Exit Criteria
        </span>
      </div>
      <div className="space-y-2.5">
        {stages.map((stg, idx) => (
          <div key={stg.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs font-mono gap-2 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0 border border-blue-200">
                0{idx + 1}
              </span>
              <span className="text-slate-900 font-bold">{stg.name}</span>
            </div>
            <div className="flex items-center gap-4 text-right">
              <span className="text-slate-600">{stg.vol}</span>
              <span className="text-emerald-700 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">{stg.conv}</span>
              <span className="text-rose-600 text-[11px] font-bold">{stg.leak}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Visual 4: RevOps Hub Architecture ──
function RevOpsVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Workflow className="w-5 h-5 text-sky-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Single Data Plane RevOps Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-bold border border-sky-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
          SSOT Data Fabric
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/70">
          <span className="text-xs font-mono font-bold text-blue-700 block mb-1 uppercase tracking-wider">01. Marketing Ops</span>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">Multi-touch attribution, intent signal routing &amp; campaign ROI telemetry</p>
        </div>
        <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/70">
          <span className="text-xs font-mono font-bold text-indigo-700 block mb-1 uppercase tracking-wider">02. Direct Sales Ops</span>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">Stage governance, CPQ workflows, quota pacing &amp; deal health tracking</p>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
          <span className="text-xs font-mono font-bold text-emerald-700 block mb-1 uppercase tracking-wider">03. Customer Success Ops</span>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">Product adoption telemetry, health scoring, churn risk &amp; NRR expansion</p>
        </div>
        <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70">
          <span className="text-xs font-mono font-bold text-amber-700 block mb-1 uppercase tracking-wider">04. Revenue Finance Ops</span>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">Billing reconciliation, CAC payback, LTV modeling &amp; Board ledger sync</p>
        </div>
      </div>
    </div>
  );
}

// ── Visual 5: Revenue Intelligence Alerts ──
function IntelligenceVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Real-Time Revenue Telemetry &amp; Signal Feed
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          Continuous Ingestion Active
        </span>
      </div>
      <div className="space-y-2.5 text-xs font-mono">
        <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-emerald-800 font-bold">[INTENT SURGE DETECTED]</span>
            <span className="text-slate-800 font-semibold ml-2">Enterprise FinTech Target Account (Score 96/100)</span>
          </div>
          <span className="text-slate-600 text-[11px]">Pricing page re-visit ×4 · Security doc download</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-amber-800 font-bold">[DEAL RISK DETECTED]</span>
            <span className="text-slate-800 font-semibold ml-2">Global SaaS Opportunity ($240K ACV)</span>
          </div>
          <span className="text-slate-600 text-[11px]">Single-threaded · CFO departed thread 14 days ago</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-blue-800 font-bold">[NEXT BEST ACTION]</span>
            <span className="text-slate-800 font-semibold ml-2">Deploy Enterprise Compliance Playbook to Lead Architect</span>
          </div>
          <span className="text-slate-600 text-[11px]">Evaluation meeting in 48h</span>
        </div>
      </div>
    </div>
  );
}

// ── Visual 6: 3-Scenario Forecasting ──
function ForecastingVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-rose-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Triangulated Quarterly Forecasting Ledger
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold border border-rose-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
          ±5% Target Precision
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <span className="text-xs font-mono font-bold text-slate-500 block mb-1">CONSERVATIVE COMMIT</span>
          <div className="text-2xl font-bold font-mono text-slate-900">$4.20M ARR</div>
          <p className="text-xs text-slate-600 mt-1">100% Closed-Won + 85% Weighted Commit Only</p>
        </div>
        <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/90">
          <span className="text-xs font-mono font-bold text-rose-700 block mb-1">BASE STATISTICAL PLAN</span>
          <div className="text-2xl font-bold font-mono text-rose-900">$5.15M ARR</div>
          <p className="text-xs text-rose-700/80 mt-1">Historical Cohort Progression + 50% Best Case</p>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/90">
          <span className="text-xs font-mono font-bold text-emerald-700 block mb-1">STRETCH OUTPERFORMANCE</span>
          <div className="text-2xl font-bold font-mono text-emerald-900">$5.90M ARR</div>
          <p className="text-xs text-emerald-700/80 mt-1">Full Rep Quota Attainment + 70% Acceleration</p>
        </div>
      </div>
    </div>
  );
}

// ── Visual 7: Capacity Planning Ramp ──
function CapacityVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Enterprise AE Capacity &amp; Ramp Schedule Model
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          12-Month Quota Engineering
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs font-mono">
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center">
          <div className="text-slate-500 uppercase font-bold text-[10px]">Months 1–3</div>
          <div className="text-xl font-bold text-slate-900 mt-1">0% Quota</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Enablement &amp; Pipeline</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center">
          <div className="text-slate-500 uppercase font-bold text-[10px]">Months 4–6</div>
          <div className="text-xl font-bold text-blue-700 mt-1">35% Quota</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Initial Deal Execution</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center">
          <div className="text-slate-500 uppercase font-bold text-[10px]">Months 7–9</div>
          <div className="text-xl font-bold text-indigo-700 mt-1">75% Quota</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Full Pipeline Velocity</div>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center">
          <div className="text-emerald-700 uppercase font-bold text-[10px]">Months 10–12</div>
          <div className="text-xl font-bold text-emerald-800 mt-1">100% Quota</div>
          <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Fully Ramped ($1.2M/yr)</div>
        </div>
      </div>
    </div>
  );
}

// ── Visual 8: Growth Vectors Architecture ──
function GrowthVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-teal-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            Compounding Revenue Growth Flywheel Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-bold border border-teal-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
          Multi-Engine Expansion
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs font-mono">
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-bold block">Engine 01</span>
          <strong className="text-slate-900 text-sm block mt-1">New Logo Acquisition</strong>
          <span className="text-blue-700 text-[11px] font-bold block mt-0.5">High-Fit ICP</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-bold block">Engine 02</span>
          <strong className="text-slate-900 text-sm block mt-1">Account Expansion</strong>
          <span className="text-emerald-700 text-[11px] font-bold block mt-0.5">&gt;125% NRR Target</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-bold block">Engine 03</span>
          <strong className="text-slate-900 text-sm block mt-1">Pricing &amp; Packaging</strong>
          <span className="text-indigo-700 text-[11px] font-bold block mt-0.5">+22% Gross Margin</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-bold block">Engine 04</span>
          <strong className="text-slate-900 text-sm block mt-1">Partner Co-Selling</strong>
          <span className="text-purple-700 text-[11px] font-bold block mt-0.5">3.2× Win Rate Multiplier</span>
        </div>
      </div>
    </div>
  );
}

// Section Visual Dispatcher
function SectionVisual({ type }: { type: GtmRevOpsSection['visualType'] }) {
  switch (type) {
    case 'icp':           return <IcpVisual />;
    case 'buyerJourney':   return <BuyerJourneyVisual />;
    case 'funnel':         return <FunnelVisual />;
    case 'revops':         return <RevOpsVisual />;
    case 'intelligence':   return <IntelligenceVisual />;
    case 'forecasting':    return <ForecastingVisual />;
    case 'capacity':       return <CapacityVisual />;
    case 'growth':         return <GrowthVisual />;
    default:               return null;
  }
}

export default function GtmRevenueOperationsHubPage() {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState<string>(GTM_REVOPS_SECTIONS[0].id);
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openLedger, setOpenLedger] = useState<Record<string, 'challenges' | 'kpis' | 'connection'>>({});

  useEffect(() => {
    document.title = 'GTM & Revenue Operations Hub | ProfitMachines Revenue Architecture';
    window.scrollTo(0, 0);
    trackEvent({ eventName: 'PAGE_VIEW_GTM_REVOPS_HUB', category: 'NAVIGATION' });

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setActiveSectionId(targetId);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  const scrollToAnchor = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toggle ledger view (challenges, kpis, or connection) per section
  const toggleLedger = (sectionId: string, view: 'challenges' | 'kpis' | 'connection') => {
    setOpenLedger((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === view ? ('kpis' as const) : view
    }));
  };

  // Global search filtering across all frameworks and disciplines
  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();
    const results: { section: GtmRevOpsSection; framework: GtmRevOpsSection['frameworks'][0] }[] = [];

    GTM_REVOPS_SECTIONS.forEach((sec) => {
      sec.frameworks.forEach((fw) => {
        if (
          fw.title.toLowerCase().includes(query) ||
          fw.description.toLowerCase().includes(query) ||
          (fw.formula && fw.formula.toLowerCase().includes(query)) ||
          fw.steps.some((s) => s.toLowerCase().includes(query))
        ) {
          results.push({ section: sec, framework: fw });
        }
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="bg-white/95 border-b border-slate-200 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors text-slate-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/resources-hub" className="hover:text-blue-600 transition-colors text-slate-600">Resources Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-bold">GTM &amp; Revenue Operations Hub</span>
            </div>

            {/* Quick System Telemetry Tag */}
            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>REVOPS OS v4.2 • 8 SYSTEM DISCIPLINES</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 01: HERO SECTION (MATCHES OFFERINGS PALETTE: DARK GRADIENT HERO) ── */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Editorial */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <Workflow className="w-3.5 h-3.5 text-blue-400" />
                Enterprise Revenue Architecture Platform
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading">
                  The Enterprise <br />
                  Go-to-Market &amp; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                    Revenue Operations Hub.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-300 font-heading">
                  Connect ideal customer targeting, buyer journeys, stage-gate conversions, unified data telemetry, and empirical forecasting into one compounding commercial engine.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                B2B enterprise revenue fails when marketing, sales, and customer operations operate as isolated silos. This hub provides the definitive architectural blueprint for modern Revenue Operations (RevOps)—grounded in empirical unit economics and closed-loop data telemetry.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToAnchor('icp-frameworks')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore Operating Disciplines</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide shadow-xs transition-all hover:-translate-y-0.5"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Request RevOps Advisory</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Layer Radar (Clean HUD Card matching Offerings HUD at line 473) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 relative overflow-hidden text-slate-900">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    4 Operating Layers
                  </span>
                  <span className="text-[11px] font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    8 Master Disciplines
                  </span>
                </div>

                <div className="space-y-2.5">
                  {REVOPS_LAYERS.map((layer) => (
                    <div
                      key={layer.layerNumber}
                      className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-blue-700 font-bold">LAYER {layer.layerNumber}</span>
                        <div className="flex gap-1.5">
                          {layer.disciplines.map((dId) => {
                            const disc = GTM_REVOPS_SECTIONS.find((s) => s.id === dId);
                            return (
                              <button
                                key={dId}
                                onClick={() => scrollToAnchor(dId)}
                                className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 transition-colors cursor-pointer"
                              >
                                {disc?.number}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">{layer.layerName}</h4>
                      <p className="text-[11px] text-slate-600 leading-snug">{layer.layerSubtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Quick Search & Filter Console */}
          <div className="pt-4 border-t border-slate-800/80">
            <div className="max-w-2xl mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 48 RevOps Frameworks, Formulas, and Benchmarks (e.g., 'NRR', 'SLA', 'Ramp', 'Intent')..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Instant Search Results Dropdown */}
            {filteredSearchResults && (
              <div className="max-w-2xl mx-auto mt-3 p-4 rounded-2xl bg-white border border-blue-200 shadow-2xl max-h-96 overflow-y-auto space-y-3 text-slate-900">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-2">
                  <span>Found {filteredSearchResults.length} matching framework blueprints</span>
                  <span className="text-blue-600 font-bold">Click to jump directly</span>
                </div>
                {filteredSearchResults.length === 0 ? (
                  <p className="text-xs text-slate-500 py-3 text-center">No frameworks match &ldquo;{searchQuery}&rdquo;. Try another term.</p>
                ) : (
                  filteredSearchResults.map(({ section, framework }, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        scrollToAnchor(section.id);
                        setSearchQuery('');
                      }}
                      className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 transition-all space-y-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-blue-700 font-bold">
                        <span>{section.number}. {section.title}</span>
                        <span className="text-slate-400 text-[10px]">Framework</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">{framework.title}</div>
                      <p className="text-xs text-slate-600 line-clamp-1">{framework.description}</p>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── STICKY REVOPS ARCHITECTURAL CONTROL BAR (OFFERINGS LIGHT STYLE) ── */}
      <nav className="sticky top-[45px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-2.5 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest shrink-0 hidden lg:inline">
              REVOPS PLANE:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {GTM_REVOPS_SECTIONS.map((sec) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToAnchor(sec.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span className="text-[10px] opacity-75">{sec.number}</span>
                    <span className="hidden sm:inline">{sec.title}</span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => scrollToAnchor('executive-scenarios')}
              className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 transition-all shrink-0 cursor-pointer hidden md:flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Scenarios</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── SECTIONS 01 TO 08: THE EIGHT REVOPS DISCIPLINE WORKBENCHES ── */}
      <main className="divide-y divide-slate-200">
        {GTM_REVOPS_SECTIONS.map((section, secIdx) => {
          const badgeClasses = getBadgeClasses(section.badgeColor);
          const activeLedger = openLedger[section.id] || 'kpis';
          const isEven = secIdx % 2 === 0;

          return (
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-24 py-16 sm:py-20 ${isEven ? 'bg-white' : 'bg-slate-50/70'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                
                {/* 1. Discipline Architectural Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        SYSTEM DISCIPLINE {section.number} // 08
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${badgeClasses.bg} ${badgeClasses.text} ${badgeClasses.border}`}>
                        {section.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                      {section.title}
                    </h2>
                    
                    <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                      {section.subtitle}
                    </p>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {section.intro}
                    </p>
                  </div>

                  {/* Section Actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      to="/book-consultation"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono transition-all shadow-xs"
                    >
                      <span>Deploy Discipline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 2. Primary Visual Telemetry Engine (Hero Visual of Discipline) */}
                <div>
                  <SectionVisual type={section.visualType} />
                </div>

                {/* 3. Operational Framework Blueprints (Offerings-style 3-column card grid) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-blue-600" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                        Operational Blueprints &amp; Execution Protocols
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {section.frameworks.length} Structured Methodologies
                    </span>
                  </div>

                  {/* Framework Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {section.frameworks.map((framework, fwIdx) => (
                      <div
                        key={framework.title}
                        className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col justify-between space-y-4 shadow-sm relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Top: Title & Formula */}
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              BLUEPRINT {section.number}.{fwIdx + 1}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors leading-snug">
                            {framework.title}
                          </h4>

                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {framework.description}
                          </p>

                          {framework.formula && (
                            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 font-mono text-[11px] text-blue-900 font-semibold leading-tight">
                              <span className="text-blue-600 block text-[9px] uppercase tracking-wider mb-0.5 font-bold">Formula:</span>
                              {framework.formula}
                            </div>
                          )}
                        </div>

                        {/* Bottom: Execution Steps */}
                        <div className="pt-4 border-t border-slate-100 space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                            Execution Protocol:
                          </span>
                          <div className="space-y-1.5">
                            {framework.steps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {sIdx + 1}
                                </span>
                                <span className="leading-snug">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Integrated Diagnostic & Telemetry Ledger (Challenges, KPIs & Platform Connection) */}
                <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                        Operational Telemetry Ledger
                      </span>
                      <h4 className="text-base font-bold text-slate-900 font-heading mt-0.5">
                        Performance Benchmarks, Friction Diagnostics &amp; Enablement
                      </h4>
                    </div>

                    {/* Ledger Mode Switcher */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                      <button
                        onClick={() => toggleLedger(section.id, 'kpis')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeLedger === 'kpis'
                            ? 'bg-blue-600 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Telemetry KPIs ({section.kpis.length})
                      </button>
                      <button
                        onClick={() => toggleLedger(section.id, 'challenges')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeLedger === 'challenges'
                            ? 'bg-rose-600 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Friction Points ({section.challenges.length})
                      </button>
                      <button
                        onClick={() => toggleLedger(section.id, 'connection')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeLedger === 'connection'
                            ? 'bg-emerald-600 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        ProfitMachines Role
                      </button>
                    </div>
                  </div>

                  {/* Ledger Tab 1: KPIs & Target Benchmarks */}
                  {activeLedger === 'kpis' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 font-heading">{kpi.name}</span>
                            <Gauge className="w-3.5 h-3.5 text-blue-600" />
                          </div>
                          {kpi.formula && (
                            <div className="text-[11px] font-mono text-blue-800 bg-white p-2 rounded-lg border border-slate-200 font-semibold">
                              {kpi.formula}
                            </div>
                          )}
                          <p className="text-xs text-slate-600 leading-snug">{kpi.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Ledger Tab 2: Common Operational Challenges & Friction */}
                  {activeLedger === 'challenges' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.challenges.map((chal, cIdx) => (
                        <div key={cIdx} className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 flex items-start gap-3">
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-rose-950 leading-relaxed font-medium">
                            {chal}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Ledger Tab 3: ProfitMachines Acceleration Connection */}
                  {activeLedger === 'connection' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {section.profitmachinesConnection.map((conn, cIdx) => (
                        <div key={cIdx} className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                            {conn}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </section>
          );
        })}
      </main>

      {/* ── SECTION 09: INTEGRATED 8-DISCIPLINE REVENUE ENGINE FLYWHEEL (ENTERPRISE DARK BLOCK) ── */}
      <section className="py-16 sm:py-20 bg-slate-950 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-extrabold text-blue-400 uppercase tracking-widest">
              Compounding Operating Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              How the Eight Disciplines Function as One Synchronized Flywheel
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When these eight disciplines are integrated into a single revenue operating system, intelligence from closed deals immediately sharpens upstream targeting, accelerates mid-funnel velocity, and stabilizes forecast accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GTM_REVOPS_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToAnchor(sec.id)}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-400 hover:bg-slate-850 transition-all text-left group cursor-pointer shadow-sm"
              >
                <div className="flex items-center justify-between mb-2 text-xs font-mono">
                  <span className="font-bold text-blue-400">{sec.number}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">{sec.badge}</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors font-heading mb-1">
                  {sec.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {sec.subtitle}
                </p>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <span className="text-emerald-400 font-bold uppercase block">Continuous Feedback Loop A</span>
                <p className="text-slate-300">Closed-won and lost deal intelligence continuously tunes upstream ICP account scoring weights.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <span className="text-blue-400 font-bold uppercase block">Continuous Feedback Loop B</span>
                <p className="text-slate-300">Stage-gate conversion leakage automatically triggers targeted sales enablement and content playbooks.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <span className="text-indigo-400 font-bold uppercase block">Continuous Feedback Loop C</span>
                <p className="text-slate-300">Triangulated statistical forecast variance scorecards dynamically govern AE hiring and quota allocations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE PRACTICAL APPLICATIONS LAB ── */}
      <section id="executive-scenarios" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Executive RevOps Simulation Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Apply the Frameworks to Real Revenue Management Challenges
            </h2>
            <p className="text-slate-600 text-sm">
              Explore how enterprise revenue executives systematically diagnose and resolve commercial friction.
            </p>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {GTM_REVOPS_PRACTICAL_APPLICATIONS.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedScenarioIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer ${
                  selectedScenarioIdx === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                Scenario 0{idx + 1}
              </button>
            ))}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const sc = GTM_REVOPS_PRACTICAL_APPLICATIONS[selectedScenarioIdx];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-700 font-bold">
                    <span>EXECUTIVE SCENARIO 0{selectedScenarioIdx + 1} OF 08</span>
                    <span className="text-slate-400 font-normal">Root-Cause Analysis</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    {sc.question}
                  </h3>
                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950">
                    <strong className="text-amber-800 font-mono text-xs uppercase block mb-1">Commercial Situation:</strong>
                    {sc.situation}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Investigation & Disciplines */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Key Investigation Checklist:
                      </span>
                      <div className="space-y-2">
                        {sc.investigationQuestions.map((q, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{q}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Relevant Operating Disciplines:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sc.relevantDisciplines.map((d, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-bold">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Analytical Methods, KPIs & Next Steps */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Analytical Frameworks &amp; Telemetry:
                      </span>
                      <div className="space-y-1.5">
                        {sc.analyticalMethods.map((m, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-mono">
                            <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Critical Governance KPIs:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sc.kpis.map((k, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                      <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block">
                        Actionable Resolution Protocol:
                      </span>
                      <div className="space-y-1.5">
                        {sc.nextSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── SECTION 11: CALL TO ACTION & ADVISORY CONSULTATION (OFFERINGS-MATCHED FOOTER) ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Transform Your Commercial Architecture
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading text-white">
            Ready to Build a High-Velocity <br />
            Revenue Operating System?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Move beyond disjointed sales cadences and inconsistent spreadsheets. Deploy ProfitMachines to align targeting, automate pipeline hygiene, and predict revenue with mathematical certainty.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule RevOps Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resources-hub"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4 text-slate-400" />
              <span>Back to Resources Hub</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
