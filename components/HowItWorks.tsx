// The four steps, plain language. If grandma cannot follow it, we failed.
import type { ReactNode } from "react"

type Step = { n: string; title: string; body: string; icon: ReactNode }

const steps: Step[] = [
  {
    n: "Step 1",
    title: "Pair once",
    body: "Scan each other's QR code in person. Your phones swap keys and remember each other. Takes about a minute.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#2563eb" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#2563eb" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#2563eb" strokeWidth="2" />
        <path d="M14 14h3v3M20 20h.01M20 14h.01M14 20h.01" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "Step 2",
    title: "Tap to verify",
    body: "Get a panicked call? Hit one giant button. Vouch pings their real phone to ask if it's actually them.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v6m0 0 3-3m-3 3L9 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="#2563eb" strokeWidth="2" />
      </svg>
    ),
  },
  {
    n: "Step 3",
    title: "See green or red",
    body: "They tap yes and your screen goes green. No answer or a no, and it turns red with clear steps: hang up, do not send money.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 2.5 20h19L12 3Z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 10v4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill="#2563eb" />
      </svg>
    ),
  },
  {
    n: "Step 4",
    title: "Works offline too",
    body: "No signal? Your family shares a private rotating code only your paired phones know. A clone can never guess it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2563eb" strokeWidth="2" />
        <path d="M12 7v5l3 2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="block" id="how">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>Four simple steps. Grandma can do it.</h2>
          <p>You set it up once with your family. After that, checking a scary call is one big button away.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.n}>
              <div className="step-head">
                <div className="step-ico">{s.icon}</div>
                <div className="n">{s.n}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
