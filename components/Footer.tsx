import Logo from "./Logo";

// Small, quiet footer. Repeat the nav links for people who read all the way down.
export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <div className="logo">
          <Logo />
          Vouch
        </div>
        <div className="foot-links">
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#waitlist">Waitlist</a>
        </div>
        <div>© 2026 Vouch. Made for families.</div>
      </div>
    </footer>
  );
}
