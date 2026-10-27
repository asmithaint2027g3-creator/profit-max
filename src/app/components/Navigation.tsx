import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, X, ChevronRight, ChevronDown, Search, ArrowRight, ArrowUpRight,
    Compass, Building2, Zap, Handshake, Rocket, BrainCircuit, TrendingUp, Globe,
    ShieldCheck, Layers, Cpu, DollarSign, Target, Sparkles, UserCheck, Sliders,
    Briefcase, ShoppingBag, Bot, Users, Activity, FileText, Lock, Coins,
    Network, Clock, BookOpen, HelpCircle, Landmark, HeartPulse, GraduationCap,
    Lightbulb, Shield, BarChart3, CheckCircle2, Phone, Radio, Factory, Server, Box, Scale,
    Flame, Store, Building, Cloud
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
        // 1. OFFERINGS
        {
            id: 'offerings',
            name: 'Offerings',
            shortName: 'Offerings',
            path: '/offerings',
            icon: Compass,
            badge: 'Revenue Architecture',
            summary: 'Comprehensive revenue architecture, discovery engines, and execution playbooks.',
            categories: [
                {
                    id: 'profit-pool-discovery',
                    title: 'Profit Pool Discovery',
                    desc: 'Four discovery pillars and sixteen capabilities to isolate profit pools, buyer intent, and defensible margin.',
                    path: '/offerings/profit-pool-discovery',
                    badge: 'Discovery Capabilities',
                    icon: Target,
                    columns: [
                        {
                            header: 'Core Discovery',
                            badge: 'Pillar 01',
                            icon: Target,
                            cards: [
                                {
                                    title: 'Market & Whitespace',
                                    description: 'Isolate which micro-segments carry contribution margin and model competitive defensibility.',
                                    path: '/offerings/profit-pool-discovery#market-whitespace',
                                    badge: '#market-whitespace',
                                    icon: Globe,
                                    tags: ['TAM Dissection', 'Margin Defense']
                                },
                                {
                                    title: 'Demand & Intent',
                                    description: 'Audit the complete demand chain and deploy live dark-funnel buyer intent scoring.',
                                    path: '/offerings/profit-pool-discovery#demand-intent',
                                    badge: '#demand-intent',
                                    icon: TrendingUp,
                                    tags: ['Intent Scoring', 'Velocity Telemetry']
                                },
                                {
                                    title: 'Value & ROI',
                                    description: 'Buyer-evidenced willingness-to-pay engines, discount guardrails, and cost-to-serve audits.',
                                    path: '/offerings/profit-pool-discovery#value-roi',
                                    badge: '#value-roi',
                                    icon: DollarSign,
                                    tags: ['Willingness-to-Pay', 'Price Realization']
                                }
                            ]
                        },
                        {
                            header: 'Displacement & PMF',
                            badge: 'Pillar 02',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'Competitive Displacement',
                                    description: 'Deal-by-deal rival dissection dossiers, ecosystem positioning, and live battlecards.',
                                    path: '/offerings/profit-pool-discovery#competitive',
                                    badge: '#competitive',
                                    icon: ShieldCheck,
                                    tags: ['Win/Loss Interviews', 'Rival Dissection']
                                },
                                {
                                    title: 'Product-Market Fit',
                                    description: 'Identify product usage milestones that trigger monetization and validate pre-build concepts.',
                                    path: '/offerings/profit-pool-discovery#pmf',
                                    badge: '#pmf',
                                    icon: Sparkles,
                                    tags: ['Usage Triggers', 'Launch Telemetry']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'demand-engineering',
                    title: 'Demand Engineering',
                    desc: 'Engineered pipeline systems from dark-funnel intent capture to high-velocity closed revenue.',
                    path: '/offerings/demand-engineering',
                    badge: 'Demand Engine',
                    icon: Zap,
                    columns: [
                        {
                            header: 'Inbound & Orchestration',
                            badge: 'Top-Funnel',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Demand Generation',
                                    description: 'Multi-channel algorithmic demand capture generating 40-60% verified pipeline lift.',
                                    path: '/offerings/demand-engineering#demand-generation',
                                    badge: '#demand-generation',
                                    icon: Zap,
                                    tags: ['Pipeline Lift', 'CAC Reduction']
                                },
                                {
                                    title: 'Account-Based Marketing',
                                    description: 'Precision tier-1 account orchestration with cross-channel bespoke ad and content meshes.',
                                    path: '/offerings/demand-engineering#abm',
                                    badge: '#abm',
                                    icon: Target,
                                    tags: ['Account Mesh', '200% Engagement']
                                },
                                {
                                    title: 'Outbound Acceleration',
                                    description: 'Signal-based autonomous outbound playbooks with 3.8x verified meeting velocity lift.',
                                    path: '/offerings/demand-engineering#outbound',
                                    badge: '#outbound',
                                    icon: Rocket,
                                    tags: ['Signal-Based', 'Autonomous Outbound']
                                }
                            ]
                        },
                        {
                            header: 'Content & Signals',
                            badge: 'Mid-Funnel',
                            icon: Sparkles,
                            cards: [
                                {
                                    title: 'Content-to-Pipeline',
                                    description: 'High-intent editorial architectures engineered for search rank and direct executive pipeline.',
                                    path: '/offerings/demand-engineering#content-pipeline',
                                    badge: '#content-pipeline',
                                    icon: FileText,
                                    tags: ['Direct Pipeline', '95% Attribution']
                                },
                                {
                                    title: 'Intent Data Platform',
                                    description: 'Real-time signal fusion engine routing in-market surge buyers to reps in under one second.',
                                    path: '/offerings/demand-engineering#intent-data',
                                    badge: '#intent-data',
                                    icon: Activity,
                                    tags: ['Dark-Funnel Fusion', '<1s Routing']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'sales-acceleration',
                    title: 'Sales Acceleration',
                    desc: 'Predictive intelligence, autonomous workflows, and conversational agents compressing deal cycles.',
                    path: '/offerings/sales-acceleration',
                    badge: 'Deal Acceleration',
                    icon: Rocket,
                    columns: [
                        {
                            header: 'Deal Intelligence & Agents',
                            badge: 'Velocity',
                            icon: BrainCircuit,
                            cards: [
                                {
                                    title: 'Predictive Deal Intelligence',
                                    description: 'Neural deal health scoring and early stall warnings delivering 50% forecast accuracy gains.',
                                    path: '/offerings/sales-acceleration#deal-intelligence',
                                    badge: '#deal-intelligence',
                                    icon: BrainCircuit,
                                    tags: ['Stall Warnings', 'Neural Pacing']
                                },
                                {
                                    title: 'Autonomous Workflows',
                                    description: 'Self-driving CRM administration and follow-up engines reclaiming 60% of rep selling time.',
                                    path: '/offerings/sales-acceleration#autonomous-workflows',
                                    badge: '#autonomous-workflows',
                                    icon: Bot,
                                    tags: ['Auto CRM', 'Zero Manual Admin']
                                },
                                {
                                    title: 'Conversational AI Agents',
                                    description: 'Interactive demo copilots and automated discovery agents delivering 50% conversion lift.',
                                    path: '/offerings/sales-acceleration#conversational-ai',
                                    badge: '#conversational-ai',
                                    icon: Sparkles,
                                    tags: ['Real-Time Copilots', 'Qualification']
                                }
                            ]
                        },
                        {
                            header: 'Execution & Expansion',
                            badge: 'Expansion',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Quote-to-Cash',
                                    description: 'Algorithmic CPQ, dynamic deal desks, and automated contract workflows cutting cycle times 50%.',
                                    path: '/offerings/sales-acceleration#quote-to-cash',
                                    badge: '#quote-to-cash',
                                    icon: DollarSign,
                                    tags: ['Automated CPQ', '50% Faster Cash']
                                },
                                {
                                    title: 'Expansion Intelligence',
                                    description: 'Telemetry detecting cross-sell triggers and organizational buying signals within enterprise logos.',
                                    path: '/offerings/sales-acceleration#expansion',
                                    badge: '#expansion',
                                    icon: TrendingUp,
                                    tags: ['Cross-Sell Radar', 'NRR Lift']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'revenue-operations',
                    title: 'Revenue Operations',
                    desc: 'Mathematical command center, 98% forecasting accuracy, and unified multi-touch attribution.',
                    path: '/offerings/revenue-operations',
                    badge: 'Command Center',
                    icon: Sliders,
                    columns: [
                        {
                            header: 'Telemetry & Forecast',
                            badge: 'Control',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: 'Command Center',
                                    description: 'Unified commercial cockpit delivering real-time telemetry across marketing, sales, and CS.',
                                    path: '/offerings/revenue-operations#command-center',
                                    badge: '#command-center',
                                    icon: Activity,
                                    tags: ['Live Cockpit', 'Instant Alerts']
                                },
                                {
                                    title: 'Forecasting',
                                    description: 'Bayesian behavioral forecast models eliminating rep commit bias with 98% predictive certainty.',
                                    path: '/offerings/revenue-operations#forecasting',
                                    badge: '#forecasting',
                                    icon: BarChart3,
                                    tags: ['98% Accuracy', '<5% Variance']
                                }
                            ]
                        },
                        {
                            header: 'Attribution & Territory',
                            badge: 'Optimization',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'Attribution',
                                    description: 'First-party algorithmic attribution connecting every closed dollar to initial multi-channel touchpoints.',
                                    path: '/offerings/revenue-operations#attribution',
                                    badge: '#attribution',
                                    icon: Target,
                                    tags: ['Multi-Touch Attribution', '95% Match']
                                },
                                {
                                    title: 'Territory',
                                    description: 'Algorithmic quota balancing and account propensity distribution boosting revenue per rep 25%.',
                                    path: '/offerings/revenue-operations#territory',
                                    badge: '#territory',
                                    icon: Globe,
                                    tags: ['Dynamic Quota', 'Workload Balance']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'gtm-transformation',
                    title: 'GTM Transformation',
                    desc: 'End-to-end commercial transformation: multi-product motions, process re-engineering, and cultural adoption.',
                    path: '/offerings/gtm-transformation',
                    badge: 'System Roadmap',
                    icon: Network,
                    columns: [
                        {
                            header: 'Strategy & Process',
                            badge: 'Foundation',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Strategy & Design',
                                    description: 'Commercial operating system blueprint aligning marketing, sales, product, and leadership.',
                                    path: '/offerings/gtm-transformation#gtm-strategy',
                                    badge: '#gtm-strategy',
                                    icon: Compass,
                                    tags: ['GTM Alignment', 'Exec Blueprint']
                                },
                                {
                                    title: 'Process',
                                    description: 'Bottleneck elimination and end-to-end process redesign compressing sales cycles 40%.',
                                    path: '/offerings/gtm-transformation#process',
                                    badge: '#process',
                                    icon: Sliders,
                                    tags: ['Cycle Compression', 'Waste Removal']
                                }
                            ]
                        },
                        {
                            header: 'Motions & Adoption',
                            badge: 'Scale',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Multi-Product',
                                    description: 'Orchestrating simultaneous product motions, cross-sell playbooks, and unified packaging.',
                                    path: '/offerings/gtm-transformation#multi-product',
                                    badge: '#multi-product',
                                    icon: Layers,
                                    tags: ['Cross-Sell Playbooks', 'Deal Size +50%']
                                },
                                {
                                    title: 'Adoption',
                                    description: 'Rigorous change enablement, certification frameworks, and continuous telemetry monitoring.',
                                    path: '/offerings/gtm-transformation#adoption',
                                    badge: '#adoption',
                                    icon: UserCheck,
                                    tags: ['80% Sustained Adoption', 'ROI Validation']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'customer-success',
                    title: 'Customer Success Engine',
                    desc: 'Predictive churn mitigation, automated renewal defense, and systematic net revenue expansion.',
                    path: '/offerings/customer-success',
                    badge: 'Retention Engine',
                    icon: Users,
                    columns: [
                        {
                            header: 'Retention & Health',
                            badge: 'Defense',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Retention',
                                    description: 'Predictive churn mitigation models detecting accounts at risk 90 days before renewal date.',
                                    path: '/offerings/customer-success#retention',
                                    badge: '#retention',
                                    icon: ShieldCheck,
                                    tags: ['90-Day Early Warning', '20% Churn Reduction']
                                },
                                {
                                    title: 'Health',
                                    description: 'Multi-dimensional telemetry scoring feature depth, executive engagement, and support sentiment.',
                                    path: '/offerings/customer-success#health',
                                    badge: '#health',
                                    icon: Activity,
                                    tags: ['Multi-Signal Score', 'Proactive Playbooks']
                                }
                            ]
                        },
                        {
                            header: 'Expansion & Renewal',
                            badge: 'Growth',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'Expansion Engine',
                                    description: 'Automated usage inflection triggers identifying accounts primed for tier upgrades and cross-sells.',
                                    path: '/offerings/customer-success#expansion-engine',
                                    badge: '#expansion-engine',
                                    icon: TrendingUp,
                                    tags: ['Inflection Triggers', '+15% NRR Lift']
                                },
                                {
                                    title: 'Renewal',
                                    description: 'Automated 120-day renewal playbooks, margin protection guardrails, and executive cadences.',
                                    path: '/offerings/customer-success#renewal',
                                    badge: '#renewal',
                                    icon: DollarSign,
                                    tags: ['120-Day Cadence', '95% On-Time Renewal']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'growth-intelligence',
                    title: 'Growth Intelligence',
                    desc: 'Continuous market research, live competitive intelligence, and buyer willingness-to-pay modeling.',
                    path: '/offerings/growth-intelligence',
                    badge: 'Decision Science',
                    icon: Lightbulb,
                    columns: [
                        {
                            header: 'Market & Competitive',
                            badge: 'Intelligence',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'Market Research',
                                    description: 'Continuous buyer interviews, dark-funnel intent analytics, and category sentiment telemetry.',
                                    path: '/offerings/growth-intelligence#market-research',
                                    badge: '#market-research',
                                    icon: Globe,
                                    tags: ['Empirical Telemetry', 'Risk Mitigation']
                                },
                                {
                                    title: 'Competitive Intelligence',
                                    description: 'Real-time rival product teardowns, pricing shift detection, and win/loss interview synthesis.',
                                    path: '/offerings/growth-intelligence#competitive-intel',
                                    badge: '#competitive-intel',
                                    icon: ShieldCheck,
                                    tags: ['<10 Day Shift Alert', '+15% Win Rate']
                                }
                            ]
                        },
                        {
                            header: 'Pricing & Growth',
                            badge: 'Economics',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Pricing Power',
                                    description: 'Empirical willingness-to-pay modeling and tier optimization recovering 5-15% EBITDA margin.',
                                    path: '/offerings/growth-intelligence#pricing',
                                    badge: '#pricing',
                                    icon: DollarSign,
                                    tags: ['EBITDA Expansion', 'Discount Guardrails']
                                },
                                {
                                    title: 'Product Growth',
                                    description: 'Feature adoption telemetry identifying core value moments that drive long-term expansion.',
                                    path: '/offerings/growth-intelligence#product-growth',
                                    badge: '#product-growth',
                                    icon: Sparkles,
                                    tags: ['Core Value Moments', 'Growth Pacing']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'ai-trust-governance',
                    title: 'AI Trust & Governance',
                    desc: 'Explainable AI, bias mitigation algorithms, and full regulatory compliance assurance.',
                    path: '/offerings/ai-trust-governance',
                    badge: 'Enterprise Ready',
                    icon: ShieldCheck,
                    columns: [
                        {
                            header: 'Explainability & Compliance',
                            badge: 'Security',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Explainable AI',
                                    description: 'Transparent attribution rationale and decision telemetry behind every algorithmic action.',
                                    path: '/offerings/ai-trust-governance#explainable',
                                    badge: '#explainable',
                                    icon: ShieldCheck,
                                    tags: ['Auditable Rationale', 'Transparent Decisions']
                                },
                                {
                                    title: 'Compliance',
                                    description: 'SOC2 Type II, ISO 27001, and EU AI Act enterprise governance frameworks with zero incident record.',
                                    path: '/offerings/ai-trust-governance#compliance',
                                    badge: '#compliance',
                                    icon: Lock,
                                    tags: ['SOC2 & ISO Ready', 'Zero Breaches']
                                }
                            ]
                        },
                        {
                            header: 'Fairness & Leadership',
                            badge: 'Governance',
                            icon: UserCheck,
                            cards: [
                                {
                                    title: 'Bias',
                                    description: 'Statistical algorithmic fairness testing preventing demographic or regional distortion in scoring.',
                                    path: '/offerings/ai-trust-governance#bias',
                                    badge: '#bias',
                                    icon: Sliders,
                                    tags: ['Fairness Auditing', 'Model Alignment']
                                },
                                {
                                    title: 'Executive',
                                    description: 'Boardroom-level AI risk frameworks, liability protections, and strategic revenue oversight.',
                                    path: '/offerings/ai-trust-governance#executive',
                                    badge: '#executive',
                                    icon: UserCheck,
                                    tags: ['Board Governance', 'Risk Controls']
                                }
                            ]
                        }
                    ]
                }
            ]
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
            name: 'AI Native Sales',
            shortName: 'AI Native Sales',
            path: '/ai-native-sales',
            icon: BrainCircuit,
            badge: 'Autonomous Revenue OS',
            summary: 'Autonomous sales operations — replacing fragmented GTM tool stacks with a unified, self-learning revenue intelligence layer.',
            categories: [
                {
                    id: 'agentic-sdr',
                    title: 'Agentic SDR & Autopilots',
                    desc: 'Autonomous multi-channel account research, bespoke messaging, objection handling, and meeting booking',
                    path: '/ai-native-sales/agentic-sdr',
                    badge: 'Autonomous Outbound',
                    icon: Bot,
                    columns: [
                        {
                            header: 'Architecture & Stack',
                            badge: '#architecture',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Architecture & Stack',
                                    description: 'Deep 5-layer technical breakdown: intelligence, personalization, multi-channel mesh, objection handling, and CRM sync.',
                                    path: '/ai-native-sales/agentic-sdr#architecture',
                                    badge: '5 Layers',
                                    icon: Layers,
                                    tags: ['Perception Agents', 'Reasoning LLMs']
                                }
                            ]
                        },
                        {
                            header: 'Features & Capabilities',
                            badge: '#features',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'Key Features & Capabilities',
                                    description: 'Hyper-personalized outreach, real-time intent triggering, SLA enforcement, and Manual vs. Agentic SDR comparison.',
                                    path: '/ai-native-sales/agentic-sdr#features',
                                    badge: '30x Scale',
                                    icon: Zap,
                                    tags: ['SLA Enforcement', 'Comparison Table']
                                }
                            ]
                        },
                        {
                            header: 'Governance & Outcomes',
                            badge: '#governance',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Governance & Outcomes',
                                    description: 'Pre-approval rules, escalation triggers, audit trails, and 3.8x verified meeting velocity lift.',
                                    path: '/ai-native-sales/agentic-sdr#governance',
                                    badge: '3.8x Lift',
                                    icon: ShieldCheck,
                                    tags: ['Human-in-Loop', '65% CAC Reduction']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'predictive-intelligence',
                    title: 'Predictive Intelligence',
                    desc: 'Neural ICP propensity scoring, real-time pipeline velocity telemetry, and mathematical forecast models',
                    path: '/ai-native-sales/predictive-intelligence',
                    badge: 'Neural Pacing',
                    icon: BrainCircuit,
                    columns: [
                        {
                            header: 'ICP Propensity',
                            badge: '#propensity',
                            icon: Target,
                            cards: [
                                {
                                    title: 'ICP Propensity Scoring',
                                    description: 'Neural scoring combining firmographics, dark-funnel intent, and contextual signals with 98% target accuracy.',
                                    path: '/ai-native-sales/predictive-intelligence#propensity',
                                    badge: '98% Accuracy',
                                    icon: Target,
                                    tags: ['Signal Fusion', 'Dark-Funnel Intent']
                                }
                            ]
                        },
                        {
                            header: 'Velocity Telemetry',
                            badge: '#velocity',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'Pipeline Velocity & Pacing',
                                    description: 'Real-time stage-slip detection, stagnation warnings, and automated intervention playbooks.',
                                    path: '/ai-native-sales/predictive-intelligence#velocity',
                                    badge: '40-60% Growth',
                                    icon: TrendingUp,
                                    tags: ['Stage-Slip Alert', 'Deal Health Score']
                                }
                            ]
                        },
                        {
                            header: 'Forecast Models',
                            badge: '#forecast',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: 'Forecast Accuracy Models',
                                    description: 'Unified Bayesian behavioral models replacing rep commit guesswork with mathematical certainty.',
                                    path: '/ai-native-sales/predictive-intelligence#forecast',
                                    badge: '+50% Lift',
                                    icon: BarChart3,
                                    tags: ['Bayesian Prediction', 'Variance Reduction']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'deal-execution',
                    title: 'Deal Execution & Enablement',
                    desc: 'Multi-threaded buying committee mapping, objective rep telemetry, and dynamic battlecard autopilots',
                    path: '/ai-native-sales/deal-execution',
                    badge: 'Consensus & Win Rate',
                    icon: Users,
                    columns: [
                        {
                            header: 'Committee Visibility',
                            badge: '#committee',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Buying Committee Visibility',
                                    description: 'Multi-threaded mapping of 6-10 stakeholders with influence graphs, consensus scoring, and champion verification.',
                                    path: '/ai-native-sales/deal-execution#committee',
                                    badge: '+15 Pts Win Rate',
                                    icon: Users,
                                    tags: ['Influence Graph', 'Consensus Index']
                                }
                            ]
                        },
                        {
                            header: 'Rep Telemetry',
                            badge: '#telemetry',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'Real-Time Rep Telemetry',
                                    description: 'Objective measurement of rep activity, talk ratios, and automated coaching trigger identification.',
                                    path: '/ai-native-sales/deal-execution#telemetry',
                                    badge: '50% Faster Ramp',
                                    icon: Activity,
                                    tags: ['MEDDPICC Gates', 'Productivity Pacing']
                                }
                            ]
                        },
                        {
                            header: 'Dynamic Battlecards',
                            badge: '#battlecards',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Dynamic Battlecards',
                                    description: 'Real-time competitive intelligence monitoring rival moves with live in-call battlecard HUD delivery.',
                                    path: '/ai-native-sales/deal-execution#battlecards',
                                    badge: '+10 Pts Rivals',
                                    icon: ShieldCheck,
                                    tags: ['Live HUD Delivery', 'Rival Displacement']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'integrations-security',
                    title: 'Integrations & Security',
                    desc: 'Zero rip-and-replace bidirectional APIs, 5-layer security architecture, and regulatory frameworks',
                    path: '/ai-native-sales/integrations',
                    badge: 'Zero-Trust Stack',
                    icon: ShieldCheck,
                    columns: [
                        {
                            header: 'Stack Integrations',
                            badge: '#integrations',
                            icon: Server,
                            cards: [
                                {
                                    title: 'Tech Stack Integrations',
                                    description: 'Zero rip-and-replace bidirectional sync across CRM, sales engagement, intent, comms, and data warehouses.',
                                    path: '/ai-native-sales/integrations#integrations',
                                    badge: 'Zero Rip-Replace',
                                    icon: Server,
                                    tags: ['Salesforce & HubSpot', 'Snowflake & BigQuery']
                                }
                            ]
                        },
                        {
                            header: 'Security Architecture',
                            badge: '#security',
                            icon: Lock,
                            cards: [
                                {
                                    title: 'Security Architecture',
                                    description: '5-layer security breakdown: infrastructure, AES-256/TLS 1.3, zero-trust RBAC/SSO, OWASP testing, and 99.99% SLA.',
                                    path: '/ai-native-sales/integrations#security',
                                    badge: 'SOC 2 & ISO',
                                    icon: Lock,
                                    tags: ['CMEK Encryption', 'Zero Model Training']
                                }
                            ]
                        },
                        {
                            header: 'Compliance Frameworks',
                            badge: '#compliance',
                            icon: Shield,
                            cards: [
                                {
                                    title: 'Compliance Frameworks',
                                    description: 'Industry matrices for SaaS, FinTech, Healthcare, and Crypto; 3 deployment models and downloadable audits.',
                                    path: '/ai-native-sales/integrations#compliance',
                                    badge: 'HIPAA & GDPR',
                                    icon: Shield,
                                    tags: ['BAA & DPA Ready', 'Private VPC Cloud']
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
            name: 'Growth & Acceleration Science',
            shortName: 'Growth & Acceleration Science',
            path: '/growth-acceleration-science',
            icon: TrendingUp,
            badge: 'Scientific Revenue OS',
            summary: 'Proprietary 7-layer revenue discovery, statistical whitespace telemetry, conversion mathematics, and compounding ARR models.',
            categories: [
                {
                    id: 'seven-layer-discovery',
                    title: '7-Layer Revenue Discovery',
                    desc: 'Comprehensive revenue architecture across Market, Demand, Value, Channel, Competitive, Customer & PMF',
                    path: '/offerings/discovery-stack',
                    badge: '7-Layer Stack',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Strategic Discovery Layers',
                            badge: 'Layers 1–3',
                            icon: Compass,
                            cards: [
                                {
                                    title: 'Market & Whitespace Discovery',
                                    description: 'Empirical profit pool boundaries, regulatory tailwinds, and addressable TAM.',
                                    path: '/offerings/discovery-stack#layer-1',
                                    badge: 'Layer 1',
                                    icon: Globe,
                                    tags: ['TAM Modeling', 'Profit Pools']
                                },
                                {
                                    title: 'Demand & Signal Intelligence',
                                    description: 'Latent search volume, executive search signals, and buyer intent triggers.',
                                    path: '/offerings/discovery-stack#layer-2',
                                    badge: 'Layer 2',
                                    icon: Activity,
                                    tags: ['Intent Surges', 'First-Party Signal']
                                },
                                {
                                    title: 'Value Proposition Quantification',
                                    description: 'Economic impact modeling, payback metrics, and differentiation defensibility.',
                                    path: '/offerings/discovery-stack#layer-3',
                                    badge: 'Layer 3',
                                    icon: DollarSign,
                                    tags: ['ROI Proof', 'Quantified Value']
                                }
                            ]
                        },
                        {
                            header: 'Execution Discovery Layers',
                            badge: 'Layers 4–7',
                            icon: Sliders,
                            cards: [
                                {
                                    title: 'Channel & Routing Architecture',
                                    description: 'Direct sales, partner ecosystems, and programmatic inbound routing.',
                                    path: '/offerings/discovery-stack#layer-4',
                                    badge: 'Layer 4',
                                    icon: Network,
                                    tags: ['Routing Math', 'Channel Mix']
                                },
                                {
                                    title: 'Competitive Displacement Matrices',
                                    description: 'Architectural vulnerability mapping of incumbents across accounts.',
                                    path: '/offerings/discovery-stack#layer-5',
                                    badge: 'Layer 5',
                                    icon: ShieldCheck,
                                    tags: ['Vulnerabilities', 'Displacement']
                                },
                                {
                                    title: 'Customer Retention & PMF Depth',
                                    description: 'Cohort analysis, net revenue retention (NRR), and expansion thresholds.',
                                    path: '/offerings/discovery-stack#layer-6',
                                    badge: 'Layers 6 & 7',
                                    icon: Target,
                                    tags: ['NRR Lift', 'PMF Scorecard']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'growth-engineering-telemetry',
                    title: 'Algorithmic Growth Engineering',
                    desc: 'Continuous conversion modeling, revenue velocity pacing, and margin optimization',
                    path: '/growth-acceleration-science',
                    badge: 'Growth Science',
                    icon: BrainCircuit,
                    columns: [
                        {
                            header: 'Conversion & Velocity',
                            badge: 'Mathematical Pacing',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: 'AI Growth Acceleration Engine',
                                    description: 'Systematic conversion optimization and compounding pipeline flywheel.',
                                    path: '/growth-acceleration-science',
                                    badge: 'Core Science',
                                    icon: TrendingUp,
                                    tags: ['Flywheel', 'Compounding ARR']
                                },
                                {
                                    title: 'Predictive Unit Economics & LTV:CAC',
                                    description: 'Scientific payback modeling and customer acquisition cost reduction.',
                                    path: '/growth-acceleration-science',
                                    badge: 'Economics',
                                    icon: DollarSign,
                                    tags: ['CAC Payback', 'LTV Expansion']
                                }
                            ]
                        },
                        {
                            header: 'Retention & Margin Studio',
                            badge: 'Net Retention',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Retention Intelligence & Churn Defense',
                                    description: 'Predictive account health scoring and proactive renewal intervention.',
                                    path: '/growth-acceleration-science',
                                    badge: 'Retention',
                                    icon: ShieldCheck,
                                    tags: ['Churn Defense', '118% NRR']
                                },
                                {
                                    title: 'Pricing Power & Gross Margin Studio',
                                    description: 'Algorithmic contract sizing, tiering models, and margin expansion.',
                                    path: '/growth-acceleration-science',
                                    badge: 'Margins',
                                    icon: DollarSign,
                                    tags: ['Gross Margin', 'Pricing Power']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 5. GLOBAL BUSINESS ACCELERATIONS
        {
            id: 'global-business-accelerations',
            name: 'Global Business Accelerations',
            shortName: 'Global Business Accelerations',
            path: '/global-business-accelerations',
            icon: Globe,
            badge: 'Cross-Border Expansion',
            summary: 'International market penetration, DemandPulse™ geographical intelligence, multi-currency revenue architecture, and jurisdictional GTM.',
            categories: [
                {
                    id: 'cross-border-penetration',
                    title: 'International Market Penetration',
                    desc: 'Rapid geographic market entry and cross-border enterprise revenue execution',
                    path: '/global-business-accelerations',
                    badge: 'Global GTM',
                    icon: Globe,
                    columns: [
                        {
                            header: 'Regional Playbooks',
                            badge: 'Major Markets',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'North America Enterprise Scale',
                                    description: 'Tier-1 enterprise outbound and Fortune 500 buying committee consensus.',
                                    path: '/global-business-accelerations',
                                    badge: 'North America',
                                    icon: Building2,
                                    tags: ['Fortune 500', 'Enterprise GTM']
                                },
                                {
                                    title: 'EMEA & UK Regulatory Playbooks',
                                    description: 'GDPR-compliant outreach, UK enterprise banking, and DACH region scaling.',
                                    path: '/global-business-accelerations',
                                    badge: 'EMEA & UK',
                                    icon: Landmark,
                                    tags: ['GDPR Compliant', 'Multi-Language']
                                },
                                {
                                    title: 'APAC & Emerging Growth Hubs',
                                    description: 'High-growth market expansion across Singapore, Tokyo, and Sydney.',
                                    path: '/global-business-accelerations',
                                    badge: 'APAC Scale',
                                    icon: Rocket,
                                    tags: ['APAC Expansion', 'Regional Hubs']
                                }
                            ]
                        },
                        {
                            header: 'Enterprise Account Entry',
                            badge: 'Account Penetration',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Global Account Penetration',
                                    description: 'Multi-geography expansion inside existing multinational enterprise logos.',
                                    path: '/global-business-accelerations',
                                    badge: 'Global MNCs',
                                    icon: Briefcase,
                                    tags: ['Land & Expand', 'Global Logos']
                                },
                                {
                                    title: 'Strategic Partnership Finder',
                                    description: 'Automated discovery of regional distributors, resellers, and co-sell partners.',
                                    path: '/global-business-accelerations',
                                    badge: 'Alliances',
                                    icon: Handshake,
                                    tags: ['Reseller Network', 'Co-Sell']
                                },
                                {
                                    title: 'Executive Engagement Automation',
                                    description: 'C-suite relationship initiation across multinational headquarters.',
                                    path: '/global-business-accelerations',
                                    badge: 'Executive',
                                    icon: Users,
                                    tags: ['C-Suite Access', 'Executive GTM']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'demand-pulse-intelligence',
                    title: 'DemandPulse™ Macro Intelligence',
                    desc: 'Real-time regional buyer intent, regulatory compliance, and cross-border TAM mapping',
                    path: '/global-business-accelerations',
                    badge: 'Macro Intelligence',
                    icon: Activity,
                    columns: [
                        {
                            header: 'Territory Intent & Pricing',
                            badge: 'Macro Signals',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'Real-Time Territory Intent Monitoring',
                                    description: 'Tracking surge demand across 40+ countries and regional industries.',
                                    path: '/global-business-accelerations',
                                    badge: 'Territory Intent',
                                    icon: Activity,
                                    tags: ['40+ Countries', 'Surge Signals']
                                },
                                {
                                    title: 'Multi-Currency Pricing Alignment',
                                    description: 'Localized purchasing power and currency-hedged enterprise contracts.',
                                    path: '/global-business-accelerations',
                                    badge: 'Pricing',
                                    icon: DollarSign,
                                    tags: ['Multi-Currency', 'Localization']
                                }
                            ]
                        },
                        {
                            header: 'Compliance & Distributed SDRs',
                            badge: 'Operational Scale',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Cross-Border Compliance Guardrails',
                                    description: 'Local data sovereignty, privacy laws, and marketing guardrails.',
                                    path: '/global-business-accelerations',
                                    badge: 'Compliance',
                                    icon: ShieldCheck,
                                    tags: ['Data Sovereignty', 'Legal Guardrails']
                                },
                                {
                                    title: 'Distributed Global SDR Fleets',
                                    description: '24/7 localized outbound coverage across multiple time zones.',
                                    path: '/global-business-accelerations',
                                    badge: '24/7 Coverage',
                                    icon: Bot,
                                    tags: ['Follow-the-Sun', 'Local SDRs']
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
                    id: 'enterprise-outcomes',
                    title: 'Enterprise Outcomes & ROI',
                    desc: 'Proven boardroom-ready revenue impact and verifiable metric lifts across enterprise clients',
                    path: '/case-studies',
                    badge: 'Boardroom ROI',
                    icon: ShieldCheck,
                    columns: [
                        {
                            header: 'Sales & Pipeline Outcomes',
                            badge: 'Proven Metrics',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Enterprise Sales Acceleration',
                                    description: '35–50% reduction in sales cycle time and +28% higher enterprise win rates.',
                                    path: '/case-studies',
                                    badge: 'Case Study',
                                    icon: Briefcase,
                                    tags: ['-45% Cycle Time', '+28% Win Rate']
                                },
                                {
                                    title: 'High-Velocity Pipeline Generation',
                                    description: 'Predictable inbound/outbound qualified lead generation at enterprise scale.',
                                    path: '/case-studies',
                                    badge: 'Case Study',
                                    icon: Target,
                                    tags: ['4.2x Pipeline Lift', 'Predictable ARR']
                                }
                            ]
                        },
                        {
                            header: 'Displacement & Consensus',
                            badge: 'Account Takeover',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Competitor Displacement Win-Back',
                                    description: 'Systematic account takeover from entrenched legacy incumbents.',
                                    path: '/case-studies',
                                    badge: 'Case Study',
                                    icon: ShieldCheck,
                                    tags: ['$18.4M Displaced', 'Enterprise Win-Back']
                                },
                                {
                                    title: 'Buying Committee Consensus',
                                    description: 'Accelerate approvals across 6–10 stakeholder enterprise buying committees.',
                                    path: '/case-studies',
                                    badge: 'Case Study',
                                    icon: Users,
                                    tags: ['3.1x Faster Signoff', 'Consensus AI']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'sector-case-studies',
                    title: 'Sector-Specific Case Studies',
                    desc: 'Traceable blueprints across FinTech, SaaS, Healthcare, Web3 & Platforms',
                    path: '/case-studies',
                    badge: 'Traceable Blueprints',
                    icon: TrendingUp,
                    columns: [
                        {
                            header: 'SaaS & FinTech Proof',
                            badge: 'Financial Services',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Tier-1 FinTech Core Modernization',
                                    description: '$4.8M net ARR expansion and 89% manual underwriting automated.',
                                    path: '/industries/financial-services#case-study',
                                    badge: 'Case Study',
                                    icon: DollarSign,
                                    tags: ['$4.8M Net ARR', 'SOC2 Compliant']
                                },
                                {
                                    title: 'Enterprise Multi-Sided Platform Scale',
                                    description: '3.8x GMV lift and 44-day CAC payback period achieved.',
                                    path: '/industries/platforms#case-study',
                                    badge: 'Case Study',
                                    icon: Network,
                                    tags: ['3.8x GMV', '44-day Payback']
                                }
                            ]
                        },
                        {
                            header: 'Healthcare & Web3 Proof',
                            badge: 'Specialized Protocols',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Healthcare Zero-PHI Revenue Scale',
                                    description: '$12.6M qualified health system pipeline with 100% HIPAA compliance.',
                                    path: '/industries/healthcare#case-study',
                                    badge: 'Case Study',
                                    icon: ShieldCheck,
                                    tags: ['Zero-PHI HIPAA', '$12.6M Pipeline']
                                },
                                {
                                    title: 'Web3 Protocol 90-Day TGE Launch',
                                    description: '$140M TVL mobilized across 18 tier-1 institutional node operators.',
                                    path: '/industries/crypto#case-study',
                                    badge: 'Case Study',
                                    icon: Rocket,
                                    tags: ['$140M TVL', '90-Day Arc']
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
            name: 'About Us',
            shortName: 'About Us',
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

    return (
        <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 select-none">
            {/* ── TOP HORIZONTAL HEADER BAR ── */}
            <header className="h-16 lg:h-[72px] bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs px-3 sm:px-4 lg:px-3 xl:px-4 2xl:px-6 flex items-center justify-between transition-all relative z-50 max-w-[1920px] mx-auto w-full">
                {/* Left: Brand Logo */}
                <div className="flex items-center gap-2 xl:gap-3 shrink-0">
                    <Link to="/" className="flex items-center gap-1.5 xl:gap-2 group shrink-0">
                        <div className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 rounded-lg xl:rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs xl:text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform shrink-0">
                            PM
                        </div>
                        <div className="text-sm sm:text-base xl:text-lg 2xl:text-xl font-extrabold tracking-tight text-slate-900 font-heading whitespace-nowrap">
                            <span>Profit</span><span className="text-blue-600">Machines</span>
                        </div>
                    </Link>

                    <div className="hidden min-[1800px]:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 font-mono text-[10px] font-bold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span>Enterprise v2.4</span>
                    </div>
                </div>

                {/* Center: 7 Main Menus Horizontally (>= xl) */}
                <nav className="hidden xl:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 h-full whitespace-nowrap shrink-0">
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
                                    className={`flex items-center rounded-lg xl:rounded-xl text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold tracking-tight transition-all duration-150 whitespace-nowrap shrink-0 ${
                                        isDropdownOpen
                                            ? 'bg-blue-50 text-blue-600 shadow-2xs font-bold'
                                            : isCurrentActive
                                                ? 'text-blue-600 font-bold bg-blue-50/50'
                                                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                    }`}
                                >
                                    <Link
                                        to={menu.path}
                                        onClick={() => setActiveMenuId(null)}
                                        className={`px-2 xl:px-2.5 py-1.5 xl:py-2 flex items-center cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                                            !hasSubNav ? 'px-3 xl:px-3.5' : ''
                                        }`}
                                    >
                                        <span className="whitespace-nowrap shrink-0 select-none">{menu.name}</span>
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
                                            className="pr-1.5 xl:pr-2 py-1.5 xl:py-2 pl-0 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors shrink-0"
                                        >
                                            <ChevronDown
                                                className={`w-2.5 h-2.5 xl:w-3 xl:h-3 transition-transform duration-200 opacity-60 shrink-0 ${
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
                    {/* Search Trigger Button */}
                    <button
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        className="w-10 h-10 sm:w-auto sm:px-2.5 sm:py-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 transition-all flex items-center justify-center sm:justify-start gap-1.5 text-xs whitespace-nowrap shrink-0"
                        aria-label="Search directory"
                    >
                        <Search className="w-4 h-4 text-slate-500 shrink-0" />
                        <span className="hidden min-[1650px]:inline font-medium text-slate-400 whitespace-nowrap">Search...</span>
                    </button>

                    {/* Book Strategic Consultation Button - Visible on Tablet and Desktop (>= sm), inside drawer on mobile (< sm) */}
                    <Link
                        to="/book-consultation"
                        className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs xl:text-sm px-3 sm:px-3.5 xl:px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-px whitespace-nowrap shrink-0 min-h-[40px]"
                    >
                        <span className="whitespace-nowrap">Book Consultation</span>
                        <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
                    </Link>

                    {/* Mobile Hamburger Button (< xl) */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors ml-0.5 sm:ml-1 shrink-0"
                        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-navigation-drawer"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* ── FLOATING MEGA-MENU DROPDOWN PANEL (>= xl) ── */}
            {currentMenu && currentMenu.categories && currentMenu.categories.length > 0 && currentCategory && (
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

                    {/* Floating Panel Container */}
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col">
                            {/* Inner Layout: Left Category Sidebar + Right Content Area */}
                            <div className="flex min-h-[460px] max-h-[580px]">
                                {/* ── A. LEFT CATEGORY SIDEBAR ── */}
                                <aside className="w-64 xl:w-72 border-r border-slate-100 bg-slate-50/50 p-3 shrink-0 flex flex-col justify-between overflow-y-auto">
                                    <div className="space-y-1">
                                        <div className="px-3 py-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400">
                                            {currentMenu.name} Architecture
                                        </div>

                                        {currentMenu.categories.map((cat) => {
                                            const isCatActive = currentCategory?.id === cat.id;
                                            const CatIcon = cat.icon || Layers;

                                            return (
                                                <div
                                                    key={cat.id}
                                                    onMouseEnter={() => setActiveCategoryId(cat.id)}
                                                    className={`w-full group px-2.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                                                        isCatActive
                                                            ? 'bg-blue-50/90 text-blue-600 border border-blue-200/70 shadow-2xs'
                                                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 border border-transparent'
                                                    }`}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveCategoryId(cat.id)}
                                                        className="flex items-center gap-2.5 truncate flex-1 text-left cursor-pointer"
                                                    >
                                                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                                            isCatActive
                                                                ? 'bg-blue-600 text-white'
                                                                : 'bg-white border border-slate-200 text-slate-500 group-hover:text-blue-600'
                                                        }`}>
                                                            <CatIcon className="w-3.5 h-3.5" />
                                                        </div>
                                                        <span className="truncate">{cat.title}</span>
                                                    </button>
                                                    <Link
                                                        to={cat.path}
                                                        onClick={() => setActiveMenuId(null)}
                                                        title={`Open ${cat.title} page`}
                                                        className={`p-1 rounded-md transition-colors ${
                                                            isCatActive
                                                                ? 'text-blue-600 hover:bg-blue-100'
                                                                : 'text-slate-400 group-hover:text-blue-600 hover:bg-white'
                                                        }`}
                                                    >
                                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Sidebar Bottom Note */}
                                    <div className="p-3 mt-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800">
                                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                            <span>{currentMenu.badge}</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 leading-tight">
                                            Guaranteed enterprise SLAs and performance baselines.
                                        </p>
                                        <Link
                                            to={currentMenu.path}
                                            onClick={() => setActiveMenuId(null)}
                                            className="inline-flex items-center justify-between w-full pt-1.5 mt-1 border-t border-slate-100 text-[11px] font-bold text-blue-600 hover:text-blue-700 group"
                                        >
                                            <span>View {currentMenu.name} Overview</span>
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </aside>

                                {/* ── B. RIGHT CONTENT AREA ── */}
                                <main className="flex-1 p-5 xl:p-6 flex flex-col justify-between overflow-y-auto bg-white">
                                    {currentCategory && (
                                        <div className="space-y-4">
                                            {/* Top Banner Header */}
                                            <div className="flex items-start justify-between pb-3.5 border-b border-slate-100">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                                        {React.createElement(currentCategory.icon || Layers, { className: 'w-4 h-4' })}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="text-base font-bold text-slate-900 font-heading">
                                                                {currentCategory.title}
                                                            </h3>
                                                            {currentCategory.badge && (
                                                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                                                                    {currentCategory.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-slate-500 mt-0.5">
                                                            {currentCategory.desc}
                                                        </p>
                                                    </div>
                                                </div>

                                                <Link
                                                    to={currentCategory.path}
                                                    onClick={() => setActiveMenuId(null)}
                                                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0 group"
                                                >
                                                    <span>Explore {currentCategory.title} Directory</span>
                                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                </Link>
                                            </div>

                                            {/* Columns Grid of Grouped Cards (Matching Reference Screenshot) */}
                                            <div className={`grid gap-4 ${
                                                currentCategory.columns.length === 3 
                                                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                                                    : currentCategory.columns.length === 2 
                                                        ? 'grid-cols-1 md:grid-cols-2' 
                                                        : 'grid-cols-1'
                                            }`}>
                                                {currentCategory.columns.map((col, colIdx) => (
                                                    <div key={colIdx} className="space-y-2.5">
                                                        {/* Column Header */}
                                                        <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                                                            <div className="flex items-center gap-1.5">
                                                                {col.icon && React.createElement(col.icon, { className: 'w-3.5 h-3.5 text-blue-600' })}
                                                                <span>{col.header}</span>
                                                            </div>
                                                            {col.badge && (
                                                                <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-slate-100 text-slate-500 border border-slate-200/60">
                                                                    {col.badge}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Stacked Cards within this Column */}
                                                        <div className="space-y-2">
                                                            {col.cards.map((card, cIdx) => {
                                                                const CardIcon = card.icon || Layers;
                                                                return (
                                                                    <Link
                                                                        key={cIdx}
                                                                        to={card.path}
                                                                        onClick={() => setActiveMenuId(null)}
                                                                        className="group p-3 rounded-xl bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-150 flex items-start gap-2.5 cursor-pointer shadow-2xs"
                                                                    >
                                                                        <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                                                                            <CardIcon className="w-3.5 h-3.5" />
                                                                        </div>

                                                                        <div className="min-w-0 flex-1">
                                                                            {card.badge && (
                                                                                <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-0.5">
                                                                                    {card.badge}
                                                                                </div>
                                                                            )}
                                                                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug truncate font-heading">
                                                                                {card.title}
                                                                            </h4>
                                                                            <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-0.5">
                                                                                {card.description}
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </main>
                            </div>

                            {/* ── C. BOTTOM INFORMATION ROW (MATCHING REFERENCE IMAGE) ── */}
                            <footer className="px-6 py-2.5 bg-slate-50/80 border-t border-slate-100 rounded-b-2xl flex items-center justify-between text-xs text-slate-500 shrink-0">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                    <span className="font-medium text-slate-600">
                                        ProfitMachines Enterprise: {currentMenu.summary}
                                    </span>
                                </div>

                                <Link
                                    to={currentMenu.path}
                                    onClick={() => setActiveMenuId(null)}
                                    className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                                >
                                    <span>Explore All {currentMenu.name}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </footer>
                        </div>
                    </div>
                </div>
            )}

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
                                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Search Results */}
                        <div className="pt-2 max-h-[360px] overflow-y-auto space-y-1">
                            {searchQuery.trim() === '' ? (
                                <div className="p-4 text-center text-xs text-slate-400">
                                    Type to search across all 8 enterprise practices and capabilities.
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
                                            <div className="text-[10px] text-slate-400 font-mono mt-0.5">
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
                                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
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
                                className="w-full min-h-[44px] flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100/80 border border-slate-200/80 text-left text-xs text-slate-500 transition-colors shadow-2xs"
                                aria-label="Search directory"
                            >
                                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                                <span className="truncate">Search capabilities, offerings, nodes...</span>
                            </button>

                            {/* Prominent CTA in Drawer */}
                            <Link
                                to="/book-consultation"
                                onClick={() => setMobileOpen(false)}
                                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm transition-all"
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
                                const MenuIcon = menu.icon || Layers;
                                const isCurrentActive = isMenuActive(menu);

                                if (!hasSubNav) {
                                    return (
                                        <Link
                                            key={menu.id}
                                            to={menu.path}
                                            onClick={() => setMobileOpen(false)}
                                            className={`rounded-2xl border min-h-[48px] p-3 flex items-center justify-between gap-2.5 cursor-pointer select-none transition-all duration-200 ${
                                                isCurrentActive
                                                    ? 'border-blue-200 bg-blue-50/40 text-blue-600 font-bold'
                                                    : 'border-slate-200/80 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                                            }`}
                                        >
                                            <div className="flex items-center gap-2.5 truncate flex-1 min-w-0">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                                    isCurrentActive
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-blue-50 text-blue-600 border border-blue-100'
                                                }`}>
                                                    <MenuIcon className="w-4 h-4" />
                                                </div>
                                                <div className="truncate min-w-0">
                                                    <span className="text-xs sm:text-sm font-bold truncate block font-heading">
                                                        {menu.name}
                                                    </span>
                                                </div>
                                                {menu.badge && (
                                                    <span className="text-[10px] font-mono text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-full border border-blue-100 hidden sm:inline-block truncate shrink-0 max-w-[130px]">
                                                        {menu.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                                        </Link>
                                    );
                                }

                                return (
                                    <div
                                        key={menu.id}
                                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                                            isExpanded
                                                ? 'border-blue-200 bg-blue-50/20 shadow-2xs'
                                                : 'border-slate-200/80 bg-white hover:border-slate-300'
                                        }`}
                                    >
                                        {/* Top-Level Menu Bar (Accordion Trigger) */}
                                        <div
                                            onClick={() => toggleMobileMenu(menu.id)}
                                            className={`w-full min-h-[48px] p-3 flex items-center justify-between gap-2.5 cursor-pointer select-none transition-colors ${
                                                isExpanded
                                                    ? 'bg-blue-50/70 text-blue-700'
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
                                            <div className="flex items-center gap-2.5 truncate flex-1 min-w-0">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                                    isExpanded || isCurrentActive
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-blue-50 text-blue-600 border border-blue-100'
                                                }`}>
                                                    <MenuIcon className="w-4 h-4" />
                                                </div>
                                                <div className="truncate min-w-0">
                                                    <span className="text-xs sm:text-sm font-bold truncate block font-heading">
                                                        {menu.name}
                                                    </span>
                                                </div>
                                                {menu.badge && (
                                                    <span className="text-[10px] font-mono text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-full border border-blue-100 hidden sm:inline-block truncate shrink-0 max-w-[130px]">
                                                        {menu.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-1 shrink-0">
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                                                        isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                                                    }`}
                                                />
                                            </div>
                                        </div>

                                        {/* Submenu Accordion Panel */}
                                        {isExpanded && (
                                            <div
                                                id={`mobile-submenu-${menu.id}`}
                                                className="p-3 bg-white/95 border-t border-blue-100/80 space-y-3"
                                            >
                                                {/* Menu Overview Link & Summary */}
                                                <div className="pb-2 border-b border-slate-100">
                                                    <p className="text-[11px] text-slate-500 leading-relaxed mb-2 font-medium">
                                                        {menu.summary}
                                                    </p>
                                                    <Link
                                                        to={menu.path}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                                    >
                                                        <span>Explore Full {menu.name} Overview</span>
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </Link>
                                                </div>

                                                {/* Categories Accordion */}
                                                <div className="space-y-2">
                                                    {menu.categories.map((cat) => {
                                                        const isCatExpanded = !!mobileExpandedCategories[cat.id];
                                                        const CatIcon = cat.icon || Layers;

                                                        return (
                                                            <div
                                                                key={cat.id}
                                                                className={`rounded-xl border transition-colors overflow-hidden ${
                                                                    isCatExpanded
                                                                        ? 'border-blue-200/90 bg-slate-50/40 shadow-2xs'
                                                                        : 'border-slate-200/70 bg-white hover:border-slate-300'
                                                                }`}
                                                            >
                                                                {/* Category Header Bar */}
                                                                <div
                                                                    onClick={(e) => toggleMobileCategory(cat.id, e)}
                                                                    className={`w-full min-h-[44px] p-2.5 flex items-center justify-between gap-2 cursor-pointer select-none transition-colors ${
                                                                        isCatExpanded
                                                                            ? 'bg-blue-50/60 text-blue-700'
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
                                                                    <div className="flex items-center gap-2 truncate flex-1 min-w-0">
                                                                        <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                                                                            isCatExpanded
                                                                                ? 'bg-blue-600 text-white'
                                                                                : 'bg-slate-100 text-slate-500'
                                                                        }`}>
                                                                            <CatIcon className="w-3.5 h-3.5" />
                                                                        </div>
                                                                        <span className="text-xs font-bold truncate leading-tight font-heading">
                                                                            {cat.title}
                                                                        </span>
                                                                        {cat.badge && (
                                                                            <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200 shrink-0">
                                                                                {cat.badge}
                                                                            </span>
                                                                        )}
                                                                    </div>

                                                                    <div className="flex items-center gap-1.5 shrink-0">
                                                                        <Link
                                                                            to={cat.path}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setMobileOpen(false);
                                                                            }}
                                                                            title={`Open ${cat.title}`}
                                                                            className="w-7 h-7 rounded-md text-slate-400 hover:text-blue-600 hover:bg-white flex items-center justify-center transition-colors"
                                                                            aria-label={`Open ${cat.title} page`}
                                                                        >
                                                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                                                        </Link>
                                                                        <div className="w-7 h-7 rounded-md text-slate-400 hover:text-blue-600 flex items-center justify-center">
                                                                            <ChevronDown
                                                                                className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                                                                                    isCatExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                                                                                }`}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Category Expanded Content (Columns & Cards) */}
                                                                {isCatExpanded && (
                                                                    <div
                                                                        id={`mobile-subcat-${cat.id}`}
                                                                        className="p-3 bg-white border-t border-slate-100 space-y-3"
                                                                    >
                                                                        {/* Category Description & Hub Link */}
                                                                        <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100/80 space-y-1.5">
                                                                            <p className="text-[11px] text-slate-600 leading-relaxed">
                                                                                {cat.desc}
                                                                            </p>
                                                                            <Link
                                                                                to={cat.path}
                                                                                onClick={() => setMobileOpen(false)}
                                                                                className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                                                            >
                                                                                <span>Explore {cat.title} Directory</span>
                                                                                <ArrowRight className="w-3 h-3" />
                                                                            </Link>
                                                                        </div>

                                                                        {/* Vertically Stacked Columns and Node Cards */}
                                                                        <div className="space-y-4 pt-1">
                                                                            {cat.columns.map((col, colIdx) => (
                                                                                <div key={colIdx} className="space-y-2">
                                                                                    {/* Group Header */}
                                                                                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                                                                                        <div className="flex items-center gap-1.5 truncate">
                                                                                            {col.icon && React.createElement(col.icon, { className: 'w-3.5 h-3.5 text-blue-600 shrink-0' })}
                                                                                            <span className="truncate">{col.header}</span>
                                                                                        </div>
                                                                                        {col.badge && (
                                                                                            <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200 shrink-0 ml-2">
                                                                                                {col.badge}
                                                                                            </span>
                                                                                        )}
                                                                                    </div>

                                                                                    {/* Single-Column Stack of Tactile Cards */}
                                                                                    <div className="space-y-2">
                                                                                        {col.cards.map((card, cIdx) => {
                                                                                            const CardIcon = card.icon || Layers;
                                                                                            return (
                                                                                                <Link
                                                                                                    key={cIdx}
                                                                                                    to={card.path}
                                                                                                    onClick={() => setMobileOpen(false)}
                                                                                                    className="group block p-3 rounded-xl bg-slate-50/70 hover:bg-white active:bg-blue-50/50 border border-slate-200/70 hover:border-blue-300 transition-all duration-150 shadow-2xs"
                                                                                                >
                                                                                                    <div className="flex items-start gap-2.5 sm:gap-3">
                                                                                                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                                                                                                            <CardIcon className="w-4 h-4" />
                                                                                                        </div>
                                                                                                        <div className="min-w-0 flex-1">
                                                                                                            <div className="flex items-center justify-between gap-1.5 mb-0.5">
                                                                                                                {card.badge && (
                                                                                                                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                                                                                                                        {card.badge}
                                                                                                                    </span>
                                                                                                                )}
                                                                                                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-auto" />
                                                                                                            </div>
                                                                                                            <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug font-heading">
                                                                                                                {card.title}
                                                                                                            </h5>
                                                                                                            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed line-clamp-2 mt-1">
                                                                                                                {card.description}
                                                                                                            </p>
                                                                                                            {card.tags && card.tags.length > 0 && (
                                                                                                                <div className="flex flex-wrap gap-1 mt-1.5">
                                                                                                                    {card.tags.map((tag, tIdx) => (
                                                                                                                        <span
                                                                                                                            key={tIdx}
                                                                                                                            className="text-[9px] font-mono font-medium text-slate-500 bg-white border border-slate-200/60 px-1.5 py-0.5 rounded"
                                                                                                                        >
                                                                                                                            {tag}
                                                                                                                        </span>
                                                                                                                    ))}
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>
                                                                                            );
                                                                                        })}
                                                                                    </div>
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
                                className="w-full min-h-[44px] flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
                            >
                                <span>Book Consultation</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <div className="text-center text-[10px] font-mono text-slate-400">
                                ProfitMachines Enterprise Diagnostic OS
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
