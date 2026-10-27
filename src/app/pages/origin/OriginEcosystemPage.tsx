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
  Network,
  Share2,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  ChevronRight,
  RefreshCw,
  GitMerge
} from 'lucide-react';
import OriginStickySubNav from './OriginStickySubNav';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function OriginEcosystemPage() {
  useEffect(() => {
    document.title = 'Business Ecosystem Discovery — Alliances, Platforms & Adjacencies | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const subNavItems = [
    { id: 'alliance', label: '3.1 Alliance & Co-Sell', badge: 'Node 3.1' },
    { id: 'platform-adjacency', label: '3.2 Platform & Adjacency', badge: 'Node 3.2' },
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
              <span>Business Ecosystem Discovery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              Revenue you don't build alone: alliances, platforms, and adjacent ground.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Two critical ecosystem discovery nodes that transform symbolic partnerships into verified co-sell revenue engines and de-risk your business from platform dependency.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Book Ecosystem Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#intake"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Talk to a Principal Architect</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB NAVIGATION */}
      <OriginStickySubNav
        currentPageTitle="Business Ecosystem Discovery"
        originNumber=""
        items={subNavItems}
      />

      {/* =========================================================================
          NODE 3.1 — ALLIANCE & CO-SELL ECOSYSTEM
      ========================================================================= */}
      <section id="alliance" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 3.1
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Partnership Economics & Co-Sell Motions
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Which partnerships actually produce revenue — and which are hollow announcements?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              Auditing partner revenue productivity, aligning field compensation incentives, and wiring real-time co-sell telemetry into your CRM.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* SPICED BREAKDOWN */}
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">You showcase dozens of prestigious partner logos across your marketing assets and press releases.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Over 90% of partner agreements produce zero verified co-sell pipeline. Partner managers measure meetings rather than closed-won ACV.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Valuable BD resources are burned on joint press events while rivals build real distribution moats with top GSIs and ISVs.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">Executive leadership or board conducts an ROI audit on alliance overhead and finds no attributable pipeline.</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30">
                  <span className="text-xs font-mono text-purple-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-purple-100 font-medium">Run Alliance & Co-Sell Discovery to prune deadweight partnerships, align dual-compensation incentives, and engineer a high-velocity co-sell engine.</p>
                </div>
              </div>
            </div>

            {/* THE SHARP OFFERING & DELIVERABLES */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-purple-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Co-Sell Engine & Alliance Attribution System</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Full alliance tiering audit, co-sell compensation redesign, joint offering blueprints, and real-time partner attribution tracking.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Alliance portfolio profitability and productivity audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Dual-incentive sales compensation architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Packaged joint solution playbooks for field reps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Bidirectional partner deal registration & attribution CRM telemetry</span>
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
                  <li>• Monthly partner pipeline attribution reconciliation</li>
                  <li>• Pruning or sunsetting underperforming alliances quarterly</li>
                  <li>• Joint QBRs focused exclusively on closed ACV and pipeline velocity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* METRICS & KPIS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-purple-400 mb-1">100% Attribution</div>
              <p className="text-xs text-slate-600">Every alliance dollar mapped to precise source and co-sell attribution.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-purple-400 mb-1">2.5x Pipeline Lift</div>
              <p className="text-xs text-slate-600">Partner-sourced pipeline expansion across tier-1 partners.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-purple-400 mb-1">+20 Pts Win Rate</div>
              <p className="text-xs text-slate-600">Win rate on co-sold enterprise deals vs. direct solo pursuits.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-purple-400 mb-1">−30% Cycle Time</div>
              <p className="text-xs text-slate-600">Reduction in contract approval time via partner master service agreements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NODE 3.2 — PLATFORM, MARKETPLACE & ADJACENCY
      ========================================================================= */}
      <section id="platform-adjacency" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              NODE 3.2
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Platform Hedging & Adjacent Expansion
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Are we on someone else's land — and where is our second vertical?
            </h2>
            <p className="text-base text-slate-500 max-w-3xl">
              De-risking single platform marketplace dependencies while identifying and validating adjacent high-margin market profit pools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-200 p-8 backdrop-blur-xl">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>SPICED Diagnostic Breakdown</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-1">Situation</span>
                  <p className="text-sm text-slate-200">Your customer acquisition relies heavily on a single app marketplace, cloud vendor ecosystem, or singular vertical.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Problem</span>
                  <p className="text-sm text-slate-200">Platform take rates rise, algorithm tweaks reduce reach, and your core vertical approaches natural saturation.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-rose-400 uppercase block mb-1">Implication</span>
                  <p className="text-sm text-slate-200">Enterprise valuation is discounted due to platform fragility, and growth flattens without a multi-vertical expansion path.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-200">
                  <span className="text-xs font-mono text-blue-600 uppercase block mb-1">Critical Event</span>
                  <p className="text-sm text-slate-200">The platform introduces a competing native feature or a rival launches into your natural adjacent sector first.</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30">
                  <span className="text-xs font-mono text-purple-300 uppercase block mb-1 font-bold">Decision</span>
                  <p className="text-sm text-purple-100 font-medium">Run Platform, Marketplace & Adjacency Discovery to hedge platform exposure and quantify the fastest adjacent profit pool.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-purple-500/30 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">The Sharp Offering</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Platform De-Risking & Adjacency Expansion Blueprint</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Marketplace exposure scoring, multi-platform expansion plans, and empirical TAM/profit pool ranking of candidate adjacent verticals.
                </p>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables:</div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Platform dependency stress-test & risk score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Multi-ecosystem distribution roadmap (Hyperscalers & App Stores)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Adjacent vertical profit pool scorecard and ranking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Phased market-entry pilot protocol</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  <span>Realization Loop</span>
                </div>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Monthly platform channel share balancing against target ratios</li>
                  <li>• Continuous monitoring of platform API terms and policy shifts</li>
                  <li>• Quarterly proof gates on adjacent vertical pilots</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 01</div>
              <div className="text-2xl font-black text-purple-400 mb-1">&lt; 35% Risk</div>
              <p className="text-xs text-slate-600">Single-platform dependency capped below 35% of total bookings.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 02</div>
              <div className="text-2xl font-black text-purple-400 mb-1">2+ Platforms</div>
              <p className="text-xs text-slate-600">Secondary distribution marketplaces established and producing revenue.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 03</div>
              <div className="text-2xl font-black text-purple-400 mb-1">1 Adjacent Win</div>
              <p className="text-xs text-slate-600">Successful entry and first $1M ARR established in target adjacent vertical.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase mb-1">Metric 04</div>
              <div className="text-2xl font-black text-purple-400 mb-1">+40% Multiple</div>
              <p className="text-xs text-slate-600">Enterprise valuation multiple expansion driven by de-risked distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section id="intake" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>ECOSYSTEM DISCOVERY INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Build Real Ecosystem & Co-Sell Revenue?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Turn hollow partner announcements into verified co-sell pipeline. Connect with our principal revenue architects to install your ecosystem operating system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Business Ecosystem Discovery Diagnostic"
            defaultPriority="Ecosystem Discovery"
          />
        </div>
      </section>
    </div>
  );
}
