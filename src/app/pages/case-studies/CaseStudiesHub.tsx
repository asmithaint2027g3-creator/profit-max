import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck, ArrowRight, ChevronRight, TrendingUp, BarChart3,
  Globe, Bot, Cpu, Target, Layers, Sparkles, Building2,
  CheckCircle2, Filter, Award, Zap, ArrowUpRight, DollarSign,
  Compass, Network, LineChart, Quote, Sliders, ChevronDown, Check,
  Search, RotateCcw, Briefcase, Factory, Stethoscope, Landmark, Box
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  headlineResult: string;
  companyName: string;
  industry: string;
  industries: string[];
  stage: string;
  stages: string[];
  challenge: string;
  challenges: string[];
  offering: string;
  offerings: string[];
  outcome: string;
  outcomes: string[];
  metricBig: string;
  metricLabel: string;
  timeline: string;
  summary: string;
  tags: string[];
  image: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-1',
    slug: '/case-studies/enterprise-saas-pipeline-growth',
    title: 'Enterprise SaaS Pipeline Growth',
    headlineResult: '6X Pipeline Growth in 9 Months',
    companyName: 'Enterprise SaaS Platform ($450M ARR)',
    industry: 'SaaS',
    industries: ['SaaS'],
    stage: 'Enterprise',
    stages: ['Enterprise', 'Growth'],
    challenge: 'Pipeline Growth',
    challenges: ['Pipeline Growth', 'Revenue Expansion'],
    offering: 'AI SDR',
    offerings: ['AI SDR', 'Demand Engineering', 'Revenue Intelligence'],
    outcome: 'Pipeline Growth',
    outcomes: ['Pipeline Growth', 'Revenue Growth'],
    metricBig: '6X',
    metricLabel: 'Qualified Pipeline Velocity',
    timeline: '9 Months Execution',
    summary: 'From stalled growth and 30% forecast variance to 6X qualified pipeline, 98% forecast accuracy, and $180M net new ARR deployed via AI SDR swarms.',
    tags: ['AI SDR Swarms', 'Profit Pool Discovery', 'Demand Engineering'],
    image: '/images/industry-saas.png'
  },
  {
    id: 'case-2',
    slug: '/case-studies/global-manufacturing-expansion',
    title: 'Global Manufacturing Expansion',
    headlineResult: '$400M New International Revenue',
    companyName: 'Industrial Manufacturing Leader (Fortune 500, $8B Revenue)',
    industry: 'Manufacturing',
    industries: ['Manufacturing', 'Distribution'],
    stage: 'Enterprise',
    stages: ['Enterprise'],
    challenge: 'Global Scaling',
    challenges: ['Global Scaling', 'Revenue Expansion'],
    offering: 'Growth Science',
    offerings: ['Growth Science', 'GTM Acceleration'],
    outcome: 'Revenue Growth',
    outcomes: ['Revenue Growth', 'Productivity'],
    metricBig: '$400M',
    metricLabel: 'New International Revenue',
    timeline: '24 Months Execution',
    summary: 'Cross-border RevOps and multi-language AI prospecting unlocked $400M international pipeline across Germany, Japan, and Western Europe with 47% faster sales cycles.',
    tags: ['Cross-Border RevOps', 'Multi-Language AI', 'Dealer Acceleration'],
    image: '/images/industry-manufacturing.png'
  },
  {
    id: 'case-3',
    slug: '/case-studies/healthcare-forecast-accuracy',
    title: 'Healthcare Forecast Accuracy',
    headlineResult: 'From 65% to 98% Forecast Accuracy',
    companyName: 'Healthcare Technology Provider ($180M ARR)',
    industry: 'Healthcare',
    industries: ['Healthcare'],
    stage: 'Growth',
    stages: ['Growth', 'Enterprise'],
    challenge: 'Forecast Accuracy',
    challenges: ['Forecast Accuracy'],
    offering: 'Revenue Operations',
    offerings: ['Revenue Operations', 'Revenue Intelligence'],
    outcome: 'Productivity',
    outcomes: ['Productivity', 'Revenue Growth'],
    metricBig: '98%',
    metricLabel: 'Forecast Accuracy (<5% Variance)',
    timeline: '12 Months Execution',
    summary: 'Restored board confidence and eliminated 3 missed quarters using behavioral revenue telemetry and HIPAA-compliant RevOps automation.',
    tags: ['AI Forecasting', 'Zero-Touch CRM', 'HIPAA RevOps'],
    image: '/images/industry-healthcare.png'
  },
  {
    id: 'case-4',
    slug: '/case-studies/financial-services-ai-transformation',
    title: 'Financial Services AI Transformation',
    headlineResult: '5X AI Agent Deployment & $80M Cross-Sell',
    companyName: 'PE-Backed Financial Services Firm ($1.2B Valuation)',
    industry: 'Financial Services',
    industries: ['Financial Services'],
    stage: 'PE Portfolio',
    stages: ['PE Portfolio', 'Enterprise'],
    challenge: 'AI Transformation',
    challenges: ['AI Transformation', 'Revenue Expansion'],
    offering: 'Revenue Intelligence',
    offerings: ['Revenue Intelligence', 'AI SDR'],
    outcome: 'AI Adoption',
    outcomes: ['AI Adoption', 'Revenue Growth'],
    metricBig: '5X',
    metricLabel: 'AI Agent Scale & 2.3X Valuation Multiple',
    timeline: '18 Months Execution',
    summary: 'Post-acquisition integration of 3 companies into a unified 4-agent ecosystem with 85% forecast accuracy and 40% NRR lift under strict SEC/FINRA compliance.',
    tags: ['4-Agent Ecosystem', 'SEC/FINRA Compliant', 'Post-Merger GTM'],
    image: '/images/industry-fintech.png'
  },
  {
    id: 'case-5',
    slug: '/case-studies/technology-customer-expansion',
    title: 'Technology Customer Expansion',
    headlineResult: '40% NRR Lift & 25% Expansion Revenue',
    companyName: 'Enterprise Cloud Technology ($600M ARR)',
    industry: 'SaaS',
    industries: ['SaaS'],
    stage: 'Enterprise',
    stages: ['Enterprise'],
    challenge: 'Revenue Expansion',
    challenges: ['Revenue Expansion', 'Pipeline Growth'],
    offering: 'Growth Science',
    offerings: ['Growth Science', 'Revenue Operations'],
    outcome: 'Revenue Growth',
    outcomes: ['Revenue Growth', 'Productivity'],
    metricBig: '140%',
    metricLabel: 'Net Revenue Retention (NRR)',
    timeline: '12 Months Execution',
    summary: 'Engineered expansion triggers tied to telemetry usage milestones and early churn prediction with 60-day advance notice, driving $48M incremental ARR.',
    tags: ['Predictive Retention', 'Expansion Loops', 'CSM Copilots'],
    image: '/images/demand-pulse-dashboard.png'
  },
  {
    id: 'case-6',
    slug: '/case-studies/saas-revenue-operations',
    title: 'SaaS Revenue Operations',
    headlineResult: 'From 60% Admin Time to 80% Selling Time',
    companyName: 'Growth-Stage SaaS Platform ($15M ARR, Series B)',
    industry: 'SaaS',
    industries: ['SaaS'],
    stage: 'Startup',
    stages: ['Startup', 'Growth'],
    challenge: 'Pipeline Growth',
    challenges: ['Pipeline Growth', 'Revenue Expansion'],
    offering: 'Revenue Operations',
    offerings: ['Revenue Operations', 'AI SDR'],
    outcome: 'Productivity',
    outcomes: ['Productivity', 'Cost Reduction'],
    metricBig: '80%',
    metricLabel: 'Rep Time Dedicated to Active Selling',
    timeline: '6 Months Execution',
    summary: 'Zero-touch CRM data hygiene, automated commission reconciliation, and instant forecast tracking without adding headcount, boosting quota attainment by 44%.',
    tags: ['AI RevOps Agent', 'Zero-Touch CRM', 'Commission Automation'],
    image: '/images/revenue-acceleration-engine.png'
  },
  {
    id: 'case-7',
    slug: '/case-studies/manufacturing-margin-improvement',
    title: 'Manufacturing Margin Improvement',
    headlineResult: '15 Points Gross Margin Recovery',
    companyName: 'Mid-Market Specialized Manufacturer ($350M Revenue)',
    industry: 'Distribution',
    industries: ['Distribution', 'Manufacturing'],
    stage: 'PE Portfolio',
    stages: ['PE Portfolio', 'Growth'],
    challenge: 'Revenue Expansion',
    challenges: ['Revenue Expansion', 'Global Scaling'],
    offering: 'Growth Science',
    offerings: ['Growth Science', 'Revenue Intelligence'],
    outcome: 'Cost Reduction',
    outcomes: ['Cost Reduction', 'Revenue Growth'],
    metricBig: '+15 Pts',
    metricLabel: 'Gross Margin Recovered',
    timeline: '9 Months Execution',
    summary: 'Eliminated unapproved 20% sales discounting, installed dynamic willingness-to-pay tiers, and protected win rates across core distribution accounts.',
    tags: ['Pricing Governance', 'Willingness-to-Pay', 'Profit Pools'],
    image: '/images/hero-profit-pool.png'
  },
  {
    id: 'case-8',
    slug: '/case-studies/healthcare-gtm-transformation',
    title: 'Healthcare GTM Transformation',
    headlineResult: '80% Adoption & 60% Efficiency Improvement',
    companyName: 'Enterprise Healthcare Systems ($900M Revenue)',
    industry: 'Healthcare',
    industries: ['Healthcare'],
    stage: 'Enterprise',
    stages: ['Enterprise'],
    challenge: 'AI Transformation',
    challenges: ['AI Transformation', 'Global Scaling'],
    offering: 'GTM Acceleration',
    offerings: ['GTM Acceleration', 'Revenue Operations'],
    outcome: 'AI Adoption',
    outcomes: ['AI Adoption', 'Productivity'],
    metricBig: '80%',
    metricLabel: 'Cross-BU GTM Adoption Rate',
    timeline: '12 Months Execution',
    summary: 'Unified commercial motions across 5 operating divisions, cutting cycle time by 40% and eliminating operational duplication with HIPAA-compliant AI systems.',
    tags: ['GTM Orchestration', 'Change Management', 'HIPAA Compliance'],
    image: '/images/hero-end-to-end-transformation.png'
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

const BUSINESS_CHALLENGES = [
  { id: 'Pipeline Growth', label: 'Pipeline Growth', desc: 'Accelerate outbound qualified meeting velocity and deal flow' },
  { id: 'Revenue Expansion', label: 'Revenue Expansion', desc: 'Drive Net Revenue Retention and unlock customer account growth' },
  { id: 'Forecast Accuracy', label: 'Forecast Accuracy', desc: 'Eliminate subjective rep commits and cut forecast variance to <5%' },
  { id: 'AI Transformation', label: 'AI Transformation', desc: 'Orchestrate multi-agent revenue ecosystems with strict governance' },
  { id: 'Global Scaling', label: 'Global Scaling', desc: 'Deploy multi-language cross-border RevOps across international territories' }
];

export default function CaseStudiesHub() {
  const location = useLocation();

  // Multi-Filter states (5 Dimensions + Search)
  const [selectedChallenge, setSelectedChallenge] = useState<string>('All');
  const [selectedOffering, setSelectedOffering] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [selectedOutcome, setSelectedOutcome] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sync with URL hashes/queries on mount or change
  useEffect(() => {
    document.title = 'Case Studies: Revenue Transformation in Practice | ProfitMachines';
    window.scrollTo(0, 0);

    const hash = location.hash.replace('#', '');
    if (hash === 'pipeline-growth') setSelectedChallenge('Pipeline Growth');
    else if (hash === 'revenue-expansion') setSelectedChallenge('Revenue Expansion');
    else if (hash === 'forecast-accuracy') setSelectedChallenge('Forecast Accuracy');
    else if (hash === 'ai-transformation') setSelectedChallenge('AI Transformation');
    else if (hash === 'global-scaling') setSelectedChallenge('Global Scaling');
    else if (hash === 'saas') setSelectedIndustry('SaaS');
    else if (hash === 'manufacturing') setSelectedIndustry('Manufacturing');
    else if (hash === 'healthcare') setSelectedIndustry('Healthcare');
    else if (hash === 'financial-services') setSelectedIndustry('Financial Services');
    else if (hash === 'distribution') setSelectedIndustry('Distribution');
    else if (hash === 'startup') setSelectedStage('Startup');
    else if (hash === 'growth') setSelectedStage('Growth');
    else if (hash === 'enterprise') setSelectedStage('Enterprise');
    else if (hash === 'pe-portfolio') setSelectedStage('PE Portfolio');
    else if (hash === 'ai-sdr') setSelectedOffering('AI SDR');
    else if (hash === 'revenue-intelligence') setSelectedOffering('Revenue Intelligence');
    else if (hash === 'growth-science') setSelectedOffering('Growth Science');
    else if (hash === 'gtm-acceleration') setSelectedOffering('GTM Acceleration');
    else if (hash === 'revenue-operations') setSelectedOffering('Revenue Operations');
  }, [location.hash]);

  // Combined Filtering across 5 dimensions + Search Query
  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      // 1. Business Challenge filter
      const matchChallenge =
        selectedChallenge === 'All' ||
        cs.challenge === selectedChallenge ||
        cs.challenges.includes(selectedChallenge);

      // 2. Offering filter
      const matchOffering =
        selectedOffering === 'All' ||
        cs.offering === selectedOffering ||
        cs.offerings.includes(selectedOffering);

      // 3. Industry filter
      const matchIndustry =
        selectedIndustry === 'All' ||
        cs.industry === selectedIndustry ||
        cs.industries.includes(selectedIndustry);

      // 4. Company Stage filter
      const matchStage =
        selectedStage === 'All' ||
        cs.stage === selectedStage ||
        cs.stages.includes(selectedStage);

      // 5. Outcome filter
      const matchOutcome =
        selectedOutcome === 'All' ||
        cs.outcome === selectedOutcome ||
        cs.outcomes.includes(selectedOutcome);

      // Search keyword filter
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.headlineResult.toLowerCase().includes(q) ||
        cs.companyName.toLowerCase().includes(q) ||
        cs.summary.toLowerCase().includes(q) ||
        cs.tags.some((t) => t.toLowerCase().includes(q)) ||
        cs.industry.toLowerCase().includes(q) ||
        cs.challenge.toLowerCase().includes(q) ||
        cs.offering.toLowerCase().includes(q);

      return matchChallenge && matchOffering && matchIndustry && matchStage && matchOutcome && matchSearch;
    });
  }, [selectedChallenge, selectedOffering, selectedIndustry, selectedStage, selectedOutcome, searchQuery]);

  const resetFilters = () => {
    setSelectedChallenge('All');
    setSelectedOffering('All');
    setSelectedIndustry('All');
    setSelectedStage('All');
    setSelectedOutcome('All');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedChallenge !== 'All' ||
    selectedOffering !== 'All' ||
    selectedIndustry !== 'All' ||
    selectedStage !== 'All' ||
    selectedOutcome !== 'All' ||
    searchQuery.trim() !== '';

  const handleSelectChallenge = (challengeId: string) => {
    setSelectedChallenge(challengeId);
    const element = document.getElementById('case-study-library');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── 1. HERO SECTION: Revenue Transformation in Practice ── */}
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
                Revenue Transformation in Practice
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Evidence-led case studies demonstrating how enterprise revenue leaders eliminate forecast variance, engineer predictable pipeline, and capture verified profit pools using autonomous revenue systems.
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

              <a
                href="#case-study-library"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore All Transformations</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>

              <Link
                to="/case-studies/ai-native"
                className="inline-flex items-center justify-center border border-blue-200 bg-blue-50/60 hover:bg-blue-100/70 text-blue-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <Bot className="w-4 h-4 text-blue-600" />
                <span>AI-Native Deployments</span>
              </Link>
            </div>
          </div>

          {/* Dark-Mode Mosaic of Live Enterprise Telemetry Benchmarks */}
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

      {/* ── 2. FEATURED TRANSFORMATION SPOTLIGHT ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              Featured Revenue Transformation
            </div>
            <Link
              to="/case-studies/featured"
              className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 uppercase"
            >
              <span>View All Featured Transformations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Context & Metrics */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase">
                    SaaS
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase">
                    Enterprise
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase">
                    Pipeline Growth
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase">
                    Offering: AI SDR
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading leading-tight">
                  How an Enterprise SaaS Platform ($450M ARR) Achieved 6X Pipeline Growth in 9 Months
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Faced with stalled outbound productivity, a 30% forecast variance, and a disconnected 12-tool sales tech stack, this enterprise SaaS leader deployed ProfitMachines&apos; autonomous AI SDR swarms to isolate untapped profit pools and engineer deterministic pipeline velocity.
                </p>

                {/* Key Metric Highlights */}
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
                    to="/case-studies/enterprise-saas-pipeline-growth"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider transition-all shadow-md group"
                  >
                    <span>Read Full Transformation Blueprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="#intake"
                    className="inline-flex items-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider transition-all"
                  >
                    <span>Request Benchmark Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Quote */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 mb-6 group">
                  <img
                    src="/images/industry-saas.png"
                    alt="Enterprise SaaS Revenue Transformation"
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-white text-xs font-mono font-bold tracking-wider uppercase bg-blue-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                      Enterprise SaaS Production Telemetry
                    </span>
                  </div>
                </div>

                {/* Executive Quote Box */}
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 relative">
                  <Quote className="w-8 h-8 text-blue-600/15 absolute top-3 right-3 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed mb-3">
                    &ldquo;ProfitMachines didn&apos;t just give us tools — they gave us a revenue operating system. We went from hoping for growth to engineering it with mathematical predictability.&rdquo;
                  </p>
                  <div className="text-xs font-mono">
                    <strong className="text-slate-900 block font-bold">Marcus Vance</strong>
                    <span className="text-slate-600">Chief Revenue Officer · $450M ARR Platform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. EXPLORE BY BUSINESS CHALLENGE (Quick Toggles) ── */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Strategic Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Explore by Business Challenge
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select your organization&apos;s primary commercial hurdle to review matching transformation case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {BUSINESS_CHALLENGES.map((ch) => {
              const isSelected = selectedChallenge === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleSelectChallenge(ch.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md -translate-y-0.5'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-900 hover:border-blue-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold uppercase ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                        Challenge
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <h3 className={`text-sm font-bold font-heading mb-1.5 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {ch.label}
                    </h3>
                    <p className={`text-[11px] leading-relaxed ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {ch.desc}
                    </p>
                  </div>
                  <div className={`mt-3 pt-2 text-[10px] font-mono font-semibold flex items-center justify-between border-t ${isSelected ? 'border-blue-500 text-blue-100' : 'border-slate-100 text-slate-400'}`}>
                    <span>Filter Library</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CASE STUDY LIBRARY (Search + 5-Dimension Classification Toolbar) ── */}
      <section id="case-study-library" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
                Field Evidence Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Case Study Library
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
                Filter verified enterprise transformations across five classification dimensions: Business Challenge, Offering, Industry, Company Stage, and Outcome.
              </p>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs font-mono font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200 inline-flex items-center gap-1.5 cursor-pointer w-fit"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
                <span className="text-slate-400">({filteredStudies.length} of {CASE_STUDIES.length})</span>
              </button>
            )}
          </div>

          {/* Search & Multi-Dimension Filter Toolbar */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 mb-10 shadow-xs">
            {/* Search Input */}
            <div className="relative mb-5">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search case studies by title, challenge, outcome, or keyword..."
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

            {/* 5 Dimension Filter Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              {/* Dimension 1: By Business Challenge */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  1. Business Challenge
                </label>
                <select
                  value={selectedChallenge}
                  onChange={(e) => setSelectedChallenge(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Challenges</option>
                  <option value="Pipeline Growth">Pipeline Growth</option>
                  <option value="Revenue Expansion">Revenue Expansion</option>
                  <option value="Forecast Accuracy">Forecast Accuracy</option>
                  <option value="AI Transformation">AI Transformation</option>
                  <option value="Global Scaling">Global Scaling</option>
                </select>
              </div>

              {/* Dimension 2: By Offering */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  2. Offering
                </label>
                <select
                  value={selectedOffering}
                  onChange={(e) => setSelectedOffering(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Offerings</option>
                  <option value="AI SDR">AI SDR</option>
                  <option value="Revenue Intelligence">Revenue Intelligence</option>
                  <option value="Growth Science">Growth Science</option>
                  <option value="GTM Acceleration">GTM Acceleration</option>
                  <option value="Revenue Operations">Revenue Operations</option>
                </select>
              </div>

              {/* Dimension 3: By Industry */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  3. Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Industries</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Distribution">Distribution</option>
                </select>
              </div>

              {/* Dimension 4: By Company Stage */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  4. Company Stage
                </label>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Stages</option>
                  <option value="Startup">Startup</option>
                  <option value="Growth">Growth</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="PE Portfolio">PE Portfolio</option>
                </select>
              </div>

              {/* Dimension 5: By Outcome */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                  5. Outcome
                </label>
                <select
                  value={selectedOutcome}
                  onChange={(e) => setSelectedOutcome(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value="All">All Outcomes</option>
                  <option value="Revenue Growth">Revenue Growth</option>
                  <option value="Pipeline Growth">Pipeline Growth</option>
                  <option value="Cost Reduction">Cost Reduction</option>
                  <option value="Productivity">Productivity</option>
                  <option value="AI Adoption">AI Adoption</option>
                </select>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
              <div>
                Showing <strong className="text-slate-900 font-bold">{filteredStudies.length}</strong> of{' '}
                <strong className="text-slate-900 font-bold">{CASE_STUDIES.length}</strong> verified enterprise case studies
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
                Try broadening your criteria across Challenge, Offering, Industry, Stage, or Outcome, or clear the search query.
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
                          {study.offering}
                        </span>
                        <span className="bg-blue-600/90 px-2.5 py-1 rounded-md font-bold">
                          {study.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 sm:p-8 pb-4">
                      {/* Classification Badges Row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase">
                          {study.industry}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase">
                          {study.stage}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase">
                          {study.challenge}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase">
                          {study.outcome}
                        </span>
                      </div>

                      {/* Headline Result */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors font-heading leading-snug">
                        {study.headlineResult}
                      </h3>

                      {/* Company Name */}
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                        Client Context: <span className="font-semibold text-slate-700">{study.companyName}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        {study.summary}
                      </p>

                      {/* Metric Highlight Box */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-black font-mono text-slate-900">{study.metricBig}</div>
                          <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">{study.metricLabel}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                            Verified Outcome
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-7 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
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

      {/* ── 5. TRANSFORMATION METHODOLOGY (4-Phase Architecture) ── */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              SYSTEMATIC FRAMEWORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Revenue Transformation Methodology
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Every documented transformation adheres to our four-phase deterministic operating methodology. We replace ad-hoc sales tactics with audited mathematical architecture.
            </p>
          </div>

          {/* 4 Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phase 1 */}
            <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    Phase 01
                  </span>
                  <Compass className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Business Context &amp; Diagnostics
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Full-stack commercial audit analyzing baseline metrics, historical win rates, TAM/SOM boundaries, and core growth friction points.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Executive baseline snapshot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Friction &amp; leakage diagnostics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Profit pool isolation</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Deliverable: Commercial Baseline
              </div>
            </div>

            {/* Phase 2 */}
            <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-indigo-600 uppercase bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                    Phase 02
                  </span>
                  <Cpu className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Transformation Design &amp; AI
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Engineering the revenue operating system blueprint: selecting core offerings, orchestrating AI agent workflows, and instituting governance guardrails.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Transformation blueprint</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Multi-agent workflow layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Algorithmic guardrails</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Deliverable: RevOps Architecture
              </div>
            </div>

            {/* Phase 3 */}
            <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-emerald-600 uppercase bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Phase 03
                  </span>
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Evidence &amp; Quantified Results
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Controlled production execution measuring pipeline velocity, forecast variance reduction, and incremental ARR with automated telemetry verification.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Continuous telemetry auditing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Variance reduction to &lt;5%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Audited executive results</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Deliverable: Quantified Outcome Report
              </div>
            </div>

            {/* Phase 4 */}
            <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-purple-600 uppercase bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                    Phase 04
                  </span>
                  <Network className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Replication &amp; Continuous Scale
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Institutionalizing the operational playbook across adjacent business units, international territories, and product lines with closed-loop telemetry.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Replication playbook handoff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Cross-BU operating standard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Compounding expansion loops</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Deliverable: Institutionalized Playbook
              </div>
            </div>
          </div>

          {/* Visual Architecture Banner */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-2">
                  Architectural Rigor
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                  Audited Mathematical Precision Over Guesswork
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Unlike traditional consulting firms that deliver static slide presentations, ProfitMachines deploys algorithmic revenue engines that integrate directly into your CRM, marketing automation, and product data infrastructure. Every metric is calibrated, tracked, and verified through live telemetry.
                </p>
                <div className="inline-flex items-center gap-3 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero fabricated metrics · 100% verified production telemetry</span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                  <img
                    src="/images/hero-data-intelligence.png"
                    alt="Revenue Intelligence & Telemetry Architecture"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-4">
                    <span className="text-xs font-mono text-slate-200">
                      Real-Time Revenue Telemetry Architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOARDROOM VERIFICATION (Testimonials) ── */}
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

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-xs">
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

      {/* ── 7. FINAL CTA + CONFIDENTIAL INTAKE ── */}
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
