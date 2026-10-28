import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, Zap, BarChart3,
  Layers, Activity, Target, CheckCircle2, AlertCircle,
  HelpCircle, ChevronDown, Cpu, Radar, Clock, Shield,
  Sparkles, DollarSign, LineChart, Network
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

const pillars = [
  {
    num: '01',
    title: 'Revenue Physics',
    path: '/growth-science/revenue-physics',
    color: 'blue',
    icon: Activity,
    desc: 'The fundamental laws that govern revenue behavior — LTV mechanics, market dynamics, PLG triggers, and unit economics.',
    metric: '25-40%',
    metricLabel: 'improvement in LTV:CAC ratio',
  },
  {
    num: '02',
    title: 'Friction Diagnostics',
    path: '/growth-science/friction-diagnostics',
    color: 'rose',
    icon: Radar,
    desc: 'Identifies where growth stalls — pipeline leakage, margin erosion, operational silos, and organizational resistance.',
    metric: '40-60%',
    metricLabel: 'reduction in stage-to-stage leakage',
  },
  {
    num: '03',
    title: 'AI Acceleration Engines',
    path: '/growth-science/ai-engines',
    color: 'violet',
    icon: Cpu,
    desc: 'Autonomous systems that accelerate every stage — agent deployment, predictive retention, ecosystem orchestration, algorithmic pricing.',
    metric: '60+',
    metricLabel: 'hours reclaimed per team per week',
  },
  {
    num: '04',
    title: 'Proprietary Growth Models',
    path: '/growth-science/growth-models',
    color: 'emerald',
    icon: Layers,
    desc: 'Battle-tested frameworks that convert diagnosis to action — Revenue Velocity, Profit Pool Optimization, Demand Flywheel, AI-Native Transformation.',
    metric: '3-5X',
    metricLabel: 'improvement in revenue productivity',
  },
  {
    num: '05',
    title: 'Executive Telemetry',
    path: '/growth-science/executive-telemetry',
    color: 'indigo',
    icon: LineChart,
    desc: 'Real-time visibility for the C-suite — predictive forecasting, cohort analytics, productivity metrics, growth scorecards.',
    metric: '<5%',
    metricLabel: 'forecast-to-actuals variance',
  },
];

