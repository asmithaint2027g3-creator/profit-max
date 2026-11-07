import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, ChevronRight, TrendingUp, Zap, BarChart3,
  Layers, Activity, Target, CheckCircle2, AlertCircle,
  HelpCircle, ChevronDown, Cpu, Radar, Clock, Shield,
  Sparkles, DollarSign, LineChart, Network, Sliders, Scale,
  ShieldCheck, Compass, Users, Check
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

interface HubCapability {
  num: string;
  title: string;
  slug: string;
  path: string;
  headline: string;
  desc: string;
  icon: any;
  kpi: string;
  kpiLabel: string;
  submenus: { title: string; anchor: string }[];
}

const capabilityList: HubCapability[] = [
  {
    num: '01',
    title: 'Revenue Physics',
    slug: 'revenue-physics',
    path: '/growth-science/revenue-physics',
    headline: 'Revenue Mechanics & Modeling',
    desc: 'Understand the mathematical laws governing revenue behavior: driver mapping, parametric revenue equations, cohort dynamics, and white-space profit pools.',
    icon: Activity,
    kpi: '$14.2K/Day',
    kpiLabel: 'Sales Velocity Index',
    submenus: [
      { title: 'Revenue Architecture', anchor: 'revenue-architecture' },
      { title: 'Revenue Velocity Modeling', anchor: 'revenue-velocity-modeling' },
      { title: 'Revenue Friction Diagnostics', anchor: 'revenue-friction-diagnostics' },
      { title: 'Growth Constraint Analysis', anchor: 'growth-constraint-analysis' },
      { title: 'Revenue Flow Optimization', anchor: 'revenue-flow-optimization' },
      { title: 'Profit Pool Dynamics', anchor: 'profit-pool-dynamics' },
      { title: 'Revenue Predictability Modeling', anchor: 'revenue-predictability-modeling' },
      { title: 'Revenue System Design', anchor: 'revenue-system-design' }
    ]
  },
  {
    num: '02',
    title: 'Revenue Intelligence',
    slug: 'revenue-intelligence',
    path: '/growth-science/revenue-intelligence',
    headline: 'Signals & Decision Intelligence',
    desc: 'Transform raw market intent, account telemetry, competitor moves, and pipeline data into deterministic commercial decision intelligence.',
    icon: LineChart,
    kpi: '96.4%',
    kpiLabel: 'Forecast Precision',
    submenus: [
      { title: 'Revenue Data Intelligence', anchor: 'revenue-data-intelligence' },
      { title: 'Customer Economics Intelligence', anchor: 'customer-economics-intelligence' },
      { title: 'Market Intelligence', anchor: 'market-intelligence' },
      { title: 'Demand Intelligence', anchor: 'demand-intelligence' },
      { title: 'Pipeline Intelligence', anchor: 'pipeline-intelligence' },
      { title: 'Revenue Performance Intelligence', anchor: 'revenue-performance-intelligence' },
      { title: 'Competitive Revenue Intelligence', anchor: 'competitive-revenue-intelligence' },
      { title: 'Executive Revenue Insights', anchor: 'executive-revenue-insights' }
    ]
  },
  {
    num: '03',
    title: 'Revenue Potential Discovery',
    slug: 'revenue-potential-discovery',
    path: '/growth-science/revenue-potential-discovery',
    headline: 'Opportunity Exploration',
    desc: 'Systematically discover unharvested economic headroom across installed accounts, latent product capabilities, unserved market segments, and AI revenue lines.',
    icon: Compass,
    kpi: '+38.2%',
    kpiLabel: 'Expansion ARR Growth',
    submenus: [
      { title: 'Total Addressable Market Discovery', anchor: 'total-addressable-market-discovery' },
      { title: 'Serviceable Market Analysis', anchor: 'serviceable-market-analysis' },
      { title: 'White Space Intelligence', anchor: 'white-space-intelligence' },
      { title: 'Untapped Demand Discovery', anchor: 'untapped-demand-discovery' },
      { title: 'Customer Potential Mapping', anchor: 'customer-potential-mapping' },
      { title: 'Market Opportunity Prioritization', anchor: 'market-opportunity-prioritization' },
      { title: 'Revenue Opportunity Modeling', anchor: 'revenue-opportunity-modeling' },
      { title: 'Growth Potential Forecasting', anchor: 'growth-potential-forecasting' }
    ]
  },
  {
    num: '04',
    title: 'Revenue Leakage & Recovery',
    slug: 'revenue-leakage-recovery',
    path: '/growth-science/revenue-leakage-recovery',
    headline: 'Forensic Loss Diagnosis',
    desc: 'Diagnose and claw back invisible revenue loss across funnel bottlenecks, rogue discounting, contract entitlement slippage, and silent customer churn.',
    icon: Radar,
    kpi: '< 1.2%',
    kpiLabel: 'Leakage Rate Floor',
    submenus: [
      { title: 'Revenue Leakage Diagnostics', anchor: 'revenue-leakage-diagnostics' },
      { title: 'Pricing Leakage Detection', anchor: 'pricing-leakage-detection' },
      { title: 'Customer Churn Leakage', anchor: 'customer-churn-leakage' },
      { title: 'Pipeline Leakage Analysis', anchor: 'pipeline-leakage-analysis' },
      { title: 'Conversion Loss Diagnostics', anchor: 'conversion-loss-diagnostics' },
      { title: 'Margin Erosion Analysis', anchor: 'margin-erosion-analysis' },
      { title: 'Revenue Recovery Engineering', anchor: 'revenue-recovery-engineering' },
      { title: 'Leakage Prevention Intelligence', anchor: 'leakage-prevention-intelligence' }
    ]
  },
  {
    num: '05',
    title: 'Revenue Bundling & Offer Engineering',
    slug: 'revenue-bundling-offer-engineering',
    path: '/growth-science/revenue-bundling-offer-engineering',
    headline: 'Offer Architecture & Packaging',
    desc: 'Engineer high-converting commercial solution bundles, subscription tiers, and value-based packaging that increase contract magnitude and protect gross margins.',
    icon: Layers,
    kpi: '+41.0%',
    kpiLabel: 'Average Contract Lift',
    submenus: [
      { title: 'Product Bundling Strategy', anchor: 'product-bundling-strategy' },
      { title: 'Service Bundling Architecture', anchor: 'service-bundling-architecture' },
      { title: 'Offer Design Intelligence', anchor: 'offer-design-intelligence' },
      { title: 'Value Proposition Engineering', anchor: 'value-proposition-engineering' },
      { title: 'Cross-Sell Offer Design', anchor: 'cross-sell-offer-design' },
      { title: 'Upsell Offer Architecture', anchor: 'upsell-offer-architecture' },
      { title: 'Packaging Optimization', anchor: 'packaging-optimization' },
      { title: 'Commercial Offer Optimization', anchor: 'commercial-offer-optimization' }
    ]
  },
  {
    num: '06',
    title: 'Value Capture Engineering',
    slug: 'value-capture-engineering',
    path: '/growth-science/value-capture-engineering',
    headline: 'Pricing & Profitability',
    desc: 'Capture fair economic return for the value your business creates. Enforce concession trade-offs, optimize proposals, and dominate high-margin profit pools.',
    icon: DollarSign,
    kpi: '82.6%',
    kpiLabel: 'Gross Margin Realization',
    submenus: [
      { title: 'Value-Based Pricing Architecture', anchor: 'value-based-pricing-architecture' },
      { title: 'Customer Value Quantification', anchor: 'customer-value-quantification' },
      { title: 'Value Realization Intelligence', anchor: 'value-realization-intelligence' },
      { title: 'Margin Optimization', anchor: 'margin-optimization' },
      { title: 'Price Realization Engineering', anchor: 'price-realization-engineering' },
      { title: 'Contract Value Optimization', anchor: 'contract-value-optimization' },
      { title: 'Monetization Strategy', anchor: 'monetization-strategy' },
      { title: 'Value Capture Analytics', anchor: 'value-capture-analytics' }
    ]
  },
  {
    num: '07',
    title: 'Product Innovation & Revenue Expansion',
    slug: 'product-innovation-revenue-expansion',
    path: '/growth-science/product-innovation-revenue-expansion',
    headline: 'Innovation to Monetization',
    desc: 'Convert customer research and R&D engineering into scalable software revenue. Transform bespoke consulting services into high-margin recurring SaaS.',
    icon: Sparkles,
    kpi: '78.4%',
    kpiLabel: 'Attributed Roadmap ARR',
    submenus: [
      { title: 'Product Opportunity Intelligence', anchor: 'product-opportunity-intelligence' },
      { title: 'Customer Need Discovery', anchor: 'customer-need-discovery' },
      { title: 'Product-Market Fit Intelligence', anchor: 'product-market-fit-intelligence' },
      { title: 'Innovation Portfolio Strategy', anchor: 'innovation-portfolio-strategy' },
      { title: 'New Revenue Stream Discovery', anchor: 'new-revenue-stream-discovery' },
      { title: 'Product-Led Growth Engineering', anchor: 'product-led-growth-engineering' },
      { title: 'Market Expansion Strategy', anchor: 'market-expansion-strategy' },
      { title: 'Product Revenue Optimization', anchor: 'product-revenue-optimization' }
    ]
  },
  {
    num: '08',
    title: 'Revenue Acceleration',
    slug: 'revenue-acceleration',
    path: '/growth-science/revenue-acceleration',
    headline: 'Sales Execution & Workflows',
    desc: 'Deploy AI sales engines, autonomous growth orchestration, and real-time deal risk coaching to compress sales cycles and multiply rep productivity.',
    icon: Zap,
    kpi: '62 Days',
    kpiLabel: 'Median Sales Cycle',
    submenus: [
      { title: 'Revenue Velocity Optimization', anchor: 'revenue-velocity-optimization' },
      { title: 'Sales Cycle Acceleration', anchor: 'sales-cycle-acceleration' },
      { title: 'Conversion Rate Engineering', anchor: 'conversion-rate-engineering' },
      { title: 'Pipeline Acceleration', anchor: 'pipeline-acceleration' },
      { title: 'Demand-to-Revenue Optimization', anchor: 'demand-to-revenue-optimization' },
      { title: 'Customer Acquisition Optimization', anchor: 'customer-acquisition-optimization' },
      { title: 'Expansion Revenue Acceleration', anchor: 'expansion-revenue-acceleration' },
      { title: 'Growth Experimentation', anchor: 'growth-experimentation' }
    ]
  },
  {
    num: '09',
    title: 'Executive Revenue Command Center',
    slug: 'executive-revenue-command-center',
    path: '/growth-science/executive-revenue-command-center',
    headline: 'Executive Decision Cockpit',
    desc: 'Unify commercial telemetry, stochastic board forecast scenarios, margin health indexes, and proactive leakage alarms into an executive command HUD.',
    icon: Cpu,
    kpi: '100.0%',
    kpiLabel: 'Data Concordance',
    submenus: [
      { title: 'Executive Revenue Dashboard', anchor: 'executive-revenue-dashboard' },
      { title: 'Revenue Performance Command', anchor: 'revenue-performance-command' },
      { title: 'Strategic Growth Planning', anchor: 'strategic-growth-planning' },
      { title: 'Revenue Forecast Intelligence', anchor: 'revenue-forecast-intelligence' },
      { title: 'Profitability Intelligence', anchor: 'profitability-intelligence' },
      { title: 'Growth Scenario Modeling', anchor: 'growth-scenario-modeling' },
      { title: 'Strategic Decision Intelligence', anchor: 'strategic-decision-intelligence' },
      { title: 'Enterprise Growth Governance', anchor: 'enterprise-growth-governance' }
    ]
  }
];

