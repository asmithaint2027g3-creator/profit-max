import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Globe,
  Handshake,
  Users,
  Lock,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Layers,
  FileCheck,
  Award
} from 'lucide-react';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function EnterpriseIndustryPage() {
  useEffect(() => {
    document.title = 'Enterprise Global Revenue OS: The Boardroom Briefing | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Cinematic, Expansive 100vh Feel — Home Page Blue & White Theme) ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-between bg-white text-slate-900 overflow-hidden border-b border-slate-200">
        {/* Subtle Ambient Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10 flex-1 flex flex-col justify-center text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-8 mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-mono text-blue-600 font-extrabold">THE BOARDROOM BRIEFING</span>
            <span className="text-slate-300 font-normal">//</span>
            <span>ENTERPRISE REVENUE OS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-slate-900 tracking-tight leading-[1.04] mb-8 font-heading">
            Enterprise Global{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Account Penetration.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal mb-10">
            For multi-billion-dollar organizations with complex corporate hierarchies. We engineer board-defensible business cases, map subsidiary trees, and unlock multi-million dollar co-sell partnerships.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
            >
              <span>Request Executive Briefing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#offerings"
              className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-7 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
            >
              <span>Explore Architecture</span>
              <ChevronDown className="w-4 h-4 text-blue-600" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pb-8 text-center relative z-10 flex flex-col items-center gap-1.5 text-xs font-mono text-slate-400">
          <span>Scroll to Explore Executive Briefing</span>
          <ChevronDown className="w-4 h-4 text-blue-600 animate-bounce" />
        </div>
      </section>

      {/* ── SECTION 2: FULL-WIDTH ALTERNATING SECTIONS (Heavy Negative Space) ── */}
      <div id="offerings" className="divide-y divide-slate-200">
        
        {/* OFFERING 01: AI Global Account Penetration */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>ENTERPRISE ARCHITECTURE · 01</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
              AI Global Account Penetration
            </h2>

            {/* Statement Typography */}
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-heading font-medium mb-10 border-l-4 border-blue-600 pl-6 bg-slate-50/50 py-4 rounded-r-2xl">
              &ldquo;AI maps full corporate structures, uncovering unserved subsidiaries and triggering executive introduction playbooks automatically — turning single-division footprints into global enterprise agreements.&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">The Enterprise Reality</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Enterprise accounts are often trapped inside a single subsidiary or business unit. Sales teams lack visibility into the global corporate parent-subsidiary hierarchy, resulting in 15+ unmonetized divisions and fragmented 12-month sales cycles.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">The Architecture Solution</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Autonomous perception agents scrape SEC filings, cross-border corporate registries, and org chart changes, assembling complete corporate trees and equipping enterprise AEs with pre-mapped division introduction paths.
                </p>
              </div>
            </div>

            {/* Verified Outcomes Highlight */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Verified Global Expansion Outcomes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono mb-1">12</div>
                  <div className="text-xs text-slate-600 font-medium">Subsidiaries Expanded</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-mono mb-1">4.2×</div>
                  <div className="text-xs text-slate-600 font-medium">Contract Value Multiplier</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono mb-1">50%</div>
                  <div className="text-xs text-slate-600 font-medium">Faster Expansion Cycle</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFFERING 02: AI Strategic Partnership Opportunity Finder */}
        <section className="py-24 sm:py-32 bg-slate-50/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold mb-6">
              <Handshake className="w-3.5 h-3.5" />
              <span>ENTERPRISE ARCHITECTURE · 02</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
              AI Strategic Partnership Opportunity Finder
            </h2>

            {/* Statement Typography */}
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-heading font-medium mb-10 border-l-4 border-indigo-600 pl-6 bg-white py-4 rounded-r-2xl border border-slate-200 shadow-xs">
              &ldquo;AI scans global ecosystem compatibility, scores customer overlap against major system integrators and hyperscalers, and automates joint co-selling playbooks with mathematical attribution.&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">The Channel Dilemma</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Partnerships remain trapped on slide decks with no revenue attribution. Strategic alliances consume executive attention while reseller networks underperform, resulting in zero forecastable co-sell pipeline.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider block mb-2">The Ecosystem Solution</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We deploy automated account-overlap telemetry matching your target lists against major cloud marketplace catalogues and top tier-1 consultancies, generating pre-qualified joint deal rooms.
                </p>
              </div>
            </div>

            {/* Verified Outcomes Highlight */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Verified Partnership Outcomes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono mb-1">$12M</div>
                  <div className="text-xs text-slate-600 font-medium">Channel Pipeline Year 1</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-mono mb-1">3.5×</div>
                  <div className="text-xs text-slate-600 font-medium">Partner Reach Multiplier</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono mb-1">65%</div>
                  <div className="text-xs text-slate-600 font-medium">Co-Sell Win Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFFERING 03: AI Executive Engagement Automation */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>ENTERPRISE ARCHITECTURE · 03</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
              AI Executive Engagement Automation
            </h2>

            {/* Statement Typography */}
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-heading font-medium mb-10 border-l-4 border-purple-600 pl-6 bg-slate-50/50 py-4 rounded-r-2xl">
              &ldquo;AI mines annual 10-K filings, earnings transcripts, and corporate ESG mandates to auto-generate CFO-ready business cases that align precisely with board-level initiatives.&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">The C-Suite Block</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Deals stall when pushed up to the CFO and CRO. Reps arrive with product feature decks instead of board-level financial models, triggering procurement scrutiny and endless evaluation cycles.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider block mb-2">The Financial Engineering Solution</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We generate bespoke, pre-PO ROI battlecards calibrated to the target enterprise's public guidance, cost-of-capital requirements, and payback thresholds for rapid sign-off.
                </p>
              </div>
            </div>

            {/* Verified Outcomes Highlight */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Verified Executive Outcomes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono mb-1">82%</div>
                  <div className="text-xs text-slate-600 font-medium">C-Suite Meeting Acceptance</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-mono mb-1">60%</div>
                  <div className="text-xs text-slate-600 font-medium">Faster Executive Sign-Off</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono mb-1">3.1×</div>
                  <div className="text-xs text-slate-600 font-medium">Average Contract Value</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION 3: "THE EXECUTIVE OUTCOME" SHOWCASE ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-4 font-bold">
            THE EXECUTIVE OUTCOME BENCHMARK
          </span>

          <div className="text-5xl sm:text-7xl lg:text-8xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 tracking-tight mb-6">
            82%
          </div>

          <p className="text-xl sm:text-2xl font-bold text-white max-w-2xl mx-auto mb-4 font-heading">
            Executive Meeting Acceptance Rate Across Fortune 1000 Targets
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Measured across 50,000+ enterprise executive interactions. Zero generic cold email templates; 100% board-level financial relevance.
          </p>

          <div className="inline-flex items-center gap-6 font-mono text-xs text-slate-400 border-t border-slate-800 pt-6">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% SEC/10-K Alignment
            </span>
            <span>·</span>
            <span>CFO Payback Pre-Approved</span>
            <span>·</span>
            <span>SOC2 Type II Encrypted</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BOTTOM CTA & INTAKE ── */}
      <section id="intake" className="py-24 sm:py-32 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>CONFIDENTIAL BOARDROOM BRIEFING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Request an Executive Briefing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Engage directly with our Senior Enterprise Architects. Consultations are protected under mutual enterprise non-disclosure agreements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Enterprise Global Revenue OS Briefing"
            defaultPriority="Full ORIGIN Framework"
          />
        </div>
      </section>
    </div>
  );
}
