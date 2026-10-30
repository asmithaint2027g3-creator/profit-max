import { GrowthCapabilityPageData } from '../types';

export const page09AccelerationData: GrowthCapabilityPageData = {
  pageNumber: '09',
  title: 'Revenue Acceleration',
  slug: 'revenue-acceleration',
  heroHeadline: 'Reduce Commercial Friction and Accelerate Revenue Execution',
  heroSupporting: 'Deploy AI sales engines, autonomous growth orchestration, deal risk telemetry, and buying-committee coaching to compress sales cycles and multiply commercial productivity.',
  businessProblemSummary: 'Enterprise sales teams lose 65% of their working hours to administrative CRM entry, manual prospect research, and fragmented multi-channel follow-up, causing deal momentum to decay and sales cycles to stretch past 120 days.',
  targetDecisionMakers: ['Chief Revenue Officers', 'Senior VPs of Global Sales', 'VPs of Sales Operations', 'Chief Commercial Officers'],
  contextWhoExperiences: 'B2B enterprise sales organizations managing complex, multi-stakeholder deals across distributed regional teams.',
  contextSituation: 'Sales quotas are increasing, but rep productivity has plateaued; reps spend less than 35% of their time actively conversing with economic decision-makers.',
  contextWhyDifficult: 'Modern buying committees involve 8 to 14 stakeholders across finance, security, IT, and legal, creating massive deal friction and communication lag.',
  contextContributingFactors: [
    'Reps spending 15+ hours weekly manually researching accounts and updating CRM fields',
    'Single-threaded deal execution that stalls the moment an internal champion changes roles',
    'Lack of real-time coaching and deal-risk alerts during active commercial negotiations',
    'Fragmented engagement tools (email, LinkedIn, dialer) operating in uncoordinated silos'
  ],
  symptomsAndConsequences: [
    {
      category: 'Sales Cycle Duration',
      symptom: 'Enterprise deal cycle stretching from 85 days to 140+ days over the last year.',
      consequence: 'Working capital strain, delayed revenue recognition, and heightened vulnerability to competitor counter-offers.'
    },
    {
      category: 'Rep Quota Attainment',
      symptom: 'Fewer than 45% of sales reps meeting their annual quota targets.',
      consequence: 'High sales rep turnover, escalating recruitment and onboarding costs, and morale collapse.'
    },
    {
      category: 'Pipeline Generation',
      symptom: 'SDR teams generating thousands of cold outreach touches with sub-1% response rates.',
      consequence: 'Exhausted addressable market, burned domain reputations, and soaring customer acquisition costs (CAC).'
    },
    {
      category: 'Late-Stage Deal Slip',
      symptom: 'Over 30% of deals forecasted to close in the final month slipping into the subsequent quarter.',
      consequence: 'Missed board forecasts, emergency discounting, and compromised executive credibility.'
    }
  ],
  subSubmenus: [
    {
      id: 'sec-ai-sales-eng',
      slug: 'ai-sales-engines',
      title: 'AI Sales Engines',
      businessQuestion: 'How can autonomous prospecting and AI SDR agents multiply qualified pipeline without expanding headcount?',
      explanation: 'AI sales engines automate account research, buying-committee mapping, hyper-personalized outreach, and initial qualification.',
      topics: [
        {
          title: 'Autonomous Prospecting',
          description: 'Deploy intelligent agents that autonomously identify target accounts exhibiting urgent buying intent and technographic fit.',
          businessEvidence: 'Firmographic databases, technographic tags, job postings, corporate news, and intent telemetry.',
          analysisProcess: 'Multi-criteria dynamic filtering matching live corporate trigger events to validated ICP parameters.',
          decisionsEnabled: 'Feed sales reps an automated, prioritized daily queue of accounts entering active buying windows.'
        },
        {
          title: 'Account Mining',
          description: 'Extract deep organizational intelligence: technology stack vulnerabilities, executive reporting structures, and strategic initiatives.',
          businessEvidence: 'Public corporate filings, patent grants, GitHub repositories, and executive interview transcripts.',
          analysisProcess: 'Entity relationship graph construction linking corporate business priorities to specific software solutions.',
          decisionsEnabled: 'Arm reps with tailored executive briefing dossiers before their first outreach interaction.'
        },
        {
          title: 'Buying Committee Mapping',
          description: 'Identify and map the full enterprise decision group: Economic Buyers, Technical Evaluators, User Champions, and Legal Gatekeepers.',
          businessEvidence: 'Professional network graphs, corporate org chart databases, and past closed-won contact patterns.',
          analysisProcess: 'Committee graph clustering identifying the 8-12 specific stakeholders required for enterprise purchase consensus.',
          decisionsEnabled: 'Mandate multi-threaded outreach across the entire buying committee rather than single-threading.'
        },
        {
          title: 'AI SDR Agents',
          description: 'Deploy conversational AI agents that execute research-backed, multi-touch outbound sequences with verified personalization.',
          businessEvidence: 'Prospect social posts, recent company achievements, mutual connections, and case study relevance.',
          analysisProcess: 'Contextual generative synthesis creating personalized value propositions tailored to each stakeholder\'s role.',
          decisionsEnabled: 'Scale outbound prospecting capacity by 10x while maintaining high-touch personalization standards.'
        },
        {
          title: 'Pipeline Generation',
          description: 'Orchestrate inbound and outbound qualification workflows that schedule verified discovery calls directly on AE calendars.',
          businessEvidence: 'Meeting scheduling logs, qualification form submissions, and calendar availability feeds.',
          analysisProcess: 'Autonomous qualification scoring ensuring meetings are only booked if accounts meet strict BANT/MEDDPICC criteria.',
          decisionsEnabled: 'Ensure Account Executives spend 100% of their time conversing with pre-qualified decision-makers.'
        }
      ],
      useCase: {
        situation: 'A B2B cloud security startup had 6 SDRs generating 18 qualified meetings per month at a cost of $2,400 per meeting.',
        action: 'Deployed AI Sales Engines to automate account research and personalized multi-threaded outreach across buying committees.',
        outcome: 'Qualified meetings increased to 64 per month while cost per qualified meeting dropped by 68% to $760.'
      },
      kpis: [
        { name: 'Qualified Pipeline Created', definition: 'Total dollar value of verified sales opportunities created via AI sales engines', target: '$14.5M' },
        { name: 'Outbound Response Rate', definition: 'Percentage of targeted enterprise prospects who respond substantively to outreach', target: '8.4%' },
        { name: 'Cost Per Qualified Meeting', definition: 'Fully loaded prospecting cost required to secure a verified discovery meeting', target: '< $800' }
      ],
      visualModel: {
        type: 'funnel',
        caption: 'AI Sales Engine Pipeline Generation: From Autonomous Research to Scheduled Discovery Calls',
        metrics: [
          { label: 'Target Accounts Mapped', value: '12,400/mo', delta: '+140%' },
          { label: 'Engaged Stakeholders', value: '1,840/mo', delta: '+88%' },
          { label: 'Qualified AE Meetings', value: '142/mo', delta: '3.4x Lift' }
        ]
      }
    },
    {
      id: 'sec-growth-auto',
      slug: 'growth-automation',
      title: 'Growth Automation',
      businessQuestion: 'How can commercial workflows and multi-channel touchpoints be orchestrated to eliminate deal latency?',
      explanation: 'Growth automation synchronizes CRM, email, LinkedIn, digital ads, and direct mail into an orchestrated, trigger-driven commercial engine.',
      topics: [
        {
          title: 'Revenue Orchestration',
          description: 'Synchronize commercial actions across marketing, SDRs, AEs, and customer success into a unified, event-driven timeline.',
          businessEvidence: 'CRM workflow rules, marketing automation triggers, sales engagement sequences, and support logs.',
          analysisProcess: 'Finite-state machine workflow modeling routing accounts dynamically based on live engagement triggers.',
          decisionsEnabled: 'Ensure no qualified prospect falls through operational cracks between departmental handoffs.'
        },
        {
          title: 'Multi-Channel Campaigns',
          description: 'Coordinate simultaneous touches across email, phone, LinkedIn, targeted executive digital ads, and direct executive gifts.',
          businessEvidence: 'Multi-channel interaction logs, ad impression histories, email open tracking, and call disposition notes.',
          analysisProcess: 'Omni-channel attribution modeling identifying the optimal sequence and timing of cross-channel touchpoints.',
          decisionsEnabled: 'Surround enterprise buying committees with unified messaging across all professional channels.'
        },
        {
          title: 'Trigger-Based Engagement',
          description: 'Fire automated high-priority sales tasks the instant an account exhibits significant commercial intent or changes behavior.',
          businessEvidence: 'Website pricing page visits, security whitepaper downloads, executive LinkedIn changes, and funding alerts.',
          analysisProcess: 'Real-time event streaming processing intent signals and alerting assigned reps within 3 minutes.',
          decisionsEnabled: 'Engage hot prospective buyers while they are actively evaluating your platform on your website.'
        },
        {
          title: 'Conversion Optimization',
          description: 'A/B test and algorithmically optimize subject lines, value propositions, call-to-actions, and demo flow architectures.',
          businessEvidence: 'Email campaign open and reply rates, landing page conversion logs, and demo presentation drop-off data.',
          analysisProcess: 'Multi-armed bandit testing dynamically allocating traffic to the highest-performing commercial messaging.',
          decisionsEnabled: 'Continuously elevate baseline commercial conversion rates through automated empirical testing.'
        },
        {
          title: 'Growth Workflows',
          description: 'Automate repetitive sales administrative tasks: CRM data enrichment, meeting summary logging, NDA delivery, and contract generation.',
          businessEvidence: 'Sales rep daily activity logs, CRM audit histories, and electronic signature turnaround times.',
          analysisProcess: 'Robotic process automation (RPA) and LLM-driven summarization eliminating manual administrative burden.',
          decisionsEnabled: 'Reclaim 12-15 hours per rep per week for direct, revenue-generating customer conversations.'
        }
      ],
      useCase: {
        situation: 'An enterprise HR software provider had an average lead response time of 32 hours; 50% of inbound demo requests never converted to meetings.',
        action: 'Deployed Trigger-Based Engagement and automated scheduling workflows that instantly connected inbound leads with available AEs.',
        outcome: 'Lead response time dropped to 4 minutes; meeting hold rate increased from 48% to 84%, generating $6.8M in pipeline.'
      },
      kpis: [
        { name: 'Lead-to-Meeting Conversion Rate', definition: 'Percentage of captured inbound marketing leads that convert into completed discovery meetings', target: '42%' },
        { name: 'Workflow Task Completion Rate', definition: 'Percentage of automated revenue orchestration tasks successfully executed without human error', target: '99.2%' },
        { name: 'Admin Hours Saved Per Rep', definition: 'Weekly hours reclaimed per sales rep from automated CRM logging and research', target: '14.5 Hrs' }
      ],
      visualModel: {
        type: 'orchestration',
        caption: 'Revenue Workflow Orchestration: Multi-Channel Trigger Synchronization',
        metrics: [
          { label: 'Inbound Response Latency', value: '4.2 Min', delta: '-92%' },
          { label: 'Multi-Channel Touch Rate', value: '8.4 Touches', delta: '+4.2' },
          { label: 'Weekly Rep Admin Time', value: '4.2 Hrs', delta: '-12 Hrs' }
        ]
      }
    },
    {
      id: 'sec-opp-accel',
      slug: 'opportunity-acceleration',
      title: 'Opportunity Acceleration',
      businessQuestion: 'How can live deal coaching, risk telemetry, and AI copilots prevent late-stage enterprise deal slip?',
      explanation: 'Opportunity acceleration provides real-time coaching, stakeholder sentiment tracking, and deal-risk prediction during active sales cycles.',
      topics: [
        {
          title: 'Deal Intelligence',
          description: 'Analyze conversational dynamics, buyer sentiment, competitor mentions, and pricing pushback during live sales calls.',
          businessEvidence: 'Call audio recordings, natural language transcripts, speaker talk-time ratios, and objection keyword frequencies.',
          analysisProcess: 'Conversational AI analysis scoring buyer enthusiasm, decision authority, and hesitation markers.',
          decisionsEnabled: 'Alert sales managers immediately when a critical objection regarding security or pricing is mishandled.'
        },
        {
          title: 'Deal Coaching',
          description: 'Deliver real-time contextual battlecards, objection handling scripts, and relevant customer proof points to reps during calls.',
          businessEvidence: 'Real-time call transcription feeds, competitive objection libraries, and relevant case study databases.',
          analysisProcess: 'In-call dynamic prompt injection surfacing the exact proof point needed the instant a competitor is mentioned.',
          decisionsEnabled: 'Empower junior sales reps to handle complex enterprise objections with the confidence of a seasoned veteran.'
        },
        {
          title: 'Deal Risk Prediction',
          description: 'Calculate algorithmic deal health scores that predict the probability of deal slip or loss before the quarter closes.',
          businessEvidence: 'Email response latency trends, stakeholder attendance drop-off, postponed meeting frequency, and legal redline stall logs.',
          analysisProcess: 'Supervised machine learning classification flagging deals that exhibit behavioral markers of late-stage slippage.',
          decisionsEnabled: 'Intervene on at-risk enterprise deals 4 weeks before quarter-end by deploying executive sponsors.'
        },
        {
          title: 'Stakeholder Influence Mapping',
          description: 'Track the engagement level, political influence, and sentiment of every member of the enterprise buying committee.',
          businessEvidence: 'Meeting attendance logs, email thread inclusion, document viewing time, and role seniority.',
          analysisProcess: 'Social network centrality analysis identifying unengaged decision-makers who could veto the purchase.',
          decisionsEnabled: 'Identify missing stakeholders (e.g., CISO, CFO) and execute targeted multi-threading before proposal submission.'
        },
        {
          title: 'Revenue AI Copilots',
          description: 'Equip sales reps with generative AI copilots that draft tailored follow-up emails, ROI models, and proposal summaries in seconds.',
          businessEvidence: 'Meeting notes, customer-specific requirement lists, pricing configurations, and value proposition frameworks.',
          analysisProcess: 'Contextual document generation converting 60-minute discovery call notes into executive-ready follow-up summaries.',
          decisionsEnabled: 'Send comprehensive, professional follow-up proposals within 30 minutes of call completion.'
        }
      ],
      useCase: {
        situation: 'An enterprise infrastructure platform had 35% of forecasted deals slip every quarter due to unexpected legal and security reviews.',
        action: 'Deployed Deal Risk Prediction and Stakeholder Mapping, which flagged deals lacking InfoSec engagement 45 days before quarter-end.',
        outcome: 'Reduced deal slip from 35% to 8%, increasing quarterly closed-won revenue predictability to 96%.'
      },
      kpis: [
        { name: 'Sales Cycle Length Compression', definition: 'Percentage reduction in median calendar days required to close enterprise deals', target: '-32%' },
        { name: 'Late-Stage Deal Slip Rate', definition: 'Percentage of deals committed for the current quarter that fail to close on schedule', target: '< 8.0%' },
        { name: 'Multi-Threaded Stakeholder Depth', definition: 'Mean number of verified active stakeholders engaged per enterprise deal', target: '7.8 Stakeholders' }
      ],
      visualModel: {
        type: 'matrix',
        caption: 'Deal Health & Risk Telemetry: Stakeholder Engagement Depth vs. Stage Velocity',
        metrics: [
          { label: 'High-Health Commits', value: '48 Deals', delta: '$12.4M ARR' },
          { label: 'At-Risk Slip Alerts', value: '6 Deals', delta: 'Early Flag' },
          { label: 'Median Sales Cycle', value: '64 Days', delta: '-28 Days' }
        ]
      }
    }
  ],
  methodologyWorkflow: [
    {
      stepNumber: '01',
      title: 'Commercial Workflow & Tech Audit',
      input: 'Sales tech stack inventory, CRM activity logs, email sequence metrics, and sales rep time-tracking studies.',
      activity: 'Audit sales workflow friction, measure rep time allocation, and identify administrative bottlenecks.',
      output: 'Commercial Productivity & Friction Audit Report.'
    },
    {
      stepNumber: '02',
      title: 'AI Sales Engine & Data Foundation',
      input: 'Cleaned CRM account database, validated ICP parameters, buying committee profiles, and intent data feeds.',
      activity: 'Configure autonomous prospecting agents, enrich account entity graphs, and establish verified ICP parameters.',
      output: 'Operationalized AI Prospecting & Buying Committee Data Foundation.'
    },
    {
      stepNumber: '03',
      title: 'Revenue Orchestration & Multi-Threading',
      input: 'Sales playbooks, multi-channel messaging templates, intent trigger rules, and calendar scheduling tools.',
      activity: 'Deploy automated trigger-based multi-channel workflows and mandate multi-threaded buying committee engagement.',
      output: 'Synchronized Multi-Channel Revenue Orchestration Engine.'
    },
    {
      stepNumber: '04',
      title: 'Deal Intelligence & Risk Telemetry',
      input: 'Call recording feeds, conversational transcription pipelines, objection databases, and stage aging records.',
      activity: 'Deploy real-time conversational coaching, algorithmic deal health scoring, and automated deal slip alerts.',
      output: 'Live Deal Intelligence & Executive Intervention Telemetry.'
    },
    {
      stepNumber: '05',
      title: 'Continuous Velocity Optimization',
      input: 'Live pipeline velocity metrics, rep quota attainment reports, win/loss debriefs, and stage duration data.',
      activity: 'Track sales velocity improvements, refine AI agent prompt parameters, and optimize commercial coaching.',
      output: 'Executive Sales Velocity Telemetry maintaining maximum rep quota attainment.'
    }
  ],
  primaryKpis: [
    {
      name: 'Sales Velocity Acceleration Index',
      definition: 'Composite measure of daily revenue generation through the active sales pipeline.',
      formula: '(Qualified Opportunities × Win Rate % × Average Deal Size) ÷ Sales Cycle Length in Days',
      unit: '$ / Day',
      reportingPeriod: 'Monthly',
      baseline: '$6,200 / Day',
      target: '$16,500 / Day',
      illustrativeValue: '$17,400 / Day',
      interpretation: 'A 2.8x increase in sales velocity proves that AI prospecting and cycle time compression are compounding revenue throughput.',
      category: 'Commercial'
    },
    {
      name: 'Median Sales Cycle Length',
      definition: 'Median calendar days elapsed from initial qualified discovery call to fully executed customer contract.',
      formula: 'Median Days from Opportunity Creation Date to Closed-Won Date',
      unit: 'Days',
      reportingPeriod: 'Quarterly',
      baseline: '118 Days',
      target: '65 Days',
      illustrativeValue: '62 Days',
      interpretation: 'Compressing sales cycles by nearly 50% accelerates cash flow recognition and dramatically reduces deal slip risk.',
      category: 'Operational'
    },
    {
      name: 'Sales Rep Quota Attainment %',
      definition: 'Percentage of fully ramped sales account executives achieving 100% or more of their annualized sales quota.',
      formula: '(Number of Ramped Reps Meeting/Exceeding Quota ÷ Total Ramped Reps) × 100',
      unit: '%',
      reportingPeriod: 'Annualized',
      baseline: '38.0%',
      target: '75.0%',
      illustrativeValue: '78.5%',
      interpretation: 'Lifting rep attainment from 38% to nearly 80% proves that revenue growth is distributed across the entire commercial team.',
      category: 'Commercial'
    },
    {
      name: 'Inbound Response Latency',
      definition: 'Median minutes elapsed from an enterprise prospect submitting a demo request to first human or AI engagement.',
      formula: 'Median Minutes from Form Submission Timestamp to First Verified Outreach Timestamp',
      unit: 'Minutes',
      reportingPeriod: 'Daily / Weekly',
      baseline: '1,420 Min (23.6 Hrs)',
      target: '< 5 Minutes',
      illustrativeValue: '3.8 Minutes',
      interpretation: 'Engaging inbound prospects within 5 minutes increases qualified meeting hold rates by over 300%.',
      category: 'Operational'
    },
    {
      name: 'Quarterly Forecast Slip Rate',
      definition: 'Percentage of late-stage committed deals that fail to close within the committed fiscal quarter.',
      formula: '(Committed Pipeline Value Unclosed at Quarter End ÷ Total Committed Pipeline Value on Day 60) × 100',
      unit: '%',
      reportingPeriod: 'Quarterly',
      baseline: '34.5%',
      target: '< 8.0%',
      illustrativeValue: '6.8%',
      interpretation: 'Eliminating late-stage deal slip ensures that boardroom revenue commitments are delivered with mathematical certainty.',
      category: 'Executive'
    }
  ],
  scenarios: [
    {
      title: 'Global Cybersecurity Vendor Sales Cycle Compression',
      industry: 'Enterprise Security Software',
      baselineSituation: '$64M ARR enterprise security vendor with a 135-day average sales cycle and 38% quarterly deal slip.',
      observedProblem: 'Account Executives executed single-threaded deals with IT directors, only to have CISO security reviews stall deals for 8 weeks.',
      analysis: 'Deployed Opportunity Acceleration and Buying Committee Mapping, identifying that 9 out of 10 lost deals never engaged the CISO or legal counsel.',
      decisionEvaluated: 'Mandated multi-threaded engagement from Day 1 and equipped reps with real-time AI deal copilots that drafted InfoSec documentation.',
      expectedImprovement: 'Cut sales cycle duration by 40% and reduce quarterly deal slip to under 10%.',
      validatingMetrics: ['Sales Cycle Length (from 135 to 68 days)', 'Late-Stage Deal Slip (from 38% to 7.2%)', 'Rep Quota Attainment (from 41% to 76%)'],
      assumptions: 'Assumed automated InfoSec documentation would satisfy enterprise procurement compliance standards without bespoke modifications.'
    }
  ],
  dataConsiderations: [
    {
      title: 'Real-Time Conversational Audio & Transcript Sync',
      description: 'Deal intelligence coaching requires low-latency WebRTC audio streaming and high-fidelity speech-to-text models that resolve technical jargon.',
      impactLevel: 'Critical'
    },
    {
      title: 'CRM Bi-Directional Synchronization & Data Hygiene',
      description: 'AI sales agents and revenue copilots require clean, real-time bi-directional CRM integration without duplicate contact creation.',
      impactLevel: 'High'
    },
    {
      title: 'Executive Privacy & Security Compliance Governance',
      description: 'Outreach automation and conversational recording must strictly comply with regional two-party consent laws, GDPR, and CAN-SPAM regulations.',
      impactLevel: 'High'
    }
  ],
  decisionSupport: [
    {
      priority: 'Immediate (Weeks 1-3)',
      focusArea: 'Inbound Response Latency & Instant Scheduling',
      keyMetrics: 'First Response Time, Meeting Booking Rate',
      tradeOffs: 'Automating instant calendar scheduling requires tight calendar management from Account Executives.',
      recommendedAction: 'Deploy automated calendar routing that books inbound enterprise demo requests directly onto rep calendars in real time.'
    },
    {
      priority: 'Secondary (Weeks 4-8)',
      focusArea: 'Multi-Threaded Buying Committee Mapping',
      keyMetrics: 'Engaged Stakeholder Count per Deal, InfoSec Engagement Velocity',
      tradeOffs: 'Requiring reps to multi-thread deals adds initial diligence but eliminates surprise late-stage vetoes.',
      recommendedAction: 'Mandate that no deal can advance to proposal stage without verified engagement from at least 4 buying committee members.'
    },
    {
      priority: 'Strategic (Weeks 9-12)',
      focusArea: 'Algorithmic Deal Risk Telemetry & Coaching',
      keyMetrics: 'Quarterly Deal Slip Rate, Sales Velocity Index',
      tradeOffs: 'Sales managers must shift from subjective 1-on-1 deal reviews to algorithmic deal health scorecards.',
      recommendedAction: 'Institute weekly executive pipeline reviews driven strictly by machine learning deal health scores.'
    }
  ],
  visualTheme: 'acceleration'
};

