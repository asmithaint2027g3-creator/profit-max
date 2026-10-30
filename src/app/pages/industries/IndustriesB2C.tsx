import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag, ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck,
  BarChart3, ChevronRight, Sparkles, AlertCircle, CheckCircle2, Users,
  Activity, Search, DollarSign, Layers, RefreshCw, HelpCircle,
  Zap, Eye, Settings, Network, Compass, ShoppingCart, Percent, HeartHandshake
} from 'lucide-react';

const sectionNav = [
  { id: 'challenges', label: 'Consumer Challenges' },
  { id: 'journey', label: 'Journey Map' },
  { id: 'omnichannel', label: 'Omnichannel Lead Gen' },
  { id: 'lookalike', label: 'Lookalike Auto-Scaling' },
  { id: 'offers', label: 'Personalized Offers' },
  { id: 'retargeting', label: 'Behavioral Retargeting' },
  { id: 'dashboard', label: 'Growth Dashboard' },
  { id: 'experiments', label: 'Experimentation' },
  { id: 'faq', label: 'FAQ' },
];

const challenges = [
  {
    title: 'Surging Customer Acquisition Costs',
    cause: 'Rising ad network CPMs, platform privacy changes, and auction saturation dilute paid media efficiency across primary consumer channels.',
    consequence: 'Gross margins erode and customer lifetime value cannot comfortably offset initial acquisition spend.',
    icon: DollarSign,
  },
  {
    title: 'Fragmented Consumer Touchpoints',
    cause: 'Social discovery, paid search, email, and mobile storefronts operate in silos without centralized event streaming or unified visitor state.',
    consequence: 'Shoppers receive discordant promotions and messaging that degrades brand trust and lowers purchase intent.',
    icon: Network,
  },
  {
    title: 'Checkout & Cart Abandonment',
    cause: 'High friction at consideration, unexpected shipping costs, or lack of tailored urgency cues cause shoppers to drop off at the final step.',
    consequence: 'Up to 70% of engaged cart intent is abandoned, turning expensive acquisition traffic into wasted pipeline.',
    icon: ShoppingCart,
  },
  {
    title: 'Weak Repeat Purchasing & LTV Decay',
    cause: 'First-time buyers are treated with static, mass-broadcast newsletters rather than cohort-specific re-order triggers and contextual incentives.',
    consequence: 'Customer churn accelerates post-first order, forcing continuous reliance on expensive net-new acquisition.',
    icon: RefreshCw,
  },
  {
    title: 'Blanket Discounting Margin Loss',
    cause: 'Promotions are broadcast sitewide to all visitors rather than reserved exclusively for price-sensitive or high-bounce risk cohorts.',
    consequence: 'Margin is forfeited on buyers who were already prepared to purchase at full MSRP.',
    icon: Percent,
  },
  {
    title: 'Attribution Invisibility',
    cause: 'Cross-device journeys and multi-touch interactions are flattened into basic last-click attribution models.',
    consequence: 'High-performing upper-funnel discovery channels are mistakenly defunded while bottom-funnel captures receive disproportionate credit.',
    icon: Eye,
  },
];

const journeyStages = [
  { stage: 'Discover', need: 'Contextual brand discovery & category interest', signals: 'Search queries, social intent, lookalike click-through', action: 'Omnichannel dynamic placement allocation', kpi: 'Cost Per Discovery' },
  { stage: 'Engage', need: 'Relevant landing experience & product education', signals: 'Scroll depth, PDP browse patterns, category dwell time', action: 'Adaptive collection curation & social proof display', kpi: 'Engaged Session Rate' },
  { stage: 'Consider', need: 'Value confirmation & competitive comparison', signals: 'Size selection, reviews inspected, price checks', action: 'Contextual FAQs & dynamic bundle recommendations', kpi: 'Add-to-Cart %' },
  { stage: 'Purchase', need: 'Frictionless checkout & payment flexibility', signals: 'Cart value, shipping tier selection, checkout step progression', action: 'Targeted payment flexibility & threshold incentives', kpi: 'Checkout Completion' },
  { stage: 'Recover', need: 'Re-engagement following unexpected session exit', signals: 'Cart abandonment, checkout exit, inactive session trigger', action: 'Multi-touch contextual email & SMS recovery sequence', kpi: 'Cart Recovery Rate' },
  { stage: 'Retain', need: 'Replenishment, cross-category discovery & loyalty', signals: 'Consumable usage interval, tenure milestones, product feedback', action: 'Predictive replenishment triggers & loyalty incentives', kpi: 'Repeat Order Rate (90d)' },
];

