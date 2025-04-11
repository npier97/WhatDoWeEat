import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RandomRecipeProps } from '@/types/RandomRecipe';

export interface RandomRecipeState {
  loading: boolean;
  recipes: RandomRecipeProps[];
}

const initialState: RandomRecipeState = {
  loading: false,
  recipes: []
};

const randomRecipeSlice = createSlice({
  name: 'random recipe',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setRandomRecipes: (state, action: PayloadAction<RandomRecipeProps[]>) => {
      state.recipes = action.payload;
    }
  }
});

export const { setLoading, setRandomRecipes } = randomRecipeSlice.actions;
export default randomRecipeSlice.reducer;
