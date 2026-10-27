import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Search,
  Box,
  TrendingUp,
  Cpu,
  BarChart3,
  Network,
  Target,
  Zap,
  Activity,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Lock,
  GitBranch,
  Gauge
} from 'lucide-react';
import OriginStickySubNav from './OriginStickySubNav';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function OriginHub() {
  useEffect(() => {
    document.title = 'ORIGIN: The Complete Revenue Discovery Framework | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const subNavItems = [
    { id: 'thesis', label: 'Framework Thesis' },
    { id: 'origins', label: 'The 4 Origins', badge: '16 Nodes' },
    { id: 'realization', label: 'Realization Layer', badge: '6 Stages' },
    { id: 'node-map', label: 'Complete Node Map' },
    { id: 'engagement', label: 'Engagement Path' },
    { id: 'intake', label: 'Diagnostic Intake' }
  ];

  const originsCards = [
    {
      num: '01',
      title: 'Discovery',
      path: '/origin/discovery',
      nodeCount: '8 nodes',
      description: "Where the money is, what buyers will pay, who is ready to buy, and who you're fighting for it. Eight nodes covering micro-markets, demand chains, channels, pricing, propensity, usage-to-revenue, competitors, and competitive ecosystems.",
      nodes: [
        'Micro-Market Discovery',
        'Demand Discovery',
        'Channel Discovery',
        'Willingness-to-Pay Discovery',
        'Customer Propensity Discovery',
        'Usage-to-Revenue Discovery',
        'Competitor Discovery',
        'Competitive Ecosystem Discovery'
      ]
    },
    {
      num: '02',
      title: 'Supply Chain Discovery',
      path: '/origin/supply-chain',
      nodeCount: '2 nodes',
      description: 'What you sell, at what margin, and what it truly costs to serve. Two nodes covering offer/revenue architecture and supply/capacity/cost-to-serve.',
      nodes: [
        'Offer & Revenue Architecture',
        'Supply, Capacity & Cost-to-Serve'
      ]
    },
    {
      num: '03',
      title: 'Business Ecosystem Discovery',
      path: '/origin/ecosystem',
      nodeCount: '2 nodes',
      description: "Revenue you don't build alone: alliances, platforms, and adjacent ground. Two nodes covering alliance/co-sell ecosystems and platform/marketplace/adjacency.",
      nodes: [
        'Alliance & Co-Sell Ecosystem',
        'Platform, Marketplace & Adjacency'
      ]
    },
    {
      num: '04',
      title: 'Expansion Discovery',
      path: '/origin/expansion',
      nodeCount: '4 nodes',
      description: 'New offerings, new markets, new channels, new launches — proven before you commit. Four nodes covering new offerings, new markets, new channels, and new product launches.',
      nodes: [
        'New Offering Discovery',
        'New Market Discovery',
        'New Channel Discovery',
        'New Product Launch Discovery'
      ]
    }
  ];

  const realizationStages = [
    {
      num: '01',
      title: 'Baseline Capture',
      desc: 'Every node starts by measuring the current number. No baseline, no engagement.'
    },
    {
      num: '02',
      title: 'Locked Targets',
      desc: 'Targets written into the SOW — "recover 8 points of margin in 2 quarters," never "improve."'
    },
    {
      num: '03',
      title: 'Decision Authority',
      desc: 'Each node ends with a named decision: enter/exit, price/hold, build/kill — made on the evidence, with the evidence attached.'
    },
    {
      num: '04',
      title: 'Execution Engine',
      desc: 'The Automation Track (agent fleets, propensity rescoring, telemetry) runs the playbook 24/7 after strategists leave.'
    },
    {
      num: '05',
      title: 'Proof Cadence',
      desc: 'Monthly realization reviews against locked targets. If the needle isn\'t moving, the engagement is re-scoped — not renewed.'
    },
    {
      num: '06',
      title: 'Exit State',
      desc: 'You keep the dashboards, the playbooks, the models — and the numbers they produce.'
    }
  ];

  const nodeTable = [
    { num: '1.1', origin: 'Core Discovery', name: 'Micro-Market Discovery', question: 'Which micro-segment carries the margin — and can we hold it?', anchor: '/origin/discovery#micro-market' },
    { num: '1.2', origin: 'Core Discovery', name: 'Demand Discovery', question: 'Where does the demand chain leak?', anchor: '/origin/discovery#demand' },
    { num: '1.3', origin: 'Core Discovery', name: 'Channel Discovery', question: 'Where is our second revenue engine?', anchor: '/origin/discovery#channel' },
    { num: '1.4', origin: 'Core Discovery', name: 'Willingness-to-Pay Discovery', question: 'What will buyers actually pay?', anchor: '/origin/discovery#willingness-to-pay' },
    { num: '1.5', origin: 'Core Discovery', name: 'Customer Propensity Discovery', question: 'Who is in-market right now?', anchor: '/origin/discovery#propensity' },
    { num: '1.6', origin: 'Core Discovery', name: 'Usage-to-Revenue Discovery', question: 'Which behaviors predict paid conversion?', anchor: '/origin/discovery#usage-to-revenue' },
    { num: '1.7', origin: 'Core Discovery', name: 'Competitor Discovery', question: 'What exactly are we losing to, deal by deal?', anchor: '/origin/discovery#competitor' },
    { num: '1.8', origin: 'Core Discovery', name: 'Competitive Ecosystem Discovery', question: 'Who is building the field we fight on?', anchor: '/origin/discovery#competitive-ecosystem' },
    { num: '2.1', origin: 'Supply Chain', name: 'Offer & Revenue Architecture', question: 'Is our offer engineered for willingness-to-pay?', anchor: '/origin/supply-chain#offer-architecture' },
    { num: '2.2', origin: 'Supply Chain', name: 'Supply, Capacity & Cost-to-Serve', question: 'Which revenue do we scale — and which destroys us?', anchor: '/origin/supply-chain#cost-to-serve' },
    { num: '3.1', origin: 'Ecosystem', name: 'Alliance & Co-Sell Ecosystem', question: 'Which partnerships actually produce revenue?', anchor: '/origin/ecosystem#alliance' },
    { num: '3.2', origin: 'Ecosystem', name: 'Platform, Marketplace & Adjacency', question: "Are we on someone else's land — and where's our second vertical?", anchor: '/origin/ecosystem#platform-adjacency' },
    { num: '4.1', origin: 'Expansion', name: 'New Offering Discovery', question: 'What do we build next — proven before we build?', anchor: '/origin/expansion#new-offering' },
    { num: '4.2', origin: 'Expansion', name: 'New Market Discovery', question: 'Which market ranks by profit pool?', anchor: '/origin/expansion#new-market' },
    { num: '4.3', origin: 'Expansion', name: 'New Channel Discovery', question: 'Which channel adds without cannibalizing?', anchor: '/origin/expansion#new-channel' },
    { num: '4.4', origin: 'Expansion', name: 'New Product Launch Discovery', question: 'Is launch a controlled operation or a coin flip?', anchor: '/origin/expansion#new-launch' }
  ];

  const engagementStages = [
    {
      stage: 'Stage 01',
      title: 'Discovery',
      duration: '8-12 weeks',
      scope: '8 nodes',
      desc: 'Complete audit across micro-markets, demand chain leakage, pricing elasticity, propensity modeling, usage telemetry, and competitor teardowns. Locks core revenue baselines.'
    },
    {
      stage: 'Stage 02',
      title: 'Supply Chain Discovery',
      duration: '4-6 weeks',
      scope: '2 nodes',
      desc: 'Offer architecture re-engineering and SKU/customer-level cost-to-serve analysis to eliminate negative contribution margin and uncap fulfillment capacity.'
    },
    {
      stage: 'Stage 03',
      title: 'Business Ecosystem Discovery',
      duration: '4-6 weeks',
      scope: '2 nodes',
      desc: 'Alliance economics attribution, co-sell governance, platform dependency de-risking, and adjacent vertical entry validation.'
    },
    {
      stage: 'Stage 04',
      title: 'Expansion Discovery',
      duration: '6-10 weeks',
      scope: '4 nodes',
      desc: 'Pre-build validation of new offerings, profit pool ranking for new markets, non-cannibalizing channel pilots, and day-0 launch command systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* SECTION 1: HERO & STRATEGIC THESIS (Matching Home Page Grid + Ambience) */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200">
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
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="font-mono text-blue-600 font-extrabold">ORIGIN</span>
                <span className="text-slate-300 font-normal">//</span>
                <span>THE COMPLETE REVENUE DISCOVERY FRAMEWORK</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              Four Origins. Sixteen Nodes.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                One Rule: Realization, Not Documentation.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Revenue stalls when discovery is fragmented — market sized in one deck, pricing guessed in another, channels untested, competitors watched but never dissected. ORIGIN runs all sixteen discovery nodes as one connected diagnostic, and every node ends in a measured baseline, a locked target, and a telemetry loop.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-10 max-w-2xl shadow-xs">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-1">Strategic Thesis</div>
              <p className="text-base font-semibold text-slate-800 italic">
                "Discovery converts to revenue, not documents. Every node measured. Every target locked. Every outcome tracked."
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider"
              >
                <span>Book a Discovery Diagnostic</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#intake"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider"
              >
                <span>Talk to a Principal Architect</span>
                <ChevronRight className="ml-2 w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB NAVIGATION (Home Page Light Floating SubNav) */}
      <OriginStickySubNav
        currentPageTitle="ORIGIN Overview Hub"
        items={subNavItems}
      />

      {/* SECTION 2: THE FRAMEWORK THESIS */}
      <section id="thesis" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
                <Target className="w-3.5 h-3.5" />
                <span>The Core Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Why ORIGIN Exists
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Most enterprises run discovery in fragments. Market sizing lives in one slide deck. Pricing decisions happen in another meeting. Channel strategy is debated separately. Competitive intelligence is watched but never dissected into deal-usable counter-plays.
                </p>
                <p>
                  The result: decisions made on incomplete pictures, revenue leaked at every joint, and growth that stalls while the market grows.
                </p>
                <p className="text-slate-900 font-bold">
                  ORIGIN fixes this by running all sixteen discovery nodes as one connected diagnostic. Every node starts with a measured baseline, locks a target, and installs a telemetry loop — so discovery converts to revenue, not documents.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/80">
                    <div className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider mb-2">Fragmented Discovery</div>
                    <ul className="space-y-2 text-xs text-rose-900">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>TAM estimates disconnected from unit economics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>Instinct-based discounting replacing willingness data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>Static firmographic lists chasing cold accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>Consulting decks that gather dust on executive shelves</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80">
                    <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2">The ORIGIN Architecture</div>
                    <ul className="space-y-2 text-xs text-slate-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>All 16 nodes executed as one connected diagnostic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Every baseline measured and frozen in week 1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Targets contractually locked into engagement SOW</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>24/7 telemetry loops & autonomous agent fleets</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-emerald-600" />
                    <span>Realization Standard: Measurable Baseline → Locked Target → Telemetry Loop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 4 ORIGINS OVERVIEW (Home Page Card Grid) */}
      <section id="origins" className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture Structure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The 4 Origins
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Sixteen connected discovery nodes structured across four functional origins. Explore each origin to inspect the SPICED breakdowns, sharp offerings, deliverables, and realization loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {originsCards.map((origin) => (
              <div
                key={origin.num}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-400 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Animated Color Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                      ORIGIN {origin.num}
                    </span>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md font-bold">
                      {origin.nodeCount}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-blue-600 transition-colors">
                    {origin.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {origin.description}
                  </p>

                  <div className="space-y-1.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Included Nodes:</div>
                    <div className="flex flex-wrap gap-2">
                      {origin.nodes.map((node, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-mono"
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to={origin.path}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md group-hover:shadow-lg"
                >
                  <span>Explore {origin.title.split('—')[0]} →</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE REALIZATION LAYER OVERVIEW */}
      <section id="realization" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Conversion Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              How ORIGIN Converts Discovery to Revenue
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Every ORIGIN node runs through the Realization Layer — six commitment stages that ensure discovery converts to measurable outcomes, not just recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {realizationStages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-mono font-extrabold text-blue-600">
                    {stage.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{stage.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/origin/realization"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md"
            >
              <span>Explore The Complete Realization Layer Deep-Dive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE COMPLETE NODE MAP (REFERENCE TABLE) */}
      <section id="node-map" className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
                <GitBranch className="w-3.5 h-3.5" />
                <span>Master Reference</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
                The Complete Node Map
              </h2>
              <p className="text-sm text-slate-600">
                All 16 nodes organized across the 4 Origins, each calibrated around one sharp diagnostic question.
              </p>
            </div>
            <Link
              to="/origin/node-map"
              className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 hover:text-blue-700 font-bold underline"
            >
              <span>Open Dedicated Node Map Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 border-b border-slate-800 text-xs font-mono uppercase text-slate-300">
                <tr>
                  <th className="py-4 px-6 w-16">#</th>
                  <th className="py-4 px-6 w-36">Origin</th>
                  <th className="py-4 px-6 w-72">Node</th>
                  <th className="py-4 px-6">The Sharp Question</th>
                  <th className="py-4 px-6 text-right w-28">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-slate-800">
                {nodeTable.map((node) => (
                  <tr key={node.num} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="py-4 px-6 font-mono text-xs text-blue-600 font-bold">{node.num}</td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-500">{node.origin}</td>
                    <td className="py-4 px-6 font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {node.name}
                    </td>
                    <td className="py-4 px-6 text-slate-600 italic text-xs sm:text-sm">
                      "{node.question}"
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to={node.anchor}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 hover:text-blue-700"
                      >
                        <span>Deep Dive</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: ENGAGEMENT PATH — HOW TO START */}
      <section id="engagement" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Deployment Cadence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Standard Engagement Sequence
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              The standard engagement runs all 8 core discovery nodes first — because every downstream decision (pricing, channels, expansion) is only as good as the discovery beneath it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {engagementStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-blue-700 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {stage.stage}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">{stage.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">{stage.title}</h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">{stage.scope}</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">Ongoing Realization Layer:</span> Monthly realization reviews against locked targets, telemetry loop monitoring, and continuous playbook optimization.
              </p>
            </div>
            <a
              href="#intake"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Lock Baselines Now
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA & INTAKE FORM (Home Page Style) */}
      <section id="intake" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>EXECUTIVE INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Run the Complete Revenue Discovery Diagnostic?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Engage directly with our principal revenue architects. We audit your current discovery gaps, lock baselines, and engineer verifiable realization targets.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <OriginIntakeForm
            pageContext="ORIGIN Overview Hub"
            defaultPriority="Full ORIGIN Diagnostic"
          />
        </div>
      </section>
    </div>
  );
}
