import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "@/types/Recipe";

export interface HeroState {
    loading: boolean;
    error: string;
    recipes: Recipe[];
}
  
const initialState: HeroState = {
    loading: false,
    error: "",
    recipes: [],
};

const heroSlice = createSlice({
    name: "hero",
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

export const { setLoading, setError, setRecipes } = heroSlice.actions;
export default heroSlice.reducer;