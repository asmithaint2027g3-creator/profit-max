import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Target,
  TrendingUp,
  BarChart3,
  Layers,
  Compass,
  BookOpen,
  Workflow,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BrainCircuit,
  Zap,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Gauge,
  Sliders,
  Activity,
  Rocket,
  Map,
  Clock,
  DollarSign,
  GitBranch,
  PieChart,
  Trophy,
  Briefcase,
  Settings,
  Building2
} from 'lucide-react';
import {
  SALES_ACCELERATION_SECTIONS,
  SALES_ACCELERATION_OVERVIEW,
  SALES_ACCELERATION_METRICS,
  SalesHubSection
} from '../../../data/salesAccelerationHubData';
import { trackEvent } from '../../../lib/analytics';

// ── Icon map for overview disciplines
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  BookOpen,
  Gauge,
  Sliders,
  Workflow,
  Target,
  Map,
  Rocket
};

// ── Badge color helper
function getBadgeClasses(color: string): { bg: string; text: string; border: string } {
  switch (color) {
    case 'blue':     return { bg: 'bg-blue-100',    text: 'text-blue-700',    border: 'border-blue-200' };
    case 'emerald':  return { bg: 'bg-emerald-100',  text: 'text-emerald-700',  border: 'border-emerald-200' };
    case 'violet':   return { bg: 'bg-violet-100',   text: 'text-violet-700',   border: 'border-violet-200' };
    case 'amber':    return { bg: 'bg-amber-100',    text: 'text-amber-700',    border: 'border-amber-200' };
    case 'cyan':     return { bg: 'bg-cyan-100',     text: 'text-cyan-700',     border: 'border-cyan-200' };
    case 'rose':     return { bg: 'bg-rose-100',     text: 'text-rose-700',     border: 'border-rose-200' };
    case 'indigo':   return { bg: 'bg-indigo-100',   text: 'text-indigo-700',   border: 'border-indigo-200' };
    case 'teal':     return { bg: 'bg-teal-100',     text: 'text-teal-700',     border: 'border-teal-200' };
    default:         return { bg: 'bg-slate-100',    text: 'text-slate-700',    border: 'border-slate-200' };
  }
}

