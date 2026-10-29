import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Globe, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Network, GitBranch,
  Split, Sliders, CheckSquare, Shield, Crosshair
} from 'lucide-react';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

interface DecisionGate {
  id: string;
  stage: string;
  name: string;
  focus: string;
  validationCheckpoints: string[];
  aiDecisionSupport: string;
  failureRiskAvoided: string;
}

const DECISION_GATES: DecisionGate[] = [
  {
    id: 'gate-1',
    stage: 'Gate 01',
    name: 'Unit Economic Validation',
    focus: 'Contribution margin & willingness-to-pay calibration',
    validationCheckpoints: [
      'Verified local territory willingness-to-pay exceeds hurdle rate (>70% gross margin)',
      'Direct vs. indirect cost-to-serve modeled including local tax withholding & tariffs',
      'Regulatory clearance index cleared (sovereignty and contractual legality guaranteed)'
    ],
    aiDecisionSupport: 'Bayesian pricing sensitivity model tests price resistance across 100+ local buyer archetypes.',
    failureRiskAvoided: 'Prevents deploying capital into high-friction regions with negative contribution margins.'
  },
  {
    id: 'gate-2',
    stage: 'Gate 02',
    name: 'Entry Model Architecture',
    focus: 'Direct vs. Partner vs. Hybrid vs. Digital-First selection',
    validationCheckpoints: [
      'Territory relationship requirement scored (e.g. Japan Keiretsu vs. UK direct)',
      'Partner margin headroom audited (distributor take-rate vs. direct customer acquisition cost)',
      'Pilot outbound velocity tested in-market over a 30-day proof-of-demand sprint'
    ],
    aiDecisionSupport: 'Ecosystem matching algorithm scores 200+ regional distributors for capability and tier affinity.',
    failureRiskAvoided: 'Prevents expensive burn on mismatched direct sales motions in partner-dominated economies.'
  },
  {
    id: 'gate-3',
    stage: 'Gate 03',
    name: 'Cultural & Value Localization',
    focus: 'Beyond language translation to native value alignment',
    validationCheckpoints: [
      'Value propositions re-anchored to territory buyer priorities (e.g. technical depth in DACH)',
      'Contract language, SLAs, and liability caps translated into native jurisdictional standards',
      'Local customer proof points and territory reference logos surfaced in collateral'
    ],
    aiDecisionSupport: 'Autonomous cultural nuances parser validates sales collateral against local business customs.',
    failureRiskAvoided: 'Eliminates conversion dropoff caused by domestic benefit messaging in technical international markets.'
  },
  {
    id: 'gate-4',
    stage: 'Gate 04',
    name: 'Purchasing-Power & Hedged Pricing',
    focus: 'Dynamic multi-currency pricing and currency hedging',
    validationCheckpoints: [
      'Tiered local currency pricing indexed to purchasing power parity (PPP) and local inflation',
      'Automated FX volatility hedging bands established to safeguard dollar margins',
      'Local invoicing and preferred domestic payment rails integrated (e.g. SEPA, Boleto, PayNow)'
    ],
    aiDecisionSupport: 'Dynamic FX telemetry engine dynamically recalculates discount guardrails against currency swings.',
    failureRiskAvoided: 'Stops margin erosion caused by currency devaluations or uncompetitive universal currency invoicing.'
  },
  {
    id: 'gate-5',
    stage: 'Gate 05',
    name: 'Post-Entry Revenue Expansion',
    focus: 'NRR acceleration, upsell motions, and cross-border account growth',
    validationCheckpoints: [
      'Territory-specific customer success cadences established with native timezone SLAs',
      'Automated expansion telemetry triggers configured to monitor regional software utilization',
      'Global MNC account expansion trees mapped across multi-subsidiary entities'
    ],
    aiDecisionSupport: 'Account expansion bots detect cross-border expansion signals inside global multinational customers.',
    failureRiskAvoided: 'Prevents flat 100% NRR traps where international revenue stalls after initial acquisition.'
  }
];

