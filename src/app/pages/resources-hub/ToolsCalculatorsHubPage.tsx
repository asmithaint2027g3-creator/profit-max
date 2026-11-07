import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  Calculator,
  Gauge,
  DollarSign,
  TrendingUp,
  BrainCircuit,
  Zap,
  Sliders,
  Award,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Search,
  Filter,
  BarChart3,
  Clock,
  Layers,
  ChevronRight,
  ChevronDown,
  Building2,
  Users,
  Compass,
  FileText,
  Workflow,
  HelpCircle,
  Play,
  Check,
  Lock,
  Cpu
} from 'lucide-react';
import {
  ALL_TOOLS,
  HUB_FAQS,
  ROLE_RECOMMENDATIONS,
  ToolMetadata
} from '../../../data/toolsCalculatorsHubData';
import { trackEvent } from '../../../lib/analytics';

export default function ToolsCalculatorsHubPage() {
  const location = useLocation();
  const { toolSlug } = useParams<{ toolSlug?: string }>();
  const [activeAnchor, setActiveAnchor] = useState('revenue-performance');

  // Interactive Tools State
  // ── TOOL 01: REVENUE CALCULATOR STATE ──
  const [revLeads, setRevLeads] = useState<number>(1200);
  const [revLeadToOpp, setRevLeadToOpp] = useState<number>(18);
  const [revOppToCust, setRevOppToCust] = useState<number>(24);
  const [revDealValue, setRevDealValue] = useState<number>(45000);
  const [revExistingCust, setRevExistingCust] = useState<number>(85);
  const [revExpansionPerCust, setRevExpansionPerCust] = useState<number>(12000);

  // ── TOOL 02: SALES VELOCITY CALCULATOR STATE ──
  const [velOpps, setVelOpps] = useState<number>(60);
  const [velDealValue, setVelDealValue] = useState<number>(55000);
  const [velWinRate, setVelWinRate] = useState<number>(28);
  const [velCycleDays, setVelCycleDays] = useState<number>(85);
  const [velTimeUnit, setVelTimeUnit] = useState<'daily' | 'monthly' | 'annual'>('monthly');

  // ── TOOL 03: CAC / LTV CALCULATOR STATE ──
  const [cacExpenditure, setCacExpenditure] = useState<number>(240000);
  const [cacNewCustomers, setCacNewCustomers] = useState<number>(20);
  const [cacMonthlyRevenue, setCacMonthlyRevenue] = useState<number>(4200);
  const [cacGrossMargin, setCacGrossMargin] = useState<number>(80);
  const [cacLifetimeMonths, setCacLifetimeMonths] = useState<number>(36);

  // ── TOOL 04: ROI CALCULATOR STATE ──
  const [roiInitialCapex, setRoiInitialCapex] = useState<number>(50000);
  const [roiMonthlyOpex, setRoiMonthlyOpex] = useState<number>(4500);
  const [roiMonthlyBenefit, setRoiMonthlyBenefit] = useState<number>(18000);
  const [roiEvaluationPeriod, setRoiEvaluationPeriod] = useState<number>(12);

  // ── TOOL 05: AI READINESS ASSESSMENT STATE (6 Dimensions) ──
  const [aiAnswers, setAiAnswers] = useState<Record<string, number>>({
    data1: 3, data2: 3, tech1: 4, tech2: 3, proc1: 3, proc2: 4,
    skills1: 2, skills2: 3, lead1: 4, lead2: 4, gov1: 3, gov2: 3
  });

  // ── TOOL 06: AUTOMATION READINESS ASSESSMENT STATE (7 Dimensions) ──
  const [autoAnswers, setAutoAnswers] = useState<Record<string, number>>({
    rep1: 4, doc1: 3, data1: 4, int1: 3, exc1: 3, imp1: 4, gov1: 4
  });

  // ── TOOL 07: LEAN WASTE ASSESSMENT STATE ──
  const [wasteManualHours, setWasteManualHours] = useState<number>(14);
  const [wasteRepsCount, setWasteRepsCount] = useState<number>(18);
  const [wasteHourlyRate, setWasteHourlyRate] = useState<number>(65);
  const [wasteAvoidablePct, setWasteAvoidablePct] = useState<number>(60);

  // ── TOOL 08: SALES PROCESS AUTOMATION STATE (8 Dimensions) ──
  const [salesAutoAnswers, setSalesAutoAnswers] = useState<Record<string, number>>({
    capture: 4, qual: 3, research: 2, outreach: 3,
    crm: 3, monitor: 2, forecast: 3, approval: 4
  });

  // ── TOOL 09: GTM MATURITY ASSESSMENT STATE (10 Dimensions) ──
  const [gtmAnswers, setGtmAnswers] = useState<Record<string, number>>({
    icp: 4, demand: 3, gen: 3, qual: 4, exec: 3,
    pipe: 3, revops: 3, cs: 3, data: 3, ai: 2
  });

  // Active Tool Detail Modal / Dedicated View State
  const [selectedToolModal, setSelectedToolModal] = useState<ToolMetadata | null>(null);

  useEffect(() => {
    document.title = 'Tools & Calculators Hub | ProfitMachines Business Intelligence';
    trackEvent({ eventName: 'PAGE_VIEW_TOOLS_CALCULATORS_HUB', category: 'RESOURCES' });

    if (toolSlug) {
      const match = ALL_TOOLS.find((t) => t.slug === toolSlug);
      if (match) {
        setSelectedToolModal(match);
      }
    } else if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveAnchor(id);
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname, toolSlug]);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveAnchor(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // ── CALCULATIONS ──
  // Tool 01 Calculations
  const calcNewCustomerRevenue = Math.round(
    revLeads * (revLeadToOpp / 100) * (revOppToCust / 100) * revDealValue
  );
  const calcExpansionRevenue = Math.round(revExistingCust * revExpansionPerCust);
  const calcTotalRevenue = calcNewCustomerRevenue + calcExpansionRevenue;
  const newCustShare = calcTotalRevenue > 0 ? Math.round((calcNewCustomerRevenue / calcTotalRevenue) * 100) : 0;
  const expansionShare = calcTotalRevenue > 0 ? Math.round((calcExpansionRevenue / calcTotalRevenue) * 100) : 0;

  // Tool 02 Calculations (Sales Velocity)
  const safeCycleDays = Math.max(1, velCycleDays);
  const dailyVelocity = Math.round((velOpps * velDealValue * (velWinRate / 100)) / safeCycleDays);
  const monthlyVelocity = Math.round(dailyVelocity * 30.4);
  const annualVelocity = Math.round(dailyVelocity * 365);
  const displayVelocity = velTimeUnit === 'daily' ? dailyVelocity : velTimeUnit === 'monthly' ? monthlyVelocity : annualVelocity;

  // Tool 03 Calculations (CAC / LTV)
  const safeNewCust = Math.max(1, cacNewCustomers);
  const calcCAC = Math.round(cacExpenditure / safeNewCust);
  const calcLTV = Math.round(cacMonthlyRevenue * (cacGrossMargin / 100) * cacLifetimeMonths);
  const calcLtvCacRatio = calcCAC > 0 ? (calcLTV / calcCAC).toFixed(2) : '0';
  const monthlyGrossMarginDollar = cacMonthlyRevenue * (cacGrossMargin / 100);
  const cacPaybackMonths = monthlyGrossMarginDollar > 0 ? (calcCAC / monthlyGrossMarginDollar).toFixed(1) : '0';

  // Tool 04 Calculations (ROI)
  const totalInvestment = roiInitialCapex + (roiMonthlyOpex * roiEvaluationPeriod);
  const totalBenefit = roiMonthlyBenefit * roiEvaluationPeriod;
  const netBenefit = totalBenefit - totalInvestment;
  const calculatedROI = totalInvestment > 0 ? Math.round((netBenefit / totalInvestment) * 100) : 0;
  const monthlyNetBenefit = roiMonthlyBenefit - roiMonthlyOpex;
  const roiPaybackMonths = monthlyNetBenefit > 0 ? (roiInitialCapex / monthlyNetBenefit).toFixed(1) : 'N/A';

  // Tool 05 Calculations (AI Readiness)
  const aiScoreValues = Object.values(aiAnswers);
  const overallAiScore = (aiScoreValues.reduce((a, b) => a + b, 0) / Math.max(1, aiScoreValues.length)).toFixed(1);

  // Tool 06 Calculations (Automation Readiness)
  const autoScoreValues = Object.values(autoAnswers);
  const overallAutoScore = (autoScoreValues.reduce((a, b) => a + b, 0) / Math.max(1, autoScoreValues.length)).toFixed(1);

  // Tool 07 Calculations (Lean Waste)
  const weeklyWasteHoursPerRep = wasteManualHours * (wasteAvoidablePct / 100);
  const totalTeamWasteHoursWeekly = Math.round(weeklyWasteHoursPerRep * wasteRepsCount);
  const weeklyCostOfWaste = Math.round(totalTeamWasteHoursWeekly * wasteHourlyRate);
  const annualizedCostOfWaste = Math.round(weeklyCostOfWaste * 52);

  // Tool 08 Calculations (Sales Process Automation)
  const salesAutoValues = Object.values(salesAutoAnswers);
  const overallSalesAutoScore = (salesAutoValues.reduce((a, b) => a + b, 0) / Math.max(1, salesAutoValues.length)).toFixed(1);
  const automationCoveragePct = Math.round((Number(overallSalesAutoScore) / 5) * 100);

  // Tool 09 Calculations (GTM Maturity)
  const gtmValues = Object.values(gtmAnswers);
  const overallGtmScore = (gtmValues.reduce((a, b) => a + b, 0) / Math.max(1, gtmValues.length)).toFixed(1);
  const gtmTier = Number(overallGtmScore) < 2
    ? 'Level 1 — Initial'
    : Number(overallGtmScore) < 3
    ? 'Level 2 — Developing'
    : Number(overallGtmScore) < 4
    ? 'Level 3 — Defined'
    : Number(overallGtmScore) < 4.8
    ? 'Level 4 — Integrated'
    : 'Level 5 — Optimized';

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* ── SECTION 01: HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-indigo-50/70 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 font-mono text-xs font-bold tracking-widest uppercase shadow-2xs">
            <Calculator className="w-4 h-4 text-blue-600" />
            PROFITMACHINES BUSINESS INTELLIGENCE TOOLS
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-heading">
              Turn Business Data Into Better Revenue Decisions.
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-blue-600 font-heading">
              Make Better Revenue Decisions With Intelligent Business Tools.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Explore interactive calculators, diagnostic assessments, and decision-support models designed to help businesses understand revenue performance, improve sales efficiency, optimize customer economics, and identify opportunities for AI-powered growth.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
              From revenue forecasting and sales velocity to customer acquisition economics and automation readiness, ProfitMachines brings practical business mathematics and intelligent diagnostics into one connected workspace.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => scrollToAnchor('revenue-performance')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Calculators</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToAnchor('ai-readiness')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start a Business Assessment</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          {/* Three Supporting Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase">
                <BarChart3 className="w-4 h-4" />
                <span>01. Measure</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Revenue &amp; Economic Physics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Understand top-line conversion velocity, unit acquisition costs (CAC), lifetime value (LTV), and cash payback timelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs font-bold uppercase">
                <Search className="w-4 h-4" />
                <span>02. Diagnose</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Process Friction &amp; Lean Waste</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identify operational bottlenecks, redundant manual data entry, and data infrastructure readiness before investing capital.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs font-bold uppercase">
                <BrainCircuit className="w-4 h-4" />
                <span>03. Optimize</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Autonomous Revenue Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Map candidate workflows for cognitive AI agents, evaluate GTM maturity, and simulate payback on automation investments.
              </p>
            </div>
          </div>

          {/* Executive Dashboard Visual Preview */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  Connected Revenue Intelligence Architecture
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Integrated Business Mathematics &amp; Real-Time Telemetry
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold">
                Deterministic Formulation Engine
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 uppercase block text-[10px]">Pipeline Velocity</span>
                <span className="text-lg font-bold text-slate-900 block mt-1">${(monthlyVelocity / 1000).toFixed(0)}k / Mo</span>
                <span className="text-[10px] text-emerald-600 font-bold">Active Simulation</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 uppercase block text-[10px]">Unit Economics</span>
                <span className="text-lg font-bold text-slate-900 block mt-1">{calcLtvCacRatio}x LTV:CAC</span>
                <span className="text-[10px] text-blue-600 font-bold">{cacPaybackMonths}mo Payback</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 uppercase block text-[10px]">AI Readiness</span>
                <span className="text-lg font-bold text-slate-900 block mt-1">{overallAiScore} / 5.0</span>
                <span className="text-[10px] text-indigo-600 font-bold">Developing Tier</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 uppercase block text-[10px]">Annual Waste Cost</span>
                <span className="text-lg font-bold text-rose-700 block mt-1">${(annualizedCostOfWaste / 1000).toFixed(0)}k / Yr</span>
                <span className="text-[10px] text-slate-500 font-bold">Avoidable Drag</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: STICKY SUB-NAVIGATION BAR ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              {[
                { id: 'revenue-performance', label: 'Revenue Performance' },
                { id: 'customer-economics', label: 'Customer Economics' },
                { id: 'business-roi', label: 'Business ROI & Value' },
                { id: 'ai-readiness', label: 'AI Readiness' },
                { id: 'sales-optimization', label: 'Sales Waste' },
                { id: 'gtm-maturity', label: 'GTM Maturity' },
                { id: 'methodology', label: 'Methodology' }
              ].map((item) => {
                const isActive = activeAnchor === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToAnchor(item.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0 border-l border-slate-200 pl-3">
              <Link
                to="/book-consultation"
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1"
              >
                <span>Assess Revenue Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SECTION 03: TOOLS OVERVIEW (9 CARDS IN 2-COLUMN RESPONSIVE GRID) ── */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Complete Analytical Library
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Nine Enterprise Revenue Tools &amp; Assessments
            </h2>
            <p className="text-base text-slate-600">
              Select any tool below to inspect its methodology, review business problem context, and run live calculations directly in your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_TOOLS.map((tool, idx) => {
              const icons = [Calculator, Gauge, DollarSign, TrendingUp, BrainCircuit, Zap, Sliders, Workflow, Award];
              const IconComp = icons[idx] || Calculator;

              return (
                <div
                  key={tool.id}
                  onClick={() => scrollToAnchor(tool.categoryAnchor)}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-500">TOOL 0{idx + 1}</span>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        tool.type === 'Live Calculator'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-blue-50 text-blue-800 border border-blue-200'
                      }`}>
                        {tool.type}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
                        {tool.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {tool.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>Open Interactive Tool</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 04: CATEGORY 01 — REVENUE PERFORMANCE CALCULATORS ── */}
      <section id="revenue-performance" className="scroll-mt-24 py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3 pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Category 01 // Revenue Performance Calculators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Top-Line Revenue &amp; Pipeline Velocity
            </h2>
            <p className="text-base text-slate-600">
              Measure how inbound demand, mid-funnel conversion rates, and sales cycle duration combine mathematically into closed revenue.
            </p>
          </div>

          {/* TOOL 01: REVENUE CALCULATOR */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Tool 01 // Live Calculator</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">Revenue Calculator</h3>
                <p className="text-xs text-slate-500 mt-1">Calculate estimated revenue from new customer acquisition and existing account expansion.</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold shrink-0">
                Formula: New ARR + Expansion ARR
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs Column */}
              <div className="lg:col-span-7 space-y-4 text-xs font-mono">
                <span className="text-xs font-mono font-bold uppercase text-slate-700 block">Required Business Inputs:</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 block mb-1">Monthly Inbound Leads: <strong className="text-slate-900">{revLeads}</strong></label>
                    <input
                      type="range"
                      min="50"
                      max="10000"
                      step="50"
                      value={revLeads}
                      onChange={(e) => setRevLeads(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Lead-to-Opportunity %: <strong className="text-slate-900">{revLeadToOpp}%</strong></label>
                    <input
                      type="range"
                      min="2"
                      max="50"
                      step="1"
                      value={revLeadToOpp}
                      onChange={(e) => setRevLeadToOpp(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Opp-to-Customer %: <strong className="text-slate-900">{revOppToCust}%</strong></label>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="1"
                      value={revOppToCust}
                      onChange={(e) => setRevOppToCust(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Average Deal Value: <strong className="text-slate-900">${revDealValue.toLocaleString()}</strong></label>
                    <input
                      type="range"
                      min="5000"
                      max="250000"
                      step="5000"
                      value={revDealValue}
                      onChange={(e) => setRevDealValue(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Existing Customer Base: <strong className="text-slate-900">{revExistingCust}</strong></label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="5"
                      value={revExistingCust}
                      onChange={(e) => setRevExistingCust(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Annual Expansion / Customer: <strong className="text-slate-900">${revExpansionPerCust.toLocaleString()}</strong></label>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={revExpansionPerCust}
                      onChange={(e) => setRevExpansionPerCust(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Outputs Dashboard */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 font-mono">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Results Dashboard
                </span>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">New Customer Revenue:</span>
                    <span className="font-bold text-slate-900">${calcNewCustomerRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Expansion Revenue:</span>
                    <span className="font-bold text-slate-900">${calcExpansionRevenue.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase text-blue-600 font-bold block">Total Estimated Revenue</span>
                      <span className="text-2xl font-black text-slate-900">${calcTotalRevenue.toLocaleString()}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {newCustShare}% New / {expansionShare}% Exp
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-sans text-slate-600 leading-relaxed">
                  <strong>Business Interpretation: </strong>
                  {revOppToCust < 20
                    ? 'Opportunity win rate represents your highest mathematical leverage point. Improving win rate by 4% yields more revenue than a 25% increase in top-of-funnel ad spend.'
                    : 'Your conversion funnel is healthy. Focus on expanding average deal value and scaling inbound intent volume.'}
                </div>
              </div>
            </div>
          </div>

          {/* TOOL 02: SALES VELOCITY CALCULATOR */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase">Tool 02 // Live Calculator</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">Sales Velocity Calculator</h3>
                <p className="text-xs text-slate-500 mt-1">Measure the speed at which your sales pipeline converts qualified enterprise opportunities into revenue.</p>
              </div>

              {/* Time Unit Selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 font-mono text-xs">
                {(['daily', 'monthly', 'annual'] as const).map((unit) => (
                  <button
                    key={unit}
                    onClick={() => setVelTimeUnit(unit)}
                    className={`px-3 py-1 rounded-lg font-bold capitalize transition-all cursor-pointer ${
                      velTimeUnit === unit ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-4 text-xs font-mono">
                <span className="text-xs font-mono font-bold uppercase text-slate-700 block">Required Pipeline Variables:</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 block mb-1">Qualified Opportunities: <strong className="text-slate-900">{velOpps}</strong></label>
                    <input
                      type="range"
                      min="5"
                      max="300"
                      step="5"
                      value={velOpps}
                      onChange={(e) => setVelOpps(Number(e.target.value))}
                      className="w-full accent-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Average Deal Value: <strong className="text-slate-900">${velDealValue.toLocaleString()}</strong></label>
                    <input
                      type="range"
                      min="5000"
                      max="200000"
                      step="5000"
                      value={velDealValue}
                      onChange={(e) => setVelDealValue(Number(e.target.value))}
                      className="w-full accent-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Win Rate %: <strong className="text-slate-900">{velWinRate}%</strong></label>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="1"
                      value={velWinRate}
                      onChange={(e) => setVelWinRate(Number(e.target.value))}
                      className="w-full accent-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Sales Cycle Length: <strong className="text-slate-900">{velCycleDays} Days</strong></label>
                    <input
                      type="range"
                      min="15"
                      max="270"
                      step="5"
                      value={velCycleDays}
                      onChange={(e) => setVelCycleDays(Number(e.target.value))}
                      className="w-full accent-indigo-600"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 text-indigo-300 font-mono text-center text-xs">
                  Sales Velocity = (Opps × Deal Value × Win Rate) / Cycle Days
                </div>
              </div>

              {/* Velocity Outputs */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 font-mono">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Velocity Output Telemetry
                </span>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Daily Revenue Generation Rate:</span>
                    <span className="font-bold text-slate-900">${dailyVelocity.toLocaleString()}/day</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Monthly Normalized Velocity:</span>
                    <span className="font-bold text-slate-900">${monthlyVelocity.toLocaleString()}/mo</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase text-indigo-600 font-bold block">
                        {velTimeUnit.toUpperCase()} SALES VELOCITY
                      </span>
                      <span className="text-2xl font-black text-slate-900">${displayVelocity.toLocaleString()}</span>
                    </div>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {velCycleDays} Days Cycle
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-sans text-slate-600 leading-relaxed">
                  <strong>Input Contribution Analysis: </strong>
                  Compressing your average sales cycle from {velCycleDays} days to {Math.round(velCycleDays * 0.75)} days (+25% speed) increases monthly revenue production by ${Math.round(monthlyVelocity * 0.33).toLocaleString()}/mo without adding sales reps.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 05: CATEGORY 02 — CUSTOMER ECONOMICS CALCULATORS ── */}
      <section id="customer-economics" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3 pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Category 02 // Customer Economics Calculators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              CAC, LTV &amp; Unit Economics
            </h2>
            <p className="text-base text-slate-600">
              Evaluate whether your customer acquisition expenditure produces sustainable, compounding gross profit margins.
            </p>
          </div>

          {/* TOOL 03: CAC / LTV CALCULATOR */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase">Tool 03 // Live Calculator</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">CAC / LTV Calculator</h3>
                <p className="text-xs text-slate-500 mt-1">Quantify fully loaded customer acquisition costs against lifetime margin and payback period.</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                Target: LTV:CAC ≥ 3:1
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-4 text-xs font-mono">
                <span className="text-xs font-mono font-bold uppercase text-slate-700 block">Required Unit Economics Inputs:</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 block mb-1">Total S&amp;M Acquisition Spend: <strong className="text-slate-900">${cacExpenditure.toLocaleString()}</strong></label>
                    <input
                      type="range"
                      min="20000"
                      max="1000000"
                      step="10000"
                      value={cacExpenditure}
                      onChange={(e) => setCacExpenditure(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">New Customers Acquired: <strong className="text-slate-900">{cacNewCustomers}</strong></label>
                    <input
                      type="range"
                      min="2"
                      max="100"
                      step="1"
                      value={cacNewCustomers}
                      onChange={(e) => setCacNewCustomers(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Monthly Contract Revenue (MRR): <strong className="text-slate-900">${cacMonthlyRevenue.toLocaleString()}/mo</strong></label>
                    <input
                      type="range"
                      min="500"
                      max="25000"
                      step="250"
                      value={cacMonthlyRevenue}
                      onChange={(e) => setCacMonthlyRevenue(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Gross Margin %: <strong className="text-slate-900">{cacGrossMargin}%</strong></label>
                    <input
                      type="range"
                      min="40"
                      max="95"
                      step="1"
                      value={cacGrossMargin}
                      onChange={(e) => setCacGrossMargin(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-slate-600 block mb-1">Expected Customer Lifetime: <strong className="text-slate-900">{cacLifetimeMonths} Months ({(cacLifetimeMonths / 12).toFixed(1)} Years)</strong></label>
                    <input
                      type="range"
                      min="6"
                      max="72"
                      step="6"
                      value={cacLifetimeMonths}
                      onChange={(e) => setCacLifetimeMonths(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* CAC/LTV Outputs */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 font-mono">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Unit Economics Results
                </span>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Customer Acquisition Cost (CAC):</span>
                    <span className="font-bold text-slate-900">${calcCAC.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Estimated Lifetime Value (LTV):</span>
                    <span className="font-bold text-slate-900">${calcLTV.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Capital Payback Period:</span>
                    <span className="font-bold text-slate-900">{cacPaybackMonths} Months</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase text-emerald-800 font-bold block">LTV:CAC Ratio</span>
                      <span className="text-3xl font-black text-emerald-950">{calcLtvCacRatio}x</span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      Number(calcLtvCacRatio) >= 3.0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {Number(calcLtvCacRatio) >= 3.0 ? 'Strong Economics' : 'Margin Vulnerability'}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs font-sans text-slate-600 leading-relaxed">
                  <strong>Unit Economics Guidance: </strong>
                  {Number(cacPaybackMonths) <= 12
                    ? 'Your payback period is under 12 months, which represents world-class capital velocity. You can safely invest more capital to accelerate demand generation.'
                    : 'Payback exceeds 12 months. Focus on expanding gross margins or renegotiating acquisition spend to prevent cash flow drag.'}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 06: CATEGORY 03 — BUSINESS ROI & VALUE CALCULATORS ── */}
      <section id="business-roi" className="scroll-mt-24 py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3 pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Category 03 // Business ROI &amp; Value Calculators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Capital Investment &amp; Net Return
            </h2>
            <p className="text-base text-slate-600">
              Calculate the projected financial return of AI technology, RevOps infrastructure, and sales automation initiatives.
            </p>
          </div>

          {/* TOOL 04: ROI CALCULATOR */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Tool 04 // Live Calculator</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">ROI Calculator</h3>
                <p className="text-xs text-slate-500 mt-1">Estimate total investment, net financial benefit, percentage ROI, and payback period.</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold">
                Formula: (Net Benefit / Investment) × 100
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-4 text-xs font-mono">
                <span className="text-xs font-mono font-bold uppercase text-slate-700 block">Investment Parameters:</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 block mb-1">Initial Setup Capex: <strong className="text-slate-900">${roiInitialCapex.toLocaleString()}</strong></label>
                    <input
                      type="range"
                      min="10000"
                      max="200000"
                      step="5000"
                      value={roiInitialCapex}
                      onChange={(e) => setRoiInitialCapex(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Monthly Operating Cost: <strong className="text-slate-900">${roiMonthlyOpex.toLocaleString()}/mo</strong></label>
                    <input
                      type="range"
                      min="1000"
                      max="25000"
                      step="500"
                      value={roiMonthlyOpex}
                      onChange={(e) => setRoiMonthlyOpex(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Expected Monthly Benefit: <strong className="text-slate-900">${roiMonthlyBenefit.toLocaleString()}/mo</strong></label>
                    <input
                      type="range"
                      min="2000"
                      max="60000"
                      step="1000"
                      value={roiMonthlyBenefit}
                      onChange={(e) => setRoiMonthlyBenefit(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Evaluation Horizon: <strong className="text-slate-900">{roiEvaluationPeriod} Months</strong></label>
                    <input
                      type="range"
                      min="6"
                      max="36"
                      step="6"
                      value={roiEvaluationPeriod}
                      onChange={(e) => setRoiEvaluationPeriod(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* ROI Outputs */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 font-mono">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  ROI Results Dashboard
                </span>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Total Loaded Investment:</span>
                    <span className="font-bold text-slate-900">${totalInvestment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Total Projected Benefit:</span>
                    <span className="font-bold text-slate-900">${totalBenefit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Net Dollar Benefit:</span>
                    <span className="font-bold text-emerald-700">${netBenefit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Payback Period:</span>
                    <span className="font-bold text-slate-900">{roiPaybackMonths} Months</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase text-blue-600 font-bold block">Estimated ROI</span>
                      <span className="text-3xl font-black text-slate-900">{calculatedROI}%</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                      Positive Return
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-sans text-slate-600 leading-relaxed">
                  <strong>Executive Summary: </strong>
                  Against a total {roiEvaluationPeriod}-month investment of ${totalInvestment.toLocaleString()}, the initiative produces ${netBenefit.toLocaleString()} in net financial value with an estimated payback within {roiPaybackMonths} months.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 07: CATEGORY 04 — AI & AUTOMATION READINESS ASSESSMENTS ── */}
      <section id="ai-readiness" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3 pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Category 04 // AI &amp; Automation Readiness Assessments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Diagnostic Readiness Assessments
            </h2>
            <p className="text-base text-slate-600">
              Transparent diagnostic instruments evaluating data readiness, process standardization, and governance before deploying autonomous agents.
            </p>
          </div>

          {/* TOOL 05: AI READINESS ASSESSMENT */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-purple-600 uppercase">Tool 05 // Diagnostic Assessment</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">AI Readiness Assessment</h3>
                <p className="text-xs text-slate-500 mt-1">Evaluate data centralization, CRM hygiene, API availability, and human governance guardrails.</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-right shrink-0">
                <span className="text-[10px] font-mono text-purple-800 uppercase font-bold block">Overall AI Readiness</span>
                <span className="text-2xl font-black text-purple-950 font-mono">{overallAiScore} / 5.0</span>
              </div>
            </div>

            {/* Questions Grid across 6 Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { key: 'data1', label: 'Data Centralization', desc: 'Is business data centralized and accessible across teams?' },
                { key: 'data2', label: 'CRM Record Hygiene', desc: 'Are CRM records updated consistently without duplicate decay?' },
                { key: 'tech1', label: 'Application Integration', desc: 'Are core sales and marketing applications connected via APIs?' },
                { key: 'tech2', label: 'Historical Telemetry', desc: 'Can teams query reliable historical pipeline logs and outcomes?' },
                { key: 'proc1', label: 'Process Documentation', desc: 'Are sales qualification and deal stages documented?' },
                { key: 'proc2', label: 'Repetitive Tasks Identified', desc: 'Are manual, repeatable administrative activities cataloged?' },
                { key: 'skills1', label: 'Employee AI Literacy', desc: 'Do commercial reps understand how to prompt and evaluate AI?' },
                { key: 'skills2', label: 'Designated AI Owner', desc: 'Is there an executive or RevOps lead accountable for AI rollout?' },
                { key: 'lead1', label: 'Executive Sponsorship', desc: 'Is there explicit C-suite backing and allocated budget?' },
                { key: 'lead2', label: 'Measurable OKRs', desc: 'Are target outcomes (cycle compression, pipeline lift) defined?' },
                { key: 'gov1', label: 'Security & PII Rules', desc: 'Are data access controls and zero-retention rules verified?' },
                { key: 'gov2', label: 'Human-in-the-Loop Gates', desc: 'Are human approval gateways required for external communications?' }
              ].map((q) => (
                <div key={q.key} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-900 font-heading block">{q.label}</span>
                  <p className="text-xs text-slate-600 leading-snug">{q.desc}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] font-mono text-slate-400">Score: {aiAnswers[q.key]} / 5</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={aiAnswers[q.key]}
                      onChange={(e) => setAiAnswers({ ...aiAnswers, [q.key]: Number(e.target.value) })}
                      className="w-24 accent-purple-600"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Assessment Feedback */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 text-xs font-mono">
              <span className="text-purple-400 uppercase font-bold block">Diagnostic Interpretation:</span>
              <p className="text-slate-200 leading-relaxed font-sans">
                {Number(overallAiScore) < 2.5
                  ? 'Foundational gaps identified in data hygiene and process repeatability. Focus on CRM field standardization and API integration before releasing autonomous AI sales agents.'
                  : Number(overallAiScore) < 4.0
                  ? 'Developing AI Readiness. Your organization is ready for assistive AI copilots (e.g. pre-call research dossiers, lead scoring). Maintain human-in-the-loop review for all external messaging.'
                  : 'Established AI Readiness. Strong data infrastructure and governance guardrails. Ready for multi-agent autonomous inbound routing and outbound cadencing.'}
              </p>
            </div>
          </div>

          {/* TOOL 06: AUTOMATION READINESS ASSESSMENT */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-emerald-600" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-teal-700 uppercase">Tool 06 // Diagnostic Assessment</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">Automation Readiness Assessment</h3>
                <p className="text-xs text-slate-500 mt-1">Score candidate operational workflows across repetition, data structure, exceptions, and business impact.</p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-right shrink-0">
                <span className="text-[10px] font-mono text-teal-800 uppercase font-bold block">Automation Index</span>
                <span className="text-2xl font-black text-teal-950 font-mono">{overallAutoScore} / 5.0</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { key: 'rep1', label: 'Process Repetition', desc: 'Is this activity executed repeatedly using identical logic?' },
                { key: 'doc1', label: 'Step Documentation', desc: 'Are all inputs, decision gates, and outputs documented?' },
                { key: 'data1', label: 'Data Cleanliness', desc: 'Is input data structured and machine-readable?' },
                { key: 'int1', label: 'API Connectivity', desc: 'Can target systems exchange data via REST APIs?' },
                { key: 'exc1', label: 'Exception Frequency', desc: 'Is the exception rate under 10% of total runs?' },
                { key: 'imp1', label: 'Labor Hours Saved', desc: 'Does this task consume significant rep working hours?' },
                { key: 'gov1', label: 'Auditable Telemetry', desc: 'Can automated runs be audited with immutable logs?' }
              ].map((q) => (
                <div key={q.key} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-900 font-heading block">{q.label}</span>
                  <p className="text-xs text-slate-600 leading-snug">{q.desc}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] font-mono text-slate-400">Score: {autoAnswers[q.key]} / 5</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={autoAnswers[q.key]}
                      onChange={(e) => setAutoAnswers({ ...autoAnswers, [q.key]: Number(e.target.value) })}
                      className="w-20 accent-teal-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 08: CATEGORY 05 — SALES PROCESS OPTIMIZATION ── */}
      <section id="sales-optimization" className="scroll-mt-24 py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3 pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Category 05 // Sales Process Optimization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Lean Waste &amp; Operational Friction
            </h2>
            <p className="text-base text-slate-600">
              Apply Lean manufacturing rigor to quantify avoidable administrative drag, manual CRM data entry, and deal handoff latency.
            </p>
          </div>

          {/* TOOL 07: LEAN WASTE ASSESSMENT */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 to-amber-600" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-rose-600 uppercase">Tool 07 // Diagnostic Calculator</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">Lean Waste Assessment</h3>
                <p className="text-xs text-slate-500 mt-1">Quantify the weekly and annualized financial cost of non-value-added sales activities.</p>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-right shrink-0">
                <span className="text-[10px] font-mono text-rose-800 uppercase font-bold block">Annual Cost of Waste</span>
                <span className="text-2xl font-black text-rose-950 font-mono">${annualizedCostOfWaste.toLocaleString()}/yr</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-4 text-xs font-mono">
                <span className="text-xs font-mono font-bold uppercase text-slate-700 block">Waste Parameters:</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 block mb-1">Manual Task Hours / Rep / Week: <strong className="text-slate-900">{wasteManualHours} hrs</strong></label>
                    <input
                      type="range"
                      min="4"
                      max="30"
                      step="1"
                      value={wasteManualHours}
                      onChange={(e) => setWasteManualHours(Number(e.target.value))}
                      className="w-full accent-rose-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Commercial Sales Reps Count: <strong className="text-slate-900">{wasteRepsCount} Reps</strong></label>
                    <input
                      type="range"
                      min="2"
                      max="100"
                      step="1"
                      value={wasteRepsCount}
                      onChange={(e) => setWasteRepsCount(Number(e.target.value))}
                      className="w-full accent-rose-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Loaded Rep Hourly Cost: <strong className="text-slate-900">${wasteHourlyRate}/hr</strong></label>
                    <input
                      type="range"
                      min="35"
                      max="150"
                      step="5"
                      value={wasteHourlyRate}
                      onChange={(e) => setWasteHourlyRate(Number(e.target.value))}
                      className="w-full accent-rose-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Avoidable Activity %: <strong className="text-slate-900">{wasteAvoidablePct}%</strong></label>
                    <input
                      type="range"
                      min="20"
                      max="90"
                      step="5"
                      value={wasteAvoidablePct}
                      onChange={(e) => setWasteAvoidablePct(Number(e.target.value))}
                      className="w-full accent-rose-600"
                    />
                  </div>
                </div>
              </div>

              {/* Waste Outputs */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 font-mono">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Identified Operational Friction
                </span>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Avoidable Hours per Rep:</span>
                    <span className="font-bold text-slate-900">{weeklyWasteHoursPerRep.toFixed(1)} hrs/week</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Total Team Lost Capacity:</span>
                    <span className="font-bold text-rose-700">{totalTeamWasteHoursWeekly} hrs/week</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Weekly Economic Drag:</span>
                    <span className="font-bold text-slate-900">${weeklyCostOfWaste.toLocaleString()}/week</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase text-rose-700 font-bold block">Annualized Waste Cost</span>
                      <span className="text-2xl font-black text-rose-900">${annualizedCostOfWaste.toLocaleString()}</span>
                    </div>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                      Recoverable Overhead
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 09: CATEGORY 06 & 07 — PROCESS AUTOMATION & GTM MATURITY ── */}
      <section id="gtm-maturity" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3 pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Category 06 &amp; 07 // Strategic Alignment &amp; Maturity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Process Automation &amp; Go-To-Market Maturity
            </h2>
            <p className="text-base text-slate-600">
              Benchmark organizational alignment across sales, marketing, RevOps, and technology against enterprise standards.
            </p>
          </div>

          {/* TOOL 08: SALES PROCESS AUTOMATION ASSESSMENT */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-teal-600" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Tool 08 // Diagnostic Assessment</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">Sales Process Automation Assessment</h3>
                <p className="text-xs text-slate-500 mt-1">Evaluate automation coverage across 8 pipeline milestones from lead ingress to forecasting.</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-right shrink-0">
                <span className="text-[10px] font-mono text-blue-800 uppercase font-bold block">Automation Coverage</span>
                <span className="text-2xl font-black text-blue-950 font-mono">{automationCoveragePct}%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              {[
                { key: 'capture', label: '1. Lead Capture Automation' },
                { key: 'qual', label: '2. Lead Qualification' },
                { key: 'research', label: '3. Prospect Research' },
                { key: 'outreach', label: '4. Outreach & Cadence' },
                { key: 'crm', label: '5. CRM Data Hygiene' },
                { key: 'monitor', label: '6. Opportunity Monitoring' },
                { key: 'forecast', label: '7. Forecasting Cadence' },
                { key: 'approval', label: '8. Governance & Approval' }
              ].map((m) => (
                <div key={m.key} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-800 block">{m.label}</span>
                  <div className="flex justify-between items-center text-[10px] font-mono pt-1">
                    <span className="text-slate-500">Tier: {salesAutoAnswers[m.key]} / 5</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={salesAutoAnswers[m.key]}
                      onChange={(e) => setSalesAutoAnswers({ ...salesAutoAnswers, [m.key]: Number(e.target.value) })}
                      className="w-16 accent-blue-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TOOL 09: GTM MATURITY ASSESSMENT */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-indigo-600" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 uppercase">Tool 09 // Diagnostic Assessment</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">GTM Maturity Assessment</h3>
                <p className="text-xs text-slate-500 mt-1">Benchmark your commercial organization across 10 strategic dimensions into a 5-level maturity tier.</p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-right shrink-0">
                <span className="text-[10px] font-mono text-amber-800 uppercase font-bold block">Assigned Maturity Tier</span>
                <span className="text-xl font-black text-amber-950 font-heading">{gtmTier}</span>
                <span className="text-[10px] font-mono text-slate-500 block">Score: {overallGtmScore} / 5.0</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
              {[
                { key: 'icp', label: 'ICP Clarity' },
                { key: 'demand', label: 'Demand Intel' },
                { key: 'gen', label: 'Lead Gen' },
                { key: 'qual', label: 'Qualification' },
                { key: 'exec', label: 'Sales Execution' },
                { key: 'pipe', label: 'Pipeline Gov' },
                { key: 'revops', label: 'RevOps Stack' },
                { key: 'cs', label: 'Customer Growth' },
                { key: 'data', label: 'Data Telemetry' },
                { key: 'ai', label: 'AI Adoption' }
              ].map((dim) => (
                <div key={dim.key} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-800 block text-[11px]">{dim.label}</span>
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-slate-500">Lvl {gtmAnswers[dim.key]}</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={gtmAnswers[dim.key]}
                      onChange={(e) => setGtmAnswers({ ...gtmAnswers, [dim.key]: Number(e.target.value) })}
                      className="w-14 accent-amber-600"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 text-xs font-mono">
              <span className="text-amber-400 uppercase font-bold block">30/60/90-Day Suggested Action Roadmap:</span>
              <ul className="space-y-1 text-slate-200 font-sans">
                <li>• <strong>Day 1–30:</strong> Document standardized ICP criteria and eliminate negative-fit pipeline opportunities.</li>
                <li>• <strong>Day 31–60:</strong> Consolidate MarTech/SalesTech silos and implement automated stage-gate qualification rules in CRM.</li>
                <li>• <strong>Day 61–90:</strong> Deploy cognitive AI research agents for pre-call briefs and establish real-time customer health telemetry.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 10: HOW TO USE THESE TOOLS (4-STEP PROCESS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Operational Playbook
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              How to Use These Tools
            </h2>
            <p className="text-base text-slate-600">
              Follow this four-step decision-support framework to turn diagnostic findings into measurable commercial improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Select a Challenge',
                desc: 'Choose the calculator or assessment relevant to the specific operational problem you need to evaluate.'
              },
              {
                step: '02',
                title: 'Enter Business Data',
                desc: 'Provide your verified historical metrics or answer the structured diagnostic rubric questions.'
              },
              {
                step: '03',
                title: 'Review the Results',
                desc: 'Analyze calculated unit economics, velocity rates, maturity gaps, and sensitivity outputs.'
              },
              {
                step: '04',
                title: 'Identify Improvements',
                desc: 'Use the recommendations to prioritize practical changes across sales execution, RevOps, and AI workflows.'
              }
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all space-y-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <span className="text-3xl font-black font-mono text-blue-600 block">{st.step}</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 11: METHODOLOGY & CALCULATION TRANSPARENCY ── */}
      <section id="methodology" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Audit Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Methodology &amp; Calculation Transparency
            </h2>
            <p className="text-base text-slate-600">
              Every formula, variable definition, and underlying mathematical assumption is open, transparent, and grounded in corporate finance rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-heading">Deterministic Formulations</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ProfitMachines does not use black-box proprietary algorithms or fabricated benchmarks. Our tools apply standard corporate finance and revenue physics formulas:
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-700">
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <strong>Sales Velocity:</strong> (Opps × Deal Value × Win Rate) / Cycle Days
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <strong>CAC:</strong> Total Acquisition Spend / New Customers Acquired
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <strong>LTV:</strong> Monthly Revenue × Gross Margin % × Lifetime Months
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <strong>Payback:</strong> CAC / (Monthly Revenue × Gross Margin %)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-heading">Assumptions &amp; Limitations</h3>
              <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                <p>
                  • <strong>Estimates vs Actuals:</strong> All outputs generated by calculators represent mathematical projections based exclusively on user inputs. They do not constitute guaranteed commercial returns.
                </p>
                <p>
                  • <strong>Zero Division Safeguards:</strong> Calculators automatically prevent divide-by-zero errors by enforcing minimal non-zero thresholds on cycle lengths and customer counts.
                </p>
                <p>
                  • <strong>Assessment Integrity:</strong> Diagnostic assessments represent an indicative evaluation framework to prioritize operational improvements, not an external SOC 2 or ISO certification.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 12: RECOMMENDED TOOLS BY BUSINESS ROLE ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Role-Specific Workspaces
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Recommended Tools by Business Role
            </h2>
            <p className="text-base text-slate-600">
              Discover which calculators and capability assessments provide the highest leverage for your specific leadership function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROLE_RECOMMENDATIONS.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {role.badge}
                    </span>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{role.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{role.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Recommended Tools:</span>
                  <div className="space-y-1.5">
                    {role.recommendedTools.map((t, tIdx) => (
                      <div key={tIdx} className="p-2 rounded-xl bg-white border border-slate-200/80 text-xs">
                        <span className="font-bold text-slate-900 font-heading block">{t.name}</span>
                        <span className="text-[11px] text-slate-500 font-sans block mt-0.5 leading-snug">{t.reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 13: FREQUENTLY ASKED QUESTIONS (10 QUESTIONS) ── */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Transparent, business-focused information on how our revenue calculators, diagnostic rubrics, and data models function.
            </p>
          </div>

          <div className="space-y-4">
            {HUB_FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-heading flex items-start gap-2">
                  <span className="text-blue-600 font-mono shrink-0">Q{idx + 1}.</span>
                  <span>{faq.question.replace(/^\d+\.\s*/, '')}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 14: FINAL CONVERSION SECTION ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Revenue Intelligence In Action
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Turn Your Business Insights Into Measurable Revenue Progress.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Understanding business performance is the first step. The next step is translating insights into improved sales execution, stronger demand generation, more efficient revenue operations, and intelligent automation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-consultation"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/offerings"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore ProfitMachines Offerings</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Confidential Enterprise Scoping
            </span>
            <span>•</span>
            <span>Non-Disruptive Diagnostic Verification</span>
          </div>
        </div>
      </section>

    </div>
  );
}

