import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../../models/User';
import { AppState } from '../../app.state';
import { getUser, loginAction } from '../../store/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private router: Router, private store: Store<AppState>) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    console.log(this.loginForm.value);
    let loginUser: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    let signupUsers: User[] = [];
    let retrievedData = localStorage.getItem('signupState');

    if (retrievedData) {
      try {
        signupUsers = JSON.parse(retrievedData).user || [];
        console.log(signupUsers);
      } catch {
        localStorage.removeItem('signupState');
      }
    }

    const foundUser = signupUsers.find(
      (user) => user.email === loginUser.email
    );

    if (foundUser) {
      if (foundUser.password === loginUser.password) {
        const user = foundUser.email;
        this.store.dispatch(loginAction());
        this.store.dispatch(getUser({user}))
        this.router.navigate(['/']);
        alert('You have logged in successfully!');
      } else {
        alert('Incorrect password. Please try again.');
      }
    } else {
      alert('User not found. Sign up to continue.');
    }

    this.loginForm.reset();
  }
}
