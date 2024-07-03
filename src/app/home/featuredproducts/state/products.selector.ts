import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsState } from './products.state';

export const productsSelector =
  createFeatureSelector<productsState>('products');
export const getProducts = createSelector(productsSelector, (state) => {
  return state.products;
});
export const getFilteredProducts = createSelector(
  productsSelector,
  (state: productsState) => state.filteredProducts
);
