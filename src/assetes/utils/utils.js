import Swal from "sweetalert2";
import { setCart } from "../../store/reduces/cart";

const logout = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('email');

    return window.location.href = "/login";
}

const fireSwal = (icon, title, text, moreOptions) => {
    return Swal.fire({
        icon,
        title,
        text,
        ...moreOptions
    });
}

function sort_by_id() {

    return function (elem1, elem2) {

        if (elem1.id < elem2.id) {

            return -1;

        } else if (elem1.id > elem2.id) {

            return 1;

        } else {

            return 0;

        }

    };
}

const handleRemoveProduct = (item, dispatchNewProducts) => {

    fireSwal(
        'warning',
        'Are you sure?',
        "You won't be able to revert this!",
        {
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {

                const products = JSON.parse(localStorage.getItem('products'));

                // Filter Product By ID 
                const newItems = products?.filter(product => product.id !== item.id);

                dispatchNewProducts(setCart(newItems));

                localStorage.setItem('products', JSON.stringify(newItems));

                fireSwal('success', 'Deleted!', 'Your file has been deleted.').then(response => window.location.reload());
            }
        })

}

const getTotalPrice = (products) => {

    return products?.reduce((acc, curr) => {


        if (curr?.bnButton === false) {

            return acc + (curr.newPrecioCO || curr.precioCO);

        } else {

            return acc + (curr.newPrecioBN || curr.precioBN);

        }

    }, 0);

}

const addToCart = (item, dispatch) => {

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
    logout,
    fireSwal,
    sort_by_id,
    getTotalPrice,
    handleRemoveProduct,
    addToCart
}
