import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GitBranch,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Layers,
  Search,
  ExternalLink,
  ChevronRight,
  Activity,
  Sparkles,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import OriginStickySubNav from './OriginStickySubNav';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function OriginNodeMapPage() {
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    document.title = 'Complete Node Map: 16 Discovery Nodes | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const subNavItems = [
    { id: 'matrix', label: '16-Node Matrix', badge: 'Interactive' },
    { id: 'sequence', label: 'Engagement Sequence', badge: '4 Phases' },
    { id: 'intake', label: 'Diagnostic Intake' }
  ];

  const nodes = [
    {
      num: '1.1',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Micro-Market Discovery',
      question: 'Which micro-segment carries the margin — and can we hold it?',
      leak: 'TAM hides where contribution margin concentrates; investing in big-looking unprofitable segments.',
      deliverable: 'Profit pool map & defensibility scorecard per unit-economic micro-segment',
      standard: '100% of TAM dissected into unit-economic cells; 1 target segment locked',
      link: '/origin/discovery#micro-market'
    },
    {
      num: '1.2',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Demand Discovery',
      question: 'Where does the demand chain leak — and how do we fix it?',
      leak: 'Deals stall between discovery and proposal; paying to generate demand that cannot be captured.',
      deliverable: 'Demand chain joint audit, bottleneck reconstruction & velocity telemetry',
      standard: 'Every stage conversion measured in week 2; stall rate visible in real time & cut 50%',
      link: '/origin/discovery#demand'
    },
    {
      num: '1.3',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Channel Discovery',
      question: 'How concentrated is our reach — and where is our second engine?',
      leak: 'Over 60% of revenue dependent on a single partner/platform; margins hostage to third-party algorithms.',
      deliverable: 'Concentration risk map, partner incentive model & owned demand blueprint',
      standard: 'Single-channel revenue reduced below 40% in 12 months; owned pipeline tracked live',
      link: '/origin/discovery#channel'
    },
    {
      num: '1.4',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Willingness-to-Pay Discovery',
      question: 'What will buyers actually pay — and where are we underpriced?',
      leak: 'Intuitive discounting substituting for value proof; silent $1M+ annual leakage per $20M revenue.',
      deliverable: 'Conjoint pricing elasticity model, packaging tiers & CRM discount floors',
      standard: 'Discount rate cut 30–50% in 2 quarters; price realization ≥ 92% of list price',
      link: '/origin/discovery#willingness-to-pay'
    },
    {
      num: '1.5',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Customer Propensity Discovery',
      question: 'Who is in-market right now — and are we calling them first?',
      leak: 'Expensive reps working static firmographic lists, calling accounts least likely to buy.',
      deliverable: 'Nightly intent rescoring engine & message-matched play generator',
      standard: '100% of TAM scored nightly; meeting conversion on top decile reaches 8–15%',
      link: '/origin/discovery#propensity'
    },
    {
      num: '1.6',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Usage-to-Revenue Discovery',
      question: 'Which usage behaviors predict paid conversion — and are they wired to triggers?',
      leak: 'Power users extract full value on free or low tiers at zero incremental revenue.',
      deliverable: 'Telemetry-derived milestone map, redesigned packaging & automated upgrade triggers',
      standard: 'Free-to-paid conversion up 30–50%; expansion revenue up 10–25% via automated triggers',
      link: '/origin/discovery#usage-to-revenue'
    },
    {
      num: '1.7',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Competitor Discovery',
      question: 'What exactly are we losing to, deal by deal, feature by feature?',
      leak: 'Win/loss is anecdotal, competitor pricing is rumored, and reps improvise in live calls.',
      deliverable: 'Teardown dossiers, win/loss pattern analysis & CRM-attached battlecards',
      standard: 'Top 5 rivals fully dissected; win rate vs named rivals up 15–25% in 2 quarters',
      link: '/origin/discovery#competitor'
    },
    {
      num: '1.8',
      origin: 'Core Discovery',
      originKey: '01',
      name: 'Competitive Ecosystem Discovery',
      question: 'Who is building the field we fight on — inside or outside their structure?',
      leak: 'Rivals win on structural distribution moats, platform defaults, and ecosystem network effects.',
      deliverable: 'Full ecosystem map, rival structural scoring & embed/partner/build counter-strategy',
      standard: '100% category players mapped; 2–4 attributed strategic partnerships closed in 12 months',
      link: '/origin/discovery#competitive-ecosystem'
    },
    {
      num: '2.1',
      origin: 'Supply Chain',
      originKey: '02',
      name: 'Offer & Revenue Architecture',
      question: 'Is our offer engineered for willingness-to-pay — or does it leak margin?',
      leak: 'High-value enterprise capabilities given away free in standard bundles; 2x delivery for 1x revenue.',
      deliverable: 'Unbundled feature-value matrix, 3-tier packaging & grandfathering governance',
      standard: 'Average selling price lift 20–35%; gross margin locked above 80%',
      link: '/origin/supply-chain#offer-architecture'
    },
    {
      num: '2.2',
      origin: 'Supply Chain',
      originKey: '02',
      name: 'Supply, Capacity & Cost-to-Serve',
      question: 'Which revenue do we scale — and which revenue destroys us?',
      leak: 'Unprofitable accounts consume outsized delivery capacity, starving high-margin clients.',
      deliverable: 'Customer & SKU-level contribution P&L, service entitlement matrix & capacity telemetry',
      standard: '100% of accounts scored by net margin; negative contribution accounts eliminated or repriced',
      link: '/origin/supply-chain#cost-to-serve'
    },
    {
      num: '3.1',
      origin: 'Ecosystem',
      originKey: '03',
      name: 'Alliance & Co-Sell Ecosystem',
      question: 'Which partnerships actually produce revenue — and which are hollow logos?',
      leak: '90%+ of partner agreements produce zero pipeline; BD budgets burned on symbolic press releases.',
      deliverable: 'Alliance productivity audit, co-sell dual-compensation architecture & CRM attribution telemetry',
      standard: '2.5x partner-sourced pipeline lift; +20 pts win rate on co-sold enterprise pursuits',
      link: '/origin/ecosystem#alliance'
    },
    {
      num: '3.2',
      origin: 'Ecosystem',
      originKey: '03',
      name: 'Platform, Marketplace & Adjacency',
      question: "Are we on someone else's land — and where is our second vertical?",
      leak: 'Single marketplace dependency risks sudden algorithm/take-rate shocks; core vertical saturated.',
      deliverable: 'Platform risk audit, multi-ecosystem roadmap & adjacent vertical profit pool ranking',
      standard: 'Single platform dependency capped &lt; 35%; entry and first $1M ARR established in adjacent vertical',
      link: '/origin/ecosystem#platform-adjacency'
    },
    {
      num: '4.1',
      origin: 'Expansion',
      originKey: '04',
      name: 'New Offering Discovery',
      question: 'What do we build next — proven before we commit engineering capital?',
      leak: 'Engineering builds for 9 months before testing willingness-to-pay; 70% of new product launches flop.',
      deliverable: 'Pre-build painted-door campaigns, willingness-to-pay elasticity curve & paid LOI pipeline',
      standard: '≥ 10 paid enterprise LOIs secured before code lock; 85% conversion to paying GA customers',
      link: '/origin/expansion#new-offering'
    },
    {
      num: '4.2',
      origin: 'Expansion',
      originKey: '04',
      name: 'New Market Discovery',
      question: 'Which market ranks by profit pool — not just superficial size?',
      leak: 'Expanding into geos/verticals based on generic GDP, only to discover crushing local CAC.',
      deliverable: 'Net profit pool ranking across candidate markets, incumbent teardown & low-capex outbound tests',
      standard: 'Top-ranked market chosen with &lt; 12 mo payback period; $2M+ pipeline staged before full launch',
      link: '/origin/expansion#new-market'
    },
    {
      num: '4.3',
      origin: 'Expansion',
      originKey: '04',
      name: 'New Channel Discovery',
      question: 'Which channel adds without cannibalizing our primary motion?',
      leak: 'Direct sales reps clash with self-serve or distributors; ASP declines and reps lose trust.',
      deliverable: 'Channel boundary rules of engagement, differentiated feature packaging & conflict arbitration SLA',
      standard: '0% cannibalization of enterprise ASP; addressable coverage expanded 35%',
      link: '/origin/expansion#new-channel'
    },
    {
      num: '4.4',
      origin: 'Expansion',
      originKey: '04',
      name: 'New Product Launch Discovery',
      question: 'Is launch a controlled revenue operation — or a celebratory coin flip?',
      leak: 'Marketing treats launch as PR day; no pre-staged pipeline, reps uncertified, and momentum dies in 30 days.',
      deliverable: 'Day-0 pipeline staging blueprint, rep certification drills & launch velocity command center',
      standard: '3x pipeline coverage pre-staged before GA; &gt; 90% rep quota attainment in fiscal Q1',
      link: '/origin/expansion#new-launch'
    }
  ];

  const filteredNodes = filter === 'all' ? nodes : nodes.filter(n => n.originKey === filter);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <GitBranch className="w-3.5 h-3.5" />
              <span>MASTER FRAMEWORK DIRECTORY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              16 Discovery Nodes. 4 Origins. One Connected Operating System.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Explore the complete diagnostic matrix. Every node links directly to its deep dive section with SPICED breakdown, deliverables, and realization loops.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#matrix"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Inspect All 16 Nodes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sequence"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>View Standard Sequence</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB NAVIGATION */}
      <OriginStickySubNav
        currentPageTitle="Complete Node Map"
        items={subNavItems}
      />

      {/* SECTION 2: INTERACTIVE 16-NODE MATRIX */}
      <section id="matrix" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-2">
                The 16-Node Diagnostic Matrix
              </h2>
              <p className="text-sm text-slate-500">
                Filter by Origin or click any node to jump directly to its SPICED diagnostic and realization protocols.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-500 hover:text-white border border-slate-200'
                }`}
              >
                All 16 Nodes
              </button>
              <button
                onClick={() => setFilter('01')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  filter === '01'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-500 hover:text-white border border-slate-200'
                }`}
              >
                Core Discovery (8)
              </button>
              <button
                onClick={() => setFilter('02')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  filter === '02'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-500 hover:text-white border border-slate-200'
                }`}
              >
                Supply Chain (2)
              </button>
              <button
                onClick={() => setFilter('03')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  filter === '03'
                    ? 'bg-purple-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-500 hover:text-white border border-slate-200'
                }`}
              >
                Ecosystem (2)
              </button>
              <button
                onClick={() => setFilter('04')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  filter === '04'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-500 hover:text-white border border-slate-200'
                }`}
              >
                Expansion (4)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 border-b border-slate-800 text-white font-mono text-xs font-mono uppercase text-slate-500">
                <tr>
                  <th className="py-4 px-6 w-16">#</th>
                  <th className="py-4 px-6 w-32">Category</th>
                  <th className="py-4 px-6 w-60">Node</th>
                  <th className="py-4 px-6 w-72">The Sharp Question</th>
                  <th className="py-4 px-6">Leak Detected</th>
                  <th className="py-4 px-6">Realization Standard</th>
                  <th className="py-4 px-6 text-right w-24">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans text-xs">
                {filteredNodes.map((n) => (
                  <tr key={n.num} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="py-4 px-6 font-mono text-blue-600 font-bold text-xs">{n.num}</td>
                    <td className="py-4 px-6 font-mono text-slate-500">{n.origin}</td>
                    <td className="py-4 px-6 font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      <Link to={n.link} className="hover:underline flex items-center gap-1.5">
                        <span>{n.name}</span>
                      </Link>
                    </td>
                    <td className="py-4 px-6 text-slate-600 italic">
                      "{n.question}"
                    </td>
                    <td className="py-4 px-6 text-slate-500 leading-relaxed">
                      {n.leak}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-mono text-[11px] leading-relaxed">
                      {n.standard}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to={n.link}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-200 text-blue-600 hover:text-white text-[11px] font-mono"
                      >
                        <span>Deep Dive</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: STANDARD ENGAGEMENT SEQUENCE */}
      <section id="sequence" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Standard Sequence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              How Enterprises Traverse the 16-Node Matrix
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We never run discovery randomly. Our engagement sequence follows a strict dependency order: you cannot price until you understand micro-markets, you cannot expand until your unit-cost supply chain is profitable, and you cannot scale channels without de-risking conflict.
            </p>
          </div>

          <div className="relative border-l border-slate-800 pl-6 sm:pl-10 space-y-12 max-w-4xl">
            {/* Phase 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-[11px] font-mono font-bold text-blue-600">
                1
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-wider font-bold">Phase 1: Foundational Discovery — Core Revenue</span>
                  <span className="text-xs font-mono text-slate-500">Weeks 1 – 12</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  Dissecting the Core Engine & Freezing Baselines
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Run all 8 core discovery nodes. Map micro-segment profit pools, quantify demand leakage points, measure buyer willingness-to-pay elasticity, and wire live propensity scoring.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Deliverable Gate: Certified Baseline Dossier & Core Discovery Blueprint signed by leadership.
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-[11px] font-mono font-bold text-emerald-400">
                2
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">Phase 2: Supply Chain & Margin Re-Engineering</span>
                  <span className="text-xs font-mono text-slate-500">Weeks 13 – 18</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  Aligning Offers & Eradicating Negative Margin
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Unbundle feature sprawl, introduce tier-differentiated packaging, audit customer-level cost-to-serve, and reprice or sunset margin-destroying accounts.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Deliverable Gate: 3-Tier Packaging Rollout & Customer Margin Remediation Protocol.
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-purple-400 flex items-center justify-center text-[11px] font-mono font-bold text-purple-400">
                3
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">Phase 3: Ecosystem Leverage & Distribution Moats</span>
                  <span className="text-xs font-mono text-slate-500">Weeks 19 – 24</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  Institutionalizing Co-Sell & De-Risking Platforms
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Prune unproductive alliances, institute field co-sell compensation models, de-risk single marketplace exposure, and validate adjacent market entry.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Deliverable Gate: Co-Sell Attribution System & Multi-Ecosystem Roadmap.
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center text-[11px] font-mono font-bold text-amber-400">
                4
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">Phase 4: Validated Expansion & Precision Launch</span>
                  <span className="text-xs font-mono text-slate-500">Weeks 25 – 34</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  Scaling Into High-Density Whitespace
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Run pre-build validation for candidate offerings, rank expansion markets by net profit pool, establish non-cannibalizing channel boundaries, and stage day-0 launch operations.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Deliverable Gate: Paid LOI Portfolio & Precision Launch Command Center.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section id="intake" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>EXECUTIVE DISCOVERY INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Deploy the 16-Node Diagnostic Across Your Enterprise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Schedule an initial architectural review with our principal revenue architects to identify which of the 16 nodes hold your largest untapped profit pools.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Complete Node Map Diagnostic"
            defaultPriority="Full ORIGIN Diagnostic"
          />
        </div>
      </section>
    </div>
  );
}
