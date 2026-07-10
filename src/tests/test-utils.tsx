import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '@/components/state/recipeSlice';
import tagReducer from '@/components/state/tagSlice';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState } from '@/store';
import {
  QueryClient,
  QueryClientProvider,
  QueryKey
} from '@tanstack/react-query';

export const createTestStore = (preloadedState: Partial<RootState> = {}) => {
  return configureStore({
    reducer: {
      recipe: recipeReducer,
      tag: tagReducer
    },
    preloadedState: {
      recipe: {
        queryParams: '',
        viewMode: 'popular' as const
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
  {
    preloadedState = {},
    queryData = []
  }: {
    preloadedState?: Partial<RootState>;
    queryData?: { queryKey: QueryKey; data: unknown }[];
  } = {}
): RenderResult => {
  const store = createTestStore(preloadedState);
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } }
  });
  queryData.forEach(({ queryKey, data }) => {
    queryClient.setQueryData(queryKey, data);
  });
  return render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </Provider>
  );
};
