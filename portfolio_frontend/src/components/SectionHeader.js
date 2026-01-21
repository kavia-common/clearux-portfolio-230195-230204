import React from "react";

/**
 * @param {{ kicker?: string; title: string; description?: string; metaPills?: Array<{label: string; strong?: boolean}> }} props
 */
// PUBLIC_INTERFACE
export default function SectionHeader({ kicker, title, description, metaPills = [] }) {
  /** Renders a consistent typographic section header (kicker + title + optional description and pills). */
  return (
    <div className="sectionHeader">
      <div className="sectionHeaderMeta">
        {kicker ? (
          <div className="kicker">
            <span className="kickerDot" aria-hidden="true" />
            <span>{kicker}</span>
          </div>
        ) : null}

        {metaPills.map((pill) => (
          <span
            key={pill.label}
            className={`pill ${pill.strong ? "pillStrong" : ""}`}
          >
            {pill.label}
          </span>
        ))}
      </div>

      <h2 className="h2">{title}</h2>

      {description ? <p className="body muted">{description}</p> : null}
    </div>
  );
}
