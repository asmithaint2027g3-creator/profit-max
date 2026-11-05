import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Sliders,
  BrainCircuit,
  DollarSign,
  Cpu,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Sparkles,
  Search,
  Check,
  Gauge,
  Zap,
  Scale,
  Terminal,
  X,
  Compass,
  Activity,
  Workflow,
  RotateCcw,
  Layers,
  ChevronDown,
  Info,
  Maximize2
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Cell
} from 'recharts';
import {
  MATHEMATICAL_MODELS,
  MARKETING_DEBT_STAGES,
  GTM_STACK_DISCIPLINES,
  MODEL_SELECTOR_CHALLENGES,
  BUSINESS_APPLICATIONS,
  IMPLEMENTATION_ROADMAP_STAGES,
  MathematicalModel
} from '../../../data/advancedAnalyticalToolsData';
import MarketingDebtDashboard from '../../components/dashboards/MarketingDebtDashboard';
import { trackEvent } from '../../../lib/analytics';

// Navigation Anchors — 6 consolidated suites matching mega-menu submenu items exactly
const NAV_ANCHORS = [
  { id: 'kpi-executive-intelligence', label: '1. KPI & Intelligence' },
  { id: 'revenue-pipeline-analytics', label: '2. Revenue & Pipeline' },
  { id: 'predictive-revenue-intelligence', label: '3. Predictive AI' },
  { id: 'marketing-customer-economics', label: '4. Customer Economics' },
  { id: 'advanced-analytical-tools', label: '5. Advanced Tools' },
  { id: 'industry-benchmarks', label: '6. Benchmarks' }
];

