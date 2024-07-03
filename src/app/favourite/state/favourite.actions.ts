import { createAction, props } from "@ngrx/store";
import { featuredProducts } from "../../Models/FeaturedProducts";

export const favouriteAction = createAction('favouriteAction', props<{ product: featuredProducts }>());
export const removefavourite=createAction('removefavourite',props<{product:featuredProducts}>())