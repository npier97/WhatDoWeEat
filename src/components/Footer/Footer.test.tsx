import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("should render the footer", () => {
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  it("should have the up to date copyright year", () => {
    const footer = screen.getByTestId("footer");
    const copyright = within(footer).getByTestId("copyright");
    const date = new Date().getFullYear();
    expect(copyright.textContent).toContain(date);
  });
});
