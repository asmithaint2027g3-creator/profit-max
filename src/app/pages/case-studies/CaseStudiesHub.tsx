import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck, ArrowRight, ChevronRight, TrendingUp, BarChart3,
  Globe, Bot, Cpu, Target, Layers, Sparkles, Building2,
  CheckCircle2, Filter, Award, Zap, ArrowUpRight, DollarSign,
  Compass, Network, LineChart, Quote, Search, RotateCcw,
  Briefcase, Activity, Check, Users, HelpCircle, FileText
} from 'lucide-react';
import {
  APPROVED_CASE_STUDIES,
  CASE_STUDIES_CATEGORIES,
  BUSINESS_CHALLENGES_DATA,
  TRANSFORMATION_THEMES_DATA,
  OUTCOME_CASE_STUDIES_DATA,
  EXECUTIVE_INSIGHTS_DATA,
  TESTIMONIALS_DATA,
  CaseStudyStory
} from '../../../data/caseStudiesData';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export type CaseStudyItem = CaseStudyStory;
export const CASE_STUDIES: CaseStudyStory[] = APPROVED_CASE_STUDIES;

export default function CaseStudiesHub() {
  const location = useLocation();

  // Multi-Filter states (Industry, Function, Technology, Outcome, Story Type, Evidence Status, Search)
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedFunction, setSelectedFunction] = useState<string>('All');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('All');
  const [selectedOutcome, setSelectedOutcome] = useState<string>('All');
  const [selectedStoryType, setSelectedStoryType] = useState<string>('All');
  const [selectedEvidenceStatus, setSelectedEvidenceStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = 'Real Business Challenges. Intelligent Revenue Transformation. | ProfitMachines Case Studies';
    window.scrollTo(0, 0);

    const hash = location.hash.replace('#', '');
    if (hash === 'saas' || hash === 'enterprise-saas') setSelectedIndustry('Enterprise SaaS');
    else if (hash === 'manufacturing') setSelectedIndustry('Manufacturing');
    else if (hash === 'healthcare') setSelectedIndustry('Healthcare');
    else if (hash === 'financial-services') setSelectedIndustry('Financial Services');
    else if (hash === 'pipeline-growth') setSelectedOutcome('Pipeline Growth');
    else if (hash === 'revenue-growth') setSelectedOutcome('Revenue Growth');
  }, [location.hash]);

  // Combined Multi-Dimension Filtering
  const filteredStudies = useMemo(() => {
    return APPROVED_CASE_STUDIES.filter((cs: CaseStudyStory) => {
      const matchIndustry =
        selectedIndustry === 'All' ||
        cs.industry === selectedIndustry ||
        cs.industries.includes(selectedIndustry);

      const matchFunction =
        selectedFunction === 'All' ||
        cs.function === selectedFunction ||
        cs.functions.includes(selectedFunction);

      const matchTechnology =
        selectedTechnology === 'All' ||
        cs.technology === selectedTechnology ||
        cs.technologies.includes(selectedTechnology);

      const matchOutcome =
        selectedOutcome === 'All' ||
        cs.outcome === selectedOutcome ||
        cs.outcomes.includes(selectedOutcome);

      const matchStoryType =
        selectedStoryType === 'All' || cs.storyType === selectedStoryType;

      const matchEvidenceStatus =
        selectedEvidenceStatus === 'All' || cs.evidenceStatus === selectedEvidenceStatus;

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.subtitle.toLowerCase().includes(q) ||
        cs.companyName.toLowerCase().includes(q) ||
        cs.summary.toLowerCase().includes(q) ||
        cs.tags.some((t) => t.toLowerCase().includes(q)) ||
        cs.industry.toLowerCase().includes(q) ||
        cs.function.toLowerCase().includes(q) ||
        cs.technology.toLowerCase().includes(q) ||
        cs.outcome.toLowerCase().includes(q);

      return (
        matchIndustry &&
        matchFunction &&
        matchTechnology &&
        matchOutcome &&
        matchStoryType &&
        matchEvidenceStatus &&
        matchSearch
      );
    });
  }, [
    selectedIndustry,
    selectedFunction,
    selectedTechnology,
    selectedOutcome,
    selectedStoryType,
    selectedEvidenceStatus,
    searchQuery
  ]);

  const resetFilters = () => {
    setSelectedIndustry('All');
    setSelectedFunction('All');
    setSelectedTechnology('All');
    setSelectedOutcome('All');
    setSelectedStoryType('All');
    setSelectedEvidenceStatus('All');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedIndustry !== 'All' ||
    selectedFunction !== 'All' ||
    selectedTechnology !== 'All' ||
    selectedOutcome !== 'All' ||
    selectedStoryType !== 'All' ||
    selectedEvidenceStatus !== 'All' ||
    searchQuery.trim() !== '';

  const scrollToLibrary = () => {
    const el = document.getElementById('case-study-library');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/resources-hub" className="hover:text-blue-600 transition-colors">Resources Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Case Studies</span>
          </div>
        </div>
      </div>

      {/* ── SECTION 01: HERO SECTION ── */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-mono text-blue-600 font-extrabold">ENTERPRISE CASE STUDIES &amp; FIELD DOSSIERS</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>VERIFIED PRODUCTION OUTCOMES</span>
            </div>

            {/* Exact Master Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Real Business Challenges.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Intelligent Revenue Transformation.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Explore boardroom-grade field transformations detailing how mid-market and Global 2000 revenue leaders solve stubborn growth friction, eliminate forecast variance, and deploy autonomous commercial operating systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button
                onClick={scrollToLibrary}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/20 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2 hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Wide-Format Enterprise Revenue Transformation Command Center Visual */}
          <div className="rounded-3xl bg-slate-950 p-6 sm:p-8 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Revenue Transformation Command Center
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  Active Multi-Agent Telemetry &amp; Field Velocity
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>8 Approved Production Blueprints</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Pipeline Acceleration</div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-400 mt-2">6X</div>
                <div className="text-[11px] text-slate-400 mt-1">Enterprise SaaS ($450M ARR)</div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified 98% Accuracy</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Cross-Border Revenue</div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-indigo-400 mt-2">$400M</div>
                <div className="text-[11px] text-slate-400 mt-1">Industrial Manufacturer (F500)</div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>47% Cycle Compression</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Forecast Variance</div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400 mt-2">&lt;5%</div>
                <div className="text-[11px] text-slate-400 mt-1">Healthcare Tech ($180M ARR)</div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>HIPAA-Compliant Telemetry</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Gross Margin Recovery</div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-purple-400 mt-2">+15 Pts</div>
                <div className="text-[11px] text-slate-400 mt-1">Mid-Market Manufacturer ($350M)</div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Dynamic Price Floors</span>
                </div>
              </div>
            </div>

            {/* Telemetry Architecture Sub-Bar */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-slate-200 font-bold uppercase">Multi-Agent RevOps Signals:</span>
                <span>Active Swarms: 42</span>
                <span className="text-slate-600">|</span>
                <span>Committee Graph Depth: 8.4</span>
                <span className="text-slate-600">|</span>
                <span>Median Slip Prevention: 34 Days</span>
              </div>
              <span className="text-blue-400 font-semibold">SOC 2 Type II Audited Environment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: FEATURED CASE STUDIES (Editorial Asymmetric Layout) ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase mb-3">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                Featured Transformations
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Editorial Showcase: Proven Enterprise Blueprints
              </h2>
            </div>
            <Link
              to="/case-studies/featured"
              className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 uppercase"
            >
              <span>View Curated Showcase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-10">
            {/* Featured Story 1: Enterprise SaaS */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase">
                      Enterprise SaaS
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase">
                      Pipeline Growth
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase">
                      Verified Customer Story
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading leading-tight">
                    Enterprise SaaS Pipeline Growth: 6X Velocity in 9 Months
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Facing stalled outbound productivity, a 30% forecast variance, and an unwieldy 12-tool sales tech stack, this $450M ARR SaaS leader deployed ProfitMachines autonomous AI SDR swarms to isolate untapped profit pools and engineer deterministic pipeline velocity.
                  </p>

                  <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">6X</div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Qualified Pipeline</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-blue-600">98%</div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Forecast Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">$180M</div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Net New ARR</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/resources-hub/case-studies/stories/enterprise-saas-pipeline-growth"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider transition-all shadow-md group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs font-mono text-slate-500">6 min read · Verified Evidence</span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 mb-4 group shadow-md">
                    <img
                      src="/images/industry-saas.png"
                      alt="Enterprise SaaS Transformation Blueprint"
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                      <span className="text-white text-xs font-mono font-bold uppercase bg-blue-600/90 px-3 py-1 rounded-md">
                        Enterprise SaaS Production Telemetry
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
                    <p className="text-xs text-slate-800 italic leading-relaxed mb-2">
                      &ldquo;ProfitMachines didn&apos;t just give us tools — they gave us a revenue operating system. We went from hoping for growth to engineering it with mathematical predictability.&rdquo;
                    </p>
                    <div className="text-[11px] font-mono text-slate-700">
                      <strong>Marcus Vance</strong>, CRO · Enterprise SaaS Platform ($450M ARR)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Story 2: Global Manufacturing Expansion */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 mb-4 group shadow-md">
                    <img
                      src="/images/industry-manufacturing.png"
                      alt="Global Manufacturing Expansion"
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                      <span className="text-white text-xs font-mono font-bold uppercase bg-indigo-600/90 px-3 py-1 rounded-md">
                        Fortune 500 Industrial Deployment
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/80">
                    <p className="text-xs text-slate-800 italic leading-relaxed mb-2">
                      &ldquo;Global expansion was previously our biggest capital risk. Deploying the ProfitMachines framework transformed cross-border growth into a deterministic science.&rdquo;
                    </p>
                    <div className="text-[11px] font-mono text-slate-700">
                      <strong>Dr. Helena Meyer</strong>, CEO · Fortune 500 Industrial Leader
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase">
                      Manufacturing &amp; Distribution
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase">
                      Global Expansion
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase">
                      Approved Case Study
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading leading-tight">
                    Global Manufacturing Expansion: $400M International ARR
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Cross-border RevOps and multi-language AI prospecting unlocked $400M in international pipeline across Germany, Japan, and Western Europe with 47% faster sales cycles and unified dealer governance.
                  </p>

                  <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">$400M</div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">New International ARR</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-600">47%</div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Faster Cycles</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">14 Geos</div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Territories Activated</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/resources-hub/case-studies/stories/global-manufacturing-expansion"
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider transition-all shadow-md group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs font-mono text-slate-500">8 min read · Verified Evidence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: DISCOVER CASE STUDIES (5 Category Discovery Cards) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Structured Portfolio Navigation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Discover Case Studies by Dimension
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Browse our transformation archives through targeted category lenses designed for industry leaders, commercial functional heads, and RevTech architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CASE_STUDIES_CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.slug}
                to={cat.route}
                className="group p-6 rounded-3xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                      {cat.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-blue-600">
                  <span>{cat.count}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: BUSINESS CHALLENGES (Visual Storytelling with Diagnostics) ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Diagnostic Frameworks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Common Enterprise Revenue Bottlenecks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every transformation begins with identifying commercial root causes rather than treating superficial symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_CHALLENGES_DATA.map((ch) => (
              <div
                key={ch.id}
                className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-mono font-bold uppercase mb-3">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                    Commercial Diagnostic
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                    {ch.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-semibold mb-0.5 font-mono uppercase text-[10px]">Observable Symptom:</strong>
                      <p className="text-slate-600 leading-relaxed">{ch.symptom}</p>
                    </div>
                    <div className="text-xs">
                      <strong className="text-slate-900 block font-semibold mb-0.5 font-mono uppercase text-[10px]">Root Cause Diagnostic:</strong>
                      <p className="text-slate-600 leading-relaxed">{ch.diagnostic}</p>
                    </div>
                    <div className="text-xs p-3 rounded-xl bg-blue-50/70 border border-blue-200/80">
                      <strong className="text-blue-900 block font-semibold mb-0.5 font-mono uppercase text-[10px]">Engineered Remedy:</strong>
                      <p className="text-blue-800 leading-relaxed">{ch.remedy}</p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/resources-hub/case-studies/stories/${ch.relevantStorySlug}`}
                  className="pt-4 border-t border-slate-100 inline-flex items-center justify-between text-xs font-mono font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Review Solution Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: TRANSFORMATION THEMES (Supporting Architectures) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Systematic Methodologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Seven Transformation Architectures
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Our repeatable, battle-tested methodologies applied across complex multi-cloud and enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSFORMATION_THEMES_DATA.map((theme, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      Architecture 0{i + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">{theme.storiesCount}</span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                    {theme.theme}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {theme.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Deterministic Production Execution</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: BUSINESS OUTCOMES (Qualitative & Quantitative) ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
                Executive Results Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Measured Commercial Outcomes
              </h2>
            </div>
            <Link
              to="/resources-hub/case-studies/by-business-outcome"
              className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 uppercase"
            >
              <span>Explore All 10 Outcomes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {OUTCOME_CASE_STUDIES_DATA.slice(0, 5).map((outcome) => (
              <div
                key={outcome.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {outcome.badge}
                  </span>
                  <div className="text-2xl font-black font-mono text-slate-900 mt-3 mb-1">
                    {outcome.metric}
                  </div>
                  <h3 className="text-sm font-bold font-heading text-slate-900 mb-2">
                    {outcome.name}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-4">
                    {outcome.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-500">
                  Targeted vs. Measured Validated
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: COMPREHENSIVE CASE STUDY LIBRARY (Multi-Filter System) ── */}
      <section id="case-study-library" className="py-16 sm:py-24 bg-white border-b border-slate-200" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
                Field Evidence Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Comprehensive Case Study Library
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
                Multi-filter system across Industry, Function, Technology, Business Outcome, Story Type, and Evidence Status.
              </p>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200 inline-flex items-center gap-1.5 cursor-pointer w-fit"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
                <span className="text-slate-400">({filteredStudies.length} of {APPROVED_CASE_STUDIES.length})</span>
              </button>
            )}
          </div>

          {/* Multi-Filter Toolbar */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 mb-10 shadow-xs">
            {/* Search Input */}
            <div className="relative mb-5">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search case studies by title, challenge, outcome, or technology keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 shadow-2xs font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* 6 Dimension Filter Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 text-xs">
              {/* Filter 1: Industry */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Industries</option>
                  <option value="Enterprise SaaS">Enterprise SaaS</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
              </div>

              {/* Filter 2: Function */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  Function
                </label>
                <select
                  value={selectedFunction}
                  onChange={(e) => setSelectedFunction(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Functions</option>
                  <option value="Sales & BD">Sales &amp; BD</option>
                  <option value="Marketing & Demand Gen">Marketing &amp; Demand Gen</option>
                  <option value="Revenue Operations">Revenue Operations</option>
                  <option value="Customer Success & Retention">Customer Success</option>
                  <option value="Pricing & Revenue Strategy">Pricing &amp; Strategy</option>
                  <option value="Executive Revenue Management">Executive Mgmt</option>
                </select>
              </div>

              {/* Filter 3: Technology */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  Technology
                </label>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Technologies</option>
                  <option value="AI Prospecting & Engagement">AI Prospecting</option>
                  <option value="AI-Native Sales">AI-Native Sales</option>
                  <option value="Revenue Operations Automation">RevOps Automation</option>
                  <option value="Decision Intelligence">Decision Intelligence</option>
                  <option value="Demand Intelligence">Demand Intelligence</option>
                  <option value="Integrated GTM Systems">Integrated Systems</option>
                </select>
              </div>

              {/* Filter 4: Outcome */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  Outcome
                </label>
                <select
                  value={selectedOutcome}
                  onChange={(e) => setSelectedOutcome(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Outcomes</option>
                  <option value="Pipeline Growth">Pipeline Growth</option>
                  <option value="Global Market Expansion">Global Expansion</option>
                  <option value="Revenue Visibility & Forecasting">Forecast Visibility</option>
                  <option value="Customer Acquisition Efficiency">CAC Efficiency</option>
                  <option value="Customer Retention & Expansion">Customer Retention</option>
                  <option value="Operational Efficiency">Operational Efficiency</option>
                  <option value="Sales Cycle Optimization">Cycle Optimization</option>
                </select>
              </div>

              {/* Filter 5: Story Type */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  Story Type
                </label>
                <select
                  value={selectedStoryType}
                  onChange={(e) => setSelectedStoryType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Story Types</option>
                  <option value="Verified Customer Story">Verified Customer Story</option>
                  <option value="Approved Case Study">Approved Case Study</option>
                  <option value="Illustrative Business Scenario">Illustrative Scenario</option>
                </select>
              </div>

              {/* Filter 6: Evidence Status */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  Evidence Status
                </label>
                <select
                  value={selectedEvidenceStatus}
                  onChange={(e) => setSelectedEvidenceStatus(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Evidence</option>
                  <option value="Verified">Verified</option>
                  <option value="Partially Disclosed">Partially Disclosed</option>
                  <option value="Confidential Metrics">Confidential Metrics</option>
                  <option value="Illustrative">Illustrative</option>
                </select>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
              <div>
                Showing <strong className="text-slate-900 font-bold">{filteredStudies.length}</strong> of{' '}
                <strong className="text-slate-900 font-bold">{APPROVED_CASE_STUDIES.length}</strong> verified enterprise case studies
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-700 font-bold underline cursor-pointer"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Grid of Case Study Cards */}
          {filteredStudies.length === 0 ? (
            <div className="p-12 sm:p-16 text-center rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                No Case Studies Match Your Selected Filters
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Try broadening your criteria across Industry, Function, Technology, or Outcome, or clear the search query.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase font-mono cursor-pointer transition-all shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Enterprise Thumbnail */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                        <span className="font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-700">
                          {study.technology}
                        </span>
                        <span className="bg-blue-600/90 px-2.5 py-1 rounded-md font-bold">
                          {study.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 sm:p-8 pb-4">
                      {/* Classification Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase">
                          {study.industry}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase">
                          {study.function}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase">
                          {study.outcome}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase">
                          {study.evidenceStatus}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors font-heading leading-snug">
                        {study.title}
                      </h3>

                      {/* Company Name */}
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                        Context: <span className="font-semibold text-slate-700">{study.companyName}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        {study.subtitle}
                      </p>

                      {/* Metric Highlight Box */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-black font-mono text-slate-900">{study.metricBig}</div>
                          <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">{study.metricLabel}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                            {study.storyType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-7 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div className="text-xs font-mono text-slate-500">
                      Reading Time: <strong className="text-slate-800">{study.readingTime}</strong>
                    </div>

                    <Link
                      to={`/resources-hub/case-studies/stories/${study.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-blue-600 hover:text-blue-700 uppercase group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 08: EXECUTIVE INSIGHTS (Editorial Takeaways) ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Strategic Takeaways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Executive Insights &amp; Principles
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Empirical lessons gathered across hundreds of enterprise GTM deployments.
            </p>
          </div>

          <div className="space-y-4">
            {EXECUTIVE_INSIGHTS_DATA.map((item) => (
              <div
                key={item.number}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="text-2xl font-black font-mono text-blue-600 px-3 py-1 bg-blue-50 rounded-xl border border-blue-200 flex-shrink-0">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {item.insight}
                  </p>
                  <div className="text-xs font-mono text-slate-400">
                    Source: <span className="font-semibold text-slate-600">{item.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 09: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
            CONFIDENTIAL ARCHITECTURAL REVIEW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
            Facing a Similar Business Challenge?
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-8">
            Schedule an architectural review with our Principal Transformation Architects. We will benchmark your current revenue operations against top-decile peer telemetry and outline a tailored blueprint.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 text-sm font-mono uppercase tracking-wider transition-all gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/talk-to-expert"
              className="inline-flex items-center justify-center border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold px-8 py-4 rounded-xl text-sm font-mono uppercase tracking-wider shadow-xs transition-all gap-2"
            >
              <span>Talk to an Expert</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </Link>

            <Link
              to="/resources-hub"
              className="inline-flex items-center justify-center border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold px-6 py-4 rounded-xl text-sm font-mono uppercase tracking-wider transition-all gap-2"
            >
              <span>Explore Resources Hub</span>
            </Link>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl text-left">
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-6 text-center">
              Submit Your Case Study &amp; Architecture Request
            </h3>
            <CaseStudyIntakeForm
              pageContext="Case Studies Hub"
              defaultChallenge="Pipeline Growth"
              buttonText="Schedule Executive Review"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
