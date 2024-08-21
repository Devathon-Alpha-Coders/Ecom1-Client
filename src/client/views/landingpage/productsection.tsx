import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';


interface ProductSectionProps {
    title:string,
    products:any[],
}

const ProductSection:React.FC<ProductSectionProps> = ({ title, products }) => (
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




interface ProductCardProps {
    name: string,
    price:string | number,
    image:string
}

const ProductCard:React.FC<ProductCardProps> = ({ name, price, image }) => (
    <Card className="w-full sm:w-64 transform transition duration-300 hover:scale-105">
      <CardContent className="p-4">
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">${price}</p>
        <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">Add to Cart</Button>
      </CardContent>
    </Card>
  );
