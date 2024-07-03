import { createAction, props } from "@ngrx/store";
import { featuredProducts } from "../../../Models/FeaturedProducts";

export const loadProducts=createAction('loadProducts');
export const loadProductsSuccess=createAction('loadProductsSuccess',props<{products:featuredProducts[]}>());
export const loadProductsFailure = createAction('loadProductsFailure', props<{ error: any }>());
export const searchProducts=createAction('searchProducts',props<{search:string}>())