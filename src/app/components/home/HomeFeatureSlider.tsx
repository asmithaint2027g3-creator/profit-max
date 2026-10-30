import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
    ChevronLeft, ChevronRight, Pause, Play, ArrowRight, 
    Radar, Target, Bot, LineChart, Database, Cpu, 
    ShieldCheck, Globe, CheckCircle2, TrendingUp, Layers,
    Activity, Sparkles, Workflow, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { trackEvent } from '../../../lib/analytics';

export interface SliderItem {
    id: string;
    tag: string;
    pillTitle: string;
    icon: React.ElementType;
    title: string;
    highlightTitle: string;
    description: string;
    highlights: string[];
    capabilities: {
        label: string;
        sublabel: string;
    }[];
    image: string;
    fallbackGradient: string;
    badgeText: string;
    primaryCta: {
        text: string;
        link: string;
    };
    secondaryCta: {
        text: string;
        link: string;
    };
}

export const homeSliders: SliderItem[] = [
    // Slide 1 — Profit Pool Discovery
    {
        id: 'profit-pool-discovery',
        tag: 'Profit Pool Discovery',
        pillTitle: 'Profit Pool Discovery',
        icon: Radar,
        title: 'Discover Hidden Profit Pools',
        highlightTitle: 'Before Your Competitors.',
        description: 'Reveal underserved markets, emerging buyer demand, pricing opportunities, and untapped revenue potential through intelligent market discovery.',
        highlights: [
            'Identify market whitespace and high-potential customer segments.',
            'Discover buying signals and competitive opportunities.',
            'Prioritize revenue opportunities using business value and market evidence.'
        ],
        capabilities: [
            { label: 'Market Whitespace', sublabel: 'High-Potential Segments' },
            { label: 'Signal Telemetry', sublabel: 'Active Buying Indicators' },
            { label: 'Value Prioritization', sublabel: 'Data-Backed Roadmap' }
        ],
        image: '/images/hero-profit-pool.png',
        fallbackGradient: 'from-cyan-600/20 via-blue-600/15 to-indigo-600/20',
        badgeText: 'Profit Pool Discovery Telemetry: Active',
        primaryCta: {
            text: 'Explore Profit Pools',
            link: '/offerings/profit-pool-discovery'
        },
        secondaryCta: {
            text: 'Discover Market Opportunities',
            link: '/offerings/profit-pool-discovery#market-whitespace'
        }
    },
    // Slide 2 — Demand Engineering
    {
        id: 'demand-engineering',
        tag: 'Demand Engineering',
        pillTitle: 'Demand Engineering',
        icon: Target,
        title: 'Turn Market Demand Into',
        highlightTitle: 'Qualified Pipeline.',
        description: 'Connect ideal customer identification, buying-intent signals, AI-assisted prospecting, and lead qualification to build a more coordinated pipeline generation system.',
        highlights: [
            'Identify high-fit target accounts.',
            'Prioritize relevant demand and buying signals.',
            'Coordinate prospecting, qualification, and pipeline development.'
        ],
        capabilities: [
            { label: 'ICP Account Radar', sublabel: 'Target Fit Scoring' },
            { label: 'Multi-Channel Intent', sublabel: 'Surge Signal Capture' },
            { label: 'Pipeline Generation', sublabel: 'Orchestrated Outbound' }
        ],
        image: '/images/demand-pulse-dashboard.png',
        fallbackGradient: 'from-blue-600/20 via-indigo-600/15 to-purple-600/20',
        badgeText: 'Demand Engineering Engine: Active',
        primaryCta: {
            text: 'Explore Demand Engineering',
            link: '/offerings/demand-engineering'
        },
        secondaryCta: {
            text: 'Discover Pipeline Generation',
            link: '/ai-native-sales/autonomous-pipeline-generation'
        }
    },
    // Slide 3 — AI-Native Sales
    {
        id: 'ai-native-sales',
        tag: 'AI-Native Sales',
        pillTitle: 'AI-Native Sales',
        icon: Bot,
        title: 'Make Every Sales Interaction',
        highlightTitle: 'More Intelligent.',
        description: 'Bring account intelligence, AI-assisted sales engagement, prospecting, deal execution, and revenue workflows together in a connected sales operating model.',
        highlights: [
            'Prepare sales teams with relevant account intelligence.',
            'Streamline repetitive sales activities and follow-ups.',
            'Improve visibility into opportunities and buying signals.'
        ],
        capabilities: [
            { label: 'Account 360 Context', sublabel: 'Committee Intelligence' },
            { label: 'AI Engagement Mesh', sublabel: 'Contextual Follow-Ups' },
            { label: 'Deal Velocity', sublabel: 'Real-Time Insights' }
        ],
        image: '/images/hero-agentic-ai.png',
        fallbackGradient: 'from-indigo-600/20 via-purple-600/15 to-pink-600/20',
        badgeText: 'AI-Native Sales Operating System: Online',
        primaryCta: {
            text: 'Explore AI-Native Sales',
            link: '/ai-native-sales'
        },
        secondaryCta: {
            text: 'Discover Intelligent Sales Workflows',
            link: '/ai-native-sales/autonomous-sales-engagement'
        }
    },
    // Slide 4 — Sales Acceleration
    {
        id: 'sales-acceleration',
        tag: 'Sales Acceleration',
        pillTitle: 'Sales Acceleration',
        icon: LineChart,
        title: 'Move High-Value Deals Forward',
        highlightTitle: 'With Intelligence.',
        description: 'Identify opportunity risks, understand buying signals, support sales conversations, and help revenue teams focus on the deals that matter most.',
        highlights: [
            'Surface deal progression signals and potential bottlenecks.',
            'Support buying committee and opportunity intelligence.',
            'Improve visibility into sales-cycle performance.'
        ],
        capabilities: [
            { label: 'Deal Progression Radar', sublabel: 'Slippage Detection' },
            { label: 'Stakeholder Mapping', sublabel: 'Committee Coverage' },
            { label: 'Cycle Optimization', sublabel: 'Bottleneck Removal' }
        ],
        image: '/images/hero-revenue-acceleration.png',
        fallbackGradient: 'from-emerald-600/20 via-teal-600/15 to-blue-600/20',
        badgeText: 'Sales Acceleration & Deal Radar: Active',
        primaryCta: {
            text: 'Explore Sales Acceleration',
            link: '/offerings/sales-acceleration'
        },
        secondaryCta: {
            text: 'Discover Revenue Intelligence',
            link: '/ai-native-sales/revenue-intelligence'
        }
    },
    // Slide 5 — Digital & Data Intelligence
    {
        id: 'data-intelligence',
        tag: 'Digital & Data Intelligence',
        pillTitle: 'Digital & Data Intelligence',
        icon: Database,
        title: 'Connect Your Data.',
        highlightTitle: 'Unlock Revenue Intelligence.',
        description: 'Bring relevant CRM, customer, marketing, and operational data into a more connected decision-making environment, subject to available integrations and data permissions.',
        highlights: [
            'Improve visibility across fragmented business information.',
            'Identify useful patterns in customer and revenue data.',
            'Support better-informed operational and commercial decisions.'
        ],
        capabilities: [
            { label: 'Unified Data Streams', sublabel: 'CRM & ERP Connectors' },
            { label: 'Pattern Detection', sublabel: 'Predictive Signals' },
            { label: 'Decision Telemetry', sublabel: 'Executive Cockpit' }
        ],
        image: '/images/hero-data-intelligence.png',
        fallbackGradient: 'from-blue-600/20 via-cyan-600/15 to-indigo-600/20',
        badgeText: 'Revenue Data Intelligence Fabric: Connected',
        primaryCta: {
            text: 'Explore Data Intelligence',
            link: '/solutions'
        },
        secondaryCta: {
            text: 'Discover Data Architecture',
            link: '/growth-science/revenue-physics'
        }
    },
    // Slide 6 — Revenue Operations
    {
        id: 'revenue-operations',
        tag: 'Revenue Operations',
        pillTitle: 'Revenue Operations',
        icon: Cpu,
        title: 'Connect Every Revenue Team to',
        highlightTitle: 'One Operating System.',
        description: 'Coordinate sales, marketing, finance, and customer success through connected workflows, better data visibility, and more consistent revenue execution.',
        highlights: [
            'Streamline cross-functional revenue handoffs.',
            'Improve CRM data quality and workflow visibility.',
            'Connect performance reporting with business decisions.'
        ],
        capabilities: [
            { label: 'Cross-Team Alignment', sublabel: 'Unified Revenue Motion' },
            { label: 'CRM Orchestration', sublabel: 'Automated Data Hygiene' },
            { label: 'Executive Cockpit', sublabel: 'Real-Time Visibility' }
        ],
        image: '/images/revenue-acceleration-engine.png',
        fallbackGradient: 'from-slate-700/20 via-blue-800/15 to-indigo-900/20',
        badgeText: 'RevOps Command Center: Orchestrated',
        primaryCta: {
            text: 'Explore Revenue Operations',
            link: '/offerings/revenue-operations'
        },
        secondaryCta: {
            text: 'Discover Revenue Workflows',
            link: '/offerings/revenue-operations#command-center'
        }
    },
    // Slide 7 — Customer Growth
    {
        id: 'customer-growth',
        tag: 'Customer Growth',
        pillTitle: 'Customer Growth',
        icon: TrendingUp,
        title: 'Turn Customer Value Into',
        highlightTitle: 'Sustainable Revenue Growth.',
        description: 'Identify customer needs, monitor adoption signals, surface retention risks, and discover expansion opportunities across the customer lifecycle.',
        highlights: [
            'Improve visibility into customer health and adoption.',
            'Identify renewal and retention opportunities.',
            'Support cross-sell, upsell, and account expansion.'
        ],
        capabilities: [
            { label: 'Health Telemetry', sublabel: 'Early Risk Warning' },
            { label: 'Renewal Predictor', sublabel: 'Proactive Retention' },
            { label: 'Expansion Engine', sublabel: 'Account Whitespace' }
        ],
        image: '/images/industry-saas.png',
        fallbackGradient: 'from-teal-600/20 via-emerald-600/15 to-blue-600/20',
        badgeText: 'Customer Growth & Retention Radar: Active',
        primaryCta: {
            text: 'Explore Customer Growth',
            link: '/offerings/customer-success'
        },
        secondaryCta: {
            text: 'Discover Expansion Opportunities',
            link: '/ai-native-sales/customer-growth-intelligence'
        }
    },
    // Slide 8 — GTM Transformation
    {
        id: 'gtm-transformation',
        tag: 'GTM Transformation',
        pillTitle: 'GTM Transformation',
        icon: Workflow,
        title: 'Build a Go-to-Market Engine That',
        highlightTitle: 'Works as One.',
        description: 'Align market strategy, demand generation, sales execution, and customer growth around connected workflows and measurable commercial priorities.',
        highlights: [
            'Align teams around shared revenue objectives.',
            'Reduce friction across go-to-market workflows.',
            'Coordinate intelligence and automation across the revenue lifecycle.'
        ],
        capabilities: [
            { label: 'Unified GTM Motion', sublabel: 'Shared Objectives' },
            { label: 'Friction Removal', sublabel: 'Streamlined Handoffs' },
            { label: 'End-to-End Scale', sublabel: 'Continuous Growth' }
        ],
        image: '/images/hero-end-to-end-transformation.png',
        fallbackGradient: 'from-blue-700/20 via-indigo-700/15 to-purple-800/20',
        badgeText: 'GTM Operating Model: Synchronized',
        primaryCta: {
            text: 'Explore GTM Transformation',
            link: '/offerings/gtm-transformation'
        },
        secondaryCta: {
            text: 'Discover Growth Strategy',
            link: '/growth-science'
        }
    }
];

