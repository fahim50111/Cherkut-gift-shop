import { motion } from 'framer-motion';
import { Package, ShoppingBag, Users, TrendingUp, DollarSign, Eye } from 'lucide-react';

const stats = [
  { label: 'Total Revenue', value: '৳2,45,800', change: '+12.5%', icon: DollarSign, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Orders', value: '1,284', change: '+8.2%', icon: ShoppingBag, color: 'bg-blue-50 text-blue-600' },
  { label: 'Products', value: '156', change: '+3.1%', icon: Package, color: 'bg-amber-50 text-amber-600' },
  { label: 'Customers', value: '892', change: '+15.3%', icon: Users, color: 'bg-purple-50 text-purple-600' },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'Rahim Ahmed', total: 5497, status: 'Delivered' },
  { id: '#ORD-002', customer: 'Sadia Islam', total: 1899, status: 'Processing' },
  { id: '#ORD-003', customer: 'Karim Khan', total: 4898, status: 'Shipped' },
  { id: '#ORD-004', customer: 'Fatima Begum', total: 799, status: 'Pending' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}><stat.icon className="w-5 h-5" /></div>
              <span className="text-xs font-semibold text-emerald-600">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-bold text-gray-900">Recent Orders</h2>
          <button className="text-sm text-red-600 font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-50">
                <th className="px-5 py-3 font-medium">Order</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-3.5 text-sm font-bold">{o.id}</td>
                  <td className="px-5 py-3.5 text-sm">{o.customer}</td>
                  <td className="px-5 py-3.5 text-sm font-bold">৳{o.total.toLocaleString()}</td>
                  <td className="px-5 py-3.5"><span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
