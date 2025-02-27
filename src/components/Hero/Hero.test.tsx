import { render, screen, within } from "@testing-library/react";
import { describe, it } from "vitest";
import Hero from "./index";

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });
  it("should render the hero", () => {
    const hero = screen.getByTestId("hero");

    expect(hero).toBeInTheDocument();
  });
  it("should render the titles correctly", () => {
    const hero = screen.getByTestId("hero");
    const h1Element = within(hero).getByRole("heading", { level: 1 });
    const h2Element = within(hero).getByRole("heading", { level: 2 });

    expect(h1Element.textContent).toEqual("What's In Your Fridge?");
    expect(h2Element.textContent).toEqual(
      "Unleash culinary creativity with what you have!"
    );
  });
});
