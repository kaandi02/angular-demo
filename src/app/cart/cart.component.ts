import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { map, Observable, of, Subscription } from 'rxjs';

import { featuredProducts } from '../Models/FeaturedProducts';
import { AppState } from '../store/app.state';
import { cartAction, quantityAction, removeCart, totalQuantity } from './state/cart.actions';
import { getCartItems } from './state/cart.selector';
import { CartState } from './state/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  product$!: Observable<featuredProducts[] | null>;
  totalPrice!: number | undefined;
  totalQuantity!: number | undefined;

  // localProducts!: featuredProducts[];

  constructor(private store: Store<AppState>,private router:Router) {
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
        // Perform further actions with the total price and total quantity
      });
    

    // this.product$
    //   .pipe(
    //     map((products) => {
    //       return products?.map((product) => product.price * product.quantity);
    //     }),
    //     map((prices) => prices?.reduce((total, price) => total + price, 0))
    //   )
    //   .subscribe((totalPrice) => {
    //     this.totalPrice = totalPrice;
    //     // Perform further actions with the total price
    //   });

    // const localProductsString = localStorage.getItem('cartProducts');
    // if (localProductsString) {
    //   this.localProducts = JSON.parse(localProductsString);
    // }
    //  const localProductsQuantity = localStorage.getItem('cartQuantity');
    //  if (localProductsQuantity) {
    //    this.quantity = JSON.parse(localProductsQuantity);
    //  }
  }

  removeCart(product: featuredProducts) {
    //   this.localProducts = this.localProducts.filter((p) => p.id !== product.id);
    //   localStorage.setItem('cartProducts', JSON.stringify(this.localProducts));
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
    this.router.navigate(['/checkout'])
  
    
  }
  ngOnInit() {}
}
