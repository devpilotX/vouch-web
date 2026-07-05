import { NextResponse } from "next/server";

import { addToWaitlist } from "@/lib/waitlist";

// A very light email shape check. We are not trying to be RFC perfect here,
// just catching obvious typos before we bother the email provider.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "That email does not look right. Mind checking it?",
        },
        { status: 400 },
      );
    }

    await addToWaitlist(email);

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log the real reason for us, show something calm to the visitor.
    console.error("[waitlist] signup failed", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Something broke on our end. Give it another go in a moment.",
      },
      { status: 500 },
    );
  }
}
