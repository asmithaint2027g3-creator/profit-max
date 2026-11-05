import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Award, ArrowRight, ChevronRight, CheckCircle2,
  TrendingUp, Layers, Filter, Search, RotateCcw,
  Sparkles, ShieldCheck, Quote, Star, Users, Check,
  ArrowUpRight, Building2, Briefcase, Cpu, HelpCircle
} from 'lucide-react';
import {
  APPROVED_CASE_STUDIES,
  TESTIMONIALS_DATA,
  TRANSFORMATION_THEMES_DATA,
  CaseStudyStory
} from '../../../data/caseStudiesData';

export default function CustomerSuccessStoriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedOutcome, setSelectedOutcome] = useState<string>('All');
  const [selectedEvidence, setSelectedEvidence] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = 'Customer Transformation. Business Impact. Measurable Progress. | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const featuredStory = APPROVED_CASE_STUDIES[0]; // Enterprise SaaS Pipeline Growth

  const filteredStories = useMemo(() => {
    return APPROVED_CASE_STUDIES.filter((cs: CaseStudyStory) => {
      const matchIndustry =
        selectedIndustry === 'All' ||
        cs.industry === selectedIndustry ||
        cs.industries.some((ind) => ind.toLowerCase().includes(selectedIndustry.toLowerCase()));

      const matchOutcome =
        selectedOutcome === 'All' ||
        cs.outcome === selectedOutcome ||
        cs.outcomes.some((o) => o.toLowerCase().includes(selectedOutcome.toLowerCase()));

      const matchEvidence =
        selectedEvidence === 'All' || cs.evidenceStatus === selectedEvidence;

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.subtitle.toLowerCase().includes(q) ||
        cs.companyName.toLowerCase().includes(q) ||
        cs.summary.toLowerCase().includes(q) ||
        cs.tags.some((t) => t.toLowerCase().includes(q));

      return matchIndustry && matchOutcome && matchEvidence && matchSearch;
    });
  }, [selectedIndustry, selectedOutcome, selectedEvidence, searchQuery]);

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
            <span className="text-slate-900 font-bold">Customer Success Stories</span>
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
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>VERIFIED CLIENT SUCCESS &amp; BOARDROOM PROOF</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Customer Transformation.{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
                Business Impact. Measurable Progress.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Explore approved customer stories that describe the business context, initial bottlenecks, transformation journeys, and documented outcomes behind meaningful enterprise revenue improvement.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#featured-story"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/20 text-sm font-mono uppercase tracking-wider transition-all gap-2"
              >
                <span>Read Featured Success Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#client-testimonials"
                className="inline-flex items-center justify-center border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl text-sm font-mono uppercase tracking-wider shadow-xs transition-all gap-2"
              >
                <span>Executive Testimonials</span>
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. FEATURED SUCCESS STORY (LARGE EDITORIAL HERO) ── */}
      <section id="featured-story" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider mb-4 block">
            Featured Transformation Retrospective
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold uppercase">
                    {featuredStory.industry}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold uppercase">
                    Verified Customer Story
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {featuredStory.readingTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4 leading-tight">
                  {featuredStory.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {featuredStory.subtitle}
                </p>

                <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black font-mono text-slate-900">
                      {featuredStory.metricBig}
                    </div>
                    <div className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      {featuredStory.metricLabel}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-600">
                      98%
                    </div>
                    <div className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      Forecast Accuracy
                    </div>
                  </div>
                </div>

                {featuredStory.testimonial && (
                  <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 italic mb-6">
                    &ldquo;{featuredStory.testimonial.quote}&rdquo;
                    <div className="mt-2 font-mono not-italic font-bold text-blue-900 text-[11px]">
                      — {featuredStory.testimonial.author}, {featuredStory.testimonial.role} ({featuredStory.testimonial.company})
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Link
                  to={`/resources-hub/case-studies/stories/${featuredStory.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>Read Full Case Study Dossier</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-mono">
                <div className="text-amber-400 font-bold uppercase tracking-wider mb-1">
                  Enterprise Client
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {featuredStory.companyName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. EXECUTIVE TESTIMONIALS ARCHIVE ── */}
      <section id="client-testimonials" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider block mb-2">
              Boardroom Voices &amp; Executive Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              What Revenue Leaders Say
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Direct statements from CEOs, CROs, CFOs, and PE Operating Partners who implemented ProfitMachines architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm font-heading">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.title} · {t.company}</div>
                    <div className="text-xs font-mono font-bold text-amber-700 mt-1">{t.impact}</div>
                  </div>

                  <Link
                    to={`/resources-hub/case-studies/stories/${t.storySlug}`}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-300 text-blue-600 transition-colors"
                    title="View Case Study"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TRUST & EVIDENCE TRANSPARENCY ── */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-2">
              Evidence Governance Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              Our 4-Tier Transparency Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              ProfitMachines maintains rigorous evidence standards. Every story displays its disclosure level so decision-makers know exactly what is verified versus illustrative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Verified</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The displayed metrics are validated through signed client reviews or verified data integrations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-bold text-blue-400 uppercase">Partially Disclosed</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Key transformation milestones are approved, but proprietary client name or exact financial totals remain protected under NDA.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Confidential Metrics</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Methodologies and process overhauls are shared, but specific revenue numbers are withheld to preserve client competitive advantage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-bold text-purple-400 uppercase">Illustrative</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hypothetical architectural blueprints and diagnostic models explicitly labelled as non-customer simulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FILTERABLE CUSTOMER STORY LIBRARY ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider block mb-2">
                All Approved Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Customer Story Library
              </h2>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Enterprise SaaS', 'Manufacturing', 'Financial Services', 'Healthcare'].map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStories.map((study) => (
              <div
                key={study.id}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group"
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
                        {study.industry}
                      </span>
                      <span className="bg-amber-600/90 px-2.5 py-1 rounded-md font-bold">
                        {study.metricBig}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pb-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-amber-800 transition-colors font-heading leading-snug">
                      {study.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                      Client: <span className="font-semibold text-slate-700">{study.companyName}</span>
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
                        <span className="text-[11px] font-mono text-amber-800 font-bold bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                          {study.evidenceStatus}
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
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-700 hover:text-amber-800 uppercase group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Success Story</span>
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
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-3">
              Transform Your Commercial Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-heading">
              Ready to Engineer Your Own Customer Success Story?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Speak with a revenue transformation partner to diagnose your pipeline bottlenecks, analyze hidden profit pools, and model deterministic outcomes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-600/20 text-sm font-mono uppercase tracking-wider transition-all"
              >
                Schedule Executive Briefing
              </Link>
              <Link
                to="/talk-to-expert"
                className="border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm font-mono uppercase tracking-wider transition-all"
              >
                Talk to a Transformation Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

