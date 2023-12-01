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

        if (elem1.codigo < elem2.codigo) {

            return -1;

        } else if (elem1.codigo > elem2.codigo) {

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
                const newItems = products?.filter(product => product.codigo !== item.codigo);

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
        const isAlreadyAtCart = products?.filter(product => product.codigo === item.codigo);

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

const renderPopupLocation = (setShowPopup) => {

    const provincias = ["Salamanca", "Sevilla", "Zaragoza"];
    // Función para obtener la ubicación del usuario
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getProvinceFromCoordinates, showError);
        } else {
            alert("La geolocalización no es soportada por este navegador.");
        }
    }


    // Función para manejar la respuesta de geolocalización exitosa
    function getProvinceFromCoordinates(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchProvinceFromNominatim(lat, lon);
    }
    // Función para manejar errores de geolocalización
    function showError(error) {
        const isShowBefore = sessionStorage.getItem('isPopupShowedBefore');
        switch (error.code) {
            case error.PERMISSION_DENIED:
                !isShowBefore && fireSwal('warning', 'Usuario denegó la petición de geolocalización.');
                break;
            case error.POSITION_UNAVAILABLE:
                !isShowBefore && fireSwal('warning', 'Información de ubicación no disponible.');
                break;
            case error.TIMEOUT:
                !isShowBefore && fireSwal('warning', 'La petición para obtener la ubicación del usuario ha expirado.');
                break;
            case error.UNKNOWN_ERROR:
                !isShowBefore && fireSwal('warning', 'Un error desconocido ocurrió.');
                break;
        }

        sessionStorage.setItem('isPopupShowedBefore', true);
    }
    // Función para obtener la provincia usando Nominatim de OpenStreetMap
    function fetchProvinceFromNominatim(lat, lon) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener datos de Nominatim');
                }
                return response.json();
            })
            .then(data => {

                const province = data.address.city; // Este campo puede variar dependiendo del país, es común que sea "state" para la provincia o estado.

                if (provincias.includes(province)) {

                    // Activamos el banner
                    const isShowBefore = sessionStorage.getItem('isPopupShowedBefore');

                    if (!isShowBefore) {

                        setTimeout(() => {

                            setShowPopup(true);

                        }, 2000);

                    }
                    sessionStorage.setItem('isPopupShowedBefore', true);

                }
                console.log(province)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    getLocation();

}
// Llamada a la función principal


export {
    logout,
    fireSwal,
    sort_by_id,
    getTotalPrice,
    handleRemoveProduct,
    addToCart,
    renderPopupLocation
}
