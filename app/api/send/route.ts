import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request) {
    try {
        const { subject, email, message }: Partial<{ subject: string; email: string; message: string }> = await req.json();
        if (!subject || !email || !message) {
            return new Response(JSON.stringify({ status: "FAILED", message: "Missing required fields" }), { status: 400 });
        }

        // Send data using discord webhook
        const webhook = "https://discord.com/api/webhooks/1311378139603009657/N_UMFaN0Kfkc2yphhZWjzFnIY-W1T_P83EWlILynxSYXl_tgffTSxhlBJsPPCFfCOCe-";

        await fetch(webhook, {
            headers: {
                "Content-Type": "application/json",
            },
            referrer: "https://discohook.org/",
            referrerPolicy: "strict-origin",
            body: JSON.stringify({
                content: null,
                embeds: [
                    {
                        title: subject,
                        description: message,
                        color: 5814783,
                        author: {
                            name: email,
                        },
                        timestamp: new Date().toISOString(),
                    },
                ],
                attachments: [],
            }),
            method: "POST",
            mode: "cors",
            credentials: "omit",
        });

        return new Response(JSON.stringify({ status: "OK", message: "Message sent successfully" }), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ status: "FAILED", message: err.toString() }), { status: 500 });
    }
}

export default function handler(req: Request) {
    if (req.method != "POST") {
        return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405 });
    }
}