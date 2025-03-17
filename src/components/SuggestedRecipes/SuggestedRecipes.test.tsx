import { render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import SuggestedRecipes from '.';
import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '@state/recipeSlice';
import randomRecipeReducer from '@state/randomRecipeSlice';
import tagReducer from '@state/tagSlice';
import userEvent from '@testing-library/user-event';
import Hero from '@components/Hero';

const recipesStore = configureStore({
  reducer: {
    randomRecipe: randomRecipeReducer,
    recipe: recipeReducer,
    tag: tagReducer
  }
});

const searchRecipe = async () => {
  const hero = screen.getByTestId('hero');
  const heroInput = within(hero).getByTestId('hero-input');
  const heroButton = within(hero).getByTestId('hero-button');
  const suggestedRecipes = screen.getByTestId('suggested-recipes');

  await userEvent.type(heroInput, 'apples');
  await userEvent.keyboard('[Enter]');
  await userEvent.click(heroButton);

  return suggestedRecipes;
};

describe('Suggested recipes', () => {
  beforeEach(() => {
    render(
      <Provider store={recipesStore}>
        <Hero />
        <SuggestedRecipes />
      </Provider>
    );
  });
  it('should render the suggested recipes section', () => {
    const suggestedRecipes = screen.getByTestId('suggested-recipes');

    expect(suggestedRecipes).toBeInTheDocument();
  });
  it('should render the current popular recipes by default', () => {
    const suggestedRecipes = screen.getByTestId('suggested-recipes');
    const popularRecipes =
      within(suggestedRecipes).getByTestId('popular-recipes');

    expect(popularRecipes).toBeInTheDocument();
  });
  it('should render the searched recipes when searching for recipes', async () => {
    await searchRecipe();

    const suggestedRecipes = await screen.findByTestId('suggested-recipes');
    const searchedRecipes =
      await within(suggestedRecipes).findByTestId('searched-recipes');

    expect(searchedRecipes).toBeInTheDocument();
  });
  it('should render the spinner when searching for recipes', async () => {
    await searchRecipe();

    const suggestedRecipes = screen.getByTestId('suggested-recipes');
    const spinner = within(suggestedRecipes).getByTestId(
      'suggested-recipes-spinner'
    );

    expect(spinner).toBeInTheDocument();
  });
  it('should render the generated random recipes when clicking on the button', async () => {
    const hero = screen.getByTestId('hero');
    const randomRecipeGenerator = within(hero).getByTestId(
      'random-recipe-generator'
    );

    await userEvent.click(randomRecipeGenerator);

    const suggestedRecipes = await screen.findByTestId('suggested-recipes');
    const randomRecipes =
      await within(suggestedRecipes).findByTestId('random-recipes');

    expect(randomRecipes).toBeInTheDocument();
  });
});
