export interface MathematicalModel {
  number: string;
  name: string;
  category: 'revenue-pipeline' | 'marketing-economics' | 'ai-decision' | 'revenue-os';
  categoryLabel: string;
  businessProblem: string;
  equation: string;
  variables: { symbol: string; name: string; unit: string; description: string }[];
  whatItMeasures: string;
  businessApplication: string;
  exampleCalculation: {
    inputs: Record<string, string>;
    steps: string[];
    result: string;
    interpretation: string;
  };
  requiredData: string[];
  recommendedVisualization: string;
  interpretation: string;
  limitations: string[];
  interactiveType?: 'velocity' | 'bayesian' | 'monte-carlo' | 'decay' | 'ltv-cac' | 'opportunity-score';
}

export interface MarketingDebtStage {
  stageNumber: string;
  name: string;
  shortName: string;
  symbol: string;
  definition: string;
  businessMeaning: string;
  mathematicalRepresentation: string;
  inputVariables: { name: string; unit: string; baseline: number }[];
  interpretation: string;
  potentialAction: string;
  defaultWeight: number;
}

export interface GtmStackDiscipline {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  description: string;
  coreMethods: { name: string; application: string; businessQuestion: string }[];
}

export interface BusinessApplicationCapability {
  id: string;
  capabilityName: string;
  businessChallenge: string;
  relevantModels: string[];
  aiCapabilities: string[];
  requiredData: string[];
  workflow: string[];
  humanDecisionPoints: string[];
  performanceIndicators: string[];
}

export interface ModelSelectorChallenge {
  id: string;
  title: string;
  symptom: string;
  recommendedModelNumbers: string[];
  rationale: string;
  dataRequirements: string;
}

// ── 6-STAGE GAP FRAMEWORK (Marketing Debt → Revenue Gap) ──
export const MARKETING_DEBT_STAGES: MarketingDebtStage[] = [
  {
    stageNumber: '01',
    name: 'Awareness Gap',
    shortName: 'Awareness',
    symbol: 'G_A',
    definition: 'The delta between total addressable market accounts and accounts actively aware of your solution existence and core value proposition.',
    businessMeaning: 'Uncaptured market demand caused by dark-funnel opacity, fragmented top-of-funnel channels, and lack of brand salience in target ICP accounts.',
    mathematicalRepresentation: 'G_A = 1 - (Aware_Accounts / Total_ICP_Market)',
    inputVariables: [
      { name: 'Target ICP Universe', unit: 'Accounts', baseline: 10000 },
      { name: 'Aware Accounts', unit: 'Accounts', baseline: 6500 }
    ],
    interpretation: 'A high awareness gap means prospective enterprise buyers select competitors during initial vendor screening before your reps are even invited.',
    potentialAction: 'Deploy programmatic intent-driven dark-funnel surveillance, executive thought leadership, and automated 1:1 outbound account warming.',
    defaultWeight: 0.20
  },
  {
    stageNumber: '02',
    name: 'Utility Gap',
    shortName: 'Utility',
    symbol: 'G_U',
    definition: 'The perceived divergence between product technical capabilities and the specific operational jobs-to-be-done demanded by enterprise buyers.',
    businessMeaning: 'Features exist but fail to clearly translate into measurable financial or operational relief for key business stakeholders.',
    mathematicalRepresentation: 'G_U = 1 - (Perceived_Utility_Score / Target_Utility_Score)',
    inputVariables: [
      { name: 'Target Use-Case Fit', unit: 'Score (0-100)', baseline: 100 },
      { name: 'Perceived Utility', unit: 'Score (0-100)', baseline: 70 }
    ],
    interpretation: 'A severe utility gap causes prospects to view your offering as a discretionary commodity rather than an indispensable core operating system.',
    potentialAction: 'Repackage feature matrices into validated ROI business cases and configure role-specific interactive proof-of-value demonstrations.',
    defaultWeight: 0.20
  },
  {
    stageNumber: '03',
    name: 'Brand Gap',
    shortName: 'Brand',
    symbol: 'G_B',
    definition: 'The deficit in emotional trust, market prestige, category leadership authority, and enterprise perceived security against tier-1 incumbents.',
    businessMeaning: 'Nobody gets fired for buying IBM/Salesforce; enterprise risk aversion delays deals when brand security validation is unestablished.',
    mathematicalRepresentation: 'G_B = 1 - (Brand_Trust_Index / Incumbent_Trust_Index)',
    inputVariables: [
      { name: 'Incumbent Benchmark Trust', unit: 'Index (0-100)', baseline: 100 },
      { name: 'Current Brand Trust', unit: 'Index (0-100)', baseline: 60 }
    ],
    interpretation: 'Brand deficit forces heavy commercial discounting to offset perceived vendor stability and execution risk.',
    potentialAction: 'Publish verified enterprise customer transformations, secure SOC2/ISO audit certifications, and establish third-party analyst recognition.',
    defaultWeight: 0.20
  },
  {
    stageNumber: '04',
    name: 'Reputation Gap',
    shortName: 'Reputation',
    symbol: 'G_R',
    definition: 'The gap between marketed promises and public market sentiment, peer advocacy, verified customer reviews, and post-sale delivery proof.',
    businessMeaning: 'Prospect backchannel checks, G2/Gartner reviews, and peer inquiries reveal customer friction or slow time-to-value.',
    mathematicalRepresentation: 'G_R = 1 - (Positive_Sentiment_Ratio / Total_Sentiment_Signals)',
    inputVariables: [
      { name: 'Total Sentiment Signals', unit: 'Signals', baseline: 100 },
      { name: 'Positive Sentiment Signals', unit: 'Signals', baseline: 75 }
    ],
    interpretation: 'Poor reputation accelerates deal stall during late-stage executive committee reviews and security risk assessments.',
    potentialAction: 'Systematize customer advocacy, accelerate customer onboarding to first value within 30 days, and automate reference calls.',
    defaultWeight: 0.20
  },
  {
    stageNumber: '05',
    name: 'Pipeline Gap',
    shortName: 'Pipeline',
    symbol: 'G_P',
    definition: 'The mathematical shortfall in active qualified sales opportunity volume relative to the quota coverage multiple required to hit plan.',
    businessMeaning: 'Reps lack sufficient qualified pipeline to absorb deal slippage and normal stage fallout, creating extreme revenue forecast vulnerability.',
    mathematicalRepresentation: 'G_P = clamp(1 - (Actual_Pipeline_Coverage / Target_Coverage_Multiple), 0, 1)',
    inputVariables: [
      { name: 'Target Quota Coverage Multiple', unit: 'Multiple', baseline: 3.5 },
      { name: 'Actual Pipeline Coverage', unit: 'Multiple', baseline: 2.4 }
    ],
    interpretation: 'Pipeline deficits force sales management into end-of-quarter panic discounting and pursuit of poor-fit accounts.',
    potentialAction: 'Deploy autonomous AI SDR swarms to generate high-intent outbound meetings and tighten stage-gate qualification criteria.',
    defaultWeight: 0.20
  },
  {
    stageNumber: '06',
    name: 'Revenue Gap',
    shortName: 'Revenue Gap',
    symbol: 'Delta_R',
    definition: 'The uncaptured financial value between theoretical market revenue potential and actual recognized commercial revenue.',
    businessMeaning: 'The compounding dollar loss directly resulting from the cumulative marketing debt accumulated across stages 01 through 05.',
    mathematicalRepresentation: 'Delta_R = R_p - R_a = R_p * MD',
    inputVariables: [
      { name: 'Potential Market Revenue (Rp)', unit: 'USD ($)', baseline: 10000000 },
      { name: 'Modeled Realized Revenue (Ra)', unit: 'USD ($)', baseline: 6850000 }
    ],
    interpretation: 'Represents the recoverable margin and pipeline capital trapped by commercial friction and disjointed revenue systems.',
    potentialAction: 'Implement unified RevOps data plane and AI-native sales acceleration engines to close all upstream debt stages.',
    defaultWeight: 0.00
  }
];

