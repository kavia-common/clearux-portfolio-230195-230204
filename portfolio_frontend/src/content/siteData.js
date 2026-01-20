export const siteData = {
  meta: {
    title: "Clear UX — Portfolio",
    description:
      "A typography-first UX/UI portfolio designed for analysis and critique.",
    location: "Remote / Your City",
    email: "hello@example.com",
  },
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "visual-experimentations", label: "Visual Experimentations" },
    { id: "services", label: "Services" },
    { id: "footer", label: "Footer" },
  ],
  home: {
    eyebrow: "UX/UI Designer",
    heading: "I design calm, legible interfaces that make decisions obvious.",
    subheading:
      "This portfolio is intentionally minimal—built for critique, readability, and interaction clarity.",
    highlights: [
      "Typography-first layouts",
      "Systems thinking & component logic",
      "Accessibility as default (keyboard, focus, contrast)",
    ],
  },
  about: {
    title: "About",
    lead:
      "I focus on enabling product teams to reason about UX: what the user sees, what they do next, and why the interface makes that path inevitable.",
    body: [
      "My work is grounded in information hierarchy, spacing, and constraint-driven UI. I prefer a quiet visual language that supports confident interaction.",
      "I enjoy translating messy requirements into navigable systems: clear labels, predictable patterns, and meaningful states.",
    ],
    bullets: [
      "Information architecture & navigation",
      "Interaction design & prototyping",
      "Design systems & documentation",
      "Accessibility (WCAG-minded decisions)",
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Product Designer",
        company: "Studio / Company Name",
        period: "2022 — Present",
        summary:
          "Led end-to-end design for a multi-step workflow; improved completion rate by clarifying hierarchy and reducing cognitive load.",
        bullets: [
          "Redesigned onboarding with progressive disclosure",
          "Defined type scale and component guidelines",
          "Partnered with engineering on QA for interaction states",
        ],
      },
      {
        role: "UX Designer",
        company: "Company Name",
        period: "2019 — 2022",
        summary:
          "Shaped core product navigation and established a baseline design system for consistency and speed.",
        bullets: [
          "Re-architected IA for 3 primary user journeys",
          "Created reusable patterns (forms, tables, alerts)",
          "Facilitated critique sessions for continuous improvement",
        ],
      },
    ],
  },
  work: {
    title: "Work",
    intro:
      "Selected projects with short, critique-friendly notes: what changed, why it mattered, and how to evaluate it.",
    projects: [
      {
        name: "Case Study — Checkout Clarity",
        role: "UX/UI, content hierarchy, interaction states",
        outcome:
          "Reduced errors by removing ambiguity and improving inline validation.",
        tags: ["Flow", "Forms", "States"],
        links: [{ label: "Read summary", href: "#work" }],
      },
      {
        name: "Case Study — Navigation & IA",
        role: "Information architecture, taxonomy, navigation model",
        outcome:
          "Made key destinations predictable; reduced time-to-first-action.",
        tags: ["IA", "Navigation", "Taxonomy"],
        links: [{ label: "Read summary", href: "#work" }],
      },
      {
        name: "Case Study — Design System Foundations",
        role: "Type scale, tokens, component documentation",
        outcome: "Improved consistency and reduced build rework.",
        tags: ["System", "Typography", "Components"],
        links: [{ label: "Read summary", href: "#work" }],
      },
    ],
  },
  visualExperimentations: {
    title: "Visual Experimentations",
    intro:
      "Small explorations focused on typography, rhythm, and interaction feedback—kept lightweight and deliberate.",
    items: [
      {
        title: "Micro-typography: line length and rhythm",
        description:
          "Exploring readable measures (60–75ch), subtle letter-spacing, and optical alignment.",
      },
      {
        title: "Focus design as a first-class interaction",
        description:
          "High-clarity focus-visible rings, offsets, and link underlines that reinforce navigation.",
      },
      {
        title: "UI density studies",
        description:
          "Comparing compact vs. spacious layouts while preserving scannability and hierarchy.",
      },
    ],
  },
  services: {
    title: "Services",
    intro:
      "Engagements are flexible—optimized for clarity, critique, and shippable outcomes.",
    items: [
      {
        title: "UX Audit & Critique",
        description:
          "A structured review of hierarchy, navigation, states, and accessibility with prioritized recommendations.",
      },
      {
        title: "Interaction Design",
        description:
          "Flows, states, and edge cases mapped in a way engineering can implement without guesswork.",
      },
      {
        title: "Design System Starter",
        description:
          "Type scale, spacing, tokens, and a small component set to accelerate consistency.",
      },
    ],
  },
  footer: {
    title: "Footer",
    note:
      "If you’d like a critique-friendly walkthrough of a project, reach out.",
    links: [
      { label: "Email", href: "mailto:hello@example.com" },
      { label: "LinkedIn", href: "#" },
      { label: "PDF Portfolio", href: "#" },
    ],
    copyright: `© ${new Date().getFullYear()} Clear UX`,
  },
};
