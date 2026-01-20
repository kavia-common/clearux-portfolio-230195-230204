import React from "react";
import { Heading, Body, Caption } from "../typography/Typography";

// PUBLIC_INTERFACE
export function FooterSection({ data }) {
  /** Footer section with contact links and closing note. */
  return (
    <footer
      id="footer"
      className="site-footer"
      role="contentinfo"
      aria-labelledby="footer-title"
    >
      <div className="container footer-inner">
        <header className="footer-header">
          <Heading as="h2" id="footer-title" className="footer-title">
            {data.title}
          </Heading>
          <Body className="muted">{data.note}</Body>
        </header>

        <nav className="footer-nav" aria-label="Footer links">
          <ul className="footer-links">
            {data.links.map((l) => (
              <li key={l.label}>
                <a className="link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Caption className="muted">{data.copyright}</Caption>
      </div>
    </footer>
  );
}
