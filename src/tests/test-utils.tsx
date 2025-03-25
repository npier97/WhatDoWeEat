import { configureStore } from '@reduxjs/toolkit';
import cacheReducer from '@state/cacheSlice';
import randomRecipeReducer from '@state/randomRecipeSlice';
import recipeReducer from '@state/recipeSlice';
import recipeModalReducer from '@state/recipeModal';
import tagReducer from '@state/tagSlice';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState } from '@/store';

export const createTestStore = (preloadedState: Partial<RootState> = {}) => {
  return configureStore({
    reducer: {
      cache: cacheReducer,
      randomRecipe: randomRecipeReducer,
      recipe: recipeReducer,
      recipeModal: recipeModalReducer,
      tag: tagReducer
    },
    preloadedState: {
      cache: {
        cachedRecipes: {}
      },
      randomRecipe: {
        loading: false,
        error: '',
        recipes: []
      },
      recipe: {
        loading: false,
        error: '',
        ingredients: [],
        recipes: []
      },
      recipeModal: {
        isOpen: false
      },
      tag: {
        tags: []
      },
      ...preloadedState
    }
  });
};

export const renderWithProviders = (
  ui: React.ReactNode,
  { preloadedState = {} }: { preloadedState?: Partial<RootState> } = {}
): RenderResult => {
  const store = createTestStore(preloadedState);
  return render(<Provider store={store}>{ui}</Provider>);
};
