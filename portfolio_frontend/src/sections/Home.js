import React from "react";

// PUBLIC_INTERFACE
export default function Home() {
  /** Home/hero section with typography-first introduction and guiding principles. */
  return (
    <section id="home" className="section section--first" aria-labelledby="home-title">
      <div className="container">
        <div className="kicker">
          <span className="kickerDot" aria-hidden="true" />
          <span>Typography-driven UX portfolio</span>
        </div>

        <h1 id="home-title" className="h1">
          Designing interfaces that make decisions easier.
        </h1>

        <p className="lede">
          Minimal, black &amp; white foundations—enhanced by subtle grayscale and
          a calm blue/amber accent system. The goal: clear hierarchy, readable
          layouts, and interaction clarity you can critique.
        </p>

        <div style={{ marginTop: "32px" }} className="grid2">
          <div className="note">
            <p className="body" style={{ marginBottom: "10px", fontWeight: 700 }}>
              What you’ll find here
            </p>
            <p className="body muted">
              Each section is built to support analysis: intentional spacing,
              consistent typographic rhythm, and accessible interaction states.
            </p>
          </div>

          <div className="card surface">
            <p className="body" style={{ fontWeight: 700 }}>
              Quick navigation
            </p>
            <p className="body muted" style={{ marginTop: "10px" }}>
              Use the top bar or jump straight to{" "}
              <a className="inlineLink" href="#work">
                selected work
              </a>{" "}
              and{" "}
              <a className="inlineLink" href="#services">
                services
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
