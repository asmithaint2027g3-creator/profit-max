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
  BrainCircuit,
  Eye,
  LineChart,
  Lightbulb,
  Check
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function GrowthIntelligence() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Growth Intelligence | Empirical Market Research & Pricing Power | ProfitMachines';
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

  const intelligencePillars = [
    {
      id: 'market-research',
      title: 'Empirical Market Research',
      pillar: 'Intelligence Pillar 01 · TAM & Whitespace',
      headline: 'Deep Buyer Interviews & Whitespace Extraction',
      metric: '90% Concept Validation · -60% Market Entry Failure',
      description: 'Replaces superficial analyst reports with primary buyer interviews, discreet vendor perception studies, and customer unit-margin profiling.',
      deliverables: ['Primary Buyer Interview Dossiers', 'Whitespace Opportunity Matrix', 'Market Entry Financial Models']
    },
    {
      id: 'competitive-intel',
      title: 'Competitive Counter-Intelligence',
      pillar: 'Intelligence Pillar 02 · Rival Dissection',
      headline: 'Real-Time Competitor Feature & Pricing Forensics',
      metric: 'Detection <10 Days · +15% Win Rate vs Rivals',
      description: 'Continuous monitoring of competitor release notes, customer dissatisfaction spikes, pricing changes, and contract renewal vulnerabilities.',
      deliverables: ['Competitor Architectural Teardowns', 'Live CRM Battlecards', 'Win/Loss Forensics Engine']
    },
    {
      id: 'pricing',
      title: 'Pricing Power & Monetization',
      pillar: 'Intelligence Pillar 03 · Willingness-to-Pay',
      headline: 'Conjoint Analysis & Gross Margin Protection',
      metric: '+15% Price Realization · +10% Gross Margin Lift',
      description: 'Calculates price elasticity and willingness-to-pay across micro-segments. Establishes packaging ladders that eliminate discretionary discounting.',
      deliverables: ['Conjoint Elasticity Models', 'Packaging & Tiering Strategy', 'Discount Guardrail Ruleset']
    },
    {
      id: 'product-growth',
      title: 'Product Growth Telemetry',
      pillar: 'Intelligence Pillar 04 · Feature Monetization',
      headline: 'Product-Led Growth Loops & Feature Adoption',
      metric: '+40% Feature Adoption · +80% Forecast Predictability',
      description: 'Identifies which software features correlate directly with renewal and expansion. Replaces guesswork roadmap decisions with revenue-backed signals.',
      deliverables: ['Feature-to-Revenue Correlation Model', 'Product-Led Growth Loops', 'Roadmap Prioritization Matrix']
    }
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Primary Signal Extraction',
      desc: 'Discreet primary buyer interviews, dark web telemetry, and competitive contract leak forensics. No secondary recycled analyst reports.'
    },
    {
      step: '02',
      title: 'Econometric Modeling',
      desc: 'Conjoint pricing elasticity, customer-level gross margin analysis, and market defensibility stress-testing.'
    },
    {
      step: '03',
      title: 'Stress-Testing & Verification',
      desc: 'Validating concepts with real enterprise buyers through pre-order commitments before engineering commits production code.'
    },
    {
      step: '04',
      title: 'Execution Integration',
      desc: 'Dossiers, battlecards, and pricing floors compiled directly into CRM, sales enablement, and executive strategy dashboards.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>GROWTH INTELLIGENCE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Grow with Intelligence.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Research-Backed Decisions. Data-Driven Expansion.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            Replace intuition-based executive bets with empirical market research and competitive forensics. From willingness-to-pay conjoint analysis to product growth telemetry, we de-risk enterprise expansion.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Unlock Growth Intelligence</span>
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
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Validation Accuracy</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">&lt;10 Days</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Rival Shift Detection</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">+15%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Price Realization Lift</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">-60%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Market Entry Failure Rate</div>
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
              <span>THE INTUITION DEFICIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Executive Guesswork Wastes Capital
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Multi-million dollar roadmaps and pricing tiers are frequently finalized around conference tables without empirical buyer validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Decisions on Executive Gut</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strategic initiatives launch because a senior leader saw a competitor do it, rather than measuring actual customer willingness-to-pay.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Unrecognized Competitor Threats</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rivals alter pricing packages or bundle disruptive modules. Traditional market research spots these shifts 6 months too late.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Underpriced Enterprise Value</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Companies charge $50k for capabilities that save enterprise buyers $2M annually, forfeiting massive gross margin through fear of pushback.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Wasted Engineering Sprints</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineering teams ship complex software modules that fewer than 5% of customers ever touch, draining precious R&D resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 INTELLIGENCE PILLARS ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>THE 4 INTELLIGENCE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Intelligence-Driven Growth Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Four specialized analytical engines delivering empirical decision support to executive leadership teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {intelligencePillars.map((pillar) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between scroll-mt-28"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {pillar.pillar}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 text-emerald-600 font-bold">
                      {pillar.metric.split('·')[0]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">{pillar.title}</h3>
                  <div className="text-xs font-mono text-slate-500 font-semibold mb-3">{pillar.headline}</div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2">
                    {pillar.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="text-xs font-mono px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 font-medium">
                        ✓ {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: RESEARCH METHODOLOGY ── */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>EMPIRICAL RESEARCH METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              The Scientific Discovery Method
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              How ProfitMachines validates market opportunities with mathematical rigor before capital is deployed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-mono font-extrabold text-blue-400 mb-3">{m.step}</div>
                  <h4 className="text-base font-bold text-white mb-2 font-heading">{m.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GROWTH INTELLIGENCE INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to De-Risk Your Growth Strategy With Empirical Intelligence?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Schedule a growth intelligence briefing with our Principal Research Architects to model pricing power and competitor displacement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Growth Intelligence Architecture Session"
            defaultObjective="Growth Intelligence"
          />
        </div>
      </section>
    </div>
  );
}
