import { PageContentData } from '../../app/types/offeringsIndustries';

export const profitPoolDiscoveryData: PageContentData = {
  slug: 'profit-pool-discovery',
  route: '/offerings/profit-pool-discovery',
  pageNumber: 'OFFERING 01',
  pageCategory: 'Offering',
  title: 'Profit Pool Discovery',
  headlineHighlight: 'Find the Growth Opportunities Worth Pursuing.',
  eyebrow: 'STRATEGIC OPPORTUNITY DISCOVERY & MARGIN VALUATION',
  description: 'Reveal underserved markets, high-margin buyer segments, untapped commercial whitespace, and unit-economic expansion opportunities through evidence-based quantitative market discovery.',
  targetAudience: {
    primary: 'CEOs, Founders, Managing Directors, and Business Owners',
    secondary: 'Chief Strategy Officers, Heads of Corporate Development, and Commercial Leaders',
    executives: 'Executive Boards and Investment Committees prioritizing capital allocation.'
  },
  heroVisual: {
    imageSrc: '/images/hero-profit-pool.png',
    altText: 'Profit Pool Discovery Strategic Market Architecture',
    badgeText: 'Discovery Telemetry: Operational'
  },
  keyStats: [
    { label: 'Addressable Whitespace', metric: '3.4x', context: 'Average discovered addressable volume' },
    { label: 'Margin Precision', metric: '98.2%', context: 'Unit economic model correlation' },
    { label: 'Diagnostic Velocity', metric: '14 Days', context: 'From data ingestion to baseline lock' },
    { label: 'Opportunity Focus', metric: 'Top 10%', context: 'Highest yield customer segments isolated' }
  ],
  challenges: [
    {
      id: 'f-allocation',
      title: 'Capital & Sales Misallocation',
      situation: 'Sales and marketing budgets are deployed evenly across aggregate TAM rather than concentrated on accounts with the highest willingness-to-pay and retention.',
      whyItMatters: 'Equal distribution dilutes pipeline quality and increases blended customer acquisition costs by 40-70%.',
      commercialConsequence: 'Margin erosion, extended sales cycles, and missed revenue targets.',
      whyTraditionalMethodsFail: 'Generic market reports rely on top-down backward-looking industry surveys rather than empirical bottom-up account transaction economics.',
      requiredExecutiveDecision: 'Isolate and rank the top 15% most profitable micro-segments and reallocate 80% of sales capacity.'
    },
    {
      id: 'f-whitespace',
      title: 'Overlooked Commercial Whitespace',
      situation: 'Competitors battle fiercely for established RFP cycles while high-value niche segments and adjacent workflows remain completely unaddressed.',
      whyItMatters: 'Price compression occurs when competing in crowded legacy segments without differentiated value capture.',
      commercialConsequence: 'Margin compression of 15-25% driven by aggressive discounting.',
      whyTraditionalMethodsFail: 'Product roadmaps follow noisy vocal feedback from existing customers rather than systematic market whitespace discovery.',
      requiredExecutiveDecision: 'Map underserved customer workflows and establish defensible segment-specific value propositions.'
    },
    {
      id: 'f-dark-intent',
      title: 'Latent Buyer Demand Invisibility',
      situation: 'Over 70% of the B2B buyer research journey happens anonymously across technical docs, peer groups, and category evaluations before an inquiry is submitted.',
      whyItMatters: 'Sales outreach arrives too late, after the buying committee has already drafted criteria favoring rival incumbents.',
      commercialConsequence: 'Low outbound conversion, high CAC, and low RFP win rates.',
      whyTraditionalMethodsFail: 'Legacy CRM and web analytics only record identified form-fills, missing pre-intent behavioral research entirely.',
      requiredExecutiveDecision: 'Deploy multi-source intent listening frameworks to detect dark-funnel buying committees weeks before formal vendor contact.'
    }
  ],
  capabilities: [
    {
      id: 'market-opportunity-mapping',
      title: 'Market Opportunity Mapping',
      groupName: 'Market & Segment Discovery',
      shortSummary: 'Systematically assess addressable market dimensions, bottom-up customer counts, commercial attractiveness, and accessibility across target territories.',
      businessChallenge: 'Business owners and executive teams frequently base expansion investments on high-level analyst market estimates that mask severe segment inaccessibility and localized saturation.',
      whyItMatters: 'Entering low-yield market segments wastes capital, stretches sales teams, and depresses enterprise return on invested capital.',
      whatProfitMachinesDoes: 'ProfitMachines combines permitted commercial records, firmographic databases, verified account counts, and transaction models into an empirical bottom-up market opportunity map.',
      howItWorks: [
        'Ingest regional business registries, verified company datasets, and corporate structural trees.',
        'Filter by strict commercial accessibility criteria including regulatory compliance, tech compatibility, and purchasing authority.',
        'Calculate bottom-up addressable account counts, average annual contract potential, and segment velocity.',
        'Rank opportunity clusters by capital efficiency and delivery feasibility.'
      ],
      relevantInputs: ['Target territory parameters', 'Historical deal records', 'Regulatory constraint guidelines', 'Firmographic criteria'],
      deliverables: ['Bottom-Up Addressable Market Map', 'Segment Attractiveness Index', 'Account Distribution Heatmap'],
      businessValue: 'Ensures strategic capital and sales headcount are deployed exclusively into verified markets with defensible commercial demand.',
      kpis: [
        { name: 'Addressable Account Density', formula: 'Target Accounts meeting ICP ÷ Total Businesses in Territory', purpose: 'Measures market depth.' },
        { name: 'Segment Expected Value (SEV)', formula: 'Addressable Accounts × Mean ACV × Historical Win Rate', purpose: 'Quantifies revenue potential.' },
        { name: 'Accessibility Coefficient', formula: 'Accessible Accounts ÷ Total Theoretical Accounts', purpose: 'Prevents entry into blocked sectors.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Commercial Officer at Mid-Market Enterprise',
        scenario: 'Company was evaluating whether to expand its enterprise compliance software into Western Europe or Southeast Asia.',
        actionTaken: 'Executed a bottom-up Market Opportunity Map evaluating 12,000 corporate entities across both regions.',
        outcomeObserved: 'Discovered Western European mid-market financial services had 4x higher compliance urgency and willingness to pay, avoiding a costly premature Asian expansion.'
      },
      visualRecommendation: {
        type: 'Interactive Segment Value Map',
        description: 'Hierarchical treemap visualizing market size, contract value, and accessibility scores.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'B2B Businesses', path: '/industries/b2b' }
      ],
      nextStepCta: { label: 'Explore Opportunity Mapping', link: '#consultation' }
    },
    {
      id: 'market-whitespace',
      title: 'Market Whitespace Identification',
      groupName: 'Market & Segment Discovery',
      shortSummary: 'Identify underserved customer cohorts, unaddressed operational use cases, overlooked buyer workflows, and geographic gaps ignored by dominant incumbents.',
      businessChallenge: 'Founders and product leaders struggle to find differentiated positioning, frequently competing head-on against entrenched incumbents on price.',
      whyItMatters: 'Competing in saturated spaces requires huge advertising spend and deep discounting, destroying operating margins.',
      whatProfitMachinesDoes: 'We analyze customer dissatisfaction patterns, unfilled RFP requirements, and mid-tier account feature gaps to locate commercially viable whitespace.',
      howItWorks: [
        'Extract recurring customer complaints and capability gaps from public peer reviews, community forums, and customer support transcripts.',
        'Cross-reference incumbent pricing tiers against neglected customer segments unable to afford enterprise minimums.',
        'Map underserved workflow intersections where specialized solutions provide outsized customer value.',
        'Synthesize findings into an actionable Whitespace Opportunity Matrix.'
      ],
      relevantInputs: ['Competitor feature matrices', 'Industry user feedback databases', 'Lost opportunity notes', 'Pricing schedule tear-downs'],
      deliverables: ['Whitespace Opportunity Matrix', 'Feature-Gap Vulnerability Index', 'Defensible Positioning Blueprint'],
      businessValue: 'Allows organizations to establish category leadership in uncontested sub-segments without engaging in margin-diluting price wars.',
      kpis: [
        { name: 'Whitespace Demand Ratio', formula: 'Unmet Inquiry Volume ÷ Incumbent Solution Density', purpose: 'Highlights undersupplied sectors.' },
        { name: 'Positioning Differentiation Index', formula: 'Unique Proposition Attributes ÷ Total Category Attributes', purpose: 'Evaluates defensibility.' }
      ],
      illustrativeUseCase: {
        targetUser: 'B2B SaaS Founder',
        scenario: 'Faced stiff competition from legacy ERP giants that required 9-month implementations.',
        actionTaken: 'Isolated a whitespace for rapid 14-day supply-chain visibility targeting mid-tier food processors.',
        outcomeObserved: 'Secured 28 new enterprise accounts in two quarters with zero direct competitor displacement friction.'
      },
      visualRecommendation: {
        type: 'Competitive Whitespace Matrix',
        description: '2x2 quadrant plotting incumbent complexity vs unmet customer demand intensity.'
      },
      relatedCapabilities: [
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
        { name: 'Startups & Scaleups', path: '/industries/startups' }
      ],
      nextStepCta: { label: 'Audit Market Whitespace', link: '#consultation' }
    },
    {
      id: 'customer-segmentation',
      title: 'Customer & Market Segmentation',
      groupName: 'Market & Segment Discovery',
      shortSummary: 'Group potential buyers by operational fit, organizational complexity, procurement velocity, and lifetime value rather than simplistic demographic bands.',
      businessChallenge: 'Traditional marketing classifies accounts purely by employee count and revenue, grouping accounts with radically different buying behaviors into the same bucket.',
      whyItMatters: 'Sales teams waste months pitching enterprise procurement playbooks to agile growth companies or consumer-style self-serve models to regulated conglomerates.',
      whatProfitMachinesDoes: 'We construct behavioral, operational, and unit-economic segment profiles that predict sales-cycle length, discount sensitivity, and account expansion potential.',
      howItWorks: [
        'Analyze historical customer CRM logs to identify attributes common to high-retention, high-margin accounts.',
        'Cluster accounts by operational maturity, technology infrastructure, procurement governance, and growth velocity.',
        'Score each cluster on acquisition cost, service complexity, and net expansion rate.',
        'Establish dedicated go-to-market paths for each priority tier.'
      ],
      relevantInputs: ['Historical CRM deal records', 'Customer support ticket volume by tier', 'Billing and expansion histories', 'Technographic stack telemetry'],
      deliverables: ['Operational Segmentation Dossier', 'Tiered Account Playbooks', 'Segment Unit Economics Scorecard'],
      businessValue: 'Increases conversion velocity by matching messaging, pricing structures, and sales motions to actual buyer purchasing dynamics.',
      kpis: [
        { name: 'Segment Cohesion Score', formula: 'Intra-segment Variance of Deal Velocity ÷ Total Pipeline Variance', purpose: 'Tests segmentation validity.' },
        { name: 'Tiered Segment Margin', formula: 'Segment Revenue - Direct Cost-to-Serve ÷ Segment Revenue', purpose: 'Measures contribution.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Sales at Industrial Logistics Provider',
        scenario: 'Sales reps treated all regional freight customers identically, leading to high churn in low-margin accounts.',
        actionTaken: 'Segmented customer base into automated self-dispatch vs high-touch white-glove logistics.',
        outcomeObserved: 'Improved gross margins by 11.2% by eliminating over-servicing on low-margin contract accounts.'
      },
      visualRecommendation: {
        type: 'Segment Behavioral Clustering Diagram',
        description: 'Multi-dimensional cluster visualization showing margin vs velocity across 4 tiers.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Explore Segmentation Model', link: '#consultation' }
    },
    {
      id: 'profit-pool-mapping',
      title: 'Profit Pool Mapping',
      groupName: 'Financial & Margin Modeling',
      shortSummary: 'Examine where gross revenue, contribution margin, and true economic profit accumulate across industries, offer bundles, and buyer profiles.',
      businessChallenge: 'High top-line revenue frequently conceals negative unit economics, heavy customer onboarding drag, and disguised cost-to-serve overheads.',
      whyItMatters: 'Scaling an uninspected revenue engine can accelerate operational insolvency if expansion is fueled by structurally unprofitable accounts.',
      whatProfitMachinesDoes: 'We perform complete revenue-chain forensics, tracing gross booking dollars through direct implementation, onboarding friction, support load, and cloud compute costs.',
      howItWorks: [
        'Deconstruct the full value chain from acquisition spend through ongoing service delivery.',
        'Attribute direct and indirect cost drivers to individual customer cohorts and product offerings.',
        'Map economic profit margins across product SKUs, geographic territories, and buyer archetypes.',
        'Identify leakage points and construct high-margin packaging bundles.'
      ],
      relevantInputs: ['P&L statements by product line', 'Timesheet and customer support allocations', 'Infrastructure compute metrics', 'Contract discounting records'],
      deliverables: ['Enterprise Profit Pool Heatmap', 'Cost-to-Serve Telemetry Model', 'Margin Preservation Playbook'],
      businessValue: 'Protects enterprise profitability by directing sales incentives toward high-contribution deals and eliminating hidden margin subsidization.',
      kpis: [
        { name: 'Contribution Margin by Segment', formula: '(Segment Revenue - Variable Direct Costs) ÷ Segment Revenue', purpose: 'Monitors economic health.' },
        { name: 'Cost-to-Serve Ratio', formula: 'Account Operating Expenses ÷ Annual Account Contract Value', purpose: 'Detects over-servicing.' }
      ],
      illustrativeUseCase: {
        targetUser: 'CEO & Private Equity Operating Partner',
        scenario: 'Portfolio company grew revenue 45% YoY but EBITDA remained flat due to heavy customization requests.',
        actionTaken: 'Deployed Profit Pool Mapping across 340 corporate contracts.',
        outcomeObserved: 'Revealed that bottom 20% of accounts consumed 64% of engineering support, prompting contract restructuring that unlocked $4.2M in recurring EBITDA.'
      },
      visualRecommendation: {
        type: 'Profit Pool Cumulative Margin Waterfall',
        description: 'Waterfall graph demonstrating revenue volume vs actual cumulative economic profit.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' }
      ],
      nextStepCta: { label: 'Map Your Profit Pools', link: '#consultation' }
    },
    {
      id: 'buyer-intent-intelligence',
      title: 'Buyer Intent Intelligence',
      groupName: 'Demand & Intent Signals',
      shortSummary: 'Consolidate permitted first-party telemetry, commercial research footprints, and technical inquiry signals to identify accounts actively entering buying cycles.',
      businessChallenge: 'SDR teams rely on cold static lists and generic phone blitzes, contacting prospects when they have zero interest or need.',
      whyItMatters: 'Blind cold outreach yields less than 2% response rates, damages brand reputation, and burns rep morale.',
      whatProfitMachinesDoes: 'ProfitMachines configures intent-capture frameworks that aggregate authorized category search spikes, hiring signals, and content consumption to alert reps to active purchase windows.',
      howItWorks: [
        'Ingest authorized firm-level intent telemetry across category research nodes and job boards.',
        'Track first-party digital signals including pricing page revisits, documentation queries, and SDK downloads.',
        'Combine disparate signals into a unified Account Intent Velocity score.',
        'Trigger automated notification workflows directly into sales rep CRM queues.'
      ],
      relevantInputs: ['CRM account lists', 'Website telemetry with consent', 'Job board technology postings', 'Content consumption logs'],
      deliverables: ['Intent Velocity Dashboard', 'Account Prioritization Feed', 'Automated Intent Trigger Rules'],
      businessValue: 'Multiplies sales rep productivity by ensuring outbound conversations occur when target accounts are actively evaluating solutions.',
      kpis: [
        { name: 'Intent-to-Opportunity Conversion', formula: 'Intent-Triggered Opportunities ÷ Total Intent Alerts', purpose: 'Measures signal accuracy.' },
        { name: 'Sales Acceptance Rate', formula: 'Accepted Outreach Leads ÷ Total Delivered Leads', purpose: 'Validates lead relevance.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Director of Demand Generation',
        scenario: 'Marketing delivered thousands of generic ebook downloads that sales reps refused to call.',
        actionTaken: 'Implemented Buyer Intent Intelligence focused on pricing page engagement and compliance search spikes.',
        outcomeObserved: 'Sales acceptance rate increased from 14% to 76%, generating 42 qualified enterprise meetings in 30 days.'
      },
      visualRecommendation: {
        type: 'Multi-Signal Intent Radar',
        description: 'Radar chart displaying 1st-party, 2nd-party, and technographic signal convergence.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'B2B Businesses', path: '/industries/b2b' }
      ],
      nextStepCta: { label: 'Deploy Intent Framework', link: '#consultation' }
    },
    {
      id: 'demand-forecasting',
      title: 'Demand Forecasting',
      groupName: 'Demand & Intent Signals',
      shortSummary: 'Construct empirical forward-looking demand scenarios using historical deal velocity, macroeconomic indices, and pipeline leading indicators.',
      businessChallenge: 'Revenue forecasts are frequently built on optimistic rep conjecture and linear pipeline stages, resulting in sharp board-level revenue misses.',
      whyItMatters: 'Forecast unpredictability creates panic, hiring freezes, mismatched operational capacity, and investor skepticism.',
      whatProfitMachinesDoes: 'We replace subjective rep percentages with stochastic, Bayesian forecasting models that account for stage friction, committee size, and historical cycle slippage.',
      howItWorks: [
        'Ingest 24-36 months of granular CRM stage-progression and win/loss timestamps.',
        'Calculate empirical stage-to-stage transition probabilities and velocity distributions.',
        'Incorporate external demand indices such as industry capital expenditure trends and interest-rate shifts.',
        'Simulate 10,000 Monte Carlo pipeline outcomes to generate confidence intervals (P10, P50, P90).'
      ],
      relevantInputs: ['Historical CRM opportunity stage logs', 'Discounting and contract revision histories', 'Sales rep quota attainment tracking', 'Seasonality data'],
      deliverables: ['Stochastic Revenue Forecast Model', 'P10/P50/P90 Scenario Report', 'Pipeline Slippage Risk Alert Engine'],
      businessValue: 'Provides leadership with defensible, mathematically grounded revenue forecasts for confident board and resource planning.',
      kpis: [
        { name: 'Forecast Precision Variance', formula: '|Actual Bookings - Forecast Bookings| ÷ Actual Bookings', purpose: 'Tracks prediction error.' },
        { name: 'Pipeline Slippage Coefficient', formula: 'Delayed Deals in Period ÷ Total Deals Expected to Close', purpose: 'Identifies cycle drag.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Financial Officer at Enterprise SaaS Firm',
        scenario: 'Sales leadership missed quarterly board forecasts three quarters in a row due to late-stage deal push-outs.',
        actionTaken: 'Replaced manual rep forecasts with a Bayesian Demand Forecast model.',
        outcomeObserved: 'Reduced quarterly forecast variance to within 4.1%, restoring board credibility and enabling planned expansion hiring.'
      },
      visualRecommendation: {
        type: 'Probabilistic Fan Chart',
        description: 'P10, P50, and P90 forecast distribution envelopes plotted against actual revenue trajectory.'
      },
      relatedCapabilities: [
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' }
      ],
      nextStepCta: { label: 'Build Demand Forecast', link: '#consultation' }
    },
    {
      id: 'icp-discovery',
      title: 'Ideal Customer Profile (ICP) Discovery',
      groupName: 'Targeting & Stakeholder Mapping',
      shortSummary: 'Isolate the specific organizational, cultural, and technographic attributes of accounts that close faster, expand naturally, and retain permanently.',
      businessChallenge: 'Teams maintain generic ICP descriptions such as "B2B companies with $50M revenue" that provide zero qualification guidance to marketing or sales.',
      whyItMatters: 'Vague ICPs cause marketing to purchase unproductive ad clicks and sales reps to engage unqualified prospects for months.',
      whatProfitMachinesDoes: 'We analyze top-decile customer performance data to extract non-obvious firmographic, technographic, and organizational triggers that signal high win probability.',
      howItWorks: [
        'Conduct statistical regression on top-performing customer accounts vs churned or stalled opportunities.',
        'Isolate discriminating characteristics including tech stack integrations, executive turnover, and regulatory deadlines.',
        'Formulate an objective 100-point ICP Qualification Scorecard.',
        'Integrate scoring directly into CRM lead ingestion and routing workflows.'
      ],
      relevantInputs: ['Closed-won vs closed-lost CRM data', 'Customer Net Promoter Score (NPS) surveys', 'Expansion contract histories', 'Third-party enrichment records'],
      deliverables: ['Empirical ICP Scorecard', 'Account Disqualification Filter', 'Target Account Universe Master List'],
      businessValue: 'Eliminates wasted sales cycles by giving teams objective, empirical criteria to instantly disqualify poor-fit accounts.',
      kpis: [
        { name: 'ICP Pipeline Concentration', formula: 'Pipeline Value Meeting Tier-1 ICP ÷ Total Pipeline Value', purpose: 'Monitors qualification rigor.' },
        { name: 'Win-Rate Differential', formula: 'Tier-1 ICP Win Rate ÷ Non-ICP Win Rate', purpose: 'Proves profile accuracy.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Marketing & VP of Sales',
        scenario: 'Sales claimed marketing leads were low quality; marketing argued sales reps failed to follow up.',
        actionTaken: 'Executed an ICP Discovery audit analyzing 400 closed deals.',
        outcomeObserved: 'Found accounts with multi-cloud environments closed 3.8x faster with 92% retention, aligning marketing spend exclusively on multi-cloud enterprises.'
      },
      visualRecommendation: {
        type: 'ICP Discriminant Factor Matrix',
        description: 'Bar chart ranking technical and organizational triggers by their statistical impact on win rate.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Enterprise Organizations', path: '/industries/enterprise' }
      ],
      nextStepCta: { label: 'Formulate Your ICP', link: '#consultation' }
    },
    {
      id: 'buying-committee-intelligence',
      title: 'Buying Committee Intelligence',
      groupName: 'Targeting & Stakeholder Mapping',
      shortSummary: 'Map economic buyers, technical evaluators, security gates, procurement controllers, and informal influencers across complex account hierarchies.',
      businessChallenge: 'SDRs and reps anchor deals on a single enthusiastic champion, only to have the proposal vetoed late in the cycle by security or finance.',
      whyItMatters: 'Single-threaded enterprise deals stall 65% of the time, causing unpredictable pipeline slippage and wasted quarter-end effort.',
      whatProfitMachinesDoes: 'We construct multi-stakeholder organizational dossier templates that identify typical evaluation committees, approval thresholds, and security review requirements.',
      howItWorks: [
        'Analyze historical win/loss data to uncover all job titles involved in signed agreements.',
        'Map the standard 5 enterprise roles: Economic Buyer, Champion, Technical Evaluator, Compliance/Security Gate, and Procurement.',
        'Formulate role-specific value narratives and objection playbooks for each persona.',
        'Equip sales reps with multi-threading verification checklists at each deal stage.'
      ],
      relevantInputs: ['CRM opportunity contact roles', 'Call recording transcripts', 'Security questionnaire archives', 'Procurement negotiation logs'],
      deliverables: ['Buying Committee Matrix', 'Role-Specific Narrative Playbook', 'Multi-Threading Governance Checklist'],
      businessValue: 'Dramatically reduces late-stage deal loss by ensuring all buying committee members are identified, engaged, and aligned early.',
      kpis: [
        { name: 'Stakeholder Multi-Threading Index', formula: 'Engaged Buying Committee Roles ÷ Standard Expected Roles', purpose: 'Protects deal health.' },
        { name: 'Late-Stage Security Block Rate', formula: 'Deals Stalled in Security ÷ Total Deals at Proposal Stage', purpose: 'Tracks approval bottlenecks.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Enterprise Sales Director',
        scenario: 'Team lost 6 major seven-figure deals in Q3 during final legal review because CISOs rejected data storage provisions.',
        actionTaken: 'Mandated Buying Committee Intelligence requiring CISO security alignment by Stage 2.',
        outcomeObserved: 'Eliminated surprise legal-stage vetoes and increased enterprise win rate from 21% to 39% in two quarters.'
      },
      visualRecommendation: {
        type: 'Buying Committee Influence Topology',
        description: 'Network graph displaying stakeholder relationships, approval flow, and sentiment indicators.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'Enterprise Organizations', path: '/industries/enterprise' }
      ],
      nextStepCta: { label: 'Map Buying Committees', link: '#consultation' }
    },
    {
      id: 'value-pool-roi-modeling',
      title: 'Value Pool & ROI Modeling',
      groupName: 'Financial & Margin Modeling',
      shortSummary: 'Quantify tangible operational savings, revenue upside, capital efficiency gains, and payback timelines to build undeniable business cases for buyer CFOs.',
      businessChallenge: 'Sales reps present feature lists and subjective ROI promises that executive buyers and finance committees dismiss during budget scrutinies.',
      whyItMatters: 'Without an auditable, conservative business case, proposals are deferred as non-urgent discretionary expenditures.',
      whatProfitMachinesDoes: 'We develop transparent, verifiable financial models that quantify the economic cost of inaction (COI) and model clear payback periods.',
      howItWorks: [
        'Identify specific operational cost drivers and revenue leakage mechanisms across the customer organization.',
        'Establish baseline metrics using customer-provided operational benchmarks.',
        'Construct dynamic financial models showing conservative, expected, and aggressive returns.',
        'Package the analysis into an executive-ready business case document designed for the buyer CFO.'
      ],
      relevantInputs: ['Customer labor and operational cost rates', 'Current tooling expense schedules', 'Baseline performance metrics', 'Implementation timeframe assumptions'],
      deliverables: ['CFO-Ready Value Realization Model', 'Cost of Inaction (COI) Calculator', 'Executive Board Business Case Deck'],
      businessValue: 'Elevates proposals from software procurement to strategic business investment, securing executive sponsorship and protecting pricing power.',
      kpis: [
        { name: 'Economic Payback Duration', formula: 'Total Implementation Investment ÷ Monthly Quantified Net Savings', purpose: 'Measures financial appeal.' },
        { name: 'Business Case Acceptance Rate', formula: 'CFO-Approved Business Cases ÷ Total Delivered Cases', purpose: 'Validates model credibility.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Head of Enterprise Sales',
        scenario: 'Prospects were ghosting reps after receiving proposals, citing board-mandated budget freezes.',
        actionTaken: 'Equipped reps with customer-specific Cost of Inaction models proving delays cost $45,000 per month.',
        outcomeObserved: 'Compressed average approval time from 110 days to 44 days and eliminated 80% of discount requests.'
      },
      visualRecommendation: {
        type: 'Value Realization & Payback Horizon Curve',
        description: 'Financial graph contrasting baseline operational costs against post-implementation net cash flow.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' }
      ],
      nextStepCta: { label: 'Build Your Value Model', link: '#consultation' }
    },
    {
      id: 'competitive-intelligence-pmf',
      title: 'Competitive Intelligence & Product-Market Fit',
      groupName: 'Targeting & Stakeholder Mapping',
      shortSummary: 'Benchmark competitive strengths, uncover competitor pricing vulnerabilities, and calibrate solution capabilities to customer willingness-to-pay.',
      businessChallenge: 'Companies rely on surface-level competitor battlecards written by marketing that fail to address real prospect objections during live sales calls.',
      whyItMatters: 'Reps get blindsided by competitor claims, leading to panicked discounting and defensive deal positioning.',
      whatProfitMachinesDoes: 'We conduct forensic teardowns of competitor architectures, pricing tiers, customer churn signals, and feature limitations to provide field-ready battle intelligence.',
      howItWorks: [
        'Analyze public win/loss interviews, technical documentation, and customer reviews across competing vendors.',
        'Extract recurring technical limitations, hidden fee structures, and support friction in competitor models.',
        'Map your solution differentiators directly against competitor vulnerabilities.',
        'Equip sales teams with dynamic competitor response toolkits and tactical objection reframes.'
      ],
      relevantInputs: ['Competitor contract terms and pricing sheets', 'Win/loss interview records', 'Customer migration histories', 'Analyst evaluation reports'],
      deliverables: ['Competitor Architectural Teardown Dossier', 'Live CRM Sales Battlecards', 'Competitive Displacement Playbook'],
      businessValue: 'Empowers sales reps to proactively steer buyer evaluation criteria toward your architectural strengths and away from competitor traps.',
      kpis: [
        { name: 'Head-to-Head Win Rate', formula: 'Wins Against Named Competitor ÷ Total Deals Involving Competitor', purpose: 'Measures field effectiveness.' },
        { name: 'Discounting Pressure Ratio', formula: 'Average Discount in Competitive Deals ÷ Non-Competitive Discount', purpose: 'Tracks pricing defense.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Commercial Strategy',
        scenario: 'Firm was losing 45% of deals to a well-funded competitor that offered aggressive upfront discounts.',
        actionTaken: 'Executed deep architectural forensics revealing competitor charged 300% premiums for API calls and premium support in year two.',
        outcomeObserved: 'Armed sales reps with a 3-Year Total Cost of Ownership calculator, lifting head-to-head win rates to 68%.'
      },
      visualRecommendation: {
        type: 'Competitive Vulnerability Matrix',
        description: 'Comparative spider chart plotting architectural capability, pricing transparency, and support velocity.'
      },
      relatedCapabilities: [
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' }
      ],
      nextStepCta: { label: 'Dissect Competitor Moats', link: '#consultation' }
    }
  ],
  workflow: [
    {
      stepNumber: '01',
      phase: 'INGEST',
      title: 'Telemetry & Baseline Ingestion',
      duration: 'Weeks 1–2',
      objective: 'Ingest historical deal transactions, win/loss logs, customer support tickets, and CRM records to establish baseline metrics.',
      keyActivities: ['Ingest CRM stage timestamps', 'Extract contract line items and discounting data', 'Execute data quality cleansing'],
      outputDeliverable: 'Baseline Revenue Leak & Pipeline Audit',
      decisionGate: 'Executive validation of historical margin and pipeline baseline parameters.'
    },
    {
      stepNumber: '02',
      phase: 'MAP',
      title: 'Market & Profit Pool Decomposition',
      duration: 'Weeks 2–3',
      objective: 'Deconstruct aggregate market into accessible micro-segments, identify whitespace, and model unit economics.',
      keyActivities: ['Cluster accounts by operational profile', 'Calculate cost-to-serve allocations', 'Isolate high-yield whitespace'],
      outputDeliverable: 'Market Opportunity Map & Profit Pool Heatmap',
      decisionGate: 'Board alignment on top 3 priority segments for capital allocation.'
    },
    {
      stepNumber: '03',
      phase: 'VALIDATE',
      title: 'ICP & Committee Calibration',
      duration: 'Weeks 3–4',
      objective: 'Define empirical ICP scorecard, map typical buying committees, and structure buyer intent triggers.',
      keyActivities: ['Formulate 100-point ICP rubric', 'Map buying committee roles', 'Establish intent signal detection rules'],
      outputDeliverable: 'Empirical ICP Scorecard & Intent Detection Rules',
      decisionGate: 'Sales leadership adoption of new qualification and routing standards.'
    },
    {
      stepNumber: '04',
      phase: 'ACTIVATE',
      title: 'Execution & Telemetry Deployment',
      duration: 'Weeks 4–6',
      objective: 'Deploy finalized playbooks, integrate scoring models into CRM, and establish continuous telemetry.',
      keyActivities: ['Configure CRM routing algorithms', 'Train sales reps on value models', 'Launch executive telemetry cockpit'],
      outputDeliverable: 'Live Opportunity Prioritization Engine',
      decisionGate: 'Full operational handoff to revenue and demand engineering teams.'
    }
  ],
  metrics: [
    {
      metricName: 'Addressable Whitespace Value',
      category: 'Commercial',
      definition: 'Estimated total contract value of identified accounts that match Tier-1 ICP and lack entrenched incumbent contracts.',
      formula: 'Σ (Qualified Whitespace Accounts × Target ACV)',
      benchmarkContext: 'Typically reveals 2-4x higher accessible pipeline than legacy top-down market reports.'
    },
    {
      metricName: 'Gross Contribution Margin',
      category: 'Financial & Retention',
      definition: 'Percentage of contract revenue remaining after subtracting direct variable cost-to-serve and implementation expenses.',
      formula: '(Contract Revenue - Direct Variable Service Costs) ÷ Contract Revenue',
      benchmarkContext: 'High-performing enterprise software models target 75-85% contribution margin.'
    },
    {
      metricName: 'ICP Win-Rate Lift',
      category: 'Operational',
      definition: 'Percentage improvement in opportunity win rate for deals matching Tier-1 ICP compared to legacy aggregate pipeline.',
      formula: '(Tier-1 Win Rate - Baseline Win Rate) ÷ Baseline Win Rate',
      benchmarkContext: 'Audited deployments observe 25-45% win-rate lift when strict ICP qualification is enforced.'
    },
    {
      metricName: 'Sales Cycle Compression',
      category: 'Productivity',
      definition: 'Average number of calendar days reduced from initial qualified discovery call to executed customer agreement.',
      formula: 'Baseline Average Days to Close - Current Average Days to Close',
      benchmarkContext: 'Targeting calibrated buying committees typically compresses cycles by 20-35%.'
    },
    {
      metricName: 'Cost-to-Serve Efficiency',
      category: 'Financial & Retention',
      definition: 'Ratio of post-sales support hours required per $100k in contract value across customer cohorts.',
      formula: 'Annual Support Hours ÷ (Annual Contract Value ÷ $100,000)',
      benchmarkContext: 'Highlights over-serviced low-margin accounts for contract restructuring.'
    },
    {
      metricName: 'Forecast Realization Ratio',
      category: 'Commercial',
      definition: 'Degree of accuracy between projected monthly demand scenarios and actual closed-won transaction volume.',
      formula: '1 - (|Actual Bookings - Modeled Demand| ÷ Actual Bookings)',
      benchmarkContext: 'Bayesian demand modeling consistently achieves >92% quarterly realization.'
    }
  ],
  faqs: [
    {
      question: 'How is Profit Pool Discovery different from traditional market research reports?',
      answer: 'Traditional reports rely on top-down macroeconomic estimates and qualitative analyst opinions that offer zero tactical qualification guidance. Profit Pool Discovery performs bottom-up empirical forensics on actual transaction data, firmographic registries, verified buying committee roles, and true cost-to-serve metrics to deliver operational playbooks your sales and marketing teams can execute immediately.'
    },
    {
      question: 'What data sources are required from our company to begin?',
      answer: 'We typically ingest anonymized historical CRM opportunity records, closed-won/closed-lost notes, contract pricing schedules, and customer support allocation data. No confidential proprietary IP or customer PII is required. All engagements are executed under mutual enterprise non-disclosure agreements.'
    },
    {
      question: 'How long does a Profit Pool Discovery diagnostic sprint take?',
      answer: 'A standard diagnostic sprint runs 4 to 6 weeks from initial telemetry ingestion to the delivery of the finalized Market Opportunity Map, Empirical ICP Scorecard, and executive telemetry model.'
    },
    {
      question: 'Does this require replacing our existing CRM or tech stack?',
      answer: 'No. Our frameworks are designed to ingest data from and integrate directly into your existing Salesforce, HubSpot, or custom CRM systems via standard APIs and structured data pipelines without ripping and replacing existing infrastructure.'
    },
    {
      question: 'Can we apply Profit Pool Discovery to new international market expansion?',
      answer: 'Yes. Market Opportunity Mapping and Whitespace Identification are specifically engineered to evaluate cross-border commercial corridors, foreign regulatory friction, and regional willingness to pay before committing expansion capital.'
    }
  ],
  primaryCtaText: 'Explore Discovery Capabilities',
  secondaryCtaText: 'Discuss Market Opportunities'
};

