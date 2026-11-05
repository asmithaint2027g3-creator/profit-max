import React, { useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, CheckCircle2, TrendingUp, BarChart3,
  ShieldCheck, Layers, Bot, Compass, Sparkles, Award, DollarSign,
  Clock, Users, Zap, AlertCircle, LineChart, Target, Activity, Cpu,
  Building2, Briefcase, FileText, Lock, Check, HelpCircle
} from 'lucide-react';
import {
  getCaseStudyBySlug,
  APPROVED_CASE_STUDIES,
  CaseStudyStory
} from '../../../data/caseStudiesData';

// Specific high-fidelity pages for the 8 flagship case studies
import EnterpriseSaasPipelineGrowthPage from './EnterpriseSaasPipelineGrowthPage';
import GlobalManufacturingExpansionPage from './GlobalManufacturingExpansionPage';
import HealthcareForecastAccuracyPage from './HealthcareForecastAccuracyPage';
import FinancialServicesAiTransformationPage from './FinancialServicesAiTransformationPage';
import TechnologyCustomerExpansionPage from './TechnologyCustomerExpansionPage';
import SaasRevenueOperationsPage from './SaasRevenueOperationsPage';
import ManufacturingMarginImprovementPage from './ManufacturingMarginImprovementPage';
import HealthcareGtmTransformationPage from './HealthcareGtmTransformationPage';

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // If matching one of the dedicated flagship pages, render it directly
  if (slug === 'enterprise-saas-pipeline-growth') return <EnterpriseSaasPipelineGrowthPage />;
  if (slug === 'global-manufacturing-expansion') return <GlobalManufacturingExpansionPage />;
  if (slug === 'healthcare-forecast-accuracy') return <HealthcareForecastAccuracyPage />;
  if (slug === 'financial-services-ai-transformation') return <FinancialServicesAiTransformationPage />;
  if (slug === 'technology-customer-expansion') return <TechnologyCustomerExpansionPage />;
  if (slug === 'saas-revenue-operations') return <SaasRevenueOperationsPage />;
  if (slug === 'manufacturing-margin-improvement') return <ManufacturingMarginImprovementPage />;
  if (slug === 'healthcare-gtm-transformation') return <HealthcareGtmTransformationPage />;

  // Otherwise, load dynamically from caseStudiesData
  const story: CaseStudyStory | undefined = useMemo(() => {
    return slug ? getCaseStudyBySlug(slug) : undefined;
  }, [slug]);

  useEffect(() => {
    if (story) {
      document.title = `${story.title} | ProfitMachines Enterprise Case Study`;
      window.scrollTo(0, 0);
    }
  }, [story]);

  if (!story) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Case Study Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md">
          The requested transformation dossier could not be located or may have been updated.
        </p>
        <Link
          to="/resources-hub/case-studies"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm font-mono uppercase"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Return to Case Studies Portfolio</span>
        </Link>
      </div>
    );
  }

  const relatedStories = APPROVED_CASE_STUDIES.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 truncate">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <Link to="/resources-hub" className="hover:text-blue-600 transition-colors">Resources Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <Link to="/resources-hub/case-studies" className="hover:text-blue-600 transition-colors">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-slate-900 font-bold truncate">{story.title}</span>
          </div>
        </div>
      </div>

      {/* ── SECTION 01: COVER HERO ── */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono">
              <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-bold uppercase border border-blue-200">
                {story.industry}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 font-bold uppercase">
                {story.function}
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold uppercase border border-emerald-200">
                {story.evidenceStatus}
              </span>
              <span className="text-slate-400 ml-2">
                {story.readingTime} · {story.timeline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-heading">
              {story.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
              {story.subtitle}
            </p>

            {/* Verified Highlight Box */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 inline-flex flex-wrap items-center gap-8 shadow-xs">
              <div>
                <div className="text-4xl font-black font-mono text-slate-900">{story.metricBig}</div>
                <div className="text-xs font-mono text-slate-500 uppercase font-semibold">{story.metricLabel}</div>
              </div>
              <div className="border-l border-blue-200 pl-8">
                <div className="text-xs font-mono uppercase text-blue-700 font-bold mb-1">Client Profile</div>
                <div className="text-sm font-semibold text-slate-800">{story.companyName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: EXECUTIVE SNAPSHOT ── */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-4">
              Executive Snapshot
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono mb-6">
              <div>
                <span className="text-slate-400 block uppercase mb-1">Industry:</span>
                <span className="font-bold text-slate-800">{story.industry}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase mb-1">Function:</span>
                <span className="font-bold text-slate-800">{story.function}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase mb-1">Core Tech:</span>
                <span className="font-bold text-slate-800">{story.technology}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase mb-1">Outcome:</span>
                <span className="font-bold text-emerald-700">{story.outcome}</span>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-100">
              {story.summary}
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 03 & 04: BUSINESS CHALLENGE & CONTEXT ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block mb-2">
                Operational Context &amp; Friction
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                The Business Challenge
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {story.challenge}
              </p>
              <div className="p-5 rounded-2xl bg-red-50/50 border border-red-100 text-xs text-red-900 leading-relaxed font-mono">
                Commercial Consequence: Impaired revenue predictability, wasted SDR capital, and board forecast skepticism.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xs font-mono uppercase text-slate-500 font-bold mb-3">
                Key Friction Points Identified:
              </h3>
              {story.challengePoints.map((pt, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 05: ROOT CAUSE ANALYSIS ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Diagnostic Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Root Cause Analysis Across 5 Dimensions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Symptom treatment fails in complex B2B environments. ProfitMachines analyzed foundational friction across data, process, technology, organization, and market dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {story.rootCausePoints.map((rc, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase block mb-2">
                  Root Factor 0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {rc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06 & 07: SOLUTION STRATEGY & ARCHITECTURE ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
                Revenue Transformation Approach
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                The ProfitMachines Solution Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {story.solutionApproach}
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-2">Transformation Theme:</div>
                <div className="text-sm font-bold text-blue-900">{story.transformationTheme}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-4">
                  Multi-Agent Execution Pipeline
                </span>
                <div className="space-y-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="text-emerald-400 font-bold">STAGE 1: Intent &amp; Signal Detection</span>
                    <p className="text-slate-300 text-[11px] mt-1">Real-time dark-funnel intent telemetry &amp; 10-K extraction.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="text-cyan-400 font-bold">STAGE 2: Multi-Agent Swarm Synthesis</span>
                    <p className="text-slate-300 text-[11px] mt-1">Multi-threaded persona dossier assembly &amp; messaging personalization.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="text-blue-400 font-bold">STAGE 3: Deterministic AE Handoff</span>
                    <p className="text-slate-300 text-[11px] mt-1">Strict MEDDPICC criteria validation and executive meeting scheduling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: IMPLEMENTATION TIMELINE ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Field Execution Cadence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Implementation Timeline ({story.timeline})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono">
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-blue-600 font-bold block mb-1">PHASE 1 (Weeks 1-3)</span>
              <strong className="text-slate-900 block mb-2">Telemetry &amp; Audit</strong>
              <p className="text-slate-600 text-[11px]">Audit RevTech stack, calibrate ICP signals, and map committee personas.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-blue-600 font-bold block mb-1">PHASE 2 (Weeks 4-6)</span>
              <strong className="text-slate-900 block mb-2">Swarm Deployment</strong>
              <p className="text-slate-600 text-[11px]">Configure autonomous outbound SDR swarms with compliance guardrails.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-blue-600 font-bold block mb-1">PHASE 3 (Weeks 7-12)</span>
              <strong className="text-slate-900 block mb-2">Pipeline Ramp</strong>
              <p className="text-slate-600 text-[11px]">Scale multi-threaded meeting cadence and activate automated AE handoffs.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-blue-600 font-bold block mb-1">PHASE 4 (Ongoing)</span>
              <strong className="text-slate-900 block mb-2">Continuous Calibration</strong>
              <p className="text-slate-600 text-[11px]">Forecast variance optimization and expansion into secondary accounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: BUSINESS RESULTS & TESTIMONIAL ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Boardroom Impact
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Business Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200 text-center">
              <div className="text-5xl font-black font-mono text-emerald-800 mb-2">{story.metricBig}</div>
              <div className="text-xs font-mono uppercase text-emerald-900 font-bold">{story.metricLabel}</div>
            </div>
            <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-200 text-center">
              <div className="text-5xl font-black font-mono text-blue-800 mb-2">98%</div>
              <div className="text-xs font-mono uppercase text-blue-900 font-bold">Pipeline Forecast Accuracy</div>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-5xl font-black font-mono text-slate-800 mb-2">&lt;45d</div>
              <div className="text-xs font-mono uppercase text-slate-600 font-bold">Sales Cycle Duration</div>
            </div>
          </div>

          {story.testimonial && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white">
              <p className="text-lg sm:text-xl italic leading-relaxed mb-6 font-serif">
                &ldquo;{story.testimonial.quote}&rdquo;
              </p>
              <div className="font-mono text-xs">
                <div className="font-bold text-amber-400 text-sm">{story.testimonial.author}</div>
                <div className="text-slate-300">{story.testimonial.role} · {story.testimonial.company}</div>
                <div className="text-emerald-400 font-bold mt-1">{story.testimonial.metric}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 10: RELATED CASE STUDIES ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              Related Enterprise Transformations
            </h2>
            <Link
              to="/resources-hub/case-studies"
              className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 uppercase"
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map((rel) => (
              <Link
                key={rel.slug}
                to={`/resources-hub/case-studies/stories/${rel.slug}`}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-blue-600 font-bold uppercase">{rel.industry}</span>
                  <span className="font-black text-slate-900">{rel.metricBig}</span>
                </div>
                <h3 className="font-bold text-slate-900 font-heading text-sm mb-2 group-hover:text-blue-600 transition-colors">
                  {rel.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {rel.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FINAL CTA ── */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-heading">
            Facing a Similar Business Challenge?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Explore how ProfitMachines can help your organization understand its revenue bottlenecks and engineer predictable commercial performance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 text-sm font-mono uppercase tracking-wider transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              to="/talk-to-expert"
              className="border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm font-mono uppercase tracking-wider transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

