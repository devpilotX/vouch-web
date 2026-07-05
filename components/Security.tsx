// We hold almost nothing, and we say exactly what that means. Trust is the product.
import type { ReactNode } from "react"

type Card = { title: string; body: string; icon: ReactNode }

const cards: Card[] = [
  {
    title: "We never hear the call",
    body: "Vouch does not listen to, record, or analyze any audio. It only asks the real phone to confirm. Nothing to leak.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 5 6v5c0 4.4 3 7.2 7 8.5 4-1.3 7-4.1 7-8.5V6l-7-3Z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Keys stay on your phone",
    body: "Pairing keys live in your device's secure storage. We keep no private keys, so a breach has almost nothing to take.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="#2563eb" strokeWidth="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#2563eb" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Lose a phone, stay safe",
    body: "Re-pair in person with any family member and the old phone is cut off everywhere. No stranger walks into your circle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2563eb" strokeWidth="2" />
        <path d="M12 8v4M12 15h.01" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Security() {
  return (
    <section className="block secure" id="security">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow center">Built to hold almost nothing</span>
          <h2>Private by design, not by promise.</h2>
        </div>
        <div className="secure-grid">
          {cards.map((c) => (
            <div className="secure-card reveal" key={c.title}>
              <div className="step-ico">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
