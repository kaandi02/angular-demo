import { createReducer, on } from '@ngrx/store';
import { favouriteAction, removefavourite } from './favourite.actions';
import { initialstate } from './favourite.state';

export const favouriteReducer = createReducer(
  initialstate,
  on(favouriteAction, (state, action) => {
    const productExists = state.products.find(
      (p) => p.id === action.product.id
    );
    if (productExists) {
      alert('Product already in your wishlist');
      return state;
    }
    const updatedProducts = [...state.products, action.product];
    console.log(updatedProducts);
    return {
      ...state,
      products: updatedProducts,
    };
  }),
  on(removefavourite, (state, action) => {

    const product = state.products.filter(p => p.id !== action.product.id);
    return {
      ...state,
      products:product
    }
  })
);
