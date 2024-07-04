import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { cartAction } from '../../store/cart/cart.actions';
import { favouriteAction } from '../../store/favourite/favourite.actions';
import { getIsLoggedIn } from '../../store/login/login.selector';
import { featuredProducts } from '../../models/FeaturedProducts';
import { AppState } from '../../app.state';
import { loadProducts } from '../../store/featured-products/products.action';
import {
  getFilteredProducts,
  getProducts,
} from '../../store/featured-products/products.selector';

@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrl: './featuredproducts.component.css',
})
export class FeaturedproductsComponent {
  products$!: Observable<featuredProducts[]>;
  login!: boolean;
  isFav!: boolean;

  constructor(
    private store: Store<AppState>,

    private route: Router
  ) {
    this.products$ = this.store
      .select(getFilteredProducts)
      .pipe(map((products) => products ?? []));
  }

  ngOnInit() {
 
    this.store.select(getIsLoggedIn).subscribe((data) => (this.login = data));
  }
  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  toggleFav(product: featuredProducts) {
    if (this.login) {
      alert('Product added to wishlist');
      this.store.dispatch(favouriteAction({ product }));
    } else {
      alert('Login to continue');
      this.route.navigate(['/login']);
    }
  }
  addToCart(product: featuredProducts, quantity: number) {
    if (this.login) {
      alert('Product added to cart successfully');
      this.store.dispatch(cartAction({ product, quantity }));
    } else {
      alert('Login To Continue');
      this.route.navigate(['/login']);
    }
  }
}
