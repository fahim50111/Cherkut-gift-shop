import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  ShoppingCart,
  User,
  Search,
  Heart,
  Bell,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const location = useLocation();
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/cart', label: 'Cart', icon: ShoppingCart, badge: totalItems },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <>
      {/* Top Promo Bar */}
      <div className="bg-red-700 text-white text-[11px] py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="hidden sm:inline">Free delivery on orders over ৳2,000 | Same day delivery in Dhaka</span>
          <div className="flex items-center gap-4 ml-auto">
            <span className="flex items-center gap-1 cursor-pointer hover:underline">
              <MessageCircle className="w-3 h-3" /> Help
            </span>
            <span className="hidden sm:flex items-center gap-1 cursor-pointer hover:underline">
              English <ChevronDown className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        } bg-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 h-[52px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="text-sm font-bold text-gray-900">Chirkut</span>
                <span className="text-[10px] block text-gray-500">Gift Shop</span>
              </div>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search gifts..."
                  className="w-full pl-9 pr-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-2 focus:ring-red-200 outline-none"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-1">
              <Link
                to="/wishlist"
                className="relative flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 bg-red-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <button className="relative flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:hidden">
        <div className="flex items-center justify-around h-[52px]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center gap-0.5 px-4 py-1 min-w-[64px]"
              >
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? 'text-red-600' : 'text-gray-400'
                    }`}
                  />
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-[14px] h-[14px] px-0.5 bg-red-600 text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? 'text-red-600' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-dot"
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