// ── 25 ADVANCED MATHEMATICAL MODELS ──
export const MATHEMATICAL_MODELS: MathematicalModel[] = [
  // ── CATEGORY A: REVENUE & PIPELINE MATHEMATICS (01-12) ──
  {
    number: '01',
    name: 'Revenue Velocity Equation',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Sales executives lack a single unified mathematical metric to diagnose why quarterly revenue throughput slows down or misses targets.',
    equation: 'V = (L * C * ASP) / T',
    variables: [
      { symbol: 'V', name: 'Revenue Velocity', unit: '$/Day', description: 'Dollar value of closed revenue generated per day of commercial activity.' },
      { symbol: 'L', name: 'Qualified Opportunities (Leads)', unit: 'Count', description: 'Total volume of active qualified enterprise sales opportunities.' },
      { symbol: 'C', name: 'Win Rate (Conversion)', unit: '%', description: 'Percentage of qualified opportunities successfully converted to closed-won.' },
      { symbol: 'ASP', name: 'Average Selling Price (Deal Size)', unit: '$', description: 'Mean annualized contract value across closing opportunities.' },
      { symbol: 'T', name: 'Sales Cycle Length', unit: 'Days', description: 'Average calendar days elapsed from initial qualification to closed-won.' }
    ],
    whatItMeasures: 'The rate at which sales pipeline converts into recognized revenue over calendar time.',
    businessApplication: 'Simulates sensitivity trade-offs: e.g., determining whether a 10% increase in deal size compensates for a 15-day elongation in sales cycle.',
    exampleCalculation: {
      inputs: { 'L': '120 Opps', 'C': '25% (0.25)', 'ASP': '$80,000', 'T': '60 Days' },
      steps: [
        'Numerator = 120 * 0.25 * $80,000 = $2,400,000',
        'Denominator = 60 Days',
        'Velocity V = $2,400,000 / 60 = $40,000 per day',
        'Annualized Run-Rate = $40,000 * 365 = $14,600,000'
      ],
      result: '$40,000 / day ($14.6M/yr)',
      interpretation: 'Compressing sales cycle from 60 to 45 days increases velocity to $53,333/day (+$4.87M annualized lift) with zero additional pipeline volume.'
    },
    requiredData: ['CRM opportunity create/close timestamps', 'Historical win/loss logs', 'Final booked ARR values'],
    recommendedVisualization: 'Multi-variable sensitivity spider plot and daily velocity run-rate chart',
    interpretation: 'Higher velocity indicates superior operational efficiency; cycle duration is typically the highest leverage denominator.',
    limitations: ['Assumes steady-state pipeline flow; large outlier enterprise deals can distort ASP and cycle averages.'],
    interactiveType: 'velocity'
  },
  {
    number: '02',
    name: 'Funnel Entropy Model',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Pipeline stage distributions become chaotic and unpredictable, blinding RevOps to hidden deal stalls and pipeline stagnation.',
    equation: 'H(X) = -sum(p_i * log2(p_i))',
    variables: [
      { symbol: 'H(X)', name: 'Funnel Entropy', unit: 'Bits', description: 'Shannon entropy measuring stage distribution disorder and deal uncertainty.' },
      { symbol: 'p_i', name: 'Stage Probability', unit: 'Fraction', description: 'Proportion of active pipeline volume residing in pipeline stage i.' },
      { symbol: 'n', name: 'Number of Stages', unit: 'Count', description: 'Total governed qualification stages in the sales process.' }
    ],
    whatItMeasures: 'The degree of dispersion, unpredictability, and stagnation across pipeline stages.',
    businessApplication: 'Monitors pipeline operational hygiene: rising entropy signals deals clustering unpredictably in mid-funnel limbo without progressing or disqualifying.',
    exampleCalculation: {
      inputs: { 'p_1 (Discovery)': '0.40', 'p_2 (Eval)': '0.35', 'p_3 (Proposal)': '0.15', 'p_4 (Legal)': '0.10' },
      steps: [
        '-[0.40*log2(0.40) + 0.35*log2(0.35) + 0.15*log2(0.15) + 0.10*log2(0.10)]',
        '-[0.40*(-1.322) + 0.35*(-1.515) + 0.15*(-2.737) + 0.10*(-3.322)]',
        '-[-0.529 - 0.530 - 0.411 - 0.332] = 1.802 Bits'
      ],
      result: '1.80 Bits (Max Theoretical for 4 stages = 2.0 Bits)',
      interpretation: 'High entropy score indicates pipeline spread is close to random uniform distribution, pointing to severe stage-gate exit ambiguity.'
    },
    requiredData: ['Active pipeline volume aggregated by governed CRM milestone stage'],
    recommendedVisualization: 'Normalized entropy dial gauge paired with stage distribution histogram',
    interpretation: 'Lower entropy with smooth forward migration indicates disciplined qualification and predictable deal flow.',
    limitations: ['Entropy measures distribution shape, not the absolute commercial quality or velocity of individual deals.']
  },
  {
    number: '03',
    name: 'Bayesian Win Probability',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Subjective rep optimism causes inaccurate win forecasts that collapse during final procurement reviews.',
    equation: 'P(Win|E) = [P(E|Win) * P(Win)] / P(E)',
    variables: [
      { symbol: 'P(Win|E)', name: 'Posterior Probability', unit: '%', description: 'Updated probability of winning the deal given observed behavioral evidence E.' },
      { symbol: 'P(Win)', name: 'Prior Probability', unit: '%', description: 'Historical baseline close rate for deals in the current stage and segment.' },
      { symbol: 'P(E|Win)', name: 'Likelihood', unit: '%', description: 'Probability that winning deals exhibit evidence signal E (e.g., CFO meeting attended).' },
      { symbol: 'P(E)', name: 'Evidence Marginal Probability', unit: '%', description: 'Overall historical frequency of observing evidence E across all deals.' }
    ],
    whatItMeasures: 'Empirically updated close likelihood based on real-time multi-threading and buyer behavioral telemetry.',
    businessApplication: 'Automatically re-weights CRM deal probabilities when key milestones occur (e.g., security review cleared, mutual close plan signed, economic buyer engaged).',
    exampleCalculation: {
      inputs: { 'P(Win) Prior': '25%', 'P(CFO|Win)': '80%', 'P(CFO overall)': '35%' },
      steps: [
        'Posterior = (0.80 * 0.25) / 0.35',
        'Posterior = 0.20 / 0.35 = 0.5714 (57.1%)'
      ],
      result: '57.1% Posterior Win Rate',
      interpretation: 'Engaging the CFO elevates true deal win probability from a baseline 25% to an empirical 57.1%.'
    },
    requiredData: ['Historical deal activity logs', 'Meeting participant seniority', 'CRM stage conversion outcomes'],
    recommendedVisualization: 'Bayesian probability update waterfall comparing prior vs posterior curves',
    interpretation: 'Provides mathematically disciplined opportunity scoring free from subjective salesperson sentiment.',
    limitations: ['Requires statistically significant historical deal volume to establish reliable conditional likelihood matrices.'],
    interactiveType: 'bayesian'
  },
  {
    number: '04',
    name: 'Markov Sales Funnel Model',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Static conversion funnels falsely assume linear deal flow, failing to capture stage regression, hold loops, and multi-pathway conversions.',
    equation: 'S(t+1) = S(t) * P_matrix',
    variables: [
      { symbol: 'S(t)', name: 'State Vector at t', unit: 'Vector', description: 'Distribution of active deals across all pipeline stages at time t.' },
      { symbol: 'P_matrix', name: 'Transition Probability Matrix', unit: 'Matrix', description: 'Square matrix where P_ij is the transition probability from stage i to stage j.' },
      { symbol: 'S(t+1)', name: 'State Vector at t+1', unit: 'Vector', description: 'Projected pipeline distribution at the next operational interval.' }
    ],
    whatItMeasures: 'Stochastic state transitions and absorption probabilities into absorbing states (Closed-Won or Closed-Lost).',
    businessApplication: 'Simulates how today’s entire active pipeline will distribute across future months, calculating true expected terminal conversion.',
    exampleCalculation: {
      inputs: { 'Active Opps': '[100 Stage 1, 50 Stage 2, 20 Stage 3]', 'Transition Rates': 'Defined 5x5 absorbing Markov chain' },
      steps: [
        'Calculate Fundamental Matrix N = (I - Q)^-1',
        'Calculate Absorption Probabilities B = N * R',
        'Apply B to current active cohort [100, 50, 20]'
      ],
      result: 'Expected 34 Closed-Won, 136 Closed-Lost over 90 days',
      interpretation: 'Reveals non-linear leakages and accurately projects cash realization timing across multiple forward quarters.'
    },
    requiredData: ['Timestamped stage transition logs', 'Historical progression, regression, and loss rates'],
    recommendedVisualization: 'Markov state-transition network diagram with directional flow probabilities',
    interpretation: 'Identifies the specific stage handoffs with the highest risk of terminal attrition.',
    limitations: ['Assumes Markov memoryless property (transition depends only on current state, not historical dwell time).']
  },
  {
    number: '05',
    name: 'Pipeline Leakage Function',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Revenue leaders cannot pinpoint the exact stage boundaries where qualified pipeline silently drains away.',
    equation: 'Lambda_i = L_lost_i / (L_active_i + L_entered_i)',
    variables: [
      { symbol: 'Lambda_i', name: 'Stage Leakage Rate', unit: '%', description: 'Proportion of opportunities lost during residency in stage i.' },
      { symbol: 'L_lost_i', name: 'Opportunities Lost in Stage', unit: 'Count', description: 'Number of opportunities marked closed-lost or disqualified in stage i.' },
      { symbol: 'L_active_i', name: 'Baseline Opportunities in Stage', unit: 'Count', description: 'Active opportunities in stage i at the period start.' },
      { symbol: 'L_entered_i', name: 'New Opportunities Inflow', unit: 'Count', description: 'Opportunities that transitioned into stage i during the measurement window.' }
    ],
    whatItMeasures: 'Discrete stage-by-stage pipeline attrition rate independent of overall funnel conversion.',
    businessApplication: 'Pinpoints specific qualification failure points (e.g., identifying that 58% of deal leakage occurs at Stage 3 Technical Validation).',
    exampleCalculation: {
      inputs: { 'L_lost_3': '42 Opps', 'L_active_3': '50 Opps', 'L_entered_3': '30 Opps' },
      steps: [
        'Denominator = 50 + 30 = 80 Total Opportunities',
        'Leakage Rate Lambda_3 = 42 / 80 = 0.525 (52.5%)'
      ],
      result: '52.5% Stage 3 Leakage',
      interpretation: 'Over half of opportunities reaching technical validation fail to exit successfully, indicating poor upfront technical discovery in Stage 2.'
    },
    requiredData: ['Stage-stamped CRM opportunity loss records', 'Reason-for-loss tagging'],
    recommendedVisualization: 'Horizontal funnel leakage waterfall with red outflow vectors',
    interpretation: 'A sudden spike in stage leakage signals either misaligned qualification criteria or superior competitor displacement.',
    limitations: ['Does not capture deal dormancy where opportunities linger indefinitely without formal closed-lost status.']
  },
  {
    number: '06',
    name: 'Stage Conversion Elasticity',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Sales enablement budgets are spent haphazardly across stages without knowing which stage yield improvement drives maximal revenue.',
    equation: 'epsilon_i = (% Delta Revenue) / (% Delta Conversion_i)',
    variables: [
      { symbol: 'epsilon_i', name: 'Conversion Elasticity', unit: 'Ratio', description: 'Percentage change in recognized revenue resulting from a 1% relative improvement in stage i conversion.' },
      { symbol: '% Delta Revenue', name: 'Revenue Percentage Lift', unit: '%', description: 'Resulting percentage change in total terminal bookings.' },
      { symbol: '% Delta Conversion_i', name: 'Conversion Shift in Stage i', unit: '%', description: 'Incremental percentage improvement achieved in stage i conversion rate.' }
    ],
    whatItMeasures: 'The sensitivity and marginal revenue leverage of individual pipeline conversion stage gates.',
    businessApplication: 'Directs enablement resources to the highest-elasticity intervention point (e.g., proving that a 5% lift in discovery-to-demo conversion yields 3.2x more ARR than a 5% lift in contract negotiation).',
    exampleCalculation: {
      inputs: { 'Base Revenue': '$10.0M', 'Stage 2 Conversion': 'Lift from 40% to 44% (+10% relative)', 'New Modeled Revenue': '$11.4M (+14%)' },
      steps: [
        'epsilon_2 = 14% / 10% = 1.40'
      ],
      result: '1.40 Elasticity Coefficient',
      interpretation: 'Stage 2 conversion is elastic (>1.0); every 1% relative conversion gain compounds into a 1.4% expansion in recognized annual bookings.'
    },
    requiredData: ['Historical full-funnel stage conversion rates', 'Terminal revenue booking totals'],
    recommendedVisualization: 'Elasticity bar comparison ranking stages by revenue leverage multiplier',
    interpretation: 'Focus sales coaching and playbook automation strictly on stages with elasticity coefficients substantially greater than 1.0.',
    limitations: ['Linear elasticity breaks down if improving conversion inadvertently lowers average contract size or deal quality.']
  },
  {
    number: '07',
    name: 'Pipeline Coverage Confidence',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Rule-of-thumb "3x coverage" targets ignore deal probability distributions, giving boards false confidence or unwarranted panic.',
    equation: 'C_conf = (sum(Deal_Value_i * P_win_i)) / Quota_Target',
    variables: [
      { symbol: 'C_conf', name: 'Confidence-Adjusted Coverage', unit: 'Ratio', description: 'Probability-weighted pipeline coverage ratio against recognized quota.' },
      { symbol: 'Deal_Value_i', name: 'Contract Value of Deal i', unit: '$', description: 'Stated ACV for active opportunity i.' },
      { symbol: 'P_win_i', name: 'Empirical Win Probability', unit: '%', description: 'Bayesian or stage-adjusted close probability of deal i.' },
      { symbol: 'Quota_Target', name: 'Executive Revenue Target', unit: '$', description: 'Contractual quarterly or annual revenue quota.' }
    ],
    whatItMeasures: 'The mathematical adequacy of pipeline volume to hit quota when accounting for empirical win probabilities.',
    businessApplication: 'Replaces crude 3x unweighted coverage metrics with a probability-weighted solvency indicator (target >= 1.15 to ensure statistical safety margin).',
    exampleCalculation: {
      inputs: { 'Unweighted Pipeline': '$15.0M', 'Quota Target': '$4.0M (Unweighted = 3.75x)', 'Weighted Pipeline sum(V_i * P_i)': '$3.60M' },
      steps: [
        'C_conf = $3,600,000 / $4,000,000 = 0.90'
      ],
      result: '0.90x Confidence Coverage (Deficit)',
      interpretation: 'Despite an apparent 3.75x unweighted coverage, the true probability-weighted pipeline is 10% short of hitting the $4.0M quota.'
    },
    requiredData: ['CRM active opportunity values', 'Stage-adjusted historical win probability tables', 'Quota targets'],
    recommendedVisualization: 'Dual-bullet chart comparing unweighted coverage vs confidence-adjusted coverage against quota floor',
    interpretation: 'A confidence ratio below 1.0 means quota will be missed unless net-new accelerated pipeline is introduced immediately.',
    limitations: ['Accuracy is strictly dependent on the validity of individual deal probability estimates.']
  },
  {
    number: '08',
    name: 'Sales Cycle Variance',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Extreme sales cycle volatility makes quarterly forecast timing unreliable, causing sudden end-of-quarter revenue slippage.',
    equation: 'sigma^2 = sum((x_i - mu)^2) / n',
    variables: [
      { symbol: 'sigma^2', name: 'Cycle Variance', unit: 'Days^2', description: 'Variance of sales cycle durations around the mean.' },
      { symbol: 'sigma', name: 'Standard Deviation', unit: 'Days', description: 'Standard deviation in days to close.' },
      { symbol: 'x_i', name: 'Individual Deal Cycle', unit: 'Days', description: 'Calendar days elapsed to close deal i.' },
      { symbol: 'mu', name: 'Mean Sales Cycle', unit: 'Days', description: 'Average sales cycle length across closed deals.' },
      { symbol: 'n', name: 'Total Closed Deals', unit: 'Count', description: 'Number of closed deals in the analysis cohort.' }
    ],
    whatItMeasures: 'Process predictability and timeline consistency in enterprise deal execution.',
    businessApplication: 'Quantifies deal slippage risk: a sales cycle of 90 days with sigma = 12 days is highly predictable; a 90-day cycle with sigma = 45 days renders quarter-end forecasts speculative.',
    exampleCalculation: {
      inputs: { 'Deal Cycles (days)': '[60, 75, 90, 105, 120]', 'Mean mu': '90 Days', 'n': '5' },
      steps: [
        'Deviations = [-30, -15, 0, +15, +30]',
        'Squared Deviations = [900, 225, 0, 225, 900]',
        'Sum = 2250',
        'sigma^2 = 2250 / 5 = 450 Days^2',
        'sigma = sqrt(450) = 21.2 Days'
      ],
      result: 'sigma = 21.2 Days (CV = 23.6%)',
      interpretation: 'With a 90-day mean and 21.2-day standard deviation, roughly 68% of deals close between 69 and 111 days, confirming significant cross-quarter slippage risk.'
    },
    requiredData: ['Closed-won deal open and close timestamps', 'Deal size segmentation'],
    recommendedVisualization: 'Sales cycle duration distribution bell curve with standard deviation threshold bands',
    interpretation: 'Tightly clustered cycles reflect standardized procurement execution; wide spreads reflect bespoke, ungoverned sales motions.',
    limitations: ['Enterprise deal cycles are often log-normally distributed rather than Gaussian; check for positive skew.']
  },
  {
    number: '09',
    name: 'Revenue Forecast Confidence Interval',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Single-point revenue forecasts ("we will do $5.2M this quarter") mislead boards by concealing statistical uncertainty bands.',
    equation: 'CI = Y_hat +- Z * (sigma / sqrt(n))',
    variables: [
      { symbol: 'CI', name: 'Confidence Interval', unit: '$ Range', description: 'Upper and lower monetary bounds within which true revenue is expected to land.' },
      { symbol: 'Y_hat', name: 'Expected Forecast Point', unit: '$', description: 'Mean expected closed revenue based on current pipeline modeling.' },
      { symbol: 'Z', name: 'Critical Z-Score', unit: 'Dimensionless', description: 'Standard normal critical value (1.96 for 95% confidence, 1.645 for 90%).' },
      { symbol: 'sigma', name: 'Forecast Standard Error', unit: '$', description: 'Standard deviation of historical revenue forecast residuals.' },
      { symbol: 'n', name: 'Cohort Sample Size', unit: 'Count', description: 'Number of active independent opportunities in the forecast pool.' }
    ],
    whatItMeasures: 'The probabilistic precision and variance bounds around the baseline revenue forecast.',
    businessApplication: 'Enables CFOs to establish realistic board commitment floors (P90 downside) and capital expenditure buffers.',
    exampleCalculation: {
      inputs: { 'Expected Forecast Y_hat': '$5,000,000', 'Forecast sigma': '$800,000', 'Z (95% CI)': '1.96', 'Active Opportunities n': '64' },
      steps: [
        'Standard Error SE = $800,000 / sqrt(64) = $800,000 / 8 = $100,000',
        'Margin of Error = 1.96 * $100,000 = $196,000',
        'Lower Bound = $5,000,000 - $196,000 = $4,804,000',
        'Upper Bound = $5,000,000 + $196,000 = $5,196,000'
      ],
      result: '$4.80M to $5.20M (at 95% Confidence)',
      interpretation: 'The board can commit to $4.80M as a high-confidence floor with less than 2.5% statistical probability of shortfall under baseline assumptions.'
    },
    requiredData: ['Historical quarterly forecast variance records', 'Pipeline deal count and standard error matrices'],
    recommendedVisualization: 'Forecast fan chart with 50%, 80%, and 95% probabilistic confidence cones',
    interpretation: 'Narrow intervals indicate tight operational control; wide intervals demand hedging against downside variance.',
    limitations: ['Assumes normally distributed residuals; macroeconomic shocks can violate standard error assumptions.']
  },
  {
    number: '10',
    name: 'Monte Carlo Revenue Simulation',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Static spreadsheets fail to capture the combinatorial probabilities of multi-deal pipeline outcomes, masking tail risk.',
    equation: 'R_sim_k = sum(Value_i * Bernoulli(P_i))',
    variables: [
      { symbol: 'R_sim_k', name: 'Simulated Revenue Run k', unit: '$', description: 'Total revenue realized in single simulation iteration k.' },
      { symbol: 'Value_i', name: 'Contract Value of Deal i', unit: '$', description: 'Potential contract size sampled from empirical distribution.' },
      { symbol: 'Bernoulli(P_i)', name: 'Outcome Operator', unit: '0 or 1', description: 'Stochastic outcome variable where 1 represents win with probability P_i.' },
      { symbol: 'N', name: 'Iteration Count', unit: 'Simulations', description: 'Number of repeated randomized iterations (e.g., 1,000 to 10,000 runs).' }
    ],
    whatItMeasures: 'The full probability distribution and value-at-risk curve across thousands of possible pipeline realization outcomes.',
    businessApplication: 'Determines the exact probability of hitting budget (e.g., "there is a 78% probability of achieving $4.5M, but only a 32% probability of hitting the $5.5M stretch target").',
    exampleCalculation: {
      inputs: { 'Active Deals': '50 enterprise opportunities', 'Simulations': '2,000 iterations', 'Input distributions': 'Empirical stage probabilities & ASP ranges' },
      steps: [
        'Run 2,000 independent simulated pipeline realizations',
        'Sort iteration totals from lowest to highest',
        'Extract 10th percentile (P10 Bear Case) = $3.82M',
        'Extract 50th percentile (P50 Median Base) = $4.65M',
        'Extract 90th percentile (P90 Bull Stretch) = $5.48M'
      ],
      result: 'P10: $3.82M | P50: $4.65M | P90: $5.48M',
      interpretation: 'Management should anchor operational hiring against the P50 ($4.65M) and debt covenants against the P10 ($3.82M).'
    },
    requiredData: ['Individual active deal sizes', 'Empirical win probability distributions', 'Historical slip rates'],
    recommendedVisualization: 'Simulated revenue histogram with P10, P50, and P90 percentile marker overlays',
    interpretation: 'Provides the definitive executive risk curve for quarterly and annual commercial budget commitments.',
    limitations: ['A high simulation count does not make a model accurate if underlying stage probability inputs are flawed.'],
    interactiveType: 'monte-carlo'
  },
  {
    number: '11',
    name: 'Expected Revenue Value (ERV)',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'Reps prioritize large deals with 10% win chances over mid-sized deals with 80% close probability, misallocating executive selling capacity.',
    equation: 'ERV_i = ACV_i * P_win_i',
    variables: [
      { symbol: 'ERV_i', name: 'Expected Revenue Value', unit: '$', description: 'Risk-adjusted mathematical expectation of deal i.' },
      { symbol: 'ACV_i', name: 'Annual Contract Value', unit: '$', description: 'Total prospective annualized contract revenue.' },
      { symbol: 'P_win_i', name: 'Empirical Win Probability', unit: '%', description: 'Probability of successfully securing signature.' }
    ],
    whatItMeasures: 'The statistical fair value of an individual sales opportunity.',
    businessApplication: 'Arbitrates executive field deployment: a $100K deal at 60% win rate ($60K ERV) merits higher resource priority than a $300K deal at 15% win rate ($45K ERV).',
    exampleCalculation: {
      inputs: { 'Deal A': '$100,000 ACV * 60% Win Prob', 'Deal B': '$300,000 ACV * 15% Win Prob' },
      steps: [
        'ERV(A) = $100,000 * 0.60 = $60,000',
        'ERV(B) = $300,000 * 0.15 = $45,000',
        'Delta = Deal A yields +$15,000 (+33%) higher expected value'
      ],
      result: 'Deal A ERV = $60K vs Deal B ERV = $45K',
      interpretation: 'Focusing executive attention on Deal A produces superior expected returns despite Deal B having a 3x higher top-line vanity value.'
    },
    requiredData: ['Contract opportunity size', 'Empirical stage-adjusted win probabilities'],
    recommendedVisualization: 'Scatter quadrant plot mapping Contract Size (Y) vs Win Probability (X) with ERV bubble sizing',
    interpretation: 'Directs field resources away from low-probability vanity whales toward mathematically optimal enterprise conversions.',
    limitations: ['Relies on linear risk neutrality; does not account for strategic logo acquisition value or competitive lock-out goals.']
  },
  {
    number: '12',
    name: 'Revenue at Risk (RaR)',
    category: 'revenue-pipeline',
    categoryLabel: 'Revenue & Pipeline Mathematics',
    businessProblem: 'RevOps cannot quantify total financial exposure created by delayed deals, single-threaded contacts, and slipping milestones.',
    equation: 'RaR = sum(Deal_Value_i * (1 - Health_Score_i) * Weight_i)',
    variables: [
      { symbol: 'RaR', name: 'Revenue at Risk', unit: '$', description: 'Total dollar volume of pipeline currently exposed to critical slip or loss hazards.' },
      { symbol: 'Deal_Value_i', name: 'Contract Value of Deal i', unit: '$', description: 'Nominal contract size of active opportunity i.' },
      { symbol: 'Health_Score_i', name: 'Deal Health Index', unit: '0 to 1', description: 'Composite behavioral index (recency, engagement velocity, stakeholder multi-threading).' },
      { symbol: 'Weight_i', name: 'Period Closeness Factor', unit: 'Weight', description: 'Weighting factor scaling with proximity to quarter close.' }
    ],
    whatItMeasures: 'The total monetary revenue pipeline actively endangered by operational decay signals.',
    businessApplication: 'Triggers automated RevOps deal interventions and executive sponsor escalations before deals are formally lost.',
    exampleCalculation: {
      inputs: { 'Deal 1 ($200K)': 'Health = 0.40, Weight = 1.0', 'Deal 2 ($500K)': 'Health = 0.70, Weight = 1.0', 'Deal 3 ($150K)': 'Health = 0.20, Weight = 1.0' },
      steps: [
        'RaR(1) = $200K * (1 - 0.40) = $200K * 0.60 = $120K',
        'RaR(2) = $500K * (1 - 0.70) = $500K * 0.30 = $150K',
        'RaR(3) = $150K * (1 - 0.20) = $150K * 0.80 = $120K',
        'Total RaR = $120K + $150K + $120K = $390,000'
      ],
      result: '$390,000 Pipeline at Risk',
      interpretation: 'Out of an $850K gross cohort, $390K (45.9%) requires urgent executive intervention to prevent terminal quarter-end slippage.'
    },
    requiredData: ['Deal health telemetry (email sentiment, meeting cadence)', 'Opportunity close dates', 'Contract sizes'],
    recommendedVisualization: 'Risk-adjusted exposure matrix ranking opportunities by dollar risk exposure',
    interpretation: 'A rising RaR ratio signals immediate need for deal triage and multi-threading remediation.',
    limitations: ['Requires clear calibration of health score variables so low activity is not mistaken for offline customer consensus building.']
  },

  // ── CATEGORY B: MARKETING & CUSTOMER ECONOMICS (13-19) ──
  {
    number: '13',
    name: 'Lead Decay Function',
    category: 'marketing-economics',
    categoryLabel: 'Marketing & Customer Economics',
    businessProblem: 'Enterprise inbound leads sit uncontacted for days, allowing high-intent buyer interest to rapidly cool before sales reps engage.',
    equation: 'V(t) = V_0 * e^(-lambda * t)',
    variables: [
      { symbol: 'V(t)', name: 'Lead Value at Time t', unit: '$ or Score', description: 'Effective economic value or conversion propensity of a lead at elapsed time t.' },
      { symbol: 'V_0', name: 'Initial Lead Value', unit: '$ or Score', description: 'Peak value at the instant of inbound intent signal generation.' },
      { symbol: 'lambda', name: 'Decay Constant', unit: '1/Hour', description: 'Empirical decay coefficient reflecting customer urgency and competitive saturation.' },
      { symbol: 't', name: 'Elapsed Response Time', unit: 'Hours', description: 'Hours elapsed between lead creation and first verified human or AI SDR touch.' }
    ],
    whatItMeasures: 'The rate at which lead conversion likelihood decays exponentially over response delay.',
    businessApplication: 'Defines autonomous AI SDR response SLA thresholds: responding in 5 minutes vs 4 hours preserves up to 8x higher conversion value.',
    exampleCalculation: {
      inputs: { 'Initial Score V_0': '100', 'Decay Constant lambda': '0.15 per hour', 'Time t': '8 Hours' },
      steps: [
        'V(8) = 100 * e^(-0.15 * 8)',
        'Exponent = -1.20',
        'e^(-1.20) = 0.3012',
        'V(8) = 100 * 0.3012 = 30.12'
      ],
      result: '30.1 Score (70% Value Loss in 8h)',
      interpretation: 'Delaying response by just one business day destroys nearly 70% of initial buyer conversion propensity.'
    },
    requiredData: ['Form submission / signal timestamp', 'First outreach response timestamp', 'Meeting booked outcomes'],
    recommendedVisualization: 'Exponential half-life decay curve showing lead conversion value vs response latency',
    interpretation: 'Steep decay curves prove that autonomous instant AI response delivers superior pipeline yields over manual SDR cadences.',
    limitations: ['Enterprise ABM inquiries have lower decay constants than transactional B2B inbound leads.'],
    interactiveType: 'decay'
  },
  {
    number: '14',
    name: 'CRM Data Decay Index',
    category: 'marketing-economics',
    categoryLabel: 'Marketing & Customer Economics',
    businessProblem: 'Executive turnover, reorganizations, and stale contact records quietly degrade CRM databases by 25–35% annually, tanking outbound efficiency.',
    equation: 'D_rate = (C_invalid + C_departed + C_stale) / C_total',
    variables: [
      { symbol: 'D_rate', name: 'Data Decay Rate', unit: '% / Year', description: 'Annualized proportion of contact records that become inaccurate or inactive.' },
      { symbol: 'C_invalid', name: 'Bounced / Dead Records', unit: 'Count', description: 'Email addresses that produce hard bounces or dead domains.' },
      { symbol: 'C_departed', name: 'Executive Departures', unit: 'Count', description: 'Key champions and buyers who have changed employers or roles.' },
      { symbol: 'C_stale', name: 'Unengaged Contacts', unit: 'Count', description: 'Contacts with zero verifiable engagement signals over >180 days.' },
      { symbol: 'C_total', name: 'Total Database Size', unit: 'Count', description: 'Total records in active target market CRM instance.' }
    ],
    whatItMeasures: 'The annual entropy and obsolescence rate of target market buyer profiles.',
    businessApplication: 'Justifies automated continuous data enrichment agents to refresh buying committee trees and track champion job-changes.',
    exampleCalculation: {
      inputs: { 'C_invalid': '3,500', 'C_departed': '4,200', 'C_stale': '6,800', 'C_total': '50,000 Contacts' },
      steps: [
        'Decayed Contacts = 3,500 + 4,200 + 6,800 = 14,500',
        'D_rate = 14,500 / 50,000 = 0.29 (29.0%)'
      ],
      result: '29.0% Annual Database Decay',
      interpretation: 'Nearly one in three CRM contacts is inaccurate; reps waste 29% of outbound bandwidth prospecting obsolete records.'
    },
    requiredData: ['Email bounce telemetry', 'LinkedIn profile employment update monitors', 'CRM last-activity timestamps'],
    recommendedVisualization: 'Annual database hygiene degradation waterfall showing verified vs stale contacts',
    interpretation: 'High data decay directly depresses outbound deliverability and SDR pipeline generation velocity.',
    limitations: ['Does not measure subtle changes in internal buying authority where a title remains unchanged but influence shifts.']
  },
  {
    number: '15',
    name: 'Customer Lifetime Value (Probabilistic CLV)',
    category: 'marketing-economics',
    categoryLabel: 'Marketing & Customer Economics',
    businessProblem: 'Traditional static CLV formulas assume infinite linear retention, massively overstating customer worth and misguiding CAC allocation.',
    equation: 'CLV = sum_t=0^T [(R_t * M_t * S(t)) / (1 + d)^t]',
    variables: [
      { symbol: 'CLV', name: 'Customer Lifetime Value', unit: '$', description: 'Net present value of all future gross margin contributions from a customer cohort.' },
      { symbol: 'R_t', name: 'Expected Revenue at Year t', unit: '$', description: 'Contracted baseline revenue plus expected expansion at period t.' },
      { symbol: 'M_t', name: 'Gross Margin Percentage', unit: '%', description: 'Gross contribution margin realized on software/service delivery.' },
      { symbol: 'S(t)', name: 'Survival Probability', unit: '%', description: 'Cumulative probability of the account surviving (not churning) through period t.' },
      { symbol: 'd', name: 'Discount Rate / WACC', unit: '%', description: 'Corporate cost of capital used to discount future cash flows.' }
    ],
    whatItMeasures: 'The discounted cash flow contribution of an enterprise account accounting for churn hazard and expansion curves.',
    businessApplication: 'Establishes the ceiling for allowable Customer Acquisition Cost (CAC) and customer success retention investments.',
    exampleCalculation: {
      inputs: { 'R_0': '$100K ARR', 'Net Expansion': '110% YoY', 'Gross Margin M': '80%', 'Annual Churn': '8% (Survival S(1)=0.92, S(2)=0.846)', 'Discount Rate d': '10%' },
      steps: [
        'Year 0 Margin = $100K * 0.80 = $80,000',
        'Year 1 discounted = ($110K * 0.80 * 0.92) / (1.10) = $80,960 / 1.10 = $73,600',
        'Year 2 discounted = ($121K * 0.80 * 0.846) / (1.10)^2 = $81,893 / 1.21 = $67,680',
        'Cumulative 3-Year Baseline = $80,000 + $73,600 + $67,680 = $221,280'
      ],
      result: '$221,280 3-Year NPV Contribution',
      interpretation: 'With positive net expansion and disciplined retention, the customer delivers over $220K in net present cash margin within 3 years.'
    },
    requiredData: ['Cohort renewal & expansion rates', 'Gross margin schedules', 'Corporate discount rate'],
    recommendedVisualization: 'Discounted multi-year cohort cash-flow cumulative curve',
    interpretation: 'Expansion compounding is the single highest leverage lever in enterprise software unit economics.',
    limitations: ['Macroeconomic shocks can trigger sudden step-function churn across enterprise cohorts.']
  },
  {
    number: '16',
    name: 'Marketing Attribution Model (Shapley Value)',
    category: 'marketing-economics',
    categoryLabel: 'Marketing & Customer Economics',
    businessProblem: 'Last-touch and first-touch attribution models falsely credit individual channels while ignoring the multi-touch consensus buyer journey.',
    equation: 'phi_i = sum_S subset N\{i} [|S|! * (|N| - |S| - 1)! / |N|!] * [v(S union {i}) - v(S)]',
    variables: [
      { symbol: 'phi_i', name: 'Shapley Attribution Value', unit: '$ or %', description: 'Axiomatically fair marginal contribution assigned to marketing touchpoint channel i.' },
      { symbol: 'N', name: 'Total Channel Set', unit: 'Set', description: 'Set of all marketing and sales channels touched during the buyer journey.' },
      { symbol: 'S', name: 'Channel Coalition Subsets', unit: 'Subset', description: 'All potential combinations of channels excluding channel i.' },
      { symbol: 'v(S)', name: 'Characteristic Function', unit: 'Conversion $', description: 'Total revenue or conversion value created by coalition subset S.' }
    ],
    whatItMeasures: 'The mathematically fair marginal contribution of each touchpoint across all possible coalition arrival sequences.',
    businessApplication: 'Reallocates marketing budgets: proves whether high-cost top-of-funnel content or mid-funnel executive roundtables drive true incremental conversion.',
    exampleCalculation: {
      inputs: { 'Channels': 'Display (D), Content (C), Executive Event (E)', 'Deal Closed': '$150,000 ARR', 'Shapley weights derived': 'D=20%, C=35%, E=45%' },
      steps: [
        'Display Attribution = $150,000 * 0.20 = $30,000',
        'Content Attribution = $150,000 * 0.35 = $52,500',
        'Executive Event Attribution = $150,000 * 0.45 = $67,500'
      ],
      result: 'Fair Allocation: Event $67.5K, Content $52.5K, Display $30K',
      interpretation: 'Unlike last-touch models that give 100% credit to the event, Shapley recognizes the $82.5K contribution of upstream brand and discovery touches.'
    },
    requiredData: ['Full multi-touch path logs per won and lost opportunity', 'Touchpoint timestamps and costs'],
    recommendedVisualization: 'Shapley game-theoretic channel contribution waterfall compared to naive first/last touch',
    interpretation: 'Eliminates departmental disputes by grounding multi-touch marketing spend in cooperative game theory.',
    limitations: ['Computationally intensive for customer journeys involving more than 15 distinct channel touchpoints.']
  },
  {
    number: '17',
    name: 'Customer Acquisition Efficiency (LTV:CAC Ratio)',
    category: 'marketing-economics',
    categoryLabel: 'Marketing & Customer Economics',
    businessProblem: 'Rapid customer acquisition masks severe underlying capital destruction when acquisition spend exceeds customer payback capacity.',
    equation: 'Efficiency = CLV / CAC',
    variables: [
      { symbol: 'Efficiency', name: 'LTV:CAC Ratio', unit: 'Ratio', description: 'Lifetime value returned per unit dollar of sales and marketing customer acquisition spend.' },
      { symbol: 'CLV', name: 'Customer Lifetime Value', unit: '$', description: 'Gross profit contribution generated over the customer lifespan.' },
      { symbol: 'CAC', name: 'Customer Acquisition Cost', unit: '$', description: 'Fully loaded sales and marketing expenses required to win a customer.' }
    ],
    whatItMeasures: 'Capital productivity and long-term commercial sustainability of the go-to-market engine.',
    businessApplication: 'Guides board growth decisions: ratios <3.0 indicate inefficient spend; ratios >5.0 signal under-investment in addressable growth channels.',
    exampleCalculation: {
      inputs: { 'CLV': '$240,000', 'Fully Loaded CAC': '$60,000' },
      steps: [
        'LTV:CAC = $240,000 / $60,000 = 4.0x'
      ],
      result: '4.0x Efficiency Ratio',
      interpretation: 'Healthy enterprise benchmark (3.0x–5.0x target); company generates $4 of discounted gross margin for every $1 invested in customer acquisition.'
    },
    requiredData: ['Fully loaded sales & marketing spend', 'New logo count', 'Cohort gross margin retention profiles'],
    recommendedVisualization: 'LTV vs CAC quadrant matrix with 1x, 3x, and 5x frontier benchmark lines',
    interpretation: 'A 4x–5x ratio combined with under-12-month CAC payback represents an elite enterprise revenue engine.',
    limitations: ['Ratios above 6x frequently indicate under-spending in marketing, leaving market share vulnerable to aggressive competitors.'],
    interactiveType: 'ltv-cac'
  },
  {
    number: '18',
    name: 'Virality Coefficient (K-Factor)',
    category: 'marketing-economics',
    categoryLabel: 'Marketing & Customer Economics',
    businessProblem: 'Product-led growth (PLG) motions fail to achieve self-sustaining expansion because customer referral loops leak without compounding.',
    equation: 'K = i * c',
    variables: [
      { symbol: 'K', name: 'Virality Coefficient', unit: 'Ratio', description: 'Number of new customers generated by each existing customer.' },
      { symbol: 'i', name: 'Invitation Rate', unit: 'Invites / User', description: 'Average number of customer invitations or referral shares sent per active user.' },
      { symbol: 'c', name: 'Invite Conversion Rate', unit: '%', description: 'Percentage of sent invitations that convert into registered active users.' }
    ],
    whatItMeasures: 'The mathematical capacity of a product experience to self-propagate organically through user adoption.',
    businessApplication: 'Evaluates product-led growth features: K > 1.0 indicates viral exponential compounding; K < 1.0 requires paid marketing replenishment.',
    exampleCalculation: {
      inputs: { 'Invites per user i': '8.0 invites', 'Conversion rate c': '15% (0.15)' },
      steps: [
        'K = 8.0 * 0.15 = 1.20'
      ],
      result: 'K = 1.20 (Exponential Viral Growth)',
      interpretation: 'Every 1,000 users organically recruit 1,200 new users in the next cycle, creating self-compounding organic customer acquisition.'
    },
    requiredData: ['Product referral invite telemetry', 'Sign-up referral source tracking'],
    recommendedVisualization: 'Compounding viral growth curve comparing K=0.7, K=1.0, and K=1.2 trajectories',
    interpretation: 'Even in B2B enterprise motions, K > 0.4 significantly reduces customer acquisition costs by creating organic word-of-mouth pipeline.',
    limitations: ['High B2B procurement hurdles limit viral coefficients to intra-enterprise seat expansion rather than multi-company loops.']
  },
  {
    number: '19',
    name: 'Marketing Mix Optimization',
    category: 'marketing-economics',
    categoryLabel: 'Marketing & Customer Economics',
    businessProblem: 'Marketing leadership allocates budget based on historical inertia, causing severe diminishing returns across saturated advertising channels.',
    equation: 'max sum(f_i(x_i)) s.t. sum(x_i) <= B, x_i in [L_i, U_i]',
    variables: [
      { symbol: 'x_i', name: 'Budget Allocation to Channel i', unit: '$', description: 'Capital allocated to specific marketing channel i.' },
      { symbol: 'f_i(x_i)', name: 'Response Function', unit: 'Pipeline $', description: 'Diminishing-return Hill or Adbudg response curve for channel i.' },
      { symbol: 'B', name: 'Total Marketing Budget', unit: '$', description: 'Total corporate marketing capital constraint.' },
      { symbol: 'L_i, U_i', name: 'Operational Capacity Bounds', unit: '$', description: 'Minimum and maximum budget capacity limits for channel i.' }
    ],
    whatItMeasures: 'The mathematically optimal budget distribution maximizing total pipeline generation across diminishing returns curves.',
    businessApplication: 'Solves budget allocation: determines the exact marginal point where paid search spend saturates and funds should shift into executive roundtables.',
    exampleCalculation: {
      inputs: { 'Budget B': '$2,000,000', 'Channels': '4 channels with empirical saturation curves' },
      steps: [
        'Equate marginal revenue products: df_1/dx_1 = df_2/dx_2 = ... = lambda',
        'Solve constrained Lagrangian system',
        'Optimal allocation: ABM $850K, Events $600K, Search $350K, Content $200K'
      ],
      result: '+$3.4M Incremental Pipeline vs Flat Budget Split',
      interpretation: 'Eliminates saturation waste, delivering +18.5% higher pipeline yield from the identical $2.0M marketing budget.'
    },
    requiredData: ['Historical spend and pipeline generation per channel', 'Channel saturation threshold estimates'],
    recommendedVisualization: 'Diminishing returns S-curve overlays with optimal allocation tangent points',
    interpretation: 'Budget allocation must be rebalanced dynamically as channels approach their saturation inflection points.',
    limitations: ['Requires continuous re-estimation of channel response coefficients as competitive market bids fluctuate.']
  },

  // ── CATEGORY C: AI SALES & DECISION INTELLIGENCE (20-24) ──
  {
    number: '20',
    name: 'AI Opportunity Score',
    category: 'ai-decision',
    categoryLabel: 'AI Sales & Decision Intelligence',
    businessProblem: 'Reps waste 65% of their working hours manually triaging low-fit, low-intent opportunities while high-probability deals decay from neglect.',
    equation: 'Score = (Intent * ICP_Fit * Engagement * Timing) / (Risk_Factor + epsilon)',
    variables: [
      { symbol: 'Score', name: 'AI Opportunity Composite Score', unit: '0 to 100', description: 'Normalized composite rating indicating deal viability and priority.' },
      { symbol: 'Intent', name: 'Dark Funnel Intent Telemetry', unit: '0 to 1', description: 'External intent surge signals (pricing research, competitive reviews).' },
      { symbol: 'ICP_Fit', name: 'Ideal Customer Profile Fit', unit: '0 to 1', description: 'Algorithmic alignment with historical highest-margin winning accounts.' },
      { symbol: 'Engagement', name: 'First-Party Engagement Depth', unit: '0 to 1', description: 'Email responsiveness, document dwell time, multi-stakeholder presence.' },
      { symbol: 'Timing', name: 'Fiscal Urgency Indicator', unit: '0 to 1', description: 'Budget cycle alignment, regulatory deadlines, leadership mandates.' },
      { symbol: 'Risk_Factor', name: 'Commercial Hazard Metric', unit: '0 to 1', description: 'Procurement redlines, competitor incumbency, champion turnover risk.' }
    ],
    whatItMeasures: 'Real-time multi-dimensional probability and commercial attractiveness of an opportunity.',
    businessApplication: 'Autonomous SDR and AE lead dispatch: automatically routes tier-1 opportunities (Score >= 85) to senior executives within 2 minutes of signal arrival.',
    exampleCalculation: {
      inputs: { 'Intent': '0.90', 'ICP_Fit': '0.95', 'Engagement': '0.80', 'Timing': '0.85', 'Risk_Factor': '0.25' },
      steps: [
        'Numerator = 0.90 * 0.95 * 0.80 * 0.85 = 0.5814',
        'Denominator = 0.25 + 0.05 = 0.30',
        'Raw Score = 0.5814 / 0.30 = 1.938',
        'Normalized to 100 scale = 94.2 / 100'
      ],
      result: '94.2 / 100 (Tier-1 Priority Pursuit)',
      interpretation: 'Exceptional strategic alignment with low commercial risk; triggers immediate high-touch executive pursuit.'
    },
    requiredData: ['First-party website and CRM telemetry', 'Third-party intent feeds', 'Firmographic profile data'],
    recommendedVisualization: 'Radar chart displaying the 5 scoring dimensions alongside composite score gauge',
    interpretation: 'High composite scores mathematically correlate with 3.8x faster sales cycles and 2.4x higher win rates.',
    limitations: ['Scoring algorithms must be retrained quarterly to prevent bias toward legacy non-strategic products.'],
    interactiveType: 'opportunity-score'
  },
  {
    number: '21',
    name: 'Buying Intent Function',
    category: 'ai-decision',
    categoryLabel: 'AI Sales & Decision Intelligence',
    businessProblem: 'Outbound sales teams waste millions reaching out to target accounts that are completely cold and not in a buying window.',
    equation: 'I(t) = sum_k [w_k * S_k(t) * e^(-alpha * (t - t_k))]',
    variables: [
      { symbol: 'I(t)', name: 'Composite Intent Surge Index', unit: 'Index (0-100)', description: 'Real-time quantified buying readiness index for target account.' },
      { symbol: 'w_k', name: 'Signal Weight', unit: 'Weight', description: 'Weighting coefficient representing the predictive power of signal k.' },
      { symbol: 'S_k(t)', name: 'Signal Magnitude', unit: 'Magnitude', description: 'Observed intensity of behavior k (e.g., page views, job postings, downloads).' },
      { symbol: 'alpha', name: 'Intent Half-Life Decay', unit: '1/Day', description: 'Recency discount rate reducing the weight of older intent behaviors.' },
      { symbol: 't - t_k', name: 'Signal Age', unit: 'Days', description: 'Days elapsed since the intent behavior was observed.' }
    ],
    whatItMeasures: 'The aggregated, time-decayed concentration of active evaluation signals emitted by an enterprise buying committee.',
    businessApplication: 'Triggers outbound cadences precisely when an account enters an active surge window, multiplying cold outreach meeting rates by 4.2x.',
    exampleCalculation: {
      inputs: { 'Pricing Page Visits (w=30)': '3 visits today', 'Competitor Battlecard Search (w=40)': 'Yesterday', 'Job Posting for RevOps (w=30)': '3 days ago' },
      steps: [
        'Signal 1 = 30 * 1.0 = 30.0',
        'Signal 2 = 40 * e^(-0.10 * 1) = 40 * 0.905 = 36.2',
        'Signal 3 = 30 * e^(-0.10 * 3) = 30 * 0.741 = 22.2',
        'Composite Intent Index = 30.0 + 36.2 + 22.2 = 88.4 / 100'
      ],
      result: '88.4 / 100 Intent Index (Active Surge)',
      interpretation: 'Account is actively benchmarking solutions; deploy account executive within 24 hours to capture evaluation momentum.'
    },
    requiredData: ['B2B dark-funnel intent data', 'IP-to-company website analytics', 'Technographic hiring signals'],
    recommendedVisualization: 'Time-series surge intensity sparkline with threshold trigger line at index >= 75',
    interpretation: 'Accounts surging on external intent signals are 5x more likely to accept executive discovery conversations.',
    limitations: ['Signal noise caused by job seekers or students researching the company must be filtered by IP quality checks.']
  },
  {
    number: '22',
    name: 'Customer Churn Probability (Logistic Regression)',
    category: 'ai-decision',
    categoryLabel: 'AI Sales & Decision Intelligence',
    businessProblem: 'Customer churn surprises leadership at contract renewal because accounts appear healthy on surface metrics while engagement has collapsed.',
    equation: 'P(Churn) = 1 / [1 + e^(-(beta_0 + sum beta_i * x_i))]',
    variables: [
      { symbol: 'P(Churn)', name: 'Churn Probability', unit: '%', description: 'Likelihood of account non-renewal over the upcoming 90–180 day cycle.' },
      { symbol: 'beta_0', name: 'Model Intercept', unit: 'Log-odds', description: 'Baseline log-odds of churn for standard account profile.' },
      { symbol: 'beta_i', name: 'Feature Weights', unit: 'Coefficients', description: 'Regression weights indicating predictive sensitivity of each telemetry variable.' },
      { symbol: 'x_i', name: 'Behavioral Predictors', unit: 'Telemetry Values', description: 'Product usage drop-off, support ticket severity, executive sponsor turnover, NPS.' }
    ],
    whatItMeasures: 'The mathematical risk of an enterprise customer cancelling or failing to renew their commercial agreement.',
    businessApplication: 'Deploys automated customer success remediation playbooks 120 days prior to renewal when churn probability exceeds 25%.',
    exampleCalculation: {
      inputs: { 'beta_0': '-2.2', 'Usage Drop (x_1=0.6, beta_1=1.8)': 'Usage down 60%', 'Sponsor Left (x_2=1.0, beta_2=1.4)': 'Champion departed' },
      steps: [
        'Linear log-odds z = -2.2 + (1.8 * 0.6) + (1.4 * 1.0)',
        'z = -2.2 + 1.08 + 1.4 = +0.28',
        'P(Churn) = 1 / [1 + e^(-0.28)] = 1 / [1 + 0.7558] = 1 / 1.7558 = 0.5696'
      ],
      result: '57.0% Churn Probability (High Hazard)',
      interpretation: 'Account has flipped from stable renewal to a high-risk category; immediate executive sponsor re-engagement required.'
    },
    requiredData: ['Software seat utilization logs', 'Executive contact stability monitors', 'Support escalation tickets'],
    recommendedVisualization: 'Customer account health risk matrix mapping Churn Probability (Y) vs Contract ARR (X)',
    interpretation: 'Early detection allows 60–90 days of operational runway to restore customer value realization before renewal talks begin.',
    limitations: ['Logistic models assume monotonic relationships; sudden corporate acquisitions can trigger unpredictable contract terminations.']
  },
  {
    number: '23',
    name: 'Next Best Action Score (NBA)',
    category: 'ai-decision',
    categoryLabel: 'AI Sales & Decision Intelligence',
    businessProblem: 'Sales reps follow generic outreach cadences instead of executing the specific high-leverage action most likely to advance a deal.',
    equation: 'E[Action] = P(Success|Action, Context) * Delta Value_Impact - Cost_Execution',
    variables: [
      { symbol: 'E[Action]', name: 'Expected Net Value of Action', unit: '$', description: 'Expected net dollar contribution of executing action a in current context.' },
      { symbol: 'P(Success|...)', name: 'Action Success Likelihood', unit: '%', description: 'Probability that action a successfully advances the deal to the next milestone.' },
      { symbol: 'Delta Value_Impact', name: 'Incremental Deal Value Shift', unit: '$', description: 'Gain in expected deal value or cycle compression if action succeeds.' },
      { symbol: 'Cost_Execution', name: 'Resource Cost of Action', unit: '$', description: 'Executive time and technical drag involved in executing the action.' }
    ],
    whatItMeasures: 'The net expected value and priority of competing sales interventions for an active opportunity.',
    businessApplication: 'Prescribes the optimal next move inside the rep CRM screen: e.g., "Schedule peer architectural call with Solutions VP (+34% expected lift) rather than sending another email."',
    exampleCalculation: {
      inputs: { 'Action 1 (Email)': 'P=15%, Lift=$10K, Cost=$50', 'Action 2 (Executive Peer Call)': 'P=60%, Lift=$40K, Cost=$800' },
      steps: [
        'E[Email] = (0.15 * $10,000) - $50 = $1,500 - $50 = $1,450',
        'E[Exec Call] = (0.60 * $40,000) - $800 = $24,000 - $800 = $23,200',
        'Ratio: Executive Call delivers 16x higher expected economic return'
      ],
      result: 'Exec Call ($23.2K net) ranked #1 over Email ($1.45K)',
      interpretation: 'The AI decision engine unambiguously directs rep and executive leadership to schedule the peer call immediately.'
    },
    requiredData: ['Historical intervention effectiveness databases', 'Opportunity stage context', 'Resource cost tables'],
    recommendedVisualization: 'Ranked action recommendation card with expected value bar indicators',
    interpretation: 'Guides rep behavior with mathematical precision, eliminating aimless follow-up emails that annoy enterprise buyers.',
    limitations: ['Requires continuous reinforcement learning feedback from sales reps to refine action success probabilities.']
  },
  {
    number: '24',
    name: 'Graph Relationship Score',
    category: 'ai-decision',
    categoryLabel: 'AI Sales & Decision Intelligence',
    businessProblem: 'Enterprise deals collapse because sales reps single-thread with one champion, ignoring the hidden buying committee network.',
    equation: 'R_graph = sum_v in V [w_v * Centrality(v) * Sentiment(v)] * Density_G',
    variables: [
      { symbol: 'R_graph', name: 'Relationship Network Score', unit: '0 to 100', description: 'Quantified structural resilience and political coverage of the enterprise account relationship.' },
      { symbol: 'V', name: 'Engaged Stakeholder Nodes', unit: 'People', description: 'Set of active contacts engaged across the customer buying committee.' },
      { symbol: 'Centrality(v)', name: 'Eigenvector / Betweenness Centrality', unit: 'Index (0-1)', description: 'Organizational influence and decision connectivity of stakeholder v.' },
      { symbol: 'Sentiment(v)', name: 'Stakeholder Sentiment', unit: '-1 to +1', description: 'Verifiable engagement and support sentiment of stakeholder v.' },
      { symbol: 'Density_G', name: 'Buying Committee Coverage Density', unit: '0 to 1', description: 'Proportion of required committee roles (Economic, Technical, Legal) engaged.' }
    ],
    whatItMeasures: 'The organizational multi-threading breadth, stakeholder sentiment, and political defensibility within a target enterprise account.',
    businessApplication: 'Flags single-threaded deals: alerts sales management when a $250K opportunity has only one engaged contact, mandating immediate multi-threading.',
    exampleCalculation: {
      inputs: { 'Engaged Nodes V': '4 contacts', 'Sum of Weighted Centralities': '2.80', 'Coverage Density': '4 of 6 required roles (0.67)' },
      steps: [
        'Raw Score = 2.80 * 0.67 = 1.876',
        'Normalized to 100 scale = 78.5 / 100'
      ],
      result: '78.5 / 100 Graph Relationship Score',
      interpretation: 'Moderate multi-threading security; technical and business champions secured, but Procurement and Legal nodes remain unmapped.'
    },
    requiredData: ['Email interaction metadata (To/From/Cc graphs)', 'Calendar invite participants', 'Job title seniority indices'],
    recommendedVisualization: 'Interactive node-link relationship graph showing connected stakeholders and sentiment colors',
    interpretation: 'Deals with Graph Scores > 80 experience 72% lower last-minute stall rates during procurement sign-off.',
    limitations: ['Cannot detect invisible shadow stakeholders who do not participate in formal digital communications.']
  },

  // ── CATEGORY D: REVENUE OPERATING SYSTEM (25) ──
  {
    number: '25',
    name: 'Revenue Operating System Equation',
    category: 'revenue-os',
    categoryLabel: 'Revenue Operating System',
    businessProblem: 'Executive leadership views marketing, sales, customer success, and finance as isolated silos rather than one synchronized mathematical revenue engine.',
    equation: 'Revenue = Traffic * r_lead * r_opp * r_win * ASP * r_retention * (1 + r_expansion)',
    variables: [
      { symbol: 'Traffic', name: 'Market Demand & Visitor Flow', unit: 'Accounts', description: 'Qualified target market account volume engaging with top-of-funnel properties.' },
      { symbol: 'r_lead', name: 'Inbound / Outbound Lead Rate', unit: '%', description: 'Conversion of market account traffic into verified sales leads.' },
      { symbol: 'r_opp', name: 'Opportunity Creation Rate', unit: '%', description: 'Qualification rate of leads into active pipeline sales opportunities.' },
      { symbol: 'r_win', name: 'Terminal Win Rate', unit: '%', description: 'Percentage of opportunities closed-won.' },
      { symbol: 'ASP', name: 'Average Selling Price (Deal Size)', unit: '$', description: 'Mean annualized contract value on new bookings.' },
      { symbol: 'r_retention', name: 'Gross Revenue Retention Rate', unit: '%', description: 'Percentage of baseline recurring revenue retained annually.' },
      { symbol: 'r_expansion', name: 'Net Expansion Rate', unit: '%', description: 'Net upsell and cross-sell percentage generated across retained customer accounts.' }
    ],
    whatItMeasures: 'The complete closed-loop revenue throughput of the enterprise commercial architecture.',
    businessApplication: 'Simulates compounding sensitivity across the entire GTM system: demonstrates that modest 5% optimizations across all 7 variables compound into a +40.7% expansion in total recognized ARR.',
    exampleCalculation: {
      inputs: {
        'Traffic': '20,000 Accounts',
        'r_lead': '5.0% (1,000 Leads)',
        'r_opp': '20.0% (200 Opps)',
        'r_win': '25.0% (50 Deals)',
        'ASP': '$80,000 ($4.0M New ARR)',
        'r_retention': '92%',
        'r_expansion': '25% (Net NRR = 115%)'
      },
      steps: [
        'New Bookings = 20,000 * 0.05 * 0.20 * 0.25 * $80,000 = $4,000,000 New ARR',
        'Compounding Retention Multiplier = 0.92 * (1 + 0.25) = 1.15 NRR',
        'Compounding Output = $4.0M * 1.15 = $4,600,000 Net Portfolio Value'
      ],
      result: '$4.60M Annualized Compounding Throughput',
      interpretation: 'Demonstrates how top-of-funnel acquisition and post-sale NRR expansion function as one connected compounding mathematical machine.'
    },
    requiredData: ['Full-funnel web, CRM, and billing telemetry across marketing, sales, CS, and finance systems'],
    recommendedVisualization: 'Comprehensive multi-stage enterprise revenue flywheel telemetry dashboard',
    interpretation: 'Provides the unifying master equation for modern Enterprise Revenue Architecture and RevOps leadership.',
    limitations: ['All rates must be computed over strictly identical time cohorts to prevent cohort timing distortion.']
  }
];

