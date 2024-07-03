import { createReducer, on } from '@ngrx/store';
import {
  loadProductsFailure,
  loadProductsSuccess,
  searchProducts,
} from './products.action';
import { initialstate } from './products.state';

export const productsReducer = createReducer(
  initialstate,
  on(loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      filteredProducts:action.products,
      // products: state.products ? [...state.products, ...action.products] : action.products,
      error: null,
    };
  }),
  on(loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(searchProducts, (state, action) => {
    let filteredProducts = state.products;

    if (action.search && action.search.trim() !== '') {
      filteredProducts =
        state.products?.filter((p) =>
          p.description.toLowerCase().includes(action.search.toLowerCase())
        ) ?? null;
    } else {
      filteredProducts = state.products;
    }

    return {
      ...state,
      filteredProducts: filteredProducts,
    };
  })
);
