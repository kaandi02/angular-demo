import { createReducer, on } from '@ngrx/store';
import { featuredProducts } from '../../models/FeaturedProducts';
import {
  filterProductsByPrice,
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
      filteredProducts: action.products,
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
  }),
  on(filterProductsByPrice, (state, action) => {
    let filteredProducts: featuredProducts[] | null | undefined = state.products;

    switch (action.filterOption) {
      case 'lowToHigh':
        filteredProducts = state.products
          ?.slice()
          .sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        filteredProducts = state.products
          ?.slice()
          .sort((a, b) => b.price - a.price);
        break;
      case 'lessThan500':
        filteredProducts =
          state.products?.filter((product) => product.price < 500) ?? null;
        break;
      case 'lessThan1000':
        filteredProducts =
          state.products?.filter((product) => product.price < 1000) ?? null;
        break;
      case 'above1000':
        filteredProducts =
          state.products?.filter((product) => product.price > 1000) ?? null;
        break;
      case '2000plus':
        filteredProducts =
          state.products?.filter((product) => product.price >= 2000) ?? null;
        break;
      default:
        // No filter applied or unknown filter option
        filteredProducts = state.products;
        break;
    }

    return {
      ...state,
      filteredProducts: filteredProducts ?? null,
    };
  })
);
