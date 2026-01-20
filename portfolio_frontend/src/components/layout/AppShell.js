import React, { useEffect, useMemo, useState } from "react";

/**
 * AppShell provides:
 * - Skip-to-content link for accessibility
 * - Persistent top navigation with in-page anchor links
 * - Optional intersection-based active link highlighting
 */

// PUBLIC_INTERFACE
export function AppShell({ navItems, children }) {
  /** Layout wrapper for the single-page portfolio app. */
  const [activeSectionId, setActiveSectionId] = useState(
    navItems?.[0]?.id || "home"
  );

  const navById = useMemo(() => {
    const map = new Map();
    (navItems || []).forEach((i) => map.set(i.id, i));
    return map;
  }, [navItems]);

  useEffect(() => {
    if (!navItems?.length) return;

    // Intersection-based active section tracking
    const sectionEls = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sectionEls.length) return;

    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]?.target?.id) {
          setActiveSectionId(visible[0].target.id);
        }
      },
      {
        // Trigger when a section is ~40% in view.
        threshold: [0.2, 0.4, 0.6],
        // Account for sticky header height.
        rootMargin: "-96px 0px -60% 0px",
      }
    );

    sectionEls.forEach((el) => observer.observe(el));

    // If reduced motion, keep observer anyway, but scrolling will not animate via CSS.
    // No additional action required.

    return () => observer.disconnect();
  }, [navItems, navById]);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" role="banner">
        <div className="container header-inner">
          <div className="brand" aria-label="Site title">
            <span className="brand-mark" aria-hidden="true">
              ●
            </span>
            <span className="brand-text">Clear UX</span>
          </div>

          <nav className="site-nav" aria-label="Primary">
            <ul className="nav-list">
              {(navItems || []).map((item) => {
                const isActive = item.id === activeSectionId;
                return (
                  <li key={item.id} className="nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`nav-link ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {children}

      <div className="sr-only" aria-live="polite">
        {activeSectionId && navById.get(activeSectionId)
          ? `Current section: ${navById.get(activeSectionId).label}`
          : ""}
      </div>
    </div>
  );
}
