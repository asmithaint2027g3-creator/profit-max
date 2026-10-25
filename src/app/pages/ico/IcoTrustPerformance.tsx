import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Scale,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  FileText,
  Clock,
  Compass,
  Coins,
  Cpu,
  Layers,
  ChevronRight,
  Zap,
  Globe,
  Sliders,
  Eye,
  Activity
} from 'lucide-react';
import IcoSubNav from '../../components/IcoSubNav';

export default function IcoTrustPerformance() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Trust & Performance | ProfitMachines Crypto Protocol';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const jurisdictionalGuardrails = [
    {
      region: 'European Union',
      framework: 'MiCA (Markets in Crypto-Assets)',
      status: 'Active Regulatory Enforcement',
      color: 'border-blue-500/40 bg-blue-50/40',
      badge: 'EU / MiCA',
      points: [
        'Mandatory crypto-asset whitepaper notification and publication standards',
        'Strict prohibition of misleading promotional claims regarding future performance',
        'Explicit risk disclosure requirements stating loss of total capital is possible',
        'Reverse solicitation restrictions applied to cross-border marketing initiatives'
      ]
    },
    {
      region: 'United Arab Emirates',
      framework: 'VARA (Virtual Assets Regulatory Authority)',
      status: 'Mandatory Marketing Regulations',
      color: 'border-amber-500/40 bg-amber-50/40',
      badge: 'UAE / VARA',
      points: [
        'Marketing approval requirements prior to public dissemination within the UAE',
        'Prohibition of marketing activities targeting vulnerable or retail non-accredited users without warnings',
        'Clear identification of entity regulatory status and licensed jurisdiction',
        'Mandatory prominent risk disclaimers across all digital, video, and social channels'
      ]
    },
    {
      region: 'India',
      framework: 'ASCI Guidelines & VDA Tax Framework',
      status: 'Self-Regulatory Code & Tax Compliance',
      color: 'border-indigo-500/40 bg-indigo-50/40',
      badge: 'India / ASCI',
      points: [
        'Prominent standardized warning disclaimer occupying minimum 1/5th of display screen/audio length',
        'Strict prohibition of terms such as "currency", "securities", or "deposits" in promotional text',
        'Zero depiction of guaranteed returns or comparing VDA investments to regulated savings accounts',
        'Clear disclosure of 1% TDS and 30% flat capital gains tax applicability'
      ]
    }
  ];

  const reviewSlaSteps = [
    {
      step: '01',
      title: 'Creative Submission',
      desc: 'Campaign drafts, creator briefs, and social copy ingested into the compliance workflow queue.'
    },
    {
      step: '02',
      title: 'Claims & Guardrail Check',
      desc: 'Automated linguistic filtering detecting price predictions, unverified APY promises, or non-compliant comparisons.'
    },
    {
      step: '03',
      title: 'Jurisdiction & Disclosure Audit',
      desc: 'Verifying market-specific warning text, font sizes, and mandatory creator commercial disclosure tags (#ad).'
    },
    {
      step: '04',
      title: 'Documented Sign-Off',
      desc: 'Formal audit stamp and hash record logged prior to public distribution (standard 24–48h review turnaround SLA).'
    }
  ];

  const kpiFramework = [
    {
      pillar: 'Demand KPIs',
      icon: Compass,
      metrics: [
        'Verified on-chain intent wallet count',
        'Whitelist application human-verification ratio (>75%)',
        'Testnet active developer address retention',
        'Community signal sentiment ratio (>70% positive)'
      ]
    },
    {
      pillar: 'Acquisition KPIs',
      icon: Zap,
      metrics: [
        'Blended CAC per verified participating wallet',
        'KOL referral conversion efficiency (spend vs. active wallets)',
        'Tier-1/Tier-2 exchange deposit completion rate',
        'Sybil filtration rejection percentage (>25% typical)'
      ]
    },
    {
      pillar: 'Retention KPIs',
      icon: Activity,
      metrics: [
        '30-day and 90-day wallet retention cohort ratios',
        'Circulating supply committed to staking / protocol lockups',
        'DAU/MAU stickiness on smart contract interactions',
        'Decentralized governance voting participation'
      ]
    },
    {
      pillar: 'Revenue KPIs',
      icon: DollarSign,
      metrics: [
        'Cumulative protocol transaction fee revenue',
        'Monthly treasury inflow vs. operational expenditure (runway)',
        'Ecosystem partner fee-sharing attribution',
        'Secondary liquidity pool depth and slippage metrics'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      <IcoSubNav />

      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80"
            alt="Trust and Performance"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/65" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Compliance by Design & Token-Adjusted RQL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Trust Built into Execution. <span className="text-blue-400">Performance Built into Measurement.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              Integrate active compliance guardrails, jurisdictional marketing standards, and mathematical Token-Adjusted RQL revenue attribution into every phase of your token lifecycle.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Discuss Compliance & Performance</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="#compliance-design"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm shadow-md"
              >
                <span>Review Trust Layer SLAs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: COMPLIANCE BY DESIGN ── */}
      <section id="compliance-design" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section A · Trust Architecture</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
                Compliance by Design as an Active Operating Layer
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
                Compliance in modern crypto is not an afterthought checked days before launch. It is an integrated operating discipline embedded directly into creator contracts, advertising copy, whitelist qualification, and token emission disclosures.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">
                    <strong>Pre-Screened Campaign Creative:</strong> Every social asset, video brief, and AMA outline passes structured legal review prior to public dissemination.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">
                    <strong>Creator Disclosure Governance:</strong> Zero unlabelled influencer promotions. All participating KOLs adhere to strict regulatory disclosure mandates.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">
                    <strong>Audit-Trail Documentation:</strong> Maintaining immutable records of campaign approvals, disclaimers, and version-controlled marketing collateral.
                  </span>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                <strong>Mandatory Legal Notice:</strong> ProfitMachines provides operational compliance frameworks and marketing guardrails. We do not provide formal legal counsel or guarantee immunity from regulatory enforcement. Every project requires qualified legal review in their specific incorporation and operational jurisdictions.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900 rounded-2xl p-7 text-white border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">Trust Layer Operational Workflow</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">STATUS: ENFORCED</span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="text-blue-400 font-bold mb-1">[GATE 1] PROMOTIONAL CLAIMS SCRUBBER</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">Automated scan for prohibited language: "guaranteed APY", "100x return", "safe investment", unverified price charts.</div>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="text-blue-400 font-bold mb-1">[GATE 2] JURISDICTIONAL TARGETING CHECK</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">Geo-fencing and disclaimer verification across MiCA (EU), VARA (Dubai), and ASCI (India) target markets.</div>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="text-blue-400 font-bold mb-1">[GATE 3] AUDIT TRAIL LOGGING</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">Cryptographic hash and timestamp assigned to approved marketing creative before release to community moderators.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION B: JURISDICTIONAL MARKETING GUARDRAILS ── */}
      <section id="jurisdictional-guardrails" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section B · Regional Compliance</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Jurisdictional Marketing Guardrails
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Global crypto marketing cannot rely on a single generic disclaimer. Different jurisdictions enforce radically different definitions of financial promotions, retail advertising, and cross-border solicitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {jurisdictionalGuardrails.map((jg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                      {jg.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{jg.region}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{jg.framework}</h3>
                  <div className="text-xs font-semibold text-blue-700 mb-5">{jg.status}</div>

                  <div className="space-y-2.5">
                    {jg.points.map((pt, pti) => (
                      <div key={pti} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 text-[11px] text-slate-500 font-medium">
                  Integrated into Creator Briefs & Social Copy
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 text-xs text-slate-600 text-center max-w-3xl mx-auto">
            <strong>Non-Negotiable Rule:</strong> We never claim a single checklist guarantees universal compliance. Every target market requires qualified legal review tailored to the protocol's specific governance structure and token mechanics.
          </div>
        </div>
      </section>

      {/* ── SECTION C: CLAIMS & CREATIVE REVIEW SLA ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section C · Review Velocity</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Claims & Creative Review SLA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Speed matters in crypto marketing, but compliance cannot be bypassed. Our Creative-to-Legal-to-Live workflow provides rapid, documented turnarounds without bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reviewSlaSteps.map((s, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 p-6 relative">
                <div className="text-2xl font-black text-blue-600 mb-3 font-mono">{s.step}</div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-blue-400 shrink-0" />
              <div>
                <div className="text-sm font-bold font-heading">Standard Creative Review SLA: 24–48 Hours</div>
                <div className="text-xs text-slate-300">Fast-track expedited review (under 6 hours) available for breaking market announcements and TGE launch week crisis ops.</div>
              </div>
            </div>
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-lg shrink-0"
            >
              <span>Setup Review Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION D: KYC/AML-READY CAMPAIGN OPS ── */}
      <section id="kyc-aml" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section D · Identity Hygiene</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              KYC/AML-Ready Campaign Operations
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Protect your token sale and airdrop distributions from sanctioned entities, automated Sybil clusters, and regulatory enforcement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Whitelist Eligibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-layer verification checking wallet history, social accounts, and transaction authenticity before allocation issuance.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <Eye className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Identity-Hygiene Controls</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Device fingerprinting, IP geolocation filtering, and behavioral cadence checks to eliminate commercial bot-farming rings.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <Lock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Sanctions Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated wallet screening against OFAC, EU, UN, and regional sanctioned entity lists prior to token claims or distribution.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Documentation & Escalation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured escalation procedures for flagged wallets, with immutable logging ready for institutional diligence audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION E: TOKEN-ADJUSTED RQL FOR CRYPTO ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section E · Metric Innovation</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
                Token-Adjusted RQL for Crypto
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Standard B2B SaaS leads fail in Web3. We adapted our proven Revenue Qualified Lead (RQL) architecture for on-chain ecosystems, replacing vanity leads with verified economic readiness.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm font-heading mb-1">Demand-Readiness Scoring</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluates wallet capital capacity, historical holding duration, and cross-protocol interaction to assign an objective liquidity score.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm font-heading mb-1">Launch-Window Prioritization</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ranks incoming creator traffic and community whitelist cohorts by true intent, ensuring allocations reach committed long-term holders.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm font-heading mb-1">Ecosystem BD Opportunity Scoring</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prioritizes institutional partners, grant applicants, and prospective listing venues by verifiable commercial upside and strategic fit.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-8 rounded-2xl text-white border border-blue-900/60 shadow-xl">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3">Formula Breakdown</div>
                <h3 className="text-2xl font-bold font-heading mb-4">Token-Adjusted RQL Index</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  RQL_crypto = (Capital Capacity × 0.35) + (Historical Holding Tenure × 0.30) + (On-Chain Protocol Activity × 0.25) - (Sybil Velocity Penalty × 0.50)
                </p>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                  Resulting in a 0–100 index that qualifies genuine participants and protects your token distribution from predatory sell-pressure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION F: PERFORMANCE REVENUE ENGINE (VISUAL FLOW) ── */}
      <section id="performance-engine" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section F · Attribution Flow</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Performance Revenue Engine
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Tracing capital efficiency from initial media dollar to wallet interaction, transaction fees, and treasury reserve compounding.
            </p>
          </div>

          {/* Visual Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs relative">
              <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded inline-block mb-4 font-mono">
                STAGE 1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Campaign Spend</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Allocation across vetted creator tiers, programmatic ads, PR wire distribution, and community bounty campaigns.
              </p>
              <div className="text-xs font-semibold text-slate-500">
                • Media Spend at Cost<br />
                • Creator Milestone SLAs<br />
                • Transparent Budget Attribution
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-400 p-8 shadow-md relative">
              <div className="text-xs font-extrabold uppercase tracking-wider text-white bg-blue-600 px-3 py-1 rounded inline-block mb-4 font-mono">
                STAGE 2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Wallet & User Activity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                On-chain verification: whitelist completions, testnet deployments, token purchase volume, and staking contract deposits.
              </p>
              <div className="text-xs font-semibold text-slate-500">
                • Sybil-Filtered Wallets<br />
                • On-Chain Referral Codes<br />
                • Smart Contract Interaction Depth
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs relative">
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded inline-block mb-4 font-mono">
                STAGE 3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Measurable Outcomes</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Tangible protocol business results: circulating supply retention, network transaction gas fees, and sustainable treasury runway.
              </p>
              <div className="text-xs font-semibold text-slate-500">
                • Verified Protocol Fee Yield<br />
                • 90-Day Holder Stickiness<br />
                • Predictable Forecast Actuals
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 text-center max-w-3xl mx-auto">
            <strong>Data-Quality Limitations Note:</strong> Blockchain attribution is subject to decentralized pseudonymous privacy architectures. Fee attribution and wallet retention tracking are calculated where on-chain and analytical data are technically and reliably feasible.
          </div>
        </div>
      </section>

      {/* ── SECTION G: PERFORMANCE & FORECASTING ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section G · Predictive Modeling</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Performance & Revenue Forecasting
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Eliminate treasury surprises. We model forward-looking spend-to-revenue dynamics, forecast token circulation requirements, and track forecast-versus-actual variance monthly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 font-heading mb-2">Spend-to-Revenue Modeling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Correlating marketing outlays directly with expected protocol fee capture, staking participation, and liquidity depth.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <BarChart3 className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 font-heading mb-2">Forecast vs. Actual Reporting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monthly variance analysis evaluating active wallet growth, liquidity retention, and creator channel efficiency against baseline targets.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <Activity className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 font-heading mb-2">Retention & Expansion Indicators</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Leading indicators signaling when to scale creator spend, when to deploy staking incentives, and when to expand to new ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION H: KPI FRAMEWORK ── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section H · Metric Taxonomy</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Four-Pillar KPI Measurement Framework
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every campaign is evaluated across Demand, Acquisition, Retention, and Revenue. We rely on actual agreed project baselines and verified empirical targets—never unsubstantiated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {kpiFramework.map((kf, idx) => {
              const Icon = kf.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 font-heading">{kf.pillar}</h3>
                    </div>
                    <div className="space-y-2.5">
                      {kf.metrics.map((m, mi) => (
                        <div key={mi} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-6 text-[10px] text-slate-500 font-mono">
                    VERIFIED ON-CHAIN TELEMETRY
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── SECTION I: PERFORMANCE FEE GUARDRAILS ── */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section I · Ethical & Legal Standards</div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">
              Performance Fee Guardrails
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mb-6">
              ProfitMachines strictly aligns with global regulatory standards:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 mb-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-900">1. Operational Outcomes Only:</strong> Performance incentives and milestone bonuses are strictly tied to defined business achievements (verified exchange listings, active wallet thresholds, fee revenue, and TVL depth).
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-900">2. No Token-Price Ties:</strong> We never tie compensation to secondary market token price appreciation, trading returns, or speculative market cap targets.
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Any hybrid token, warrant, or SAFT arrangements require separate qualification and compliance review by counsel.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-heading">
              Discuss Compliance & Performance Requirements
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">
              Schedule a review with our compliance and growth architects to evaluate your promotional materials, airdrop rules, and jurisdictional guardrails.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base group"
              >
                <span>Request Compliance & Performance Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ico-acceleration/sales-enablement"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
              >
                <span>View Sales Enablement Playbooks</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
