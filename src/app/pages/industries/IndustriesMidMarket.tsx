import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Zap, ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck,
  BarChart3, ChevronRight, Sparkles, AlertCircle, CheckCircle2, Users,
  Activity, Search, DollarSign, Layers, RefreshCw, HelpCircle,
  Eye, Settings, Network, Compass, Target, Clock, Shield, Sliders
} from 'lucide-react';

const sectionNav = [
  { id: 'bottlenecks', label: 'Growth Bottlenecks' },
  { id: 'framework', label: 'Expansion Framework' },
  { id: 'entry', label: 'Rapid Market Entry' },
  { id: 'niche', label: 'Niche Domination' },
  { id: 'productivity', label: 'Team Productivity' },
  { id: 'dashboard', label: 'Performance Model' },
  { id: 'implementation', label: 'Implementation Plan' },
  { id: 'faq', label: 'FAQ' },
];

const bottlenecks = [
  {
    title: 'Constrained Sales & Marketing Capacity',
    cause: 'Mid-market commercial teams typically operate with 5 to 20 account executives who must handle prospecting, demos, closing, and account management simultaneously.',
    consequence: 'Outbound prospecting collapses whenever reps are actively engaged in closing cycles, creating severe pipeline seasonality.',
    icon: Users,
  },
  {
    title: 'Sporadic & Inconsistent Prospecting',
    cause: 'Without dedicated enterprise SDR layers, outbound outreach is executed in sporadic bursts when pipeline runs dry.',
    consequence: 'Unpredictable revenue flow and missed quarterly targets caused by empty mid-funnel pipelines 60 days later.',
    icon: Clock,
  },
  {
    title: 'Narrow Micro-Market Coverage',
    cause: 'Reps rely on personal networks or static databases, missing hundreds of high-fit accounts in adjacent territory niches.',
    consequence: 'Territories remain under-penetrated while competitors establish defensive moats in overlooked verticals.',
    icon: Target,
  },
  {
    title: 'Administrative CRM Burden',
    cause: 'Reps spend 30% to 45% of weekly hours manually logging calls, updating opportunity stages, and writing meeting recaps.',
    consequence: 'Available selling time is severely restricted, artificially capping total revenue generation per commercial headcount.',
    icon: Settings,
  },
  {
    title: 'Disconnected Point Solutions',
    cause: 'Multiple disparate tools (separate email sequencer, data provider, CRM, call recorder) without centralized workflow orchestration.',
    consequence: 'Data fragmentation, duplicate outreach errors, and ballooning annual SaaS software licensing overhead.',
    icon: Network,
  },
  {
    title: 'Vertical Expansion Friction',
    cause: 'Entering a new vertical requires building custom messaging, prospect lists, and objection-handling battlecards from scratch.',
    consequence: 'Expansion into attractive adjacent markets takes 6 to 9 months before generating initial pipeline proof.',
    icon: Compass,
  },
];

const frameworkSteps = [
  { step: '01', title: 'Choose a Market', desc: 'Identify defensible micro-verticals with high willingness-to-pay and low incumbent competition.', kpi: 'TAM Sizing' },
  { step: '02', title: 'Map Accounts', desc: 'Ingest and verify all addressable accounts meeting firmographic and technographic ICP criteria.', kpi: 'Account Coverage' },
  { step: '03', title: 'Prioritize Opportunities', desc: 'Rank accounts by active buying signals, tech stack triggers, and historical conversion fit.', kpi: 'Propensity Index' },
  { step: '04', title: 'Launch Outreach', desc: 'Deploy automated, multi-channel research and personalized touchpoints with rep oversight.', kpi: 'Meeting Rate' },
  { step: '05', title: 'Qualify Demand', desc: 'Filter inbound and outbound conversations through structured criteria before AE handoff.', kpi: 'SQL Yield' },
  { step: '06', title: 'Improve Coverage', desc: 'Analyze win/loss telemetry to refine targeting parameters and expand into adjacent niches.', kpi: 'Market Share %' },
];

