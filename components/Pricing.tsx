// Free is genuinely free. Premium is for families who want to practice. Banks pay.
type Plan = {
  name: string
  price: string
  priceNote?: string
  desc: string
  features: string[]
  cta: string
  ctaStyle: "btn-primary" | "btn-ghost"
  featured?: boolean
  tag?: string
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    desc: "Everything a family needs to stay safe.",
    features: [
      "Pair with your whole family",
      "One-tap verify and red alert",
      "Offline family code",
      "Big buttons, built for elders",
    ],
    cta: "Join the waitlist",
    ctaStyle: "btn-ghost",
  },
  {
    name: "Premium",
    price: "$4",
    priceNote: " /month per family",
    desc: "For families who want to stay sharp.",
    features: [
      "Everything in Free",
      "Scam drills to practice fake calls",
      "Live scam-alert feed",
      "Unlimited family members",
      "Priority support",
    ],
    cta: "Get early access",
    ctaStyle: "btn-primary",
    featured: true,
    tag: "Most popular",
  },
  {
    name: "Banks & partners",
    price: "Let's talk",
    desc: "Verify a customer request before the money moves.",
    features: ["Verified-request API", "White-label options", "Built for reimbursement rules"],
    cta: "Talk to us",
    ctaStyle: "btn-ghost",
  },
]

export default function Pricing() {
  return (
    <section className="block" id="pricing">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Safety is free. Always.</h2>
          <p>
            The part that keeps your family safe costs nothing and always will. Pay only if you want
            the extra practice and alerts.
          </p>
        </div>
        <div className="pricing">
          {plans.map((p) => (
            <div className={`plan reveal${p.featured ? " feature" : ""}`} key={p.name}>
              {p.tag ? <div className="tag">{p.tag}</div> : null}
              <div className="pname">{p.name}</div>
              <div className="price">
                {p.price}
                {p.priceNote ? <span>{p.priceNote}</span> : null}
              </div>
              <div className="desc">{p.desc}</div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="ck">&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className={`btn ${p.ctaStyle}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
