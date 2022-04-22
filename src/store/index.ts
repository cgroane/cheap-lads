import { combineReducers } from "@reduxjs/toolkit";
import { specials } from "./specialsSlice";
import { mapSlice } from './mapSlice';
/**
 * import reducers below
 */

export const rootReducer = combineReducers({
    specialsSlice: specials.reducer,
    mapSlice: mapSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;