import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeProps } from '@/types/Recipe';

export interface RecipeState {
  ingredients: string[];
  recipes: RecipeProps[];
  queryParams: string;
}

const initialState: RecipeState = {
  ingredients: [],
  recipes: [],
  queryParams: ''
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setIngredients: (state, action: PayloadAction<string[]>) => {
      state.ingredients = action.payload;
    },
    setRecipes: (state, action: PayloadAction<RecipeProps[]>) => {
      state.recipes = action.payload;
    },
    setQueryParams: (state, action: PayloadAction<string>) => {
      state.queryParams = action.payload;
    }
  }
});

export const { setIngredients, setRecipes, setQueryParams } =
  recipeSlice.actions;
export default recipeSlice.reducer;
