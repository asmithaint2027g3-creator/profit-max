import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, ShoppingBag, Building2, Zap, Rocket, Layers,
  CheckCircle2, ChevronRight, BarChart3, TrendingUp, Users, Globe,
  Shield, Cpu, Sparkles, DollarSign, Activity, Search, BookOpen,
  HelpCircle, ArrowUpRight, Factory, HeartPulse, GraduationCap,
  Briefcase, Network, Handshake, RefreshCw, Eye, Settings
} from 'lucide-react';

const industries = [
  {
    id: 'b2b',
    path: '/industries/b2b',
    label: 'B2B',
    eyebrow: 'B2B REVENUE ENGINEERING',
    title: 'B2B Pipeline & Account Intelligence',
    problem: 'Sales teams lack unified account visibility, miss buying signals, and spend too much time on research instead of revenue-generating activities.',
    solution: 'Coordinated account intelligence, AI-assisted outreach, revenue-qualified lead scoring, and expansion opportunity detection.',
    icon: Target,
    color: 'blue',
    useCases: ['ABM Autopilot', 'Competitor Displacement', 'AI SDR Co-Pilot', 'RQL Predictor', 'Expansion Finder'],
    accentColor: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    metric: 'Pipeline Coverage',
    featured: true,
  },
  {
    id: 'enterprise',
    path: '/industries/enterprise',
    label: 'Enterprise',
    eyebrow: 'ENTERPRISE REVENUE ENGINEERING',
    title: 'Complex Account Growth',
    problem: 'Enterprise deals stall across fragmented buying committees, regional silos, and inconsistent account coverage in multi-subsidiary organizations.',
    solution: 'Corporate hierarchy mapping, multi-division account planning, strategic partnership discovery, and executive-level engagement workflows.',
    icon: Building2,
    color: 'indigo',
    useCases: ['Global Account Penetration', 'Strategic Partnerships', 'Executive Engagement', 'Whitespace Analysis'],
    accentColor: 'bg-indigo-600',
    lightBg: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    metric: 'Account Expansion',
    featured: true,
  },
  {
    id: 'b2c',
    path: '/industries/b2c',
    label: 'B2C',
    eyebrow: 'CONSUMER GROWTH ENGINEERING',
    title: 'Consumer Acquisition & Conversion',
    problem: 'Rising acquisition costs, disconnected channels, abandoned checkouts, and weak repeat-purchase visibility erode consumer growth economics.',
    solution: 'Omnichannel lead generation, lookalike audience scaling, personalized offers, and behavioral retargeting workflows.',
    icon: ShoppingBag,
    color: 'emerald',
    useCases: ['Omnichannel Lead Gen', 'Lookalike Scaling', 'Personalized Offers', 'Cart Recovery'],
    accentColor: 'bg-emerald-600',
    lightBg: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    metric: 'Acquisition Efficiency',
  },
  {
    id: 'midmarket',
    path: '/industries/midmarket',
    label: 'Mid-Market',
    eyebrow: 'MID-MARKET GROWTH ENGINEERING',
    title: 'Efficient Market Expansion',
    problem: 'Growing businesses need broader market coverage and more consistent revenue execution without scaling operational overhead proportionally.',
    solution: 'Rapid market entry frameworks, niche domination playbooks, and lean-team productivity systems that reduce repetitive work.',
    icon: Zap,
    color: 'amber',
    useCases: ['Rapid Market Entry', 'Niche Domination', 'Team Productivity', 'CRM Automation'],
    accentColor: 'bg-amber-600',
    lightBg: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    metric: 'Market Coverage',
  },
  {
    id: 'startups',
    path: '/industries/startups',
    label: 'Startups',
    eyebrow: 'STARTUP REVENUE ENGINEERING',
    title: 'Customer Discovery & Capital Efficiency',
    problem: 'Early-stage companies struggle with uncertain ICPs, unproven demand channels, founder-dependent sales, and pressure to extend runway before scaling.',
    solution: 'Zero-to-one lead generation, PMF signal detection, founder-led sales automation, and burn-rate-optimized acquisition experiments.',
    icon: Rocket,
    color: 'violet',
    useCases: ['Zero-to-One Leads', 'PMF Signal Detection', 'Founder Sales Automation', 'Burn-Rate Optimization'],
    accentColor: 'bg-violet-600',
    lightBg: 'bg-violet-50',
    textColor: 'text-violet-700',
    borderColor: 'border-violet-200',
    metric: 'Capital Efficiency',
  },
  {
    id: 'saas',
    path: '/industries/saas',
    label: 'SaaS & Subscriptions',
    eyebrow: 'SAAS & SUBSCRIPTION REVENUE ENGINEERING',
    title: 'SaaS & Digital Subscription Models',
    problem: 'SaaS companies face rising acquisition costs, trial drop-offs, complex seat packaging, and renewal churn risks that depress Net Revenue Retention.',
    solution: 'Automated product telemetry scoring, dynamic expansion alerts, NRR compounding engines, and self-serve to enterprise handoffs.',
    icon: Layers,
    color: 'cyan',
    useCases: ['Product-Led Signal Capture', 'Usage-Based Expansion Engine', 'Predictive Churn Sentry', 'Multi-Tier Pricing Intelligence', 'SaaS Unit Economics Auditing'],
    accentColor: 'bg-cyan-600',
    lightBg: 'bg-cyan-50',
    textColor: 'text-cyan-700',
    borderColor: 'border-cyan-200',
    metric: 'Net Revenue Retention',
  },
];

