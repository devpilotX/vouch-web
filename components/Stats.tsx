// Four numbers that make the problem feel real. Kept short on purpose.
const stats = [
  { num: "3 sec", lbl: "of audio is all it takes to clone a voice" },
  { num: "$900M", lbl: "lost by Americans to voice-clone scams (FBI)" },
  { num: "1 in 3", lbl: "who engage with an AI scam call lose money" },
  { num: "Under 5s", lbl: "to confirm a real call with Vouch" },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.num}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
