"use client"

// The email capture. Same little form in the hero and at the bottom.
// Talks to /api/waitlist, keeps its own tiny bit of state.
import { useState, type FormEvent } from "react"

type Props = {
  // button text changes a bit depending on where the form sits
  buttonLabel?: string
  placeholder?: string
}

export default function WaitlistForm({
  buttonLabel = "Get early access",
  placeholder = "you@email.com",
}: Props) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [error, setError] = useState("")

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")

    const value = email.trim()
    // cheap client side check so we do not bug the server for obvious typos
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error")
      setError("That email looks off. Mind checking it?")
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setStatus("error")
        setError(data.error || "Something broke on our end. Give it another go.")
        return
      }
      setStatus("done")
    } catch {
      setStatus("error")
      setError("Could not reach us. Check your connection and try again.")
    }
  }

  // once they are in, swap the form for a friendly confirmation
  if (status === "done") {
    return (
      <div className="signup-done">
        <span className="dot" /> You are on the list. We will be in touch soon.
      </div>
    )
  }

  return (
    <form className="signup" onSubmit={onSubmit} noValidate>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        aria-label="Email address"
      />
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Just a sec..." : buttonLabel}
      </button>
      {error ? <div className="signup-error">{error}</div> : null}
    </form>
  )
}
