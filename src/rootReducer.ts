import { combineReducers } from '@reduxjs/toolkit';
import recipeReducer from '@state/recipeSlice';
import tagReducer from '@state/tagSlice';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  tag: tagReducer
});

export default rootReducer;
