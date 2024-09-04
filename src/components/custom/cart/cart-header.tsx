import { Button } from "src/components/ui/button"
import { Checkbox } from "src/components/ui/checkbox"
import { ICartItem } from "src/shared/store/cart/cart.model"
import { cn } from "src/shared/utils"

interface ICartHeaderProps {
    itemsCount: number
    clearCart: () => void
    selectAllCartItems: () => void
    unselectAllCartItems: () => void
    selectedCartItems: ICartItem[]
    removeMultipleFromCart: (cartItemIds: string[]) => void
    className?: string
}

const CartHeader = (props: ICartHeaderProps) => {
    const {
        itemsCount,
        clearCart,
        selectAllCartItems,
        unselectAllCartItems,
        selectedCartItems,
        removeMultipleFromCart,
        className
    } = props

    const handleClearCart = () => {
        clearCart()
    }

    const handleSelectAllCartItems = () => {
        if (selectedCartItems.length === itemsCount) {
            unselectAllCartItems()
        } else {
            selectAllCartItems()
        }
    }

    const handleRemoveMultipleFromCart = () => {
        removeMultipleFromCart(selectedCartItems.map(item => item._id))
    }

    return <div className={cn("flex items-center justify-between mb-4", className)}>

        <div className="flex items-center space-x-2">
            <Checkbox
                id="cart-item-selection"
                checked={selectedCartItems.length === itemsCount}
                // indeterminate={selectedCartItems.length > 0 && selectedCartItems.length < itemsCount}

                onCheckedChange={handleSelectAllCartItems}
            />
            <label
                htmlFor="cart-item-selection"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {selectedCartItems.length} / {itemsCount} items selected
            </label>
        </div>



        <div
            aria-label="cart-actions"
            className="flex items-center space-x-2"
        >
            {selectedCartItems.length > 0 && <Button
                size="sm"
                variant="outline"
                onClick={handleRemoveMultipleFromCart}
            >
                Remove
            </Button>}
            <Button
                size="sm"
                variant="destructive"
                onClick={handleClearCart}
            >
                Clear Cart
            </Button>
        </div>
    </div >

}

export default CartHeader;