import OpenAI from "openai";

const apiToken = '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';

export async function load({ url, fetch }) {
    const q = url.searchParams.get('q')?.trim();
    if (!q || q === '') {
        return {
            response: undefined
        };
    }

    const openai = new OpenAI({
        apiKey: apiToken,
        fetch
    });

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: q }],
        model: "gpt-3.5-turbo",
    });

    return {
        response: chatCompletion,
        initialQuery: q,
    };
}