import { combineReducers } from "@reduxjs/toolkit";
import heroReducer from "@components/Hero/state/slice";

const rootReducer = combineReducers({
    hero: heroReducer
});

export default rootReducer;