// ── ADVANCED GTM MATHEMATICAL STACK (5 Disciplines) ──
export const GTM_STACK_DISCIPLINES: GtmStackDiscipline[] = [
  {
    id: 'statistical-models',
    name: 'Statistical & Probabilistic Models',
    tagline: 'Quantifying uncertainty, cohort dynamics & regression baselines',
    iconName: 'BarChart3',
    description: 'Replace subjective boardroom opinions with empirical statistical foundations. Rigorously measure pipeline confidence intervals, historical conversion decay, and multi-variable revenue sensitivity.',
    coreMethods: [
      { name: 'Linear & Multivariate Regression', application: 'Identifying key drivers of deal cycle duration and discount elasticity.', businessQuestion: 'Which commercial deal characteristics correlate most strongly with margin preservation?' },
      { name: 'Bayesian Updating Networks', application: 'Continuous recalibration of deal win likelihood as buyer telemetry signals emerge.', businessQuestion: 'What is the true probability this deal closes given that the CFO joined the evaluation call?' },
      { name: 'Survival Analysis (Kaplan-Meier)', application: 'Modeling time-to-conversion and account churn hazard rates over customer lifecycle.', businessQuestion: 'At what calendar day threshold does an open enterprise deal enter terminal stall hazard?' },
      { name: 'Time-Series ARIMA / Prophet', application: 'Decomposing revenue trends into seasonal patterns, macro shocks, and organic trajectory.', businessQuestion: 'What is our expected organic baseline revenue run-rate next quarter before new pipeline creation?' },
      { name: 'Cohort Retention Matrices', application: 'Tracking dollar and logo retention compounding across customer acquisition vintage quarters.', businessQuestion: 'Are Q1 2025 customer cohorts expanding faster than Q1 2024 cohorts at the 12-month mark?' }
    ]
  },
  {
    id: 'operations-research',
    name: 'Operations Research & Constrained Optimization',
    tagline: 'Optimal resource allocation under real-world financial constraints',
    iconName: 'Scale',
    description: 'Model GTM execution as an engineering optimization problem. Allocate finite marketing dollars, quota capacity, and sales engineering bandwidth to maximize global ARR contribution.',
    coreMethods: [
      { name: 'Linear & Integer Programming', application: 'Allocating quarterly marketing capital across channels subject to budget and headcount limits.', businessQuestion: 'What is the exact budget mix across paid, events, and ABM that maximizes closed-won ARR?' },
      { name: 'Constraint Optimization (Simplex)', application: 'Assigning high-value solution architect hours across competing enterprise deal pursuits.', businessQuestion: 'How should finite technical pre-sales engineering hours be distributed to maximize portfolio ERV?' },
      { name: 'Territory Balancing Algorithms', application: 'Dividing national market accounts into equal-opportunity sales territories.', businessQuestion: 'How can we carve sales territories so every enterprise AE has an equal $4.5M pipeline opportunity?' },
      { name: 'Dynamic Pricing & CPQ Floors', application: 'Algorithmic discount authorization boundaries based on customer willingness-to-pay.', businessQuestion: 'What is the minimum margin floor that protects deal win probability without leaving money on the table?' }
    ]
  },
  {
    id: 'ai-machine-learning',
    name: 'AI, Machine Learning & Cognitive Systems',
    tagline: 'Autonomous signal classification, predictive scoring & reinforcement learning',
    iconName: 'BrainCircuit',
    description: 'Transform continuous commercial data streams into real-time decision intelligence. Deploy neural classifiers, intent reasoners, and autonomous agent swarms that execute revenue workflows 24/7.',
    coreMethods: [
      { name: 'Gradient Boosted Decision Trees', application: 'Predicting enterprise lead conversion and account ICP tiering with 90%+ precision.', businessQuestion: 'Which newly arrived inbound accounts match our top 5% historical lifetime value customers?' },
      { name: 'Logistic Churn Hazard Classifiers', application: 'Early warning detection of silent account churn risk 120 days prior to contract renewal.', businessQuestion: 'Which strategic enterprise accounts are disengaging from product workflows before renewal talks?' },
      { name: 'Reinforcement Learning from Sales Feedback', application: 'Optimizing automated SDR outreach cadences based on positive executive response signals.', businessQuestion: 'What message structure and value-proposition sequence yields the highest meeting acceptance rate?' },
      { name: 'Natural Language Conversation Analytics', application: 'Extracting buyer objections, competitor mentions, and pricing pushback from call audio transcripts.', businessQuestion: 'How frequently are rival vendor claims stalling mid-funnel enterprise evaluations this quarter?' }
    ]
  },
  {
    id: 'network-science',
    name: 'Network Science & Graph Intelligence',
    tagline: 'Mapping enterprise buying committee influence & partner ecosystems',
    iconName: 'Workflow',
    description: 'Enterprise decisions are made by consensus networks, not isolated individuals. Map organizational influence, decision hubs, and ecosystem co-selling vectors using sophisticated graph mathematics.',
    coreMethods: [
      { name: 'Eigenvector Centrality Analysis', application: 'Pinpointing the true behind-the-scenes power brokers within an enterprise buying committee.', businessQuestion: 'Who is the most influential stakeholder connecting technical evaluation with financial sign-off?' },
      { name: 'Community Detection Algorithms', application: 'Clustering multi-departmental buyer coalitions in complex Fortune 500 accounts.', businessQuestion: 'Which operational divisions within the target account are working on parallel initiatives we can unify?' },
      { name: 'Ecosystem Co-Selling Graphs', application: 'Identifying mutual system integrator and software partner overlap on target prospect accounts.', businessQuestion: 'Which certified alliance partner holds the warmest relationship with the target account CIO?' },
      { name: 'Bipartite Account-Skill Mapping', application: 'Matching enterprise customer technical requirements to specialized AE and sales engineer skills.', businessQuestion: 'Which internal specialist has the highest historical win rate when selling against this specific rival?' }
    ]
  },
  {
    id: 'revenue-physics',
    name: 'Revenue Physics & Dynamic System Mechanics',
    tagline: 'Closed-loop feedback mechanics governing corporate ARR expansion',
    iconName: 'Zap',
    description: 'Treat commercial revenue as a physical thermodynamic system. Decompose growth into positive expansion forces and negative friction forces, maintaining empirical equilibrium across commercial pipelines.',
    coreMethods: [
      { name: 'Dynamic Vector Decomposition', application: 'Decomposing overall ARR trajectory into separate expansion, retention, and friction vectors.', businessQuestion: 'Is our ARR growth driven by genuine market pull or masked by unsustainable discounting subsidies?' },
      { name: 'Pipeline Viscosity Modeling', application: 'Measuring operational friction, administrative drag, and stage dwell-time resistance.', businessQuestion: 'Where is administrative procurement drag absorbing the most commercial momentum in our pipeline?' },
      { name: 'Closed-Loop Feedback Regulation', application: 'Feeding closed-lost root-cause telemetry directly into upstream ICP qualification rules.', businessQuestion: 'How can deal losses automatically tune marketing outbound filters to stop wasting rep capacity?' },
      { name: 'Net Revenue Retention Compounding', application: 'Engineering self-sustaining account expansion loops that compound ARR without adding new logos.', businessQuestion: 'What expansion trigger mechanisms yield sustained 135%+ NRR across mature enterprise cohorts?' }
    ]
  }
];

