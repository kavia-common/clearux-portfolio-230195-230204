import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders primary navigation", () => {
  render(<App />);
  const nav = screen.getByRole("navigation", { name: /primary/i });
  expect(nav).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /work/i })).toBeInTheDocument();
});
