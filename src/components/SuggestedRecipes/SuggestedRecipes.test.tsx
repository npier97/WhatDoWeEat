import { screen, within } from '@testing-library/react';
import { describe, it } from 'vitest';
import SuggestedRecipes from '.';
import { renderWithProviders } from '@/tests/test-utils';
import { userEvent } from '@testing-library/user-event';

describe('Suggested recipes', () => {
  const recipes = [
    {
      id: 1,
      title: 'Apple Pie',
      summary: 'Some summary',
      instructions: 'Some instructions about the recipe'
    }
  ];
  const searchedRecipeState = {
    recipe: {
      queryParams: 'apple',
      viewMode: 'searched' as const
    }
  };
  const searchedQuery = { queryKey: ['recipes', 'apple'], data: recipes };

  it('should render the current popular recipes by default', () => {
    renderWithProviders(<SuggestedRecipes />);

    const suggestedRecipes = screen.getByTestId('suggested-recipes');
    const popularRecipes =
      within(suggestedRecipes).getByTestId('popular-recipes');

    expect(popularRecipes).toBeInTheDocument();
  });
  it('should render the searched recipes when searching for recipes', () => {
    renderWithProviders(<SuggestedRecipes />, {
      preloadedState: searchedRecipeState,
      queryData: [searchedQuery]
    });

    const searchedRecipes = screen.getByTestId('searched-recipes');

    expect(searchedRecipes).toBeInTheDocument();
  });
  it('should open and close a recipe modal using local state', async () => {
    renderWithProviders(<SuggestedRecipes />, {
      preloadedState: searchedRecipeState,
      queryData: [searchedQuery]
    });

    await userEvent.click(screen.getByRole('button', { name: 'See summary' }));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText('Some summary')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('should render the generated random recipes when clicking on the button', () => {
    renderWithProviders(<SuggestedRecipes />, {
      preloadedState: {
        recipe: {
          queryParams: '',
          viewMode: 'random'
        }
      },
      queryData: [
        {
          queryKey: ['randomRecipes'],
          data: [
            {
              id: 1,
              title: 'Random Salad',
              summary: 'Some salad recipe',
              instructions: 'Some instructions about the recipe'
            }
          ]
        }
      ]
    });

    const suggestedRecipes = screen.getByTestId('suggested-recipes');
    const randomRecipes =
      within(suggestedRecipes).getByTestId('random-recipes');

    expect(randomRecipes).toBeInTheDocument();
  });
});
