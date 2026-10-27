import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Layers, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle,
  CheckCircle2, ChevronRight, Briefcase, Factory, ShoppingCart, Landmark,
  Cloud, HeartPulse, GraduationCap, Store, Building, Zap
} from 'lucide-react';

const TAB_IDS = ['overview', 'challenges', 'metrics'];

const sectors = [
  {
    id: 'services',
    eyebrow: 'CONSULTING, HEALTHCARE, EDUCATION, LOGISTICS',
    title: 'Service Industries',
    context: 'Reputation building and high-intent lead generation through algorithmic trust audits and authority positioning.',
    icon: Briefcase,
    color: 'blue',
    metrics: [
      { val: '3.4X', label: 'Inbound Inquiry Intent' },
      { val: '-38%', label: 'Consultative Sales Cycle' },
      { val: '92%', label: 'Trust Audit Verification' },
      { val: '+45%', label: 'Retainer Expansion Rate' }
    ],
    painPoints: [
      'Building institutional credibility in high-trust advisory and consultative markets',
      'Generating high-intent inquiries from qualified corporate decision-makers',
      'Demonstrating regulatory compliance and practice excellence objectively'
    ],
    solutions: [
      'Deploy autonomous authority engines that publish data-backed industry benchmarks',
      'Real-time trust verification workflows that validate service outcomes for prospective buyers',
      'Intent-calibrated inbound routing that matches inquiries to senior partners in minutes'
    ],
    situations: [
      'Inconsistent brand trust across fragmented digital channels',
      'High customer churn due to unverified service claims and mismatched expectations'
    ]
  },
  {
    id: 'industrial',
    eyebrow: 'MANUFACTURING, UTILITIES, SUPPLY CHAIN, INFRASTRUCTURE',
    title: 'Industrial Industries',
    context: 'Compliance assurance, operational risk coverage, disaster vulnerability audits, and automated digital procurement outreach.',
    icon: Factory,
    color: 'indigo',
    metrics: [
      { val: '-47%', label: 'Sales Cycle Time' },
      { val: '2X', label: 'Dealer Productivity' },
      { val: '3X', label: 'Inbound Lead Quality' },
      { val: '4.5x', label: 'Faster Quote-to-Order' }
    ],
    painPoints: [
      'High operational downtime costs and legacy procurement friction',
      'Complex multi-tier supply chain dependencies and distributor blind spots',
      'Manual, paper-heavy audit procedures failing modern compliance mandates'
    ],
    solutions: [
      'Autonomous risk-sensing pipelines that monitor supplier vulnerabilities 24/7',
      'Algorithmic dealer and distributor enablement with real-time inventory and pricing sync',
      'Automated RFQ generation and digital procurement outreach with instant spec verification'
    ],
    situations: [
      'Unmapped operational vulnerability risks delaying tier-1 customer audits',
      'Legacy procurement cycles causing high deal slippage against agile competitors'
    ]
  },
  {
    id: 'd2c',
    eyebrow: 'CONSUMER BRANDS, E-COMMERCE, LIFESTYLE, ELECTRONICS',
    title: 'D2C Companies',
    context: 'Turn Attention into Demand. AI separates browsing behavior from buying intent to convert high-propensity demand at lower CAC.',
    icon: ShoppingCart,
    color: 'violet',
    metrics: [
      { val: '20-35%', label: 'Conversion Rate Uplift' },
      { val: '+30%', label: 'Repeat Purchases' },
      { val: '-25%', label: 'Paid Media Dependency' },
      { val: '2.8X', label: 'Customer Lifetime Value' }
    ],
    painPoints: [
      'Differentiating in crowded social feeds and escalating ad network auction rates',
      'Building instant shopper credibility and eliminating checkout friction',
      'Protecting checkout POS from fraud while maintaining zero-drop conversion rates'
    ],
    solutions: [
      'Predictive shopper intent scoring that triggers dynamic 1:1 offers right before drop-off',
      'Autonomous cart recovery sentries via personalized omnichannel cadences (SMS/Email)',
      'Algorithmic merchandising optimization matching inventory velocity to localized demand'
    ],
    situations: [
      'High cart abandonment rates exceeding 70% on mobile traffic',
      'Escalating ad network CAC eroding contribution margins on first-order sales'
    ]
  },
  {
    id: 'fintech',
    eyebrow: 'DIGITAL LENDING, NBFCS, WEALTH MANAGEMENT, INSURTECH',
    title: 'FinTech & Lending',
    context: 'Acquire Smarter. Activate Faster. Retain Longer. AI identifies high-intent, high-LTV prospects and eliminates CAC inflation under strict regulatory standards.',
    icon: Landmark,
    color: 'emerald',
    metrics: [
      { val: '30-45%', label: 'Activation Rates' },
      { val: '25%', label: 'Early Churn Reduction' },
      { val: '2X', label: 'LTV-Qualified Leads' },
      { val: '<15m', label: 'Time-to-Value KYC' }
    ],
    painPoints: [
      'Meeting stringent central bank and financial regulatory compliance guidelines',
      'Preventing synthetic identity and payment fraud during frictionless onboarding',
      'Maintaining 99.99% transaction system availability and audit trail readiness'
    ],
    solutions: [
      'Predictive underwriting telemetry that pre-scores borrower creditworthiness autonomously',
      'Real-time AML and compliance monitoring with automated regulatory reporting pipelines',
      'AI-driven borrower activation cadences that compress time-to-first-transaction'
    ],
    situations: [
      'Complex regulatory compliance reporting slowing down new product launches',
      'Security vulnerabilities in payment APIs causing audit flags and partner friction'
    ]
  },
  {
    id: 'saas',
    eyebrow: 'SOFTWARE PLATFORMS, AI TOOLS, CLOUD, ENTERPRISE SAAS',
    title: 'SaaS Products',
    context: 'Identify Buying Intent Early. Convert Faster. Scale ARR Predictably. AI surfaces buying signals and maps internal buying committees.',
    icon: Cloud,
    color: 'sky',
    metrics: [
      { val: '6X', label: 'Increase in Qualified Leads' },
      { val: '66%', label: 'Reduction in Sales Cycle' },
      { val: '40%', label: 'More ARR Compounding' },
      { val: '-66%', label: 'Reduction in Cost of Sales' }
    ],
    painPoints: [
      'Enterprise buyers requiring rigorous SOC2, ISO27001, and governance validation',
      'Standing out in saturated categories with identical feature matrices',
      'Scaling outbound SDR teams without seeing diminishing marginal returns'
    ],
    solutions: [
      'Autonomous intent radar that tracks when accounts research migrations or competitors',
      'Automated product-led growth (PLG) conversion triggers based on in-app feature usage',
      'Algorithmic account penetration playbooks that navigate multi-stakeholder buying committees'
    ],
    situations: [
      'SaaS churn caused by unmapped executive turnover and silent account decay',
      'Low organic outreach response rates from generic cold email sequencing'
    ]
  },
  {
    id: 'healthcare',
    eyebrow: 'HOSPITALS, PHARMA, DIAGNOSTICS, BIOTECH',
    title: 'Healthcare & Life Sciences',
    context: 'Strict compliance audits, patient data protection, and disaster readiness for medical, biotech, and pharmaceutical organizations.',
    icon: HeartPulse,
    color: 'rose',
    metrics: [
      { val: '100%', label: 'HIPAA & EHR Audit Pass' },
      { val: '-52%', label: 'Patient Intake Latency' },
      { val: '3.1X', label: 'Clinical Trial Lead Match' },
      { val: 'Zero', label: 'Compliance Breaches' }
    ],
    painPoints: [
      'Securing sensitive electronic health records (EHR) and biometric diagnostic pipelines',
      'Ensuring continuous 24/7 disaster resilience across clinical and laboratory workflows',
      'Meeting strict healthcare authority mandates and FDA/HIPAA verification protocols'
    ],
    solutions: [
      'Compliance-locked AI pipelines with continuous automated regulatory attestation',
      'Algorithmic physician and patient referral matching that eliminates clinical intake delays',
      'Automated disaster failover and encrypted zero-trust data synchronization for EHR systems'
    ],
    situations: [
      'HIPAA and EHR compliance data audits causing operational roadblocks',
      'Disaster recovery vulnerability in patient records failing security reviews'
    ]
  },
  {
    id: 'education',
    eyebrow: 'UNIVERSITIES, ONLINE LEARNING, EDTECH STARTUPS',
    title: 'Education & EdTech',
    context: 'Enroll the Right Learners. AI identifies learner readiness and program fit so enrollment counselors focus on high-conversion opportunities.',
    icon: GraduationCap,
    color: 'amber',
    metrics: [
      { val: '30-45%', label: 'Enrollment Increase' },
      { val: '-40%', label: 'Counselor Workload' },
      { val: '2.4X', label: 'Admissions Velocity' },
      { val: '94%', label: 'Learner Course Retention' }
    ],
    painPoints: [
      'Protecting minor student data privacy and meeting FERPA/COPPA requirements',
      'Scaling enrollment channels while maintaining academic standards and student quality',
      'Maintaining academic credibility in an era of generic AI content and low course completion'
    ],
    solutions: [
      'Predictive student fit assessment that scores learner readiness before counselor outreach',
      'Autonomous admissions assistant that handles 80% of common curriculum and financial aid queries',
      'Dynamic retention sentries that alert faculty at the first sign of student course disengagement'
    ],
    situations: [
      'Student enrollment drops due to unmanaged online reviews and delayed admissions responses',
      'Cyber threats and compliance gaps on student payment portals and LMS platforms'
    ]
  },
  {
    id: 'retail',
    eyebrow: 'SUPERMARKETS, FMCG DISTRIBUTORS, LIFESTYLE CHAINS',
    title: 'Retail & FMCG',
    context: 'Demand-Driven Supply. AI identifies regional demand signals and predicts retail sell-through for real-time stock and pipeline alignment.',
    icon: Store,
    color: 'teal',
    metrics: [
      { val: '-20%', label: 'Inventory Holding Cost' },
      { val: '+30%', label: 'Distributor Productivity' },
      { val: '2.5X', label: 'Sales Pipeline Velocity' },
      { val: '+15%', label: 'Gross Margin Improvement' }
    ],
    painPoints: [
      'Securing point-of-sale payment nodes against terminal vulnerability exploits',
      'Driving omnichannel engagement between physical storefronts and e-commerce apps',
      'Protecting brand reputation against inventory stock-outs and counterfeit supply'
    ],
    solutions: [
      'Predictive sell-through algorithms that align manufacturing runs with real-time retail POS scans',
      'Automated distributor replenishment workflows that eliminate out-of-stock lost revenue',
      'Omnichannel loyalty engines that turn in-store shoppers into repeat digital purchasers'
    ],
    situations: [
      'POS terminal security vulnerabilities and payment reconciliation discrepancies',
      'High friction in loyalty program signups causing lost customer contact data'
    ]
  },
  {
    id: 'real-estate',
    eyebrow: 'DEVELOPERS, BUILDERS, COMMERCIAL REAL ESTATE, SMART INFRASTRUCTURE',
    title: 'Real Estate & Construction',
    context: 'Accelerate Velocity. AI separates casual speculators from qualified institutional buyers and automates site-visit scheduling to compress closings.',
    icon: Building,
    color: 'emerald',
    metrics: [
      { val: '2X', label: 'Booking Velocity' },
      { val: '-40%', label: 'Inventory Cycle' },
      { val: '+50%', label: 'Broker Efficiency' },
      { val: '-30%', label: 'Cost Per Booking' }
    ],
    painPoints: [
      'Securing regulatory build clearances and zoning approvals without multi-month delays',
      'Attracting institutional capital and high-net-worth buyers in fluctuating interest rate environments',
      'Mitigating long-horizon construction liability, contractor defaults, and material inflation'
    ],
    solutions: [
      'Algorithmic buyer pre-qualification verifying liquidity, mortgage eligibility, and purchasing timeframe',
      'Autonomous scheduling co-pilots that sync site tours between high-intent buyers and property brokers',
      'Predictive pricing engines that calibrate unit release tranches against localized absorption rates'
    ],
    situations: [
      'Environmental and structural compliance delays stalling municipal occupancy permits',
      'Investor hesitancy on long-horizon projects due to lack of transparent absorption telemetry'
    ]
  },
  {
    id: 'energy',
    eyebrow: 'POWER GENERATION, RENEWABLE ENERGY, OIL & GAS, UTILITIES',
    title: 'Energy & Utilities',
    context: 'Operational risk audits, regulatory compliance, and disaster resilience for energy providers, renewables, and mission-critical utility grids.',
    icon: Zap,
    color: 'orange',
    metrics: [
      { val: '99.99%', label: 'Grid Uptime Verification' },
      { val: '-65%', label: 'Audit Preparation Time' },
      { val: '100%', label: 'ESG Mandate Coverage' },
      { val: 'Zero', label: 'Critical SCADA Vulnerabilities' }
    ],
    painPoints: [
      'Securing smart grid SCADA infrastructure and industrial IoT against nation-state cyber threats',
      'Ensuring continuous operational readiness and disaster resilience under extreme climate events',
      'Demonstrating rigorous ESG and environmental compliance across complex production facilities'
    ],
    solutions: [
      'Zero-trust industrial telemetry pipelines that monitor SCADA endpoints and grid signals continuously',
      'Automated ESG and compliance reporting engines configured to international energy frameworks',
      'Autonomous predictive maintenance algorithms that anticipate equipment failure before outages occur'
    ],
    situations: [
      'Critical infrastructure vulnerability threats flagged in government audit reports',
      'Strict environmental safety mandates requiring continuous real-time emissions monitoring'
    ]
  }
];

