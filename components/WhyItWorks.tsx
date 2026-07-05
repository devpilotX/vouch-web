// The core argument of the whole product in one section: stop chasing fakes,
// just confirm the real person. The red vs green cards make the contrast obvious.
export default function WhyItWorks() {
  return (
    <section className="block" id="why">
      <div className="wrap split">
        <div>
          <span className="eyebrow">Why it works</span>
          <h2 className="why-title">
            Don&apos;t try to spot the fake. Just confirm the real.
          </h2>
          <p className="why-p">
            Everyone else is racing to detect fake voices. That is a race
            detection keeps losing, because the clones keep getting better.
          </p>
          <p className="why-p">
            Vouch flips it around. A scammer can copy a voice perfectly, but
            they can never make the real person&apos;s phone answer back. That
            one fact does not change, no matter how good the AI gets.
          </p>
        </div>
        <div className="compare">
          <div className="cmp bad">
            <div className="ic">✕</div>
            <div>
              <h4>The old way: detect the fake</h4>
              <p>
                Guess if a voice sounds off. Memorize a family code word you
                will forget under stress. Hope you catch it in the moment.
              </p>
            </div>
          </div>
          <div className="cmp good">
            <div className="ic">✓</div>
            <div>
              <h4>The Vouch way: confirm the real</h4>
              <p>
                One tap asks the real person&apos;s phone to answer. Green means
                talk. Red means hang up. No judgement call needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
