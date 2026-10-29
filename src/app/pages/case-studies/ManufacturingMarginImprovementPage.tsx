import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, RefreshCw,
  Percent, PieChart, Sliders, Factory, ArrowDownRight, Layers2
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function ManufacturingMarginImprovementPage() {
  const [selectedWaterfallStep, setSelectedWaterfallStep] = useState<number>(0);

  useEffect(() => {
    document.title = '+15 Points Gross Margin Recovery: Manufacturing Case Study | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const waterfallSteps = [
    {
      title: 'Historical Baseline Margin',
      value: '28.4%',
      impact: 'Base',
      type: 'neutral',
      desc: 'Blended gross margin across 8,000+ engineered manufacturing SKUs before intervention.'
    },
    {
      title: 'Cost Inflation Pass-Through',
      value: '+4.8%',
      impact: 'Gain',
      type: 'positive',
      desc: 'Automated indexation of raw materials (steel, resin, microcontrollers) into quoting CPQ.'
    },
    {
      title: 'Discount Governance & Floor Engine',
      value: '+5.6%',
      impact: 'Gain',
      type: 'positive',
      desc: 'Eliminated unmonitored sales discounting, cutting average discount rate from 24% to 8%.'
    },
    {
      title: 'Tail SKU & Unprofitable Account Rationalization',
      value: '+3.1%',
      impact: 'Gain',
      type: 'positive',
      desc: 'Repriced or terminated the bottom 22% of customer contracts operating at negative margin.'
    },
    {
      title: 'Value-Based Packaging & Service Bundling',
      value: '+2.1%',
      impact: 'Gain',
      type: 'positive',
      desc: 'Integrated lifecycle maintenance SLAs and telemetry services into capital equipment contracts.'
    },
    {
      title: 'Optimized Realized Margin',
      value: '44.0%',
      impact: '+15.6 pts',
      type: 'total',
      desc: 'New sustainable gross margin baseline unlocking $54.6M in recurring annual gross profit.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (MARGIN RECOVERY LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-emerald-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-emerald-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>MANUFACTURING · MARGIN RECOVERY</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              15 Points Gross Margin Recovery:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700">
                Precision Pricing & Profit Pool Discovery
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              How a $350M specialized industrial manufacturer reclaimed $54.6M in gross profit by dismantling rogue discounting, indexing inflation in real time, and rationalizing unprofitable accounts.
            </p>

            {/* Impact Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs mb-10 max-w-4xl mx-auto">
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">+15.6 pts</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Gross Margin Recovery</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 font-heading">$54.6M</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Annual Profit Unlocked</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 font-heading">-66%</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Discount Rate (24% to 8%)</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-heading">44.2%</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Win Rate Maintained</div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#intake-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Request Margin Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#waterfall-model"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                <span>Inspect Margin Waterfall</span>
                <Percent className="w-4 h-4 text-emerald-500" />
              </a>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CLIENT PROFILE & CONTEXT ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
                PHASE 1 // EXECUTIVE SNAPSHOT &amp; BASELINE CONTEXT
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 font-heading">
                Top-Line Growth Masking Dangerous Margin Erosion
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A Tier-1 supplier of engineered industrial fluid systems and hydraulic assemblies scaled revenues to $350M across automotive, aerospace, and energy sectors. However, volatile raw material inflation and sales discounting eroded gross margins from 38% down to 28.4% over 36 months.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span><strong>Scale:</strong> $350M Annual Revenue across 4 global manufacturing hubs</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span><strong>Complexity:</strong> 8,200 active custom SKUs and 640 tier-1 OEM clients</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span><strong>Sales Force:</strong> 45 field sales engineers operating with localized pricing autonomy</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
                    <Percent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Rogue Sales Discounting</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sales engineers had discretionary power to discount bids up to 30% to hit volume quotas, consistently sacrificing profitability for top-line revenue.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Cost Pass-Through Lag</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Raw material index spikes in specialty alloys and freight took up to 7 months to reflect in customer price books, absorbing hundreds of basis points in losses.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Negative-Margin SKUs</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legacy customized parts with complex tooling requirements were sold at negative gross margins because cost accounting failed to allocate real production changeovers.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">No Tiered Governance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Large enterprise buyers demanded volume rebates and extended payment terms while receiving customized R&D support without any contractual price floor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PRE-INTERVENTION MARGIN LEAKAGE DIAGNOSTICS ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-mono font-bold uppercase mb-4">
              Margin Leakage Analysis
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Where $54M+ Leaked Annually
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Comprehensive transaction-level forensics revealed three primary failure modes in the commercial pricing engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">FAILURE MODE 01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Unmonitored Discretionary Discounts</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                83% of all closed proposals included discounts between 15% and 30%. Analysis proved that deals with lower discounts converted at virtually identical win rates (42% vs 41%), demonstrating that discounting was rep habit rather than buyer necessity.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Annual Leakage: $24.8M lost to unneeded concessions
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">FAILURE MODE 02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">The 7-Month Inflation Pass-Through Lag</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Because contracts lacked automated material escalator clauses, the company absorbed three consecutive supplier price hikes in specialized titanium alloys and electrical harnesses before revising standard price catalogs.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Annual Leakage: $16.8M absorbed in unbilled supplier increases
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">FAILURE MODE 03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Subsidizing Negative-Margin OEM Accounts</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                141 of 640 accounts (22%) generated negative contribution margins once specialized engineering change requests, expedited shipping, and quality validation lab hours were accurately allocated.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Annual Leakage: $13.0M in uncaptured operational overhead
              </div>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: STRATEGIC DIAGNOSTICS & PROFIT POOL DISCOVERY ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold uppercase mb-4 border border-emerald-500/30">
                Strategic Discovery
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 font-heading">
                Mapping the Micro-Profit Pools
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                ProfitMachines deployed our proprietary Profit Pool Discovery Engine, evaluating 140,000 historical invoice lines to pinpoint exact willingness-to-pay elasticity curves across every customer cohort and product segment.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-emerald-400 mb-1">SKU Value Quintile Partitioning</div>
                  <div className="text-xs text-slate-300">
                    Divided 8,200 SKUs into 5 elasticity quintiles: mission-critical high-margin, engineered bespoke, competitive catalog, commodity pass-through, and legacy service.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-teal-400 mb-1">Dynamic CPQ Floor Engine</div>
                  <div className="text-xs text-slate-300">
                    Replaced static price lists with an algorithmic CPQ pricing engine factoring real-time bill of materials (BOM), plant utilization, and customer switching cost.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-cyan-400 mb-1">Value-Add Service Monetization</div>
                  <div className="text-xs text-slate-300">
                    Unbundled engineering change requests and warranty extensions from base unit pricing into high-margin recurring lifecycle service contracts.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <div className="text-sm font-mono text-slate-400 uppercase">Profit Pool Archetypes</div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    OPTIMIZED
                  </span>
                </div>
                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Tier 1: Mission-Critical Custom Assemblies</div>
                      <div className="text-slate-400">High IP · Low buyer elasticity · Sole source</div>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold text-sm">54.2% Margin</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Tier 2: Engineered Modification Units</div>
                      <div className="text-slate-400">Moderate IP · Medium elasticity · 3 competitors</div>
                    </div>
                    <span className="font-mono text-teal-400 font-bold text-sm">46.5% Margin</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Tier 3: Standard Catalog Components</div>
                      <div className="text-slate-400">Automated price indexing · Direct indexation</div>
                    </div>
                    <span className="font-mono text-cyan-400 font-bold text-sm">38.0% Margin</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Tier 4: Lifecycle Maintenance SLAs</div>
                      <div className="text-slate-400">Recurring high-margin service attachments</div>
                    </div>
                    <span className="font-mono text-indigo-400 font-bold text-sm">68.0% Margin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SOLUTION ARCHITECTURE ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-mono font-bold uppercase mb-4">
              PHASE 2 // TRANSFORMATION DESIGN &amp; PRICING ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Margin Excellence Operating Engine
            </h2>
            <p className="text-base text-slate-600 mt-4">
              A comprehensive system uniting algorithmic CPQ governance, automated inflation indexation, and executive approval workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Percent className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-1">Module 1</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Algorithmic Deal Floor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replaces discretion with hard margin floors. Any bid below segment targets triggers automated review, eliminating 80% of unauthorized discounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-teal-600 font-bold uppercase mb-1">Module 2</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Real-Time Cost Indexation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connects ERP procurement feeds directly to the quoting engine, updating alloy, freight, and energy surcharges with zero manual lag.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                <Layers2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-cyan-600 font-bold uppercase mb-1">Module 3</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Account Rationalization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated renegotiation playbooks for the bottom 20% of unprofitable customer contracts, delivering either margin alignment or graceful churn.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-1">Module 4</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Gross Profit Compensation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Restructured sales incentives from revenue volume to realized gross margin dollars, aligning rep pocketbooks directly with corporate EBITDA.
              </p>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INTERACTIVE MARGIN WATERFALL VISUALIZATION ── */}
      <section id="waterfall-model" className="py-20 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase shadow-xs mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Interactive Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The 15.6-Point Margin Recovery Waterfall
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Step through the exact levers that expanded gross margins from 28.4% to 44.0%, adding $54.6M to the bottom line.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white">
            {/* Waterfall Steps Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {waterfallSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedWaterfallStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all border ${selectedWaterfallStep === idx
                    ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-lg'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                >
                  <div className="text-[10px] font-mono uppercase mb-1">
                    {idx === 0 ? 'Baseline' : idx === 5 ? 'Result' : `Lever 0${idx}`}
                  </div>
                  <div className={`text-sm sm:text-base font-extrabold font-heading ${step.type === 'positive' ? 'text-emerald-400' : step.type === 'total' ? 'text-teal-300' : 'text-slate-200'
                    }`}>
                    {step.value}
                  </div>
                  <div className="text-[11px] truncate mt-1 text-slate-300">{step.title}</div>
                </button>
              ))}
            </div>

            {/* Selected Step Detail Panel */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {waterfallSteps[selectedWaterfallStep].impact}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Step {selectedWaterfallStep + 1} of 6</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {waterfallSteps[selectedWaterfallStep].title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {waterfallSteps[selectedWaterfallStep].desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Impact on Blended Margin</div>
                      <div className="text-xl font-bold text-emerald-400 font-heading mt-1">
                        {waterfallSteps[selectedWaterfallStep].value}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Annualized EBIT Lift</div>
                      <div className="text-xl font-bold text-teal-400 font-heading mt-1">
                        {selectedWaterfallStep === 0 ? '$99.4M Base' : selectedWaterfallStep === 5 ? '$154.0M Total' : '+$10.9M to +$19.6M'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-4">Cumulative Margin Expansion</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-400">Gross Margin Baseline (28.4%)</span>
                        <span className="text-slate-300">28.4%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800">
                        <div className="h-full bg-slate-500 rounded-full" style={{ width: '28.4%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-400">Target After Step {selectedWaterfallStep + 1}</span>
                        <span className="text-emerald-400 font-bold">
                          {selectedWaterfallStep === 0 ? '28.4%' : selectedWaterfallStep === 1 ? '33.2%' : selectedWaterfallStep === 2 ? '38.8%' : selectedWaterfallStep === 3 ? '41.9%' : selectedWaterfallStep === 4 ? '44.0%' : '44.0%'}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                          style={{
                            width: selectedWaterfallStep === 0 ? '28.4%' : selectedWaterfallStep === 1 ? '33.2%' : selectedWaterfallStep === 2 ? '38.8%' : selectedWaterfallStep === 3 ? '41.9%' : '44.0%'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                    Verified through post-close financial consolidation across all 4 operational manufacturing units.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PHASED IMPLEMENTATION TIMELINE ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
              Execution Cadence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              12-Week Margin Transformation Roadmap
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Structured rollout maintaining customer retention while enforcing margin discipline from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-2">Weeks 1 – 3</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Forensics & Leakage Audit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Analysis of 140,000 transaction records, product quintile categorizations, and identification of 141 negative-margin customer contracts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-teal-600 uppercase mb-2">Weeks 4 – 6</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">CPQ Hard Floor Implementation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deployment of algorithmic pricing floors in quoting systems, limiting rep discount autonomy and linking direct ERP procurement feeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-cyan-600 uppercase mb-2">Weeks 7 – 9</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Contract Renegotiations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Execution of structured renegotiation playbooks with enterprise accounts, implementing indexation clauses and SLA unbundling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase mb-2">Weeks 10 – 12</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Comp Realignment & Control</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transition of 45 sales engineers to gross-profit-based commissions, supported by executive dashboard telemetry.
              </p>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: MEASURABLE OUTCOMES & ROI DASHBOARD ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
              Verified ROI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Financial Performance Validated by Audit
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Results measured across 12 consecutive months following full commercial deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600 font-heading mb-1">+15.6 pts</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Gross Margin Recovery</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Blended company gross margin expanded from 28.4% to 44.0%, sustained across all manufacturing locations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-teal-600 font-heading">$54.6M</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Incremental Annual Gross Profit</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct gross profit addition dropped straight to operating income, driving a 3.1x expansion in EBITDA.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-cyan-600 font-heading">8.2%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Average Discount Rate</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Curtailed from 24.1% average discount down to 8.2%, with 94% of deals closing at or above list floor targets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-indigo-600 font-heading">44.2%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Proposal Win Rate</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Win rates improved from 41.5% to 44.2% despite higher pricing, driven by value-based proposal engineering.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-amber-600 font-heading">0 Days</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Inflation Pass-Through Lag</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supplier price hikes now pass through dynamically via indexation clauses, eliminating $16M+ in annual price absorption.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-rose-600 font-heading">98.4%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Target Account Retention</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tier-1 OEM accounts accepted price adjustments with near-zero attrition due to transparent indexation metrics.
              </p>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-profit-pool.png"
              alt="Profit Pool Discovery &amp; Margin Optimization Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Margin Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Algorithmic Willingness-to-Pay Models, Real-Time Procurement Indexation, and Deal Guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: BEFORE VS AFTER COMPARISON ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase mb-4">
              Structural Transformation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Commercial Pricing Before vs After
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-500">
                  <th className="p-4 sm:p-5">Commercial Metric</th>
                  <th className="p-4 sm:p-5 text-rose-600">Prior State (Baseline)</th>
                  <th className="p-4 sm:p-5 text-emerald-600">ProfitMachines Margin Operating Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Gross Margin %</td>
                  <td className="p-4 sm:p-5 text-slate-600">28.4% (declining 200 bps annually)</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">44.0% (+15.6 percentage points)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Sales Discounting</td>
                  <td className="p-4 sm:p-5 text-slate-600">24.1% average discount, no enforced floors</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">8.2% average discount, algorithmic CPQ floors</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Inflation Response</td>
                  <td className="p-4 sm:p-5 text-slate-600">7-month lag in price catalog updates</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Real-time contractual indexing on raw materials</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Negative-Margin SKUs</td>
                  <td className="p-4 sm:p-5 text-slate-600">22% of SKUs sold at negative contribution</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">0% negative margin SKUs (repriced or retired)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Sales Incentive Plan</td>
                  <td className="p-4 sm:p-5 text-slate-600">Top-line revenue commission only</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Realized gross-margin dollar compensation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE TESTIMONIAL ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase mb-8">
            Executive Perspective
          </div>
          <blockquote className="text-xl sm:text-2xl font-serif text-slate-900 italic leading-relaxed mb-8">
            &ldquo;Our sales leadership was terrified that tightening discount policies would crater deal volume. ProfitMachines proved through forensic data that our buyers were purchasing our specialized engineering capability, not cheap pricing. Reclaiming 15 points of gross margin without sacrificing win rate transformed our corporate valuation completely.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="font-bold text-slate-900 text-base">Karl Heinemann</div>
            <div className="text-xs text-slate-500 font-mono mt-1">Chief Financial Officer · Engineered Industrial Fluid Systems ($350M Revenue)</div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CROSS-OFFERINGS & RELATED CASE STUDIES ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-2">PHASE 4 // REPLICATION PLAYBOOK &amp; CONNECTED ARCHITECTURE</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Related Industrial Transformations
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 mt-4 md:mt-0"
            >
              <span>View All 8 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/case-studies/global-manufacturing-expansion"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">MANUFACTURING · EXPANSION</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                $400M Global Manufacturing Scale
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Scaling international distributor networks and harmonizing multi-region pricing.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/case-studies/financial-services-ai-transformation"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">PRIVATE EQUITY · VALUE CREATION</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                PE Portfolio AI Transformation
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Deploying cross-portfolio pricing and EBITDA acceleration across middle-market assets.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/case-studies/saas-revenue-operations"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">OPERATIONS · EFFICIENCY</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                Autonomous Revenue Operations
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reclaiming rep selling capacity and eliminating operational transaction friction.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: EXECUTIVE CONFIDENTIAL INTAKE FORM ── */}
      <section id="intake-form" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase shadow-xs mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Confidential Margin Forensic</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Assess Your Company&apos;s Margin Recovery Potential
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Request a confidential profit pool analysis to identify discounting leakage, inflation pass-through lag, and uncaptured gross profit.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
            <CaseStudyIntakeForm studyTitle="Manufacturing Margin Improvement" />
          </div>
        </div>
      </section>
    </div>
  );
}
