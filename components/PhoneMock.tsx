// A little phone that shows the moment that matters: the screen going green
// because the real person confirmed it is them. This sells the whole idea
// faster than a paragraph ever could, so it lives right next to the headline.
export default function PhoneMock() {
  return (
    <div className="phone-stage">
      <div className="phone">
        <div className="notch" />
        <div className="phone-screen">
          <div className="scr-top">
            <div className="verified-badge">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m5 12.5 4.2 4.2L19 7"
                  stroke="#fff"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="scr-status">Verified real</div>
            <div className="scr-name">It&apos;s really Rahul</div>
            <div className="scr-sub">He confirmed on his phone just now</div>
          </div>
          <div className="scr-card">
            <div className="scr-row">
              <div className="scr-avatar">R</div>
              <div>
                <div className="who">Rahul (Son)</div>
                <div className="meta">Incoming call - 0:07</div>
              </div>
            </div>
            <button className="big-btn" type="button">
              Safe to talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
