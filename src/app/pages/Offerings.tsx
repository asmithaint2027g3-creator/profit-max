import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Target,
  DollarSign,
  Network,
  ShieldCheck,
  Users,
  Sparkles,
  UserCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Briefcase,
  ShoppingBag,
  Building2,
  Sliders,
  Box,
  Compass,
  Clock,
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Flame,
  Zap
} from 'lucide-react';
import OfferingsSubNav from '../components/OfferingsSubNav';
import {
  discoveryAreas,
  serviceFamilies,
  businessSegments,
  microSegmentKits,
  deliveryTracksData
} from '../../data/offeringsCleanContent';

const iconsMap: Record<string, any> = {
  Search,
  Target,
  DollarSign,
  Network,
  ShieldCheck,
  Users,
  Sparkles,
  Briefcase,
  ShoppingBag,
  Building2,
  Sliders
};

export default function Offerings() {
  const location = useLocation();
  const [selectedSectorPreview, setSelectedSectorPreview] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (DARK INDUSTRY-IMAGE BACKGROUND & CLEAN COMPOSITION) ── */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        {/* Background Image: Corporate Architectural Facade with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Enterprise Revenue Architecture"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Revenue Architecture · Executive Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Turn Revenue Challenges into a <span className="text-blue-400">Clear Growth Strategy</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              ProfitMachines helps CEOs, revenue leaders, and founders identify unmapped profit pools, strengthen sales and pricing decisions, and apply AI-driven automation where it creates sustainable operational leverage.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/offerings/discovery-stack"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm shadow-md"
              >
                <span>Discuss Your Growth Goals</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BUSINESS CHALLENGES (ASYMMETRICAL BENTO LAYOUT) ── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              The Reality of Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Business Challenges We Help You Solve
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Revenue stalls rarely occur from lack of effort. They happen when market sizing, customer willingness-to-pay, sales qualification, and automation pull in conflicting directions.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Tile 1: Large Anchor Tile (Span 2 cols, 2 rows on large) */}
            <div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-blue-600/30 to-transparent pointer-events-none" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 inline-block mb-6">
                  Core Structural Dilemma
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-snug">
                  Unclear Market Boundaries & Hidden Margin Erosion
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Many companies experience revenue deceleration without knowing which customer segments or service lines are silently losing money. By dissecting total addressable whitespace into unit-economic micro-segments, we uncover precisely where actual contribution margin resides.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Mapped to Market & Whitespace Discovery</span>
                <Link to="/offerings/discovery-stack#market-opportunity" className="text-xs text-blue-400 hover:text-white font-bold flex items-center gap-1">
                  <span>Explore Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tile 2: Medium Tile */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center mb-4">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Discount Creep & Price Integrity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sales teams conceding on price to close deals because they lack pre-PO CFO business cases that prove quantifiable ROI.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600">
                Resolved by Value & Deal Effectiveness
              </div>
            </div>

            {/* Tile 3: Medium Tile */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Inconsistent Pipeline Velocity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lumpy quarter-to-quarter demand generation where deals enter pipeline but stall endlessly between discovery and proposal.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600">
                Resolved by Demand & Pipeline Design
              </div>
            </div>

            {/* Tile 4: Horizontal Span Tile */}
            <div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-white border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Channel Risk
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Single-Platform & Channel Overdependence
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over-reliance on a dominant partner, marketplace, or distributor leaves margins vulnerable to sudden algorithm shifts, fee hikes, or policy alterations. We balance partner incentives with direct distribution control.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600">
                Resolved by Channel & Distribution Architecture
              </div>
            </div>

            {/* Tile 5: Compact Tile */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  High-Intent Accounts Missed
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prospecting low-propensity accounts while active in-market buyers research alternatives undetected.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600">
                Customer Propensity Discovery
              </div>
            </div>

            {/* Tile 6: Compact Tile */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Usage-to-Revenue Gap
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High product engagement that fails to convert into paid team upgrades, renewals, or enterprise expansions.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600">
                PMF & Revenue Architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REVENUE DISCOVERY JOURNEY (HORIZONTAL PROGRESSION) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Connected Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Seven Strategic Revenue Discovery Areas
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Rather than treating growth as scattered initiatives, our framework links every stage in a coherent commercial sequence.
              </p>
            </div>
            <Link
              to="/offerings/discovery-stack"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200 shrink-0"
            >
              <span>Explore Interactive Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stepped Horizontal Progression */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {discoveryAreas.map((area, idx) => {
              const Icon = iconsMap[area.iconName] || Search;
              return (
                <Link
                  key={area.id}
                  to={`/offerings/discovery-stack#${area.id}`}
                  className="group rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-md transition-all relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600">
                        0{idx + 1}
                      </span>
                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {area.shortName}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-3 leading-relaxed">
                      {area.plainEnglishExplanation}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TWO WAYS WE DELIVER (SPLIT SECTION CONTRAST) ── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Two Ways We Deliver Value
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              <strong className="text-white">Consulting helps define the right decisions.</strong> <strong className="text-blue-400">AI and automation help operationalize suitable decisions at scale.</strong>
            </p>
          </div>

          {/* Split Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Strategy & Consulting */}
            <div className="rounded-3xl bg-slate-800/80 border border-slate-700 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                  Track 01 · Human-Led
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Strategy & Consulting
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Seasoned revenue strategists and pricing architects conduct deep diagnostics, interview buyers, build defensible ROI business cases, and formulate sales qualification rigor.
                </p>

                <div className="space-y-3 mb-8">
                  {deliveryTracksData.consulting.tangibleOutputs.slice(0, 4).map((output, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700">
                <Link
                  to="/offerings/delivery-tracks"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-white transition-colors"
                >
                  <span>Explore Consulting Services Track</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: AI & Automation */}
            <div className="rounded-3xl bg-linear-to-b from-indigo-950/60 to-slate-900 border border-indigo-800/60 overflow-hidden flex flex-col justify-between shadow-xl">
              {/* Non-people telemetry server banner */}
              <div className="h-32 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                  alt="Server Telemetry and Infrastructure"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 left-6 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-indigo-900/80">
                    Track 02 · Machine-Led
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  AI & Automation
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Intelligent agent fleets, neural customer propensity scoring, real-time intent signal routing, and continuous telemetry pipelines that execute proven revenue playbooks 24/7.
                </p>

                <div className="space-y-3 mb-8">
                  {deliveryTracksData.automation.tangibleOutputs.slice(0, 4).map((output, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-indigo-900/60">
                <Link
                  to="/offerings/delivery-tracks"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-400 hover:text-white transition-colors"
                >
                  <span>Explore AI Automation Track</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: BUSINESS SOLUTIONS (COMPACT SECTOR EXPLORER) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Industry-Specific Economics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Solutions by Business Type
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Different business models require tailored commercial strategies. Preview our verified approaches for your sector.
              </p>
            </div>
            <Link
              to="/offerings/segments"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200 shrink-0"
            >
              <span>Explore All Sector Mappings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sector Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {businessSegments.map((seg, idx) => (
              <button
                key={seg.id}
                onClick={() => setSelectedSectorPreview(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedSectorPreview === idx
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {seg.title}
              </button>
            ))}
          </div>

          {/* Active Sector Summary Panel */}
          {(() => {
            const activeSector = businessSegments[selectedSectorPreview] || businessSegments[0];
            return (
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 lg:p-10">
                <div className="max-w-3xl mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {activeSector.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {activeSector.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activeSector.subSegments.slice(0, 3).map((sub, sIdx) => (
                    <div key={sIdx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-2">
                          {sub.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {sub.businessChallenge}
                        </p>
                        {sub.discoveryQuestion && (
                          <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-100 text-[11px] text-amber-900 mb-4 font-medium italic">
                            &ldquo;{sub.discoveryQuestion}&rdquo;
                          </div>
                        )}
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                        <span>Consulting: {sub.consultingShare}%</span>
                        <span>AI: {sub.aiShare}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── SECTION 6: DISCOVERY KITS PREVIEW (CURATED 3-PACK) ── */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Fast-Start Packages
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Micro-Segment Discovery Kits
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Fixed-scope engagements designed to resolve critical revenue bottlenecks in 3 to 10 weeks.
              </p>
            </div>
            <Link
              to="/offerings/micro-segment-kits"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200 shrink-0"
            >
              <span>View All 8 Kits</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSegmentKits.slice(0, 3).map((kit) => (
              <div
                key={kit.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      Duration: {kit.duration}
                    </span>
                    <span className="text-xs font-bold text-blue-600">
                      {kit.deliveryTrack}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {kit.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mb-3">
                    {kit.targetAudience}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {kit.businessProblem}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/offerings/micro-segment-kits#${kit.id}`}
                    className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1"
                  >
                    <span>View Package Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/book-consultation?kit=${kit.id}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
                  >
                    Discuss Kit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CLOSING CTA (EXECUTIVE FINISH) ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-3">
                Next Steps
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
                Not Sure Where Your Biggest Revenue Opportunity Is?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Discuss your current commercial challenges with our revenue architecture team. We will help identify an appropriate starting point—whether that is a targeted diagnostic sprint, an automated pipeline workflow, or a custom roadmap.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm sm:text-base"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/engagement-model"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-4 rounded-xl transition-all text-sm sm:text-base border border-slate-700"
                >
                  <span>Review Engagement Models</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
