import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Users,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Activity,
  Zap,
  Layers,
  Sparkles,
  Lock,
  Target,
  RefreshCw,
  Cpu,
  BarChart3,
  Network,
  Clock,
  ShieldAlert,
  Server,
  Database
} from 'lucide-react';
import AiSalesIntakeForm from '../../components/forms/AiSalesIntakeForm';

export default function AiNativeSalesHub() {
  useEffect(() => {
    document.title = 'AI Native Sales: The Autonomous Revenue Operating System | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      title: 'Agentic SDR & Outbound Autopilots',
      category: 'Autonomous Outbound',
      path: '/ai-native-sales/agentic-sdr',
      anchor: '#architecture',
      icon: Bot,
      badge: '3.8x Velocity Lift',
      description: 'Autonomous outbound fleets conducting multi-channel account research, bespoke message crafting, objection handling, and real-time meeting scheduling with full human governance.',
      features: ['Dynamic Account Intelligence', 'Contextual Objection Mesh', '24/7 SLA Scheduling']
    },
    {
      title: 'Algorithmic ICP Propensity Scoring',
      category: 'Predictive Intelligence',
      path: '/ai-native-sales/predictive-intelligence',
      anchor: '#propensity',
      icon: Target,
      badge: '98% Target Accuracy',
      description: 'Neural ranking of your total addressable market combining firmographics, dark-funnel intent telemetry, and behavioral signals into deterministic buyer priority tiers.',
      features: ['Signal Fusion Engine', 'Dark-Funnel Intent Capture', 'Sub-Second Signal Routing']
    },
    {
      title: 'Pipeline Velocity & Pacing Telemetry',
      category: 'Predictive Intelligence',
      path: '/ai-native-sales/predictive-intelligence',
      anchor: '#velocity',
      icon: TrendingUp,
      badge: '40-60% Faster Growth',
      description: 'Continuous algorithmic telemetry detecting stage-slip, deal stagnation, and funnel imbalances with automated next-best-action intervention playbooks.',
      features: ['Stage-Slip Detection', 'Automated Intervention Triggers', 'Deal Health Scoring']
    },
    {
      title: 'Buying Committee Consensus Visibility',
      category: 'Deal Execution & Enablement',
      path: '/ai-native-sales/deal-execution',
      anchor: '#committee',
      icon: Users,
      badge: '+15 Pts Win Rate',
      description: 'Multi-threaded mapping of 6-10 stakeholder buying committees with real-time consensus scoring, champion identification, and blocker mitigation alerts.',
      features: ['Stakeholder Influence Graphs', 'Consensus Scoring Models', 'Champion Identification Agents']
    },
    {
      title: 'Real-Time Rep Telemetry & Battlecards',
      category: 'Deal Execution & Enablement',
      path: '/ai-native-sales/deal-execution',
      anchor: '#telemetry',
      icon: Activity,
      badge: '50% Faster Ramp',
      description: 'Objective in-flight measurement of rep productivity and conversational signals paired with dynamic, live-updating competitive battlecards during active calls.',
      features: ['Rep Productivity Attribution', 'In-Flight Coaching Triggers', 'Dynamic Rival Displacement']
    },
    {
      title: 'Zero-Trust Integrations & Security',
      category: 'Integrations & Security',
      path: '/ai-native-sales/integrations',
      anchor: '#integrations',
      icon: ShieldCheck,
      badge: 'SOC2 Type II & ISO 27001',
      description: 'Enterprise-grade bidirectional data sync across your existing CRM, engagement platforms, and data warehouses with CMEK encryption and zero model training.',
      features: ['Zero Rip-and-Replace APIs', 'AES-256 / TLS 1.3 Encryption', 'Zero-Trust RBAC & MFA']
    }
  ];

  const architectureSteps = [
    {
      step: '01',
      title: 'Multi-Source Signal Ingestion',
      subtitle: 'Dark-Funnel & First-Party Telemetry',
      description: 'Continuous continuous ingestion from 1st-party CRM/product data, 2nd-party engagement feeds, and 3rd-party intent networks (Bombora, 6sense, G2) at microsecond intervals.',
      tech: 'Distributed Event Streaming & Zero-Copy Ingestion'
    },
    {
      step: '02',
      title: 'Neural Propensity & ICP Synthesis',
      subtitle: 'Dynamic Buyer Tiering Engine',
      description: 'Proprietary ML models fuse account firmographics, hiring indicators, executive movements, and web consumption to rank buying propensity across your TAM.',
      tech: 'Neural Network Scoring & Account Graph DB'
    },
    {
      step: '03',
      title: 'Autonomous Outbound & Multi-Channel Meshing',
      subtitle: 'Agentic Execution Fleet',
      description: 'Autonomous SDR agents execute bespoke multi-touch cadences across email, LinkedIn, and voice, dynamically tailoring value propositions to committee personas.',
      tech: 'Context-Engineered LLMs & Multi-Channel APIs'
    },
    {
      step: '04',
      title: 'Buying Committee Telemetry & Deal Pacing',
      subtitle: 'Consensus & Pipeline Pacing',
      description: 'Continuous tracking of multi-stakeholder consensus, sentiment velocity, and deal stage duration with automatic trigger warnings for stalled opportunities.',
      tech: 'Consensus Scoring Algorithms & MEDDPICC Gates'
    },
    {
      step: '05',
      title: 'Closed-Loop Learning & Deterministic Forecast',
      subtitle: 'Self-Calibrating Revenue Intelligence',
      description: 'Every interaction, win, objection, and stage transition updates the unified forecast model, replacing rep-commit guesswork with mathematical certainty.',
      tech: 'Bayesian Prediction Models & Bidirectional CRM Sync'
    }
  ];

  const verifiedMetrics = [
    { value: '3.8x', label: 'Meeting Velocity Lift', note: 'Compared to manual SDR outbound baselines' },
    { value: '80%', label: 'Auto-Sourced SQLs', note: 'Qualified opportunities generated autonomously' },
    { value: '65%', label: 'CAC Reduction', note: 'Decreased customer acquisition cost at scale' },
    { value: '98%', label: 'ICP Target Accuracy', note: 'Eliminating wasted outreach outside optimal tier' },
    { value: '+50%', label: 'Forecast Accuracy Lift', note: 'Variance reduction vs. rep-commit estimates' },
    { value: '24/7', label: 'Always-On Operations', note: 'Continuous prospect engagement across all time zones' }
  ];

  const failureModes = [
    {
      failure: 'Fragmented Point-Tool Sprawl',
      legacy: 'Teams purchase 12+ siloed sales tech tools (enrichment, sequencing, dialers, recording, forecasting) that don’t talk to each other.',
      resolution: 'Unified Revenue Operating System that ingests, scores, engages, and forecasts within a single cohesive intelligence fabric.'
    },
    {
      failure: 'Generic, Low-Converting Outbound Spam',
      legacy: 'Static mail-merge cadences that burn domain reputation and convert at less than 0.8% with zero situational relevance.',
      resolution: 'Agentic SDRs synthesizing real-time trigger events, financial reports, and executive priorities into bespoke 1-to-1 outreach.'
    },
    {
      failure: 'Single-Threaded Committee Blindness',
      legacy: 'Reps rely on a single champion, leaving 6-8 other executive buying committee stakeholders ignored until legal/procurement kills the deal.',
      resolution: 'Autonomous multi-threading mapping consensus scores across Finance, IT, Operations, and Security concurrently.'
    },
    {
      failure: 'Rep-Commit Forecast Guesswork',
      legacy: 'Quarterly forecasts built on rep optimism and end-of-month panic, causing 30-50% forecast variances at the board level.',
      resolution: 'Deterministic mathematical forecasting derived from empirical stage velocity, stakeholder consensus, and verified intent signals.'
    },
    {
      failure: 'Long Rep Ramp Times & High Turnover',
      legacy: 'New reps take 6-9 months to reach quota productivity, leaving high pipeline gaps and lost revenue during rep turnover.',
      resolution: 'Persistent institutional intelligence with dynamic battlecards and real-time rep telemetry driving full productivity in under 60 days.'
    }
  ];

  const customerFits = [
    {
      segment: 'Enterprise B2B SaaS',
      acv: '$50k - $500k+ ACV',
      profile: 'Multi-product software enterprises with complex 6-10 stakeholder buying committees and long 90-180 day sales cycles.',
      impact: 'Rapid committee multi-threading, 50% faster ramp times, and automated MEDDPICC qualification.'
    },
    {
      segment: 'FinTech & Capital Markets',
      acv: '$100k - $1M+ ACV',
      profile: 'Regulated financial infrastructure, payments, and risk software requiring strict compliance and zero data leakage.',
      impact: 'SOC2 Type II & ISO 27001 verified pipelines with autonomous dark-funnel intent capture.'
    },
    {
      segment: 'Enterprise AI & Cloud Infrastructure',
      acv: '$75k - $750k+ ACV',
      profile: 'High-growth technology platforms expanding into new geographic markets or displacing legacy incumbents.',
      impact: '3.8x outbound meeting acceleration and dynamic real-time displacement battlecards.'
    },
    {
      segment: 'Complex Technical & Professional Services',
      acv: '$150k - $2M+ Engagements',
      profile: 'Consulting, systems engineering, and implementation firms needing predictable, high-value corporate mandates.',
      impact: 'Algorithmic ICP propensity scoring identifying unannounced board initiatives and budget allocations.'
    }
  ];

  const engagementStages = [
    {
      stage: 'Stage 01',
      title: 'Revenue Diagnostic & Telemetry Baseline',
      duration: 'Weeks 1–2',
      description: 'Comprehensive audit of your TAM, historical win/loss data, current CRM health, and SDR conversion benchmarks. We configure API connectors and map your proprietary ICP propensity neural weights.',
      deliverables: ['Revenue Telemetry Diagnostic Memo', 'TAM ICP Propensity Scoring Map', 'Zero-Trust Security Integration Plan']
    },
    {
      stage: 'Stage 02',
      title: 'Pilot Pod Deployment & Live Calibration',
      duration: 'Weeks 3–6',
      description: 'Deployment of your first Agentic SDR fleet across target micro-segments under strict human-in-the-loop governance. Real-time sequence testing, objection-mesh tuning, and buying committee multi-threading.',
      deliverables: ['Active Agentic SDR Fleets', 'Live Meeting Booking Telemetry', 'Buying Committee Visibility Dashboards']
    },
    {
      stage: 'Stage 03',
      title: 'Enterprise Scale & Autonomous Governance',
      duration: 'Weeks 7+',
      description: 'Full expansion across all target verticals and rep teams. Implementation of continuous machine learning feedback loops, dynamic battlecards, and mathematical forecast accuracy models.',
      deliverables: ['Full Operating System Ownership', 'Automated Pipeline Velocity Shield', 'Quarterly Algorithmic Forecast Retuning']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
            alt="AI Native Sales Autonomous Architecture"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/70" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Positioning */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-xs">
                <BrainCircuit className="w-3.5 h-3.5 text-blue-400" />
                <span>The Autonomous Revenue Operating System</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                AI Native Sales: <span className="text-blue-400">The Autonomous Revenue</span> Operating System
              </h1>

              <div className="text-lg sm:text-xl text-blue-200/90 font-medium mb-4 leading-relaxed max-w-3xl">
                ProfitMachines engineers autonomous sales operations — replacing fragmented GTM tool stacks with a unified, self-learning revenue intelligence layer.
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                Legacy sales operations are bottlenecked by manual research, siloed tooling, and rep-commit guesswork. ProfitMachines engineers a deterministic, mathematical sales infrastructure combining autonomous outbound SDR fleets, neural ICP propensity scoring, buying committee consensus visibility, and closed-loop forecasting.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                >
                  <span>Book a Revenue Diagnostic</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-4 rounded-xl transition-all border border-slate-700/80 text-sm sm:text-base"
                >
                  <span>Explore 4 Core Modules</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Summary Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYSTEM STATUS // ACTIVE</span>
                  </div>
                  <span className="text-blue-400">v4.8 ENTERPRISE</span>
                </div>

                <div className="space-y-4">
                  <div className="text-xs text-slate-300 font-medium leading-relaxed">
                    Deterministic revenue acceleration engineered across 4 integrated functional disciplines:
                  </div>

                  <div className="space-y-2.5">
                    <Link
                      to="/ai-native-sales/agentic-sdr"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Bot className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-white">Agentic SDR & Autopilots</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 group-hover:text-blue-400">3.8x Lift &rarr;</span>
                    </Link>

                    <Link
                      to="/ai-native-sales/predictive-intelligence"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Target className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-white">Predictive Intelligence</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 group-hover:text-emerald-400">98% ICP &rarr;</span>
                    </Link>

                    <Link
                      to="/ai-native-sales/deal-execution"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-bold text-white">Deal Execution & Enablement</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 group-hover:text-purple-400">+15 Win Rate &rarr;</span>
                    </Link>

                    <Link
                      to="/ai-native-sales/integrations"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold text-white">Integrations & Security</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-400">SOC2 Type II &rarr;</span>
                    </Link>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Zero Model Training</span>
                    <span className="text-emerald-400">99.99% Uptime SLA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. STRATEGIC THESIS (SPLIT LAYOUT) ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>The Strategic Thesis</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Deterministic Revenue is an <span className="text-blue-600">Engineering Problem</span>, Not a Motivational One
              </h2>

              <blockquote className="p-6 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-800 font-medium text-lg leading-relaxed italic">
                &ldquo;Sub-second buyer intent detection, deterministic pipeline pacing, and mathematically verified forecast accuracy — deployed as a permanent operating system, not a point tool.&rdquo;
              </blockquote>

              <p className="text-base text-slate-600 leading-relaxed">
                For twenty years, enterprise sales organizations have attempted to scale revenue by hiring more junior reps and buying disjointed point tools. This model has reached systemic exhaustion: CAC has risen 70%, rep turnover averages 34% annually, and board-level forecast misses are standard.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                ProfitMachines treats revenue generation as a closed-loop cybernetic feedback system. By pairing agentic workflows with deterministic mathematical guardrails, we eliminate latency across the entire revenue cycle — from dark-funnel intent capture to closing committee consensus.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 pb-3 border-b border-slate-800">
                  SYSTEMIC ARCHITECTURE SHIFT
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-red-500/30">
                    <div className="text-xs font-mono font-bold text-red-400 mb-1 uppercase tracking-wider">
                      Legacy GTM Stack (Fragmented & Fragile)
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      12 disconnected SaaS licenses, stale manual enrichment, reps spending 68% of their day on non-selling admin, generic spray-and-pray outbound, and emotional &ldquo;gut-feel&rdquo; pipeline commits.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/40">
                    <div className="text-xs font-mono font-bold text-blue-400 mb-1 uppercase tracking-wider">
                      ProfitMachines Revenue OS (Unified & Autonomous)
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Unified autonomous intelligence layer sitting directly atop existing CRM/warehouses. Continuous real-time intent telemetry, deterministic 1-to-1 account meshing, automated buying committee multi-threading, and Bayesian mathematical forecasts.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-2xl font-black text-white font-mono">100%</div>
                    <div className="text-xs text-slate-400">Bidirectional CRM Sync</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-2xl font-black text-blue-400 font-mono">0ms</div>
                    <div className="text-xs text-slate-400">Context Loss Between Stages</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. SIX CAPABILITY OVERVIEW CARDS (LINKING TO THE 4 SUB-PAGES) ── */}
      <section id="capabilities" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Comprehensive Architectural Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Six Core Autonomous Capabilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Engineered as interlocking modules that deploy seamlessly into your enterprise environment. Explore each specialized category deep dive below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                        {cap.badge}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                      {cap.category}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {cap.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {cap.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={`${cap.path}${cap.anchor}`}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-600 group-hover:text-blue-700 hover:underline"
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. 5-STEP AUTONOMOUS ARCHITECTURE FLOW ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              System Engineering Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              The 5-Step Autonomous Architecture Flow
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              How data, machine intelligence, and deterministic execution interact in real time across the full revenue lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {architectureSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between relative hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-blue-600">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-500/50" />
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-mono text-blue-600 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[10px] font-mono text-slate-500">
                  {step.tech}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. VERIFIED OUTCOMES (METRICS) ── */}
      <section className="py-16 lg:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Empirical Performance Baselines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Verified Production Metrics
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Performance metrics audited across enterprise production deployments within 90 days of activation:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {verifiedMetrics.map((met, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-left hover:border-blue-500/50 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono tracking-tight mb-2">
                  {met.value}
                </div>
                <div className="text-xs font-bold text-white mb-1.5 uppercase tracking-wide">
                  {met.label}
                </div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  {met.note}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. FAILURE MODES SOLVED ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Root-Cause Resolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Five Critical Failure Modes Solved
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              How the ProfitMachines Autonomous Revenue OS replaces systemic sales dysfunctions with deterministic software systems:
            </p>
          </div>

          <div className="space-y-4">
            {failureModes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-3">
                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">FAILURE MODE 0{idx + 1}</div>
                  <h3 className="text-base font-extrabold text-slate-900">{item.failure}</h3>
                </div>

                <div className="md:col-span-4 p-4 rounded-xl bg-white border border-red-200/60 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-red-600 block mb-1 font-mono uppercase text-[10px]">Legacy Operating Dysfunction:</span>
                  {item.legacy}
                </div>

                <div className="md:col-span-5 p-4 rounded-xl bg-blue-50 border border-blue-200/60 text-xs text-slate-800 leading-relaxed">
                  <span className="font-bold text-blue-700 block mb-1 font-mono uppercase text-[10px]">ProfitMachines Autonomous Resolution:</span>
                  {item.resolution}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. IDEAL CUSTOMER FIT ── */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Organizational Eligibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Ideal Customer Profile & Qualification Criteria
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              AI Native Sales is built for organizations where deal complexity, multi-stakeholder friction, or high TAM value requires deterministic systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerFits.map((fit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:border-blue-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-extrabold text-slate-900">{fit.segment}</h3>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                    {fit.acv}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {fit.profile}
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 font-medium">
                  <span className="text-blue-600 font-bold uppercase font-mono text-[10px] block mb-1">Architectural Impact:</span>
                  {fit.impact}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. INTEGRATION OVERVIEW ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                Zero Rip-and-Replace Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Seamless Integration with Your Enterprise Stack
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                ProfitMachines does not demand that you discard your investments. Our architecture functions as an autonomous operating layer that connects directly with your current CRM, intent data providers, communication rails, and enterprise data warehouses via bidirectional, encrypted APIs.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-mono font-bold text-blue-600 mb-1">BIDIRECTIONAL CRM SYNC</div>
                  <div className="text-xs text-slate-600">Sub-second synchronization with Salesforce, HubSpot, and MS Dynamics.</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-mono font-bold text-blue-600 mb-1">DATA WAREHOUSE NATIVE</div>
                  <div className="text-xs text-slate-600">Zero-copy queries across Snowflake, BigQuery, and Databricks.</div>
                </div>
              </div>

              <div>
                <Link
                  to="/ai-native-sales/integrations"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Review full integration matrix and security standards</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-800 flex items-center justify-between">
                  <span>SUPPORTED ECOSYSTEMS</span>
                  <span className="text-emerald-400">REST & Webhook Connectors</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-white">CRM & Pipeline</span>
                    <span className="text-xs font-mono text-slate-400">Salesforce · HubSpot · Dynamics 365</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-white">Outbound & Sequences</span>
                    <span className="text-xs font-mono text-slate-400">Outreach · SalesLoft · Apollo · Gong</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-white">Intent Telemetry</span>
                    <span className="text-xs font-mono text-slate-400">Bombora · 6sense · G2 · ZoomInfo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-white">Communications</span>
                    <span className="text-xs font-mono text-slate-400">Slack · MS Teams · Zoom · Gmail / Outlook</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-white">Data Infrastructure</span>
                    <span className="text-xs font-mono text-slate-400">Snowflake · BigQuery · Databricks</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. ENGAGEMENT PATH (3-STAGE PATHWAY) ── */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Implementation Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              The 3-Stage Engagement Path
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From initial telemetry diagnostic to full-scale autonomous revenue execution in 90 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementStages.map((stg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {stg.stage}
                    </span>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {stg.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {stg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {stg.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Core Deliverables:
                  </div>
                  {stg.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 10. FINAL CTA FORM ── */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Confidential Architecture Review</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Architect Your Autonomous Revenue Engine
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with our Principal Revenue Systems Architects. We conduct a rigorous, data-backed diagnostic of your pipeline velocity, TAM propensity distribution, and outbound automation opportunities under strict mutual NDA standards.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24-Hour Executive Architectural Response</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive Pipeline Telemetry Baseline Memo</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-Commitment Diagnostic with Verified ROI Scenarios</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AiSalesIntakeForm
                pageContext="AI Native Sales Hub"
                defaultService="Autonomous Revenue Diagnostic"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
