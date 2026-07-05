// A little fake phone showing the happy path: a call comes in, it checks out, green.
export default function PhoneMock() {
  return (
    <div className="phone-stage">
      <div className="phone">
        <div className="notch" />
        <div className="phone-screen">
          <div className="scr-top">
            <div className="verified-ring">
              <span className="ring" />
              <span className="ring r2" />
              <div className="verified-badge">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m5 12.5 4.2 4.2L19 7"
                    stroke="#fff"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="scr-status">Verified real</div>
            <div className="scr-name">It&rsquo;s really Rahul</div>
            <div className="scr-sub">He confirmed on his phone just now</div>
          </div>
          <div className="scr-card">
            <div className="scr-row">
              <div className="scr-avatar">R</div>
              <div>
                <div className="who">Rahul (Son)</div>
                <div className="meta">Incoming call &middot; 0:07</div>
              </div>
            </div>
            <button className="big-btn" type="button">
              Safe to talk
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
