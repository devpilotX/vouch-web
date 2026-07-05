import WaitlistForm from "./WaitlistForm";

// The dark closing band. One last, warm ask to join before the footer.
export default function FinalCta() {
  return (
    <section className="cta" id="waitlist">
      <div className="wrap">
        <h2>Be one of the first families protected.</h2>
        <p>
          Leave your email. We will let you know the moment Vouch is ready, and
          you will get in before everyone else.
        </p>
        <WaitlistForm cta="Join the waitlist" />
        <div className="microcopy">
          <span className="dot" /> No spam. One email when we launch. Unsubscribe
          anytime.
        </div>
      </div>
    </section>
  );
}
