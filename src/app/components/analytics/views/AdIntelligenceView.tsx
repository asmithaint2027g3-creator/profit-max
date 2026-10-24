import React from 'react';
import {
  Megaphone,
  TrendingUp,
  DollarSign,
  Target,
  BarChart3,
  Layers
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';
import { AdIntelligenceData } from '../../../../lib/sheet2DataService';

interface Props {
  data: AdIntelligenceData;
}

export default function AdIntelligenceView({ data }: Props) {
  const { summary, channels, campaigns, trend } = data;

  const channelColors: Record<string, string> = {
    Google: '#3b82f6',
    Meta: '#8b5cf6',
    YouTube: '#ef4444',
    Affiliate: '#f59e0b',
    Organic: '#10b981',
    Community: '#06b6d4',
    Direct: '#64748b'
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Ad Spend Attributed</span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">{summary.totalSpendAttributed}</div>
          <span className="text-xs text-slate-400">Managed cross-channel budget</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Campaign Visits</span>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Megaphone className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">{summary.totalAdVisits.toLocaleString()}</div>
          <span className="text-xs text-emerald-400 font-bold">+24.5% attribution rate</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Ad Leads Generated</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-emerald-400 font-mono">{summary.totalAdLeads.toLocaleString()}</div>
          <span className="text-xs text-slate-400">High-intent qualified inbound</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Average Conversion Rate</span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">{summary.avgConversionRate}</div>
          <span className="text-xs text-emerald-400 font-bold">+0.14% above B2B target</span>
        </div>
      </div>

      {/* 2. Channel Performance Bar Chart & Multi-Source Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visits & Leads by Channel */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-blue-900/40 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold text-white">Channel Acquisition & Leads</h4>
              <p className="text-xs text-slate-300">Google, Meta, YouTube, Affiliate, Organic, Community, Direct</p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channels} margin={{ top: 15, right: 20, left: 0, bottom: 15 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2563eb" strokeOpacity={0.2} />
                <XAxis dataKey="channel" stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} dy={6} />
                <YAxis stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} dx={-4} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0c1a32', borderColor: '#2563eb', borderRadius: '12px', fontSize: '12px', color: '#ffffff' }}
                />
                <Bar dataKey="visits" name="Visits" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                  {channels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={channelColors[entry.channel] || '#3b82f6'} />
                  ))}
                </Bar>
                <Bar dataKey="leads" name="Leads" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4-Week Acquisition Channel Trend */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-blue-900/40 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold text-white">Channel Momentum Trend</h4>
              <p className="text-xs text-slate-300">Weekly progression of primary paid & organic engines</p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend} margin={{ top: 15, right: 20, left: 0, bottom: 15 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2563eb" strokeOpacity={0.2} />
                <XAxis dataKey="date" stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} dy={6} />
                <YAxis stroke="#93c5fd" tick={{ fill: '#cbd5e1', fontSize: 11 }} dx={-4} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0c1a32', borderColor: '#2563eb', borderRadius: '12px', fontSize: '12px', color: '#ffffff' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Line type="monotone" dataKey="google" name="Google" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="meta" name="Meta" stroke="#60a5fa" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="organic" name="Organic" stroke="#38bdf8" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="direct" name="Direct" stroke="#93c5fd" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 3. Granular UTM Campaign Performance Table */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-bold text-white">UTM Campaign Performance Matrix</h4>
            <p className="text-xs text-slate-400">Granular attribution by UTM Source, Medium, Campaign and Landing Page</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase">
                <th className="pb-3 font-semibold">UTM Campaign</th>
                <th className="pb-3 font-semibold">Source / Medium</th>
                <th className="pb-3 font-semibold">Landing Page</th>
                <th className="pb-3 font-semibold">Visits</th>
                <th className="pb-3 font-semibold">Sessions</th>
                <th className="pb-3 font-semibold">Leads</th>
                <th className="pb-3 font-semibold text-right">CVR %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {campaigns.map((camp, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 font-bold text-white">{camp.campaign}</td>
                  <td className="py-3 text-slate-300">
                    <span className="text-blue-400">{camp.source}</span> / <span className="text-slate-400">{camp.medium}</span>
                  </td>
                  <td className="py-3 text-emerald-400">{camp.landingPage}</td>
                  <td className="py-3 text-slate-200">{camp.visits.toLocaleString()}</td>
                  <td className="py-3 text-slate-300">{camp.sessions.toLocaleString()}</td>
                  <td className="py-3 text-white font-bold">{camp.leads}</td>
                  <td className="py-3 text-right text-emerald-400 font-bold">{camp.cvr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