// ── Visual: Methodology flow
function MethodologyVisual() {
  const stages = ['Research', 'Discovery', 'Qualification', 'Value Alignment', 'Stakeholder Engagement', 'Solution Validation', 'Negotiation', 'Closing'];
  return (
    <div className="p-5 rounded-2xl bg-slate-900 text-white overflow-x-auto">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400">Sales Methodology Flow</span>
        <span className="text-[10px] font-mono text-slate-400">8-Stage Process</span>
      </div>
      <div className="flex items-center gap-0 min-w-max pb-1">
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black mb-1 ${i < 4 ? 'bg-blue-600' : 'bg-indigo-600'}`}>
                {i + 1}
              </div>
              <div className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-center">
                <span className="text-[10px] font-bold text-slate-200 whitespace-nowrap">{stage}</span>
              </div>
            </div>
            {i < stages.length - 1 && (
              <ChevronRight className="w-4 h-4 text-slate-500 mx-0.5 shrink-0 mb-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Visual: Playbook grid
function PlaybookVisual() {
  const playbooks = [
    { title: 'Prospecting', stage: 'Top of Funnel', color: 'bg-blue-600' },
    { title: 'Discovery', stage: 'Early Stage', color: 'bg-indigo-600' },
    { title: 'Qualification', stage: 'Early Stage', color: 'bg-violet-600' },
    { title: 'Sales Engagement', stage: 'Mid Stage', color: 'bg-purple-600' },
    { title: 'Objection Handling', stage: 'Mid Stage', color: 'bg-rose-600' },
    { title: 'Proposal', stage: 'Late Stage', color: 'bg-amber-600' },
    { title: 'Negotiation', stage: 'Late Stage', color: 'bg-orange-600' },
    { title: 'Expansion', stage: 'Post-Sale', color: 'bg-emerald-600' }
  ];
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">Sales Playbook Library</span>
        <span className="text-[10px] font-mono text-slate-400">8 Execution Guides</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {playbooks.map((pb) => (
          <div key={pb.title} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className={`w-6 h-6 rounded-lg ${pb.color} flex items-center justify-center`}>
              <BookOpen className="w-3.5 h-3.5 text-white" />
            </div>
            <p className="text-xs font-bold text-slate-900 leading-tight">{pb.title}</p>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">{pb.stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Visual: Velocity equation
function VelocityVisual() {
  return (
    <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-400">Sales Velocity Formula</span>
        <span className="text-[10px] font-mono text-slate-400">Revenue Rate Model</span>
      </div>
      <div className="p-4 rounded-xl bg-slate-800 border border-violet-500/40">
        <p className="text-xs font-mono text-center text-slate-300 mb-2">Sales Velocity =</p>
        <div className="text-center space-y-1">
          <p className="text-sm font-black text-white font-mono">
            (Opportunities × Win Rate × Avg Deal Value)
          </p>
          <div className="border-t border-slate-600 pt-1">
            <p className="text-sm font-black text-violet-400 font-mono">Average Sales Cycle Length</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Opportunities', desc: 'Qualified pipeline volume', color: 'text-blue-400' },
          { label: 'Win Rate', desc: 'Conversion of qualified deals', color: 'text-emerald-400' },
          { label: 'Deal Value', desc: 'Average closed-won size', color: 'text-amber-400' },
          { label: 'Cycle Length', desc: 'Days from create to close', color: 'text-rose-400' }
        ].map((driver) => (
          <div key={driver.label} className="p-3 rounded-xl bg-slate-800 border border-slate-700">
            <span className={`text-xs font-bold ${driver.color} block`}>{driver.label}</span>
            <span className="text-[11px] text-slate-400">{driver.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Visual: Pipeline funnel
function PipelineVisual() {
  const stages = [
    { label: 'Target Accounts', width: 'w-full', bg: 'bg-blue-600' },
    { label: 'Qualified Leads', width: 'w-5/6', bg: 'bg-indigo-600' },
    { label: 'Discovery Meetings', width: 'w-4/6', bg: 'bg-violet-600' },
    { label: 'Qualified Opportunities', width: 'w-3/6', bg: 'bg-purple-600' },
    { label: 'Proposal / Demo', width: 'w-2/6', bg: 'bg-rose-600' },
    { label: 'Negotiation', width: 'w-1/4', bg: 'bg-amber-600' },
    { label: 'Closed Won', width: 'w-1/6', bg: 'bg-emerald-600' }
  ];
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">Pipeline Stage Funnel</span>
        <span className="text-[10px] font-mono text-slate-400">Illustrative</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        {stages.map((stage) => (
          <div key={stage.label} className={`${stage.width} flex items-center justify-center py-2 rounded-lg ${stage.bg} transition-all`}>
            <span className="text-[10px] font-bold text-white">{stage.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Visual: RevOps hub-and-spoke
function RevOpsVisual() {
  return (
    <div className="p-5 rounded-2xl bg-slate-900 text-white">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">Revenue Operations Architecture</span>
        <span className="text-[10px] font-mono text-slate-400">Connected System</span>
      </div>
      <div className="relative flex items-center justify-center min-h-[180px]">
        {/* Center hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-2xl bg-blue-600 border-2 border-blue-400 flex flex-col items-center justify-center shadow-lg z-10">
            <Workflow className="w-6 h-6 text-white mb-1" />
            <span className="text-[10px] font-black text-white text-center leading-tight">Revenue<br/>Operations</span>
          </div>
        </div>
        {/* Spokes */}
        <div className="w-full h-full flex items-center justify-between px-2">
          <div className="p-3 rounded-xl bg-slate-800 border border-cyan-500/40 text-center w-20">
            <TrendingUp className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <span className="text-[10px] font-bold text-slate-200">Marketing</span>
          </div>
          <div className="flex flex-col gap-16">
            <div className="p-3 rounded-xl bg-slate-800 border border-emerald-500/40 text-center w-20">
              <Target className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="text-[10px] font-bold text-slate-200">Sales</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800 border border-amber-500/40 text-center w-20">
              <DollarSign className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-[10px] font-bold text-slate-200">Finance</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-800 border border-violet-500/40 text-center w-20">
            <Users className="w-4 h-4 text-violet-400 mx-auto mb-1" />
            <span className="text-[10px] font-bold text-slate-200">Customer<br/>Success</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Visual: ABS scoring matrix 2×2
function AbsVisual() {
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">Account Scoring Matrix</span>
        <span className="text-[10px] font-mono text-slate-400">Illustrative</span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1 justify-end pr-2">
          <span className="text-[10px] text-slate-500">Account Fit →</span>
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col justify-between pr-1">
            <span className="text-[10px] text-slate-500 writing-mode-vertical">↑ Revenue Potential</span>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-1">
            <div className="p-3 rounded-xl bg-emerald-50 border-2 border-emerald-400 space-y-1">
              <div className="text-[10px] font-black text-emerald-700 uppercase">Tier 1 Priority</div>
              <div className="text-[11px] text-emerald-600">High Fit / High Potential</div>
              <div className="text-[10px] font-mono text-emerald-500">Focus Maximum Resources</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-300 space-y-1">
              <div className="text-[10px] font-black text-blue-700 uppercase">Tier 3 Opportunistic</div>
              <div className="text-[11px] text-blue-600">Low Fit / High Potential</div>
              <div className="text-[10px] font-mono text-blue-500">Selective Engagement</div>
            </div>
            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-300 space-y-1">
              <div className="text-[10px] font-black text-indigo-700 uppercase">Tier 2 Development</div>
              <div className="text-[11px] text-indigo-600">High Fit / Low Potential</div>
              <div className="text-[10px] font-mono text-indigo-500">Long-Term Development</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-300 space-y-1">
              <div className="text-[10px] font-black text-slate-600 uppercase">Tier 4 Deprioritize</div>
              <div className="text-[11px] text-slate-500">Low Fit / Low Potential</div>
              <div className="text-[10px] font-mono text-slate-400">Minimal Investment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Visual: Territory allocation
function TerritoryVisual() {
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">Territory Allocation Model</span>
        <span className="text-[10px] font-mono text-rose-600 font-bold">ILLUSTRATIVE ONLY</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { name: 'Territory A', accounts: '45–55', segment: 'Enterprise North', color: 'border-blue-400 bg-blue-50' },
          { name: 'Territory B', accounts: '50–60', segment: 'Enterprise South', color: 'border-indigo-400 bg-indigo-50' },
          { name: 'Territory C', accounts: '40–50', segment: 'Mid-Market West', color: 'border-violet-400 bg-violet-50' }
        ].map((t) => (
          <div key={t.name} className={`p-4 rounded-xl border-2 ${t.color} space-y-2 text-center`}>
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto">
              <Map className="w-4 h-4 text-slate-600" />
            </div>
            <p className="text-xs font-bold text-slate-900">{t.name}</p>
            <p className="text-[11px] text-slate-600">{t.segment}</p>
            <div className="pt-1 border-t border-white/60">
              <p className="text-[10px] text-slate-500">Target Accounts</p>
              <p className="text-xs font-mono font-bold text-slate-800">{t.accounts}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-slate-400 text-center font-mono italic">
        Illustrative territory model only. Actual account counts and targets vary by organization.
      </p>
    </div>
  );
}

// ── Visual: Productivity time bars
function ProductivityVisual() {
  const activities = [
    { label: 'Customer-Facing Selling', pct: 35, color: 'bg-emerald-500' },
    { label: 'Prospect Research', pct: 15, color: 'bg-blue-500' },
    { label: 'Meeting Preparation', pct: 10, color: 'bg-indigo-500' },
    { label: 'Administrative Work', pct: 25, color: 'bg-rose-500' },
    { label: 'Internal Meetings', pct: 10, color: 'bg-amber-500' },
    { label: 'Other Activities', pct: 5, color: 'bg-slate-400' }
  ];
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">Time Allocation Model</span>
        <span className="text-[10px] font-mono text-rose-600 font-bold">HYPOTHETICAL ILLUSTRATION</span>
      </div>
      <div className="space-y-2">
        {activities.map((act) => (
          <div key={act.label} className="space-y-0.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-700 font-medium">{act.label}</span>
              <span className="font-mono font-bold text-slate-600">{act.pct}%</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full ${act.color} rounded-full`} style={{ width: `${act.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-slate-400 font-mono italic">
        Hypothetical illustration. Actual time allocation varies significantly by organization, role and industry.
      </p>
    </div>
  );
}

// ── Section visual dispatcher
function SectionVisual({ type }: { type: SalesHubSection['visualType'] }) {
  switch (type) {
    case 'methodology':   return <MethodologyVisual />;
    case 'playbook':      return <PlaybookVisual />;
    case 'velocity':      return <VelocityVisual />;
    case 'pipeline':      return <PipelineVisual />;
    case 'revops':        return <RevOpsVisual />;
    case 'abs':           return <AbsVisual />;
    case 'territory':     return <TerritoryVisual />;
    case 'productivity':  return <ProductivityVisual />;
    default:              return null;
  }
}

// ── Main Page Component
export default function SalesAccelerationHubPage() {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState<string>(SALES_ACCELERATION_SECTIONS[0].id);
  const [activeSubTab, setActiveSubTab] = useState<{ [key: string]: 'challenges' | 'frameworks' | 'kpis' | 'connection' }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sales Acceleration Hub | ProfitMachines Revenue Intelligence';
    trackEvent({ eventName: 'PAGE_VIEW_SALES_ACCELERATION_HUB', category: 'NAVIGATION' });

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setActiveSectionId(targetId);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const scrollToAnchor = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const setTabForSection = (sectionId: string, tab: 'challenges' | 'frameworks' | 'kpis' | 'connection') => {
    setActiveSubTab(prev => ({ ...prev, [sectionId]: tab }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                  <Rocket className="w-3.5 h-3.5 text-blue-400" />
                  Autonomous Revenue OS
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-xs font-bold tracking-widest uppercase ml-2">
                  Sales Acceleration Hub
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                  Build a More Predictable,{' '}
                  <br />
                  Efficient and Intelligent{' '}
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    Sales Engine.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-slate-300 font-heading">
                  Eight proven disciplines to systematically improve how your sales organization creates, progresses and wins revenue.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Explore comprehensive frameworks, structured methodologies, performance metrics and AI-native integrations designed to help sales leaders build more consistent, measurable and scalable revenue operations.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToAnchor('sales-hub-overview')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-98 cursor-pointer"
                >
                  <span>Explore Sales Frameworks</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all active:scale-98"
                >
                  <span>Talk to a Sales Expert</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>8 Acceleration Disciplines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Complete Execution Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>AI-Native Integration</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dashboard card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                    Sales Intelligence Dashboard
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    Live Telemetry
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Pipeline Health Score</span>
                      <span className="text-emerald-400 font-mono font-bold">Monitored</span>
                    </div>
                    <div className="flex gap-1">
                      {[85, 72, 91, 68, 79, 88, 94].map((v, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-slate-700" style={{ height: '28px', display: 'flex', alignItems: 'flex-end' }}>
                          <div className="w-full rounded-sm bg-blue-500" style={{ height: `${v}%` }} />
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-400">Stage-level opportunity progression and health indicators</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <span className="text-[10px] text-slate-400">Win Rate Trend</span>
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-black text-white font-mono">↑ Improving</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <span className="text-[10px] text-slate-400">Velocity Score</span>
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-black text-white font-mono">Tracked</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Forecast Accuracy</span>
                      <span className="text-blue-400 font-mono font-bold">AI-Enhanced</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Revenue predictions improved through machine learning on historical patterns and buying signals.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/offerings"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-bold border border-blue-500/30 transition-colors"
                  >
                    <span>View ProfitMachines Revenue Engines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. STICKY SECTION NAVIGATION ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0 hidden md:inline">
              Jump to:
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {SALES_ACCELERATION_SECTIONS.map((section) => {
                const isActive = activeSectionId === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToAnchor(section.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    <span>{section.title.split(' ').slice(0, 2).join(' ')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ── 3. HUB OVERVIEW SECTION ── */}
      <section id="sales-hub-overview" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Sales Acceleration Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              {SALES_ACCELERATION_OVERVIEW.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {SALES_ACCELERATION_OVERVIEW.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SALES_ACCELERATION_OVERVIEW.disciplines.map((discipline, idx) => {
              const IconComp = ICON_MAP[discipline.icon] || Target;
              return (
                <div
                  key={discipline.id}
                  onClick={() => scrollToAnchor(discipline.id)}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                        {discipline.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {discipline.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60 mt-3 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. SALES PERFORMANCE CHALLENGES ── */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-rose-400 uppercase tracking-widest">
              Common Enterprise Challenges
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
              Why Sales Organizations Underperform
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              These are the most common root causes of sales underperformance across B2B organizations. Each can be systematically diagnosed and improved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: AlertTriangle, title: 'Inconsistent Sales Execution', desc: 'Reps follow different approaches, making outcomes unpredictable and difficult to coach.' },
              { icon: GitBranch, title: 'Weak Pipeline Qualification', desc: 'Opportunities enter the pipeline without sufficient evidence of genuine buying intent.' },
              { icon: Clock, title: 'Extended Sales Cycles', desc: 'Deals stall due to unclear next steps, disengaged stakeholders and slow internal approvals.' },
              { icon: DollarSign, title: 'Compressed Deal Values', desc: 'Poor value positioning leads to discounting and failure to capture full commercial potential.' },
              { icon: Users, title: 'Incomplete Stakeholder Engagement', desc: 'Buying committees are only partially mapped, leaving key decision-makers unengaged.' },
              { icon: BarChart3, title: 'Inaccurate Revenue Forecasts', desc: 'Forecast submissions based on optimism rather than evidence create planning uncertainty.' },
              { icon: Activity, title: 'High Administrative Overhead', desc: 'Sales teams spend insufficient time in customer-facing activities due to administrative burden.' },
              { icon: Zap, title: 'Slow Rep Ramp Time', desc: 'New representatives take longer than necessary to become productive without structured onboarding.' }
            ].map((challenge) => {
              const ChallengeIcon = challenge.icon;
              return (
                <div key={challenge.title} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-start gap-4 hover:border-slate-600 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ChallengeIcon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white font-heading">{challenge.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{challenge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5–12. EIGHT DISCIPLINE SECTIONS ── */}
      {SALES_ACCELERATION_SECTIONS.map((section, index) => {
        const currentTab = activeSubTab[section.id] || 'frameworks';
        const badgeClasses = getBadgeClasses(section.badgeColor);
        const isEven = index % 2 === 1;

        const TAB_LABELS: { key: 'challenges' | 'frameworks' | 'kpis' | 'connection'; label: string; count: number }[] = [
          { key: 'frameworks', label: 'Frameworks & Approaches', count: section.frameworks.length },
          { key: 'challenges', label: 'Common Challenges', count: section.challenges.length },
          { key: 'kpis', label: 'Key Performance Indicators', count: section.kpis.length },
          { key: 'connection', label: 'ProfitMachines Connection', count: section.profitmachinesConnection.length }
        ];

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 py-12 sm:py-16 ${isEven ? 'bg-slate-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">

              {/* Section Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Discipline {section.number}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${badgeClasses.bg} ${badgeClasses.text} ${badgeClasses.border}`}>
                      {section.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-base font-bold text-slate-700 font-heading">
                    {section.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {section.intro}
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    <span>Schedule Advisory Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Sub-Tab Navigation */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                  View:
                </span>
                {TAB_LABELS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setTabForSection(section.id, tab.key)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      currentTab === tab.key
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      currentTab === tab.key ? 'bg-blue-800 text-blue-200' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tab: Frameworks */}
              {currentTab === 'frameworks' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-slate-900 font-heading">
                      Frameworks & Implementation Approaches
                    </h3>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                      Structured Methods
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {section.frameworks.map((framework) => (
                      <div
                        key={framework.title}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3.5 flex flex-col hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 font-heading">
                            {framework.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {framework.description}
                          </p>
                        </div>
                        {framework.steps && framework.steps.length > 0 && (
                          <div className="space-y-1.5 pt-2.5 border-t border-slate-100 mt-auto">
                            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                              Key Steps:
                            </span>
                            {framework.steps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {sIdx + 1}
                                </span>
                                <span className="leading-snug">{step}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Visual Element */}
                  <div className="mt-6">
                    <SectionVisual type={section.visualType} />
                  </div>
                </div>
              )}

              {/* Tab: Challenges */}
              {currentTab === 'challenges' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-slate-900 font-heading">
                      Common Organizational Challenges
                    </h3>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                      Friction Points
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.challenges.map((challenge) => (
                      <div
                        key={challenge}
                        className="p-4 rounded-xl bg-rose-50/40 border border-rose-100 hover:border-rose-200 transition-colors flex items-start gap-3"
                      >
                        <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium leading-snug">
                          {challenge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: KPIs */}
              {currentTab === 'kpis' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-slate-900 font-heading">
                      Key Performance Indicators
                    </h3>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                      Performance Measurement
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.kpis.map((kpi) => (
                      <div
                        key={kpi.name}
                        className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-2 hover:border-blue-300 transition-colors"
                      >
                        <div className="flex items-start gap-2">
                          <BarChart3 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <h4 className="text-sm font-bold text-slate-900 font-heading leading-snug">
                            {kpi.name}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-6">
                          {kpi.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: ProfitMachines Connection */}
              {currentTab === 'connection' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-slate-900 font-heading">
                      ProfitMachines Platform Connection
                    </h3>
                    <Link
                      to="/offerings"
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                    >
                      <span>Explore Offerings</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-100 space-y-3">
                    {section.profitmachinesConnection.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-blue-100 shadow-xs"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                          <BrainCircuit className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-blue-100">
                      <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>Discuss Your Sales Acceleration Goals</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        );
      })}

      {/* ── 13. INTEGRATED SALES ACCELERATION FRAMEWORK ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-400 uppercase tracking-widest">
              Connected System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
              The ProfitMachines Sales Acceleration System
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              These eight disciplines are complementary and interconnected. Excellence in each reinforces the others to create a compounding improvement effect across the entire revenue operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SALES_ACCELERATION_SECTIONS.map((section, idx) => {
              const badgeClasses = getBadgeClasses(section.badgeColor);
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToAnchor(section.id)}
                  className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-left cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-500">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${badgeClasses.bg} ${badgeClasses.text} ${badgeClasses.border}`}>
                        {section.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors font-heading">
                      {section.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {section.subtitle}
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-blue-400 text-xs font-bold">
                      <span>Explore Discipline</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: Compass, title: 'Methodology First', desc: 'Start with consistent sales methodology to create a common language and approach across the organization.' },
                { icon: Rocket, title: 'Playbook Execution', desc: 'Translate methodology into step-by-step execution guides that any representative can follow and improve.' },
                { icon: BrainCircuit, title: 'AI-Native Augmentation', desc: 'Layer AI capabilities across each discipline to accelerate research, qualification, personalization and measurement.' }
              ].map((principle) => {
                const PIcon = principle.icon;
                return (
                  <div key={principle.title} className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center mx-auto">
                      <PIcon className="w-5 h-5 text-blue-300" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">{principle.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{principle.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. SALES PERFORMANCE MEASUREMENT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Performance Measurement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Sales Performance Measurement Framework
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A comprehensive set of metrics spanning pipeline health, sales effectiveness, revenue performance and operational efficiency.
            </p>
            <p className="text-xs text-slate-400 font-mono italic">
              All metrics shown are for illustrative purposes only. Specific values and targets vary by organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Pipeline Performance',
                icon: Sliders,
                iconColor: 'text-blue-600',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-200',
                metrics: SALES_ACCELERATION_METRICS.pipeline
              },
              {
                title: 'Sales Effectiveness',
                icon: Target,
                iconColor: 'text-emerald-600',
                bgColor: 'bg-emerald-50',
                borderColor: 'border-emerald-200',
                metrics: SALES_ACCELERATION_METRICS.effectiveness
              },
              {
                title: 'Revenue Performance',
                icon: TrendingUp,
                iconColor: 'text-violet-600',
                bgColor: 'bg-violet-50',
                borderColor: 'border-violet-200',
                metrics: SALES_ACCELERATION_METRICS.revenue
              },
              {
                title: 'Operational Performance',
                icon: Settings,
                iconColor: 'text-amber-600',
                bgColor: 'bg-amber-50',
                borderColor: 'border-amber-200',
                metrics: SALES_ACCELERATION_METRICS.operational
              }
            ].map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.title} className={`p-6 rounded-2xl border ${category.borderColor} ${category.bgColor}/30 space-y-4`}>
                  <div className="flex items-center gap-2">
                    <CatIcon className={`w-5 h-5 ${category.iconColor}`} />
                    <h3 className="text-base font-extrabold text-slate-900 font-heading">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.metrics.map((metric) => (
                      <div key={metric.name} className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
                        <span className="text-xs font-bold text-slate-900">{metric.name}</span>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 15. RELATED RESOURCES ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Related Resources
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Explore More ProfitMachines Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Platform Offerings',
                desc: 'Explore ProfitMachines revenue intelligence capabilities and solutions.',
                path: '/offerings',
                badge: 'Platform'
              },
              {
                title: 'AI-Native Sales',
                desc: 'Discover how AI-native sales capabilities accelerate pipeline and execution.',
                path: '/ai-native-sales',
                badge: 'AI Sales'
              },
              {
                title: 'Industry Resource Hubs',
                desc: 'Vertical-specific resources for 10 major industry sectors.',
                path: '/resources-hub/industry-resource-hubs',
                badge: 'Industry'
              },
              {
                title: 'Functional Resource Hubs',
                desc: 'Deep resources across 10 commercial revenue functions.',
                path: '/resources-hub/functional-resource-hubs',
                badge: 'Functional'
              },
              {
                title: 'Resources Hub',
                desc: 'The complete ProfitMachines knowledge and resources library.',
                path: '/resources-hub',
                badge: 'Hub'
              },
              {
                title: 'Book a Consultation',
                desc: 'Talk to a ProfitMachines sales expert about your specific challenges.',
                path: '/book-consultation',
                badge: 'Advisory'
              }
            ].map((resource) => (
              <Link
                key={resource.path}
                to={resource.path}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {resource.badge}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{resource.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. FINAL CTA SECTION ── */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono font-extrabold text-blue-400 uppercase tracking-widest">
              Take Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Ready to Build a More Effective Sales Engine?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              ProfitMachines combines proven sales frameworks with AI-native technology to help your organization build more predictable, efficient and scalable revenue operations. Talk to a specialist to discuss your specific sales challenges and goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-98"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/talk-to-expert"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all active:scale-98"
            >
              <span>Talk to an Expert</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" />
            </Link>
            <Link
              to="/offerings"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-sm border border-white/10 transition-all active:scale-98"
            >
              <span>Explore Offerings</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800">
            {[
              'Sales Methodology Design',
              'Playbook Development',
              'Pipeline Optimization',
              'Revenue Operations',
              'AI-Native Sales Deployment'
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
