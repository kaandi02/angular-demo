import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { featuredProducts } from '../models/FeaturedProducts';
import { getIsLoggedIn } from '../store/login/login.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store<AppState>) { }
  isLoggedIn!: boolean;
    
    getAuthIsLoggedIn() {
      this.store.select(getIsLoggedIn).subscribe(data => this.isLoggedIn = data);
      return this.isLoggedIn
    }
}
