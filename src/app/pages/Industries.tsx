import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Briefcase,
  ShoppingBag,
  Cpu,
  Landmark,
  HeartPulse,
  Factory,
  Radio,
  Sparkles,
  Layers,
  ChevronRight,
  Lock,
  Zap,
  Target,
  Globe,
  Rocket,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Bot
} from 'lucide-react';
import OriginIntakeForm from '../components/forms/OriginIntakeForm';

interface BentoCategory {
  id: string;
  name: string;
  category: 'B2B Focus' | 'B2C Focus' | 'Enterprise' | 'Mid-Market' | 'Startups' | 'Specialized Sectors';
  path: string;
  isFeatured?: boolean;
  descriptor: string;
  metric: string;
  icon: any;
  badge: string;
  tags: string[];
}

const BENTO_ITEMS: BentoCategory[] = [
  // FEATURED ITEM 1: B2B FOCUS ARCHITECTURE (Span 2 cols, 2 rows)
  {
    id: 'b2b-architecture',
    name: 'B2B Focus Architecture',
    category: 'B2B Focus',
    path: '/industries/b2b',
    isFeatured: true,
    descriptor: 'The Tactical Playbook: ABM Autopilot, Competitor Displacement, SDR Co-Pilot, and Bayesian RQL Predictor for complex deal cycles.',
    metric: '3.8× Account Penetration',
    icon: Target,
    badge: 'Flagship Motion · 5 Engines',
    tags: ['ABM Autopilot', 'SDR Co-Pilot', 'Displacement', 'RQL Predictor']
  },
  // FEATURED ITEM 2: ENTERPRISE GLOBAL REVENUE OS (Span 2 cols, 2 rows)
  {
    id: 'enterprise-os',
    name: 'Enterprise Global Revenue OS',
    category: 'Enterprise',
    path: '/industries/enterprise',
    isFeatured: true,
    descriptor: 'The Boardroom Briefing: Global account penetration, multi-subsidiary mapping, hyperscaler co-sell, and board-level executive ROI cases.',
    metric: '82% Exec CVR · $12M Co-Sell',
    icon: Building2,
    badge: 'Fortune 500 · Global Footprint',
    tags: ['Subsidiary Trees', 'CFO Business Cases', 'Co-Sell Alliances']
  },
  // STANDARD ITEMS:
  {
    id: 'b2c-omnichannel',
    name: 'B2C Omnichannel Lead Engine',
    category: 'B2C Focus',
    path: '/industries/b2b',
    descriptor: 'Automate cross-platform social, search, and email ad bidding with dynamic 1:1 individualized promotions.',
    metric: '−42% Blended CPL',
    icon: ShoppingBag,
    badge: 'B2C Focus',
    tags: ['Cross-Network Ad Ops', 'Dynamic Promo Engine']
  },
  {
    id: 'b2c-retargeting',
    name: 'AI Behavioral Retargeting Autopilot',
    category: 'B2C Focus',
    path: '/industries/b2b',
    descriptor: 'Recover abandoned carts in under 5 minutes with context-aware SMS/Email sequences.',
    metric: '$280K Recovered in 60 Days',
    icon: Sparkles,
    badge: 'B2C Focus',
    tags: ['5-Min SMS Cadence', 'Cart Bounce Recovery']
  },
  {
    id: 'startups-zero-one',
    name: 'Zero-to-One Growth Engine',
    category: 'Startups',
    path: '/industries/growth',
    descriptor: 'The Velocity Engine: First 25 paying enterprise customers acquired in 45 days with 48-hour outbound launch.',
    metric: 'First 25 Customers in 45 Days',
    icon: Rocket,
    badge: 'Seed & Series A',
    tags: ['Zero-to-One Outbound', 'PMF Signal Scoring']
  },
  {
    id: 'midmarket-domination',
    name: 'Niche Market Domination',
    category: 'Mid-Market',
    path: '/industries/growth',
    descriptor: 'Capture 48% market share in concentrated micro-verticals with lean-team productivity multipliers.',
    metric: '48% Market Share Captured',
    icon: Zap,
    badge: 'Mid-Market Scale',
    tags: ['Micro-Vertical Domination', '3× Rep Output']
  },
  {
    id: 'fintech-vault',
    name: 'FinTech & WealthTech',
    category: 'Specialized Sectors',
    path: '/industries/specialized?sector=fintech',
    descriptor: 'Automated API penetration audits, regulatory reporting, and institutional investor trust dashboards.',
    metric: '100% Audit Readiness',
    icon: Landmark,
    badge: 'Regulated Sector',
    tags: ['SEC / FINRA', 'SOC2 Type II', 'Zero Breaches']
  },
  {
    id: 'healthcare-vault',
    name: 'Healthcare & Life Sciences',
    category: 'Specialized Sectors',
    path: '/industries/specialized?sector=healthcare',
    descriptor: 'Encrypted HIPAA patient data protection, clinical efficacy battlecards, and hospital CFO payback models.',
    metric: '99.999% Clinical Uptime',
    icon: HeartPulse,
    badge: 'Regulated Sector',
    tags: ['HIPAA BAA', 'EHR Disaster Shield']
  },
  {
    id: 'industrial-vault',
    name: 'Industrial & Manufacturing',
    category: 'Specialized Sectors',
    path: '/industries/specialized?sector=industrial',
    descriptor: 'Operational risk scanning, CapEx payback modeling, and digital procurement pipeline generation.',
    metric: '75% Faster Audit Prep',
    icon: Factory,
    badge: 'Regulated Sector',
    tags: ['ISO 27001', 'Disaster Resilience']
  },
  {
    id: 'saas-vault',
    name: 'SaaS & Cloud Platforms',
    category: 'Specialized Sectors',
    path: '/industries/specialized?sector=saas',
    descriptor: 'Automated penetration testing, Infosec clearance portals, and usage-to-revenue expansion telemetry.',
    metric: '3.2× ARR Expansion',
    icon: Cpu,
    badge: 'Regulated Sector',
    tags: ['Infosec Pass', 'Usage Milestones']
  }
];

