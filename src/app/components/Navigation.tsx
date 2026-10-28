import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, X, ChevronRight, ChevronDown, Search, ArrowRight, ArrowUpRight,
    Compass, Building2, Zap, Handshake, Rocket, BrainCircuit, TrendingUp, Globe,
    ShieldCheck, Layers, Cpu, DollarSign, Target, Sparkles, UserCheck, Sliders,
    Briefcase, ShoppingBag, Bot, Users, Activity, FileText, Lock, Coins,
    Network, Clock, BookOpen, HelpCircle, Landmark, HeartPulse, GraduationCap,
    Lightbulb, Shield, BarChart3, CheckCircle2, Phone, Radio, Factory, Server, Box, Scale,
    Flame, Store, Building, Cloud, HeartHandshake, Radar, LineChart, RefreshCw,
    Percent, GitMerge, Award
} from 'lucide-react';

// ── Types for Navigation & Mega-Menu ──
interface NavCard {
    title: string;
    description: string;
    path: string;
    badge?: string;
    icon: any;
    tags?: string[];
}

interface NavColumn {
    header: string;
    badge?: string;
    icon?: any;
    cards: NavCard[];
}

interface NavCategory {
    id: string;
    title: string;
    desc: string;
    path: string;
    badge?: string;
    icon: any;
    columns: NavColumn[];
}

interface MainMenuItem {
    id: string;
    name: string;
    shortName?: string;
    path: string;
    icon: any;
    summary: string;
    badge: string;
    categories: NavCategory[];
}


// ── TEMPLATE A: FEATURED PLATFORM SPOTLIGHTS (STRIPE / VERCEL ENTERPRISE HYBRID) ──
interface SpotlightConfig {
    badge: string;
    tagline: string;
    title: string;
    description: string;
    kpi: string;
    kpiLabel: string;
    path: string;
    ctaText: string;
    icon: any;
    accentGlow: string;
}


// ── BESPOKE ENTERPRISE ARCHITECTURE SPECIFICATION FOR OFFERINGS ──
export interface OfferingCapabilityItem {
    title: string;
    outcome: string;
    path: string;
    icon: any;
    tag?: string;
}

export interface OfferingCategoryDetail {
    id: string;
    title: string;
    path: string;
    recommendedIndustries: string[];
    keyRevenueOutcome: string;
    businessImpacts: string[];
    capabilities: OfferingCapabilityItem[];
}

export const offeringsArchitecture: OfferingCategoryDetail[] = [
    {
        id: 'revenue-discovery',
        title: 'Revenue Discovery',
        path: '/offerings/profit-pool-discovery',
        recommendedIndustries: ['Enterprise SaaS', 'BFSI', 'Healthcare'],
        keyRevenueOutcome: '+18% - 32% Margin Expansion',
        businessImpacts: [
            'Increased Revenue Visibility',
            'Higher Forecast Accuracy',
            'Margin Protection'
        ],
        capabilities: [
            {
                title: 'Profit Pool Discovery',
                outcome: 'Identify hidden margin expansion opportunities and isolate high-contribution pockets.',
                path: '/offerings/profit-pool-discovery',
                icon: Target,
                tag: 'DISCOVERY'
            },
            {
                title: 'Market Intelligence',
                outcome: 'Reveal emerging buyer demand and dark-funnel surge signals across whitespace TAM.',
                path: '/offerings/profit-pool-discovery#market-whitespace',
                icon: Globe,
                tag: 'INTELLIGENCE'
            },
            {
                title: 'Competitive Analysis',
                outcome: 'Uncover displacement opportunities with deal-by-deal rival dissection dossiers.',
                path: '/offerings/profit-pool-discovery#competitive',
                icon: ShieldCheck,
                tag: 'COMPETITIVE'
            },
            {
                title: 'Pricing & Value Discovery',
                outcome: 'Improve willingness-to-pay realization and eliminate unearned discounting.',
                path: '/offerings/profit-pool-discovery#value-roi',
                icon: DollarSign,
                tag: 'MONETIZATION'
            }
        ]
    },
    {
        id: 'demand-engineering',
        title: 'Demand Engineering',
        path: '/offerings/demand-engineering',
        recommendedIndustries: ['B2B Tech', 'Manufacturing', 'Global Enterprise'],
        keyRevenueOutcome: '3.4x Qualified Pipeline Velocity',
        businessImpacts: [
            'Accelerated Inbound Velocity',
            'Lower Customer Acquisition Cost',
            'Predictable Pipeline Generation'
        ],
        capabilities: [
            {
                title: 'Demand Generation',
                outcome: 'Capture in-market buyer intent systematically through engineered inbound architectures.',
                path: '/offerings/demand-engineering',
                icon: Zap,
                tag: 'DEMAND'
            },
            {
                title: 'Account-Based Marketing',
                outcome: 'Target high-yield strategic enterprise accounts with hyper-personalized executive narratives.',
                path: '/offerings/demand-engineering#abm',
                icon: Building2,
                tag: 'ABM SUITE'
            },
            {
                title: 'Intent Intelligence',
                outcome: 'Decode dark-funnel buying signals and account intent surges before competitors.',
                path: '/ai-demand-discovery',
                icon: Radar,
                tag: 'TELEMETRY'
            },
            {
                title: 'AI SDR Systems',
                outcome: 'Autonomous 24/7 multi-channel outbound qualification and calendar booking agents.',
                path: '/ai-native-sales/agentic-sdr',
                icon: Bot,
                tag: 'AUTONOMOUS'
            }
        ]
    },
    {
        id: 'revenue-acceleration',
        title: 'Revenue Acceleration',
        path: '/offerings/sales-acceleration',
        recommendedIndustries: ['Mid-Market', 'Enterprise Software', 'Financial Services'],
        keyRevenueOutcome: '28% Shorter Deal Cycles',
        businessImpacts: [
            'Reduced Deal Slippage',
            'Optimized Rep Quota Attainment',
            'Contract Margin Protection'
        ],
        capabilities: [
            {
                title: 'Sales Acceleration',
                outcome: 'Compress deal cycles and eliminate execution friction with deal velocity playbooks.',
                path: '/offerings/sales-acceleration',
                icon: TrendingUp,
                tag: 'EXECUTION'
            },
            {
                title: 'Revenue Operations',
                outcome: 'Unified telemetry and CRM hygiene across the entire end-to-end revenue engine.',
                path: '/offerings/revenue-operations',
                icon: Activity,
                tag: 'REVOPS'
            },
            {
                title: 'Forecasting',
                outcome: 'Deterministic econometric pipeline models forecasting revenue with 99.4% precision.',
                path: '/growth-science/revenue-physics',
                icon: LineChart,
                tag: 'ECONOMETRICS'
            },
            {
                title: 'CPQ & Deal Intelligence',
                outcome: 'Protect contract margins, guide discount thresholds, and optimize pricing governance.',
                path: '/ai-native-sales/deal-execution',
                icon: Scale,
                tag: 'GOVERNANCE'
            }
        ]
    },
    {
        id: 'customer-growth',
        title: 'Customer Growth',
        path: '/offerings/customer-success',
        recommendedIndustries: ['Subscription SaaS', 'Cloud Infrastructure', 'Telecom'],
        keyRevenueOutcome: '118% - 134% Net Revenue Retention (NRR)',
        businessImpacts: [
            'Compounded Customer LTV',
            'Automated Churn Mitigation',
            'Predictable Renewal Stream'
        ],
        capabilities: [
            {
                title: 'Retention Systems',
                outcome: 'Algorithmic churn prevention and real-time product usage health telemetry.',
                path: '/ai-native-sales/customer-growth',
                icon: HeartHandshake,
                tag: 'RETENTION'
            },
            {
                title: 'Expansion Intelligence',
                outcome: 'Isolate cross-sell and up-sell opportunity matrices across account divisions.',
                path: '/ai-native-sales/customer-growth#expansion',
                icon: Rocket,
                tag: 'EXPANSION'
            },
            {
                title: 'Renewal Automation',
                outcome: 'Autonomous contract renewal cadence with automated price uplift triggers.',
                path: '/ai-native-sales/customer-growth#renewals',
                icon: RefreshCw,
                tag: 'CADENCE'
            },
            {
                title: 'Customer Success',
                outcome: 'Value realization workflows aligned directly to customer business outcomes.',
                path: '/offerings/customer-success',
                icon: UserCheck,
                tag: 'CS LIFECYCLE'
            }
        ]
    },
    {
        id: 'ai-governance',
        title: 'AI Governance',
        path: '/offerings/ai-trust-governance',
        recommendedIndustries: ['BFSI', 'Healthcare & Life Sciences', 'Regulated Enterprise'],
        keyRevenueOutcome: '100% Sovereign Data Compliance',
        businessImpacts: [
            'Eliminated Regulatory Exposure',
            'Zero Data Leakage',
            'Board-Level AI Verification'
        ],
        capabilities: [
            {
                title: 'Explainable AI',
                outcome: 'Immutable audit trails, mathematical verifiability, and algorithmic decision telemetry.',
                path: '/offerings/ai-trust-governance#explainable-ai',
                icon: BrainCircuit,
                tag: 'AUDITABLE'
            },
            {
                title: 'Security & Compliance',
                outcome: 'Enterprise data sovereignty, SOC2 Type II, HIPAA, and GDPR boundary guardrails.',
                path: '/offerings/ai-trust-governance#security',
                icon: Lock,
                tag: 'SECURITY'
            },
            {
                title: 'Risk Management',
                outcome: 'Continuous hallucination control, brand reputation safeguards, and decision safety barriers.',
                path: '/offerings/ai-trust-governance#risk',
                icon: Shield,
                tag: 'GUARDRAILS'
            },
            {
                title: 'Governance Frameworks',
                outcome: 'Institutional policies and executive compliance oversight for autonomous enterprise AI operations.',
                path: '/offerings/ai-trust-governance',
                icon: Layers,
                tag: 'POLICY'
            }
        ]
    }
];

const spotlightConfigs: Record<string, SpotlightConfig> = {
    'offerings': {
        badge: 'Enterprise Platform',
        tagline: 'Defensible Growth Architecture',
        title: 'Profit Pool Discovery',
        description: 'Quantify buyer willingness-to-pay and deploy 16 quantitative discovery engines across your complete revenue chain.',
        kpi: '+28.4%',
        kpiLabel: 'Contribution Margin',
        path: '/offerings/profit-pool-discovery',
        ctaText: 'Explore Discovery Pillars',
        icon: Target,
        accentGlow: 'from-blue-600/30 to-indigo-600/30'
    },
    'industries': {
        badge: 'Sector Playbooks',
        tagline: 'Vertical Growth Science',
        title: 'Enterprise & SaaS Scale',
        description: 'Custom transformation frameworks engineered for Fortune 1000 enterprises, high-velocity SaaS, and deep-tech scale-ups.',
        kpi: '42+',
        kpiLabel: 'Enterprise Deployments',
        path: '/industries/enterprise',
        ctaText: 'View Enterprise Practice',
        icon: Building2,
        accentGlow: 'from-indigo-600/30 to-blue-700/30'
    },
    'ai-native-sales': {
        badge: 'Autonomous Revenue v2.4',
        tagline: 'Next-Gen Sales Autopilot',
        title: 'AI Sales Agents',
        description: 'Deploy 24/7 autonomous SDR & AE agents that identify dark-funnel buying signals, conduct multi-channel research, and book revenue.',
        kpi: '3.4x',
        kpiLabel: 'Pipeline Velocity',
        path: '/ai-sales-agents',
        ctaText: 'Deploy Sales Agents',
        icon: Bot,
        accentGlow: 'from-blue-600/30 to-cyan-500/30'
    },
    'growth-acceleration-science': {
        badge: 'Empirical Physics',
        tagline: 'Mathematical Pipeline Science',
        title: 'Revenue Physics & Telemetry',
        description: 'Locate structural pipeline friction points, forecast deal slip with 99.4% precision, and automate continuous remediation.',
        kpi: '99.4%',
        kpiLabel: 'Forecast Precision',
        path: '/growth-science/revenue-physics',
        ctaText: 'Inspect Revenue Physics',
        icon: Sparkles,
        accentGlow: 'from-violet-600/30 to-blue-600/30'
    },
    'global-business-accelerations': {
        badge: 'Cross-Border Scale',
        tagline: 'Sovereign International Corridors',
        title: 'Executive Expansion Office',
        description: 'Enter North American, EMEA, and APAC corridors with automated multi-language SDRs and sovereign RevOps compliance.',
        kpi: '14',
        kpiLabel: 'Global Corridors',
        path: '/global-acceleration/market-intelligence',
        ctaText: 'Launch Global Expansion',
        icon: Globe,
        accentGlow: 'from-blue-700/30 to-emerald-600/30'
    },
    'case-studies': {
        badge: 'Verified Proof Points',
        tagline: 'Audited Client Results',
        title: 'Enterprise Transformations',
        description: 'Review audited case studies across B2B SaaS, manufacturing, and healthtech generating verified ARR lift.',
        kpi: '$140M+',
        kpiLabel: 'Generated Net-New ARR',
        path: '/outcomes',
        ctaText: 'View Case Studies',
        icon: Award,
        accentGlow: 'from-amber-600/30 to-blue-700/30'
    },
    'about-us': {
        badge: 'The Executive Advisory',
        tagline: 'Leadership & Research Lab',
        title: 'Revenue Engineering Cadre',
        description: 'Forward-deployed revenue architects and AI engineers partnering with founders, CEOs, and enterprise boards under strict confidentiality.',
        kpi: '100%',
        kpiLabel: 'Confidential & NDA Bound',
        path: '/book-consultation',
        ctaText: 'Schedule Scoping Call',
        icon: ShieldCheck,
        accentGlow: 'from-slate-700/30 to-blue-800/30'
    }
};


