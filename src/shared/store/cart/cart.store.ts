import { atom, useAtom } from 'jotai';
import { IGetMultipleProductItem } from 'src/api/products/products.dto';
import { mockCartItems } from 'src/shared/store/cart/cart.mock';
import { ICartItem } from 'src/shared/store/cart/cart.model';

interface ICartAtom {
    items: ICartItem[]
    selectedItems: ICartItem[]
}

const cartAtom = atom<ICartAtom>({
    items: mockCartItems || [],
    selectedItems: [],
})

const useCartState = () => {
    const [cart, setCart] = useAtom(cartAtom)

    const cartSubtotalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const getCartItemQuantity = (cartItemId: IGetMultipleProductItem['_id']) => {
        const item = cart.items.find(item => item._id === cartItemId)
        return item?.quantity || 0
    }

    const addToCart = (product: IGetMultipleProductItem) => {
        const existingItem = cart.items.find(item => item._id === product._id)
        if (existingItem) {
            setCart((cart) => ({
                ...cart,
                items: cart.items.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)
            }))
        } else {
            setCart((cart) => ({
                ...cart,
                items: [...cart.items, { ...product, quantity: 1 }]
            }))
        }
    }

    const removeFromCart = (cartItemId: IGetMultipleProductItem['_id']) => {
        const existingItemIndex = cart.items.findIndex(item => item._id === cartItemId)
        if (existingItemIndex !== -1) {
            setCart((cart) => ({

                ...cart,
                // remove selected items from cart
                items: cart.items
                    .map(
                        (item, index) => index === existingItemIndex
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0),
                // reset selected items
                selectedItems: []
            }))
        }

    }

    const removeMultipleFromCart = (cartItemIds: IGetMultipleProductItem['_id'][]) => {
        setCart((cart) => ({
            ...cart,
            items: cart.items.filter(item => !cartItemIds.includes(item._id)),
            selectedItems: []
        }))
    }

    const removeAllFromCart = (cartItemId: IGetMultipleProductItem['_id']) => {
        setCart((cart) => ({
            ...cart,
            items: cart.items.filter(item => item._id !== cartItemId),
            selectedItems: []
        }))
    }

    const clearCart = () => {
        setCart((cart) => ({
            ...cart,
            items: []
        }))
    }

    const selectCartItem = (cartItemId: IGetMultipleProductItem['_id']) => {
        setCart((cart) => {
            const selectedItem = cart.items.find(item => item._id === cartItemId)
            if (!selectedItem) return cart
            return ({
                ...cart,
                selectedItems: [
                    ...cart.selectedItems,
                    selectedItem
                ]
            })
        })
    }

    const unselectCartItem = (cartItemId: IGetMultipleProductItem['_id']) => {
        setCart((cart) => ({
            ...cart,
            selectedItems: cart.selectedItems.filter(item => item._id !== cartItemId)
        }))
    }

    const selectAllCartItems = () => {
        setCart((cart) => ({
            ...cart,
            selectedItems: cart.items
        }))
    }

    const unselectAllCartItems = () => {
        setCart((cart) => ({
            ...cart,
            selectedItems: []
        }))
    }

    return {
        cartItems: cart.items,
        selectedCartItems: cart.selectedItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        clearCart,
        selectCartItem,
        unselectCartItem,
        selectAllCartItems,
        unselectAllCartItems,
        removeMultipleFromCart,
        cartSubtotalPrice,
        getCartItemQuantity,
    }
}

export default useCartState;