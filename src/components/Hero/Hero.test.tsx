import { render, screen, within } from "@testing-library/react";
import { describe, it } from "vitest";
import Hero from "./index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import recipeReducer from "@components/state/recipeSlice";
import { userEvent } from "@testing-library/user-event";

const testStore = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

const setNewTag = async () => {
  const hero = screen.getByTestId("hero");
  const heroInput = within(hero).getByTestId("hero-input");

  await userEvent.type(heroInput, "apple");
  await userEvent.keyboard("[Enter]");

  return heroInput;
};

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
  describe("tags creation and deletion", () => {
    it("should create a tag on pressing Enter key", async () => {
      await setNewTag();
      const inputSpan = screen.getByTestId("input-span");

      expect(inputSpan).toBeInTheDocument();
      expect(inputSpan.textContent).toEqual("apple");
    });
    it("should delete the tag when the delete icon is clicked", async () => {
      await setNewTag();
      const inputSpan = screen.getByTestId("input-span");
      const deleteIcon = within(inputSpan).getByTestId("delete-icon");

      await userEvent.click(deleteIcon);

      const inputSpanContainer = screen.getByTestId("input-span-container");

      expect(inputSpanContainer.children.length).toBe(0);
    });
    it("should delete the tags when Discover Recipes button is clicked", async () => {
      const heroButton = screen.getByTestId("hero-button");

      await setNewTag();
      await userEvent.click(heroButton);

      const inputSpanContainer = screen.getByTestId("input-span-container");

      expect(inputSpanContainer.children.length).toBe(0);
    });
  });
});
