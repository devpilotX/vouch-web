// Quiet close. Logo, a few links, done.
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <Logo />
        <div className="foot-links">
          <a href="#how">How it works</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#waitlist">Waitlist</a>
        </div>
        <div>&copy; 2026 Vouch. Made for families.</div>
      </div>
    </footer>
  )
}
