import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Users, ShieldCheck,
  CheckCircle2, TrendingUp, Activity, Zap, Layers, Sparkles,
  Lock, Target, Cpu, BarChart3, Network, Clock, ShieldAlert,
  Server, Database, ChevronRight, ChevronDown, HelpCircle,
  Radar, Globe, DollarSign, Eye, LineChart, FileText, CheckCircle
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function AiNativeSalesHub() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'ai-native'>('ai-native');
  const [activeCapability, setActiveCapability] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'AI Native Sales: The Autonomous Revenue Operating System | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const capabilityPillars = [
    {
      id: 'revenue-intelligence',
      name: 'Revenue Intelligence',
      path: '/ai-native-sales/revenue-intelligence',
      tag: 'Signals & Intent',
      metric: '85-90% Predictive Accuracy',
      desc: 'Four intelligence engines fusing 40+ data sources to reveal who is ready to buy, what they will pay, and how to win before rivals.',
      icon: Radar,
      color: 'blue'
    },
    {
      id: 'prospecting',
      name: 'AI Prospecting & Pipeline',
      path: '/ai-native-sales/prospecting',
      tag: 'Autonomous Outbound',
      metric: '3-5X Meeting Velocity Lift',
      desc: 'Autonomous prospecting swarms that research, reach, qualify, and book demos with zero manual SDR drag.',
      icon: Zap,
      color: 'indigo'
    },
    {
      id: 'sales-execution',
      name: 'AI Sales Execution',
      path: '/ai-native-sales/sales-execution',
      tag: 'Deal Acceleration',
      metric: '50% Shorter Sales Cycles',
      desc: 'Real-time opportunity intelligence, automated proposals, dynamic pricing guardrails, and live battlecards.',
      icon: TrendingUp,
      color: 'cyan'
    },
    {
      id: 'revops',
      name: 'AI Revenue Operations',
      path: '/ai-native-sales/revops',
      tag: 'Precision Command',
      metric: '<5% Forecast Variance',
      desc: 'Zero-touch CRM hygiene, behavioral revenue forecasting, stage conversion analytics, and workflow orchestration.',
      icon: BarChart3,
      color: 'emerald'
    },
    {
      id: 'agents',
      name: 'AI Sales Agents',
      path: '/ai-native-sales/agents',
      tag: 'Digital Workforce',
      metric: '60+ Hours Reclaimed / Week',
      desc: 'Four specialized autonomous agents working 24/7 across SDR, Sales AE, RevOps, and Customer Success under human governance.',
      icon: Bot,
      color: 'violet'
    },
    {
      id: 'customer-growth',
      name: 'Customer Growth',
      path: '/ai-native-sales/customer-growth',
      tag: 'NRR Compounding',
      metric: '+20-25% Expansion Revenue',
      desc: 'Predictive churn mitigation, behavioral health scoring, automated expansion triggers, and customer advocacy programs.',
      icon: Sparkles,
      color: 'sky'
    }
  ];

  const integrationCategories = [
    {
      category: 'Enterprise CRM',
      desc: 'Bi-directional real-time telemetry and automated activity hygiene',
      logos: ['Salesforce Enterprise', 'HubSpot Operations Hub', 'Microsoft Dynamics 365', 'Pipedrive']
    },
    {
      category: 'Sales Engagement & Conversation',
      desc: 'Direct sequence injection and call transcription pattern synthesis',
      logos: ['Outreach.io', 'SalesLoft', 'Apollo.io', 'Gong.io', 'Chorus.ai']
    },
    {
      category: 'Dark-Funnel & Account Intent',
      desc: 'Sub-second signal fusion across 40+ first & third party networks',
      logos: ['Bombora Company Surge', '6sense', 'G2 Buyer Intent', 'ZoomInfo', 'Demandbase']
    },
    {
      category: 'Collaboration & Communications',
      desc: 'Instant deal alerts, approval escalations, and automated meeting booking',
      logos: ['Slack Enterprise Grid', 'Microsoft Teams', 'Zoom Video', 'Google Workspace', 'Outlook 365']
    },
    {
      category: 'Data Warehousing & Lakehouses',
      desc: 'Direct SQL & vector pipeline sync with zero data lock-in',
      logos: ['Snowflake Data Cloud', 'Google BigQuery', 'Databricks Lakehouse', 'Amazon Redshift']
    }
  ];

  const executiveFaqs = [
    {
      q: 'How does AI Native Sales integrate with our existing Salesforce instance?',
      a: 'AI Native Sales connects directly via secure, bi-directional REST and GraphQL APIs into your Salesforce environment. It does not replace your CRM schema; rather, it enriches lead, contact, account, and opportunity objects with verified predictive propensity scores, stage health telemetry, and autonomous activity logging without human data entry.'
    },
    {
      q: 'Is our proprietary enterprise data used to train public AI models?',
      a: 'Strictly zero client data is used to train foundational or public models. We operate under stringent Mutual Non-Disclosure Agreements and enforce strict tenant isolation with dedicated inference endpoints in SOC2 Type II and ISO 27001-certified VPC infrastructure. You retain 100% intellectual property ownership of all customer interactions and revenue data.'
    },
    {
      q: 'What happens if an autonomous AI agent makes a mistake or encounters an edge case?',
      a: 'Every agent runs with deterministic human-in-the-loop governance guardrails. Any prospect response expressing ambiguity, negative sentiment, or contractual redlines triggers an immediate automatic escalation to the designated account executive with a contextual summary and suggested resolution.'
    },
    {
      q: 'How do you ensure AI agents do not send inappropriate or off-brand messages?',
      a: 'All outbound communication is governed by three nested layers: deterministic brand lexicon guidelines, real-time safety classification guardrails, and pre-approved messaging boundaries. For enterprise tier deals exceeding $100K ACV, human approval can be contractually enforced prior to message dispatch.'
    },
    {
      q: 'What is the typical timeline to realize measurable ROI?',
      a: 'Most enterprise deployments achieve initial pipeline lift within 30 to 45 days. The 90-day deployment roadmap establishes an audited baseline in the first two weeks, runs shadow-mode validation by day 45, and achieves full autonomous velocity with verifiable 3-5X meeting lifts by day 90.'
    },
    {
      q: 'Can we start with a single specialized agent and expand across the platform later?',
      a: 'Yes. Enterprises frequently pilot the AI SDR Agent to resolve outbound pipeline bottlenecks or deploy the Predictive Forecasting engine to eliminate end-of-quarter variance before provisioning the full multi-agent mesh.'
    },
    {
      q: 'How do you handle global data residency and sovereignty requirements?',
      a: 'We offer localized data residency across US, EU (Frankfurt/Dublin), and Asia-Pacific regions. All data transit is encrypted using TLS 1.3 with AES-256 encryption at rest, ensuring complete compliance with GDPR, German BDSG, and cross-border sovereignty regulations.'
    },
    {
      q: 'What compliance and security frameworks do you support?',
      a: 'The platform is audited against SOC2 Type II, ISO 27001, GDPR, and HIPAA security guidelines. We support SAML 2.0 / Okta SSO, custom role-based access control (RBAC), and deterministic audit trails for all autonomous actions.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── SECTION 1: HERO (Autonomous Revenue OS Command Aesthetic) ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.28),rgba(0,0,0,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="font-mono text-blue-400 font-extrabold">THE AUTONOMOUS REVENUE OPERATING SYSTEM</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> SOC2 Type II Certified</span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /> Zero Public Model Training</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            AI Native Sales:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Engineer Revenue at the Speed of Buyer Intent
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed font-normal">
            Replace fragmented GTM tools and manual sales processes with a unified, self-learning revenue intelligence platform. From autonomous prospecting agents to predictive forecasting, every capability engineered for measurable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 font-mono"
            >
              <span>Schedule Platform Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5 font-mono"
            >
              <span>Explore Capabilities</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* ── Palantir-Style Interactive System Map Visual ── */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Autonomous Revenue Topology</div>
                <div className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-1">
                  <span>PROFITMACHINES // UNIFIED TELEMETRY LAYER</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">LIVE MESH</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">40+ Ingestion Feeds</span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Sub-Second Propensity</span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">&lt;5% Forecast Variance</span>
              </div>
            </div>

            {/* Interactive System Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-6">
              {capabilityPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isSelected = activeCapability === index;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveCapability(index)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-500/20'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-xs font-mono font-bold text-white mb-1 truncate">{pillar.name}</div>
                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide truncate">{pillar.tag}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Capability Details Display */}
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800/80">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Selected Capability Architecture</span>
                  <h3 className="text-xl font-bold text-white font-heading mt-0.5">{capabilityPillars[activeCapability].name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    {capabilityPillars[activeCapability].metric}
                  </span>
                  <Link
                    to={capabilityPillars[activeCapability].path}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                {capabilityPillars[activeCapability].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PARADIGM SHIFT ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-widest mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>THE ARCHITECTURAL SHIFT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              The Traditional GTM Stack is Broken
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Most enterprises run 15+ disconnected sales tools. Reps spend 60% of their day on admin. Forecasts miss by 30-40%. Pipeline visibility is a lagging illusion. AI Native Sales replaces this fragmentation with a single, autonomous revenue operating system — where every signal flows through one unified telemetry layer, and every action is orchestrated by deterministic AI agents with human-in-the-loop governance.
            </p>
          </div>

          {/* Split-Screen Architectural Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional GTM */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-red-500/30">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div>
                  <div className="text-xs font-mono text-red-400 uppercase tracking-wider">Legacy GTM Stack</div>
                  <h3 className="text-xl font-bold text-white font-heading mt-1">Disconnected Point Tools</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded bg-red-950 text-red-300 border border-red-800">Fragmented & Costly</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-red-400 font-mono font-bold">✕</span>
                  <div>
                    <strong className="text-white block mb-0.5">15+ Disconnected Point Tools</strong>
                    <span className="text-xs text-slate-400">Reps juggle disparate logins, producing conflicting data silos and continuous manual export/import friction.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-red-400 font-mono font-bold">✕</span>
                  <div>
                    <strong className="text-white block mb-0.5">60% Rep Time Spent on Admin</strong>
                    <span className="text-xs text-slate-400">Prospect research, note logging, CRM field updating, and manual proposal creation throttle active selling hours.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-red-400 font-mono font-bold">✕</span>
                  <div>
                    <strong className="text-white block mb-0.5">30-40% Forecast Variance</strong>
                    <span className="text-xs text-slate-400">Pipeline projections rely on rep subjective optimism rather than empirical, behavioral signal telemetry.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-red-400 font-mono font-bold">✕</span>
                  <div>
                    <strong className="text-white block mb-0.5">Headcount-Dependent Scaling</strong>
                    <span className="text-xs text-slate-400">Scaling pipeline requires linearly hiring more SDRs, triggering massive payroll overhead and high rep turnover.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* AI Native Sales */}
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">ProfitMachines Architecture</div>
                  <h3 className="text-xl font-bold text-white font-heading mt-1">Autonomous Revenue Operating System</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Unified & Self-Learning</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">One Unified Telemetry Mesh</strong>
                    <span className="text-xs text-slate-300">Single intelligence layer fusing dark-funnel intent, buying committees, deal health, and automated CRM sync.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">60+ Hours Reclaimed / Week / Team</strong>
                    <span className="text-xs text-slate-300">Autonomous agents handle end-to-end prospecting, CRM hygiene, meeting booking, and quote drafting 24/7.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">&lt;5% Forecast-to-Actuals Variance</strong>
                    <span className="text-xs text-slate-300">Behavioral probability models accurately predict close timing and revenue outcomes with mathematical precision.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">3-5X Meeting Velocity Lift with Zero SDR Churn</strong>
                    <span className="text-xs text-slate-300">Deterministic digital workforce scales pipeline infinitely without hiring bottlenecks or burnout.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 6 CAPABILITY PILLARS (Interactive Grid) ── */}
      <section id="pillars" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>SIX PILLARS OF AUTONOMOUS REVENUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              The Complete AI Native Sales Platform
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Click any pillar below to inspect its dedicated capabilities, architectural models, verified outcomes, and integration blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Revenue Intelligence */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                    <Radar className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                    Signals & Intent
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-blue-400 transition-colors">
                  Revenue Intelligence
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Four intelligence engines that fuse 40+ data sources to reveal who's ready to buy, what they'll pay, and how to win.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Key Benchmark</div>
                  <div className="text-xl font-mono font-extrabold text-white">85-90% Predictive Accuracy</div>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">For purchase readiness timing</div>
                </div>
              </div>
              <Link
                to="/ai-native-sales/revenue-intelligence"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-blue-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore Revenue Intelligence</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: AI Prospecting & Pipeline */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                    Autonomous Outbound
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-indigo-400 transition-colors">
                  AI Prospecting & Pipeline
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Autonomous engines that research, reach, qualify, and book — replacing manual SDR labor with deterministic pipeline generation.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Key Benchmark</div>
                  <div className="text-xl font-mono font-extrabold text-white">3-5X Meeting Velocity Lift</div>
                  <div className="text-xs font-mono text-indigo-400 mt-0.5">40-50% reduction in blended CAC</div>
                </div>
              </div>
              <Link
                to="/ai-native-sales/prospecting"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-indigo-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore AI Prospecting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: AI Sales Execution */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Deal Acceleration
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-cyan-400 transition-colors">
                  AI Sales Execution
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Autonomous intelligence that shortens cycles, increases win rates, and protects margins across every deal stage.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Key Benchmark</div>
                  <div className="text-xl font-mono font-extrabold text-white">50% Shorter Sales Cycles</div>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">5-10 points gross margin recovery</div>
                </div>
              </div>
              <Link
                to="/ai-native-sales/sales-execution"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore AI Sales Execution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 4: AI Revenue Operations */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                    RevOps Precision
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-emerald-400 transition-colors">
                  AI Revenue Operations
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Real-time revenue command — from automated CRM hygiene to predictive forecasting to autonomous workflow orchestration.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Key Benchmark</div>
                  <div className="text-xl font-mono font-extrabold text-white">&lt;5% Forecast Variance</div>
                  <div className="text-xs font-mono text-emerald-400 mt-0.5">95%+ CRM data accuracy</div>
                </div>
              </div>
              <Link
                to="/ai-native-sales/revops"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-emerald-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore AI Revenue Operations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 5: AI Sales Agents */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/60 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-950 text-violet-300 border border-violet-800">
                    Digital Workforce
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-violet-400 transition-colors">
                  AI Sales Agents
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Four specialized AI agents working 24/7/365 — researching, prospecting, forecasting, and retaining customers under human governance.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Key Benchmark</div>
                  <div className="text-xl font-mono font-extrabold text-white">60+ Hours Reclaimed / Week</div>
                  <div className="text-xs font-mono text-violet-400 mt-0.5">Zero agent turnover · 24/7 uptime</div>
                </div>
              </div>
              <Link
                to="/ai-native-sales/agents"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-violet-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore AI Sales Agents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 6: Customer Growth */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/60 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800">
                    NRR Compounding
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-sky-400 transition-colors">
                  Customer Growth
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Autonomous systems that retain, expand, and turn existing enterprise customers into compounding revenue multipliers.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Key Benchmark</div>
                  <div className="text-xl font-mono font-extrabold text-white">20-25% Expansion Revenue Lift</div>
                  <div className="text-xs font-mono text-sky-400 mt-0.5">85-90% churn prediction accuracy</div>
                </div>
              </div>
              <Link
                to="/ai-native-sales/customer-growth"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-sky-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore Customer Growth</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE 5-LAYER ARCHITECTURE (How It All Connects) ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              The Autonomous Revenue Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A five-layer deterministic execution stack that ingests raw telemetry, scores buying propensity, commands autonomous agents, and continually self-optimizes based on closed-won outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {/* Layer 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Radar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-blue-400 tracking-wider">Perception Layer</div>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">Signal Ingestion Layer</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1 max-w-2xl">
                    Continuous real-time ingestion from 40+ sources including dark-funnel intent (Bombora, 6sense, G2), website telemetry, hiring surges, and CRM interactions.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 shrink-0">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">40+ Sources</span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">Sub-Second Streaming</span>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 shadow-xs">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-indigo-400 tracking-wider">Reasoning Layer</div>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">AI Processing Layer</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1 max-w-2xl">
                    Neural ICP matching, buying committee mapping, purchase readiness scoring, and predictive deal stall detection running on high-throughput models.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 shrink-0">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">Propensity Scoring</span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">Committee Graph</span>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Execution Layer</div>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">Autonomous Action Layer</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1 max-w-2xl">
                    Deterministic agent execution: autonomous multi-channel outbound, instant objection handling, automated CRM field updates, and proposal drafting.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 shrink-0">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">4 Agent Fleets</span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">Human Governance</span>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Telemetry Layer</div>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">Telemetry Feedback Layer</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1 max-w-2xl">
                    Live revenue HUDs, deal velocity pacing alerts, pipeline slippage warning systems, and board-ready forecast telemetry updated in real time.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 shrink-0">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">Live Dashboards</span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">&lt;5% Variance</span>
              </div>
            </div>

            {/* Layer 5 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-violet-400 tracking-wider">Evolution Layer</div>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">Continuous Learning Layer</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1 max-w-2xl">
                    Closed-won feedback loops continuously retrain message weights, Bayesian win-probability curves, and pricing elasticity models daily.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 shrink-0">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">Closed-Won Tuning</span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">Self-Optimizing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INTEGRATIONS SECTION ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Network className="w-3.5 h-3.5" />
              <span>STACK COMPATIBILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              Built to Integrate, Not Replace
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              AI Native Sales sits on top of your existing stack via secure, SOC2-compliant APIs. Zero rip-and-replace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map((cat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                  {cat.category}
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.logos.map(logo => (
                    <span
                      key={logo}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SECURITY & TRUST SECTION ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENTERPRISE GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              Enterprise-Grade Security. Human-Governed AI.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Engineered from the ground up for strict regulatory compliance, tenant isolation, and auditable governance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { label: 'SOC2 Type II', sub: 'Independently Audited' },
              { label: 'ISO 27001', sub: 'Certified Infosec' },
              { label: 'GDPR Compliant', sub: 'EU Data Sovereignty' },
              { label: 'HIPAA Ready', sub: 'Clinical Grade Controls' },
              { label: 'Zero-Trust Stack', sub: 'VPC Endpoint Isolation' },
              { label: 'Explainable AI', sub: 'Auditable Decision Logs' }
            ].map(sec => (
              <div key={sec.label} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white font-heading">{sec.label}</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">{sec.sub}</div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 max-w-4xl mx-auto text-center">
            <Lock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-heading">Data Sovereignty Statement</h3>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-mono text-sm">
              "Your data remains yours. We operate under strict Mutual NDAs and do not use client data to train foundational public models."
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: DEPLOYMENT TIMELINE (90 Days) ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>RAPID TIME-TO-VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              From Diagnostic to Autonomous Operations in 90 Days
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A structured, low-risk deployment roadmap engineered by our Principal Systems Architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">Phase 1 · Weeks 1-2</div>
              <h3 className="text-2xl font-bold text-white font-heading mb-2">Days 1-14</h3>
              <div className="text-sm font-semibold text-slate-200 mb-4">Baseline Audit & Data Sync</div>
              <ul className="space-y-2 text-xs font-mono text-slate-400 leading-relaxed">
                <li>• CRM and engagement API provisioning</li>
                <li>• Dark-funnel baseline telemetry audit</li>
                <li>• Closed-won cohort training dataset lock</li>
                <li>• Governance guardrail definitions</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-2">Phase 2 · Weeks 3-6</div>
              <h3 className="text-2xl font-bold text-white font-heading mb-2">Days 15-45</h3>
              <div className="text-sm font-semibold text-slate-200 mb-4">Agent Training & Shadow Mode</div>
              <ul className="space-y-2 text-xs font-mono text-slate-400 leading-relaxed">
                <li>• Autonomous agent fleet calibration</li>
                <li>• Shadow-mode outbound execution validation</li>
                <li>• Real-time objection handling testing</li>
                <li>• Rep feedback loop synchronization</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">Phase 3 · Weeks 7-12</div>
              <h3 className="text-2xl font-bold text-white font-heading mb-2">Days 46-90</h3>
              <div className="text-sm font-semibold text-slate-200 mb-4">Full Autonomous Deployment & Handover</div>
              <ul className="space-y-2 text-xs font-mono text-slate-400 leading-relaxed">
                <li>• Live multi-agent mesh activation</li>
                <li>• Real-time revenue command HUD live</li>
                <li>• Forecast variance benchmark verification</li>
                <li>• Continuous self-learning models online</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: EXECUTIVE FAQS ── */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>EXECUTIVE FAQS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
              Frequently Asked Architectural Questions
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Addressing the security, data privacy, and ROI considerations of enterprise CROs, CIOs, and CFOs.
            </p>
          </div>

          <div className="space-y-4">
            {executiveFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-bold text-white text-base font-heading">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA & INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL ARCHITECTURAL INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Stop Managing Fragmented Tools. Start Engineering Predictable Revenue.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Schedule a confidential platform architecture review with our Principal Revenue Systems Architects to evaluate your active GTM infrastructure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AiSalesIntakeForm
            pageContext="AI Native Sales Platform Hub"
            defaultService="Autonomous Revenue Diagnostic"
          />
        </div>
      </section>
    </div>
  );
}