// ── MODEL COMPARISON & SELECTOR (10 Business Challenges) ──
export const MODEL_SELECTOR_CHALLENGES: ModelSelectorChallenge[] = [
  {
    id: 'low-conversion',
    title: 'Low Lead-to-Opportunity Conversion',
    symptom: 'Massive top-of-funnel inbound traffic or SDR outreach volume yielding poor qualified meeting conversion (<3%).',
    recommendedModelNumbers: ['13', '20', '21', '06'],
    rationale: 'Low conversion typically reflects severe response latency (Lead Decay Model 13), poor account-fit filtering (AI Opportunity Score Model 20), or misaligned timing (Intent Function Model 21).',
    dataRequirements: 'Inbound form timestamps, SDR first-response timestamps, ICP attribute tables, third-party intent telemetry.'
  },
  {
    id: 'poor-visibility',
    title: 'Poor Pipeline Visibility & Stalling Deals',
    symptom: 'Deals sit in mid-funnel stages for months without formal progression or disqualification.',
    recommendedModelNumbers: ['02', '05', '08', '12'],
    rationale: 'Quantify pipeline stagnation using Funnel Entropy (Model 02), isolate exact drop-off boundaries with Pipeline Leakage (Model 05), and monitor Revenue at Risk (Model 12).',
    dataRequirements: 'CRM milestone transition history, stage dwell times, reason-for-loss records, deal health scoring.'
  },
  {
    id: 'unpredictable-forecasts',
    title: 'Unpredictable Sales Forecasts & Board Misses',
    symptom: 'End-of-quarter forecast collapses with 20–30% variance against board commitments.',
    recommendedModelNumbers: ['03', '07', '09', '10'],
    rationale: 'Replace subjective rep commits with Bayesian Win Probability (Model 03), Confidence-Adjusted Coverage (Model 07), and Monte Carlo Simulation (Model 10) to establish empirical P10/P50/P90 confidence bounds.',
    dataRequirements: 'Multi-year closed-won/lost historical cohorts, rep activity telemetry, stage-gate duration distributions.'
  },
  {
    id: 'high-cac',
    title: 'Excessive Customer Acquisition Cost (CAC)',
    symptom: 'Sales and marketing spend is inflating faster than gross profit, extending CAC payback beyond 24 months.',
    recommendedModelNumbers: ['17', '19', '16', '01'],
    rationale: 'Audit capital productivity with LTV:CAC Ratio (Model 17), eliminate saturated ad waste via Marketing Mix Optimization (Model 19), and reallocate attribution fairly using Shapley Values (Model 16).',
    dataRequirements: 'Fully loaded GTM expenditures, channel-specific pipeline origination, cohort gross margin schedules.'
  },
  {
    id: 'increasing-churn',
    title: 'Rising Customer Churn & Depressed NRR',
    symptom: 'Gross revenue retention drops below 90%; accounts silently cancel without warning at annual contract renewal.',
    recommendedModelNumbers: ['22', '15', '14', '25'],
    rationale: 'Deploy Logistic Churn Probability (Model 22) 120 days prior to renewal, calculate true discounted Probabilistic CLV (Model 15), and track champion turnover with CRM Data Decay (Model 14).',
    dataRequirements: 'Product seat utilization logs, support escalation tickets, executive sponsor tenure, renewal schedules.'
  },
  {
    id: 'long-cycles',
    title: 'Extended Enterprise Sales Cycles',
    symptom: 'Average enterprise deal takes 9+ months to close, dragging on AE capacity and increasing slippage vulnerability.',
    recommendedModelNumbers: ['01', '08', '23', '24'],
    rationale: 'Analyze velocity bottlenecks with Revenue Velocity (Model 01), measure cycle dispersion with Variance Model 08, and unblock single-threaded committees using Graph Relationship Scoring (Model 24).',
    dataRequirements: 'Sales cycle day distributions, milestone completion timestamps, buying committee participant logs.'
  },
  {
    id: 'weak-intent',
    title: 'Weak Buying Intent & Cold Outreach Fatigue',
    symptom: 'Prospects ignore cold outreach sequences; outbound SDR response rates drop below 1.5%.',
    recommendedModelNumbers: ['21', '20', '13', '01'],
    rationale: 'Stop cold blasting and deploy Buying Intent Functions (Model 21) to engage accounts solely during active evaluation windows, prioritized by AI Opportunity Scoring (Model 20).',
    dataRequirements: 'B2B intent surge feeds, website visitor de-anonymization logs, hiring signals, technographic install data.'
  },
  {
    id: 'inefficient-marketing',
    title: 'Inefficient Marketing Budget Allocation',
    symptom: 'Marketing leadership cannot prove the incremental pipeline return generated by multi-million dollar program spend.',
    recommendedModelNumbers: ['16', '19', '17', '25'],
    rationale: 'Replace flawed last-touch models with Shapley Value Attribution (Model 16) and solve for optimal capital deployment with Marketing Mix Constrained Optimization (Model 19).',
    dataRequirements: 'Touchpoint interaction sequence logs, channel expenditure records, closed-won pipeline attribution.'
  },
  {
    id: 'poor-account-intel',
    title: 'Single-Threaded Accounts & Political Blindspots',
    symptom: 'Deals stall when the primary contact changes roles or when security/procurement blocks purchase without warning.',
    recommendedModelNumbers: ['24', '03', '20', '23'],
    rationale: 'Map organizational power networks using Graph Relationship Scoring (Model 24), recalibrate close odds with Bayesian Evidence (Model 03), and prescribe multi-threading moves with Next Best Action (Model 23).',
    dataRequirements: 'Email/calendar participant graphs, CRM role designations, job title seniority rankings.'
  },
  {
    id: 'growth-stagnation',
    title: 'Revenue Growth Stagnation & Pipeline Plateau',
    symptom: 'New logo acquisition plateaus while sales headcount expansion yields diminishing marginal returns.',
    recommendedModelNumbers: ['25', '01', '15', '18'],
    rationale: 'Diagnose the global commercial system with the Revenue Operating System Equation (Model 25), accelerate throughput via Velocity (Model 01), and unlock expansion with Probabilistic CLV (Model 15).',
    dataRequirements: 'Complete end-to-end full-funnel telemetry across marketing, sales, CS, and finance billing systems.'
  }
];

