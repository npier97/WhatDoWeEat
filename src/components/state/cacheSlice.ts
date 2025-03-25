import { RandomRecipeProps } from '@/types/RandomRecipe';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CacheState {
  cachedRecipes: Record<
    string,
    { recipes: RandomRecipeProps[]; timestamp: number }
  >;
}

const initialState: CacheState = {
  cachedRecipes: {}
};

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    setCachedRecipes: (
      state,
      action: PayloadAction<{ query: string; recipes: RandomRecipeProps[] }>
    ) => {
      const { query, recipes } = action.payload;
      state.cachedRecipes[query] = {
        recipes,
        timestamp: Date.now() //TODO: Implement cache expiration time
      };
    }
  }
});

export const { setCachedRecipes } = cacheSlice.actions;
export default cacheSlice.reducer;
