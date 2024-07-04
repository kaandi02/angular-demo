import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { featuredProducts } from '../models/FeaturedProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private producturl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<featuredProducts[]> {
    return this.http.get<featuredProducts[]>(this.producturl); 
  }
}
