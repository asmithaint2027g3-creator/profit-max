import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
    ChevronLeft, ChevronRight, Pause, Play, ArrowRight, 
    TrendingUp, Cpu, Radar, Bot, Sparkles, ShieldCheck, 
    Layers, Activity, CheckCircle2, Zap, BarChart3, Database,
    Globe, Network, LineChart, Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { trackEvent } from '../../../lib/analytics';

export interface SliderItem {
    id: string;
    stepNumber: string;
    tag: string;
    pillTitle: string;
    icon: React.ElementType;
    title: string;
    highlightTitle: string;
    description: string;
    stats: {
        value: string;
        label: string;
        sublabel?: string;
    }[];
    highlights: string[];
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
    {
        id: 'ai-transformation',
        stepNumber: '01',
        tag: 'AI + Business Transformation',
        pillTitle: 'AI + Business Transformation',
        icon: Cpu,
        title: 'Unified AI Strategy &',
        highlightTitle: 'AI + Business Transformation',
        description: 'Architecting cognitive enterprise operations, predictive strategy modeling, and intelligent decision systems that systematically accelerate enterprise ARR velocity.',
        stats: [
            { value: '5.4×', label: 'ARR Velocity', sublabel: 'Continuous Acceleration' },
            { value: '98.4%', label: 'ICP Accuracy', sublabel: 'Predictive Propensity' },
            { value: '99.98%', label: 'SLA Reliability', sublabel: 'Enterprise Uptime' }
        ],
        highlights: [
            'Real-time autonomous decision engine with continuous telemetry',
            'Strategic alignment between boardroom goals and autonomous AI workflows',
            'Algorithmic revenue forecasting with verifiable precision'
        ],
        image: '/images/hero-ai-transformation.png',
        fallbackGradient: 'from-blue-600/20 via-indigo-600/15 to-purple-600/20',
        badgeText: 'AI + Business Transformation Active',
        primaryCta: {
            text: 'Explore Transformation Engine',
            link: '/offerings'
        },
        secondaryCta: {
            text: 'Book Architecture Call',
            link: '/book-consultation'
        }
    },
    {
        id: 'profit-pool-discovery',
        stepNumber: '02',
        tag: 'Profit Pool Discovery',
        pillTitle: 'Profit Pool Discovery',
        icon: Radar,
        title: 'Deep Market Radar &',
        highlightTitle: 'Profit Pool Discovery',
        description: 'Reveal hidden margin pools, untracked TAM, and dark-funnel buying intent weeks before competitors with real-time algorithmic telemetry and opportunity topology.',
        stats: [
            { value: '1,000×', label: 'Market Scanning', sublabel: 'High-Velocity Discovery' },
            { value: '12,480+', label: 'Intent Signals / Hr', sublabel: 'Real-Time Telemetry' },
            { value: '100%', label: 'Dark Funnel', sublabel: 'Comprehensive Visibility' }
        ],
        highlights: [
            'AI-driven buyer propensity and account opportunity mapping',
            'Competitor displacement signals and micro-segment revenue discovery',
            'Automated profit-pool scoring across global vertical markets'
        ],
        image: '/images/hero-profit-pool.png',
        fallbackGradient: 'from-cyan-600/20 via-blue-600/15 to-indigo-600/20',
        badgeText: 'Profit Pool Discovery Telemetry: Active',
        primaryCta: {
            text: 'Launch Demand Radar',
            link: '/demand-pulse'
        },
        secondaryCta: {
            text: 'Discover Hidden TAM',
            link: '/solutions'
        }
    },
    {
        id: 'agentic-automation',
        stepNumber: '03',
        tag: 'Agentic AI & Automation',
        pillTitle: 'Agentic AI & Automation',
        icon: Bot,
        title: 'Intelligent Multi-Agent Mesh &',
        highlightTitle: 'Agentic AI & Automation',
        description: 'Deploy persistent multi-agent swarms that autonomously orchestrate enterprise workflows, qualify high-value pipeline, resolve operational friction, and execute complex business processes 24/7.',
        stats: [
            { value: '3.8×', label: 'Meeting Velocity', sublabel: 'Auto-Booked Pipeline' },
            { value: '80%', label: 'Auto-SQL Sourced', sublabel: 'Zero Manual SDR Drag' },
            { value: '-65%', label: 'Customer CAC', sublabel: 'Radical Efficiency' }
        ],
        highlights: [
            'Hyper-personalized multi-channel email, LinkedIn & voice outreach',
            'Autonomous objection resolution backed by unified knowledge graphs',
            'Instant two-way CRM synchronization & automated calendar routing'
        ],
        image: '/images/hero-agentic-ai.png',
        fallbackGradient: 'from-indigo-600/20 via-purple-600/15 to-pink-600/20',
        badgeText: 'Agentic AI & Automation Mesh: 4,812 Active Swarms',
        primaryCta: {
            text: 'Deploy AI Agent Mesh',
            link: '/solutions'
        },
        secondaryCta: {
            text: 'Schedule Agent Demo',
            link: '/book-consultation'
        }
    },
    {
        id: 'revenue-acceleration',
        stepNumber: '04',
        tag: 'Sales & Revenue Acceleration',
        pillTitle: 'Sales & Revenue Acceleration',
        icon: LineChart,
        title: 'Real-Time Telemetry &',
        highlightTitle: 'Sales & Revenue Acceleration',
        description: 'Eliminate pipeline friction with intelligent funnel diagnostics, predictive deal scoring, dynamic objection handling, and automated revenue velocity triggers.',
        stats: [
            { value: '+185%', label: 'Pipeline Yield', sublabel: 'Full-Funnel Conversion' },
            { value: '$1.4M+', label: 'Recovered ARR', sublabel: 'Leakage Prevention' },
            { value: '45ms', label: 'Decision Latency', sublabel: 'Real-Time Scoring' }
        ],
        highlights: [
            'Algorithmic deal slippage detection and instant recovery interventions',
            'Full-funnel multi-touch revenue attribution and conversion radar',
            'Self-healing CRM data fabric with automated contact enrichment'
        ],
        image: '/images/hero-revenue-acceleration.png',
        fallbackGradient: 'from-emerald-600/20 via-teal-600/15 to-blue-600/20',
        badgeText: 'Sales & Revenue Acceleration Engine: Active',
        primaryCta: {
            text: 'Accelerate Revenue',
            link: '/offerings'
        },
        secondaryCta: {
            text: 'Run Revenue Leak Audit',
            link: '/hidden-revenue-capture'
        }
    },
    {
        id: 'data-intelligence',
        stepNumber: '05',
        tag: 'Digital & Data Intelligence',
        pillTitle: 'Digital & Data Intelligence',
        icon: Database,
        title: 'Enterprise Data Fabric &',
        highlightTitle: 'Digital & Data Intelligence',
        description: 'Unify disparate cloud databases, CRM streams, and operational systems into a real-time predictive intelligence engine powered by connected neural knowledge graphs.',
        stats: [
            { value: '4,500+', label: 'Active Pipelines', sublabel: 'Connected Systems' },
            { value: '98%', label: 'Forecast Accuracy', sublabel: 'Neural Prediction' },
            { value: '<12ms', label: 'Telemetry Latency', sublabel: 'Sub-Second Response' }
        ],
        highlights: [
            'Bidirectional connectors for Salesforce, HubSpot, Snowflake & ERPs',
            'Real-time anomaly detection and predictive customer churn signals',
            'Unified data lakehouse with zero-trust sandboxing and role access'
        ],
        image: '/images/hero-data-intelligence.png',
        fallbackGradient: 'from-blue-600/20 via-cyan-600/15 to-indigo-600/20',
        badgeText: 'Digital & Data Intelligence Mesh: 4,500+ Streams',
        primaryCta: {
            text: 'Explore Data Intelligence',
            link: '/solutions'
        },
        secondaryCta: {
            text: 'View Architecture Matrix',
            link: '/offerings'
        }
    },
    {
        id: 'end-to-end-transformation',
        stepNumber: '06',
        tag: 'End-to-End Transformation',
        pillTitle: 'End-to-End Transformation',
        icon: ShieldCheck,
        title: 'Strategy, Tech & Operations //',
        highlightTitle: 'End-to-End Transformation',
        description: 'Seamlessly integrating strategic business consulting, enterprise AI architecture, autonomous operations, and verified financial outcomes into a unified transformation ecosystem.',
        stats: [
            { value: '300%', label: 'Avg Pipeline Lift', sublabel: 'Verified Outcome' },
            { value: 'SOC 2', label: 'Type II Certified', sublabel: 'Bank-Grade Security' },
            { value: '500+', label: 'Global Clients', sublabel: 'Enterprises & Scale-Ups' }
        ],
        highlights: [
            'End-to-end enterprise delivery model tailored to complex workflows',
            'Full governance compliance with SOC2 Type II, ISO27001 and GDPR',
            'Continuous learning models that compound operational advantages over time'
        ],
        image: '/images/hero-end-to-end-transformation.png',
        fallbackGradient: 'from-slate-700/20 via-blue-800/15 to-indigo-900/20',
        badgeText: 'End-to-End Transformation Ecosystem: Verified',
        primaryCta: {
            text: 'Start Enterprise Transformation',
            link: '/book-consultation'
        },
        secondaryCta: {
            text: 'Review Proven Outcomes',
            link: '/outcomes'
        }
    }
];

