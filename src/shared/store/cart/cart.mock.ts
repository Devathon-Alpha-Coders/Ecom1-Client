import { mock_products } from "src/api/products/products.mock";
import { ICartItem } from "src/shared/store/cart/cart.model";

export const mockCartItems: ICartItem[] = mock_products.map((product) => ({
    ...product,
    _id: product._id,
    quantity: 1,
})).filter(() => {
    const randomIsTrue = Math.random() > 0.7
    return randomIsTrue
})