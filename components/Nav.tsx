import Logo from "./Logo";

// Sticky top bar. Stays out of the way but keeps the waitlist button one glance away.
export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="logo">
          <Logo />
          Vouch
        </div>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#why">Why it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a href="#waitlist" className="btn btn-primary">
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
