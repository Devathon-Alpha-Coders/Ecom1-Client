import HeroBanner from './herobanner';
import ProductSection from './productsection';
import PagesLayout from './pagesLayout';



export default function LandingPage() {

  const featuredProducts = [
    { name: "Wireless Earbuds", price: "59.99", image: "https://via.placeholder.com/300x200.png?text=Wireless+Earbuds" },
    { name: "Smart Watch", price: "129.99", image: "https://via.placeholder.com/300x200.png?text=Smart+Watch" },
    { name: "Laptop Stand", price: "29.99", image: "https://via.placeholder.com/300x200.png?text=Laptop+Stand" },
    { name: "Bluetooth Speaker", price: "79.99", image: "https://via.placeholder.com/300x200.png?text=Bluetooth+Speaker" },
    { name: "Fitness Tracker", price: "49.99", image: "https://via.placeholder.com/300x200.png?text=Fitness+Tracker" },
  ];

  const newArrivals = [
    { name: "Yoga Mat", price: "24.99", image: "https://via.placeholder.com/300x200.png?text=Yoga+Mat" },
    { name: "Coffee Maker", price: "89.99", image: "https://via.placeholder.com/300x200.png?text=Coffee+Maker" },
    { name: "Wireless Mouse", price: "19.99", image: "https://via.placeholder.com/300x200.png?text=Wireless+Mouse" },
    { name: "Air Purifier", price: "149.99", image: "https://via.placeholder.com/300x200.png?text=Air+Purifier" },
    { name: "Electric Toothbrush", price: "39.99", image: "https://via.placeholder.com/300x200.png?text=Electric+Toothbrush" },
  ];

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