import React from "react";

/**
 * Section wrapper to standardize spacing, anchoring, and accessibility.
 */

// PUBLIC_INTERFACE
export function Section({
  id,
  title,
  intro,
  children,
  labelledById,
  className = "",
}) {
  /** Standard content section with optional title and intro. */
  const headingId = labelledById || (title ? `${id}-title` : undefined);

  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="container section-inner">
        {(title || intro) && (
          <header className="section-header">
            {title && (
              <h2 id={headingId} className="t-heading">
                {title}
              </h2>
            )}
            {intro && <p className="t-subheading">{intro}</p>}
          </header>
        )}
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
