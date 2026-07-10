import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TagState {
  tags: string[];
}

const initialState: TagState = {
  tags: []
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      const tag = action.payload.trim();
      const isDuplicate = state.tags.some(
        (existingTag) => existingTag.toLowerCase() === tag.toLowerCase()
      );

      if (tag && !isDuplicate) {
        state.tags.push(tag);
      }
    },
    removeTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    clearTags: (state) => {
      state.tags = [];
    }
  }
});

export const { addTag, removeTag, clearTags } = tagSlice.actions;
export default tagSlice.reducer;
