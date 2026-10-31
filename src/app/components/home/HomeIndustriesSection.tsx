import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Briefcase, 
    ShoppingBag, 
    Building2, 
    BarChart3, 
    Rocket, 
    Layers, 
    ArrowRight, 
    ArrowUpRight, 
    Sparkles 
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeIndustriesSection() {
    const industries = [
        {
            title: "B2B",
            path: "/industries/b2b",
            focus: "Ideal customer profiles, account targeting, qualified pipeline, opportunity progression, and customer relationships.",
            icon: Briefcase,
            badge: "Account-Based Growth",
            image: "/images/hero-profit-pool.png",
            tag: "B2B Pipeline Intelligence"
        },
        {
            title: "B2C",
            path: "/industries/b2c",
            focus: "Audience segmentation, customer journeys, campaign coordination, conversion, repeat purchases, and retention.",
            icon: ShoppingBag,
            badge: "Lifecycle & Retention",
            image: "/images/industry-retail.png",
            tag: "Consumer Growth Engine"
        },
        {
            title: "Enterprise",
            path: "/industries/enterprise",
            focus: "Complex buying groups, account intelligence, coordinated sales processes, and expansion opportunities.",
            icon: Building2,
            badge: "Complex Buying Groups",
            image: "/images/home-why-choose.png",
            tag: "Enterprise Multi-Entity"
        },
        {
            title: "Mid-Market",
            path: "/industries/midmarket",
            focus: "Repeatable demand generation, sales productivity, workflow automation, and efficient growth with limited resources.",
            icon: BarChart3,
            badge: "Productivity & Velocity",
            image: "/images/demand-pulse-dashboard.png",
            tag: "Lean Operations"
        },
        {
            title: "Startups & Founders",
            path: "/industries/startups",
            focus: "Customer and market validation, ideal customer profiles, early demand generation, founder-led sales, and funnel measurement.",
            icon: Rocket,
            badge: "Validation & Traction",
            image: "/images/hero-agentic-ai.png",
            tag: "Early-Stage Traction"
        },
        {
            title: "Specialized Business Models",
            path: "/industries/sectors",
            focus: "Focus on business models that fit ProfitMachines' sales, demand generation, customer acquisition, and revenue-growth positioning.",
            icon: Layers,
            badge: "Recurring & Vertical Models",
            image: "/images/industry-saas.png",
            tag: "SaaS & Subscriptions"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-100 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Business Model Specialization</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Different Business Models. Different Paths to Growth.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Every business has different customers, sales cycles, growth constraints, and operational requirements. ProfitMachines adapts its revenue approach to your business model and growth priorities.
                    </p>
                </div>

                {/* 6 Industry Cards with Real Image Headers (No human faces) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {industries.map((ind, idx) => {
                        const Icon = ind.icon;
                        return (
                            <Link
                                key={idx}
                                to={ind.path}
                                onClick={() => trackEvent({ eventName: `INDUSTRY_CARD_CLICK_${ind.title.toUpperCase()}` })}
                                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                            >
                                <div>
                                    {/* High-Quality Visual Image Header */}
                                    <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                                        <img 
                                            src={ind.image} 
                                            alt={ind.title} 
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                                        
                                        {/* Tag Badge on Image */}
                                        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/80 text-[10px] font-mono font-bold text-blue-400">
                                            {ind.tag}
                                        </div>

                                        {/* Floating Icon Box */}
                                        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-6">
                                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 mb-1 block font-mono">
                                            // {ind.badge}
                                        </span>

                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug flex items-center justify-between">
                                            <span>{ind.title}</span>
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                                        </h3>

                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                            {ind.focus}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Link */}
                                <div className="px-6 pb-6 pt-2">
                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                                        <span>View Pathway Blueprint</span>
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
                        to="/industries"
                        onClick={() => trackEvent({ eventName: 'INDUSTRIES_EXPLORE_ALL_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore All Industries</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
