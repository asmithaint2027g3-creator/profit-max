import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, X, ChevronRight, ChevronDown, Search, ArrowRight, ArrowUpRight,
    Compass, Building2, Zap, Handshake, Rocket, BrainCircuit, TrendingUp, Globe,
    ShieldCheck, Layers, Cpu, DollarSign, Target, Sparkles, UserCheck, Sliders,
    Briefcase, ShoppingBag, Bot, Users, Activity, FileText, Lock, Coins,
    Network, Clock, BookOpen, HelpCircle, Landmark, HeartPulse, GraduationCap,
    Lightbulb, Shield, BarChart3, CheckCircle2, Phone, Radio, Factory, Server, Box, Scale,
    Flame, Store, Building
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
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // ── 7 MAIN MENUS DATA (EXACT SEVEN TOP-LEVEL MENU ITEMS AS SPECIFIED) ──
    const mainMenus: MainMenuItem[] = useMemo(() => [
        // 1. REVENUE DISCOVERY (ORIGIN FRAMEWORK)
        {
            id: 'offerings',
            name: 'Offerings',
            shortName: 'Offerings',
            path: '/offerings/discovery',
            icon: Compass,
            badge: 'ORIGIN Framework · 16 Nodes',
            summary: 'Four Origins. Sixteen Nodes. One Rule: Realization, Not Documentation.',
            categories: [
                {
                    id: 'framework-overview',
                    title: 'Framework Overview',
                    desc: 'The complete revenue discovery framework hub connecting all 16 nodes into one diagnostic system.',
                    path: '/offerings/discovery',
                    badge: 'Hub Page',
                    icon: Compass,
                    columns: [
                        {
                            header: 'Framework Architecture',
                            badge: 'Overview',
                            icon: Compass,
                            cards: [
                                {
                                    title: 'Framework Overview Hub',
                                    description: 'The master diagnostic operating system uniting 4 origins and 16 discovery nodes.',
                                    path: '/offerings/discovery',
                                    badge: 'Hub',
                                    icon: Compass,
                                    tags: ['Operating System', '16 Nodes']
                                },
                                {
                                    title: 'Interactive Node Map',
                                    description: 'Visual map connecting all 16 nodes with telemetry, baselines, and locked targets.',
                                    path: '/offerings/discovery#node-map',
                                    badge: 'Map',
                                    icon: Layers,
                                    tags: ['Visual Telemetry', 'Full Matrix']
                                }
                            ]
                        },
                        {
                            header: 'Engagement & Realization',
                            badge: '90-Day Path',
                            icon: Activity,
                            cards: [
                                {
                                    title: 'The Realization Layer',
                                    description: '6-step protocol converting discovery into compounding measured revenue.',
                                    path: '/offerings/discovery#realization',
                                    badge: '6 Steps',
                                    icon: Activity,
                                    tags: ['SOW Locked', 'Proof Cadence']
                                },
                                {
                                    title: 'Book a Discovery Diagnostic',
                                    description: 'Baseline all 16 nodes simultaneously with our Principal Systems Architects.',
                                    path: '/offerings/discovery#intake',
                                    badge: 'Diagnostic',
                                    icon: Target,
                                    tags: ['Mutual NDA', 'Baseline Audit']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'revenue-discovery',
                    title: 'Core Discovery',
                    desc: 'Where the money is, what buyers will pay, who is ready to buy, and who you are fighting for it.',
                    path: '/offerings/discovery/micro-market',
                    badge: '8 Nodes',
                    icon: Search,
                    columns: [
                        {
                            header: 'Market & Demand Diagnostics',
                            badge: 'Nodes 1.1–1.4',
                            icon: Target,
                            cards: [
                                {
                                    title: 'Micro-Market Discovery',
                                    description: 'Which micro-segment carries the margin — and can we defend it?',
                                    path: '/offerings/discovery/micro-market',
                                    badge: 'Node 1.1',
                                    icon: Target,
                                    tags: ['Problem-Solution-Proof', 'Profit Pool']
                                },
                                {
                                    title: 'Demand Chain Discovery',
                                    description: 'Where does the demand chain leak — and how do we fix it?',
                                    path: '/offerings/discovery/demand-chain',
                                    badge: 'Node 1.2',
                                    icon: Activity,
                                    tags: ['Diagnostic-Telemetry', 'Velocity']
                                },
                                {
                                    title: 'Channel Discovery',
                                    description: 'How concentrated is our reach — and where is the second engine?',
                                    path: '/offerings/discovery/channel',
                                    badge: 'Node 1.3',
                                    icon: Network,
                                    tags: ['Risk-Concentration', 'Owned Pipeline']
                                },
                                {
                                    title: 'Willingness-to-Pay Discovery',
                                    description: 'What will buyers actually pay — and where are we underpriced?',
                                    path: '/offerings/discovery/willingness-to-pay',
                                    badge: 'Node 1.4',
                                    icon: DollarSign,
                                    tags: ['Evidence-Based Pricing', 'Price Floors']
                                }
                            ]
                        },
                        {
                            header: 'Behavioral & Competitive Intel',
                            badge: 'Nodes 1.5–1.8',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'Customer Propensity Discovery',
                                    description: 'Who is in-market right now — and are we calling them first?',
                                    path: '/offerings/discovery/propensity',
                                    badge: 'Node 1.5',
                                    icon: Cpu,
                                    tags: ['Intent-Routing', 'Nightly Deciles']
                                },
                                {
                                    title: 'Usage-to-Revenue Discovery',
                                    description: 'Which usage behaviors predict paid conversion — and are they wired to triggers?',
                                    path: '/offerings/discovery/usage-to-revenue',
                                    badge: 'Node 1.6',
                                    icon: Sparkles,
                                    tags: ['Behavioral-Trigger', 'Expansion']
                                },
                                {
                                    title: 'Competitor Discovery',
                                    description: 'What exactly are we losing to — deal by deal, feature by feature?',
                                    path: '/offerings/discovery/competitor',
                                    badge: 'Node 1.7',
                                    icon: ShieldCheck,
                                    tags: ['Counter-Intelligence', 'Battlecards']
                                },
                                {
                                    title: 'Competitive Ecosystem Discovery',
                                    description: 'Who is building the field we compete on — inside or outside their structure?',
                                    path: '/offerings/discovery/ecosystem',
                                    badge: 'Node 1.8',
                                    icon: Layers,
                                    tags: ['Structural-Positioning', 'Gravity']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'supply-chain-discovery',
                    title: 'Supply Chain Discovery',
                    desc: 'What you sell, at what margin, and what it truly costs to serve.',
                    path: '/offerings/discovery/offer-architecture',
                    badge: '2 Nodes',
                    icon: Box,
                    columns: [
                        {
                            header: 'Offer & Monetization Architecture',
                            badge: 'Nodes 2.1 & 2.2',
                            icon: Box,
                            cards: [
                                {
                                    title: 'Offer & Revenue Architecture',
                                    description: 'Is what we sell engineered for willingness-to-pay — or for cost-plus habit?',
                                    path: '/offerings/discovery/offer-architecture',
                                    badge: 'Node 2.1',
                                    icon: DollarSign,
                                    tags: ['Margin-Recovery', 'Tier Ladder']
                                },
                                {
                                    title: 'Cost-to-Serve & Capacity',
                                    description: 'Which revenue do we scale — and which revenue destroys us quietly?',
                                    path: '/offerings/discovery/cost-to-serve',
                                    badge: 'Node 2.2',
                                    icon: Scale,
                                    tags: ['Audit-Risk-Capacity', 'Customer Margin']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'business-ecosystem-discovery',
                    title: 'Ecosystem Discovery',
                    desc: 'Revenue you do not build alone: alliances, platforms, and adjacent ground.',
                    path: '/offerings/discovery/alliance',
                    badge: '2 Nodes',
                    icon: Network,
                    columns: [
                        {
                            header: 'Alliances & Platform Adjacency',
                            badge: 'Nodes 3.1 & 3.2',
                            icon: Network,
                            cards: [
                                {
                                    title: 'Alliance & Co-Sell',
                                    description: 'Which partnerships produce revenue — and which produce golf outings?',
                                    path: '/offerings/discovery/alliance',
                                    badge: 'Node 3.1',
                                    icon: Handshake,
                                    tags: ['Attribution-ROI', 'Co-Sell Engine']
                                },
                                {
                                    title: 'Platform & Adjacency',
                                    description: 'Are we building on someone else’s land — and where is our second vertical?',
                                    path: '/offerings/discovery/platform-adjacency',
                                    badge: 'Node 3.2',
                                    icon: Layers,
                                    tags: ['De-Risk-Adjacency', 'Second Vertical']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'expansion-discovery',
                    title: 'Expansion Discovery',
                    desc: 'New offerings, new markets, new channels, new launches — proven before you commit.',
                    path: '/offerings/discovery/new-offering',
                    badge: '4 Nodes',
                    icon: TrendingUp,
                    columns: [
                        {
                            header: 'Expansion Validation Nodes',
                            badge: 'Nodes 4.1–4.4',
                            icon: TrendingUp,
                            cards: [
                                {
                                    title: 'New Offering Discovery',
                                    description: 'What should we sell next — proven against willingness-to-pay before we build it?',
                                    path: '/offerings/discovery/new-offering',
                                    badge: 'Node 4.1',
                                    icon: Sparkles,
                                    tags: ['Validation-Pre-Build', 'LOI Gates']
                                },
                                {
                                    title: 'New Market Discovery',
                                    description: 'Which market ranks by profit pool — and what’s the entry playbook for the winner?',
                                    path: '/offerings/discovery/new-market',
                                    badge: 'Node 4.2',
                                    icon: Globe,
                                    tags: ['Profit-Pool-War-Room', '90-Day Telemetry']
                                },
                                {
                                    title: 'New Channel Discovery',
                                    description: 'Which channel adds revenue without cannibalizing the core motion?',
                                    path: '/offerings/discovery/new-channel',
                                    badge: 'Node 4.3',
                                    icon: Network,
                                    tags: ['Model-Pilot-Attribution', 'Zero Conflict']
                                },
                                {
                                    title: 'New Product Launch Discovery',
                                    description: 'Is launch day a controlled operation — or a coin flip?',
                                    path: '/offerings/discovery/new-launch',
                                    badge: 'Node 4.4',
                                    icon: Rocket,
                                    tags: ['Command-Telemetry', 'Day-0 Live']
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
            path: '/industries',
            icon: Building2,
            badge: 'Vertical Engineering',
            summary: 'Vertical-specific revenue engineering: bespoke revenue operating systems tailored to your market nuances and compliance requirements.',
            categories: [
                {
                    id: 'b2b-focus',
                    title: 'B2B Focus',
                    desc: 'The Tactical Playbook: ABM Autopilot, competitor displacement, autonomous SDRs, and RQL predictors',
                    path: '/industries/b2b',
                    badge: 'Tactical Playbook',
                    icon: Target,
                    columns: [
                        {
                            header: 'Targeting & Displacement',
                            badge: 'Outbound & Intel',
                            icon: Target,
                            cards: [
                                {
                                    title: 'AI Account-Based Marketing (ABM) Autopilot',
                                    description: 'Orchestrate end-to-end target account campaigns with real-time intent triggers.',
                                    path: '/industries/b2b#abm',
                                    badge: '3.8× Account Lift',
                                    icon: Target,
                                    tags: ['Intent Sync', 'Dynamic Personalization']
                                },
                                {
                                    title: 'AI Competitor Displacement Engine',
                                    description: 'Identify rival pain points to win back accounts at contract renewal windows.',
                                    path: '/industries/b2b#displacement',
                                    badge: '62% Win-Back',
                                    icon: ShieldCheck,
                                    tags: ['Dissatisfaction Scans', 'Renewal Radar']
                                }
                            ]
                        },
                        {
                            header: 'Conversion & Expansion',
                            badge: 'Velocity & NRR',
                            icon: Cpu,
                            cards: [
                                {
                                    title: 'AI SDR Co-Pilot / Autopilot',
                                    description: 'Autonomous SDR qualifying leads, handling objections, and booking AE calendars.',
                                    path: '/industries/b2b#sdr',
                                    badge: '140+ Mtgs/Mo',
                                    icon: Bot,
                                    tags: ['24/7 Prospecting', 'Zero Lead Loss']
                                },
                                {
                                    title: 'AI Revenue Qualified Lead (RQL) Predictor',
                                    description: 'Predict close probability, deal size, and timelines with 94% mathematical precision.',
                                    path: '/industries/b2b#rql',
                                    badge: '94% Precision',
                                    icon: BarChart3,
                                    tags: ['Bayesian Forecast', 'Deal Health']
                                },
                                {
                                    title: 'AI Contract & Expansion Opportunity Finder',
                                    description: 'Uncover upsell and cross-sell opportunities from live software usage signals.',
                                    path: '/industries/b2b#expansion',
                                    badge: '138% NRR',
                                    icon: TrendingUp,
                                    tags: ['Proactive Upgrades', 'Churn Defense']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'b2c-focus',
                    title: 'B2C Focus',
                    desc: 'Omnichannel acquisition, 1:1 individualized dynamic pricing, and sub-5-minute cart recovery',
                    path: '/industries#bento-grid',
                    badge: 'High Velocity',
                    icon: ShoppingBag,
                    columns: [
                        {
                            header: 'Acquisition & Conversion',
                            badge: 'Ad Ops & Margins',
                            icon: ShoppingBag,
                            cards: [
                                {
                                    title: 'AI Omnichannel Lead Generation',
                                    description: 'Automate cross-platform ad budget distribution to capture lowest-cost conversions.',
                                    path: '/industries#bento-grid',
                                    badge: '−42% CPL',
                                    icon: ShoppingBag,
                                    tags: ['Predictive Bidding', 'ROAS Lift']
                                },
                                {
                                    title: 'AI Personalized Offer Generation at Scale',
                                    description: 'Deliver 1:1 dynamic pricing and promotions without sacrificing baseline margins.',
                                    path: '/industries#bento-grid',
                                    badge: '+34% CVR',
                                    icon: Sparkles,
                                    tags: ['Margin Defense', 'Cart Optimization']
                                }
                            ]
                        },
                        {
                            header: 'Retention & Audiences',
                            badge: 'Recovery Loops',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'AI Behavioral Retargeting Autopilot',
                                    description: 'Recover abandoned checkouts within minutes via hyper-personalized SMS and email.',
                                    path: '/industries#bento-grid',
                                    badge: '$280K Recovered',
                                    icon: Zap,
                                    tags: ['Sub-5-Min Retargeting', 'Multi-Channel']
                                },
                                {
                                    title: 'AI Lookalike Audience Auto-Scaling',
                                    description: 'Automatically feed ad networks daily with high-LTV buyer cohort seed lists.',
                                    path: '/industries#bento-grid',
                                    badge: '5× Scale',
                                    icon: Users,
                                    tags: ['Daily Seed Sync', 'Ad Fatigue Shield']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'enterprise-motion',
                    title: 'Enterprise',
                    desc: 'The Boardroom Briefing: Global account penetration, hyperscaler co-sell, and executive engagement',
                    path: '/industries/enterprise',
                    badge: 'Fortune 500 OS',
                    icon: Building2,
                    columns: [
                        {
                            header: 'Global Penetration & Alliances',
                            badge: 'Corporate Hierarchy',
                            icon: Globe,
                            cards: [
                                {
                                    title: 'AI Global Account Penetration',
                                    description: 'Expand enterprise accounts across multiple divisions, regions, and subsidiary trees.',
                                    path: '/industries/enterprise',
                                    badge: '12 Subsidiaries',
                                    icon: Globe,
                                    tags: ['Corporate Trees', 'Warm Division Paths']
                                },
                                {
                                    title: 'AI Strategic Partnership Opportunity Finder',
                                    description: 'Discover high-yield alliance opportunities and automate joint co-selling playbooks.',
                                    path: '/industries/enterprise',
                                    badge: '$12M Pipeline',
                                    icon: Handshake,
                                    tags: ['Audience Overlap', 'Co-Sell Governance']
                                }
                            ]
                        },
                        {
                            header: 'Executive C-Suite Clearance',
                            badge: 'Board Level',
                            icon: Building2,
                            cards: [
                                {
                                    title: 'AI Executive Engagement Automation',
                                    description: 'Mine 10-K filings to generate CFO-ready executive business cases for C-level buyers.',
                                    path: '/industries/enterprise',
                                    badge: '82% Exec CVR',
                                    icon: Building2,
                                    tags: ['CFO Payback Models', '10-K Alignment']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'growth-startups-midmarket',
                    title: 'Startups & Mid-Market',
                    desc: 'The Velocity Engine: Zero-to-one lead gen, PMF signal detection, and niche market domination',
                    path: '/industries/growth',
                    badge: 'Velocity Engine',
                    icon: Rocket,
                    columns: [
                        {
                            header: 'Early-Stage Velocity',
                            badge: 'Seed to Series A',
                            icon: Rocket,
                            cards: [
                                {
                                    title: 'AI Zero-to-One Lead Generation',
                                    description: 'Scrape targeted lead lists and launch campaigns within 48 hours for early traction.',
                                    path: '/industries/growth',
                                    badge: '48-Hour Launch',
                                    icon: Rocket,
                                    tags: ['First 25 Customers', 'Capital-Efficient']
                                },
                                {
                                    title: 'AI Product-Market Fit Signal Detection',
                                    description: 'Measure user retention, feature adoption, and viral referral velocity scientifically.',
                                    path: '/industries/growth',
                                    badge: '62% Retention',
                                    icon: Activity,
                                    tags: ['PMF Scoring', 'Retention Loops']
                                },
                                {
                                    title: 'AI Founder-Led Sales Automation',
                                    description: 'Reclaim 20 hours/week of founder leadership time with automated qualification.',
                                    path: '/industries/growth',
                                    badge: '20 Hrs Saved',
                                    icon: Clock,
                                    tags: ['Calendar Guard', 'Lead Triage']
                                },
                                {
                                    title: 'AI Burn-Rate Optimized Lead Capture',
                                    description: 'Maximize lead volume while preserving precious cash runway by 9+ months.',
                                    path: '/industries/growth',
                                    badge: '+9 Mo Runway',
                                    icon: Flame,
                                    tags: ['Organic Capture', 'Low CAC']
                                }
                            ]
                        },
                        {
                            header: 'Mid-Market Acceleration',
                            badge: 'Scale & Domination',
                            icon: Zap,
                            cards: [
                                {
                                    title: 'AI Rapid Market Entry Engine',
                                    description: 'Deploy pre-configured vertical outreach campaigns and content vectors in days.',
                                    path: '/industries/growth',
                                    badge: '30-Day Rollout',
                                    icon: Zap,
                                    tags: ['3 Verticals', '$2.4M Pipeline']
                                },
                                {
                                    title: 'AI Niche Market Domination',
                                    description: 'Map and engage 100% of target accounts within specialized concentrated verticals.',
                                    path: '/industries/growth',
                                    badge: '48% Share',
                                    icon: Target,
                                    tags: ['Niche Monopolization', 'Account Reach']
                                },
                                {
                                    title: 'AI Lean Team Productivity Amplifier',
                                    description: 'Multiply sales output 3× without adding headcount by automating CRM and enrichment.',
                                    path: '/industries/growth',
                                    badge: '3× Output',
                                    icon: Users,
                                    tags: ['Headcount Relief', '$450K Saved']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'specialized-sectors',
                    title: 'Specialized Regulated Sectors',
                    desc: 'The Compliance & Trust Vault: Pre-audited sandboxes for institutional, regulated, and high-liability industries',
                    path: '/industries/specialized',
                    badge: 'Trust Vault · 10 Sectors',
                    icon: ShieldCheck,
                    columns: [
                        {
                            header: 'Institutional & Regulated',
                            badge: 'Audited Sandboxes',
                            icon: ShieldCheck,
                            cards: [
                                {
                                    title: 'FinTech & Lending',
                                    description: 'Automated compliance reporting, API penetration testing, and investor trust.',
                                    path: '/industries/specialized?sector=fintech',
                                    badge: 'SEC / FINRA',
                                    icon: Landmark,
                                    tags: ['100% Audit Readiness', 'Zero Breaches']
                                },
                                {
                                    title: 'Healthcare & Life Sciences',
                                    description: 'HIPAA patient data protection, hospital CFO ROI cases, and EHR disaster resilience.',
                                    path: '/industries/specialized?sector=healthcare',
                                    badge: 'HIPAA BAA',
                                    icon: HeartPulse,
                                    tags: ['Clinical ROI', '99.999% Uptime']
                                },
                                {
                                    title: 'Industrial & Manufacturing',
                                    description: 'Operational risk scanning, CapEx payback modeling, and digital procurement.',
                                    path: '/industries/specialized?sector=industrial',
                                    badge: 'ISO 27001',
                                    icon: Factory,
                                    tags: ['Disaster Audits', 'Zero Downtime']
                                },
                                {
                                    title: 'SaaS Products & Cloud Platforms',
                                    description: 'Infosec clearance, penetration testing, and usage-to-revenue expansion telemetry.',
                                    path: '/industries/specialized?sector=saas',
                                    badge: 'SOC2 Type II',
                                    icon: Cpu,
                                    tags: ['Infosec Pass', '3.2× ARR Expansion']
                                },
                                {
                                    title: 'Energy & Utilities',
                                    description: 'SCADA and grid operational risk audits, compliance, and disaster resilience.',
                                    path: '/industries/specialized?sector=energy',
                                    badge: 'NERC CIP',
                                    icon: Zap,
                                    tags: ['Zero Outages', '100% ESG']
                                }
                            ]
                        },
                        {
                            header: 'Commercial & Consumer',
                            badge: 'High-Velocity Trust',
                            icon: Building2,
                            cards: [
                                {
                                    title: 'Service Industries',
                                    description: 'Reputation acceleration and automated trust audits for professional firms.',
                                    path: '/industries/specialized?sector=services',
                                    badge: '+42% CVR',
                                    icon: Briefcase,
                                    tags: ['Trust Audits', 'Enterprise Inquiries']
                                },
                                {
                                    title: 'D2C Companies',
                                    description: 'Brand protection, dynamic cart incentives, and influencer attribution loops.',
                                    path: '/industries/specialized?sector=d2c',
                                    badge: '−38% CAC',
                                    icon: ShoppingBag,
                                    tags: ['Cart Recovery', 'Brand Shield']
                                },
                                {
                                    title: 'Education & EdTech',
                                    description: 'Student data privacy under COPPA/FERPA, cyber safety, and enrollment growth.',
                                    path: '/industries/specialized?sector=education',
                                    badge: '+65% Enroll',
                                    icon: GraduationCap,
                                    tags: ['COPPA / FERPA', 'Student Privacy']
                                },
                                {
                                    title: 'Retail & FMCG',
                                    description: 'POS terminal security audits, loyalty growth, and omnichannel consumer demand.',
                                    path: '/industries/specialized?sector=retail',
                                    badge: '1,200 POS Nodes',
                                    icon: Store,
                                    tags: ['PCI-DSS Level 1', 'POS Security']
                                },
                                {
                                    title: 'Real Estate & Construction',
                                    description: 'Structural and environmental risk audits pre-clearing permits and funding.',
                                    path: '/industries/specialized?sector=real-estate',
                                    badge: '4 Mo Faster',
                                    icon: Building,
                                    tags: ['Permit Clearance', 'REIT Underwriting']
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
        if (menu.id === 'offerings' && (location.pathname.startsWith('/offerings') || location.pathname.startsWith('/engagement') || location.pathname.startsWith('/origin'))) return true;
        if (menu.path !== '/' && location.pathname.startsWith(menu.path)) return true;
        if (menu.id === 'industries' && (location.pathname.startsWith('/industries') || location.pathname.startsWith('/ico-acceleration') || location.pathname === '/crypto')) return true;
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

                {/* Center: 8 Main Menus Horizontally (>= lg) */}
                <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 h-full whitespace-nowrap shrink-0">
                    {mainMenus.map((menu) => {
                        const isCurrentActive = isMenuActive(menu);
                        const isDropdownOpen = activeMenuId === menu.id;

                        return (
                            <div
                                key={menu.id}
                                className="relative h-full flex items-center shrink-0"
                                onMouseEnter={() => handleMenuMouseEnter(menu.id)}
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
                                        className="px-1.5 xl:px-2 2xl:px-2.5 py-1.5 xl:py-2 flex items-center cursor-pointer transition-colors whitespace-nowrap shrink-0"
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
                                        className="pr-1.5 xl:pr-2 py-1.5 xl:py-2 pl-0 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors shrink-0"
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
                <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0 ml-2">
                    {/* Search Trigger Button */}
                    <button
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        className="p-1.5 xl:p-2 rounded-lg xl:rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200/60 hover:border-slate-300 transition-all flex items-center gap-1.5 text-xs whitespace-nowrap shrink-0"
                        aria-label="Search directory"
                    >
                        <Search className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-500 shrink-0" />
                        <span className="hidden min-[1650px]:inline font-medium text-slate-400 whitespace-nowrap">Search...</span>
                    </button>

                    {/* Book Strategic Consultation Button - Guaranteed Visible on All Screen Sizes */}
                    <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs xl:text-sm px-2.5 sm:px-3.5 xl:px-4 py-1.5 xl:py-2 rounded-lg xl:rounded-xl transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-px whitespace-nowrap shrink-0"
                    >
                        <span className="whitespace-nowrap">Book Consultation</span>
                        <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors ml-0.5 sm:ml-1 shrink-0"
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
