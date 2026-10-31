import React, { useState } from 'react';
import {
  Target, BarChart3, TrendingUp, Layers, ShieldCheck, CheckCircle2,
  AlertTriangle, Workflow, Cpu, Users, Globe, DollarSign, Activity,
  ArrowRight, Lock, Sliders, Eye, Compass, Zap, Shield, HelpCircle
} from 'lucide-react';

// ============================================================================
// 1. PROFIT POOL DISCOVERY: Market Whitespace Matrix & Profit Pool Heatmap
// ============================================================================
export function ProfitPoolDiscoveryVisual() {
  const [activeSegment, setActiveSegment] = useState<'enterprise' | 'midmarket' | 'adjacent'>('enterprise');

  const segmentData = {
    enterprise: {
      title: 'Tier-1 High-Yield Segment',
      margin: '68% - 74%',
      wtpScore: '92/100',
      status: 'High Willingness-to-Pay',
      whitespace: 'Unserved multi-entity compliance & telemetry needs'
    },
    midmarket: {
      title: 'Fast-Velocity Mid-Market',
      margin: '55% - 62%',
      wtpScore: '78/100',
      status: 'Accelerated Deal Cadence',
      whitespace: 'Turnkey revenue automation without enterprise overhead'
    },
    adjacent: {
      title: 'Adjacent Vertical Micro-Niches',
      margin: '72% - 81%',
      wtpScore: '86/100',
      status: 'High Moat / Low Competition',
      whitespace: 'Bespoke integration gaps ignored by legacy horizontal incumbents'
    }
  };

  const curr = segmentData[activeSegment];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Market Opportunity Whitespace Map
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          Empirical Discovery
        </span>
      </div>

      {/* Segment Selector Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 mb-4 text-xs font-medium">
        <button
          onClick={() => setActiveSegment('enterprise')}
          className={`py-2 px-2 rounded-lg text-center font-bold transition-all ${
            activeSegment === 'enterprise' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
        >
          Tier-1 Enterprise
        </button>
        <button
          onClick={() => setActiveSegment('midmarket')}
          className={`py-2 px-2 rounded-lg text-center font-bold transition-all ${
            activeSegment === 'midmarket' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
        >
          Mid-Market
        </button>
        <button
          onClick={() => setActiveSegment('adjacent')}
          className={`py-2 px-2 rounded-lg text-center font-bold transition-all ${
            activeSegment === 'adjacent' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
        >
          Micro-Niches
        </button>
      </div>

      {/* 2x2 Market Map SVG */}
      <div className="bg-slate-950 rounded-xl p-3 border border-slate-800/80 mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1 px-1">
          <span>High WTP / Uncontested Whitespace &uarr;</span>
          <span className="text-blue-400 font-bold">Zone: P1 Strategic Focus</span>
        </div>
        <svg viewBox="0 0 380 140" className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <line x1="20" y1="70" x2="360" y2="70" stroke="#334155" strokeDasharray="3 3" />
          <line x1="190" y1="10" x2="190" y2="130" stroke="#334155" strokeDasharray="3 3" />
          
          {/* Quadrant labels */}
          <text x="30" y="30" fill="#64748b" fontSize="8" fontFamily="monospace">Legacy Saturated Zone</text>
          <text x="210" y="30" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">PROFIT POOL SWEET SPOT</text>
          <text x="30" y="120" fill="#475569" fontSize="8" fontFamily="monospace">Low Margin Commodity</text>
          <text x="210" y="120" fill="#64748b" fontSize="8" fontFamily="monospace">Emerging Speculative Demand</text>

          {/* Saturated cluster */}
          <circle cx="90" cy="45" r="8" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
          <circle cx="110" cy="55" r="6" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
          <text x="95" y="47" fill="#fca5a5" fontSize="7" textAnchor="middle">Incumbents</text>

          {/* Whitespace Opportunity Cluster */}
          <circle cx="280" cy="45" r="16" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" className="animate-pulse" />
          <circle cx="280" cy="45" r="6" fill="#38bdf8" />
          <text x="280" y="48" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">TARGET</text>
        </svg>
      </div>

      {/* Dynamic Diagnostic Output */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs">
        <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Contribution Margin</div>
          <div className="text-base font-extrabold text-emerald-400 font-mono mt-0.5">{curr.margin}</div>
          <div className="text-[11px] text-slate-400 mt-1">{curr.status}</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
          <div className="text-[10px] font-mono text-slate-400 uppercase">WTP Signal Score</div>
          <div className="text-base font-extrabold text-blue-400 font-mono mt-0.5">{curr.wtpScore}</div>
          <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{curr.whitespace}</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. DEMAND ENGINEERING: Multi-Stage Qualification Funnel & Dark Intent
// ============================================================================
export function DemandEngineeringVisual() {
  const [activeStage, setActiveStage] = useState(0);

  const funnelStages = [
    { name: 'Dark Funnel Intent', signal: 'Surge in anonymous category research & comparison docs', filterRate: '10,000 Accounts Audited' },
    { name: 'Multi-Channel ABM', signal: 'Synchronized value delivery across organic & targeted touches', filterRate: '1,420 High-Intent Accounts' },
    { name: 'Algorithm Lead Score', signal: 'ICP fit verified + buying committee activity detected', filterRate: '340 Qualified Accounts' },
    { name: 'Sales Pipeline Intake', signal: 'Meeting scheduled with decision-makers under agreed agenda', filterRate: '85 High-Value Deals Created' }
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Demand Funnel Telemetry Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-400/20 font-bold">
          Live Intent Sensing
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {funnelStages.map((stage, idx) => (
          <div
            key={idx}
            onClick={() => setActiveStage(idx)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              activeStage === idx
                ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500/30'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-blue-400 text-[10px] flex items-center justify-center font-mono font-bold">
                  0{idx + 1}
                </span>
                {stage.name}
              </span>
              <span className="font-mono text-emerald-400 text-[11px] font-bold">{stage.filterRate}</span>
            </div>
            <p className="text-[11px] text-slate-400 pl-7">{stage.signal}</p>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Attribution Model: Multi-Touch Algorithmic</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 font-bold">Pipeline Lift: +40% - 60%</span>
      </div>
    </div>
  );
}

// ============================================================================
// 3. SALES ACCELERATION: MEDDPICC Deal Gate & Stakeholder Consensus Map
// ============================================================================
export function SalesAccelerationVisual() {
  const [activeStakeholder, setActiveStakeholder] = useState<'economic' | 'technical' | 'procurement' | 'champion'>('economic');

  const stakeholders = {
    economic: {
      role: 'Economic Buyer (CFO / VP)',
      priority: 'Quantified ROI, payback under 6 months, risk mitigation',
      status: 'Consensus Formed',
      statusColor: 'text-emerald-400'
    },
    technical: {
      role: 'Technical Gatekeeper (CTO / Head of Arch)',
      priority: 'Security boundaries, zero data retention, API throughput',
      status: 'Security Review Passed',
      statusColor: 'text-emerald-400'
    },
    procurement: {
      role: 'Procurement & Legal Director',
      priority: 'Standard enterprise MSA, SLA penalties, payment terms',
      status: 'Commercial Redlines Complete',
      statusColor: 'text-blue-400'
    },
    champion: {
      role: 'Internal Champion (Revenue Leader)',
      priority: 'Rapid rep adoption, immediate calendar relief, pipeline visibility',
      status: 'Actively Co-Piloting Deal',
      statusColor: 'text-emerald-400'
    }
  };

  const curr = stakeholders[activeStakeholder];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Buying Committee Consensus Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          Deal Health: 94.2%
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={() => setActiveStakeholder('economic')}
          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
            activeStakeholder === 'economic' ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <div className="font-bold text-white text-[11px]">Economic Buyer</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">&bull; ROI Validated</div>
        </button>
        <button
          onClick={() => setActiveStakeholder('champion')}
          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
            activeStakeholder === 'champion' ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <div className="font-bold text-white text-[11px]">Internal Champion</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">&bull; High Engagement</div>
        </button>
        <button
          onClick={() => setActiveStakeholder('technical')}
          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
            activeStakeholder === 'technical' ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <div className="font-bold text-white text-[11px]">Technical Gatekeeper</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">&bull; Architecture Cleared</div>
        </button>
        <button
          onClick={() => setActiveStakeholder('procurement')}
          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
            activeStakeholder === 'procurement' ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <div className="font-bold text-white text-[11px]">Procurement / Legal</div>
          <div className="text-[10px] text-blue-400 mt-0.5">&bull; Contracting Stage</div>
        </button>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-bold text-white">{curr.role}</span>
          <span className={`font-mono font-bold text-[11px] ${curr.statusColor}`}>{curr.status}</span>
        </div>
        <p className="text-slate-400 text-[11px] leading-relaxed">
          <span className="font-semibold text-slate-300">Decision Criteria:</span> {curr.priority}
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// 4. REVENUE OPERATIONS: Unified Revenue Systems Architecture Mesh
// ============================================================================
export function RevenueOperationsVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Unified Revenue Telemetry Bus
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          Zero Data Silos
        </span>
      </div>

      {/* Systems Architecture Diagram */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block mb-1">Marketing Data</span>
          <div className="font-bold text-white">Intent &amp; Intake</div>
          <div className="text-[10px] text-slate-400 mt-1">Real-time enrichment</div>
        </div>
        <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500 shadow-md">
          <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">Central Bus</span>
          <div className="font-bold text-white">RevOps Telemetry</div>
          <div className="text-[10px] text-cyan-300 mt-1">Automated sync</div>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">Sales &amp; Finance</span>
          <div className="font-bold text-white">Pipeline &amp; Billing</div>
          <div className="text-[10px] text-slate-400 mt-1">Contract to cash</div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
        <div className="flex items-center justify-between text-slate-300">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            Predictive Forecast Variance
          </span>
          <span className="font-mono text-emerald-400 font-bold">&lt; 2.1% Error Margin</span>
        </div>
        <div className="flex items-center justify-between text-slate-300">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            CRM Logging Automated
          </span>
          <span className="font-mono text-emerald-400 font-bold">100% Rep Calendar Freed</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. GTM TRANSFORMATION: Strategic Transformation Roadmap & Milestones
// ============================================================================
export function GtmTransformationVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            GTM Execution Transformation Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20 font-bold">
          4-Phase Cadence
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-center">
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Weeks 1-2</span>
          <div className="font-bold text-white text-[11px]">Positioning</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Value Ladder</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">Weeks 3-4</span>
          <div className="font-bold text-white text-[11px]">Pricing Model</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Margin Moats</div>
        </div>
        <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500 text-xs shadow-xs">
          <span className="text-[10px] font-mono text-blue-300 block mb-0.5">Weeks 5-8</span>
          <div className="font-bold text-white text-[11px]">Launch Plan</div>
          <div className="text-[10px] text-blue-300 mt-0.5">Channel Co-Sell</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <span className="text-[10px] font-mono text-emerald-400 block mb-0.5">Week 9+</span>
          <div className="font-bold text-white text-[11px]">Expansion</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Full Scale</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Launch Readiness Scorecard: 100% Governed</span>
        </div>
        <span className="text-[11px] font-mono text-blue-400 font-bold">-40% Cycle Duration</span>
      </div>
    </div>
  );
}

// ============================================================================
// 6. CUSTOMER SUCCESS ENGINE: NRR Waterfall & Account Health Telemetry
// ============================================================================
export function CustomerSuccessVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Net Revenue Retention (NRR) Compounding
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          NRR: 132.8%
        </span>
      </div>

      {/* Waterfall Visual */}
      <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 mb-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
          <span>Starting ARR ($10M Cohort)</span>
          <span className="text-emerald-400 font-bold">&rarr; Year-End ARR ($13.28M)</span>
        </div>
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900">
            <span className="text-slate-300">Baseline Starting Revenue:</span>
            <span className="font-bold text-white">$10,000,000</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-emerald-950/40 text-emerald-400">
            <span>+ Tier Upgrades &amp; Expansion:</span>
            <span className="font-bold">+$3,850,000 (+38.5%)</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-red-950/30 text-red-400">
            <span>- Contraction &amp; Gross Churn Deflected:</span>
            <span className="font-bold">-$570,000 (-5.7%)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
          <div className="text-[10px] text-slate-500 font-mono">Time-to-Value</div>
          <div className="font-bold text-white text-sm mt-0.5">14 Days</div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
          <div className="text-[10px] text-slate-500 font-mono">Early Risk Detection</div>
          <div className="font-bold text-emerald-400 text-sm mt-0.5">90-Day Warning Lead</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 7. GROWTH INTELLIGENCE: Empirical KPI Driver Tree
// ============================================================================
export function GrowthIntelligenceVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Empirical KPI Driver Tree
          </span>
        </div>
        <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-400/20 font-bold">
          Decision Model
        </span>
      </div>

      <div className="space-y-2 mb-4 text-xs font-mono">
        <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500 text-center font-bold text-white">
          ROOT LEVER: Scalable Enterprise Value &amp; Profit Growth
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-blue-400 font-bold block">1. Velocity</span>
            <span className="text-slate-400 text-[10px]">CAC Payback &lt; 9mo</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-emerald-400 font-bold block">2. Margin</span>
            <span className="text-slate-400 text-[10px]">Gross Margin &gt; 78%</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-cyan-400 font-bold block">3. Retention</span>
            <span className="text-slate-400 text-[10px]">NRR &gt; 130%</span>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <span>Capital Allocation Simulator: Active</span>
        <span className="font-mono text-purple-300 font-bold">4.2x Faster Resource Decisions</span>
      </div>
    </div>
  );
}

// ============================================================================
// 8. AI TRUST & GOVERNANCE: Three-Tier Governed Mesh & Approval Gates
// ============================================================================
export function AiTrustGovernanceVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Enterprise AI Boundary Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          SOC2 &bull; GDPR Ready
        </span>
      </div>

      <div className="space-y-2 mb-4 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-white">Tier 1: Data Ingestion Guardrails</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">PII Redacted</span>
        </div>
        <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white">Tier 2: Model Execution Sandbox</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">Zero Data Retention</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white">Tier 3: Human Commercial Approval Gate</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Executive Sign-Off</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <span>Immutable Audit Logging: Active</span>
        <span className="font-mono text-emerald-400 font-bold">Zero Policy Drift</span>
      </div>
    </div>
  );
}

