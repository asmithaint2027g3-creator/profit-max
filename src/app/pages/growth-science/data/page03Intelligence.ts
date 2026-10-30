import { GrowthCapabilityPageData } from '../types';

export const page03IntelligenceData: GrowthCapabilityPageData = {
  pageNumber: '03',
  title: 'Revenue Intelligence',
  slug: 'revenue-intelligence',
  heroHeadline: 'Turn Revenue Signals into Better Commercial Decisions',
  heroSupporting: 'Synthesize buyer intent signals, account telemetry, competitive pricing movements, and predictive forecast models into an empirical decision intelligence engine.',
  businessProblemSummary: 'Revenue teams drown in disparate alerts and uncalibrated CRM data while remaining blind to decisive buying signals, emerging competitive displacement risks, and forecast slippage.',
  targetDecisionMakers: ['Chief Revenue Officers', 'VPs of Sales', 'Chief Marketing Officers', 'Revenue Operations Directors'],
  contextWhoExperiences: 'Enterprise sales organizations with long deal cycles, multi-stakeholder buying committees, and complex competitive displacement environments.',
  contextSituation: 'Reps spend hours manually logging notes while quarterly forecasts rely on subjective optimism rather than deterministic pipeline signals.',
  contextWhyDifficult: 'Commercial signals are fragmented across email exchanges, calendar patterns, website telemetry, third-party intent data, and public regulatory filings.',
  contextContributingFactors: [
    'Subjective opportunity stage progression assigned by individual sales reps',
    'Unmonitored competitor pricing discounting in key enterprise renewals',
    'Lack of multi-stakeholder engagement tracking across buyer committees',
    'Static quarterly forecasting disconnected from live pipeline velocity'
  ],
  symptomsAndConsequences: [
    {
      category: 'Forecast Volatility',
      symptom: 'Quarterly revenue forecasts fluctuating by >25% in the final two weeks of the quarter.',
      consequence: 'Missed board commitments, emergency discount approvals, and damaged investor credibility.'
    },
    {
      category: 'Competitive Displacement',
      symptom: 'Losing key enterprise renewal deals to emergent low-cost challengers with zero advance warning.',
      consequence: 'Gross churn spikes, contract value erosion, and sudden loss of market share.'
    },
    {
      category: 'Account Stagnation',
      symptom: 'High-potential accounts remaining at tier-1 spend for multiple consecutive years.',
      consequence: 'Depressed Net Revenue Retention (NRR) and missed multi-million-dollar expansion potential.'
    },
    {
      category: 'Pipeline Quality',
      symptom: 'Pipeline coverage appears adequate at 4.0x, but 50% of deals are stalled with zero buyer engagement.',
      consequence: 'Wasted sales rep capacity, inflated pipeline assumptions, and end-of-quarter panic.'
    }
  ],
  subSubmenus: [
    {
      id: 'sec-sig-intel',
      slug: 'revenue-signal-intelligence',
      title: 'Revenue Signal Intelligence',
      businessQuestion: 'Which external and internal commercial signals indicate high-probability buying readiness right now?',
      explanation: 'Signal intelligence aggregates first-party engagement data and third-party commercial intent into prioritized, actionable opportunity triggers.',
      topics: [
        {
          title: 'Buying Intent Signals',
          description: 'Capture research activity, review site comparisons, and surge consumption indicators across account domains.',
          businessEvidence: 'B2B intent telemetry, IP reverse-lookup records, content consumption frequency, and RFP downloads.',
          analysisProcess: 'Bayesian intent scoring weighting topic relevance, frequency spikes, and stakeholder seniority.',
          decisionsEnabled: 'Deploy proactive outbound outreach precisely when an account enters an active evaluation window.'
        },
        {
          title: 'Account Intelligence',
          description: 'Compile structural firmographic, technographic, hiring trend, and financial liquidity profiles of target enterprises.',
          businessEvidence: 'Corporate filings (10-K/10-Q), tech stack fingerprinting, executive job postings, and earnings calls.',
          analysisProcess: 'Automated entity enrichment linking budget allocation indicators to strategic corporate priorities.',
          decisionsEnabled: 'Tailor executive value propositions to the active board-level mandates of target accounts.'
        },
        {
          title: 'Opportunity Detection',
          description: 'Identify commercial inflection points: leadership changes, merger integrations, and regulatory compliance deadlines.',
          businessEvidence: 'Executive leadership appointment announcements, M&A filings, and statutory compliance schedules.',
          analysisProcess: 'Event-driven graph matching correlating corporate events with commercial solution demand.',
          decisionsEnabled: 'Contact incoming C-level executives during their first 90-day strategy and vendor review period.'
        },
        {
          title: 'Revenue Trigger Monitoring',
          description: 'Track key account contract expiration dates, vendor renewal cycles, and public RFP issuance milestones.',
          businessEvidence: 'Public procurement portals, partner intelligence feeds, and historical vendor contract cycles.',
          analysisProcess: 'Predictive timeline modeling anticipating vendor replacement windows 6 months prior to expiry.',
          decisionsEnabled: 'Position competitive displacements months ahead of formal RFP publication.'
        },
        {
          title: 'AI Prospect Discovery',
          description: 'Leverage machine learning algorithms to uncover lookalike enterprises matching the DNA of your highest-LTV accounts.',
          businessEvidence: 'Closed-won cohort characteristics, customer lifetime value distributions, and churn-resistant profiles.',
          analysisProcess: 'Vector similarity clustering across multi-dimensional technographic and firmographic datasets.',
          decisionsEnabled: 'Direct GTM pipeline generation exclusively toward accounts with >85% predicted close rates.'
        }
      ],
      useCase: {
        situation: 'A cloud infrastructure provider was burning SDR capacity cold-calling 5,000 generic enterprise accounts.',
        action: 'Deployed Revenue Signal Intelligence to filter targets by cloud migration hiring spikes and compliance triggers.',
        outcome: 'Outbound meeting booking rates increased from 2.1% to 8.4%, generating $14.2M in qualified pipeline in one quarter.'
      },
      kpis: [
        { name: 'Signal-to-Opportunity Rate', definition: 'Percentage of high-intent signals converted into qualified sales meetings', target: '18.5%' },
        { name: 'Intent Surge Accuracy', definition: 'Correlation between intent spikes and verified commercial evaluations', target: '82%' },
        { name: 'Trigger Response Latency', definition: 'Hours elapsed between signal detection and first personalized outreach', target: '< 4 Hours' }
      ],
      visualModel: {
        type: 'funnel',
        caption: 'Revenue Signal Intelligence: Multi-Source Signal Ingestion to Qualified Opportunity Flow',
        metrics: [
          { label: 'Ingested Intent Signals', value: '4,280/mo', delta: '+24%' },
          { label: 'Validated Buying Triggers', value: '312/mo', delta: '+18%' },
          { label: 'Qualified Opportunities', value: '64/mo', delta: '+34%' }
        ]
      }
    },
    {
      id: 'sec-mkt-intel',
      slug: 'market-intelligence',
      title: 'Market Intelligence',
      businessQuestion: 'How are competitive positioning, market share, and pricing structures shifting across your sector?',
      explanation: 'Market intelligence provides empirical benchmarks on competitor win rates, pricing concessions, feature parity, and emerging market dynamics.',
      topics: [
        {
          title: 'Share-of-Market Analysis',
          description: 'Measure relative win/loss ratios against specific primary and secondary competitors within defined micro-segments.',
          businessEvidence: 'CRM competitor tagging, win/loss interview debriefs, and independent industry analyst surveys.',
          analysisProcess: 'Head-to-head competitive win rate indexing segmented by deal size, buyer persona, and industry.',
          decisionsEnabled: 'Identify competitor vulnerabilities where win rates exceed 60% and double-down on competitive displacement campaigns.'
        },
        {
          title: 'Competitor Revenue Tracking',
          description: 'Analyze competitor commercial momentum, product release cadence, pricing changes, and hiring expansion.',
          businessEvidence: 'Public financial disclosures, job board volume by role, patent publications, and customer sentiment.',
          analysisProcess: 'Commercial velocity benchmarking tracking rival GTM investments and strategic expansion moves.',
          decisionsEnabled: 'Preempt rival market entry into key verticals before they establish channel dominance.'
        },
        {
          title: 'Pricing Intelligence',
          description: 'Benchmark realized market pricing, discount depths, packaging tiers, and commercial concession patterns.',
          businessEvidence: 'De-identified customer procurement benchmark databases, RFP bid logs, and deal negotiation notes.',
          analysisProcess: 'Pricing dispersion analysis comparing list price versus final realized price across deal sizes.',
          decisionsEnabled: 'Defend contract value against competitor discount pressure without unnecessary price concessions.'
        },
        {
          title: 'Category Evolution',
          description: 'Track how buyer perception of the product category is evolving, from point solutions to unified platforms.',
          businessEvidence: 'Gartner/Forrester report category taxonomy shifts, buyer RFP requirement lists, and peer reviews.',
          analysisProcess: 'Semantic topic analysis of enterprise RFPs to map changing buyer must-have criteria.',
          decisionsEnabled: 'Re-align product messaging with the highest-priority enterprise evaluation criteria.'
        },
        {
          title: 'Emerging Market Signals',
          description: 'Detect early-stage macroeconomic shifts, regional demand surges, and regulatory compliance mandates.',
          businessEvidence: 'Trade policy announcements, regional GDP growth indicators, and cross-border commercial trade flows.',
          analysisProcess: 'Correlation modeling between macro compliance mandates and commercial software adoption curves.',
          decisionsEnabled: 'Allocate expansion capital into high-growth regional corridors ahead of market saturation.'
        }
      ],
      useCase: {
        situation: 'A fintech compliance software provider noticed a sudden 15% drop in win rates against a newly funded challenger.',
        action: 'Executed Pricing Intelligence and Win/Loss debriefs, discovering the competitor was bundling free implementation services.',
        outcome: 'Repackaged onboarding into value-based guarantees rather than dropping software price, recovering win rates to 52%.'
      },
      kpis: [
        { name: 'Competitive Win Rate', definition: 'Percentage of contested competitive deals won by your commercial team', target: '55.0%' },
        { name: 'Discount Defense Ratio', definition: 'Average realized discount versus competitor discount depth', target: '< 12%' },
        { name: 'Category Share of Voice', definition: 'Enterprise buyer consideration rate across contested RFPs', target: '42%' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Market Intelligence Matrix: Competitive Positioning vs. Price Realization',
        metrics: [
          { label: 'Contested Win Rate', value: '54.2%', delta: '+6.1%' },
          { label: 'Realized Margin Premium', value: '18.4%', delta: '+2.8%' },
          { label: 'Displacement Success', value: '41 Deals', delta: '+$3.2M' }
        ]
      }
    },
    {
      id: 'sec-cust-intel',
      slug: 'customer-intelligence',
      title: 'Customer Intelligence',
      businessQuestion: 'Which accounts are primed for multi-product expansion and which are quietly decaying toward churn?',
      explanation: 'Customer intelligence decodes telemetry, usage trends, executive relationship depth, and support health into predictive account scores.',
      topics: [
        {
          title: 'Growth Potential Scoring',
          description: 'Quantify the maximum ARR capacity of each existing customer account relative to their current spend.',
          businessEvidence: 'Total employee headcount, subsidiary count, tech stack volume, and organizational org charts.',
          analysisProcess: 'Account white-space modeling comparing existing licenses against total addressable seats in the enterprise.',
          decisionsEnabled: 'Assign dedicated strategic account executives to enterprise accounts with >$500K in unharvested expansion headroom.'
        },
        {
          title: 'Expansion Opportunity Mapping',
          description: 'Identify cross-sell and upsell readiness based on product utilization saturation and business unit adoption.',
          businessEvidence: 'Daily active user depth, license utilization percentages, and feature adoption logs.',
          analysisProcess: 'Usage inflection scoring detecting when an account reaches 85%+ license capacity.',
          decisionsEnabled: 'Trigger automated expansion proposals before the account experiences operational bottlenecks.'
        },
        {
          title: 'Renewal Intelligence',
          description: 'Establish objective renewal health scorecards 180, 120, and 60 days prior to contract termination.',
          businessEvidence: 'Executive sponsor engagement logs, contract terms, open support ticket severity, and NPS feedback.',
          analysisProcess: 'Multi-factor renewal risk modeling evaluating relationship depth, product ROI realization, and pricing satisfaction.',
          decisionsEnabled: 'Intervene on at-risk renewal contracts 6 months before formal negotiation commences.'
        },
        {
          title: 'Churn Probability Modeling',
          description: 'Predict early-stage account churn risk using behavioral telemetry and communication cadence decay.',
          businessEvidence: 'Login frequency drops, executive contact turnover, declining query volumes, and delayed invoice payments.',
          analysisProcess: 'Survival regression and anomaly detection identifying accounts exhibiting pre-churn behavioral markers.',
          decisionsEnabled: 'Deploy executive rescue playbooks to stabilize accounts before formal termination notices are issued.'
        },
        {
          title: 'Customer Health Analytics',
          description: 'Synthesize product telemetry, support ticket resolution velocity, and commercial relationship strength into a unified score.',
          businessEvidence: 'Zendesk ticket escalation logs, SLA compliance records, CS meeting notes, and quarterly business review scores.',
          analysisProcess: 'Weighted algorithmic scoring combining operational, behavioral, and commercial relationship dimensions.',
          decisionsEnabled: 'Direct CSM and executive sponsor time toward accounts where intervention reverses dissatisfaction.'
        }
      ],
      useCase: {
        situation: 'A B2B enterprise SaaS company lost two $400K ARR accounts without prior warning from customer success reps.',
        action: 'Deployed Customer Intelligence churn modeling, which revealed that executive sponsor logins had dropped 70% 90 days before churn.',
        outcome: 'Institutionalized executive sponsor tracking, preventing $2.8M in prospective renewals from slipping over two quarters.'
      },
      kpis: [
        { name: 'Churn Prediction Accuracy', definition: 'Percentage of at-risk accounts correctly identified 90+ days in advance', target: '88%' },
        { name: 'Expansion Opportunity Velocity', definition: 'Average days to close expansion deals on high-health accounts', target: '38 Days' },
        { name: 'Customer Health Index', definition: 'Median portfolio composite health score across enterprise accounts', target: '84/100' }
      ],
      visualModel: {
        type: 'scorecard',
        caption: 'Customer Health & Expansion Opportunity Quadrant',
        metrics: [
          { label: 'High Health / High Expansion', value: '38% Accounts', delta: '$18.4M Value' },
          { label: 'At-Risk Renewal Equity', value: '$2.1M', delta: '-42% YoY' },
          { label: 'Expansion Close Rate', value: '48.6%', delta: '+12.4%' }
        ]
      }
    },
    {
      id: 'sec-fcst-intel',
      slug: 'revenue-forecast-intelligence',
      title: 'Revenue Forecast Intelligence',
      businessQuestion: 'What will your actual closed-won revenue be this quarter with mathematical certainty and zero hope-based bias?',
      explanation: 'Forecast intelligence replaces subjective sales rep pipeline commitments with empirical, machine-learning pipeline predictability models.',
      topics: [
        {
          title: 'Pipeline Predictability',
          description: 'Score every active deal in the pipeline based on historical stage velocity, buyer committee engagement, and deal momentum.',
          businessEvidence: 'Opportunity historical stage durations, email exchange volume, executive attendance at demos, and security review completion.',
          analysisProcess: 'Machine learning scoring comparing live deal attributes against 10,000+ historical won and lost deals.',
          decisionsEnabled: 'Eliminate subjective "commit" status and forecast solely on empirical deal probability.'
        },
        {
          title: 'Opportunity Quality Analytics',
          description: 'Audit whether pipeline opportunities meet rigorous economic ICP qualification criteria or are merely vanity entries.',
          businessEvidence: 'Budget verification logs, economic buyer identification, and defined compelling event documentation.',
          analysisProcess: 'MEDDPICC compliance scoring and objective evidence validation across all open pipeline opportunities.',
          decisionsEnabled: 'Purge low-probability zombie deals from the active pipeline to focus rep bandwidth.'
        },
        {
          title: 'Forecast Precision Models',
          description: 'Generate conservative, base, and optimistic revenue forecasts with defined confidence intervals.',
          businessEvidence: 'Quarter-to-date closed ARR, weighted pipeline values, historical slip rates, and seasonal seasonality coefficients.',
          analysisProcess: 'Stochastic Monte Carlo simulation executing 5,000 iterations to determine P(50), P(80), and P(95) revenue outcomes.',
          decisionsEnabled: 'Commit revenue projections to the Board of Directors with <5% variance.'
        },
        {
          title: 'Revenue Risk Assessment',
          description: 'Identify single points of failure in the pipeline: mega-deal concentration, single-threaded champions, and procurement delays.',
          businessEvidence: 'Deal value distribution, executive sponsor count per account, and legal contract negotiation duration.',
          analysisProcess: 'Portfolio risk weighting assessing the revenue impact if the top 3 deals in the quarter slip.',
          decisionsEnabled: 'Develop multi-threaded stakeholder coverage and parallel closing tracks for high-stakes enterprise contracts.'
        },
        {
          title: 'Growth Scenario Planning',
          description: 'Model the impact of hiring freezes, budget cuts, conversion fluctuations, or pricing modifications on future quarters.',
          businessEvidence: 'Sales rep ramp curves, quota capacity models, lead generation pipeline projections, and CAC assumptions.',
          analysisProcess: 'Dynamic financial sensitivity modeling testing commercial resilience against macroeconomic shocks.',
          decisionsEnabled: 'Make confident capital allocation, hiring, and expansion decisions months before performance shows in lagging P&L statements.'
        }
      ],
      useCase: {
        situation: 'A public enterprise company had missed Wall Street consensus revenue estimates in two out of four quarters.',
        action: 'Replaced manual rep rollups with Stochastic Forecast Precision Modeling and objective MEDDPICC validation.',
        outcome: 'Achieved 96.8% forecast precision over the subsequent four quarters, eliminating end-of-quarter revenue surprises.'
      },
      kpis: [
        { name: 'Forecast Precision Variance', definition: 'Absolute percentage variance between Day 1 forecast and actual closed ARR', target: '< 4.5%' },
        { name: 'Forecast Bias Ratio', definition: 'Measure of over-optimism or under-optimism in pipeline projections', target: '1.02' },
        { name: 'Pipeline Coverage Quality', definition: 'Ratio of objectively verified qualified pipeline to remaining quota target', target: '3.2x' }
      ],
      visualModel: {
        type: 'orchestration',
        caption: 'Stochastic Revenue Forecast: Monte Carlo Simulation vs. Actual Deal Realization',
        metrics: [
          { label: 'Forecast P(80) Commitment', value: '$12.4M', delta: 'High Confidence' },
          { label: 'Actual Realized Closed ARR', value: '$12.65M', delta: '98.0% Accuracy' },
          { label: 'Pipeline Slip Variance', value: '3.2%', delta: '-8.4%' }
        ]
      }
    }
  ],
  methodologyWorkflow: [
    {
      stepNumber: '01',
      title: 'Signal Ingestion & Unification',
      input: 'CRM data, email metadata, calendar logs, website IP traffic, intent telemetry, and financial filings.',
      activity: 'Ingest and harmonize real-time commercial signals into a centralized revenue graph.',
      output: 'Unified, entity-resolved account and pipeline data model.'
    },
    {
      stepNumber: '02',
      title: 'Intent & Opportunity Scoring',
      input: 'Harmonized signals, historical deal disposition histories, and ICP profile definitions.',
      activity: 'Execute Bayesian intent algorithms to score accounts by commercial readiness and churn risk.',
      output: 'Ranked list of high-intent enterprise accounts and at-risk renewal cohorts.'
    },
    {
      stepNumber: '03',
      title: 'Competitive & Market Benchmarking',
      input: 'Win/loss interview records, pricing concession data, and competitor displacement trends.',
      activity: 'Map competitor positioning and calibrate price realization benchmarks across target micro-segments.',
      output: 'Dynamic competitive battlecards and price defense parameters.'
    },
    {
      stepNumber: '04',
      title: 'Stochastic Forecast Calibration',
      input: 'Active pipeline opportunities, stage conversion histories, and deal engagement velocity.',
      activity: 'Run Monte Carlo simulation models to establish objective revenue ranges and risk exposure.',
      output: 'Board-level forecast scenario models with verified confidence intervals.'
    },
    {
      stepNumber: '05',
      title: 'Actionable Commercial Orchestration',
      input: 'Prioritized signals, forecast risk alerts, and expansion opportunity maps.',
      activity: 'Route prioritized commercial tasks directly to sales reps, CSMs, and executive sponsors.',
      output: 'Closed-loop execution telemetry tracking intervention effectiveness and conversion lift.'
    }
  ],
  primaryKpis: [
    {
      name: 'Forecast Accuracy Precision',
      definition: 'Absolute percentage accuracy of executive revenue projections relative to actual closed ARR.',
      formula: '[ 1 − (|Actual Closed ARR − Forecasted ARR| ÷ Actual Closed ARR) ] × 100',
      unit: '%',
      reportingPeriod: 'Quarterly',
      baseline: '74.2%',
      target: '95.0%',
      illustrativeValue: '96.4%',
      interpretation: 'Achieving >95% accuracy proves that revenue projection is driven by deterministic pipeline mechanics rather than subjective rep sentiment.',
      category: 'Executive'
    },
    {
      name: 'Forecast Bias Ratio',
      definition: 'Measures directional skew toward chronic over-optimism (>1.0) or under-optimism (<1.0).',
      formula: 'Sum of Forecast Commitments across Quarters ÷ Sum of Actual Closed ARR across Quarters',
      unit: 'Ratio',
      reportingPeriod: 'Annualized',
      baseline: '1.28 (Over-optimistic)',
      target: '1.00 - 1.05',
      illustrativeValue: '1.02',
      interpretation: 'Eliminating positive forecast bias protects corporate budget planning and executive credibility with board stakeholders.',
      category: 'Executive'
    },
    {
      name: 'Signal-to-Opportunity Conversion Rate',
      definition: 'Percentage of high-intent buying signals that convert into verified, qualified pipeline opportunities.',
      formula: '(Qualified Opportunities Created from Signals ÷ Total Validated Buying Signals Ingested) × 100',
      unit: '%',
      reportingPeriod: 'Monthly',
      baseline: '4.8%',
      target: '18.0%',
      illustrativeValue: '16.8%',
      interpretation: 'A 3.5x improvement in signal conversion validates that sales outreach is engaging prospects precisely during active procurement windows.',
      category: 'Commercial'
    },
    {
      name: 'Objective Pipeline Coverage',
      definition: 'Ratio of verified, objectively scored pipeline value to remaining quarterly sales quota.',
      formula: 'Sum of (Opportunity Value × Objective Predictive Probability Score) ÷ Remaining Quota Target',
      unit: 'Ratio (x)',
      reportingPeriod: 'Monthly / Quarterly',
      baseline: '1.4x (Unadjusted 4.2x)',
      target: '2.8x (Objective)',
      illustrativeValue: '3.1x',
      interpretation: 'Tracking objective probability-weighted pipeline prevents false confidence caused by bloated, unverified CRM pipeline numbers.',
      category: 'Commercial'
    },
    {
      name: 'Predictive Churn Identification Rate',
      definition: 'Percentage of churned or downgraded revenue correctly flagged by intelligence models 90+ days prior.',
      formula: '(Identified At-Risk ARR Successfully Flagged ≥90 Days ÷ Total Annualized Gross Churned ARR) × 100',
      unit: '%',
      reportingPeriod: 'Quarterly / Annual',
      baseline: '32.0%',
      target: '85.0%',
      illustrativeValue: '86.4%',
      interpretation: 'High predictive churn identification provides Customer Success teams sufficient runway to deploy rescue playbooks and preserve recurring ARR.',
      category: 'Operational'
    }
  ],
  scenarios: [
    {
      title: 'Global Cybersecurity Vendor Forecast & Churn Stabilization',
      industry: 'Enterprise Security Software',
      baselineSituation: '$85M ARR vendor experiencing chronic end-of-quarter forecast misses of $3-5M and unexpected gross churn in enterprise renewals.',
      observedProblem: 'Sales management relied on subjective deal commits, while CSMs were unaware that key enterprise clients had stopped updating their software agents.',
      analysis: 'Deployed Revenue Intelligence combining telemetry usage tracking with stochastic forecasting, revealing that 42% of "commit" deals lacked economic buyer access.',
      decisionEvaluated: 'Mandated MEDDPICC evidence verification for forecast inclusion and automated alerts when product usage declined >25% in a 30-day window.',
      expectedImprovement: 'Improve forecast accuracy to >95% and reduce gross revenue churn by 35%.',
      validatingMetrics: ['Forecast Precision (from 78% to 96.5%)', 'Gross Revenue Retention (from 88% to 94.2%)', 'At-Risk ARR Saved ($4.1M)'],
      assumptions: 'Assumed customer accounts with declining telemetry would respond positively to proactive executive interventions in 60% of cases.'
    }
  ],
  dataConsiderations: [
    {
      title: 'Activity Telemetry & CRM Signal Freshness',
      description: 'Predictive forecast models require real-time synchronization of calendar, email, and deal progression activities with zero manual latency.',
      impactLevel: 'Critical'
    },
    {
      title: 'Entity Resolution Across Corporate Subsidiaries',
      description: 'Accurate account intelligence depends on resolving parent-child corporate structures across multi-national enterprise entities.',
      impactLevel: 'High'
    },
    {
      title: 'Data Privacy & Compliance Governance',
      description: 'Signal ingestion must respect GDPR, CCPA, and enterprise confidentiality requirements regarding executive communications.',
      impactLevel: 'High'
    }
  ],
  decisionSupport: [
    {
      priority: 'Immediate (Weeks 1-3)',
      focusArea: 'Objective Pipeline Qualification',
      keyMetrics: 'MEDDPICC Verification Score, Deal Velocity Decay',
      tradeOffs: 'Purging unverified deals reduces apparent pipeline value in exchange for mathematical forecast reliability.',
      recommendedAction: 'Institute objective evidence criteria for pipeline stages and remove unengaged zombie opportunities.'
    },
    {
      priority: 'Secondary (Weeks 4-8)',
      focusArea: 'Telemetry-Driven Churn Alerts',
      keyMetrics: 'Usage Telemetry Inflection, Executive Engagement Cadence',
      tradeOffs: 'Requiring CSMs to manage automated churn alerts adds operational discipline but stops silent account degradation.',
      recommendedAction: 'Wire telemetry usage decline thresholds to automated executive review playbooks.'
    },
    {
      priority: 'Strategic (Weeks 9-12)',
      focusArea: 'Stochastic Forecasting Integration',
      keyMetrics: 'Forecast Precision Variance, Confidence Interval P(80)',
      tradeOffs: 'Replacing subjective rep rollups with algorithmic models requires executive cultural buy-in across sales leadership.',
      recommendedAction: 'Present board revenue commitments solely based on stochastic P(80) simulation models.'
    }
  ],
  visualTheme: 'intelligence'
};

