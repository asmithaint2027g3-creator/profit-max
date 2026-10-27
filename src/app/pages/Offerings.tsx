import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  DollarSign,
  Activity,
  Layers,
  Search,
  Sparkles,
  Lock,
  ChevronRight,
  Gauge,
  Box,
  Network,
  GitBranch,
  Building2,
  Users,
  Zap,
  Check,
  ArrowUpRight,
  Scale,
  Clock,
  Briefcase
} from 'lucide-react';

export default function Offerings() {
  useEffect(() => {
    document.title = 'Offerings: ORIGIN — The Complete Revenue Discovery Framework | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Revenue Diagnostic',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setFormSubmitted(true);
  };

  const originsCards = [
    {
      num: '01',
      title: 'Revenue Discovery',
      path: '/offerings/revenue-discovery',
      nodeCount: '8 nodes',
      keyMetric: '16 Nodes · Full Diagnostic Coverage',
      description: "Where the money is, what buyers will pay, who is ready to buy, and who you're fighting for it. 8 discovery nodes covering micro-markets, demand chains, channels, pricing, propensity, usage-to-revenue, competitors, and competitive ecosystems.",
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
      path: '/offerings/supply-chain-discovery',
      nodeCount: '2 nodes',
      keyMetric: 'Margin Recovery · Cost Optimization',
      description: 'What you sell, at what margin, and what it truly costs to serve. 2 discovery nodes covering offer/revenue architecture and supply/capacity/cost-to-serve.',
      nodes: [
        'Offer & Revenue Architecture',
        'Supply, Capacity & Cost-to-Serve'
      ]
    },
    {
      num: '03',
      title: 'Business Ecosystem Discovery',
      path: '/offerings/business-ecosystem-discovery',
      nodeCount: '2 nodes',
      keyMetric: 'Partnership ROI · Ecosystem Mapping',
      description: "Revenue you don't build alone: alliances, platforms, and adjacent ground. 2 discovery nodes covering alliance/co-sell ecosystems and platform/marketplace/adjacency.",
      nodes: [
        'Alliance & Co-Sell Ecosystem',
        'Platform, Marketplace & Adjacency'
      ]
    },
    {
      num: '04',
      title: 'Expansion Discovery',
      path: '/offerings/expansion-discovery',
      nodeCount: '4 nodes',
      keyMetric: 'Validated Expansion · De-Risked Growth',
      description: 'New offerings, new markets, new channels, new launches — proven before you commit. 4 discovery nodes covering new offerings, new markets, new channels, and new product launches.',
      nodes: [
        'New Offering Discovery',
        'New Market Discovery',
        'New Channel Discovery',
        'New Product Launch Discovery'
      ]
    }
  ];

  const realizationSteps = [
    {
      step: '01',
      title: 'Baseline Capture',
      desc: 'Every node starts by measuring the current number. No baseline, no engagement.',
      example: 'Before we rebuild your pricing, we measure your current discount rate, price realization, and expansion win rate.'
    },
    {
      step: '02',
      title: 'Locked Targets',
      desc: 'Targets written into the SOW — "recover 8 points of margin in 2 quarters," never "improve."',
      example: 'The SOW says "reduce discount rate by 30-50% in 2 quarters" — not "optimize pricing."'
    },
    {
      step: '03',
      title: 'Decision Authority',
      desc: 'Each node ends with a named decision: enter/exit, price/hold, build/kill — made on the evidence, with the evidence attached.',
      example: 'After micro-market discovery, the board decides: "We own Segment X, exit Segment Y, hold Segment Z" — with margin proof attached.'
    },
    {
      step: '04',
      title: 'Execution Engine',
      desc: 'The Automation Track (agent fleets, propensity rescoring, telemetry) runs the playbook 24/7 after strategists leave.',
      example: 'The propensity engine rescored your TAM nightly. The pricing guardrails enforce discount floors in CRM. The telemetry loop tracks realization monthly.'
    },
    {
      step: '05',
      title: 'Proof Cadence',
      desc: 'Monthly realization reviews against locked targets. If the needle isn\'t moving, the engagement is re-scoped — not renewed.',
      example: 'Month 3 review: discount rate down 15% (target was 30%). We re-scope the engagement to address the root cause.'
    },
    {
      step: '06',
      title: 'Exit State',
      desc: 'You keep the dashboards, the playbooks, the models — and the numbers they produce.',
      example: 'At engagement end, you own the propensity engine, the pricing guardrails, the competitive intelligence feed — and the baseline-to-realization data.'
    }
  ];

  const nodeTable = [
    { num: '1.1', origin: 'Core Discovery', name: 'Micro-Market Discovery', question: 'Which micro-segment carries the margin — and can we hold it?', anchor: '/offerings/revenue-discovery#micro-market' },
    { num: '1.2', origin: 'Core Discovery', name: 'Demand Discovery', question: 'Where does the demand chain leak?', anchor: '/offerings/revenue-discovery#demand' },
    { num: '1.3', origin: 'Core Discovery', name: 'Channel Discovery', question: 'Where is our second revenue engine?', anchor: '/offerings/revenue-discovery#channel' },
    { num: '1.4', origin: 'Core Discovery', name: 'Willingness-to-Pay Discovery', question: 'What will buyers actually pay?', anchor: '/offerings/revenue-discovery#wtp' },
    { num: '1.5', origin: 'Core Discovery', name: 'Customer Propensity Discovery', question: 'Who is in-market right now?', anchor: '/offerings/revenue-discovery#propensity' },
    { num: '1.6', origin: 'Core Discovery', name: 'Usage-to-Revenue Discovery', question: 'Which behaviors predict paid conversion?', anchor: '/offerings/revenue-discovery#usage' },
    { num: '1.7', origin: 'Core Discovery', name: 'Competitor Discovery', question: 'What exactly are we losing to, deal by deal?', anchor: '/offerings/revenue-discovery#competitor' },
    { num: '1.8', origin: 'Core Discovery', name: 'Competitive Ecosystem Discovery', question: 'Who is building the field we fight on?', anchor: '/offerings/revenue-discovery#ecosystem' },
    { num: '2.1', origin: 'Supply Chain', name: 'Offer & Revenue Architecture', question: 'Is our offer engineered for willingness-to-pay?', anchor: '/offerings/supply-chain-discovery#offer' },
    { num: '2.2', origin: 'Supply Chain', name: 'Supply, Capacity & Cost-to-Serve', question: 'Which revenue do we scale — and which destroys us?', anchor: '/offerings/supply-chain-discovery#cost-to-serve' },
    { num: '3.1', origin: 'Ecosystem', name: 'Alliance & Co-Sell Ecosystem', question: 'Which partnerships actually produce revenue?', anchor: '/offerings/business-ecosystem-discovery#alliance' },
    { num: '3.2', origin: 'Ecosystem', name: 'Platform, Marketplace & Adjacency', question: "Are we on someone else's land — and where's our second vertical?", anchor: '/offerings/business-ecosystem-discovery#platform' },
    { num: '4.1', origin: 'Expansion', name: 'New Offering Discovery', question: 'What do we build next — proven before we build?', anchor: '/offerings/expansion-discovery#new-offering' },
    { num: '4.2', origin: 'Expansion', name: 'New Market Discovery', question: 'Which market ranks by profit pool?', anchor: '/offerings/expansion-discovery#new-market' },
    { num: '4.3', origin: 'Expansion', name: 'New Channel Discovery', question: 'Which channel adds without cannibalizing?', anchor: '/offerings/expansion-discovery#new-channel' },
    { num: '4.4', origin: 'Expansion', name: 'New Product Launch Discovery', question: 'Is launch a controlled operation or a coin flip?', anchor: '/offerings/expansion-discovery#launch' }
  ];

  const outcomes = [
    {
      metric: '5–15 Points',
      label: 'Gross Margin Recovered',
      sublabel: 'in 2 Quarters',
      desc: 'Achieved through empirical willingness-to-pay and offer architecture.'
    },
    {
      metric: '30–50%',
      label: 'Discount Rate Reduction',
      sublabel: 'Enforced in CRM',
      desc: 'Value-evidenced price points replacing instinct-driven discounting.'
    },
    {
      metric: '+15–25%',
      label: 'Win Rate vs. Rivals',
      sublabel: 'Deal-by-Deal Battlecards',
      desc: 'Counter-positioning playbooks and continuous win/loss telemetry.'
    },
    {
      metric: '3×',
      label: 'First-90-Day Pipeline',
      sublabel: 'vs. First-Quarter Quota',
      desc: 'Launch command system with day-0 propensity account routing.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO & STRATEGIC THESIS (Matching Home Page Grid Texture) ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        {/* Home Page Ambient Grid */}
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
            {/* Pulsing Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="font-mono text-blue-600 font-extrabold">ORIGIN</span>
                <span className="text-slate-300 font-normal">//</span>
                <span>THE ORIGIN FRAMEWORK</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              ORIGIN — The Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Revenue Discovery Framework
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Four origins. Sixteen nodes. One rule: realization, not documentation. ORIGIN runs all sixteen discovery nodes as one connected diagnostic, and every node ends in a measured baseline, a locked target, and a telemetry loop — so discovery converts to revenue, not documents.
            </p>

            {/* Strategic Thesis Callout */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-10 max-w-2xl shadow-xs">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-1">Strategic Thesis</div>
              <p className="text-base font-semibold text-slate-800 italic">
                &ldquo;Revenue stalls when discovery is fragmented — market sized in one deck, pricing guessed in another, channels untested, competitors watched but never dissected. ORIGIN fixes the fragmentation.&rdquo;
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Book a Revenue Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#intake"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Talk to a Principal Architect</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE FRAMEWORK THESIS ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
                <Target className="w-3.5 h-3.5" />
                <span>The Discovery Imperative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Why Discovery Must Convert to Revenue
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base font-normal">
                <p>
                  Most enterprises treat discovery as a one-time event — a workshop, a deck, a report. The insights sit in a PDF while the business continues to leak margin, miss forecasts, and lose deals.
                </p>
                <p>
                  ORIGIN is different. Every discovery node starts with a baseline measurement, locks a realization target in the SOW, and installs a telemetry loop that runs 24/7 after the strategists leave.
                </p>
                <p className="text-slate-900 font-bold">
                  Discovery isn't complete until the needle moves.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative">
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80">
                    <div className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider mb-1">
                      Traditional Consulting // The PDF Dead End
                    </div>
                    <p className="text-xs text-rose-900 leading-relaxed">
                      Subjective interviews · Strategy decks on executive shelves · No frozen baselines · Zero accountability once consultants depart.
                    </p>
                  </div>

                  <div className="flex justify-center my-1 text-slate-400 font-mono text-xs font-bold">
                    ↓ Replaced By ORIGIN Revenue Realization ↓
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80">
                    <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-1">
                      The ORIGIN Diagnostic // Production Revenue OS
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      Measured week-1 baselines · Contractually locked SOW realization targets · Nightly propensity telemetry · Capability transfer.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-emerald-600" />
                    <span>Realization Protocol: Baseline → Locked Target → Telemetry Loop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 ORIGINS (Overview Cards) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Diagnostic Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The 4 Origins
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Sixteen connected discovery nodes structured across four functional origins. Explore each origin to inspect the SPICED analysis, sharp offerings, deliverables, and realization loops.
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
                    <span className="text-xs font-mono font-bold text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                      ORIGIN {origin.num}
                    </span>
                    <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md font-bold">
                      {origin.keyMetric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-blue-600 transition-colors">
                    {origin.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {origin.description}
                  </p>

                  <div className="space-y-1.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Included Discovery Nodes:
                    </div>
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
                  <span>Explore {origin.title.split('—')[1]?.trim() || origin.title} →</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE REALIZATION LAYER (6-Step Vertical Timeline) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Conversion Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              How ORIGIN Converts Discovery to Revenue
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Every discovery node in ORIGIN follows the same realization protocol. This is what separates ORIGIN from traditional consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {realizationSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-mono font-extrabold text-blue-600">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 font-heading">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                    {step.desc}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 italic">
                  <span className="font-bold text-slate-800 not-italic block mb-0.5 font-mono uppercase text-[10px]">
                    In Practice:
                  </span>
                  &ldquo;{step.example}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE COMPLETE NODE MAP (Interactive Reference Table) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
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
                All 16 discovery nodes organized across the 4 Origins, each calibrated around one sharp diagnostic question.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 border-b border-slate-800 text-xs font-mono uppercase text-slate-300">
                <tr>
                  <th className="py-4 px-6 w-16">#</th>
                  <th className="py-4 px-6 w-44">Origin Category</th>
                  <th className="py-4 px-6 w-72">Discovery Node</th>
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
                      &ldquo;{node.question}&rdquo;
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

      {/* ── SECTION 6: ENGAGEMENT SEQUENCE ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Standard Sequence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Standard Engagement Sequence
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              The standard engagement runs Revenue Discovery across all 8 discovery nodes first — because every downstream decision (pricing, channels, expansion) is only as good as the discovery beneath it. Once Revenue Discovery is locked, we move to Supply Chain Discovery, then Ecosystem Discovery, then Expansion Discovery — each building on the evidence from the previous phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                stage: 'Stage 01',
                origin: 'Revenue Discovery',
                duration: '8–12 Weeks',
                scope: '8 Nodes',
                desc: 'Audits micro-markets, demand chain leakage, pricing willingness, live propensity, and competitor battlecards.'
              },
              {
                stage: 'Stage 02',
                origin: 'Supply Chain Discovery',
                duration: '4–6 Weeks',
                scope: '2 Nodes',
                desc: 'Offer architecture re-engineering and customer/SKU cost-to-serve analysis to eliminate negative contribution margin.'
              },
              {
                stage: 'Stage 03',
                origin: 'Ecosystem Discovery',
                duration: '4–6 Weeks',
                scope: '2 Nodes',
                desc: 'Alliance economics attribution, co-sell governance, and platform concentration de-risking.'
              },
              {
                stage: 'Stage 04',
                origin: 'Expansion Discovery',
                duration: '6–10 Weeks',
                scope: '4 Nodes',
                desc: 'Pre-build validation of new offerings, profit pool ranking for new markets, and day-0 launch command systems.'
              }
            ].map((st, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-blue-700 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {st.stage}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">{st.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">{st.origin}</h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">{st.scope}</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: VERIFIED OUTCOMES (4-Column Metric Grid) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Production Evidence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Verified Realization Outcomes
            </h2>
            <p className="text-base text-slate-600">
              Measurable baseline-to-target lift across enterprise revenue operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono mb-2">
                  {item.metric}
                </div>
                <div className="text-base font-bold text-slate-900 mb-1">
                  {item.label}
                </div>
                <div className="text-xs font-mono text-blue-700 font-semibold mb-3">
                  {item.sublabel}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: IDEAL CUSTOMER FIT (3-Column Layout) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Engagement Qualification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Ideal Customer Fit
            </h2>
            <p className="text-base text-slate-600">
              ORIGIN is engineered for enterprises with complex revenue topologies and multi-channel go-to-market motions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Target Organizations */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Target Organizations</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Enterprise SaaS:</strong> $50M+ ARR, complex packaging & multi-product tiers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Mid-Market B2B:</strong> Multi-channel distribution, long cycle deals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Platform Companies:</strong> Ecosystem-dependent with platform adjacency bets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Services & SIs:</strong> Margin erosion, capacity limits, and discount creep</span>
                </li>
              </ul>
            </div>

            {/* Decision Makers */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Decision Makers</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Chief Revenue Officer (CRO):</strong> Mandate to eliminate pipeline leaks and improve forecast accuracy</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Chief Financial Officer (CFO):</strong> Mandate to defend gross margin and cap cost-to-serve</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>VP of Product Marketing:</strong> Pricing & packaging governance, willingness evidence</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>VP of Corporate Strategy:</strong> Market entry diligence and ecosystem gravity</span>
                </li>
              </ul>
            </div>

            {/* Buying Triggers */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Buying Triggers</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Margin Compression:</strong> Inexplicable margin leak despite healthy pipeline volume</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Pricing by Habit:</strong> Discount creep substituting for verified willingness-to-pay</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Competitive Losses:</strong> Losing strategic deals without deal-usable intelligence</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Expansion Uncertainty:</strong> New offerings or markets debated on slides, not data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: ENGAGEMENT PATH — HOW TO START (3-Stage Horizontal Timeline) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Engagement Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              From Diagnostic to Realization in 90 Days
            </h2>
            <p className="text-base text-slate-600 font-normal">
              A sequenced deployment where every stage ends in verified operational telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Stage 01 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 relative">
              <span className="text-xs font-mono text-blue-700 font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 inline-block mb-4">
                STAGE 01 · 2–4 WEEKS
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                Revenue Diagnostic & Baseline Lock
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Full-funnel telemetry audit across all 16 discovery nodes, baseline metrics frozen, and 90-day realization target matrix locked into the Statement of Work.
              </p>
              <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-700">
                <strong>Key Output:</strong> Baseline Capture Dossier & Locked SOW
              </div>
            </div>

            {/* Stage 02 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 relative">
              <span className="text-xs font-mono text-indigo-700 font-bold px-2.5 py-1 rounded bg-indigo-50 border border-indigo-200 inline-block mb-4">
                STAGE 02 · 6–12 WEEKS
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                Revenue Discovery Sprint
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                All 8 revenue discovery nodes executed in parallel: micro-segment profit pools, demand chain velocity telemetry, willingness price points, and competitive counter-battlecards.
              </p>
              <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-700">
                <strong>Key Output:</strong> Realization Loops Live & First Margin Lift
              </div>
            </div>

            {/* Stage 03 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 relative">
              <span className="text-xs font-mono text-emerald-700 font-bold px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 inline-block mb-4">
                STAGE 03 · ONGOING
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                Origins 02–04 Scale & Governance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Supply chain offer architecture, business ecosystem alliance governance, and expansion validation engines installed with monthly proof reviews and full capability IP transfer.
              </p>
              <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-700">
                <strong>Key Output:</strong> Autonomous Revenue OS Operational
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CTA & INTAKE FORM (Matching Home Page Form Style) ── */}
      <section id="intake" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        {/* Subtle Grid Ambient Background */}
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
            Ready to Convert Discovery to Revenue?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Engage directly with our principal revenue architects. We measure your baseline, lock realization targets, and install telemetry loops that run 24/7.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center text-slate-900 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold mb-3 font-heading text-slate-900">
                Discovery Diagnostic Intake Received
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
                Thank you, <span className="text-slate-900 font-bold">{formData.fullName}</span>. A Principal Revenue Systems Architect specialized in <span className="text-blue-600 font-semibold">{formData.serviceInterest}</span> will review your parameters under mutual NDA standards and contact you within 24 business hours to lock baselines.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Case File: ORIGIN-{Math.floor(100000 + Math.random() * 900000)} // Context: Offerings Hub</span>
              </div>
              <div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-blue-600 hover:text-blue-700 underline cursor-pointer"
                >
                  Submit another diagnostic parameter set
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-2xl text-left relative overflow-hidden">
              {/* Top Animated Color Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-slate-100 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-bold text-slate-900 tracking-wider">
                    CONFIDENTIAL REVENUE ARCHITECTURE INTAKE
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SLA: 24h Response</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Datastream Systems Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Service Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors font-medium"
                  >
                    <option value="Revenue Diagnostic">Revenue Diagnostic (Baseline Measurement & SOW Lock)</option>
                    <option value="Revenue Discovery">Revenue Discovery (The 8 Discovery Nodes)</option>
                    <option value="Full ORIGIN Framework">Full ORIGIN Framework (All 16 Nodes across 4 Origins)</option>
                    <option value="Specific Discovery Node">Specific Discovery Node (Targeted Intervention)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Outline your primary discovery bottleneck, pricing leaks, or expansion hypotheses..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/10 cursor-pointer group"
                >
                  <span>Initiate Confidential Diagnostic</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-500 font-mono">
                    Enterprise confidentiality guaranteed under mutual NDA standards.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