const kpiData = [
  { label: 'Target Account Coverage', value: '88%', note: 'Addressable accounts actively mapped' },
  { label: 'Qualified Meetings / Rep / Mo', value: '16.4', note: 'Up from 6.8 baseline' },
  { label: 'Selling Time Share', value: '64%', note: 'Percentage of weekly hours in active conversations' },
  { label: 'Time to Market Entry', value: '28 days', note: 'From niche selection to first qualified meeting' },
  { label: 'Blended Cost Per SQL', value: '$340', note: 'All-inclusive data and software cost' },
  { label: 'Opportunity Win Rate', value: '28.5%', note: 'Closed won ÷ Qualified opportunities' },
  { label: 'Average Contract Value Lift', value: '+34%', note: 'Driven by multi-product offer bundling' },
  { label: 'CRM Data Completeness', value: '98.2%', note: 'Automated logging of buyer telemetry' },
];

const implementationStages = [
  { stage: 'Phase 1', title: 'Niche Focus & Data Hygiene (Days 1–15)', actions: ['Audit CRM data and isolate highest-converting historical customer deciles', 'Define single high-margin micro-vertical for initial deployment', 'Configure compliance and communication boundaries'] },
  { stage: 'Phase 2', title: 'Workflow Orchestration (Days 16–30)', actions: ['Deploy AI research and prospecting co-pilots for target niche accounts', 'Establish rep review queues and approved messaging frameworks', 'Integrate CRM bidirectional sync to automate meeting note logging'] },
  { stage: 'Phase 3', title: 'Controlled Activation (Days 31–60)', actions: ['Launch structured outreach across top 200 prioritized niche accounts', 'Hold weekly calibration reviews analyzing reply sentiment and objection trends', 'Measure baseline conversion from first qualified meetings to open pipeline'] },
  { stage: 'Phase 4', title: 'Expansion & Multi-Vertical Scale (Days 61+)', actions: ['Compare cohort performance against pre-implementation baseline', 'Replicate validated playbooks into adjacent micro-vertical niches', 'Introduce deal acceleration and proposal generation automations'] },
];

const faqs = [
  { q: 'Is our team size (e.g. 8–15 reps) appropriate for this platform?', a: 'Yes. Mid-market companies with lean commercial teams often realize the highest relative return because eliminating administrative drag directly increases active selling capacity by 50% or more without requiring net-new headcount.' },
  { q: 'Can we deploy this without disrupting our current sales quarter?', a: 'Yes. Implementations begin with a focused pilot targeting a single defined niche or rep pod. Current CRM operations and in-flight deals remain untouched while the new workflow establishes baseline performance.' },
  { q: 'What CRM platforms are supported?', a: 'Native bidirectional integrations support HubSpot Sales Hub, Salesforce Enterprise, and Pipedrive. Contact notes, deal stage progressions, and call transcripts sync automatically via API.' },
  { q: 'How does the platform avoid generic, robotic outbound messaging?', a: 'Outreach relies on deep company research — referencing specific recent news, leadership hires, technographic stack shifts, and company priorities. Every initial sequence is routed through rep approval queues before dispatch.' },
  { q: 'What is the typical timeframe to see first pipeline impact?', a: 'Initial qualified meetings are typically logged within 2 to 3 weeks of pilot activation following niche data ingestion and review approvals.' },
  { q: 'How do you measure productivity lift objectively?', a: 'We measure baseline active selling hours (calendar time in meetings and calls) against time logged in CRM data entry, tracking the proportion of weekly hours restored to active selling.' },
];