// ── BUSINESS APPLICATIONS (9 Capabilities) ──
export const BUSINESS_APPLICATIONS: BusinessApplicationCapability[] = [
  {
    id: 'ai-native-sales',
    capabilityName: 'AI Native Sales',
    businessChallenge: 'Sales reps spend up to 70% of their workday on manual administrative prospecting, data entry, and generic follow-up emails.',
    relevantModels: ['20. AI Opportunity Score', '21. Buying Intent Function', '23. Next Best Action', '13. Lead Decay'],
    aiCapabilities: ['Autonomous AI SDR outbound execution', 'Sub-second inbound intent qualification', 'Dynamic persona-specific email generation'],
    requiredData: ['CRM contact records', 'First-party engagement telemetry', 'Third-party intent feeds'],
    workflow: [
      'Intent engine detects active buying surge in target account',
      'AI Opportunity Score computes fit (Score >= 80)',
      'Autonomous SDR generates hyper-personalized outreach within 5 minutes',
      'Meeting scheduled and synced directly to AE calendar with verified briefing dossier'
    ],
    humanDecisionPoints: ['AE review of high-value strategic tier-1 outbound drafts', 'Commercial terms sign-off'],
    performanceIndicators: ['+3.8x Meeting Generation Velocity', '-65% Cost per Sales Qualified Lead', '<5 Min Response SLA']
  },
  {
    id: 'demand-engineering',
    capabilityName: 'Demand Engineering',
    businessChallenge: 'Marketing programs produce large volumes of unverified MQLs that sales reps reject as low quality.',
    relevantModels: ['16. Shapley Attribution', '19. Marketing Mix Optimization', '17. LTV:CAC Ratio', '06. Stage Elasticity'],
    aiCapabilities: ['Dark-funnel buyer de-anonymization', 'Algorithmic multi-touch budget reallocation', 'Predictive account propensity modeling'],
    requiredData: ['Website visitor IP graphs', 'Marketing channel spend tables', 'Historical lead-to-win conversions'],
    workflow: [
      'Continuous capture of dark-funnel intent signals',
      'Shapley value model attributes true incremental pipeline to active channels',
      'Linear programming solver optimizes weekly ad and content budget across channels',
      'High-propensity accounts synced directly to sales outbound sequences'
    ],
    humanDecisionPoints: ['Total quarterly marketing budget approval', 'Brand messaging guardrail approval'],
    performanceIndicators: ['+42% High-Intent Pipeline Lift', '4.2x LTV:CAC Capital Efficiency', 'Zero Disputed MQLs']
  },
  {
    id: 'revenue-intelligence',
    capabilityName: 'Revenue Intelligence',
    businessChallenge: 'Deal slippage surprises sales leadership late in the quarter because opportunity health tracking relies on subjective rep opinions.',
    relevantModels: ['03. Bayesian Win Probability', '12. Revenue at Risk', '08. Sales Cycle Variance', '24. Graph Relationship Score'],
    aiCapabilities: ['Call transcript sentiment analysis', 'Stakeholder engagement velocity tracking', 'Predictive deal slippage early-warning alerts'],
    requiredData: ['Email/calendar interaction feeds', 'CRM deal stage history', 'Gong/Chorus call transcript recordings'],
    workflow: [
      '24/7 ingestion of email sentiment and meeting attendee seniority',
      'Bayesian model recalculates win probability dynamically after every interaction',
      'Revenue at Risk score triggers automated escalation if key champion departs or meetings lapse',
      'Executive sponsor briefing generated for immediate field intervention'
    ],
    humanDecisionPoints: ['Executive leadership intervention on high-hazard deals', 'Concession negotiation guardrails'],
    performanceIndicators: ['<2% Quarterly Forecast Variance', '92% Early Risk Detection Accuracy', '-48% Cycle Compression']
  },
  {
    id: 'sales-acceleration',
    capabilityName: 'Sales Acceleration',
    businessChallenge: 'Enterprise deals stall for weeks in procurement redlines, security audits, and complex multi-stakeholder consensus building.',
    relevantModels: ['01. Revenue Velocity', '05. Pipeline Leakage', '24. Graph Relationship Score', '23. Next Best Action'],
    aiCapabilities: ['Automated mutual close plan governance', 'Interactive buyer ROI business case generation', 'Procurement redline classification'],
    requiredData: ['Contract terms history', 'Buying committee role coverage', 'Sales milestone stage timestamps'],
    workflow: [
      'Opportunity reaches Stage 3 Validation',
      'Graph score identifies missing stakeholder nodes (e.g., CISO or Procurement unmapped)',
      'Next Best Action engine prescribes automated executive alignment playbook',
      'Mutual close plan synchronized between buyer champion and enterprise AE'
    ],
    humanDecisionPoints: ['Final pricing discount approvals', 'Legal liability clause modifications'],
    performanceIndicators: ['-52% Late-Stage Deal Stall Rate', '+35% Enterprise Win Rate', '100% Margin Compliance']
  },
  {
    id: 'revenue-operations',
    capabilityName: 'Revenue Operations',
    businessChallenge: 'Fragmented data silos across Salesforce, HubSpot, and billing systems create conflicting reporting and broken handoffs.',
    relevantModels: ['02. Funnel Entropy', '04. Markov Funnel', '14. CRM Data Decay', '07. Coverage Confidence'],
    aiCapabilities: ['Single data plane synchronization', 'Automated CRM data hygiene & enrichment', 'Deterministic stage-gate exit governance'],
    requiredData: ['CRM pipeline tables', 'Billing and subscription records', 'Third-party firmographic feeds'],
    workflow: [
      'Real-time webhook ingestion unifies marketing, sales, and billing events into a single schema',
      'Automated enrichment agents refresh decaying contact and title records',
      'Markov model projects forward cash realization across next 90–180 days',
      'Coverage confidence dashboard updates hourly for executive board monitoring'
    ],
    humanDecisionPoints: ['Quarterly territory and quota boundary approvals', 'Compensation plan structure updates'],
    performanceIndicators: ['99.9% Pipeline Data Accuracy', 'Zero Disconnected SaaS Silos', '<1.5% Forecast Variance']
  },
  {
    id: 'growth-intelligence',
    capabilityName: 'Growth Intelligence',
    businessChallenge: 'Leadership cannot identify where market share is being won or lost against top competitors across industry segments.',
    relevantModels: ['10. Monte Carlo Simulation', '09. Forecast Confidence Interval', '06. Stage Elasticity', '11. Expected Revenue Value'],
    aiCapabilities: ['Competitor displacement intelligence', 'Win/loss interview topic mining', 'Market capacity modeling'],
    requiredData: ['Competitive deal tagging', 'Win/loss interview archives', 'Market industry ARR benchmark sets'],
    workflow: [
      'Win/loss transcripts ingested and classified by key competitive reason codes',
      'Monte Carlo simulator models market penetration scenarios across 3 target verticals',
      'Stage elasticity analysis identifies pricing power advantages over rival offerings',
      'Competitive battlecards dynamically updated in rep CRM views'
    ],
    humanDecisionPoints: ['Strategic product roadmap prioritization', 'Competitive price adjustment decisions'],
    performanceIndicators: ['+28% Competitive Win Rate vs Tier-1 Rivals', '$14.8M Rival Pipeline Displaced', 'Clear Market Share Visibility']
  },
  {
    id: 'customer-growth',
    capabilityName: 'Customer Growth & NRR Compounding',
    businessChallenge: 'Net Revenue Retention lags because expansion conversations are initiated reactively at renewal rather than through automated usage signals.',
    relevantModels: ['15. Probabilistic CLV', '22. Customer Churn Probability', '18. Virality Coefficient', '25. Revenue OS'],
    aiCapabilities: ['Pre-churn behavioral anomaly detection', 'Automated usage-based expansion trigger alerts', 'Dynamic account health scoring'],
    requiredData: ['Product feature utilization telemetry', 'Contract renewal dates', 'Support ticket sentiment records'],
    workflow: [
      'Continuous telemetry monitoring tracks seat utilization and feature adoption frequency',
      'Logistic churn model alerts CS team 120 days prior to renewal if utilization decays',
      'Expansion trigger fires automated proposal when account reaches 85% capacity threshold',
      'Contract amendment executed with automated CPQ expansion pricing'
    ],
    humanDecisionPoints: ['Account executive intervention on high-value renewal negotiations', 'Custom SLA concessions'],
    performanceIndicators: ['138% Average Net Revenue Retention', '-62% Unplanned Gross Churn', '+34% Account Expansion Speed']
  },
  {
    id: 'gtm-transformation',
    capabilityName: 'GTM Transformation',
    businessChallenge: 'Enterprise organizations struggle to transition from legacy headcount-heavy sales motions to modern AI-native operating models.',
    relevantModels: ['25. Revenue OS Equation', '01. Revenue Velocity', '17. LTV:CAC Ratio', '07. Coverage Confidence'],
    aiCapabilities: ['Enterprise operating model architecture', 'Turnkey autonomous software pod deployment', 'Cross-functional revenue governance'],
    requiredData: ['Historical headcount and quota attainment', 'Sales tech stack licensing costs', 'Sales process documentation'],
    workflow: [
      '4-week diagnostic baselines all 16 discovery nodes across commercial systems',
      'Revenue Operating System Blueprint defines unified data plane and autonomous agent boundaries',
      'Turnkey software pods deployed to automate 80% of administrative and prospecting drag',
      'Continuous governance monitoring verifies ARR compounding and margin recovery'
    ],
    humanDecisionPoints: ['Board-level GTM strategy approval', 'Organizational restructure sign-off'],
    performanceIndicators: ['5–15 Gross Margin Points Recovered', '+60% Operational Throughput Efficiency', 'Go-Live within 60 Days']
  },
  {
    id: 'global-business-acceleration',
    capabilityName: 'Global Business Acceleration',
    businessChallenge: 'International market expansion fails due to uncalibrated localized pricing, regulatory compliance hurdles, and territory blindspots.',
    relevantModels: ['19. Marketing Mix Optimization', '08. Sales Cycle Variance', '11. Expected Revenue Value', '25. Revenue OS'],
    aiCapabilities: ['Cross-border compliance governance (EU AI Act, ISO 42001)', 'Currency & localized pricing elasticity modeling', 'Global corridor demand network orchestration'],
    requiredData: ['Cross-border regulatory schemas', 'International sales cycle metrics', 'Regional conversion rates'],
    workflow: [
      'AI Trust & Governance guardrails configured for local sovereignty (GDPR, EU AI Act)',
      'Regional pricing elasticity models calculate localized pricing floors per geography',
      'Global corridor network routes international buyer intent to regional multilingual AI agents',
      'Centralized executive command console monitors worldwide revenue velocity in real time'
    ],
    humanDecisionPoints: ['International entity establishment', 'Local partner distribution agreement sign-offs'],
    performanceIndicators: ['100% Certified Regulatory Compliance', '3.4x Faster Global Market Entry', 'Zero Data Sovereignty Breaches']
  }
];

