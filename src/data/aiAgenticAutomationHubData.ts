// AI & Agentic Automation Hub Data Models and Comprehensive Content Store
// Matches ProfitMachines AI-Native Revenue Transformation Platform Positioning

export interface AiAgenticFramework {
  title: string;
  description: string;
  steps: string[];
  formula?: string;
  output?: string;
}

export interface AiAgenticKpi {
  name: string;
  formula?: string;
  description: string;
  benchmark?: string;
}

export interface AiAgenticSection {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  intro: string;
  challenges: string[];
  frameworks: AiAgenticFramework[];
  kpis: AiAgenticKpi[];
  enterpriseApplications: {
    useCase: string;
    description: string;
    traditionalWay: string;
    agenticWay: string;
    impact: string;
  }[];
  architecturePoints: string[];
  governanceAndRisks: string[];
  recommendedNextSteps: string[];
}

export const AI_AGENTIC_SECTIONS: AiAgenticSection[] = [
  // ── 01. AI USE CASES ──
  {
    id: 'ai-use-cases',
    slug: 'ai-use-cases',
    number: '01',
    title: 'AI Use Cases',
    subtitle: 'Enterprise AI applications connected to measurable commercial revenue outcomes.',
    badge: 'Enterprise Impact',
    badgeColor: 'blue',
    intro: 'Identify, prioritize, and operationalize high-impact AI opportunities grounded in commercial unit economics rather than generic chatbot hype. We link AI execution directly to customer acquisition cost compression, pipeline acceleration, and gross margin protection.',
    challenges: [
      'Deploying generic conversational wrappers that lack domain context and revenue accountability.',
      'Unprioritized AI experimentation creating technical debt without measurable revenue contribution.',
      'Fragmented data silos preventing machine intelligence from accessing complete commercial history.',
      'Inability to measure dollar-for-dollar productivity gains from initial AI pilot investments.'
    ],
    frameworks: [
      {
        title: 'ICE-R Revenue Use Case Prioritization Matrix',
        description: 'Multi-criteria scoring model ranking potential AI deployments across Commercial Impact, Confidence, Execution Ease, and Revenue Risk.',
        steps: [
          'Audit current manual commercial bottlenecks across Marketing, Sales, and Customer Success.',
          'Quantify addressable labor hours and pipeline stall velocity for each candidate process.',
          'Score use cases on 1–10 scale across Impact, Feasibility, Data Readiness, and Revenue Leverage.',
          'Deploy first wave on High-Impact / High-Readiness quadrants with 30-day proof-of-value gates.'
        ],
        formula: 'Priority Score = (Commercial Impact × Revenue Leverage × Data Readiness) / Implementation Complexity',
        output: 'Ranked executive roadmap separating immediate quick wins from foundational platform investments.'
      },
      {
        title: 'Workflow Readiness & Feasibility Scoring Protocol',
        description: 'Technical evaluation of existing process repeatability, API availability, and training corpus cleanliness.',
        steps: [
          'Document current state SOPs and decision branching logic.',
          'Validate structured vs unstructured data distribution (CRM fields, recorded calls, PDF quotes).',
          'Assess latency tolerances: Real-time synchronous vs Batch asynchronous execution.',
          'Determine required human validation gates and exception escalation paths.'
        ],
        output: 'Stage-gate certification confirming workflow stability prior to agent deployment.'
      }
    ],
    kpis: [
      {
        name: 'Process Cycle Time Compression',
        formula: '[(Legacy Duration − Agentic Duration) / Legacy Duration] × 100',
        description: 'Percentage reduction in elapsed turnaround time for targeted commercial workflows.',
        benchmark: '65%–85% reduction'
      },
      {
        name: 'Cost Per Processed Opportunity',
        formula: 'Total S&M Variable Operating Expense / Total Qualified Opportunities Advanced',
        description: 'Unit economic measurement of operational overhead per pipeline advancement.',
        benchmark: '40%–60% cost reduction'
      },
      {
        name: 'Autonomous Task Completion Ratio',
        formula: 'Successful Autonomous Executions / Total Triggered Workflow Events',
        description: 'Proportion of tasks executed end-to-end without requiring human intervention.',
        benchmark: '>82% for tier-1 workflows'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'Autonomous ICP Account Research & Enrichment',
        description: 'Scrapes technographic telemetry, 10-K filings, and hiring signals to populate 45+ CRM fields before rep engagement.',
        traditionalWay: 'Rep spends 35 minutes per account manually clicking LinkedIn, Google News, and job boards.',
        agenticWay: 'Autonomous agent synthesizes multi-source data in 4 seconds and drafts custom executive hypotheses.',
        impact: '8.4 hours returned per rep per week directly to selling time.'
      },
      {
        useCase: 'Predictive Buying Committee Intent Triangulation',
        description: 'Correlates dark-funnel anonymous IP pings, content downloads, and peer review site interactions.',
        traditionalWay: 'Single lead downloads whitepaper; SDR blindly calls the individual without organizational context.',
        agenticWay: 'Agent flags entire committee active surge, identifying 5 key decision-makers across Finance and IT.',
        impact: '2.8x higher discovery meeting acceptance rate.'
      },
      {
        useCase: 'Continuous RFP & Security Questionnaire Synthesis',
        description: 'Parses complex 150-question enterprise security RFPs against verified infosec documentation.',
        traditionalWay: 'Solutions engineers and legal teams spend 12–18 business days coordinating responses.',
        agenticWay: 'Domain agent drafts 92% of technical answers with citations in under 3 minutes for human sign-off.',
        impact: 'RFP submission turnaround accelerated from 14 days to 48 hours.'
      }
    ],
    architecturePoints: [
      'Direct bidirectional connectors into Salesforce, HubSpot, Gong, and ERP systems.',
      'Semantic cache layer preventing redundant LLM inference calls on identical enterprise queries.',
      'Real-time streaming pipeline validating schema compliance before any CRM database mutation.'
    ],
    governanceAndRisks: [
      'Hallucination prevention through strict Retrieval-Augmented Generation (RAG) grounding with citation requirements.',
      'Customer PII tokenization and masking before data leaves enterprise VPC boundary.',
      'Mandatory human confirmation for high-stakes actions (pricing discounting, contract dispatch).'
    ],
    recommendedNextSteps: [
      'Conduct a 2-week Commercial Process AI Readiness Audit across your top 5 sales frictions.',
      'Establish baseline cycle time and labor expense metrics for prioritized candidate workflows.',
      'Deploy the ProfitMachines ICE-R prioritization scoring framework with key cross-functional stakeholders.'
    ]
  },

  // ── 02. AI AGENTS ──
  {
    id: 'ai-agents',
    slug: 'ai-agents',
    number: '02',
    title: 'AI Agents',
    subtitle: 'Task-oriented intelligent cognitive engines that execute defined business workflows.',
    badge: 'Task Engines',
    badgeColor: 'indigo',
    intro: 'Unlike passive chatbots that wait for conversational prompts, enterprise AI agents are goal-oriented execution units equipped with system instructions, memory, tool invocation, and deterministic feedback loops.',
    challenges: [
      'Transitioning from conversational Q&A toys to deterministic enterprise execution engines.',
      'Preventing infinite reasoning loops and runaway API costs during tool invocation.',
      'Maintaining persistent cross-session state across multi-day B2B sales cycles.',
      'Ensuring strict adherence to corporate tone, legal boundaries, and regulatory guardrails.'
    ],
    frameworks: [
      {
        title: 'The Enterprise Agent 9-Stage Execution Lifecycle',
        description: 'Deterministic lifecycle architecture governing every agent execution cycle from ingress to ledger audit.',
        steps: [
          '1. Ingress & Intent Parsing: Ingest event trigger (webhook, CRM update, email) and extract core intent.',
          '2. Context Hydration: Retrieve short-term session state and long-term enterprise semantic memory.',
          '3. Constraint Verification: Check security boundaries, role permissions, and token budget limits.',
          '4. Multi-Step Action Planning: Deconstruct high-level goal into sequential tool calls.',
          '5. Sandbox Tool Invocation: Execute approved external APIs (search, enrich, verify, calculate).',
          '6. Output Verification: Validate returned schema and hallucination cross-checks against source.',
          '7. Confidence Scoring: If confidence < 85%, route to human supervisor queue with draft context.',
          '8. Mutation Execution: Commit authorized changes into production CRM or communication layer.',
          '9. Immutable Ledger Logging: Record prompt tokens, tool latency, and user audit trail.'
        ],
        output: 'Zero-drift, enterprise-auditable task execution with deterministic safety gates.'
      },
      {
        title: 'Agent Tool Invocation & Sandboxing Protocol',
        description: 'Standardized function-calling harness isolating external API interactions with strict rate-limiting.',
        steps: [
          'Declare JSON Schema tool definitions with exact parameter bounds and type validation.',
          'Simulate mock execution in ephemeral staging sandbox before production API dispatch.',
          'Enforce idempotency keys on all write mutations to eliminate duplicate record creation.'
        ],
        output: 'Secure, predictable interface between cognitive reasoning models and enterprise system APIs.'
      }
    ],
    kpis: [
      {
        name: 'Agent Execution Accuracy (F1 Score)',
        formula: '2 × [(Precision × Recall) / (Precision + Recall)]',
        description: 'Harmonic mean of precision and recall on structured field extraction and classification.',
        benchmark: '>94.5% across production workloads'
      },
      {
        name: 'Human Escalation Rate',
        formula: '(Escalated Invocations / Total Initiated Invocations) × 100',
        description: 'Percentage of agent tasks routed to human operators due to low confidence or edge cases.',
        benchmark: '8%–14% target in steady-state'
      },
      {
        name: 'Mean Time to Execution (MTTE)',
        formula: 'Total Task Execution Elapsed Milliseconds / Total Tool Steps',
        description: 'Latency benchmark measuring reasoning throughput and API round-trip delay.',
        benchmark: '<3.2 seconds end-to-end'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'Autonomous Inbound Lead Qualification & Routing Agent',
        description: 'Evaluates incoming form fills, compares against ICP firmographics, verifies email deliverability, and books calendar slots.',
        traditionalWay: 'SDR checks form 4 hours later, researches company on ZoomInfo, sends generic template.',
        agenticWay: 'Agent executes enrichment in 800ms; if Tier-1, immediately triggers interactive calendar scheduler.',
        impact: 'Lead response time compressed from 4.2 hours to 45 seconds; demo booking lift +41%.'
      },
      {
        useCase: 'Executive Meeting Preparation & Dossier Agent',
        description: 'Synthesizes CRM deal history, recent LinkedIn executive posts, and earnings call transcripts 1 hour before scheduled sales calls.',
        traditionalWay: 'Account executive spends 45 minutes scanning notes or attends call unprepared.',
        agenticWay: 'Automated 1-page dossier delivered into Slack/Email with 3 custom discovery questions.',
        impact: 'First-call stage conversion jumps from 24% to 38% across mid-market and enterprise cohorts.'
      },
      {
        useCase: 'Continuous Pipeline Hygiene & Mutation Agent',
        description: 'Monitors rep calendar events, recorded Zoom calls, and sent emails to automatically maintain close dates, stage gates, and next steps.',
        traditionalWay: 'Sales managers spend 3 hours per week badgering reps during 1-on-1s to update stale CRM fields.',
        agenticWay: 'Agent listens to call completion, updates next steps and close dates, and alerts manager only if stalled.',
        impact: 'CRM data completeness reaches 98.4%; forecast reliability improved by 34%.'
      }
    ],
    architecturePoints: [
      'Model-agnostic reasoning core supporting Claude 3.5 Sonnet, GPT-4o, and fine-tuned open weights.',
      'LangGraph / State-Machine orchestration preventing circular non-terminating execution trees.',
      'Cryptographic API key vault with zero plaintext credential exposure to reasoning models.'
    ],
    governanceAndRisks: [
      'Strict execution limits: Maximum 5 recursive tool calls per task to guarantee bounded latency.',
      'Full semantic trace capture enabling engineering replay of failed or anomalous agent runs.',
      'Deterministic output schemas validated via Zod/Pydantic prior to downstream system handoff.'
    ],
    recommendedNextSteps: [
      'Map your repetitive SDR and RevOps manual routines into structured Tool Invocation specifications.',
      'Deploy single-purpose agents with human-in-the-loop validation for first 500 live transactions.',
      'Implement real-time OpenTelemetry tracking on prompt tokens, latency, and human override rates.'
    ]
  },

  // ── 03. AUTONOMOUS AGENTS ──
  {
    id: 'autonomous-agents',
    slug: 'autonomous-agents',
    number: '03',
    title: 'Autonomous Agents',
    subtitle: 'Goal-driven agents capable of planning, executing, and adapting tasks within defined boundaries.',
    badge: 'Bounded Autonomy',
    badgeColor: 'sky',
    intro: 'Moving beyond rigid procedural scripts, autonomous agents formulate their own sequential sub-plans, dynamically recover from environmental API errors, and independently navigate complex web applications while staying strictly within enterprise governance guardrails.',
    challenges: [
      'Balancing genuine goal-seeking adaptability with deterministic corporate compliance constraints.',
      'Managing the risk of unintended compound actions during unobserved multi-hour workflows.',
      'Defining unambiguous economic and operational boundaries where autonomous execution is authorized.',
      'Designing graceful degradation protocols when unexpected third-party UI/API changes occur.'
    ],
    frameworks: [
      {
        title: 'The 5-Level Enterprise Autonomy Model',
        description: 'A progressive governance hierarchy establishing permitted operational autonomy based on risk and verification capability.',
        steps: [
          'Level 1 — AI-Assisted Recommendations: Agent analyzes data, suggests draft actions; 100% human execution.',
          'Level 2 — Human-Approved Actions: Agent prepares complete action payload (e.g. email draft); 1-click human dispatch.',
          'Level 3 — Bounded Task Autonomy: Agent autonomously executes pre-approved actions within strict parameter thresholds.',
          'Level 4 — Coordinated Workflow Autonomy: Agent orchestrates multi-step cross-system workflows with automated rollback checks.',
          'Level 5 — Governed Multi-Workflow Autonomy: Multiple agents self-balance workload across corporate functions under policy oversight.'
        ],
        output: 'Institutional clarity determining exactly which commercial tasks qualify for Level 3+ deployment.'
      },
      {
        title: 'Autonomous Goal Decomposition & Self-Correction Protocol',
        description: 'Cognitive recursive planning engine that breaks abstract business mandates into atomic verifiable steps.',
        steps: [
          'Ingest high-level objective (e.g., "Identify and enrich 50 VP Revenue targets in FinTech with >$50M ARR").',
          'Formulate initial hypothesis tree and select primary retrieval endpoints.',
          'Evaluate intermediate outputs at each step; detect empty or anomalous data returns.',
          'Trigger alternative search pathways autonomously without crashing or halting the pipeline.'
        ],
        output: 'Robust self-healing execution resilient against individual endpoint or data-source failures.'
      }
    ],
    kpis: [
      {
        name: 'Autonomous Goal Completion Rate',
        formula: '(Successfully Concluded Complex Goals / Total Initiated Goals) × 100',
        description: 'Proportion of multi-step autonomous goals fulfilled without manual intervention.',
        benchmark: '88%–94% for Level 3 certified workflows'
      },
      {
        name: 'Self-Correction Recovery Ratio',
        formula: 'Autonomous Retries Succeeded / Total First-Attempt Exception Failures',
        description: 'Ability of the agent to identify error codes or malformed outputs and adjust approach.',
        benchmark: '>75% recovery efficiency'
      },
      {
        name: 'Intervention-Free Run Duration',
        formula: 'Continuous Autonomous Hours Executed Without Human Escalation Trigger',
        description: 'Reliability metric measuring operational endurance in continuous background cycles.',
        benchmark: '72+ continuous hours target'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'Autonomous Territory Lead Discovery & Enrichment',
        description: 'Explores industry trade databases, state business registries, and venture announcements to surface net-new accounts matching ICP criteria.',
        traditionalWay: 'Data ops team manually uploads batch CSV lists monthly with 35% stale records.',
        agenticWay: 'Agent continuously scans real-time filings, cross-references hiring velocity, and injects fresh prospects daily.',
        impact: 'Pipeline TAM expansion +34% with zero purchased static database vendor costs.'
      },
      {
        useCase: 'Autonomous Dark-Funnel Competitor Displacement Monitor',
        description: 'Tracks open bug trackers, public user forums, and executive reviews for signals of customer dissatisfaction with legacy competitors.',
        traditionalWay: 'Sales reps stumble upon competitor churn rumors months after accounts renew.',
        agenticWay: 'Agent alerts SDR within 15 minutes of negative competitor vendor sentiment, equipping rep with battlecard.',
        impact: 'Competitive displacement win rates improve from 18% to 33%.'
      },
      {
        useCase: 'Autonomous Revenue Operations Reconciliation',
        description: 'Cross-audits Stripe billing records, DocuSign contract terms, and Salesforce booked ARR numbers to identify discrepancies.',
        traditionalWay: 'Finance team spends 5 working days at month-end manually reconciling spreadsheets.',
        agenticWay: 'Agent runs daily automated reconciliation, highlights delta fields, and prepares journal corrections.',
        impact: 'Monthly close cycle compressed from 7 days to 24 hours with zero manual data entry.'
      }
    ],
    architecturePoints: [
      'Episodic and semantic memory vector index powered by pgvector / Pinecone with metadata partitioning.',
      'ReAct (Reason + Act) loop incorporating reflection tokens to evaluate interim task viability.',
      'Immutable cryptographic execution sandbox with strict outbound network IP allowlisting.'
    ],
    governanceAndRisks: [
      'Hard programmatic spending caps ($5.00 max token cost per goal) preventing runaway billing loops.',
      'Kill-switch circuit breaker instantly halting all active agent threads via global Redis flag.',
      'Comprehensive audit log capturing full reasoning chains and timestamped external tool interactions.'
    ],
    recommendedNextSteps: [
      'Categorize all internal sales development tasks across the 5-Level Autonomy framework.',
      'Establish strict boundary thresholds (e.g., maximum email volume, budget ceilings) for Level 3 pilots.',
      'Implement real-time Slack/Teams supervisor notification webhooks for edge-case alerts.'
    ]
  },

  // ── 04. AGENT ARCHITECTURES ──
  {
    id: 'agent-architectures',
    slug: 'agent-architectures',
    number: '04',
    title: 'Agent Architectures',
    subtitle: 'Technical patterns for agent orchestration, memory, tools, and decision execution.',
    badge: 'Systems Design',
    badgeColor: 'violet',
    intro: 'Enterprise-grade agent systems require robust technical blueprints that separate cognitive reasoning from persistent state, tool invocation, and integration adapters. We implement modular, resilient architectures designed for high throughput, low latency, and zero data leakage.',
    challenges: [
      'Monolithic agent designs that crash when one sub-component experiences API latency.',
      'Context window bloat leading to catastrophic forgetting, high token costs, and slow reasoning.',
      'Unstructured memory systems that fail to reconcile contradictory historical customer facts.',
      'Tight coupling between specific LLM providers and core business orchestration logic.'
    ],
    frameworks: [
      {
        title: 'The 10-Layer Enterprise Agent Technical Stack',
        description: 'Production architectural blueprint separating business interfaces from underlying cognitive foundations.',
        steps: [
          'Layer 1 — Omnichannel Interface: Headless API, Webhook, Slack bot, and CRM UI components.',
          'Layer 2 — Gateway & Rate Limiting: Authentication, tenant isolation, and token budget throttling.',
          'Layer 3 — Orchestration & State Machine: LangGraph directed acyclic graph (DAG) workflow engine.',
          'Layer 4 — Reasoning & Planning: Multi-model prompt compilation and tool selection heuristics.',
          'Layer 5 — Model Inference Abstraction: Unified provider router (Claude, OpenAI, Llama 3, DeepSeek).',
          'Layer 6 — Context & Memory Mesh: Working RAM, episodic vector retrieval, and entity graph store.',
          'Layer 7 — Retrieval & Grounding (RAG): Hybrid sparse/dense search across enterprise knowledge bases.',
          'Layer 8 — Tool & Function Execution: Sandboxed containerized execution of external API integrations.',
          'Layer 9 — Enterprise Integration Bus: Bidirectional sync with CRM, ERP, CDP, and data warehouses.',
          'Layer 10 — Observability & Telemetry: OpenTelemetry, trace logging, latency tracking, and audit trail.'
        ],
        output: 'Decoupled, horizontally scalable architecture ready for enterprise production workloads.'
      },
      {
        title: 'Tiered Memory Architecture (Working vs Episodic vs Entity)',
        description: 'Three-tiered memory design ensuring agents retain long-term buyer relationships without context overflow.',
        steps: [
          'Working Memory: Short-term scratchpad retaining current session turns and active JSON tool parameters.',
          'Episodic Memory: Time-stamped vector embeddings of past interactions, meetings, and email threads.',
          'Entity Knowledge Graph: Structured relational triples (Account, Stakeholder, TechStack, DealStage).'
        ],
        output: 'Instant sub-50ms context recall with zero degradation over multi-month enterprise deals.'
      }
    ],
    kpis: [
      {
        name: 'Context Retrieval Precision (NDCG@5)',
        formula: 'Normalized Discounted Cumulative Gain at top 5 retrieved memory chunks',
        description: 'Relevance quality of retrieved enterprise documentation grounding agent reasoning.',
        benchmark: '>0.91 across technical documentation'
      },
      {
        name: 'P95 End-to-End Latency',
        formula: '95th percentile elapsed response latency across all production agent requests',
        description: 'Speed benchmark ensuring interactive human-in-the-loop workflows remain snappy.',
        benchmark: '<2.8 seconds'
      },
      {
        name: 'Token Cost Efficiency Ratio',
        formula: 'Total Realized Commercial Value ($) / Total Monthly Model Inference Costs ($)',
        description: 'Return on AI infrastructure investment measuring economic operational leverage.',
        benchmark: '>120:1 value-to-compute ratio'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'Model Context Protocol (MCP) Integration Mesh',
        description: 'Implements Anthropic Model Context Protocol to standardize tool discovery and data exchange across internal enterprise APIs.',
        traditionalWay: 'Developers write fragile custom integration code for every CRM, calendar, and ERP system.',
        agenticWay: 'Universal MCP server exposes authenticated data endpoints with standardized permission schemas.',
        impact: 'New enterprise tool integration timeline compressed from 3 weeks to 2 hours.'
      },
      {
        useCase: 'Planner-Executor Decoupled Architecture',
        description: 'High-capability reasoning model (e.g. Claude 3.5 Sonnet) drafts execution plans, while smaller, fast models (Haiku / 4o-mini) execute deterministic sub-tasks.',
        traditionalWay: 'Expensive frontier model runs every trivial calculation and text formatting step.',
        agenticWay: 'Strategic planning separated from tactical execution via hierarchical dispatch.',
        impact: 'Inference operational expenditure reduced by 68% while maintaining frontier reasoning quality.'
      },
      {
        useCase: 'Hybrid Dense/Sparse Enterprise RAG Mesh',
        description: 'Combines BM25 keyword precision for exact SKU/part numbers with vector embeddings for semantic intent understanding.',
        traditionalWay: 'Standard vector-only search fails on exact product part numbers, acronyms, and contract clauses.',
        agenticWay: 'Reciprocal Rank Fusion merges lexical and semantic rankings with cross-encoder re-ranking.',
        impact: 'Technical product discovery accuracy jumps from 64% to 96.8%.'
      }
    ],
    architecturePoints: [
      'Event-driven asynchronous messaging broker (Apache Kafka / AWS SQS) buffering bursty lead spikes.',
      'Redis distributed locking preventing race conditions during concurrent account record updates.',
      'Multi-tenant database tenancy isolating customer data partitions with dedicated encryption keys.'
    ],
    governanceAndRisks: [
      'Comprehensive circuit breakers cutting external API calls when downstream services degrade.',
      'Immutable audit ledger preserving prompt inputs, system configurations, and completion outputs.',
      'Zero-retention data agreements ensuring enterprise proprietary data is never used for foundation model training.'
    ],
    recommendedNextSteps: [
      'Review existing monolithic internal AI scripts and decompose them into the 10-Layer Architecture.',
      'Implement standardized Model Context Protocol (MCP) servers across your internal CRM and knowledge bases.',
      'Set up LangSmith or Arize Phoenix telemetry to monitor token usage and latency distribution across layers.'
    ]
  },

  // ── 05. MULTI-AGENT SYSTEMS ──
  {
    id: 'multi-agent-systems',
    slug: 'multi-agent-systems',
    number: '05',
    title: 'Multi-Agent Systems',
    subtitle: 'Coordinated agent networks working together across complex, multi-functional enterprise workflows.',
    badge: 'Swarm Intelligence',
    badgeColor: 'emerald',
    intro: 'Complex enterprise revenue processes cannot be solved by a single generalist prompt. We architect specialized multi-agent swarms—where dedicated researcher, copywriter, compliance auditor, and strategist agents collaborate under a supervisory orchestrator to execute end-to-end commercial operations.',
    challenges: [
      'Coordination overhead and communication latency between multiple communicating cognitive agents.',
      'Preventing conflicting outputs or duplicate work across parallel executing sub-agents.',
      'Managing distributed state and shared context without exponential token consumption.',
      'Diagnosing failure root causes across asynchronous multi-agent handoff cascades.'
    ],
    frameworks: [
      {
        title: 'Hierarchical Supervisor-Worker Orchestration Pattern',
        description: 'Orchestration architecture where a master Supervisor agent decomposes goals, delegates to specialized Workers, and synthesizes outputs.',
        steps: [
          'Supervisor Agent receives complex objective (e.g., "Full Account Pursuit Dossier for Fortune 500 Prospect").',
          'Supervisor spawns specialized workers in parallel: Firmographic Scout, Technographic Analyst, and Leadership Intent Tracker.',
          'Each worker agent executes independently using dedicated toolsets and isolated context windows.',
          'Critic / Auditor Agent reviews synthesized draft against brand rules and compliance policies.',
          'Supervisor verifies completeness against acceptance criteria before committing to CRM.'
        ],
        output: 'Clean separation of concerns with deterministic quality validation before delivery.'
      },
      {
        title: 'Conflict Resolution & Consensus Protocol',
        description: 'Algorithmic voting and arbitration mechanism resolving contradictory signals between specialist agents.',
        steps: [
          'Identify conflicting assessments (e.g., Scout reports budget surge; Risk agent flags layoff announcement).',
          'Weights assigned to specialist agents based on historical domain ground-truth accuracy.',
          'Orchestrator prompts arbitration synthesis model to explain delta and recommend weighted consensus.'
        ],
        output: 'Nuanced, triangulated intelligence capturing subtle enterprise commercial realities.'
      }
    ],
    kpis: [
      {
        name: 'Handoff Integrity Score',
        formula: '(Flawless Multi-Agent Transitions / Total Inter-Agent Handoffs) × 100',
        description: 'Measurement of data loss, schema corruption, or dropped context between agent handoffs.',
        benchmark: '>98.2% integrity target'
      },
      {
        name: 'Parallelization Speedup Factor',
        formula: 'Sequential Execution Elapsed Time / Multi-Agent Parallel Elapsed Time',
        description: 'Efficiency multiplier achieved by running specialist agents concurrently.',
        benchmark: '3.5x–5.2x speedup'
      },
      {
        name: 'Swarm Conflict Resolution Latency',
        formula: 'Mean Milliseconds Required to Arbitrate Discrepancies Between Specialist Agents',
        description: 'Throughput measurement of consensus protocols during live workflow orchestration.',
        benchmark: '<1.4 seconds'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'Autonomous Full-Funnel Account Pursuit Swarm',
        description: 'Four synchronized agents collaborate: Scout researches company triggers, Strategist crafts account hypothesis, Copywriter drafts tailored multi-channel touches, and Compliance checks do-not-contact lists.',
        traditionalWay: 'SDR spends 4 hours manually piecing together disparate data into fragmented emails.',
        agenticWay: 'Swarm delivers complete, fully cited pursuit campaign directly into sales cadences in 90 seconds.',
        impact: 'Outbound meeting booking rates increase from 2.1% to 8.4%.'
      },
      {
        useCase: 'Competitive Deal Defense Swarm',
        description: 'When competitor is mentioned on call, Battlecard Agent pulls recent head-to-head win notes, Pricing Agent models margin parity, and Technical Agent prepares architecture diffs.',
        traditionalWay: 'Rep scrambles for 3 days post-call trying to gather technical and pricing responses.',
        agenticWay: 'Rep receives customized comprehensive Competitive Defense Pack within 15 minutes of call ending.',
        impact: 'Competitive deal win rates surge by 15 gross margin points.'
      },
      {
        useCase: 'Customer Renewal Risk & Health Assessment Swarm',
        description: 'Telemetry Agent analyzes daily active user trends, Support Agent scores ticket sentiment, and Contract Agent scans upcoming renewal clauses to predict expansion vs churn probability.',
        traditionalWay: 'Customer Success Managers look at dashboards 30 days before contract expiry—often too late.',
        agenticWay: 'Swarm flags renewal risks 120 days out and prepares prescriptive retention playbooks.',
        impact: 'Gross Revenue Retention (GRR) protected; churn decreased by 22%.'
      }
    ],
    architecturePoints: [
      'LangGraph state graphs modeling branching logic, sub-graphs, and parallel human review gates.',
      'Shared Redis blackboard state allowing non-blocking reads and isolated sub-agent writes.',
      'Message queue dead-letter channels capturing anomalous communication payloads for engineering inspection.'
    ],
    governanceAndRisks: [
      'Maximum agent spawn limits preventing runaway process multiplication in parallel loops.',
      'Deterministic schema contracts between worker agents enforced via JSON schema validators.',
      'Global timeout boundaries terminating any stuck sub-agent thread after 30 seconds.'
    ],
    recommendedNextSteps: [
      'Deconstruct complex commercial processes into 3–4 specialized roles rather than a single massive prompt.',
      'Deploy the Supervisor-Worker orchestration pattern using LangGraph or AutoGen frameworks.',
      'Establish a dedicated Auditor Agent specifically assigned to critique and check worker outputs.'
    ]
  },

  // ── 06. AI GOVERNANCE ──
  {
    id: 'ai-governance',
    slug: 'ai-governance',
    number: '06',
    title: 'AI Governance',
    subtitle: 'Enterprise oversight, accountability, auditability, and responsible AI operational controls.',
    badge: 'Enterprise Trust',
    badgeColor: 'amber',
    intro: 'As AI agents transition from informative advisors to autonomous actors executing real-world commercial transactions, governance is no longer an afterthought. We establish comprehensive policy frameworks, continuous auditing, and transparent accountability models that satisfy enterprise compliance and regulatory standards.',
    challenges: [
      'Shadow AI adoption across business units with zero visibility into data sharing and legal exposure.',
      'Lack of clear organizational accountability when an autonomous agent produces erroneous outputs.',
      'Compliance uncertainty regarding emerging regulations including the EU AI Act, NIST AI RMF, and ISO 42001.',
      'Inability to audit the exact reasoning, prompt inputs, and data sources behind historic automated actions.'
    ],
    frameworks: [
      {
        title: 'The ProfitMachines Enterprise AI Governance Framework',
        description: 'Comprehensive 8-pillar institutional oversight architecture spanning lifecycle validation to regulatory certification.',
        steps: [
          '1. AI System Inventory: Centralized catalog of all models, prompts, tools, and autonomous agent instances.',
          '2. Risk Categorization: Formal classification across Low, Moderate, High, and Prohibited operational risk tiers.',
          '3. Data Provenance & Lineage: Complete tracking of training data, RAG document sources, and runtime context.',
          '4. Model & Prompt Validation: Pre-deployment red-teaming, bias testing, and hallucination tolerance verification.',
          '5. Human Oversight Architecture: Explicit role definition for human-in-the-loop, on-the-loop, and in-command gates.',
          '6. Runtime Telemetry & Logging: Immutable capture of every inference call, prompt token, and tool response.',
          '7. Continuous Drift Monitoring: Real-time detection of model decay, behavioral shift, and semantic variance.',
          '8. Policy & Incident Remediation: Formal protocol for agent revocation, rollback, and regulatory reporting.'
        ],
        output: 'Institutional readiness certified for enterprise SOC 2 Type II, ISO 42001, and board review.'
      },
      {
        title: 'Enterprise AI Governance Maturity Scorecard',
        description: 'Quantitative benchmark scoring corporate governance across Policy, Controls, Auditability, and Security.',
        steps: [
          'Assess current maturity across 5 tiers: Ad-Hoc → Defined → Controlled → Measured → Continuous Optimization.',
          'Audit role-based permissions governing who can authorize agent deployment and production tool access.',
          'Establish quarterly algorithmic review cadences with legal, infosec, and commercial leadership.'
        ],
        output: 'Executive radar scorecard highlighting compliance gaps and remediation priorities.'
      }
    ],
    kpis: [
      {
        name: 'Governance Audit Coverage Ratio',
        formula: '(Fully Logged & Audited Agent Invocations / Total System Executions) × 100',
        description: 'Proportion of operational AI executions possessing complete immutable audit trails.',
        benchmark: '100% mandatory compliance'
      },
      {
        name: 'Policy Violation Detection Rate',
        formula: 'Policy Breaches Intercepted Pre-Execution / Total Prohibited Interaction Attempts',
        description: 'Effectiveness of guardrail filters preventing unauthorized, biased, or non-compliant actions.',
        benchmark: '>99.8% interception efficiency'
      },
      {
        name: 'Incident Remediation Mean Time (MTTR)',
        formula: 'Elapsed Minutes from Anomaly Alert to Agent Thread Suspension / Rollback',
        description: 'Speed of containment when an agent displays unexpected or degraded behavior.',
        benchmark: '<5 minutes'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'Automated Regulatory & Legal Compliance Filter',
        description: 'Inspects all agent-generated outbound communications against FTC guidelines, CAN-SPAM, GDPR, and corporate legal disclaimers.',
        traditionalWay: 'Legal team conducts random retrospective manual reviews after thousands of emails have sent.',
        agenticWay: 'Real-time deterministic semantic guardrail validates compliance before dispatch; blocks violations instantly.',
        impact: 'Zero regulatory infractions; legal review overhead reduced by 85%.'
      },
      {
        useCase: 'Algorithmic Pricing & Discounting Authority Gatekeeper',
        description: 'Governs autonomous discounting recommendations, enforcing strict delegation-of-authority matrices based on deal size and margin floor.',
        traditionalWay: 'Reps offer unauthorized off-sheet discounts in email chains; margin eroded unnoticed.',
        agenticWay: 'Agent checks margin floors; automatically escalates requests exceeding 12% to VP Finance with business case.',
        impact: 'Gross margin leakage reduced by 4.2 percentage points across all enterprise contracts.'
      },
      {
        useCase: 'Continuous Explainability & Decision Replay Ledger',
        description: 'Maintains an indexed, searchable ledger showing the exact prompt, document chunks, and model version used for any automated decision.',
        traditionalWay: 'When a customer questions a loan, pricing, or qualification decision, company cannot explain how AI arrived at it.',
        agenticWay: '1-click decision audit report generated showing full reasoning trace, inputs, and confidence scores.',
        impact: 'Full regulatory audit readiness; complete transparency for enterprise executive stakeholders.'
      }
    ],
    architecturePoints: [
      'WORM (Write Once, Read Many) compliant immutable cloud storage for agent audit trails.',
      'Semantic guardrail proxy layer (NeMo Guardrails / Llama Guard) screening inputs and outputs in <60ms.',
      'Decoupled policy engine (Open Policy Agent - OPA) enforcing permissions separate from model logic.'
    ],
    governanceAndRisks: [
      'Mandatory annual red-team penetration testing simulating adversarial prompt injection attacks.',
      'Explicit corporate policies prohibiting model training on confidential customer data.',
      'Designated Chief AI Ethics & Governance officer approval required for any Level 4+ autonomous deployment.'
    ],
    recommendedNextSteps: [
      'Deploy the Enterprise AI System Inventory to discover all active internal LLM and agent usages.',
      'Implement real-time semantic guardrails on all public-facing and CRM-connected agent endpoints.',
      'Conduct a formal benchmark assessment using the NIST AI Risk Management Framework (AI RMF 1.0).'
    ]
  },

  // ── 07. AI SECURITY ──
  {
    id: 'ai-security',
    slug: 'ai-security',
    number: '07',
    title: 'AI Security',
    subtitle: 'Enterprise security, identity, data protection, and proactive risk management for AI systems.',
    badge: 'Zero-Trust Defense',
    badgeColor: 'rose',
    intro: 'AI systems introduce entirely new attack surfaces: prompt injection, data exfiltration through indirect prompts, training data poisoning, and credential theft via tool abuse. We implement a rigorous Zero-Trust AI Architecture that treats models, tools, and memory stores as untrusted entities subject to continuous cryptographic verification.',
    challenges: [
      'Direct and indirect prompt injection attacks subverting system instructions via unvalidated web data.',
      'Excessive agent permissions allowing cognitive models to execute destructive write/delete API commands.',
      'Data leakage through model context windows when processing confidential corporate documents.',
      'Insecure third-party tool and plugin integrations exposing internal enterprise infrastructure.'
    ],
    frameworks: [
      {
        title: 'Zero-Trust AI Defense-in-Depth Architecture (7 Pillars)',
        description: 'End-to-end security framework isolating cognitive execution from underlying enterprise network assets.',
        steps: [
          'Pillar 1 — Dedicated Machine Identity: Every agent assigned unique cryptographically signed IAM service credentials.',
          'Pillar 2 — Principle of Least Privilege: Tools granted granular read/write scopes with zero wildcards.',
          'Pillar 3 — Strict Input Sanitization: Multi-layer lexical and semantic classifiers filtering adversarial injection payloads.',
          'Pillar 4 — Private VPC Inference: Dedicated enterprise network enclave with zero public internet egress for raw customer data.',
          'Pillar 5 — Ephemeral Execution Sandboxes: Tool functions execute in short-lived, isolated Docker/gVisor microVMs.',
          'Pillar 6 — Output Encoding & Leakage Prevention: Real-time DLP scanners checking for API keys, passwords, and PII.',
          'Pillar 7 — Anomaly Behavioral Telemetry: ML models detecting sudden spikes in tool call frequency or unusual data queries.'
        ],
        output: 'Hardened enterprise perimeter resilient against advanced prompt injection and exfiltration exploits.'
      },
      {
        title: 'Indirect Prompt Injection Defense Protocol',
        description: 'Architectural pattern preventing malicious third-party content (e.g. prospect website text) from hijacking agent instructions.',
        steps: [
          'Classify incoming data into Untrusted Content vs Trusted System Instructions.',
          'Isolate untrusted scraped text in sandboxed parsing models that only extract raw JSON facts.',
          'Pass sanitized structured data—never raw HTML or unescaped strings—to the core reasoning agent.'
        ],
        output: 'Complete immunity against hidden white-text or CSS prompt injection attacks on target websites.'
      }
    ],
    kpis: [
      {
        name: 'Adversarial Injection Defense Rate',
        formula: '(Neutralized Attack Payloads / Total Simulated Red-Team Attacks) × 100',
        description: 'Security testing benchmark measuring resilience against direct and indirect prompt injections.',
        benchmark: '>99.9% neutralization'
      },
      {
        name: 'Sensitive Data Leakage Incidents',
        formula: 'Total Instances of PII, Credentials, or Unmasked Data Crossing Boundaries',
        description: 'Zero-tolerance metric tracking data boundary enforcement and DLP filtering.',
        benchmark: '0 tolerance (100% clean)'
      },
      {
        name: 'Tool Sandbox Escape Prevention',
        formula: 'Percentage of containerized tool execution boundary violations intercepted',
        description: 'Containment verification ensuring agent tool code cannot access host filesystem or network.',
        benchmark: '100% containment'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'Cryptographic API Key & Secrets Vaulting',
        description: 'Agents never see raw API keys; an authenticated proxy intercepts tool calls, verifies permissions, injects credentials, and logs the transaction.',
        traditionalWay: 'API keys hardcoded in prompt templates or stored in plaintext environment variables.',
        agenticWay: 'Hardware Security Module (HSM) managed proxy injects ephemeral short-lived access tokens.',
        impact: 'Eliminates credential leakage risk entirely; full enterprise compliance certification.'
      },
      {
        useCase: 'Automated PII Tokenization & Redaction Pipeline',
        description: 'High-speed local transformer redacts names, SSNs, credit card numbers, and health data before sending customer support logs to external LLM providers.',
        traditionalWay: 'Raw customer chat logs pasted directly into public AI models, violating HIPAA/GDPR.',
        agenticWay: 'Sub-5ms local regex + NER model replaces sensitive tokens with surrogate synthetic identifiers.',
        impact: 'Full GDPR and HIPAA compliance guaranteed across all automated workflows.'
      },
      {
        useCase: 'Runtime Tool Call Anomaly Detection & Circuit Breaker',
        description: 'Monitors the volume and velocity of agent tool calls; automatically terminates threads if an agent attempts bulk record deletion or unusual exports.',
        traditionalWay: 'Buggy or compromised agent wipes 10,000 CRM contacts before anyone notices.',
        agenticWay: 'Rate limiter halts execution if more than 5 modifications occur within 10 seconds; alerts Security Operations.',
        impact: 'Zero data destruction risk; immediate containment of malfunctioning agent threads.'
      }
    ],
    architecturePoints: [
      'Encrypted-in-transit (mTLS 1.3) and encrypted-at-rest (AES-256) data pipelines.',
      'AWS PrivateLink / Azure ExpressRoute dedicated tunnels connecting to enterprise model inference hubs.',
      'Continuous automated software composition analysis (SCA) scanning AI library dependencies for CVEs.'
    ],
    governanceAndRisks: [
      'Strict prohibition against wildcards in tool IAM definitions (e.g., `crm:*` replaced with `crm:read_contact`).',
      'Dual-authorization requirement for any agent action that triggers financial transactions >$1,000.',
      'Formal compliance mapping to OWASP Top 10 for Large Language Models and AI Applications.'
    ],
    recommendedNextSteps: [
      'Conduct an immediate security audit of all active AI integration tokens and database permissions.',
      'Implement an authenticated Secrets Vault Proxy between your agents and external system APIs.',
      'Establish automated CI/CD security test suites running OWASP LLM prompt injection payloads.'
    ]
  },

  // ── 08. AGENTIC OPERATING MODELS ──
  {
    id: 'agentic-operating-models',
    slug: 'agentic-operating-models',
    number: '08',
    title: 'Agentic Operating Models',
    subtitle: 'Organizational architectures for orchestrating hybrid human and AI-agent workforces together.',
    badge: 'Workforce Design',
    badgeColor: 'teal',
    intro: 'Technology without organizational redesign yields expensive disappointment. An Agentic Operating Model realigns human talent from repetitive data-gathering and mechanical reporting toward high-leverage strategic negotiation, creative positioning, and continuous agent supervision.',
    challenges: [
      'Employee anxiety and resistance regarding job displacement and cognitive automation.',
      'Mismatched incentive structures that reward manual hours rather than strategic enterprise throughput.',
      'Lack of clear escalation pathways when human intervention is required during agent workflows.',
      'Siloed departments creating disconnected agents that duplicate effort across functional boundaries.'
    ],
    frameworks: [
      {
        title: 'The Hybrid Human-Agent Workforce Matrix (4 Operating Archetypes)',
        description: 'Organizational blueprint defining the relationship between human knowledge workers and autonomous agents.',
        steps: [
          'Archetype 1 — The Copilot: Human-led, AI-assisted. Agent performs background research on command; human drives 100% of decisions.',
          'Archetype 2 — The Autonomous Specialist: AI-led, human-approved. Agent executes 90% of workflow, pausing for single-click human sign-off.',
          'Archetype 3 — The Swarm Operator: One human supervisor oversees 15–30 parallel autonomous agents, focusing entirely on exception handling.',
          'Archetype 4 — The Systems Architect: Senior talent dedicated to prompt engineering, tool integration, and continuous agent optimization.'
        ],
        output: 'Structural clarity realigning job descriptions, compensation incentives, and organizational charts.'
      },
      {
        title: '5-Stage Enterprise Agentic Transformation Roadmap',
        description: 'Chronological milestone blueprint moving an enterprise from manual legacy operations to autonomous compounding scale.',
        steps: [
          'Stage 1 (Weeks 1–4) — Commercial Friction Discovery: Map high-cost manual processes and quantify labor debt.',
          'Stage 2 (Weeks 5–8) — Bounded Pilot Deployment: Deploy 2 high-impact Level 2 agents with 100% human review.',
          'Stage 3 (Weeks 9–16) — Governance & Security Hardening: Implement enterprise vaulting, audit logging, and OPA policies.',
          'Stage 4 (Weeks 17–24) — Multi-Agent Swarm Orchestration: Connect specialized agents across Marketing, Sales, and RevOps.',
          'Stage 5 (Weeks 25+) — Compounding Autonomous Scale: Optimize agent models, transition to Level 3 autonomy, and rebalance headcount.'
        ],
        output: 'Predictable transformation journey delivering measurable ROI at every 60-day milestone.'
      }
    ],
    kpis: [
      {
        name: 'Human Leverage Multiple',
        formula: 'Total Processed Commercial Volume / Total Human Full-Time Equivalents (FTEs)',
        description: 'Productivity multiplier measuring output expansion achieved per human team member.',
        benchmark: '3.2x–4.8x leverage increase'
      },
      {
        name: 'High-Value Strategic Time Allocation',
        formula: 'Hours Spent on Live Selling & Strategy / Total Weekly Working Hours',
        description: 'Proportion of employee time liberated from administrative CRM entry and research.',
        benchmark: 'Increased from 28% to 68% of week'
      },
      {
        name: 'Agentic Transformation ROI',
        formula: '[(Gross Margin Expansion + Cost Savings) − AI Infrastructure Expense] / AI Infrastructure Expense',
        description: 'Overall financial return on the enterprise agentic automation transformation program.',
        benchmark: '>450% annualized net ROI'
      }
    ],
    enterpriseApplications: [
      {
        useCase: 'The Rebalanced Enterprise Sales Organization',
        description: 'SDR headcount reallocated from manual list building to high-touch executive relationship building, supported by an autonomous Prospecting Swarm.',
        traditionalWay: '10 SDRs spend 70% of their day copying and pasting data; quota attainment hovers at 48%.',
        agenticWay: '4 Strategic SDRs supervise an autonomous agent mesh generating 5x the volume of verified pipeline.',
        impact: 'CAC compressed by 44%; average quota attainment rises to 82% across the team.'
      },
      {
        useCase: 'Autonomous Tier-1 Customer Onboarding & Activation',
        description: 'Agents automatically provision accounts, verify data integrations, draft welcome guides, and escalate complex technical tickets to senior engineers.',
        traditionalWay: 'Implementation consultants spend 3 weeks answering repetitive setup and configuration questions.',
        agenticWay: 'Autonomous agent walks customer through technical validation in 48 hours; human steps in for kickoff calls.',
        impact: 'Time-to-Value (TTV) reduced from 28 days to 5 days; customer activation velocity +55%.'
      },
      {
        useCase: 'Cross-Functional Revenue Operations Command Center',
        description: 'A unified operational tier where RevOps engineers act as prompt and workflow architects rather than manual report generators.',
        traditionalWay: 'RevOps spends entire week building custom Salesforce reports and cleaning up duplicate records.',
        agenticWay: 'RevOps architects autonomous data hygiene agents and designs predictive revenue algorithms.',
        impact: 'Revenue operations evolved from reactive firefighting to a strategic growth engineering engine.'
      }
    ],
    architecturePoints: [
      'Unified executive cockpit displaying real-time agent fleet telemetry alongside human sales performance.',
      'Bi-directional Slack/Teams integration allowing seamless human approval via interactive message buttons.',
      'Centralized prompt and tool repository with automated versioning, staging, and rollback controls.'
    ],
    governanceAndRisks: [
      'Comprehensive change management program addressing employee career path evolution in an agentic organization.',
      'Mandatory human sign-off on any organizational policy changes or restructuring recommendations.',
      'Incentive plans adjusted to reward system improvements, prompt optimization, and pipeline quality.'
    ],
    recommendedNextSteps: [
      'Conduct a Workforce Time-Allocation Audit to identify where your talent spends more than 5 hours/week on manual admin.',
      'Select a single commercial pod (1 AE + 1 SDR) to pilot the Hybrid Workforce Operating Model for 60 days.',
      'Partner with ProfitMachines to co-design your custom 5-Stage Agentic Transformation Roadmap.'
    ]
  }
];

