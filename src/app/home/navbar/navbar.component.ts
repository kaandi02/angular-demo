import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getCartItems } from '../../cart/state/cart.selector';
import { CartState } from '../../cart/state/cart.state';
import { getFavourites } from '../../favourite/state/favourite.selector';
import { favouriteState } from '../../favourite/state/favourite.state';
import { logoutAction } from '../../login/state/login.actions';
import { getIsLoggedIn } from '../../login/state/login.selector';
import { LoginState } from '../../login/state/login.state';
import { featuredProducts } from '../../Models/FeaturedProducts';
import { searchProducts } from '../featuredproducts/state/products.action';
import { productsState } from '../featuredproducts/state/products.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedin!: boolean;
  searchInput!: string;
  cartItems!: featuredProducts[];
  favItems!: featuredProducts[];

  constructor(private store: Store<LoginState>, private router: Router,private productsstore:Store<productsState>,private cartStore:Store<CartState>,private favStore:Store<favouriteState>) {}
  ngOnInit() {
    this.store
      .select(getIsLoggedIn)
      .subscribe((data) => (this.isLoggedin = data));
    this.cartStore.select(getCartItems).subscribe(data => this.cartItems = data);
    this.favStore.select(getFavourites).subscribe(data => this.favItems = data);
      
    
 
  }
  onlogout() {
    this.store.dispatch(logoutAction());
  }
  onSearch(search: string) {
    if (search === null || search.trim() === '') {
      search = '';
    }
    this.store.dispatch(searchProducts({ search }))
  }
  // navigateToCart() {
  //   if (this.isLoggedin) {
  //     this.router.navigate(['/cart']);
  //   } else {
  //     alert('Login to continue');
  //   }
  // }
  // navigateToFav() {
  //   if (this.isLoggedin) {
  //     this.router.navigate(['/favourite']);
  //   } else {
  //     alert('Login to continue');
  //   }
  // }
}
