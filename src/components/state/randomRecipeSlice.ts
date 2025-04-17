import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RandomRecipeProps } from '@/types/RandomRecipe';

export interface RandomRecipeState {
  recipes: RandomRecipeProps[];
}

const initialState: RandomRecipeState = {
  recipes: []
};

const randomRecipeSlice = createSlice({
  name: 'random recipe',
  initialState,
  reducers: {
    setRandomRecipes: (state, action: PayloadAction<RandomRecipeProps[]>) => {
      state.recipes = action.payload;
    }
  }
});

export const { setRandomRecipes } = randomRecipeSlice.actions;
export default randomRecipeSlice.reducer;
