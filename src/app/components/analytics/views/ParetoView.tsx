import React from 'react';
import {
  BarChart2,
  TrendingUp,
  Award,
  Filter
} from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from 'recharts';
import { ParetoData } from '../../../../lib/sheet2DataService';

interface Props {
  data: ParetoData;
}

export default function ParetoView({ data }: Props) {
  const { threshold80Index, totalVolume, topEntitiesContributionPct, items } = data;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Measured Volume</span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <BarChart2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">{totalVolume.toLocaleString()}</div>
          <span className="text-xs text-slate-400">Aggregated events across pages & sources</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">80% Threshold Reached At</span>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Filter className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-indigo-400 font-mono">Top {threshold80Index} Entities</div>
          <span className="text-xs text-slate-400">Drive ~80% of total revenue momentum</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Vital Few Concentration</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-emerald-400 font-mono">{topEntitiesContributionPct}%</div>
          <span className="text-xs text-slate-400">Classic 80/20 power law validated</span>
        </div>
      </div>

      {/* 2. Pareto Dual-Axis Visualization */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-blue-900/40 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h4 className="text-lg font-bold text-white">Pareto 80/20 Activity Curve</h4>
            <p className="text-xs text-slate-300">
              Bars denote individual contribution; line traces cumulative impact against the 80% benchmark line
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 text-blue-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" /> Individual Volume
            </span>
            <span className="inline-flex items-center gap-1.5 text-amber-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Cumulative %
            </span>
            <span className="inline-flex items-center gap-1.5 text-rose-400">
              <span className="w-3 border-t-2 border-dashed border-rose-500" /> 80% Cutoff
            </span>
          </div>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={items} margin={{ top: 15, right: 35, left: 10, bottom: 35 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2563eb" strokeOpacity={0.2} />
              <XAxis dataKey="name" stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} angle={-15} textAnchor="end" dy={6} />
              <YAxis yAxisId="left" stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} />
              <YAxis yAxisId="right" orientation="right" stroke="#f59e0b" domain={[0, 100]} unit="%" tick={{ fill: '#fcd34d', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0c1a32', borderColor: '#2563eb', borderRadius: '12px', fontSize: '12px', color: '#ffffff' }}
                formatter={(val: any, name: string) => [
                  name === 'cumulativePct' ? `${val}%` : Number(val).toLocaleString(),
                  name === 'cumulativePct' ? 'Cumulative %' : 'Contribution'
                ]}
              />
              <ReferenceLine yAxisId="right" y={80} stroke="#ef4444" strokeDasharray="4 4" label={{ value: '80% Threshold', fill: '#ef4444', fontSize: 10, position: 'insideTopLeft' }} />
              <Bar yAxisId="left" dataKey="contribution" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={34} />
              <Line yAxisId="right" type="monotone" dataKey="cumulativePct" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 4 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Pareto Breakdown Table */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-bold text-white">Entity Cumulative Contribution Ledger</h4>
            <p className="text-xs text-slate-400">Entities sorted by individual contribution weight</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase">
                <th className="pb-3 font-semibold">Entity Name</th>
                <th className="pb-3 font-semibold">Type</th>
                <th className="pb-3 font-semibold">Contribution</th>
                <th className="pb-3 font-semibold">Individual Share</th>
                <th className="pb-3 font-semibold text-right">Cumulative %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {items.map((item, idx) => {
                const individualShare = ((item.contribution / totalVolume) * 100).toFixed(1);
                const isUnder80 = item.cumulativePct <= 80;
                return (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 font-bold text-white">{item.name}</td>
                    <td className="py-3 text-slate-400 uppercase text-[11px]">{item.type}</td>
                    <td className="py-3 text-blue-400 font-bold">{item.contribution.toLocaleString()}</td>
                    <td className="py-3 text-slate-300">{individualShare}%</td>
                    <td className="py-3 text-right">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isUnder80
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.cumulativePct}% {isUnder80 ? '★ Core 80%' : ''}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