// Interactive Architecture Stages
export const AGENTIC_MATURITY_STAGES = [
  {
    stage: '01',
    name: 'Rule-Based Automation',
    tech: 'RPA & Scripts',
    characteristics: 'Rigid if-then logic; breaks when input format changes by 1 pixel; zero reasoning capability.',
    limitations: 'High maintenance costs; incapable of processing unstructured customer emails or PDFs.',
    businessValue: 'Basic repetitive data entry and nightly batch synchronization.'
  },
  {
    stage: '02',
    name: 'Intelligent Process Automation',
    tech: 'OCR + Basic ML',
    characteristics: 'Extracts fields from scanned documents; classifies tickets using basic NLP models.',
    limitations: 'Cannot plan sequential steps; requires heavy manual intervention on edge cases.',
    businessValue: 'Structured invoice parsing and automated tier-1 ticket categorization.'
  },
  {
    stage: '03',
    name: 'AI-Assisted Workflows',
    tech: 'LLM Copilots',
    characteristics: 'Human prompts generative model; model returns text suggestions; human copies and pastes.',
    limitations: 'Human remains the bottleneck for every single execution turn; zero independent action.',
    businessValue: 'Faster email drafting, meeting summarization, and ad-hoc knowledge retrieval.'
  },
  {
    stage: '04',
    name: 'Autonomous AI Agents',
    tech: 'Task Execution Engines',
    characteristics: 'Goal-driven; selects tools; invokes APIs; verifies outputs; operates within bounded autonomy.',
    limitations: 'Single-agent context limitations; can struggle with cross-departmental coordination.',
    businessValue: 'End-to-end inbound qualification, meeting preparation, and automated CRM hygiene.'
  },
  {
    stage: '05',
    name: 'Coordinated Multi-Agent Systems',
    tech: 'Autonomous Swarms',
    characteristics: 'Specialized agent networks collaborating under supervisory orchestration with real-time consensus.',
    limitations: 'Requires mature enterprise governance, strict tool sandboxing, and telemetry monitoring.',
    businessValue: 'Full-funnel autonomous pipeline generation, competitive deal defense, and enterprise scale.'
  }
];

