import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';

import { signupReducer } from './signup/state/signup.reducer';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './login/state/login.reducer';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeaturedproductsComponent } from './home/featuredproducts/featuredproducts.component';
import { productsReducer } from './home/featuredproducts/state/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './home/featuredproducts/state/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './home/footer/footer.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CartComponent } from './cart/cart.component';
import { cartReducer } from './cart/state/cart.reducer';
import { FavouriteComponent } from './favourite/favourite.component';
import { favouriteReducer } from './favourite/state/favourite.reducer';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
   
    HomeComponent,
    FavouriteComponent,
    
    NavbarComponent,
    HeroComponent,
    FeaturedproductsComponent,
    FooterComponent,
    SingleproductComponent,
    CartComponent,
    
   
    CheckoutComponent,
               AboutComponent,
  
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forRoot({
      signup: signupReducer,
      login: loginReducer,
      products: productsReducer,
      cart: cartReducer,
      favourite: favouriteReducer,
    }),
    EffectsModule.forRoot([ProductEffects]),
    FormsModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
