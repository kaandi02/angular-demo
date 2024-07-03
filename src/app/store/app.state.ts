import { cartReducer } from "../cart/state/cart.reducer";
import { CartState } from "../cart/state/cart.state";
import { FavouriteComponent } from "../favourite/favourite.component";
import { favouriteReducer } from "../favourite/state/favourite.reducer";
import { favouriteState } from "../favourite/state/favourite.state";
import { productsReducer } from "../home/featuredproducts/state/products.reducer";
import { productsState } from "../home/featuredproducts/state/products.state";
import { loginReducer } from "../login/state/login.reducer";
import { LoginState } from "../login/state/login.state";
import { signupReducer } from "../signup/state/signup.reducer";
import { UserState } from "../signup/state/signup.state";

export interface AppState{
    cart: CartState;
    favourite: favouriteState;
    products: productsState;
    login: LoginState;
    signup:UserState
}
export const appReducer = {
    cart: cartReducer,
    favourite: favouriteReducer,
    products: productsReducer,
    login: loginReducer,
    signup:signupReducer
}