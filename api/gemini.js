export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body;

    const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent',
        {
            method: 'POST',
            headers: {
                'x-goog-api-key': process.env.GEMINI_API_KEY, // set in Vercel dashboard
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        }
    );

    const data = await response.json();
    res.status(200).json(data);
}