import React from "react";
import SectionHeader from "../components/SectionHeader";

// PUBLIC_INTERFACE
export default function VisualExperimentations() {
  /** Visual Experimentations section showcasing small explorations without heavy visuals. */
  return (
    <section
      id="visual-experimentations"
      className="section"
      aria-labelledby="visual-title"
    >
      <div className="container">
        <SectionHeader
          kicker="Visual Experimentations"
          title="Small experiments, strong constraints."
          description="Minimal explorations in type, rhythm, and interaction states—intended for critique rather than decoration."
          metaPills={[{ label: "Type", strong: true }, { label: "Motion (subtle)" }, { label: "States" }]}
        />

        <div className="grid2">
          <div className="card">
            <h3 className="cardTitle" id="visual-title">
              Micro-interaction notes
            </h3>
            <p className="body muted" style={{ marginTop: "12px" }}>
              Hover and focus states use the primary blue; emphasis uses amber.
              The goal is to communicate affordance without adding noise.
            </p>
          </div>

          <div className="card">
            <h3 className="cardTitle">Critique prompts</h3>
            <ul className="body muted" style={{ marginTop: "12px", paddingLeft: "18px" }}>
              <li>Do accents indicate action or simply decorate?</li>
              <li>Is the hierarchy stable across screen sizes?</li>
              <li>Are states visible for keyboard navigation?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
