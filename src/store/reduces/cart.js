import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({

    name: "cart",

    initialState: JSON.parse(localStorage.getItem('products')) && JSON.parse(localStorage.getItem('products')) || [],

    reducers: {

        setCart: (state, action) => {
            localStorage.setItem('products', JSON.stringify(action.payload));
            return state = action.payload;

        }
    }
});

export default cart.reducer;


export const { setCart } = cart.actions;