import { atom, useAtom } from 'jotai';
import { IGetMultipleProductItem } from 'src/api/products/products.dto';
import { mockCartItems } from 'src/shared/store/cart/cart.mock';
import { ICartItem } from 'src/shared/store/cart/cart.model';

interface ICartAtom {
    items: ICartItem[]
}

const cartAtom = atom<ICartAtom>({
    items: mockCartItems || []
})

const useCartState = () => {
    const [cart, setCart] = useAtom(cartAtom)

    const addToCart = (product: IGetMultipleProductItem) => {
        const existingItem = cart.items.find(item => item.id === product.id)
        if (existingItem) {
            setCart({
                ...cart,
                items: cart.items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            })
        } else {
            setCart({
                ...cart,
                items: [...cart.items, { ...product, quantity: 1 }]
            })
        }
    }

    const removeFromCart = (productId: IGetMultipleProductItem['id']) => {
        const existingItemIndex = cart.items.findIndex(item => item.id === productId)
        if (existingItemIndex !== -1) {
            setCart({
                ...cart,
                items: cart.items
                    .map(
                        (item, index) => index === existingItemIndex
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0)
            })
        }
    }

    const removeAllFromCart = (productId: IGetMultipleProductItem['id']) => {
        setCart({
            ...cart,
            items: cart.items.filter(item => item.id !== productId)
        })
    }

    const clearCart = () => {
        setCart({
            ...cart,
            items: []
        })
    }

    return {
        cartItems: cart.items,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        clearCart
    }
}

export default useCartState;