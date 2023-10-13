import Swal from "sweetalert2";
import { setCart } from "../../../../store/reduces/cart";
import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { initailState, priceReducer } from "../../Context";

const handleRemoveFromCart = (item, dispatchNewProducts) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            const products = JSON.parse(localStorage.getItem('products'));

            // Filter Product By ID 
            const newItems = products?.filter(product => product.id !== item.id);

            dispatchNewProducts(setCart(newItems));

            localStorage.setItem('products', JSON.stringify(newItems));

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            ).then(response => window.location.reload());
        }
    })

}

const useDataGetter = (item, setTotalPrice) => {

    const [state, dispatch] = useReducer(priceReducer, initailState);

    const dispatchNewProducts = useDispatch();

    const [selecteCount, setSelecteCount] = useState({ nombre: 1 });

    const [btnPrice, setBnPrice] = useState(true);

    const handleBNClick = () => {

        setBnPrice(true);

        if (!btnPrice) {

            dispatch({

                type: "BN_PRICE",

                payload: { newPrice: item?.precioBN, oldPrice: item?.precioCO }
            });
        }
    };

    const handlePrecioCOClick = () => {

        setBnPrice(false);


        if (btnPrice) {

            dispatch({

                type: "PRECIO_PRICE",
                payload: { newPrice: item?.precioCO, oldPrice: item?.precioBN }

            });
        }
    };

    useEffect(() => {

        setTotalPrice(state.price);

    }, [state.price]);

    return { handleBNClick, handlePrecioCOClick, selecteCount, setSelecteCount, dispatchNewProducts, btnPrice }

}

export {
    handleRemoveFromCart,
    useDataGetter
}