import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "@/types/Recipe";


export interface RecipeState {
    loading: boolean;
    error: string;
    recipes: Recipe[];
}
  
const initialState: RecipeState = {
    loading: false,
    error: "",
    recipes: [],
};

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setRecipes: (state, action: PayloadAction<Recipe[]>) => {
            state.recipes = action.payload;
        },
    }
});

export const { setLoading, setError, setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;