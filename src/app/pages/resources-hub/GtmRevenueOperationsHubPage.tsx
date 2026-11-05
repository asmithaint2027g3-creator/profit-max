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
  PieChart,
  DollarSign,
  Briefcase,
  FileText,
  Search,
  Check,
  Gauge,
  Zap,
  Scale,
  Terminal,
  HelpCircle,
  X,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import {
  GTM_REVOPS_SECTIONS,
  GTM_REVOPS_OVERVIEW,
  GTM_REVOPS_PRACTICAL_APPLICATIONS,
  GtmRevOpsSection
} from '../../../data/gtmRevOpsHubData';
import { trackEvent } from '../../../lib/analytics';

const ICON_MAP: Record<string, React.ElementType> = {
  Target,
  GitMerge,
  Sliders,
  Workflow,
  BrainCircuit,
  BarChart3,
  Users,
  TrendingUp
};

// RevOps Architectural Layers
const REVOPS_LAYERS = [
  {
    layerNumber: '01',
    layerName: 'Market & Customer Architecture',
    layerSubtitle: 'Deterministic targeting, buyer committee mapping & outbound precision',
    disciplines: ['icp-frameworks', 'buyer-journey-models'],
    theme: 'border-blue-300 text-blue-700 bg-blue-50'
  },
  {
    layerNumber: '02',
    layerName: 'Pipeline Conversion & Operating Stack',
    layerSubtitle: 'Full-funnel stage gates, handoff SLAs & unified revenue data plane',
    disciplines: ['funnel-optimization', 'revops-frameworks'],
    theme: 'border-cyan-300 text-cyan-700 bg-cyan-50'
  },
  {
    layerNumber: '03',
    layerName: 'Telemetry, Signals & Predictive Intelligence',
    layerSubtitle: 'Continuous conversation analysis, deal health scoring & mathematical forecasting',
    disciplines: ['revenue-intelligence', 'forecasting-models'],
    theme: 'border-violet-300 text-violet-700 bg-violet-50'
  },
  {
    layerNumber: '04',
    layerName: 'Capacity Engineering & Compounding Scale',
    layerSubtitle: 'Bottom-up quota ramp modeling, multi-engine growth & NRR compounding',
    disciplines: ['capacity-planning', 'revenue-growth-frameworks'],
    theme: 'border-emerald-300 text-emerald-700 bg-emerald-50'
  }
];

