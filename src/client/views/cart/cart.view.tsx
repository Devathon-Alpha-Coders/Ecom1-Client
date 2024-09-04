import CartDetails from "@/client/views/cart/cart-form"
import useCartState from "src/shared/store/cart/cart.store"

const CartView = () => {
    const { cartItems, addToCart, removeFromCart, removeAllFromCart, clearCart } = useCartState()

    return (
        <div aria-label="cart-view" className="flex-1 flex flex-col gap-4 overflow-auto ">
            <CartDetails
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                removeAllFromCart={removeAllFromCart}
                clearCart={clearCart}
            />
        </div>
    )
}

export default CartView