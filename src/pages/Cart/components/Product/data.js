import { updateCart } from "../../../../store/reduces/cart";
import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetInitailState, priceReducer } from "../../Context";

const useDataGetter = (item, setTotalPrice) => {

    const { initailState } = useGetInitailState();

    const [productCount] = useState([{ nombre: "1" }, { nombre: "2" }, { nombre: "3" }]);

    const [cartState, setCartState] = useReducer(priceReducer, initailState);

    const dispatchNewProducts = useDispatch();

    const [selecteCount, setSelecteCount] = useState({ nombre: item?.size || 1, initail: true });

    const handlePriceClick = (item, state) => {

        const newItem = { ...item, bnButton: state };

        dispatchNewProducts(updateCart(newItem));

        setCartState({ type: "UPDATE_PRICE" });
    };


    useEffect(() => {

        setTotalPrice(cartState.price);

    }, [cartState.price]);

    return { handlePriceClick, selecteCount, setSelecteCount, dispatchNewProducts, setCartState, productCount }

}

const useUpdatedProduct = (selecteCount, item, setItem, setCartState) => {

    const dispatch = useDispatch();

    useEffect(() => {

        const updatedItem = item => {

            const newItem = { ...item, size: selecteCount.nombre };

            // update each Price At Item
            newItem.newPrecioBN = Number(newItem.precioBN) * Number(newItem.size);
            newItem.newPrecioCO = Number(newItem.precioCO) * Number(newItem.size);

            // Update State
            setItem(newItem);

            return newItem
        }

        if (!selecteCount?.initail) {

            dispatch(updateCart(updatedItem(item)));

        }

    }, [selecteCount]);

    useEffect(() => {

        setCartState({ type: "UPDATE_PRICE", });

    }, [item?.size]);

    return {};

}

export {
    useDataGetter,
    useUpdatedProduct
}