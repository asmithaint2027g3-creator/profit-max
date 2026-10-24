import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import { engagementJourneys } from '../../../data/engagementDossierData';
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Handshake,
  Wrench,
  Sparkles,
  Clock,
  Compass,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function EngagementJourneys() {
  const [activeJourney, setActiveJourney] = useState<number>(0);

  const journeyIcons = [ShieldCheck, Zap, Handshake, Wrench, Sparkles];

  const journeyDescriptions = [
    {
      bestFor: 'Skeptical boards, first-time buyers, and organizations needing rigorous validation before capital allocation.',
      strategicPhilosophy: 'Risk de-escalates at each gate. A small diagnostic validates the thesis, a rapid PoV verifies metric movement, and full transformation only mobilizes once directional proof is documented.'
    },
    {
      bestFor: 'Pipeline droughts, quarterly revenue misses, or rapid new-motion market entry where immediate pipeline cannot wait for a 6-month consulting blueprint.',
      strategicPhilosophy: 'Execute first to generate live deals, codify the architecture in parallel, then embed an architect to operationalize the gains.'
    },
    {
      bestFor: 'Category-defining platform plays, major new-geography launches, and PE portfolio companies seeking shared upside.',
      strategicPhilosophy: 'True co-investment. Architecture leads to empirical performance proof, unlocking a multi-quarter joint risk-sharing partnership.'
    },
    {
      bestFor: 'Organizations committed to operating their own revenue engine long-term, requiring internal skill transfer rather than perpetual agency dependency.',
      strategicPhilosophy: 'ProfitMachines designs the blueprint, embeds an operator to build the muscle with your team, and transitions to light-touch governance.'
    },
    {
      bestFor: 'Large enterprise GTM overhauls post-merger or during CRO succession where both parties must have substantial skin in the game.',
      strategicPhilosophy: 'Shared accountability. Diagnosis leads to a transformation program with an 80/20 risk structure, transitioning to outcome compensation.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Engagement Progression Networks"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            Progression Architectures
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engagement Journeys: From First Proof to Long-Term Growth
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            Clients rarely purchase a single engagement in isolation. A multi-stage sequence reduces uncertainty, tests operational alignment, and progressively scales economic commitment as evidence accumulates.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 text-xs max-w-2xl flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              All journeys are modular: you may enter, scale, pause, or exit at formal gate reviews with agreed conversion credits.
            </span>
          </div>
        </div>
      </section>

      {/* Journey Navigation Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-28 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {engagementJourneys.map((journey, idx) => {
              const Icon = journeyIcons[idx % journeyIcons.length];
              const isActive = activeJourney === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveJourney(idx)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{journey.title.split('—')[1]?.replace(/"/g, '').trim() || journey.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Journey Showcase */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(() => {
          const journey = engagementJourneys[activeJourney];
          const desc = journeyDescriptions[activeJourney];
          const Icon = journeyIcons[activeJourney % journeyIcons.length];

          return (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
              {/* Journey Top Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-slate-950 text-white border-b border-slate-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-0.5">
                        {journey.tag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {journey.title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 self-start md:self-auto">
                    {journey.steps.length} Sequenced Phases
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                  <div>
                    <span className="font-bold text-white block mb-1">Best For:</span>
                    <p className="leading-relaxed">{desc.bestFor}</p>
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-1">Strategic Philosophy:</span>
                    <p className="leading-relaxed">{desc.strategicPhilosophy}</p>
                  </div>
                </div>
              </div>

              {/* Step Sequence Flow (Visual Diagram) */}
              <div className="p-6 sm:p-8 bg-slate-50/50">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
                  Phase-by-Phase Execution Architecture
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {journey.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                            {step.step}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-slate-500">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {step.duration}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-slate-900 mb-2">
                          {step.model}
                        </h4>

                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Gate Milestone</span>
                        <span className="font-semibold text-blue-600">Review & Advance</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey Bottom Action Bar */}
              <div className="p-6 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-600">
                  Ready to map this journey to your organization's quarterly objectives?
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    to="/engagement-model/model-selector"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs"
                  >
                    Match to Your Problem <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/engagement-model/commercials"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                  >
                    View Commercial Terms
                  </Link>
                </div>
              </div>
            </div>
          );
        })()}

        {/* All 5 Journeys Overview Matrix */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Comparative Summary of All Five Pathways</h3>
          <div className="space-y-4">
            {engagementJourneys.map((j, idx) => (
              <div
                key={idx}
                onClick={() => setActiveJourney(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  activeJourney === idx
                    ? 'bg-blue-50/50 border-blue-400 ring-1 ring-blue-400/40 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-700">Journey {String.fromCharCode(65 + idx)}</span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-500 font-medium">{j.tag}</span>
                  </div>
                  <h4 className="font-bold text-slate-900">{j.title}</h4>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {j.steps.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono font-semibold"
                    >
                      {s.model}
                    </span>
                  ))}
                  <span className="text-xs font-semibold text-blue-600 ml-2 hidden md:inline">
                    Select Pathway →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Disclaimer */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3.5">
          <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block text-amber-900">Commercial Notice & Flexibility</span>
            <p className="leading-relaxed">
              These journeys describe proven engagement sequences based on past deployment patterns. They do not constitute mandatory lock-in or guaranteed economic results. Every phase requires explicit mutual signoff via an agreed Engagement Charter, with conversion credits applicable between stages as negotiated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
