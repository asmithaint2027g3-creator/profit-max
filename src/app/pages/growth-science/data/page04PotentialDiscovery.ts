import { GrowthCapabilityPageData } from '../types';

export const page04PotentialDiscoveryData: GrowthCapabilityPageData = {
  pageNumber: '04',
  title: 'Revenue Potential Discovery',
  slug: 'revenue-potential-discovery',
  heroHeadline: 'Find the Revenue Opportunities Your Current Model May Be Missing',
  heroSupporting: 'Systematically explore unharvested economic headroom across installed customer accounts, latent product feature monetization, unserved market segments, and AI-enabled business models.',
  businessProblemSummary: 'Most companies concentrate 90% of their commercial resources on net-new logo acquisition while ignoring multi-million-dollar monetization opportunities embedded within existing customer relationships and latent product capabilities.',
  targetDecisionMakers: ['Chief Executive Officers', 'Chief Revenue Officers', 'Chief Product Officers', 'Heads of Growth & Strategy'],
  contextWhoExperiences: 'Established B2B platforms, enterprise software providers, and scaling tech companies facing slowing net-new customer acquisition velocity.',
  contextSituation: 'Customer acquisition cost (CAC) continues to escalate in core markets, yet account expansion remains ad-hoc and secondary product modules suffer from single-digit attach rates.',
  contextWhyDifficult: 'Identifying latent revenue requires cross-functional data synthesis across product telemetry, contract terms, customer workflow gaps, and competitive whitespace.',
  contextContributingFactors: [
    'Siloed sales compensation structures favoring new logo acquisition over expansion',
    'Giving away advanced capabilities and high-compute features for free in core tiers',
    'Failure to map subsidiary and multi-division potential within global enterprise accounts',
    'Uncertainty regarding how to package and price emergent AI-driven workflows'
  ],
  symptomsAndConsequences: [
    {
      category: 'Net Revenue Retention',
      symptom: 'NRR stagnating at 102-105% while peer group benchmarks achieve 125-135%.',
      consequence: 'Enterprise valuation multiples depressed by 30-50% compared to top-quartile peers.'
    },
    {
      category: 'Product Monetization',
      symptom: 'Engineering invests 40% of sprint capacity in high-value features with zero incremental revenue.',
      consequence: 'R&D expenditure fails to translate into top-line margin expansion.'
    },
    {
      category: 'Account Concentration',
      symptom: 'Enterprise clients utilizing only 1 out of 6 available platform modules.',
      consequence: 'Low customer switching costs, heightened vulnerability to point-solution competitors, and churn.'
    },
    {
      category: 'Market Saturation',
      symptom: 'Inbound lead volume in flagship domestic market declining quarter-over-quarter.',
      consequence: 'Sales reps forced into aggressive price discounting to win commoditized domestic deals.'
    }
  ],
  subSubmenus: [
    {
      id: 'sec-exist-cust',
      slug: 'existing-customer-growth',
      title: 'Existing Customer Growth',
      businessQuestion: 'Where is the hidden expansion equity inside your current contracted customer base?',
      explanation: 'Existing customer growth discovers and quantifies account expansion potential through cross-selling, seat-tier upgrades, and structural installed-base monetization.',
      topics: [
        {
          title: 'Cross-Sell Discovery',
          description: 'Identify high-probability complementary product affinities across customer industry cohorts and functional teams.',
          businessEvidence: 'Product usage matrix, historical multi-product purchasing histories, and account team role distributions.',
          analysisProcess: 'Association rule mining and collaborative filtering identifying high-affinity secondary module purchases.',
          decisionsEnabled: 'Deploy automated cross-sell triggers to account executives when specific usage thresholds are achieved.'
        },
        {
          title: 'Upsell Opportunity Mapping',
          description: 'Map accounts approaching license, storage, bandwidth, or transaction tier limits before contract renewal.',
          businessEvidence: 'Billing metering logs, API call volumes, seat consumption records, and feature access attempts.',
          analysisProcess: 'Capacity saturation curves predicting the exact calendar date an account will exceed current contractual limits.',
          decisionsEnabled: 'Initiate proactive contract expansion discussions before an account experiences service throttling.'
        },
        {
          title: 'Installed Base Monetization',
          description: 'Structure systematic programs to monetize dormant customer accounts, neglected subsidiaries, and legacy licenses.',
          businessEvidence: 'Corporate hierarchical registries, parent-subsidiary trees, and historical inactive seat allocations.',
          analysisProcess: 'Corporate relationship mapping matching global parent accounts to uncontracted regional business units.',
          decisionsEnabled: 'Land master service agreements (MSAs) across enterprise subsidiaries with zero net-new CAC.'
        },
        {
          title: 'Expansion Journey Design',
          description: 'Architect a deterministic customer adoption journey from single-team pilot to enterprise-wide platform ubiquity.',
          businessEvidence: 'Customer onboarding milestones, time-to-value benchmarks, and champion enablement logs.',
          analysisProcess: 'Milestone-based customer progression tracking mapping behavioral triggers to commercial expansion gates.',
          decisionsEnabled: 'Align CSM compensation with milestone completion and verified account readiness for expansion.'
        },
        {
          title: 'Multi-Product Adoption Models',
          description: 'Design commercial incentives, packaged bundles, and integration paths that drive multi-solution adoption.',
          businessEvidence: 'Feature attach rates, client integration depth, and multi-product churn decay curves.',
          analysisProcess: 'Churn elasticity modeling proving that accounts adopting 3+ modules exhibit 78% lower annual churn.',
          decisionsEnabled: 'Subsidize implementation of secondary products to secure multi-year platform stickiness.'
        }
      ],
      useCase: {
        situation: 'An enterprise HR tech provider had 800 clients but 85% only utilized the basic payroll product.',
        action: 'Mapped cross-sell propensity for the performance management module based on manager headcount and platform login frequency.',
        outcome: 'Generated $9.4M in incremental expansion ARR within 6 months at a CAC 70% lower than new logo acquisition.'
      },
      kpis: [
        { name: 'Expansion ARR Growth', definition: 'Quarterly recurring revenue generated from existing account upgrades and cross-sells', target: '$4.2M' },
        { name: 'Multi-Product Attach Rate', definition: 'Percentage of customer accounts contracting two or more distinct modules', target: '42%' },
        { name: 'Expansion Conversion Velocity', definition: 'Average calendar days to close an expansion opportunity from identification', target: '32 Days' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Installed Base Expansion Matrix: Account Health vs. Latent Capacity',
        metrics: [
          { label: 'Identified Latent ARR', value: '$14.8M', delta: 'Audited' },
          { label: 'Target Expansion Accounts', value: '184', delta: '+28%' },
          { label: 'Predicted Close Velocity', value: '29 Days', delta: '-18 Days' }
        ]
      }
    },
    {
      id: 'sec-prod-pot',
      slug: 'product-revenue-potential',
      title: 'Product Revenue Potential',
      businessQuestion: 'Which dormant or unbundled product capabilities can be converted into standalone profit engines?',
      explanation: 'Product revenue potential audits feature utilization, willingness-to-pay, and packaging architectures to monetize latent product value.',
      topics: [
        {
          title: 'Feature Monetization Analysis',
          description: 'Identify high-value, compute-intensive, or mission-critical features currently given away for free in base plans.',
          businessEvidence: 'Feature usage frequency, query volume distribution, user role permissions, and customer NPS feedback.',
          analysisProcess: 'Value-to-usage quadrant mapping separating utility table-stakes features from high-willingness-to-pay capabilities.',
          decisionsEnabled: 'Unbundle advanced analytics, audit logging, or enterprise security into monetized premium add-ons.'
        },
        {
          title: 'Packaging Optimization',
          description: 'Restructure product packaging tiers (Starter, Professional, Enterprise) to maximize price realization and minimize downsell.',
          businessEvidence: 'Tier distribution percentages, feature upgrade requests, and sales discount exception requests.',
          analysisProcess: 'Conjoint analysis and feature gating elasticity simulations testing buyer purchase probability.',
          decisionsEnabled: 'Re-align tier fences to ensure mid-market buyers cannot access enterprise features without upgrading.'
        },
        {
          title: 'New Revenue Streams',
          description: 'Identify ancillary monetization opportunities: API consumption, marketplace transactions, data benchmarking, and managed services.',
          businessEvidence: 'Third-party developer API traffic, ecosystem integration requests, and anonymized benchmark inquiries.',
          analysisProcess: 'Business model feasibility modeling evaluating transaction fees, take rates, and data monetization economics.',
          decisionsEnabled: 'Launch a developer ecosystem marketplace capturing a 15% revenue share on third-party application sales.'
        },
        {
          title: 'SKU Rationalization',
          description: 'Eliminate unprofitable, confusing, or low-adoption product SKUs that complicate sales execution and create customer friction.',
          businessEvidence: 'SKU sales volume, revenue contribution by product code, and engineering maintenance overhead logs.',
          analysisProcess: 'Product P&L deconstruction identifying SKUs generating less than 2% of ARR while consuming 15% of support resources.',
          decisionsEnabled: 'Sunset legacy product tiers and consolidate the product catalog into 3 clear commercial offerings.'
        },
        {
          title: 'Premiumization Opportunities',
          description: 'Design exclusive enterprise-grade tiers with white-glove SLAs, dedicated infrastructure, and strategic advisory access.',
          businessEvidence: 'Enterprise RFP compliance requirements, SOC2 Type II audit inquiries, and uptime guarantee requests.',
          analysisProcess: 'Enterprise willingness-to-pay benchmarking across Global 2000 procurement expectations.',
          decisionsEnabled: 'Introduce an "Enterprise Ultimate" tier at a 60% price premium over standard enterprise pricing.'
        }
      ],
      useCase: {
        situation: 'A developer tooling platform was burning $80K/month in AWS compute costs for a high-performance indexing feature bundled into the $99/mo plan.',
        action: 'Conducted Feature Monetization Analysis and gated the indexing engine behind an enterprise usage-based meter.',
        outcome: 'Turned a cost center into a high-margin revenue stream, generating $2.4M in net-new high-margin ARR.'
      },
      kpis: [
        { name: 'Feature Monetization Lift', definition: 'Incremental ARR generated from newly monetized product capabilities', target: '+$2.8M' },
        { name: 'Average Selling Price (ASP)', definition: 'Mean contract value across newly packaged commercial tiers', target: '$54,000' },
        { name: 'SKU Margin Efficiency', definition: 'Contribution margin across rationalized product catalog offerings', target: '78.5%' }
      ],
      visualModel: {
        type: 'waterfall',
        caption: 'Product Packaging Optimization: Unbundling Premium Features into Dedicated High-Margin Add-ons',
        metrics: [
          { label: 'Base Plan Realization', value: '$24K/yr', delta: 'Baseline' },
          { label: 'Security & SSO Add-on', value: '+$8.5K', delta: '+35% ASP' },
          { label: 'Dedicated Compute Tier', value: '+$14K', delta: '+58% ASP' }
        ]
      }
    },
    {
      id: 'sec-mkt-pot',
      slug: 'market-revenue-potential',
      title: 'Market Revenue Potential',
      businessQuestion: 'Which adjacent industries, geographies, and partner channels offer rapid, high-margin commercial expansion?',
      explanation: 'Market revenue potential evaluates non-core growth horizons, prioritizing geographic markets, partner ecosystems, and adjacent verticals.',
      topics: [
        {
          title: 'New Segment Entry',
          description: 'Evaluate adjacent vertical industries where your core technological solution solves urgent, high-value regulatory or operational problems.',
          businessEvidence: 'Cross-industry inbound trial signups, vertical regulatory mandates, and industry RFP requirements.',
          analysisProcess: 'Segment economic attractiveness scoring factoring in competitive concentration and average contract values.',
          decisionsEnabled: 'Tailor specialized vertical packaging for healthcare, financial services, or manufacturing verticals.'
        },
        {
          title: 'Geographic Expansion',
          description: 'Identify international trade corridors and regional markets exhibiting high demand, low local competition, and favorable regulatory parity.',
          businessEvidence: 'International website traffic surges, foreign currency transaction requests, and regional partner inquiries.',
          analysisProcess: 'Cross-border market accessibility indexing evaluating compliance, tax localization, and sales cycle friction.',
          decisionsEnabled: 'Launch dedicated regional commercial hubs in high-velocity corridors (e.g., DACH, UK, APAC).'
        },
        {
          title: 'Channel Expansion',
          description: 'Activate indirect commercial distribution channels: value-added resellers (VARs), system integrators, and master distributors.',
          businessEvidence: 'Consulting firm implementation requests, channel partner inquiries, and customer third-party vendor relationships.',
          analysisProcess: 'Channel partner margin modeling and co-sell economics evaluating indirect customer acquisition leverage.',
          decisionsEnabled: 'Build an authorized certified partner program providing a 20% margin share for certified system integrators.'
        },
        {
          title: 'Ecosystem Revenue Models',
          description: 'Develop multi-sided platform models, API marketplaces, and revenue-sharing alliances with complementary software vendors.',
          businessEvidence: 'Ecosystem integration usage logs, customer workflow tech stack dependencies, and co-marketing agreements.',
          analysisProcess: 'Network effect dynamics modeling evaluating customer retention lift from ecosystem integrations.',
          decisionsEnabled: 'Monetize API integrations through tiered developer access fees and transaction revenue splits.'
        },
        {
          title: 'Partner-Led Growth',
          description: 'Structure co-selling frameworks with cloud hyperscalers (AWS, Azure, GCP) and global enterprise consultancies.',
          businessEvidence: 'Cloud marketplace draw-down budgets, hyperscaler co-sell programs, and joint customer accounts.',
          analysisProcess: 'Hyperscaler marketplace transaction modeling leveraging enterprise customer committed cloud spend.',
          decisionsEnabled: 'List offerings on AWS and Azure Marketplaces, accelerating enterprise procurement cycles by 45%.'
        }
      ],
      useCase: {
        situation: 'A North American supply chain software platform hit a growth ceiling in its domestic manufacturing vertical.',
        action: 'Executed Geographic & Channel Expansion analysis, targeting European automotive suppliers through a Tier-1 German SI partner.',
        outcome: 'Secured 14 enterprise contracts in Europe worth $8.2M in ARR within the first year of partner enablement.'
      },
      kpis: [
        { name: 'Adjacent Market Revenue Share', definition: 'Percentage of total company ARR generated outside the legacy core market', target: '28%' },
        { name: 'Partner-Sourced Pipeline Value', definition: 'Total qualified pipeline generated through indirect channel partners', target: '$12.4M' },
        { name: 'Market Entry Payback Velocity', definition: 'Months to recover initial capital deployed in new market or vertical expansion', target: '8.4 Mo' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Market Adjacency Opportunity Matrix: Strategic Market Fit vs. Execution Complexity',
        metrics: [
          { label: 'Prioritized Adjacent Verticals', value: '3 Sectors', delta: '$420M TAM' },
          { label: 'Partner Channel Pipeline', value: '$8.6M', delta: '+45% YoY' },
          { label: 'International Revenue', value: '24.2%', delta: '+11% YoY' }
        ]
      }
    },
    {
      id: 'sec-ai-pot',
      slug: 'ai-revenue-potential',
      title: 'AI Revenue Potential',
      businessQuestion: 'How can artificial intelligence capabilities be packaged and monetized as high-margin, scalable revenue lines?',
      explanation: 'AI revenue potential designs commercial models for AI products, moving beyond novelty chatbots to autonomous workflow agents with measurable ROI.',
      topics: [
        {
          title: 'AI-Led Products',
          description: 'Build and launch standalone autonomous software modules that execute complex cognitive tasks end-to-end.',
          businessEvidence: 'Customer manual workflow hours, repetitive back-office task bottlenecks, and third-party AI model benchmarks.',
          analysisProcess: 'Task economic value calculation comparing human labor costs against automated AI execution accuracy.',
          decisionsEnabled: 'Price AI modules based on labor hours saved rather than traditional per-seat licensing.'
        },
        {
          title: 'AI Subscription Models',
          description: 'Structure predictable recurring subscription tiers for continuous AI optimization, fine-tuning, and model governance.',
          businessEvidence: 'Customer token consumption patterns, compute cost volatility, and enterprise budget allocation models.',
          analysisProcess: 'Hybrid packaging combining a predictable base platform fee with a capped usage-based consumption tier.',
          decisionsEnabled: 'Protect corporate gross margins by establishing automated overage buffers on heavy compute utilization.'
        },
        {
          title: 'AI Advisory Services',
          description: 'Package high-margin strategic readiness, data architecture preparation, and prompt engineering advisory offerings.',
          businessEvidence: 'Enterprise client data hygiene deficiencies, security review objections, and change management friction.',
          analysisProcess: 'Advisory margin modeling and service-to-software conversion ratios.',
          decisionsEnabled: 'Deliver premium onboarding advisory services at 65% gross margins that accelerate software deployment.'
        },
        {
          title: 'Digital Monetization',
          description: 'Monetize proprietary industry benchmarking data, predictive models, and aggregated sector telemetry.',
          businessEvidence: 'De-identified aggregate transaction datasets, industry benchmark queries, and proprietary data moats.',
          analysisProcess: 'Data asset valuation and privacy-preserving synthetic data benchmarking framework design.',
          decisionsEnabled: 'Launch an executive data benchmarking subscription for industry C-suite leaders.'
        },
        {
          title: 'Autonomous Revenue Channels',
          description: 'Deploy AI-driven autonomous commerce agents that handle micro-transactions, automated renewals, and self-service expansion.',
          businessEvidence: 'Low-touch customer self-service requests, payment retry histories, and automated renewal logs.',
          analysisProcess: 'Autonomous transaction flow testing and security governance compliance validation.',
          decisionsEnabled: 'Automate contract expansion for low-touch mid-market accounts, reducing AE overhead to zero.'
        }
      ],
      useCase: {
        situation: 'An insurance claims software provider had built an internal AI document parsing tool but offered it as a free feature.',
        action: 'Repackaged the AI capability as an outcome-based "Autonomous Claims Accelerator" charging $4.50 per validated claim.',
        outcome: 'Generated $3.6M in net-new high-margin revenue with 82% gross margins within 9 months.'
      },
      kpis: [
        { name: 'AI Module Revenue Contribution', definition: 'Annualized recurring revenue derived specifically from AI-powered products', target: '$4.8M' },
        { name: 'AI Gross Margin Realization', definition: 'Gross margin percentage on AI offerings after factoring LLM compute and API costs', target: '74%' },
        { name: 'Outcome-Based Pricing Adoption', definition: 'Percentage of clients adopting usage-based or value-based AI pricing models', target: '38%' }
      ],
      visualModel: {
        type: 'architecture',
        caption: 'AI Monetization Architecture: Value-Based Pricing Models vs. Compute Cost Fences',
        metrics: [
          { label: 'Active AI Subscriptions', value: '210 Clients', delta: '+64%' },
          { label: 'Net AI Gross Margin', value: '76.4%', delta: '+8.2%' },
          { label: 'Labor Hours Saved/Client', value: '142 Hrs/Mo', delta: 'Audited' }
        ]
      }
    }
  ],
  methodologyWorkflow: [
    {
      stepNumber: '01',
      title: 'Commercial Opportunity Audit',
      input: 'Customer usage telemetry, contract database, feature requests, and regional website traffic.',
      activity: 'Execute multi-dimensional opportunity mining across existing accounts, latent features, and adjacent sectors.',
      output: 'Comprehensive inventory of unharvested commercial revenue opportunities.'
    },
    {
      stepNumber: '02',
      title: 'Value & Feasibility Scoring',
      input: 'Development cost estimates, sales cycle assumptions, competitive density, and buyer willingness-to-pay.',
      activity: 'Score each opportunity on a 2x2 matrix: Expected Economic Return vs. Execution Complexity.',
      output: 'Prioritized top-decile opportunity portfolio with verified business cases.'
    },
    {
      stepNumber: '03',
      title: 'Packaging & Pricing Architecture',
      input: 'Willingness-to-pay data, unit cost economics, feature usage distributions, and competitor pricing.',
      activity: 'Design commercial packaging tiers, usage meters, value-based fences, and add-on structures.',
      output: 'Validated commercial offer sheets, pricing models, and contract addendum templates.'
    },
    {
      stepNumber: '04',
      title: 'Pilot Commercialization',
      input: 'Selected customer cohort, dedicated sales enablement materials, and pilot incentive programs.',
      activity: 'Launch controlled commercial pilots with 20-30 target accounts to validate conversion and price realization.',
      output: 'Empirical pilot conversion telemetry and validated unit-economic proof points.'
    },
    {
      stepNumber: '05',
      title: 'Full-Scale GTM Orchestration',
      input: 'Pilot results, finalized sales collateral, commission plans, and automated marketing workflows.',
      activity: 'Scale commercial execution across marketing campaigns, outbound sales, and CSM expansion playbooks.',
      output: 'Operationalized expansion revenue streams contributing to quarterly ARR targets.'
    }
  ],
  primaryKpis: [
    {
      name: 'Expansion ARR Growth Rate',
      definition: 'Year-over-year percentage increase in recurring revenue generated from existing contracted accounts.',
      formula: '[ (Current Year Expansion ARR − Prior Year Expansion ARR) ÷ Prior Year Expansion ARR ] × 100',
      unit: '%',
      reportingPeriod: 'Annualized',
      baseline: '12.4%',
      target: '35.0%',
      illustrativeValue: '38.2%',
      interpretation: 'Accelerating expansion ARR proves that installed-base monetization is effectively compounding enterprise value at low marginal CAC.',
      category: 'Commercial'
    },
    {
      name: 'Net Expansion Margin Contribution',
      definition: 'Gross margin percentage realized on expansion and add-on sales relative to net-new customer acquisition.',
      formula: '[ (Expansion Revenue − Direct Delivery & Servicing Costs) ÷ Expansion Revenue ] × 100',
      unit: '%',
      reportingPeriod: 'Quarterly',
      baseline: '64.0%',
      target: '82.0%',
      illustrativeValue: '84.5%',
      interpretation: 'Expansion revenue carries significantly higher contribution margins because marketing and customer onboarding costs are already amortized.',
      category: 'Unit Economics'
    },
    {
      name: 'Cross-Sell Attachment Velocity',
      definition: 'Percentage of existing customer accounts adopting a secondary product within 12 months of initial onboarding.',
      formula: '(Accounts Contracting Secondary Module within 12 Months ÷ Total Active Accounts) × 100',
      unit: '%',
      reportingPeriod: 'Monthly / Annual',
      baseline: '14.2%',
      target: '38.0%',
      illustrativeValue: '41.0%',
      interpretation: 'High cross-sell attachment transforms single point-solution contracts into unified platform partnerships with high switching costs.',
      category: 'Commercial'
    },
    {
      name: 'New-Segment Revenue Share',
      definition: 'Percentage of total company quarterly ARR derived from newly entered vertical markets or geographic territories.',
      formula: '(ARR Generated from New Segments Launched in Last 18 Months ÷ Total Quarterly ARR) × 100',
      unit: '%',
      reportingPeriod: 'Quarterly',
      baseline: '4.5%',
      target: '20.0%',
      illustrativeValue: '22.8%',
      interpretation: 'Diversifying revenue across new vertical segments insulates the enterprise against saturation and macroeconomic cycles in legacy sectors.',
      category: 'Executive'
    },
    {
      name: 'Time to Monetization Velocity',
      definition: 'Median days elapsed from product feature launch to achieving the first $100K in verified contractual ARR.',
      formula: 'Calendar Days from Feature GA Launch Date to Cumulative Contracted ARR = $100,000',
      unit: 'Days',
      reportingPeriod: 'Per Release',
      baseline: '148 Days',
      target: '45 Days',
      illustrativeValue: '42 Days',
      interpretation: 'Compressing time to monetization ensures that engineering investments generate immediate commercial cash flow.',
      category: 'Operational'
    }
  ],
  scenarios: [
    {
      title: 'B2B Logistics Platform Latent Feature Monetization',
      industry: 'Supply Chain & Logistics SaaS',
      baselineSituation: '$42M ARR logistics provider experiencing customer acquisition slowdown due to macro freight rate compression.',
      observedProblem: 'Platform provided free predictive route optimization tools that cost the company $450K/yr in cloud compute while competitors charged standalone fees.',
      analysis: 'Telemetry showed that 120 of their 500 enterprise clients ran over 10,000 optimization queries monthly, capturing $15M in estimated fuel savings.',
      decisionEvaluated: 'Gated predictive optimization behind a consumption-based tier ($0.12 per optimized mile) with a 2,500-mile free monthly allowance.',
      expectedImprovement: 'Convert compute cost center into a $3M+ high-margin recurring revenue stream.',
      validatingMetrics: ['Net New ARR Generated ($3.4M in Year 1)', 'Customer Adoption Rate (76% of heavy users upgraded)', 'Gross Margin on Feature (84%)'],
      assumptions: 'Assumed customer pushback would be minimal if the ROI equation (fuel savings vs. software fee) was explicitly documented in client dashboards.'
    }
  ],
  dataConsiderations: [
    {
      title: 'Telemetry Metering Granularity & Accuracy',
      description: 'Usage-based monetization requires deterministic, auditable metering pipelines capable of handling billable event tracking without dropped queries.',
      impactLevel: 'Critical'
    },
    {
      title: 'Customer Contractual Addendum Governance',
      description: 'Unbundling features or adding consumption tiers requires legal review to ensure existing multi-year MSAs allow usage-based billing addendums.',
      impactLevel: 'High'
    },
    {
      title: 'Sales Compensation Alignment',
      description: 'Account Executives and CSMs must be provided clear commission accelerators for expansion and cross-selling to prevent focus from drifting to new logos.',
      impactLevel: 'High'
    }
  ],
  decisionSupport: [
    {
      priority: 'Immediate (Weeks 1-3)',
      focusArea: 'Feature Utilization & Willingness-to-Pay Audit',
      keyMetrics: 'Compute Cost per Feature, Client Usage Concentration',
      tradeOffs: 'Gating legacy features risks brief client resistance if not paired with clear ROI justification.',
      recommendedAction: 'Audit cloud infrastructure costs per module and identify high-value features currently included in free tiers.'
    },
    {
      priority: 'Secondary (Weeks 4-8)',
      focusArea: 'Cross-Sell Journey Engineering',
      keyMetrics: 'Module Attach Rates, Customer Health by Cohort',
      tradeOffs: 'Allocating sales enablement time to expansion collateral versus net-new outbound campaigns.',
      recommendedAction: 'Equip Account Managers with automated usage alerts that trigger expansion proposals when clients hit 85% capacity.'
    },
    {
      priority: 'Strategic (Weeks 9-12)',
      focusArea: 'AI & Ecosystem Commercial Packaging',
      keyMetrics: 'Value-Based Pricing Adoption, Net Margin on AI',
      tradeOffs: 'Investing in dedicated AI packaging versus keeping AI features as generic product enhancements.',
      recommendedAction: 'Package autonomous workflows into outcome-based tiers that capture a share of the direct labor costs eliminated for the client.'
    }
  ],
  visualTheme: 'discovery'
};

