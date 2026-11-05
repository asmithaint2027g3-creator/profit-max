import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, ArrowRight, ChevronRight, CheckCircle2,
  Target, TrendingUp, Activity, Users, DollarSign,
  Compass, Filter, Search, RotateCcw, Award, Check
} from 'lucide-react';
import {
  APPROVED_CASE_STUDIES,
  FUNCTION_CASE_STUDIES_DATA,
  CaseStudyStory
} from '../../../data/caseStudiesData';

export default function ByFunctionCaseStudiesPage() {
  const [selectedFunction, setSelectedFunction] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = 'Transformation Stories Across the Revenue Organization | Case Studies | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const filteredStories = useMemo(() => {
    return APPROVED_CASE_STUDIES.filter((cs: CaseStudyStory) => {
      const matchFunction =
        selectedFunction === 'All' ||
        cs.function === selectedFunction ||
        cs.functions.some((fn) => fn.toLowerCase().includes(selectedFunction.toLowerCase()));

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.subtitle.toLowerCase().includes(q) ||
        cs.companyName.toLowerCase().includes(q) ||
        cs.summary.toLowerCase().includes(q) ||
        cs.function.toLowerCase().includes(q) ||
        cs.tags.some((t) => t.toLowerCase().includes(q));

      return matchFunction && matchSearch;
    });
  }, [selectedFunction, searchQuery]);

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
            <Link to="/resources-hub/case-studies" className="hover:text-blue-600 transition-colors">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">By Function</span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <Briefcase className="w-3.5 h-3.5 text-purple-600" />
              <span>COMMERCIAL FUNCTION DOSSIERS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Transformation Stories{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                Across the Revenue Organization.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Discover real-world outcomes structured across key revenue functions: Direct Sales, Demand Engineering, Revenue Operations, Customer Retention, Monetization, and Executive Revenue Leadership.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#function-sections"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/20 text-sm font-mono uppercase tracking-wider transition-all gap-2"
              >
                <span>Explore 6 Revenue Functions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl text-sm font-mono uppercase tracking-wider shadow-xs transition-all gap-2"
              >
                <span>Consult a Practice Architect</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 FUNCTIONAL DISCIPLINES ── */}
      <section id="function-sections" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Functional Operating Architectures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Functional Disciplines &amp; KPI Acceleration
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Inspect how modern revenue teams dissolve functional silos and deploy autonomous systems tailored to departmental mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FUNCTION_CASE_STUDIES_DATA.map((fn) => {
              const matchedStories = APPROVED_CASE_STUDIES.filter((cs) =>
                fn.relevantStorySlugs.includes(cs.slug)
              );

              return (
                <div
                  key={fn.id}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-purple-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                        {fn.badge}
                      </span>
                      <span className="text-xs font-mono font-black text-purple-600">{fn.kpi}</span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                      {fn.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {fn.description}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs">
                      <span className="text-slate-400 block text-[10px] font-mono uppercase font-bold mb-1">
                        Technology Enablement:
                      </span>
                      <span className="text-slate-800 font-medium leading-relaxed">{fn.enablement}</span>
                    </div>

                    <div className="mb-6">
                      <div className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-2">Eliminated Bottlenecks:</div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {fn.bottlenecks.map((bn, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                            <span>{bn}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-2">
                        Demonstrated Blueprints:
                      </span>
                      <div className="space-y-2">
                        {matchedStories.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/resources-hub/case-studies/stories/${s.slug}`}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-medium text-slate-800 hover:text-purple-700 transition-colors group"
                          >
                            <span className="truncate pr-2 font-semibold">{s.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-purple-600 flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FILTERABLE CASE STUDY LIBRARY BY FUNCTION ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
                Functional Filtering
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Explore Studies by Commercial Department
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'All', val: 'All' },
                { label: 'Sales & BD', val: 'Sales & BD' },
                { label: 'Marketing', val: 'Marketing & Demand Gen' },
                { label: 'RevOps', val: 'Revenue Operations' },
                { label: 'Customer Success', val: 'Customer Success & Retention' },
                { label: 'Executive Mgmt', val: 'Executive Revenue Management' }
              ].map((fn) => (
                <button
                  key={fn.val}
                  onClick={() => setSelectedFunction(fn.val)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedFunction === fn.val
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {fn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStories.map((study) => (
              <div
                key={study.id}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-700">
                        {study.function}
                      </span>
                      <span className="bg-purple-600/90 px-2.5 py-1 rounded-md font-bold">
                        {study.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pb-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-purple-600 transition-colors font-heading leading-snug">
                      {study.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                      Client Context: <span className="font-semibold text-slate-700">{study.companyName}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {study.subtitle}
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-black font-mono text-slate-900">{study.metricBig}</div>
                        <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">{study.metricLabel}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-mono text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                          {study.storyType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-7 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-500">
                    Technology: <strong className="text-slate-800">{study.technology}</strong>
                  </div>

                  <Link
                    to={`/resources-hub/case-studies/stories/${study.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-purple-600 hover:text-purple-700 uppercase group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-heading">
            Need to Align Your Commercial Revenue Functions?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
            Eliminate cross-departmental friction between Sales, Marketing, and RevOps with our unified commercial operating frameworks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-600/30 text-sm font-mono uppercase tracking-wider transition-all gap-2"
            >
              <span>Schedule RevOps Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resources-hub/case-studies"
              className="inline-flex items-center justify-center border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl text-sm font-mono uppercase tracking-wider transition-all gap-2"
            >
              <span>Return to Case Studies Hub</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
