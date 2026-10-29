import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  TrendingUp, 
  ShieldAlert, 
  RefreshCw, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Clock, 
  Zap, 
  ChevronRight, 
  BarChart3, 
  Users, 
  Compass, 
  FileCheck,
  AlertCircle,
  Award,
  Share2,
  PieChart,
  UserCheck
} from 'lucide-react';

import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export const CustomerGrowthPage: React.FC = () => {
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(2);



  const lifecycleStages = [
    {
      title: "Health & Adoption",
      badge: "Stage 01",
      action: "Autonomous product consumption tracking & milestone pacing",
      impact: "85-90% churn prediction accuracy"
    },
    {
      title: "Expansion Discovery",
      badge: "Stage 02",
      action: "Tier saturation & complementary module readiness scoring",
      impact: "20-25% expansion revenue lift"
    },
    {
      title: "Retention & Renewal",
      badge: "Stage 03",
      action: "Automated risk intervention & 90-day renewal pacing",
      impact: "15-20% lower net churn"
    },
    {
      title: "Customer Advocacy",
      badge: "Stage 04",
      action: "Automated reference matching & referral pipeline capture",
      impact: "2X referral pipeline velocity"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">

      {/* Hero Section - Command Center Style */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px' 
          }} 
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-emerald-600/15 to-teal-600/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-mono tracking-wider mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            CAPABILITY PILLAR 06 OF 06
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            Customer Growth: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Engineer Net Revenue Retention as a Predictable System</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            From churn prediction to expansion intelligence to customer advocacy — autonomous systems that retain, expand, and turn customers into revenue multipliers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#intake-form" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200"
            >
              Schedule Growth Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/ai-native-sales" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium transition-all"
            >
              Explore Other Capabilities
            </Link>
          </div>

          {/* Circular Lifecycle Diagram Showing Customer Journey with AI Intervention Points */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Circular Lifecycle Telemetry</span>
                <h3 className="text-lg font-semibold text-white mt-1">Autonomous Customer Journey & Retention Loop</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Continuous 360° Health Monitoring</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {lifecycleStages.map((st, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveLifecycleStage(idx)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all text-left relative group ${
                    activeLifecycleStage === idx 
                      ? 'bg-slate-800/90 border-emerald-500 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/50' 
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-emerald-400 block mb-1">{st.badge}</span>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-tight group-hover:text-emerald-300 transition-colors">{st.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.action}</p>
                  <div className="text-[11px] text-emerald-400 font-mono mt-3 pt-2 border-t border-slate-800 font-semibold">
                    {st.impact}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Current AI Intervention Point</span>
                  <p className="text-sm text-slate-200 font-medium">{lifecycleStages[activeLifecycleStage].action}</p>
                </div>
              </div>
              <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                Deterministic SLA: Real-Time Synced
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 1: Customer Success Intelligence */}
      <section id="cs-intel" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Activity className="w-3.5 h-3.5" />
                Customer Success Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Real-Time Monitoring of Customer Health with Predictive Intervention
              </h2>
              <p className="text-sm text-emerald-700 font-mono mt-2">
                Core Function: Real-time monitoring of customer health with predictive intervention.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Replaces reactive crisis firefighting with algorithmic foresight. Ingests product telemetry, executive sponsor changes, and support ticket sentiment to surface retention risks months ahead.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-emerald-600">85-90%</div>
                <div className="text-xs text-slate-600 mt-1">Churn prediction accuracy with 60-day advance warning</div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "We had no idea the customer was at risk until they didn't renew"
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Customer Health Scoring</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Multi-dimensional health scores based on usage frequency, feature depth, support tickets, and sentiment.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 w-fit mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Usage Analytics</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Deep analysis of product usage patterns, license activation ratios, and feature adoption trajectories.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Success Monitoring</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated tracking of customer onboarding milestones, value realization timelines, and business outcomes.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 w-fit mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Customer Risk Detection</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Early identification of at-risk accounts with immediate automated intervention triggers and CSM alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 2: Expansion Revenue */}
      <section id="expansion" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Cross-Sell Intelligence</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  AI identifies complementary product and module opportunities based on usage maturity and peer benchmarks.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Upsell Intelligence</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Detection of upgrade timing based on tier capacity utilization and demonstrated value realization.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <PieChart className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Expansion Planning</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Strategic account growth planning with mathematical revenue projections and multi-year contract modeling.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Account Growth Strategy</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Data-driven growth strategies for enterprise accounts, guiding land-and-expand across subsidiaries.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                <TrendingUp className="w-3.5 h-3.5" />
                Expansion Revenue
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Autonomous Upsell and Cross-Sell Identification
              </h2>
              <p className="text-sm text-blue-700 font-mono mt-2">
                Core Function: Autonomous identification and execution of upsell and cross-sell opportunities.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Empowers customer success and account teams with precision timing. Discovers the exact operational moment when a client needs more capacity, higher tiers, or supplementary software products.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-blue-600">20-25%</div>
                <div className="text-xs text-slate-600 mt-1">Increase in expansion revenue within 6 months</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3 shadow-xs">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Customers were using 200% of their tier but never upgrading"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 3: Retention Intelligence */}
      <section id="retention" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200">
                <RefreshCw className="w-3.5 h-3.5" />
                Retention Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Predictive Churn Prevention with Automated Workflows
              </h2>
              <p className="text-sm text-teal-700 font-mono mt-2">
                Core Function: Predictive churn prevention with automated retention workflows.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Eliminates end-of-quarter renewal surprises. Orchestrates renewal discussions months before expiration, optimizes commercial terms, and converts annual subscriptions into multi-year commitments.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-teal-600">15-20%</div>
                <div className="text-xs text-slate-600 mt-1">Reduction in net churn through predictive intervention</div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "By the time we knew a customer was leaving, it was too late"
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 w-fit mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Churn Prediction</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Neural models that predict churn 60-90 days in advance based on declining engagement telemetry.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Renewal Forecasting</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Accurate renewal predictions with mathematically verified confidence intervals for executive reporting.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Retention Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated retention workflows triggered by risk signals, routing executive escalations and technical playbooks.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Loyalty Optimization</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Data-driven loyalty program design and concession optimization to maximize contract duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 4: Customer Advocacy */}
      <section id="advocacy" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Referral Programs</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated referral program management with incentive optimization tailored to executive buyers.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-pink-50 text-pink-600 w-fit mb-4">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Reference Programs</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous identification and activation of customer references aligned with specific active deal criteria.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Community Growth</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  AI-driven community engagement and peer networking strategies that amplify brand advocacy.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Advocacy Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated advocacy program management, case study candidate identification, and testimonial tracking.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
                <Award className="w-3.5 h-3.5" />
                Customer Advocacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Turn Satisfied Customers into Revenue Advocates
              </h2>
              <p className="text-sm text-purple-700 font-mono mt-2">
                Core Function: Turn satisfied customers into revenue-generating advocates.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Transforms latent client satisfaction into active pipeline velocity. Identifies champions with high Net Promoter scores and connects them systematically to reference calls and co-marketing opportunities.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-purple-600">2X</div>
                <div className="text-xs text-slate-600 mt-1">Increase in referral-sourced pipeline</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3 shadow-xs">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "We had happy customers but no system to turn them into advocates"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Outcomes Grid */}
      <section id="outcomes" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-semibold">Verified Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Audited Customer Growth Performance</h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Quantifiable retention and expansion metrics across client enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-4xl font-extrabold text-emerald-600">
                85-90%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Churn Prediction Accuracy</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Accuracy in identifying at-risk accounts with 60-day advance notice.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
              <div className="text-4xl font-extrabold text-blue-600">
                20-25%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Expansion Revenue Lift</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Increase in expansion revenue generated within 6 months of deployment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-teal-300 transition-all">
              <div className="text-4xl font-extrabold text-teal-600">
                15-20%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Net Churn Reduction</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Reduction in net churn achieved through predictive automated intervention.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-purple-300 transition-all">
              <div className="text-4xl font-extrabold text-purple-600">
                2X
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Referral Pipeline</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Increase in high-intent, referral-sourced pipeline via advocacy automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-20 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Autonomous Interoperability</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Related Revenue Capabilities</h2>
            </div>
            <Link 
              to="/ai-native-sales" 
              className="mt-4 sm:mt-0 text-sm font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
            >
              Back to AI Native Sales Hub
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/ai-native-sales/revops"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 mb-2">Capability Pillar 04</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                AI Revenue Operations
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Retention and expansion telemetry directly informs revenue forecasting and lifetime customer value analytics.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                Explore RevOps <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/agents"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 mb-2">Capability Pillar 05</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                AI Sales Agents
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                The AI Customer Success Agent executes customer onboarding, usage monitoring, and churn interception autonomously.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                Explore AI Sales Agents <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/sales-execution"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500 transition-all"
            >
              <div className="text-xs font-mono text-emerald-400 mb-2">Capability Pillar 03</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                AI Sales Execution
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Expansion and cross-sell deals flow directly through AI Sales Execution for proposal assembly and pricing discipline.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                Explore Sales Execution <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA & Intake Form */}
      
      {/* ── KPI METRICS & MEASUREMENT SPECIFICATION ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>CORE PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Metrics That Matter: Measurable KPI Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every Customer Growth capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Stability Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;94% Enterprise Rate</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Annual Contract Renewal Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Contract Value Renewed on Schedule / Total Eligible Contract Value Expiring) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of enterprise subscription commitments successfully renewed at contract conclusion.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Protects the core recurring revenue foundation, ensuring predictable baseline cash flows.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Leading Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">60-90 Days Advance Warning</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Early Churn Detection Horizon</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Average Calendar Days of Advance Predictive Notice Provided Before Account Churn Risk Inflects
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Time window provided by behavioral telemetry to execute proactive account remediation workflows.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Allows customer success teams to resolve adoption friction before cancellation decisions crystallize.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Compounding Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">120% - 134% Compounding</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Net Revenue Retention (NRR)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> [(Base ARR + Account Expansion - Account Contraction - Churned ARR) / Base ARR] × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Compounded revenue expansion produced by existing customer cohorts over a 12-month period.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> The ultimate enterprise valuation multiplier; proves customer value grows continuously post-sale.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Expansion Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">+25% Expansion Lift</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Usage-Driven Expansion Pipeline</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> ∑ (Accounts Approaching License Saturation × Target Cross-Sell Tier Value)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Qualified expansion pipeline triggered automatically by behavioral usage and seat saturation thresholds.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Produces highly profitable, low-CAC expansion revenue without requiring cold sales prospecting.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Valuation Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Maximizing Account LTV</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Account Lifetime Economic Value</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Average Annual Contract Spend × Average Customer Retention Duration in Years × Margin %
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Cumulative gross contribution margin produced over the entire multi-year customer lifecycle.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Validates that customer retention programs compound gross profit and maximize corporate enterprise value.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Velocity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;14 Days to First Milestone</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Initial Time to Value (TTV)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Elapsed Calendar Days from Contract Execution to First Verified Value Milestone Achieved
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Speed with which new customer accounts achieve measurable business impact during onboarding.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Fast value realization permanently inoculates new customer cohorts against early buyer remorse and churn.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake-form" className="py-24 relative bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Engineer Net Revenue Retention as a Predictable System?
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Schedule a Customer Growth Audit with our enterprise architects to eliminate churn risks and unlock latent expansion revenue.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Schedule Growth Audit
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Talk to a Principal Architect
              </span>
            </div>
          </div>

          <AiSalesIntakeForm />
        </div>
      </section>
    </div>
  );
};

export default CustomerGrowthPage;
