import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { ProductsService } from '../../../Services/products.service';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from './products.action';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );
}
