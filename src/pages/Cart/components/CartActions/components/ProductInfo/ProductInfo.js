
const renderProducts = (products) => {
    return (
        products?.map((product, index) => {

            return <div key={index} className='flex items-center justify-between'>

                <p className='font-medium'>{product?.size || 1} X {product?.asignatura}</p>

                <p className='font-medium'>
                    {product?.bnButton !== false ? product?.newPrecioBN || product?.precioBN : product?.newPrecioCO || product?.precioCO} €
                </p>

            </div>
        })
    )
}
export default function ProductInfo({ products }) {
    return renderProducts(products)
}
