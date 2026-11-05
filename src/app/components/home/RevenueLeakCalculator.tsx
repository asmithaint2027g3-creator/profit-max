import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, ArrowRight, Calculator, ChevronRight, ShieldCheck } from 'lucide-react';

// ── Leakage Formula ─────────────────────────────────────────────────────────
// Estimates annualised revenue at risk based on ARR and sales cycle length.
// Methodology: longer cycles compound pipeline stall; baseline leakage = 12% ARR,
// scaled by cycle ratio vs. 60-day best-practice benchmark.
function estimateLeakage(arrM: number, cycledays: number): number {
  const baseLeakagePct = 0.12; // 12% of ARR at standard 60-day cycle
  const cycleMultiplier = Math.min(cycledays / 60, 3.5); // cap at 3.5× for extreme cycles
  return arrM * 1_000_000 * baseLeakagePct * cycleMultiplier;
}

function formatCurrency(val: number): string {
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
  return `$${Math.round(val / 1_000).toLocaleString()}K`;
}

// ── Ranges ───────────────────────────────────────────────────────────────────
const ARR_MIN = 1;
const ARR_MAX = 500;
const CYCLE_MIN = 15;
const CYCLE_MAX = 180;

export default function RevenueLeakCalculator() {
  const [arrM, setArrM] = useState(25);         // Annual Recurring Revenue in $M
  const [cycleDays, setCycleDays] = useState(75); // Average Sales Cycle in days

  const leakage = useMemo(() => estimateLeakage(arrM, cycleDays), [arrM, cycleDays]);

  // Leakage severity label
  const severity =
    leakage >= 10_000_000 ? { label: 'Critical', color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/30' } :
    leakage >= 3_000_000  ? { label: 'High',     color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' } :
                            { label: 'Moderate', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/30' };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/60 to-slate-950">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase mb-5">
            <TrendingDown className="w-3.5 h-3.5 text-blue-400" />
            Revenue Leakage Diagnostic
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            How Much Revenue Is Your <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
              Pipeline Silently Losing?
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Slide your Annual Revenue and Sales Cycle below for an instant diagnostic estimate.
            Our full 4-Engine Suite delivers a CFO-ready breakdown by exact pipeline stage.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-700/60 rounded-3xl p-8 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl shadow-blue-900/20">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* ── LEFT: Sliders ── */}
              <div className="space-y-10">
                {/* ARR Slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                      Annual Revenue (ARR)
                    </label>
                    <span className="font-mono font-black text-lg text-white bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-lg">
                      ${arrM}M
                    </span>
                  </div>
                  <input
                    type="range"
                    min={ARR_MIN}
                    max={ARR_MAX}
                    step={1}
                    value={arrM}
                    onChange={(e) => setArrM(Number(e.target.value))}
                    className="w-full h-2.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-slate-700"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 ${((arrM - ARR_MIN) / (ARR_MAX - ARR_MIN)) * 100}%, #334155 ${((arrM - ARR_MIN) / (ARR_MAX - ARR_MIN)) * 100}%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                    <span>$1M</span>
                    <span>$500M</span>
                  </div>
                </div>

                {/* Sales Cycle Slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                      Avg. Sales Cycle
                    </label>
                    <span className="font-mono font-black text-lg text-white bg-indigo-600/20 border border-indigo-500/30 px-3 py-1 rounded-lg">
                      {cycleDays} days
                    </span>
                  </div>
                  <input
                    type="range"
                    min={CYCLE_MIN}
                    max={CYCLE_MAX}
                    step={5}
                    value={cycleDays}
                    onChange={(e) => setCycleDays(Number(e.target.value))}
                    className="w-full h-2.5 rounded-full appearance-none cursor-pointer accent-indigo-500 bg-slate-700"
                    style={{
                      background: `linear-gradient(to right, #6366f1 ${((cycleDays - CYCLE_MIN) / (CYCLE_MAX - CYCLE_MIN)) * 100}%, #334155 ${((cycleDays - CYCLE_MIN) / (CYCLE_MAX - CYCLE_MIN)) * 100}%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                    <span>15 days</span>
                    <span>180 days</span>
                  </div>
                </div>

                {/* Methodology Note */}
                <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-800 pt-4">
                  Estimate based on industry-validated mid-funnel pipeline stall models.
                  Full diagnostic uses 23 live telemetry signals across your actual pipeline data.
                </p>
              </div>

              {/* ── RIGHT: Result Display ── */}
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Leakage Amount */}
                <div className="w-full">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Estimated Annual Revenue Leakage
                  </div>
                  <div className="relative py-6 px-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-1">
                      {formatCurrency(leakage)}
                    </div>
                    <div className="text-sm text-slate-400 font-medium">per year, estimated at risk</div>

                    {/* Severity badge */}
                    <div className={`inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${severity.bg} ${severity.color}`}>
                      <TrendingDown className="w-3 h-3" />
                      {severity.label} Leakage Risk
                    </div>
                  </div>
                </div>

                {/* What you get */}
                <div className="w-full space-y-2.5 text-sm text-left">
                  {[
                    'Exact stage-by-stage pipeline stall breakdown',
                    'Dark-funnel demand recovery opportunity estimate',
                    'CAC payback & contribution margin simulation',
                    'CFO-ready executive revenue diagnostic report',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-slate-300">
                      <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA — paired with registration flow */}
                <Link
                  to="/register"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:via-blue-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-500/50 transition-all border border-blue-400/30 group"
                >
                  <Calculator className="w-4.5 h-4.5 shrink-0" />
                  <span>Register for Full CFO-Ready Pipeline Analysis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Trust micro-anchors */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span>Mutual NDA Signed Automatically</span>
                  <span className="mx-1">•</span>
                  <span>SOC-2 Type II Certified</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

