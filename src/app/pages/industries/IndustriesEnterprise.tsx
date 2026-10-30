import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building2, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle,
  CheckCircle2, ChevronRight, Globe, Handshake, Users, BarChart3,
  Network, Layers, Search, Settings, Lock, FileText, Activity, Compass,
  Briefcase, Cpu, Sliders, Shield
} from 'lucide-react';

const sectionNav = [
  { id: 'friction', label: 'Enterprise Friction' },
  { id: 'architecture', label: 'Account Architecture' },
  { id: 'global', label: 'Global Account Penetration' },
  { id: 'partnerships', label: 'Strategic Partnerships' },
  { id: 'executive', label: 'Executive Engagement' },
  { id: 'dashboard', label: 'Intelligence Cockpit' },
  { id: 'governance', label: 'Integration & Governance' },
  { id: 'faq', label: 'FAQ' },
];

const frictionPoints = [
  {
    title: 'Fragmented Subsidiary Intelligence',
    cause: 'Multinational corporations hold dozens of legal subsidiaries operating on disjointed ERP and CRM instances.',
    consequence: 'Account teams remain siloed in single divisions while high-value peer business units remain completely unmapped.',
    icon: Globe,
  },
  {
    title: 'Dispersed 15+ Person Buying Committees',
    cause: 'Enterprise technology procurement requires buy-in across technical evaluators, infosec, procurement, finance, and end-user leaders.',
    consequence: 'Deals stall at consensus formation when non-aligned stakeholders raise unaddressed objections late in the cycle.',
    icon: Users,
  },
  {
    title: 'Prolonged Security & Procurement Drag',
    cause: 'Compliance questionnaires, data residency audits, and MSA legal reviews run sequentially rather than concurrently.',
    consequence: 'Sales cycles extend by 4 to 9 months, creating forecast volatility and delayed revenue recognition.',
    icon: Lock,
  },
  {
    title: 'Regional Operational Silos',
    cause: 'North America, EMEA, and APAC divisions execute separate commercial motions without unified customer relationship graphs.',
    consequence: 'Inconsistent commercial discounting and duplicate customer acquisition efforts across the same corporate parent.',
    icon: Network,
  },
  {
    title: 'Weak C-Suite Narrative Grounding',
    cause: 'Account executives pitch product feature lists rather than mapping commercial value to SEC 10-K stated corporate initiatives.',
    consequence: 'Proposals fail to capture executive champions and stall before board or CFO expenditure approval.',
    icon: FileText,
  },
  {
    title: 'Unmonetized Co-Sell Alliances',
    cause: 'Hyperscaler, system integrator, and channel partner relationships lack programmatic account mapping and deal scoring.',
    consequence: 'Multi-million dollar co-sell pipeline potential remains dormant while partners promote rival platforms.',
    icon: Handshake,
  },
];

const hierarchyLevels = [
  { level: 'Parent Organization', desc: 'Global corporate entity, executive leadership & strategic initiatives', metric: 'Global Account Plan' },
  { level: 'Operating Subsidiaries', desc: 'Regional legal entities, autonomous P&Ls & localized governance', metric: 'Subsidiary Whitespace' },
  { level: 'Business Units / Divisions', desc: 'Specific functional groups (e.g. Cloud Ops, Logistics, Retail Banking)', metric: 'Unit Penetration' },
  { level: 'Buying Committees', desc: 'Economic buyers, technical evaluators, infosec & champion network', metric: 'Stakeholder Coverage' },
  { level: 'Active Opportunities', desc: 'SOW proposals, proof-of-value scopes & recurring contract commitments', metric: 'Pipeline ACV' },
];

const kpiData = [
  { label: 'Global Account Coverage', value: '84%', note: 'Mapped divisions vs total corporate entities' },
  { label: 'Committee Stakeholder Depth', value: '14.2', note: 'Avg engaged stakeholders per tier-1 account' },
  { label: 'Cross-Division Pipeline', value: '$18.4M', note: 'Expansion opportunities across sister units' },
  { label: 'Partner-Sourced ACV Share', value: '38%', note: 'Co-sell pipeline acceleration via SI partners' },
  { label: 'C-Suite Sign-Off Rate', value: '78%', note: 'Proposals with board-level ROI alignment' },
  { label: 'Sales Cycle Compression', value: '−46 days', note: 'Accelerated through concurrent infosec prep' },
  { label: 'Multi-Year Contract Share', value: '72%', note: '2- and 3-year recurring enterprise commitments' },
  { label: 'Enterprise Net Expansion', value: '134%', note: 'Net Revenue Retention across global cohorts' },
];

