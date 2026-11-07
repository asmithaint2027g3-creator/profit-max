import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Activity, TrendingUp, Zap,
  BarChart3, Layers, Compass, Shield, CheckCircle2,
  AlertTriangle, Quote, Cpu, Radar, LineChart, Sparkles,
  ArrowUpRight, HelpCircle, ChevronDown, Award, Scale,
  DollarSign, Check, Clock, Database, Search, Target,
  FileText, ShieldCheck, PieChart, RefreshCw, Sliders, Users,
  Workflow, GitMerge
} from 'lucide-react';
import { GrowthCapabilityPageData } from './types';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

interface GrowthSciencePageTemplateProps {
  data: GrowthCapabilityPageData;
}

export function GrowthSciencePageTemplate({ data }: GrowthSciencePageTemplateProps) {
  const location = useLocation();

  // Defensive array safeguards to prevent runtime errors
  const subSubmenus = data.subSubmenus || [];
  const methodologyWorkflow = data.methodologyWorkflow || [];
  const primaryKpis = data.primaryKpis || [];
  const scenarios = data.scenarios || [];
  const dataConsiderations = data.dataConsiderations || [];
  const decisionSupport = data.decisionSupport || [];
  const contextContributingFactors = data.contextContributingFactors || [];
  const symptomsAndConsequences = data.symptomsAndConsequences || [];
  const targetDecisionMakers = data.targetDecisionMakers || [];

  const [activeSubmenuId, setActiveSubmenuId] = useState<string>(
    subSubmenus[0]?.slug || subSubmenus[0]?.id || ''
  );

  // Interactive Equation / Calculator State
  const [calcOpportunities, setCalcOpportunities] = useState<number>(120);
  const [calcWinRate, setCalcWinRate] = useState<number>(28);
  const [calcDealValue, setCalcDealValue] = useState<number>(65000);
  const [calcCycleDays, setCalcCycleDays] = useState<number>(75);

  // Derived calculation: Sales Velocity = (Opps * WinRate * DealValue) / CycleDays
  const calculatedSalesVelocity = Math.round(
    (calcOpportunities * (calcWinRate / 100) * calcDealValue) / Math.max(calcCycleDays, 1)
  );

  // Robust multi-stage scroll & custom event handler
  useEffect(() => {
    document.title = `${data.title} | Growth Science | ProfitMachines`;

    const scrollToAnchor = (rawHash: string) => {
      const targetId = rawHash.replace(/^#/, '');
      if (!targetId) return;

      const match = subSubmenus.find(
        (s) =>
          s.slug?.toLowerCase() === targetId.toLowerCase() ||
          s.id?.toLowerCase() === targetId.toLowerCase()
      );
      if (match) {
        setActiveSubmenuId(match.slug || match.id);
      }

      const executeScroll = () => {
        const el =
          document.getElementById(targetId) ||
          document.getElementById(targetId.toLowerCase()) ||
          document.querySelector(`[name="${targetId}"]`) ||
          document.querySelector(`[data-section-id="${targetId}"]`);
        if (el) {
          const navOffset = 95;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: Math.max(0, elementPosition - navOffset),
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };

      if (!executeScroll()) {
        const t1 = setTimeout(executeScroll, 60);
        const t2 = setTimeout(executeScroll, 180);
        const t3 = setTimeout(executeScroll, 400);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    };

    if (location.hash) {
      scrollToAnchor(location.hash);
    }

    // Direct listener for custom hash navigation events from mega-menu
    const handleCustomNav = (e: any) => {
      if (e?.detail?.hash) {
        scrollToAnchor(e.detail.hash);
      }
    };

    window.addEventListener('pm:hash-navigate', handleCustomNav);
    return () => {
      window.removeEventListener('pm:hash-navigate', handleCustomNav);
    };
  }, [location.hash, data, subSubmenus]);

  // Icon selector based on capability theme
  const getThemeIcon = () => {
    switch (data.visualTheme) {
      case 'physics': return Activity;
      case 'intelligence': return LineChart;
      case 'discovery': return Compass;
      case 'leakage': return Radar;
      case 'bundling': return Layers;
      case 'value': return DollarSign;
      case 'innovation': return Sparkles;
      case 'acceleration': return Zap;
      case 'command': return Cpu;
      default: return Activity;
    }
  };

  const PageIcon = getThemeIcon();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ── SECTION 01: EXECUTIVE HERO ── */}
      <section id="overview" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to="/growth-science" className="hover:text-blue-400 transition-colors">Growth Science</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">{data.title}</span>
          </div>

          <div className="max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>GROWTH SCIENCE ENGINE</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400">{subSubmenus.length} SPECIALIZED CAPABILITIES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-4 font-heading">
                {data.title}:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  {data.heroHeadline}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl">
                {data.heroSupporting}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#subsections"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/25 inline-flex items-center gap-2"
                >
                  <span>Explore All {subSubmenus.length} Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#consultation"
                  className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Request Capability Audit</span>
                </a>
              </div>

              {/* Decision Maker Pills */}
              {targetDecisionMakers.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-6 text-xs font-mono">
                  <span className="text-slate-400 font-bold">Governed For:</span>
                  {targetDecisionMakers.map((dm, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800/90 text-slate-300 text-[11px]">
                      {dm}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: BUSINESS CONTEXT ── */}
      <section id="context" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
              Context & Operating Environment
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Where Commercial Performance Breaks Down
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Understanding why enterprise growth slows requires examining the structural disconnect between executive strategy and daily go-to-market execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Who Experiences This Problem</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {data.contextWhoExperiences}
              </p>
              <div className="text-xs font-mono text-slate-400">
                Key Stakeholders: C-Suite, RevOps, Commercial Strategy
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">The Business Situation</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {data.contextSituation}
              </p>
              <div className="text-xs font-mono text-slate-400">
                Operating Reality: Annual quota stretch with flatlined capacity
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Why It Is Difficult to Detect</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {data.contextWhyDifficult}
              </p>
              <div className="text-xs font-mono text-slate-400">
                Measurement Gap: Non-linear systemic pipeline decay
              </div>
            </div>
          </div>

          {/* Contributing Operational Factors */}
          {contextContributingFactors.length > 0 && (
            <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
                Contributing Operational & Commercial Factors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {contextContributingFactors.map((factor, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 03: BUSINESS PROBLEM & CONSEQUENCES ── */}
      {symptomsAndConsequences.length > 0 && (
        <section id="consequences" className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest mb-2">
                Financial & Operational Friction
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                The Measurable Cost of Commercial Misalignment
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Left undiagnosed, systemic GTM friction cascades across customer acquisition costs, deal cycle velocity, gross margin realization, and forecast predictability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {symptomsAndConsequences.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Diagnostic #{idx + 1}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Observed Operational Symptom:
                    </div>
                    <p className="text-sm font-medium text-slate-900 leading-relaxed">
                      {item.symptom}
                    </p>
                  </div>

                  <div className="space-y-1.5 border-t border-slate-200/60 pt-3">
                    <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                      Commercial & Margin Consequence:
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.consequence}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 04: SUB-SUBMENU CAPABILITY SECTIONS (MATCHING OFFERINGS DESIGN SYSTEM) ── */}
      <section id="subsections" className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
                Capability Architecture · Sub-Submenus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
                Comprehensive Modules for {data.title}
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                Explore the {subSubmenus.length} dedicated capability sections below. Click any module anchor to jump directly to its complete operational specification, inputs, decision support logic, and KPI framework.
              </p>
            </div>

            {/* Quick jump anchor pill bar */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto max-w-full overflow-x-auto no-scrollbar">
              {subSubmenus.map((sub, sIdx) => {
                const subKey = sub.slug || sub.id;
                return (
                  <a
                    key={subKey}
                    href={`#${subKey}`}
                    onClick={() => setActiveSubmenuId(subKey)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activeSubmenuId === subKey
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                    }`}
                  >
                    <span className="font-mono mr-1">0{sIdx + 1}.</span>
                    {sub.title}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Deep Capability Cards Stack */}
          <div className="space-y-12">
            {subSubmenus.map((sub, sIdx) => {
              const subKey = sub.slug || sub.id;
              const topics = sub.topics || [];
              const kpis = sub.kpis || [];

              return (
                <div
                  key={subKey}
                  id={subKey}
                  data-section-id={subKey}
                  className="scroll-mt-32 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  {/* Card Top Header Bar */}
                  <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs border border-blue-400/30">
                          0{sIdx + 1}
                        </span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                          ANCHOR: #{subKey}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                        {sub.title}
                      </h3>
                    </div>

                    <div className="max-w-md p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                        Business Question Resolved:
                      </span>
                      <p className="text-slate-300 font-medium leading-relaxed">
                        "{sub.businessQuestion}"
                      </p>
                    </div>
                  </div>

                  {/* Card Body (Offerings Light Design) */}
                  <div className="p-6 sm:p-8 space-y-8 bg-white">
                    <p className="text-base text-slate-700 leading-relaxed max-w-4xl">
                      {sub.explanation}
                    </p>

                    {/* Methodological Topics Grid */}
                    {topics.length > 0 && (
                      <div className="space-y-4">
                        <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                          Detailed Methodological Topics ({topics.length}):
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {topics.map((topic, tIdx) => (
                            <div
                              key={tIdx}
                              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
                            >
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono text-[10px] font-extrabold shrink-0">
                                    {tIdx + 1}
                                  </span>
                                  <span className="leading-snug">{topic.title}</span>
                                </div>

                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {topic.description}
                                </p>
                              </div>

                              <div className="space-y-2 pt-2 border-t border-slate-200/60">
                                <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] text-slate-700 space-y-0.5">
                                  <span className="font-mono text-blue-600 font-bold block">Business Evidence:</span>
                                  <span className="text-slate-600 leading-tight block">{topic.businessEvidence}</span>
                                </div>

                                <div className="text-[11px] text-slate-600">
                                  <span className="font-mono text-emerald-600 font-bold">Decisions Enabled: </span>
                                  <span className="leading-tight">{topic.decisionsEnabled}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Enterprise Use Case & Telemetry Visual Model */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                      {sub.useCase && (
                        <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3 flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Empirical Enterprise Use Case:</span>
                            </div>
                            <div className="text-xs text-slate-700 space-y-2.5">
                              <div><strong className="text-slate-900">Situation:</strong> {sub.useCase.situation}</div>
                              <div><strong className="text-blue-700">Action:</strong> {sub.useCase.action}</div>
                              <div><strong className="text-emerald-800">Outcome:</strong> {sub.useCase.outcome}</div>
                            </div>
                          </div>
                          <div className="pt-2 text-[10px] font-mono text-emerald-700 font-medium">
                            Status: Verified Commercial Deployment
                          </div>
                        </div>
                      )}

                      {sub.visualModel && (
                        <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-3 flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center justify-between mb-3">
                              <span>{sub.visualModel.caption}</span>
                              <span className="text-[10px] text-slate-400 font-mono">Model: {sub.visualModel.type}</span>
                            </div>

                            {sub.visualModel.metrics && (
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                                {sub.visualModel.metrics.map((m, mIdx) => (
                                  <div key={mIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                                    <div className="text-[10px] font-mono text-slate-400 truncate">{m.label}</div>
                                    <div className="text-sm font-extrabold text-white mt-1 font-mono">{m.value}</div>
                                    {m.delta && <div className="text-[10px] text-emerald-400 font-mono font-semibold">{m.delta}</div>}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            Telemetry: Automated continuous mathematical reconciliation
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Governing KPIs Bottom Pill Bar */}
                    {kpis.length > 0 && (
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                          <span className="text-slate-500 font-bold uppercase tracking-wider">Governing KPIs:</span>
                          {kpis.map((kpi, kIdx) => (
                            <span key={kIdx} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800">
                              {kpi.name}: <strong className="text-blue-700">{kpi.target}</strong>
                            </span>
                          ))}
                        </div>

                        <a
                          href="#consultation"
                          className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors font-mono"
                        >
                          <span>Request Capability Audit</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: METHODOLOGY & WORKFLOW ── */}
      {methodologyWorkflow.length > 0 && (
        <section id="workflow" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
                Sequential Execution Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                How the {data.title} Engine Operates
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                A disciplined, phased operational workflow ensuring empirical evidence gathering, mathematical modeling, and rigorous governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {methodologyWorkflow.map((step, sIdx) => (
                <div key={sIdx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                        {step.stepNumber}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Phase {sIdx + 1}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h3>

                    <div className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900 font-mono text-[11px] block mb-0.5">Activity:</strong>
                      {step.activity}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 space-y-1">
                    <div>
                      <span className="font-mono font-bold text-blue-600">Input: </span>
                      <span>{step.input}</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-emerald-600">Output: </span>
                      <span>{step.output}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 06: KPI SCORECARD + INTERACTIVE CALCULATOR ── */}
      <section id="scorecard" className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
                Empirical Measurement Framework
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                KPI & Financial Impact Scorecard
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Every metric is strictly defined with its underlying mathematical equation, reporting window, and baseline-to-target trajectory.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-mono flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Calibrated Baseline Modeling Engine</span>
            </div>
          </div>

          {/* Interactive Calculator Simulation */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
              <div>
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  <span>Interactive Scenario Modeling Engine</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  Simulate Sales Velocity & Revenue Leverage Impact
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  Active Qualified Opps: <strong className="text-blue-400">{calcOpportunities}</strong>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={calcOpportunities}
                  onChange={(e) => setCalcOpportunities(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  Stage Win Rate %: <strong className="text-blue-400">{calcWinRate}%</strong>
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="1"
                  value={calcWinRate}
                  onChange={(e) => setCalcWinRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  Average Deal Size: <strong className="text-blue-400">${(calcDealValue / 1000).toFixed(0)}K</strong>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="250000"
                  step="5000"
                  value={calcDealValue}
                  onChange={(e) => setCalcDealValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  Sales Cycle Length: <strong className="text-blue-400">{calcCycleDays} Days</strong>
                </label>
                <input
                  type="range"
                  min="20"
                  max="180"
                  step="5"
                  value={calcCycleDays}
                  onChange={(e) => setCalcCycleDays(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>

            {/* Calculated Output Pill */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">Calculated Revenue Velocity:</span>
                <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                  ${calculatedSalesVelocity.toLocaleString()} / Day
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  (${(calculatedSalesVelocity * 30 / 1000).toFixed(1)}K / Month Run-Rate)
                </span>
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                Dynamic sensitivity: A 10% reduction in cycle days yields +${Math.round(calculatedSalesVelocity * 0.11).toLocaleString()}/day
              </div>
            </div>
          </div>

          {/* Primary KPIs Cards */}
          {primaryKpis.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryKpis.map((kpi, kIdx) => (
                <div key={kIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded">
                      {kpi.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{kpi.reportingPeriod}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">{kpi.name}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{kpi.definition}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded-lg bg-white border border-slate-200">
                      <div className="text-[10px] font-mono text-slate-400">Baseline</div>
                      <div className="text-xs font-bold text-slate-700 mt-0.5">{kpi.baseline}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-200">
                      <div className="text-[10px] font-mono text-blue-600">Target</div>
                      <div className="text-xs font-bold text-blue-700 mt-0.5">{kpi.target}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                      <div className="text-[10px] font-mono text-emerald-600">Benchmark</div>
                      <div className="text-xs font-bold text-emerald-700 mt-0.5">{kpi.illustrativeValue}</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    <strong className="text-slate-900 font-mono text-[11px] block mb-0.5">Financial Interpretation:</strong>
                    {kpi.interpretation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 07: BUSINESS SCENARIO ── */}
      {scenarios.length > 0 && (
        <section id="scenario" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
                Representative Case Scenario
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Practical Enterprise Transformation Walkthrough
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Examine how an enterprise organization applies this capability to diagnose friction, restructure commercial terms, and achieve measurable margin lift.
              </p>
            </div>

            <div className="space-y-8">
              {scenarios.map((sc, sIdx) => (
                <div key={sIdx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                        {sc.industry}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{sc.title}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold self-start sm:self-auto">
                      Representative Model Walkthrough
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <span className="font-mono text-slate-500 font-bold block uppercase">Baseline Situation:</span>
                      <p className="text-slate-800 leading-relaxed">{sc.baselineSituation}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-1">
                      <span className="font-mono text-rose-600 font-bold block uppercase">Observed Problem:</span>
                      <p className="text-rose-950 leading-relaxed">{sc.observedProblem}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs space-y-1">
                      <span className="font-mono text-blue-600 font-bold block uppercase">Relevant Analysis:</span>
                      <p className="text-blue-950 leading-relaxed">{sc.analysis}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                      <span className="font-mono text-emerald-600 font-bold block uppercase">Decision Evaluated:</span>
                      <p className="text-emerald-950 leading-relaxed">{sc.decisionEvaluated}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
                      <span className="font-mono text-emerald-400 font-bold uppercase">Expected Mechanism of Improvement:</span>
                      <span className="font-mono text-slate-400">Validating Outcome Metrics</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {sc.expectedImprovement}
                    </p>
                    {sc.validatingMetrics && sc.validatingMetrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {sc.validatingMetrics.map((vm, vmIdx) => (
                          <span key={vmIdx} className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 font-mono text-xs border border-slate-700">
                            {vm}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-slate-500 font-mono">
                    <span className="font-bold text-slate-700">Underlying Model Assumptions: </span>
                    {sc.assumptions}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 08: DATA & IMPLEMENTATION CONSIDERATIONS ── */}
      {dataConsiderations.length > 0 && (
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
                Implementation Governance
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Data Requirements & Operational Boundaries
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Transparent assessment of data dependencies, hygiene standards, stakeholder ownership, and operational constraints required for successful execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dataConsiderations.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 uppercase">Requirement #{idx + 1}</span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      item.impactLevel === 'Critical'
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {item.impactLevel} Dependency
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 09: DECISION SUPPORT ── */}
      {decisionSupport.length > 0 && (
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
                Executive Decision Matrix
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                How to Prioritize Your Next Strategic Move
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Guidance for C-suite decision-makers on what to investigate first, which trade-offs to evaluate, and how to sequence operational remediation.
              </p>
            </div>

            <div className="space-y-4">
              {decisionSupport.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                      {item.priority}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Focus: {item.focusArea}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="font-mono text-slate-500 font-bold block mb-1">Key Metrics to Audit:</span>
                      <span className="text-slate-800 font-medium">{item.keyMetrics}</span>
                    </div>

                    <div>
                      <span className="font-mono text-slate-500 font-bold block mb-1">Strategic Trade-Offs:</span>
                      <span className="text-slate-800 leading-relaxed">{item.tradeOffs}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                      <span className="font-mono text-blue-700 font-bold block mb-1">Recommended Action:</span>
                      <span className="text-slate-900 font-medium leading-relaxed">{item.recommendedAction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 10: FINAL CONVERSION & INTAKE FORM ── */}
      <section id="consultation" className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>EXECUTIVE DIAGNOSTIC ENGAGEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
                Lock Your Baselines and Accelerate Revenue Growth
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                Request a confidential diagnostic brief on {data.title}. Our team will evaluate your commercial telemetry, isolate structural friction, and model your deterministic expansion path.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>36-month empirical transaction & conversion rate audit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Granular unit economics, cost-to-serve, and margin stack deconstruction</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Stochastic board forecast scenario calibration with confidence intervals</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-blue-400 font-bold block mb-1">Confidentiality Guarantee:</span>
                Enterprise commercial data is safeguarded under mutual non-disclosure and SOC2 Type II compliance standards.
              </div>
            </div>

            {/* Live Integrated Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 border-b border-slate-800 pb-4">
                  <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Executive Intake Brief
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Initialize {data.title} Assessment
                  </h3>
                </div>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default GrowthSciencePageTemplate;
