import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap, 
  Clock, 
  Search, 
  Database, 
  Layers, 
  Send, 
  PhoneCall, 
  Linkedin, 
  Calendar, 
  Filter, 
  ChevronRight,
  Activity,
  BarChart3,
  AlertCircle,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function ProspectingPipelinePage() {
  const [activeFlowStep, setActiveFlowStep] = useState<number>(0);

  useEffect(() => {
    document.title = 'AI Prospecting & Pipeline Generation: Fill Pipeline Predictably | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const flowSteps = [
    {
      title: "Intent Signal Detection",
      badge: "Real-time 40+ Feeds",
      desc: "Captures 1st, 2nd, and 3rd party in-market intent surges, dark funnel research, and competitive hiring changes in sub-seconds.",
      metric: "98.4% Precision"
    },
    {
      title: "Autonomous Account Enrichment",
      badge: "Deep Graph Fusion",
      desc: "Extracts verified multi-threaded committee contacts, technographic stacks, and recent budget announcements without manual scraping.",
      metric: "50+ Data Sources"
    },
    {
      title: "Hyper-Personalized Synthesis",
      badge: "Context Engine",
      desc: "Drafts bespoke multi-channel value propositions referencing exact buyer pain points, regulatory headwinds, and vendor contracts.",
      metric: "150% Reply Lift"
    },
    {
      title: "Autonomous Qualification",
      badge: "BANT / MEDDPICC",
      desc: "Handles nuanced buyer replies, overcomes technical objections, and locks qualified calendar slots directly onto Account Executive schedules.",
      metric: "75-80% Auto-Sourced"
    }
  ];

  const outcomes = [
    {
      value: "3-5X",
      label: "Meeting Velocity Lift",
      desc: "Acceleration in qualified executive discovery sessions booked on calendar per quarter."
    },
    {
      value: "40-50%",
      label: "Blended CAC Reduction",
      desc: "Reduction in customer acquisition cost through deterministic multi-channel intent targeting."
    },
    {
      value: "150%",
      label: "Reply Rate Increase",
      desc: "Lift in verified positive prospect reply rates compared to static template cadences."
    },
    {
      value: "75-80%",
      label: "Auto-Sourced SQLs",
      desc: "Of sales-qualified opportunities sourced and pre-vetted with zero manual human SDR intervention."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* ── SECTION 1: HERO (COMMAND CENTER DARK HERO WITH FLOW VISUAL) ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="font-mono text-indigo-400 font-extrabold">CAPABILITY PILLAR 02 OF 06</span>
            <span className="text-slate-600 font-normal">//</span>
            <span>AUTONOMOUS OUTBOUND</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-heading max-w-4xl">
            AI Prospecting & Pipeline Generation:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
              Fill Pipeline Predictably
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            Autonomous engines that research, reach, qualify, and book — replacing manual SDR labor with deterministic, always-on pipeline generation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#audit" 
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/30 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider"
            >
              <span>Schedule Prospecting Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/ai-native-sales" 
              className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider"
            >
              <span>Explore Other Capabilities</span>
              <ChevronRight className="w-4 h-4 text-blue-400" />
            </Link>
          </div>

          {/* Interactive Horizontal Prospect Journey Flow Visual */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">Autonomous Outbound Telemetry</span>
                <h3 className="text-lg font-bold text-white mt-1 font-heading">Prospect-to-Calendar Qualification Pipeline</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-400">Processing 1,280 target accounts concurrently</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {flowSteps.map((step, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveFlowStep(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all text-left relative group ${
                    activeFlowStep === idx 
                      ? 'bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/30' 
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">{step.badge}</span>
                    <span className="text-xs font-mono font-bold text-blue-400">{step.metric}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 font-heading leading-tight">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 1: AI PROSPECTING ENGINE ── */}
      <section id="engine" className="py-20 sm:py-24 border-b border-slate-200 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Search className="w-3.5 h-3.5" />
                <span>AI PROSPECTING ENGINE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Autonomous Discovery and Deep Account Research
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Autonomous discovery and research of ideal prospects at massive scale.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-600">
                  3-5X
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Meeting velocity lift across target enterprise accounts
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "SDRs spent 4 hours researching each account before sending one email"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Lead Discovery',
                  desc: 'AI identifies and prioritizes leads from intent, behavioral, and firmographic signals.',
                  icon: Search,
                  tag: 'Intent-Driven'
                },
                {
                  title: 'Contact Discovery',
                  desc: 'Automated extraction and verification of decision-maker contact data across accounts.',
                  icon: Users,
                  tag: 'Committee Extraction'
                },
                {
                  title: 'Data Enrichment',
                  desc: 'Real-time enrichment from 50+ sources (LinkedIn, Crunchbase, technographics).',
                  icon: Database,
                  tag: '50+ Data Sources'
                },
                {
                  title: 'Prospect Research',
                  desc: 'Autonomous deep-dive research on every prospect before first touch with synthesized pain dossiers.',
                  icon: Sparkles,
                  tag: 'Context Synthesis'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 2: DEMAND GENERATION ── */}
      <section id="demand" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Target className="w-3.5 h-3.5" />
                <span>DEMAND GENERATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Engineer Predictable Demand via ICP Precision
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Engineer predictable demand through ICP precision and multi-channel orchestration.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 mb-6 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-indigo-600">
                  40-50%
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Reduction in blended customer acquisition cost (CAC)
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "Marketing generated MQLs that sales refused to call"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'ICP Modeling',
                  desc: 'Neural ICP definition based on closed-won patterns, not firmographic guesswork.',
                  icon: Layers,
                  tag: 'Closed-Won Fitted'
                },
                {
                  title: 'Audience Segmentation',
                  desc: 'Dynamic micro-segmentation that adapts to buying behavior and trigger signals in real time.',
                  icon: Filter,
                  tag: 'Behavioral Micro-Tiers'
                },
                {
                  title: 'Demand Capture',
                  desc: 'Multi-channel capture of in-market demand across all touchpoints with sub-second routing.',
                  icon: Zap,
                  tag: 'Sub-Second Routing'
                },
                {
                  title: 'Campaign Intelligence',
                  desc: 'Real-time optimization of campaign performance by segment and channel based on revenue return.',
                  icon: BarChart3,
                  tag: 'Revenue Yield'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 3: OUTREACH AUTOMATION ── */}
      <section id="outreach" className="py-20 sm:py-24 border-b border-slate-200 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Mail className="w-3.5 h-3.5" />
                <span>OUTREACH AUTOMATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Hyper-Personalized Multi-Channel Outreach
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Hyper-personalized, multi-channel outreach at scale with human-like quality.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-sky-600">
                  150%
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Increase in reply rates vs. template-based outreach
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-sky-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "Generic templates got 2% reply rates; we needed personalization at scale"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Email Outreach Automation',
                  desc: 'Autonomous email drafting, sending, and follow-up sequences tailored to buyer roles.',
                  icon: Mail,
                  tag: 'Contextual Email'
                },
                {
                  title: 'LinkedIn Automation',
                  desc: 'Personalized connection requests, messages, and content engagement with human timing.',
                  icon: Linkedin,
                  tag: 'Executive Social'
                },
                {
                  title: 'AI Voice Outreach',
                  desc: 'Autonomous voice agents for initial qualification and direct meeting setting.',
                  icon: PhoneCall,
                  tag: 'Conversational Voice'
                },
                {
                  title: 'Omnichannel Engagement',
                  desc: 'Coordinated multi-channel sequences that adapt to prospect response and channel affinity.',
                  icon: Activity,
                  tag: 'Adaptive Cadence'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 4: LEAD QUALIFICATION ── */}
      <section id="qualification" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>LEAD QUALIFICATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Separate Genuine Buyers from Casual Browsers
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Autonomous qualification that separates real buyers from tire-kickers.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 mb-6 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">
                  75-80%
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Of SQLs auto-sourced with zero manual intervention
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "AEs were wasting time on unqualified meetings that should never have been booked"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Buyer Intent Detection',
                  desc: 'Real-time identification of genuine buying signals vs. research browsing through heuristics.',
                  icon: Activity,
                  tag: 'Intent Heuristics'
                },
                {
                  title: 'Lead Scoring',
                  desc: 'Predictive scoring that combines 40+ signals into single probability metric.',
                  icon: BarChart3,
                  tag: '40+ Signals'
                },
                {
                  title: 'Qualification Automation',
                  desc: 'Autonomous BANT/MEDDPICC qualification through conversational AI before calendar booking.',
                  icon: CheckCircle2,
                  tag: 'Conversational BANT'
                },
                {
                  title: 'Meeting Booking',
                  desc: 'Automated scheduling of qualified meetings directly into AE calendars with full context dossiers.',
                  icon: Calendar,
                  tag: 'Calendar Direct'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: VERIFIED OUTCOMES GRID ── */}
      <section id="outcomes" className="py-20 sm:py-24 border-b border-slate-200 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <span>QUANTIFIED PIPELINE ACCELERATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Outbound & Pipeline Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
              Audited production metrics across enterprise deployments operating with deterministic AI prospecting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:bg-white transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-900 mb-3 tracking-tight">
                  {item.value}
                </div>
                <div className="text-base font-bold text-slate-900 mb-2 font-heading">
                  {item.label}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (3 CROSS-LINKS) ── */}
      
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
              Every AI Prospecting & Pipeline capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Volume Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Continuous 24/7 Flow</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Autonomous Verified Leads Generated</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Enterprise Prospects Researched, Enriched, and Verified per Cycle
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Number of decision-makers matching precise buying committee criteria ingested into active outbound.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Guarantees the sales pipeline never starves for verified, high-authority prospective executive contacts.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Quality Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">12-18% Response Rate</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Positive Executive Response Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Prospects Replying with In-Market Interest / Total Outbound Engaged) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of personalized outbound touches that produce positive commercial dialogue with buyers.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Reflects messaging relevance, timing precision, and deep account personalization quality.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Velocity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">3-5x Meeting Lift</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Discovery Meeting Booking Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Confirmed Qualified Meetings Scheduled / Total Positive Responses) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Efficiency of autonomous agents in navigating calendar coordination and securing executive attendance.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Fills Account Executive calendars with qualified buyers without human SDR administrative friction.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Conversion Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;60% Held-to-Opp Rate</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Lead-to-Opportunity Progression</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Meetings Resulting in Active Mutual Evaluation / Total Discovery Meetings Held) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of booked meetings that pass formal qualification criteria and advance to active pipeline.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Protects account executives from low-quality meetings, ensuring time is spent on legitimate pipeline.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Unit Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">-65% Cost Reduction</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Cost per Qualified Lead (CPQL)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Outbound Infrastructure & AI Compute Expense / Total SQLs Produced
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Fully loaded commercial expenditure required to deliver an enterprise sales-qualified meeting.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Dramatically improves GTM unit economics compared to maintaining large manual SDR teams with high turnover.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Compounding Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;70% Sourced by Agents</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Autonomous Sourced Pipeline Volume</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> ∑ (AI-Sourced Opportunities Advanced to Stage 2+ × Average Contract ACV)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Total dollar volume of qualified enterprise sales pipeline initiated entirely by autonomous agent swarms.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Establishes a predictable, machine-scaled pipeline generation engine that compounds quarter over quarter.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="related" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase tracking-widest mb-3">
                <span>INTERCONNECTED TELEMETRY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Pipeline Streams into Every Other Capability
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md mt-3 md:mt-0 font-normal">
              Autonomous pipeline discovery links seamlessly with revenue intelligence and sales execution engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cross-Link 1: Revenue Intelligence */}
            <Link
              to="/ai-native-sales/revenue-intelligence"
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 mb-4 inline-block">
                  Feeds Prospecting
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading mb-3">
                  Revenue Intelligence →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Four intelligence engines fuse 40+ dark-funnel feeds to surface accounts ready to buy before manual research begins.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono font-bold text-blue-600 flex items-center justify-between">
                <span>Explore Intelligence</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Cross-Link 2: AI Sales Execution */}
            <Link
              to="/ai-native-sales/sales-execution"
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 mb-4 inline-block">
                  Receives Qualified Pipeline
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-heading mb-3">
                  AI Sales Execution →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pre-qualified BANT/MEDDPICC opportunities flow directly into deal progression, instant proposals, and pricing gates.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono font-bold text-indigo-600 flex items-center justify-between">
                <span>Explore Sales Execution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Cross-Link 3: AI Sales Agents */}
            <Link
              to="/ai-native-sales/agents"
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-violet-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="text-[11px] font-mono font-bold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-lg border border-violet-200 mb-4 inline-block">
                  SDR Agent Executes
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors font-heading mb-3">
                  AI Sales Agents →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deploy autonomous SDR Agents that work 24/7/365 to research, engage, and schedule meetings with zero turnover.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono font-bold text-violet-600 flex items-center justify-between">
                <span>Explore Sales Agents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA & INTAKE FORM ── */}
      <section id="audit" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            <span>CONFIDENTIAL PROSPECTING AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Ready to Fill Your Pipeline Predictably?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Schedule a confidential platform architecture review with our Principal Revenue Systems Architects to evaluate your outbound throughput.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AiSalesIntakeForm
            pageContext="AI Prospecting & Pipeline Audit"
            defaultService="Autonomous Outbound Diagnostic"
          />
        </div>
      </section>
    </div>
  );
}
