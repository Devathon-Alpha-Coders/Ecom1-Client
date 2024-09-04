
interface CartPriceDetailProps {
    cartSubtotalPrice: number
}

const CartPriceDetail = ({ cartSubtotalPrice }: CartPriceDetailProps) => {

    const SHIPPING_COST = 8
    const TOTAL_PRICE = cartSubtotalPrice + SHIPPING_COST

    return <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Subtotal</p>
            <p className="text-lg font-semibold text-gray-900">${cartSubtotalPrice.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Shipping</p>
            <p className="text-lg font-semibold text-gray-900">${SHIPPING_COST.toFixed(2)}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> ${TOTAL_PRICE.toFixed(2)}</p>
        </div>
    </div>
}

export default CartPriceDetail
