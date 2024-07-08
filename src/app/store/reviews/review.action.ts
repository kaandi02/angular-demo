import { createAction, props } from '@ngrx/store';
import { Review } from '../../models/Review';

export const addProductReview = createAction(
  '[Product Detail] Add Review',
  props<{ productId: string; review: Review }>()
);
