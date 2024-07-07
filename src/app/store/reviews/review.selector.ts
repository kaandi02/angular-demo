import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ReviewState } from './review.state';



export const selectReviewState = createFeatureSelector<ReviewState>('review');

export const getReviewsForProduct = (productId: string) =>
  createSelector(
    selectReviewState,
    (state: ReviewState) => state.reviews[productId] || []
  );
