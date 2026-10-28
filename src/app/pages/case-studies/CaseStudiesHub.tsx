import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck, ArrowRight, ChevronRight, TrendingUp, BarChart3,
  Globe, Bot, Cpu, Target, Layers, Sparkles, Building2,
  CheckCircle2, Filter, Award, Zap, ArrowUpRight, DollarSign,
  Compass, Network, LineChart, Quote, Sliders, ChevronDown, Check
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  headlineResult: string;
  companyName: string;
  industry: string;
  stage: string;
  challenge: string;
  offering: string;
  metricBig: string;
  metricLabel: string;
  timeline: string;
  summary: string;
  tags: string[];
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-1',
    slug: '/case-studies/enterprise-saas-pipeline-growth',
    title: 'Enterprise SaaS Pipeline Growth',
    headlineResult: '6X Pipeline Growth in 9 Months',
    companyName: 'Enterprise SaaS Platform ($450M ARR)',
    industry: 'SaaS',
    stage: 'Mid-Market',
    challenge: 'Pipeline Growth',
    offering: 'Demand Engineering',
    metricBig: '6X',
    metricLabel: 'Qualified Pipeline Growth',
    timeline: '9 Months Execution',
    summary: 'From stalled growth and 30% forecast variance to 6X qualified pipeline, 98% forecast accuracy, and $180M new ARR.',
    tags: ['AI SDR Swarms', 'Profit Pool Discovery', 'Demand Engineering']
  },
  {
    id: 'case-2',
    slug: '/case-studies/global-manufacturing-expansion',
    title: 'Global Manufacturing Expansion',
    headlineResult: '$400M New International Revenue',
    companyName: 'Industrial Manufacturing Leader (Fortune 500, $8B Revenue)',
    industry: 'Manufacturing',
    stage: 'Enterprise',
    challenge: 'Global Expansion',
    offering: 'Growth Intelligence',
    metricBig: '$400M',
    metricLabel: 'New International Revenue',
    timeline: '24 Months Execution',
    summary: '47% faster sales cycles, 3X dealer productivity, and expansion across Germany, Japan, and Western Europe.',
    tags: ['Cross-Border RevOps', 'Multi-Language AI', 'Dealer Acceleration']
  },
  {
    id: 'case-3',
    slug: '/case-studies/healthcare-forecast-accuracy',
    title: 'Healthcare Forecast Accuracy',
    headlineResult: 'From 65% to 98% Forecast Accuracy',
    companyName: 'Healthcare Technology Provider ($180M ARR)',
    industry: 'Healthcare',
    stage: 'Growth Stage',
    challenge: 'Forecast Accuracy',
    offering: 'Revenue Operations',
    metricBig: '98%',
    metricLabel: 'Forecast Accuracy (<5% Variance)',
    timeline: '12 Months Execution',
    summary: 'Restored board confidence and eliminated 3 missed quarters using behavioral revenue telemetry and HIPAA-compliant RevOps.',
    tags: ['AI Forecasting', 'Zero-Touch CRM', 'HIPAA RevOps']
  },
  {
    id: 'case-4',
    slug: '/case-studies/financial-services-ai-transformation',
    title: 'Financial Services AI Transformation',
    headlineResult: '5X AI Agent Deployment & $80M Cross-Sell',
    companyName: 'PE-Backed Financial Services Firm ($1.2B Valuation)',
    industry: 'Financial Services',
    stage: 'PE Portfolio Companies',
    challenge: 'AI Transformation',
    offering: 'AI Trust & Governance',
    metricBig: '5X',
    metricLabel: 'AI Agent Scale & 2.3X Valuation Multiple',
    timeline: '18 Months Execution',
    summary: 'Post-acquisition integration of 3 companies into a unified 4-agent ecosystem with 85% forecast accuracy and 40% NRR lift.',
    tags: ['4-Agent Ecosystem', 'SEC/FINRA Compliant', 'Post-Merger GTM']
  },
  {
    id: 'case-5',
    slug: '/case-studies/technology-customer-expansion',
    title: 'Technology Customer Expansion',
    headlineResult: '40% NRR Lift & 25% Expansion Revenue',
    companyName: 'Enterprise Cloud Technology ($600M ARR)',
    industry: 'Technology',
    stage: 'Enterprise',
    challenge: 'Customer Expansion',
    offering: 'Customer Success',
    metricBig: '140%',
    metricLabel: 'Net Revenue Retention (NRR)',
    timeline: '12 Months Execution',
    summary: 'Engineered expansion triggers tied to telemetry usage milestones and early churn prediction with 60-day advance notice.',
    tags: ['Predictive Retention', 'Expansion Loops', 'CSM Copilots']
  },
  {
    id: 'case-6',
    slug: '/case-studies/saas-revenue-operations',
    title: 'SaaS Revenue Operations',
    headlineResult: 'From 60% Admin Time to 80% Selling Time',
    companyName: 'Growth-Stage SaaS Platform ($15M ARR, Series B)',
    industry: 'SaaS',
    stage: 'Startups',
    challenge: 'Revenue Growth',
    offering: 'Revenue Operations',
    metricBig: '80%',
    metricLabel: 'Rep Time Dedicated to Selling',
    timeline: '6 Months Execution',
    summary: 'Zero-touch CRM data hygiene, automated commission reconciliation, and instant forecast tracking without adding headcount.',
    tags: ['AI RevOps Agent', 'Zero-Touch CRM', 'Commission Automation']
  },
  {
    id: 'case-7',
    slug: '/case-studies/manufacturing-margin-improvement',
    title: 'Manufacturing Margin Improvement',
    headlineResult: '15 Points Gross Margin Recovery',
    companyName: 'Mid-Market Specialized Manufacturer ($350M Revenue)',
    industry: 'Manufacturing',
    stage: 'Mid-Market',
    challenge: 'Margin Improvement',
    offering: 'Profit Pool Discovery',
    metricBig: '+15 Pts',
    metricLabel: 'Gross Margin Recovered',
    timeline: '9 Months Execution',
    summary: 'Eliminated unapproved 20% sales discounting, installed dynamic willingness-to-pay tiers, and protected win rates.',
    tags: ['Pricing Governance', 'Willingness-to-Pay', 'Profit Pools']
  },
  {
    id: 'case-8',
    slug: '/case-studies/healthcare-gtm-transformation',
    title: 'Healthcare GTM Transformation',
    headlineResult: '80% Adoption & 60% Efficiency Improvement',
    companyName: 'Enterprise Healthcare Systems ($900M Revenue)',
    industry: 'Healthcare',
    stage: 'Enterprise',
    challenge: 'GTM Transformation',
    offering: 'GTM Transformation',
    metricBig: '80%',
    metricLabel: 'Cross-BU GTM Adoption Rate',
    timeline: '12 Months Execution',
    summary: 'Unified commercial motions across 5 operating divisions, cutting cycle time by 40% and eliminating operational duplication.',
    tags: ['GTM Orchestration', 'Change Management', 'HIPAA Compliance']
  }
];

