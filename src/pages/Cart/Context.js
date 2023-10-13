const total = JSON.parse(localStorage.getItem('products'))?.reduce((acc, curr) => acc + curr.precioBN, 0);

const initailState = {
    price: total
}

const priceReducer = (state, action) => {

    switch (action.type) {

        case "BN_PRICE":

            return {

                price: state.price - action.payload.oldPrice + action.payload.newPrice

            };

        case "PRECIO_PRICE":

            return {

                price: state.price - action.payload.oldPrice + action.payload.newPrice

            };

        case "quantity":

            return {

            }

        case "UPDATE_PRICE": // New action type to update the total price

            return {

                price: state.price

            };

        default:

            return state;
    }
};

export {
    initailState,
    priceReducer
}