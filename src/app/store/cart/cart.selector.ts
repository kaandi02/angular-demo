import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";

const cartSelector = createFeatureSelector<CartState>('cart');
export const getCartItems = createSelector(cartSelector, (state) => {
    return state.products
})
export const getTotalQuantity = createSelector(cartSelector, (state) => {
    return state.totalQuantity
})