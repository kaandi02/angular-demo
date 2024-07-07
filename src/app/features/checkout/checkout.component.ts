import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import axios from 'axios';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { featuredProducts } from '../../models/FeaturedProducts';
import { getCartItems, getTotalQuantity } from '../../store/cart/cart.selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  loginForm!: FormGroup;
  cartItems$!: Observable<featuredProducts[]>;
  cartQuantity$!: Observable<number>;
  constructor(private route: Router, private store: Store<AppState>) {}
  ngOnInit() {
    this.cartQuantity$ = this.store.select(getTotalQuantity);
    this.cartItems$ = this.store.select(getCartItems);
    console.log(this.cartItems$);
    
  }
 
 
}
