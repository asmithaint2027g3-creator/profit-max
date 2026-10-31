import {
  Globe, Radar, Users, ShieldCheck, DollarSign,
  Target, Scale, TrendingUp, GitMerge, BarChart3,
  Eye, Layers, Zap, Cpu, Sparkles, Sliders,
  Activity, UserCheck, Server, Workflow, LineChart,
  Gauge, Box, Compass, HeartPulse, Rocket, RefreshCw,
  HeartHandshake, Lock, Shield, ShoppingBag, Building2
} from 'lucide-react';

export interface OfferingCapabilityItem {
  title: string;
  outcome: string;
  path: string;
  icon: any;
  tag: string;
}

export interface OfferingCategoryDetail {
  id: string;
  title: string;
  path: string;
  recommendedIndustries: string[];
  keyRevenueOutcome: string;
  businessImpacts: string[];
  capabilities: OfferingCapabilityItem[];
}

export interface IndustryCapabilityItem {
  title: string;
  outcome: string;
  path: string;
  icon: any;
  tag: string;
}

export interface IndustryCategoryDetail {
  id: string;
  title: string;
  path: string;
  desc: string;
  badge: string;
  icon: any;
  recommendedAudience: string[];
  keyRevenueOutcome: string;
  businessImpacts: string[];
  capabilities: IndustryCapabilityItem[];
}

// ── 8 COMPLETE OFFERING ARCHITECTURES (10 CAPABILITIES EACH - EXACT SYNC WITH DATA) ──
export const offeringsArchitecture: OfferingCategoryDetail[] = [
  // 01. Profit Pool Discovery
  {
    id: 'profit-pool-discovery',
    title: 'Profit Pool Discovery',
    path: '/offerings/profit-pool-discovery',
    recommendedIndustries: ["Enterprise SaaS","BFSI","Healthcare"],
    keyRevenueOutcome: '+18% - 32% Margin Expansion',
    businessImpacts: ["Identified Margin Leakage","Willingness-to-Pay Realization","Defensible Competitive Moats"],
    capabilities: [
    ]
  },

  // 02. Demand Engineering
  {
    id: 'demand-engineering',
    title: 'Demand Engineering',
    path: '/offerings/demand-engineering',
    recommendedIndustries: ["B2B Tech","Manufacturing","Global Enterprise"],
    keyRevenueOutcome: '3.4x Qualified Pipeline Velocity',
    businessImpacts: ["Accelerated Inbound Velocity","Lower Customer Acquisition Cost","Predictable Pipeline Generation"],
    capabilities: [
    ]
  },

  // 03. Sales Acceleration
  {
    id: 'sales-acceleration',
    title: 'Sales Acceleration',
    path: '/offerings/sales-acceleration',
    recommendedIndustries: ["Mid-Market","Enterprise Software","Financial Services"],
    keyRevenueOutcome: '28% Shorter Deal Cycles',
    businessImpacts: ["Reduced Deal Slippage","Higher Quota Attainment","Contract Margin Protection"],
    capabilities: [
    ]
  },

  // 04. Revenue Operations
  {
    id: 'revenue-operations',
    title: 'Revenue Operations',
    path: '/offerings/revenue-operations',
    recommendedIndustries: ["Enterprise SaaS","High-Growth Tech","Multi-Division Enterprise"],
    keyRevenueOutcome: '98% Forecast Precision · <2% Variance',
    businessImpacts: ["Unified Data Hygiene","Zero Handoff Drag","Automated SLA Enforcement"],
    capabilities: [
    ]
  },

  // 05. GTM Transformation
  {
    id: 'gtm-transformation',
    title: 'GTM Transformation',
    path: '/offerings/gtm-transformation',
    recommendedIndustries: ["PE-Backed Scaleups","Global 2000","Modernizing Enterprise"],
    keyRevenueOutcome: '-40% Sales Cycle Duration',
    businessImpacts: ["Unified GTM Blueprint","Removed Cross-Functional Drag","Accelerated Field Adoption"],
    capabilities: [
    ]
  },

  // 06. Customer Success Engine
  {
    id: 'customer-success',
    title: 'Customer Success Engine',
    path: '/offerings/customer-success',
    recommendedIndustries: ["Subscription SaaS","Cloud Infrastructure","Enterprise Platforms"],
    keyRevenueOutcome: '118% - 134% Net Revenue Retention (NRR)',
    businessImpacts: ["Compounded Customer LTV","Automated Churn Mitigation","Predictable Renewal Stream"],
    capabilities: [
    ]
  },

  // 07. Growth Intelligence
  {
    id: 'growth-intelligence',
    title: 'Growth Intelligence',
    path: '/offerings/growth-intelligence',
    recommendedIndustries: ["Corporate Strategy","High-Growth Tech","Private Equity Portcos"],
    keyRevenueOutcome: '+15% Net Price Realization',
    businessImpacts: ["Empirical Pricing Power","Unbiased Loss Forensic Audits","Capital-Efficient Growth"],
    capabilities: [
    ]
  },

  // 08. AI Trust & Governance
  {
    id: 'ai-trust-governance',
    title: 'AI Trust & Governance',
    path: '/offerings/ai-trust-governance',
    recommendedIndustries: ["BFSI","Healthcare & Life Sciences","Regulated Enterprise"],
    keyRevenueOutcome: '100% Sovereign Data Compliance',
    businessImpacts: ["Eliminated Regulatory Exposure","Zero Data Leakage","Board-Level AI Verification"],
    capabilities: [
    ]
  }

];

