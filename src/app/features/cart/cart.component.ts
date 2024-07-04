import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { map, Observable, of, Subscription } from 'rxjs';

import { featuredProducts } from '../../models/FeaturedProducts';
import { AppState } from '../../app.state';
import {
  cartAction,
  quantityAction,
  removeCart,
  totalQuantity,
} from '../../store/cart/cart.actions';
import { getCartItems } from '../../store/cart/cart.selector';
import { CartState } from '../../store/cart/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  product$!: Observable<featuredProducts[] | null>;
  totalPrice!: number | undefined;
  totalQuantity!: number | undefined;
  constructor(private store: Store<AppState>, private router: Router) {
    this.product$ = this.store.select(getCartItems);
    this.product$
      .pipe(
        map((products) => {
          return products?.map((product) => ({
            price: product.price * product.quantity,
            quantity: product.quantity,
          }));
        }),
        map((productInfo) => {
          const total = productInfo?.reduce(
            (totals, item) => {
              return {
                totalPrice: totals.totalPrice + item.price,
                totalQuantity: totals.totalQuantity + item.quantity,
              };
            },
            { totalPrice: 0, totalQuantity: 0 }
          );
          return total;
        })
      )
      .subscribe((totals) => {
        this.totalPrice = totals?.totalPrice;
        this.totalQuantity = totals?.totalQuantity;
      });
  }

  removeCart(product: featuredProducts) {
    this.store.dispatch(removeCart({ product }));
  }

  increment(product: featuredProducts) {
    let updatedQuantity = (product.quantity || 0) + 1;
    this.store.dispatch(
      quantityAction({ id: product.id, value: updatedQuantity })
    );
  }
  decrement(product: featuredProducts) {
    let updatedQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
    this.store.dispatch(
      quantityAction({ id: product.id, value: updatedQuantity })
    );
  }
  checkout() {
    this.router.navigate(['/checkout']);
  }
  ngOnInit() {}
}
