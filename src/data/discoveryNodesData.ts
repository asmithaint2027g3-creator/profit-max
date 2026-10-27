export interface DiscoveryNode {
  id: string;
  slug: string;
  originNumber: string;
  originName: string;
  nodeNumber: string;
  title: string;
  structureType: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  
  // Section 2: Problem
  problemHeadline: string;
  problemBody: string;
  problemStats?: { label: string; value: string; change: string }[];

  // Section 3: Offering / Solution
  offeringHeadline: string;
  offeringBody: string;
  offeringHighlights?: string[];

  // Section 4: Deliverables
  deliverablesHeadline: string;
  deliverables: { title: string; desc: string; icon?: string }[];

  // Section 5: Architecture & Stack
  architectureHeadline: string;
  architecturePoints: { title: string; desc: string }[];

  // Section 6: Verified Outcomes
  outcomesHeadline: string;
  outcomes: { metric: string; label: string; description: string }[];

  // Section 7: Realization Loop
  realizationHeadline: string;
  realizationBody: string;
  realizationSteps: { stage: string; action: string; frequency: string }[];

  // Section 8: Visual Element Config
  visualType: 
    | 'profit-pool-matrix'
    | 'velocity-telemetry'
    | 'risk-concentration'
    | 'pricing-architecture'
    | 'propensity-radar'
    | 'trigger-flow'
    | 'competitor-battlecard'
    | 'ecosystem-gravity'
    | 'packaging-ladder'
    | 'cost-to-serve-matrix'
    | 'alliance-roi-dashboard'
    | 'platform-risk-matrix'
    | 'validation-funnel'
    | 'market-war-room'
    | 'channel-conflict-matrix'
    | 'launch-command-timeline';
  visualTitle: string;
  visualSubtitle: string;

  // Section 9: Case Study
  caseStudy: {
    title: string;
    headline: string;
    body: string;
    beforeMetric: string;
    afterMetric: string;
    impactLabel: string;
  };

  // Section 10: Comparison (optional)
  comparison?: {
    beforeTitle: string;
    beforeItems: string[];
    afterTitle: string;
    afterItems: string[];
  };
}

export interface OriginCategory {
  id: string;
  originNumber: string;
  name: string;
  tagline: string;
  description: string;
  firstNodeSlug: string;
  nodes: {
    slug: string;
    title: string;
    nodeNumber: string;
    summary: string;
  }[];
}

export const originsCategories: OriginCategory[] = [
  {
    id: 'core-discovery',
    originNumber: 'Core Discovery',
    name: 'Core Discovery',
    tagline: 'Where the margin is, what buyers pay, who buys now, and who you fight.',
    description: 'Eight diagnostic nodes that map your complete revenue surface — dissecting aggregate TAM into defensible micro-segments, fixing demand leaks, evidence-based pricing, live intent routing, and competitive disassembly.',
    firstNodeSlug: 'micro-market',
    nodes: [
      { slug: 'micro-market', title: 'Micro-Market Discovery', nodeNumber: 'Node 1.1', summary: 'Dissect TAM into unit-economic micro-segments and own the high-margin cohort.' },
      { slug: 'demand-chain', title: 'Demand Chain Discovery', nodeNumber: 'Node 1.2', summary: 'Identify where deals leak and rebuild generate-capture-convert with telemetry.' },
      { slug: 'channel', title: 'Channel Discovery', nodeNumber: 'Node 1.3', summary: 'De-risk 60%+ single-channel dependency and build an owned demand engine.' },
      { slug: 'willingness-to-pay', title: 'Willingness-to-Pay Discovery', nodeNumber: 'Node 1.4', summary: 'Replace pricing instinct with buyer-evidenced pricing tiers and discount floors.' },
      { slug: 'propensity', title: 'Customer Propensity Discovery', nodeNumber: 'Node 1.5', summary: 'Nightly account rescoring on intent, technographics, and buying signals.' },
      { slug: 'usage-to-revenue', title: 'Usage-to-Revenue Discovery', nodeNumber: 'Node 1.6', summary: 'Wire behavioral product milestones directly to automated upgrade triggers.' },
      { slug: 'competitor', title: 'Competitor Discovery', nodeNumber: 'Node 1.7', summary: 'Deal-by-deal rival teardowns, live battlecards, and win/loss pattern detection.' },
      { slug: 'ecosystem', title: 'Competitive Ecosystem Discovery', nodeNumber: 'Node 1.8', summary: 'Map marketplace gravity, platform embeddings, and structural positions.' },
    ]
  },
  {
    id: 'supply-chain-discovery',
    originNumber: 'Supply Chain Discovery',
    name: 'Supply Chain Discovery',
    tagline: 'What you sell, at what margin, and what it truly costs to fulfill.',
    description: 'Two nodes engineering offer architecture and customer-level fulfillment economics — recovering lost gross margin and stress-testing operational capacity.',
    firstNodeSlug: 'offer-architecture',
    nodes: [
      { slug: 'offer-architecture', title: 'Offer & Revenue Architecture', nodeNumber: 'Node 2.1', summary: 'Rebuild packaging tiers, upgrade triggers, and CFO-ready ROI business cases.' },
      { slug: 'cost-to-serve', title: 'Cost-to-Serve & Capacity', nodeNumber: 'Node 2.2', summary: 'Audit customer and SKU unit margin to fix or reprice negative-margin accounts.' },
    ]
  },
  {
    id: 'ecosystem-discovery',
    originNumber: 'Ecosystem Discovery',
    name: 'Ecosystem Discovery',
    tagline: 'Revenue you do not build alone: alliances, platforms, and adjacent ground.',
    description: 'Two nodes governing external leverage — transforming partner logos into measured co-sell pipeline and de-risking platform concentration.',
    firstNodeSlug: 'alliance',
    nodes: [
      { slug: 'alliance', title: 'Alliance & Co-Sell', nodeNumber: 'Node 3.1', summary: 'Tier partners by measured revenue contribution, co-sell attribution, and incentive ROI.' },
      { slug: 'platform-adjacency', title: 'Platform & Adjacency', nodeNumber: 'Node 3.2', summary: 'De-risk platform dependencies and expand into adjacent vertical markets.' },
    ]
  },
  {
    id: 'expansion-discovery',
    originNumber: 'Expansion Discovery',
    name: 'Expansion Discovery',
    tagline: 'New offerings, new markets, new channels, new launches — verified before capital spend.',
    description: 'Four nodes ensuring growth bets are mathematically de-risked — validating buyer willingness-to-pay with LOIs before build and deploying day-0 launch command telemetry.',
    firstNodeSlug: 'new-offering',
    nodes: [
      { slug: 'new-offering', title: 'New Offering Discovery', nodeNumber: 'Node 4.1', summary: 'Validate buyer willingness-to-pay and secure pre-build LOIs before development.' },
      { slug: 'new-market', title: 'New Market Discovery', nodeNumber: 'Node 4.2', summary: 'Score 5-10 geo/vertical markets by profit pool and execute a 90-day entry war-room.' },
      { slug: 'new-channel', title: 'New Channel Discovery', nodeNumber: 'Node 4.3', summary: 'Model channel economics, prevent direct-sales conflict, and pilot with telemetry.' },
      { slug: 'new-launch', title: 'New Product Launch Discovery', nodeNumber: 'Node 4.4', summary: 'Replace coin-flip launches with Day-0 command center telemetry and kill/scale gates.' },
    ]
  }
];

