import React from "react";
import { Section } from "./Section";
import { Body, Caption } from "../typography/Typography";

// PUBLIC_INTERFACE
export function ExperienceSection({ data }) {
  /** Experience section with roles and responsibilities. */
  return (
    <Section id="experience" title={data.title} className="section-experience">
      <div className="stack">
        {data.items.map((item) => (
          <article key={`${item.company}-${item.period}`} className="card card-row">
            <header className="card-header">
              <h3 className="t-card-title">{item.role}</h3>
              <Caption className="muted">
                {item.company} · {item.period}
              </Caption>
            </header>

            <div className="card-body">
              <Body>{item.summary}</Body>
              <ul className="list" aria-label={`${item.role} highlights`}>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