const kpiData = [
  { label: 'Blended CAC', value: '$34.20', note: 'Total spend ÷ Validated conversions' },
  { label: 'Visitor-to-Order CVR', value: '3.85%', note: 'Completed purchases ÷ Unique visits' },
  { label: 'Cart Abandonment Rate', value: '58.4%', note: 'Down from 71.2% baseline' },
  { label: 'Average Order Value (AOV)', value: '$112.50', note: 'Cross-sell dynamic lift' },
  { label: 'Repeat Purchase Rate (90d)', value: '32.6%', note: 'Second order within 90 days' },
  { label: 'Gross Margin After Promo', value: '62.4%', note: 'Protected via margin guardrails' },
  { label: 'Blended ROAS', value: '4.15x', note: 'Attributed revenue ÷ Media spend' },
  { label: 'Recovered Checkout ARR', value: '$480K', note: 'Automated SMS/Email loops' },
];

const experiments = [
  {
    title: 'Hypothesis A: Dynamic Cart Thresholds',
    segment: 'First-time visitors with cart value between $75-$99',
    intervention: 'Display dynamic free expedited shipping progress meter + $15 category complement tier',
    measurement: 'Evaluate AOV lift and checkout completion against control group (flat $10 shipping)',
    outcome: '+18.4% AOV lift with neutral margin impact; expanded into production',
    status: 'Scaled',
    color: 'emerald'
  },
  {
    title: 'Hypothesis B: Behavioral Cart Recovery Cadence',
    segment: 'High-intent abandoned checkouts with verified SMS opt-in',
    intervention: 'Send 12-minute contextual SMS with product image + 24-hour reserve link vs standard 4-hour email',
    measurement: 'Track recovered checkout conversion and unsubscribe rate across 14-day cohort',
    outcome: '+28% recovery lift within first 2 hours; zero increase in opt-outs',
    status: 'Scaled',
    color: 'blue'
  },
  {
    title: 'Hypothesis C: Lookalike Seed Cleansing',
    segment: 'Top 10% LTV multi-order customers vs broad recent-purchaser list',
    intervention: 'Train ad network audience expansion solely on 3+ order customer cohorts',
    measurement: 'Compare 30-day conversion rate and repurchase velocity against standard 1% pixel lookalikes',
    outcome: '−24% initial CAC reduction with 2.1x higher 60-day repurchase rate',
    status: 'Validated',
    color: 'indigo'
  }
];

const faqs = [
  { q: 'How does dynamic offer personalization protect brand profit margins?', a: 'Guardrails are hardcoded into the rules engine: promotions are bounded by maximum discount percentages, minimum cart totals, and SKU-level contribution margin floors. The platform only issues tailored incentives to sessions exhibiting hesitation or price-sensitivity signals, ensuring full-price buyers complete checkout unassisted.' },
  { q: 'What data infrastructure is required for omnichannel lead capture?', a: 'Standard eCommerce platforms (Shopify Plus, BigCommerce, custom headless APIs) integrated with event streaming (Klaviyo, Segment, or webhook endpoints) provide sufficient baseline telemetry. First-party session cookies and consented identifiers are prioritized in compliance with modern privacy standards.' },
  { q: 'Can lookalike audience expansion function with privacy restrictions?', a: 'Yes. Audience expansion uses privacy-preserving hashed customer cohort identifiers uploaded directly into platform APIs (Meta Conversions API, Google Enhanced Conversions) adhering to GDPR, CCPA, and ATT protocols. Customer PII never leaves your governed environment in unhashed form.' },
  { q: 'How quickly does behavioral cart recovery initiate?', a: 'Workflows typically trigger within 10 to 15 minutes of session abandonment across authorized SMS or email channels. Staggered sequences follow at 24 and 48 hours with escalation rules that halt immediately once a purchase is logged.' },
  { q: 'Does this replace our marketing and creative agency?', a: 'No. The system acts as the operational and analytical execution engine that tests audiences, personalizes offers, and optimizes budget allocations. Creative strategy, brand storytelling, and campaign assets continue to be guided by your creative leaders.' },
  { q: 'How do you prevent coupon leakages and promotional scraping?', a: 'The engine generates unique, single-use dynamic checkout vouchers tied to specific session IDs or authenticated user tokens. Broad generic codes susceptible to browser extension scrapers are eliminated.' },
];