// ── UNIFIED EXECUTIVE PRESENTATION CONFIGS FOR ALL 7 MAIN MENUS ──
interface MenuPresentationConfig {
    sectionTag: string;
    capabilitiesLabel: string;
    outcomeBadge: string;
    recommendedFor: string[];
    businessImpacts: string[];
    ctaText: string;
}

const menuPresentationConfigs: Record<string, MenuPresentationConfig> = {
    'offerings': {
        sectionTag: 'REVENUE ARCHITECTURE',
        capabilitiesLabel: 'OFFERING CAPABILITIES',
        outcomeBadge: '+18% - 32% Margin Expansion',
        recommendedFor: ['Enterprise SaaS', 'BFSI', 'Healthcare'],
        businessImpacts: [
            'Increased Revenue Visibility',
            'Higher Forecast Accuracy',
            'Margin Protection'
        ],
        ctaText: 'Explore Architecture'
    },
    'industries': {
        sectionTag: 'INDUSTRY PLAYBOOKS',
        capabilitiesLabel: 'SECTOR SOLUTIONS',
        outcomeBadge: '42+ Enterprise Deployments',
        recommendedFor: ['Enterprise', 'Mid-Market', 'Startups'],
        businessImpacts: [
            'Accelerated Time-to-Value',
            'Sovereign Data Compliance',
            'Vertical Revenue Fit'
        ],
        ctaText: 'Explore Industry Solutions'
    },
    'ai-native-sales': {
        sectionTag: 'AUTONOMOUS REVENUE OS',
        capabilitiesLabel: 'AUTONOMOUS ENGINES',
        outcomeBadge: '3.4x Pipeline Velocity',
        recommendedFor: ['B2B Sales Teams', 'Global GTM', 'Inbound/Outbound'],
        businessImpacts: [
            '24/7 Signal Qualification',
            'Automated Meeting Booking',
            'Zero Rep Admin Overhead'
        ],
        ctaText: 'Deploy Sales Infrastructure'
    },
    'growth-acceleration-science': {
        sectionTag: 'EMPIRICAL REVENUE PHYSICS',
        capabilitiesLabel: 'SCIENTIFIC MODELS',
        outcomeBadge: '99.4% Forecast Precision',
        recommendedFor: ['Executive Leadership', 'Board of Directors', 'CROs'],
        businessImpacts: [
            'Friction Point Remediation',
            'Deterministic Forecasting',
            'Mathematical Pipeline Audits'
        ],
        ctaText: 'Inspect Growth Models'
    },
    'global-business-accelerations': {
        sectionTag: 'CROSS-BORDER EXPANSION',
        capabilitiesLabel: 'EXPANSION CORRIDORS',
        outcomeBadge: '14 Global Corridors',
        recommendedFor: ['Multinational Tech', 'Cross-Border Scale', 'EMEA / APAC'],
        businessImpacts: [
            'Multi-Language SDR Automation',
            'Sovereign Entity Alignment',
            'Unified Global RevOps'
        ],
        ctaText: 'Launch Global Corridors'
    },
    'case-studies': {
        sectionTag: 'VERIFIED IMPACT ARCHIVE',
        capabilitiesLabel: 'TRANSFORMATION DOSSIERS',
        outcomeBadge: '$140M+ Net-New ARR',
        recommendedFor: ['Due Diligence Teams', 'Enterprise Buyers', 'Founders'],
        businessImpacts: [
            'Audited Client Case Studies',
            'Measurable Pipeline Lift',
            'Rapid Time-to-ROI'
        ],
        ctaText: 'Explore Client Outcomes'
    },
    'about-us': {
        sectionTag: 'THE EXECUTIVE ADVISORY',
        capabilitiesLabel: 'FIRM & PRACTICE AREAS',
        outcomeBadge: 'Confidential & NDA Bound',
        recommendedFor: ['Enterprise CROs', 'Board Members', 'Strategic Partners'],
        businessImpacts: [
            'Forward Deployed Engineers',
            'Quantitative Research Lab',
            'Executive Operating Cadre'
        ],
        ctaText: 'Schedule Scoping Call'
    }
};

