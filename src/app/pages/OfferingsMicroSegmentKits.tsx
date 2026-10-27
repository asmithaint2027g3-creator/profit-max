import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Cpu,
  UserCheck,
  Layers,
  Zap,
  Building2,
  ShoppingBag,
  Coins,
  DollarSign,
} from 'lucide-react';

interface Kit {
  id: string;
  name: string;
  builtFor: string;
  sectorTag: 'Services' | 'Retail' | 'Platform' | 'Crypto' | 'Industrial' | 'SaaS';
  duration: string;
  trackMixText: string;
  trackMix: {
    consulting: number;
    automation: number;
  };
  contents: string[];
  components: string[];
  keyOutcome: string;
  tag: string;
}

const fastStartKits: Kit[] = [
  {
    id: 'agency-margin',
    name: 'Agency Margin Kit',
    builtFor: 'Boutique & mid-size agencies, digital consultancies, system integrators',
    sectorTag: 'Services',
    duration: '3 Weeks',
    trackMixText: '85% Strategy / 15% Automation',
    trackMix: { consulting: 85, automation: 15 },
    contents: [
      'Micro-segment margin mapping and gross margin variance teardown',
      'Offer and bundle architecture to productize services',
      'Pricing and packaging governance framework to eliminate discount creep'
    ],
    components: ['Margin Teardown', 'Offer Packaging', 'Discount Governance'],
    keyOutcome: 'Clear visibility into which service lines carry true margin and how to price and package IP without discounting.',
    tag: 'Margin Protection'
  },
  {
    id: 'dtc-margin',
    name: 'Direct-to-Consumer (DTC) Margin Kit',
    builtFor: 'E-commerce, consumer brands, and high-velocity digital retailers',
    sectorTag: 'Retail',
    duration: '6 Weeks',
    trackMixText: '30% Strategy / 70% Automation',
    trackMix: { consulting: 30, automation: 70 },
    contents: [
      'Micro-segment margin mapping after customer acquisition cost (CAC)',
      'Dynamic messaging mesh personalized by buyer cohort',
      'Channel mix optimization engine across paid acquisition channels',
      'Customer propensity and lookalike scoring engine'
    ],
    components: ['CAC Teardown', 'Dynamic Messaging', 'Channel Optimizer', 'Propensity Engine'],
    keyOutcome: 'Identification of profitable micro-segments after paid acquisition, with automated routing to highest-propensity buyers.',
    tag: 'CAC Efficiency'
  },
  {
    id: 'vertical-saas-whitespace',
    name: 'Vertical SaaS Whitespace Kit',
    builtFor: 'Vertical SaaS scale-ups escaping horizontal competition',
    sectorTag: 'SaaS',
    duration: '4 Weeks',
    trackMixText: '70% Strategy / 30% Automation',
    trackMix: { consulting: 70, automation: 30 },
    contents: [
      'Total Addressable Market & micro-segment profit pool mapping',
      'Pre-purchase value engineering and executive ROI proof model',
      'Ideal customer profile and buying-committee diagnostics'
    ],
    components: ['TAM Whitespace', 'Value Engineering', 'ICP Diagnostics'],
    keyOutcome: 'Clear whitespace thesis, entry roadmap, and value architecture for the highest win-rate vertical.',
    tag: 'Category Whitespace'
  },
  {
    id: 'plg-conversion',
    name: 'Product-Led Growth (PLG) Conversion Kit',
    builtFor: 'Self-serve, freemium, and developer-focused platform products',
    sectorTag: 'Platform',
    duration: '6 Weeks',
    trackMixText: '25% Strategy / 75% Automation',
    trackMix: { consulting: 25, automation: 75 },
    contents: [
      'Usage-to-revenue signal telemetry and product consumption triggers',
      'Account-level propensity and expansion scoring engine',
      'Deal intelligence and automated sales-assist routing triggers'
    ],
    components: ['Usage Telemetry', 'PQL Scoring', 'Sales-Assist Routing'],
    keyOutcome: 'Predictive model identifying which usage patterns convert to paid, with automated sales-assist routing.',
    tag: 'PLG Monetization'
  },
  {
    id: 'enterprise-motion',
    name: 'Enterprise Motion Kit',
    builtFor: 'Mid-market companies expanding upmarket into enterprise accounts',
    sectorTag: 'SaaS',
    duration: '10 Weeks',
    trackMixText: '50% Strategy / 50% Automation',
    trackMix: { consulting: 50, automation: 50 },
    contents: [
      'Value engineering & executive ROI business case studio',
      'Multi-stakeholder buying committee and security gate mapping',
      'Dynamic deal room and automated customized CFO business case generator'
    ],
    components: ['Value Architecture', 'Buying Committee Map', 'Dynamic Deal Rooms'],
    keyOutcome: 'Enterprise-ready value architecture, buying-committee mapping, and auto-generated ROI business cases.',
    tag: 'Upmarket Expansion'
  },
  {
    id: 'marketplace-liquidity',
    name: 'Marketplace Liquidity Kit',
    builtFor: 'Two-sided marketplaces, platforms, and network businesses',
    sectorTag: 'Platform',
    duration: '8 Weeks',
    trackMixText: '50% Strategy / 50% Automation',
    trackMix: { consulting: 50, automation: 50 },
    contents: [
      'Channel economics and partner supply-demand balance architecture',
      'Propensity scoring engine identifying high-liquidity participant cohorts',
      'Predictive market sizing engine with real-time intent telemetry'
    ],
    components: ['Supply-Demand Economics', 'Participant Scoring', 'Predictive Sizing'],
    keyOutcome: 'Clarity on which side of the marketplace is monetizable, with automated demand scoring.',
    tag: 'Network Economics'
  },
  {
    id: 'channel-derisk',
    name: 'Channel De-Risking Kit',
    builtFor: 'Platform-dependent businesses with over 40% revenue concentration in one channel',
    sectorTag: 'Industrial',
    duration: '8 Weeks',
    trackMixText: '50% Strategy / 50% Automation',
    trackMix: { consulting: 50, automation: 50 },
    contents: [
      'Channel economics and partner dependency vulnerability audit',
      'Channel mix optimization engine and budget reallocation logic',
      'Dark-funnel intent telemetry capturing buyer interest outside primary channel'
    ],
    components: ['Concentration Audit', 'Channel Mix Reallocation', 'Dark-Funnel Intent'],
    keyOutcome: 'Diversified channel strategy with automated intent capture beyond the primary platform.',
    tag: 'Resilience'
  },
  {
    id: 'pricing-packaging',
    name: 'Pricing & Packaging Kit',
    builtFor: 'SaaS, platform, and recurring service businesses suffering from discount creep',
    sectorTag: 'SaaS',
    duration: '5 Weeks',
    trackMixText: '75% Strategy / 25% Automation',
    trackMix: { consulting: 75, automation: 25 },
    contents: [
      'Pricing & packaging architecture with value-metric restructuring',
      'Offer and bundle architecture with discount governance guardrails',
      'Algorithmic forecast precision and commit modeling'
    ],
    components: ['Value Metric Restructure', 'Discount Governance', 'Forecast Modeling'],
    keyOutcome: 'Value-to-price alignment, discount governance framework, and verifiable forecast precision.',
    tag: 'Revenue Realization'
  },
  {
    id: 'web3-launch-readiness',
    name: 'Crypto & Protocol Launch Readiness Kit',
    builtFor: 'Layer 1/2 protocols, DeFi ecosystems, and Web3 infrastructure preparing for launch',
    sectorTag: 'Crypto',
    duration: '4 Weeks',
    trackMixText: '50% Strategy / 50% Automation',
    trackMix: { consulting: 50, automation: 50 },
    contents: [
      'Tokenomics narrative lock and institutional positioning memo',
      'Community and on-chain signal command center',
      'Jurisdictional compliance and market-making readiness map'
    ],
    components: ['Institutional Narrative', 'Signal Command Center', 'Compliance Map'],
    keyOutcome: 'Institutional investor narrative alignment and automated community demand telemetry.',
    tag: 'Protocol Launch'
  }
];

