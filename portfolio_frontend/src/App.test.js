import { render, screen } from "@testing-library/react";
import App from "./App";
import { NAV_ITEMS } from "./data/navigation";

test("renders main sections", () => {
  render(<App />);

  // Home hero heading
  expect(
    screen.getByRole("heading", { name: /designing interfaces that make decisions easier/i })
  ).toBeInTheDocument();

  // Section headings
  expect(screen.getByText(/a critique-first practice/i)).toBeInTheDocument();
  expect(screen.getByText(/selected work/i)).toBeInTheDocument();
  expect(screen.getByText(/ways i can help/i)).toBeInTheDocument();
});

test("renders nav anchors for each section", () => {
  render(<App />);

  const nav = screen.getByRole("navigation", { name: /primary/i });
  expect(nav).toBeInTheDocument();

  for (const item of NAV_ITEMS) {
    const link = screen.getByRole("link", { name: item.label });
    expect(link).toHaveAttribute("href", `#${item.id}`);
  }
});
