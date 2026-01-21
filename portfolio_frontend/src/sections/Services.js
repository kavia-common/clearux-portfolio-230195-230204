import React from "react";
import SectionHeader from "../components/SectionHeader";

// PUBLIC_INTERFACE
export default function Services() {
  /** Services section listing offerings in a clear, scannable format. */
  const services = [
    {
      title: "UX critique & audits",
      description:
        "Heuristic evaluation, usability review, and prioritized recommendations—built around decisions and evidence.",
      tags: ["Heuristics", "Accessibility", "Prioritization"],
    },
    {
      title: "Information architecture",
      description:
        "Content structure, navigation, and flows optimized for scanning and comprehension.",
      tags: ["IA", "Flows", "Content hierarchy"],
    },
    {
      title: "Design systems foundations",
      description:
        "Tokens, type/spacing scales, and component guidance that reduces UI variance and speeds delivery.",
      tags: ["Tokens", "Components", "Docs"],
    },
  ];

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeader
          kicker="Services"
          title="Ways I can help."
          description="Short, clear engagements designed to reduce ambiguity and improve UX decision-making."
          metaPills={[{ label: "Clarity-first", strong: true }, { label: "Lean deliverables" }]}
        />

        <h2 id="services-title" className="h2" style={{ position: "absolute", left: "-9999px" }}>
          Services
        </h2>

        <div className="cardList" role="list">
          {services.map((s) => (
            <article key={s.title} className="card" role="listitem">
              <h3 className="cardTitle">{s.title}</h3>
              <p className="body muted" style={{ marginTop: "10px" }}>
                {s.description}
              </p>
              <div className="tagRow" aria-label="Service tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "24px" }} className="note">
          <p className="body" style={{ fontWeight: 700 }}>
            Next step
          </p>
          <p className="body muted" style={{ marginTop: "10px" }}>
            If you want, replace this CTA with a real contact link or email. For now it stays
            self-contained and analysis-friendly (no external services).
          </p>
        </div>
      </div>
    </section>
  );
}