const workflowSteps = [
  { step: '01', label: 'Understand', desc: 'Map market conditions, customer behavior, existing workflows, and data availability before designing any intervention.', icon: Eye, color: 'bg-blue-100 text-blue-700' },
  { step: '02', label: 'Identify', desc: 'Surface revenue opportunities, execution gaps, and high-value customer segments using available signals and data.', icon: Search, color: 'bg-indigo-100 text-indigo-700' },
  { step: '03', label: 'Prioritize', desc: 'Rank opportunities by business value, feasibility, implementation cost, risk, and urgency relative to strategic goals.', icon: BarChart3, color: 'bg-violet-100 text-violet-700' },
  { step: '04', label: 'Activate', desc: 'Configure AI-assisted or automated workflows with clear human oversight, approval rules, and escalation paths.', icon: Zap, color: 'bg-amber-100 text-amber-700' },
  { step: '05', label: 'Measure', desc: 'Track defined operational and commercial KPIs against the pre-implementation baseline with consistent measurement periods.', icon: Activity, color: 'bg-emerald-100 text-emerald-700' },
  { step: '06', label: 'Improve', desc: 'Update the operating model based on observed results, customer feedback, and evolving market conditions.', icon: RefreshCw, color: 'bg-teal-100 text-teal-700' },
];

