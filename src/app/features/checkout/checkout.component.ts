import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
  constructor(private route: Router,private store:Store<AppState>) {}
  ngOnInit() {
    this.cartQuantity$=this.store.select(getTotalQuantity)
    this.cartItems$=this.store.select(getCartItems)
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      cardname: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        Validators.pattern(/^\d{16}$/),
      ]),
      expiration: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.pattern(/^\d{3}$/),
      ]),
    });
  }
  onSubmit() {
    alert('Payment Successful');
    this.route.navigate(['/']);
  }
}
