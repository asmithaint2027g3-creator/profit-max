import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  Area,
  AreaChart
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Layers,
  CheckCircle2,
  Sliders,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Scale,
  BrainCircuit,
  Percent,
  Info
} from 'lucide-react';

export default function MarketingDebtDashboard() {
  // ── 1. INTERACTIVE MODEL CONTROLS STATE ──
  const [potentialRevenue, setPotentialRevenue] = useState<number>(10000000); // $10M
  const [contributionMarginPct, setContributionMarginPct] = useState<number>(45); // 45%

  // 5 Core Gap Inputs (%)
  const [gapAwareness, setGapAwareness] = useState<number>(15);
  const [gapUtility, setGapUtility] = useState<number>(10);
  const [gapBrand, setGapBrand] = useState<number>(8);
  const [gapReputation, setGapReputation] = useState<number>(7);
  const [gapPipeline, setGapPipeline] = useState<number>(12);

  // Model Weights (Normalized to sum = 1.0)
  const [weightA, setWeightA] = useState<number>(0.20);
  const [weightU, setWeightU] = useState<number>(0.20);
  const [weightB, setWeightB] = useState<number>(0.20);
  const [weightR, setWeightR] = useState<number>(0.20);
  const [weightP, setWeightP] = useState<number>(0.20);

  // Reset to default illustrative parameters
  const handleReset = () => {
    setPotentialRevenue(10000000);
    setContributionMarginPct(45);
    setGapAwareness(15);
    setGapUtility(10);
    setGapBrand(8);
    setGapReputation(7);
    setGapPipeline(12);
    setWeightA(0.20);
    setWeightU(0.20);
    setWeightB(0.20);
    setWeightR(0.20);
    setWeightP(0.20);
  };

  // ── 2. DERIVED CALCULATIONS ──
  // Stepwise cumulative reduction for Waterfall:
  const cumulativeGapPct = gapAwareness + gapUtility + gapBrand + gapReputation + gapPipeline;
  const actualRevenuePct = Math.max(0, 100 - cumulativeGapPct);

  // Weighted Marketing Debt Index (0 to 1):
  // MD = wA*GA + wU*GU + wB*GB + wR*GR + wP*GP
  const sumWeights = weightA + weightU + weightB + weightR + weightP;
  const normalizedWA = weightA / (sumWeights || 1);
  const normalizedWU = weightU / (sumWeights || 1);
  const normalizedWB = weightB / (sumWeights || 1);
  const normalizedWR = weightR / (sumWeights || 1);
  const normalizedWP = weightP / (sumWeights || 1);

  const marketingDebtIndex =
    normalizedWA * (gapAwareness / 100) +
    normalizedWU * (gapUtility / 100) +
    normalizedWB * (gapBrand / 100) +
    normalizedWR * (gapReputation / 100) +
    normalizedWP * (gapPipeline / 100);

  // Revenue & Profit Realization:
  // Ra = Rp * (1 - MD)
  const realizedRevenue = Math.round(potentialRevenue * (1 - marketingDebtIndex));
  const revenueGap = potentialRevenue - realizedRevenue;
  const realizedProfit = Math.round(realizedRevenue * (contributionMarginPct / 100));
  const lostProfit = Math.round(revenueGap * (contributionMarginPct / 100));

  // ── 3. CHART DATASETS ──

  // PANEL A: Value Gap Journey Data
  const valueJourneyData = useMemo(() => {
    // Upper curve: Product/Solution Value Vp(t) (consistently high)
    // Lower curve: Market Realized Value Vb(t) (stepping down at each commercial friction gap)
    const baseVp = 100;
    let currentVb = 100;
    
    const steps = [
      { stage: 'Market Entry', vp: baseVp, vb: currentVb, label: 'Origin' },
      { stage: 'Awareness', vp: baseVp, vb: (currentVb -= gapAwareness), label: `-${gapAwareness}%` },
      { stage: 'Utility', vp: baseVp, vb: (currentVb -= gapUtility), label: `-${gapUtility}%` },
      { stage: 'Brand', vp: baseVp, vb: (currentVb -= gapBrand), label: `-${gapBrand}%` },
      { stage: 'Reputation', vp: baseVp, vb: (currentVb -= gapReputation), label: `-${gapReputation}%` },
      { stage: 'Pipeline', vp: baseVp, vb: (currentVb -= gapPipeline), label: `-${gapPipeline}%` },
      { stage: 'Realized Revenue', vp: baseVp, vb: Math.max(10, currentVb), label: `${Math.round(currentVb)}%` }
    ];
    return steps;
  }, [gapAwareness, gapUtility, gapBrand, gapReputation, gapPipeline]);

  // PANEL C: Waterfall Data
  const waterfallData = useMemo(() => {
    return [
      { name: 'Potential Rp', value: 100, fill: '#2563EB', isTotal: true },
      { name: 'Awareness', value: -gapAwareness, fill: '#8B5CF6' },
      { name: 'Utility', value: -gapUtility, fill: '#8B5CF6' },
      { name: 'Brand', value: -gapBrand, fill: '#8B5CF6' },
      { name: 'Reputation', value: -gapReputation, fill: '#8B5CF6' },
      { name: 'Pipeline', value: -gapPipeline, fill: '#8B5CF6' },
      { name: 'Actual Ra', value: actualRevenuePct, fill: '#1E293B', isTotal: true }
    ];
  }, [gapAwareness, gapUtility, gapBrand, gapReputation, gapPipeline, actualRevenuePct]);

  // PANEL D: MCOS Curves: MCOS(Q) = α - β*Q
  // Showing 4 curves: Leader A, Leader B, Leader C, and Your Business (affected by marketing debt)
  const mcosData = useMemo(() => {
    const points = [];
    // Your Business starts higher if marketing debt is high
    const yourAlpha = 9200 * (1 + marketingDebtIndex * 0.4);
    const yourBeta = 4.2;

    for (let q = 100; q <= 1000; q += 100) {
      points.push({
        q,
        leaderA: Math.max(1800, Math.round(5200 - 3.4 * q)),
        leaderB: Math.max(2200, Math.round(6400 - 3.8 * q)),
        leaderC: Math.max(2600, Math.round(7600 - 4.1 * q)),
        yourBusiness: Math.max(3100, Math.round(yourAlpha - yourBeta * q))
      });
    }
    return points;
  }, [marketingDebtIndex]);

  // PANEL E: Economic Price Curve (Supply & Demand Intersection)
  const economicData = useMemo(() => {
    // Demand: P = a - bQ
    // Supply: P = c + dQ
    const a = 120;
    const b = 0.08;
    const c = 20;
    const d = 0.04;
    const eqQ = Math.round((a - c) / (b + d)); // ~833
    const eqP = Math.round((a * d + b * c) / (b + d)); // ~53.3

    const points = [];
    for (let q = 100; q <= 1200; q += 100) {
      points.push({
        q,
        demand: Math.max(0, Math.round(a - b * q)),
        supply: Math.round(c + d * q)
      });
    }
    return { points, eqQ, eqP };
  }, []);

  return (
    <div className="w-full bg-white text-slate-900 border border-blue-200/90 rounded-3xl shadow-xl overflow-hidden font-sans">
      
      {/* ── HEADER BANNER: BRANDING & TITLE ── */}
      <div className="px-6 py-6 sm:px-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-slate-800 relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 font-mono text-[10px] font-bold uppercase tracking-widest">
                FLAGSHIP ANALYTICAL DASHBOARD // SECTION 02
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 font-mono text-[10px] font-bold uppercase tracking-widest">
                QUANTITATIVE REVENUE ENGINE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-white">
              Marketing Debt → Revenue Gap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              A quantitative, multi-model analytical framework that measures how market awareness, customer utility, brand strength, reputation and pipeline gaps compound into unrealized revenue potential — and how ProfitMachines helps businesses identify, prioritize and address those gaps through AI-native sales acceleration.
            </p>
          </div>

          {/* Top-Right Brand Identity */}
          <div className="shrink-0 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-right">
            <div className="text-sm font-extrabold font-mono tracking-wider text-white">
              ProfitMachines<span className="text-blue-400">.Work</span>
            </div>
            <div className="text-[11px] font-mono text-purple-300">
              AI Sales Acceleration Engineering Services
            </div>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE CONTROLS COCKPIT ── */}
      <div className="p-5 sm:p-6 bg-slate-50/90 border-b border-blue-100/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              Interactive Scenario Controls (Adjust Assumptions)
            </span>
          </div>
          <button
            onClick={handleReset}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300 text-xs font-mono font-semibold transition-all cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Illustrative Defaults</span>
          </button>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 pt-4">
          
          {/* Potential Revenue */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700">
              <span>Potential (Rp)</span>
              <span className="text-blue-600">\${(potentialRevenue / 1000000).toFixed(1)}M</span>
            </div>
            <input
              type="range"
              min={2000000}
              max={50000000}
              step={1000000}
              value={potentialRevenue}
              onChange={(e) => setPotentialRevenue(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-1.5"
            />
            <div className="text-[10px] text-slate-400 font-mono">Gross Target ARR</div>
          </div>

          {/* Margin */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700">
              <span>Contrib. Margin</span>
              <span className="text-indigo-600">{contributionMarginPct}%</span>
            </div>
            <input
              type="range"
              min={15}
              max={85}
              step={1}
              value={contributionMarginPct}
              onChange={(e) => setContributionMarginPct(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer h-1.5"
            />
            <div className="text-[10px] text-slate-400 font-mono">Variable margin (m)</div>
          </div>

          {/* GA: Awareness */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700">
              <span>1. Awareness (GA)</span>
              <span className="text-purple-600">−{gapAwareness}%</span>
            </div>
            <input
              type="range"
              min={2}
              max={40}
              step={1}
              value={gapAwareness}
              onChange={(e) => setGapAwareness(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer h-1.5"
            />
            <div className="text-[10px] text-slate-400 font-mono">1 − A / TAM</div>
          </div>

          {/* GU: Utility */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700">
              <span>2. Utility (GU)</span>
              <span className="text-purple-600">−{gapUtility}%</span>
            </div>
            <input
              type="range"
              min={2}
              max={30}
              step={1}
              value={gapUtility}
              onChange={(e) => setGapUtility(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer h-1.5"
            />
            <div className="text-[10px] text-slate-400 font-mono">1 − Ub / Up</div>
          </div>

          {/* GB: Brand */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700">
              <span>3. Brand (GB)</span>
              <span className="text-purple-600">−{gapBrand}%</span>
            </div>
            <input
              type="range"
              min={2}
              max={25}
              step={1}
              value={gapBrand}
              onChange={(e) => setGapBrand(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer h-1.5"
            />
            <div className="text-[10px] text-slate-400 font-mono">1 − Bs / Bt</div>
          </div>

          {/* GR: Reputation */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700">
              <span>4. Reputation (GR)</span>
              <span className="text-purple-600">−{gapReputation}%</span>
            </div>
            <input
              type="range"
              min={2}
              max={25}
              step={1}
              value={gapReputation}
              onChange={(e) => setGapReputation(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer h-1.5"
            />
            <div className="text-[10px] text-slate-400 font-mono">1 − Rs / Rt</div>
          </div>

          {/* GP: Pipeline */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700">
              <span>5. Pipeline (GP)</span>
              <span className="text-purple-600">−{gapPipeline}%</span>
            </div>
            <input
              type="range"
              min={2}
              max={35}
              step={1}
              value={gapPipeline}
              onChange={(e) => setGapPipeline(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer h-1.5"
            />
            <div className="text-[10px] text-slate-400 font-mono">1 − Pa / Pp</div>
          </div>

        </div>

        {/* Live Metrics Summary HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 mt-3 border-t border-slate-200">
          <div className="p-3 rounded-xl bg-white border border-blue-200">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Marketing Debt Index</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-purple-700">
              {(marketingDebtIndex * 100).toFixed(1)}%
            </div>
            <div className="text-[10px] font-mono text-slate-500">Weighted Drag (MD)</div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-blue-200">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Realized Revenue (Ra)</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-blue-900">
              \${(realizedRevenue / 1000000).toFixed(2)}M
            </div>
            <div className="text-[10px] font-mono text-slate-500">Rp × (1 − MD)</div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-rose-200">
            <div className="text-[10px] font-mono text-rose-600 uppercase font-bold">Revenue Gap (ΔR)</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-rose-600">
              \${(revenueGap / 1000000).toFixed(2)}M
            </div>
            <div className="text-[10px] font-mono text-slate-500">Trapped Value</div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-emerald-200">
            <div className="text-[10px] font-mono text-emerald-700 uppercase font-bold">Recoverable Profit (Δπ)</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-700">
              \${(lostProfit / 1000000).toFixed(2)}M
            </div>
            <div className="text-[10px] font-mono text-slate-500">ΔR × {contributionMarginPct}% Margin</div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8 bg-white">

        {/* ═══════════════════════════════════════════════════════════════════════ */}
        {/* ── ROW 1 — MAIN ANALYTICAL VIEW (PANEL A & PANEL B) ── */}
        {/* ═══════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* PANEL A — Value Gap Journey Chart (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              {/* Purple title bar */}
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel A: The Value Gap Journey</span>
                <span className="text-[10px] font-normal opacity-90">From Gaps to Revenue Impact</span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-heading">
                      Product Value vs. Market Realized Value Curve
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500">
                      Product / Solution Value Vp(t) vs. Market Realized Value Vb(t)
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                      <span className="w-2.5 h-1 bg-blue-600 rounded"></span> Vp(t) Potential
                    </span>
                    <span className="flex items-center gap-1.5 text-indigo-900 font-bold">
                      <span className="w-2.5 h-1 bg-indigo-900 rounded"></span> Vb(t) Realized
                    </span>
                  </div>
                </div>

                {/* Line Chart */}
                <div className="h-60 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={valueJourneyData} margin={{ top: 10, right: 15, left: -20, bottom: 5 }}>
                      <defs>
                        <linearGradient id="gapFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="stage" tick={{ fontSize: 10, fill: '#64748B' }} />
                      <YAxis domain={[0, 110]} tick={{ fontSize: 10, fill: '#64748B' }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0F172A', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '11px' }}
                      />
                      <Area type="monotone" dataKey="vp" stroke="#2563EB" strokeWidth={2.5} fill="url(#gapFill)" />
                      <Line type="stepAfter" dataKey="vb" stroke="#1E293B" strokeWidth={2.5} dot={{ r: 4, fill: '#8B5CF6' }} />
                      <ReferenceLine x="Realized Revenue" stroke="#8B5CF6" strokeDasharray="3 3" label={{ value: 'Revenue Gap ΔR(t)', fill: '#8B5CF6', fontSize: 10, position: 'top' }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* 6 Stages Connected Arrow Row */}
            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <div className="text-[10px] font-mono text-slate-500 uppercase font-bold mb-2">
                Compounding Friction Stages Along Commercial Journey:
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center text-[10px] font-mono font-bold">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  1. Awareness (−{gapAwareness}%)
                </div>
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  2. Utility (−{gapUtility}%)
                </div>
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  3. Brand (−{gapBrand}%)
                </div>
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  4. Reputation (−{gapReputation}%)
                </div>
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  5. Pipeline (−{gapPipeline}%)
                </div>
                <div className="p-1.5 rounded-lg bg-purple-600 text-white font-extrabold shadow-xs">
                  6. Revenue Gap ({cumulativeGapPct}%)
                </div>
              </div>
            </div>
          </div>

          {/* PANEL B — The Gap Framework Table (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel B: The Gap Framework</span>
                <span className="text-[10px] font-normal opacity-90">6 Mathematical Models</span>
              </div>

              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase">
                      <th className="py-2 px-2 font-bold">#</th>
                      <th className="py-2 px-2 font-bold">Gap</th>
                      <th className="py-2 px-2 font-bold">Model (0–1)</th>
                      <th className="py-2 px-2 font-bold">What It Measures</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-slate-700 text-[11px]">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2 px-2 font-bold text-blue-600">1</td>
                      <td className="py-2 px-2 font-bold text-slate-900">Awareness (GA)</td>
                      <td className="py-2 px-2 bg-blue-50/60 text-blue-900 font-bold rounded">1 − A / TAM</td>
                      <td className="py-2 px-2 text-slate-600 text-[10px]">Target buyers knowing solution</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2 px-2 font-bold text-blue-600">2</td>
                      <td className="py-2 px-2 font-bold text-slate-900">Utility (GU)</td>
                      <td className="py-2 px-2 bg-blue-50/60 text-blue-900 font-bold rounded">1 − Ub / Up</td>
                      <td className="py-2 px-2 text-slate-600 text-[10px]">Perceived vs. delivered utility</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2 px-2 font-bold text-blue-600">3</td>
                      <td className="py-2 px-2 font-bold text-slate-900">Brand (GB)</td>
                      <td className="py-2 px-2 bg-blue-50/60 text-blue-900 font-bold rounded">1 − Bs / Bt</td>
                      <td className="py-2 px-2 text-slate-600 text-[10px]">Brand strength vs. benchmark</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2 px-2 font-bold text-blue-600">4</td>
                      <td className="py-2 px-2 font-bold text-slate-900">Reputation (GR)</td>
                      <td className="py-2 px-2 bg-blue-50/60 text-blue-900 font-bold rounded">1 − Rs / Rt</td>
                      <td className="py-2 px-2 text-slate-600 text-[10px]">Market trust vs. category peer</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2 px-2 font-bold text-blue-600">5</td>
                      <td className="py-2 px-2 font-bold text-slate-900">Pipeline (GP)</td>
                      <td className="py-2 px-2 bg-blue-50/60 text-blue-900 font-bold rounded">1 − Pa / Pp</td>
                      <td className="py-2 px-2 text-slate-600 text-[10px]">Actual vs. potential pipeline</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-purple-50/30">
                      <td className="py-2 px-2 font-bold text-purple-700">6</td>
                      <td className="py-2 px-2 font-bold text-purple-900">Revenue (GRev)</td>
                      <td className="py-2 px-2 bg-purple-100 text-purple-900 font-bold rounded">1 − Ra / Rp</td>
                      <td className="py-2 px-2 text-purple-800 text-[10px]">Actual vs. estimated revenue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-500 leading-tight">
              <span className="font-bold text-slate-700">Methodological Note: </span>
              These equations represent proposed analytical definitions for executive diagnostic modeling and are not presented as universally validated physical constants.
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════════ */}
        {/* ── ROW 2 — THREE ANALYTICAL CHARTS (PANEL C, D, E) ── */}
        {/* ═══════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PANEL C — Waterfall Chart (Gap Progression) */}
          <div className="rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel C: Gap Progression</span>
                <span className="text-[10px] font-normal opacity-90">Waterfall</span>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 font-heading">
                    Stepwise Revenue Impact
                  </h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                    CumGap = {cumulativeGapPct}%
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Potential: 100% → Actual: {actualRevenuePct}%
                </div>

                {/* Waterfall Recharts BarChart */}
                <div className="h-52 w-full pt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={waterfallData} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#64748B' }} />
                      <YAxis tick={{ fontSize: 9, fill: '#64748B' }} domain={[-40, 110]} />
                      <Tooltip
                        formatter={(val: any) => [`${val}%`, 'Impact']}
                        contentStyle={{ backgroundColor: '#0F172A', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '10px' }}
                      />
                      <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                        {waterfallData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-600">
              <span className="font-bold text-blue-700">Formula: </span>
              Cumulative Gap = 100% − Actual Revenue % ({cumulativeGapPct}% = 100% − {actualRevenuePct}%)
            </div>
          </div>

          {/* PANEL D — MCOS Multi-Line Chart */}
          <div className="rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel D: MCOS (Cost of Selling)</span>
                <span className="text-[10px] font-normal opacity-90">Every Additional Product</span>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 font-heading">
                    Marginal Cost of Selling Curves
                  </h4>
                  <span className="text-[10px] font-mono text-blue-600 font-bold">
                    MCOS(Q) = α − βQ
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  X: Products Sold (Q) · Y: Cost per Unit ($)
                </div>

                {/* Line Chart */}
                <div className="h-52 w-full pt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mcosData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="q" tick={{ fontSize: 9, fill: '#64748B' }} />
                      <YAxis tick={{ fontSize: 9, fill: '#64748B' }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0F172A', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '10px' }}
                      />
                      <Line type="monotone" dataKey="leaderA" stroke="#94A3B8" strokeWidth={1.5} dot={false} name="Leader A" />
                      <Line type="monotone" dataKey="leaderB" stroke="#64748B" strokeWidth={1.5} dot={false} name="Leader B" />
                      <Line type="monotone" dataKey="leaderC" stroke="#334155" strokeWidth={1.5} dot={false} name="Leader C" />
                      <Line type="monotone" dataKey="yourBusiness" stroke="#8B5CF6" strokeWidth={2.5} dot={{ r: 3, fill: '#8B5CF6' }} name="Your Business" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-600 flex justify-between items-center">
              <span>α: Initial Cost · β: Efficiency Gain</span>
              <span className="text-purple-700 font-bold">Your α: 9.2k (Debt Drag)</span>
            </div>
          </div>

          {/* PANEL E — Economic Price Curve (Supply & Demand) */}
          <div className="rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel E: Economic Price Curve</span>
                <span className="text-[10px] font-normal opacity-90">Supply & Demand Equilibrium</span>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 font-heading">
                    Equilibrium Price & Surplus
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold">
                    P* = \${economicData.eqP} · Q* = {economicData.eqQ}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Demand: P = a − bQ · Supply: P = c + dQ
                </div>

                {/* Line Chart */}
                <div className="h-52 w-full pt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={economicData.points} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="q" tick={{ fontSize: 9, fill: '#64748B' }} />
                      <YAxis tick={{ fontSize: 9, fill: '#64748B' }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0F172A', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '10px' }}
                      />
                      <Line type="monotone" dataKey="demand" stroke="#2563EB" strokeWidth={2} dot={false} name="Demand P(Q)" />
                      <Line type="monotone" dataKey="supply" stroke="#8B5CF6" strokeWidth={2} dot={false} name="Supply P(Q)" />
                      <ReferenceLine x={economicData.eqQ} stroke="#10B981" strokeDasharray="3 3" />
                      <ReferenceLine y={economicData.eqP} stroke="#10B981" strokeDasharray="3 3" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-600 flex justify-between items-center">
              <span className="text-blue-700 font-semibold">Blue: Consumer Surplus</span>
              <span className="text-purple-700 font-semibold">Purple: Producer Surplus</span>
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════════ */}
        {/* ── ROW 3 — CUMULATIVE MODEL, TAKEAWAYS & BUSINESS IMPACT (PANEL F, G, H) ── */}
        {/* ═══════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PANEL F — Cumulative Model & Revenue Realization */}
          <div className="rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel F: Cumulative Model</span>
                <span className="text-[10px] font-normal opacity-90">Revenue Realization</span>
              </div>

              <div className="p-4 space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-1.5">
                  <div className="text-[10px] text-blue-300 font-bold uppercase">Marketing Debt Master Equation:</div>
                  <div className="text-xs font-bold text-cyan-300">
                    MD = wA·GA + wU·GU + wB·GB + wR·GR + wP·GP
                  </div>
                  <div className="text-[11px] text-slate-300 pt-1 border-t border-slate-800">
                    Ra = Rp × (1 − MD) = \${(realizedRevenue / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-[11px] text-emerald-300">
                    πa = Ra × m = \${(realizedProfit / 1000000).toFixed(2)}M | Δπ = \${(lostProfit / 1000000).toFixed(2)}M
                  </div>
                </div>

                {/* Weight Sliders */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-mono font-bold text-slate-700 flex justify-between">
                    <span>Model Weights (Normalized Σw = 1.0):</span>
                    <span className="text-purple-600">MD = {(marketingDebtIndex * 100).toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-[10px] font-mono text-center">
                    <div>
                      <span>wA: {weightA.toFixed(2)}</span>
                      <input
                        type="range" min={0.05} max={0.5} step={0.05} value={weightA}
                        onChange={(e) => setWeightA(Number(e.target.value))}
                        className="w-full accent-blue-600 h-1 mt-1 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span>wU: {weightU.toFixed(2)}</span>
                      <input
                        type="range" min={0.05} max={0.5} step={0.05} value={weightU}
                        onChange={(e) => setWeightU(Number(e.target.value))}
                        className="w-full accent-blue-600 h-1 mt-1 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span>wB: {weightB.toFixed(2)}</span>
                      <input
                        type="range" min={0.05} max={0.5} step={0.05} value={weightB}
                        onChange={(e) => setWeightB(Number(e.target.value))}
                        className="w-full accent-blue-600 h-1 mt-1 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span>wR: {weightR.toFixed(2)}</span>
                      <input
                        type="range" min={0.05} max={0.5} step={0.05} value={weightR}
                        onChange={(e) => setWeightR(Number(e.target.value))}
                        className="w-full accent-blue-600 h-1 mt-1 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span>wP: {weightP.toFixed(2)}</span>
                      <input
                        type="range" min={0.05} max={0.5} step={0.05} value={weightP}
                        onChange={(e) => setWeightP(Number(e.target.value))}
                        className="w-full accent-blue-600 h-1 mt-1 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-500">
              Note: The weighted Marketing Debt Index is an analytical friction measure distinguished from the unweighted arithmetic sum.
            </div>
          </div>

          {/* PANEL G — Key Takeaways */}
          <div className="rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel G: Key Takeaways</span>
                <span className="text-[10px] font-normal opacity-90">Analytical Insights</span>
              </div>

              <div className="p-4 space-y-2.5">
                {[
                  'Multiple marketing and pipeline gaps compound their impact on revenue realization.',
                  'Awareness and positioning influence how effectively a business reaches its target buyers.',
                  'Weak customer value communication can reduce conversion efficiency across mid-funnel.',
                  'Pipeline leakage and sales friction can increase acquisition costs and drag margins.',
                  'ProfitMachines helps organizations identify and prioritize revenue improvement opportunities through AI-native sales acceleration.'
                ].map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span className="leading-snug">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-600 font-semibold">
              Executive Focus: Prioritize the highest-weight friction gap to maximize immediate capital recovery.
            </div>
          </div>

          {/* PANEL H — Expected Business Impact with ProfitMachines.Work */}
          <div className="rounded-2xl border border-blue-200/80 bg-white shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-violet-700 to-blue-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Panel H: Expected Business Impact</span>
                <span className="text-[10px] font-normal opacity-90">ProfitMachines.Work</span>
              </div>

              <div className="p-4 space-y-2.5">
                {[
                  { label: 'Revenue Lift', range: '+15–45%', note: 'Through multi-gap remediation', icon: TrendingUp, color: 'text-blue-600 bg-blue-50' },
                  { label: 'Selling Cost Optimization', range: '−10–30%', note: 'MCOS curve flattening', icon: TrendingDown, color: 'text-emerald-600 bg-emerald-50' },
                  { label: 'Contribution Margin', range: '+5–20%', note: 'Discretionary discount removal', icon: Percent, color: 'text-indigo-600 bg-indigo-50' },
                  { label: 'Pipeline Conversion', range: '+20–40%', note: 'Stage-gate leakage interception', icon: Activity, color: 'text-purple-600 bg-purple-50' },
                  { label: 'Profitability Improvement', range: '+12–35%', note: 'Compounded operating leverage', icon: DollarSign, color: 'text-cyan-700 bg-cyan-50' }
                ].map((kpi, idx) => {
                  const Icon = kpi.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${kpi.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 font-heading">{kpi.label}</div>
                          <div className="text-[10px] font-mono text-slate-500">{kpi.note}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                          {kpi.range}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-[9px] font-mono text-slate-400 text-center">
              *Illustrative ranges represent hypothetical model scenarios. Actual results require customer baseline validation.
            </div>
          </div>

        </div>

      </div>

      {/* ── BOTTOM BRAND STRIP ── */}
      <div className="px-6 py-5 sm:px-8 bg-gradient-to-r from-violet-900 via-indigo-900 to-blue-900 text-white border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-sm font-extrabold font-mono tracking-wider text-white">
            ProfitMachines<span className="text-blue-400">.Work</span>
          </div>
          <div className="text-xs font-mono text-purple-300">
            AI Sales Acceleration Engineering Services
          </div>
        </div>

        <div className="text-xs text-slate-300 italic max-w-2xl leading-relaxed md:text-right">
          ProfitMachines helps organizations identify revenue gaps, improve sales execution, optimize demand generation and convert untapped market potential into measurable business growth through intelligent sales and demand-generation systems.
        </div>
      </div>

    </div>
  );
}

