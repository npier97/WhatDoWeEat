import { combineReducers } from '@reduxjs/toolkit';
import cacheReducer from '@state/cacheSlice';
import recipeReducer from '@state/recipeSlice';
import randomRecipeReducer from '@state/randomRecipeSlice';
import recipeModalReducer from '@state/recipeModal';
import tagReducer from '@state/tagSlice';

const rootReducer = combineReducers({
  cache: cacheReducer,
  randomRecipe: randomRecipeReducer,
  recipe: recipeReducer,
  recipeModal: recipeModalReducer,
  tag: tagReducer
});

export default rootReducer;
