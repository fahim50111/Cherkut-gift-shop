import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Add some gifts to get started!</p>
        <Link to="/" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart ({totalItems})</h1>
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <motion.div key={item.product.id} layout className="flex gap-4 bg-white p-4 rounded-2xl border border-gray-100">
            <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-xl" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
              <p className="text-red-600 font-bold">৳{item.product.price.toLocaleString()}</p>
              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"><Minus className="w-4 h-4" /></button>
                <span className="font-semibold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"><Plus className="w-4 h-4" /></button>
                <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total</span>
          <span className="text-red-600">৳{totalPrice.toLocaleString()}</span>
        </div>
        <button className="w-full py-3 bg-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-red-700">
          Checkout <ArrowRight className="w-4 h-4" />
        </button>
        <button onClick={clearCart} className="w-full mt-3 py-2 text-sm text-gray-500 hover:text-red-600">Clear Cart</button>
      </div>
    </div>
  );
}
