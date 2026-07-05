import PhoneMock from "./PhoneMock";
import WaitlistForm from "./WaitlistForm";

// First thing people see. One clear promise, one email box, and the phone showing
// the payoff. No fluff above the fold.
export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Stop AI voice-clone scams</span>
          <h1>Know it&apos;s really them, before you believe a word.</h1>
          <p className="sub">
            Scammers can now clone your kid&apos;s voice from a three second
            clip. Vouch lets your family confirm a call is real in one tap. No
            guessing, no code words to forget.
          </p>
          <WaitlistForm />
          <div className="microcopy">
            <span className="dot" /> Free for families, forever. We will only
            email you about the launch.
          </div>
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}
