import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
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
  ChevronLeft,
  RefreshCw,
  Gauge,
  Box,
  Cpu,
  BarChart3,
  Network,
  Zap,
  ArrowUpRight,
  Handshake,
  Globe,
  Rocket,
  Check,
  AlertTriangle
} from 'lucide-react';
import { discoveryNodes, originsCategories, DiscoveryNode } from '../../../data/discoveryNodesData';
import DiscoveryInteractiveVisual from './DiscoveryInteractiveVisual';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

interface DiscoveryNodePageProps {
  nodeSlug?: string;
}

export default function DiscoveryNodePage({ nodeSlug }: DiscoveryNodePageProps) {
  const params = useParams<{ nodeSlug?: string; slug?: string; nodeId?: string }>();
  const activeSlug = nodeSlug || params.nodeSlug || params.slug || params.nodeId || 'micro-market';

  const node: DiscoveryNode | undefined = discoveryNodes[activeSlug];

  useEffect(() => {
    if (node) {
      document.title = `${node.title} — ${node.originNumber} | ProfitMachines`;
    }
    window.scrollTo(0, 0);
  }, [activeSlug, node]);

  if (!node) {
    // If not found in our 16 nodes, route to hub
    return <Navigate to="/offerings/discovery" replace />;
  }

  // Find adjacent nodes for Prev / Next links
  const allNodeKeys = Object.keys(discoveryNodes);
  const currentIndex = allNodeKeys.indexOf(activeSlug);
  const prevSlug = currentIndex > 0 ? allNodeKeys[currentIndex - 1] : null;
  const nextSlug = currentIndex < allNodeKeys.length - 1 ? allNodeKeys[currentIndex + 1] : null;
  const prevNode = prevSlug ? discoveryNodes[prevSlug] : null;
  const nextNode = nextSlug ? discoveryNodes[nextSlug] : null;

  // Find current Origin category
  const currentOrigin = originsCategories.find(cat => cat.originNumber === node.originNumber);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── BREADCRUMBS ── */}
      <div className="border-b border-slate-200 bg-slate-50/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link to="/offerings" className="hover:text-blue-600 transition-colors">Offerings</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <Link to="/offerings/discovery" className="hover:text-blue-600 transition-colors">Revenue Discovery</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-700 font-semibold">{node.originNumber} ({node.originName})</span>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-blue-600 font-bold">{node.nodeNumber}: {node.title}</span>
          </nav>
        </div>
      </div>

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wide uppercase shadow-xs">
                <Compass className="w-3.5 h-3.5" />
                <span>{node.heroEyebrow}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold">
                <span>Structure: {node.structureType}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-6 font-heading">
              {node.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              {node.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>{node.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#deliverables"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>View Deliverables & Outcomes</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <span>The Unseen Drag</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                {node.problemHeadline}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                {node.problemBody}
              </p>
            </div>

            <div className="lg:col-span-6">
              {node.problemStats && node.problemStats.length > 0 && (
                <div className="space-y-4">
                  {node.problemStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                          {stat.label}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold font-mono text-rose-600">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE SHARP OFFERING ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>The Diagnostic Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              {node.offeringHeadline}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {node.offeringBody}
            </p>
          </div>

          {node.offeringHighlights && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {node.offeringHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {hl}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 8 (PROMOTED FOR IMPACT): INTERACTIVE OPERATIONAL VISUAL ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiscoveryInteractiveVisual node={node} />
        </div>
      </section>

      {/* ── SECTION 4: DELIVERABLES ── */}
      <section id="deliverables" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>What You Receive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              {node.deliverablesHeadline}
            </h2>
            <p className="text-base text-slate-600">
              Tangible assets, audited models, and telemetry dashboards deployed directly to your team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {node.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                    {deliv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {deliv.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-600 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SOW Locked Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ARCHITECTURE & STACK ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>Technical & Mathematical Rigor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              {node.architectureHeadline}
            </h2>
            <p className="text-base text-slate-600">
              The underlying engineering architecture and analytics stack driving this node:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {node.architecturePoints.map((arch, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 relative group hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {arch.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {arch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: VERIFIED OUTCOMES ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>Quantified Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              {node.outcomesHeadline}
            </h2>
            <p className="text-base text-slate-600">
              Target KPIs and performance thresholds written into our operational mandate:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {node.outcomes.map((out, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-600 mb-2">
                  {out.metric}
                </div>
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {out.label}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {out.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: REALIZATION LOOP ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <span>Compounding Value</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                {node.realizationHeadline}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                {node.realizationBody}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">Zero Set-and-Forget:</span>
                Continuous telemetry ensures your revenue models adapt dynamically as rivals shift tactics.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {node.realizationSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-wrap items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                        Cadence 0{idx + 1}: {step.stage}
                      </span>
                      <p className="text-sm text-slate-700 font-medium">
                        {step.action}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-mono text-xs font-bold shrink-0">
                      {step.frequency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: COMPARISON (If available) ── */}
      {node.comparison && (
        <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <span>Operational Contrast</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Before vs. After
              </h2>
              <p className="text-base text-slate-600">
                The shift from fragmented guessing to connected, telemetry-driven certainty:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-rose-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600 uppercase tracking-wider mb-4">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{node.comparison.beforeTitle}</span>
                </div>
                <ul className="space-y-3">
                  {node.comparison.beforeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="text-rose-500 font-bold mt-0.5">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-emerald-300 shadow-xl shadow-emerald-500/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-600" />
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{node.comparison.afterTitle}</span>
                </div>
                <ul className="space-y-3">
                  {node.comparison.afterItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 leading-relaxed font-medium">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 9: CASE STUDY ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                  <span>Case Study Proof · {node.caseStudy.title}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mb-4">
                  {node.caseStudy.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {node.caseStudy.body}
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Verified Realization</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 mb-2">
                  {node.caseStudy.impactLabel}
                </div>
                <div className="flex justify-center items-center gap-3 text-xs font-mono text-slate-400 pt-3 border-t border-slate-700">
                  <span>Baseline: {node.caseStudy.beforeMetric}</span>
                  <span>→</span>
                  <span className="text-white font-bold">Realized: {node.caseStudy.afterMetric}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: ORIGIN NODE NAVIGATION ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                Sequential Discovery Sequence
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Explore Neighboring Discovery Nodes
              </h3>
            </div>
            <Link
              to="/offerings/discovery"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 font-mono text-xs font-bold transition-colors shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Back to Discovery Overview Hub</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {prevNode ? (
              <Link
                to={`/offerings/discovery/${prevNode.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Previous: {prevNode.nodeNumber}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {prevNode.title}
                  </h4>
                </div>
              </Link>
            ) : <div />}

            {nextNode ? (
              <Link
                to={`/offerings/discovery/${nextNode.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all flex items-center justify-between gap-4 group text-right"
              >
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Next: {nextNode.nodeNumber}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {nextNode.title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ) : <div />}
          </div>

          {/* Related Nodes in same Origin */}
          {currentOrigin && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h4 className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-4">
                Other Nodes in {node.originNumber} ({node.originName}):
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentOrigin.nodes.map(n => (
                  <Link
                    key={n.slug}
                    to={`/offerings/discovery/${n.slug}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      n.slug === activeSlug
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600'
                    }`}
                  >
                    {n.nodeNumber}: {n.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 12: CTA & INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>Node Diagnostic Intake</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Ready to Deploy {node.title}?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Lock your initial baseline with a Principal Revenue Systems Architect. Submit your parameters below for an immediate confidential scoping assessment.
            </p>
          </div>

          <OriginIntakeForm pageContext={`${node.originNumber} · ${node.title}`} defaultPriority={node.title} />
        </div>
      </section>
    </div>
  );
}
