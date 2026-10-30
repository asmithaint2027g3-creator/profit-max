import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Rocket, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle,
  CheckCircle2, ChevronRight, Zap, BarChart3, Bot, DollarSign,
  TrendingUp, Users, Activity, Search, RefreshCw, HelpCircle,
  Clock, Compass, Target, Sliders, Shield, Layers
} from 'lucide-react';

const sectionNav = [
  { id: 'challenges', label: 'Startup Challenges' },
  { id: 'framework', label: 'Repeatable Growth' },
  { id: 'zero-to-one', label: 'Zero-to-One Outbound' },
  { id: 'pmf', label: 'PMF Signal Detection' },
  { id: 'founder', label: 'Founder Sales Autopilot' },
  { id: 'burn-rate', label: 'Burn-Rate Optimization' },
  { id: 'dashboard', label: 'Growth Dashboard' },
  { id: 'experimentation', label: 'Experiment Scorecard' },
  { id: 'faq', label: 'FAQ' },
];

const challenges = [
  {
    title: 'Uncertain Ideal Customer Profile (ICP)',
    cause: 'Early startups lack sufficient historical deal data, relying on broad assumptions about which buyer personas hold true purchasing authority.',
    consequence: 'Outbound resources are scattered across incompatible customer segments, generating low reply rates and slow learning cycles.',
    icon: Target,
  },
  {
    title: 'Inconsistent Early Demand Flow',
    cause: 'Founders rely on personal networks, incubators, or sporadic launch events that produce short bursts of interest followed by pipeline drought.',
    consequence: 'Revenue forecasting remains impossible, creating anxiety ahead of board reviews and subsequent fundraising milestones.',
    icon: Activity,
  },
  {
    title: 'Founder-Constrained Sales Bottleneck',
    cause: 'Technical and business founders manage prospect discovery, qualification, demos, notes, and contracting entirely themselves.',
    consequence: 'Founders spend 30+ hours weekly on administrative sales logistics instead of refining product architecture and shipping core features.',
    icon: Users,
  },
  {
    title: 'Limited Marketing Budgets & Runway Pressure',
    cause: 'Startups cannot afford enterprise data stacks ($50k+/yr) or premature full-time sales executive hires ($180k+ OTE).',
    consequence: 'Expensive hiring mistakes burn precious seed or Series A runway before repeatable unit economics are proven.',
    icon: DollarSign,
  },
  {
    title: 'Ambiguous Product-Market Fit Evidence',
    cause: 'Traction is measured through anecdotal user praise or pilot signups rather than quantitative cohort retention and expansion curves.',
    consequence: 'Companies invest heavily in premature marketing scaling only to experience severe post-onboarding churn.',
    icon: Search,
  },
  {
    title: 'Unproven Customer Payback Economics',
    cause: 'Customer acquisition costs (CAC) are masked by founder sweat-equity and subsidized pilot pricing.',
    consequence: 'Blended unit economics degrade rapidly when shifting to commercial marketing channels, shocking investors.',
    icon: BarChart3,
  },
];

const growthFramework = [
  { step: '01', title: 'Hypothesis', desc: 'Define clear assumptions on buyer pain, trigger events, and quantified economic value.' },
  { step: '02', title: 'Target Segment', desc: 'Isolate narrow, homogenous customer cohorts sharing identical tech stacks and job titles.' },
  { step: '03', title: 'Controlled Test', desc: 'Launch structured 100-account outreach with tailored value messaging and strict tracking.' },
  { step: '04', title: 'Evidence Capture', desc: 'Synthesize quantitative response rates, objections, demo engagement, and willingness to pay.' },
  { step: '05', title: 'Offer Iteration', desc: 'Refine positioning, packaging, and commercial terms based on verified feedback.' },
  { step: '06', title: 'Repeatable Scale', desc: 'Codify validated playbooks into automated lead engines before hiring external sales reps.' },
];

const kpiData = [
  { label: 'Qualified Discovery Calls / Wk', value: '8.4', note: 'Consistent ICP meetings booked' },
  { label: 'Outbound Reply Rate', value: '14.2%', note: 'Vs 2.5% industry cold baseline' },
  { label: 'Demo-to-Trial Conversion', value: '42%', note: 'Grounded in acute buyer trigger fit' },
  { label: 'Blended CAC', value: '$420', note: 'Capital-efficient organic + outbound' },
  { label: 'CAC Payback Period', value: '4.8 mo', note: 'Months to recover fully-loaded CAC' },
  { label: 'Cohort Retention (Day 90)', value: '86%', note: 'Sticky usage behavior validated' },
  { label: 'Founder Time Reclaimed', value: '18 hrs/wk', note: 'Hours shifted back to product building' },
  { label: 'Runway Extension Scenario', value: '+5.4 mo', note: 'Estimated via optimized CAC allocation' },
];

