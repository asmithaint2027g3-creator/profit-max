import { PageContentData } from '../../app/types/offeringsIndustries';

export const industriesB2CData: PageContentData = {
  slug: 'b2c',
  route: '/industries/b2c',
  pageNumber: 'ICP 02',
  pageCategory: 'Industry',
  title: 'B2C & Consumer Businesses',
  headlineHighlight: 'Turn Consumer Demand Into Profitable Customer Growth.',
  eyebrow: 'OMNICHANNEL ACQUISITION, CONVERSION OPTIMIZATION & REPEAT LTV',
  description: 'Help consumer-facing brands attract high-intent buyers, eliminate checkout friction, personalize shopping journeys, optimize acquisition economics, and drive predictable repeat purchases and long-term customer lifetime value.',
  targetAudience: {
    primary: 'B2C Founders, E-commerce Directors, Chief Marketing Officers, and Heads of Growth',
    secondary: 'Performance Marketing Managers, Lifecycle Marketing Leads, and Brand Directors',
    executives: 'CEOs and Consumer Brand Investors seeking profitable unit economics and sustainable ROAS.'
  },
  heroVisual: {
    imageSrc: '/images/industry-retail.png',
    altText: 'B2C Consumer Acquisition & Retention Architecture',
    badgeText: 'Consumer Engine: High-Velocity Funnel'
  },
  keyStats: [
    { label: 'Conversion Lift', metric: '+34.2%', context: 'Checkout and product discovery optimization' },
    { label: 'CAC Efficiency', metric: '-28%', context: 'Reduction in blended customer acquisition cost' },
    { label: 'Repeat Purchase Rate', metric: '+41%', context: '90-day cohort repeat purchase velocity' },
    { label: 'ROAS Improvement', metric: '3.4x', context: 'Attributable return on paid advertising spend' }
  ],
  challenges: [
    {
      id: 'f-b2c-ad-costs',
      title: 'Soaring Ad Costs & Diminishing ROAS',
      situation: 'Customer acquisition costs on Meta, Google, and TikTok have surged 40-70% due to privacy platform changes (iOS ATT) and rising ad auction competition.',
      whyItMatters: 'Rising customer acquisition costs erode unit margins, forcing brands to lose money on first-time customer purchases.',
      commercialConsequence: 'Negative contribution margins, cash flow crunches, and an unsustainable treadmill of paid ad spend.',
      whyTraditionalMethodsFail: 'Brands rely entirely on paid third-party ad algorithms rather than building first-party data capture and owned audience channels.',
      requiredExecutiveDecision: 'Shift focus toward high-intent audience discovery, zero-party data capture, and high-margin repeat purchase lifecycles.'
    },
    {
      id: 'f-b2c-cart-abandonment',
      title: 'High Cart & Checkout Abandonment',
      situation: 'Over 70% of high-intent consumer shoppers add products to their carts but abandon the purchase due to unexpected fees, clunky checkout steps, or lack of payment choices.',
      whyItMatters: 'Every abandoned checkout represents expensive marketing dollars that generated interest but failed to convert into collected revenue.',
      commercialConsequence: 'Millions in lost top-line revenue and depressed digital return on investment.',
      whyTraditionalMethodsFail: 'Brands use generic discount pop-ups that devalue the product rather than identifying and eliminating underlying checkout friction.',
      requiredExecutiveDecision: 'Implement frictionless, one-click checkout flows, transparent pricing, and personalized behavioral recovery sequences.'
    },
    {
      id: 'f-b2c-one-and-done',
      title: 'The "One-and-Done" Customer Trap',
      situation: 'Over 80% of acquired customers make a single purchase and never return, leaving the business entirely dependent on acquiring expensive new shoppers.',
      whyItMatters: 'A consumer business that cannot generate repeat purchases is economically unsustainable over the long term.',
      commercialConsequence: 'Low customer lifetime value (LTV), compressed valuation multiples, and continuous reliance on external paid traffic.',
      whyTraditionalMethodsFail: 'Brands blast generic discount emails to their entire list rather than orchestrating personalized post-purchase replenishment journeys.',
      requiredExecutiveDecision: 'Deploy predictive lifecycle orchestration that triggers personalized re-order recommendations based on consumption velocity.'
    }
  ],
  capabilities: [
    {
      id: 'consumer-audience-segmentation',
      title: 'Consumer Audience & Customer Segmentation',
      groupName: 'Audience & Demand Architecture',
      shortSummary: 'Organize consumer shoppers by purchase recency, frequency, monetary value (RFM), product category affinities, and lifetime value potential.',
      businessChallenge: 'Brands treat all consumer customers identically, sending the same email blasts and running the same ads to bargain hunters and VIP spenders alike.',
      whyItMatters: 'Generic consumer marketing alienates high-value VIP buyers while over-discounting to customers who would have paid full price.',
      whatProfitMachinesDoes: 'We build dynamic RFM (Recency, Frequency, Monetary) and behavioral segmentation models that classify shoppers into actionable lifecycle tiers.',
      howItWorks: [
        'Ingest customer purchase histories, order frequencies, and return records from e-commerce platforms (Shopify, Magento, custom stores).',
        'Calculate dynamic RFM scores classifying shoppers into VIP Champions, High-Potential Repeaters, At-Risk Defectors, and Bargain Hunters.',
        'Map category affinity preferences and price elasticity thresholds for each segment.',
        'Synchronize segment audiences directly with ad platforms and email/SMS marketing automation engines.'
      ],
      relevantInputs: ['E-commerce order transaction histories', 'Customer return and refund records', 'Email/SMS engagement telemetry', 'Product catalog metadata'],
      deliverables: ['Dynamic RFM Customer Segmentation Model', 'VIP Retention Playbook', 'Automated Segment Sync Integrations'],
      businessValue: 'Maximizes customer lifetime value by tailoring marketing spend, messaging, and exclusive offers to the highest-yield consumer cohorts.',
      kpis: [
        { name: 'VIP Segment Revenue Contribution', formula: 'Revenue from Top 20% RFM Shoppers ÷ Total E-commerce Revenue', purpose: 'Measures revenue concentration.' },
        { name: 'Segment Migration Rate', formula: 'First-Time Buyers Progressing to Repeat Segment within 90 Days', purpose: 'Tracks customer maturation.' }
      ],
      illustrativeUseCase: {
        targetUser: 'E-commerce Director at Apparel Brand',
        scenario: 'Brand had 180,000 email subscribers but open rates had dropped to 11% due to daily generic discount blasts.',
        actionTaken: 'Implemented RFM Segmentation, creating exclusive early-access product drops for VIP Champions and win-back cadences for At-Risk buyers.',
        outcomeObserved: 'Lifted email-generated revenue by 64% while reducing promotional discount expense by $180k.'
      },
      visualRecommendation: {
        type: 'RFM Consumer Segmentation Matrix',
        description: '3D grid visualizing customer recency, frequency, and monetary order values across 6 core consumer personas.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' }
      ],
      nextStepCta: { label: 'Segment Consumer Audiences', link: '#consultation' }
    },
    {
      id: 'high-intent-audience-discovery',
      title: 'High-Intent Audience Discovery',
      groupName: 'Audience & Demand Architecture',
      shortSummary: 'Identify high-intent consumer shoppers using privacy-compliant search queries, category interest spikes, and lookalike audience modeling.',
      businessChallenge: 'Consumer brands waste 50%+ of their digital ad budgets showing ads to passive scrollers who have zero intention of buying.',
      whyItMatters: 'Broad targeting burns advertising capital, depresses click-through rates, and drives up customer acquisition costs.',
      whatProfitMachinesDoes: 'We identify commercial intent signals—such as specific product comparison searches, gift-buying seasons, and category switch keywords.',
      howItWorks: [
        'Analyze search query intent patterns to isolate transactional keywords ("best organic skincare for sensitive skin") vs informational searches.',
        'Build high-value seed audiences of top 10% lifetime value customers for lookalike expansion.',
        'Deploy dynamic intent capture campaigns across search, social, and creator channels.',
        'Continuously refresh custom audience exclusions to avoid wasting ad spend on recent purchasers.'
      ],
      relevantInputs: ['Search console query logs', 'Ad platform campaign performance data', 'Customer lifetime value seed lists', 'Competitor keyword search volume'],
      deliverables: ['High-Intent Keyword & Audience Taxonomy', 'LTV-Weighted Seed Audiences', 'Dynamic Ad Exclusion Protocols'],
      businessValue: 'Directs consumer ad spend exclusively toward shoppers actively searching for solutions, maximizing return on ad spend (ROAS).',
      kpis: [
        { name: 'Click-to-Purchase Conversion Rate', formula: 'Completed Orders ÷ Total Clicks on High-Intent Campaigns', purpose: 'Measures traffic quality.' },
        { name: 'Return on Ad Spend (ROAS)', formula: 'Attributable E-commerce Revenue ÷ Total Paid Advertising Spend', purpose: 'Tracks capital efficiency.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Head of Performance Marketing',
        scenario: 'D2C electronics brand struggled with a 1.4x ROAS on Meta ads, burning cash with broad demographic targeting.',
        actionTaken: 'Shifted to High-Intent Audience Discovery targeting replacement cycle searches and lookalikes built from top repeat buyers.',
        outcomeObserved: 'Lifted blended ROAS from 1.4x to 3.8x within 45 days, achieving immediate unit economic profitability.'
      },
      visualRecommendation: {
        type: 'Consumer Intent Convergence Funnel',
        description: 'Funnel diagram showing transition from broad category interest to transactional search spikes and instant checkout conversion.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' }
      ],
      nextStepCta: { label: 'Discover Intent Audiences', link: '#consultation' }
    },
    {
      id: 'omnichannel-demand-generation',
      title: 'Omnichannel Demand Generation',
      groupName: 'Audience & Demand Architecture',
      shortSummary: 'Coordinate paid social, search, influencer partnerships, email, SMS, and offline retail channels into a cohesive acquisition engine.',
      businessChallenge: 'Marketing channels operate in isolated silos, showing contradictory messaging and competing internally for attribution credit.',
      whyItMatters: 'Fragmented channels create customer confusion, cause channel fatigue, and fail to build compounding brand momentum.',
      whatProfitMachinesDoes: 'We design unified omnichannel campaign architectures that surround consumers with coordinated messages across multiple touchpoints.',
      howItWorks: [
        'Map consumer browsing and purchase habits across search, social (Meta, TikTok, Pinterest), email, SMS, and marketplace retail.',
        'Synchronize creative assets, seasonal promotional hooks, and educational proof points across all active channels.',
        'Deploy automated cross-channel retargeting sequences that guide shoppers from social awareness to search validation.',
        'Measure unified omnichannel blend rather than relying on over-reported single-channel attribution.'
      ],
      relevantInputs: ['Cross-channel ad spend ledgers', 'Platform-specific engagement analytics', 'Creator partnership contracts', 'Retail POS sales records'],
      deliverables: ['Omnichannel Campaign Execution Calendar', 'Cross-Channel Creative Asset Playbook', 'Unified Blended CAC Telemetry Model'],
      businessValue: 'Builds compounding commercial momentum across all consumer touchpoints, driving down blended customer acquisition costs.',
      kpis: [
        { name: 'Marketing Efficiency Ratio (MER)', formula: 'Total E-commerce Revenue ÷ Total Paid Marketing Spend Across All Channels', purpose: 'Master acquisition health.' },
        { name: 'Cross-Channel Engagement Rate', formula: 'Shoppers Interacting with ≥2 Distinct Channels prior to Purchase', purpose: 'Measures synergy.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Marketing Officer at Consumer Goods Brand',
        scenario: 'Brand spent heavily on TikTok ads and Google Search independently, with each agency claiming 100% credit for the same orders.',
        actionTaken: 'Engineered an Omnichannel Demand Architecture coordinating TikTok creator hooks with synchronized Google Search capture.',
        outcomeObserved: 'Cut overall marketing spend by 22% while total brand revenue grew 38%, lifting blended MER from 2.2x to 3.9x.'
      },
      visualRecommendation: {
        type: 'Omnichannel Customer Touchpoint Mesh',
        description: 'Circular diagram showing consumer interactions across TikTok, Meta, Google Search, Email, SMS, and Checkout.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' }
      ],
      nextStepCta: { label: 'Coordinate Omnichannel Demand', link: '#consultation' }
    },
    {
      id: 'customer-acquisition-optimization',
      title: 'Customer Acquisition Cost (CAC) Optimization',
      groupName: 'Conversion & Checkout Architecture',
      shortSummary: 'Audit creative fatigue, landing page drop-offs, bid strategies, and channel unit economics to lower first-time acquisition costs.',
      businessChallenge: 'Ad creative fatigues within 10 days, causing cost-per-click to spike and paid campaigns to suddenly become unprofitable.',
      whyItMatters: 'If customer acquisition cost exceeds first-order gross contribution margin, the brand is burning capital with every sale.',
      whatProfitMachinesDoes: 'We implement disciplined creative testing frameworks, dynamic landing page routing, and bidding optimizations to compress CAC.',
      howItWorks: [
        'Establish continuous creative testing sprints, testing 10-15 new hook variations, UGC formats, and angles weekly.',
        'Route ad traffic to dedicated, high-speed landing pages tailored to the specific ad creative hook rather than generic homepages.',
        'Optimize conversion rate on landing pages using social proof, clear value propositions, and risk-free guarantees.',
        'Scale winning creative assets across broader lookalike audiences while rapidly pausing fatigued ads.'
      ],
      relevantInputs: ['Ad platform creative performance metrics', 'Landing page heatmaps and click logs', 'Unit production and shipping costs', 'Historical CAC trends'],
      deliverables: ['Creative Testing Sprint Playbook', 'High-Converting Landing Page Templates', 'CAC Optimization Scorecard'],
      businessValue: 'Drives sustainable, profitable first-order customer acquisition, enabling the brand to scale ad spend with confidence.',
      kpis: [
        { name: 'Customer Acquisition Cost (CAC)', formula: 'Total Attributable Acquisition Ad Spend ÷ New Customers Acquired', purpose: 'Tracks acquisition cost.' },
        { name: 'First-Order Contribution Margin', formula: 'First-Order Revenue - COGS - Shipping - First-Order CAC', purpose: 'Measures day-1 profit.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Head of Growth at D2C Wellness Brand',
        scenario: 'Facebook CAC had climbed from $38 to $82 over 6 months, turning profitable product lines into cash drains.',
        actionTaken: 'Deployed rapid creative testing sprints and built dedicated hook-matched landing pages with bundle offers.',
        outcomeObserved: 'Compressed average CAC back down to $44 while average order value increased from $65 to $92.'
      },
      visualRecommendation: {
        type: 'CAC Compression Waterfall',
        description: 'Waterfall graph demonstrating reduction in cost per acquisition through creative iteration, landing page lift, and bundle packaging.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' }
      ],
      nextStepCta: { label: 'Optimize Consumer CAC', link: '#consultation' }
    },
    {
      id: 'personalized-customer-journeys',
      title: 'Personalized Customer Journeys & Recommendation Engines',
      groupName: 'Conversion & Checkout Architecture',
      shortSummary: 'Serve individualized product recommendations, dynamic category collections, and personalized email/SMS follow-ups based on consented browsing.',
      businessChallenge: 'Shoppers land on e-commerce sites and face thousands of irrelevant products, getting overwhelmed and bouncing within 10 seconds.',
      whyItMatters: 'Consumer attention spans are short; if shoppers cannot find relevant products instantly, they abandon the site.',
      whatProfitMachinesDoes: 'We implement dynamic on-site recommendation engines and personalized lifecycle messaging that adapt in real-time to shopper behavior.',
      howItWorks: [
        'Track real-time in-session browsing behavior (product views, category dwell time, search filters).',
        'Deploy collaborative filtering algorithms recommending "Frequently Bought Together" and "Customers Also Viewed" items.',
        'Deliver dynamic on-site quiz funnels that guide shoppers to the exact product formulation matching their needs.',
        'Trigger personalized email/SMS follow-up flows showcasing the specific items and categories the shopper explored.'
      ],
      relevantInputs: ['On-site clickstream and browsing event feeds', 'Product catalog taxonomy and inventory levels', 'Customer quiz responses', 'Email/SMS platform APIs'],
      deliverables: ['Dynamic On-Site Recommendation Engine', 'Personalized Product Discovery Quiz Funnel', 'Behavioral Email/SMS Lifecycle Workflows'],
      businessValue: 'Increases product discovery velocity, lifts average order value by 20-35%, and boosts site-wide conversion rates.',
      kpis: [
        { name: 'Average Order Value (AOV)', formula: 'Total E-commerce Revenue ÷ Total Number of Orders', purpose: 'Tracks cart size.' },
        { name: 'Recommendation Click-Through Rate', formula: 'Clicks on Recommended Items ÷ Total Recommendation Impressions', purpose: 'Validates relevance.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Digital at Specialty Footwear Brand',
        scenario: 'Shoppers were confused by 40+ specialized running shoe models, resulting in high bounce rates and low AOV.',
        actionTaken: 'Launched an interactive 60-second "Shoe Finder Quiz" and integrated dynamic "Pairs Well With" sock/insole bundles at checkout.',
        outcomeObserved: 'Quiz conversion reached 28% and Average Order Value expanded by $24 across 45,000 monthly transactions.'
      },
      visualRecommendation: {
        type: 'Personalized Journey Branching Architecture',
        description: 'Decision flow diagram showing dynamic on-site adaptation based on quiz inputs and real-time browsing behavior.'
      },
      relatedCapabilities: [
        { name: 'Customer Success Engine', path: '/offerings/customer-success' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Personalize Shopping Journeys', link: '#consultation' }
    },
    {
      id: 'offer-pricing-intelligence',
      title: 'Offer & Pricing Intelligence Architecture',
      groupName: 'Conversion & Checkout Architecture',
      shortSummary: 'Optimize promotional offer structures, bundle packaging, subscription discounts, and dynamic price thresholds to protect gross margins.',
      businessChallenge: 'Brands slash prices with site-wide 30% discounts, sacrificing precious profit margin without testing whether smaller incentives convert just as well.',
      whyItMatters: 'Addiction to deep discounting trains consumers never to buy at full price, permanently degrading brand value and profitability.',
      whatProfitMachinesDoes: 'We design high-margin offer architectures: tiered bundles, gift-with-purchase (GWP) incentives, and threshold discounts ("Spend $100, Save $20").',
      howItWorks: [
        'Analyze product gross margins across the catalog to identify high-margin items suitable for bundle packaging or gift incentives.',
        'Test alternative promotional offers (Percentage Off vs Dollar Off vs Free Gift vs Free Shipping) with controlled split-traffic pilots.',
        'Implement "Build Your Own Bundle" tools that allow consumers to customize multi-item packages at attractive blended margins.',
        'Configure automated threshold banners encouraging shoppers to add one more item to unlock free shipping.'
      ],
      relevantInputs: ['Product catalog gross margin data', 'Historical promotional sales records', 'Competitor promotional monitoring feeds', 'Inventory overstock schedules'],
      deliverables: ['High-Margin Bundle Architecture', 'Promotional Offer Testing Framework', 'Threshold Incentive Pricing Calculator'],
      businessValue: 'Protects gross margins while driving significant lifts in average order value and perceived consumer value.',
      kpis: [
        { name: 'Gross Margin Realization %', formula: '(Actual Net Revenue - COGS) ÷ Actual Net Revenue', purpose: 'Monitors margin health.' },
        { name: 'Bundle Attach Rate', formula: 'Orders Containing Multi-Item Bundles ÷ Total Completed Orders', purpose: 'Measures bundle success.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Head of E-commerce',
        scenario: 'Company ran recurring "25% off everything" holiday sales that wiped out all operating profit.',
        actionTaken: 'Replaced site-wide discounts with a "Buy 2 Essentials, Get 1 Specialized Treatment Free" bundle structure.',
        outcomeObserved: 'Maintained identical conversion rates while gross margin dollars increased by $280,000 over the holiday quarter.'
      },
      visualRecommendation: {
        type: 'Offer Structure Margin Comparison Matrix',
        description: 'Bar chart comparing revenue, units moved, and net gross profit dollars across 4 promotional offer variations.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' }
      ],
      nextStepCta: { label: 'Optimize Offer Architecture', link: '#consultation' }
    },
    {
      id: 'conversion-checkout-optimization',
      title: 'Conversion & Checkout Friction Optimization',
      groupName: 'Conversion & Checkout Architecture',
      shortSummary: 'Audit mobile UI friction, streamline checkout steps, integrate accelerated digital wallets (Apple Pay, Shop Pay), and eliminate cart drops.',
      businessChallenge: 'Mobile shoppers encounter slow loading pages, complex 5-step checkout forms, and surprise shipping fees, causing 75%+ cart abandonment.',
      whyItMatters: 'Over 75% of consumer e-commerce traffic is on mobile; a clunky mobile checkout directly squanders expensive ad spend.',
      whatProfitMachinesDoes: 'We re-architect checkout funnels with accelerated 1-click mobile wallets, clear shipping disclosure, and distraction-free layouts.',
      howItWorks: [
        'Execute heatmapping and session recording forensics to locate exact mobile drop-off points in product discovery and cart review.',
        'Integrate accelerated 1-click payment methods (Shop Pay, Apple Pay, Google Pay, Klarna/Afterpay BNPL).',
        'Display estimated delivery dates and transparent shipping costs directly on the product detail page (PDP) before checkout starts.',
        'A/B test single-page checkout architectures against multi-step forms to maximize completion rates.'
      ],
      relevantInputs: ['Checkout funnel analytics step drop-offs', 'Mobile device session recording logs', 'Payment gateway fee schedules', 'Shipping calculation APIs'],
      deliverables: ['Friction-Free Checkout Architecture', 'Mobile UX Optimization Blueprint', 'Checkout A/B Experimentation Suite'],
      businessValue: 'Lifts overall store checkout completion rates by 15-30%, turning existing website traffic into immediate incremental revenue.',
      kpis: [
        { name: 'Checkout Completion Rate', formula: 'Completed Transactions ÷ Total Checkouts Initiated', purpose: 'Measures checkout efficiency.' },
        { name: 'Cart Abandonment Rate', formula: 'Abandoned Carts ÷ Total Carts Created', purpose: 'Tracks cart drop-off.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Digital Officer',
        scenario: 'Luxury consumer goods brand had an 82% cart abandonment rate on mobile devices due to a mandatory account creation step.',
        actionTaken: 'Removed forced account creation, enabled guest checkout, and integrated 1-click Apple Pay and Shop Pay.',
        outcomeObserved: 'Cart abandonment dropped to 54%, driving a $1.2M annualized revenue lift with zero additional ad spend.'
      },
      visualRecommendation: {
        type: 'Mobile Checkout Step-by-Step Drop-Off Waterfall',
        description: 'Waterfall graph illustrating shopper progression from Product Page → Cart → Shipping → Payment → Order Confirmation.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Startups & Scaleups', path: '/industries/startups' }
      ],
      nextStepCta: { label: 'Optimize Checkout Conversion', link: '#consultation' }
    },
    {
      id: 'customer-retargeting-recovery',
      title: 'Customer Retargeting & Abandoned Journey Recovery',
      groupName: 'Retention & Lifecycle Marketing',
      shortSummary: 'Deploy multi-channel abandoned cart and browse recovery cadences across SMS, email, and dynamic social retargeting.',
      businessChallenge: 'Brands send a single generic "You left something behind" email 24 hours later that gets lost in the customer’s spam folder.',
      whyItMatters: 'Shoppers who add items to cart have the highest purchase intent of all visitors; failing to recover them is leaving easy money on the table.',
      whatProfitMachinesDoes: 'We deploy multi-stage recovery cadences combining timely SMS alerts, dynamic product emails, and social retargeting within hours of abandonment.',
      howItWorks: [
        'Trigger instant abandoned cart recovery workflows within 30 minutes across high-converting SMS and email channels.',
        'Serve dynamic ads showcasing the exact product abandoned alongside customer 5-star reviews addressing product concerns.',
        'Implement progressive recovery incentives: Stage 1 (Reminder & Reviews), Stage 2 (Urgency & Stock Warning), Stage 3 (Limited Incentive).',
        'Exclude customers who complete their order immediately from all recovery cadences to prevent over-discounting.'
      ],
      relevantInputs: ['Abandoned cart event streams', 'Email and SMS marketing automation logs', 'Product inventory availability feeds', 'Dynamic product ad catalogs'],
      deliverables: ['3-Stage Abandoned Cart Recovery Cadence', 'Browse Abandonment Flow Automation', 'Dynamic Retargeting Ad Architecture'],
      businessValue: 'Recovers 12-25% of abandoned carts, dropping high-margin revenue straight to the bottom line without paying full customer acquisition costs.',
      kpis: [
        { name: 'Abandoned Cart Recovery Rate', formula: 'Recovered Orders ÷ Total Abandoned Carts', purpose: 'Measures recovery success.' },
        { name: 'Recovery Revenue per Abandoned Cart', formula: 'Total Recovered Revenue ÷ Total Abandoned Carts', purpose: 'Tracks recovery value.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Lifecycle Marketing Lead',
        scenario: 'Brand recovered only 4.2% of abandoned carts using a single plain-text automated email sent 24 hours later.',
        actionTaken: 'Built a 3-stage recovery flow combining a 30-minute SMS reminder, social proof emails, and a 48-hour limited-time bonus gift.',
        outcomeObserved: 'Cart recovery rate surged to 19.4%, generating an additional $48,000 in high-margin revenue every month.'
      },
      visualRecommendation: {
        type: '3-Stage Cart Recovery Sequence Timeline',
        description: 'Multi-channel timeline showing coordinated SMS at 30 min, Email at 4 hrs, Social Ad at 12 hrs, and Final Incentive at 48 hrs.'
      },
      relatedCapabilities: [
        { name: 'Customer Success Engine', path: '/offerings/customer-success' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Recover Abandoned Carts', link: '#consultation' }
    },
    {
      id: 'repeat-purchase-retention-intelligence',
      title: 'Repeat Purchase & Retention Intelligence',
      groupName: 'Retention & Lifecycle Marketing',
      shortSummary: 'Analyze consumption cycle replenishment timelines, predict replenishment needs, and automate subscription replenishment models.',
      businessChallenge: 'Brands treat all purchases as final transactions, leaving it entirely up to the customer to remember to re-order consumable products.',
      whyItMatters: 'Acquired customers naturally drift to competitors or local retailers if they are not prompted to re-order at the exact moment their supply runs low.',
      whatProfitMachinesDoes: 'We calculate product-specific consumption cycles to trigger timely re-order reminders and seamless "Subscribe & Save" conversions.',
      howItWorks: [
        'Calculate empirical consumption velocity by product SKU (e.g. 30-day supply of vitamins, 60-day skin moisturizer).',
        'Trigger automated re-order reminders via SMS and email 5 days before the customer is predicted to run out.',
        'Offer seamless 1-click re-ordering links that pre-populate the customer’s saved shipping address and payment method.',
        'Integrate friction-free "Subscribe & Save" subscription options with flexible delivery schedules and skip/pause controls.'
      ],
      relevantInputs: ['Product catalog package sizes and daily dose/usage specs', 'Historical customer repeat order intervals', 'Subscription billing engine logs', 'SMS/Email platform event webhooks'],
      deliverables: ['Predictive Replenishment Reminder Engine', 'Seamless 1-Click Re-Order Workflows', 'Subscription & Retention Program Architecture'],
      businessValue: 'Compounds annual customer revenue by turning one-time transactional buyers into loyal, predictable subscription subscribers.',
      kpis: [
        { name: 'Repeat Purchase Rate (90-Day)', formula: 'Customers Placing ≥2 Orders in 90 Days ÷ Total First-Time Customers', purpose: 'Measures retention.' },
        { name: 'Subscription Conversion Ratio', formula: 'One-Time Buyers Converting to Active Subscription ÷ Total Buyers', purpose: 'Tracks predictable ARR.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Customer Retention',
        scenario: 'Consumable coffee brand had an 82% drop-off after the first bag, with repeat order rates languishing at 18%.',
        actionTaken: 'Implemented predictive replenishment SMS triggers sent on Day 21 with a 1-click link to subscribe for a 15% discount.',
        outcomeObserved: 'Repeat purchase rate jumped to 44% and recurring subscription subscribers expanded from 1,200 to 8,400 in 6 months.'
      },
      visualRecommendation: {
        type: 'Predictive Replenishment Lifecycle Curve',
        description: 'Customer product consumption curve showing ideal timing for re-order prompt, replenishment delivery, and subscription conversion.'
      },
      relatedCapabilities: [
        { name: 'Customer Success Engine', path: '/offerings/customer-success' },
        { name: 'SaaS & Recurring-Revenue', path: '/industries/saas' }
      ],
      nextStepCta: { label: 'Automate Repeat Purchases', link: '#consultation' }
    },
    {
      id: 'clv-campaign-roi',
      title: 'Customer Lifetime Value (CLV) & Campaign ROI Analytics',
      groupName: 'Retention & Lifecycle Marketing',
      shortSummary: 'Perform granular cohort forensics connecting ad acquisition spend to 6, 12, and 24-month customer lifetime value and contribution margins.',
      businessChallenge: 'Brands make ad decisions based on immediate Day-1 ROAS, cutting campaigns that acquire high-lifetime-value repeat buyers because first-order margins appear low.',
      whyItMatters: 'Judging channels solely on Day-1 metrics leads brands to overfund cheap bargain hunters and starve high-value customer acquisition channels.',
      whatProfitMachinesDoes: 'We build comprehensive Cohort LTV Cockpits that track cumulative customer gross margin over 12-24 months by acquisition source.',
      howItWorks: [
        'Track every customer cohort from initial paid ad click through all subsequent repeat purchases, refunds, and subscriptions.',
        'Calculate true cumulative Contribution Margin over 30, 60, 90, 180, and 365 days by ad campaign and creative angle.',
        'Identify which acquisition channels deliver high-LTV VIPs vs one-time deal seekers.',
        'Provide executive marketing dashboards with empirical LTV-to-CAC ratios to guide quarterly ad budget allocation.'
      ],
      relevantInputs: ['Ad spend records across all digital channels', 'E-commerce order database transaction histories', 'Product COGS and fulfillment cost ledgers', 'Customer refund and chargeback logs'],
      deliverables: ['Customer Lifetime Value Cohort Cockpit', 'LTV-to-CAC Ratio Financial Model', 'Long-Term Acquisition Channel Guide'],
      businessValue: 'Empowers marketing leadership to out-invest competitors on high-value channels with complete confidence in long-term profitability.',
      kpis: [
        { name: 'LTV to CAC Ratio (12-Month)', formula: 'Cumulative 12-Month Customer Gross Profit ÷ Initial Customer Acquisition Cost', purpose: 'Measures acquisition health.' },
        { name: 'Cohort Net Margin Payback Period', formula: 'Months Required for Cumulative Cohort Gross Margin to Exceed Initial Acquisition Spend', purpose: 'Tracks capital recovery.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Financial Officer & CMO',
        scenario: 'Team planned to pause Google Search ads because Day-1 ROAS was only 1.6x compared to Facebook’s 2.2x.',
        actionTaken: 'Ran Cohort CLV Analytics, discovering Google customers had a 52% repeat purchase rate with 12-month LTV of $340 vs Facebook’s $110.',
        outcomeObserved: 'Doubled Google ad spend, growing annual company EBITDA by $1.8M based on compounding customer lifetime value.'
      },
      visualRecommendation: {
        type: 'Cumulative Cohort LTV Trajectory Curve',
        description: 'Multi-line graph showing cumulative gross profit growth per customer over 24 months across different acquisition channels.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' }
      ],
      nextStepCta: { label: 'Audit Customer Lifetime Value', link: '#consultation' }
    }
  ],
  workflow: [
    {
      stepNumber: '01',
      phase: 'AUDIT',
      title: 'Consumer Funnel & Retention Forensic Audit',
      duration: 'Weeks 1–2',
      objective: 'Audit e-commerce checkout drop-offs, analyze customer RFM cohorts, evaluate paid ad unit economics, and measure baseline repeat rates.',
      keyActivities: ['Ingest Shopify/e-commerce order histories', 'Calculate RFM customer segments and baseline repeat purchase rates', 'Audit mobile checkout friction and cart abandonment drop-offs'],
      outputDeliverable: 'Consumer Funnel Diagnostic & RFM Segmentation Audit',
      decisionGate: 'Executive validation of baseline conversion, CAC, and repeat rate metrics.'
    },
    {
      stepNumber: '02',
      phase: 'OPTIMIZE',
      title: 'Checkout Streamlining & Intent Architecture',
      duration: 'Weeks 2–4',
      objective: 'Deploy 1-click mobile checkout wallets, build high-converting bundle architectures, and launch high-intent audience targeting.',
      keyActivities: ['Integrate Shop Pay and Apple Pay accelerated checkout', 'Configure bundle offers and threshold shipping incentives', 'Implement high-intent search and lookalike audience models'],
      outputDeliverable: 'Optimized Checkout Engine & High-Margin Offer Matrix',
      decisionGate: 'Marketing and e-commerce sign-off on checkout A/B tests and bundle pricing.'
    },
    {
      stepNumber: '03',
      phase: 'RECOVER',
      title: 'Cart Recovery & Personalized Lifecycles',
      duration: 'Weeks 4–6',
      objective: 'Deploy 3-stage abandoned cart recovery flows across SMS/email, activate browse abandonment triggers, and launch on-site quizzes.',
      keyActivities: ['Configure 30-minute automated recovery SMS flows', 'Deploy dynamic product recommendation widgets on-site', 'Launch personalized product finder quiz funnel'],
      outputDeliverable: 'Multi-Stage Cart Recovery & Personalization Engine',
      decisionGate: 'Review of cart recovery lift and average order value expansion.'
    },
    {
      stepNumber: '04',
      phase: 'COMPOUND',
      title: 'Replenishment & Cohort LTV Scaling',
      duration: 'Weeks 6–8+',
      objective: 'Activate predictive replenishment reminders, rollout "Subscribe & Save" models, and deploy executive Cohort LTV analytics.',
      keyActivities: ['Deploy automated replenishment reminder cadences', 'Launch friction-free subscription renewal workflows', 'Deploy executive LTV:CAC cohort analytics dashboard'],
      outputDeliverable: 'Continuous Consumer Retention & LTV Cockpit',
      decisionGate: 'Quarterly review of blended MER, repeat purchase expansion, and LTV payback.'
    }
  ],
  metrics: [
    {
      metricName: 'Checkout Conversion Rate',
      category: 'Commercial',
      definition: 'Percentage of website visitors initiating checkout that successfully complete an order.',
      formula: 'Completed Orders ÷ Total Checkouts Initiated',
      benchmarkContext: 'High-performing mobile checkouts achieve >45%; friction-heavy checkouts fall below 25%.'
    },
    {
      metricName: 'Marketing Efficiency Ratio (MER)',
      category: 'Financial & Retention',
      definition: 'Ratio of total gross e-commerce revenue generated divided by total marketing expenditure across all channels.',
      formula: 'Total Gross Store Revenue ÷ Total Paid Marketing Expenditure',
      benchmarkContext: 'Healthy consumer brands target 3.0x - 4.5x blended MER to maintain unit profitability.'
    },
    {
      metricName: 'Average Order Value (AOV)',
      category: 'Commercial',
      definition: 'Mean monetary value of transactions completed across the consumer e-commerce storefront.',
      formula: 'Total E-commerce Invoiced Revenue ÷ Total Number of Orders',
      benchmarkContext: 'Bundle packaging and threshold incentives consistently lift AOV by 20-35%.'
    },
    {
      metricName: 'Cart Abandonment Recovery Rate',
      category: 'Operational',
      definition: 'Percentage of shoppers who abandoned a cart and returned to complete the purchase via recovery sequences.',
      formula: 'Recovered Orders from Recovery Cadences ÷ Total Abandoned Carts',
      benchmarkContext: 'Multi-stage SMS and email recovery models consistently achieve 15-25% recovery.'
    },
    {
      metricName: '90-Day Repeat Purchase Rate',
      category: 'Financial & Retention',
      definition: 'Proportion of first-time consumer buyers who place a second order within 90 days of initial purchase.',
      formula: 'Customers with ≥2 Orders in 90 Days ÷ Total First-Time Customers in Cohort',
      benchmarkContext: 'Consumable and lifestyle brands target >35%; indicates strong product-market fit.'
    },
    {
      metricName: '12-Month LTV to CAC Ratio',
      category: 'Financial & Retention',
      definition: 'Cumulative gross profit generated by a customer cohort over 12 months divided by initial customer acquisition cost.',
      formula: '12-Month Cumulative Customer Gross Profit ÷ Initial Customer Acquisition Cost',
      benchmarkContext: 'Sustainable consumer business models achieve >3.0x over a 12-month horizon.'
    }
  ],
  faqs: [
    {
      question: 'How does ProfitMachines help consumer brands lower their customer acquisition costs?',
      answer: 'By shifting marketing from generic broad targeting to high-intent audience discovery and conversion optimization. We align high-converting UGC creative with hook-matched landing pages, integrate 1-click mobile checkouts, and eliminate cart friction, doubling on-site conversion so you get twice as many paying customers from the same ad budget.'
    },
    {
      question: 'How do you recover abandoned carts without spamming customers or devaluing the brand?',
      answer: 'We deploy respectful, multi-stage recovery cadences. Instead of immediate aggressive discounts, Stage 1 sends a helpful reminder with positive customer reviews addressing product concerns. Stage 2 highlights limited stock or delivery timelines. Only in Stage 3 do we offer small incentives, ensuring you recover revenue without training shoppers to abandon carts for discounts.'
    },
    {
      question: 'Can you help us build a subscription model for our non-subscription products?',
      answer: 'Yes. Even brands that sell traditionally non-subscription items (e.g. cosmetics, supplements, apparel essentials, specialty foods) can build powerful "Subscribe & Save" or predictive replenishment workflows based on consumption velocity, turning transactional buyers into predictable recurring revenue.'
    },
    {
      question: 'What e-commerce platforms and marketing tools do you support?',
      answer: 'We integrate with all major e-commerce platforms (Shopify Plus, Magento, WooCommerce, custom headless stores) and marketing automation stacks (Klaviyo, Attentive, Postscript, Meta Ads Manager, Google Ads, TikTok Ads) using direct enterprise APIs and webhooks.'
    },
    {
      question: 'What is the standard engagement timeline to optimize B2C consumer growth?',
      answer: 'Our consumer transformation runs in four 2-week sprints over 8 weeks: Sprint 1 (Funnel & RFM Forensic Audit), Sprint 2 (Checkout Streamlining & High-Margin Bundling), Sprint 3 (Cart Recovery & Personalized Journeys), and Sprint 4 (Replenishment Automation & Cohort LTV Cockpit).'
    }
  ],
  primaryCtaText: 'Accelerate Consumer Growth',
  secondaryCtaText: 'Discuss Consumer Priorities'
};
