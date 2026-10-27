import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Zap,
  BarChart3,
  Sliders,
  Cpu,
  Shield,
  ArrowUpRight,
  GitMerge,
  Workflow,
  Calendar,
  Rocket,
  Users
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function GtmTransformation() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'GTM Transformation | From Fragmented to Autonomous Revenue Architecture | ProfitMachines';
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
  }, [location.hash, location.pathname]);

  const transformationPillars = [
    {
      id: 'gtm-strategy',
      title: 'GTM Strategy & Architecture Design',
      phase: 'Phase 01 · Strategic Alignment',
      headline: 'Unified GTM Blueprint & ICP Architecture',
      metric: '100% Strategic Clarity · +80% Leadership Alignment',
      description: 'Rebuilds GTM motions from the customer backward. We define target micro-segments, design multi-tiered pricing, and eliminate conflicting executive priorities.',
      deliverables: ['Enterprise GTM Operating Blueprint', 'Role-Based ICP Definitions', 'Executive Alignment Mandate']
    },
    {
      id: 'process',
      title: 'Process Re-Engineering',
      phase: 'Phase 02 · Operational Modernization',
      headline: 'End-to-End Friction Removal & Route Optimization',
      metric: '+60% Process Efficiency · -40% Sales Cycle Duration',
      description: 'Removes handoff drag between marketing, BDRs, AEs, and customer success. Streamlines stage exit criteria, approval bottlenecks, and quoting loops.',
      deliverables: ['Stage-by-Stage SLA Contracts', 'Automated Lead Routing Architecture', 'Friction-Free Handover Protocols']
    },
    {
      id: 'multi-product',
      title: 'Multi-Product Motion Orchestration',
      phase: 'Phase 03 · Portfolio Compounding',
      headline: 'Unified Cross-Sell & Platform Expansion Models',
      metric: '+50% Average Contract Value · +40% Cross-Sell Velocity',
      description: 'Aligns multi-product portfolios so reps do not confuse buyers with multiple competing account teams. Creates packaged platform solutions that expand naturally.',
      deliverables: ['Platform Solution Packaging', 'Cross-Sell Trigger Playbooks', 'Unified Customer Account Matrix']
    },
    {
      id: 'adoption',
      title: 'Sustained Adoption & Behavioral Change',
      phase: 'Phase 04 · Organizational Embedding',
      headline: 'Competency Scoring, Telemetry & Cultural Retention',
      metric: '+80% Field Adoption Rate · +60% Technology ROI',
      description: 'Ensures tools and playbooks are actively utilized. Combines in-app telemetry tracking, field coaching certifications, and compensation alignment.',
      deliverables: ['Rep Competency Certification Framework', 'Real-Time Tool Usage Telemetry', 'Incentive Alignment Playbook']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Workflow className="w-3.5 h-3.5 text-blue-400" />
            <span>ENTERPRISE GTM TRANSFORMATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Transform Your GTM.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              From Fragmented to Unified. From Manual to Autonomous.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            End-to-end Go-to-Market transformation for scaling enterprises. From board-level strategy design through process re-engineering to sustained field adoption, we replace operational friction with compounding revenue velocity.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Plan Your Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <span>Talk to a Principal Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">+60%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Operational Process Efficiency</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">-40%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Sales Cycle Duration</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">+50%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Average Contract Value</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">+80%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Sustained Field Adoption</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>THE TRANSFORMATION FAILURE TRAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why 70% of GTM Transformations Stall
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Most enterprise transformations fail because they treat GTM redesign as a software tool installation or a high-level slide deck rather than an operational behavioral system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Departmental Silos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Marketing, sales, customer success, and product maintain separate metrics, competing software platforms, and contradictory customer definitions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Execution Inefficiency</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Handoffs between SDRs and AEs leak 35% of qualified leads due to vague qualification criteria and manual spreadsheet updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Severe Adoption Drop-off</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Six months after deploying expensive sales intelligence tools, less than 25% of reps actively log in, abandoning the investment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Change Fatigue</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Teams suffer through constant restructuring and new playbooks without executive enforcement, resulting in quiet non-compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 TRANSFORMATION PILLARS ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <GitMerge className="w-3.5 h-3.5" />
              <span>TRANSFORMATION PHASES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The 4 Pillars of GTM Transformation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A phased architecture moving your revenue engine from fragmented point tools to an integrated, highly accountable machine.
            </p>
          </div>

          <div className="space-y-6">
            {transformationPillars.map((pillar) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 scroll-mt-28"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {pillar.phase}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      {pillar.metric.split('·')[0]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">{pillar.title}: {pillar.headline}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{pillar.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {pillar.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="text-xs font-mono px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                        ✓ {del}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 text-left lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Contracted Target</div>
                  <div className="text-base font-extrabold text-slate-900 font-mono mt-1 text-blue-600">
                    {pillar.metric.split('·')[1] || pillar.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: TRANSFORMATION TIMELINE & ROADMAP ── */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>90-DAY TRANSFORMATION ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              The 90-Day Architecture Flight Plan
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Structured rollout with explicit proof gates and contractual checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700">
              <div className="text-xs font-mono text-blue-400 uppercase font-bold mb-2">Days 01 – 30</div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Baseline Audit & Blueprint</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Audit every customer journey touchpoint, pipeline handoff, and pricing schedule. Lock baseline metrics and produce the Enterprise GTM Blueprint.
              </p>
              <div className="pt-4 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
                Gate 1: Executive Blueprint Approval
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700">
              <div className="text-xs font-mono text-blue-400 uppercase font-bold mb-2">Days 31 – 60</div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Re-Engineering & Pilot Pod</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Deploy automated routing, configure CPQ discount floors, and pilot the re-engineered sales motion across a controlled 5-rep pod.
              </p>
              <div className="pt-4 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
                Gate 2: Pilot Velocity & Margin Verification
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700">
              <div className="text-xs font-mono text-blue-400 uppercase font-bold mb-2">Days 61 – 90</div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Full Fleet Scaled Adoption</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Roll out across the entire global organization. Certify reps, activate autonomous agent fleets, and lock continuous telemetry reporting.
              </p>
              <div className="pt-4 border-t border-slate-700/60 text-xs font-mono text-emerald-400">
                Gate 3: Full SOW Realization Review
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: TRANSFORMATION METRICS BEFORE/AFTER ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>MEASURED RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Transformation Dimensions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Measured before and after across global B2B enterprise transformation engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-600 font-mono mb-2">+60%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Process Velocity</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Elimination of redundant approval layers and manual routing bottlenecks.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">-40%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Sales Cycle Time</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Compressed from initial qualification call to commercial sign-off.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-purple-600 font-mono">+50%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Contract Size (ACV)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Driven by multi-product solution packaging rather than single-point sales.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-3xl font-extrabold text-indigo-600 font-mono">+80%</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">System Adoption</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Verified weekly active utilization of GTM architecture and playbooks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSFORMATION ARCHITECTURE INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Unify and Scale Your Go-to-Market Engine?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Schedule a confidential GTM transformation diagnostic with our Senior Revenue Architects to model velocity lift and efficiency gains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="GTM Transformation Architecture Session"
            defaultObjective="GTM Transformation"
          />
        </div>
      </section>
    </div>
  );
}
