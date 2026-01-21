import React, { useEffect, useMemo, useState } from "react";
import { NAV_ITEMS } from "../data/navigation";

/**
 * Returns the currently active section id based on scroll position.
 * Uses IntersectionObserver where available.
 */
function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] ?? "home");

  useEffect(() => {
    const ids = Array.isArray(sectionIds) ? sectionIds : [];
    if (ids.length === 0) return undefined;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    // Fallback for older browsers.
    if (typeof IntersectionObserver === "undefined") {
      const onScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        let current = ids[0];

        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top + scrollY;
          if (scrollY + 120 >= top) current = id;
        }

        setActiveId(current);
      };

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting entry.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute("id");
          if (id) setActiveId(id);
        }
      },
      {
        // Account for sticky header and give preference to content near the top.
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

// PUBLIC_INTERFACE
export default function Nav() {
  /** Persistent top navigation for in-page sections with active state. */
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="header" role="banner">
      <div className="container navInner">
        <a className="brand" href="#home" aria-label="Go to Home section">
          <span className="brandTitle">Portfolio</span>
          <span className="brandSubtitle">UX/UI • critique-first</span>
        </a>

        <nav aria-label="Primary" className="navLinks">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className="navLink"
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="navCta" href="#services">
            Let’s work
          </a>
        </nav>
      </div>
    </header>
  );
}
