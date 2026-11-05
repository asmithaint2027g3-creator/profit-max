import React from 'react';
import { 
    Linkedin, Twitter, Facebook, Mail, Phone,
    Cloud, Share2, LayoutGrid, Box, Server, ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterLinkGroup {
    title: string;
    path: string;
    links: { name: string; path: string }[];
}

export default function Footer() {
    const linkGroups: FooterLinkGroup[] = [
        {
            title: 'Offerings',
            path: '/offerings',
            links: [
                { name: 'Offerings Overview', path: '/offerings' },
                { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' },
                { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
                { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
                { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
                { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
                { name: 'Customer Success', path: '/offerings/customer-success' },
                { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
                { name: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' },
            ]
        },
        {
            title: 'Industries',
            path: '/industries',
            links: [
                { name: 'Industries Overview', path: '/industries' },
                { name: 'Enterprise Scale', path: '/industries/enterprise' },
                { name: 'B2B Revenue', path: '/industries/b2b' },
                { name: 'SaaS & Subscription', path: '/industries/saas' },
                { name: 'Mid-Market Acceleration', path: '/industries/midmarket' },
                { name: 'Startups & Scaleups', path: '/industries/startups' },
                { name: 'Consumer & B2C', path: '/industries/b2c' },
            ]
        },
        {
            title: 'AI Sales',
            path: '/ai-native-sales',
            links: [
                { name: 'AI Sales Hub', path: '/ai-native-sales' },
                { name: 'Revenue Intelligence', path: '/ai-native-sales/revenue-intelligence' },
                { name: 'Autonomous Pipeline', path: '/ai-native-sales/autonomous-pipeline-generation' },
                { name: 'Sales Engagement', path: '/ai-native-sales/autonomous-sales-engagement' },
                { name: 'Intelligent Sales Agents', path: '/ai-native-sales/intelligent-sales-agents' },
                { name: 'Revenue Acceleration', path: '/ai-native-sales/revenue-acceleration' },
                { name: 'Pricing Intelligence', path: '/ai-native-sales/pricing-intelligence' },
                { name: 'Ecosystem Revenue', path: '/ai-native-sales/ecosystem-revenue-growth' },
                { name: 'Customer Growth', path: '/ai-native-sales/customer-growth-intelligence' },
                { name: 'Autonomous GTM Command', path: '/ai-native-sales/autonomous-gtm-command-center' },
            ]
        },
        {
            title: 'Growth Science',
            path: '/growth-science',
            links: [
                { name: 'Growth Science Hub', path: '/growth-science' },
                { name: 'Revenue Physics', path: '/growth-science/revenue-physics' },
                { name: 'Revenue Intelligence', path: '/growth-science/revenue-intelligence' },
                { name: 'Revenue Potential Discovery', path: '/growth-science/revenue-potential-discovery' },
                { name: 'Revenue Leakage Recovery', path: '/growth-science/revenue-leakage-recovery' },
                { name: 'Offer Engineering', path: '/growth-science/revenue-bundling-offer-engineering' },
                { name: 'Value Capture Engineering', path: '/growth-science/value-capture-engineering' },
                { name: 'Product Innovation', path: '/growth-science/product-innovation-revenue-expansion' },
                { name: 'Revenue Acceleration', path: '/growth-science/revenue-acceleration' },
                { name: 'Executive Telemetry', path: '/growth-science/executive-telemetry' },
            ]
        },
        {
            title: 'Global Scaling',
            path: '/global-acceleration',
            links: [
                { name: 'Global Scaling Hub', path: '/global-acceleration' },
                { name: 'Market Access', path: '/global-acceleration/market-access' },
                { name: 'Demand Networks', path: '/global-acceleration/demand-networks' },
                { name: 'Export Growth Engine', path: '/global-acceleration/export-growth-engine' },
                { name: 'Partner Ecosystems', path: '/global-acceleration/partner-ecosystems' },
                { name: 'Supply Networks', path: '/global-acceleration/supply-networks' },
                { name: 'Global Revenue Engines', path: '/global-acceleration/revenue-engines' },
                { name: 'Capital & Finance', path: '/global-acceleration/capital-finance' },
                { name: 'AI-Powered Expansion', path: '/global-acceleration/ai-powered-expansion' },
            ]
        },
        {
            title: 'Case Studies',
            path: '/case-studies',
            links: [
                { name: 'Case Studies Archive', path: '/case-studies' },
                { name: 'Client Outcomes', path: '/outcomes' },
                { name: 'AI-Native Transformations', path: '/case-studies/ai-native' },
                { name: 'Enterprise SaaS Case', path: '/case-studies/enterprise-saas-pipeline-growth' },
                { name: 'Manufacturing Margin', path: '/case-studies/manufacturing-margin-improvement' },
                { name: 'Healthcare Forecast Case', path: '/case-studies/healthcare-forecast-accuracy' },
                { name: 'Global Expansion Case', path: '/case-studies/global-manufacturing-expansion' },
                { name: 'By Business Challenge', path: '/case-studies#challenge' },
                { name: 'By Industry Solution', path: '/case-studies#industry' },
            ]
        },
        {
            title: 'About Us',
            path: '/about',
            links: [
                { name: 'About ProfitMachines', path: '/about' },
                { name: 'Leadership & Team', path: '/leadership' },
                { name: 'Careers & Fellowships', path: '/careers' },
                { name: 'Global Presence', path: '/global-presence' },
                { name: 'Blog & Insights', path: '/blog' },
                { name: 'Contact & Inquiries', path: '/contact' },
                { name: 'Book Consultation', path: '/book-consultation' },
            ]
        }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Security & Compliance', path: '/security' },
        { name: 'Cookies Policy', path: '/cookies' },
        { name: 'Copyright & IP', path: '/copyright' },
        { name: 'Sitemap', path: '/sitemap' },
    ];

    return (
        <footer className="bg-slate-950 pt-16 pb-12 border-t border-slate-800/80 font-sans text-slate-400 relative overflow-hidden">
            {/* Background Accent Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-900/15 rounded-full blur-[140px] opacity-60" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-indigo-900/15 rounded-full blur-[140px] opacity-60" />
            </div>

            <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Executive Call to Action Banner */}
                <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-black/40">
                    <div className="max-w-2xl">
                        <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 inline-block mb-3">
                            Executive Consultation
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 font-heading tracking-tight">
                            Build Your Next Enterprise AI Revenue Engine
                        </h2>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                            Diagnose revenue friction, audit untapped profit pools, and engineer your tailored growth roadmap with our executive architecture team.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                        <Link 
                            to="/book-consultation" 
                            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                        >
                            Get Free Revenue Audit →
                        </Link>
                        <a 
                            href="mailto:consulting@profitmachines.ai" 
                            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-all text-center"
                        >
                            Email Us Directly
                        </a>
                    </div>
                </div>

                {/* Top Section: Brand & Contact Column + 7 Navigation Columns matching Header exactly */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 mb-16">

                    {/* Brand & Direct Contact (Left Side - matching reference design) */}
                    <div className="xl:col-span-3 space-y-6 xl:pr-4">
                        <div>
                            <Link to="/" className="inline-block mb-2">
                                <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center font-heading">
                                    <span>Profit</span>
                                    <span className="text-blue-500">Machines</span>
                                </div>
                            </Link>
                            <p className="text-slate-400 leading-relaxed mb-8 font-normal text-sm max-w-sm">
                                Building Enterprise AI Solutions for the Future. AI. Cloud. Automation. Software. Delivered End-to-End.
                            </p>

                            {/* Circular Contact Badges */}
                            <div className="space-y-4 mb-8">
                                <a 
                                    href="mailto:consulting@profitmachines.ai" 
                                    className="group flex items-center gap-4 text-slate-400 hover:text-white transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 transition-all shrink-0">
                                        <Mail className="w-4 h-4 text-slate-300 group-hover:text-white" />
                                    </div>
                                    <span className="font-normal text-sm tracking-wide">consulting@profitmachines.ai</span>
                                </a>

                                <a 
                                    href="tel:+919513288612" 
                                    className="group flex items-center gap-4 text-slate-400 hover:text-white transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 transition-all shrink-0">
                                        <Phone className="w-4 h-4 text-slate-300 group-hover:text-white" />
                                    </div>
                                    <span className="font-normal text-sm tracking-wide">+91 9513288612</span>
                                </a>
                            </div>

                            {/* Social Buttons */}
                            <div className="flex gap-4">
                                {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                    <a 
                                        key={i} 
                                        href="#" 
                                        aria-label={['LinkedIn', 'Twitter', 'Facebook'][i]} 
                                        title={['LinkedIn', 'Twitter', 'Facebook'][i]} 
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:-translate-y-1"
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="sr-only">{['LinkedIn', 'Twitter', 'Facebook'][i]}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns: Exactly 7 Main Navigation Menus */}
                    <div className="xl:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-6 xl:gap-4 2xl:gap-6">
                        {linkGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="space-y-3.5">
                                <Link 
                                    to={group.path} 
                                    className="group inline-flex items-center gap-1 text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 hover:text-blue-400 transition-colors w-full"
                                >
                                    <span>{group.title}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 shrink-0" />
                                </Link>
                                <ul className="space-y-2.5 text-xs">
                                    {group.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link 
                                                to={link.path} 
                                                className="text-slate-400 hover:text-blue-400 transition-colors block leading-relaxed font-normal hover:translate-x-0.5 transform duration-150"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trusted Enterprise Integration Ecosystem */}
                <div className="border-t border-white/10 pt-8 pb-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                            Enterprise Revenue Integrations &amp; Standards
                        </span>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-500 text-xs">
                            <div className="flex items-center gap-2 group cursor-default">
                                <Cloud className="w-4 h-4 text-slate-400 group-hover:text-[#00A1E0] transition-colors" />
                                <span className="font-semibold text-slate-300">Salesforce CRM</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Share2 className="w-4 h-4 text-slate-400 group-hover:text-[#FF7A59] transition-colors" />
                                <span className="font-semibold text-slate-300">HubSpot</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <LayoutGrid className="w-4 h-4 text-slate-400 group-hover:text-[#00A4EF] transition-colors" />
                                <span className="font-semibold text-slate-300">Microsoft Azure</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Box className="w-4 h-4 text-slate-400 group-hover:text-[#FF9900] transition-colors" />
                                <span className="font-semibold text-slate-300">AWS Cloud</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Server className="w-4 h-4 text-slate-400 group-hover:text-[#4285F4] transition-colors" />
                                <span className="font-semibold text-slate-300">Google Cloud</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal & Compliance Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-slate-400">
                    <p className="font-normal text-center md:text-left">
                        &copy; {new Date().getFullYear()} ProfitMachines Revenue Systems. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-normal">
                        {legalLinks.map((item, i) => (
                            <Link 
                                key={i} 
                                to={item.path} 
                                className="hover:text-blue-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
