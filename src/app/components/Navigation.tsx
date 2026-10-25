import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, X, ChevronRight, ChevronDown, Search, ArrowRight, ArrowUpRight,
    Compass, Building2, Zap, Handshake, Rocket, BrainCircuit, TrendingUp, Globe,
    ShieldCheck, Layers, Cpu, DollarSign, Target, Sparkles, UserCheck, Sliders,
    Briefcase, ShoppingBag, Bot, Users, Activity, FileText, Lock, Coins,
    Network, Clock, BookOpen, HelpCircle, Landmark, HeartPulse, GraduationCap,
    Lightbulb, Shield, BarChart3, CheckCircle2, Phone
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
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // ── 8 MAIN MENUS DATA (STRICT ORDER & PRESERVED ARCHITECTURE) ──
    const mainMenus: MainMenuItem[] = useMemo(() => [
        // 1. OFFERINGS
        {
            id: 'offerings',
            name: 'Offerings',
            path: '/offerings',
            icon: Compass,
            badge: 'Revenue Architecture',
            summary: 'Comprehensive revenue architecture, 7 discovery layers, 34 capabilities, and tailored packages.',
            categories: [
                {
                    id: 'discovery-stack',
                    title: 'Revenue Discovery',
                    desc: 'Seven strategic areas from Market Whitespace to PMF',
                    path: '/offerings/discovery-stack',
                    badge: 'Layer 01–07',
                    icon: Search,
                    columns: [
                        {
                            header: 'Market & Demand Discovery',
                            badge: 'L1–L2',
                            icon: Search,
                            cards: [
                                {
                                    title: 'Market & Opportunity Discovery',
                                    description: 'Identify unserved market profit pools and untapped segments.',
                                    path: '/offerings/discovery-stack#market-opportunity',
                                    badge: 'Layer 01',
                                    icon: Search,
                                    tags: ['Profit Pools', 'Whitespace']
                                },
                                {
                                    title: 'Demand & Pipeline Development',
                                    description: 'Transform buyer intent into predictable sales pipeline velocity.',
                                    path: '/offerings/discovery-stack#demand-pipeline',
                                    badge: 'Layer 02',
                                    icon: Target,
                                    tags: ['Pipeline', 'Lead Velocity']
                                }
                            ]
                        },
                        {
                            header: 'Deal & Channel Strategy',
                            badge: 'L3–L4',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Value & Deal Effectiveness',
                                    description: 'Optimize deal packaging, pricing models, and gross margins.',
                                    path: '/offerings/discovery-stack#value-deal',
                                    badge: 'Layer 03',
                                    icon: DollarSign,
                                    tags: ['Pricing', 'Margin Expansion']
                                },
                                {
                                    title: 'Channel & Distribution Strategy',
                                    description: 'Scale direct sales, partner channels, and alliance ecosystems.',
                                    path: '/offerings/discovery-stack#channel-distribution',
                                    badge: 'Layer 04',
                                    icon: Network,
                                    tags: ['Ecosystems', 'Alliances']
                                }
                            ]
                        },
                        {
                            header: 'Positioning & PMF',
                            badge: 'L5–L7',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Competitive Moats & Positioning',
                                    description: 'Defend market share and displace legacy incumbents.',
                                    path: '/offerings/discovery-stack#competitive-positioning',
                                    badge: 'Layer 05',
                                    icon: ShieldCheck,
                                    tags: ['Moats', 'Displacement']
                                },
                                {
                                    title: 'Customer & Buying Intent',
                                    description: 'Continuous behavioral intent ingestion and propensity scoring.',
                                    path: '/offerings/discovery-stack#customer-buying-intent',
                                    badge: 'Layer 06',
                                    icon: Users,
                                    tags: ['Propensity', 'Intent']
                                },
                                {
                                    title: 'Product-Market Fit & Revenue',
                                    description: 'Calibrate core offers for repeatable enterprise sales velocity.',
                                    path: '/offerings/discovery-stack#pmf-revenue-architecture',
                                    badge: 'Layer 07',
                                    icon: Sparkles,
                                    tags: ['Repeatable PMF', 'LTV']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'offering-families',
                    title: 'Our Services',
                    desc: '34 capabilities across Consulting & AI Automation',
                    path: '/offerings/families',
                    badge: 'Master Catalog',
                    icon: Layers,
                    columns: [
                        {
                            header: 'Strategy Suite',
                            badge: 'Consulting',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Market & Whitespace Discovery',
                                    description: 'Strategic TAM/SAM analysis and margin pool mapping.',
                                    path: '/offerings/families#market-whitespace',
                                    badge: 'Strategy',
                                    icon: Search,
                                    tags: ['TAM Analysis', 'Whitespace']
                                },
                                {
                                    title: 'Value & Deal Structuring',
                                    description: 'Contract structuring, price elasticity, and margin protection.',
                                    path: '/offerings/families#value-deal',
                                    badge: 'Commercials',
                                    icon: DollarSign,
                                    tags: ['Contract Terms', 'Margins']
                                }
                            ]
                        },
                        {
                            header: 'AI Automation Suite',
                            badge: 'Execution',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'Demand & Pipeline Discovery',
                                    description: 'Multi-channel automated outbound and intent detection.',
                                    path: '/offerings/families#demand-pipeline',
                                    badge: 'Autopilot',
                                    icon: Target,
                                    tags: ['Automated Outbound', 'Intent']
                                },
                                {
                                    title: 'Customer & Propensity Scoring',
                                    description: 'Dynamic scoring of account engagement and buying triggers.',
                                    path: '/offerings/families#customer-propensity',
                                    badge: 'Telemetry',
                                    icon: Users,
                                    tags: ['Account Fit', 'Scoring']
                                }
                            ]
                        },
                        {
                            header: 'Positioning & Expansion',
                            badge: 'Scale',
                            icon: Sparkles,
                            cards: [
                                {
                                    title: 'Channel & Distribution Networks',
                                    description: 'Ecosystem scaling and reseller partner enablement.',
                                    path: '/offerings/families#channel-distribution',
                                    badge: 'Distribution',
                                    icon: Network,
                                    tags: ['Partner Scaling', 'Resellers']
                                },
                                {
                                    title: 'Product-Market Fit Architecture',
                                    description: 'Repeatable offer packaging and customer LTV expansion.',
                                    path: '/offerings/families#pmf-architecture',
                                    badge: 'PMF Core',
                                    icon: Sparkles,
                                    tags: ['Offer Packaging', 'Retention']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'delivery-tracks',
                    title: 'How We Deliver',
                    desc: 'Strategy Consulting vs. Autonomous AI Automation',
                    path: '/offerings/delivery-tracks',
                    badge: 'Bifurcated Delivery',
                    icon: Cpu,
                    columns: [
                        {
                            header: 'Delivery Models',
                            badge: 'Track A & B',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'Strategy & Consulting Track',
                                    description: 'High-touch management consulting for complex revenue turnarounds.',
                                    path: '/offerings/delivery-tracks',
                                    badge: 'Track A',
                                    icon: Briefcase,
                                    tags: ['Advisory', 'High-Touch']
                                },
                                {
                                    title: 'AI & Automation Track',
                                    description: 'Autonomous AI agentic pipeline deployment and automated execution.',
                                    path: '/offerings/delivery-tracks',
                                    badge: 'Track B',
                                    icon: Cpu,
                                    tags: ['AI Pipelines', 'Autopilot']
                                }
                            ]
                        },
                        {
                            header: 'Governance & Selection',
                            badge: 'Audit & SLA',
                            icon: Sliders,
                            cards: [
                                {
                                    title: 'Track Comparison Matrix',
                                    description: 'Side-by-side evaluation of deliverables, timelines, and resourcing.',
                                    path: '/offerings/delivery-tracks',
                                    badge: 'Comparison',
                                    icon: Sliders,
                                    tags: ['Deliverables', 'Resourcing']
                                },
                                {
                                    title: 'Interactive Delivery Assessment',
                                    description: 'Instant decision tool matching your team to the optimal track.',
                                    path: '/offerings/delivery-tracks',
                                    badge: 'Decision Tool',
                                    icon: HelpCircle,
                                    tags: ['Assessment', 'Instant Match']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'segment-matrix',
                    title: 'By Business Type',
                    desc: 'Services, Retail, Platform & Adjacent Business Segments',
                    path: '/offerings/segments',
                    badge: 'Sector Matrix',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Primary Segments',
                            badge: 'B2B / B2C',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Services Companies',
                                    description: 'Agency margin expansion and high-ticket service pipeline velocity.',
                                    path: '/offerings/segments',
                                    badge: 'Services',
                                    icon: Briefcase,
                                    tags: ['Agency Margin', 'Billable Rate']
                                },
                                {
                                    title: 'Retail & Commerce',
                                    description: 'Omnichannel consumer demand capture and retention intelligence.',
                                    path: '/offerings/segments',
                                    badge: 'Commerce',
                                    icon: ShoppingBag,
                                    tags: ['Omnichannel', 'Basket Size']
                                }
                            ]
                        },
                        {
                            header: 'Platforms & Adjacent',
                            badge: 'Ecosystem',
                            icon: Building2,
                            cards: [
                                {
                                    title: 'Platform Companies',
                                    description: 'Multi-sided network effects, developer ecosystems, and GMV acceleration.',
                                    path: '/offerings/segments',
                                    badge: 'Platforms',
                                    icon: Building2,
                                    tags: ['Network Effects', 'GMV Growth']
                                },
                                {
                                    title: 'Adjacent Segments',
                                    description: 'Unlocking cross-industry profit pools without fixed headcount overhead.',
                                    path: '/offerings/segments',
                                    badge: 'Adjacencies',
                                    icon: Sliders,
                                    tags: ['Whitespace', 'Low Overhead']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'micro-segment-kits',
                    title: 'Focused Engagement Packages',
                    desc: 'Eight fixed-scope turnkey fast-start kits',
                    path: '/offerings/micro-segment-kits',
                    badge: 'Turnkey Packages',
                    icon: Sliders,
                    columns: [
                        {
                            header: 'Margin & Growth Kits',
                            badge: 'Fast-Start',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Agency Margin Kit',
                                    description: 'Rapid client retention and billable rate optimization.',
                                    path: '/offerings/micro-segment-kits#agency-margin-kit',
                                    badge: 'Turnkey Kit',
                                    icon: Briefcase,
                                    tags: ['Margin Growth', 'Fast-Start']
                                },
                                {
                                    title: 'DTC Margin Kit',
                                    description: 'ROAS optimization and first-party customer lifetime value.',
                                    path: '/offerings/micro-segment-kits#dtc-margin-kit',
                                    badge: 'Turnkey Kit',
                                    icon: ShoppingBag,
                                    tags: ['ROAS', 'LTV Expansion']
                                }
                            ]
                        },
                        {
                            header: 'SaaS & Enterprise Kits',
                            badge: 'Enterprise',
                            icon: Building2,
                            cards: [
                                {
                                    title: 'Vertical SaaS Whitespace Kit',
                                    description: 'Targeted TAM penetration and competitive displacement.',
                                    path: '/offerings/micro-segment-kits#vertical-saas-whitespace-kit',
                                    badge: 'Turnkey Kit',
                                    icon: Building2,
                                    tags: ['Vertical SaaS', 'Displacement']
                                },
                                {
                                    title: 'Enterprise Motion Kit',
                                    description: 'Buying committee consensus and multi-stakeholder deal pacing.',
                                    path: '/offerings/micro-segment-kits#enterprise-motion-kit',
                                    badge: 'Turnkey Kit',
                                    icon: Layers,
                                    tags: ['Multi-Stakeholder', 'Consensus']
                                }
                            ]
                        },
                        {
                            header: 'Commercial Kits',
                            badge: 'Packaging',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'PLG Conversion Kit',
                                    description: 'Self-serve activation and automated product-qualified leads.',
                                    path: '/offerings/micro-segment-kits#plg-conversion-kit',
                                    badge: 'Turnkey Kit',
                                    icon: Sparkles,
                                    tags: ['PQL', 'Activation']
                                },
                                {
                                    title: 'Pricing & Packaging Kit',
                                    description: 'Pricing elasticity modeling and multi-tier packaging redesign.',
                                    path: '/offerings/micro-segment-kits#pricing-packaging-kit',
                                    badge: 'Turnkey Kit',
                                    icon: DollarSign,
                                    tags: ['Pricing Tiers', 'Elasticity']
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
            path: '/industries',
            icon: Building2,
            badge: 'Vertical Markets',
            summary: 'Sector-specific revenue acceleration tailored for B2B, B2C, Enterprise, Startups, and Regulated Verticals.',
            categories: [
                {
                    id: 'b2b',
                    title: 'B2B Focus',
                    desc: 'Targeted enterprise pipeline scaling and deal velocity',
                    path: '/industries/b2b',
                    badge: 'B2B Pipeline',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Outbound Autopilot',
                            badge: 'Pipeline',
                            icon: Building2,
                            cards: [
                                {
                                    title: 'AI Account-Based Marketing (ABM)',
                                    description: 'Orchestrated target account campaigns across ads, web, and SDRs.',
                                    path: '/industries/b2b#abm-autopilot',
                                    badge: 'ABM Suite',
                                    icon: Building2,
                                    tags: ['Target Accounts', 'ABM']
                                },
                                {
                                    title: 'AI Competitor Displacement Engine',
                                    description: 'Win back accounts searching for migration support or unhappy with rivals.',
                                    path: '/industries/b2b#competitor-displacement',
                                    badge: 'Displacement',
                                    icon: ShieldCheck,
                                    tags: ['Win-Back', 'Incumbent Displace']
                                }
                            ]
                        },
                        {
                            header: 'Sales Acceleration',
                            badge: 'Conversion',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'AI SDR Co-Pilot / Autopilot',
                                    description: 'Autonomous prospect discovery, personalized sequencing, and meeting booking.',
                                    path: '/industries/b2b#ai-sdr-copilot',
                                    badge: 'SDR Co-Pilot',
                                    icon: Bot,
                                    tags: ['Automated Outbound', 'SDR']
                                },
                                {
                                    title: 'AI Revenue Qualified Lead (RQL)',
                                    description: 'Predictive deal scoring mapping intent signals to pipeline revenue.',
                                    path: '/industries/b2b#rql-predictor',
                                    badge: 'RQL Scoring',
                                    icon: TrendingUp,
                                    tags: ['RQL', 'Deal Scoring']
                                },
                                {
                                    title: 'AI Contract Expansion Finder',
                                    description: 'Detect upsell triggers and contract expansion cues within current accounts.',
                                    path: '/industries/b2b#contract-expansion',
                                    badge: 'Account Growth',
                                    icon: Search,
                                    tags: ['Expansion', 'Upsell']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'b2c',
                    title: 'B2C Focus',
                    desc: 'High-velocity consumer acquisition and retention scaling',
                    path: '/industries/b2c',
                    badge: 'Consumer Scale',
                    icon: ShoppingBag,
                    columns: [
                        {
                            header: 'Demand Acquisition',
                            badge: 'High Velocity',
                            icon: Network,
                            cards: [
                                {
                                    title: 'AI Omnichannel Lead Generation',
                                    description: 'Continuous multi-channel buyer capture across social, search, and native.',
                                    path: '/industries/b2c#omnichannel-lead-gen',
                                    badge: 'Omnichannel',
                                    icon: Network,
                                    tags: ['Social', 'Search']
                                },
                                {
                                    title: 'AI Lookalike Audience Auto-Scaling',
                                    description: 'Algorithmic expansion of highest-value customer cohorts in real-time.',
                                    path: '/industries/b2c#lookalike-audience',
                                    badge: 'Audience AI',
                                    icon: Users,
                                    tags: ['Cohort Scaling', 'Lookalike']
                                }
                            ]
                        },
                        {
                            header: 'Conversion & Retention',
                            badge: 'LTV Velocity',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'AI Personalized Offer Generation',
                                    description: 'Dynamic offer customization matching consumer basket propensity.',
                                    path: '/industries/b2c#personalized-offers',
                                    badge: 'Offer Engine',
                                    icon: Coins,
                                    tags: ['Basket Size', 'Dynamic Offers']
                                },
                                {
                                    title: 'AI Behavioral Retargeting Autopilot',
                                    description: 'Adaptive re-engagement messaging triggered by behavioral abandonment.',
                                    path: '/industries/b2c#behavioral-retargeting',
                                    badge: 'Retargeting',
                                    icon: Activity,
                                    tags: ['Abandonment', 'Re-engagement']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'enterprise',
                    title: 'Enterprise / Large Business',
                    desc: 'Multi-stakeholder buying committees and global penetration',
                    path: '/industries/enterprise',
                    badge: 'Global Scale',
                    icon: Globe,
                    columns: [
                        {
                            header: 'Global Accounts',
                            badge: 'Strategic BD',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'AI Global Account Penetration',
                                    description: 'Cross-border enterprise sales strategies for multinational organizations.',
                                    path: '/industries/enterprise#global-account-penetration',
                                    badge: 'Global Accounts',
                                    icon: Globe,
                                    tags: ['Cross-Border', 'Enterprise']
                                },
                                {
                                    title: 'Strategic Partnership Opportunity Finder',
                                    description: 'Identify, evaluate, and activate high-leverage alliance networks.',
                                    path: '/industries/enterprise#partnership-opportunity',
                                    badge: 'Partnerships',
                                    icon: Handshake,
                                    tags: ['Alliances', 'Co-Selling']
                                }
                            ]
                        },
                        {
                            header: 'Executive Suite',
                            badge: 'C-Suite Relations',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Executive Engagement Automation',
                                    description: 'Automate high-touch relationship nurturing with C-suite stakeholders.',
                                    path: '/industries/enterprise#executive-engagement',
                                    badge: 'Executive Suite',
                                    icon: Briefcase,
                                    tags: ['C-Suite', 'Nurturing']
                                },
                                {
                                    title: 'Buying Committee Consensus Engine',
                                    description: 'Align procurement, legal, technical, and finance decision-makers.',
                                    path: '/industries/enterprise',
                                    badge: 'Consensus AI',
                                    icon: Users,
                                    tags: ['Procurement', 'Stakeholders']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'mid-market',
                    title: 'Mid-Market',
                    desc: 'Accelerated vertical market capture with lean teams',
                    path: '/industries/mid-market',
                    badge: 'Scale Velocity',
                    icon: Rocket,
                    columns: [
                        {
                            header: 'Market Capture',
                            badge: 'Scale Velocity',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'AI Rapid Market Entry Engine',
                                    description: 'Fast-track pipeline validation in adjacent regional and vertical markets.',
                                    path: '/industries/mid-market#rapid-market-entry',
                                    badge: 'Market Entry',
                                    icon: Rocket,
                                    tags: ['Regional Entry', 'Expansion']
                                },
                                {
                                    title: 'AI Niche Market Domination',
                                    description: 'Defensible position building in concentrated vertical segments.',
                                    path: '/industries/mid-market#niche-domination',
                                    badge: 'Niche Moat',
                                    icon: Target,
                                    tags: ['Niche Strategy', 'Defensible']
                                }
                            ]
                        },
                        {
                            header: 'Team Amplifier',
                            badge: 'Lean RevOps',
                            icon: Users,
                            cards: [
                                {
                                    title: 'AI Lean Team Productivity Amplifier',
                                    description: 'Empower small commercial teams to produce output equivalent to large enterprises.',
                                    path: '/industries/mid-market#lean-team-productivity',
                                    badge: 'Productivity',
                                    icon: Users,
                                    tags: ['Lean RevOps', 'Multiplier']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'startup',
                    title: 'Startup',
                    desc: 'Zero-to-one traction, PMF validation, and burn-optimized sales',
                    path: '/industries/startup',
                    badge: 'Early Stage',
                    icon: Lightbulb,
                    columns: [
                        {
                            header: 'Zero-to-One Traction',
                            badge: 'Early Traction',
                            icon: Lightbulb,
                            cards: [
                                {
                                    title: 'AI Zero-to-One Lead Generation',
                                    description: 'Kickstart initial pipeline generation without expensive ad spend.',
                                    path: '/industries/startup#zero-to-one-lead-gen',
                                    badge: 'Zero-to-One',
                                    icon: Lightbulb,
                                    tags: ['Seed Pipeline', 'Zero-to-One']
                                },
                                {
                                    title: 'AI Product-Market Fit Signals',
                                    description: 'Measure real-time buyer engagement and product retention feedback.',
                                    path: '/industries/startup#pmf-signal-detection',
                                    badge: 'PMF Signals',
                                    icon: Sparkles,
                                    tags: ['PMF Feedback', 'Retention']
                                }
                            ]
                        },
                        {
                            header: 'Capital Efficiency',
                            badge: 'Runway Extension',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'AI Founder-Led Sales Automation',
                                    description: 'Automate meeting booking and follow-ups so founders focus on product.',
                                    path: '/industries/startup#founder-sales-automation',
                                    badge: 'Founder Sales',
                                    icon: Bot,
                                    tags: ['Founder Sales', 'Automation']
                                },
                                {
                                    title: 'AI Burn-Rate Optimized Capture',
                                    description: 'High-efficiency customer acquisition designed for runway preservation.',
                                    path: '/industries/startup#burn-rate-optimized-lead-capture',
                                    badge: 'Capital Efficiency',
                                    icon: DollarSign,
                                    tags: ['Runway', 'Low CAC']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'specialized-sectors',
                    title: 'Specialized Sectors',
                    desc: 'Tailored frameworks for regulated and specialized verticals',
                    path: '/industries/specialized-sectors',
                    badge: 'Regulated & Tech',
                    icon: ShieldCheck,
                    columns: [
                        {
                            header: 'FinTech & Software',
                            badge: 'Regulated',
                            icon: Landmark,
                            cards: [
                                {
                                    title: 'FinTech, Lending & SaaS Products',
                                    description: 'Compliant acquisition, underwriting pipeline, and ARR expansion.',
                                    path: '/industries/specialized-sectors#fintech-saas',
                                    badge: 'FinTech',
                                    icon: Landmark,
                                    tags: ['ARR Acceleration', 'Lending']
                                },
                                {
                                    title: 'Healthcare & Life Sciences',
                                    description: 'HIPAA-aware provider outreach and MedTech institutional sales.',
                                    path: '/industries/specialized-sectors#healthcare-life-sciences',
                                    badge: 'Life Sciences',
                                    icon: HeartPulse,
                                    tags: ['Provider Outreach', 'HIPAA']
                                }
                            ]
                        },
                        {
                            header: 'Commerce & Industry',
                            badge: 'Industrial',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Service & Industrial Industries',
                                    description: 'Heavy industrial sales cycles, CapEx justification, and supply chain ABM.',
                                    path: '/industries/specialized-sectors#service-industrial',
                                    badge: 'Industrial',
                                    icon: Briefcase,
                                    tags: ['CapEx Justification', 'B2B Supply']
                                },
                                {
                                    title: 'D2C Companies & Retail FMCG',
                                    description: 'Omnichannel consumer demand capture and basket size optimization.',
                                    path: '/industries/specialized-sectors#d2c-retail',
                                    badge: 'Retail & FMCG',
                                    icon: ShoppingBag,
                                    tags: ['Omnichannel', 'Basket Size']
                                }
                            ]
                        },
                        {
                            header: 'Education & Energy',
                            badge: 'Vertical Infra',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'Education & EdTech',
                                    description: 'Institutional enrollment pipelines and student lifecycle engagement.',
                                    path: '/industries/specialized-sectors#education-edtech',
                                    badge: 'EdTech',
                                    icon: GraduationCap,
                                    tags: ['Enrollment', 'EdTech']
                                },
                                {
                                    title: 'Real Estate, Construction & Energy',
                                    description: 'Commercial property leasing pipelines and renewable energy development.',
                                    path: '/industries/specialized-sectors#real-estate-energy',
                                    badge: 'Energy & Infra',
                                    icon: Zap,
                                    tags: ['Property Leasing', 'Renewables']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 3. ENGAGEMENT MODEL
        {
            id: 'engagement-model',
            name: 'Engagement Model',
            path: '/engagement-model',
            icon: Layers,
            badge: 'Commercial Continuum',
            summary: 'One commercial continuum. Eight ways to buy certainty with defined pricing, deliverables, and SLAs.',
            categories: [
                {
                    id: 'models',
                    title: 'Architecture & Models',
                    desc: 'Full spectrum of eight engagement models spanning advisory to shared risk',
                    path: '/engagement-model/models',
                    badge: 'Eight Models',
                    icon: Target,
                    columns: [
                        {
                            header: 'Models Continuum',
                            badge: 'Eight Models',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Overview & Continuum',
                                    description: 'Explore the full spectrum of eight engagement models and shared economics.',
                                    path: '/engagement-model',
                                    badge: 'Continuum',
                                    icon: Layers,
                                    tags: ['Eight Models', 'Shared Economics']
                                },
                                {
                                    title: 'Eight Engagement Models',
                                    description: 'Detailed breakdown of deliverables, sprint lengths, and commitment levels.',
                                    path: '/engagement-model/models',
                                    badge: 'Model Specs',
                                    icon: Target,
                                    tags: ['Sprint Lengths', 'Deliverables']
                                }
                            ]
                        },
                        {
                            header: 'Stack & Tracks',
                            badge: 'Delivery Stack',
                            icon: Search,
                            cards: [
                                {
                                    title: 'Discovery Stack (L1–L7)',
                                    description: 'Seven-layer architecture for discovering profit pools and buyer intent.',
                                    path: '/engagement-model/discovery-stack',
                                    badge: 'Discovery L1-L7',
                                    icon: Search,
                                    tags: ['L1-L7', 'Profit Pools']
                                },
                                {
                                    title: 'Delivery Tracks (A & B)',
                                    description: 'Management consulting vs. automated autonomous AI execution.',
                                    path: '/engagement-model/delivery-tracks',
                                    badge: 'Tracks A & B',
                                    icon: Cpu,
                                    tags: ['Consulting', 'AI Execution']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'stages',
                    title: 'Playbooks & Journeys',
                    desc: 'Stage-matched operational roadmaps and situational sequences',
                    path: '/engagement-model/stage-playbooks',
                    badge: 'Sequences',
                    icon: Sliders,
                    columns: [
                        {
                            header: 'Lifecycle Playbooks',
                            badge: 'Stages S1-S6',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Stage Playbooks (S1–S6)',
                                    description: 'Operational playbooks tailored for Seed, Growth, Scale, and Enterprise maturity.',
                                    path: '/engagement-model/stage-playbooks',
                                    badge: 'Stages S1-S6',
                                    icon: Layers,
                                    tags: ['Seed to Enterprise', 'Playbooks']
                                },
                                {
                                    title: 'Situation Playbooks (B1–B15)',
                                    description: 'Playbooks for 15 specific enterprise situations: stagnant pipeline, churn crisis, expansion.',
                                    path: '/engagement-model/business-situations',
                                    badge: 'Situations B1-B15',
                                    icon: Sliders,
                                    tags: ['Crisis Resolution', 'Situations']
                                }
                            ]
                        },
                        {
                            header: 'Multi-Quarter Tracks',
                            badge: 'Journeys A-E',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'Engagement Journeys (A–E)',
                                    description: 'Predictable multi-quarter transformation roadmaps with verifiable milestones.',
                                    path: '/engagement-model/journeys',
                                    badge: 'Journeys A-E',
                                    icon: TrendingUp,
                                    tags: ['Predictable Velocity', 'Milestones']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'commercials',
                    title: 'Commercials & Measurement',
                    desc: 'Pricing transparency, seven guardrails, and KPI governance',
                    path: '/engagement-model/commercials',
                    badge: 'Governance',
                    icon: DollarSign,
                    columns: [
                        {
                            header: 'Commercial Terms',
                            badge: 'Table 8.0',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Commercial Terms (Table 8.0)',
                                    description: 'Transparent pricing structures, retainer bands, fixed sprint fees, and success fees.',
                                    path: '/engagement-model/commercials',
                                    badge: 'Table 8.0 Pricing',
                                    icon: DollarSign,
                                    tags: ['Transparent Pricing', 'Zero Hidden Fees']
                                },
                                {
                                    title: 'Seven Standard Guardrails',
                                    description: 'Institutional protections ensuring alignment, data confidentiality, and IP retention.',
                                    path: '/engagement-model/commercials',
                                    badge: 'Guardrails',
                                    icon: ShieldCheck,
                                    tags: ['Data Confidentiality', 'IP Rights']
                                }
                            ]
                        },
                        {
                            header: 'Decision & Attribution',
                            badge: 'Interactive Engine',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'Interactive Model Selector',
                                    description: 'Dynamic diagnostic tool that recommends the exact model for your stage.',
                                    path: '/engagement-model/model-selector',
                                    badge: 'Decision Tool',
                                    icon: Bot,
                                    tags: ['Dynamic Match', 'Model Finder']
                                },
                                {
                                    title: 'KPI Library & Baselines',
                                    description: 'Repository of performance metrics, attribution standards, and SLA targets.',
                                    path: '/engagement-model/kpi-library',
                                    badge: 'KPI Library',
                                    icon: Target,
                                    tags: ['Attribution SLA', 'Metrics']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'onboarding',
                    title: 'Mobilization & Reference',
                    desc: 'Kickoff cadences, team alignment, glossary, and commercial FAQ',
                    path: '/engagement-model/onboarding',
                    badge: 'Mobilization',
                    icon: Clock,
                    columns: [
                        {
                            header: 'Mobilization Cadence',
                            badge: 'Week 1 Kickoff',
                            icon: Clock,
                            cards: [
                                {
                                    title: 'How an Engagement Starts',
                                    description: 'Detailed onboarding checklist, team alignment, and week-by-week sprint cadence.',
                                    path: '/engagement-model/onboarding',
                                    badge: 'Onboarding',
                                    icon: Clock,
                                    tags: ['Week 1 Kickoff', 'Sprint Cadence']
                                },
                                {
                                    title: 'Request Strategic Proposal',
                                    description: 'Schedule a confidential discovery session with our revenue architects.',
                                    path: '/book-consultation',
                                    badge: 'Advisory Session',
                                    icon: ArrowRight,
                                    tags: ['45-Min Discovery', 'Custom Plan']
                                }
                            ]
                        },
                        {
                            header: 'Executive Reference',
                            badge: 'Knowledge Base',
                            icon: BookOpen,
                            cards: [
                                {
                                    title: 'Glossary (14 Definitions)',
                                    description: '14 authoritative definitions of modern revenue architecture terms.',
                                    path: '/engagement-model/glossary-faq',
                                    badge: 'Glossary',
                                    icon: BookOpen,
                                    tags: ['Revenue Terms', 'Definitions']
                                },
                                {
                                    title: 'Frequently Asked Questions',
                                    description: 'Comprehensive answers on pricing, guarantees, staffing, and deliverables.',
                                    path: '/engagement-model/glossary-faq',
                                    badge: 'FAQ',
                                    icon: HelpCircle,
                                    tags: ['Pricing FAQ', 'Guarantees']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 4. ICO ACCELERATION
        {
            id: 'ico-acceleration',
            name: 'ICO Acceleration',
            path: '/ico-acceleration',
            icon: Rocket,
            badge: 'Web3 & Token Suite',
            summary: 'End-to-end tokenomics, liquidity generation, launch operations, and regulatory hygiene.',
            categories: [
                // 1. Intelligence
                {
                    id: 'intelligence',
                    title: 'Intelligence',
                    desc: 'Part A & B: Market validation, 8 revenue engines, tokenomics and demand discovery',
                    path: '/ico-acceleration/intelligence',
                    badge: 'Intelligence Suite',
                    icon: BrainCircuit,
                    columns: [
                        {
                            header: 'Market & Token Architecture',
                            badge: 'Part A',
                            icon: BrainCircuit,
                            cards: [
                                {
                                    title: 'Market Validation & Benchmarks',
                                    description: 'Empirical data: 84% failure avoidance, capital formation metrics, and token audits.',
                                    path: '/ico-acceleration/intelligence#market-validation',
                                    badge: 'Intelligence',
                                    icon: Search,
                                    tags: ['Failure Avoidance', 'Benchmarks']
                                },
                                {
                                    title: 'Tokenomics & Narrative Architecture',
                                    description: 'Mathematical token velocity, emission curves, sink mechanics, and utility flywheels.',
                                    path: '/ico-acceleration/intelligence#tokenomics-narrative',
                                    badge: 'Tokenomics',
                                    icon: Sparkles,
                                    tags: ['Velocity Sinks', 'Utility']
                                },
                                {
                                    title: 'MVP Acceleration & Readiness',
                                    description: 'Core product readiness audits, testnet traction metrics, and smart contract architecture.',
                                    path: '/ico-acceleration/intelligence#mvp-acceleration',
                                    badge: 'Protocol MVP',
                                    icon: Rocket,
                                    tags: ['Testnet Traction', 'Audits']
                                }
                            ]
                        },
                        {
                            header: 'Demand & Signal Intelligence',
                            badge: 'Part B',
                            icon: Target,
                            cards: [
                                {
                                    title: 'Demand Discovery & Sentiment',
                                    description: 'Multi-channel sentiment analysis across crypto-native alpha groups, GitHub, and Telegram.',
                                    path: '/ico-acceleration/intelligence#demand-discovery',
                                    badge: 'Signals',
                                    icon: Target,
                                    tags: ['Alpha Ingestion', 'Sentiment']
                                },
                                {
                                    title: 'Community & Social Signals',
                                    description: 'Early-stage community signals, organic developer engagement, and contributor growth.',
                                    path: '/ico-acceleration/intelligence#community-signals',
                                    badge: 'Telemetry',
                                    icon: Users,
                                    tags: ['Developer Signals', 'Growth']
                                },
                                {
                                    title: 'Competitive & Sector Radar',
                                    description: 'Comparative radar mapping against tier-1 protocols in DeFi, DePIN, AI, and Gaming.',
                                    path: '/ico-acceleration/intelligence#competitive-radar',
                                    badge: 'Radar',
                                    icon: ShieldCheck,
                                    tags: ['Moats', 'Displacement']
                                }
                            ]
                        }
                    ]
                },
                // 2. Launch & Growth
                {
                    id: 'launch-growth',
                    title: 'Launch & Growth',
                    desc: 'Part D: 180-day 7-phase launch playbook, liquidity engineering, and tier-1 listings',
                    path: '/ico-acceleration/launch-growth',
                    badge: '180-Day Playbook',
                    icon: Rocket,
                    columns: [
                        {
                            header: 'Execution Roadmap',
                            badge: '7 Phases',
                            icon: Clock,
                            cards: [
                                {
                                    title: '7-Phase Launch Playbook',
                                    description: 'The comprehensive 180-day operational execution roadmap from T-16w Foundation to T+180d.',
                                    path: '/ico-acceleration/launch-growth#seven-phase-playbook',
                                    badge: '180-Day Playbook',
                                    icon: Clock,
                                    tags: ['T-16w to T+180d', 'Execution']
                                },
                                {
                                    title: 'Capital Formation & Syndicates',
                                    description: 'Institutional private round syndication, tier-1 Web3 VC matching, and lead order-book building.',
                                    path: '/ico-acceleration/launch-growth#growth-acceleration',
                                    badge: 'Private Round',
                                    icon: Landmark,
                                    tags: ['Syndicates', 'Order Book']
                                },
                                {
                                    title: 'KOL & Influencer Orchestration',
                                    description: 'Vetted tier-1 crypto KOL campaigns, narrative alignment, and performance-based attribution.',
                                    path: '/ico-acceleration/launch-growth#kol-orchestration',
                                    badge: 'Viral Reach',
                                    icon: Users,
                                    tags: ['KOL Fleet', 'Attribution']
                                }
                            ]
                        },
                        {
                            header: 'Liquidity & Listings',
                            badge: 'CEX / DEX',
                            icon: Coins,
                            cards: [
                                {
                                    title: 'Exchange Operations & Listings',
                                    description: 'Tier-1 and Tier-2 CEX listing coordination, liquidity SLAs, and market-maker integration.',
                                    path: '/ico-acceleration/launch-growth#exchange-operations',
                                    badge: 'CEX Listing',
                                    icon: Coins,
                                    tags: ['Tier-1 CEX', 'Market Makers']
                                },
                                {
                                    title: 'Airdrop & Token Sale Ops',
                                    description: 'Sybil-resistant airdrop architecture, whitelist mechanics, and public round sale operations.',
                                    path: '/ico-acceleration/launch-growth#airdrop-incentive',
                                    badge: 'Token Sale',
                                    icon: Zap,
                                    tags: ['Sybil Resistance', 'Whitelist']
                                },
                                {
                                    title: 'Post-TGE Retention & Staking',
                                    description: 'Post-listing secondary volume maintenance, staking lockup incentives, and anti-dump guardrails.',
                                    path: '/ico-acceleration/launch-growth#post-tge-retention',
                                    badge: 'Velocity',
                                    icon: TrendingUp,
                                    tags: ['Anti-Dump', 'Staking']
                                }
                            ]
                        }
                    ]
                },
                // 3. Solutions & Engagement
                {
                    id: 'solutions-engagement',
                    title: 'Solutions & Engagement',
                    desc: 'Part C & E: 6 tailored engagement models, 4 commercial layers, and protocol archetypes',
                    path: '/ico-acceleration/solutions-engagement',
                    badge: '6 Engagement Models',
                    icon: Handshake,
                    columns: [
                        {
                            header: 'Sector Archetypes',
                            badge: 'Protocols',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'Layer-1 & Layer-2 Protocols',
                                    description: 'Infrastructure-grade capital formation, validator onboarding, and ecosystem grant programs.',
                                    path: '/ico-acceleration/solutions-engagement#layer1-layer2',
                                    badge: 'Infra',
                                    icon: Layers,
                                    tags: ['L1/L2', 'Validators']
                                },
                                {
                                    title: 'DeFi & Yield Protocols',
                                    description: 'TVL bootstrapping, automated liquidity mining programs, and yield sustainability frameworks.',
                                    path: '/ico-acceleration/solutions-engagement#defi-projects',
                                    badge: 'DeFi & RWA',
                                    icon: DollarSign,
                                    tags: ['TVL Engine', 'Liquidity Mining']
                                },
                                {
                                    title: 'Web3 Gaming & Metaverse',
                                    description: 'Player economy loops, NFT asset interoperability, and creator incentive compensation models.',
                                    path: '/ico-acceleration/solutions-engagement#web3-gaming',
                                    badge: 'Gaming',
                                    icon: Sparkles,
                                    tags: ['In-Game Economy', 'Player Retention']
                                }
                            ]
                        },
                        {
                            header: 'Commercial Engagement',
                            badge: '6 Models',
                            icon: Handshake,
                            cards: [
                                {
                                    title: 'Six Engagement Models',
                                    description: 'Full-Lifecycle Launch, Growth Sprint, Advisory, Embedded Pods, and Performance-Based models.',
                                    path: '/ico-acceleration/solutions-engagement#engagement-models',
                                    badge: 'Commercial',
                                    icon: Handshake,
                                    tags: ['Full Lifecycle', 'Embedded Pod']
                                },
                                {
                                    title: 'Commercial Principles & Risk-Sharing',
                                    description: 'Aligned incentive structures, milestone-gated compensation, and token alignment models.',
                                    path: '/ico-acceleration/solutions-engagement#commercial-principles',
                                    badge: 'Aligned Risk',
                                    icon: ShieldCheck,
                                    tags: ['Milestone Gated', 'Aligned Terms']
                                },
                                {
                                    title: 'Centralized Exchange Integration',
                                    description: 'Direct advisory for Tier-1 CEX listing applications, compliance vetting, and liquidity pairs.',
                                    path: '/ico-acceleration/solutions-engagement#centralized-exchanges',
                                    badge: 'CEX Strategy',
                                    icon: Landmark,
                                    tags: ['Listing Ops', 'Market Depth']
                                }
                            ]
                        }
                    ]
                },
                // 4. Trust & Performance
                {
                    id: 'trust-performance',
                    title: 'Trust & Performance',
                    desc: 'Part C & G: Compliance by design, global jurisdictional guardrails, and 6 KPI dimensions',
                    path: '/ico-acceleration/trust-performance',
                    badge: 'Compliance Layer',
                    icon: ShieldCheck,
                    columns: [
                        {
                            header: 'Compliance by Design',
                            badge: 'Global Guardrails',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'Compliance by Design Trust Layer',
                                    description: 'Proactive regulatory hygiene ensuring institutional suitability and zero enforcement risk.',
                                    path: '/ico-acceleration/trust-performance#compliance-by-design',
                                    badge: 'Trust Layer',
                                    icon: ShieldCheck,
                                    tags: ['Zero Enforcement', 'Institutional']
                                },
                                {
                                    title: 'Jurisdictional Guardrails (MiCA / VARA / SEC)',
                                    description: 'Multi-jurisdiction legal opinions, EU MiCA whitepapers, UAE VARA filings, and US SEC safe harbors.',
                                    path: '/ico-acceleration/trust-performance#jurisdictional-guardrails',
                                    badge: 'MiCA / VARA',
                                    icon: Landmark,
                                    tags: ['EU MiCA', 'UAE VARA']
                                },
                                {
                                    title: 'KYC/AML & Accreditation Proofs',
                                    description: 'Institutional-grade identity verification, sanctions screening, and investor accreditation.',
                                    path: '/ico-acceleration/trust-performance#kyc-aml',
                                    badge: 'Accreditation',
                                    icon: Lock,
                                    tags: ['Sanctions', 'Accredited']
                                }
                            ]
                        },
                        {
                            header: 'KPI & Attribution Framework',
                            badge: '6 Categories',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: '6-Category KPI Framework',
                                    description: 'Telemetry tracking Capital Raised, Community Depth, Holder Velocity, Secondary Liquidity, and Trust.',
                                    path: '/ico-acceleration/trust-performance#kpi-framework',
                                    badge: 'KPI Library',
                                    icon: BarChart3,
                                    tags: ['Boardroom Telemetry', '6 Dimensions']
                                },
                                {
                                    title: 'Qualified Investor Lead Framework',
                                    description: 'Five-stage investor qualification rubric from Initial Signal to Verified Capital Commitment.',
                                    path: '/ico-acceleration/trust-performance#qualified-lead-framework',
                                    badge: 'Lead Scoring',
                                    icon: Target,
                                    tags: ['Qualification', 'Commitments']
                                },
                                {
                                    title: 'Forecasting & Attribution Models',
                                    description: 'Multi-touch attribution measuring true ROI across KOLs, PR, PR syndicates, and community events.',
                                    path: '/ico-acceleration/trust-performance#forecasting-attribution',
                                    badge: 'Attribution',
                                    icon: Activity,
                                    tags: ['Multi-Touch ROI', 'Attribution']
                                }
                            ]
                        }
                    ]
                },
                // 5. Sales Enablement
                {
                    id: 'sales-enablement',
                    title: 'Sales Enablement',
                    desc: 'Part F: Web3 SPICED framework, objection handling, pitch architecture, and CRM telemetry',
                    path: '/ico-acceleration/sales-enablement',
                    badge: 'SPICED Enablement',
                    icon: Users,
                    columns: [
                        {
                            header: 'Web3 SPICED Methodology',
                            badge: 'Pitch Science',
                            icon: Target,
                            cards: [
                                {
                                    title: 'SPICED Framework for Web3',
                                    description: 'Situation, Pain, Impact, Critical Event, and Decision criteria adapted for crypto founders.',
                                    path: '/ico-acceleration/sales-enablement#spiced-framework',
                                    badge: 'SPICED Method',
                                    icon: Target,
                                    tags: ['Web3 SPICED', 'Diagnostic']
                                },
                                {
                                    title: 'Segment-Specific Challenges',
                                    description: 'Tailored talk-tracks and objection navigation for L1/L2s, DeFi protocols, Web3 gaming, and DAOs.',
                                    path: '/ico-acceleration/sales-enablement#segment-challenges',
                                    badge: 'Segment Pitch',
                                    icon: Users,
                                    tags: ['L1/L2 Pitch', 'DeFi Objections']
                                },
                                {
                                    title: 'Interactive Objection Handling Matrix',
                                    description: 'Battle-tested counter-arguments for token valuation, market-maker fees, regulatory FUD, and timing.',
                                    path: '/ico-acceleration/sales-enablement#objection-handling',
                                    badge: 'Objections',
                                    icon: HelpCircle,
                                    tags: ['FUD Defense', 'Counter-Moves']
                                }
                            ]
                        },
                        {
                            header: 'Artifacts & Solution Delivery',
                            badge: 'Deal Closing',
                            icon: FileText,
                            cards: [
                                {
                                    title: 'Solution & Deliverables Mapping',
                                    description: 'Connecting diagnosed founder pain points directly to guaranteed commercial deliverables.',
                                    path: '/ico-acceleration/sales-enablement#solution-mapping',
                                    badge: 'Deliverables',
                                    icon: FileText,
                                    tags: ['SOW Generation', 'Deliverables']
                                },
                                {
                                    title: 'Discovery Call Output & Playbooks',
                                    description: 'Standardized 48-hour diagnostic memo, risk assessment score, and launch timeline proposal.',
                                    path: '/ico-acceleration/sales-enablement#discovery-call-output',
                                    badge: 'Call Outputs',
                                    icon: CheckCircle2,
                                    tags: ['48-hr Diagnostic', 'Risk Audit']
                                },
                                {
                                    title: 'Institutional Pitch Deck Architecture',
                                    description: 'Token narrative presentation frameworks designed for tier-1 Web3 venture committee approvals.',
                                    path: '/ico-acceleration/sales-enablement#spiced-framework',
                                    badge: 'Pitch Decks',
                                    icon: Sparkles,
                                    tags: ['VC Deck', 'Committee Approval']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 5. AI-DRIVEN SALES TRANSFORMATION
        {
            id: 'ai-driven-sales-transformation',
            name: 'AI-Driven Sales Transformation',
            path: '/ai-driven-sales-transformation',
            icon: BrainCircuit,
            badge: 'Autonomous Sales',
            summary: 'Transform traditional B2B sales teams into autonomous, high-velocity revenue machines.',
            categories: [
                {
                    id: 'autonomous-sales',
                    title: 'Autonomous Sales Engines',
                    desc: 'Autonomous pipeline acceleration, dynamic scoring, and deal velocity',
                    path: '/solutions',
                    badge: 'Sales Transformation',
                    icon: BrainCircuit,
                    columns: [
                        {
                            header: 'Autonomous SDR',
                            badge: 'Pipeline Acceleration',
                            icon: Bot,
                            cards: [
                                {
                                    title: 'AI-Driven Sales Transformation',
                                    description: 'End-to-end enterprise sales force transformation into autonomous pipeline engines.',
                                    path: '/solutions',
                                    badge: 'Core Engine',
                                    icon: BrainCircuit,
                                    tags: ['Sales Transformation', 'Autopilot']
                                },
                                {
                                    title: 'AI SDR Co-Pilot / Autopilot',
                                    description: 'Autonomous prospect discovery, dynamic objection handling, and meeting scheduling.',
                                    path: '/industries/b2b#ai-sdr-copilot',
                                    badge: 'SDR Co-Pilot',
                                    icon: Bot,
                                    tags: ['Meeting Booking', 'Objection AI']
                                }
                            ]
                        },
                        {
                            header: 'Deal Intelligence',
                            badge: 'Deal Pacing',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'AI Pipeline Velocity & Next-Best-Action',
                                    description: 'Predictive deal progression and blocker elimination across enterprise stages.',
                                    path: '/solutions',
                                    badge: 'Deal Velocity',
                                    icon: Zap,
                                    tags: ['Blocker Removal', 'Velocity']
                                },
                                {
                                    title: 'Buying Committee Visibility',
                                    description: 'Map and engage enterprise decision-makers across complex sales cycles.',
                                    path: '/outcomes',
                                    badge: 'Committee Mapping',
                                    icon: Users,
                                    tags: ['Decision Makers', 'Consensus']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'revenue-telemetry',
                    title: 'Revenue & Deal Intelligence',
                    desc: 'Predictive revenue operations and intent-driven prospecting',
                    path: '/solutions',
                    badge: 'RevOps Telemetry',
                    icon: Target,
                    columns: [
                        {
                            header: 'Intent Mining',
                            badge: 'Demand Signals',
                            icon: Target,
                            cards: [
                                {
                                    title: 'AI Demand Discovery Engine',
                                    description: 'Uncover latent enterprise buyer intent across digital channels in real time.',
                                    path: '/solutions',
                                    badge: 'Intent Mining',
                                    icon: Target,
                                    tags: ['Buyer Intent', 'Signals']
                                },
                                {
                                    title: 'AI Lead Nurturing Autopilot',
                                    description: 'Adaptive behavioral email and chat nurturing sequences with zero churn.',
                                    path: '/solutions',
                                    badge: 'Lifecycle Ops',
                                    icon: Sparkles,
                                    tags: ['Adaptive Nurture', 'Zero Churn']
                                }
                            ]
                        },
                        {
                            header: 'RevOps Telemetry',
                            badge: 'CRM Enrichment',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'AI Revenue Operations Telemetry',
                                    description: 'Unified pipeline health diagnostics, CRM data enrichment, and velocity forecasting.',
                                    path: '/solutions',
                                    badge: 'RevOps Telemetry',
                                    icon: Activity,
                                    tags: ['Pipeline Health', 'Forecasting']
                                },
                                {
                                    title: 'Deal Risk Prediction & Forecasting',
                                    description: 'Algorithmic forecast accuracy and early detection of stalled deal risk.',
                                    path: '/outcomes',
                                    badge: 'Forecast AI',
                                    icon: ShieldCheck,
                                    tags: ['Forecast 90%+', 'Risk Detection']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 6. GROWTH & ACCELERATION SCIENCE
        {
            id: 'growth-acceleration-science',
            name: 'Growth & Acceleration Science',
            path: '/growth-acceleration-science',
            icon: TrendingUp,
            badge: 'Revenue Science',
            summary: 'Algorithmic growth engineering connecting data telemetry with executive revenue goals.',
            categories: [
                {
                    id: 'growth-engineering',
                    title: 'Algorithmic Growth Engineering',
                    desc: 'Compounding growth engineering across acquisition, retention, and monetization',
                    path: '/solutions',
                    badge: 'Growth Engineering',
                    icon: TrendingUp,
                    columns: [
                        {
                            header: 'Experimentation Lab',
                            badge: 'Scale Loops',
                            icon: Target,
                            cards: [
                                {
                                    title: 'AI Growth Acceleration Engine',
                                    description: 'Automate experimentation and discover scalable compounding growth levers.',
                                    path: '/solutions',
                                    badge: 'Growth Engine',
                                    icon: TrendingUp,
                                    tags: ['Compounding Growth', 'Levers']
                                },
                                {
                                    title: 'Growth Experimentation Lab',
                                    description: 'High-velocity automated hypothesis testing across product, marketing, and sales funnels.',
                                    path: '/solutions',
                                    badge: 'Hypothesis Lab',
                                    icon: Target,
                                    tags: ['Hypothesis Testing', 'Velocity']
                                }
                            ]
                        },
                        {
                            header: 'PLG & Retention',
                            badge: 'User Adoption',
                            icon: Layers,
                            cards: [
                                {
                                    title: 'Product-Led Growth (PLG) Optimization',
                                    description: 'AI-guided user onboarding, activation rates, and product adoption acceleration.',
                                    path: '/solutions',
                                    badge: 'PLG Core',
                                    icon: Layers,
                                    tags: ['Onboarding', 'Activation']
                                },
                                {
                                    title: 'Retention Intelligence & Churn Defense',
                                    description: 'Predictive churn modeling, early warning signals, and retention intervention.',
                                    path: '/solutions',
                                    badge: 'Churn Defense',
                                    icon: ShieldCheck,
                                    tags: ['Churn -40%', 'Retention AI']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'monetization-science',
                    title: 'Monetization & Analytics',
                    desc: 'Data-driven pricing, packaging, and compounding ARR expansion',
                    path: '/solutions',
                    badge: 'Monetization AI',
                    icon: DollarSign,
                    columns: [
                        {
                            header: 'Pricing & Virality',
                            badge: 'Expansion',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Monetization & Pricing Optimization',
                                    description: 'Algorithmic pricing elasticity, packaging tiers, and expansion intelligence.',
                                    path: '/solutions',
                                    badge: 'Pricing Science',
                                    icon: DollarSign,
                                    tags: ['Price Elasticity', 'ARR Tiers']
                                },
                                {
                                    title: 'Viral & Referral Loop Engineering',
                                    description: 'Self-propagating referral loops and viral organic distribution mechanics.',
                                    path: '/solutions',
                                    badge: 'Viral Loops',
                                    icon: Sparkles,
                                    tags: ['Organic Scale', 'Virality 3X']
                                }
                            ]
                        },
                        {
                            header: 'Attribution & Unit Economics',
                            badge: 'P&L Attribution',
                            icon: BarChart3,
                            cards: [
                                {
                                    title: 'Revenue Attribution & Analytics',
                                    description: 'Multi-touch attribution models mapping marketing touchpoints to bottom-line revenue.',
                                    path: '/analytics',
                                    badge: 'Attribution AI',
                                    icon: BarChart3,
                                    tags: ['Multi-Touch', 'P&L Credit']
                                },
                                {
                                    title: 'LTV/CAC Expansion Telemetry',
                                    description: 'Empirical telemetry tracking customer lifetime value expansion and CAC reduction.',
                                    path: '/demand-pulse',
                                    badge: 'Unit Economics',
                                    icon: Activity,
                                    tags: ['LTV/CAC 2.5X', 'Telemetry']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 7. GLOBAL MARKET ACCELERATION
        {
            id: 'global-market-acceleration',
            name: 'Global Market Acceleration',
            path: '/global-market-acceleration',
            icon: Globe,
            badge: 'Global Scale',
            summary: 'Cross-border expansion, multinational account scaling, and global partner ecosystems.',
            categories: [
                {
                    id: 'international-expansion',
                    title: 'International Market Penetration',
                    desc: 'Scale cross-border revenue, channel partnerships, and global accounts',
                    path: '/industries/enterprise',
                    badge: 'Global Expansion',
                    icon: Globe,
                    columns: [
                        {
                            header: 'Multinational GTM',
                            badge: 'Global Scale',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'AI Global Account Penetration',
                                    description: 'Cross-border enterprise sales strategies and multinational account expansion.',
                                    path: '/industries/enterprise#global-account-penetration',
                                    badge: 'Global Accounts',
                                    icon: Globe,
                                    tags: ['Cross-Border GTM', 'Multinational']
                                },
                                {
                                    title: 'Strategic Partnership Opportunity Finder',
                                    description: 'Identify, evaluate, and activate high-leverage global alliance networks.',
                                    path: '/industries/enterprise#partnership-opportunity',
                                    badge: 'Alliances',
                                    icon: Handshake,
                                    tags: ['Global Alliances', 'Channel Scale']
                                }
                            ]
                        },
                        {
                            header: 'Regional Velocity',
                            badge: 'Localized GTM',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'Rapid Regional Market Entry',
                                    description: 'Localized go-to-market playbooks for accelerated geographic expansion.',
                                    path: '/industries/mid-market#rapid-market-entry',
                                    badge: 'Market Entry',
                                    icon: Rocket,
                                    tags: ['Regional Playbooks', 'Speed']
                                },
                                {
                                    title: 'Executive Engagement Automation',
                                    description: 'Automate relationship nurturing with C-suite stakeholders globally.',
                                    path: '/industries/enterprise#executive-engagement',
                                    badge: 'C-Suite Global',
                                    icon: Briefcase,
                                    tags: ['Global C-Suite', 'Nurture']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'distribution-networks',
                    title: 'Channel & Distribution Networks',
                    desc: 'Alliances, OEM distribution networks, and indirect sales motions',
                    path: '/offerings/discovery-stack#channel-distribution',
                    badge: 'Indirect Motion',
                    icon: Network,
                    columns: [
                        {
                            header: 'Partner Alliances',
                            badge: 'Indirect Sales',
                            icon: Network,
                            cards: [
                                {
                                    title: 'Channel & Distribution Strategy',
                                    description: 'Scale direct, indirect, and OEM distribution partner networks.',
                                    path: '/offerings/discovery-stack#channel-distribution',
                                    badge: 'Channel Strategy',
                                    icon: Network,
                                    tags: ['OEM Networks', 'Distribution']
                                },
                                {
                                    title: 'Ecosystem Alliances & Co-Selling',
                                    description: 'Structured co-selling frameworks and channel incentive models.',
                                    path: '/partners',
                                    badge: 'Co-Selling',
                                    icon: Building2,
                                    tags: ['Co-Selling', 'Incentives']
                                }
                            ]
                        },
                        {
                            header: 'Adjacent Opportunity',
                            badge: 'New Whitespace',
                            icon: Sliders,
                            cards: [
                                {
                                    title: 'Adjacent Market Opportunity Capture',
                                    description: 'Unlock new vertical adjacencies without expanding fixed headcount.',
                                    path: '/offerings/segments',
                                    badge: 'Adjacency Scale',
                                    icon: Sliders,
                                    tags: ['Adjacent Whitespace', 'Scale']
                                },
                                {
                                    title: 'Global Regulatory & Compliance Advisory',
                                    description: 'Ensure smooth cross-border compliance across North America, EMEA, and APAC.',
                                    path: '/security',
                                    badge: 'Compliance',
                                    icon: ShieldCheck,
                                    tags: ['Cross-Border Legal', 'EMEA/APAC']
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // 8. USE CASES
        {
            id: 'use-cases',
            name: 'Use Cases',
            path: '/use-cases',
            icon: ShieldCheck,
            badge: 'Verified Outcomes',
            summary: 'Proven boardroom-ready revenue impact, verified ROI metrics, and customer case studies.',
            categories: [
                {
                    id: 'enterprise-outcomes',
                    title: 'Enterprise Outcomes',
                    desc: 'Proven boardroom-ready revenue impact across sectors',
                    path: '/outcomes',
                    badge: 'Boardroom ROI',
                    icon: ShieldCheck,
                    columns: [
                        {
                            header: 'Sales & Pipeline',
                            badge: 'Proven Metrics',
                            icon: Briefcase,
                            cards: [
                                {
                                    title: 'Enterprise Sales Acceleration',
                                    description: '35–50% reduction in sales cycle time and 20–30% higher win rates.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: Briefcase,
                                    tags: ['-45% Cycle Time', '+25% Win Rate']
                                },
                                {
                                    title: 'High-Velocity Pipeline Generation',
                                    description: 'Predictable inbound/outbound qualified lead generation at scale.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: Target,
                                    tags: ['Predictable Pipeline', 'Scale']
                                }
                            ]
                        },
                        {
                            header: 'Win-Back & Committee',
                            badge: 'Account Scale',
                            icon: Users,
                            cards: [
                                {
                                    title: 'Competitor Displacement Win-Back',
                                    description: 'Systematic account takeover from legacy incumbents.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: ShieldCheck,
                                    tags: ['Competitor Win-Back', 'Share']
                                },
                                {
                                    title: 'Buying Committee Consensus',
                                    description: 'Accelerate approvals across multi-stakeholder enterprise buying committees.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: Users,
                                    tags: ['Committee Alignment', 'Speed']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'growth-scenarios',
                    title: 'Growth Scenarios & Results',
                    desc: 'Verified metrics, customer case studies, and business impact',
                    path: '/outcomes',
                    badge: 'Customer Evidence',
                    icon: TrendingUp,
                    columns: [
                        {
                            header: 'Retention & Margins',
                            badge: 'Bottom Line',
                            icon: DollarSign,
                            cards: [
                                {
                                    title: 'Churn Reduction & Account Expansion',
                                    description: 'Predictive retention strategies driving 40–60% churn reduction.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: ShieldCheck,
                                    tags: ['-50% Churn', 'Net Retention']
                                },
                                {
                                    title: 'Pricing Power & Margin Expansion',
                                    description: 'Optimized packaging and contract terms driving gross margin gains.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: DollarSign,
                                    tags: ['Gross Margin', 'Pricing Power']
                                }
                            ]
                        },
                        {
                            header: 'Venture Traction',
                            badge: 'Zero-to-One',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'Zero-to-One Market Validation',
                                    description: 'Rapid customer validation and product-market fit signal detection.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: Rocket,
                                    tags: ['PMF Validation', '10X Speed']
                                },
                                {
                                    title: 'Compounding ARR Velocity',
                                    description: 'Transforming unpredictable pipelines into compounding annual revenue.',
                                    path: '/outcomes',
                                    badge: 'Case Study',
                                    icon: TrendingUp,
                                    tags: ['ARR Compounding', 'Predictable']
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
        if (!currentMenu) return null;
        return currentMenu.categories.find(c => c.id === activeCategoryId) || currentMenu.categories[0];
    }, [currentMenu, activeCategoryId]);

    // Handle mouse enter for desktop navigation item
    const handleMenuMouseEnter = (menuId: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveMenuId(menuId);
        const menu = mainMenus.find(m => m.id === menuId);
        if (menu && menu.categories.length > 0) {
            setActiveCategoryId(menu.categories[0].id);
        }
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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveMenuId(null);
                setSearchOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Check if route matches main menu
    const isMenuActive = (menu: MainMenuItem) => {
        if (location.pathname === menu.path) return true;
        if (menu.path !== '/' && location.pathname.startsWith(menu.path)) return true;
        if ((menu.id === 'engagement' || menu.id === 'engagement-model') && location.pathname.startsWith('/engagement')) return true;
        if (menu.id === 'ico-acceleration' && (location.pathname.startsWith('/ico-acceleration') || location.pathname === '/crypto')) return true;
        if (menu.id === 'global-market-acceleration' && (location.pathname === '/demand-pulse' || location.pathname.startsWith('/global-market-acceleration'))) return true;
        if (menu.id === 'use-cases' && (location.pathname === '/outcomes' || location.pathname === '/use-cases')) return true;
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
            <header className="h-16 lg:h-[72px] bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs px-2 sm:px-3 lg:px-2 xl:px-3 2xl:px-6 flex items-center justify-between transition-all relative z-50">
                {/* Left: Brand Logo */}
                <div className="flex items-center gap-1.5 xl:gap-2.5 2xl:gap-4 shrink-0">
                    <Link to="/" className="flex items-center gap-1.5 xl:gap-2 group shrink-0">
                        <div className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 rounded-lg xl:rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs xl:text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform shrink-0">
                            PM
                        </div>
                        <div className="text-base xl:text-lg 2xl:text-xl font-extrabold tracking-tight text-slate-900 font-heading whitespace-nowrap">
                            <span>Profit</span><span className="text-blue-600">Machines</span>
                        </div>
                    </Link>

                    <div className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 font-mono text-[10px] font-bold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span>Enterprise v2.4</span>
                    </div>
                </div>

                {/* Center: 8 Main Menus Horizontally (>= lg) */}
                <nav className="hidden lg:flex items-center gap-0 xl:gap-0.5 2xl:gap-1.5 h-full whitespace-nowrap shrink-0 flex-nowrap">
                    {mainMenus.map((menu) => {
                        const isCurrentActive = isMenuActive(menu);
                        const isDropdownOpen = activeMenuId === menu.id;

                        return (
                            <div
                                key={menu.id}
                                className="relative h-full flex items-center shrink-0 flex-nowrap"
                                onMouseEnter={() => handleMenuMouseEnter(menu.id)}
                            >
                                <div
                                    className={`flex items-center rounded-lg 2xl:rounded-xl text-[10px] xl:text-[11px] 2xl:text-[12.5px] font-semibold tracking-tight transition-all duration-150 whitespace-nowrap shrink-0 flex-nowrap ${
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
                                        className="px-1 xl:px-1.5 2xl:px-2 py-1.5 xl:py-2 flex items-center cursor-pointer transition-colors whitespace-nowrap shrink-0 flex-nowrap"
                                    >
                                        <span className="whitespace-nowrap shrink-0 select-none">{menu.name}</span>
                                    </Link>
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
                                        className="pr-1 2xl:pr-1.5 py-1.5 xl:py-2 pl-0 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors shrink-0"
                                    >
                                        <ChevronDown
                                            className={`w-2.5 h-2.5 xl:w-3 xl:h-3 transition-transform duration-200 opacity-60 shrink-0 ${
                                                isDropdownOpen ? 'rotate-180 text-blue-600 opacity-100' : ''
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </nav>

                {/* Right: Actions */}
                <div className="flex items-center gap-1 xl:gap-2 2xl:gap-2.5 shrink-0">
                    {/* Search Trigger Button */}
                    <button
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        className="p-1.5 xl:p-2 rounded-lg xl:rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all flex items-center gap-1 text-xs whitespace-nowrap shrink-0"
                        aria-label="Search directory"
                    >
                        <Search className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-500 shrink-0" />
                        <span className="hidden 2xl:inline font-medium text-slate-400 whitespace-nowrap">Search...</span>
                    </button>

                    {/* Book Strategic Consultation Button */}
                    <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-1 xl:gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-[11px] xl:text-xs 2xl:text-sm px-2.5 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg xl:rounded-xl transition-all shadow-sm shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-px whitespace-nowrap shrink-0"
                    >
                        <span className="whitespace-nowrap">Book Consultation</span>
                        <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors ml-1"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* ── FLOATING MEGA-MENU DROPDOWN PANEL (>= lg) ── */}
            {currentMenu && (
                <div
                    className="hidden lg:block fixed left-0 right-0 top-16 lg:top-[72px] z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
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

            {/* ── MOBILE SLIDE-OVER DRAWER (< lg) ── */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
                        onClick={() => setMobileOpen(false)}
                    />

                    <div className="relative w-80 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
                        {/* Drawer Header */}
                        <div className="h-16 px-5 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
                            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                    PM
                                </div>
                                <span className="font-extrabold text-lg text-slate-900 font-heading">
                                    Profit<span className="text-blue-600">Machines</span>
                                </span>
                            </Link>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Drawer Accordion List */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {mainMenus.map((menu) => {
                                const isExpanded = mobileExpandedMenu === menu.id;
                                const MenuIcon = menu.icon || Layers;

                                return (
                                    <div key={menu.id} className="border border-slate-200/80 rounded-xl overflow-hidden">
                                        <div
                                            className={`w-full p-3 flex items-center justify-between text-xs font-bold transition-colors ${
                                                isExpanded ? 'bg-blue-50 text-blue-600' : 'bg-white text-slate-800'
                                            }`}
                                        >
                                            <Link
                                                to={menu.path}
                                                onClick={() => setMobileOpen(false)}
                                                className="flex items-center gap-2.5 truncate flex-1 hover:text-blue-600 cursor-pointer"
                                            >
                                                <MenuIcon className="w-4 h-4 text-blue-600 shrink-0" />
                                                <span className="truncate">{menu.name}</span>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => setMobileExpandedMenu(isExpanded ? null : menu.id)}
                                                className="p-1 -mr-1 text-slate-400 hover:text-blue-600 cursor-pointer"
                                                aria-label={`Expand ${menu.name} submenu`}
                                            >
                                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                                                    isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'
                                                }`} />
                                            </button>
                                        </div>

                                        {isExpanded && (
                                            <div className="p-3 bg-slate-50/60 border-t border-slate-100 space-y-3">
                                                <Link
                                                    to={menu.path}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block text-xs font-bold text-blue-600 hover:underline"
                                                >
                                                    • Visit {menu.name} Overview →
                                                </Link>

                                                {menu.categories.map((cat) => (
                                                    <div key={cat.id} className="space-y-1.5 pl-2 border-l-2 border-blue-200">
                                                        <Link
                                                            to={cat.path}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="block text-xs font-bold text-slate-800 hover:text-blue-600"
                                                        >
                                                            {cat.title}
                                                        </Link>

                                                        <div className="space-y-1">
                                                            {cat.columns.flatMap(c => c.cards).map((card, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    to={card.path}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className="block text-[11px] text-slate-600 hover:text-blue-600 truncate py-0.5"
                                                                >
                                                                    {card.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Drawer Bottom CTA */}
                        <div className="p-4 border-t border-slate-200 bg-slate-50 shrink-0 space-y-2">
                            <Link
                                to="/book-consultation"
                                onClick={() => setMobileOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-sm"
                            >
                                <span>Book Consultation</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
