import { configureStore } from "@reduxjs/toolkit";
import cart from "./reduces/cart";


export const store = configureStore({
    reducer: {
        cart: cart
    }
});