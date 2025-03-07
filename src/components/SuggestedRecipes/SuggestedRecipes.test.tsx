import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import SuggestedRecipes from ".";
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "@state/recipeSlice";
import userEvent from "@testing-library/user-event";
import Hero from "@components/Hero";

const recipesStore = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

const searchRecipe = async () => {
  const hero = screen.getByTestId("hero");
  const heroInput = within(hero).getByTestId("hero-input");
  const heroButton = within(hero).getByTestId("hero-button");
  const suggestedRecipes = screen.getByTestId("suggested-recipes");

  await userEvent.type(heroInput, "apples");
  await userEvent.keyboard("[Enter]");
  await userEvent.click(heroButton);

  return suggestedRecipes;
};

describe("Suggested recipes", () => {
  beforeEach(() => {
    render(
      <Provider store={recipesStore}>
        <Hero />
        <SuggestedRecipes />
      </Provider>
    );
  });
  it("should render the suggested recipes section", () => {
    const suggestedRecipes = screen.getByTestId("suggested-recipes");

    expect(suggestedRecipes).toBeInTheDocument();
  });
  it("should render the current popular recipes by default", () => {
    const suggestedRecipes = screen.getByTestId("suggested-recipes");
    const popularRecipes =
      within(suggestedRecipes).getByTestId("popular-recipes");

    expect(popularRecipes).toBeInTheDocument();
  });
  it("should render the searched recipes when searching for recipes", async () => {
    await searchRecipe();

    const suggestedRecipes = screen.getByTestId("suggested-recipes");
    const searchedRecipes =
      within(suggestedRecipes).getByTestId("searched-recipes");
    expect(searchedRecipes).toBeInTheDocument();
  });
});
