import React from 'react';
import {
  UserPlus,
  RotateCw,
  PieChart as PieIcon,
  TrendingUp,
  Percent
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { VisitorRatioData } from '../../../../lib/sheet2DataService';

interface Props {
  data: VisitorRatioData;
}

export default function VisitorRatioView({ data }: Props) {
  const { newVisitors, returningVisitors, newVisitorPct, returningVisitorPct, trend } = data;

  const donutData = [
    { name: 'New Visitors', value: newVisitors, color: '#3b82f6' },
    { name: 'Returning Visitors', value: returningVisitors, color: '#10b981' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Four KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">New Visitors</span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <UserPlus className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">{newVisitors.toLocaleString()}</div>
          <span className="text-xs text-blue-400 font-bold">First-touch discovery</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Returning Visitors</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <RotateCw className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">{returningVisitors.toLocaleString()}</div>
          <span className="text-xs text-emerald-400 font-bold">Nurtured multi-visit intent</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">New Visitor Ratio</span>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-indigo-400 font-mono">{newVisitorPct}%</div>
          <span className="text-xs text-slate-400">Healthy top-of-funnel intake</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Returning Visitor Ratio</span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-emerald-400 font-mono">{returningVisitorPct}%</div>
          <span className="text-xs text-slate-400">Enterprise consideration depth</span>
        </div>
      </div>

      {/* 2. Donut Ratio Chart & Longitudinal Trend Line */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Donut Chart */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-blue-900/40 shadow-xl flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Audience Composition Donut</h4>
            <p className="text-xs text-slate-300 mb-4">First-party split of new vs recurring enterprise prospects</p>
          </div>

          <div className="h-60 w-full relative flex items-center justify-center my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0c1a32', borderColor: '#2563eb', borderRadius: '12px', fontSize: '12px', color: '#ffffff' }}
                  formatter={(val: any) => [Number(val).toLocaleString(), 'Visitors']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center pointer-events-none">
              <span className="text-xs font-mono text-slate-300">RETURNING</span>
              <span className="text-2xl font-extrabold text-blue-400 font-mono">{returningVisitorPct}%</span>
            </div>
          </div>

          <div className="pt-4 border-t border-blue-900/30 grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-blue-900/40 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-slate-300">New</span>
              </div>
              <span className="text-white font-bold">{newVisitorPct}%</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-blue-900/40 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-slate-300">Returning</span>
              </div>
              <span className="text-blue-400 font-bold">{returningVisitorPct}%</span>
            </div>
          </div>
        </div>

        {/* Trend Line */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-blue-900/40 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold text-white">New vs Returning Trajectory</h4>
              <p className="text-xs text-slate-300">5-week rolling retention and acquisition velocity</p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend} margin={{ top: 15, right: 20, left: 0, bottom: 15 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2563eb" strokeOpacity={0.2} />
                <XAxis dataKey="period" stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} dy={6} />
                <YAxis stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} dx={-4} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0c1a32', borderColor: '#2563eb', borderRadius: '12px', fontSize: '12px', color: '#ffffff' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Line type="monotone" dataKey="newCount" name="New Visitors" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="returningCount" name="Returning Visitors" stroke="#38bdf8" strokeWidth={2.5} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
