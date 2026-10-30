import { GrowthCapabilityPageData } from '../types';

export const page07ValueCaptureData: GrowthCapabilityPageData = {
  pageNumber: '07',
  title: 'Value Capture Engineering',
  slug: 'value-capture-engineering',
  heroHeadline: 'Capture More of the Value Your Business Creates',
  heroSupporting: 'Align commercial pricing models with economic value delivery. Optimize proposal terms, enforce negotiation governance, and capture concentrated profit pools across enterprise accounts.',
  businessProblemSummary: 'Most companies deliver immense economic value and operational ROI to their clients but capture only a tiny fraction of that value due to cost-plus pricing, weak negotiation posture, and unmanaged commercial concessions.',
  targetDecisionMakers: ['Chief Financial Officers', 'Chief Executive Officers', 'Chief Commercial Officers', 'VPs of Global Pricing'],
  contextWhoExperiences: 'B2B enterprise platforms, industrial technology providers, and high-value service firms where client ROI significantly exceeds vendor software fees.',
  contextSituation: 'Customers report millions of dollars in operational savings from using the product, yet procurement routinely demands and receives 25-40% discounts on annual contracts.',
  contextWhyDifficult: 'Shifting from cost-plus or competitor-matching pricing to true value-based pricing requires quantifiable ROI proof, economic modeling, and disciplined negotiation governance.',
  contextContributingFactors: [
    'Pricing anchored to internal headcount and hosting costs rather than customer economic outcome',
    'Lack of documented customer ROI business cases during executive commercial proposals',
    'Procurement departments exploiting fragmented sales team authority to extract price concessions',
    'Failure to isolate and defend high-margin micro-segments from broad commercial discounting'
  ],
  symptomsAndConsequences: [
    {
      category: 'Price Realization',
      symptom: 'Realized price trails list price by over 30% across enterprise deals.',
      consequence: 'Millions in net profit sacrificed; valuation multiples severely compressed.'
    },
    {
      category: 'Value Capture Ratio',
      symptom: 'Vendor captures less than 3% of the verified economic value created for the client.',
      consequence: 'Client captures all economic surplus while the vendor absorbs all operational delivery risk.'
    },
    {
      category: 'Margin Dispersion',
      symptom: 'Gross margins fluctuating wildly between 45% and 88% across identical customer tiers.',
      consequence: 'Unpredictable cash flow generation and distorted sales commission payouts.'
    },
    {
      category: 'Negotiation Drag',
      symptom: 'Enterprise legal and procurement negotiations dragging on for 4+ months per contract.',
      consequence: 'High cost of sale, deal slip across quarters, and compromised contract terms.'
    }
  ],
  subSubmenus: [
    {
      id: 'sec-price-sci',
      slug: 'pricing-science',
      title: 'Pricing Science',
      businessQuestion: 'What is the mathematically optimal pricing structure that maximizes profit without dampening market adoption?',
      explanation: 'Pricing science applies empirical elasticity modeling, yield optimization, and value-based frameworks to establish defensible price points.',
      topics: [
        {
          title: 'Value-Based Pricing',
          description: 'Anchor product pricing directly to measurable customer economic outcomes: operational savings, risk reduction, or revenue generated.',
          businessEvidence: 'Customer economic value realization audits, operational ROI metrics, and financial impact reports.',
          analysisProcess: 'Economic value to customer (EVC) modeling calculating the total dollar surplus created by the platform.',
          decisionsEnabled: 'Price contracts at 10-15% of verified customer economic value created rather than cost-plus.'
        },
        {
          title: 'Dynamic Pricing',
          description: 'Adjust transaction and consumption pricing dynamically based on demand volatility, compute load, and client urgency.',
          businessEvidence: 'Market spot pricing indices, infrastructure capacity utilization, and seasonal transaction volumes.',
          analysisProcess: 'Algorithmic dynamic yield optimization balancing infrastructure capacity constraints with margin capture.',
          decisionsEnabled: 'Capture premium pricing during peak processing cycles and volatile market conditions.'
        },
        {
          title: 'Pricing Elasticity Analysis',
          description: 'Quantify price elasticity of demand across customer industry sectors, company sizes, and geographic regions.',
          businessEvidence: 'Historical win/loss logs across varying price points, RFP bid results, and competitor pricing benchmarks.',
          analysisProcess: 'Logistic regression elasticity curves modeling win probability as a continuous function of contract price.',
          decisionsEnabled: 'Identify inelastic enterprise segments where a 20% price increase results in less than 2% volume churn.'
        },
        {
          title: 'Margin Optimization',
          description: 'Set granular gross margin targets by product line, customer tier, and delivery channel to protect bottom-line EBITDA.',
          businessEvidence: 'Direct COGS ledgers, AWS hosting cost attribution, customer success labor records, and third-party API fees.',
          analysisProcess: 'Linear programming margin optimization balancing price floors against volume targets.',
          decisionsEnabled: 'Institute immutable price floors in CPQ systems that physically prevent non-profitable contract execution.'
        },
        {
          title: 'Revenue Yield Management',
          description: 'Maximize the total economic yield per customer relationship across software licenses, professional services, and data modules.',
          businessEvidence: 'Account lifetime billing summaries, cross-sell adoption timelines, and service utilization histories.',
          analysisProcess: 'Yield maximization modeling allocating account executive resources to accounts with the highest unharvested margin yield.',
          decisionsEnabled: 'Reallocate commercial focus from high-volume, low-margin buyers to high-yield enterprise relationships.'
        }
      ],
      useCase: {
        situation: 'An industrial IoT software provider priced its predictive maintenance product at a flat $2,000/machine/year.',
        action: 'Conducted Pricing Science research and proved each machine prevented $85,000 in annual unplanned factory downtime.',
        outcome: 'Repriced to an outcome-anchored $8,500/machine tier (10% of downtime saved), increasing ARR by 4.2x with zero loss of enterprise accounts.'
      },
      kpis: [
        { name: 'Price Realization Index', definition: 'Ratio of realized contract price to target list price across closed deals', target: '91.5%' },
        { name: 'Economic Value Capture Ratio', definition: 'Percentage of verified customer ROI captured as software license fees', target: '12.5%' },
        { name: 'Inelastic Segment Margin', definition: 'Gross margin percentage achieved in prioritized price-inelastic enterprise sectors', target: '84.0%' }
      ],
      visualModel: {
        type: 'waterfall',
        caption: 'Pricing Science & Yield Optimization: From Economic Value Created to Realized Vendor Margin',
        metrics: [
          { label: 'Client Economic Value', value: '$850K/yr', delta: 'Audited' },
          { label: 'Target Value Price', value: '$105K/yr', delta: '12.3% EVC' },
          { label: 'Realized Contract Price', value: '$96.5K/yr', delta: '92% Realization' }
        ]
      }
    },
    {
      id: 'sec-comm-opt',
      slug: 'commercial-optimization',
      title: 'Commercial Optimization',
      businessQuestion: 'How can sales motions, proposals, and negotiations be optimized to defend pricing integrity?',
      explanation: 'Commercial optimization transforms the proposal and negotiation workflow, empowering sales teams to defend value against procurement pressure.',
      topics: [
        {
          title: 'Offer Optimization',
          description: 'Structure commercial proposals that present multiple structured options (Anchor, Target, Baseline) rather than a single vulnerable price.',
          businessEvidence: 'Historical proposal win/loss notes, buyer negotiation feedback, and multi-option proposal conversion records.',
          analysisProcess: 'Anchoring and decoy effect optimization guiding procurement buyers toward the target enterprise tier.',
          decisionsEnabled: 'Present 3 structured options in every enterprise proposal, steering buyers away from pure price discounting.'
        },
        {
          title: 'Proposal Optimization',
          description: 'Redesign commercial proposals to lead with executive financial justification, payback timelines, and operational ROI.',
          businessEvidence: 'Customer executive sponsor feedback, CFO review requirements, and RFP evaluation scorecards.',
          analysisProcess: 'Executive readability and ROI transparency benchmarking ensuring the proposal acts as a standalone business case for the CFO.',
          decisionsEnabled: 'Accelerate CFO budget approvals by embedding verified payback models directly into commercial proposals.'
        },
        {
          title: 'Sales Motion Optimization',
          description: 'Re-align the sales process to engage economic buyers (CFOs, COOs) early, bypassing technical gatekeepers.',
          businessEvidence: 'CRM stakeholder contact logs, opportunity stage timelines, and economic buyer meeting notes.',
          analysisProcess: 'Stakeholder influence mapping correlating deal win rates with early executive economic buyer involvement.',
          decisionsEnabled: 'Require sales reps to secure an executive economic sponsor meeting before advancing opportunities to proposal stage.'
        },
        {
          title: 'Negotiation Intelligence',
          description: 'Provide sales reps with tactical negotiation playbooks, concession matrices, and pre-defined non-monetary trade-offs.',
          businessEvidence: 'Procurement negotiation transcripts, concession logs, and legal contract redlines.',
          analysisProcess: 'Concession trade-off modeling establishing rules (e.g., if buyer asks for 10% discount, vendor requires a 2-year commitment or logo rights).',
          decisionsEnabled: 'Never surrender price concessions without extracting equivalent commercial value (longer terms, upfront cash).'
        },
        {
          title: 'Revenue Conversion Engineering',
          description: 'Streamline the end-to-end commercial contracting process, eliminating legal friction and procurement delays.',
          businessEvidence: 'Legal contract turnaround times, procurement questionnaire logs, and signature cycle durations.',
          analysisProcess: 'Contract friction path analysis identifying and standardizing the 10 most common legal redline sticking points.',
          decisionsEnabled: 'Pre-negotiate standard enterprise legal schedules, reducing contract signature time from 60 days to 14 days.'
        }
      ],
      useCase: {
        situation: 'An enterprise SaaS company faced aggressive procurement teams extracting 30% average discounts on large deals.',
        action: 'Deployed Negotiation Intelligence and a mandatory Concession Trade-off Matrix: discounts required multi-year prepayments or logo rights.',
        outcome: 'Average realized discount dropped from 31% to 11%, adding $5.4M in annualized EBITDA across 80 enterprise deals.'
      },
      kpis: [
        { name: 'Proposal Win Rate', definition: 'Percentage of delivered commercial proposals that result in fully executed contracts', target: '44%' },
        { name: 'Concession Exchange Ratio', definition: 'Value of contractual commitments received in exchange for price concessions granted', target: '1.4x' },
        { name: 'Procurement Cycle Time', definition: 'Median calendar days from initial procurement engagement to contract execution', target: '24 Days' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Commercial Concession Matrix: Price Concession Granted vs. Commercial Value Reciprocated',
        metrics: [
          { label: 'Realized Discount Defense', value: '88.5%', delta: '+16%' },
          { label: 'Multi-Year Concession Gain', value: '64% Deals', delta: '+32%' },
          { label: 'Cash Upfront Acceleration', value: '$8.2M', delta: '+45%' }
        ]
      }
    },
    {
      id: 'sec-profit-pool',
      slug: 'profit-pool-capture',
      title: 'Profit Pool Capture',
      businessQuestion: 'Where do the highest-margin economic profit pools reside across your target customer landscape?',
      explanation: 'Profit pool capture maps the distribution of pure economic profit across industry segments, customer tiers, and strategic accounts.',
      topics: [
        {
          title: 'High-Margin Segment Discovery',
          description: 'Identify specific micro-verticals and buyer sub-segments where solution differentiation creates massive pricing power.',
          businessEvidence: 'Segment gross margin ledgers, competitive alternative availability, and customer switching cost records.',
          analysisProcess: 'Micro-segment profitability mapping identifying customer clusters delivering >80% gross contribution margins.',
          decisionsEnabled: 'Focus 70% of outbound enterprise GTM resources on the top 20% highest-margin vertical sectors.'
        },
        {
          title: 'Premium Customer Mapping',
          description: 'Profile the characteristics of existing accounts that willingly pay full list price without demanding discounts.',
          businessEvidence: 'Historical customer billing records, discount request histories, and buyer persona profiles.',
          analysisProcess: 'Premium buyer profile clustering isolating the operational pain points and regulatory triggers of full-price buyers.',
          decisionsEnabled: 'Refine outbound marketing targeting to replicate high-willingness-to-pay enterprise buyer personas.'
        },
        {
          title: 'Strategic Account Models',
          description: 'Design dedicated commercial partnership models for strategic accounts that generate massive multi-year recurring cash flow.',
          businessEvidence: 'Global account revenue potential, multi-subsidiary organizational charts, and joint business plans.',
          analysisProcess: 'Account lifetime economic valuation calculating total 5-year addressable spend across all global divisions.',
          decisionsEnabled: 'Deploy dedicated Strategic Account Executives (SAEs) supported by executive sponsor governance.'
        },
        {
          title: 'Value Extraction Frameworks',
          description: 'Deploy systematic frameworks to capture fair economic return as customers scale their usage and business operations.',
          businessEvidence: 'Customer ARR expansion timelines, platform utilization growth curves, and client revenue trajectory.',
          analysisProcess: 'Value scaling index modeling linking software contract pricing to client organizational revenue growth.',
          decisionsEnabled: 'Institutionalize consumption and volume-based pricing escalators that grow automatically with client success.'
        },
        {
          title: 'Profit Expansion Strategies',
          description: 'Implement structured programs to systematically reprice legacy, underpaying accounts up to modernized market standards.',
          businessEvidence: 'Legacy customer contract rosters, historical discount histories, and current platform utilization levels.',
          analysisProcess: 'Legacy price-to-value gap analysis identifying accounts paying less than 50% of current fair market list price.',
          decisionsEnabled: 'Execute a disciplined multi-year legacy repricing migration program with minimal account churn.'
        }
      ],
      useCase: {
        situation: 'A fintech compliance provider discovered that 15% of its accounts in the hedge fund sector drove 65% of company profits.',
        action: 'Developed a dedicated Hedge Fund Strategic Account Model with specialized regulatory reporting and white-glove SLAs.',
        outcome: 'Expanded hedge fund ARR by 140% at an 86% gross margin, adding $7.2M in high-margin recurring cash flow.'
      },
      kpis: [
        { name: 'Profit Pool Concentration Index', definition: 'Percentage of total company operating profit generated by top-decile customer segments', target: '68%' },
        { name: 'Legacy Account Repricing Yield', definition: 'Incremental ARR captured by migrating legacy underpaying accounts to modern pricing', target: '+$2.8M' },
        { name: 'Strategic Account Operating Margin', definition: 'Gross contribution margin realized across designated strategic enterprise accounts', target: '82%' }
      ],
      visualModel: {
        type: 'architecture',
        caption: 'Profit Pool Capture Framework: High-Margin Micro-Segment Concentration',
        metrics: [
          { label: 'Top-Decile Profit Pool', value: '$22.4M', delta: 'Audited' },
          { label: 'Strategic Account Margin', value: '84.2%', delta: '+6.2%' },
          { label: 'Repricing Migration Lift', value: '+$3.1M ARR', delta: 'Zero Churn' }
        ]
      }
    }
  ],
  methodologyWorkflow: [
    {
      stepNumber: '01',
      title: 'Economic Value & Pricing Diagnostic',
      input: 'Customer ROI reports, historical transaction pricing, win/loss discount data, and direct cost ledgers.',
      activity: 'Quantify customer economic surplus, analyze historical price realization, and identify discount leakage patterns.',
      output: 'Comprehensive Economic Value & Price Realization Diagnostic Report.'
    },
    {
      stepNumber: '02',
      title: 'Elasticity & Margin Architecture',
      input: 'Segment win/loss data, competitor pricing intelligence, and customer willingness-to-pay benchmarks.',
      activity: 'Model price elasticity curves across micro-segments and define strict gross margin floors.',
      output: 'Calibrated Value-Based Pricing Architecture and segment-specific price schedules.'
    },
    {
      stepNumber: '03',
      title: 'Negotiation & Concession Governance',
      input: 'Historical procurement concession logs, contract redlines, and sales rep discounting behaviors.',
      activity: 'Build standardized Concession Trade-off Matrices, multi-option proposal templates, and CPQ approval gates.',
      output: 'Institutionalized Commercial Negotiation Playbook and CPQ governance controls.'
    },
    {
      stepNumber: '04',
      title: 'Legacy Account Repricing Program',
      input: 'Legacy customer contract roster, historical discount schedules, and platform utilization telemetry.',
      activity: 'Design and execute grandfathered account repricing programs with phased migration schedules.',
      output: 'Executed contract addendums capturing modernized pricing across legacy accounts.'
    },
    {
      stepNumber: '05',
      title: 'Continuous Margin Telemetry',
      input: 'Live proposal generation feeds, closed contract terms, realized margins, and procurement concession logs.',
      activity: 'Track realized price against list price in real-time, alerting RevOps the moment margin discipline slips.',
      output: 'Executive Margin Telemetry Dashboard maintaining high-margin commercial execution.'
    }
  ],
  primaryKpis: [
    {
      name: 'Gross Margin Realization %',
      definition: 'Percentage of gross contract revenue retained after deducting all direct delivery, compute, and labor costs.',
      formula: '[ (Gross Revenue − Direct Labor − Compute Infrastructure − Third-Party Licenses) ÷ Gross Revenue ] × 100',
      unit: '%',
      reportingPeriod: 'Monthly / Quarterly',
      baseline: '68.4%',
      target: '82.0%',
      illustrativeValue: '83.5%',
      interpretation: 'Expanding gross margin from 68% to 83% directly transforms the cash-generating power and enterprise valuation of the business.',
      category: 'Unit Economics'
    },
    {
      name: 'Price Realization Ratio',
      definition: 'Percentage of target catalog list price actually captured on executed customer contracts.',
      formula: '(Total Realized Contracted ARR ÷ Total Theoretical List ARR of Sold Products) × 100',
      unit: '%',
      reportingPeriod: 'Quarterly',
      baseline: '69.0%',
      target: '90.0%',
      illustrativeValue: '91.2%',
      interpretation: 'A 91% price realization ratio proves that sales reps successfully defend commercial value against aggressive procurement pressure.',
      category: 'Commercial'
    },
    {
      name: 'Average Discount Depth',
      definition: 'Mean percentage price discount granted off list price across all closed enterprise contracts.',
      formula: '[ (Total List ARR of Closed Deals − Total Realized ARR) ÷ Total List ARR of Closed Deals ] × 100',
      unit: '%',
      reportingPeriod: 'Monthly / Quarterly',
      baseline: '31.0%',
      target: '< 10.0%',
      illustrativeValue: '8.8%',
      interpretation: 'Curbing average discounting from 31% to under 9% reclaims millions of dollars of high-margin ARR with zero incremental delivery cost.',
      category: 'Commercial'
    },
    {
      name: 'Proposal Close Win Rate',
      definition: 'Percentage of delivered commercial proposals that result in fully executed contracts without price concessions.',
      formula: '(Proposals Executed at or above Target Price Floor ÷ Total Formal Proposals Delivered) × 100',
      unit: '%',
      reportingPeriod: 'Monthly',
      baseline: '26.5%',
      target: '45.0%',
      illustrativeValue: '46.8%',
      interpretation: 'Elevating proposal win rates while defending price confirms that value-based proposal structures effectively resonate with C-suite buyers.',
      category: 'Commercial'
    },
    {
      name: 'Profit Contribution Per Account',
      definition: 'Net dollar profit contribution generated per customer account after fully loaded servicing costs.',
      formula: 'Account Contract ARR − Account Fully Loaded Servicing & Hosting Cost',
      unit: '$ / Account',
      reportingPeriod: 'Annualized',
      baseline: '$18,200',
      target: '$48,000',
      illustrativeValue: '$49,400',
      interpretation: 'A 2.7x increase in profit contribution per customer validates that value capture engineering compounds bottom-line cash flow.',
      category: 'Unit Economics'
    }
  ],
  scenarios: [
    {
      title: 'Enterprise HealthTech Platform Value-Based Repricing',
      industry: 'Healthcare Technology & Clinical Operations',
      baselineSituation: '$52M ARR clinical operations platform delivering $120M in documented hospital operational savings.',
      observedProblem: 'Hospital procurement teams routinely extracted 35% discounts by threatening to purchase legacy on-premise alternatives.',
      analysis: 'Deployed Value Capture Engineering to model total cost of ownership (TCO), proving the competitor was 2.5x more expensive when factoring in clinical staff overtime.',
      decisionEvaluated: 'Replaced single-price proposals with 3 structured options and instituted a mandatory Concession Trade-off Matrix.',
      expectedImprovement: 'Eliminate rogue discounting, lift price realization to >90%, and expand gross margins.',
      validatingMetrics: ['Price Realization (from 65% to 92%)', 'Gross Margin (from 71% to 84%)', 'Average Contract Value (from $64K to $112K)'],
      assumptions: 'Assumed clinical champions would actively support the business case in hospital board finance committees.'
    }
  ],
  dataConsiderations: [
    {
      title: 'Documented Customer ROI Business Cases',
      description: 'Defending value-based pricing requires verified case studies and economic models documenting customer cost savings and operational gains.',
      impactLevel: 'Critical'
    },
    {
      title: 'CPQ Approval Workflow Automation',
      description: 'Discount governance must be strictly enforced through automated CPQ approval gates tied directly to deal margin thresholds.',
      impactLevel: 'High'
    },
    {
      title: 'Sales Rep Negotiation Certification',
      description: 'Commercial sales teams must be trained and certified on concession trade-offs to prevent unauthorized verbal discounting during negotiations.',
      impactLevel: 'High'
    }
  ],
  decisionSupport: [
    {
      priority: 'Immediate (Weeks 1-3)',
      focusArea: 'Concession Governance & Discount Bands',
      keyMetrics: 'Discount Depth %, CPQ Approval Compliance',
      tradeOffs: 'Enforcing strict discount bands may cause initial rep resistance but immediately stops margin erosion.',
      recommendedAction: 'Institute mandatory executive approval for discounts exceeding 10% and mandate non-monetary trade-offs for all concessions.'
    },
    {
      priority: 'Secondary (Weeks 4-8)',
      focusArea: 'Value-Based Proposal Restructuring',
      keyMetrics: 'Proposal Win Rate, Price Realization %',
      tradeOffs: 'Requires investing time to build custom executive ROI calculators into commercial proposals.',
      recommendedAction: 'Redesign standard enterprise proposals to present 3 structured options with explicit financial payback payback timelines.'
    },
    {
      priority: 'Strategic (Weeks 9-12)',
      focusArea: 'Legacy Account Repricing Program',
      keyMetrics: 'Legacy Repricing Yield, Customer Churn %',
      tradeOffs: 'Repricing legacy accounts carries a minor churn risk if not paired with clear communication of expanded product value.',
      recommendedAction: 'Execute a phased repricing migration for underpaying legacy accounts that have benefited from recent platform feature expansions.'
    }
  ],
  visualTheme: 'value'
};

