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
    Percent, GitMerge, Award, Workflow, Gauge, Calculator, LogIn, LogOut, User,
    AlertTriangle, Mail, MessageSquare, FolderGit2, Database
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

import {
    offeringsArchitecture,
    industriesArchitecture,
    OfferingCategoryDetail,
    OfferingCapabilityItem,
    IndustryCategoryDetail,
    IndustryCapabilityItem
} from '../../data/navigationArchitecture';
import { RESOURCES_HUB_CATEGORIES } from '../../data/resourcesHubData';

export { offeringsArchitecture, industriesArchitecture };
export type { OfferingCategoryDetail, OfferingCapabilityItem, IndustryCategoryDetail, IndustryCapabilityItem };


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
    'resources-hub': {
        badge: 'Enterprise Knowledge Hub',
        tagline: '12 Curated Resource Hubs',
        title: 'Complete Resources Hub',
        description: 'Explore business intelligence, analytical models, practical frameworks, and interactive calculators engineered for scalable growth.',
        kpi: '12 Hubs',
        kpiLabel: 'Curated Categories',
        path: '/resources-hub',
        ctaText: 'Explore Resources Hub',
        icon: BookOpen,
        accentGlow: 'from-blue-600/30 to-indigo-700/30'
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
    'resources-hub': {
        sectionTag: 'RESOURCES',
        capabilitiesLabel: 'CURATED RESOURCE CLUSTERS',
        outcomeBadge: '12 Complete Categories',
        recommendedFor: ['Enterprise Executives', 'Revenue Leaders', 'Operational Teams'],
        businessImpacts: [
            '12 Dedicated Category Hubs',
            'Approved 25 Mathematical Models',
            'Interactive Diagnostics & Tools'
        ],
        ctaText: 'Explore Resources Hub'
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
    const { user, isAuthenticated, logout } = useAuth();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const [activeCategoryId, setActiveCategoryId] = useState<string>('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
    const [mobileExpandedCategories, setMobileExpandedCategories] = useState<Record<string, boolean>>({});
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Close user dropdown menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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
                // 1. REVENUE INTELLIGENCE
                {
                    id: "revenue-intelligence",
                    title: "Revenue Intelligence",
                    desc: "Understand buyers, accounts, stakeholders and market signals before engaging them.",
                    path: "/ai-native-sales/revenue-intelligence",
                    badge: "8 Capabilities",
                    icon: Radar,
                    columns: [
                        {
                            header: "Buyer & Account Telemetry",
                            badge: "Signals",
                            icon: Radar,
                            cards: [
                                {
                                    title: "Buyer Intelligence",
                                    description: "Surfaces dark-funnel buying surges, vendor comparison activity, and solution research.",
                                    path: "/ai-native-sales/revenue-intelligence#buyer-intelligence",
                                    badge: "Intent Velocity",
                                    icon: Activity,
                                    tags: ["Dark Funnel","Buyer Signals"]
                                },
                                {
                                    title: "Account Intelligence",
                                    description: "Synthesizes enterprise 10-Ks, technographic stacks, and strategic initiatives.",
                                    path: "/ai-native-sales/revenue-intelligence#account-intelligence",
                                    badge: "Account 360",
                                    icon: Layers,
                                    tags: ["SEC Filings","Tech Stack"]
                                },
                                {
                                    title: "Buying Committee Intelligence",
                                    description: "Maps economic buyers, technical evaluators, champions, and consensus gaps.",
                                    path: "/ai-native-sales/revenue-intelligence#buying-committee-intelligence",
                                    badge: "Stakeholder Graph",
                                    icon: Users,
                                    tags: ["Consensus","Influence Map"]
                                },
                                {
                                    title: "Market Signal Intelligence",
                                    description: "Monitors macro market indicators, regulatory enforcement, and competitor triggers.",
                                    path: "/ai-native-sales/revenue-intelligence#market-signal-intelligence",
                                    badge: "Macro Telemetry",
                                    icon: ShieldCheck,
                                    tags: ["Triggers","Displacement"]
                                }
                            ]
                        },
                        {
                            header: "Intent & Predictive Analytics",
                            badge: "Predictive",
                            icon: LineChart,
                            cards: [
                                {
                                    title: "Intent Data Intelligence",
                                    description: "Analyzes programmatic content surges, whitepaper downloads, and search velocity.",
                                    path: "/ai-native-sales/revenue-intelligence#intent-data-intelligence",
                                    badge: "Surge Scoring",
                                    icon: Zap,
                                    tags: ["In-Market","Surges"]
                                },
                                {
                                    title: "Customer 360 Intelligence",
                                    description: "Unifies fragmented CRM records, billing telemetry, and executive interactions.",
                                    path: "/ai-native-sales/revenue-intelligence#customer-360-intelligence",
                                    badge: "Unified 360",
                                    icon: Target,
                                    tags: ["Relationship Graph","Unified Data"]
                                },
                                {
                                    title: "Competitive Intelligence",
                                    description: "Live battlecards, feature vulnerability analyses, and pricing displacement matrices.",
                                    path: "/ai-native-sales/revenue-intelligence#competitive-intelligence",
                                    badge: "Battlecards AI",
                                    icon: AlertTriangle,
                                    tags: ["Displacement","Win Rate"]
                                },
                                {
                                    title: "Revenue Forecast Intelligence",
                                    description: "Deterministic forecast models evaluating deal progression velocity and committee engagement.",
                                    path: "/ai-native-sales/revenue-intelligence#revenue-forecast-intelligence",
                                    badge: "Forecast ML",
                                    icon: TrendingUp,
                                    tags: ["Predictability","Pipeline Risk"]
                                }
                            ]
                        }
                    ]
                },

                // 2. AUTONOMOUS PIPELINE GENERATION
                {
                    id: "autonomous-pipeline-generation",
                    title: "Autonomous Pipeline Generation",
                    desc: "Identify ideal customers and continuously build qualified sales pipeline.",
                    path: "/ai-native-sales/autonomous-pipeline-generation",
                    badge: "8 Capabilities",
                    icon: Target,
                    columns: [
                        {
                            header: "Targeting & Discovery",
                            badge: "Outbound",
                            icon: Target,
                            cards: [
                                {
                                    title: "ICP Discovery Engine",
                                    description: "Analyzes closed-won opportunities and retention data to reverse-engineer mathematical ICP definitions.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#icp-discovery-engine",
                                    badge: "Neural ICP Match",
                                    icon: Target,
                                    tags: ["Ideal Customer","Clustering"]
                                },
                                {
                                    title: "Target Account Identification",
                                    description: "Identifies, verifies, and prioritizes target enterprise accounts using deterministic propensity scoring.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#target-account-identification",
                                    badge: "Account Selection",
                                    icon: Layers,
                                    tags: ["Propensity","Target Accounts"]
                                },
                                {
                                    title: "AI Prospect Research",
                                    description: "Compiles in-depth executive dossiers summarizing strategic objectives and technical viewpoints.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#ai-prospect-research",
                                    badge: "Executive Profiler",
                                    icon: Users,
                                    tags: ["Executive Briefs","Research"]
                                },
                                {
                                    title: "Lead Discovery Engine",
                                    description: "Uncovers verified decision-makers inside target accounts with direct contact coordinates.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#lead-discovery-engine",
                                    badge: "Entity Enrichment",
                                    icon: Zap,
                                    tags: ["Direct Dials","Deliverability"]
                                }
                            ]
                        },
                        {
                            header: "Swarms & Qualification",
                            badge: "Swarm AI",
                            icon: Bot,
                            cards: [
                                {
                                    title: "Pipeline Generation AI",
                                    description: "Coordinates end-to-end outbound pipeline creation workflows from account selection to scheduling.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#pipeline-generation-ai",
                                    badge: "Qualified Pipeline",
                                    icon: TrendingUp,
                                    tags: ["Predictable Pipeline","Meetings"]
                                },
                                {
                                    title: "AI Prospecting Swarm",
                                    description: "Deploys coordinated swarms of specialized micro-agents collaborating on target accounts.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#ai-prospecting-swarm",
                                    badge: "Agentic Swarms",
                                    icon: Bot,
                                    tags: ["Agent Swarms","Multi-Agent"]
                                },
                                {
                                    title: "Lead Qualification Intelligence",
                                    description: "Evaluates conversation transcripts and telemetry to score BANT and MEDDPICC criteria objectively.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#lead-qualification-intelligence",
                                    badge: "Objective BANT",
                                    icon: CheckCircle2,
                                    tags: ["MEDDPICC","Verification"]
                                },
                                {
                                    title: "Pipeline Acceleration Engine",
                                    description: "Monitors pipeline stage dwell times, identifying bottlenecks and triggering re-engagement plays.",
                                    path: "/ai-native-sales/autonomous-pipeline-generation#pipeline-acceleration-engine",
                                    badge: "Velocity Booster",
                                    icon: Activity,
                                    tags: ["Bottlenecks","Progression"]
                                }
                            ]
                        }
                    ]
                },

                // 3. AUTONOMOUS SALES ENGAGEMENT
                {
                    id: "autonomous-sales-engagement",
                    title: "Autonomous Sales Engagement",
                    desc: "Create relevant, personalized and coordinated buyer interactions.",
                    path: "/ai-native-sales/autonomous-sales-engagement",
                    badge: "8 Capabilities",
                    icon: Zap,
                    columns: [
                        {
                            header: "Personalization & Outreach",
                            badge: "Engagement",
                            icon: Zap,
                            cards: [
                                {
                                    title: "Hyper-Personalization Engine",
                                    description: "Generates persona-specific commercial messaging grounded in real-time corporate filings.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#hyper-personalization-engine",
                                    badge: "Contextual Synthesis",
                                    icon: Sparkles,
                                    tags: ["Persona Copy","Relevance"]
                                },
                                {
                                    title: "Autonomous Email Engagement",
                                    description: "Governed email workflows adapting cadence frequency and tone based on buyer telemetry.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#autonomous-email-engagement",
                                    badge: "Governed Inboxing",
                                    icon: Mail,
                                    tags: ["Inbox Health","Smart Cadence"]
                                },
                                {
                                    title: "AI Sales Outreach",
                                    description: "Coordinates multi-touch outreach campaigns synchronizing email, phone, and social touches.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#ai-sales-outreach",
                                    badge: "Multi-Touch",
                                    icon: Network,
                                    tags: ["Omnichannel","Sequence"]
                                },
                                {
                                    title: "Conversation Intelligence",
                                    description: "Transcribes, analyzes, and summarizes sales calls in real time, extracting action items.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#conversation-intelligence",
                                    badge: "Live Transcription",
                                    icon: Radio,
                                    tags: ["Call Insights","Next Steps"]
                                }
                            ]
                        },
                        {
                            header: "Buyer Enablement & Consensus",
                            badge: "Consensus",
                            icon: Users,
                            cards: [
                                {
                                    title: "Multichannel Engagement",
                                    description: "Unifies buyer touchpoints across all digital channels into a singular conversation thread.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#multichannel-engagement",
                                    badge: "Unified Touchpoints",
                                    icon: MessageSquare,
                                    tags: ["Cross-Channel","Continuity"]
                                },
                                {
                                    title: "Buyer Enablement Engine",
                                    description: "Provisions personalized Digital Sales Rooms with mutual action plans and interactive ROI models.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#buyer-enablement-engine",
                                    badge: "Digital Sales Rooms",
                                    icon: FolderGit2,
                                    tags: ["DSRs","Champion Enablement"]
                                },
                                {
                                    title: "Stakeholder Consensus Acceleration",
                                    description: "Maps conflicting committee priorities and recommends compromise frameworks to build consensus.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#stakeholder-consensus-acceleration",
                                    badge: "Consensus AI",
                                    icon: Users,
                                    tags: ["Stakeholder Alignment","De-Risk"]
                                },
                                {
                                    title: "Intelligent Follow-Up Automation",
                                    description: "Generates context-aware follow-up packages containing exact meeting summaries within minutes.",
                                    path: "/ai-native-sales/autonomous-sales-engagement#intelligent-follow-up-automation",
                                    badge: "Smart Cadences",
                                    icon: Clock,
                                    tags: ["Turnaround","Action Items"]
                                }
                            ]
                        }
                    ]
                },

                // 4. INTELLIGENT SALES AGENTS
                {
                    id: "intelligent-sales-agents",
                    title: "Intelligent Sales Agents",
                    desc: "Deploy specialized AI agents across the sales lifecycle.",
                    path: "/ai-native-sales/intelligent-sales-agents",
                    badge: "8 Capabilities",
                    icon: Bot,
                    columns: [
                        {
                            header: "Frontline Sales Agents",
                            badge: "Autonomous",
                            icon: Bot,
                            cards: [
                                {
                                    title: "AI SDR Agent",
                                    description: "Executes early-stage prospecting workflows, enriches inbounds, and drafts personalized outreach.",
                                    path: "/ai-native-sales/intelligent-sales-agents#ai-sdr-agent",
                                    badge: "Inbound/Outbound",
                                    icon: Bot,
                                    tags: ["Speed to Lead","Qualification"]
                                },
                                {
                                    title: "AI BDR Agent",
                                    description: "Conducts deep-dive account development across tier-1 enterprise targets and executive mapping.",
                                    path: "/ai-native-sales/intelligent-sales-agents#ai-bdr-agent",
                                    badge: "Strategic BDR",
                                    icon: Target,
                                    tags: ["Enterprise Accounts","Blueprints"]
                                },
                                {
                                    title: "Account Executive Agent",
                                    description: "Synthesizes pre-call briefs, tracks stakeholder commitments, and drafts tailored proposal decks.",
                                    path: "/ai-native-sales/intelligent-sales-agents#account-executive-agent",
                                    badge: "Deal Co-Pilot",
                                    icon: Sparkles,
                                    tags: ["Proposal Drafting","Co-Piloting"]
                                },
                                {
                                    title: "Revenue Strategist Agent",
                                    description: "Simulates revenue scenarios, evaluates territory potential, and recommends resource allocation.",
                                    path: "/ai-native-sales/intelligent-sales-agents#revenue-strategist-agent",
                                    badge: "Strategic Advisory",
                                    icon: TrendingUp,
                                    tags: ["Territory Planning","Scenario Sim"]
                                }
                            ]
                        },
                        {
                            header: "Operational & Learning Agents",
                            badge: "Intelligence",
                            icon: Cpu,
                            cards: [
                                {
                                    title: "Sales Research Agent",
                                    description: "Monitors global patent filings, IT job postings, and regulatory triggers to uncover hidden hooks.",
                                    path: "/ai-native-sales/intelligent-sales-agents#sales-research-agent",
                                    badge: "Deep Research",
                                    icon: Radar,
                                    tags: ["Early Triggers","Patents & 10-K"]
                                },
                                {
                                    title: "Sales Operations Agent",
                                    description: "Maintains pristine CRM data hygiene, automates lead-to-account routing, and audits approvals.",
                                    path: "/ai-native-sales/intelligent-sales-agents#sales-operations-agent",
                                    badge: "RevOps Automation",
                                    icon: Database,
                                    tags: ["Data Hygiene","Routing"]
                                },
                                {
                                    title: "Deal Intelligence Agent",
                                    description: "Scans active enterprise opportunities for silent failure patterns and unengaged economic buyers.",
                                    path: "/ai-native-sales/intelligent-sales-agents#deal-intelligence-agent",
                                    badge: "Risk Radar",
                                    icon: AlertTriangle,
                                    tags: ["Deal Health","Slippage Prevention"]
                                },
                                {
                                    title: "Autonomous Learning Agent",
                                    description: "Synthesizes wins and losses across conversations, codifying top-performer techniques into playbooks.",
                                    path: "/ai-native-sales/intelligent-sales-agents#autonomous-learning-agent",
                                    badge: "Continuous Learning",
                                    icon: BrainCircuit,
                                    tags: ["Playbook Codification","Ramp Acceleration"]
                                }
                            ]
                        }
                    ]
                },

                // 5. REVENUE ACCELERATION
                {
                    id: "revenue-acceleration",
                    title: "Revenue Acceleration",
                    desc: "Improve deal progression, sales execution and revenue velocity.",
                    path: "/ai-native-sales/revenue-acceleration",
                    badge: "8 Capabilities",
                    icon: TrendingUp,
                    columns: [
                        {
                            header: "Opportunity & Risk Guidance",
                            badge: "Velocity",
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: "Opportunity Intelligence",
                                    description: "Synthesizes engagement telemetry, interaction frequency, and stage velocity into Deal Health Scores.",
                                    path: "/ai-native-sales/revenue-acceleration#opportunity-intelligence",
                                    badge: "Deal Anatomy",
                                    icon: Activity,
                                    tags: ["Health Scoring","Velocity Index"]
                                },
                                {
                                    title: "Deal Risk Intelligence",
                                    description: "Monitors active opportunities for silent risk signatures: unengaged economic buyers and stalled momentum.",
                                    path: "/ai-native-sales/revenue-acceleration#deal-risk-intelligence",
                                    badge: "Risk Telemetry",
                                    icon: AlertTriangle,
                                    tags: ["Deal War Rooms","Slippage Defense"]
                                },
                                {
                                    title: "Sales Process Optimization",
                                    description: "Identifies systemic bottlenecks across discovery, evaluation, and procurement to streamline stages.",
                                    path: "/ai-native-sales/revenue-acceleration#sales-process-optimization",
                                    badge: "Friction Removal",
                                    icon: ShieldCheck,
                                    tags: ["Cycle Compression","Throughput"]
                                },
                                {
                                    title: "Next Best Action Engine",
                                    description: "Delivers daily, algorithmic action recommendations tailored to each active opportunity.",
                                    path: "/ai-native-sales/revenue-acceleration#next-best-action-engine",
                                    badge: "Action Guidance",
                                    icon: Zap,
                                    tags: ["Prescriptive Next Steps","Impact"]
                                }
                            ]
                        },
                        {
                            header: "Performance & Operations",
                            badge: "Optimization",
                            icon: BarChart3,
                            cards: [
                                {
                                    title: "Pipeline Velocity Optimization",
                                    description: "Applies the Revenue Velocity Equation to isolate and optimize levers holding back ARR growth.",
                                    path: "/ai-native-sales/revenue-acceleration#pipeline-velocity-optimization",
                                    badge: "Velocity Formula",
                                    icon: TrendingUp,
                                    tags: ["Revenue / Day","Win Rate Lift"]
                                },
                                {
                                    title: "Sales Performance Intelligence",
                                    description: "Analyzes call recordings and pipeline habits across the team to deliver individualized coaching.",
                                    path: "/ai-native-sales/revenue-acceleration#sales-performance-intelligence",
                                    badge: "Rep Coaching AI",
                                    icon: Users,
                                    tags: ["Skill Diagnostics","Quota Attainment"]
                                },
                                {
                                    title: "Revenue Operations Intelligence",
                                    description: "Monitors the cross-functional revenue engine, identifying lead handoff leaks and billing discrepancies.",
                                    path: "/ai-native-sales/revenue-acceleration#revenue-operations-intelligence",
                                    badge: "RevOps Telemetry",
                                    icon: Cpu,
                                    tags: ["Data Alignment","Leakage Elimination"]
                                },
                                {
                                    title: "Revenue Forecast Optimization",
                                    description: "Combines stage conversion regressions and buyer telemetry into high-confidence revenue predictions.",
                                    path: "/ai-native-sales/revenue-acceleration#revenue-forecast-optimization",
                                    badge: "Predictive Commit",
                                    icon: LineChart,
                                    tags: ["<3% Variance","Predictability"]
                                }
                            ]
                        }
                    ]
                },

                // 6. PRICING INTELLIGENCE
                {
                    id: "pricing-intelligence",
                    title: "Pricing Intelligence",
                    desc: "Improve pricing decisions, deal value and commercial performance.",
                    path: "/ai-native-sales/pricing-intelligence",
                    badge: "8 Capabilities",
                    icon: DollarSign,
                    columns: [
                        {
                            header: "Strategy & Dynamic Models",
                            badge: "Economics",
                            icon: DollarSign,
                            cards: [
                                {
                                    title: "Pricing Strategy Intelligence",
                                    description: "Evaluates customer usage telemetry and willingness-to-pay benchmarks to structure pricing tiers.",
                                    path: "/ai-native-sales/pricing-intelligence#pricing-strategy-intelligence",
                                    badge: "Packaging & Tiers",
                                    icon: Layers,
                                    tags: ["Value Metrics","Margin Protection"]
                                },
                                {
                                    title: "Dynamic Pricing Intelligence",
                                    description: "Recommends deal-specific pricing parameters based on account firmographics and competitive pressure.",
                                    path: "/ai-native-sales/pricing-intelligence#dynamic-pricing-intelligence",
                                    badge: "Contextual Pricing",
                                    icon: Activity,
                                    tags: ["Target Bands","Win Rates"]
                                },
                                {
                                    title: "Price Optimization Engine",
                                    description: "Measures market price elasticity across industries and modules, identifying rate optimization opportunities.",
                                    path: "/ai-native-sales/pricing-intelligence#price-optimization-engine",
                                    badge: "Elasticity Modeling",
                                    icon: TrendingUp,
                                    tags: ["Price Elasticity","ARR Expansion"]
                                },
                                {
                                    title: "Value-Based Pricing",
                                    description: "Constructs bespoke economic business cases translating operational improvements into verified ROI.",
                                    path: "/ai-native-sales/pricing-intelligence#value-based-pricing",
                                    badge: "ROI Architecture",
                                    icon: BarChart3,
                                    tags: ["Financial Business Cases","CFO Models"]
                                }
                            ]
                        },
                        {
                            header: "Deal Desk & Margin Governance",
                            badge: "Governance",
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: "Deal Desk Intelligence",
                                    description: "Automates custom term reviews, checks margin thresholds, and grants algorithmic approvals.",
                                    path: "/ai-native-sales/pricing-intelligence#deal-desk-intelligence",
                                    badge: "Automated Approvals",
                                    icon: Zap,
                                    tags: ["Sub-4hr Approvals","Concessions"]
                                },
                                {
                                    title: "Discount Governance",
                                    description: "Enforces give-get negotiation rules requiring high-value customer commitments for any price cut.",
                                    path: "/ai-native-sales/pricing-intelligence#discount-governance",
                                    badge: "Margin Protection",
                                    icon: ShieldCheck,
                                    tags: ["Give-Get Rules","Margin Discipline"]
                                },
                                {
                                    title: "Commercial Proposal Intelligence",
                                    description: "Automates configure-price-quote (CPQ) workflows to generate error-free commercial proposals.",
                                    path: "/ai-native-sales/pricing-intelligence#commercial-proposal-intelligence",
                                    badge: "CPQ Automation",
                                    icon: FileText,
                                    tags: ["Instant Order Forms","Zero Error"]
                                },
                                {
                                    title: "Revenue Leakage Detection",
                                    description: "Audits billing records, product usage telemetry, and contract addenda to detect uncollected revenue.",
                                    path: "/ai-native-sales/pricing-intelligence#revenue-leakage-detection",
                                    badge: "Leakage Audit",
                                    icon: AlertTriangle,
                                    tags: ["Unbilled Usage","Recovered ARR"]
                                }
                            ]
                        }
                    ]
                },

                // 7. ECOSYSTEM REVENUE GROWTH
                {
                    id: "ecosystem-revenue-growth",
                    title: "Ecosystem Revenue Growth",
                    desc: "Generate revenue through partners, channels and business ecosystems.",
                    path: "/ai-native-sales/ecosystem-revenue-growth",
                    badge: "8 Capabilities",
                    icon: Network,
                    columns: [
                        {
                            header: "Partner Mapping & Channels",
                            badge: "Alliances",
                            icon: Network,
                            cards: [
                                {
                                    title: "Partner Intelligence",
                                    description: "Maps the global partner landscape, assessing partner vertical depth and certified consultant capacity.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#partner-intelligence",
                                    badge: "Alliance Mapping",
                                    icon: Network,
                                    tags: ["System Integrators","Capability"]
                                },
                                {
                                    title: "Partner Discovery Engine",
                                    description: "Discovers and scores prospective ecosystem partners across target industries and customer overlap.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#partner-discovery-engine",
                                    badge: "Partner Identification",
                                    icon: Radar,
                                    tags: ["Recruitment Queue","Overlap"]
                                },
                                {
                                    title: "Channel Sales Intelligence",
                                    description: "Real-time visibility into channel pipeline generation, certification progress, and deal velocity.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#channel-sales-intelligence",
                                    badge: "Channel Telemetry",
                                    icon: LineChart,
                                    tags: ["Reseller Health","Deal Reg"]
                                },
                                {
                                    title: "Partner Recruitment Automation",
                                    description: "Automates partner onboarding journeys: NDA exchanges, agreement sign-offs, and training paths.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#partner-recruitment-automation",
                                    badge: "Onboarding Workflows",
                                    icon: ShieldCheck,
                                    tags: ["Sub-14d Onboarding","Certification"]
                                }
                            ]
                        },
                        {
                            header: "Co-Selling & Cloud Closing",
                            badge: "Co-Selling",
                            icon: Users,
                            cards: [
                                {
                                    title: "Co-Selling Intelligence",
                                    description: "Facilitates zero-knowledge account mapping to identify mutual accounts and introduce field reps.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#co-selling-intelligence",
                                    badge: "Account Overlap AI",
                                    icon: Users,
                                    tags: ["Cross-Company Overlap","Field Co-Sell"]
                                },
                                {
                                    title: "Ecosystem Pipeline Generation",
                                    description: "Orchestrates partner co-marketing campaigns and joint lead distribution workflows.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#ecosystem-pipeline-generation",
                                    badge: "Partner-Sourced ARR",
                                    icon: TrendingUp,
                                    tags: ["Co-Marketing","Lower CAC"]
                                },
                                {
                                    title: "Partner Performance Intelligence",
                                    description: "Measures genuine partner influence, sourcing contribution, and customer implementation quality.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#partner-performance-intelligence",
                                    badge: "Ecosystem Scorecard",
                                    icon: BarChart3,
                                    tags: ["Contribution Index","Commission ROI"]
                                },
                                {
                                    title: "Ecosystem Revenue Optimization",
                                    description: "Coordinates cloud marketplace private offers and customer cloud commit drawdowns.",
                                    path: "/ai-native-sales/ecosystem-revenue-growth#ecosystem-revenue-optimization",
                                    badge: "Holistic Ecosystem",
                                    icon: Sparkles,
                                    tags: ["AWS/Azure/GCP Commits","Fast Closing"]
                                }
                            ]
                        }
                    ]
                },

                // 8. CUSTOMER GROWTH INTELLIGENCE
                {
                    id: "customer-growth-intelligence",
                    title: "Customer Growth Intelligence",
                    desc: "Increase customer value through retention, expansion and relationship intelligence.",
                    path: "/ai-native-sales/customer-growth-intelligence",
                    badge: "8 Capabilities",
                    icon: Users,
                    columns: [
                        {
                            header: "Health & Retention Radar",
                            badge: "Retention",
                            icon: Users,
                            cards: [
                                {
                                    title: "Customer 360 Intelligence",
                                    description: "Synthesizes billing history, active feature adoption, support escalations, and executive relationships.",
                                    path: "/ai-native-sales/customer-growth-intelligence#customer-360-intelligence",
                                    badge: "Unified Truth",
                                    icon: Target,
                                    tags: ["Single Source of Truth","Telemetry"]
                                },
                                {
                                    title: "Customer Health Intelligence",
                                    description: "Calculates dynamic, telemetry-driven Customer Health Scores combining utilization and engagement.",
                                    path: "/ai-native-sales/customer-growth-intelligence#customer-health-intelligence",
                                    badge: "Predictive Health",
                                    icon: Activity,
                                    tags: ["Objective Health","Zero Blind Spots"]
                                },
                                {
                                    title: "Customer Retention Intelligence",
                                    description: "Orchestrates the 180-day automated renewal journey, tracking notice windows and executive alignment.",
                                    path: "/ai-native-sales/customer-growth-intelligence#customer-retention-intelligence",
                                    badge: "Renewal Safeguards",
                                    icon: ShieldCheck,
                                    tags: ["96%+ GRR","Early Execution"]
                                },
                                {
                                    title: "Churn Prediction Intelligence",
                                    description: "Identifies early churn risk signatures (executive departures, declining usage depth) 6-12 months out.",
                                    path: "/ai-native-sales/customer-growth-intelligence#churn-prediction-intelligence",
                                    badge: "Churn Radar",
                                    icon: AlertTriangle,
                                    tags: ["Early Warnings","Retention Swarms"]
                                }
                            ]
                        },
                        {
                            header: "Expansion & Account Scaling",
                            badge: "Expansion",
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: "Cross-Sell Intelligence",
                                    description: "Analyzes operational pain points and peer adoption patterns to recommend targeted cross-sell modules.",
                                    path: "/ai-native-sales/customer-growth-intelligence#cross-sell-intelligence",
                                    badge: "Product Affinity",
                                    icon: Layers,
                                    tags: ["Multi-Product","Synergy"]
                                },
                                {
                                    title: "Upsell Opportunity Intelligence",
                                    description: "Monitors real-time capacity consumption, forecasting when accounts will exceed provisioned limits.",
                                    path: "/ai-native-sales/customer-growth-intelligence#upsell-opportunity-intelligence",
                                    badge: "Capacity Expansion",
                                    icon: Zap,
                                    tags: ["Proactive Upgrades","Zero Lockouts"]
                                },
                                {
                                    title: "Customer Expansion Engine",
                                    description: "Maps global parent and subsidiary corporate hierarchies, uncovering sister divisions for expansion.",
                                    path: "/ai-native-sales/customer-growth-intelligence#customer-expansion-engine",
                                    badge: "Land & Expand",
                                    icon: Network,
                                    tags: ["Divisional Piggybacking","Account Multiplier"]
                                },
                                {
                                    title: "Customer Lifetime Value Optimization",
                                    description: "Models customer lifetime value across segments, optimizing customer success resource allocation.",
                                    path: "/ai-native-sales/customer-growth-intelligence#customer-lifetime-value-optimization",
                                    badge: "LTV Maximization",
                                    icon: BarChart3,
                                    tags: ["128%+ NRR","LTV:CAC 6.8x"]
                                }
                            ]
                        }
                    ]
                },

                // 9. AUTONOMOUS GTM COMMAND CENTER
                {
                    id: "autonomous-gtm-command-center",
                    title: "Autonomous GTM Command Center",
                    desc: "Coordinate the complete go-to-market system through unified intelligence and orchestration.",
                    path: "/ai-native-sales/autonomous-gtm-command-center",
                    badge: "8 Capabilities",
                    icon: Cpu,
                    columns: [
                        {
                            header: "Strategy, Planning & SLAs",
                            badge: "Strategic GTM",
                            icon: Cpu,
                            cards: [
                                {
                                    title: "GTM Strategy Intelligence",
                                    description: "Synthesizes market demand trends, regulatory shifts, and competitor strategies into strategic roadmaps.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#gtm-strategy-intelligence",
                                    badge: "Strategic Vision",
                                    icon: Radar,
                                    tags: ["Market Foresight","Capital Allocation"]
                                },
                                {
                                    title: "GTM Planning Engine",
                                    description: "Simulates revenue scenarios, models territory capacity, and optimizes quota distribution.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#gtm-planning-engine",
                                    badge: "Dynamic Modeling",
                                    icon: BarChart3,
                                    tags: ["Territory Balance","Sub-5d Planning"]
                                },
                                {
                                    title: "GTM Execution Orchestration",
                                    description: "Orchestrates cross-functional workflows, synchronizing campaign launches, lead handoffs, and onboarding.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#gtm-execution-orchestration",
                                    badge: "Unified Execution",
                                    icon: Network,
                                    tags: ["Cross-Team Handoffs","Time-to-Value"]
                                },
                                {
                                    title: "Marketing-to-Sales Alignment",
                                    description: "Enforces shared SLAs: verifies lead qualification objectively and routes leads in seconds.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#marketing-to-sales-alignment",
                                    badge: "SLA Enforcement",
                                    icon: ShieldCheck,
                                    tags: ["15-min Response","Zero Finger Pointing"]
                                }
                            ]
                        },
                        {
                            header: "Command Telemetry & Decisions",
                            badge: "Command AI",
                            icon: Sparkles,
                            cards: [
                                {
                                    title: "Revenue Command Center",
                                    description: "Interactive mission control dashboard visualizing live pipeline, conversion velocity, and commits.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#revenue-command-center",
                                    badge: "Real-Time Mission Control",
                                    icon: Activity,
                                    tags: ["Live Telemetry","Zero Lag"]
                                },
                                {
                                    title: "GTM Performance Intelligence",
                                    description: "Performs multi-touch revenue attribution across touchpoints, measuring true CAC payback and LTV.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#gtm-performance-intelligence",
                                    badge: "Attribution & ROI",
                                    icon: LineChart,
                                    tags: ["Multi-Touch CAC","Programmatic ROI"]
                                },
                                {
                                    title: "Autonomous Workflow Orchestration",
                                    description: "Executes event-driven workflows across CRM, billing, email, and analytics tools seamlessly.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#autonomous-workflow-orchestration",
                                    badge: "Event-Driven GTM",
                                    icon: Cpu,
                                    tags: ["Zero Data Drag","Background Execution"]
                                },
                                {
                                    title: "Revenue Decision Intelligence",
                                    description: "Delivers executive decision-support models evaluating complex trade-offs between growth and profitability.",
                                    path: "/ai-native-sales/autonomous-gtm-command-center#revenue-decision-intelligence",
                                    badge: "Executive Copilot",
                                    icon: Sparkles,
                                    tags: ["Prescriptive AI","Valuation Expansion"]
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
          {
                    "id": "revenue-physics",
                    "title": "Revenue Physics",
                    "desc": "Understand the structural mechanics, constraints and dynamics that determine revenue performance and profitable business growth.",
                    "path": "/growth-science/revenue-physics",
                    "badge": "8 Capabilities",
                    icon: Activity,
                    "columns": [
                              {
                                        "header": "Mechanics & Dynamics",
                                        "badge": "Structural",
                                        icon: Activity,
                                        "cards": [
                                                  {
                                                            "title": "Revenue Architecture",
                                                            "description": "Deconstruct revenue into deterministic flow equations, driver mapping, and causal levers.",
                                                            "path": "/growth-science/revenue-physics#revenue-architecture",
                                                            "badge": "Driver Mapping",
                                                            icon: Activity,
                                                            "tags": [
                                                                      "Driver Mapping",
                                                                      "Parametric Equations"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Velocity Modeling",
                                                            "description": "Model and accelerate the four parametric components of the revenue velocity equation.",
                                                            "path": "/growth-science/revenue-physics#revenue-velocity-modeling",
                                                            "badge": "Velocity Formula",
                                                            icon: TrendingUp,
                                                            "tags": [
                                                                      "Cash Compounding",
                                                                      "Cycle Compression"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Friction Diagnostics",
                                                            "description": "Isolate hidden pipeline friction, lead qualification decay, and stage latency points.",
                                                            "path": "/growth-science/revenue-physics#revenue-friction-diagnostics",
                                                            "badge": "Friction Audit",
                                                            icon: AlertTriangle,
                                                            "tags": [
                                                                      "Stage Latency",
                                                                      "Drop-off Points"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Growth Constraint Analysis",
                                                            "description": "Identify binding operational bottlenecks capping company growth using the Theory of Constraints.",
                                                            "path": "/growth-science/revenue-physics#growth-constraint-analysis",
                                                            "badge": "Bottleneck Theory",
                                                            icon: Target,
                                                            "tags": [
                                                                      "Throughput Caps",
                                                                      "Growth Ceiling"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Flow & Predictability",
                                        "badge": "Deterministic",
                                        icon: LineChart,
                                        "cards": [
                                                  {
                                                            "title": "Revenue Flow Optimization",
                                                            "description": "Synchronize marketing demand generation, sales execution, and customer success delivery.",
                                                            "path": "/growth-science/revenue-physics#revenue-flow-optimization",
                                                            "badge": "Flow Efficiency",
                                                            icon: Workflow,
                                                            "tags": [
                                                                      "Inter-stage Sync",
                                                                      "Capacity Balance"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Profit Pool Dynamics",
                                                            "description": "Locate defensible profit pools across customer segments and eliminate negative contribution margin.",
                                                            "path": "/growth-science/revenue-physics#profit-pool-dynamics",
                                                            "badge": "Margin Stack",
                                                            icon: DollarSign,
                                                            "tags": [
                                                                      "Customer Deciles",
                                                                      "Contribution Margin"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Predictability Modeling",
                                                            "description": "Stochastic pipeline modeling and Bayesian probabilities delivering <5% quarterly forecast variance.",
                                                            "path": "/growth-science/revenue-physics#revenue-predictability-modeling",
                                                            "badge": "<4.5% Variance",
                                                            icon: LineChart,
                                                            "tags": [
                                                                      "Monte Carlo",
                                                                      "Objective Gating"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue System Design",
                                                            "description": "Architect self-compounding commercial flywheels with unified data models and governance.",
                                                            "path": "/growth-science/revenue-physics#revenue-system-design",
                                                            "badge": "Operating OS",
                                                            icon: Cpu,
                                                            "tags": [
                                                                      "Revenue Flywheel",
                                                                      "Unified Architecture"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "revenue-intelligence",
                    "title": "Revenue Intelligence",
                    "desc": "Transform business, customer, market and performance data into actionable revenue intelligence.",
                    "path": "/growth-science/revenue-intelligence",
                    "badge": "8 Capabilities",
                    icon: LineChart,
                    "columns": [
                              {
                                        "header": "Data & Market Sensing",
                                        "badge": "Signals",
                                        icon: Radar,
                                        "cards": [
                                                  {
                                                            "title": "Revenue Data Intelligence",
                                                            "description": "Consolidate and normalize multi-source transaction, CRM, and usage data into verified truth.",
                                                            "path": "/growth-science/revenue-intelligence#revenue-data-intelligence",
                                                            "badge": "Data Hygiene",
                                                            icon: Database,
                                                            "tags": [
                                                                      "Data Harmonization",
                                                                      "Identity Resolution"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Customer Economics Intelligence",
                                                            "description": "Measure fully loaded CAC, LTV:CAC ratios, and cohort retention decay curves.",
                                                            "path": "/growth-science/revenue-intelligence#customer-economics-intelligence",
                                                            "badge": "LTV:CAC 4.5x",
                                                            icon: Scale,
                                                            "tags": [
                                                                      "Cohort Compounding",
                                                                      "Cost-to-Serve"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Market Intelligence",
                                                            "description": "Track macroeconomic shifts, regulatory compliance mandates, and segment growth rates.",
                                                            "path": "/growth-science/revenue-intelligence#market-intelligence",
                                                            "badge": "TAM Sensing",
                                                            icon: Globe,
                                                            "tags": [
                                                                      "Macro Trends",
                                                                      "Sector Growth"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Demand Intelligence",
                                                            "description": "Capture first-party intent surges, dark-funnel buying signals, and content research activity.",
                                                            "path": "/growth-science/revenue-intelligence#demand-intelligence",
                                                            "badge": "Intent Velocity",
                                                            icon: Radar,
                                                            "tags": [
                                                                      "Dark Funnel",
                                                                      "Intent Scoring"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Performance & Insights",
                                        "badge": "Analytics",
                                        icon: BarChart3,
                                        "cards": [
                                                  {
                                                            "title": "Pipeline Intelligence",
                                                            "description": "Inspect deal progression health, stage stagnation hazards, and opportunity decay velocity.",
                                                            "path": "/growth-science/revenue-intelligence#pipeline-intelligence",
                                                            "badge": "Pipeline Health",
                                                            icon: Activity,
                                                            "tags": [
                                                                      "Deal Stagnation",
                                                                      "Hazard Rates"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Performance Intelligence",
                                                            "description": "Benchmark rep quota attainment, conversion efficiency, and territory pacing curves.",
                                                            "path": "/growth-science/revenue-intelligence#revenue-performance-intelligence",
                                                            "badge": "Quota Pacing",
                                                            icon: TrendingUp,
                                                            "tags": [
                                                                      "Rep Attainment",
                                                                      "Conversion Benchmarks"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Competitive Revenue Intelligence",
                                                            "description": "Monitor competitor pricing changes, displacement patterns, and win-loss drivers.",
                                                            "path": "/growth-science/revenue-intelligence#competitive-revenue-intelligence",
                                                            "badge": "Battlecards AI",
                                                            icon: AlertTriangle,
                                                            "tags": [
                                                                      "Displacement",
                                                                      "Pricing Vulnerability"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Executive Revenue Insights",
                                                            "description": "Deliver board-grade revenue briefings, forecast variance telemetry, and strategic early warnings.",
                                                            "path": "/growth-science/revenue-intelligence#executive-revenue-insights",
                                                            "badge": "Board Briefings",
                                                            icon: Sparkles,
                                                            "tags": [
                                                                      "C-Suite Briefs",
                                                                      "Predictive Alerting"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "revenue-potential-discovery",
                    "title": "Revenue Potential Discovery",
                    "desc": "Discover and quantify latent revenue opportunities across markets, customers, offerings and channels.",
                    "path": "/growth-science/revenue-potential-discovery",
                    "badge": "8 Capabilities",
                    icon: Compass,
                    "columns": [
                              {
                                        "header": "Market Discovery",
                                        "badge": "Addressability",
                                        icon: Compass,
                                        "cards": [
                                                  {
                                                            "title": "Total Addressable Market Discovery",
                                                            "description": "Bottom-up mathematical TAM reconstruction based on verified customer willingness-to-pay.",
                                                            "path": "/growth-science/revenue-potential-discovery#total-addressable-market-discovery",
                                                            "badge": "Bottom-Up TAM",
                                                            icon: Globe,
                                                            "tags": [
                                                                      "Verified Headroom",
                                                                      "Micro-Segments"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Serviceable Market Analysis",
                                                            "description": "Isolate SAM and SOM segments based on operational delivery and regulatory fit.",
                                                            "path": "/growth-science/revenue-potential-discovery#serviceable-market-analysis",
                                                            "badge": "Realistic SAM",
                                                            icon: Target,
                                                            "tags": [
                                                                      "Capacity Gating",
                                                                      "Realistic Headroom"
                                                            ]
                                                  },
                                                  {
                                                            "title": "White Space Intelligence",
                                                            "description": "Identify unserved buyer personas, adjacent verticals, and uncontested market niches.",
                                                            "path": "/growth-science/revenue-potential-discovery#white-space-intelligence",
                                                            "badge": "Profit Pools",
                                                            icon: Sparkles,
                                                            "tags": [
                                                                      "Uncontested Niches",
                                                                      "Niche Monopolies"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Untapped Demand Discovery",
                                                            "description": "Detect latent buyer search interest, unfulfilled RFP categories, and dark-funnel demand.",
                                                            "path": "/growth-science/revenue-potential-discovery#untapped-demand-discovery",
                                                            "badge": "Latent Demand",
                                                            icon: Radar,
                                                            "tags": [
                                                                      "Unmet Need",
                                                                      "Organic Influx"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Account & Opportunity Modeling",
                                        "badge": "Forecasting",
                                        icon: LineChart,
                                        "cards": [
                                                  {
                                                            "title": "Customer Potential Mapping",
                                                            "description": "Calculate expansion headroom, multi-division sprawl, and latent ARR across installed accounts.",
                                                            "path": "/growth-science/revenue-potential-discovery#customer-potential-mapping",
                                                            "badge": "Expansion Map",
                                                            icon: Users,
                                                            "tags": [
                                                                      "Wallet Share",
                                                                      "Division Sprawl"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Market Opportunity Prioritization",
                                                            "description": "Rank emerging market wedges using RICE frameworks and risk-adjusted capital return models.",
                                                            "path": "/growth-science/revenue-potential-discovery#market-opportunity-prioritization",
                                                            "badge": "RICE Matrix",
                                                            icon: Scale,
                                                            "tags": [
                                                                      "Capital Prioritization",
                                                                      "Time-to-Value"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Opportunity Modeling",
                                                            "description": "Construct Monte Carlo simulations evaluating revenue capture potential under execution variants.",
                                                            "path": "/growth-science/revenue-potential-discovery#revenue-opportunity-modeling",
                                                            "badge": "Monte Carlo",
                                                            icon: Calculator,
                                                            "tags": [
                                                                      "Stochastic Modeling",
                                                                      "Sensitivity"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Growth Potential Forecasting",
                                                            "description": "Multi-year forward ARR trajectory modeling combining TAM capture, cohort decay, and expansion.",
                                                            "path": "/growth-science/revenue-potential-discovery#growth-potential-forecasting",
                                                            "badge": "3-Year Runway",
                                                            icon: TrendingUp,
                                                            "tags": [
                                                                      "Forward ARR",
                                                                      "Valuation Multiples"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "revenue-leakage-recovery",
                    "title": "Revenue Leakage & Recovery",
                    "desc": "Identify where revenue slips away across sales, pricing, contracts, operations and customer lifecycle, and implement recovery mechanisms.",
                    "path": "/growth-science/revenue-leakage-recovery",
                    "badge": "8 Capabilities",
                    icon: Radar,
                    "columns": [
                              {
                                        "header": "Forensic Detection",
                                        "badge": "Diagnostics",
                                        icon: Radar,
                                        "cards": [
                                                  {
                                                            "title": "Revenue Leakage Diagnostics",
                                                            "description": "Conduct automated full-lifecycle audits from lead capture to invoice reconciliation.",
                                                            "path": "/growth-science/revenue-leakage-recovery#revenue-leakage-diagnostics",
                                                            "badge": "Full Lifecycle",
                                                            icon: Radar,
                                                            "tags": [
                                                                      "Audit Trails",
                                                                      "Cash Reconciliation"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Pricing Leakage Detection",
                                                            "description": "Uncover rogue sales discounting, unapproved rebate stacking, and pocket price erosion.",
                                                            "path": "/growth-science/revenue-leakage-recovery#pricing-leakage-detection",
                                                            "badge": "Pocket Margin",
                                                            icon: DollarSign,
                                                            "tags": [
                                                                      "Waterfall Audit",
                                                                      "Rogue Discounting"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Customer Churn Leakage",
                                                            "description": "Predict silent account disengagement and license contraction 120 days before cancellation.",
                                                            "path": "/growth-science/revenue-leakage-recovery#customer-churn-leakage",
                                                            "badge": "GRR 93%+",
                                                            icon: Users,
                                                            "tags": [
                                                                      "Leading Indicators",
                                                                      "Retention Defense"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Pipeline Leakage Analysis",
                                                            "description": "Audit deal stage stagnation, multi-quarter slippage, and phantom pipeline bloat.",
                                                            "path": "/growth-science/revenue-leakage-recovery#pipeline-leakage-analysis",
                                                            "badge": "Funnel Audit",
                                                            icon: Activity,
                                                            "tags": [
                                                                      "Stale Deals",
                                                                      "Pipeline Velocity"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Margin & Prevention",
                                        "badge": "Rectification",
                                        icon: ShieldCheck,
                                        "cards": [
                                                  {
                                                            "title": "Conversion Loss Diagnostics",
                                                            "description": "Isolate legal redline friction, procurement stalls, and technical evaluation drop-offs.",
                                                            "path": "/growth-science/revenue-leakage-recovery#conversion-loss-diagnostics",
                                                            "badge": "Late-Stage Win",
                                                            icon: AlertTriangle,
                                                            "tags": [
                                                                      "Legal Fast-Track",
                                                                      "POC Gating"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Margin Erosion Analysis",
                                                            "description": "Calculate activity-based cost-to-serve per account to eliminate margin-negative contracts.",
                                                            "path": "/growth-science/revenue-leakage-recovery#margin-erosion-analysis",
                                                            "badge": "Cost-to-Serve",
                                                            icon: Scale,
                                                            "tags": [
                                                                      "Profit Deciles",
                                                                      "Bespoke Debt"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Recovery Engineering",
                                                            "description": "Deploy retroactive entitlement billing audits, modern contracts, and smart dunning.",
                                                            "path": "/growth-science/revenue-leakage-recovery#revenue-recovery-engineering",
                                                            "badge": "Cash Recovery",
                                                            icon: RefreshCw,
                                                            "tags": [
                                                                      "Usage Invoicing",
                                                                      "Smart Dunning"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Leakage Prevention Intelligence",
                                                            "description": "Embed real-time CPQ discount guardrails and telemetry anomaly alerts to prevent future loss.",
                                                            "path": "/growth-science/revenue-leakage-recovery#leakage-prevention-intelligence",
                                                            "badge": "Zero Leakage",
                                                            icon: ShieldCheck,
                                                            "tags": [
                                                                      "CPQ Guardrails",
                                                                      "Automated Meters"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "revenue-bundling-offer-engineering",
                    "title": "Revenue Bundling & Offer Engineering",
                    "desc": "Design high-converting product and service bundles that expand deal size, improve margins and enhance competitive differentiation.",
                    "path": "/growth-science/revenue-bundling-offer-engineering",
                    "badge": "8 Capabilities",
                    icon: Layers,
                    "columns": [
                              {
                                        "header": "Bundling & Packaging",
                                        "badge": "Architecture",
                                        icon: Layers,
                                        "cards": [
                                                  {
                                                            "title": "Product Bundling Strategy",
                                                            "description": "Structure pure and mixed bundles that elevate average contract value by 40%+ without cannibalization.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#product-bundling-strategy",
                                                            "badge": "+41% ACV",
                                                            icon: Layers,
                                                            "tags": [
                                                                      "WTP Correlation",
                                                                      "Anti-Cannibalization"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Service Bundling Architecture",
                                                            "description": "Wrap rapid onboarding accelerators and premium SLAs around software to turn services into profit.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#service-bundling-architecture",
                                                            "badge": "Services 45% GM",
                                                            icon: Sparkles,
                                                            "tags": [
                                                                      "Onboarding Sprints",
                                                                      "Premium SLAs"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Offer Design Intelligence",
                                                            "description": "Synthesize commercial risk reversal, structured payment terms, and 3-tier proposals.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#offer-design-intelligence",
                                                            "badge": "Offer Win 52%",
                                                            icon: FileText,
                                                            "tags": [
                                                                      "Risk Reversal",
                                                                      "Anchor Pricing"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Value Proposition Engineering",
                                                            "description": "Translate technical platform features into quantified CFO business cases and Cost of Inaction models.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#value-proposition-engineering",
                                                            "badge": "CFO Business Case",
                                                            icon: Target,
                                                            "tags": [
                                                                      "EVE Quantification",
                                                                      "Cost of Inaction"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Expansion & Optimization",
                                        "badge": "Monetization",
                                        icon: DollarSign,
                                        "cards": [
                                                  {
                                                            "title": "Cross-Sell Offer Design",
                                                            "description": "Mine product affinity patterns and deploy co-termed bridge pricing to expand wallet share.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#cross-sell-offer-design",
                                                            "badge": "Cross-Sell 44%",
                                                            icon: GitMerge,
                                                            "tags": [
                                                                      "Affinity Mining",
                                                                      "Bridge Pricing"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Upsell Offer Architecture",
                                                            "description": "Align value metrics with customer business growth to achieve automated 30%+ annual contract expansion.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#upsell-offer-architecture",
                                                            "badge": "+34% Expansion",
                                                            icon: TrendingUp,
                                                            "tags": [
                                                                      "Value Metrics",
                                                                      "Consumption Tiers"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Packaging Optimization",
                                                            "description": "Group capabilities into clean Good/Better/Best editions with distinct target buyer personas.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#packaging-optimization",
                                                            "badge": "Tier Alignment",
                                                            icon: Sliders,
                                                            "tags": [
                                                                      "Edition Design",
                                                                      "Feature Gating"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Commercial Offer Optimization",
                                                            "description": "Deploy algorithmic discount guidance and automated deal desk workflows to protect margins.",
                                                            "path": "/growth-science/revenue-bundling-offer-engineering#commercial-offer-optimization",
                                                            "badge": "Deal Desk <4h",
                                                            icon: ShieldCheck,
                                                            "tags": [
                                                                      "Dynamic Floors",
                                                                      "Margin Discipline"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "value-capture-engineering",
                    "title": "Value Capture Engineering",
                    "desc": "Capture maximum economic value through scientific pricing, value realization, contract structure and monetization engineering.",
                    "path": "/growth-science/value-capture-engineering",
                    "badge": "8 Capabilities",
                    icon: DollarSign,
                    "columns": [
                              {
                                        "header": "Pricing & Quantification",
                                        "badge": "Economics",
                                        icon: DollarSign,
                                        "cards": [
                                                  {
                                                            "title": "Value-Based Pricing Architecture",
                                                            "description": "Price based on quantified customer economic value rather than cost-plus or competitor benchmarks.",
                                                            "path": "/growth-science/value-capture-engineering#value-based-pricing-architecture",
                                                            "badge": "WTP Science",
                                                            icon: DollarSign,
                                                            "tags": [
                                                                      "Value Ceilings",
                                                                      "Elasticity Curves"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Customer Value Quantification",
                                                            "description": "Track customer production telemetry to prove verified 5x+ ROI in dollars before renewal.",
                                                            "path": "/growth-science/value-capture-engineering#customer-value-quantification",
                                                            "badge": "6.4x ROI Proven",
                                                            icon: Calculator,
                                                            "tags": [
                                                                      "Telemetry Auditing",
                                                                      "CFO Models"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Value Realization Intelligence",
                                                            "description": "Monitor post-sale onboarding milestones and feature adoption depth to eliminate year-1 churn.",
                                                            "path": "/growth-science/value-capture-engineering#value-realization-intelligence",
                                                            "badge": "Adoption Depth",
                                                            icon: CheckCircle2,
                                                            "tags": [
                                                                      "Milestone Sprints",
                                                                      "Feature Depth"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Margin Optimization",
                                                            "description": "Deconstruct unit economics and attribute cloud hosting costs per account to protect EBITDA.",
                                                            "path": "/growth-science/value-capture-engineering#margin-optimization",
                                                            "badge": "77%+ Gross Margin",
                                                            icon: Scale,
                                                            "tags": [
                                                                      "COGS Allocation",
                                                                      "EBITDA Flow"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Contracts & Analytics",
                                        "badge": "Realization",
                                        icon: BarChart3,
                                        "cards": [
                                                  {
                                                            "title": "Price Realization Engineering",
                                                            "description": "Plug price waterfall leaks, govern deal exceptions, and compress Days Sales Outstanding (DSO).",
                                                            "path": "/growth-science/value-capture-engineering#price-realization-engineering",
                                                            "badge": "Pocket Price 84%",
                                                            icon: TrendingUp,
                                                            "tags": [
                                                                      "Waterfall Defense",
                                                                      "DSO <40d"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Contract Value Optimization",
                                                            "description": "Structure 3-year contract ramps with mandatory CPI indexation clauses to lock in expansion ARR.",
                                                            "path": "/growth-science/value-capture-engineering#contract-value-optimization",
                                                            "badge": "3-Year Ramps",
                                                            icon: FileText,
                                                            "tags": [
                                                                      "CPI Clauses",
                                                                      "Multi-Year TCV"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Monetization Strategy",
                                                            "description": "Deploy hybrid subscription + usage consumption architectures to drive 128%+ Net Retention.",
                                                            "path": "/growth-science/value-capture-engineering#monetization-strategy",
                                                            "badge": "Hybrid NRR 128%",
                                                            icon: Workflow,
                                                            "tags": [
                                                                      "Consumption Hybrid",
                                                                      "Platform Take-Rate"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Value Capture Analytics",
                                                            "description": "Provide executive leadership with real-time deal desk BI dashboards and predictive margin forecasts.",
                                                            "path": "/growth-science/value-capture-engineering#value-capture-analytics",
                                                            "badge": "Live Pricing BI",
                                                            icon: LineChart,
                                                            "tags": [
                                                                      "Forecast Precision",
                                                                      "Concession Auditing"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "product-innovation-revenue-expansion",
                    "title": "Product Innovation & Revenue Expansion",
                    "desc": "Align product innovation with commercial opportunity, discovering untapped customer needs and building high-revenue products.",
                    "path": "/growth-science/product-innovation-revenue-expansion",
                    "badge": "8 Capabilities",
                    icon: Sparkles,
                    "columns": [
                              {
                                        "header": "Opportunity & PMF",
                                        "badge": "Discovery",
                                        icon: Sparkles,
                                        "cards": [
                                                  {
                                                            "title": "Product Opportunity Intelligence",
                                                            "description": "Prioritize engineering sprints based on committed pipeline revenue rather than squeaky wheels.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#product-opportunity-intelligence",
                                                            "badge": "Revenue Weighted",
                                                            icon: Sparkles,
                                                            "tags": [
                                                                      "Pipeline Unblocked",
                                                                      "Feature Value"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Customer Need Discovery",
                                                            "description": "Uncover deep workflow friction using behavioral telemetry, rage click analysis, and pre-code LOIs.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#customer-need-discovery",
                                                            "badge": "Pre-Code LOIs",
                                                            icon: Compass,
                                                            "tags": [
                                                                      "JTBD Workflows",
                                                                      "Drop-Off Telemetry"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Product-Market Fit Intelligence",
                                                            "description": "Segment quantitative PMF scores and cohort retention curves to isolate high-affinity customer tiers.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#product-market-fit-intelligence",
                                                            "badge": "PMF Score 68%",
                                                            icon: CheckCircle2,
                                                            "tags": [
                                                                      "Cohort Asymptotes",
                                                                      "Negative PMF Filters"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Innovation Portfolio Strategy",
                                                            "description": "Manage R&D investments using 70/20/10 capital allocation and rigorous stage-gate governance.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#innovation-portfolio-strategy",
                                                            "badge": "70/20/10 R&D",
                                                            icon: Layers,
                                                            "tags": [
                                                                      "Stage-Gate Funding",
                                                                      "Risk-Adjusted NPV"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Streams & Scaling",
                                        "badge": "Expansion",
                                        icon: TrendingUp,
                                        "cards": [
                                                  {
                                                            "title": "New Revenue Stream Discovery",
                                                            "description": "Unlock high-margin adjacent revenue streams: embedded payments, benchmark data, and API ecosystems.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#new-revenue-stream-discovery",
                                                            "badge": "Embedded Finance",
                                                            icon: DollarSign,
                                                            "tags": [
                                                                      "Payments 85bps",
                                                                      "Data Monetization"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Product-Led Growth Engineering",
                                                            "description": "Engineer frictionless onboarding, viral loops, and automated Product-Qualified Lead (PQL) handoffs.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#product-led-growth-engineering",
                                                            "badge": "PQL Win 48%",
                                                            icon: Zap,
                                                            "tags": [
                                                                      "Viral Loop K>0.5",
                                                                      "PQL Algorithmic Alert"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Market Expansion Strategy",
                                                            "description": "Conquer international geographies and specialized vertical sectors with localized compliance and SI channels.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#market-expansion-strategy",
                                                            "badge": "Global Scale",
                                                            icon: Globe,
                                                            "tags": [
                                                                      "Territory Ramping",
                                                                      "Partner Co-Selling"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Product Revenue Optimization",
                                                            "description": "Deploy dynamic contextual in-app paywalls and deprecate technical bloatware to maximize yield.",
                                                            "path": "/growth-science/product-innovation-revenue-expansion#product-revenue-optimization",
                                                            "badge": "Paywall Lift",
                                                            icon: TrendingUp,
                                                            "tags": [
                                                                      "Dynamic Paywalls",
                                                                      "Feature Sunsetting"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "revenue-acceleration",
                    "title": "Revenue Acceleration",
                    "desc": "Accelerate sales cycle velocity, conversion rates and revenue execution across every go-to-market touchpoint.",
                    "path": "/growth-science/revenue-acceleration",
                    "badge": "8 Capabilities",
                    icon: Zap,
                    "columns": [
                              {
                                        "header": "Velocity & Conversion",
                                        "badge": "Speed",
                                        icon: Zap,
                                        "cards": [
                                                  {
                                                            "title": "Revenue Velocity Optimization",
                                                            "description": "Optimize parametric revenue velocity to dramatically accelerate cash conversion cycles.",
                                                            "path": "/growth-science/revenue-acceleration#revenue-velocity-optimization",
                                                            "badge": "Velocity OS",
                                                            icon: Zap,
                                                            "tags": [
                                                                      "Parametric Velocity",
                                                                      "Throughput Math"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Sales Cycle Acceleration",
                                                            "description": "Compress enterprise deal duration by 50% using Mutual Action Plans and pre-approved legal terms.",
                                                            "path": "/growth-science/revenue-acceleration#sales-cycle-acceleration",
                                                            "badge": "Cycle 68 Days",
                                                            icon: Clock,
                                                            "tags": [
                                                                      "Mutual Action Plans",
                                                                      "Legal Fast-Tracks"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Conversion Rate Engineering",
                                                            "description": "Enforce strict MEDDPICC objective gating and multi-threading to elevate enterprise win rates.",
                                                            "path": "/growth-science/revenue-acceleration#conversion-rate-engineering",
                                                            "badge": "Win Rate 37%+",
                                                            icon: TrendingUp,
                                                            "tags": [
                                                                      "MEDDPICC Gating",
                                                                      "Multi-Threading"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Pipeline Acceleration",
                                                            "description": "Un-stick stalled opportunities using executive peer-to-peer interventions and time-bound incentives.",
                                                            "path": "/growth-science/revenue-acceleration#pipeline-acceleration",
                                                            "badge": "Stalled Deal Triage",
                                                            icon: Activity,
                                                            "tags": [
                                                                      "E2E Interventions",
                                                                      "POC Charters"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Efficiency & Testing",
                                        "badge": "Scale",
                                        icon: Scale,
                                        "cards": [
                                                  {
                                                            "title": "Demand-to-Revenue Optimization",
                                                            "description": "Align marketing attribution with closed cash and compress inbound lead response latency under 5 minutes.",
                                                            "path": "/growth-science/revenue-acceleration#demand-to-revenue-optimization",
                                                            "badge": "Instant Routing",
                                                            icon: Radar,
                                                            "tags": [
                                                                      "Closed-Loop ROAS",
                                                                      "Sub-5min SLA"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Customer Acquisition Optimization",
                                                            "description": "Compress CAC payback under 12 months and automate administrative tasks to boost AE selling capacity.",
                                                            "path": "/growth-science/revenue-acceleration#customer-acquisition-optimization",
                                                            "badge": "Payback <12mo",
                                                            icon: DollarSign,
                                                            "tags": [
                                                                      "CAC Payback",
                                                                      "Magic Number 1.2x"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Expansion Revenue Acceleration",
                                                            "description": "Map account whitespace and forecast usage exhaustion to achieve 127%+ Net Revenue Retention.",
                                                            "path": "/growth-science/revenue-acceleration#expansion-revenue-acceleration",
                                                            "badge": "NRR 127%+",
                                                            icon: Users,
                                                            "tags": [
                                                                      "Whitespace Mapping",
                                                                      "Division Bridges"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Growth Experimentation",
                                                            "description": "Run weekly statistical A/B tests across outbound messaging, sales pitch decks, and pricing tiers.",
                                                            "path": "/growth-science/revenue-acceleration#growth-experimentation",
                                                            "badge": "Weekly Sprints",
                                                            icon: Sliders,
                                                            "tags": [
                                                                      "ICE Framework",
                                                                      "Rapid A/B Testing"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          },
          {
                    "id": "executive-revenue-command-center",
                    "title": "Executive Revenue Command Center",
                    "desc": "Unified executive intelligence, real-time revenue performance visibility and strategic growth governance for enterprise leadership.",
                    "path": "/growth-science/executive-revenue-command-center",
                    "badge": "8 Capabilities",
                    icon: Cpu,
                    "columns": [
                              {
                                        "header": "Command & Planning",
                                        "badge": "Executive",
                                        icon: Cpu,
                                        "cards": [
                                                  {
                                                            "title": "Executive Revenue Dashboard",
                                                            "description": "Harmonize sales, finance, and marketing data into a single real-time verified source of truth.",
                                                            "path": "/growth-science/executive-revenue-command-center#executive-revenue-dashboard",
                                                            "badge": "Real-Time BI",
                                                            icon: Cpu,
                                                            "tags": [
                                                                      "Single Truth",
                                                                      "Board Prep <2h"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Performance Command",
                                                            "description": "Track real-time pacing curves, quota attainment, and cross-functional revenue scorecards.",
                                                            "path": "/growth-science/executive-revenue-command-center#revenue-performance-command",
                                                            "badge": "Pacing Curves",
                                                            icon: Gauge,
                                                            "tags": [
                                                                      "Quota Pacing",
                                                                      "Remediation Sprints"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Strategic Growth Planning",
                                                            "description": "Build bottoms-up sales capacity ramp models and balanced territories for predictable annual scaling.",
                                                            "path": "/growth-science/executive-revenue-command-center#strategic-growth-planning",
                                                            "badge": "Bottoms-Up Ramp",
                                                            icon: Target,
                                                            "tags": [
                                                                      "Capacity Models",
                                                                      "Territory Balance"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Revenue Forecast Intelligence",
                                                            "description": "Run Monte Carlo stochastic simulations to deliver board-ready quarterly forecasts with <3% variance.",
                                                            "path": "/growth-science/executive-revenue-command-center#revenue-forecast-intelligence",
                                                            "badge": "<3% Variance",
                                                            icon: LineChart,
                                                            "tags": [
                                                                      "P50/P90 Forecasts",
                                                                      "Zero Bias"
                                                            ]
                                                  }
                                        ]
                              },
                              {
                                        "header": "Profitability & Governance",
                                        "badge": "Governance",
                                        icon: ShieldCheck,
                                        "cards": [
                                                  {
                                                            "title": "Profitability Intelligence",
                                                            "description": "Execute activity-based margin decomposition to identify negative-margin accounts and expand EBITDA.",
                                                            "path": "/growth-science/executive-revenue-command-center#profitability-intelligence",
                                                            "badge": "EBITDA +18%",
                                                            icon: Scale,
                                                            "tags": [
                                                                      "Profit Deciles",
                                                                      "Contribution Margin"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Growth Scenario Modeling",
                                                            "description": "Stress-test corporate runway and capital allocation under aggressive, expected, and recessionary conditions.",
                                                            "path": "/growth-science/executive-revenue-command-center#growth-scenario-modeling",
                                                            "badge": "Stress-Testing",
                                                            icon: Sliders,
                                                            "tags": [
                                                                      "Runway Defense",
                                                                      "Capital Allocation"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Strategic Decision Intelligence",
                                                            "description": "Apply expected monetary value decision trees, pre-mortem analysis, and game theory to high-stakes choices.",
                                                            "path": "/growth-science/executive-revenue-command-center#strategic-decision-intelligence",
                                                            "badge": "Decision Trees",
                                                            icon: Sparkles,
                                                            "tags": [
                                                                      "Pre-Mortems",
                                                                      "Expected Value"
                                                            ]
                                                  },
                                                  {
                                                            "title": "Enterprise Growth Governance",
                                                            "description": "Automate global deal desk approval matrices and enforce ASC 606 revenue recognition auditability.",
                                                            "path": "/growth-science/executive-revenue-command-center#enterprise-growth-governance",
                                                            "badge": "Audit Clean",
                                                            icon: ShieldCheck,
                                                            "tags": [
                                                                      "Deal Desk Rules",
                                                                      "ASC 606 Compliance"
                                                            ]
                                                  }
                                        ]
                              }
                    ]
          }
]
        },
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

        // 6. RESOURCES HUB (COMPLETE 12-CATEGORY APPROVED HIERARCHY)
        {
            id: 'resources-hub',
            name: 'Resources Hub',
            shortName: 'Resources Hub',
            path: '/resources-hub',
            icon: BookOpen,
            badge: 'Knowledge Architecture',
            summary: 'Explore industry intelligence, functional playbooks, empirical models, AI frameworks, and interactive calculators.',
            categories: RESOURCES_HUB_CATEGORIES.map(cat => ({
                id: cat.id,
                title: cat.title,
                desc: cat.shortIntro,
                path: cat.path,
                badge: cat.previewLabels.slice(0, 2).join(' • '),
                icon: cat.icon,
                columns: cat.subGroups
                    ? cat.subGroups.map(grp => ({
                        header: grp.groupName,
                        badge: grp.badge || 'Suite',
                        icon: grp.items[0]?.icon || cat.icon,
                        cards: grp.items.map(it => ({
                            title: it.title,
                            description: it.description || '',
                            path: it.path,
                            badge: it.badge || grp.groupName,
                            icon: it.icon || cat.icon,
                            tags: [grp.groupName]
                        }))
                    }))
                    : [
                        {
                            header: cat.id === 'analytics-decision-science' 
                                ? 'Executive & Pipeline Intelligence' 
                                : `${cat.title} · Core Modules`,
                            badge: cat.id === 'analytics-decision-science' ? 'Telemetry & Velocity' : 'Essential',
                            icon: cat.icon,
                            cards: (cat.subItems ? cat.subItems.slice(0, Math.ceil((cat.subItems.length || 0) / 2)) : []).map(it => ({
                                title: it.title,
                                description: it.description || '',
                                path: it.path,
                                badge: it.badge,
                                icon: it.icon || cat.icon,
                                tags: [cat.title]
                            }))
                        },
                        {
                            header: cat.id === 'analytics-decision-science' 
                                ? 'Economics, Advanced Tools & Benchmarks' 
                                : `${cat.title} · Advanced Modules`,
                            badge: cat.id === 'analytics-decision-science' ? 'Flagship Analytical Stack' : 'Operational',
                            icon: cat.icon,
                            cards: (cat.subItems ? cat.subItems.slice(Math.ceil((cat.subItems.length || 0) / 2)) : []).map(it => ({
                                title: it.title,
                                description: it.description || '',
                                path: it.path,
                                badge: it.badge,
                                icon: it.icon || cat.icon,
                                tags: [cat.title]
                            }))
                        }
                    ]
            }))
        },
        // 7. ABOUT US
        {
            id: 'about-us',
            name: 'About Us',
            shortName: 'About Us',
            path: '/about',
            icon: Users,
            badge: 'The Platform',
            summary: 'ProfitMachines is an AI-Native Revenue Transformation Platform that helps businesses identify profitable growth opportunities, generate qualified demand, improve sales execution, optimize revenue operations, and strengthen customer growth through connected intelligence, AI, and automation.',
            categories: [
                {
                    id: 'about-profitmachines',
                    title: 'Mission & Platform',
                    desc: 'Mission, vision, core methodology, and operating principles.',
                    path: '/about',
                    badge: 'Core',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Platform & Methodology',
                            badge: 'Enterprise Core',
                            icon: Building2,
                            cards: [
                                {
                                    title: 'About ProfitMachines',
                                    description: 'Mission, vision, and approach to connected revenue transformation.',
                                    path: '/about',
                                    badge: 'Platform',
                                    icon: Building2,
                                    tags: ['Mission', 'Vision']
                                },
                                {
                                    title: 'Value Engineering Roadmap',
                                    description: 'Operating at Frontier Scale: 5-stage milestone realization from T+2 to T+12.',
                                    path: '/about#roadmap',
                                    badge: 'Roadmap',
                                    icon: Layers,
                                    tags: ['Frontier Scale', 'Milestones']
                                },
                                {
                                    title: '6 Architecture Pillars',
                                    description: 'From Signal Inference to AI Trust & Enterprise Data Isolation.',
                                    path: '/about#capabilities',
                                    badge: 'Pillars',
                                    icon: Target,
                                    tags: ['6 Pillars', 'Architecture']
                                },
                                {
                                    title: 'Radical Engineering Precision',
                                    description: 'Empirical velocity, radical transparency, and measurable ARR compounding.',
                                    path: '/about#principles',
                                    badge: 'Principles',
                                    icon: ShieldCheck,
                                    tags: ['Values', 'Governance']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'leadership-teams',
                    title: 'Leadership & Teams',
                    desc: 'Executive architects, functional practice leads, and revenue engineers.',
                    path: '/leadership',
                    badge: 'Cadre',
                    icon: Users,
                    columns: [
                        {
                            header: 'Leadership & Functional Teams',
                            badge: 'Advisory Leads',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Executive Leadership',
                                    description: 'Founders, CROs, and forward-deployed commercial advisory partners.',
                                    path: '/leadership#role-of-leadership',
                                    badge: 'Leadership',
                                    icon: Users,
                                    tags: ['Executive', 'Advisory']
                                },
                                {
                                    title: 'Revenue Strategy & Sales',
                                    description: 'High-velocity pipeline acceleration and enterprise deal execution leads.',
                                    path: '/leadership#revenue-strategy',
                                    badge: 'Commercial',
                                    icon: BrainCircuit,
                                    tags: ['Pipeline', 'Enterprise']
                                },
                                {
                                    title: 'AI & Automation Engineering',
                                    description: 'Autonomous SDR agents, LLM telemetry, and predictive modeling cadre.',
                                    path: '/leadership#ai-engineering',
                                    badge: 'Engineering',
                                    icon: Sparkles,
                                    tags: ['AI Agents', 'Telemetry']
                                },
                                {
                                    title: 'Revenue Operations & Scale',
                                    description: 'Sovereign compliance, CRM data architecture, and retention specialists.',
                                    path: '/leadership#platform-engineering',
                                    badge: 'RevOps',
                                    icon: BarChart3,
                                    tags: ['Compliance', 'Retain']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'careers-fellowships',
                    title: 'Careers & Fellowships',
                    desc: 'Join the team building autonomous commercial platforms and research fellowships.',
                    path: '/careers',
                    badge: 'Hiring & R&D',
                    icon: Award,
                    columns: [
                        {
                            header: 'Talent & Fellowships',
                            badge: 'Join Us',
                            icon: Award,
                            cards: [
                                {
                                    title: 'Careers & Open Roles',
                                    description: 'Forward-deployed engineering, sales architecture, and GTM consulting positions.',
                                    path: '/careers',
                                    badge: 'Open Roles',
                                    icon: Award,
                                    tags: ['Hiring', 'Positions']
                                },
                                {
                                    title: 'AI Revenue Fellowships',
                                    description: '6-month intensive research and applied commercial AI tracks for innovators.',
                                    path: '/careers#fellowships',
                                    badge: 'Research',
                                    icon: Sparkles,
                                    tags: ['Fellowships', 'R&D']
                                },
                                {
                                    title: 'Engineering Culture',
                                    description: 'Radical ownership, zero bureaucracy, and merit-first execution standards.',
                                    path: '/careers#culture',
                                    badge: 'Culture',
                                    icon: ShieldCheck,
                                    tags: ['Ownership', 'Merit']
                                },
                                {
                                    title: 'Direct Application Intake',
                                    description: 'Confidential application portal and portfolio evaluation pipeline.',
                                    path: '/careers#apply',
                                    badge: 'Apply',
                                    icon: ArrowUpRight,
                                    tags: ['Portal', 'Fast Review']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'global-presence-hubs',
                    title: 'Global Presence',
                    desc: 'Operating hubs across Tampa, Singapore, Bengaluru, and Mumbai.',
                    path: '/global-presence',
                    badge: '4 Hubs',
                    icon: Globe,
                    columns: [
                        {
                            header: 'Operating Hubs & Trade Corridors',
                            badge: 'Global Coverage',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'Americas Hub (Tampa, FL)',
                                    description: 'North American headquarters, executive briefing center, and GTM advisory.',
                                    path: '/global-presence#tampa',
                                    badge: 'Americas',
                                    icon: Globe,
                                    tags: ['Tampa HQ', 'US East']
                                },
                                {
                                    title: 'Asia-Pacific Hub (Singapore)',
                                    description: 'Cross-border expansion office and sovereign APAC compliance center.',
                                    path: '/global-presence#singapore',
                                    badge: 'APAC',
                                    icon: Globe,
                                    tags: ['Singapore', 'Cross-Border']
                                },
                                {
                                    title: 'India Centers (Bengaluru & Mumbai)',
                                    description: 'Deep-tech AI research laboratories and 24/7 revenue telemetry operations.',
                                    path: '/global-presence#india',
                                    badge: 'India Labs',
                                    icon: Building2,
                                    tags: ['Bengaluru', 'Mumbai']
                                },
                                {
                                    title: 'Sovereign Delivery Model',
                                    description: 'Zero data transfer across borders with local compliance and strict NDAs.',
                                    path: '/global-presence#sovereignty',
                                    badge: 'Compliance',
                                    icon: ShieldCheck,
                                    tags: ['Sovereign', '20+ Reg.']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'blog-insights',
                    title: 'Blog & Insights',
                    desc: 'Revenue growth knowledge, empirical research, and operational playbooks.',
                    path: '/blog',
                    badge: 'Editorial',
                    icon: BookOpen,
                    columns: [
                        {
                            header: 'Knowledge & Playbooks',
                            badge: 'Editorial Archive',
                            icon: BookOpen,
                            cards: [
                                {
                                    title: 'Executive Playbooks',
                                    description: 'Actionable frameworks for pipeline acceleration and dark-funnel interception.',
                                    path: '/blog#sales-accel',
                                    badge: 'Playbooks',
                                    icon: BookOpen,
                                    tags: ['GTM Guides', 'Tactics']
                                },
                                {
                                    title: 'Revenue Physics & Telemetry',
                                    description: 'Mathematical research on lead response decay curves and forecast science.',
                                    path: '/blog#lead-response-decay-curve',
                                    badge: 'Empirical Data',
                                    icon: BarChart3,
                                    tags: ['Decay Curve', 'Physics']
                                },
                                {
                                    title: 'AI Sales Agents in Action',
                                    description: 'Autonomous SDR orchestration, committee mapping, and pipeline compounding.',
                                    path: '/blog#ai-sales',
                                    badge: 'AI Systems',
                                    icon: BrainCircuit,
                                    tags: ['Agents', 'Automation']
                                },
                                {
                                    title: 'Case Study Dispatches',
                                    description: 'Real-world deployment outcomes, ARR lift breakdowns, and post-mortems.',
                                    path: '/blog#library',
                                    badge: 'Audited Proof',
                                    icon: Award,
                                    tags: ['Audited ROI', 'Dispatches']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'contact-inquiries',
                    title: 'Contact & Inquiries',
                    desc: 'Start a confidential scoping conversation with our revenue architects.',
                    path: '/contact',
                    badge: 'Strict NDA',
                    icon: Phone,
                    columns: [
                        {
                            header: 'Consultation & Scoping Channels',
                            badge: 'Confidential Access',
                            icon: Phone,
                            cards: [
                                {
                                    title: 'Schedule Executive Briefing',
                                    description: 'Direct 30-minute strategic consultation with our revenue transformation architects.',
                                    path: '/contact#schedule',
                                    badge: '30-Min Call',
                                    icon: Phone,
                                    tags: ['Scoping Call', 'Diagnostic']
                                },
                                {
                                    title: 'Confidential NDA Intake',
                                    description: 'Secure, legally binding mutual NDA intake for boards and diligence teams.',
                                    path: '/contact#nda',
                                    badge: 'Mutual NDA',
                                    icon: ShieldCheck,
                                    tags: ['Zero-Leakage', 'Confidential']
                                },
                                {
                                    title: 'Direct Office Directory',
                                    description: 'Direct contact coordinates for Tampa, Singapore, Bengaluru, and Mumbai.',
                                    path: '/contact#locations',
                                    badge: 'Directory',
                                    icon: Globe,
                                    tags: ['Direct Lines', 'Offices']
                                },
                                {
                                    title: 'Alliance & Partner Network',
                                    description: 'Enterprise integration partners, PE/VC portfolio acceleration inquiries.',
                                    path: '/contact#partners',
                                    badge: 'Partnership',
                                    icon: Users,
                                    tags: ['PE / VC', 'Alliances']
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

    // Handle mouse leave with intentional 250ms hover-bridge to prevent accidental closing
    const handleMenuMouseLeave = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        closeTimeoutRef.current = setTimeout(() => {
            setActiveMenuId(null);
        }, 250);
    };

    // Close on route change or hash change, ensuring body scroll is cleanly restored
    useEffect(() => {
        setActiveMenuId(null);
        setMobileOpen(false);
        setSearchOpen(false);
        document.body.style.overflow = '';
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

    // Outside click handler to immediately close mega-menu when clicking elsewhere
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenuId(null);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
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
        if (menu.id === 'about-us' && (
            location.pathname === '/company' || 
            location.pathname === '/about' || 
            location.pathname === '/about-us' ||
            location.pathname === '/leadership' ||
            location.pathname === '/careers' ||
            location.pathname === '/career' ||
            location.pathname === '/global-presence' ||
            location.pathname === '/offices' ||
            location.pathname === '/blog' ||
            location.pathname === '/resources' ||
            location.pathname === '/contact'
        )) return true;
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
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveMenuId(null);
        setMobileOpen(false);
        document.body.style.overflow = '';

        if (path.includes('#')) {
            const [targetPath, rawHash] = path.split('#');
            const hash = decodeURIComponent(rawHash);

            // Notify document listeners to prepare or expand target panels
            window.dispatchEvent(new CustomEvent('pm:hash-navigate', { detail: { path, hash } }));

            const performScroll = () => {
                const el = document.getElementById(hash) || 
                           document.getElementById(hash.toLowerCase()) ||
                           document.querySelector('[name="' + hash + '"]') ||
                           document.querySelector('[data-section-id="' + hash + '"]') ||
                           document.querySelector('[data-section-id="' + hash.toLowerCase() + '"]');
                if (el) {
                    const navOffset = 95;
                    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = Math.max(0, elementPosition - navOffset);
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    return true;
                }
                return false;
            };

            // Immediate scroll if already on the destination page
            if (location.pathname === targetPath || (!targetPath && location.pathname)) {
                if (!performScroll()) {
                    setTimeout(performScroll, 80);
                    setTimeout(performScroll, 250);
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

                    {/* Protected Sales Calculators Menu (Visible when Authenticated) */}
                    {isAuthenticated && (
                        <div className="relative h-full flex items-center shrink-0">
                            <Link
                                to="/sales-calculators"
                                onClick={() => setActiveMenuId(null)}
                                className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-xl text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-tight transition-all duration-150 whitespace-nowrap shrink-0 ${
                                    location.pathname.startsWith('/sales-calculators')
                                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/60'
                                }`}
                            >
                                <Calculator className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                <span>Sales Calculators</span>
                                <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-300/60">
                                    PRO
                                </span>
                            </Link>
                        </div>
                    )}
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

                    {/* Sign In / User Profile */}
                    {!isAuthenticated ? (
                        <Link
                            to="/sign-in"
                            className="inline-flex items-center gap-1.5 bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-600 border border-slate-300 hover:border-blue-500 font-bold text-xs xl:text-sm px-3.5 xl:px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-sm hover:-translate-y-px whitespace-nowrap shrink-0 min-h-[40px]"
                        >
                            <LogIn className="w-4 h-4 shrink-0 text-blue-600" />
                            <span>Sign In</span>
                        </Link>
                    ) : (
                        <div className="relative shrink-0" ref={userMenuRef}>
                            <button
                                type="button"
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2 h-10 px-2.5 sm:px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-slate-700 text-xs font-semibold transition-all shadow-2xs cursor-pointer"
                                aria-label="User account menu"
                            >
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                                    {(user?.fullName || user?.userId || 'U').slice(0, 1).toUpperCase()}
                                </div>
                                <span className="hidden sm:inline max-w-[110px] truncate text-slate-800 font-bold">
                                    {user?.userId || user?.fullName}
                                </span>
                                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${userMenuOpen ? 'rotate-180 text-blue-600' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1">
                                    <div className="px-3.5 py-2.5 border-b border-slate-100">
                                        <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Signed in as</div>
                                        <div className="font-bold text-sm text-slate-900 truncate">{user?.fullName}</div>
                                        <div className="text-xs text-slate-500 truncate">@{user?.userId} {user?.companyName ? `• ${user?.companyName}` : ''}</div>
                                    </div>

                                    <div className="py-1">
                                        <Link
                                            to="/sales-calculators"
                                            onClick={() => setUserMenuOpen(false)}
                                            className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
                                        >
                                            <Calculator className="w-4 h-4 text-blue-600" />
                                            <span>Sales Calculators Suite</span>
                                            <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">PRO</span>
                                        </Link>
                                    </div>

                                    <div className="pt-1 border-t border-slate-100">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setUserMenuOpen(false);
                                                logout();
                                            }}
                                            className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-left"
                                        >
                                            <LogOut className="w-4 h-4 text-rose-500" />
                                            <span>Sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

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
                const displayOutcomeBadge = categoryConfig?.keyRevenueOutcome || activeConfig?.outcomeBadge || '';
                const displayRecommendedFor = categoryConfig?.recommendedIndustries || categoryConfig?.recommendedAudience || activeConfig?.recommendedFor || [];
                const displayBusinessImpacts = categoryConfig?.businessImpacts || activeConfig?.businessImpacts || [];
                const allLinks = currentCategory?.columns ? currentCategory.columns.flatMap((col: any) => col.cards || []) : [];

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
                                <div className="flex flex-col lg:flex-row items-stretch">
                                    {/* ── LEFT SIDEBAR (COMPACT, BOTTOM ANCHORED LINK, ZERO DEAD SPACE) ── */}
                                    <aside className={`w-full lg:w-[260px] xl:w-[275px] bg-slate-50/95 text-slate-900 ${currentMenu.id === 'resources-hub' ? 'p-2.5 sm:p-3' : 'p-3 sm:p-3.5'} flex flex-col justify-between shrink-0 border-r border-slate-200/80`}>
                                            <div className={`${currentMenu.categories.length > 7 ? 'space-y-1' : 'space-y-2'}`}>
                                                {/* Section Label */}
                                                <div>
                                                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600 block">
                                                        {activeConfig.sectionTag}
                                                    </span>
                                                    <h2 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading tracking-tight mt-0.5">
                                                        {currentMenu.name}
                                                    </h2>
                                                    {currentMenu.id !== 'resources-hub' && currentMenu.summary && (
                                                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                                                            {currentMenu.summary}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Category List (Tight Vertical Rhythm - No Unnecessary Scrollbars) */}
                                                <nav className={`pt-0.5 ${currentMenu.categories.length > 7 ? "space-y-0.5" : "space-y-1"}`}>
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
                                            <div className={`pt-1.5 border-t border-slate-200/70 ${currentMenu.id === 'resources-hub' ? 'mt-2' : 'mt-3'}`}>
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

                                        {/* ── RIGHT CONTENT PANEL (FLEX-1 AUTO-FILL, DOCKED TO BOTTOM) ── */}
                                        <main className="flex-1 bg-white p-3 sm:p-4 flex flex-col justify-between">
                                            {/* Top Section: Header + Cards Grid */}
                                            <div className="space-y-2.5">
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

                                                {/* Main Content Grid: Cards hug content tightly */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 content-start">
                                                    {allLinks.map((card, idx) => {
                                                        const CardIcon = card.icon || Target;

                                                        return (
                                                            <Link
                                                                key={idx}
                                                                to={card.path}
                                                                onClick={() => handleSubMenuCardClick(card.path)}
                                                                className="group p-2.5 sm:py-2.5 sm:px-3 rounded-xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-xs transition-all duration-150 flex items-center gap-2.5 cursor-pointer"
                                                            >
                                                                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 text-blue-600 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                                                                    <CardIcon className="w-3.5 h-3.5" />
                                                                </div>
                                                                <div className="min-w-0 flex-1 flex items-center justify-between gap-1.5">
                                                                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                                                        {card.title}
                                                                    </span>
                                                                    {(card.badge || (card.tags && card.tags[0])) && (
                                                                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors shrink-0">
                                                                            {card.badge || card.tags[0]}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Bottom Summary Section (Firmly docked at the bottom of the panel) */}
                                            <div className="mt-auto pt-2.5">
                                                <div className="p-2.5 px-3 rounded-xl bg-blue-50/40 border border-blue-100/80 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs shrink-0">
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
                                                        <span>
                                                            {currentCategory.id === 'industry-resource-hubs'
                                                                ? 'Explore Industry Hubs'
                                                                : currentCategory.id === 'functional-resource-hubs'
                                                                ? 'Explore Functional Hubs'
                                                                : activeConfig.ctaText}
                                                        </span>
                                                        <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </main>
                                    </div>

                                    {/* Bottom Executive Consultation Banner (Consistent across all mega menus) */}
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
                            {/* Sign In / User Status Card for Mobile */}
                            {!isAuthenticated ? (
                                <Link
                                    to="/sign-in"
                                    onClick={() => setMobileOpen(false)}
                                    className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-white hover:bg-blue-50 border border-slate-300 hover:border-blue-500 text-slate-800 hover:text-blue-600 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs transition-all"
                                >
                                    <LogIn className="w-4 h-4 text-blue-600" />
                                    <span>Sign In to Account</span>
                                </Link>
                            ) : (
                                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                {(user?.fullName || user?.userId || 'U').slice(0, 1).toUpperCase()}
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-xs font-bold text-slate-900 truncate">{user?.fullName}</div>
                                                <div className="text-[10px] text-slate-500 truncate">@{user?.userId} {user?.companyName ? `• ${user?.companyName}` : ''}</div>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                logout();
                                                setMobileOpen(false);
                                            }}
                                            className="px-2 py-1 text-[11px] font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                    <Link
                                        to="/sales-calculators"
                                        onClick={() => setMobileOpen(false)}
                                        className="w-full min-h-[38px] flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-3 rounded-lg shadow-2xs transition-colors"
                                    >
                                        <Calculator className="w-3.5 h-3.5" />
                                        <span>Open Sales Calculators</span>
                                    </Link>
                                </div>
                            )}

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
                            {/* Authenticated Sales Calculators Mobile Link */}
                            {isAuthenticated && (
                                <Link
                                    to="/sales-calculators"
                                    onClick={() => setMobileOpen(false)}
                                    className={`rounded-xl border min-h-[44px] px-3.5 py-2.5 flex items-center justify-between gap-2.5 cursor-pointer select-none transition-all duration-150 ${
                                        location.pathname.startsWith('/sales-calculators')
                                            ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                                            : 'border-blue-200 bg-blue-50/40 text-blue-900 hover:bg-blue-50'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <Calculator className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span className="text-xs sm:text-sm font-bold truncate block font-heading">
                                            Sales Calculators
                                        </span>
                                        <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-300/60">
                                            PRO
                                        </span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                                </Link>
                            )}

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
