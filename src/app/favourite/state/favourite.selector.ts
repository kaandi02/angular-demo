import { createFeatureSelector, createSelector } from "@ngrx/store";
import { favouriteState } from "./favourite.state";

const favouriteSelector = createFeatureSelector<favouriteState>('favourite');
export const getFavourites = createSelector(favouriteSelector, (state) => { return state.products });
