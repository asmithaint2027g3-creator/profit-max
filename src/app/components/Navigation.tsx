import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, X, ChevronRight, ChevronDown, Search, ArrowRight, ArrowUpRight, AlertCircle,
    Compass, Building2, Zap, Handshake, Rocket, BrainCircuit, TrendingUp, Globe,
    ShieldCheck, Layers, Cpu, DollarSign, Target, Sparkles, UserCheck, Sliders,
    Briefcase, ShoppingBag, Bot, Users, Activity, FileText, Lock, Coins,
    Network, Clock, BookOpen, HelpCircle, Landmark, HeartPulse, GraduationCap,
    Lightbulb, Shield, BarChart3, CheckCircle2, Phone, Radio, Factory, Server, Box, Scale,
    Flame, Store, Building, Cloud, HeartHandshake, Radar, LineChart, RefreshCw,
    Percent, GitMerge, Award, Workflow, Gauge
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


import {
    offeringsArchitecture,
    industriesArchitecture,
    OfferingCategoryDetail,
    OfferingCapabilityItem,
    IndustryCategoryDetail,
    IndustryCapabilityItem
} from '../../data/navigationArchitecture';

export { offeringsArchitecture, industriesArchitecture };
export type { OfferingCategoryDetail, OfferingCapabilityItem, IndustryCategoryDetail, IndustryCapabilityItem };

