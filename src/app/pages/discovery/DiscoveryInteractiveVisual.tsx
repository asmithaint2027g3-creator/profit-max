import React, { useState } from 'react';
import {
  TrendingUp,
  Target,
  DollarSign,
  Activity,
  Layers,
  Search,
  Sparkles,
  ShieldCheck,
  Cpu,
  BarChart3,
  Network,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Filter,
  Play,
  Clock,
  ChevronRight,
  Eye,
  Sliders,
  Check,
  Scale,
  Building2,
  Rocket
} from 'lucide-react';
import { DiscoveryNode } from '../../../data/discoveryNodesData';

interface DiscoveryInteractiveVisualProps {
  node: DiscoveryNode;
}

export default function DiscoveryInteractiveVisual({ node }: DiscoveryInteractiveVisualProps) {
  // Local state for interactive simulators across visual types
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [simulatedMetric, setSimulatedMetric] = useState<number>(24);

  // Render bespoke visual based on node.visualType
  return (
    <div className="relative rounded-3xl bg-slate-900 border border-slate-800 text-white p-6 sm:p-10 shadow-2xl overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Operational Telemetry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {node.visualTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            {node.visualSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">Live Telemetry Feed</span>
        </div>
      </div>

      {/* Bespoke Visuals by Type */}
      <div className="relative z-10">
        {/* 1. PROFIT POOL MATRIX (Micro-Market) */}
        {node.visualType === 'profit-pool-matrix' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                {['all', 'high-margin', 'defensible'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                      activeFilter === f
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {f.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="text-xs font-mono text-slate-400">
                Segment Contribution Spread: <span className="text-emerald-400 font-bold">4.2×</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Micro-Segment Alpha (Cloud FinOps)', tam: '$420M', margin: '34%', defensibility: '9.2/10', status: 'OWNED CORE', rec: 'Allocate 60% Capacity', highlight: true },
                { name: 'Broad Enterprise Legacy', tam: '$1.8B', margin: '9%', defensibility: '4.1/10', status: 'DILUTIVE', rec: 'Planned Exit / Reprice', highlight: false },
                { name: 'Mid-Market Compliance', tam: '$650M', margin: '22%', defensibility: '7.5/10', status: 'SECONDARY', rec: 'Self-Serve Inbound', highlight: false },
              ].map((seg, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 border transition-all ${
                    seg.highlight
                      ? 'bg-gradient-to-b from-blue-900/40 to-slate-800/80 border-blue-500/80 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-800/50 border-slate-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400">Cohort 0{idx + 1}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      seg.highlight ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {seg.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-4">{seg.name}</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                    <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/40">
                      <span className="text-slate-400 block text-[10px]">PROFIT MARGIN</span>
                      <span className={`text-base font-bold ${seg.highlight ? 'text-emerald-400' : 'text-slate-200'}`}>{seg.margin}</span>
                    </div>
                    <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/40">
                      <span className="text-slate-400 block text-[10px]">DEFENSIBILITY</span>
                      <span className="text-base font-bold text-blue-400">{seg.defensibility}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center justify-between pt-3 border-t border-slate-700/50">
                    <span className="text-[11px] text-slate-400">Directive:</span>
                    <span className="font-semibold text-blue-300 text-[11px]">{seg.rec}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. VELOCITY TELEMETRY (Demand Chain) */}
        {node.visualType === 'velocity-telemetry' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { stage: '01. Inbound Surge', velocity: '1.2 Days', drop: '4%', status: 'HEALTHY' },
                { stage: '02. Discovery Audit', velocity: '4.8 Days', drop: '12%', status: 'OPTIMAL' },
                { stage: '03. Technical Proposal', velocity: '6.4 Days', drop: '31%', status: 'ALERT: STALL DETECTED', alert: true },
                { stage: '04. Executive Contract', velocity: '5.1 Days', drop: '8%', status: 'HEALTHY' }
              ].map((s, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${
                    s.alert
                      ? 'bg-amber-950/30 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-800/40 border-slate-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-slate-400">{s.stage}</span>
                    {s.alert && <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <div className="text-lg font-bold text-white font-mono">{s.velocity}</div>
                  <div className="text-xs text-slate-400 mt-1 flex justify-between">
                    <span>Drop: {s.drop}</span>
                    <span className={s.alert ? 'text-amber-400 font-bold' : 'text-emerald-400'}>{s.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">Automated Stall Alert Trigger: Proposal Stage {'>'} 5 Days</div>
                  <div className="text-[11px] text-slate-400">Action: CFO Value Realization Counter-Case auto-dispatched to buyer VP Finance</div>
                </div>
              </div>
              <button className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all">
                Simulate Intervention
              </button>
            </div>
          </div>
        )}

        {/* 3. RISK CONCENTRATION (Channel) */}
        {node.visualType === 'risk-concentration' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">Current Distribution Exposure</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Third-Party Marketplace</span>
                      <span className="text-amber-400 font-bold">68% ($14.2M)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full w-[68%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Direct Enterprise Outbound</span>
                      <span className="text-blue-400 font-bold">22% ($4.6M)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[22%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Certified Agency Network</span>
                      <span className="text-emerald-400 font-bold">10% ($2.1M)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[10%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-800/60 border border-blue-500/40">
                <h4 className="text-xs font-mono text-blue-300 uppercase tracking-wider mb-4">12-Month Target Balanced Architecture</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Third-Party Marketplace (Capped)</span>
                      <span className="text-slate-300 font-bold">35% (-33 pts)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full w-[35%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Owned Direct Pipeline</span>
                      <span className="text-emerald-400 font-bold">45% (+23 pts)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[45%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Strategic Alliances</span>
                      <span className="text-blue-400 font-bold">20% (+10 pts)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[20%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. PRICING ARCHITECTURE (Willingness-to-Pay) */}
        {node.visualType === 'pricing-architecture' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { tier: 'Starter Pro', list: '$4,500/mo', floor: '$4,000/mo', ceilingDiscount: '11%', fence: 'Standard API & 5 Workspaces' },
                { tier: 'Enterprise Scale', list: '$14,000/mo', floor: '$12,500/mo', ceilingDiscount: '10%', fence: 'Dedicated Infrastructure & Audit Logs', active: true },
                { tier: 'Strategic Custom', list: '$38,000/mo', floor: '$35,000/mo', ceilingDiscount: '8%', fence: 'Custom SLA & Unlimited Model Runs' }
              ].map((t, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    t.active
                      ? 'bg-blue-900/40 border-blue-400 shadow-xl shadow-blue-500/10'
                      : 'bg-slate-800/40 border-slate-700'
                  }`}
                >
                  <div className="text-xs font-mono text-blue-400 mb-1">{t.tier}</div>
                  <div className="text-2xl font-bold text-white font-mono mb-3">{t.list}</div>
                  <div className="space-y-2 text-xs font-mono text-slate-300 mb-4 pb-4 border-b border-slate-700/60">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Hard Floor:</span>
                      <span className="text-emerald-400 font-bold">{t.floor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Max Discount:</span>
                      <span className="text-amber-400 font-bold">{t.ceilingDiscount}</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <span className="text-slate-300 font-semibold">Value Fence: </span>
                    {t.fence}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">CRM Price Floor Enforcement: Active</span>
              <span className="text-emerald-400 font-bold">100% Deals Routed Through Guardrails</span>
            </div>
          </div>
        )}

        {/* 5. PROPENSITY RADAR (Customer Propensity) */}
        {node.visualType === 'propensity-radar' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Nightly Signal Fusion Stream</h4>
                  <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Scored: 12,480 TAM</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { company: 'Apex Logistics (Tier 1)', signal: 'Surge: Enterprise API Migration + 4 Cloud Hires', decile: 'Decile 1', score: '98/100', route: 'Assigned to SDR Lead' },
                    { company: 'Nova MedTech (Tier 1)', signal: 'Competitor Displacement: Contract renewal in 60d', decile: 'Decile 1', score: '95/100', route: 'Context Battlecard Sent' },
                    { company: 'Vanguard Retail (Tier 2)', signal: 'Web Telemetry: 14 Pricing page visits in 48h', decile: 'Decile 2', score: '88/100', route: 'Automated Cadence #3' },
                  ].map((row, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <div className="font-bold text-white flex items-center gap-2">
                          <span>{row.company}</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">{row.decile}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">{row.signal}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-blue-400">{row.score}</div>
                        <div className="text-[10px] text-slate-400">{row.route}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/40 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono text-blue-300 uppercase tracking-wider mb-2">Decile 1 Conversion</h4>
                  <div className="text-4xl font-extrabold text-white font-mono mb-1">11.4%</div>
                  <p className="text-xs text-slate-300 mb-4">Meeting booking conversion rate on top-decile intent signals vs 1.8% baseline.</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-500/40 text-xs font-mono text-blue-200">
                  Signal-to-Touch: <span className="font-bold text-white">&lt;4 Hours</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. TRIGGER FLOW (Usage-to-Revenue) */}
        {node.visualType === 'trigger-flow' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
              {[
                { step: '01. Usage Event', desc: 'User completes 4th automated workflow run', badge: 'Telemetry Ingest' },
                { step: '02. Threshold Hit', desc: 'Account reaches 85% monthly capacity tier', badge: 'Milestone Rule' },
                { step: '03. Play Fired', desc: 'In-app contextual upgrade modal + CSM prompt', badge: 'Trigger Action' },
                { step: '04. Expansion Won', desc: 'Upgrade to Scale Plan ($850/mo ARR increase)', badge: 'Contract Signed' },
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">{s.badge}</span>
                  <h4 className="text-sm font-bold text-white mb-2">{s.step}</h4>
                  <p className="text-xs text-slate-400">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-wrap items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Average Trigger-to-Upgrade Latency:</span>
              <span className="text-emerald-400 font-bold">&lt;14 Days (42% Faster Than Sales-Assist Alone)</span>
            </div>
          </div>
        )}

        {/* 7. COMPETITOR BATTLECARD (Competitor) */}
        {node.visualType === 'competitor-battlecard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Rival Teardown</div>
                <h4 className="text-base font-bold text-white mb-3">Legacy Competitor X</h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-500/30 text-rose-300">
                    <span className="font-bold block">Fatal Vulnerability:</span>
                    3-Month Migration Delay + $45k Hidden Implementation Surcharges
                  </div>
                  <div className="p-2 rounded-lg bg-blue-950/30 border border-blue-500/30 text-blue-300">
                    <span className="font-bold block">Trap-Setting Question:</span>
                    "What percentage of your clients incur custom connector fees in Year 1?"
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Deal Context</div>
                <h4 className="text-base font-bold text-white mb-3">Live Battlecard Trigger</h4>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-700">
                    <span>Opp Tagged:</span>
                    <span className="text-amber-400 font-bold">Competitor X Tagged</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700">
                    <span>Counter-Play:</span>
                    <span className="text-emerald-400">Playbook #4 Auto-Attached</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Detection Speed:</span>
                    <span className="text-white">&lt;10 Days from Signal</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-800/60 border border-blue-500/40 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-blue-300 uppercase tracking-wider mb-1">Win Rate vs Incumbent</div>
                  <div className="text-3xl font-extrabold text-white font-mono mb-2">+21%</div>
                  <p className="text-xs text-slate-300">Direct head-to-head win rate across 65 competitive enterprise bids.</p>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 mt-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Competitive Deals Armed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 8. ECOSYSTEM GRAVITY (Competitive Ecosystem) */}
        {node.visualType === 'ecosystem-gravity' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Platform Embedding Gravity</h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Hyperscaler Cloud Marketplace</div>
                      <div className="text-slate-400 text-[11px]">Co-sell credit drawdown status</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">TIER 1 ANCHOR</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Global System Integrators (SIs)</div>
                      <div className="text-slate-400 text-[11px]">3 Enterprise practices certified</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-400 border border-blue-500/40">EXPANDING</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Structural Position Score</h4>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-slate-700">
                    <span className="text-slate-400">Category Players Mapped:</span>
                    <span className="text-white font-bold">100% (48 Vendors)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-700">
                    <span className="text-slate-400">Active Strategic Partnerships:</span>
                    <span className="text-emerald-400 font-bold">4 Strategic Closed</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Rival Move Counter Speed:</span>
                    <span className="text-blue-400 font-bold">&lt;30 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 9. PACKAGING LADDER (Offer & Revenue Architecture) */}
        {node.visualType === 'packaging-ladder' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Core Edition', margin: '71%', valueMetric: 'Up to 50k Events/Mo', fence: 'Self-Serve Onboarding', status: 'Entry' },
                { name: 'Scale Architecture', margin: '82%', valueMetric: 'Up to 500k Events/Mo', fence: 'Dedicated SLA & Webhooks', status: 'Growth', active: true },
                { name: 'Enterprise Governance', margin: '89%', valueMetric: 'Unlimited Events + Custom Vectors', fence: 'Custom Security & Single-Tenant', status: 'Premium' },
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    tier.active
                      ? 'bg-blue-900/40 border-blue-400 shadow-xl shadow-blue-500/10'
                      : 'bg-slate-800/40 border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-blue-400">{tier.status}</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">{tier.margin} Margin</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{tier.name}</h4>
                  <div className="text-xs text-slate-300 font-mono mb-3">{tier.valueMetric}</div>
                  <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-700">
                    <span className="text-slate-300">Feature Fence: </span>
                    {tier.fence}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300">Gross Margin Points Recovered:</span>
              <span className="text-emerald-400 font-bold">+12.8 pts in 2 Quarters</span>
            </div>
          </div>
        )}

        {/* 10. COST-TO-SERVE MATRIX (Cost-to-Serve & Capacity) */}
        {node.visualType === 'cost-to-serve-matrix' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Customer Margin Quartile Breakdown</h4>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex justify-between items-center">
                    <span className="text-emerald-300">Top 25% Accounts</span>
                    <span className="text-white font-bold">+78% Contribution Margin</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex justify-between items-center">
                    <span className="text-blue-300">Mid 50% Accounts</span>
                    <span className="text-white font-bold">+44% Contribution Margin</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/40 flex justify-between items-center">
                    <span className="text-rose-300">Bottom 25% Accounts (Remediated)</span>
                    <span className="text-rose-400 font-bold">-14% Converted to +28%</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Fulfillment Capacity Stress Test</h4>
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">Current Onboarding Throughput:</span>
                      <span className="text-emerald-400 font-bold">58% Capacity Safe</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[58%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">2× Surge Stress Simulation:</span>
                      <span className="text-amber-400 font-bold">84% Capacity Bottleneck Detected</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full w-[84%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 11. ALLIANCE ROI DASHBOARD (Alliance & Co-Sell) */}
        {node.visualType === 'alliance-roi-dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Attributed Partner Sourced</div>
                <div className="text-2xl font-bold text-white font-mono mt-1">$9.2M ARR</div>
                <div className="text-xs text-emerald-400 mt-1 font-mono">28% of total net-new pipeline</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-[10px] font-mono text-slate-400 uppercase">MDF Investment ROI</div>
                <div className="text-2xl font-bold text-blue-400 font-mono mt-1">15.3×</div>
                <div className="text-xs text-slate-400 mt-1 font-mono">$15.30 return per $1 spent</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Active Strategic Alliances</div>
                <div className="text-2xl font-bold text-white font-mono mt-1">3 Engines</div>
                <div className="text-xs text-slate-400 mt-1 font-mono">42 unproductive logos pruned</div>
              </div>
            </div>
          </div>
        )}

        {/* 12. PLATFORM RISK MATRIX (Platform & Adjacency) */}
        {node.visualType === 'platform-risk-matrix' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Host Platform Dependency Shift</h4>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-slate-700">
                    <span className="text-slate-400">Baseline Primary Platform Dependency:</span>
                    <span className="text-rose-400 font-bold">92% Exposure</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-700">
                    <span className="text-slate-400">12-Month Decoupled State:</span>
                    <span className="text-emerald-400 font-bold">48% Exposure (Halved)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Direct API Ownership:</span>
                    <span className="text-blue-400 font-bold">100% First-Party Data</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/40 p-5 rounded-2xl">
                <h4 className="text-xs font-mono text-blue-300 uppercase tracking-wider mb-2">Adjacent Vertical Yield</h4>
                <div className="text-3xl font-extrabold text-white font-mono mb-2">$6.8M ARR</div>
                <p className="text-xs text-slate-300">Live second vertical activated in 12 months with verified positive contribution margin.</p>
              </div>
            </div>
          </div>
        )}

        {/* 13. VALIDATION FUNNEL (New Offering) */}
        {node.visualType === 'validation-funnel' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { stage: '1. Concept Mining', count: '8 Concepts', status: 'Tested' },
                { stage: '2. Buyer Willingness', count: '64% Confirmed', status: 'Evidence Locked' },
                { stage: '3. Pre-Build LOIs', count: '$820k Signed', status: 'Capital Committed' },
                { stage: '4. Engineering Sprint', count: 'Zero Risk', status: 'Day-1 Revenue' },
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">{s.stage}</div>
                  <div className="text-lg font-bold text-white font-mono mt-1">{s.count}</div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">{s.status}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 14. MARKET WAR-ROOM (New Market) */}
        {node.visualType === 'market-war-room' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { market: 'UK & Western Europe', profitPool: '$840M', defensibility: '8.4/10', cacRatio: '1.1×', winner: true },
                { market: 'Nordics FinTech', profitPool: '$310M', defensibility: '6.2/10', cacRatio: '1.6×', winner: false },
                { market: 'Asia-Pacific Core', profitPool: '$920M', defensibility: '4.8/10', cacRatio: '2.4×', winner: false },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${
                    m.winner
                      ? 'bg-blue-900/40 border-blue-400 shadow-xl'
                      : 'bg-slate-800/40 border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-slate-400">Candidate 0{idx + 1}</span>
                    {m.winner && <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">WAR-ROOM WINNER</span>}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-3">{m.market}</h4>
                  <div className="space-y-1 text-xs font-mono text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Profit Pool:</span>
                      <span className="font-bold text-white">{m.profitPool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Defensibility:</span>
                      <span className="font-bold text-blue-300">{m.defensibility}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">CAC Ratio:</span>
                      <span className="font-bold text-emerald-400">{m.cacRatio} of Core</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 15. CHANNEL CONFLICT MATRIX (New Channel) */}
        {node.visualType === 'channel-conflict-matrix' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Territory Conflict Rules of Engagement</h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Named Accounts (&gt;1,000 Employees):</span>
                    <span className="font-mono text-blue-400 font-bold">100% Direct Exclusive</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Mid-Market Commercial:</span>
                    <span className="font-mono text-emerald-400 font-bold">Deal Registration Protected</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Poaching Dispute Resolution:</span>
                    <span className="font-mono text-white font-bold">&lt;24 Hour Auto-Mediation</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/40 p-5 rounded-2xl">
                <h4 className="text-xs font-mono text-blue-300 uppercase tracking-wider mb-2">Net New Incremental ARR</h4>
                <div className="text-3xl font-extrabold text-white font-mono mb-2">$8.5M ARR</div>
                <p className="text-xs text-slate-300">Generated within 12 months with 0% cannibalization of mature direct sales quotas.</p>
              </div>
            </div>
          </div>
        )}

        {/* 16. LAUNCH COMMAND TIMELINE (New Product Launch) */}
        {node.visualType === 'launch-command-timeline' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { phase: 'T-6 Weeks', title: 'Target Ingestion', desc: 'Propensity-ranked First-200 accounts loaded', status: 'Pre-Flight' },
                { phase: 'T-2 Weeks', title: 'War-Room Training', desc: 'Price floors locked & CFO battlecards armed', status: 'Ready' },
                { phase: 'Day 0', title: 'Command Go-Live', desc: 'Real-time velocity telemetry streaming', status: 'Live 24/7' },
                { phase: 'Day 45 / 90', title: 'Kill/Scale Gates', desc: 'Quota benchmarks audited: 3.4× pipeline achieved', status: 'Scaled' },
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <div className="text-[10px] font-mono text-blue-400 uppercase font-bold">{step.phase}</div>
                  <h4 className="text-sm font-bold text-white mt-1">{step.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                  <div className="text-[10px] font-mono text-emerald-400 font-bold mt-3">{step.status}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300">Launch Velocity Multiplier:</span>
              <span className="text-emerald-400 font-bold">3.4× First-Quarter Sales Quota in 60 Days</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer reassurance */}
      <div className="relative z-10 mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>ORIGIN Telemetry Standard: Real-time telemetry backed by locked commercial targets</span>
        </div>
        <div>
          <span>Structure: <span className="text-white font-bold">{node.structureType}</span></span>
        </div>
      </div>
    </div>
  );
}
