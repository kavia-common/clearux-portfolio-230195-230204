import React from "react";
import SectionHeader from "../components/SectionHeader";
import { work } from "../data/work";

// PUBLIC_INTERFACE
export default function Work() {
  /** Work section showcasing selected projects with outcomes and tags. */
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeader
          kicker="Work"
          title="Selected work (analysis-friendly summaries)."
          description="Short summaries you can critique: what changed, why it changed, and what outcomes it aimed to improve."
          metaPills={[{ label: "Clarity", strong: true }, { label: "Outcomes" }, { label: "Constraints" }]}
        />

        <h2 id="work-title" className="h2" style={{ position: "absolute", left: "-9999px" }}>
          Work
        </h2>

        <div className="cardList" role="list">
          {work.map((item) => (
            <article key={item.title} className="card" role="listitem">
              <div className="cardTitleRow">
                <h3 className="cardTitle">{item.title}</h3>
                <div className="cardMeta">{item.period}</div>
              </div>

              <p className="body muted" style={{ marginTop: "10px" }}>
                <span style={{ fontWeight: 600, color: "var(--color-text)" }}>
                  {item.subtitle}
                </span>{" "}
                — {item.description}
              </p>

              <div className="tagRow" aria-label="Outcomes">
                {item.outcomes.map((o) => (
                  <span key={o} className="tag">
                    {o}
                  </span>
                ))}
              </div>

              <div className="tagRow" aria-label="Work tags">
                {item.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {item.links?.length ? (
                <p className="body" style={{ marginTop: "14px" }}>
                  {item.links.map((l) => (
                    <a key={l.label} className="inlineLink" href={l.href}>
                      {l.label} <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
