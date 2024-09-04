import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { IGetMultipleProductItem } from "src/api/products/products.dto";
import { Badge } from "src/components/ui";
import useCartState from "src/shared/store/cart/cart.store";
import { cn } from "src/shared/utils";


interface ProductSectionProps {
  title: string,
  products: IGetMultipleProductItem[],
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => (
  <section className="my-12">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
    <ScrollArea className="w-full">
      <div className="flex space-x-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </section>
);

export default ProductSection;





const ProductCard: React.FC<IGetMultipleProductItem> = (product) => {

  const { _id, name, price, image } = product

  const { addToCart, getCartItemQuantity, removeFromCart } = useCartState()

  const cartItemQuantity = getCartItemQuantity(_id)

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(_id)
  }


  return (
    <Card className="w-full sm:w-64 transform transition duration-300 hover:scale-105 relative">
      <CardContent className="p-4">

        {
          cartItemQuantity > 0 && <div className={cn(
            "absolute top-6 right-6 ",
            "flex items-center justify-center gap-1 group"
          )}>
            <Button
              variant="secondary"
              size="iconSmall"
              className="hidden group-hover:block"
              onClick={handleRemoveFromCart}
            >
              -
            </Button>

            <Button
              variant="secondary"
              size="iconSmall"
              className="hidden group-hover:block"
              onClick={handleAddToCart}
            >
              +
            </Button>
            <Badge
              variant="secondary"
              className="h-full aspect-square"
            >{cartItemQuantity}</Badge>

          </div>
        }


        <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">${price}</p>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white"
        >Add to Cart</Button>
      </CardContent>
    </Card>
  )
};
