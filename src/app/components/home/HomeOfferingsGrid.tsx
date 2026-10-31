import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Radar, 
    Target, 
    Bot, 
    LineChart, 
    Users, 
    Rocket, 
    BarChart3, 
    ShieldCheck, 
    ArrowRight,
    ArrowUpRight,
    Layers,
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeOfferingsGrid() {
    const offerings = [
        {
            id: 'profit-pool-discovery',
            num: '01',
            title: 'Profit Pool Discovery',
            path: '/offerings/profit-pool-discovery',
            description: 'Identify attractive market opportunities, customer segments, demand signals, and areas where the business can focus its growth efforts.',
            badge: 'Market Discovery',
            icon: Radar,
            image: '/images/hero-profit-pool.png',
            tag: 'Whitespace TAM'
        },
        {
            id: 'demand-engineering',
            num: '02',
            title: 'Demand Engineering',
            path: '/offerings/demand-engineering',
            description: 'Improve customer targeting, prospecting, campaign coordination, qualification, and lead progression to support a more consistent flow of qualified demand.',
            badge: 'Pipeline Generation',
            icon: Target,
            image: '/images/demand-pulse-dashboard.png',
            tag: 'Inbound Flow'
        },
        {
            id: 'sales-acceleration',
            num: '03',
            title: 'Sales Acceleration',
            path: '/offerings/sales-acceleration',
            description: 'Help sales teams prioritize opportunities, prepare for conversations, improve follow-up, and make sales execution more informed and efficient.',
            badge: 'Deal Velocity',
            icon: Bot,
            image: '/images/hero-revenue-acceleration.png',
            tag: 'Sales Intelligence'
        },
        {
            id: 'revenue-operations',
            num: '04',
            title: 'Revenue Operations',
            path: '/offerings/revenue-operations',
            description: 'Connect revenue data, workflows, reporting, forecasting, and operational processes to improve coordination and visibility.',
            badge: 'Unified Systems',
            icon: LineChart,
            image: '/images/revenue-acceleration-engine.png',
            tag: 'RevOps Orchestration'
        },
        {
            id: 'customer-success',
            num: '05',
            title: 'Customer Success Engine',
            path: '/offerings/customer-success',
            description: 'Support onboarding, adoption, customer health monitoring, retention, renewals, and expansion opportunities.',
            badge: 'Retention & Growth',
            icon: Users,
            image: '/images/industry-saas.png',
            tag: 'Account Expansion'
        },
        {
            id: 'gtm-transformation',
            num: '06',
            title: 'GTM Transformation',
            path: '/offerings/gtm-transformation',
            description: 'Align market positioning, customer targeting, routes to market, pricing, launch execution, and growth priorities.',
            badge: 'GTM Alignment',
            icon: Rocket,
            image: '/images/hero-end-to-end-transformation.png',
            tag: 'Commercial Launch'
        },
        {
            id: 'growth-intelligence',
            num: '07',
            title: 'Growth Intelligence',
            path: '/offerings/growth-intelligence',
            description: 'Connect business diagnostics, growth experiments, strategic priorities, and decision support to help teams identify where to improve.',
            badge: 'Decision Support',
            icon: BarChart3,
            image: '/images/hero-data-intelligence.png',
            tag: 'Strategy Planning'
        },
        {
            id: 'ai-trust-governance',
            num: '08',
            title: 'AI Trust & Governance',
            path: '/offerings/ai-trust-governance',
            description: 'Support appropriate AI adoption through governance, risk awareness, oversight, evaluation, and responsible operational controls.',
            badge: 'Responsible AI',
            icon: ShieldCheck,
            image: '/images/home-why-choose.png',
            tag: 'System Oversight'
        }
    ];

    return (
        <section id="all-offerings" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-600 font-bold text-xs uppercase tracking-wider shadow-xs border border-slate-200">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>The ProfitMachines Platform Suite</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        The Capabilities Behind Sustainable Revenue Growth.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Explore the capabilities that help businesses move from growth opportunities to coordinated execution, stronger customer relationships, and better revenue visibility.
                    </p>
                </div>

                {/* 8 Offerings Grid with Real Visual Image Banners */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {offerings.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={() => trackEvent({ eventName: `OFFERING_CARD_CLICK_${item.id.toUpperCase()}` })}
                                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                            >
                                <div>
                                    {/* High-Quality Visual Image Header (No human faces) */}
                                    <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                                        
                                        {/* Tag Badge */}
                                        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/80 text-[10px] font-mono font-bold text-blue-400">
                                            {item.tag}
                                        </div>

                                        {/* Slide Number */}
                                        <div className="absolute top-3 right-3 text-[10px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                                            {item.num}
                                        </div>

                                        {/* Bottom Icon Box */}
                                        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-6">
                                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 mb-1 block font-mono">
                                            // {item.badge}
                                        </span>

                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug flex items-center justify-between">
                                            <span>{item.title}</span>
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                                        </h3>

                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Footer Link */}
                                <div className="px-6 pb-6 pt-2">
                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                                        <span>Explore Offering</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/offerings"
                        onClick={() => trackEvent({ eventName: 'OFFERINGS_EXPLORE_ALL_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore All Offerings</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
