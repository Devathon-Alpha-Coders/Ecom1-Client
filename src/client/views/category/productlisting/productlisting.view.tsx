import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination } from '@/components/ui/pagination';
import { ShoppingCart, Heart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ITEMS_PER_PAGE = 9;

const dummyProducts: Product[] = [
  { id: 1, name: "Wireless Earbuds", price: 59.99, image: "https://via.placeholder.com/300x200.png?text=Wireless+Earbuds", category: "Audio" },
  { id: 2, name: "Smart Watch", price: 129.99, image: "https://via.placeholder.com/300x200.png?text=Smart+Watch", category: "Wearables" },
  { id: 3, name: "Laptop Stand", price: 29.99, image: "https://via.placeholder.com/300x200.png?text=Laptop+Stand", category: "Accessories" },
  { id: 4, name: "Bluetooth Speaker", price: 79.99, image: "https://via.placeholder.com/300x200.png?text=Bluetooth+Speaker", category: "Audio" },
  { id: 5, name: "Fitness Tracker", price: 49.99, image: "https://via.placeholder.com/300x200.png?text=Fitness+Tracker", category: "Wearables" },
  { id: 6, name: "Wireless Mouse", price: 19.99, image: "https://via.placeholder.com/300x200.png?text=Wireless+Mouse", category: "Accessories" },
  { id: 7, name: "4K Monitor", price: 299.99, image: "https://via.placeholder.com/300x200.png?text=4K+Monitor", category: "Displays" },
  { id: 8, name: "Mechanical Keyboard", price: 89.99, image: "https://via.placeholder.com/300x200.png?text=Mechanical+Keyboard", category: "Accessories" },
  { id: 9, name: "Noise-Cancelling Headphones", price: 199.99, image: "https://via.placeholder.com/300x200.png?text=Noise-Cancelling+Headphones", category: "Audio" },
  { id: 10, name: "Portable Charger", price: 39.99, image: "https://via.placeholder.com/300x200.png?text=Portable+Charger", category: "Accessories" },
  { id: 11, name: "Wireless Charging Pad", price: 24.99, image: "https://via.placeholder.com/300x200.png?text=Wireless+Charging+Pad", category: "Accessories" },
  { id: 12, name: "Gaming Mouse", price: 69.99, image: "https://via.placeholder.com/300x200.png?text=Gaming+Mouse", category: "Gaming" },
];

const ProductListingView: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();

  const category = searchParams.get('category') || 'All';
  const priceMin = Number(searchParams.get('price_min') || 0);
  const priceMax = Number(searchParams.get('price_max') || 1000);
  const sortBy = searchParams.get('sort') || 'popularity';
  const page = Number(searchParams.get('page') || 1);

  const updateParams = (updates: Record<string, string | number>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        newParams.set(key, value.toString());
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  const filteredAndSortedProducts = useMemo(() => {
    return dummyProducts
      .filter(product => 
        (category === 'All' || product.category === category) &&
        product.price >= priceMin && 
        product.price <= priceMax
      )
      .sort((a, b) => {
        if (sortBy === 'price-low-to-high') return a.price - b.price;
        if (sortBy === 'price-high-to-low') return b.price - a.price;
        return 0; // 'popularity' or default
      });
  }, [category, priceMin, priceMax, sortBy]);

  const paginatedProducts = filteredAndSortedProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  const handleCategoryChange = (value: string) => {
    updateParams({ category: value, page: 1 });
  };

  const handlePriceChange = (value: number[]) => {
    updateParams({ price_min: value[0], price_max: value[1], page: 1 });
  };

  const handleSortChange = (value: string) => {
    updateParams({ sort: value, page: 1 });
  };

  const handlePageChange = (value: number) => {
    updateParams({ page: value });
  };

  const handleAddToCart = (productId: number) => {
    toast({ title: "Added to Cart", description: `The item has been added to your cart.${productId}` });
  };

  const handleAddToWishlist = (productId: number) => {
    toast({ title: "Added to Wishlist", description: `The item has been added to your wishlist.${productId}` });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category} Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <Select value={category} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Categories</SelectItem>
                      <SelectItem value="Audio">Audio</SelectItem>
                      <SelectItem value="Wearables">Wearables</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                      <SelectItem value="Displays">Displays</SelectItem>
                      <SelectItem value="Gaming">Gaming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price Range</label>
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    value={[priceMin, priceMax]}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceMin}</span>
                    <span>${priceMax}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">{filteredAndSortedProducts.length} products</p>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <div className="flex justify-between">
                    <Button className="w-3/4" onClick={() => handleAddToCart(product.id)}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleAddToWishlist(product.id)}>
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Pagination 
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingView;