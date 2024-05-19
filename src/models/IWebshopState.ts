import { IProduct } from "./IProduct";

export interface IWebshopState {
    products: IProduct[];
    cart: ICartItem[];
}