import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target,
  DollarSign, Activity, Layers, Search, Sparkles, Lock, ChevronRight,
  Zap, BarChart3, Sliders, Cpu, Shield, ArrowUpRight, Workflow,
  HeartPulse, BrainCircuit, Eye, Check, Building2, Boxes, HelpCircle,
  Gauge, Network, Terminal, CheckCircle, AlertTriangle, RefreshCw,
  Server, Globe, FileText, ChevronDown, Filter, AlertCircle, Briefcase,
  Users, Bot, ShoppingBag, Rocket, Database
} from 'lucide-react';
import { PageContentData } from '../../types/offeringsIndustries';
import OfferingsIntakeForm from '../forms/OfferingsIntakeForm';
import IndustryIntakeForm from '../forms/IndustryIntakeForm';

export type PageLayoutVariant =
  | 'market-strategy'
  | 'demand-generation'
  | 'opportunity-progression'
  | 'connected-systems'
  | 'strategic-roadmap'
  | 'customer-lifecycle'
  | 'decision-support'
  | 'governance-control'
  | 'b2b-strategy'
  | 'b2c-consumer'
  | 'enterprise-scale'
  | 'midmarket-ops'
  | 'startup-pmf'
  | 'saas-lifecycle'
  | 'standard';

interface PageTemplateProps {
  data: PageContentData;
  primaryGraphic?: React.ReactNode;
  layoutVariant?: PageLayoutVariant;
}

