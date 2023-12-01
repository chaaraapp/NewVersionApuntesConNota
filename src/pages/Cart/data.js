import { Product } from "./components"

const renderProducts = (products, setTotalPrice) => {
    return products?.map((item, index) => {
        return <Product setTotalPrice={setTotalPrice} key={index} defaultItem={item} />
    })
}

export {
    renderProducts
}