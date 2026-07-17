import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [added, setAdded] = useState(false);

  const liked = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowLiked = toggleWishlist(product);
    if (nowLiked) {
      toast.success(`${product.name} added to wishlist!`);
    } else {
      toast.info(`${product.name} removed from wishlist`);
    }
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
          <div className="relative overflow-hidden aspect-square bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-2 left-2 flex flex-col gap-1.5">
              {discount > 0 && (
                <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded">
                  -{discount}%
                </span>
              )}
              {product.badge && (
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-bold rounded">
                  {product.badge}
                </span>
              )}
            </div>
            <button
              onClick={handleToggleWishlist}
              className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                liked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-white' : ''}`} />
            </button>
          </div>
          <div className="p-3">
            <div className="flex items-center gap-1 mb-1.5">
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
              </div>
              <span className="text-[10px] text-gray-400">({product.reviews})</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
              {product.name}
            </h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-base font-bold text-red-600">৳{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through">৳{product.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-emerald-600 font-medium">In Stock</p>
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                  added
                    ? 'bg-emerald-500 text-white'
                    : 'bg-red-600 text-white hover:bg-red-700 shadow-sm'
                }`}
              >
                {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
