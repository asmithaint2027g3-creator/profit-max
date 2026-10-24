import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import {
  pricingStructuresTable,
  sevenGuardrails,
  teamRoleArchitecture,
  decisionQuestions
} from '../../../data/engagementDossierData';
import {
  DollarSign,
  Shield,
  Users,
  HelpCircle,
  CheckCircle2,
  Lock,
  ArrowRight,
  FileCheck,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function EngagementCommercials() {
  const [activeTab, setActiveTab] = useState<'table' | 'guardrails' | 'roles' | 'questions'>('table');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial Architecture Systems"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <DollarSign className="w-3.5 h-3.5 text-blue-400" />
            Commercial Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Commercial Alignment by Design
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            Commercial terms should reflect the work, evidence, risk, and accountability involved. ProfitMachines replaces traditional open-ended billing with structured risk allocations, conversion credits, and verified performance gates.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs max-w-3xl flex items-start gap-3 shadow-inner">
            <Scale className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Commercial Transparency Principle:</span>
              <span>
                Percentages, variable multipliers, and revenue-share ranges presented here reflect standard proposed structures from our 2026 Dossier. Final terms, attribution thresholds, downside caps, and success criteria are formalized in a mutually executed Engagement Charter.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-28 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: 'table', label: 'Commercial Matrix (Table 8.0)', icon: DollarSign },
              { id: 'guardrails', label: 'Seven Standard Guardrails', icon: Shield },
              { id: 'roles', label: 'Team & Role Architecture', icon: Users },
              { id: 'questions', label: '8-Question Decision Guide', icon: HelpCircle }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: Commercial Matrix (Table 8.0) */}
        {activeTab === 'table' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold">Commercial Terms Matrix across Eight Models</h3>
                  <p className="text-xs text-slate-400">Preserved from Revenue Architecture Dossier · Table 8.0</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 self-start sm:self-auto">
                  E1 through E8
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100/90 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <th className="py-4 px-5">Model</th>
                      <th className="py-4 px-5">Base Fee Structure</th>
                      <th className="py-4 px-5">Variable / Outcome Component</th>
                      <th className="py-4 px-5">Payment Terms</th>
                      <th className="py-4 px-5">Minimum Commitment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {pricingStructuresTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-5 font-bold font-mono text-slate-900 whitespace-nowrap bg-slate-50/50">
                          {row.model}
                        </td>
                        <td className="py-4 px-5 font-medium text-slate-800">
                          {row.base}
                        </td>
                        <td className="py-4 px-5">
                          {row.variable !== '—' ? (
                            <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200">
                              {row.variable}
                            </span>
                          ) : (
                            <span className="text-slate-400 font-mono">—</span>
                          )}
                        </td>
                        <td className="py-4 px-5 text-xs text-slate-600">
                          {row.paymentTerms}
                        </td>
                        <td className="py-4 px-5 font-mono text-xs text-slate-700 whitespace-nowrap">
                          {row.minimumCommitment}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conversion Credit Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Key Guardrail: 50–100% Conversion Credit
                </span>
                <h4 className="text-lg font-bold">Proof Should Never Be Paid For Twice</h4>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  Fees invested in an E3 Proof of Value (PoV) or Proof of Performance (PoP) are 50% to 100% credited toward a subsequent transformation or embedded engagement upon mutual signoff.
                </p>
              </div>
              <Link
                to="/engagement-model/onboarding"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold whitespace-nowrap shadow-xs"
              >
                How Engagements Start →
              </Link>
            </div>
          </div>
        )}

        {/* TAB 2: Seven Guardrails */}
        {activeTab === 'guardrails' && (
          <div className="space-y-6">
            <div className="max-w-3xl mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Seven Standard Commercial Guardrails</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To eliminate ambiguity and align economic incentives, every ProfitMachines engagement adheres to these seven contractual principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sevenGuardrails.map((guardrail, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        Guardrail 0{idx + 1}
                      </span>
                      <Shield className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {guardrail.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guardrail.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                    Mandatory Pre-Signature Requirement
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Team & Role Architecture */}
        {activeTab === 'roles' && (
          <div className="space-y-6">
            <div className="max-w-3xl mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Team & Role Architecture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ProfitMachines deploys specialized operator profiles matched directly to the engagement model. We do not field generic generalist teams.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100/90 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <th className="py-4 px-5">Role Profile</th>
                      <th className="py-4 px-5">Attached Engagement Models</th>
                      <th className="py-4 px-5">Core Responsibility & Ownership</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {teamRoleArchitecture.map((role, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap bg-slate-50/50">
                          {role.role}
                        </td>
                        <td className="py-4 px-5 font-mono text-xs font-semibold text-blue-800">
                          {role.attachedModels}
                        </td>
                        <td className="py-4 px-5 text-xs text-slate-600 leading-relaxed">
                          {role.responsibility}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 8-Question Decision Guide */}
        {activeTab === 'questions' && (
          <div className="space-y-6">
            <div className="max-w-3xl mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Eight-Question Model Selection Guide</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Determine your optimal engagement model in minutes by answering these eight core operational questions from the dossier.
              </p>
            </div>

            <div className="space-y-3">
              {decisionQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    q.accent
                      ? 'bg-amber-50/60 border-amber-300 ring-1 ring-amber-300/30'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {q.qNum}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{q.question}</h4>
                    </div>
                    <p className="text-xs text-slate-500 pl-8">{q.detail}</p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pl-8 md:pl-0">
                    <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200">
                      Recommend: {q.recommendation}
                    </span>
                    <Link
                      to="/engagement-model/model-selector"
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      Test in Selector →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Request a Formal Engagement Charter Outline</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Tell us your current stage and commercial preference. We will draft an engagement scope, baseline lock plan, and transparent fee model within 3 business days.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/engagement-model/model-selector"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xs text-center"
            >
              Run Interactive Selector
            </Link>
            <Link
              to="/engagement-model/onboarding"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 text-center"
            >
              Onboarding Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
