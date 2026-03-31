export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body;

    const gpt_oss_120b = "openai/gpt-oss-120b";

    const response = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: gpt_oss_120b,
                messages: [{
                    role: "user",
                    content: prompt,
                }]
            }),
        }
    );

    const data = await response.json();
    res.status(200).json(data);
}