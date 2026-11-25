import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Building2, Factory, Cloud, Landmark, HeartPulse, Car, Truck, ShoppingBag,
  Radio, Flame, Briefcase, Layers, Target, TrendingUp, Users, Activity,
  Scale, Server, ShieldCheck, BookOpen, ArrowRight, CheckCircle2, ChevronRight,
  Sparkles, DollarSign, ArrowUpRight, Compass, Sliders, Zap
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function IndustryFunctionalIntelligencePage() {
  const location = useLocation();
  const [activeVertical, setActiveVertical] = useState('saas');
  const [activeFunction, setActiveFunction] = useState('direct-sales');

  useEffect(() => {
    document.title = 'Industry & Functional Intelligence | ProfitMachines Resources';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const navOffset = 95;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const verticals = [
    {
      id: 'saas',
      title: 'Technology & Enterprise SaaS',
      icon: Cloud,
      badge: 'SaaS / Cloud',
      valueChain: 'Product Engineering → Self-Serve Ingestion → Sales-Assisted Expansion → Multi-Product NRR',
      challenges: 'Multi-quarter deal stalls during SOC-2/procurement reviews; discretionary discounting eroding ACV; high CAC payback periods exceeding 24 months.',
      revenueDrivers: ['Expansion ARR Velocity', 'Cohort Net Retention (NRR)', 'Usage-Based Monetization Triggers'],
      kpis: [{ label: 'Median NRR', val: '124%' }, { label: 'Target CAC Payback', val: '< 14 Mo' }, { label: 'Magic Number', val: '> 0.95' }],
      architecture: 'Autonomous SDR telemetry syncing dark-funnel intent directly to account AE pods with automated CPQ guardrails.'
    },
    {
      id: 'manufacturing',
      title: 'Advanced Manufacturing & Industrial IoT',
      icon: Factory,
      badge: 'Industrial IoT',
      valueChain: 'Component Sourcing → Production Scheduling → Dealer Distribution → Aftermarket Telemetry',
      challenges: 'Legacy distributor blind spots; slow quote turnaround taking weeks; margin leakage across custom field orders and raw material fluctuations.',
      revenueDrivers: ['Dealer Channel Velocity', 'Aftermarket Parts Attach', 'Long-Term Service Agreements (LTSA)'],
      kpis: [{ label: 'Quote Turnaround', val: '< 3 Days' }, { label: 'Service Attach', val: '38%' }, { label: 'Gross Margin Protection', val: '+4.2 pts' }],
      architecture: 'IoT edge-telemetry sensors feeding real-time equipment wear into automated warranty renewal workflows.'
    },
    {
      id: 'fintech',
      title: 'Banking, Financial Services & FinTech',
      icon: Landmark,
      badge: 'FinTech / BFSI',
      valueChain: 'Regulatory Ingestion → Risk Underwriting → Transaction Clearing → Treasury Management',
      challenges: 'Severe customer acquisition cost inflation on digital ads; compliance-driven onboarding friction; margin compression on commoditized interchange.',
      revenueDrivers: ['Net Interest Margin (NIM) Realization', 'Deposit Beta Retention', 'API Transaction Density'],
      kpis: [{ label: 'Onboarding Velocity', val: '-62% Latency' }, { label: 'Core Retention', val: '142% NRR' }, { label: 'CAC Efficiency', val: '3.4x Payback' }],
      architecture: 'Cryptographic compliance audit trails with automated KYC/KYB ingestion routing high-value enterprise accounts to private bankers.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Systems & Life Sciences',
      icon: HeartPulse,
      badge: 'HealthTech / Pharma',
      valueChain: 'Clinical Research → FDA/IRB Filing → Hospital GPO Contracting → Patient Service Delivery',
      challenges: '18-month hospital buying committees; complex GPO pricing tiers; strict HIPAA/BAA data sovereignty restrictions.',
      revenueDrivers: ['Clinical Trial Attach Rates', 'Hospital System Master Service Agreements', 'Recurring Consumables Re-order'],
      kpis: [{ label: 'HIPAA Compliance', val: '100% Locked' }, { label: 'Hospital Pipeline', val: '3.4x Lift' }, { label: 'Procurement Latency', val: '-52%' }],
      architecture: 'Zero-knowledge data enclaves ensuring sovereign clinical trial data never leaves hospital enterprise firewalls.'
    },
    {
      id: 'automotive',
      title: 'Automotive & Mobility Platforms',
      icon: Car,
      badge: 'Automotive / EV',
      valueChain: 'Tier-1 Supply Chain → OEM Vehicle Assembly → Franchise Dealerships → Connected Over-The-Air (OTA)',
      challenges: 'Margin erosion across EV transitions; battery raw material price spikes; disconnected franchise dealer customer data.',
      revenueDrivers: ['Connected Vehicle Subscription Attach', 'Fleet Telematics Contracts', 'Direct-to-Consumer Digital Add-Ons'],
      kpis: [{ label: 'OTA Feature Attach', val: '24%' }, { label: 'Dealer Quoting Speed', val: '2.6x Faster' }, { label: 'Rival Displacements', val: '$14.8M' }],
      architecture: 'Connected vehicle telemetry streaming driving behavior directly into personalized insurance and warranty maintenance workflows.'
    },
    {
      id: 'logistics',
      title: 'Supply Chain, Freight & Logistics',
      icon: Truck,
      badge: 'Supply Chain',
      valueChain: 'Freight Forwarding → Port Intermodal Transfer → Warehouse Fulfillment → Last-Mile Delivery',
      challenges: 'Extreme fuel price volatility; spot-market rate wars; unbilled demurrage and detention charges leaking operating profits.',
      revenueDrivers: ['Dynamic Spot-to-Contract Hedging', 'Dedicated Fleet Capacity Commitments', 'Automated Demurrage Capture'],
      kpis: [{ label: 'Unbilled Margin Recovery', val: '$3.8M' }, { label: 'Empty Route Miles', val: '-18%' }, { label: 'Contract Adherence', val: '97.2%' }],
      architecture: 'Real-time GPS and port container API webhooks reconciling freight bills with dynamic fuel surcharge surcharges.'
    }
  ];

  const functions = [
    {
      id: 'direct-sales',
      title: 'Direct Sales & Enterprise Deal Execution',
      icon: Target,
      badge: 'Sales Leadership',
      focus: 'Multi-Stakeholder Consensus & Close Plan Governance',
      problems: 'Deals slipping past quarter end; single-threaded AE contacts; uncontrolled discounting at the 11th hour to hit quotas.',
      framework: 'MEDDPICC + Mutual Value Realization Plans (MVRP) with algorithmic deal health telemetry.',
      metrics: ['AE Quota Attainment %', 'Deal Cycle Days', 'Average Selling Price (ASP)', 'Late-Stage Stall Rate']
    },
    {
      id: 'demand-gen',
      title: 'Marketing & Demand Engineering',
      icon: TrendingUp,
      badge: 'Marketing / CMO',
      focus: 'Dark-Funnel Intent Capture & Account Activation',
      problems: 'Vanity MQL metrics that never convert; uncoordinated ABM spending; blind spots in accounts conducting category research.',
      framework: 'Algorithmic Intent Fusion: matching first-party IP telemetry with third-party intent surges to trigger sales playbooks.',
      metrics: ['Pipeline Sourced to Spend Ratio', 'Revenue Qualified Accounts (RQA)', 'Cost Per Pipeline Dollar', 'Intent Surge Velocity']
    },
    {
      id: 'customer-success',
      title: 'Customer Success & Net Revenue Retention',
      icon: Users,
      badge: 'Customer Success',
      focus: 'Pre-Churn Behavioral Sentinels & Expansion Triggers',
      problems: 'Reactive churn discovery at contract renewal; under-monetized power users; lack of usage telemetry alignment with sales.',
      framework: 'Algorithmic Account Telemetry: tracking seat utilization, API velocity, and executive departures as proactive triggers.',
      metrics: ['Net Revenue Retention (NRR)', 'Gross Revenue Retention (GRR)', 'Time-to-Value (TTV)', 'Expansion Pipe Generated']
    },
    {
      id: 'revops',
      title: 'Revenue Operations & Systems Architecture',
      icon: Activity,
      badge: 'RevOps / COO',
      focus: 'Single Revenue Source of Truth & Pipeline Governance',
      problems: 'Conflicting numbers between sales, marketing, and finance; manual spreadsheet reporting; stale CRM opportunity data.',
      framework: 'Parametric Revenue Engine: unifying pipeline schemas across Salesforce/HubSpot, Snowflake, and billing ERPs.',
      metrics: ['Forecast Variance %', 'Data Hygiene Score', 'Lead-to-Opportunity Velocity', 'System Redundancy Cost']
    },
    {
      id: 'pricing-packaging',
      title: 'Pricing, Packaging & Monetization Strategy',
      icon: DollarSign,
      badge: 'CFO / Strategy',
      focus: 'Willingness-to-Pay & Contribution Margin Floor',
      problems: 'Legacy cost-plus pricing; unmonetized premium enterprise features; uncontrolled discretionary rep discounts.',
      framework: 'Value-Metric Conjoint Calibration: aligning pricing with customer value consumption and locking margin floors in CPQ.',
      metrics: ['Net Price Realization', 'Discounting Deviation %', 'Margin Per Account Tier', 'Feature Adoption Elasticity']
    },
    {
      id: 'ai-governance',
      title: 'AI Trust, Governance & Commercial Compliance',
      icon: ShieldCheck,
      badge: 'CTO / Legal',
      focus: 'Deterministic Guardrails & Regulatory Compliance',
      problems: 'Hallucination liability; rogue employee generative tools; non-compliance with the EU AI Act and ISO 42001 mandates.',
      framework: 'Zero-Drift Execution Sentry: audit-logged prompts, strict API parameter enforcement, and supervisory human-in-the-loop gates.',
      metrics: ['Regulatory Audit Pass Rate', 'Model Drift Variance', 'PII Exposure Incidents (0)', 'Prompt Latency (p99)']
    }
  ];

  const submenus = [
    { id: 'industry-resource-hubs', title: 'Industry Resource Centers', badge: '10 Sectors' },
    { id: 'commerce-technology-industries', title: 'Commerce & Technology Industries', badge: 'Scale Models' },
    { id: 'functional-resource-hubs', title: 'Functional Resource Centers', badge: 'Executive Roles' },
    { id: 'operations-enterprise-functions', title: 'Operations & Enterprise Functions', badge: 'Unit Economics' },
    { id: 'industry-functional-playbooks', title: 'Industry & Functional Playbooks', badge: 'Execution' }
  ];

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── BREADCRUMB ── */}
      <div className="border-b border-slate-200 bg-slate-50/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/resources-hub" className="hover:text-blue-600 transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 font-bold">Industry & Functional Intelligence</span>
          </nav>
        </div>
      </div>

      {/* ── HERO SECTION (OFFERINGS PRESTIGE DARK PANEL) ── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Executive Landscape Intelligence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading mb-4">
              Industry & Functional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Commercial Intelligence
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              Enterprise revenue engines fail when generic playbooks collide with vertical market constraints. Explore architectural blueprints engineered around sector-specific compliance, value chains, and departmental commercial execution.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">10 Sectors</div>
                <div className="text-[11px] text-slate-400 font-medium">Vertical Architectures</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">6 Roles</div>
                <div className="text-[11px] text-slate-400 font-medium">Departmental Standards</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Compliance-Locked</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono">+18-34%</div>
                <div className="text-[11px] text-slate-400 font-medium">Margin Realization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PAGE ANCHOR JUMP BAR (OFFERINGS LIGHT STYLE, NON-STICKY) ── */}
      <section className="border-b border-slate-200 bg-slate-50/90 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
            Section Navigation · 5 Submenus
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {submenus.map((item) => (
              <button
                key={item.id}
                onClick={() => handleAnchorClick(item.id)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-500 text-slate-700 shadow-2xs transition-all cursor-pointer"
              >
                <span>{item.title}</span>
                <span className="px-1.5 py-0.2 rounded bg-slate-100 text-[10px] text-slate-600 font-mono">
                  {item.badge}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT CONTAINER (CLEAN OFFERINGS LIGHT CANVAS) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ══════════════════════════════════════════════════════════════════
            Industry Resource Centers
        ══════════════════════════════════════════════════════════════════ */}
        <section id="industry-resource-hubs" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Industry Resource Centers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Verticalized revenue architecture addressing industry-specific value chains, regulatory mandates, and margin concentration across 10 major global sectors.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              Verified Playbooks
            </span>
          </div>

          {/* Vertical Matrix Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {verticals.map((v) => {
              const VIcon = v.icon;
              const isSelected = activeVertical === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    setActiveVertical(v.id);
                    trackEvent({ eventName: 'RESOURCES_VERTICAL_CLICK', label: v.title });
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[92px] ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <VIcon className={`w-5 h-5 ${isSelected ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <div className="text-xs font-bold leading-tight font-heading">{v.title.split('&')[0]}</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{v.badge}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Vertical Card */}
          {(() => {
            const current = verticals.find(v => v.id === activeVertical) || verticals[0];
            const CurIcon = current.icon;
            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                      <CurIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-heading">{current.title}</h3>
                      <span className="text-xs font-mono text-slate-500">{current.badge} Operational Blueprint</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {current.kpis.map((kpi, kIdx) => (
                      <div key={kIdx} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                        <div className="text-xs font-mono font-bold text-emerald-700">{kpi.val}</div>
                        <div className="text-[9px] text-slate-500 uppercase tracking-wider">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
                    <span className="font-mono text-blue-700 font-bold uppercase tracking-wider block">End-to-End Value Chain</span>
                    <p className="text-slate-700 leading-relaxed font-medium">{current.valueChain}</p>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-mono text-rose-600 font-bold uppercase tracking-wider block">Root Operational Challenges</span>
                      <p className="text-slate-600 leading-relaxed mt-1">{current.challenges}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
                    <span className="font-mono text-emerald-700 font-bold uppercase tracking-wider block">Core Revenue Drivers</span>
                    <ul className="space-y-1.5 text-slate-700 font-medium">
                      {current.revenueDrivers.map((driver, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{driver}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-mono text-indigo-700 font-bold uppercase tracking-wider block">ProfitMachines Deployment Architecture</span>
                      <p className="text-slate-600 leading-relaxed mt-1">{current.architecture}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            Commerce & Technology Industries
        ══════════════════════════════════════════════════════════════════ */}
        <section id="commerce-technology-industries" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Commerce & Technology Industries
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                High-velocity digital business models: subscription monetization, algorithmic commerce, and platform network scaling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Enterprise Cloud & Infrastructure</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Overcoming cloud consumption volatility through committed contract structures, multi-product tier packaging, and automated margin baselines.
              </p>
              <div className="text-xs font-mono text-blue-700 space-y-1 pt-3 border-t border-slate-100">
                <div>• Architecture: Consumption-to-Commitment Model</div>
                <div className="text-emerald-700 font-bold">• Impact: -34% Deal Slippage in Enterprise Accounts</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Omnichannel E-Commerce & Retail</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mitigating customer acquisition cost spikes with first-party behavioral intent triggers, personalized checkout architectures, and dynamic basket re-ordering.
              </p>
              <div className="text-xs font-mono text-indigo-700 space-y-1 pt-3 border-t border-slate-100">
                <div>• Architecture: Real-Time Abandoned Journey Recovery</div>
                <div className="text-emerald-700 font-bold">• Impact: +18.4% Net Contribution Margin on Repeat Purchases</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Telecommunications & Networks</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Monetizing 5G slicing and private enterprise network bandwidth with algorithmic multi-year SLA governance and usage billing automation.
              </p>
              <div className="text-xs font-mono text-sky-700 space-y-1 pt-3 border-t border-slate-100">
                <div>• Architecture: SLA Contractual Yield Telemetry</div>
                <div className="text-emerald-700 font-bold">• Impact: 99.8% Contractual Revenue Capture Precision</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            Functional Resource Centers
        ══════════════════════════════════════════════════════════════════ */}
        <section id="functional-resource-hubs" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Functional Resource Centers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Operational execution standards organized around executive roles: CROs, CMOs, CCOs, and Heads of Sales.
              </p>
            </div>
          </div>

          {/* Functional Role Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {functions.map((fn) => {
              const FIcon = fn.icon;
              const isSelected = activeFunction === fn.id;
              return (
                <button
                  key={fn.id}
                  onClick={() => setActiveFunction(fn.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[92px] ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <FIcon className={`w-5 h-5 ${isSelected ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  <div>
                    <div className="text-xs font-bold leading-tight font-heading">{fn.title.split('&')[0]}</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{fn.badge}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Function Card */}
          {(() => {
            const current = functions.find(f => f.id === activeFunction) || functions[0];
            const CurIcon = current.icon;
            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center shrink-0">
                      <CurIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-heading">{current.title}</h3>
                      <span className="text-xs font-mono text-indigo-600 font-bold">{current.focus}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
                    <span className="font-mono text-rose-600 font-bold uppercase tracking-wider block">Critical Departmental Failure Modes</span>
                    <p className="text-slate-600 leading-relaxed font-normal">{current.problems}</p>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-mono text-indigo-700 font-bold uppercase tracking-wider block">Standardized Governance Framework</span>
                      <p className="text-slate-700 leading-relaxed mt-1 font-medium">{current.framework}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
                    <span className="font-mono text-emerald-700 font-bold uppercase tracking-wider block">Departmental Health Telemetry (KPIs)</span>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {current.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono font-medium text-[11px] shadow-2xs">
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            Operations & Enterprise Functions
        ══════════════════════════════════════════════════════════════════ */}
        <section id="operations-enterprise-functions" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Operations & Enterprise Functions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Unit economics, telemetry infrastructure, and governance reconciling commercial promises with audited GAAP balance sheets.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">RevOps Telemetry Infrastructure</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminating siloed CRM reports through unified event streaming that ties marketing campaign clicks directly to booked ARR.
              </p>
              <div className="text-xs font-mono text-emerald-700 font-bold pt-2 border-t border-slate-100">
                Attribution Accuracy: 99.4%
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">CFO Unit Economics & CPQ</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enforcing automated contribution margin guardrails into sales quoting, ensuring no enterprise rep submits below-floor discounts.
              </p>
              <div className="text-xs font-mono text-emerald-700 font-bold pt-2 border-t border-slate-100">
                Margin Protected: +5.4 pts
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Legal & Compliance Workflows</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Standardizing Master Service Agreements, DPAs, and SLA compliance clauses with automated redline reconciliation algorithms.
              </p>
              <div className="text-xs font-mono text-emerald-700 font-bold pt-2 border-t border-slate-100">
                Redline Cycle Time: -70%
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            Industry & Functional Playbooks
        ══════════════════════════════════════════════════════════════════ */}
        <section id="industry-functional-playbooks" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Industry & Functional Playbooks
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Step-by-step operational blueprints combining vertical constraints with departmental execution.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm divide-y divide-slate-100 overflow-hidden">
            {[
              {
                title: 'The Multi-Product SaaS NRR Acceleration Playbook',
                desc: 'Orchestrating customer success usage alarms with automated account AE expansion proposals to exceed 130% NRR.',
                audience: 'CROs, VPs of Customer Success',
                readTime: '18 Min Briefing',
                badge: 'Enterprise Cloud'
              },
              {
                title: 'Industrial IoT Dealer Quotation Velocity Playbook',
                desc: 'Compressing heavy equipment quotation turnaround from 6 weeks to 72 hours via automated CPQ and BOM pricing engines.',
                audience: 'VPs of Commercial Operations, Dealer Principals',
                readTime: '24 Min Briefing',
                badge: 'Manufacturing'
              },
              {
                title: 'Healthcare EHR Compliance & GPO Negotiation Playbook',
                desc: 'Navigating 14-member hospital buying committees with audit-certified BAA agreements and quantified clinical ROI dossiers.',
                audience: 'Heads of Healthcare Sales, Chief Legal Officers',
                readTime: '30 Min Briefing',
                badge: 'HealthTech'
              }
            ].map((pb, pIdx) => (
              <div key={pIdx} className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {pb.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{pb.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-heading">{pb.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pb.desc}</p>
                  <div className="text-[11px] font-mono text-slate-500">Target Role: {pb.audience}</div>
                </div>

                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1 text-xs font-bold font-mono text-blue-600 hover:text-blue-700 shrink-0"
                >
                  <span>Request Full Playbook</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── BOTTOM CTA SECTION (EXECUTIVE DARK CONTRAST) ── */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            Vertical Strategy Consultation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Deploy Vertical Commercial Intelligence to Your Organization
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an architectural diagnostic session with our revenue engineers to align your GTM motions with your exact industry value chain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Schedule Vertical Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/offerings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <span>Explore All 7 Offerings</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
