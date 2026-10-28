import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot, ArrowRight, ChevronRight, Cpu, Layers, Sparkles,
  Zap, BarChart3, ShieldCheck, CheckCircle2, Sliders,
  Calculator, UserCheck, Clock, TrendingUp, DollarSign,
  Activity, ArrowUpRight, Compass, Shield
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function AiNativeTransformationsPage() {
  // ROI Calculator states
  const [sdrCount, setSdrCount] = useState<number>(12);
  const [repCost, setRepCost] = useState<number>(110000);
  const [monthlyMeetings, setMonthlyMeetings] = useState<number>(15);

  useEffect(() => {
    document.title = 'AI-Native Transformations: Where Autonomous Agents Replace Manual Processes | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  // Calculated ROI values
  const hoursReclaimedPerYear = sdrCount * 18 * 48; // ~18 hours saved per rep per week * 48 working weeks
  const annualCostSavings = Math.round((sdrCount * repCost * 0.42) / 1000) * 1000;
  const projectedMeetings = Math.round(monthlyMeetings * 3.4);
  const projectedPipelineLift = Math.round(sdrCount * monthlyMeetings * 2.4 * 25000);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── HERO SECTION: AI DEPLOYMENT GALLERY LAYOUT ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              <span className="font-mono text-purple-600 font-extrabold">AUTONOMOUS REVENUE DEPLOYMENTS</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>AI AGENT FIELD PROOFS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              AI-Native Transformations:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                Where Autonomous Agents Replace Manual Processes
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Explore how enterprises deploy ProfitMachines&apos; AI agent ecosystem — from SDR agents to forecasting agents to revenue analyst agents — to scale revenue without proportional headcount increases.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-purple-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Deploy AI Agents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore All Case Studies</span>
                <ChevronRight className="w-4 h-4 text-purple-600" />
              </Link>
            </div>

            {/* Telemetry Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="text-purple-600 font-bold flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-purple-600" />
                AGENTIC SCALE:
              </span>
              <span>4 Autonomous Agents Deployed · 60+ Hours Reclaimed Per Team/Week · Zero-Touch CRM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: AI SDR AGENT DEPLOYMENT SHOWCASE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Autonomous Demand Generation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              AI SDR Agent Deployments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Autonomous outbound prospecting swarms executing multi-channel intent outreach with human-in-the-loop oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-700 font-mono text-xs font-bold uppercase">
                  Deployment 01 · Mid-Market SaaS
                </span>
                <span className="text-xs font-mono text-slate-500">Autonomous SDR Swarm</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Mid-Market SaaS: 3.8X Meeting Velocity with AI SDR Agents
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Replaced manual list scraping and generic email blasts with real-time dark funnel intent tracking and personalized executive outreach across LinkedIn and email.
              </p>

              <div className="space-y-3 font-mono text-xs mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex justify-between">
                  <span className="text-slate-500">Agent Type:</span>
                  <span className="font-bold text-slate-900">Multi-Channel Inbound/Outbound SDR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Key Metric:</span>
                  <span className="font-bold text-purple-600">3.8X Meeting Booking Velocity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hours Reclaimed:</span>
                  <span className="font-bold text-slate-900">42 Hours / Rep / Month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Human Oversight:</span>
                  <span className="font-bold text-emerald-600">Approval-Gate on Tier-1 Enterprise</span>
                </div>
              </div>

              <Link
                to="/case-studies/enterprise-saas-pipeline-growth"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-purple-600 hover:text-purple-700 uppercase"
              >
                <span>Inspect Pipeline Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-mono text-xs font-bold uppercase">
                  Deployment 02 · Enterprise Technology
                </span>
                <span className="text-xs font-mono text-slate-500">Zero-Manual Lead Qualification</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Enterprise Tech: 80% SQLs Auto-Sourced, Zero Manual Intervention
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Engineered an autonomous research agent that analyzes company 10-Ks, Infosec certifications, and job openings to qualify prospects before routing to Account Executives.
              </p>

              <div className="space-y-3 font-mono text-xs mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex justify-between">
                  <span className="text-slate-500">Agent Type:</span>
                  <span className="font-bold text-slate-900">Deep-Research Lead Qualifier</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Key Metric:</span>
                  <span className="font-bold text-indigo-600">80% of SQLs Autonomous</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hours Reclaimed:</span>
                  <span className="font-bold text-slate-900">55 Hours / Rep / Month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Human Oversight:</span>
                  <span className="font-bold text-emerald-600">AE Calendar Direct Route</span>
                </div>
              </div>

              <Link
                to="/case-studies/technology-customer-expansion"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-indigo-600 hover:text-indigo-700 uppercase"
              >
                <span>Inspect Enterprise Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REVENUE INTELLIGENCE SHOWCASE ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Behavioral Signals &amp; Whitespace
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Revenue Intelligence Deployments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Real-time predictive telemetry that detects buyer readiness and isolated profit pools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-2">Financial Services Case</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Financial Services: 85–90% Purchase Readiness Prediction Accuracy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                By analyzing algorithmic dark-funnel consumption patterns across 40+ FinTech domains, the intelligence agent accurately predicted enterprise contract expansions 90 days before formal RFP issuance.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 flex justify-between">
                <span>Prediction Precision:</span>
                <strong className="text-blue-600">89.4% Across $1.2B Assets</strong>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-2">Healthcare Case</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Healthcare: 15–20% Margin Recovery Through White-Space Targeting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Identified non-discounted hospital and life sciences sub-segments with urgent compliance deadlines, reallocating field sales into margin pools where willingness-to-pay was 22% higher than baseline.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 flex justify-between">
                <span>Net Margin Impact:</span>
                <strong className="text-emerald-600">+18.2 Points Recovered</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: AI FORECASTING & REVOPS SHOWCASE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              Behavioral Forecast &amp; CRM Autopilot
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              AI Forecasting &amp; RevOps Deployments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Eliminating optimistic rep commits with zero-touch CRM hygiene and statistical telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-2">Enterprise SaaS</div>
              <div className="text-3xl font-black font-mono text-slate-900 mb-1">&lt;5%</div>
              <div className="text-xs font-mono font-bold text-slate-800 uppercase mb-2">Variance to Actuals</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replaced subjective gut commits with deal health telemetry, achieving &lt;5% variance for 6 consecutive quarters.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-2">Global Manufacturing</div>
              <div className="text-3xl font-black font-mono text-slate-900 mb-1">98%</div>
              <div className="text-xs font-mono font-bold text-slate-800 uppercase mb-2">Multi-Region Accuracy</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Federated forecasting across 12 countries in local currencies, eliminating multi-million dollar inventory stranding.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-2">Growth-Stage SaaS</div>
              <div className="text-3xl font-black font-mono text-slate-900 mb-1">95%+</div>
              <div className="text-xs font-mono font-bold text-slate-800 uppercase mb-2">CRM Data Accuracy</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero manual CRM updates. All calls, notes, proposals, and pipeline milestones logged autonomously via AI RevOps agent.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-purple-600 font-bold uppercase mb-2">PE Portfolio Company</div>
              <div className="text-3xl font-black font-mono text-slate-900 mb-1">80%</div>
              <div className="text-xs font-mono font-bold text-slate-800 uppercase mb-2">Selling Time Reclaimed</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Admin time reduced from 60% to 20%, doubling quota attainment without adding a single headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FULL REVENUE AGENT ECOSYSTEM SHOWCASE ── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider block mb-2">
              Full Ecosystem Orchestration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Enterprise Healthcare: 4-Agent Ecosystem Deployed
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              60+ Hours Reclaimed Per Team Per Week with Autonomous Inter-Agent Collaboration.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
                  Unified Agentic Mesh
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Continuous Zero-Friction Execution Loop
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  In an enterprise health system with strict HIPAA compliance, 4 specialized autonomous agents communicate via API hooks to orchestrate discovery, deal qualification, CRM compliance, and customer expansion without human data entry.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% HIPAA BAA Encrypted Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant inter-agent context handoff</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>60+ hours reclaimed per team per week</span>
                  </div>
                </div>
              </div>

              {/* Ecosystem Architecture Visual */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/30">
                  <div className="text-xs font-mono text-purple-400 font-bold uppercase mb-1">Agent 01</div>
                  <h4 className="font-bold text-white text-base mb-1">AI SDR Swarm</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Surveys hospital purchasing signals, identifies clinical CIO priorities, books verified introductory discovery calls.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-500/30">
                  <div className="text-xs font-mono text-blue-400 font-bold uppercase mb-1">Agent 02</div>
                  <h4 className="font-bold text-white text-base mb-1">Predictive Deal Intelligence</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Builds clinical ROI battlecards, maps the 8-stakeholder buying committee, and drafts custom proposals.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-1">Agent 03</div>
                  <h4 className="font-bold text-white text-base mb-1">Zero-Touch RevOps Agent</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Enforces HIPAA data compliance, updates CRM fields, reconciles deal commissions, updates board forecasts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-sky-500/30">
                  <div className="text-xs font-mono text-sky-400 font-bold uppercase mb-1">Agent 04</div>
                  <h4 className="font-bold text-white text-base mb-1">AI Customer Success Agent</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Monitors EHR clinical software adoption, alerts CSMs 60 days before contract expiry, identifies expansion licenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INTERACTIVE AI AGENT ROI CALCULATOR ── */}
      <section id="calculator" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase mb-3">
              <Calculator className="w-3.5 h-3.5 text-purple-600" />
              Dynamic Value Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Calculate Your AI Agent ROI
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
              Simulate economic returns from deploying autonomous SDR and RevOps agents tailored to your sales team size.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span>Current SDR / BDR Headcount:</span>
                  <span className="text-purple-600 text-sm font-black">{sdrCount} Reps</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="1"
                  value={sdrCount}
                  onChange={(e) => setSdrCount(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span>Average Rep Fully-Loaded Cost:</span>
                  <span className="text-purple-600 text-sm font-black">${repCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="60000"
                  max="180000"
                  step="5000"
                  value={repCost}
                  onChange={(e) => setRepCost(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span>Current Qualified Meetings / Month:</span>
                  <span className="text-purple-600 text-sm font-black">{monthlyMeetings} Meetings</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={monthlyMeetings}
                  onChange={(e) => setMonthlyMeetings(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                Calculations calibrated against empirical field data: 42% cost reduction, 3.4X meeting velocity, and 18 hours/week reclaimed from CRM admin.
              </div>
            </div>

            {/* Right: Projected Outputs */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-5">
              <div className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">
                Projected Annual Impact
              </div>

              <div className="border-b border-slate-800 pb-4">
                <div className="text-3xl sm:text-4xl font-black font-mono text-purple-400">
                  {hoursReclaimedPerYear.toLocaleString()} Hours
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                  Sales Time Reclaimed / Year
                </div>
              </div>

              <div className="border-b border-slate-800 pb-4">
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">
                  ${annualCostSavings.toLocaleString()}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                  Projected Annual Cost Savings
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-400">
                  ${(projectedPipelineLift / 1000000).toFixed(1)}M
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                  Estimated Qualified Pipeline Lift
                </div>
              </div>

              <a
                href="#intake"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all"
              >
                <span>Get Custom ROI Projection</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Deploy Your AI Agent Ecosystem?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule a technical briefing with a Principal AI Architect. We will audit your current tech stack and model an autonomous agent deployment plan within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="AI-Native Transformations"
              defaultChallenge="AI Transformation"
              buttonText="Schedule Agent Deployment"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-600">
              <span>500+ B2B Companies</span>
              <span className="text-slate-300">·</span>
              <span>5X Avg Revenue Growth</span>
              <span className="text-slate-300">·</span>
              <span>24/7 AI Support</span>
              <span className="text-slate-300">·</span>
              <span>SOC2 Type II &amp; ISO 27001</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
