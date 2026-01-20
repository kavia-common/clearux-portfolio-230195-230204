import React from "react";
import { Section } from "./Section";
import { Body } from "../typography/Typography";

// PUBLIC_INTERFACE
export function ServicesSection({ data }) {
  /** Services section listing offerings. */
  return (
    <Section
      id="services"
      title={data.title}
      intro={data.intro}
      className="section-services"
    >
      <div className="grid-3">
        {data.items.map((s) => (
          <article key={s.title} className="card">
            <header className="card-header">
              <h3 className="t-card-title">{s.title}</h3>
            </header>
            <div className="card-body">
              <Body>{s.description}</Body>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
