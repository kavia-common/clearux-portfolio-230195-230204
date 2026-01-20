import React from "react";
import { Eyebrow, Heading, Subheading, Body } from "../typography/Typography";

// PUBLIC_INTERFACE
export function HomeSection({ data }) {
  /** Top "Home" section with primary value proposition. */
  return (
    <section id="home" className="section section-hero" aria-labelledby="home-title">
      <div className="container section-inner hero-inner">
        <header className="hero-header">
          <Eyebrow className="hero-eyebrow">{data.eyebrow}</Eyebrow>
          <Heading as="h1" className="hero-title" id="home-title">
            {data.heading}
          </Heading>
          <Subheading className="hero-subheading">{data.subheading}</Subheading>
        </header>

        <div className="hero-content">
          <div className="card">
            <Body as="p" className="t-body">
              A minimal single-page layout with deliberate typography and clear
              interaction states. Scroll, tab through links, and evaluate the
              hierarchy.
            </Body>
            <ul className="bullet-list" aria-label="Highlights">
              {data.highlights.map((h) => (
                <li key={h} className="bullet-item">
                  <span className="bullet-dot" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="hero-actions" role="group" aria-label="Primary actions">
              <a className="btn" href="#work">
                View work
              </a>
              <a className="btn btn-secondary" href="#services">
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
