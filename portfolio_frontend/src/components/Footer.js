import React from "react";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with minimal, analysis-friendly copy and secondary links. */
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footerGrid">
        <div>
          <div className="brandTitle">Portfolio</div>
          <p className="body muted" style={{ marginTop: "8px" }}>
            Built for clarity: hierarchy, spacing, and accessible interaction.
          </p>
        </div>

        <div>
          <p className="body muted">
            © {year} •{" "}
            <a className="inlineLink" href="#home">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
