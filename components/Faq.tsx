// Plain answers to the questions people actually ask. Uses the native <details>
// element so it opens and closes with zero JavaScript. Simple and accessible.

const QUESTIONS = [
  {
    q: "Does the whole family need the app?",
    a: "Yep, both sides need it, the same way both people need the same chat app to message each other. The good news is you usually set it up for the whole family in one sitting, so mom and dad are covered in minutes.",
    open: true,
  },
  {
    q: "What if the scammer clones the voice perfectly?",
    a: "Doesn't matter. Vouch never listens to the voice. It quietly asks the real person's phone to confirm. A cloned voice cannot make someone else's phone tap yes.",
    open: false,
  },
  {
    q: "What do you store about me?",
    a: "As little as possible. Your phone number, a push token, and the links between paired devices. No call recordings, no private keys, no contact list. If we ever got breached, there is almost nothing to take.",
    open: false,
  },
  {
    q: "What happens if I lose my phone?",
    a: "You re-pair in person with any family member and the old phone gets cut off everywhere. No stranger can walk into your family circle with a lost device.",
    open: false,
  },
  {
    q: "When can I actually use it?",
    a: "We are building it now and rolling out to early families first. Drop your email and you will be near the front of the line.",
    open: false,
  },
];

export default function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">FAQ</span>
          <h2>Fair questions</h2>
        </div>
        <div className="faq">
          {QUESTIONS.map((item) => (
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
  );
}
