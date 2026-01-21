import React from "react";
import SectionHeader from "../components/SectionHeader";
import { experience } from "../data/experience";

// PUBLIC_INTERFACE
export default function Experience() {
  /** Experience section with roles and evidence-based highlights. */
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          kicker="Experience"
          title="From audit → alignment → execution."
          description="I work across discovery, critique, and delivery—keeping the interface readable and decisions explicit."
          metaPills={[{ label: "Systems-minded", strong: true }, { label: "Collaborative" }]}
        />

        <div className="cardList" role="list">
          <h2 id="experience-title" className="h2" style={{ position: "absolute", left: "-9999px" }}>
            Experience
          </h2>

          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="card" role="listitem">
              <div className="cardTitleRow">
                <h3 className="cardTitle">
                  {item.role} • {item.company}
                </h3>
                <div className="cardMeta">
                  {item.period} {item.location ? `• ${item.location}` : ""}
                </div>
              </div>

              <ul className="body muted" style={{ marginTop: "12px", paddingLeft: "18px" }}>
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="tagRow" aria-label="Experience tags">
                {item.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
