import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Layers, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle,
  CheckCircle2, ChevronRight, Briefcase, Factory, ShoppingBag, Landmark,
  Cpu, HeartPulse, GraduationCap, Store, Building, Flame, Shield,
  Activity, Search, DollarSign, Settings, Network, Compass, Filter,
  Table, Lock, HelpCircle, BarChart3, Users, Zap
} from 'lucide-react';

const sectorNav = [
  { id: 'sectors', label: '10 Sector Pathways' },
  { id: 'workflow', label: 'Common Workflow' },
  { id: 'compare', label: 'Sector Comparison' },
  { id: 'governance', label: 'Security & Governance' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'faq', label: 'FAQ' },
];

const sectorsList = [
  {
    id: 'services',
    name: 'Professional & Business Services',
    subtitle: 'Consulting, Legal, Accounting & B2B Advisory Firms',
    icon: Briefcase,
    color: 'blue',
    challenge: 'High reliance on partner referral networks, inconsistent pipeline qualification, and capacity-blind lead acceptance.',
    workflow: 'Inquiry Qualification → Partner Intent Routing → Scoping Dossier Automation → Capacity-Aware Scheduling.',
    kpis: ['Qualified Inquiry Volume', 'Consultation-to-Retainer %', 'Partner Response Velocity', 'Practice-Area Pipeline Value'],
    dataNeeds: 'Website inquiry telemetry, practice specialization tags, partner capacity rosters, historical case outcomes.',
    governance: 'Strict client confidentiality, conflict-of-interest checks, and professional privilege protections.',
    tag: 'B2B Advisory'
  },
  {
    id: 'industrial',
    name: 'Industrial Manufacturing & Supply Chain',
    subtitle: 'Heavy Machinery, OEM Components, Logistics & Distribution',
    icon: Factory,
    color: 'amber',
    challenge: 'Complex dealer networks, multi-tiered distributors, long custom procurement cycles, and offline quote negotiations.',
    workflow: 'Spec Sheet Analysis → Distributor Account Scoring → RFQ Priority Routing → Margin-Guarded Pricing Workflows.',
    kpis: ['Quote-to-Order Conversion Rate', 'Distributor Lead Velocity', 'Average Order Value Lift', 'Forecast Margin Variance'],
    dataNeeds: 'ERP inventory levels, dealer portal orders, CAD/spec sheet requests, historical raw material cost indices.',
    governance: 'Trade compliance, export control screening, distributor territorial exclusivity covenants.',
    tag: 'OEM & Distribution'
  },
  {
    id: 'd2c',
    name: 'D2C Brands & Consumer Commerce',
    subtitle: 'Omnichannel Apparel, Electronics, Wellness & Lifestyle Products',
    icon: ShoppingBag,
    color: 'emerald',
    challenge: 'High customer acquisition costs, ad network fatigue, checkout abandonment, and weak repeat purchase cohorts.',
    workflow: 'Dark-Funnel Intent Capture → Omnichannel Lookalike Expansion → Margin-Preserved Dynamic Offers → 15-Min SMS Cart Recovery.',
    kpis: ['Blended Customer Acquisition Cost', '90-Day Repurchase Velocity', 'Abandoned Cart Recovery ARR', 'ROAS Parity'],
    dataNeeds: 'E-commerce session logs, product catalog margins, email/SMS engagement, customer order history.',
    governance: 'GDPR / CCPA consent logging, TCPA quiet hours compliance, friction-free opt-out handling.',
    tag: 'Retail & eCommerce'
  },
  {
    id: 'fintech',
    name: 'FinTech, Lending & WealthTech',
    subtitle: 'Digital Banking, Alternative Credit, Wealth Platforms & InsurTech',
    icon: Landmark,
    color: 'indigo',
    challenge: 'High application drop-off rates, expensive regulatory KYC/AML checks on unqualified leads, and compliance scrutiny.',
    workflow: 'Pre-Qualification Intent Scoring → Frictionless Document Ingestion → Risk-Aware Onboarding Guidance → KYC Handoff.',
    kpis: ['Application Completion %', 'Cost Per Funded Account', 'Onboarding Time Compression', 'KYC Pass Rate'],
    dataNeeds: 'Consented financial profile data, credit bureau API feeds, identity verification verification states.',
    governance: 'SOC2 Type II, GLBA compliance, algorithmic fair lending audits, zero automated unreviewed credit denials.',
    tag: 'Regulated Finance'
  },
  {
    id: 'saas',
    name: 'B2B SaaS & Cloud Platforms',
    subtitle: 'Enterprise Software, Developer Tools & Subscription Infrastructure',
    icon: Cpu,
    color: 'violet',
    challenge: 'Dark-funnel buyer research invisible to sales, trial-to-paid dropoffs, and undetected expansion opportunities.',
    workflow: 'Product-Qualified Lead (PQL) Scoring → Competitive Displacement Triggers → Expansion Telemetry Radar → Multi-Year Renewal Packaging.',
    kpis: ['Product-to-Sales Qualified Velocity', 'Net Revenue Retention (NRR)', 'Trial-to-Paid Conversion %', 'Expansion ACV Lift'],
    dataNeeds: 'In-app event streaming, CRM opportunity histories, license seat utilization logs, support ticket sentiment.',
    governance: 'Tenant data segregation, GDPR right-to-be-forgotten automation, customer-managed encryption key support.',
    tag: 'Recurring Software'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    subtitle: 'Biotech, Medical Devices, Clinical Research & Health IT',
    icon: HeartPulse,
    color: 'rose',
    challenge: 'Lengthy institutional procurement committees, strict patient privacy boundaries, and fragmented hospital networks.',
    workflow: 'Institutional Provider Profiling → Committee Stakeholder Mapping → Value Dossier Generation → Compliance-Screened Outreach.',
    kpis: ['Institutional Inquiries Advanced', 'Committee Coverage Ratio', 'Procurement Cycle Duration', 'Proof-of-Value Conversion'],
    dataNeeds: 'Public hospital registries, NPI data directories, clinical specialization tags, RFP portal requirements.',
    governance: 'Strict zero-PHI marketing boundaries, HIPAA compliance safeguards, medical legal review workflows.',
    tag: 'Clinical & Life Sciences'
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    subtitle: 'Higher Ed, Corporate Upskilling Platforms & K-12 Technology',
    icon: GraduationCap,
    color: 'sky',
    challenge: 'High inquiry drop-off across complex admissions funnels, seasonal enrollment cliffs, and multi-buyer institutional sales.',
    workflow: 'Candidate Intent Scoring → Instant Automated Admissions Counseling → Multi-Touch Program Guidance → Enrollment Retention Loops.',
    kpis: ['Inquiry-to-Enrollment Rate', 'Admissions Response Velocity', 'Student Activation Rate', 'Course Continuation Cohort %'],
    dataNeeds: 'Admissions portal telemetry, program inquiry forms, course completion logs, financial aid verification states.',
    governance: 'FERPA privacy protections, COPPA compliance for minors, institutional data retention standards.',
    tag: 'Learning Platforms'
  },
  {
    id: 'retail',
    name: 'Retail & FMCG Distribution',
    subtitle: 'Consumer Packaged Goods, Multi-Location Retailers & Wholesale',
    icon: Store,
    color: 'teal',
    challenge: 'Incomplete point-of-sale visibility across retail distributor networks, delayed promotion feedback, and regional stockout mismatches.',
    workflow: 'Regional Demand Signal Monitoring → Category Sell-Through Velocity Auditing → Distributor Co-Op Campaign Optimization.',
    kpis: ['Sell-Through Velocity Lift', 'Distributor Campaign ROI', 'Regional Demand Forecast Precision', 'Trade Promotion Effectiveness'],
    dataNeeds: 'Distributor EDI order feeds, regional store inventory allocations, syndicated retail scan data, promotional calendars.',
    governance: 'Commercial antitrust compliance, trade promotion pricing transparency, distributor confidentiality.',
    tag: 'Consumer Goods'
  },
  {
    id: 'real-estate',
    name: 'Commercial & Residential Real Estate',
    subtitle: 'Property Developers, Asset Managers, Brokerages & PropTech',
    icon: Building,
    color: 'orange',
    challenge: 'High cost per speculative lead, slow broker response times, unverified buyer liquidity, and lost site visit follow-ups.',
    workflow: 'Buyer Wealth & Intent Verification → Dynamic Property Matching → Instant Site Tour Self-Scheduling → Contract Milestone Nudging.',
    kpis: ['Qualified Lead-to-Tour Rate', 'Inquiry Response Time (Under 5 Min)', 'Asset Liquidation Velocity', 'Contract Signing Speed'],
    dataNeeds: 'Property inventory listings, CRM lead submissions, virtual tour interactions, public land registry records.',
    governance: 'Fair Housing Act compliance, anti-money laundering (AML) cash buyer verification, data privacy.',
    tag: 'Property & Development'
  },
  {
    id: 'energy',
    name: 'Energy, Utilities & Cleantech',
    subtitle: 'Renewable Developers, Power Utilities, Carbon Accounting & ESG Tech',
    icon: Flame,
    color: 'yellow',
    challenge: 'Complex multi-year enterprise RFP cycles, regulatory utility commission approvals, and technical grid interconnection hurdles.',
    workflow: 'Corporate Sustainability Target Extraction → Commercial Energy Profile Modeling → Regulatory RFP Defense Briefs → PPA Opportunity Routing.',
    kpis: ['Qualified Commercial PPA Pipeline', 'RFP Win Probability Lift', 'Regulatory Milestone Velocity', 'Commercial Account Engagement'],
    dataNeeds: 'Corporate sustainability reports, public utility rate tariffs, commercial building square footage registers.',
    governance: 'Critical infrastructure security protocols, public utility commission standards, ESG disclosure verification.',
    tag: 'Infrastructure & Cleantech'
  }
];

