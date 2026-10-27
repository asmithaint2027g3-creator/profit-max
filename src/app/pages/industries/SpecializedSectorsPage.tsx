import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Lock,
  ChevronRight,
  Briefcase,
  Factory,
  ShoppingBag,
  Landmark,
  Cpu,
  HeartPulse,
  GraduationCap,
  Store,
  Building,
  Zap,
  ChevronDown,
  Sparkles,
  FileText
} from 'lucide-react';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

interface SpecializedSector {
  id: string;
  name: string;
  subTitle: string;
  badge: string;
  compliancePill: string;
  icon: any;
  offeringDesc: string;
  situations: string;
  challenges: string[];
  solutions: string[];
  example: string;
  outcomes: { metric: string; label: string }[];
}

const SECTORS_DATA: SpecializedSector[] = [
  {
    id: 'services',
    name: 'Service Industries',
    subTitle: 'Consulting, Agencies, Healthcare & Logistics',
    badge: 'Trust & Reputation Audits',
    compliancePill: 'SOC2 Type II · Mutual NDA',
    icon: Briefcase,
    offeringDesc: 'Reputation building + lead generation through trust audits for professional services firms.',
    situations: 'Inconsistent brand trust across digital channels; high customer churn due to unverified service claims; long sales cycles due to lack of verified social proof.',
    challenges: [
      'Establishing immediate enterprise credibility against legacy incumbents',
      'Generating high-intent enterprise advisory inquiries consistently',
      'Eliminating billing friction and margin compression on fixed-fee contracts'
    ],
    solutions: [
      'Automated trust audits and verified credibility signaling across search and social',
      'Reputation acceleration mesh tracking review sentiment and referral velocity',
      'High-intent B2B advisory lead generation connecting with verified C-suite champions'
    ],
    example: 'A global consulting firm boosted enterprise lead conversions by 42% via automated trust audits and closed $3.8M in new retainers.',
    outcomes: [
      { metric: '42%', label: 'Higher Conversion Rate' },
      { metric: '3×', label: 'Qualified Enterprise Inquiries' },
      { metric: '95%', label: 'Trust & Credibility Score' }
    ]
  },
  {
    id: 'industrial',
    name: 'Industrial Industries',
    subTitle: 'Manufacturing, Utilities, Supply Chain & Energy',
    badge: 'Operational Risk & Disaster Resilience',
    compliancePill: 'ISO 27001 · OSHA Compliance',
    icon: Factory,
    offeringDesc: 'Compliance, disaster vulnerability audits, operational risk coverage, and digital procurement outreach.',
    situations: 'Unmapped operational vulnerability risks; legacy procurement cycles; strict environmental and workplace safety mandates.',
    challenges: [
      'Catastrophic downtime costs in 24/7 manufacturing plants',
      'Complex, opaque multi-tier supply chain dependencies',
      'Manual, paper-based compliance and disaster readiness audit procedures'
    ],
    solutions: [
      'Automated disaster vulnerability scanning across all cyber-physical operating assets',
      'Real-time supply chain operational risk coverage and failure predictive modeling',
      'Digital procurement outreach connecting directly with tier-1 industrial buyers'
    ],
    example: 'A heavy machinery manufacturer reduced compliance audit prep time by 75% while scaling digital procurement reach by 3.5×.',
    outcomes: [
      { metric: '75%', label: 'Faster Audit Readiness' },
      { metric: '0', label: 'Unmapped Downtime Incidents' },
      { metric: '3.5×', label: 'Procurement Pipeline Reach' }
    ]
  },
  {
    id: 'd2c',
    name: 'D2C Companies',
    subTitle: 'Consumer Brands, E-Commerce & Lifestyle',
    badge: 'Brand Protection & Cart Conversion',
    compliancePill: 'PCI-DSS Level 1 · GDPR Compliant',
    icon: ShoppingBag,
    offeringDesc: 'Digital brand acceleration, customer trust, cyber protection, and influencer campaigns for consumer brands.',
    situations: '70%+ cart bounce rates; escalating Meta/Google ad bidding costs; counterfeit and brand imitation risks on third-party marketplaces.',
    challenges: [
      'Differentiating in crowded social feeds without sacrificing gross margins',
      'Preventing cart abandonment with sub-5-minute personalized incentives',
      'Protecting brand equity against unauthorized digital distributors and fake reviews'
    ],
    solutions: [
      'Dynamic brand acceleration with 1:1 individualized discount trigger engines',
      'Omnichannel behavioral retargeting sequences deploying SMS/Email within 5 minutes',
      'Automated influencer acquisition and affiliate attribution telemetry'
    ],
    example: 'An e-commerce lifestyle brand reduced customer acquisition costs by 38% while boosting repeat orders by 2.5×.',
    outcomes: [
      { metric: '−38%', label: 'Blended CAC Reduction' },
      { metric: '2.5×', label: 'Repeat Customer Orders' },
      { metric: '99.9%', label: 'POS Cyber Security Uptime' }
    ]
  },
  {
    id: 'fintech',
    name: 'FinTech & Lending',
    subTitle: 'Digital Lending, NBFCs, Payments & WealthTech',
    badge: 'API Security & Investor Confidence',
    compliancePill: 'SOC2 Type II · SEC/FINRA · PCI-DSS',
    icon: Landmark,
    offeringDesc: 'Cybersecurity audits, regulatory compliance, liability protection, and trust-building with institutional investors.',
    situations: 'Complex central bank compliance reporting; potential security vulnerabilities in payment APIs; institutional investor hesitancy during capital calls.',
    challenges: [
      'Meeting stringent regulatory capital and disclosure requirements',
      'Preventing synthetic identity fraud and payment API exploits',
      'Maintaining 99.999% system uptime during high-volume market transactions'
    ],
    solutions: [
      'Continuous regulatory compliance monitoring and automated audit pack generation',
      'Automated API penetration audits and continuous vulnerability surface mapping',
      'Institutional investor trust-building dashboards with live risk telemetry'
    ],
    example: 'A digital lending NBFC achieved 100% regulatory audit compliance while reducing approval turnaround to under 5 minutes.',
    outcomes: [
      { metric: '100%', label: 'Audit Readiness Score' },
      { metric: '0', label: 'Security Vulnerability Breaches' },
      { metric: '5×', label: 'Loan Approval Velocity' }
    ]
  },
  {
    id: 'saas',
    name: 'SaaS Products',
    subTitle: 'Software Platforms, AI Tools & Cloud Infrastructure',
    badge: 'Penetration Testing & PLG Expansion',
    compliancePill: 'SOC2 Type II · ISO 27001 · Cloud Security',
    icon: Cpu,
    offeringDesc: 'Customer outreach, penetration testing, credibility building, and subscription growth for software platforms.',
    situations: 'SaaS churn caused by unmapped enterprise security concerns; low organic outreach response rates; long trial-to-paid conversion cycles.',
    challenges: [
      'Overcoming strict enterprise Infosec and procurement security questionnaires',
      'Standing out against heavily funded competitors in saturated marketplaces',
      'Wiring usage telemetry directly to automated expansion and seat upgrade triggers'
    ],
    solutions: [
      'Automated penetration testing and verifiable SOC2 Type II trust portals',
      'Autonomous outbound engines targeting high-propensity engineering leaders',
      'Usage-to-revenue telemetry models predicting expansion readiness before renewal'
    ],
    example: 'An enterprise SaaS platform expanded ARR by 3.2× after deploying AI penetration testing and credibility signals to enterprise buyers.',
    outcomes: [
      { metric: '3.2×', label: 'Annual Recurring Revenue (ARR)' },
      { metric: '60%', label: 'Faster Enterprise Sales Cycle' },
      { metric: '100%', label: 'Infosec Security Clearance' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    subTitle: 'Hospitals, Clinics, Pharma, Diagnostics & Biotech',
    badge: 'HIPAA Patient Privacy & Disaster Readiness',
    compliancePill: 'HIPAA BAA · HITRUST · FDA 21 CFR',
    icon: HeartPulse,
    offeringDesc: 'Compliance audits, patient data protection, and disaster readiness for medical and biotech organizations.',
    situations: 'Complex HIPAA, EHR, and FDA data audits; disaster recovery vulnerabilities in patient records; siloed clinical procurement committees.',
    challenges: [
      'Securing sensitive protected health information (PHI) across disparate systems',
      'Demonstrating clinical director consensus and hospital CFO payback ROI',
      'Guaranteeing 24/7 disaster resilience without service interruption'
    ],
    solutions: [
      'End-to-end patient data protection audits with continuous HIPAA compliance verification',
      'Automated clinical ROI battlecards addressing both medical efficacy and CFO metrics',
      'Disaster recovery telemetry ensuring uninterrupted EHR access during power events'
    ],
    example: 'A national diagnostics network secured zero data breach incidents across 40 hospital integrations while accelerating contract approval by 45%.',
    outcomes: [
      { metric: '100%', label: 'HIPAA / PHI Compliance' },
      { metric: '0', label: 'Security Incidents Across 40 Sites' },
      { metric: '99.999%', label: 'Clinical Data Uptime' }
    ]
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    subTitle: 'Universities, K-12 Districts & Online Platforms',
    badge: 'Student Privacy & Enrollment Growth',
    compliancePill: 'FERPA · COPPA · GDPR Kids',
    icon: GraduationCap,
    offeringDesc: 'Reputation acceleration, digital trust, and cyber safety for student data in schools and online platforms.',
    situations: 'Student enrollment drops due to unmanaged digital reviews; cyber threats on student payment portals; complex board procurement cycles.',
    challenges: [
      'Protecting minor student data privacy under FERPA and COPPA standards',
      'Scaling enrollment acquisition channels with transparent ROI',
      'Navigating multi-stakeholder academic and school district buying boards'
    ],
    solutions: [
      'Automated academic reputation acceleration and verified student success portals',
      'Student data infrastructure penetration scanning protecting payment gateways',
      'Omnichannel enrollment engines engaging prospective students with 1:1 guidance'
    ],
    example: 'An EdTech platform expanded enrolled student registrations by 65% while securing complete COPPA/FERPA compliance certifications.',
    outcomes: [
      { metric: '65%', label: 'Higher Student Enrollments' },
      { metric: '100%', label: 'COPPA / FERPA Verified' },
      { metric: '4.9/5', label: 'Institution Trust Rating' }
    ]
  },
  {
    id: 'retail',
    name: 'Retail & FMCG',
    subTitle: 'Supermarkets, Consumer Goods & Retail Chains',
    badge: 'POS Terminal Security & Loyalty Growth',
    compliancePill: 'PCI-DSS Level 1 · Point-of-Sale Guard',
    icon: Store,
    offeringDesc: 'Digital lead generation, customer trust, and cyber audits for POS systems in retail chains and FMCG brands.',
    situations: 'Point-of-sale terminal security vulnerabilities; high friction in loyalty program signups; fragmented distributor channel visibility.',
    challenges: [
      'Securing point-of-sale payment nodes against skimming and firmware exploits',
      'Driving omnichannel consumer engagement between in-store and online channels',
      'Aligning distributor incentives without cannibalizing direct retailer margin'
    ],
    solutions: [
      'Automated POS system security audits monitoring thousands of retail payment nodes',
      'Digital lead capture and loyalty signup acceleration using frictionless QR triggers',
      'Channel conflict telemetry modeling distributor margins and sell-through rates'
    ],
    example: 'A national retail chain fortified 1,200 POS terminals against vulnerabilities while growing loyalty memberships by 80%.',
    outcomes: [
      { metric: '1,200', label: 'POS Terminals Fortified' },
      { metric: '80%', label: 'Loyalty Membership Growth' },
      { metric: '0', label: 'Payment Exploit Breaches' }
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Construction',
    subTitle: 'Commercial Developers, Builders & Smart Cities',
    badge: 'Structural Risk & Investor Clearances',
    compliancePill: 'ESG Standards · Municipal Building Codes',
    icon: Building,
    offeringDesc: 'Compliance, disaster audits, and investor confidence for developers and smart infrastructure projects.',
    situations: 'Environmental and structural compliance delays; institutional investor hesitancy on long-horizon builds; municipal permit backlogs.',
    challenges: [
      'Securing regulatory environmental impact and building clearances on tight schedules',
      'Attracting institutional REIT capital with verified risk underwriting dossiers',
      'Mitigating contractor and construction site liability exposures'
    ],
    solutions: [
      'Automated structural and disaster vulnerability scans pre-clearing permits',
      'Investor-ready risk underwriting dashboards demonstrating ESG and code compliance',
      'Digital buyer and tenant acquisition pipelines for pre-leasing commercial assets'
    ],
    example: 'A commercial developer secured institutional funding 4 months early by providing AI structural risk and ESG audits to the capital committee.',
    outcomes: [
      { metric: '4 Mo', label: 'Faster Institutional Funding' },
      { metric: '100%', label: 'Municipal Permit Clearance' },
      { metric: '25%', label: 'Risk Premium Insurance Savings' }
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    subTitle: 'Power Generation, Renewables, Grids & Oil/Gas',
    badge: 'Critical Infrastructure & ESG Resilience',
    compliancePill: 'NERC CIP · ISO 50001 · Cyber-Physical Shield',
    icon: Zap,
    offeringDesc: 'Operational risk audits, compliance, and disaster resilience for energy providers and utility grids.',
    situations: 'Critical grid infrastructure cyber threats; strict environmental and renewable safety mandates; severe power outage liability penalties.',
    challenges: [
      'Securing SCADA and industrial IoT grid nodes against nation-state cyber threats',
      'Ensuring continuous 24/7 operational resilience across geographically remote assets',
      'Demonstrating verifiable ESG compliance to federal regulators and green bondholders'
    ],
    solutions: [
      'Continuous operational risk scanning across SCADA, substation, and turbine telemetry',
      'Automated disaster resilience protocols with instantaneous islanding failover triggers',
      'Digital procurement and energy off-taker contract acceleration engines'
    ],
    example: 'A renewable energy provider eliminated unmapped grid vulnerabilities across 15 solar and wind facilities with zero downtime incidents.',
    outcomes: [
      { metric: '0', label: 'Unplanned Grid Outages' },
      { metric: '100%', label: 'ESG Regulatory Compliance' },
      { metric: '50%', label: 'Audit Preparation Time Reduced' }
    ]
  }
];

export default function SpecializedSectorsPage() {
  const [searchParams] = useSearchParams();
  const initialSector = searchParams.get('sector') || 'services';
  const [selectedSectorId, setSelectedSectorId] = useState(initialSector);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(initialSector);

  useEffect(() => {
    document.title = 'Specialized Regulated Sectors: The Compliance & Trust Vault | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const currentSector = SECTORS_DATA.find((s) => s.id === selectedSectorId) || SECTORS_DATA[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Trust-Focused — Home Page Blue & White Theme) ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        {/* Subtle Ambient Grid */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-mono text-blue-600 font-extrabold">THE COMPLIANCE & TRUST VAULT</span>
            <span className="text-slate-300 font-normal">//</span>
            <span>10 REGULATED SECTORS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading max-w-4xl mx-auto">
            Specialized Sectors &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Compliance Sandboxes.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal mb-8">
            Pre-configured revenue architectures for regulated, high-liability, and compliance-sensitive markets. We combine autonomous growth engines with institutional security and zero data-leakage protocols.
          </p>

          {/* Compliance Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 font-mono text-xs text-slate-700">
            {['SOC2 Type II Certified', 'HIPAA BAA Compliant', 'ISO 27001 Verified', 'PCI-DSS Level 1', 'MiCA & VARA Ready'].map((badge, bIdx) => (
              <span
                key={bIdx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs font-bold"
              >
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>{badge}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#vault"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
            >
              <span>Explore The 10 Sectors</span>
              <ChevronDown className="w-4 h-4" />
            </a>

            <a
              href="#intake"
              className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
            >
              <span>Book Sector Diagnostic</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: MASTER-DETAIL LAYOUT (Desktop) / ACCORDION (Mobile) ── */}
      <section id="vault" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* DESKTOP MASTER-DETAIL (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar (28%): 10 Specialized Sectors */}
            <div className="col-span-4 sticky top-28 space-y-2 bg-white p-3 rounded-3xl border border-slate-200 shadow-sm">
              <div className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 mb-1">
                Select Specialized Sector:
              </div>
              {SECTORS_DATA.map((sector) => {
                const Icon = sector.icon;
                const isSelected = selectedSectorId === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSectorId(sector.id)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold leading-tight font-heading">{sector.name}</div>
                        <div className={`text-[11px] truncate max-w-[170px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {sector.subTitle.split(',')[0]}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Panel (72%): Sector Content Card */}
            <div className="col-span-8">
              <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xl relative overflow-hidden">
                {/* Top Animated Color Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                {/* Header: Sector Name + Compliance Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      {React.createElement(currentSector.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                        {currentSector.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500">{currentSector.subTitle}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 shadow-2xs">
                    {currentSector.compliancePill}
                  </span>
                </div>

                <p className="text-base text-slate-700 leading-relaxed font-medium mb-8">
                  {currentSector.offeringDesc}
                </p>

                {/* Grid 1: The Challenge */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase tracking-wider mb-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Sector-Specific Challenges</span>
                  </div>
                  <div className="space-y-2.5">
                    {currentSector.challenges.map((ch, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5"
                      >
                        <span className="text-amber-600 font-bold mt-0.5">•</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid 2: The AI Solution */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>The ProfitMachines Revenue Architecture</span>
                  </div>
                  <div className="space-y-2.5">
                    {currentSector.solutions.map((sol, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5"
                      >
                        <span className="text-blue-600 font-bold mt-0.5">✓</span>
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-World Case Example */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 mb-8">
                  <span className="font-mono text-slate-500 uppercase font-bold text-[10px] block mb-1">
                    Benchmark Production Result:
                  </span>
                  &ldquo;{currentSector.example}&rdquo;
                </div>

                {/* Grid 3: Verified Outcomes */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-4 font-bold">
                    VERIFIED REALIZATION OUTCOMES // {currentSector.name.toUpperCase()}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {currentSector.outcomes.map((out, oIdx) => (
                      <div key={oIdx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                        <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono mb-0.5">
                          {out.metric}
                        </div>
                        <div className="text-xs text-slate-300 font-medium">{out.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link to Form */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#intake"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700"
                  >
                    <span>Discuss {currentSector.name} Compliance Architecture ↓</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE ACCORDION (Hidden on Desktop) */}
          <div className="lg:hidden space-y-4">
            {SECTORS_DATA.map((sector) => {
              const Icon = sector.icon;
              const isExpanded = mobileExpandedId === sector.id;
              return (
                <div
                  key={sector.id}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setMobileExpandedId(isExpanded ? null : sector.id)}
                    className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900 font-heading">{sector.name}</div>
                        <div className="text-xs text-slate-500 font-mono">{sector.compliancePill}</div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-blue-600' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                      <p className="text-slate-700 leading-relaxed font-medium mt-3">
                        {sector.offeringDesc}
                      </p>

                      <div className="space-y-2">
                        <div className="font-mono text-amber-700 font-bold text-xs uppercase">Key Challenges:</div>
                        {sector.challenges.map((ch, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-amber-50 text-slate-800 text-xs">
                            • {ch}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="font-mono text-blue-700 font-bold text-xs uppercase">AI Solution:</div>
                        {sector.solutions.map((sol, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-blue-50 text-slate-800 text-xs">
                            ✓ {sol}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                        {sector.outcomes.map((out, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-slate-900 text-white">
                            <div className="text-lg font-mono font-bold text-blue-400">{out.metric}</div>
                            <div className="text-[10px] text-slate-300 leading-tight">{out.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 3: STRUCTURED FORM-LIKE CTA ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>SPECIALIZED REGULATORY CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Discuss Your Sector's Compliance & Growth Requirements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Connect with a Senior Revenue Architect experienced in your regulatory framework. Full Mutual Enterprise NDA provided prior to data review.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <OriginIntakeForm
            pageContext={`Specialized Sector: ${currentSector.name}`}
            defaultPriority="Specific Discovery Node"
          />
        </div>
      </section>
    </div>
  );
}
