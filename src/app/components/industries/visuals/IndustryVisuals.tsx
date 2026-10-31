import React, { useState } from 'react';
import {
  Target, ShoppingBag, Building2, Zap, Rocket, Layers,
  CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Users,
  DollarSign, Activity, Lock, RefreshCw, BarChart3, Globe,
  ShieldCheck, Cpu
} from 'lucide-react';

// ============================================================================
// 1. B2B BUSINESSES: Target Account Waterfall & Committee Consensus Matrix
// ============================================================================
export function B2BStrategyVisual() {
  const [activeTier, setActiveTier] = useState<1 | 2 | 3>(1);

  const tiers = {
    1: {
      name: 'Tier 1: Strategic Accounts ($50M+ ARR Potential)',
      coverage: 'Bespoke Executive Account Dossiers & Stakeholder Mapping',
      conversion: '34.8% Meeting-to-Deal Rate',
      cadence: 'Synchronized multi-channel executive touchpoints'
    },
    2: {
      name: 'Tier 2: Scale Expansion Accounts ($10M-$50M)',
      coverage: 'Dynamic Buying Committee Intent Activation',
      conversion: '24.2% Meeting-to-Deal Rate',
      cadence: 'Intent-triggered SDR engagement'
    },
    3: {
      name: 'Tier 3: Programmatic Volume Accounts',
      coverage: 'Automated Account Intelligence & ICP Filter',
      conversion: '16.5% Meeting-to-Deal Rate',
      cadence: 'Autonomous qualification routing'
    }
  };

  const curr = tiers[activeTier];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            B2B Account Waterfall &amp; Buying Committee Map
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          Account Intelligence Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 mb-4 text-xs font-medium">
        <button
          onClick={() => setActiveTier(1)}
          className={`py-2 px-1 text-center font-bold rounded-lg transition-all ${
            activeTier === 1 ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
        >
          Tier 1 (Strategic)
        </button>
        <button
          onClick={() => setActiveTier(2)}
          className={`py-2 px-1 text-center font-bold rounded-lg transition-all ${
            activeTier === 2 ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
        >
          Tier 2 (Scale)
        </button>
        <button
          onClick={() => setActiveTier(3)}
          className={`py-2 px-1 text-center font-bold rounded-lg transition-all ${
            activeTier === 3 ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
          }`}
        >
          Tier 3 (Programmatic)
        </button>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="font-bold text-white text-xs">{curr.name}</span>
          <span className="font-mono text-emerald-400 font-bold text-[11px]">{curr.conversion}</span>
        </div>
        <p className="text-slate-400 text-[11px] mt-1">{curr.coverage}</p>
        <div className="text-[10px] font-mono text-blue-400 mt-2">Cadence: {curr.cadence}</div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800">
        <span>Committee Consensus Telemetry</span>
        <span className="font-mono text-blue-400 font-bold">3.8x Account Density</span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. B2C & CONSUMER: Omnichannel Consumer Journey & Cart Friction Mitigation
// ============================================================================
export function B2CConsumerVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Consumer LTV &amp; Cart Recovery Telemetry
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          Checkout Engine
        </span>
      </div>

      <div className="space-y-2 mb-4 text-xs">
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-300 font-medium">1. Intent-Based Audience Matching</span>
          <span className="font-mono text-blue-400 font-bold">4.2x ROAS Lift</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-300 font-medium">2. Dynamic Real-Time Offer Personalization</span>
          <span className="font-mono text-emerald-400 font-bold">+28% Checkout Comp</span>
        </div>
        <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500 flex items-center justify-between shadow-xs">
          <span className="text-white font-medium">3. Multi-Channel Cart Recovery Orchestration</span>
          <span className="font-mono text-cyan-300 font-bold">38% Deflected Drop-off</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <span>Repeat Purchase Velocity</span>
        <span className="font-mono text-emerald-400 font-bold">+48% 90-Day LTV</span>
      </div>
    </div>
  );
}

// ============================================================================
// 3. ENTERPRISE: Multi-Subsidiary Hierarchy & Global RevOps Synchronization
// ============================================================================
export function EnterpriseScaleVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Multi-Division Account Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-400/20 font-bold">
          Global Enterprise
        </span>
      </div>

      <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 mb-4">
        <div className="text-[11px] font-mono text-slate-400 mb-2">Corporate Hierarchy: Parent Group Holdings</div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-blue-400 font-bold block">Division A (Americas)</span>
            <span className="text-emerald-400 text-[11px] font-mono font-bold">Live ($1.4M ARR)</span>
          </div>
          <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-500">
            <span className="text-[10px] text-cyan-300 font-bold block">Division B (EMEA)</span>
            <span className="text-cyan-400 text-[11px] font-mono font-bold">In Contracting</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-bold block">Division C (APAC)</span>
            <span className="text-slate-400 text-[11px] font-mono font-bold">Pipeline Target</span>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <span>Cross-Division Expansion Protocol</span>
        <span className="font-mono text-emerald-400 font-bold">Zero Pipeline Friction</span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. MID-MARKET: Sales Capacity & Rep Productivity Optimization
// ============================================================================
export function MidMarketOpsVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Sales Capacity vs Rep Quota Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20 font-bold">
          High-Velocity Ops
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 block mb-1">Traditional Rep Time:</span>
          <div className="text-red-400 font-bold">65% Admin / Logging</div>
          <div className="text-slate-400 text-[10px] mt-1">Only 35% selling time</div>
        </div>
        <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500">
          <span className="text-[10px] text-blue-300 block mb-1">AI-Native Rep Time:</span>
          <div className="text-emerald-400 font-bold">78% In-Front-Of-Buyers</div>
          <div className="text-blue-200 text-[10px] mt-1">Autonomous CRM logging</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <span>Rep Quota Attainment Lift</span>
        <span className="font-mono text-emerald-400 font-bold">+32% Capacity</span>
      </div>
    </div>
  );
}

