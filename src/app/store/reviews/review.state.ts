import { Review } from '../../models/Review';

export interface ReviewState {
  reviews: { [productId: string]: Review[] };
}

export const initialState: ReviewState = {
  reviews: {},
};
