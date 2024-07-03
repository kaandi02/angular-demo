import { featuredProducts } from "../../Models/FeaturedProducts";

export const initialstate:favouriteState = {
    products: []
   
}
export interface favouriteState{
    products: featuredProducts[];
}