import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    Calendar, 
    ShieldCheck, 
    Lock, 
    CheckCircle2, 
    Sparkles,
    Layers,
    Clock
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeConversionSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-slate-900 text-white">
            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="p-8 sm:p-14 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-mono">
                            Executive Architecture Consultation
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-[1.15]">
                        Build a Revenue System{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
                            Designed for Your Business.
                        </span>
                    </h2>
                    
                    {/* Description */}
                    <p className="text-base sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                        Start with your business goals, identify the opportunities that matter, and explore a practical path toward more connected, measurable growth.
                    </p>
                    
                    {/* Dual CTAs */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        <Link 
                            to="/book-consultation" 
                            onClick={() => trackEvent({ eventName: 'FINAL_CONVERSION_BOOK_CLICK' })}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 group text-center"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book a Consultation</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <Link 
                            to="/offerings" 
                            onClick={() => trackEvent({ eventName: 'FINAL_CONVERSION_OFFERINGS_CLICK' })}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl border border-slate-700 transition-all hover:-translate-y-0.5 text-center"
                        >
                            <Layers className="w-4 h-4 text-blue-400" />
                            <span>Explore Our Offerings</span>
                        </Link>
                    </div>
                    
                    {/* Security & Reassurance Strip */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400 border-t border-slate-800/80 pt-6">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>No Long-Term Lock-in</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>SOC2 Type II Standard</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>Mutual Enterprise NDA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-400" />
                            <span>45-Min Principal Architect Review</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