export default function PageTemplate({
  data,
  primaryGraphic,
  layoutVariant = 'standard'
}: PageTemplateProps) {
  const location = useLocation();
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [expandedCapId, setExpandedCapId] = useState<string>(data.capabilities[0]?.id || '');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const groups = ['All', ...Array.from(new Set(data.capabilities.map(c => c.groupName)))];

  const filteredCapabilities = selectedGroup === 'All'
    ? data.capabilities
    : data.capabilities.filter(c => c.groupName === selectedGroup);

  // Sync hash with expanded capability and scroll
  useEffect(() => {
    document.title = `${data.title} | ProfitMachines ${data.pageCategory}`;
    if (location.hash) {
      const hashId = location.hash.replace(/^#/, '');
      const match = data.capabilities.find(c => c.id.toLowerCase() === hashId.toLowerCase());
      if (match) {
        setExpandedCapId(match.id);
      }
    }
  }, [location.hash, data]);

  // Sub-nav label helpers
  const isOffering = data.pageCategory === 'Offering';

  // ──────────────────────────────────────────────────────────────────────────
  // SUB-COMPONENTS FOR FLEXIBLE SECTION REORDERING ACCORDING TO LAYOUT VARIANT
  // ──────────────────────────────────────────────────────────────────────────

  // 1. Challenges Section
  const renderChallenges = () => (
    <section id="challenges" key="challenges" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
            Domain Friction &amp; Growth Constraints
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
            Why Traditional Execution Breaks Down in {data.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Revenue stagnation occurs when leadership treats interconnected sales, demand, and operational challenges with fragmented tools and disconnected processes. Examine the root causes this practice resolves:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.challenges.map((ch) => (
            <div
              key={ch.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 text-xs font-mono font-bold flex items-center justify-center border border-red-100">
                    !
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Structural Constraint
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2">
                  {ch.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {ch.situation}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-800">Commercial Consequence:</span>{' '}
                    <span>{ch.commercialConsequence}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Why Legacy Methods Fail:</span>{' '}
                    <span>{ch.whyTraditionalMethodsFail}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-xs">
                <div className="text-[11px] font-mono font-bold text-blue-600 uppercase mb-1">
                  Required Executive Decision:
                </div>
                <div className="text-slate-900 font-medium leading-snug">
                  {ch.requiredExecutiveDecision}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 2. Capabilities Section
  const renderCapabilities = () => (
    <section id="capabilities" key="capabilities" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Modular Capability Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Ten Dedicated Capabilities of {data.title}
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Click any capability module to inspect its business challenge, how it works, inputs required, practical deliverables, KPIs, and real-world use case.
            </p>
          </div>

          {/* Filter Group Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
            {groups.map(grp => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(grp)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedGroup === grp
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* Capabilities Stack with Full In-Depth Content */}
        <div className="space-y-6">
          {filteredCapabilities.map((cap, cIdx) => {
            const isExpanded = expandedCapId === cap.id;

            return (
              <div
                key={cap.id}
                id={cap.id}
                className={`rounded-2xl border transition-all scroll-mt-32 ${
                  isExpanded
                    ? 'border-blue-500 shadow-lg ring-1 ring-blue-500/20 bg-white'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {/* Card Header (Click to toggle expansion) */}
                <div
                  onClick={() => setExpandedCapId(isExpanded ? '' : cap.id)}
                  className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setExpandedCapId(isExpanded ? '' : cap.id);
                    }
                  }}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 font-mono mt-0.5">
                      {cIdx + 1 < 10 ? `0${cIdx + 1}` : cIdx + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                          {cap.title}
                        </h3>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          {cap.groupName}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.shortSummary}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-blue-600' : ''}`} />
                  </div>
                </div>

                {/* Expanded In-Depth Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-slate-100 space-y-6">
                    
                    {/* 1. Business Challenge & Why It Matters */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                      <div>
                        <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                          <span>Business Challenge</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{cap.businessChallenge}</p>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                          <span>Why It Matters for Revenue</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{cap.whyItMatters}</p>
                      </div>
                    </div>

                    {/* 2. What ProfitMachines Does & How It Works Sequence */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
                        What ProfitMachines Does
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {cap.whatProfitMachinesDoes}
                      </p>

                      <div className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider pt-2">
                        Methodology &amp; Execution Steps
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        {cap.howItWorks.map((step, sIdx) => (
                          <div key={sIdx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                            <span className="font-mono text-blue-600 font-bold block mb-1">Step 0{sIdx + 1}</span>
                            <span className="text-slate-700 leading-snug">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Relevant Inputs & Practical Deliverables */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                          Information &amp; System Inputs
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {cap.relevantInputs.map((input, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              <span>{input}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                        <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-2">
                          Tangible Deliverables &amp; Artifacts
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-800">
                          {cap.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                              <span className="font-medium">{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 4. Business Value & KPIs Table */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider">
                          Governed Performance Metrics &amp; KPIs
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          Defined mathematically &bull; Not fabricated claims
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-200/70 text-slate-700 font-mono uppercase text-[10px]">
                            <tr>
                              <th className="p-2 rounded-l">Metric Name</th>
                              <th className="p-2">Calculation / Definition</th>
                              <th className="p-2 rounded-r">Strategic Purpose</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 text-slate-700">
                            {cap.kpis.map((kpi, kIdx) => (
                              <tr key={kIdx} className="hover:bg-slate-100/50">
                                <td className="p-2 font-bold text-slate-900">{kpi.name}</td>
                                <td className="p-2 font-mono text-[11px] text-slate-600">{kpi.formula}</td>
                                <td className="p-2 text-slate-600">{kpi.purpose}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 5. Illustrative Use Case & Visual Recommendation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-[11px] font-mono font-bold text-indigo-700 uppercase tracking-wider block mb-2">
                          Illustrative Scenario ({cap.illustrativeUseCase.targetUser})
                        </span>
                        <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                          <div><strong className="text-slate-800">Context:</strong> {cap.illustrativeUseCase.scenario}</div>
                          <div><strong className="text-slate-800">Action:</strong> {cap.illustrativeUseCase.actionTaken}</div>
                          <div><strong className="text-slate-800">Observed Value:</strong> {cap.illustrativeUseCase.outcomeObserved}</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider block mb-1">
                            Visual Diagnostic Specification
                          </span>
                          <div className="text-xs font-bold text-blue-700 mb-1">
                            {cap.visualRecommendation.type}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {cap.visualRecommendation.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-200 mt-2 flex items-center justify-between text-xs">
                          <span className="text-slate-500">Related Offerings:</span>
                          <div className="flex items-center gap-2">
                            {cap.relatedCapabilities.map((rel, rIdx) => (
                              <Link
                                key={rIdx}
                                to={rel.path}
                                className="text-blue-600 hover:text-blue-800 font-bold hover:underline"
                              >
                                {rel.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="pt-2 flex items-center justify-end gap-3">
                      <a
                        href="#consultation"
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Discuss {cap.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // 3. Workflow Section
  const renderWorkflow = () => (
    <section id="workflow" key="workflow" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
            Implementation Cadence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
            Four-Phase Deployment Lifecycle for {data.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every implementation follows an empirical sequence: discovery and baseline auditing, architecture design, execution sprints, and ongoing telemetry governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.workflow.map((wf, wIdx) => (
            <div
              key={wIdx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    Phase {wf.stepNumber} // {wf.phase}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-bold">{wf.duration}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                  {wf.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {wf.objective}
                </p>

                <div className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Key Activities:
                </div>
                <ul className="space-y-1 text-xs text-slate-600 mb-4">
                  {wf.keyActivities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs">
                <div className="text-slate-500 text-[11px] mb-0.5 font-medium">Verified Deliverable:</div>
                <div className="font-bold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{wf.outputDeliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 4. Metrics & Provenance Section
  const renderMetrics = () => (
    <section id="metrics" key="metrics" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Quantitative Measurement &amp; Data Provenance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Key Metrics, Decision Formulas &amp; Telemetry
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We define KPIs mathematically and trace them to empirical business events. All benchmarks shown below represent illustrative industry baselines, not unverified ProfitMachines guarantees.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 font-mono">
            <Database className="w-3.5 h-3.5 text-blue-600" />
            <span>Telemetry Mode: Governed Framework</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {data.metrics.map((met, mIdx) => (
            <div key={mIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-700">{met.metricName}</span>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                    {met.category}
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-900 font-bold bg-white p-2 rounded border border-slate-200/80 mb-2">
                  {met.formula}
                </div>
                <p className="text-xs text-slate-600 leading-snug mb-3">
                  {met.definition}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Data Provenance:</span> {met.benchmarkContext}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State / Connect Live Data Source Callout */}
        <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-slate-900 block">Streaming Live Enterprise Telemetry:</strong>
              <span>Connect verified CRM / ERP pipelines during diagnostic briefing to replace industry benchmarks with your actual telemetry.</span>
            </div>
          </div>
          <a
            href="#consultation"
            className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-blue-500 font-bold text-slate-900 whitespace-nowrap"
          >
            Connect Data Source &rarr;
          </a>
        </div>
      </div>
    </section>
  );

  // 5. FAQ Section
  const renderFaq = () => (
    <section id="faq" key="faq" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
            Executive Advisory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
            Frequently Asked Questions About {data.title}
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Clear answers regarding data requirements, CRM compatibility, timeline expectations, and commercial structure.
          </p>
        </div>

        <div className="space-y-3">
          {data.faqs.map((faq, fIdx) => (
            <div
              key={fIdx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === fIdx ? null : fIdx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-blue-600"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeFaq === fIdx ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              {activeFaq === fIdx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 6. Consultation Section
  const renderConsultation = () => (
    <section id="consultation" key="consultation" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>CONFIDENTIAL STRATEGY BRIEFING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
              Discuss Your {data.title} Architecture.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Connect directly with a Principal Revenue Architect to evaluate your customer acquisition models, pipeline conversion friction, or operational workflows under mutual enterprise NDA.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24-Hour Business Response by a Senior Revenue Systems Architect</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Empirical Diagnostic Plan Tailored to Your Stack Parameters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mutual NDA Executed Prior to Any Sensitive CRM / Metric Sharing</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
              {data.pageCategory === 'Industry' ? (
                <IndustryIntakeForm industryName={data.title} />
              ) : (
                <OfferingsIntakeForm />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );

  // Determine section ordering based on page variant
  const getOrderedSections = () => {
    switch (layoutVariant) {
      case 'market-strategy':
        // Profit Pool Discovery: Market Whitespace -> Capabilities -> Workflow -> Metrics -> Challenges -> FAQ -> Consultation
        return [renderChallenges(), renderCapabilities(), renderWorkflow(), renderMetrics(), renderFaq(), renderConsultation()];
      case 'demand-generation':
        // Demand Engineering: Funnel First -> Capabilities -> Workflow -> Metrics -> Challenges -> FAQ -> Consultation
        return [renderCapabilities(), renderWorkflow(), renderChallenges(), renderMetrics(), renderFaq(), renderConsultation()];
      case 'opportunity-progression':
        // Sales Acceleration: Deal Progression & Buying Committee -> Capabilities -> Workflow -> Metrics -> FAQ -> Consultation
        return [renderChallenges(), renderCapabilities(), renderWorkflow(), renderMetrics(), renderFaq(), renderConsultation()];
      case 'connected-systems':
        // Revenue Operations: System Architecture -> Workflow -> Capabilities -> Metrics -> Challenges -> FAQ -> Consultation
        return [renderWorkflow(), renderCapabilities(), renderChallenges(), renderMetrics(), renderFaq(), renderConsultation()];
      case 'strategic-roadmap':
        // GTM Transformation: Roadmap Workflow -> Capabilities -> Challenges -> Metrics -> FAQ -> Consultation
        return [renderWorkflow(), renderCapabilities(), renderChallenges(), renderMetrics(), renderFaq(), renderConsultation()];
      case 'customer-lifecycle':
        // Customer Success: Lifecycle Workflow -> Metrics (NRR) -> Capabilities -> Challenges -> FAQ -> Consultation
        return [renderWorkflow(), renderMetrics(), renderCapabilities(), renderChallenges(), renderFaq(), renderConsultation()];
      case 'decision-support':
        // Growth Intelligence: Metrics (KPI Tree) -> Capabilities -> Workflow -> Challenges -> FAQ -> Consultation
        return [renderMetrics(), renderCapabilities(), renderWorkflow(), renderChallenges(), renderFaq(), renderConsultation()];
      case 'governance-control':
        // AI Trust & Governance: Challenges -> Capabilities -> Metrics -> Workflow -> FAQ -> Consultation
        return [renderChallenges(), renderCapabilities(), renderMetrics(), renderWorkflow(), renderFaq(), renderConsultation()];
      case 'saas-lifecycle':
        // SaaS: Lifecycle Workflow -> Capabilities -> Challenges -> Metrics -> FAQ -> Consultation
        return [renderWorkflow(), renderCapabilities(), renderChallenges(), renderMetrics(), renderFaq(), renderConsultation()];
      default:
        // Standard ordering
        return [renderChallenges(), renderCapabilities(), renderWorkflow(), renderMetrics(), renderFaq(), renderConsultation()];
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* ── STICKY PAGE SUB-NAV BAR (FOR FAST AUDIT JUMPING & ANCHOR NAVIGATION) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">{data.pageNumber}</span>
            <span className="font-bold text-slate-200">{data.title}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">{data.eyebrow}</span>
          </div>

          <div className="flex items-center gap-3.5 shrink-0 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a>
            <a href="#challenges" className="hover:text-blue-400 transition-colors">Challenges</a>
            <a href="#capabilities" className="hover:text-blue-400 text-blue-400 font-bold transition-colors">
              Capabilities ({data.capabilities.length})
            </a>
            <a href="#workflow" className="hover:text-blue-400 transition-colors">Workflow</a>
            <a href="#metrics" className="hover:text-blue-400 transition-colors">Metrics</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#consultation" className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">
              Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 01: EXECUTIVE HERO (MATCHING GLOBAL ACCELERATION PALETTE) ── */}
      <section id="overview" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to={isOffering ? '/offerings' : '/industries'} className="hover:text-blue-400 transition-colors">
              {isOffering ? 'Revenue Offerings' : 'Industries & Business Models'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">{data.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <Target className="w-3.5 h-3.5 text-blue-400" />
                <span>{data.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 font-heading">
                {data.title}:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  {data.headlineHighlight}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                {data.description}
              </p>

              {/* Target Audience Line */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Engineered for Decision-Makers:
                </div>
                <div className="text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Primary:</span> {data.targetAudience.primary} &bull;{' '}
                  <span className="font-semibold text-white">Executive Stakeholders:</span> {data.targetAudience.executives}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>{data.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#consultation"
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all inline-flex items-center gap-2"
                >
                  <span>{data.secondaryCtaText}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              {primaryGraphic ? (
                primaryGraphic
              ) : (
                <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-3 shadow-2xl overflow-hidden group">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 relative">
                    <img
                      src={data.heroVisual.imageSrc}
                      alt={data.heroVisual.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-slate-300 font-mono text-[11px] font-semibold">{data.heroVisual.badgeText}</span>
                    </div>
                    <span className="text-blue-400 font-mono text-[11px] font-bold">10 Modular Nodes</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Executive Statistics / Metrics Strip with Data Provenance Notes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            {data.keyStats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/60 flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-400 font-heading mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-xs font-bold text-white mb-0.5">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{stat.context}</div>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800/40 text-[9px] font-mono text-slate-500">
                  Data Scope: Enterprise GTM Baseline
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DYNAMICALLY ORDERED BODY SECTIONS ── */}
      {getOrderedSections()}

    </div>
  );
}
