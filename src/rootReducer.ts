import { combineReducers } from "@reduxjs/toolkit";
import recipeReducer from "@state/recipeSlice";

const rootReducer = combineReducers({
    recipe: recipeReducer
});

export default rootReducer;