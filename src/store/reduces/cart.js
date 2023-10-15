import { createSlice } from "@reduxjs/toolkit";
import { sort_by_id } from "../../assetes/utils/utils";

const cart = createSlice({

    name: "cart",

    initialState: JSON.parse(localStorage.getItem('products')) && JSON.parse(localStorage.getItem('products')) || [],

    reducers: {

        setCart: (state, action) => {

            const products = action.payload.sort(sort_by_id());

            localStorage.setItem('products', JSON.stringify(products));

            return state = action.payload;

        },

        updateCart: (state, action) => {

            const uniqeItems = state.filter(item => item.id !== action.payload.id);

            const updatedItem = [...uniqeItems, action.payload].sort(sort_by_id());

            // Update Localstorage
            localStorage.setItem('products', JSON.stringify(updatedItem));
            
            return state = updatedItem;

        }
    }
});

export default cart.reducer;


export const { setCart, updateCart } = cart.actions;