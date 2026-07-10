import { combineReducers } from '@reduxjs/toolkit';
import recipeReducer from '@/components/state/recipeSlice';
import tagReducer from '@/components/state/tagSlice';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  tag: tagReducer
});

export default rootReducer;
