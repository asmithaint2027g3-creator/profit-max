import { PageContentData } from '../../app/types/offeringsIndustries';

export const industriesStartupsData: PageContentData = {
  slug: 'startups',
  route: '/industries/startups',
  pageNumber: 'ICP 05',
  pageCategory: 'Industry',
  title: 'Startups & Scaleups',
  headlineHighlight: 'Find Your Repeatable Revenue Engine.',
  eyebrow: 'PRODUCT-MARKET FIT VALIDATION, FOUNDER SALES & UNIT ECONOMICS',
  description: 'Help early-stage and venture-backed founders validate customer demand, discover true product-market fit signals, automate founder-led sales, acquire initial enterprise customers, and build repeatable unit economics before burning capital.',
  targetAudience: {
    primary: 'Startup Founders, Co-Founders, Technical CEOs, and Early-Stage Sales Leaders',
    secondary: 'Founding Account Executives, Heads of Growth, and Product Marketing Leads',
    executives: 'Venture Capital Partners, Angel Investors, and Seed-Stage Board Members.'
  },
  heroVisual: {
    imageSrc: '/images/hero-revenue-acceleration.png',
    altText: 'Startup Revenue Architecture & Product-Market Fit Engine',
    badgeText: 'Startup Engine: 0-to-1 Validation'
  },
  keyStats: [
    { label: 'Time-to-First 10 Customers', metric: '-50%', context: 'Compression in initial commercial validation cycles' },
    { label: 'Founder Time Reclaimed', metric: '18 hrs/wk', context: 'Administrative sales busywork automated' },
    { label: 'Runway Preservation', metric: '6-9 mos', context: 'Capital saved by validating demand before hiring reps' },
    { label: 'Pilot-to-Paid Conversion', metric: '72%', context: 'On empirically calibrated customer trials' }
  ],
  challenges: [
    {
      id: 'f-su-premature-scaling',
      title: 'Premature Scaling & Sales Rep Burn',
      situation: 'Founders raise seed or Series A capital and immediately hire 4-6 sales reps before establishing an objective, repeatable sales playbook.',
      whyItMatters: 'Reps fail because the product value proposition is still shifting, burning hundreds of thousands of dollars in unearned salaries and wasted leads.',
      commercialConsequence: 'Crushed cash runway, missed investor milestones, and painful sales team layoffs.',
      whyTraditionalMethodsFail: 'Founders expect sales reps to figure out product-market fit rather than codifying repeatable founder sales playbooks first.',
      requiredExecutiveDecision: 'Automate founder-led sales to achieve the first 20 repeatable customers before scaling full-time sales headcount.'
    },
    {
      id: 'f-su-false-pmf',
      title: 'False Product-Market Fit Signals',
      situation: 'Founders confuse polite encouragement from friendly network contacts with genuine commercial willingness to pay.',
      whyItMatters: 'Building features based on non-paying users leads to complex software that real enterprise buyers refuse to purchase.',
      commercialConsequence: 'Wasted engineering cycles, high churn after free trials, and delayed commercial traction.',
      whyTraditionalMethodsFail: 'Founders conduct qualitative "Do you like this idea?" interviews rather than testing objective pricing and commitment thresholds.',
      requiredExecutiveDecision: 'Validate product-market fit using empirical skin-in-the-game commitment gates (pre-orders, signed pilots, security questionnaires).'
    },
    {
      id: 'f-su-untested-pricing',
      title: 'Underpricing & Margin-Destroying Pilots',
      situation: 'Founders offer 90-day free pilots or tiny $50/month pricing out of fear that enterprise prospects will reject higher prices.',
      whyItMatters: 'Underpriced contracts attract demanding, high-maintenance clients who consume all engineering capacity while generating negligible revenue.',
      commercialConsequence: 'Exhausted support teams, negative unit economics, and an inability to achieve venture-scale ARR milestones.',
      whyTraditionalMethodsFail: 'Founders guess pricing based on competitor entry tiers rather than quantifying the economic Cost-of-Inaction for the buyer.',
      requiredExecutiveDecision: 'Construct value-based pricing models and paid pilot agreements that require customer investment from Day 1.'
    }
  ],
  capabilities: [
    {
      id: 'icp-market-validation',
      title: 'ICP & Market Demand Validation',
      groupName: 'Market Validation & PMF Signals',
      shortSummary: 'Test commercial buyer hypotheses, identify urgent industry pain points, and prioritize segments with proven willingness to pay.',
      businessChallenge: 'Founders spend 12 months building software in a vacuum, only to discover upon launch that nobody is willing to pay for it.',
      whyItMatters: 'Building the wrong product is the #1 reason startups fail, completely incinerating seed capital and founder equity.',
      whatProfitMachinesDoes: 'We design structured Demand Validation Sprints that test customer willingness to pay using high-intent landing pages and cold outreach tests.',
      howItWorks: [
        'Formulate 3-4 distinct customer problem hypotheses across target industry sectors.',
        'Deploy focused B2B outbound and high-intent search campaigns presenting the specific solution narrative.',
        'Track hard commercial commitment signals: meeting booking rates, pilot inquiries, and budget willingness.',
        'Synthesize findings into an objective ICP Validation Scorecard ranking segments by commercial urgency.'
      ],
      relevantInputs: ['Founder vision and product architectural notes', 'Target industry job titles and company profiles', 'Competitor feature and pricing matrices', 'Initial prototype demos'],
      deliverables: ['ICP Demand Validation Scorecard', 'Beachhead Segment Selection Matrix', 'Commercial Urgency Diagnostic Report'],
      businessValue: 'Validates real buyer demand before spending millions on software engineering, de-risking the entire startup journey.',
      kpis: [
        { name: 'Problem Resonance Rate', formula: 'Target Prospects Agreeing to Discovery Call ÷ Total Contextually Contacted Prospects', purpose: 'Measures pain urgency.' },
        { name: 'Commercial Willingness-to-Pay Ratio', formula: 'Prospects Accepting Paid Pilot Terms ÷ Total Evaluated Prospects', purpose: 'Validates commercial value.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Seed-Stage Technical Founder',
        scenario: 'Founder had an open-source data tool and was unsure whether to sell to fintech, healthcare, or e-commerce companies.',
        actionTaken: 'Executed ICP Demand Validation testing problem narratives across all 3 sectors with 50 targeted prospects each.',
        outcomeObserved: 'Discovered fintech security teams had 5x higher regulatory urgency and accepted $40k annual contracts, validating the fintech beachhead in 3 weeks.'
      },
      visualRecommendation: {
        type: 'Startup Demand Validation Funnel',
        description: 'Funnel diagram showing transition from broad problem hypotheses to cold meeting conversion and paid pilot sign-off.'
      },
      relatedCapabilities: [
        { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' },
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' }
      ],
      nextStepCta: { label: 'Validate Startup ICP', link: '#consultation' }
    },
    {
      id: 'pmf-signal-discovery',
      title: 'Product-Market Fit (PMF) Signal Discovery',
      groupName: 'Market Validation & PMF Signals',
      shortSummary: 'Extract empirical retention signals, organic user referral loops, feature usage stickiness, and Sean Ellis "must-have" survey data.',
      businessChallenge: 'Founders rely on optimistic vanity metrics (website signups, social praise) while underlying user retention quietly collapses.',
      whyItMatters: 'Pouring sales and marketing fuel on a product without product-market fit accelerates cash burn and customer churn.',
      whatProfitMachinesDoes: 'We build rigorous PMF Signal Telemetry tracking cohort retention, weekly active user stickiness, and customer disappointment metrics.',
      howItWorks: [
        'Deploy the standardized Sean Ellis survey ("How would you feel if you could no longer use this product?").',
        'Analyze daily and weekly product telemetry to identify core "sticky" feature actions that correlate with long-term retention.',
        'Isolate the sub-cohort of users who achieve extreme value and map their common operational characteristics.',
        'Deliver a PMF Health Scorecard identifying whether the product is ready to scale or requires core iteration.'
      ],
      relevantInputs: ['Product user session event logs', 'Weekly and monthly active user cohorts', 'Customer survey responses', 'Cancellation and drop-off feedback'],
      deliverables: ['Product-Market Fit Health Scorecard', 'Core Feature Retention Analysis', 'User Persona Value Segmentation Matrix'],
      businessValue: 'Provides an objective, data-backed answer to whether your startup has achieved real product-market fit before raising or spending growth capital.',
      kpis: [
        { name: 'Sean Ellis PMF Score', formula: '% Active Users Answering "Very Disappointed" if Product Disappeared', purpose: 'Target is >40%.' },
        { name: 'Cohort Retention Flattening Rate', formula: '% Active Users Retained at Week 8+ across Vintage Cohorts', purpose: 'Proves baseline stickiness.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Series A SaaS Founder & CEO',
        scenario: 'Platform had 4,000 signups but 30-day user retention was a dismal 8%, leaving investors hesitant to fund a Series A round.',
        actionTaken: 'Conducted PMF Signal Discovery, discovering a small sub-segment of 200 inventory managers who used the product daily with 82% retention.',
        outcomeObserved: 'Refocused the entire company on inventory managers, raising the Sean Ellis score from 14% to 54% and securing a $6M Series A.'
      },
      visualRecommendation: {
        type: 'Cohort Retention Curve & PMF Horizon',
        description: 'Multi-cohort retention graph showing legacy declining curves vs flattened, stable retention in prioritized PMF segments.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'Customer Success Engine', path: '/offerings/customer-success' }
      ],
      nextStepCta: { label: 'Discover PMF Signals', link: '#consultation' }
    },
    {
      id: 'first-customer-acquisition',
      title: 'First-Customer (0-to-1) Acquisition Architecture',
      groupName: 'Founder Sales & Early Traction',
      shortSummary: 'Design focused, highly personalized commercial campaigns to secure your first 10-20 referenceable enterprise lighthouse customers.',
      businessChallenge: 'Founders have zero brand recognition, no case studies, and no references, making initial enterprise sales seem impossible.',
      whyItMatters: 'Winning your first 10 paying customers is the hardest phase of startup growth; without referenceable logos, scale is impossible.',
      whatProfitMachinesDoes: 'We design specialized "Lighthouse Customer Programs" that offer enterprise buyers co-innovation privileges, executive attention, and shared risk.',
      howItWorks: [
        'Identify 100 early-adopter enterprise accounts with urgent, active pain and forward-thinking innovation mandates.',
        'Craft personalized executive-to-executive outreach narratives highlighting the opportunity to co-design the future of the category.',
        'Structure attractive "Lighthouse Charter Customer" terms (guaranteed SLA support, input into product roadmap, public case study commitment).',
        'Guide the founder through structured discovery calls, technical evaluations, and contract execution.'
      ],
      relevantInputs: ['Target enterprise executive contact lists', 'Product prototype capabilities', 'Founder industry background and credentials', 'Standard lighthouse agreement terms'],
      deliverables: ['Lighthouse Customer Program Charter', 'Founder-to-Executive Cold Outreach Playbook', 'Early-Adopter Pilot Agreement Template'],
      businessValue: 'Secures your first 10-20 paying enterprise reference customers, generating critical early revenue and unassailable industry social proof.',
      kpis: [
        { name: 'Lighthouse Outreach Meeting Rate', formula: 'Executive Discovery Calls Booked ÷ Total Contacted Lighthouse Prospects', purpose: 'Measures narrative power.' },
        { name: 'Pilot-to-Paid Contract Conversion', formula: 'Lighthouse Pilots Converting to Standard Paid Agreements ÷ Total Pilots', purpose: 'Validates commercial value.' }
      ],
      illustrativeUseCase: {
        targetUser: 'First-Time Technical Founder',
        scenario: 'Founder had built an AI code review tool but had zero corporate customers and could not get meetings with enterprise engineering leaders.',
        actionTaken: 'Launched a Lighthouse Customer campaign offering 10 mid-tier tech companies direct access to the founding engineering team.',
        outcomeObserved: 'Secured 8 paying enterprise lighthouse customers in 60 days, generating $240k in initial ARR and 4 public video testimonials.'
      },
      visualRecommendation: {
        type: 'Lighthouse Customer Conversion Pipeline',
        description: 'Flowchart showing transition from founder cold executive outreach to co-innovation pilot and public case study conversion.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Enterprise Organizations', path: '/industries/enterprise' }
      ],
      nextStepCta: { label: 'Land Lighthouse Customers', link: '#consultation' }
    },
    {
      id: 'founder-led-sales-automation',
      title: 'Founder-Led Sales Automation & Copilots',
      groupName: 'Founder Sales & Early Traction',
      shortSummary: 'Automate prospect research, CRM deal tracking, meeting transcription, follow-ups, and calendar scheduling so founders can focus on selling.',
      businessChallenge: 'Founders spend 20 hours a week hand-typing CRM notes, scheduling calls, and drafting follow-up emails, taking time away from product engineering.',
      whyItMatters: 'Administrative friction causes founders to drop balls on promising deals while slowing down product development.',
      whatProfitMachinesDoes: 'We deploy lightweight, autonomous sales copilots that handle all back-office administrative tasks automatically for the founder.',
      howItWorks: [
        'Transcribe founder customer calls, automatically extracting pain points, agreed action items, and budget numbers.',
        'Update lightweight CRM fields automatically with zero manual data entry required from the founder.',
        'Draft polished, highly personalized follow-up emails for founder review and one-click dispatch within 5 minutes of call completion.',
        'Automate meeting scheduling with dynamic qualification questions embedded in calendar links.'
      ],
      relevantInputs: ['Founder calendar availability', 'Call recording audio with consent', 'Lightweight CRM account mapping', 'Product demo presentation assets'],
      deliverables: ['Founder Sales Copilot Integration', 'Automated Meeting-to-CRM Sync', 'Instant Follow-Up Email Generator'],
      businessValue: 'Reclaims 18+ hours per week for the founder, allowing them to lead 3x more customer discovery calls while keeping engineering momentum.',
      kpis: [
        { name: 'Founder Selling Hours Ratio', formula: 'Hours Spent in Customer Discovery Calls ÷ Total Weekly Hours', purpose: 'Tracks selling focus.' },
        { name: 'Meeting Follow-Up Speed', formula: 'Minutes from Call End to Follow-Up Email Delivery', purpose: 'Maintains deal momentum.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Solo Technical Founder',
        scenario: 'Founder was overwhelmed trying to write code at night while conducting 15 customer calls weekly and typing follow-up notes.',
        actionTaken: 'Deployed Founder-Led Sales Automation copilots that auto-generated meeting recaps and populated pipeline stages.',
        outcomeObserved: 'Saved 18 hours per week, allowing founder to close 6 enterprise deals while delivering the core product release on schedule.'
      },
      visualRecommendation: {
        type: 'Founder Sales Automation Ecosystem',
        description: 'Diagram showing automated recording, NLP note extraction, CRM stage update, and instant follow-up drafting around the founder.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' }
      ],
      nextStepCta: { label: 'Automate Founder Sales', link: '#consultation' }
    },
    {
      id: 'lean-demand-generation',
      title: 'Lean Demand Generation & Inbound Experiments',
      groupName: 'Demand & Growth Experiments',
      shortSummary: 'Deploy capital-efficient organic content, founder thought leadership, high-intent search capture, and cold outbound with minimal ad spend.',
      businessChallenge: 'Startups blow their initial seed capital on expensive paid social ads that burn cash with zero sustainable pipeline generation.',
      whyItMatters: 'Paid ad dependence drains startup cash runway before product-market fit is proven, driving the company to premature insolvency.',
      whatProfitMachinesDoes: 'We architect lean, organic-first demand generation engines that leverage founder expertise, community building, and high-intent SEO.',
      howItWorks: [
        'Turn founder technical insights into authoritative LinkedIn posts, technical blog posts, and open-source contributions.',
        'Capture bottom-of-the-funnel commercial search queries (e.g. "open-source alternative to [Competitor]").',
        'Engage target buyers in technical community Slack groups, Discord servers, and developer forums with zero spam.',
        'Run controlled, small-budget ($500/mo) ad experiments testing messaging hooks before committing significant capital.'
      ],
      relevantInputs: ['Founder technical expertise and perspective', 'Target buyer community forums and networks', 'Keyword search volume for competitor alternatives', 'Customer case studies'],
      deliverables: ['Lean Demand Generation Playbook', 'Founder Thought Leadership Cadence', 'High-Intent Alternative SEO Blueprint'],
      businessValue: 'Generates a predictable stream of qualified inbound sales inquiries at a fraction of the cost of paid digital advertising.',
      kpis: [
        { name: 'Inbound Sourced Qualified Pipeline', formula: 'Pipeline ARR Generated from Organic/Founder Content ÷ Total Pipeline ARR', purpose: 'Measures organic pull.' },
        { name: 'Blended Cost per Lead (CPL)', formula: 'Total Demand Program Spend ÷ Total Ingested Inquiries', purpose: 'Monitors capital efficiency.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Pre-Seed B2B Founder',
        scenario: 'Startup had only $60k in cash reserves and could not afford a marketing agency or paid ad spend.',
        actionTaken: 'Executed Lean Demand Generation, publishing weekly technical teardowns of legacy software architectures on LinkedIn.',
        outcomeObserved: 'Generated 34 inbound enterprise demo requests in 60 days with $0 paid ad spend, securing 4 paying pilot customers.'
      },
      visualRecommendation: {
        type: 'Lean Demand Multi-Channel Flowchart',
        description: 'Funnel diagram showing organic founder thought leadership, community discussions, and high-intent SEO converting to pipeline.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Launch Lean Demand', link: '#consultation' }
    },
    {
      id: 'ai-assisted-prospecting',
      title: 'AI-Assisted Outbound Prospecting Systems',
      groupName: 'Demand & Growth Experiments',
      shortSummary: 'Automate account list building, technographic verification, trigger event monitoring, and contextual outreach drafting for founding teams.',
      businessChallenge: 'Founders and founding sales reps spend hours manually researching prospects, sending 20 emails a week with low connection rates.',
      whyItMatters: 'Slow outbound velocity prevents startups from generating enough pipeline volume to iterate on their pitch and hit quarterly targets.',
      whatProfitMachinesDoes: 'We configure autonomous outbound engines that monitor trigger events (executive changes, funding news) to generate tailored outreach drafts.',
      howItWorks: [
        'Build targeted account lists using verified firmographic and technographic databases matching your early ICP.',
        'Deploy web crawlers to monitor target accounts for trigger events (job postings for tools you integrate with, new funding).',
        'Synthesize findings into an Account Intelligence Dossier and generate individualized, contextual outreach drafts.',
        'Enable founders to review, customize, and dispatch 50+ highly personalized executive emails in under 30 minutes daily.'
      ],
      relevantInputs: ['Target account domain registries', 'Job posting and hiring telemetry', 'Founder value proposition playbooks', 'Executive contact directories'],
      deliverables: ['Automated Outbound Prospecting Engine', 'Account Intelligence Dossier Generator', 'Contextual Outreach Cadence Templates'],
      businessValue: 'Multiplies founding team outbound output by 5x while maintaining deep executive personalization and high reply rates.',
      kpis: [
        { name: 'Contextual Email Reply Rate', formula: 'Positive Prospect Replies ÷ Total Contextual Emails Sent', purpose: 'Validates messaging power.' },
        { name: 'Outbound Meeting Booking Rate', formula: 'Discovery Meetings Booked ÷ Total Target Accounts Contacted', purpose: 'Measures pipeline generation.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Founding Account Executive',
        scenario: 'First sales hire at a seed-stage startup was manually writing 15 cold emails a day with poor 2% reply rates.',
        actionTaken: 'Deployed AI-Assisted Outbound Prospecting triggering outreach based on target companies hiring specific engineering roles.',
        outcomeObserved: 'Expanded outreach to 75 personalized emails daily, lifting reply rates to 8.4% and booking 22 discovery meetings monthly.'
      },
      visualRecommendation: {
        type: 'AI-Assisted Outbound Architecture',
        description: 'Workflow diagram showing trigger event detection, firmographic enrichment, NLP draft generation, and founder review.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'B2B Businesses', path: '/industries/b2b' }
      ],
      nextStepCta: { label: 'Automate Outbound Prospecting', link: '#consultation' }
    },
    {
      id: 'lead-qualification-conversion',
      title: 'Lead Qualification & Conversion Frameworks',
      groupName: 'Founder Sales & Early Traction',
      shortSummary: 'Establish objective qualification criteria, rapid discovery agendas, and paid trial commitment agreements to protect founder time.',
      businessChallenge: 'Founders get excited by any meeting request, spending hours on calls with curious consultants and students who will never buy.',
      whyItMatters: 'Every hour spent pitching an unqualified lead is an hour taken away from genuine commercial prospects or product development.',
      whatProfitMachinesDoes: 'We implement objective qualification rubrics that filter out tire-kickers and structure discovery calls around business pain.',
      howItWorks: [
        'Embed pre-qualification questions in meeting booking links (company size, timeline, current software in place).',
        'Structure a disciplined 20-minute Discovery Agenda: 5 min Context, 10 min Pain & Workflow Investigation, 5 min Next Steps.',
        'Require prospects to commit to a mutual action step (e.g. introducing their technical lead) before granting product demos.',
        'Enforce paid trial or proof-of-concept (POC) agreements with clear, documented success criteria.'
      ],
      relevantInputs: ['Meeting scheduling form fields', 'Discovery call question rubrics', 'Paid pilot contract terms', 'Disqualification criteria guidelines'],
      deliverables: ['20-Minute Discovery Call Framework', 'Mutual Action Plan (MAP) Template', 'Paid Proof-of-Concept Agreement'],
      businessValue: 'Guarantees the founder’s time is invested exclusively in serious buyers, lifting discovery-to-pilot conversion rates by 40%.',
      kpis: [
        { name: 'Discovery to Paid Pilot Conversion', formula: 'Prospects Progressing to Paid Pilot ÷ Total Completed Discovery Calls', purpose: 'Measures qualification rigor.' },
        { name: 'Unqualified Meeting Disqualification Rate', formula: 'Inbound Inquiries Disqualified prior to Discovery Call ÷ Total Inquiries', purpose: 'Protects founder time.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Technical Founder & CEO',
        scenario: 'Founder held 40 discovery calls in one month, but only 2 converted into actual product evaluations.',
        actionTaken: 'Implemented pre-qualification questions and a structured 20-minute discovery framework requiring mutual action.',
        outcomeObserved: 'Reduced discovery calls to 18 per month, but closed 7 paid pilot agreements, saving 30 hours of founder time.'
      },
      visualRecommendation: {
        type: '20-Minute Discovery Call Architecture',
        description: 'Structured agenda timeline: 0-5m Executive Context, 5-15m Pain Diagnostics, 15-20m Mutual Action Agreement.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' }
      ],
      nextStepCta: { label: 'Upgrade Lead Qualification', link: '#consultation' }
    },
    {
      id: 'pricing-monetization-validation',
      title: 'Pricing & Monetization Validation Experiments',
      groupName: 'Unit Economics & Financial Runway',
      shortSummary: 'Test value metrics, packaging tiers, pilot pricing, and willingness to pay with live customers before locking pricing structures.',
      businessChallenge: 'Founders underprice their software by 50-80% out of imposter syndrome, leaving millions in uncaptured revenue on the table.',
      whyItMatters: 'Selling enterprise software at consumer prices makes it mathematically impossible to fund sales reps, engineering, or customer support.',
      whatProfitMachinesDoes: 'We run structured willingness-to-pay experiments, testing 2x-5x price increases and value-based packaging tiers.',
      howItWorks: [
        'Conduct Van Westendorp price sensitivity and Gabor-Granger willingness-to-pay interviews with active discovery prospects.',
        'Identify the core value metric that scales naturally with customer success (active users, processed transactions, monitored assets).',
        'Test increasing pricing tiers across sequential batches of 10 prospective customer proposals.',
        'Formulate transparent enterprise packaging tiers with minimum annual contract thresholds.'
      ],
      relevantInputs: ['Customer contract proposals and feedback', 'Competitor pricing tear-downs', 'Customer ROI calculation models', 'Target customer annual software budgets'],
      deliverables: ['Pricing & Packaging Architecture Blueprint', 'Willingness-to-Pay Validation Scorecard', 'Enterprise Value Realization Calculator'],
      businessValue: 'Commands premium contract pricing from Day 1, dramatically increasing average contract value and accelerating the path to $1M ARR.',
      kpis: [
        { name: 'Average Contract Value (ACV) Expansion', formula: '(Post-Validation ACV - Baseline ACV) ÷ Baseline ACV', purpose: 'Measures price capture.' },
        { name: 'Price Resistance Pushback Ratio', formula: 'Prospects Rejecting Proposal Solely on Price ÷ Total Delivered Proposals', purpose: 'Target is 15-25%.' }
      ],
      illustrativeUseCase: {
        targetUser: 'B2B SaaS Founder',
        scenario: 'Founder was selling software at $100/month ($1,200/year) and needed 830 customers to reach $1M ARR, which seemed impossible.',
        actionTaken: 'Restructured pricing around an annual enterprise license tier at $18,000/year backed by a quantified ROI business case.',
        outcomeObserved: 'Next 10 prospects accepted the $18k price with zero pushback, reducing the required customer count for $1M ARR from 830 to 55.'
      },
      visualRecommendation: {
        type: 'Pricing Elasticity & Willingness-to-Pay Curve',
        description: 'Van Westendorp price sensitivity curve showing Point of Marginal Cheapness, Indifference Price, and Point of Marginal Expensiveness.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'SaaS & Recurring-Revenue', path: '/industries/saas' }
      ],
      nextStepCta: { label: 'Validate Pricing Strategy', link: '#consultation' }
    },
    {
      id: 'cac-ltv-runway-analytics',
      title: 'CAC, LTV & Financial Runway Analytics',
      groupName: 'Unit Economics & Financial Runway',
      shortSummary: 'Model customer acquisition unit economics, payback duration, gross margin contribution, and cash runway scenarios for board reviews.',
      businessChallenge: 'Founders track monthly bank cash balances without modeling customer acquisition payback, waking up to a cash cliff with 3 months of runway left.',
      whyItMatters: 'Venture investors demand top-quartile unit economics; failing to demonstrate a clear path to LTV:CAC profitability kills Series A fundraising.',
      whatProfitMachinesDoes: 'We construct dynamic startup unit economic models that track fully loaded CAC, gross margin, payback periods, and cash burn horizons.',
      howItWorks: [
        'Calculate fully loaded Customer Acquisition Cost (ad spend, tooling costs, sales salaries) divided by new customers acquired.',
        'Model the exact calendar months required for gross margin from new customers to repay their initial acquisition cost.',
        'Calculate Customer Lifetime Value (LTV) and LTV-to-CAC ratios segmented by acquisition channel.',
        'Deliver dynamic 18-month cash runway simulation models with hiring triggers tied to ARR milestones.'
      ],
      relevantInputs: ['Monthly cash burn and payroll ledgers', 'Ad spend and marketing tooling invoices', 'Subscription revenue and billing schedules', 'Historical customer churn data'],
      deliverables: ['Startup Unit Economics Model', '18-Month Cash Runway Simulation Cockpit', 'Series A Fundraising Financial Package'],
      businessValue: 'Protects startup cash runway and provides the rigorous, institutional unit economics required to raise institutional venture capital.',
      kpis: [
        { name: 'CAC Payback Duration', formula: 'Fully Loaded CAC ÷ (Monthly Recurring Revenue × Gross Margin %)', purpose: 'Target is <12 months.' },
        { name: 'LTV to CAC Ratio', formula: 'Customer Lifetime Value ÷ Fully Loaded CAC', purpose: 'Target is >3.0x.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Seed-Stage Founder preparing for Series A',
        scenario: 'Founder needed to raise a $5M Series A round in 6 months, but lead VCs questioned whether their acquisition motion was capital-efficient.',
        actionTaken: 'Built dynamic CAC Payback and LTV models demonstrating an 8-month payback horizon and 4.2x LTV:CAC.',
        outcomeObserved: 'Secured 3 competing term sheets and closed a $5.5M Series A round led by a top-tier venture firm.'
      },
      visualRecommendation: {
        type: 'Cash Runway & CAC Payback Simulation Horizon',
        description: 'Multi-layer financial graph contrasting monthly net cash burn against cumulative gross profit recovery from acquired cohorts.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' }
      ],
      nextStepCta: { label: 'Model Startup Runway', link: '#consultation' }
    },
    {
      id: 'repeatable-revenue-engine-design',
      title: 'Repeatable Revenue Engine & Sales Playbook Design',
      groupName: 'Founder Sales & Early Traction',
      shortSummary: 'Codify founder discovery questions, objection responses, demo paths, and qualification criteria into an executable sales playbook for new hires.',
      businessChallenge: 'Founders hire their first sales reps and say "Go sell," expecting them to replicate the founder’s intuitive sales magic without a playbook.',
      whyItMatters: 'Reps fail, miss quota, and quit, forcing the founder back into full-time sales and delaying company scaling by 12 months.',
      whatProfitMachinesDoes: 'We deconstruct the founder’s winning sales calls into modular sales playbooks, demo scripts, battlecards, and onboarding curricula.',
      howItWorks: [
        'Transcribe and analyze 20 successful founder discovery and demo calls to extract the winning narrative structure.',
        'Codify the standard 5-step sales process: Qualification, Discovery, Technical Validation, Proposal, and Closing.',
        'Build modular battlecards addressing the 10 most common customer objections and competitor comparisons.',
        'Design a 30-day new hire sales onboarding boot camp with video certification gates.'
      ],
      relevantInputs: ['Recorded founder sales call archives', 'Win/loss interview records', 'Customer objection notes', 'Product demo presentation decks'],
      deliverables: ['Repeatable Sales Operating Playbook', 'Founder Demo Script & Video Curriculum', '30-Day Sales Rep Onboarding Boot Camp'],
      businessValue: 'Enables newly hired sales reps to reach full quota productivity within 60 days, transitioning the business from founder-led to scalable team sales.',
      kpis: [
        { name: 'First Sales Hire Ramp Velocity', formula: 'Days from Hire Date to First Independent Closed-Won Deal', purpose: 'Target is <60 days.' },
        { name: 'Non-Founder Sales Contribution %', formula: 'Bookings Generated by Sales Reps ÷ Total Company Bookings', purpose: 'Measures scaling freedom.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Post-Seed Founder & CEO',
        scenario: 'Founder closed the first 15 customers personally but spent 8 months trying to get their first 2 sales reps to close a single deal.',
        actionTaken: 'Engineered a Repeatable Sales Playbook codifying the founder’s exact discovery questions and objection handles.',
        outcomeObserved: 'Both reps closed their first enterprise deals within 45 days, taking over 80% of sales capacity from the founder.'
      },
      visualRecommendation: {
        type: 'Repeatable Sales Playbook Architecture',
        description: 'Modular curriculum diagram showing discovery questioning, demo flow, objection reframing, and contract closing playbooks.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Build Repeatable Playbooks', link: '#consultation' }
    }
  ],
  workflow: [
    {
      stepNumber: '01',
      phase: 'VALIDATE',
      title: 'Demand Validation & PMF Forensic Sprint',
      duration: 'Weeks 1–2',
      objective: 'Test commercial buyer problem hypotheses, evaluate product-market fit signals, and calibrate target customer willingness to pay.',
      keyActivities: ['Execute ICP demand validation tests', 'Deploy Sean Ellis PMF survey telemetry', 'Analyze cohort user retention curves'],
      outputDeliverable: 'Startup PMF Diagnostic & Beachhead ICP Scorecard',
      decisionGate: 'Founder and board alignment on priority beachhead customer segment.'
    },
    {
      stepNumber: '02',
      phase: 'LAND',
      title: 'Lighthouse Acquisition & Founder Sales Automation',
      duration: 'Weeks 2–4',
      objective: 'Launch focused lighthouse customer acquisition campaigns, deploy AI sales copilots for the founder, and structure paid pilots.',
      keyActivities: ['Build 100-account lighthouse target list', 'Deploy founder sales transcription and auto-CRM copilots', 'Structure paid proof-of-concept agreement templates'],
      outputDeliverable: 'Lighthouse Customer Acquisition Engine & Sales Copilots',
      decisionGate: 'First wave of 10 executive discovery calls booked and evaluated.'
    },
    {
      stepNumber: '03',
      phase: 'MONETIZE',
      title: 'Pricing Optimization & Unit Economics Modeling',
      duration: 'Weeks 4–6',
      objective: 'Run willingness-to-pay experiments, optimize pricing tiers, model CAC payback horizons, and simulate 18-month cash runway.',
      keyActivities: ['Execute pricing elasticity tests on live prospect proposals', 'Model fully loaded CAC and payback horizons', 'Build dynamic 18-month cash runway simulation model'],
      outputDeliverable: 'Commercial Pricing Architecture & Runway Financial Model',
      decisionGate: 'Securing first 3 paying customers at newly validated pricing tiers.'
    },
    {
      stepNumber: '04',
      phase: 'CODIFY',
      title: 'Repeatable Sales Playbook & Scale Readiness',
      duration: 'Weeks 6–8+',
      objective: 'Codify founder sales calls into structured sales playbooks, build 30-day onboarding boot camps, and prepare for sales team hiring.',
      keyActivities: ['Transcribe winning founder sales calls into playbooks', 'Build competitor battlecards and demo scripts', 'Design 30-day sales rep onboarding boot camp'],
      outputDeliverable: 'Repeatable Startup Sales Playbook & Rep Onboarding Boot Camp',
      decisionGate: 'Readiness certification to hire first full-time sales representatives.'
    }
  ],
  metrics: [
    {
      metricName: 'Lighthouse Pilot-to-Paid Conversion',
      category: 'Commercial',
      definition: 'Percentage of customer evaluation pilots that successfully convert into full annual paid commercial contracts.',
      formula: 'Paid Agreements Executed ÷ Total Initiated Pilot Evaluations',
      benchmarkContext: 'Calibrated paid pilots achieve >70% conversion; uncalibrated free trials fall below 15%.'
    },
    {
      metricName: 'CAC Payback Horizon',
      category: 'Financial & Retention',
      definition: 'Number of calendar months required for gross profit from a customer to fully repay initial customer acquisition cost.',
      formula: 'Fully Loaded CAC ÷ (Monthly Contract Revenue × Gross Margin %)',
      benchmarkContext: 'Seed-stage and Series A startups target <12 months; >18 months burns excessive runway.'
    },
    {
      metricName: 'Founder Time Spent Selling',
      category: 'Productivity',
      definition: 'Percentage of founder weekly working hours spent in direct customer discovery calls vs internal administration.',
      formula: 'Hours in Direct Customer Conversations ÷ Total Founder Working Hours',
      benchmarkContext: 'Automated copilots elevate this from <15% to >40% during early commercialization.'
    },
    {
      metricName: 'Average Initial Contract Value (ACV)',
      category: 'Commercial',
      definition: 'Mean annual contract value across the startup’s first 20 executed customer transactions.',
      formula: 'Total Invoiced ARR ÷ Total Paying Customer Accounts',
      benchmarkContext: 'Enterprise B2B models target >$25k ACV to support direct sales hiring.'
    },
    {
      metricName: 'Sean Ellis PMF Ratio',
      category: 'Operational',
      definition: 'Percentage of active product users who would be "very disappointed" if the product disappeared tomorrow.',
      formula: 'Very Disappointed Survey Responses ÷ Total Active Surveyed Users',
      benchmarkContext: 'The golden benchmark for true product-market fit is >40%.'
    },
    {
      metricName: 'First Sales Hire Time-to-Productivity',
      category: 'Productivity',
      definition: 'Calendar days from start date to first sales hire closing their first independent customer agreement.',
      formula: 'Calendar Days from Hire Date to First Closed-Won Transaction',
      benchmarkContext: 'Structured playbooks reduce this from 9 months to <60 days.'
    }
  ],
  faqs: [
    {
      question: 'When is the right time for a startup founder to hire their first sales rep?',
      answer: 'Only after the founder has personally closed 10 to 15 repeatable customer contracts and codified the sales process into a structured playbook. Hiring sales reps before product-market fit is proven and before messaging is validated is the #1 mistake early-stage startups make, burning cash and runway with zero results.'
    },
    {
      question: 'How do we get initial enterprise customers to trust a young startup with no case studies?',
      answer: 'By packaging the relationship as an exclusive "Lighthouse Charter Customer" program. Enterprise innovation leaders love direct access to technical founders and the ability to influence the product roadmap. In exchange for shared risk, dedicated support, and charter pricing, they agree to act as public reference case studies upon achieving success.'
    },
    {
      question: 'How do you validate willingness to pay before writing code?',
      answer: 'We run structured commercial demand validation tests using problem-focused landing pages, cold executive outreach, and paid pilot agreements. If target buyers will not commit to a signed pilot agreement or mutual action plan before development, they will not buy the finished software either.'
    },
    {
      question: 'How does ProfitMachines preserve startup cash runway during early go-to-market?',
      answer: 'By automating founder sales and deploying lean demand generation. Instead of spending $300k on premature sales rep salaries or burning $15k/mo on digital ads, our AI copilots handle research, follow-ups, and pipeline tracking for the founder, allowing you to reach initial revenue milestones with minimal cash burn.'
    },
    {
      question: 'What is the standard engagement timeline for a Startup & Scaleup project?',
      answer: 'Our startup acceleration engagement runs in four 2-week sprints over 8 weeks: Sprint 1 (Demand Validation & PMF Telemetry), Sprint 2 (Lighthouse Acquisition & Founder Sales Automation), Sprint 3 (Pricing Optimization & Runway Financial Modeling), and Sprint 4 (Repeatable Sales Playbook & Scale Readiness).'
    }
  ],
  primaryCtaText: 'Find Your Repeatable Revenue Engine',
  secondaryCtaText: 'Discuss Startup Growth Priorities'
};