export default function OfferingsMicroSegmentKits() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Services', 'Retail', 'Platform', 'Crypto', 'Industrial', 'SaaS'];

  const filteredKits = fastStartKits.filter((kit) => {
    if (activeFilter === 'All') return true;
    return kit.sectorTag === activeFilter;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (60vh, Product-Grid Texture, The Quick Win) ── */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-white text-slate-900 overflow-hidden border-b border-slate-200 py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Box className="w-3.5 h-3.5" />
            <span>THE QUICK WIN // FIXED-SCOPE ENTRY POINTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading max-w-4xl mx-auto">
            Fixed-Scope Fast Starts.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Deploy in Weeks, Not Months.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            Pre-packaged discovery kits designed for recurring micro-segments. We cut scoping time and start delivery inside two weeks.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-mono text-slate-300">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 font-bold">
              ⚡ Starts in 2 weeks
            </span>
            <span className="text-slate-600">·</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
              🔒 100% fixed scope & price
            </span>
            <span className="text-slate-600">·</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 font-bold">
              🔄 100% credited toward scale
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: KIT FILTER BAR (Fixed in Page, No Sliding) ── */}
      <section className="py-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold hidden sm:inline mr-2">
                Filter by Sector:
              </span>
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setActiveFilter(opt)}
                  className={`text-xs px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer border ${
                    activeFilter === opt
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20 font-mono uppercase'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-slate-400 shrink-0 hidden md:inline">
              Showing {filteredKits.length} Kits
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: KIT CARDS GRID (Product Cards with Mini Stack Visual) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKits.map((kit) => (
              <div
                key={kit.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1 transition-all group relative overflow-hidden shadow-sm"
              >
                <div>
                  {/* TOP: Badges & Title */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 uppercase">
                      {kit.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{kit.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                    {kit.name}
                  </h3>

                  <p className="text-xs text-slate-600 mb-5">
                    <strong className="text-slate-300">Built for:</strong> {kit.builtFor}
                  </p>

                  {/* Track Mix Badge */}
                  <div className="mb-6 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex justify-between items-center">
                    <span className="font-bold text-cyan-400">Track Mix</span>
                    <span>{kit.trackMixText}</span>
                  </div>

                  {/* MIDDLE: Contents Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Core Deliverables:
                    </span>
                    {kit.contents.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mini Stack Visual: 3-4 Layered Blocks */}
                  <div className="mb-6 pt-4 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-2">
                      Kit Architecture Stack:
                    </span>
                    <div className="space-y-1.5">
                      {kit.components.map((comp, cIdx) => (
                        <div
                          key={cIdx}
                          className="px-3 py-1.5 rounded-lg bg-slate-950 text-white text-[11px] font-mono flex items-center justify-between border border-slate-800/80"
                        >
                          <span className="truncate">{comp}</span>
                          <span className="text-cyan-400 font-bold text-[10px]">0{cIdx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM: Key Outcome + CTA Button */}
                <div>
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-200 mb-5">
                    <strong className="font-bold block mb-0.5 text-cyan-400">Key Outcome:</strong>
                    <span>{kit.keyOutcome}</span>
                  </div>

                  <Link
                    to={`/book-consultation?kit=${encodeURIComponent(kit.name)}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 font-mono uppercase tracking-wider group/btn"
                  >
                    <span>Book This Kit</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHY KITS WORK (Split Section: 3-Point + Timeline Visual) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: 3-Point Explanation with Numbered Icons */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                Scoping Efficiency
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-heading">
                The Fastest Path from Diagnosis to Delivery.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                Most enterprise consulting fails in scoping. Clients spend weeks debating what to buy, and by the time work starts, the quarter is gone. Our Fast-Start Discovery Kits lock scope, price, and timeline upfront.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Pre-Engineered Scope</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      No more endless weeks of negotiating bespoke Statements of Work. Proven deliverables ready to deploy in two weeks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 font-mono font-bold flex items-center justify-center shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Fixed Price, Fixed Timeline</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Zero invoice surprises or open-ended hourly billing. 3 to 10-week hard time-boxes with defined deliverables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">100% Credits Forward</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      100% of the kit fee applies directly to any subsequent transformation engagement. You never pay for proof twice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Milestone Timeline Visual (Week 0 -> Week 2 -> Week 4 -> Delivery) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-900 p-8 text-white border border-slate-800 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold block mb-6">
                  Turnkey Delivery Arc
                </span>

                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                    <span className="text-[11px] font-mono text-cyan-400 font-bold block">Week 0 // Baseline Lock</span>
                    <h5 className="text-sm font-bold text-white mt-0.5">Scoping & CRM Access Freeze</h5>
                    <p className="text-xs text-slate-400 mt-1">Pre-agreed success criteria and metric baselines locked in a signed charter.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-900" />
                    <span className="text-[11px] font-mono text-cyan-400 font-bold block">Week 2 // Initial Diagnostic Readout</span>
                    <h5 className="text-sm font-bold text-white mt-0.5">Strategic Findings & Pipeline Setup</h5>
                    <p className="text-xs text-slate-400 mt-1">Early revenue leak scorecard delivered; agentic telemetry pipelines activated.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-slate-900" />
                    <span className="text-[11px] font-mono text-cyan-400 font-bold block">Week 4 // Mid-Point Calibration</span>
                    <h5 className="text-sm font-bold text-white mt-0.5">Live Intervention & Lift Verification</h5>
                    <p className="text-xs text-slate-400 mt-1">Outbound campaigns active; value engineering models tested in active buyer calls.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <span className="text-[11px] font-mono text-emerald-400 font-bold block">Week 6–10 // Final Gate & Transfer</span>
                    <h5 className="text-sm font-bold text-white mt-0.5">Statistical Gate & IP Handoff</h5>
                    <p className="text-xs text-slate-400 mt-1">Full deliverable package transferred; option to apply 100% credit toward scaled transformation.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: COMPARISON SNAPSHOT (Compact Scannable Table) ── */}
      <section className="py-20 bg-slate-50/70 text-slate-900 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Comparison Snapshot
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-2 font-heading">
              All Fast-Start Kits at a Glance
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Side-by-side overview of durations, delivery track balance, and target business profiles.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-200 uppercase font-mono text-[11px] border-b border-slate-800">
                <tr>
                  <th className="px-5 py-3.5 font-bold">Fast-Start Kit</th>
                  <th className="px-5 py-3.5 font-bold">Duration</th>
                  <th className="px-5 py-3.5 font-bold">Track Mix</th>
                  <th className="px-5 py-3.5 font-bold">Target Segment</th>
                  <th className="px-5 py-3.5 font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {fastStartKits.map((k) => (
                  <tr key={k.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-white whitespace-nowrap">{k.name}</td>
                    <td className="px-5 py-3.5 font-mono text-blue-400">{k.duration}</td>
                    <td className="px-5 py-3.5 text-slate-400">{k.trackMixText}</td>
                    <td className="px-5 py-3.5 text-slate-300 max-w-xs truncate">{k.builtFor}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <Link
                        to={`/book-consultation?kit=${encodeURIComponent(k.name)}`}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="py-20 bg-white text-slate-900 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Don't See Your Exact Situation?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Tell us your segment, stage, and constraint. We will configure a custom discovery sequence or recommend the exact model for your situation within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/offerings#engagement-selector"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-sm font-mono uppercase tracking-wider group"
            >
              <span>Use Engagement Selector</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/origin"
              className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition-all text-sm border border-slate-700 font-mono uppercase tracking-wider"
            >
              <span>Explore ORIGIN Framework</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