export default function IndustriesMidMarket() {
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Mid-Market Growth Engineering | Scale Revenue Leanly | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3.5 h-3.5" /><span>Mid-Market Growth Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 leading-[1.1]">
                Scale Revenue Without Scaling{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400">
                  Operational Complexity.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                Growing mid-market businesses need broader market coverage and more consistent revenue execution without adding unnecessary operational overhead. ProfitMachines helps teams identify attractive niches, organize prospecting, and eliminate repetitive work through coordinated, measurable workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#entry" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-600/30 transition-all hover:-translate-y-0.5">
                  Explore Growth Engines <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
                  Request Growth Assessment <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                {[
                  { val: '3x', label: 'Rep Productivity' },
                  { val: '28 Days', label: 'Niche Entry Velocity' },
                  { val: 'Zero', label: 'Admin CRM Burden' },
                  { val: 'Measurable', label: 'Unit Economics' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Expansion Visual */}
            <div className="hidden lg:block">
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Mid-Market Expansion Framework</span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Lean Pipeline OS</span>
                </div>
                <div className="space-y-3">
                  {frameworkSteps.map((st, i) => (
                    <div key={st.title} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-600/20 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">{st.step}</div>
                      <div className="flex-1 bg-slate-800/80 rounded-lg px-4 py-2 border border-slate-700/80">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{st.title}</span>
                          <span className="text-[10px] font-mono text-amber-400">{st.kpi}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{st.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY SUBNAV ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5">
            {sectionNav.map(item => (
              <a key={item.id} href={`#${item.id}`} className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-all whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: GROWTH BOTTLENECK ── */}
      <section id="bottlenecks" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <AlertCircle className="w-3.5 h-3.5" /> Growth Friction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Mid-Market Growth Stalls When Execution Complexity Scales Faster Than Headcount.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Mid-market revenue leaders face a structural dilemma: enterprise competitors outspend them on massive SDR teams, while point solutions add operational fragmentation without solving pipeline consistency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottlenecks.map(bn => {
              const Icon = bn.icon;
              return (
                <div key={bn.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2">{bn.title}</h3>
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Operational Cause: </span>
                      <span className="text-xs text-slate-600">{bn.cause}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 mt-3">
                    <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-wider">Commercial Impact: </span>
                    <span className="text-xs text-slate-600">{bn.consequence}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: FRAMEWORK ── */}
      <section id="framework" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/60 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Market Expansion System
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">The Mid-Market Expansion Framework</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">A repeatable 6-step motion that enables lean commercial teams to establish high market share in defensible niches before competitors respond.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {frameworkSteps.map((st) => (
              <div key={st.step} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">{st.step}</div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">{st.title}</h3>
                  <p className="text-xs text-slate-500 mb-3 leading-snug">{st.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono font-bold text-amber-600">
                  Focus: {st.kpi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3.1: ENTRY ── */}
      <section id="entry" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Compass className="w-3.5 h-3.5" /> Capability 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Rapid Market Entry Engine
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Entering adjacent verticals traditionally requires months of manual market research, list purchasing, and trial-and-error messaging. This engine aggregates verified vertical intelligence, adapts messaging to industry-specific vocabulary, and launches targeted campaigns within weeks.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Reusable Niche Architecture', desc: 'Pre-engineered research templates adapt value narratives and customer references to specific industry sub-segments.' },
                  { title: 'Automated Account List Synthesis', desc: 'Identifies all target companies matching revenue bands, employee headcount, and technographic footprints within the selected territory.' },
                  { title: 'Agile Message Testing Cadence', desc: 'Deploys structured A/B message variants to measure initial reply resonance across technical, operational, and financial buyer personas.' },
                ].map(item => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Market Entry KPIs</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Time to Market Activation', def: 'Days elapsed from vertical selection to initial outreach launch' },
                    { kpi: 'Initial Resonance Rate', def: 'Positive engagement percentage across first 100 targeted accounts' },
                    { kpi: 'First-Meeting Velocity', def: 'Days required to secure first 10 qualified sales conversations' },
                    { kpi: 'Customer Acquisition Cost Parity', def: 'New vertical CAC relative to core mature market baseline' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <div className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-2">Pragmatic Focus</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Rather than spreading limited commercial capacity across three new verticals simultaneously, the framework enforces concentrated execution in a single niche until clear customer conversion proof is established.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.2: NICHE ── */}
      <section id="niche" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Target className="w-3.5 h-3.5" /> Capability 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Niche Market Domination
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Mid-market champions win by dominating tightly defined verticals where they can become the undisputed category leader. This capability maps total addressable accounts within specific micro-niches, tracks competitor vulnerability, and systematically works every target organization.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Defensible Micro-Vertical Sizing', desc: 'Isolates sectors with 500 to 5,000 target companies where generalist enterprise competitors offer poor product fit.' },
                  { title: 'Total Addressable Account Mapping', desc: 'Maintains active telemetry on key decision-makers, tech stack renewals, and hiring expansions across the entire vertical.' },
                  { title: 'Category Leadership Narrative Amplification', desc: 'Coordinates customer advocacy, industry-specific benchmark reports, and executive outreach to establish category authority.' },
                ].map(item => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Domination Metrics</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Addressable Account Penetration', def: 'Percentage of total niche market accounts engaged annually' },
                    { kpi: 'Relative Win Rate in Niche', def: 'Win rate against generalist enterprise software vendors' },
                    { kpi: 'Customer Referral Velocity', def: 'Inbound referral deals generated from existing niche customer network' },
                    { kpi: 'Customer Churn Defense Index', def: 'Annual gross revenue retention within designated vertical' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">Realistic Scope Boundaries</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Domination implies establishing high relative market share within a tightly bounded segment (e.g. specialized medical device manufacturers, boutique regional banks) — not claiming 100% saturation across broad global industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.3: PRODUCTIVITY ── */}
      <section id="productivity" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Zap className="w-3.5 h-3.5" /> Capability 03
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Lean Team Productivity Amplifier
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Account executives spend less than 35% of their working hours actively selling. By automating pre-call prospect dossiers, CRM stage updates, customized follow-up emails, and deal health tracking, this amplifier doubles productive customer-facing bandwidth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Pre-Call Dossier Generation', desc: 'Prepares 1-page account briefs summarizing prospect background, tech stack, and pain points before meetings.' },
                  { title: 'Automated CRM Hygiene', desc: 'Parses meeting recordings to log action items, budget confirmation, and stage progressions without manual rep entry.' },
                  { title: 'Customized Follow-Up Drafts', desc: 'Generates specific proposal follow-ups addressing exact objections raised during discovery calls within 15 minutes.' },
                  { title: 'Stalled Deal Nudge Radar', desc: 'Alerts reps when active deals exhibit engagement decay, suggesting specific re-engagement angles based on past wins.' },
                ].map(item => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Productivity Outcomes</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Active Selling Hours Share', def: 'Customer-facing meeting & call time ÷ Total weekly working hours' },
                    { kpi: 'Follow-Up Delivery Speed', def: 'Average minutes elapsed from call conclusion to proposal delivery' },
                    { kpi: 'Pipeline Managed Per Rep', def: 'Total qualified open pipeline value actively managed without slippage' },
                    { kpi: 'Deal Slip Rate Reduction', def: 'Percentage of opportunities closing within original forecast target quarter' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-yellow-50 rounded-2xl border border-yellow-200 p-5">
                <div className="text-xs font-mono font-bold text-yellow-800 uppercase tracking-wider mb-2">Human Review Guardrail</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Reps maintain final review of all outgoing correspondence and commercial terms. The system acts as an expert co-pilot that drafts and summarizes — keeping commercial discretion in the hands of seasoned professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PERFORMANCE MODEL ── */}
      <section id="dashboard" className="py-20 sm:py-24 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> Performance Model
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">Illustrative Mid-Market Performance Telemetry</h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">Sample metrics demonstrating capacity amplification and niche market coverage. All figures are illustrative scenarios — not verified customer performance.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {kpiData.map(kpi => (
              <div key={kpi.label} className="bg-slate-900 rounded-xl border border-slate-800 p-4">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">{kpi.label}</div>
                <div className="text-xl font-extrabold font-mono text-white mb-0.5">{kpi.value}</div>
                <div className="text-[10px] text-slate-500">{kpi.note}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
            <span className="text-xs text-slate-400 italic">Illustrative Data — Not Actual Results. Capacity recovery and sales cycle improvements vary depending on existing tech stack adoption, team discipline, and market size.</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: IMPLEMENTATION PLAN ── */}
      <section id="implementation" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Sliders className="w-3.5 h-3.5" /> 60-Day Deployment
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Phased Mid-Market Implementation Plan</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Designed to avoid organizational shock, rolling out in structured stages that deliver early pipeline proof before expanding across full sales teams.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationStages.map(st => (
              <div key={st.stage} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-mono text-xs font-bold mb-3">{st.stage}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{st.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {st.actions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FAQ ── */}
      <section id="faq" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">Mid-Market Growth Engineering — FAQ</h2>
          </div>
          <div className="space-y-3 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors">
                  <span className="text-sm font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${activeFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === i && <div className="px-6 pb-5 bg-white"><p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">Find Your Next Efficient Growth Opportunity.</h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">Scale your commercial pipeline across defensible micro-verticals without taking on unmanageable software sprawl or heavy payroll additions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-600/30 transition-all hover:-translate-y-0.5">
              Book a Growth Scoping Session <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/offerings/sales-acceleration" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
              Explore Sales Acceleration <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
