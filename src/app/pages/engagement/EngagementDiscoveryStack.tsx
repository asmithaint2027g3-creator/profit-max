import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Search,
  Target,
  DollarSign,
  Network,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  HelpCircle,
  CheckCircle2,
  Cpu,
  UserCheck
} from 'lucide-react';
import EngagementSubNav from '../../components/EngagementSubNav';
import { kpiLibraryTable } from '../../../data/engagementDossierData';

const discoveryLayersData = [
  {
    id: "L1",
    name: "Market Discovery",
    investigates: "Whitespace accounts, unmapped addressable opportunity, profit pool concentration, and segment margin economics.",
    businessQuestions: "Where is the revenue we haven't mapped? Which customer sub-segments carry real contribution margin?",
    leadingIndicators: "Whitespace accounts mapped, third-party intent signal velocity, account coverage ratios.",
    laggingIndicators: "New-segment sourced pipeline, gross margin contribution by sub-segment.",
    exampleSuccessBar: "≥200 qualified whitespace accounts mapped; live market rescoring model deployed.",
    relevantModels: "E1 Advisory & Insight, E2 Consulting (Revenue Leak / TAM Mapping), E6 Joint Risk-Sharing.",
    tracks: "Track A (TAM / Whitespace Sizing) + Track B (Intent Telemetry & Sizing Models)",
    icon: Search
  },
  {
    id: "L2",
    name: "Demand Discovery",
    investigates: "Inbound vs outbound pipeline source quality, buyer messaging resonance, unarticulated customer pain points, and stage-slip velocity.",
    businessQuestions: "What are buyers struggling to articulate? Why are qualified opportunities stalling in early stages?",
    leadingIndicators: "Positive reply rate, qualified meeting rate, signal-to-MQL conversion speed.",
    laggingIndicators: "Pipeline created ($), sales velocity, customer acquisition cost (CAC).",
    exampleSuccessBar: "+25% reply rate vs control; ≥30 qualified meetings generated inside 6 weeks.",
    relevantModels: "E3 PoV (Autonomous SDR), E8 Forward Deployed Accelerators, E5 Outcome-Based.",
    tracks: "Track A (Messaging & Offer Architecture) + Track B (Autonomous SDR Fleets)",
    icon: Target
  },
  {
    id: "L3",
    name: "Value Discovery",
    investigates: "Economic business cases, pricing integrity, discount patterns, sales qualification rigor (MEDDPICC), and win probability.",
    businessQuestions: "How do we prove ROI before the purchase order? Why are reps conceding on price?",
    leadingIndicators: "Business-case attach rate, pre-PO ROI model usage, stage qualification gate adherence.",
    laggingIndicators: "Win rate, average contract value (ACV), sales cycle length, discount compression.",
    exampleSuccessBar: "+15 percentage points in POC-to-close conversion; discount creep reduced by ≥30%.",
    relevantModels: "E2 Consulting (Sales System Design, Pricing & Packaging), E3 PoP (Deal Velocity), E5 Outcome-Based.",
    tracks: "Track A (Value Engineering & Packaging) + Track B (Dynamic Deal Room & ROI Agents)",
    icon: DollarSign
  },
  {
    id: "L4",
    name: "Channel Discovery",
    investigates: "Partner economics, distribution dependency, sales territory coverage, co-sell attribution, and multi-channel margin capture.",
    businessQuestions: "How do we distribute without dangerous single-platform dependency? Are partner commissions profitable?",
    leadingIndicators: "Channel-attributed demand, partner-sourced SQLs, active co-sell registrations.",
    laggingIndicators: "Blended CAC across channels, gross margin by channel, partner retention.",
    exampleSuccessBar: "20% lower dependency on primary channel; partner margin model validated.",
    relevantModels: "E2 Consulting (Channel Economics), E3 PoV (Channel Mix), E6 Joint Risk-Sharing.",
    tracks: "Track A (Partner Program Design) + Track B (Channel Mix Optimization Engine)",
    icon: Network
  },
  {
    id: "L5",
    name: "Competitive Discovery",
    investigates: "Win/loss teardowns, competitive displacement opportunities, objection patterns, and feature parity vs differentiation perceptions.",
    businessQuestions: "Why do we win and lose against specific rivals? How do we counter late-stage competitor FUD?",
    leadingIndicators: "Battlecard usage in live calls, competitive objection handling confidence, competitive mentions.",
    laggingIndicators: "Contested deal win rate, competitive displacement revenue, loss rate to status quo.",
    exampleSuccessBar: "+10 percentage points in contested-deal win rate vs top named competitor.",
    relevantModels: "E1 Advisory, E2 Consulting (Win/Loss Teardown), E8 Forward Deployed (Competitive Displacement).",
    tracks: "Track A (Positioning Thesis & Playbooks) + Track B (Competitive Intelligence Agents)",
    icon: ShieldCheck
  },
  {
    id: "L6",
    name: "Customer Discovery",
    investigates: "Ideal Customer Profile (ICP) criteria, buying committee dynamics, champions vs blockers, and account propensity scoring.",
    businessQuestions: "Who is actually ready to buy right now? Who inside the committee blocks decisions?",
    leadingIndicators: "Propensity-score coverage across CRM, lead-to-rep routing latency, committee engagement depth.",
    laggingIndicators: "SQL-to-close rate, customer lifetime value (LTV), payback period.",
    exampleSuccessBar: "2× qualification accuracy vs baseline; sub-second routing of high-intent accounts.",
    relevantModels: "E2 Consulting (ICP Framework), E3 PoV (Propensity Model), E7 Resident Growth Architects.",
    tracks: "Track A (Buying-Committee Diagnostic) + Track B (Propensity & Lookalike Engine)",
    icon: Users
  },
  {
    id: "L7",
    name: "Product-Market Fit Discovery",
    investigates: "Product telemetry linked to commercial revenue, feature monetization, expansion cliffs, and account retention triggers.",
    businessQuestions: "What should we sell, to whom, and at what price? Which usage signals predict paid expansion?",
    leadingIndicators: "Telemetry coverage of active accounts, expansion trigger alerts generated, feature adoption depth.",
    laggingIndicators: "Net Revenue Retention (NRR), gross churn rate, expansion ACV, R&D commercial payback.",
    exampleSuccessBar: "Measurable conversion lift in pilot cohort; automated upsell alerts active.",
    relevantModels: "E3 PoV (Usage Telemetry), E4 Transformation (Revenue OS), E5 Outcome-Based.",
    tracks: "Track A (Offer & Bundle Architecture) + Track B (Usage-to-Revenue Signal Pipelines)",
    icon: Sparkles
  }
];

