import React from "react";

/**
 * Shared typography primitives.
 * These wrap semantic elements and provide consistent classes for styling and hierarchy.
 */

// PUBLIC_INTERFACE
export function Eyebrow({ as: Tag = "p", className = "", children, ...props }) {
  /** Small, uppercase-ish label used for section/category cues. */
  return (
    <Tag className={`t-eyebrow ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

// PUBLIC_INTERFACE
export function Heading({ as: Tag = "h2", className = "", children, ...props }) {
  /** Primary headings for sections; defaults to h2 to preserve document outline. */
  return (
    <Tag className={`t-heading ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

// PUBLIC_INTERFACE
export function Subheading({
  as: Tag = "p",
  className = "",
  children,
  ...props
}) {
  /** Supporting text beneath headings; slightly larger than body. */
  return (
    <Tag className={`t-subheading ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

// PUBLIC_INTERFACE
export function Body({ as: Tag = "p", className = "", children, ...props }) {
  /** Default readable paragraph copy. */
  return (
    <Tag className={`t-body ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

// PUBLIC_INTERFACE
export function Caption({ as: Tag = "p", className = "", children, ...props }) {
  /** Small secondary text for metadata. */
  return (
    <Tag className={`t-caption ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
