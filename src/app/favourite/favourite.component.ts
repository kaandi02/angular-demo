import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { cartAction } from '../cart/state/cart.actions';
import { CartState } from '../cart/state/cart.state';
import { getIsLoggedIn } from '../login/state/login.selector';
import { LoginState } from '../login/state/login.state';
import { featuredProducts } from '../Models/FeaturedProducts';
import { removefavourite } from './state/favourite.actions';
import { getFavourites } from './state/favourite.selector';
import { favouriteState } from './state/favourite.state';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {

  products$!: Observable<featuredProducts[]>;
  isLoggedin!: Observable<boolean>;

  constructor(private store: Store<favouriteState>,private cartStore:Store<CartState>,private loginStore:Store<LoginState>) {
    this.products$ = this.store.select(getFavourites);

  }
  addToCart(product: featuredProducts,quantity:number) {
    this.cartStore.dispatch(cartAction({product,quantity}))
  }
  removeFromFav(product: featuredProducts) {
    this.store.dispatch(removefavourite({product}))
  }
  ngOnInit() {
    this.isLoggedin=this.loginStore.select(getIsLoggedIn)
  }
  

}
