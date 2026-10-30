import { AiSalesCapabilityPageData } from '../types';

export const page06PricingIntelligence: AiSalesCapabilityPageData = {
  pageNumber: '06',
  title: 'Pricing Intelligence',
  slug: 'pricing-intelligence',
  canonicalPath: '/ai-native-sales/pricing-intelligence',
  eyebrow: 'AI NATIVE SALES / PRICING INTELLIGENCE',
  heroHeadline: 'Make Commercial Decisions With Greater Visibility Into Value and Margin',
  heroSupporting: 'Revenue growth does not always translate into profitable growth. Inconsistent discounting, poorly structured offers, incomplete deal economics, and limited visibility into cost-to-serve can weaken commercial performance. Pricing Intelligence helps teams evaluate pricing choices, compare offer structures, and understand the potential financial implications of commercial decisions.',
  primaryCTA: 'Optimize Pricing & Margin',
  secondaryCTA: 'Book a Consultation',
  targetDecisionMakers: [
    'Chief Financial Officers (CFOs)',
    'Chief Revenue Officers (CROs)',
    'VP Commercial Operations & Pricing',
    'Enterprise Deal Desk Directors',
    'Commercial Legal Counsel'
  ],
  visualTheme: 'pricing',

  businessProblemTitle: 'The Silent Erosion of Gross Margin in Enterprise Sales',
  businessProblemSubtitle: 'When reps lack empirical pricing guidance, end-of-quarter panic leads to unnecessary discounting, margin leakage, and unprofitable contract obligations.',
  businessProblems: [
    {
      id: 'discount-leakage',
      title: 'Unchecked End-of-Quarter Discounting Panic',
      symptom: 'Reps offer 30-45% price concessions at quarter-end to force deal closure without testing customer willingness to pay.',
      rootCause: 'Lack of real-time price sensitivity modeling and empirical willingness-to-pay benchmarks.',
      impact: 'Erodes enterprise valuation and destroys 15-22% of potential software gross margin.'
    },
    {
      id: 'cost-to-serve-blindness',
      title: 'Cost-to-Serve Blindness & Margin Inversion',
      symptom: 'Large enterprise deals celebrated at contract signing turn out to be net-negative margin after custom implementation and high-touch support.',
      rootCause: 'Pricing models evaluate only top-line ARR, ignoring customer-specific cloud infrastructure, API, and engineering delivery costs.',
      impact: 'Creates unprofitable customer cohorts that consume 60%+ of customer engineering capacity while yielding zero net margin.'
    },
    {
      id: 'rigid-packaging',
      title: 'Rigid, One-Size-Fits-All Offer Structures',
      symptom: 'Deals stall because buyers reject bundled pricing for features they do not need, while reps lack approved modular packaging options.',
      rootCause: 'Static pricing sheets offer no algorithmic packaging optimization matched to customer maturity.',
      impact: 'Extends contract negotiation cycles by 45+ days and pushes price-sensitive buyers toward modular niche competitors.'
    }
  ],

  subSubmenus: [
    {
      id: 'dynamic-pricing',
      title: 'Dynamic Pricing',
      badge: 'Willingness-to-Pay Index',
      businessQuestion: 'What is the optimal price point for this specific customer tier, deal size, and competitive situation?',
      description: 'Calculates deal-specific price recommendations using customer firmographics, competitive alternatives, contract duration, and historical win rates.',
      businessProblem: 'Sales reps guess pricing based on gut instinct or past deals, underpricing high-value enterprise buyers and overpricing price-sensitive accounts.',
      howItWorks: 'Analyzes closed-won deal histories, customer revenue tier, geographic purchasing power, and active competitive bids to suggest target, floor, and stretch pricing.',
      informationUsed: [
        'Customer annual revenue, employee count, and technology budget estimates',
        'Historical win/loss pricing distribution for identical deal scopes and industries',
        'Competitor alternative pricing benchmarks and displacement precedents',
        'Contract duration, payment terms (upfront vs annual), and committed volume tiers'
      ],
      workflowSupport: 'Provides the rep and deal desk with a calibrated Price Guidance Corridor directly inside CPQ / CRM proposal generators.',
      outcomesSupported: 'Reduces unnecessary discounting by 8.4 percentage points while maintaining or improving overall competitive win rates.',
      humanOversight: 'Deal Desk Director must approve any custom proposal configured below the algorithmic price floor.',
      kpis: [
        { metric: 'Average Discount Reduction', definition: 'Decrease in percentage discount granted off list price', target: '-8.4 pts' },
        { metric: 'Price Realization Index', definition: 'Contracted ARR vs optimal predicted target price', target: '94.8%' },
        { metric: 'Win Rate at Target Price', definition: 'Competitive win rate when proposed at recommended price corridor', target: '52.6%' }
      ]
    },
    {
      id: 'margin-intelligence',
      title: 'Margin Intelligence',
      badge: 'Contribution Economics',
      businessQuestion: 'What is the true net contribution margin of this deal after factoring in fully loaded delivery, cloud, and support costs?',
      description: 'Models comprehensive deal-level profitability including hosting consumption, implementation hours, dedicated support, and payment terms.',
      businessProblem: 'Sales teams celebrate $500k deals that end up losing money because custom SLA and onboarding requirements were severely underpriced.',
      howItWorks: 'Connects finance and engineering telemetry to calculate customer-specific gross margin, cost-to-serve allocations, and multi-year payback.',
      informationUsed: [
        'Cloud infrastructure compute, storage, and API egress consumption models',
        'Professional services implementation hours and third-party integration costs',
        'Dedicated customer success management and premium SLA staffing allocations',
        'Contract payment schedules, financing costs, and working capital impact'
      ],
      workflowSupport: 'Displays a live Gross Margin Waterfall to the deal desk before proposals are sent to enterprise prospects.',
      outcomesSupported: 'Prevents unprofitable contract commitments and lifts portfolio gross margin by 6.8 percentage points.',
      humanOversight: 'CFO approval is mandatory for any enterprise transaction with projected contribution margin below corporate thresholds.',
      kpis: [
        { metric: 'Gross Margin Realization', definition: 'Contracted gross margin percentage across all new bookings', target: '78.2%' },
        { metric: 'Negative Margin Deal Elimination', definition: 'Zero contracts signed with negative net contribution margin', target: '100%' },
        { metric: 'Payback Velocity Compression', definition: 'Months required to fully recoup onboarding and delivery costs', target: '< 6.5 Mos' }
      ]
    },
    {
      id: 'offer-optimization',
      title: 'Offer Optimization',
      badge: 'Modular Packaging',
      businessQuestion: 'How can we structure the commercial bundle to maximize customer value and minimize negotiation friction?',
      description: 'Algorithmic packaging that tailors modular feature tiers, service levels, and usage caps to specific buyer maturity levels.',
      businessProblem: 'Monolithic packaging forces customers to pay for unused modules, creating deal-breaking procurement friction.',
      howItWorks: 'Evaluates customer use-case requirements against feature adoption telemetry, proposing high-value core bundles with optional expansion add-ons.',
      informationUsed: [
        'Customer stated operational priorities and identified technical bottlenecks',
        'Telemetry on feature utilization across similar enterprise customer cohorts',
        'Historical cross-sell expansion trajectories for specific module combinations',
        'Tiered platform usage limits (seats, transactions, bandwidth, compute units)'
      ],
      workflowSupport: 'Generates 3 customized proposal options (Good, Better, Best) optimized for buyer choice architecture and executive budget clearance.',
      outcomesSupported: 'Increases proposal acceptance rates by 26% and creates built-in expansion pathways for year-two net revenue retention.',
      humanOversight: 'Account Executive selects which of the 3 optimized proposal options aligns best with champion politics.',
      kpis: [
        { metric: 'Proposal Acceptance Velocity', definition: 'Days from initial proposal delivery to formal customer selection', target: '12 Days' },
        { metric: 'Multi-Product Adoption Rate', definition: 'New enterprise customers purchasing 2+ platform modules upfront', target: '64.5%' },
        { metric: 'Expansion Option Uptake', definition: 'Customers opting for pre-structured expansion tiers within 12 months', target: '38.0%' }
      ]
    },
    {
      id: 'commercial-optimization',
      title: 'Commercial Optimization',
      badge: 'Deal Desk Governance',
      businessQuestion: 'How do we streamline discount approvals, non-standard contract terms, and legal concessions without slowing deal momentum?',
      description: 'Automated deal desk governance that coordinates discount thresholds, payment term trade-offs, and commercial concessions in real-time.',
      businessProblem: 'Discount approval requests languish in executive email inboxes for days at quarter-end, delaying deal closings and frustrating buyers.',
      howItWorks: 'Evaluates concession trade-offs algorithmically: e.g. approves a 5% discount if the customer agrees to multi-year commitment or upfront payment.',
      informationUsed: [
        'Corporate discount matrix, delegation of authority (DOA), and governance rules',
        'Contract duration, payment frequency (monthly, annual, multi-year upfront)',
        'Customer co-marketing commitments, case study rights, and reference agreements',
        'Quarterly revenue gap telemetry and sales representative quota standing'
      ],
      workflowSupport: 'Provides instant, rules-based approval for balanced concession trade-offs, routing only true exceptions to senior leadership.',
      outcomesSupported: 'Accelerates deal desk turnaround from 4 days to under 4 hours while enforcing strict financial and legal guardrails.',
      humanOversight: 'Commercial VP and Finance Controller review exception queues with full visibility into commercial trade-off analytics.',
      kpis: [
        { metric: 'Deal Desk Turnaround Velocity', definition: 'Hours from discount request submission to verified approval', target: '< 4 Hours' },
        { metric: 'Value-Exchange Concession Rate', definition: 'Discounts tied to multi-year commitments or co-marketing rights', target: '88.4%' },
        { metric: 'Commercial Governance Compliance', definition: 'Contracts adhering strictly to approved delegation of authority', target: '99.8%' }
      ]
    }
  ],

  workflowTitle: 'End-to-End Pricing Intelligence & Commercial Governance Pipeline',
  workflowSubtitle: 'From willingness-to-pay modeling to margin waterfall validation and rapid deal desk approval.',
  workflowSteps: [
    {
      step: '01',
      name: 'Willingness-to-Pay Calibration',
      description: 'Scores customer tier, deal scope, and competitive dynamics to output optimal pricing corridor.',
      inputs: 'Account firmographics, deal scope, competitor bids, historical cohort wins',
      aiAction: 'Applies neural pricing model to compute floor, target, and premium price recommendations.',
      humanGate: 'AE reviews price corridor before generating formal customer proposal.',
      output: 'Calibrated Price Recommendation & Target Discount Bounds'
    },
    {
      step: '02',
      name: 'Gross Margin Waterfall Validation',
      description: 'Models fully loaded delivery, cloud infrastructure, and SLA staffing costs.',
      inputs: 'Custom hosting specs, implementation hours, dedicated support tier',
      aiAction: 'Calculates projected gross margin percentage and payback period in months.',
      humanGate: 'Finance Analyst approves deals with custom infrastructure requirements.',
      output: 'Deal Economics Model & Contribution Margin Scorecard'
    },
    {
      step: '03',
      name: 'Modular Offer Packaging',
      description: 'Generates three-tier proposal options optimized for buyer choice architecture.',
      inputs: 'Customer use cases, core vs optional modules, volume tier commitments',
      aiAction: 'Assembles Good/Better/Best proposal package with built-in expansion triggers.',
      humanGate: 'AE and Sales Engineering Lead customize package details.',
      output: 'Interactive 3-Option Proposal in Digital Sales Room'
    },
    {
      step: '04',
      name: 'Automated Commercial Clearance',
      description: 'Evaluates concession trade-offs against corporate governance policies.',
      inputs: 'Customer discount request, payment terms, multi-year commitment, case study rights',
      aiAction: 'Approves balanced trade-offs automatically or routes exceptions with impact analysis.',
      humanGate: 'Deal Desk Director / CFO countersigns non-standard commercial terms.',
      output: 'Authorized Commercial Contract Ready for Electronic Signature'
    }
  ],

  useCases: [
    {
      title: 'Discount Elimination in Enterprise Cloud SaaS',
      segment: 'Data Analytics & Business Intelligence Tech',
      situation: 'Sales reps routinely offered 35% discounts on $300k deals to close before quarter-end, citing unverified competitor price pressure.',
      approach: 'Implemented Dynamic Pricing corridor and value-exchange concession rules, requiring multi-year upfront commitment for discounts above 10%.',
      result: 'Average discount dropped from 34.2% to 14.8%, recovering $4.2M in annual recurring revenue with zero negative impact on win rates.',
      metrics: [
        { label: 'Discount Drop', value: '-19.4 pts' },
        { label: 'ARR Recovered', value: '$4.2M' }
      ]
    },
    {
      title: 'Cost-to-Serve Margin Protection',
      segment: 'High-Volume Financial Transaction API',
      situation: 'Tier-1 fintech clients negotiated heavy volume discounts on API calls, but complex custom compliance auditing turned deals into net-margin losses.',
      approach: 'Deployed Margin Intelligence to incorporate cloud infrastructure and audit engineering costs into real-time CPQ pricing calculations.',
      result: 'Restructured enterprise pricing to include dedicated infrastructure surcharges, boosting portfolio gross margin from 61% to 78%.',
      metrics: [
        { label: 'Margin Expansion', value: '+17.0 pts' },
        { label: 'Payback Velocity', value: '4.8 Mos' }
      ]
    },
    {
      title: 'Instant Commercial Deal Desk Acceleration',
      segment: 'Healthcare Enterprise Workflow SaaS',
      situation: 'Custom payment terms and discount requests took 5.2 days on average to receive CFO approval, causing 28% of deals to slip past fiscal quarter-end.',
      approach: 'Integrated Commercial Optimization rules engine, enabling instant algorithmic sign-off for balanced concessions (e.g. discount in exchange for 3-year term).',
      result: 'Deal desk approval turnaround fell from 5 days to 90 minutes, eliminating quarter-end deal slippage and unlocking $2.8M in accelerated bookings.',
      metrics: [
        { label: 'Approval Speed', value: '90 Mins' },
        { label: 'Slippage Reduction', value: '-74.0%' }
      ]
    }
  ],

  dashboardTitle: 'Pricing Intelligence & Margin Economics Telemetry',
  dashboardSubtitle: 'Real-time visibility into contracted gross margin, discount distribution, and price realization across enterprise deals.',
  dashboardBadge: 'Commercial Pricing Engine v2.4',
  dashboardMetrics: [
    { label: 'Portfolio Gross Margin', value: '78.2%', change: '+6.8 pts YoY', note: 'Contracted contribution margin' },
    { label: 'Average Contract Discount', value: '14.8%', change: '-8.4 pts vs baseline', note: 'Rigorous concession governance' },
    { label: 'Deal Desk Turnaround', value: '2.4 Hours', change: '-94% reduction', note: 'Fast commercial clearance' },
    { label: 'Price Realization Index', value: '94.8%', change: '+12.4% lift', note: 'ARR vs predicted target price' }
  ],
  dashboardVisualType: 'waterfall',

  kpiFrameworkTitle: 'Pricing Intelligence KPI & Commercial Measurement Framework',
  kpis: [
    {
      name: 'Gross Margin Realization %',
      formula: '(Contracted Revenue - Fully Loaded Delivery Costs) ÷ Contracted Revenue',
      definition: 'Net profitability of enterprise software bookings accounting for hosting, custom delivery, and dedicated support allocations.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '78.2%',
      interpretation: 'Measures true commercial quality of revenue; SaaS benchmark for top-quartile companies is >75%.'
    },
    {
      name: 'Average Discount Percentage',
      formula: '(Total List Price Value - Total Contracted Price Value) ÷ Total List Price Value',
      definition: 'Mean percentage concession granted off standard list price across closed-won enterprise transactions.',
      reportingWindow: 'Monthly Rolling',
      illustrativeValue: '14.8%',
      interpretation: 'Reductions indicate improved willingness-to-pay capture and stronger rep negotiation discipline.'
    },
    {
      name: 'Value-Exchange Concession Ratio',
      formula: 'Discounts Granted with Offsetting Terms ÷ Total Discounts Granted',
      definition: 'Percentage of price concessions that secured compensating customer commitments (e.g. multi-year term, upfront payment, case study).',
      reportingWindow: 'Monthly',
      illustrativeValue: '88.4%',
      interpretation: 'Ensures discounts are never given away freely but traded strategically for corporate financial value.'
    },
    {
      name: 'Deal Desk Cycle Time',
      formula: 'Elapsed Hours from Discount Request Submission to Final Commercial Approval',
      definition: 'Average turnaround duration for commercial governance review and executive countersignature.',
      reportingWindow: 'Weekly Aggregate',
      illustrativeValue: '2.4 Hours',
      interpretation: 'Fast turnaround maintains deal momentum while preserving rigorous financial governance.'
    }
  ],

  governanceTitle: 'Financial Governance, Delegation of Authority & Anti-Bribery Compliance',
  governanceSubtitle: 'Strict enterprise controls ensuring zero unauthorized pricing concessions, complete SOX compliance, and transparent deal desk records.',
  governanceItems: [
    {
      area: 'Delegation of Authority (DOA) Matrix',
      policy: 'Tiered discount authority limits: Reps (0-10%), Sales Director (11-20%), VP Sales (21-30%), CFO/CRO (31%+).',
      humanCheckpoint: 'System enforces mandatory digital sign-off matching authorized executive seniority before contract release.',
      auditTrail: 'Full cryptographic signature chain recorded in corporate ERP audit ledger.'
    },
    {
      area: 'Price Discrimination & Fair Competition Compliance',
      policy: 'Pricing models operate on transparent commercial criteria (volume, commitment duration, scope) ensuring complete Robinson-Patman compliance.',
      humanCheckpoint: 'General Counsel reviews pricing algorithms quarterly to verify fair commercial practice.',
      auditTrail: 'Deterministic pricing model parameter versions archived in compliance database.'
    },
    {
      area: 'Cost-to-Serve Underwriting Standards',
      policy: 'No contract may be executed with a projected gross margin under 60% without written executive committee authorization.',
      humanCheckpoint: 'Finance Controller audits cost-to-serve models for all deals exceeding $500k ARR prior to proposal delivery.',
      auditTrail: 'Full margin waterfall calculations preserved alongside contract archives.'
    },
    {
      area: 'Contractual Modification Auditability',
      policy: 'All legal and payment term deviations from standard enterprise master agreements are logged with risk ratings.',
      humanCheckpoint: 'Commercial Legal Counsel must review and countersign all custom SLA and limitation of liability clauses.',
      auditTrail: 'Complete redline version history and exception approvals logged in contract repository.'
    }
  ],

  relatedCapabilities: [
    {
      title: 'Revenue Acceleration',
      path: '/ai-native-sales/revenue-acceleration',
      summary: 'Prevent late-stage negotiation delays and manage deal war rooms with commercial clarity.',
      badge: 'Pillar 05'
    },
    {
      title: 'Customer Growth Intelligence',
      path: '/ai-native-sales/customer-growth-intelligence',
      summary: 'Ensure expansion and renewal contracts capture ongoing customer willingness to pay.',
      badge: 'Pillar 08'
    },
    {
      title: 'Autonomous GTM Command Center',
      path: '/ai-native-sales/autonomous-gtm-command-center',
      summary: 'Monitor margin realization and discounting trends across all territories and products.',
      badge: 'Pillar 09'
    }
  ],

  closingCtaHeadline: 'Protect Gross Margin Without Sacrificing Sales Velocity',
  closingCtaDescription: 'Replace arbitrary end-of-quarter discounting with dynamic pricing intelligence and rigorous commercial optimization. Schedule an executive briefing.'
};

