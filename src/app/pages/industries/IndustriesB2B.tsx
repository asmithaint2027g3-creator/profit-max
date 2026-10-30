import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Target, ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck,
  BarChart3, ChevronRight, Bot, Sparkles, AlertCircle, CheckCircle2,
  Users, Activity, Search, DollarSign, Layers, RefreshCw,
  HelpCircle, Building2, Zap, Eye, Settings, Network
} from 'lucide-react';

const sectionNav = [
  { id: 'challenge', label: 'The Challenge' },
  { id: 'abm', label: 'ABM Autopilot' },
  { id: 'competitor', label: 'Competitor Displacement' },
  { id: 'sdr', label: 'AI SDR Co-Pilot' },
  { id: 'rql', label: 'RQL Predictor' },
  { id: 'expansion', label: 'Expansion Finder' },
  { id: 'dashboard', label: 'KPI Dashboard' },
  { id: 'faq', label: 'FAQ' },
];

const challenges = [
  {
    title: 'No Unified Account View',
    cause: 'Account data sits fragmented across CRM, marketing tools, product analytics, and support systems — rarely synchronized.',
    consequence: 'Sales teams cannot form an accurate picture of account health, engagement, or opportunity before engaging.',
    icon: Layers,
  },
  {
    title: 'Disconnected Marketing & Sales Outreach',
    cause: 'Marketing campaigns and sales outreach operate on different schedules, lists, and messaging — often reaching the same people with conflicting narratives.',
    consequence: 'Prospects receive confusing, duplicated communications that reduce credibility and waste budget.',
    icon: Network,
  },
  {
    title: 'Late Detection of Buying Signals',
    cause: 'Most teams monitor surface-level signals — such as email opens — while deeper intent indicators go unobserved until a competitor responds first.',
    consequence: 'Sales cycles begin later than necessary, reducing win probability and shortening available engagement time.',
    icon: Eye,
  },
  {
    title: 'Time Lost to Administrative Work',
    cause: 'Research, CRM updates, follow-up scheduling, and data entry consume a significant portion of representative time that could be spent on conversations.',
    consequence: 'The capacity available for productive selling is lower than it should be relative to team size and compensation.',
    icon: Settings,
  },
  {
    title: 'Qualification Misalignment',
    cause: 'Lead qualification criteria often reflect historical assumptions rather than current data — passing through accounts that will not convert and discarding those that might.',
    consequence: 'Pipeline composition becomes unreliable, forecasts deviate from outcomes, and sales resources are misdirected.',
    icon: BarChart3,
  },
  {
    title: 'Hidden Expansion Opportunities',
    cause: 'Account expansion opportunities — new departments, adjacent use cases, unused product capacity — often go undetected without systematic monitoring.',
    consequence: 'Net revenue retention remains below its potential, and competitive displacement risk in underutilized accounts increases over time.',
    icon: Search,
  },
];

const journeyStages = [
  { label: 'Target Accounts', signals: 'ICP attributes, firmographic fit, technographic signals, strategic priority', kpi: 'Accounts Identified' },
  { label: 'Buying Signals', signals: 'Intent data, competitor research activity, job postings, executive changes', kpi: 'Signal Triggers' },
  { label: 'Personalized Engagement', signals: 'Account-specific messaging, multi-stakeholder contact plans, coordinated outreach', kpi: 'Engaged Accounts' },
  { label: 'Qualification', signals: 'Buying committee confirmation, budget indicators, timeline, fit assessment', kpi: 'RQLs Created' },
  { label: 'Opportunity Progression', signals: 'Stage advancement, stakeholder coverage, deal health scoring, risk flags', kpi: 'Win Rate' },
  { label: 'Customer Expansion', signals: 'Adoption data, renewal proximity, whitespace analysis, health score trends', kpi: 'NRR' },
];

const kpiData = [
  { label: 'Target Account Coverage', value: '76%', note: 'Accounts with active engagement' },
  { label: 'Qualified Meetings / Month', value: '42', note: 'vs baseline of 28' },
  { label: 'MQL → SQL Conversion', value: '31%', note: 'vs industry avg ~20%' },
  { label: 'Pipeline Created (Qtly)', value: '$3.4M', note: 'Illustrative scenario' },
  { label: 'Average Sales Cycle', value: '38 days', note: 'Tracked: Opp Open → Close' },
  { label: 'Win Rate', value: '24%', note: 'Closed Won ÷ Total Closed' },
  { label: 'Expansion Pipeline', value: '$820K', note: 'Existing account whitespace' },
  { label: 'Forecast Error', value: '5.2%', note: '|Forecast−Actual| ÷ Actual' },
];

