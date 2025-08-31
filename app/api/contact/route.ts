import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Access secret key from .env.local
    const apiKey = process.env.WEB3FORM_SECRET_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Server misconfigured: Missing API key" },
        { status: 500 }
      );
    }

    // Example: Forward data to Web3Forms (or your backend email service)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey, // from env
        ...body,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Form submitted!" });
    } else {
      return NextResponse.json(
        { error: "Failed to send form" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
