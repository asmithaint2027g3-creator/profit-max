import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Network, Target, Briefcase
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

interface AreaCapability {
  title: string;
  desc: string;
}

interface AreaOutcome {
  metric: string;
  label: string;
  desc: string;
}

interface GlobalArea {
  id: string;
  num: string;
  title: string;
  supportingLabel: string;
  referenceLabel: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  desc: string;
  capabilities: AreaCapability[];
  outcomes: AreaOutcome[];
}

const globalAccelerationAreas: GlobalArea[] = [
  {
    id: 'global-market-access',
    num: '01',
    title: 'Global Market Access',
    supportingLabel: 'Expansion Intelligence',
    referenceLabel: 'Global Market Intelligence',
    path: '/global-acceleration/market-intelligence',
    icon: Globe,
    color: 'blue',
    desc: 'Institutional market validation and intelligence systems that evaluate territory viability, unit economics, regulatory risk, and competitive saturation before capital commitment.',
    capabilities: [
      { title: 'Country Opportunity Analysis', desc: 'Unit-economic validation ranking foreign markets by contribution margin and purchasing power over vanity GDP headlines.' },
      { title: 'Market Opportunity Mapping', desc: 'Systematic heat-mapping of market density, sector growth rates, and structural headroom across cross-border territories.' },
      { title: 'TAM / SAM / SOM Assessment', desc: 'Rigorous territory addressable market sizing with realistic penetration modeling calibrated against regional incumbents.' },
      { title: 'Competitive Intelligence', desc: 'Reverse-engineering regional competitors, pricing power, distribution lock-ins, and defensible counter-positioning.' },
      { title: 'Trade Corridor Intelligence', desc: 'Analysis of bilateral trade agreements, tariffs, customs clearance dynamics, and cross-border commercial flows.' },
      { title: 'Regulatory Intelligence', desc: 'Pre-emptive compliance modeling for data residency, labor codes, cross-border privacy laws, and corporate governance.' },
      { title: 'Market Entry Feasibility', desc: 'Quantitative feasibility indexing assessing capital requirements, payback horizons, operational barriers, and local talent.' },
      { title: 'Geo-Economic Risk Analysis', desc: 'Scenario stress-testing against currency volatility, geopolitical exposure, capital repatriation constraints, and supply shocks.' }
    ],
    outcomes: [
      { metric: '60% Faster', label: 'Faster Market Selection', desc: 'Compression of market validation and prioritization cycles.' },
      { metric: '70% Lower', label: 'Lower Expansion Risk', desc: 'Reduction in exploratory capital misallocation and false starts.' },
      { metric: 'Tier 1–3', label: 'Market Prioritization', desc: 'Objective territory ranking backed by audited unit economics.' },
      { metric: '100% Audit', label: 'Expansion Readiness', desc: 'Pre-entry compliance, tax structuring, and regulatory clearance.' }
    ]
  },
  {
    id: 'global-demand-networks',
    num: '02',
    title: 'Global Demand Networks',
    supportingLabel: 'Demand Ecosystems',
    referenceLabel: 'Global Demand Chain Discovery',
    path: '/global-acceleration/cross-border-strategy',
    icon: Network,
    color: 'indigo',
    desc: 'Algorithmic discovery and qualification of commercial demand corridors, connecting enterprises with verified buyers, channel distributors, and institutional procurement networks.',
    capabilities: [
      { title: 'Distributor Discovery', desc: 'Algorithmic sourcing of top-quartile distributor organizations with verified regional sales reach and active commercial infrastructure.' },
      { title: 'Retail Network Discovery', desc: 'Precision identification of retail chains, boutique outlets, and department stores primed for immediate product placement.' },
      { title: 'Importer & Buyer Discovery', desc: 'Direct access to credentialed cross-border importers, customs clearing houses, and high-volume corporate procurement buyers.' },
      { title: 'Dealer & Reseller Mapping', desc: 'Exhaustive territory mapping of certified value-added resellers (VARs) and localized dealer networks.' },
      { title: 'Strategic Account Discovery', desc: 'Target identification of multinational enterprise accounts with verified buying intent in target regional corridors.' },
      { title: 'Procurement Network Intelligence', desc: 'Reverse-engineering RFP schedules, procurement cycles, and approved vendor requirements across institutional buyers.' },
      { title: 'Industry Demand Ecosystem Mapping', desc: 'Cross-industry relationship mapping identifying ecosystem clusters, tier-1 suppliers, and secondary buyers.' },
      { title: 'Revenue Corridor Discovery', desc: 'Longitudinal modeling of active commercial trade corridors with accelerating import velocity and unmet demand.' }
    ],
    outcomes: [
      { metric: '250+ Accounts', label: 'Global Buyer Discovery', desc: 'Direct discovery of vetted international enterprise buyer accounts per territory.' },
      { metric: '3.5x Faster', label: 'Channel Expansion', desc: 'Acceleration in distribution network onboarding and regional market coverage.' },
      { metric: '90-Day Pre-Test', label: 'Demand Validation', desc: 'Empirical customer intent validation prior to field deployment.' },
      { metric: '$15M–$45M', label: 'Revenue Opportunity Discovery', desc: 'Identified qualified foreign pipeline headroom per target corridor.' }
    ]
  },
  {
    id: 'export-growth-engine',
    num: '03',
    title: 'Export Growth Engine',
    supportingLabel: 'Export Growth Engine',
    referenceLabel: 'Export Acceleration',
    path: '/global-acceleration/cross-border-strategy',
    icon: TrendingUp,
    color: 'emerald',
    desc: 'Institutional export acceleration architecture engineered to assess readiness, acquire foreign buyers, and scale cross-border sales velocity.',
    capabilities: [
      { title: 'Export Readiness Assessment', desc: 'Systematic operational, compliance, and product localization diagnostic scoring enterprise export viability.' },
      { title: 'Export GTM Strategy', desc: 'End-to-end go-to-market architecture tailored to customs regimes, currency exposure, and regional buyer habits.' },
      { title: 'International Buyer Acquisition', desc: 'Multi-channel buyer engagement frameworks securing direct commercial meetings with verified cross-border decision-makers.' },
      { title: 'Export Lead Generation', desc: 'Continuous pipeline generation feeding commercial reps with pre-qualified international purchasing inquiries.' },
      { title: 'International Channel Development', desc: 'Structuring, contracting, and incentivizing foreign distribution channels for sustainable volume throughput.' },
      { title: 'Trade Promotion Programs', desc: 'Strategic execution of bilateral trade missions, bilateral subsidies, and state-sponsored export incentives.' },
      { title: 'Trade Event Intelligence', desc: 'Event intelligence mapping international congresses, reverse expos, and buyer delegations for targeted executive interaction.' },
      { title: 'Export Revenue Programs', desc: 'Structured commercial campaigns orchestrating pipeline conversion across cross-border accounts.' }
    ],
    outcomes: [
      { metric: '+40%–65%', label: 'Export Revenue Growth', desc: 'Year-over-year increase in foreign revenue contribution.' },
      { metric: '2.8x Faster', label: 'International Customer Acquisition', desc: 'Acceleration in initial cross-border deal closing cycles.' },
      { metric: '90 Days', label: 'New Market Entry', desc: 'Repeatable operational blueprint for launching new national territories.' },
      { metric: '>3.2x', label: 'Cross-Border Sales Development', desc: 'Pipeline coverage maintained across foreign operating corridors.' }
    ]
  },
  {
    id: 'strategic-partner-ecosystems',
    num: '04',
    title: 'Strategic Partner Ecosystems',
    supportingLabel: 'Growth Alliances',
    referenceLabel: 'Global Partner Ecosystems',
    path: '/global-acceleration/partner-ecosystems',
    icon: Users,
    color: 'sky',
    desc: 'Enterprise ecosystem architecture establishing co-sell alliances, master distribution networks, and trade partnerships that accelerate market penetration without linear overhead.',
    capabilities: [
      { title: 'Channel Partner Networks', desc: 'Systematic tiering and governance of multi-tier certified solution providers, distributors, and referral partners.' },
      { title: 'Distributor Partnerships', desc: 'Master commercial structuring aligning minimum viable revenue quotas, territory exclusivity, and margin schedules.' },
      { title: 'Strategic Alliances', desc: 'High-impact co-innovation and co-marketing partnerships with complementary industry market leaders.' },
      { title: 'Joint Venture Opportunities', desc: 'Structured identification, commercial modeling, and operational alignment for local equity partnerships and JVs.' },
      { title: 'Technology Partnerships', desc: 'API and product integrations embedding your solution into dominant regional enterprise tech stacks.' },
      { title: 'Industry Associations', desc: 'Executive engagement and institutional sponsorship across high-influence regional industry bodies.' },
      { title: 'Government Trade Programs', desc: 'Leveraging bilateral commerce ministries, export promotion councils, and state development grants.' },
      { title: 'Ecosystem Development', desc: 'Fostering community, developer, and reseller networks that generate compounding inbound enterprise referral volume.' }
    ],
    outcomes: [
      { metric: 'Instant Reach', label: 'Market Access', desc: 'Direct entry into pre-existing, trusted enterprise client relationships.' },
      { metric: '45%–55%', label: 'Partner-Led Growth', desc: 'Share of international revenue generated through indirect partner co-sell.' },
      { metric: '3x Velocity', label: 'Expansion Velocity', desc: 'Faster local account penetration compared to greenfield direct hiring.' },
      { metric: 'Certified Hubs', label: 'Regional Presence', desc: 'Established local credibility and certified service delivery across all key hubs.' }
    ]
  },
  {
    id: 'global-supply-networks',
    num: '05',
    title: 'Global Supply Networks',
    supportingLabel: 'Supply Networks',
    referenceLabel: 'Global Supply Chain Integration',
    path: '/global-acceleration/market-intelligence',
    icon: Layers,
    color: 'amber',
    desc: 'Intelligence and mapping frameworks to evaluate cross-border supply chains, manufacturing partners, vendor resilience, and fulfillment routes for maximum margin.',
    capabilities: [
      { title: 'Supplier Discovery', desc: 'Algorithmic sourcing and qualification of regional component manufacturers, raw material producers, and OEM vendors.' },
      { title: 'Procurement Ecosystem Mapping', desc: 'Complete visibility into secondary and tertiary sub-tier supplier dependencies and capacity limits.' },
      { title: 'Manufacturing Partner Discovery', desc: 'Identifying ISO-certified contract manufacturers with audited capacity, quality standards, and localized labor advantages.' },
      { title: 'Logistics Network Design', desc: 'Multi-modal freight optimization balancing maritime, air, and overland corridors for cost vs. transit speed.' },
      { title: 'Vendor Intelligence', desc: 'Financial health checks, ESG compliance audits, and commercial reliability scoring across candidate suppliers.' },
      { title: 'Trade Route Optimization', desc: 'Tracking and routing around customs bottlenecks, maritime chokepoints, and tariff escalation zones.' },
      { title: 'Supply Chain Risk Assessment', desc: 'Quantitative vulnerability indexing for single-source dependencies, geopolitical disruption, and port delays.' },
      { title: 'Cross-Border Operations', desc: 'Streamlining customs declarations, bonded warehousing, and localized inventory fulfillment staging.' }
    ],
    outcomes: [
      { metric: '99.4%', label: 'Supply Resilience', desc: 'On-time delivery benchmark across multi-country procurement routes.' },
      { metric: '3x Surge', label: 'Operational Scale', desc: 'Unlocking manufacturing surge capacity without fixed capital outlay.' },
      { metric: '14%–22%', label: 'Cost Efficiency', desc: 'Reduction in landed cost of goods sold (COGS) through route optimization.' },
      { metric: '4+ Corridors', label: 'Global Sourcing Opportunities', desc: 'Diversified supplier base across resilient geographic jurisdictions.' }
    ]
  },
  {
    id: 'global-revenue-engines',
    num: '06',
    title: 'Global Revenue Engines',
    supportingLabel: 'Revenue Infrastructure',
    referenceLabel: 'Global Revenue Operations',
    path: '/global-acceleration/global-revops',
    icon: BarChart3,
    color: 'cyan',
    desc: 'Institutional revenue infrastructure orchestrating multi-region pipeline velocity, currency-aware CRM orchestration, and cross-border commercial execution.',
    capabilities: [
      { title: 'Multi-Country GTM Design', desc: 'Unified operating models defining regional quota ratios, compensation grids, and escalation pathways.' },
      { title: 'Territory Planning', desc: 'Dynamic account routing based on market capacity, buyer propensity scores, and localized language coverage.' },
      { title: 'Regional Revenue Hubs', desc: 'Shared services blueprint for localized customer onboarding, technical pre-sales, and tier-1 support.' },
      { title: 'Multi-Language SDR Operations', desc: 'Deploying native-fluency outbound prospecting frameworks operating across 12+ timezones simultaneously.' },
      { title: 'International Pipeline Management', desc: 'Unified deal inspection frameworks eliminating cross-border reporting latency and currency distortions.' },
      { title: 'Revenue Intelligence', desc: 'Algorithmic signal detection monitoring win/loss drivers, rep productivity variance, and regional sales velocity.' },
      { title: 'Customer Success Operations', desc: 'Proactive health monitoring and localized renewal playbooks preserving multi-currency Net Revenue Retention.' },
      { title: 'Revenue Performance Optimization', desc: 'Continuous testing of messaging, pricing concessions, and contracting cycles across regional buyer cohorts.' }
    ],
    outcomes: [
      { metric: '3.8x Lift', label: 'Pipeline Growth', desc: 'Expansion in qualified multi-region sales pipeline coverage.' },
      { metric: '96%', label: 'Revenue Predictability', desc: 'Quarterly forecast accuracy across fragmented international entities.' },
      { metric: '45 Days', label: 'International Scale', desc: 'Repeatable regional hub deployment model to reach operational readiness.' },
      { metric: '28% Savings', label: 'Operational Excellence', desc: 'Reduction in cross-border customer acquisition and onboarding overhead.' }
    ]
  },
  {
    id: 'global-capital-finance',
    num: '07',
    title: 'Global Capital & Finance',
    supportingLabel: 'Financial Infrastructure',
    referenceLabel: 'Global Financial Ecosystem',
    path: '/global-acceleration/expansion-office',
    icon: DollarSign,
    color: 'violet',
    desc: 'Financial ecosystem discovery, capital readiness diagnostics, trade finance facilitation, and treasury advisory to fund cross-border expansion sustainably.',
    capabilities: [
      { title: 'Trade Finance Solutions', desc: 'Identifying and connecting letters of credit (LCs), invoice factoring, and export receivables financing options.' },
      { title: 'Export Financing', desc: 'Navigating state export credit lines, sovereign buyer credit guarantees, and pre-shipment working capital facilities.' },
      { title: 'International Banking Networks', desc: 'Mapping global correspondent banking relationships for efficient treasury operations and FX settlements.' },
      { title: 'Cross-Border Payments', desc: 'Architecture for multi-currency merchant processing, localized payment gateways, and hedging transaction fees.' },
      { title: 'Export Credit Agencies', desc: 'Engaging institutional ECAs (such as EXIM and Euler Hermes) to mitigate cross-border buyer default risks.' },
      { title: 'Development Finance Institutions', desc: 'Exploring multilateral development finance (IFC, EBRD, ADB) for emerging market infrastructure and scale.' },
      { title: 'Investor & Capital Access', desc: 'Readiness advisory connecting cross-border ventures with international growth equity and debt syndicates.' },
      { title: 'Global Treasury Advisory', desc: 'Optimizing transfer pricing compliance, multi-jurisdiction tax efficiency, and dividend repatriation paths.' }
    ],
    outcomes: [
      { metric: 'Non-Dilutive', label: 'Growth Capital Access', desc: 'Structured readiness for non-dilutive trade lines and expansion facilities.' },
      { metric: '40 Days Less', label: 'Working Capital Planning', desc: 'Compression in cash-to-cash cross-border operating cycles.' },
      { metric: 'Audit-Ready', label: 'Expansion Financing Readiness', desc: 'Comprehensive financial dossier formatted for international lenders.' },
      { metric: '40+ Corridors', label: 'Financial Connectivity', desc: 'Seamless multi-currency settlement across national banking networks.' }
    ]
  },
  {
    id: 'ai-powered-expansion',
    num: '08',
    title: 'AI-Powered Expansion',
    supportingLabel: 'Autonomous Expansion Systems',
    referenceLabel: 'AI-Powered Global Expansion',
    path: '/global-acceleration/ai-global-scaling',
    icon: Cpu,
    color: 'emerald',
    desc: 'Autonomous AI agent architecture delivering 24/7 market telemetry, localized buyer prospecting, automated distributor matching, and centralized expansion command.',
    capabilities: [
      { title: 'AI Market Intelligence', desc: 'Continuous agentic scanning of foreign registry filings, tender boards, and trade journals for emerging market opportunities.' },
      { title: 'AI Buyer Discovery', desc: 'Autonomous identification and enrichment of cross-border executive decision-makers exhibiting live purchasing signals.' },
      { title: 'AI Distributor Discovery', desc: 'Automated profiling and scoring of regional distributor capacity, brand portfolios, and operational readiness.' },
      { title: 'AI Partner Matching', desc: 'Algorithmic compatibility scoring matching enterprise products with regional VAR and system integrator portfolios.' },
      { title: 'AI Localization Engines', desc: 'Context-aware adaptation of sales collateral, contracts, and regulatory filings into 15+ native business dialects.' },
      { title: 'AI Revenue Agents', desc: '24/7 autonomous SDR and lead qualification agents conducting outbound correspondence across global timezones.' },
      { title: 'Autonomous Expansion Workflows', desc: 'Self-orchestrating task workflows connecting research, CRM enrichment, compliance checks, and outreach.' },
      { title: 'Global Intelligence Command Center', desc: 'Unified executive telemetry dashboard aggregating cross-border pipeline, risks, and velocity metrics.' }
    ],
    outcomes: [
      { metric: '80% Faster', label: 'Speed, Scale & Automation', desc: 'Reduction in research hours per country evaluation.' },
      { metric: '24/7 Mesh', label: '24/7 Global Expansion', desc: 'Continuous autonomous prospecting across all timezones without human fatigue.' },
      { metric: 'Zero Delay', label: 'AI Revenue Operations', desc: 'Instant response times to inbound international buyer requests.' },
      { metric: 'Self-Learning', label: 'Autonomous Growth', desc: 'Playbook continuously refining tactics based on regional win/loss telemetry.' }
    ]
  }
];

