export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt, systemPrompt } = req.body || {};

    if (typeof prompt !== 'string' || prompt.trim().length === 0) {
        return res.status(400).json({ error: 'Missing prompt' });
    }

    const gpt_oss_120b = "openai/gpt-oss-120b";

    const effectiveSystemPrompt =
        (typeof systemPrompt === 'string' && systemPrompt.trim().length > 0)
            ? systemPrompt
            : (typeof process.env.GROQ_SYSTEM_PROMPT === 'string' ? process.env.GROQ_SYSTEM_PROMPT : '');

    const messages = [];
    if (effectiveSystemPrompt.trim().length > 0) {
        messages.push({ role: 'system', content: effectiveSystemPrompt });
    }
    messages.push({ role: 'user', content: prompt });

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: gpt_oss_120b,
            messages,
        }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        return res.status(response.status).json({ error: 'Groq API error', details: data });
    }

    return res.status(200).json(data);
}