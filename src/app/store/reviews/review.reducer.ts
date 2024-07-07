import { createReducer, on } from "@ngrx/store";
import { addProductReview } from "./review.action";
import { initialState } from "./review.state";

const _reviewReducer = createReducer(
  initialState,
  on(addProductReview, (state, { productId, review }) => ({
    ...state,
    reviews: {
      ...state.reviews,
      [productId]: [...(state.reviews[productId] || []), review],
    },
  }))
);

export function reviewReducer(state:any, action:any) {
  return _reviewReducer(state, action);
}