const regions = [
  { name: 'North America & UK', status: 'Core Tier 1', coverage: 'Direct + Hyperscaler Co-Sell', lat: '38%', lon: '24%', active: true },
  { name: 'DACH & Western Europe', status: 'Sovereign GDPR', coverage: 'Local Sovereign Swarms', lat: '32%', lon: '49%', active: true },
  { name: 'Nordics & Benelux', status: 'High Purchasing Power', coverage: 'Digital-First + Partner', lat: '25%', lon: '52%', active: true },
  { name: 'Asia-Pacific & Japan', status: 'High-Touch / Alliance', coverage: 'Tier-1 Distributor Fabric', lat: '45%', lon: '82%', active: true },
  { name: 'Middle East & GCC', status: 'Accelerating TAM', coverage: 'Enterprise Co-Sell Hub', lat: '42%', lon: '62%', active: true },
  { name: 'Latin America', status: 'Micro-Segment Margin', coverage: 'Local Currency Hedged', lat: '65%', lon: '33%', active: true },
];

export default function GlobalAccelerationHub() {
  const [activeRegion, setActiveRegion] = useState(0);
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  useEffect(() => {
    document.title = 'Global Business Acceleration | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const selectedArea = globalAccelerationAreas[activeAreaIndex];
  const AreaIcon = selectedArea.icon;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO SECTION: GLOBAL COMMAND CENTER ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                SCALE REVENUE ACROSS BORDERS WITH AUTONOMOUS AI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
                Global Business Acceleration:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Engineer International Revenue at the Speed of Market Opportunity
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Most enterprises expand globally through trial and error — entering markets without validated demand, launching without localization, and scaling without compliance. We replace this approach with autonomous AI systems that identify high-propensity international opportunities, orchestrate cross-border revenue operations, and deploy multi-language AI agents that execute 24/7 across every timezone.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#diagnostic" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                  Run a Global Expansion Diagnostic
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#capabilities" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                  Explore Acceleration Areas
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </div>

            {/* Visual: Interactive World Command Center */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Global Operations Cockpit</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    40+ Sovereign Territories
                  </span>
                </div>

                {/* Simulated World Grid & Regional Telemetry */}
                <div className="space-y-3 font-mono text-xs mb-4">
                  {regions.map((reg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveRegion(idx)}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        activeRegion === idx
                          ? 'bg-blue-950/60 border-blue-500/60 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${activeRegion === idx ? 'bg-blue-400 animate-ping' : 'bg-slate-600'}`} />
                        <div>
                          <div className="font-bold text-slate-200 text-xs">{reg.name}</div>
                          <div className="text-[10px] text-slate-500">{reg.coverage}</div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-blue-300 font-mono">
                        {reg.status}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Live Cross-Border Telemetry</span>
                  <span className="text-emerald-400 font-bold">24/7 Multi-Region Mesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE GLOBAL CHALLENGE (SPLIT COMPARISON & BENCHMARKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">The Strategic Defect</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Why Most Global Expansion Initiatives Fail
            </h2>
          </div>

          {/* Executive Summary Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
              Executive Briefing
            </div>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Most enterprise cross-border expansions stall due to unvalidated demand signals, non-localized buyer journeys, and fragmented partner channels. ProfitMachines treats global acceleration as an engineered, deterministic system — validating unit-economic feasibility before capital commitment, automating native localization, and deploying autonomous AI sales agents across 40+ countries.
            </p>
          </div>

          {/* Executive Benchmark Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">Legacy Expansion Failure</div>
              <div className="text-3xl font-extrabold text-rose-600 font-mono mb-1">73%</div>
              <div className="text-xs text-slate-600">Cross-border launches miss year-1 revenue targets due to unvalidated TAM.</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">Time-to-First-Deal</div>
              <div className="text-3xl font-extrabold text-amber-600 font-mono mb-1">14.2 Mo</div>
              <div className="text-xs text-slate-600">Average traditional timeline to secure initial customer traction abroad.</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">Localized CAC Inflation</div>
              <div className="text-3xl font-extrabold text-rose-600 font-mono mb-1">3.4X</div>
              <div className="text-xs text-slate-600">Higher customer acquisition cost without cultural and regulatory adaptation.</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">Partner Revenue Slippage</div>
              <div className="text-3xl font-extrabold text-slate-900 font-mono mb-1">68%</div>
              <div className="text-xs text-slate-600">Of foreign distribution partnerships yield zero active commercial pipeline.</div>
            </div>
          </div>

          {/* Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-bold text-rose-950 font-heading">Traditional Ad-Hoc Expansion</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Entering foreign markets on generic macro GDP data without territory unit economics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Superficial translation that fails local buyer nuances, procurement standards, and compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Unvetted distributor relationships that lock territory exclusivity with zero revenue quotas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Linear hiring of expensive local sales teams before establishing product-market resonance</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-950 font-heading">The ProfitMachines Architecture</h3>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Empirical TAM/SAM/SOM and contribution margin audits before deploying local capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Deep cultural localization calibrated against local purchasing power and workflow expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Scored partner alliance network with verified pipeline attribution and dynamic co-sell routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Autonomous AI agents prospecting in 15+ native languages across 20+ global timezones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE EIGHT GLOBAL BUSINESS ACCELERATION AREAS (TWO-PANEL INTERACTIVE) ── */}
      <section id="capabilities" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Global Business Acceleration Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Eight Global Business Acceleration Areas
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore the eight foundational expansion domains. Select an area on the left to inspect its eight capability modules and verified business-impact outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT PANEL: 8 ACCELERATION AREAS NAVIGATION */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Acceleration Areas (01–08)
              </div>
              {globalAccelerationAreas.map((area, idx) => {
                const Icon = area.icon;
                const isActive = activeAreaIndex === idx;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveAreaIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-slate-900 text-white border-blue-500 shadow-lg shadow-slate-900/10'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200 group-hover:text-blue-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-blue-300' : 'text-slate-500'}`}>
                            {area.num}
                          </span>
                          <span className={`text-[11px] font-mono uppercase tracking-wider truncate ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                            {area.supportingLabel}
                          </span>
                        </div>
                        <h4 className={`text-sm font-bold truncate mt-0.5 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                          {area.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-blue-400 translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT PANEL: DYNAMIC CAPABILITY MODULES & OUTCOMES */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <AreaIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          Area {selectedArea.num}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                          {selectedArea.supportingLabel}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                        {selectedArea.title}
                      </h3>
                    </div>
                  </div>
                  <Link
                    to={selectedArea.path}
                    className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold font-mono transition-colors border border-blue-200"
                  >
                    <span>Inspect Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
                  {selectedArea.desc}
                </p>

                {/* 8 Capability Modules Grid */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Eight Core Capabilities
                    </h4>
                    <span className="text-xs font-mono text-slate-500">8 of 8 Modules Active</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedArea.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 transition-colors">
                        <div className="flex items-start gap-2.5 mb-1.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <h5 className="text-sm font-bold text-slate-900 font-heading leading-tight">
                            {cap.title}
                          </h5>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-6">
                          {cap.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Business Outcomes Section */}
                <div className="pt-8 border-t border-slate-100">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">
                    Target Business Outcomes & Benchmarks
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {selectedArea.outcomes.map((out, oIdx) => (
                      <div key={oIdx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div className="text-lg sm:text-xl font-extrabold text-blue-600 font-mono mb-1">
                          {out.metric}
                        </div>
                        <div className="text-xs font-bold text-slate-900 mb-1 leading-tight">
                          {out.label}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          {out.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                    <span>Ready to deploy {selectedArea.title} in your target expansion corridor?</span>
                    <a
                      href="#diagnostic"
                      className="text-blue-600 font-bold font-mono inline-flex items-center hover:underline"
                    >
                      Run Expansion Diagnostic <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CONNECTED EXPANSION JOURNEY (8 AREAS IN SEQUENCE) ── */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">Integrated Execution Fabric</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
              The Connected Global Expansion Journey
            </h2>
            <p className="text-slate-400 text-base mt-3">
              How the eight Global Business Acceleration areas interconnect into a continuous, compounding international revenue engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalAccelerationAreas.map((area) => (
              <div key={area.id} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-blue-400 font-bold">Stage {area.num}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      {area.supportingLabel}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-tight">
                    {area.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {area.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400">
                  {area.outcomes[0].label}: {area.outcomes[0].metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 90-DAY ENGAGEMENT TIMELINE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">Deterministic Pacing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              From Diagnostic to First Revenue in 90 Days
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              A sequenced deployment protocol that eliminates multi-year delays and accelerates time-to-value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-2">Days 1–14</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Diagnostic & Market Validation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Country opportunity scoring, unit-economic TAM/SAM/SOM dissection, regulatory pre-flight audit, and baseline readiness lock.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider mb-2">Days 15–45</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy & Partner Network Activation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Market-specific entry model finalization, cultural localization of collateral, purchasing-power pricing, and high-yield partner recruitment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider mb-2">Days 46–90</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Agent Deployment & First Revenue</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Multi-language AI SDR swarm activation, 24/7 timezone coverage, real-time telemetry dashboard handover, and contracted deal close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA & INTAKE FORM ── */}
      <section id="diagnostic" className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-6">
                Expansion Readiness Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
                Ready to Engineer Predictable Global Revenue?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Connect with our Global Expansion Partners. We will benchmark your target territories, audit regulatory requirements, and calculate unit-economic ROI probability across 40+ countries.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Confidential territory opportunity & TAM/SAM/SOM evaluation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Sovereignty, data residency, and compliance pre-flight roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Autonomous multi-language AI SDR trial in your priority geography</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">500+</div>
                  <div className="text-xs text-slate-400">B2B Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">5X</div>
                  <div className="text-xs text-slate-400">Avg Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">24/7</div>
                  <div className="text-xs text-slate-400">AI Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">40+</div>
                  <div className="text-xs text-slate-400">Countries</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Run Global Expansion Diagnostic</h3>
                <p className="text-xs text-slate-400 mb-6">Confidential intake. Direct routing to Global Practice Leadership.</p>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
