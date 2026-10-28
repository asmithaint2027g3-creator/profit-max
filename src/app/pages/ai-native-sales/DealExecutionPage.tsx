import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Activity,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  Lock,
  Layers,
  Cpu,
  BarChart3,
  Network,
  Clock,
  UserCheck,
  Swords,
  Eye,
  FileText
} from 'lucide-react';

import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function DealExecutionPage() {
  useEffect(() => {
    document.title = 'Deal Execution & Enablement | ProfitMachines AI Native Sales';
    window.scrollTo(0, 0);
  }, []);



  const committeeArchitecture = [
    {
      title: 'Buying Committee Mapping Engines',
      tech: 'Enterprise Stakeholder Graph Ingestion',
      description: 'Automatically discovers, parses, and maps all 6-10 executive stakeholders required for enterprise sign-off across Economic Buyer, Technical Lead, Security Officer, Legal, and End-User champions.',
      deliverable: 'Live interactive buying committee relationship map in CRM.'
    },
    {
      title: 'Stakeholder Influence Graphs',
      tech: 'Directed Graph Centrality Analytics',
      description: 'Calculates the relative political influence and informal authority of each stakeholder based on meeting participation, email engagement frequency, and organizational seniority.',
      deliverable: 'Visual influence vectors highlighting the true hidden decision-maker.'
    },
    {
      title: 'Consensus Scoring Algorithms',
      tech: 'Multi-Party Sentiment Fusion',
      description: 'Aggregates sentiment, content consumption, and objection telemetry across all committee members into a unified Deal Consensus Index (0-100%).',
      deliverable: 'Real-time alert when a key functional leader (e.g. InfoSec) is unengaged.'
    },
    {
      title: 'Champion Identification Agents',
      tech: 'Behavioral Commitment Classifier',
      description: 'Verifies whether your purported "champion" actually possesses the organizational power and willingness to secure internal budget, or is merely a curious user.',
      deliverable: 'Objective Champion Validation Score preventing false pipeline confidence.'
    }
  ];

  const repTelemetryComponents = [
    {
      title: 'Objective Rep Activity Tracking',
      desc: 'Replaces self-reported sales activity logs with passive, real-time telemetry tracking talk-to-listen ratios, follow-up turnaround speed, and objection resolution efficiency.'
    },
    {
      title: 'Productivity & Pacing Scoring',
      desc: 'Evaluates each account executive’s active pipeline against mathematical benchmark velocity models to detect coaching needs weeks before missed quotas.'
    },
    {
      title: 'Pipeline Contribution Attribution',
      desc: 'Multi-touch attribution identifying the exact enablement assets, automated playbooks, and rep actions that directly correlate with won enterprise ARR.'
    },
    {
      title: 'Real-Time Coaching Trigger Identification',
      desc: 'Monitors active call transcripts and email cadences for critical coaching moments (missed MEDDPICC criteria, weak competitor rebuttals, or pricing concessions).'
    },
    {
      title: 'Performance Analytics Dashboards',
      desc: 'Unified executive dashboard for CROs and VPs of Sales providing transparent, empirical performance telemetry across all reps, teams, and territories.'
    }
  ];

  const battlecardArchitecture = [
    {
      title: 'Competitive Intelligence Agents',
      tech: 'Continuous Competitor Web & Regulatory Scraper',
      description: 'Continuously monitors rival websites, release notes, job boards, pricing pages, customer review complaints, and executive hires in real time.',
      advantage: 'Zero lag between a competitor’s product change and your rep’s talk-track.'
    },
    {
      title: 'Battlecard Autopilots',
      tech: 'Dynamic Battlecard Synthesis Engine',
      description: 'Automatically updates competitive positioning battlecards, pricing matrices, and technical displacement arguments based on verified market telemetry.',
      advantage: 'Eliminates outdated static PDF battlecards that reps ignore.'
    },
    {
      title: 'Objection-Response Generation',
      tech: 'Context-Aware Competitive Rebuttal Engine',
      description: 'Provides reps with exact, legally verified talk-tracks to counter competitor FUD (Fear, Uncertainty, Doubt) and highlight technical architectural advantages.',
      advantage: 'Reps deliver authoritative, boardroom-grade rebuttals on live calls.'
    },
    {
      title: 'Rep-Surface Content Delivery',
      tech: 'In-Call Telemetry & HUD Integration',
      description: 'Pops contextually relevant battlecards and customer ROI proof points onto the rep’s screen the second a rival brand is mentioned by a buyer.',
      advantage: 'Zero searching for collateral during high-stakes closing discussions.'
    },
    {
      title: 'Win/Loss Analysis Integration',
      tech: 'Closed-Loop Competitive Feedback Loop',
      description: 'Systematically ingests post-deal win/loss interview findings and CRM notes to continuously refine rival counter-positioning across the fleet.',
      advantage: 'Institutional memory that compounds with every deal completed.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      
      {/* ── HERO BANNER ── */}
      <section className="relative bg-slate-950 text-white py-14 lg:py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/40" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>Category 03 · Deal Execution & In-Flight Enablement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Deal Execution & <span className="text-blue-400">Buying Committee Visibility</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal mb-8">
              Multi-threaded committee consensus mapping, real-time rep telemetry, and dynamic battlecard autopilots driving decisive win rates in complex enterprise sales cycles.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-bold">+15 Pts Contested Win Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-white font-bold">50% Faster Rep Ramp Times</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-white font-bold">+10 Pts vs. Specific Rivals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: BUYING COMMITTEE VISIBILITY (#committee) ── */}
      <section id="committee" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section A · Multi-Stakeholder Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Buying Committee Consensus Visibility
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Enterprise deals are decided by 6 to 10 distinct stakeholders across Finance, IT, Security, Legal, and Operations. We eliminate single-threaded blind spots through automated multi-threaded mapping and continuous consensus scoring:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {committeeArchitecture.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1">{item.title}</h3>
                  <div className="text-[11px] font-mono text-blue-600 mb-3">{item.tech}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-800">
                  <span className="text-blue-600 font-mono text-[10px] block uppercase">Systemic Deliverable:</span>
                  {item.deliverable}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                VALIDATED OUTCOME
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                +15 Percentage Points Win Rate Lift in Contested Deals
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                By proactively surfacing unengaged committee members and delivering persona-tailored ROI decks before board review, deals that would otherwise slip into &ldquo;no decision&rdquo; are systematically closed.
              </p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <div className="text-4xl font-black text-emerald-400 font-mono">+15%</div>
              <div className="text-[11px] font-mono text-slate-400">Win Rate Lift</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION B: REAL-TIME REP TELEMETRY (#telemetry) ── */}
      <section id="telemetry" className="scroll-mt-28 py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section B · Rep Telemetry & Productivity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Real-Time Rep Telemetry & Productivity Architecture
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Continuous, objective measurement of rep activity, conversational sentiment, and pipeline progression — replacing biased manager perception with empirical telemetry:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {repTelemetryComponents.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                      TELEMETRY MODULE // 0{idx + 1}
                    </span>
                    <Activity className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-blue-900/90 text-white border border-blue-700/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-blue-200 uppercase tracking-wider block">
                SPEED TO QUOTA
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                50% Faster Rep Ramp Times with Data-Driven Coaching
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
                Incoming reps receive instant, in-flight feedback on MEDDPICC criteria adherence and objection handling, reaching full quota productivity in under 60 days rather than 6-9 months.
              </p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <div className="text-4xl font-black text-white font-mono">50%</div>
              <div className="text-[11px] font-mono text-blue-200">Faster Ramp</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION C: DYNAMIC BATTLECARDS (#battlecards) ── */}
      <section id="battlecards" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section C · Competitive Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Dynamic, Real-Time Competitive Battlecards
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real-time competitive intelligence monitoring rival pricing, product messaging, and market moves — delivering instant displacement positioning directly to the rep during active sales cycles:
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {battlecardArchitecture.map((bc, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      BATTLECARD LAYER 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {bc.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 bg-white inline-block px-2.5 py-1 rounded-md border border-slate-200">
                      {bc.tech}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {bc.description}
                    </p>

                    <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-900">
                      <Swords className="w-4 h-4 text-blue-600" />
                      <span>Competitive Moat: {bc.advantage}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Metric Highlight Box */}
          <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
                COMPETITIVE DISPLACEMENT
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                +10 Percentage Points Win Rate vs. Specific Named Rivals
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Equip your sales force with factual, audit-grade architectural differentiation matrices that systematically undermine competitor claims on architecture, security, and total cost of ownership.
              </p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <div className="text-4xl font-black text-purple-400 font-mono">+10%</div>
              <div className="text-[11px] font-mono text-slate-400">Rival Win Rate Lift</div>
            </div>
          </div>

          {/* Final CTA Diagnostic Form */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                  EXECUTION DIAGNOSTIC
                </span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Audit Your Deal Execution & Committee Visibility
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Discover where your pipeline is leaking due to single-threaded committee coverage or slow rep ramp times. Request a confidential deal execution audit today.
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Buying Committee Multi-Thread Diagnostic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dynamic Battlecard Blueprint for Top 3 Rivals</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <AiSalesIntakeForm
                  pageContext="Deal Execution & Enablement"
                  defaultService="Deal Execution & Buying Committee Telemetry"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
