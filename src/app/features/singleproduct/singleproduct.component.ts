import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Review } from '../../models/Review';
import { addProductReview } from '../../store/reviews/review.action';
import { getReviewsForProduct } from '../../store/reviews/review.selector';
import { getIsLoggedIn, getUser } from '../../store/login/login.selector';
import { AppState } from '../../app.state';
import { featuredProducts } from '../../models/FeaturedProducts';
import {
  getFilteredProducts,
  getProducts,
} from '../../store/featured-products/products.selector';
import { loadProducts } from '../../store/featured-products/products.action';
import { cartAction } from '../../store/cart/cart.actions';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],
})
export class SingleproductComponent {
  id!: number;
  product$!: Observable<featuredProducts | undefined>;
  products$!: Observable<featuredProducts[]>;
  value: number = 1;
  loggedIn!: boolean;
  newReview: string = '';
  reviewsFromLocalStorage: Review[] = [];
  user!: string;
  allReviews: Review[] = [];

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private route: Router,
    private snackBar: MatSnackBar,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.router.params.subscribe((data)=>this.id=parseInt(data['id']));
        if(isPlatformBrowser(this.platformId)){
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.getSingleProduct();
          this.getReviews(this.id.toString()).subscribe((reviews) => {
            this.allReviews = reviews;
          });
        }
      });
      this.store.dispatch(loadProducts());
      this.products$ = this.store.select(getFilteredProducts).pipe(map((products) => products ?? []));
  }

  getSingleProduct(){
    this.product$ = this.store.select(getProducts).pipe(
      map((products) => {
        if (products) {
          return products.find((product) => product.id === this.id);
        } else {
          return undefined;
        }
      })
    );
  }

  addToCart(product: featuredProducts, quantity: number) {
    this.store
      .select(getIsLoggedIn)
      .subscribe((data) => (this.loggedIn = data));
    console.log(this.loggedIn);
    if (this.loggedIn) {
      console.log(this.loggedIn);
      this.store.dispatch(cartAction({ product, quantity }));

      this.snackBar
        .open('Product added to cart', 'Close', {
          duration: 5000,
        })
        .afterDismissed()
        .subscribe(() => {
          this.route.navigate(['/cart']);
        });
    } else {
      this.snackBar
        .open('Login to continue', 'Close', {
          duration: 5000,
        })
        .afterDismissed()
        .subscribe(() => {
          this.route.navigate(['/']);
        });
    }
  }

  getReviews(productId: string): Observable<Review[]> {
    const ngrxReviews$ = this.store.pipe(
      select(getReviewsForProduct(productId))
    );
    const localStorageKey = `product_reviews_${productId}`;
    const localStorageReviews = JSON.parse(
      localStorage.getItem(localStorageKey) || '[]'
    );

    this.reviewsFromLocalStorage = localStorageReviews;

    return ngrxReviews$.pipe(
      map((ngrxReviews) => {
        const mergedReviews = [...ngrxReviews, ...localStorageReviews];
        return mergedReviews;
      })
    );
  }

  addReview(productId: string) {
    if (this.newReview.trim() === '') return;

    const review: Review = {
      comment: this.newReview,
      timestamp: Date.now(),
      user: this.user,
    };

    this.store.dispatch(addProductReview({ productId, review }));

    const localStorageKey = `product_reviews_${productId}`;
    const localStorageReviews = JSON.parse(
      localStorage.getItem(localStorageKey) || '[]'
    );
    const updatedReviews = [...localStorageReviews, review];
    localStorage.setItem(localStorageKey, JSON.stringify(updatedReviews));

    this.newReview = '';
  }

  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  ngOnInit() {
    this.router.params.subscribe((data) => (this.id = parseInt(data['id'])));
    this.store.select(getUser).subscribe((data) => (this.user = data));
  }
}
