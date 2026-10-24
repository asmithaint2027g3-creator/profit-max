import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  Zap,
  HelpCircle,
  Sparkles,
  Layers,
  Users,
  Compass,
  ArrowUpRight,
  Sliders,
  DollarSign,
  AlertCircle,
  Briefcase,
  UserCheck,
  Cpu,
  CheckCircle2,
  ChevronRight,
  Bot,
  ListOrdered,
  Calendar,
  Lock,
  Scale,
  FileCheck,
  BarChart2,
  BookOpen,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Check,
  AlertTriangle,
  Search
} from 'lucide-react';
import {
  engagementMeta,
  continuumCells,
  rulebandStats,
  table1_0_summary,
  engagementModels,
  pricingStructuresTable,
  sevenGuardrails,
  teamRoleArchitecture,
  decisionQuestions,
  modelComparisonTable,
  stagePlaybooksServices,
  stagePlaybooksRetail,
  stagePlaybooksPlatform,
  productLineNote,
  situationPlaybooksB1toB15,
  situationSequenceMapping,
  engagementJourneys,
  kpiLibraryTable,
  onboardingSteps,
  glossaryTerms,
  faqList,
  modelSelectorData
} from '../../data/engagementDossierData';

export default function Engagement() {
  const location = useLocation();
  const [activeNavSection, setActiveNavSection] = useState<string>('overview');
  const [activeModelIdx, setActiveModelIdx] = useState<number>(0);
  const [activeStageTab, setActiveStageTab] = useState<'services' | 'retail' | 'platform'>('services');
  const [activeJourneyIdx, setActiveJourneyIdx] = useState<number>(0);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1]);
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  // Selector state
  const [selectorSegment, setSelectorSegment] = useState<'services' | 'retail' | 'platform'>('services');
  const [selectorSituation, setSelectorSituation] = useState<string>('B1');

  // Handle in-page smooth hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveNavSection(id);
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'overview',
      'continuum',
      'models',
      'decision-guide',
      'tracks',
      'journeys',
      'situations',
      'stages',
      'commercials',
      'selector',
      'kpi-library',
      'onboarding',
      'faq',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNavSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filteredGlossary = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  // Selector resolved values
  const rawSituationData = situationPlaybooksB1toB15.find((b) => b.id === selectorSituation);
  const rawMapping = modelSelectorData.bySituation[selectorSituation];
  const segmentConfig = modelSelectorData.segmentNotes[selectorSegment];
  let resolvedSeq = rawMapping ? [...rawMapping.seq] : ['e2', 'e3'];
  if (selectorSituation === 'PE') resolvedSeq = ['e6', 'e5'];
  if (segmentConfig && segmentConfig.adj) resolvedSeq = segmentConfig.adj(resolvedSeq);
  const selectorModelNames = resolvedSeq.map(
    (code) => modelSelectorData.modelsMap[code] || code.toUpperCase()
  );

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">


      {/* ── 1. SECTION: HERO (DECISION-ORIENTED EXECUTIVE COMMAND - DARK INDUSTRY IMAGE) ── */}
      <section id="overview" className="scroll-mt-24 relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        {/* Background Image: Enterprise Architecture Command Center */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Enterprise Revenue Architecture"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>{engagementMeta.kicker}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                From Revenue Uncertainty to a <span className="text-blue-400">Clear Growth Plan</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                ProfitMachines helps organizations understand where revenue growth is getting blocked, identify the right commercial opportunities, and choose an engagement model suited to their stage, urgency, and risk tolerance. Our revenue architecture connects discovery, consulting, AI-driven automation, live sales execution, and performance-aligned partnerships through eight engagement models.
              </p>

              {/* Supporting Categories */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-mono">
                {engagementMeta.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-900/80 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#models"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                >
                  <span>Explore Engagement Models</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#selector"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                >
                  <Bot className="w-4 h-4 text-blue-400" />
                  <span>Find Your Recommended Model</span>
                </a>
                <Link
                  to="/offerings"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 px-2 py-3.5"
                >
                  <span>Explore Offerings & Discovery Stack</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Hero Image & Metric Framework (Architectural Enterprise Visual, No People) */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800 relative">
                {/* Non-people architectural image */}
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="Enterprise Revenue Architecture"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                      Commercial Framework
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>

                <div className="p-6 space-y-3.5">
                  <div className="text-xs text-slate-400 font-medium">
                    Pre-tested engagement architectures calibrated for risk, urgency, and metric attribution.
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                      <div className="text-xl font-extrabold font-mono text-white">08</div>
                      <div className="text-[11px] text-slate-400">Engagement Models</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                      <div className="text-xl font-extrabold font-mono text-white">07</div>
                      <div className="text-[11px] text-slate-400">Discovery Layers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Overview Statistics */}
          <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementMeta.counts.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                <div className="text-3xl font-extrabold font-mono text-white mb-1">{metric.value}</div>
                <div className="text-xs font-bold text-slate-300 mb-0.5">{metric.label}</div>
                <div className="text-[11px] text-slate-400">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. SECTION: ONE CONTINUUM. EIGHT WAYS TO BUY CERTAINTY ── */}
      <section id="continuum" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Commercial Continuum
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                One Continuum. Eight Ways to Buy Certainty.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Every ProfitMachines engagement sits on a continuum—from strategic advisory to partnerships with shared economics and live execution. The right model depends on the evidence available, the urgency of the problem, the commitment required, and how delivery risk should be allocated.
              </p>
            </div>
            <Link
              to="/engagement-model/models"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200 shrink-0"
            >
              <span>View All Eight Models Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Continuum Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {continuumCells.map((cell, idx) => (
              <a
                key={cell.id}
                href="#models"
                onClick={() => setActiveModelIdx(idx)}
                className="group rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {cell.id}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">
                      Step 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {cell.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {cell.question}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Inspect Model</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Table 1.0 Summary: Risk Allocation Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-white">Table 1.0 — Commercial Risk & Fee Architecture</h3>
                <p className="text-xs text-slate-400">Preserved from Revenue Architecture Dossier · Table 1.0</p>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                8 Models
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Model ID</th>
                    <th className="py-3 px-5">Engagement Model</th>
                    <th className="py-3 px-5">Risk Allocation</th>
                    <th className="py-3 px-5">Fee Structure</th>
                    <th className="py-3 px-5">Primary Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {table1_0_summary.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-blue-700">{row.id}</td>
                      <td className="py-3 px-5 font-bold text-slate-900">{row.model}</td>
                      <td className="py-3 px-5">{row.riskAllocation}</td>
                      <td className="py-3 px-5">{row.feeStructure}</td>
                      <td className="py-3 px-5 font-medium text-slate-800">{row.primaryOutcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SECTION: THE EIGHT ENGAGEMENT MODELS (DETAILED TABS & INSPECTION) ── */}
      <section id="models" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                In-Depth Model Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Eight Engagement Models. One Revenue Architecture.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Different business situations require different levels of strategic input, execution support, validation, and shared accountability. ProfitMachines offers eight models to match those needs.
              </p>
            </div>
            <Link
              to="/engagement-model/models"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
            >
              Open Dedicated Models Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
            {engagementModels.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveModelIdx(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeModelIdx === idx
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="font-mono text-blue-400">{m.id}</span>
                <span>{m.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Model Detailed Card */}
          {(() => {
            const model = engagementModels[activeModelIdx];
            return (
              <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800">
                <div className="p-6 sm:p-10 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold px-3 py-1 rounded bg-blue-600 text-white">
                        {model.id}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                        {model.subtitle}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      We Carry: <span className="text-white font-bold">{model.riskAllocation.weCarry}</span> · Client: <span className="text-white font-bold">{model.riskAllocation.clientCarries}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    {model.name}
                  </h3>
                  <div className="text-sm sm:text-base text-blue-300 italic max-w-2xl">
                    &ldquo;{model.quote.replace(/"/g, '')}&rdquo;
                  </div>
                </div>

                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Attributes (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Operating Parameters
                    </span>
                    <div className="space-y-3">
                      {model.attributes.map((attr, aIdx) => (
                        <div key={aIdx} className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs sm:text-sm">
                          <span className="font-bold text-white block mb-0.5">{attr.label}:</span>
                          <span className="text-slate-300 leading-relaxed">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Sub-Packages (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Sub-Packages & Fast Starts
                    </span>
                    <div className="space-y-2.5">
                      {model.subPackages.map((sub) => (
                        <div key={sub.id} className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white">{sub.name}</span>
                            {sub.duration && (
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700">
                                {sub.duration}
                              </span>
                            )}
                          </div>
                          <div className="text-slate-400 text-[11px]">
                            <span className="text-slate-300 font-medium">{sub.detailLabel}:</span> {sub.detailValue}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── 4. SECTION: EIGHT-QUESTION DECISION GUIDE ── */}
      <section id="decision-guide" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Decision Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Eight-Question Model Selection Guide
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Answer the question that matches your internal operational reality to identify your recommended starting engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {decisionQuestions.map((q, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  q.accent
                    ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-300/40 shadow-xs'
                    : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {q.qNum}
                    </span>
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {q.recommendation}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 leading-snug">
                    {q.question}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {q.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SECTION: TWO DELIVERY TRACKS ── */}
      <section id="tracks" className="scroll-mt-24 py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Dual Disciplines
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Two Delivery Tracks. One Unified Architecture.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
                Track A determines what should be done. Track B builds the systems that help execute it.
              </p>
            </div>
            <Link
              to="/engagement-model/delivery-tracks"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-xs sm:text-sm shadow-md shrink-0"
            >
              <span>Explore Tracks Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="rounded-3xl bg-slate-800/80 border border-slate-700 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-sm">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Track A — Consulting Services</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Human-led discovery, strategy, playbooks, enablement, and governance. Seasoned revenue architects and pricing specialists who diagnose systemic bottlenecks and formulate execution blueprints.
                </p>
              </div>
              <div className="text-xs text-blue-400 font-semibold">
                Core deliverables: GTM blueprints, ICP models, qualification criteria, pricing playbooks.
              </div>
            </div>

            <div className="rounded-3xl bg-slate-800/80 border border-slate-700 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-5 shadow-sm">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Track B — AI-Driven Automation</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Agentic systems, machine-learning models, workflow automation, and telemetry pipelines. Intelligent software agents that operationalize proven revenue plays at scale.
                </p>
              </div>
              <div className="text-xs text-indigo-400 font-semibold">
                Core deliverables: Autonomous SDR fleets, propensity scoring models, CRM telemetry, deal rooms.
              </div>
            </div>
          </div>

          {/* Explicit Scope Boundaries Callout */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 text-xs text-slate-400 max-w-4xl">
            <span className="font-bold text-slate-200 block mb-0.5">Explicit Scope Boundaries:</span>
            ProfitMachines engagements are strictly focused on Sales, Revenue, GTM, and Demand. General enterprise AI governance, back-office HR/finance automation, and general cloud engineering are explicitly excluded.
          </div>
        </div>
      </section>

      {/* ── 6. SECTION: FIVE ENGAGEMENT JOURNEYS ── */}
      <section id="journeys" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Progression Sequences
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Engagement Journeys: From First Proof to Long-Term Growth
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Clients rarely buy in isolation. A sequence reduces uncertainty, validates the opportunity, and progressively scales economic commitment.
              </p>
            </div>
            <Link
              to="/engagement-model/journeys"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
            >
              Open Dedicated Journeys Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Journey Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
            {engagementJourneys.map((j, idx) => (
              <button
                key={idx}
                onClick={() => setActiveJourneyIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeJourneyIdx === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Journey {String.fromCharCode(65 + idx)} — {j.title.split('—')[1]?.replace(/"/g, '').trim()}
              </button>
            ))}
          </div>

          {/* Active Journey Stepper */}
          {(() => {
            const journey = engagementJourneys[activeJourneyIdx];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                      {journey.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {journey.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 self-start sm:self-auto">
                    {journey.steps.length} Sequenced Phases
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {journey.steps.map((st, sIdx) => (
                    <div key={sIdx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                            {st.step}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 font-semibold">
                            {st.duration}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">{st.model}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                        Milestone Gate
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── 7. SECTION: BUSINESS SITUATION PLAYBOOKS ── */}
      <section id="situations" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                15 Pre-Packaged Plays
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                When the Business Has a Problem, Choose the Right Play
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Connect your business situation directly to its trigger signals, pre-tested sequence, and typical duration.
              </p>
            </div>
            <Link
              to="/engagement-model/business-situations"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
            >
              Open Dedicated Situations Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {situationPlaybooksB1toB15.slice(0, 9).map((b) => {
              const seq = situationSequenceMapping.find(
                (s) => s.situation.toLowerCase().slice(0, 10) === b.situation.toLowerCase().slice(0, 10)
              );
              return (
                <div key={b.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {b.id}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{b.duration}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{b.situation}</h3>
                    <div className="p-2 rounded-lg bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-950 mb-3">
                      <span className="font-bold">Triggers:</span> {b.triggerSignals}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Sequence:</span>
                    <span className="font-mono font-bold text-blue-700">
                      {seq ? seq.modelSequence.map((m) => m.label).join(' → ') : 'Custom'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/engagement-model/business-situations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-xs"
            >
              <span>Explore All 15 Situations & PE Portfolio Play</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. SECTION: COMPANY & PRODUCT STAGE PLAYBOOKS ── */}
      <section id="stages" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Product-Line Economics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Growth Playbooks by Company and Product Stage
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              {productLineNote}
            </p>
          </div>

          {/* Segment Selector Tabs */}
          <div className="flex items-center gap-2 mb-6">
            {[
              { id: 'services' as const, label: 'Services Companies' },
              { id: 'retail' as const, label: 'Retail & Commerce' },
              { id: 'platform' as const, label: 'Platform Companies' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStageTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeStageTab === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Stage Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4 w-32">Stage</th>
                    <th className="py-3 px-5">Signature Situation</th>
                    <th className="py-3 px-4">Discovery Focus</th>
                    <th className="py-3 px-5">Recommended Offering Bundle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {(activeStageTab === 'services'
                    ? stagePlaybooksServices
                    : activeStageTab === 'retail'
                    ? stagePlaybooksRetail
                    : stagePlaybooksPlatform
                  ).map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-900 bg-blue-50/30">
                        {row.stage}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-slate-900">{row.signatureSituation}</td>
                      <td className="py-3.5 px-4 font-mono text-xs">{row.discoveryFocus}</td>
                      <td className="py-3.5 px-5 font-mono text-xs text-blue-700">{row.recommendedBundle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. SECTION: COMMERCIAL MODELS & SEVEN GUARDRAILS ── */}
      <section id="commercials" className="scroll-mt-24 py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Commercial Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Commercial Alignment by Design
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Commercial terms reflect the work, evidence, risk, and accountability involved. Every engagement operates under transparent scopes, conversion credits, and verified metrics.
            </p>
          </div>

          {/* Table 8.0 Matrix */}
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700 overflow-hidden shadow-xl mb-12">
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <span className="font-bold text-sm text-white">Table 8.0 — Commercial Terms Matrix</span>
              <span className="text-xs font-mono text-slate-400">Eight Engagement Models</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Model</th>
                    <th className="py-3 px-5">Base Fee Structure</th>
                    <th className="py-3 px-5">Variable / Outcome Component</th>
                    <th className="py-3 px-5">Payment Terms</th>
                    <th className="py-3 px-5">Minimum Commitment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {pricingStructuresTable.map((p, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-white">{p.model}</td>
                      <td className="py-3 px-5">{p.base}</td>
                      <td className="py-3 px-5 text-emerald-400 font-semibold">{p.variable}</td>
                      <td className="py-3 px-5 text-slate-400">{p.paymentTerms}</td>
                      <td className="py-3 px-5 font-mono">{p.minimumCommitment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Seven Guardrails Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Seven Standard Commercial Guardrails</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sevenGuardrails.map((g, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 text-xs flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-blue-400 font-bold block mb-1">Guardrail 0{idx + 1}</span>
                    <h4 className="font-bold text-white mb-1.5">{g.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{g.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. SECTION: INTERACTIVE MODEL SELECTOR (EMBEDDED ENGINE) ── */}
      <section id="selector" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              <Bot className="w-3.5 h-3.5" />
              <span>Interactive Decision Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Find Your Recommended Engagement Sequence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Select your segment and pressing business challenge to receive a deterministic recommendation based on the ProfitMachines 2026 Dossier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                <span className="text-xs font-mono font-bold text-blue-700 block mb-2 uppercase">1. Select Segment</span>
                <div className="space-y-2">
                  {[
                    { id: 'services' as const, label: 'Services Company', desc: 'Monetizes people-hours and relationships' },
                    { id: 'retail' as const, label: 'Retail & Commerce', desc: 'Monetizes margin per transaction & channel flow' },
                    { id: 'platform' as const, label: 'Platform Company', desc: 'Monetizes usage, seats, and consumption' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectorSegment(s.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                        selectorSegment === s.id
                          ? 'bg-blue-50 border-blue-400 font-bold text-blue-900 ring-1 ring-blue-300'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-sm">{s.label}</div>
                      <div className="text-[11px] text-slate-500 font-normal">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                <span className="text-xs font-mono font-bold text-blue-700 block mb-2 uppercase">2. Select Situation</span>
                <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 text-xs">
                  {situationPlaybooksB1toB15.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectorSituation(b.id)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                        selectorSituation === b.id
                          ? 'bg-blue-50 border-blue-400 font-bold text-blue-900 ring-1 ring-blue-300'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="font-mono text-slate-400 mr-1.5">{b.id}</span>
                      <span>{b.situation}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Output */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Deterministic Playbook Recommendation
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {rawSituationData?.situation}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1">
                    Triggers: {rawSituationData?.triggerSignals}
                  </div>
                </div>

                {/* Model Path */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Recommended Sequence
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {selectorModelNames.map((name, idx) => (
                      <React.Fragment key={idx}>
                        <div className="px-3.5 py-2 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs shadow-2xs">
                          {name}
                        </div>
                        {idx < selectorModelNames.length - 1 && (
                          <span className="text-slate-400 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Duration</span>
                    <span className="font-bold text-white text-sm">{rawSituationData?.duration || '6–8 wks'}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Delivery Dynamics</span>
                    <span className="font-bold text-emerald-400 text-xs">{selectorSegment.toUpperCase()}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">Rationale:</span>
                  {rawMapping?.note || 'Balanced engagement sequence designed to prove value before scaling commitment.'}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs"
                  >
                    <span>Request Proposal for this Sequence</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    to="/engagement-model/model-selector"
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Open Full Selector Page →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. SECTION: KPI LIBRARY & MEASUREMENT BASELINES ── */}
      <section id="kpi-library" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Empirical Instrumentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Measure What Moves Revenue
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Every discovery layer carries leading signals and lagging financial impact. Baseline locks and attribution rules are formalized pre-signature.
              </p>
            </div>
            <Link
              to="/engagement-model/kpi-library"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
            >
              Open Dedicated KPI Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4 w-32">Layer</th>
                    <th className="py-3 px-5">Leading Indicators</th>
                    <th className="py-3 px-5">Lagging Indicators</th>
                    <th className="py-3 px-5">Typical PoV Success Bar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {kpiLibraryTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-900 bg-blue-50/30">{row.layer}</td>
                      <td className="py-3.5 px-5 text-xs text-slate-800">{row.leadingIndicators}</td>
                      <td className="py-3.5 px-5 text-xs text-slate-800">{row.laggingIndicators}</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                          {row.typicalPovSuccessBar}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. SECTION: HOW AN ENGAGEMENT STARTS (ONBOARDING) ── */}
      <section id="onboarding" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Mobilization Sequence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How an Engagement Starts
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              A structured onboarding sequence from initial Fit & Frame conversation to formal baseline lock and gate reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {onboardingSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {step.timing}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Phase 0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 max-w-2xl">
            <span className="font-bold">Notice:</span> Delivery resources are scheduled only upon mutual charter execution and baseline verification.
          </div>
        </div>
      </section>

      {/* ── 13. SECTION: GLOSSARY & FREQUENTLY ASKED QUESTIONS ── */}
      <section id="faq" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 7 cols: FAQs */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Common Inquiries
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
              </div>

              {faqList.map((faq, idx) => {
                const isOpen = openFaqIndices.includes(idx);
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50"
                    >
                      <span className="font-bold text-slate-900 text-sm">0{idx + 1}. {faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right 5 cols: Searchable Glossary */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Dossier Glossary
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  Key Architectural Terms
                </h3>
                <div className="relative mb-4">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search terms (PoV, RGA, ICP...)"
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                  />
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto space-y-2 pr-1">
                {filteredGlossary.map((g, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
                    <span className="font-mono font-bold text-blue-900 block mb-1">{g.term}</span>
                    <p className="text-slate-600 leading-relaxed text-[11px]">{g.definition}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 14. SECTION: CLOSING STRATEGIC CONSULTATION CTA ── */}
      <section id="contact" className="scroll-mt-24 py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-3">
                Engage ProfitMachines
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
                From Guesswork to Predictive Revenue Intelligence
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Share your business situation, segment, and current stage. ProfitMachines can help identify a suitable engagement path and outline the baseline and success criteria needed to begin.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm sm:text-base"
                >
                  <span>Request Engagement Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-4 rounded-xl transition-all text-sm sm:text-base border border-slate-700"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
