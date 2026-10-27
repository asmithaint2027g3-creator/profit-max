import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  DollarSign,
  Layers,
  Box,
  Cpu,
  BarChart3,
  Sparkles,
  Lock,
  ChevronRight,
  RefreshCw,
  Scale
} from 'lucide-react';
import OriginStickySubNav from './OriginStickySubNav';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function OriginSupplyChainPage() {
  useEffect(() => {
    document.title = 'Supply Chain Discovery — Offer Architecture & Cost-to-Serve | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const subNavItems = [
    { id: 'offer-architecture', label: '2.1 Offer Architecture', badge: 'Node 2.1' },
    { id: 'cost-to-serve', label: '2.2 Cost-to-Serve', badge: 'Node 2.2' },
    { id: 'intake', label: 'Diagnostic Intake' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>Supply Chain Discovery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              What you sell, at what margin, and what it truly costs to serve.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Two vital supply-side discovery nodes that align your offer structure with empirical buyer value and expose hidden cost-to-serve leaks before scaling burns out delivery capacity.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Book Supply Chain Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#intake"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Talk to a Principal Architect</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB NAVIGATION */}
      <OriginStickySubNav
        currentPageTitle="Supply Chain Discovery"
        originNumber=""
        items={subNavItems}
      />

      {/* =========================================================================
          NODE 2.1 — OFFER & REVENUE ARCHITECTURE
      ========================================================================= */}
      <section id="offer-architecture" className="py-20 sm:py-24 border-b border-slate-200 relative"><span id="offer" className="scroll-mt-28 absolute -top-28 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 2.1
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Monetization Architecture & Packaging
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Is our offer engineered for willingness-to-pay — or does it leak margin through over-bundling?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Auditing feature-value distribution, unbundling enterprise capabilities, and establishing a 3-tier value architecture that captures maximum customer surplus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* SPICED BREAKDOWN */}
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Your offer grew organically over years. Every customer request became a feature, and every feature got rolled into the core tier.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">High-value enterprise capabilities are given away free in standard packages. Margin leaks silently while tier differentiation flattens.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">You do 2x the delivery work for 1x the revenue. Upsells stall because customers already have everything they need.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">Revenue growth demands headcount in direct proportion to new logos — margins compress with every win.</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <span className="text-xs font-mono text-emerald-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-emerald-100 font-medium">Run Offer & Revenue Architecture Discovery to unbundle, re-tier, and re-price based on empirical willingness-to-pay.</p>
                </div>
              </div>
            </div>

            {/* THE SHARP OFFERING & DELIVERABLES */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Offer Architecture & Monetization Blueprint</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Feature-value attribution analysis, unbundling roadmap, tiered packaging re-architecture, and grandfathering governance.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Feature-value matrix mapped to buyer segments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>3-tier packaging structure with clear fence metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Grandfathering and account migration playbooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Sales enablement talk tracks and objection matrix</span>
                  </li>
                </ul>
              </div>

              {/* REALIZATION LOOP */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Packaging tiers implemented within CRM quoting tools</li>
                  <li>• Tier adoption rates monitored in monthly reviews</li>
                  <li>• Feature utilization mapped to renewal propensity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* METRICS & KPIS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">+20–35%</div>
              <p className="text-xs text-slate-600">Average selling price lift across new enterprise logos.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">100% Unbundled</div>
              <p className="text-xs text-slate-600">High-cost premium modules isolated into standalone add-ons.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">+40% Up-tiering</div>
              <p className="text-xs text-slate-600">Net upgrade migration rate achieved over 12 months.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">&gt; 80% Gross Margin</div>
              <p className="text-xs text-slate-600">Target gross margin locked on core recurring revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 2.2 — SUPPLY, CAPACITY & COST-TO-SERVE
      ========================================================================= */}
      <section id="cost-to-serve" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 2.2
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Unit Economics & Capacity Optimization
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Which revenue do we scale — and which revenue destroys us?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Pinpointing negative-contribution accounts, allocating true delivery costs per customer, and installing strict service-level entitlement gates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Revenue is treated as uniform — a dollar is celebrated as a dollar on the top line regardless of fulfillment strain.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Nobody knows true cost-to-serve by account or SKU. Unprofitable accounts consume disproportionate delivery capacity while high-margin clients are starved.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Scaling top-line revenue accelerates margin destruction, increases churn among best customers, and burns out operational teams.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">Operating margins plummet despite record bookings quarters.</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <span className="text-xs font-mono text-emerald-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-emerald-100 font-medium">Run Supply, Capacity & Cost-to-Serve Discovery to identify negative-contribution accounts and enforce strict service entitlements.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Cost-to-Serve Audit & Capacity Optimization Engine</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Activity-based costing analysis, customer contribution margin P&L, service-level entitlement matrices, and unprofitable account remediation playbooks.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Customer and SKU-level contribution margin P&L</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Service-level entitlement matrix and support caps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Negative-margin account remediation playbooks (Reprice / Scope / Exit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Capacity bottleneck telemetry dashboard</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Monthly customer margin contribution audit</li>
                  <li>• Automated alerts when support hours breach entitlement thresholds</li>
                  <li>• Renewal pricing conditioned on historical cost-to-serve</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">100% Audited</div>
              <p className="text-xs text-slate-600">All customer accounts scored by net contribution margin.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">0% Negative</div>
              <p className="text-xs text-slate-600">Negative contribution accounts eliminated or repriced within 2 quarters.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">+6–12 Pts</div>
              <p className="text-xs text-slate-600">Blended EBITDA margin expansion achieved.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-emerald-400 mb-1">+35% Headroom</div>
              <p className="text-xs text-slate-600">Delivery and engineering fulfillment capacity freed up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section id="intake" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>SUPPLY CHAIN INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Audit Offer Architecture & Cost-to-Serve?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Stop giving away margin. Connect with our principal revenue architects to dissect your product packaging and uncap fulfillment margins.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Supply Chain Discovery Diagnostic"
            defaultPriority="Supply Chain Discovery"
          />
        </div>
      </section>
    </div>
  );
}
