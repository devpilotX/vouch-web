// Straight answers to the doubts people actually have. No fluff.
type Qa = { q: string; a: string; open?: boolean }

const items: Qa[] = [
  {
    q: "Does the whole family need the app?",
    a: "Yep, both sides need it, the same way both people need the same chat app to message each other. The good news is you usually set it up for the whole family in one sitting, so mom and dad are covered in minutes.",
    open: true,
  },
  {
    q: "What if the scammer clones the voice perfectly?",
    a: "Doesn't matter. Vouch never listens to the voice. It quietly asks the real person's phone to confirm. A cloned voice cannot make someone else's phone tap yes.",
  },
  {
    q: "What do you store about me?",
    a: "As little as possible. Your phone number, a push token, and the links between paired devices. No call recordings, no private keys, no contact list. If we ever got breached, there is almost nothing to take.",
  },
  {
    q: "What happens if I lose my phone?",
    a: "You re-pair in person with any family member and the old phone gets cut off everywhere. No stranger can walk into your family circle with a lost device.",
  },
  {
    q: "When can I actually use it?",
    a: "We are building it now and rolling out to early families first. Drop your email and you will be near the front of the line.",
  },
]

export default function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow center">FAQ</span>
          <h2>Fair questions</h2>
        </div>
        <div className="faq">
          {items.map((item) => (
            <details key={item.q} open={item.open}>
              <summary>
                {item.q} <span className="plus">+</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
