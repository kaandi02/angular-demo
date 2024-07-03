import { createAction, props } from "@ngrx/store";
import { featuredProducts } from "../../Models/FeaturedProducts";

export const cartAction = createAction('cartAction', props<{ product: featuredProducts,quantity:number }>());
export const removeCart = createAction('removeCart', props<{ product: featuredProducts }>());
export const quantityAction = createAction('quantityAction', props<{ id: number, value: number }>());
export const totalQuantity=createAction('totalQuantity',props<{totalQuantity:number}>())