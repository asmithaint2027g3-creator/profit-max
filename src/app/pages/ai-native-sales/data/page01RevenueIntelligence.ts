import { AiSalesCapabilityPageData } from '../types';

export const page01RevenueIntelligence: AiSalesCapabilityPageData = {
  "pageNumber": "01",
  "title": "Revenue Intelligence",
  "slug": "revenue-intelligence",
  "canonicalPath": "/ai-native-sales/revenue-intelligence",
  "eyebrow": "AI NATIVE SALES / REVENUE INTELLIGENCE",
  "heroHeadline": "Know Which Buyers Matter, Which Accounts Are Moving, and Why",
  "heroSupporting": "Sales teams often spend time researching accounts without knowing which ones have a relevant need, a credible buying window, or a decision process already underway. Revenue Intelligence combines buyer, account, stakeholder, and market context to help teams prioritize their attention and act with better information.",
  "primaryCTA": "Explore Revenue Intelligence",
  "secondaryCTA": "Book a Consultation",
  "targetDecisionMakers": [
    "Chief Revenue Officers (CROs)",
    "VP Sales & Sales Operations",
    "Commercial Directors",
    "Enterprise Account Executives",
    "Demand Generation Leaders"
  ],
  "visualTheme": "intelligence",
  "businessProblemTitle": "More Data Does Not Automatically Create Better Sales Decisions",
  "businessProblemSubtitle": "Enterprises invest heavily in data vendors and CRM instances, yet sales teams still drown in noise while high-intent buying signals pass by unnoticed.",
  "businessProblems": [
    {
      "id": "signal-noise",
      "title": "Dark-Funnel & Signal Fragmentation",
      "symptom": "Reps cannot distinguish genuine commercial intent from passive web traffic or casual content downloads.",
      "rootCause": "Data remains siloed across website analytics, intent vendors, CRM records, and product logs with no unified identity graph.",
      "impact": "Up to 68% of sales capacity is wasted chasing cold accounts while active in-market buyers sign with competitors."
    },
    {
      "id": "manual-research",
      "title": "Repetitive Manual Research Overhead",
      "symptom": "Account executives spend 12-15 hours weekly manually piecing together LinkedIn profiles, SEC filings, and tech stacks.",
      "rootCause": "Lack of automated account graph synthesis and continuous telemetry ingestion.",
      "impact": "Sales cycle velocity stalls by 24 days on average due to delayed initial outreach."
    },
    {
      "id": "blind-committees",
      "title": "Hidden Buying Committee Dynamics",
      "symptom": "Single-threaded deals stall late in procurement when unseen security, legal, or finance stakeholders veto the proposal.",
      "rootCause": "CRM contacts reflect only who filled out a form, not the 6-10 stakeholders who actually control the budget.",
      "impact": "Unforecasted deal slippage and late-stage loss rates exceed 42% on complex enterprise transactions."
    }
  ],
  "subSubmenus": [
    {
      "id": "buyer-intelligence",
      "title": "Buyer Intelligence",
      "badge": "Intent Velocity",
      "businessQuestion": "Which target accounts are in an active buying window right now, and what specific problem are they trying to solve?",
      "description": "Surfaces dark-funnel buying surges, vendor comparison activity, and solution research 60-90 days before formal RFPs or outreach are initiated.",
      "businessProblem": "Sales teams traditionally rely on inbound form fills or arbitrary cadence sequences, engaging buyers after vendor shortlists are already locked.",
      "howItWorks": "Aggregates first-party digital footprints, third-party B2B intent feeds, topic surge clusters, and job posting signals into a deterministic Buyer Intent Index.",
      "informationUsed": [
        "First-party web session depth and documentation reviews",
        "Third-party programmatic intent and category surge data",
        "Competitor review platform evaluation activity",
        "Hiring surge data for specialized technical or commercial skill sets"
      ],
      "workflowSupport": "Directs SDR and AE attention daily to accounts entering their active evaluation window with pre-built context briefs.",
      "outcomesSupported": "Shortens time-to-first-meeting by 3.8x and increases initial discovery meeting qualification rates from 22% to 64%.",
      "humanOversight": "Sales managers review high-intent alerts to confirm account eligibility and avoid reaching out during sensitive corporate events.",
      "kpis": [
        {
          "metric": "Signal-to-Meeting Conversion",
          "definition": "Meetings booked from intent triggers vs total triggered accounts",
          "target": "38.4%"
        },
        {
          "metric": "Detection Lead Time",
          "definition": "Days between detected intent surge and competitor public engagement",
          "target": "45-60 Days"
        },
        {
          "metric": "Intent Precision Score",
          "definition": "Percentage of alerted accounts confirmed in active buying cycle",
          "target": "92.6%"
        }
      ]
    },
    {
      "id": "account-intelligence",
      "title": "Account Intelligence",
      "badge": "Account 360",
      "businessQuestion": "What are the strategic initiatives, tech stack vulnerabilities, and financial realities of this enterprise?",
      "description": "Generates a continuous, holistic dossier of target enterprise accounts combining structural, financial, technological, and executive priorities.",
      "businessProblem": "Reps approach enterprise accounts with boilerplate pitches because researching complex 10-K filings, earnings calls, and tech stacks is too time-consuming.",
      "howItWorks": "Autonomous ingestion agents analyze SEC filings, investor presentations, patent registries, and installed technology telemetry to map commercial vulnerabilities.",
      "informationUsed": [
        "Annual reports, quarterly earnings transcripts, and investor presentations",
        "Technographic telemetry and cloud infrastructure configurations",
        "Corporate reorganizations, executive leadership transitions, and M&A filings",
        "Historical vendor engagements and legacy contract expiration dates"
      ],
      "workflowSupport": "Synthesizes 50-page enterprise dossiers into actionable 1-page executive briefs tailored to rep discovery conversations.",
      "outcomesSupported": "Eliminates 12 hours of manual research per rep weekly and boosts discovery-to-proposal conversion by 34%.",
      "humanOversight": "Account Executives validate strategic initiative hypotheses before presenting business cases to executive sponsors.",
      "kpis": [
        {
          "metric": "Research Time Saved",
          "definition": "Hours saved per AE per week on pre-call preparation",
          "target": "11.5 hrs/wk"
        },
        {
          "metric": "Opportunity Discovery Rate",
          "definition": "New qualified deal opportunities identified per target account",
          "target": "2.4 deals"
        },
        {
          "metric": "Strategic Fit Index",
          "definition": "Mathematical correlation of target account profile to top-decile customers",
          "target": "94.2%"
        }
      ]
    },
    {
      "id": "buying-committee-intelligence",
      "title": "Buying Committee Intelligence",
      "badge": "Stakeholder Graph",
      "businessQuestion": "Who are all the decision-makers, champions, technical evaluators, and blockers in this account, and what are their concerns?",
      "description": "Constructs an interactive stakeholder influence graph mapping economic buyers, technical evaluators, champions, procurement leads, and consensus gaps.",
      "businessProblem": "Complex B2B deals fail because reps engage only 1 or 2 friendly contacts while hidden stakeholders silently veto the investment.",
      "howItWorks": "Analyzes corporate hierarchy, historical deal stakeholder patterns, meeting participant transcripts, and email graph metadata to detect missing roles.",
      "informationUsed": [
        "Corporate hierarchy and departmental reporting relationships",
        "Calendar invites, email threads, and virtual meeting attendance logs",
        "Historical closed-won buying committee composition benchmarks",
        "Public professional contributions, technical publications, and speaking topics"
      ],
      "workflowSupport": "Alerts account owners whenever critical stakeholder personas (e.g. CISO, CFO, Head of Procurement) are missing from active evaluation stages.",
      "outcomesSupported": "Increases multi-threading depth from 1.8 to 5.4 verified stakeholders per enterprise deal, dropping late-stage vetoes by 55%.",
      "humanOversight": "Reps verify interpersonal influence and champion credibility before initiating sensitive internal alignment campaigns.",
      "kpis": [
        {
          "metric": "Committee Coverage Depth",
          "definition": "Verified stakeholders engaged vs total required committee roles",
          "target": "88.5%"
        },
        {
          "metric": "Single-Threaded Deal Reduction",
          "definition": "Decrease in opportunities with only 1 active contact",
          "target": "-72.0%"
        },
        {
          "metric": "Consensus Acceleration Velocity",
          "definition": "Days saved securing unanimous security and procurement sign-off",
          "target": "18 Days"
        }
      ]
    },
    {
      "id": "market-signal-intelligence",
      "title": "Market Signal Intelligence",
      "badge": "Macro Telemetry",
      "businessQuestion": "How are competitive moves, regulatory changes, and category disruptions creating urgent buying triggers in our territory?",
      "description": "Monitors macro market indicators, regulatory enforcement deadlines, vendor price hikes, and competitor outages to trigger contextual outreach.",
      "businessProblem": "Sales teams react months after market events occur, missing the immediate window when buyers are actively seeking alternatives.",
      "howItWorks": "Continuous signal listeners ingest regulatory gazettes, industry news, competitor price updates, and executive job boards, scoring urgency in real-time.",
      "informationUsed": [
        "Regulatory compliance mandates and statutory deadlines",
        "Competitor service outages, price increases, and leadership shakeups",
        "Industry macro demand fluctuations and supply chain disruptions",
        "Venture funding, private equity buyouts, and strategic capital allocation"
      ],
      "workflowSupport": "Automatically triggers tailored market opportunity campaigns with approved talk tracks whenever a relevant market event occurs.",
      "outcomesSupported": "Captures competitive displacement opportunities with 3.2x higher win rates compared to cold outreach.",
      "humanOversight": "Sales leadership approves messaging guidelines for sensitive market events before automated campaigns launch.",
      "kpis": [
        {
          "metric": "Market Event Response Time",
          "definition": "Hours from public market event to sales campaign activation",
          "target": "< 4 Hours"
        },
        {
          "metric": "Displacement Win Rate",
          "definition": "Win rate against entrenched competitors following trigger events",
          "target": "48.2%"
        },
        {
          "metric": "Triggered Pipeline Yield",
          "definition": "Total qualified pipeline sourced from real-time market signals",
          "target": "$4.2M/Qtr"
        }
      ]
    },
    {
      "id": "intent-data-intelligence",
      "title": "Intent Data Intelligence",
      "badge": "Surge Scoring",
      "businessQuestion": "Which accounts are actively consuming content and researching our exact software category across the broader B2B web?",
      "description": "Analyzes programmatic content consumption surges, technical whitepaper downloads, and category search velocity to isolate verified buying cycles.",
      "businessProblem": "Traditional lead scoring relies solely on form fills, missing the 95% of buyers conducting deep dark-funnel evaluations without filling out forms.",
      "howItWorks": "Correlates IP-resolved content consumption across thousands of B2B publishing networks with proprietary machine learning topic surge models.",
      "informationUsed": [
        "B2B publishing network IP consumption telemetry",
        "Category-specific keyword surge metrics and topic clusters",
        "Peer review and comparison site evaluation timestamps",
        "Technical documentation search patterns and repository views"
      ],
      "workflowSupport": "Scores target accounts on a 0-100 Intent Surge Index, automatically alerting account executives when an account crosses the engagement threshold.",
      "outcomesSupported": "Enables sales outreach 4-6 weeks before competitors recognize the account is in-market, resulting in 2.6x higher discovery meeting acceptance.",
      "humanOversight": "RevOps reviews topic keyword taxonomy and algorithmic surge thresholds quarterly to avoid false-positive alerts.",
      "kpis": [
        {
          "metric": "Intent Precision Score",
          "definition": "Percentage of high-intent alerted accounts confirmed in active buying cycle",
          "target": "91.4%"
        },
        {
          "metric": "First-Meeting Acceptance",
          "definition": "Acceptance rate of discovery invites sent to surge-alerted accounts",
          "target": "34.8%"
        },
        {
          "metric": "Surge Detection Lead Time",
          "definition": "Average weeks gained ahead of competitor outreach",
          "target": "5.2 Weeks"
        }
      ]
    },
    {
      "id": "customer-360-intelligence",
      "title": "Customer 360 Intelligence",
      "badge": "Unified 360",
      "businessQuestion": "What is the complete historical, technical, and commercial truth of this account across all departmental touchpoints?",
      "description": "Unifies fragmented CRM records, billing telemetry, customer support tickets, and executive interactions into a singular real-time account truth.",
      "businessProblem": "Reps enter sales conversations unaware of open critical support tickets, billing disputes, or prior executive discussions, damaging trust.",
      "howItWorks": "Constructs an automated enterprise entity graph syncing ERP, CRM, product usage logs, Slack/Teams threads, and ticketing platforms into one timeline.",
      "informationUsed": [
        "Historical contract terms, pricing concessions, and addendum histories",
        "Real-time product feature adoption and active seat utilization telemetry",
        "Open customer support tickets, escalation logs, and CSAT scores",
        "Executive relationship notes and past steering committee decks"
      ],
      "workflowSupport": "Provides every rep with an interactive 360-degree relationship dashboard before every call, flagging current sentiment and expansion readiness.",
      "outcomesSupported": "Eliminates blind-spot communication errors and accelerates expansion deal discussions by providing immediate historical context.",
      "humanOversight": "Customer Success Managers and Account Executives reconcile conflicting customer relationship notes during quarterly account reviews.",
      "kpis": [
        {
          "metric": "Data Entity Unification",
          "definition": "Percentage of customer records reconciled across ERP, CRM, and support",
          "target": "99.2%"
        },
        {
          "metric": "Account Briefing Time",
          "definition": "Time required to review complete account history prior to executive meetings",
          "target": "< 3 Mins"
        },
        {
          "metric": "Context Blind-Spot Reduction",
          "definition": "Decrease in recorded customer complaints regarding disconnected internal communication",
          "target": "-86.0%"
        }
      ]
    },
    {
      "id": "competitive-intelligence",
      "title": "Competitive Intelligence",
      "badge": "Battlecards AI",
      "businessQuestion": "How does our platform compare against current alternatives in this specific deal, and where are the competitor vulnerabilities?",
      "description": "Generates live, deal-specific competitive battlecards, feature vulnerability analyses, and pricing displacement matrices.",
      "businessProblem": "Static competitive battlecards stored on internal wikis become obsolete within weeks as competitors update packaging and capabilities.",
      "howItWorks": "Autonomous crawlers track competitor release notes, pricing tier changes, executive hires, and customer review complaints, refreshing battlecards dynamically.",
      "informationUsed": [
        "Competitor pricing and packaging pages, public changelogs, and release notes",
        "Win/loss interview transcripts and deal post-mortem records",
        "Verified customer reviews detailing specific competitor operational weaknesses",
        "Third-party benchmark reports and independent architectural audits"
      ],
      "workflowSupport": "Equips reps with live, deal-specific objection-handling scripts and technical differentiation proofs during active competitive cycles.",
      "outcomesSupported": "Increases head-to-head competitive win rates by 28% and shortens competitive technical evaluation bake-offs by 14 days.",
      "humanOversight": "Product marketing and legal teams review and approve all competitive claims to ensure strict adherence to fair commercial guidelines.",
      "kpis": [
        {
          "metric": "Competitive Win Rate",
          "definition": "Win rate in deals with identified primary competitor involvement",
          "target": "62.4%"
        },
        {
          "metric": "Objection Handling Speed",
          "definition": "Average response time to technical competitive questions during sales cycles",
          "target": "< 2 Hours"
        },
        {
          "metric": "Battlecard Currency Rate",
          "definition": "Percentage of competitive intelligence cards updated within the last 14 days",
          "target": "96.5%"
        }
      ]
    },
    {
      "id": "revenue-forecast-intelligence",
      "title": "Revenue Forecast Intelligence",
      "badge": "Forecast ML",
      "businessQuestion": "What is the mathematically verified probability of each committed deal closing this quarter based on actual stakeholder behavior?",
      "description": "Delivers deterministic, behavioral forecast models evaluating deal progression velocity, buying committee engagement, and stage dwell time.",
      "businessProblem": "Traditional forecasting relies on subjective sales rep optimism, resulting in end-of-quarter revenue misses and unforecasted deal slippage.",
      "howItWorks": "Machine learning algorithms analyze 40+ objective engagement signals (meeting frequency, stakeholder breadth, document reviews, procurement sign-offs) to score deal health.",
      "informationUsed": [
        "Historical stage duration and regression velocity curves",
        "Inbound buyer response latency and meeting rescheduling frequency",
        "Legal, security, and procurement contract revision telemetry",
        "Macro economic industry headwinds and customer fiscal calendar dates"
      ],
      "workflowSupport": "Provides executive leadership with real-time probabilistic revenue projections and highlights specific deals requiring executive intervention.",
      "outcomesSupported": "Reduces quarterly revenue forecast variance to less than 3.5% and identifies slipping enterprise deals 45 days before quarter close.",
      "humanOversight": "Sales managers review algorithmic risk warnings during weekly 1-on-1 pipeline reviews to formulate deal recovery interventions.",
      "kpis": [
        {
          "metric": "Forecast Accuracy Variance",
          "definition": "Variance between projected forecast at Day 45 and actual closed revenue",
          "target": "< 3.2%"
        },
        {
          "metric": "Slippage Detection Lead Time",
          "definition": "Average days in advance that deal slippage is identified and flagged",
          "target": "42 Days"
        },
        {
          "metric": "Intervention Recovery Rate",
          "definition": "Percentage of flagged at-risk deals successfully recovered to closed-won",
          "target": "44.6%"
        }
      ]
    }
  ],
  "workflowTitle": "From Dark-Funnel Signals to Prioritized Sales Action",
  "workflowSubtitle": "A closed-loop intelligence pipeline continuously ingesting raw signals, synthesizing account context, and delivering high-conviction actions to sales reps.",
  "workflowSteps": [
    {
      "step": "01",
      "name": "Signal Ingestion & Hygiene",
      "description": "Ingests first-party digital touchpoints, 3rd-party intent feeds, and technographic changes.",
      "inputs": "Web telemetry, CRM logs, G2/Gartner surge data, technographic feeds",
      "aiAction": "Normalizes entity names, deduplicates accounts, and builds probabilistic identity clusters.",
      "humanGate": "RevOps reviews data source confidence thresholds monthly.",
      "output": "Clean, unified account entity graph"
    },
    {
      "step": "02",
      "name": "Intent Velocity Scoring",
      "description": "Evaluates signal density and topic clustering to detect true commercial buying windows.",
      "inputs": "Topic surge spikes, pricing page duration, documentation downloads",
      "aiAction": "Applies neural scoring model trained on historical closed-won opportunity signatures.",
      "humanGate": "Sales leadership sets baseline score required for automated SDR alert creation.",
      "output": "Prioritized list of in-market accounts"
    },
    {
      "step": "03",
      "name": "Account & Committee Graphing",
      "description": "Synthesizes corporate 10-Ks, reporting structures, and stakeholder maps.",
      "inputs": "SEC filings, LinkedIn graphs, corporate news, patent registries",
      "aiAction": "Maps economic buyers, technical evaluators, champions, and missing committee personas.",
      "humanGate": "Account Executives verify key stakeholder reporting relationships.",
      "output": "Interactive stakeholder influence map"
    },
    {
      "step": "04",
      "name": "Bespoke Context Brief Delivery",
      "description": "Delivers 1-page executive discovery dossiers directly to reps inside CRM and Slack.",
      "inputs": "Synthesized account dossier, competitive battlecard, value drivers",
      "aiAction": "Generates tailored talk tracks, relevant customer proof points, and initial discovery questions.",
      "humanGate": "Rep personalizes final outreach angle before initial contact is dispatched.",
      "output": "Rep-ready executive brief & talk track"
    }
  ],
  "useCases": [
    {
      "title": "Global Cybersecurity Vendor",
      "segment": "Enterprise SaaS ($450M ARR)",
      "situation": "Field reps were wasting 14 hours weekly manually researching Fortune 500 accounts, resulting in 48-day discovery cycle delays.",
      "approach": "Deployed Revenue Intelligence to ingest dark-funnel intent surges and automatically construct 6-stakeholder committee graphs.",
      "result": "Cut research overhead by 11 hours per rep weekly while increasing first-meeting discovery qualification rates from 24% to 68%.",
      "metrics": [
        {
          "label": "Weekly Research Saved",
          "value": "11.5 hrs/rep"
        },
        {
          "label": "Discovery Qualification",
          "value": "68.4%"
        },
        {
          "label": "Pipeline Velocity Gain",
          "value": "+34 Days"
        }
      ]
    },
    {
      "title": "Industrial Supply Platform",
      "segment": "B2B Distribution ($1.2B GMV)",
      "situation": "Single-threaded deal execution caused 44% of large enterprise contracts to slip or stall in procurement.",
      "approach": "Implemented Buying Committee Intelligence alerts to detect missing CPO and legal personas 60 days before contract submission.",
      "result": "Increased multi-threaded engagement from 1.6 to 4.8 stakeholders per deal, reducing late-stage contract stall rates by 58%.",
      "metrics": [
        {
          "label": "Committee Stakeholders",
          "value": "4.8 Avg"
        },
        {
          "label": "Deal Stall Reduction",
          "value": "-58.0%"
        },
        {
          "label": "Net Win Rate Lift",
          "value": "+14.6 pts"
        }
      ]
    }
  ],
  "dashboardTitle": "Unified Revenue Intelligence Telemetry",
  "dashboardSubtitle": "Real-time account surge indices, buying committee multi-threading depth, and behavioral win probabilities across the active enterprise pipeline.",
  "dashboardBadge": "Operational Telemetry",
  "dashboardMetrics": [
    {
      "label": "Active Intent Surges",
      "value": "142 Accounts",
      "change": "+28% MoM",
      "note": "Exceeding 85 Intent Velocity Index"
    },
    {
      "label": "Committee Coverage",
      "value": "5.2 Stakeholders",
      "change": "+2.4 vs Benchmark",
      "note": "Verified multi-threading depth"
    },
    {
      "label": "Signal-to-Opportunity",
      "value": "38.6%",
      "change": "+14.2 pts",
      "note": "Conversion within 30-day window"
    },
    {
      "label": "Forecast Predictability",
      "value": "96.8%",
      "change": "<3.2% Variance",
      "note": "Validated against closed revenue"
    }
  ],
  "dashboardVisualType": "matrix",
  "kpiFrameworkTitle": "Revenue Intelligence Operational Performance Metrics",
  "kpis": [
    {
      "name": "Intent Surge Lead Time",
      "formula": "Date of First Outreach - Date of Competitor First Contact",
      "definition": "Days gained by identifying in-market accounts before competitors detect formal evaluation activity.",
      "reportingWindow": "Monthly",
      "illustrativeValue": "48.5 Days",
      "interpretation": "Higher lead time guarantees competitive mindshare advantage and preferred RFP specification framing."
    },
    {
      "name": "Committee Multi-Threading Ratio",
      "formula": "Verified Engaged Stakeholders / Minimum Required Committee Personas",
      "definition": "The proportion of decision-making personas actively engaged in discovery and evaluation milestones.",
      "reportingWindow": "Weekly Pipeline Inspection",
      "illustrativeValue": "86.4%",
      "interpretation": "Deals exceeding 80% multi-threading demonstrate a 3.4x higher closing probability than single-threaded deals."
    },
    {
      "name": "Discovery Research Efficiency",
      "formula": "Total Qualified Opportunities Created / AE Pre-Call Preparation Hours",
      "definition": "Measures rep operational efficiency in converting synthesized intelligence into pipeline opportunities.",
      "reportingWindow": "Quarterly",
      "illustrativeValue": "2.84 Opps / Hr",
      "interpretation": "Automation of account synthesis allows reps to dedicate over 60% of work capacity directly to buyer conversations."
    }
  ],
  "governanceTitle": "Revenue Intelligence Enterprise Governance & Data Privacy",
  "governanceSubtitle": "Strict algorithmic transparency, SOC2 Type II compliance, and human verification controls across every ingested signal.",
  "governanceItems": [
    {
      "area": "First-Party Intent Ethics",
      "policy": "Only permitted, first-party cookie telemetry and anonymized B2B publisher IP clusters are ingested.",
      "humanCheckpoint": "Privacy Officer certifies all data collection schemas against GDPR, CCPA, and regional privacy frameworks.",
      "auditTrail": "Cryptographically hashed data lineage stored for all ingested IP and behavioral records."
    },
    {
      "area": "Account Synthesis Validation",
      "policy": "AI-synthesized account dossiers must cite verified corporate filings with exact SEC or public URL references.",
      "humanCheckpoint": "Account Executives review and confirm strategic initiative assumptions before executive discovery calls.",
      "auditTrail": "Full model reasoning traces and source citations logged for every generated enterprise brief."
    },
    {
      "area": "Executive Intervention Protocol",
      "policy": "Algorithmic forecast adjustments exceeding $250K require explicit CRO authorization.",
      "humanCheckpoint": "Chief Revenue Officer signs off on all risk-flagged opportunity interventions during weekly review.",
      "auditTrail": "Immutable forecast adjustment logs maintaining time-stamped rep and manager override notes."
    }
  ]
};
