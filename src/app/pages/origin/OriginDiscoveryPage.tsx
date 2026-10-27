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
  Users,
  Activity,
  Layers,
  Search,
  Sparkles,
  Lock,
  ChevronRight,
  RefreshCw,
  Gauge
} from 'lucide-react';
import OriginStickySubNav from './OriginStickySubNav';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function OriginDiscoveryPage() {
  useEffect(() => {
    document.title = 'Revenue Discovery Framework — The 8 Discovery Nodes | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const subNavItems = [
    { id: 'micro-market', label: '1.1 Micro-Market', badge: 'Node 1.1' },
    { id: 'demand', label: '1.2 Demand', badge: 'Node 1.2' },
    { id: 'channel', label: '1.3 Channel', badge: 'Node 1.3' },
    { id: 'willingness-to-pay', label: '1.4 Willingness-to-Pay', badge: 'Node 1.4' },
    { id: 'propensity', label: '1.5 Customer Propensity', badge: 'Node 1.5' },
    { id: 'usage-to-revenue', label: '1.6 Usage-to-Revenue', badge: 'Node 1.6' },
    { id: 'competitor', label: '1.7 Competitor', badge: 'Node 1.7' },
    { id: 'competitive-ecosystem', label: '1.8 Competitive Ecosystem', badge: 'Node 1.8' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* SECTION 1: ORIGIN 01 HERO */}
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
              <span>Revenue Discovery Framework</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              Where the money is, what buyers will pay, who is ready to buy, and who you're fighting for it.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Eight discovery nodes that map the complete revenue landscape — from micro-segment margin to competitive ecosystem structure. Every node measured. Every target locked. Every outcome tracked.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Book a Discovery Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#intake"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Talk to a Principal Architect</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB NAVIGATION */}
      <OriginStickySubNav
        currentPageTitle="Revenue Discovery"
        originNumber=""
        items={subNavItems}
      />

      {/* =========================================================================
          NODE 1.1 — MICRO-MARKET DISCOVERY
      ========================================================================= */}
      <section id="micro-market" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.1
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Segment Margin & Defensibility
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Which micro-segment carries the margin — and can we defend it?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Dissecting aggregate total addressable market models into defensible, unit-economic micro-segments with verified margin density.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* SPICED BREAKDOWN */}
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">You size markets top-down.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">TAM hides where contribution margin concentrates.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">You invest in big-looking segments that lose money.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">The board asks why growth stalls while the market grows.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Dissect TAM into unit-economic micro-segments and pick the one you can own.</p>
                </div>
              </div>
            </div>

            {/* THE SHARP OFFERING & DELIVERABLES */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Micro-Market Discovery Dossier</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Rigorous empirical dissection of your category into unit-economic cells with verified margin and competitive defensibility.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Profit pool map by micro-segment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Defensibility scorecard against the competitive field</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Entry/exit economics per segment</span>
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
                  <li>• Segment economics reviewed quarterly</li>
                  <li>• Resource allocation re-weighted to the owned segment</li>
                  <li>• Whitespace re-scanned annually for drift</li>
                </ul>
              </div>
            </div>
          </div>

          {/* METRICS & KPIS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-blue-600 mb-1">100% Dissected</div>
              <p className="text-xs text-slate-600">TAM dissected into granular unit-economic micro-segments.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-blue-600 mb-1">1 Target Locked</div>
              <p className="text-xs text-slate-600">One named target segment with proven margin economics.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-blue-600 mb-1">Defensibility Score</div>
              <p className="text-xs text-slate-600">Defensibility scored against top 5 market rivals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 1.2 — DEMAND DISCOVERY
      ========================================================================= */}
      <section id="demand" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.2
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Demand Chain & Conversion Telemetry
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Where does the demand chain leak — and how do we fix it?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Auditing the complete generate → capture → convert continuum with telemetry-driven velocity instrumentation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Disconnected demand channels.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Deals stall between discovery and proposal while in-market buyers go unseen.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">You pay to generate demand you can't capture or convert.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">Another quarter-end forecast miss.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Rebuild generate → capture → convert as one telemetry-driven chain.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Demand Chain Diagnostic & Rebuild</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Pinpointing stage-by-stage drop-off and wiring predictive velocity telemetry across the sales lifecycle.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Leak quantified at every stage joint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Weakest joint rebuilt first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Velocity telemetry installed</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Velocity Command Center live from week 3</li>
                  <li>• Stall alerts at defined thresholds</li>
                  <li>• Forecast vs. actual published monthly</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-blue-600 mb-1">Week 2</div>
              <p className="text-xs text-slate-600">Every stage conversion measured across the full funnel.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-blue-600 mb-1">−50% Stall Rate</div>
              <p className="text-xs text-slate-600">Stall rate visible in real time, cut 50% in 2 quarters.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-blue-600 mb-1">−25–40%</div>
              <p className="text-xs text-slate-600">Cycle time reduction from discovery to contract close.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-blue-600 mb-1">±10% Accuracy</div>
              <p className="text-xs text-slate-600">Quarterly forecast accuracy within ±10% vs actuals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 1.3 — CHANNEL DISCOVERY
      ========================================================================= */}
      <section id="channel" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.3
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Distribution & Concentration Risk
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              How concentrated is our reach — and where is the second engine?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Evaluating channel dependency, platform vulnerability, and engineering an owned second revenue pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">60%+ of revenue through one partner/platform.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Margins hostage to an algorithm you don't control.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">One policy change erases your quarter — you rent, not own.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">The platform changes terms — it always does.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Rebalance direct vs. indirect before the shock.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Channel & Distribution Architecture</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Model channel margins, rebalance distributor incentives, and architect an owned direct pipeline.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Concentration risk map</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Incentive rebalancing model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Owned demand build-out blueprint</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Concentration re-scored quarterly</li>
                  <li>• Owned assets grown against a locked target</li>
                  <li>• Channel shift triggers predefined responses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-blue-600 mb-1">100% Scored</div>
              <p className="text-xs text-slate-600">Concentration scored across every distribution partner.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-blue-600 mb-1">&lt; 40% Share</div>
              <p className="text-xs text-slate-600">Single-channel revenue reduced below 40% within 12 months.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-blue-600 mb-1">Owned Pipeline</div>
              <p className="text-xs text-slate-600">Autonomous owned-channel pipeline built and tracked live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 1.4 — WILLINGNESS-TO-PAY DISCOVERY
      ========================================================================= */}
      <section id="willingness-to-pay" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50 relative"><span id="wtp" className="scroll-mt-28 absolute -top-28 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.4
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Pricing Elasticity & Discount Governance
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              What will buyers actually pay — and where are we underpriced?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Replacing intuitive discounting with buyer-evidenced price points by segment, tier, and mission-critical use case.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Pricing set years ago by instinct.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Nobody has measured real willingness-to-pay, so discounts substitute for proof.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">A 5-point pricing miss on $20M revenue is a silent $1M annual leak.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">Renewal season or a competitor undercut arrives with no data behind your price.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Replace pricing instinct with buyer-evidenced price points by segment, tier, and use case.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Willingness-to-Pay Evidence Engine</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Conjoint analysis, price-laddering interviews, packaging tiers, and hard CRM discount floors.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Price-laddering interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Van Westendorp / conjoint analysis per segment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Packaging tiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Discount floors enforced in CRM</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Price floors locked in CRM</li>
                  <li>• Discount exceptions auto-generate ROI counter-cases</li>
                  <li>• Realization tracked monthly vs. baseline</li>
                  <li>• Willingness re-measured at every packaging change</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-blue-600 mb-1">100% Quantified</div>
              <p className="text-xs text-slate-600">Quantified price points by segment and tier.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-blue-600 mb-1">−30–50%</div>
              <p className="text-xs text-slate-600">Discount rate reduction achieved in 2 quarters.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-blue-600 mb-1">≥ 92% Realization</div>
              <p className="text-xs text-slate-600">Price realization percentage against list price.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-blue-600 mb-1">+10–20%</div>
              <p className="text-xs text-slate-600">Expansion and upsell win rate lift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 1.5 — CUSTOMER PROPENSITY DISCOVERY
      ========================================================================= */}
      <section id="propensity" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.5
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Live Intent & Dynamic Priority Routing
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Who is in-market right now — and are we calling them first?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Eliminating static firmographic cold calling with nightly algorithmic scoring of live buyer intent across the full TAM.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Reps work static firmographic lists.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Static lists can't see live intent.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Your most expensive resource chases the accounts least likely to buy.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">A high-value account goes cold after 90 days in-market — and you never knew they were warm.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Score the full TAM nightly on live intent and route effort where propensity is highest.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Propensity-Ranked Account Engine</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Nightly rescoring based on dark-funnel intent, hiring shifts, technographics, and engagement mesh.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Nightly rescoring on intent, engagement, hiring, and technographic signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Message-matched plays per account</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Top-decile list refreshed weekly in rep dashboards</li>
                  <li>• Plays auto-suggested per account</li>
                  <li>• Scored vs. unscored conversion reported monthly</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-blue-600 mb-1">100% TAM</div>
              <p className="text-xs text-slate-600">100% of TAM scored nightly across multiple signal sources.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-blue-600 mb-1">2–3% Lift</div>
              <p className="text-xs text-slate-600">Outbound meeting conversion baseline lift across full list.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-blue-600 mb-1">8–15% Yield</div>
              <p className="text-xs text-slate-600">Outbound conversion on top-decile accounts.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-blue-600 mb-1">&lt; 20% Rep Time</div>
              <p className="text-xs text-slate-600">Rep time spent on low-propensity accounts capped under 20%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 1.6 — USAGE-TO-REVENUE DISCOVERY
      ========================================================================= */}
      <section id="usage-to-revenue" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50 relative"><span id="usage" className="scroll-mt-28 absolute -top-28 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.6
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Behavioral Tipping Points & Expansion Triggers
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Which usage behaviors predict paid conversion — and are they wired to triggers?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Pinpointing the exact telemetry milestones that precede upgrades and wiring them to automated, contextual expansion workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Strong engagement metrics.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Engagement isn't converting to upgrades or expansion.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Power users extract full value at zero incremental revenue while the highest-margin revenue sits unharvested.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">An enterprise consolidation forces your champion to justify seat counts you can't evidence.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Identify the behavioral tipping points that precede paid conversion and wire them to automated upgrade triggers.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Usage-to-Revenue Trigger Architecture</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Extract product milestone telemetry, re-align packaging tiers, and install automated upgrade plays.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Conversion-predictive milestones mined from telemetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Packaging redesigned around them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Automated expansion plays installed</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Threshold crossings fire contextual upgrade plays from week 4</li>
                  <li>• Conversion by trigger tracked weekly</li>
                  <li>• Thresholds re-optimized quarterly</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-blue-600 mb-1">Top 5 Milestones</div>
              <p className="text-xs text-slate-600">Top 5 conversion-predictive behavioral milestones identified.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-blue-600 mb-1">+30–50%</div>
              <p className="text-xs text-slate-600">Free to paid conversion increase in 2 quarters.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-blue-600 mb-1">+10–25%</div>
              <p className="text-xs text-slate-600">Expansion revenue lift from telemetry-triggered plays.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-blue-600 mb-1">&lt; 14 Days</div>
              <p className="text-xs text-slate-600">Trigger-to-upgrade cycle time, fully automated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 1.7 — COMPETITOR DISCOVERY
      ========================================================================= */}
      <section id="competitor" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.7
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Deal-by-Deal Dissection & Counter-Positioning
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              What exactly are we losing to — deal by deal, feature by feature, price point by price point?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Dissecting material rivals into verified, deal-usable counter-strategies, live competitive intelligence feeds, and automated CRM battlecard attachments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Your competitive picture lives in a slide someone made two years ago — logos, quadrant charts, and adjectives like "enterprise-grade."</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Win/loss data is anecdotal, competitor pricing is rumored, positioning is reactive. Your reps improvise responses in live deals with no verified intelligence behind them.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">You lose deals you should win — not because the product is weaker, but because the buyer heard a sharper story from a competitor and you never countered it. Positioning drift compounds silently: they move upmarket, you don't notice for three quarters.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">A competitor launches a pricing change or feature that directly targets your core segment — and your first warning is a lost deal in the CRM notes.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Run Competitor Discovery to dissect each material rival into verified, deal-usable intelligence: their economics, motion, and the exact counter-strategy for each.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Competitor Dissection & Counter-Positioning System</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  We tear down each material competitor — pricing architecture, packaging, sales motion, win/loss patterns, messaging, roadmap signals — and return a counter-positioning playbook your reps can deploy in live deals, plus a live intelligence feed that catches their moves within days, not quarters.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Competitor teardown dossiers (pricing, packaging, motion, messaging)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Win/loss pattern analysis with verbatims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Counter-positioning battlecards per rival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Live competitive intelligence feed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Quarterly displacement playbook</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Win/loss interviews run continuously</li>
                  <li>• Battlecards updated within 10 days of any detected move</li>
                  <li>• Competitive deals flagged and counter-play auto-attached in CRM</li>
                  <li>• Win rate vs. named rivals reported monthly against locked baseline</li>
                </ul>
              </div>
            </div>
          </div>

          {/* KPI TABLE */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-900/70">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-xs font-mono uppercase text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-6">Metric</th>
                  <th className="py-3.5 px-6">Baseline</th>
                  <th className="py-3.5 px-6">Realization Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans text-xs sm:text-sm">
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Competitors analyzed at deal-usable depth</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">0 / anecdotal</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">Top 5 rivals fully dissected</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Win rate vs. named competitors</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">Unknown</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">+15–25% vs. baseline in 2 quarters</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Competitive deals with counter-play attached</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">None</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">100% of flagged deals</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Time to detect competitor moves</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">1–2 quarters</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">&lt; 10 days via live feed</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Rep confidence in competitive conversations</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">Unmeasured</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">Certified via battlecard drills, 90%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 1.8 — COMPETITIVE ECOSYSTEM DISCOVERY
      ========================================================================= */}
      <section id="competitive-ecosystem" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50 relative"><span id="ecosystem" className="scroll-mt-28 absolute -top-28 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 1.8
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Category Architecture & Structural Positions
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Who is building the field we compete on — and are we inside their structure or outside it?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Mapping alliances, platform embeddings, app marketplaces, and capital flows to establish counter-gravity before category network effects lock.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">You track competitors as individual companies. But modern markets are fought between ecosystems — platforms, partner networks, app marketplaces, and alliances — and you track none of it.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">No map of the competitive ecosystem: who partners with whom, which platforms your rivals are embedded in, whose marketplace they rank on, which acquisitions closed gaps in their stack. You're playing chess while the real game is Go.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Rivals win not on product but on structure — distribution locked through partnerships, default status on platforms, ecosystem gravity you can't match account-by-account. By the time you see it in lost deals, the network effects have already hardened.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">A rival's platform partnership or acquisition re-draws the category map — and you find out from the press release.</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-blue-200">
                  <span className="text-xs font-mono text-blue-700 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-cyan-100 font-medium">Map the competitive ecosystem, identify the structural positions your rivals hold, and choose where to embed, where to counter-position, and where to build your own gravity.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-blue-200 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Competitive Ecosystem Mapping & Positioning Strategy</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  We map the full competitive ecosystem — alliances, platform embeddings, marketplaces, funding and acquisition flows — identify the structural positions your rivals occupy, and design your counter: where to embed, where to partner against them, and where to build gravitational mass of your own.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Full ecosystem map (players, alliances, platform embeddings, acquisition history)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Structural position scoring per rival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Counter-positioning strategy: embed / partner / build</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Partnership target shortlist with entry economics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Quarterly ecosystem drift report</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Ecosystem map refreshed quarterly</li>
                  <li>• Rival moves trigger pre-mapped counter-options</li>
                  <li>• Partnership pipeline managed against attributed revenue</li>
                  <li>• Ecosystem-driven revenue tracked as its own line in revenue review</li>
                </ul>
              </div>
            </div>
          </div>

          {/* KPI TABLE */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-900/70">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-xs font-mono uppercase text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-6">Metric</th>
                  <th className="py-3.5 px-6">Baseline</th>
                  <th className="py-3.5 px-6">Realization Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans text-xs sm:text-sm">
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Ecosystem map coverage</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">None</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">100% of category players, partners, platforms mapped</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Rival structural positions identified</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">Unknown</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">All material positions scored and ranked</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Ecosystem-driven revenue (yours)</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">$0 / unmeasured</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">Measured, with a locked growth target</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Strategic partnerships closed from map</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">0</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">2–4 in 12 months, each attributed</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-white">Response time to ecosystem shifts</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">Quarters</td>
                  <td className="py-3.5 px-6 text-blue-700 font-mono font-bold">&lt; 30 days with a pre-mapped counter-option</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 10: ORIGIN 01 CTA */}
      <section id="intake" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>REVENUE DISCOVERY ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Run the Complete Revenue Discovery Diagnostic?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Engage directly with our principal revenue architects. We audit your 8 discovery nodes, freeze baselines, and lock verifiable realization targets into your SOW.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Revenue Discovery Diagnostic"
            defaultPriority="Revenue Discovery"
          />
        </div>
      </section>
    </div>
  );
}
