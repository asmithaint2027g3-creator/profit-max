import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    TrendingUp,
    Zap,
    BarChart3,
    Clock,
    DollarSign,
    CheckCircle2,
    ArrowRight,
    Target,
    Users,
    Rocket,
    X,
    Quote,
    Building2,
    Sparkles,
    Filter,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '../components/ui/card';
import OutcomeBlock from '../components/OutcomeBlock';
import { salesAccelerationContent, growthEnginesContent } from '../../data/outcomesContent';
import { Reveal } from '../components/ui/Reveal';
import OutcomesCarousel from '../components/OutcomesCarousel';
import LeadCaptureSection from '../components/LeadCaptureSection';
import { CASE_STUDIES, CaseStudyItem } from './case-studies/CaseStudiesHub';

interface FeaturedCaseDetail {
    id: string;
    name: string;
    industry: string;
    tagline: string;
    clientProfile: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: { value: string; label: string }[];
    keyQuote?: string;
    relatedSlug: string;
    relatedTitle: string;
}

const FEATURED_DETAILS: Record<string, FeaturedCaseDetail> = {
    talentvector: {
        id: 'talentvector',
        name: 'TalentVector.AI',
        industry: 'AI & Talent Intelligence',
        tagline: 'High-Velocity Enterprise AI Recruiter & Talent Automation Platform',
        clientProfile: 'Fast-scaling B2B HR tech platform scaling from $15M to $50M ARR across North America and Europe.',
        challenge: 'Struggled with scaling enterprise lead generation and account qualification in an increasingly saturated AI HR-tech market. SDRs spent 65% of their working hours manually sourcing contact data, yielding low conversion rates and an extended 9-month sales cycle.',
        solution: 'Implemented ProfitMachines’ autonomous AI-driven sales acceleration platform. Deployed custom AI SDR swarms to monitor real-time hiring intent signals, auto-enrich executive buyer data, and conduct hyper-personalized outreach sequences with zero manual data entry.',
        results: [
            '24× increase in high-quality qualified enterprise leads generated per quarter',
            '3× increase in demo-to-opportunity conversion rate',
            '50% reduction in average sales cycle duration (from 9 months down to 4.5 months)',
            '6× increase in enterprise company valuation at subsequent financing round',
            'Significant, compounding growth in ARR and gross margin profitability'
        ],
        metrics: [
            { value: '24×', label: 'Lead Velocity' },
            { value: '3×', label: 'Conversion Rate' },
            { value: '50%', label: 'Shorter Cycle' },
            { value: '6×', label: 'Valuation Multiple' }
        ],
        keyQuote: "ProfitMachines transformed our sales motion into a deterministic engine. Our SDRs now focus 100% of their time closing qualified enterprise deals instead of hunting in the dark.",
        relatedSlug: '/case-studies/enterprise-saas-pipeline-growth',
        relatedTitle: 'Enterprise SaaS Pipeline Growth Blueprint'
    },
    epsunsol: {
        id: 'epsunsol',
        name: 'EPSUNSOL',
        industry: 'Solar & Wind Energy Solutions',
        tagline: 'Commercial & Industrial Clean Energy Infrastructure Developer',
        clientProfile: 'Commercial renewable energy developer delivering multi-megawatt commercial solar and microgrid projects across industrial hubs.',
        challenge: 'High cost of enterprise sales and prolonged manual qualification for large rooftop solar and utility contracts. Sales engineers were tied up evaluating unviable properties, resulting in high CAC and lost deal velocity.',
        solution: 'Deployed ProfitMachines’ sales automation and AI demand generation engine with satellite property telemetry, grid interconnection capacity lookups, and automated financial payback calculators delivered to commercial facility executives.',
        results: [
            '65% reduction in commercial customer acquisition cost (CAC)',
            '80% of SQLs auto-generated and pre-qualified using ProfitMachines AI telemetry',
            'Faster commercial deal velocity with 40% shorter time-to-close',
            '4.2× expansion in qualified commercial project pipeline within 12 months',
            'Expanded regional coverage across 14 new industrial corridors without hiring additional sales reps'
        ],
        metrics: [
            { value: '65%', label: 'CAC Reduction' },
            { value: '80%', label: 'AI Generated SQLs' },
            { value: '4.2×', label: 'Pipeline Growth' },
            { value: '40%', label: 'Faster Close' }
        ],
        keyQuote: "ProfitMachines enabled us to identify and qualify the most lucrative commercial energy projects instantly. It cut our cost of sales in half and doubled our conversion rate.",
        relatedSlug: '/case-studies/global-manufacturing-expansion',
        relatedTitle: 'Global Industrial Expansion Blueprint'
    }
};

