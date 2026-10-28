import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  UserCheck, 
  Sliders, 
  AlertCircle, 
  Layers, 
  Zap, 
  TrendingUp, 
  MessageSquare, 
  Search, 
  Clock, 
  ChevronRight,
  Database,
  BarChart3,
  HeartHandshake,
  UserPlus,
  Compass,
  FileCheck,
  CalendarCheck,
  RefreshCw,
  Eye,
  SlidersHorizontal,
  Lock
} from 'lucide-react';

import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export const SalesAgentsPage: React.FC = () => {
  const [selectedAgentIndex, setSelectedAgentIndex] = useState<number>(0);
  const [autonomyTier, setAutonomyTier] = useState<number>(3);
  const [humanInLoop, setHumanInLoop] = useState<boolean>(true);



  const agents = [
    {
      id: "agent-sdr",
      name: "AI SDR Agent",
      role: "Autonomous Sales Development Representative",
      roleSummary: "Handles all autonomous prospecting, intelligence synthesis, and qualification.",
      status: "PRODUCTION ACTIVE",
      badgeColor: "blue",
      throughput: "1,240 accounts / hr",
      accuracy: "98.4%",
      currentTask: "Synthesizing executive hiring signals and 10-K filings for enterprise accounts",
      autonomyDesc: "Supervised Autonomous with threshold-based escalation gates",
      overview: "Autonomous Sales Development Representative that handles all prospecting and qualification. Operates continuously without fatigue, uncovering buyer intent and booking qualified pipeline directly into Account Executive calendars.",
      capabilities: [
        { title: "Prospect Research", desc: "Autonomous deep-dive research on every target account before initiating engagement." },
        { title: "Personalized Outreach", desc: "Hyper-personalized multi-channel outreach at scale with human-like quality." },
        { title: "Lead Qualification", desc: "Autonomous BANT/MEDDPICC qualification through conversational AI." },
        { title: "Appointment Booking", desc: "Automated meeting scheduling directly into AE calendars with full context handoff." }
      ],
      keyMetrics: [
        { label: "Meeting Velocity", value: "3-5X" },
        { label: "SQLs Auto-Sourced", value: "75-80%" },
        { label: "Hours Reclaimed", value: "15+ hrs / rep / wk" }
      ],
      oversight: "All enterprise deals (>$100K) require human approval before outreach.",
      quote: "Our SDR team had 40% annual churn; the AI SDR Agent has zero.",
      powers: "AI Prospecting capabilities",
      powersLink: "/ai-native-sales/prospecting"
    },
    {
      id: "agent-sales",
      name: "AI Sales Agent",
      role: "Autonomous Account Executive",
      roleSummary: "Manages active deal cycles, proposal generation, and stakeholder follow-ups through close.",
      status: "PRODUCTION ACTIVE",
      badgeColor: "indigo",
      throughput: "48 concurrent deals co-piloted",
      accuracy: "99.1%",
      currentTask: "Generating custom 32-page RFP proposal with audited security compliance attachments",
      autonomyDesc: "High Assistance with executive escalation on commercial negotiations",
      overview: "Autonomous Account Executive that manages opportunities through close. Eliminates administrative overhead, drafts proposals in minutes, surfaces real-time objection battlecards, and keeps deals advancing.",
      capabilities: [
        { title: "Opportunity Management", desc: "Autonomous deal progression, stakeholder tracking, and deal stage management." },
        { title: "Proposal Generation", desc: "Custom enterprise proposals and quotes generated in minutes from call transcripts." },
        { title: "Follow-Up Automation", desc: "Intelligent follow-up sequences tailored dynamically to deal signals and buyer velocity." },
        { title: "Deal Management", desc: "End-to-end deal orchestration with multi-threaded stakeholder coordination." }
      ],
      keyMetrics: [
        { label: "Cycle Compression", value: "50% shorter" },
        { label: "Win Rate Lift", value: "10-15% higher" },
        { label: "Hours Reclaimed", value: "10+ hrs / AE / wk" }
      ],
      oversight: "All negotiations above $50K require human involvement.",
      quote: "AEs were drowning in admin; now they focus purely on selling.",
      powers: "AI Sales Execution capabilities",
      powersLink: "/ai-native-sales/sales-execution"
    },
    {
      id: "agent-revops",
      name: "AI RevOps Agent",
      role: "Autonomous Revenue Operations Analyst",
      roleSummary: "Manages CRM hygiene, multi-scenario revenue forecasting, and reporting orchestration.",
      status: "PRODUCTION ACTIVE",
      badgeColor: "cyan",
      throughput: "148,000 telemetry records / day",
      accuracy: "99.98%",
      currentTask: "Recalibrating quarterly committed revenue confidence intervals across 14 enterprise opportunities",
      autonomyDesc: "Automated Governance with strict audit logging across all database mutations",
      overview: "Autonomous Revenue Operations analyst that manages data, forecasting, and reporting. Keeps CRM records impeccably synchronized, calculates forecasts mathematically, and distributes executive reports without manual effort.",
      capabilities: [
        { title: "CRM Updates", desc: "Zero-touch CRM hygiene and data management across emails, calendar invites, and phone calls." },
        { title: "Data Cleansing", desc: "Autonomous data quality monitoring, account deduplication, and firmographic enrichment." },
        { title: "Reporting Automation", desc: "Automated generation and distribution of executive dashboards and board packs." },
        { title: "Forecast Monitoring", desc: "Real-time forecast accuracy tracking, alerting leadership immediately to deal slippage." }
      ],
      keyMetrics: [
        { label: "CRM Data Accuracy", value: "95%+" },
        { label: "Forecast Variance", value: "<5%" },
        { label: "Hours Reclaimed", value: "20+ hrs / RevOps leader / wk" }
      ],
      oversight: "All forecast adjustments above 10% require human review.",
      quote: "Our RevOps team spent all their time on data entry instead of analysis.",
      powers: "AI Revenue Operations capabilities",
      powersLink: "/ai-native-sales/revops"
    },
    {
      id: "agent-cs",
      name: "AI Customer Success Agent",
      role: "Autonomous Customer Success Manager",
      roleSummary: "Monitors customer health telemetry, predicts churn risk, and discovers expansion opportunities.",
      status: "PRODUCTION ACTIVE",
      badgeColor: "emerald",
      throughput: "420 customer accounts monitored",
      accuracy: "96.8%",
      currentTask: "Surfacing expansion opportunity for account utilizing 180% of current compute threshold",
      autonomyDesc: "Proactive Interventions with human approval for strategic enterprise accounts",
      overview: "Autonomous Customer Success Manager that drives adoption, retention, and expansion. Monitors usage signals continuously, intercepts churn risk 60-90 days before renewal, and flags upsell readiness.",
      capabilities: [
        { title: "Adoption Monitoring", desc: "Real-time tracking of product usage, license utilization, and user engagement trends." },
        { title: "Renewal Tracking", desc: "Automated renewal timeline management, risk detection, and milestone pacing." },
        { title: "Upsell Discovery", desc: "Autonomous identification of expansion and tier-upgrade opportunities." },
        { title: "Churn Prevention", desc: "Early warning system with automated retention workflows triggered by risk signals." }
      ],
      keyMetrics: [
        { label: "Expansion Revenue", value: "20-25% increase" },
        { label: "Net Churn Reduction", value: "15-20% lower" },
        { label: "Hours Reclaimed", value: "12+ hrs / CSM / wk" }
      ],
      oversight: "All retention interventions for strategic accounts require human involvement.",
      quote: "We found out customers were at risk when they sent the cancellation notice.",
      powers: "Customer Growth capabilities",
      powersLink: "/ai-native-sales/customer-growth"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">

      {/* Hero Section - Workforce Command Center Style */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px' 
          }} 
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-blue-600/15 to-indigo-600/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-mono tracking-wider mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            CAPABILITY PILLAR 05 OF 06 · OUR KEY DIFFERENTIATOR
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            AI Sales Agents: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">Your Autonomous Digital Workforce</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Four specialized AI agents that work 24/7/365 — researching, prospecting, forecasting, and retaining customers. They never sleep, never quit, never burn out. Each operates with human-in-the-loop governance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#intake-form" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200"
            >
              Schedule Agent Deployment
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/ai-native-sales" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium transition-all"
            >
              Explore Other Capabilities
            </Link>
          </div>

          {/* Workforce Management Dashboard Aesthetic Visual */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Enterprise Digital Fleet</span>
                <h3 className="text-lg font-semibold text-white mt-1">Autonomous Agent Telemetry & Workforce Controller</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300">4 Active Production Agents</span>
                </div>
                <div className="hidden sm:block text-slate-600">|</div>
                <div className="text-blue-400">Deterministic SLA Active</div>
              </div>
            </div>

            {/* Agent Fleet Selector Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {agents.map((ag, idx) => (
                <div 
                  key={ag.id}
                  onClick={() => setSelectedAgentIndex(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all text-left relative group ${
                    selectedAgentIndex === idx 
                      ? 'bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-950/40 ring-1 ring-blue-500/50' 
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400">Agent {idx + 1}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      LIVE
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">{ag.name}</h4>
                  <div className="text-[11px] text-slate-400 font-mono line-clamp-1">{ag.role}</div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono">
                    <span className="text-slate-400">Accuracy</span>
                    <span className="text-blue-400 font-bold">{ag.accuracy}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Agent Telemetry Inspector */}
            <div className="p-6 rounded-xl bg-slate-950/90 border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/60">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        {agents[selectedAgentIndex].name}
                        <span className="text-xs font-mono font-normal text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-800/40">
                          {agents[selectedAgentIndex].status}
                        </span>
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">{agents[selectedAgentIndex].role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {agents[selectedAgentIndex].overview}
                  </p>

                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs flex items-center gap-3">
                    <Activity className="w-4 h-4 text-blue-400 animate-pulse shrink-0" />
                    <span className="text-slate-400">Live Task Stream:</span>
                    <span className="text-slate-200 truncate">{agents[selectedAgentIndex].currentTask}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {agents[selectedAgentIndex].capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="font-medium text-slate-200">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Primary Outcome</span>
                    <div className="text-2xl font-bold text-blue-400 mt-0.5">
                      {agents[selectedAgentIndex].keyMetrics[0].value}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">{agents[selectedAgentIndex].keyMetrics[0].label}</div>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">Autonomy Tier</span>
                      <span className="text-blue-300 font-bold">Tier {autonomyTier} / 4</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4].map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setAutonomyTier(tier)}
                          className={`flex-1 py-1 text-[11px] font-mono rounded border transition-all ${
                            autonomyTier >= tier
                              ? 'bg-blue-600/30 border-blue-500 text-blue-300'
                              : 'bg-slate-800 border-slate-700 text-slate-500'
                          }`}
                        >
                          T{tier}
                        </button>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 block mt-1.5">
                      {autonomyTier === 1 && "Tier 1: Human approves every individual action"}
                      {autonomyTier === 2 && "Tier 2: Human approves external outbound messages"}
                      {autonomyTier === 3 && "Tier 3: Supervised autonomy with threshold escalation"}
                      {autonomyTier === 4 && "Tier 4: Full deterministic execution inside guardrails"}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-white">Human-In-The-Loop</div>
                      <div className="text-[10px] text-slate-400 font-mono">Executive override gate</div>
                    </div>
                    <button
                      onClick={() => setHumanInLoop(!humanInLoop)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        humanInLoop ? 'bg-blue-600' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          humanInLoop ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT 01: AI SDR Agent */}
      <section id="agent-sdr" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                <Bot className="w-3.5 h-3.5" />
                Agent 01: AI SDR Agent
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Autonomous Pipeline Generation & Qualification
              </h2>
              <p className="text-sm text-blue-700 font-mono mt-2">
                Role Description: Autonomous Sales Development Representative that handles all prospecting and qualification.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Operates continuously without fatigue, call reluctance, or territory friction. Discovers high-fit accounts, enriches buying committees, crafts bespoke multi-channel sequences, and books qualified meetings directly into AE calendars.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                <div className="text-xs font-mono text-blue-900 font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Human Oversight Rule
                </div>
                <p className="text-xs text-blue-800 leading-relaxed font-medium">
                  All enterprise deals (&gt;$100K) require human approval before outreach.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Our SDR team had 40% annual churn; the AI SDR Agent has zero"
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  to="/ai-native-sales/prospecting" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Powers: AI Prospecting capabilities <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Prospect Research</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous deep-dive research on every target account before initiating any contact.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Personalized Outreach</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Hyper-personalized multi-channel outreach at scale with human-like conversational quality.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 w-fit mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Lead Qualification</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous BANT/MEDDPICC qualification through real-time conversational AI evaluation.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Appointment Booking</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated meeting scheduling directly into AE calendars with full context handoff notes.
                </p>
              </div>

              <div className="sm:col-span-2 p-5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">3-5X</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Meeting Velocity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">75-80%</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">SQLs Auto-Sourced</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+ hrs</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Reclaimed / Rep / Wk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT 02: AI Sales Agent */}
      <section id="agent-sales" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Opportunity Management</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous deal progression, MEDDPICC tracking, and stage management without manual CRM burden.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Proposal Generation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Custom enterprise proposals generated in minutes with verified technical solutions and case studies.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Follow-Up Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Intelligent follow-up sequences calibrated dynamically based on buyer response velocity and deal signals.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Deal Management</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  End-to-end deal orchestration with multi-threaded stakeholder coordination across procurement and legal.
                </p>
              </div>

              <div className="sm:col-span-2 p-5 rounded-xl bg-white border border-slate-200 shadow-xs grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">50%</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Shorter Cycles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">10-15%</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Higher Win Rates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">10+ hrs</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Reclaimed / AE / Wk</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Bot className="w-3.5 h-3.5" />
                Agent 02: AI Sales Agent
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Opportunity Management & Acceleration Through Close
              </h2>
              <p className="text-sm text-indigo-700 font-mono mt-2">
                Role Description: Autonomous Account Executive that manages opportunities through close.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Functions as an always-on co-pilot for high-value enterprise sales. Generates proposals instantly, tracks stakeholder consensus, recommends optimal concessions, and enforces disciplined deal progression.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
                <div className="text-xs font-mono text-indigo-900 font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-700" />
                  Human Oversight Rule
                </div>
                <p className="text-xs text-indigo-800 leading-relaxed font-medium">
                  All negotiations above $50K require human involvement.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3 shadow-xs">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "AEs were drowning in admin; now they focus purely on selling"
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  to="/ai-native-sales/sales-execution" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Powers: AI Sales Execution capabilities <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT 03: AI RevOps Agent */}
      <section id="agent-revops" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-50 text-cyan-700 border border-cyan-200">
                <Bot className="w-3.5 h-3.5" />
                Agent 03: AI RevOps Agent
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Zero-Touch Data Hygiene & Predictive Forecasting
              </h2>
              <p className="text-sm text-cyan-700 font-mono mt-2">
                Role Description: Autonomous Revenue Operations analyst that manages data, forecasting, and reporting.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Cleanses CRM databases continuously, synchronizes customer touchpoints without rep effort, models quarterly revenue mathematically, and flags pipeline slippage before it impacts targets.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-cyan-50/70 border border-cyan-200">
                <div className="text-xs font-mono text-cyan-900 font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-700" />
                  Human Oversight Rule
                </div>
                <p className="text-xs text-cyan-800 leading-relaxed font-medium">
                  All forecast adjustments above 10% require human review.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Our RevOps team spent all their time on data entry instead of analysis"
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  to="/ai-native-sales/revops" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800"
                >
                  Powers: AI Revenue Operations capabilities <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600 w-fit mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">CRM Updates</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Zero-touch CRM hygiene and data management across interactions, stages, and customer contacts.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Data Cleansing</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous data quality monitoring, conflict resolution, deduplication, and firmographic enhancement.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Reporting Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated report generation and distribution for weekly reviews, board decks, and compensation payouts.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Forecast Monitoring</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Real-time forecast accuracy tracking, calibration against behavioral telemetry, and immediate risk alerts.
                </p>
              </div>

              <div className="sm:col-span-2 p-5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-600">95%+</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">CRM Data Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">&lt;5%</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Forecast Variance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">20+ hrs</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Reclaimed / Leader / Wk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT 04: AI Customer Success Agent */}
      <section id="agent-cs" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Adoption Monitoring</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Real-time tracking of product usage patterns, license activation rates, and feature engagement depth.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 w-fit mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Renewal Tracking</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated renewal timeline management, risk detection, and contract pacing 90 days ahead of maturity.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Upsell Discovery</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous identification of expansion opportunities based on account usage surges and business growth.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 w-fit mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Churn Prevention</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Early warning system with automated retention workflows triggered the moment engagement degrades.
                </p>
              </div>

              <div className="sm:col-span-2 p-5 rounded-xl bg-white border border-slate-200 shadow-xs grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">20-25%</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Expansion Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">15-20%</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Net Churn Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">12+ hrs</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">Reclaimed / CSM / Wk</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Bot className="w-3.5 h-3.5" />
                Agent 04: AI Customer Success Agent
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Adoption, Retention, and Autonomous Account Expansion
              </h2>
              <p className="text-sm text-emerald-700 font-mono mt-2">
                Role Description: Autonomous Customer Success Manager that drives adoption, retention, and expansion.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Protects net revenue retention proactively. Analyzes daily product consumption telemetry, identifies accounts at risk, flags expansion readiness, and coordinates proactive success interventions before issues escalate.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <div className="text-xs font-mono text-emerald-900 font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Human Oversight Rule
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                  All retention interventions for strategic accounts require human involvement.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3 shadow-xs">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "We found out customers were at risk when they sent the cancellation notice"
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  to="/ai-native-sales/customer-growth" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Powers: Customer Growth capabilities <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human-in-the-Loop Governance Section */}
      <section id="governance" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold">Deterministic Guardrails</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Autonomous Execution, Human Oversight</h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Every agent operates within defined governance boundaries. High-value decisions automatically escalate to human operators. The system runs autonomously within guardrails — never beyond them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Pre-Approval Rules</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Templates, tone guidelines, compliance guardrails, and message constraints hardcoded before execution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Real-Time Monitoring</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Live operational dashboards showing all agent activity, token latency, and active buyer communications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-amber-300 transition-all">
              <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 w-fit mb-4">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Escalation Triggers</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Automatic routing to human operators based on deal value thresholds, contractual complexity, or negative sentiment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Post-Action Review</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Weekly audit of all agent decisions and customer dialogues with human feedback loops for model fine-tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Outcomes Grid */}
      <section id="outcomes" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold">Verified Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Workforce Productivity Telemetry</h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Quantifiable operational leverage delivered by our autonomous sales agent fleet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
              <div className="text-4xl font-extrabold text-blue-600">
                60+
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Hours Reclaimed / Team / Wk</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Total hours returned to active strategy and closing across sales and operations teams.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
              <div className="text-4xl font-extrabold text-indigo-600">
                24/7/365
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Autonomous Uptime</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Continuous lead qualification and pipeline progression across all global timezones.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-300 transition-all">
              <div className="text-4xl font-extrabold text-sky-600">
                0%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Agent Turnover</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Eliminates the disruptive cost, ramp time, and institutional memory loss of SDR attrition.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-4xl font-extrabold text-emerald-600">
                100%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Deterministic SLA Enforcement</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Sub-second inbound lead response and continuous guardrail monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-20 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Autonomous Interoperability</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Agents Power Every Other Capability</h2>
            </div>
            <Link 
              to="/ai-native-sales" 
              className="mt-4 sm:mt-0 text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
            >
              Back to AI Native Sales Hub
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/ai-native-sales/prospecting"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-xs font-mono text-blue-400 mb-2">Capability Pillar 02</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                AI Prospecting & Pipeline
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Powered by the AI SDR Agent to research accounts and book qualified meetings autonomously.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                Explore Prospecting <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/sales-execution"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-xs font-mono text-blue-400 mb-2">Capability Pillar 03</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                AI Sales Execution
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Powered by the AI Sales Agent to co-pilot deal progressions, proposals, and pricing governance.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                Explore Sales Execution <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/customer-growth"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-xs font-mono text-blue-400 mb-2">Capability Pillar 06</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                Customer Growth
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Powered by the AI Customer Success Agent to monitor account health and intercept churn proactively.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                Explore Customer Growth <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA & Intake Form */}
      <section id="intake-form" className="py-24 relative bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Deploy Your Autonomous Digital Workforce?
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Schedule an Agent Deployment architecture review to discover how specialized AI agents accelerate pipeline generation and operational execution.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Schedule Agent Deployment
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Talk to a Principal Architect
              </span>
            </div>
          </div>

          <AiSalesIntakeForm />
        </div>
      </section>
    </div>
  );
};

export default SalesAgentsPage;
