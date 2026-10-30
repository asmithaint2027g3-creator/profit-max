import { GrowthCapabilityPageData } from '../types';

export const page02PhysicsData: GrowthCapabilityPageData = {
  pageNumber: '02',
  title: 'Revenue Physics',
  slug: 'revenue-physics',
  heroHeadline: 'Understand the Mechanics Behind Profitable Revenue Growth',
  heroSupporting: 'Deconstruct revenue into deterministic empirical equations. Model driver interactions, unit economics, cohort compounding, and defensible white-space profit pools.',
  businessProblemSummary: 'Most enterprise revenue models treat top-line revenue as an uncalibrated black box. When CAC spikes, sales cycles lengthen, or margins erode, traditional reporting highlights the symptoms but fails to identify the underlying structural friction.',
  targetDecisionMakers: ['Chief Executive Officers', 'Chief Revenue Officers', 'Chief Financial Officers', 'VPs of Revenue Operations'],
  contextWhoExperiences: 'B2B enterprise leaders, high-growth technology platforms, and industrial corporations operating complex multi-product commercial engines.',
  contextSituation: 'Revenue targets are raised annually by 20-40%, but sales teams struggle with declining conversion rates, rising acquisition costs, and hidden margin decay.',
  contextWhyDifficult: 'Revenue is governed by non-linear systemic dynamics: a 5% slippage in stage-to-stage conversion compounds exponentially across a 9-month sales cycle, obscuring root-cause bottlenecks.',
  contextContributingFactors: [
    'Blended metrics masking cohort-level profitability variance',
    'Disjointed GTM attribution between marketing, sales, and customer success',
    'Uncontrolled price discounting eroding gross margins',
    'Over-reliance on top-of-funnel volume rather than pipeline velocity'
  ],
  symptomsAndConsequences: [
    {
      category: 'Pipeline Velocity',
      symptom: 'Sales cycles lengthening from 90 to 145+ days without clear explanation.',
      consequence: 'Working capital strain, missed quarterly forecast by >18%, and pipeline decay.'
    },
    {
      category: 'Unit Economics',
      symptom: 'LTV:CAC ratio deteriorating below 2.5x while top-line revenue expands.',
      consequence: 'Cash burn accelerating despite revenue growth; scaling destroys enterprise valuation.'
    },
    {
      category: 'Gross Margin',
      symptom: 'Tail-end customer segments demanding extensive bespoke implementation.',
      consequence: 'Gross margin compressed by 8-14% due to hidden cost-to-serve overhead.'
    },
    {
      category: 'Forecast Precision',
      symptom: 'Sales leaders relying on subjective rep confidence for pipeline close rates.',
      consequence: 'Board-level forecast misses and reactive headcount/budget restructuring.'
    }
  ],
  subSubmenus: [
    {
      id: 'sec-rev-arch',
      slug: 'revenue-architecture',
      title: 'Revenue Architecture',
      businessQuestion: 'How does every commercial lever in your business model interact to generate cash flow?',
      explanation: 'Revenue architecture models the foundational mathematics of your go-to-market engine, establishing deterministic links between volume, conversion efficiency, contract magnitude, and compounding duration.',
      topics: [
        {
          title: 'Revenue Driver Mapping',
          description: 'Isolate and quantify primary, secondary, and tertiary growth levers across the entire commercial lifecycle.',
          businessEvidence: 'Historical pipeline stage data, deal disposition logs, and multi-touch touchpoint attribution.',
          analysisProcess: 'Construct deterministic causal flow graphs connecting lead velocity, stage conversion, and net retention.',
          decisionsEnabled: 'Identify which 2-3 specific commercial levers deliver 80% of revenue leverage.'
        },
        {
          title: 'Revenue Equation Modeling',
          description: 'Formalize enterprise revenue into parametric equations: R = (Opp Count × Win Rate × ACV) ÷ Cycle Length.',
          businessEvidence: '36-month transaction logs, billing schedules, and contracted ARR cohorts.',
          analysisProcess: 'Monte Carlo simulations across macro elasticity and micro-conversion coefficients.',
          decisionsEnabled: 'Simulate revenue outcomes under variable market conditions without financial guesswork.'
        },
        {
          title: 'Demand-Supply Dynamics',
          description: 'Balance market customer acquisition pressure against operational delivery and onboarding capacity.',
          businessEvidence: 'Customer onboarding backlog, service utilization rates, and SLA fulfillment times.',
          analysisProcess: 'Dynamic queue modeling across sales handover and implementation constraints.',
          decisionsEnabled: 'Prevent GTM teams from selling ahead of technical delivery capacity.'
        },
        {
          title: 'Revenue Velocity Modeling',
          description: 'Measure the velocity of capital generation per opportunity per day through the revenue funnel.',
          businessEvidence: 'Opportunity creation timestamps, stage duration logs, and closed-won values.',
          analysisProcess: 'Velocity indexing: V = (Opportunities × Avg Value × Win Rate) / Sales Cycle Days.',
          decisionsEnabled: 'Reallocate SDR and AE resources to high-velocity ICP segments.'
        },
        {
          title: 'Growth Leverage Analysis',
          description: 'Evaluate the marginal ROI of deploying additional capital into marketing, sales enablement, or retention.',
          businessEvidence: 'GTM headcount costs, software tooling spend, and quota attainment distributions.',
          analysisProcess: 'Marginal productivity analysis and sensitivity matrices across cost centers.',
          decisionsEnabled: 'Allocate the next $1M of growth capital where it yields maximum ARR compounding.'
        }
      ],
      useCase: {
        situation: 'A $45M ARR SaaS enterprise experienced flatlined growth despite expanding sales headcount by 35%.',
        action: 'Deployed Revenue Equation Modeling to reveal that sales cycle duration had expanded by 42 days, neutralizing rep capacity.',
        outcome: 'Streamlined approval stages and re-aligned pipeline criteria, recovering $6.4M in annualized ARR velocity.'
      },
      kpis: [
        { name: 'Sales Velocity Index', definition: 'Revenue generated per active pipeline day', target: '$14,200/day' },
        { name: 'Driver Sensitivity Ratio', definition: 'ARR delta per 1% improvement in win rate', target: '$480,000/1%' },
        { name: 'Funnel Friction Index', definition: 'Stage-to-stage transition loss coefficient', target: '< 0.32' }
      ],
      visualModel: {
        type: 'driver-tree',
        caption: 'Empirical Revenue Architecture & Driver Decomposition Tree',
        metrics: [
          { label: 'Active Pipeline Opps', value: '420', delta: '+12%' },
          { label: 'Stage Win Rate', value: '28.4%', delta: '+3.1%' },
          { label: 'Average Contract Value', value: '$84,000', delta: '+$6.2K' },
          { label: 'Median Sales Cycle', value: '74 Days', delta: '-12 Days' }
        ]
      }
    },
    {
      id: 'sec-cust-econ',
      slug: 'customer-economics',
      title: 'Customer Economics',
      businessQuestion: 'Which customer cohorts actually build long-term enterprise value versus draining support capital?',
      explanation: 'Customer economics audits the multi-year value trajectory of accounts, separating compounding cohorts from customers whose operational support costs eliminate gross margin.',
      topics: [
        {
          title: 'Customer Lifetime Value',
          description: 'Calculate net present value of customer cash flows discounted by cost of capital and retention decay.',
          businessEvidence: 'Subscription renewal histories, expansion billings, and account servicing ledger entries.',
          analysisProcess: 'Discounted cash flow cohort modeling factoring in empirical net revenue retention curves.',
          decisionsEnabled: 'Set maximum allowable customer acquisition costs (CAC ceiling) by tier.'
        },
        {
          title: 'Expansion Revenue Mechanics',
          description: 'Isolate organic account expansion drivers: seat growth, consumption tiers, and add-on module adoption.',
          businessEvidence: 'Product telemetry, license consumption metrics, and cross-sell contract addendums.',
          analysisProcess: 'Expansion propensity scoring and usage inflection threshold mapping.',
          decisionsEnabled: 'Trigger automated expansion workflows at the exact moment of product utilization saturation.'
        },
        {
          title: 'Retention Economics',
          description: 'Quantify the compounding financial returns of gross revenue retention (GRR) and net revenue retention (NRR).',
          businessEvidence: 'Churn exit logs, renewal renewal timelines, and downsell concession ledgers.',
          analysisProcess: 'Longitudinal survival curve analysis across pricing tiers and onboarding tracks.',
          decisionsEnabled: 'Prioritize CSM interventions on accounts representing 80% of renewal equity.'
        },
        {
          title: 'Portfolio Profitability',
          description: 'Segment customer base into economic deciles to reveal the 20% of accounts generating 120% of net profit.',
          businessEvidence: 'Direct labor hours, cloud infrastructure allocations, and customer support ticket logs.',
          analysisProcess: 'Activity-based costing per account overlaid on net ARR contribution.',
          decisionsEnabled: 'Reprice, sunset, or restructure terms for structurally unprofitable customer segments.'
        },
        {
          title: 'Revenue Cohort Science',
          description: 'Track annualized spending behavior of customer vintage cohorts over 12, 24, 36, and 48 months.',
          businessEvidence: 'Historical cohort inception dates, quarterly invoice receipts, and ARR step-functions.',
          analysisProcess: 'Heatmap cohort layering and expansion slope gradient calculations.',
          decisionsEnabled: 'Prove enterprise valuation compounding to board members and prospective investors.'
        }
      ],
      useCase: {
        situation: 'An enterprise logistics platform boasted 110% NRR, but enterprise profit remained break-even.',
        action: 'Executed Portfolio Profitability analysis, uncovering that the bottom 30% of accounts consumed 64% of support engineering.',
        outcome: 'Introduced tiered SLA pricing and self-service onboarding, expanding gross margins by 920 basis points.'
      },
      kpis: [
        { name: 'LTV:CAC Ratio', definition: 'Discounted lifetime value relative to fully loaded acquisition cost', target: '4.2x' },
        { name: 'Net Revenue Retention', definition: 'Annualized recurring revenue retention factoring expansion and churn', target: '124%' },
        { name: 'Gross Revenue Retention', definition: 'Annualized recurring revenue retained before expansion', target: '94%' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Customer Cohort Expansion Heatmap & Net Profit Contribution Deciles',
        metrics: [
          { label: 'Top Decile NRR', value: '148%', delta: 'Benchmark' },
          { label: 'Median CAC Payback', value: '11.2 Mo', delta: '-3.1 Mo' },
          { label: 'Servicing Load Ratio', value: '14.2%', delta: '-4.6%' }
        ]
      }
    },
    {
      id: 'sec-unit-econ',
      slug: 'unit-economics',
      title: 'Unit Economics',
      businessQuestion: 'What is the true marginal contribution of every dollar of newly acquired customer contract value?',
      explanation: 'Unit economics strips away corporate overhead to audit the direct unit-level financial viability of each product, sales channel, and customer contract.',
      topics: [
        {
          title: 'CAC Dynamics',
          description: 'Audit fully loaded customer acquisition cost including marketing programs, sales salaries, SDR overhead, and tooling.',
          businessEvidence: 'General ledger GTM expense breakdown, sales commission runs, and digital marketing invoices.',
          analysisProcess: 'Time-lagged attribution matching acquisition spend to closed-won cohort inception dates.',
          decisionsEnabled: 'Discontinue acquisition channels yielding CAC payback periods longer than 18 months.'
        },
        {
          title: 'Cost-to-Serve Modeling',
          description: 'Quantify direct marginal costs required to onboard, deliver, host, and maintain customer contracts.',
          businessEvidence: 'AWS/Azure compute cost allocation tags, customer success rep time-tracking, and third-party API bills.',
          analysisProcess: 'Marginal cost attribution per customer tenant and query volume.',
          decisionsEnabled: 'Establish contractual minimums and usage overage caps on high-compute enterprise features.'
        },
        {
          title: 'Margin Stack Analysis',
          description: 'Dissect revenue into Gross Margin, Contribution Margin 1 (direct costs), and Contribution Margin 2 (channel costs).',
          businessEvidence: 'Product P&L statements, partner referral commission agreements, and payment processing fees.',
          analysisProcess: 'Waterfall margin deconstruction from list price to realized contribution margin.',
          decisionsEnabled: 'Prevent sales reps from discounting contracts below the contribution margin threshold.'
        },
        {
          title: 'Profit Pool Mapping',
          description: 'Identify where pure economic profit concentrates across product modules, vertical industries, and customer sizes.',
          businessEvidence: 'Contract margin audit logs, vertical industry win rates, and implementation variance records.',
          analysisProcess: 'Micro-segment profitability mapping and competitive pricing elasticity modeling.',
          decisionsEnabled: 'Pivot commercial targeting to industry micro-segments where margins exceed 75%.'
        },
        {
          title: 'Revenue Efficiency Score',
          description: 'Assess overall revenue productivity via Magic Number, Bessemer Efficiency Score, and Rule of 40 tracking.',
          businessEvidence: 'Quarterly net new ARR additions, total sales and marketing expenditure, and operating profit.',
          analysisProcess: 'Magic Number = (Q_ARR - Q-1_ARR) × 4 / Q-1_SM_Spend.',
          decisionsEnabled: 'Determine whether the enterprise is ready to accelerate capital investment into sales hiring.'
        }
      ],
      useCase: {
        situation: 'A fintech infrastructure provider was burning $1.8M per quarter despite 85% gross margin on paper.',
        action: 'Conducted Cost-to-Serve Modeling that uncovered third-party KYC/AML API fees consumed 38% of client contract revenue.',
        outcome: 'Renegotiated volume vendor pricing and enacted minimum monthly usage commitments, saving $1.4M annually.'
      },
      kpis: [
        { name: 'CAC Payback Period', definition: 'Months of gross profit required to recover acquisition expenditure', target: '10.5 Mo' },
        { name: 'Contribution Margin %', definition: 'Revenue minus direct servicing and acquisition expenses', target: '68.5%' },
        { name: 'Bessemer Magic Number', definition: 'Net new ARR efficiency per dollar of GTM expense', target: '1.15' }
      ],
      visualModel: {
        type: 'waterfall',
        caption: 'Granular Unit Economics Waterfall: From List ARR to Net Contribution Margin',
        metrics: [
          { label: 'Gross Margin %', value: '78.2%', delta: '+4.5%' },
          { label: 'Direct Cost to Serve', value: '$12,400', delta: '-18%' },
          { label: 'Rule of 40 Score', value: '52.4%', delta: '+8.2%' }
        ]
      }
    },
    {
      id: 'sec-white-space',
      slug: 'white-space-intelligence',
      title: 'White Space Intelligence',
      businessQuestion: 'Where are the unexploited, high-margin revenue pockets within your accessible market landscape?',
      explanation: 'White space intelligence moves past superficial TAM claims to identify micro-segments where competitor density is low, willingness-to-pay is high, and your solution possesses distinct economic defensibility.',
      topics: [
        {
          title: 'TAM Expansion Models',
          description: 'Deconstruct aggregate market sizing into realistic SAM (Serviceable) and SOM (Obtainable) micro-segments.',
          businessEvidence: 'Firmographic registry databases, industry procurement records, and regulatory compliance mandates.',
          analysisProcess: 'Bottom-up account census and buying-capacity scoring across geographic and vertical clusters.',
          decisionsEnabled: 'Eliminate waste in enterprise marketing campaigns aimed at non-viable market segments.'
        },
        {
          title: 'Market Gap Discovery',
          description: 'Isolate unmet feature requirements, pricing model mismatches, and compliance vacuums left by incumbents.',
          businessEvidence: 'Competitor RFP loss debriefs, customer review mining, and third-party analyst inquiries.',
          analysisProcess: 'Matrix gap analysis mapping buyer willingness-to-pay against competitor capability voids.',
          decisionsEnabled: 'Package dedicated targeted solutions for underserved buyer niches.'
        },
        {
          title: 'Category Opportunity Mapping',
          description: 'Map emerging industry sub-categories and evaluate whether to capture adjacencies through build, partner, or buy.',
          businessEvidence: 'VC funding trends, patent filings, category keyword search surges, and partnership queries.',
          analysisProcess: 'Competitive category heatmapping and profit pool growth velocity projection.',
          decisionsEnabled: 'Position company offerings ahead of legacy category commoditization.'
        },
        {
          title: 'AI Opportunity Heatmaps',
          description: 'Evaluate where AI automation can unlock net new revenue streams, premium tiers, or proprietary workflows.',
          businessEvidence: 'Client workflow logs, manual operational touchpoints, and repetitive analyst task reports.',
          analysisProcess: 'Automation feasibility scoring versus economic value creation matrices.',
          decisionsEnabled: 'Launch monetization modules for AI-enabled features rather than giving them away for free.'
        },
        {
          title: 'Growth Vector Analysis',
          description: 'Prioritize strategic expansion pathways (new geos, new buyer personas, new products) by risk-adjusted ROI.',
          businessEvidence: 'Inbound international inquiries, trial user domain distributions, and partner co-sell requests.',
          analysisProcess: 'Ansoff matrix stress testing weighted by capital requirements and sales cycle velocity.',
          decisionsEnabled: 'Select the single highest-yield growth vector for the upcoming fiscal year.'
        }
      ],
      useCase: {
        situation: 'A cybersecurity provider was stalled in the crowded enterprise endpoint security market.',
        action: 'Conducted Market Gap Discovery, uncovering unaddressed compliance mandates in mid-market healthcare networks.',
        outcome: 'Launched a pre-configured HIPAA compliance bundle, generating $7.8M in pipeline in 90 days.'
      },
      kpis: [
        { name: 'White-Space TAM Captured', definition: 'ARR captured from newly identified micro-segments', target: '$5.2M' },
        { name: 'Competitive Win Rate in White Space', definition: 'Close rate against incumbents in greenfield niches', target: '44%' },
        { name: 'Time to First Segment Dollar', definition: 'Days from segment prioritization to first signed contract', target: '62 Days' }
      ],
      visualModel: {
        type: 'architecture',
        caption: 'White-Space Opportunity Matrix: Market Attractiveness vs. Economic Defensibility',
        metrics: [
          { label: 'Uncontested Micro-TAM', value: '$340M', delta: 'Identified' },
          { label: 'Relative Margin Index', value: '1.34x', delta: 'Above Baseline' },
          { label: 'Average Sales Cycle', value: '48 Days', delta: '-26 Days' }
        ]
      }
    }
  ],
  methodologyWorkflow: [
    {
      stepNumber: '01',
      title: 'Empirical Evidence Audit',
      input: '36-month transaction logs, CRM pipeline snapshots, billing records, and cost ledgers.',
      activity: 'Ingest and sanitize commercial data, normalize timestamps, and eliminate reporting biases.',
      output: 'Cleaned unified data foundation with validated transaction lineage.'
    },
    {
      stepNumber: '02',
      title: 'Revenue Equation Calibration',
      input: 'Stage conversion rates, cycle durations, contract sizes, and retention decay curves.',
      activity: 'Model the mathematical revenue equation and calculate partial derivative sensitivities.',
      output: 'Calibrated parametric growth model revealing highest-leverage commercial drivers.'
    },
    {
      stepNumber: '03',
      title: 'Unit Economic & Cohort Audit',
      input: 'Direct operational costs, compute allocations, CS touchpoints, and acquisition expense.',
      activity: 'Execute activity-based costing across customer deciles, products, and acquisition channels.',
      output: 'Customer portfolio profitability matrix highlighting value-creating and value-destroying cohorts.'
    },
    {
      stepNumber: '04',
      title: 'White-Space & Profit Pool Mapping',
      input: 'Addressable market census data, competitor pricing benchmarks, and customer RFP histories.',
      activity: 'Identify uncontested micro-segments with high margin defensibility and unmet buyer demand.',
      output: 'Prioritized growth vector roadmap with risk-adjusted ROI projections.'
    },
    {
      stepNumber: '05',
      title: 'Structural Optimization & Execution',
      input: 'Executive growth targets, capital expenditure limits, and sales capacity constraints.',
      activity: 'Re-align pricing floors, quota allocations, SLA tiers, and GTM resource distribution.',
      output: 'Executable revenue playbook with monthly operational milestones and telemetry governance.'
    }
  ],
  primaryKpis: [
    {
      name: 'Sales Velocity Index',
      definition: 'Dollar value generated per opportunity per pipeline day through the sales funnel.',
      formula: '(Active Qualified Opportunities × Win Rate % × Average Deal Size) ÷ Sales Cycle Length in Days',
      unit: '$/Day',
      reportingPeriod: 'Monthly / Quarterly',
      baseline: '$4,800/day',
      target: '$12,500/day',
      illustrativeValue: '$11,420/day',
      interpretation: 'A 2.3x increase in sales velocity demonstrates that pipeline qualification and cycle time optimizations are accelerating cash generation without expanding headcount.',
      category: 'Commercial'
    },
    {
      name: 'LTV:CAC Ratio',
      definition: 'Ratio of discounted customer lifetime gross profit to fully loaded acquisition cost.',
      formula: '[ (Average Contract Value × Gross Margin %) ÷ Annual Churn Rate ] ÷ Fully Loaded CAC',
      unit: 'Ratio (x)',
      reportingPeriod: 'Quarterly',
      baseline: '2.1x',
      target: '4.5x',
      illustrativeValue: '4.2x',
      interpretation: 'Ratios above 4.0x indicate superior capital compounding efficiency, justifying aggressive reinvestment into customer acquisition.',
      category: 'Unit Economics'
    },
    {
      name: 'Bessemer Magic Number',
      definition: 'Measures sales and marketing efficiency in generating net new annualized recurring revenue.',
      formula: '[ (Current Quarter ARR − Prior Quarter ARR) × 4 ] ÷ Prior Quarter S&M Spend',
      unit: 'Coefficient',
      reportingPeriod: 'Quarterly',
      baseline: '0.62',
      target: '1.20',
      illustrativeValue: '1.14',
      interpretation: 'A Magic Number above 1.0 means every dollar spent on sales and marketing generates more than a dollar of annual recurring revenue within four quarters.',
      category: 'Commercial'
    },
    {
      name: 'Net Contribution Margin %',
      definition: 'Percentage of revenue remaining after subtracting direct cost of goods, hosting, servicing, and sales commission.',
      formula: '[ (Gross Revenue − COGS − Direct Servicing Costs − Direct Sales Commission) ÷ Gross Revenue ] × 100',
      unit: '%',
      reportingPeriod: 'Monthly',
      baseline: '48.2%',
      target: '68.0%',
      illustrativeValue: '66.4%',
      interpretation: 'Expansion of net contribution margin reflects successful elimination of low-margin service drag and enforcement of contractual minimums.',
      category: 'Operational'
    },
    {
      name: 'Rule of 40 Efficiency Score',
      definition: 'Sum of year-over-year revenue growth rate percentage and free cash flow margin percentage.',
      formula: 'YoY Revenue Growth Rate % + Free Cash Flow Margin %',
      unit: '% Score',
      reportingPeriod: 'Annualized',
      baseline: '22.0%',
      target: '50.0%',
      illustrativeValue: '54.2%',
      interpretation: 'Scoring well above the 40% benchmark proves that revenue expansion is fundamentally profitable and not being subsidized by unsustainable cash burn.',
      category: 'Executive'
    }
  ],
  scenarios: [
    {
      title: 'Enterprise B2B Cloud Platform Margin Restructuring',
      industry: 'Enterprise Software & Infrastructure',
      baselineSituation: '$58M ARR company growing at 28% YoY, but EBITDA margin remained negative (-12%) due to high enterprise customization overhead.',
      observedProblem: 'Sales teams were discounting enterprise tier pricing by up to 45% while promising unlimited customer engineering hours to close deals.',
      analysis: 'Cost-to-Serve Modeling revealed that the largest 15 enterprise clients generated $9.2M in revenue but consumed $11.4M in dedicated support and infrastructure costs.',
      decisionEvaluated: 'Transition from bespoke implementation commitments to standardized tiering with mandatory billable hourly rates for out-of-scope integrations.',
      expectedImprovement: 'Eliminate negative contribution margin contracts and restore enterprise gross margin to >75%.',
      validatingMetrics: ['Gross Margin % (+1,400 bps)', 'LTV:CAC Ratio (from 2.2x to 4.4x)', 'Contribution Margin 1 ($+3.8M)'],
      assumptions: 'Assumed 8% client churn during contract renegotiation offset by 22% higher net realized price from retained accounts.'
    }
  ],
  dataConsiderations: [
    {
      title: 'CRM Data Sanitization & Timestamp Integrity',
      description: 'Accurate velocity and equation modeling requires strict stage-entry and stage-exit timestamp tracking without manual backdating.',
      impactLevel: 'Critical'
    },
    {
      title: 'Granular Activity-Based Cost Allocation',
      description: 'Customer success and engineering labor costs must be systematically attributed to client accounts rather than pooled in general SG&A.',
      impactLevel: 'High'
    },
    {
      title: 'Cohort Vintage Tracking Length',
      description: 'Accurate LTV and cohort decay curves require at least 24 months of consistent invoice and billing transaction logs.',
      impactLevel: 'High'
    }
  ],
  decisionSupport: [
    {
      priority: 'Immediate (Weeks 1-3)',
      focusArea: 'Revenue Equation Calibration',
      keyMetrics: 'Stage Conversion Rates, Deal Velocity, Win Rate Dispersion',
      tradeOffs: 'Short-term administrative rigor in CRM logging versus long-term predictive forecast precision.',
      recommendedAction: 'Audit historical pipeline transitions and define mathematical boundary equations for qualified opportunities.'
    },
    {
      priority: 'Secondary (Weeks 4-8)',
      focusArea: 'Portfolio Profitability Cleansing',
      keyMetrics: 'Cost to Serve by Decile, Account Gross Margin %',
      tradeOffs: 'Potential friction with legacy underpaying accounts versus immediate gross margin recovery.',
      recommendedAction: 'Institute strict pricing floors and enforce billable change orders on all bespoke engineering commitments.'
    },
    {
      priority: 'Strategic (Weeks 9-12)',
      focusArea: 'White-Space Profit Pool Targeting',
      keyMetrics: 'Micro-Segment Win Rates, Relative Margin Realization',
      tradeOffs: 'Focusing sales capacity on higher-margin niche segments versus pursuing large but low-margin marquee brands.',
      recommendedAction: 'Realign marketing spend and outbound SDR quotas around defensible micro-segments with >70% profit pool margins.'
    }
  ],
  visualTheme: 'physics'
};

