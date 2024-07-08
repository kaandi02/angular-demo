import { createAction, props } from '@ngrx/store';
import { featuredProducts } from '../../models/FeaturedProducts';

export const loadProducts = createAction('loadProducts');
export const loadProductsSuccess = createAction(
  'loadProductsSuccess',
  props<{ products: featuredProducts[] }>()
);
export const loadProductsFailure = createAction(
  'loadProductsFailure',
  props<{ error: any }>()
);
export const searchProducts = createAction(
  'searchProducts',
  props<{ search: string }>()
);
export const filterProductsByPrice = createAction(
  'filterProductsByPrice',
  props<{ filterOption: string }>()
);
