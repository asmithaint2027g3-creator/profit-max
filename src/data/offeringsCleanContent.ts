// Professional, customer-facing content for ProfitMachines Offerings
// Strictly derived from Revenue Architecture Dossier · Zero internal codes (no F1-A1, L1, etc. in visible text)

export interface DiscoveryArea {
  id: string;
  name: string;
  shortName: string;
  businessQuestion: string;
  investigates: string;
  consultingDelivers: string[];
  aiImplements: string[];
  decisionsInformed: string[];
  relatedFamilySlug: string;
  plainEnglishExplanation: string;
  iconName: string;
}

export interface ServiceOffering {
  name: string;
  track: 'Strategy & Consulting' | 'AI & Automation';
  summary: string;
  decisionsSupported: string;
  plainEnglishTerm?: string;
}

export interface ServiceFamily {
  id: string;
  slug: string;
  name: string;
  purpose: string;
  problemsSolved: string[];
  offerings: ServiceOffering[];
  iconName: string;
}

export interface SubSegmentDetail {
  title: string;
  examples: string;
  businessChallenge: string;
  discoveryQuestion: string;
  relevantServices: string[];
  consultingShare: number; // percentage
  aiShare: number; // percentage
}

export interface BusinessSegmentCategory {
  id: string;
  title: string;
  overview: string;
  subSegments: SubSegmentDetail[];
}

export interface MicroSegmentKit {
  id: string;
  name: string;
  targetAudience: string;
  businessProblem: string;
  whatItExamines: string;
  includedServices: string[];
  duration: string;
  deliveryTrack: 'Strategy & Consulting' | 'AI & Automation' | 'Hybrid (Consulting + AI)';
  ctaText: string;
}

export interface DeliveryTrackDetail {
  track: string;
  tagline: string;
  description: string;
  whenUseful: string[];
  activities: string[];
  tangibleOutputs: string[];
  howItComplements: string;
}

// ── 1. The Seven Revenue Discovery Areas ──
export const discoveryAreas: DiscoveryArea[] = [
  {
    id: "market-opportunity",
    name: "Market and Opportunity Discovery",
    shortName: "Market",
    businessQuestion: "Where is the revenue we haven't mapped?",
    plainEnglishExplanation: "Identifies untapped market potential, hidden profit pools, and overlooked revenue segments across your industry landscape.",
    investigates: "Examines overall addressable market boundaries, sub-segment margin structures, and real-time demand patterns that conventional sales teams overlook.",
    consultingDelivers: [
      "Total Addressable Market & Profit Pool Mapping",
      "Segment Attractiveness & Entry Thesis Development",
      "Micro-Segment Margin Economics Analysis"
    ],
    aiImplements: [
      "Predictive Market Sizing Models with Live Rescoring",
      "Buyer Intent Telemetry to Uncover Unseen Demand",
      "Whitespace Opportunity Alerting Agents"
    ],
    decisionsInformed: [
      "Which new market segments or verticals to enter first",
      "Where capital and sales headcount will yield the highest return",
      "Which existing client segments to defend versus sunset"
    ],
    relatedFamilySlug: "market-whitespace",
    iconName: "Search"
  },
  {
    id: "demand-pipeline",
    name: "Demand and Pipeline Development",
    shortName: "Demand",
    businessQuestion: "What are buyers struggling to articulate?",
    plainEnglishExplanation: "Captures unarticulated customer pains, tests compelling market positioning, and builds reliable pipeline generation channels.",
    investigates: "Analyzes current inbound and outbound pipeline sources, messaging resonance with buyer pain points, and stage-by-stage pipeline velocity.",
    consultingDelivers: [
      "Demand Architecture & Channel Mix Design",
      "Messaging & Value Offer Engineering",
      "Pipeline Motion Design (Outbound, Inbound, Account-Based, Product-Led)"
    ],
    aiImplements: [
      "Autonomous Demand Generation & Outbound Agent Fleet",
      "Dynamic Messaging Personalization Mesh",
      "Pipeline Velocity Telemetry & Stage-Slip Detection"
    ],
    decisionsInformed: [
      "Optimal balance between outbound sales, inbound marketing, and partner motions",
      "Specific value propositions that resonate across buyer personas",
      "How to prevent qualified opportunities from stalling between stages"
    ],
    relatedFamilySlug: "demand-pipeline",
    iconName: "Target"
  },
  {
    id: "value-deal",
    name: "Value and Deal Effectiveness",
    shortName: "Value",
    businessQuestion: "How do we prove ROI before the purchase order?",
    plainEnglishExplanation: "Builds rigorous, defensible business cases that prove value before procurement requests discounts or delays decisions.",
    investigates: "Assesses how sales teams communicate quantifiable return, handles pricing negotiations, qualifies buying committees, and manages forecast reliability.",
    consultingDelivers: [
      "Value Engineering & Pre-PO Business Case Studio",
      "Pricing & Packaging Strategy Architecture",
      "Sales Stage Rigor & Deal Qualification System"
    ],
    aiImplements: [
      "Deal Intelligence & Win-Probability Risk Engine",
      "Dynamic Deal Room & ROI Model Generation Agent",
      "Algorithmic Revenue Forecasting System"
    ],
    decisionsInformed: [
      "How to price offerings based on value delivered rather than internal costs",
      "Which opportunities have a high probability of closing this quarter",
      "Specific intervention playbooks to rescue at-risk enterprise deals"
    ],
    relatedFamilySlug: "value-deal",
    iconName: "DollarSign"
  },
  {
    id: "channel-distribution",
    name: "Channel and Distribution Strategy",
    shortName: "Channel",
    businessQuestion: "How do we distribute without dependency?",
    plainEnglishExplanation: "Eliminates dangerous over-reliance on single distribution channels or platforms by designing sustainable multi-channel partner economics.",
    investigates: "Evaluates the cost of distribution across direct sales, digital channels, third-party marketplaces, and value-added partner networks.",
    consultingDelivers: [
      "Channel Economics & Partner Program Design",
      "Sales Coverage Model & Territory Design",
      "Quota, Compensation, and Channel Conflict Resolution"
    ],
    aiImplements: [
      "Channel Mix Optimization Engine",
      "Partner Sourcing & Performance Routing Agents",
      "Co-Sell Attribution & Partner Margin Tracking"
    ],
    decisionsInformed: [
      "How much margin to share with channel partners while safeguarding profitability",
      "Optimal allocation of sales capacity between direct reps and partner channels",
      "How to de-risk dependency on dominant platforms or marketplace gatekeepers"
    ],
    relatedFamilySlug: "channel-distribution",
    iconName: "Network"
  },
  {
    id: "competitive-positioning",
    name: "Competitive Positioning",
    shortName: "Competitive",
    businessQuestion: "Why do we win and lose against alternatives?",
    plainEnglishExplanation: "Dissects the real reasons behind won and lost deals to establish an unassailable strategic position against legacy and emerging competitors.",
    investigates: "Reviews buyer decision criteria, competitor pricing shifts, late-stage sales objections, and feature parity perceptions in live deal environments.",
    consultingDelivers: [
      "Win-Loss Teardown & Strategic Positioning Thesis",
      "Late-Stage Objection & Negotiation Playbook",
      "Category Differentiation & Competitive Defensibility Framework"
    ],
    aiImplements: [
      "Real-Time Competitive Intelligence Monitoring Agents",
      "Battlecard & Live Objection-Response Autopilot for Sales Reps",
      "Competitor Pricing & Product Shift Tracking"
    ],
    decisionsInformed: [
      "How to counter competitor discounting without sacrificing price integrity",
      "Which product differentiators actually drive buyer selection",
      "When to proactively reposition away from crowded commodity categories"
    ],
    relatedFamilySlug: "competitive-positioning",
    iconName: "ShieldCheck"
  },
  {
    id: "customer-buying-intent",
    name: "Customer and Buying Intent",
    shortName: "Customer",
    businessQuestion: "Who is actually ready to buy right now?",
    plainEnglishExplanation: "Uncovers high-propensity accounts actively researching solutions and maps the decision-makers inside their buying committees.",
    investigates: "Maps historical high-margin customer attributes, third-party buyer research intent signals, and internal buying committee dynamics.",
    consultingDelivers: [
      "Ideal Customer Profile & Buying-Committee Diagnostic",
      "Account Tiering & Effort-to-Propensity Coverage Strategy",
      "Buyer Persona Champions vs. Blockers Architecture"
    ],
    aiImplements: [
      "Customer Propensity & Lookalike Scoring Engine",
      "Real-Time Buyer Signal Aggregation & Lead-to-Rep Routing",
      "Account Readiness Trigger Monitoring"
    ],
    decisionsInformed: [
      "Which specific accounts sales teams should prioritize each week",
      "How to engage the full executive buying committee rather than a single contact",
      "Where to reallocate outbound sales budget toward high-conversion accounts"
    ],
    relatedFamilySlug: "customer-propensity",
    iconName: "Users"
  },
  {
    id: "pmf-revenue-architecture",
    name: "Product-Market Fit and Revenue Architecture",
    shortName: "PMF & Architecture",
    businessQuestion: "What should we sell, to whom, and at what price?",
    plainEnglishExplanation: "Aligns product features with commercial revenue models, uncovering upsell, cross-sell, and retention opportunities in your existing customer base.",
    investigates: "Analyzes actual product usage data, customer expansion patterns, retention cliffs, and feature monetization viability.",
    consultingDelivers: [
      "Offer & Bundle Architecture Design",
      "R&D-to-Revenue Alignment Review (Scale, Defend, or Sunset decisions)",
      "Installed-Base Expansion & Cross-Sell Mapping"
    ],
    aiImplements: [
      "Usage-to-Revenue Signal Pipeline",
      "Next-Best-Offer & Upsell Propensity Engine",
      "Product-Driven Churn Risk & Expansion Alerting"
    ],
    decisionsInformed: [
      "How to package product tiers to maximize customer lifetime value",
      "Which engineering features directly drive revenue versus vanity usage",
      "The precise timing and trigger events for customer contract expansion"
    ],
    relatedFamilySlug: "pmf-architecture",
    iconName: "Sparkles"
  }
];