export default function Outcomes() {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeModal, setActiveModal] = useState<FeaturedCaseDetail | null>(null);

    const categories = [
        { label: 'All Cases', value: 'All' },
        { label: 'SaaS & Software', value: 'SaaS' },
        { label: 'Manufacturing & Industrial', value: 'Manufacturing' },
        { label: 'Healthcare & Life Sciences', value: 'Healthcare' },
        { label: 'Financial Services & PE', value: 'Financial Services' }
    ];

    const filteredStudies = selectedCategory === 'All'
        ? CASE_STUDIES
        : CASE_STUDIES.filter(cs =>
            cs.industry.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            cs.industries.some(ind => ind.toLowerCase().includes(selectedCategory.toLowerCase()))
        );


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');

        if (section) {
            setTimeout(() => {
                const elementId = section.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* 1. Autonomous Outcomes Hero Carousel */}
            <OutcomesCarousel />

            {/* Section 1: Revenue Impact Overview */}
            <div className="bg-slate-50 py-20 border-y border-slate-200 mb-20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proven Revenue Results Across Industries</h2>
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                                ProfitMachines delivers measurable, boardroom-ready outcomes for modern revenue teams. Our AI-powered revenue acceleration platform helps enterprises build predictable pipelines, increase deal velocity, and drive compounding ARR growth.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "24×", label: "Increase in high-quality leads", icon: <Target className="w-6 h-6 text-blue-600" /> },
                            { value: "3×", label: "Improvement in conversion rates", icon: <TrendingUp className="w-6 h-6 text-green-600" /> },
                            { value: "50%", label: "Reduction in sales cycle", icon: <Clock className="w-6 h-6 text-purple-600" /> },
                            { value: "6×", label: "Increase in startup valuation", icon: <DollarSign className="w-6 h-6 text-yellow-500" /> },
                            { value: "65%", label: "Reduction in cost of sales", icon: <BarChart3 className="w-6 h-6 text-red-500" /> },
                            { value: "80%", label: "Of SQLs auto-generated by AI", icon: <Zap className="w-6 h-6 text-amber-500" /> },
                            { value: "5×", label: "Increase in revenue velocity", icon: <Rocket className="w-6 h-6 text-indigo-600" /> },
                        ].map((stat, index) => (
                            <Reveal key={index} width="100%" delay={index * 0.1}>
                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:-translate-y-1 h-full">
                                    <div className="mb-3 p-3 bg-slate-50 rounded-full shadow-sm">{stat.icon}</div>
                                    <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI-Powered Growth & Revenue Engines Section */}
            <div className="bg-white pb-20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm uppercase tracking-wider border border-blue-100 mb-4 inline-block">
                        AI Growth Architecture
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        AI-Powered Growth & Revenue Engines
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                        A closed-loop growth system transforming fragmented GTM efforts into predictable, scalable revenue engines.
                    </p>
                </div>
                <div>
                    {growthEnginesContent.map((block, index) => (
                        <div key={index} id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                            <OutcomeBlock data={block} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* AI-Driven Sales Acceleration Section */}
            <div className="bg-white pb-20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-sm uppercase tracking-wider border border-purple-100 mb-4 inline-block">
                        Sales Acceleration
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        AI-Driven Sales Acceleration
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                        Transforming sales from effort-driven execution into outcome-driven growth across enterprise, digital, and high-velocity models.
                    </p>
                </div>
                <div>
                    {salesAccelerationContent.map((block, index) => (
                        <div key={index} id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-32">
                            <OutcomeBlock data={block} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2: Customer Success Stories & Enterprise Case Studies */}
            <div id="case-studies" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-28">
                <Reveal width="100%">
                    <div className="text-center mb-12">
                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-100 mb-3 inline-block">
                            Verified Commercial Proof
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                            Customer Success Stories & Case Studies
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                            Explore verified transformations delivered by ProfitMachines across enterprise SaaS, global manufacturing, healthcare systems, and private equity portfolios.
                        </p>
                    </div>
                </Reveal>

                {/* Featured Client Transformations */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Case Study 1: TalentVector.AI */}
                    <Reveal width="100%" delay={0.1}>
                        <Card className="flex flex-col h-full border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6 rounded-t-xl">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase">
                                                Featured Story
                                            </span>
                                            <span className="text-xs text-slate-500 font-medium">Series B High-Growth</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">TalentVector.AI</h3>
                                        <p className="text-slate-500 font-medium text-sm">AI & Talent Intelligence Platform</p>
                                    </div>
                                    <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 flex-grow space-y-5">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1.5 text-xs uppercase tracking-wider font-mono">Challenge</h4>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        Scaling lead generation and improving conversion efficiency in a competitive enterprise AI market. SDRs spent 65% of time on manual prospecting with a prolonged 9-month sales cycle.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1.5 text-xs uppercase tracking-wider font-mono">Solution</h4>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        Implemented ProfitMachines’s AI-driven sales acceleration platform, autonomous AI SDR swarms, intent signals, and CRM data automation.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2.5 text-xs uppercase tracking-wider font-mono">Results</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "24× increase in high-quality qualified leads",
                                            "3× increase in demo-to-close conversion rate",
                                            "50% faster enterprise sales cycle",
                                            "6× increase in company valuation",
                                            "Significant growth in ARR and gross margin profitability"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 text-sm font-semibold">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-3 pb-5 px-6 border-t border-slate-100 bg-slate-50 mt-auto rounded-b-xl flex flex-col sm:flex-row items-center gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setActiveModal(FEATURED_DETAILS.talentvector)}
                                    className="w-full sm:w-1/2 border-blue-200 text-blue-700 hover:bg-blue-50 font-bold flex items-center justify-center gap-1.5 text-xs uppercase font-mono tracking-wider"
                                >
                                    Quick Summary <ArrowRight className="w-3.5 h-3.5" />
                                </Button>
                                <Link
                                    to="/case-studies/enterprise-saas-pipeline-growth"
                                    className="w-full sm:w-1/2"
                                >
                                    <Button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-1.5 text-xs uppercase font-mono tracking-wider shadow-sm"
                                    >
                                        View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </Reveal>

                    {/* Case Study 2: EPSUNSOL */}
                    <Reveal width="100%" delay={0.2}>
                        <Card className="flex flex-col h-full border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6 rounded-t-xl">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase">
                                                Featured Story
                                            </span>
                                            <span className="text-xs text-slate-500 font-medium">Commercial Clean Energy</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">EPSUNSOL</h3>
                                        <p className="text-slate-500 font-medium text-sm">Solar & Wind Commercial Infrastructure</p>
                                    </div>
                                    <div className="bg-green-50 p-2.5 rounded-xl border border-green-100">
                                        <Zap className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 flex-grow space-y-5">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1.5 text-xs uppercase tracking-wider font-mono">Challenge</h4>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        High sales cost and inefficient lead qualification across large rooftop solar and utility installations. Extended payback evaluation cycles stalled pipeline velocity.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1.5 text-xs uppercase tracking-wider font-mono">Solution</h4>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        Implemented ProfitMachines’s sales automation, satellite telemetry qualification, and AI demand generation engine targeting commercial energy leaders.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2.5 text-xs uppercase tracking-wider font-mono">Results</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "65% reduction in cost of sales (CAC)",
                                            "80% of SQLs auto-generated using ProfitMachines",
                                            "Faster deal velocity and 40% reduction in time-to-close",
                                            "4.2× pipeline expansion in commercial project financing",
                                            "Seamless expansion across 14 regional industrial corridors"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 text-sm font-semibold">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-3 pb-5 px-6 border-t border-slate-100 bg-slate-50 mt-auto rounded-b-xl flex flex-col sm:flex-row items-center gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setActiveModal(FEATURED_DETAILS.epsunsol)}
                                    className="w-full sm:w-1/2 border-blue-200 text-blue-700 hover:bg-blue-50 font-bold flex items-center justify-center gap-1.5 text-xs uppercase font-mono tracking-wider"
                                >
                                    Quick Summary <ArrowRight className="w-3.5 h-3.5" />
                                </Button>
                                <Link
                                    to="/case-studies/global-manufacturing-expansion"
                                    className="w-full sm:w-1/2"
                                >
                                    <Button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-1.5 text-xs uppercase font-mono tracking-wider shadow-sm"
                                    >
                                        View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </Reveal>
                </div>

                {/* ── Enterprise Case Studies Library Showcase ── */}
                <div className="pt-10 border-t border-slate-200">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
                                Field Evidence Portfolio
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Enterprise Case Studies & Blueprints
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl font-medium">
                                Review detailed implementation architectures, operational metrics, and verified ROI from real deployments.
                            </p>
                        </div>
                        <Link
                            to="/case-studies"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline font-mono uppercase tracking-wider"
                        >
                            <span>Browse Case Studies Hub ({CASE_STUDIES.length})</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                        {categories.map((cat) => {
                            const count = cat.value === 'All'
                                ? CASE_STUDIES.length
                                : CASE_STUDIES.filter(cs =>
                                    cs.industry.toLowerCase().includes(cat.value.toLowerCase()) ||
                                    cs.industries.some(ind => ind.toLowerCase().includes(cat.value.toLowerCase()))
                                ).length;
                            const isActive = selectedCategory === cat.value;
                            return (
                                <button
                                    key={cat.value}
                                    onClick={() => setSelectedCategory(cat.value)}
                                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer border ${isActive
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                                    }`}
                                >
                                    {cat.label} ({count})
                                </button>
                            );
                        })}
                    </div>

                    {/* Case Studies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredStudies.map((study) => (
                            <div
                                key={study.id}
                                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Thumbnail */}
                                    <div className="relative h-44 overflow-hidden bg-slate-900">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                                            <span className="font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-700">
                                                {study.industry}
                                            </span>
                                            <span className="bg-blue-600/90 px-2 py-0.5 rounded font-bold">
                                                {study.timeline}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        {/* Big Metric Display */}
                                        <div className="mb-3 pb-3 border-b border-slate-100">
                                            <div className="text-2xl font-black font-mono text-blue-600 tracking-tight">
                                                {study.metricBig}
                                            </div>
                                            <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">
                                                {study.metricLabel}
                                            </div>
                                        </div>

                                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                                            {study.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 font-medium mb-3">
                                            {study.companyName}
                                        </p>
                                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                                            {study.summary}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {study.tags.slice(0, 2).map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Action Footer */}
                                <div className="p-4 pt-0">
                                    <Link
                                        to={study.slug}
                                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all border border-slate-200 hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shadow-2xs"
                                    >
                                        <span>View Case Study</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Hub CTA Banner */}
                    <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
                                Need Custom Architecture?
                            </span>
                            <h4 className="text-xl sm:text-2xl font-bold mb-2">
                                Explore All Case Studies or Request a Tailored Blueprint
                            </h4>
                            <p className="text-sm text-slate-300 max-w-xl">
                                Filter our complete library across 5 dimensions: Business Challenge, Offering, Industry, Company Stage, and Outcome.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                            <Link
                                to="/case-studies"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase font-mono tracking-wider transition-all shadow-md"
                            >
                                <span>Go to Case Studies Hub</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/case-studies/featured"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl text-xs uppercase font-mono tracking-wider transition-all backdrop-blur-sm"
                            >
                                <span>Featured Transformations</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Quick Case Study Summary Modal ── */}
            {activeModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in-0 duration-200"
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden relative my-8 animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase">
                                        {activeModal.industry}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{activeModal.name}</h3>
                                <p className="text-xs text-slate-500 font-medium mt-0.5">{activeModal.tagline}</p>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                            {/* Metrics Strip */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                                {activeModal.metrics.map((m, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-2xl font-black font-mono text-blue-600">{m.value}</div>
                                        <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">{m.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Client Profile */}
                            <div>
                                <h5 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-1">
                                    Client Profile
                                </h5>
                                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                    {activeModal.clientProfile}
                                </p>
                            </div>

                            {/* Challenge */}
                            <div>
                                <h5 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-1">
                                    The Core Challenge
                                </h5>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    {activeModal.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h5 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-1">
                                    ProfitMachines Solution Architecture
                                </h5>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    {activeModal.solution}
                                </p>
                            </div>

                            {/* Results */}
                            <div>
                                <h5 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                                    Verified Business Results
                                </h5>
                                <ul className="space-y-2">
                                    {activeModal.results.map((res, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-800">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <span>{res}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Key Quote */}
                            {activeModal.keyQuote && (
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 relative">
                                    <Quote className="w-6 h-6 text-slate-300 absolute top-2 right-2 pointer-events-none" />
                                    <p className="text-xs italic text-slate-700 leading-relaxed">
                                        &ldquo;{activeModal.keyQuote}&rdquo;
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <Link
                                to={activeModal.relatedSlug}
                                onClick={() => setActiveModal(null)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase font-mono tracking-wider shadow-sm transition-all"
                            >
                                <span>Read Full Case Study Blueprint</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/book-consultation"
                                onClick={() => setActiveModal(null)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-bold px-5 py-2.5 rounded-xl text-xs uppercase font-mono tracking-wider transition-all"
                            >
                                <span>Book Strategy Session</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Section 3: Platform-Level Outcomes */}
            <div className="bg-slate-900 py-20 mb-20 text-white border-y border-slate-800">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Platform-Wide Business Impact</h2>
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { value: "2×–5×", label: "Pipeline Growth" },
                            { value: "40%–120%", label: "Revenue Growth" },
                            { value: "25%–50%", label: "Lower CAC" },
                            { value: "30%–50%", label: "Faster Sales Cycles" },
                            { value: "120%+", label: "Net Revenue Retention" },
                            { value: "90%+", label: "Forecast Accuracy" },
                        ].map((stat, index) => (
                            <Reveal key={index} width="100%" delay={index * 0.1}>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center group hover:shadow-lg hover:shadow-blue-500/10 h-full">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                                    <div className="text-slate-300 font-semibold">{stat.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 4: Why Enterprises Choose ProfitMachines */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">Built for Predictable, Scalable Growth</h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-left p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
                        {[
                            "Unified AI Revenue Platform",
                            "Enterprise-grade security and scalability",
                            "Plug-and-play with existing CRM and marketing stacks",
                            "Rapid deployment",
                            "Proven enterprise revenue impact"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="text-lg text-slate-700 font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Quick Diagnostic Lead Capture Form */}
            <LeadCaptureSection />

            {/* Section 5: Call To Action */}
            <div className="text-center max-w-4xl mx-auto px-4 pb-20">
                <Reveal width="100%">
                    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your Predictable Revenue Engine with ProfitMachines</h2>
                            <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto font-medium">
                                Whether you're scaling from $1M to $100M ARR or optimizing a complex enterprise revenue motion, ProfitMachines gives you the intelligence, automation, and execution power to win.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link to="/book-consultation" className="w-full sm:w-auto">
                                    <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 h-auto text-lg w-full sm:w-auto font-bold shadow-lg">
                                        Book for Consultation
                                    </Button>
                                </Link>
                                <Link to="/talk-to-expert" className="w-full sm:w-auto">
                                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 h-auto text-lg w-full sm:w-auto backdrop-blur-sm">
                                        Talk to a Revenue Expert
                                    </Button>
                                </Link>
                            </div>
                            <div className="mt-8">
                                <a href="#" className="inline-flex items-center text-blue-100 font-semibold hover:text-white transition-colors">
                                    Start Your AI Revenue Journey <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