const faqs = [
  { q: 'How does ProfitMachines adapt to strict regulatory constraints (HIPAA, GLBA, FERPA)?', a: 'Every industry pathway enforces hardcoded data boundaries. We never process protected health information (PHI), non-consented financial records, or student academic data within commercial sales workflows. Systems operate on metadata and public commercial signals within client-governed environments.' },
  { q: 'Can specialized sector workflows integrate with legacy ERP systems (SAP, Oracle, Epic)?', a: 'Yes. Enterprise integration layers support standard REST APIs, SFTP batch syncs, and webhook adapters designed to ingest commercial metadata from legacy ERP and core systems without requiring core database modification.' },
  { q: 'How is domain-specific terminology incorporated into AI-assisted outreach?', a: 'Language models are grounded with industry-specific ontologies, technical glossaries, and verified company collateral. Messaging adopts the exact professional cadence required — avoiding generic sales jargon.' },
  { q: 'What is the implementation timeline for a single vertical pathway?', a: 'A single vertical workflow typically reaches pilot operational readiness in 4 to 6 weeks, beginning with data hygiene and compliance validation before launching controlled live sequences.' },
  { q: 'Does the platform support multi-sector conglomerates operating in several industries?', a: 'Yes. Organizations managing multiple operating units can configure distinct vertical playbooks for each subsidiary, maintaining centralized governance while granting localized teams tailored workflows.' },
  { q: 'How are human approval workflows managed in regulated sectors?', a: 'High-impact communications in sectors like FinTech and Healthcare require mandatory dual-authorization: the AI co-pilot prepares dossiers, but outward customer communication is sent exclusively after designated compliance and commercial leaders approve.' }
];

