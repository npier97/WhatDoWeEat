import { configureStore } from '@reduxjs/toolkit';
import randomRecipeReducer from '@state/randomRecipeSlice';
import recipeReducer from '@state/recipeSlice';
import recipeModalReducer from '@state/recipeModal';
import tagReducer from '@state/tagSlice';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState } from '@/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createTestStore = (preloadedState: Partial<RootState> = {}) => {
  return configureStore({
    reducer: {
      randomRecipe: randomRecipeReducer,
      recipe: recipeReducer,
      recipeModal: recipeModalReducer,
      tag: tagReducer
    },
    preloadedState: {
      randomRecipe: {
        error: '',
        recipes: []
      },
      recipe: {
        error: '',
        ingredients: [],
        recipes: [],
        queryParams: ''
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
  const queryClient = new QueryClient();
  return render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </Provider>
  );
};
