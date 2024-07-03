import { createReducer, on } from "@ngrx/store";
import { cartAction,  quantityAction,  removeCart, totalQuantity } from "./cart.actions";
import { CartState, initialstate } from "./cart.state";

export const cartReducer = createReducer(initialstate,
    on(cartAction, (state, action) => {
        
    const productExists = state.products.find(p => p.id === action.product.id);
    const updatedProducts = productExists
      ? state.products.map(p => p.id === action.product.id ? { ...p, quantity: p.quantity + action.quantity } : p)
      : [...state.products, { ...action.product, quantity: action.quantity }];
    
    return {
      ...state,
      products: updatedProducts,
    };
  }), on(removeCart, (state, action) => {
        return {
            ...state,
            products:state.products.filter(product=>product.id !== action.product.id)
       }
    }), on(quantityAction, (state, action) => {
        return {
            ...state,
            products:state.products.map(product=>product.id===action.id ? {...product,quantity:action.value}: product)
        }
    }), on(totalQuantity, (state, action) => {
      return {
        ...state,
        totalQuantity:action.totalQuantity
      }
    })
     
)


// function saveStateToLocalStorage(state: CartState) {

//     localStorage.setItem('cartProducts', JSON.stringify(state.products));
//     localStorage.setItem('cartQuantity', JSON.stringify(state.quantity));
// }