export const discoveryNodes: Record<string, DiscoveryNode> = {
  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.1 — MICRO-MARKET DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'micro-market': {
    id: 'micro-market',
    slug: 'micro-market',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.1',
    title: 'Micro-Market Discovery',
    structureType: 'Problem-Solution-Proof',
    heroEyebrow: 'NODE 1.1',
    heroHeadline: 'Which Micro-Segment Carries the Margin — and Can We Defend It?',
    heroSubheadline: 'TAM hides where contribution margin concentrates. You invest in big-looking segments that lose money. The board asks why growth stalls while the market grows. We dissect TAM into unit-economic micro-segments and pick the one you can own.',
    ctaText: 'Start Micro-Market Discovery',

    problemHeadline: 'TAM Is a Trap',
    problemBody: 'You size markets top-down. TAM looks impressive in the board deck. But TAM hides where contribution margin concentrates. You invest in big-looking segments that lose money. The board asks why growth stalls while the market grows. The problem isn’t the market. The problem is you’re looking at the wrong level of granularity.',
    problemStats: [
      { label: 'Unprofitable TAM Spend', value: '68%', change: 'Capital dissipated on low-margin sub-segments' },
      { label: 'Margin Variance by Micro-Cohort', value: '4.2×', change: 'Spread between top and bottom customer deciles' },
      { label: 'Defensible Market Share', value: '12%', change: 'Average held in generic broad segments' }
    ],

    offeringHeadline: 'Micro-Market Discovery Dossier',
    offeringBody: 'We dissect your TAM into unit-economic micro-segments. We map profit pools by segment. We score defensibility against your competitive field. We calculate entry and exit economics per segment. We name the one segment you can own — and prove it with margin data, not TAM headlines.',
    offeringHighlights: [
      'Customer-level margin extraction and profit concentration curves',
      'Defensibility scorecards across switching costs, tech moats, and channel gravity',
      'Granular unit-economic modeling (CAC, LTV, Contribution Margin per micro-cohort)',
      'Board-grade capital reallocation blueprints shifting budget from low to high-margin segments'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Profit Pool Map by Micro-Segment', desc: 'Granular heatmap revealing where gross and net contribution margin actually concentrate.' },
      { title: 'Defensibility Scorecard vs. Top 5 Rivals', desc: 'Quantitative scorecards evaluating your ability to capture and hold each micro-cohort long-term.' },
      { title: 'Entry/Exit Economics per Segment', desc: 'Precise financial modeling detailing exact customer acquisition costs, payback periods, and exit economics.' },
      { title: 'Named Target Segment with Margin Proof', desc: 'Not top-down TAM headline estimates, but audited unit-economic proof of the defensible core.' },
      { title: 'Resource Reallocation Recommendation', desc: 'Actionable executive directives re-weighting budget, sales capacity, and marketing spend into the owned segment.' }
    ],

    architectureHeadline: 'How We Dissect TAM',
    architecturePoints: [
      { title: 'Customer-Level Margin Analysis', desc: 'Extracting audited ledger data to isolate actual contribution margin by customer cohort rather than blended segment averages.' },
      { title: 'Competitive Overlap Mapping', desc: 'Evaluating competitor saturation, win rates, and deal-cycle friction across specific micro-verticals.' },
      { title: 'Unit-Economic Modeling', desc: 'Calculating LTV, CAC, payback period, and net retention dynamics for every discrete micro-segment.' },
      { title: 'Defensibility Scoring', desc: 'Scoring proprietary IP moats, switching friction, network dynamics, and regulatory barriers against top 5 rivals.' },
      { title: 'Profit Pool Visualization', desc: 'Mapping exact capital concentration across the category to expose where the true profit pool lives.' }
    ],

    outcomesHeadline: 'Measured Results',
    outcomes: [
      { metric: '100%', label: 'TAM Dissected', description: 'Complete decomposition of aggregate market into discrete, measured micro-segments.' },
      { metric: '1 Named', label: 'Owned Target Segment', description: 'Single high-margin segment locked with verifiable unit-economic proof.' },
      { metric: 'Top 5', label: 'Defensibility Scored', description: 'Full competitive moat assessment across every direct and indirect incumbent.' },
      { metric: '100%', label: 'Resource Reallocation Locked', description: 'Budget, pipeline targets, and sales headcount aligned to the profit-rich cohort.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Segment economics reviewed quarterly. Resource allocation re-weighted to the owned segment. Whitespace re-scanned annually for drift. You don’t just pick a segment once — you continuously optimize around it.',
    realizationSteps: [
      { stage: 'Quarterly Segment Audits', action: 'Re-evaluating contribution margin, CAC payback, and churn trends by micro-cohort.', frequency: 'Every 90 Days' },
      { stage: 'Resource Re-Weighting', action: 'Shifting SDR and advertising capacity dynamically into high-margin cohorts.', frequency: 'Monthly' },
      { stage: 'Whitespace Drift Scans', action: 'Monitoring competitor movements and new entrant encroachment in adjacent pools.', frequency: 'Bi-Annually' }
    ],

    visualType: 'profit-pool-matrix',
    visualTitle: 'Profit Pool & Defensibility Matrix',
    visualSubtitle: 'Unit-Economic Dissection vs. Competitive Defensibility',

    caseStudy: {
      title: 'B2B Enterprise SaaS',
      headline: '15-Point Margin Recovery Through Micro-Segment Focus',
      body: 'A B2B SaaS company was investing in a $2B broad enterprise TAM segment with an 8% contribution margin. We dissected the TAM and discovered a $400M micro-segment with 32% contribution margin and superior defensibility. We shifted resources, exited the low-margin segment, and recovered 15 points of gross margin in 6 months.',
      beforeMetric: '8% Margin',
      afterMetric: '23% Margin',
      impactLabel: '+15 Gross Margin Points Recovered'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.2 — DEMAND CHAIN DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'demand-chain': {
    id: 'demand-chain',
    slug: 'demand-chain',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.2',
    title: 'Demand Chain Discovery',
    structureType: 'Diagnostic-Telemetry-Optimization',
    heroEyebrow: 'NODE 1.2',
    heroHeadline: 'Where Does the Demand Chain Leak — and How Do We Fix It?',
    heroSubheadline: 'Disconnected demand channels. Deals stall between discovery and proposal while in-market buyers go unseen. You pay to generate demand you can’t capture or convert. Another quarter-end forecast miss. We rebuild generate → capture → convert as one telemetry-driven chain.',
    ctaText: 'Install Demand Chain Telemetry',

    problemHeadline: 'The Demand Chain Is Broken',
    problemBody: 'Your demand generation is disconnected. Marketing generates leads. Sales captures some. Conversion is a mystery. Deals stall between discovery and proposal. In-market buyers go unseen. You pay to generate demand you can’t capture or convert. Another quarter-end forecast miss. The problem isn’t any one stage. The problem is the chain has no telemetry.',
    problemStats: [
      { label: 'Stage-Slip Stall Rate', value: '47%', change: 'Deals trapped between stage 2 and proposal without alerts' },
      { label: 'Unseen In-Market Demand', value: '73%', change: 'Active high-intent accounts never reached in time' },
      { label: 'Forecast Variance', value: '±34%', change: 'Quarter-end discrepancies due to lagging indicators' }
    ],

    offeringHeadline: 'Demand Chain Diagnostic & Rebuild',
    offeringBody: 'We diagnose every stage joint in your demand chain. We quantify the leak at each stage. We rebuild the weakest joint first. We install velocity telemetry so you can see stalls in real time. We turn generate → capture → convert into one connected, measured chain.',
    offeringHighlights: [
      'Joint-by-joint telemetry analyzing slip and conversion friction',
      'Automated stall-detection triggers when deals languish beyond benchmark velocity',
      'Unified data pipelines connecting top-of-funnel signals directly to deal execution',
      'Live Velocity Command Center published for revenue leadership from Week 3'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Demand Chain Friction Audit', desc: 'Quantitative breakdown of leak rates, conversion friction, and drop-off causes across every pipeline stage.' },
      { title: 'Velocity Command Center Dashboard', desc: 'Real-time telemetry monitor surfacing pipeline flow velocity, stage latency, and conversion efficiency.' },
      { title: 'Automated Stall-Detection System', desc: 'Algorithmic early-warning alerts triggering intervention plays before deals go cold.' },
      { title: 'Generate-Capture-Convert Playbooks', desc: 'Standardized operational sequences aligning marketing campaigns, SDR qualification, and AE closings.' },
      { title: 'Monthly Forecast vs. Actual Telemetry', desc: 'Mathematical predictability models tracking leading indicators to guarantee forecast reliability.' }
    ],

    architectureHeadline: 'Generate → Capture → Convert as One Chain',
    architecturePoints: [
      { title: 'Stage-by-Stage Conversion Tracking', desc: 'Measuring exact velocity and leak coefficients across Generate, Capture, and Convert stages.' },
      { title: 'Stall Detection Algorithms', desc: 'Flagging accounts stalled >X days against historical win benchmarks to trigger automated re-engagement.' },
      { title: 'Velocity Telemetry', desc: 'Calculating real-time deal movement velocity rather than static pipeline snapshots.' },
      { title: 'Forecast vs. Actual Modeling', desc: 'Publishing monthly calibration curves to eliminate end-of-quarter surprises.' },
      { title: 'Automated Intervention Playbooks', desc: 'Triggering contextual content, executive touches, and technical validation when deals flag stall risks.' }
    ],

    outcomesHeadline: 'Measured Results',
    outcomes: [
      { metric: 'Week 2', label: 'Every Stage Measured', description: 'Zero blind spots across generate, capture, and convert stages.' },
      { metric: '-50%', label: 'Stall Rate Reduction', description: 'Pipeline velocity restored within 2 quarters of telemetry deployment.' },
      { metric: '25-40%', label: 'Cycle Time Reduction', description: 'Faster deal cycles through automated stall intervention workflows.' },
      { metric: '±10%', label: 'Forecast Accuracy', description: 'Reliable predictability replacing subjective rep opinions.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Velocity Command Center live from week 3. Stall alerts at defined thresholds. Forecast vs. actual published monthly. You don’t just fix the chain once — you continuously optimize it.',
    realizationSteps: [
      { stage: 'Live Telemetry Feeds', action: 'Monitoring real-time velocity and pipeline leak rates daily.', frequency: 'Continuous / 24/7' },
      { stage: 'Threshold Stall Triggers', action: 'Firing automated intervention sequences when pipeline stages stagnate.', frequency: 'Real-Time' },
      { stage: 'Forecast Calibration', action: 'Benchmarking predicted conversion vs. closed revenue.', frequency: 'Monthly' }
    ],

    comparison: {
      beforeTitle: 'Fragmented Demand Motion',
      beforeItems: [
        'Marketing logs leads; sales questions lead quality in silos',
        'Deals stall invisibly for 45+ days without notifications',
        'End-of-quarter revenue misses attributed to bad luck',
        'Lagging indicators like closed-lost CRM notes tell you too late'
      ],
      afterTitle: 'Telemetry-Driven Connected Chain',
      afterItems: [
        'Single continuous generate → capture → convert pipeline',
        'Real-time alerts fire on Day 7 of stall with automated playbooks',
        'Forecast accuracy holds within ±10% month-over-month',
        'Leading telemetry predicts deal outcome weeks before close date'
      ]
    },

    visualType: 'velocity-telemetry',
    visualTitle: 'Velocity Command Center Telemetry',
    visualSubtitle: 'Real-Time Stage Latency, Slip Rates & Intervention Triggers',

    caseStudy: {
      title: 'Infrastructure Software Provider',
      headline: '42% Cycle Time Reduction and 50% Fewer Stalled Deals',
      body: 'An enterprise cloud software company suffered from 90-day average sales cycles with deals stalling invisibly in the proposal stage. We diagnosed the chain, installed velocity telemetry, and automated technical counter-proposals. In 2 quarters, deal stall rates were cut in half and sales cycle duration dropped from 94 days to 56 days.',
      beforeMetric: '94-Day Cycle',
      afterMetric: '56-Day Cycle',
      impactLabel: '38 Days Shaved Off Sales Cycles'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.3 — CHANNEL DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'channel': {
    id: 'channel',
    slug: 'channel',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.3',
    title: 'Channel Discovery',
    structureType: 'Risk-Concentration-Diversification',
    heroEyebrow: 'NODE 1.3',
    heroHeadline: 'How Concentrated Is Our Reach — and Where Is the Second Engine?',
    heroSubheadline: '60%+ revenue through one partner or platform. Algorithm changes or commission hikes threaten survival. Direct channels underperform. You don’t own your demand. We rebalance distribution before the shock.',
    ctaText: 'De-Risk Your Channel Concentration',

    problemHeadline: 'The Concentration Risk',
    problemBody: 'When 60%+ of your revenue flows through one single distributor, marketplace, or advertising platform, you do not have a business — you have a dependency. Partner policy shifts, margin squeeze, or algorithmic changes can wipe out EBITDA overnight. Relying on an unowned channel leaves you vulnerable while your direct motion remains starved.',
    problemStats: [
      { label: 'Single-Channel Exposure', value: '68%', change: 'Average concentration in incumbent distribution' },
      { label: 'EBITDA Risk on Policy Shift', value: '45%', change: 'Downside risk from fee hikes or partner deprioritization' },
      { label: 'Owned Pipeline Deficit', value: '82%', change: 'Lack of direct customer access and first-party data' }
    ],

    offeringHeadline: 'Channel & Distribution Architecture',
    offeringBody: 'We construct an audited concentration risk map across all acquisition avenues. We remodel partner incentive structures to protect margin. We design and activate an owned direct-demand blueprint to guarantee you control your own revenue destiny.',
    offeringHighlights: [
      'Concentration exposure scoring identifying structural vulnerabilities',
      'Incentive rebalancing ensuring partner commissions correlate with net value',
      'Owned demand channel buildout spanning organic authority, direct outbound, and proprietary events',
      'Channel shift triggers that smoothly migrate high-margin volume to direct channels'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Channel Concentration Risk Map', desc: 'Stress-test exposing revenue loss scenarios if primary partner fees shift or access narrows.' },
      { title: 'Incentive Rebalancing Model', desc: 'Restructured commission and tier schedules preserving your margin on partner deals.' },
      { title: 'Owned Demand Blueprint', desc: 'Complete architecture for building, scaling, and owning a proprietary first-party pipeline.' },
      { title: 'Channel Shift Trigger Protocol', desc: 'Pre-defined margin and velocity triggers indicating when to transition accounts from indirect to direct.' },
      { title: 'Direct vs. Indirect Contribution Dashboard', desc: 'Continuous tracking of net contribution margin across each distribution route.' }
    ],

    architectureHeadline: 'Direct vs. Indirect Rebalancing Before the Shock',
    architecturePoints: [
      { title: 'Multi-Channel Contribution Audit', desc: 'Measuring fully-loaded CAC, fulfillment friction, and net margin across direct and partner motions.' },
      { title: 'Partner Power & Policy Modeling', desc: 'Quantifying partner hold over customer relationships and setting strategic boundaries.' },
      { title: 'Owned Asset Pipeline Buildout', desc: 'Deploying proprietary inbound, targeted account outbound, and executive communities.' },
      { title: 'Controlled Migration Sequences', desc: 'Transitioning tier-1 accounts to direct relationships without inciting channel partner rebellion.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '<40%', label: 'Single-Channel Cap', description: 'Primary channel dependency reduced below 40% in 12 months.' },
      { metric: '≥30%', label: 'Owned Pipeline Built', description: 'Direct first-party pipeline accounts for at least 30% of total ARR.' },
      { metric: '+8 pts', label: 'Gross Margin Expansion', description: 'Margin recovered by eliminating excess intermediary fees.' },
      { metric: '100%', label: 'First-Party Customer Ownership', description: 'Direct relationship established with all top-tier accounts.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Quarterly channel re-scoring ensures dependency does not creep back up. Owned asset capacity is expanded systematically, and channel shift triggers are reviewed at every budget cycle.',
    realizationSteps: [
      { stage: 'Quarterly Exposure Audit', action: 'Re-scoring partner concentration metrics against 40% risk ceiling.', frequency: 'Every 90 Days' },
      { stage: 'Owned Pipeline Expansion', action: 'Allocating recovered partner margin into direct demand assets.', frequency: 'Monthly' },
      { stage: 'Conflict Resolution Reviews', action: 'Resolving territory and account overlaps with partner leadership.', frequency: 'Bi-Weekly' }
    ],

    visualType: 'risk-concentration',
    visualTitle: 'Channel Concentration Risk Matrix',
    visualSubtitle: 'Distribution Exposure vs. Margin Retention & Mitigation Blueprint',

    caseStudy: {
      title: 'B2B Industrial Platform',
      headline: 'De-Risking 74% Marketplace Dependency Down to 38%',
      body: 'An enterprise industrial distributor relied on an external third-party marketplace for 74% of revenue. When the platform raised fees by 600 bps, net margins were crushed. We built an owned direct sales motion and high-intent account targeting. Within 12 months, platform concentration dropped to 38% while direct gross margin expanded by 11 points.',
      beforeMetric: '74% Concentrated',
      afterMetric: '38% Diversified',
      impactLabel: 'Dependency Cut in Half'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.4 — WILLINGNESS-TO-PAY DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'willingness-to-pay': {
    id: 'willingness-to-pay',
    slug: 'willingness-to-pay',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.4',
    title: 'Willingness-to-Pay Discovery',
    structureType: 'Evidence-Based Pricing',
    heroEyebrow: 'NODE 1.4',
    heroHeadline: 'What Will Buyers Actually Pay — and Where Are We Underpriced?',
    heroSubheadline: 'Pricing set years ago by instinct. Discounts substitute for value proof. Competitors price 3x higher for less capability. You leave millions on the table on every contract. We replace pricing instinct with buyer-evidenced price points.',
    ctaText: 'Install Evidence-Based Pricing',

    problemHeadline: 'The Pricing Instinct Problem',
    problemBody: 'Most enterprise companies set pricing based on internal cost estimates, historical precedent, or gut feelings from executive meetings. When prospects push back, sales reps cave with discretionary 30-50% discounts because they lack evidence of willingness-to-pay. You leave substantial margin on the table on every enterprise deal.',
    problemStats: [
      { label: 'Unwarranted Discount Rate', value: '41%', change: 'Average contract concession given without ROI justification' },
      { label: 'Underpriced Enterprise Tiers', value: '3.1×', change: 'Multiple competitors charge for equivalent functional value' },
      { label: 'Price Realization Deficit', value: '78%', change: 'Percentage of list price captured at final signature' }
    ],

    offeringHeadline: 'Willingness-to-Pay Evidence Engine',
    offeringBody: 'We conduct price-laddering interviews, deploy Van Westendorp price sensitivity and conjoint analysis with verified buyers, rebuild packaging tiers around buyer willingness, and lock strict discount floors with CFO-ready ROI counter-cases.',
    offeringHighlights: [
      'Empirical Van Westendorp and discrete-choice conjoint research with active enterprise buyers',
      'Value-metric alignment tying pricing directly to customer business outcomes',
      'Discount exception governance locking mandatory approval floors in CRM',
      'CFO ROI battlecards arming account executives with quantitative business cases'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Van Westendorp & Conjoint Analysis', desc: 'Empirical price elasticity curves identifying optimal acceptable price, point of marginal cheapness, and point of marginal expensiveness.' },
      { title: 'Re-Engineered Packaging Tiers', desc: 'Restructured good-better-best packaging aligning premium features to high-willingness buyer cohorts.' },
      { title: 'Discount Floor Guardrails', desc: 'CRM-enforced price floors preventing sales reps from conceding margin without executive sign-off.' },
      { title: 'CFO-Ready Value Realization Dossiers', desc: 'Mathematical business cases proving ROI multiples to prospective buyer procurement teams.' },
      { title: 'Contract Renewal Upsell Matrix', desc: 'Automated price step-up schedules written into multi-year master service agreements.' }
    ],

    architectureHeadline: 'Replace Pricing Instinct with Buyer-Evidenced Price Points',
    architecturePoints: [
      { title: 'Price Elasticity Modeling', desc: 'Evaluating volume vs. price trade-offs across each customer tier to maximize net revenue.' },
      { title: 'Value Metric Discovery', desc: 'Shifting from legacy seat-based pricing to value-aligned metrics like transaction volume, API consumption, or revenue generated.' },
      { title: 'Feature Fence Construction', desc: 'Placing enterprise security, compliance, and automation features behind high-willingness tiers.' },
      { title: 'CRM Guardrail Enforcement', desc: 'Locking pricing floors so discounts >10% require automated ROI trade-off validations.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '-30-50%', label: 'Discount Rate Cut', description: 'Average discretionary discount slashed across enterprise deals.' },
      { metric: '≥92%', label: 'Price Realization', description: 'Percentage of target contract list value captured at signing.' },
      { metric: '+10-20%', label: 'Expansion Win Rate', description: 'Higher win rates on tier upgrades backed by quantified ROI.' },
      { metric: '+14%', label: 'ARR per Account', description: 'Immediate uplift on renewal cohorts moving to modernized tiers.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Price floors locked in CRM from week 4. Discount exception requests auto-generate ROI counter-cases for reps. Packaging elasticity re-tested annually against macroeconomic shifts.',
    realizationSteps: [
      { stage: 'Automated CRM Price Floors', action: 'Hard stops preventing unapproved discounting at proposal generation.', frequency: 'Day 1 Live' },
      { stage: 'Monthly Discount Audits', action: 'Reviewing average realized discount across deal sizes and AE cohorts.', frequency: 'Monthly' },
      { stage: 'Annual Elasticity Re-Tests', action: 'Testing willingness-to-pay shifts across new product capabilities.', frequency: 'Annually' }
    ],

    visualType: 'pricing-architecture',
    visualTitle: 'Willingness-to-Pay Architecture Visual',
    visualSubtitle: 'Van Westendorp Elasticity Curves, Feature Fences & Discount Guardrails',

    caseStudy: {
      title: 'Enterprise FinTech Platform',
      headline: 'Recovering 18 Points of Gross Margin in 6 Months',
      body: 'A financial analytics platform allowed sales reps to give up to 45% discounts to close quarterly deals. We conducted empirical conjoint research, rebuilt packaging around data consumption rather than seats, and locked price floors. In two quarters, average discounting dropped from 38% to 11%, capturing $6.2M in incremental high-margin ARR.',
      beforeMetric: '38% Avg Discount',
      afterMetric: '11% Avg Discount',
      impactLabel: '+$6.2M High-Margin ARR'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.5 — CUSTOMER PROPENSITY DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'propensity': {
    id: 'propensity',
    slug: 'propensity',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.5',
    title: 'Customer Propensity Discovery',
    structureType: 'Intent-Routing-Conversion',
    heroEyebrow: 'NODE 1.5',
    heroHeadline: 'Who Is In-Market Right Now — and Are We Calling Them First?',
    heroSubheadline: 'Reps work static firmographic lists that can’t see live intent. High-intent accounts buy from competitors while you cold-call dead leads. Outbound conversion collapses. We score the full TAM nightly and route effort where propensity is highest.',
    ctaText: 'Deploy Propensity-Ranked Targeting',

    problemHeadline: 'The Static List Problem',
    problemBody: 'Most revenue teams waste 80% of their prospecting energy dialing through static, firmographic spreadsheets. Company size and industry classification say nothing about whether an account is actively researching solutions today. Meanwhile, in-market accounts experiencing urgent pain points sign with the first competitor who notices their buying signals.',
    problemStats: [
      { label: 'Wasted Outbound Effort', value: '79%', change: 'Rep time spent dialing cold accounts with zero active intent' },
      { label: 'Standard Outbound Meeting Rate', value: '1.8%', change: 'Conversion on static, unscored firmographic lists' },
      { label: 'Signal-to-Contact Latency', value: '28 Days', change: 'Time it takes traditional teams to discover buyer intent' }
    ],

    offeringHeadline: 'Propensity-Ranked Account Engine',
    offeringBody: 'We build an automated signal-fusion engine that ingests first-party web telemetry, third-party surge topics, hiring trends, and technographic changes. We score your entire total addressable market nightly and dynamically route top-decile accounts directly into automated sales sequences.',
    offeringHighlights: [
      'Multi-source intent signal fusion (B2B web intent, job postings, tech installations, funding)',
      'Algorithmic decile ranking sorting all accounts from Decile 1 (highest intent) to 10',
      'Automated CRM and sales engagement routing pushing priority accounts to SDR calendars',
      'Contextualized trigger battlecards informing reps of the exact signal that sparked the outreach'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Nightly Propensity Scoring Engine', desc: 'Automated data pipeline refreshing intent, engagement, and technographic scores across 100% of your TAM every 24 hours.' },
      { title: 'Dynamic Account Decile Ranking', desc: 'Clear 1-to-10 scoring framework segmenting accounts into actionable priority tiers.' },
      { title: 'Automated SDR Routing Matrix', desc: 'Rules engine assigning newly surging accounts immediately to SDRs with contextualized messaging.' },
      { title: 'Signal Trigger Playbooks', desc: 'Tailored outreach templates matched to specific intent signals (e.g. competitor research, key hire, software displacement).' },
      { title: 'Scored vs. Unscored Conversion Reports', desc: 'Executive dashboard proving pipeline lift and meeting conversion rates across scoring deciles.' }
    ],

    architectureHeadline: 'Score the Full TAM Nightly, Route Effort Where Propensity Is Highest',
    architecturePoints: [
      { title: 'Multi-Signal Data Ingestion', desc: 'Aggregating intent queries, IP deanonymization, technographic installations, and hiring spikes.' },
      { title: 'Machine Learning Propensity Model', desc: 'Weighting signals against your historical closed-won account characteristics.' },
      { title: 'Automated Cadence Injection', desc: 'Syncing top-decile accounts directly into personalized outreach cadences with zero manual entry.' },
      { title: 'Feedback Loop Calibration', desc: 'Continuously adjusting model weights based on meeting acceptance and opportunity creation data.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '100%', label: 'TAM Scored Nightly', description: 'Complete database refreshed and re-ranked every 24 hours.' },
      { metric: '8-15%', label: 'Top-Decile Meeting Rate', description: 'Outbound meeting booking rate on Decile 1 accounts vs. 1-2% baseline.' },
      { metric: '<4 Hours', label: 'Signal-to-Touch Speed', description: 'First rep touch delivered within hours of an intent surge event.' },
      { metric: '3.4×', label: 'Pipeline Generated per Rep', description: 'Dramatic productivity boost from eliminating cold dead lists.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Top-decile list refreshed weekly. Suggested outreach plays auto-attached to CRM records. Conversion delta between scored and unscored accounts reported monthly to revenue leadership.',
    realizationSteps: [
      { stage: 'Nightly TAM Scoring', action: 'Running algorithmic scoring across full account database.', frequency: 'Every Night' },
      { stage: 'Weekly Decile Routing', action: 'Updating SDR active prospect allocations based on fresh surges.', frequency: 'Weekly' },
      { stage: 'Weighting Calibration', action: 'Re-weighting signal models based on closed-won attribution.', frequency: 'Monthly' }
    ],

    visualType: 'propensity-radar',
    visualTitle: 'Live Propensity Scoring Radar',
    visualSubtitle: 'Signal Fusion, Intent Surge Ingestion & Nightly Decile Routing',

    caseStudy: {
      title: 'DevOps Security Scaleup',
      headline: 'Booking Rates Jumped from 1.8% to 11.4% with Top-Decile Routing',
      body: 'A cybersecurity company had 20 SDRs dialing through a 40,000-account static list with a dismal 1.8% meeting conversion rate. We installed the Propensity-Ranked Account Engine, identifying that only 8% of the list was in an active buying window. Routing rep capacity exclusively to Deciles 1 and 2 surged meeting rates to 11.4% and created $4.8M in qualified pipeline in 90 days.',
      beforeMetric: '1.8% Meeting Rate',
      afterMetric: '11.4% Meeting Rate',
      impactLabel: '6.3× Meeting Velocity Multiplier'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.6 — USAGE-TO-REVENUE DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'usage-to-revenue': {
    id: 'usage-to-revenue',
    slug: 'usage-to-revenue',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.6',
    title: 'Usage-to-Revenue Discovery',
    structureType: 'Behavioral-Trigger-Automation',
    heroEyebrow: 'NODE 1.6',
    heroHeadline: 'Which Usage Behaviors Predict Paid Conversion — and Are They Wired to Triggers?',
    heroSubheadline: 'Strong user engagement, but free users never upgrade. Expansion is random. Product team celebrates vanity usage while revenue remains flat. We identify conversion-predictive behaviors and wire them to automated monetization triggers.',
    ctaText: 'Wire Usage to Revenue Triggers',

    problemHeadline: 'The Engagement Gap',
    problemBody: 'Product leaders celebrate high DAU/MAU and feature adoption, but revenue doesn’t follow. Free tier users consume infrastructure costs without upgrading, while existing paid accounts sit on legacy plans despite exponential usage expansion. Because product event data is disconnected from revenue systems, monetization moments pass unnoticed.',
    problemStats: [
      { label: 'Unmonetized Active Users', value: '64%', change: 'Accounts exhibiting power-user traits without upgrading' },
      { label: 'Missed Expansion Moments', value: '52%', change: 'Accounts that exceed capacity limits without automated upsell' },
      { label: 'Average Upgrade Latency', value: '4.8 Mos', change: 'Delay between product value realization and sales contract expansion' }
    ],

    offeringHeadline: 'Usage-to-Revenue Trigger Architecture',
    offeringBody: 'We mine your telemetry to identify the exact behavioral tipping points that mathematically predict paid conversion and account expansion. We redesign packaging around value realization milestones and wire automated in-app and sales-assist upgrade triggers.',
    offeringHighlights: [
      'Empirical event correlation isolating the 3-5 behaviors that drive 80% of paid upgrades',
      'Real-time threshold monitors tracking consumption caps, seat saturation, and feature unlocks',
      'Automated contextual in-app upgrade modals fired at peak user dopamine moments',
      'Product-Qualified Account (PQA) routing delivering warm expansion leads directly to CSMs and AEs'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Conversion-Predictive Milestone Map', desc: 'Data science study identifying specific user actions that correlate with high LTV conversion.' },
      { title: 'Real-Time Telemetry Trigger Architecture', desc: 'Event stream integration wiring product data warehouses (Snowflake/Segment) to CRM and marketing automation.' },
      { title: 'In-App Contextual Upgrade Modals', desc: 'Engineered upgrade pathways triggered dynamically when users approach milestone thresholds.' },
      { title: 'Product-Qualified Account (PQA) Pipeline', desc: 'Automated alerts notifying account managers the moment an account crosses expansion criteria.' },
      { title: 'Expansion Conversion Dashboard', desc: 'Real-time telemetry measuring time-to-upgrade, trigger response rates, and expansion revenue velocity.' }
    ],

    architectureHeadline: 'Identify Behavioral Tipping Points, Wire Them to Automated Upgrade Triggers',
    architecturePoints: [
      { title: 'Behavioral Cohort Mining', desc: 'Correlating billions of product event logs with historical billing records to uncover tipping points.' },
      { title: 'Milestone Threshold Engineering', desc: 'Establishing precise trigger points (e.g. 5th workflow run, 3rd team invite, 80% storage cap).' },
      { title: 'Automated Multi-Channel Triggers', desc: 'Firing simultaneous in-app prompts, executive email notifications, and rep CRM tasks.' },
      { title: 'Frictionless Upgrade Checkouts', desc: 'Enabling one-click self-serve credit card expansion and automated sales-assisted contract generation.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '+30-50%', label: 'Free→Paid Conversion Lift', description: 'Higher conversion from free trial or freemium to paying customer.' },
      { metric: '+10-25%', label: 'Expansion ARR Growth', description: 'Net revenue retention boosted by automated usage expansion triggers.' },
      { metric: '<14 Days', label: 'Trigger-to-Upgrade Speed', description: 'Average time between milestone crossing and completed contract upgrade.' },
      { metric: '100%', label: 'Milestone Telemetry Coverage', description: 'All core product workflows tracked against revenue impact.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Threshold crossings fire contextual upgrade plays in real time. Conversion rates per trigger are tracked weekly. Milestone thresholds are re-optimized quarterly as product features evolve.',
    realizationSteps: [
      { stage: 'Real-Time Trigger Execution', action: 'Firing in-app and sales-assist upgrade sequences upon milestone crossing.', frequency: '24/7 Real-Time' },
      { stage: 'Weekly Trigger Conversion Review', action: 'Auditing upgrade rates across specific feature triggers.', frequency: 'Weekly' },
      { stage: 'Threshold Calibration', action: 'Adjusting usage limits and pricing fences to maximize conversion velocity.', frequency: 'Quarterly' }
    ],

    visualType: 'trigger-flow',
    visualTitle: 'Behavioral Trigger Flow Diagram',
    visualSubtitle: 'Product Event Stream → Milestone Threshold → Automated Expansion Workflow',

    caseStudy: {
      title: 'Collaboration SaaS Platform',
      headline: 'Free-to-Paid Conversion Lifted 42% in 90 Days',
      body: 'A SaaS platform with 500,000 monthly active users struggled with free-to-paid conversion stagnating at 1.4%. We mined their product telemetry, identifying that workspaces sharing a board with >3 external domains had an 88% willingness-to-pay probability. We automated an contextual upgrade trigger at the 4th external invite, lifting overall conversion to 2.1% and adding $3.4M in ARR.',
      beforeMetric: '1.4% Conversion',
      afterMetric: '2.1% Conversion',
      impactLabel: '+$3.4M Incremental ARR'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.7 — COMPETITOR DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'competitor': {
    id: 'competitor',
    slug: 'competitor',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.7',
    title: 'Competitor Discovery',
    structureType: 'Dissection-Counter-Intelligence',
    heroEyebrow: 'NODE 1.7',
    heroHeadline: 'What Exactly Are We Losing To — Deal by Deal, Feature by Feature, Price Point by Price Point?',
    heroSubheadline: 'Competitive intel lives in a dusty slide deck from two years ago. Reps improvise when rivals appear in deals. Win rates erode against new entrants. We tear down each material rival into verified, deal-usable intelligence and counter-positioning battlecards.',
    ctaText: 'Deploy Competitive Intelligence',

    problemHeadline: 'The Anecdotal Problem',
    problemBody: 'In most organizations, competitive intelligence is anecdotal, outdated, or confined to marketing slide decks that reps never open. When a formidable rival enters an enterprise evaluation, sales reps improvise their defense. Competitor FUD goes unanswered, pricing advantages are conceded, and deals are lost without anyone understanding the root cause.',
    problemStats: [
      { label: 'Outdated Competitive Intel', value: '84%', change: 'Companies relying on battlecards older than 12 months' },
      { label: 'Deals Lost to Blind Spots', value: '38%', change: 'Competitive losses where reps failed to counter known rival claims' },
      { label: 'Win/Loss Interview Coverage', value: '<5%', change: 'Percentage of lost deals subjected to rigorous buyer debriefs' }
    ],

    offeringHeadline: 'Competitor Dissection & Counter-Positioning System',
    offeringBody: 'We conduct forensic win/loss interviews with recent enterprise buyers, tear down rival product architectures, expose pricing and discounting tactics, and arm your sales reps with dynamic, deal-usable counter-positioning battlecards integrated directly into your CRM.',
    offeringHighlights: [
      'Blind third-party win/loss interviews uncovering actual buyer decision rationales',
      'Feature-by-feature and pricing-by-tier dissection of top 5 competitors',
      'Counter-positioning battlecards providing trap-setting questions and objection handling',
      'Live intelligence feed monitoring rival product updates, executive hires, and price changes'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Top 5 Competitor Teardown Dossiers', desc: 'Exhaustive structural audits of rival product architecture, pricing tiers, discount flexibility, and vulnerabilities.' },
      { title: 'Forensic Win/Loss Pattern Analysis', desc: 'Empirical data categorizing the exact drivers behind won and lost competitive opportunities.' },
      { title: 'Counter-Positioning Battlecards', desc: 'Actionable, deal-stage specific guides equipping reps with trap-setting questions and objection responses.' },
      { title: 'Live Competitive Intelligence Feed', desc: 'Automated monitoring tracking rival job openings, customer reviews, pricing updates, and patent filings.' },
      { title: 'CRM Opportunity Counter-Play Integration', desc: 'Automatic battlecard attachment when a competitor is tagged in an active CRM deal record.' }
    ],

    architectureHeadline: 'Tear Down Each Material Rival into Verified, Deal-Usable Intelligence',
    architecturePoints: [
      { title: 'Forensic Buyer Interviews', desc: 'Executing objective post-decision debriefs with verified decision-makers.' },
      { title: 'Product & Pricing Reverse-Engineering', desc: 'Dissecting rival technical limitations, hidden maintenance costs, and contract lock-ins.' },
      { title: 'Trap-Setting Question Design', desc: 'Arming reps with technical questions prospects can ask rivals to expose critical shortcomings.' },
      { title: 'Automated CRM Deal Triggering', desc: 'Surfacing the exact counter-battlecard the moment a rep logs a competitor on a pipeline record.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: 'Top 5', label: 'Rivals Dissected', description: 'Complete teardown dossiers completed within first 30 days.' },
      { metric: '+15-25%', label: 'Win Rate Uplift', description: 'Measurable increase in head-to-head competitive win rates.' },
      { metric: '100%', label: 'Competitive Deals Armed', description: 'Every deal facing a competitor has automated battlecards attached.' },
      { metric: '<10 Days', label: 'Rival Move Detection', description: 'New competitor moves detected and countered within 10 days.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Win/loss interviews continuous across every closed deal. Battlecards updated within 10 days of competitor pricing or product shifts. Competitive deals automatically flagged in CRM with counter-plays attached.',
    realizationSteps: [
      { stage: 'Continuous Win/Loss Debriefs', action: 'Interviewing decision-makers on all enterprise competitive wins and losses.', frequency: 'Ongoing' },
      { stage: 'Battlecard Refresh Cadence', action: 'Updating counter-play scripts within 10 days of verified competitor updates.', frequency: '<10 Days' },
      { stage: 'Executive Intelligence Briefings', action: 'Publishing monthly competitive landscape shifts for leadership.', frequency: 'Monthly' }
    ],

    visualType: 'competitor-battlecard',
    visualTitle: 'Live Competitive Intelligence Dashboard',
    visualSubtitle: 'Rival Teardowns, Real-Time Market Moves & Contextual Deal Battlecards',

    caseStudy: {
      title: 'Data Infrastructure Platform',
      headline: 'Win Rate Rose 21% Against Incumbent Market Leader',
      body: 'An enterprise data software company was losing 62% of deals when competing against the legacy market incumbent. We executed blind win/loss interviews, exposing that buyers felt the incumbent’s migration took 3x longer than advertised. We designed a trap-setting battlecard focusing on implementation time-to-value. Win rate jumped from 38% to 59% in 4 months.',
      beforeMetric: '38% Win Rate',
      afterMetric: '59% Win Rate',
      impactLabel: '+21% Competitive Win Rate Lift'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 01 · NODE 1.8 — COMPETITIVE ECOSYSTEM DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'ecosystem': {
    id: 'ecosystem',
    slug: 'ecosystem',
    originNumber: 'Core Discovery',
    originName: 'Core Discovery',
    nodeNumber: 'Node 1.8',
    title: 'Competitive Ecosystem Discovery',
    structureType: 'Structural-Positioning-Gravity',
    heroEyebrow: 'NODE 1.8',
    heroHeadline: 'Who Is Building the Field We Compete On — and Are We Inside Their Structure or Outside It?',
    heroSubheadline: 'You track competitors as individual companies, but modern markets are fought between ecosystems. Alliances, platform integrations, marketplaces, and funding networks dictate category gravity. We map the ecosystem structure and engineer your position.',
    ctaText: 'Map Your Competitive Ecosystem',

    problemHeadline: 'The Ecosystem Blind Spot',
    problemBody: 'Most executives evaluate competition as one-on-one cage matches between single companies. In modern enterprise markets, competition happens between ecosystems. Mega-platforms, marketplace aggregators, and strategic alliance cartels determine which vendors get distribution and which get squeezed into obscurity.',
    problemStats: [
      { label: 'Ecosystem Squeeze Risk', value: '58%', change: 'Vendors marginalized by rival platform bundling' },
      { label: 'Unmapped Alliance Networks', value: '81%', change: 'Competitor partnerships invisible to traditional market research' },
      { label: 'Distribution Gravity Disadvantage', value: '4.5×', change: 'Pipeline advantage enjoyed by embedded ecosystem players' }
    ],

    offeringHeadline: 'Competitive Ecosystem Mapping & Positioning Strategy',
    offeringBody: 'We map the full constellation of platform alliances, integration gravity wells, marketplace embeds, and capital flows across your category. We identify which ecosystem positions are defensible, score your vulnerability, and build a partnership roadmap to capture structural distribution advantage.',
    offeringHighlights: [
      'Comprehensive category ecosystem graph mapping platforms, SIs, ISVs, and marketplaces',
      'Structural position scoring evaluating dependency, power balance, and defensibility',
      'Counter-bundling and ecosystem positioning playbooks protecting your core margins',
      'Priority alliance target shortlist identifying the 2-4 partners that confer immediate category authority'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Full Category Ecosystem Graph', desc: 'Visual network map charting all alliances, integration dependencies, and distribution channels across the sector.' },
      { title: 'Structural Position Scorecard', desc: 'Mathematical evaluation of your vulnerability to platform changes and competitive bundling.' },
      { title: 'Ecosystem Counter-Positioning Playbook', desc: 'Strategic maneuvers to outflank rival alliances and maintain direct customer relationships.' },
      { title: 'Strategic Partnership Shortlist', desc: 'Ranked target list of ecosystem anchors with pre-modeled co-sell revenue potential.' },
      { title: 'Platform Independence Roadmap', desc: 'Architecture ensuring your proprietary product data and value cannot be commoditized by platform hosts.' }
    ],

    architectureHeadline: 'Map Alliances, Platform Embeddings, Marketplaces, and Structural Gravity',
    architecturePoints: [
      { title: 'Network Gravity Analysis', desc: 'Mapping which platform hubs command the largest volume of qualified enterprise buyer attention.' },
      { title: 'Alliance Cartel Dissection', desc: 'Exposing co-marketing agreements and revenue shares between rivals and major system integrators.' },
      { title: 'Structural Wedge Engineering', desc: 'Identifying open adjacent protocols and standards where your software can become the default middleware.' },
      { title: 'Ecosystem Integration Playbooks', desc: 'Deploying high-visibility listings in key hyperscaler marketplaces with co-sell incentives.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '100%', label: 'Category Players Mapped', description: 'All material platforms, aggregators, and alliances fully charted.' },
      { metric: '100%', label: 'Positions Scored', description: 'Every rival structural vulnerability and alliance dependency quantified.' },
      { metric: '2-4', label: 'Strategic Alliances Closed', description: 'High-gravity distribution partnerships activated within 6 months.' },
      { metric: '<30 Days', label: 'Ecosystem Shift Response', description: 'Rapid strategic counter-deployment when rival platforms announce mergers.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Ecosystem map refreshed quarterly. Rival platform moves trigger pre-mapped counter-options. Partnership pipeline managed against verified co-sell pipeline attribution.',
    realizationSteps: [
      { stage: 'Quarterly Ecosystem Refresh', action: 'Updating alliance nodes, marketplace ranking, and API changes.', frequency: 'Quarterly' },
      { stage: 'Rival Alliance Radar', action: 'Monitoring rival marketplace launches and SI certifications.', frequency: 'Monthly' },
      { stage: 'Co-Sell Attribution Tracking', action: 'Measuring net revenue derived from ecosystem integrations.', frequency: 'Monthly' }
    ],

    visualType: 'ecosystem-gravity',
    visualTitle: 'Competitive Ecosystem Gravity Map',
    visualSubtitle: 'Alliance Clusters, Hyperscaler Embeddings & Gravitational Positioning',

    caseStudy: {
      title: 'Supply Chain Analytics Firm',
      headline: 'Securing Tier-1 Cloud Co-Sell Beachhead, Adding $7.8M in Pipeline',
      body: 'A supply chain intelligence provider was being squeezed out by legacy ERP suites bundling basic analytics for free. We mapped the ecosystem, discovering an unaddressed gap in tier-1 cloud hyperscalers needing high-performance sustainability telemetry. We negotiated an anchor co-sell partnership, unlocking $7.8M in co-marketed enterprise pipeline.',
      beforeMetric: 'Isolated Vendor',
      afterMetric: 'Anchor Cloud Co-Sell',
      impactLabel: '+$7.8M Co-Sell Pipeline'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 02 · NODE 2.1 — OFFER & REVENUE ARCHITECTURE
  // ─────────────────────────────────────────────────────────────
  'offer-architecture': {
    id: 'offer-architecture',
    slug: 'offer-architecture',
    originNumber: 'Supply Chain',
    originName: 'Supply Chain Discovery',
    nodeNumber: 'Node 2.1',
    title: 'Offer & Revenue Architecture',
    structureType: 'Margin-Recovery-Packaging',
    heroEyebrow: 'NODE 2.1',
    heroHeadline: 'Is What We Sell Engineered for Willingness-to-Pay — or for Cost-Plus Habit?',
    heroSubheadline: 'Packaging set years ago. Rogue discounting has become normal. High-value features given away for free. Margin leaks through the cracks of every deal. We rebuild tiers, triggers, and business cases from willingness-to-pay outward.',
    ctaText: 'Rebuild Your Offer Architecture',

    problemHeadline: 'The Margin Leak',
    problemBody: 'Most companies sell historical artifacts. Pricing tiers and feature bundles were created years ago and never fundamentally re-architected. Over time, product added immense capability, but sales gave it away for free to hit end-of-quarter volume quotas. Unmonetized enterprise features, discount creep, and unbundled services bleed your gross margin.',
    problemStats: [
      { label: 'Unmonetized Value Delivery', value: '44%', change: 'Enterprise features given away in entry-level tiers' },
      { label: 'Gross Margin Conceded to Creep', value: '11.5 pts', change: 'Average margin lost to ad-hoc discounting habits' },
      { label: 'Tier Cannibalization Rate', value: '37%', change: 'Enterprise buyers qualifying for mid-market plans' }
    ],

    offeringHeadline: 'Offer, Pricing & Packaging Architecture',
    offeringBody: 'We rebuild your entire product catalog from the ground up based on empirical willingness-to-pay. We construct clean good-better-best tier ladders, engineer value-metric expansion triggers, build CFO-ready ROI business cases, and lock strict discount guardrails.',
    offeringHighlights: [
      'Packaging re-architecture aligning tier boundaries with buyer willingness milestones',
      'Value metric modernization replacing linear seat pricing with scalable utility metrics',
      'CFO-ready ROI calculators and justification dossiers for enterprise deal teams',
      'Enforced CRM pricing guardrails eliminating rogue unapproved discounts'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Re-Architected Tier Ladder', desc: 'Clear functional separation across Starter, Professional, and Enterprise packages preventing cannibalization.' },
      { title: 'Value Metric Modernization Model', desc: 'Hybrid pricing formula combining predictable platform fees with expansion consumption vectors.' },
      { title: 'Enterprise ROI Justification Dossiers', desc: 'Financial models proving hard cost reduction and revenue uplift to buyer procurement boards.' },
      { title: 'Discount Floor Governance Policy', desc: 'Rule matrix codifying permitted discount bands and mandatory commercial give-gets.' },
      { title: 'Migration & Grandfathering Playbook', desc: 'Contract transition roadmap smoothly upgrading existing clients without churn risk.' }
    ],

    architectureHeadline: 'Rebuild Tiers, Triggers, and Business Cases from Willingness-to-Pay Outward',
    architecturePoints: [
      { title: 'Feature Value Sorting', desc: 'Classifying features into Core Amenities, High-Value Differentiators, and Enterprise Governance.' },
      { title: 'Fence Engineering', desc: 'Restricting SSO, SLA guarantees, data retention, and custom analytics exclusively to top tiers.' },
      { title: 'Expansion Trigger Wiring', desc: 'Automating alerts when accounts hit 85% of tier volume caps to prompt frictionless upgrades.' },
      { title: 'Give-Get Negotiation Matrix', desc: 'Requiring concessions like multi-year lock-in or case study participation for any price discount.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '5-15 pts', label: 'Gross Margin Recovered', description: 'Gross margin points captured within 2 quarters of launch.' },
      { metric: '+10-25%', label: 'Expansion ARR Growth', description: 'Higher expansion revenue driven by modernized consumption tiers.' },
      { metric: '100%', label: 'Discounts Routed in Guardrails', description: 'Zero off-book or unapproved discounts signed by reps.' },
      { metric: 'Week 4', label: 'CFO Battlecards Deployed', description: 'Rep enablement armed with mathematical ROI calculators.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'CFO battlecards deployed in week 4. Realized gross margin tracked monthly across sales cohorts. Pricing tiers and consumption thresholds re-tuned quarterly based on usage telemetry.',
    realizationSteps: [
      { stage: 'Battlecard Enablement', action: 'Training sales engineering and AEs on CFO ROI models.', frequency: 'Week 4 Live' },
      { stage: 'Monthly Margin Tracking', action: 'Auditing realized contract margin vs. target gross margin.', frequency: 'Monthly' },
      { stage: 'Quarterly Tier Tuning', action: 'Calibrating feature fences and consumption caps.', frequency: 'Quarterly' }
    ],

    visualType: 'packaging-ladder',
    visualTitle: 'Packaging & Pricing Architecture Visual',
    visualSubtitle: 'Tier Ladders, Feature Fences, Value Metrics & Discount Guardrails',

    caseStudy: {
      title: 'Healthcare Technology Provider',
      headline: 'Recovered 12.8 Gross Margin Points in 180 Days',
      body: 'A healthcare compliance software vendor was giving away advanced enterprise audit trails and custom integrations on standard mid-market plans. We re-architected packaging, creating a dedicated Enterprise Governance tier with strict fences. In two quarters, gross margin expanded by 12.8 points and average deal ARR increased by 31%.',
      beforeMetric: '61.2% Margin',
      afterMetric: '74.0% Margin',
      impactLabel: '+12.8 Margin Points Recovered'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 02 · NODE 2.2 — COST-TO-SERVE & CAPACITY
  // ─────────────────────────────────────────────────────────────
  'cost-to-serve': {
    id: 'cost-to-serve',
    slug: 'cost-to-serve',
    originNumber: 'Supply Chain',
    originName: 'Supply Chain Discovery',
    nodeNumber: 'Node 2.2',
    title: 'Cost-to-Serve & Capacity',
    structureType: 'Audit-Risk-Capacity',
    heroEyebrow: 'NODE 2.2',
    heroHeadline: 'Which Revenue Do We Scale — and Which Revenue Destroys Us Quietly?',
    heroSubheadline: 'No visibility into customer-level fulfillment costs. Top accounts by top-line revenue consume 80% of support and engineering, destroying net contribution. You scale into an operational bottleneck. We audit cost-to-serve at the customer and SKU level.',
    ctaText: 'Audit Your Cost-to-Serve',

    problemHeadline: 'The Hidden Cost of Unprofitable Revenue',
    problemBody: 'Top-line ARR is vanity; net contribution margin is sanity. Most growing companies have zero visibility into their true cost-to-serve at the individual account or SKU level. High-maintenance clients demand endless bespoke engineering, excessive customer success hours, and custom cloud infrastructure, turning seemingly large contracts into net-negative cash drains.',
    problemStats: [
      { label: 'Negative-Margin Revenue', value: '22%', change: 'Enterprise customer cohort generating net operating losses' },
      { label: 'Unallocated Engineering Cost', value: '48%', change: 'Technical support spend absorbed without contract billing' },
      { label: 'Fulfillment Capacity Limit', value: '85%', change: 'Current infrastructure utilization before severe service degradation' }
    ],

    offeringHeadline: 'Cost-to-Serve & Capacity Audit',
    offeringBody: 'We perform a forensic audit of customer-level and SKU-level delivery costs — allocating cloud infrastructure, customer success hours, implementation engineering, and supplier dependencies. We identify unprofitable accounts, reprice or exit them, and stress-test operational capacity before you scale.',
    offeringHighlights: [
      'Activity-based costing model allocating true labor, infrastructure, and vendor costs to each account',
      'Identification of the bottom 20% unprofitable accounts dragging down overall EBITDA',
      'Operational capacity stress test modeling throughput limits under 2x and 5x demand surges',
      'Supplier and vendor dependency risk map capping third-party vendor concentration'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Customer & SKU Cost-to-Serve Model', desc: 'Granular spreadsheet and dashboard detailing net contribution margin per individual customer and product line.' },
      { title: 'Unprofitable Account Remediation Plan', desc: 'Actionable playbook to renegotiate, restructure, automate, or gracefully offboard negative-margin accounts.' },
      { title: 'Operational Capacity Stress Test', desc: 'Simulated load models uncovering bottlenecks in fulfillment, onboarding, and cloud infrastructure.' },
      { title: 'Supplier & Vendor Risk Matrix', desc: 'Exposure audit capping reliance on single critical upstream vendors and negotiating volume discounts.' },
      { title: 'Demand-Supply Sync Protocol', desc: 'Commercial operational rules preventing sales from committing capacity without delivery sign-off.' }
    ],

    architectureHeadline: 'Audit Cost-to-Serve at Customer/SKU Level Before Scaling Further',
    architecturePoints: [
      { title: 'Activity-Based Cost Extraction', desc: 'Combining time-tracking, support tickets, and cloud billing to calculate exact account cost.' },
      { title: 'Contribution Margin Quartile Ranking', desc: 'Sorting accounts into margin quartiles to isolate chronic cash drainers.' },
      { title: 'Contract Renewal Repricing Workflows', desc: 'Mandating SLA reductions or price increases on accounts requiring excessive custom support.' },
      { title: 'Capacity Threshold Automation', desc: 'Installing automated warning alerts when onboarding queues exceed operational safety margins.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: 'Bottom 20%', label: 'Fixed / Repriced / Exited', description: 'Unprofitable accounts identified and remediated into positive contribution.' },
      { metric: 'Zero', label: 'Fulfillment Surprises', description: 'Elimination of post-sale delivery bottlenecks and SLA breach penalties.' },
      { metric: '<35%', label: 'Supplier Concentration Capped', description: 'Critical vendor dependency diversified across secondary providers.' },
      { metric: '+8.4 pts', label: 'Net EBITDA Expansion', description: 'Immediate operational savings from eliminating unprofitable fulfillment drag.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Cost-to-serve refreshed quarterly. Low-margin accounts flagged automatically in CRM for restructuring. Capacity stress tests updated before every annual operating plan.',
    realizationSteps: [
      { stage: 'Quarterly Cost Refresh', action: 'Recalculating labor, cloud, and vendor allocations across customer base.', frequency: 'Quarterly' },
      { stage: 'Low-Margin Account Alerts', action: 'Surfacing accounts slipping below 25% contribution margin to executive leadership.', frequency: 'Monthly' },
      { stage: 'Annual Capacity Stress Test', action: 'Benchmarking operational delivery limits against target growth numbers.', frequency: 'Annually' }
    ],

    visualType: 'cost-to-serve-matrix',
    visualTitle: 'Customer & SKU Cost-to-Serve Matrix',
    visualSubtitle: 'Customer Contribution Heatmap, Fulfillment Friction & Capacity Stress Limits',

    caseStudy: {
      title: 'Global Logistics Infrastructure Platform',
      headline: 'Repriced Bottom 18% of Accounts, Preserving $4.2M in Net Margin',
      body: 'A logistics technology company scaled top-line ARR to $45M but watched EBITDA turn negative. Our Cost-to-Serve audit uncovered that 18% of accounts accounted for 71% of all custom API integration hours, burning $4.2M in unbilled engineering labor. We implemented an enterprise SLA pricing add-on and repriced the cohort, turning 80% profitable and gracefully offboarding the rest.',
      beforeMetric: '-$1.8M EBITDA Drag',
      afterMetric: '+$2.4M Net Profit',
      impactLabel: '$4.2M Margin Preserved'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 03 · NODE 3.1 — ALLIANCE & CO-SELL
  // ─────────────────────────────────────────────────────────────
  'alliance': {
    id: 'alliance',
    slug: 'alliance',
    originNumber: 'Ecosystem',
    originName: 'Ecosystem Discovery',
    nodeNumber: 'Node 3.1',
    title: 'Alliance & Co-Sell',
    structureType: 'Attribution-ROI-Governance',
    heroEyebrow: 'NODE 3.1',
    heroHeadline: 'Which Partnerships Produce Revenue — and Which Produce Golf Outings?',
    heroSubheadline: 'Partners exist on a logo slide. No tiers, no attribution, no ROI. Channel managers submit expense reports for dinners with zero attributed pipeline. You spend money to appease partners who never bring deals. We build alliances as a managed, measured revenue channel.',
    ctaText: 'Build Measured Alliances',

    problemHeadline: 'The Partnership Illusion',
    problemBody: 'Almost every enterprise website has a "Partners" page packed with company logos. Yet in reality, 90% of those relationships generate zero attributed pipeline. Companies fund partner marketing, sponsor partner conferences, and entertain partner reps without tracking whether a single dollar of sourced revenue returns. Partner programs become vanity cost centers.',
    problemStats: [
      { label: 'Unproductive Partner Logos', value: '88%', change: 'Signed partners generating zero sourced pipeline in 12 months' },
      { label: 'Unattributed Co-Sell Spend', value: '72%', change: 'Partner MDF and entertainment budgets lacking revenue ROI proof' },
      { label: 'Deal Attribution Ambiguity', value: '64%', change: 'Disputes between direct sales and partners over deal origination' }
    ],

    offeringHeadline: 'Alliance & Co-Sell Architecture',
    offeringBody: 'We replace subjective partner relationships with mathematical revenue engineering. We structure partner tiers based strictly on verified sourced revenue, install multi-touch co-sell attribution, calculate incentive ROI, and deploy automated governance playbooks.',
    offeringHighlights: [
      'Multi-touch partner attribution tracking sourcing, influence, and co-closing milestones',
      'Rigorous tier governance classifying partners by trailing 12-month attributed revenue',
      'Incentive and MDF ROI scoring linking co-marketing funds directly to pipeline performance',
      'Joint account mapping protocols automating account sharing and co-sell introductions'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Partner Tier Architecture', desc: 'Structured tiers (Registered, Certified, Strategic) with explicit revenue milestones, SLA requirements, and margin shares.' },
      { title: 'Co-Sell Attribution Engine', desc: 'CRM and partner portal integration recording precise partner involvement across every pipeline stage.' },
      { title: 'Incentive & MDF ROI Scoring Model', desc: 'Quantitative audit evaluating the revenue return on every partner marketing dollar invested.' },
      { title: 'Alliance Governance Playbook', desc: 'Standard operating procedures for joint business planning, executive sponsorship, and conflict resolution.' },
      { title: 'Partner Co-Sell Command Dashboard', desc: 'Live executive view tracking pipeline sourced, co-sell win rates, and commission payouts.' }
    ],

    architectureHeadline: 'Build the Alliance Ecosystem as a Managed, Measured Revenue Channel',
    architecturePoints: [
      { title: 'Cross-Network Account Mapping', desc: 'Using secure overlap technology (Crossbeam/Reveal) to match accounts with high-value partners.' },
      { title: 'Granular Attribution Modeling', desc: 'Distinguishing between First-Touch Sourced, Mid-Funnel Accelerated, and Deal-Closing influence.' },
      { title: 'Performance-Based Margin Sharing', desc: 'Structuring referral and reseller fees on net contribution rather than gross invoice amounts.' },
      { title: 'Automated Tier Demotion & Elevation', desc: 'Reviewing partner status every 6 months to automatically cycle out unproductive relationships.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: 'Day 1', label: 'Attribution Live', description: 'Complete visibility into partner sourcing and influence across all open deals.' },
      { metric: '3.8×', label: 'Incentive Spend ROI', description: 'Average pipeline returned for every dollar of partner MDF invested.' },
      { metric: '2-4', label: 'Strategic Alliances Activated', description: 'High-performing co-sell engines delivering consistent monthly opportunities.' },
      { metric: '≥25%', label: 'Partner-Sourced ARR', description: 'Target share of total company new bookings generated via alliances.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Attribution live from Day 1. Quarterly incentive ROI reviews terminate underperforming MDF allocations. Alliances managed against hard attributed revenue quotas, not relationship warmth.',
    realizationSteps: [
      { stage: 'Real-Time Deal Tagging', action: 'Recording partner influence at discovery stage in CRM.', frequency: 'Continuous' },
      { stage: 'Quarterly MDF Performance Audit', action: 'Evaluating pipeline yield per partner marketing dollar.', frequency: 'Quarterly' },
      { stage: 'Semi-Annual Tier Governance', action: 'Reclassifying partner tiers and adjusting co-sell benefits.', frequency: 'Every 6 Months' }
    ],

    visualType: 'alliance-roi-dashboard',
    visualTitle: 'Alliance ROI & Co-Sell Attribution Command',
    visualSubtitle: 'Partner Contribution Tiers, Multi-Touch Attribution & Incentive ROI Scoring',

    caseStudy: {
      title: 'Enterprise Cloud Security Vendor',
      headline: 'Pruned 42 Inactive Partners, Scaled 3 Alliances to $9.2M in Co-Sell ARR',
      body: 'A cloud security firm had 50 partner logos but was spending $600k annually on sponsorships with zero clear attribution. We implemented the Alliance & Co-Sell Architecture, audited historical attribution, and eliminated 42 inactive relationships. By focusing resources on 3 high-overlap system integrators, partner-sourced ARR surged to $9.2M within 12 months.',
      beforeMetric: '50 Unmeasured Logos',
      afterMetric: '$9.2M Attributed Pipeline',
      impactLabel: '15.3× MDF ROI Multiplier'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 03 · NODE 3.2 — PLATFORM & ADJACENCY
  // ─────────────────────────────────────────────────────────────
  'platform-adjacency': {
    id: 'platform-adjacency',
    slug: 'platform-adjacency',
    originNumber: 'Ecosystem',
    originName: 'Ecosystem Discovery',
    nodeNumber: 'Node 3.2',
    title: 'Platform & Adjacency',
    structureType: 'De-Risk-Adjacency-Compliance',
    heroEyebrow: 'NODE 3.2',
    heroHeadline: 'Are We Building on Someone Else’s Land — and Where Is Our Second Vertical?',
    heroSubheadline: 'Two clocks are ticking. Your primary platform host is building features that copy your core product. Your primary vertical is approaching saturation. You have 12-18 months to de-risk platform dependency and open an adjacent vertical before growth halts.',
    ctaText: 'De-Risk Your Platform Dependency',

    problemHeadline: 'The Dual Clock Dilemma',
    problemBody: 'If your business is built as an app, plugin, or extension on top of a giant platform (Salesforce, Shopify, AWS, Microsoft), you are operating on rented land. Platforms routinely copy their most successful ecosystem developers. Simultaneously, single-vertical saturation caps your market cap. You must de-risk platform reliance and enter an adjacent vertical before both clocks run out.',
    problemStats: [
      { label: 'Platform Platform-Sherlocking Risk', value: '71%', change: 'Developers facing direct native feature competition from hosts' },
      { label: 'Vertical Market Saturation', value: '62%', change: 'Average market penetration where customer acquisition costs surge' },
      { label: 'Failed Adjacency Rate', value: '80%', change: 'Companies entering adjacent verticals without tailored unit economics' }
    ],

    offeringHeadline: 'Platform De-Risking & Adjacency Expansion',
    offeringBody: 'We conduct a quantitative platform dependency exposure audit, architect independent API-first data layers, rank adjacent vertical markets by unit-economic ROI and regulatory friction, and build a pre-tested expansion roadmap.',
    offeringHighlights: [
      'Platform exposure scorecard evaluating API risk, data lock-in, and feature duplication threats',
      'Multi-platform decoupling architecture enabling independent customer data ownership',
      'Adjacent vertical ranking model analyzing profit pools, sales cycle velocity, and CAC',
      'Cross-border regulatory and compliance clearance roadmap for targeted new sectors'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Platform Dependency Exposure Scorecard', desc: 'Rigorous assessment calculating revenue vulnerability if host platform alters fees, algorithms, or API access.' },
      { title: 'Platform Independence Architecture Blueprint', desc: 'Engineering strategy decoupling core proprietary IP and customer data from the underlying platform.' },
      { title: 'Adjacent-Vertical Attractiveness Matrix', desc: 'Comparative study ranking 4-6 potential adjacent verticals by profit pool, competitive density, and LTV/CAC.' },
      { title: 'Regulatory & Compliance Clearance Map', desc: 'Pre-flight audit of compliance requirements (HIPAA, SOC2, GDPR, FedRAMP) for target adjacent sectors.' },
      { title: '12-Month Adjacency Entry Playbook', desc: 'Actionable go-to-market execution plan detailing pilot cohorts, initial positioning, and channel requirements.' }
    ],

    architectureHeadline: 'De-Risk the Platform and Open the Adjacent Vertical Before Both Clocks Run Out',
    architecturePoints: [
      { title: 'API Vulnerability Modeling', desc: 'Auditing which platform endpoints your software depends on and building fallback middleware.' },
      { title: 'Multi-Ecosystem Integration', desc: 'Expanding integrations to secondary and tertiary platforms (e.g. adding HubSpot, Microsoft Dynamics, Snowflake).' },
      { title: 'Adjacent TAM Micro-Segmentation', desc: 'Dissecting target vertical customer requirements to avoid building generic horizontal bloat.' },
      { title: 'Cross-Vertical Compliance Clearing', desc: 'Securing necessary security certifications and data residency protocols prior to market entry.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '50%', label: 'Platform Risk Halved', description: 'Concentration of revenue dependent on single platform reduced by half.' },
      { metric: '12 Mos', label: 'Live Second Vertical', description: 'Functional, revenue-generating presence established in an adjacent market.' },
      { metric: '100%', label: 'Segment-Level ROI Backed', description: 'Adjacency entry backed by verified customer unit-economic modeling.' },
      { metric: 'Zero', label: 'Compliance Delays', description: 'Pre-cleared regulatory posture allowing immediate enterprise procurement.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Platform exposure re-scored quarterly against host developer announcements. Adjacency pipeline tracked weekly in CRM. Compliance requirements monitored continuously as regulations evolve.',
    realizationSteps: [
      { stage: 'Platform Policy Monitoring', action: 'Tracking host developer roadmaps and API deprecation notices.', frequency: 'Continuous' },
      { stage: 'Quarterly Exposure Re-Scoring', action: 'Auditing multi-platform revenue balance against risk targets.', frequency: 'Quarterly' },
      { stage: 'Adjacency Velocity Tracking', action: 'Reviewing sales cycle length and win rates in the new vertical.', frequency: 'Monthly' }
    ],

    visualType: 'platform-risk-matrix',
    visualTitle: 'Platform Dependency & Adjacency Opportunity Matrix',
    visualSubtitle: 'Host Dependency Exposure vs. Adjacent Vertical Market Attractiveness',

    caseStudy: {
      title: 'E-Commerce Marketing Automation Suite',
      headline: 'De-Risked Single Platform Concentration, Unlocking $6.8M Adjacent Pipeline',
      body: 'A marketing software provider generated 92% of revenue from one e-commerce app store, leaving them exposed when the platform introduced native marketing tools. We audited the architecture, decoupled their customer analytics layer, and executed an adjacency expansion into B2B wholesale distribution. In 12 months, the adjacent vertical contributed $6.8M in ARR and platform exposure fell to 48%.',
      beforeMetric: '92% Platform Dependency',
      afterMetric: '48% Diversified Base',
      impactLabel: '+$6.8M Adjacent ARR'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 04 · NODE 4.1 — NEW OFFERING DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'new-offering': {
    id: 'new-offering',
    slug: 'new-offering',
    originNumber: 'Expansion',
    originName: 'Expansion Discovery',
    nodeNumber: 'Node 4.1',
    title: 'New Offering Discovery',
    structureType: 'Validation-Pre-Build-LOI',
    heroEyebrow: 'NODE 4.1',
    heroHeadline: 'What Should We Sell Next — Proven Against Willingness-to-Pay Before We Build It?',
    heroSubheadline: 'New offerings launched on executive intuition. Engineering spends 12 months building features nobody will pay for. Each product failure burns millions in runway and demoralizes the team. We validate the next offering and secure pre-build buyer commitments before writing a single line of code.',
    ctaText: 'Validate Before You Build',

    problemHeadline: 'The Intuition Trap',
    problemBody: 'Most enterprise expansion failures stem from internal echo chambers. A founder or product executive has a hunch, commissions engineering to build an MVP, and spends 12-18 months developing backend features. Only at launch does the sales team discover that enterprise buyers find the capability interesting but refuse to allocate budget. Building before validating willingness-to-pay is the costliest mistake in tech.',
    problemStats: [
      { label: 'Failed New Product Launches', value: '74%', change: 'B2B software offerings that fail to meet initial revenue targets' },
      { label: 'Average Capital Burn per Failure', value: '$2.4M', change: 'Engineering, product, and GTM budget lost on unvalidated launches' },
      { label: 'Time Lost on Dead Launches', value: '14 Months', change: 'Opportunity cost and distraction of executive attention' }
    ],

    offeringHeadline: 'New Offering Validation Engine',
    offeringBody: 'We test expansion candidates against live customer demand signals and empirical price-laddering interviews with active enterprise buyers. We construct CFO-ready build business cases and secure signed Letters of Intent (LOIs) or paid pilots before your engineering team writes a single line of code.',
    offeringHighlights: [
      'Customer signal mining identifying high-frequency unaddressed requests and workarounds',
      'Discrete-choice willingness-to-pay testing with 20+ verified economic buyers',
      'Pre-build commercial testing securing formal Letters of Intent and pre-payment terms',
      'CFO-grade financial business case establishing expected payback period and margin profile'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Adjacency Candidate Ranking Dossier', desc: 'Evaluation of 5-8 potential product expansion concepts ranked by buyer urgency and market size.' },
      { title: 'Empirical Buyer Willingness-to-Pay Report', desc: 'Quantitative price-laddering data proving what enterprise buyers will pay and which features drive decision-making.' },
      { title: 'Signed Pre-Build LOIs / Pilot Cohort', desc: 'Binding or non-binding commercial commitments representing ≥15% of total projected development costs.' },
      { title: 'CFO-Ready Build Business Case', desc: 'Defensible financial model detailing projected engineering costs, payback timelines, and contribution margin.' },
      { title: 'Day-1 Usage-to-Revenue Telemetry Blueprint', desc: 'Instrumentation specifications ensuring product telemetry is wired directly to monetization from initial rollout.' }
    ],

    architectureHeadline: 'Validate the Next Offering Before a Single Build Dollar Is Spent',
    architecturePoints: [
      { title: 'Unmet Demand Signal Mining', desc: 'Extracting product support tickets, win/loss notes, and customer advisory feedback for recurring pain points.' },
      { title: 'Cold Buyer Validation Interviews', desc: 'Conducting structured interviews with external decision-makers who have no loyalty to your brand.' },
      { title: 'Commercial Commitment Testing', desc: 'Requiring pilot buyers to sign LOIs with explicit pricing terms before greenlighting engineering sprints.' },
      { title: 'Go/No-Go Decision Gate', desc: 'Enforcing a strict corporate policy: kill any concept that fails to secure 60% buyer price confirmation.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '5-8', label: 'Concepts Tested', description: 'Exhaustive evaluation of potential product adjacency concepts.' },
      { metric: '≥60%', label: 'Buyer Price Confirmation', description: 'Target buyers validating proposed enterprise price points.' },
      { metric: '≥15%', label: 'Pre-Build LOI Commitments', description: 'Development budget de-risked with customer pre-commitments.' },
      { metric: '<6 Mos', label: 'First Revenue After Release', description: 'Immediate commercial revenue from pre-signed pilot cohort.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Pilot cohort signed prior to engineering build. Day-1 usage telemetry tracks product engagement and milestone completion. Buyer willingness is re-scored quarterly to inform v2 packaging.',
    realizationSteps: [
      { stage: 'Pre-Build LOI Gate', action: 'Securing required commercial commitments before engineering sprint allocation.', frequency: 'Pre-Build' },
      { stage: 'Day-1 Telemetry Audit', action: 'Verifying pilot usage milestones and feature adoption velocity.', frequency: 'Day 1 Launch' },
      { stage: 'Quarterly Price Tuning', action: 'Re-evaluating buyer willingness as product matures.', frequency: 'Quarterly' }
    ],

    visualType: 'validation-funnel',
    visualTitle: 'New Offering Validation Funnel',
    visualSubtitle: 'Concept Generation → Empirical Buyer Testing → Signed Pre-Build LOIs → Day-1 Revenue',

    caseStudy: {
      title: 'DevSecOps Platform',
      headline: 'Secured $820k in Signed Pre-Build LOIs Before Writing Code',
      body: 'A software security company considered building an expensive AI remediation module. Instead of burning $1.5M on immediate engineering, we ran the Validation Engine. Through 25 enterprise buyer interviews, we refined the value proposition and secured 4 signed enterprise LOIs totaling $820k in committed annual spend. Development was fully funded and launched with zero commercial risk.',
      beforeMetric: '0% Pre-Validated',
      afterMetric: '$820k Pre-Committed',
      impactLabel: '100% De-Risked Launch'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 04 · NODE 4.2 — NEW MARKET DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'new-market': {
    id: 'new-market',
    slug: 'new-market',
    originNumber: 'Expansion',
    originName: 'Expansion Discovery',
    nodeNumber: 'Node 4.2',
    title: 'New Market Discovery',
    structureType: 'Profit-Pool-Entry-War-Room',
    heroEyebrow: 'NODE 4.2',
    heroHeadline: 'Which Market Ranks by Profit Pool — and What’s the Entry Playbook for the Winner?',
    heroSubheadline: 'Geographic and vertical expansions debated in endless strategy meetings. Entries decided on high-level market size headlines rather than unit economics. Millions burned on international offices that never break even. We rank markets by profit pool and execute a 90-day entry war-room.',
    ctaText: 'Enter the Right Market',

    problemHeadline: 'The Strategy Slide Problem',
    problemBody: 'Enterprise expansion decisions are frequently made based on generic GDP statistics, top-line industry TAM estimates, or executive vanity. Companies open European or Asian offices because "we need an EMEA presence," without analyzing regulatory hurdles, localized willingness-to-pay, or acquisition friction. Two years later, the overseas entity is bleeding capital.',
    problemStats: [
      { label: 'Failed Overseas/New Market Entries', value: '65%', change: 'International expansions failing to reach positive unit economics' },
      { label: 'CAC Premium in New Markets', value: '2.4×', change: 'Cost acquisition multiple experienced without localized micro-targeting' },
      { label: 'Time to First 10 Customers', value: '11 Months', change: 'Average latency when launching without a pre-mapped channel route' }
    ],

    offeringHeadline: 'Market Entry War-Room',
    offeringBody: 'We evaluate 5-10 candidate markets (geographic or vertical) by true profit pool density, competitive defensibility, and regulatory compliance complexity. We pick the single highest-probability winner and build a turn-key 90-day entry war-room with localized pricing, channel routes, and telemetry.',
    offeringHighlights: [
      'Empirical scoring of 5-10 candidate markets across profit density, CAC risk, and barriers',
      'Identification of the specific high-margin beachhead micro-segment in the target market',
      'Localized channel, regulatory, and tax compliance architecture ready for execution',
      '90-day market entry telemetry monitor with pre-agreed kill/scale criteria'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Candidate Market Ranking Matrix', desc: 'Comprehensive benchmarking of 5-10 regions or sectors scoring profit pool, defensibility, and entry complexity.' },
      { title: 'Beachhead Micro-Segment Blueprint', desc: 'Precision profile of the initial target customer cohort in the winning market that guarantees rapid payback.' },
      { title: 'Localized Pricing & Packaging Model', desc: 'Currency-adjusted and willingness-tested pricing tiers adapted to local purchasing behavior.' },
      { title: 'Regulatory & Channel Distribution Route', desc: 'Pre-cleared legal, tax, data sovereignty, and distribution partner network in the destination region.' },
      { title: '90-Day Entry War-Room Telemetry Dashboard', desc: 'Live operational tracking of pipeline velocity, CAC ratio, and milestone progression.' }
    ],

    architectureHeadline: 'Rank Markets by Profit Pool, Build Entry Playbook for the Winner',
    architecturePoints: [
      { title: 'Multi-Factor Market Scoring', desc: 'Benchmarking profit pools, competitive saturation, buyer propensity, and regulatory barriers.' },
      { title: 'Localized Economic Calibration', desc: 'Adjusting pricing and contract terms to match local corporate purchasing standards.' },
      { title: 'Anchor Customer Acquisition', desc: 'Targeting top-20 prospective regional lighthouse logos with personalized executive outreach.' },
      { title: 'Pre-Agreed Kill/Scale Gates', desc: 'Establishing strict Day-45 and Day-90 unit economic checkpoints to scale investment or pull back.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: 'Board-Ready', label: 'Entry Decision', description: 'Mathematically defensible expansion choice backed by empirical data.' },
      { metric: '<120 Days', label: 'First 10 Customers', description: 'Rapid acquisition of anchor lighthouse enterprise accounts in target region.' },
      { metric: 'Month 6', label: 'Positive Contribution', description: 'Local operating entity reaches positive unit economics within two quarters.' },
      { metric: '≤1.3×', label: 'New-Market CAC', description: 'Acquisition cost held within 30% of mature domestic core motion.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Kill/scale criteria pre-agreed before initial capital expenditure. 90-day telemetry reviews benchmark conversion velocity. Monthly unit economics reviews prevent runway leakage.',
    realizationSteps: [
      { stage: 'Day-45 Diagnostic Review', action: 'Assessing leading pipeline generation and lighthouse account meetings.', frequency: 'Day 45' },
      { stage: 'Day-90 Kill/Scale Gate', action: 'Auditing CAC, sales cycle length, and initial customer retention.', frequency: 'Day 90' },
      { stage: 'Monthly P&L Calibration', action: 'Monitoring localized gross margin and operating overhead.', frequency: 'Monthly' }
    ],

    visualType: 'market-war-room',
    visualTitle: 'Market Profit Pool Ranking Matrix',
    visualSubtitle: '5-10 Markets Benchmarked by Profit Pool, Defensibility, CAC Risk & Payback Speed',

    caseStudy: {
      title: 'Enterprise Fintech Infrastructure',
      headline: 'EMEA Expansion Reached Positive Unit Margin by Month 5',
      body: 'A North American fintech vendor considered entering 4 European markets simultaneously based on high-level GDP estimates. We executed the Market Entry War-Room, scoring candidate nations by financial regulatory complexity and digital banking adoption. We selected the UK as the sole beachhead, localized packaging, and achieved positive contribution margin in 5 months with a 1.1x core CAC.',
      beforeMetric: 'Unfocused Multi-Region Plan',
      afterMetric: 'Positive Margin in 5 Mos',
      impactLabel: '10 Anchor Accounts in 110 Days'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 04 · NODE 4.3 — NEW CHANNEL DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'new-channel': {
    id: 'new-channel',
    slug: 'new-channel',
    originNumber: 'Expansion',
    originName: 'Expansion Discovery',
    nodeNumber: 'Node 4.3',
    title: 'New Channel Discovery',
    structureType: 'Model-Pilot-Attribution',
    heroEyebrow: 'NODE 4.3',
    heroHeadline: 'Which Channel Adds Revenue Without Cannibalizing the Core Motion?',
    heroSubheadline: 'New distribution channels chosen opportunistically. A partner signs up, but sells at heavy discounts, enraging direct sales reps. Channel conflict paralyzes execution. We model channel unit economics, prevent cannibalization, and pilot with guardrails designed in.',
    ctaText: 'Build the Next Channel',

    problemHeadline: 'The Opportunistic Expansion Problem',
    problemBody: 'Most channel expansion occurs opportunistically. A large reseller or system integrator approaches executive leadership, negotiations take place in a vacuum, and a channel agreement is inked without modeling margin cannibalization. Within months, the new channel is poaching direct sales accounts, demanding heavy discount concessions, and sparking internal sales team revolts.',
    problemStats: [
      { label: 'Unmanaged Channel Conflict', value: '61%', change: 'Companies experiencing direct vs. partner territory wars' },
      { label: 'Margin Cannibalization Rate', value: '28%', change: 'Deals moved from direct margin to discounted partner revenue' },
      { label: 'Failed Channel Pilots', value: '70%', change: 'Channel experiments abandoned due to poor unit economics' }
    ],

    offeringHeadline: 'Channel Build-Out Blueprint',
    offeringBody: 'We model 4-6 potential distribution channel motions (OEM, Reseller, System Integrator, Direct Marketplace, Inbound PLG). We stress-test margin economics and channel conflict scenarios. We design clear territory guardrails and run a controlled pilot to prove positive unit economics before rolling out full enablement.',
    offeringHighlights: [
      'Comparative financial modeling evaluating 4-6 alternative channel distribution candidates',
      'Conflict rules of engagement preventing partner poaching of existing direct accounts',
      'Incentive and attribution architecture aligning partner commissions with net incremental ARR',
      'Controlled 90-day pilot testing customer acquisition speed and margin preservation'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'Channel Candidate Economic Model', desc: 'Detailed financial forecast modeling fully-loaded CAC, discount rates, and net margin across candidate channels.' },
      { title: 'Channel Conflict & Rules of Engagement Matrix', desc: 'Clear boundaries governing account ownership, deal registration, and split commission policies.' },
      { title: 'Partner Incentive & Margin Sharing Schedule', desc: 'Restructured commercial terms tying partner remuneration strictly to net-new customer acquisition.' },
      { title: 'Pilot Activation Roadmap', desc: 'Structured 90-day test framework validating customer satisfaction, cycle times, and partner commitment.' },
      { title: 'Channel Attribution & Conflict Dashboard', desc: 'Real-time telemetry monitor tracking channel deal velocity, lead source integrity, and dispute alerts.' }
    ],

    architectureHeadline: 'Select, Model, and Pilot the Next Channel with Guardrails Designed In',
    architecturePoints: [
      { title: 'Margin Dilution Stress-Testing', desc: 'Simulating the impact of partner discounts on overall corporate gross and operating margins.' },
      { title: 'Deal Registration Engine', desc: 'Automated CRM validation ensuring partners only receive protection on verified net-new opportunities.' },
      { title: 'Pilot Milestone Governance', desc: 'Establishing clear volume and velocity criteria that must be met before formal expansion.' },
      { title: 'Conflict Mediation Protocols', desc: 'Standard operating procedures resolving territory disputes between direct sales and external partners.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '4-6', label: 'Channels Modeled', description: 'Comprehensive economic evaluation across all viable distribution vectors.' },
      { metric: '≥15%', label: 'Incremental ARR Year 1', description: 'New channel contributing at least 15% of new bookings within 12 months.' },
      { metric: '≤1.2×', label: 'New-Channel CAC', description: 'Blended acquisition cost held within 20% of established direct sales.' },
      { metric: '≥90%', label: 'Attribution Accuracy', description: 'Zero ambiguity regarding deal origination and commission payouts.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Channel attribution dashboard live from pilot Day 1. Automatic conflict alerts in CRM prevent lead poaching. Quarterly incentive ROI reviews recalibrate commission structures based on verified performance.',
    realizationSteps: [
      { stage: 'Real-Time Deal Registration', action: 'Reviewing and approving partner registered leads within 24 hours.', frequency: 'Daily' },
      { stage: 'Monthly Conflict Audits', action: 'Resolving territory disputes and tracking lead source compliance.', frequency: 'Monthly' },
      { stage: 'Quarterly Incentive Recalibration', action: 'Updating discount tiers and margin sharing based on contribution.', frequency: 'Quarterly' }
    ],

    visualType: 'channel-conflict-matrix',
    visualTitle: 'Channel Conflict & Margin Cannibalization Matrix',
    visualSubtitle: 'Direct vs. Indirect Overlap Mapping, Margin Fences & Rules of Engagement',

    caseStudy: {
      title: 'Industrial Automation Software',
      headline: 'Built System Integrator Motion, Generating $8.5M Incremental ARR',
      body: 'A manufacturing software company relied exclusively on a direct sales force whose growth had plateaued. An attempted reseller rollout had triggered severe sales team conflict. We modeled an OEM integration motion with certified system integrators, established strict deal registration fences, and piloted with 3 partners. The motion generated $8.5M in incremental ARR with zero internal territory friction.',
      beforeMetric: 'Territory Gridlock',
      afterMetric: '$8.5M Incremental ARR',
      impactLabel: '18% New ARR from Channel'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // ORIGIN 04 · NODE 4.4 — NEW PRODUCT LAUNCH DISCOVERY
  // ─────────────────────────────────────────────────────────────
  'new-launch': {
    id: 'new-launch',
    slug: 'new-launch',
    originNumber: 'Expansion',
    originName: 'Expansion Discovery',
    nodeNumber: 'Node 4.4',
    title: 'New Product Launch Discovery',
    structureType: 'Command-Telemetry-Kill-Scale',
    heroEyebrow: 'NODE 4.4',
    heroHeadline: 'Is Launch Day a Controlled Operation — or a Coin Flip?',
    heroSubheadline: 'Product built, PR campaign prepped, but no launch segmentation, no evidence-based pricing, and zero real-time telemetry. Launch day arrives with a press release and hope. We install the complete Launch Command System 4-6 weeks pre-launch.',
    ctaText: 'Control Your Launch',

    problemHeadline: 'The Coin Flip Problem',
    problemBody: 'For most companies, product launches are marketing theater. The engineering team finishes the build, marketing drafts a press release and schedules social media posts, and executives hold their breath. There is no propensity-ranked target list, no buyer-tested pricing guardrails, and no velocity telemetry. If the initial campaign underwhelms, nobody knows which variable failed.',
    problemStats: [
      { label: 'Uncontrolled Launch Failures', value: '72%', change: 'Enterprise launches failing to reach pipeline goals within 90 days' },
      { label: 'Launch Campaign Disconnect', value: '64%', change: 'Marketing leads failing to match sales qualification criteria' },
      { label: 'Lack of Day-0 Telemetry', value: '88%', change: 'Companies unable to track launch deal velocity in real time' }
    ],

    offeringHeadline: 'Launch Command System',
    offeringBody: 'We turn launch day into a precision mathematical operation. 4-6 weeks prior to launch, we install the complete command infrastructure: propensity-ranked first-200 accounts, evidence-locked pricing, CFO-ready ROI business cases, and real-time Day-0 velocity telemetry with pre-set kill/scale gates.',
    offeringHighlights: [
      'Propensity-ranked First-200 target account list ready for Day-0 outbound activation',
      'Buyer-evidenced launch pricing and packaging locked with enforced CRM discount floors',
      'Real-time Velocity Command Center monitoring stage-by-stage conversion from launch moment',
      'Pre-agreed Day-45 and Day-90 kill/scale decision framework preventing prolonged burn'
    ],

    deliverablesHeadline: 'What We Deliver',
    deliverables: [
      { title: 'First-200 Propensity Target Dossier', desc: 'Hand-curated, intent-scored list of the 200 highest-probability launch prospects with mapped buying committees.' },
      { title: 'Locked Launch Pricing & Packaging Architecture', desc: 'Evidence-backed launch pricing with CRM-enforced discount floors and value metric definitions.' },
      { title: 'CFO-Ready Launch ROI Business Cases', desc: 'Quantitative customer ROI calculators arming sales reps to defend value in initial pitch meetings.' },
      { title: 'Day-0 Launch Velocity Command Center', desc: 'Live telemetry monitor tracking impressions, MQL-to-SQL velocity, meeting rates, and pipeline generation.' },
      { title: 'Day-45 & Day-90 Kill/Scale Gate Protocol', desc: 'Executive decision framework outlining exact quantitative benchmarks required to scale capital or pivot.' }
    ],

    architectureHeadline: 'Install Segmentation, Pricing, Demand Chain, and Telemetry in 4-6 Weeks Pre-Launch',
    architecturePoints: [
      { title: 'Pre-Launch Intent Ingestion', desc: 'Monitoring search surge topics and competitor dissatisfaction signals to populate launch account lists.' },
      { title: 'Sales Force War-Room Training', desc: 'Training account executives on launch objection handling, trap-setting questions, and ROI calculators.' },
      { title: 'Real-Time Pipeline Telemetry', desc: 'Instrumenting every launch interaction from website visit to signed contract with automated stall alerts.' },
      { title: 'Agile Messaging Optimization', desc: 'Iterating outbound copy and campaign positioning weekly based on live buyer objection data.' }
    ],

    outcomesHeadline: 'Verified Outcomes',
    outcomes: [
      { metric: '≥3×', label: 'First-90-Day Pipeline', description: 'Pipeline generated exceeds first-quarter sales quota by 3x.' },
      { metric: '-30%', label: 'Cycle Time vs. Portfolio', description: 'Deal velocity significantly faster than portfolio average.' },
      { metric: '≥Baseline', label: 'Win Rate from Week 4', description: 'Conversion rates match or exceed mature core product baseline.' },
      { metric: 'Day 0', label: 'Command Center Live', description: 'Full real-time visibility from the moment the announcement goes live.' }
    ],

    realizationHeadline: 'Continuous Optimization',
    realizationBody: 'Launch Command Center live from Day 0. Propensity-ranked accounts rescored weekly. Formal Day-45 and Day-90 kill/scale reviews ensure resources are allocated exclusively to winning product lines.',
    realizationSteps: [
      { stage: 'Day-0 Telemetry Go-Live', action: 'Streaming real-time funnel conversion and rep outreach.', frequency: 'Day 0 Live' },
      { stage: 'Weekly Messaging Iteration', action: 'Refining email cadences and objection handling based on sales call data.', frequency: 'Weekly' },
      { stage: 'Day-45 & Day-90 Gate Reviews', action: 'Auditing pipeline volume against pre-agreed kill/scale targets.', frequency: 'Day 45 & 90' }
    ],

    visualType: 'launch-command-timeline',
    visualTitle: 'Launch Command System Timeline',
    visualSubtitle: 'T-6 Weeks Pre-Launch Infrastructure → Day-0 Launch → Day-45 & Day-90 Kill/Scale Gates',

    caseStudy: {
      title: 'Enterprise AI Infrastructure Suite',
      headline: 'Flagship AI Product Launch Delivered 3.4× Pipeline Quota in 60 Days',
      body: 'An enterprise cloud software company prepared to launch a complex generative AI platform. Rather than relying on PR hype, we installed the Launch Command System 5 weeks pre-launch. We delivered a propensity-ranked list of 200 Fortune 1000 accounts with known AI infrastructure initiatives and locked price floors. In 60 days, the launch generated $11.4M in pipeline (3.4x quota) with zero unapproved discounts.',
      beforeMetric: 'Unmeasured PR Launch',
      afterMetric: '3.4× Pipeline Quota',
      impactLabel: '$11.4M Qualified Pipeline in 60 Days'
    }
  }
};
