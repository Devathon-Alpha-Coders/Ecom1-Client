import { IGetMultipleProductItem } from "src/api/products/products.dto"

export interface ICartItem extends IGetMultipleProductItem {
    quantity: number
}