// ── 2. The Seven Service Families ──
export const serviceFamilies: ServiceFamily[] = [
  {
    id: "market-whitespace",
    slug: "market-whitespace",
    name: "Market and Whitespace Discovery",
    purpose: "Map unexplored market potential, assess sub-segment attractiveness, and pinpoint exact profit pools before allocating sales or product investment.",
    problemsSolved: [
      "Unclear market boundaries and unreliable sizing estimates",
      "Wasting commercial resources on low-margin customer segments",
      "Lack of early visibility into emerging market whitespace"
    ],
    iconName: "Search",
    offerings: [
      {
        name: "TAM, SAM, SOM & Profit Pool Mapping",
        track: "Strategy & Consulting",
        summary: "Comprehensive market sizing broken down by micro-segments, identifying where actual profit margins are concentrated rather than just top-line volume.",
        decisionsSupported: "Determines primary target markets, capital allocation, and 3-year strategic growth horizons."
      },
      {
        name: "Segment Attractiveness & Entry Thesis",
        track: "Strategy & Consulting",
        summary: "Structured evaluation of new verticals and customer segments based on acquisition cost, margin potential, and competitive barrier.",
        decisionsSupported: "Provides clear go/no-go criteria and sequenced entry order for expansion."
      },
      {
        name: "Micro-Segment Margin Economics Analysis",
        track: "Strategy & Consulting",
        summary: "Granular unit-economic teardown of customer sub-types to reveal which service lines or customer types silently subsidize others.",
        decisionsSupported: "Guides product retirement, price adjustments, and high-margin customer focus."
      },
      {
        name: "Predictive Market Sizing Engine",
        track: "AI & Automation",
        summary: "Machine learning models that continuously rescore addressable market opportunities as market signals and macroeconomic data change.",
        decisionsSupported: "Keeps territory sizing and market potential projections continuously up to date.",
        plainEnglishTerm: "Machine learning models that recalculate market opportunity sizes in real time."
      },
      {
        name: "Dark-Funnel & Buyer Intent Telemetry",
        track: "AI & Automation",
        summary: "Monitors third-party research activity, category search spikes, and unauthenticated web visits to capture buyer interest before competitor outreach.",
        decisionsSupported: "Feeds early-stage prospect accounts directly into outbound sales workflows.",
        plainEnglishTerm: "Captures early buying signals from prospects researching solutions before they fill out a form."
      },
      {
        name: "Whitespace Opportunity Alerting Agents",
        track: "AI & Automation",
        summary: "Automated monitoring agents that notify leadership when promising accounts or high-value regions slip out of active sales coverage.",
        decisionsSupported: "Prevents account neglect and triggers timely rep reassignments."
      }
    ]
  },
  {
    id: "demand-pipeline",
    slug: "demand-pipeline",
    name: "Demand and Pipeline Discovery",
    purpose: "Architect predictable pipeline generation across inbound, outbound, and partner motions, backed by messaging that speaks directly to customer needs.",
    problemsSolved: [
      "Inconsistent, lumpy pipeline quarter after quarter",
      "Marketing messaging that fails to generate executive-level engagement",
      "Sales opportunities getting stuck in pipeline limbo without clear progress"
    ],
    iconName: "Target",
    offerings: [
      {
        name: "Demand Architecture & Channel Mix Design",
        track: "Strategy & Consulting",
        summary: "Designs the overall go-to-market demand engine, calibrating investment across outbound prospecting, inbound content, events, and partner referrals.",
        decisionsSupported: "Establishes customer acquisition budget allocation and quota feasibility."
      },
      {
        name: "Messaging & Value Offer Engineering",
        track: "Strategy & Consulting",
        summary: "Develops sharp, differentiated category language that articulates unaddressed buyer pain points and commands executive attention.",
        decisionsSupported: "Aligns marketing campaigns and sales talk-tracks around high-converting themes."
      },
      {
        name: "Pipeline Motion Design & Sequencing",
        track: "Strategy & Consulting",
        summary: "Defines the exact playbook for account-based marketing, enterprise outbound, and product-led onboarding assist motions.",
        decisionsSupported: "Standardizes sales representative activities and qualification criteria across stages."
      },
      {
        name: "Autonomous Demand Generation Agent Fleet",
        track: "AI & Automation",
        summary: "Deploy intelligent software agents that research target accounts, craft personalized outreach, and conduct preliminary qualification across channels.",
        decisionsSupported: "Scales outbound meeting generation without linear headcount increases.",
        plainEnglishTerm: "AI agents that conduct preliminary research and initiate outreach to qualified prospects."
      },
      {
        name: "Dynamic Messaging Personalization Mesh",
        track: "AI & Automation",
        summary: "Automated systems that tailor email copy, landing pages, and sales collaterals to specific prospect industries, company sizes, and role priorities.",
        decisionsSupported: "Maximizes conversion rates from cold outreach to first discovery calls."
      },
      {
        name: "Pipeline Velocity Telemetry & Flow Monitoring",
        track: "AI & Automation",
        summary: "Real-time telemetry tracking deal movement through each pipeline stage, automatically alerting leadership to stage slippage or stalled opportunities.",
        decisionsSupported: "Enables immediate managerial coaching and deal intervention before quarters close.",
        plainEnglishTerm: "Real-time tracking of deal progression to spot bottlenecks before sales targets slip."
      }
    ]
  },
  {
    id: "value-deal",
    slug: "value-deal",
    name: "Value and Deal Discovery",
    purpose: "Equip sales teams with defensible ROI business cases, disciplined stage qualification, and algorithmic forecasting to close larger deals faster.",
    problemsSolved: [
      "Late-stage deals stalling in procurement or committee reviews",
      "Excessive discounting to win deals, causing margin erosion",
      "Unreliable revenue forecasts based on sales rep intuition"
    ],
    iconName: "DollarSign",
    offerings: [
      {
        name: "Value Engineering & ROI Business Case Studio",
        track: "Strategy & Consulting",
        summary: "Customizable economic justification models that prove tangible business value and payback timelines to CFOs and executive committees.",
        decisionsSupported: "Justifies premium pricing and protects contract margins during procurement."
      },
      {
        name: "Pricing & Packaging Strategy Architecture",
        track: "Strategy & Consulting",
        summary: "Restructures pricing tiers, packaging bundles, and commercial terms to align with customer-perceived value and willingness to pay.",
        decisionsSupported: "Prevents discount creep and unlocks predictable expansion revenue."
      },
      {
        name: "Sales Stage Rigor & Deal Qualification System",
        track: "Strategy & Consulting",
        summary: "Implements rigorous qualification frameworks (such as MEDDPICC) tailored to your specific enterprise sales cycle and decision gates.",
        decisionsSupported: "Disqualifies unwinnable deals early, focusing sales capacity on high-probability opportunities."
      },
      {
        name: "Deal Intelligence & Win-Probability Risk Engine",
        track: "AI & Automation",
        summary: "Analyzes deal engagement signals, stakeholder involvement, and communication patterns to compute live win probabilities and risk scores.",
        decisionsSupported: "Guides sales management on which accounts require senior executive sponsorship."
      },
      {
        name: "Dynamic Deal Room & ROI Model Agent",
        track: "AI & Automation",
        summary: "Interactive digital deal rooms that automatically populate customized ROI calculations and business cases based on prospect inputs.",
        decisionsSupported: "Shortens enterprise purchase approvals by providing buyer champions with ready-to-present board decks."
      },
      {
        name: "Algorithmic Revenue Forecasting System",
        track: "AI & Automation",
        summary: "Statistical and machine learning forecast models that predict quarter-end revenue commitments with verifiable historical precision.",
        decisionsSupported: "Provides executive leadership and board members with dependable financial visibility."
      }
    ]
  },
  {
    id: "channel-distribution",
    slug: "channel-distribution",
    name: "Channel and Distribution Discovery",
    purpose: "Design sustainable partner economics, direct-to-channel coverage models, and multi-channel mix optimization to reduce single-source platform dependency.",
    problemsSolved: [
      "Vulnerability to fee increases or algorithm changes from single distribution channels",
      "Channel conflict between direct sales teams and external reseller partners",
      "Inefficient sales territory boundaries leading to uneven rep performance"
    ],
    iconName: "Network",
    offerings: [
      {
        name: "Channel Economics & Partner Program Design",
        track: "Strategy & Consulting",
        summary: "Structures partner tiers, referral commissions, co-sell incentives, and margin-sharing agreements to motivate external distribution.",
        decisionsSupported: "Determines partner commission structures that remain profitable after support costs."
      },
      {
        name: "Sales Coverage Model & Territory Design",
        track: "Strategy & Consulting",
        summary: "Balances field, inside, and digital sales coverage across geographic and vertical territories to optimize rep quota attainment.",
        decisionsSupported: "Ensures equitable territory distribution and realistic quota assignments."
      },
      {
        name: "Multi-Channel Mix Optimization Engine",
        track: "AI & Automation",
        summary: "Algorithmic models that evaluate marketing spend and revenue return across channels, recommending optimal budget reallocations.",
        decisionsSupported: "Shifts customer acquisition investment dynamically toward the most profitable channels."
      },
      {
        name: "Partner Sourcing & Performance Routing Agents",
        track: "AI & Automation",
        summary: "Automated systems that identify potential partner organizations, evaluate past co-sell velocity, and route leads to the highest-performing partners.",
        decisionsSupported: "Accelerates partner onboarding and prioritizes high-yield partner collaborations."
      }
    ]
  },
  {
    id: "competitive-positioning",
    slug: "competitive-positioning",
    name: "Competitive and Positioning Discovery",
    purpose: "Understand precisely why your business wins or loses deals, build unassailable positioning, and provide sales reps with real-time objection playbooks.",
    problemsSolved: [
      "Deals lost to lesser competitors on price or superficial feature comparisons",
      "Sales representatives struggling with tough objections during late-stage negotiations",
      "Competitors blindsiding the business with unexpected price cuts or product launches"
    ],
    iconName: "ShieldCheck",
    offerings: [
      {
        name: "Win-Loss Teardown & Positioning Thesis",
        track: "Strategy & Consulting",
        summary: "In-depth buyer interviews and historical deal analysis that isolate the true reasons behind wins and losses, crafting a differentiated market stance.",
        decisionsSupported: "Informs product roadmap priorities and sharpens executive marketing positioning."
      },
      {
        name: "Late-Stage Objection & Negotiation Playbook",
        track: "Strategy & Consulting",
        summary: "Tactical guides that arm sales reps with tested responses to procurement pressure, competitor FUD (fear, uncertainty, doubt), and price challenges.",
        decisionsSupported: "Preserves deal margins and prevents concession giveaways at closing."
      },
      {
        name: "Real-Time Competitive Intelligence Monitoring",
        track: "AI & Automation",
        summary: "Continuous monitoring agents that track competitor pricing adjustments, website messaging updates, customer reviews, and job postings.",
        decisionsSupported: "Gives commercial leadership early warnings of competitor strategy shifts."
      },
      {
        name: "Battlecard & Live Objection-Response Autopilot",
        track: "AI & Automation",
        summary: "In-meeting AI assistants that provide sales reps with instantaneous, contextually relevant competitive counterpoints during prospect conversations.",
        decisionsSupported: "Increases sales representative confidence and win rates on competitive calls."
      }
    ]
  },
  {
    id: "customer-propensity",
    slug: "customer-propensity",
    name: "Customer and Propensity Discovery",
    purpose: "Pinpoint which accounts have the highest propensity to buy, engage the entire buying committee, and route hot inbound signals in real time.",
    problemsSolved: [
      "Sales reps wasting time on low-probability, tire-kicker accounts",
      "Deals stalling because only one stakeholder was engaged instead of the full committee",
      "Delayed follow-up on high-intent buyer actions allowing competitors to swoop in"
    ],
    iconName: "Users",
    offerings: [
      {
        name: "Ideal Customer Profile & Buying-Committee Diagnostic",
        track: "Strategy & Consulting",
        summary: "Rigorous definition of high-margin customer characteristics, combined with detailed maps of decision-makers, influencers, champions, and potential blockers.",
        decisionsSupported: "Focuses commercial teams exclusively on accounts with the highest lifetime value."
      },
      {
        name: "Account Tiering & Coverage Strategy",
        track: "Strategy & Consulting",
        summary: "Categorizes addressable accounts into distinct tiers (Tier 1 high-touch, Tier 2 hybrid, Tier 3 automated) based on propensity and revenue scale.",
        decisionsSupported: "Allocates executive time and marketing resources proportionately to account value."
      },
      {
        name: "Customer Propensity & Lookalike Scoring Engine",
        track: "AI & Automation",
        summary: "Predictive neural scoring algorithms that rank your total addressable market against characteristics shared by your most profitable closed-won accounts.",
        decisionsSupported: "Continuously refreshes sales prospecting priority lists."
      },
      {
        name: "Real-Time Buyer Signal Aggregation & Routing",
        track: "AI & Automation",
        summary: "Sub-second detection of high-intent signals across web visits, content downloads, and intent networks, instantly routed to the appropriate account executive.",
        decisionsSupported: "Shortens response times from hours to seconds when buyer interest is highest."
      }
    ]
  },
  {
    id: "pmf-architecture",
    slug: "pmf-architecture",
    name: "Product-Market Fit, Offers, and Revenue Architecture",
    purpose: "Connect product usage signals directly to expansion revenue, optimize packaging bundles, and ensure engineering roadmaps drive tangible commercial return.",
    problemsSolved: [
      "Heavy product usage that fails to translate into paid upgrades or expansions",
      "Engineering resources spent building features that customers are unwilling to pay for",
      "Unexpected customer churn occurring without prior warning indicators"
    ],
    iconName: "Sparkles",
    offerings: [
      {
        name: "Offer & Bundle Architecture Design",
        track: "Strategy & Consulting",
        summary: "Designs clear service and product packaging tiers that make buying decisions simple and create natural stepping stones for customer upgrades.",
        decisionsSupported: "Increases average order value and streamlines sales conversations."
      },
      {
        name: "R&D-to-Revenue Alignment Review",
        track: "Strategy & Consulting",
        summary: "Comprehensive commercial audit of engineering projects to determine which product features to scale, defend, or sunset based on actual revenue impact.",
        decisionsSupported: "Aligns product engineering investments with verified commercial profitability."
      },
      {
        name: "Installed-Base Expansion & Cross-Sell Mapping",
        track: "Strategy & Consulting",
        summary: "Analyzes current customer accounts to identify logical cross-sell opportunities, additional seat requirements, and untapped departmental applications.",
        decisionsSupported: "Unlocks high-margin expansion revenue from existing customer relationships."
      },
      {
        name: "Usage-to-Revenue Signal Pipeline",
        track: "AI & Automation",
        summary: "Automated telemetry pipelines that monitor application usage thresholds, feature adoption, and seat limits to trigger timely expansion outreach.",
        decisionsSupported: "Alerts account managers to upsell opportunities at the exact moment customer value is proven."
      },
      {
        name: "Next-Best-Offer & Expansion Propensity Engine",
        track: "AI & Automation",
        summary: "Predictive algorithms that recommend the optimal complementary add-on, bundle, or tier upgrade for each specific customer account.",
        decisionsSupported: "Drives automated, high-converting customer expansion campaigns."
      }
    ]
  }
];

