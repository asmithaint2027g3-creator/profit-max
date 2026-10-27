import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
  RefreshCw,
  Gauge,
  Activity,
  Cpu,
  Layers,
  ChevronRight,
  TrendingUp,
  Target,
  FileCheck,
  Zap,
  Award,
  Database
} from 'lucide-react';
import OriginStickySubNav from './OriginStickySubNav';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function OriginRealizationPage() {
  useEffect(() => {
    document.title = 'The Realization Layer: Six Commitment Stages | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const subNavItems = [
    { id: 'baseline', label: '1. Baseline Capture', badge: 'Stage 1' },
    { id: 'locked-targets', label: '2. Locked Targets', badge: 'Stage 2' },
    { id: 'decision-authority', label: '3. Decision Authority', badge: 'Stage 3' },
    { id: 'execution-engine', label: '4. Execution Engine', badge: 'Stage 4' },
    { id: 'proof-cadence', label: '5. Proof Cadence', badge: 'Stage 5' },
    { id: 'exit-state', label: '6. Exit State', badge: 'Stage 6' },
    { id: 'intake', label: 'Intake' }
  ];

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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE REALIZATION LAYER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              Discovery converts to revenue, not documents.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Every node measured. Every target locked. Every outcome tracked. The Realization Layer is ProfitMachines' contractual and operational guarantee that strategy never sits in a slide deck.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Lock Realization Targets</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#baseline"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore the 6 Stages</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB NAVIGATION */}
      <OriginStickySubNav
        currentPageTitle="The Realization Layer"
        items={subNavItems}
      />

      {/* =========================================================================
          STAGE 01 — BASELINE CAPTURE
      ========================================================================= */}
      <section id="baseline" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              STAGE 01
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Empirical Ground Truth
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Baseline Capture — "Every node starts by measuring the current number. No baseline, no engagement."
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                Consulting firms love ambiguity because ambiguity forgives failure. We operate under the opposite mandate: before any hypothesis is tested or playbook written, we extract raw data from your CRM, ERP, billing engines, and product telemetry to freeze the historical baseline.
              </p>
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Self-Reported Metrics:</strong> We pull direct SQL queries and raw transaction logs, removing pipeline inflation and subjective rep notes.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Seasonal Normalization:</strong> Baseline numbers are indexed against 8-quarter seasonality to ensure macroeconomic noise isn't counted as success or failure.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Executive Sign-Off:</strong> Both client CFO/CRO and ProfitMachines Principal Architect countersign the Baseline Dossier.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border border-blue-200 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Stage Deliverable</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Certified Baseline Dossier</h3>
              <p className="text-xs text-slate-600 mb-6">
                An auditable, mathematically frozen snapshot of every metric governing the engagement scope.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200 text-xs font-mono text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Baseline Audit SLA:</span>
                  <span className="text-blue-600 font-bold">10 Business Days</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Data Precision:</span>
                  <span className="text-blue-600 font-bold">Transaction-Level</span>
                </div>
                <div className="flex justify-between">
                  <span>Contractual Role:</span>
                  <span className="text-blue-600 font-bold">SOW Benchmark Root</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 02 — LOCKED TARGETS
      ========================================================================= */}
      <section id="locked-targets" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              STAGE 02
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Contractual Specificity
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Locked Targets — "Targets written into the SOW: 'recover 8 points of margin in 2 quarters,' never 'improve.'"
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                Vague aspirations like "streamline sales" or "optimize pricing" are banned from our SOWs. Every node engagement specifies an exact, bounded, verifiable metric delta with time-to-value bounds.
              </p>
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Deterministic Outcomes:</strong> Example: "Reduce stage-2 to stage-3 pipeline stall rate from 38% to under 19% within 90 days."</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>At-Risk Alignment:</strong> In outcome-based and transformation models, our fees are directly coupled to achieving these locked numbers.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border border-blue-200 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Stage Deliverable</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Contractual Target Schedule</h3>
              <p className="text-xs text-slate-600 mb-6">
                Binding agreement annex documenting milestone gates, measurement formulas, and fee release conditions.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200 text-xs font-mono text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Target Type:</span>
                  <span className="text-blue-600 font-bold">Bounded Delta (±X%)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Verification Window:</span>
                  <span className="text-blue-600 font-bold">30 / 60 / 90 Days</span>
                </div>
                <div className="flex justify-between">
                  <span>Contractual Binding:</span>
                  <span className="text-blue-600 font-bold">100% SOW Annex</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 03 — DECISION AUTHORITY
      ========================================================================= */}
      <section id="decision-authority" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              STAGE 03
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Executive Binary Mandates
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Decision Authority — "Each node ends with a named decision: enter/exit, price/hold, build/kill."
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                Discovery without decisions is intellectual entertainment. Every ORIGIN diagnostic concludes with a formal Decision Memorandum requiring an executive sponsor's binary choice on the evidence.
              </p>
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Evidence-Attached Decisions:</strong> All customer telemetry, pricing sensitivity curves, and rival teardowns are linked directly into the decision packet.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Pre-Agreed Mandates:</strong> Before diagnostic launch, executive sponsors commit in writing to act within 7 days of receiving the Decision Memo.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border border-blue-200 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Stage Deliverable</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Executive Decision Memorandum</h3>
              <p className="text-xs text-slate-600 mb-6">
                Concise 3-page decision instrument specifying capital re-allocations, policy shifts, and signed operational authorization.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200 text-xs font-mono text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Decision Formats:</span>
                  <span className="text-blue-600 font-bold">Binary (Go / No-Go)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Execution SLA:</span>
                  <span className="text-blue-600 font-bold">7 Days to Enact</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Trail:</span>
                  <span className="text-blue-600 font-bold">Permanent Board Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 04 — EXECUTION ENGINE
      ========================================================================= */}
      <section id="execution-engine" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              STAGE 04
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Autonomous Systems & Telemetry
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Execution Engine — "The Automation Track runs the playbook 24/7 after strategists leave."
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                Manual playbooks decay within 60 days. ProfitMachines installs autonomous agent fleets, machine-learning propensity scoring, and real-time CRM monitors that enforce the discovery decisions continuously.
              </p>
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Agentic SDR Fleets:</strong> High-precision autonomous outbound engaging top-decile accounts based on live intent telemetry.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Automated Discount Governance:</strong> Quoting engines that block unauthorized discounting without manual VP approvals.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border border-blue-200 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Stage Deliverable</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">The Automation Operating Stack</h3>
              <p className="text-xs text-slate-600 mb-6">
                Zero-friction integration across your CRM, data warehouse, and communications infrastructure running 24/7.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200 text-xs font-mono text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Fleet Uptime:</span>
                  <span className="text-blue-600 font-bold">99.9% Autonomous</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Integration Pattern:</span>
                  <span className="text-blue-600 font-bold">Bidirectional API / Webhook</span>
                </div>
                <div className="flex justify-between">
                  <span>Human Oversight:</span>
                  <span className="text-blue-600 font-bold">Strict Rule-Based Bounds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 05 — PROOF CADENCE
      ========================================================================= */}
      <section id="proof-cadence" className="py-20 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              STAGE 05
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Empirical Realization Reviews
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Proof Cadence — "Monthly realization reviews against locked targets. If the needle isn't moving, re-scope — never auto-renew."
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                Every 30 days, we hold a structured Realization Audit with executive leadership. We inspect variance between the frozen baseline, current telemetry, and the locked target. If an intervention underperforms, we trigger corrective sprints at our cost.
              </p>
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Leading vs Lagging Indicators:</strong> Monitoring pipeline velocity, propensity lift, and meeting yield weeks before quarterly revenue lands.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Complacency Clauses:</strong> If locked targets are off-pace by &gt; 15% after 60 days, we freeze fees and re-architect the motion.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border border-blue-200 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Stage Deliverable</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Monthly Realization Dashboard</h3>
              <p className="text-xs text-slate-600 mb-6">
                Live, executive-facing dashboard reporting target progress, delta attribution, and projected revenue realization.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200 text-xs font-mono text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Review Frequency:</span>
                  <span className="text-blue-600 font-bold">Every 30 Days</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Attendance Mandate:</span>
                  <span className="text-blue-600 font-bold">CRO / VP RevOps / Architect</span>
                </div>
                <div className="flex justify-between">
                  <span>Underperformance SLA:</span>
                  <span className="text-blue-600 font-bold">14-Day Corrective Sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 06 — EXIT STATE
      ========================================================================= */}
      <section id="exit-state" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
              STAGE 06
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Permanent Internal Capability
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Exit State — "You keep the dashboards, the playbooks, the models — and the numbers they produce."
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                We reject the traditional consulting dependency model. At the conclusion of every ORIGIN engagement, all intellectual property, data models, code repositories, automation workflows, and dashboards are transitioned 100% to your internal operators.
              </p>
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Full Internal Certification:</strong> We conduct rigorous training and certification drills with your sales, RevOps, and marketing teams.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Proprietary Lock-In:</strong> Models and workflows run inside your cloud accounts (Snowflake, BigQuery, Salesforce, HubSpot).</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border border-blue-200 backdrop-blur-xl">
              <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3">Stage Deliverable</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">Permanent Capability Transfer Package</h3>
              <p className="text-xs text-slate-600 mb-6">
                Complete documentation, runbooks, code repositories, model weights, and video certification library.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-200 text-xs font-mono text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>IP Ownership:</span>
                  <span className="text-blue-600 font-bold">100% Client Owned</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Hostage Factor:</span>
                  <span className="text-blue-600 font-bold">Zero Lock-In</span>
                </div>
                <div className="flex justify-between">
                  <span>Post-Exit Support:</span>
                  <span className="text-blue-600 font-bold">30-Day Shadow Period</span>
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
            <span>REALIZATION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Demand Realization, Not Recommendations.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to partner under a framework that contractually locks baselines and guarantees outcomes? Connect with our principal architects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="The Realization Layer"
            defaultPriority="Full ORIGIN Diagnostic"
          />
        </div>
      </section>
    </div>
  );
}