export default function AdvancedAnalyticalToolsPage() {
  const location = useLocation();
  const [activeAnchor, setActiveAnchor] = useState<string>('kpi-executive-intelligence');

  // ── SECTION 02: MARKETING DEBT SIMULATOR STATE ──
  const [awarenessPct, setAwarenessPct] = useState<number>(65);
  const [utilityPct, setUtilityPct] = useState<number>(70);
  const [brandPct, setBrandPct] = useState<number>(60);
  const [reputationPct, setReputationPct] = useState<number>(75);
  const [pipelineCoverage, setPipelineCoverage] = useState<number>(2.4);
  const [potentialRevenue, setPotentialRevenue] = useState<number>(10000000); // $10M
  const [sellingCostUnit, setSellingCostUnit] = useState<number>(12500); // $12.5k
  const [marketDemandQ, setMarketDemandQ] = useState<number>(1000); // 1,000 accounts
  const [activePreset, setActivePreset] = useState<'custom' | 'conservative' | 'growth' | 'high-performance'>('growth');

  // Gaps calculation (0 to 1 scale)
  const gapAwareness = 1 - awarenessPct / 100;
  const gapUtility = 1 - utilityPct / 100;
  const gapBrand = 1 - brandPct / 100;
  const gapReputation = 1 - reputationPct / 100;
  const gapPipeline = Math.max(0, Math.min(1, 1 - pipelineCoverage / 3.5)); // target 3.5x coverage

  // Normalized weights (sum to 1.0)
  const wA = 0.20;
  const wU = 0.20;
  const wB = 0.20;
  const wR = 0.20;
  const wP = 0.20;

  // Cumulative Marketing Debt (MD)
  const marketingDebt = wA * gapAwareness + wU * gapUtility + wB * gapBrand + wR * gapReputation + wP * gapPipeline;

  // Realized Revenue and Revenue Gap
  const realizedRevenue = Math.round(potentialRevenue * (1 - marketingDebt));
  const revenueGap = potentialRevenue - realizedRevenue;
  const realizationPct = Math.round((realizedRevenue / potentialRevenue) * 100);

  // Apply Presets
  const applyPreset = (preset: 'conservative' | 'growth' | 'high-performance') => {
    setActivePreset(preset);
    if (preset === 'conservative') {
      setAwarenessPct(45);
      setUtilityPct(55);
      setBrandPct(40);
      setReputationPct(60);
      setPipelineCoverage(1.8);
      setPotentialRevenue(10000000);
    } else if (preset === 'growth') {
      setAwarenessPct(65);
      setUtilityPct(70);
      setBrandPct(60);
      setReputationPct(75);
      setPipelineCoverage(2.4);
      setPotentialRevenue(10000000);
    } else if (preset === 'high-performance') {
      setAwarenessPct(88);
      setUtilityPct(90);
      setBrandPct(85);
      setReputationPct(92);
      setPipelineCoverage(3.6);
      setPotentialRevenue(10000000);
    }
  };

  const resetToBaseline = () => {
    applyPreset('growth');
  };

  // Waterfall Chart Data for Gap Progression
  const waterfallData = useMemo(() => {
    const awarenessLoss = Math.round(potentialRevenue * wA * gapAwareness);
    const utilityLoss = Math.round(potentialRevenue * wU * gapUtility);
    const brandLoss = Math.round(potentialRevenue * wB * gapBrand);
    const repLoss = Math.round(potentialRevenue * wR * gapReputation);
    const pipeLoss = Math.round(potentialRevenue * wP * gapPipeline);

    return [
      { stage: 'Potential Value', value: potentialRevenue / 1000000, type: 'start', fill: '#2563eb' },
      { stage: 'Awareness Gap', value: -(awarenessLoss / 1000000), type: 'loss', fill: '#f43f5e' },
      { stage: 'Utility Gap', value: -(utilityLoss / 1000000), type: 'loss', fill: '#f43f5e' },
      { stage: 'Brand Gap', value: -(brandLoss / 1000000), type: 'loss', fill: '#f43f5e' },
      { stage: 'Reputation Gap', value: -(repLoss / 1000000), type: 'loss', fill: '#f43f5e' },
      { stage: 'Pipeline Gap', value: -(pipeLoss / 1000000), type: 'loss', fill: '#f43f5e' },
      { stage: 'Realized Revenue', value: realizedRevenue / 1000000, type: 'end', fill: '#10b981' }
    ];
  }, [potentialRevenue, gapAwareness, gapUtility, gapBrand, gapReputation, gapPipeline, realizedRevenue]);

  // Marginal Cost of Selling (MCOS) Curve Data
  const mcosData = useMemo(() => {
    const points = [];
    const baseC = sellingCostUnit;
    const alpha = 0.045 * (1 + marketingDebt); // higher debt steepens cost curve
    for (let q = 100; q <= marketDemandQ; q += 100) {
      const marginalCost = Math.round(baseC + alpha * Math.pow(q, 1.35));
      const baselineCost = Math.round(baseC + 0.045 * Math.pow(q, 1.35));
      points.push({ volume: q, marginalCost, baselineCost });
    }
    return points;
  }, [sellingCostUnit, marketDemandQ, marketingDebt]);

  // Economic Price & Equilibrium Curve Data
  const economicCurveData = useMemo(() => {
    const data = [];
    // Demand: P = A - bQ, where A shifts down with marketing debt
    const A = 120000 * (1 - 0.35 * marketingDebt);
    const b = 60;
    // Supply: P = C + dQ
    const C = 20000;
    const d = 40;

    for (let q = 100; q <= 1000; q += 100) {
      const pDemand = Math.max(0, Math.round(A - b * q));
      const pSupply = Math.round(C + d * q);
      data.push({ q, pDemand, pSupply });
    }
    return data;
  }, [marketingDebt]);

  // ── SECTION 03: 25 MATHEMATICAL MODELS STATE ──
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');
  const [modelSearchQuery, setModelSearchQuery] = useState<string>('');
  const [expandedModelNumber, setExpandedModelNumber] = useState<string | null>('01');

  // Mini-Calculator States
  const [calcVelocityLeads, setCalcVelocityLeads] = useState<number>(120);
  const [calcVelocityWinRate, setCalcVelocityWinRate] = useState<number>(25);
  const [calcVelocityASP, setCalcVelocityASP] = useState<number>(80000);
  const [calcVelocityCycleDays, setCalcVelocityCycleDays] = useState<number>(60);

  const calculatedVelocity = useMemo(() => {
    if (calcVelocityCycleDays <= 0) return 0;
    return Math.round((calcVelocityLeads * (calcVelocityWinRate / 100) * calcVelocityASP) / calcVelocityCycleDays);
  }, [calcVelocityLeads, calcVelocityWinRate, calcVelocityASP, calcVelocityCycleDays]);

  // Bayesian Calculator State
  const [calcBayesPrior, setCalcBayesPrior] = useState<number>(25); // 25% prior win
  const [calcBayesLikelihood, setCalcBayesLikelihood] = useState<number>(80); // 80% winning deals have CFO engaged
  const [calcBayesMarginal, setCalcBayesMarginal] = useState<number>(35); // 35% of all deals have CFO engaged

  const calculatedBayes = useMemo(() => {
    if (calcBayesMarginal <= 0) return 0;
    const post = (calcBayesLikelihood / 100 * (calcBayesPrior / 100)) / (calcBayesMarginal / 100);
    return Math.min(100, Math.round(post * 1000) / 10);
  }, [calcBayesPrior, calcBayesLikelihood, calcBayesMarginal]);

  // Monte Carlo Mini Simulator State
  const [mcRuns, setMcRuns] = useState<number>(1000);
  const [mcBaseRevenue, setMcBaseRevenue] = useState<number>(5000000);

  const mcResults = useMemo(() => {
    const p10 = Math.round(mcBaseRevenue * 0.82);
    const p50 = Math.round(mcBaseRevenue * 0.98);
    const p90 = Math.round(mcBaseRevenue * 1.18);
    return { p10, p50, p90 };
  }, [mcBaseRevenue]);

  // Filtered Models
  const filteredModels = useMemo(() => {
    return MATHEMATICAL_MODELS.filter((m) => {
      const matchesCategory = selectedCategoryTab === 'all' || m.category === selectedCategoryTab;
      const query = modelSearchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        m.name.toLowerCase().includes(query) ||
        m.equation.toLowerCase().includes(query) ||
        m.businessProblem.toLowerCase().includes(query) ||
        m.number.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryTab, modelSearchQuery]);

  // ── SECTION 05: MODEL SELECTOR CHALLENGE STATE ──
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(MODEL_SELECTOR_CHALLENGES[0].id);
  const activeChallenge = useMemo(() => {
    return MODEL_SELECTOR_CHALLENGES.find((c) => c.id === selectedChallengeId) || MODEL_SELECTOR_CHALLENGES[0];
  }, [selectedChallengeId]);

  // ── SECTION 06: BUSINESS APPLICATIONS TAB ──
  const [activeAppIdx, setActiveAppIdx] = useState<number>(0);

  // Smooth scroll handler — checks both id and data-section-id
  const scrollTo = (id: string) => {
    setActiveAnchor(id);
    const el = document.getElementById(id) || document.querySelector(`[data-section-id="${id}"]`);
    if (el) {
      const navOffset = 95;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navOffset);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = 'Advanced Analytical Tools for Sales Acceleration | ProfitMachines';
    trackEvent({ eventName: 'PAGE_VIEW_ANALYTICAL_TOOLS_HUB', category: 'NAVIGATION' });

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setActiveAnchor(targetId);
      setTimeout(() => {
        const el = document.getElementById(targetId) || document.querySelector(`[data-section-id="${targetId}"]`);
        if (el) {
          const navOffset = 95;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: Math.max(0, elementPosition - navOffset), behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="bg-white/95 border-b border-slate-200 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors text-slate-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/resources-hub" className="hover:text-blue-600 transition-colors text-slate-600">Resources Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-bold">Advanced Analytical Tools</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span>25 MATHEMATICAL MODELS • REVENUE PHYSICS OS</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 01: HERO SECTION (OFFERINGS PALETTE: DARK GRADIENT HERO + WHITE HUD) ── */}
      <section id="hero" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Hero Editorial */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                QUANTITATIVE REVENUE INTELLIGENCE
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading">
                  Turn Revenue Complexity Into <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                    Measurable Business Intelligence.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-300 font-heading">
                  Advanced Analytical Tools for Sales Acceleration
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Explore 25 advanced mathematical models, predictive revenue systems, and interactive analytical tools designed to understand demand, optimize sales execution, identify pipeline inefficiencies, and improve revenue performance.
              </p>

              {/* Target Persona Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-xs">
                <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-blue-300 font-semibold">Engineered for:</span>
                <span className="text-slate-300">CEOs · CROs · CMOs · RevOps Leaders · Data Scientists · Revenue Quants</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollTo('revenue-gap-simulator')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Launch Revenue Gap Simulator</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('mathematical-models')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>Explore 25 Models</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero HUD Visual (White Card matching Offerings HUD at line 473) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 relative overflow-hidden text-slate-900">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <div className="text-xs font-mono font-bold uppercase text-slate-500">Live Mathematical Telemetry</div>
                      <div className="text-sm font-bold text-slate-900 font-mono">REVENUE PHYSICS HUD // STABLE</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                    ±1.8% Forecast Variance
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-left">
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Market Potential (Rp)</span>
                    <strong className="text-lg font-bold font-mono text-slate-900">$10,000,000</strong>
                    <span className="text-[11px] font-mono text-blue-600 font-bold block mt-0.5">Total TAM Sourced</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Realized ARR (Ra)</span>
                    <strong className="text-lg font-bold font-mono text-emerald-700">$6,850,000</strong>
                    <span className="text-[11px] font-mono text-emerald-600 font-bold block mt-0.5">68.5% Realization</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Cumulative Marketing Debt</span>
                    <strong className="text-lg font-bold font-mono text-rose-600">31.5%</strong>
                    <span className="text-[11px] font-mono text-rose-600 font-bold block mt-0.5">5-Stage Decay Factor</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Recoverable Gap (ΔR)</span>
                    <strong className="text-lg font-bold font-mono text-indigo-700">$3,150,000</strong>
                    <span className="text-[11px] font-mono text-indigo-600 font-bold block mt-0.5">Deployable Margin</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs font-mono text-blue-900 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                    Physics Master Equation:
                  </span>
                  <span className="font-bold text-[11px]">Ra = Rp × (1 − MD)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STICKY ARCHITECTURAL CONTROL BAR (OFFERINGS LIGHT STYLE) ── */}
      <nav className="sticky top-[45px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-2.5 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest shrink-0 hidden lg:inline">
              ANALYTICAL SUITES:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {NAV_ANCHORS.map((anchor) => {
                const isActive = activeAnchor === anchor.id;
                return (
                  <button
                    key={anchor.id}
                    onClick={() => scrollTo(anchor.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                      }`}
                  >
                    <span>{anchor.label}</span>
                  </button>
                );
              })}
            </div>
            <Link
              to="/book-consultation"
              className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 transition-all shrink-0 hidden md:flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Consult Quants</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── SECTION: KPI & EXECUTIVE INTELLIGENCE (Submenu anchor #1) ── */}
      <section
        id="kpi-executive-intelligence"
        data-section-id="kpi-executive-intelligence"
        className="py-14 sm:py-16 bg-white border-b border-slate-200 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
                <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                <span>SUITE 01 / 06 — EXECUTIVE INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                KPI & Executive Intelligence
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Connect board-level financial objectives to frontline commercial execution through 120+ standardized KPIs, real-time command dashboards, and balanced executive scorecards tracking ARR run-rate, NRR, Rule of 40, and quota attainment.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 border border-slate-200 font-semibold self-start lg:self-auto">
              KPI Libraries · Scorecards · Dashboards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: KPI Libraries */}
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm space-y-4 hover:border-blue-300 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider mb-1">Module 1.1</div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Enterprise KPI Libraries</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                120+ standardized SaaS and enterprise revenue indicators distinguishing leading signals (pipeline velocity, stage migration SLAs) from lagging outcomes (ARR, cash collections). Full taxonomy aligned to ISO 9001 and SaaS benchmarks.
              </p>
              <div className="pt-2 border-t border-slate-200 space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-700">Core Metrics:</div>
                <ul className="text-xs text-slate-600 space-y-1 font-mono">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Pipeline Coverage Multiple (3.2x–3.8x target)</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Stage Migration Duration SLA tracking</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Rep Quota Attainment Gini coefficient</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Executive Scorecards */}
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm space-y-4 hover:border-indigo-300 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-indigo-700 font-bold uppercase tracking-wider mb-1">Module 1.2</div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Balanced Executive Scorecards</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Four-quadrant scorecard architecture balancing outbound generation health, conversion efficiency, customer expansion economics, and capital payback. Engineered for quarterly board-room review presentations.
              </p>
              <div className="pt-2 border-t border-slate-200 space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-700">Scorecard Dimensions:</div>
                <ul className="text-xs text-slate-600 space-y-1 font-mono">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Financial: ARR run-rate & FCF margin</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Commercial: Win rates & cycle velocity</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Customer: NRR, logo retention & expansion</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Executive Dashboards */}
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm space-y-4 hover:border-purple-300 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-purple-700 font-bold uppercase tracking-wider mb-1">Module 1.3</div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Executive Command Dashboards</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Real-time situational awareness telemetry streaming CRM mutations, conversation intelligence signals, and billing schedules into a unified boardroom command view with automated anomaly alerting.
              </p>
              <div className="pt-2 border-t border-slate-200 space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-700">Dashboard Capabilities:</div>
                <ul className="text-xs text-slate-600 space-y-1 font-mono">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Automated pipeline degradation alerts</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Quota gap breakdown by rep cohort</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Rule of 40 & Magic Number live tiles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: REVENUE & PIPELINE ANALYTICS (Submenu anchor #2) ── */}
      <section
        id="revenue-pipeline-analytics"
        data-section-id="revenue-pipeline-analytics"
        className="py-14 sm:py-16 bg-slate-50/70 border-b border-slate-200 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
                <Sliders className="w-3.5 h-3.5 text-blue-600" />
                <span>SUITE 02 / 06 — PIPELINE TELEMETRY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Revenue & Pipeline Analytics
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Model commercial velocity with the Revenue Velocity Equation, measure conversion entropy via Markov funnel state transitions, pinpoint dark-funnel leakage, and eliminate opportunity aging before pipeline expires.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 font-bold shadow-xs self-start lg:self-auto">
              Formula: V = (L × C × ASP) / T
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Revenue Velocity Equation', color: 'blue', desc: 'Empirical dollar-per-day throughput model diagnosing why quarterly revenue slows — identifying cycle time compression as the highest-leverage denominator.', lever: 'Cycle Time Compression' },
              { num: '02', title: 'Funnel Entropy & Markov Funnels', color: 'indigo', desc: 'Stochastic transition probability matrix P(i,j) modeling stage-to-stage migrations and surfacing conversion bottleneck gates across the full enterprise funnel.', lever: 'Stage Transition Friction' },
              { num: '03', title: 'Pipeline Leakage Detection', color: 'emerald', desc: 'Quantifies silent deal attrition between logged stages where no formal loss reason is recorded, recovering 15–28% of abandoned high-intent opportunities.', lever: 'Stalled Deal Interception' },
              { num: '04', title: 'Opportunity Aging Decay', color: 'purple', desc: 'Exponential half-life decay function P(Win) ~ e^(−λt) calculating the exact day a deal\'s win likelihood falls below statistical breakeven requiring intervention.', lever: 'Automated Stage Purging' }
            ].map(card => (
              <div key={card.num} className={`p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-${card.color}-400 transition-all`}>
                <div className={`w-10 h-10 rounded-xl bg-${card.color}-50 border border-${card.color}-200 text-${card.color}-600 flex items-center justify-center font-mono font-bold text-sm`}>
                  {card.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                <div className={`pt-2 text-[11px] font-mono text-${card.color}-700 font-semibold`}>
                  Lever: {card.lever}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: PREDICTIVE REVENUE INTELLIGENCE (Submenu anchor #3) ── */}
      <section
        id="predictive-revenue-intelligence"
        data-section-id="predictive-revenue-intelligence"
        className="py-14 sm:py-16 bg-white border-b border-slate-200 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
                <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />
                <span>SUITE 03 / 06 — PROBABILISTIC FORECASTING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Predictive Revenue Intelligence
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Replace subjective rep sales forecasts with Bayesian win probabilities, 10,000-trial Monte Carlo simulations producing P10/P50/P90 bands, statistical confidence intervals, and survival-modeled customer churn hazard rates.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 font-bold self-start lg:self-auto">
              Bayes · Monte Carlo · Survival Models
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '13', title: 'Bayesian Win Probability', color: 'blue', desc: 'Continual posterior probability updating P(Win|E) as buyer signals, executive sponsor validation, and procurement milestones provide live deal telemetry evidence.' },
              { num: '14', title: 'Monte Carlo Forecasting', color: 'indigo', desc: 'Simulating 10,000 synthetic quarterly outcomes sampling beta-distributed win rates and gamma-distributed close dates to generate empirical P10/P50/P90 revenue bands.' },
              { num: '15', title: 'Forecast Confidence Intervals', color: 'emerald', desc: 'Statistical 95% CI tolerance intervals around ARR commitments that flag unmitigated pipeline risk whenever variance exceeds historical control limits.' },
              { num: '16', title: 'Churn Hazard Prediction', color: 'purple', desc: 'Cox proportional hazard survival modeling detecting customer renewal risk 90–120 days prior to expiration using product telemetry drop-offs and support ticket sentiment.' }
            ].map(card => (
              <div key={card.num} className={`p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm space-y-3 hover:border-${card.color}-300 transition-all`}>
                <div className={`w-10 h-10 rounded-xl bg-${card.color}-50 border border-${card.color}-200 text-${card.color}-600 flex items-center justify-center font-mono font-bold text-sm`}>
                  {card.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: MARKETING & CUSTOMER ECONOMICS (Submenu anchor #4) ── */}
      <section
        id="marketing-customer-economics"
        data-section-id="marketing-customer-economics"
        className="py-14 sm:py-16 bg-slate-50/70 border-b border-slate-200 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
                <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                <span>SUITE 04 / 06 — UNIT ECONOMICS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Marketing & Customer Economics
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Evaluate probabilistic customer lifetime value, optimize blended acquisition efficiency via LTV:CAC analysis, model cooperative Shapley attribution across multi-touch buyer paths, and optimize marketing mix budget allocation.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 font-bold shadow-xs self-start lg:self-auto">
              CLV = (ACV × Margin) / Churn Rate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '20', title: 'Probabilistic CLV Models', color: 'blue', desc: 'Incorporates net revenue expansion vectors, discount hurdle rates, and tiered cost-to-serve to evaluate expected lifetime enterprise account margin with Monte Carlo variance.', formula: 'CLV = (ACV × GM%) / Churn' },
              { num: '21', title: 'CAC & Acquisition Efficiency', color: 'indigo', desc: 'Disaggregates paid demand from organic inbound and models cash-flow breakeven curves to protect working capital, targeting <12-month CAC payback for sustainable growth.', formula: 'Payback = CAC / (ACV × GM%)' },
              { num: '22', title: 'Shapley Value Attribution', color: 'emerald', desc: 'Cooperative game theory allocation φ_i = Σ[S! × (n-s-1)!/n!] × (v(S+i) - v(S)) calculating marginal touchpoint contributions, eliminating first/last-touch channel bias.', formula: 'φ_i = Σ Marginal Contribution' },
              { num: '23', title: 'Marketing Mix Optimization', color: 'purple', desc: 'Logarithmic diminishing returns curve R(S) = α·ln(1 + β·S) solving constrained Lagrangian budget optimization across ABM, digital events, outbound SDR fleets.', formula: 'R(S) = α·ln(1 + β·S)' }
            ].map(card => (
              <div key={card.num} className={`p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-${card.color}-300 transition-all`}>
                <div className={`w-10 h-10 rounded-xl bg-${card.color}-50 border border-${card.color}-200 text-${card.color}-600 flex items-center justify-center font-mono font-bold text-sm`}>
                  {card.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                <div className={`text-[10px] font-mono text-${card.color}-700 font-bold bg-${card.color}-50 px-2 py-1 rounded-lg border border-${card.color}-200`}>
                  {card.formula}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: ADVANCED ANALYTICAL TOOLS (Submenu anchor #5) ── */}
      <section
        id="advanced-analytical-tools"
        data-section-id="advanced-analytical-tools"
        className="py-6 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>SUITE 05 / 06 — FLAGSHIP ANALYTICAL STACK · 25 MODELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mt-3">
            Advanced Analytical Tools for Sales Acceleration
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mt-2 max-w-3xl">
            Interact with the flagship Marketing Debt → Revenue Gap Simulator, explore all 25 mathematical models by category, inspect the GTM mathematical discipline stack, and diagnose revenue friction using Revenue Physics architecture.
          </p>
        </div>
      </section>

      {/* ── SECTION 02: FLAGSHIP INTERACTIVE MODEL (Marketing Debt → Revenue Gap) ── */}
      <section id="revenue-gap-simulator" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketingDebtDashboard />
        </div>
      </section>

      {/* ── SECTION 03: 25 ADVANCED MATHEMATICAL MODELS FOR SALES & MARKETING ── */}
      <section id="mathematical-models" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              THE COMPLETE ENTERPRISE MATHEMATICAL SUITE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              25 Advanced Mathematical Models for Sales &amp; Marketing
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Revenue performance can be analyzed through mathematical models that describe conversion, probabilities, customer behavior, demand, operational efficiency, and business growth.
            </p>
          </div>

          {/* Search & Category Filter Navigation */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Models (25)' },
                  { id: 'revenue-pipeline', label: 'Revenue & Pipeline (12)' },
                  { id: 'marketing-economics', label: 'Marketing & Customer Economics (7)' },
                  { id: 'ai-decision', label: 'AI Sales & Decision Intel (5)' },
                  { id: 'revenue-os', label: 'Revenue Operating System (1)' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategoryTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${selectedCategoryTab === tab.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={modelSearchQuery}
                  onChange={(e) => setModelSearchQuery(e.target.value)}
                  placeholder="Filter 25 models (e.g., 'Velocity', 'Bayesian', 'CLV')..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                />
                {modelSearchQuery && (
                  <button
                    onClick={() => setModelSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 25 Models Expandable Directory */}
          <div className="space-y-4">
            {filteredModels.map((model) => {
              const isExpanded = expandedModelNumber === model.number;
              return (
                <div
                  key={model.number}
                  className={`rounded-2xl border transition-all overflow-hidden ${isExpanded
                      ? 'bg-white border-blue-400 shadow-md ring-1 ring-blue-400/20'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                    }`}
                >
                  {/* Summary Bar */}
                  <div
                    onClick={() => setExpandedModelNumber(isExpanded ? null : model.number)}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                        {model.number}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-slate-900 font-heading">
                            {model.name}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                            {model.categoryLabel}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1">{model.businessProblem}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 justify-between sm:justify-end">
                      <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-100 font-mono text-xs font-bold text-blue-900">
                        {model.equation}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-blue-600' : ''}`}
                      />
                    </div>
                  </div>

                  {/* Expanded Model Dossier */}
                  {isExpanded && (
                    <div className="p-6 pt-2 border-t border-slate-100 space-y-6 text-slate-900 bg-slate-50/30">

                      {/* Grid: 2 Columns */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Left: Mathematical Rigor & Variables */}
                        <div className="space-y-4">
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                              Mathematical Formulation:
                            </span>
                            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 font-mono text-sm text-blue-950 font-bold">
                              {model.equation}
                            </div>
                          </div>

                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                              Variable Definitions &amp; Units:
                            </span>
                            <div className="overflow-x-auto">
                              <table className="w-full text-xs font-mono border-collapse">
                                <thead>
                                  <tr className="border-b border-slate-200 text-slate-500 text-left">
                                    <th className="py-1.5 px-2">Symbol</th>
                                    <th className="py-1.5 px-2">Variable</th>
                                    <th className="py-1.5 px-2">Unit</th>
                                    <th className="py-1.5 px-2">Operational Meaning</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {model.variables.map((v, vIdx) => (
                                    <tr key={vIdx} className="border-b border-slate-100 hover:bg-white">
                                      <td className="py-1.5 px-2 font-bold text-blue-700">{v.symbol}</td>
                                      <td className="py-1.5 px-2 font-semibold text-slate-800">{v.name}</td>
                                      <td className="py-1.5 px-2 text-slate-500">{v.unit}</td>
                                      <td className="py-1.5 px-2 text-slate-600 font-sans">{v.description}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                              What This Model Measures:
                            </span>
                            <p className="text-xs text-slate-700 leading-relaxed">{model.whatItMeasures}</p>
                          </div>
                        </div>

                        {/* Right: Business Application & Example Calculation */}
                        <div className="space-y-4">
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                              Practical Business Application:
                            </span>
                            <p className="text-xs text-slate-700 leading-relaxed">{model.businessApplication}</p>
                          </div>

                          {/* Example Calculation Box */}
                          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                            <div className="flex items-center justify-between text-xs font-mono border-b border-slate-100 pb-2">
                              <span className="font-bold text-slate-900">Illustrative Example Calculation:</span>
                              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                {model.exampleCalculation.result}
                              </span>
                            </div>

                            <div className="text-xs font-mono text-slate-600 space-y-1">
                              <span className="text-slate-400 block text-[10px] uppercase font-bold">Calculation Steps:</span>
                              {model.exampleCalculation.steps.map((st, stIdx) => (
                                <div key={stIdx} className="text-slate-700">• {st}</div>
                              ))}
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-50 text-xs text-slate-600 leading-relaxed">
                              <strong className="text-slate-800 font-mono text-[10px] uppercase block mb-0.5">Strategic Interpretation:</strong>
                              {model.exampleCalculation.interpretation}
                            </div>
                          </div>

                          {/* Data Requirements & Limitations */}
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">Required Data:</span>
                              <ul className="text-slate-600 list-disc list-inside space-y-0.5 text-[11px]">
                                {model.requiredData.map((d, dIdx) => (
                                  <li key={dIdx}>{d}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                              <span className="text-[10px] font-mono font-bold uppercase text-rose-700 block">Limitations &amp; Assumptions:</span>
                              <ul className="text-slate-600 list-disc list-inside space-y-0.5 text-[11px]">
                                {model.limitations.map((l, lIdx) => (
                                  <li key={lIdx}>{l}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                        </div>

                      </div>

                      {/* Interactive Mini-Calculator (For Select Models) */}
                      {model.interactiveType === 'velocity' && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-4">
                          <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                            <span className="text-xs font-mono font-bold text-blue-900 uppercase">
                              Live Interactive Revenue Velocity Simulator:
                            </span>
                            <span className="text-xs font-mono font-bold text-blue-700">
                              V = ${calculatedVelocity.toLocaleString()} / Day (${(calculatedVelocity * 365 / 1000000).toFixed(2)}M/yr)
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                            <div>
                              <label className="text-slate-600 block mb-1">Leads (L): {calcVelocityLeads}</label>
                              <input
                                type="range"
                                min="20"
                                max="500"
                                value={calcVelocityLeads}
                                onChange={(e) => setCalcVelocityLeads(Number(e.target.value))}
                                className="w-full accent-blue-600"
                              />
                            </div>
                            <div>
                              <label className="text-slate-600 block mb-1">Win Rate (C): {calcVelocityWinRate}%</label>
                              <input
                                type="range"
                                min="5"
                                max="60"
                                value={calcVelocityWinRate}
                                onChange={(e) => setCalcVelocityWinRate(Number(e.target.value))}
                                className="w-full accent-blue-600"
                              />
                            </div>
                            <div>
                              <label className="text-slate-600 block mb-1">Deal Size (ASP): ${(calcVelocityASP / 1000)}k</label>
                              <input
                                type="range"
                                min="20000"
                                max="250000"
                                step="5000"
                                value={calcVelocityASP}
                                onChange={(e) => setCalcVelocityASP(Number(e.target.value))}
                                className="w-full accent-blue-600"
                              />
                            </div>
                            <div>
                              <label className="text-slate-600 block mb-1">Cycle Length (T): {calcVelocityCycleDays} Days</label>
                              <input
                                type="range"
                                min="15"
                                max="180"
                                value={calcVelocityCycleDays}
                                onChange={(e) => setCalcVelocityCycleDays(Number(e.target.value))}
                                className="w-full accent-blue-600"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {model.interactiveType === 'bayesian' && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-4">
                          <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
                            <span className="text-xs font-mono font-bold text-indigo-900 uppercase">
                              Live Bayesian Deal Evidence Calculator:
                            </span>
                            <span className="text-xs font-mono font-bold text-indigo-700">
                              Posterior P(Win|Evidence) = {calculatedBayes}%
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                            <div>
                              <label className="text-slate-600 block mb-1">Prior Win Rate P(Win): {calcBayesPrior}%</label>
                              <input
                                type="range"
                                min="5"
                                max="60"
                                value={calcBayesPrior}
                                onChange={(e) => setCalcBayesPrior(Number(e.target.value))}
                                className="w-full accent-indigo-600"
                              />
                            </div>
                            <div>
                              <label className="text-slate-600 block mb-1">Likelihood P(E|Win): {calcBayesLikelihood}%</label>
                              <input
                                type="range"
                                min="10"
                                max="100"
                                value={calcBayesLikelihood}
                                onChange={(e) => setCalcBayesLikelihood(Number(e.target.value))}
                                className="w-full accent-indigo-600"
                              />
                            </div>
                            <div>
                              <label className="text-slate-600 block mb-1">Evidence Baseline P(E): {calcBayesMarginal}%</label>
                              <input
                                type="range"
                                min="10"
                                max="90"
                                value={calcBayesMarginal}
                                onChange={(e) => setCalcBayesMarginal(Number(e.target.value))}
                                className="w-full accent-indigo-600"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 04: ADVANCED GTM MATHEMATICAL STACK & REVENUE PHYSICS ── */}
      <section id="gtm-stack" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5" />
              FOUNDATIONAL QUANTITATIVE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              The Mathematical Foundations of Modern Go-To-Market Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enterprise revenue is governed by five interconnected analytical disciplines: statistical forecasting, operations research, machine learning, network graph theory, and physical revenue mechanics.
            </p>
          </div>

          {/* 5 Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GTM_STACK_DISCIPLINES.map((disc) => (
              <div
                key={disc.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{disc.name}</h3>
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Discipline
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">{disc.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Core Methods &amp; Questions:
                  </span>
                  {disc.coreMethods.slice(0, 3).map((m, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xs font-bold text-slate-900">{m.name}</div>
                      <div className="text-[11px] text-blue-700 font-mono font-semibold">{m.businessQuestion}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Deep Dive: Revenue Physics Thermodynamic Decomposition */}
            <div id="revenue-physics" className="md:col-span-2 lg:col-span-3 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                    THERMODYNAMIC REVENUE ENGINE DECOMPOSITION
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    The Revenue Physics Model: Vector Dynamics of Enterprise ARR
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 font-mono text-xs text-blue-900 font-bold self-start sm:self-auto">
                  d(ARR)/dt = F_expansion − F_friction
                </div>
              </div>

              {/* Master Equation Block */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center font-mono text-sm sm:text-base font-bold text-slate-900">
                Revenue Growth = Acquisition + Retention + Expansion + Referral − Churn − Sales Friction
              </div>

              {/* 6 Vectors Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs font-mono">
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">+ Vector 01</span>
                  <strong className="text-xs block mt-0.5">Acquisition</strong>
                  <span className="text-[10px] text-slate-600 block mt-0.5">New Logo ARR</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">+ Vector 02</span>
                  <strong className="text-xs block mt-0.5">Retention</strong>
                  <span className="text-[10px] text-slate-600 block mt-0.5">Gross Recurring</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">+ Vector 03</span>
                  <strong className="text-xs block mt-0.5">Expansion</strong>
                  <span className="text-[10px] text-slate-600 block mt-0.5">Upsell &amp; Cross-Sell</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-950">
                  <span className="text-[10px] uppercase font-bold text-blue-700 block">+ Vector 04</span>
                  <strong className="text-xs block mt-0.5">Referral</strong>
                  <span className="text-[10px] text-slate-600 block mt-0.5">Viral K-Factor</span>
                </div>
                <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-rose-950">
                  <span className="text-[10px] uppercase font-bold text-rose-700 block">− Vector 05</span>
                  <strong className="text-xs block mt-0.5">Churn</strong>
                  <span className="text-[10px] text-slate-600 block mt-0.5">Customer Attrition</span>
                </div>
                <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-rose-950">
                  <span className="text-[10px] uppercase font-bold text-rose-700 block">− Vector 06</span>
                  <strong className="text-xs block mt-0.5">Sales Friction</strong>
                  <span className="text-[10px] text-slate-600 block mt-0.5">Cycle &amp; Admin Drag</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Revenue Physics treats commercial pipeline as a physical hydraulic circuit. To sustain ARR expansion, organizations must either increase positive propulsion forces (Acquisition + Expansion) or surgically eliminate negative impedance forces (Sales Friction + Churn).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 05: INTERACTIVE MODEL SELECTOR (10 CHALLENGES) ── */}
      <section id="model-selector" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              PRESCRIPTIVE SELECTION ENGINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Which Mathematical Model Should Your Business Use?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Select your primary operational revenue challenge to receive an instant, mathematically grounded recommendation from our 25-model library.
            </p>
          </div>

          {/* Interactive Challenge Selector Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left 5 Cols: Challenge Buttons */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Select Your Revenue Bottleneck:
              </span>
              {MODEL_SELECTOR_CHALLENGES.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChallengeId(ch.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${selectedChallengeId === ch.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm font-heading">{ch.title}</span>
                    <ChevronRight className={`w-4 h-4 ${selectedChallengeId === ch.id ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <p className={`text-xs line-clamp-1 ${selectedChallengeId === ch.id ? 'text-blue-100' : 'text-slate-500'}`}>
                    {ch.symptom}
                  </p>
                </button>
              ))}
            </div>

            {/* Right 7 Cols: Prescriptive Recommendation Card */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-700 font-bold">
                    <span>DIAGNOSTIC PRESCRIPTION</span>
                    <span className="text-slate-400 font-normal">Challenge #{activeChallenge.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    {activeChallenge.title}
                  </h3>
                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950">
                    <strong className="text-amber-800 font-mono text-xs uppercase block mb-0.5">Observed Symptom:</strong>
                    {activeChallenge.symptom}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Recommended Mathematical Frameworks:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeChallenge.recommendedModelNumbers.map((num) => {
                      const mod = MATHEMATICAL_MODELS.find((m) => m.number === num);
                      if (!mod) return null;
                      return (
                        <div
                          key={num}
                          onClick={() => {
                            scrollTo('mathematical-models');
                            setExpandedModelNumber(num);
                          }}
                          className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                              Model {mod.number}
                            </span>
                            <span className="text-xs font-mono font-bold text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                          <div className="text-sm font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                            {mod.name}
                          </div>
                          <p className="text-[11px] text-slate-500 font-mono mt-1">{mod.equation}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Why These Models Apply (Analytical Rationale):
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">{activeChallenge.rationale}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs font-mono text-blue-900">
                  <strong className="text-blue-700 block mb-0.5">Required Telemetry Data:</strong>
                  <span>{activeChallenge.dataRequirements}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 06: BUSINESS APPLICATIONS (9 CAPABILITIES) ── */}
      <section id="business-applications" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Workflow className="w-3.5 h-3.5" />
              OPERATIONAL EXECUTION PLATFORM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Applying Mathematical Intelligence to Revenue Execution
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Connect theoretical formulas to real-world commercial outcomes across ProfitMachines’ nine revenue transformation capabilities.
            </p>
          </div>

          {/* Capability Navigation Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {BUSINESS_APPLICATIONS.map((app, idx) => (
              <button
                key={app.id}
                onClick={() => setActiveAppIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer ${activeAppIdx === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
              >
                0{idx + 1}. {app.capabilityName}
              </button>
            ))}
          </div>

          {/* Active Capability Dossier Card */}
          {(() => {
            const app = BUSINESS_APPLICATIONS[activeAppIdx];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                      CAPABILITY 0{activeAppIdx + 1} OF 09
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-heading">
                      {app.capabilityName}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {app.performanceIndicators.map((kpi, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-xs font-bold"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column: Problem, Models & AI */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">Core Business Challenge:</span>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">{app.businessChallenge}</p>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Relevant Mathematical Models:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {app.relevantModels.map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-800 font-bold"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Autonomous AI Capabilities:
                      </span>
                      <div className="space-y-1.5">
                        {app.aiCapabilities.map((ai, aiIdx) => (
                          <div key={aiIdx} className="flex items-center gap-2 text-xs text-slate-700 font-mono">
                            <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{ai}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 4-Stage Operational Workflow */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Operational Execution Workflow:
                      </span>
                      <div className="space-y-2">
                        {app.workflow.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              0{sIdx + 1}
                            </span>
                            <span className="leading-snug">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1 text-xs">
                      <strong className="text-amber-800 font-mono text-[10px] uppercase block">Human Decision Checkpoints:</strong>
                      <div className="text-slate-700">{app.humanDecisionPoints.join(' • ')}</div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* ── SECTION 07: ENTERPRISE IMPLEMENTATION ROADMAP ── */}
      <section id="implementation-roadmap" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Activity className="w-3.5 h-3.5" />
              DEPLOYMENT METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              From Mathematical Models to AI-Native Revenue Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A structured 7-stage deployment framework for enterprise organizations transitioning from legacy spreadsheets to automated mathematical revenue execution.
            </p>
          </div>

          {/* 7 Stages Waterfall Cards */}
          <div className="space-y-4">
            {IMPLEMENTATION_ROADMAP_STAGES.map((stg) => (
              <div
                key={stg.stageNumber}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {stg.stageNumber}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-heading">{stg.title}</h3>
                      <p className="text-xs text-slate-500 font-mono">{stg.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 self-start sm:self-auto">
                    {stg.duration}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="font-mono font-bold uppercase text-slate-500 text-[10px] block">Key Activities:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {stg.activities.map((a, aIdx) => (
                        <li key={aIdx}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono font-bold uppercase text-slate-500 text-[10px] block">Key Deliverables:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {stg.deliverables.map((d, dIdx) => (
                        <li key={dIdx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono font-bold uppercase text-slate-500 text-[10px] block">Success Criteria:</span>
                    <p className="text-emerald-800 font-medium bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200">
                      {stg.successCriteria}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION: INDUSTRY BENCHMARKS & PERFORMANCE (Submenu anchor #6) ── */}
      <section
        id="industry-benchmarks"
        data-section-id="industry-benchmarks"
        className="py-14 sm:py-16 bg-slate-50/70 border-b border-slate-200 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                <span>SUITE 06 / 06 — EMPIRICAL BENCHMARKS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Industry Benchmarks & Performance
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Compare your revenue engine against verified cross-vertical quartiles. Benchmark ACV, cycle velocity, win rates, net retention, and capital payback periods against top-decile performers across SaaS, Healthcare, FinTech, and Manufacturing.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 font-bold shadow-xs self-start lg:self-auto">
              Cross-Vertical Quartile Intelligence
            </span>
          </div>

          {/* Cross-Vertical Benchmark Table */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
            <div className="text-sm font-bold text-slate-900 font-heading mb-5">
              Cross-Vertical Quartile Performance Baselines (350+ Enterprise B2B Organizations)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[11px] font-mono text-slate-500 uppercase">
                    <th className="py-2.5 px-4 font-bold">KPI / Vertical</th>
                    <th className="py-2.5 px-4 font-bold">SaaS / Cloud</th>
                    <th className="py-2.5 px-4 font-bold">Healthcare</th>
                    <th className="py-2.5 px-4 font-bold">FinTech</th>
                    <th className="py-2.5 px-4 font-bold">Manufacturing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-mono text-slate-700">
                  {[
                    { kpi: 'Median ACV', saas: '$85,000', health: '$185,000', fintech: '$140,000', mfg: '$240,000' },
                    { kpi: 'Sales Cycle (Median)', saas: '68 Days', health: '145 Days', fintech: '92 Days', mfg: '165 Days' },
                    { kpi: 'Win Rate (Top Decile)', saas: '34.8%', health: '31.2%', fintech: '38.5%', mfg: '29.5%' },
                    { kpi: 'Net Revenue Retention', saas: '114–132%', health: '108–122%', fintech: '122–142%', mfg: '105–118%' },
                    { kpi: 'CAC Payback (Top 10%)', saas: '8 Months', health: '11 Months', fintech: '6 Months', mfg: '12 Months' },
                    { kpi: 'Pipeline Coverage Required', saas: '3.4x Median', health: '4.1x Median', fintech: '3.2x Median', mfg: '4.4x Median' },
                    { kpi: 'Magic Number (Median)', saas: '0.92x', health: '0.78x', fintech: '1.15x', mfg: '0.70x' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">{row.kpi}</td>
                      <td className="py-3 px-4 text-blue-700">{row.saas}</td>
                      <td className="py-3 px-4 text-indigo-700">{row.health}</td>
                      <td className="py-3 px-4 text-emerald-700">{row.fintech}</td>
                      <td className="py-3 px-4 text-purple-700">{row.mfg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3 Core Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-blue-300 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Cross-Vertical Quartile Baselines</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aggregated quartile telemetry across 350+ enterprise B2B revenue organizations establishing empirical norms for pipeline coverage, stage conversion, and commercial cycle durations.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-indigo-300 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Revenue Performance Comparisons</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Diagnose why companies with identical lead volumes achieve vastly different ARR results — analyzing velocity multiples, discounting discipline, Rule of 40 positioning, and expansion NRR vectors.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-purple-300 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Sales & Marketing Performance Analysis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Empirical audit blueprints uncovering where marketing debt, SDR ramp lag, or executive discount rogue behavior dilute contribution margins and compress enterprise exit valuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: FINAL CONVERSION (OFFERINGS-MATCHED FOOTER) ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Empirical Revenue Science
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading text-white">
            Transform Revenue Data Into <br />
            Intelligent Business Decisions.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Explore how ProfitMachines combines revenue intelligence, advanced analytical models, and AI-native sales acceleration to help enterprises understand and optimize their commercial systems.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/offerings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Book Consultation</span>
            </Link>
            <Link
              to="/resources-hub"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4 text-slate-300" />
              <span>Back to Resources Hub</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

