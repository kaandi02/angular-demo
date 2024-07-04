import { createAction, props } from '@ngrx/store';
import { featuredProducts } from '../../models/FeaturedProducts';

export const favouriteAction = createAction(
  'favouriteAction',
  props<{ product: featuredProducts }>()
);
export const removefavourite = createAction(
  'removefavourite',
  props<{ product: featuredProducts }>()
);