const spotlightConfigs: Record<string, SpotlightConfig> = {
    'offerings': {
        badge: 'Enterprise Platform',
        tagline: 'Defensible Growth Architecture',
        title: 'Profit Pool Discovery',
        description: 'Quantify buyer willingness-to-pay and deploy 16 quantitative discovery engines across your complete revenue chain.',
        kpi: '+28.4%',
        kpiLabel: 'Contribution Margin',
        path: '/offerings/profit-pool-discovery',
        ctaText: 'Explore Discovery Capabilities',
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
                // 1. OFFERINGS (ALL 8 ARCHITECTURAL OFFERINGS, 10 CAPABILITIES EACH)
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
                        header: `${cat.title} · Pillars 01-05`,
                        badge: 'Strategic',
                        icon: cat.capabilities[0].icon,
                        cards: cat.capabilities.slice(0, 5).map(c => ({
                            title: c.title,
                            description: c.outcome,
                            path: c.path,
                            badge: c.tag,
                            icon: c.icon,
                            tags: [cat.title]
                        }))
                    },
                    {
                        header: `${cat.title} · Engines 06-10`,
                        badge: 'Execution',
                        icon: cat.capabilities[5]?.icon || cat.capabilities[0].icon,
                        cards: cat.capabilities.slice(5, 10).map(c => ({
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

        // 2. INDUSTRIES (ALL 6 BUSINESS-MODEL PRACTICE AREAS, 10 CAPABILITIES EACH)
        {
            id: 'industries',
            name: 'Industries',
            shortName: 'Industries',
            path: '/industries',
            icon: Building2,
            badge: 'Vertical Engineering',
            summary: 'Vertical-specific revenue engineering: bespoke revenue operating systems tailored to your market nuances and compliance requirements.',
            categories: industriesArchitecture.map(ind => ({
                id: ind.id,
                title: ind.title,
                desc: ind.desc,
                path: ind.path,
                badge: ind.badge,
                icon: ind.icon,
                columns: [
                    {
                        header: `${ind.title} · Pillars 01-05`,
                        badge: 'Strategic',
                        icon: ind.capabilities[0].icon,
                        cards: ind.capabilities.slice(0, 5).map(c => ({
                            title: c.title,
                            description: c.outcome,
                            path: c.path,
                            badge: c.tag,
                            icon: c.icon,
                            tags: [ind.title]
                        }))
                    },
                    {
                        header: `${ind.title} · Engines 06-10`,
                        badge: 'Execution',
                        icon: ind.capabilities[5]?.icon || ind.capabilities[0].icon,
                        cards: ind.capabilities.slice(5, 10).map(c => ({
                            title: c.title,
                            description: c.outcome,
                            path: c.path,
                            badge: c.tag,
                            icon: c.icon,
                            tags: [ind.title]
                        }))
                    }
                ]
            }))
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
                    desc: 'Buyer intent, account context, stakeholder mapping, and real-time market signals.',
                    path: '/ai-native-sales/revenue-intelligence',
                    badge: '',
                    icon: Radar,
                    columns: [
                        {
                            header: 'Intent & Account Context',
                            badge: 'Telemetry',
                            icon: Radar,
                            cards: [
                                {
                                    title: 'Buyer Intelligence',
                                    description: 'Surfaces dark-funnel buying surges and vendor research 60-90 days before competitors.',
                                    path: '/ai-native-sales/revenue-intelligence#buyer-intelligence',
                                    badge: 'Intent Velocity',
                                    icon: Activity,
                                    tags: ['Dark Funnel', 'Intent Surges']
                                },
                                {
                                    title: 'Account Intelligence',
                                    description: 'Synthesizes enterprise 10-Ks, technographic stacks, and strategic initiatives.',
                                    path: '/ai-native-sales/revenue-intelligence#account-intelligence',
                                    badge: 'Account 360',
                                    icon: Layers,
                                    tags: ['SEC Filings', 'Tech Stack']
                                }
                            ]
                        },
                        {
                            header: 'Committees & Signals',
                            badge: 'Multi-Thread',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Buying Committee Intelligence',
                                    description: 'Maps economic buyers, technical evaluators, champions, and missing committee personas.',
                                    path: '/ai-native-sales/revenue-intelligence#buying-committee-intelligence',
                                    badge: 'Stakeholder Graph',
                                    icon: Users,
                                    tags: ['Consensus', 'Influence Map']
                                },
                                {
                                    title: 'Market Signals',
                                    description: 'Continuous monitoring of rival pricing shifts, executive hiring, and regulatory triggers.',
                                    path: '/ai-native-sales/revenue-intelligence#market-signals',
                                    badge: 'Macro Telemetry',
                                    icon: ShieldCheck,
                                    tags: ['Triggers', 'Displacement']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'autonomous-pipeline-generation',
                    title: 'Autonomous Pipeline Generation',
                    desc: 'ICP discovery, autonomous prospecting swarms, and pipeline acceleration.',
                    path: '/ai-native-sales/autonomous-pipeline-generation',
                    badge: '',
                    icon: Target,
                    columns: [
                        {
                            header: 'Discovery & Swarms',
                            badge: 'Autonomous',
                            icon: Target,
                            cards: [
                                {
                                    title: 'Pipeline Generation AI',
                                    description: 'Autonomous account matching, lead enrichment, and neural qualification scoring.',
                                    path: '/ai-native-sales/autonomous-pipeline-generation#pipeline-generation-ai',
                                    badge: 'Account Discovery',
                                    icon: Target,
                                    tags: ['Neural ICP', 'Close Propensity']
                                },
                                {
                                    title: 'AI Prospecting Swarm',
                                    description: 'Multi-agent swarms researching prospects and drafting hyper-personalized outreach.',
                                    path: '/ai-native-sales/autonomous-pipeline-generation#ai-prospecting-swarm',
                                    badge: 'Multi-Agent',
                                    icon: Bot,
                                    tags: ['Agent Fleet', 'Personalized Outbound']
                                }
                            ]
                        },
                        {
                            header: 'ICP & Acceleration',
                            badge: 'Velocity',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'ICP Discovery',
                                    description: 'Empirical analysis of closed-won cohorts and customer LTV to refine target ICP.',
                                    path: '/ai-native-sales/autonomous-pipeline-generation#icp-discovery',
                                    badge: 'Mathematical ICP',
                                    icon: BarChart3,
                                    tags: ['LTV:CAC', 'Margin Fit']
                                },
                                {
                                    title: 'Pipeline Acceleration',
                                    description: 'Identifies friction bottlenecks and coordinates instant meeting scheduling.',
                                    path: '/ai-native-sales/autonomous-pipeline-generation#pipeline-acceleration',
                                    badge: 'Stage Velocity',
                                    icon: Zap,
                                    tags: ['Show Rates', 'Instant Booking']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'autonomous-sales-engagement',
                    title: 'Autonomous Sales Engagement',
                    desc: 'Hyper-personalization, conversation insights, buyer enablement, and consensus acceleration.',
                    path: '/ai-native-sales/autonomous-sales-engagement',
                    badge: '',
                    icon: Zap,
                    columns: [
                        {
                            header: 'Personalization & Speech',
                            badge: 'Contextual',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'Hyper-Personalization Engine',
                                    description: 'Role-specific commercial messaging grounded in corporate filings and strategic goals.',
                                    path: '/ai-native-sales/autonomous-sales-engagement#hyper-personalization-engine',
                                    badge: 'Contextual',
                                    icon: Sparkles,
                                    tags: ['Role-Tailored', '1-on-1 Pitch']
                                },
                                {
                                    title: 'Conversation Intelligence',
                                    description: 'Extracts action items, budget signals, and sentiment shifts from virtual meetings.',
                                    path: '/ai-native-sales/autonomous-sales-engagement#conversation-intelligence',
                                    badge: 'Speech Analytics',
                                    icon: Activity,
                                    tags: ['Action Items', 'Sentiment']
                                }
                            ]
                        },
                        {
                            header: 'Enablement & Consensus',
                            badge: 'Consensus',
                            icon: CheckCircle2,
                            cards: [
                                {
                                    title: 'Buyer Enablement',
                                    description: 'Collaborative digital sales rooms equipping champions with custom business cases.',
                                    path: '/ai-native-sales/autonomous-sales-engagement#buyer-enablement',
                                    badge: 'Digital Rooms',
                                    icon: Layers,
                                    tags: ['ROI Models', 'Security Dossier']
                                },
                                {
                                    title: 'Consensus Acceleration',
                                    description: 'Resolves conflicting stakeholder objections and drives unanimous agreement.',
                                    path: '/ai-native-sales/autonomous-sales-engagement#consensus-acceleration',
                                    badge: 'Committee Alignment',
                                    icon: CheckCircle2,
                                    tags: ['Unanimity', 'Objection Resolution']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'intelligent-sales-agents',
                    title: 'Intelligent Sales Agents',
                    desc: 'Specialized SDR, BDR, AE, and RevOps agents for continuous workflow execution.',
                    path: '/ai-native-sales/intelligent-sales-agents',
                    badge: '',
                    icon: Bot,
                    columns: [
                        {
                            header: 'Specialized Agent Fleet',
                            badge: 'Autonomous',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'SDR & BDR Agents',
                                    description: 'Handles early-stage research, inbound qualification, and outbound campaigns.',
                                    path: '/ai-native-sales/intelligent-sales-agents#sdr-agents',
                                    badge: 'Prospecting Swarm',
                                    icon: Bot,
                                    tags: ['Inbound/Outbound', 'Territory BDR']
                                },
                                {
                                    title: 'Account Executive Agent',
                                    description: 'Pre-call briefs, meeting summaries, mutual action plans, and negotiation co-pilot.',
                                    path: '/ai-native-sales/intelligent-sales-agents#account-executive-agent',
                                    badge: 'Deal Co-Pilot',
                                    icon: Sparkles,
                                    tags: ['Pre-Call Briefs', 'Mutual Plans']
                                }
                            ]
                        },
                        {
                            header: 'Operations & Optimization',
                            badge: 'Self-Learning',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'RevOps & Revenue Strategist',
                                    description: 'Maintains zero-admin CRM hygiene and simulates quarterly revenue capacity.',
                                    path: '/ai-native-sales/intelligent-sales-agents#revops-agent',
                                    badge: 'Zero Admin',
                                    icon: Cpu,
                                    tags: ['CRM Hygiene', 'Capacity Simulation']
                                },
                                {
                                    title: 'Sales Optimization & Next Best Action',
                                    description: 'Daily prioritized action lists and continuous empirical sales coaching.',
                                    path: '/ai-native-sales/intelligent-sales-agents#next-best-action',
                                    badge: 'Next Best Action',
                                    icon: TrendingUp,
                                    tags: ['Ramp Compression', 'Daily Cockpit']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'revenue-acceleration',
                    title: 'Revenue Acceleration',
                    desc: 'Deal intelligence, deal war rooms, risk detection, and sales cycle optimization.',
                    path: '/ai-native-sales/revenue-acceleration',
                    badge: '',
                    icon: TrendingUp,
                    columns: [
                        {
                            header: 'Deal Health & War Rooms',
                            badge: 'Telemetry',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'Deal Intelligence',
                                    description: 'Multivariate scoring across committee coverage, response latency, and health.',
                                    path: '/ai-native-sales/revenue-acceleration#deal-intelligence',
                                    badge: 'Multivariate Health',
                                    icon: Activity,
                                    tags: ['Scorecards', 'Early Warning']
                                },
                                {
                                    title: 'Deal War Room',
                                    description: 'Collaborative command center uniting exec sponsors, legal, and sales engineering.',
                                    path: '/ai-native-sales/revenue-acceleration#deal-war-room',
                                    badge: 'Strategic Close',
                                    icon: Users,
                                    tags: ['Cross-Functional', 'Task Sync']
                                }
                            ]
                        },
                        {
                            header: 'Risk & Cycle Optimization',
                            badge: 'Velocity',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Deal Risk Analysis',
                                    description: 'Detects single-threading, champion turnover, and competitor stealth pilots.',
                                    path: '/ai-native-sales/revenue-acceleration#deal-risk-analysis',
                                    badge: 'Predictive Radar',
                                    icon: AlertCircle,
                                    tags: ['Stagnation', 'Blocker Detection']
                                },
                                {
                                    title: 'Sales Cycle Optimization',
                                    description: 'Identifies avoidable bottlenecks in legal, security, and proposal reviews.',
                                    path: '/ai-native-sales/revenue-acceleration#sales-cycle-optimization',
                                    badge: 'Cycle Compression',
                                    icon: Clock,
                                    tags: ['Stage Duration', 'Bottlenecks']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'pricing-intelligence',
                    title: 'Pricing Intelligence',
                    desc: 'Dynamic pricing, margin waterfalls, modular offer packaging, and deal desk governance.',
                    path: '/ai-native-sales/pricing-intelligence',
                    badge: '',
                    icon: DollarSign,
                    columns: [
                        {
                            header: 'Dynamic Pricing & Margin',
                            badge: 'Economics',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Dynamic Pricing',
                                    description: 'Calculates optimal price guidance corridors based on willingness to pay.',
                                    path: '/ai-native-sales/pricing-intelligence#dynamic-pricing',
                                    badge: 'WTP Corridor',
                                    icon: DollarSign,
                                    tags: ['Willingness to Pay', 'Discount Bounds']
                                },
                                {
                                    title: 'Margin Intelligence',
                                    description: 'Comprehensive deal profitability models including cloud hosting and support costs.',
                                    path: '/ai-native-sales/pricing-intelligence#margin-intelligence',
                                    badge: 'Contribution Margin',
                                    icon: BarChart3,
                                    tags: ['Cost to Serve', 'Hosting Economics']
                                }
                            ]
                        },
                        {
                            header: 'Packaging & Deal Desk',
                            badge: 'Governance',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Offer Optimization',
                                    description: 'Three-tier proposal packaging (Good/Better/Best) matched to customer maturity.',
                                    path: '/ai-native-sales/pricing-intelligence#offer-optimization',
                                    badge: 'Modular Bundles',
                                    icon: Layers,
                                    tags: ['Good/Better/Best', 'Choice Arch']
                                },
                                {
                                    title: 'Commercial Optimization',
                                    description: 'Automated deal desk approval engine evaluating balanced concession trade-offs.',
                                    path: '/ai-native-sales/pricing-intelligence#commercial-optimization',
                                    badge: 'Fast Approvals',
                                    icon: ShieldCheck,
                                    tags: ['Concession Trades', 'Deal Desk']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'ecosystem-revenue-growth',
                    title: 'Ecosystem Revenue Growth',
                    desc: 'Partner intelligence, partner revenue OS, relationship graphs, and co-selling.',
                    path: '/ai-native-sales/ecosystem-revenue-growth',
                    badge: '',
                    icon: Network,
                    columns: [
                        {
                            header: 'Partner Intelligence & Co-Sell',
                            badge: 'Alliances',
                            icon: Network,
                            cards: [
                                {
                                    title: 'Partner Intelligence',
                                    description: 'Scores ecosystem partners across market alignment, overlap, and certification.',
                                    path: '/ai-native-sales/ecosystem-revenue-growth#partner-intelligence',
                                    badge: 'Scoring Matrix',
                                    icon: Network,
                                    tags: ['Tiering Matrix', 'Competency']
                                },
                                {
                                    title: 'Partner Revenue OS',
                                    description: 'Shared co-selling environment for joint planning, deal registration, and SLAs.',
                                    path: '/ai-native-sales/ecosystem-revenue-growth#partner-revenue-os',
                                    badge: 'Co-Sell Execution',
                                    icon: Handshake,
                                    tags: ['Deal Reg', 'Conflict-Free']
                                }
                            ]
                        },
                        {
                            header: 'Ecosystem Graphs & Impact',
                            badge: 'Attribution',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'Ecosystem Intelligence Graph',
                                    description: 'Privacy-safe relationship mapping linking target accounts to partner relationships.',
                                    path: '/ai-native-sales/ecosystem-revenue-growth#ecosystem-intelligence-graph',
                                    badge: 'Account Overlaps',
                                    icon: Globe,
                                    tags: ['Warm Intros', 'Data Escrow']
                                },
                                {
                                    title: 'Ecosystem Growth Engine',
                                    description: 'Multi-touch attribution models quantifying partner-sourced and influenced ARR.',
                                    path: '/ai-native-sales/ecosystem-revenue-growth#ecosystem-growth-engine',
                                    badge: 'Multi-Touch ROI',
                                    icon: TrendingUp,
                                    tags: ['Influence Share', 'Attribution']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'customer-growth-intelligence',
                    title: 'Customer Growth Intelligence',
                    desc: 'Expansion whitespace, cross-sell, proactive upsell, and 180-day renewal intelligence.',
                    path: '/ai-native-sales/customer-growth-intelligence',
                    badge: '',
                    icon: Users,
                    columns: [
                        {
                            header: 'Expansion & Whitespace',
                            badge: 'Land & Expand',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Expansion Intelligence',
                                    description: 'Maps organizational hierarchy and whitespace across enterprise divisions.',
                                    path: '/ai-native-sales/customer-growth-intelligence#expansion-intelligence',
                                    badge: 'Whitespace Map',
                                    icon: Users,
                                    tags: ['Subsidiary Trees', 'Multi-Division']
                                },
                                {
                                    title: 'Cross-Sell & Upsell',
                                    description: 'Recommends complementary platform modules and manages proactive tier progression.',
                                    path: '/ai-native-sales/customer-growth-intelligence#cross-sell',
                                    badge: 'Tier Progression',
                                    icon: TrendingUp,
                                    tags: ['Product Affinity', 'Usage Limits']
                                }
                            ]
                        },
                        {
                            header: 'Retention & Renewals',
                            badge: '180-Day Radar',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Renewal Intelligence',
                                    description: 'Predicts renewal outcomes 180 days in advance via adoption and health telemetry.',
                                    path: '/ai-native-sales/customer-growth-intelligence#renewal-intelligence',
                                    badge: 'Early Warning',
                                    icon: Clock,
                                    tags: ['Predictable Renewals', 'GRR Focus']
                                },
                                {
                                    title: 'Customer Retention',
                                    description: 'Automated intervention workflows that mobilize CSMs when relationship health dips.',
                                    path: '/ai-native-sales/customer-growth-intelligence#customer-retention',
                                    badge: 'Churn Mitigation',
                                    icon: HeartHandshake,
                                    tags: ['Health Scores', 'Rescue Plays']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'autonomous-gtm-command-center',
                    title: 'Autonomous GTM Command Center',
                    desc: 'Revenue command center, self-optimizing GTM AI, executive copilot, and forecast intelligence.',
                    path: '/ai-native-sales/autonomous-gtm-command-center',
                    badge: '',
                    icon: Cpu,
                    columns: [
                        {
                            header: 'Command Cockpit & AI',
                            badge: 'Executive',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'Revenue Command Center',
                                    description: 'Consolidates pipeline, deal health, margin, and retention into a single cockpit.',
                                    path: '/ai-native-sales/autonomous-gtm-command-center#revenue-command-center',
                                    badge: 'Unified Truth',
                                    icon: Cpu,
                                    tags: ['Consolidated View', 'Data Graph']
                                },
                                {
                                    title: 'Self-Optimizing GTM AI',
                                    description: 'Closed-loop learning analyzing win/loss patterns to recommend process tuning.',
                                    path: '/ai-native-sales/autonomous-gtm-command-center#self-optimizing-gtm-ai',
                                    badge: 'Closed Loop',
                                    icon: RefreshCw,
                                    tags: ['Playbook Tuning', 'Territory Equity']
                                }
                            ]
                        },
                        {
                            header: 'Copilot & Forecasting',
                            badge: 'Predictive',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: 'Executive Revenue Copilot',
                                    description: 'Queries verified enterprise data models in plain English with instant SQL citations.',
                                    path: '/ai-native-sales/autonomous-gtm-command-center#executive-revenue-copilot',
                                    badge: 'Query Telemetry',
                                    icon: Sparkles,
                                    tags: ['Natural Language', 'Instant SQL']
                                },
                                {
                                    title: 'Forecast Intelligence',
                                    description: 'Deterministic machine learning forecasting reducing quarterly variance to <3.5%.',
                                    path: '/ai-native-sales/autonomous-gtm-command-center#forecast-intelligence',
                                    badge: '<3.5% Variance',
                                    icon: BarChart3,
                                    tags: ['Neural Commit', 'Slippage Radar']
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
            summary: 'The empirical architecture of profitable scale: 9 connected capabilities across revenue physics, signal intelligence, latent discovery, forensic leakage recovery, offer engineering, and executive telemetry.',
            categories: [
                // SUB-MENU 1: Revenue Physics
                {
                    id: 'revenue-physics',
                    title: 'Revenue Physics',
                    desc: 'Revenue mechanics, parametric equations, cohort dynamics, and unit economics.',
                    path: '/growth-science/revenue-physics',
                    badge: 'Pillar 01',
                    icon: Activity,
                    columns: [
                        {
                            header: 'Mathematical Models',
                            badge: 'Empirical',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'Revenue Architecture',
                                    description: 'Deconstruct revenue into deterministic flow equations, driver mapping, and velocity modeling.',
                                    path: '/growth-science/revenue-physics#revenue-architecture',
                                    badge: 'Velocity Index',
                                    icon: Activity,
                                    tags: ['Driver Mapping', 'Parametric Equation']
                                },
                                {
                                    title: 'Customer Economics',
                                    description: 'Audit multi-year cohort compounding, expansion mechanics, and retention survival curves.',
                                    path: '/growth-science/revenue-physics#customer-economics',
                                    badge: 'LTV:CAC 4.2x',
                                    icon: LineChart,
                                    tags: ['Cohort Compounding', 'NRR Dynamics']
                                }
                            ]
                        },
                        {
                            header: 'Unit Economics & Whitespace',
                            badge: 'Defensibility',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Unit Economics',
                                    description: 'Audit fully loaded CAC, cost-to-serve allocations, and margin stacks across customer deciles.',
                                    path: '/growth-science/revenue-physics#unit-economics',
                                    badge: 'Margin Stack',
                                    icon: Scale,
                                    tags: ['Cost-to-Serve', 'Profit Pools']
                                },
                                {
                                    title: 'White Space Intelligence',
                                    description: 'Dissect TAM into defensible, unit-economic micro-segments and uncontested profit pools.',
                                    path: '/growth-science/revenue-physics#white-space-intelligence',
                                    badge: 'Micro-TAM',
                                    icon: Globe,
                                    tags: ['Market Gaps', 'Growth Vectors']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 2: Revenue Intelligence
                {
                    id: 'revenue-intelligence',
                    title: 'Revenue Intelligence',
                    desc: 'Buyer intent signals, competitive tracking, customer health, and stochastic forecasting.',
                    path: '/growth-science/revenue-intelligence',
                    badge: 'Pillar 02',
                    icon: LineChart,
                    columns: [
                        {
                            header: 'Signal & Market Sensing',
                            badge: 'Real-Time',
                            icon: Radar,
                            cards: [
                                {
                                    title: 'Revenue Signal Intelligence',
                                    description: 'Capture active buyer intent signals, account triggers, and AI prospect discovery.',
                                    path: '/growth-science/revenue-intelligence#revenue-signal-intelligence',
                                    badge: 'Intent Signals',
                                    icon: Radar,
                                    tags: ['Buying Intent', 'Account Signals']
                                },
                                {
                                    title: 'Market Intelligence',
                                    description: 'Benchmark competitor win rates, price concessions, and category displacement trends.',
                                    path: '/growth-science/revenue-intelligence#market-intelligence',
                                    badge: 'Win Rate 55%',
                                    icon: Globe,
                                    tags: ['Competitive Pricing', 'Share of Market']
                                }
                            ]
                        },
                        {
                            header: 'Customer & Forecast Models',
                            badge: 'Predictive',
                            icon: LineChart,
                            cards: [
                                {
                                    title: 'Customer Intelligence',
                                    description: 'Predictive churn probability modeling, growth potential scoring, and health analytics.',
                                    path: '/growth-science/revenue-intelligence#customer-intelligence',
                                    badge: '88% Churn Predict',
                                    icon: Users,
                                    tags: ['Customer Health', 'Renewal Equity']
                                },
                                {
                                    title: 'Revenue Forecast Intelligence',
                                    description: 'Stochastic Monte Carlo pipeline modeling delivering board forecast precision with <5% variance.',
                                    path: '/growth-science/revenue-intelligence#revenue-forecast-intelligence',
                                    badge: '<4.5% Variance',
                                    icon: LineChart,
                                    tags: ['Stochastic Forecast', 'Zero Bias']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 3: Revenue Potential Discovery
                {
                    id: 'revenue-potential-discovery',
                    title: 'Revenue Potential Discovery',
                    desc: 'Installed base monetization, latent product features, adjacent verticals, and AI models.',
                    path: '/growth-science/revenue-potential-discovery',
                    badge: 'Pillar 03',
                    icon: Compass,
                    columns: [
                        {
                            header: 'Account & Product Headroom',
                            badge: 'Expansion',
                            icon: Compass,
                            cards: [
                                {
                                    title: 'Existing Customer Growth',
                                    description: 'Discover unharvested cross-sell equity, installed-base monetization, and multi-product adoption.',
                                    path: '/growth-science/revenue-potential-discovery#existing-customer-growth',
                                    badge: '+38% Expansion',
                                    icon: Users,
                                    tags: ['Cross-Sell', 'Installed Base']
                                },
                                {
                                    title: 'Product Revenue Potential',
                                    description: 'Monetize compute-intensive features, optimize packaging tiers, and rationalize low-margin SKUs.',
                                    path: '/growth-science/revenue-potential-discovery#product-revenue-potential',
                                    badge: 'ASP +54%',
                                    icon: Layers,
                                    tags: ['Feature Gating', 'Premiumization']
                                }
                            ]
                        },
                        {
                            header: 'Market & AI Monetization',
                            badge: 'Greenfield',
                            icon: Sparkles,
                            cards: [
                                {
                                    title: 'Market Revenue Potential',
                                    description: 'Assess adjacent vertical industries, international corridors, and hyperscaler co-sell channels.',
                                    path: '/growth-science/revenue-potential-discovery#market-revenue-potential',
                                    badge: '28% Adjacency',
                                    icon: Globe,
                                    tags: ['New Verticals', 'Channel Growth']
                                },
                                {
                                    title: 'AI Revenue Potential',
                                    description: 'Package autonomous AI capabilities into value-based subscription and consumption tiers.',
                                    path: '/growth-science/revenue-potential-discovery#ai-revenue-potential',
                                    badge: '76% AI Margin',
                                    icon: Cpu,
                                    tags: ['AI Subscriptions', 'Outcome Pricing']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 4: Revenue Leakage & Recovery
                {
                    id: 'revenue-leakage-recovery',
                    title: 'Revenue Leakage & Recovery',
                    desc: 'Forensic clawback across funnel stalls, rogue discounting, unbilled usage, and churn.',
                    path: '/growth-science/revenue-leakage-recovery',
                    badge: 'Pillar 04',
                    icon: Radar,
                    columns: [
                        {
                            header: 'Forensic Diagnostics',
                            badge: 'Clawback',
                            icon: Radar,
                            cards: [
                                {
                                    title: 'Funnel Leakage Analysis',
                                    description: 'Pinpoint lead decay latency, discovery drop-offs, and late-stage velocity bottlenecks.',
                                    path: '/growth-science/revenue-leakage-recovery#funnel-leakage-analysis',
                                    badge: '<22% Loss',
                                    icon: Radar,
                                    tags: ['Funnel Decay', 'SDR Latency']
                                },
                                {
                                    title: 'Commercial Leakage',
                                    description: 'Audit rogue sales discounting, unbilled engineering hours, and waived CPI escalations.',
                                    path: '/growth-science/revenue-leakage-recovery#commercial-leakage',
                                    badge: 'Price Realization',
                                    icon: DollarSign,
                                    tags: ['Discount Control', 'CPI Protection']
                                }
                            ]
                        },
                        {
                            header: 'Retention & Recovery',
                            badge: 'Cash Recovery',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Customer Leakage',
                                    description: 'Isolate root-cause churn triggers, dormant account risks, and champion departure turnover.',
                                    path: '/growth-science/revenue-leakage-recovery#customer-leakage',
                                    badge: 'GRR 95%',
                                    icon: Users,
                                    tags: ['Churn Autopsy', 'Dormancy Recovery']
                                },
                                {
                                    title: 'Revenue Recovery Programs',
                                    description: 'Deploy targeted win-back campaigns and deal resurrection models that recover lost cash.',
                                    path: '/growth-science/revenue-leakage-recovery#revenue-recovery-programs',
                                    badge: '$4.8M Recovered',
                                    icon: RefreshCw,
                                    tags: ['Win-Back Engines', 'Pipeline Blitz']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 5: Revenue Bundling & Offer Engineering
                {
                    id: 'revenue-bundling-offer-engineering',
                    title: 'Revenue Bundling & Offer Engineering',
                    desc: 'Commercial packaging, solution bundles, tier gating, and multi-product attach rates.',
                    path: '/growth-science/revenue-bundling-offer-engineering',
                    badge: 'Pillar 05',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Packaging Architecture',
                            badge: 'AOV Lift',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Product Bundling Science',
                                    description: 'Structure high-converting solution bundles that elevate AOV while protecting 75%+ margins.',
                                    path: '/growth-science/revenue-bundling-offer-engineering#product-bundling-science',
                                    badge: 'Attach 74%',
                                    icon: Layers,
                                    tags: ['Solution Bundles', 'Blended Margins']
                                },
                                {
                                    title: 'Commercial Packaging',
                                    description: 'Design rigid tier fences and enterprise feature gating to prevent customer downselling.',
                                    path: '/growth-science/revenue-bundling-offer-engineering#commercial-packaging',
                                    badge: 'ARPA $56K',
                                    icon: Target,
                                    tags: ['Tier Fences', 'Value Packaging']
                                }
                            ]
                        },
                        {
                            header: 'Expansion Mechanics',
                            badge: 'Compounding',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'Revenue Expansion Models',
                                    description: 'Automate post-sale add-on attach rates and in-app self-service cross-sell workflows.',
                                    path: '/growth-science/revenue-bundling-offer-engineering#revenue-expansion-models',
                                    badge: '58% Multi-Prod',
                                    icon: TrendingUp,
                                    tags: ['In-App Triggers', 'Upsell Engines']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 6: Value Capture Engineering
                {
                    id: 'value-capture-engineering',
                    title: 'Value Capture Engineering',
                    desc: 'Value-based pricing, negotiation governance, concession matrices, and profit pool capture.',
                    path: '/growth-science/value-capture-engineering',
                    badge: 'Pillar 06',
                    icon: DollarSign,
                    columns: [
                        {
                            header: 'Pricing & Negotiation',
                            badge: 'Defensibility',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Pricing Science',
                                    description: 'Anchor software fees directly to verified economic surplus created for customer organizations.',
                                    path: '/growth-science/value-capture-engineering#pricing-science',
                                    badge: 'Price Realization 91%',
                                    icon: DollarSign,
                                    tags: ['EVC Pricing', 'Elasticity Curves']
                                },
                                {
                                    title: 'Commercial Optimization',
                                    description: 'Equip sales teams with structured 3-option proposals and mandatory concession trade-off rules.',
                                    path: '/growth-science/value-capture-engineering#commercial-optimization',
                                    badge: 'Win Rate 46%',
                                    icon: Scale,
                                    tags: ['Concession Governance', 'CFO Proposals']
                                }
                            ]
                        },
                        {
                            header: 'Profit Pool Extraction',
                            badge: 'EBITDA Lift',
                            icon: Award,
                            cards: [
                                {
                                    title: 'Profit Pool Capture',
                                    description: 'Isolate high-margin enterprise segments and systematically reprice legacy underpaying accounts.',
                                    path: '/growth-science/value-capture-engineering#profit-pool-capture',
                                    badge: '84% Segment Margin',
                                    icon: Award,
                                    tags: ['Legacy Repricing', 'Strategic Accounts']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 7: Product Innovation & Revenue Expansion
                {
                    id: 'product-innovation-revenue-expansion',
                    title: 'Product Innovation & Revenue Expansion',
                    desc: 'Convert customer research into scalable software. Productize bespoke services into SaaS.',
                    path: '/growth-science/product-innovation-revenue-expansion',
                    badge: 'Pillar 07',
                    icon: Sparkles,
                    columns: [
                        {
                            header: 'Intelligence & Models',
                            badge: 'Monetization',
                            icon: Sparkles,
                            cards: [
                                {
                                    title: 'Product Innovation Intelligence',
                                    description: 'Mine voice-of-customer transcripts and RFP loss gaps to identify high-conviction product opportunities.',
                                    path: '/growth-science/product-innovation-revenue-expansion#product-innovation-intelligence',
                                    badge: '21-Day Prototyping',
                                    icon: Sparkles,
                                    tags: ['VoC Mining', 'RFP Gaps']
                                },
                                {
                                    title: 'New Revenue Models',
                                    description: 'Deploy usage-based metering, marketplace take rates, and outcome-based pricing frameworks.',
                                    path: '/growth-science/product-innovation-revenue-expansion#new-revenue-models',
                                    badge: '92% Recurring',
                                    icon: LineChart,
                                    tags: ['Consumption Meters', 'Outcome Tiers']
                                }
                            ]
                        },
                        {
                            header: 'Productization Journey',
                            badge: 'SaaS Lift',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Growth Productization',
                                    description: 'Transform manual consulting deliverables and internal IP into scalable recurring software subscriptions.',
                                    path: '/growth-science/product-innovation-revenue-expansion#growth-productization',
                                    badge: 'Gross Margin 84%',
                                    icon: Layers,
                                    tags: ['Service-to-Product', 'IP Monetization']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 8: Revenue Acceleration
                {
                    id: 'revenue-acceleration',
                    title: 'Revenue Acceleration',
                    desc: 'AI sales engines, autonomous growth orchestration, and real-time deal risk coaching.',
                    path: '/growth-science/revenue-acceleration',
                    badge: 'Pillar 08',
                    icon: Zap,
                    columns: [
                        {
                            header: 'Autonomous Engines',
                            badge: 'AI SDR',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'AI Sales Engines',
                                    description: 'Deploy AI agents that autonomously research buying committees and book pre-qualified meetings.',
                                    path: '/growth-science/revenue-acceleration#ai-sales-engines',
                                    badge: '142 Meetings/Mo',
                                    icon: Bot,
                                    tags: ['Autonomous Prospecting', 'Buying Committee']
                                },
                                {
                                    title: 'Growth Automation',
                                    description: 'Orchestrate multi-channel trigger workflows that respond to inbound intent in under 5 minutes.',
                                    path: '/growth-science/revenue-acceleration#growth-automation',
                                    badge: '<5 Min Response',
                                    icon: Workflow,
                                    tags: ['Trigger Workflows', 'Omni-Channel']
                                }
                            ]
                        },
                        {
                            header: 'Deal Execution & Coaching',
                            badge: 'Cycle Speed',
                            icon: Gauge,
                            cards: [
                                {
                                    title: 'Opportunity Acceleration',
                                    description: 'In-call deal coaching, predictive deal slip alerts, and automated follow-up proposal copilots.',
                                    path: '/growth-science/revenue-acceleration#opportunity-acceleration',
                                    badge: 'Cycle -32%',
                                    icon: Gauge,
                                    tags: ['Deal Coaching', 'Risk Telemetry']
                                }
                            ]
                        }
                    ]
                },
                // SUB-MENU 9: Executive Revenue Command Center
                {
                    id: 'executive-revenue-command-center',
                    title: 'Executive Revenue Command Center',
                    desc: 'C-suite diagnostic indices, stochastic board forecast scenarios, and real-time leakage telemetry.',
                    path: '/growth-science/executive-revenue-command-center',
                    badge: 'Pillar 09',
                    icon: Cpu,
                    columns: [
                        {
                            header: 'C-Suite Cockpit',
                            badge: 'Executive HUD',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'Growth Command Center',
                                    description: 'Consolidated executive HUD tracking Revenue Health, Growth Velocity, and Rule of 40 performance.',
                                    path: '/growth-science/executive-revenue-command-center#growth-command-center',
                                    badge: 'Health 88/100',
                                    icon: Cpu,
                                    tags: ['Executive HUD', '5 Diagnostic Indices']
                                },
                                {
                                    title: 'Board Intelligence',
                                    description: 'Stochastic Monte Carlo scenario modeling delivering board forecast precision with <4% variance.',
                                    path: '/growth-science/executive-revenue-command-center#board-intelligence',
                                    badge: '<4% Variance',
                                    icon: LineChart,
                                    tags: ['Stochastic Forecast', 'VaR Analytics']
                                }
                            ]
                        },
                        {
                            header: 'Real-Time Telemetry',
                            badge: '24/7 Alarms',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Growth Telemetry',
                                    description: 'Automated executive alarms on contract discounting anomalies, churn threats, and deal stalls.',
                                    path: '/growth-science/executive-revenue-command-center#growth-telemetry',
                                    badge: '<24h Resolution',
                                    icon: ShieldCheck,
                                    tags: ['Proactive Alarms', 'Intervention SLA']
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
                    id: 'global-market-access',
                    title: 'Global Market Access',
                    desc: 'Validate country opportunity, TAM/SAM/SOM sizing, and regulatory burden before capital commitment',
                    path: '/global-acceleration/market-access',
                    badge: '',
                    icon: Globe,
                    columns: [
                        {
                            header: 'Market Discovery & Analysis',
                            badge: 'Validation',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'Country Opportunity Analysis',
                                    description: 'Unit-economic validation ranking foreign markets by contribution margin over GDP headlines.',
                                    path: '/global-acceleration/market-access#country-opportunity-analysis',
                                    badge: 'Unit Economics',
                                    icon: Globe,
                                    tags: ['ROI Ranking', 'Contribution Margin']
                                },
                                {
                                    title: 'Market Opportunity Mapping',
                                    description: 'Systematic heat-mapping of market density, sector growth rates, and structural headroom.',
                                    path: '/global-acceleration/market-access#market-opportunity-mapping',
                                    badge: 'Market Density',
                                    icon: Target,
                                    tags: ['Territory Headroom', 'Density Score']
                                },
                                {
                                    title: 'TAM / SAM / SOM Assessment',
                                    description: 'Country-specific addressable market modeling with realistic penetration rates.',
                                    path: '/global-acceleration/market-access#tam-sam-som-assessment',
                                    badge: 'Territory Sizing',
                                    icon: Target,
                                    tags: ['Territory TAM', '<15% Variance']
                                },
                                {
                                    title: 'Competitive Intelligence',
                                    description: 'Reverse-engineering regional competitors, pricing power, distribution lock-ins, and counter-positioning.',
                                    path: '/global-acceleration/market-access#competitive-intelligence',
                                    badge: 'Incumbents',
                                    icon: ShieldCheck,
                                    tags: ['Rival Dissection', 'Win Rates']
                                }
                            ]
                        },
                        {
                            header: 'Trade & Governance',
                            badge: 'Governance',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Trade Corridor Intelligence',
                                    description: 'Analysis of bilateral trade agreements, tariffs, customs clearance dynamics, and cross-border commercial flows.',
                                    path: '/global-acceleration/market-access#trade-corridor-intelligence',
                                    badge: 'Corridors',
                                    icon: TrendingUp,
                                    tags: ['Tariff Modeling', 'Trade Flows']
                                },
                                {
                                    title: 'Regulatory Intelligence',
                                    description: 'Pre-launch data residency and sovereign compliance mapping with real-time monitoring.',
                                    path: '/global-acceleration/market-access#regulatory-intelligence',
                                    badge: 'Sovereignty',
                                    icon: Landmark,
                                    tags: ['GDPR / LGPD', 'Zero Fines']
                                },
                                {
                                    title: 'Market Entry Feasibility',
                                    description: 'Quantitative feasibility indexing assessing capital requirements, payback horizons, and local talent.',
                                    path: '/global-acceleration/market-access#market-entry-feasibility',
                                    badge: 'Feasibility',
                                    icon: Activity,
                                    tags: ['Capital Hurdle', 'Payback Horizon']
                                },
                                {
                                    title: 'Geo-Economic Risk Analysis',
                                    description: 'Scenario stress-testing against currency volatility, geopolitical exposure, and supply shocks.',
                                    path: '/global-acceleration/market-access#geo-economic-risk-analysis',
                                    badge: 'Risk Hedging',
                                    icon: Shield,
                                    tags: ['Currency Risk', 'Capital Control']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'global-demand-networks',
                    title: 'Global Demand Networks',
                    desc: 'Algorithmic discovery of regional demand ecosystems, commercial corridors, and institutional buyers',
                    path: '/global-acceleration/demand-networks',
                    badge: '',
                    icon: Network,
                    columns: [
                        {
                            header: 'Demand & Buyer Sourcing',
                            badge: 'Direct Demand',
                            icon: Network,
                            cards: [
                                {
                                    title: 'Distributor Discovery',
                                    description: 'Algorithmic sourcing of top-quartile distributor organizations with verified regional sales reach.',
                                    path: '/global-acceleration/demand-networks#distributor-discovery',
                                    badge: 'Channel Fabric',
                                    icon: Building2,
                                    tags: ['Distributor Sourcing', 'Territory Reach']
                                },
                                {
                                    title: 'Retail Network Discovery',
                                    description: 'Precision identification of retail chains, boutique outlets, and department stores primed for placement.',
                                    path: '/global-acceleration/demand-networks#retail-network-discovery',
                                    badge: 'Retail Networks',
                                    icon: Store,
                                    tags: ['Retail Distribution', 'Shelf Placement']
                                },
                                {
                                    title: 'Importer & Buyer Discovery',
                                    description: 'Direct access to credentialed cross-border importers and corporate procurement buyers.',
                                    path: '/global-acceleration/demand-networks#importer-buyer-discovery',
                                    badge: 'Vetted Importers',
                                    icon: Network,
                                    tags: ['Direct Procurement', 'Customs Cleared']
                                },
                                {
                                    title: 'Dealer & Reseller Mapping',
                                    description: 'Exhaustive territory mapping of certified value-added resellers (VARs) and localized dealer networks.',
                                    path: '/global-acceleration/demand-networks#dealer-reseller-mapping',
                                    badge: 'Dealer Networks',
                                    icon: Users,
                                    tags: ['Certified VARs', 'Dealer Mesh']
                                }
                            ]
                        },
                        {
                            header: 'Accounts & Corridors',
                            badge: 'Ecosystems',
                            icon: Target,
                            cards: [
                                {
                                    title: 'Strategic Account Discovery',
                                    description: 'Target identification of multinational enterprise accounts with verified cross-border buying intent.',
                                    path: '/global-acceleration/demand-networks#strategic-account-discovery',
                                    badge: 'Intent Corridors',
                                    icon: Target,
                                    tags: ['Enterprise Accounts', 'Active Surge']
                                },
                                {
                                    title: 'Procurement Network Intelligence',
                                    description: 'Reverse-engineering RFP schedules, procurement cycles, and approved vendor requirements.',
                                    path: '/global-acceleration/demand-networks#procurement-network-intelligence',
                                    badge: 'Procurement Cycles',
                                    icon: Briefcase,
                                    tags: ['RFP Calendars', 'Approved Vendors']
                                },
                                {
                                    title: 'Industry Demand Ecosystem Mapping',
                                    description: 'Cross-industry relationship mapping identifying ecosystem clusters, tier-1 suppliers, and secondary buyers.',
                                    path: '/global-acceleration/demand-networks#industry-demand-ecosystem-mapping',
                                    badge: 'Ecosystem Clusters',
                                    icon: GitMerge,
                                    tags: ['Cluster Mapping', 'Tier-1 Buyers']
                                },
                                {
                                    title: 'Revenue Corridor Discovery',
                                    description: 'Longitudinal modeling of active commercial corridors with accelerating import velocity.',
                                    path: '/global-acceleration/demand-networks#revenue-corridor-discovery',
                                    badge: 'Corridor Velocity',
                                    icon: TrendingUp,
                                    tags: ['Trade Flows', 'Unmet Demand']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'export-growth-engine',
                    title: 'Export Growth Engine',
                    desc: 'Institutional export acceleration architecture engineered to acquire foreign buyers and scale velocity',
                    path: '/global-acceleration/export-growth-engine',
                    badge: '',
                    icon: TrendingUp,
                    columns: [
                        {
                            header: 'Readiness & GTM Strategy',
                            badge: 'Foundation',
                            icon: Compass,
                            cards: [
                                {
                                    title: 'Export Readiness Assessment',
                                    description: 'Operational, compliance, and product diagnostic scoring enterprise export viability.',
                                    path: '/global-acceleration/export-growth-engine#export-readiness-assessment',
                                    badge: 'Readiness Score',
                                    icon: Compass,
                                    tags: ['Export Diagnostic', 'Readiness Score']
                                },
                                {
                                    title: 'Export GTM Strategy',
                                    description: 'End-to-end go-to-market architecture tailored to customs regimes and regional habits.',
                                    path: '/global-acceleration/export-growth-engine#export-gtm-strategy',
                                    badge: 'GTM Architecture',
                                    icon: Rocket,
                                    tags: ['Corridor Blueprint', 'Customs Regimes']
                                },
                                {
                                    title: 'International Buyer Acquisition',
                                    description: 'Multi-channel engagement securing direct commercial meetings with verified cross-border buyers.',
                                    path: '/global-acceleration/export-growth-engine#international-buyer-acquisition',
                                    badge: 'Buyer Conversion',
                                    icon: UserCheck,
                                    tags: ['Cross-Border Meetings', 'Decision Makers']
                                },
                                {
                                    title: 'Export Lead Generation',
                                    description: 'Continuous pipeline generation feeding commercial reps with pre-qualified international purchasing inquiries.',
                                    path: '/global-acceleration/export-growth-engine#export-lead-generation',
                                    badge: 'Lead Gen',
                                    icon: Zap,
                                    tags: ['Inbound Corridors', 'Pre-Qualified']
                                }
                            ]
                        },
                        {
                            header: 'Channels & Trade Programs',
                            badge: 'Execution',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'International Channel Development',
                                    description: 'Structuring, contracting, and incentivizing foreign distribution channels for sustainable throughput.',
                                    path: '/global-acceleration/export-growth-engine#international-channel-development',
                                    badge: 'Channel Contracts',
                                    icon: Handshake,
                                    tags: ['Volume Quotas', 'Channel Incentive']
                                },
                                {
                                    title: 'Trade Promotion Programs',
                                    description: 'Strategic execution of bilateral trade missions, subsidies, and export incentives.',
                                    path: '/global-acceleration/export-growth-engine#trade-promotion-programs',
                                    badge: 'Trade Programs',
                                    icon: Award,
                                    tags: ['Export Incentives', 'Bilateral Missions']
                                },
                                {
                                    title: 'Trade Event Intelligence',
                                    description: 'Event intelligence mapping international congresses, reverse expos, and buyer delegations.',
                                    path: '/global-acceleration/export-growth-engine#trade-event-intelligence',
                                    badge: 'Event Telemetry',
                                    icon: Radar,
                                    tags: ['Congress Mapping', 'Executive Meetings']
                                },
                                {
                                    title: 'Export Revenue Programs',
                                    description: 'Structured commercial campaigns orchestrating pipeline conversion across cross-border accounts.',
                                    path: '/global-acceleration/export-growth-engine#export-revenue-programs',
                                    badge: 'Revenue Programs',
                                    icon: BarChart3,
                                    tags: ['Campaign Ops', 'Contract Execution']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'strategic-partner-ecosystems',
                    title: 'Strategic Partner Ecosystems',
                    desc: 'Enterprise ecosystem architecture establishing co-sell alliances and master distribution networks',
                    path: '/global-acceleration/partner-ecosystems',
                    badge: '',
                    icon: Users,
                    columns: [
                        {
                            header: 'Distribution & Alliances',
                            badge: 'Indirect GTM',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Channel Partner Networks',
                                    description: 'Systematic tiering and governance of multi-tier certified solution providers.',
                                    path: '/global-acceleration/partner-ecosystems#channel-partner-networks',
                                    badge: 'Network Tiering',
                                    icon: Users,
                                    tags: ['Partner Governance', 'Quota Structuring']
                                },
                                {
                                    title: 'Distributor Partnerships',
                                    description: 'Master commercial structuring aligning quotas, territory exclusivity, and margins.',
                                    path: '/global-acceleration/partner-ecosystems#distributor-partnerships',
                                    badge: 'Commercial Align',
                                    icon: Handshake,
                                    tags: ['Margin Schedules', 'Exclusivity Terms']
                                },
                                {
                                    title: 'Strategic Alliances',
                                    description: 'High-impact co-innovation and co-marketing partnerships with complementary leaders.',
                                    path: '/global-acceleration/partner-ecosystems#strategic-alliances',
                                    badge: 'Alliances',
                                    icon: Shield,
                                    tags: ['Co-Selling Fabric', 'Joint Headroom']
                                },
                                {
                                    title: 'Joint Venture Opportunities',
                                    description: 'Structured identification and commercial modeling for regional equity partnerships.',
                                    path: '/global-acceleration/partner-ecosystems#joint-venture-opportunities',
                                    badge: 'JV Structuring',
                                    icon: Scale,
                                    tags: ['Local Equity', 'Shared Governance']
                                }
                            ]
                        },
                        {
                            header: 'Integrations & Programs',
                            badge: 'Ecosystem',
                            icon: GitMerge,
                            cards: [
                                {
                                    title: 'Technology Partnerships',
                                    description: 'API and product integrations embedding your solution into dominant regional tech stacks.',
                                    path: '/global-acceleration/partner-ecosystems#technology-partnerships',
                                    badge: 'Tech Integrations',
                                    icon: Cpu,
                                    tags: ['API Ecosystem', 'Stack Embed']
                                },
                                {
                                    title: 'Industry Associations',
                                    description: 'Executive engagement and institutional sponsorship across high-influence regional industry bodies.',
                                    path: '/global-acceleration/partner-ecosystems#industry-associations',
                                    badge: 'Associations',
                                    icon: Landmark,
                                    tags: ['Industry Leadership', 'Policy Alignment']
                                },
                                {
                                    title: 'Government Trade Programs',
                                    description: 'Leveraging bilateral commerce ministries, export promotion councils, and state development grants.',
                                    path: '/global-acceleration/partner-ecosystems#government-trade-programs',
                                    badge: 'Government Grants',
                                    icon: Award,
                                    tags: ['Ministry Programs', 'Export Subsidies']
                                },
                                {
                                    title: 'Ecosystem Development',
                                    description: 'Fostering community, developer, and reseller networks that generate compounding inbound referral volume.',
                                    path: '/global-acceleration/partner-ecosystems#ecosystem-development',
                                    badge: 'Compounding Scale',
                                    icon: Network,
                                    tags: ['Inbound Referrals', 'Developer Mesh']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'global-supply-networks',
                    title: 'Global Supply Networks',
                    desc: 'Intelligence and mapping frameworks to optimize cross-border supply chains, manufacturing, and fulfillment',
                    path: '/global-acceleration/supply-networks',
                    badge: '',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Sourcing & Manufacturing',
                            badge: 'Procurement',
                            icon: Factory,
                            cards: [
                                {
                                    title: 'Supplier Discovery',
                                    description: 'Algorithmic sourcing and qualification of regional component manufacturers and OEMs.',
                                    path: '/global-acceleration/supply-networks#supplier-discovery',
                                    badge: 'Supplier Sourcing',
                                    icon: Factory,
                                    tags: ['OEM Qualification', 'Component Sourcing']
                                },
                                {
                                    title: 'Procurement Ecosystem Mapping',
                                    description: 'Complete visibility into secondary and tertiary sub-tier supplier dependencies and capacity limits.',
                                    path: '/global-acceleration/supply-networks#procurement-ecosystem-mapping',
                                    badge: 'Tier-2 Mapping',
                                    icon: Network,
                                    tags: ['Sub-Tier Visibility', 'Capacity Limits']
                                },
                                {
                                    title: 'Manufacturing Partner Discovery',
                                    description: 'Identifying ISO-certified contract manufacturers with audited capacity and quality.',
                                    path: '/global-acceleration/supply-networks#manufacturing-partner-discovery',
                                    badge: 'ISO Standards',
                                    icon: Building,
                                    tags: ['Contract Mfg', 'Audited Capacity']
                                },
                                {
                                    title: 'Logistics Network Design',
                                    description: 'Multi-modal freight optimization balancing maritime, air, and overland corridors.',
                                    path: '/global-acceleration/supply-networks#logistics-network-design',
                                    badge: 'Multi-Modal',
                                    icon: Box,
                                    tags: ['Transit Time', 'Freight Margin']
                                }
                            ]
                        },
                        {
                            header: 'Logistics & Resilience',
                            badge: 'Continuity',
                            icon: Box,
                            cards: [
                                {
                                    title: 'Vendor Intelligence',
                                    description: 'Financial health checks, ESG compliance audits, and commercial reliability scoring across suppliers.',
                                    path: '/global-acceleration/supply-networks#vendor-intelligence',
                                    badge: 'Vendor Health',
                                    icon: ShieldCheck,
                                    tags: ['Financial Audit', 'Reliability Index']
                                },
                                {
                                    title: 'Trade Route Optimization',
                                    description: 'Real-time tracking and routing around customs bottlenecks, maritime chokepoints, and tariff zones.',
                                    path: '/global-acceleration/supply-networks#trade-route-optimization',
                                    badge: 'Route Velocity',
                                    icon: Compass,
                                    tags: ['Chokepoint Bypass', 'Customs Transit']
                                },
                                {
                                    title: 'Supply Chain Risk Assessment',
                                    description: 'Vulnerability indexing for single-source dependencies and geopolitical disruption.',
                                    path: '/global-acceleration/supply-networks#supply-chain-risk-assessment',
                                    badge: 'Resilience Audit',
                                    icon: AlertCircle,
                                    tags: ['Disruption Hedging', 'Single-Source Risk']
                                },
                                {
                                    title: 'Cross-Border Operations',
                                    description: 'Streamlining customs declarations, bonded warehousing, and localized inventory fulfillment staging.',
                                    path: '/global-acceleration/supply-networks#cross-border-operations',
                                    badge: 'Bonded Warehousing',
                                    icon: Layers,
                                    tags: ['Customs Declarations', 'Local Staging']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'global-revenue-engines',
                    title: 'Global Revenue Engines',
                    desc: 'Institutional revenue infrastructure orchestrating multi-region pipeline velocity and execution',
                    path: '/global-acceleration/revenue-engines',
                    badge: '',
                    icon: BarChart3,
                    columns: [
                        {
                            header: 'GTM Design & Territories',
                            badge: 'Infrastructure',
                            icon: Workflow,
                            cards: [
                                {
                                    title: 'Multi-Country GTM Design',
                                    description: 'Unified operating models defining regional quota ratios and compensation grids.',
                                    path: '/global-acceleration/revenue-engines#multi-country-gtm-design',
                                    badge: 'Operating Model',
                                    icon: Workflow,
                                    tags: ['Regional Quotas', 'Operating Model']
                                },
                                {
                                    title: 'Territory Planning',
                                    description: 'Dynamic account routing based on market capacity and localized language coverage.',
                                    path: '/global-acceleration/revenue-engines#territory-planning',
                                    badge: 'Dynamic Routing',
                                    icon: Compass,
                                    tags: ['Account Routing', 'Capacity Planning']
                                },
                                {
                                    title: 'Regional Revenue Hubs',
                                    description: 'Shared services blueprint for localized customer onboarding, technical pre-sales, and tier-1 support.',
                                    path: '/global-acceleration/revenue-engines#regional-revenue-hubs',
                                    badge: 'Shared Services',
                                    icon: Building2,
                                    tags: ['Regional Hubs', 'Pre-Sales Pods']
                                },
                                {
                                    title: 'Multi-Language SDR Operations',
                                    description: 'Native-fluency outbound prospecting frameworks operating across 12+ timezones.',
                                    path: '/global-acceleration/revenue-engines#multi-language-sdr-operations',
                                    badge: '24/7 Prospecting',
                                    icon: Bot,
                                    tags: ['15+ Dialects', 'Zero Response Lag']
                                }
                            ]
                        },
                        {
                            header: 'Operations & Intelligence',
                            badge: 'Velocity',
                            icon: Gauge,
                            cards: [
                                {
                                    title: 'International Pipeline Management',
                                    description: 'Unified deal inspection frameworks eliminating cross-border reporting latency and currency distortions.',
                                    path: '/global-acceleration/revenue-engines#international-pipeline-management',
                                    badge: 'Deal Inspection',
                                    icon: LineChart,
                                    tags: ['Multi-Currency CRM', 'Zero Latency']
                                },
                                {
                                    title: 'Revenue Intelligence',
                                    description: 'Algorithmic signal detection monitoring win/loss drivers and regional sales velocity.',
                                    path: '/global-acceleration/revenue-engines#revenue-intelligence',
                                    badge: 'Signal Detection',
                                    icon: Activity,
                                    tags: ['Win/Loss Drivers', 'Pipeline Velocity']
                                },
                                {
                                    title: 'Customer Success Operations',
                                    description: 'Proactive health monitoring and localized renewal playbooks preserving multi-currency Net Revenue Retention.',
                                    path: '/global-acceleration/revenue-engines#customer-success-operations',
                                    badge: 'Retention Engine',
                                    icon: UserCheck,
                                    tags: ['NRR Preservation', 'Localized Renewals']
                                },
                                {
                                    title: 'Revenue Performance Optimization',
                                    description: 'Continuous testing of messaging, pricing concessions, and contracting cycles across regional buyer cohorts.',
                                    path: '/global-acceleration/revenue-engines#revenue-performance-optimization',
                                    badge: 'Continuous Testing',
                                    icon: RefreshCw,
                                    tags: ['Discount Control', 'Contract Velocity']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'global-capital-finance',
                    title: 'Global Capital & Finance',
                    desc: 'Financial ecosystem discovery, trade finance facilitation, and treasury advisory for expansion',
                    path: '/global-acceleration/capital-finance',
                    badge: '',
                    icon: DollarSign,
                    columns: [
                        {
                            header: 'Trade & Export Finance',
                            badge: 'Working Capital',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Trade Finance Solutions',
                                    description: 'Connecting letters of credit, invoice factoring, and export receivables facilities.',
                                    path: '/global-acceleration/capital-finance#trade-finance-solutions',
                                    badge: 'Credit Lines',
                                    icon: DollarSign,
                                    tags: ['LC Facility', 'Receivables Factoring']
                                },
                                {
                                    title: 'Export Financing',
                                    description: 'Navigating state export credit lines, buyer guarantees, and pre-shipment facilities.',
                                    path: '/global-acceleration/capital-finance#export-financing',
                                    badge: 'Credit Guarantees',
                                    icon: Coins,
                                    tags: ['ECA Backed', 'Pre-Shipment Lines']
                                },
                                {
                                    title: 'International Banking Networks',
                                    description: 'Mapping correspondent banking relationships for treasury and FX settlements.',
                                    path: '/global-acceleration/capital-finance#international-banking-networks',
                                    badge: 'Correspondent FX',
                                    icon: Landmark,
                                    tags: ['FX Settlement', 'Multi-Currency']
                                },
                                {
                                    title: 'Cross-Border Payments',
                                    description: 'Architecture for multi-currency merchant processing, localized payment gateways, and hedging transaction fees.',
                                    path: '/global-acceleration/capital-finance#cross-border-payments',
                                    badge: 'Multi-Currency Gateway',
                                    icon: DollarSign,
                                    tags: ['Payment Gateways', 'FX Hedging']
                                }
                            ]
                        },
                        {
                            header: 'Treasury & Institutions',
                            badge: 'Connectivity',
                            icon: Landmark,
                            cards: [
                                {
                                    title: 'Export Credit Agencies',
                                    description: 'Engaging institutional ECAs (EXIM, Euler Hermes) to mitigate buyer default risks.',
                                    path: '/global-acceleration/capital-finance#export-credit-agencies',
                                    badge: 'Default Risk',
                                    icon: ShieldCheck,
                                    tags: ['ECA Engagement', 'Sovereign Coverage']
                                },
                                {
                                    title: 'Development Finance Institutions',
                                    description: 'Exploring multilateral development finance (IFC, EBRD, ADB) for emerging market infrastructure and scale.',
                                    path: '/global-acceleration/capital-finance#development-finance-institutions',
                                    badge: 'DFI Facilities',
                                    icon: Building,
                                    tags: ['Multilateral Capital', 'Scale Facilities']
                                },
                                {
                                    title: 'Investor & Capital Access',
                                    description: 'Readiness advisory connecting cross-border ventures with international growth equity and debt syndicates.',
                                    path: '/global-acceleration/capital-finance#investor-capital-access',
                                    badge: 'Growth Syndicates',
                                    icon: TrendingUp,
                                    tags: ['Growth Equity', 'Debt Syndication']
                                },
                                {
                                    title: 'Global Treasury Advisory',
                                    description: 'Optimizing transfer pricing compliance, multi-jurisdiction tax efficiency, and dividend repatriation paths.',
                                    path: '/global-acceleration/capital-finance#global-treasury-advisory',
                                    badge: 'Treasury Advisory',
                                    icon: Scale,
                                    tags: ['Transfer Pricing', 'Repatriation Paths']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'ai-powered-expansion',
                    title: 'AI-Powered Expansion',
                    desc: 'Autonomous AI agent architecture delivering 24/7 market telemetry, buyer prospecting, and command',
                    path: '/global-acceleration/ai-powered-expansion',
                    badge: '',
                    icon: Cpu,
                    columns: [
                        {
                            header: 'Autonomous Discovery',
                            badge: 'Swarms',
                            icon: BrainCircuit,
                            cards: [
                                {
                                    title: 'AI Market Intelligence',
                                    description: 'Continuous agentic scanning of foreign registry filings and trade journals.',
                                    path: '/global-acceleration/ai-powered-expansion#ai-market-intelligence',
                                    badge: '24/7 Radar',
                                    icon: Radar,
                                    tags: ['Registry Scans', 'Tender Monitoring']
                                },
                                {
                                    title: 'AI Buyer Discovery',
                                    description: 'Autonomous identification and enrichment of cross-border executive decision-makers.',
                                    path: '/global-acceleration/ai-powered-expansion#ai-buyer-discovery',
                                    badge: 'Autonomous Enrichment',
                                    icon: Target,
                                    tags: ['Intent Discovery', 'C-Suite Leads']
                                },
                                {
                                    title: 'AI Distributor Discovery',
                                    description: 'Automated profiling and scoring of regional distributor capacity, brand portfolios, and operational readiness.',
                                    path: '/global-acceleration/ai-powered-expansion#ai-distributor-discovery',
                                    badge: 'Distributor AI',
                                    icon: Building2,
                                    tags: ['Distributor Scoring', 'Capacity Profiling']
                                },
                                {
                                    title: 'AI Partner Matching',
                                    description: 'Algorithmic compatibility scoring matching enterprise products with regional VAR and integrator portfolios.',
                                    path: '/global-acceleration/ai-powered-expansion#ai-partner-matching',
                                    badge: 'Partner Match',
                                    icon: GitMerge,
                                    tags: ['VAR Matching', 'Compatibility Score']
                                }
                            ]
                        },
                        {
                            header: 'Agentic Operations',
                            badge: 'Autonomous Exec',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'AI Localization Engines',
                                    description: 'Context-aware adaptation of sales collateral, contracts, and filings into 15+ native business dialects.',
                                    path: '/global-acceleration/ai-powered-expansion#ai-localization-engines',
                                    badge: 'Localization Swarms',
                                    icon: Globe,
                                    tags: ['15+ Dialects', 'Legal Adaptation']
                                },
                                {
                                    title: 'AI Revenue Agents',
                                    description: '24/7 autonomous SDR and lead qualification agents conducting outbound correspondence.',
                                    path: '/global-acceleration/ai-powered-expansion#ai-revenue-agents',
                                    badge: 'Autonomous SDR',
                                    icon: Bot,
                                    tags: ['15+ Languages', 'Autonomous Pitch']
                                },
                                {
                                    title: 'Autonomous Expansion Workflows',
                                    description: 'Self-orchestrating task workflows connecting research, CRM enrichment, compliance checks, and outreach.',
                                    path: '/global-acceleration/ai-powered-expansion#autonomous-expansion-workflows',
                                    badge: 'Agent Workflows',
                                    icon: Workflow,
                                    tags: ['Orchestrated Tasks', 'CRM Integration']
                                },
                                {
                                    title: 'Global Intelligence Command Center',
                                    description: 'Unified executive telemetry dashboard aggregating pipeline and risk metrics.',
                                    path: '/global-acceleration/ai-powered-expansion#global-intelligence-command-center',
                                    badge: 'Cockpit View',
                                    icon: Gauge,
                                    tags: ['Cross-Border Telemetry', 'Risk Alerts']
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
        if (menu.categories[0]) setActiveCategoryId(menu.categories[0].id);
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
                if (targetMenu && targetMenu.categories && targetMenu.categories.length > 0 && targetMenu.categories[0]) {
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

    // Smooth navigation helper for sub-menu and sub-sub menu clicks with hashes
    const handleSubMenuCardClick = (path: string) => {
        setActiveMenuId(null);
        setMobileOpen(false);
        if (path.includes('#')) {
            const [targetPath, rawHash] = path.split('#');
            const hash = decodeURIComponent(rawHash);
            if (location.pathname === targetPath || (!targetPath && location.pathname)) {
                const el = document.getElementById(hash) || 
                           document.getElementById(hash.toLowerCase()) ||
                           document.querySelector('[name="' + hash + '"]') ||
                           document.querySelector('[data-section-id="' + hash + '"]');
                if (el) {
                    const navOffset = 85;
                    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = Math.max(0, elementPosition - navOffset);
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        }
    };

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
                const categoryConfig = (offeringsArchitecture.find(c => c.id === currentCategory.id) || industriesArchitecture.find(c => c.id === currentCategory.id)) as any;
                const displayOutcomeBadge = categoryConfig?.keyRevenueOutcome || activeConfig.outcomeBadge;
                const displayRecommendedFor = categoryConfig?.recommendedIndustries || activeConfig.recommendedFor;
                const displayBusinessImpacts = categoryConfig?.businessImpacts || activeConfig.businessImpacts;
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
                                    <aside className="w-full lg:w-[260px] xl:w-[275px] bg-slate-50/95 text-slate-900 p-3 sm:p-3.5 flex flex-col justify-between shrink-0 border-r border-slate-200/80">
                                        <div className={`${currentMenu.categories.length > 7 ? 'space-y-1' : 'space-y-2'}`}>
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
                                            <nav className={ `pt-0.5 ${currentMenu.categories.length > 7 ? "space-y-px" : "space-y-1"}` }>
                                                {currentMenu.categories.map((cat) => {
                                                    const isCatActive = currentCategory?.id === cat.id;

                                                    return (
                                                        <div
                                                            key={cat.id}
                                                            onMouseEnter={() => setActiveCategoryId(cat.id)}
                                                            onClick={() => setActiveCategoryId(cat.id)}
                                                            className={`w-full group px-2.5 rounded-lg text-xs font-bold transition-all duration-150 flex items-center justify-between cursor-pointer border ${currentMenu.categories.length > 7 ? "py-1" : "py-1.5"} ${
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
                                    <main className="flex-1 bg-white p-3 sm:p-4 flex flex-col">
                                        {/* Top Section: Header + Cards Grid */}
                                        <div className="space-y-2">
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
                                                        {displayOutcomeBadge}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Main Content Grid: Cards fill space proportionally (flex-1) */}
                                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 content-start ${allLinks.length > 6 ? 'max-h-[240px] overflow-y-auto pr-1' : ''}`}>
                                                {allLinks.map((card, idx) => {
                                                    const CardIcon = card.icon || Target;

                                                    return (
                                                        <Link
                                                            key={idx}
                                                            to={card.path}
                                                            onClick={() => handleSubMenuCardClick(card.path)}
                                                            className="group p-3 rounded-xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-xs transition-all duration-150 flex items-start gap-2.5 cursor-pointer"
                                                        >
                                                            <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 text-blue-600 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5">
                                                                <CardIcon className="w-3.5 h-3.5" />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
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
                                                    {displayRecommendedFor.map((item, iIdx) => (
                                                        <span key={iIdx} className="inline-flex items-center gap-1 font-medium text-slate-700">
                                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                                            <span>{item}</span>
                                                            {iIdx < displayRecommendedFor.length - 1 && <span className="text-slate-300">•</span>}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                                    <span className="font-bold text-slate-800">Business Impact:</span>
                                                    {displayBusinessImpacts.map((imp, mIdx) => (
                                                        <span key={mIdx} className="inline-flex items-center gap-1 font-medium text-slate-700">
                                                            <CheckCircle2 className="w-3 h-3 text-blue-600" />
                                                            <span>{imp}</span>
                                                            {mIdx < displayBusinessImpacts.length - 1 && <span className="text-slate-300">•</span>}
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
                                                                                    onClick={() => handleSubMenuCardClick(card.path)}
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
