import { useEffect } from "react"
import CartActions from "@components/custom/cart/cart-actions"
import CartHeader from "@components/custom/cart/cart-header"
import CartItemList from "@components/custom/cart/cart-item-list"
import CartPriceDetail from "@components/custom/cart/cart-price-detail"
import useCartState from "@shared/store/cart/cart.store"

const CartView = () => {
    const {
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        clearCart,
        selectCartItem,
        unselectCartItem,
        selectAllCartItems,
        unselectAllCartItems,
        selectedCartItems,
        removeMultipleFromCart,
        cartSubtotalPrice,
    } = useCartState()


    useEffect(() => {
        if (selectedCartItems.length > 0) {
            unselectAllCartItems()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCartItems.length])


    return (
        <section
            aria-label="cart-view"
            className="p-4"
        >
            <div
                aria-label="cart-view-container"
                className="flex flex-col gap-4 overflow-auto max-w-3xl mx-auto p-8 max-xs:p-4 rounded-lg bg-white border border-slate-200 "
            >
                <CartHeader
                    itemsCount={cartItems.length}
                    clearCart={clearCart}
                    selectAllCartItems={selectAllCartItems}
                    unselectAllCartItems={unselectAllCartItems}
                    selectedCartItems={selectedCartItems}
                    removeMultipleFromCart={removeMultipleFromCart}
                />
                <CartItemList
                    cartItems={cartItems}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    removeAllFromCart={removeAllFromCart}
                    selectCartItem={selectCartItem}
                    unselectCartItem={unselectCartItem}
                    selectedCartItems={selectedCartItems}
                />
                <CartPriceDetail
                    cartSubtotalPrice={cartSubtotalPrice}
                />
                <CartActions />
            </div>
        </section>
    )
}

export default CartView