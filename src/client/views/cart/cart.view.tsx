import CartDetails from "@/client/views/cart/cart-form"

const CartView = () => {
    return (
        <div aria-label="cart-view" className="flex-1 flex flex-col gap-4 overflow-auto ">
            <CartDetails />
        </div>
    )
}

export default CartView