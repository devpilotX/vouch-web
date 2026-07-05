// Three plans, but the honest headline is that the safety part is free.
// We only charge for the extras, and banks are a separate conversation.
export default function Pricing() {
  return (
    <section className="block" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Safety is free. Always.</h2>
          <p>
            The part that keeps your family safe costs nothing and always will.
            Pay only if you want the extra practice and alerts.
          </p>
        </div>
        <div className="pricing">
          <div className="plan">
            <div className="pname">Free</div>
            <div className="price">$0</div>
            <div className="desc">Everything a family needs to stay safe.</div>
            <ul>
              <li>
                <span className="ck">✓</span> Pair with your whole family
              </li>
              <li>
                <span className="ck">✓</span> One-tap verify and red alert
              </li>
              <li>
                <span className="ck">✓</span> Offline family code
              </li>
              <li>
                <span className="ck">✓</span> Big buttons, built for elders
              </li>
            </ul>
            <a href="#waitlist" className="btn btn-ghost">
              Join the waitlist
            </a>
          </div>

          <div className="plan feature">
            <div className="tag">Most popular</div>
            <div className="pname">Premium</div>
            <div className="price">
              $4<span> /month per family</span>
            </div>
            <div className="desc">For families who want to stay sharp.</div>
            <ul>
              <li>
                <span className="ck">✓</span> Everything in Free
              </li>
              <li>
                <span className="ck">✓</span> Scam drills to practice fake calls
              </li>
              <li>
                <span className="ck">✓</span> Live scam-alert feed
              </li>
              <li>
                <span className="ck">✓</span> Unlimited family members
              </li>
              <li>
                <span className="ck">✓</span> Priority support
              </li>
            </ul>
            <a href="#waitlist" className="btn btn-primary">
              Get early access
            </a>
          </div>

          <div className="plan">
            <div className="pname">Banks &amp; partners</div>
            <div className="price">Let&apos;s talk</div>
            <div className="desc">
              Verify a customer request before the money moves.
            </div>
            <ul>
              <li>
                <span className="ck">✓</span> Verified-request API
              </li>
              <li>
                <span className="ck">✓</span> White-label options
              </li>
              <li>
                <span className="ck">✓</span> Built for reimbursement rules
              </li>
            </ul>
            <a href="#waitlist" className="btn btn-ghost">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