// ── 3. Solutions by Business Type (Segments) ──
export const businessSegments: BusinessSegmentCategory[] = [
  {
    id: "services-companies",
    title: "Services Companies",
    overview: "Agencies, consultancies, system integrators, and managed service providers seeking to escape commoditization, protect delivery margins, and productize their expertise.",
    subSegments: [
      {
        title: "Creative & Marketing Agencies",
        examples: "Boutique agencies, performance marketing, brand studios, production houses",
        businessChallenge: "Unclear profitability across service lines, margin erosion from scope creep, and undifferentiated pitch proposals.",
        discoveryQuestion: "Which service lines actually carry margin?",
        relevantServices: [
          "Micro-Segment Margin Economics Analysis",
          "Buyer Messaging & Value Offer Engineering",
          "Pricing & Packaging Strategy Architecture",
          "Offer & Bundle Architecture Design"
        ],
        consultingShare: 70,
        aiShare: 30
      },
      {
        title: "IT Services & System Integrators",
        examples: "Offshore software development firms, cloud system integrators, boutique engineering consultancies",
        businessChallenge: "Struggling to uncover multi-year enterprise transformation budgets and competing purely on hourly rate cards.",
        discoveryQuestion: "Which accounts hide multi-year services revenue?",
        relevantServices: [
          "Value Engineering & Pre-PO Business Case Studio",
          "Channel Economics & Partner Program Design",
          "Ideal Customer Profile & Buying-Committee Diagnostic",
          "TAM, SAM, SOM & Profit Pool Mapping"
        ],
        consultingShare: 55,
        aiShare: 45
      },
      {
        title: "Management & Strategy Consultancies",
        examples: "Niche advisory firms, business transformation boutiques, operations consultancies",
        businessChallenge: "Over-reliance on senior partner time and difficulty productizing intellectual property into scalable offerings.",
        discoveryQuestion: "How do we productize and price our proprietary methodology?",
        relevantServices: [
          "Win-Loss Teardown & Strategic Positioning Thesis",
          "Pricing & Packaging Strategy Architecture",
          "Account Tiering & Coverage Strategy"
        ],
        consultingShare: 75,
        aiShare: 25
      },
      {
        title: "Staffing & Recruiting",
        examples: "Technical staffing agencies, recruitment process outsourcing (RPO), executive search boutiques",
        businessChallenge: "High volatility in client hiring demand and manual candidate matching slowing down placement velocity.",
        discoveryQuestion: "Where is repeatable demand per role vertical?",
        relevantServices: [
          "Pipeline Motion Design & Sequencing",
          "Customer Propensity & Lookalike Scoring Engine",
          "Autonomous Demand Generation Agent Fleet",
          "Sales Coverage Model & Territory Design"
        ],
        consultingShare: 35,
        aiShare: 65
      },
      {
        title: "Managed Services & Outsourcing",
        examples: "Business process outsourcing (BPO), IT outsourcing (ITO), cybersecurity MSSPs, cloud MSPs",
        businessChallenge: "Multi-year fixed contracts that mask unprofitable customer delivery and unmonitored SLA penalties.",
        discoveryQuestion: "Which contracts mask unprofitable delivery?",
        relevantServices: [
          "Channel Economics & Partner Program Design",
          "Installed-Base Expansion & Cross-Sell Mapping",
          "Algorithmic Revenue Forecasting System",
          "Predictive Market Sizing Engine"
        ],
        consultingShare: 45,
        aiShare: 55
      },
      {
        title: "Freelance & Micro-Consultancies",
        examples: "Independent specialists, boutique 2-3 person strategy pods",
        businessChallenge: "Unclear differentiation causing prospective clients to treat services as interchangeable commodities.",
        discoveryQuestion: "What is my one-sentence differentiated offer?",
        relevantServices: [
          "Buyer Messaging & Value Offer Engineering",
          "Offer & Bundle Architecture Design"
        ],
        consultingShare: 85,
        aiShare: 15
      }
    ]
  },
  {
    id: "retail-commerce",
    title: "Retail and Commerce",
    overview: "Direct-to-consumer brands, omnichannel retailers, and marketplace sellers managing customer acquisition costs, channel dependency, and repeat purchase loyalty.",
    subSegments: [
      {
        title: "Direct-to-Consumer (DTC) Brands",
        examples: "Apparel, beauty, health supplements, premium home goods",
        businessChallenge: "Rising acquisition costs wiping out contribution margins after paid advertising spend.",
        discoveryQuestion: "Which customer micro-segments carry real contribution margin after acquisition costs?",
        relevantServices: [
          "Micro-Segment Margin Economics Analysis",
          "Dynamic Messaging Personalization Mesh",
          "Multi-Channel Mix Optimization Engine",
          "Customer Propensity & Lookalike Scoring Engine"
        ],
        consultingShare: 30,
        aiShare: 70
      },
      {
        title: "Marketplace Sellers & Aggregators",
        examples: "Amazon brand operators, e-commerce aggregators, multi-platform brand portfolios",
        businessChallenge: "Excessive vulnerability to platform algorithm updates, sudden fee increases, and lack of direct customer relationships.",
        discoveryQuestion: "Which channels are we silently dependent on?",
        relevantServices: [
          "Dark-Funnel & Buyer Intent Telemetry",
          "Multi-Channel Mix Optimization Engine",
          "Real-Time Competitive Intelligence Monitoring",
          "Dynamic Messaging Personalization Mesh"
        ],
        consultingShare: 25,
        aiShare: 75
      },
      {
        title: "Omnichannel & Chain Retail",
        examples: "Regional retail chains, department stores, specialty retail operators",
        businessChallenge: "Lack of clarity around whether e-commerce and retail store footprints cannibalize or compound each other's sales.",
        discoveryQuestion: "How do store and digital demand cannibalize or compound?",
        relevantServices: [
          "Channel Economics & Partner Program Design",
          "Segment Attractiveness & Entry Thesis",
          "Demand Architecture & Channel Mix Design",
          "Usage-to-Revenue Signal Pipeline"
        ],
        consultingShare: 50,
        aiShare: 50
      },
      {
        title: "Luxury & Premium Retail",
        examples: "Designer apparel, fine jewelry, high-end lifestyle products",
        businessChallenge: "Preserving brand exclusivity and full price integrity while driving commercial revenue growth.",
        discoveryQuestion: "How do we protect price integrity while growing sales volume?",
        relevantServices: [
          "Win-Loss Teardown & Strategic Positioning Thesis",
          "Buyer Messaging & Value Offer Engineering",
          "Account Tiering & Coverage Strategy"
        ],
        consultingShare: 70,
        aiShare: 30
      },
      {
        title: "Quick Commerce & Subscription",
        examples: "Curated subscription boxes, meal kits, on-demand local delivery",
        businessChallenge: "High subscriber drop-off after introductory discounts and difficulty forecasting churn risks.",
        discoveryQuestion: "What customer behavioral signals predict churn versus expansion?",
        relevantServices: [
          "Usage-to-Revenue Signal Pipeline",
          "Customer Propensity & Lookalike Scoring Engine",
          "Dynamic Deal Room & ROI Model Agent",
          "Dynamic Messaging Personalization Mesh"
        ],
        consultingShare: 25,
        aiShare: 75
      },
      {
        title: "Retail Media & Retail-as-a-Service",
        examples: "Retailer advertising networks, in-store media platforms, white-label commerce solutions",
        businessChallenge: "Setting defensible pricing for internal advertising inventory based on verified brand demand.",
        discoveryQuestion: "How do we price media inventory against verified advertiser demand?",
        relevantServices: [
          "Offer & Bundle Architecture Design",
          "Pricing & Packaging Strategy Architecture",
          "TAM, SAM, SOM & Profit Pool Mapping",
          "Next-Best-Offer & Expansion Propensity Engine"
        ],
        consultingShare: 50,
        aiShare: 50
      }
    ]
  },
  {
    id: "platform-companies",
    title: "Platform Companies",
    overview: "B2B SaaS, developer tooling, two-sided marketplaces, and API platforms transitioning to enterprise contracts or optimizing product-led conversion.",
    subSegments: [
      {
        title: "Horizontal SaaS Platforms",
        examples: "CRM-adjacent platforms, HR tech, team collaboration, finance software",
        businessChallenge: "Broad targeting creating high sales churn across undifferentiated general industries.",
        discoveryQuestion: "Which vertical industries hide our highest sales win-rate?",
        relevantServices: [
          "Algorithmic Revenue Forecasting System",
          "Pipeline Motion Design & Sequencing",
          "Customer Propensity & Lookalike Scoring Engine",
          "Offer & Bundle Architecture Design"
        ],
        consultingShare: 40,
        aiShare: 60
      },
      {
        title: "Vertical SaaS Solutions",
        examples: "Construction software, legal practice management, health tech, specialized education platforms",
        businessChallenge: "Reaching market saturation in core workflows without clear secondary workflow expansion.",
        discoveryQuestion: "Where is the unmapped adjacent workflow we can commercially own?",
        relevantServices: [
          "TAM, SAM, SOM & Profit Pool Mapping",
          "Value Engineering & Pre-PO Business Case Studio",
          "Ideal Customer Profile & Buying-Committee Diagnostic",
          "Channel Economics & Partner Program Design"
        ],
        consultingShare: 55,
        aiShare: 45
      },
      {
        title: "Product-Led Growth (PLG) & Self-Serve SaaS",
        examples: "Developer tools, freemium productivity software, cloud infrastructure utilities",
        businessChallenge: "Large volumes of free users that fail to convert into paid team or enterprise licenses.",
        discoveryQuestion: "Which specific product usage patterns predict paid conversion?",
        relevantServices: [
          "Usage-to-Revenue Signal Pipeline",
          "Pipeline Motion Design & Sequencing",
          "Deal Intelligence & Win-Probability Risk Engine",
          "Next-Best-Offer & Expansion Propensity Engine"
        ],
        consultingShare: 25,
        aiShare: 75
      },
      {
        title: "Two-Sided Marketplaces",
        examples: "B2B wholesale exchanges, specialized service marketplaces, logistics matching networks",
        businessChallenge: "Imbalance between buyer liquidity and seller retention leading to unsustainable matching subsidies.",
        discoveryQuestion: "Which side of the marketplace is actually monetizable?",
        relevantServices: [
          "Channel Economics & Partner Program Design",
          "Customer Propensity & Lookalike Scoring Engine",
          "Predictive Market Sizing Engine",
          "Partner Sourcing & Performance Routing Agents"
        ],
        consultingShare: 40,
        aiShare: 60
      },
      {
        title: "API & Infrastructure Platforms",
        examples: "Payment gateways, data infrastructure, cloud developer tooling, ML infrastructure",
        businessChallenge: "Difficulty selling usage-based developer consumption into traditional corporate procurement committees.",
        discoveryQuestion: "How do we sell consumption pricing into enterprise buying committees?",
        relevantServices: [
          "Value Engineering & Pre-PO Business Case Studio",
          "Win-Loss Teardown & Strategic Positioning Thesis",
          "Buyer Messaging & Value Offer Engineering",
          "Dynamic Deal Room & ROI Model Agent"
        ],
        consultingShare: 50,
        aiShare: 50
      },
      {
        title: "Platform-in-Company",
        examples: "Retailer-built internal logistics platforms, bank-built internal fintech and payments rails",
        businessChallenge: "Transforming internal enterprise software tools into commercial, revenue-generating products.",
        discoveryQuestion: "How do we price an internal software asset as a commercial product?",
        relevantServices: [
          "R&D-to-Revenue Alignment Review",
          "Segment Attractiveness & Entry Thesis",
          "Pricing & Packaging Strategy Architecture"
        ],
        consultingShare: 70,
        aiShare: 30
      }
    ]
  },
  {
    id: "adjacent-segments",
    title: "Adjacent Segments",
    overview: "Manufacturing, financial institutions, healthcare organizations, and media companies adopting modern revenue discovery and automated intelligence.",
    subSegments: [
      {
        title: "Manufacturing & Industrial",
        examples: "Industrial components, OEM equipment, specialty manufacturing, distribution networks",
        businessChallenge: "Transitioning from traditional catalog distributor models to direct commercial account engagement.",
        discoveryQuestion: "How can direct and partner distribution channels coexist profitably?",
        relevantServices: [
          "Channel Economics & Partner Program Design",
          "Value Engineering & Pre-PO Business Case Studio",
          "Sales Coverage Model & Territory Design",
          "Ideal Customer Profile & Buying-Committee Diagnostic"
        ],
        consultingShare: 60,
        aiShare: 40
      },
      {
        title: "Financial Services & Fintech",
        examples: "Payments processors, commercial lending, specialty insurance, wealth management",
        businessChallenge: "Navigating strict regulatory environments while systematically identifying high-value institutional accounts.",
        discoveryQuestion: "Which institutional accounts carry high propensity for specialized financial products?",
        relevantServices: [
          "Ideal Customer Profile & Buying-Committee Diagnostic",
          "Value Engineering & Pre-PO Business Case Studio",
          "Win-Loss Teardown & Strategic Positioning Thesis",
          "Real-Time Buyer Signal Aggregation & Routing"
        ],
        consultingShare: 55,
        aiShare: 45
      },
      {
        title: "Healthcare & Life Sciences",
        examples: "Hospital technology providers, medical equipment manufacturers, digital health, commercial pharma",
        businessChallenge: "Extremely complex buying committees with clinical, financial, and regulatory approval hurdles.",
        discoveryQuestion: "How do we align clinical value proof with hospital financial procurement?",
        relevantServices: [
          "Ideal Customer Profile & Buying-Committee Diagnostic",
          "Demand Architecture & Channel Mix Design",
          "Value Engineering & Pre-PO Business Case Studio"
        ],
        consultingShare: 65,
        aiShare: 35
      },
      {
        title: "Media, Education & Information",
        examples: "B2B publishers, professional certification programs, industry events, specialized data services",
        businessChallenge: "Shifting from declining advertising sponsorships to recurring enterprise subscription and data licenses.",
        discoveryQuestion: "How do we package information assets into high-margin recurring subscriptions?",
        relevantServices: [
          "Buyer Messaging & Value Offer Engineering",
          "Offer & Bundle Architecture Design",
          "Dynamic Messaging Personalization Mesh",
          "Next-Best-Offer & Expansion Propensity Engine"
        ],
        consultingShare: 40,
        aiShare: 60
      }
    ]
  }
];

