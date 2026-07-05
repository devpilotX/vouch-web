/*
  Waitlist helper.

  This is the one spot that actually talks to our email provider (Resend).
  We keep it separate from the API route so the route stays about handling the
  request and this file stays about the email side of things.

  If the Resend keys are not set yet (local dev, or before we wire up the real
  account), we do not blow up. We just log the email and carry on, so the form
  still feels alive while we build.
*/

const RESEND_BASE = "https://api.resend.com";

export async function addToWaitlist(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // No keys yet? Pretend it worked but leave a breadcrumb in the logs.
  if (!apiKey || !audienceId) {
    console.log(
      `[waitlist] Resend not configured yet, would have saved: ${email}`,
    );
    return;
  }

  const response = await fetch(
    `${RESEND_BASE}/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    },
  );

  // Resend returns 409 if the person already signed up. That is fine by us,
  // we treat it as a success so they never see an error for being keen.
  if (!response.ok && response.status !== 409) {
    const detail = await response.text();
    throw new Error(
      `Resend rejected the signup (${response.status}): ${detail}`,
    );
  }
}
