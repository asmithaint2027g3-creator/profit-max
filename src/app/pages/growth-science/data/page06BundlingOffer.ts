import { GrowthCapabilityPageData } from '../types';

export const page06BundlingOfferData: GrowthCapabilityPageData = {
  pageNumber: '06',
  title: 'Revenue Bundling & Offer Engineering',
  slug: 'revenue-bundling-offer-engineering',
  heroHeadline: 'Engineer Offers That Connect Customer Value with Profitable Growth',
  heroSupporting: 'Structure high-converting commercial packages, solution bundles, and pricing tiers that elevate Average Order Value (AOV), protect gross margins, and accelerate multi-product adoption.',
  businessProblemSummary: 'Companies frequently assemble uncalibrated product bundles by throwing random features together, resulting in customer confusion, cannibalized standalone sales, and depressed gross margins.',
  targetDecisionMakers: ['Chief Commercial Officers', 'VPs of Product Marketing', 'Chief Revenue Officers', 'Pricing & Packaging Directors'],
  contextWhoExperiences: 'Multi-product software companies, industrial manufacturers, and technology-enabled service providers seeking to increase contract magnitude.',
  contextSituation: 'Sales reps struggle to explain complicated a-la-carte pricing, leading buyers to purchase only the cheapest base tier while ignoring high-margin add-ons.',
  contextWhyDifficult: 'Effective bundling requires balancing customer willingness-to-pay, feature cost-to-serve economics, and cross-functional delivery capacity.',
  contextContributingFactors: [
    'Complex multi-SKU catalogs that overwhelm prospective buyers during evaluation',
    'Bundling high-cost manual services into software licenses without dedicated margin buffers',
    'Failure to align packaging tiers with distinct enterprise buyer maturity stages',
    'Unmonitored feature cannibalization eroding standalone product revenue lines'
  ],
  symptomsAndConsequences: [
    {
      category: 'Average Order Value',
      symptom: 'Average selling price (ASP) flatlining despite shipping 12 major product enhancements.',
      consequence: 'Enterprise contract value fails to scale with product investment; revenue growth stalls.'
    },
    {
      category: 'Sales Cycle Friction',
      symptom: 'Proposals taking 3+ rounds of commercial negotiation to finalize packaging terms.',
      consequence: 'Extended sales cycles, buyer decision fatigue, and increased deal slip.'
    },
    {
      category: 'Margin Compression',
      symptom: 'High-adoption bundles yielding lower gross margins than standalone product sales.',
      consequence: 'Top-line revenue expands while corporate profitability and cash generation decline.'
    },
    {
      category: 'Tier Cannibalization',
      symptom: 'Enterprise-grade buyers buying the "Mid-Tier" package because feature gating is too permissive.',
      consequence: 'Leaving millions of dollars of enterprise willingness-to-pay unharvested on the table.'
    }
  ],
  subSubmenus: [
    {
      id: 'sec-bundle-sci',
      slug: 'product-bundling-science',
      title: 'Product Bundling Science',
      businessQuestion: 'Which combinations of software, AI agents, and services maximize contract value and gross margin?',
      explanation: 'Product bundling science utilizes conjoint analysis and cost-to-serve modeling to architect high-compounding commercial bundles.',
      topics: [
        {
          title: 'Solution Bundles',
          description: 'Package complementary software modules together into cohesive end-to-end solutions that solve complete business workflows.',
          businessEvidence: 'Product usage correlation matrices, joint feature evaluation notes, and customer RFP requirements.',
          analysisProcess: 'Affinity clustering and joint utility modeling evaluating customer willingness-to-pay for packaged solutions.',
          decisionsEnabled: 'Retire standalone point solutions and mandate sales of unified solution bundles.'
        },
        {
          title: 'Industry Bundles',
          description: 'Pre-configure specialized industry bundles with pre-built regulatory templates, integrations, and workflows for specific verticals.',
          businessEvidence: 'Vertical compliance mandates, industry-specific data connectors, and sector procurement criteria.',
          analysisProcess: 'Vertical value mapping tailoring feature combinations to healthcare, finance, or manufacturing buyers.',
          decisionsEnabled: 'Command a 25-35% price premium by selling purpose-built industry vertical packages.'
        },
        {
          title: 'AI + Service Bundles',
          description: 'Pair autonomous AI software capabilities with high-value human implementation, validation, and advisory services.',
          businessEvidence: 'Customer change management hurdles, AI prompt fine-tuning requirements, and onboarding logs.',
          analysisProcess: 'Blended margin modeling balancing software gross margins (80%+) with delivery service margins (40%+).',
          decisionsEnabled: 'De-risk AI adoption for enterprise clients by bundling white-glove setup while safeguarding a 70%+ composite margin.'
        },
        {
          title: 'Premium Bundles',
          description: 'Create elite commercial packages containing dedicated infrastructure, 24/7 mission-critical SLAs, and executive advisory access.',
          businessEvidence: 'Enterprise security questionnaire demands, uptime SLA requirements, and executive sponsor requests.',
          analysisProcess: 'Price elasticity testing measuring enterprise willingness to pay for risk mitigation and premium service.',
          decisionsEnabled: 'Capture maximum economic value from Global 2000 enterprise accounts.'
        },
        {
          title: 'Outcome-Based Bundles',
          description: 'Structure commercial agreements where software and service fees are tied to verified client business outcomes.',
          businessEvidence: 'Customer economic value realization metrics, verified cost savings records, and revenue lift data.',
          analysisProcess: 'Risk-adjusted outcome underwriting calculating probability distributions of achieving contractual milestones.',
          decisionsEnabled: 'Win massive enterprise deals by sharing upside while securing a high baseline floor fee.'
        }
      ],
      useCase: {
        situation: 'A marketing technology provider had 5 standalone software tools; 80% of clients only bought 1 tool.',
        action: 'Architected 3 unified Solution Bundles (Growth, Scale, Enterprise) that eliminated individual tool purchasing.',
        outcome: 'Average Order Value (AOV) increased from $18K to $46K, and multi-product adoption jumped to 64% in two quarters.'
      },
      kpis: [
        { name: 'Bundle Adoption Rate', definition: 'Percentage of new contracts executed as multi-product bundles rather than point solutions', target: '72%' },
        { name: 'Average Selling Price Lift', definition: 'Percentage increase in mean contract ARR following bundle introduction', target: '+44%' },
        { name: 'Composite Bundle Gross Margin', definition: 'Blended gross margin percentage realized across bundled offerings', target: '78%' }
      ],
      visualModel: {
        type: 'architecture',
        caption: 'Commercial Solution Bundling Architecture: Core Platform vs. Monetized Add-on Modules',
        metrics: [
          { label: 'Bundle Attach Rate', value: '74.2%', delta: '+28%' },
          { label: 'Average Contract Value', value: '$68.4K', delta: '+$22K' },
          { label: 'Gross Margin Buffer', value: '79.2%', delta: '+5.4%' }
        ]
      }
    },
    {
      id: 'sec-comm-pack',
      slug: 'commercial-packaging',
      title: 'Commercial Packaging',
      businessQuestion: 'How should pricing tiers, feature fences, and usage boundaries be structured to prevent downselling?',
      explanation: 'Commercial packaging designs clear, intuitive pricing tiers that guide buyers into the appropriate tier based on scale and value.',
      topics: [
        {
          title: 'Tier Design',
          description: 'Establish clear, differentiated packaging tiers (Good, Better, Best) with logical feature fences that prevent mid-market downselling.',
          businessEvidence: 'Feature usage distributions, sales negotiation concession notes, and customer tier migration records.',
          analysisProcess: 'Feature gating optimization matching user job roles and organizational maturity to specific packaging tiers.',
          decisionsEnabled: 'Ensure enterprise capabilities (SSO, audit logs, custom roles) are strictly reserved for the top tier.'
        },
        {
          title: 'Subscription Packaging',
          description: 'Design recurring subscription terms, multi-year commitment incentives, and flexible seat allocation rules.',
          businessEvidence: 'Contract duration trends, renewal negotiation timelines, and customer cash flow preferences.',
          analysisProcess: 'Discount-to-duration optimization calculating net present value of 3-year upfront contracts versus annual billing.',
          decisionsEnabled: 'Offer 12-15% discounts for multi-year commitments to lock in long-term enterprise retention.'
        },
        {
          title: 'Enterprise Packaging',
          description: 'Structure custom enterprise agreements that bundle unlimited team licenses, sandbox environments, and custom SLAs.',
          businessEvidence: 'Procurement department legal requirements, enterprise architecture demands, and multi-department usage.',
          analysisProcess: 'Enterprise value fencing modeling total organizational utility across multiple subsidiaries.',
          decisionsEnabled: 'Close 6-figure enterprise platform contracts with standardized master terms.'
        },
        {
          title: 'Value-Based Packaging',
          description: 'Anchor packaging tiers to customer value metrics: revenue processed, records managed, or claims adjudicated.',
          businessEvidence: 'Customer business output metrics, client ROI reports, and operational throughput statistics.',
          analysisProcess: 'Value metric alignment ensuring software cost scales proportionally with the economic value delivered to the buyer.',
          decisionsEnabled: 'Align pricing with customer business growth, creating automatic, frictionless account expansion.'
        },
        {
          title: 'Pricing Architecture',
          description: 'Define the mathematical relationship between base platform fees, user license costs, and consumption overages.',
          businessEvidence: 'Billing ledger data, compute cost fluctuations, and customer invoice payment disputes.',
          analysisProcess: 'Hybrid pricing calibration balancing recurring predictability with high-margin consumption upside.',
          decisionsEnabled: 'Protect corporate revenue predictability while capturing upside from high-volume customer growth.'
        }
      ],
      useCase: {
        situation: 'A B2B analytics platform suffered from 60% of Fortune 500 prospects purchasing their $12K "Team" tier.',
        action: 'Moved SSO, RBAC, and dedicated customer success strictly into the "Enterprise" tier starting at $65K.',
        outcome: 'Enterprise tier adoption rose to 82% among enterprise buyers, doubling overall company ARR within 12 months.'
      },
      kpis: [
        { name: 'Enterprise Tier Share', definition: 'Percentage of total company ARR generated by the top-tier enterprise package', target: '65%' },
        { name: 'Downsell Frequency Rate', definition: 'Percentage of prospects requesting or successfully downgrading to a lower tier', target: '< 6%' },
        { name: 'Multi-Year Contract Share', definition: 'Percentage of new bookings contracted on 2- or 3-year non-cancelable terms', target: '48%' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Commercial Tier Packaging Matrix: Feature Fencing vs. Buyer Willingness-to-Pay',
        metrics: [
          { label: 'Starter / Team Tier', value: '$18K/yr', delta: 'Self-Serve' },
          { label: 'Professional Tier', value: '$45K/yr', delta: 'High Velocity' },
          { label: 'Enterprise Platform', value: '$110K/yr', delta: 'High Margin' }
        ]
      }
    },
    {
      id: 'sec-rev-exp',
      slug: 'revenue-expansion-models',
      title: 'Revenue Expansion Models',
      businessQuestion: 'What systematic triggers and playbooks drive multi-product conversion and post-sale upsells?',
      explanation: 'Revenue expansion models design automated attach-rate mechanics, upsell engines, and expansion playbooks across customer lifecycles.',
      topics: [
        {
          title: 'Attach Rate Optimization',
          description: 'Measure and systematically elevate the attach rate of high-margin add-on modules during initial sales cycles.',
          businessEvidence: 'Sales proposal line-item records, CPQ quote configurations, and rep bundling behaviors.',
          analysisProcess: 'Attach elasticity analysis testing the optimal discount incentives to attach secondary modules at signing.',
          decisionsEnabled: 'Incentivize reps with 1.5x commission accelerators for attaching analytics or security modules at initial sale.'
        },
        {
          title: 'Multi-Product Conversion',
          description: 'Convert single-product accounts into multi-product enterprise platform users through targeted in-app prompts and CSM campaigns.',
          businessEvidence: 'Product usage telemetry, feature click-tracking, and administrative permission requests.',
          analysisProcess: 'Usage inflection modeling detecting when a single-product customer reaches functional workflow boundaries.',
          decisionsEnabled: 'Trigger automated 30-day multi-product trials when customer usage indicates workflow maturity.'
        },
        {
          title: 'Strategic Upsell Engines',
          description: 'Build algorithmic engines that notify account teams when an account is ready for volume tier or license count upgrades.',
          businessEvidence: 'License seat utilization percentages, API throughput rates, and storage consumption curves.',
          analysisProcess: 'Automated predictive threshold monitoring alerting CSMs 60 days before an account hits capacity limits.',
          decisionsEnabled: 'Execute proactive upsell amendments before accounts experience service disruptions.'
        },
        {
          title: 'Expansion Playbooks',
          description: 'Standardize proven expansion playbooks for account managers targeting new corporate divisions and subsidiaries.',
          businessEvidence: 'Enterprise organizational charts, subsidiary ownership databases, and case study collateral.',
          analysisProcess: 'Land-and-expand playbook modeling codifying the exact progression from single-team adoption to enterprise MSA.',
          decisionsEnabled: 'Replicate successful land-and-expand sales motions across the entire strategic account portfolio.'
        },
        {
          title: 'Cross-Sell Automation',
          description: 'Deploy automated in-app purchase triggers and contextual recommendations that allow users to self-serve add-on modules.',
          businessEvidence: 'In-app upgrade click logs, credit card transaction records, and administrative upgrade requests.',
          analysisProcess: 'Self-service conversion funnel optimization streamlining in-app checkout and billing updates.',
          decisionsEnabled: 'Capture high-margin self-service expansion revenue with zero sales rep touch.'
        }
      ],
      useCase: {
        situation: 'An enterprise security platform had a 12% attach rate on its threat-intelligence add-on module.',
        action: 'Instituted Attach Rate Optimization: bundled 90 days of threat intelligence into all enterprise proposals with automated opt-out.',
        outcome: 'Add-on attach rate jumped to 58%, adding $4.1M in high-margin recurring ARR with less than 4% post-trial cancellation.'
      },
      kpis: [
        { name: 'Secondary Add-On Attach Rate', definition: 'Percentage of core platform deals that include one or more paid add-on modules', target: '52%' },
        { name: 'Net Expansion Revenue Lift', definition: 'Annualized recurring revenue generated strictly through post-sale upsells and cross-sells', target: '$6.4M' },
        { name: 'Average Revenue Per Account (ARPA)', definition: 'Mean annualized recurring revenue across active customer accounts', target: '$58,000' }
      ],
      visualModel: {
        type: 'funnel',
        caption: 'Revenue Expansion Engine: Initial Contract Land, In-App Activation, and Multi-Product Upsell',
        metrics: [
          { label: 'Initial Land ACV', value: '$34K', delta: 'Entry Tier' },
          { label: 'Year 1 Expansion', value: '+$18K', delta: '+52% Lift' },
          { label: 'Mature Account ARPA', value: '$86K', delta: '2.5x Land' }
        ]
      }
    }
  ],
  methodologyWorkflow: [
    {
      stepNumber: '01',
      title: 'Catalog & Margin Audit',
      input: 'Complete SKU list, historical sales transactions, direct cost-to-serve ledgers, and rep discounting histories.',
      activity: 'Audit product catalog complexity, evaluate gross margin per SKU, and identify underperforming point solutions.',
      output: 'Comprehensive SKU Profitability & Complexity Scorecard.'
    },
    {
      stepNumber: '02',
      title: 'Customer Willingness-to-Pay Research',
      input: 'Customer interview transcripts, conjoint analysis survey data, and competitive packaging benchmarks.',
      activity: 'Quantify customer value perception across features, identifying must-have core capabilities versus premium add-ons.',
      output: 'Empirical Feature Value & Willingness-to-Pay Matrix.'
    },
    {
      stepNumber: '03',
      title: 'Offer & Tier Engineering',
      input: 'Feature value data, target gross margin thresholds, and buyer persona requirements.',
      activity: 'Design 3 differentiated commercial tiers, configure high-affinity bundles, and establish rigid feature fences.',
      output: 'Optimized Commercial Offer Architecture and CPQ catalog definitions.'
    },
    {
      stepNumber: '04',
      title: 'Sales Enablement & CPQ Configuration',
      input: 'New packaging architecture, pricing calculators, sales battlecards, and proposal templates.',
      activity: 'Configure CPQ approval rules, update sales proposals, and conduct intensive rep bundling workshops.',
      output: 'Enabled commercial sales team with standardized bundling playbooks.'
    },
    {
      stepNumber: '05',
      title: 'Adoption & Margin Monitoring',
      input: 'Live quote generation feeds, closed deal terms, realized discounts, and customer onboarding feedback.',
      activity: 'Track bundle attach rates, monitor tier migration, and measure composite gross margin realization.',
      output: 'Continuous offer performance telemetry maintaining maximum contract profitability.'
    }
  ],
  primaryKpis: [
    {
      name: 'Average Revenue Per Account (ARPA)',
      definition: 'Mean annualized contract value across all active contracted customer organizations.',
      formula: 'Total Annualized Recurring Revenue ÷ Total Active Contracted Accounts',
      unit: '$ / Account',
      reportingPeriod: 'Monthly / Quarterly',
      baseline: '$28,400',
      target: '$55,000',
      illustrativeValue: '$56,200',
      interpretation: 'Doubling ARPA through structured packaging and solution bundling expands corporate revenue without requiring costly headcount scaling.',
      category: 'Commercial'
    },
    {
      name: 'Multi-Product Attach Rate',
      definition: 'Percentage of customer accounts contracting two or more distinct platform modules.',
      formula: '(Accounts with ≥2 Active Modules ÷ Total Active Customer Accounts) × 100',
      unit: '%',
      reportingPeriod: 'Quarterly',
      baseline: '18.5%',
      target: '55.0%',
      illustrativeValue: '58.4%',
      interpretation: 'A 58% multi-product attach rate proves that solution bundles are successfully displacing single point solutions in customer workflows.',
      category: 'Commercial'
    },
    {
      name: 'Composite Bundle Gross Margin',
      definition: 'Gross margin percentage realized across bundled offerings factoring in software, compute, and delivery services.',
      formula: '[ (Total Bundle Revenue − Total COGS − Direct Delivery Labor) ÷ Total Bundle Revenue ] × 100',
      unit: '%',
      reportingPeriod: 'Monthly',
      baseline: '64.2%',
      target: '78.0%',
      illustrativeValue: '79.1%',
      interpretation: 'Maintaining gross margins near 80% across complex bundles confirms that service and third-party delivery costs are properly buffered.',
      category: 'Unit Economics'
    },
    {
      name: 'Proposal Close Velocity',
      definition: 'Median days elapsed from formal proposal issuance to fully executed commercial contract.',
      formula: 'Calendar Days from Proposal Delivery to Contract Signature',
      unit: 'Days',
      reportingPeriod: 'Monthly',
      baseline: '48 Days',
      target: '22 Days',
      illustrativeValue: '20 Days',
      interpretation: 'Streamlined commercial packaging eliminates confusing a-la-carte negotiations, cutting proposal turnaround time by more than half.',
      category: 'Operational'
    },
    {
      name: 'Tier Migration Upgrade Velocity',
      definition: 'Percentage of customer accounts upgrading from entry-level to higher commercial tiers within 18 months.',
      formula: '(Accounts Upgrading Tier within 18 Months ÷ Total Cohort Inception Accounts) × 100',
      unit: '%',
      reportingPeriod: 'Annualized',
      baseline: '11.0%',
      target: '32.0%',
      illustrativeValue: '34.5%',
      interpretation: 'High upgrade velocity validates that tier gating criteria successfully encourage growing clients to step up to enterprise plans.',
      category: 'Commercial'
    }
  ],
  scenarios: [
    {
      title: 'DevOps Infrastructure Platform Commercial Repackaging',
      industry: 'Cloud Infrastructure & Developer Tools',
      baselineSituation: '$36M ARR infrastructure provider offering 14 unbundled micro-services, causing buyer confusion and low contract values.',
      observedProblem: 'Customers purchased an average of 1.2 micro-services, while enterprise clients aggressively negotiated custom discounts on every item.',
      analysis: 'Conjoint research revealed that buyers wanted simplified end-to-end solutions: CI/CD, Observability, and Security packaged together.',
      decisionEvaluated: 'Consolidated 14 micro-services into 3 cohesive Solution Bundles: Developer Core ($25K), Team Scale ($60K), and Enterprise Cloud ($140K).',
      expectedImprovement: 'Increase Average Order Value by 60% and accelerate sales cycle velocity.',
      validatingMetrics: ['ARPA (from $31K to $58K)', 'Multi-Product Adoption (from 16% to 62%)', 'Sales Cycle Duration (from 64 to 34 days)'],
      assumptions: 'Assumed existing customers would be grandfathered into legacy pricing for 12 months before migrating to new packaging structures.'
    }
  ],
  dataConsiderations: [
    {
      title: 'Product Usage Affinity Correlation Integrity',
      description: 'Bundling decisions must be backed by quantitative telemetry proving that customers who use Module A frequently adopt Module B.',
      impactLevel: 'Critical'
    },
    {
      title: 'Direct Labor Cost Tracking for Service Bundles',
      description: 'When packaging advisory or implementation services with software, delivery hours must be precisely tracked to prevent margin erosion.',
      impactLevel: 'High'
    },
    {
      title: 'CPQ Gating & Rule Enforcement',
      description: 'Sales quoting tools must physically prevent reps from manually unbundling features or discounting core modules without authorized sign-off.',
      impactLevel: 'High'
    }
  ],
  decisionSupport: [
    {
      priority: 'Immediate (Weeks 1-3)',
      focusArea: 'SKU Consolidation & Tier Gating',
      keyMetrics: 'SKU Count, Feature Gating Compliance',
      tradeOffs: 'Eliminating obscure standalone SKUs simplifies sales execution but requires retiring low-volume legacy offerings.',
      recommendedAction: 'Consolidate the product catalog into 3 standardized tiers and gate enterprise security features strictly behind the top tier.'
    },
    {
      priority: 'Secondary (Weeks 4-8)',
      focusArea: 'Solution Bundle Packaging & CPQ Rollout',
      keyMetrics: 'Bundle Attach Rate, Average Order Value (AOV)',
      tradeOffs: 'Mandating solution bundles requires retraining sales reps to sell strategic business value rather than technical features.',
      recommendedAction: 'Launch pre-configured solution bundles backed by commission accelerators for multi-product contract execution.'
    },
    {
      priority: 'Strategic (Weeks 9-12)',
      focusArea: 'Automated In-App Expansion Triggers',
      keyMetrics: 'Self-Service Expansion Revenue, ARPA Lift',
      tradeOffs: 'Investing engineering resources into self-service billing workflows versus core software feature development.',
      recommendedAction: 'Build automated in-app prompts that enable customers approaching usage limits to upgrade their tier with one click.'
    }
  ],
  visualTheme: 'bundling'
};

