import { Link } from 'react-router-dom';
import {
  Cpu,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Sliders,
  ShieldAlert,
  ArrowUpRight,
  Layers,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import EngagementSubNav from '../../components/EngagementSubNav';
import { scopeDefinition } from '../../../data/offeringsDossierData';

export default function EngagementDeliveryTracks() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">

      {/* Header Banner with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
            alt="Delivery Track Systems"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span>Delivery Disciplines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Two Delivery Tracks. One Revenue Architecture.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
              ProfitMachines combines human-led strategy with automated software execution. In our engagement model architecture, every model deploys one or both tracks based on the client's readiness and strategic urgency.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-inner">
              <span>Review technical capability comparison:</span>
              <Link to="/offerings/delivery-tracks" className="text-blue-400 hover:text-blue-300 font-bold shrink-0 flex items-center gap-1">
                <span>View Offerings Delivery Tracks</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tracks Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Track A */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-3">
                Track A · Human-Led
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Consulting Services
              </h2>
              <div className="text-sm font-semibold text-blue-700 mb-4">
                Define the strategy and operating approach.
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our consulting work focuses on understanding the business, designing the right growth approach, enabling teams, and establishing the processes needed for execution.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">
                    Work Covered:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">• Diagnostics, market research, and whitespace analysis</li>
                    <li className="flex items-center gap-2">• Go-to-market architecture & territory coverage design</li>
                    <li className="flex items-center gap-2">• Value engineering and CFO-ready ROI business case studios</li>
                    <li className="flex items-center gap-2">• Sales qualification rigor (MEDDPICC) & objection playbooks</li>
                    <li className="flex items-center gap-2">• Channel partner economics and compensation modeling</li>
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">
                    Primary Engagement Model Alignment:
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    Advisory & Insight, Consulting Services, Resident Growth Architects (Workstream Strategy).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
              <strong className="text-slate-900 block font-semibold mb-0.5">Core Purpose:</strong>
              Deciding what to do and verifying commercial economics before building software.
            </div>
          </div>

          {/* Track B */}
          <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-12 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 inline-block mb-3">
                Track B · Machine-Led
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                AI-Driven Automation
              </h2>
              <div className="text-sm font-semibold text-indigo-300 mb-4">
                Turn the operating approach into connected systems.
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Our automation work focuses on implementing systems and workflows that support revenue execution, analytics, and performance visibility.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">
                    Work Covered:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    <li className="flex items-center gap-2">• Autonomous SDR and inbound qualification agent fleets</li>
                    <li className="flex items-center gap-2">• Neural customer propensity and lookalike scoring models</li>
                    <li className="flex items-center gap-2">• Real-time buyer intent telemetry and signal routing</li>
                    <li className="flex items-center gap-2">• Pipeline velocity telemetry and stage-slip detection</li>
                    <li className="flex items-center gap-2">• Usage-to-revenue pipelines linking product telemetry to upsells</li>
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">
                    Primary Engagement Model Alignment:
                  </span>
                  <p className="text-xs text-slate-300 font-medium">
                    Proof of Value / PoP, Outcome-Based Engagement, Forward Deployed Accelerators.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 relative z-10">
              <strong className="text-white block font-semibold mb-0.5">Core Purpose:</strong>
              Building the software machine that executes proven commercial strategies at scale.
            </div>
          </div>
        </div>

        {/* ── SECTION: STRICT SCOPE BOUNDARY & EXCLUSIONS ── */}
        <section className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Scope Definition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What This Engagement Catalog Covers. And What It Deliberately Does Not.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              ProfitMachines maintains strict operational focus on Sales, Revenue, Go-to-Market, and Demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* In Scope */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Explicitly In Scope (Revenue Engine):</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {scopeDefinition.inScope.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Out of Scope */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
              <div className="flex items-center gap-2 text-rose-950 font-bold text-sm mb-3">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>Explicitly Excluded (Handled by Other Practices):</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {scopeDefinition.outOfScope.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