export default function Navigation() {
    const location = useLocation();
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const [activeCategoryId, setActiveCategoryId] = useState<string>('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
    const [mobileExpandedCategories, setMobileExpandedCategories] = useState<Record<string, boolean>>({});
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // ── 7 MAIN MENUS DATA (EXACT SEVEN TOP-LEVEL MENU ITEMS AS SPECIFIED) ──
    const mainMenus: MainMenuItem[] = useMemo(() => [
                // 1. OFFERINGS (EXACT 5 ARCHITECTURAL CATEGORIES)
        {
            id: 'offerings',
            name: 'Offerings',
            shortName: 'Offerings',
            path: '/offerings',
            icon: Compass,
            badge: 'Revenue Architecture',
            summary: 'Comprehensive revenue operating system, quantitative discovery engines, and execution playbooks.',
            categories: offeringsArchitecture.map(cat => ({
                id: cat.id,
                title: cat.title,
                desc: cat.capabilities.map(c => c.title).join(' • '),
                path: cat.path,
                badge: 'Revenue Architecture',
                icon: cat.capabilities[0].icon,
                columns: [
                    {
                        header: cat.title,
                        badge: 'Capabilities',
                        icon: cat.capabilities[0].icon,
                        cards: cat.capabilities.map(c => ({
                            title: c.title,
                            description: c.outcome,
                            path: c.path,
                            badge: c.tag,
                            icon: c.icon,
                            tags: [cat.title]
                        }))
                    }
                ]
            }))
        },

        // 2. INDUSTRIES
        {
            id: 'industries',
            name: 'Industries',
            shortName: 'Industries',
            path: '/industries/b2b',
            icon: Building2,
            badge: 'Vertical Engineering',
            summary: 'Vertical-specific revenue engineering: bespoke revenue operating systems tailored to your market nuances and compliance requirements.',
            categories: [
                {
                    id: 'b2b-focus',
                    title: 'B2B Focus',
                    desc: 'Target account penetration, competitor displacement, autonomous SDRs, and mathematical revenue forecasting.',
                    path: '/industries/b2b',
                    badge: 'Pipeline Generation',
                    icon: Target,
                    columns: [
                        {
                            header: 'Targeting & Displacement',
                            badge: 'Acquisition',
                            icon: Target,
                            cards: [
                                {
                                    title: 'AI Account-Based Marketing (ABM) Autopilot',
                                    description: 'Orchestrate synchronized target account ads, personalized landing pages, and SDR outreach.',
                                    path: '/industries/b2b#abm',
                                    badge: '#abm',
                                    icon: Target,
                                    tags: ['CRM Ingestion', 'Dynamic Ads']
                                },
                                {
                                    title: 'AI Competitor Displacement Engine',
                                    description: 'Detect competitor migration signals, intercept renewal windows, and win back rival accounts.',
                                    path: '/industries/b2b#competitor',
                                    badge: '#competitor',
                                    icon: ShieldCheck,
                                    tags: ['Intent Signals', 'Win-Back']
                                }
                            ]
                        },
                        {
                            header: 'Execution & Intelligence',
                            badge: 'Velocity',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'AI SDR Co-Pilot / Autopilot',
                                    description: 'Autonomous outbound assistant that drafts outreach, resolves objections, and calendars demos.',
                                    path: '/industries/b2b#sdr',
                                    badge: '#sdr',
                                    icon: Bot,
                                    tags: ['Email Drafting', 'Meeting Booking']
                                },
                                {
                                    title: 'AI Revenue Qualified Lead (RQL) Predictor',
                                    description: 'Replace subjective gut feelings with mathematical close probability and velocity scoring.',
                                    path: '/industries/b2b#rql',
                                    badge: '#rql',
                                    icon: BarChart3,
                                    tags: ['Deal Scoring', 'Forecasting']
                                },
                                {
                                    title: 'AI Contract & Expansion Opportunity Finder',
                                    description: 'Monitor software usage trends to trigger seat expansion and renewal protection.',
                                    path: '/industries/b2b#expansion',
                                    badge: '#expansion',
                                    icon: TrendingUp,
                                    tags: ['NRR Growth', 'Usage Alerts']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'b2c-focus',
                    title: 'B2C Focus',
                    desc: 'High-propensity consumer intent capture, 1:1 personalized offer generation, and checkout bounce recovery.',
                    path: '/industries/b2c',
                    badge: 'Consumer Growth',
                    icon: ShoppingBag,
                    columns: [
                        {
                            header: 'Acquisition & Scaling',
                            badge: 'Traffic',
                            icon: ShoppingBag,
                            cards: [
                                {
                                    title: 'AI Omnichannel Lead Generation',
                                    description: 'Automate campaign execution across social, search, and email, optimizing budget in real time.',
                                    path: '/industries/b2c#omnichannel',
                                    badge: '#omnichannel',
                                    icon: BarChart3,
                                    tags: ['Multi-Channel Ad Sync', 'Max ROAS']
                                },
                                {
                                    title: 'AI Lookalike Audience Auto-Scaling',
                                    description: 'Auto-feed ad networks with custom seed lists to replicate highest-converting buyer cohorts.',
                                    path: '/industries/b2c#lookalike',
                                    badge: '#lookalike',
                                    icon: Users,
                                    tags: ['Seed Lists', 'Audience Scaling']
                                }
                            ]
                        },
                        {
                            header: 'Conversion & Retention',
                            badge: 'Checkout',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'AI Personalized Offer Generation at Scale',
                                    description: 'Analyze session context and cart value to trigger 1:1 dynamic pricing without margin erosion.',
                                    path: '/industries/b2c#offers',
                                    badge: '#offers',
                                    icon: TrendingUp,
                                    tags: ['Dynamic Pricing', 'Margin Protection']
                                },
                                {
                                    title: 'AI Behavioral Retargeting Autopilot',
                                    description: 'Trigger context-aware SMS and email sequences within minutes of an abandoned checkout.',
                                    path: '/industries/b2c#retargeting',
                                    badge: '#retargeting',
                                    icon: Sparkles,
                                    tags: ['Cart Recovery', 'SMS Cadence']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'enterprise-focus',
                    title: 'Enterprise',
                    desc: 'Complex buying committee navigation, parent-subsidiary mapping, and board-level C-suite engagement.',
                    path: '/industries/enterprise',
                    badge: 'Enterprise Scale',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Global Penetration & Alliances',
                            badge: 'Expansion',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'AI Global Account Penetration',
                                    description: 'Map internal buying circles across global corporate trees and scale ACV across divisions.',
                                    path: '/industries/enterprise#global',
                                    badge: '#global',
                                    icon: Globe,
                                    tags: ['Corporate Tree Mapping', 'Multi-Division']
                                },
                                {
                                    title: 'AI Strategic Partnership Opportunity Finder',
                                    description: 'Scan ecosystem integrators and distributors to identify high-yield co-sell alliances.',
                                    path: '/industries/enterprise#partnerships',
                                    badge: '#partnerships',
                                    icon: Handshake,
                                    tags: ['Co-Sell Scoring', 'Channel Acceleration']
                                }
                            ]
                        },
                        {
                            header: 'Executive Consensus',
                            badge: 'C-Suite',
                            icon: Users,
                            cards: [
                                {
                                    title: 'AI Executive Engagement Automation',
                                    description: 'Extract priorities from SEC 10-K filings to generate board-ready ROI proposals.',
                                    path: '/industries/enterprise#executive',
                                    badge: '#executive',
                                    icon: Users,
                                    tags: ['SEC Filings', 'Board-Level ROI']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'mid-market',
                    title: 'Mid-Market',
                    desc: 'Rapid vertical expansion, 100% niche account cataloging, and multiplying sales output with lean teams.',
                    path: '/industries/midmarket',
                    badge: 'Niche Dominance',
                    icon: TrendingUp,
                    columns: [
                        {
                            header: 'Market Velocity',
                            badge: 'Rapid GTM',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'AI Rapid Market Entry Engine',
                                    description: 'Deploy pre-configured vertical outreach campaigns and content vectors in days, not months.',
                                    path: '/industries/midmarket#entry',
                                    badge: '#entry',
                                    icon: Zap,
                                    tags: ['Pre-Built Vectors', 'Fast Deployment']
                                },
                                {
                                    title: 'AI Niche Market Domination',
                                    description: 'Catalog 100% of accounts within specialized verticals and eliminate generic messaging waste.',
                                    path: '/industries/midmarket#niche',
                                    badge: '#niche',
                                    icon: Target,
                                    tags: ['100% Coverage', 'Vertical Playbooks']
                                }
                            ]
                        },
                        {
                            header: 'Team Efficiency',
                            badge: 'Productivity',
                            icon: Clock,
                            cards: [
                                {
                                    title: 'AI Lean Team Productivity Amplifier',
                                    description: 'Reclaim 15+ hours per rep per week by automating prospecting and CRM data entry.',
                                    path: '/industries/midmarket#productivity',
                                    badge: '#productivity',
                                    icon: Clock,
                                    tags: ['15 hrs Reclaimed', 'CRM Automation']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'startups',
                    title: 'Startups',
                    desc: 'Zero-to-one customer acquisition, empirical PMF signal detection, and capital-efficient runway extension.',
                    path: '/industries/startups',
                    badge: 'Capital Efficiency',
                    icon: Rocket,
                    columns: [
                        {
                            header: 'First Revenue & PMF',
                            badge: 'Validation',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'AI Zero-to-One Lead Generation',
                                    description: 'Automate first customer acquisition campaigns to validate market interest within 48 hours.',
                                    path: '/industries/startups#zero-to-one',
                                    badge: '#zero-to-one',
                                    icon: Zap,
                                    tags: ['48-Hour Launch', 'First 10-50 Customers']
                                },
                                {
                                    title: 'AI Product-Market Fit Signal Detection',
                                    description: 'Measure retention, feature adoption, and referral velocity for data-backed investor proof.',
                                    path: '/industries/startups#pmf',
                                    badge: '#pmf',
                                    icon: BarChart3,
                                    tags: ['Retention Scoring', 'PMF Proof']
                                }
                            ]
                        },
                        {
                            header: 'Founder Scale & Runway',
                            badge: 'Runway',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'AI Founder-Led Sales Automation',
                                    description: 'Automate inbound qualification, scheduling, and follow-ups to protect founder building time.',
                                    path: '/industries/startups#founder',
                                    badge: '#founder',
                                    icon: Bot,
                                    tags: ['Calendar Protection', 'Inbound Nurturing']
                                },
                                {
                                    title: 'AI Burn-Rate Optimized Lead Capture',
                                    description: 'Deploy low-cost intent capture and high-ROI outbound loops that preserve precious cash runway.',
                                    path: '/industries/startups#burn-rate',
                                    badge: '#burn-rate',
                                    icon: DollarSign,
                                    tags: ['Low-CAC', 'Runway Extension']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'specialized-sectors',
                    title: 'Specialized Sectors',
                    desc: 'Vertical-specific revenue engineering across 10 specialized industry domains and regulated sectors.',
                    path: '/industries/sectors',
                    badge: '10 Verticals',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Service, Industrial & Consumer',
                            badge: 'Part 1',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Service Industries',
                                    description: 'Consulting, healthcare, education, logistics: reputation building and trust audits.',
                                    path: '/industries/sectors#services',
                                    badge: '#services',
                                    icon: Briefcase,
                                    tags: ['Trust Audits', 'Partner Inquiries']
                                },
                                {
                                    title: 'Industrial Industries',
                                    description: 'Manufacturing, supply chain, infrastructure: compliance and digital procurement outreach.',
                                    path: '/industries/sectors#industrial',
                                    badge: '#industrial',
                                    icon: Factory,
                                    tags: ['-47% Cycle Time', 'Dealer Sync']
                                },
                                {
                                    title: 'D2C Companies',
                                    description: 'Consumer brands, lifestyle, electronics: turn attention into high-propensity demand.',
                                    path: '/industries/sectors#d2c',
                                    badge: '#d2c',
                                    icon: ShoppingBag,
                                    tags: ['+30% Repeat', '-25% Ad Dependency']
                                },
                                {
                                    title: 'FinTech & Lending',
                                    description: 'Digital lending, wealth tech, insurance: acquire high-LTV borrowers under strict compliance.',
                                    path: '/industries/sectors#fintech',
                                    badge: '#fintech',
                                    icon: Landmark,
                                    tags: ['30-45% Activation', 'Fraud Defense']
                                },
                                {
                                    title: 'SaaS Products',
                                    description: 'Cloud software and AI tools: surface buying signals and map multi-stakeholder committees.',
                                    path: '/industries/sectors#saas',
                                    badge: '#saas',
                                    icon: Cloud,
                                    tags: ['6X Qualified Leads', '66% Faster Cycle']
                                }
                            ]
                        },
                        {
                            header: 'Regulated & Mission-Critical',
                            badge: 'Part 2',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Healthcare & Life Sciences',
                                    description: 'Hospitals, pharma, biotech: strict HIPAA/EHR compliance and disaster readiness.',
                                    path: '/industries/sectors#healthcare',
                                    badge: '#healthcare',
                                    icon: HeartPulse,
                                    tags: ['HIPAA Compliant', 'Zero Breaches']
                                },
                                {
                                    title: 'Education & EdTech',
                                    description: 'Universities, learning platforms: enroll the right students and compress admissions.',
                                    path: '/industries/sectors#education',
                                    badge: '#education',
                                    icon: GraduationCap,
                                    tags: ['30-45% Enrollment', '-40% Workload']
                                },
                                {
                                    title: 'Retail & FMCG',
                                    description: 'Supermarkets, distributors: demand-driven supply and retail sell-through prediction.',
                                    path: '/industries/sectors#retail',
                                    badge: '#retail',
                                    icon: Store,
                                    tags: ['-20% Inventory', '2.5X Velocity']
                                },
                                {
                                    title: 'Real Estate & Construction',
                                    description: 'Developers, smart infrastructure: separate speculators from buyers and compress site tours.',
                                    path: '/industries/sectors#real-estate',
                                    badge: '#real-estate',
                                    icon: Building,
                                    tags: ['2X Booking Velocity', '-30% Cost']
                                },
                                {
                                    title: 'Energy & Utilities',
                                    description: 'Power generation, renewables, oil & gas: grid operational resilience and ESG compliance.',
                                    path: '/industries/sectors#energy',
                                    badge: '#energy',
                                    icon: Zap,
                                    tags: ['SCADA Security', '100% ESG Coverage']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 3. AI NATIVE SALES
        {
            id: 'ai-native-sales',
            name: 'AI Sales',
            shortName: 'AI Sales',
            path: '/ai-native-sales',
            icon: BrainCircuit,
            badge: 'Autonomous Revenue OS',
            summary: 'Autonomous sales operations — replacing fragmented GTM tool stacks with a unified, self-learning revenue intelligence layer.',
            categories: [
                {
                    id: 'revenue-intelligence',
                    title: 'Revenue Intelligence',
                    desc: 'Intent telemetry, real-time customer 360, competitive displacement signals, and multi-cloud data sync',
                    path: '/ai-native-sales/revenue-intelligence',
                    badge: 'Pillar 01',
                    icon: Activity,
                    columns: [
                        {
                            header: 'Intent & Scoring',
                            badge: 'Real-Time',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'Buyer Intent Detection',
                                    description: 'Surfaces dark-funnel buying surges and vendor research 60-90 days before competitors.',
                                    path: '/ai-native-sales/revenue-intelligence',
                                    badge: '40+ Feeds',
                                    icon: Activity,
                                    tags: ['Dark Funnel', 'Intent Surges']
                                },
                                {
                                    title: 'Predictive Lead Scoring',
                                    description: 'Ranks accounts by mathematical close probability rather than subjective criteria.',
                                    path: '/ai-native-sales/revenue-intelligence',
                                    badge: '98% Precision',
                                    icon: BarChart3,
                                    tags: ['Neural ICP', 'Close Propensity']
                                }
                            ]
                        },
                        {
                            header: 'Customer 360 & Signals',
                            badge: 'Telemetry',
                            icon: BrainCircuit,
                            cards: [
                                {
                                    title: 'Customer Intelligence Graph',
                                    description: 'Unified cross-system knowledge graph linking product usage, support tickets, and CRM records.',
                                    path: '/ai-native-sales/revenue-intelligence',
                                    badge: 'Unified 360',
                                    icon: Layers,
                                    tags: ['Knowledge Graph', 'Real-Time Sync']
                                },
                                {
                                    title: 'Market & Competitive Signals',
                                    description: 'Algorithmic monitoring of rival pricing shifts, executive hiring, and regulatory triggers.',
                                    path: '/ai-native-sales/revenue-intelligence',
                                    badge: 'Displacement',
                                    icon: ShieldCheck,
                                    tags: ['Rival Teardowns', 'Hiring Spikes']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'prospecting-pipeline',
                    title: 'AI Prospecting & Pipeline',
                    desc: 'Autonomous lead discovery, verified committee enrichment, hyper-personalized outreach, and meeting booking',
                    path: '/ai-native-sales/prospecting',
                    badge: 'Pillar 02',
                    icon: Target,
                    columns: [
                        {
                            header: 'Discovery & Enrichment',
                            badge: 'Deep Search',
                            icon: Target,
                            cards: [
                                {
                                    title: 'Autonomous Lead Discovery',
                                    description: 'Identifies in-market accounts and decision-maker committees across 50+ real-time feeds.',
                                    path: '/ai-native-sales/prospecting',
                                    badge: '3-5X Velocity',
                                    icon: Target,
                                    tags: ['Contact Verification', 'Dark Funnel']
                                },
                                {
                                    title: 'Account Data Enrichment',
                                    description: 'Synthesizes 10-Ks, technographic stacks, and funding disclosures without human scraping.',
                                    path: '/ai-native-sales/prospecting',
                                    badge: '50+ Sources',
                                    icon: Layers,
                                    tags: ['Technographics', 'Committee Mapping']
                                }
                            ]
                        },
                        {
                            header: 'Outreach & Qualification',
                            badge: 'Always-On',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'Hyper-Personalized Outreach',
                                    description: 'Context-driven email, LinkedIn, and conversational voice that lifts positive replies +150%.',
                                    path: '/ai-native-sales/prospecting',
                                    badge: '+150% Replies',
                                    icon: Zap,
                                    tags: ['Context Synthesis', 'Voice & Email']
                                },
                                {
                                    title: 'Autonomous Meeting Booking',
                                    description: 'Converses with prospects, overcomes objections, and books SQLs directly onto AE calendars.',
                                    path: '/ai-native-sales/prospecting',
                                    badge: '75-80% Auto',
                                    icon: CheckCircle2,
                                    tags: ['BANT / MEDDPICC', 'Calendar Sync']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'sales-execution',
                    title: 'AI Sales Execution',
                    desc: 'MEDDPICC opportunity scoring, instant proposal generation, discount governance, and live call battlecards',
                    path: '/ai-native-sales/sales-execution',
                    badge: 'Pillar 03',
                    icon: Zap,
                    columns: [
                        {
                            header: 'Opportunity & Proposals',
                            badge: 'Velocity',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'MEDDPICC Deal Scoring',
                                    description: 'Dynamic win probability and risk prediction flagging stalled deals weeks before quarter end.',
                                    path: '/ai-native-sales/sales-execution',
                                    badge: '90%+ Forecast',
                                    icon: ShieldCheck,
                                    tags: ['Risk Prediction', 'Stage Gates']
                                },
                                {
                                    title: 'AI Proposal & RFP Automation',
                                    description: 'Generates bespoke 40-page enterprise proposals and responds to complex security RFPs in minutes.',
                                    path: '/ai-native-sales/sales-execution',
                                    badge: '80% Faster',
                                    icon: FileText,
                                    tags: ['Instant CPQ', 'DocuSign Ready']
                                }
                            ]
                        },
                        {
                            header: 'Pricing & Enablement',
                            badge: 'Margin Yield',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Pricing & Discount Governance',
                                    description: 'Preserves 5-10 points of gross margin via algorithmic concession trading and discount rules.',
                                    path: '/ai-native-sales/sales-execution',
                                    badge: '5-10 Pts Yield',
                                    icon: DollarSign,
                                    tags: ['Margin Defense', 'Concessions']
                                },
                                {
                                    title: 'In-Call Conversation Copilot',
                                    description: 'Pushes live battlecards and technical counter-arguments during active discovery sessions.',
                                    path: '/ai-native-sales/sales-execution',
                                    badge: '+10-15% Wins',
                                    icon: Sparkles,
                                    tags: ['Real-Time HUD', 'Competitive Rebuttal']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'revenue-operations',
                    title: 'AI Revenue Operations',
                    desc: 'Zero-touch CRM data hygiene, board-grade revenue forecasting (<5% variance), and workflow automation',
                    path: '/ai-native-sales/revops',
                    badge: 'Pillar 04',
                    icon: Cpu,
                    columns: [
                        {
                            header: 'CRM & Forecasting',
                            badge: 'Zero Friction',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'CRM Data Governance',
                                    description: 'Zero-touch activity capture achieving 95%+ CRM accuracy without manual sales rep data entry.',
                                    path: '/ai-native-sales/revops',
                                    badge: '95%+ Clean',
                                    icon: Layers,
                                    tags: ['Zero-Touch Logging', 'Deduplication']
                                },
                                {
                                    title: 'Predictive Board Forecasting',
                                    description: 'Deterministic Bayesian forecasting reducing quarterly variance below 5% for executive teams.',
                                    path: '/ai-native-sales/revops',
                                    badge: '<5% Variance',
                                    icon: BarChart3,
                                    tags: ['Board Decks', 'Capacity Models']
                                }
                            ]
                        },
                        {
                            header: 'Analytics & Automation',
                            badge: 'Efficiency',
                            icon: Sliders,
                            cards: [
                                {
                                    title: 'Funnel Conversion Topology',
                                    description: 'Identifies stage bottlenecks and leaky conversions, improving pipeline progression by 25-30%.',
                                    path: '/ai-native-sales/revops',
                                    badge: '+25-30% Conv',
                                    icon: TrendingUp,
                                    tags: ['Funnel Leakage', 'Stage Velocity']
                                },
                                {
                                    title: 'Commission & Workflow Engine',
                                    description: 'Automates comp calculations, territory rebalancing, and operational SLAs in sub-seconds.',
                                    path: '/ai-native-sales/revops',
                                    badge: '60% Admin Cut',
                                    icon: Clock,
                                    tags: ['Comp Automation', 'Territory Routing']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'sales-agents',
                    title: 'AI Sales Agents',
                    desc: 'Autonomous 24/7 digital workforce: AI SDR, Sales Copilot, RevOps Agent, and Customer Success Agent',
                    path: '/ai-native-sales/agents',
                    badge: 'Pillar 05',
                    icon: Bot,
                    columns: [
                        {
                            header: 'Outbound & Deal Copilots',
                            badge: 'Front-Line',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'Autonomous AI SDR Agent',
                                    description: 'Always-on agent discovering accounts, drafting tailored outreach, and booking qualified discovery sessions.',
                                    path: '/ai-native-sales/agents',
                                    badge: '75-80% SQLs',
                                    icon: Bot,
                                    tags: ['Hunter-09', '24/7 Pipeline']
                                },
                                {
                                    title: 'AI Sales Copilot / Assistant',
                                    description: 'In-call battlecard delivery, instant proposal generation, and zero-touch CRM milestone sync.',
                                    path: '/ai-native-sales/agents',
                                    badge: '15+ hrs Saved',
                                    icon: Sparkles,
                                    tags: ['Tactical-04', 'Meeting Copilot']
                                }
                            ]
                        },
                        {
                            header: 'Ops & Retention Agents',
                            badge: 'Back-Office',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'AI RevOps Guardian',
                                    description: 'Continuous data hygiene, automated forecast recalibration, and pipeline anomaly detection.',
                                    path: '/ai-native-sales/agents',
                                    badge: '99.9% Sync',
                                    icon: Cpu,
                                    tags: ['Orchestrate-02', 'Audit Guardrails']
                                },
                                {
                                    title: 'AI Customer Success Agent',
                                    description: 'Monitors product consumption telemetry, alerts on churn risks, and triggers upsell sequences.',
                                    path: '/ai-native-sales/agents',
                                    badge: '+20-30% NRR',
                                    icon: HeartHandshake,
                                    tags: ['Retention-07', 'Expansion Signals']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'customer-growth',
                    title: 'Customer Growth',
                    desc: 'Predictive churn prevention, white-space account expansion, automated renewals, and 120%+ NRR pacing',
                    path: '/ai-native-sales/customer-growth',
                    badge: 'Pillar 06',
                    icon: HeartHandshake,
                    columns: [
                        {
                            header: 'Health & Churn Prevention',
                            badge: 'Retention',
                            icon: HeartHandshake,
                            cards: [
                                {
                                    title: 'Customer Health Surveillance',
                                    description: 'Continuous multi-factor telemetry detecting silent customer disengagement 90 days ahead.',
                                    path: '/ai-native-sales/customer-growth',
                                    badge: '15-20% Cut',
                                    icon: Activity,
                                    tags: ['Telemetry 360', 'Sponsor Alerts']
                                },
                                {
                                    title: 'Churn Prediction & Mitigation',
                                    description: 'Prescriptive early warning playbooks preventing gross revenue and logo churn.',
                                    path: '/ai-native-sales/customer-growth',
                                    badge: '90-Day Warning',
                                    icon: ShieldCheck,
                                    tags: ['Prescriptive Action', 'Zero Blindspots']
                                }
                            ]
                        },
                        {
                            header: 'Expansion & Renewals',
                            badge: '120%+ NRR',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'White-Space Account Expansion',
                                    description: 'Maps unpenetrated business units and seat thresholds to drive 20-30% expansion revenue.',
                                    path: '/ai-native-sales/customer-growth',
                                    badge: '+20-30% NRR',
                                    icon: TrendingUp,
                                    tags: ['Land & Expand', 'License Pacing']
                                },
                                {
                                    title: 'Automated Renewal Execution',
                                    description: 'Commercial term optimization converting annual contracts into 2- and 3-year recurring commitments.',
                                    path: '/ai-native-sales/customer-growth',
                                    badge: '95%+ Renewals',
                                    icon: CheckCircle2,
                                    tags: ['Multi-Year Terms', 'Escalators']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 4. GROWTH & ACCELERATION SCIENCE
        {
            id: 'growth-acceleration-science',
            name: 'Growth Science',
            shortName: 'Growth Science',
            path: '/growth-science',
            icon: TrendingUp,
            badge: 'Scientific Revenue OS',
            summary: 'Five empirical pillars of revenue physics, forensic friction diagnostics, autonomous AI engines, proprietary models, and executive telemetry.',
            categories: [
                // SUB-MENU 1: Revenue Physics
                {
                    id: 'revenue-physics',
                    title: 'Revenue Physics',
                    desc: 'Revenue mechanics, market dynamics, PLG triggers, and unit economics.',
                    path: '/growth-science/revenue-physics',
                    badge: '',
                    icon: Activity,
                    columns: [
                        {
                            header: 'Core Economics',
                            badge: '',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'Customer Lifetime Value Mechanics',
                                    description: 'Map cohort expansion trajectories and isolate high-compounding accounts from resource drains.',
                                    path: '/growth-science/revenue-physics',
                                    badge: '25-40% Lift',
                                    icon: Activity,
                                    tags: ['LTV:CAC', 'Cohort Dynamics']
                                },
                                {
                                    title: 'Market & White-Space Dynamics',
                                    description: 'Dissect TAM into unit-economic micro-segments and concentrate in defensible profit pools.',
                                    path: '/growth-science/revenue-physics',
                                    badge: '15-25% Margin',
                                    icon: Globe,
                                    tags: ['Whitespace', 'Profit Pools']
                                }
                            ]
                        },
                        {
                            header: 'Conversion & Economics',
                            badge: '',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Product-Led Growth Triggers',
                                    description: 'Identify behavioral tipping points that predict paid expansion and wire automated triggers.',
                                    path: '/growth-science/revenue-physics',
                                    badge: '30-50% Convert',
                                    icon: Sparkles,
                                    tags: ['PLG Triggers', 'Monetization']
                                },
                                {
                                    title: 'Unit Economic Fundamentals',
                                    description: 'Audit true cost-to-serve at customer and SKU level to eliminate hidden margin erosion.',
                                    path: '/growth-science/revenue-physics',
                                    badge: '10-20 pts Margin',
                                    icon: Scale,
                                    tags: ['Cost-to-Serve', 'Gross Margin']
                                }
                            ]
                        }
                    ]
                },

                // SUB-MENU 2: Friction Diagnostics
                {
                    id: 'friction-diagnostics',
                    title: 'Friction Diagnostics',
                    desc: 'Identifies where growth stalls — pipeline leakage, margin erosion, operational silos, and organizational resistance.',
                    path: '/growth-science/friction-diagnostics',
                    badge: 'Pillar 02',
                    icon: Radar,
                    columns: [
                        {
                            header: 'Commercial Breakdowns',
                            badge: 'Stress 1 & 2',
                            icon: Radar,
                            cards: [
                                {
                                    title: 'Pipeline Leakage & Stall Points',
                                    description: 'Pinpoint stage-by-stage deal drops between discovery, proposal, and procurement.',
                                    path: '/growth-science/friction-diagnostics',
                                    badge: '40-60% Cut',
                                    icon: Radar,
                                    tags: ['Leakage Map', 'Stage Velocity']
                                },
                                {
                                    title: 'Margin Erosion & Pricing Friction',
                                    description: 'Install discount governance and buyer-evidenced price points to halt discount creep.',
                                    path: '/growth-science/friction-diagnostics',
                                    badge: '5-15 pts Recovery',
                                    icon: DollarSign,
                                    tags: ['Discount Limits', 'Pricing Defense']
                                }
                            ]
                        },
                        {
                            header: 'Operational Bottlenecks',
                            badge: 'Stress 3 & 4',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Operational & Tech-Stack Silos',
                                    description: 'Eliminate tool stack fragmentation and reduce rep administrative overhead.',
                                    path: '/growth-science/friction-diagnostics',
                                    badge: '60% Admin Cut',
                                    icon: Layers,
                                    tags: ['Stack Unification', 'Active Selling']
                                },
                                {
                                    title: 'Organizational & Change Resistance',
                                    description: 'Incentive alignment and structured change leadership to ensure new GTM motions stick.',
                                    path: '/growth-science/friction-diagnostics',
                                    badge: '80-90% Adoption',
                                    icon: Users,
                                    tags: ['Change Rigor', 'Enablement']
                                }
                            ]
                        }
                    ]
                },

                // SUB-MENU 3: AI Acceleration Engines
                {
                    id: 'ai-engines',
                    title: 'AI Acceleration Engines',
                    desc: 'Autonomous systems that accelerate every stage — agent deployment, predictive retention, ecosystem orchestration, algorithmic pricing.',
                    path: '/growth-science/ai-engines',
                    badge: 'Pillar 03',
                    icon: Cpu,
                    columns: [
                        {
                            header: 'Autonomous Execution',
                            badge: 'Engines 1 & 2',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'Autonomous Agent Deployment',
                                    description: 'Deploy 24/7 AI agent swarms across research, outreach, qualification, and retention.',
                                    path: '/growth-science/ai-engines',
                                    badge: '60+ hrs Reclaimed',
                                    icon: Bot,
                                    tags: ['SDR Swarm', 'Zero Churn']
                                },
                                {
                                    title: 'Predictive Expansion & Retention',
                                    description: 'Behavioral signals identify churn risk and expansion triggers 60 days in advance.',
                                    path: '/growth-science/ai-engines',
                                    badge: '85-90% Precision',
                                    icon: Activity,
                                    tags: ['Churn Radar', '124% NRR']
                                }
                            ]
                        },
                        {
                            header: 'Ecosystem & Pricing',
                            badge: 'Engines 3 & 4',
                            icon: Network,
                            cards: [
                                {
                                    title: 'Ecosystem & Channel Orchestration',
                                    description: 'Score alliances by attributed revenue and automate joint pipeline routing.',
                                    path: '/growth-science/ai-engines',
                                    badge: 'Attributed Pipeline',
                                    icon: Network,
                                    tags: ['Co-Sell Math', 'Partner ROI']
                                },
                                {
                                    title: 'Algorithmic Pricing & Packaging',
                                    description: 'Conjoint willingness-to-pay models and dynamic contract tiering optimization.',
                                    path: '/growth-science/ai-engines',
                                    badge: '10-20% Realization',
                                    icon: Sparkles,
                                    tags: ['Dynamic Pricing', 'Value Packaging']
                                }
                            ]
                        }
                    ]
                },

                // SUB-MENU 4: Proprietary Growth Models
                {
                    id: 'growth-models',
                    title: 'Proprietary Growth Models',
                    desc: 'Battle-tested frameworks that convert diagnosis to action — Revenue Velocity, Profit Pool Optimization, Demand Flywheel, AI-Native Transformation.',
                    path: '/growth-science/growth-models',
                    badge: 'Pillar 04',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Velocity & Margins',
                            badge: 'Models 1 & 2',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Revenue Velocity Model',
                                    description: 'Balance opportunities, win rates, ACV, and cycle times to eliminate growth plateaus.',
                                    path: '/growth-science/growth-models',
                                    badge: '30-50% Velocity',
                                    icon: TrendingUp,
                                    tags: ['Velocity Math', 'Constraint Isolation']
                                },
                                {
                                    title: 'Profit Pool Optimization Model',
                                    description: 'Map contribution margins across accounts to reallocate capital into highest profit pools.',
                                    path: '/growth-science/growth-models',
                                    badge: '15-25% Margin',
                                    icon: Target,
                                    tags: ['Profit Pools', 'High-Yield Focus']
                                }
                            ]
                        },
                        {
                            header: 'Flywheels & Operating OS',
                            badge: 'Models 3 & 4',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'Demand-to-Revenue Flywheel',
                                    description: 'Self-compounding demand engine leveraging referrals, brand authority, and network loops.',
                                    path: '/growth-science/growth-models',
                                    badge: '40-60% CAC Cut',
                                    icon: RefreshCw,
                                    tags: ['Compounding Demand', 'Organic ARR']
                                },
                                {
                                    title: 'AI-Native Transformation Model',
                                    description: 'Fundamental operating redesign around autonomous agents and telemetry for 3-5X productivity.',
                                    path: '/growth-science/growth-models',
                                    badge: '3-5X Productivity',
                                    icon: Cpu,
                                    tags: ['Revenue OS', 'Autonomous Scale']
                                }
                            ]
                        }
                    ]
                },

                // SUB-MENU 5: Executive Telemetry
                {
                    id: 'executive-telemetry',
                    title: 'Executive Telemetry',
                    desc: 'Real-time visibility for the C-suite — predictive forecasting, cohort analytics, productivity metrics, growth scorecards.',
                    path: '/growth-science/executive-telemetry',
                    badge: 'Pillar 05',
                    icon: LineChart,
                    columns: [
                        {
                            header: 'Predictive Intelligence',
                            badge: 'Telemetry 1 & 2',
                            icon: LineChart,
                            cards: [
                                {
                                    title: 'Predictive Revenue Forecasting',
                                    description: 'Stochastic machine learning models deliver forecast accuracy within <5% variance.',
                                    path: '/growth-science/executive-telemetry',
                                    badge: '<5% Variance',
                                    icon: LineChart,
                                    tags: ['Stochastic Forecast', 'Zero Hope']
                                },
                                {
                                    title: 'Cohort & Retention Analytics',
                                    description: 'Longitudinal cohort tracking and retention decay curves to optimize account lifetime value.',
                                    path: '/growth-science/executive-telemetry',
                                    badge: '20-30% NRR Lift',
                                    icon: Activity,
                                    tags: ['Cohort Curves', 'NRR Telemetry']
                                }
                            ]
                        },
                        {
                            header: 'Bench Productivity & Scorecards',
                            badge: 'Telemetry 3 & 4',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: 'Sales Productivity Metrics',
                                    description: 'Replicate the behavioral patterns of top commercial performers across the entire team.',
                                    path: '/growth-science/executive-telemetry',
                                    badge: '25-40% Rep Lift',
                                    icon: Users,
                                    tags: ['Behavioral Modeling', 'Quota Lift']
                                },
                                {
                                    title: 'C-Suite Growth Scorecards',
                                    description: 'Real-time executive cockpit unifying ARR velocity, margin realization, and friction radar.',
                                    path: '/growth-science/executive-telemetry',
                                    badge: 'Boardroom Ready',
                                    icon: ShieldCheck,
                                    tags: ['Executive Cockpit', 'Fast Decisions']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 5. GLOBAL BUSINESS ACCELERATION
        {
            id: 'global-business-accelerations',
            name: 'Global Scaling',
            shortName: 'Global Scaling',
            path: '/global-acceleration',
            icon: Globe,
            badge: 'Cross-Border Scale',
            summary: 'Deterministic international revenue engineering: autonomous market validation, multi-language AI SDR agents, and global RevOps.',
            categories: [
                {
                    id: 'market-intelligence',
                    title: 'Market Intelligence',
                    desc: 'Validate country opportunity, TAM/SAM/SOM sizing, and regulatory burden before capital commitment',
                    path: '/global-acceleration/market-intelligence',
                    badge: 'Pillar 01',
                    icon: Globe,
                    columns: [
                        {
                            header: 'Opportunity & Sizing',
                            badge: 'Validation',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'Country Opportunity Analysis',
                                    description: 'Unit-economic validation ranking markets by contribution margin over GDP headlines.',
                                    path: '/global-acceleration/market-intelligence',
                                    badge: 'Unit Economics',
                                    icon: Globe,
                                    tags: ['ROI Ranking', 'Contribution Margin']
                                },
                                {
                                    title: 'TAM / SAM / SOM Assessment',
                                    description: 'Country-specific addressable market modeling with realistic penetration rates.',
                                    path: '/global-acceleration/market-intelligence',
                                    badge: 'Territory Sizing',
                                    icon: Target,
                                    tags: ['Territory TAM', '<15% Variance']
                                }
                            ]
                        },
                        {
                            header: 'Incumbents & Compliance',
                            badge: 'Dissection',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Competitive Mapping',
                                    description: 'Map domestic regional rivals and deploy tailored counter-strategies.',
                                    path: '/global-acceleration/market-intelligence',
                                    badge: 'Incumbents',
                                    icon: ShieldCheck,
                                    tags: ['Rival Dissection', 'Win Rates']
                                },
                                {
                                    title: 'Regulatory Intelligence',
                                    description: 'Pre-launch data residency and sovereign compliance mapping with real-time monitoring.',
                                    path: '/global-acceleration/market-intelligence',
                                    badge: 'Sovereignty',
                                    icon: Landmark,
                                    tags: ['GDPR / LGPD', 'Zero Fines']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cross-border-strategy',
                    title: 'Cross-Border Revenue Strategy',
                    desc: 'Engineer entry models, deep localization, dynamic pricing, and expansion planning',
                    path: '/global-acceleration/cross-border-strategy',
                    badge: 'Pillar 02',
                    icon: Compass,
                    columns: [
                        {
                            header: 'Entry Architecture',
                            badge: 'Motion Design',
                            icon: Compass,
                            cards: [
                                {
                                    title: 'Market Entry Models',
                                    description: 'Tailored direct, partner-led, hybrid, or digital-first go-to-market motions.',
                                    path: '/global-acceleration/cross-border-strategy',
                                    badge: 'Motion Architecture',
                                    icon: Compass,
                                    tags: ['Entry Models', 'Time-to-Revenue']
                                },
                                {
                                    title: 'Localization Strategy',
                                    description: 'Deep cultural value alignment beyond surface-level language translation.',
                                    path: '/global-acceleration/cross-border-strategy',
                                    badge: 'Cultural Fit',
                                    icon: Sparkles,
                                    tags: ['3-5X CVR Lift', 'Buyer Alignment']
                                }
                            ]
                        },
                        {
                            header: 'Pricing & Expansion',
                            badge: 'Revenue Scaling',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Global Pricing',
                                    description: 'Purchasing-power adjusted pricing tiers and dynamic currency hedging.',
                                    path: '/global-acceleration/cross-border-strategy',
                                    badge: 'PPP & Hedging',
                                    icon: DollarSign,
                                    tags: ['Margin Defense', 'Currency Tiers']
                                },
                                {
                                    title: 'Revenue Expansion Planning',
                                    description: 'Market-specific upsell and cross-border account expansion motions.',
                                    path: '/global-acceleration/cross-border-strategy',
                                    badge: 'NRR Lift',
                                    icon: TrendingUp,
                                    tags: ['+20-30% NRR', 'Land & Expand']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'partner-ecosystems',
                    title: 'Global Partner Ecosystems',
                    desc: 'Build high-yield distributor networks, co-selling programs, and strategic alliances',
                    path: '/global-acceleration/partner-ecosystems',
                    badge: 'Pillar 03',
                    icon: Network,
                    columns: [
                        {
                            header: 'Distribution & Sourcing',
                            badge: 'Channel Scale',
                            icon: Network,
                            cards: [
                                {
                                    title: 'Distributor Networks',
                                    description: 'Score distributors by measured contribution and focus on high-yield partners.',
                                    path: '/global-acceleration/partner-ecosystems',
                                    badge: 'Scored Networks',
                                    icon: Network,
                                    tags: ['3-5X Partner Lift', 'Scorecards']
                                },
                                {
                                    title: 'Partner Recruitment',
                                    description: 'Strategic gap mapping and recruitment of top-tier regional distributors.',
                                    path: '/global-acceleration/partner-ecosystems',
                                    badge: 'Strategic Sourcing',
                                    icon: Target,
                                    tags: ['Regional Recruitment', 'Ecosystem Gaps']
                                }
                            ]
                        },
                        {
                            header: 'Co-Sell & Alliances',
                            badge: 'Alliances',
                            icon: Handshake,
                            cards: [
                                {
                                    title: 'Co-Selling Programs',
                                    description: 'Structured co-selling with clear pipeline attribution and joint planning.',
                                    path: '/global-acceleration/partner-ecosystems',
                                    badge: 'Attribution',
                                    icon: Handshake,
                                    tags: ['4-6X Co-Sell ROI', 'Pipeline Attribution']
                                },
                                {
                                    title: 'Alliance Management',
                                    description: 'Score strategic hyperscaler alliances by verified closed revenue.',
                                    path: '/global-acceleration/partner-ecosystems',
                                    badge: 'Hyperscalers',
                                    icon: Building2,
                                    tags: ['AWS / Azure', 'Measured Contribution']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'global-revops',
                    title: 'Global Revenue Operations',
                    desc: 'Proactive compliance management, global sales alignment, and multi-region orchestration',
                    path: '/global-acceleration/global-revops',
                    badge: 'Pillar 04',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Governance & Alignment',
                            badge: 'Synchronization',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Compliance Management',
                                    description: 'Proactive cross-border compliance frameworks ensuring zero post-launch fines.',
                                    path: '/global-acceleration/global-revops',
                                    badge: 'Zero Fines',
                                    icon: ShieldCheck,
                                    tags: ['Proactive Compliance', 'Data Sovereignty']
                                },
                                {
                                    title: 'Global Sales Alignment',
                                    description: 'Unified sales processes and cross-border account collaboration.',
                                    path: '/global-acceleration/global-revops',
                                    badge: 'Account Sync',
                                    icon: Users,
                                    tags: ['Multinational Accounts', '+30-50% Revenue']
                                }
                            ]
                        },
                        {
                            header: 'Attribution & Stack',
                            badge: 'Operations',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Revenue Attribution',
                                    description: 'Track revenue by region, partner, motion, and segment with 95%+ accuracy.',
                                    path: '/global-acceleration/global-revops',
                                    badge: '95%+ Accuracy',
                                    icon: BarChart3,
                                    tags: ['ROI Transparency', 'Attribution Matrix']
                                },
                                {
                                    title: 'Multi-Region Operations',
                                    description: 'Consolidate redundant tech stacks and unify regional operating processes.',
                                    path: '/global-acceleration/global-revops',
                                    badge: 'Consolidation',
                                    icon: Layers,
                                    tags: ['40-60% Cut', 'Stack Consolidation']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'ai-global-scaling',
                    title: 'AI For Global Scaling',
                    desc: 'Deploy multi-language SDR swarms, market monitoring agents, and autonomous expansion',
                    path: '/global-acceleration/ai-global-scaling',
                    badge: 'Pillar 05 · Key Differentiator',
                    icon: Bot,
                    columns: [
                        {
                            header: 'Autonomous Agents',
                            badge: '24/7 Swarms',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'Multi-Language AI SDRs',
                                    description: 'Prospect in 15+ native languages across 20+ timezones 24/7 at 1/10th human cost.',
                                    path: '/global-acceleration/ai-global-scaling',
                                    badge: '15+ Languages',
                                    icon: Bot,
                                    tags: ['Follow-the-Sun', '1/10th Cost']
                                },
                                {
                                    title: 'Market Intelligence Agents',
                                    description: 'Real-time detection of competitor moves and demand surges in <7 days.',
                                    path: '/global-acceleration/ai-global-scaling',
                                    badge: 'Real-Time',
                                    icon: Activity,
                                    tags: ['<7 Days Detection', 'Demand Signals']
                                }
                            ]
                        },
                        {
                            header: 'Compliance & Workflows',
                            badge: 'Autonomous Scale',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'Regulatory Intelligence Agents',
                                    description: '90+ days advance warning of regulatory changes with automated impact assessments.',
                                    path: '/global-acceleration/ai-global-scaling',
                                    badge: '90-Day Early Warning',
                                    icon: ShieldCheck,
                                    tags: ['Statutory Monitoring', 'Advance Alerts']
                                },
                                {
                                    title: 'Autonomous Expansion Workflows',
                                    description: 'Automated opportunity identification across global enterprise account usage.',
                                    path: '/global-acceleration/ai-global-scaling',
                                    badge: 'NRR Automation',
                                    icon: Zap,
                                    tags: ['+25-40% Expansion', 'Telemetry Triggers']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'expansion-office',
                    title: 'Executive Expansion Office',
                    desc: 'Readiness audits, sequenced growth roadmaps, market strategies, and C-suite scorecards',
                    path: '/global-acceleration/expansion-office',
                    badge: 'Pillar 06',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Readiness & Roadmaps',
                            badge: 'Oversight',
                            icon: Building2,
                            cards: [
                                {
                                    title: 'Expansion Readiness Audit',
                                    description: 'Audit capabilities, resources, and infrastructure before deploying capital.',
                                    path: '/global-acceleration/expansion-office',
                                    badge: 'Capability Audit',
                                    icon: ShieldCheck,
                                    tags: ['80-90% Risk Cut', 'Pre-Flight Audit']
                                },
                                {
                                    title: 'International Growth Roadmap',
                                    description: 'Sequenced territory entry roadmap prioritizing markets by ROI probability.',
                                    path: '/global-acceleration/expansion-office',
                                    badge: 'Sequencing',
                                    icon: TrendingUp,
                                    tags: ['Phased Roadmaps', 'Validation Gates']
                                }
                            ]
                        },
                        {
                            header: 'Strategy & Scorecards',
                            badge: 'Boardroom',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: 'Market Expansion Strategy',
                                    description: 'Bespoke market-specific strategies validated with local enterprise research.',
                                    path: '/global-acceleration/expansion-office',
                                    badge: 'Market-Specific',
                                    icon: Compass,
                                    tags: ['2-3X Performance', 'Tailored GTM']
                                },
                                {
                                    title: 'Executive Scorecards',
                                    description: 'Real-time visibility into market performance, partner contribution, and roadmap progress.',
                                    path: '/global-acceleration/expansion-office',
                                    badge: 'Real-Time C-Suite',
                                    icon: BarChart3,
                                    tags: ['50-70% Decision Speed', 'Board Telemetry']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 6. CASE STUDIES
        {
            id: 'case-studies',
            name: 'Case Studies',
            shortName: 'Case Studies',
            path: '/case-studies',
            icon: ShieldCheck,
            badge: 'Verified Outcomes',
            summary: 'Verified boardroom revenue metrics, empirical ROI case studies, and enterprise customer transformation outcomes.',
            categories: [
                {
                    id: 'featured-transformations',
                    title: 'Featured Transformations',
                    desc: 'Curated flagship enterprise transformations showcasing multi-market expansion, autonomous pipeline growth, and forecast certainty.',
                    path: '/case-studies/featured',
                    badge: 'Flagship Outcomes',
                    icon: Sparkles,
                    columns: [
                        {
                            header: 'Flagship Transformations',
                            badge: 'Curated',
                            icon: Sparkles,
                            cards: [
                                {
                                    title: 'Enterprise SaaS Pipeline Growth',
                                    description: 'From $180M to $420M enterprise pipeline with 14-day cycle compression.',
                                    path: '/case-studies/enterprise-saas-pipeline-growth',
                                    badge: 'Flagship Case Study',
                                    icon: TrendingUp,
                                    tags: ['+$240M Pipeline', '14-Day Compression']
                                },
                                {
                                    title: 'Global Manufacturing Expansion',
                                    description: 'Scaling industrial distributor networks across 4 global operating hubs to $400M revenue.',
                                    path: '/case-studies/global-manufacturing-expansion',
                                    badge: 'Flagship Case Study',
                                    icon: Factory,
                                    tags: ['+$400M Scale', '-47% Cycle Time']
                                }
                            ]
                        },
                        {
                            header: 'Mission-Critical Deployments',
                            badge: 'Boardroom Proof',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Healthcare Forecast Accuracy',
                                    description: 'Achieving 98% quarterly forecast precision across 320 hospital enterprise buying committees.',
                                    path: '/case-studies/healthcare-forecast-accuracy',
                                    badge: 'Flagship Case Study',
                                    icon: HeartPulse,
                                    tags: ['98% Precision', '<5% Variance']
                                },
                                {
                                    title: 'All Curated Transformations',
                                    description: 'Editorial deep-dives into deployment timelines, client baseline telemetry, and executive outcomes.',
                                    path: '/case-studies/featured',
                                    badge: 'Curated Showcase',
                                    icon: Award,
                                    tags: ['3 Showcases', 'Telemetry Dossiers']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'by-business-challenge',
                    title: 'By Business Challenge',
                    desc: 'Filter verified enterprise case studies by specific strategic friction points and commercial challenges.',
                    path: '/case-studies#challenge',
                    badge: 'Strategic Challenges',
                    icon: Target,
                    columns: [
                        {
                            header: 'Pipeline & Growth Scale',
                            badge: 'Top-Line',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'Pipeline Acceleration: SaaS',
                                    description: 'Systematic enterprise pipeline expansion through autonomous multi-threading.',
                                    path: '/case-studies/enterprise-saas-pipeline-growth',
                                    badge: 'Pipeline Growth',
                                    icon: Target,
                                    tags: ['Demand Gen', 'TAM Penetration']
                                },
                                {
                                    title: 'Global Expansion: Manufacturing',
                                    description: 'Rapid international market entry and distributor network orchestration.',
                                    path: '/case-studies/global-manufacturing-expansion',
                                    badge: 'Market Expansion',
                                    icon: Globe,
                                    tags: ['Cross-Border', 'Distributor Mesh']
                                },
                                {
                                    title: 'Customer Expansion: Enterprise Tech',
                                    description: 'Transforming account retention into a 140% Net Retention Rate engine.',
                                    path: '/case-studies/technology-customer-expansion',
                                    badge: 'Customer Retention',
                                    icon: Users,
                                    tags: ['140% NRR', '+25% Expansion ARR']
                                }
                            ]
                        },
                        {
                            header: 'Margin & Operations Control',
                            badge: 'EBITDA & Certainty',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Margin Recovery: Manufacturing',
                                    description: '15 points gross margin recovery via CPQ floors and inflation indexing.',
                                    path: '/case-studies/manufacturing-margin-improvement',
                                    badge: 'Margin Improvement',
                                    icon: Percent,
                                    tags: ['+15 Pts Margin', '$54.6M Profit']
                                },
                                {
                                    title: 'Forecast Accuracy: Healthcare',
                                    description: 'Eliminating revenue volatility in high-compliance hospital sales.',
                                    path: '/case-studies/healthcare-forecast-accuracy',
                                    badge: 'Forecast Accuracy',
                                    icon: LineChart,
                                    tags: ['98% Precision', 'Board Certainty']
                                },
                                {
                                    title: 'RevOps Overhaul: SaaS Scaleup',
                                    description: 'Reclaiming 40+ hours per rep monthly and doubling quota velocity.',
                                    path: '/case-studies/saas-revenue-operations',
                                    badge: 'Revenue Operations',
                                    icon: Sliders,
                                    tags: ['80% Selling Time', 'Instant Comp']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'by-offering',
                    title: 'By Offering',
                    desc: 'Explore proven client outcomes mapped to ProfitMachines core architectural offerings.',
                    path: '/case-studies#offering',
                    badge: 'Offering Blueprints',
                    icon: Compass,
                    columns: [
                        {
                            header: 'Discovery & Demand Engines',
                            badge: 'Front-End',
                            icon: Compass,
                            cards: [
                                {
                                    title: 'Profit Pool Discovery',
                                    description: 'Uncovering uncaptured pricing elasticity and SKU profit pools.',
                                    path: '/case-studies/manufacturing-margin-improvement',
                                    badge: 'Discovery Offering',
                                    icon: Target,
                                    tags: ['Profit Pools', 'BOM Indexing']
                                },
                                {
                                    title: 'Demand Engineering',
                                    description: 'Autonomous multi-threaded pipeline generation for enterprise sales.',
                                    path: '/case-studies/enterprise-saas-pipeline-growth',
                                    badge: 'Demand Offering',
                                    icon: Zap,
                                    tags: ['Autonomous Outbound', 'Intent Mesh']
                                },
                                {
                                    title: 'Growth Intelligence',
                                    description: 'Deep market diagnostics and territory prioritization telemetry.',
                                    path: '/case-studies/global-manufacturing-expansion',
                                    badge: 'Intelligence Offering',
                                    icon: BrainCircuit,
                                    tags: ['Market Intel', 'Tier-1 Partners']
                                }
                            ]
                        },
                        {
                            header: 'Execution & Governance Engines',
                            badge: 'Operational',
                            icon: Sliders,
                            cards: [
                                {
                                    title: 'Revenue Operations',
                                    description: 'Autonomous CRM data hygiene and real-time compensation engines.',
                                    path: '/case-studies/saas-revenue-operations',
                                    badge: 'RevOps Offering',
                                    icon: Sliders,
                                    tags: ['Autonomous CRM', 'Instant Comp']
                                },
                                {
                                    title: 'GTM Transformation',
                                    description: 'Consolidating acquired business units under a unified commercial mesh.',
                                    path: '/case-studies/healthcare-gtm-transformation',
                                    badge: 'GTM Offering',
                                    icon: GitMerge,
                                    tags: ['Account Unification', 'Umbrella MSAs']
                                },
                                {
                                    title: 'AI Trust & Governance',
                                    description: 'Institutional-grade security and governance for PE portfolio scale.',
                                    path: '/case-studies/financial-services-ai-transformation',
                                    badge: 'Trust & Governance',
                                    icon: ShieldCheck,
                                    tags: ['Algorithmic Compliance', '5X Deployment']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'by-industry',
                    title: 'By Industry',
                    desc: 'Deep sector blueprints addressing industry-specific regulatory constraints, sales cycles, and buyer committees.',
                    path: '/case-studies#industry',
                    badge: 'Sector Specialization',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Software, Tech & Capital',
                            badge: 'Digital & Financial',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'Enterprise SaaS & Cloud',
                                    description: 'Pipeline acceleration and RevOps automation for B2B cloud platforms.',
                                    path: '/case-studies/enterprise-saas-pipeline-growth',
                                    badge: 'SaaS Sector',
                                    icon: Cpu,
                                    tags: ['Enterprise ARR', 'Multi-Threading']
                                },
                                {
                                    title: 'Enterprise Technology & Platforms',
                                    description: 'Engineering net revenue retention and expansion ARR across key accounts.',
                                    path: '/case-studies/technology-customer-expansion',
                                    badge: 'Tech Sector',
                                    icon: Server,
                                    tags: ['140% NRR', 'CS Telemetry']
                                },
                                {
                                    title: 'Financial Services & Private Equity',
                                    description: 'AI value creation and multi-entity EBITDA acceleration across portfolio assets.',
                                    path: '/case-studies/financial-services-ai-transformation',
                                    badge: 'FinServ & PE',
                                    icon: Landmark,
                                    tags: ['Portfolio Scale', '2.3X Valuation']
                                }
                            ]
                        },
                        {
                            header: 'Industrial & Healthcare',
                            badge: 'Regulated & Physical',
                            icon: Factory,
                            cards: [
                                {
                                    title: 'Specialized Manufacturing',
                                    description: 'Global expansion and distributor network scale across 4 operating hubs.',
                                    path: '/case-studies/global-manufacturing-expansion',
                                    badge: 'Manufacturing',
                                    icon: Factory,
                                    tags: ['4 Global Hubs', '$400M Scale']
                                },
                                {
                                    title: 'Industrial Margin Optimization',
                                    description: 'Eliminating sales discount leakage and recovering 15 points gross margin.',
                                    path: '/case-studies/manufacturing-margin-improvement',
                                    badge: 'Pricing & Margin',
                                    icon: Percent,
                                    tags: ['+15 Pts Recovery', 'Hard CPQ Floors']
                                },
                                {
                                    title: 'Healthcare Systems & MedTech',
                                    description: 'Navigating hospital buying committees with 98% forecast precision.',
                                    path: '/case-studies/healthcare-forecast-accuracy',
                                    badge: 'Healthcare Sector',
                                    icon: HeartPulse,
                                    tags: ['Zero-PHI HIPAA', 'Hospital Networks']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'by-company-stage',
                    title: 'By Company Stage',
                    desc: 'Transformations tailored to capitalization profile, maturity scale, and governance expectations.',
                    path: '/case-studies#stage',
                    badge: 'Stage Adaptation',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Venture & Growth Scale',
                            badge: 'Venture-Backed',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'Series B SaaS Startups ($15M ARR)',
                                    description: 'Autonomous RevOps control plane doubling rep selling capacity.',
                                    path: '/case-studies/saas-revenue-operations',
                                    badge: 'Startup Scale',
                                    icon: Sliders,
                                    tags: ['Admin Relief', 'Forecast Engine']
                                },
                                {
                                    title: 'Growth-Stage Scaleups ($50M+ ARR)',
                                    description: 'Engineering predictable enterprise pipeline and multi-channel scale.',
                                    path: '/case-studies/enterprise-saas-pipeline-growth',
                                    badge: 'Growth Stage',
                                    icon: TrendingUp,
                                    tags: ['Enterprise Playbook', 'Market Leadership']
                                },
                                {
                                    title: 'Mid-Market Champions ($350M Rev)',
                                    description: 'Dynamic pricing power and margin recovery across complex portfolios.',
                                    path: '/case-studies/manufacturing-margin-improvement',
                                    badge: 'Mid-Market',
                                    icon: Factory,
                                    tags: ['Margin Protection', 'EBITDA Lift']
                                }
                            ]
                        },
                        {
                            header: 'Enterprise & Sponsor-Backed',
                            badge: 'Institutional',
                            icon: Landmark,
                            cards: [
                                {
                                    title: 'Large Global Enterprises ($900M Rev)',
                                    description: 'Unifying acquired divisions under a synchronized commercial architecture.',
                                    path: '/case-studies/healthcare-gtm-transformation',
                                    badge: 'Enterprise Conglomerate',
                                    icon: Building2,
                                    tags: ['M&A Unification', 'Multi-BU Scale']
                                },
                                {
                                    title: 'PE Sponsor Portfolio Companies',
                                    description: 'Rapid commercial modernization and enterprise valuation expansion.',
                                    path: '/case-studies/financial-services-ai-transformation',
                                    badge: 'Private Equity',
                                    icon: Award,
                                    tags: ['100-Day Acceleration', 'Exit Multiple']
                                },
                                {
                                    title: 'Explore All Stages & Metrics',
                                    description: 'Access the complete transformation matrix across all company tiers.',
                                    path: '/case-studies',
                                    badge: 'Transformation Wall',
                                    icon: ShieldCheck,
                                    tags: ['Interactive Matrix', '8 Case Studies']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'ai-native-transformations',
                    title: 'AI-Native Transformations',
                    desc: 'Autonomous agent mesh deployments delivering human-in-the-loop sales execution, deal intelligence, and real-time ROI.',
                    path: '/case-studies/ai-native',
                    badge: 'Next-Gen Mesh',
                    icon: BrainCircuit,
                    columns: [
                        {
                            header: 'Autonomous Agent Fleet',
                            badge: 'Agent Swarms',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'Autonomous Inbound & Outbound SDR',
                                    description: '24/7 hyper-personalized multi-threaded enterprise prospecting.',
                                    path: '/case-studies/ai-native#sdr-fleet',
                                    badge: 'SDR Agent',
                                    icon: Bot,
                                    tags: ['24/7 Outbound', 'Zero Hallucination']
                                },
                                {
                                    title: 'Live Revenue Intelligence Mesh',
                                    description: 'Continuous buyer engagement telemetry and deal ghosting detection.',
                                    path: '/case-studies/ai-native#revenue-mesh',
                                    badge: 'Deal Intelligence',
                                    icon: Activity,
                                    tags: ['Buyer Sentiment', 'Ghosting Alarms']
                                },
                                {
                                    title: 'Autonomous RevOps Control Plane',
                                    description: 'Self-healing CRM records and algorithmic forecast precision.',
                                    path: '/case-studies/ai-native#revops-control',
                                    badge: 'RevOps Control',
                                    icon: Sliders,
                                    tags: ['Self-Healing Data', 'Predictive Quota']
                                }
                            ]
                        },
                        {
                            header: 'Telemetry & ROI Modeling',
                            badge: 'Interactive',
                            icon: LineChart,
                            cards: [
                                {
                                    title: 'Interactive AI Agent ROI Calculator',
                                    description: 'Simulate rep hours reclaimed, pipeline lift, and cost savings in real time.',
                                    path: '/case-studies/ai-native#calculator',
                                    badge: 'Live Simulator',
                                    icon: DollarSign,
                                    tags: ['SDR Sizing', 'Hours Reclaimed']
                                },
                                {
                                    title: '4-Agent Ecosystem Architecture',
                                    description: 'Inter-agent communication protocol with human-in-the-loop validation gates.',
                                    path: '/case-studies/ai-native',
                                    badge: 'Mesh Blueprint',
                                    icon: BrainCircuit,
                                    tags: ['Autonomous Routing', 'SOC2 Compliant']
                                },
                                {
                                    title: 'All AI-Native Transformations',
                                    description: 'Full gallery of autonomous agent workflows and live technical telemetry.',
                                    path: '/case-studies/ai-native',
                                    badge: 'Agent Gallery',
                                    icon: Sparkles,
                                    tags: ['Live Blueprints', 'Technical Demos']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 7. ABOUT US
        {
            id: 'about-us',
            name: 'Company',
            shortName: 'Company',
            path: '/about-us',
            icon: Users,
            badge: 'The Firm',
            summary: 'Executive leadership, operating philosophy, engineering research lab, global infrastructure, and partner alliances.',
            categories: [
                {
                    id: 'firm-leadership',
                    title: 'The Firm & Leadership',
                    desc: 'Our strategic thesis, veteran leadership, and engineering operating philosophy',
                    path: '/about-us',
                    badge: 'Firm Overview',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Leadership & Mission',
                            badge: 'Executive Team',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Executive Leadership & Advisors',
                                    description: 'Veteran enterprise revenue architects, former CROs, and AI systems researchers.',
                                    path: '/company',
                                    badge: 'Leadership',
                                    icon: Users,
                                    tags: ['Executive Team', 'Advisors']
                                },
                                {
                                    title: 'Our Mission & Philosophy',
                                    description: 'Eliminating guesswork from enterprise revenue generation through engineering precision.',
                                    path: '/company',
                                    badge: 'Philosophy',
                                    icon: Target,
                                    tags: ['Engineering-First', 'Dual-Track']
                                }
                            ]
                        },
                        {
                            header: 'Standards & Trust',
                            badge: 'Enterprise Trust',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Security & SOC2 Type II Trust',
                                    description: 'Zero-data-leakage architecture, HIPAA-ready, and end-to-end encrypted telemetry.',
                                    path: '/security',
                                    badge: 'Security',
                                    icon: ShieldCheck,
                                    tags: ['SOC2 Type II', 'Zero-PHI']
                                },
                                {
                                    title: 'Global Hubs & Footprint',
                                    description: 'Distributed operational hubs across North America, EMEA, and Asia-Pacific.',
                                    path: '/company',
                                    badge: 'Global Footprint',
                                    icon: Globe,
                                    tags: ['Global Reach', '24/7 Operations']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'alliances-careers',
                    title: 'Ecosystem & Careers',
                    desc: 'Join our team or integrate with the ProfitMachines autonomous revenue platform',
                    path: '/about-us',
                    badge: 'Ecosystem',
                    icon: Sparkles,
                    columns: [
                        {
                            header: 'Careers & Talent',
                            badge: 'Talent',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'Careers & Open Positions',
                                    description: 'Join our cadre of Forward Deployed Engineers and Revenue Architects.',
                                    path: '/career',
                                    badge: 'Careers',
                                    icon: Briefcase,
                                    tags: ['Forward Deployed', 'Remote']
                                },
                                {
                                    title: 'Strategic Partner Program',
                                    description: 'Co-sell and integrate with the ProfitMachines autonomous revenue platform.',
                                    path: '/partners',
                                    badge: 'Alliances',
                                    icon: Handshake,
                                    tags: ['Co-Sell', 'Ecosystem']
                                }
                            ]
                        },
                        {
                            header: 'Advisory & Consultation',
                            badge: 'Executive Scoping',
                            icon: Phone,
                            cards: [
                                {
                                    title: 'Schedule Scoping Consultation',
                                    description: 'Direct engagement with our senior partners and revenue architects.',
                                    path: '/book-consultation',
                                    badge: 'Consultation',
                                    icon: Phone,
                                    tags: ['Executive Scoping', 'NDA']
                                },
                                {
                                    title: 'Legal & Privacy Framework',
                                    description: 'Enterprise data protection, transparent terms, and regulatory adherence.',
                                    path: '/privacy',
                                    badge: 'Governance',
                                    icon: Lock,
                                    tags: ['GDPR', 'Compliance']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ], []);

    // Active menu item object
    const currentMenu = useMemo(() => {
        return mainMenus.find(m => m.id === activeMenuId) || null;
    }, [mainMenus, activeMenuId]);

    // Active category object within current menu
    const currentCategory = useMemo(() => {
        if (!currentMenu || currentMenu.categories.length === 0) return null;
        return currentMenu.categories.find(c => c.id === activeCategoryId) || currentMenu.categories[0];
    }, [currentMenu, activeCategoryId]);

    // Handle mouse enter for desktop navigation item
    const handleMenuMouseEnter = (menuId: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        const menu = mainMenus.find(m => m.id === menuId);
        if (!menu || !menu.categories || menu.categories.length === 0) {
            setActiveMenuId(null);
            return;
        }
        setActiveMenuId(menuId);
        setActiveCategoryId(menu.categories[0].id);
    };

    // Handle mouse leave with small grace period to prevent accidental closing
    const handleMenuMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveMenuId(null);
        }, 150);
    };

    // Close on route change or Escape key
    useEffect(() => {
        setActiveMenuId(null);
        setMobileOpen(false);
        setSearchOpen(false);
    }, [location.pathname, location.hash]);

    // Prevent background scrolling when mobile menu drawer is open
    useEffect(() => {
        if (mobileOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [mobileOpen]);

    // Keyboard handlers (Escape key closes drawer, mega-menu, search)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveMenuId(null);
                setSearchOpen(false);
                setMobileOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Toggle top-level menu in mobile accordion
    const toggleMobileMenu = (menuId: string) => {
        setMobileExpandedMenu(prev => {
            const next = prev === menuId ? null : menuId;
            if (next) {
                const targetMenu = mainMenus.find(m => m.id === next);
                if (targetMenu && targetMenu.categories.length > 0) {
                    setMobileExpandedCategories(catPrev => ({
                        ...catPrev,
                        [targetMenu.categories[0].id]: true
                    }));
                }
            }
            return next;
        });
    };

    // Toggle category inside menu in mobile accordion
    const toggleMobileCategory = (catId: string, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        setMobileExpandedCategories(prev => ({
            ...prev,
            [catId]: !prev[catId]
        }));
    };

    // Check if route matches main menu
    const isMenuActive = (menu: MainMenuItem) => {
        if (location.pathname === menu.path) return true;
        if (menu.id === 'offerings' && location.pathname.startsWith('/offerings')) return true;
        if (menu.id === 'industries' && location.pathname.startsWith('/industries')) return true;
        if (menu.path !== '/' && location.pathname.startsWith(menu.path)) return true;
        if (menu.id === 'ai-native-sales' && (location.pathname.startsWith('/ai-') || location.pathname.startsWith('/solutions'))) return true;
        if (menu.id === 'growth-acceleration-science' && (location.pathname.startsWith('/growth-') || location.pathname === '/revenue-acceleration')) return true;
        if (menu.id === 'global-business-accelerations' && (location.pathname === '/demand-pulse' || location.pathname.startsWith('/global-'))) return true;
        if (menu.id === 'case-studies' && (location.pathname === '/outcomes' || location.pathname === '/use-cases' || location.pathname === '/case-studies')) return true;
        if (menu.id === 'about-us' && (location.pathname === '/company' || location.pathname === '/about' || location.pathname === '/about-us')) return true;
        return false;
    };

    // Flatten all items for search
    const allSearchItems = useMemo(() => {
        const results: { title: string; desc: string; path: string; menu: string; category: string }[] = [];
        mainMenus.forEach(m => {
            m.categories.forEach(c => {
                c.columns.forEach(col => {
                    col.cards.forEach(card => {
                        results.push({
                            title: card.title,
                            desc: card.description,
                            path: card.path,
                            menu: m.name,
                            category: c.title
                        });
                    });
                });
            });
        });
        return results;
    }, [mainMenus]);

    const filteredSearchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase().trim();
        return allSearchItems.filter(item => 
            item.title.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            item.menu.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        ).slice(0, 10);
    }, [allSearchItems, searchQuery]);

    // Current spotlight item for the active mega-menu
    const activeSpotlight = (currentMenu && spotlightConfigs[currentMenu.id]) || spotlightConfigs['offerings'];

    return (
        <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 select-none">
            {/* ── TOP HORIZONTAL HEADER BAR (TEMPLATE A: THE MODERN ENTERPRISE) ── */}
            <header className="h-16 lg:h-[72px] bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-2xs px-3 sm:px-4 lg:px-4 xl:px-6 2xl:px-8 flex items-center justify-between transition-all relative z-50 max-w-[1920px] mx-auto w-full">
                {/* Left: Brand Logo */}
                <div className="flex items-center gap-2 xl:gap-3 shrink-0">
                    <Link to="/" className="flex items-center gap-2 group shrink-0">
                        <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-xs xl:text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform shrink-0">
                            PM
                        </div>
                        <div className="text-sm sm:text-base xl:text-lg 2xl:text-xl font-extrabold tracking-tight text-slate-900 font-heading whitespace-nowrap">
                            <span>Profit</span><span className="text-blue-600">Machines</span>
                        </div>
                    </Link>

                    <div className="hidden min-[1680px]:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 text-[10px] font-bold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span>Enterprise v2.4</span>
                    </div>
                </div>

                {/* Center: 7 Main Menus Horizontally (>= xl) */}
                <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 h-full whitespace-nowrap shrink-0">
                    {mainMenus.map((menu) => {
                        const isCurrentActive = isMenuActive(menu);
                        const isDropdownOpen = activeMenuId === menu.id;
                        const hasSubNav = menu.categories && menu.categories.length > 0;

                        return (
                            <div
                                key={menu.id}
                                className="relative h-full flex items-center shrink-0"
                                onMouseEnter={hasSubNav ? () => handleMenuMouseEnter(menu.id) : undefined}
                            >
                                <div
                                    className={`flex items-center rounded-xl text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-tight transition-all duration-150 whitespace-nowrap shrink-0 ${
                                        isDropdownOpen
                                            ? 'bg-blue-50 text-blue-600 shadow-2xs font-bold'
                                            : isCurrentActive
                                                ? 'text-blue-600 font-bold bg-blue-50/60'
                                                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                    }`}
                                >
                                    <Link
                                        to={menu.path}
                                        onClick={() => setActiveMenuId(null)}
                                        className={`px-2.5 xl:px-3 py-1.5 xl:py-2 flex items-center cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                                            !hasSubNav ? 'px-3.5 xl:px-4' : ''
                                        }`}
                                    >
                                        <span className="whitespace-nowrap shrink-0 select-none">{menu.shortName || menu.name}</span>
                                    </Link>
                                    {hasSubNav && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                if (activeMenuId === menu.id) {
                                                    setActiveMenuId(null);
                                                } else {
                                                    handleMenuMouseEnter(menu.id);
                                                }
                                            }}
                                            aria-label={`Toggle ${menu.name} dropdown`}
                                            className="pr-2 py-1.5 xl:py-2 pl-0 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors shrink-0"
                                        >
                                            <ChevronDown
                                                className={`w-3 h-3 transition-transform duration-200 opacity-60 shrink-0 ${
                                                    isDropdownOpen ? 'rotate-180 text-blue-600 opacity-100' : ''
                                                }`}
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                {/* Right: Actions */}
                <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0 ml-2">
                    {/* Search Trigger Button with Shortcut Pill */}
                    <button
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        className="h-10 px-2.5 sm:px-3 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 transition-all flex items-center gap-2 text-xs whitespace-nowrap shrink-0 shadow-2xs cursor-pointer"
                        aria-label="Search directory"
                    >
                        <Search className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="hidden sm:inline font-medium text-slate-400">Search...</span>
                        <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded">
                            ⌘K
                        </kbd>
                    </button>

                    {/* Book Strategic Consultation Button */}
                    <Link
                        to="/book-consultation"
                        className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white font-bold text-xs xl:text-sm px-3.5 xl:px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-px whitespace-nowrap shrink-0 min-h-[40px]"
                    >
                        <span className="whitespace-nowrap">Book Consultation</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </Link>

                    {/* Mobile Hamburger Button (< xl) */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors ml-0.5 sm:ml-1 shrink-0 cursor-pointer"
                        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-navigation-drawer"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* ── FLOATING MEGA-MENU DROPDOWN PANEL (UNIFIED COMPACT PROFITMACHINES DESIGN FOR ALL MENUS) ── */}
            {currentMenu && currentMenu.categories && currentMenu.categories.length > 0 && currentCategory && (() => {
                const activeConfig = menuPresentationConfigs[currentMenu.id] || menuPresentationConfigs['offerings'];
                const allLinks = currentCategory.columns ? currentCategory.columns.flatMap(col => col.cards) : [];

                return (
                    <div
                        className="hidden xl:block fixed left-0 right-0 top-16 lg:top-[72px] z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                        onMouseEnter={() => {
                            if (closeTimeoutRef.current) {
                                clearTimeout(closeTimeoutRef.current);
                                closeTimeoutRef.current = null;
                            }
                        }}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        {/* Backdrop click dismisser */}
                        <div
                            className="fixed inset-0 bg-slate-900/20 backdrop-blur-2xs -z-10"
                            onClick={() => setActiveMenuId(null)}
                        />

                        {/* Unified Compact Mega-Menu Container (ProfitMachines Slate/Blue Palette - ZERO EXCESS WHITESPACE) */}
                        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 pt-1">
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">
                                {/* Top row: Left Compact Sidebar + Right Content Panel (Balanced Height & Fully Filled) */}
                                <div className="flex flex-col lg:flex-row items-stretch">
                                    {/* ── LEFT SIDEBAR (COMPACT, BOTTOM ANCHORED LINK, ZERO DEAD SPACE) ── */}
                                    <aside className="w-full lg:w-[260px] xl:w-[275px] bg-slate-50/95 text-slate-900 p-3.5 sm:p-4 flex flex-col justify-between shrink-0 border-r border-slate-200/80">
                                        <div className="space-y-2">
                                            {/* Section Label */}
                                            <div>
                                                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600 block">
                                                    {activeConfig.sectionTag}
                                                </span>
                                                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading tracking-tight mt-0.5">
                                                    {currentMenu.name}
                                                </h2>
                                                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                                                    {currentMenu.summary}
                                                </p>
                                            </div>

                                            {/* Category List (Tight Vertical Rhythm) */}
                                            <nav className="space-y-1 pt-0.5">
                                                {currentMenu.categories.map((cat) => {
                                                    const isCatActive = currentCategory.id === cat.id;

                                                    return (
                                                        <div
                                                            key={cat.id}
                                                            onMouseEnter={() => setActiveCategoryId(cat.id)}
                                                            onClick={() => setActiveCategoryId(cat.id)}
                                                            className={`w-full group px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 flex items-center justify-between cursor-pointer border ${
                                                                isCatActive
                                                                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/25'
                                                                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/90 border-transparent'
                                                            }`}
                                                        >
                                                            <span className="truncate block text-xs font-bold tracking-tight">
                                                                {cat.title}
                                                            </span>
                                                            <ChevronRight
                                                                className={`w-3.5 h-3.5 transition-transform duration-150 shrink-0 ${
                                                                    isCatActive ? 'text-white translate-x-0.5' : 'text-slate-400 group-hover:text-blue-600'
                                                                }`}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </nav>
                                        </div>

                                        {/* Bottom Link - Anchored neatly at the baseline */}
                                        <div className="pt-2 border-t border-slate-200/70 mt-3">
                                            <Link
                                                to={currentMenu.path}
                                                onClick={() => setActiveMenuId(null)}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer"
                                            >
                                                <span>View All {currentMenu.name}</span>
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </aside>

                                    {/* ── RIGHT CONTENT PANEL (FLEX-1 AUTO-FILL, ZERO BOTTOM GAP) ── */}
                                    <main className="flex-1 bg-white p-3.5 sm:p-4 flex flex-col justify-between">
                                        {/* Top Section: Header + Cards Grid */}
                                        <div className="space-y-2.5 flex-1 flex flex-col">
                                            {/* Top Header Area */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-1.5 shrink-0">
                                                <div>
                                                    <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                                                        {activeConfig.capabilitiesLabel}
                                                    </span>
                                                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-heading tracking-tight">
                                                        {currentCategory.title}
                                                    </h3>
                                                </div>

                                                {/* Metadata Badges */}
                                                <div className="flex flex-wrap items-center gap-1.5">
                                                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold font-mono">
                                                        {allLinks.length} Items
                                                    </span>
                                                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200/60">
                                                        {activeConfig.outcomeBadge}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Main Content Grid: Cards fill space proportionally (flex-1) */}
                                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-2.5 flex-1 ${allLinks.length > 6 ? 'max-h-[240px] overflow-y-auto pr-1' : ''}`}>
                                                {allLinks.map((card, idx) => {
                                                    const CardIcon = card.icon || Target;

                                                    return (
                                                        <Link
                                                            key={idx}
                                                            to={card.path}
                                                            onClick={() => setActiveMenuId(null)}
                                                            className="group p-3 rounded-xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-xs transition-all duration-150 flex items-start gap-2.5 cursor-pointer h-full"
                                                        >
                                                            <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 text-blue-600 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5">
                                                                <CardIcon className="w-3.5 h-3.5" />
                                                            </div>
                                                            <div className="min-w-0 flex-1 flex flex-col justify-between h-full">
                                                                <div>
                                                                    <div className="flex items-center justify-between gap-1">
                                                                        <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                                                            {card.title}
                                                                        </span>
                                                                        {(card.badge || (card.tags && card.tags[0])) && (
                                                                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors shrink-0">
                                                                                {card.badge || card.tags[0]}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2 group-hover:text-slate-600">
                                                                        {card.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Bottom Summary Section (Anchored flush to bottom baseline, NO whitespace gap) */}
                                        <div className="mt-2.5 p-2.5 px-3 rounded-xl bg-blue-50/40 border border-blue-100/80 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs shrink-0">
                                            <div className="space-y-0.5 text-[11px] text-slate-600">
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                                    <span className="font-bold text-slate-800">Recommended For:</span>
                                                    {activeConfig.recommendedFor.map((item, iIdx) => (
                                                        <span key={iIdx} className="inline-flex items-center gap-1 font-medium text-slate-700">
                                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                                            <span>{item}</span>
                                                            {iIdx < activeConfig.recommendedFor.length - 1 && <span className="text-slate-300">•</span>}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                                    <span className="font-bold text-slate-800">Business Impact:</span>
                                                    {activeConfig.businessImpacts.map((imp, mIdx) => (
                                                        <span key={mIdx} className="inline-flex items-center gap-1 font-medium text-slate-700">
                                                            <CheckCircle2 className="w-3 h-3 text-blue-600" />
                                                            <span>{imp}</span>
                                                            {mIdx < activeConfig.businessImpacts.length - 1 && <span className="text-slate-300">•</span>}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <Link
                                                to={currentCategory.path || currentMenu.path}
                                                onClick={() => setActiveMenuId(null)}
                                                className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                                            >
                                                <span>{activeConfig.ctaText}</span>
                                                <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </main>
                                </div>

                                {/* Bottom Executive Consultation Banner (Blue Palette, Flush to Bottom with Zero Void) */}
                                <div className="px-4 py-2 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                                    <span className="font-semibold text-slate-700 text-xs">
                                        Want to understand how we would approach your business challenge?
                                    </span>
                                    <Link
                                        to="/book-consultation"
                                        onClick={() => setActiveMenuId(null)}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs transition-colors shadow-xs shrink-0 cursor-pointer"
                                    >
                                        <span>Schedule an Introductory Call</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}

            {/* ── SEARCH MODAL ── */}
            {searchOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
                    <div
                        className="fixed inset-0"
                        onClick={() => setSearchOpen(false)}
                    />
                    <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-10 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                            <Search className="w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search capabilities, models, industries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                            />
                            <button
                                onClick={() => setSearchOpen(false)}
                                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Search Results */}
                        <div className="pt-2 max-h-[360px] overflow-y-auto space-y-1">
                            {searchQuery.trim() === '' ? (
                                <div className="p-4 text-center text-xs text-slate-400">
                                    Type to search across all enterprise practices and capabilities.
                                </div>
                            ) : filteredSearchResults.length === 0 ? (
                                <div className="p-4 text-center text-xs text-slate-400">
                                    No results found matching "{searchQuery}".
                                </div>
                            ) : (
                                filteredSearchResults.map((res, idx) => (
                                    <Link
                                        key={idx}
                                        to={res.path}
                                        onClick={() => setSearchOpen(false)}
                                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 text-xs text-slate-700 group block"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                                        <div className="min-w-0">
                                            <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {res.title}
                                            </div>
                                            <div className="text-[11px] text-slate-500 line-clamp-1">{res.desc}</div>
                                            <div className="text-[11px] text-slate-400 mt-0.5">
                                                {res.menu} › {res.category}
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ── MOBILE SLIDE-OVER DRAWER (< xl) ── */}
            {mobileOpen && (
                <div
                    id="mobile-navigation-drawer"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Site Navigation"
                    className="xl:hidden fixed inset-0 z-50 flex justify-end"
                >
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
                        onClick={() => setMobileOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Drawer Panel */}
                    <div className="relative w-full sm:max-w-md md:max-w-lg h-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 overflow-hidden">
                        {/* Drawer Header */}
                        <div className="h-16 px-4 sm:px-5 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
                            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 group" aria-label="ProfitMachines Home">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
                                    PM
                                </div>
                                <span className="font-extrabold text-lg text-slate-900 font-heading">
                                    Profit<span className="text-blue-600">Machines</span>
                                </span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                className="w-11 h-11 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Close navigation menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Top Drawer Quick Action Bar */}
                        <div className="p-3 sm:p-4 border-b border-slate-100 bg-slate-50/60 shrink-0 space-y-2">
                            {/* Search Trigger */}
                            <button
                                type="button"
                                onClick={() => {
                                    setMobileOpen(false);
                                    setSearchOpen(true);
                                }}
                                className="w-full min-h-[44px] flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100/80 border border-slate-200/80 text-left text-xs text-slate-500 transition-colors shadow-2xs cursor-pointer"
                                aria-label="Search directory"
                            >
                                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                                <span className="truncate">Search capabilities, offerings, nodes...</span>
                            </button>

                            {/* Prominent CTA in Drawer */}
                            <Link
                                to="/book-consultation"
                                onClick={() => setMobileOpen(false)}
                                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm transition-all"
                            >
                                <span>Book Strategic Consultation</span>
                                <ArrowUpRight className="w-4 h-4 shrink-0" />
                            </Link>
                        </div>

                        {/* Drawer Accordion List */}
                        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5 overscroll-contain">
                            {mainMenus.map((menu) => {
                                const hasSubNav = menu.categories && menu.categories.length > 0;
                                const isExpanded = mobileExpandedMenu === menu.id;
                                const isCurrentActive = isMenuActive(menu);
                                const MenuIcon = menu.icon || Target;

                                if (!hasSubNav) {
                                    return (
                                        <Link
                                            key={menu.id}
                                            to={menu.path}
                                            onClick={() => setMobileOpen(false)}
                                            className={`rounded-xl border min-h-[44px] px-3.5 py-2.5 flex items-center justify-between gap-2.5 cursor-pointer select-none transition-all duration-150 ${
                                                isCurrentActive
                                                    ? 'border-blue-200 bg-blue-50/40 text-blue-600 font-bold'
                                                    : 'border-slate-200/80 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                                            }`}
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <MenuIcon className="w-4 h-4 text-blue-600 shrink-0" />
                                                <span className="text-xs sm:text-sm font-bold truncate block font-heading">
                                                    {menu.name}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                                        </Link>
                                    );
                                }

                                return (
                                    <div
                                        key={menu.id}
                                        className={`rounded-xl border transition-all duration-150 overflow-hidden ${
                                            isExpanded
                                                ? 'border-blue-200 bg-blue-50/10 shadow-2xs'
                                                : 'border-slate-200/80 bg-white hover:border-slate-300'
                                        }`}
                                    >
                                        {/* Top-Level Menu Bar (Accordion Trigger) */}
                                        <div
                                            onClick={() => toggleMobileMenu(menu.id)}
                                            className={`w-full min-h-[44px] px-3.5 py-2.5 flex items-center justify-between gap-2.5 cursor-pointer select-none transition-colors ${
                                                isExpanded
                                                    ? 'bg-blue-50/60 text-blue-700'
                                                    : isCurrentActive
                                                        ? 'bg-blue-50/30 text-blue-600 font-bold'
                                                        : 'text-slate-800 hover:bg-slate-50'
                                            }`}
                                            role="button"
                                            aria-expanded={isExpanded}
                                            aria-controls={`mobile-submenu-${menu.id}`}
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    toggleMobileMenu(menu.id);
                                                }
                                            }}
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <MenuIcon className={`w-4 h-4 shrink-0 ${isExpanded || isCurrentActive ? 'text-blue-600' : 'text-slate-500'}`} />
                                                <span className="text-xs sm:text-sm font-bold truncate block font-heading">
                                                    {menu.name}
                                                </span>
                                            </div>

                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                                                    isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                                                }`}
                                            />
                                        </div>

                                        {/* Submenu Accordion Panel */}
                                        {isExpanded && (
                                            <div
                                                id={`mobile-submenu-${menu.id}`}
                                                className="p-2.5 bg-white border-t border-blue-100/70 space-y-2"
                                            >
                                                {/* Menu Overview Link */}
                                                <div className="pb-2 border-b border-slate-100 px-1">
                                                    <Link
                                                        to={menu.path}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                                                    >
                                                        <span>All {menu.name} Overview</span>
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </Link>
                                                </div>

                                                {/* Categories List */}
                                                <div className="space-y-1.5">
                                                    {menu.categories.map((cat) => {
                                                        const isCatExpanded = !!mobileExpandedCategories[cat.id];
                                                        const allCatLinks = cat.columns.flatMap(col => col.cards);

                                                        return (
                                                            <div
                                                                key={cat.id}
                                                                className={`rounded-lg border transition-colors overflow-hidden ${
                                                                    isCatExpanded
                                                                        ? 'border-blue-200/80 bg-slate-50/30'
                                                                        : 'border-slate-100 bg-white hover:border-slate-200'
                                                                }`}
                                                            >
                                                                {/* Category Header Bar */}
                                                                <div
                                                                    onClick={(e) => toggleMobileCategory(cat.id, e)}
                                                                    className={`w-full min-h-[40px] px-3 py-2 flex items-center justify-between gap-2 cursor-pointer select-none transition-colors ${
                                                                        isCatExpanded
                                                                            ? 'bg-blue-50/50 text-blue-700 font-semibold'
                                                                            : 'text-slate-700 hover:bg-slate-50'
                                                                    }`}
                                                                    role="button"
                                                                    aria-expanded={isCatExpanded}
                                                                    aria-controls={`mobile-subcat-${cat.id}`}
                                                                    tabIndex={0}
                                                                    onKeyDown={(e) => {
                                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                                            e.preventDefault();
                                                                            toggleMobileCategory(cat.id);
                                                                        }
                                                                    }}
                                                                >
                                                                    <span className="text-xs font-semibold truncate leading-tight font-heading">
                                                                        {cat.title}
                                                                    </span>

                                                                    <div className="flex items-center gap-1 shrink-0">
                                                                        <Link
                                                                            to={cat.path}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setMobileOpen(false);
                                                                            }}
                                                                            title={`Open ${cat.title}`}
                                                                            className="w-6 h-6 rounded text-slate-400 hover:text-blue-600 flex items-center justify-center transition-colors"
                                                                            aria-label={`Open ${cat.title} page`}
                                                                        >
                                                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                                                        </Link>
                                                                        <ChevronDown
                                                                            className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                                                                                isCatExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                                                                            }`}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                {/* Category Expanded Links */}
                                                                {isCatExpanded && (
                                                                    <div
                                                                        id={`mobile-subcat-${cat.id}`}
                                                                        className="p-2 bg-white border-t border-slate-100 space-y-1"
                                                                    >
                                                                        <Link
                                                                            to={cat.path}
                                                                            onClick={() => setMobileOpen(false)}
                                                                            className="block px-2.5 py-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700"
                                                                        >
                                                                            View {cat.title} Overview →
                                                                        </Link>

                                                                        <div className="space-y-1.5 pt-1">
                                                                            {allCatLinks.map((card, cIdx) => (
                                                                                <Link
                                                                                    key={cIdx}
                                                                                    to={card.path}
                                                                                    onClick={() => setMobileOpen(false)}
                                                                                    className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-50/80 hover:bg-white border border-slate-200/70 hover:border-blue-300 text-xs font-bold text-slate-800 hover:text-blue-600 transition-all shadow-2xs"
                                                                                >
                                                                                    <span className="truncate">{card.title}</span>
                                                                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 shrink-0 ml-2 transition-transform" />
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Drawer Bottom CTA */}
                        <div className="p-3 sm:p-4 border-t border-slate-200 bg-slate-50/90 shrink-0 space-y-2">
                            <Link
                                to="/book-consultation"
                                onClick={() => setMobileOpen(false)}
                                className="w-full min-h-[44px] flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
                            >
                                <span>Book Consultation</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <div className="text-center text-[11px] text-slate-400">
                                ProfitMachines Enterprise Diagnostic OS
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