// Enterprise Challenges
export const ENTERPRISE_CHALLENGES = [
  {
    id: 'fragmented-workflows',
    title: 'Fragmented Commercial Workflows',
    underlyingProblem: 'Enterprise revenue data is scattered across Salesforce, Gong, Marketo, Outreach, and ERP billing silos with zero unified cognitive connective tissue.',
    operationalConsequences: 'Sales reps and RevOps spend 30% of their working hours manually copying data between systems, leading to delayed prospect follow-ups and data drift.',
    businessImpact: 'Pipeline leakage, elongated sales cycles (+18 days on average), and missed quarterly revenue forecasts.',
    solutionApproach: 'Deploy autonomous integration agents that listen to events across all platforms and execute real-time bidirectional synchronization.'
  },
  {
    id: 'manual-decision-dependencies',
    title: 'Manual Decision Bottlenecks',
    underlyingProblem: 'Routine commercial steps—such as verifying lead qualification, routing deals, and checking discounting rules—require human review.',
    operationalConsequences: 'Inbound high-intent enterprise leads wait hours or days for SDR review, causing buyer momentum to dissipate before the first discovery call.',
    businessImpact: 'Lead-to-opportunity conversion drops by up to 391% when response time exceeds 5 minutes.',
    solutionApproach: 'Implement bounded Level 2 and Level 3 agents authorized to execute instant qualification and calendar booking 24/7.'
  },
  {
    id: 'sales-friction',
    title: 'Severe Sales Execution Friction',
    underlyingProblem: 'Account Executives spend less than 33% of their working week actually talking to customers, buried under administrative meeting prep and CRM updates.',
    operationalConsequences: 'Shallow discovery, generic outreach, unresearched pitches, and poor follow-up cadence adherence across target enterprise accounts.',
    businessImpact: 'Lower win rates (sub-22%), high rep turnover, and inflated customer acquisition costs (CAC).',
    solutionApproach: 'Autonomous Meeting Prep and Pursuit Swarms that deliver customized dossiers and tailored outreach in seconds.'
  },
  {
    id: 'shadow-ai-governance',
    title: 'Ungoverned Shadow AI Adoption',
    underlyingProblem: 'Employees paste confidential customer contracts, PII, and proprietary code into consumer AI chatbots without security oversight.',
    operationalConsequences: 'Severe regulatory compliance exposure (GDPR, HIPAA, SOC 2), intellectual property leakage, and unvetted AI hallucinations.',
    businessImpact: 'Substantial regulatory fines, compromised customer trust, and corporate liability risk.',
    solutionApproach: 'Enterprise Zero-Trust AI Architecture featuring PII redaction, private VPC inference, and immutable audit logging.'
  }
];
