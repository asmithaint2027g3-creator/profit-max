import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  Activity,
  Layers,
  Sparkles,
  Lock,
  Radar,
  Sliders,
  Cpu,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function PredictiveIntelligencePage() {
  useEffect(() => {
    document.title = 'Predictive Intelligence | ProfitMachines AI Native Sales';
    window.scrollTo(0, 0);
  }, []);



  const propensityArchitecture = [
    {
      title: 'Signal Fusion Engine',
      tech: 'High-Throughput Feature Extraction',
      description: 'Ingests and harmonizes 240+ continuous signals across firmographics (revenue, employee headcount delta, funding), tech stack adoption, and executive job re-organizations.',
      impact: 'Eliminates stale data blind spots across the entire TAM.'
    },
    {
      title: 'Dark-Funnel Intent Telemetry',
      tech: 'Distributed Intent Aggregator',
      description: 'Captures off-website research patterns across B2B media networks, review hubs (G2, TrustRadius), category forums, and dark-social communities before prospects ever submit a form.',
      impact: 'Identifies active buyers 6-12 weeks before inbound form submission.'
    },
    {
      title: 'Neural Propensity Models',
      tech: 'Deep Embedding Classifier',
      description: 'Calculates a normalized 0-100 buying propensity score for every account in your TAM, continuously updated whenever new signals are registered.',
      impact: 'Directs 85% of rep outbound capacity exclusively to high-intent Tier-1 accounts.'
    },
    {
      title: 'Sub-Second Signal Routing',
      tech: 'Real-Time Event Bus Protocol',
      description: 'When an account spikes in intent, the signal is routed instantly to the Agentic SDR autopilot or assigned account executive with pre-composed context.',
      impact: 'Zero latency between intent occurrence and sales action.'
    },
    {
      title: 'Continuous Model Recalibration',
      tech: 'Supervised Closed-Loop Optimization',
      description: 'The propensity model automatically retrains its feature weights using downstream win/loss outcomes, deal velocity, and ACV realization.',
      impact: 'Model accuracy increases by ~4.2% every 90 days in production.'
    }
  ];

  const velocityComponents = [
    {
      title: 'Pipeline Velocity Telemetry',
      desc: 'Tracks the exact dwell time of every active deal in every sales stage down to the hour, comparing real-time metrics against historical winning paths.'
    },
    {
      title: 'Stage-Slip Detection Algorithms',
      desc: 'Algorithmic early-warning triggers activate when deal interaction tempo drops by 25% or key committee stakeholders fail to respond to scheduled milestones.'
    },
    {
      title: 'Automated Intervention Playbooks',
      desc: 'Pre-engineered escalation sequences that automatically deploy executive sponsor outreach, ROI calculator dossiers, or technical objection rebuttals.'
    },
    {
      title: 'Predictive Pacing Models',
      desc: 'Forecasts whether the current active pipeline velocity will achieve quarterly quotas or create an end-of-quarter revenue gap 45 days in advance.'
    },
    {
      title: 'Multi-Dimensional Deal Health Scoring',
      desc: 'Composite deal score fusing stakeholder engagement breadth, executive access, competitor presence, and commercial contract friction.'
    }
  ];

  const scoringComparison = [
    {
      dimension: 'Signal Basis',
      traditional: 'Static demographic fit + website pageviews (HubSpot/Marketo)',
      predictive: '240+ dynamic signals: dark-funnel intent, 10-Ks, hiring surges & tech stack',
      advantage: '12x deeper contextual resolution'
    },
    {
      dimension: 'Calculation Frequency',
      traditional: 'Batch calculated overnight or weekly',
      predictive: 'Sub-second real-time event-driven recalculation',
      advantage: 'Instant reaction to buyer research'
    },
    {
      dimension: 'Intent Scope',
      traditional: '1st-party only (visited pricing page or downloaded whitepaper)',
      predictive: '1st, 2nd, and 3rd-party dark-funnel intent across whole ecosystem',
      advantage: 'Covers 90% of buying journey before contact'
    },
    {
      dimension: 'Qualification Accuracy',
      traditional: '45% – 60% false positive qualification rate',
      predictive: '98% ICP accuracy with 2x qualification rate',
      advantage: 'Zero rep time wasted on non-buyers'
    },
    {
      dimension: 'Forecast Methodology',
      traditional: 'Rep-entered stage probabilities & subjective commit flags',
      predictive: 'Bayesian behavioral prediction derived from empirical velocity',
      advantage: '+50% forecast accuracy lift'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      
      {/* ── HERO BANNER ── */}
      <section className="relative bg-slate-950 text-white py-14 lg:py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/50" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4">
              <BrainCircuit className="w-3.5 h-3.5 text-blue-400" />
              <span>Category 02 · Algorithmic Revenue Telemetry</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Predictive Intelligence & <span className="text-blue-400">Pacing Models</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal mb-8">
              Neural ICP propensity scoring, real-time pipeline velocity telemetry, and mathematical forecast models replacing rep-commit guesswork with deterministic certainty.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-bold">98% ICP Target Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-white font-bold">40-60% Faster Revenue Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-white font-bold">+50% Forecast Accuracy Lift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: ICP PROPENSITY SCORING (#propensity) ── */}
      <section id="propensity" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section A · Target Prioritization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Algorithmic ICP Propensity Scoring
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Neural scoring of your entire total addressable market combining firmographics, dark-funnel intent, executive transitions, and behavioral telemetry into deterministic priority tiers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {propensityArchitecture.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1">{item.title}</h3>
                  <div className="text-[11px] font-mono text-blue-600 mb-3">{item.tech}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-blue-600 font-mono text-[10px] block uppercase">Strategic Impact:</span>
                  {item.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {propensityArchitecture.slice(3, 5).map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 4}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1">{item.title}</h3>
                  <div className="text-[11px] font-mono text-blue-600 mb-3">{item.tech}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-blue-600 font-mono text-[10px] block uppercase">Strategic Impact:</span>
                  {item.impact}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold font-mono shrink-0">
                2x
              </div>
              <div className="text-sm font-semibold">
                Expected Outcome: 2x qualification accuracy lift and 98% target precision across your addressable base.
              </div>
            </div>
            <Link
              to="/book-consultation"
              className="text-xs font-bold text-blue-700 hover:text-blue-900 underline whitespace-nowrap"
            >
              Request ICP Propensity Audit &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECTION B: PIPELINE VELOCITY & PACING (#velocity) ── */}
      <section id="velocity" className="scroll-mt-28 py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section B · Velocity Telemetry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Pipeline Velocity & Pacing Telemetry
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real-time detection of stage-slip, deal stagnation, and pipeline imbalance with automated intervention playbooks to prevent quarter-end revenue shortfalls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {velocityComponents.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                      VELOCITY COMPONENT // 0{idx + 1}
                    </span>
                    <Activity className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{comp.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                  EMPIRICAL BENCHMARK
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  Deterministic Pipeline Pacing: 40% – 60% Faster Revenue Growth
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  By detecting deal stalls 21 days earlier than human sales managers and automatically deploying targeted intervention collateral to committee members, pipeline stagnation is systematically eradicated.
                </p>
              </div>
              <div className="lg:col-span-4 text-center lg:text-right">
                <div className="text-5xl font-black text-emerald-400 font-mono mb-1">
                  -38%
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Reduction in Average Sales Cycle Days
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION C: FORECAST ACCURACY MODELS (#forecast) ── */}
      <section id="forecast" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section C · Mathematical Forecast Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Mathematical Forecast Accuracy Models
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              How propensity and velocity data feed into unified forecast models, replacing rep-commit guesswork and emotional sales management with Bayesian behavioral predictions.
            </p>
          </div>

          {/* 3 Metric Callout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
              <div className="text-3xl font-black text-blue-600 font-mono mb-1">98%</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">ICP Target Accuracy</div>
              <div className="text-xs text-slate-500">Eliminates wasted capital spent prospecting outside conversion bands.</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
              <div className="text-3xl font-black text-emerald-600 font-mono mb-1">40–60%</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Faster Revenue Growth</div>
              <div className="text-xs text-slate-500">Achieved via real-time stage pacing and automated bottleneck remediation.</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
              <div className="text-3xl font-black text-purple-600 font-mono mb-1">+50%</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Forecast Accuracy Lift</div>
              <div className="text-xs text-slate-500">Relative variance reduction compared to legacy rep commit baselines.</div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs overflow-hidden mb-16">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Scoring Architecture Comparison
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Traditional Lead Scoring vs. ProfitMachines Predictive Intelligence
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-mono text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Evaluation Vector</th>
                    <th className="py-3 px-4">Traditional Lead Scoring (Rules-Based)</th>
                    <th className="py-3 px-4 text-blue-600">ProfitMachines Predictive Intelligence</th>
                    <th className="py-3 px-4">Architectural Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {scoringComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">{row.dimension}</td>
                      <td className="py-4 px-4 text-slate-600">{row.traditional}</td>
                      <td className="py-4 px-4 font-semibold text-blue-700 bg-blue-50/50">{row.predictive}</td>
                      <td className="py-4 px-4 font-mono font-bold text-emerald-600">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Final CTA Diagnostic Form */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                  INTELLIGENCE DIAGNOSTIC
                </span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Calibrate Your Predictive Revenue Model
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Submit your parameters for a confidential TAM propensity audit and pipeline velocity simulation run by our machine learning systems architects.
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Neural Propensity Scoring Audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Pipeline Velocity & Stage-Slip Diagnostic</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <AiSalesIntakeForm
                  pageContext="Predictive Intelligence"
                  defaultService="Predictive Intelligence & ICP Propensity"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
