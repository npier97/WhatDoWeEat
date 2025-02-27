import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "./index";

describe("Navigation bar", () => {
  beforeEach(() => {
    render(<Header />);
  });
  it("should render the navbar", () => {
    const navbar = screen.getByTestId("navbar");

    expect(navbar).toBeInTheDocument();
  });
  describe("links", () => {
    it("should render Home and Recipes in the menu items", () => {
      const navbar = screen.getByTestId("navbar");
      const homeLink = within(navbar).getByRole("link", { name: /home/i });
      const recipesLink = within(navbar).getByRole("link", {
        name: /recipes/i,
      });

      expect(homeLink).toBeTruthy();
      expect(recipesLink).toBeTruthy();
    });
    it("should have the correct href attributes", () => {
      const navbar = screen.getByTestId("navbar");
      const homeLink = within(navbar).getByRole("link", { name: /home/i });
      const recipesLink = within(navbar).getByRole("link", {
        name: /recipes/i,
      });

      expect(homeLink).toHaveAttribute("href", "/");
      expect(recipesLink).toHaveAttribute("href", "/recipes");
    });
  });
});
