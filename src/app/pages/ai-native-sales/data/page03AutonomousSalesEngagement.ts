import { AiSalesCapabilityPageData } from '../types';

export const page03AutonomousSalesEngagement: AiSalesCapabilityPageData = {
  pageNumber: '03',
  title: 'Autonomous Sales Engagement',
  slug: 'autonomous-sales-engagement',
  canonicalPath: '/ai-native-sales/autonomous-sales-engagement',
  eyebrow: 'AI NATIVE SALES / SALES ENGAGEMENT',
  heroHeadline: 'Make Every Sales Interaction More Relevant, Timely, and Useful',
  heroSupporting: 'Modern buyers expect relevant information, timely responses, and clear answers to business questions. Autonomous Sales Engagement connects contextual messaging, conversation insights, coordinated follow-ups, buyer enablement, and stakeholder alignment to help sales teams guide complex buying journeys.',
  primaryCTA: 'Explore Sales Engagement',
  secondaryCTA: 'Book a Consultation',
  targetDecisionMakers: [
    'Chief Revenue Officers (CROs)',
    'VP Enterprise Sales',
    'Heads of Sales Enablement',
    'Strategic Account Directors',
    'Customer Success Executives'
  ],
  visualTheme: 'engagement',

  businessProblemTitle: 'Why Buyer Engagement Breaks Down Across the Sales Cycle',
  businessProblemSubtitle: 'B2B enterprise buyers are overwhelmed with generic pitches, slow follow-ups, and disconnected sales reps who fail to capture the nuances of internal buying committees.',
  businessProblems: [
    {
      id: 'generic-noise',
      title: 'Token Personalization vs. Genuine Relevance',
      symptom: 'Prospects dismiss outreach that merely inserts their first name or college alma mater into a canned product pitch.',
      rootCause: 'Reps lack the tools to synthesize company-specific strategic initiatives into customized value models.',
      impact: 'Meeting acceptance drops to sub-1% levels, alienating key executive decision-makers.'
    },
    {
      id: 'lost-insights',
      title: 'Lost Call Intelligence & Uncaptured Commitments',
      symptom: 'Crucial objections, action items, and technical constraints voiced in calls are lost because rep CRM notes are sparse.',
      rootCause: 'Manual post-call administrative logging takes 20+ minutes per meeting and is inconsistently executed.',
      impact: 'Follow-ups omit critical customer concerns, eroding buyer trust and causing momentum to stall.'
    },
    {
      id: 'buyer-friction',
      title: 'The Internal Champion Enablement Vacuum',
      symptom: 'Champions fail to convince their CFO or internal buying committee because sales teams provide only generic slide decks.',
      rootCause: 'Vendors do not equip champions with custom business cases, ROI models, and security validation documentation.',
      impact: 'Over 60% of enterprise sales cycles end in "no decision" as internal consensus fails to materialize.'
    }
  ],

  subSubmenus: [
    {
      id: 'hyper-personalization-engine',
      title: 'Hyper-Personalization Engine',
      badge: 'Contextual Synthesis',
      businessQuestion: 'How do we tailor every email, deck, and proposal to the exact business imperatives of each stakeholder persona?',
      description: 'Generates persona-specific commercial messaging grounded in real-time company filings, executive priorities, and competitive context.',
      businessProblem: 'Reps lack time to customize proposals for 6 distinct committee roles, sending generic materials that fail to resonate with technical or financial evaluators.',
      howItWorks: 'Synthesizes account data, buyer role challenges, and verified industry benchmarks to draft communication addressing each stakeholder’s specific decision criteria.',
      informationUsed: [
        'Stakeholder functional role, seniority, and department responsibilities',
        'Recent corporate strategic initiatives and public investor commentary',
        'Specific software applications currently deployed within the prospect’s domain',
        'Verified customer ROI benchmarks from identical industry segments'
      ],
      workflowSupport: 'Instantly provides reps with role-tailored email drafts, custom meeting slides, and executive summary one-pagers.',
      outcomesSupported: 'Increases executive email response rates from 3.2% to 24.8% and accelerates proposal approval turnaround by 40%.',
      humanOversight: 'Reps review, edit, and personally sign off on every piece of generated communication before transmission.',
      kpis: [
        { metric: 'Executive Response Rate', definition: 'Responses from VP/C-suite personas to tailored correspondence', target: '24.8%' },
        { metric: 'Personalization Relevance Score', definition: 'Evaluated alignment of messaging to verified customer business goals', target: '94.2%' },
        { metric: 'Collateral Customization Speed', definition: 'Minutes required to produce bespoke account proposal deck', target: '< 4 Mins' }
      ]
    },
    {
      id: 'conversation-intelligence',
      title: 'Conversation Intelligence',
      badge: 'Speech & Sentiment Telemetry',
      businessQuestion: 'What critical commitments, objections, and buying signals were voiced in this meeting, and what must happen next?',
      description: 'Extracts action items, budget signals, competitive mentions, and sentiment shifts from sales calls, automatically updating CRM records.',
      businessProblem: 'Crucial deal nuances are forgotten because reps take hurried manual notes or fail to update CRM opportunity fields.',
      howItWorks: 'Transcribes permitted virtual meetings, parses conversational dynamics via specialized revenue LLMs, and maps extracted commitments into CRM tasks.',
      informationUsed: [
        'Consented audio and video meeting recordings and transcriptions',
        'Speaker diarization, talk-to-listen ratios, and interruption frequencies',
        'Competitor battlecards, pricing matrices, and objection handling guidelines',
        'Historical closed-won conversational question-asking patterns'
      ],
      workflowSupport: 'Instantly generates post-call executive summaries, draft follow-up emails, and CRM field updates within 90 seconds of call completion.',
      outcomesSupported: 'Saves 35 minutes per meeting in administrative overhead and eliminates unaddressed follow-up commitments.',
      humanOversight: 'Account Executive reviews generated call summary and confirms assigned action items before CRM sync.',
      kpis: [
        { metric: 'Post-Call Follow-up Velocity', definition: 'Time from call end to sent comprehensive follow-up email', target: '< 15 Mins' },
        { metric: 'Action Item Capture Accuracy', definition: 'Percentage of customer and rep commitments accurately identified', target: '98.5%' },
        { metric: 'Admin Time Saved Per Meeting', definition: 'Minutes saved per sales rep on post-meeting logging', target: '25 Mins' }
      ]
    },
    {
      id: 'autonomous-engagement',
      title: 'Autonomous Engagement',
      badge: 'Journey Orchestration',
      businessQuestion: 'How do we coordinate timely, multi-channel touchpoints across the entire buying committee without dropping balls?',
      description: 'Coordinates calendar invites, follow-up reminders, content delivery, and touchpoint pacing across all active committee members.',
      businessProblem: 'Deals go dark between meetings because reps get distracted by urgent tasks and fail to nurture secondary committee members.',
      howItWorks: 'Monitors deal stage duration, email engagement telemetry, and milestone deadlines, staging timely follow-up actions for rep authorization.',
      informationUsed: [
        'Buyer email open and content engagement timestamps',
        'Agreed mutual action plan deadlines and milestone targets',
        'CRM opportunity stage history and inactivity thresholds',
        'Corporate holiday schedules and buyer timezone constraints'
      ],
      workflowSupport: 'Alerts reps when a deal has had no interaction for 5 business days and prepares tailored re-engagement drafts.',
      outcomesSupported: 'Reduces stalled opportunity rates by 48% and ensures zero customer inquiries go unanswered past 2 hours.',
      humanOversight: 'Reps maintain complete authority over communication schedules and can pause or cancel engagement sequences anytime.',
      kpis: [
        { metric: 'Stalled Deal Reduction', definition: 'Percentage decrease in opportunities experiencing >14 days of inactivity', target: '-48.0%' },
        { metric: 'Touchpoint Cadence Adherence', definition: 'Follow-ups completed on or before agreed mutual action plan dates', target: '96.2%' },
        { metric: 'Buyer Content Engagement', definition: 'Percentage of sent enablement resources viewed by buying committee', target: '78.4%' }
      ]
    },
    {
      id: 'buyer-enablement',
      title: 'Buyer Enablement',
      badge: 'Digital Sales Room',
      businessQuestion: 'What tools, business cases, and security documentation does our champion need to win internal executive approval?',
      description: 'Provides collaborative digital workspaces where champions, procurement, and technical evaluators access tailored business cases and ROI models.',
      businessProblem: 'Internal champions struggle to articulate vendor value to their CFO and CISO, leading to budget rejections and delayed deals.',
      howItWorks: 'Assembles secure, personalized digital buyer rooms containing customer-specific ROI calculators, technical architectures, and compliance dossiers.',
      informationUsed: [
        'Customer economic baseline metrics and projected operational cost savings',
        'SOC2, ISO27001, GDPR, and enterprise security whitepapers',
        'Interactive implementation timelines and resource allocation models',
        'Customer champion feedback and procurement guidelines'
      ],
      workflowSupport: 'Tracks which internal stakeholders visit the digital sales room, what pages they read, and what concerns they highlight.',
      outcomesSupported: 'Enables champions to secure internal executive alignment 3 weeks faster with 2.8x higher win rates on competitive deals.',
      humanOversight: 'Sales engineering and legal teams verify technical specifications and compliance answers before publishing to buyer rooms.',
      kpis: [
        { metric: 'Champion Business Case Approval', definition: 'Internal CFO approval rate for proposals supported by digital rooms', target: '84.6%' },
        { metric: 'Evaluation Cycle Reduction', definition: 'Days saved during security and technical review phase', target: '21 Days' },
        { metric: 'Multi-Stakeholder Room Engagement', definition: 'Average unique committee members reviewing shared resources', target: '4.8 Users' }
      ]
    },
    {
      id: 'consensus-acceleration',
      title: 'Consensus Acceleration',
      badge: 'Committee Alignment',
      businessQuestion: 'How do we resolve conflicting stakeholder priorities and drive unanimous committee agreement?',
      description: 'Identifies dissenting stakeholder opinions, unresolved security objections, and procurement concerns early to facilitate consensus.',
      businessProblem: 'Sales cycles stall near the finish line because legal, security, or procurement raise unexpected roadblocks late in negotiations.',
      howItWorks: 'Analyzes stakeholder sentiment and unanswered questions across all interactions, highlighting consensus gaps and recommending targeted alignment workshops.',
      informationUsed: [
        'Stakeholder sentiment scores and historical voting behavior',
        'Security questionnaire progress and unresolved exception tickets',
        'Procurement master service agreement (MSA) redline patterns',
        'Executive sponsor alignment confirmation records'
      ],
      workflowSupport: 'Produces a real-time Committee Consensus Matrix showing green/yellow/red status across Economic, Technical, and Legal personas.',
      outcomesSupported: 'Cuts late-stage deal slippage from 38% to under 8%, ensuring predictable quarterly closing velocity.',
      humanOversight: 'Account Executive coordinates executive sponsor alignment meetings to resolve identified yellow/red objections.',
      kpis: [
        { metric: 'Late-Stage Deal Slippage Rate', definition: 'Committed deals failing to close within the forecasted month', target: '< 8.0%' },
        { metric: 'Objection Resolution Velocity', definition: 'Days required to resolve complex technical or commercial redlines', target: '4.5 Days' },
        { metric: 'Committee Unanimity Index', definition: 'Percentage of enterprise opportunities reaching unanimous sign-off', target: '92.4%' }
      ]
    }
  ],

  workflowTitle: 'Connected Autonomous Sales Engagement Workflow',
  workflowSubtitle: 'A synchronized engagement architecture guiding enterprise deals from discovery to consensus and signature.',
  workflowSteps: [
    {
      step: '01',
      name: 'Pre-Meeting Synthesis & Personalization',
      description: 'Generates customized discovery frameworks and agenda briefs tailored to attendees.',
      inputs: 'Attendee LinkedIn profiles, corporate 10-K filings, prior CRM history',
      aiAction: 'Drafts bespoke discovery questions and value hypotheses.',
      humanGate: 'Rep personalizes tone and confirms agenda focus.',
      output: 'Executive Discovery Brief & Tailored Slide Deck'
    },
    {
      step: '02',
      name: 'Real-Time Conversation Analysis',
      description: 'Transcribes consented sales meeting, capturing objections and commitments.',
      inputs: 'Virtual meeting audio stream, attendee visual cues, shared screen notes',
      aiAction: 'Extracts action items, maps competitor mentions, and flags sentiment drop-offs.',
      humanGate: 'Rep reviews auto-generated summary immediately post-call.',
      output: 'CRM Opportunity Update & Post-Call Action Plan'
    },
    {
      step: '03',
      name: 'Digital Sales Room Provisioning',
      description: 'Launches collaborative digital environment equipped with custom business case.',
      inputs: 'Customer financial metrics, security requirements, implementation scope',
      aiAction: 'Configures interactive ROI calculator and uploads verified security certifications.',
      humanGate: 'Solutions Architect validates technical architecture model.',
      output: 'Live Secure Digital Sales Room for Champion'
    },
    {
      step: '04',
      name: 'Consensus Tracking & Acceleration',
      description: 'Monitors committee document views, answers objections, and accelerates sign-off.',
      inputs: 'Digital room telemetry, security questionnaire responses, MSA redlines',
      aiAction: 'Highlights unengaged committee roles and suggests targeted alignment steps.',
      humanGate: 'AE coordinates executive peer-to-peer alignment call.',
      output: 'Unanimous Multi-Stakeholder Consensus & Contract Execution'
    }
  ],

  useCases: [
    {
      title: 'Global Enterprise Consensus Acceleration',
      segment: 'Enterprise HR Tech & Workforce Analytics',
      situation: 'Deals averaging $380k ARR consistently stalled in security and compliance review for 90+ days, with CHRO champions unable to answer CISO questions.',
      approach: 'Deployed Digital Sales Rooms and Consensus Acceleration to provide pre-approved SOC2 mapping, self-serve security assessments, and custom CFO business cases.',
      result: 'Security review duration collapsed from 92 days to 16 days; deal close rate improved by 36% across Fortune 500 prospects.',
      metrics: [
        { label: 'Security Velocity', value: '-76 Days' },
        { label: 'Win Rate Lift', value: '+36.0%' }
      ]
    },
    {
      title: 'Automated Post-Call Intelligence at Scale',
      segment: 'Commercial Logistics & Fleet Software',
      situation: 'Sales reps conducted 15 demos weekly but logged virtually zero notes in Salesforce, leaving management blind to recurring competitor objections.',
      approach: 'Implemented Conversation Intelligence to autonomously capture objections, competitor pricing mentions, and follow-up tasks into Salesforce within 2 minutes of call end.',
      result: 'CRM data completeness reached 99.4%, reps saved 6 hours weekly, and follow-up turnaround dropped from 48 hours to 18 minutes.',
      metrics: [
        { label: 'Rep Time Saved', value: '6.2 hrs/wk' },
        { label: 'Follow-up Time', value: '18 Mins' }
      ]
    },
    {
      title: 'Multi-Persona Executive Hyper-Personalization',
      segment: 'Cloud Database & Data Engineering Platform',
      situation: 'Technical sales reps were pitching Chief Data Officers with raw infrastructure specs, failing to connect to board-level margin optimization initiatives.',
      approach: 'Leveraged Hyper-Personalization Engine to auto-generate dual-track collateral: technical benchmarks for engineering managers and margin ROI for the CDO/CFO.',
      result: 'Accelerated enterprise pilot approvals by 3x and achieved unanimous consensus across both technical and financial committee members.',
      metrics: [
        { label: 'Pilot Approval Rate', value: '88.2%' },
        { label: 'Average Deal Size', value: '+42.5%' }
      ]
    }
  ],

  dashboardTitle: 'Buyer Engagement & Committee Consensus Telemetry',
  dashboardSubtitle: 'Real-time visibility into digital sales room engagement, conversational sentiment, and objection resolution velocity.',
  dashboardBadge: 'Engagement Ops v2.4',
  dashboardMetrics: [
    { label: 'Buyer Room Engagement', value: '78.4%', change: '+24.2% MoM', note: 'Active committee members logging in' },
    { label: 'Average Consensus Depth', value: '4.8 Roles', change: '+2.2 vs benchmark', note: 'Verified multi-threaded alignment' },
    { label: 'Post-Call Follow-up Time', value: '14 Mins', change: '-94% reduction', note: 'Average turnaround from meeting end' },
    { label: 'Late-Stage Deal Slippage', value: '7.8%', change: 'Down from 38%', note: 'Forecast variance under control' }
  ],
  dashboardVisualType: 'journey',

  kpiFrameworkTitle: 'Sales Engagement KPI & Consensus Measurement Framework',
  kpis: [
    {
      name: 'Post-Meeting Follow-up Velocity',
      formula: 'Timestamp of Sent Follow-up Email - Timestamp of Meeting Conclusion',
      definition: 'Average elapsed minutes between sales meeting end and delivery of comprehensive executive follow-up brief.',
      reportingWindow: 'Weekly Aggregate',
      illustrativeValue: '14 Mins',
      interpretation: 'Faster follow-ups correlate directly with deal momentum; industry manual benchmark is 24-48 hours.'
    },
    {
      name: 'Digital Sales Room Engagement Depth',
      formula: 'Unique Committee Visitors ÷ Total Identified Committee Members',
      definition: 'The proportion of buying committee members who interact with shared enablement resources prior to formal decision.',
      reportingWindow: 'Per Opportunity',
      illustrativeValue: '78.4%',
      interpretation: 'Deals with >75% room engagement close at 2.4x higher rates than deals relying on emailed attachments.'
    },
    {
      name: 'Consensus Acceleration Lead Time',
      formula: 'Discovery Acceptance Date to Final Unanimous Agreement Date',
      definition: 'Days required to transition an opportunity from initial qualification to full multi-stakeholder consensus.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '38 Days',
      interpretation: 'Represents a 42-day reduction vs traditional enterprise sales cycles.'
    },
    {
      name: 'Unresolved Objection Aging',
      formula: 'Days an identified technical, commercial, or security objection remains open',
      definition: 'Average duration required to provide satisfactory documentation or meetings to resolve buyer concerns.',
      reportingWindow: 'Bi-Weekly',
      illustrativeValue: '4.2 Days',
      interpretation: 'Objections aging >14 days increase deal loss probability by 62%.'
    }
  ],

  governanceTitle: 'Conversational Ethics, Consent & Data Security Governance',
  governanceSubtitle: 'Strict enterprise controls covering virtual meeting recording consent, automated PII scrubbing, and representative message verification.',
  governanceItems: [
    {
      area: 'Call Recording & Wiretap Consent',
      policy: 'Automated bots announce recording clearly in chat, audio prompts, and calendar invites, adhering to two-party consent laws globally.',
      humanCheckpoint: 'Host rep can pause, resume, or permanently delete recordings with one click anytime.',
      auditTrail: 'Signed electronic consent records stored with meeting metadata.'
    },
    {
      area: 'PII & Confidentiality Scrubbing',
      policy: 'All transcripts automatically redact credit card numbers, passwords, personal addresses, and sensitive health information.',
      humanCheckpoint: 'InfoSec officers review automated redaction precision scores monthly.',
      auditTrail: 'Pre- and post-redaction token verification logs preserved in encrypted vault.'
    },
    {
      area: 'Digital Sales Room Access Control',
      policy: 'Buyer rooms require corporate domain authentication with watermarked documents, expiring links, and role-based permissions.',
      humanCheckpoint: 'AE confirms prospect email domains before granting access to confidential pricing matrices.',
      auditTrail: 'Full IP, timestamp, and duration audit log for every document page viewed.'
    },
    {
      area: 'Brand Tone & Commercial Commitments',
      policy: 'AI models are strictly forbidden from committing to custom pricing, SLA guarantees, or legal terms without executive approval.',
      humanCheckpoint: 'Legal and deal desk workflows must countersign any generated proposal before signature link is issued.',
      auditTrail: 'Complete contract modification history preserved in version-controlled repository.'
    }
  ],

  relatedCapabilities: [
    {
      title: 'Revenue Acceleration',
      path: '/ai-native-sales/revenue-acceleration',
      summary: 'Inspect deal war rooms, assess risk telemetry, and eliminate sales cycle bottlenecks.',
      badge: 'Pillar 05'
    },
    {
      title: 'Pricing Intelligence',
      path: '/ai-native-sales/pricing-intelligence',
      summary: 'Equip your buyer enablement rooms with dynamic margin-optimized pricing models.',
      badge: 'Pillar 06'
    },
    {
      title: 'Intelligent Sales Agents',
      path: '/ai-native-sales/intelligent-sales-agents',
      summary: 'Let specialized AE and RevOps agents automate pre-call research and post-call CRM sync.',
      badge: 'Pillar 04'
    }
  ],

  closingCtaHeadline: 'Equip Your Buyers to Sell for You Internally',
  closingCtaDescription: 'Turn slow, fragmented sales conversations into high-velocity consensus. Schedule a briefing to explore Autonomous Sales Engagement.'
};

