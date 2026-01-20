import React from "react";
import { Section } from "./Section";
import { Body, Caption } from "../typography/Typography";

// PUBLIC_INTERFACE
export function WorkSection({ data }) {
  /** Work/projects section. */
  return (
    <Section id="work" title={data.title} intro={data.intro} className="section-work">
      <div className="grid-3">
        {data.projects.map((p) => (
          <article key={p.name} className="card">
            <header className="card-header">
              <h3 className="t-card-title">{p.name}</h3>
              <Caption className="muted">{p.role}</Caption>
            </header>

            <div className="card-body">
              <Body>{p.outcome}</Body>

              <ul className="tag-list" aria-label="Project tags">
                {p.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="link-row">
                {p.links.map((l) => (
                  <a key={l.label} className="link" href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