const faqs = [
  { q: 'How does ProfitMachines map complex parent-subsidiary corporate trees?', a: 'By analyzing global corporate registry filings, SEC 10-K/Q documentation, international entity databases, and technographic graphs. This data structures parent-subsidiary hierarchies so account directors identify whitespace in sister operating divisions.' },
  { q: 'How does executive research ensure accuracy without hallucinations?', a: 'Briefings cite explicit public corporate sources — audited annual reports, quarterly investor calls, sustainability mandates, and approved press releases. AI models operate in retrieval-augmented frameworks with mandatory source citations before executive review.' },
  { q: 'Can this integrate with our enterprise single sign-on and role-based access?', a: 'Yes. Enterprise configurations support SAML 2.0, Okta, Microsoft Entra ID, and granular role-based access control (RBAC). Data governance models isolate access by territory, business unit, and clearance level.' },
  { q: 'How does the system accelerate channel partner and co-sell motions?', a: 'The engine ingests ecosystem partner catalogues (hyperscalers, advisory firms, system integrators), cross-references target accounts for overlapping presence, and scores co-sell opportunity fit to generate joint account planning dossiers.' },
  { q: 'Does ProfitMachines require access to confidential internal customer data?', a: 'No. The account intelligence and executive engagement systems rely entirely on permitted enterprise CRM integrations and public business data. Customer data is never used for general model training.' },
  { q: 'How is enterprise infosec and compliance evaluated before deployment?', a: 'We provide structured InfoSec evaluation packs including architecture diagrams, encryption protocols (AES-256 at rest, TLS 1.3 in transit), data retention policies, and SOC2 / ISO framework alignment documentation for your security review team.' },
];