const faqs = [
  {
    q: 'How is this different from traditional consulting engagements?',
    a: 'Traditional consulting delivers a strategy deck and exits. We deploy proprietary frameworks, wire them to autonomous AI execution engines, and stay accountable to measurable outcomes — measured in revenue realized, not slides presented.'
  },
  {
    q: 'What makes your frameworks proprietary?',
    a: 'Each framework is built from first-principles analysis across 500+ B2B companies. They encode the specific behavioral triggers, unit-economic thresholds, and organizational levers that conventional models ignore. They are calibrated by deployment, not theory.'
  },
  {
    q: 'How do you measure success?',
    a: 'We lock baseline metrics on Day 1 — revenue velocity, LTV:CAC ratio, forecast variance, NRR. Every engagement is evaluated against these baselines monthly, with contractual accountability to targets.'
  },
  {
    q: 'Can we start with one pillar and expand?',
    a: 'Yes. Most engagements start with a Growth Diagnostic that identifies which pillar has the highest leverage for your specific situation. That pillar is activated first; the system expands from there.'
  },
  {
    q: 'What\'s the typical ROI timeline?',
    a: 'Most clients see measurable impact within 45-60 days — initial friction removal and pipeline acceleration. Full flywheel impact typically materializes within 6-9 months as AI engines compound and models are fully deployed.'
  },
  {
    q: 'How do your frameworks integrate with existing operations?',
    a: 'Our integration layer connects to your existing CRM, marketing automation, and analytics stack. No rip-and-replace. We add the intelligence and automation layer on top of what you already have.'
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; hover: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700', hover: 'hover:border-blue-400' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-700', hover: 'hover:border-rose-400' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-700', hover: 'hover:border-violet-400' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700', hover: 'hover:border-emerald-400' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-700', hover: 'hover:border-indigo-400' },
};

export default function GrowthScienceHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Growth & Acceleration Science | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-indigo-600/12 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[130px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" /></span>
              THE SCIENCE BEHIND PREDICTABLE GROWTH
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
              Growth & Acceleration Science:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-300">
                Five Pillars of Revenue Physics
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              Revenue isn't luck. It's a system with inputs, outputs, and predictable mechanics. Our proprietary frameworks diagnose where growth stalls, identify which levers unlock compounding returns, and deploy autonomous AI to accelerate every stage.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#diagnostic" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                Run a Growth Diagnostic
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#pillars" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                Explore the Frameworks
                <ChevronRight className="w-4 h-4 text-indigo-400" />
              </a>
            </div>
            {/* Stat bar */}
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-400 font-mono">
              {[['500+', 'B2B Companies'], ['5X', 'Avg Revenue Growth'], ['90 Days', 'To First Impact']].map(([v, l]) => (
                <div key={l} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-white font-bold">{v}</span>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE METHODOLOGY ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                THE PROBLEM WITH CONVENTIONAL GROWTH
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-5">
                Why Most Growth Initiatives Fail
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Most enterprises approach growth as a series of disconnected experiments — more marketing spend, new sales hires, pricing tweaks, product launches. None of it is connected. None of it is measured against a unified framework. None of it compounds.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our approach is different. We treat revenue as a physical system with identifiable laws, measurable friction, and predictable acceleration paths. Every initiative is connected to the system. Every investment is measured against a unified framework. Everything compounds.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-rose-50 border border-rose-200 p-5">
                <div className="text-xs font-mono font-bold text-rose-700 uppercase tracking-widest mb-3">Traditional Growth</div>
                {['Disconnected experiments', 'No unified framework', 'Linear scaling', 'Reactive decisions', 'Lagging indicators'].map(item => (
                  <div key={item} className="flex items-center gap-2 mb-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-indigo-50 border border-indigo-200 p-5">
                <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest mb-3">Engineered Growth</div>
                {['Unified system framework', 'Measurable mechanics', 'Compounding returns', 'Proactive intelligence', 'Predictive telemetry'].map(item => (
                  <div key={item} className="flex items-center gap-2 mb-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 PILLARS GRID ── */}
      <section id="pillars" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              FIVE INTEGRATED PILLARS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Five Pillars. One Unified System.
            </h2>
            <p className="text-base text-slate-600">Click any pillar to explore its full framework and methodology.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              const c = colorMap[p.color];
              return (
                <Link
                  key={p.num}
                  to={p.path}
                  className={`group relative flex flex-col p-6 rounded-2xl bg-white border ${c.border} ${c.hover} hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity ${p.color === 'blue' ? 'from-blue-500 to-indigo-500' : p.color === 'rose' ? 'from-rose-500 to-pink-500' : p.color === 'violet' ? 'from-violet-500 to-purple-500' : p.color === 'emerald' ? 'from-emerald-500 to-teal-500' : 'from-indigo-500 to-blue-500'}`} />
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md ${c.badge} text-[10px] font-mono font-bold uppercase tracking-wider mb-4 self-start`}>
                    PILLAR {p.num}
                  </div>
                  <div className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} ${c.text} flex items-center justify-center mb-4`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-base font-bold text-slate-900 group-hover:${c.text} transition-colors font-heading mb-2`}>{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <div className={`pt-4 border-t ${c.border}`}>
                    <div className={`text-xl font-extrabold font-mono ${c.text} mb-0.5`}>{p.metric}</div>
                    <div className="text-[10px] text-slate-500 font-mono leading-tight">{p.metricLabel}</div>
                  </div>
                  <div className={`mt-3 text-xs font-mono font-bold ${c.text} flex items-center gap-1`}>
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW THE PILLARS CONNECT ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Network className="w-3.5 h-3.5" /> INTERCONNECTED SYSTEM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">The Unified Growth System</h2>
            <p className="text-base text-slate-600">Five pillars work in sequence. Each one feeds the next — turning diagnosis into autonomous acceleration.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-2 overflow-x-auto pb-2">
            {[
              { label: 'Revenue Physics', sub: 'Defines the laws', color: 'bg-blue-600', icon: Activity },
              { label: 'Friction Diagnostics', sub: 'Maps where growth stalls', color: 'bg-rose-600', icon: Radar },
              { label: 'AI Acceleration Engines', sub: 'Deploys autonomous systems', color: 'bg-violet-600', icon: Cpu },
              { label: 'Proprietary Growth Models', sub: 'Converts diagnosis to action', color: 'bg-emerald-600', icon: Layers },
              { label: 'Executive Telemetry', sub: 'Provides real-time visibility', color: 'bg-indigo-600', icon: LineChart },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.label}>
                  <div className={`flex-1 min-w-[160px] rounded-2xl ${item.color} p-5 text-white text-center flex flex-col items-center justify-center gap-2`}>
                    <Icon className="w-6 h-6 opacity-80" />
                    <div className="text-sm font-bold font-heading">{item.label}</div>
                    <div className="text-[11px] opacity-70 font-mono">{item.sub}</div>
                  </div>
                  {i < 4 && (
                    <div className="flex items-center justify-center text-slate-400 flex-shrink-0">
                      <ArrowRight className="w-5 h-5 lg:rotate-0 rotate-90" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT APPROACH ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Clock className="w-3.5 h-3.5" /> ENGAGEMENT TIMELINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">From Diagnosis to Realization in 90 Days</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: 'Days 1–14', title: 'Growth Diagnostic & Baseline Lock', desc: 'We audit every revenue lever — pipeline health, unit economics, tech stack, organizational friction. A diagnostic report locks the baseline metrics we will beat.', color: 'border-blue-500 bg-blue-50', badge: 'bg-blue-100 text-blue-700' },
              { phase: 'Days 15–45', title: 'Framework Deployment & Friction Mapping', desc: 'Proprietary growth models are calibrated to your context. Friction domains are mapped and quantified. Priority interventions are sequenced by leverage.', color: 'border-violet-500 bg-violet-50', badge: 'bg-violet-100 text-violet-700' },
              { phase: 'Days 46–90', title: 'AI Engine Activation & Telemetry Handover', desc: 'Autonomous AI agents go live. Executive telemetry dashboards are activated. The growth system runs — with measurable acceleration visible by Day 90.', color: 'border-emerald-500 bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700' },
            ].map(ph => (
              <div key={ph.phase} className={`rounded-2xl ${ph.color} border-l-4 p-7`}>
                <div className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider mb-4 ${ph.badge}`}>{ph.phase}</div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-3">{ph.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{ph.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE FAQ ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5" /> EXECUTIVE FAQS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">Questions Executives Ask</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="diagnostic" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> CONFIDENTIAL GROWTH DIAGNOSTIC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Ready to Engineer Predictable Growth?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Request a confidential Growth Diagnostic. We'll map your revenue system, identify the highest-leverage interventions, and show you exactly where the growth is hiding.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AiSalesIntakeForm pageContext="Growth & Acceleration Science" defaultService="Growth Diagnostic" />
        </div>
      </section>
    </div>
  );
}
