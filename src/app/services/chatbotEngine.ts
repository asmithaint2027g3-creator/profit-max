// ProfitMachines Intelligent Context-Aware Chatbot Engine
// Handles multi-turn memory, pronoun & reference resolution, semantic knowledge retrieval,
// lead qualification detection, and grounded executive response synthesis.

import {
    resolvePageContext,
    KNOWLEDGE_BASE,
    KnowledgeItem,
    PageChatContext
} from '../data/chatbotKnowledgeBank';
import { servicesData } from '../../data/navigationContent';

export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: Date;
    pageContextName?: string;
    suggestedFollowUps?: string[];
    isContextChangeMarker?: boolean;
}

export interface ConversationState {
    lastReferencedTopic?: string;
    lastReferencedOffering?: string;
    visitorIndustry?: string;
    visitorGoal?: string;
    qualificationTriggered: boolean;
    turnCount: number;
}

export interface EngineResponse {
    text: string;
    suggestedFollowUps: string[];
    referencedTopic?: string;
    qualificationDetected?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// REFERENCE & PRONOUN RESOLUTION
// ─────────────────────────────────────────────────────────────────────────────

const PRONOUN_PATTERNS = [
    /\b(it|this|that|these|those)\b/i,
    /\bthis service\b/i,
    /\bthat offering\b/i,
    /\bthis platform\b/i,
    /\bthis solution\b/i,
    /\bhow does it work\b/i,
    /\bcan it\b/i,
    /\bwhat about implementation\b/i,
    /\bhow much does it\b/i
];

function hasReferencePronoun(text: string): boolean {
    return PRONOUN_PATTERNS.some(p => p.test(text));
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN ANSWER GENERATOR
// ─────────────────────────────────────────────────────────────────────────────

export class ChatbotEngine {
    private state: ConversationState = {
        qualificationTriggered: false,
        turnCount: 0
    };

    /**
     * Resets conversation memory
     */
    public reset(): void {
        this.state = {
            qualificationTriggered: false,
            turnCount: 0
        };
    }

    /**
     * Updates detected visitor industry or intent
     */
    private updateContextFromText(text: string, pageContext: PageChatContext): void {
        const lower = text.toLowerCase();

        // Detect industry
        if (lower.includes('saas') || lower.includes('software') || lower.includes('cloud')) {
            this.state.visitorIndustry = 'B2B SaaS';
        } else if (lower.includes('bank') || lower.includes('fintech') || lower.includes('finance') || lower.includes('bfsi')) {
            this.state.visitorIndustry = 'Financial Services (BFSI)';
        } else if (lower.includes('health') || lower.includes('hospital') || lower.includes('pharma') || lower.includes('medical')) {
            this.state.visitorIndustry = 'Healthcare & Life Sciences';
        } else if (lower.includes('manufactur') || lower.includes('industrial') || lower.includes('factory')) {
            this.state.visitorIndustry = 'Industrial Manufacturing';
        }

        // Detect topic
        if (lower.includes('prospect') || lower.includes('sdr') || lower.includes('outbound')) {
            this.state.lastReferencedTopic = 'AI Prospecting & Pipeline';
            this.state.lastReferencedOffering = 'AI Native Sales';
        } else if (lower.includes('physics') || lower.includes('friction') || lower.includes('revenue physics')) {
            this.state.lastReferencedTopic = 'Revenue Physics';
            this.state.lastReferencedOffering = 'Growth & Acceleration Science';
        } else if (lower.includes('profit pool') || lower.includes('whitespace') || lower.includes('margin')) {
            this.state.lastReferencedTopic = 'Profit Pool Discovery';
            this.state.lastReferencedOffering = 'Profit Pool Discovery';
        } else if (lower.includes('demand engineering') || lower.includes('rql') || lower.includes('attribution')) {
            this.state.lastReferencedTopic = 'Demand Engineering';
            this.state.lastReferencedOffering = 'Demand Engineering';
        } else if (lower.includes('global') || lower.includes('cross-border') || lower.includes('expansion')) {
            this.state.lastReferencedTopic = 'Global Business Acceleration';
            this.state.lastReferencedOffering = 'Global Business Acceleration';
        } else if (lower.includes('revops') || lower.includes('revenue operations') || lower.includes('crm')) {
            this.state.lastReferencedTopic = 'Revenue Operations';
            this.state.lastReferencedOffering = 'Revenue Operations';
        } else if (lower.includes('book') || lower.includes('consultation') || lower.includes('demo') || lower.includes('schedule')) {
            this.state.lastReferencedTopic = 'Executive Consultation';
        } else if (!this.state.lastReferencedTopic && pageContext.relevantTopics.length > 0) {
            this.state.lastReferencedTopic = pageContext.title;
        }
    }

    /**
     * Synthesizes an authoritative, grounded response based on user input,
     * conversation history, and the active page context.
     */
    public generateResponse(
        userQuery: string,
        history: ChatMessage[],
        currentRoute: string
    ): EngineResponse {
        this.state.turnCount++;
        const pageContext = resolvePageContext(currentRoute);
        const rawText = userQuery.trim();
        const lower = rawText.toLowerCase();

        // 1. Update internal conversational memory
        this.updateContextFromText(rawText, pageContext);

        // 2. Reference & Pronoun Resolution
        let resolvedQuery = rawText;
        if (hasReferencePronoun(rawText) && this.state.lastReferencedTopic) {
            resolvedQuery = `${rawText} (specifically regarding ${this.state.lastReferencedTopic})`;
        }

        // 3. Lead Qualification Check
        const isBookingOrCommercialIntent = (
            lower.includes('book') ||
            lower.includes('consultation') ||
            lower.includes('demo') ||
            lower.includes('schedule a call') ||
            lower.includes('talk to expert') ||
            lower.includes('hire') ||
            lower.includes('contact') ||
            lower.includes('pricing') ||
            lower.includes('how much does it cost')
        );

        if (isBookingOrCommercialIntent && !this.state.qualificationTriggered) {
            this.state.qualificationTriggered = true;
            return {
                text: `I'd be glad to help coordinate a strategic briefing with our Revenue Architects! 🚀\n\nProfitMachines engagements are tailored based on your business stage, current pipeline velocity, and diagnostic scope.\n\nTo help us prepare the most relevant insights for your session, **could you share:**\n1. What is your primary growth challenge (e.g. pipeline generation, win rates, CAC, international expansion)?\n2. Which industry and approximate company scale are you in?\n\nYou can also directly select a time on our executive calendar: **[Schedule an Executive Consultation](/book-consultation)**.`,
                suggestedFollowUps: [
                    "What happens during the initial consultation?",
                    "Can we start with a diagnostic pilot?",
                    "View Commercial Models & Engagement Options"
                ],
                referencedTopic: 'Executive Consultation',
                qualificationDetected: true
            };
        }

        // 4. Check for Specific Common Conversational Queries
        // A. Workload / Sales team reduction (Direct user prompt requirement)
        if (
            (lower.includes('workload') || lower.includes('repetitive tasks') || lower.includes('automate') || lower.includes('manual')) &&
            (this.state.lastReferencedTopic?.includes('Prospecting') || this.state.lastReferencedTopic?.includes('SDR') || lower.includes('sdr') || lower.includes('prospect'))
        ) {
            return {
                text: `**Yes, absolutely.** ProfitMachines **[AI Prospecting](/ai-native-sales/prospecting)** and **[Agentic SDR](/ai-native-sales/agentic-sdr)** are specifically engineered to eliminate high-friction, low-yield manual SDR labor:\n\n• **Automated Account & Lead Intelligence:** Researches prospect tech stacks, company filings, and news in seconds—saving 10–15 hours per rep each week.\n• **Hyper-Personalized Multi-Channel Outbound:** Drafts bespoke email and LinkedIn outreach matching real-time buyer intent signals.\n• **Autonomous Meeting Coordination:** Engages in multi-turn qualification dialogues and directly places verified meetings on AE calendars.\n• **Human-in-the-Loop Control:** Reps retain final approval on strategic accounts, while autonomous agents handle high-volume prospecting.\n\nTeams using Agentic SDR typically see a **60–75% reduction in manual prospecting hours** while increasing qualified pipeline by over 3x.`,
                suggestedFollowUps: [
                    "Which of your services supports that?",
                    "How does Agentic SDR handle complex objections?",
                    "Book a Consultation to see it live"
                ],
                referencedTopic: 'Agentic SDR'
            };
        }

        // B. "Which of your services supports that?" (Direct prompt requirement)
        if (
            lower.includes('which of your services supports') ||
            lower.includes('which service supports') ||
            lower.includes('what service supports that') ||
            lower.includes('which offering handles that')
        ) {
            const topic = this.state.lastReferencedTopic || pageContext.title;
            return {
                text: `To support **${topic}**, ProfitMachines provides dedicated, integrated capabilities:\n\n1. **[AI Native Sales & Agentic SDR](/ai-native-sales/agentic-sdr)**: Deploys autonomous prospecting agents and predictive pipeline intelligence.\n2. **[Demand Engineering](/offerings/demand-engineering)**: Captures verified buyer intent signals and delivers Revenue-Qualified Leads (RQLs).\n3. **[Sales Acceleration](/offerings/sales-acceleration)**: Equips account executives with deal execution copilots, live objection handling, and mutual action plans.\n4. **[Revenue Operations (RevOps)](/offerings/revenue-operations)**: Aligns CRM telemetry, pipeline handoffs, and forecast calibration into a single dashboard.\n\nWould you like to examine how we pilot these capabilities, or review our **[Core Offerings Architecture](/offerings)**?`,
                suggestedFollowUps: [
                    "How long does implementation take?",
                    "Can we start with a focused pilot?",
                    "Schedule a Strategy Consultation"
                ],
                referencedTopic: topic
            };
        }

        // C. Implementation & Timeline
        if (lower.includes('implementation') || lower.includes('how long does it take') || lower.includes('rollout') || lower.includes('onboarding')) {
            const topic = this.state.lastReferencedTopic || "ProfitMachines systems";
            return {
                text: `Implementation for **${topic}** follows our disciplined **3-Phase Acceleration Methodology**:\n\n• **Phase 1: Rapid Diagnostic & Friction Audit (Weeks 1–3):** Ingests CRM logs and marketing telemetry, audits friction coefficients, and detects immediate revenue leaks.\n• **Phase 2: Pilot Deployment & Engine Calibration (Weeks 4–8):** Deploys the selected AI engines (e.g. Agentic SDR or Demand Pulse), calibrates ICP models, and trains initial reps.\n• **Phase 3: Scaled Enterprise Rollout & Telemetry (Weeks 9–12+):** Expands coverage across territories, integrates bidirectional telemetry, and establishes executive reporting cadences.\n\nOur architecture is designed to run seamlessly on top of your existing Salesforce, HubSpot, or Outreach stacks without rip-and-replace disruption. Learn more in our **[Engagement Onboarding Guide](/engagement/onboarding)**.`,
                suggestedFollowUps: [
                    "What technical resources are required from our team?",
                    "How quickly can we see initial pipeline lift?",
                    "Speak with a Practice Lead"
                ],
                referencedTopic: 'Implementation'
            };
        }

        // D. Revenue Physics explanation (Direct prompt requirement)
        if (lower.includes('what is revenue physics') || lower.includes('laws of revenue physics') || (lower.includes('revenue physics') && lower.includes('how does'))) {
            return {
                text: `**Revenue Physics** is ProfitMachines' proprietary framework that models enterprise revenue as a dynamic thermodynamic system rather than an unpredictable sales gamble:\n\n1. **Law of Revenue Inertia:** Pipeline deals remain stuck in their current stage unless acted upon by external closing catalysts or active buyer intent.\n2. **Friction Coefficients:** Quantifies exact resistance at critical handoffs (Lead → MQL → SQL → Opportunity → Verbal → Closed-Won), exposing invisible leakage.\n3. **Capital Velocity Equation:** \n   $$\\text{Velocity} = \\frac{\\text{Pipeline Value} \\times \\text{Win Rate} \\times \\text{Deal Size}}{\\text{Sales Cycle Duration} \\times \\text{Friction Index}}$$\n4. **Predictive Calibration:** Replaces subjective 'gut feel' manager forecasts with mathematical probabilities grounded in empirical telemetry.\n\nExplore our deep dive and interactive frameworks on the **[Revenue Physics Page](/growth-science/revenue-physics)**.`,
                suggestedFollowUps: [
                    "How can we identify revenue friction in our funnel?",
                    "How can we improve revenue velocity?",
                    "Book a Revenue Friction Diagnostic Audit"
                ],
                referencedTopic: 'Revenue Physics'
            };
        }

        // E. Profit Pools explanation (Direct prompt requirement)
        if (lower.includes('profit pool') || lower.includes('identify new profit pools') || lower.includes('untapped profit')) {
            return {
                text: `**Profit Pool Discovery** maps the total profit distribution across your industry's economic value chain to uncover where high-margin value is accumulating:\n\n• **Value Chain Dissection:** Identifies which customer niches, product tiers, and service bundles generate disproportionate margins vs those that commoditize.\n• **Whitespace Scoring:** Measures competitive intensity and willingness-to-pay in adjacent buyer verticals.\n• **ICP Yield Optimization:** Refocuses sales capacity away from high-churn, low-margin accounts and onto highest-yielding segments.\n• **Pricing Realignment:** Restructures packaging to capture economic surplus created by your differentiated value.\n\nLearn more on our dedicated **[Profit Pool Discovery Page](/offerings/profit-pool-discovery)**.`,
                suggestedFollowUps: [
                    "How does Profit Pool Discovery differ from traditional research?",
                    "Which ProfitMachines offering includes this?",
                    "Schedule a Discovery Assessment"
                ],
                referencedTopic: 'Profit Pool Discovery'
            };
        }

        // F. Global Expansion (Direct prompt requirement)
        if (lower.includes('international') || lower.includes('cross-border') || lower.includes('global expansion') || lower.includes('evaluate a new international market') || lower.includes('prioritize countries')) {
            return {
                text: `To successfully evaluate and expand into international markets, ProfitMachines provides a structured **Cross-Border Acceleration Framework**:\n\n• **Market Readiness Index (MRI):** Scores prospective countries across TAM density, regulatory complexity, buyer intent, and competitive saturation.\n• **Localized GTM Engineering:** Tailors sales collateral, currency structures, localized proof points, and commercial terms to regional business expectations.\n• **Global Partner Ecosystems:** Rapidly identifies, qualifies, and activates high-yield regional distributors and channel partners in North America, EMEA, APAC, and MENA.\n• **Executive Expansion Office:** Provides on-demand executive leadership to drive initial customer wins and entity setup without bloated overseas subsidiary burn.\n\nExplore our full methodology on the **[Global Business Acceleration Hub](/global-acceleration)**.`,
                suggestedFollowUps: [
                    "How can we identify market-entry opportunities?",
                    "How can AI support global business operations?",
                    "Explore the Executive Expansion Office"
                ],
                referencedTopic: 'Global Business Acceleration'
            };
        }

        // 5. Best Semantic Match from Knowledge Base
        const bestKbMatch = this.findBestKbMatch(resolvedQuery, pageContext);

        if (bestKbMatch && bestKbMatch.score > 1.2) {
            const kb = bestKbMatch.item;
            this.state.lastReferencedTopic = kb.title;
            this.state.lastReferencedOffering = kb.relatedOfferings[0]?.name || pageContext.category;

            let responseText = `**${kb.title}**\n\n${kb.summary}\n\n`;

            if (kb.keyPoints && kb.keyPoints.length > 0) {
                responseText += `**Key Highlights & Capabilities:**\n`;
                kb.keyPoints.forEach(kp => {
                    responseText += `• ${kp}\n`;
                });
            }

            if (kb.metricsOrFacts && kb.metricsOrFacts.length > 0) {
                responseText += `\n**Verified Impact:**\n`;
                kb.metricsOrFacts.forEach(m => {
                    responseText += `✓ ${m}\n`;
                });
            }

            if (kb.relatedOfferings && kb.relatedOfferings.length > 0) {
                responseText += `\n**Explore Further:** `;
                const links = kb.relatedOfferings.map(o => `[${o.name}](${o.path})`).join(' • ');
                responseText += `${links}\n`;
            }

            return {
                text: responseText,
                suggestedFollowUps: kb.followUpQuestions.slice(0, 3),
                referencedTopic: kb.title
            };
        }

        // 6. Check Specific Services Data from navigationContent.ts
        const serviceMatch = this.findServiceDataMatch(resolvedQuery);
        if (serviceMatch) {
            const svc = serviceMatch;
            let responseText = `**${svc.title}**\n\n${svc.heroDescription}\n\n`;
            if (svc.features && svc.features.length > 0) {
                responseText += `**Core Capabilities:**\n`;
                svc.features.slice(0, 3).forEach(f => {
                    responseText += `• **${f.title}:** ${f.description}\n`;
                });
            }
            if (svc.benefits && svc.benefits.length > 0) {
                responseText += `\n**Key Benefits:**\n`;
                svc.benefits.slice(0, 3).forEach(b => {
                    responseText += `✓ ${b}\n`;
                });
            }
            responseText += `\nWould you like to see how this integrates with your current workflow, or **[Schedule a Consultation](/book-consultation)** to discuss your specific requirements?`;

            return {
                text: responseText,
                suggestedFollowUps: [
                    "What are the prerequisite integrations?",
                    "How do we measure success for this service?",
                    "Book a Consultation"
                ],
                referencedTopic: svc.title
            };
        }

        // 7. Contextual Fallback based on Current Page
        const fallbackOffering = pageContext.relatedRoutes[0]?.label || "ProfitMachines Revenue Architecture";
        const fallbackPath = pageContext.relatedRoutes[0]?.path || "/offerings";

        return {
            text: `Thank you for your question regarding **"${rawText}"**.\n\nWhile this specific query isn't fully detailed in our public documentation, ProfitMachines provides tailored revenue architecture and AI acceleration systems that address this across our **[${pageContext.title}](${pageContext.relatedRoutes[0]?.path || currentRoute})** and **[${fallbackOffering}](${fallbackPath})** practices.\n\nOur Enterprise Architects frequently design customized playbooks for unique requirements. Would you like to:\n• Discuss your specific scenario in a confidential **[Strategy Consultation](/book-consultation)**?\n• Explore our verified **[Case Studies](/case-studies)** to see similar transformations?\n• Or examine another topic related to **${pageContext.category}**?`,
            suggestedFollowUps: pageContext.suggestedQuestions.slice(0, 3),
            referencedTopic: pageContext.title
        };
    }

    /**
     * Finds best matching KnowledgeItem based on keyword and contextual scoring
     */
    private findBestKbMatch(
        query: string,
        pageContext: PageChatContext
    ): { item: KnowledgeItem; score: number } | null {
        const tokens = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(t => t.length > 2);
        let bestItem: KnowledgeItem | null = null;
        let highestScore = 0;

        for (const item of KNOWLEDGE_BASE) {
            let score = 0;

            // Direct title match
            if (query.toLowerCase().includes(item.title.toLowerCase())) {
                score += 3.0;
            }

            // Category match with current page
            if (item.category.toLowerCase() === pageContext.category.toLowerCase()) {
                score += 0.5;
            }

            // Keyword matches
            for (const kw of item.keywords) {
                if (query.toLowerCase().includes(kw)) {
                    score += 1.5;
                }
            }

            // Token overlap in summary & key points
            for (const token of tokens) {
                if (item.summary.toLowerCase().includes(token)) score += 0.2;
                if (item.keywords.some(k => k.includes(token))) score += 0.4;
                if (item.title.toLowerCase().includes(token)) score += 0.5;
            }

            if (score > highestScore) {
                highestScore = score;
                bestItem = item;
            }
        }

        return bestItem ? { item: bestItem, score: highestScore } : null;
    }

    /**
     * Checks navigationContent.ts servicesData for exact or strong matches
     */
    private findServiceDataMatch(query: string) {
        const lower = query.toLowerCase();
        for (const [key, svc] of Object.entries(servicesData)) {
            if (lower.includes(svc.title.toLowerCase()) || lower.includes(key.replace(/-/g, ' '))) {
                return svc;
            }
        }
        return null;
    }
}

// Export singleton instance
export const chatbotEngine = new ChatbotEngine();
