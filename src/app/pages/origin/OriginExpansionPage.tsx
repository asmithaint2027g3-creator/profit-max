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
  Rocket,
  Globe,
  GitBranch,
  Layers,
  Sparkles,
  Lock,
  ChevronRight,
  RefreshCw,
  Gauge
} from 'lucide-react';
import OriginStickySubNav from './OriginStickySubNav';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function OriginExpansionPage() {
  useEffect(() => {
    document.title = 'Expansion Discovery — Offerings, Markets, Channels & Launches | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const subNavItems = [
    { id: 'new-offering', label: '4.1 New Offering', badge: 'Node 4.1' },
    { id: 'new-market', label: '4.2 New Market', badge: 'Node 4.2' },
    { id: 'new-channel', label: '4.3 New Channel', badge: 'Node 4.3' },
    { id: 'new-launch', label: '4.4 New Launch', badge: 'Node 4.4' },
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
              <span>Expansion Discovery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              New offerings, new markets, new channels, new launches — proven before you commit.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Four empirical expansion nodes that eliminate capital misallocation. Validate demand, rank real profit pools, eliminate channel conflict, and turn launch day into a controlled revenue operation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Book Expansion Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#intake"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Talk to a Principal Architect</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB NAVIGATION */}
      <OriginStickySubNav
        currentPageTitle="Expansion Discovery"
        originNumber=""
        items={subNavItems}
      />

      {/* =========================================================================
          NODE 4.1 — NEW OFFERING DISCOVERY
      ========================================================================= */}
      <section id="new-offering" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 4.1
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Pre-Commitment Product Validation
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              What do we build next — proven before we commit engineering capital?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Conducting pre-build painted-door tests, LOI commitment campaigns, and empirical willingness-to-pay validation before single lines of production code are written.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* SPICED BREAKDOWN */}
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Product and R&D maintain a backlog of dozens of feature requests and ambitious new offering concepts.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Engineering builds for 6 to 12 months in a vacuum before testing commercial willingness-to-pay in live market conditions.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Millions in engineering capital is sunk into offerings that fail to achieve commercial velocity, while competitors capture adjacent whitespace.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">A high-profile product launch fails to hit 10% of year-1 bookings target, forcing painful roadmaps resets.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                  <span className="text-xs font-mono text-amber-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-amber-100 font-medium">Run New Offering Discovery to mandate evidence gates: pre-commitments, non-binding LOIs, and demand telemetry before code lock.</p>
                </div>
              </div>
            </div>

            {/* THE SHARP OFFERING & DELIVERABLES */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-amber-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Pre-Commitment Validation Engine</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Synthesizing customer signal, simulated mock-tier campaigns, pre-orders, and buyer willingness-to-pay evidence into a definitive go/no-go investment gate.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Live demand test campaigns with measurable conversion telemetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Conjoint willingness-to-pay elasticity curve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Secured letters of intent (LOIs) and pre-order pipeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Engineering investment decision dossier with target unit economics</span>
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
                  <li>• R&D gate reviews require pre-commitment threshold met</li>
                  <li>• Conversion of early LOIs tracked continuously during beta</li>
                  <li>• Post-GA revenue trajectory monitored against locked validation target</li>
                </ul>
              </div>
            </div>
          </div>

          {/* METRICS & KPIS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-amber-400 mb-1">≥ 10 Paid LOIs</div>
              <p className="text-xs text-slate-600">Signed enterprise customer pre-commitments before engineering lock.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-amber-400 mb-1">&lt; 4 Weeks</div>
              <p className="text-xs text-slate-600">Rapid market validation sprint from hypothesis to quantitative decision.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-amber-400 mb-1">85% Conversion</div>
              <p className="text-xs text-slate-600">Conversion rate of validation cohort into day-0 GA paying customers.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-amber-400 mb-1">3x R&D ROI</div>
              <p className="text-xs text-slate-600">Return on engineering payroll by killing non-viable concepts early.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 4.2 — NEW MARKET DISCOVERY
      ========================================================================= */}
      <section id="new-market" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 4.2
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Geographic & Vertical Profit Pool Ranking
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Which market ranks by profit pool — not just superficial size?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Evaluating regulatory overhead, localized CAC dynamics, incumbent friction, and net contribution margins before committing regional capital.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Expansion plans target territories or sectors based on macro GDP or top-line industry market reports.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Gross market size masks punishing localized acquisition costs, entrenched local competitors, and regulatory friction.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Opening a local office or vertical subsidiary drains corporate cash for 18 months with negative unit economics.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">Regional sales team fails to close initial deals; CAC balloons to 3x domestic benchmarks.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                  <span className="text-xs font-mono text-amber-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-amber-100 font-medium">Run New Market Discovery to rank expansion candidates by net profit pool and execute low-capex outbound tests first.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-amber-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Market Entry Profit Pool Ranking & Validation Dossier</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Granular profit pool analysis across target regions/verticals, regulatory compliance stress-testing, and automated outbound probe campaigns.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Net profit pool ranking matrix across 3-5 candidate markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Local incumbent defensibility & displacement teardown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Probe campaign conversion data and unit-economic model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Turnkey entry roadmap: hiring, compliance, and distribution</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Expansion milestones gated against pre-agreed payback periods</li>
                  <li>• Monthly localized CAC and win-rate telemetry</li>
                  <li>• Rapid pivot or exit triggers if payback exceeds 14 months</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-amber-400 mb-1">1 Ranked Market</div>
              <p className="text-xs text-slate-600">Empirically ranked #1 market selected based on net margin density.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-amber-400 mb-1">&lt; 12 Mo Payback</div>
              <p className="text-xs text-slate-600">Target CAC payback period locked into regional market plan.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-amber-400 mb-1">−60% Upfront Capex</div>
              <p className="text-xs text-slate-600">Capex saved by validating via forward-deployed probe agents first.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-amber-400 mb-1">&gt; $2M Pipeline</div>
              <p className="text-xs text-slate-600">Qualified regional pipeline staged before full on-the-ground deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 4.3 — NEW CHANNEL DISCOVERY
      ========================================================================= */}
      <section id="new-channel" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 4.3
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Distribution Expansion & Conflict Governance
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Which channel adds without cannibalizing our primary motion?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Architecting segmentation fences, rules of engagement, and differentiated packaging to unlock complementary distribution without destroying direct sales momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Leadership decides to add a new distribution channel (e.g., self-serve product-led motion or distributor network) alongside direct enterprise sales.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Channel overlap causes severe friction: buyers play direct reps against self-serve pricing, or channel partners accuse the direct team of poaching.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Average selling prices drop, direct sales morale collapses, and total net revenue stays flat despite managing two channels.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">Key enterprise accounts downgrade to self-serve or cancel direct contracts to rebuy through discounted third-party channels.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                  <span className="text-xs font-mono text-amber-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-amber-100 font-medium">Run New Channel Discovery to architect strict customer segmentation fences, deal-registration rules, and tier-specific product packaging.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-amber-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Multi-Channel Boundary Architecture & Conflict De-Risking System</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Design non-overlapping ICP definitions, territory routing logic, feature-fencing by channel, and equitable compensation models that incentivize cross-channel cooperation.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Channel boundary & rules of engagement charter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Packaging fences separating direct vs. indirect offerings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Unified deal registration and conflict arbitration protocol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Dual-crediting compensation guidelines for direct reps</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Zero channel conflicts logged as an SLA KPI</li>
                  <li>• Monthly cannibalization audit comparing ASP trends</li>
                  <li>• Continuous optimization of inbound lead routing gates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-amber-400 mb-1">0% Cannibalization</div>
              <p className="text-xs text-slate-600">Enterprise ASP maintained with zero downward price migration.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-amber-400 mb-1">+35% Total TAM</div>
              <p className="text-xs text-slate-600">Addressable buyer coverage unlocked via secondary channel.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-amber-400 mb-1">&lt; 48h Resolution</div>
              <p className="text-xs text-slate-600">Dispute resolution SLA for partner and direct routing collisions.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-amber-400 mb-1">+25% Net ACV</div>
              <p className="text-xs text-slate-600">Incremental bookings growth from net-new buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 4.4 — NEW PRODUCT LAUNCH DISCOVERY
      ========================================================================= */}
      <section id="new-launch" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50 relative"><span id="launch" className="scroll-mt-28 absolute -top-28 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 4.4
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Precision Launch Operations & Velocity
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Is launch a controlled revenue operation — or a celebratory coin flip?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Transforming product launches from PR press releases into engineered revenue operations with day-0 pipeline staging, pre-certified sales reps, and real-time velocity monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Launch day is treated primarily as a marketing brand event — blog posts, keynote webinars, and social media blasts.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Zero qualified pipeline is staged ahead of GA. Field reps haven't been tested or certified on value messaging, and customer objections in week 1 go undocumented.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Initial excitement fades within 30 days. Sales reps fall back to selling the legacy product, and the new release stagnates as an underperforming line item.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">First-quarter earnings post-launch reveal less than 5% of reps achieved quota on the new product.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                  <span className="text-xs font-mono text-amber-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-amber-100 font-medium">Run New Product Launch Discovery to treat launch as an empirical revenue operation with staged pipeline, pre-orders, and day-0 rep telemetry.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-amber-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Precision Product Launch Operating System</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  End-to-end commercial launch execution: Day-0 pipeline staging, rep certification drills, automated objection feedback loops, and live velocity dashboards.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Day-0 pipeline staging blueprint with 3x launch quota coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Field sales certification drills & live objection battlecards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>First-30-days customer objection capture & positioning iterations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Launch Velocity Command Center with deal slip telemetry</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Daily launch war room meetings across the first 30 days</li>
                  <li>• Weekly conversion reviews against locked day-30, 60, and 90 quotas</li>
                  <li>• Automated routing of in-market objections back into sales playbooks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-amber-400 mb-1">3x Coverage</div>
              <p className="text-xs text-slate-600">Pre-staged pipeline coverage locked in CRM before day-0 GA.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-amber-400 mb-1">100% Certified</div>
              <p className="text-xs text-slate-600">Field reps tested and certified on objection handling before launch.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-amber-400 mb-1">&lt; 30 Days</div>
              <p className="text-xs text-slate-600">Time to first 25 enterprise customer closed-won contracts.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-amber-400 mb-1">&gt; 90% Quota</div>
              <p className="text-xs text-slate-600">Launch cohort quota attainment in the first fiscal quarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section id="intake" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>EXPANSION DISCOVERY INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Prove Your Next Expansion Before You Commit?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Stop gambling on unverified expansion. Connect with our principal revenue architects to validate offerings, markets, and launches with empirical evidence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Expansion Discovery Diagnostic"
            defaultPriority="Expansion Discovery"
          />
        </div>
      </section>
    </div>
  );
}