const capabilities = [
  { title: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery', desc: 'Identify market whitespace, customer segments, and pricing opportunities before committing budget.', icon: DollarSign, sectors: ['B2B', 'Enterprise', 'Mid-Market'] },
  { title: 'Demand Engineering', path: '/offerings/demand-engineering', desc: 'Build coordinated demand generation workflows that connect ICP targeting with pipeline creation.', icon: Target, sectors: ['B2B', 'B2C', 'Startups'] },
  { title: 'AI Native Sales', path: '/ai-native-sales', desc: 'Deploy autonomous pipeline generation, intelligent sales agents, and deal acceleration workflows.', icon: Cpu, sectors: ['B2B', 'Enterprise', 'Mid-Market'] },
  { title: 'Sales Acceleration', path: '/offerings/sales-acceleration', desc: 'Improve revenue intelligence, deal qualification, and opportunity progression across the sales process.', icon: TrendingUp, sectors: ['B2B', 'Enterprise', 'Specialized'] },
  { title: 'Revenue Operations', path: '/offerings/revenue-operations', desc: 'Automate revenue workflows, CRM data orchestration, and executive telemetry for consistent operations.', icon: Settings, sectors: ['All Industries'] },
  { title: 'Customer Success', path: '/offerings/customer-success', desc: 'Detect expansion opportunities, renewal risks, and adoption gaps inside existing customer accounts.', icon: Users, sectors: ['B2B', 'SaaS', 'Enterprise'] },
  { title: 'GTM Transformation', path: '/offerings/gtm-transformation', desc: 'Redesign go-to-market strategy, process, and execution model aligned to revenue objectives.', icon: Network, sectors: ['All Industries'] },
  { title: 'AI Trust & Governance', path: '/offerings/ai-trust-governance', desc: 'Implement oversight, auditability, and compliance controls for AI-assisted revenue workflows.', icon: Shield, sectors: ['Healthcare', 'FinTech', 'Enterprise'] },
];

const kpiExamples = [
  { label: 'Pipeline Conversion', value: '18.4%', change: '+3.2pp', note: 'Opportunities → Closed Won' },
  { label: 'Customer Acquisition Cost', value: '$1,240', change: '−22%', note: 'Total Spend ÷ New Customers' },
  { label: 'Sales Cycle Duration', value: '34 days', change: '−11 days', note: 'Opportunity Open to Close' },
  { label: 'Customer Retention Rate', value: '87.2%', change: '+4.1pp', note: '12-Month Cohort' },
  { label: 'Revenue Per Account', value: '$24,600', change: '+18%', note: 'Avg Annual Contract Value' },
  { label: 'Forecast Error', value: '4.8%', change: '−6.2pp', note: 'Absolute % Variance vs Actual' },
];

const faqs = [
  {
    q: 'How does ProfitMachines tailor its approach to different industries?',
    a: 'Each industry has different buyer behaviors, data availability, regulatory environments, and operational constraints. Rather than applying a single generic playbook, the approach starts with understanding the specific business model, available data, existing workflows, and revenue objectives — then designing workflows suited to those conditions. The capabilities deployed may differ significantly between a B2B SaaS company and a healthcare organization.'
  },
  {
    q: 'Can the solutions work with our existing CRM and business systems?',
    a: 'Compatibility depends on the specific systems involved, the available APIs or integration paths, data structure, and the workflows being implemented. During the scoping phase, we evaluate what integrations are feasible, which require custom work, and whether the available data meets the requirements of the intended use case. We do not guarantee compatibility with every platform without conducting this evaluation first.'
  },
  {
    q: 'How do we decide which revenue workflow to improve first?',
    a: 'Priority is typically determined by a combination of business impact, data readiness, implementation complexity, and strategic urgency. A structured diagnostic helps identify where the largest opportunity exists relative to the cost and risk of implementation. Starting with a focused, measurable use case is usually preferable to attempting a broad transformation at once.'
  },
  {
    q: 'What data is required to evaluate an opportunity?',
    a: 'Data requirements vary by use case. For account-based marketing, CRM account records and engagement data are commonly needed. For retention analysis, product usage logs and customer tenure records matter more. During discovery, we assess what data exists, its quality, how it can be lawfully accessed, and whether it is sufficient to support the intended workflow.'
  },
  {
    q: 'How are AI-generated recommendations reviewed before action is taken?',
    a: 'Human oversight is built into the workflow design. AI-generated outputs — such as prioritized account lists, draft outreach, or scoring recommendations — are reviewed by relevant team members before acting. The level of automation and the triggers for human review depend on the specific use case, the risk profile of the decision, and the organization\'s governance requirements.'
  },
  {
    q: 'How do privacy, security, and regulatory requirements affect implementation?',
    a: 'Sector-specific obligations — such as GDPR, HIPAA, financial services regulations, or data residency requirements — directly affect what data can be used, how it must be handled, and which workflows are permissible. We evaluate these requirements during scoping and design workflows that respect applicable obligations. Organizations retain responsibility for their own compliance.'
  },
  {
    q: 'How do we measure whether an initiative is delivering value?',
    a: 'Before implementation, we establish a baseline for the specific metrics being targeted, define the measurement window and cohort, and agree on what constitutes a meaningful improvement. After implementation, results are compared against this baseline using consistent definitions. We do not compare different metric definitions or different time periods as if they were equivalent.'
  },
];

export default function Industries() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Industries | Vertical Revenue Engineering | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Layers className="w-3.5 h-3.5" />
                <span>Industry Playbooks</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 leading-[1.1]">
                Every Industry Has{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                  Different Revenue Challenges.
                </span>{' '}
                Your Growth System Should Reflect That.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                ProfitMachines helps organizations identify revenue opportunities, reduce execution friction, and coordinate AI-enabled growth workflows around their market, customers, and business model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#pathways" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
                  Explore Industry Solutions <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
                  Discuss Your Revenue Challenges <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                {[{ val: '6', label: 'Industry Pathways' }, { val: '10+', label: 'Specialized Sectors' }, { val: '30+', label: 'Capability Areas' }].map(m => (
                  <div key={m.label}>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual: Industry Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {industries.map(ind => {
                const Icon = ind.icon;
                return (
                  <Link key={ind.id} to={ind.path} className={`group p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-0.5 ${ind.featured ? 'col-span-1' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg ${ind.accentColor} flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">{ind.eyebrow}</div>
                    <div className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{ind.title}</div>
                    <div className="text-[11px] text-slate-400 leading-snug line-clamp-2">{ind.problem.substring(0, 80)}...</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY SUBNAV ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-hide">
            {[
              { href: '#challenges', label: 'Challenges' },
              { href: '#pathways', label: 'Industry Pathways' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#capabilities', label: 'Capabilities' },
              { href: '#metrics', label: 'Metrics' },
              { href: '#approach', label: 'Approach' },
              { href: '#faq', label: 'FAQ' },
            ].map(item => (
              <a key={item.href} href={item.href} className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: CHALLENGES ── */}
      <section id="challenges" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Activity className="w-3.5 h-3.5" /> Revenue Friction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Different Markets. Different Revenue Friction.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Revenue problems are not uniform. The friction that limits a B2B enterprise account team looks different from the friction that affects a consumer brand's checkout funnel or a startup's ability to find its first repeatable customer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(ind => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className={`p-6 rounded-2xl border ${ind.borderColor} ${ind.lightBg} flex flex-col`}>
                  <div className={`w-10 h-10 rounded-xl ${ind.accentColor} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${ind.textColor} mb-2`}>{ind.label}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{ind.problem}</p>
                  <Link to={ind.path} className={`inline-flex items-center gap-1 mt-4 text-xs font-bold ${ind.textColor} hover:underline`}>
                    Explore {ind.label} Solutions <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PATHWAY SELECTOR ── */}
      <section id="pathways" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Target className="w-3.5 h-3.5" /> Growth Pathways
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Start With Your Business Model.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Six distinct growth environments. Each pathway reflects the real commercial mechanics of that market — not a repackaged generic template.
            </p>
          </div>

          {/* Featured 2 + 4 grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {industries.filter(i => i.featured).map(ind => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest ${ind.lightBg} ${ind.textColor} border ${ind.borderColor} mb-3`}>
                        <Icon className="w-3 h-3" /> {ind.eyebrow}
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-heading">{ind.title}</h3>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl ${ind.accentColor} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">The Challenge</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{ind.problem}</p>
                  </div>
                  <div className="mb-6">
                    <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">The Approach</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{ind.solution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ind.useCases.map(uc => (
                      <span key={uc} className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold ${ind.lightBg} ${ind.textColor} border ${ind.borderColor}`}>{uc}</span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link to={ind.path} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${ind.accentColor} text-white text-sm font-bold hover:opacity-90 transition-opacity`}>
                      Explore {ind.label} Solutions <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.filter(i => !i.featured).map(ind => {
              const Icon = ind.icon;
              return (
                <Link key={ind.id} to={ind.path} className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col">
                  <div className={`w-10 h-10 rounded-xl ${ind.accentColor} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${ind.textColor} mb-1`}>{ind.label}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{ind.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{ind.problem.substring(0, 100)}...</p>
                  <div className={`inline-flex items-center gap-1 mt-4 text-xs font-bold ${ind.textColor}`}>
                    View Pathway <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Activity className="w-3.5 h-3.5" /> Revenue Engineering Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              From Market Signals to Measurable Business Decisions.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              A structured six-stage process that applies across all industries — adapted to the specific data, workflow, and governance requirements of each business.
            </p>
          </div>
          {/* Horizontal workflow */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[8.33%] right-[8.33%] h-px bg-slate-200 z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {workflowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex flex-col items-center text-center z-10">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex flex-col items-center justify-center mb-4 shadow-sm border border-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">{step.step}</div>
                    <div className="text-sm font-extrabold text-slate-900 mb-2">{step.label}</div>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-sm text-slate-600 text-center leading-relaxed max-w-4xl mx-auto">
              <strong className="text-slate-900">Important:</strong> This process is a framework, not a fixed sequence. Depending on the organization's starting point, data availability, and business priorities, some stages may be completed quickly while others require longer investigation. The process adapts to fit the actual conditions — not a predetermined timeline.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITIES ── */}
      <section id="capabilities" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Network className="w-3.5 h-3.5" /> Connected Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Industry Expertise Connected to Revenue Execution.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Industry-specific workflows connect to ProfitMachines' broader capability areas. Each offering can support different kinds of industry challenges depending on the business model and context.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map(cap => {
              const Icon = cap.icon;
              return (
                <Link key={cap.title} to={cap.path} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-blue-300 transition-all flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cap.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{cap.desc}</p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {cap.sectors.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono font-semibold">{s}</span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: METRICS ── */}
      <section id="metrics" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                <BarChart3 className="w-3.5 h-3.5" /> KPI Framework
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                Measure the Outcomes That Matter to Your Business.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Metric selection depends on the business model, available data, baseline performance, and desired outcome. The right KPI for a B2B SaaS company differs from the right KPI for a consumer retail brand — even if both are tracking "revenue growth."
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Pipeline Conversion', formula: 'Opportunities Created ÷ Qualified Leads' },
                  { label: 'Customer Acquisition Cost', formula: 'Acquisition Spend ÷ New Customers (Defined Period)' },
                  { label: 'Sales Cycle Duration', formula: 'Avg Time: Opportunity Open → Close Event' },
                  { label: 'Retention Rate', formula: 'Retained Customers ÷ Customers at Period Start (Same Cohort)' },
                  { label: 'Forecast Error', formula: '|Forecast − Actual| ÷ Actual Revenue (When Nonzero)' },
                ].map(m => (
                  <div key={m.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-slate-900">{m.label}: </span>
                      <span className="text-xs text-slate-500 font-mono">{m.formula}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-white">Revenue Operations Dashboard</span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-1 rounded-full">Illustrative Data — Not Actual Results</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {kpiExamples.map(kpi => (
                  <div key={kpi.label} className="bg-slate-900 rounded-xl p-4 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">{kpi.label}</div>
                    <div className="text-xl font-extrabold font-mono text-white mb-0.5">{kpi.value}</div>
                    <div className="text-xs font-mono text-emerald-400">{kpi.change}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{kpi.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: APPROACH ── */}
      <section id="approach" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Settings className="w-3.5 h-3.5" /> Implementation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Start With the Highest-Value Opportunity.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              A four-stage approach that prioritizes measurable impact before scaling. Scope, timing, integration requirements, and expected value depend on the specific organization.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Diagnose', desc: 'Understand the current revenue system: data availability, workflow bottlenecks, team capacity, system integrations, and the specific constraints that limit performance.', icon: Search, color: 'bg-blue-600' },
              { step: '02', title: 'Prioritize', desc: 'Identify a high-value, measurable use case. Evaluate business impact, data readiness, implementation complexity, risk, and strategic fit before committing resources.', icon: BarChart3, color: 'bg-indigo-600' },
              { step: '03', title: 'Implement', desc: 'Configure the relevant workflows, integrations, governance controls, and human oversight mechanisms. Establish the baseline measurement before deployment.', icon: Settings, color: 'bg-violet-600' },
              { step: '04', title: 'Evaluate & Expand', desc: 'Compare results against the pre-implementation baseline. Document what worked, what limitations emerged, and whether the use case justifies expansion or adjustment.', icon: TrendingUp, color: 'bg-emerald-600' },
            ].map(stage => {
              const Icon = stage.icon;
              return (
                <div key={stage.step} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${stage.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">Stage {stage.step}</div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-3">{stage.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{stage.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── */}
      <section id="faq" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5" /> Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${activeFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5 bg-white">
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Revenue Discovery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4 leading-tight">
            Find the Revenue Opportunities Hidden in Your Operating Model.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Identify the friction, data gaps, workflow bottlenecks, and commercial opportunities that matter most to your business — before committing to a solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/offerings" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
              Explore Offerings <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
