import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RecipeModalState {
  isOpen: boolean;
}

const initialState: RecipeModalState = {
  isOpen: false
};

const recipeModalSlice = createSlice({
  name: 'recipe modal',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    }
  }
});

export const { setIsOpen } = recipeModalSlice.actions;
export default recipeModalSlice.reducer;