export default function HomeFeatureSlider() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const SLIDE_DURATION = 6500; // 6.5 seconds per slide
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
                
                {/* Main 6-Slide Card Container */}
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
                                        <span className="font-mono text-blue-600 font-extrabold">{activeSlide.stepNumber}</span>
                                        <span className="text-slate-300 font-normal">//</span>
                                        <span>{activeSlide.tag}</span>
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.14] tracking-tight mb-4 font-heading">
                                    {activeSlide.title}{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                        {activeSlide.highlightTitle}
                                    </span>
                                </h2>

                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                                    {activeSlide.description}
                                </p>

                                {/* Key Highlight Bullet Points */}
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

                                {/* Key Metrics Strip */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 shadow-xs">
                                    {activeSlide.stats.map((stat, sIdx) => (
                                        <div key={sIdx} className="text-left">
                                            <div className="text-lg sm:text-2xl font-extrabold text-blue-600 font-mono">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs font-bold text-slate-800 leading-tight mt-0.5">
                                                {stat.label}
                                            </div>
                                            {stat.sublabel && (
                                                <div className="text-[11px] text-slate-500 font-normal hidden sm:block">
                                                    {stat.sublabel}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                                    <Link 
                                        to={activeSlide.primaryCta.link}
                                        onClick={() => trackEvent({ eventName: 'SLIDER_PRIMARY_CTA_CLICK', label: activeSlide.primaryCta.text })}
                                    >
                                        <Button className="w-full sm:w-auto bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-6 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group">
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
                                        <Button variant="outline" className="w-full sm:w-auto border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-6 rounded-xl text-sm shadow-xs transition-all">
                                            <span className="flex items-center justify-center">
                                                {activeSlide.secondaryCta.text}
                                            </span>
                                        </Button>
                                    </Link>
                                </div>

                            </div>

                            {/* Right Visual Column with Cohesive 3D Enterprise Imagery */}
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
                                            Architecture {activeSlide.stepNumber}
                                        </div>
                                    </div>

                                    {/* Main Image Container */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                                        
                                        {/* Fallback ambient glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.fallbackGradient} opacity-50`} />

                                        {/* 3D Visual */}
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
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                                                <span className="text-xs font-mono font-semibold text-slate-200 truncate">
                                                    {activeSlide.badgeText}
                                                </span>
                                            </div>
                                            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-blue-400 font-bold flex-shrink-0">
                                                <span>Live Telemetry</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Controls Strip: Prev/Next, Slider Progress, and Trust Pills */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
                    
                    {/* Left: Enterprise Trust Pills */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-600">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>SOC2 Type II</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <span>Global Multi-Region</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                            <span>Fortune 500 Scale</span>
                        </div>
                    </div>

                    {/* Right: Slide Controls, Dots, and Progress Bar */}
                    <div className="flex items-center gap-3">
                        
                        {/* Dot Indicators with Active Progress Fill */}
                        <div className="flex items-center gap-1.5 mr-2">
                            {homeSliders.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={() => goToSlide(dotIdx)}
                                    className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 ${
                                        dotIdx === currentIndex 
                                            ? 'w-8 bg-blue-100' 
                                            : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Go to slide ${dotIdx + 1}`}
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

                        {/* Navigation Control Box */}
                        <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
                                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                            >
                                {isPlaying ? <Pause className="w-4 h-4 text-blue-600" /> : <Play className="w-4 h-4 text-emerald-600" />}
                            </button>
                            
                            <div className="h-4 w-px bg-slate-200 mx-1" />

                            <button
                                onClick={prevSlide}
                                className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="px-2.5 text-xs font-mono font-bold text-slate-700">
                                <span className="text-blue-600">{activeSlide.stepNumber}</span>
                                <span className="text-slate-400"> / </span>
                                <span>0{homeSliders.length}</span>
                            </div>

                            <button
                                onClick={nextSlide}
                                className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
                                aria-label="Next slide"
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

