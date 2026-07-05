"use client";

import { useState, type FormEvent } from "react";

// This is the email box you see in the hero and again at the bottom of the page.
// Both spots share this one component so they always behave the same way.
// It talks to /api/waitlist and swaps itself out for a thank you once you are in.

type Status = "idle" | "loading" | "done" | "error";

export default function WaitlistForm({
  cta = "Get early access",
}: {
  cta?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "We could not sign you up. Try again?");
      }

      setStatus("done");
      setMessage("You are on the list. We will be in touch soon.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  // Once someone is in, drop the form and just say thanks.
  if (status === "done") {
    return (
      <div className="signup-done">
        <span className="dot" /> {message}
      </div>
    );
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="you@email.com"
        aria-label="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Just a sec..." : cta}
      </button>
      {status === "error" ? <p className="signup-error">{message}</p> : null}
    </form>
  );
}