const TESTIMONIALS = [
  {
    quote: "ProfitMachines didn't just give us tools — they gave us a revenue operating system. We went from hoping for growth to engineering it with mathematical predictability.",
    name: "Marcus Vance",
    title: "Chief Revenue Officer",
    company: "Enterprise SaaS Platform ($450M ARR)",
    impact: "6X Pipeline Growth · 98% Forecast Accuracy"
  },
  {
    quote: "Global expansion was previously our biggest capital risk. Deploying the ProfitMachines framework transformed cross-border growth into a deterministic science.",
    name: "Dr. Helena Meyer",
    title: "Chief Executive Officer",
    company: "Industrial Manufacturing Leader (Fortune 500)",
    impact: "$400M New International Revenue"
  },
  {
    quote: "Restoring board confidence required mathematical certainty, not optimistic rep commits. <5% forecast variance completely changed our board dynamics.",
    name: "Julian Thorne",
    title: "Chief Financial Officer",
    company: "Healthcare Technology Provider ($180M ARR)",
    impact: "65% → 98% Forecast Accuracy"
  },
  {
    quote: "Post-merger integration of 3 companies usually takes 3 years. The 4-agent ecosystem unified our GTM in 18 months and yielded 2.3X multiple expansion at exit.",
    name: "Eleanor Sterling",
    title: "Operating Partner",
    company: "Tier-1 Technology Private Equity Sponsor",
    impact: "5X AI Scale · 2.3X Valuation Lift"
  }
];