// ── 6 COMPLETE INDUSTRY ARCHITECTURES (10 CAPABILITIES EACH - EXACT SYNC WITH DATA) ──
export const industriesArchitecture: IndustryCategoryDetail[] = [
  // 01. B2B Businesses
  {
    id: 'b2b',
    title: 'B2B Businesses',
    path: '/industries/b2b',
    desc: 'B2B PIPELINE ACCELERATION, ACCOUNT PENETRATION & COMMITTEE CONSENSUS · B2B Businesses',
    badge: 'Pipeline Generation',
    icon: Target,
    recommendedAudience: ["B2B Tech","Industrial Services","Corporate Advisory"],
    keyRevenueOutcome: '3.4x Pipeline Velocity Lift',
    businessImpacts: ["Unified Account Intent","Autonomous Outreach","Zero Rep Admin Drag"],
    capabilities: [
    ]
  },

  // 02. B2C & Consumer Businesses
  {
    id: 'b2c',
    title: 'B2C & Consumer Businesses',
    path: '/industries/b2c',
    desc: 'OMNICHANNEL ACQUISITION, CONVERSION OPTIMIZATION & REPEAT LTV · B2C & Consumer Businesses',
    badge: 'Consumer Growth',
    icon: ShoppingBag,
    recommendedAudience: ["Consumer Brands","E-Commerce","Subscription D2C"],
    keyRevenueOutcome: '+42% Customer Lifetime Value',
    businessImpacts: ["Multi-Channel Ad Sync","Abandoned Cart Recovery","Dynamic Personalization"],
    capabilities: [
    ]
  },

  // 03. Enterprise Organizations
  {
    id: 'enterprise',
    title: 'Enterprise Organizations',
    path: '/industries/enterprise',
    desc: 'COMPLEX REVENUE ORCHESTRATION, ACCOUNT PENETRATION & GOVERNED AI · Enterprise Organizations',
    badge: 'Enterprise Architecture',
    icon: Building2,
    recommendedAudience: ["Fortune 1000","Global 2000","Multi-Subsidiary Enterprise"],
    keyRevenueOutcome: '$12M+ Average Account Expansion',
    businessImpacts: ["Corporate Hierarchy Maps","Procurement Acceleration","Sovereign Security"],
    capabilities: [
    ]
  },

  // 04. Mid-Market & Scaling Businesses
  {
    id: 'midmarket',
    title: 'Mid-Market & Scaling Businesses',
    path: '/industries/midmarket',
    desc: 'LEAN-TEAM PRODUCTIVITY, PROCESS STANDARDIZATION & CAPACITY ACCELERATION · Mid-Market & Scaling Businesses',
    badge: 'Velocity & Efficiency',
    icon: Zap,
    recommendedAudience: ["High-Velocity Mid-Market","Regional Leaders","PE Portcos"],
    keyRevenueOutcome: '15+ Hours Saved per Rep/Week',
    businessImpacts: ["Fast Market Entry","Vertical Niche Coverage","High CAC Efficiency"],
    capabilities: [
    ]
  },

  // 05. Startups & Scaleups
  {
    id: 'startups',
    title: 'Startups & Scaleups',
    path: '/industries/startups',
    desc: 'PRODUCT-MARKET FIT VALIDATION, FOUNDER SALES & UNIT ECONOMICS · Startups & Scaleups',
    badge: 'Capital Efficiency',
    icon: Rocket,
    recommendedAudience: ["Seed-Stage Startups","Series A/B Companies","Technical Founders"],
    keyRevenueOutcome: '48-Hour Pipeline Launch',
    businessImpacts: ["Empirical PMF Telemetry","Founder Calendar Protection","Extended Runway"],
    capabilities: [
    ]
  },

  // 06. SaaS & Recurring-Revenue Businesses
  {
    id: 'saas',
    title: 'SaaS & Recurring-Revenue Businesses',
    path: '/industries/saas',
    desc: 'SUBSCRIPTION LIFECYCLE, PLG-TO-SLG HYBRID & RETENTION REVENUE · SaaS & Recurring-Revenue Businesses',
    badge: 'Recurring Revenue',
    icon: Layers,
    recommendedAudience: ["B2B SaaS","Cloud Software","Product-Led Growth (PLG)"],
    keyRevenueOutcome: '128% Net Revenue Retention (NRR)',
    businessImpacts: ["Product-Led Conversion","Automated Churn Mitigation","Tier Expansion"],
    capabilities: [
    ]
  }

];
