import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RandomRecipeProps } from '@/types/RandomRecipe';

export interface RandomRecipeState {
  loading: boolean;
  error: string;
  recipes: RandomRecipeProps[];
}

const initialState: RandomRecipeState = {
  loading: false,
  error: '',
  recipes: []
};

const randomRecipeSlice = createSlice({
  name: 'random recipe',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setRandomRecipes: (state, action: PayloadAction<RandomRecipeProps[]>) => {
      state.recipes = action.payload;
    }
  }
});

export const { setLoading, setError, setRandomRecipes } =
  randomRecipeSlice.actions;
export default randomRecipeSlice.reducer;
