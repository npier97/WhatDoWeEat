import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RecipeViewMode = 'popular' | 'searched' | 'random';

export interface RecipeState {
  queryParams: string;
  viewMode: RecipeViewMode;
}

const initialState: RecipeState = {
  queryParams: '',
  viewMode: 'popular'
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<string>) => {
      state.queryParams = action.payload;
    },
    setViewMode: (state, action: PayloadAction<RecipeViewMode>) => {
      state.viewMode = action.payload;
    }
  }
});

export const { setQueryParams, setViewMode } = recipeSlice.actions;
export default recipeSlice.reducer;