// Helper badge color mapper
function getBadgeClasses(color: string) {
  switch (color) {
    case 'blue':    return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', tag: 'bg-blue-600 text-white' };
    case 'emerald': return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', tag: 'bg-emerald-600 text-white' };
    case 'violet':  return { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', tag: 'bg-violet-600 text-white' };
    case 'amber':   return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', tag: 'bg-amber-600 text-white' };
    case 'cyan':    return { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', tag: 'bg-cyan-600 text-white' };
    case 'rose':    return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', tag: 'bg-rose-600 text-white' };
    case 'indigo':  return { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', tag: 'bg-indigo-600 text-white' };
    case 'teal':    return { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', tag: 'bg-teal-600 text-white' };
    default:        return { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', tag: 'bg-slate-700 text-white' };
  }
}

// ── Visual 1: ICP 4-Pillar Scoring & Tiering ──
function IcpVisual() {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            ICP Multi-Dimensional Scoring Engine
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold border border-blue-200">
          Algorithmic ICP Engine
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200">
          <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Firmographics (25%)</div>
          <div className="text-sm font-bold text-slate-900 mt-1">$50M-$500M ARR</div>
          <div className="text-[11px] text-slate-500 mt-0.5">250-5,000 FTEs / Geo-Fit</div>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200">
          <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Technographics (25%)</div>
          <div className="text-sm font-bold text-slate-900 mt-1">Modern RevTech Stack</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Enterprise Cloud + CRM</div>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200">
          <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Intent Telemetry (30%)</div>
          <div className="text-sm font-bold text-emerald-400 mt-1">Active Buying Surge</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Dark-funnel evaluation</div>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200">
          <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Unit Economics (20%)</div>
          <div className="text-sm font-bold text-cyan-400 mt-1">&gt;$100K Target ACV</div>
          <div className="text-[11px] text-slate-500 mt-0.5">&gt;120% NRR potential</div>
        </div>
      </div>
      <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-emerald-300 flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Tier 1 (Score 90-100): High-Touch Executive Pursuit
        </span>
        <span className="text-blue-300 flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Tier 2 (Score 75-89): Multi-Channel Account Nurture
        </span>
        <span className="text-slate-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-slate-500"></span>
          Tier 3 (Score &lt;75): Automated Digital Only
        </span>
      </div>
    </div>
  );
}

// ── Visual 2: Buyer Journey Persona Matrix ──
function BuyerJourneyVisual() {
  const personas = [
    { role: 'Economic Buyer', focus: 'ROI, payback velocity, budget authority & risk governance', color: 'border-emerald-500/40 text-emerald-400' },
    { role: 'Technical Evaluator', focus: 'Security posture, API schema, architecture fit & data privacy', color: 'border-blue-500/40 text-blue-400' },
    { role: 'Business Champion', focus: 'Operational problem removal, team efficiency & adoption speed', color: 'border-indigo-500/40 text-indigo-400' },
    { role: 'Procurement / Legal', focus: 'Contract SLAs, liability limits, commercial terms & vendor audit', color: 'border-amber-500/40 text-amber-400' }
  ];
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-2">
          <GitMerge className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
            Enterprise Buying Committee Blueprint
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold border border-indigo-200">
          6-Stage Gate Progression
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {personas.map((p) => (
          <div key={p.role} className={`p-4 rounded-xl bg-slate-800/80 border ${p.color} space-y-1.5`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase">{p.role}</span>
              <Users className="w-3.5 h-3.5 opacity-70" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{p.focus}</p>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/80 text-xs font-mono text-slate-300 flex items-center justify-between flex-wrap gap-2">
        <span>Gate 1: Problem Identification</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
        <span>Gate 2: Solution Exploration</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
        <span>Gate 3: Vendor Evaluation</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
        <span className="text-emerald-400 font-bold">Gate 4: Value Realization</span>
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
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-violet-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600">
            Funnel Stage-Gate Telemetry &amp; Leakage Audit
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-violet-100 text-violet-700 font-bold border border-violet-200">
          Deterministic Exit Criteria
        </span>
      </div>
      <div className="space-y-2">
        {stages.map((stg, idx) => (
          <div key={stg.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-mono gap-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-lg bg-violet-600/30 text-violet-300 font-bold flex items-center justify-center text-xs shrink-0 border border-violet-500/30">
                0{idx + 1}
              </span>
              <span className="text-slate-100 font-bold">{stg.name}</span>
            </div>
            <div className="flex items-center gap-4 text-right">
              <span className="text-slate-400">{stg.vol}</span>
              <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">{stg.conv}</span>
              <span className="text-rose-400 text-[11px] font-semibold">{stg.leak}</span>
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
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-2">
          <Workflow className="w-4 h-4 text-cyan-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600">
            Single Data Plane RevOps Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-700 font-bold border border-cyan-200">
          SSOT Data Fabric
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-left">
        <div className="p-4 rounded-xl bg-slate-800/80 border border-blue-500/30">
          <span className="text-xs font-mono font-bold text-blue-400 block mb-1 uppercase tracking-wider">01. Marketing Ops</span>
          <p className="text-xs text-slate-300 leading-relaxed">Multi-touch attribution, intent signal routing &amp; campaign ROI telemetry</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/80 border border-indigo-500/30">
          <span className="text-xs font-mono font-bold text-indigo-400 block mb-1 uppercase tracking-wider">02. Direct Sales Ops</span>
          <p className="text-xs text-slate-300 leading-relaxed">Stage governance, CPQ workflows, quota pacing &amp; deal health tracking</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/80 border border-emerald-500/30">
          <span className="text-xs font-mono font-bold text-emerald-400 block mb-1 uppercase tracking-wider">03. Customer Success Ops</span>
          <p className="text-xs text-slate-300 leading-relaxed">Product adoption telemetry, health scoring, churn risk &amp; NRR expansion</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/80 border border-amber-500/30">
          <span className="text-xs font-mono font-bold text-amber-400 block mb-1 uppercase tracking-wider">04. Revenue Finance Ops</span>
          <p className="text-xs text-slate-300 leading-relaxed">Billing reconciliation, CAC payback, LTV modeling &amp; Board ledger sync</p>
        </div>
      </div>
    </div>
  );
}

// ── Visual 5: Revenue Intelligence Alerts ──
function IntelligenceVisual() {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
            Real-Time Revenue Telemetry &amp; Signal Feed
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold border border-emerald-200">
          Continuous Ingestion Active
        </span>
      </div>
      <div className="space-y-2.5 text-xs font-mono">
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-emerald-400 font-bold">[INTENT SURGE DETECTED]</span>
            <span className="text-slate-200 ml-2">Enterprise FinTech Target Account (Scored 96/100)</span>
          </div>
          <span className="text-slate-400 text-[11px]">Pricing page re-visit ×4 • Security doc download</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-amber-400 font-bold">[DEAL RISK DETECTED]</span>
            <span className="text-slate-200 ml-2">Global SaaS Opportunity ($240K ACV)</span>
          </div>
          <span className="text-slate-400 text-[11px]">Single-threaded • CFO departed thread 14 days ago</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-blue-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-blue-400 font-bold">[NEXT BEST ACTION]</span>
            <span className="text-slate-200 ml-2">Deploy Enterprise Compliance Playbook to Lead Architect</span>
          </div>
          <span className="text-slate-400 text-[11px]">Evaluation meeting in 48h</span>
        </div>
      </div>
    </div>
  );
}

// ── Visual 6: 3-Scenario Forecasting ──
function ForecastingVisual() {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-rose-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
            Triangulated Quarterly Forecasting Ledger
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold border border-rose-200">
          ±5% Target Precision
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
          <span className="text-xs font-mono font-bold text-slate-400 block mb-1">CONSERVATIVE COMMIT</span>
          <div className="text-2xl font-bold font-mono text-white">$4.20M ARR</div>
          <p className="text-xs text-slate-400 mt-1">100% Closed-Won + 85% Weighted Commit Only</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/90 border border-rose-500/40 shadow-inner">
          <span className="text-xs font-mono font-bold text-rose-400 block mb-1">BASE STATISTICAL PLAN</span>
          <div className="text-2xl font-bold font-mono text-rose-300">$5.15M ARR</div>
          <p className="text-xs text-slate-300 mt-1">Historical Cohort Progression + 50% Best Case</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/80 border border-emerald-500/30">
          <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">STRETCH OUTPERFORMANCE</span>
          <div className="text-2xl font-bold font-mono text-emerald-300">$5.90M ARR</div>
          <p className="text-xs text-slate-400 mt-1">Full Rep Quota Attainment + 70% Pipeline Acceleration</p>
        </div>
      </div>
    </div>
  );
}

// ── Visual 7: Capacity Planning Ramp ──
function CapacityVisual() {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
            Enterprise AE Capacity &amp; Ramp Schedule Model
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold border border-emerald-200">
          12-Month Quota Engineering
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <div className="text-slate-400 uppercase font-bold text-[10px]">Months 1-3</div>
          <div className="text-lg font-bold text-white mt-1">0% Quota</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Enablement &amp; Pipeline</div>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <div className="text-slate-400 uppercase font-bold text-[10px]">Months 4-6</div>
          <div className="text-lg font-bold text-cyan-300 mt-1">35% Quota</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Initial Deal Execution</div>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <div className="text-slate-400 uppercase font-bold text-[10px]">Months 7-9</div>
          <div className="text-lg font-bold text-indigo-300 mt-1">75% Quota</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Full Pipeline Velocity</div>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/40 text-center">
          <div className="text-emerald-400 uppercase font-bold text-[10px]">Months 10-12</div>
          <div className="text-lg font-bold text-emerald-300 mt-1">100% Quota</div>
          <div className="text-[11px] text-emerald-400 mt-0.5">Fully Ramped ($1.2M/yr)</div>
        </div>
      </div>
    </div>
  );
}

// ── Visual 8: Growth Vectors Architecture ──
function GrowthVisual() {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-teal-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600">
            Compounding Revenue Growth Flywheel Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-teal-100 text-teal-700 font-bold border border-teal-200">
          Multi-Engine Expansion
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <span className="text-slate-400 text-[10px] uppercase font-bold text-slate-500 block">Engine 01</span>
          <strong className="text-white text-xs text-slate-900 block mt-1"> New Logo Acquisition</strong>
          <span className="text-teal-600 text-[11px] font-bold block mt-0.5">High-Fit ICP</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <span className="text-slate-400 text-[10px] uppercase font-bold text-slate-500 block">Engine 02</span>
          <strong className="text-white text-xs text-slate-900 block mt-1"> Account Expansion</strong>
          <span className="text-teal-600 text-[11px] font-bold block mt-0.5">&gt;125% NRR Target</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <span className="text-slate-400 text-[10px] uppercase font-bold text-slate-500 block">Engine 03</span>
          <strong className="text-white text-xs text-slate-900 block mt-1"> Pricing &amp; Packaging</strong>
          <span className="text-teal-600 text-[11px] font-bold block mt-0.5">+22% Gross Margin</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <span className="text-slate-400 text-[10px] uppercase font-bold text-slate-500 block">Engine 04</span>
          <strong className="text-white text-xs text-slate-900 block mt-1"> Partner Co-Selling</strong>
          <span className="text-teal-600 text-[11px] font-bold block mt-0.5">3.2× Win Rate Multiplier</span>
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
      
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

      {/* ── SECTION 01: HERO & ARCHITECTURAL COMMAND CENTER ── */}
      <section className="relative pt-16 pb-14 sm:pt-20 sm:pb-20 bg-gradient-to-b from-slate-950 via-blue-950/90 to-slate-900 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Editorial */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 font-mono text-xs font-bold tracking-widest uppercase">
                <Workflow className="w-3.5 h-3.5 text-blue-600" />
                Enterprise Revenue Architecture Platform
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12] font-heading">
                  The Enterprise <br />
                  Go-to-Market &amp; <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    Revenue Operations Hub.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 font-heading">
                  Connect ideal customer targeting, buyer journeys, stage-gate conversions, unified data telemetry, and empirical forecasting into one compounding commercial engine.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                B2B enterprise revenue fails when marketing, sales, and customer operations operate as isolated silos. This hub provides the definitive architectural blueprint for modern Revenue Operations (RevOps)—grounded in empirical unit economics and closed-loop data telemetry.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToAnchor('icp-frameworks')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-98 cursor-pointer"
                >
                  <span>Explore Operating Disciplines</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-bold text-sm transition-all shadow-xs"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Request RevOps Advisory</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Layer Radar */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-white/10 border border-white/20 shadow-2xl space-y-4 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-blue-300" /> 4 Operating Layers
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300 font-bold">8 Master Disciplines</span>
                </div>

                <div className="space-y-2.5">
                  {REVOPS_LAYERS.map((layer) => (
                    <div
                      key={layer.layerNumber}
                      className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-blue-300 font-bold">LAYER {layer.layerNumber}</span>
                        <div className="flex gap-2">
                          {layer.disciplines.map((dId) => {
                            const disc = GTM_REVOPS_SECTIONS.find((s) => s.id === dId);
                            return (
                              <button
                                key={dId}
                                onClick={() => scrollToAnchor(dId)}
                                className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              >
                                {disc?.number}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">{layer.layerName}</h4>
                      <p className="text-[11px] text-slate-300 leading-snug">{layer.layerSubtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Quick Search & Filter Console */}
          <div className="pt-4 border-t border-white/20">
            <div className="max-w-2xl mx-auto relative">
              <Search className="w-4 h-4 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 48 RevOps Frameworks, Formulas, and Benchmarks (e.g., 'NRR', 'SLA', 'Ramp', 'Intent')..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/15 border border-white/25 text-sm text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all backdrop-blur-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Instant Search Results Dropdown */}
            {filteredSearchResults && (
              <div className="max-w-2xl mx-auto mt-3 p-4 rounded-2xl bg-white border border-blue-300 shadow-2xl max-h-96 overflow-y-auto space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-2">
                  <span>Found {filteredSearchResults.length} matching framework blueprints</span>
                  <span className="text-blue-600">Click to jump directly</span>
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
                      className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-800 transition-all space-y-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-blue-600">
                        <span>{section.number}. {section.title}</span>
                        <span className="text-slate-400 text-[10px]">Framework</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">{framework.title}</div>
                      <p className="text-xs text-slate-500 line-clamp-1">{framework.description}</p>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── STICKY REVOPS ARCHITECTURAL CONTROL BAR ── */}
      <nav className="sticky top-[45px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-2.5 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest shrink-0 hidden lg:inline">
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
                        ? 'bg-blue-600 text-white shadow-xs scale-102' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200'
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
              className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-all shrink-0 cursor-pointer hidden md:flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Scenarios</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── SECTIONS 01 TO 08: THE EIGHT REVOPS DISCIPLINE WORKBENCHES ── */}
      <main className="divide-y divide-slate-100">
        {GTM_REVOPS_SECTIONS.map((section, secIdx) => {
          const badgeClasses = getBadgeClasses(section.badgeColor);
          const activeLedger = openLedger[section.id] || 'kpis';

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 py-16 sm:py-20 bg-slate-900/60"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                
                {/* 1. Discipline Architectural Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        SYSTEM DISCIPLINE {section.number} // 08
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${badgeClasses.bg} ${badgeClasses.text} ${badgeClasses.border}`}>
                        {section.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
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
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <SectionVisual type={section.visualType} />
                </div>

                {/* 3. Operational Framework Blueprints (Fully populated, ZERO whitespace) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-blue-600" /> <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                        Operational Blueprints &amp; Execution Protocols
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500"> {section.frameworks.length} Structured Methodologies
                    </span>
                  </div>

                  {/* Framework Cards Grid: 3-column layout, flexbox stretching, zero whitespace */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {section.frameworks.map((framework, fwIdx) => (
                      <div
                        key={framework.title}
                        className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 shadow-md transition-all flex flex-col justify-between space-y-4 group"
                      >
                        {/* Top: Title & Formula */}
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              BLUEPRINT {section.number}.{fwIdx + 1}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 font-heading group-hover:text-blue-700 transition-colors leading-snug">
                            {framework.title}
                          </h4>

                          <p className="text-xs text-slate-600 leading-relaxed"> {framework.description}
                          </p>

                          {framework.formula && (
                            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 font-mono text-[11px] text-blue-700 font-bold leading-tight">
                              <span className="text-blue-500 block text-[9px] uppercase tracking-wider mb-0.5">Formula:</span>
                              {framework.formula}
                            </div>
                          )}
                        </div>

                        {/* Bottom: 4 Key Execution Steps (Guaranteed populated, uniform height) */}
                        <div className="pt-3 border-t border-slate-100 space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block"> Execution Protocol:
                          </span>
                          <div className="space-y-1.5">
                            {framework.steps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {sIdx + 1}
                                </span>
                                <span className="leading-snug text-slate-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Integrated Diagnostic & Telemetry Ledger (Challenges, KPIs & Platform Connection) */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500"> Operational Telemetry Ledger
                      </span>
                      <h4 className="text-base font-bold text-slate-900 font-heading mt-0.5"> Performance Benchmarks, Friction Diagnostics &amp; Enablement
                      </h4>
                    </div>

                    {/* Ledger Mode Switcher */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shrink-0">
                      <button
                        onClick={() => toggleLedger(section.id, 'kpis')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeLedger === 'kpis'
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Telemetry KPIs ({section.kpis.length})
                      </button>
                      <button
                        onClick={() => toggleLedger(section.id, 'challenges')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeLedger === 'challenges'
                            ? 'bg-rose-600/80 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Friction Points ({section.challenges.length})
                      </button>
                      <button
                        onClick={() => toggleLedger(section.id, 'connection')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeLedger === 'connection'
                            ? 'bg-emerald-600 text-white'
                            : 'text-slate-400 hover:text-white'
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
                        <div key={kIdx} className="p-4 rounded-xl bg-white border border-blue-100 shadow-sm space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 font-heading">{kpi.name}</span>
                            <Gauge className="w-3.5 h-3.5 text-blue-600" />
                          </div>
                          {kpi.formula && (
                            <div className="text-[11px] font-mono text-blue-700 bg-blue-50 p-2 rounded-lg border border-blue-200">
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
                        <div key={cIdx} className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3">
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-rose-800 leading-relaxed font-medium">
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
                        <div key={cIdx} className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-medium">
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

      {/* ── SECTION 09: INTEGRATED 8-DISCIPLINE REVENUE ENGINE FLYWHEEL ── */}
      <section className="py-16 sm:py-20 bg-slate-900 border-t border-slate-200 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-extrabold text-blue-300 uppercase tracking-widest"> Compounding Operating Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white"> How the Eight Disciplines Function as One Synchronized Flywheel
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed"> When these eight disciplines are integrated into a single revenue operating system, intelligence from closed deals immediately sharpens upstream targeting, accelerates mid-funnel velocity, and stabilizes forecast accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GTM_REVOPS_SECTIONS.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => scrollToAnchor(sec.id)}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-slate-850 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2 text-xs font-mono">
                  <span className="font-bold text-blue-300">{sec.number}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-bold">{sec.badge}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-300 transition-colors font-heading mb-1"> {sec.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed"> {sec.subtitle}
                </p>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700"> <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-1.5">
                <span className="text-emerald-300 font-bold uppercase block">Continuous Feedback Loop A</span>
                <p className="text-slate-300"> Closed-won and lost deal intelligence continuously tunes upstream ICP account scoring weights.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-1.5">
                <span className="text-blue-300 font-bold uppercase block">Continuous Feedback Loop B</span>
                <p className="text-slate-300"> Stage-gate conversion leakage automatically triggers targeted sales enablement and content playbooks.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-1.5">
                <span className="text-indigo-300 font-bold uppercase block">Continuous Feedback Loop C</span>
                <p className="text-slate-300"> Triangulated statistical forecast variance scorecards dynamically govern AE hiring and quota allocations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE PRACTICAL APPLICATIONS LAB ── */}
      <section id="executive-scenarios" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest"> Executive RevOps Simulation Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight"> Apply the Frameworks to Real Revenue Management Challenges
            </h2>
            <p className="text-slate-600 text-sm"> Explore how enterprise revenue executives systematically diagnose and resolve commercial friction.
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
                    ? 'bg-blue-600 text-white shadow-xs' : 'bg-white hover:bg-blue-50 text-slate-600 border border-slate-200'
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
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-lg">
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-600">
                    <span>EXECUTIVE SCENARIO 0{selectedScenarioIdx + 1} OF 08</span>
                    <span className="text-slate-400">Root-Cause Analysis</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    {sc.question}
                  </h3>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                    <strong className="text-amber-600 font-mono text-xs uppercase block mb-1">Commercial Situation:</strong>
                    {sc.situation}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Investigation & Disciplines */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Key Investigation Checklist:
                      </span>
                      <div className="space-y-2">
                        {sc.investigationQuestions.map((q, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5"> {idx + 1}
                            </span>
                            <span>{q}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2"> Relevant Operating Disciplines:
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
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2"> Analytical Frameworks &amp; Telemetry:
                      </span>
                      <div className="space-y-1.5">
                        {sc.analyticalMethods.map((m, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-mono">
                            <Zap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2"> Critical Governance KPIs:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sc.kpis.map((k, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 font-bold">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                      <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider block"> Actionable Resolution Protocol:
                      </span>
                      <div className="space-y-1.5">
                        {sc.nextSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
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

      {/* ── SECTION 11: CALL TO ACTION & ADVISORY CONSULTATION ── */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-200 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Transform Your Commercial Architecture
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading text-white">
            Ready to Build a High-Velocity <br />
            Revenue Operating System?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Move beyond disjointed sales cadences and inconsistent spreadsheets. Deploy ProfitMachines to align targeting, automate pipeline hygiene, and predict revenue with mathematical certainty.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-xl shadow-blue-600/30"
            >
              <span>Schedule RevOps Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resources-hub"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-bold text-sm transition-all"
            >
              <Compass className="w-4 h-4 text-slate-300" />
              <span>Back to Resources Hub</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