// ── 4. The Eight Micro-Segment Discovery Kits ──
export const microSegmentKits: MicroSegmentKit[] = [
  {
    id: "agency-margin-kit",
    name: "Agency Margin Kit",
    targetAudience: "Boutique & mid-size creative, digital, and marketing agencies",
    businessProblem: "Declining profit margins, widespread scope creep on client deliverables, and pricing friction during contract renewals.",
    whatItExamines: "Audits current client profitability by service line, identifies margin-eroding contracts, and structures high-value packaged retainer tiers.",
    includedServices: [
      "Micro-Segment Margin Economics Analysis",
      "Offer & Bundle Architecture Design",
      "Pricing & Packaging Strategy Architecture"
    ],
    duration: "3 weeks",
    deliveryTrack: "Strategy & Consulting",
    ctaText: "Discuss This Engagement"
  },
  {
    id: "dtc-margin-kit",
    name: "DTC Margin Kit",
    targetAudience: "Direct-to-consumer and e-commerce brands navigating rising acquisition costs",
    businessProblem: "Skyrocketing customer acquisition costs (CAC) eroding post-ad contribution margins across digital advertising channels.",
    whatItExamines: "Evaluates post-acquisition contribution margins, maps repeat purchase propensity, and optimizes marketing channel budget allocation in real time.",
    includedServices: [
      "Micro-Segment Margin Economics Analysis",
      "Dynamic Messaging Personalization Mesh",
      "Multi-Channel Mix Optimization Engine",
      "Customer Propensity & Lookalike Scoring Engine"
    ],
    duration: "6 weeks",
    deliveryTrack: "AI & Automation",
    ctaText: "Discuss This Engagement"
  },
  {
    id: "vertical-saas-whitespace-kit",
    name: "Vertical SaaS Whitespace Kit",
    targetAudience: "Vertical SaaS scale-ups operating in specialized industry verticals",
    businessProblem: "Market saturation in initial core product features and difficulty proving clear ROI when entering adjacent industry workflows.",
    whatItExamines: "Uncovers unmapped adjacent workflows within target customer organizations, defines defensible pricing tiers, and quantifies buyer business value.",
    includedServices: [
      "TAM, SAM, SOM & Profit Pool Mapping",
      "Value Engineering & Pre-PO Business Case Studio",
      "Ideal Customer Profile & Buying-Committee Diagnostic"
    ],
    duration: "4 weeks",
    deliveryTrack: "Strategy & Consulting",
    ctaText: "Discuss This Engagement"
  },
  {
    id: "plg-conversion-kit",
    name: "PLG Conversion Kit",
    targetAudience: "Self-serve, developer tooling, and freemium software platforms",
    businessProblem: "Large volumes of active free accounts that fail to convert into paid team licenses or enterprise contracts.",
    whatItExamines: "Analyzes product telemetry to identify usage patterns that reliably correlate with purchase intent, deploying automated triggers to prompt paid upgrades.",
    includedServices: [
      "Usage-to-Revenue Signal Pipeline",
      "Customer Propensity & Lookalike Scoring Engine",
      "Deal Intelligence & Win-Probability Risk Engine"
    ],
    duration: "6 weeks",
    deliveryTrack: "AI & Automation",
    ctaText: "Discuss This Engagement"
  },
  {
    id: "enterprise-motion-kit",
    name: "Enterprise Motion Kit",
    targetAudience: "B2B companies moving upmarket from mid-market deals to enterprise contracts",
    businessProblem: "Deals stalling in lengthy procurement reviews, inability to navigate multi-stakeholder buying committees, and aggressive discount demands.",
    whatItExamines: "Builds defensible executive ROI models, structures formal buying committee qualification gates, and equips champions with interactive deal rooms.",
    includedServices: [
      "Value Engineering & Pre-PO Business Case Studio",
      "Ideal Customer Profile & Buying-Committee Diagnostic",
      "Dynamic Deal Room & ROI Model Agent"
    ],
    duration: "10 weeks",
    deliveryTrack: "Hybrid (Consulting + AI)",
    ctaText: "Discuss This Engagement"
  },
  {
    id: "marketplace-liquidity-kit",
    name: "Marketplace Liquidity Kit",
    targetAudience: "Two-sided platforms and digital marketplace operators",
    businessProblem: "Persistent imbalances between demand and supply liquidity, leading to high transaction churn and inefficient promotional subsidies.",
    whatItExamines: "Evaluates unit economics across both supply and demand sides, identifying which side creates defensible monetization and targeting high-yield participants.",
    includedServices: [
      "Channel Economics & Partner Program Design",
      "Customer Propensity & Lookalike Scoring Engine",
      "Predictive Market Sizing Engine"
    ],
    duration: "8 weeks",
    deliveryTrack: "Hybrid (Consulting + AI)",
    ctaText: "Discuss This Engagement"
  },
  {
    id: "channel-de-risk-kit",
    name: "Channel De-Risk Kit",
    targetAudience: "Brands, manufacturers, and sellers over-dependent on a single marketplace or distributor",
    businessProblem: "Vulnerability to sudden algorithm adjustments, distributor commission hikes, or single-platform policy changes.",
    whatItExamines: "Quantifies distribution margin economics, identifies viable alternative distribution avenues, and captures independent buyer intent signals.",
    includedServices: [
      "Channel Economics & Partner Program Design",
      "Multi-Channel Mix Optimization Engine",
      "Dark-Funnel & Buyer Intent Telemetry"
    ],
    duration: "8 weeks",
    deliveryTrack: "Hybrid (Consulting + AI)",
    ctaText: "Discuss This Engagement"
  },
  {
    id: "pricing-packaging-kit",
    name: "Pricing and Packaging Kit",
    targetAudience: "SaaS and professional service companies experiencing margin erosion from discount creep",
    businessProblem: "Unstandardized discounting, sales rep concession giveaways, and price structures that fail to reflect delivered business value.",
    whatItExamines: "Teardown of current discount patterns, redesign of pricing tiers and packaging bundles, and deployment of interactive ROI models for sales teams.",
    includedServices: [
      "Pricing & Packaging Strategy Architecture",
      "Offer & Bundle Architecture Design",
      "Dynamic Deal Room & ROI Model Agent"
    ],
    duration: "5 weeks",
    deliveryTrack: "Strategy & Consulting",
    ctaText: "Discuss This Engagement"
  }
];