const experimentCards = [
  {
    id: 'exp-01',
    hypothesis: 'Engineering VPs at Series A SaaS respond 3x higher to tech-debt reduction ROI than broad developer productivity messaging.',
    segment: 'VPs of Engineering at 50-200 employee B2B SaaS companies hiring React engineers',
    ceiling: '$600 total test budget / 150 target accounts',
    successCriteria: '>10% positive response rate + 6 qualified discovery conversations',
    result: '14.6% reply rate; 9 discovery calls held; 4 advanced to pilot scope',
    status: 'Validated & Codified'
  },
  {
    id: 'exp-02',
    hypothesis: 'Inbound trial signups who view pricing within 10 minutes convert 2x higher if offered an immediate live architecture review.',
    segment: 'Organic web visitors who complete signup and visit pricing table twice',
    ceiling: 'Automated Slack webhook alert to founder with instant booking link',
    successCriteria: '>30% booking rate among alert recipients within 2 hours',
    result: '38% booking rate; demo-to-paid conversion increased from 18% to 34%',
    status: 'Production Automated'
  },
  {
    id: 'exp-03',
    hypothesis: 'Pre-seed founders will pay $2.5k upfront for an automated GTM diagnostic if packaged as an investor-ready board deck.',
    segment: 'B2B software founders who announced pre-seed funding within last 90 days',
    ceiling: '100 personalized LinkedIn & email touchpoints with sample audit',
    successCriteria: 'Minimum 5 upfront SOW commitments ($12.5k cash collected)',
    result: '7 paid commitments secured in 21 days; established core commercial offering',
    status: 'Flagship Motion'
  }
];

const faqs = [
  { q: 'Can this help before we have our first 10 paying customers?', a: 'Yes. The zero-to-one lead generation engine is specifically designed to help founders validate customer willingness to pay, test messaging angles, and secure initial commercial design partners without hiring full-time sales staff.' },
  { q: 'How does founder sales automation keep the founder involved in closing?', a: 'The engine automates administrative logistics — prospect research, personalized outreach drafts, meeting scheduling, and CRM note logging. The founder conducts the actual strategic discovery and closing conversations with pre-built briefing dossiers in hand.' },
  { q: 'What signals indicate genuine product-market fit versus false traction?', a: 'True PMF exhibits strong cohort retention survival curves, accelerating organic referral velocity, expanding seat utilization without vendor prompting, and high customer distress if the product were removed — not merely enthusiastic verbal feedback or free trial signups.' },
  { q: 'What minimum budget is needed for early acquisition testing?', a: 'Testing frameworks are designed to operate with minimal capital expenditure, relying on highly targeted outbound signals and organic search/community triggers rather than expensive programmatic ad spend.' },
  { q: 'How does the platform assist with investor fundraising documentation?', a: 'The system tracks quantitative cohort retention, customer acquisition cost payback, and pipeline conversion velocity into clean, board-ready metric scorecards that provide audited evidence of traction during diligence.' },
  { q: 'When should a startup transition from founder-led sales to dedicated reps?', a: 'Only after value propositions, objection playbooks, and conversion economics are repeatable. Hiring sales reps before messaging and ICP are codified leads to high rep turnover and wasted capital.' },
];

