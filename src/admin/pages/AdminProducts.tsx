import { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

const products = [
  { id: 1, name: 'Premium Rose Bouquet', price: 2499, stock: 45, category: 'Flowers' },
  { id: 2, name: 'Belgian Chocolate Box', price: 1899, stock: 120, category: 'Chocolates' },
  { id: 3, name: 'Giant Teddy Bear', price: 3299, stock: 28, category: 'Toys' },
  { id: 4, name: 'Personalized Ceramic Mug', price: 799, stock: 200, category: 'Mugs' },
  { id: 5, name: 'Aromatherapy Candle Set', price: 1599, stock: 67, category: 'Candles' },
  { id: 6, name: 'Silver Heart Necklace', price: 4599, stock: 15, category: 'Jewelry' },
];

export default function AdminProducts() {
  const [search, setSearch] = useState('');
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..."
            className="pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-red-300 outline-none w-64" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-50 bg-gray-50/50">
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Price</th>
              <th className="px-5 py-3 font-medium">Stock</th>
              <th className="px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                <td className="px-5 py-3.5 text-sm font-semibold">{p.name}</td>
                <td className="px-5 py-3.5 text-sm text-gray-500">{p.category}</td>
                <td className="px-5 py-3.5 text-sm font-bold">৳{p.price.toLocaleString()}</td>
                <td className="px-5 py-3.5 text-sm">{p.stock}</td>
                <td className="px-5 py-3.5">
                  <div className="flex gap-1">
                    <button className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50"><Edit className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
