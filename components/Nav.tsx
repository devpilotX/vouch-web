// Sticky top bar. Stays out of the way, one clear call to action on the right.
import Logo from "./Logo"

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Logo />
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#why">Why it works</a>
          <a href="#security">Security</a>
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
  )
}
