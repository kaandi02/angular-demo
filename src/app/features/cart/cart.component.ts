import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { featuredProducts } from '../../models/FeaturedProducts';
import { AppState } from '../../app.state';
import { quantityAction, removeCart } from '../../store/cart/cart.actions';
import { getCartItems } from '../../store/cart/cart.selector';
import axios from 'axios';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  product$!: Observable<featuredProducts[] | null>;
  products!: featuredProducts[] | null;
  totalPrice!: number | undefined;
  totalQuantity!: number | undefined;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store
      .select(getCartItems)
      .subscribe((products) => (this.products = products));
    console.log(this.products);
    this.product$ = this.store.select(getCartItems);
    console.log(this.product$);
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

  ngOnInit() {}
  async checkout() {
    const stripeid = this.products?.map((product) => {
      return {
        price: product.stripeid,
        quantity: product.quantity,
      };
    });
    const req = {
      line_items: stripeid,
      mode: 'payment',
      success_url: 'http://localhost:4200',
      cancel_url: 'http://localhost:4200',
    };
    await axios
      .post('http://localhost:4242/create-checkout-session/', req, {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => (window.location.href = response.data));
  }
}
