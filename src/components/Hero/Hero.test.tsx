import { render, screen, within } from '@testing-library/react';
import { describe, it } from 'vitest';
import Hero from './index';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import recipeReducer from '@state/recipeSlice';
import tagReducer from '@state/tagSlice';
import { userEvent } from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const testStore = configureStore({
  reducer: {
    recipe: recipeReducer,
    tag: tagReducer
  }
});

const setNewTag = async () => {
  const hero = screen.getByTestId('hero');
  const heroInput = within(hero).getByTestId('hero-input');

  await userEvent.type(heroInput, 'apple');
  await userEvent.keyboard('[Enter]');

  return heroInput;
};

describe('Hero', () => {
  beforeEach(() => {
    render(
      <Provider store={testStore}>
        <QueryClientProvider client={queryClient}>
          <Hero />
        </QueryClientProvider>
      </Provider>
    );
  });
  it('should render the hero', () => {
    const hero = screen.getByTestId('hero');

    expect(hero).toBeInTheDocument();
  });
  it('should render the titles correctly', () => {
    const hero = screen.getByTestId('hero');
    const h1Element = within(hero).getByRole('heading', { level: 1 });
    const h2Element = within(hero).getByRole('heading', { level: 2 });

    expect(h1Element.textContent).toEqual("What's In Your Fridge?");
    expect(h2Element.textContent).toEqual(
      'Unleash culinary creativity with what you have!'
    );
  });
  describe('tags creation and deletion', () => {
    it('should create a tag on pressing Enter key', async () => {
      await setNewTag();
      const tag = screen.getByTestId('tag-span');

      expect(tag).toBeInTheDocument();
      expect(tag.textContent).toEqual('apple');
    });
    it('should delete the tag when the delete icon is clicked', async () => {
      await setNewTag();
      const tag = screen.getByTestId('tag-span');
      const deleteIcon = within(tag).getByTestId('delete-icon');

      await userEvent.click(deleteIcon);

      const tagContainer = screen.getByTestId('tag-span-container');

      expect(tagContainer.children.length).toBe(0);
    });
  });
});
