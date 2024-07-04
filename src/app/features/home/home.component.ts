import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { loadProducts } from '../../store/featured-products/products.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: ActivatedRoute,private store:Store<AppState>) {}
  ngOnInit() {
       this.store.dispatch(loadProducts());
    this.router.fragment.subscribe((shop) => this.JumpToSection(shop));
  }
  JumpToSection(shop: string | null) {
    if (shop) {
      document.getElementById(shop)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
