import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Zap,
  Sparkles,
  Lock,
  ChevronRight,
  Layers,
  Clock,
  ArrowUpRight,
  Flame,
  XCircle,
  Activity,
  Target
} from 'lucide-react';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function GrowthIndustryPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Startups & Mid-Market: The Velocity Engine | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const stages = [
    {
      num: '01',
      tag: 'STARTUP · SEED TO SERIES A',
      title: 'AI Zero-to-One Lead Generation',
      desc: 'Automate your first customer acquisition campaigns. Perfect for early-stage companies needing to validate market interest quickly.',
      outcomes: [
        'First 25 enterprise customers acquired in 45 days',
        '$180K ARR generated in first quarter',
        'Outbound campaigns launched within 48 hours'
      ]
    },
    {
      num: '02',
      tag: 'VALIDATION · PMF SCORING',
      title: 'AI Product-Market Fit Signal Detection',
      desc: 'Validate product-market fit using behavioral analytics. Measure user retention, feature adoption, and organic referral velocity.',
      outcomes: [
        '62% 30-day cohort retention achieved (up from 18%)',
        '3.4× viral referral coefficient measured',
        'Series A ready data room with cohort defensibility'
      ]
    },
    {
      num: '03',
      tag: 'LEADERSHIP · FOUNDER TIME',
      title: 'AI Founder-Led Sales Automation',
      desc: 'Scale founder sales without burning out leadership. Automate inbound qualification, meeting booking, and deal follow-ups.',
      outcomes: [
        '20 hours per week reclaimed for product leadership',
        '55% higher qualified meeting conversion rate',
        'Zero inbound lead leakage across all channels'
      ]
    },
    {
      num: '04',
      tag: 'CAPITAL EFFICIENCY · CASH RUNWAY',
      title: 'AI Burn-Rate Optimized Lead Capture',
      desc: 'Maximize lead volume while preserving runway. Deploy low-cost organic intent capture and high-ROI outbound loops.',
      outcomes: [
        '9 months cash runway extended without slowing GTM',
        '25% month-over-month revenue growth sustained',
        '68% lower customer acquisition cost (CAC)'
      ]
    },
    {
      num: '05',
      tag: 'MID-MARKET · SPEED-TO-REVENUE',
      title: 'AI Rapid Market Entry Engine',
      desc: 'Accelerate speed-to-revenue in new verticals. Deploy pre-configured vertical outreach campaigns and content vectors in days, not months.',
      outcomes: [
        '30-day rollout across 3 vertical sectors',
        '$2.4M in new vertical pipeline generated',
        '4× faster speed-to-first-contract'
      ]
    },
    {
      num: '06',
      tag: 'CONCENTRATED VERTICALS · DOMINANCE',
      title: 'AI Niche Market Domination',
      desc: 'Capture market share in highly concentrated verticals. Map and engage every single key account within specialized niches.',
      outcomes: [
        '48% total market share captured in 12 months',
        '94% target account reach across 1,200 firms',
        '3.6× pipeline density vs. generic competitors'
      ]
    },
    {
      num: '07',
      tag: 'HEADCOUNT OPTIMIZATION · AMPLIFICATION',
      title: 'AI Lean Team Productivity Amplifier',
      desc: 'Multiply sales output without adding headcount. Automate routine prospecting, data entry, and follow-ups to keep teams selling.',
      outcomes: [
        '6-person team delivers output of an 18-person sales org',
        '15+ active selling hours reclaimed per rep weekly',
        '$450,000 saved annually in avoided headcount costs'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (High-Energy, Vibrant Blue & Indigo) ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        {/* Ambient Grid */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
            <Rocket className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span className="font-mono text-blue-600 font-extrabold">THE VELOCITY ENGINE</span>
            <span className="text-slate-300 font-normal">//</span>
            <span>STARTUPS & MID-MARKET</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading max-w-4xl mx-auto">
            Zero-to-One to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Market Domination.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal mb-10">
            For high-growth scale-ups, mid-market challengers, and venture-backed startups. We turn capital-intensive manual prospecting into autonomous, burn-rate-optimized customer acquisition engines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
            >
              <span>Get Your Growth Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#carousel"
              className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
            >
              <span>Explore Stages (01–07)</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: HORIZONTAL SCROLL CAROUSEL (CSS Snap-Scrolling) ── */}
      <section id="carousel" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
              THE PROGRESSION PATHWAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Seven Velocity Stages
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel('left')}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 flex items-center justify-center transition-colors shadow-xs cursor-pointer font-bold"
              aria-label="Previous card"
            >
              ←
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 flex items-center justify-center transition-colors shadow-xs cursor-pointer font-bold"
              aria-label="Next card"
            >
              →
            </button>
          </div>
        </div>

        {/* Snap-Scroll Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-smooth snap-x snap-mandatory scrollbar-none no-scrollbar"
        >
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="w-[340px] sm:w-[380px] shrink-0 snap-start rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Background Stage Number */}
              <div className="absolute top-2 right-4 text-7xl sm:text-8xl font-black font-mono text-slate-100 select-none pointer-events-none group-hover:text-blue-50 transition-colors">
                {stage.num}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block mb-4">
                  {stage.tag}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-blue-600 transition-colors">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {stage.desc}
                </p>

                <div className="space-y-2.5 border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold block mb-1">
                    Verified Outcomes:
                  </span>
                  {stage.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-blue-600">
                <span>STAGE {stage.num} OF 07</span>
                <span className="group-hover:translate-x-1 transition-transform">Deploy →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: "BEFORE vs. AFTER" COMPARISON BLOCK ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              SYSTEMIC TRANSFORMATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              The Startup Growth Disconnect
            </h2>
            <p className="text-base text-slate-600">
              Why traditional hiring and manual outbound burns runway while autonomous revenue systems compound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left: The Old Way (Rose/Red) */}
            <div className="rounded-3xl bg-rose-50/50 border border-rose-200/80 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                    The Old Way // High Burn
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                  Manual, Fragile, & Headcount-Dependent
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>High CAC & Burn Rate:</strong> Expensive rep salaries, software tool licenses, and paid ad waste burn precious runway in months.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Founder Time Bottleneck:</strong> Founders spend 30+ hours per week manually qualifying leads and managing outbound spreadsheets.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Subjective PMF Guesswork:</strong> Product roadmap steered by loud anecdotal voices rather than statistical cohort retention curves.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span><strong>Slow Ramp Lag:</strong> 4–6 months wasted hiring, onboarding, and ramping junior SDRs who often churn before paying for themselves.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-200/80 text-xs font-mono text-rose-700 font-semibold">
                Result: Shortened Runway, Stalled Series A Pipeline
              </div>
            </div>

            {/* Right: The ProfitMachines Way (Emerald/Blue) */}
            <div className="rounded-3xl bg-blue-50/50 border border-blue-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                    The ProfitMachines Way // Autonomous Velocity
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                  Autonomous, Capital-Efficient, & Compounding
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span><strong>Extended Cash Runway:</strong> Automated agent fleets execute 24/7 outbound with zero additional headcount, extending runway by 9+ months.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span><strong>Reclaimed Founder Leadership:</strong> Autonomous SDR pre-qualifies prospects, presenting founders only with warm calendar meetings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span><strong>Empirical PMF Validation:</strong> Algorithmic cohort telemetry measures feature adoption and viral referral coefficients with investor-ready precision.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span><strong>Instant 48-Hour Deployment:</strong> Pre-configured vertical outreach engines launch in 48 hours, delivering immediate qualified meetings.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200/80 text-xs font-mono text-blue-700 font-semibold">
                Result: 3× Team Output, 25% MoM Growth, Series A Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BOTTOM CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>ACCELERATE CAPITAL-EFFICIENT GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Extend Your Runway. Accelerate Your Growth.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Deploy pre-built zero-to-one lead generation, founder-led sales automation, and niche market domination engines in days.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Startups & Mid-Market Velocity Blueprint"
            defaultPriority="Revenue Discovery"
          />
        </div>
      </section>
    </div>
  );
}
