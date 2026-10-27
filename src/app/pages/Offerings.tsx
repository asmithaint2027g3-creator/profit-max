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
  Workflow,
  HeartPulse,
  BrainCircuit,
  Eye,
  Check,
  Building2,
  Boxes,
  HelpCircle,
  Gauge
} from 'lucide-react';
import OfferingsIntakeForm from '../components/forms/OfferingsIntakeForm';

export default function Offerings() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Offerings: Eight Ways to Engineer Revenue | ProfitMachines';
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

  // Situation Selector State
  const [situation, setSituation] = useState('stalled-pipeline');
  const [stage, setStage] = useState('scale');
  const [segment, setSegment] = useState('enterprise-b2b');
  const [recommendation, setRecommendation] = useState<{
    title: string;
    path: string;
    reason: string;
    metric: string;
  }>({
    title: 'Demand Engineering',
    path: '/offerings/demand-engineering',
    reason: 'Your pipeline stall is primarily driven by fragmented top-of-funnel channels and uncaptured buyer intent signals.',
    metric: '+40-60% Pipeline Lift'
  });

  const handleRecommendation = () => {
    if (situation === 'stalled-pipeline') {
      setRecommendation({
        title: 'Demand Engineering',
        path: '/offerings/demand-engineering',
        reason: 'Eliminate unpredictable inbound volume and unverified MQLs through engineered intent signal capture and autonomous outbound.',
        metric: '+40-60% Pipeline Lift'
      });
    } else if (situation === 'margin-leakage') {
      setRecommendation({
        title: 'Profit Pool Discovery',
        path: '/offerings/profit-pool-discovery',
        reason: 'Audit where contribution margin is lost through discretionary sales discounting and unmonetized cost-to-serve overhead.',
        metric: '5-15 Gross Margin Points Recovered'
      });
    } else if (situation === 'slow-deals') {
      setRecommendation({
        title: 'Sales Acceleration',
        path: '/offerings/sales-acceleration',
        reason: 'Compress long enterprise sales cycles and eliminate rep administrative friction with predictive Bayesian deal health.',
        metric: '-70% Late-Stage Deal Stall Rate'
      });
    } else if (situation === 'forecasting-misses') {
      setRecommendation({
        title: 'Revenue Operations',
        path: '/offerings/revenue-operations',
        reason: 'Replace subjective sales rep guesses with machine-learning predictive forecasting and multi-touch revenue attribution.',
        metric: '98% Model Accuracy · <5% Variance'
      });
    } else if (situation === 'churn-risk') {
      setRecommendation({
        title: 'Customer Success Engine',
        path: '/offerings/customer-success',
        reason: 'Deploy pre-churn behavioral detection and automated usage-based expansion triggers to compound Net Revenue Retention.',
        metric: '90% Churn Prediction · +25% Expansion'
      });
    } else if (situation === 'ai-governance') {
      setRecommendation({
        title: 'AI Trust & Governance',
        path: '/offerings/ai-trust-governance',
        reason: 'Ensure enterprise regulatory compliance with the EU AI Act, ISO 42001, and algorithmic fairness monitoring.',
        metric: '100% Certified Compliance'
      });
    } else {
      setRecommendation({
        title: 'GTM Transformation',
        path: '/offerings/gtm-transformation',
        reason: 'Re-engineer your cross-functional revenue motions from strategy design through sustained field adoption.',
        metric: '+60% Process Efficiency'
      });
    }
  };

  const categories = [
    {
      title: 'Profit Pool Discovery',
      path: '/offerings/profit-pool-discovery',
      icon: Search,
      metric: '5-15 Margin Points Recovered',
      desc: 'Audit the 16 discovery capabilities to pinpoint where profit concentrates and lock defensibility against top rivals.'
    },
    {
      title: 'Demand Engineering',
      path: '/offerings/demand-engineering',
      icon: Zap,
      metric: '+40-60% Pipeline Lift',
      desc: 'Predictable multi-channel demand architecture from intent signal fusion to autonomous outbound scheduling.'
    },
    {
      title: 'Sales Acceleration',
      path: '/offerings/sales-acceleration',
      icon: TrendingUp,
      metric: '-70% Deal Stall Rate',
      desc: 'Accelerate deal progression with predictive win-probability scoring, autonomous admin relief, and instant CPQ.'
    },
    {
      title: 'Revenue Operations',
      path: '/offerings/revenue-operations',
      icon: Gauge,
      metric: '98% Forecast Precision',
      desc: 'Unified revenue command center providing continuous pipeline telemetry, low variance, and full-funnel attribution.'
    },
    {
      title: 'GTM Transformation',
      path: '/offerings/gtm-transformation',
      icon: Workflow,
      metric: '-40% Sales Cycle Duration',
      desc: 'End-to-end modernization moving fragmented GTM teams into an integrated, autonomous revenue machine.'
    },
    {
      title: 'Customer Success Engine',
      path: '/offerings/customer-success',
      icon: HeartPulse,
      metric: '138% Average NRR',
      desc: 'Predictive churn mitigation and usage-triggered upsell engines to compound existing customer lifetime value.'
    },
    {
      title: 'Growth Intelligence',
      path: '/offerings/growth-intelligence',
      icon: Eye,
      metric: '+15% Price Realization',
      desc: 'Empirical primary buyer research, willingness-to-pay conjoint analysis, and competitor loss forensic modeling.'
    },
    {
      title: 'AI Trust & Governance',
      path: '/offerings/ai-trust-governance',
      icon: ShieldCheck,
      metric: '100% Regulatory Compliance',
      desc: 'Explainable AI architecture, bias monitoring, EU AI Act compliance, and executive board governance playbooks.'
    }
  ];

  const engagementModels = [
    { name: 'Diagnostic Sprint', desc: '4-week intensive diagnostic baselining all friction points and producing locked SOW targets.' },
    { name: 'Dedicated Architecture Pod', desc: 'Embedded Principal Revenue Systems Architects and autonomous software agents executing playbooks.' },
    { name: 'Shared-Risk Partnership', desc: 'Commercial model tied directly to recognized gross revenue and margin realization.' },
    { name: 'Enterprise Turnkey Modernization', desc: 'Full-scale re-engineering of RevOps, demand generation, and sales motion across 90 days.' },
    { name: 'Autonomous Agent Fleet License', desc: 'Deploy proprietary autonomous SDR, CPQ, and intent routing engines into your existing stack.' },
    { name: 'Executive Strategy Advisory', desc: 'Direct board-level guidance on GTM restructuring, pricing power, and multi-product packaging.' },
    { name: 'Regulatory AI Compliance Audit', desc: 'Comprehensive technical review ensuring alignment with EU AI Act, ISO 42001, and SOC2.' },
    { name: 'Continuous Telemetry Retainer', desc: 'Ongoing monthly performance auditing, Bayesian model retraining, and competitor loss forensics.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>THE PROFITMACHINES ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Eight Ways to Engineer Revenue.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              One Unified Architecture.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            From profit pool discovery to AI trust & governance, ProfitMachines delivers the complete revenue acceleration stack — engineered for measurable outcomes, not documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#situation-selector"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Get Your Custom Recommendation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <span>Explore the Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>THE ROOT CAUSE OF GTM BREAKDOWN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Fragmented GTM Fails
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enterprise revenue stalls when GTM operations are treated as disconnected department tools rather than a unified mathematical operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Disconnected Tools</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                25+ separate SaaS subscriptions operating in functional isolation, producing conflicting analytics and uncoordinated prospect communications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Unpredictable Pipeline</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Relying on ad-hoc outbound campaigns and unvalidated paid keywords generates inconsistent quarterly pipeline swings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Invisible Margin Leaks</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Discount creep, unbilled scope expansions, and high cost-to-serve customers quietly drain gross margins across closing deals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Stalled Revenue Growth</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Scaling headcount produces diminishing returns as rep administrative drag increases and cross-functional coordination collapses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE COMPLETE ARCHITECTURE STACK ── */}
      <section id="architecture" className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>THE UNIFIED STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Complete Revenue Acceleration Stack
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Eight interconnected layers spanning strategy, demand, sales execution, RevOps, and ethical governance.
            </p>
          </div>

          <div className="space-y-3">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className="group p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent text-slate-700 flex items-center justify-center shrink-0 transition-colors shadow-2xs font-mono font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">{cat.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {cat.metric}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SITUATION SELECTOR ── */}
      <section id="situation-selector" className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>INTERACTIVE SELECTOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              What Is Your Primary Revenue Challenge?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Select your current operating situation to receive an immediate architectural recommendation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">
                  Operating Situation
                </label>
                <select
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="stalled-pipeline">Stalled Top-of-Funnel Pipeline</option>
                  <option value="margin-leakage">Margin Leakage & Discount Creep</option>
                  <option value="slow-deals">Extended Sales Cycle Duration</option>
                  <option value="forecasting-misses">Inaccurate Quarterly Forecasting</option>
                  <option value="churn-risk">Account Churn & Low Expansion</option>
                  <option value="ai-governance">AI Regulatory & Model Risk</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">
                  Enterprise Stage
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="scale">Growth Stage ($10M - $50M ARR)</option>
                  <option value="mid-market">Mid-Market ($50M - $150M ARR)</option>
                  <option value="enterprise">Global Enterprise ($150M+ ARR)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">
                  Market Motion
                </label>
                <select
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="enterprise-b2b">High-Value Enterprise B2B</option>
                  <option value="multi-product">Multi-Product SaaS Platform</option>
                  <option value="high-compliance">High-Compliance / Regulated Sector</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <button
                type="button"
                onClick={handleRecommendation}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                Analyze & Recommend Engine
              </button>
            </div>

            {/* Recommendation Result Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-500/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                    Recommended Architecture Solution
                  </span>
                  <h4 className="text-2xl font-bold font-heading text-white">{recommendation.title}</h4>
                </div>
                <div className="text-xs font-mono px-3 py-1 rounded bg-blue-900/60 text-blue-300 font-bold border border-blue-700">
                  Target Outcome: {recommendation.metric}
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{recommendation.reason}</p>
              <Link
                to={recommendation.path}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 font-mono uppercase tracking-wider"
              >
                <span>Explore Full {recommendation.title} Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: 8 CATEGORY CARDS (2x4 Grid) ── */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>THE 8 ACCELERATION ENGINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Explore Our Dedicated Offerings
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Each offering features an exclusive operational architecture built for enterprise scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent text-blue-600 flex items-center justify-center mb-5 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">{cat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{cat.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-xs font-mono font-bold text-emerald-600 mb-3">{cat.metric}</div>
                    <Link
                      to={cat.path}
                      className="inline-flex items-center justify-between w-full text-xs font-mono font-bold text-blue-600 group-hover:text-blue-700 uppercase tracking-wider"
                    >
                      <span>Explore Engine</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: DUAL-TRACK PROMISE ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE EXECUTION GUARANTEE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              We Don't Just Advise. We Build the Machine.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every client engagement couples strategic systems architecture with autonomous software deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">Strategic Advisory Track</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Senior Revenue Architects perform deep diagnostics, analyze customer profit pools, rewrite commercial pricing guardrails, and realign sales compensation models.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-700">
                <li className="flex items-center gap-2">✓ Principal Systems Architect access</li>
                <li className="flex items-center gap-2">✓ SOW-locked financial baseline agreements</li>
                <li className="flex items-center gap-2">✓ 30-day proof cadences & realization reviews</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-3">Autonomous Systems Track</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                We engineer and deploy autonomous SDR agents, CRM telemetry guardrails, Bayesian win-probability predictors, and real-time RevOps HUDs directly into your production stack.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">✓ Custom autonomous software agent fleets</li>
                <li className="flex items-center gap-2">✓ Zero code-lockin; you keep the models</li>
                <li className="flex items-center gap-2">✓ Sub-second real-time webhook routing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ENGAGEMENT MODELS ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>COMMERCIAL FLEXIBILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Eight Ways to Partner
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Commercial engagement structures aligned to your organizational maturity, urgency, and balance sheet requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagementModels.map((em, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading mb-2">{em.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{em.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: DISCOVERY FRAMEWORK TEASER ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-2">
                FLAGSHIP DISCOVERY ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3">
                The Revenue Discovery Framework
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Explore our comprehensive discovery framework uniting 4 Discovery Pillars and 16 Discovery Capabilities. Learn how our Revenue Realization Process turns empirical discovery findings into contractual financial baselines.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/offerings/profit-pool-discovery"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>View Full Discovery Framework</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXECUTIVE INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Engineer Your Revenue Machine?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Schedule a diagnostic session with our Senior Revenue Systems Architects to evaluate your active GTM architecture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Offerings Master Hub"
            defaultObjective="Revenue Operations"
          />
        </div>
      </section>
    </div>
  );
}
