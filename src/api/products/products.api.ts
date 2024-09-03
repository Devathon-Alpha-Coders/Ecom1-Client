import { mock_products } from "@/api/products/products.mock"

class ProductsApi {
    static async getMultipleProducts() {
        try {
            throw new Error('Not implemented')

            // const products = await prisma.product.findMany()
            // return products
        } catch (error) {
            return mock_products;

            console.error(error)
            throw error
        }
    }
}

export default ProductsApi;