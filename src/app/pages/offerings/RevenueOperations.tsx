import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  DollarSign,
  Activity,
  Layers,
  Search,
  Sparkles,
  Lock,
  ChevronRight,
  Zap,
  BarChart3,
  Sliders,
  Cpu,
  Shield,
  ArrowUpRight,
  Gauge,
  Radio,
  Clock,
  LineChart,
  PieChart,
  Terminal,
  Server
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function RevenueOperations() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Revenue Operations | Unified Telemetry & Forecasting Certainty | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'forecast' | 'attribution' | 'territory'>('forecast');

  const controlCenters = [
    {
      id: 'command-center',
      title: 'Revenue Command Center',
      tagline: 'Real-Time Pipeline Telemetry & Unified Data',
      metric: '100% Real-Time Visibility · 2.4x Decision Speed',
      description: 'Consolidates CRM, billing, usage logs, ad networks, and customer support databases into a unified, low-latency revenue telemetry stream.',
      deliverables: ['Real-Time Executive Pipeline HUD', 'Automated Health Alerts', 'Cross-System Identity Resolution']
    },
    {
      id: 'forecasting',
      title: 'Forecasting & Pipeline Health',
      tagline: 'Bayesian Predictive Models & Variance Minimization',
      metric: '98% Model Accuracy · <5% Quarterly Variance',
      description: 'Replaces subjective sales rep confidence scores with Bayesian predictive algorithms that calculate deal close probability with mathematical precision.',
      deliverables: ['Machine-Learned Close Predictor', 'Pipeline Slippage Early Radar', 'Commit Stress-Testing Model']
    },
    {
      id: 'attribution',
      title: 'Attribution & Performance',
      tagline: 'Full-Funnel Multi-Touch Revenue Attribution',
      metric: '95% Attribution Confidence · +30% Budget Efficiency',
      description: 'Tracks every enterprise dollar through first touch, mid-funnel nurture, executive meeting, and renewal, exposing exact CAC-to-LTV ratios per channel.',
      deliverables: ['Algorithmic Multi-Touch Attribution Engine', 'Channel Payback Calculator', 'Rep Efficiency Matrix']
    },
    {
      id: 'territory',
      title: 'Territory Optimization',
      tagline: 'Equitable Account Allocation & Quota Science',
      metric: '+40% Territory Balance · +25% Revenue per Rep',
      description: 'Allocates accounts based on verified market propensity rather than arbitrary zip codes, ensuring high-performing reps receive optimal target density.',
      deliverables: ['Propensity-Weighted Territory Maps', 'Quota Attainability Simulator', 'Capacity Balancing Engine']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Image with High-Contrast Dark Protective Overlays to guarantee 100% text readability */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/revenue-acceleration-engine.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(15,23,42,0.6))]" />
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Gauge className="w-3.5 h-3.5 text-blue-400" />
            <span>REAL-TIME REVENUE COMMAND</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Command Your Revenue.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Real-Time Visibility. Mathematical Certainty.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            Replace lagging indicators, conflicting spreadsheets, and surprise quarter misses with real-time revenue command. From Bayesian forecasting models to full-funnel attribution, we engineer RevOps as a predictive operating system.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Build Your Command Center</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <span>Talk to a Principal Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">98%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Forecast Precision</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">&lt;5%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Quarterly Variance</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">95%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Attribution Confidence</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">+25%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Revenue per Sales Rep</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>THE OPERATIONAL VISIBILITY VOID</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Traditional RevOps Fails Leadership
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Most revenue operations teams function as reactive CRM maintenance custodians rather than mathematical strategic drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Lagging Indicators</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reports reflect what happened 30 days ago. By the time leadership spots a conversion drop, the quarter is already lost and unrecoverable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Quarterly Forecast Panic</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Forecast calls rely on subjective sales rep commitments that fluctuate wildly week-to-week, creating board friction and budget chaos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Conflicting Data Silos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Marketing reports one pipeline number in HubSpot, sales reports another in Salesforce, and finance sees a third in ERP, creating endless debate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Arbitrary Territories</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rep quotas and territories are assigned by geography rather than true buyer propensity, leaving top closers starving in depleted regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4-QUADRANT ARCHITECTURE ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>FOUR CONTROL CENTERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Revenue Operations Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Four unified control systems designed to provide enterprise C-suites with continuous telemetry, mathematical forecasting certainty, and optimized capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {controlCenters.map((center, index) => (
              <div
                key={center.id}
                id={center.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between scroll-mt-28"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      Control Center 0{index + 1}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 text-emerald-600 font-bold">
                      {center.metric.split('·')[0]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">{center.title}</h3>
                  <div className="text-xs font-mono text-slate-500 font-semibold mb-3">{center.tagline}</div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{center.description}</p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">Key Deliverables</div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {center.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: TELEMETRY DASHBOARD MOCKUP ── */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE TELEMETRY HUD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              The Real-Time Executive HUD
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              High-resolution mathematical telemetry replacing spreadsheets with live pipeline health scoring.
            </p>
          </div>

          {/* Interactive Mockup Box */}
          <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">PROFITMACHINES // REVOPS TELEMETRY KERNEL v4.8</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTelemetryTab('forecast')}
                  className={`px-3 py-1 rounded text-xs font-mono font-bold transition-colors ${
                    activeTelemetryTab === 'forecast' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Bayesian Forecast
                </button>
                <button
                  onClick={() => setActiveTelemetryTab('attribution')}
                  className={`px-3 py-1 rounded text-xs font-mono font-bold transition-colors ${
                    activeTelemetryTab === 'attribution' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Attribution Waterfall
                </button>
                <button
                  onClick={() => setActiveTelemetryTab('territory')}
                  className={`px-3 py-1 rounded text-xs font-mono font-bold transition-colors ${
                    activeTelemetryTab === 'territory' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Territory Density
                </button>
              </div>
            </div>

            {activeTelemetryTab === 'forecast' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1">Q3 Locked Forecast</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-2">$14,820,000</div>
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Variance: 2.3% (Within 5% Target)</span>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1">Slipped Deal Interventions</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400 mb-2">12 Accounts</div>
                  <div className="text-xs font-mono text-slate-400">
                    $2.4M Recovered via Autonomous Triggers
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1">Pipeline Velocity</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-400 mb-2">42 Days</div>
                  <div className="text-xs font-mono text-emerald-400">
                    -38% vs. Historical 68 Days
                  </div>
                </div>
              </div>
            )}

            {activeTelemetryTab === 'attribution' && (
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Channel 01: Inbound Architecture & Search</span>
                  <span className="text-emerald-400 font-bold">$6.2M (42%) · CAC Payback: 4.2 Mos</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[42%]" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Channel 02: Autonomous Outbound Fleets</span>
                  <span className="text-emerald-400 font-bold">$4.8M (32%) · CAC Payback: 3.4 Mos</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[32%]" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Channel 03: Executive ABM & Ecosystem</span>
                  <span className="text-emerald-400 font-bold">$3.8M (26%) · CAC Payback: 5.6 Mos</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[26%]" />
                </div>
              </div>
            )}

            {activeTelemetryTab === 'territory' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <h4 className="text-xs font-mono font-bold text-blue-400 mb-2 uppercase">Propensity-Tiered Balancing</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Territory workload re-indexed nightly across account propensity deciles. Reps manage equal opportunity value rather than arbitrary geography.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 mb-2 uppercase">Quota Attainment Index</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    78% of field reps exceeding 100% quota vs. 42% benchmark prior to territory mathematical re-alignment.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: METRICS GRID ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CONTRACTED REVOPS OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              RevOps as a Certainty Engine
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Measured and guaranteed through our SOW realization agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-600 font-mono mb-2">98%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Forecast Precision</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Eliminates quarterly surprises and builds absolute board credibility.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">&lt;5%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Commit Variance</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Variance between day-1 commit and end-of-quarter recognized revenue.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-purple-600 font-mono">+30%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Budget Efficiency</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Reallocated from non-performing campaigns into proven acquisition channels.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-indigo-600 font-mono">2.4x</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Decision Velocity</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Executive decisions executed based on real-time data instead of multi-week audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>REVOPS ARCHITECTURE INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Command Your Revenue With Mathematical Certainty?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Schedule a revenue operations diagnostic with our Principal Systems Architects to baseline your forecasting accuracy and pipeline telemetry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Revenue Operations Architecture Session"
            defaultObjective="Revenue Operations"
          />
        </div>
      </section>
    </div>
  );
}
