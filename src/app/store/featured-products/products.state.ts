import { featuredProducts } from '../../models/FeaturedProducts';

export const initialstate: productsState = {
  products: null,
  error: null,
  filteredProducts: null,
};
export interface productsState {
  products: featuredProducts[] | null;
  error: string | null;

  filteredProducts: featuredProducts[] | null;
}
