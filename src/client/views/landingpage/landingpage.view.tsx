import { useGetMultipleProductsHook } from '@/application/hooks/products.hook';
import HeroBanner from '@/client/views/landingpage/herobanner';
import PagesLayout from '@/client/views/landingpage/pagesLayout';
import ProductSection from '@/client/views/landingpage/productsection';

export default function LandingPage() {

  const { data: products } = useGetMultipleProductsHook()

  const featuredProducts = products?.filter(product => product.is_featured)

  // TODO: new arrivals should be filtered by the date of creation  
  const newArrivals = products?.filter(product => !product.is_featured) // !TEMPORARY

  return (
    <PagesLayout>
      <main className="flex-grow p-4 lg:p-8">
        <HeroBanner />
        <ProductSection title="Featured Products" products={featuredProducts} />
        <ProductSection title="New Arrivals" products={newArrivals} />
      </main>
    </PagesLayout>
  );
}