const diagnosticChallenges = [
  {
    id: 'velocity',
    label: 'Sales Cycles Lengthening & Pipeline Drag',
    icon: Clock,
    symptom: 'Qualified opportunities are stalling in negotiation stages, median sales cycles have expanded by 40+ days, and quarterly forecasts suffer high variance.',
    recommendedPage: 'Revenue Acceleration',
    recommendedPath: '/growth-science/revenue-acceleration'
  },
  {
    id: 'leakage',
    label: 'Rogue Discounting & Margin Compression',
    icon: DollarSign,
    symptom: 'Reps offer aggressive unapproved discounts to close quarter-end deals, eroding gross margins by hundreds of basis points with no contractual give-get.',
    recommendedPage: 'Revenue Leakage & Recovery',
    recommendedPath: '/growth-science/revenue-leakage-recovery'
  },
  {
    id: 'churn',
    label: 'Silent Customer Churn & Flat Net Retention',
    icon: Users,
    symptom: 'Accounts quietly disengage without raising support tickets, leading to unexpected renewal cancellations and net revenue retention (NRR) dropping below 105%.',
    recommendedPage: 'Revenue Leakage & Recovery',
    recommendedPath: '/growth-science/revenue-leakage-recovery#customer-churn-leakage'
  },
  {
    id: 'pricing',
    label: 'Unmonetized Product Innovation',
    icon: Layers,
    symptom: 'R&D delivers massive engineering improvements, but sales reps continue selling legacy packages at flat prices, unable to monetize new capability value.',
    recommendedPage: 'Revenue Bundling & Offer Engineering',
    recommendedPath: '/growth-science/revenue-bundling-offer-engineering'
  },
  {
    id: 'forecasting',
    label: 'Board Forecast Misses & Subjective Commits',
    icon: LineChart,
    symptom: 'Sales leaders rely on subjective rep optimism rather than empirical buyer milestones, resulting in unpredictable board-level forecast variances above 15%.',
    recommendedPage: 'Executive Revenue Command Center',
    recommendedPath: '/growth-science/executive-revenue-command-center'
  }
];