export default function Industries() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Verticals');

  useEffect(() => {
    document.title = 'Industries: Vertical-Specific Revenue Engineering | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All Verticals',
    'B2B Focus',
    'B2C Focus',
    'Enterprise',
    'Mid-Market',
    'Startups',
    'Specialized Sectors'
  ];

  const filteredItems = selectedCategory === 'All Verticals'
    ? BENTO_ITEMS
    : BENTO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Command Center, Home Page Blue/White Ambient Mesh) ── */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden border-b border-slate-200 bg-white">
        {/* Ambient Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-mono text-blue-600 font-extrabold">VERTICAL ARCHITECTURE</span>
            <span className="text-slate-300 font-normal">//</span>
            <span>VERTICAL-SPECIFIC REVENUE ENGINEERING</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.06] mb-6 font-heading max-w-5xl mx-auto">
            Architect Your Industry-Specific{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              AI Revenue Engine.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal mb-10">
            ProfitMachines provides deep industry-specific expertise, integrating autonomous demand engines with vertical growth mechanics. We architect the entire revenue lifecycle tailored to your specific market nuances, compliance requirements, and buyer behaviors.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#bento-grid"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
            >
              <span>Explore Vertical Architectures</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#intake"
              className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
            >
              <span>Book a Diagnostic</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </a>
          </div>

          {/* Horizontal Auto-Scrolling Marquee */}
          <div className="relative w-full overflow-hidden border-t border-b border-slate-100 py-3.5 bg-slate-50/50">
            <div className="flex items-center justify-center gap-6 sm:gap-10 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap overflow-x-auto no-scrollbar scrollbar-none">
              <span>B2B Focus</span>
              <span>·</span>
              <span>B2C Omnichannel</span>
              <span>·</span>
              <span>Enterprise OS</span>
              <span>·</span>
              <span>Mid-Market</span>
              <span>·</span>
              <span>Startups</span>
              <span>·</span>
              <span>FinTech & Lending</span>
              <span>·</span>
              <span>Healthcare & Life Sciences</span>
              <span>·</span>
              <span>Manufacturing & Industrial</span>
              <span>·</span>
              <span>D2C & Retail</span>
              <span>·</span>
              <span>SaaS & Cloud</span>
              <span>·</span>
              <span>Energy & Utilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: DYNAMIC STICKY CATEGORY NAVIGATION ── */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto scrollbar-none no-scrollbar pb-1 lg:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SECTION 3: ASYMMETRIC BENTO GRID LAYOUT ── */}
      <section id="bento-grid" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-400 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden group ${
                    item.isFeatured ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Top Animated Color Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Badge + Metric */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
                        {item.metric}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${
                      item.isFeatured ? 'w-14 h-14' : 'w-11 h-11'
                    }`}>
                      <Icon className={item.isFeatured ? 'w-7 h-7' : 'w-5 h-5'} />
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-slate-900 font-heading mb-3 group-hover:text-blue-600 transition-colors ${
                      item.isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                    }`}>
                      {item.name}
                    </h3>

                    {/* Descriptor */}
                    <p className={`text-slate-600 leading-relaxed font-normal mb-6 ${
                      item.isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                    }`}>
                      {item.descriptor}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <Link
                    to={item.path}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-mono font-bold text-blue-600 group-hover:text-blue-700 transition-colors uppercase tracking-wider"
                  >
                    <span>Explore Architecture →</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: "REAL-WORLD INTELLIGENCE" SPLIT SECTION ── */}
      <section className="py-20 sm:py-28 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (50%): The Why */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE REASON ARCHITECTURE MATTERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Why Generic GTM Playbooks Fail by Industry.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                A hospital CFO evaluating clinical diagnostics evaluates risk through HIPAA liability and Medicare billing codes. A FinTech VP of Engineering evaluates API latency and SOC2 Type II penetration audits. A high-growth DTC brand evaluates blended customer acquisition cost and 5-minute checkout bounce loops.
              </p>

              <blockquote className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-800 text-sm sm:text-base font-medium leading-relaxed italic mb-8 border border-slate-200">
                &ldquo;Deploying an identical B2B SaaS cold outbound script to an industrial procurement director or hospital executive is the fastest way to burn domain credibility. We engineer the exact language, intent triggers, and compliance guardrails your market demands.&rdquo;
              </blockquote>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-blue-600">100%</div>
                  <div className="text-xs text-slate-600 mt-0.5">Pre-Mapped Compliance</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-indigo-600">3.8×</div>
                  <div className="text-xs text-slate-600 mt-0.5">Higher Target Account Velocity</div>
                </div>
              </div>
            </div>

            {/* Right Column (50%): Stacked Overlapping Cards Visual */}
            <div className="lg:col-span-6 relative">
              <div className="space-y-4 relative">
                {/* Card 1: Top Offset */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xl transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      B2B Intent Telemetry
                    </span>
                    <span className="text-slate-400">Live Feed</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Enterprise SaaS Account #2910 Displaced Legacy Rival
                  </h4>
                  <p className="text-xs text-slate-600">
                    Counter-battlecard dispatched within 45 minutes of public renewal complaint.
                  </p>
                </div>

                {/* Card 2: Center Highlight */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative z-10 transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                      Enterprise Boardroom Dossier
                    </span>
                    <span className="text-slate-400">Pre-PO Verified</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    CFO Payback Model Pre-Approved ($2.4M ARR)
                  </h4>
                  <p className="text-xs text-slate-300">
                    Aligend with 10-K operational expenditure targets · 60% faster sign-off.
                  </p>
                </div>

                {/* Card 3: Bottom Offset */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xl transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                      Regulatory Compliance Shield
                    </span>
                    <span className="text-slate-400">Zero Vulnerabilities</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Continuous HIPAA & SOC2 Type II Telemetry
                  </h4>
                  <p className="text-xs text-slate-600">
                    Automated BAA and encrypted customer data portals for hospital network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FOOTER CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>VERTICAL ARCHITECTURE INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Architect Your Industry-Specific AI Engine
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Select your sector, review pre-configured revenue playbooks, and lock baselines with our Senior Revenue Architects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext="Industries Master Hub"
            defaultPriority="Full ORIGIN Framework"
          />
        </div>
      </section>
    </div>
  );
}
