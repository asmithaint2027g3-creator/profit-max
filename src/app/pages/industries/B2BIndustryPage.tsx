import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Bot,
  Activity,
  Layers,
  ChevronRight,
  Sparkles,
  Lock,
  ArrowUpRight,
  BarChart3,
  Search,
  Zap,
  Clock,
  RefreshCw,
  Building2,
  Users
} from 'lucide-react';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function B2BIndustryPage() {
  const [activeSection, setActiveSection] = useState('abm');

  useEffect(() => {
    document.title = 'B2B Focus Architecture: The Tactical Playbook | ProfitMachines';
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = ['abm', 'displacement', 'sdr', 'rql', 'expansion'];
      const scrollPos = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px] relative">
      {/* ── STICKY SIDE DOT-NAVIGATION (Desktop Only) ── */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-3 pointer-events-auto">
        {[
          { id: 'abm', label: 'ABM Autopilot' },
          { id: 'displacement', label: 'Competitor Displacement' },
          { id: 'sdr', label: 'SDR Co-Pilot' },
          { id: 'rql', label: 'RQL Predictor' },
          { id: 'expansion', label: 'Contract Expansion' },
          { id: 'intake', label: 'Deploy Engine' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-2.5 text-xs font-mono transition-all cursor-pointer"
          >
            <span
              className={`opacity-0 group-hover:opacity-100 transition-opacity px-2 py-0.5 rounded bg-slate-900 text-white font-bold shadow-md ${
                activeSection === item.id ? 'opacity-100' : ''
              }`}
            >
              {item.label}
            </span>
            <span
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                activeSection === item.id
                  ? 'bg-blue-600 border-blue-600 scale-125 shadow-md shadow-blue-500/50'
                  : 'bg-white border-slate-300 group-hover:border-blue-400'
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── SECTION 1: HERO SECTION (Asymmetric Split — Home Page Blue/White Theme) ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        {/* Subtle Ambient Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (45%): Sticky Title Header */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="font-mono text-blue-600 font-extrabold">TACTICAL PLAYBOOK</span>
                <span className="text-slate-300 font-normal">//</span>
                <span>B2B FOCUS ARCHITECTURE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
                B2B Focus{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Architecture.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
                Engineered for complex sales cycles, multi-stakeholder buying committees, and high-contract-value deal progression. We replace manual SDR guesswork with autonomous intent-orchestrated sales engines.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#intake"
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
                >
                  <span>Deploy B2B Engine</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/industries"
                  className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
                >
                  <span>All Verticals Hub</span>
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Right Column (55%): Sleek Animated Flowchart: Lead → Intent → Meeting → Close */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                      B2B Execution Pipeline // Live Telemetry
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    5 Connected Engines
                  </span>
                </div>

                {/* Animated Flowchart Nodes */}
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Target Ingestion & Intent Sync', desc: 'Syncs CRM accounts with dark-funnel buying signals and tech-stack changes.', metric: '100% Account Ingestion' },
                    { step: '02', title: 'Autonomous ABM Vectoring', desc: 'Personalized ads, micro-sites, and executive SDR cadences deployed simultaneously.', metric: '3.8× Account Penetration' },
                    { step: '03', title: 'Objection-Handling SDR Fleet', desc: 'Autonomous 24/7 SDR qualifies, counters pricing stalls, and books calendar meetings.', metric: '140+ Meetings / Month' },
                    { step: '04', title: 'Bayesian RQL Probability', desc: 'Predictive machine learning calculates win-probability, cycle length, and slip risk.', metric: '94% Forecast Precision' }
                  ].map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {node.step}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 font-heading">{node.title}</h4>
                          <p className="text-xs text-slate-600">{node.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 shrink-0 self-start sm:self-auto shadow-2xs">
                        {node.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERTICAL Z-PATTERN SCROLL SECTIONS ── */}

      {/* OFFERING 1: AI Account-Based Marketing (ABM) Autopilot */}
      <section id="abm" className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold inline-block mb-4">
                OFFERING 01 // B2B FOCUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                AI Account-Based Marketing (ABM) Autopilot
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Orchestrate end-to-end target account campaigns. Trigger personalized ads, custom landing pages, and automated SDR outreach simultaneously based on real-time intent.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">The Situation</span>
                  <p className="text-xs sm:text-sm text-slate-700">Siloed marketing and sales target lists; low enterprise account penetration; manual, disjointed ABM campaign execution.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase block mb-1">The Solution</span>
                  <p className="text-xs sm:text-sm text-slate-700">AI ingests CRM target lists, syncs with third-party intent signals, and orchestrates dynamic, multi-channel outreach on autopilot, ensuring message consistency across all touchpoints.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-slate-800">
                <strong>Realized Impact:</strong> A B2B SaaS enterprise scaled account penetration by 3.8× across 250 target accounts in 90 days.
              </div>
            </div>

            {/* Right: Visual Mockup inside Glass Frame */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">ABM Node Architecture</span>
                  <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">92% Alignment</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">Intent Capture Mesh</span>
                    <p className="text-sm font-bold text-slate-900">Bombera + G2 + Dark Funnel Cross-Matching</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">Automated Asset Generation</span>
                    <p className="text-sm font-bold text-slate-900">Custom 1:1 ROI Calculators & Buying Committee Pitches</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">Multi-Threaded Outreach</span>
                    <p className="text-sm font-bold text-slate-900">Synchronized LinkedIn, Email & Direct Mail Vectors</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-blue-600">3.8×</div>
                    <div className="text-[10px] text-slate-500">Penetration</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-indigo-600">+45%</div>
                    <div className="text-[10px] text-slate-500">Pipeline</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-emerald-600">92%</div>
                    <div className="text-[10px] text-slate-500">Alignment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT METRIC STRIP 1 ── */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-1">3.8×</div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Account Penetration Multiplier</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">62%</div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Win-Back Rate on Rival Accounts</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono mb-1">140+</div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Qualified Meetings / Month per AE Pod</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERING 2: AI Competitor Displacement Engine (Visual Left, Text Right) */}
      <section id="displacement" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Visual Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 to-amber-500" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Competitive Radar Feed</span>
                  <span className="text-xs font-mono text-rose-600 font-bold bg-rose-50 px-2.5 py-1 rounded border border-rose-200">Live Renewal Alert</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                  <div className="flex justify-between items-center text-xs mb-1 font-mono text-slate-500">
                    <span>Target: Legacy Cloud Provider</span>
                    <span className="text-rose-600 font-bold">Renewal in 45 Days</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">Dissatisfaction Signals Detected in Support Threads</p>
                  <p className="text-xs text-slate-600 mt-1">Automated counter-battlecard dispatched to procurement chair.</p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-slate-900">35</div>
                    <div className="text-[10px] text-slate-500">Displaced</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-emerald-600">62%</div>
                    <div className="text-[10px] text-slate-500">Win-Back</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-blue-600">2.8×</div>
                    <div className="text-[10px] text-slate-500">Higher ACV</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold inline-block mb-4">
                OFFERING 02 // B2B FOCUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                AI Competitor Displacement Engine
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Identify competitor pain points to win back accounts. Detect when accounts search for migration support or complain about rival tools online.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">The Situation</span>
                  <p className="text-xs sm:text-sm text-slate-700">Competitor lock-in across target accounts; undetected contract renewal windows; high rival ad spending in your core segments.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase block mb-1">The Solution</span>
                  <p className="text-xs sm:text-sm text-slate-700">AI tracks public dissatisfaction signals, job postings, and search queries, triggering automated win-back playbooks precisely at contract renewal windows.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-slate-800">
                <strong>Realized Impact:</strong> A cloud infrastructure provider displaced 35 rival enterprise accounts in 90 days with 62% win-back rate.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERING 3: AI SDR Co-Pilot / Autopilot (Text Left, Visual Right) */}
      <section id="sdr" className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold inline-block mb-4">
                OFFERING 03 // B2B FOCUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                AI SDR Co-Pilot / Autopilot
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Automate prospecting and calendar bookings. Our autonomous SDR assistant drafts outreach, handles objections, and schedules meetings for AEs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">The Situation</span>
                  <p className="text-xs sm:text-sm text-slate-700">Sales reps spending 60%+ of their time on manual prospecting; delayed response to inbound leads; inconsistent AE meeting volume.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase block mb-1">The Solution</span>
                  <p className="text-xs sm:text-sm text-slate-700">AI acts as a 24/7 SDR co-pilot, qualifying prospects, handling pricing/timing objections dynamically, and booking meetings directly into AE calendars with full context.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-slate-800">
                <strong>Realized Impact:</strong> A B2B tech company booked 140+ qualified AE meetings per month with 0 additional SDR headcount, saving 15 hours/rep weekly.
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Autonomous Agent Fleet</span>
                  <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded border border-blue-200">Active Autopilot</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="font-mono text-slate-400 mb-1">Agent Action · 10:24 AM</div>
                    <p className="font-bold text-slate-900">Prospect objection resolved: "Budget locked until Q3"</p>
                    <p className="text-slate-600 text-[11px] mt-1">Dispatched flexible deferral contract + value proof kit.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="font-mono text-slate-400 mb-1">Calendar Webhook · 10:27 AM</div>
                    <p className="font-bold text-emerald-600">Meeting Confirmed: VP of Engineering @ CloudScale</p>
                    <p className="text-slate-600 text-[11px] mt-1">Briefing dossier auto-attached to AE calendar invite.</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-blue-600">140+</div>
                    <div className="text-[10px] text-slate-500">Meetings/Mo</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-indigo-600">15 hrs</div>
                    <div className="text-[10px] text-slate-500">Saved/Rep</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-emerald-600">3.2×</div>
                    <div className="text-[10px] text-slate-500">Velocity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT METRIC STRIP 2 ── */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-1">94%</div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Forecast Model Precision Across $45M ARR</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">138%</div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Net Revenue Retention (NRR) Achieved</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono mb-1">−55%</div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Annual Account Churn Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERING 4: AI Revenue Qualified Lead (RQL) Predictor */}
      <section id="rql" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Predictive Close Modeling</span>
                  <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded border border-blue-200">Bayesian Certainty</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex justify-between font-mono text-slate-400 mb-1">
                      <span>Deal #4928 · $180,000 ARR</span>
                      <span className="text-emerald-600 font-bold">96% Propensity</span>
                    </div>
                    <p className="font-bold text-slate-900">Champion engagement + legal procurement approval detected.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex justify-between font-mono text-slate-400 mb-1">
                      <span>Deal #4931 · $240,000 ARR</span>
                      <span className="text-rose-500 font-bold">Slip Risk (34%)</span>
                    </div>
                    <p className="font-bold text-slate-900">CFO sign-off unverified. Automated intervention play dispatched.</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-blue-600">94%</div>
                    <div className="text-[10px] text-slate-500">Precision</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-indigo-600">40%</div>
                    <div className="text-[10px] text-slate-500">Faster Close</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-emerald-600">2.1×</div>
                    <div className="text-[10px] text-slate-500">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold inline-block mb-4">
                OFFERING 04 // B2B FOCUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                AI Revenue Qualified Lead (RQL) Predictor
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Predict close probability, deal size, and timelines accurately. Shift from subjective sales gut feelings to data-driven revenue forecasting.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">The Situation</span>
                  <p className="text-xs sm:text-sm text-slate-700">Inaccurate end-of-quarter revenue forecasts; time wasted on low-propensity deals; board forecast volatility.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase block mb-1">The Solution</span>
                  <p className="text-xs sm:text-sm text-slate-700">AI analyzes historical deal patterns, stakeholder email sentiment, and engagement gaps to score close probability with up to 94% accuracy.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-slate-800">
                <strong>Realized Impact:</strong> An enterprise B2B platform achieved 94% forecast precision across $45M in quarterly pipeline.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERING 5: AI Contract & Expansion Opportunity Finder */}
      <section id="expansion" className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold inline-block mb-4">
                OFFERING 05 // B2B FOCUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                AI Contract & Expansion Opportunity Finder
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Uncover upsell and cross-sell opportunities. Monitor software usage trends to identify accounts ready for seat expansion or premium features.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">The Situation</span>
                  <p className="text-xs sm:text-sm text-slate-700">Reactive customer account management; high churn at contract renewal; unrealized seat expansion potential.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase block mb-1">The Solution</span>
                  <p className="text-xs sm:text-sm text-slate-700">AI monitors product usage metrics and user thresholds, automatically alerting CSMs to execute targeted upsell/expansion motions before renewal.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-slate-800">
                <strong>Realized Impact:</strong> A SaaS company increased Net Revenue Retention (NRR) from 105% to 138% within two quarters.
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">NRR Telemetry Command</span>
                  <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">138% NRR</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-mono text-slate-400 block mb-1">Tier-Crossing Alert</span>
                    <p className="font-bold text-slate-900">Account reached 94% seat capacity · Auto-expansion play sent to CSM.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-mono text-slate-400 block mb-1">Feature Adoption Signal</span>
                    <p className="font-bold text-slate-900">API usage 3× over plan baseline · Pre-PO enterprise tier generated.</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-emerald-600">138%</div>
                    <div className="text-[10px] text-slate-500">NRR</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-blue-600">3×</div>
                    <div className="text-[10px] text-slate-500">Upsell Rev</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-mono font-bold text-indigo-600">−55%</div>
                    <div className="text-[10px] text-slate-500">Churn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>DEPLOY B2B REVENUE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Deploy the B2B Revenue Engine
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Connect your target account lists, install autonomous ABM playbooks, and scale meeting volume without adding headcount.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="B2B Focus Architecture"
            defaultPriority="Revenue Discovery"
          />
        </div>
      </section>
    </div>
  );
}
