import React from "react";
import SectionHeader from "../components/SectionHeader";

// PUBLIC_INTERFACE
export default function About() {
  /** About section describing approach and critique methodology. */
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          kicker="About"
          title="A critique-first practice."
          description="I design with a bias toward legibility, structure, and evidence. Visual polish is welcome—but only after the UX reads clearly."
          metaPills={[
            { label: "Clarity > decoration", strong: true },
            { label: "Accessible by default" },
            { label: "Systematic critique" },
          ]}
        />

        <div className="grid2">
          <div className="card">
            <p className="cardTitle" id="about-title">
              How I think
            </p>
            <p className="body muted" style={{ marginTop: "12px" }}>
              I use typography and spacing as primary design tools. That means:
              fewer competing styles, clearer priorities, and layouts that
              support scanning and comprehension.
            </p>

            <div className="tagRow" aria-label="Principles">
              <span className="tag">Hierarchy</span>
              <span className="tag">Rhythm</span>
              <span className="tag">Constraints</span>
              <span className="tag">Feedback</span>
            </div>
          </div>

          <div className="card">
            <p className="cardTitle">Critique lenses</p>
            <ul className="body muted" style={{ marginTop: "12px", paddingLeft: "18px" }}>
              <li>What is the primary decision on this screen?</li>
              <li>What information is required vs. optional?</li>
              <li>Can a keyboard-only user complete the task?</li>
              <li>Is the hierarchy consistent across breakpoints?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
