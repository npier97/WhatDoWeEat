import { render, screen, within } from "@testing-library/react";
import { describe, it } from "vitest";
import Hero from "./index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import heroReducer from "@components/Hero/state/slice";

const testStore = configureStore({
  reducer: {
    hero: heroReducer,
  },
  preloadedState: {
    hero: { loading: false, error: "", users: [] },
  },
});

describe("Hero", () => {
  beforeEach(() => {
    render(
      <Provider store={testStore}>
        <Hero />
      </Provider>
    );
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
