import { screen, within } from '@testing-library/react';
import { describe, it } from 'vitest';
import SuggestedRecipes from '.';
import { renderWithProviders } from '@/tests/test-utils';
import { vi } from 'vitest';
import * as ReactQuery from '@tanstack/react-query';
import { userEvent } from '@testing-library/user-event';

describe('Suggested recipes', () => {
  const defaultRecipeState = {
    recipe: {
      error: '',
      ingredients: [],
      recipes: [
        {
          id: 1,
          title: 'Apple Pie',
          summary: 'Some summary',
          instructions: 'Some instructions about the recipe'
        }
      ],
      queryParams: ''
    }
  };

  it('should render the current popular recipes by default', () => {
    renderWithProviders(<SuggestedRecipes />);

    const suggestedRecipes = screen.getByTestId('suggested-recipes');
    const popularRecipes =
      within(suggestedRecipes).getByTestId('popular-recipes');

    expect(popularRecipes).toBeInTheDocument();
  });
  it('should render the searched recipes when searching for recipes', () => {
    renderWithProviders(<SuggestedRecipes />, {
      preloadedState: defaultRecipeState
    });

    const searchedRecipes = screen.getByTestId('searched-recipes');

    expect(searchedRecipes).toBeInTheDocument();
  });
  it('should open and close a recipe modal using local state', async () => {
    renderWithProviders(<SuggestedRecipes />, {
      preloadedState: defaultRecipeState
    });

    await userEvent.click(screen.getByRole('button', { name: 'See summary' }));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText('Some summary')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it.skip('should render the spinner when searching for recipes', () => {
    vi.spyOn(ReactQuery, 'useIsFetching').mockReturnValue(1);
    renderWithProviders(<SuggestedRecipes />, {
      preloadedState: {
        recipe: {
          ...defaultRecipeState.recipe
        }
      }
    });

    const suggestedRecipes = screen.getByTestId('suggested-recipes');
    const spinner = within(suggestedRecipes).getByTestId(
      'suggested-recipes-spinner'
    );

    expect(spinner).toBeInTheDocument();
    vi.restoreAllMocks();
  });
  it('should render the generated random recipes when clicking on the button', () => {
    renderWithProviders(<SuggestedRecipes />, {
      preloadedState: {
        randomRecipe: {
          recipes: [
            {
              id: 1,
              title: 'Random Salad',
              summary: 'Some salad recipe',
              instructions: 'Some instructions about the recipe'
            }
          ]
        }
      }
    });

    const suggestedRecipes = screen.getByTestId('suggested-recipes');
    const randomRecipes =
      within(suggestedRecipes).getByTestId('random-recipes');

    expect(randomRecipes).toBeInTheDocument();
  });
});