const colorMap = {
  blue:    { bg:'bg-blue-50',    text:'text-blue-700',    border:'border-blue-200',    badge:'bg-blue-100 text-blue-700',    accent:'bg-blue-600 text-white' },
  indigo:  { bg:'bg-indigo-50',  text:'text-indigo-700',  border:'border-indigo-200',  badge:'bg-indigo-100 text-indigo-700',  accent:'bg-indigo-600 text-white' },
  violet:  { bg:'bg-violet-50',  text:'text-violet-700',  border:'border-violet-200',  badge:'bg-violet-100 text-violet-700',  accent:'bg-violet-600 text-white' },
  emerald: { bg:'bg-emerald-50', text:'text-emerald-700', border:'border-emerald-200', badge:'bg-emerald-100 text-emerald-700', accent:'bg-emerald-600 text-white' },
  sky:     { bg:'bg-sky-50',     text:'text-sky-700',     border:'border-sky-200',     badge:'bg-sky-100 text-sky-700',     accent:'bg-sky-600 text-white' },
  rose:    { bg:'bg-rose-50',    text:'text-rose-700',    border:'border-rose-200',    badge:'bg-rose-100 text-rose-700',    accent:'bg-rose-600 text-white' },
  amber:   { bg:'bg-amber-50',   text:'text-amber-700',   border:'border-amber-200',   badge:'bg-amber-100 text-amber-700',   accent:'bg-amber-600 text-white' },
  teal:    { bg:'bg-teal-50',    text:'text-teal-700',    border:'border-teal-200',    badge:'bg-teal-100 text-teal-700',    accent:'bg-teal-600 text-white' },
  orange:  { bg:'bg-orange-50',  text:'text-orange-700',  border:'border-orange-200',  badge:'bg-orange-100 text-orange-700',  accent:'bg-orange-600 text-white' },
};

