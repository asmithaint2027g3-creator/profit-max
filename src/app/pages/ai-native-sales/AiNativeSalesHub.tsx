import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Users, ShieldCheck,
  CheckCircle2, TrendingUp, Activity, Zap, Layers, Sparkles,
  Lock, Target, Cpu, BarChart3, Network, Clock, ShieldAlert,
  Server, Database, ChevronRight, ChevronDown, HelpCircle,
  Radar, Globe, DollarSign, Eye, LineChart, FileText, CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { allAiSalesCapabilityPages } from './data';

export default function AiNativeSalesHub() {
  const [selectedCapabilityIndex, setSelectedCapabilityIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'AI Native Sales: Autonomous Revenue Operating System | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const selectedCap = allAiSalesCapabilityPages[selectedCapabilityIndex];

  const challenges = [
    {
      title: 'Fragmented Buyer Understanding',
      description: 'Buyer intent, account data, stakeholder information, and market changes are spread across different systems. Teams struggle to see which accounts are genuinely ready to buy.',
      symptom: 'Reps waste 68% of capacity on cold accounts while in-market accounts sign with rivals.',
      tag: 'Telemetry Void'
    },
    {
      title: 'Inconsistent Pipeline Creation',
      description: 'Prospecting relies heavily on manual research and individual effort. Pipeline quality can vary dramatically across representatives, segments, and outbound campaigns.',
      symptom: 'Mass spamming burns corporate domain reputation with sub-1% reply rates.',
      tag: 'Volume Drag'
    },
    {
      title: 'Disconnected Buyer Engagement',
      description: 'Generic messaging, delayed follow-ups, and poorly coordinated communication reduce buyer engagement, fail to address specific business needs, and slow decisions.',
      symptom: 'Average response times exceed 4 hours, during which active buyers go cold.',
      tag: 'Engagement Drop'
    },
    {
      title: 'Hidden Deal Risks',
      description: 'Missing stakeholders, unresolved objections, weak champions, and stalled decision processes often become visible too late to save the quarter.',
      symptom: 'Over 40% of deals committed for the quarter slip or lose to "no decision".',
      tag: 'Late-Stage Blindness'
    },
    {
      title: 'Margin and Commercial Pressure',
      description: 'Discounting, inconsistent offer structures, and limited visibility into cost-to-serve can weaken commercial performance and destroy software profitability.',
      symptom: 'End-of-quarter panic leads to 30%+ price concessions on enterprise deals.',
      tag: 'Margin Leakage'
    },
    {
      title: 'Missed Customer Growth',
      description: 'Renewals, cross-sell opportunities, upsell opportunities, and changes in customer health may not receive attention early enough to capture true account value.',
      symptom: 'Net Revenue Retention stagnates at 100%, leaving expansion whitespace untouched.',
      tag: 'Retention Friction'
    }
  ];

  const operationalTransitions = [
    { step: '01', title: 'Understand Markets & Buyers', detail: 'Ingest dark-funnel intent, account signals, and committee structures before outreach begins.', path: '/ai-native-sales/revenue-intelligence' },
    { step: '02', title: 'Discover & Match ICPs', detail: 'Deploy autonomous prospecting swarms to locate high-propensity accounts and verified buyers.', path: '/ai-native-sales/autonomous-pipeline-generation' },
    { step: '03', title: 'Contextual Buyer Engagement', detail: 'Personalize every touchpoint, transcribe meetings, and equip champions with digital sales rooms.', path: '/ai-native-sales/autonomous-sales-engagement' },
    { step: '04', title: 'Deploy Autonomous Agents', detail: 'Let SDR, AE, and RevOps agents automate research, meeting briefs, and CRM hygiene.', path: '/ai-native-sales/intelligent-sales-agents' },
    { step: '05', title: 'Advance Stalled Deals', detail: 'Identify hidden deal blockers, activate war rooms, and compress enterprise sales cycle duration.', path: '/ai-native-sales/revenue-acceleration' },
    { step: '06', title: 'Optimize Price & Margin', detail: 'Model customer willingness to pay and streamline deal desk approvals without sacrificing gross margin.', path: '/ai-native-sales/pricing-intelligence' },
    { step: '07', title: 'Leverage Partner Alliances', detail: 'Map account overlaps with certified technology partners and co-sell with zero channel conflict.', path: '/ai-native-sales/ecosystem-revenue-growth' },
    { step: '08', title: 'Drive Expansion & Retention', detail: 'Detect 180-day renewal risks and uncover expansion whitespace inside existing accounts.', path: '/ai-native-sales/customer-growth-intelligence' }
  ];

  const faqs = [
    {
      q: 'What is AI Native Sales?',
      a: 'AI Native Sales is an agentic, AI-native revenue operating system designed to connect buyer intelligence, autonomous pipeline generation, sales engagement, deal acceleration, pricing optimization, partner ecosystems, and customer expansion into a single, self-learning revenue model.'
    },
    {
      q: 'How is AI Native Sales different from traditional sales automation?',
      a: 'Traditional sales automation simply executes pre-written email cadences or logs activities. AI Native Sales combines multi-system intelligence, multi-agent task execution, real-time deal risk scoring, and continuous feedback learning under strict human oversight.'
    },
    {
      q: 'Does AI Native Sales replace human sales representatives?',
      a: 'No. The platform eliminates administrative tasks (CRM data entry, repetitive research, manual follow-ups) so reps can spend over 50% of their working hours in high-stakes strategic conversations and relationship building.'
    },
    {
      q: 'How can AI agents support enterprise sales teams?',
      a: 'Specialized agents act as co-pilots: SDR agents research accounts and qualify inbounds; AE agents transcribe meetings and draft proposals; RevOps agents maintain CRM hygiene; and Strategist agents simulate quarterly capacity.'
    },
    {
      q: 'What enterprise data is required to deploy?',
      a: 'The system connects via secure APIs to standard CRMs (Salesforce, HubSpot), virtual meeting platforms (Zoom, Teams, Meet), digital communication tools, and data warehouses (Snowflake, BigQuery) without replacing existing systems.'
    },
    {
      q: 'How does human approval and governance work?',
      a: 'Every customer-facing communication, commercial proposal, and contractual modification requires explicit representative or managerial authorization. AI prepares and recommends; humans approve and execute.'
    },
    {
      q: 'How do revenue organizations measure performance?',
      a: 'Performance is measured through standardized metrics including qualified pipeline velocity, meeting-to-SQL conversion, sales cycle duration compression, average discount reduction, and net revenue retention.'
    },
    {
      q: 'Can capabilities be introduced progressively?',
      a: 'Yes. Most enterprises begin with Revenue Intelligence and Pipeline Generation, subsequently expanding into Sales Engagement, Intelligent Agents, and the Executive GTM Command Center over a phased 4-stage rollout.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* ── SECTION 01: HERO (GLOBAL ACCELERATION SLATE-NAVY PALETTE) ── */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute -top-40 right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
              <BrainCircuit className="w-4 h-4 text-blue-400" />
              <span>AI NATIVE SALES · AUTONOMOUS REVENUE OS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-heading">
              Transform Sales Into a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Self-Learning Revenue Engine
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Connect buyer intelligence, autonomous prospecting swarms, deal war rooms, dynamic pricing guardrails, and customer expansion into a synchronized revenue operating model.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#capabilities"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore the Nine Capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <Link
                to="/book-consultation"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>

          {/* Central Revenue Architecture Graphic (Connected Node View) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Synchronized Revenue Operating Topology
                </span>
              </div>
              <span className="text-xs font-mono text-blue-400 font-bold">
                9 Autonomous Engines Connected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
              {allAiSalesCapabilityPages.slice(0, 5).map((cap, cIdx) => (
                <Link
                  key={cap.slug}
                  to={cap.canonicalPath}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-900 transition-all group"
                >
                  <div className="w-7 h-7 mx-auto rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs mb-2 border border-blue-500/30">
                    0{cIdx + 1}
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                    {cap.title}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    {cap.subSubmenus.length} Modules
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-3">
              {allAiSalesCapabilityPages.slice(5).map((cap, cIdx) => (
                <Link
                  key={cap.slug}
                  to={cap.canonicalPath}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-900 transition-all group"
                >
                  <div className="w-7 h-7 mx-auto rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs mb-2 border border-indigo-500/30">
                    0{cIdx + 6}
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                    {cap.title}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    {cap.subSubmenus.length} Modules
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center text-xs font-mono text-slate-500">
              Illustrative Architecture · Closed-Loop Feedback Loop Linking Intelligence, Decision, Execution & Learning
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: THE REVENUE CHALLENGE (6 FRICTION POINTS) ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Commercial Reality Check
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Sales Activity Is Not the Same as Revenue Progress
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Enterprises can employ hundreds of reps and pay for dozens of sales tools, yet still suffer systematic friction throughout the revenue lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-rose-500" />
                      {c.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {c.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase block">Observable Impact:</span>
                  <span className="text-slate-900 font-semibold">{c.symptom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: WHAT AI NATIVE SALES CHANGES (8 OPERATING STEPS) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              The Connected Operating Model
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Move From Disconnected Activities to Connected Revenue Execution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              How the enterprise revenue lifecycle operates when every signal, conversation, and commercial decision is connected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalTransitions.map((t) => (
              <Link
                key={t.step}
                to={t.path}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      {t.step}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 font-heading">
                    {t.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {t.detail}
                  </p>
                </div>

                <span className="text-xs font-bold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                  <span>Explore Capability</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: EXPLORE THE NINE CAPABILITIES (INTERACTIVE TWO-PANEL EXPLORER) ── */}
      <section id="capabilities" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              The Modular Capability Engine
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              One Revenue System. Nine Connected Capabilities.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Inspect the nine core capability destinations. Each page provides deep methodological specifications, sub-submenu modules with direct hash anchors, and measurable KPIs.
            </p>
          </div>

          {/* Interactive Two-Panel Navigation Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Panel: Vertical Capability Selector */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xs space-y-1">
              <div className="px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                Select Capability Module:
              </div>

              {allAiSalesCapabilityPages.map((cap, cIdx) => {
                const isSelected = selectedCapabilityIndex === cIdx;

                return (
                  <button
                    key={cap.slug}
                    onClick={() => setSelectedCapabilityIndex(cIdx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                        : 'text-slate-700 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                        {cap.pageNumber}
                      </span>
                      <span className="text-xs tracking-tight">{cap.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Panel: Selected Capability Preview Dossier */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Capability {selectedCap.pageNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {selectedCap.subSubmenus.length} Sub-Submenu Modules
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                    {selectedCap.title}
                  </h3>
                </div>

                <Link
                  to={selectedCap.canonicalPath}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <span>Open Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">Executive Summary:</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedCap.heroSupporting}
                  </p>
                </div>

                {/* Sub-Submenu List Preview */}
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-2.5">
                    Sub-Submenu Sections On This Page:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCap.subSubmenus.map((sub, sIdx) => (
                      <Link
                        key={sub.id}
                        to={`${selectedCap.canonicalPath}#${sub.id}`}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all block group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            0{sIdx + 1}. {sub.title}
                          </span>
                          <span className="text-[10px] font-mono text-blue-600">#{sub.id}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {sub.businessQuestion}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* KPI Ribbon */}
                <div className="p-4 rounded-xl bg-slate-900 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 mb-2">
                    Core Measurable KPIs:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {selectedCap.kpis.slice(0, 4).map((k, kIdx) => (
                      <div key={kIdx} className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center">
                        <div className="text-xs font-mono font-bold text-emerald-400">{k.illustrativeValue}</div>
                        <div className="text-[9px] text-slate-400 truncate">{k.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 05: HOW THE SYSTEM WORKS TOGETHER (4-LAYER ARCHITECTURE) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Closed-Loop Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              From Revenue Signals to Better Decisions and Coordinated Actions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              How intelligence feeds decision support, powers execution, and continuously refines future commercial actions through autonomous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Radar className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  1. Intelligence Layer
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ingests first-party digital signals, third-party dark-funnel intent, executive 10-Ks, technographic updates, and committee interaction telemetry.
              </p>
              <div className="text-[11px] font-mono text-blue-700 bg-blue-50 p-2 rounded">
                Feed: 40+ Data Streams
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  2. Decision Support
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluates willingness to pay, calculates multivariate deal health scores, flags missing committee personas, and issues daily Next Best Actions.
              </p>
              <div className="text-[11px] font-mono text-indigo-700 bg-indigo-50 p-2 rounded">
                Telemetry: Predictive Health
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Bot className="w-5 h-5 text-purple-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  3. Execution Swarms
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized SDR, AE, and RevOps agents draft role-specific proposals, transcribe calls, synchronize CRM hygiene, and manage deal war rooms.
              </p>
              <div className="text-[11px] font-mono text-purple-700 bg-purple-50 p-2 rounded">
                Gate: 100% Human Approval
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Cpu className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  4. Continuous Learning
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Correlates closed-won outcomes and customer retention with upfront sales behaviors to automatically tune playbooks, scoring weights, and territories.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 p-2 rounded">
                Loop: Closed-Loop Tuning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: BUSINESS VALUE & KPI DASHBOARD ── */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
              Quantifiable Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 mb-3 font-heading">
              Measure What Improves Revenue Performance
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Standardized metrics across pipeline coverage, deal velocity, discounting discipline, and customer retention. (Illustrative performance dashboard).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-400 mb-1">3.8x</div>
              <div className="text-xs font-bold text-white mb-0.5">Pipeline Coverage</div>
              <div className="text-[10px] text-slate-400 font-mono">Vs. assigned quotas</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mb-1">-35 Days</div>
              <div className="text-xs font-bold text-white mb-0.5">Cycle Compression</div>
              <div className="text-[10px] text-slate-400 font-mono">From discovery to close</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-sky-400 mb-1">2.8%</div>
              <div className="text-xs font-bold text-white mb-0.5">Forecast Variance</div>
              <div className="text-[10px] text-slate-400 font-mono">Quarterly predictability</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400 mb-1">-8.4 pts</div>
              <div className="text-xs font-bold text-white mb-0.5">Discount Reduction</div>
              <div className="text-[10px] text-slate-400 font-mono">Preserved gross margin</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-purple-400 mb-1">38.5%</div>
              <div className="text-xs font-bold text-white mb-0.5">Partner ARR Share</div>
              <div className="text-[10px] text-slate-400 font-mono">Ecosystem-led revenue</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-teal-400 mb-1">124.5%</div>
              <div className="text-xs font-bold text-white mb-0.5">Net Retention (NRR)</div>
              <div className="text-[10px] text-slate-400 font-mono">Expansion & retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: HUMAN-GUIDED AUTONOMY & BOUNDARIES ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Governance & Safety
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Autonomy With Visibility, Governance, and Human Judgment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Enterprise revenue workflows demand explicit control gates. ProfitMachines enforces strict architectural boundaries distinguishing automated suggestions from human executive authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase">Stage 1</div>
              <div className="text-sm font-bold text-slate-900">AI Recommends</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Neural models surface target accounts, calculate deal risk flags, and prioritize daily Next Best Actions based on observable telemetry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase">Stage 2</div>
              <div className="text-sm font-bold text-slate-900">AI Prepares</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized agents draft personalized discovery emails, assemble custom ROI models, summarize call action items, and update CRM fields.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
              <div className="text-xs font-mono font-bold text-blue-800 uppercase">Stage 3 (Mandatory Gate)</div>
              <div className="text-sm font-bold text-slate-900">Human Approves</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Sales representatives, sales managers, or legal counsel inspect, edit, and sign off on all external communications, proposals, and contract redlines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-800 uppercase">Stage 4</div>
              <div className="text-sm font-bold text-slate-900">Workflow Executes</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Approved actions dispatch via verified enterprise channels with complete immutable audit logs and attribution tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: IMPLEMENTATION APPROACH (4-STAGE ROADMAP) ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Phased Enterprise Rollout
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Build Around Your Existing Revenue Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We integrate with your existing CRM and sales infrastructure without requiring rip-and-replace disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-blue-600">Phase 01</span>
                <span className="text-[10px] font-mono text-slate-400">Weeks 1-2</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Diagnose</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Map current sales processes, CRM data hygiene, commercial friction points, and historical win/loss baselines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-indigo-600">Phase 02</span>
                <span className="text-[10px] font-mono text-slate-400">Weeks 3-4</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Prioritize</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select highest-impact capabilities (e.g. Revenue Intelligence, Deal War Rooms) and calibrate mathematical ICP models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-purple-600">Phase 03</span>
                <span className="text-[10px] font-mono text-slate-400">Weeks 5-8</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Orchestrate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect real-time signal feeds, deploy agent swarms, and configure human approval checkpoints directly in rep workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-emerald-600">Phase 04</span>
                <span className="text-[10px] font-mono text-slate-400">Continuous</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Optimize</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitor pipeline velocity, evaluate win/loss feedback, and refine playbooks to compound commercial yield over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Clarity & Common Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Everything enterprise revenue leaders need to know about adopting AI Native Sales.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;

              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left bg-slate-50 hover:bg-slate-100/80 transition-colors flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900 font-heading">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL EXECUTIVE CTA ── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <BrainCircuit className="w-4 h-4 text-blue-400" />
            <span>EXECUTIVE BRIEFING · PROFITMACHINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-heading">
            Build a More Intelligent Revenue Operating Model
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Identify where sales friction occurs, determine which capabilities matter most, and develop a practical path toward connected, AI-enabled revenue execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#capabilities"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore the Nine Capabilities</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
