import { mock_products } from "@/api/products/products.mock"
import { getMultipleProductsDtoSchema } from "src/api/products/products.dto";

class ProductsApi {
    static async getMultipleProducts() {
        try {
            throw new Error('Not implemented')
            // const products = await prisma.product.findMany()
            // return products
        } catch (error) {

            return getMultipleProductsDtoSchema.shape.response.parse(mock_products)

            console.error(error)
            throw error
        }
    }
}

export default ProductsApi;