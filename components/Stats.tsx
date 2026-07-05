// A quick, honest gut-punch of numbers so people feel why this matters.
// Kept the sources in the labels so nobody thinks we made these up.
const STATS = [
  { num: "3 sec", lbl: "of audio is all it takes to clone a voice" },
  { num: "$900M", lbl: "lost by Americans to voice-clone scams (FBI)" },
  { num: "1 in 3", lbl: "who engage with an AI scam call lose money" },
  { num: "Under 5s", lbl: "to confirm a real call with Vouch" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {STATS.map((stat) => (
          <div className="stat" key={stat.lbl}>
            <div className="num">{stat.num}</div>
            <div className="lbl">{stat.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
