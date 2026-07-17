import { useState } from 'react';
import { Search, Mail, Phone, Star, MapPin } from 'lucide-react';

const customers = [
  { id: 1, name: 'Rahim Ahmed', email: 'rahim@gmail.com', phone: '+880 1712-345678', orders: 12, spent: 45200, address: 'Dhanmondi, Dhaka', rating: 4.8 },
  { id: 2, name: 'Sadia Islam', email: 'sadia@email.com', phone: '+880 1812-987654', orders: 8, spent: 28900, address: 'Gulshan, Dhaka', rating: 4.5 },
  { id: 3, name: 'Karim Khan', email: 'karim@yahoo.com', phone: '+880 1912-456789', orders: 15, spent: 67800, address: 'Banani, Dhaka', rating: 4.9 },
  { id: 4, name: 'Fatima Begum', email: 'fatima@gmail.com', phone: '+880 1612-789012', orders: 5, spent: 12300, address: 'Mirpur, Dhaka', rating: 4.2 },
];

export default function AdminCustomers() {
  const [search, setSearch] = useState('');
  const filtered = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search customers..."
          className="pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-red-300 outline-none w-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((c) => (
          <div key={c.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center text-white text-lg font-bold">{c.name.charAt(0)}</div>
              <div>
                <h3 className="font-bold text-gray-900">{c.name}</h3>
                <div className="flex items-center gap-1 text-xs text-gray-400"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {c.rating}</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> {c.email}</div>
              <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> {c.phone}</div>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {c.address}</div>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-50 text-center">
              <div><p className="text-lg font-bold">{c.orders}</p><p className="text-[10px] text-gray-400">Orders</p></div>
              <div><p className="text-lg font-bold text-red-600">৳{(c.spent/1000).toFixed(1)}k</p><p className="text-[10px] text-gray-400">Spent</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