// ── 7-STAGE ENTERPRISE IMPLEMENTATION ROADMAP ──
export interface ImplementationRoadmapStage {
  stageNumber: string;
  title: string;
  subtitle: string;
  duration: string;
  activities: string[];
  deliverables: string[];
  stakeholders: string[];
  decisionCheckpoints: string[];
  successCriteria: string;
}

export const IMPLEMENTATION_ROADMAP_STAGES: ImplementationRoadmapStage[] = [
  {
    stageNumber: '01',
    title: 'Discover & Diagnose Commercial Friction',
    subtitle: 'Empirical baseline audit across all commercial systems',
    duration: 'Weeks 1–2',
    activities: [
      'Audit existing CRM, marketing automation, and billing data structures',
      'Conduct stakeholder discovery interviews across CRO, CMO, CFO, and RevOps leadership',
      'Measure historical sales cycle variance, stage conversion drop-offs, and pipeline leakage points'
    ],
    deliverables: [
      'Enterprise Commercial Friction Diagnostic Report',
      '16-Node Baseline Telemetry Audit',
      'Historical Win/Loss & Sales Cycle Variance Benchmark'
    ],
    stakeholders: ['Chief Revenue Officer', 'Chief Marketing Officer', 'VP Revenue Operations', 'Chief Financial Officer'],
    decisionCheckpoints: [
      'Validation of historical baseline conversion metrics',
      'Confirmation of priority friction focus areas'
    ],
    successCriteria: '100% consensus on historical conversion baselines and quantified cost of current operational drag.'
  },
  {
    stageNumber: '02',
    title: 'Assess Data Readiness & System Telemetry',
    subtitle: 'Data integrity, webhook schema & API synchronization verification',
    duration: 'Weeks 3–4',
    activities: [
      'Inspect Salesforce/HubSpot object schemas, custom fields, and timestamp audit reliability',
      'Quantify CRM Data Decay Index (Model 14) and identify orphaned customer records',
      'Verify API latency, rate limits, and webhook availability across tech stack'
    ],
    deliverables: [
      'GTM Data Readiness Scorecard (0–100 Scale)',
      'Data Cleansing & Normalization Protocol',
      'Enterprise API Integration & Security Specification'
    ],
    stakeholders: ['VP Enterprise Architecture', 'Chief Information Security Officer', 'Head of Business Systems'],
    decisionCheckpoints: [
      'SOC2 and data isolation architecture sign-off',
      'Approval of automated data enrichment scripts'
    ],
    successCriteria: 'Data readiness score >= 85/100; verified bi-directional API synchronization established.'
  },
  {
    stageNumber: '03',
    title: 'Select Relevant Mathematical Models',
    subtitle: 'Matching business bottlenecks to the 25 mathematical frameworks',
    duration: 'Weeks 5–6',
    activities: [
      'Run the interactive Model Selector across active business challenge priorities',
      'Map specific mathematical equations to business questions (e.g., Models 01, 03, 10, 15, 20)',
      'Define data inputs, normalization formulas, and parameter boundaries for each chosen model'
    ],
    deliverables: [
      'Mathematical Model Architecture Dossier',
      'Variable Mapping & Normalization Specification',
      'Model Interdependency & Data Flow Topology'
    ],
    stakeholders: ['Principal Data Scientist', 'VP RevOps', 'Director of Sales Enablement'],
    decisionCheckpoints: [
      'CRO sign-off on chosen model portfolio',
      'Validation of variable definitions and units'
    ],
    successCriteria: 'Formal sign-off on 4–8 primary models addressing immediate quarterly commercial goals.'
  },
  {
    stageNumber: '04',
    title: 'Configure Model Assumptions & Weights',
    subtitle: 'Calibrating prior probabilities, decay constants & stage thresholds',
    duration: 'Weeks 7–8',
    activities: [
      'Calculate empirical Bayesian priors (Model 03) from historical 24-month win/loss logs',
      'Calibrate exponential decay constants (Model 13) using lead-response latency records',
      'Configure Marketing Debt weights (wA, wU, wB, wR, wP) ensuring sum equals 1.0'
    ],
    deliverables: [
      'Calibrated Model Parameter Ledger',
      'Historical Backtesting Variance Report',
      'Executive Assumption Documentation'
    ],
    stakeholders: ['Lead Revenue Quant', 'Head of Sales Operations', 'Finance Controller'],
    decisionCheckpoints: [
      'Approval of Bayesian conditional probability matrices',
      'Sign-off on discount floor CPQ rules'
    ],
    successCriteria: 'Model backtesting against past 8 quarters demonstrates <= 3.5% variance against actuals.'
  },
  {
    stageNumber: '05',
    title: 'Validate Calculations & Backtest Outputs',
    subtitle: 'Stress-testing models against out-of-sample historical quarters',
    duration: 'Weeks 9–10',
    activities: [
      'Execute Monte Carlo simulations (Model 10) across historical closed pipelines to test prediction limits',
      'Validate that confidence intervals (Model 09) accurately bracketed actual closed ARR',
      'Conduct sensitivity stress-tests under simulated macroeconomic recession scenarios'
    ],
    deliverables: [
      'Out-of-Sample Model Validation Report',
      'Stress-Test Sensitivity Analysis',
      'Model Governance & Audit Log Documentation'
    ],
    stakeholders: ['CFO', 'VP Risk & Compliance', 'Chief Revenue Officer'],
    decisionCheckpoints: [
      'Formal acceptance of model prediction accuracy thresholds',
      'Board-ready methodology presentation'
    ],
    successCriteria: 'Statistical validation confirms zero structural calculation errors and verified confidence bounds.'
  },
  {
    stageNumber: '06',
    title: 'Integrate with AI & Business Workflows',
    subtitle: 'Embedding real-time mathematical scores directly into CRM & rep cadences',
    duration: 'Weeks 11–12',
    activities: [
      'Embed AI Opportunity Scores (Model 20) directly into Salesforce/HubSpot opportunity views',
      'Configure automated Next Best Action (Model 23) recommendations inside rep daily workflow screens',
      'Deploy autonomous AI SDR swarms to operationalize intent triggers (Model 21)'
    ],
    deliverables: [
      'Live CRM Production Integration',
      'Field Sales Execution Playbook & Training',
      'Automated Telemetry Command Center Dashboard'
    ],
    stakeholders: ['VP Enterprise Sales', 'Frontline Sales Managers', 'Field Account Executives'],
    decisionCheckpoints: [
      'Field sales enablement certification',
      'Go-live authorization for automated AI outreach'
    ],
    successCriteria: '100% rep adoption; sub-second delivery of AI recommendations inside active CRM screens.'
  },
  {
    stageNumber: '07',
    title: 'Monitor, Retrain & Continuously Optimize',
    subtitle: 'Closed-loop algorithmic recalibration & sustained ARR compounding',
    duration: 'Continuous Post-Deployment',
    activities: [
      'Conduct weekly Bayesian forecast variance audits against actual recognized revenue',
      'Automatically retrain logistic churn and conversion classifiers on newly closed deal cohorts',
      'Refine marketing mix allocation weights as competitive market bids fluctuate'
    ],
    deliverables: [
      'Monthly Executive RevOps Variance Scorecard',
      'Quarterly Model Weight Recalibration Logs',
      'Annual Revenue Compounding Review'
    ],
    stakeholders: ['CRO', 'CFO', 'Board Audit Committee'],
    decisionCheckpoints: [
      'Quarterly parameter update reviews',
      'Annual GTM system expansion roadmap'
    ],
    successCriteria: 'Sustained <2% quarterly forecast variance and verifiable multi-point gross margin expansion.'
  }
];