export function GrowthScienceHub() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>('velocity');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Growth Science OS | Enterprise Revenue Optimization | ProfitMachines';
  }, []);

  const activeChallengeData = diagnosticChallenges.find(c => c.id === selectedChallenge) || diagnosticChallenges[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ── SECTION 01: HERO ARCHITECTURE ── */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>GROWTH SCIENCE OPERATING SYSTEM</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400">9 CAPABILITIES · 72 SUBMENUS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] font-heading">
                The Empirical Science of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Predictable, Profitable Enterprise Revenue
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                Replace commercial guesswork with mathematical precision. Deconstruct revenue physics, isolate latent market demand, eliminate margin leakage, and govern forward growth through 9 integrated scientific capabilities.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/25 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore 9 Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#diagnostic"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Radar className="w-4 h-4 text-blue-400" />
                  <span>Run Friction Diagnostic</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
                {['1. Physics', '2. Intelligence', '3. Discovery', '4. Leakage Recovery', '5. Bundling', '6. Value Capture', '7. Innovation', '8. Acceleration', '9. Command Center'].map((step, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800/90 text-slate-400 text-[11px]">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: CENTRAL GROWTH SYSTEM ARCHITECTURE ── */}
      <section id="architecture" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
              Systematic Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The 5-Stage Growth Science Transformation Journey
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              How enterprise organizations transition from uncalibrated commercial guesswork into deterministic, high-compounding revenue engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 01</span>
              <h3 className="text-base font-bold text-slate-900">Diagnosis & Physics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deconstruct parametric revenue equations, audit cohort survival curves, and quantify the true cost to serve across all customer segments.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Pillars: 01, 04</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 02</span>
              <h3 className="text-base font-bold text-slate-900">Intelligence & Sensing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capture live buying intent signals, competitor discount patterns, customer usage inflections, and predictive churn indicators.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Pillars: 02, 03</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 03</span>
              <h3 className="text-base font-bold text-slate-900">Offer Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Package high-converting solution bundles, enforce value-based price realization, and eliminate rogue discounting.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Pillars: 05, 06</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 04</span>
              <h3 className="text-base font-bold text-slate-900">Execution Velocity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deploy AI sales engines, multi-threaded committee mapping, and trigger-driven growth workflows to compress sales cycles.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Pillars: 07, 08</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 05</span>
              <h3 className="text-base font-bold text-slate-900">Executive Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unify real-time telemetry, automated leakage alarms, and stochastic board scenario models into a single executive command HUD.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Pillars: 09</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: BUSINESS CHALLENGE SELECTOR & DIAGNOSTIC ENTRY POINT ── */}
      <section id="diagnostic" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest mb-2">
              Executive Diagnostic Navigator
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Where Is Your Commercial Model Breaking Down?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Select your primary commercial symptom to discover the underlying mathematical failure point and inspect the recommended growth capability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Challenge Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {diagnosticChallenges.map((ch) => {
                const Icon = ch.icon;
                const isSelected = selectedChallenge === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChallenge(ch.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                      <span className="text-xs sm:text-sm font-bold">{ch.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Result Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  Identified Friction Profile
                </span>
                <span className="text-xs font-mono text-slate-400">Diagnostic Analysis</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {activeChallengeData.label}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeChallengeData.symptom}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold block uppercase">
                  Recommended Capability Solution:
                </span>
                <div className="text-base font-bold text-white">
                  {activeChallengeData.recommendedPage}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deploys targeted empirical models and systematic governance to eliminate this specific commercial bottleneck.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to={activeChallengeData.recommendedPath}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs inline-flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30"
                >
                  <span>Inspect {activeChallengeData.recommendedPage}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: ALL 9 CAPABILITY CARDS (WITH CLICKABLE SUBMENU ANCHORS) ── */}
      <section id="capabilities" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
              Full Suite Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Nine Core Growth Science Capabilities
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Each capability contains exactly 8 dedicated sub-submenu sections (72 total), empirical evidence requirements, and mathematical KPI scorecards. Click any capability or submenu to navigate directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityList.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.slug}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                        Pillar {cap.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {cap.title}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">{cap.headline}</div>
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                        {cap.desc}
                      </p>
                    </div>

                    {/* Sub-Submenu Sections Preview with Direct Hash Links */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">
                        Submenu Sections ({cap.submenus.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.submenus.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={`${cap.path}#${sub.anchor}`}
                            className="px-2 py-0.5 rounded-md bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-[11px] text-slate-700 hover:text-blue-600 transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{cap.kpiLabel}</div>
                      <div className="text-sm font-extrabold text-slate-900 font-mono">{cap.kpi}</div>
                    </div>

                    <Link
                      to={cap.path}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Pillar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: CONVERSION & INTAKE FORM ── */}
      <section id="consultation" className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>EXECUTIVE DIAGNOSTIC ENGAGEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
                Lock Your Growth Baselines
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                Request a confidential diagnostic brief on your commercial operations. Our revenue architects will evaluate your sales telemetry, identify margin leakage, and model your deterministic expansion path.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>36-month empirical transaction & conversion rate audit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Granular unit economics, cost-to-serve, and margin stack deconstruction</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Stochastic board forecast scenario calibration with confidence intervals</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-blue-400 font-bold block mb-1">Confidentiality Guarantee:</span>
                Enterprise commercial data is safeguarded under mutual non-disclosure and SOC2 Type II compliance standards.
              </div>
            </div>

            {/* Live Integrated Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 border-b border-slate-800 pb-4">
                  <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Executive Intake Brief
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Initialize Growth Science Assessment
                  </h3>
                </div>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default GrowthScienceHub;
