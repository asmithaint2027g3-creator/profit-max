import { GrowthCapabilityPageData } from '../types';

export const page04PotentialDiscoveryData: GrowthCapabilityPageData = {
  "pageNumber": "04",
  "title": "Revenue Potential Discovery",
  "slug": "revenue-potential-discovery",
  "heroHeadline": "Discover Untapped Economic Headroom Across Markets and Accounts",
  "heroSupporting": "Systematically identify unharvested market demand, uncontested white-space profit pools, customer wallet-share expansion, and new product monetization vectors.",
  "businessProblemSummary": "Most companies hit growth plateaus not because their product is flawed, but because they exhaust their initial narrow customer segment and lack a scientific methodology to discover adjacent economic headroom. Meanwhile, existing accounts sit with 70%+ unharvested wallet-share.",
  "targetDecisionMakers": [
    "Chief Executive Officers",
    "Chief Strategy Officers",
    "Chief Revenue Officers",
    "VPs of Corporate Development"
  ],
  "contextWhoExperiences": "Established B2B software and technology companies seeking the next $20M-$100M of ARR expansion.",
  "contextSituation": "Core market customer acquisition costs are rising, competitor density is increasing, and inbound lead volume has decelerated.",
  "contextWhyDifficult": "Traditional market research relies on generic top-down analyst reports that fail to identify granular, unit-economic target accounts and specific workflow white spaces.",
  "contextContributingFactors": [
    "Reliance on top-down industry TAM figures with zero verified account data",
    "Customer success teams focused purely on renewal hygiene rather than account potential mapping",
    "Competing head-to-head in bloody red-ocean segments instead of proprietary white spaces",
    "Lack of parametric financial modeling for new product line extensions"
  ],
  "symptomsAndConsequences": [
    {
      "category": "CAC Inflation",
      "symptom": "Customer acquisition costs doubling over 18 months in legacy customer segments.",
      "consequence": "Diminishing returns on sales and marketing spend; cash burn accelerates."
    },
    {
      "category": "Growth Plateau",
      "symptom": "Year-over-year revenue expansion decelerating from 45% to under 15%.",
      "consequence": "Enterprise valuation multiple compression and missed investor expectations."
    },
    {
      "category": "Unharvested Wallet-Share",
      "symptom": "Top 50 enterprise clients spending 10x more with other vendors on adjacent workflows.",
      "consequence": "Competitors cross-sell into your installed base and ultimately displace your core product."
    },
    {
      "category": "R&D Misalignment",
      "symptom": "Product teams shipping features that fail to generate measurable incremental revenue.",
      "consequence": "Wasted engineering capital and delayed time-to-market for high-value capabilities."
    }
  ],
  "subSubmenus": [
    {
      "id": "total-addressable-market-discovery",
      "slug": "total-addressable-market-discovery",
      "title": "Total Addressable Market Discovery",
      "businessQuestion": "What is the true, defensible economic ceiling of your addressable market opportunity?",
      "explanation": "Systematically bounds and sizes total market demand using bottom-up account aggregation, firmographic qualification, and willingness-to-pay elasticity modeling.",
      "topics": [
        {
          "title": "Bottom-Up Account Registry Sizing",
          "description": "Quantify addressable demand by aggregating verified corporate entities meeting ideal customer profile criteria.",
          "businessEvidence": "Corporate registries, firmographic databases, technographic signatures, and annual filings.",
          "analysisProcess": "Deterministic entity enumeration applying strict qualification filters across industry, revenue, and headcounts.",
          "decisionsEnabled": "Replace hand-waving top-down market sizing with verifiable corporate account lists."
        },
        {
          "title": "Economic Value Ceiling Modeling",
          "description": "Calculate the total potential annual software spend per account based on customer economic value creation.",
          "businessEvidence": "Customer workflow volume, operational labor costs, and commercial transaction throughput.",
          "analysisProcess": "Value-derived pricing modeling estimating maximum capture potential per account decile.",
          "decisionsEnabled": "Identify product lines capable of expanding overall account contract values by 3x."
        },
        {
          "title": "Market Boundary Delineation",
          "description": "Define clear inclusion and exclusion criteria to prevent sales teams from pursuing unviable market segments.",
          "businessEvidence": "Regulatory constraints, data sovereignty requirements, and technical legacy friction.",
          "analysisProcess": "Constraint boundary analysis eliminating structurally unprofitable customer segments from TAM.",
          "decisionsEnabled": "Focus GTM expenditure exclusively on defensible, unit-economic addressable market accounts."
        },
        {
          "title": "TAM Expansion Horizon Mapping",
          "description": "Model how ongoing product R&D and geographic certification expand the addressable market over 3 years.",
          "businessEvidence": "Product roadmap releases, regional cloud certifications, and compliance audit schedules.",
          "analysisProcess": "Sequential TAM unlocking curves correlating engineering milestones with new market cohorts.",
          "decisionsEnabled": "Sequence R&D investments that unlock the largest contiguous enterprise TAM."
        }
      ],
      "useCase": {
        "situation": "Investors questioned an enterprise software company claim of a $10B TAM when ARR plateaued at $25M.",
        "action": "Executed Total Addressable Market Discovery using verified account registries and value-based spend models.",
        "outcome": "Disproved the generic top-down sizing and identified a highly defensible $1.8B TAM with 4,200 high-margin target accounts."
      },
      "kpis": [
        {
          "name": "Verified Account Density",
          "definition": "Number of verified corporate entities matching primary ICP criteria",
          "target": "> 5,000 Accounts"
        },
        {
          "name": "TAM Capture Percentage",
          "definition": "Current contracted ARR divided by verified addressable market economic ceiling",
          "target": "8.5%"
        },
        {
          "name": "Market Expansion Velocity",
          "definition": "Annual growth in addressable TAM enabled by new product capabilities",
          "target": "> 25.0%/Yr"
        }
      ],
      "visualModel": {
        "type": "matrix",
        "caption": "Bottom-Up TAM Valuation & Account Cluster Matrix",
        "metrics": [
          {
            "label": "Addressable Accounts",
            "value": "4,850",
            "delta": "Audited"
          },
          {
            "label": "Economic TAM Ceiling",
            "value": "$1.84B",
            "delta": "Defensible"
          },
          {
            "label": "Current TAM Capture",
            "value": "5.2%",
            "delta": "+1.8 pts"
          },
          {
            "label": "Expansion Horizon",
            "value": "+$640M",
            "delta": "Next 24M"
          }
        ]
      }
    },
    {
      "id": "serviceable-market-analysis",
      "slug": "serviceable-market-analysis",
      "title": "Serviceable Market Analysis",
      "businessQuestion": "Which specific portion of the total market can your current commercial engine realistically serve?",
      "explanation": "Filters total market demand down to the Serviceable Available Market (SAM) based on geographic presence, sales channel reach, and technical delivery capacity.",
      "topics": [
        {
          "title": "Channel Reach & Distribution Filtering",
          "description": "Map which accounts can be reached effectively through your direct sales force and partner networks.",
          "businessEvidence": "Regional sales rep coverage, partner territory authorizations, and local language capability.",
          "analysisProcess": "Distribution coverage modeling measuring the realistic contact capacity of current commercial teams.",
          "decisionsEnabled": "Target marketing and outbound campaigns strictly within active commercial coverage zones."
        },
        {
          "title": "Technical Delivery Constraint Mapping",
          "description": "Filter out prospective accounts with legacy tech stacks or compliance requirements your software cannot support.",
          "businessEvidence": "Client ERP architectures, database versions, security protocols, and on-premises requirements.",
          "analysisProcess": "Technical compatibility auditing cross-referencing customer infrastructure with product capabilities.",
          "decisionsEnabled": "Prevent sales reps from spending months pursuing deals that technical delivery cannot deploy."
        },
        {
          "title": "Commercial Channel Fit Analysis",
          "description": "Match customer account segments with the most profitable sales channel: direct enterprise, mid-market, or self-serve.",
          "businessEvidence": "Average selling price (ASP), sales cycle length, and channel customer acquisition cost.",
          "analysisProcess": "Unit economic channel viability modeling determining CAC payback feasibility by segment.",
          "decisionsEnabled": "Route accounts under $20K ARR to digital self-serve to protect direct sales gross margins."
        },
        {
          "title": "SAM Penetration Pacing",
          "description": "Benchmark current market penetration velocity against competitors across core serviceable segments.",
          "businessEvidence": "Closed-won market share data, competitive displacement rates, and customer win announcements.",
          "analysisProcess": "Market share velocity modeling tracking quarterly penetration across defined SAM cohorts.",
          "decisionsEnabled": "Deploy surge sales capacity in underserved regional corridors where competitor presence is weak."
        }
      ],
      "useCase": {
        "situation": "Sales reps in Europe were pursuing deals that engineering could not deploy due to local data residency laws.",
        "action": "Implemented Serviceable Market Analysis to establish strict regulatory and geographic qualification gates.",
        "outcome": "Eliminated wasted pursuit of unviable accounts, lifting viable pipeline conversion by 28%."
      },
      "kpis": [
        {
          "name": "SAM Viability Ratio",
          "definition": "Percentage of identified TAM accounts currently serviceable by existing product and GTM channels",
          "target": "> 65.0%"
        },
        {
          "name": "SAM Penetration Rate",
          "definition": "Percentage of serviceable available accounts contracted as active customers",
          "target": "> 14.0%"
        },
        {
          "name": "Channel Efficiency Index",
          "definition": "Ratio of SAM ARR generated to total direct and partner channel operating spend",
          "target": "> 2.8x"
        }
      ],
      "visualModel": {
        "type": "funnel",
        "caption": "Serviceable Market Qualification & Penetration Funnel",
        "metrics": [
          {
            "label": "Total TAM Accounts",
            "value": "4,850",
            "delta": "Total"
          },
          {
            "label": "Serviceable (SAM)",
            "value": "3,120",
            "delta": "64.3%"
          },
          {
            "label": "Active Pipeline Penetration",
            "value": "18.4%",
            "delta": "+4.2 pts"
          },
          {
            "label": "Contracted Customer Share",
            "value": "11.8%",
            "delta": "+2.8 pts"
          }
        ]
      }
    },
    {
      "id": "white-space-intelligence",
      "slug": "white-space-intelligence",
      "title": "White Space Intelligence",
      "businessQuestion": "Where are the uncontested, high-margin market spaces overlooked by major competitors?",
      "explanation": "Identifies underserved customer micro-segments, emerging workflow gaps, and unaddressed commercial requirements where pricing power and win rates are maximized.",
      "topics": [
        {
          "title": "Competitor Blindspot Mapping",
          "description": "Analyze competitor product reviews, feature omissions, and customer complaints to isolate neglected workflows.",
          "businessEvidence": "G2/TrustRadius negative competitor reviews, customer churn exit interviews, and support forum threads.",
          "analysisProcess": "Textual semantic clustering mapping competitor feature gaps to unmet buyer requirements.",
          "decisionsEnabled": "Build purpose-built commercial packages targeting specific competitor product deficiencies."
        },
        {
          "title": "Micro-Segment Profitability Isolation",
          "description": "Identify specialized vertical niches willing to pay premium prices for domain-specific automation.",
          "businessEvidence": "Historical win rates by sub-industry, average discount levels, and time-to-close metrics.",
          "analysisProcess": "Niche economic profitability indexing cross-referencing willingness-to-pay with competitive density.",
          "decisionsEnabled": "Pivot marketing spend into specialized high-margin niches where competitors lack domain expertise."
        },
        {
          "title": "Latent Workflow Headroom Discovery",
          "description": "Examine adjacent operational processes that customers currently manage in messy spreadsheets.",
          "businessEvidence": "Customer workflow screen-share recordings, CSV export logs, and manual integration inquiries.",
          "analysisProcess": "Workflow shadow-IT audit identifying recurring manual administrative friction points.",
          "decisionsEnabled": "Develop automated workflow add-ons that capture incremental $15K-$30K ARR per account."
        },
        {
          "title": "First-Mover Moat Construction",
          "description": "Establish proprietary data integrations and regulatory templates that lock in white-space dominance.",
          "businessEvidence": "API integration partnerships, proprietary industry benchmarks, and exclusive data agreements.",
          "analysisProcess": "Defensibility barrier modeling evaluating switching costs and competitor replication difficulty.",
          "decisionsEnabled": "Secure exclusive ecosystem partnerships before competing vendors recognize the market opportunity."
        }
      ],
      "useCase": {
        "situation": "A horizontal CRM vendor struggled with cutthroat price wars against Salesforce and HubSpot.",
        "action": "White Space Intelligence identified an underserved niche: specialized clinical trial vendor relationship management.",
        "outcome": "Captured 42 pharmaceutical clients at 2.4x higher average contract value with zero competitor pushback."
      },
      "kpis": [
        {
          "name": "White-Space Win Rate",
          "definition": "Win rate in identified uncontested micro-segments and workflow categories",
          "target": "> 68.0%"
        },
        {
          "name": "ASP Premium Over Horizontal",
          "definition": "Percentage price premium achieved in specialized white-space niches",
          "target": "> 40.0%"
        },
        {
          "name": "Competitor Density Score",
          "definition": "Average number of competing vendors present in active evaluation RFPs",
          "target": "< 1.4 Vendors"
        }
      ],
      "visualModel": {
        "type": "matrix",
        "caption": "White-Space Micro-Segment Attractiveness & Pricing Power Matrix",
        "metrics": [
          {
            "label": "Identified White Spaces",
            "value": "6 Niches",
            "delta": "High Margin"
          },
          {
            "label": "Average Win Rate",
            "value": "72.4%",
            "delta": "+28 pts"
          },
          {
            "label": "ASP Premium",
            "value": "+48.5%",
            "delta": "Proven"
          },
          {
            "label": "Competitor Presence",
            "value": "1.1 Vendors",
            "delta": "Uncontested"
          }
        ]
      }
    },
    {
      "id": "untapped-demand-discovery",
      "slug": "untapped-demand-discovery",
      "title": "Untapped Demand Discovery",
      "businessQuestion": "How do you capture emerging buyer demand before formal RFPs appear on competitor radars?",
      "explanation": "Monitors regulatory changes, new executive mandates, technology upgrades, and dark-funnel research to capture early-stage buyer demand before competitive bidding begins.",
      "topics": [
        {
          "title": "Pre-RFP Demand Signal Sensing",
          "description": "Detect enterprise accounts formulating internal evaluation committees months before commercial engagement.",
          "businessEvidence": "Job description keyword changes, tech stack evaluation queries, and specialized webinar attendance.",
          "analysisProcess": "Predictive intent aggregation identifying the earliest indicators of corporate procurement cycles.",
          "decisionsEnabled": "Engage prospective buyers during the problem-definition phase to shape evaluation criteria."
        },
        {
          "title": "Regulatory Mandate Catalyst Capture",
          "description": "Connect upcoming statutory compliance deadlines directly to unbudgeted enterprise purchasing surges.",
          "businessEvidence": "Statutory compliance publications, industry audit mandates, and legal advisory alerts.",
          "analysisProcess": "Compulsory compliance demand modeling estimating the volume of accounts forced to purchase solutions.",
          "decisionsEnabled": "Launch turnkey compliance packages positioned as mandatory risk mitigation."
        },
        {
          "title": "Technology Upgrade Cycle Tracking",
          "description": "Identify enterprise accounts running on deprecated legacy platforms nearing mandatory end-of-life.",
          "businessEvidence": "Vendor end-of-support bulletins, technographic footprint scans, and infrastructure job postings.",
          "analysisProcess": "Legacy software obsolescence tracking predicting replacement timeline urgency.",
          "decisionsEnabled": "Target legacy displacement campaigns offering accelerated data migration guarantees."
        },
        {
          "title": "Executive Change Demand Triggers",
          "description": "Leverage C-suite transitions that trigger immediate review and consolidation of commercial technology stacks.",
          "businessEvidence": "Executive appointment press releases, corporate restructuring filings, and LinkedIn updates.",
          "analysisProcess": "First-100-day executive agenda modeling forecasting strategic technology procurement.",
          "decisionsEnabled": "Deliver tailored strategic transition briefs to new executives within their first 30 days."
        }
      ],
      "useCase": {
        "situation": "An analytics vendor entered deals late during formal RFPs, losing 65% of evaluations to entrenched incumbents.",
        "action": "Deployed Untapped Demand Discovery to identify accounts researching data compliance 6 months before RFP release.",
        "outcome": "Engaged 34 accounts pre-RFP, shaping the technical requirements and winning 26 without competitive bidding."
      },
      "kpis": [
        {
          "name": "Pre-RFP Engagement Rate",
          "definition": "Percentage of enterprise pipeline opportunities initiated before formal RFP issuance",
          "target": "> 55.0%"
        },
        {
          "name": "Solo Deal Win Rate",
          "definition": "Win rate on opportunities where no other competitor was evaluated by the buyer",
          "target": "> 78.0%"
        },
        {
          "name": "Early Engagement Cycle Delta",
          "definition": "Reduction in sales cycle length when accounts are engaged during problem definition",
          "target": "> 30 Days"
        }
      ],
      "visualModel": {
        "type": "journey",
        "caption": "Pre-RFP Demand Signal Capture & Buyer Framing Journey",
        "metrics": [
          {
            "label": "Pre-RFP Pipeline Share",
            "value": "58.4%",
            "delta": "+32 pts"
          },
          {
            "label": "Solo Deal Close Rate",
            "value": "81.2%",
            "delta": "+24 pts"
          },
          {
            "label": "Cycle Reduction",
            "value": "34 Days",
            "delta": "Compressed"
          },
          {
            "label": "First-Look Advantage",
            "value": "4.2x",
            "delta": "Leading"
          }
        ]
      }
    },
    {
      "id": "customer-potential-mapping",
      "slug": "customer-potential-mapping",
      "title": "Customer Potential Mapping",
      "businessQuestion": "Which existing accounts hold massive unharvested cross-sell and expansion headroom?",
      "explanation": "Maps organizational hierarchies, subsidiary entities, operational divisions, and product utilization across active accounts to quantify wallet-share expansion potential.",
      "topics": [
        {
          "title": "Account Wallet-Share Sizing",
          "description": "Compare current contracted ARR against the total addressable software budget across all account subsidiaries.",
          "businessEvidence": "Customer corporate org charts, 10-K subsidiary disclosures, and employee department headcounts.",
          "analysisProcess": "Wallet-share penetration indexing measuring current spend versus full enterprise license potential.",
          "decisionsEnabled": "Identify accounts spending $50K ARR that hold verified potential for $500K+ enterprise agreements."
        },
        {
          "title": "Subsidiary & Division Cross-Pollination",
          "description": "Map unpenetrated business units and regional subsidiaries within existing enterprise client corporations.",
          "businessEvidence": "Global corporate family trees, internal champion referral introductions, and shared IT infrastructure.",
          "analysisProcess": "Entity cross-pollination modeling identifying division leaders facing identical operational challenges.",
          "decisionsEnabled": "Leverage successful deployments in Division A to secure warm executive introductions in Division B."
        },
        {
          "title": "Consumption Saturation Inflection Detection",
          "description": "Identify customer accounts approaching 85%+ license or API consumption limits before contract renewal.",
          "businessEvidence": "Live product telemetry, active user seat counts, API call frequency, and storage capacity.",
          "analysisProcess": "Utilization threshold monitoring triggering automated expansion alerts to Account Executives.",
          "decisionsEnabled": "Initiate proactive contract expansion discussions months before renewal to avoid billing disputes."
        },
        {
          "title": "Multi-Product Adoption Propensity",
          "description": "Predict which complementary product modules an existing customer account is most likely to purchase next.",
          "businessEvidence": "Feature trial telemetry, help center search queries, and historical peer-cohort adoption paths.",
          "analysisProcess": "Collaborative filtering recommendation algorithms calculating cross-sell propensity scores.",
          "decisionsEnabled": "Present tailored add-on proposals aligned with documented customer usage patterns."
        }
      ],
      "useCase": {
        "situation": "Account Executives treated renewals as routine check-ins, ignoring that Fortune 500 clients had 12 unserved divisions.",
        "action": "Customer Potential Mapping uncovered $14M in unharvested expansion headroom across 25 core enterprise accounts.",
        "outcome": "Expanded average account value from $68K to $210K over 18 months, boosting net retention to 134%."
      },
      "kpis": [
        {
          "name": "Wallet-Share Penetration",
          "definition": "Current contracted ARR divided by total addressable spend within active customer accounts",
          "target": "> 35.0%"
        },
        {
          "name": "Multi-Division Account Ratio",
          "definition": "Percentage of enterprise customers deployed across two or more operational divisions",
          "target": "> 45.0%"
        },
        {
          "name": "Expansion Revenue Contribution",
          "definition": "Percentage of total quarterly net new ARR originating from existing account expansion",
          "target": "> 40.0%"
        }
      ],
      "visualModel": {
        "type": "driver-tree",
        "caption": "Enterprise Account Wallet-Share & Subsidiary Expansion Tree",
        "metrics": [
          {
            "label": "Audited Enterprise Accounts",
            "value": "180 Accounts",
            "delta": "Mapped"
          },
          {
            "label": "Unharvested Headroom",
            "value": "$28.4M",
            "delta": "Identified"
          },
          {
            "label": "Multi-Division Customers",
            "value": "48.2%",
            "delta": "+18 pts"
          },
          {
            "label": "Average Account Expansion",
            "value": "+142%",
            "delta": "Compounding"
          }
        ]
      }
    },
    {
      "id": "market-opportunity-prioritization",
      "slug": "market-opportunity-prioritization",
      "title": "Market Opportunity Prioritization",
      "businessQuestion": "How do you mathematically rank competing market opportunities based on fit, value, and feasibility?",
      "explanation": "Ranks commercial growth opportunities using multi-criteria decision matrices, balancing market size, competitive intensity, customer acquisition friction, and margin potential.",
      "topics": [
        {
          "title": "Multi-Criteria Scoring Rubrics",
          "description": "Evaluate growth initiatives across market attractiveness, strategic fit, engineering lift, and gross margin.",
          "businessEvidence": "Market sizing estimates, development effort story points, CAC benchmarks, and gross margins.",
          "analysisProcess": "Analytical hierarchy process (AHP) weighting commercial payoff against execution risk.",
          "decisionsEnabled": "Eliminate subjective executive pet projects in favor of mathematically prioritized initiatives."
        },
        {
          "title": "Capital Payback Velocity Modeling",
          "description": "Calculate the expected months to achieve cash-flow breakeven for each proposed market expansion vector.",
          "businessEvidence": "Capex/Opex expenditure forecasts, projected customer acquisition pace, and price points.",
          "analysisProcess": "Discounted cash flow payback modeling evaluating capital consumption curves.",
          "decisionsEnabled": "Fund market expansion initiatives that achieve self-funding cash flow within 9 months."
        },
        {
          "title": "Competitive Density & Resistance Indexing",
          "description": "Quantify the defensive moat and pricing power available within target market opportunities.",
          "businessEvidence": "Number of active funded competitors, customer churn rates in segment, and average discounting.",
          "analysisProcess": "Porter five-forces competitive intensity indexing scoring market defensibility.",
          "decisionsEnabled": "Avoid bloody red-ocean markets where competitor discounting eliminates operating profit."
        },
        {
          "title": "Dynamic Portfolio Rebalancing",
          "description": "Quarterly review of commercial bets to reallocate capital away from underperforming market initiatives.",
          "businessEvidence": "Milestone achievement reports, early pipeline creation velocity, and win rate baselines.",
          "analysisProcess": "Stage-gate portfolio management terminating initiatives failing to meet early conversion thresholds.",
          "decisionsEnabled": "Reassign engineering and sales capacity to winning market vectors without emotional sunk-cost bias."
        }
      ],
      "useCase": {
        "situation": "Leadership debated 8 different international and vertical expansion ideas, fragmenting company focus and capital.",
        "action": "Applied Market Opportunity Prioritization to mathematically score all 8 initiatives on ROI, CAC, and delivery lift.",
        "outcome": "Focused 100% of expansion capital on the top 2 vectors, achieving profitability in both within 7 months."
      },
      "kpis": [
        {
          "name": "Prioritization Precision",
          "definition": "Percentage of top-ranked market opportunities achieving projected revenue milestones",
          "target": "> 80.0%"
        },
        {
          "name": "Portfolio Payback Period",
          "definition": "Median months required for allocated expansion capital to achieve full cash payback",
          "target": "< 10 Mos"
        },
        {
          "name": "Resource Focus Ratio",
          "definition": "Percentage of GTM growth capital concentrated in the top 2 prioritized market initiatives",
          "target": "> 75.0%"
        }
      ],
      "visualModel": {
        "type": "scorecard",
        "caption": "Market Opportunity Prioritization & Capital Allocation Scorecard",
        "metrics": [
          {
            "label": "Evaluated Initiatives",
            "value": "14 Bets",
            "delta": "Audited"
          },
          {
            "label": "Selected Focus Vectors",
            "value": "2 Initiatives",
            "delta": "Prioritized"
          },
          {
            "label": "Payback Velocity",
            "value": "8.4 Mos",
            "delta": "-6 Mos"
          },
          {
            "label": "Capital Concentration",
            "value": "82.0%",
            "delta": "Disciplined"
          }
        ]
      }
    },
    {
      "id": "revenue-opportunity-modeling",
      "slug": "revenue-opportunity-modeling",
      "title": "Revenue Opportunity Modeling",
      "businessQuestion": "How do you construct rigorous financial projections for new revenue streams under uncertainty?",
      "explanation": "Builds detailed parametric financial models simulating adoption pacing, price realization, churn decay, and contribution margins for proposed commercial opportunities.",
      "topics": [
        {
          "title": "Parametric Commercial Financial Models",
          "description": "Deconstruct proposed revenue streams into driver variables: addressable accounts, conversion %, ASP, and NRR.",
          "businessEvidence": "Historical cohort baselines, beta customer pre-orders, and industry adoption benchmarks.",
          "analysisProcess": "Sensitivity simulation modeling evaluating revenue yield under varying market adoption velocities.",
          "decisionsEnabled": "Establish rigorous, defensible revenue milestones for executive and board investment cases."
        },
        {
          "title": "Elasticity & Price Sensitivity Testing",
          "description": "Simulate revenue outcomes under differing pricing tiers, packaging bundles, and usage meters.",
          "businessEvidence": "Conjoint analysis survey data, Van Westendorp price sensitivity tests, and pilot customer feedback.",
          "analysisProcess": "Price elasticity curve estimation identifying the revenue-maximizing price point.",
          "decisionsEnabled": "Price new commercial offerings to maximize aggregate ARR rather than optimizing unit volume."
        },
        {
          "title": "Cost-to-Deliver Unit Economics Simulation",
          "description": "Forecast the gross margin profile of new revenue streams including hosting, API costs, and CSM support.",
          "businessEvidence": "Cloud compute architecture estimates, support tier requirements, and partner licensing fees.",
          "analysisProcess": "Pro-forma contribution margin modeling ensuring new revenue streams deliver > 75% gross margin.",
          "decisionsEnabled": "Reject or re-architect product concepts that fail to clear corporate profitability thresholds."
        },
        {
          "title": "Downside Risk & Sensitivity Boundaries",
          "description": "Identify the minimum operational conditions required to prevent financial loss on commercial launches.",
          "businessEvidence": "Fixed GTM investment commitments, hiring sunk costs, and marketing expenditure floors.",
          "analysisProcess": "Breakeven sensitivity analysis calculating minimum required win rates and customer retention.",
          "decisionsEnabled": "Establish clear stop-loss triggers that automatically pause initiatives if KPIs fall below baseline."
        }
      ],
      "useCase": {
        "situation": "A product team proposed a new AI add-on module with vague revenue projections ranging from $1M to $20M.",
        "action": "Constructed Revenue Opportunity Modeling using empirical customer willingness-to-pay and compute cost models.",
        "outcome": "Proved the module would generate $4.2M ARR at 82% gross margin, securing board approval in one meeting."
      },
      "kpis": [
        {
          "name": "Model Projection Accuracy",
          "definition": "Variance between pro-forma Year 1 revenue projection and actual realized ARR",
          "target": "< 8.0%"
        },
        {
          "name": "Projected Gross Margin %",
          "definition": "Target gross margin profile verified prior to commercial development authorization",
          "target": "> 78.0%"
        },
        {
          "name": "Breakeven Timeline",
          "definition": "Projected months to recover all dedicated R&D and commercial launch expenditures",
          "target": "< 12 Mos"
        }
      ],
      "visualModel": {
        "type": "waterfall",
        "caption": "Parametric Opportunity Modeling & Gross Margin Waterfall",
        "metrics": [
          {
            "label": "Projected Year 1 ARR",
            "value": "$4.2M",
            "delta": "Modeled"
          },
          {
            "label": "Projected Gross Margin",
            "value": "81.4%",
            "delta": "High Margin"
          },
          {
            "label": "Breakeven Horizon",
            "value": "8.8 Mos",
            "delta": "Profitable"
          },
          {
            "label": "Variance Margin of Error",
            "value": "±6.2%",
            "delta": "Validated"
          }
        ]
      }
    },
    {
      "id": "growth-potential-forecasting",
      "slug": "growth-potential-forecasting",
      "title": "Growth Potential Forecasting",
      "businessQuestion": "How do you model multi-year corporate growth trajectories based on empirical market and customer dynamics?",
      "explanation": "Combines addressable market penetration, customer cohort expansion, and new product pipeline into integrated multi-year enterprise growth forecasts.",
      "topics": [
        {
          "title": "Longitudinal Cohort Compounding Forecasting",
          "description": "Project baseline revenue compounding from retained customer cohorts applying empirical NRR decay rates.",
          "businessEvidence": "Multi-year cohort walk tables, gross churn percentages, and historical expansion trends.",
          "analysisProcess": "Cohort vintage extrapolation modeling baseline revenue that recurs with zero new sales acquisition.",
          "decisionsEnabled": "Understand the underlying organic momentum of your customer base before adding new sales headcount."
        },
        {
          "title": "New Logo Acquisition Pacing Projections",
          "description": "Forecast net new customer ARR based on marketing pipeline velocity, rep ramp curves, and win rates.",
          "businessEvidence": "Sales rep hiring schedules, lead generation throughput, and historical quota attainment curves.",
          "analysisProcess": "Capacity-constrained pipeline throughput modeling forecasting realistic new logo additions.",
          "decisionsEnabled": "Set aggressive but achievable corporate targets that avoid premature sales overhiring."
        },
        {
          "title": "New Product Monetization Ramp Modeling",
          "description": "Model the revenue contribution of upcoming product lines and vertical expansions over a 3-year horizon.",
          "businessEvidence": "Beta trial conversion rates, product launch timelines, and sales enablement milestones.",
          "analysisProcess": "Bass diffusion technology adoption curve modeling across existing and new customer segments.",
          "decisionsEnabled": "Accurately forecast the timing of revenue inflection points driven by major product innovations."
        },
        {
          "title": "Enterprise Valuation Impact Simulation",
          "description": "Connect projected ARR growth rates, gross margins, and NRR to prospective enterprise valuation multiples.",
          "businessEvidence": "Public B2B software valuation multiples, Rule of 40 indices, and cost of capital benchmarks.",
          "analysisProcess": "Corporate valuation regression modeling demonstrating enterprise multiple expansion drivers.",
          "decisionsEnabled": "Guide executive strategy toward the specific metrics (e.g. NRR vs top-line growth) that maximize valuation."
        }
      ],
      "useCase": {
        "situation": "C-suite executive team lacked a unified 3-year financial model to present to private equity investors during Series C.",
        "action": "Engineered Growth Potential Forecasting combining bottom-up cohort compounding with capacity-modeled pipeline.",
        "outcome": "Delivered an institutional-grade 3-year forecast model that helped secure $45M in growth financing at a top-decile valuation multiple."
      },
      "kpis": [
        {
          "name": "3-Year Forecast Reliability",
          "definition": "Variance between 24-month projected growth trajectory and actual audited financials",
          "target": "< 6.0%"
        },
        {
          "name": "Organic Growth Baseline %",
          "definition": "Percentage of projected annual revenue growth generated solely from existing cohort expansion",
          "target": "> 50.0%"
        },
        {
          "name": "Rule of 40 Progression",
          "definition": "Sum of projected revenue growth rate percentage and free cash flow margin percentage",
          "target": "> 50.0%"
        }
      ],
      "visualModel": {
        "type": "orchestration",
        "caption": "Multi-Year Growth Potential Architecture & Valuation Impact Model",
        "metrics": [
          {
            "label": "3-Year Growth Target",
            "value": "+142%",
            "delta": "Modeled"
          },
          {
            "label": "Cohort Baseline Contribution",
            "value": "54.2%",
            "delta": "Organic"
          },
          {
            "label": "Rule of 40 Score",
            "value": "52.8%",
            "delta": "Top Decile"
          },
          {
            "label": "Valuation Multiple Lift",
            "value": "2.4x",
            "delta": "Engineered"
          }
        ]
      }
    }
  ],
  "methodologyWorkflow": [
    {
      "stepNumber": "01",
      "title": "TAM Audit",
      "input": "Verified corporate entity registries",
      "activity": "Enumerate addressable accounts with bottom-up qualification",
      "output": "Defensible Addressable TAM"
    },
    {
      "stepNumber": "02",
      "title": "SAM Filtering",
      "input": "Technical and channel constraints",
      "activity": "Map serviceable market reachable by current GTM channels",
      "output": "Serviceable Target Accounts"
    },
    {
      "stepNumber": "03",
      "title": "White Space Sensing",
      "input": "Competitor reviews & workflow gaps",
      "activity": "Isolate uncontested niches with high willingness-to-pay",
      "output": "Prioritized White Spaces"
    },
    {
      "stepNumber": "04",
      "title": "Headroom Mapping",
      "input": "Installed customer subsidiary trees",
      "activity": "Calculate unharvested wallet-share per enterprise client",
      "output": "Account Expansion Blueprint"
    },
    {
      "stepNumber": "05",
      "title": "Growth Forecasting",
      "input": "Parametric financial sensitivity models",
      "activity": "Simulate 3-year corporate growth and valuation milestones",
      "output": "Integrated Growth Forecast"
    }
  ],
  "primaryKpis": [
    {
      "name": "Addressable Headroom ARR",
      "definition": "Total validated unharvested annual recurring revenue within verified addressable accounts.",
      "formula": "Sum of (Qualified Target Accounts × Benchmark ASP) - Current Contracted ARR",
      "unit": "$ ARR",
      "reportingPeriod": "Annualized",
      "baseline": "$45M ARR",
      "target": "$180M ARR",
      "illustrativeValue": "$184M ARR",
      "interpretation": "Large validated headroom confirms substantial runway for multi-year corporate expansion.",
      "category": "Executive"
    },
    {
      "name": "Customer Wallet-Share Capture",
      "definition": "Percentage of total addressable client spend captured by current product subscriptions.",
      "formula": "Current Client ARR / Total Validated Client Software Budget in Category",
      "unit": "% Wallet-Share",
      "reportingPeriod": "Semi-Annual",
      "baseline": "12.0%",
      "target": "35.0%",
      "illustrativeValue": "34.2%",
      "interpretation": "Expanding wallet-share reflects successful multi-product cross-selling and account compounding.",
      "category": "Unit Economics"
    },
    {
      "name": "White-Space Win Rate",
      "definition": "Win rate in identified uncontested micro-segments and specialized workflow categories.",
      "formula": "Closed-Won Opportunities / Total Evaluated Opportunities in White Space",
      "unit": "% Win Rate",
      "reportingPeriod": "Quarterly",
      "baseline": "32.0%",
      "target": "65.0%",
      "illustrativeValue": "72.4%",
      "interpretation": "High win rates in white spaces validate absence of entrenched competitors and strong pricing power.",
      "category": "Commercial"
    }
  ],
  "scenarios": [
    {
      "title": "B2B Enterprise Platform Revenue Potential Discovery",
      "industry": "Enterprise Software & Data Infrastructure",
      "baselineSituation": "$34M ARR company growing at 12% YoY, experiencing fierce price competition in its core CRM integration market.",
      "observedProblem": "Sales leadership believed the market was saturated, but customer success reported clients were building manual workarounds in Excel.",
      "analysis": "White Space Intelligence identified an uncontested adjacent workflow: automated compliance audit reporting, valued at $22K ARR per account.",
      "decisionEvaluated": "Productize the compliance reporting module and launch targeted campaigns to both installed accounts and new compliance buyers.",
      "expectedImprovement": "Unlock $8M in net new ARR within 12 months with > 80% gross margin.",
      "validatingMetrics": [
        "Net New ARR (+$8.4M)",
        "Installed Base Adoption (42% of accounts)",
        "ASP Increase (+38%)"
      ],
      "assumptions": "Assumed beta release is completed in 90 days and sales enablement delivers certified playbooks."
    }
  ],
  "dataConsiderations": [
    {
      "title": "Corporate Hierarchy Cleanliness",
      "description": "Account mapping requires clean Dun & Bradstreet or GLEIF entity IDs to link corporate parents to regional operating subsidiaries.",
      "impactLevel": "Critical"
    },
    {
      "title": "Continuous Competitor Telemetry",
      "description": "Competitor pricing moves and feature deprecation must be monitored monthly to capture emerging white space windows.",
      "impactLevel": "High"
    },
    {
      "title": "Granular Telemetry Metering",
      "description": "Customer expansion triggers require real-time product usage tracking without sampling distortion.",
      "impactLevel": "High"
    }
  ],
  "decisionSupport": [
    {
      "priority": "Immediate (Weeks 1-3)",
      "focusArea": "Bottom-Up Account Registry TAM",
      "keyMetrics": "Verified ICP Account Count, Economic Ceiling",
      "tradeOffs": "Replacing inflated analyst TAM numbers with grounded operational account lists.",
      "recommendedAction": "Compile verified target account database and segment into tier-1, tier-2, and tier-3 priorities."
    },
    {
      "priority": "Secondary (Weeks 4-8)",
      "focusArea": "Customer Wallet-Share Mapping",
      "keyMetrics": "Installed Base Headroom, Subsidiary Cross-Sell",
      "tradeOffs": "Focusing Account Executives on expanding existing accounts versus hunting new logos.",
      "recommendedAction": "Deploy dedicated expansion playbooks to the top 20% of customer accounts with >$100K headroom."
    },
    {
      "priority": "Strategic (Weeks 9-12)",
      "focusArea": "White Space Capitalization",
      "keyMetrics": "Niche Win Rates, ASP Price Premium",
      "tradeOffs": "Investing R&D into specialized vertical workflows versus horizontal feature requests.",
      "recommendedAction": "Productize the highest-margin white space workflows and launch dedicated commercial packaging."
    }
  ],
  "visualTheme": "discovery"
};