// ============================================================================
// 5. STARTUPS: PMF Signal Validation & Runway Preservation Telemetry
// ============================================================================
export function StartupPmfVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            PMF Telemetry &amp; Founder-to-Scale Transition
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-400/20 font-bold">
          48h Pipeline Launch
        </span>
      </div>

      <div className="space-y-2 mb-4 text-xs font-mono">
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-300">Phase 1: ICP Empirical Testing</span>
          <span className="text-emerald-400 font-bold">Validated</span>
        </div>
        <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500 flex items-center justify-between">
          <span className="text-white">Phase 2: First 10 Enterprise Customer Contracts</span>
          <span className="text-cyan-300 font-bold">Active Sprint</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Phase 3: Repeatable Sales Engine Hand-off</span>
          <span className="text-slate-500 font-bold">Planned</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <span>Runway Preservation Advantage</span>
        <span className="font-mono text-emerald-400 font-bold">3.2x Magic Number</span>
      </div>
    </div>
  );
}

// ============================================================================
// 6. SAAS & RECURRING-REVENUE: Subscription Growth & NRR Compounding
// ============================================================================
export function SaasLifecycleVisual() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl text-white">
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Subscription Growth: PLG to Enterprise Expansion
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
          NRR: 132.8%
        </span>
      </div>

      {/* Subscription Pipeline Flow */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block mb-1">Self-Serve / Trial</span>
          <div className="font-bold text-white">PQL Trigger</div>
          <div className="text-[10px] text-slate-400 mt-1">Usage threshold alert</div>
        </div>
        <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500 shadow-md">
          <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">Sales-Assisted</span>
          <div className="font-bold text-white">Enterprise Conversion</div>
          <div className="text-[10px] text-cyan-300 mt-1">+46% Trial-to-Paid</div>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">Retention &amp; Upsell</span>
          <div className="font-bold text-white">Tier Expansion</div>
          <div className="text-[10px] text-emerald-400 mt-1">48% of net-new ARR</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <span>Gross Churn Deflection</span>
        <span className="font-mono text-emerald-400 font-bold">-38% Churn Risk</span>
      </div>
    </div>
  );
}

