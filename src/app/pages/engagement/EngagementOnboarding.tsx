import React from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import { onboardingSteps } from '../../../data/engagementDossierData';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCheck,
  Users,
  BarChart,
  Target,
  Sparkles,
  HelpCircle,
  Mail
} from 'lucide-react';

export default function EngagementOnboarding() {
  const stepIcons = [Clock, FileCheck, Target, Users, BarChart, Shield];

  const stepDetails = [
    {
      deliverable: 'Fit & Frame Summary Memo',
      owner: 'ProfitMachines Managing Director & Client Executive',
      detail: 'Identify core bottleneck, segment economics, and determine the optimal low-risk engagement entry point.'
    },
    {
      deliverable: 'Signed Engagement Charter',
      owner: 'Engagement Lead & Client Legal / Sponsor',
      detail: 'Explicit definition of scope boundaries, numerical success bars, data requirements, off-ramp criteria, and conversion credits.'
    },
    {
      deliverable: 'Frozen Baseline Dataset & Telemetry Audit',
      owner: 'Revenue Analyst & Client CRM Admin',
      detail: 'Read-only API access to CRM/billing, attribution taxonomy lock, and pre-campaign measurement baseline signoff.'
    },
    {
      deliverable: 'Sprint Kickoff & Workstream Assignment',
      owner: 'Assigned Operator Pod (RGA, FDA, or Automation Leads)',
      detail: 'Joint operating calendar, communication channels, sprint backlog initialization, and counterpart pairing.'
    },
    {
      deliverable: 'Telemetry Dashboard & Decision Log',
      owner: 'Engagement Lead & Client Counterparts',
      detail: 'Weekly cadence review, blocker removal, live signal telemetry, and transparent sprint burnup.'
    },
    {
      deliverable: 'Gate Review Report & Conversion Accounting',
      owner: 'Governance Steering Board',
      detail: 'Formal audit against charter metrics: decide whether to scale to transformation, transition to outcome terms, or exit.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Mobilization Protocol Architecture"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            Mobilization Protocol
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            How an Engagement Starts
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            A structured, transparent mobilization process designed to eliminate ramp friction, align expectations, lock empirical baselines, and protect both parties from scope creep.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 text-xs max-w-2xl flex items-center gap-3">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Deployment timeline is scheduled only upon mutual charter execution and baseline verification.
            </span>
          </div>
        </div>
      </section>

      {/* Main Timeline Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
            Standard 6-Phase Onboarding Cadence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            From Initial Conversation to Verified Outcome
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Center Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {onboardingSteps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              const detail = stepDetails[idx];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {step.timing}
                      </span>
                      <span className="text-xs font-mono text-slate-400">Step 0{idx + 1}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-700 block text-[11px] uppercase tracking-wider">
                          Key Deliverable:
                        </span>
                        <span className="text-blue-900 font-medium">{detail.deliverable}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700 block text-[11px] uppercase tracking-wider">
                          Accountable Stakeholders:
                        </span>
                        <span className="text-slate-600">{detail.owner}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node Marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-white shadow-md flex items-center justify-center text-blue-400 z-10 hidden md:flex">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Empty counterpart spacer for grid alignment */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Readiness Checklist */}
        <div className="mt-20 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <CheckCircle2 className="w-4 h-4" />
            Client Readiness Checklist
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">What We Need From You to Lock Week 1</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">1. Named Counterpart</span>
              Executive sponsor and functional lead with decision authority during the sprint.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">2. Data & CRM Access</span>
              Read access to CRM, pipeline records, or web telemetry within 5 business days of charter signature.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">3. Team Alignment</span>
              Agreement on working rhythms, sprint check-ins, and scheduled gate reviews.
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Initiate Your Fit & Frame Working Session</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Book a 60-minute confidential consultation with our revenue architecture team to review your stage, problem, and baseline.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs"
            >
              Request Proposal / Book Session
            </Link>
            <Link
              to="/engagement-model/model-selector"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700"
            >
              Test Model Selector
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
