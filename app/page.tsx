import HeroViz from "@/components/HeroViz";
import ThesisExplorer from "@/components/ThesisExplorer";
import PositioningExplorer from "@/components/PositioningExplorer";

const ROSTER = [
  { name: "Ted Stockwell", role: "Founder & CEO" },
  { name: "Michelle Holtmann", role: "President & Chief Strategy Officer" },
  { name: "Steve Jahnke", role: "CTO / Principal Architect" },
  { name: "Laverne Masaki", role: "Chief People Officer" },
  { name: "Vincent E. Elfving", role: "Chief Quantum Advisor" },
  { name: "Rick Jahnke", role: "Principal Engineer" },
  { name: "Ruben Marroquin", role: "Senior Engineer" },
];

export default function Home() {
  return (
    <div className="p-home">
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-text">
            <span className="eyebrow rise d1">The neutral route to post-silicon AI</span>
            <h1 className="rise d2">A new software layer for AI infrastructure.</h1>
          <p className="lede rise d3">
            Every time you ask AI a question, it re-reads everything you&apos;ve given it
            before it answers. The more it knows, the slower and more expensive every
            answer gets, which is why AI stalls exactly where it becomes most valuable:
            long, live, complicated work. We&apos;re building the software layer that
            changes that math.
          </p>
          </div>
          <HeroViz />
        </div>
      </section>

      {/* THESIS */}
      <section className="thesis">
        <div className="wrap">
          <span className="eyebrow reveal">The thesis</span>
          <ThesisExplorer />
        </div>
      </section>

      {/* POSITIONING */}
      <section className="positioning">
        <div className="wrap">
          <span className="sec-eyebrow reveal">What qAI37 is not</span>
          <PositioningExplorer />
        </div>
      </section>

      {/* TEAM ROSTER */}
      <section className="roster-section" id="team">
        <div className="wrap">
          <span className="eyebrow reveal">The team</span>
          <div className="roster">
            {ROSTER.map((m) => (
              <div key={m.name} className="roster-item reveal">
                <span className="roster-name">{m.name}</span>
                <span className="roster-role">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
