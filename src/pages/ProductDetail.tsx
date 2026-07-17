import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, ArrowLeft, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useProduct } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Spinner from '../components/Spinner';

export default function ProductDetail() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id ? parseInt(id) : null);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [added, setAdded] = useState(false);

  if (loading) return <div className="flex justify-center py-24"><Spinner className="w-10 h-10" /></div>;
  if (error || !product) return <div className="text-center py-24 text-gray-500">Product not found</div>;

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    toast.success('Added to cart!');
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 mb-6"><ArrowLeft className="w-4 h-4" /> Back</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          {product.badge && <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">{product.badge}</span>}
          <h1 className="text-2xl font-bold text-gray-900 mt-3 mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-red-600">৳{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && <span className="text-lg text-gray-400 line-through">৳{product.originalPrice.toLocaleString()}</span>}
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
          <div className="flex gap-3">
            <button onClick={handleAdd} className={`flex-1 py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 ${added ? 'bg-emerald-500' : 'bg-red-600 hover:bg-red-700'}`}>
              {added ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
              {added ? 'Added' : 'Add to Cart'}
            </button>
            <button onClick={() => toggleWishlist(product)} className={`w-12 h-12 rounded-xl border flex items-center justify-center ${isInWishlist(product.id) ? 'bg-red-50 border-red-200 text-red-600' : 'border-gray-200 text-gray-400'}`}>
              <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
