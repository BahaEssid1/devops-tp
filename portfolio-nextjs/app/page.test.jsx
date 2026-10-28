import { afterEach, describe, it, expect, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import Home from "./page";

vi.mock("next/link", () => ({
  default: ({ children, ...props }) => <a {...props}>{children}</a>,
}));

vi.mock("../components/Header", () => ({
  default: () => <div>Header component</div>,
}));
vi.mock("../components/About", () => ({
  default: () => <div>About component</div>,
}));
vi.mock("../components/Skills", () => ({
  default: () => <div>Skills component</div>,
}));
vi.mock("../components/Projects", () => ({
  default: () => <div>Projects component</div>,
}));
vi.mock("../components/Experience", () => ({
  default: () => <div>Experience component</div>,
}));
vi.mock("../components/Contact", () => ({
  default: () => <div>Contact component</div>,
}));
vi.mock("../components/Footer", () => ({
  default: () => <div>Footer component</div>,
}));

afterEach(() => {
  cleanup();
});

describe("Home page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 }))
      .toHaveTextContent("Hi, I'm Baha.");
  });

  it("renders the project navigation link", () => {
    render(<Home />);

    expect(
      screen.getByRole("link", { name: "Explore My Projects" })
    ).toHaveAttribute("href", "#projects");
  });
});
