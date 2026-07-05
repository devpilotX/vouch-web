// The first thing people see. Say the scary thing plainly, then offer the fix.
import PhoneMock from "./PhoneMock"
import WaitlistForm from "./WaitlistForm"

// tiny reusable trust line with a green check
function Tick({ children }: { children: string }) {
  return (
    <span className="tick">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="m5 12.5 4.2 4.2L19 7"
          stroke="#12915a"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="hero-badge">
            <span className="pip">
              <span className="dot" /> Live
            </span>
            Stops AI voice-clone scams
          </span>
          <h1>
            Know it&rsquo;s really them, <span className="hl">before you believe a word.</span>
          </h1>
          <p className="sub">
            Scammers can now clone your kid&rsquo;s voice from a three second clip. Vouch lets your
            family confirm a call is real in one tap. No guessing, no code words to forget.
          </p>
          <WaitlistForm buttonLabel="Get early access" />
          <div className="hero-ticks">
            <Tick>Free for families</Tick>
            <Tick>No call recordings</Tick>
            <Tick>Set up in a minute</Tick>
          </div>
        </div>
        <PhoneMock />
      </div>
    </section>
  )
}
