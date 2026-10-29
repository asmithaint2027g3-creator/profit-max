import React, { useEffect } from 'react';
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
  HeartPulse,
  RefreshCw,
  Repeat,
  Users,
  Clock,
  Check
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function CustomerSuccess() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Customer Success Engine | Predictive Retention & Expansion Telemetry | ProfitMachines';
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

  const lifecycleStages = [
    {
      id: 'retention',
      title: 'Predictive Retention Engine',
      stage: 'Lifecycle Stage 01 · Churn Prevention',
      headline: 'Pre-Churn Behavioral Drop-Off Detection',
      metric: '90% Churn Prediction Accuracy · +20% Gross Retention',
      description: 'Identifies negative account sentiment and engagement declines weeks before renewal conversations occur. Automatically initiates recovery workflows.',
      tags: ['Behavioral Telemetry', 'Pre-Churn Radar', 'Save Playbooks']
    },
    {
      id: 'expansion-engine',
      title: 'Expansion Engine',
      stage: 'Lifecycle Stage 02 · Account Compounding',
      headline: 'Usage-Driven Upsell & Cross-Sell Triggers',
      metric: '+25% Expansion Revenue · +15% NRR Lift',
      description: 'Monitors feature usage spikes, seat thresholds, and API consumption to alert account managers precisely when accounts are primed for cross-sell tiers.',
      tags: ['Seat Saturation Tracking', 'Usage Milestones', 'Automated Routing']
    },
    {
      id: 'renewal',
      title: 'Renewal Intelligence',
      stage: 'Lifecycle Stage 03 · Commercial Execution',
      headline: '90-Day Automated Renewal Flight Plans',
      metric: '95% Renewal Predictability · +15% On-Time Renewals',
      description: 'Automates contract renewal pipelines with dynamic price adjustments, multi-year incentive packaging, and executive sponsor health checks.',
      tags: ['Commercial Pricing Floors', 'Auto-Notice Dispatch', 'Executive Sponsorship']
    },
    {
      id: 'health',
      title: 'Customer Health Telemetry',
      stage: 'Lifecycle Stage 04 · Continuous Telemetry',
      headline: 'Composite Mathematical Health Scoring',
      metric: '100% Account Visibility · +80% Proactive Resolution',
      description: 'Synthesizes login velocity, support ticket sentiment, executive engagement, and NPS feedback into a live single-pane health score.',
      tags: ['Sentiment Analysis', 'Usage Heatmaps', 'Proactive Ticketing']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Image with High-Contrast Dark Protective Overlays to guarantee 100% text readability */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/outcomes-metrics.png"
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
            <HeartPulse className="w-3.5 h-3.5 text-blue-400" />
            <span>CUSTOMER SUCCESS & RETENTION ENGINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Engineer Customer Success.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              From Onboarding to Expansion. Predictably.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            Replace unexpected churn and missed expansion opportunities with engineered customer success systems. From predictive retention telemetry to systematic upsell triggers, we compound Net Revenue Retention.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Engineer Your Retention Engine</span>
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
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">90%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Churn Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">+25%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Expansion Revenue Growth</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">95%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">On-Time Renewal Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">100%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Live Account Health Visibility</div>
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
              <span>THE SILENT REVENUE CHURN LEAK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Enterprise Customer Success Leaks Margin
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Most CS organizations operate as reactive tier-1 support desks. They discover account dissatisfaction only when the formal non-renewal notice arrives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Surprise Churn Notices</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Accounts that seemed green on quarterly check-ins cancel unexpectedly because executive leadership changes were never tracked by CSMs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Uncaptured Expansion</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Customer usage exceeds license caps for months without triggering commercial upgrades, giving away hundreds of thousands in unmonetized value.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Reactive Support Operations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                CSMs spend their time answering basic feature questions instead of partnering with client executives on strategic ROI realization milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Zero Health Telemetry</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Health scores rely on CSM subjective mood rankings rather than mathematical API telemetry, producing inaccurate retention forecasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 LIFECYCLE ENGINES ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Repeat className="w-3.5 h-3.5" />
              <span>THE RETENTION & EXPANSION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The 4 Customer Success Engines
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Four synchronized systems engineered to protect gross revenue, identify upgrade triggers, and guarantee predictable renewals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.id}
                id={stage.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between scroll-mt-28"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {stage.stage}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 text-emerald-600 font-bold">
                      {stage.metric.split('·')[0]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">{stage.title}</h3>
                  <div className="text-xs font-mono text-slate-500 font-semibold mb-3">{stage.headline}</div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{stage.description}</p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2">
                    {stage.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 font-medium">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CIRCULAR LIFECYCLE VISUAL ── */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>CIRCULAR COMPOUNDING LOOP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              The Complete Customer Journey
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              How early value realization directly converts into multi-year expansion revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Phase 1</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Onboarding Velocity</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  First value realization reached in under 14 days with automated telemetry milestones.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
                14-Day Time-to-Value
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Phase 2</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Active Adoption</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Continuous telemetry tracking feature utilization and identifying user drop-offs early.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
                90% Churn Prediction
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Phase 3</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Seat Expansion</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trigger alerts dispatch as soon as accounts hit 85% license threshold to upsell seats.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
                +25% Expansion Revenue
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Phase 4</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Multi-Year Renewal</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Frictionless commercial renewals pre-approved with verified ROI cases attached.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
                95% On-Time Renewals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: LIFECYCLE METRICS ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CONTRACTED RETENTION OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Retention Architecture as an Asset
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Measured and guaranteed through our SOW realization agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-600 font-mono mb-2">+20%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Gross Revenue Retention</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Secured through pre-churn behavioral alerts and automated save plays.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">138%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Average NRR Benchmark</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Driven by automated usage-based license and feature upgrades.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-purple-600 font-mono">95%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Renewal Predictability</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Forecasted renewal revenue recognized without end-of-year discounting.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-indigo-600 font-mono">100%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Health Visibility</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Real-time composite telemetry for every active enterprise customer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA & INTAKE ── */}
      
      {/* ── KPI METRICS & MEASUREMENT SPECIFICATION ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>CORE PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Metrics That Matter: Measurable KPI Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every Customer Success capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Stability Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;92% Enterprise Cohort</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Customer Retention Rate (CRR)</h3>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1.5 mb-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Enterprise Benchmark:</span>
                    <span className="font-mono font-bold text-slate-900">94%–97% Annual Logo Retention</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Measurement Cadence:</span>
                    <span className="font-mono text-slate-700">Annual Cohort | Paid Enterprise Accounts</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-500 font-medium">Confidence Status:</span>
                    <span className="inline-flex items-center font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Verified Actual
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of customer relationships maintained over an annualized operational timeframe.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Retaining the base customer footprint protects accumulated recurring revenue and prevents dilution.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Risk Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;5% Annualized Churn</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Gross Revenue Churn Rate</h3>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1.5 mb-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Enterprise Benchmark:</span>
                    <span className="font-mono font-bold text-slate-900">&lt;3.5% Annual Churn ARR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Measurement Cadence:</span>
                    <span className="font-mono text-slate-700">Trailing 12 Months | Non-Expansion Base</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-500 font-medium">Confidence Status:</span>
                    <span className="inline-flex items-center font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Verified Actual
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">The rate at which existing contracted revenue is eroded through cancellation or seat reductions.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Uncontrolled churn creates a compounding drag that forces marketing to replace lost dollars before growing.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Compounding Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">120% - 135% Target</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Net Revenue Retention (NRR)</h3>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1.5 mb-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Enterprise Benchmark:</span>
                    <span className="font-mono font-bold text-slate-900">118%–132% Enterprise NRR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Measurement Cadence:</span>
                    <span className="font-mono text-slate-700">Annual Cohort | Expansion + Contraction</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-500 font-medium">Confidence Status:</span>
                    <span className="inline-flex items-center font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Verified Actual
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of recurring revenue retained from existing customers including expansion compounding.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> The primary valuation multiple driver for enterprise SaaS; proves product value compounds naturally.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Core Health Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;90% - 95% Rate</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Gross Revenue Retention (GRR)</h3>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1.5 mb-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Enterprise Benchmark:</span>
                    <span className="font-mono font-bold text-slate-900">92%–96% Enterprise GRR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Measurement Cadence:</span>
                    <span className="font-mono text-slate-700">Annual Cohort | Excludes Price Escalations</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-500 font-medium">Confidence Status:</span>
                    <span className="inline-flex items-center font-mono text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      Sourced Benchmark
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of recurring revenue retained from existing customers excluding all expansion upsell.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Exposes true product stickiness and customer utility independent of aggressive new expansion sales.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Enterprise Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">LTV Expansion Curve</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Customer Lifetime Value (LTV)</h3>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1.5 mb-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Enterprise Benchmark:</span>
                    <span className="font-mono font-bold text-slate-900">$420,000–<h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Customer Lifetime Value (LTV)</h3>
                .25M Enterprise Lifetime Value</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Measurement Cadence:</span>
                    <span className="font-mono text-slate-700">3–5 Year Horizon | Net Margin Contribution</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-500 font-medium">Confidence Status:</span>
                    <span className="inline-flex items-center font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Verified Actual
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Cumulative net contribution profit produced over the entire account partnership lifecycle.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Demonstrates the compounding economic dividend of investments in proactive customer health.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Growth Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;20% of Net-New ARR</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Expansion Revenue Share</h3>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1.5 mb-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Enterprise Benchmark:</span>
                    <span className="font-mono font-bold text-slate-900">35%–48% of Net-New ARR from Base</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Measurement Cadence:</span>
                    <span className="font-mono text-slate-700">Annual ARR Compounding | Expansion Pods</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                    <span className="text-slate-500 font-medium">Confidence Status:</span>
                    <span className="inline-flex items-center font-mono text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      Strategic Target
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of total growth generated through cross-sell, seat saturation, and tier progression.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Provides low-CAC revenue acceleration that dramatically expands operating margins.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CUSTOMER RETENTION INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Protect and Compound Your Net Revenue Retention?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Schedule a customer success telemetry audit with our Principal Revenue Architects to model churn reduction and expansion upside.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Customer Success Architecture Session"
            defaultObjective="Customer Success Engine"
          />
        </div>
      </section>
    </div>
  );
}
