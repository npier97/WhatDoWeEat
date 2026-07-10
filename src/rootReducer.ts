import { combineReducers } from '@reduxjs/toolkit';
import recipeReducer from '@/components/state/recipeSlice';
import randomRecipeReducer from '@/components/state/randomRecipeSlice';
import tagReducer from '@/components/state/tagSlice';

const rootReducer = combineReducers({
  randomRecipe: randomRecipeReducer,
  recipe: recipeReducer,
  tag: tagReducer
});

export default rootReducer;
