import { fireSwal } from '../../../../assetes/utils/utils';
import { setCart } from "../../../../store/reduces/cart";

const handelClick = (item, dispatch) => {

    const products = JSON.parse(localStorage.getItem('products'));

    if (products) {

        // Filter Product By ID 
        const isAlreadyAtCart = products?.filter(product => product.id === item.id);

        if (isAlreadyAtCart?.length) {

            fireSwal('warning', 'Enviado...', 'Items Already At Cart');


        } else {

            fireSwal('success', 'Enviado...', 'Added To Cart');

            // Add new Products 
            const newProducts = [...products, item];

            return dispatch(setCart(newProducts));

        }

    } else {

        dispatch(setCart([item]));

        fireSwal('success', 'Enviado...', 'Added To Cart');

        return;

    }

}

export {
    handelClick
}