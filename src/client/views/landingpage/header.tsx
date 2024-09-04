import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { APP_URLS } from '@/routes/app-urls';
import useAuthStore from '@/shared/store/auth.store';
import { Heart, LogIn, LogOut, Menu, Search, ShoppingCart } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartState from 'src/shared/store/cart/cart.store';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [auth, setAuth] = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const { cartItems } = useCartState();
  const cartItemCount = cartItems.length;

  const redirectToLogin = useCallback(() => navigate(APP_URLS.AUTH.LOGIN), [navigate]);

  const handleLogout = useCallback(() => {
    setAuth((prev) => ({
      ...prev,
      isAuth: false,
    }));
    // Add any additional logout logic here (e.g., clearing local storage, redirecting)
  }, [setAuth]);


  const goToCartHandler = () => {
    navigate(APP_URLS.APP.CART)
  }

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  }, [searchQuery]);

  return (
    <header className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4 sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">ShopEase</h1>
        </div>

        <form onSubmit={handleSearch} className="flex-grow order-3 lg:order-2 w-full lg:w-auto">
          <div className="flex">
            <Input
              placeholder="Search products..."
              className="w-full rounded-l-md border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="secondary" className="rounded-l-none">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="flex items-center justify-end space-x-4 order-2 lg:order-3">
          {auth && auth.isAuth ? (
            <>
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart" onClick={goToCartHandler}>
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <Badge className="absolute -top-2 -right-2 px-1 min-w-[1.25rem] h-5">
                    {cartItemCount}
                  </Badge>
                </div>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => {/*navigate(APP_URLS.USER.PROFILE) */ }}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => {/*navigate(APP_URLS.USER.ORDERS) */ }}>
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button variant="secondary" onClick={redirectToLogin}>
              <LogIn className="h-5 w-5 mr-2" />
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);