function SectorCard({ sector }) {
  const [activeTab, setActiveTab] = useState('overview');
  const c = colorMap[sector.color] || colorMap.blue;
  const Icon = sector.icon;

  return (
    <div id={sector.id} className="scroll-mt-28 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${c.badge} font-mono text-xs font-bold uppercase tracking-widest mb-3`}>
            <Icon className="w-3.5 h-3.5" />
            <span>{sector.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            {sector.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl leading-relaxed">
            {sector.context}
          </p>
        </div>
        <a
          href="#intake"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs font-mono uppercase tracking-wider shrink-0 transition-all hover:-translate-y-0.5"
        >
          Consult Sector Lead <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-100">
        {sector.metrics.map(m => (
          <div key={m.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">{m.val}</div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tab Interface */}
      <div className="pt-6">
        <div className="flex gap-2 p-1 rounded-xl bg-slate-100 max-w-md mb-6">
          {TAB_IDS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-all ${
                activeTab === tab ? c.accent : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab === 'overview' ? 'Core Solution' : tab === 'challenges' ? 'Key Pain Points' : 'Common Situations'}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">Engineered Solutions</div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sector.solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className={`w-6 h-6 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-0.5`}>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${c.text}`} />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">Industry Pain Points</div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sector.painPoints.map((pain, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 leading-relaxed font-medium">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">Trigger Situations</div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sector.situations.map((sit, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 italic">"{sit}"</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function IndustriesIntakeForm({ vertical }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', honeypot: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-slate-800 border border-slate-700 p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold text-white font-heading mb-2">Consultation Requested</h3>
        <p className="text-slate-300 text-sm">
          Thank you, <strong>{form.name}</strong>. An industry specialist in{' '}
          <span className="text-blue-400">{vertical}</span> will contact you within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-slate-800 border border-slate-700 p-8 space-y-5">
      <input
        type="text"
        name="website"
        value={form.honeypot}
        onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
            Name *
          </label>
          <input
            required
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
            Email *
          </label>
          <input
            required
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            required
            type="tel"
            placeholder="+1 555 000 0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
      >
        Request AI Consultation <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default function IndustriesSpecialized() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Specialized Sectors | Vertical-Specific Revenue Engineering | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>SPECIALIZED SECTORS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Specialized Sectors:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Vertical-Specific Revenue Engineering
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
            ProfitMachines provides deep industry-specific expertise, integrating autonomous demand engines with vertical growth mechanics for your specific market nuances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              Get Vertical Diagnostic <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              Talk to a Principal Architect <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {[
              { val: '10 Verticals', label: 'Deep Domain Blueprints' },
              { val: '100% Locked', label: 'Regulatory Compliance' },
              { val: '66% Faster', label: 'Average Sales Cycle Compression' },
              { val: '24/7', label: 'Autonomous RevOps Sensing' }
            ].map(m => (
              <div key={m.label}>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{m.val}</div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Sub-Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {sectors.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 10 Sectors Stack */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {sectors.map(s => (
          <SectorCard key={s.id} sector={s} />
        ))}
      </main>

      {/* Global Footer CTA Form */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Industry-Specific Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Architect Your Industry-Specific AI Engine
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Stop relying on generic tools. Deploy a revenue engine engineered specifically for the nuances of your vertical.
            </p>
          </div>

          <IndustriesIntakeForm vertical="Specialized Vertical Revenue Acceleration" />

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {['500+ B2B Companies', '5X Avg Revenue Growth', '24/7 AI Support'].map(b => (
              <div key={b} className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
