import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import { glossaryTerms, faqList } from '../../../data/engagementDossierData';
import {
  HelpCircle,
  BookOpen,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function EngagementGlossaryFaq() {
  const [activeSection, setActiveSection] = useState<'faq' | 'glossary'>('faq');
  const [glossarySearch, setGlossarySearch] = useState('');
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1]); // First 2 open by default

  const toggleFaq = (idx: number) => {
    if (openFaqIndices.includes(idx)) {
      setOpenFaqIndices(openFaqIndices.filter((i) => i !== idx));
    } else {
      setOpenFaqIndices([...openFaqIndices, idx]);
    }
  };

  const filteredGlossary = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Glossary Reference Architecture"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            Reference & Answers
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engagement Model Reference Guide
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            Detailed definitions for core revenue architecture concepts and definitive answers to common commercial, technical, and operational questions.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>14 Technical Glossary Terms · 7 Core Operational FAQs</span>
          </div>
        </div>
      </section>

      {/* Navigation Switcher (Fixed in Page, No Sliding) */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSection('faq')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSection === 'faq'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions (7)
            </button>
            <button
              onClick={() => setActiveSection('glossary')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSection === 'glossary'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Glossary of Terms (14)
            </button>
          </div>

          {activeSection === 'glossary' && (
            <div className="relative w-48 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search terms..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: FAQs */}
        {activeSection === 'faq' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear, transparent explanations regarding commercial risk, CRM readiness, sales team collaboration, and speed to start.
              </p>
            </div>

            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 shrink-0">
                        0{idx + 1}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        {faq.question}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* SECTION 2: GLOSSARY */}
        {activeSection === 'glossary' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Dossier Glossary of Terms</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Authoritative definitions of architectural terms, framework acronyms, and commercial mechanisms used across ProfitMachines engagements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((termItem, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-mono font-bold text-blue-900 text-sm mb-2">
                      {termItem.term}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {termItem.definition}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>Revenue Architecture</span>
                    <span>Edition 2026</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredGlossary.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                No glossary terms match "{glossarySearch}".
              </div>
            )}
          </div>
        )}

        {/* Bottom Contact / CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Unlisted Operational Inquiries</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our partners are available for a confidential 60-minute discussion regarding your specific commercial architecture.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs"
            >
              Contact Advisory Team →
            </Link>
            <Link
              to="/engagement-model/model-selector"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700"
            >
              Run Model Selector
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
