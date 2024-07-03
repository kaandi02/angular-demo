import { featuredProducts } from "../../Models/FeaturedProducts"

export const initialstate: CartState = {
    products: [],
    totalQuantity:0
   
};

export interface CartState{
    products: featuredProducts[];
    totalQuantity:number
   
}