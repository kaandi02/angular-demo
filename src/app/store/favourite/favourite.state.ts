import { featuredProducts } from '../../models/FeaturedProducts';

export const initialstate: favouriteState = {
  products: [],
};
export interface favouriteState {
  products: featuredProducts[];
}