export default function IndustriesEnterprise() {
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Enterprise Revenue Engineering | Complex Account Growth | ProfitMachines';
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.2),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Building2 className="w-3.5 h-3.5" /><span>Enterprise Revenue Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 leading-[1.1]">
                Turn Enterprise Complexity Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-violet-400">
                  Coordinated Revenue Growth.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                Enterprise growth spans multiple buying stakeholders, subsidiaries, regions, partners, and lengthy approval processes. ProfitMachines helps organizations structure account intelligence, prioritize opportunities, and coordinate revenue execution across complex operating environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#global" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5">
                  Explore Enterprise Solutions <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
                  Schedule Executive Briefing <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                {[
                  { val: 'Fortune 1000', label: 'Account Architecture' },
                  { val: '15+ Persona', label: 'Committee Alignment' },
                  { val: 'Co-Sell', label: 'Ecosystem Alliances' },
                  { val: 'SOC2 / InfoSec', label: 'Governance Aligned' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Hierarchy Visual */}
            <div className="hidden lg:block">
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Enterprise Corporate Graph Telemetry</span>
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Multi-Division</span>
                </div>
                <div className="space-y-3">
                  {hierarchyLevels.map((lvl, i) => (
                    <div key={lvl.level} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                      <div className="flex-1 bg-slate-800/80 rounded-lg px-4 py-2 border border-slate-700/80">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{lvl.level}</span>
                          <span className="text-[10px] font-mono text-indigo-400">{lvl.metric}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{lvl.desc}</div>
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
              <a key={item.id} href={`#${item.id}`} className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: ENTERPRISE FRICTION ── */}
      <section id="friction" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <AlertCircle className="w-3.5 h-3.5" /> Organizational Drag
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Enterprise Friction Points Delay Decisions and Leave Accounts Under-Penetrated.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              In multi-billion dollar accounts, deals stall not due to product deficits, but because vendor engagement fails to navigate corporate hierarchies, procurement milestones, and executive board alignment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frictionPoints.map(fp => {
              const Icon = fp.icon;
              return (
                <div key={fp.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2">{fp.title}</h3>
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Operational Cause: </span>
                      <span className="text-xs text-slate-600">{fp.cause}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 mt-3">
                    <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-wider">Commercial Impact: </span>
                    <span className="text-xs text-slate-600">{fp.consequence}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ACCOUNT ARCHITECTURE ── */}
      <section id="architecture" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/60 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Corporate Graph Model
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Enterprise Account Architecture</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Deconstructing large organizations into five coordinated operational tiers exposes whitespace opportunities across corporate branches before competitors engage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hierarchyLevels.map((hl, i) => (
              <div key={hl.level} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">0{i + 1}</div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">{hl.level}</h3>
                  <p className="text-xs text-slate-500 mb-3 leading-snug">{hl.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono font-bold text-indigo-600">
                  Target: {hl.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3.1: GLOBAL ── */}
      <section id="global" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Globe className="w-3.5 h-3.5" /> Capability 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Global Account Penetration
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Most enterprise accounts are treated as single buyers, leaving dozens of regional subsidiaries and autonomous operating entities completely untouched. This engine analyzes parent-subsidiary trees, regulatory disclosures, and technographic footprints to build cross-division expansion playbooks.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Parent-Subsidiary Tree Dissection', desc: 'Synthesizes SEC 10-K disclosures, global entity registers, and international corporate filings to map all operating entities.' },
                  { title: 'Buying Circle & Influence Mapping', desc: 'Identifies mutual introduction pathways, board committee members, and functional business unit leaders across geographies.' },
                  { title: 'Cross-Division Monetization Playbooks', desc: 'Packages validated proof-points from one division to accelerate procurement approval in sister business units.' },
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
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Penetration Metrics</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Subsidiary Coverage Ratio', def: 'Penetrated Operating Units ÷ Total Global Subsidiaries' },
                    { kpi: 'Average Contract Value Expansion', def: 'Net expansion across additional divisions within 12 months' },
                    { kpi: 'Internal Referral Velocity', def: 'Cycle time reduction using internal sister-unit case studies' },
                    { kpi: 'Multi-Geography Compliance Alignment', def: 'Regional entity conformance across NA, EMEA & APAC standards' },
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
                <div className="text-xs font-mono font-bold text-indigo-800 uppercase tracking-wider mb-2">Account Executive Ownership</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Strategic relationship ownership remains firmly with your Global Account Directors. The platform provides entity intelligence and whitespace maps; human leaders control territory allocation and direct relationship pacing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.2: PARTNERSHIPS ── */}
      <section id="partnerships" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Handshake className="w-3.5 h-3.5" /> Capability 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Strategic Partnership Opportunity Finder
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Enterprise deals accelerate significantly when supported by trusted advisors, global system integrators, and cloud marketplace co-sell programs. This capability scans partner ecosystems to detect mutual account presence and surface high-yield co-selling alliances.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Ecosystem Account Overlap Mapping', desc: 'Cross-references target enterprise lists against partner client rosters to uncover pre-existing trusted advisor relationships.' },
                  { title: 'Cloud Marketplace Co-Sell Scoring', desc: 'Identifies accounts with active hyperscaler enterprise discount commitments (EDP / MACC) to facilitate frictionless marketplace procurement.' },
                  { title: 'Automated Joint Value Dossiers', desc: 'Generates co-branded business impact briefs demonstrating how partner services combined with your software solve executive priorities.' },
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
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Partnership KPIs</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Partner-Sourced Pipeline Volume', def: 'Total qualified enterprise pipeline sourced by ecosystem alliances' },
                    { kpi: 'Co-Sell Close Rate Multiplier', def: 'Win rate comparison: partner-backed vs solo direct sales' },
                    { kpi: 'Marketplace Drawdown Speed', def: 'Procurement cycle velocity through pre-approved cloud commits' },
                    { kpi: 'Ecosystem Alliance Health Score', def: 'Activity index measuring bidirectional deal referrals quarterly' },
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
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">Partner Trust & Confidentiality</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Account sharing operates under strict non-disclosure parameters and double-blind data matching protocols, ensuring proprietary customer data is never exposed without mutual consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.3: EXECUTIVE ── */}
      <section id="executive" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Users className="w-3.5 h-3.5" /> Capability 03
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Executive Engagement Automation
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                C-suite executives discard generic sales decks. To capture board-level attention, proposals must connect operational capabilities directly to strategic objectives disclosed in shareholder letters, 10-K regulatory filings, and earnings call transcripts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: '10-K Strategic Goal Extraction', desc: 'Parses SEC filings to extract CEO-level mandates (e.g. margin targets, cloud migrations, AI adoption programs).' },
                  { title: 'C-Suite Value Mapping', desc: 'Translates software capability metrics into CFO-ready financial models (EBITDA lift, working capital release, risk mitigation).' },
                  { title: 'Executive Briefing Preparation', desc: 'Prepares board-ready presentation dossiers tailored to specific CXO committee personas prior to executive reviews.' },
                  { title: 'Board Approval Defense Playbooks', desc: 'Armors internal enterprise champions with objection-handling documentation formatted for capital expenditure committees.' },
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
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Executive Engagement Outcomes</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'C-Level Champion Conversion Rate', def: 'Proposals securing direct VP/CFO sponsorship before procurement' },
                    { kpi: 'Final Approval Stage Stall Reduction', def: 'Deals advancing through CapEx committee review without delay' },
                    { kpi: 'Multi-Year Recurring Commitment Share', def: 'Proportion of contracts executed as 3-year enterprise agreements' },
                    { kpi: 'Executive Sponsor Attendance Rate', def: 'Participation of designated C-level stakeholders in milestone reviews' },
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
                <div className="text-xs font-mono font-bold text-violet-800 uppercase tracking-wider mb-2">Grounding & Source Verification</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Every executive briefing dossier includes exact document citations and footnotes linking to verified public financial statements. No hallucinated figures or unsupported ROI projections are generated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: INTELLIGENCE COCKPIT ── */}
      <section id="dashboard" className="py-20 sm:py-24 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> Strategic Account Cockpit
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">Enterprise Telemetry Model</h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">Sample metrics demonstrating cross-subsidiary expansion, stakeholder committee coverage, and co-sell acceleration. All figures are illustrative.</p>
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
            <span className="text-xs text-slate-400 italic">Illustrative Data — Not Actual Results. Real enterprise contract velocities depend on procurement governance complexity, existing competitor lock-in, and IT infrastructure readiness.</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: GOVERNANCE ── */}
      <section id="governance" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Shield className="w-3.5 h-3.5" /> Security & Integration Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Enterprise Governance & Security Controls</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Engineered to integrate seamlessly with Fortune 1000 technology ecosystems, meeting strict data protection, identity management, and compliance mandates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Data Isolation & Ownership',
                points: ['Customer data is never co-mingled or used for training shared foundational models.', 'Dedicated tenant isolation with customer-managed encryption key (CMEK) support.', 'Automated data purging protocols aligned to corporate retention policies.'],
                icon: Lock,
              },
              {
                title: 'Identity & Access Management',
                points: ['Native integration with Okta, Microsoft Entra ID, and SAML 2.0 / SCIM.', 'Fine-grained Role-Based Access Control (RBAC) across global territories.', 'Comprehensive audit logging streaming to enterprise SIEM platforms.'],
                icon: Users,
              },
              {
                title: 'Enterprise System Orchestration',
                points: ['Bidirectional connectors for Salesforce, SAP, Microsoft Dynamics 365.', 'Support for enterprise data warehouses including Snowflake and BigQuery.', 'Webhook-driven real-time synchronization with SLA-backed uptime.'],
                icon: Network,
              },
            ].map(col => {
              const Icon = col.icon;
              return (
                <div key={col.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
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

      {/* ── SECTION 6: FAQ ── */}
      <section id="faq" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">Enterprise Revenue Engineering — FAQ</h2>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">Coordinate Your Enterprise Revenue Opportunities.</h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">Uncover subsidiary whitespace, align 15+ stakeholder committees, and arm executive champions with board-level financial proof.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5">
              Request Executive Scoping Session <ArrowRight className="w-4 h-4" />
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
