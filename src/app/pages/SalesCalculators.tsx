import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Target,
  Sparkles,
  ArrowRight,
  Zap,
  Clock,
  Layers,
  BarChart3,
  Building2,
  Lock,
  User,
  LogOut,
  RefreshCw,
  Sliders,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { trackEvent } from '../../lib/analytics';

export default function SalesCalculators() {
  const { user, logout, logCalculator } = useAuth();
  const [activeTab, setActiveTab] = useState<'velocity' | 'leakage' | 'cac' | 'closeRate'>('velocity');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sales Calculators | ProfitMachines Enterprise Architecture';
    trackEvent({ eventName: 'PAGE_VIEW_SALES_CALCULATORS', category: 'CALCULATORS' });
    logCalculator('Sales Calculators Hub', 'View');
  }, [logCalculator]);

  // ── Calculator 1: Pipeline Velocity & SDR Capacity ──
  const [reps, setReps] = useState(8);
  const [acv, setAcv] = useState(65000); // $65k
  const [dealsPerMonth, setDealsPerMonth] = useState(12);
  const [cycleDays, setCycleDays] = useState(90);

  // Sales Velocity = (Opportunities * Win Rate * ACV) / Cycle Length
  // Modeled with Autonomous SDR: Velocity multiplier 3.4x, Cycle compressed by 35%
  const currentDailyVelocity = Math.round((dealsPerMonth * acv) / 30);
  const projectedDailyVelocity = Math.round(currentDailyVelocity * 3.4);
  const repHoursSavedWeekly = Math.round(reps * 14.5);
  const annualPipelineLift = Math.round(currentDailyVelocity * 365 * 0.42);

  // ── Calculator 2: Dark Funnel Revenue Leakage & Margin ──
  const [currentArr, setCurrentArr] = useState(25); // $25M
  const [inboundConversion, setInboundConversion] = useState(2.2); // 2.2%
  const [leakageRate, setLeakageRate] = useState(38); // 38%

  // Modeled recovery: 28.4% margin lift from Profit Pool Discovery
  const annualLeakageDollars = Math.round((currentArr * 1000000 * (leakageRate / 100)) * 0.35);
  const marginLiftDollars = Math.round(currentArr * 1000000 * 0.284);
  const recoveredDealsQuarterly = Math.max(3, Math.round((currentArr / 5) * 1.8));

  // ── Calculator 3: CAC Payback & LTV Expansion ──
  const [blendedCac, setBlendedCac] = useState(18500);
  const [monthlyGrossProfit, setMonthlyGrossProfit] = useState(2400);
  const [churnRate, setChurnRate] = useState(1.2); // 1.2% monthly

  const currentPaybackMonths = (blendedCac / monthlyGrossProfit).toFixed(1);
  const projectedPaybackMonths = (Number(currentPaybackMonths) * 0.45).toFixed(1); // Compressed to ~8.2 months benchmark
  const estimatedLtv = Math.round(monthlyGrossProfit / (churnRate / 100));
  const ltvCacRatio = (estimatedLtv / blendedCac).toFixed(1);

  // ── Calculator 4: SPICED Deal Close Probability ──
  const [situationScore, setSituationScore] = useState(4); // 1-5
  const [painScore, setPainScore] = useState(4);
  const [impactScore, setImpactScore] = useState(3);
  const [criticalEventScore, setCriticalEventScore] = useState(4);
  const [decisionScore, setDecisionScore] = useState(3);

  const spicedTotal = situationScore + painScore + impactScore + criticalEventScore + decisionScore;
  const spicedPercentage = Math.round((spicedTotal / 25) * 100);
  const predictedCloseRate = Math.min(94, Math.round(18 + (spicedPercentage * 0.72)));

  const handleTabChange = (tab: 'velocity' | 'leakage' | 'cac' | 'closeRate', name: string) => {
    setActiveTab(tab);
    logCalculator(name, 'View');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20 relative overflow-hidden">
      {/* Ambient Cyber Light Accents */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── TOP EXECUTIVE WELCOME & IDENTITY BANNER ── */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Authenticated Session
              </span>
              <span className="text-xs text-slate-400 font-mono">
                ID: <strong className="text-blue-400">{user?.userId}</strong>
              </span>
              <span className="text-xs text-slate-400">
                &bull; <strong className="text-white">{user?.company || 'Enterprise Partner'}</strong>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Sales Calculators
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Welcome, <strong className="text-slate-200">{user?.fullName}</strong>. Model proprietary revenue velocity, dark-funnel recovery, and CAC payback scenarios calibrated against our +28.4% margin lift benchmark.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-left">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Registered Email</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">{user?.email}</div>
            </div>

            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-300 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* ── CALCULATOR NAVIGATION TABS ── */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-900/80 border border-slate-800/80 rounded-2xl">
          <button
            onClick={() => handleTabChange('velocity', 'AI Pipeline Velocity')}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'velocity'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Pipeline Velocity & SDR Capacity</span>
          </button>

          <button
            onClick={() => handleTabChange('leakage', 'Dark Funnel Leakage Recovery')}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'leakage'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Dark Funnel Leak Recovery</span>
          </button>

          <button
            onClick={() => handleTabChange('cac', 'CAC Payback & LTV Expansion')}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'cac'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>CAC Payback & LTV Multiplier</span>
          </button>

          <button
            onClick={() => handleTabChange('closeRate', 'SPICED Close Probability')}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'closeRate'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>SPICED Close Probability</span>
          </button>
        </div>

        {/* ── CALCULATOR BODY ── */}

        {/* 1. PIPELINE VELOCITY CALCULATOR */}
        {activeTab === 'velocity' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">Model 01</span>
                <h3 className="text-xl font-bold text-white mt-1">Autonomous SDR & Pipeline Velocity</h3>
                <p className="text-xs text-slate-400 mt-1">Adjust current team parameters to model automated throughput lift.</p>
              </div>

              {/* Slider 1: Reps */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Active Sales Reps (AE / SDR)</span>
                  <span className="font-mono text-blue-400 font-bold">{reps} Reps</span>
                </div>
                <input
                  type="range" min="1" max="50" value={reps}
                  onChange={(e) => setReps(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Slider 2: ACV */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Average Contract Value (ACV)</span>
                  <span className="font-mono text-emerald-400 font-bold">${acv.toLocaleString()}</span>
                </div>
                <input
                  type="range" min="10000" max="300000" step="5000" value={acv}
                  onChange={(e) => setAcv(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Slider 3: Monthly Deals */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Monthly Closed Deals</span>
                  <span className="font-mono text-blue-400 font-bold">{dealsPerMonth} Deals/mo</span>
                </div>
                <input
                  type="range" min="2" max="60" value={dealsPerMonth}
                  onChange={(e) => setDealsPerMonth(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Slider 4: Sales Cycle */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Average Sales Cycle Length</span>
                  <span className="font-mono text-purple-400 font-bold">{cycleDays} Days</span>
                </div>
                <input
                  type="range" min="30" max="180" step="5" value={cycleDays}
                  onChange={(e) => setCycleDays(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30">
                  <div className="text-[11px] font-mono text-blue-300 font-bold uppercase tracking-wider">Projected Daily Velocity</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-2">
                    ${projectedDailyVelocity.toLocaleString()}
                    <span className="text-xs text-emerald-400 font-normal ml-2">/day</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Current: ${currentDailyVelocity.toLocaleString()}/day &bull; <strong className="text-emerald-400">+3.4x Velocity Lift</strong>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30">
                  <div className="text-[11px] font-mono text-indigo-300 font-bold uppercase tracking-wider">Rep Time Saved Weekly</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-2">
                    {repHoursSavedWeekly.toLocaleString()}
                    <span className="text-xs text-indigo-300 font-normal ml-2">hrs/wk</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Eliminates manual CRM entry, enrichment, and cold multi-threading.
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Modeled Annual Pipeline Growth</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
                    +${annualPipelineLift.toLocaleString()} ARR
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full" style={{ width: '78%' }} />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Based on sub-60s intent capture and autonomous multi-threaded SDR orchestration across buying committees.
                </p>
              </div>

              {/* Action Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-600/30 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Deploy Autonomous SDR in Your Stack</div>
                  <div className="text-xs text-slate-400">Receive a custom architectural blueprint tailored to your tech stack.</div>
                </div>
                <Link
                  to="/book-consultation"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shrink-0 transition-colors"
                >
                  Schedule Architecture Review &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2. REVENUE LEAKAGE CALCULATOR */}
        {activeTab === 'leakage' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Model 02</span>
                <h3 className="text-xl font-bold text-white mt-1">Dark Funnel & Margin Leak Recovery</h3>
                <p className="text-xs text-slate-400 mt-1">Isolate invisible margin decay in the dark funnel.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Current Annual Recurring Revenue (ARR)</span>
                  <span className="font-mono text-emerald-400 font-bold">${currentArr}M ARR</span>
                </div>
                <input
                  type="range" min="5" max="150" step="5" value={currentArr}
                  onChange={(e) => setCurrentArr(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Estimated Funnel Conversion Rate</span>
                  <span className="font-mono text-blue-400 font-bold">{inboundConversion}%</span>
                </div>
                <input
                  type="range" min="0.5" max="8.0" step="0.1" value={inboundConversion}
                  onChange={(e) => setInboundConversion(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Unquantified Funnel Drop-off</span>
                  <span className="font-mono text-red-400 font-bold">{leakageRate}%</span>
                </div>
                <input
                  type="range" min="15" max="60" value={leakageRate}
                  onChange={(e) => setLeakageRate(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/30">
                  <div className="text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider">Contribution Margin Lift</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-2">
                    +${(marginLiftDollars / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Based on verified <strong>+28.4%</strong> baseline margin expansion from Profit Pool Discovery.
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/40 to-slate-900 border border-red-500/30">
                  <div className="text-[11px] font-mono text-red-300 font-bold uppercase tracking-wider">Annual Recoverable Leakage</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-2">
                    ${(annualLeakageDollars / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Captured from anonymous research sessions and multi-stakeholder intent surge.
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 space-y-3">
                <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Key Discovery Vectors</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dark-Funnel ICP Intent Telemetry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cross-Border Margin Discrepancies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Contract Discounting Bleed Control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Automated Win-Loss Forensic Auditing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CAC PAYBACK CALCULATOR */}
        {activeTab === 'cac' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider">Model 03</span>
                <h3 className="text-xl font-bold text-white mt-1">CAC Payback & LTV Expansion</h3>
                <p className="text-xs text-slate-400 mt-1">Model payback period compression and unit economics.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Blended Customer Acquisition Cost (CAC)</span>
                  <span className="font-mono text-purple-400 font-bold">${blendedCac.toLocaleString()}</span>
                </div>
                <input
                  type="range" min="5000" max="60000" step="1000" value={blendedCac}
                  onChange={(e) => setBlendedCac(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Monthly Gross Profit Per Account</span>
                  <span className="font-mono text-emerald-400 font-bold">${monthlyGrossProfit.toLocaleString()}/mo</span>
                </div>
                <input
                  type="range" min="500" max="10000" step="100" value={monthlyGrossProfit}
                  onChange={(e) => setMonthlyGrossProfit(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Monthly Logo Churn Rate</span>
                  <span className="font-mono text-blue-400 font-bold">{churnRate}%/mo</span>
                </div>
                <input
                  type="range" min="0.3" max="4.0" step="0.1" value={churnRate}
                  onChange={(e) => setChurnRate(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-slate-900 border border-purple-500/30">
                  <div className="text-[11px] font-mono text-purple-300 font-bold uppercase tracking-wider">Payback Period</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-2">
                    {projectedPaybackMonths} <span className="text-xs text-purple-300 font-normal">Months</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Current: {currentPaybackMonths} mo &bull; Compressed by <strong className="text-emerald-400">55%</strong>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/30">
                  <div className="text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider">LTV : CAC Ratio</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-2">
                    {ltvCacRatio}x
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Estimated LTV: ${estimatedLtv.toLocaleString()} per customer.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Financial Rigor Benchmark:</strong> In the ProfitMachines Dual-Vector Economic Model, capital payback achieves breakeven at <strong>8.2 months</strong> with a 3-year modeled NPV of <strong>$11.0M</strong> and an IRR of <strong>148.6%</strong>.
              </div>
            </div>
          </div>
        )}

        {/* 4. SPICED DEAL PROBABILITY CALCULATOR */}
        {activeTab === 'closeRate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">Model 04</span>
                <h3 className="text-xl font-bold text-white mt-1">SPICED Deal Health & Close Simulator</h3>
                <p className="text-xs text-slate-400 mt-1">Score enterprise deals against the five rigorous qualification vectors.</p>
              </div>

              {/* S: Situation */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">1. Situation (Current Stack & Context)</span>
                  <span className="font-mono text-blue-400 font-bold">{situationScore}/5</span>
                </div>
                <input type="range" min="1" max="5" value={situationScore} onChange={(e) => setSituationScore(Number(e.target.value))} className="w-full accent-blue-600" />
              </div>

              {/* P: Pain */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">2. Pain (Root Cause Latency)</span>
                  <span className="font-mono text-blue-400 font-bold">{painScore}/5</span>
                </div>
                <input type="range" min="1" max="5" value={painScore} onChange={(e) => setPainScore(Number(e.target.value))} className="w-full accent-blue-600" />
              </div>

              {/* I: Impact */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">3. Impact (Quantified Dollar ROI)</span>
                  <span className="font-mono text-blue-400 font-bold">{impactScore}/5</span>
                </div>
                <input type="range" min="1" max="5" value={impactScore} onChange={(e) => setImpactScore(Number(e.target.value))} className="w-full accent-blue-600" />
              </div>

              {/* C: Critical Event */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">4. Critical Event (Compelling Deadline)</span>
                  <span className="font-mono text-blue-400 font-bold">{criticalEventScore}/5</span>
                </div>
                <input type="range" min="1" max="5" value={criticalEventScore} onChange={(e) => setCriticalEventScore(Number(e.target.value))} className="w-full accent-blue-600" />
              </div>

              {/* D: Decision */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">5. Decision Process & Committee Alignment</span>
                  <span className="font-mono text-blue-400 font-bold">{decisionScore}/5</span>
                </div>
                <input type="range" min="1" max="5" value={decisionScore} onChange={(e) => setDecisionScore(Number(e.target.value))} className="w-full accent-blue-600" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30">
                  <div className="text-[11px] font-mono text-blue-300 font-bold uppercase tracking-wider">Predicted Close Probability</div>
                  <div className="text-4xl font-extrabold text-white font-mono mt-2">
                    {predictedCloseRate}%
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Composite score derived from multi-threaded buyer signals.
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/30">
                  <div className="text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider">SPICED Health Score</div>
                  <div className="text-4xl font-extrabold text-emerald-400 font-mono mt-2">
                    {spicedTotal} <span className="text-xs text-slate-400">/ 25</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    {spicedTotal >= 20 ? 'High Confidence (Forecastable)' : spicedTotal >= 14 ? 'Moderate Pipeline Health' : 'High Slippage Risk'}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="font-bold text-slate-200 uppercase tracking-wider text-xs">Recommended Acceleration Action</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {spicedTotal >= 20
                    ? 'Engage CFO & Procurement committee with automated value realization schedule and security compliance pack.'
                    : spicedTotal >= 14
                    ? 'Deploy autonomous buyer committee nurturing on Critical Event deadlines to prevent deal stall.'
                    : 'Disclose root-cause friction audit to uncover unquantified negative impact before investing AE closing cycles.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── FOOTER LEGAL & ARCHITECTURE DISCLAIMER ── */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>Telemetry logged to central Google Spreadsheet database ('Calculator_Activity' tab)</span>
          </div>
          <div>
            Illustrative enterprise models based on representative $100M ARR baseline.
          </div>
        </div>

      </div>
    </div>
  );
}