const faqs = [
  { q: 'Does this require replacing our existing CRM?', a: 'No. The workflows are designed to work alongside existing CRM systems. Integration depth depends on the available APIs, data structure, and the specific workflows being implemented. A discovery session evaluates compatibility before any commitment.' },
  { q: 'What intent data sources are used for buying signals?', a: 'Permitted third-party intent platforms, public behavioral signals (job postings, executive changes, press releases), and first-party engagement data from your own systems. Access depends on your existing subscriptions and data sharing agreements.' },
  { q: 'How are AI-generated outreach drafts handled?', a: 'Drafts are reviewed by the relevant sales representative before sending. Fully autonomous outreach — without human review — is only implemented in contexts with explicit approval, appropriate consent, and applicable communication rules in place.' },
  { q: 'Can account scoring models be tailored to our specific ICP?', a: 'Yes. Scoring models should reflect the attributes and behaviors that have historically predicted conversion in your specific business. Generic models applied without calibration to your data typically produce unreliable results.' },
  { q: 'How long before we see measurable results?', a: 'This depends on the baseline state, data quality, integration complexity, and the specific use case. A focused, well-defined use case with good data readiness can show measurable pipeline changes within a quarter. Broader transformations take longer.' },
  { q: 'Who reviews expansion opportunity recommendations?', a: 'Customer success and account management teams review expansion flags before acting. The system surfaces signals and context — human judgment determines whether and how to engage.' },
];

