import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProducts } from '../home/featuredproducts/state/products.selector';
import { productsState } from '../home/featuredproducts/state/products.state';
import { featuredProducts } from '../Models/FeaturedProducts';
import { filter, map, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { loadProducts } from '../home/featuredproducts/state/products.action';
import { CartState } from '../cart/state/cart.state';
import { cartAction } from '../cart/state/cart.actions';
import { getCartItems } from '../cart/state/cart.selector';
import { LoginState } from '../login/state/login.state';
import { getIsLoggedIn } from '../login/state/login.selector';
import { loginAction } from '../login/state/login.actions';
import { AppState } from '../store/app.state';



@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css',
})
export class SingleproductComponent {
  id!: number;
  product$!: Observable<featuredProducts | undefined>;
  value: number = 1;
  loggedIn!: boolean;
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private route: Router,
    
  ) {
    this.product$ = this.store.select(getProducts).pipe(
      map((products) => {
        if (!products) {
          return undefined;
        } else {
          return products.find((product) => product.id === this.id);
        }
      })
    );
  }
  
  addToCart(product: featuredProducts, quantity: number) {
     this.store.select(getIsLoggedIn).subscribe(data=>this.loggedIn=data);
    console.log(this.loggedIn )
    if (this.loggedIn) {
        console.log(this.loggedIn);
      this.store.dispatch(cartAction({ product, quantity }));
      alert('Product added to cart successfully');
      this.route.navigate(['/cart']);
      
    }
    else {
      alert('Login to continue');
      this.route.navigate(['/login']);
 
    }
     
   
  
  }
  
  ngOnInit() {
    this.router.params.subscribe((data) => (this.id = data['id']));

    this.store.dispatch(loadProducts());
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({top:0,behavior:'smooth'});
      });
  }
 
}