export default function CaseStudiesHub() {
  const location = useLocation();

  // Filter states
  const [selectedChallenge, setSelectedChallenge] = useState<string>('All');
  const [selectedOffering, setSelectedOffering] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sync with URL hashes/queries on mount or change
  useEffect(() => {
    document.title = 'Case Studies: Measurable Revenue Outcomes Across Industries | ProfitMachines';
    window.scrollTo(0, 0);

    const hash = location.hash.replace('#', '');
    if (hash === 'pipeline-growth') setSelectedChallenge('Pipeline Growth');
    else if (hash === 'revenue-growth') setSelectedChallenge('Revenue Growth');
    else if (hash === 'margin-improvement') setSelectedChallenge('Margin Improvement');
    else if (hash === 'forecast-accuracy') setSelectedChallenge('Forecast Accuracy');
    else if (hash === 'customer-expansion') setSelectedChallenge('Customer Expansion');
    else if (hash === 'global-expansion') setSelectedChallenge('Global Expansion');
    else if (hash === 'ai-transformation') setSelectedChallenge('AI Transformation');
    else if (hash === 'saas') setSelectedIndustry('SaaS');
    else if (hash === 'manufacturing') setSelectedIndustry('Manufacturing');
    else if (hash === 'healthcare') setSelectedIndustry('Healthcare');
    else if (hash === 'financial-services') setSelectedIndustry('Financial Services');
    else if (hash === 'technology') setSelectedIndustry('Technology');
    else if (hash === 'startups') setSelectedStage('Startups');
    else if (hash === 'growth-stage') setSelectedStage('Growth Stage');
    else if (hash === 'mid-market') setSelectedStage('Mid-Market');
    else if (hash === 'enterprise') setSelectedStage('Enterprise');
    else if (hash === 'pe-portfolio') setSelectedStage('PE Portfolio Companies');
    else if (hash === 'profit-pool') setSelectedOffering('Profit Pool Discovery');
    else if (hash === 'demand-engineering') setSelectedOffering('Demand Engineering');
    else if (hash === 'sales-acceleration') setSelectedOffering('Sales Acceleration');
    else if (hash === 'revenue-operations') setSelectedOffering('Revenue Operations');
    else if (hash === 'gtm-transformation') setSelectedOffering('GTM Transformation');
    else if (hash === 'customer-success') setSelectedOffering('Customer Success');
    else if (hash === 'growth-intelligence') setSelectedOffering('Growth Intelligence');
    else if (hash === 'ai-trust') setSelectedOffering('AI Trust & Governance');
  }, [location.hash]);

  // Filtered case studies
  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      const matchChallenge = selectedChallenge === 'All' || cs.challenge === selectedChallenge;
      const matchOffering = selectedOffering === 'All' || cs.offering === selectedOffering;
      const matchIndustry = selectedIndustry === 'All' || cs.industry === selectedIndustry;
      const matchStage = selectedStage === 'All' || cs.stage === selectedStage;
      return matchChallenge && matchOffering && matchIndustry && matchStage;
    });
  }, [selectedChallenge, selectedOffering, selectedIndustry, selectedStage]);

  const resetFilters = () => {
    setSelectedChallenge('All');
    setSelectedOffering('All');
    setSelectedIndustry('All');
    setSelectedStage('All');
  };

  const hasActiveFilters = selectedChallenge !== 'All' || selectedOffering !== 'All' || selectedIndustry !== 'All' || selectedStage !== 'All';

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Transformation Impact Wall Layout) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        {/* Ambient Grid & Glow */}
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
              <span className="font-mono text-blue-600 font-extrabold">PROVEN REVENUE TRANSFORMATIONS</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>MEASURABLE ENTERPRISE OUTCOMES</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Case Studies:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Measurable Revenue Outcomes Across Industries
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              From pipeline acceleration to global expansion, explore how enterprises deploy ProfitMachines&apos; AI-native revenue platform to engineer predictable, scalable growth. Every engagement delivers verified outcomes — not slide decks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/case-studies/featured"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Featured Transformations</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </Link>

              <Link
                to="/case-studies/ai-native"
                className="inline-flex items-center justify-center border border-blue-200 bg-blue-50/60 hover:bg-blue-100/70 text-blue-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <Bot className="w-4 h-4 text-blue-600" />
                <span>AI-Native Deployments</span>
              </Link>
            </div>
          </div>

          {/* Dark-Mode Mosaic of Transformation Impact Cards */}
          <div className="rounded-3xl bg-slate-950 p-6 sm:p-8 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  Transformation Impact Wall
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  Live Enterprise Telemetry Benchmarks
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Field Deployments</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-400">6X</div>
                <div className="text-xs font-mono font-bold text-slate-300 mt-1 uppercase">Pipeline Velocity</div>
                <p className="text-[11px] text-slate-400 mt-1">Enterprise SaaS Platform</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black font-mono text-indigo-400">$400M</div>
                <div className="text-xs font-mono font-bold text-slate-300 mt-1 uppercase">Cross-Border Revenue</div>
                <p className="text-[11px] text-slate-400 mt-1">Fortune 500 Industrial</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">98%</div>
                <div className="text-xs font-mono font-bold text-slate-300 mt-1 uppercase">Forecast Accuracy</div>
                <p className="text-[11px] text-slate-400 mt-1">Healthcare Tech Leader</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="text-3xl sm:text-4xl font-black font-mono text-purple-400">+15 Pts</div>
                <div className="text-xs font-mono font-bold text-slate-300 mt-1 uppercase">Gross Margin Recovery</div>
                <p className="text-[11px] text-slate-400 mt-1">Mid-Market Manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: RESULTS DASHBOARD (Signature Component) ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
              Aggregate Enterprise Benchmark
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Aggregate Impact Across 500+ Deployments
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-mono mt-2">
              Measured across 500+ enterprise deployments over 36 months
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center hover:shadow-lg transition-all">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                5.2X
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Average Revenue Growth</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Compound ARR expansion through multi-channel demand engineering and autonomous pipeline velocity.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center hover:shadow-lg transition-all">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                67%
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Forecast Variance Reduction</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Improvement in forecast accuracy using behavioral telemetry instead of subjective rep commits.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center hover:shadow-lg transition-all">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                42%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Average CAC Reduction</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Acquisition cost compression by redirecting budget to isolated profit pools and autonomous agents.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs text-center hover:shadow-lg transition-all">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                28%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Average NRR Improvement</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Net retention lift engineered by wiring usage milestones to autonomous expansion loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRANSFORMATION IMPACT WALL WITH ADVANCED FILTERING ── */}
      <section id="transformations" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
                Field Evidence Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Explore Transformations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
                Filter 8 deeply documented enterprise deployments by business challenge, offering, industry vertical, and company stage.
              </p>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200 inline-flex items-center gap-1.5 cursor-pointer w-fit"
              >
                <span>Reset All Filters</span>
                <span className="text-slate-400">({filteredStudies.length} of 8)</span>
              </button>
            )}
          </div>

          {/* Sticky Filter Bar */}
          <div className="sticky top-16 lg:top-[72px] z-20 bg-white/95 backdrop-blur-md py-4 mb-10 border-y border-slate-200 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {/* Filter 1: By Business Challenge */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1">
                  By Business Challenge
                </label>
                <select
                  value={selectedChallenge}
                  onChange={(e) => setSelectedChallenge(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="All">All Challenges</option>
                  <option value="Pipeline Growth">Pipeline Growth</option>
                  <option value="Revenue Growth">Revenue Growth</option>
                  <option value="Margin Improvement">Margin Improvement</option>
                  <option value="Forecast Accuracy">Forecast Accuracy</option>
                  <option value="Customer Expansion">Customer Expansion</option>
                  <option value="Global Expansion">Global Expansion</option>
                  <option value="AI Transformation">AI Transformation</option>
                  <option value="GTM Transformation">GTM Transformation</option>
                </select>
              </div>

              {/* Filter 2: By Offering */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1">
                  By Offering
                </label>
                <select
                  value={selectedOffering}
                  onChange={(e) => setSelectedOffering(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="All">All Offerings</option>
                  <option value="Profit Pool Discovery">Profit Pool Discovery</option>
                  <option value="Demand Engineering">Demand Engineering</option>
                  <option value="Sales Acceleration">Sales Acceleration</option>
                  <option value="Revenue Operations">Revenue Operations</option>
                  <option value="GTM Transformation">GTM Transformation</option>
                  <option value="Customer Success">Customer Success</option>
                  <option value="Growth Intelligence">Growth Intelligence</option>
                  <option value="AI Trust & Governance">AI Trust & Governance</option>
                </select>
              </div>

              {/* Filter 3: By Industry */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1">
                  By Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="All">All Industries</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>

              {/* Filter 4: By Company Stage */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1">
                  By Company Stage
                </label>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="All">All Stages</option>
                  <option value="Startups">Startups</option>
                  <option value="Growth Stage">Growth Stage</option>
                  <option value="Mid-Market">Mid-Market</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="PE Portfolio Companies">PE Portfolio Companies</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid of 8 Case Study Cards */}
          {filteredStudies.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200">
              <p className="text-slate-600 mb-4">No case studies match the selected combination of filters.</p>
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase font-mono cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Badges row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase">
                        {study.industry}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase">
                        {study.stage}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase">
                        {study.challenge}
                      </span>
                    </div>

                    {/* Headline Result */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors font-heading">
                      {study.headlineResult}
                    </h3>

                    {/* Company Name */}
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                      Client: {study.companyName}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    {/* Metric Highlight Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-black font-mono text-slate-900">{study.metricBig}</div>
                        <div className="text-xs font-mono text-slate-500 uppercase">{study.metricLabel}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                          {study.timeline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-mono text-slate-500">
                      Methodology: <strong className="text-slate-800">{study.offering}</strong>
                    </div>

                    <Link
                      to={study.slug}
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

      {/* ── SECTION 4: SUCCESS METRICS MOSAIC ── */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-2">
              Systematic Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              What We Deliver
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Verified operational ranges across enterprise deployments. No theoretical projections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-blue-400 uppercase font-bold">Revenue Velocity</span>
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-4xl font-black font-mono text-white mb-2">2–8X</div>
              <div className="text-xs font-mono text-slate-300 uppercase mb-2">Revenue Growth Multiple</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Compound growth unlocked through demand engineering and autonomous pipeline scaling.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-indigo-400 uppercase font-bold">Deal Velocity</span>
                <Zap className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-4xl font-black font-mono text-white mb-2">30–70%</div>
              <div className="text-xs font-mono text-slate-300 uppercase mb-2">Faster Sales Cycles</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cycle compression through automated consensus building and real-time deal telemetry.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Forecast Certainty</span>
                <LineChart className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-4xl font-black font-mono text-white mb-2">85–98%</div>
              <div className="text-xs font-mono text-slate-300 uppercase mb-2">Forecast Accuracy</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Variance reduced to &lt;5% using behavioral buyer signals and predictive health scoring.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-purple-400 uppercase font-bold">Margin Defense</span>
                <DollarSign className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-4xl font-black font-mono text-white mb-2">5–25 Pts</div>
              <div className="text-xs font-mono text-slate-300 uppercase mb-2">Gross Margin Recovery</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pricing realization recovered by eliminating rogue discounts through automated guardrails.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-sky-400 uppercase font-bold">Expansion Loops</span>
                <Network className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-4xl font-black font-mono text-white mb-2">15–40%</div>
              <div className="text-xs font-mono text-slate-300 uppercase mb-2">NRR Lift</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Net retention expansion through continuous account monitoring and early renewal signals.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-rose-400 uppercase font-bold">Autonomous ROI</span>
                <Bot className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-4xl font-black font-mono text-white mb-2">8–15X</div>
              <div className="text-xs font-mono text-slate-300 uppercase mb-2">AI Agent Payback Multiple</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                First-year economic return from deploying multi-agent SDR and RevOps ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: EXECUTIVE TESTIMONIAL CAROUSEL ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Boardroom Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              What Enterprise Leaders Say
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-sm">
            <Quote className="w-16 h-16 text-blue-600/10 absolute -top-2 -left-2 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center font-mono text-base">
                    {TESTIMONIALS[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {TESTIMONIALS[activeTestimonial].name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {TESTIMONIALS[activeTestimonial].title} · {TESTIMONIALS[activeTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 w-fit">
                  {TESTIMONIALS[activeTestimonial].impact}
                </div>
              </div>
            </div>

            {/* Testimonial Selectors */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FINAL CTA + CONFIDENTIAL INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Engineer Your Transformation?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule a confidential Executive Briefing with a Principal Architect. Receive custom benchmark telemetry and an architectural blueprint for your sector within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="Case Studies Hub"
              defaultChallenge="Pipeline Growth"
              buttonText="Schedule Executive Briefing"
            />
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-600">
              <span>500+ B2B Companies</span>
              <span className="text-slate-300">·</span>
              <span>5X Avg Revenue Growth</span>
              <span className="text-slate-300">·</span>
              <span>24/7 AI Support</span>
              <span className="text-slate-300">·</span>
              <span>SOC2 Type II &amp; ISO 27001</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
