import { combineReducers } from '@reduxjs/toolkit';
import recipeReducer from '@state/recipeSlice';
import randomRecipeReducer from '@state/randomRecipeSlice';
import recipeModalReducer from '@state/recipeModal';
import tagReducer from '@state/tagSlice';

const rootReducer = combineReducers({
  randomRecipe: randomRecipeReducer,
  recipe: recipeReducer,
  recipeModal: recipeModalReducer,
  tag: tagReducer
});

export default rootReducer;
