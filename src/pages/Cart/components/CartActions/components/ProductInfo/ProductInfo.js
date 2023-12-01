
const renderProducts = (products) => {
    return (
        products?.map((product, index) => {

            return <div key={index} className='flex items-center justify-between'>

                <p className='font-medium text-[11px] sm:text-[16px]'>{product?.size || 1} X {product?.asignatura}</p>

                <p className='font-medium text-[11px] sm:text-[16px] min-w-[30px] text-center'>
                    {product?.bnButton !== false ? product?.newPrecioBN?.toFixed(2) || product?.precioBN?.toFixed(2) : product?.newPrecioCO?.toFixed(2) || product?.precioCO?.toFixed(2)} €
                </p>

            </div>
        })
    )
}
export default function ProductInfo({ products }) {
    return renderProducts(products)
}