export default function HomeFeatureSlider() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const SLIDE_DURATION = 5500; // 5.5 seconds per slide (meets 5-6s requirement)
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const activeSlide = homeSliders[currentIndex];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % homeSliders.length);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + homeSliders.length) % homeSliders.length);
        setProgress(0);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setProgress(0);
        trackEvent({
            eventName: 'HOME_SLIDER_SELECT',
            label: homeSliders[index].title
        });
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Autoplay timer with progressive bar
    useEffect(() => {
        if (!isPlaying) {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
            return;
        }

        const stepTime = 50;
        const stepIncrement = (stepTime / SLIDE_DURATION) * 100;

        progressIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide();
                    return 0;
                }
                return prev + stepIncrement;
            });
        }, stepTime);

        return () => {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [isPlaying, nextSlide, currentIndex]);

    // Touch Swipe Gestures
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX - touchEndX;

        if (diffX > 45) {
            nextSlide();
        } else if (diffX < -45) {
            prevSlide();
        }
        setTouchStartX(null);
    };

    return (
        <section 
            className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-white relative overflow-hidden border-b border-slate-200"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="Key Platform Capabilities Slider"
        >
            {/* Subtle Grid Ambient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div 
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem'
                    }}
                />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[140px] pointer-events-none" />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Main 8-Slide Card Container */}
                <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-200/70 overflow-hidden p-6 sm:p-8 lg:p-12">
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                        >
                            {/* Left Content Column */}
                            <div className="lg:col-span-6 flex flex-col justify-center">
                                
                                <div className="flex items-center gap-2.5 mb-4">
                                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                        </span>
                                        <activeSlide.icon className="w-3.5 h-3.5 text-blue-600" />
                                        <span>{activeSlide.tag}</span>
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 leading-[1.16] tracking-tight mb-4 font-heading">
                                    {activeSlide.title}{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                        {activeSlide.highlightTitle}
                                    </span>
                                </h2>

                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                                    {activeSlide.description}
                                </p>

                                {/* Key Supporting Bullet Points */}
                                <div className="space-y-2.5 mb-8">
                                    {activeSlide.highlights.map((highlight, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-3">
                                            <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                            </div>
                                            <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                                                {highlight}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Key Capabilities Strip */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 shadow-xs">
                                    {activeSlide.capabilities.map((cap, cIdx) => (
                                        <div key={cIdx} className="text-left">
                                            <div className="text-xs sm:text-sm font-extrabold text-slate-900 font-heading">
                                                {cap.label}
                                            </div>
                                            <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                                                {cap.sublabel}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                                    <Link 
                                        to={activeSlide.primaryCta.link}
                                        onClick={() => trackEvent({ eventName: 'SLIDER_PRIMARY_CTA_CLICK', label: activeSlide.primaryCta.text })}
                                    >
                                        <Button className="w-full sm:w-auto bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-6 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group cursor-pointer">
                                            <span className="flex items-center justify-center">
                                                {activeSlide.primaryCta.text}
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </Link>
                                    
                                    <Link 
                                        to={activeSlide.secondaryCta.link}
                                        onClick={() => trackEvent({ eventName: 'SLIDER_SECONDARY_CTA_CLICK', label: activeSlide.secondaryCta.text })}
                                    >
                                        <Button variant="outline" className="w-full sm:w-auto border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-6 rounded-xl text-sm shadow-xs transition-all cursor-pointer">
                                            <span className="flex items-center justify-center">
                                                {activeSlide.secondaryCta.text}
                                                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-slate-500" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>

                            </div>

                            {/* Right Visual Column with Enterprise Product Interface */}
                            <div className="lg:col-span-6 relative">
                                <div className="relative rounded-2xl overflow-hidden border border-slate-300/90 shadow-2xl bg-slate-950 group">
                                    
                                    {/* Top Browser / Terminal Header Bar */}
                                    <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                        </div>
                                        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span>profitmachines.ai/{activeSlide.id}</span>
                                        </div>
                                        <div className="text-[10px] font-mono text-blue-400 font-bold uppercase">
                                            Telemetry
                                        </div>
                                    </div>

                                    {/* Main Image Container */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                                        
                                        {/* Fallback ambient glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.fallbackGradient} opacity-50`} />

                                        {/* Visual Graphic */}
                                        <img 
                                            src={activeSlide.image} 
                                            alt={`${activeSlide.title} ${activeSlide.highlightTitle}`}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            loading="eager"
                                            onError={(e) => {
                                                (e.currentTarget as HTMLImageElement).src = '/images/home-hero-dashboard.png';
                                            }}
                                        />

                                        {/* Subtle overlay gradients */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                                        {/* Floating Live Telemetry Badge on Image */}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-900/95 border border-slate-700/80 backdrop-blur-md shadow-lg">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                                                <span className="text-xs font-mono font-semibold text-slate-200 truncate">
                                                    {activeSlide.badgeText}
                                                </span>
                                            </div>
                                            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-blue-400 font-bold flex-shrink-0">
                                                <span>Live Stream</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Controls Strip: Trust Indicators, Pagination Dots & Arrow Controls (No Numerical Counter) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
                    
                    {/* Left: Enterprise Architecture Badges */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-600">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>Enterprise Governance</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <span>Multi-Cloud Architecture</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Activity className="w-4 h-4 text-indigo-600" />
                            <span>Continuous Telemetry</span>
                        </div>
                    </div>

                    {/* Right: Slide Controls, Dots, and Autoplay Toggle (No 05 / 06 Counter) */}
                    <div className="flex items-center gap-3">
                        
                        {/* 8 Dot Indicators with Active Progress Fill */}
                        <div className="flex items-center gap-1.5 mr-2">
                            {homeSliders.map((s, dotIdx) => (
                                <button
                                    key={s.id}
                                    onClick={() => goToSlide(dotIdx)}
                                    className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                                        dotIdx === currentIndex 
                                            ? 'w-8 bg-blue-100' 
                                            : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Go to slide ${dotIdx + 1}: ${s.tag}`}
                                    title={s.tag}
                                >
                                    {dotIdx === currentIndex && (
                                        <div 
                                            className="absolute top-0 bottom-0 left-0 bg-blue-600 transition-all"
                                            style={{ width: `${progress}%` }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Navigation Control Box: Play/Pause, Prev, Next (NO numerical counter) */}
                        <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
                                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                            >
                                {isPlaying ? <Pause className="w-4 h-4 text-blue-600" /> : <Play className="w-4 h-4 text-emerald-600" />}
                            </button>
                            
                            <div className="h-4 w-px bg-slate-200 mx-1" />

                            <button
                                onClick={prevSlide}
                                className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                                aria-label="Previous slide"
                                title="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                                aria-label="Next slide"
                                title="Next slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
