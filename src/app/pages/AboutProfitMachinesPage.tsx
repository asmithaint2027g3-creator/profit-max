import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building2, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, Activity, Target,
  Zap, Globe, Sparkles, ChevronRight, Lock, Users, Network,
  AlertCircle, Scale, Database, Clock, RefreshCw, Check
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import LeadCaptureSection from '../components/LeadCaptureSection';

export default function AboutProfitMachinesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'mission' | 'approach' | 'governance'>('mission');
  const [selectedCapabilityIndex, setSelectedCapabilityIndex] = useState<number>(0);

  useEffect(() => {
    document.title = "About ProfitMachines | AI-Native Revenue Transformation Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ProfitMachines is an AI-Native Revenue Transformation Platform helping businesses identify profitable growth opportunities, generate qualified demand, improve sales execution, and optimize revenue operations.');
    }
  }, []);

  const verifiedCapabilities = [
    {
      id: 'profit-pool-discovery',
      name: 'Profit Pool Discovery',
      badge: 'Discovery Engine',
      tagline: 'Quantifying Underserved Commercial Headroom',
      desc: 'Systematically surfaces uncaptured demand pools, dormant high-fit accounts, and buyer willingness-to-pay signals across your target addressable market before competitors intercept them.',
      metrics: '28.4% Average Contribution Margin Lift',
      deliverables: ['Dark-funnel intent surge interception', 'Dormant account reactivation blueprints', 'Micro-niche commercial sizing', 'Parent-subsidiary expansion mapping'],
      link: '/offerings/profit-pool-discovery'
    },
    {
      id: 'demand-engineering',
      name: 'Demand Engineering',
      badge: 'Signal Sensing',
      tagline: 'Algorithmic Demand Capture & Intent Sensing',
      desc: 'Replaces generic top-of-funnel outbound campaigns with high-precision demand telemetry, monitoring executive hiring surges, category evaluations, and tech stack transitions in real time.',
      metrics: '3.8× Increase in Sales-Accepted Pipeline',
      deliverables: ['Multi-signal intent scoring models', 'Autonomous account briefings', 'Buying committee persona orchestration', 'Dynamic value proposition synthesis'],
      link: '/demand-pulse'
    },
    {
      id: 'sales-acceleration',
      name: 'Sales Acceleration',
      badge: 'Execution Velocity',
      tagline: 'Compressing Response Latency & Closing Friction',
      desc: 'Empowers commercial reps with real-time deal telemetry, automated objection guidance, and sub-60-second inbound response routing that halts conversion decay.',
      metrics: '52% Compression in Sales Cycle Latency',
      deliverables: ['Sub-60s autonomous intake dossiers', 'Dynamic deal desk calculation engines', 'Executive objection counter-battlecards', 'Automated meeting prep dossiers'],
      link: '/ai-native-sales'
    },
    {
      id: 'revenue-operations',
      name: 'Revenue Operations',
      badge: 'Infrastructure & Flow',
      tagline: 'Single-Source Commercial Truth & Data Hygiene',
      desc: 'Unifies fragmented CRM pipelines, billing systems, and customer engagement telemetry into an automated, zero-touch operational data backbone.',
      metrics: '14 hrs/week Saved per Sales Representative',
      deliverables: ['Zero-touch CRM data enrichment', 'Stage progression gate validation', 'Automated cross-functional handoffs', 'Multi-source attribution reconciliation'],
      link: '/solutions#sales-ops'
    },
    {
      id: 'gtm-transformation',
      name: 'GTM Transformation',
      badge: 'Commercial Architecture',
      tagline: 'Engineering Enterprise Scale & Predictable Growth',
      desc: 'Restructures enterprise go-to-market motions from ad-hoc rep intuition into mathematically validated sales engineering frameworks aligned with CFO business cases.',
      metrics: '65% Reduction in Enterprise CAC Drag',
      deliverables: ['Territory capacity modeling', 'Outcome-based pricing architectures', 'Compensation & incentive alignment', 'Board-level commercial predictability'],
      link: '/growth-science'
    },
    {
      id: 'customer-success',
      name: 'Customer Success',
      badge: 'Retention & Expansion',
      tagline: 'Autonomous Churn Interception & Account NRR Lift',
      desc: 'Monitors consumption ceilings, executive sponsor movements, and account usage decay to trigger targeted expansion plays before renewals come under risk.',
      metrics: '124% Average Net Revenue Retention (NRR)',
      deliverables: ['Early warning churn detection algorithms', 'Consumption expansion blueprints', 'Executive health score telemetry', 'Stakeholder turnover alerts'],
      link: '/ai-native-sales/customer-growth'
    },
    {
      id: 'growth-intelligence',
      name: 'Growth Intelligence',
      badge: 'Empirical Science',
      tagline: 'Mathematical Pipeline Forecasting & Risk Modeling',
      desc: 'Replaces subjective sales rep confidence with empirical win-probability indices computed from authentic stage progression velocity and historical deal behavior.',
      metrics: '94% Board Forecast Accuracy Rate',
      deliverables: ['Leading vs. lagging telemetry modeling', 'Pipeline risk heatmaps', 'Deal slip early warning systems', 'Continuous scenario simulations'],
      link: '/growth-science'
    },
    {
      id: 'ai-trust-governance',
      name: 'AI Trust & Governance',
      badge: 'Enterprise Security',
      tagline: 'Strict Mutual NDA & Zero Data Leakage Standards',
      desc: 'Enterprise-grade cognitive security, SOC-2 Type II readiness, and deterministic verification protocols ensuring proprietary commercial data remains strictly isolated.',
      metrics: '100% Client Data Isolation Guaranteed',
      deliverables: ['Zero-data-retention AI inference', 'Strict mutual NDA protocols', 'Audit-ready compliance reporting', 'Enterprise role-based permissions'],
      link: '/security'
    }
  ];

  const methodologyStages = [
    {
      num: '01',
      title: 'Commercial Signal Sensing',
      subtitle: 'Isolating Dark-Funnel & Account Intent',
      desc: 'Deploying real-time telemetry across industry buying signals, executive leadership reshuffles, and procurement cycles to uncover untapped commercial demand.',
      kpi: 'Sub-60s Detection'
    },
    {
      num: '02',
      title: 'AI Orchestration & Context Dossiers',
      subtitle: 'Synthesizing Decision-Maker Intelligence',
      desc: 'Autonomous multi-source synthesis generating CFO-ready business cases, buying committee maps, and account pain hypotheses before the initial conversation.',
      kpi: '360° Account Context'
    },
    {
      num: '03',
      title: 'High-Velocity Sales Acceleration',
      subtitle: 'Eliminating Operational Deal Friction',
      desc: 'Empowering commercial teams with algorithmic deal scoring, real-time objection counters, and automated CRM hygiene that compress buying cycle duration.',
      kpi: '50% Faster Close'
    },
    {
      num: '04',
      title: 'Closed-Loop Telemetry Governance',
      subtitle: 'Continuous Margin & Retention Optimization',
      desc: 'Reconciling CRM pipelines with actual billing data and usage telemetry, guaranteeing empirical board forecasts and long-term customer compounding.',
      kpi: '120%+ NRR Compounding'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ── STICKY PAGE SUB-NAV BAR (FOR FAST AUDIT JUMPING) ── */}
      <nav aria-label="About Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">COMPANY</span>
            <span className="font-bold text-slate-200">About ProfitMachines</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">AI-Native Revenue Transformation</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a>
            <a href="#mission-vision" className="hover:text-blue-400 font-bold text-blue-400 transition-colors">Mission &amp; Vision</a>
            <a href="#problem" className="hover:text-blue-400 transition-colors">The Challenge</a>
            <a href="#approach" className="hover:text-blue-400 transition-colors">Our Approach</a>
            <a href="#capabilities" className="hover:text-blue-400 transition-colors">8 Capabilities</a>
            <a href="#methodology" className="hover:text-blue-400 transition-colors">Methodology</a>
            <a href="#values" className="hover:text-blue-400 transition-colors">Values</a>
            <a href="#consultation" className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">Briefing</a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 01: EXECUTIVE HERO (GLOBAL ACCELERATION PALETTE) ── */}
      <section id="overview" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">About Us</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">About ProfitMachines</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/80 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI-Native Revenue Transformation Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
                Engineering Predictable, Connected Commercial Systems for <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300">
                  Compounding Business Growth
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mb-8">
                ProfitMachines helps enterprise organizations identify hidden profit pools, generate qualified demand, accelerate sales velocity, and synchronize revenue operations through connected intelligence, AI, and workflow automation.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Discuss Your Revenue Growth Priorities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
                >
                  <span>Explore 8 Verified Capabilities</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bento in Dark Slate */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Enterprise Impact</span>
                <div className="text-3xl font-black text-white mt-1 mb-1 font-heading">$5B+</div>
                <p className="text-xs text-slate-400 leading-snug">Client revenue impact generated across verified deployments.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-400 tracking-wider">Global Reach</span>
                <div className="text-3xl font-black text-blue-400 mt-1 mb-1 font-heading">20+</div>
                <p className="text-xs text-slate-400 leading-snug">Countries served across North America, APAC, and EMEA.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 tracking-wider">Cycle Compression</span>
                <div className="text-3xl font-black text-emerald-400 mt-1 mb-1 font-heading">50%</div>
                <p className="text-xs text-slate-400 leading-snug">Average reduction in enterprise sales cycle latency.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm">
                <span className="text-[10px] font-mono font-bold uppercase text-indigo-400 tracking-wider">Retention Pacing</span>
                <div className="text-3xl font-black text-indigo-400 mt-1 mb-1 font-heading">124%</div>
                <p className="text-xs text-slate-400 leading-snug">Average net revenue retention across enterprise accounts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 01.5: MISSION & VISION (ARCHITECTURAL DUAL-BENTO PILLARS) ── */}
      <section id="mission-vision" className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '3rem 3rem' }} />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-full">
              Strategic Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mt-3 mb-4">
              Our Mission &amp; Long-Term Vision
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              ProfitMachines was founded on the conviction that commercial revenue is an engineered discipline — not an unpredictable art. Here is what drives our advisory and AI systems every day.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Mission Bento Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all" />
              
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/90 border border-blue-800/80 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Target className="w-3.5 h-3.5 text-blue-400" />
                    <span>OUR MISSION</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold uppercase">COMMERCIAL CERTAINTY</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-4">
                  Transform Enterprise Revenue into a Predictable, Compounding Engineering Discipline
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                  To eliminate the structural friction, siloed operations, and delayed responsiveness that cause enterprise growth to stall. We equip commercial organizations with connected AI intelligence, autonomous execution agents, and mathematical telemetry that compound ARR with board-level certainty.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    { label: 'Synchronized Revenue Operations', desc: 'Break down walls between demand marketing, sales execution, and customer retention.' },
                    { label: 'Autonomous Capacity Multipliers', desc: 'Free high-value account executives from CRM drag through cognitive SDR agents.' },
                    { label: 'Empirical Forecast Integrity', desc: 'Replace gut-feel deal forecasting with mathematical stage progression telemetry.' }
                  ].map((item, mIdx) => (
                    <div key={mIdx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">{item.label}</div>
                        <div className="text-[11px] text-slate-400 leading-snug mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>IMPACT METRIC</span>
                <span className="text-blue-400 font-bold font-mono">100% AUDITABLE ARR LIFT</span>
              </div>
            </div>

            {/* Vision Bento Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-all" />

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/90 border border-indigo-800/80 text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>OUR VISION</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold uppercase">THE AUTONOMOUS ERA</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-4">
                  The Global Operating Standard for Autonomous Enterprise Commercial Systems
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                  We envision a commercial future where every enterprise operates an autonomous, self-learning revenue infrastructure. An ecosystem where buying intent is detected months before RFPs are issued, where commercial meetings are briefed with exhaustive context, and where global revenue expands frictionlessly across borders.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    { label: 'Continuous Dark-Funnel Telemetry', desc: 'Real-time global signal sensing identifying high-intent accounts 60-90 days early.' },
                    { label: 'Autonomous Revenue Cadres', desc: 'Cognitive agents conducting multi-threaded account research with sub-60s response latency.' },
                    { label: 'Sovereign Enterprise AI Trust', desc: 'Zero data leakage, strict local data residency, and enterprise-grade isolation guarantees.' }
                  ].map((item, vIdx) => (
                    <div key={vIdx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">{item.label}</div>
                        <div className="text-[11px] text-slate-400 leading-snug mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>COMMERCIAL HORIZON</span>
                <span className="text-indigo-400 font-bold font-mono">20+ COUNTRIES UNIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: THE BUSINESS PROBLEM (WHY FRAGMENTED REVOPS LIMITS GROWTH) ── */}
      <section id="problem" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              The Structural Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Why Fragmented Demand, Sales Execution, and Revenue Operations Limit Growth
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Most enterprise organizations do not suffer from a lack of sales talent or marketing budget. They suffer from structural disconnection across the commercial value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold mb-5 border border-red-100">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Disconnected Demand Signals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Marketing pours millions into top-of-funnel clicks, while high-intent accounts actively researching the category in the dark funnel go unnoticed until competitors have already shaped the RFP.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Symptom: High CAC &bull; Low Stage-1 Conversion
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-5 border border-amber-100">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Severe Lead Decay Latency</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Inbound enterprise inquiries sit in manual SDR queues for hours or days. Every hour of delay degrades commercial conversion by over 78% as stakeholder buying urgency evaporates.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Symptom: Stalled Pipeline &bull; Opportunity Attrition
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-5 border border-blue-100">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Unreliable Revenue Telemetry</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Board reporting and quarterly forecasts rely on subjective sales rep optimism rather than empirical mathematical models, leading to sudden revenue misses and uncontrolled discount leakage.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Symptom: Unpredictable ARR &bull; Margin Compression
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: THE PROFITMACHINES APPROACH (CONNECTED REVENUE TRANSFORMATION) ── */}
      <section id="approach" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                Engineering-First Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-6">
                The ProfitMachines Connected Revenue Architecture
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  At ProfitMachines, we treat revenue as a <strong>solvable engineering problem</strong>, not an unpredictable art. True commercial scale requires continuous connection across the entire customer lifecycle.
                </p>
                <p>
                  Rather than deploying isolated point tools, our platform synchronizes buyer intent detection, autonomous intelligence dossiers, sales execution velocity, and closed-loop data telemetry into a single compounding growth engine.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Dual-track transformation: Rapid 90-day pipeline lift while constructing durable enterprise systems.',
                  'Empirical revenue science: Eliminating subjective rep guessing with mathematical progression telemetry.',
                  'Autonomous workflow orchestration: Liberating sales capacity from administrative CRM drag.',
                  'Zero-data-leakage architecture: Ensuring strict proprietary data isolation and SOC-2 standard governance.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Visual Diagram */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                  <span className="text-blue-400 font-bold uppercase">System Architecture</span>
                  <span className="text-emerald-400 font-bold">Continuous Synchronization</span>
                </div>

                <div className="space-y-3.5 my-6">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-blue-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">1</div>
                      <div>
                        <div className="text-sm font-bold text-white">Demand Signals & ICP Intent</div>
                        <div className="text-xs text-slate-400">Dark-funnel surges & buyer intent telemetry</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 font-bold">INGEST</span>
                  </div>

                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-blue-500/50" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-indigo-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">2</div>
                      <div>
                        <div className="text-sm font-bold text-white">AI Context & Dossier Orchestration</div>
                        <div className="text-xs text-slate-400">Pre-call intelligence & buyer committee mapping</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold">SYNTHESIZE</span>
                  </div>

                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-indigo-500/50" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-sky-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-600/20 text-sky-400 flex items-center justify-center font-bold">3</div>
                      <div>
                        <div className="text-sm font-bold text-white">High-Velocity Sales Execution</div>
                        <div className="text-xs text-slate-400">Sub-60s routing & dynamic deal progression</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400 font-bold">ACCELERATE</span>
                  </div>

                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-sky-500/50" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">4</div>
                      <div>
                        <div className="text-sm font-bold text-white">Telemetry Governance & Retention</div>
                        <div className="text-xs text-slate-400">Mathematical forecasting & account NRR lift</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">COMPOUND</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                  <span>LATENCY COMPRESSION: &gt;50%</span>
                  <span className="text-emerald-400">STATUS: REPEATABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: 8 VERIFIED CAPABILITIES (INTERCONNECTED INTERFACE) ── */}
      <section id="capabilities" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Full Spectrum Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Eight Verified Capabilities Powering Enterprise Transformation
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore how each interconnected capability eliminates blind spots, shortens sales cycles, and drives predictable commercial compounding.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Capability Selector List */}
            <div className="lg:col-span-5 space-y-2">
              {verifiedCapabilities.map((cap, idx) => {
                const isSelected = selectedCapabilityIndex === idx;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedCapabilityIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                        : 'bg-white text-slate-800 hover:bg-slate-100/90 border-slate-200/90'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                          0{idx + 1} &bull; {cap.badge}
                        </span>
                      </div>
                      <div className="text-base font-bold font-heading mt-0.5">{cap.name}</div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-white translate-x-1' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Selected Capability Deep Dive Panel */}
            <div className="lg:col-span-7">
              {(() => {
                const current = verifiedCapabilities[selectedCapabilityIndex];
                return (
                  <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-6">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                        {current.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                        {current.metrics}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">
                      {current.name}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 mb-4">
                      {current.tagline}
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {current.desc}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider mb-3">
                        Verified Operational Deliverables
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {current.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                      <Link
                        to={current.link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Explore Dedicated Framework</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <a
                        href="#consultation"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-sm"
                      >
                        <span>Request Capability Audit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 05: REVENUE IMPROVEMENT METHODOLOGY ── */}
      <section id="methodology" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Empirical Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              How ProfitMachines Executes Systemic Revenue Improvement
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A four-stage quantitative operational protocol deployed across enterprise commercial teams to eliminate pipeline decay and accelerate sales execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologyStages.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-blue-600">{st.num}</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
                      {st.kpi}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-1">{st.title}</h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">{st.subtitle}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: OPERATING PRINCIPLES & VALUES ── */}
      <section id="values" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              The Principles That Guide How We Build and Partner
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our engineering operating philosophy is built on quantitative rigor, radical confidentiality, and measurable economic value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-5 border border-blue-100">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Engineering Precision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe revenue growth is not an unrepeatable black box. It is a systematic flow of data, latency reduction, and decision telemetry that can be engineered.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-5 border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Zero-Data-Leakage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enterprise data sovereignty is non-negotiable. All telemetry, CRM records, and executive briefings operate under strict mutual NDA with SOC-2 standard controls.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-5 border border-indigo-100">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Dual-Track Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We balance immediate 90-day pipeline acceleration wins with the phased construction of permanent, autonomous enterprise revenue systems.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-5 border border-purple-100">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Economic Alignment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure success exclusively in verified economic outcomes: contribution margin, CAC payback compression, win-rate lift, and net revenue retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: EXECUTIVE CONSULTATION & INTAKE ── */}
      <section id="consultation" className="scroll-mt-20">
        <LeadCaptureSection />
      </section>
    </div>
  );
}

