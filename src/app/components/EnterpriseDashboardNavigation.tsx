import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    Cpu, Layers, Building2, Target, Sparkles, ChevronRight, ChevronDown, 
    ArrowRight, ArrowUpRight, Search, CheckCircle2, ShieldCheck, Users, 
    BarChart3, Activity, Coins, Rocket, Sliders, DollarSign, Bot, Globe,
    Briefcase, ShoppingBag, Landmark, HeartPulse, GraduationCap, Zap, Lock,
    Clock, Compass, FileText, Check, HelpCircle, X, SlidersHorizontal, TrendingUp
} from 'lucide-react';

export interface EnterpriseDashboardNavigationProps {
    onClose?: () => void;
    initialPracticeId?: string;
    isModal?: boolean;
}

interface NavCard {
    title: string;
    description: string;
    path: string;
    badge?: string;
    icon: any;
    tags?: string[];
}

interface SubCategory {
    id: string;
    label: string;
    shortDesc: string;
    badge?: string;
    cards: NavCard[];
}

interface PracticeCategory {
    id: string;
    title: string;
    shortLabel: string;
    icon: any;
    description: string;
    badge: string;
    subcategories: SubCategory[];
}

export default function EnterpriseDashboardNavigation({ 
    onClose, 
    initialPracticeId = 'engineering',
    isModal = false 
}: EnterpriseDashboardNavigationProps) {
    const [activePracticeId, setActivePracticeId] = useState<string>(initialPracticeId);
    const [expandedSubmenuId, setExpandedSubmenuId] = useState<string | null>(null);
    const [activeSubcategoryId, setActiveSubcategoryId] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    // ── 5 MAIN PRACTICES DATA DEFINITION (MAPPED 1:1 WITH EXISTING PROFITMACHINES ASSETS) ──
    const practices: PracticeCategory[] = useMemo(() => [
        {
            id: 'engineering',
            title: 'Engineering Practices',
            shortLabel: 'Engineering',
            icon: Cpu,
            description: 'AI & automation delivery tracks, autonomous agentic revenue systems, and Web3 protocol token engineering.',
            badge: 'Automation & Protocol Architecture',
            subcategories: [
                {
                    id: 'ai-automation-track',
                    label: 'AI & Automation Track',
                    shortDesc: 'Automated intent ingestion, scoring and multi-channel sequencing.',
                    cards: [
                        {
                            title: 'Strategy & Delivery Tracks',
                            description: 'Bifurcated execution: high-touch management consulting vs. autonomous AI pipeline deployment.',
                            path: '/offerings/delivery-tracks',
                            badge: 'Delivery Model',
                            icon: Cpu,
                            tags: ['Track A & B', 'Comparison Matrix', 'Audit SLA']
                        },
                        {
                            title: 'AI Lead Generation Autopilot',
                            description: 'Autonomous multi-channel prospect discovery, scoring, and intent data mining.',
                            path: '/ai-lead-generation',
                            badge: 'Execution Engine',
                            icon: Bot,
                            tags: ['Signal Detection', 'Autonomous Outbound']
                        },
                        {
                            title: 'AI Revenue Operations & Telemetry',
                            description: 'CRM data enrichment, deal velocity acceleration, and pipeline health diagnostics.',
                            path: '/ai-revenue-operations',
                            badge: 'Operational Telemetry',
                            icon: Activity,
                            tags: ['RevOps', 'Pipeline Telemetry']
                        },
                        {
                            title: 'Micro-Segment Fast-Start Kits',
                            description: 'Eight fixed-scope turnkey kits: Agency Margin, DTC Margin, Vertical SaaS Whitespace.',
                            path: '/offerings/micro-segment-kits',
                            badge: 'Turnkey Packages',
                            icon: Sliders,
                            tags: ['8 Fixed Kits', 'Rapid Value']
                        }
                    ]
                },
                {
                    id: 'agentic-systems',
                    label: 'Agentic Revenue Systems',
                    shortDesc: 'Autonomous multi-agent workflows, SDR co-pilots, and dynamic intent.',
                    cards: [
                        {
                            title: 'AI-Driven Sales Transformation',
                            description: 'Transform traditional B2B sales forces into autonomous, high-velocity revenue machines.',
                            path: '/ai-driven-sales-transformation',
                            badge: 'Enterprise Transformation',
                            icon: Sparkles,
                            tags: ['SDR Co-Pilot', 'Autonomous Conversion']
                        },
                        {
                            title: 'AI Demand Discovery Engine',
                            description: 'Uncover hidden market demand, prospect buying intent signals, and pipeline opportunities.',
                            path: '/ai-demand-discovery',
                            badge: 'Intent Mining',
                            icon: Target,
                            tags: ['Buying Intent', 'Account Propensity']
                        },
                        {
                            title: 'AI Lead Nurturing Autopilot',
                            description: 'Adaptive AI-driven email and communication nurturing based on behavioral telemetry.',
                            path: '/ai-lead-nurturing',
                            badge: 'Lifecycle Ops',
                            icon: Zap,
                            tags: ['Behavioral Signals', 'Zero Churn']
                        }
                    ]
                },
                {
                    id: 'web3-protocol-engineering',
                    label: 'Web3 & Token Engineering',
                    shortDesc: 'End-to-end tokenomics, launch ops, and compliance architecture.',
                    cards: [
                        {
                            title: 'ICO Acceleration Hub',
                            description: 'Complete Web3 protocol for guaranteed capital formation, liquidity velocity, and governance.',
                            path: '/ico-acceleration',
                            badge: 'Protocol Suite',
                            icon: Rocket,
                            tags: ['Pre-TGE', 'TGE Apex', 'Post-TGE']
                        },
                        {
                            title: '7-Phase Launch Lifecycle',
                            description: 'Rigorous 180-day operational roadmap from foundation architecture to secondary exchange expansion.',
                            path: '/ico-acceleration/launch-growth#lifecycle-phases',
                            badge: 'Roadmap Execution',
                            icon: Clock,
                            tags: ['T-16w to T+180d', 'MM Coordination']
                        },
                        {
                            title: 'Liquidity Generation Engine',
                            description: 'DEX pool seeding, market-maker SLA coordination, and anti-dump vesting mechanics.',
                            path: '/ico-acceleration/launch-growth#liquidity-engine',
                            badge: 'Capital Formation',
                            icon: Coins,
                            tags: ['Order Book Depth', 'Slippage Control']
                        },
                        {
                            title: 'Trust & Compliance Guardrails',
                            description: 'Compliance by Design: EU MiCA, UAE VARA, US SEC, and multi-touch ROI attribution.',
                            path: '/ico-acceleration/trust-performance',
                            badge: 'Regulatory Hygiene',
                            icon: ShieldCheck,
                            tags: ['MiCA / VARA', 'Audit Proofs']
                        }
                    ]
                }
            ]
        },
        {
            id: 'functional',
            title: 'Functional Practices',
            shortLabel: 'Functional',
            icon: Target,
            description: 'Core revenue discovery stack, 34 specialized offering families, and growth acceleration science.',
            badge: 'Discovery & Revenue Architecture',
            subcategories: [
                {
                    id: 'discovery-stack',
                    label: 'Revenue Discovery Stack (L1–L7)',
                    shortDesc: 'Systematic profit pool discovery from market whitespace to PMF offers.',
                    cards: [
                        {
                            title: 'Market & Opportunity Discovery (L1)',
                            description: 'Identify unserved market profit pools, margin pools, and untapped buyer segments.',
                            path: '/offerings/discovery-stack#market-opportunity',
                            badge: 'Layer 01',
                            icon: Search,
                            tags: ['Profit Pools', 'Whitespace Mapping']
                        },
                        {
                            title: 'Demand & Pipeline Development (L2)',
                            description: 'Transform market intent into predictable qualified sales pipeline velocity.',
                            path: '/offerings/discovery-stack#demand-pipeline',
                            badge: 'Layer 02',
                            icon: Target,
                            tags: ['Pipeline Modeling', 'Lead Propensity']
                        },
                        {
                            title: 'Value & Deal Effectiveness (L3)',
                            description: 'Optimize deal packaging, pricing models, contract terms, and gross margins.',
                            path: '/offerings/discovery-stack#value-deal',
                            badge: 'Layer 03',
                            icon: DollarSign,
                            tags: ['Margin Expansion', 'Pricing Architecture']
                        },
                        {
                            title: 'Channel & Distribution Strategy (L4)',
                            description: 'Scale direct sales, partner channels, ecosystem alliances, and distribution networks.',
                            path: '/offerings/discovery-stack#channel-distribution',
                            badge: 'Layer 04',
                            icon: Layers,
                            tags: ['Alliances', 'Partner Ecosystems']
                        },
                        {
                            title: 'Competitive Moats & Positioning (L5)',
                            description: 'Defend market share, displace legacy incumbents, and establish pricing power.',
                            path: '/offerings/discovery-stack#competitive-positioning',
                            badge: 'Layer 05',
                            icon: ShieldCheck,
                            tags: ['Displacement', 'Defensible Moats']
                        },
                        {
                            title: 'PMF & Offer Architecture (L7)',
                            description: 'Calibrate core offers for repeatable sales velocity and sustained customer retention.',
                            path: '/offerings/discovery-stack#pmf-revenue-architecture',
                            badge: 'Layer 07',
                            icon: Sparkles,
                            tags: ['Repeatable Sales', 'LTV Expansion']
                        }
                    ]
                },
                {
                    id: 'service-families',
                    label: '34 Service Families',
                    shortDesc: 'Deep-dive consulting and automated capabilities across revenue lifecycle.',
                    cards: [
                        {
                            title: 'Complete Offerings Overview',
                            description: 'Browse all 34 capabilities organized by business lifecycle stage and delivery method.',
                            path: '/offerings',
                            badge: 'Master Catalog',
                            icon: Layers,
                            tags: ['34 Capabilities', 'Executive Suite']
                        },
                        {
                            title: 'Growth Acceleration Science',
                            description: 'Algorithmic growth engineering connecting data telemetry with executive revenue goals.',
                            path: '/growth-acceleration-science',
                            badge: 'Revenue Science',
                            icon: BarChart3,
                            tags: ['CAC Compression', 'Growth Engine']
                        },
                        {
                            title: 'AI MVP Validation Suite',
                            description: 'Rapid zero-to-one validation of new offerings, software features, and venture hypotheses.',
                            path: '/ai-mvp-validation',
                            badge: 'Product Validation',
                            icon: Compass,
                            tags: ['Demand Signal', 'Validation Sprint']
                        }
                    ]
                }
            ]
        },
        {
            id: 'industry',
            title: 'Industry Practices',
            shortLabel: 'Industries',
            icon: Building2,
            description: 'Domain-specific revenue acceleration tailored for B2B, B2C, Enterprise, Startups, and Specialized Verticals.',
            badge: 'Vertical Market Specialization',
            subcategories: [
                {
                    id: 'b2b-enterprise',
                    label: 'B2B & Enterprise Focus',
                    shortDesc: 'High-value multi-stakeholder account penetration and competitive displacement.',
                    cards: [
                        {
                            title: 'B2B Revenue Acceleration',
                            description: 'Account-Based Marketing (ABM) Autopilot, Competitor Displacement, and RQL scoring.',
                            path: '/industries/b2b',
                            badge: 'B2B Suite',
                            icon: Building2,
                            tags: ['ABM Autopilot', 'RQL Scoring']
                        },
                        {
                            title: 'Enterprise Global Penetration',
                            description: 'Navigating multi-stakeholder buying committees, global accounts, and strategic alliances.',
                            path: '/industries/enterprise',
                            badge: 'Enterprise',
                            icon: Globe,
                            tags: ['Global Accounts', 'Strategic BD']
                        },
                        {
                            title: 'Mid-Market Acceleration',
                            description: 'Rapid market entry, niche dominance, and lean commercial team productivity.',
                            path: '/industries/mid-market',
                            badge: 'Mid-Market',
                            icon: Rocket,
                            tags: ['Rapid Entry', 'Niche Dominance']
                        },
                        {
                            title: 'Startup & Venture Growth',
                            description: 'Zero-to-one pipeline generation, product-market fit signals, and burn-optimized sales.',
                            path: '/industries/startup',
                            badge: 'Startup Zero-to-One',
                            icon: Sparkles,
                            tags: ['PMF Signals', 'Founder Sales']
                        }
                    ]
                },
                {
                    id: 'specialized-sectors',
                    label: 'Specialized Vertical Sectors',
                    shortDesc: 'Tailored solutions for regulated, high-velocity, and physical-digital sectors.',
                    cards: [
                        {
                            title: 'FinTech, Lending & SaaS',
                            description: 'Compliant customer acquisition, underwriting pipeline optimization, and ARR growth.',
                            path: '/industries/specialized-sectors#fintech-saas',
                            badge: 'FinTech & Software',
                            icon: Landmark,
                            tags: ['ARR Acceleration', 'Lending Funnels']
                        },
                        {
                            title: 'Healthcare & Life Sciences',
                            description: 'HIPAA-aware provider outreach, institutional clinical pipeline, and MedTech sales.',
                            path: '/industries/specialized-sectors#healthcare-life-sciences',
                            badge: 'Life Sciences',
                            icon: HeartPulse,
                            tags: ['Provider Outreach', 'Regulatory Sanity']
                        },
                        {
                            title: 'D2C Brands & Retail FMCG',
                            description: 'Omnichannel consumer demand capture, behavioral retargeting, and basket optimization.',
                            path: '/industries/specialized-sectors#d2c-retail',
                            badge: 'Commerce & Retail',
                            icon: ShoppingBag,
                            tags: ['Omnichannel Lead Gen', 'Retention']
                        },
                        {
                            title: 'Industrial, Energy & Infrastructure',
                            description: 'Heavy enterprise sales cycles, capital expenditure justification, and supply chain ABM.',
                            path: '/industries/specialized-sectors#real-estate-energy',
                            badge: 'Industrial & Energy',
                            icon: Zap,
                            tags: ['CapEx Justification', 'B2B Supply']
                        }
                    ]
                }
            ]
        },
        {
            id: 'engagement',
            title: 'Engagement Models',
            shortLabel: 'Engagement',
            icon: Layers,
            description: 'One commercial continuum. Eight ways to buy certainty with defined pricing, deliverables, and SLAs.',
            badge: 'Commercial Terms & Governance',
            subcategories: [
                {
                    id: 'models-continuum',
                    label: 'Eight Engagement Models',
                    shortDesc: 'From 2-week diagnostic sprints to shared-risk performance partnerships.',
                    cards: [
                        {
                            title: 'Engagement Models Overview',
                            description: 'Explore the full spectrum of eight models spanning diagnostic advisory to shared economics.',
                            path: '/engagement-model/models',
                            badge: 'Commercial Continuum',
                            icon: Layers,
                            tags: ['Eight Models', 'Defined SLAs']
                        },
                        {
                            title: 'Stage Playbooks (S1–S6)',
                            description: 'Stage-matched operational roadmaps from Seed validation to mature Enterprise scale.',
                            path: '/engagement-model/stage-playbooks',
                            badge: 'Lifecycle Stages',
                            icon: Sliders,
                            tags: ['Services', 'Retail', 'Platform']
                        },
                        {
                            title: 'Business Situation Playbooks (B1–B15)',
                            description: 'Playbooks tailored to 15 specific enterprise scenarios: stagnant pipeline, churn crisis, expansion.',
                            path: '/engagement-model/business-situations',
                            badge: 'Situations B1–B15',
                            icon: Activity,
                            tags: ['Crisis Resolution', 'Expansion']
                        },
                        {
                            title: 'Engagement Journeys (A–E)',
                            description: 'End-to-end multi-quarter pathways connecting diagnostic discoveries to live execution.',
                            path: '/engagement-model/journeys',
                            badge: 'Multi-Quarter Tracks',
                            icon: TrendingUp,
                            tags: ['Predictable Velocity', 'Milestones']
                        }
                    ]
                },
                {
                    id: 'commercial-governance',
                    label: 'Commercials & KPI Governance',
                    shortDesc: 'Transparent fee structures, seven guardrails, and KPI measurement baselines.',
                    cards: [
                        {
                            title: 'Commercial Terms & Table 8.0',
                            description: 'Transparent pricing structures, retainer bands, fixed sprint fees, and success criteria.',
                            path: '/engagement-model/commercials',
                            badge: 'Table 8.0 Pricing',
                            icon: DollarSign,
                            tags: ['Zero Hidden Fees', 'Pass-Through']
                        },
                        {
                            title: 'Seven Standard Guardrails',
                            description: 'Institutional protections ensuring alignment, data confidentiality, and risk allocation.',
                            path: '/engagement-model/commercials#guardrails',
                            badge: 'Governance Policies',
                            icon: ShieldCheck,
                            tags: ['IP Retention', 'Risk Allocation']
                        },
                        {
                            title: 'Interactive Model Selector',
                            description: 'Dynamic diagnostic tool that recommends the exact engagement model for your stage and urgency.',
                            path: '/engagement-model/model-selector',
                            badge: 'Interactive Decision Tool',
                            icon: Bot,
                            tags: ['Algorithm Scored', 'Instant Match']
                        },
                        {
                            title: 'KPI Library & Baseline Measurement',
                            description: 'Comprehensive repository of performance metrics, attribution standards, and SLA targets.',
                            path: '/engagement-model/kpi-library',
                            badge: 'Attribution Standards',
                            icon: BarChart3,
                            tags: ['Empirical Targets', 'Audit Ready']
                        }
                    ]
                }
            ]
        },
        {
            id: 'value-engineering',
            title: 'AI Value Engineering',
            shortLabel: 'Value Eng',
            icon: Sparkles,
            description: 'Global market acceleration, empirical business outcomes, and executive advisory enablement.',
            badge: 'Business Value & Strategic ROI',
            subcategories: [
                {
                    id: 'global-acceleration',
                    label: 'Global Acceleration & Outcomes',
                    shortDesc: 'Cross-border expansion, demand telemetry, and verified client business outcomes.',
                    cards: [
                        {
                            title: 'Global Market Acceleration (Demand Pulse)',
                            description: 'Real-time global macro demand indicators, expansion telemetry, and cross-border buyer signals.',
                            path: '/global-market-acceleration',
                            badge: 'Macro Telemetry',
                            icon: Globe,
                            tags: ['Demand Pulse', 'Cross-Border']
                        },
                        {
                            title: 'Proven Business Outcomes',
                            description: 'Empirical data: 3.4x Pipeline Velocity, 42% CAC Compression, and 12-Month ARR Impact.',
                            path: '/outcomes',
                            badge: 'Documented Metrics',
                            icon: BarChart3,
                            tags: ['Verified ROI', 'Case Studies']
                        },
                        {
                            title: 'Enterprise Use Cases & Deployments',
                            description: 'Real-world customer implementation stories across B2B SaaS, FinTech, and Industrial sectors.',
                            path: '/use-cases',
                            badge: 'Deployment Proof',
                            icon: CheckCircle2,
                            tags: ['Client Proof Points', 'Live Production']
                        }
                    ]
                },
                {
                    id: 'enablement-resources',
                    label: 'Enablement & Executive Advisory',
                    shortDesc: 'Executive discovery frameworks, sales battlecards, and mobilization glossaries.',
                    cards: [
                        {
                            title: 'Sales Enablement & SPICED Framework',
                            description: 'Commercial discovery methodology, objection reframing cards, and agency comparison battlecards.',
                            path: '/ico-acceleration/sales-enablement',
                            badge: 'Sales Architecture',
                            icon: Compass,
                            tags: ['SPICED Diagnostic', 'Objections']
                        },
                        {
                            title: 'Engagement Onboarding & Mobilization',
                            description: 'Detailed kickoff sequences, charter templates, and week-by-week sprint kickoff cadences.',
                            path: '/engagement-model/onboarding',
                            badge: 'Mobilization Cadence',
                            icon: Clock,
                            tags: ['Week-1 Kickoff', 'Sprint Cadence']
                        },
                        {
                            title: 'Executive Glossary & FAQs',
                            description: '14 authoritative definitions of modern revenue architecture terms and commercial FAQs.',
                            path: '/engagement-model/glossary-faq',
                            badge: 'Executive Reference',
                            icon: FileText,
                            tags: ['14 Definitions', 'Knowledge Base']
                        },
                        {
                            title: 'Book Strategic Consultation',
                            description: 'Schedule a confidential session with our revenue architects to evaluate your pipeline.',
                            path: '/book-consultation',
                            badge: 'Direct Advisory',
                            icon: ArrowRight,
                            tags: ['45-Minute Discovery', 'Action Plan']
                        }
                    ]
                }
            ]
        }
    ], []);

    // Current active practice
    const currentPractice = useMemo(() => {
        return practices.find(p => p.id === activePracticeId) || practices[0];
    }, [practices, activePracticeId]);

    // Filter cards based on active subcategory and search query
    const displayCards = useMemo(() => {
        let cards: NavCard[] = [];
        if (activeSubcategoryId === 'all') {
            currentPractice.subcategories.forEach(sub => {
                cards.push(...sub.cards);
            });
        } else {
            const sub = currentPractice.subcategories.find(s => s.id === activeSubcategoryId);
            if (sub) {
                cards = sub.cards;
            }
        }

        if (!searchQuery.trim()) return cards;

        const q = searchQuery.toLowerCase();
        return cards.filter(card => 
            card.title.toLowerCase().includes(q) ||
            card.description.toLowerCase().includes(q) ||
            (card.badge && card.badge.toLowerCase().includes(q)) ||
            (card.tags && card.tags.some(t => t.toLowerCase().includes(q)))
        );
    }, [currentPractice, activeSubcategoryId, searchQuery]);

    const handlePracticeSelect = (practiceId: string) => {
        setActivePracticeId(practiceId);
        setActiveSubcategoryId('all');
        setExpandedSubmenuId(prev => prev === practiceId ? null : practiceId);
        setMobileDrawerOpen(false);
    };

    return (
        <div className={`w-full bg-white text-slate-900 ${isModal ? 'h-[85vh] max-h-[820px] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col' : 'min-h-[640px]'}`}>
            {/* Header Strip with Search & Close */}
            <div className="h-16 border-b border-slate-200 px-6 flex items-center justify-between bg-slate-50/80 shrink-0">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                        className="lg:hidden p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                        aria-label="Toggle menu"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                            Enterprise Directory
                        </span>
                        <h2 className="text-sm font-bold text-slate-800 hidden sm:block">
                            ProfitMachines Navigation Architecture
                        </h2>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative w-48 sm:w-72">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search practices, capabilities..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 transition-all"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </div>

                    {onClose && (
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>

            {/* Main Content Area: Sidebar + Grid */}
            <div className="flex-1 flex overflow-hidden relative">
                {/* ── LEFT VERTICAL SIDEBAR (DESKTOP) ── */}
                <aside className="w-72 border-r border-slate-200 bg-slate-50/60 p-4 shrink-0 overflow-y-auto hidden lg:flex flex-col justify-between">
                    <div className="space-y-1.5">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-3 mb-2">
                            Practices & Architecture
                        </div>

                        {practices.map((practice) => {
                            const IconComponent = practice.icon;
                            const isActive = activePracticeId === practice.id;
                            const isExpanded = expandedSubmenuId === practice.id;

                            return (
                                <div key={practice.id} className="space-y-1">
                                    <button
                                        onClick={() => handlePracticeSelect(practice.id)}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                                            isActive
                                                ? 'bg-blue-600 text-white shadow-sm'
                                                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2.5 truncate">
                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                                isActive ? 'bg-white/20 text-white' : 'bg-white border border-slate-200 text-slate-600'
                                            }`}>
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <span className="truncate">{practice.title}</span>
                                        </div>
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                                            isExpanded ? 'rotate-180' : ''
                                        } ${isActive ? 'text-white' : 'text-slate-400'}`} />
                                    </button>

                                    {/* Expandable Submenu */}
                                    {isExpanded && (
                                        <div className="pl-9 pr-1 py-1 space-y-1 animate-in fade-in-50 duration-200">
                                            <button
                                                onClick={() => setActiveSubcategoryId('all')}
                                                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                                                    activeSubcategoryId === 'all'
                                                        ? 'bg-blue-100/80 text-blue-700 font-bold'
                                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                                }`}
                                            >
                                                • View All ({practice.subcategories.reduce((acc, s) => acc + s.cards.length, 0)})
                                            </button>
                                            {practice.subcategories.map((sub) => (
                                                <button
                                                    key={sub.id}
                                                    onClick={() => setActiveSubcategoryId(sub.id)}
                                                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center justify-between ${
                                                        activeSubcategoryId === sub.id
                                                            ? 'bg-blue-100/80 text-blue-700 font-bold'
                                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                                    }`}
                                                >
                                                    <span className="truncate">{sub.label}</span>
                                                    <span className="text-[10px] opacity-70 ml-1">{sub.cards.length}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Quick Help Card */}
                    <div className="pt-4 border-t border-slate-200 mt-4">
                        <Link 
                            to="/book-consultation"
                            onClick={onClose}
                            className="block p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 hover:bg-blue-100/80 transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                <span className="text-xs font-bold text-blue-900 font-heading">Need Architecture Guidance?</span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                                Book a confidential discovery call with our revenue engineers.
                            </p>
                            <span className="text-[11px] font-bold text-blue-600 flex items-center gap-1">
                                Schedule Call <ArrowRight className="w-3 h-3" />
                            </span>
                        </Link>
                    </div>
                </aside>

                {/* ── MOBILE DRAWER SIDEBAR ── */}
                {mobileDrawerOpen && (
                    <div className="lg:hidden absolute inset-0 z-30 bg-slate-900/40 backdrop-blur-xs flex">
                        <div className="w-64 bg-white h-full border-r border-slate-200 p-4 overflow-y-auto space-y-2 animate-in slide-in-from-left duration-200">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                                <span className="text-xs font-bold text-slate-500 uppercase">Select Practice</span>
                                <button onClick={() => setMobileDrawerOpen(false)} className="text-slate-400">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            {practices.map((practice) => {
                                const IconComponent = practice.icon;
                                const isActive = activePracticeId === practice.id;
                                return (
                                    <button
                                        key={practice.id}
                                        onClick={() => handlePracticeSelect(practice.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                                            isActive
                                                ? 'bg-blue-600 text-white'
                                                : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span>{practice.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex-1" onClick={() => setMobileDrawerOpen(false)} />
                    </div>
                )}

                {/* ── RIGHT-SIDE CONTENT AREA (BENTO GRID OF CARDS) ── */}
                <main className="flex-1 p-6 lg:p-8 overflow-y-auto bg-white flex flex-col justify-between">
                    <div>
                        {/* Category Heading & Subtitle */}
                        <div className="mb-6 pb-6 border-b border-slate-100">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold border border-blue-100">
                                    {currentPractice.badge}
                                </span>
                                <span className="text-xs text-slate-400 ">
                                    {displayCards.length} Solutions Available
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-2">
                                {currentPractice.title}
                            </h3>
                            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                                {currentPractice.description}
                            </p>

                            {/* Subcategory Pills Filter */}
                            <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-4 border-t border-slate-100">
                                <button
                                    onClick={() => setActiveSubcategoryId('all')}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                                        activeSubcategoryId === 'all'
                                            ? 'bg-slate-900 text-white'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    All Categories
                                </button>
                                {currentPractice.subcategories.map(sub => (
                                    <button
                                        key={sub.id}
                                        onClick={() => setActiveSubcategoryId(sub.id)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                                            activeSubcategoryId === sub.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                    >
                                        {sub.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                            {displayCards.map((card, idx) => {
                                const CardIcon = card.icon;
                                return (
                                    <Link
                                        key={idx}
                                        to={card.path}
                                        onClick={onClose}
                                        className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between shadow-2xs relative"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                                                    <CardIcon className="w-5 h-5" />
                                                </div>
                                                {card.badge && (
                                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 font-semibold">
                                                        {card.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading mb-1.5">
                                                {card.title}
                                            </h4>

                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                {card.description}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                            {card.tags && card.tags.length > 0 ? (
                                                <div className="flex items-center gap-1.5 flex-wrap">
                                                    {card.tags.slice(0, 2).map((t, tIdx) => (
                                                        <span key={tIdx} className="text-[10px] text-slate-400 ">
                                                            #{t}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : <div />}
                                            <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                                                <span>Explore</span>
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Visual Alignment Footer */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>ProfitMachines Enterprise Architecture Suite · Production Ready</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/offerings" onClick={onClose} className="hover:text-blue-600 font-medium">All Offerings</Link>
                            <Link to="/industries" onClick={onClose} className="hover:text-blue-600 font-medium">All Industries</Link>
                            <Link to="/engagement-model" onClick={onClose} className="hover:text-blue-600 font-medium">Engagement Models</Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
