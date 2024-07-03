import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  loginForm!: FormGroup;
  constructor(private route:Router){}
  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      cardname: new FormControl('', [Validators.required]),
    cardNumber  : new FormControl('', [Validators.required,Validators.maxLength(16)]),
      expiration: new FormControl('', [Validators.required]),
      cvv:new FormControl('',[Validators.required,Validators.maxLength(3)])
    });
  }
  onSubmit() {
    alert('Payment Successful');
    this.route.navigate(['/'])  
  }

}
