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
    failureRiskAvoided: 'Prevents deploying capital into high-GDP regions with negative contribution margins.'
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
    failureRiskAvoided: 'Prevents 18-month burn on mismatched direct sales motions in partner-dominated economies.'
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
    failureRiskAvoided: 'Eliminates 90% conversion dropoff caused by US-centric benefit messaging in technical markets.'
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
    failureRiskAvoided: 'Stops 20% margin erosion caused by currency devaluations or uncompetitive USD invoicing.'
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
                <span>Explore Other Pillars</span>
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

      {/* ── SECTION 2: THE PRINCIPLE ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase mb-4">
                Core Strategic Thesis
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Strategy Determines Success
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Most enterprises replicate their domestic go-to-market motion internationally — same sales structure, same pricing, same messaging. They assume what worked at home will work abroad. But every market requires a different entry model based on competitive density, regulatory complexity, customer preferences, and distribution infrastructure. A direct sales motion may work in the US but fail in Japan where relationships drive deals. A self-serve motion may work in Germany but fail in India where buyers expect high-touch engagement. Cross-border revenue strategy replaces one-size-fits-all with market-specific design — engineering entry models, localization, pricing, and expansion plans for each market&apos;s unique characteristics. The result: international revenue that scales predictably, not hopefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 STRATEGIC FRAMEWORKS (NARRATIVE FLOW) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Four Strategic Market Entry Frameworks
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Engineered architecture to eliminate the trial-and-error cycle that costs enterprises $15M+ per failed international attempt.
            </p>
          </div>

          <div className="space-y-12">
            {/* FRAMEWORK 1: Market Entry Models */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
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

              {/* Provocative Question */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white mb-6 flex items-start gap-3">
                <span className="text-indigo-400 font-mono text-lg font-bold">Q:</span>
                <p className="font-semibold text-base sm:text-lg text-slate-100">
                  Are you entering markets with the right model — or just replicating your domestic motion?
                </p>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies replicate their domestic go-to-market motion internationally — same sales structure, same pricing, same messaging. They assume what worked at home will work abroad.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    Every market requires a different entry model based on competitive density, regulatory complexity, customer preferences, and distribution infrastructure. A direct sales motion may work in the US but fail in Japan where relationships drive deals.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    You invest millions in a market entry model that does not fit the market. You burn through runway without gaining traction. The critical trigger strikes when 18 months into market entry, you realize the motion does not fit and you are forced to pivot at immense capital cost.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-indigo-600">The Resolution</strong>
                    We design market-specific entry models — direct sales, partner-led, hybrid, or digital-first — based on calibrated territory dynamics. We validate the motion through controlled pilot programs before full-scale deployment.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-indigo-600 text-slate-700 italic text-sm">
                &ldquo;We tried to replicate our US direct sales motion in Japan — we didn&apos;t realize relationships take 12-18 months to build there.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — EVP Global Sales, Cloud Infrastructure Provider
                </span>
              </div>
            </div>

            {/* FRAMEWORK 2: Localization Strategy */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
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

              {/* Provocative Question */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white mb-6 flex items-start gap-3">
                <span className="text-blue-400 font-mono text-lg font-bold">Q:</span>
                <p className="font-semibold text-base sm:text-lg text-slate-100">
                  Is your offering truly localized — or just translated?
                </p>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies translate their domestic offering into local languages and assume they are localized. They miss cultural nuances, usage patterns, and value propositions that resonate locally.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    True localization goes far beyond language — it requires adapting messaging to cultural values, redesigning features for local usage patterns, adjusting pricing to local purchasing power, and building trust signals that resonate locally.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    Your messaging falls flat. Features do not match local workflows. Pricing is out of range. You are perceived as an outsider who does not understand the market. The critical trigger is when conversion rates in a new market are 1/10th of domestic rates despite heavy marketing spend.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-blue-600">The Resolution</strong>
                    We conduct deep localization research — cultural value mapping, usage pattern analysis, willingness-to-pay studies, and trust signal identification. We redesign messaging, features, and pricing for each market, validating with local enterprise buyer panels before launch.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-sm">
                &ldquo;We translated our US messaging into German — we didn&apos;t realize German buyers value technical specifications over benefits, so our messaging didn&apos;t resonate.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Marketing Officer, Enterprise Cybersecurity Platform
                </span>
              </div>
            </div>

            {/* FRAMEWORK 3: Global Pricing */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
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

              {/* Provocative Question */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white mb-6 flex items-start gap-3">
                <span className="text-emerald-400 font-mono text-lg font-bold">Q:</span>
                <p className="font-semibold text-base sm:text-lg text-slate-100">
                  Are you pricing for each market&apos;s purchasing power — or applying a universal price with currency conversion?
                </p>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies set a global price in USD and convert it to local currencies. They assume the same price-to-value ratio applies everywhere.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    Purchasing power varies dramatically by country. A $100/month price may be affordable in the US but prohibitive in India. Currency fluctuations can erase margins overnight. Without market-specific pricing, you either price out buyers or leave massive money on the table.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    You lose deals in price-sensitive markets, leave margin behind in high-purchasing-power markets, and suffer volatile margin compression. The critical trigger occurs when a currency devaluation erases 20% of your international margins overnight.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-emerald-600">The Resolution</strong>
                    We conduct willingness-to-pay research by market, design purchasing-power-adjusted pricing tiers, and build currency hedging strategies. We deploy dynamic pricing engines that adjust for currency fluctuations in real time while preserving gross margins.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 text-slate-700 italic text-sm">
                &ldquo;We applied our US pricing to India with currency conversion — we didn&apos;t realize it was 5X the local purchasing power equivalent, so we priced ourselves out of the market.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Head of Revenue Operations, FinTech SaaS ($90M ARR)
                </span>
              </div>
            </div>

            {/* FRAMEWORK 4: Revenue Expansion Planning */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
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

              {/* Provocative Question */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white mb-6 flex items-start gap-3">
                <span className="text-purple-400 font-mono text-lg font-bold">Q:</span>
                <p className="font-semibold text-base sm:text-lg text-slate-100">
                  Do you have a plan to expand revenue within each market — or just a plan to enter?
                </p>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies focus on initial market entry and assume expansion will happen organically. They do not design expansion motions for international customers.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    International expansion requires different motions than domestic expansion — different customer success approaches, different upsell triggers, different partner leverage. Without planning expansion, you enter markets but never scale within them.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    International revenue plateaus at initial acquisition. You never capture the expansion revenue that makes international operations profitable. The trigger occurs when international NRR stays flat at 100% while domestic NRR grows to 120%.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-purple-600">The Resolution</strong>
                    We design market-specific expansion motions — customer success frameworks, upsell triggers, partner-led expansion, and cross-border account management. We deploy AI agents that identify expansion opportunities in international accounts.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-purple-600 text-slate-700 italic text-sm">
                &ldquo;We entered 5 markets but never figured out how to expand within them — our international NRR stayed flat while domestic grew 20% annually.&rdquo;
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
              {DECISION_GATES.map((gate, index) => {
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
                <p className="text-xs sm:text-sm text-indigo-200 font-sans">{activeGate.aiDecisionSupport}</p>
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