export default function IndustriesStartups() {
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Startup Revenue Engineering | Zero-to-One Growth & PMF Signals | ProfitMachines';
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(168,85,247,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Rocket className="w-3.5 h-3.5" /><span>Startup Revenue Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 leading-[1.1]">
                Find Your First{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
                  Repeatable Revenue Engine.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                Early-stage companies need evidence about who buys, why they buy, which acquisition methods work, and whether customers continue to realize value. ProfitMachines helps startups organize customer discovery, test acquisition approaches, and establish a repeatable path from early demand to scalable revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#zero-to-one" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-600/30 transition-all hover:-translate-y-0.5">
                  Launch Revenue Engine <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
                  Request Founder Diagnostic <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                {[
                  { val: 'Seed → Series A', label: 'Stage Focus' },
                  { val: 'Zero-to-One', label: 'Customer Discovery' },
                  { val: 'Founder-Led', label: 'Time Reclaimed' },
                  { val: 'Capital-Light', label: 'Runway Preserved' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Framework Visual */}
            <div className="hidden lg:block">
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Hypothesis-to-Scale Engine</span>
                  <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">Validation Velocity</span>
                </div>
                <div className="space-y-3">
                  {growthFramework.map((st, i) => (
                    <div key={st.title} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">{st.step}</div>
                      <div className="flex-1 bg-slate-800/80 rounded-lg px-4 py-2 border border-slate-700/80">
                        <div className="text-xs font-bold text-white">{st.title}</div>
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
              <a key={item.id} href={`#${item.id}`} className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-all whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: STARTUP CHALLENGES ── */}
      <section id="challenges" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <AlertCircle className="w-3.5 h-3.5" /> Early-Stage Friction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Premature Scaling and ICP Uncertainty Threaten Early Runway.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Startups fail when they scale marketing spend or hire commercial teams before verifying customer unit economics. True revenue repeatability requires disciplined validation of willingness to pay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(ch => {
              const Icon = ch.icon;
              return (
                <div key={ch.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2">{ch.title}</h3>
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Operational Cause: </span>
                      <span className="text-xs text-slate-600">{ch.cause}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 mt-3">
                    <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-wider">Commercial Impact: </span>
                    <span className="text-xs text-slate-600">{ch.consequence}</span>
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
              <Compass className="w-3.5 h-3.5" /> Validation Lifecycle
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">From Hypothesis to Repeatable Growth</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">A startup must not scale an acquisition workflow simply because it produces activity. It should rigorously evaluate customer quality, conversion, retention, and payback economics.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {growthFramework.map((st) => (
              <div key={st.step} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-violet-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">{st.step}</div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">{st.title}</h3>
                  <p className="text-xs text-slate-500 mb-3 leading-snug">{st.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono font-bold text-violet-600">
                  Step {st.step} Focus
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3.1: ZERO-TO-ONE ── */}
      <section id="zero-to-one" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Zap className="w-3.5 h-3.5" /> Capability 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Zero-to-One Lead Generation
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Landing first enterprise customer commitments requires precise targeting and deep empathy for acute pain points. This engine builds tailored prospect lists, drafts context-aware outreach, and qualifies commercial design partners without hiring full-time business development reps.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Sharp Early ICP Synthesis', desc: 'Isolates initial early-adopter buyer personas with high urgency and budget authority based on firmographic triggers.' },
                  { title: 'Tailored Outreach Personalization', desc: 'Synthesizes company news, recent executive interviews, and tech stack signals into high-relevance problem-led emails.' },
                  { title: 'Closed-Loop Buyer Feedback Capture', desc: 'Aggregates prospect objections and feature requests directly into product roadmap priorities after every interaction.' },
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
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Discovery Metrics</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Qualified Discovery Conversations', def: 'Held meetings with decision-makers matching acute ICP criteria' },
                    { kpi: 'Positive Response Resonance', def: 'Substantive replies engaging with proposed problem thesis' },
                    { kpi: 'Paid Design Partner Conversion', def: 'Early prospects committing to paid pilot or LOI terms' },
                    { kpi: 'Time to First Customer Proof', def: 'Days elapsed from message launch to signed pilot agreement' },
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
                <div className="text-xs font-mono font-bold text-violet-800 uppercase tracking-wider mb-2">Pragmatic Grounding</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We do not promise unrealistic "guaranteed 10 enterprise customers in 48 hours." True customer discovery requires disciplined qualitative feedback, verified product value, and mutual contractual commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.2: PMF ── */}
      <section id="pmf" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <BarChart3 className="w-3.5 h-3.5" /> Capability 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Product-Market Fit Signal Detection
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Customer retention and expansion curves reveal true product-market fit far more reliably than vanity signup numbers. This engine integrates product telemetry to identify which user segments form sticky habits, detect churn risks early, and produce audited traction proof.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Cohort Retention Survival Scoring', desc: 'Analyzes weekly and monthly active usage decay curves across customer tiers to isolate true sticky product behavior.' },
                  { title: 'Core Feature Adoption Milestones', desc: 'Tracks the specific sequence of product actions that correlate with long-term contract renewal and seat expansion.' },
                  { title: 'Organic Advocacy & Referral Velocity', desc: 'Measures spontaneous customer referrals and peer introductions within enterprise client accounts.' },
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
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">PMF Validation KPIs</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Day 30/60/90 Cohort Retention', def: 'Percentage of accounts remaining active after trial onboarding' },
                    { kpi: 'Feature Adoption Threshold %', def: 'Users reaching verified sticky usage milestone within 14 days' },
                    { kpi: 'Organic Referral Multiplier', def: 'New qualified inbound leads generated per existing customer' },
                    { kpi: 'Qualitative Net Disappointment Score', def: '% of users who would be very disappointed if product ceased' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">Multi-Dimensional Evaluation</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No single metric proves product-market fit. We evaluate a balanced triad of usage telemetry, commercial renewal willingness, and organic advocacy before recommending capital expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.3: FOUNDER ── */}
      <section id="founder" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Bot className="w-3.5 h-3.5" /> Capability 03
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Founder-Led Sales Automation
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Founders must personally conduct early sales calls to understand customer resistance and objection nuances. This co-pilot automates research, meeting scheduling, CRM logging, and tailored proposal drafting so founders spend their time on strategic conversations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Autonomous Inbound Qualification', desc: 'Screens demo requests against ICP criteria, routing qualified decision-makers directly to calendar.' },
                  { title: 'Executive Pre-Meeting Briefs', desc: 'Delivers 1-page prospect context sheets with verified tech stack details 10 minutes prior to calls.' },
                  { title: 'Instant Proposal Generation', desc: 'Transforms call transcripts into customized pilot SOWs reflecting customer-specific success metrics.' },
                  { title: 'Deal Health Nudge Radar', desc: 'Prompts founders when high-value prospective pilots show engagement decay before the deal goes cold.' },
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
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Founder Productivity KPIs</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Weekly Administrative Hours Saved', def: 'Hours diverted from manual CRM and calendar management' },
                    { kpi: 'Inbound Response Velocity', def: 'Average minutes from website demo submission to calendar confirmation' },
                    { kpi: 'Discovery-to-Proposal Rate', def: 'Conversations advancing to formal commercial pilot scopes' },
                    { kpi: 'Proposal Turnaround Time', def: 'Hours elapsed from discovery call to delivering written SOW' },
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
              <div className="bg-indigo-50 rounded-2xl border border-indigo-200 p-5">
                <div className="text-xs font-mono font-bold text-indigo-800 uppercase tracking-wider mb-2">Preserving Founder Closeness</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The goal is not to remove the founder from early sales, but to eliminate repetitive administrative drag so the founder can lead every critical customer interaction with maximum context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.4: BURN-RATE ── */}
      <section id="burn-rate" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <DollarSign className="w-3.5 h-3.5" /> Capability 04
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Burn-Rate Optimized Lead Capture
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Startups cannot afford to burn capital on expensive programmatic advertising with uncertain returns. This engine deploys capital-efficient inbound loops and organic intent monitors that capture high-intent buyers already researching solutions in your category.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Dark Funnel Search Signal Capture', desc: 'Identifies accounts reading category comparison reviews, GitHub repositories, and industry forums.' },
                  { title: 'Capital-Light Inbound Conversion', desc: 'Optimizes interactive calculators, ROI tools, and benchmark assessments that capture high-intent leads organically.' },
                  { title: 'Strict Channel Payback Ceilings', desc: 'Enforces hard expenditure stopping rules on any channel failing to prove customer payback within 6 months.' },
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
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Unit Economics KPIs</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Customer Acquisition Cost (CAC)', def: 'Total sales and marketing expenditure ÷ New paying customers' },
                    { kpi: 'CAC Payback Period (Months)', def: 'Months required to recover acquisition outlay from gross margin' },
                    { kpi: 'Magic Number (Sales Efficiency)', def: 'Net New ARR ÷ Previous Quarter Sales & Marketing Spend' },
                    { kpi: 'Burn Multiple', def: 'Net Burn ÷ Net New ARR (monitored under 1.5x threshold)' },
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
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">No Runway Guarantees</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Runway extension is an outcome of disciplined capital allocation and improved conversion efficiency — not a guaranteed mathematical certainty. Market conditions and product readiness remain primary determinants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DASHBOARD ── */}
      <section id="dashboard" className="py-20 sm:py-24 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> Startup Traction Telemetry
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">Illustrative Early-Stage Growth Model</h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">Sample metrics demonstrating validation velocity, customer payback, and founder time recovery. All figures are illustrative scenarios.</p>
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
            <span className="text-xs text-slate-400 italic">Illustrative Data — Not Actual Results. Conversion velocity and CAC payback depend heavily on contract size, sales cycle complexity, and product stage.</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: EXPERIMENTATION SCORECARD ── */}
      <section id="experimentation" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Sliders className="w-3.5 h-3.5" /> Capital-Efficient Testing
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Startup Experimentation Scorecard</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Every go-to-market test runs with strict expenditure ceilings, quantified success criteria, and definitive scaling gates to protect cash runway.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experimentCards.map(exp => (
              <div key={exp.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">{exp.id}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-violet-100 text-violet-800">{exp.status}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{exp.hypothesis}</h3>
                  <div className="text-xs text-slate-600 mb-3 space-y-1.5">
                    <div><strong className="text-slate-800">Target Segment: </strong>{exp.segment}</div>
                    <div><strong className="text-slate-800">Cost Ceiling: </strong>{exp.ceiling}</div>
                    <div><strong className="text-slate-800">Success Criteria: </strong>{exp.successCriteria}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-violet-900 bg-violet-50/70 p-2.5 rounded-lg border border-violet-100">
                  <strong>Outcome: </strong>{exp.result}
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">Startup Revenue Engineering — FAQ</h2>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">Build a More Repeatable Path to Revenue.</h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">Land your first commercial design partners, measure true cohort retention, and scale sales without burning seed capital.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-600/30 transition-all hover:-translate-y-0.5">
              Book Founder Strategy Session <ArrowRight className="w-4 h-4" />
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
