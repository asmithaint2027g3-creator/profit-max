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
  Clock,
  Check,
  Bot,
  FileText,
  CreditCard,
  Briefcase
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function SalesAcceleration() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Sales Acceleration | Autonomous Enterprise Deal Velocity | ProfitMachines';
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

  const accelerationPoints = [
    {
      id: 'deal-intelligence',
      title: 'Predictive Deal Intelligence',
      stage: 'Pipeline Stage 01 · Qualification & Health',
      headline: 'Bayesian Win Probability & Stall Intervention',
      metric: '+50% Forecast Precision · -70% Deal Stall Rate',
      description: 'Scores deal health using multi-factor signals (buyer velocity, email sentiment, security review delay) to pinpoint slippage weeks before the quarter closes.',
      tags: ['Bayesian Forecast', 'Sentiment Scoring', 'Intervention Alerts']
    },
    {
      id: 'autonomous-workflows',
      title: 'Autonomous Workflows',
      stage: 'Pipeline Stage 02 · Rep Execution & Ops',
      headline: 'Automated CRM Hygiene & Meeting Follow-Up',
      metric: '-60% Admin Overhead · +80% Active Selling Time',
      description: 'Eliminates repetitive sales administrative friction. Autonomous copilots summarize calls, update pipeline stages, draft action plans, and prepare meeting dossiers.',
      tags: ['Zero CRM Admin', 'Auto-Summaries', 'Action Plan Execution']
    },
    {
      id: 'conversational-ai',
      title: 'Conversational AI Agents',
      stage: 'Pipeline Stage 03 · Prospect Engagement',
      headline: 'Context-Aware AI Agents for 24/7 Response',
      metric: '+300% Conversation Volume · +50% Meeting Conversion',
      description: 'Deploys enterprise conversational intelligence capable of fielding deep technical and security questions, neutralizing buyer objections, and locking calendar invites.',
      tags: ['Technical Objection AI', '24/7 Inbound Answering', 'Calendar Sync']
    },
    {
      id: 'quote-to-cash',
      title: 'Quote-to-Cash Automation',
      stage: 'Pipeline Stage 04 · Commercial Finalization',
      headline: 'CPQ Optimization & Instant Approval Routing',
      metric: '-80% Quote Turnaround · -50% Cash Cycle DSO',
      description: 'Streamlines complex discounting and contract redlines with automated legal guardrails, self-serve executive approvals, and integrated digital signature pipelines.',
      tags: ['Discount Guardrails', 'Sub-Hour Approvals', 'Contract Telemetry']
    },
    {
      id: 'expansion',
      title: 'Expansion Intelligence',
      stage: 'Pipeline Stage 05 · Post-Sale Compounding',
      headline: 'Live Telemetry Triggers for Upsell & Cross-Sell',
      metric: '+25% Expansion Revenue · +15% NRR Lift',
      description: 'Monitors software usage, seat saturation, and license consumption in real time to generate contextual expansion opportunities for account executives.',
      tags: ['Seat Saturation Telemetry', 'Feature Triggers', 'NRR Compounding']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Image with High-Contrast Dark Protective Overlays to guarantee 100% text readability */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/hero-revenue-acceleration.png"
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
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            <span>ACCELERATING EVERY DEAL STAGE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Accelerate Every Deal.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              From First Signal to Expansion Revenue.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            Replace drawn-out deal cycles and surprise slippage with accelerated sales motions. From predictive win-probability scoring to autonomous CPQ execution, we remove friction across the enterprise lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Accelerate Your Sales Motion</span>
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
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">-70%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Late-Stage Deal Stall Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">+80%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Rep Active Selling Hours</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">-80%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Quote Turnaround Time</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">+15%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Net Revenue Retention (NRR)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>THE SALES VELOCITY CRISIS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Enterprise Sales Motions Stall
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enterprise deals fail not from lack of interest, but from unmanaged friction across approvals, technical validation, and manual rep administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Extended Sales Cycles</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deals linger for 6 to 9 months in ambiguous evaluation stages because reps lack prescriptive deal navigation protocols and early executive alignment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Unpredicted Quarter Misses</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sales managers rely on rep optimism rather than mathematical deal telemetry, resulting in 40% of forecasted commit deals slipping into following quarters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Crushing Admin Burden</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enterprise Account Executives spend over 65% of their working week logging CRM notes, formatting slide decks, and waiting for manual discount approvals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Missed Expansion Revenue</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Once contracts close, account teams lack automated telemetry to spot seat saturation and usage expansion signals, forfeiting natural upsell revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE ARCHITECTURE ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>FIVE ACCELERATION POINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Sales Acceleration Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Five high-velocity software and telemetry layers inserted directly into your enterprise deal lifecycle.
            </p>
          </div>

          <div className="space-y-4">
            {accelerationPoints.map((point, index) => (
              <div
                key={point.id}
                id={point.id}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 scroll-mt-28"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-mono font-extrabold flex items-center justify-center text-lg shrink-0 shadow-md">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-1">
                      {point.stage}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">{point.title}: {point.headline}</h3>
                    <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-3">{point.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {point.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-left lg:text-right shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Quantified Impact</div>
                  <div className="text-base font-extrabold text-slate-900 font-mono mt-1 text-emerald-600">{point.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEAL ACCELERATION VISUAL TOPOLOGY ── */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>ACCELERATED DEAL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              Accelerating Every Deal Stage
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Every stage of the deal is fortified with autonomous intelligence and mathematical telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Stage 01</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Intent Ingestion</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Prospect crosses buying threshold. Conversational SDR handles early qualification instantly.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400 font-semibold">
                Latency &lt;60 Seconds
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Stage 02</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Discovery & Dossier</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Automated pre-meeting dossiers synthesize 10-K filings, competitor footprint, and executive bios.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400 font-semibold">
                Zero Rep Prep Burden
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Stage 03</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Mutual Evaluation</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Bayesian deal health engines monitor stakeholder engagement and intervene on silent stalls.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400 font-semibold">
                -70% Stall Likelihood
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Stage 04</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Quote & Close</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Algorithmic CPQ generates compliant quotes with enforced discount floors and instant approvals.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400 font-semibold">
                -80% Quoting Latency
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Stage 05</span>
              <h4 className="text-base font-bold text-white mt-1 mb-2 font-heading">Expansion Loop</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Telemetry triggers automated upsell plays as soon as accounts approach 85% license utilization.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400 font-semibold">
                +15% Compound NRR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: BEFORE / AFTER COMPARISON TABLE ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>OPERATIONAL TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Manual Sales vs. Accelerated Sales
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Compare the operational reality of legacy sales execution against the ProfitMachines accelerated architecture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-500 tracking-wider">
                <tr>
                  <th className="py-4 px-6">Sales Dimension</th>
                  <th className="py-4 px-6 text-red-600 font-bold">Legacy Manual Sales</th>
                  <th className="py-4 px-6 text-blue-600 font-bold">ProfitMachines Accelerated Sales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Pipeline Forecasting</td>
                  <td className="py-4 px-6 text-slate-600">Subjective rep guesswork with 35% variance</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Bayesian predictive modeling with &lt;5% variance</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Rep Working Hours</td>
                  <td className="py-4 px-6 text-slate-600">65% spent in CRM logging, notes, and emails</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">80% active selling time with autonomous admin</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Deal Stall Detection</td>
                  <td className="py-4 px-6 text-slate-600">Discovered during end-of-quarter panic</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Flagged automatically in real-time via telemetry</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">CPQ & Approvals</td>
                  <td className="py-4 px-6 text-slate-600">3-5 business days waiting on manager emails</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Instant algorithmic approvals with locked floors</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Account Expansion</td>
                  <td className="py-4 px-6 text-slate-600">Reactive checks at 90-day renewal window</td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">Continuous usage-to-revenue automation triggers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SALES VELOCITY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Accelerate Your Enterprise Deal Pipeline?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Deploy autonomous deal telemetry and eliminate rep administrative overhead with our Principal Systems Architects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Sales Acceleration Architecture Session"
            defaultObjective="Sales Acceleration"
          />
        </div>
      </section>
    </div>
  );
}