export default function IndustriesSpecialized() {
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedSector, setSelectedSector] = useState<string>('services');

  useEffect(() => {
    document.title = 'Specialized Sectors | Vertical Revenue Engineering | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const activeSectorData = sectorsList.find(s => s.id === selectedSector) || sectorsList[0];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Layers className="w-3.5 h-3.5" /><span>Vertical-Specific Revenue Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 leading-[1.1]">
                Revenue Workflows Built Around Your Industry's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Real-World Constraints.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                Different sectors operate with distinct buying processes, compliance frameworks, data structures, and operational dependencies. ProfitMachines engineers revenue workflows around the reality of how your industry conducts business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#sectors" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
                  Explore 10 Sectors <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
                  Request Sector Scoping <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                {[
                  { val: '10 Sectors', label: 'Dedicated Architectures' },
                  { val: 'Compliance', label: 'HIPAA, GLBA & FERPA' },
                  { val: 'Zero PHI', label: 'Air-Gapped Boundaries' },
                  { val: 'ERP-Ready', label: 'API & Batch Connectors' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Directory Preview Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {sectorsList.slice(0, 6).map(s => {
                const Icon = s.icon;
                return (
                  <div key={s.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-blue-400">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-white truncate">{s.name}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-2">{s.challenge}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY SUBNAV ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5">
            {sectorNav.map(item => (
              <a key={item.id} href={`#${item.id}`} className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: 10 SECTORS DIRECTORY ── */}
      <section id="sectors" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" /> Sector Architectures
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Ten Specialized Industry Revenue Playbooks
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Select your operating vertical to inspect specific revenue challenges, engineered workflows, required data inputs, and measurable outcome indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {sectorsList.map(sec => {
              const Icon = sec.icon;
              return (
                <div key={sec.id} id={sec.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between scroll-mt-28">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">{sec.tag}</span>
                          <h3 className="text-lg font-bold text-slate-900 leading-tight">{sec.name}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">{sec.subtitle}</p>

                    <div className="space-y-3 mb-4">
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">Commercial Challenge</span>
                        <p className="text-xs text-slate-700 leading-relaxed">{sec.challenge}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">Engineered Workflow</span>
                        <p className="text-xs text-slate-700 leading-relaxed">{sec.workflow}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Measurable Outcome KPIs:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {sec.kpis.map(k => (
                          <span key={k} className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono font-medium">{k}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span><strong>Governance: </strong>{sec.governance.substring(0, 48)}...</span>
                    <Link to="/book-consultation" className="font-bold text-blue-600 hover:underline shrink-0 ml-2">Scope Playbook →</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: COMMON WORKFLOW ── */}
      <section id="workflow" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/60 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Operating Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">A Common Revenue Workflow Across Sectors</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">While data models and compliance obligations differ by vertical, successful commercial transformation follows a disciplined six-stage progression.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: '01', title: 'Industry Context', desc: 'Audit regulatory frameworks, data availability, and buyer procurement habits.' },
              { step: '02', title: 'Opportunity Discovery', desc: 'Identify acute friction points where deals stall or high-value accounts go unserved.' },
              { step: '03', title: 'Workflow Design', desc: 'Architect tailored intelligence capture, CRM synchronization, and rep review queues.' },
              { step: '04', title: 'Controlled Execution', desc: 'Deploy automated research and outreach within strict compliance boundaries.' },
              { step: '05', title: 'KPI Measurement', desc: 'Track qualified pipeline velocity, CAC payback, and conversion rates against baseline.' },
              { step: '06', title: 'Continuous Tuning', desc: 'Calibrate models based on closed-won win telemetry and shifting market dynamics.' },
            ].map(st => (
              <div key={st.step} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">{st.step}</div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">{st.title}</h3>
                  <p className="text-xs text-slate-500 mb-3 leading-snug">{st.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono font-bold text-blue-600">
                  Phase {st.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SECTOR COMPARISON TABLE ── */}
      <section id="compare" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Table className="w-3.5 h-3.5" /> Comparative Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Compare Sector Opportunities & Requirements</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Evaluating data readiness, compliance boundaries, and primary outcome metrics across specialized industries.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-mono uppercase text-[10px] tracking-wider">
                  <th className="p-3.5 font-bold">Sector</th>
                  <th className="p-3.5 font-bold">Primary Commercial Challenge</th>
                  <th className="p-3.5 font-bold">Core Data Inputs</th>
                  <th className="p-3.5 font-bold">Primary Success Metric</th>
                  <th className="p-3.5 font-bold">Governance & Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                {sectorsList.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{s.name}</td>
                    <td className="p-3.5 max-w-xs">{s.challenge}</td>
                    <td className="p-3.5 max-w-xs text-slate-600">{s.dataNeeds}</td>
                    <td className="p-3.5 whitespace-nowrap font-mono font-medium text-blue-600">{s.kpis[0]}</td>
                    <td className="p-3.5 max-w-xs text-slate-500">{s.governance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-4 italic">Comparison matrix is architectural — implementations adapt to each client's specific IT stack, commercial contract scale, and jurisdictional rules.</p>
        </div>
      </section>

      {/* ── SECTION 4: GOVERNANCE ── */}
      <section id="governance" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/60 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Shield className="w-3.5 h-3.5" /> Trust & Compliance
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Data, Security & Sector Governance</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Regulated sectors require clear evaluation of data ownership, permitted use, and auditability before introducing automated workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Data Readiness & Lawful Use',
                points: ['Evaluation of existing CRM cleanliness, opt-in records, and data rights.', 'Strict exclusion of non-consented personal data or restricted regulatory records.', 'Verification that data sharing adheres to platform agreements and regional rules.'],
                icon: Lock,
              },
              {
                title: 'Human Review & Escalation Gates',
                points: ['Pre-configured approval gates for all high-value proposals and outbound messaging.', 'Mandatory dual authorization in highly regulated sectors (FinTech, Life Sciences).', 'Automated alerts for sensitive buyer objections or non-standard procurement terms.'],
                icon: Users,
              },
              {
                title: 'Auditability & Compliance Logging',
                points: ['Immutable logging of all AI-generated research briefs, drafts, and customer interactions.', 'Periodic algorithmic bias and fairness reviews for financial qualification models.', 'Alignment with SOC2 Type II, ISO 27001, and regional data sovereignty guidelines.'],
                icon: ShieldCheck,
              },
            ].map(col => {
              const Icon = col.icon;
              return (
                <div key={col.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: IMPLEMENTATION ── */}
      <section id="implementation" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Settings className="w-3.5 h-3.5" /> Deployment Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Sector-Specific Implementation Progression</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">A structured 4-step path that ensures deep vertical alignment and data validation prior to full commercial rollout.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand the Sector Model', desc: 'Assess industry buying cycles, stakeholder committees, regulatory statutes, and existing system integrations.' },
              { step: '02', title: 'Prioritize a Measurable Workflow', desc: 'Select a single high-impact commercial bottleneck (e.g. distributor lead routing, PQL qualification, RFQ preparation).' },
              { step: '03', title: 'Validate Data & Governance', desc: 'Confirm data availability, API connectivity, encryption requirements, and human oversight escalation rules.' },
              { step: '04', title: 'Pilot & Measure Evidence', desc: 'Run a controlled 30-day pilot comparing opportunity velocity and conversion against historical baseline before scaling.' },
            ].map(st => (
              <div key={st.step} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">0{st.step}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">Specialized Sectors — FAQ</h2>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">Identify the Right Revenue Workflow for Your Sector.</h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">Discuss your specific industry buying cycles, data infrastructure, and regulatory boundaries with a dedicated revenue systems architect.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
              Book Sector Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/offerings" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
              Explore Platform Offerings <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
