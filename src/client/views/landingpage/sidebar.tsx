import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, ChevronRight, ChevronDown } from 'lucide-react';

interface Category {
  name: string;
  subcategories?: string[];
}

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const categories: Category[] = [
  { name: 'Electronics', subcategories: ['Smartphones', 'Laptops', 'Accessories'] },
  { name: 'Fashion', subcategories: ['Men', 'Women', 'Kids'] },
  { name: 'Home & Garden', subcategories: ['Furniture', 'Decor', 'Kitchen'] },
  { name: 'Toys' },
  { name: 'Sports', subcategories: ['Equipment', 'Clothing', 'Footwear'] },
  { name: 'Books', subcategories: ['Fiction', 'Non-fiction', 'Education'] },
  { name: 'Beauty', subcategories: ['Skincare', 'Makeup', 'Haircare'] },
  { name: 'Automotive', subcategories: ['Parts', 'Accessories', 'Tools'] },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <aside 
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-30 lg:translate-x-0 lg:static lg:w-64 flex flex-col`}
      aria-label="Categories"
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
        <Button variant="ghost" size="sm" className="lg:hidden" onClick={toggleSidebar} aria-label="Close sidebar">
          <X className="h-6 w-6" />
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="p-4">
          {categories.map((category) => (
            <div key={category.name} className="mb-2">
              <button
                onClick={() => toggleCategory(category.name)}
                className={`flex items-center justify-between w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-100 rounded transition-colors duration-200 ${
                  activeCategory === category.name ? 'bg-gray-100 font-semibold' : ''
                }`}
                aria-expanded={activeCategory === category.name}
              >
                {category.name}
                {category.subcategories && (
                  activeCategory === category.name ? 
                    <ChevronDown className="h-4 w-4 ml-2" /> : 
                    <ChevronRight className="h-4 w-4 ml-2" />
                )}
              </button>
              {category.subcategories && activeCategory === category.name && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <a
                      key={subcategory}
                      href="#"
                      className="block py-1 px-4 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors duration-200"
                    >
                      {subcategory}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;