// ── 5. Delivery Tracks Deep Dive ──
export const deliveryTracksData: Record<string, DeliveryTrackDetail> = {
  consulting: {
    track: "Strategy and Consulting",
    tagline: "Human-led research, diagnostics, strategic recommendations, and executive enablement.",
    description: "Our consulting track brings seasoned revenue strategists, pricing architects, and enterprise sales leaders directly into your business to uncover hidden revenue bottlenecks and formulate actionable go-to-market decisions.",
    whenUseful: [
      "When market boundaries, customer willingness to pay, or competitive dynamics are unclear",
      "When moving upmarket into enterprise contracts requiring formal business cases and executive rigor",
      "When sales teams suffer from unstandardized discounting and inconsistent qualification criteria",
      "When designing or overhauling pricing, packaging, and partner channel economics"
    ],
    activities: [
      "In-depth customer and buyer win/loss teardown interviews",
      "Micro-segment unit margin and contribution economics audits",
      "Executive workshop design for packaging, tiering, and offer bundling",
      "Sales stage qualification playbook design (MEDDPICC frameworks)",
      "Channel conflict resolution and partner compensation restructuring"
    ],
    tangibleOutputs: [
      "Total Addressable Market & Profit Pool Executive Dossier",
      "Defensible CFO-Ready ROI Business Case Templates",
      "Standardized Sales Qualification & Objection Playbooks",
      "Enterprise Pricing, Tiering, and Packaging Blueprint",
      "Channel Partner Economic Agreement Frameworks"
    ],
    howItComplements: "Consulting defines the right strategic decisions and proves the underlying commercial economics before engineering resources are spent building automated systems."
  },
  automation: {
    track: "AI and Automation",
    tagline: "Intelligent software agents, predictive machine learning models, and real-time revenue telemetry.",
    description: "Our AI and automation track builds operational software systems that execute proven revenue motions at scale, replacing manual research and delayed reporting with real-time intelligence.",
    whenUseful: [
      "When commercial strategies are proven and require automated execution across thousands of accounts",
      "When sales representatives lose hours to manual research, prospecting, and administrative data entry",
      "When marketing budgets must shift dynamically across channels based on real-time contribution return",
      "When product usage telemetry needs to automatically trigger sales outreach and upgrade opportunities"
    ],
    activities: [
      "Deploying autonomous AI agent fleets for prospect research and meeting generation",
      "Building neural propensity models trained on historical closed-won account characteristics",
      "Integrating buyer intent networks and web visit telemetry into CRM routing queues",
      "Configuring real-time pipeline velocity alerts and deal win-probability risk engines",
      "Engineering usage-to-revenue telemetry pipelines that alert reps to high-expansion accounts"
    ],
    tangibleOutputs: [
      "Operational Autonomous SDR & Inbound Qualification Agent Fleet",
      "Predictive Account Propensity & Market Rescoring Algorithms",
      "Live Deal Room & Interactive ROI Model Generators",
      "Real-Time Pipeline Velocity & Risk Telemetry Dashboards",
      "Continuous Competitive Intelligence Alerting Systems"
    ],
    howItComplements: "AI and automation operationalize the strategies established during consulting, turning one-time playbooks into durable, continuous software capabilities."
  }
};
