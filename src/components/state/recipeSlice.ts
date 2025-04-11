import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeProps } from '@/types/Recipe';

export interface RecipeState {
  loading: boolean;
  ingredients: string[];
  recipes: RecipeProps[];
  queryParams: string;
}

const initialState: RecipeState = {
  loading: false,
  ingredients: [],
  recipes: [],
  queryParams: ''
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
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

export const { setLoading, setIngredients, setRecipes, setQueryParams } =
  recipeSlice.actions;
export default recipeSlice.reducer;
