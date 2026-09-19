import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../../lib/analytics';

export default function FinalCTASection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-slate-900 text-white">
            {/* Subtle mesh background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="p-10 sm:p-16 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-xl"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">Enterprise Ingestion Ready</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                        Ready to Deploy Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            Autonomous Revenue OS?
                        </span>
                    </h2>
                    
                    <p className="text-base sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                        Join forward-thinking enterprise teams replacing fragmented tools with a unified, self-learning GTM intelligence infrastructure.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        <Link 
                            to="/book-consultation" 
                            onClick={() => trackEvent({ eventName: 'FINAL_CTA_BOOK_CLICK' })}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 group"
                        >
                            <span>Schedule Executive Consultation</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            to="/talk-to-expert" 
                            onClick={() => trackEvent({ eventName: 'FINAL_CTA_EXPERT_CLICK' })}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl border border-slate-700 transition-all hover:-translate-y-0.5"
                        >
                            <span>Talk to Principal Architect</span>
                        </Link>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400 border-t border-slate-800/80 pt-6">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            No Long-Term Lock-in
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            SOC2 Type II Certified
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            Mutual Enterprise NDA
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
