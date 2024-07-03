import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { cartAction } from '../cart/state/cart.actions';
import { CartState } from '../cart/state/cart.state';
import { getIsLoggedIn } from '../login/state/login.selector';
import { LoginState } from '../login/state/login.state';
import { featuredProducts } from '../Models/FeaturedProducts';
import { AppState } from '../store/app.state';
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

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(getFavourites);

  }
  addToCart(product: featuredProducts, quantity: number) {

  this.store.dispatch(cartAction({product,quantity}))
  }
  removeFromFav(product: featuredProducts) {
    this.store.dispatch(removefavourite({product}))
  }
  ngOnInit() {
    this.isLoggedin=this.store.select(getIsLoggedIn)
  }
  

}