export default function IndustriesB2C() {
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'B2C Consumer Growth Engineering | Omnichannel & Conversion | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <ShoppingBag className="w-3.5 h-3.5" /><span>Consumer Growth Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 leading-[1.1]">
                Turn Consumer Intent Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Profitable Customer Growth.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                Consumer growth requires coordinated acquisition, relevant experiences, timely responses, and retention strategies. ProfitMachines helps organizations evaluate the customer journey and design more connected workflows around intent, conversion friction, and repeat purchasing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#omnichannel" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5">
                  Explore B2C Capabilities <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
                  Book a Growth Audit <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                {[
                  { val: '4 Engines', label: 'Acquisition & Retention' },
                  { val: 'Omnichannel', label: 'Search, Social & SMS' },
                  { val: 'Margin-Locked', label: 'Safe Dynamic Promos' },
                  { val: 'Continuous', label: 'Closed-Loop Tests' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">{m.val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consumer Lifecycle Visual */}
            <div className="hidden lg:block">
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Consumer Funnel Velocity Telemetry</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active Lifecycle</span>
                </div>
                <div className="space-y-3">
                  {journeyStages.map((st, i) => (
                    <div key={st.stage} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                      <div className="flex-1 bg-slate-800/80 rounded-lg px-4 py-2 border border-slate-700/80">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{st.stage}</span>
                          <span className="text-[10px] font-mono text-emerald-400">{st.kpi}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{st.signals}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY SUBNAV ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5">
            {sectionNav.map(item => (
              <a key={item.id} href={`#${item.id}`} className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: CONSUMER CHALLENGES ── */}
      <section id="challenges" className="py-20 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <AlertCircle className="w-3.5 h-3.5" /> Friction Diagnostics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Consumer Growth Bottlenecks Erode Lifetime Unit Economics.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Acquiring consumer revenue has shifted from broad advertising arbitrage to precision unit economics. When channels, discounts, and checkout recovery operate independently, acquisition costs surge while customer retention drops.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(ch => {
              const Icon = ch.icon;
              return (
                <div key={ch.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2">{ch.title}</h3>
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Operational Cause: </span>
                      <span className="text-xs text-slate-600">{ch.cause}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 mt-3">
                    <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-wider">Commercial Impact: </span>
                    <span className="text-xs text-slate-600">{ch.consequence}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: JOURNEY MAP ── */}
      <section id="journey" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/60 text-slate-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" /> Lifecycle Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">The Coordinated Consumer Growth Engine</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Each touchpoint captures behavioral intent signals, triggering contextual interventions that balance conversion velocity with strict gross margin discipline.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {journeyStages.map((st, i) => (
              <div key={st.stage} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">0{i + 1}</div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">{st.stage}</h3>
                  <p className="text-[11px] text-slate-500 mb-3 leading-snug">{st.need}</p>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 mb-3 space-y-1">
                    <div className="font-bold text-slate-800">Signals:</div>
                    <div className="leading-tight">{st.signals}</div>
                  </div>
                  <div className="text-[10px] text-slate-700 font-medium leading-snug mb-2">
                    <span className="font-bold text-emerald-700">Action: </span>{st.action}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono font-bold text-emerald-600">
                  {st.kpi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3.1: OMNICHANNEL ── */}
      <section id="omnichannel" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <BarChart3 className="w-3.5 h-3.5" /> Capability 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Omnichannel Lead Generation
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Consumer brands suffer when paid search, social platforms, and retail media networks operate in functional silos with competing attribution models. This capability synchronizes budget pacing and creative rotation across authorized networks based on verified return on ad spend and incremental lift.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Programmatic Budget Shifting', desc: 'Algorithms continuously rebalance spend towards top-converting channel variants as auction density fluctuates throughout the day.' },
                  { title: 'Multi-Channel Audience Synchronization', desc: 'Audiences that interact on social discovery feeds receive coordinated educational content on search and email rather than repetitive top-of-funnel ads.' },
                  { title: 'Incrementality & Attribution Auditing', desc: 'Media mix models assess true incremental conversion lift, penalizing channels that simply cannibalize branded organic demand.' },
                ].map(item => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">Data & Platform Connectors</div>
              <div className="flex flex-wrap gap-2">
                {['Meta Conversions API', 'Google Enhanced Conversions', 'TikTok Events API', 'Shopify Analytics', 'Customer Data Platforms'].map(d => (
                  <span key={d} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold">{d}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Operational KPI Scorecard</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Blended Cost Per Acquisition', def: 'Total Media Spend ÷ Verified Net-New Customers' },
                    { kpi: 'First-Touch Incrementality Index', def: 'Attributed Revenue from Unbranded Search & Social' },
                    { kpi: 'Cross-Network Return on Ad Spend', def: 'Gross Revenue ÷ Programmatic Ad Outlay' },
                    { kpi: 'Channel Saturation Coefficient', def: 'Marginal CAC threshold indicating diminishing audience returns' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5">
                <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-2">Human Review Guardrails</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Campaign creative concepts, brand positioning guidelines, and maximum budget pacing caps require executive marketing sign-off. The algorithmic engine optimizes execution within explicitly approved parameters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.2: LOOKALIKE ── */}
      <section id="lookalike" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Users className="w-3.5 h-3.5" /> Capability 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Lookalike Audience Auto-Scaling
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Most audience expansion efforts fail because seed lists aggregate all historical purchasers indiscriminately — including discount-seekers and single-item returners. This engine segments your top decile lifetime value cohorts to generate high-propensity expansion seeds.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'High-LTV Seed Cohort Isolation', desc: 'Isolates buyers with multi-order tenure, low return rates, and high contribution margins to prevent training algorithms on low-quality traffic.' },
                  { title: 'SHA-256 Privacy-Compliant Hashing', desc: 'Client records are hashed securely client-side in full compliance with GDPR and CCPA before feed ingestion.' },
                  { title: 'Audience Fatigue & Saturation Radar', desc: 'Detects frequency saturation and declining CTR early, automatically refreshing seed cohorts every 14 days.' },
                ].map(item => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Expansion KPIs</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Seed Quality Retention Index', def: 'Match rate and intent score of expanded platform lookalikes' },
                    { kpi: 'Cost Per Qualified Add-to-Cart', def: 'Mid-funnel acquisition cost from lookalike cohorts' },
                    { kpi: '90-Day Repurchase Velocity', def: 'Rate at which new lookalike acquisitions convert to repeat buyers' },
                    { kpi: 'First-Order Contribution Margin', def: 'Net margin after fully loaded acquisition media costs' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">Privacy & Consent Compliance</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Only customers who have explicitly provided marketing consent via verified opt-in protocols are eligible for seed inclusion. Opt-outs and erasure requests are propagated across connected network APIs automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.3: OFFERS ── */}
      <section id="offers" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Percent className="w-3.5 h-3.5" /> Capability 03
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Personalized Offer Generation at Scale
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Blanket discounting devalues brand equity and forfeits gross margin on buyers who would purchase at full price. This engine evaluates real-time browsing dwell, cart composition, and inventory depth to calculate individual promotions bounded by strict profitability guardrails.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Inventory-Aware Curation', desc: 'Promotions prioritize overstocked or slow-moving SKUs while protecting fast-moving high-margin catalog lines.' },
                  { title: 'Single-Use Session Vouchers', desc: 'Dynamic single-use codes tied to authenticated tokens prevent browser extension coupon leakage.' },
                  { title: 'Margin Floor Protection', desc: 'Hardcoded algorithmic rules terminate discount eligibility if gross margin drops below target thresholds.' },
                  { title: 'Intelligent Tiered Bundling', desc: 'Recommends complementary accessories calculated to elevate average cart value past shipping qualification tiers.' },
                ].map(item => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Commercial Outcome KPIs</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Net Margin Per Order', def: 'Revenue minus COGS and specific coupon discount values' },
                    { kpi: 'Average Order Value Lift', def: 'Cart total increase driven by automated bundling triggers' },
                    { kpi: 'Promotional Redemption Rate', def: 'Unique dynamic codes generated vs completed checkouts' },
                    { kpi: 'Full-Price Purchase Preservation', def: 'Proportion of transactions completed without discount intervention' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-cyan-50 rounded-2xl border border-cyan-200 p-5">
                <div className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider mb-2">Ethical Pricing & Transparency</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  ProfitMachines strictly avoids discriminatory dynamic base pricing. All users view identical public catalog MSRPs; personalization applies solely to promotional packaging, threshold bonuses, and loyalty tier incentives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.4: RETARGETING ── */}
      <section id="retargeting" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <ShoppingCart className="w-3.5 h-3.5" /> Capability 04
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                AI Behavioral Retargeting Autopilot
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                When shoppers abandon high-intent carts, generic batch emails sent 12 hours later convert poorly. This autopilot deploys contextual omnichannel sequences across verified SMS and email within minutes, personalized with exact SKU context and inventory availability.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Sub-15-Minute Recovery Initiation', desc: 'Trigger sequences engage shoppers while high intent is still fresh, dramatically boosting recovery probabilities.' },
                  { title: 'Dynamic Contextual Re-Engagement', desc: 'Communications dynamically render exact items left in cart alongside customer reviews and specific sizing guidance.' },
                  { title: 'Frequency Caps & Suppression Safeguards', desc: 'Automated suppression halts all retargeting sequences instantly once checkout completion is detected across any device.' },
                ].map(item => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Recovery Metrics</div>
                <div className="space-y-3">
                  {[
                    { kpi: 'Abandoned Cart Recovery Rate', def: 'Recovered orders ÷ Total detected abandoned checkouts' },
                    { kpi: 'Time to Re-Engagement', def: 'Average minutes elapsed from abandonment to initial link open' },
                    { kpi: 'Incremental Recovery ARR', def: 'Net revenue attributed to automated recovery touchpoints' },
                    { kpi: 'Unsubscribe / Opt-Out Rate', def: 'Monitored under 0.2% ceiling to preserve channel reputation' },
                  ].map(item => (
                    <div key={item.kpi} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800">{item.kpi}</span>
                        <span className="text-xs text-slate-500"> — {item.def}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">TCPA & Carrier Compliance</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All automated SMS messages include frictionless one-click opt-out mechanisms and honor strict regional quiet-hours protocols based on recipient time zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: KPI DASHBOARD ── */}
      <section id="dashboard" className="py-20 sm:py-24 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> Consumer Telemetry Cockpit
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">Illustrative B2C Performance Model</h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">Sample metrics reflecting an enterprise consumer retail implementation. All metrics are illustrative scenarios — not actual verified customer results.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {kpiData.map(kpi => (
              <div key={kpi.label} className="bg-slate-900 rounded-xl border border-slate-800 p-4">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">{kpi.label}</div>
                <div className="text-xl font-extrabold font-mono text-white mb-0.5">{kpi.value}</div>
                <div className="text-[10px] text-slate-500">{kpi.note}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
            <span className="text-xs text-slate-400 italic">Illustrative Data — Not Actual Results. Commercial outcomes vary by category seasonality, baseline conversion, product margin profiles, and media investment scales.</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: EXPERIMENTATION ── */}
      <section id="experiments" className="py-20 sm:py-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Growth Discipline
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">Hypothesis-Driven Growth Experimentation</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Systematic revenue scaling requires disciplined testing. Workflows are introduced as isolated experiments, evaluated against holdout groups, and scaled only when unit economics prove accretive.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiments.map(exp => (
              <div key={exp.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Test Card</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">{exp.status}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <div className="text-xs text-slate-600 mb-3 space-y-1">
                    <div><strong className="text-slate-800">Target Segment: </strong>{exp.segment}</div>
                    <div><strong className="text-slate-800">Intervention: </strong>{exp.intervention}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-emerald-800 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                  <strong>Outcome: </strong>{exp.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FAQ ── */}
      <section id="faq" className="py-20 sm:py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">Consumer Growth Engineering — FAQ</h2>
          </div>
          <div className="space-y-3 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors">
                  <span className="text-sm font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${activeFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === i && <div className="px-6 pb-5 bg-white"><p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">Build a More Connected Consumer Growth System.</h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">Diagnose cart leakage, media misallocations, and margin erosion across your consumer journey with a dedicated growth engineering assessment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5">
              Book a Growth Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/offerings/demand-engineering" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">
              Explore Demand Engineering <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
