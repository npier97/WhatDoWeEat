import { combineReducers } from '@reduxjs/toolkit';
import recipeReducer from '@/components/state/recipeSlice';
import randomRecipeReducer from '@/components/state/randomRecipeSlice';
import recipeModalReducer from '@/components/state/recipeModal';
import tagReducer from '@/components/state/tagSlice';

const rootReducer = combineReducers({
  randomRecipe: randomRecipeReducer,
  recipe: recipeReducer,
  recipeModal: recipeModalReducer,
  tag: tagReducer
});

export default rootReducer;
