import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Sparkles,
  HelpCircle,
  TrendingUp,
  FileCheck,
  Check,
  Zap,
  Briefcase,
  GitBranch,
  Repeat,
  ArrowDown
} from 'lucide-react';
import OfferingsSubNav from '../components/OfferingsSubNav';
import { deliveryTracksData } from '../../data/offeringsCleanContent';

export default function OfferingsDeliveryTracks() {
  const [selectedAssessmentPains, setSelectedAssessmentPains] = useState<string[]>([]);
  const consulting = deliveryTracksData.consulting;
  const automation = deliveryTracksData.automation;

  const assessmentQuestions = [
    { id: 'p1', text: 'We are unsure why deals are stalling or why our win-rate is declining against competitors.', type: 'consulting' },
    { id: 'p2', text: 'Our sales team spends 15+ hours a week on manual prospect research and email outreach.', type: 'automation' },
    { id: 'p3', text: 'We suffer from discount creep and lack a standardized pricing and packaging strategy.', type: 'consulting' },
    { id: 'p4', text: 'We have product usage data but no automated alerts when accounts are ready for an upsell.', type: 'automation' },
    { id: 'p5', text: 'We want to transition from mid-market deals to enterprise contracts requiring CFO-level ROI proof.', type: 'consulting' },
    { id: 'p6', text: 'Marketing spend is allocated across channels with delayed or inaccurate contribution margin attribution.', type: 'automation' }
  ];

  const toggleAssessmentPain = (id: string) => {
    setSelectedAssessmentPains((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const consultingCount = selectedAssessmentPains.filter(
    (id) => assessmentQuestions.find((q) => q.id === id)?.type === 'consulting'
  ).length;

  const automationCount = selectedAssessmentPains.filter(
    (id) => assessmentQuestions.find((q) => q.id === id)?.type === 'automation'
  ).length;

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
            alt="Dual Track Infrastructure Systems"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span>Dual Delivery Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Two Specialized Delivery Tracks
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
              ProfitMachines operates through two clearly differentiated disciplines: <strong className="text-white font-semibold">Strategy & Consulting</strong> and <strong className="text-white font-semibold">AI & Automation</strong>. Consulting defines the right decisions. AI and automation operationalize suitable decisions at scale.
            </p>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl shadow-inner">
              <strong className="text-blue-400 font-semibold block mb-0.5">Flexible Engagement Structure:</strong>
              Every business situation is distinct. Some clients engage solely for human-led consulting diagnostics, others deploy our software automation agents into existing playbooks, and many combine both into a sequenced hybrid model.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: SPLIT-SCREEN COMPARISON ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
          {/* Left Screen: Strategy & Consulting (Light Editorial) */}
          <div className="bg-white p-8 sm:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-3">
                Track One · Strategy & Consulting
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Human-Led Strategic Decisions
              </h2>
              <p className="text-sm font-semibold text-slate-700 mb-4">
                {consulting.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                {consulting.description}
              </p>

              {/* Useful When */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-3">
                  When Consulting Is Most Valuable:
                </span>
                <ul className="space-y-2.5">
                  {consulting.whenUseful.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tangible Outputs */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-3">
                  Tangible Deliverables & Assets:
                </span>
                <ul className="space-y-2">
                  {consulting.tangibleOutputs.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-600">
              <strong className="text-slate-900 block font-semibold mb-1">How It Prepares for Automation:</strong>
              {consulting.howItComplements}
            </div>
          </div>

          {/* Right Screen: AI & Automation (Dark Technological Contrast) */}
          <div className="bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="h-40 w-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="AI Telemetry and Server Infrastructure"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              <div className="absolute top-6 left-8 flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
                  Track Two · AI & Automation
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-14 pt-2 relative z-10 flex flex-col justify-between flex-1">
              <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Machine-Led Scale & Intelligence
              </h2>
              <p className="text-sm font-semibold text-indigo-300 mb-4">
                {automation.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                {automation.description}
              </p>

              {/* Useful When */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-3">
                  When AI Automation Is Most Valuable:
                </span>
                <ul className="space-y-2.5">
                  {automation.whenUseful.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tangible Systems */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-3">
                  Operational Systems Deployed:
                </span>
                <ul className="space-y-2">
                  {automation.tangibleOutputs.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-800/70 p-2.5 rounded-lg border border-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-300 relative z-10">
              <strong className="text-white block font-semibold mb-1">How It Multiplies Consulting Strategy:</strong>
              {automation.howItComplements}
            </div>
          </div>
        </div>
      </div>

        {/* ── SECTION 2: SIMPLE COMPLEMENTARY PROCESS VISUALIZATION ── */}
        <section className="mt-20 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Complementary Lifecycle
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How Strategy and AI Automation Work Together
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
              Building automated AI systems on top of undefined strategies simply generates automated mistakes faster. Here is how our two tracks naturally sequence into a high-leverage revenue machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    Step 01
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Consulting</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Diagnostic & Whitespace Audit
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We interview stakeholders, audit historical deals, analyze micro-segment margins, and identify where revenue is leaking.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    Step 02
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Consulting</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Strategy & Playbook Design
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We formulate price-to-value packaging, build CFO-ready ROI business case frameworks, and establish strict sales stage rigor.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-indigo-50/50 p-6 border border-indigo-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100/60 px-2 py-0.5 rounded-full">
                    Step 03
                  </span>
                  <span className="text-[10px] font-bold text-indigo-500 uppercase font-mono">Automation</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  AI Agents & Telemetry Build
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We encode proven strategy into autonomous outbound agent fleets, intent routing engines, and pipeline velocity monitors.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl bg-indigo-50/50 p-6 border border-indigo-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100/60 px-2 py-0.5 rounded-full">
                    Step 04
                  </span>
                  <span className="text-[10px] font-bold text-indigo-500 uppercase font-mono">Continuous</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Closed-Loop Optimization
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time signals feed back into executive decisions, refining forecasts, detecting deal slippage, and auto-scoring intent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="mt-16 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Dimension Comparison
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear criteria to help executive teams understand track capabilities.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/60">
                  <th className="py-4 px-6 font-bold text-slate-700 uppercase tracking-wider text-[11px] font-mono">Dimension</th>
                  <th className="py-4 px-6 font-bold text-blue-700 uppercase tracking-wider text-[11px] font-mono">Strategy & Consulting</th>
                  <th className="py-4 px-6 font-bold text-indigo-700 uppercase tracking-wider text-[11px] font-mono">AI & Automation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Primary Role</td>
                  <td className="py-4 px-6 text-slate-700">Deciding <em>what</em> to do and verifying commercial economics</td>
                  <td className="py-4 px-6 text-slate-700">Building the operational <em>software engine</em> that executes at scale</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Engagement Team</td>
                  <td className="py-4 px-6 text-slate-700">Senior revenue strategists, pricing architects, sales directors</td>
                  <td className="py-4 px-6 text-slate-700">AI systems engineers, telemetry architects, agentic workflow engineers</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Core Deliverables</td>
                  <td className="py-4 px-6 text-slate-700">Profit pool audits, ROI business case studios, pricing architecture, playbooks</td>
                  <td className="py-4 px-6 text-slate-700">Autonomous SDR fleets, neural propensity engines, telemetry pipelines</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Time to Initial Output</td>
                  <td className="py-4 px-6 text-slate-700">Diagnostic findings and executive readout within 2 to 3 weeks</td>
                  <td className="py-4 px-6 text-slate-700">Working agents deployed and live telemetry streaming within 4 to 6 weeks</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Long-Term Company Asset</td>
                  <td className="py-4 px-6 text-slate-700">Strategic market positioning, trained commercial team, disciplined deal gates</td>
                  <td className="py-4 px-6 text-slate-700">Proprietary AI workflows, autonomous systems, continuous real-time data feeds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 4: INTERACTIVE SELF-ASSESSMENT FINDER ── */}
        <section className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Decision Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Which Delivery Model Matches Your Immediate Priority?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Select any current business bottlenecks below to evaluate whether a consulting diagnostic, an AI automation deployment, or a sequenced hybrid model is recommended.
            </p>

            <div className="space-y-3 mb-8">
              {assessmentQuestions.map((q) => {
                const isSelected = selectedAssessmentPains.includes(q.id);
                return (
                  <button
                    key={q.id}
                    onClick={() => toggleAssessmentPain(q.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-blue-50/70 border-blue-300 text-slate-900 shadow-2xs'
                        : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{q.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Recommendation Result Display */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 block mb-1">
                    Engagement Recommendation
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold">
                    {selectedAssessmentPains.length === 0
                      ? 'Select one or more challenges above to view recommendation'
                      : consultingCount > 0 && automationCount > 0
                      ? 'Sequenced Hybrid: Strategy Diagnostic + AI Automation Fleet'
                      : consultingCount > 0
                      ? 'Strategy & Consulting-Led Diagnostic Sprint'
                      : 'AI & Automation-Led Systems Implementation'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    {selectedAssessmentPains.length === 0
                      ? 'We will recommend whether your challenges call for human diagnostic consulting, AI agents, or both.'
                      : consultingCount > 0 && automationCount > 0
                      ? `You identified ${consultingCount} strategic priorities and ${automationCount} automation opportunities. We recommend a hybrid delivery: first defining the value architecture, then deploying autonomous agent systems.`
                      : consultingCount > 0
                      ? `Your priorities center on positioning, pricing, and qualification rigor. A human-led consulting sprint is the most rapid way to resolve these challenges.`
                      : `Your priorities center on pipeline capacity and telemetry. Deploying autonomous outbound agents and intent pipelines delivers immediate operational leverage.`}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs sm:text-sm shadow-md"
                  >
                    <span>Discuss Scoping</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