export default function CrossBorderStrategyPage() {
  const [activeGate, setActiveGate] = useState<DecisionGate>(DECISION_GATES[0]);

  useEffect(() => {
    document.title = 'Cross-Border Revenue Strategy: Engineer Market Entry for Predictable ROI | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Market Entry Blueprint Layout, Industry Ambient Grid) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        {/* Ambient Grid & Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span className="font-mono text-indigo-600 font-extrabold">PILLAR 02 OF 06</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>CROSS-BORDER REVENUE ARCHITECTURE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Cross-Border Revenue Strategy:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                Engineer Market Entry for Predictable ROI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Four strategic frameworks that design market entry models, localize offerings for cultural fit, optimize pricing across currencies and purchasing power, and plan revenue expansion — turning international expansion from a gamble into a deterministic system.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-indigo-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Design Your Market Entry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/global-acceleration"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore Other Acceleration Areas</span>
                <ChevronRight className="w-4 h-4 text-indigo-600" />
              </Link>
            </div>

            {/* Telemetry Bar */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-indigo-600 font-bold">
                <GitBranch className="w-4 h-4 text-indigo-600" />
                STAGE-GATE VERIFICATION:
              </span>
              <span>5 Deterministic Decision Gates</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-600 font-semibold">50-70% Shorter Time-to-Revenue</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY PANEL ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase mb-4">
                Executive Summary
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Strategy Determines Success
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-6">
                Replicating domestic sales playbooks internationally is the primary reason cross-border ventures burn runway without traction. Every regional market demands a custom-engineered entry model, native cultural resonance, purchasing-power calibrated pricing, and structured account expansion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-sm">
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Architecture Mode</div>
                  <div className="font-bold text-slate-900 mt-0.5">Stage-Gate Validation</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Conversion Delta</div>
                  <div className="font-bold text-indigo-600 mt-0.5">3-5X Deep Localization Lift</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Net Expansion</div>
                  <div className="font-bold text-emerald-600 mt-0.5">120%+ International NRR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 STRATEGIC FRAMEWORKS (OPTIMIZED EXECUTIVE FORMAT) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Four Strategic Market Entry Frameworks
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Engineered architecture to eliminate trial-and-error expansion, compressing time-to-revenue while protecting long-term gross margins.
            </p>
          </div>

          <div className="space-y-12">
            {/* FRAMEWORK 1: Market Entry Models */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase mb-3">
                    Framework 01 · Motion Architecture
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Market Entry Models
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-sm font-bold">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                  <span>50-70% Reduction in Time-to-Revenue</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-indigo-700">Strategic Overview</span>
                Replaces rigid domestic sales replication with calibrated, territory-specific entry models — direct enterprise, hybrid co-sell, distributor-led, or digital-first. Validates motion fit via controlled 30-day proof-of-demand pilot cycles before permanent infrastructure is funded.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Motion Fit:</strong>
                    Prevents prolonged burn on mismatched direct sales motions in partner-dominated economies.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/80">
                  <div className="text-[11px] font-mono text-indigo-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-indigo-900 font-mono">50-70% Faster Ramp</div>
                  <div className="text-xs text-indigo-700 mt-0.5">Payback compressed to 6.8 months</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Cloud Infrastructure Vendor:</strong>
                    Shifted from direct outbound in Japan to a Keiretsu-aligned hybrid distributor model, securing $4.2M in contracted ARR within 120 days.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-indigo-600 text-slate-700 italic text-sm">
                &ldquo;Adapting our go-to-market structure to Japan&apos;s relationship-driven ecosystem cut our ramp cycle in half compared to our initial attempt at direct cold outreach.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — EVP Global Sales, Cloud Infrastructure Provider
                </span>
              </div>
            </div>

            {/* FRAMEWORK 2: Localization Strategy */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase mb-3">
                    Framework 02 · Deep Cultural Fit
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Localization Strategy
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-bold">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>3-5X Improvement in Conversion Rates</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-blue-700">Strategic Overview</span>
                Goes beyond basic linguistic translation into deep behavioral localization. Adapts value propositions, compliance disclosures, technical specification hierarchies, and local buyer proof points to resonate natively with regional procurement committees.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Translation vs Localization:</strong>
                    Overcomes the steep conversion dropoffs caused by domestic benefit copy in technical foreign markets.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <div className="text-[11px] font-mono text-blue-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-blue-900 font-mono">3-5X Conversion Lift</div>
                  <div className="text-xs text-blue-700 mt-0.5">82% buyer trust index in procurement</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Cybersecurity Platform:</strong>
                    Re-architected US marketing into technical specification dossiers for DACH buyers, lifting German enterprise demo-to-close conversion by 340%.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-sm">
                &ldquo;German procurement committees demanded technical architecture proofs rather than high-level benefit claims. Deep localization transformed our conversion rate overnight.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Marketing Officer, Enterprise Cybersecurity Platform
                </span>
              </div>
            </div>

            {/* FRAMEWORK 3: Global Pricing */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase mb-3">
                    Framework 03 · Currency & PPP Realization
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Global Pricing
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-sm font-bold">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>15-25% Lift in Price Realization</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-emerald-700">Strategic Overview</span>
                Designs dynamic purchasing-power parity (PPP) adjusted pricing tiers and currency-hedged billing structures. Prevents deal loss in price-sensitive growth regions while capturing maximum willingness-to-pay in high-purchasing-power economies.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Pricing Precision:</strong>
                    Eliminates leaving margin on the table in premium regions or pricing out buyers in developing hubs.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="text-[11px] font-mono text-emerald-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-emerald-900 font-mono">+18% Net Realization</div>
                  <div className="text-xs text-emerald-700 mt-0.5">Zero FX volatility margin leakage</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">FinTech SaaS ($90M ARR):</strong>
                    Implemented PPP-calibrated multi-currency tiers across EMEA and APAC, capturing $3.6M in previously priced-out contracts at 78% margin.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 text-slate-700 italic text-sm">
                &ldquo;Calibrated regional pricing tiers allowed us to win dominant mid-market share across Asia while preserving premium margins in London and Zurich.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Head of Revenue Operations, FinTech SaaS ($90M ARR)
                </span>
              </div>
            </div>

            {/* FRAMEWORK 4: Revenue Expansion Planning */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase mb-3">
                    Framework 04 · NRR Acceleration
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Revenue Expansion Planning
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-mono text-sm font-bold">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                  <span>20-30% Lift in International NRR</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-purple-700">Strategic Overview</span>
                Engineers programmatic international account expansion motions from Day 1. Leverages automated usage telemetry, local customer success cadences, and multi-subsidiary enterprise trees to drive continuous net revenue retention (NRR) expansion.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Expansion vs Stagnation:</strong>
                    Prevents international revenue from flatlining after initial acquisition by triggering cross-subsidiary upsells.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200/80">
                  <div className="text-[11px] font-mono text-purple-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-purple-900 font-mono">126% International NRR</div>
                  <div className="text-xs text-purple-700 mt-0.5">3.2X LTV/CAC acceleration</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Data Scaleup:</strong>
                    Mapped European subsidiaries of existing US Fortune 500 accounts, capturing $6.8M in cross-border expansion in under 9 months.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-purple-600 text-slate-700 italic text-sm">
                &ldquo;Structuring global account expansion trees allowed us to turn single-country land contracts into multi-region enterprise agreements with 125%+ NRR.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Revenue Officer, Data Infrastructure Scaleup
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VISUAL INTERACTION: MARKET ENTRY BLUEPRINT ── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase mb-3">
              <Split className="w-3.5 h-3.5" />
              Stage-Gate Architecture Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Deterministic Market Entry Decision Gates
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Every international expansion passes through sequential verification gates with automated AI decision support, preventing capital waste before full deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Stage Gate Steps Timeline */}
            <div className="lg:col-span-5 space-y-3">
              {DECISION_GATES.map((gate) => {
                const isSelected = activeGate.id === gate.id;
                return (
                  <div
                    key={gate.id}
                    onClick={() => setActiveGate(gate)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-bold">
                          {gate.stage}
                        </span>
                        <h4 className="font-bold text-white text-base">{gate.name}</h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-indigo-400' : 'text-slate-600'}`} />
                    </div>
                    <p className="text-xs text-slate-400 font-sans line-clamp-1">{gate.focus}</p>
                  </div>
                );
              })}
            </div>

            {/* Stage Gate Detail Dossier */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="border-b border-slate-800 pb-5 mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold uppercase mb-2">
                  {activeGate.stage} Verification Criteria
                </div>
                <h3 className="text-2xl font-black text-white">{activeGate.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{activeGate.focus}</p>
              </div>

              {/* Validation Checkpoints */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                  Mandatory Validation Checkpoints (Before Capital Deployment)
                </div>
                <div className="space-y-2.5">
                  {activeGate.validationCheckpoints.map((cp, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{cp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Decision Support */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/60 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase mb-1">
                  <Bot className="w-4 h-4 text-indigo-400" />
                  Autonomous AI Decision Support
                </div>
                <p className="text-xs sm:sm text-indigo-200 font-sans">{activeGate.aiDecisionSupport}</p>
              </div>

              {/* Risk Avoided */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase mb-1">
                  <ShieldCheck className="w-4 h-4 text-rose-400" />
                  Existential Risk Eliminated
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans">{activeGate.failureRiskAvoided}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: VERIFIED OUTCOMES GRID ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Empirical Strategic Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Verified metric impacts achieved through deterministic cross-border strategy architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                50-70%
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Time-to-Revenue</p>
              <p className="text-xs text-slate-600">Faster contracted enterprise revenue via validated motion architecture.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                3-5X
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Conversion Lift</p>
              <p className="text-xs text-slate-600">Achieved through deep cultural value alignment vs. translation-only copy.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                15-25%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Price Realization</p>
              <p className="text-xs text-slate-600">Expansion in average deal size via purchasing-power calibrated tiers.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                20-30%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">NRR Acceleration</p>
              <p className="text-xs text-slate-600">Net revenue retention growth driven by market-specific expansion motions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (CROSS-LINKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Strategy Executes the Intelligence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore interconnected capabilities that feed into and operationalize your cross-border strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/global-acceleration/market-intelligence"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>Market Intelligence</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Provides the country opportunity scores, TAM/SAM/SOM boundaries, and regulatory facts needed to design entry gates.
              </p>
            </Link>

            <Link
              to="/global-acceleration/partner-ecosystems"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                <span>Partner Ecosystems</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Executes the partner-led and hybrid entry models designed in your strategy through structured co-selling and distributor scoring.
              </p>
            </Link>

            <Link
              to="/global-acceleration/global-revops"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-sky-600 transition-colors flex items-center justify-between">
                <span>Global Revenue Operations</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Orchestrates multi-market sales alignment, cross-border revenue attribution, and multi-currency billing infrastructure.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Design Your Market Entry Strategy?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Request a confidential Cross-Border Entry Strategy session. Receive a structured entry model analysis and localized pricing roadmap within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <GlobalExpansionIntakeForm
              pageContext="Cross-Border Revenue Strategy"
              defaultChallenge="Replicating domestic motion without proper localization"
              buttonText="Design Your Market Entry Strategy"
            />
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-600">
              <span>500+ B2B Companies</span>
              <span className="text-slate-300">·</span>
              <span>5X Avg Revenue Growth</span>
              <span className="text-slate-300">·</span>
              <span>24/7 AI Support</span>
              <span className="text-slate-300">·</span>
              <span>Operations in 40+ Countries</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
