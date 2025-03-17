import { combineReducers } from '@reduxjs/toolkit';
import recipeReducer from '@state/recipeSlice';
import randomRecipeReducer from '@state/randomRecipeSlice';
import tagReducer from '@state/tagSlice';

const rootReducer = combineReducers({
  randomRecipe: randomRecipeReducer,
  recipe: recipeReducer,
  tag: tagReducer
});

export default rootReducer;
