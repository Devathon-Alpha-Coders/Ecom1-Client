import { TrashIcon } from "lucide-react";
import { IGetMultipleProductItem } from "src/api/products/products.dto";
import { Button } from "src/components/ui/button";
import { Checkbox } from "src/components/ui/checkbox";
import { ICartItem } from "src/shared/store/cart/cart.model";

interface CartItemProps {
  item: ICartItem
  addToCart: (product: IGetMultipleProductItem) => void
  removeFromCart: (productId: IGetMultipleProductItem['_id']) => void
  removeAllFromCart: (productId: IGetMultipleProductItem['_id']) => void
  selectCartItem: (productId: IGetMultipleProductItem['_id']) => void
  unselectCartItem: (productId: IGetMultipleProductItem['_id']) => void
  isSelected: boolean
}


const CartItem = (props: CartItemProps) => {
  const {
    item,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    selectCartItem,
    unselectCartItem,
    isSelected
  } = props
  const { _id, name, product_id, price, quantity, image } = item

  const handleAddToCart = () => {
    addToCart(item)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(_id)
  }

  const handleRemoveAllFromCart = () => {
    removeAllFromCart(_id)
  }

  const handleToggleSelectCartItem = () => {
    if (isSelected) {
      unselectCartItem(_id)
    } else {
      selectCartItem(_id)
    }
  }


  return (
    <li
      aria-label="cart-item"
      className="flex max-xs:flex-col gap-4 p-4 max-xs:p-2 rounded-lg border border-slate-200 "
    >
      {/* Image Block */}
      <div className="h-32 relative">
        <Checkbox
          className="absolute top-4 left-4"
          checked={isSelected}
          onCheckedChange={handleToggleSelectCartItem}
        />
        {/* //TODO: Import image paths */}
        <img
          className="max-sm:w-full rounded-lg object-cover"
          src={image}
          alt=""
        />
      </div>

      {/* Description Block */}
      <div className="flex flex-col gap-2 flex-1 relative">
        <Button
          size={'iconSmall'}
          variant={'outline'}
          className="absolute top-0 right-0 flex "
          onClick={handleRemoveAllFromCart}
        >
          <TrashIcon size={14} className="self-center" />
        </Button>


        {/* - Title & ID */}
        <div className="pr-8 sm:pr-5">
          <p className="mx-0 mt-1 mb-0 text-xs text-gray-400">ID: {product_id}</p>
          <p className="text-base font-semibold text-gray-900">{name}</p>
        </div>

        {/* - Price */}
        <div className="flex flex-col ">
          <p className="">${price}</p>
        </div>

        {/* - Quantity */}
        <div className="flex h-7 items-center text-gray-600">
          <Button
            size={'iconSmall'}
            variant={'outline'}
            className="rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
            onClick={handleRemoveFromCart}
          >
            -
          </Button>
          <div className="flex  px-4 uppercase transition">
            {quantity.toString().padStart(2, '0')}
          </div>
          <Button
            size={'iconSmall'}
            variant={'outline'}
            className="rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
            onClick={handleAddToCart}
          >
            +
          </Button>

        </div>
      </div>
      {/* - Actions */}
      {/* <div>
       
      </div> */}
    </li>
  )
};

interface ICartItemListProps {
  cartItems: ICartItem[]
  addToCart: (product: IGetMultipleProductItem) => void
  removeFromCart: (productId: IGetMultipleProductItem['_id']) => void
  removeAllFromCart: (productId: IGetMultipleProductItem['_id']) => void
  selectCartItem: (productId: IGetMultipleProductItem['_id']) => void
  unselectCartItem: (productId: IGetMultipleProductItem['_id']) => void
  selectedCartItems: ICartItem[]
}

const CartItemList = (props: ICartItemListProps) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    selectCartItem,
    unselectCartItem,
    selectedCartItems,
  } = props

  return (
    <ul className="flex flex-col gap-4">
      {cartItems.map((item) => {
        const isSelected = selectedCartItems.some(selectedItem => selectedItem._id === item._id)
        return (
          <CartItem
            key={item._id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            removeAllFromCart={removeAllFromCart}
            selectCartItem={selectCartItem}
            unselectCartItem={unselectCartItem}
            isSelected={isSelected}
          />
        )
      })}
    </ul>

  )
}

export default CartItemList