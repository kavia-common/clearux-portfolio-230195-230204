import React from "react";
import { Section } from "./Section";
import { Body, Caption } from "../typography/Typography";

// PUBLIC_INTERFACE
export function AboutSection({ data }) {
  /** About section describing approach and skills. */
  return (
    <Section
      id="about"
      title={data.title}
      intro={data.lead}
      className="section-about"
    >
      <div className="grid-2">
        <div>
          {data.body.map((p) => (
            <Body key={p}>{p}</Body>
          ))}
          <Caption className="muted">
            Tip: This content is editable in <code>src/content/siteData.js</code>.
          </Caption>
        </div>

        <div className="panel">
          <h3 className="t-panel-title">Focus areas</h3>
          <ul className="tag-list" aria-label="Focus areas">
            {data.bullets.map((b) => (
              <li key={b} className="tag">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
