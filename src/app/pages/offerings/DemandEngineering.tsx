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
  Filter,
  Users,
  Radio,
  FileText,
  Clock,
  Check
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function DemandEngineering() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Demand Engineering | Predictable Multi-Channel Revenue Systems | ProfitMachines';
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

  const funnelStages = [
    {
      step: '01',
      title: 'Intent Data Platform',
      id: 'intent-data',
      headline: 'Sub-Second Signal Capture & Propensity Routing',
      metric: '100% Intent Capture · <1s Routing Latency',
      description: 'Fuses first-party web telemetry, third-party dark intent, hiring surges, and technology install changes into one real-time demand radar.',
      tags: ['Signal Fusion', 'Nightly Decile Scoring', 'CRM Routing']
    },
    {
      step: '02',
      title: 'Account-Based Marketing',
      id: 'abm',
      headline: 'Multi-Threaded Account Orchestration',
      metric: '+200% Account Engagement · +150% Pipeline',
      description: 'Orchestrates dynamic ad impressions, personalized landing pages, and executive gift sequences tailored to buying committee roles.',
      tags: ['Buying Committee Mapping', 'Dynamic Ads', 'Account Penetration']
    },
    {
      step: '03',
      title: 'Demand Generation Engine',
      id: 'demand-generation',
      headline: 'Predictable Paid & Organic Inbound Flow',
      metric: '+40-60% Pipeline Lift · -35% Blended CAC',
      description: 'Engineers high-intent conversion pathways across paid search, social algorithms, and programmatic syndication with mathematical unit economics.',
      tags: ['Unit Economic Bidding', 'Conversion Science', 'CAC Defense']
    },
    {
      step: '04',
      title: 'Content-to-Pipeline System',
      id: 'content-pipeline',
      headline: 'High-Authority Narrative Engineering',
      metric: '+200% Sourced Pipeline · 95% Attribution',
      description: 'Replaces generic blog posts with deep architectural teardowns, ROI benchmark calculators, and peer-reviewed technical whitepapers that buyers read.',
      tags: ['Architecture Teardowns', 'ROI Calculators', 'Technical Whitepapers']
    },
    {
      step: '05',
      title: 'Outbound Acceleration',
      id: 'outbound',
      headline: 'Autonomous SDR Fleets & Hyper-Personalization',
      metric: '3.8x Meeting Velocity · +150% Reply Rate',
      description: 'Deploys autonomous SDR software agents to conduct 10-K deep research, verify tech stacks, draft individualized propositions, and book AE calendars.',
      tags: ['Autonomous SDR', '10-K Analysis', 'Zero Lead Loss']
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
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>THE COMPLETE DEMAND ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Engineer Predictable Demand.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              From First Signal to Closed Pipeline.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            Replace unpredictable quarterly pipeline with engineered demand systems. From multi-source intent signal fusion to autonomous outbound routing, we engineer the complete inbound and outbound capture infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Engineer Your Demand System</span>
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
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">+40-60%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Pipeline Volume Lift</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">-35%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Blended Acquisition Cost</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">3.8x</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Meeting Booking Velocity</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">&lt;1 Sec</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Intent Signal Routing</div>
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
              <span>THE DEMAND BOTTLENECK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Demand Remains Unpredictable
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Most B2B enterprises run demand as a disconnected series of disparate campaigns. The result is spiraling acquisition costs, stalled deals, and zero mathematical certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Escalating Acquisition CAC</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ad platforms raise bidding prices while organic conversion deteriorates. Marketing spend grows 40% year-over-year while pipeline output remains entirely flat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Disconnected Channel Operations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Paid search agencies, outbound SDR contractors, and event teams operate in silos with conflicting attribution claims and zero unified account intelligence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Low Stage Conversion Rates</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leads download high-level eBooks but never show buying intent. Sales reps waste 60% of their working hours chasing unqualified contacts who will never purchase.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Zero Reliable Attribution</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leadership cannot mathematically verify which channels, campaigns, or reps generated real closed revenue, leading to arbitrary budget cutbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE ARCHITECTURE OVERVIEW ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Filter className="w-3.5 h-3.5" />
              <span>FIVE INTEGRATED ENGINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Demand Engineering Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Five synchronized systems functioning as one continuous demand pipeline — capturing raw market intent and delivering pre-qualified, sales-ready meetings to Account Executives.
            </p>
          </div>

          <div className="space-y-4">
            {funnelStages.map((stage) => (
              <div
                key={stage.id}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-mono font-extrabold flex items-center justify-center text-lg shrink-0 shadow-md shadow-blue-600/20">
                    {stage.step}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-1">
                      {stage.title}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">{stage.headline}</h3>
                    <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-3">{stage.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-left lg:text-right shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engine KPI Target</div>
                  <div className="text-base font-extrabold text-slate-900 font-mono mt-1 text-emerald-600">{stage.metric}</div>
                  <a
                    href={`#${stage.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 mt-2 font-mono uppercase tracking-wider"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DEMAND GENERATION ENGINE DEEP DIVE ── */}
      <section id="demand-generation" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Engine Specification 01
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Demand Generation Engine
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Engineers high-intent conversion pathways across paid search, professional social feeds, and programmatic syndication. We replace vanity impressions with algorithmic bidding tied directly to downstream pipeline creation.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Algorithmic cross-platform budget reallocation based on cost-per-pipeline</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated landing page variant deployment with micro-cohort messaging</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real-time CAC protection thresholds pausing inefficient creative assets</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 inline-flex items-center gap-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Pipeline Lift</div>
                  <div className="text-xl font-extrabold text-blue-600 font-mono">+40-60%</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Blended CAC</div>
                  <div className="text-xl font-extrabold text-emerald-600 font-mono">-35% Reduction</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold mb-4">
                  Continuous Optimization Cycle
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">Daily Bidding Telemetry & Budget Defense</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Every 24 hours, conversion attribution models reconcile CRM stage progressions against ad spend. Underperforming ad sets are automatically throttled, re-routing capital into keywords generating verified meetings.
                </p>
                <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  Deliverable: Algorithmic Inbound Playbook + Live Multi-Touch Attribution Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ACCOUNT-BASED MARKETING (ABM) ── */}
      <section id="abm" className="py-20 sm:py-24 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold mb-4">
                  Multi-Threaded Committee Scoring
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">Full Buying Committee Engagement</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  B2B deals require 6-10 stakeholders. Our ABM architecture surrounds the economic buyer, technical validator, security officer, and end user with tailored propositions simultaneously.
                </p>
                <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  Deliverable: Target Account Penetration Matrix + Persona-Specific Content Assets
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Engine Specification 02
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Account-Based Marketing (ABM)
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Surgically penetrate named tier-1 enterprise accounts through coordinated IP-based display, bespoke executive hubs, and intent-triggered outreach sequences.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dynamic website personalization recognizing visitors by domain & industry</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>IP-targeted digital advertising reaching C-suite executives on business networks</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Buying committee progression heatmaps identifying stalled stakeholders</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 inline-flex items-center gap-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Account Engagement</div>
                  <div className="text-xl font-extrabold text-blue-600 font-mono">+200% Lift</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Pipeline Contribution</div>
                  <div className="text-xl font-extrabold text-emerald-600 font-mono">+150% Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: OUTBOUND ACCELERATION ── */}
      <section id="outbound" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Engine Specification 03
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Outbound Acceleration
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Eliminate spammy cold outreach. Deploy autonomous SDR software agents to perform deep 10-K analysis, detect rival pain points, craft bespoke business cases, and book qualified AE meetings 24/7.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deep account research analyzing public SEC filings, hiring, and earnings calls</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1:1 hyper-personalized messaging referencing active enterprise initiatives</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Autonomous objection handling routing complex queries directly into calendars</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 inline-flex items-center gap-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Booking Velocity</div>
                  <div className="text-xl font-extrabold text-blue-600 font-mono">3.8x Meetings</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Verified Reply Rate</div>
                  <div className="text-xl font-extrabold text-emerald-600 font-mono">+150% Increase</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold mb-4">
                  Autonomous Fleet Operation
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">Zero Human Lead Fatigue</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Human SDRs burn out after 50 cold calls a day. Autonomous SDR fleets execute thousands of highly customized touches nightly without deliverability penalties, maintaining pristine domain reputation.
                </p>
                <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  Deliverable: Autonomous Outbound Engine + Domain Warmup Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CONTENT-TO-PIPELINE ── */}
      <section id="content-pipeline" className="py-20 sm:py-24 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold mb-4">
                  Evidence-Based Content Architecture
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">Systems-Level Authority</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Enterprise CTOs and CFOs reject generic SEO fluff. We publish high-density technical teardowns, verified benchmark models, and proprietary frameworks that establish undeniable category leadership.
                </p>
                <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  Deliverable: 12-Month Executive Thought Leadership Kit + Interactive Calculators
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Engine Specification 04
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Content-to-Pipeline Engine
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Convert intellectual property into measurable inbound pipeline. High-authority narrative assets engineered to educate buyers through complex evaluation cycles.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Technical architectural teardowns comparing incumbent vs. modern solutions</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proprietary ROI and margin calculators embedded with lead capture</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Peer-reviewed industry research benchmark studies</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 inline-flex items-center gap-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Sourced Pipeline</div>
                  <div className="text-xl font-extrabold text-blue-600 font-mono">+200% Increase</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Attribution Confidence</div>
                  <div className="text-xl font-extrabold text-emerald-600 font-mono">95% Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: INTENT DATA PLATFORM ── */}
      <section id="intent-data" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Engine Specification 05
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Intent Data Platform
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Never call cold again. Our signal fusion platform identifies which accounts are actively researching your category, scores their propensity to buy, and dispatches sales triggers in under a second.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>First-party website visitor de-anonymization down to specific company branches</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Third-party dark funnel topic research monitoring across B2B publications</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant CRM account routing with pre-populated contextual talk tracks</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 inline-flex items-center gap-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Intent Capture</div>
                  <div className="text-xl font-extrabold text-blue-600 font-mono">100% Signal Pool</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Routing Latency</div>
                  <div className="text-xl font-extrabold text-emerald-600 font-mono">&lt;1 Second</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold mb-4">
                  Predictive Propensity Scoring
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">Nightly Decile Calculations</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Every account in your target market is rescored nightly across engagement, hiring spikes, funding events, and tech stack telemetry. Reps focus 100% of their outreach on decile 1 accounts.
                </p>
                <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  Deliverable: Real-Time Signal Ingestion Pipeline + Automated Webhook Routing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: THE FUNNEL VISUAL ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>UNIFIED CONVERSION TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Complete Demand Funnel
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              How the 5 demand engineering systems interlock to create an uninterrupted revenue pipeline.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl">
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm font-mono">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Intent Data Platform (Top-of-Funnel Signals)</h4>
                    <p className="text-xs text-slate-400">Captures unannounced buyer research signals across the global web</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-400 font-bold hidden sm:inline">100% Capture</span>
              </div>

              <div className="flex justify-center text-slate-500">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm font-mono">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Account-Based Marketing & Paid Demand Gen</h4>
                    <p className="text-xs text-slate-400">Surrounds active accounts with role-specific propositions & ads</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold hidden sm:inline">+200% Reach</span>
              </div>

              <div className="flex justify-center text-slate-500">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm font-mono">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Content-to-Pipeline Conversion Layer</h4>
                    <p className="text-xs text-slate-400">Guides buying committees through technical evaluations and calculators</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 font-bold hidden sm:inline">95% Attribution</span>
              </div>

              <div className="flex justify-center text-slate-500">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm font-mono">4</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Autonomous Outbound Acceleration</h4>
                    <p className="text-xs text-slate-400">Books qualified meetings directly into AE calendars with zero delay</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-400 font-bold hidden sm:inline">3.8x Velocity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: VERIFIED OUTCOMES ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>VERIFIED PERFORMANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Contracted Outcome Baselines
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every demand engineering deployment is governed by contractual performance baselines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-600 font-mono mb-2">+52%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Average Pipeline Lift</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Measured over 180 days across enterprise B2B client deployments.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">-35%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">CAC Reduction</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Achieved through programmatic budget throttling and waste elimination.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-purple-600 font-mono">3.8x</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Meeting Generation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">AE discovery calls booked via autonomous personalized outbound fleets.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-indigo-600 font-mono">95%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Attribution Confidence</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Every closed dollar mathematically attributed to touchpoint sequences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DEMAND SYSTEM DEPLOYMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Engineer a Predictable Demand Machine?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Schedule a demand architecture session with our Principal Revenue Systems Architects to baseline your CAC and model pipeline output.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Demand Engineering Architecture Session"
            defaultObjective="Demand Engineering"
          />
        </div>
      </section>
    </div>
  );
}
