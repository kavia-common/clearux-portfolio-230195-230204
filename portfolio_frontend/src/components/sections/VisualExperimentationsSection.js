import React from "react";
import { Section } from "./Section";
import { Body } from "../typography/Typography";

// PUBLIC_INTERFACE
export function VisualExperimentationsSection({ data }) {
  /** Visual experimentations section. */
  return (
    <Section
      id="visual-experimentations"
      title={data.title}
      intro={data.intro}
      className="section-visual"
    >
      <div className="stack">
        {data.items.map((it) => (
          <article key={it.title} className="card">
            <header className="card-header">
              <h3 className="t-card-title">{it.title}</h3>
            </header>
            <div className="card-body">
              <Body>{it.description}</Body>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
