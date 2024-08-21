import { Button } from "@/components/ui/button";

const HeroBanner = () => (
    <div className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
      <img src="/api/placeholder/1200/400" alt="Hero Banner" className="w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Summer Sale Up To 50% Off</h2>
        <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Shop Now</Button>
      </div>
    </div>
  );


  export default HeroBanner