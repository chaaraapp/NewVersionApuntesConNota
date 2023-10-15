import { useSelector } from "react-redux";
import { getTotalPrice } from "../../assetes/utils/utils";

const useGetInitailState = () => {

    const products = useSelector(store => store.cart);

    const initailState = {
        price: getTotalPrice(products)
    }

    return { initailState }

}

const priceReducer = (state, action) => {

    const products = JSON.parse(localStorage.getItem('products'));

    switch (action.type) {

        case "UPDATE_PRICE": // New action type to update the total price

            return {

                price: getTotalPrice(products)

            };

        default:

            return state;
    }
};

export {
    useGetInitailState,
    priceReducer
}