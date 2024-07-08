import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getCartItems } from '../../store/cart/cart.selector';
import { getFavourites } from '../../store/favourite/favourite.selector';
import { logoutAction } from '../../store/login/login.actions';
import { getIsLoggedIn } from '../../store/login/login.selector';
import { featuredProducts } from '../../models/FeaturedProducts';
import { AppState } from '../../app.state';
import { searchProducts } from '../../store/featured-products/products.action';

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
  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit() {
    this.store
      .select(getIsLoggedIn)
      .subscribe((data) => (this.isLoggedin = data));
    this.store
      .select(getCartItems)
      .subscribe((data) => (this.cartItems = data));
    this.store
      .select(getFavourites)
      .subscribe((data) => (this.favItems = data));
  }
  onlogout() {
     localStorage.removeItem('loggedInUser');
     this.store.dispatch(logoutAction());
     this.router.navigate(['/login']);
  }
  onSearch(search: string) {
    if (search === null || search.trim() === '') {
      search = '';
    }
    this.store.dispatch(searchProducts({ search }));
  }
}