export default function EngagementDiscoveryStack() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Header Banner with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="Telemetry Architecture Framework"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Engagement Layering Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              The Seven Revenue Discovery Layers
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
              The seven-layer discovery stack helps organizations identify market opportunity, demand signals, value gaps, channel performance, competitive pressures, customer potential, and product-market fit. In our engagement architecture, these layers define the diagnostic scope, baseline metrics, and delivery tracks.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-inner">
              <span>Detailed service specifications and product definitions:</span>
              <Link to="/offerings/discovery-stack" className="text-blue-400 hover:text-blue-300 font-bold shrink-0 flex items-center gap-1">
                <span>View Offerings Discovery Stack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seven Detailed Discovery Layers */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
        {discoveryLayersData.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-xs overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{layer.name}</h2>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{layer.investigates}</p>
                  </div>
                </div>

                <Link
                  to="/engagement-model/models"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-2xs self-start sm:self-auto"
                >
                  Match Engagement Model &rarr;
                </Link>
              </div>

              {/* Body Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">

                {/* Leading Indicators */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-slate-700 block mb-2 font-mono uppercase text-[11px]">
                      Leading Indicators:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {layer.leadingIndicators}
                    </p>
                  </div>
                </div>

                {/* Lagging Indicators */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-slate-700 block mb-2 font-mono uppercase text-[11px]">
                      Lagging Indicators:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {layer.laggingIndicators}
                    </p>
                  </div>
                </div>

                {/* KPI Example Success Bar */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-emerald-950 block mb-2 font-mono uppercase text-[11px]">
                      Example Success Bar:
                    </span>
                    <p className="text-emerald-900 font-semibold leading-relaxed">
                      {layer.exampleSuccessBar}
                    </p>
                  </div>
                </div>
              </div>

              {/* Engagement Model & Delivery Track Footer */}
              <div className="p-6 sm:p-8 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <strong className="text-slate-800">Relevant Models:</strong>{' '}
                  <span className="text-slate-600">{layer.relevantModels}</span>
                </div>
                <div>
                  <strong className="text-slate-800">Track Capabilities:</strong>{' '}
                  <span className="text-blue-600 font-medium">{layer.tracks}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Ready to Scope an Engagement Around a Discovery Layer?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            We map your current data readiness, baseline metrics, and primary bottleneck to select the right model and discovery focus.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-xs sm:text-sm"
            >
              <span>Schedule Architecture Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/engagement-model/models"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl transition-all text-xs sm:text-sm border border-slate-700"
            >
              <span>Explore Engagement Models</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
