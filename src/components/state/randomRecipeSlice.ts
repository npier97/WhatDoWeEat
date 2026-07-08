import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeDetailProps } from '@/types/RecipeDetail';

export interface RandomRecipeState {
  recipes: RecipeDetailProps[];
}

const initialState: RandomRecipeState = {
  recipes: []
};

const randomRecipeSlice = createSlice({
  name: 'random recipe',
  initialState,
  reducers: {
    setRandomRecipes: (state, action: PayloadAction<RecipeDetailProps[]>) => {
      state.recipes = action.payload;
    }
  }
});

export const { setRandomRecipes } = randomRecipeSlice.actions;
export default randomRecipeSlice.reducer;