export default function IndustriesB2B() {
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'B2B Revenue Engineering | Account Intelligence & Pipeline | ProfitMachines';
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.2),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Target className="w-3.5 h-3.5" /><span>B2B Revenue Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 leading-[1.1]">
                Turn Target Accounts Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Qualified Revenue Opportunities.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                B2B growth depends on reaching the right accounts, understanding buying intent, engaging relevant stakeholders, and moving qualified opportunities through the sales process. ProfitMachines brings these activities into a more coordinated revenue workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#abm" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
                  Explore B2B Solutions <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
                  Book a Consultation <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                {[
                  { val: '5', label: 'Solution Areas' },
                  { val: 'ABM → RQL', label: 'Full Pipeline Coverage' },
                  { val: 'AI-Assisted', label: 'With Human Review' },
                  { val: 'CRM-Ready', label: 'Integration Compatible' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Account Journey Visual */}
            <div className="hidden lg:block">
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">B2B Revenue Journey</div>
                <div className="space-y-3">
                  {journeyStages.map((stage, i) => (
                    <div key={stage.label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-600/40 text-blue-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                      <div className="flex-1 bg-slate-800 rounded-lg px-4 py-2.5 border border-slate-700">
                        <div className="text-xs font-bold text-white">{stage.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">{stage.signals.substring(0, 55)}...</div>
                      </div>
                      <div className="text-[10px] font-mono text-blue-400 shrink-0 text-right">{stage.kpi}</div>
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
              <a key={item.id} href={`#${item.id}`} className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: THE CHALLENGE ── */}
      <section id="challenge" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <AlertCircle className="w-3.5 h-3.5" /> Revenue Friction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Revenue Opportunities Are Lost Between Signals, Conversations, and Decisions.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Most B2B revenue problems are not caused by a lack of effort. They stem from structural gaps in how account intelligence is collected, how teams coordinate, and how opportunities are qualified and prioritized.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(ch => {
              const Icon = ch.icon;
              return (
                <div key={ch.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">{ch.title}</h3>
                  <div className="mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Operational Cause: </span>
                    <span className="text-xs text-slate-600">{ch.cause}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">Commercial Consequence: </span>
                    <span className="text-xs text-slate-600">{ch.consequence}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION: JOURNEY MAP ── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-slate-900 font-heading mb-8 text-center">B2B Revenue Opportunity Map</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {journeyStages.map((stage, i) => (
              <div key={stage.label} className="bg-white rounded-xl border border-slate-200 p-4 text-center relative">
                {i < journeyStages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-1.5 w-3 h-px bg-blue-300 z-10" />
                )}
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-mono font-bold flex items-center justify-center mx-auto mb-2">{i + 1}</div>
                <div className="text-xs font-bold text-slate-900 mb-1">{stage.label}</div>
                <div className="text-[10px] text-slate-500 leading-snug">{stage.signals}</div>
                <div className="mt-2 text-[10px] font-mono text-blue-600 font-bold">{stage.kpi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: ABM ── */}
      <section id="abm" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Target className="w-3.5 h-3.5" /> AI Account-Based Marketing
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">ABM Autopilot</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                High-value accounts often receive generic, disconnected engagement — marketing runs campaigns while sales runs outreach without coordination. An ABM Autopilot approach organizes account data, segments target accounts by fit and intent, identifies engagement signals, and coordinates relevant campaigns across both functions.
              </p>
              <div className="mb-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">Example Workflow</div>
                <div className="space-y-2">
                  {['Target account selection based on ICP attributes and strategic priority', 'Account research aggregating firmographic, technographic, and intent signals', 'Segment prioritization by fit score, engagement level, and buying-cycle stage', 'Coordinated campaign launch across paid, email, and sales outreach channels', 'Engagement measurement tracking account-level interactions, not just individual clicks'].map((step, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                      <span className="text-sm text-slate-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">Potential Data Inputs</div>
                <div className="flex flex-wrap gap-2">
                  {['CRM Account Records', 'Campaign Engagement', 'Permitted Intent Data', 'Firmographic Attributes', 'Technographic Signals'].map(d => (
                    <span key={d} className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-semibold">{d}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">KPI Framework</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Target-Account Engagement Rate', def: 'Engaged Accounts ÷ Total Target Accounts' },
                    { kpi: 'Engaged-Account Coverage', def: '% of ICP Accounts with 2+ Touchpoints' },
                    { kpi: 'Qualified Meetings from ABM', def: 'Meetings Held with Target Accounts' },
                    { kpi: 'Pipeline Contribution', def: 'Opportunities Sourced from ABM-Engaged Accounts' },
                    { kpi: 'Opportunity Creation Rate', def: 'Target Accounts → Open Opportunities' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl border border-blue-200 p-5">
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2">Where Human Review Remains Essential</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Account prioritization should be reviewed by sales leadership before committing outreach resources. Target lists and messaging require approval. Engagement results should be interpreted by marketing and sales teams together — not acted upon automatically without human judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: COMPETITOR ── */}
      <section id="competitor" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <ShieldCheck className="w-3.5 h-3.5" /> Competitor Displacement Engine
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">AI Competitor Displacement Engine</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Organizations using competing solutions may be approaching renewal windows, experiencing product dissatisfaction, or actively evaluating alternatives. A displacement engine helps identify these accounts, prioritize outreach timing, and prepare relevant positioning — based on substantiated differentiators, not speculation.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Signal Collection & Source Quality', desc: 'Permitted public signals — job postings, review platform activity, integration ecosystem changes — are monitored and assessed for quality before being used as triggers. Private competitor data is not accessed.' },
                  { title: 'Account Prioritization', desc: 'Accounts with multiple concurrent displacement signals, approaching renewal windows, or documented dissatisfaction indicators are ranked for outreach priority.' },
                  { title: 'Competitive Positioning', desc: 'Positioning materials are built from verified, substantiated product differentiators — not claims that cannot be supported. Human review ensures accuracy before use.' },
                  { title: 'Sales Follow-Up & Human Review', desc: 'All displacement outreach is reviewed and approved by the relevant sales representative. Displacement opportunities are tracked through to outcome for calibration.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 mb-1">{item.title}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">KPI Framework</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Competitor-Related Opportunities', def: 'Open opportunities where displacement is the primary motion' },
                    { kpi: 'Engagement Rate', def: 'Prospects who responded to displacement outreach' },
                    { kpi: 'Time to Engagement', def: 'Avg days from signal detection to first response' },
                    { kpi: 'Displacement Win Rate', def: 'Closed Won ÷ Total Displacement Opportunities' },
                    { kpi: 'Revenue from Verified Wins', def: 'ARR from confirmed competitor displacement' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider mb-2">Important Limitation</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Access to private competitor information — internal pricing, contract terms, customer lists — is not a component of this approach. All signals are sourced from permitted public information. Organizations remain responsible for ensuring their competitive intelligence practices comply with applicable laws and platform terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: SDR ── */}
      <section id="sdr" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Bot className="w-3.5 h-3.5" /> AI SDR Co-Pilot
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">AI SDR Co-Pilot / Autopilot</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                AI assistance can support prospect research, personalized outreach drafts, follow-up prioritization, meeting scheduling, and initial qualification. The level of human involvement varies based on the workflow design, risk profile, and organizational requirements.
              </p>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden mb-6">
                <div className="grid grid-cols-3 divide-x divide-slate-200">
                  {[
                    { mode: 'Assisted', desc: 'AI drafts; human reviews and sends every message', icon: '👁️' },
                    { mode: 'Supervised', desc: 'AI sends approved message types; exceptions flagged', icon: '✅' },
                    { mode: 'Human-Only Zones', desc: 'Complex objections, pricing, proposals, relationship decisions', icon: '🧠' },
                  ].map(m => (
                    <div key={m.mode} className="p-4 text-center">
                      <div className="text-xl mb-2">{m.icon}</div>
                      <div className="text-xs font-bold text-slate-900 mb-1">{m.mode}</div>
                      <div className="text-[10px] text-slate-500 leading-snug">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">SDR Workflow</div>
              <div className="flex flex-wrap gap-2">
                {['Prospect Research', 'Outreach Draft', 'Human Review', 'Message Send', 'Response Handling', 'Meeting Booking', 'Qualification Notes'].map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono font-semibold">
                    {i + 1}. {step}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">KPI Framework</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Qualified Meetings Booked', def: 'Meetings held with defined-fit prospects' },
                    { kpi: 'Positive Reply Rate', def: 'Positive responses ÷ Total outreach sent' },
                    { kpi: 'Meeting Attendance Rate', def: 'Attended ÷ Booked meetings' },
                    { kpi: 'Time Spent on Administration', def: 'Hours on non-selling tasks per week' },
                    { kpi: 'Meeting-to-Opportunity Conversion', def: 'Meetings → qualified open opportunities' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 rounded-2xl border border-red-200 p-5">
                <div className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider mb-2">Compliance Note</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  AI-assisted outreach must comply with applicable anti-spam laws, CAN-SPAM, GDPR, CASL, and other communication regulations depending on recipient geography. Autonomous outreach — without human review — should only be implemented in contexts where all applicable rules are clearly understood and met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: RQL ── */}
      <section id="rql" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <BarChart3 className="w-3.5 h-3.5" /> Revenue Qualified Lead Predictor
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">AI Revenue Qualified Lead Predictor</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                A scoring approach combines relevant account attributes, engagement signals, ICP fit, buying-stage activity, and historical conversion data to help sales teams prioritize their time more effectively. The score reflects statistical likelihood — not a guaranteed outcome.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { title: 'What the Score Represents', desc: 'A relative ranking of accounts or leads by their historical statistical similarity to past conversions. Scores are updated as new engagement data arrives.' },
                  { title: 'Required Data Inputs', desc: 'CRM opportunity history with outcomes, account attributes, engagement metrics, and sufficient historical volume to identify meaningful patterns.' },
                  { title: 'How Sales Teams Use Scores', desc: 'To prioritize outreach sequence and depth — not to exclude accounts entirely. A low score should prompt a different approach, not automatic disqualification.' },
                  { title: 'Model Evaluation & Recalibration', desc: 'Score-to-conversion relationships should be reviewed quarterly. If high-scored accounts are not converting at a meaningfully higher rate, the model inputs or thresholds require adjustment.' },
                ].map(item => (
                  <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-4">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">KPI Framework</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Score-to-Conversion Relationship', def: 'Win rate by score band (High / Medium / Low)' },
                    { kpi: 'Qualification Precision', def: 'True positives ÷ All scored-high accounts' },
                    { kpi: 'Opportunity Creation Rate', def: 'RQL-scored leads → open opportunities' },
                    { kpi: 'Conversion by Score Band', def: 'Win rate stratified by score tier' },
                    { kpi: 'Forecast Calibration', def: 'Predicted vs actual conversion volume alignment' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-violet-50 rounded-2xl border border-violet-200 p-5">
                <div className="text-xs font-mono font-bold text-violet-700 uppercase tracking-wider mb-2">Important Limitation</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  No scoring model guarantees conversion. A prediction is a statistical estimate based on historical patterns — not a certainty. Models trained on insufficient data, biased historical outcomes, or changed market conditions can produce misleading scores. Regular evaluation and human override capability are essential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: EXPANSION ── */}
      <section id="expansion" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <TrendingUp className="w-3.5 h-3.5" /> Expansion Opportunity Finder
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">AI Contract & Expansion Opportunity Finder</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Authorized customer usage data, renewal timelines, adoption trends, support interactions, and account context can help teams identify expansion opportunities and retention risks before they become visible through traditional reporting.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Seat / Capacity Utilization', desc: 'Identify accounts using significantly less than contracted capacity — potential upsell or churn risk depending on context.' },
                  { title: 'Adoption Across Teams', desc: 'Surface accounts using the product in one department while other business units remain unengaged.' },
                  { title: 'Renewal Preparation', desc: 'Flag accounts approaching renewal windows with early-warning signals to prevent last-minute scrambling.' },
                  { title: 'Expansion Qualification', desc: 'Identify accounts with adoption patterns, engagement depth, and organizational scale that suggest readiness for expansion.' },
                ].map(item => (
                  <div key={item.title} className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">Customer Success & Sales Coordination</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Expansion opportunities surface to both customer success and sales teams simultaneously. CS manages the relationship; sales develops the commercial expansion. Clear handoff protocols prevent uncoordinated approaches to the same account.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">KPI Framework</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Renewal Readiness Score', def: 'Accounts with complete renewal preparation 90+ days out' },
                    { kpi: 'Expansion-Qualified Accounts', def: 'Accounts meeting defined expansion readiness criteria' },
                    { kpi: 'Product Adoption Rate', def: 'Active users ÷ Licensed seats (tracked by cohort)' },
                    { kpi: 'Net Revenue Retention', def: '(Revenue retained + Expansion) ÷ Period-start revenue' },
                    { kpi: 'Expansion Conversion Rate', def: 'Expansion-qualified accounts → expanded contracts' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">Data Requirements</div>
                <div className="flex flex-wrap gap-2">
                  {['Product Usage Logs', 'License Utilization', 'Support History', 'CRM Account Records', 'Renewal Dates', 'Health Score Inputs'].map(d => (
                    <span key={d} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: KPI DASHBOARD ── */}
      <section id="dashboard" className="py-20 sm:py-24 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> B2B KPI Dashboard
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">Illustrative B2B Revenue Metrics</h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">Sample metrics showing what a B2B revenue dashboard might track. All figures are illustrative scenarios — not actual ProfitMachines customer results.</p>
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
          {/* Funnel Visual */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">Conversion Funnel (Illustrative)</div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              {[
                { stage: 'Target Accounts', count: '500', pct: '100%' },
                { stage: 'Engaged', count: '380', pct: '76%' },
                { stage: 'Meetings', count: '126', pct: '25%' },
                { stage: 'Opportunities', count: '84', pct: '17%' },
                { stage: 'Closed Won', count: '20', pct: '4%' },
              ].map((s, i, arr) => (
                <React.Fragment key={s.stage}>
                  <div className="text-center">
                    <div className="text-lg font-extrabold font-mono text-white">{s.count}</div>
                    <div className="text-[10px] font-mono text-slate-400">{s.stage}</div>
                    <div className="text-[10px] font-mono text-blue-400 mt-1">{s.pct}</div>
                  </div>
                  {i < arr.length - 1 && <ChevronRight className="w-4 h-4 text-slate-600 shrink-0 hidden sm:block" />}
                </React.Fragment>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-4 italic text-center">Illustrative Data — Not Actual Results. Funnel ratios vary significantly by industry, market, product type, and team capacity.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION: FAQ ── */}
      <section id="faq" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">B2B Revenue Engineering — Common Questions</h2>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">Build a More Intelligent B2B Revenue Workflow.</h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">Understand where your B2B revenue system loses qualified accounts, misses signals, or leaves expansion untouched — before designing a solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/offerings/demand-engineering" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
              Explore Demand Engineering <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
