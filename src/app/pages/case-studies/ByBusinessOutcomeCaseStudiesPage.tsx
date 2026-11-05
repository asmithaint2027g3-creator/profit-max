import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, ArrowRight, ChevronRight, CheckCircle2,
  Layers, Filter, Search, RotateCcw, Sparkles, ShieldCheck,
  Target, BarChart3, DollarSign, Award, Clock, ArrowUpRight,
  PieChart, Activity, Gauge
} from 'lucide-react';
import {
  APPROVED_CASE_STUDIES,
  OUTCOME_CASE_STUDIES_DATA,
  CaseStudyStory
} from '../../../data/caseStudiesData';

export default function ByBusinessOutcomeCaseStudiesPage() {
  const [selectedOutcome, setSelectedOutcome] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = 'Explore Transformation by Business Outcome | Case Studies | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const filteredStories = useMemo(() => {
    return APPROVED_CASE_STUDIES.filter((cs: CaseStudyStory) => {
      const matchOutcome =
        selectedOutcome === 'All' ||
        cs.outcome === selectedOutcome ||
        cs.outcomes.some((o) => o.toLowerCase().includes(selectedOutcome.toLowerCase()));

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.subtitle.toLowerCase().includes(q) ||
        cs.companyName.toLowerCase().includes(q) ||
        cs.summary.toLowerCase().includes(q) ||
        cs.outcome.toLowerCase().includes(q) ||
        cs.tags.some((t) => t.toLowerCase().includes(q));

      return matchOutcome && matchSearch;
    });
  }, [selectedOutcome, searchQuery]);

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
            <span className="text-slate-900 font-bold">By Business Outcome</span>
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
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>QUANTIFIED COMMERCIAL OUTCOMES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Explore Transformation by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                Business Outcome.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Discover real-world enterprise case studies organized by verified business impact: top-line revenue growth, pipeline acceleration, forecast precision, margin recovery, and sales cycle compression.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#outcome-metrics"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/20 text-sm font-mono uppercase tracking-wider transition-all gap-2"
              >
                <span>Browse 10 Measured Outcomes</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl text-sm font-mono uppercase tracking-wider shadow-xs transition-all gap-2"
              >
                <span>Request Outcome Model</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 OUTCOME DISCIPLINES IN-DEPTH ── */}
      <section id="outcome-metrics" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Evidence Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Intended Goals vs. Measured Results
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore how rigorous revenue engineering translates board-level growth aspirations into mathematically verified results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OUTCOME_CASE_STUDIES_DATA.map((outc) => {
              const matchedStories = APPROVED_CASE_STUDIES.filter((cs) =>
                outc.relevantStorySlugs.includes(cs.slug)
              );

              return (
                <div
                  key={outc.id}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {outc.badge}
                      </span>
                      <span className="text-lg font-mono font-black text-slate-900">{outc.metric}</span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                      {outc.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {outc.description}
                    </p>

                    <div className="space-y-3 mb-6 text-xs">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold font-mono mb-1">
                          Empirical Evidence Telemetry:
                        </span>
                        <span className="text-slate-800 font-semibold">{outc.intendedVsMeasured}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                        <span className="text-emerald-700 block text-[10px] uppercase font-bold font-mono mb-1.5">
                          Governed KPIs Tracked:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {outc.kpis.map((kpi, idx) => (
                            <span key={idx} className="bg-white px-2 py-0.5 rounded text-[11px] font-mono font-semibold text-slate-700 border border-emerald-200">
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-2">
                        Validated Case Studies:
                      </span>
                      <div className="space-y-2">
                        {matchedStories.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/resources-hub/case-studies/stories/${s.slug}`}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-xs font-medium text-slate-800 hover:text-emerald-800 transition-colors group"
                          >
                            <span className="truncate pr-2 font-semibold">{s.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-emerald-600 flex-shrink-0" />
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

      {/* ── FILTERABLE CASE STUDY LIBRARY BY OUTCOME ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
                Outcome Portfolio Filter
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                All Outcome-Focused Case Studies
              </h2>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Revenue Growth', 'Pipeline Growth', 'Sales Cycle Optimization', 'Global Market Expansion'].map((outc) => (
                <button
                  key={outc}
                  onClick={() => setSelectedOutcome(outc)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedOutcome === outc
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {outc}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStories.map((study) => (
              <div
                key={study.id}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group"
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
                        {study.outcome}
                      </span>
                      <span className="bg-emerald-600/90 px-2.5 py-1 rounded-md font-bold">
                        {study.metricBig}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pb-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-emerald-700 transition-colors font-heading leading-snug">
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
                        <span className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          {study.storyType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-7 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-500">
                    Function: <strong className="text-slate-800">{study.function}</strong>
                  </div>

                  <Link
                    to={`/resources-hub/case-studies/stories/${study.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase group-hover:translate-x-1 transition-transform"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-3">
              Mathematical Revenue Acceleration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-heading">
              Ready to Target Similar Outcomes for Your Enterprise?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Explore how our quantitative diagnostics uncover untapped profit pools and engineer deterministic pipeline, conversion, and margin expansion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 text-sm font-mono uppercase tracking-wider transition-all"
              >
                Book Outcome Consultation
              </Link>
              <Link
                to="/talk-to-expert"
                className="border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm font-mono uppercase tracking-wider transition-all"
              >
                Talk to a Revenue Scientist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

