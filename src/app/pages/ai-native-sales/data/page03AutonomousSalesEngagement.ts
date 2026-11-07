import { AiSalesCapabilityPageData } from '../types';

export const page03AutonomousSalesEngagement: AiSalesCapabilityPageData = {
  "pageNumber": "03",
  "title": "Autonomous Sales Engagement",
  "slug": "autonomous-sales-engagement",
  "canonicalPath": "/ai-native-sales/autonomous-sales-engagement",
  "eyebrow": "AI NATIVE SALES / SALES ENGAGEMENT",
  "heroHeadline": "Personalize and Coordinate Buyer Interactions at Scale",
  "heroSupporting": "Modern B2B buying committees involve multiple stakeholders with distinct functional priorities. Autonomous Sales Engagement orchestrates personalized communication across channels, transcribes meetings, equips internal champions with digital sales rooms, and accelerates consensus without sacrificing brand governance.",
  "primaryCTA": "Explore Sales Engagement",
  "secondaryCTA": "Book a Consultation",
  "targetDecisionMakers": [
    "Chief Revenue Officers (CROs)",
    "VP Sales & Enablement",
    "Enterprise Account Executives",
    "Customer Journey Architects",
    "Commercial Operations Directors"
  ],
  "visualTheme": "engagement",
  "businessProblemTitle": "Why High-Volume Outreach Fails in Complex Enterprise Sales",
  "businessProblemSubtitle": "Spray-and-pray email sequences and fragmented communication channels destroy trust with executive buyers, leaving champions unsupported and committees deadlocked.",
  "businessProblems": [
    {
      "id": "generic-cadence",
      "title": "Boilerplate Sequence Fatigue",
      "symptom": "Executive response rates plunge below 1% as buyers recognize automated email templates within seconds.",
      "rootCause": "Cadence tools optimize for sending volume rather than contextual relevance and persona-tailored business value.",
      "impact": "Burned territory accounts and negative brand perception among Tier-1 prospective enterprise clients."
    },
    {
      "id": "champion-abandonment",
      "title": "Unsupported Champions & Weak Business Cases",
      "symptom": "Champions love the demo but cannot explain ROI or security architecture to their CFO and CISO.",
      "rootCause": "Reps send 60-page PDF brochures rather than collaborative, interactive digital business cases.",
      "impact": "Over 55% of enterprise opportunities stall after initial excitement, lost to internal inertia or budget reallocation."
    },
    {
      "id": "untracked-conversations",
      "title": "Dark Conversational Blind Spots",
      "symptom": "Action items, stakeholder objections, and competitor mentions voiced on calls are lost because reps take incomplete notes.",
      "rootCause": "Disjointed meeting tools that do not automatically synchronize conversational insights into CRM opportunity records.",
      "impact": "Delayed follow-ups, forgotten customer commitments, and deal slippage during rep handoffs."
    }
  ],
  "subSubmenus": [
    {
      "id": "hyper-personalization-engine",
      "title": "Hyper-Personalization Engine",
      "badge": "Contextual Synthesis",
      "businessQuestion": "How do we tailor every email, deck, and proposal to the exact business imperatives of each stakeholder persona?",
      "description": "Generates persona-specific commercial messaging grounded in real-time company filings, executive priorities, and competitive context.",
      "businessProblem": "Reps lack time to customize proposals for 6 distinct committee roles, sending generic materials that fail to resonate with technical or financial evaluators.",
      "howItWorks": "Synthesizes account data, buyer role challenges, and verified industry benchmarks to draft communication addressing each stakeholder’s specific decision criteria.",
      "informationUsed": [
        "Stakeholder functional role, seniority, and department responsibilities",
        "Recent corporate strategic initiatives and public investor commentary",
        "Specific software applications currently deployed within the prospect’s domain",
        "Verified customer ROI benchmarks from identical industry segments"
      ],
      "workflowSupport": "Instantly provides reps with role-tailored email drafts, custom meeting slides, and executive summary one-pagers.",
      "outcomesSupported": "Increases executive email response rates from 3.2% to 24.8% and accelerates proposal approval turnaround by 40%.",
      "humanOversight": "Reps review, edit, and personally sign off on every piece of generated communication before transmission.",
      "kpis": [
        {
          "metric": "Executive Response Rate",
          "definition": "Responses from VP/C-suite personas to tailored correspondence",
          "target": "24.8%"
        },
        {
          "metric": "Personalization Relevance Score",
          "definition": "Evaluated alignment of messaging to verified customer business goals",
          "target": "94.2%"
        },
        {
          "metric": "Collateral Customization Speed",
          "definition": "Minutes required to produce bespoke account proposal deck",
          "target": "< 4 Mins"
        }
      ]
    },
    {
      "id": "autonomous-email-engagement",
      "title": "Autonomous Email Engagement",
      "badge": "Governed Inboxing",
      "businessQuestion": "How can we maintain consistent, context-aware email dialogues with enterprise buyers while strictly preserving domain reputation?",
      "description": "Governed email engagement workflows that adjust cadence frequency, messaging angles, and tone based on real-time buyer engagement telemetry.",
      "businessProblem": "Traditional cadences blast rigid sequences that irritate buyers who asked for follow-ups next month, causing spam reports.",
      "howItWorks": "Natural language understanding analyzes buyer reply sentiment (out of office, objection, referral, timing delay), adapting workflow sequences dynamically.",
      "informationUsed": [
        "Inbound email reply text, sentiment polarity, and intent classification",
        "Historical engagement timestamps and executive open-rate patterns",
        "Domain sender reputation scores and ISP deliverability thresholds",
        "Calendar availability and scheduling link clickstream telemetry"
      ],
      "workflowSupport": "Handles routine follow-ups, meeting confirmations, and scheduling coordination autonomously, routing complex objections to reps.",
      "outcomesSupported": "Increases reply-to-meeting conversion by 3.2x while keeping spam complaint rates below 0.02%.",
      "humanOversight": "Reps receive real-time notifications for nuanced customer objections and can pause or override automated sequences with one click.",
      "kpis": [
        {
          "metric": "Reply Sentiment Accuracy",
          "definition": "Percentage of inbound emails correctly classified by commercial intent",
          "target": "97.5%"
        },
        {
          "metric": "Meeting Booking Velocity",
          "definition": "Average hours from positive buyer interest to confirmed calendar invite",
          "target": "< 1.5 Hours"
        },
        {
          "metric": "Inbox Deliverability Health",
          "definition": "Deliverability rate across secondary and corporate email domains",
          "target": "99.4%"
        }
      ]
    },
    {
      "id": "ai-sales-outreach",
      "title": "AI Sales Outreach",
      "badge": "Multi-Touch Orchestration",
      "businessQuestion": "What is the optimal combination of phone, email, social, and executive touches required to connect with target decision-makers?",
      "description": "Coordinates multi-touch outreach campaigns synchronizing email, LinkedIn touches, direct mail gifts, and executive phone outreach.",
      "businessProblem": "Sales outreach is uncoordinated; reps send 5 emails in a row with zero phone or social touches, resulting in channel fatigue.",
      "howItWorks": "Applies reinforcement learning algorithms to determine the highest-converting channel sequence based on persona habits and past engagement.",
      "informationUsed": [
        "Channel responsiveness history by executive persona and seniority level",
        "Local timezone, business hours, and regional holiday calendars",
        "Active social media posting frequency and LinkedIn presence",
        "Corporate office reopening status and verified physical mailing addresses"
      ],
      "workflowSupport": "Generates daily prioritized task lists for reps combining click-to-dial calls, personalized social touches, and follow-up emails.",
      "outcomesSupported": "Improves overall prospect engagement rates by 44% and eliminates channel exhaustion across enterprise territories.",
      "humanOversight": "Sales managers set channel frequency caps to prevent prospect over-saturation across corporate domains.",
      "kpis": [
        {
          "metric": "Multi-Touch Engagement Rate",
          "definition": "Percentage of targeted prospects who engage across at least 1 channel",
          "target": "42.6%"
        },
        {
          "metric": "Connect-to-Meeting Rate",
          "definition": "Percentage of live phone conversations converted into discovery meetings",
          "target": "28.4%"
        },
        {
          "metric": "Channel Sequence Efficiency",
          "definition": "Touches required per scheduled discovery meeting",
          "target": "< 6.8 Touches"
        }
      ]
    },
    {
      "id": "conversation-intelligence",
      "title": "Conversation Intelligence",
      "badge": "Live Transcription",
      "businessQuestion": "What critical buyer objections, competitor claims, and budget parameters were discussed during our customer discovery calls?",
      "description": "Transcribes, analyzes, and summarizes sales calls in real time, automatically extracting action items, buying committee roles, and risk signals.",
      "businessProblem": "Reps take incomplete notes during calls, missing subtle customer objections and failing to log next steps in CRM records.",
      "howItWorks": "Real-time speech-to-text models parse conversational audio, performing speaker separation, sentiment tracking, and CRM field extraction.",
      "informationUsed": [
        "High-fidelity conversational audio streams from Zoom, Teams, and Google Meet",
        "Speaker voiceprint identification and corporate hierarchy mapping",
        "Competitor mention dictionaries and product feature taxonomies",
        "Stage-gate exit criteria and MEDDPICC qualification frameworks"
      ],
      "workflowSupport": "Automatically updates CRM opportunity fields, drafts executive follow-up emails, and alerts managers to deal risks within 5 minutes of call close.",
      "outcomesSupported": "Saves reps 6 hours weekly on administrative CRM data entry and boosts next-step execution compliance to 98%.",
      "humanOversight": "Reps review and approve AI-generated meeting summaries before they are logged to public CRM records or emailed to clients.",
      "kpis": [
        {
          "metric": "Action Item Extraction Precision",
          "definition": "Percentage of agreed call action items accurately captured and assigned",
          "target": "96.8%"
        },
        {
          "metric": "CRM Hygiene Automation",
          "definition": "Opportunity fields populated automatically from call transcripts",
          "target": "84.2%"
        },
        {
          "metric": "Follow-Up Delivery Speed",
          "definition": "Minutes from call completion to client follow-up email draft creation",
          "target": "< 5 Mins"
        }
      ]
    },
    {
      "id": "multichannel-engagement",
      "title": "Multichannel Engagement",
      "badge": "Unified Touchpoints",
      "businessQuestion": "How can we maintain seamless conversational continuity when buyers switch between email, SMS, LinkedIn, and web chat?",
      "description": "Unifies buyer touchpoints across all digital channels into a singular conversation thread, ensuring context is never lost during channel transitions.",
      "businessProblem": "Buyers interact on LinkedIn, email, and live chat with different reps or disjointed contexts, forcing them to repeat requirements.",
      "howItWorks": "An identity resolution engine merges communication IDs (LinkedIn profile, email address, corporate phone) into one unified customer thread.",
      "informationUsed": [
        "Cross-platform conversational history and message timestamps",
        "Buyer channel preferences and response speed benchmarks",
        "Shared digital sales room document views and chat questions",
        "Live webinar attendance, Q&A transcripts, and booth visit telemetry"
      ],
      "workflowSupport": "Enables reps to respond directly from their primary console regardless of which channel the buyer used to communicate.",
      "outcomesSupported": "Reduces buyer communication friction, increasing conversation velocity and short-circuiting competitor channel advantages.",
      "humanOversight": "Reps control message routing and receive alerts if a buyer engages across multiple channels simultaneously.",
      "kpis": [
        {
          "metric": "Channel Switching Latency",
          "definition": "Seconds required to surface unified conversation context across channels",
          "target": "< 2 Sec"
        },
        {
          "metric": "Cross-Channel Resolution Rate",
          "definition": "Inquiries resolved within first response across any channel",
          "target": "88.6%"
        },
        {
          "metric": "Buyer CSAT on Engagement",
          "definition": "Buyer satisfaction rating regarding communication responsiveness",
          "target": "4.9 / 5.0"
        }
      ]
    },
    {
      "id": "buyer-enablement-engine",
      "title": "Buyer Enablement Engine",
      "badge": "Digital Sales Rooms",
      "businessQuestion": "How can we empower internal champions with the exact ROI tools, security briefs, and architecture decks required to sell internally?",
      "description": "Provisions personalized Digital Sales Rooms (DSRs) equipped with mutual action plans, interactive ROI calculators, and security compliance whitepapers.",
      "businessProblem": "Champions fail to build internal consensus because vendors send disjointed email attachments that get lost in client inboxes.",
      "howItWorks": "Generates secure, co-branded digital workspaces where buyers access proposal documents, invite internal colleagues, and track project timelines.",
      "informationUsed": [
        "Bespoke client logo assets, corporate colors, and executive challenge statements",
        "Interactive financial ROI models tailored to client operating cost assumptions",
        "Verified SOC2, ISO 27001, and HIPAA compliance attestations and security whitepapers",
        "Mutual Action Plan milestone completion dates and stakeholder sign-offs"
      ],
      "workflowSupport": "Tracks which internal stakeholders visit the DSR, which pages they read, and where they spend time, alerting the AE in real time.",
      "outcomesSupported": "Increases champion internal selling effectiveness, cutting deal stall rates in procurement by 48%.",
      "humanOversight": "Account Executives curate room contents and review internal stakeholder access requests before granting access to confidential pricing.",
      "kpis": [
        {
          "metric": "DSR Stakeholder Engagement",
          "definition": "Average buying committee members who access and review DSR assets",
          "target": "6.4 Members"
        },
        {
          "metric": "Time-to-Consensus Acceleration",
          "definition": "Days saved securing unanimous buying committee sign-off via DSR",
          "target": "21 Days"
        },
        {
          "metric": "Security Review Cycle Time",
          "definition": "Days required to complete infosec review when using pre-populated DSR",
          "target": "< 10 Days"
        }
      ]
    },
    {
      "id": "stakeholder-consensus-acceleration",
      "title": "Stakeholder Consensus Acceleration",
      "badge": "Consensus AI",
      "businessQuestion": "How do we identify and bridge conflicting priorities between finance, security, engineering, and business champions in enterprise deals?",
      "description": "Maps conflicting committee priorities, identifies unaddressed stakeholder concerns, and recommends compromise frameworks to build unanimous consensus.",
      "businessProblem": "Deals fail at the finish line because engineering loves the product but finance refuses the payment terms, or security blocks the API architecture.",
      "howItWorks": "Analyzes stakeholder conversation transcripts and objection history to identify divergent priorities, suggesting pre-approved contractual and architectural options.",
      "informationUsed": [
        "Individual stakeholder objection history and expressed decision criteria",
        "Departmental charter goals (e.g. CISO risk aversion vs CRO velocity requirements)",
        "Pre-approved commercial flexibility options (payment terms, SLAs, indemnification caps)",
        "Historical compromise structures used to win similar enterprise accounts"
      ],
      "workflowSupport": "Equips champions with specific compromise slides and executive briefs designed to address finance and security concerns proactively.",
      "outcomesSupported": "Lowers late-stage deal loss rate due to committee deadlock from 38% to under 12%.",
      "humanOversight": "Sales leadership and legal teams review and authorize any proposed deviations from standard terms before presentation.",
      "kpis": [
        {
          "metric": "Deadlock Resolution Rate",
          "definition": "Percentage of contested committee reviews successfully advanced to contract signature",
          "target": "82.4%"
        },
        {
          "metric": "Late-Stage Loss Reduction",
          "definition": "Decrease in opportunities lost to \"no decision\" after proposal submission",
          "target": "-68.0%"
        },
        {
          "metric": "Consensus Velocity Index",
          "definition": "Days required to transition from proposal presentation to legal review",
          "target": "< 14 Days"
        }
      ]
    },
    {
      "id": "intelligent-follow-up-automation",
      "title": "Intelligent Follow-Up Automation",
      "badge": "Smart Cadences",
      "businessQuestion": "How do we ensure every meeting commitment, document request, and prospect inquiry is fulfilled within minutes rather than days?",
      "description": "Generates context-aware follow-up packages containing exact meeting summaries, requested technical links, and confirmed next-step timelines.",
      "businessProblem": "Reps take 24-48 hours to send follow-up emails after meetings, losing buyer momentum and allowing competitor alternatives to enter the discussion.",
      "howItWorks": "Automatically parses call action items upon meeting termination, drafts a comprehensive follow-up email, attaches requested collateral, and stages it for rep review.",
      "informationUsed": [
        "Call recording transcripts and explicit commitments made by rep and client",
        "Repository of verified customer case studies, technical specs, and API documentation",
        "Mutual action plan milestones and calendar scheduling links",
        "Client communication tone and formality preferences"
      ],
      "workflowSupport": "Presents the rep with a finished, personalized follow-up draft ready to send within 3 minutes of concluding any sales conversation.",
      "outcomesSupported": "Shortens average meeting-to-follow-up turnaround from 28 hours to 8 minutes, boosting deal progression velocity by 32%.",
      "humanOversight": "Reps review, edit, and authorize every follow-up package before it leaves their corporate email client.",
      "kpis": [
        {
          "metric": "Follow-Up Turnaround Speed",
          "definition": "Average minutes from call completion to follow-up transmission",
          "target": "< 15 Mins"
        },
        {
          "metric": "Next-Meeting Hold Rate",
          "definition": "Percentage of scheduled next-step meetings that take place without cancellation",
          "target": "92.4%"
        },
        {
          "metric": "Commitment Fulfillment Score",
          "definition": "Audit score verifying all promised documents were delivered in follow-up",
          "target": "99.1%"
        }
      ]
    }
  ],
  "workflowTitle": "The Autonomous Sales Engagement Operating Model",
  "workflowSubtitle": "From initial contact to unanimous committee consensus: orchestrating contextual, multi-stakeholder buyer journeys with strict human governance.",
  "workflowSteps": [
    {
      "step": "01",
      "name": "Persona & Context Synthesis",
      "description": "Ingests account dossiers, buyer roles, and commercial triggers to construct bespoke value propositions.",
      "inputs": "Account 10-K data, stakeholder title, past engagement history",
      "aiAction": "Drafts tailored messaging matching persona vocabulary, pain points, and decision criteria.",
      "humanGate": "Representative approves tone, hooks, and value drivers.",
      "output": "Bespoke multi-channel outreach draft"
    },
    {
      "step": "02",
      "name": "Multi-Touch Orchestration",
      "description": "Executes synchronized touchpoints across email, phone, social, and direct mail channels.",
      "inputs": "Channel preference benchmarks, timezone schedules, buyer engagement telemetry",
      "aiAction": "Optimizes touchpoint sequence timing based on real-time open and response signals.",
      "humanGate": "RevOps enforces sending volume caps and domain reputation thresholds.",
      "output": "Live multi-channel outreach execution"
    },
    {
      "step": "03",
      "name": "Meeting Intelligence & CRM Sync",
      "description": "Transcribes customer calls in real time, extracting objections, next steps, and MEDDPICC criteria.",
      "inputs": "Zoom/Teams audio streams, participant roster, historical deal records",
      "aiAction": "Summarizes key discussion points, updates CRM fields, and generates action item task lists.",
      "humanGate": "Rep verifies summary accuracy before syncing to public CRM record.",
      "output": "Clean CRM update & instant follow-up package"
    },
    {
      "step": "04",
      "name": "Digital Sales Room Provisioning",
      "description": "Launches collaborative buying rooms equipped with ROI calculators, security whitepapers, and mutual plans.",
      "inputs": "Proposal terms, client branding assets, compliance requirements",
      "aiAction": "Builds customized interactive room and tracks internal stakeholder viewing analytics.",
      "humanGate": "AE reviews stakeholder access and authorizes commercial term visibility.",
      "output": "Live Digital Sales Room & consensus telemetry"
    }
  ],
  "useCases": [
    {
      "title": "Enterprise Healthcare Cloud Provider",
      "segment": "Regulated B2B Technology ($240M ARR)",
      "situation": "Complex multi-stakeholder reviews with hospital CISOs, CFOs, and medical directors caused 11-month deal cycles and 42% slippage.",
      "approach": "Deployed Buyer Enablement Engine and Digital Sales Rooms to provide HIPAA compliance briefs and custom ROI models directly to champions.",
      "result": "Shortened sales cycle duration by 44 days and increased multi-stakeholder consensus approval rates from 48% to 84%.",
      "metrics": [
        {
          "label": "Cycle Duration",
          "value": "-44 Days"
        },
        {
          "label": "Consensus Approval",
          "value": "84.2%"
        },
        {
          "label": "Champion DSR Views",
          "value": "8.6 Avg"
        }
      ]
    },
    {
      "title": "Global Supply Chain Software",
      "segment": "Logistics Infrastructure ($520M ARR)",
      "situation": "Reps were taking over 30 hours to send post-meeting follow-ups, resulting in stalled discovery momentum and dropped next steps.",
      "approach": "Activated Conversation Intelligence and Intelligent Follow-Up Automation to produce instant meeting summaries and customized follow-up packages.",
      "result": "Reduced follow-up delivery latency from 32 hours to 9 minutes, increasing stage 2-to-stage 3 opportunity progression by 36%.",
      "metrics": [
        {
          "label": "Follow-Up Latency",
          "value": "< 9 Mins"
        },
        {
          "label": "Stage Progression",
          "value": "+36.0%"
        },
        {
          "label": "Weekly Rep Time Saved",
          "value": "6.4 hrs/rep"
        }
      ]
    }
  ],
  "dashboardTitle": "Autonomous Engagement & Consensus Telemetry",
  "dashboardSubtitle": "Live buyer engagement velocity, Digital Sales Room stakeholder telemetry, and conversational sentiment trends across the pipeline.",
  "dashboardBadge": "Operational Telemetry",
  "dashboardMetrics": [
    {
      "label": "Executive Reply Rate",
      "value": "26.4%",
      "change": "+18.2 pts",
      "note": "VP/C-suite verified response"
    },
    {
      "label": "Follow-Up Speed",
      "value": "8.4 Mins",
      "change": "92% Faster",
      "note": "Meeting close to client transmission"
    },
    {
      "label": "Active DSRs",
      "value": "186 Rooms",
      "change": "+34% MoM",
      "note": "Average 5.8 stakeholders engaged"
    },
    {
      "label": "Consensus Win Rate",
      "value": "68.2%",
      "change": "+22.4 pts",
      "note": "Multi-threaded committee deals"
    }
  ],
  "dashboardVisualType": "journey",
  "kpiFrameworkTitle": "Sales Engagement Operational Performance Metrics",
  "kpis": [
    {
      "name": "Executive Engagement Index",
      "formula": "Verified VP/C-Suite Stakeholders Actively Communicating / Total Target Accounts",
      "definition": "Measures the organization’s ability to engage authentic executive decision-makers rather than lower-level non-buyers.",
      "reportingWindow": "Monthly",
      "illustrativeValue": "48.2%",
      "interpretation": "High executive engagement correlates directly with protected gross margins and larger contract values."
    },
    {
      "name": "Follow-Up Execution Velocity",
      "formula": "Time of Follow-Up Email Transmission - Meeting Conclusion Timestamp",
      "definition": "Speed of delivering comprehensive meeting notes, technical answers, and mutual action plan milestones to buyers.",
      "reportingWindow": "Weekly Pipeline Inspection",
      "illustrativeValue": "12.4 Mins",
      "interpretation": "Sub-15 minute follow-up turnaround establishes enterprise operational excellence and maintains deal momentum."
    },
    {
      "name": "Committee Consensus Rate",
      "formula": "Deals with Unanimous Business, Security, and Finance Approval / Total Submitted Proposals",
      "definition": "Proportion of complex enterprise proposals that achieve full multi-departmental approval without deadlock.",
      "reportingWindow": "Quarterly",
      "illustrativeValue": "82.6%",
      "interpretation": "High consensus rates indicate that buyer enablement collateral successfully addressed cross-functional objections."
    }
  ],
  "governanceTitle": "Sales Engagement Governance & Communication Security",
  "governanceSubtitle": "Strict brand voice adherence, PII redaction on call recordings, and human-in-the-loop approval on all customer communications.",
  "governanceItems": [
    {
      "area": "Conversational PII & PCI Redaction",
      "policy": "Audio streams and transcripts automatically redact credit card numbers, passwords, and sensitive personal health information.",
      "humanCheckpoint": "Security Officer conducts monthly compliance audits on recording storage and encryption standards.",
      "auditTrail": "Zero-knowledge encryption keys maintained with automated 90-day audio purge policies."
    },
    {
      "area": "Brand Tone & Regulatory Guardrails",
      "policy": "AI generation models are bounded by approved corporate value drivers, legal disclaimers, and warranty restrictions.",
      "humanCheckpoint": "Product Marketing and Legal review and update message generation constraints quarterly.",
      "auditTrail": "Complete prompt and output version history stored for every generated piece of sales collateral."
    },
    {
      "area": "Mandatory Human Authorization",
      "policy": "No autonomous email, proposal, or pricing concession can be transmitted to a client without human rep sign-off.",
      "humanCheckpoint": "Sales representative must click \"Approve and Transmit\" inside the CRM interface for every client touchpoint.",
      "auditTrail": "Individual user authentication and time-stamped authorization records stored for every sent message."
    }
  ]
,
  "relatedCapabilities": [
  {
    "title": "Autonomous Pipeline Generation",
    "path": "/ai-native-sales/autonomous-pipeline-generation",
    "summary": "Feed high-intent, qualified accounts directly into personalized multi-threaded engagement workflows.",
    "badge": "Pipeline Ingestion"
  },
  {
    "title": "Intelligent Sales Agents",
    "path": "/ai-native-sales/intelligent-sales-agents",
    "summary": "Power engagement with AI SDR and Account Executive agents that adapt conversations in real time.",
    "badge": "AI Agents"
  },
  {
    "title": "Revenue Acceleration",
    "path": "/ai-native-sales/revenue-acceleration",
    "summary": "Optimize deal progression, eliminate stalls, and prescribe next-best-actions to close deals faster.",
    "badge": "Acceleration Engine"
  }
],
  "closingCtaHeadline": "Drive Buying Committee Consensus and Accelerate Deal Momentum",
  "closingCtaDescription": "Replace generic email spam with contextual, multi-threaded buyer enablement that builds stakeholder alignment and shortens sales cycles."
};
