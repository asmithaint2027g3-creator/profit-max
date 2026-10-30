import { GrowthCapabilityPageData } from '../types';

export const page05LeakageRecoveryData: GrowthCapabilityPageData = {
  pageNumber: '05',
  title: 'Revenue Leakage & Recovery',
  slug: 'revenue-leakage-recovery',
  heroHeadline: 'Identify Where Revenue Slips Away—and What Can Be Recovered',
  heroSupporting: 'Conduct forensic diagnostics across pipeline decay, unmonitored commercial discounting, contract entitlement slippage, and silent customer churn to systematically claw back lost enterprise cash flow.',
  businessProblemSummary: 'Enterprise companies quietly lose 12% to 24% of their addressable revenue every year through operational gaps: slow lead response times, rogue rep discounting, unbilled contract scope creep, and neglected renewal cycles.',
  targetDecisionMakers: ['Chief Financial Officers', 'Chief Revenue Officers', 'VPs of RevOps', 'General Counsel / Commercial Operations'],
  contextWhoExperiences: 'Mid-market and enterprise organizations with distributed sales teams, complex contract pricing rules, and multi-stage go-to-market workflows.',
  contextSituation: 'Revenue targets are missed, yet leadership cannot pinpoint whether the loss occurred at lead qualification, deal negotiation, billing execution, or customer renewal.',
  contextWhyDifficult: 'Revenue leakage does not appear on traditional P&L statements as an expense line; it is an invisible shortfall between contracted value and realized cash.',
  contextContributingFactors: [
    'Reps granting non-standard contract terms and discounts without RevOps approval',
    'Disjointed handoffs between sales closing and billing/finance implementation',
    'Uncollected professional service hours and unmetered overage consumption',
    'Delayed renewal outreach occurring less than 30 days before contract expiration'
  ],
  symptomsAndConsequences: [
    {
      category: 'Discount Slippage',
      symptom: 'Average realized discount across closed deals creeping from 14% to 29% over four quarters.',
      consequence: 'Gross margin compressed by 680 basis points; millions in recurring cash flow sacrificed.'
    },
    {
      category: 'Pipeline Stall',
      symptom: '40% of qualified pipeline opportunities stuck in "Negotiation" stage for over 90 days.',
      consequence: 'Sales forecast collapses, deal momentum evaporates, and competitors step in with aggressive incentives.'
    },
    {
      category: 'Billing Entitlement',
      symptom: 'Clients utilizing 140% of contracted API/compute capacity with zero overage invoices generated.',
      consequence: 'Infrastructure costs escalate while customer contract revenue remains flat.'
    },
    {
      category: 'Silent Churn',
      symptom: 'Accounts quietly terminating contracts due to unaddressed support tickets or champion departures.',
      consequence: 'Net Revenue Retention erodes, forcing the company to overspend on high-CAC replacement logos.'
    }
  ],
  subSubmenus: [
    {
      id: 'sec-funnel-leak',
      slug: 'funnel-leakage-analysis',
      title: 'Funnel Leakage Analysis',
      businessQuestion: 'Where exactly in your sales pipeline are qualified opportunities dropping off and why?',
      explanation: 'Funnel leakage analysis pinpoints the specific micro-stages where deal momentum stalls, qualification fails, and buyer engagement dissipates.',
      topics: [
        {
          title: 'Lead Leakage',
          description: 'Measure inbound lead drop-off caused by slow SDR response latency, poor routing, and flawed qualification.',
          businessEvidence: 'Web form submission timestamps, SDR first-touch response logs, and lead routing rule logs.',
          analysisProcess: 'Lead decay curve modeling measuring conversion drop-off per hour of SDR outreach delay.',
          decisionsEnabled: 'Enforce a mandatory 15-minute SLA for inbound enterprise demo requests.'
        },
        {
          title: 'Opportunity Leakage',
          description: 'Isolate why qualified discovery meetings fail to transition into active technical evaluations or proposals.',
          businessEvidence: 'Discovery meeting recordings, CRM stage transition notes, and qualification scorecards.',
          analysisProcess: 'Stage 1-to-Stage 2 transition friction auditing identifying missing value propositions and objection handling gaps.',
          decisionsEnabled: 'Retrain sales reps on discovery methodologies and economic buyer qualification frameworks.'
        },
        {
          title: 'Conversion Friction',
          description: 'Identify bureaucratic hurdles, complex security questionnaires, and slow pricing approvals that derail buyer momentum.',
          businessEvidence: 'InfoSec review turnaround times, legal redline duration records, and pricing approval queues.',
          analysisProcess: 'Bottleneck queue duration analysis identifying internal process delays that prolong deal cycles.',
          decisionsEnabled: 'Pre-package SOC2 compliance documentation and empower sales directors with pre-approved discount bands.'
        },
        {
          title: 'Velocity Bottlenecks',
          description: 'Diagnose stages where deals spend 2x or 3x the average historical cycle time before quietly dying.',
          businessEvidence: 'Historical stage duration averages, deal aging logs, and stalled opportunity alerts.',
          analysisProcess: 'Stage velocity anomaly detection flagging deals exceeding stage threshold duration limits.',
          decisionsEnabled: 'Automatically reassign or mandate executive sponsor intervention on stalled high-value contracts.'
        },
        {
          title: 'Pipeline Decay Analysis',
          description: 'Quantify the compounding loss of win probability as open opportunities linger in the pipeline past 60 and 90 days.',
          businessEvidence: 'Longitudinal opportunity disposition logs and win rate by age cohort.',
          analysisProcess: 'Decay hazard modeling demonstrating that deals older than 75 days have an 82% lower win rate.',
          decisionsEnabled: 'Purge stale pipeline opportunities and enforce strict time-based deal qualification rules.'
        }
      ],
      useCase: {
        situation: 'An enterprise fintech platform suffered from a 22% win rate on marketing-qualified leads.',
        action: 'Funnel Leakage Analysis revealed that SDR first response averaged 28 hours, and security reviews took 34 days.',
        outcome: 'Reduced response latency to 18 minutes and streamlined InfoSec workflows, increasing win rates to 36%.'
      },
      kpis: [
        { name: 'Funnel Leakage Rate', definition: 'Percentage of qualified pipeline value lost to stage stalls or disengagement', target: '< 22%' },
        { name: 'SDR Response Latency', definition: 'Median minutes elapsed from inbound lead capture to first personalized touch', target: '< 15 Min' },
        { name: 'Stage-to-Stage Conversion Lift', definition: 'Improvement in transition rates between discovery and formal proposal', target: '+14%' }
      ],
      visualModel: {
        type: 'funnel',
        caption: 'Forensic Funnel Leakage Waterfall: Stage Drop-off & Recoverable Pipeline Pockets',
        metrics: [
          { label: 'Initial Pipeline Value', value: '$34.2M', delta: 'Active' },
          { label: 'Identified Funnel Leakage', value: '$8.4M', delta: 'Recoverable' },
          { label: 'Optimized Close Rate', value: '34.8%', delta: '+8.4%' }
        ]
      }
    },
    {
      id: 'sec-comm-leak',
      slug: 'commercial-leakage',
      title: 'Commercial Leakage',
      businessQuestion: 'How much contracted margin is being surrendered through rogue discounting and unbilled services?',
      explanation: 'Commercial leakage audits contract execution, pricing exceptions, billing entitlement discrepancies, and service creep.',
      topics: [
        {
          title: 'Discount Leakage',
          description: 'Audit the variance between list pricing and realized contract pricing across reps, quarters, and deal sizes.',
          businessEvidence: 'Deal pricing calculator logs, discount exception requests, and contract ARR addendums.',
          analysisProcess: 'Discount dispersion analysis identifying reps consistently granting 30%+ discounts to hit quarterly quotas.',
          decisionsEnabled: 'Tie sales commissions directly to gross margin realization rather than gross contract value.'
        },
        {
          title: 'Pricing Leakage',
          description: 'Identify pricing models that fail to capture fair economic value for software utilization and business value delivered.',
          businessEvidence: 'Customer software value metrics, competitor price points, and client cost-savings reports.',
          analysisProcess: 'Value-pricing gap analysis comparing customer financial return against vendor software license cost.',
          decisionsEnabled: 'Transition legacy accounts to modernized value-based tiers upon contract renewal.'
        },
        {
          title: 'Contract Leakage',
          description: 'Detect non-standard contract clauses, uncapped liability commitments, and unbilled custom development requests.',
          businessEvidence: 'Legal contract redlines, custom MSA commitments, and development backlog ticketing systems.',
          analysisProcess: 'Natural language contract clause audit identifying hidden cost liabilities and unbilled commitments.',
          decisionsEnabled: 'Enforce standard contract templates and billable change orders for custom engineering.'
        },
        {
          title: 'Renewal Leakage',
          description: 'Quantify revenue lost when customer renewal contracts are executed without standard CPI inflation escalators.',
          businessEvidence: 'Master renewal agreements, consumer price index (CPI) schedules, and invoice price histories.',
          analysisProcess: 'Inflationary gap audit modeling the ARR lost when 5-7% contractual price escalators are waived.',
          decisionsEnabled: 'Institutionalize mandatory 5% annual price escalation clauses across all enterprise renewals.'
        },
        {
          title: 'Service Profitability Leakage',
          description: 'Audit professional service and customer implementation hours that exceed contracted statement of work (SOW) caps.',
          businessEvidence: 'Engineering timesheets, implementation milestone delivery logs, and SOW contract terms.',
          analysisProcess: 'Labor cost attribution comparing contracted implementation fees against actual technical hours delivered.',
          decisionsEnabled: 'Require customer sign-off and incremental billing when implementation exceeds SOW hour limits.'
        }
      ],
      useCase: {
        situation: 'A medical software provider was growing ARR by 20% but EBITDA margins were declining.',
        action: 'Audited 400 contracts and discovered that 68% of renewals waived the 5% CPI escalator, and reps granted an average 24% discount.',
        outcome: 'Enforced strict discount approval bands and automated CPI escalation, recovering $3.8M in annualized EBITDA.'
      },
      kpis: [
        { name: 'Realized Discount Rate', definition: 'Average percentage discount granted off list price across all executed contracts', target: '< 11.5%' },
        { name: 'CPI Escalation Capture', definition: 'Percentage of renewal contracts successfully capturing annual price increases', target: '92%' },
        { name: 'Service Margin Realization', definition: 'Gross margin realized on professional services and onboarding delivery', target: '28%' }
      ],
      visualModel: {
        type: 'waterfall',
        caption: 'Commercial Margin Leakage: From List Price to Realized Enterprise Cash',
        metrics: [
          { label: 'Gross List ARR', value: '$48.0M', delta: 'Theoretical' },
          { label: 'Uncontrolled Discounting', value: '-$6.2M', delta: '12.9% Loss' },
          { label: 'Uncollected Overages', value: '-$1.4M', delta: '2.9% Loss' },
          { label: 'Net Realized ARR', value: '$40.4M', delta: 'Actual' }
        ]
      }
    },
    {
      id: 'sec-cust-leak',
      slug: 'customer-leakage',
      title: 'Customer Leakage',
      businessQuestion: 'Which accounts are quietly disengaging, downgrading licenses, or eroding contractual loyalty?',
      explanation: 'Customer leakage detects behavioral decay, champion turnover, and dissatisfaction markers before accounts churn.',
      topics: [
        {
          title: 'Churn Diagnostics',
          description: 'Conduct root-cause autopsy on lost customer accounts to isolate product, pricing, service, or competitive drivers.',
          businessEvidence: 'Exit interview transcripts, CS ticket history prior to cancellation, and billing termination notices.',
          analysisProcess: 'Categorical factor attribution grouping churn into preventable (service/product) vs. unpreventable (bankruptcy).',
          decisionsEnabled: 'Redesign onboarding workflows for customer cohorts showing the highest historical churn propensity.'
        },
        {
          title: 'Dormant Account Recovery',
          description: 'Identify contracted customer accounts with declining active user logins, zero support queries, and zero usage.',
          businessEvidence: 'Product login telemetry, API query frequencies, and monthly active user (MAU) ratios.',
          analysisProcess: 'Dormancy velocity scoring flagging accounts with a >40% decline in active weekly users over 60 days.',
          decisionsEnabled: 'Deploy proactive CSM re-onboarding campaigns before the account reaches renewal.'
        },
        {
          title: 'Lost Customer Reactivation',
          description: 'Systematically re-engage former customer accounts that churned due to missing features that have since been released.',
          businessEvidence: 'Historical churn reason logs, product release changelogs, and former champion contact updates.',
          analysisProcess: 'Feature-match reactivation indexing identifying churned accounts whose primary exit reason is now solved.',
          decisionsEnabled: 'Launch targeted win-back campaigns demonstrating that legacy feature gaps have been fully resolved.'
        },
        {
          title: 'Expansion Miss Analysis',
          description: 'Quantify the ARR lost when accounts with high growth potential renew at flat or downgraded contract values.',
          businessEvidence: 'Customer corporate headcount growth records, funding announcements, and flatline renewal contracts.',
          analysisProcess: 'Account expansion gap analysis comparing customer revenue growth against software spend growth.',
          decisionsEnabled: 'Restructure account management compensation to reward multi-tier expansion.'
        },
        {
          title: 'Loyalty Erosion Detection',
          description: 'Detect subtle relationship decay: champion executive departures, unanswered emails, and cancelled QBR meetings.',
          businessEvidence: 'LinkedIn executive departure alerts, email engagement analytics, and QBR attendance records.',
          analysisProcess: 'Relationship decay monitoring alerting account teams the moment an executive champion changes roles.',
          decisionsEnabled: 'Mobilize executive leadership to establish relationships with incoming decision-makers within 14 days.'
        }
      ],
      useCase: {
        situation: 'An industrial manufacturing software platform suffered 14% annual churn, primarily from mid-market clients.',
        action: 'Deployed Churn Diagnostics and discovered that 70% of churned clients stopped logging in 120 days prior to contract end.',
        outcome: 'Institutionalized early dormancy alerts and re-onboarding interventions, cutting annual churn to 7.4%.'
      },
      kpis: [
        { name: 'Gross Revenue Churn Rate', definition: 'Percentage of recurring revenue lost to cancellations and non-renewals', target: '< 6.0%' },
        { name: 'Dormant Account Recovery Rate', definition: 'Percentage of identified dormant accounts successfully re-engaged into active status', target: '44%' },
        { name: 'Champion Transition SLA', definition: 'Days to establish contact with new executive leadership following champion departure', target: '< 14 Days' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Customer Churn & Dormancy Matrix: Relationship Health vs. Contract ARR at Risk',
        metrics: [
          { label: 'Gross Churn Rate', value: '6.4%', delta: '-4.8% YoY' },
          { label: 'Reactivated Accounts', value: '28 Accounts', delta: '+$1.8M ARR' },
          { label: 'Protected Renewal ARR', value: '$6.4M', delta: 'High Priority' }
        ]
      }
    },
    {
      id: 'sec-rec-prog',
      slug: 'revenue-recovery-programs',
      title: 'Revenue Recovery Programs',
      businessQuestion: 'What systematic interventions and playbooks will claw back stalled deals and lost customer accounts?',
      explanation: 'Revenue recovery programs engineer structured commercial workflows to resurrect stalled pipeline, win back churned clients, and re-monetize legacy contracts.',
      topics: [
        {
          title: 'Win-Back Systems',
          description: 'Deploy automated and high-touch commercial programs to re-engage accounts that selected a competitor 6-12 months ago.',
          businessEvidence: 'Closed-lost CRM records, competitor contract cycle benchmarks, and customer satisfaction surveys.',
          analysisProcess: 'Buyer remorse timeline modeling identifying the moment competitor implementation fatigue peaks.',
          decisionsEnabled: 'Deliver targeted migration incentives to dissatisfied clients of primary competitors.'
        },
        {
          title: 'Recovery Campaigns',
          description: 'Execute targeted commercial blitzes on stalled pipeline deals offering time-limited economic incentives to close.',
          businessEvidence: 'Stalled opportunity database, executive sponsor contacts, and procurement contact logs.',
          analysisProcess: 'Deal resurrection elasticity scoring identifying stalled contracts responsive to tailored packaging.',
          decisionsEnabled: 'Close 15-20% of stalled pipeline opportunities at the end of the fiscal quarter.'
        },
        {
          title: 'Lost Deal Intelligence',
          description: 'Conduct rigorous post-mortem reviews on enterprise deal losses to extract actionable product and commercial lessons.',
          businessEvidence: 'Third-party win/loss interview recordings, buyer feedback surveys, and competitor RFP bids.',
          analysisProcess: 'Root-cause thematic clustering isolating competitive pricing, missing functionality, or weak sales execution.',
          decisionsEnabled: 'Update sales battlecards and product roadmaps to permanently eliminate recurring deal objections.'
        },
        {
          title: 'Account Resurrection Models',
          description: 'Re-open communications with dormant corporate divisions and neglected subsidiaries of active enterprise accounts.',
          businessEvidence: 'Parent company organizational charts, inactive license rosters, and cross-divisional corporate news.',
          analysisProcess: 'Divisional whitespace mapping matching proven use cases in Division A to uncontracted Division B.',
          decisionsEnabled: 'Execute internal referral sales motions within existing enterprise master service agreements.'
        },
        {
          title: 'Retention Playbooks',
          description: 'Standardize emergency retention workflows for accounts issuing formal termination notices or requesting pricing concessions.',
          businessEvidence: 'Termination notice logs, customer downsell requests, and client executive escalation records.',
          analysisProcess: 'Concession boundary modeling balancing downsell discounts against complete account loss.',
          decisionsEnabled: 'Preserve 50%+ of terminating accounts through restructured tiers and performance-based renewals.'
        }
      ],
      useCase: {
        situation: 'An enterprise cloud communications provider held $28M in "closed-lost" pipeline over the previous 18 months.',
        action: 'Deployed a Win-Back System targeting accounts whose competitor implementation had exceeded 6 months.',
        outcome: 'Resurrected 16 enterprise deals, recovering $4.2M in annualized recurring revenue.'
      },
      kpis: [
        { name: 'Recovered Pipeline Revenue', definition: 'Total ARR recovered from stalled or closed-lost deals via structured recovery campaigns', target: '+$3.5M' },
        { name: 'Win-Back Conversion Rate', definition: 'Percentage of targeted churned or lost accounts successfully re-contracted', target: '16.5%' },
        { name: 'Recovery Campaign ROI', definition: 'Incremental ARR generated per dollar spent on dedicated revenue recovery programs', target: '8.4x' }
      ],
      visualModel: {
        type: 'orchestration',
        caption: 'Revenue Recovery Program Flow: Diagnosis, Playbook Execution, and Cash Reclamation',
        metrics: [
          { label: 'Audited Leakage Value', value: '$9.2M', delta: 'Total Pool' },
          { label: 'Successfully Clawed Back', value: '$4.8M', delta: '52% Recovery' },
          { label: 'Recovery Playbook ROI', value: '9.2x', delta: 'Validated' }
        ]
      }
    }
  ],
  methodologyWorkflow: [
    {
      stepNumber: '01',
      title: 'Forensic Revenue Audit',
      input: 'CRM stage history, billing invoices, contract redlines, SOW labor logs, and churn records.',
      activity: 'Execute forensic data reconciliation comparing contracted ARR against realized cash collections.',
      output: 'Comprehensive Revenue Leakage Inventory categorized by funnel, commercial, and customer dimensions.'
    },
    {
      stepNumber: '02',
      title: 'Leakage Severity & Root-Cause Attribution',
      input: 'Discrepancy logs, discount reports, stage aging data, and employee commission schedules.',
      activity: 'Isolate systemic process breakdowns versus individual rep non-compliance.',
      output: 'Prioritized Leakage Severity Matrix ranked by recoverable ARR magnitude and intervention feasibility.'
    },
    {
      stepNumber: '03',
      title: 'Commercial Control Engineering',
      input: 'Discount policy guidelines, SOW scope parameters, and contractual CPI schedules.',
      activity: 'Implement automated CPQ approval gates, mandatory CPI escalation clauses, and InfoSec streamlining.',
      output: 'Hardened commercial governance framework preventing recurring margin leakage.'
    },
    {
      stepNumber: '04',
      title: 'Active Recovery Execution',
      input: 'Stalled pipeline database, dormant accounts, unbilled usage logs, and closed-lost deal records.',
      activity: 'Launch dedicated recovery blitzes, win-back campaigns, and contract reconciliation billing.',
      output: 'Direct cash reclamation and contract addendum executions.'
    },
    {
      stepNumber: '05',
      title: 'Continuous Leakage Telemetry',
      input: 'Live pipeline velocity feeds, discount anomaly monitors, and telemetry usage meters.',
      activity: 'Deploy real-time leakage alerts notifying RevOps the moment commercial terms deviate from standards.',
      output: 'Ongoing telemetry dashboard maintaining zero-leakage commercial execution.'
    }
  ],
  primaryKpis: [
    {
      name: 'Total Revenue Leakage Rate',
      definition: 'Percentage of total addressable contract revenue lost through unmonitored discounts, unbilled usage, and avoidable churn.',
      formula: '[ (Total Identified Lost ARR from Friction + Rogue Discounts + Churn) ÷ Theoretical Gross ARR ] × 100',
      unit: '%',
      reportingPeriod: 'Annualized',
      baseline: '18.4%',
      target: '< 6.0%',
      illustrativeValue: '5.8%',
      interpretation: 'Reducing total revenue leakage from 18.4% to 5.8% directly drops millions of dollars of high-margin recurring cash flow to the bottom line.',
      category: 'Executive'
    },
    {
      name: 'Realized Price vs. List Price',
      definition: 'Percentage of list catalog pricing actually realized on executed customer contracts.',
      formula: '(Total Realized Contract ARR ÷ Total Catalog List ARR of Sold Products) × 100',
      unit: '%',
      reportingPeriod: 'Quarterly',
      baseline: '72.5%',
      target: '88.0%',
      illustrativeValue: '89.2%',
      interpretation: 'Improving price realization from 72.5% to 89.2% proves that sales governance is successfully curbing rogue discounting and defending value.',
      category: 'Commercial'
    },
    {
      name: 'Gross Revenue Retention (GRR)',
      definition: 'Percentage of recurring revenue retained from existing customers over a 12-month period, excluding expansion.',
      formula: '[ (Starting ARR − Gross Churn − Contraction ARR) ÷ Starting ARR ] × 100',
      unit: '%',
      reportingPeriod: 'Annualized',
      baseline: '86.2%',
      target: '95.0%',
      illustrativeValue: '94.8%',
      interpretation: 'A 95% GRR benchmark proves that customer leakage is minimized and the core platform value proposition remains defensible.',
      category: 'Operational'
    },
    {
      name: 'Pipeline Decay Hazard Ratio',
      definition: 'Probability of deal loss for opportunities lingering past the median historical stage duration.',
      formula: 'Win Rate of Opportunities Aged >2x Median Cycle ÷ Win Rate of Opportunities Closed on Schedule',
      unit: 'Ratio',
      reportingPeriod: 'Quarterly',
      baseline: '0.18 (82% lower win rate)',
      target: '0.65',
      illustrativeValue: '0.62',
      interpretation: 'A low decay hazard ratio demonstrates that sales reps actively disqualify stalled opportunities rather than carrying false pipeline hope.',
      category: 'Commercial'
    },
    {
      name: 'Revenue Recovery Velocity',
      definition: 'Average calendar days to resolve and reclaim identified contract entitlement or billing discrepancies.',
      formula: 'Calendar Days from Leakage Flag to Executed Addendum or Rectified Invoice',
      unit: 'Days',
      reportingPeriod: 'Monthly',
      baseline: '78 Days',
      target: '18 Days',
      illustrativeValue: '15 Days',
      interpretation: 'Compressing recovery velocity ensures that unbilled usage and scope creep are monetized before customer contracts renew.',
      category: 'Operational'
    }
  ],
  scenarios: [
    {
      title: 'Enterprise Fintech Platform Forensic Leakage Recovery',
      industry: 'B2B Fintech & Payments',
      baselineSituation: '$74M ARR payments platform struggling with EBITDA compression despite 32% year-over-year top-line volume growth.',
      observedProblem: 'Sales leadership routinely granted custom billing tiers, while client integration engineers worked 250+ unbilled hours per client.',
      analysis: 'Forensic audit uncovered $4.8M in annual revenue leakage: $2.6M in unapproved discounts, $1.4M in unbilled overage queries, and $800K in waived CPI increases.',
      decisionEvaluated: 'Instituted automated CPQ pricing fences, implemented cloud query metering, and enforced contractual CPI escalations.',
      expectedImprovement: 'Claw back $3.5M+ in annualized EBITDA without increasing marketing expenditure.',
      validatingMetrics: ['Recovered Recurring ARR ($3.8M)', 'Price Realization (from 74% to 89%)', 'EBITDA Margin (+480 bps)'],
      assumptions: 'Assumed fewer than 2% of customer accounts would terminate contracts over strict enforcement of existing contractual overage terms.'
    }
  ],
  dataConsiderations: [
    {
      title: 'CPQ & CRM Approval Log Synchronization',
      description: 'Auditability requires that all discount exception requests, special terms, and approvals are stored as immutable records in CPQ tools.',
      impactLevel: 'Critical'
    },
    {
      title: 'Real-Time Usage Metering Integration',
      description: 'Capturing consumption leakage requires continuous telemetry integration between cloud production systems and financial billing engines.',
      impactLevel: 'High'
    },
    {
      title: 'Contract Redline Version Control',
      description: 'Detecting non-standard legal liabilities and scope commitments requires automated parsing of signed customer MSAs and SOWs.',
      impactLevel: 'High'
    }
  ],
  decisionSupport: [
    {
      priority: 'Immediate (Weeks 1-3)',
      focusArea: 'Discount Governance & Approval Fences',
      keyMetrics: 'Realized Discount Rate, Price Realization %',
      tradeOffs: 'Sales reps may express initial friction when discount freedom is curtailed, but realized contract margins immediately expand.',
      recommendedAction: 'Institute mandatory VP-level sign-off for any contract discount exceeding 15% and tie rep commissions to margin.'
    },
    {
      priority: 'Secondary (Weeks 4-8)',
      focusArea: 'Billing Entitlement & Overage Audit',
      keyMetrics: 'Unbilled Consumption Value, Query Overages',
      tradeOffs: 'Issuing overage invoices requires proactive client communication to prevent surprise billing disputes.',
      recommendedAction: 'Reconcile cloud compute logs against contracted limits and issue true-up invoices for excess consumption.'
    },
    {
      priority: 'Strategic (Weeks 9-12)',
      focusArea: 'Structured Win-Back & Resurrection Blitz',
      keyMetrics: 'Recovered Pipeline Revenue, Churned Account Win-Back %',
      tradeOffs: 'Dedicating senior reps to resurrecting lost deals versus chasing cold net-new logos.',
      recommendedAction: 'Deploy a win-back campaign targeting accounts whose competitor implementation stalled, offering seamless migration.'
    }
  ],
  visualTheme: 'leakage'
};

