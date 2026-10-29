import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Layers, 
  AlertTriangle, 
  DollarSign, 
  MessageSquare, 
  Award, 
  Sliders, 
  ChevronRight,
  BookOpen,
  PieChart,
  Target,
  FileCheck,
  Percent,
  Compass,
  AlertCircle,
  Activity,
  Cpu,
  BarChart3
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export const SalesExecutionPage: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const dealStages = [
    {
      stage: "Discovery & Qualification",
      aiAction: "Live Call Copilot & Real-Time Objection Battlecards",
      telemetry: "Transcription + Sentiment Latency <400ms",
      impact: "100% MEDDPICC coverage captured"
    },
    {
      stage: "Solution Architecture",
      aiAction: "Autonomous Technical Fit & Gap Analysis",
      telemetry: "Cross-checks against 200+ product releases",
      impact: "Zero engineering delays in pre-sales"
    },
    {
      stage: "Proposal & RFP Assembly",
      aiAction: "Instant Multi-Modal Proposal Generation",
      telemetry: "Synthesizes customer notes into 40-page bespoke RFP",
      impact: "80% reduction in turnaround time"
    },
    {
      stage: "Pricing & Margin Defense",
      aiAction: "Dynamic Margin Optimization & Discount Rules",
      telemetry: "Algorithmic win probability vs price sensitivity",
      impact: "5-10 pts gross margin preserved"
    },
    {
      stage: "Closing & Contract",
      aiAction: "Predictive Redlining & Clause Risk Scorer",
      telemetry: "Monitors buyer legal review velocity",
      impact: "50% reduction in deal slippage"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">

      {/* Hero Section - Command Center Style */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px' 
          }} 
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-blue-600/15 to-indigo-600/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-mono tracking-wider mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            CAPABILITY PILLAR 03 OF 06
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            AI Sales Execution: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">Accelerate Every Deal, Predict Every Outcome</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            From opportunity qualification to proposal generation to pricing optimization — autonomous intelligence that shortens cycles, increases win rates, and protects margins across every deal stage.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#intake-form" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200"
            >
              Schedule Sales Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/ai-native-sales" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium transition-all"
            >
              Explore Other Capabilities
            </Link>
          </div>

          {/* Interactive Deal Timeline Acceleration Visual */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Interactive Stage Navigator</span>
                <h3 className="text-lg font-semibold text-white mt-1">Autonomous Deal Progression & Acceleration Points</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Average sales cycle compression: 50%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {dealStages.map((st, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all text-left relative group ${
                    activeStage === idx 
                      ? 'bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-950/40 ring-1 ring-blue-500/50' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[11px] font-mono text-blue-400 block mb-1">{st.stage}</span>
                  <h4 className="text-xs font-semibold text-white mb-2 leading-tight">{st.aiAction}</h4>
                  <div className="text-[10px] text-slate-400 font-mono mt-3 pt-2 border-t border-slate-800 group-hover:text-slate-300">
                    {st.impact}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/60">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Telemetry Stream for Selected Stage</span>
                  <p className="text-sm text-slate-200 font-medium">{dealStages[activeStage].telemetry}</p>
                </div>
              </div>
              <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                Deterministic SLA: Real-Time Synced
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 1: Opportunity Intelligence */}
      <section id="opportunity" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                <Target className="w-3.5 h-3.5" />
                Opportunity Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Real-Time Deal Health with Predictive Intervention
              </h2>
              <p className="text-sm text-blue-700 font-mono mt-2">
                Core Function: Real-time deal health monitoring with predictive intervention.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Removes subjective rep optimism from the CRM. Calculates win probability mathematically based on committee engagement cadence, champion power, and historical close telemetry.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-blue-600">90%+</div>
                <div className="text-xs text-slate-600 mt-1">Forecast accuracy achieved across mid-market and enterprise deals</div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "We didn't know the deal was at risk until the quarter ended"
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Deal Qualification</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated MEDDPICC scoring with continuous re-evaluation across all deal stages and buyer interactions.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Deal Scoring</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Predictive close probability based on behavioral signals, stakeholder response velocity, and historical patterns, not rep gut feel.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 w-fit mb-4">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Risk Prediction</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Early detection of deals at risk of stalling or loss, surfacing warning indicators weeks before quarter-end.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Pipeline Visibility</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Real-time, mathematically verified pipeline health across all stages with automated prescriptive next actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 2: Proposal Intelligence */}
      <section id="proposal" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">AI Proposal Generation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Custom proposals generated in minutes, not days, synthesizing discovery notes and verified case studies.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Quote Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Dynamic quote creation with real-time pricing and configuration, removing manual CPQ bottlenecks.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">RFP Response Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous completion of technical and security RFPs with 90%+ compliance accuracy.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Contract Generation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated contract drafting with legal compliance checks, custom addendums, and direct e-signature routing.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
                <FileText className="w-3.5 h-3.5" />
                Proposal Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Winning Proposals, Quotes, and Contracts in Minutes
              </h2>
              <p className="text-sm text-indigo-700 font-mono mt-2">
                Core Function: Autonomous generation of winning proposals, quotes, and contracts.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Removes the administrative bottleneck that stalls sales momentum. Automatically assembles hyper-personalized, technically verified proposals while buyer interest is at its absolute peak.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-indigo-600">80%</div>
                <div className="text-xs text-slate-600 mt-1">Reduction in quote-to-proposal generation time</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Sales reps spent 3 days building proposals instead of selling"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 3: Pricing Intelligence */}
      <section id="pricing" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Percent className="w-3.5 h-3.5" />
                Pricing Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Data-Driven Pricing that Maximizes Enterprise Margins
              </h2>
              <p className="text-sm text-emerald-700 font-mono mt-2">
                Core Function: Data-driven pricing that maximizes margin without sacrificing win rate.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Prevents reps from leaving profit on the table. Balances deal velocity with margin optimization by calculating the exact concession trade-offs required to win without sacrificing profitability.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-emerald-600">5-10 points</div>
                <div className="text-xs text-slate-600 mt-1">Gross margin recovery without sacrificing win rate</div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Reps were giving away 20% discounts without approval or justification"
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Dynamic Pricing</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Real-time price optimization based on willingness-to-pay signals, buying urgency, and historical win patterns.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 w-fit mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Discount Governance</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated discount approval workflows with margin protection, requiring reciprocal concessions on terms.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Revenue Optimization</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Price point testing and optimization across segments to systematically extract maximum lifetime enterprise value.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 w-fit mb-4">
                  <PieChart className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Margin Intelligence</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Real-time margin tracking and leakage prevention across service scopes, third-party licenses, and implementation fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 4: Sales Enablement */}
      <section id="enablement" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">AI Sales Playbooks</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Context-aware playbooks that adapt dynamically to deal stage, competitive presence, and buyer stakeholder personas.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Conversation Intelligence</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Real-time analysis of sales calls with live coaching prompts, sentiment indicators, and instant meeting synthesis.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Sales Coaching</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous coaching based on performance patterns, objection handling gaps, and top-performer benchmark transcripts.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Competitive Battlecards</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Live battlecards that update within 10 days of competitor moves, pricing changes, or feature rollouts.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
                <Compass className="w-3.5 h-3.5" />
                Sales Enablement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Coaching and Battlecards at the Exact Moment of Need
              </h2>
              <p className="text-sm text-purple-700 font-mono mt-2">
                Core Function: Real-time coaching, battlecards, and playbooks delivered at the moment of need.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Standardizes top-performer behavior across the entire sales organization. Pushes live conversational prompts, objection rebuttals, and pricing justification straight to reps in active calls.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-purple-600">10-15%</div>
                <div className="text-xs text-slate-600 mt-1">Win rate improvement in head-to-head competitive deals</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Reps were using battlecards from two years ago that didn't match current market"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Outcomes Grid */}
      <section id="outcomes" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold">Verified Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Audited Sales Execution Performance</h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Production telemetry across enterprise sales organizations powered by our autonomous execution engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
              <div className="text-4xl font-extrabold text-blue-600">
                50%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Shorter Sales Cycles</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Reduction in median days from initial discovery session to signed enterprise contract.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
              <div className="text-4xl font-extrabold text-indigo-600">
                10-15%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Win Rate Lift</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Improvement in head-to-head competitive deals through live objection coaching and rapid proposals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-sky-300 transition-all">
              <div className="text-4xl font-extrabold text-sky-600">
                80%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Proposal Turnaround</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Reduction in quote-to-proposal generation time for complex enterprise proposals and RFPs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-4xl font-extrabold text-emerald-600">
                5-10 pts
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Gross Margin Recovery</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Gross margin recovery without sacrificing win rate via dynamic pricing and concession governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-20 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Autonomous Interoperability</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Related Revenue Capabilities</h2>
            </div>
            <Link 
              to="/ai-native-sales" 
              className="mt-4 sm:mt-0 text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
            >
              Back to AI Native Sales Hub
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/ai-native-sales/revenue-intelligence"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-xs font-mono text-blue-400 mb-2">Capability Pillar 01</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                Revenue Intelligence
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Competitive intelligence feeds live battlecards, while buyer intent telemetry powers deal risk calculations.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                Explore Revenue Intelligence <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/prospecting"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-xs font-mono text-blue-400 mb-2">Capability Pillar 02</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                AI Prospecting & Pipeline
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Delivers qualified pipeline with complete account intelligence and stakeholder maps into active deal stages.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                Explore AI Prospecting <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/agents"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-xs font-mono text-blue-400 mb-2">Capability Pillar 05</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                AI Sales Agents
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                The autonomous AI Sales Agent coordinates proposal drafts, follow-up cadences, and meeting debriefs with human review.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                Explore AI Sales Agents <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA & Confidential Intake Form */}
      
      {/* ── KPI METRICS & MEASUREMENT SPECIFICATION ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>CORE PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Metrics That Matter: Measurable KPI Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every AI Sales Execution capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Velocity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">50% Shorter Cycles</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Sales Cycle Compression</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> [(Historic Average Cycle Days - AI-Assisted Cycle Days) / Historic Days] × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage reduction in calendar days required to progress opportunities from discovery to contract close.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Accelerates capital collection, increases annual quota capacity, and minimizes executive champion churn risk.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Conversion Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">+10-15% Win Rate Gain</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Opportunity Win Rate Lift</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Won Opportunities Assisted by Deal Co-Pilots / Total Closed Proposals) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Close rate achieved on competitive proposals leveraging automated battlecards and deal intelligence.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Directly converts pipeline volume into recognized revenue, improving ROI on all demand generation.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Progression Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;70% Conversion Gate</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Meeting-to-Proposal Conversion</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Discovery Meetings Advancing to Formal Commercial Proposal / Total Held) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Efficiency of diagnosing customer requirements and delivering tailored commercial proposals rapidly.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Eliminates mid-funnel stalls where prospects lose momentum due to delayed proposal turnaround.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Expansion Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Value-Based Pricing Lift</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Average Contract Value (ACV)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Closed ARR / Total Number of Executed Enterprise Agreements
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Average annual recurring revenue secured across enterprise customer contracts.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Maximizes customer willingness-to-pay through dynamic pricing guardrails and multi-tier solution packaging.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Productivity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;80% Customer Facing Time</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Active Selling Time Ratio</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Hours Spent in Direct Customer Dialogue & Strategy / Total Working Hours) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of an Account Executive’s weekly schedule freed from manual administrative CRM chores.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Transforms sales rep economics; doubling customer-facing hours directly drives higher quota attainment.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Certainty Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;5% Forecast Variance</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Stochastic Forecast Precision</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> 1 - (|Machine-Predicted Pipeline Commit - Actual Closed Book| / Predicted Commit)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Algorithmic accuracy of quarterly closing revenue projections based on multi-factor deal signals.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Replaces subjective rep optimism with mathematical rigor, giving the board true forecast certainty.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake-form" className="py-24 relative bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Accelerate Every Deal?
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Schedule a Sales Audit with our principal architects to engineer deterministic sales execution across your enterprise pipeline.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Schedule Sales Audit
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Talk to a Principal Architect
              </span>
            </div>
          </div>

          <AiSalesIntakeForm />
        </div>
      </section>
    </div>
  );
};

export default SalesExecutionPage;
