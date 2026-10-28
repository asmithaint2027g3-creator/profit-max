import type { VercelRequest, VercelResponse } from '@vercel/node';

// Server-side context-aware chat handler for ProfitMachines
// Provides secure API endpoint without exposing credentials or system prompts in client code.

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, currentRoute, pageTitle, history } = req.body || {};

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Valid message string is required' });
    }

    try {
        // Optional LLM Provider check (OpenAI / Gemini)
        const geminiKey = process.env.GEMINI_API_KEY;
        const openAiKey = process.env.OPENAI_API_KEY;

        if (geminiKey) {
            // If user adds GEMINI_API_KEY to Vercel env, proxy to Google Generative AI
            const geminiRes = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: 'user',
                                parts: [
                                    {
                                        text: `You are the ProfitMachines Executive AI Assistant. You represent an elite enterprise revenue engineering and AI acceleration firm.
Current Visitor Context:
- Active Route: ${currentRoute || '/'}
- Page Title: ${pageTitle || 'Home'}
Rules:
- Be executive-level, professional, concise, and grounded strictly in ProfitMachines offerings (AI Native Sales, Growth Science, Revenue Physics, Global Business Acceleration, RevOps).
- Suggest relevant internal markdown links (e.g. [AI Native Sales](/ai-native-sales), [Book Consultation](/book-consultation)).
- Never fabricate customer guarantees or pricing.
- If asking about starting or booking, recommend /book-consultation.

User Query: ${message}`
                                    }
                                ]
                            }
                        ]
                    })
                }
            );

            if (geminiRes.ok) {
                const data = await geminiRes.json();
                const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (replyText) {
                    return res.status(200).json({
                        text: replyText,
                        source: 'gemini-secure-api'
                    });
                }
            }
        }

        // Return status indicating client engine should handle with grounded local knowledge
        return res.status(200).json({
            status: 'use_grounded_engine',
            message: 'Server processed request successfully'
        });

    } catch (error: any) {
        console.error('[Chat API Error]:', error);
        return res.status(500).json({
            error: 'Chat processing error',
            details: error.message
        });
    }
}
